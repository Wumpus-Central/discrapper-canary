"use strict";
r.d(t, { Kl: () => $ });
var n,
    s,
    a,
    o,
    i,
    u,
    c,
    l,
    d,
    f,
    p = r(64700),
    h = r.t(p, 2),
    m = r(340287),
    v = r.t(m, 2);
function g(e, t) {
    if (!1 === e || null == e) throw Error(t);
}
function y(e, t) {
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
((n = c || (c = {})).Pop = "POP"),
    (n.Push = "PUSH"),
    (n.Replace = "REPLACE"),
    ((s = l || (l = {})).data = "data"),
    (s.deferred = "deferred"),
    (s.redirect = "redirect"),
    (s.error = "error");
let _ = /^:[\w-]+$/,
    x = (e) => "*" === e;
function w(e, t) {
    var r, n, s;
    let a, o;
    "string" == typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
    let [i, u] =
            ((r = e.path),
            (n = e.caseSensitive),
            (s = e.end),
            void 0 === n && (n = !1),
            void 0 === s && (s = !0),
            y(
                "*" === r || !r.endsWith("*") || r.endsWith("/*"),
                'Route path "' +
                    r +
                    '" will be treated as if it were "' +
                    r.replace(/\*$/, "/*") +
                    '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' +
                    r.replace(/\*$/, "/*") +
                    '".',
            ),
            (a = []),
            (o =
                "^" +
                r
                    .replace(/\/*\*?$/, "")
                    .replace(/^\/*/, "/")
                    .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
                    .replace(
                        /\/:([\w-]+)(\?)?/g,
                        (e, t, r) => (
                            a.push({ paramName: t, isOptional: null != r }), r ? "/?([^\\/]+)?" : "/([^\\/]+)"
                        ),
                    )),
            r.endsWith("*")
                ? (a.push({ paramName: "*" }), (o += "*" === r || "/*" === r ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
                : s
                  ? (o += "\\/*$")
                  : "" !== r && "/" !== r && (o += "(?:(?=\\/|$))"),
            [new RegExp(o, n ? void 0 : "i"), a]),
        c = t.match(i);
    if (!c) return null;
    let l = c[0],
        d = l.replace(/(.)\/+$/, "$1"),
        f = c.slice(1);
    return {
        params: u.reduce((e, t, r) => {
            let { paramName: n, isOptional: s } = t;
            if ("*" === n) {
                let e = f[r] || "";
                d = l.slice(0, l.length - e.length).replace(/(.)\/+$/, "$1");
            }
            let a = f[r];
            return s && !a ? (e[n] = void 0) : (e[n] = (a || "").replace(/%2F/g, "/")), e;
        }, {}),
        pathname: l,
        pathnameBase: d,
        pattern: e,
    };
}
function k(e, t) {
    if ("/" === t) return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let r = t.endsWith("/") ? t.length - 1 : t.length,
        n = e.charAt(r);
    return n && "/" !== n ? null : e.slice(r) || "/";
}
let M = (e) => e.join("/").replace(/\/\/+/g, "/"),
    S = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/");
function L() {
    return (L = Object.assign
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
let T = p.createContext(null),
    E = p.createContext(null),
    D = p.createContext(null),
    C = p.createContext(null),
    O = p.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
    P = p.createContext(null);
function A() {
    return null != p.useContext(C);
}
let j = p.createElement(function () {
    var e;
    let t,
        r,
        n,
        s,
        a,
        o,
        i,
        u =
            ((a = p.useContext(P)),
            (o = (Y.UseRouteError, (t = p.useContext(E)) || g(!1), t)),
            (i =
                (Y.UseRouteError,
                (s = ((r = p.useContext(O)) || g(!1), (n = r)).matches[n.matches.length - 1]).route.id || g(!1),
                s.route.id)),
            void 0 !== a ? a : null == (e = o.errors) ? void 0 : e[i]),
        c =
            null != u &&
            "number" == typeof u.status &&
            "string" == typeof u.statusText &&
            "boolean" == typeof u.internal &&
            "data" in u
                ? u.status + " " + u.statusText
                : u instanceof Error
                  ? u.message
                  : JSON.stringify(u),
        l = u instanceof Error ? u.stack : null;
    return p.createElement(
        p.Fragment,
        null,
        p.createElement("h2", null, "Unexpected Application Error!"),
        p.createElement("h3", { style: { fontStyle: "italic" } }, c),
        l
            ? p.createElement("pre", { style: { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" } }, l)
            : null,
        null,
    );
}, null);
class R extends p.Component {
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
                  O.Provider,
                  { value: this.props.routeContext },
                  p.createElement(P.Provider, { value: this.state.error, children: this.props.component }),
              )
            : this.props.children;
    }
}
function I(e) {
    let { routeContext: t, match: r, children: n } = e,
        s = p.useContext(T);
    return (
        s &&
            s.static &&
            s.staticContext &&
            (r.route.errorElement || r.route.ErrorBoundary) &&
            (s.staticContext._deepestRenderedBoundaryId = r.route.id),
        p.createElement(O.Provider, { value: t }, n)
    );
}
var Y =
    (((a = Y || {}).UseBlocker = "useBlocker"),
    (a.UseLoaderData = "useLoaderData"),
    (a.UseActionData = "useActionData"),
    (a.UseRouteError = "useRouteError"),
    (a.UseNavigation = "useNavigation"),
    (a.UseRouteLoaderData = "useRouteLoaderData"),
    (a.UseMatches = "useMatches"),
    (a.UseRevalidator = "useRevalidator"),
    (a.UseNavigateStable = "useNavigate"),
    (a.UseRouteId = "useRouteId"),
    a);
let N = {};
function F(e) {
    g(!1);
}
function H(e) {
    let {
        basename: t = "/",
        children: r = null,
        location: n,
        navigationType: s = c.Pop,
        navigator: a,
        static: o = !1,
        future: i,
    } = e;
    A() && g(!1);
    let u = t.replace(/^\/*/, "/"),
        l = p.useMemo(
            () => ({ basename: u, navigator: a, static: o, future: L({ v7_relativeSplatPath: !1 }, i) }),
            [u, i, a, o],
        );
    "string" == typeof n && (n = b(n));
    let { pathname: d = "/", search: f = "", hash: h = "", state: m = null, key: v = "default" } = n,
        y = p.useMemo(() => {
            let e = k(d, u);
            return null == e
                ? null
                : { location: { pathname: e, search: f, hash: h, state: m, key: v }, navigationType: s };
        }, [u, d, f, h, m, v, s]);
    return null == y
        ? null
        : p.createElement(D.Provider, { value: l }, p.createElement(C.Provider, { children: r, value: y }));
}
function z(e) {
    let { children: t, location: r } = e;
    return (function (e, t) {
        var r, n;
        let s;
        A() || g(!1);
        let { navigator: a } = p.useContext(D),
            { matches: o } = p.useContext(O),
            i = o[o.length - 1],
            u = i ? i.params : {};
        i && i.pathname;
        let l = i ? i.pathnameBase : "/";
        i && i.route;
        let d = (A() || g(!1), p.useContext(C).location);
        if (t) {
            let e = "string" == typeof t ? b(t) : t;
            "/" === l || (null == (r = e.pathname) ? void 0 : r.startsWith(l)) || g(!1), (s = e);
        } else s = d;
        let f = s.pathname || "/",
            h = f;
        if ("/" !== l) {
            let e = l.replace(/^\//, "").split("/");
            h = "/" + f.replace(/^\//, "").split("/").slice(e.length).join("/");
        }
        let m =
                (void 0 === n && (n = "/"),
                (function (e, t, r, n) {
                    let s = k(("string" == typeof t ? b(t) : t).pathname || "/", r);
                    if (null == s) return null;
                    let a = (function e(t, r, n, s) {
                        void 0 === r && (r = []), void 0 === n && (n = []), void 0 === s && (s = "");
                        let a = (t, a, o) => {
                            var i, u;
                            let c,
                                l,
                                d = {
                                    relativePath: void 0 === o ? t.path || "" : o,
                                    caseSensitive: !0 === t.caseSensitive,
                                    childrenIndex: a,
                                    route: t,
                                };
                            d.relativePath.startsWith("/") &&
                                (g(
                                    d.relativePath.startsWith(s),
                                    'Absolute route path "' +
                                        d.relativePath +
                                        '" nested under path "' +
                                        s +
                                        '" is not valid. An absolute child route path must start with the combined path of all its parent routes.',
                                ),
                                (d.relativePath = d.relativePath.slice(s.length)));
                            let f = M([s, d.relativePath]),
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
                                            ((i = f),
                                            (u = t.index),
                                            (l = (c = i.split("/")).length),
                                            c.some(x) && (l += -2),
                                            u && (l += 2),
                                            c
                                                .filter((e) => !x(e))
                                                .reduce((e, t) => e + (_.test(t) ? 3 : "" === t ? 1 : 10), l)),
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
                                        let [n, ...s] = r,
                                            a = n.endsWith("?"),
                                            o = n.replace(/\?$/, "");
                                        if (0 === s.length) return a ? [o, ""] : [o];
                                        let i = e(s.join("/")),
                                            u = [];
                                        return (
                                            u.push(...i.map((e) => ("" === e ? o : [o, e].join("/")))),
                                            a && u.push(...i),
                                            u.map((e) => (t.startsWith("/") && "" === e ? "/" : e))
                                        );
                                    })(e.path))
                                        a(e, t, r);
                                else a(e, t);
                            }),
                            r
                        );
                    })(e);
                    a.sort((e, t) => {
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
                    for (let e = 0; null == o && e < a.length; ++e) {
                        let t = (function (e) {
                            try {
                                return e
                                    .split("/")
                                    .map((e) => decodeURIComponent(e).replace(/\//g, "%2F"))
                                    .join("/");
                            } catch (t) {
                                return (
                                    y(
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
                        })(s);
                        o = (function (e, t, r) {
                            void 0 === r && (r = !1);
                            let { routesMeta: n } = e,
                                s = {},
                                a = "/",
                                o = [];
                            for (let e = 0; e < n.length; ++e) {
                                let i = n[e],
                                    u = e === n.length - 1,
                                    c = "/" === a ? t : t.slice(a.length) || "/",
                                    l = w({ path: i.relativePath, caseSensitive: i.caseSensitive, end: u }, c),
                                    d = i.route;
                                if (
                                    (!l &&
                                        u &&
                                        r &&
                                        !n[n.length - 1].route.index &&
                                        (l = w({ path: i.relativePath, caseSensitive: i.caseSensitive, end: !1 }, c)),
                                    !l)
                                )
                                    return null;
                                Object.assign(s, l.params),
                                    o.push({
                                        params: s,
                                        pathname: M([a, l.pathname]),
                                        pathnameBase: S(M([a, l.pathnameBase])),
                                        route: d,
                                    }),
                                    "/" !== l.pathnameBase && (a = M([a, l.pathnameBase]));
                            }
                            return o;
                        })(a[e], t, n);
                    }
                    return o;
                })(e, { pathname: h }, n, !1)),
            v = (function (e, t, r, n) {
                var s, a;
                if ((void 0 === t && (t = []), void 0 === r && (r = null), void 0 === n && (n = null), null == e)) {
                    if (!r) return null;
                    if (r.errors) e = r.matches;
                    else {
                        if (
                            null == (a = n) ||
                            !a.v7_partialHydration ||
                            0 !== t.length ||
                            r.initialized ||
                            !(r.matches.length > 0)
                        )
                            return null;
                        e = r.matches;
                    }
                }
                let o = e,
                    i = null == (s = r) ? void 0 : s.errors;
                if (null != i) {
                    let e = o.findIndex((e) => e.route.id && (null == i ? void 0 : i[e.route.id]) !== void 0);
                    e >= 0 || g(!1), (o = o.slice(0, Math.min(o.length, e + 1)));
                }
                let u = !1,
                    c = -1;
                if (r && n && n.v7_partialHydration)
                    for (let e = 0; e < o.length; e++) {
                        let t = o[e];
                        if (((t.route.HydrateFallback || t.route.hydrateFallbackElement) && (c = e), t.route.id)) {
                            let { loaderData: e, errors: n } = r,
                                s = t.route.loader && void 0 === e[t.route.id] && (!n || void 0 === n[t.route.id]);
                            if (t.route.lazy || s) {
                                (u = !0), (o = c >= 0 ? o.slice(0, c + 1) : [o[0]]);
                                break;
                            }
                        }
                    }
                return o.reduceRight((e, n, s) => {
                    var a;
                    let l,
                        d = !1,
                        f = null,
                        h = null;
                    r &&
                        ((l = i && n.route.id ? i[n.route.id] : void 0),
                        (f = n.route.errorElement || j),
                        u &&
                            (c < 0 && 0 === s
                                ? ((a = "route-fallback"), N[a] || (N[a] = !0), (d = !0), (h = null))
                                : c === s && ((d = !0), (h = n.route.hydrateFallbackElement || null))));
                    let m = t.concat(o.slice(0, s + 1)),
                        v = () => {
                            let t;
                            return (
                                (t = l
                                    ? f
                                    : d
                                      ? h
                                      : n.route.Component
                                        ? p.createElement(n.route.Component, null)
                                        : n.route.element
                                          ? n.route.element
                                          : e),
                                p.createElement(I, {
                                    match: n,
                                    routeContext: { outlet: e, matches: m, isDataRoute: null != r },
                                    children: t,
                                })
                            );
                        };
                    return r && (n.route.ErrorBoundary || n.route.errorElement || 0 === s)
                        ? p.createElement(R, {
                              location: r.location,
                              revalidation: r.revalidation,
                              component: f,
                              error: l,
                              children: v(),
                              routeContext: { outlet: null, matches: m, isDataRoute: !0 },
                          })
                        : v();
                }, null);
            })(
                m &&
                    m.map((e) =>
                        Object.assign({}, e, {
                            params: Object.assign({}, u, e.params),
                            pathname: M([l, a.encodeLocation ? a.encodeLocation(e.pathname).pathname : e.pathname]),
                            pathnameBase:
                                "/" === e.pathnameBase
                                    ? l
                                    : M([
                                          l,
                                          a.encodeLocation ? a.encodeLocation(e.pathnameBase).pathname : e.pathnameBase,
                                      ]),
                        }),
                    ),
                o,
                void 0,
                void 0,
            );
        return t && v
            ? p.createElement(
                  C.Provider,
                  {
                      value: {
                          location: L({ pathname: "/", search: "", hash: "", state: null, key: "default" }, s),
                          navigationType: c.Pop,
                      },
                  },
                  v,
              )
            : v;
    })(
        (function e(t, r) {
            void 0 === r && (r = []);
            let n = [];
            return (
                p.Children.forEach(t, (t, s) => {
                    if (!p.isValidElement(t)) return;
                    let a = [...r, s];
                    if (t.type === p.Fragment) return void n.push.apply(n, e(t.props.children, a));
                    t.type !== F && g(!1), t.props.index && t.props.children && g(!1);
                    let o = {
                        id: t.props.id || a.join("-"),
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
                    t.props.children && (o.children = e(t.props.children, a)), n.push(o);
                }),
                n
            );
        })(t),
        r,
    );
}
h.startTransition;
var B =
    (((o = B || {})[(o.pending = 0)] = "pending"), (o[(o.success = 1)] = "success"), (o[(o.error = 2)] = "error"), o);
new Promise(() => {}), p.Component;
var U = r(873263);
try {
    window.__reactRouterVersion = "6";
} catch (e) {}
h.startTransition,
    v.flushSync,
    h.useId,
    "u" > typeof window && void 0 !== window.document && window.document.createElement,
    ((i = d || (d = {})).UseScrollRestoration = "useScrollRestoration"),
    (i.UseSubmit = "useSubmit"),
    (i.UseSubmitFetcher = "useSubmitFetcher"),
    (i.UseFetcher = "useFetcher"),
    (i.useViewTransitionState = "useViewTransitionState"),
    ((u = f || (f = {})).UseFetcher = "useFetcher"),
    (u.UseFetchers = "useFetchers"),
    (u.UseScrollRestoration = "useScrollRestoration");
let W =
    "u" > typeof window && void 0 !== window.document && void 0 !== window.document.createElement
        ? p.useLayoutEffect
        : () => {};
function $(e) {
    let { children: t } = e,
        r = (0, U.W6)(),
        [n, s] = p.useState(() => ({ location: r.location, action: r.action }));
    return (
        W(() => {
            r.listen((e, t) => s({ location: e, action: t }));
        }, [r]),
        p.createElement(
            H,
            { navigationType: n.action, location: n.location, navigator: r },
            p.createElement(z, null, p.createElement(F, { path: "*", element: t })),
        )
    );
}
