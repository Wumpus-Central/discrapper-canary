n.d(t, { Z: () => f });
var r = n(200651),
    i = n(442837),
    s = n(704215),
    a = n(481060),
    l = n(710845),
    o = n(645041),
    c = n(430824),
    d = n(562511),
    u = n(299929),
    m = n(921944),
    g = n(388032);
let p = new l.Z('GuildTagCoachmark');
function h(e) {
    let t = (0, i.e7)([c.Z], () => {
        var t;
        return null == (t = c.Z.getGuild(e.guildId)) ? void 0 : t.name;
    });
    function n(t) {
        var n;
        (0, o.Qd)(s.C.ADOPT_CLAN_IDENTITY_NOTICE, e.guildId, !0, m.L.DISMISS), null == (n = e.onDismiss) || n.call(e, t);
    }
    return (0, r.jsx)(a.yRy, {
        position: 'top',
        shouldShow: !0,
        onRequestClose: () => n(m.L.USER_DISMISS),
        renderPopout: () =>
            (0, r.jsx)(u.Z, {
                guildId: e.guildId,
                title: g.NW.formatToPlainString(g.t.VFqnyc, { guildName: t }),
                description: g.NW.string(g.t.DrAXIi),
                onClose: () => n(m.L.TAKE_ACTION)
            }),
        children: e.children
    });
}
function f(e) {
    let t = (0, d.S3)(e.guildId);
    return null === e.guildId || null === t
        ? (p.error('GuildTagCoachmark rendered without guildId or coachmark type.'),
          (0, r.jsx)(a.yRy, {
              position: 'top',
              renderPopout: () => (0, r.jsx)('div', {}),
              children: e.children
          }))
        : (0, r.jsx)(h, {
              guildId: e.guildId,
              onDismiss: e.onDismiss,
              children: e.children
          });
}
