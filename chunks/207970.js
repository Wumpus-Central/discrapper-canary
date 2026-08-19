var n, i, u, o;
function a(e, t) {
    if (!1 === e || null == e) throw Error(t);
}
function s(e, t) {
    if (!e) {
        "u" > typeof console && console.warn(t);
        try {
            throw Error(t);
        } catch (e) {}
    }
}
function l(e) {
    let t = {};
    if (e) {
        let r = e.indexOf("#");
        r >= 0 && ((t.hash = e.substr(r)), (e = e.substr(0, r)));
        let n = e.indexOf("?");
        n >= 0 && ((t.search = e.substr(n)), (e = e.substr(0, n))), e && (t.pathname = e);
    }
    return t;
}
function c(e, t, r) {
    return (
        void 0 === r && (r = "/"),
        (function (e, t, r, n) {
            let i = h(("string" == typeof t ? l(t) : t).pathname || "/", r);
            if (null == i) return null;
            let u = (function e(t, r, n, i) {
                void 0 === r && (r = []), void 0 === n && (n = []), void 0 === i && (i = "");
                let u = (t, u, o) => {
                    var s, l;
                    let c,
                        p,
                        h = {
                            relativePath: void 0 === o ? t.path || "" : o,
                            caseSensitive: !0 === t.caseSensitive,
                            childrenIndex: u,
                            route: t,
                        };
                    h.relativePath.startsWith("/") &&
                        (a(
                            h.relativePath.startsWith(i),
                            'Absolute route path "' +
                                h.relativePath +
                                '" nested under path "' +
                                i +
                                '" is not valid. An absolute child route path must start with the combined path of all its parent routes.',
                        ),
                        (h.relativePath = h.relativePath.slice(i.length)));
                    let m = v([i, h.relativePath]),
                        g = n.concat(h);
                    t.children &&
                        t.children.length > 0 &&
                        (a(
                            !0 !== t.index,
                            'Index routes must not have child routes. Please remove all child routes from route path "' +
                                m +
                                '".',
                        ),
                        e(t.children, r, g, m)),
                        (null != t.path || t.index) &&
                            r.push({
                                path: m,
                                score:
                                    ((s = m),
                                    (l = t.index),
                                    (p = (c = s.split("/")).length),
                                    c.some(f) && (p += -2),
                                    l && (p += 2),
                                    c
                                        .filter((e) => !f(e))
                                        .reduce((e, t) => e + (d.test(t) ? 3 : "" === t ? 1 : 10), p)),
                                routesMeta: g,
                            });
                };
                return (
                    t.forEach((e, t) => {
                        var r;
                        if ("" !== e.path && null != (r = e.path) && r.includes("?"))
                            for (let r of (function e(t) {
                                let r = t.split("/");
                                if (0 === r.length) return [];
                                let [n, ...i] = r,
                                    u = n.endsWith("?"),
                                    o = n.replace(/\?$/, "");
                                if (0 === i.length) return u ? [o, ""] : [o];
                                let a = e(i.join("/")),
                                    s = [];
                                return (
                                    s.push(...a.map((e) => ("" === e ? o : [o, e].join("/")))),
                                    u && s.push(...a),
                                    s.map((e) => (t.startsWith("/") && "" === e ? "/" : e))
                                );
                            })(e.path))
                                u(e, t, r);
                        else u(e, t);
                    }),
                    r
                );
            })(e);
            u.sort((e, t) => {
                var r, n;
                return e.score !== t.score
                    ? t.score - e.score
                    : ((r = e.routesMeta.map((e) => e.childrenIndex)),
                      (n = t.routesMeta.map((e) => e.childrenIndex)),
                      r.length === n.length && r.slice(0, -1).every((e, t) => e === n[t])
                          ? r[r.length - 1] - n[n.length - 1]
                          : 0);
            });
            let o = null;
            for (let e = 0; null == o && e < u.length; ++e) {
                let t = (function (e) {
                    try {
                        return e
                            .split("/")
                            .map((e) => decodeURIComponent(e).replace(/\//g, "%2F"))
                            .join("/");
                    } catch (t) {
                        return (
                            s(
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
                o = (function (e, t, r) {
                    void 0 === r && (r = !1);
                    let { routesMeta: n } = e,
                        i = {},
                        u = "/",
                        o = [];
                    for (let e = 0; e < n.length; ++e) {
                        let a = n[e],
                            s = e === n.length - 1,
                            l = "/" === u ? t : t.slice(u.length) || "/",
                            c = p({ path: a.relativePath, caseSensitive: a.caseSensitive, end: s }, l),
                            d = a.route;
                        if (
                            (!c &&
                                s &&
                                r &&
                                !n[n.length - 1].route.index &&
                                (c = p({ path: a.relativePath, caseSensitive: a.caseSensitive, end: !1 }, l)),
                            !c)
                        )
                            return null;
                        Object.assign(i, c.params),
                            o.push({
                                params: i,
                                pathname: v([u, c.pathname]),
                                pathnameBase: m(v([u, c.pathnameBase])),
                                route: d,
                            }),
                            "/" !== c.pathnameBase && (u = v([u, c.pathnameBase]));
                    }
                    return o;
                })(u[e], t, n);
            }
            return o;
        })(e, t, r, !1)
    );
}
r.d(t, { HS: () => v, Oi: () => a, Rr: () => l, pX: () => D, pb: () => h, rc: () => n, tH: () => g, ue: () => c }),
    ((u = n || (n = {})).Pop = "POP"),
    (u.Push = "PUSH"),
    (u.Replace = "REPLACE"),
    ((o = i || (i = {})).data = "data"),
    (o.deferred = "deferred"),
    (o.redirect = "redirect"),
    (o.error = "error");
let d = /^:[\w-]+$/,
    f = (e) => "*" === e;
function p(e, t) {
    var r, n, i;
    let u, o;
    "string" == typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
    let [a, l] =
            ((r = e.path),
            (n = e.caseSensitive),
            (i = e.end),
            void 0 === n && (n = !1),
            void 0 === i && (i = !0),
            s(
                "*" === r || !r.endsWith("*") || r.endsWith("/*"),
                'Route path "' +
                    r +
                    '" will be treated as if it were "' +
                    r.replace(/\*$/, "/*") +
                    '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' +
                    r.replace(/\*$/, "/*") +
                    '".',
            ),
            (u = []),
            (o =
                "^" +
                r
                    .replace(/\/*\*?$/, "")
                    .replace(/^\/*/, "/")
                    .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
                    .replace(
                        /\/:([\w-]+)(\?)?/g,
                        (e, t, r) => (
                            u.push({ paramName: t, isOptional: null != r }), r ? "/?([^\\/]+)?" : "/([^\\/]+)"
                        ),
                    )),
            r.endsWith("*")
                ? (u.push({ paramName: "*" }), (o += "*" === r || "/*" === r ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
                : i
                  ? (o += "\\/*$")
                  : "" !== r && "/" !== r && (o += "(?:(?=\\/|$))"),
            [new RegExp(o, n ? void 0 : "i"), u]),
        c = t.match(a);
    if (!c) return null;
    let d = c[0],
        f = d.replace(/(.)\/+$/, "$1"),
        p = c.slice(1);
    return {
        params: l.reduce((e, t, r) => {
            let { paramName: n, isOptional: i } = t;
            if ("*" === n) {
                let e = p[r] || "";
                f = d.slice(0, d.length - e.length).replace(/(.)\/+$/, "$1");
            }
            let u = p[r];
            return i && !u ? (e[n] = void 0) : (e[n] = (u || "").replace(/%2F/g, "/")), e;
        }, {}),
        pathname: d,
        pathnameBase: f,
        pattern: e,
    };
}
function h(e, t) {
    if ("/" === t) return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let r = t.endsWith("/") ? t.length - 1 : t.length,
        n = e.charAt(r);
    return n && "/" !== n ? null : e.slice(r) || "/";
}
let v = (e) => e.join("/").replace(/\/\/+/g, "/"),
    m = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/");
class g extends Error {}
function D(e) {
    return (
        null != e &&
        "number" == typeof e.status &&
        "string" == typeof e.statusText &&
        "boolean" == typeof e.internal &&
        "data" in e
    );
}
Symbol("deferred");
