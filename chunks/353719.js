var i = n(271434);
((t.exports = function t(e, n, r) {
    if ((i(n) || ((r = n || r), (n = [])), (r = r || {}), e instanceof RegExp)) {
        var a,
            s,
            c = n,
            h = e.source.match(/\((?!\?)/g);
        if (h)
            for (var f = 0; f < h.length; f++)
                c.push({
                    name: f,
                    prefix: null,
                    delimiter: null,
                    optional: !1,
                    repeat: !1,
                    partial: !1,
                    asterisk: !1,
                    pattern: null,
                });
        return ((e.keys = c), e);
    }
    if (i(e)) {
        for (var d, p = n, g = r, m = [], v = 0; v < e.length; v++) m.push(t(e[v], p, g).source);
        return (((d = RegExp("(?:" + m.join("|") + ")", u(g))).keys = p), d);
    }
    return ((a = n), l(o(e, (s = r)), a, s));
}),
    (t.exports.parse = o),
    (t.exports.compile = function (t, e) {
        return s(o(t, e));
    }),
    (t.exports.tokensToFunction = s),
    (t.exports.tokensToRegExp = l));
var r = RegExp(
    "(\\\\.)|([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))",
    "g",
);
function o(t, e) {
    for (var n, i = [], o = 0, a = 0, s = "", u = (e && e.delimiter) || "/"; null != (n = r.exec(t));) {
        var l = n[0],
            h = n[1],
            f = n.index;
        if (((s += t.slice(a, f)), (a = f + l.length), h)) {
            s += h[1];
            continue;
        }
        var d = t[a],
            p = n[2],
            g = n[3],
            m = n[4],
            v = n[5],
            y = n[6],
            _ = n[7];
        s && (i.push(s), (s = ""));
        var w = null != p && null != d && d !== p,
            b = "+" === y || "*" === y,
            x = "?" === y || "*" === y,
            E = n[2] || u,
            A = m || v;
        i.push({
            name: g || o++,
            prefix: p || "",
            delimiter: E,
            optional: x,
            repeat: b,
            partial: w,
            asterisk: !!_,
            pattern: A ? A.replace(/([=!:$\/()])/g, "\\$1") : _ ? ".*" : "[^" + c(E) + "]+?",
        });
    }
    return (a < t.length && (s += t.substr(a)), s && i.push(s), i);
}
function a(t) {
    return encodeURI(t).replace(/[\/?#]/g, function (t) {
        return "%" + t.charCodeAt(0).toString(16).toUpperCase();
    });
}
function s(t) {
    for (var e = Array(t.length), n = 0; n < t.length; n++)
        "object" == typeof t[n] && (e[n] = RegExp("^(?:" + t[n].pattern + ")$"));
    return function (n, r) {
        for (var o = "", s = n || {}, c = (r || {}).pretty ? a : encodeURIComponent, u = 0; u < t.length; u++) {
            var l,
                h = t[u];
            if ("string" == typeof h) {
                o += h;
                continue;
            }
            var f = s[h.name];
            if (null == f)
                if (h.optional) {
                    h.partial && (o += h.prefix);
                    continue;
                } else throw TypeError('Expected "' + h.name + '" to be defined');
            if (i(f)) {
                if (!h.repeat)
                    throw TypeError(
                        'Expected "' + h.name + '" to not repeat, but received `' + JSON.stringify(f) + "`",
                    );
                if (0 === f.length)
                    if (h.optional) continue;
                    else throw TypeError('Expected "' + h.name + '" to not be empty');
                for (var d = 0; d < f.length; d++) {
                    if (((l = c(f[d])), !e[u].test(l)))
                        throw TypeError(
                            'Expected all "' +
                                h.name +
                                '" to match "' +
                                h.pattern +
                                '", but received `' +
                                JSON.stringify(l) +
                                "`",
                        );
                    o += (0 === d ? h.prefix : h.delimiter) + l;
                }
                continue;
            }
            if (
                ((l = h.asterisk
                    ? encodeURI(f).replace(/[?#]/g, function (t) {
                          return "%" + t.charCodeAt(0).toString(16).toUpperCase();
                      })
                    : c(f)),
                !e[u].test(l))
            )
                throw TypeError('Expected "' + h.name + '" to match "' + h.pattern + '", but received "' + l + '"');
            o += h.prefix + l;
        }
        return o;
    };
}
function c(t) {
    return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1");
}
function u(t) {
    return t.sensitive ? "" : "i";
}
function l(t, e, n) {
    i(e) || ((n = e || n), (e = []));
    for (var r, o = (n = n || {}).strict, a = !1 !== n.end, s = "", l = 0; l < t.length; l++) {
        var h = t[l];
        if ("string" == typeof h) s += c(h);
        else {
            var f = c(h.prefix),
                d = "(?:" + h.pattern + ")";
            (e.push(h),
                h.repeat && (d += "(?:" + f + d + ")*"),
                (s += d =
                    h.optional ? (h.partial ? f + "(" + d + ")?" : "(?:" + f + "(" + d + "))?") : f + "(" + d + ")"));
        }
    }
    var p = c(n.delimiter || "/"),
        g = s.slice(-p.length) === p;
    return (
        o || (s = (g ? s.slice(0, -p.length) : s) + "(?:" + p + "(?=$))?"),
        a ? (s += "$") : (s += o && g ? "" : "(?=" + p + "|$)"),
        ((r = RegExp("^" + s, u(n))).keys = e),
        r
    );
}
