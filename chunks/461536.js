n.d(t, { K: () => j, A: () => C });
var a = n(477900);
n(582128);
var l = n(503698),
    r = n.n(l),
    s = n(536001),
    i = n(140735),
    o = n(194981),
    d = n(331322),
    c = n(834730),
    u = n(297264),
    f = n(280336),
    m = n(747556),
    E = n(255434),
    g = n(710778),
    p = n(260981),
    b = n(540418),
    h = n(907085),
    _ = n(179820),
    x = n(375708),
    A = n(381134),
    R = n(963434);
function v(e) {
    let { rarity: t, className: n } = e,
        l = (function (e) {
            switch (e) {
                case s.x.COMMON:
                    return { Icon: p.p, className: R["rarity-common"], label: x.intl.string(x.t.L0K5ci) };
                case s.x.RARE:
                    return { Icon: b.A, className: R["rarity-rare"], label: x.intl.string(x.t["sTx/5z"]) };
                case s.x.EPIC:
                    return { Icon: h.b, className: R["rarity-epic"], label: x.intl.string(x.t.RD8RiN) };
                case s.x.MYTHIC:
                    return { Icon: _.O, className: R["rarity-mythic"], label: x.intl.string(x.t.vqc1ol) };
                default:
                    return null;
            }
        })(t);
    if (null == l) return null;
    let { Icon: i, className: o, label: d } = l;
    return (0, a.jsx)("div", {
        role: "img",
        "aria-label": d,
        className: r()(A.T, o, n),
        children: (0, a.jsx)(i, { size: "xxs", color: "currentColor" }),
    });
}
var N = n(140049),
    I = n(518477),
    T = n(881518);
function j(e) {
    let {
            children: t,
            title: n,
            eyebrow: l,
            body: p,
            variant: b = "default",
            badgeImage: h,
            badgeName: _,
            progressCircle: x,
            rarity: A,
            isAnimated: R = !1,
            targetElementRef: j,
            onShow: C,
            position: S = "top",
            shouldShow: y,
        } = e,
        D = R && null == x,
        {
            tooltipId: M,
            isVisible: O,
            targetElementRef: P,
            trigger: U,
        } = (0, o.D)({ children: t, targetElementRef: j, delay: I.In, onTooltipShow: C, shouldShow: y }),
        B = null != A && A !== s.x.COMMON,
        k = (0, a.jsxs)("div", {
            className: T.Qs,
            "data-mana-component": "mini-premium-tooltip",
            children: [
                B && (0, a.jsx)("div", { className: T.xV, children: (0, a.jsx)(v, { rarity: A }) }),
                (0, a.jsx)("div", {
                    className: r()(T.fA, { [T.qJ]: D }),
                    "aria-hidden": !0,
                    children: (0, a.jsx)(N.BadgeImageWithProgressCircle, {
                        src: h,
                        alt: _,
                        progressCircleText: x?.text,
                        progressCirclePercent: x?.percent,
                        progressCircleUrgency: x?.urgency,
                        compact: !0,
                    }),
                }),
                (0, a.jsxs)(d.B, {
                    gap: 4,
                    align: "center",
                    className: T.i8,
                    children: [
                        null != l &&
                            (0, a.jsx)(c.E, {
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                className: T.UP,
                                children: l,
                            }),
                        (0, a.jsx)(u.D, {
                            variant: "display-sm",
                            color: "text-strong",
                            className: r()(T.DD, { [T.x$]: "nitro" === b }),
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
        G = null != p ? `${_}. ${p}` : _,
        w = (0, f.j)({ shouldShow: O })((e, t) =>
            t
                ? (0, a.jsx)(m.Bc, {
                      isRichTooltip: !0,
                      children: (0, a.jsx)(E.R, {
                          isVisible: O,
                          isRendered: !0,
                          targetElementRef: P,
                          content: k,
                          position: S,
                          align: "center",
                          animationStyle: e,
                          positionKey: (0, g.Xj)(n),
                      }),
                  })
                : null,
        );
    return (0, a.jsxs)(a.Fragment, { children: [U, (0, a.jsx)(i.A, { id: M, children: G }), w] });
}
let C = j;
