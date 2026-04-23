"use strict";
var r, i, s, a;
function o(e, t) {
    if (!1 === e || null == e) throw Error(t);
}
function l(e, t) {
    if (!e) {
        "u" > typeof console && console.warn(t);
        try {
            throw Error(t);
        } catch (e) {}
    }
}
function u(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
        let r = e.indexOf("?");
        r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))), e && (t.pathname = e);
    }
    return t;
}
function c(e, t, n) {
    return (
        void 0 === n && (n = "/"),
        (function (e, t, n, r) {
            let i = p(("string" == typeof t ? u(t) : t).pathname || "/", n);
            if (null == i) return null;
            let s = (function e(t, n, r, i) {
                void 0 === n && (n = []), void 0 === r && (r = []), void 0 === i && (i = "");
                let s = (t, s, a) => {
                    var l, u;
                    let c,
                        f,
                        p = {
                            relativePath: void 0 === a ? t.path || "" : a,
                            caseSensitive: !0 === t.caseSensitive,
                            childrenIndex: s,
                            route: t,
                        };
                    p.relativePath.startsWith("/") &&
                        (o(
                            p.relativePath.startsWith(i),
                            'Absolute route path "' +
                                p.relativePath +
                                '" nested under path "' +
                                i +
                                '" is not valid. An absolute child route path must start with the combined path of all its parent routes.',
                        ),
                        (p.relativePath = p.relativePath.slice(i.length)));
                    let E = h([i, p.relativePath]),
                        m = r.concat(p);
                    t.children &&
                        t.children.length > 0 &&
                        (o(
                            !0 !== t.index,
                            'Index routes must not have child routes. Please remove all child routes from route path "' +
                                E +
                                '".',
                        ),
                        e(t.children, n, m, E)),
                        (null != t.path || t.index) &&
                            n.push({
                                path: E,
                                score:
                                    ((l = E),
                                    (u = t.index),
                                    (f = (c = l.split("/")).length),
                                    c.some(_) && (f += -2),
                                    u && (f += 2),
                                    c
                                        .filter((e) => !_(e))
                                        .reduce((e, t) => e + (d.test(t) ? 3 : "" === t ? 1 : 10), f)),
                                routesMeta: m,
                            });
                };
                return (
                    t.forEach((e, t) => {
                        var n;
                        if ("" !== e.path && null != (n = e.path) && n.includes("?"))
                            for (let n of (function e(t) {
                                let n = t.split("/");
                                if (0 === n.length) return [];
                                let [r, ...i] = n,
                                    s = r.endsWith("?"),
                                    a = r.replace(/\?$/, "");
                                if (0 === i.length) return s ? [a, ""] : [a];
                                let o = e(i.join("/")),
                                    l = [];
                                return (
                                    l.push(...o.map((e) => ("" === e ? a : [a, e].join("/")))),
                                    s && l.push(...o),
                                    l.map((e) => (t.startsWith("/") && "" === e ? "/" : e))
                                );
                            })(e.path))
                                s(e, t, n);
                        else s(e, t);
                    }),
                    n
                );
            })(e);
            s.sort((e, t) => {
                var n, r;
                return e.score !== t.score
                    ? t.score - e.score
                    : ((n = e.routesMeta.map((e) => e.childrenIndex)),
                      (r = t.routesMeta.map((e) => e.childrenIndex)),
                      n.length === r.length && n.slice(0, -1).every((e, t) => e === r[t])
                          ? n[n.length - 1] - r[r.length - 1]
                          : 0);
            });
            let a = null;
            for (let e = 0; null == a && e < s.length; ++e) {
                let t = (function (e) {
                    try {
                        return e
                            .split("/")
                            .map((e) => decodeURIComponent(e).replace(/\//g, "%2F"))
                            .join("/");
                    } catch (t) {
                        return (
                            l(
                                !1,
                                'The URL path "' +
                                    e +
                                    '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' +
                                    t +
                                    ").",
                            ),
                            e
                        );
                    }
                })(i);
                a = (function (e, t, n) {
                    void 0 === n && (n = !1);
                    let { routesMeta: r } = e,
                        i = {},
                        s = "/",
                        a = [];
                    for (let e = 0; e < r.length; ++e) {
                        let o = r[e],
                            l = e === r.length - 1,
                            u = "/" === s ? t : t.slice(s.length) || "/",
                            c = f({ path: o.relativePath, caseSensitive: o.caseSensitive, end: l }, u),
                            d = o.route;
                        if (
                            (!c &&
                                l &&
                                n &&
                                !r[r.length - 1].route.index &&
                                (c = f({ path: o.relativePath, caseSensitive: o.caseSensitive, end: !1 }, u)),
                            !c)
                        )
                            return null;
                        Object.assign(i, c.params),
                            a.push({
                                params: i,
                                pathname: h([s, c.pathname]),
                                pathnameBase: E(h([s, c.pathnameBase])),
                                route: d,
                            }),
                            "/" !== c.pathnameBase && (s = h([s, c.pathnameBase]));
                    }
                    return a;
                })(s[e], t, r);
            }
            return a;
        })(e, t, n, !1)
    );
}
n.d(t, { HS: () => h, Oi: () => o, Rr: () => u, pX: () => g, pb: () => p, rc: () => r, tH: () => m, ue: () => c }),
    ((s = r || (r = {})).Pop = "POP"),
    (s.Push = "PUSH"),
    (s.Replace = "REPLACE"),
    ((a = i || (i = {})).data = "data"),
    (a.deferred = "deferred"),
    (a.redirect = "redirect"),
    (a.error = "error");
let d = /^:[\w-]+$/,
    _ = (e) => "*" === e;
function f(e, t) {
    var n, r, i;
    let s, a;
    "string" == typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
    let [o, u] =
            ((n = e.path),
            (r = e.caseSensitive),
            (i = e.end),
            void 0 === r && (r = !1),
            void 0 === i && (i = !0),
            l(
                "*" === n || !n.endsWith("*") || n.endsWith("/*"),
                'Route path "' +
                    n +
                    '" will be treated as if it were "' +
                    n.replace(/\*$/, "/*") +
                    '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' +
                    n.replace(/\*$/, "/*") +
                    '".',
            ),
            (s = []),
            (a =
                "^" +
                n
                    .replace(/\/*\*?$/, "")
                    .replace(/^\/*/, "/")
                    .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
                    .replace(
                        /\/:([\w-]+)(\?)?/g,
                        (e, t, n) => (
                            s.push({ paramName: t, isOptional: null != n }), n ? "/?([^\\/]+)?" : "/([^\\/]+)"
                        ),
                    )),
            n.endsWith("*")
                ? (s.push({ paramName: "*" }), (a += "*" === n || "/*" === n ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
                : i
                  ? (a += "\\/*$")
                  : "" !== n && "/" !== n && (a += "(?:(?=\\/|$))"),
            [new RegExp(a, r ? void 0 : "i"), s]),
        c = t.match(o);
    if (!c) return null;
    let d = c[0],
        _ = d.replace(/(.)\/+$/, "$1"),
        f = c.slice(1);
    return {
        params: u.reduce((e, t, n) => {
            let { paramName: r, isOptional: i } = t;
            if ("*" === r) {
                let e = f[n] || "";
                _ = d.slice(0, d.length - e.length).replace(/(.)\/+$/, "$1");
            }
            let s = f[n];
            return i && !s ? (e[r] = void 0) : (e[r] = (s || "").replace(/%2F/g, "/")), e;
        }, {}),
        pathname: d,
        pathnameBase: _,
        pattern: e,
    };
}
function p(e, t) {
    if ("/" === t) return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length,
        r = e.charAt(n);
    return r && "/" !== r ? null : e.slice(n) || "/";
}
let h = (e) => e.join("/").replace(/\/\/+/g, "/"),
    E = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/");
class m extends Error {}
function g(e) {
    return (
        null != e &&
        "number" == typeof e.status &&
        "string" == typeof e.statusText &&
        "boolean" == typeof e.internal &&
        "data" in e
    );
}
Symbol("deferred");
