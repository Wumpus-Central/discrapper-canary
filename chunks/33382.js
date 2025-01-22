var i = r(660566);
(e.exports = v), (e.exports.parse = o), (e.exports.compile = s), (e.exports.tokensToFunction = c), (e.exports.tokensToRegExp = E);
var a = RegExp('(\\\\.)|([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))', 'g');
function o(e, n) {
    for (var r, i = [], o = 0, s = 0, l = '', u = (n && n.delimiter) || '/'; null != (r = a.exec(e)); ) {
        var c = r[0],
            p = r[1],
            h = r.index;
        if (((l += e.slice(s, h)), (s = h + c.length), p)) {
            l += p[1];
            continue;
        }
        var _ = e[s],
            m = r[2],
            g = r[3],
            E = r[4],
            v = r[5],
            y = r[6],
            b = r[7];
        l && (i.push(l), (l = ''));
        var I = null != m && null != _ && _ !== m,
            T = '+' === y || '*' === y,
            S = '?' === y || '*' === y,
            A = r[2] || u,
            C = E || v;
        i.push({
            name: g || o++,
            prefix: m || '',
            delimiter: A,
            optional: S,
            repeat: T,
            partial: I,
            asterisk: !!b,
            pattern: C ? f(C) : b ? '.*' : '[^' + d(A) + ']+?'
        });
    }
    return s < e.length && (l += e.substr(s)), l && i.push(l), i;
}
function s(e, n) {
    return c(o(e, n));
}
function l(e) {
    return encodeURI(e).replace(/[\/?#]/g, function (e) {
        return '%' + e.charCodeAt(0).toString(16).toUpperCase();
    });
}
function u(e) {
    return encodeURI(e).replace(/[?#]/g, function (e) {
        return '%' + e.charCodeAt(0).toString(16).toUpperCase();
    });
}
function c(e) {
    for (var n = Array(e.length), r = 0; r < e.length; r++) 'object' == typeof e[r] && (n[r] = RegExp('^(?:' + e[r].pattern + ')$'));
    return function (r, a) {
        for (var o = '', s = r || {}, c = (a || {}).pretty ? l : encodeURIComponent, d = 0; d < e.length; d++) {
            var f,
                p = e[d];
            if ('string' == typeof p) {
                o += p;
                continue;
            }
            var h = s[p.name];
            if (null == h) {
                if (p.optional) {
                    p.partial && (o += p.prefix);
                    continue;
                }
                throw TypeError('Expected "' + p.name + '" to be defined');
            }
            if (i(h)) {
                if (!p.repeat) throw TypeError('Expected "' + p.name + '" to not repeat, but received `' + JSON.stringify(h) + '`');
                if (0 === h.length) {
                    if (p.optional) continue;
                    throw TypeError('Expected "' + p.name + '" to not be empty');
                }
                for (var _ = 0; _ < h.length; _++) {
                    if (((f = c(h[_])), !n[d].test(f))) throw TypeError('Expected all "' + p.name + '" to match "' + p.pattern + '", but received `' + JSON.stringify(f) + '`');
                    o += (0 === _ ? p.prefix : p.delimiter) + f;
                }
                continue;
            }
            if (((f = p.asterisk ? u(h) : c(h)), !n[d].test(f))) throw TypeError('Expected "' + p.name + '" to match "' + p.pattern + '", but received "' + f + '"');
            o += p.prefix + f;
        }
        return o;
    };
}
function d(e) {
    return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1');
}
function f(e) {
    return e.replace(/([=!:$\/()])/g, '\\$1');
}
function p(e, n) {
    return (e.keys = n), e;
}
function h(e) {
    return e.sensitive ? '' : 'i';
}
function _(e, n) {
    var r = e.source.match(/\((?!\?)/g);
    if (r)
        for (var i = 0; i < r.length; i++)
            n.push({
                name: i,
                prefix: null,
                delimiter: null,
                optional: !1,
                repeat: !1,
                partial: !1,
                asterisk: !1,
                pattern: null
            });
    return p(e, n);
}
function m(e, n, r) {
    for (var i = [], a = 0; a < e.length; a++) i.push(v(e[a], n, r).source);
    return p(RegExp('(?:' + i.join('|') + ')', h(r)), n);
}
function g(e, n, r) {
    return E(o(e, r), n, r);
}
function E(e, n, r) {
    !i(n) && ((r = n || r), (n = []));
    for (var a = (r = r || {}).strict, o = !1 !== r.end, s = '', l = 0; l < e.length; l++) {
        var u = e[l];
        if ('string' == typeof u) s += d(u);
        else {
            var c = d(u.prefix),
                f = '(?:' + u.pattern + ')';
            n.push(u), u.repeat && (f += '(?:' + c + f + ')*'), (s += f = u.optional ? (u.partial ? c + '(' + f + ')?' : '(?:' + c + '(' + f + '))?') : c + '(' + f + ')');
        }
    }
    var _ = d(r.delimiter || '/'),
        m = s.slice(-_.length) === _;
    return !a && (s = (m ? s.slice(0, -_.length) : s) + '(?:' + _ + '(?=$))?'), o ? (s += '$') : (s += a && m ? '' : '(?=' + _ + '|$)'), p(RegExp('^' + s, h(r)), n);
}
function v(e, n, r) {
    return (!i(n) && ((r = n || r), (n = [])), (r = r || {}), e instanceof RegExp) ? _(e, n) : i(e) ? m(e, n, r) : g(e, n, r);
}
