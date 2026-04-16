n.d(t, { A: () => _ });
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
    m = n(985018),
    g = n(33023);
function _(e) {
    let {
            showRemoveBannerButton: t,
            errors: n,
            onBannerChange: s,
            guildId: _,
            className: x,
            disabled: h = !1,
            showPremiumIcon: A = !0,
            isTryItOut: p = !1,
            forcedDivider: T,
            withHighlight: f = !1,
        } = e,
        { newestAnalyticsLocation: S } = (0, o.Ay)(),
        E = f ? a.wLn : r.$n;
    return (0, i.jsx)(c.A, {
        className: x,
        title: m.intl.string(m.t.Vgdusv),
        showPremiumIcon: A,
        errors: n,
        disabled: h,
        forcedDivider: T,
        children: (0, i.jsxs)("div", {
            className: g.NC,
            children: [
                (0, i.jsx)(E, {
                    className: l()({ [g.yj]: f }),
                    size: r.$n.Sizes.SMALL,
                    onClick: () =>
                        (0, d.XD)({ uploadType: u.HL.BANNER, analyticsSource: S, guildId: _, isTryItOut: p }),
                    children: m.intl.string(m.t.N0bC3P),
                }),
                t &&
                    (0, i.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: g.DT,
                        children: (0, i.jsx)(a.Button, {
                            variant: "secondary",
                            size: "sm",
                            text: null != _ ? m.intl.string(m.t.jHlJNS) : m.intl.string(m.t.tT9n7D),
                            onClick: () => s(null),
                        }),
                    }),
            ],
        }),
    });
}
