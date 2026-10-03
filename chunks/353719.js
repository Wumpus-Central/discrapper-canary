var n = r(271434);
((e.exports = function e(t, r, a) {
    if ((n(r) || ((a = r || a), (r = [])), (a = a || {}), t instanceof RegExp)) {
        var i,
            s,
            l = r,
            h = t.source.match(/\((?!\?)/g);
        if (h)
            for (var d = 0; d < h.length; d++)
                l.push({
                    name: d,
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
        for (var f, p = r, m = a, g = [], y = 0; y < t.length; y++) g.push(e(t[y], p, m).source);
        return (((f = RegExp("(?:" + g.join("|") + ")", c(m))).keys = p), f);
    }
    return ((i = r), u(o(t, (s = a)), i, s));
}),
    (e.exports.parse = o),
    (e.exports.compile = function (e, t) {
        return s(o(e, t));
    }),
    (e.exports.tokensToFunction = s),
    (e.exports.tokensToRegExp = u));
var a = RegExp(
    "(\\\\.)|([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))",
    "g",
);
function o(e, t) {
    for (var r, n = [], o = 0, i = 0, s = "", c = (t && t.delimiter) || "/"; null != (r = a.exec(e));) {
        var u = r[0],
            h = r[1],
            d = r.index;
        if (((s += e.slice(i, d)), (i = d + u.length), h)) {
            s += h[1];
            continue;
        }
        var f = e[i],
            p = r[2],
            m = r[3],
            g = r[4],
            y = r[5],
            b = r[6],
            w = r[7];
        s && (n.push(s), (s = ""));
        var v = null != p && null != f && f !== p,
            M = "+" === b || "*" === b,
            x = "?" === b || "*" === b,
            _ = r[2] || c,
            C = g || y;
        n.push({
            name: m || o++,
            prefix: p || "",
            delimiter: _,
            optional: x,
            repeat: M,
            partial: v,
            asterisk: !!w,
            pattern: C ? C.replace(/([=!:$\/()])/g, "\\$1") : w ? ".*" : "[^" + l(_) + "]+?",
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
    return function (r, a) {
        for (var o = "", s = r || {}, l = (a || {}).pretty ? i : encodeURIComponent, c = 0; c < e.length; c++) {
            var u,
                h = e[c];
            if ("string" == typeof h) {
                o += h;
                continue;
            }
            var d = s[h.name];
            if (null == d)
                if (h.optional) {
                    h.partial && (o += h.prefix);
                    continue;
                } else throw TypeError('Expected "' + h.name + '" to be defined');
            if (n(d)) {
                if (!h.repeat)
                    throw TypeError(
                        'Expected "' + h.name + '" to not repeat, but received `' + JSON.stringify(d) + "`",
                    );
                if (0 === d.length)
                    if (h.optional) continue;
                    else throw TypeError('Expected "' + h.name + '" to not be empty');
                for (var f = 0; f < d.length; f++) {
                    if (((u = l(d[f])), !t[c].test(u)))
                        throw TypeError(
                            'Expected all "' +
                                h.name +
                                '" to match "' +
                                h.pattern +
                                '", but received `' +
                                JSON.stringify(u) +
                                "`",
                        );
                    o += (0 === f ? h.prefix : h.delimiter) + u;
                }
                continue;
            }
            if (
                ((u = h.asterisk
                    ? encodeURI(d).replace(/[?#]/g, function (e) {
                          return "%" + e.charCodeAt(0).toString(16).toUpperCase();
                      })
                    : l(d)),
                !t[c].test(u))
            )
                throw TypeError('Expected "' + h.name + '" to match "' + h.pattern + '", but received "' + u + '"');
            o += h.prefix + u;
        }
        return o;
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
    for (var a, o = (r = r || {}).strict, i = !1 !== r.end, s = "", u = 0; u < e.length; u++) {
        var h = e[u];
        if ("string" == typeof h) s += l(h);
        else {
            var d = l(h.prefix),
                f = "(?:" + h.pattern + ")";
            (t.push(h),
                h.repeat && (f += "(?:" + d + f + ")*"),
                (s += f =
                    h.optional ? (h.partial ? d + "(" + f + ")?" : "(?:" + d + "(" + f + "))?") : d + "(" + f + ")"));
        }
    }
    var p = l(r.delimiter || "/"),
        m = s.slice(-p.length) === p;
    return (
        o || (s = (m ? s.slice(0, -p.length) : s) + "(?:" + p + "(?=$))?"),
        i ? (s += "$") : (s += o && m ? "" : "(?=" + p + "|$)"),
        ((a = RegExp("^" + s, c(r))).keys = t),
        a
    );
}
