n.d(t, { K: () => T, A: () => y });
var a = n(477900);
n(582128);
var l = n(503698),
    r = n.n(l),
    i = n(536001),
    s = n(140735),
    o = n(194981),
    d = n(331322),
    c = n(834730),
    u = n(297264),
    f = n(280336),
    m = n(747556),
    g = n(255434),
    p = n(710778),
    E = n(260981),
    h = n(540418),
    b = n(907085),
    x = n(179820),
    _ = n(375708),
    A = n(381134),
    N = n(963434);
function v(e) {
    let { rarity: t, className: n } = e,
        l = (function (e) {
            switch (e) {
                case i.x.COMMON:
                    return { Icon: E.p, className: N["rarity-common"], label: _.intl.string(_.t.L0K5ci) };
                case i.x.RARE:
                    return { Icon: h.A, className: N["rarity-rare"], label: _.intl.string(_.t["sTx/5z"]) };
                case i.x.EPIC:
                    return { Icon: b.b, className: N["rarity-epic"], label: _.intl.string(_.t.RD8RiN) };
                case i.x.MYTHIC:
                    return { Icon: x.O, className: N["rarity-mythic"], label: _.intl.string(_.t.vqc1ol) };
                default:
                    return null;
            }
        })(t);
    if (null == l) return null;
    let { Icon: s, className: o, label: d } = l;
    return (0, a.jsx)("div", {
        role: "img",
        "aria-label": d,
        className: r()(A.T, o, n),
        children: (0, a.jsx)(s, { size: "xxs", color: "currentColor" }),
    });
}
var R = n(140049),
    I = n(518477),
    j = n(881518);
function T(e) {
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
            isAnimated: N = !1,
            targetElementRef: T,
            onShow: y,
            position: C = "top",
            shouldShow: S,
        } = e,
        D = N && null == _,
        {
            tooltipId: M,
            isVisible: P,
            targetElementRef: U,
            trigger: O,
        } = (0, o.D)({ children: t, targetElementRef: T, delay: I.In, onTooltipShow: y, shouldShow: S }),
        B = null != A && A !== i.x.COMMON,
        G = (0, a.jsxs)("div", {
            className: j.Qs,
            "data-mana-component": "mini-premium-tooltip",
            children: [
                B && (0, a.jsx)("div", { className: j.xV, children: (0, a.jsx)(v, { rarity: A }) }),
                (0, a.jsx)("div", {
                    className: r()(j.fA, { [j.qJ]: D }),
                    "aria-hidden": !0,
                    children: (0, a.jsx)(R.BadgeImageWithProgressCircle, {
                        src: b,
                        alt: x,
                        progressCircleText: _?.text,
                        progressCirclePercent: _?.percent,
                        progressCircleUrgency: _?.urgency,
                        compact: !0,
                    }),
                }),
                (0, a.jsxs)(d.B, {
                    gap: 4,
                    align: "center",
                    className: j.i8,
                    children: [
                        null != l &&
                            (0, a.jsx)(c.E, {
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                className: j.UP,
                                children: l,
                            }),
                        (0, a.jsx)(u.D, {
                            variant: "display-sm",
                            color: "text-strong",
                            className: r()(j.DD, { [j.x$]: "nitro" === h }),
                            children: n,
                        }),
                        null != E &&
                            (0, a.jsx)(c.E, {
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                className: j.rf,
                                children: E,
                            }),
                    ],
                }),
            ],
        }),
        w = null != E ? `${x}. ${E}` : x,
        k = (0, f.j)({ shouldShow: P })((e, t) =>
            t
                ? (0, a.jsx)(m.Bc, {
                      isRichTooltip: !0,
                      children: (0, a.jsx)(g.R, {
                          isVisible: P,
                          isRendered: !0,
                          targetElementRef: U,
                          content: G,
                          position: C,
                          align: "center",
                          animationStyle: e,
                          positionKey: (0, p.Xj)(n),
                      }),
                  })
                : null,
        );
    return (0, a.jsxs)(a.Fragment, { children: [O, (0, a.jsx)(s.A, { id: M, children: w }), k] });
}
let y = T;
