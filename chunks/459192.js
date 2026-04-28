a.d(t, { u: () => b });
var n = a(627968),
    l = a(64700),
    r = a(503698),
    i = a.n(r),
    s = a(140735),
    o = a(353795),
    c = a(834730),
    d = a(750506),
    u = a(237140),
    h = a(112317),
    p = a(348275),
    m = a(505679),
    f = a(521754),
    _ = a(600525);
function b(e) {
    let {
            children: t,
            title: a,
            body: r,
            asset: b,
            assetSize: g = 48,
            padding: x = "default",
            asContainer: v = !1,
            element: A = "span",
            position: E = "top",
            align: y = "center",
            spacing: I,
            caretConfig: S,
            layerContext: j,
            targetElementRef: C,
            anchorRef: T,
            positionKey: w,
            ariaHidden: R = !1,
            ...N
        } = e,
        [k, L] = l.useState(null);
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
            tooltipId: M,
            isVisible: P,
            targetElementRef: D,
            trigger: U,
        } = (0, f.D)({ children: t, targetElementRef: O, asContainer: v, containerTag: A, ariaHidden: R, ...N }),
        V = null != a && ("string" != typeof a || "" !== a),
        F = null != b && !l.isValidElement(b),
        B = l.useMemo(
            () =>
                (0, n.jsxs)("div", {
                    className: i()(_.jk, { [_.eb]: null == b, [_.Sx]: "lg" === x }),
                    children: [
                        null != b &&
                            (0, n.jsx)("div", {
                                className: _.s,
                                style: { width: g },
                                children: F ? (0, n.jsx)(o.v, { ...b }) : b,
                            }),
                        (0, n.jsxs)("div", {
                            className: _.P_,
                            children: [
                                V && (0, n.jsx)(c.E, { variant: "text-sm/medium", children: a }),
                                (0, n.jsx)(c.E, {
                                    variant: "text-sm/normal",
                                    color: V ? "text-subtle" : "text-default",
                                    children: r,
                                }),
                            ],
                        }),
                    ],
                }),
            [b, g, x, a, r, V, F],
        ),
        G = w ?? `${(0, p.Xj)(a ?? "")}|${(0, p.Xj)(r)}`,
        H = (0, m.j)({ shouldShow: P });
    if (!v && !l.isValidElement(t)) return null;
    let W = H((e, t) =>
        t
            ? (0, n.jsx)(h.Bc, {
                  isRichTooltip: !0,
                  richTooltipPadding: x,
                  children: (0, n.jsx)(u.R, {
                      isVisible: P,
                      isRendered: !0,
                      targetElementRef: D,
                      targetElement: k,
                      anchorRef: T,
                      id: M,
                      content: B,
                      position: E,
                      align: y,
                      spacing: I,
                      caretConfig: S,
                      layerContext: j ?? d.uY,
                      animationStyle: e,
                      positionKey: G,
                      "data-mana-component": "rich-tooltip",
                  }),
              })
            : null,
    );
    return (0, n.jsxs)(n.Fragment, {
        children: [U, R || null == B ? null : (0, n.jsx)(s.A, { id: M, children: B }), W],
    });
}
