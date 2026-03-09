n.d(t, { A: () => m });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    a = n(421380),
    r = n(397927),
    o = n(688810),
    d = n(385612),
    c = n(128450),
    u = n(339984),
    _ = n(985018),
    g = n(52506);
function m(e) {
    let {
            showRemoveBannerButton: t,
            errors: n,
            onBannerChange: s,
            guildId: m,
            className: A,
            disabled: h = !1,
            showPremiumIcon: p = !0,
            isTryItOut: x = !1,
            forcedDivider: E,
            withHighlight: T = !1,
        } = e,
        { newestAnalyticsLocation: S } = (0, o.Ay)(),
        C = T ? r.wLn : a.$n;
    return (0, i.jsx)(c.A, {
        className: A,
        title: _.intl.string(_.t.Vgdusv),
        showPremiumIcon: p,
        errors: n,
        disabled: h,
        forcedDivider: E,
        children: (0, i.jsxs)("div", {
            className: g.NC,
            children: [
                (0, i.jsx)(C, {
                    className: l()({ [g.yj]: T }),
                    size: a.$n.Sizes.SMALL,
                    onClick: () =>
                        (0, d.XD)({ uploadType: u.HL.BANNER, analyticsSource: S, guildId: m, isTryItOut: x }),
                    children: _.intl.string(_.t.N0bC3P),
                }),
                t &&
                    (0, i.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: g.DT,
                        children: (0, i.jsx)(r.Button, {
                            variant: "secondary",
                            size: "sm",
                            text: null != m ? _.intl.string(_.t.jHlJNS) : _.intl.string(_.t.tT9n7D),
                            onClick: () => s(null),
                        }),
                    }),
            ],
        }),
    });
}
