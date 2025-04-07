n.d(t, { ZP: () => E });
var r = n(200651),
    i = n(192379),
    s = n(442837),
    a = n(704215),
    l = n(481060),
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
let N = new c.Z('GuildTagCoachmark');
function x(e) {
    let t = (0, s.e7)([g.Z], () => {
        var t;
        return null == (t = g.Z.getGuild(e.guildId)) ? void 0 : t.name;
    });
    function n(t) {
        var n, r;
        (null == (n = e.guildProfile) ? void 0 : n.tag) != null &&
            o.Z.dispatch({
                type: 'GUILD_TAG_CHANGED_COACHMARK_SEEN',
                guildId: e.guildId,
                lastSeenInfo: { tag: e.guildProfile.tag }
            }),
            null == (r = e.onDismiss) || r.call(e, t);
    }
    return (0, r.jsx)(l.yRy, {
        position: 'top',
        shouldShow: !0,
        onRequestClose: () => n(f.L.USER_DISMISS),
        renderPopout: () =>
            (0, r.jsx)(h.Z, {
                guildId: e.guildId,
                guildProfile: e.guildProfile,
                title: b.NW.formatToPlainString(b.t['m/Tc3t'], { guildName: t }),
                description: b.NW.string(b.t.DrAXIi),
                onClose: () => n(f.L.TAKE_ACTION)
            }),
        children: e.children
    });
}
function _(e) {
    let t = (0, s.e7)([g.Z], () => {
        var t;
        return null == (t = g.Z.getGuild(e.guildId)) ? void 0 : t.name;
    });
    function n(t) {
        var n;
        (0, d.Qd)(a.C.ADOPT_CLAN_IDENTITY_NOTICE, e.guildId, !0, f.L.DISMISS), null == (n = e.onDismiss) || n.call(e, t);
    }
    return (0, r.jsx)(l.yRy, {
        position: 'top',
        shouldShow: !0,
        onRequestClose: () => n(f.L.USER_DISMISS),
        renderPopout: () =>
            (0, r.jsx)(h.Z, {
                guildId: e.guildId,
                guildProfile: e.guildProfile,
                title: b.NW.formatToPlainString(b.t.VFqnyc, { guildName: t }),
                description: b.NW.string(b.t.DrAXIi),
                onClose: () => n(f.L.TAKE_ACTION)
            }),
        children: e.children
    });
}
function E(e) {
    let t = (0, p.S3)(e.guildId),
        { fetchGuildProfile: n, fetchStatus: s, guildProfile: a } = (0, m.u)(e.guildId);
    return (i.useEffect(() => {
        null !== e.guildId && s === u.a.NOT_FETCHED && n();
    }, [e.guildId, n, s]),
    null === e.guildId || null === t)
        ? (N.error('GuildTagCoachmark rendered without guildId or coachmark type.'),
          (0, r.jsx)(l.yRy, {
              position: 'top',
              renderPopout: () => (0, r.jsx)('div', {}),
              children: e.children
          }))
        : 'changed' === t
          ? (0, r.jsx)(x, {
                guildId: e.guildId,
                guildProfile: a,
                onDismiss: e.onDismiss,
                children: e.children
            })
          : (0, r.jsx)(_, {
                guildId: e.guildId,
                guildProfile: a,
                onDismiss: e.onDismiss,
                children: e.children
            });
}
