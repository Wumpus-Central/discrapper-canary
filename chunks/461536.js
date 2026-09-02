n.d(t, { K: () => T, A: () => y });
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
    g = n(255434),
    E = n(710778),
    p = n(260981),
    b = n(540418),
    h = n(907085),
    x = n(179820),
    _ = n(375708),
    A = n(381134),
    v = n(963434);
function R(e) {
    let { rarity: t, className: n } = e,
        l = (function (e) {
            switch (e) {
                case s.x.COMMON:
                    return { Icon: p.p, className: v["rarity-common"], label: _.intl.string(_.t.L0K5ci) };
                case s.x.RARE:
                    return { Icon: b.A, className: v["rarity-rare"], label: _.intl.string(_.t["sTx/5z"]) };
                case s.x.EPIC:
                    return { Icon: h.b, className: v["rarity-epic"], label: _.intl.string(_.t.RD8RiN) };
                case s.x.MYTHIC:
                    return { Icon: x.O, className: v["rarity-mythic"], label: _.intl.string(_.t.vqc1ol) };
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
    j = n(881518);
function T(e) {
    let {
            children: t,
            title: n,
            eyebrow: l,
            body: p,
            variant: b = "default",
            badgeImage: h,
            badgeName: x,
            progressCircle: _,
            rarity: A,
            isAnimated: v = !1,
            targetElementRef: T,
            onShow: y,
            position: C = "top",
            shouldShow: S,
        } = e,
        D = v && null == _,
        {
            tooltipId: M,
            isVisible: P,
            targetElementRef: O,
            trigger: U,
        } = (0, o.D)({ children: t, targetElementRef: T, delay: I.In, onTooltipShow: y, shouldShow: S }),
        B = null != A && A !== s.x.COMMON,
        G = (0, a.jsxs)("div", {
            className: j.Qs,
            "data-mana-component": "mini-premium-tooltip",
            children: [
                B && (0, a.jsx)("div", { className: j.xV, children: (0, a.jsx)(R, { rarity: A }) }),
                (0, a.jsx)("div", {
                    className: r()(j.fA, { [j.qJ]: D }),
                    "aria-hidden": !0,
                    children: (0, a.jsx)(N.BadgeImageWithProgressCircle, {
                        src: h,
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
                            className: r()(j.DD, { [j.x$]: "nitro" === b }),
                            children: n,
                        }),
                        null != p &&
                            (0, a.jsx)(c.E, {
                                variant: "text-sm/medium",
                                color: "text-subtle",
                                className: j.rf,
                                children: p,
                            }),
                    ],
                }),
            ],
        }),
        k = null != p ? `${x}. ${p}` : x,
        w = (0, f.j)({ shouldShow: P })((e, t) =>
            t
                ? (0, a.jsx)(m.Bc, {
                      isRichTooltip: !0,
                      children: (0, a.jsx)(g.R, {
                          isVisible: P,
                          isRendered: !0,
                          targetElementRef: O,
                          content: G,
                          position: C,
                          align: "center",
                          animationStyle: e,
                          positionKey: (0, E.Xj)(n),
                      }),
                  })
                : null,
        );
    return (0, a.jsxs)(a.Fragment, { children: [U, (0, a.jsx)(i.A, { id: M, children: k }), w] });
}
let y = T;
