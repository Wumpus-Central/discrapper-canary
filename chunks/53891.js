n.d(t, { ZP: () => x });
var i = n(255367);
n(73800);
var r = n(442837),
    s = n(704215),
    l = n(481060),
    a = n(570140),
    o = n(710845),
    c = n(645041),
    d = n(430824),
    u = n(562511),
    m = n(731722),
    p = n(299929),
    g = n(921944),
    h = n(388032);
let f = new o.Z('GuildTagCoachmark');
function b(e) {
    function t(t) {
        var n;
        a.Z.dispatch({
            type: 'GUILD_TAG_CHANGED_COACHMARK_SEEN',
            guildId: e.guild.id,
            lastSeenInfo: { tag: e.guild.profile.tag }
        }),
            null == (n = e.onDismiss) || n.call(e, t);
    }
    return (0, i.jsx)(l.yRy, {
        position: 'top',
        spacing: 16,
        shouldShow: !0,
        onRequestClose: () => t(g.L.USER_DISMISS),
        renderPopout: () =>
            (0, i.jsx)(p.Z, {
                guildId: e.guild.id,
                guildProfile: e.guild.profile,
                title: h.intl.formatToPlainString(h.t['m/Tc3t'], { guildName: e.guild.name }),
                description: h.intl.string(h.t.DrAXIi),
                onClose: () => t(g.L.TAKE_ACTION)
            }),
        children: e.children
    });
}
function _(e) {
    function t(t) {
        var n;
        (0, c.Qd)(s.C.ADOPT_CLAN_IDENTITY_NOTICE, e.guild.id, !0, g.L.DISMISS), null == (n = e.onDismiss) || n.call(e, t);
    }
    return (0, i.jsx)(l.yRy, {
        position: 'top',
        spacing: 16,
        shouldShow: !0,
        onRequestClose: () => t(g.L.USER_DISMISS),
        renderPopout: () =>
            (0, i.jsx)(p.Z, {
                guildId: e.guild.id,
                guildProfile: e.guild.profile,
                title: h.intl.formatToPlainString(h.t.VFqnyc, { guildName: e.guild.name }),
                description: h.intl.string(h.t.DrAXIi),
                onClose: () => t(g.L.TAKE_ACTION)
            }),
        children: e.children
    });
}
function x(e) {
    let t = (0, r.e7)([d.Z], () => d.Z.getGuild(e.guildId)),
        n = (0, u.S3)(e.guildId);
    return null != t && (0, m.jq)(t) && null !== n
        ? 'changed' === n
            ? (0, i.jsx)(b, {
                  guild: t,
                  onDismiss: e.onDismiss,
                  children: e.children
              })
            : (0, i.jsx)(_, {
                  guild: t,
                  onDismiss: e.onDismiss,
                  children: e.children
              })
        : (f.error('GuildTagCoachmark rendered without guildId or coachmark type.'),
          (0, i.jsx)(l.yRy, {
              position: 'top',
              renderPopout: () => (0, i.jsx)('div', {}),
              children: e.children
          }));
}
