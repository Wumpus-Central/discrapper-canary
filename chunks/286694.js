n.d(t, { Z: () => f });
var l = n(951288);
n(647438);
var i = n(442837),
    r = n(481060),
    a = n(592125),
    o = n(430824),
    u = n(496675),
    s = n(594174),
    c = n(471253),
    d = n(88751),
    g = n(981631),
    m = n(388032);
function f(e, t, n) {
    var f;
    let Z = a.Z.getChannel(n),
        E = (0, i.e7)([o.Z], () => o.Z.getGuild(t), [t]),
        P = (0, i.e7)([d.ZP], () => d.ZP.getPermissionsForUser(e.id, n), [n, e.id]),
        b = (null == (f = s.default.getCurrentUser()) ? void 0 : f.id) === e.id,
        v = (0, i.e7)([u.Z], () => null != n && u.Z.canWithPartialContext(g.Plq.MUTE_MEMBERS, { channelId: n }), [n]);
    return null != Z && null != E && (v || b) && P.speaker
        ? (0, l.jsx)(r.sNh, {
              id: "audience",
              label: b ? m.intl.string(m.t["6C6PJy"]) : m.intl.string(m.t.VK3vQ0),
              action: () => {
                  b ? (0, c.yi)(Z) : (0, c.hz)(e, Z);
              },
          })
        : null;
}
