t.d(e, { Z: () => g });
var l = t(200651);
t(192379);
var i = t(442837),
    r = t(481060),
    a = t(592125),
    u = t(430824),
    d = t(496675),
    o = t(594174),
    s = t(471253),
    c = t(88751),
    E = t(981631),
    _ = t(388032);
function g(n, e, t) {
    var g;
    let f = a.Z.getChannel(t),
        v = (0, i.e7)([u.Z], () => u.Z.getGuild(e), [e]),
        h = (0, i.e7)([c.ZP], () => c.ZP.getPermissionsForUser(n.id, t), [t, n.id]),
        A = (null === (g = o.default.getCurrentUser()) || void 0 === g ? void 0 : g.id) === n.id,
        T = (0, i.e7)([d.Z], () => null != t && d.Z.canWithPartialContext(E.Plq.MUTE_MEMBERS, { channelId: t }), [t]);
    return null != f && null != v && (T || A) && h.speaker
        ? (0, l.jsx)(r.sNh, {
              id: 'audience',
              label: A ? _.intl.string(_.t['6C6PJy']) : _.intl.string(_.t.VK3vQ0),
              action: () => {
                  A ? (0, s.yi)(f) : (0, s.hz)(n, f);
              }
          })
        : null;
}
