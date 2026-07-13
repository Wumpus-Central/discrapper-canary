n.d(t, { K: () => C, A: () => S });
var a = n(627968);
n(64700);
var l = n(503698),
    r = n.n(l),
    s = n(536001),
    i = n(140735),
    d = n(237140),
    o = n(112317),
    c = n(348275),
    u = n(505679),
    f = n(521754),
    E = n(331322),
    m = n(834730),
    g = n(297264),
    p = n(260981),
    b = n(540418),
    _ = n(907085),
    h = n(179820),
    A = n(375708),
    R = n(910621),
    x = n(175501);
function N(e) {
    let { rarity: t, className: n } = e,
        l = (function (e) {
            switch (e) {
                case s.x.COMMON:
                    return { Icon: p.p, className: x["rarity-common"], label: A.intl.string(A.t.L0K5ci) };
                case s.x.RARE:
                    return { Icon: b.A, className: x["rarity-rare"], label: A.intl.string(A.t["sTx/5z"]) };
                case s.x.EPIC:
                    return { Icon: _.b, className: x["rarity-epic"], label: A.intl.string(A.t.RD8RiN) };
                case s.x.MYTHIC:
                    return { Icon: h.O, className: x["rarity-mythic"], label: A.intl.string(A.t.vqc1ol) };
                default:
                    return null;
            }
        })(t);
    if (null == l) return null;
    let { Icon: i, className: d, label: o } = l;
    return (0, a.jsx)("div", {
        role: "img",
        "aria-label": o,
        className: r()(R.T, d, n),
        children: (0, a.jsx)(i, { size: "xxs", color: "currentColor" }),
    });
}
var v = n(750506),
    I = n(140049),
    T = n(518477),
    j = n(128845);
function C(e) {
    let {
            children: t,
            title: n,
            eyebrow: l,
            body: p,
            variant: b = "default",
            badgeImage: _,
            badgeName: h,
            progressCircle: A,
            rarity: R,
            isAnimated: x = !1,
            targetElementRef: C,
            onShow: S,
            position: y = "top",
        } = e,
        D = x && null == A,
        {
            tooltipId: M,
            isVisible: O,
            targetElementRef: P,
            trigger: U,
        } = (0, f.D)({ children: t, targetElementRef: C, delay: T.In, onTooltipShow: S }),
        B = null != R && R !== s.x.COMMON,
        k = (0, a.jsxs)("div", {
            className: j.Qs,
            "data-mana-component": "mini-premium-tooltip",
            children: [
                B && (0, a.jsx)("div", { className: j.xV, children: (0, a.jsx)(N, { rarity: R }) }),
                (0, a.jsx)("div", {
                    className: r()(j.fA, { [j.qJ]: D }),
                    "aria-hidden": !0,
                    children: (0, a.jsx)(I.BadgeImageWithProgressCircle, {
                        src: _,
                        alt: h,
                        progressCircleText: A?.text,
                        progressCirclePercent: A?.percent,
                        progressCircleUrgency: A?.urgency,
                        compact: !0,
                    }),
                }),
                (0, a.jsxs)(E.B, {
                    gap: 4,
                    align: "center",
                    className: j.i8,
                    children: [
                        null != l &&
                            (0, a.jsx)(m.E, {
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                className: j.UP,
                                children: l,
                            }),
                        (0, a.jsx)(g.D, {
                            variant: "display-sm",
                            color: "text-strong",
                            className: r()(j.DD, { [j.x$]: "nitro" === b }),
                            children: n,
                        }),
                        null != p &&
                            (0, a.jsx)(m.E, {
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                className: j.rf,
                                children: p,
                            }),
                    ],
                }),
            ],
        }),
        G = null != p ? `${h}. ${p}` : h,
        w = (0, u.j)({ shouldShow: O })((e, t) =>
            t
                ? (0, a.jsx)(o.Bc, {
                      isRichTooltip: !0,
                      children: (0, a.jsx)(d.R, {
                          isVisible: O,
                          isRendered: !0,
                          targetElementRef: P,
                          content: k,
                          position: y,
                          align: "center",
                          layerContext: v.uY,
                          animationStyle: e,
                          positionKey: (0, c.Xj)(n),
                      }),
                  })
                : null,
        );
    return (0, a.jsxs)(a.Fragment, { children: [U, (0, a.jsx)(i.A, { id: M, children: G }), w] });
}
let S = C;
