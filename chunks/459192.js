a.d(t, { u: () => _ });
var n = a(627968),
    r = a(64700),
    l = a(503698),
    i = a.n(l),
    s = a(140735),
    o = a(353795),
    c = a(834730),
    d = a(750506),
    u = a(237140),
    h = a(112317),
    p = a(348275),
    m = a(505679),
    f = a(521754),
    b = a(600525);
function _(e) {
    let {
            children: t,
            title: a,
            body: l,
            asset: _,
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
            positionKey: R,
            ariaHidden: w = !1,
            ...k
        } = e,
        [L, N] = r.useState(null);
    r.useLayoutEffect(() => {
        null != T && N(T.current);
    }, [T]);
    let O = r.useCallback(
            (e) => {
                null == T && N(e), (0, p.cZ)(C, e);
            },
            [C, T],
        ),
        {
            tooltipId: P,
            isVisible: D,
            targetElementRef: M,
            trigger: U,
        } = (0, f.D)({ children: t, targetElementRef: O, asContainer: v, containerTag: A, ariaHidden: w, ...k }),
        F = null != a && ("string" != typeof a || "" !== a),
        V = null != _ && !r.isValidElement(_),
        B = r.useMemo(
            () =>
                (0, n.jsxs)("div", {
                    className: i()(b.jk, { [b.eb]: null == _, [b.Sx]: "lg" === x }),
                    children: [
                        null != _ &&
                            (0, n.jsx)("div", {
                                className: b.s,
                                style: { width: g },
                                children: V ? (0, n.jsx)(o.v, { ..._ }) : _,
                            }),
                        (0, n.jsxs)("div", {
                            className: b.P_,
                            children: [
                                F && (0, n.jsx)(c.E, { variant: "text-sm/medium", children: a }),
                                (0, n.jsx)(c.E, {
                                    variant: "text-sm/normal",
                                    color: F ? "text-subtle" : "text-default",
                                    children: l,
                                }),
                            ],
                        }),
                    ],
                }),
            [_, g, x, a, l, F, V],
        ),
        G = R ?? `${(0, p.Xj)(a ?? "")}|${(0, p.Xj)(l)}`,
        H = (0, m.j)({ shouldShow: D });
    if (!v && !r.isValidElement(t)) return null;
    let W = H((e, t) =>
        t
            ? (0, n.jsx)(h.Bc, {
                  isRichTooltip: !0,
                  richTooltipPadding: x,
                  children: (0, n.jsx)(u.R, {
                      isVisible: D,
                      isRendered: !0,
                      targetElementRef: M,
                      targetElement: L,
                      anchorRef: T,
                      id: P,
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
        children: [U, w || null == B ? null : (0, n.jsx)(s.A, { id: P, children: B }), W],
    });
}
