"use strict";
r.d(t, { Kl: () => z });
var n,
    a,
    s,
    i,
    o,
    l,
    u,
    c,
    d,
    f,
    p = r(64700),
    h = r.t(p, 2),
    m = r(340287),
    _ = r.t(m, 2);
function g(e, t) {
    if (!1 === e || null == e) throw Error(t);
}
function v(e, t) {
    if (!e) {
        "u" > typeof console && console.warn(t);
        try {
            throw Error(t);
        } catch (e) {}
    }
}
function b(e) {
    let t = {};
    if (e) {
        let r = e.indexOf("#");
        r >= 0 && ((t.hash = e.substr(r)), (e = e.substr(0, r)));
        let n = e.indexOf("?");
        n >= 0 && ((t.search = e.substr(n)), (e = e.substr(0, n))), e && (t.pathname = e);
    }
    return t;
}
((n = u || (u = {})).Pop = "POP"),
    (n.Push = "PUSH"),
    (n.Replace = "REPLACE"),
    ((a = c || (c = {})).data = "data"),
    (a.deferred = "deferred"),
    (a.redirect = "redirect"),
    (a.error = "error");
let y = /^:[\w-]+$/,
    E = (e) => "*" === e;
function S(e, t) {
    var r, n, a;
    let s, i;
    "string" == typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
    let [o, l] =
            ((r = e.path),
            (n = e.caseSensitive),
            (a = e.end),
            void 0 === n && (n = !1),
            void 0 === a && (a = !0),
            v(
                "*" === r || !r.endsWith("*") || r.endsWith("/*"),
                'Route path "' +
                    r +
                    '" will be treated as if it were "' +
                    r.replace(/\*$/, "/*") +
                    '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' +
                    r.replace(/\*$/, "/*") +
                    '".',
            ),
            (s = []),
            (i =
                "^" +
                r
                    .replace(/\/*\*?$/, "")
                    .replace(/^\/*/, "/")
                    .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
                    .replace(
                        /\/:([\w-]+)(\?)?/g,
                        (e, t, r) => (
                            s.push({ paramName: t, isOptional: null != r }), r ? "/?([^\\/]+)?" : "/([^\\/]+)"
                        ),
                    )),
            r.endsWith("*")
                ? (s.push({ paramName: "*" }), (i += "*" === r || "/*" === r ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
                : a
                  ? (i += "\\/*$")
                  : "" !== r && "/" !== r && (i += "(?:(?=\\/|$))"),
            [new RegExp(i, n ? void 0 : "i"), s]),
        u = t.match(o);
    if (!u) return null;
    let c = u[0],
        d = c.replace(/(.)\/+$/, "$1"),
        f = u.slice(1);
    return {
        params: l.reduce((e, t, r) => {
            let { paramName: n, isOptional: a } = t;
            if ("*" === n) {
                let e = f[r] || "";
                d = c.slice(0, c.length - e.length).replace(/(.)\/+$/, "$1");
            }
            let s = f[r];
            return a && !s ? (e[n] = void 0) : (e[n] = (s || "").replace(/%2F/g, "/")), e;
        }, {}),
        pathname: c,
        pathnameBase: d,
        pattern: e,
    };
}
function T(e, t) {
    if ("/" === t) return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let r = t.endsWith("/") ? t.length - 1 : t.length,
        n = e.charAt(r);
    return n && "/" !== n ? null : e.slice(r) || "/";
}
let x = (e) => e.join("/").replace(/\/\/+/g, "/"),
    w = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/");
function C() {
    return (C = Object.assign
        ? Object.assign.bind()
        : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
          }).apply(this, arguments);
}
Symbol("deferred");
let D = p.createContext(null),
    O = p.createContext(null),
    A = p.createContext(null),
    M = p.createContext(null),
    R = p.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
    k = p.createContext(null);
function N() {
    return null != p.useContext(M);
}
let L = p.createElement(function () {
    var e;
    let t,
        r,
        n,
        a,
        s,
        i,
        o,
        l =
            ((s = p.useContext(k)),
            (i = (F.UseRouteError, (t = p.useContext(O)) || g(!1), t)),
            (o =
                (F.UseRouteError,
                (a = ((r = p.useContext(R)) || g(!1), (n = r)).matches[n.matches.length - 1]).route.id || g(!1),
                a.route.id)),
            void 0 !== s ? s : null == (e = i.errors) ? void 0 : e[o]),
        u =
            null != l &&
            "number" == typeof l.status &&
            "string" == typeof l.statusText &&
            "boolean" == typeof l.internal &&
            "data" in l
                ? l.status + " " + l.statusText
                : l instanceof Error
                  ? l.message
                  : JSON.stringify(l),
        c = l instanceof Error ? l.stack : null;
    return p.createElement(
        p.Fragment,
        null,
        p.createElement("h2", null, "Unexpected Application Error!"),
        p.createElement("h3", { style: { fontStyle: "italic" } }, u),
        c
            ? p.createElement("pre", { style: { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" } }, c)
            : null,
        null,
    );
}, null);
class I extends p.Component {
    constructor(e) {
        super(e), (this.state = { location: e.location, revalidation: e.revalidation, error: e.error });
    }
    static getDerivedStateFromError(e) {
        return { error: e };
    }
    static getDerivedStateFromProps(e, t) {
        return t.location !== e.location || ("idle" !== t.revalidation && "idle" === e.revalidation)
            ? { error: e.error, location: e.location, revalidation: e.revalidation }
            : {
                  error: void 0 !== e.error ? e.error : t.error,
                  location: t.location,
                  revalidation: e.revalidation || t.revalidation,
              };
    }
    componentDidCatch(e, t) {
        console.error("React Router caught the following error during render", e, t);
    }
    render() {
        return void 0 !== this.state.error
            ? p.createElement(
                  R.Provider,
                  { value: this.props.routeContext },
                  p.createElement(k.Provider, { value: this.state.error, children: this.props.component }),
              )
            : this.props.children;
    }
}
function P(e) {
    let { routeContext: t, match: r, children: n } = e,
        a = p.useContext(D);
    return (
        a &&
            a.static &&
            a.staticContext &&
            (r.route.errorElement || r.route.ErrorBoundary) &&
            (a.staticContext._deepestRenderedBoundaryId = r.route.id),
        p.createElement(R.Provider, { value: t }, n)
    );
}
var F =
    (((s = F || {}).UseBlocker = "useBlocker"),
    (s.UseLoaderData = "useLoaderData"),
    (s.UseActionData = "useActionData"),
    (s.UseRouteError = "useRouteError"),
    (s.UseNavigation = "useNavigation"),
    (s.UseRouteLoaderData = "useRouteLoaderData"),
    (s.UseMatches = "useMatches"),
    (s.UseRevalidator = "useRevalidator"),
    (s.UseNavigateStable = "useNavigate"),
    (s.UseRouteId = "useRouteId"),
    s);
let B = {};
function Y(e) {
    g(!1);
}
function U(e) {
    let {
        basename: t = "/",
        children: r = null,
        location: n,
        navigationType: a = u.Pop,
        navigator: s,
        static: i = !1,
        future: o,
    } = e;
    N() && g(!1);
    let l = t.replace(/^\/*/, "/"),
        c = p.useMemo(
            () => ({ basename: l, navigator: s, static: i, future: C({ v7_relativeSplatPath: !1 }, o) }),
            [l, o, s, i],
        );
    "string" == typeof n && (n = b(n));
    let { pathname: d = "/", search: f = "", hash: h = "", state: m = null, key: _ = "default" } = n,
        v = p.useMemo(() => {
            let e = T(d, l);
            return null == e
                ? null
                : { location: { pathname: e, search: f, hash: h, state: m, key: _ }, navigationType: a };
        }, [l, d, f, h, m, _, a]);
    return null == v
        ? null
        : p.createElement(A.Provider, { value: c }, p.createElement(M.Provider, { children: r, value: v }));
}
function j(e) {
    let { children: t, location: r } = e;
    return (function (e, t) {
        var r, n;
        let a;
        N() || g(!1);
        let { navigator: s } = p.useContext(A),
            { matches: i } = p.useContext(R),
            o = i[i.length - 1],
            l = o ? o.params : {};
        o && o.pathname;
        let c = o ? o.pathnameBase : "/";
        o && o.route;
        let d = (N() || g(!1), p.useContext(M).location);
        if (t) {
            let e = "string" == typeof t ? b(t) : t;
            "/" === c || (null == (r = e.pathname) ? void 0 : r.startsWith(c)) || g(!1), (a = e);
        } else a = d;
        let f = a.pathname || "/",
            h = f;
        if ("/" !== c) {
            let e = c.replace(/^\//, "").split("/");
            h = "/" + f.replace(/^\//, "").split("/").slice(e.length).join("/");
        }
        let m =
                (void 0 === n && (n = "/"),
                (function (e, t, r, n) {
                    let a = T(("string" == typeof t ? b(t) : t).pathname || "/", r);
                    if (null == a) return null;
                    let s = (function e(t, r, n, a) {
                        void 0 === r && (r = []), void 0 === n && (n = []), void 0 === a && (a = "");
                        let s = (t, s, i) => {
                            var o, l;
                            let u,
                                c,
                                d = {
                                    relativePath: void 0 === i ? t.path || "" : i,
                                    caseSensitive: !0 === t.caseSensitive,
                                    childrenIndex: s,
                                    route: t,
                                };
                            d.relativePath.startsWith("/") &&
                                (g(
                                    d.relativePath.startsWith(a),
                                    'Absolute route path "' +
                                        d.relativePath +
                                        '" nested under path "' +
                                        a +
                                        '" is not valid. An absolute child route path must start with the combined path of all its parent routes.',
                                ),
                                (d.relativePath = d.relativePath.slice(a.length)));
                            let f = x([a, d.relativePath]),
                                p = n.concat(d);
                            t.children &&
                                t.children.length > 0 &&
                                (g(
                                    !0 !== t.index,
                                    'Index routes must not have child routes. Please remove all child routes from route path "' +
                                        f +
                                        '".',
                                ),
                                e(t.children, r, p, f)),
                                (null != t.path || t.index) &&
                                    r.push({
                                        path: f,
                                        score:
                                            ((o = f),
                                            (l = t.index),
                                            (c = (u = o.split("/")).length),
                                            u.some(E) && (c += -2),
                                            l && (c += 2),
                                            u
                                                .filter((e) => !E(e))
                                                .reduce((e, t) => e + (y.test(t) ? 3 : "" === t ? 1 : 10), c)),
                                        routesMeta: p,
                                    });
                        };
                        return (
                            t.forEach((e, t) => {
                                var r;
                                if ("" !== e.path && null != (r = e.path) && r.includes("?"))
                                    for (let r of (function e(t) {
                                        let r = t.split("/");
                                        if (0 === r.length) return [];
                                        let [n, ...a] = r,
                                            s = n.endsWith("?"),
                                            i = n.replace(/\?$/, "");
                                        if (0 === a.length) return s ? [i, ""] : [i];
                                        let o = e(a.join("/")),
                                            l = [];
                                        return (
                                            l.push(...o.map((e) => ("" === e ? i : [i, e].join("/")))),
                                            s && l.push(...o),
                                            l.map((e) => (t.startsWith("/") && "" === e ? "/" : e))
                                        );
                                    })(e.path))
                                        s(e, t, r);
                                else s(e, t);
                            }),
                            r
                        );
                    })(e);
                    s.sort((e, t) => {
                        var r, n;
                        return e.score !== t.score
                            ? t.score - e.score
                            : ((r = e.routesMeta.map((e) => e.childrenIndex)),
                              (n = t.routesMeta.map((e) => e.childrenIndex)),
                              r.length === n.length && r.slice(0, -1).every((e, t) => e === n[t])
                                  ? r[r.length - 1] - n[n.length - 1]
                                  : 0);
                    });
                    let i = null;
                    for (let e = 0; null == i && e < s.length; ++e) {
                        let t = (function (e) {
                            try {
                                return e
                                    .split("/")
                                    .map((e) => decodeURIComponent(e).replace(/\//g, "%2F"))
                                    .join("/");
                            } catch (t) {
                                return (
                                    v(
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
                        i = (function (e, t, r) {
                            void 0 === r && (r = !1);
                            let { routesMeta: n } = e,
                                a = {},
                                s = "/",
                                i = [];
                            for (let e = 0; e < n.length; ++e) {
                                let o = n[e],
                                    l = e === n.length - 1,
                                    u = "/" === s ? t : t.slice(s.length) || "/",
                                    c = S({ path: o.relativePath, caseSensitive: o.caseSensitive, end: l }, u),
                                    d = o.route;
                                if (
                                    (!c &&
                                        l &&
                                        r &&
                                        !n[n.length - 1].route.index &&
                                        (c = S({ path: o.relativePath, caseSensitive: o.caseSensitive, end: !1 }, u)),
                                    !c)
                                )
                                    return null;
                                Object.assign(a, c.params),
                                    i.push({
                                        params: a,
                                        pathname: x([s, c.pathname]),
                                        pathnameBase: w(x([s, c.pathnameBase])),
                                        route: d,
                                    }),
                                    "/" !== c.pathnameBase && (s = x([s, c.pathnameBase]));
                            }
                            return i;
                        })(s[e], t, n);
                    }
                    return i;
                })(e, { pathname: h }, n, !1)),
            _ = (function (e, t, r, n) {
                var a, s;
                if ((void 0 === t && (t = []), void 0 === r && (r = null), void 0 === n && (n = null), null == e)) {
                    if (!r) return null;
                    if (r.errors) e = r.matches;
                    else {
                        if (
                            null == (s = n) ||
                            !s.v7_partialHydration ||
                            0 !== t.length ||
                            r.initialized ||
                            !(r.matches.length > 0)
                        )
                            return null;
                        e = r.matches;
                    }
                }
                let i = e,
                    o = null == (a = r) ? void 0 : a.errors;
                if (null != o) {
                    let e = i.findIndex((e) => e.route.id && (null == o ? void 0 : o[e.route.id]) !== void 0);
                    e >= 0 || g(!1), (i = i.slice(0, Math.min(i.length, e + 1)));
                }
                let l = !1,
                    u = -1;
                if (r && n && n.v7_partialHydration)
                    for (let e = 0; e < i.length; e++) {
                        let t = i[e];
                        if (((t.route.HydrateFallback || t.route.hydrateFallbackElement) && (u = e), t.route.id)) {
                            let { loaderData: e, errors: n } = r,
                                a = t.route.loader && void 0 === e[t.route.id] && (!n || void 0 === n[t.route.id]);
                            if (t.route.lazy || a) {
                                (l = !0), (i = u >= 0 ? i.slice(0, u + 1) : [i[0]]);
                                break;
                            }
                        }
                    }
                return i.reduceRight((e, n, a) => {
                    var s;
                    let c,
                        d = !1,
                        f = null,
                        h = null;
                    r &&
                        ((c = o && n.route.id ? o[n.route.id] : void 0),
                        (f = n.route.errorElement || L),
                        l &&
                            (u < 0 && 0 === a
                                ? ((s = "route-fallback"), B[s] || (B[s] = !0), (d = !0), (h = null))
                                : u === a && ((d = !0), (h = n.route.hydrateFallbackElement || null))));
                    let m = t.concat(i.slice(0, a + 1)),
                        _ = () => {
                            let t;
                            return (
                                (t = c
                                    ? f
                                    : d
                                      ? h
                                      : n.route.Component
                                        ? p.createElement(n.route.Component, null)
                                        : n.route.element
                                          ? n.route.element
                                          : e),
                                p.createElement(P, {
                                    match: n,
                                    routeContext: { outlet: e, matches: m, isDataRoute: null != r },
                                    children: t,
                                })
                            );
                        };
                    return r && (n.route.ErrorBoundary || n.route.errorElement || 0 === a)
                        ? p.createElement(I, {
                              location: r.location,
                              revalidation: r.revalidation,
                              component: f,
                              error: c,
                              children: _(),
                              routeContext: { outlet: null, matches: m, isDataRoute: !0 },
                          })
                        : _();
                }, null);
            })(
                m &&
                    m.map((e) =>
                        Object.assign({}, e, {
                            params: Object.assign({}, l, e.params),
                            pathname: x([c, s.encodeLocation ? s.encodeLocation(e.pathname).pathname : e.pathname]),
                            pathnameBase:
                                "/" === e.pathnameBase
                                    ? c
                                    : x([
                                          c,
                                          s.encodeLocation ? s.encodeLocation(e.pathnameBase).pathname : e.pathnameBase,
                                      ]),
                        }),
                    ),
                i,
                void 0,
                void 0,
            );
        return t && _
            ? p.createElement(
                  M.Provider,
                  {
                      value: {
                          location: C({ pathname: "/", search: "", hash: "", state: null, key: "default" }, a),
                          navigationType: u.Pop,
                      },
                  },
                  _,
              )
            : _;
    })(
        (function e(t, r) {
            void 0 === r && (r = []);
            let n = [];
            return (
                p.Children.forEach(t, (t, a) => {
                    if (!p.isValidElement(t)) return;
                    let s = [...r, a];
                    if (t.type === p.Fragment) return void n.push.apply(n, e(t.props.children, s));
                    t.type !== Y && g(!1), t.props.index && t.props.children && g(!1);
                    let i = {
                        id: t.props.id || s.join("-"),
                        caseSensitive: t.props.caseSensitive,
                        element: t.props.element,
                        Component: t.props.Component,
                        index: t.props.index,
                        path: t.props.path,
                        loader: t.props.loader,
                        action: t.props.action,
                        errorElement: t.props.errorElement,
                        ErrorBoundary: t.props.ErrorBoundary,
                        hasErrorBoundary: null != t.props.ErrorBoundary || null != t.props.errorElement,
                        shouldRevalidate: t.props.shouldRevalidate,
                        handle: t.props.handle,
                        lazy: t.props.lazy,
                    };
                    t.props.children && (i.children = e(t.props.children, s)), n.push(i);
                }),
                n
            );
        })(t),
        r,
    );
}
h.startTransition;
var V =
    (((i = V || {})[(i.pending = 0)] = "pending"), (i[(i.success = 1)] = "success"), (i[(i.error = 2)] = "error"), i);
new Promise(() => {}), p.Component;
var H = r(873263);
try {
    window.__reactRouterVersion = "6";
} catch (e) {}
h.startTransition,
    _.flushSync,
    h.useId,
    "u" > typeof window && void 0 !== window.document && window.document.createElement,
    ((o = d || (d = {})).UseScrollRestoration = "useScrollRestoration"),
    (o.UseSubmit = "useSubmit"),
    (o.UseSubmitFetcher = "useSubmitFetcher"),
    (o.UseFetcher = "useFetcher"),
    (o.useViewTransitionState = "useViewTransitionState"),
    ((l = f || (f = {})).UseFetcher = "useFetcher"),
    (l.UseFetchers = "useFetchers"),
    (l.UseScrollRestoration = "useScrollRestoration");
let G =
    "u" > typeof window && void 0 !== window.document && void 0 !== window.document.createElement
        ? p.useLayoutEffect
        : () => {};
function z(e) {
    let { children: t } = e,
        r = (0, H.W6)(),
        [n, a] = p.useState(() => ({ location: r.location, action: r.action }));
    return (
        G(() => {
            r.listen((e, t) => a({ location: e, action: t }));
        }, [r]),
        p.createElement(
            U,
            { navigationType: n.action, location: n.location, navigator: r },
            p.createElement(j, null, p.createElement(Y, { path: "*", element: t })),
        )
    );
}
