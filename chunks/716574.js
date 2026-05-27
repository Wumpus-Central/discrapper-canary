"use strict";
n.d(t, { A: () => y, K: () => S });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    a = n(536001),
    o = n(140735),
    l = n(237140),
    u = n(112317),
    c = n(348275),
    d = n(505679),
    _ = n(521754),
    h = n(331322),
    f = n(508770),
    p = n(534514),
    E = n(834730),
    m = n(731454),
    g = n(750506),
    A = n(140049),
    I = n(518477),
    T = n(128845);
function S(e) {
    let {
            children: t,
            title: n,
            body: r,
            variant: S = "default",
            badgeImage: y,
            badgeName: N,
            progressCircle: v,
            rarity: C,
            isAnimated: R = !1,
            targetElementRef: O,
            onShow: b,
            position: D = "top",
        } = e,
        L = R && null == v,
        {
            tooltipId: w,
            isVisible: M,
            targetElementRef: P,
            trigger: x,
        } = (0, _.D)({ children: t, targetElementRef: O, delay: I.In, onTooltipShow: b }),
        k = C === a.x.COMMON ? null : (0, m.V)(C),
        U = (0, i.jsxs)("div", {
            className: T.Qs,
            "data-mana-component": "mini-premium-tooltip",
            children: [
                (0, i.jsx)("div", {
                    className: s()(T.fA, { [T.qJ]: L }),
                    "aria-hidden": !0,
                    children: (0, i.jsx)(A.BadgeImageWithProgressCircle, {
                        src: y,
                        alt: N,
                        progressCircleText: v?.text,
                        progressCirclePercent: v?.percent,
                        progressCircleUrgency: v?.urgency,
                        compact: !0,
                    }),
                }),
                (0, i.jsxs)(h.B, {
                    gap: 12,
                    align: "center",
                    className: T.i8,
                    children: [
                        null != k && (0, i.jsx)(f.E, { ...k }),
                        (0, i.jsx)(p.D, {
                            variant: "display-sm",
                            color: "text-strong",
                            className: s()(T.DD, { [T.x$]: "nitro" === S }),
                            children: n,
                        }),
                    ],
                }),
                null != r &&
                    (0, i.jsx)(E.E, { variant: "text-sm/medium", color: "text-subtle", className: T.rf, children: r }),
            ],
        }),
        G = null != r ? `${n}. ${r}` : n,
        F = (0, d.j)({ shouldShow: M })((e, t) =>
            t
                ? (0, i.jsx)(u.Bc, {
                      isRichTooltip: !0,
                      children: (0, i.jsx)(l.R, {
                          isVisible: M,
                          isRendered: !0,
                          targetElementRef: P,
                          content: U,
                          position: D,
                          align: "center",
                          layerContext: g.uY,
                          animationStyle: e,
                          positionKey: (0, c.Xj)(n),
                      }),
                  })
                : null,
        );
    return (0, i.jsxs)(i.Fragment, { children: [x, (0, i.jsx)(o.A, { id: w, children: G }), F] });
}
let y = S;
