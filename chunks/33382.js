var i = n(660566);
(e.exports = E), (e.exports.parse = a), (e.exports.compile = s), (e.exports.tokensToFunction = u), (e.exports.tokensToRegExp = g);
var r = RegExp('(\\\\.)|([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))', 'g');
function a(e, t) {
    for (var n, i = [], a = 0, s = 0, o = '', l = (t && t.delimiter) || '/'; null != (n = r.exec(e)); ) {
        var u = n[0],
            f = n[1],
            _ = n.index;
        if (((o += e.slice(s, _)), (s = _ + u.length), f)) {
            o += f[1];
            continue;
        }
        var p = e[s],
            h = n[2],
            m = n[3],
            g = n[4],
            E = n[5],
            v = n[6],
            y = n[7];
        o && (i.push(o), (o = ''));
        var I = null != h && null != p && p !== h,
            b = '+' === v || '*' === v,
            T = '?' === v || '*' === v,
            S = n[2] || l,
            A = g || E;
        i.push({
            name: m || a++,
            prefix: h || '',
            delimiter: S,
            optional: T,
            repeat: b,
            partial: I,
            asterisk: !!y,
            pattern: A ? d(A) : y ? '.*' : '[^' + c(S) + ']+?'
        });
    }
    return s < e.length && (o += e.substr(s)), o && i.push(o), i;
}
function s(e, t) {
    return u(a(e, t));
}
function o(e) {
    return encodeURI(e).replace(/[\/?#]/g, function (e) {
        return '%' + e.charCodeAt(0).toString(16).toUpperCase();
    });
}
function l(e) {
    return encodeURI(e).replace(/[?#]/g, function (e) {
        return '%' + e.charCodeAt(0).toString(16).toUpperCase();
    });
}
function u(e) {
    for (var t = Array(e.length), n = 0; n < e.length; n++) 'object' == typeof e[n] && (t[n] = RegExp('^(?:' + e[n].pattern + ')$'));
    return function (n, r) {
        for (var a = '', s = n || {}, u = (r || {}).pretty ? o : encodeURIComponent, c = 0; c < e.length; c++) {
            var d,
                f = e[c];
            if ('string' == typeof f) {
                a += f;
                continue;
            }
            var _ = s[f.name];
            if (null == _) {
                if (f.optional) {
                    f.partial && (a += f.prefix);
                    continue;
                }
                throw TypeError('Expected "' + f.name + '" to be defined');
            }
            if (i(_)) {
                if (!f.repeat) throw TypeError('Expected "' + f.name + '" to not repeat, but received `' + JSON.stringify(_) + '`');
                if (0 === _.length) {
                    if (f.optional) continue;
                    throw TypeError('Expected "' + f.name + '" to not be empty');
                }
                for (var p = 0; p < _.length; p++) {
                    if (((d = u(_[p])), !t[c].test(d))) throw TypeError('Expected all "' + f.name + '" to match "' + f.pattern + '", but received `' + JSON.stringify(d) + '`');
                    a += (0 === p ? f.prefix : f.delimiter) + d;
                }
                continue;
            }
            if (((d = f.asterisk ? l(_) : u(_)), !t[c].test(d))) throw TypeError('Expected "' + f.name + '" to match "' + f.pattern + '", but received "' + d + '"');
            a += f.prefix + d;
        }
        return a;
    };
}
function c(e) {
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
        for (var i = 0; i < n.length; i++)
            t.push({
                name: i,
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
    for (var i = [], r = 0; r < e.length; r++) i.push(E(e[r], t, n).source);
    return f(RegExp('(?:' + i.join('|') + ')', _(n)), t);
}
function m(e, t, n) {
    return g(a(e, n), t, n);
}
function g(e, t, n) {
    i(t) || ((n = t || n), (t = []));
    for (var r = (n = n || {}).strict, a = !1 !== n.end, s = '', o = 0; o < e.length; o++) {
        var l = e[o];
        if ('string' == typeof l) s += c(l);
        else {
            var u = c(l.prefix),
                d = '(?:' + l.pattern + ')';
            t.push(l), l.repeat && (d += '(?:' + u + d + ')*'), (s += d = l.optional ? (l.partial ? u + '(' + d + ')?' : '(?:' + u + '(' + d + '))?') : u + '(' + d + ')');
        }
    }
    var p = c(n.delimiter || '/'),
        h = s.slice(-p.length) === p;
    return r || (s = (h ? s.slice(0, -p.length) : s) + '(?:' + p + '(?=$))?'), a ? (s += '$') : (s += r && h ? '' : '(?=' + p + '|$)'), f(RegExp('^' + s, _(n)), t);
}
function E(e, t, n) {
    return (i(t) || ((n = t || n), (t = [])), (n = n || {}), e instanceof RegExp) ? p(e, t) : i(e) ? h(e, t, n) : m(e, t, n);
}
