n.d(t, { A: () => A });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    a = n(862482),
    r = n(930861),
    o = n(821609),
    d = n(688810),
    u = n(385612),
    c = n(128450),
    g = n(339984),
    m = n(985018),
    _ = n(33023);
function A(e) {
    let {
            showRemoveBannerButton: t,
            errors: n,
            onBannerChange: s,
            guildId: A,
            className: h,
            disabled: p = !1,
            showPremiumIcon: x = !0,
            isTryItOut: E = !1,
            forcedDivider: T,
            withHighlight: S = !1,
        } = e,
        { newestAnalyticsLocation: f } = (0, d.Ay)(),
        b = S ? r.wL : a.$n;
    return (0, i.jsx)(c.A, {
        className: h,
        title: m.intl.string(m.t.Vgdusv),
        showPremiumIcon: x,
        errors: n,
        disabled: p,
        forcedDivider: T,
        children: (0, i.jsxs)("div", {
            className: _.NC,
            children: [
                (0, i.jsx)(b, {
                    className: l()({ [_.yj]: S }),
                    size: a.$n.Sizes.SMALL,
                    onClick: () =>
                        (0, u.XD)({ uploadType: g.HL.BANNER, analyticsSource: f, guildId: A, isTryItOut: E }),
                    children: m.intl.string(m.t.N0bC3P),
                }),
                t &&
                    (0, i.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: _.DT,
                        children: (0, i.jsx)(o.$, {
                            variant: "secondary",
                            size: "sm",
                            text: null != A ? m.intl.string(m.t.jHlJNS) : m.intl.string(m.t.tT9n7D),
                            onClick: () => s(null),
                        }),
                    }),
            ],
        }),
    });
}
