"use strict";
var r, i;
function a() {
    return (a = Object.assign
        ? Object.assign.bind()
        : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
          }).apply(this, arguments);
}
n.d(t, { HS: () => H, Oi: () => o, Rr: () => f, pX: () => Z, pb: () => k, rc: () => r, tH: () => $, ue: () => E }),
    (function (e) {
        (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
    })(r || (r = {}));
let s = "popstate";
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
function u() {
    return Math.random().toString(36).substr(2, 8);
}
function c(e, t) {
    return { usr: e.state, key: e.key, idx: t };
}
function d(e, t, n, r) {
    return (
        void 0 === n && (n = null),
        a({ pathname: "string" == typeof e ? e : e.pathname, search: "", hash: "" }, "string" == typeof t ? f(t) : t, {
            state: n,
            key: (t && t.key) || r || u(),
        })
    );
}
function _(e) {
    let { pathname: t = "/", search: n = "", hash: r = "" } = e;
    return (
        n && "?" !== n && (t += "?" === n.charAt(0) ? n : "?" + n),
        r && "#" !== r && (t += "#" === r.charAt(0) ? r : "#" + r),
        t
    );
}
function f(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
        let r = e.indexOf("?");
        r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))), e && (t.pathname = e);
    }
    return t;
}
!(function (e) {
    (e.data = "data"), (e.deferred = "deferred"), (e.redirect = "redirect"), (e.error = "error");
})(i || (i = {}));
let h = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
function p(e) {
    return !0 === e.index;
}
function g(e, t, n, r) {
    return (
        void 0 === n && (n = []),
        void 0 === r && (r = {}),
        e.map((e, i) => {
            let s = [...n, String(i)],
                l = "string" == typeof e.id ? e.id : s.join("-");
            if (
                (o(!0 !== e.index || !e.children, "Cannot specify children on an index route"),
                o(
                    !r[l],
                    'Found a route id collision on id "' +
                        l +
                        "\".  Route id's must be globally unique within Data Router usages",
                ),
                p(e))
            ) {
                let n = a({}, e, t(e), { id: l });
                return (r[l] = n), n;
            }
            {
                let n = a({}, e, t(e), { id: l, children: void 0 });
                return (r[l] = n), e.children && (n.children = g(e.children, t, s, r)), n;
            }
        })
    );
}
function E(e, t, n) {
    return void 0 === n && (n = "/"), A(e, t, n, !1);
}
function A(e, t, n, r) {
    let i = k(("string" == typeof t ? f(t) : t).pathname || "/", n);
    if (null == i) return null;
    let a = I(e);
    y(a);
    let s = null;
    for (let e = 0; null == s && e < a.length; ++e) {
        let t = M(i);
        s = w(a[e], t, r);
    }
    return s;
}
function I(e, t, n, r) {
    void 0 === t && (t = []), void 0 === n && (n = []), void 0 === r && (r = "");
    let i = (e, i, a) => {
        let s = {
            relativePath: void 0 === a ? e.path || "" : a,
            caseSensitive: !0 === e.caseSensitive,
            childrenIndex: i,
            route: e,
        };
        s.relativePath.startsWith("/") &&
            (o(
                s.relativePath.startsWith(r),
                'Absolute route path "' +
                    s.relativePath +
                    '" nested under path "' +
                    r +
                    '" is not valid. An absolute child route path must start with the combined path of all its parent routes.',
            ),
            (s.relativePath = s.relativePath.slice(r.length)));
        let l = H([r, s.relativePath]),
            u = n.concat(s);
        e.children &&
            e.children.length > 0 &&
            (o(
                !0 !== e.index,
                'Index routes must not have child routes. Please remove all child routes from route path "' + l + '".',
            ),
            I(e.children, t, u, l)),
            (null != e.path || e.index) && t.push({ path: l, score: D(l, e.index), routesMeta: u });
    };
    return (
        e.forEach((e, t) => {
            var n;
            if ("" !== e.path && null != (n = e.path) && n.includes("?")) for (let n of T(e.path)) i(e, t, n);
            else i(e, t);
        }),
        t
    );
}
function T(e) {
    let t = e.split("/");
    if (0 === t.length) return [];
    let [n, ...r] = t,
        i = n.endsWith("?"),
        a = n.replace(/\?$/, "");
    if (0 === r.length) return i ? [a, ""] : [a];
    let s = T(r.join("/")),
        o = [];
    return (
        o.push(...s.map((e) => ("" === e ? a : [a, e].join("/")))),
        i && o.push(...s),
        o.map((t) => (e.startsWith("/") && "" === t ? "/" : t))
    );
}
function y(e) {
    e.sort((e, t) =>
        e.score !== t.score
            ? t.score - e.score
            : L(
                  e.routesMeta.map((e) => e.childrenIndex),
                  t.routesMeta.map((e) => e.childrenIndex),
              ),
    );
}
let S = /^:[\w-]+$/,
    v = 3,
    C = 2,
    b = 1,
    N = 10,
    R = -2,
    O = (e) => "*" === e;
