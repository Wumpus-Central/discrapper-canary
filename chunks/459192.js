n.d(t, { u: () => g });
var a = n(627968),
    i = n(64700),
    l = n(503698),
    r = n.n(l),
    o = n(140735),
    s = n(353795),
    c = n(834730),
    d = n(750506),
    u = n(237140),
    _ = n(112317),
    p = n(348275),
    f = n(505679),
    h = n(521754),
    m = n(600525);
function g(e) {
    let {
            children: t,
            title: n,
            body: l,
            asset: g,
            assetSize: b = 48,
            padding: A = "default",
            asContainer: E = !1,
            element: v = "span",
            position: I = "top",
            align: y = "center",
            spacing: S,
            caretConfig: C,
            layerContext: T,
            targetElementRef: x,
            anchorRef: R,
            positionKey: L,
            ariaHidden: N = !1,
            ...w
        } = e,
        [O, D] = i.useState(null);
    i.useLayoutEffect(() => {
        null != R && D(R.current);
    }, [R]);
    let P = i.useCallback(
            (e) => {
                null == R && D(e), (0, p.cZ)(x, e);
            },
            [x, R],
        ),
        {
            tooltipId: j,
            isVisible: U,
            targetElementRef: M,
            trigger: k,
        } = (0, h.D)({ children: t, targetElementRef: P, asContainer: E, containerTag: v, ariaHidden: N, ...w }),
        F = null != n && ("string" != typeof n || "" !== n),
        G = null != g && !i.isValidElement(g),
        H = i.useMemo(
            () =>
                (0, a.jsxs)("div", {
                    className: r()(m.jk, { [m.eb]: null == g, [m.Sx]: "lg" === A }),
                    children: [
                        null != g &&
                            (0, a.jsx)("div", {
                                className: m.s,
                                style: { width: b },
                                children: G ? (0, a.jsx)(s.v, { ...g }) : g,
                            }),
                        (0, a.jsxs)("div", {
                            className: m.P_,
                            children: [
                                F && (0, a.jsx)(c.E, { variant: "text-sm/medium", children: n }),
                                (0, a.jsx)(c.E, {
                                    variant: "text-sm/normal",
                                    color: F ? "text-subtle" : "text-default",
                                    children: l,
                                }),
                            ],
                        }),
                    ],
                }),
            [g, b, A, n, l, F, G],
        ),
        B = L ?? `${(0, p.Xj)(n ?? "")}|${(0, p.Xj)(l)}`,
        V = (0, f.j)({ shouldShow: U });
    if (!E && !i.isValidElement(t)) return null;
    let W = V((e, t) =>
        t
            ? (0, a.jsx)(_.Bc, {
                  isRichTooltip: !0,
                  richTooltipPadding: A,
                  children: (0, a.jsx)(u.R, {
                      isVisible: U,
                      isRendered: !0,
                      targetElementRef: M,
                      targetElement: O,
                      anchorRef: R,
                      id: j,
                      content: H,
                      position: I,
                      align: y,
                      spacing: S,
                      caretConfig: C,
                      layerContext: T ?? d.uY,
                      animationStyle: e,
                      positionKey: B,
                      "data-mana-component": "rich-tooltip",
                  }),
              })
            : null,
    );
    return (0, a.jsxs)(a.Fragment, {
        children: [k, N || null == H ? null : (0, a.jsx)(o.A, { id: j, children: H }), W],
    });
}
