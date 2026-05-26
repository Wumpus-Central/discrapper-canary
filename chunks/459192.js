"use strict";
n.d(t, { u: () => m });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(140735),
    l = n(353795),
    u = n(834730),
    c = n(750506),
    d = n(237140),
    _ = n(112317),
    f = n(348275),
    h = n(505679),
    p = n(521754),
    E = n(600525);
function m(e) {
    let {
            children: t,
            title: n,
            body: s,
            asset: m,
            assetSize: g = 48,
            padding: A = "default",
            asContainer: I = !1,
            element: T = "span",
            position: S = "top",
            align: N = "center",
            spacing: y,
            caretConfig: C,
            layerContext: v,
            targetElementRef: O,
            anchorRef: R,
            positionKey: b,
            ariaHidden: D = !1,
            lineClamp: L,
            ...w
        } = e,
        [M, P] = r.useState(null);
    r.useLayoutEffect(() => {
        null != R && P(R.current);
    }, [R]);
    let x = r.useCallback(
            (e) => {
                null == R && P(e), (0, f.cZ)(O, e);
            },
            [O, R],
        ),
        {
            tooltipId: U,
            isVisible: k,
            targetElementRef: G,
            trigger: F,
        } = (0, p.D)({ children: t, targetElementRef: x, asContainer: I, containerTag: T, ariaHidden: D, ...w }),
        V = null != n && ("string" != typeof n || "" !== n),
        B = null != m && !r.isValidElement(m),
        H = r.useMemo(
            () =>
                (0, i.jsxs)("div", {
                    className: a()(E.jk, { [E.eb]: null == m, [E.Sx]: "lg" === A }),
                    children: [
                        null != m &&
                            (0, i.jsx)("div", {
                                className: E.s,
                                style: { width: g },
                                children: B ? (0, i.jsx)(l.v, { ...m }) : m,
                            }),
                        (0, i.jsxs)("div", {
                            className: E.P_,
                            children: [
                                V && (0, i.jsx)(u.E, { variant: "text-sm/medium", children: n }),
                                (0, i.jsx)(u.E, {
                                    variant: "text-sm/normal",
                                    color: V ? "text-subtle" : "text-default",
                                    lineClamp: L,
                                    children: s,
                                }),
                            ],
                        }),
                    ],
                }),
            [m, g, A, n, s, V, B, L],
        ),
        j = b ?? `${(0, f.Xj)(n ?? "")}|${(0, f.Xj)(s)}`,
        Y = (0, h.j)({ shouldShow: k });
    if (!I && !r.isValidElement(t)) return null;
    let W = Y((e, t) =>
        t
            ? (0, i.jsx)(_.Bc, {
                  isRichTooltip: !0,
                  richTooltipPadding: A,
                  children: (0, i.jsx)(d.R, {
                      isVisible: k,
                      isRendered: !0,
                      targetElementRef: G,
                      targetElement: M,
                      anchorRef: R,
                      id: U,
                      content: H,
                      position: S,
                      align: N,
                      spacing: y,
                      caretConfig: C,
                      layerContext: v ?? c.uY,
                      animationStyle: e,
                      positionKey: j,
                      "data-mana-component": "rich-tooltip",
                  }),
              })
            : null,
    );
    return (0, i.jsxs)(i.Fragment, {
        children: [F, D || null == H ? null : (0, i.jsx)(o.A, { id: U, children: H }), W],
    });
}
