"use strict";
a.d(t, { u: () => g });
var r = a(627968),
    l = a(64700),
    n = a(503698),
    i = a.n(n),
    s = a(140735),
    o = a(608250),
    d = a(834730),
    c = a(750506),
    u = a(717995),
    h = a(112317),
    p = a(348275),
    _ = a(505679),
    m = a(747781),
    b = a(600525);
function g(e) {
    let {
            children: t,
            title: a,
            body: n,
            asset: g,
            assetSize: f = 48,
            padding: x = "default",
            asContainer: v = !1,
            element: A = "span",
            position: E = "top",
            align: y = "center",
            spacing: j,
            caretConfig: I,
            layerContext: S,
            targetElementRef: C,
            anchorRef: T,
            positionKey: w,
            ariaHidden: R = !1,
            ...k
        } = e,
        [N, L] = l.useState(null);
    l.useLayoutEffect(() => {
        null != T && L(T.current);
    }, [T]);
    let O = l.useCallback(
            (e) => {
                null == T && L(e), (0, p.cZ)(C, e);
            },
            [C, T],
        ),
        {
            tooltipId: P,
            isVisible: M,
            targetElementRef: V,
            trigger: U,
        } = (0, m.D)({ children: t, targetElementRef: O, asContainer: v, containerTag: A, ariaHidden: R, ...k }),
        D = null != a && ("string" != typeof a || "" !== a),
        B = null != g && !l.isValidElement(g),
        F = l.useMemo(
            () =>
                (0, r.jsxs)("div", {
                    className: i()(b.jk, { [b.eb]: null == g, [b.Sx]: "lg" === x }),
                    children: [
                        null != g &&
                            (0, r.jsx)("div", {
                                className: b.s,
                                style: { width: f },
                                children: B ? (0, r.jsx)(o.v, { ...g }) : g,
                            }),
                        (0, r.jsxs)("div", {
                            className: b.P_,
                            children: [
                                D && (0, r.jsx)(d.E, { variant: "text-sm/medium", children: a }),
                                (0, r.jsx)(d.E, {
                                    variant: "text-sm/normal",
                                    color: D ? "text-subtle" : "text-default",
                                    children: n,
                                }),
                            ],
                        }),
                    ],
                }),
            [g, f, x, a, n, D, B],
        ),
        G = w ?? `${(0, p.Xj)(a ?? "")}|${(0, p.Xj)(n)}`,
        H = (0, _.j)({ shouldShow: M });
    if (!v && !l.isValidElement(t)) return null;
    let W = H((e, t) =>
        t
            ? (0, r.jsx)(h.Bc, {
                  isRichTooltip: !0,
                  richTooltipPadding: x,
                  children: (0, r.jsx)(u.R, {
                      isVisible: M,
                      isRendered: !0,
                      targetElementRef: V,
                      targetElement: N,
                      anchorRef: T,
                      id: P,
                      content: F,
                      position: E,
                      align: y,
                      spacing: j,
                      caretConfig: I,
                      layerContext: S ?? c.uY,
                      animationStyle: e,
                      positionKey: G,
                      "data-mana-component": "rich-tooltip",
                  }),
              })
            : null,
    );
    return (0, r.jsxs)(r.Fragment, {
        children: [U, R || null == F ? null : (0, r.jsx)(s.A, { id: P, children: F }), W],
    });
}
