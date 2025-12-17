n.d(t, { h: () => x }), n(388685);
var i = n(54381);
n(473749);
var r = n(442837),
    l = n(481060),
    a = n(100527),
    o = n(906732),
    s = n(545594),
    c = n(300284),
    u = n(314897),
    d = n(271383),
    p = n(715903),
    f = n(295474),
    h = n(981631),
    m = n(372897),
    g = n(526761),
    b = n(388032),
    C = n(854536);
function y(e) {
    var t;
    let { guild: n } = e,
        r = (0, c.Z)({ scrollPosition: g.Y_.GUILD_TAG });
    return (0, i.jsx)("div", {
        children: (0, i.jsx)(s.i, {
            bannerIcon: (0, i.jsx)(l.ics, {
                size: "lg",
                color: "currentColor",
                className: C.bannerIcon,
            }),
            bannerHeader: b.intl.format(b.t.GgMwjk, { guildName: null != (t = null == n ? void 0 : n.name) ? t : "" }),
            bannerSubtext: b.intl.string(b.t.ONjwD5),
            textStyles: C.bannerContainer,
            headerStyles: C.bannerHeader,
            children: (0, i.jsx)(l.Button, {
                variant: "primary",
                size: "sm",
                text: b.intl.string(b.t.Viksoo),
                onClick: () => r(),
            }),
        }),
    });
}
function v(e) {
    var t, n;
    let { guild: r } = e,
        { analyticsLocations: c } = (0, o.ZP)(a.Z.AUTOMOD_PROFILE_QUARANTINE_ALERT),
        [u, d] = (0, f.ww)({
            guildId: null != (t = null == r ? void 0 : r.id) ? t : h.lds,
            analyticsLocations: c,
        }),
        p = d ? b.intl.string(b.t["9ph2v7"]) : b.intl.string(b.t.ldh9Cg),
        m = d ? b.intl.string(b.t["/PGQf0"]) : b.intl.string(b.t.WikgZ1);
    return (0, i.jsx)("div", {
        children: (0, i.jsx)(s.i, {
            bannerIcon: (0, i.jsx)(l.ics, {
                size: "lg",
                color: "currentColor",
                className: C.bannerIcon,
            }),
            bannerHeader: b.intl.format(b.t.kcYdTq, { guildName: null != (n = null == r ? void 0 : r.name) ? n : "" }),
            bannerSubtext: p,
            textStyles: C.bannerContainer,
            headerStyles: C.bannerHeader,
            children: (0, i.jsx)(l.Button, {
                variant: "primary",
                size: "sm",
                text: m,
                onClick: () => {
                    u();
                },
            }),
        }),
    });
}
function x(e) {
    let { guild: t } = e,
        n = (0, r.e7)([u.default, d.ZP], () => {
            if (null == t) return new Set();
            let e = u.default.getId();
            return (0, p.no)(d.ZP.getMember(t.id, e));
        }, [t]);
    return n.has(m.q.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) || n.has(m.q.AUTOMOD_QUARANTINED_BIO)
        ? (0, i.jsx)(v, { guild: t })
        : n.has(m.q.AUTOMOD_QUARANTINED_SERVER_TAG)
          ? (0, i.jsx)(y, { guild: t })
          : (0, i.jsx)(v, { guild: t });
}
