"use strict";
n.d(t, { u: () => g });
var r = n(627968),
    a = n(64700),
    i = n(503698),
    l = n.n(i),
    s = n(140735),
    o = n(353795),
    c = n(834730),
    d = n(750506),
    u = n(237140),
    _ = n(112317),
    p = n(348275),
    f = n(505679),
    m = n(521754),
    h = n(600525);
function g(e) {
    let {
            children: t,
            title: n,
            body: i,
            asset: g,
            assetSize: b = 48,
            padding: A = "default",
            asContainer: E = !1,
            element: v = "span",
            position: I = "top",
            align: y = "center",
            spacing: x,
            caretConfig: S,
            layerContext: T,
            targetElementRef: C,
            anchorRef: N,
            positionKey: R,
            ariaHidden: w = !1,
            ...L
        } = e,
        [M, O] = a.useState(null);
    a.useLayoutEffect(() => {
        null != N && O(N.current);
    }, [N]);
    let D = a.useCallback(
            (e) => {
                null == N && O(e), (0, p.cZ)(C, e);
            },
            [C, N],
        ),
        {
            tooltipId: P,
            isVisible: j,
            targetElementRef: k,
            trigger: U,
        } = (0, m.D)({ children: t, targetElementRef: D, asContainer: E, containerTag: v, ariaHidden: w, ...L }),
        F = null != n && ("string" != typeof n || "" !== n),
        B = null != g && !a.isValidElement(g),
        G = a.useMemo(
            () =>
                (0, r.jsxs)("div", {
                    className: l()(h.jk, { [h.eb]: null == g, [h.Sx]: "lg" === A }),
                    children: [
                        null != g &&
                            (0, r.jsx)("div", {
                                className: h.s,
                                style: { width: b },
                                children: B ? (0, r.jsx)(o.v, { ...g }) : g,
                            }),
                        (0, r.jsxs)("div", {
                            className: h.P_,
                            children: [
                                F && (0, r.jsx)(c.E, { variant: "text-sm/medium", children: n }),
                                (0, r.jsx)(c.E, {
                                    variant: "text-sm/normal",
                                    color: F ? "text-subtle" : "text-default",
                                    children: i,
                                }),
                            ],
                        }),
                    ],
                }),
            [g, b, A, n, i, F, B],
        ),
        V = R ?? `${(0, p.Xj)(n ?? "")}|${(0, p.Xj)(i)}`,
        H = (0, f.j)({ shouldShow: j });
    if (!E && !a.isValidElement(t)) return null;
    let W = H((e, t) =>
        t
            ? (0, r.jsx)(_.Bc, {
                  isRichTooltip: !0,
                  richTooltipPadding: A,
                  children: (0, r.jsx)(u.R, {
                      isVisible: j,
                      isRendered: !0,
                      targetElementRef: k,
                      targetElement: M,
                      anchorRef: N,
                      id: P,
                      content: G,
                      position: I,
                      align: y,
                      spacing: x,
                      caretConfig: S,
                      layerContext: T ?? d.uY,
                      animationStyle: e,
                      positionKey: V,
                      "data-mana-component": "rich-tooltip",
                  }),
              })
            : null,
    );
    return (0, r.jsxs)(r.Fragment, {
        children: [U, w || null == G ? null : (0, r.jsx)(s.A, { id: P, children: G }), W],
    });
}
