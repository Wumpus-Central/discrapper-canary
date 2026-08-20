t.d(l, { u: () => j });
var n = t(477900),
    i = t(582128),
    s = t(503698),
    a = t.n(s),
    r = t(353795),
    c = t(140735),
    u = t(834730),
    d = t(255434),
    o = t(747556),
    h = t(710778),
    m = t(280336),
    p = t(194981),
    x = t(8777);
function j(e) {
    let {
            children: l,
            title: t,
            body: s,
            asset: j,
            assetSize: f = 48,
            padding: g = "default",
            asContainer: E = !1,
            element: v = "span",
            position: R = "top",
            align: b = "center",
            spacing: k,
            caretConfig: y,
            targetElementRef: C,
            anchorRef: w,
            positionKey: S,
            ariaHidden: N = !1,
            lineClamp: T,
            ...V
        } = e,
        [_, K] = i.useState(null);
    i.useLayoutEffect(() => {
        null != w && K(w.current);
    }, [w]);
    let P = i.useCallback(
            (e) => {
                null == w && K(e), (0, h.cZ)(C, e);
            },
            [C, w],
        ),
        {
            tooltipId: X,
            isVisible: $,
            targetElementRef: A,
            trigger: B,
        } = (0, p.D)({ children: l, targetElementRef: P, asContainer: E, containerTag: v, ariaHidden: N, ...V }),
        D = null != t && ("string" != typeof t || "" !== t),
        F = null != j && !i.isValidElement(j),
        L = i.useMemo(
            () =>
                (0, n.jsxs)("div", {
                    className: a()(x.jk, { [x.eb]: null == j, [x.Sx]: "lg" === g }),
                    children: [
                        null != j &&
                            (0, n.jsx)("div", {
                                className: x.s,
                                style: { width: f },
                                children: F ? (0, n.jsx)(r.v, { ...j }) : j,
                            }),
                        (0, n.jsxs)("div", {
                            className: x.P_,
                            children: [
                                D && (0, n.jsx)(u.E, { variant: "text-sm/medium", children: t }),
                                (0, n.jsx)(u.E, {
                                    variant: "text-sm/normal",
                                    color: D ? "text-subtle" : "text-default",
                                    lineClamp: T,
                                    children: s,
                                }),
                            ],
                        }),
                    ],
                }),
            [j, f, g, t, s, D, F, T],
        ),
        M = S ?? `${(0, h.Xj)(t ?? "")}|${(0, h.Xj)(s)}`,
        Z = (0, m.j)({ shouldShow: $ });
    if (!E && !i.isValidElement(l)) return null;
    let q = Z((e, l) =>
        l
            ? (0, n.jsx)(o.Bc, {
                  isRichTooltip: !0,
                  richTooltipPadding: g,
                  children: (0, n.jsx)(d.R, {
                      isVisible: $,
                      isRendered: !0,
                      targetElementRef: A,
                      targetElement: _,
                      anchorRef: w,
                      id: X,
                      content: L,
                      position: R,
                      align: b,
                      spacing: k,
                      caretConfig: y,
                      animationStyle: e,
                      positionKey: M,
                  }),
              })
            : null,
    );
    return (0, n.jsxs)(n.Fragment, {
        children: [B, N || null == L ? null : (0, n.jsx)(c.A, { id: X, children: L }), q],
    });
}
