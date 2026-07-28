"use strict";
n.d(t, { u: () => I });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(140735),
    o = n(710778),
    d = n(280336),
    c = n(194981),
    u = n(353795),
    _ = n(834730),
    E = n(747556),
    A = n(255434),
    h = n(168565);
function I(e) {
    let {
            children: t,
            title: n,
            body: a,
            asset: I,
            assetSize: f = 48,
            padding: p = "default",
            asContainer: T = !1,
            element: m = "span",
            position: g = "top",
            align: S = "center",
            spacing: N,
            caretConfig: C,
            targetElementRef: O,
            anchorRef: R,
            positionKey: L,
            ariaHidden: y = !1,
            lineClamp: D,
            ...v
        } = e,
        [b, M] = r.useState(null);
    r.useLayoutEffect(() => {
        null != R && M(R.current);
    }, [R]);
    let P = r.useCallback(
            (e) => {
                null == R && M(e), (0, o.cZ)(O, e);
            },
            [O, R],
        ),
        {
            tooltipId: U,
            isVisible: w,
            targetElementRef: G,
            trigger: x,
        } = (0, c.D)({ children: t, targetElementRef: P, asContainer: T, containerTag: m, ariaHidden: y, ...v }),
        k = null != n && ("string" != typeof n || "" !== n),
        F = null != I && !r.isValidElement(I),
        V = r.useMemo(
            () =>
                (0, i.jsxs)("div", {
                    className: s()(h.jk, { [h.eb]: null == I, [h.Sx]: "lg" === p }),
                    children: [
                        null != I &&
                            (0, i.jsx)("div", {
                                className: h.s,
                                style: { width: f },
                                children: F ? (0, i.jsx)(u.v, { ...I }) : I,
                            }),
                        (0, i.jsxs)("div", {
                            className: h.P_,
                            children: [
                                k && (0, i.jsx)(_.E, { variant: "text-sm/medium", children: n }),
                                (0, i.jsx)(_.E, {
                                    variant: "text-sm/normal",
                                    color: k ? "text-subtle" : "text-default",
                                    lineClamp: D,
                                    children: a,
                                }),
                            ],
                        }),
                    ],
                }),
            [I, f, p, n, a, k, F, D],
        ),
        B = L ?? `${(0, o.Xj)(n ?? "")}|${(0, o.Xj)(a)}`,
        H = (0, d.j)({ shouldShow: w });
    if (!T && !r.isValidElement(t)) return null;
    let j = H((e, t) =>
        t
            ? (0, i.jsx)(E.Bc, {
                  isRichTooltip: !0,
                  richTooltipPadding: p,
                  children: (0, i.jsx)(A.R, {
                      isVisible: w,
                      isRendered: !0,
                      targetElementRef: G,
                      targetElement: b,
                      anchorRef: R,
                      id: U,
                      content: V,
                      position: g,
                      align: S,
                      spacing: N,
                      caretConfig: C,
                      animationStyle: e,
                      positionKey: B,
                  }),
              })
            : null,
    );
    return (0, i.jsxs)(i.Fragment, {
        children: [x, y || null == V ? null : (0, i.jsx)(l.A, { id: U, children: V }), j],
    });
}
