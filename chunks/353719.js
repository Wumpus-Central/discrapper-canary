var n = r(271434);
(e.exports = function e(t, r, a) {
    if ((n(r) || ((a = r || a), (r = [])), (a = a || {}), t instanceof RegExp)) {
        var i,
            s,
            l = r,
            h = t.source.match(/\((?!\?)/g);
        if (h)
            for (var p = 0; p < h.length; p++)
                l.push({
                    name: p,
                    prefix: null,
                    delimiter: null,
                    optional: !1,
                    repeat: !1,
                    partial: !1,
                    asterisk: !1,
                    pattern: null,
                });
        return (t.keys = l), t;
    }
    if (n(t)) {
        for (var f, d = r, m = a, g = [], b = 0; b < t.length; b++) g.push(e(t[b], d, m).source);
        return ((f = RegExp("(?:" + g.join("|") + ")", c(m))).keys = d), f;
    }
    return (i = r), u(o(t, (s = a)), i, s);
}),
    (e.exports.parse = o),
    (e.exports.compile = function (e, t) {
        return s(o(e, t));
    }),
    (e.exports.tokensToFunction = s),
    (e.exports.tokensToRegExp = u);
var a = RegExp(
    "(\\\\.)|([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))",
    "g",
);
function o(e, t) {
    for (var r, n = [], o = 0, i = 0, s = "", c = (t && t.delimiter) || "/"; null != (r = a.exec(e)); ) {
        var u = r[0],
            h = r[1],
            p = r.index;
        if (((s += e.slice(i, p)), (i = p + u.length), h)) {
            s += h[1];
            continue;
        }
        var f = e[i],
            d = r[2],
            m = r[3],
            g = r[4],
            b = r[5],
            y = r[6],
            v = r[7];
        s && (n.push(s), (s = ""));
        var w = null != d && null != f && f !== d,
            _ = "+" === y || "*" === y,
            M = "?" === y || "*" === y,
            x = r[2] || c,
            C = g || b;
        n.push({
            name: m || o++,
            prefix: d || "",
            delimiter: x,
            optional: M,
            repeat: _,
            partial: w,
            asterisk: !!v,
            pattern: C ? C.replace(/([=!:$\/()])/g, "\\$1") : v ? ".*" : "[^" + l(x) + "]+?",
        });
    }
    return i < e.length && (s += e.substr(i)), s && n.push(s), n;
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
            var p = s[h.name];
            if (null == p)
                if (h.optional) {
                    h.partial && (o += h.prefix);
                    continue;
                } else throw TypeError('Expected "' + h.name + '" to be defined');
            if (n(p)) {
                if (!h.repeat)
                    throw TypeError(
                        'Expected "' + h.name + '" to not repeat, but received `' + JSON.stringify(p) + "`",
                    );
                if (0 === p.length)
                    if (h.optional) continue;
                    else throw TypeError('Expected "' + h.name + '" to not be empty');
                for (var f = 0; f < p.length; f++) {
                    if (((u = l(p[f])), !t[c].test(u)))
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
                    ? encodeURI(p).replace(/[?#]/g, function (e) {
                          return "%" + e.charCodeAt(0).toString(16).toUpperCase();
                      })
                    : l(p)),
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
            var p = l(h.prefix),
                f = "(?:" + h.pattern + ")";
            t.push(h),
                h.repeat && (f += "(?:" + p + f + ")*"),
                (s += f =
                    h.optional ? (h.partial ? p + "(" + f + ")?" : "(?:" + p + "(" + f + "))?") : p + "(" + f + ")");
        }
    }
    var d = l(r.delimiter || "/"),
        m = s.slice(-d.length) === d;
    return (
        o || (s = (m ? s.slice(0, -d.length) : s) + "(?:" + d + "(?=$))?"),
        i ? (s += "$") : (s += o && m ? "" : "(?=" + d + "|$)"),
        ((a = RegExp("^" + s, c(r))).keys = t),
        a
    );
}
