(n.d(t, { h: () => x }), n(388685));
var r = n(255367);
n(73800);
var i = n(442837),
    l = n(481060),
    o = n(100527),
    a = n(906732),
    s = n(545594),
    c = n(300284),
    u = n(314897),
    d = n(271383),
    p = n(715903),
    h = n(295474),
    f = n(981631),
    m = n(372897),
    g = n(526761),
    b = n(388032),
    _ = n(269200);
function y(e) {
    var t;
    let { guild: n } = e,
        i = (0, c.Z)({ scrollPosition: g.Y_.GUILD_TAG });
    return (0, r.jsx)('div', {
        children: (0, r.jsx)(s.i, {
            bannerIcon: (0, r.jsx)(l.ics, {
                size: 'lg',
                color: 'currentColor',
                className: _.bannerIcon
            }),
            bannerHeader: b.intl.format(b.t.GgMwjo, { guildName: null != (t = null == n ? void 0 : n.name) ? t : '' }),
            bannerSubtext: b.intl.string(b.t.ONjwDw),
            textStyles: _.bannerContainer,
            headerStyles: _.bannerHeader,
            children: (0, r.jsx)(l.zxk, {
                onClick: () => i(),
                size: l.zxk.Sizes.SMALL,
                children: b.intl.string(b.t.Viksoq)
            })
        })
    });
}
function C(e) {
    var t, n;
    let { guild: i } = e,
        { analyticsLocations: c } = (0, a.ZP)(o.Z.AUTOMOD_PROFILE_QUARANTINE_ALERT),
        [u, d] = (0, h.ww)({
            guildId: null != (t = null == i ? void 0 : i.id) ? t : f.lds,
            analyticsLocations: c,
            openWithoutBackstack: !0
        }),
        p = d ? b.intl.string(b.t['9ph2v7']) : b.intl.string(b.t.ldh9Cg),
        m = d ? b.intl.string(b.t['/PGQf3']) : b.intl.string(b.t.WikgZ2);
    return (0, r.jsx)('div', {
        children: (0, r.jsx)(s.i, {
            bannerIcon: (0, r.jsx)(l.ics, {
                size: 'lg',
                color: 'currentColor',
                className: _.bannerIcon
            }),
            bannerHeader: b.intl.format(b.t.kcYdTk, { guildName: null != (n = null == i ? void 0 : i.name) ? n : '' }),
            bannerSubtext: p,
            textStyles: _.bannerContainer,
            headerStyles: _.bannerHeader,
            children: (0, r.jsx)(l.zxk, {
                onClick: () => {
                    u();
                },
                size: l.zxk.Sizes.SMALL,
                children: m
            })
        })
    });
}
function x(e) {
    let { guild: t } = e,
        n = (0, i.e7)(
            [u.default, d.ZP],
            () => {
                if (null == t) return new Set();
                let e = u.default.getId();
                return (0, p.no)(d.ZP.getMember(t.id, e));
            },
            [t]
        );
    return n.has(m.q.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) || n.has(m.q.AUTOMOD_QUARANTINED_BIO) ? (0, r.jsx)(C, { guild: t }) : n.has(m.q.AUTOMOD_QUARANTINED_SERVER_TAG) ? (0, r.jsx)(y, { guild: t }) : (0, r.jsx)(C, { guild: t });
}
