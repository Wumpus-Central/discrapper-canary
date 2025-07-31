var r = n(660566);
((e.exports = E), (e.exports.parse = a), (e.exports.compile = o), (e.exports.tokensToFunction = c), (e.exports.tokensToRegExp = g));
var i = RegExp('(\\\\.)|([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))', 'g');
function a(e, t) {
    for (var n, r = [], a = 0, o = 0, s = '', l = (t && t.delimiter) || '/'; null != (n = i.exec(e)); ) {
        var c = n[0],
            _ = n[1],
            f = n.index;
        if (((s += e.slice(o, f)), (o = f + c.length), _)) {
            s += _[1];
            continue;
        }
        var p = e[o],
            h = n[2],
            m = n[3],
            g = n[4],
            E = n[5],
            b = n[6],
            y = n[7];
        s && (r.push(s), (s = ''));
        var O = null != h && null != p && p !== h,
            v = '+' === b || '*' === b,
            I = '?' === b || '*' === b,
            T = n[2] || l,
            S = g || E;
        r.push({
            name: m || a++,
            prefix: h || '',
            delimiter: T,
            optional: I,
            repeat: v,
            partial: O,
            asterisk: !!y,
            pattern: S ? d(S) : y ? '.*' : '[^' + u(T) + ']+?'
        });
    }
    return (o < e.length && (s += e.substr(o)), s && r.push(s), r);
}
function o(e, t) {
    return c(a(e, t));
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
        for (var a = '', o = n || {}, c = (i || {}).pretty ? s : encodeURIComponent, u = 0; u < e.length; u++) {
            var d,
                _ = e[u];
            if ('string' == typeof _) {
                a += _;
                continue;
            }
            var f = o[_.name];
            if (null == f)
                if (_.optional) {
                    _.partial && (a += _.prefix);
                    continue;
                } else throw TypeError('Expected "' + _.name + '" to be defined');
            if (r(f)) {
                if (!_.repeat) throw TypeError('Expected "' + _.name + '" to not repeat, but received `' + JSON.stringify(f) + '`');
                if (0 === f.length)
                    if (_.optional) continue;
                    else throw TypeError('Expected "' + _.name + '" to not be empty');
                for (var p = 0; p < f.length; p++) {
                    if (((d = c(f[p])), !t[u].test(d))) throw TypeError('Expected all "' + _.name + '" to match "' + _.pattern + '", but received `' + JSON.stringify(d) + '`');
                    a += (0 === p ? _.prefix : _.delimiter) + d;
                }
                continue;
            }
            if (((d = _.asterisk ? l(f) : c(f)), !t[u].test(d))) throw TypeError('Expected "' + _.name + '" to match "' + _.pattern + '", but received "' + d + '"');
            a += _.prefix + d;
        }
        return a;
    };
}
function u(e) {
    return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1');
}
function d(e) {
    return e.replace(/([=!:$\/()])/g, '\\$1');
}
function _(e, t) {
    return ((e.keys = t), e);
}
function f(e) {
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
    return _(e, t);
}
function h(e, t, n) {
    for (var r = [], i = 0; i < e.length; i++) r.push(E(e[i], t, n).source);
    return _(RegExp('(?:' + r.join('|') + ')', f(n)), t);
}
function m(e, t, n) {
    return g(a(e, n), t, n);
}
function g(e, t, n) {
    r(t) || ((n = t || n), (t = []));
    for (var i = (n = n || {}).strict, a = !1 !== n.end, o = '', s = 0; s < e.length; s++) {
        var l = e[s];
        if ('string' == typeof l) o += u(l);
        else {
            var c = u(l.prefix),
                d = '(?:' + l.pattern + ')';
            (t.push(l), l.repeat && (d += '(?:' + c + d + ')*'), (o += d = l.optional ? (l.partial ? c + '(' + d + ')?' : '(?:' + c + '(' + d + '))?') : c + '(' + d + ')'));
        }
    }
    var p = u(n.delimiter || '/'),
        h = o.slice(-p.length) === p;
    return (i || (o = (h ? o.slice(0, -p.length) : o) + '(?:' + p + '(?=$))?'), a ? (o += '$') : (o += i && h ? '' : '(?=' + p + '|$)'), _(RegExp('^' + o, f(n)), t));
}
function E(e, t, n) {
    return (r(t) || ((n = t || n), (t = [])), (n = n || {}), e instanceof RegExp) ? p(e, t) : r(e) ? h(e, t, n) : m(e, t, n);
}
