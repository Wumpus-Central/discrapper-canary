n.d(t, { K: () => j, A: () => I });
var a = n(477900);
n(582128);
var r = n(503698),
    l = n.n(r),
    s = n(536001),
    i = n(402883),
    o = n(331322),
    d = n(834730),
    c = n(534514),
    u = n(280336),
    f = n(747556),
    m = n(160733),
    g = n(710778),
    p = n(140735),
    E = n(260981),
    h = n(540418),
    b = n(907085),
    x = n(179820),
    A = n(792996),
    _ = n(381134);
function N(e) {
    let { rarity: t, className: n } = e,
        r = (function (e) {
            switch (e) {
                case s.x.COMMON:
                    return { Icon: E.p, className: _.e8, label: A.intl.string(A.t.L0K5ci) };
                case s.x.RARE:
                    return { Icon: h.A, className: _.D3, label: A.intl.string(A.t["sTx/5z"]) };
                case s.x.EPIC:
                    return { Icon: b.b, className: _.mk, label: A.intl.string(A.t.RD8RiN) };
                case s.x.MYTHIC:
                    return { Icon: x.O, className: _.nM, label: A.intl.string(A.t.vqc1ol) };
                default:
                    return null;
            }
        })(t);
    if (null == r) return null;
    let { Icon: i, className: o, label: d } = r;
    return (0, a.jsx)("div", {
        role: "img",
        "aria-label": d,
        className: l()(_.Tc, o, n),
        children: (0, a.jsx)(i, { size: "xxs", color: "currentColor" }),
    });
}
var R = n(460969);
n(518477);
var v = n(881518);
function j(e) {
    let {
            children: t,
            title: n,
            eyebrow: r,
            body: E,
            variant: h = "default",
            badgeImage: b,
            badgeName: x,
            progressCircle: A,
            rarity: _,
            isAnimated: j = !1,
            targetElementRef: I,
            onShow: y,
            position: T = "top",
            shouldShow: C,
        } = e,
        S = j && null == A,
        {
            tooltipId: D,
            isVisible: O,
            targetElementRef: M,
            trigger: P,
        } = (0, i.D)({ children: t, targetElementRef: I, delay: 300, onTooltipShow: y, shouldShow: C }),
        U = null != _ && _ !== s.x.COMMON,
        B = (0, a.jsxs)("div", {
            className: v.Qs,
            "data-mana-component": "mini-premium-tooltip",
            children: [
                U && (0, a.jsx)("div", { className: v.xV, children: (0, a.jsx)(N, { rarity: _ }) }),
                (0, a.jsx)("div", {
                    className: l()(v.fA, { [v.qJ]: S }),
                    "aria-hidden": !0,
                    children: (0, a.jsx)(R.BadgeImageWithProgressCircle, {
                        src: b,
                        alt: x,
                        progressCircleText: A?.text,
                        progressCirclePercent: A?.percent,
                        progressCircleUrgency: A?.urgency,
                        compact: !0,
                    }),
                }),
                (0, a.jsxs)(o.B, {
                    gap: 4,
                    align: "center",
                    className: v.i8,
                    children: [
                        null != r &&
                            (0, a.jsx)(d.E, {
                                variant: "body-sm/medium",
                                color: "text-subtle",
                                className: v.UP,
                                children: r,
                            }),
                        (0, a.jsx)(c.D, {
                            variant: "display-sm",
                            color: "text-strong",
                            className: l()(v.DD, { [v.x$]: "nitro" === h }),
                            children: n,
                        }),
                        null != E &&
                            (0, a.jsx)(d.E, {
                                variant: "body-sm/medium",
                                color: "text-subtle",
                                className: v.rf,
                                children: E,
                            }),
                    ],
                }),
            ],
        }),
        G = null != E ? `${x}. ${E}` : x,
        w = (0, u.j)({ shouldShow: O })((e, t) =>
            t
                ? (0, a.jsx)(f.Bc, {
                      isRichTooltip: !0,
                      children: (0, a.jsx)(m.R, {
                          isVisible: O,
                          isRendered: !0,
                          targetElementRef: M,
                          content: B,
                          position: T,
                          align: "center",
                          animationStyle: e,
                          positionKey: (0, g.Xj)(n),
                      }),
                  })
                : null,
        );
    return (0, a.jsxs)(a.Fragment, { children: [P, (0, a.jsx)(p.A, { id: D, children: G }), w] });
}
let I = j;
