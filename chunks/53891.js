n.d(t, { ZP: () => j });
var i = n(200651),
    r = n(192379),
    s = n(442837),
    l = n(704215),
    a = n(481060),
    o = n(570140),
    c = n(710845),
    d = n(645041),
    u = n(314852),
    m = n(65361),
    g = n(430824),
    p = n(562511),
    h = n(299929),
    f = n(921944),
    b = n(388032);
let _ = new c.Z('GuildTagCoachmark');
function x(e) {
    let t = (0, s.e7)([g.Z], () => {
        var t;
        return null == (t = g.Z.getGuild(e.guildId)) ? void 0 : t.name;
    });
    function n(t) {
        var n, i;
        (null == (n = e.guildProfile) ? void 0 : n.tag) != null &&
            o.Z.dispatch({
                type: 'GUILD_TAG_CHANGED_COACHMARK_SEEN',
                guildId: e.guildId,
                lastSeenInfo: { tag: e.guildProfile.tag }
            }),
            null == (i = e.onDismiss) || i.call(e, t);
    }
    return (0, i.jsx)(a.yRy, {
        position: 'top',
        spacing: 16,
        shouldShow: !0,
        onRequestClose: () => n(f.L.USER_DISMISS),
        renderPopout: () =>
            (0, i.jsx)(h.Z, {
                guildId: e.guildId,
                guildProfile: e.guildProfile,
                title: b.intl.formatToPlainString(b.t['m/Tc3t'], { guildName: t }),
                description: b.intl.string(b.t.DrAXIi),
                onClose: () => n(f.L.TAKE_ACTION)
            }),
        children: e.children
    });
}
function E(e) {
    let t = (0, s.e7)([g.Z], () => {
        var t;
        return null == (t = g.Z.getGuild(e.guildId)) ? void 0 : t.name;
    });
    function n(t) {
        var n;
        (0, d.Qd)(l.C.ADOPT_CLAN_IDENTITY_NOTICE, e.guildId, !0, f.L.DISMISS), null == (n = e.onDismiss) || n.call(e, t);
    }
    return (0, i.jsx)(a.yRy, {
        position: 'top',
        spacing: 16,
        shouldShow: !0,
        onRequestClose: () => n(f.L.USER_DISMISS),
        renderPopout: () =>
            (0, i.jsx)(h.Z, {
                guildId: e.guildId,
                guildProfile: e.guildProfile,
                title: b.intl.formatToPlainString(b.t.VFqnyc, { guildName: t }),
                description: b.intl.string(b.t.DrAXIi),
                onClose: () => n(f.L.TAKE_ACTION)
            }),
        children: e.children
    });
}
function j(e) {
    let t = (0, p.S3)(e.guildId),
        { fetchGuildProfile: n, fetchStatus: s, guildProfile: l } = (0, m.u)(e.guildId);
    return (r.useEffect(() => {
        null !== e.guildId && s === u.a.NOT_FETCHED && n();
    }, [e.guildId, n, s]),
    null === e.guildId || null === t)
        ? (_.error('GuildTagCoachmark rendered without guildId or coachmark type.'),
          (0, i.jsx)(a.yRy, {
              position: 'top',
              renderPopout: () => (0, i.jsx)('div', {}),
              children: e.children
          }))
        : 'changed' === t
          ? (0, i.jsx)(x, {
                guildId: e.guildId,
                guildProfile: l,
                onDismiss: e.onDismiss,
                children: e.children
            })
          : (0, i.jsx)(E, {
                guildId: e.guildId,
                guildProfile: l,
                onDismiss: e.onDismiss,
                children: e.children
            });
}
