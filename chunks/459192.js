t.d(l, { u: () => g });
var n = t(477900),
    i = t(582128),
    s = t(503698),
    a = t.n(s),
    r = t(140735),
    c = t(710778),
    o = t(280336),
    d = t(194981),
    u = t(353795),
    h = t(834730),
    m = t(747556),
    p = t(255434),
    x = t(168565);
function g(e) {
    let {
            children: l,
            title: t,
            body: s,
            asset: g,
            assetSize: f = 48,
            padding: j = "default",
            asContainer: v = !1,
            element: E = "span",
            position: w = "top",
            align: R = "center",
            spacing: y,
            caretConfig: C,
            targetElementRef: b,
            anchorRef: k,
            positionKey: N,
            ariaHidden: T = !1,
            lineClamp: A,
            ..._
        } = e,
        [I, S] = i.useState(null);
    i.useLayoutEffect(() => {
        null != k && S(k.current);
    }, [k]);
    let V = i.useCallback(
            (e) => {
                null == k && S(e), (0, c.cZ)(b, e);
            },
            [b, k],
        ),
        {
            tooltipId: H,
            isVisible: L,
            targetElementRef: B,
            trigger: D,
        } = (0, d.D)({ children: l, targetElementRef: V, asContainer: v, containerTag: E, ariaHidden: T, ..._ }),
        F = null != t && ("string" != typeof t || "" !== t),
        K = null != g && !i.isValidElement(g),
        P = i.useMemo(
            () =>
                (0, n.jsxs)("div", {
                    className: a()(x.jk, { [x.eb]: null == g, [x.Sx]: "lg" === j }),
                    children: [
                        null != g &&
                            (0, n.jsx)("div", {
                                className: x.s,
                                style: { width: f },
                                children: K ? (0, n.jsx)(u.v, { ...g }) : g,
                            }),
                        (0, n.jsxs)("div", {
                            className: x.P_,
                            children: [
                                F && (0, n.jsx)(h.E, { variant: "text-sm/medium", children: t }),
                                (0, n.jsx)(h.E, {
                                    variant: "text-sm/normal",
                                    color: F ? "text-subtle" : "text-default",
                                    lineClamp: A,
                                    children: s,
                                }),
                            ],
                        }),
                    ],
                }),
            [g, f, j, t, s, F, K, A],
        ),
        X = N ?? `${(0, c.Xj)(t ?? "")}|${(0, c.Xj)(s)}`,
        Z = (0, o.j)({ shouldShow: L });
    if (!v && !i.isValidElement(l)) return null;
    let $ = Z((e, l) =>
        l
            ? (0, n.jsx)(m.Bc, {
                  isRichTooltip: !0,
                  richTooltipPadding: j,
                  children: (0, n.jsx)(p.R, {
                      isVisible: L,
                      isRendered: !0,
                      targetElementRef: B,
                      targetElement: I,
                      anchorRef: k,
                      id: H,
                      content: P,
                      position: w,
                      align: R,
                      spacing: y,
                      caretConfig: C,
                      animationStyle: e,
                      positionKey: X,
                  }),
              })
            : null,
    );
    return (0, n.jsxs)(n.Fragment, {
        children: [D, T || null == P ? null : (0, n.jsx)(r.A, { id: H, children: P }), $],
    });
}
