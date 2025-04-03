n.d(t, { Z: () => P });
var l = n(200651);
n(192379);
var i = n(442837),
    r = n(481060),
    a = n(592125),
    o = n(430824),
    u = n(496675),
    s = n(594174),
    c = n(471253),
    d = n(88751),
    g = n(981631),
    f = n(388032);
function P(e, t, n) {
    var P;
    let E = a.Z.getChannel(n),
        Z = (0, i.e7)([o.Z], () => o.Z.getGuild(t), [t]),
        b = (0, i.e7)([d.ZP], () => d.ZP.getPermissionsForUser(e.id, n), [n, e.id]),
        m = (null == (P = s.default.getCurrentUser()) ? void 0 : P.id) === e.id,
        O = (0, i.e7)([u.Z], () => null != n && u.Z.canWithPartialContext(g.Plq.MUTE_MEMBERS, { channelId: n }), [n]);
    return null != E && null != Z && (O || m) && b.speaker
        ? (0, l.jsx)(r.sNh, {
              id: 'audience',
              label: m ? f.NW.string(f.t['6C6PJy']) : f.NW.string(f.t.VK3vQ0),
              action: () => {
                  m ? (0, c.yi)(E) : (0, c.hz)(e, E);
              }
          })
        : null;
}
