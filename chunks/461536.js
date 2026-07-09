n.d(t, { K: () => S, A: () => M });
var a = n(627968);
n(64700);
var r = n(503698),
    l = n.n(r),
    i = n(536001),
    s = n(140735),
    d = n(237140),
    o = n(112317),
    c = n(348275),
    u = n(505679),
    f = n(521754),
    m = n(331322),
    E = n(834730),
    _ = n(534514),
    g = n(260981),
    p = n(540418),
    b = n(907085),
    h = n(179820),
    A = n(375708),
    R = n(16605),
    v = n(440653);
function x(e) {
    let { rarity: t, className: n } = e,
        r = (function (e) {
            switch (e) {
                case i.x.COMMON:
                    return { Icon: g.p, className: v["rarity-common"], label: A.intl.string(A.t.L0K5ci) };
                case i.x.RARE:
                    return { Icon: p.A, className: v["rarity-rare"], label: A.intl.string(A.t["sTx/5z"]) };
                case i.x.EPIC:
                    return { Icon: b.b, className: v["rarity-epic"], label: A.intl.string(A.t.RD8RiN) };
                case i.x.MYTHIC:
                    return { Icon: h.O, className: v["rarity-mythic"], label: A.intl.string(A.t.vqc1ol) };
                default:
                    return null;
            }
        })(t);
    if (null == r) return null;
    let { Icon: s, className: d, label: o } = r;
    return (0, a.jsx)("div", {
        role: "img",
        "aria-label": o,
        className: l()(R.T, d, n),
        children: (0, a.jsx)(s, { size: "xxs", color: "currentColor" }),
    });
}
var I = n(750506),
    N = n(140049),
    T = n(518477),
    j = n(779021);
function S(e) {
    let {
            children: t,
            title: n,
            eyebrow: r,
            body: g,
            variant: p = "default",
            badgeImage: b,
            badgeName: h,
            progressCircle: A,
            rarity: R,
            isAnimated: v = !1,
            targetElementRef: S,
            onShow: M,
            position: C = "top",
        } = e,
        y = v && null == A,
        {
            tooltipId: D,
            isVisible: O,
            targetElementRef: U,
            trigger: P,
        } = (0, f.D)({ children: t, targetElementRef: S, delay: T.In, onTooltipShow: M }),
        B = null != R && R !== i.x.COMMON,
        G = (0, a.jsxs)("div", {
            className: j.Qs,
            "data-mana-component": "mini-premium-tooltip",
            children: [
                B && (0, a.jsx)("div", { className: j.xV, children: (0, a.jsx)(x, { rarity: R }) }),
                (0, a.jsx)("div", {
                    className: l()(j.fA, { [j.qJ]: y }),
                    "aria-hidden": !0,
                    children: (0, a.jsx)(N.BadgeImageWithProgressCircle, {
                        src: b,
                        alt: h,
                        progressCircleText: A?.text,
                        progressCirclePercent: A?.percent,
                        progressCircleUrgency: A?.urgency,
                        compact: !0,
                    }),
                }),
                (0, a.jsxs)(m.B, {
                    gap: 4,
                    align: "center",
                    className: j.i8,
                    children: [
                        null != r &&
                            (0, a.jsx)(E.E, {
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                className: j.UP,
                                children: r,
                            }),
                        (0, a.jsx)(_.D, {
                            variant: "display-sm",
                            color: "text-strong",
                            className: l()(j.DD, { [j.x$]: "nitro" === p }),
                            children: n,
                        }),
                        null != g &&
                            (0, a.jsx)(E.E, {
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                className: j.rf,
                                children: g,
                            }),
                    ],
                }),
            ],
        }),
        k = null != g ? `${h}. ${g}` : h,
        L = (0, u.j)({ shouldShow: O })((e, t) =>
            t
                ? (0, a.jsx)(o.Bc, {
                      isRichTooltip: !0,
                      children: (0, a.jsx)(d.R, {
                          isVisible: O,
                          isRendered: !0,
                          targetElementRef: U,
                          content: G,
                          position: C,
                          align: "center",
                          layerContext: I.uY,
                          animationStyle: e,
                          positionKey: (0, c.Xj)(n),
                      }),
                  })
                : null,
        );
    return (0, a.jsxs)(a.Fragment, { children: [P, (0, a.jsx)(s.A, { id: D, children: k }), L] });
}
let M = S;
