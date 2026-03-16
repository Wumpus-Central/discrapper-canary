n.d(t, { A: () => g });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    r = n(421380),
    a = n(397927),
    o = n(688810),
    d = n(385612),
    c = n(128450),
    u = n(339984),
    _ = n(985018),
    m = n(52506);
function g(e) {
    let {
            showRemoveBannerButton: t,
            errors: n,
            onBannerChange: s,
            guildId: g,
            className: A,
            disabled: h = !1,
            showPremiumIcon: x = !0,
            isTryItOut: p = !1,
            forcedDivider: T,
            withHighlight: E = !1,
        } = e,
        { newestAnalyticsLocation: C } = (0, o.Ay)(),
        S = E ? a.wLn : r.$n;
    return (0, i.jsx)(c.A, {
        className: A,
        title: _.intl.string(_.t.Vgdusv),
        showPremiumIcon: x,
        errors: n,
        disabled: h,
        forcedDivider: T,
        children: (0, i.jsxs)("div", {
            className: m.NC,
            children: [
                (0, i.jsx)(S, {
                    className: l()({ [m.yj]: E }),
                    size: r.$n.Sizes.SMALL,
                    onClick: () =>
                        (0, d.XD)({ uploadType: u.HL.BANNER, analyticsSource: C, guildId: g, isTryItOut: p }),
                    children: _.intl.string(_.t.N0bC3P),
                }),
                t &&
                    (0, i.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: m.DT,
                        children: (0, i.jsx)(a.Button, {
                            variant: "secondary",
                            size: "sm",
                            text: null != g ? _.intl.string(_.t.jHlJNS) : _.intl.string(_.t.tT9n7D),
                            onClick: () => s(null),
                        }),
                    }),
            ],
        }),
    });
}
