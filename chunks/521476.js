(n.d(t, { h: () => O }), n(388685));
var r = n(255367);
n(73800);
var i = n(442837),
    a = n(481060),
    o = n(100527),
    s = n(906732),
    l = n(545594),
    c = n(300284),
    u = n(314897),
    d = n(271383),
    f = n(715903),
    _ = n(295474),
    p = n(981631),
    h = n(372897),
    m = n(526761),
    g = n(388032),
    E = n(269200);
function b(e) {
    var t;
    let { guild: n } = e,
        i = (0, c.Z)({ scrollPosition: m.Y_.GUILD_TAG });
    return (0, r.jsx)('div', {
        children: (0, r.jsx)(l.i, {
            bannerIcon: (0, r.jsx)(a.ics, {
                size: 'lg',
                color: 'currentColor',
                className: E.bannerIcon
            }),
            bannerHeader: g.intl.format(g.t.GgMwjo, { guildName: null != (t = null == n ? void 0 : n.name) ? t : '' }),
            bannerSubtext: g.intl.string(g.t.ONjwDw),
            textStyles: E.bannerContainer,
            headerStyles: E.bannerHeader,
            children: (0, r.jsx)(a.zxk, {
                variant: 'primary',
                size: 'sm',
                text: g.intl.string(g.t.Viksoq),
                onClick: () => i()
            })
        })
    });
}
function y(e) {
    var t, n;
    let { guild: i } = e,
        { analyticsLocations: c } = (0, s.ZP)(o.Z.AUTOMOD_PROFILE_QUARANTINE_ALERT),
        [u, d] = (0, _.ww)({
            guildId: null != (t = null == i ? void 0 : i.id) ? t : p.lds,
            analyticsLocations: c,
            openWithoutBackstack: !0
        }),
        f = d ? g.intl.string(g.t['9ph2v7']) : g.intl.string(g.t.ldh9Cg),
        h = d ? g.intl.string(g.t['/PGQf3']) : g.intl.string(g.t.WikgZ2),
        m = () => {
            u();
        };
    return (0, r.jsx)('div', {
        children: (0, r.jsx)(l.i, {
            bannerIcon: (0, r.jsx)(a.ics, {
                size: 'lg',
                color: 'currentColor',
                className: E.bannerIcon
            }),
            bannerHeader: g.intl.format(g.t.kcYdTk, { guildName: null != (n = null == i ? void 0 : i.name) ? n : '' }),
            bannerSubtext: f,
            textStyles: E.bannerContainer,
            headerStyles: E.bannerHeader,
            children: (0, r.jsx)(a.zxk, {
                variant: 'primary',
                size: 'sm',
                text: h,
                onClick: m
            })
        })
    });
}
function O(e) {
    let { guild: t } = e,
        n = (0, i.e7)(
            [u.default, d.ZP],
            () => {
                if (null == t) return new Set();
                let e = u.default.getId();
                return (0, f.no)(d.ZP.getMember(t.id, e));
            },
            [t]
        );
    return n.has(h.q.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) || n.has(h.q.AUTOMOD_QUARANTINED_BIO) ? (0, r.jsx)(y, { guild: t }) : n.has(h.q.AUTOMOD_QUARANTINED_SERVER_TAG) ? (0, r.jsx)(b, { guild: t }) : (0, r.jsx)(y, { guild: t });
}
