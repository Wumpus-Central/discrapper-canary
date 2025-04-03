var r = n(660566);
(e.exports = E), (e.exports.parse = o), (e.exports.compile = a), (e.exports.tokensToFunction = c), (e.exports.tokensToRegExp = g);
var i = RegExp('(\\\\.)|([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))', 'g');
function o(e, t) {
    for (var n, r = [], o = 0, a = 0, s = '', l = (t && t.delimiter) || '/'; null != (n = i.exec(e)); ) {
        var c = n[0],
            f = n[1],
            _ = n.index;
        if (((s += e.slice(a, _)), (a = _ + c.length), f)) {
            s += f[1];
            continue;
        }
        var p = e[a],
            h = n[2],
            m = n[3],
            g = n[4],
            E = n[5],
            b = n[6],
            y = n[7];
        s && (r.push(s), (s = ''));
        var v = null != h && null != p && p !== h,
            O = '+' === b || '*' === b,
            I = '?' === b || '*' === b,
            S = n[2] || l,
            T = g || E;
        r.push({
            name: m || o++,
            prefix: h || '',
            delimiter: S,
            optional: I,
            repeat: O,
            partial: v,
            asterisk: !!y,
            pattern: T ? d(T) : y ? '.*' : '[^' + u(S) + ']+?'
        });
    }
    return a < e.length && (s += e.substr(a)), s && r.push(s), r;
}
function a(e, t) {
    return c(o(e, t));
}
function s(e) {
    return encodeURI(e).replace(/[\/?#]/g, function (e) {
        return '%' + e.charCodeAt(0).toString(16).toUpperCase();
    });
}
function l(e) {
    return encodeURI(e).replace(/[?#]/g, function (e) {
        return '%' + e.charCodeAt(0).toString(16).toUpperCase();
    });
}
function c(e) {
    for (var t = Array(e.length), n = 0; n < e.length; n++) 'object' == typeof e[n] && (t[n] = RegExp('^(?:' + e[n].pattern + ')$'));
    return function (n, i) {
        for (var o = '', a = n || {}, c = (i || {}).pretty ? s : encodeURIComponent, u = 0; u < e.length; u++) {
            var d,
                f = e[u];
            if ('string' == typeof f) {
                o += f;
                continue;
            }
            var _ = a[f.name];
            if (null == _)
                if (f.optional) {
                    f.partial && (o += f.prefix);
                    continue;
                } else throw TypeError('Expected "' + f.name + '" to be defined');
            if (r(_)) {
                if (!f.repeat) throw TypeError('Expected "' + f.name + '" to not repeat, but received `' + JSON.stringify(_) + '`');
                if (0 === _.length)
                    if (f.optional) continue;
                    else throw TypeError('Expected "' + f.name + '" to not be empty');
                for (var p = 0; p < _.length; p++) {
                    if (((d = c(_[p])), !t[u].test(d))) throw TypeError('Expected all "' + f.name + '" to match "' + f.pattern + '", but received `' + JSON.stringify(d) + '`');
                    o += (0 === p ? f.prefix : f.delimiter) + d;
                }
                continue;
            }
            if (((d = f.asterisk ? l(_) : c(_)), !t[u].test(d))) throw TypeError('Expected "' + f.name + '" to match "' + f.pattern + '", but received "' + d + '"');
            o += f.prefix + d;
        }
        return o;
    };
}
function u(e) {
    return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1');
}
function d(e) {
    return e.replace(/([=!:$\/()])/g, '\\$1');
}
function f(e, t) {
    return (e.keys = t), e;
}
function _(e) {
    return e.sensitive ? '' : 'i';
}
function p(e, t) {
    var n = e.source.match(/\((?!\?)/g);
    if (n)
        for (var r = 0; r < n.length; r++)
            t.push({
                name: r,
                prefix: null,
                delimiter: null,
                optional: !1,
                repeat: !1,
                partial: !1,
                asterisk: !1,
                pattern: null
            });
    return f(e, t);
}
function h(e, t, n) {
    for (var r = [], i = 0; i < e.length; i++) r.push(E(e[i], t, n).source);
    return f(RegExp('(?:' + r.join('|') + ')', _(n)), t);
}
function m(e, t, n) {
    return g(o(e, n), t, n);
}
function g(e, t, n) {
    r(t) || ((n = t || n), (t = []));
    for (var i = (n = n || {}).strict, o = !1 !== n.end, a = '', s = 0; s < e.length; s++) {
        var l = e[s];
        if ('string' == typeof l) a += u(l);
        else {
            var c = u(l.prefix),
                d = '(?:' + l.pattern + ')';
            t.push(l), l.repeat && (d += '(?:' + c + d + ')*'), (a += d = l.optional ? (l.partial ? c + '(' + d + ')?' : '(?:' + c + '(' + d + '))?') : c + '(' + d + ')');
        }
    }
    var p = u(n.delimiter || '/'),
        h = a.slice(-p.length) === p;
    return i || (a = (h ? a.slice(0, -p.length) : a) + '(?:' + p + '(?=$))?'), o ? (a += '$') : (a += i && h ? '' : '(?=' + p + '|$)'), f(RegExp('^' + a, _(n)), t);
}
function E(e, t, n) {
    return (r(t) || ((n = t || n), (t = [])), (n = n || {}), e instanceof RegExp) ? p(e, t) : r(e) ? h(e, t, n) : m(e, t, n);
}
