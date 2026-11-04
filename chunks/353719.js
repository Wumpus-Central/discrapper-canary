var n = r(271434);
((e.exports = function e(t, r, o) {
    if ((n(r) || ((o = r || o), (r = [])), (o = o || {}), t instanceof RegExp)) {
        var i,
            s,
            l = r,
            h = t.source.match(/\((?!\?)/g);
        if (h)
            for (var f = 0; f < h.length; f++)
                l.push({
                    name: f,
                    prefix: null,
                    delimiter: null,
                    optional: !1,
                    repeat: !1,
                    partial: !1,
                    asterisk: !1,
                    pattern: null,
                });
        return ((t.keys = l), t);
    }
    if (n(t)) {
        for (var d, p = r, g = o, m = [], b = 0; b < t.length; b++) m.push(e(t[b], p, g).source);
        return (((d = RegExp("(?:" + m.join("|") + ")", c(g))).keys = p), d);
    }
    return ((i = r), u(a(t, (s = o)), i, s));
}),
    (e.exports.parse = a),
    (e.exports.compile = function (e, t) {
        return s(a(e, t));
    }),
    (e.exports.tokensToFunction = s),
    (e.exports.tokensToRegExp = u));
var o = RegExp(
    "(\\\\.)|([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))",
    "g",
);
function a(e, t) {
    for (var r, n = [], a = 0, i = 0, s = "", c = (t && t.delimiter) || "/"; null != (r = o.exec(e));) {
        var u = r[0],
            h = r[1],
            f = r.index;
        if (((s += e.slice(i, f)), (i = f + u.length), h)) {
            s += h[1];
            continue;
        }
        var d = e[i],
            p = r[2],
            g = r[3],
            m = r[4],
            b = r[5],
            _ = r[6],
            y = r[7];
        s && (n.push(s), (s = ""));
        var w = null != p && null != d && d !== p,
            v = "+" === _ || "*" === _,
            M = "?" === _ || "*" === _,
            x = r[2] || c,
            C = m || b;
        n.push({
            name: g || a++,
            prefix: p || "",
            delimiter: x,
            optional: M,
            repeat: v,
            partial: w,
            asterisk: !!y,
            pattern: C ? C.replace(/([=!:$\/()])/g, "\\$1") : y ? ".*" : "[^" + l(x) + "]+?",
        });
    }
    return (i < e.length && (s += e.substr(i)), s && n.push(s), n);
}
function i(e) {
    return encodeURI(e).replace(/[\/?#]/g, function (e) {
        return "%" + e.charCodeAt(0).toString(16).toUpperCase();
    });
}
function s(e) {
    for (var t = Array(e.length), r = 0; r < e.length; r++)
        "object" == typeof e[r] && (t[r] = RegExp("^(?:" + e[r].pattern + ")$"));
    return function (r, o) {
        for (var a = "", s = r || {}, l = (o || {}).pretty ? i : encodeURIComponent, c = 0; c < e.length; c++) {
            var u,
                h = e[c];
            if ("string" == typeof h) {
                a += h;
                continue;
            }
            var f = s[h.name];
            if (null == f)
                if (h.optional) {
                    h.partial && (a += h.prefix);
                    continue;
                } else throw TypeError('Expected "' + h.name + '" to be defined');
            if (n(f)) {
                if (!h.repeat)
                    throw TypeError(
                        'Expected "' + h.name + '" to not repeat, but received `' + JSON.stringify(f) + "`",
                    );
                if (0 === f.length)
                    if (h.optional) continue;
                    else throw TypeError('Expected "' + h.name + '" to not be empty');
                for (var d = 0; d < f.length; d++) {
                    if (((u = l(f[d])), !t[c].test(u)))
                        throw TypeError(
                            'Expected all "' +
                                h.name +
                                '" to match "' +
                                h.pattern +
                                '", but received `' +
                                JSON.stringify(u) +
                                "`",
                        );
                    a += (0 === d ? h.prefix : h.delimiter) + u;
                }
                continue;
            }
            if (
                ((u = h.asterisk
                    ? encodeURI(f).replace(/[?#]/g, function (e) {
                          return "%" + e.charCodeAt(0).toString(16).toUpperCase();
                      })
                    : l(f)),
                !t[c].test(u))
            )
                throw TypeError('Expected "' + h.name + '" to match "' + h.pattern + '", but received "' + u + '"');
            a += h.prefix + u;
        }
        return a;
    };
}
function l(e) {
    return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1");
}
function c(e) {
    return e.sensitive ? "" : "i";
}
function u(e, t, r) {
    n(t) || ((r = t || r), (t = []));
    for (var o, a = (r = r || {}).strict, i = !1 !== r.end, s = "", u = 0; u < e.length; u++) {
        var h = e[u];
        if ("string" == typeof h) s += l(h);
        else {
            var f = l(h.prefix),
                d = "(?:" + h.pattern + ")";
            (t.push(h),
                h.repeat && (d += "(?:" + f + d + ")*"),
                (s += d =
                    h.optional ? (h.partial ? f + "(" + d + ")?" : "(?:" + f + "(" + d + "))?") : f + "(" + d + ")"));
        }
    }
    var p = l(r.delimiter || "/"),
        g = s.slice(-p.length) === p;
    return (
        a || (s = (g ? s.slice(0, -p.length) : s) + "(?:" + p + "(?=$))?"),
        i ? (s += "$") : (s += a && g ? "" : "(?=" + p + "|$)"),
        ((o = RegExp("^" + s, c(r))).keys = t),
        o
    );
}
