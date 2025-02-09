t.d(n, { Z: () => g });
var i = t(200651);
t(192379);
var l = t(442837),
    r = t(481060),
    a = t(592125),
    u = t(430824),
    d = t(496675),
    o = t(594174),
    s = t(471253),
    c = t(88751),
    E = t(981631),
    _ = t(388032);
function g(e, n, t) {
    var g;
    let f = a.Z.getChannel(t),
        v = (0, l.e7)([u.Z], () => u.Z.getGuild(n), [n]),
        Z = (0, l.e7)([c.ZP], () => c.ZP.getPermissionsForUser(e.id, t), [t, e.id]),
        h = (null === (g = o.default.getCurrentUser()) || void 0 === g ? void 0 : g.id) === e.id,
        A = (0, l.e7)([d.Z], () => null != t && d.Z.canWithPartialContext(E.Plq.MUTE_MEMBERS, { channelId: t }), [t]);
    return null != f && null != v && (A || h) && Z.speaker
        ? (0, i.jsx)(r.sNh, {
              id: 'audience',
              label: h ? _.intl.string(_.t['6C6PJy']) : _.intl.string(_.t.VK3vQ0),
              action: () => {
                  h ? (0, s.yi)(f) : (0, s.hz)(e, f);
              }
          })
        : null;
}
