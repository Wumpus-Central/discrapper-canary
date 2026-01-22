n.d(t, { A: () => _ });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(421380),
    o = n(397927),
    l = n(688810),
    c = n(385612),
    u = n(128450),
    d = n(339984),
    f = n(985018),
    p = n(52506);
function _(e) {
    let {
            showRemoveBannerButton: t,
            errors: n,
            onBannerChange: i,
            guildId: _,
            className: h,
            disabled: m = !1,
            showPremiumIcon: g = !0,
            isTryItOut: E = !1,
            forcedDivider: b,
            withHighlight: y = !1,
        } = e,
        { newestAnalyticsLocation: O } = (0, l.Ay)(),
        A = y ? o.wLn : s.$n;
    return (0, r.jsx)(u.A, {
        className: h,
        title: f.intl.string(f.t.Vgdusv),
        showPremiumIcon: g,
        errors: n,
        disabled: m,
        forcedDivider: b,
        children: (0, r.jsxs)("div", {
            className: p.NC,
            children: [
                (0, r.jsx)(A, {
                    className: a()({ [p.yj]: y }),
                    size: s.$n.Sizes.SMALL,
                    onClick: () =>
                        (0, c.XD)({
                            uploadType: d.HL.BANNER,
                            analyticsSource: O,
                            guildId: _,
                            isTryItOut: E,
                        }),
                    children: f.intl.string(f.t.N0bC3P),
                }),
                t &&
                    (0, r.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: p.DT,
                        children: (0, r.jsx)(o.Button, {
                            variant: "secondary",
                            size: "sm",
                            text: null != _ ? f.intl.string(f.t.jHlJNS) : f.intl.string(f.t.tT9n7D),
                            onClick: () => i(null),
                        }),
                    }),
            ],
        }),
    });
}
