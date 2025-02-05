t.d(n, { Z: () => g });
var i = t(200651);
t(192379);
var l = t(442837),
    a = t(481060),
    r = t(592125),
    d = t(430824),
    u = t(496675),
    o = t(594174),
    s = t(471253),
    c = t(88751),
    _ = t(981631),
    E = t(388032);
function g(e, n, t) {
    var g;
    let f = r.Z.getChannel(t),
        h = (0, l.e7)([d.Z], () => d.Z.getGuild(n), [n]),
        v = (0, l.e7)([c.ZP], () => c.ZP.getPermissionsForUser(e.id, t), [t, e.id]),
        Z = (null === (g = o.default.getCurrentUser()) || void 0 === g ? void 0 : g.id) === e.id,
        A = (0, l.e7)([u.Z], () => null != t && u.Z.canWithPartialContext(_.Plq.MUTE_MEMBERS, { channelId: t }), [t]);
    return null != f && null != h && (A || Z) && v.speaker
        ? (0, i.jsx)(a.sNh, {
              id: 'audience',
              label: Z ? E.intl.string(E.t['6C6PJy']) : E.intl.string(E.t.VK3vQ0),
              action: () => {
                  Z ? (0, s.yi)(f) : (0, s.hz)(e, f);
              }
          })
        : null;
}
