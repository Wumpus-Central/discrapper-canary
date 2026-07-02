"use strict";
var r, a, i, o;
function s(e, t) {
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
function c(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
        let r = e.indexOf("?");
        r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))), e && (t.pathname = e);
    }
    return t;
}
function u(e, t, n) {
    return (
        void 0 === n && (n = "/"),
        (function (e, t, n, r) {
            let a = f(("string" == typeof t ? c(t) : t).pathname || "/", n);
            if (null == a) return null;
            let i = (function e(t, n, r, a) {
                void 0 === n && (n = []), void 0 === r && (r = []), void 0 === a && (a = "");
                let i = (t, i, o) => {
                    var l, c;
                    let u,
                        m,
                        f = {
                            relativePath: void 0 === o ? t.path || "" : o,
                            caseSensitive: !0 === t.caseSensitive,
                            childrenIndex: i,
                            route: t,
                        };
                    f.relativePath.startsWith("/") &&
                        (s(
                            f.relativePath.startsWith(a),
                            'Absolute route path "' +
                                f.relativePath +
                                '" nested under path "' +
                                a +
                                '" is not valid. An absolute child route path must start with the combined path of all its parent routes.',
                        ),
                        (f.relativePath = f.relativePath.slice(a.length)));
                    let h = g([a, f.relativePath]),
                        b = r.concat(f);
                    t.children &&
                        t.children.length > 0 &&
                        (s(
                            !0 !== t.index,
                            'Index routes must not have child routes. Please remove all child routes from route path "' +
                                h +
                                '".',
                        ),
                        e(t.children, n, b, h)),
                        (null != t.path || t.index) &&
                            n.push({
                                path: h,
                                score:
                                    ((l = h),
                                    (c = t.index),
                                    (m = (u = l.split("/")).length),
                                    u.some(p) && (m += _),
                                    c && (m += 2),
                                    u
                                        .filter((e) => !p(e))
                                        .reduce((e, t) => e + (d.test(t) ? 3 : "" === t ? 1 : 10), m)),
                                routesMeta: b,
                            });
                };
                return (
                    t.forEach((e, t) => {
                        var n;
                        if ("" !== e.path && null != (n = e.path) && n.includes("?"))
                            for (let n of (function e(t) {
                                let n = t.split("/");
                                if (0 === n.length) return [];
                                let [r, ...a] = n,
                                    i = r.endsWith("?"),
                                    o = r.replace(/\?$/, "");
                                if (0 === a.length) return i ? [o, ""] : [o];
                                let s = e(a.join("/")),
                                    l = [];
                                return (
                                    l.push(...s.map((e) => ("" === e ? o : [o, e].join("/")))),
                                    i && l.push(...s),
                                    l.map((e) => (t.startsWith("/") && "" === e ? "/" : e))
                                );
                            })(e.path))
                                i(e, t, n);
                        else i(e, t);
                    }),
                    n
                );
            })(e);
            i.sort((e, t) => {
                var n, r;
                return e.score !== t.score
                    ? t.score - e.score
                    : ((n = e.routesMeta.map((e) => e.childrenIndex)),
                      (r = t.routesMeta.map((e) => e.childrenIndex)),
                      n.length === r.length && n.slice(0, -1).every((e, t) => e === r[t])
                          ? n[n.length - 1] - r[r.length - 1]
                          : 0);
            });
            let o = null;
            for (let e = 0; null == o && e < i.length; ++e) {
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
                })(a);
                o = (function (e, t, n) {
                    void 0 === n && (n = !1);
                    let { routesMeta: r } = e,
                        a = {},
                        i = "/",
                        o = [];
                    for (let e = 0; e < r.length; ++e) {
                        let s = r[e],
                            l = e === r.length - 1,
                            c = "/" === i ? t : t.slice(i.length) || "/",
                            u = m({ path: s.relativePath, caseSensitive: s.caseSensitive, end: l }, c),
                            d = s.route;
                        if (
                            (!u &&
                                l &&
                                n &&
                                !r[r.length - 1].route.index &&
                                (u = m({ path: s.relativePath, caseSensitive: s.caseSensitive, end: !1 }, c)),
                            !u)
                        )
                            return null;
                        Object.assign(a, u.params),
                            o.push({
                                params: a,
                                pathname: g([i, u.pathname]),
                                pathnameBase: h(g([i, u.pathnameBase])),
                                route: d,
                            }),
                            "/" !== u.pathnameBase && (i = g([i, u.pathnameBase]));
                    }
                    return o;
                })(i[e], t, r);
            }
            return o;
        })(e, t, n, !1)
    );
}
n.d(t, { HS: () => g, Oi: () => s, Rr: () => c, pX: () => E, pb: () => f, rc: () => r, tH: () => b, ue: () => u }),
    ((i = r || (r = {})).Pop = "POP"),
    (i.Push = "PUSH"),
    (i.Replace = "REPLACE"),
    ((o = a || (a = {})).data = "data"),
    (o.deferred = "deferred"),
    (o.redirect = "redirect"),
    (o.error = "error");
let d = /^:[\w-]+$/,
    _ = /^(38190|98365)$/.test(n.j) ? null : -2,
    p = (e) => "*" === e;
function m(e, t) {
    var n, r, a;
    let i, o;
    "string" == typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
    let [s, c] =
            ((n = e.path),
            (r = e.caseSensitive),
            (a = e.end),
            void 0 === r && (r = !1),
            void 0 === a && (a = !0),
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
            (i = []),
            (o =
                "^" +
                n
                    .replace(/\/*\*?$/, "")
                    .replace(/^\/*/, "/")
                    .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
                    .replace(
                        /\/:([\w-]+)(\?)?/g,
                        (e, t, n) => (
                            i.push({ paramName: t, isOptional: null != n }), n ? "/?([^\\/]+)?" : "/([^\\/]+)"
                        ),
                    )),
            n.endsWith("*")
                ? (i.push({ paramName: "*" }), (o += "*" === n || "/*" === n ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
                : a
                  ? (o += "\\/*$")
                  : "" !== n && "/" !== n && (o += "(?:(?=\\/|$))"),
            [new RegExp(o, r ? void 0 : "i"), i]),
        u = t.match(s);
    if (!u) return null;
    let d = u[0],
        _ = d.replace(/(.)\/+$/, "$1"),
        p = u.slice(1);
    return {
        params: c.reduce((e, t, n) => {
            let { paramName: r, isOptional: a } = t;
            if ("*" === r) {
                let e = p[n] || "";
                _ = d.slice(0, d.length - e.length).replace(/(.)\/+$/, "$1");
            }
            let i = p[n];
            return a && !i ? (e[r] = void 0) : (e[r] = (i || "").replace(/%2F/g, "/")), e;
        }, {}),
        pathname: d,
        pathnameBase: _,
        pattern: e,
    };
}
function f(e, t) {
    if ("/" === t) return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length,
        r = e.charAt(n);
    return r && "/" !== r ? null : e.slice(n) || "/";
}
let g = (e) => e.join("/").replace(/\/\/+/g, "/"),
    h = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/");
class b extends (!/^(38190|98365)$/.test(n.j) ? Error : null) {}
function E(e) {
    return (
        null != e &&
        "number" == typeof e.status &&
        "string" == typeof e.statusText &&
        "boolean" == typeof e.internal &&
        "data" in e
    );
}
Symbol("deferred");