function D(e, t) {
    let n = e.split("/"),
        r = n.length;
    return (
        n.some(O) && (r += R),
        t && (r += C),
        n.filter((e) => !O(e)).reduce((e, t) => e + (S.test(t) ? v : "" === t ? b : N), r)
    );
}
function L(e, t) {
    return e.length === t.length && e.slice(0, -1).every((e, n) => e === t[n]) ? e[e.length - 1] - t[t.length - 1] : 0;
}
function w(e, t, n) {
    void 0 === n && (n = !1);
    let { routesMeta: r } = e,
        i = {},
        a = "/",
        s = [];
    for (let e = 0; e < r.length; ++e) {
        let o = r[e],
            l = e === r.length - 1,
            u = "/" === a ? t : t.slice(a.length) || "/",
            c = x({ path: o.relativePath, caseSensitive: o.caseSensitive, end: l }, u),
            d = o.route;
        if (
            (!c &&
                l &&
                n &&
                !r[r.length - 1].route.index &&
                (c = x({ path: o.relativePath, caseSensitive: o.caseSensitive, end: !1 }, u)),
            !c)
        )
            return null;
        Object.assign(i, c.params),
            s.push({ params: i, pathname: H([a, c.pathname]), pathnameBase: Y(H([a, c.pathnameBase])), route: d }),
            "/" !== c.pathnameBase && (a = H([a, c.pathnameBase]));
    }
    return s;
}
function x(e, t) {
    "string" == typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
    let [n, r] = P(e.path, e.caseSensitive, e.end),
        i = t.match(n);
    if (!i) return null;
    let a = i[0],
        s = a.replace(/(.)\/+$/, "$1"),
        o = i.slice(1);
    return {
        params: r.reduce((e, t, n) => {
            let { paramName: r, isOptional: i } = t;
            if ("*" === r) {
                let e = o[n] || "";
                s = a.slice(0, a.length - e.length).replace(/(.)\/+$/, "$1");
            }
            let l = o[n];
            return i && !l ? (e[r] = void 0) : (e[r] = (l || "").replace(/%2F/g, "/")), e;
        }, {}),
        pathname: a,
        pathnameBase: s,
        pattern: e,
    };
}
function P(e, t, n) {
    void 0 === t && (t = !1),
        void 0 === n && (n = !0),
        l(
            "*" === e || !e.endsWith("*") || e.endsWith("/*"),
            'Route path "' +
                e +
                '" will be treated as if it were "' +
                e.replace(/\*$/, "/*") +
                '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' +
                e.replace(/\*$/, "/*") +
                '".',
        );
    let r = [],
        i =
            "^" +
            e
                .replace(/\/*\*?$/, "")
                .replace(/^\/*/, "/")
                .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
                .replace(
                    /\/:([\w-]+)(\?)?/g,
                    (e, t, n) => (r.push({ paramName: t, isOptional: null != n }), n ? "/?([^\\/]+)?" : "/([^\\/]+)"),
                );
    return (
        e.endsWith("*")
            ? (r.push({ paramName: "*" }), (i += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
            : n
              ? (i += "\\/*$")
              : "" !== e && "/" !== e && (i += "(?:(?=\\/|$))"),
        [new RegExp(i, t ? void 0 : "i"), r]
    );
}
function M(e) {
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
}
function k(e, t) {
    if ("/" === t) return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length,
        r = e.charAt(n);
    return r && "/" !== r ? null : e.slice(n) || "/";
}
function U(e, t) {
    void 0 === t && (t = "/");
    let { pathname: n, search: r = "", hash: i = "" } = "string" == typeof e ? f(e) : e;
    return { pathname: n ? (n.startsWith("/") ? n : G(n, t)) : t, search: W(r), hash: K(i) };
}
function G(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return (
        e.split("/").forEach((e) => {
            ".." === e ? n.length > 1 && n.pop() : "." !== e && n.push(e);
        }),
        n.length > 1 ? n.join("/") : "/"
    );
}
function F(e, t, n, r) {
    return (
        "Cannot include a '" +
        e +
        "' character in a manually specified " +
        ("`to." + t + "` field [") +
        JSON.stringify(r) +
        "].  Please separate it out to the `to." +
        n +
        '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
    );
}
function V(e) {
    return e.filter((e, t) => 0 === t || (e.route.path && e.route.path.length > 0));
}
function B(e, t) {
    let n = V(e);
    return t ? n.map((e, t) => (t === n.length - 1 ? e.pathname : e.pathnameBase)) : n.map((e) => e.pathnameBase);
}
function j(e, t, n, r) {
    let i, s;
    void 0 === r && (r = !1),
        "string" == typeof e
            ? (i = f(e))
            : (o(!(i = a({}, e)).pathname || !i.pathname.includes("?"), F("?", "pathname", "search", i)),
              o(!i.pathname || !i.pathname.includes("#"), F("#", "pathname", "hash", i)),
              o(!i.search || !i.search.includes("#"), F("#", "search", "hash", i)));
    let l = "" === e || "" === i.pathname,
        u = l ? "/" : i.pathname;
    if (null == u) s = n;
    else {
        let e = t.length - 1;
        if (!r && u.startsWith("..")) {
            let t = u.split("/");
            for (; ".." === t[0]; ) t.shift(), (e -= 1);
            i.pathname = t.join("/");
        }
        s = e >= 0 ? t[e] : "/";
    }
    let c = U(i, s),
        d = u && "/" !== u && u.endsWith("/"),
        _ = (l || "." === u) && n.endsWith("/");
    return !c.pathname.endsWith("/") && (d || _) && (c.pathname += "/"), c;
}
let H = (e) => e.join("/").replace(/\/\/+/g, "/"),
    Y = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
    W = (e) => (e && "?" !== e ? (e.startsWith("?") ? e : "?" + e) : ""),
    K = (e) => (e && "#" !== e ? (e.startsWith("#") ? e : "#" + e) : "");
class $ extends Error {}
function z(e) {
    return e instanceof Promise && !0 === e._tracked;
}
function q(e) {
    if (!z(e)) return e;
    if (e._error) throw e._error;
    return e._data;
}
class X {
    constructor(e, t, n, r) {
        void 0 === r && (r = !1),
            (this.status = e),
            (this.statusText = t || ""),
            (this.internal = r),
            n instanceof Error ? ((this.data = n.toString()), (this.error = n)) : (this.data = n);
    }
}
function Z(e) {
    return (
        null != e &&
        "number" == typeof e.status &&
        "string" == typeof e.statusText &&
        "boolean" == typeof e.internal &&
        "data" in e
    );
}
let Q = ["post", "put", "patch", "delete"],
    J = new Set(Q),
    ee = new Set(["get", ...Q]),
    et = new Set([301, 302, 303, 307, 308]),
    en = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    er = "remix-router-transitions";
Symbol("deferred");
function ei(e) {
    return null != e && (("formData" in e && null != e.formData) || ("body" in e && void 0 !== e.body));
}
function ea(e, t, n, r, i, a, s, o) {
    let l, u;
    if (s) {
        for (let e of ((l = []), t))
            if ((l.push(e), e.route.id === s)) {
                u = e;
                break;
            }
    } else (l = t), (u = t[t.length - 1]);
    let c = j(i || ".", B(l, a), k(e.pathname, n) || e.pathname, "path" === o);
    if ((null == i && ((c.search = e.search), (c.hash = e.hash)), (null == i || "" === i || "." === i) && u)) {
        let e = eO(c.search);
        if (u.route.index && !e) c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index";
        else if (!u.route.index && e) {
            let e = new URLSearchParams(c.search),
                t = e.getAll("index");
            e.delete("index"), t.filter((e) => e).forEach((t) => e.append("index", t));
            let n = e.toString();
            c.search = n ? "?" + n : "";
        }
    }
    return r && "/" !== n && (c.pathname = "/" === c.pathname ? n : H([n, c.pathname])), _(c);
}
function es(e, t, n) {
    void 0 === n && (n = !1);
    let r = e.findIndex((e) => e.route.id === t);
    return r >= 0 ? e.slice(0, n ? r + 1 : r) : e;
}
function eo(e, t, n) {
    if (e.lazy) return !0;
    if (!e.loader) return !1;
    let r = null != t && void 0 !== t[e.id],
        i = null != n && void 0 !== n[e.id];
    return (!!r || !i) && (("function" == typeof e.loader && !0 === e.loader.hydrate) || (!r && !i));
}
function el(e, t, n) {
    let r = !t || n.route.id !== t.route.id,
        i = void 0 === e[n.route.id];
    return r || i;
}
function eu(e, t) {
    let n = e.route.path;
    return e.pathname !== t.pathname || (null != n && n.endsWith("*") && e.params["*"] !== t.params["*"]);
}
function ec(e, t) {
    if (e.route.shouldRevalidate) {
        let n = e.route.shouldRevalidate(t);
        if ("boolean" == typeof n) return n;
    }
    return t.defaultShouldRevalidate;
}
function ed(e, t) {
    return (
        ("id" in e && "id" in t && e.id === t.id) ||
        (e.index === t.index &&
            e.path === t.path &&
            e.caseSensitive === t.caseSensitive &&
            (((!e.children || 0 === e.children.length) && (!t.children || 0 === t.children.length)) ||
                e.children.every((e, n) => {
                    var r;
                    return null == (r = t.children) ? void 0 : r.some((t) => ed(e, t));
                })))
    );
}
async function e_(e, t, n) {
    if (!e.lazy) return;
    let r = await e.lazy();
    if (!e.lazy) return;
    let i = n[e.id];
    o(i, "No route found in manifest");
    let s = {};
    for (let e in r) {
        let t = void 0 !== i[e] && "hasErrorBoundary" !== e;
        l(
            !t,
            'Route "' +
                i.id +
                '" has a static property "' +
                e +
                '" defined but its lazy function is also returning a value for this property. The lazy route property "' +
                e +
                '" will be ignored.',
        ),
            t || h.has(e) || (s[e] = r[e]);
    }
    Object.assign(i, s), Object.assign(i, a({}, t(i), { lazy: void 0 }));
}
async function ef(e, t, n, r, a, s) {
    let l,
        u,
        c = (r) => {
            let i,
                o = new Promise((e, t) => (i = t));
            (u = () => i()), t.signal.addEventListener("abort", u);
            let l = (i) =>
                "function" != typeof r
                    ? Promise.reject(
                          Error(
                              "You cannot call the handler for a route which defines a boolean " +
                                  ('"' + e + '" [routeId: ') +
                                  n.route.id +
                                  "]",
                          ),
                      )
                    : r({ request: t, params: n.params, context: s }, ...(void 0 !== i ? [i] : []));
            return Promise.race([
                (async () => {
                    try {
                        let e = await (a ? a((e) => l(e)) : l());
                        return { type: "data", result: e };
                    } catch (e) {
                        return { type: "error", result: e };
                    }
                })(),
                o,
            ]);
        };
    try {
        let a = n.route[e];
        if (r)
            if (a) {
                let e,
                    [t] = await Promise.all([
                        c(a).catch((t) => {
                            e = t;
                        }),
                        r,
                    ]);
                if (void 0 !== e) throw e;
                l = t;
            } else if ((await r, (a = n.route[e]))) l = await c(a);
            else {
                if ("action" !== e) return { type: i.data, result: void 0 };
                let r = new URL(t.url),
                    a = r.pathname + r.search;
                throw eE(405, { method: t.method, pathname: a, routeId: n.route.id });
            }
        else if (a) l = await c(a);
        else {
            let e = new URL(t.url),
                n = e.pathname + e.search;
            throw eE(404, { pathname: n });
        }
        o(
            void 0 !== l.result,
            "You defined " +
                ("action" === e ? "an action" : "a loader") +
                " for route " +
                ('"' + n.route.id + "\" but didn't return anything from your `") +
                e +
                "` function. Please return a value or `null`.",
        );
    } catch (e) {
        return { type: i.error, result: e };
    } finally {
        u && t.signal.removeEventListener("abort", u);
    }
    return l;
}
function eh(e) {
    let t = new URLSearchParams();
    for (let [n, r] of e.entries()) t.append(n, "string" == typeof r ? r : r.name);
    return t;
}
function ep(e) {
    let t = new FormData();
    for (let [n, r] of e.entries()) t.append(n, r);
    return t;
}
function em(e, t, n, r, i) {
    let a,
        s = {},
        l = null,
        u = !1,
        c = {},
        d = n && eT(n[1]) ? n[1].error : void 0;
    return (
        e.forEach((n) => {
            if (!(n.route.id in t)) return;
            let _ = n.route.id,
                f = t[_];
            if ((o(!ey(f), "Cannot handle redirect results in processLoaderData"), eT(f))) {
                let t = f.error;
                if ((void 0 !== d && ((t = d), (d = void 0)), (l = l || {}), i)) l[_] = t;
                else {
                    let n = eg(e, _);
                    null == l[n.route.id] && (l[n.route.id] = t);
                }
                (s[_] = void 0),
                    u || ((u = !0), (a = Z(f.error) ? f.error.status : 500)),
                    f.headers && (c[_] = f.headers);
            } else
                eI(f)
                    ? (r.set(_, f.deferredData),
                      (s[_] = f.deferredData.data),
                      null == f.statusCode || 200 === f.statusCode || u || (a = f.statusCode))
                    : ((s[_] = f.data), f.statusCode && 200 !== f.statusCode && !u && (a = f.statusCode)),
                    f.headers && (c[_] = f.headers);
        }),
        void 0 !== d && n && ((l = { [n[0]]: d }), (s[n[0]] = void 0)),
        { loaderData: s, errors: l, statusCode: a || 200, loaderHeaders: c }
    );
}
function eg(e, t) {
    return (
        (t ? e.slice(0, e.findIndex((e) => e.route.id === t) + 1) : [...e])
            .reverse()
            .find((e) => !0 === e.route.hasErrorBoundary) || e[0]
    );
}
function eE(e, t) {
    let { pathname: n, routeId: r, method: i, type: a, message: s } = void 0 === t ? {} : t,
        o = "Unknown Server Error",
        l = "Unknown @remix-run/router error";
    return (
        400 === e
            ? ((o = "Bad Request"),
              i && n && r
                  ? (l =
                        "You made a " +
                        i +
                        ' request to "' +
                        n +
                        '" but did not provide a `loader` for route "' +
                        r +
                        '", so there is no way to handle the request.')
                  : "defer-action" === a
                    ? (l = "defer() is not supported in actions")
                    : "invalid-body" === a && (l = "Unable to encode submission body"))
            : 403 === e
              ? ((o = "Forbidden"), (l = 'Route "' + r + '" does not match URL "' + n + '"'))
              : 404 === e
                ? ((o = "Not Found"), (l = 'No route matches URL "' + n + '"'))
                : 405 === e &&
                  ((o = "Method Not Allowed"),
                  i && n && r
                      ? (l =
                            "You made a " +
                            i.toUpperCase() +
                            ' request to "' +
                            n +
                            '" but did not provide an `action` for route "' +
                            r +
                            '", so there is no way to handle the request.')
                      : i && (l = 'Invalid request method "' + i.toUpperCase() + '"')),
        new X(e || 500, o, Error(l), !0)
    );
}
function eA(e) {
    let t = "string" == typeof e ? f(e) : e;
    return _(a({}, t, { hash: "" }));
}
function eI(e) {
    return e.type === i.deferred;
}
function eT(e) {
    return e.type === i.error;
}
function ey(e) {
    return (e && e.type) === i.redirect;
}
function eS(e) {
    return (
        "object" == typeof e &&
        null != e &&
        "type" in e &&
        "data" in e &&
        "init" in e &&
        "DataWithResponseInit" === e.type
    );
}
function ev(e) {
    let t = e;
    return (
        t &&
        "object" == typeof t &&
        "object" == typeof t.data &&
        "function" == typeof t.subscribe &&
        "function" == typeof t.cancel &&
        "function" == typeof t.resolveData
    );
}
function eC(e) {
    return (
        null != e &&
        "number" == typeof e.status &&
        "string" == typeof e.statusText &&
        "object" == typeof e.headers &&
        void 0 !== e.body
    );
}
function eb(e) {
    return ee.has(e.toLowerCase());
}
function eN(e) {
    return J.has(e.toLowerCase());
}
async function eR(e, t, n) {
    if ((void 0 === n && (n = !1), !(await e.deferredData.resolveData(t)))) {
        if (n)
            try {
                return { type: i.data, data: e.deferredData.unwrappedData };
            } catch (e) {
                return { type: i.error, error: e };
            }
        return { type: i.data, data: e.deferredData.data };
    }
}
function eO(e) {
    return new URLSearchParams(e).getAll("index").some((e) => "" === e);
}
function eD(e, t) {
    let n = "string" == typeof t ? f(t).search : t.search;
    if (e[e.length - 1].route.index && eO(n || "")) return e[e.length - 1];
    let r = V(e);
    return r[r.length - 1];
}
function eL(e) {
    return {
        state: "idle",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: e,
    };
}
