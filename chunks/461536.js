n.d(t, { K: () => I, A: () => T });
var a = n(477900);
n(582128);
var l = n(503698),
    r = n.n(l),
    s = n(536001),
    i = n(194981),
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
    x = n(907085),
    b = n(179820),
    A = n(105292),
    _ = n(381134);
function N(e) {
    let { rarity: t, className: n } = e,
        l = (function (e) {
            switch (e) {
                case s.x.COMMON:
                    return { Icon: E.p, className: _.e8, label: A.intl.string(A.t.L0K5ci) };
                case s.x.RARE:
                    return { Icon: h.A, className: _.D3, label: A.intl.string(A.t["sTx/5z"]) };
                case s.x.EPIC:
                    return { Icon: x.b, className: _.mk, label: A.intl.string(A.t.RD8RiN) };
                case s.x.MYTHIC:
                    return { Icon: b.O, className: _.nM, label: A.intl.string(A.t.vqc1ol) };
                default:
                    return null;
            }
        })(t);
    if (null == l) return null;
    let { Icon: i, className: o, label: d } = l;
    return (0, a.jsx)("div", {
        role: "img",
        "aria-label": d,
        className: r()(_.Tc, o, n),
        children: (0, a.jsx)(i, { size: "xxs", color: "currentColor" }),
    });
}
var R = n(140049),
    v = n(518477),
    j = n(881518);
function I(e) {
    let {
            children: t,
            title: n,
            eyebrow: l,
            body: E,
            variant: h = "default",
            badgeImage: x,
            badgeName: b,
            progressCircle: A,
            rarity: _,
            isAnimated: I = !1,
            targetElementRef: T,
            onShow: y,
            position: C = "top",
            shouldShow: S,
        } = e,
        D = I && null == A,
        {
            tooltipId: M,
            isVisible: O,
            targetElementRef: P,
            trigger: U,
        } = (0, i.D)({ children: t, targetElementRef: T, delay: v.In, onTooltipShow: y, shouldShow: S }),
        B = null != _ && _ !== s.x.COMMON,
        G = (0, a.jsxs)("div", {
            className: j.Qs,
            "data-mana-component": "mini-premium-tooltip",
            children: [
                B && (0, a.jsx)("div", { className: j.xV, children: (0, a.jsx)(N, { rarity: _ }) }),
                (0, a.jsx)("div", {
                    className: r()(j.fA, { [j.qJ]: D }),
                    "aria-hidden": !0,
                    children: (0, a.jsx)(R.BadgeImageWithProgressCircle, {
                        src: x,
                        alt: b,
                        progressCircleText: A?.text,
                        progressCirclePercent: A?.percent,
                        progressCircleUrgency: A?.urgency,
                        compact: !0,
                    }),
                }),
                (0, a.jsxs)(o.B, {
                    gap: 4,
                    align: "center",
                    className: j.i8,
                    children: [
                        null != l &&
                            (0, a.jsx)(d.E, {
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                className: j.UP,
                                children: l,
                            }),
                        (0, a.jsx)(c.D, {
                            variant: "display-sm",
                            color: "text-strong",
                            className: r()(j.DD, { [j.x$]: "nitro" === h }),
                            children: n,
                        }),
                        null != E &&
                            (0, a.jsx)(d.E, {
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                className: j.rf,
                                children: E,
                            }),
                    ],
                }),
            ],
        }),
        w = null != E ? `${b}. ${E}` : b,
        k = (0, u.j)({ shouldShow: O })((e, t) =>
            t
                ? (0, a.jsx)(f.Bc, {
                      isRichTooltip: !0,
                      children: (0, a.jsx)(m.R, {
                          isVisible: O,
                          isRendered: !0,
                          targetElementRef: P,
                          content: G,
                          position: C,
                          align: "center",
                          animationStyle: e,
                          positionKey: (0, g.Xj)(n),
                      }),
                  })
                : null,
        );
    return (0, a.jsxs)(a.Fragment, { children: [U, (0, a.jsx)(p.A, { id: M, children: w }), k] });
}
let T = I;
