n.d(t, { Z: () => f });
var l = n(54381);
n(473749);
var i = n(442837),
    r = n(481060),
    a = n(592125),
    u = n(430824),
    o = n(496675),
    s = n(594174),
    d = n(471253),
    c = n(88751),
    g = n(981631),
    m = n(388032);
function f(e, t, n) {
    var f;
    let Z = a.Z.getChannel(n),
        E = (0, i.e7)([u.Z], () => u.Z.getGuild(t), [t]),
        P = (0, i.e7)([c.ZP], () => c.ZP.getPermissionsForUser(e.id, n), [n, e.id]),
        h = (null == (f = s.default.getCurrentUser()) ? void 0 : f.id) === e.id,
        p = (0, i.e7)([o.Z], () => null != n && o.Z.canWithPartialContext(g.Plq.MUTE_MEMBERS, { channelId: n }), [n]);
    return null != Z && null != E && (p || h) && P.speaker
        ? (0, l.jsx)(r.sNh, {
              id: "audience",
              label: h ? m.intl.string(m.t["6C6PJx"]) : m.intl.string(m.t.VK3vQy),
              action: () => {
                  h ? (0, d.yi)(Z) : (0, d.hz)(e, Z);
              },
          })
        : null;
}
