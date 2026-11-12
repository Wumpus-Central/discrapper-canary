var i = n(271434);
((t.exports = function t(e, n, r) {
    if ((i(n) || ((r = n || r), (n = [])), (r = r || {}), e instanceof RegExp)) {
        var a,
            s,
            c = n,
            h = e.source.match(/\((?!\?)/g);
        if (h)
            for (var p = 0; p < h.length; p++)
                c.push({
                    name: p,
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
        for (var f, d = n, g = r, _ = [], m = 0; m < e.length; m++) _.push(t(e[m], d, g).source);
        return (((f = RegExp("(?:" + _.join("|") + ")", l(g))).keys = d), f);
    }
    return ((a = n), u(o(e, (s = r)), a, s));
}),
    (t.exports.parse = o),
    (t.exports.compile = function (t, e) {
        return s(o(t, e));
    }),
    (t.exports.tokensToFunction = s),
    (t.exports.tokensToRegExp = u));
var r = RegExp(
    "(\\\\.)|([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))",
    "g",
);
function o(t, e) {
    for (var n, i = [], o = 0, a = 0, s = "", l = (e && e.delimiter) || "/"; null != (n = r.exec(t));) {
        var u = n[0],
            h = n[1],
            p = n.index;
        if (((s += t.slice(a, p)), (a = p + u.length), h)) {
            s += h[1];
            continue;
        }
        var f = t[a],
            d = n[2],
            g = n[3],
            _ = n[4],
            m = n[5],
            y = n[6],
            b = n[7];
        s && (i.push(s), (s = ""));
        var v = null != d && null != f && f !== d,
            w = "+" === y || "*" === y,
            x = "?" === y || "*" === y,
            E = n[2] || l,
            S = _ || m;
        i.push({
            name: g || o++,
            prefix: d || "",
            delimiter: E,
            optional: x,
            repeat: w,
            partial: v,
            asterisk: !!b,
            pattern: S ? S.replace(/([=!:$\/()])/g, "\\$1") : b ? ".*" : "[^" + c(E) + "]+?",
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
        for (var o = "", s = n || {}, c = (r || {}).pretty ? a : encodeURIComponent, l = 0; l < t.length; l++) {
            var u,
                h = t[l];
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
            if (i(p)) {
                if (!h.repeat)
                    throw TypeError(
                        'Expected "' + h.name + '" to not repeat, but received `' + JSON.stringify(p) + "`",
                    );
                if (0 === p.length)
                    if (h.optional) continue;
                    else throw TypeError('Expected "' + h.name + '" to not be empty');
                for (var f = 0; f < p.length; f++) {
                    if (((u = c(p[f])), !e[l].test(u)))
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
                    ? encodeURI(p).replace(/[?#]/g, function (t) {
                          return "%" + t.charCodeAt(0).toString(16).toUpperCase();
                      })
                    : c(p)),
                !e[l].test(u))
            )
                throw TypeError('Expected "' + h.name + '" to match "' + h.pattern + '", but received "' + u + '"');
            o += h.prefix + u;
        }
        return o;
    };
}
function c(t) {
    return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1");
}
function l(t) {
    return t.sensitive ? "" : "i";
}
function u(t, e, n) {
    i(e) || ((n = e || n), (e = []));
    for (var r, o = (n = n || {}).strict, a = !1 !== n.end, s = "", u = 0; u < t.length; u++) {
        var h = t[u];
        if ("string" == typeof h) s += c(h);
        else {
            var p = c(h.prefix),
                f = "(?:" + h.pattern + ")";
            (e.push(h),
                h.repeat && (f += "(?:" + p + f + ")*"),
                (s += f =
                    h.optional ? (h.partial ? p + "(" + f + ")?" : "(?:" + p + "(" + f + "))?") : p + "(" + f + ")"));
        }
    }
    var d = c(n.delimiter || "/"),
        g = s.slice(-d.length) === d;
    return (
        o || (s = (g ? s.slice(0, -d.length) : s) + "(?:" + d + "(?=$))?"),
        a ? (s += "$") : (s += o && g ? "" : "(?=" + d + "|$)"),
        ((r = RegExp("^" + s, l(n))).keys = e),
        r
    );
}
