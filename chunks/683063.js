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
            titleLineClamp: s,
            body: j,
            asset: f,
            assetSize: g = 48,
            padding: E = "default",
            asContainer: v = !1,
            element: R = "span",
            position: b = "top",
            align: k = "center",
            spacing: y,
            caretConfig: C,
            targetElementRef: w,
            anchorRef: S,
            positionKey: N,
            ariaHidden: T = !1,
            lineClamp: V,
            ..._
        } = e,
        [K, P] = i.useState(null);
    i.useLayoutEffect(() => {
        null != S && P(S.current);
    }, [S]);
    let X = i.useCallback(
            (e) => {
                (null == S && P(e), (0, h.cZ)(w, e));
            },
            [w, S],
        ),
        {
            tooltipId: $,
            isVisible: A,
            targetElementRef: B,
            trigger: D,
        } = (0, p.D)({ children: l, targetElementRef: X, asContainer: v, containerTag: R, ariaHidden: T, ..._ }),
        F = null != t && ("string" != typeof t || "" !== t),
        L = null != f && !i.isValidElement(f),
        M = i.useMemo(
            () =>
                (0, n.jsxs)("div", {
                    className: a()(x.jk, { [x.eb]: null == f, [x.Sx]: "lg" === E }),
                    children: [
                        null != f &&
                            (0, n.jsx)("div", {
                                className: x.s,
                                style: { width: g },
                                children: L ? (0, n.jsx)(r.v, { ...f }) : f,
                            }),
                        (0, n.jsxs)("div", {
                            className: x.P_,
                            children: [
                                F && (0, n.jsx)(u.E, { variant: "text-sm/medium", lineClamp: s, children: t }),
                                (0, n.jsx)(u.E, {
                                    variant: "text-sm/normal",
                                    color: F ? "text-subtle" : "text-default",
                                    lineClamp: V,
                                    children: j,
                                }),
                            ],
                        }),
                    ],
                }),
            [f, g, E, t, s, j, F, L, V],
        ),
        Z = N ?? `${(0, h.Xj)(t ?? "")}|${(0, h.Xj)(j)}`,
        q = (0, m.j)({ shouldShow: A });
    if (!v && !i.isValidElement(l)) return null;
    let z = q((e, l) =>
        l
            ? (0, n.jsx)(o.Bc, {
                  isRichTooltip: !0,
                  richTooltipPadding: E,
                  children: (0, n.jsx)(d.R, {
                      isVisible: A,
                      isRendered: !0,
                      targetElementRef: B,
                      targetElement: K,
                      anchorRef: S,
                      id: $,
                      content: M,
                      position: b,
                      align: k,
                      spacing: y,
                      caretConfig: C,
                      animationStyle: e,
                      positionKey: Z,
                  }),
              })
            : null,
    );
    return (0, n.jsxs)(n.Fragment, {
        children: [D, T || null == M ? null : (0, n.jsx)(c.A, { id: $, children: M }), z],
    });
}
