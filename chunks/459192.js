"use strict";
n.d(t, { u: () => g });
var a = n(627968),
    r = n(64700),
    i = n(503698),
    l = n.n(i),
    s = n(140735),
    o = n(353795),
    c = n(834730),
    d = n(750506),
    u = n(237140),
    _ = n(112317),
    p = n(348275),
    m = n(505679),
    h = n(521754),
    f = n(600525);
function g(e) {
    let {
            children: t,
            title: n,
            body: i,
            asset: g,
            assetSize: b = 48,
            padding: v = "default",
            asContainer: A = !1,
            element: x = "span",
            position: E = "top",
            align: T = "center",
            spacing: S,
            caretConfig: C,
            layerContext: I,
            targetElementRef: y,
            anchorRef: N,
            positionKey: R,
            ariaHidden: j = !1,
            ...L
        } = e,
        [w, O] = r.useState(null);
    r.useLayoutEffect(() => {
        null != N && O(N.current);
    }, [N]);
    let D = r.useCallback(
            (e) => {
                null == N && O(e), (0, p.cZ)(y, e);
            },
            [y, N],
        ),
        {
            tooltipId: M,
            isVisible: P,
            targetElementRef: k,
            trigger: U,
        } = (0, h.D)({ children: t, targetElementRef: D, asContainer: A, containerTag: x, ariaHidden: j, ...L }),
        G = null != n && ("string" != typeof n || "" !== n),
        H = null != g && !r.isValidElement(g),
        F = r.useMemo(
            () =>
                (0, a.jsxs)("div", {
                    className: l()(f.jk, { [f.eb]: null == g, [f.Sx]: "lg" === v }),
                    children: [
                        null != g &&
                            (0, a.jsx)("div", {
                                className: f.s,
                                style: { width: b },
                                children: H ? (0, a.jsx)(o.v, { ...g }) : g,
                            }),
                        (0, a.jsxs)("div", {
                            className: f.P_,
                            children: [
                                G && (0, a.jsx)(c.E, { variant: "text-sm/medium", children: n }),
                                (0, a.jsx)(c.E, {
                                    variant: "text-sm/normal",
                                    color: G ? "text-subtle" : "text-default",
                                    children: i,
                                }),
                            ],
                        }),
                    ],
                }),
            [g, b, v, n, i, G, H],
        ),
        B = R ?? `${(0, p.Xj)(n ?? "")}|${(0, p.Xj)(i)}`,
        V = (0, m.j)({ shouldShow: P });
    if (!A && !r.isValidElement(t)) return null;
    let W = V((e, t) =>
        t
            ? (0, a.jsx)(_.Bc, {
                  isRichTooltip: !0,
                  richTooltipPadding: v,
                  children: (0, a.jsx)(u.R, {
                      isVisible: P,
                      isRendered: !0,
                      targetElementRef: k,
                      targetElement: w,
                      anchorRef: N,
                      id: M,
                      content: F,
                      position: E,
                      align: T,
                      spacing: S,
                      caretConfig: C,
                      layerContext: I ?? d.uY,
                      animationStyle: e,
                      positionKey: B,
                      "data-mana-component": "rich-tooltip",
                  }),
              })
            : null,
    );
    return (0, a.jsxs)(a.Fragment, {
        children: [U, j || null == F ? null : (0, a.jsx)(s.A, { id: M, children: F }), W],
    });
}
