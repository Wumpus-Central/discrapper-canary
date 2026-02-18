"use strict";
var r, i;
function s() {
    return (s = Object.assign
        ? Object.assign.bind()
        : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
          }).apply(this, arguments);
}
n.d(t, { HS: () => H, Oi: () => o, Rr: () => f, pX: () => Z, pb: () => P, rc: () => r, tH: () => K, ue: () => E }),
    (function (e) {
        (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
    })(r || (r = {}));
let a = "popstate";
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
        s({ pathname: "string" == typeof e ? e : e.pathname, search: "", hash: "" }, "string" == typeof t ? f(t) : t, {
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
let p = new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
function h(e) {
    return !0 === e.index;
}
function m(e, t, n, r) {
    return (
        void 0 === n && (n = []),
        void 0 === r && (r = {}),
        e.map((e, i) => {
            let a = [...n, String(i)],
                l = "string" == typeof e.id ? e.id : a.join("-");
            if (
                (o(!0 !== e.index || !e.children, "Cannot specify children on an index route"),
                o(
                    !r[l],
                    'Found a route id collision on id "' +
                        l +
                        "\".  Route id's must be globally unique within Data Router usages",
                ),
                h(e))
            ) {
                let n = s({}, e, t(e), { id: l });
                return (r[l] = n), n;
            }
            {
                let n = s({}, e, t(e), { id: l, children: void 0 });
                return (r[l] = n), e.children && (n.children = m(e.children, t, a, r)), n;
            }
        })
    );
}
function E(e, t, n) {
    return void 0 === n && (n = "/"), g(e, t, n, !1);
}
function g(e, t, n, r) {
    let i = P(("string" == typeof t ? f(t) : t).pathname || "/", n);
    if (null == i) return null;
    let s = A(e);
    T(s);
    let a = null;
    for (let e = 0; null == a && e < s.length; ++e) {
        let t = M(i);
        a = L(s[e], t, r);
    }
    return a;
}
function A(e, t, n, r) {
    void 0 === t && (t = []), void 0 === n && (n = []), void 0 === r && (r = "");
    let i = (e, i, s) => {
        let a = {
            relativePath: void 0 === s ? e.path || "" : s,
            caseSensitive: !0 === e.caseSensitive,
            childrenIndex: i,
            route: e,
        };
        a.relativePath.startsWith("/") &&
            (o(
                a.relativePath.startsWith(r),
                'Absolute route path "' +
                    a.relativePath +
                    '" nested under path "' +
                    r +
                    '" is not valid. An absolute child route path must start with the combined path of all its parent routes.',
            ),
            (a.relativePath = a.relativePath.slice(r.length)));
        let l = H([r, a.relativePath]),
            u = n.concat(a);
        e.children &&
            e.children.length > 0 &&
            (o(
                !0 !== e.index,
                'Index routes must not have child routes. Please remove all child routes from route path "' + l + '".',
            ),
            A(e.children, t, u, l)),
            (null != e.path || e.index) && t.push({ path: l, score: O(l, e.index), routesMeta: u });
    };
    return (
        e.forEach((e, t) => {
            var n;
            if ("" !== e.path && null != (n = e.path) && n.includes("?")) for (let n of I(e.path)) i(e, t, n);
            else i(e, t);
        }),
        t
    );
}
function I(e) {
    let t = e.split("/");
    if (0 === t.length) return [];
    let [n, ...r] = t,
        i = n.endsWith("?"),
        s = n.replace(/\?$/, "");
    if (0 === r.length) return i ? [s, ""] : [s];
    let a = I(r.join("/")),
        o = [];
    return (
        o.push(...a.map((e) => ("" === e ? s : [s, e].join("/")))),
        i && o.push(...a),
        o.map((t) => (e.startsWith("/") && "" === t ? "/" : t))
    );
}
function T(e) {
    e.sort((e, t) =>
        e.score !== t.score
            ? t.score - e.score
            : D(
                  e.routesMeta.map((e) => e.childrenIndex),
                  t.routesMeta.map((e) => e.childrenIndex),
              ),
    );
}
let S = /^:[\w-]+$/,
    y = 3,
    v = 2,
    N = 1,
    C = 10,
    b = -2,
    R = (e) => "*" === e;
function O(e, t) {
    let n = e.split("/"),
        r = n.length;
    return (
        n.some(R) && (r += b),
        t && (r += v),
        n.filter((e) => !R(e)).reduce((e, t) => e + (S.test(t) ? y : "" === t ? N : C), r)
    );
}
function D(e, t) {
    return e.length === t.length && e.slice(0, -1).every((e, n) => e === t[n]) ? e[e.length - 1] - t[t.length - 1] : 0;
}
function L(e, t, n) {
    void 0 === n && (n = !1);
    let { routesMeta: r } = e,
        i = {},
        s = "/",
        a = [];
    for (let e = 0; e < r.length; ++e) {
        let o = r[e],
            l = e === r.length - 1,
            u = "/" === s ? t : t.slice(s.length) || "/",
            c = w({ path: o.relativePath, caseSensitive: o.caseSensitive, end: l }, u),
            d = o.route;
        if (
            (!c &&
                l &&
                n &&
                !r[r.length - 1].route.index &&
                (c = w({ path: o.relativePath, caseSensitive: o.caseSensitive, end: !1 }, u)),
            !c)
        )
            return null;
        Object.assign(i, c.params),
            a.push({ params: i, pathname: H([s, c.pathname]), pathnameBase: j(H([s, c.pathnameBase])), route: d }),
            "/" !== c.pathnameBase && (s = H([s, c.pathnameBase]));
    }
    return a;
}
function w(e, t) {
    "string" == typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
    let [n, r] = x(e.path, e.caseSensitive, e.end),
        i = t.match(n);
    if (!i) return null;
    let s = i[0],
        a = s.replace(/(.)\/+$/, "$1"),
        o = i.slice(1);
    return {
        params: r.reduce((e, t, n) => {
            let { paramName: r, isOptional: i } = t;
            if ("*" === r) {
                let e = o[n] || "";
                a = s.slice(0, s.length - e.length).replace(/(.)\/+$/, "$1");
            }
            let l = o[n];
            return i && !l ? (e[r] = void 0) : (e[r] = (l || "").replace(/%2F/g, "/")), e;
        }, {}),
        pathname: s,
        pathnameBase: a,
        pattern: e,
    };
}
function x(e, t, n) {
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
function P(e, t) {
    if ("/" === t) return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length,
        r = e.charAt(n);
    return r && "/" !== r ? null : e.slice(n) || "/";
}
function k(e, t) {
    void 0 === t && (t = "/");
    let { pathname: n, search: r = "", hash: i = "" } = "string" == typeof e ? f(e) : e;
    return { pathname: n ? (n.startsWith("/") ? n : U(n, t)) : t, search: Y(r), hash: W(i) };
}
function U(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return (
        e.split("/").forEach((e) => {
            ".." === e ? n.length > 1 && n.pop() : "." !== e && n.push(e);
        }),
        n.length > 1 ? n.join("/") : "/"
    );
}
function G(e, t, n, r) {
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
function F(e) {
    return e.filter((e, t) => 0 === t || (e.route.path && e.route.path.length > 0));
}
function V(e, t) {
    let n = F(e);
    return t ? n.map((e, t) => (t === n.length - 1 ? e.pathname : e.pathnameBase)) : n.map((e) => e.pathnameBase);
}
function B(e, t, n, r) {
    let i, a;
    void 0 === r && (r = !1),
        "string" == typeof e
            ? (i = f(e))
            : (o(!(i = s({}, e)).pathname || !i.pathname.includes("?"), G("?", "pathname", "search", i)),
              o(!i.pathname || !i.pathname.includes("#"), G("#", "pathname", "hash", i)),
              o(!i.search || !i.search.includes("#"), G("#", "search", "hash", i)));
    let l = "" === e || "" === i.pathname,
        u = l ? "/" : i.pathname;
    if (null == u) a = n;
    else {
        let e = t.length - 1;
        if (!r && u.startsWith("..")) {
            let t = u.split("/");
            for (; ".." === t[0]; ) t.shift(), (e -= 1);
            i.pathname = t.join("/");
        }
        a = e >= 0 ? t[e] : "/";
    }
    let c = k(i, a),
        d = u && "/" !== u && u.endsWith("/"),
        _ = (l || "." === u) && n.endsWith("/");
    return !c.pathname.endsWith("/") && (d || _) && (c.pathname += "/"), c;
}
let H = (e) => e.join("/").replace(/\/\/+/g, "/"),
    j = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
    Y = (e) => (e && "?" !== e ? (e.startsWith("?") ? e : "?" + e) : ""),
    W = (e) => (e && "#" !== e ? (e.startsWith("#") ? e : "#" + e) : "");
class K extends Error {}
function z(e) {
    return e instanceof Promise && !0 === e._tracked;
}
function $(e) {
    if (!z(e)) return e;
    if (e._error) throw e._error;
    return e._data;
}
class q {
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
let X = ["post", "put", "patch", "delete"],
    Q = new Set(X),
    J = new Set(["get", ...X]),
    ee = new Set([301, 302, 303, 307, 308]),
    et = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    en = "remix-router-transitions";
Symbol("deferred");
function er(e) {
    return null != e && (("formData" in e && null != e.formData) || ("body" in e && void 0 !== e.body));
}
function ei(e, t, n, r, i, s, a, o) {
    let l, u;
    if (a) {
        for (let e of ((l = []), t))
            if ((l.push(e), e.route.id === a)) {
                u = e;
                break;
            }
    } else (l = t), (u = t[t.length - 1]);
    let c = B(i || ".", V(l, s), P(e.pathname, n) || e.pathname, "path" === o);
    if ((null == i && ((c.search = e.search), (c.hash = e.hash)), (null == i || "" === i || "." === i) && u)) {
        let e = eR(c.search);
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
function ea(e, t, n) {
    if (e.lazy) return !0;
    if (!e.loader) return !1;
    let r = null != t && void 0 !== t[e.id],
        i = null != n && void 0 !== n[e.id];
    return (!!r || !i) && (("function" == typeof e.loader && !0 === e.loader.hydrate) || (!r && !i));
}
function eo(e, t, n) {
    let r = !t || n.route.id !== t.route.id,
        i = void 0 === e[n.route.id];
    return r || i;
}
function el(e, t) {
    let n = e.route.path;
    return e.pathname !== t.pathname || (null != n && n.endsWith("*") && e.params["*"] !== t.params["*"]);
}
function eu(e, t) {
    if (e.route.shouldRevalidate) {
        let n = e.route.shouldRevalidate(t);
        if ("boolean" == typeof n) return n;
    }
    return t.defaultShouldRevalidate;
}
function ec(e, t) {
    return (
        ("id" in e && "id" in t && e.id === t.id) ||
        (e.index === t.index &&
            e.path === t.path &&
            e.caseSensitive === t.caseSensitive &&
            (((!e.children || 0 === e.children.length) && (!t.children || 0 === t.children.length)) ||
                e.children.every((e, n) => {
                    var r;
                    return null == (r = t.children) ? void 0 : r.some((t) => ec(e, t));
                })))
    );
}
async function ed(e, t, n) {
    if (!e.lazy) return;
    let r = await e.lazy();
    if (!e.lazy) return;
    let i = n[e.id];
    o(i, "No route found in manifest");
    let a = {};
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
            t || p.has(e) || (a[e] = r[e]);
    }
    Object.assign(i, a), Object.assign(i, s({}, t(i), { lazy: void 0 }));
}
async function e_(e, t, n, r, s, a) {
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
                    : r({ request: t, params: n.params, context: a }, ...(void 0 !== i ? [i] : []));
            return Promise.race([
                (async () => {
                    try {
                        let e = await (s ? s((e) => l(e)) : l());
                        return { type: "data", result: e };
                    } catch (e) {
                        return { type: "error", result: e };
                    }
                })(),
                o,
            ]);
        };
    try {
        let s = n.route[e];
        if (r)
            if (s) {
                let e,
                    [t] = await Promise.all([
                        c(s).catch((t) => {
                            e = t;
                        }),
                        r,
                    ]);
                if (void 0 !== e) throw e;
                l = t;
            } else if ((await r, (s = n.route[e]))) l = await c(s);
            else {
                if ("action" !== e) return { type: i.data, result: void 0 };
                let r = new URL(t.url),
                    s = r.pathname + r.search;
                throw eE(405, { method: t.method, pathname: s, routeId: n.route.id });
            }
        else if (s) l = await c(s);
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
function ef(e) {
    let t = new URLSearchParams();
    for (let [n, r] of e.entries()) t.append(n, "string" == typeof r ? r : r.name);
    return t;
}
function ep(e) {
    let t = new FormData();
    for (let [n, r] of e.entries()) t.append(n, r);
    return t;
}
function eh(e, t, n, r, i) {
    let s,
        a = {},
        l = null,
        u = !1,
        c = {},
        d = n && eI(n[1]) ? n[1].error : void 0;
    return (
        e.forEach((n) => {
            if (!(n.route.id in t)) return;
            let _ = n.route.id,
                f = t[_];
            if ((o(!eT(f), "Cannot handle redirect results in processLoaderData"), eI(f))) {
                let t = f.error;
                if ((void 0 !== d && ((t = d), (d = void 0)), (l = l || {}), i)) l[_] = t;
                else {
                    let n = em(e, _);
                    null == l[n.route.id] && (l[n.route.id] = t);
                }
                (a[_] = void 0),
                    u || ((u = !0), (s = Z(f.error) ? f.error.status : 500)),
                    f.headers && (c[_] = f.headers);
            } else
                eA(f)
                    ? (r.set(_, f.deferredData),
                      (a[_] = f.deferredData.data),
                      null == f.statusCode || 200 === f.statusCode || u || (s = f.statusCode))
                    : ((a[_] = f.data), f.statusCode && 200 !== f.statusCode && !u && (s = f.statusCode)),
                    f.headers && (c[_] = f.headers);
        }),
        void 0 !== d && n && ((l = { [n[0]]: d }), (a[n[0]] = void 0)),
        { loaderData: a, errors: l, statusCode: s || 200, loaderHeaders: c }
    );
}
function em(e, t) {
    return (
        (t ? e.slice(0, e.findIndex((e) => e.route.id === t) + 1) : [...e])
            .reverse()
            .find((e) => !0 === e.route.hasErrorBoundary) || e[0]
    );
}
function eE(e, t) {
    let { pathname: n, routeId: r, method: i, type: s, message: a } = void 0 === t ? {} : t,
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
                  : "defer-action" === s
                    ? (l = "defer() is not supported in actions")
                    : "invalid-body" === s && (l = "Unable to encode submission body"))
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
        new q(e || 500, o, Error(l), !0)
    );
}
function eg(e) {
    let t = "string" == typeof e ? f(e) : e;
    return _(s({}, t, { hash: "" }));
}
function eA(e) {
    return e.type === i.deferred;
}
function eI(e) {
    return e.type === i.error;
}
function eT(e) {
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
function ey(e) {
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
function ev(e) {
    return (
        null != e &&
        "number" == typeof e.status &&
        "string" == typeof e.statusText &&
        "object" == typeof e.headers &&
        void 0 !== e.body
    );
}
function eN(e) {
    return J.has(e.toLowerCase());
}
function eC(e) {
    return Q.has(e.toLowerCase());
}
async function eb(e, t, n) {
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
function eR(e) {
    return new URLSearchParams(e).getAll("index").some((e) => "" === e);
}
function eO(e, t) {
    let n = "string" == typeof t ? f(t).search : t.search;
    if (e[e.length - 1].route.index && eR(n || "")) return e[e.length - 1];
    let r = F(e);
    return r[r.length - 1];
}
function eD(e) {
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
