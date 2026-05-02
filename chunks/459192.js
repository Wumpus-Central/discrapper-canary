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
            ...L
        } = e,
        [w, M] = r.useState(null);
    r.useLayoutEffect(() => {
        null != R && M(R.current);
    }, [R]);
    let P = r.useCallback(
            (e) => {
                null == R && M(e), (0, f.cZ)(O, e);
            },
            [O, R],
        ),
        {
            tooltipId: x,
            isVisible: U,
            targetElementRef: k,
            trigger: G,
        } = (0, p.D)({ children: t, targetElementRef: P, asContainer: I, containerTag: T, ariaHidden: D, ...L }),
        F = null != n && ("string" != typeof n || "" !== n),
        V = null != m && !r.isValidElement(m),
        B = r.useMemo(
            () =>
                (0, i.jsxs)("div", {
                    className: a()(E.jk, { [E.eb]: null == m, [E.Sx]: "lg" === A }),
                    children: [
                        null != m &&
                            (0, i.jsx)("div", {
                                className: E.s,
                                style: { width: g },
                                children: V ? (0, i.jsx)(l.v, { ...m }) : m,
                            }),
                        (0, i.jsxs)("div", {
                            className: E.P_,
                            children: [
                                F && (0, i.jsx)(u.E, { variant: "text-sm/medium", children: n }),
                                (0, i.jsx)(u.E, {
                                    variant: "text-sm/normal",
                                    color: F ? "text-subtle" : "text-default",
                                    children: s,
                                }),
                            ],
                        }),
                    ],
                }),
            [m, g, A, n, s, F, V],
        ),
        H = b ?? `${(0, f.Xj)(n ?? "")}|${(0, f.Xj)(s)}`,
        j = (0, h.j)({ shouldShow: U });
    if (!I && !r.isValidElement(t)) return null;
    let Y = j((e, t) =>
        t
            ? (0, i.jsx)(_.Bc, {
                  isRichTooltip: !0,
                  richTooltipPadding: A,
                  children: (0, i.jsx)(d.R, {
                      isVisible: U,
                      isRendered: !0,
                      targetElementRef: k,
                      targetElement: w,
                      anchorRef: R,
                      id: x,
                      content: B,
                      position: S,
                      align: N,
                      spacing: y,
                      caretConfig: C,
                      layerContext: v ?? c.uY,
                      animationStyle: e,
                      positionKey: H,
                      "data-mana-component": "rich-tooltip",
                  }),
              })
            : null,
    );
    return (0, i.jsxs)(i.Fragment, {
        children: [G, D || null == B ? null : (0, i.jsx)(o.A, { id: x, children: B }), Y],
    });
}
