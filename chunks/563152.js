"use strict";
r.d(t, { Kl: () => R });
var n,
    i,
    o,
    a,
    s,
    l,
    u = r(64700),
    c = r.t(u, 2),
    f = r(340287),
    d = r.t(f, 2),
    p = r(207970);
function h() {
    return (h = Object.assign
        ? Object.assign.bind()
        : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
          }).apply(this, arguments);
}
let m = u.createContext(null),
    g = u.createContext(null),
    v = u.createContext(null),
    y = u.createContext(null),
    b = u.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
    w = u.createContext(null);
function _() {
    return null != u.useContext(y);
}
let x = u.createElement(function () {
    var e;
    let t,
        r,
        n,
        i,
        o,
        a,
        s,
        l =
            ((o = u.useContext(w)),
            (a = (k.UseRouteError, (t = u.useContext(g)) || (0, p.Oi)(!1), t)),
            (s =
                (k.UseRouteError,
                (i = ((r = u.useContext(b)) || (0, p.Oi)(!1), (n = r)).matches[n.matches.length - 1]).route.id ||
                    (0, p.Oi)(!1),
                i.route.id)),
            void 0 !== o ? o : null == (e = a.errors) ? void 0 : e[s]),
        c = (0, p.pX)(l) ? l.status + " " + l.statusText : l instanceof Error ? l.message : JSON.stringify(l),
        f = l instanceof Error ? l.stack : null;
    return u.createElement(
        u.Fragment,
        null,
        u.createElement("h2", null, "Unexpected Application Error!"),
        u.createElement("h3", { style: { fontStyle: "italic" } }, c),
        f
            ? u.createElement("pre", { style: { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" } }, f)
            : null,
        null,
    );
}, null);
class E extends u.Component {
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
            ? u.createElement(
                  b.Provider,
                  { value: this.props.routeContext },
                  u.createElement(w.Provider, { value: this.state.error, children: this.props.component }),
              )
            : this.props.children;
    }
}
function S(e) {
    let { routeContext: t, match: r, children: n } = e,
        i = u.useContext(m);
    return (
        i &&
            i.static &&
            i.staticContext &&
            (r.route.errorElement || r.route.ErrorBoundary) &&
            (i.staticContext._deepestRenderedBoundaryId = r.route.id),
        u.createElement(b.Provider, { value: t }, n)
    );
}
var k =
    (((n = k || {}).UseBlocker = "useBlocker"),
    (n.UseLoaderData = "useLoaderData"),
    (n.UseActionData = "useActionData"),
    (n.UseRouteError = "useRouteError"),
    (n.UseNavigation = "useNavigation"),
    (n.UseRouteLoaderData = "useRouteLoaderData"),
    (n.UseMatches = "useMatches"),
    (n.UseRevalidator = "useRevalidator"),
    (n.UseNavigateStable = "useNavigate"),
    (n.UseRouteId = "useRouteId"),
    n);
let T = {};
function C(e) {
    (0, p.Oi)(!1);
}
function P(e) {
    let {
        basename: t = "/",
        children: r = null,
        location: n,
        navigationType: i = p.rc.Pop,
        navigator: o,
        static: a = !1,
        future: s,
    } = e;
    _() && (0, p.Oi)(!1);
    let l = t.replace(/^\/*/, "/"),
        c = u.useMemo(
            () => ({ basename: l, navigator: o, static: a, future: h({ v7_relativeSplatPath: !1 }, s) }),
            [l, s, o, a],
        );
    "string" == typeof n && (n = (0, p.Rr)(n));
    let { pathname: f = "/", search: d = "", hash: m = "", state: g = null, key: b = "default" } = n,
        w = u.useMemo(() => {
            let e = (0, p.pb)(f, l);
            return null == e
                ? null
                : { location: { pathname: e, search: d, hash: m, state: g, key: b }, navigationType: i };
        }, [l, f, d, m, g, b, i]);
    return null == w
        ? null
        : u.createElement(v.Provider, { value: c }, u.createElement(y.Provider, { children: r, value: w }));
}
function A(e) {
    let { children: t, location: r } = e;
    return (function (e, t) {
        let r;
        _() || (0, p.Oi)(!1);
        let { navigator: n } = u.useContext(v),
            { matches: i } = u.useContext(b),
            o = i[i.length - 1],
            a = o ? o.params : {};
        o && o.pathname;
        let s = o ? o.pathnameBase : "/";
        o && o.route;
        let l = (_() || (0, p.Oi)(!1), u.useContext(y).location);
        if (t) {
            var c;
            let e = "string" == typeof t ? (0, p.Rr)(t) : t;
            "/" === s || (null == (c = e.pathname) ? void 0 : c.startsWith(s)) || (0, p.Oi)(!1), (r = e);
        } else r = l;
        let f = r.pathname || "/",
            d = f;
        if ("/" !== s) {
            let e = s.replace(/^\//, "").split("/");
            d = "/" + f.replace(/^\//, "").split("/").slice(e.length).join("/");
        }
        let m = (0, p.ue)(e, { pathname: d }),
            g = (function (e, t, r, n) {
                var i, o;
                if ((void 0 === t && (t = []), void 0 === r && (r = null), void 0 === n && (n = null), null == e)) {
                    if (!r) return null;
                    if (r.errors) e = r.matches;
                    else {
                        if (
                            null == (o = n) ||
                            !o.v7_partialHydration ||
                            0 !== t.length ||
                            r.initialized ||
                            !(r.matches.length > 0)
                        )
                            return null;
                        e = r.matches;
                    }
                }
                let a = e,
                    s = null == (i = r) ? void 0 : i.errors;
                if (null != s) {
                    let e = a.findIndex((e) => e.route.id && (null == s ? void 0 : s[e.route.id]) !== void 0);
                    e >= 0 || (0, p.Oi)(!1), (a = a.slice(0, Math.min(a.length, e + 1)));
                }
                let l = !1,
                    c = -1;
                if (r && n && n.v7_partialHydration)
                    for (let e = 0; e < a.length; e++) {
                        let t = a[e];
                        if (((t.route.HydrateFallback || t.route.hydrateFallbackElement) && (c = e), t.route.id)) {
                            let { loaderData: e, errors: n } = r,
                                i = t.route.loader && void 0 === e[t.route.id] && (!n || void 0 === n[t.route.id]);
                            if (t.route.lazy || i) {
                                (l = !0), (a = c >= 0 ? a.slice(0, c + 1) : [a[0]]);
                                break;
                            }
                        }
                    }
                return a.reduceRight((e, n, i) => {
                    var o;
                    let f,
                        d = !1,
                        p = null,
                        h = null;
                    r &&
                        ((f = s && n.route.id ? s[n.route.id] : void 0),
                        (p = n.route.errorElement || x),
                        l &&
                            (c < 0 && 0 === i
                                ? ((o = "route-fallback"), T[o] || (T[o] = !0), (d = !0), (h = null))
                                : c === i && ((d = !0), (h = n.route.hydrateFallbackElement || null))));
                    let m = t.concat(a.slice(0, i + 1)),
                        g = () => {
                            let t;
                            return (
                                (t = f
                                    ? p
                                    : d
                                      ? h
                                      : n.route.Component
                                        ? u.createElement(n.route.Component, null)
                                        : n.route.element
                                          ? n.route.element
                                          : e),
                                u.createElement(S, {
                                    match: n,
                                    routeContext: { outlet: e, matches: m, isDataRoute: null != r },
                                    children: t,
                                })
                            );
                        };
                    return r && (n.route.ErrorBoundary || n.route.errorElement || 0 === i)
                        ? u.createElement(E, {
                              location: r.location,
                              revalidation: r.revalidation,
                              component: p,
                              error: f,
                              children: g(),
                              routeContext: { outlet: null, matches: m, isDataRoute: !0 },
                          })
                        : g();
                }, null);
            })(
                m &&
                    m.map((e) =>
                        Object.assign({}, e, {
                            params: Object.assign({}, a, e.params),
                            pathname: (0, p.HS)([
                                s,
                                n.encodeLocation ? n.encodeLocation(e.pathname).pathname : e.pathname,
                            ]),
                            pathnameBase:
                                "/" === e.pathnameBase
                                    ? s
                                    : (0, p.HS)([
                                          s,
                                          n.encodeLocation ? n.encodeLocation(e.pathnameBase).pathname : e.pathnameBase,
                                      ]),
                        }),
                    ),
                i,
                void 0,
                void 0,
            );
        return t && g
            ? u.createElement(
                  y.Provider,
                  {
                      value: {
                          location: h({ pathname: "/", search: "", hash: "", state: null, key: "default" }, r),
                          navigationType: p.rc.Pop,
                      },
                  },
                  g,
              )
            : g;
    })(
        (function e(t, r) {
            void 0 === r && (r = []);
            let n = [];
            return (
                u.Children.forEach(t, (t, i) => {
                    if (!u.isValidElement(t)) return;
                    let o = [...r, i];
                    if (t.type === u.Fragment) return void n.push.apply(n, e(t.props.children, o));
                    t.type !== C && (0, p.Oi)(!1), t.props.index && t.props.children && (0, p.Oi)(!1);
                    let a = {
                        id: t.props.id || o.join("-"),
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
                    t.props.children && (a.children = e(t.props.children, o)), n.push(a);
                }),
                n
            );
        })(t),
        r,
    );
}
c.startTransition;
var O =
    (((i = O || {})[(i.pending = 0)] = "pending"), (i[(i.success = 1)] = "success"), (i[(i.error = 2)] = "error"), i);
new Promise(() => {}), u.Component;
var M = r(873263);
try {
    window.__reactRouterVersion = "6";
} catch (e) {}
c.startTransition,
    d.flushSync,
    c.useId,
    "u" > typeof window && void 0 !== window.document && window.document.createElement,
    ((o = s || (s = {})).UseScrollRestoration = "useScrollRestoration"),
    (o.UseSubmit = "useSubmit"),
    (o.UseSubmitFetcher = "useSubmitFetcher"),
    (o.UseFetcher = "useFetcher"),
    (o.useViewTransitionState = "useViewTransitionState"),
    ((a = l || (l = {})).UseFetcher = "useFetcher"),
    (a.UseFetchers = "useFetchers"),
    (a.UseScrollRestoration = "useScrollRestoration");
let I =
    "u" > typeof window && void 0 !== window.document && void 0 !== window.document.createElement
        ? u.useLayoutEffect
        : () => {};
function R(e) {
    let { children: t } = e,
        r = (0, M.W6)(),
        [n, i] = u.useState(() => ({ location: r.location, action: r.action }));
    return (
        I(() => {
            r.listen((e, t) => i({ location: e, action: t }));
        }, [r]),
        u.createElement(
            P,
            { navigationType: n.action, location: n.location, navigator: r },
            u.createElement(A, null, u.createElement(C, { path: "*", element: t })),
        )
    );
}
