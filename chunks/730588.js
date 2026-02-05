n.d(t, { A: () => A });
var i = n(627968);
n(64700);
var s = n(503698),
    r = n.n(s),
    a = n(421380),
    l = n(397927),
    o = n(688810),
    c = n(385612),
    d = n(128450),
    u = n(339984),
    _ = n(985018),
    m = n(52506);
function A(e) {
    let {
            showRemoveBannerButton: t,
            errors: n,
            onBannerChange: s,
            guildId: A,
            className: g,
            disabled: E = !1,
            showPremiumIcon: h = !0,
            isTryItOut: p = !1,
            forcedDivider: C,
            withHighlight: x = !1,
        } = e,
        { newestAnalyticsLocation: T } = (0, o.Ay)(),
        I = x ? l.wLn : a.$n;
    return (0, i.jsx)(d.A, {
        className: g,
        title: _.intl.string(_.t.Vgdusv),
        showPremiumIcon: h,
        errors: n,
        disabled: E,
        forcedDivider: C,
        children: (0, i.jsxs)("div", {
            className: m.NC,
            children: [
                (0, i.jsx)(I, {
                    className: r()({ [m.yj]: x }),
                    size: a.$n.Sizes.SMALL,
                    onClick: () =>
                        (0, c.XD)({ uploadType: u.HL.BANNER, analyticsSource: T, guildId: A, isTryItOut: p }),
                    children: _.intl.string(_.t.N0bC3P),
                }),
                t &&
                    (0, i.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: m.DT,
                        children: (0, i.jsx)(l.Button, {
                            variant: "secondary",
                            size: "sm",
                            text: null != A ? _.intl.string(_.t.jHlJNS) : _.intl.string(_.t.tT9n7D),
                            onClick: () => s(null),
                        }),
                    }),
            ],
        }),
    });
}
