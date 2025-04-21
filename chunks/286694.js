n.d(t, { Z: () => b });
var l = n(200651);
n(192379);
var i = n(442837),
    r = n(481060),
    a = n(592125),
    o = n(430824),
    s = n(496675),
    u = n(594174),
    c = n(471253),
    d = n(88751),
    g = n(981631),
    f = n(388032);
function b(e, t, n) {
    var b;
    let m = a.Z.getChannel(n),
        O = (0, i.e7)([o.Z], () => o.Z.getGuild(t), [t]),
        Z = (0, i.e7)([d.ZP], () => d.ZP.getPermissionsForUser(e.id, n), [n, e.id]),
        v = (null == (b = u.default.getCurrentUser()) ? void 0 : b.id) === e.id,
        E = (0, i.e7)([s.Z], () => null != n && s.Z.canWithPartialContext(g.Plq.MUTE_MEMBERS, { channelId: n }), [n]);
    return null != m && null != O && (E || v) && Z.speaker
        ? (0, l.jsx)(r.sNh, {
              id: 'audience',
              label: v ? f.intl.string(f.t['6C6PJy']) : f.intl.string(f.t.VK3vQ0),
              action: () => {
                  v ? (0, c.yi)(m) : (0, c.hz)(e, m);
              }
          })
        : null;
}
