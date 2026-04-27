"use strict";
r.d(t, { u: () => g });
var n = r(627968),
    i = r(64700),
    a = r(503698),
    s = r.n(a),
    l = r(140735),
    o = r(353795),
    c = r(834730),
    d = r(750506),
    u = r(237140),
    _ = r(112317),
    p = r(348275),
    f = r(505679),
    m = r(521754),
    h = r(600525);
function g(e) {
    let {
            children: t,
            title: r,
            body: a,
            asset: g,
            assetSize: b = 48,
            padding: A = "default",
            asContainer: E = !1,
            element: v = "span",
            position: y = "top",
            align: I = "center",
            spacing: S,
            caretConfig: x,
            layerContext: T,
            targetElementRef: C,
            anchorRef: R,
            positionKey: N,
            ariaHidden: L = !1,
            ...w
        } = e,
        [P, O] = i.useState(null);
    i.useLayoutEffect(() => {
        null != R && O(R.current);
    }, [R]);
    let D = i.useCallback(
            (e) => {
                null == R && O(e), (0, p.cZ)(C, e);
            },
            [C, R],
        ),
        {
            tooltipId: M,
            isVisible: k,
            targetElementRef: j,
            trigger: U,
        } = (0, m.D)({ children: t, targetElementRef: D, asContainer: E, containerTag: v, ariaHidden: L, ...w }),
        F = null != r && ("string" != typeof r || "" !== r),
        B = null != g && !i.isValidElement(g),
        G = i.useMemo(
            () =>
                (0, n.jsxs)("div", {
                    className: s()(h.jk, { [h.eb]: null == g, [h.Sx]: "lg" === A }),
                    children: [
                        null != g &&
                            (0, n.jsx)("div", {
                                className: h.s,
                                style: { width: b },
                                children: B ? (0, n.jsx)(o.v, { ...g }) : g,
                            }),
                        (0, n.jsxs)("div", {
                            className: h.P_,
                            children: [
                                F && (0, n.jsx)(c.E, { variant: "text-sm/medium", children: r }),
                                (0, n.jsx)(c.E, {
                                    variant: "text-sm/normal",
                                    color: F ? "text-subtle" : "text-default",
                                    children: a,
                                }),
                            ],
                        }),
                    ],
                }),
            [g, b, A, r, a, F, B],
        ),
        H = N ?? `${(0, p.Xj)(r ?? "")}|${(0, p.Xj)(a)}`,
        V = (0, f.j)({ shouldShow: k });
    if (!E && !i.isValidElement(t)) return null;
    let W = V((e, t) =>
        t
            ? (0, n.jsx)(_.Bc, {
                  isRichTooltip: !0,
                  richTooltipPadding: A,
                  children: (0, n.jsx)(u.R, {
                      isVisible: k,
                      isRendered: !0,
                      targetElementRef: j,
                      targetElement: P,
                      anchorRef: R,
                      id: M,
                      content: G,
                      position: y,
                      align: I,
                      spacing: S,
                      caretConfig: x,
                      layerContext: T ?? d.uY,
                      animationStyle: e,
                      positionKey: H,
                      "data-mana-component": "rich-tooltip",
                  }),
              })
            : null,
    );
    return (0, n.jsxs)(n.Fragment, {
        children: [U, L || null == G ? null : (0, n.jsx)(l.A, { id: M, children: G }), W],
    });
}
