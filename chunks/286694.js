n.d(t, { Z: () => m });
var l = n(255367);
n(73800);
var i = n(442837),
    r = n(481060),
    a = n(592125),
    o = n(430824),
    u = n(496675),
    s = n(594174),
    d = n(471253),
    c = n(88751),
    g = n(981631),
    f = n(388032);
function m(e, t, n) {
    var m;
    let Z = a.Z.getChannel(n),
        P = (0, i.e7)([o.Z], () => o.Z.getGuild(t), [t]),
        E = (0, i.e7)([c.ZP], () => c.ZP.getPermissionsForUser(e.id, n), [n, e.id]),
        v = (null == (m = s.default.getCurrentUser()) ? void 0 : m.id) === e.id,
        b = (0, i.e7)([u.Z], () => null != n && u.Z.canWithPartialContext(g.Plq.MUTE_MEMBERS, { channelId: n }), [n]);
    return null != Z && null != P && (b || v) && E.speaker
        ? (0, l.jsx)(r.sNh, {
              id: 'audience',
              label: v ? f.intl.string(f.t['6C6PJy']) : f.intl.string(f.t.VK3vQ0),
              action: () => {
                  v ? (0, d.yi)(Z) : (0, d.hz)(e, Z);
              }
          })
        : null;
}
