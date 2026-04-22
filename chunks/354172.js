"use strict";
n.d(t, { Kl: () => E });
var r,
    i,
    s,
    a,
    o,
    l,
    u = n(64700),
    d = n(340287),
    c = n(814947),
    _ = n(873263);
try {
    window.__reactRouterVersion = "6";
} catch (e) {}
(s || (s = n.t(u, 2))).startTransition,
    (a || (a = n.t(d, 2))).flushSync,
    (s || (s = n.t(u, 2))).useId,
    "u" > typeof window && void 0 !== window.document && window.document.createElement,
    ((r = o || (o = {})).UseScrollRestoration = "useScrollRestoration"),
    (r.UseSubmit = "useSubmit"),
    (r.UseSubmitFetcher = "useSubmitFetcher"),
    (r.UseFetcher = "useFetcher"),
    (r.useViewTransitionState = "useViewTransitionState"),
    ((i = l || (l = {})).UseFetcher = "useFetcher"),
    (i.UseFetchers = "useFetchers"),
    (i.UseScrollRestoration = "useScrollRestoration");
let f =
    "u" > typeof window && void 0 !== window.document && void 0 !== window.document.createElement
        ? u.useLayoutEffect
        : () => {};
function E(e) {
    let { children: t } = e,
        n = (0, _.W6)(),
        [r, i] = u.useState(() => ({ location: n.location, action: n.action }));
    return (
        f(() => {
            n.listen((e, t) => i({ location: e, action: t }));
        }, [n]),
        u.createElement(
            c.Ix,
            { navigationType: r.action, location: r.location, navigator: n },
            u.createElement(c.BV, null, u.createElement(c.qh, { path: "*", element: t })),
        )
    );
}
