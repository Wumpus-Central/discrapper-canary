n.d(t, { h: () => p }), n(47120);
var r = n(200651);
n(192379);
var i = n(481060),
    l = n(100527),
    o = n(906732),
    a = n(545594),
    s = n(295474),
    c = n(981631),
    u = n(388032),
    d = n(269200);
function p(e) {
    var t, n;
    let { guild: p } = e,
        { analyticsLocations: h } = (0, o.ZP)(l.Z.AUTOMOD_PROFILE_QUARANTINE_ALERT),
        [f, m] = (0, s.ww)({
            guildId: null != (t = null == p ? void 0 : p.id) ? t : c.lds,
            analyticsLocations: h,
            openWithoutBackstack: !0
        }),
        g = m ? u.NW.string(u.t['9ph2v7']) : u.NW.string(u.t.ldh9Cg),
        b = m ? u.NW.string(u.t['/PGQf3']) : u.NW.string(u.t.WikgZ2);
    return (0, r.jsx)('div', {
        children: (0, r.jsx)(a.i, {
            bannerIcon: (0, r.jsx)(i.ics, {
                size: 'lg',
                color: 'currentColor',
                className: d.bannerIcon
            }),
            bannerHeader: u.NW.format(u.t.kcYdTk, { guildName: null != (n = null == p ? void 0 : p.name) ? n : '' }),
            bannerSubtext: g,
            containerStyles: d.bannerContainer,
            headerStyles: d.bannerHeader,
            children: (0, r.jsx)(i.zxk, {
                onClick: () => {
                    f();
                },
                size: i.zxk.Sizes.SMALL,
                children: b
            })
        })
    });
}
