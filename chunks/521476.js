n.d(t, {
    h: function () {
        return h;
    }
}),
    n(47120);
var i = n(200651);
n(192379);
var l = n(481060),
    r = n(100527),
    a = n(906732),
    s = n(545594),
    o = n(295474),
    c = n(981631),
    d = n(388032),
    u = n(117285);
function h(e) {
    var t, n;
    let { guild: h } = e,
        { analyticsLocations: p } = (0, a.ZP)(r.Z.AUTOMOD_PROFILE_QUARANTINE_ALERT),
        [m, f] = (0, o.ww)({
            guildId: null !== (t = null == h ? void 0 : h.id) && void 0 !== t ? t : c.lds,
            analyticsLocations: p,
            openWithoutBackstack: !0
        }),
        g = f ? d.intl.string(d.t['9ph2v7']) : d.intl.string(d.t.ldh9Cg),
        C = f ? d.intl.string(d.t['/PGQf3']) : d.intl.string(d.t.WikgZ2);
    return (0, i.jsx)('div', {
        children: (0, i.jsx)(s.i, {
            bannerIcon: (0, i.jsx)(l.ChatXIcon, {
                size: 'lg',
                color: 'currentColor',
                className: u.bannerIcon
            }),
            bannerHeader: d.intl.format(d.t.kcYdTk, { guildName: null !== (n = null == h ? void 0 : h.name) && void 0 !== n ? n : '' }),
            bannerSubtext: g,
            containerStyles: u.bannerContainer,
            headerStyles: u.bannerHeader,
            children: (0, i.jsx)(l.Button, {
                onClick: () => {
                    m();
                },
                size: l.Button.Sizes.SMALL,
                children: C
            })
        })
    });
}
