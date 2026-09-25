n.d(t, { K: () => j, A: () => T });
var a = n(477900);
n(582128);
var l = n(503698),
    r = n.n(l),
    i = n(536001),
    s = n(194981),
    o = n(331322),
    d = n(834730),
    c = n(297264),
    u = n(280336),
    f = n(747556),
    m = n(255434),
    g = n(710778),
    p = n(140735),
    E = n(260981),
    h = n(540418),
    b = n(907085),
    x = n(179820),
    _ = n(375708),
    A = n(381134);
function N(e) {
    let { rarity: t, className: n } = e,
        l = (function (e) {
            switch (e) {
                case i.x.COMMON:
                    return { Icon: E.p, className: A.e8, label: _.intl.string(_.t.L0K5ci) };
                case i.x.RARE:
                    return { Icon: h.A, className: A.D3, label: _.intl.string(_.t["sTx/5z"]) };
                case i.x.EPIC:
                    return { Icon: b.b, className: A.mk, label: _.intl.string(_.t.RD8RiN) };
                case i.x.MYTHIC:
                    return { Icon: x.O, className: A.nM, label: _.intl.string(_.t.vqc1ol) };
                default:
                    return null;
            }
        })(t);
    if (null == l) return null;
    let { Icon: s, className: o, label: d } = l;
    return (0, a.jsx)("div", {
        role: "img",
        "aria-label": d,
        className: r()(A.Tc, o, n),
        children: (0, a.jsx)(s, { size: "xxs", color: "currentColor" }),
    });
}
var v = n(140049),
    R = n(518477),
    I = n(881518);
function j(e) {
    let {
            children: t,
            title: n,
            eyebrow: l,
            body: E,
            variant: h = "default",
            badgeImage: b,
            badgeName: x,
            progressCircle: _,
            rarity: A,
            isAnimated: j = !1,
            targetElementRef: T,
            onShow: y,
            position: C = "top",
            shouldShow: S,
        } = e,
        D = j && null == _,
        {
            tooltipId: M,
            isVisible: P,
            targetElementRef: U,
            trigger: O,
        } = (0, s.D)({ children: t, targetElementRef: T, delay: R.In, onTooltipShow: y, shouldShow: S }),
        B = null != A && A !== i.x.COMMON,
        G = (0, a.jsxs)("div", {
            className: I.Qs,
            "data-mana-component": "mini-premium-tooltip",
            children: [
                B && (0, a.jsx)("div", { className: I.xV, children: (0, a.jsx)(N, { rarity: A }) }),
                (0, a.jsx)("div", {
                    className: r()(I.fA, { [I.qJ]: D }),
                    "aria-hidden": !0,
                    children: (0, a.jsx)(v.BadgeImageWithProgressCircle, {
                        src: b,
                        alt: x,
                        progressCircleText: _?.text,
                        progressCirclePercent: _?.percent,
                        progressCircleUrgency: _?.urgency,
                        compact: !0,
                    }),
                }),
                (0, a.jsxs)(o.B, {
                    gap: 4,
                    align: "center",
                    className: I.i8,
                    children: [
                        null != l &&
                            (0, a.jsx)(d.E, {
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                className: I.UP,
                                children: l,
                            }),
                        (0, a.jsx)(c.D, {
                            variant: "display-sm",
                            color: "text-strong",
                            className: r()(I.DD, { [I.x$]: "nitro" === h }),
                            children: n,
                        }),
                        null != E &&
                            (0, a.jsx)(d.E, {
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                className: I.rf,
                                children: E,
                            }),
                    ],
                }),
            ],
        }),
        w = null != E ? `${x}. ${E}` : x,
        k = (0, u.j)({ shouldShow: P })((e, t) =>
            t
                ? (0, a.jsx)(f.Bc, {
                      isRichTooltip: !0,
                      children: (0, a.jsx)(m.R, {
                          isVisible: P,
                          isRendered: !0,
                          targetElementRef: U,
                          content: G,
                          position: C,
                          align: "center",
                          animationStyle: e,
                          positionKey: (0, g.Xj)(n),
                      }),
                  })
                : null,
        );
    return (0, a.jsxs)(a.Fragment, { children: [O, (0, a.jsx)(p.A, { id: M, children: w }), k] });
}
let T = j;
