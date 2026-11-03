n.d(l, { u: () => x });
var t = n(477900),
    i = n(582128),
    s = n(503698),
    a = n.n(s),
    r = n(353795),
    c = n(140735),
    d = n(834730),
    u = n(255434),
    o = n(747556),
    h = n(710778),
    m = n(280336),
    p = n(194981),
    j = n(8777);
function x(e) {
    let {
            children: l,
            title: n,
            titleLineClamp: s,
            body: x,
            asset: f,
            assetSize: g = 48,
            padding: E = "default",
            asContainer: b = !1,
            element: y = "span",
            position: v = "top",
            align: R = "center",
            spacing: k,
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
        } = (0, p.D)({ children: l, targetElementRef: X, asContainer: b, containerTag: y, ariaHidden: T, ..._ }),
        F = null != n && ("string" != typeof n || "" !== n),
        L = null != f && !i.isValidElement(f),
        M = i.useMemo(
            () =>
                (0, t.jsxs)("div", {
                    className: a()(j.jk, { [j.eb]: null == f, [j.Sx]: "lg" === E }),
                    children: [
                        null != f &&
                            (0, t.jsx)("div", {
                                className: j.s,
                                style: { width: g },
                                children: L ? (0, t.jsx)(r.v, { ...f }) : f,
                            }),
                        (0, t.jsxs)("div", {
                            className: j.P_,
                            children: [
                                F && (0, t.jsx)(d.E, { variant: "body-sm/medium", lineClamp: s, children: n }),
                                (0, t.jsx)(d.E, {
                                    variant: "body-sm/normal",
                                    color: F ? "text-subtle" : "text-default",
                                    lineClamp: V,
                                    children: x,
                                }),
                            ],
                        }),
                    ],
                }),
            [f, g, E, n, s, x, F, L, V],
        ),
        Z = N ?? `${(0, h.Xj)(n ?? "")}|${(0, h.Xj)(x)}`,
        q = (0, m.j)({ shouldShow: A });
    if (!b && !i.isValidElement(l)) return null;
    let z = q((e, l) =>
        l
            ? (0, t.jsx)(o.Bc, {
                  isRichTooltip: !0,
                  richTooltipPadding: E,
                  children: (0, t.jsx)(u.R, {
                      isVisible: A,
                      isRendered: !0,
                      targetElementRef: B,
                      targetElement: K,
                      anchorRef: S,
                      id: $,
                      content: M,
                      position: v,
                      align: R,
                      spacing: k,
                      caretConfig: C,
                      animationStyle: e,
                      positionKey: Z,
                  }),
              })
            : null,
    );
    return (0, t.jsxs)(t.Fragment, {
        children: [D, T || null == M ? null : (0, t.jsx)(c.A, { id: $, children: M }), z],
    });
}
