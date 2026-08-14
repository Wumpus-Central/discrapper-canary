n.d(t, { K: () => S, A: () => D });
var a = n(477900);
n(582128);
var r = n(503698),
    l = n.n(r),
    s = n(536001),
    i = n(140735),
    d = n(194981),
    o = n(331322),
    c = n(834730),
    u = n(297264),
    f = n(280336),
    E = n(747556),
    m = n(255434),
    g = n(710778),
    p = n(260981),
    _ = n(540418),
    b = n(907085),
    h = n(179820),
    A = n(375708),
    R = n(749749),
    x = n(690533);
function I(e) {
    let { rarity: t, className: n } = e,
        r = (function (e) {
            switch (e) {
                case s.x.COMMON:
                    return { Icon: p.p, className: x["rarity-common"], label: A.intl.string(A.t.L0K5ci) };
                case s.x.RARE:
                    return { Icon: _.A, className: x["rarity-rare"], label: A.intl.string(A.t["sTx/5z"]) };
                case s.x.EPIC:
                    return { Icon: b.b, className: x["rarity-epic"], label: A.intl.string(A.t.RD8RiN) };
                case s.x.MYTHIC:
                    return { Icon: h.O, className: x["rarity-mythic"], label: A.intl.string(A.t.vqc1ol) };
                default:
                    return null;
            }
        })(t);
    if (null == r) return null;
    let { Icon: i, className: d, label: o } = r;
    return (0, a.jsx)("div", {
        role: "img",
        "aria-label": o,
        className: l()(R.T, d, n),
        children: (0, a.jsx)(i, { size: "xxs", color: "currentColor" }),
    });
}
var N = n(140049),
    v = n(518477),
    T = n(589653);
function S(e) {
    let {
            children: t,
            title: n,
            eyebrow: r,
            body: p,
            variant: _ = "default",
            badgeImage: b,
            badgeName: h,
            progressCircle: A,
            rarity: R,
            isAnimated: x = !1,
            targetElementRef: S,
            onShow: D,
            position: j = "top",
        } = e,
        C = x && null == A,
        {
            tooltipId: y,
            isVisible: M,
            targetElementRef: O,
            trigger: P,
        } = (0, d.D)({ children: t, targetElementRef: S, delay: v.In, onTooltipShow: D }),
        U = null != R && R !== s.x.COMMON,
        B = (0, a.jsxs)("div", {
            className: T.Qs,
            "data-mana-component": "mini-premium-tooltip",
            children: [
                U && (0, a.jsx)("div", { className: T.xV, children: (0, a.jsx)(I, { rarity: R }) }),
                (0, a.jsx)("div", {
                    className: l()(T.fA, { [T.qJ]: C }),
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
                (0, a.jsxs)(o.B, {
                    gap: 4,
                    align: "center",
                    className: T.i8,
                    children: [
                        null != r &&
                            (0, a.jsx)(c.E, {
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                className: T.UP,
                                children: r,
                            }),
                        (0, a.jsx)(u.D, {
                            variant: "display-sm",
                            color: "text-strong",
                            className: l()(T.DD, { [T.x$]: "nitro" === _ }),
                            children: n,
                        }),
                        null != p &&
                            (0, a.jsx)(c.E, {
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                className: T.rf,
                                children: p,
                            }),
                    ],
                }),
            ],
        }),
        G = null != p ? `${h}. ${p}` : h,
        k = (0, f.j)({ shouldShow: M })((e, t) =>
            t
                ? (0, a.jsx)(E.Bc, {
                      isRichTooltip: !0,
                      children: (0, a.jsx)(m.R, {
                          isVisible: M,
                          isRendered: !0,
                          targetElementRef: O,
                          content: B,
                          position: j,
                          align: "center",
                          animationStyle: e,
                          positionKey: (0, g.Xj)(n),
                      }),
                  })
                : null,
        );
    return (0, a.jsxs)(a.Fragment, { children: [P, (0, a.jsx)(i.A, { id: y, children: G }), k] });
}
let D = S;
