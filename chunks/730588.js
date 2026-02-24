n.d(t, { A: () => A });
var i = n(627968);
n(64700);
var s = n(503698),
    a = n.n(s),
    l = n(421380),
    r = n(397927),
    o = n(688810),
    c = n(385612),
    d = n(128450),
    u = n(339984),
    _ = n(985018),
    m = n(738296);
function A(e) {
    let {
            showRemoveBannerButton: t,
            errors: n,
            onBannerChange: s,
            guildId: A,
            className: g,
            disabled: h = !1,
            showPremiumIcon: x = !0,
            isTryItOut: p = !1,
            forcedDivider: E,
            withHighlight: C = !1,
        } = e,
        { newestAnalyticsLocation: T } = (0, o.Ay)(),
        S = C ? r.wLn : l.$n;
    return (0, i.jsx)(d.A, {
        className: g,
        title: _.intl.string(_.t.Vgdusv),
        showPremiumIcon: x,
        errors: n,
        disabled: h,
        forcedDivider: E,
        children: (0, i.jsxs)("div", {
            className: m.NC,
            children: [
                (0, i.jsx)(S, {
                    className: a()({ [m.yj]: C }),
                    size: l.$n.Sizes.SMALL,
                    onClick: () =>
                        (0, c.XD)({ uploadType: u.HL.BANNER, analyticsSource: T, guildId: A, isTryItOut: p }),
                    children: _.intl.string(_.t.N0bC3P),
                }),
                t &&
                    (0, i.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: m.DT,
                        children: (0, i.jsx)(r.Button, {
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
