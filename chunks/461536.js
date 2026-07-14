"use strict";
n.d(t, { K: () => D, A: () => y });
var i = n(627968);
n(64700);
var r = n(503698),
    a = n.n(r),
    s = n(536001),
    l = n(140735),
    o = n(237140),
    d = n(112317),
    c = n(348275),
    u = n(505679),
    _ = n(521754),
    E = n(331322),
    A = n(834730),
    h = n(297264),
    I = n(260981),
    f = n(540418),
    p = n(907085),
    T = n(179820),
    m = n(375708),
    g = n(910621),
    S = n(175501);
function N(e) {
    let { rarity: t, className: n } = e,
        r = (function (e) {
            switch (e) {
                case s.x.COMMON:
                    return { Icon: I.p, className: S["rarity-common"], label: m.intl.string(m.t.L0K5ci) };
                case s.x.RARE:
                    return { Icon: f.A, className: S["rarity-rare"], label: m.intl.string(m.t["sTx/5z"]) };
                case s.x.EPIC:
                    return { Icon: p.b, className: S["rarity-epic"], label: m.intl.string(m.t.RD8RiN) };
                case s.x.MYTHIC:
                    return { Icon: T.O, className: S["rarity-mythic"], label: m.intl.string(m.t.vqc1ol) };
                default:
                    return null;
            }
        })(t);
    if (null == r) return null;
    let { Icon: l, className: o, label: d } = r;
    return (0, i.jsx)("div", {
        role: "img",
        "aria-label": d,
        className: a()(g.T, o, n),
        children: (0, i.jsx)(l, { size: "xxs", color: "currentColor" }),
    });
}
var C = n(750506),
    O = n(140049),
    R = n(518477),
    L = n(128845);
function D(e) {
    let {
            children: t,
            title: n,
            eyebrow: r,
            body: I,
            variant: f = "default",
            badgeImage: p,
            badgeName: T,
            progressCircle: m,
            rarity: g,
            isAnimated: S = !1,
            targetElementRef: D,
            onShow: y,
            position: v = "top",
        } = e,
        b = S && null == m,
        {
            tooltipId: M,
            isVisible: P,
            targetElementRef: U,
            trigger: w,
        } = (0, _.D)({ children: t, targetElementRef: D, delay: R.In, onTooltipShow: y }),
        G = null != g && g !== s.x.COMMON,
        x = (0, i.jsxs)("div", {
            className: L.Qs,
            "data-mana-component": "mini-premium-tooltip",
            children: [
                G && (0, i.jsx)("div", { className: L.xV, children: (0, i.jsx)(N, { rarity: g }) }),
                (0, i.jsx)("div", {
                    className: a()(L.fA, { [L.qJ]: b }),
                    "aria-hidden": !0,
                    children: (0, i.jsx)(O.BadgeImageWithProgressCircle, {
                        src: p,
                        alt: T,
                        progressCircleText: m?.text,
                        progressCirclePercent: m?.percent,
                        progressCircleUrgency: m?.urgency,
                        compact: !0,
                    }),
                }),
                (0, i.jsxs)(E.B, {
                    gap: 4,
                    align: "center",
                    className: L.i8,
                    children: [
                        null != r &&
                            (0, i.jsx)(A.E, {
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                className: L.UP,
                                children: r,
                            }),
                        (0, i.jsx)(h.D, {
                            variant: "display-sm",
                            color: "text-strong",
                            className: a()(L.DD, { [L.x$]: "nitro" === f }),
                            children: n,
                        }),
                        null != I &&
                            (0, i.jsx)(A.E, {
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                className: L.rf,
                                children: I,
                            }),
                    ],
                }),
            ],
        }),
        k = null != I ? `${T}. ${I}` : T,
        F = (0, u.j)({ shouldShow: P })((e, t) =>
            t
                ? (0, i.jsx)(d.Bc, {
                      isRichTooltip: !0,
                      children: (0, i.jsx)(o.R, {
                          isVisible: P,
                          isRendered: !0,
                          targetElementRef: U,
                          content: x,
                          position: v,
                          align: "center",
                          layerContext: C.uY,
                          animationStyle: e,
                          positionKey: (0, c.Xj)(n),
                      }),
                  })
                : null,
        );
    return (0, i.jsxs)(i.Fragment, { children: [w, (0, i.jsx)(l.A, { id: M, children: k }), F] });
}
let y = D;
