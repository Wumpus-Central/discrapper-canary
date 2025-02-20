n.d(t, { Z: () => f });
var l = n(200651);
n(192379);
var i = n(442837),
    r = n(481060),
    a = n(592125),
    o = n(430824),
    u = n(496675),
    s = n(594174),
    d = n(471253),
    c = n(88751),
    g = n(981631),
    v = n(388032);
function f(e, t, n) {
    var f;
    let P = a.Z.getChannel(n),
        E = (0, i.e7)([o.Z], () => o.Z.getGuild(t), [t]),
        Z = (0, i.e7)([c.ZP], () => c.ZP.getPermissionsForUser(e.id, n), [n, e.id]),
        b = (null === (f = s.default.getCurrentUser()) || void 0 === f ? void 0 : f.id) === e.id,
        m = (0, i.e7)([u.Z], () => null != n && u.Z.canWithPartialContext(g.Plq.MUTE_MEMBERS, { channelId: n }), [n]);
    return null != P && null != E && (m || b) && Z.speaker
        ? (0, l.jsx)(r.sNh, {
              id: 'audience',
              label: b ? v.NW.string(v.t['6C6PJy']) : v.NW.string(v.t.VK3vQ0),
              action: () => {
                  b ? (0, d.yi)(P) : (0, d.hz)(e, P);
              }
          })
        : null;
}
