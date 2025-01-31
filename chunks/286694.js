l.d(n, { Z: () => C });
var i = l(200651);
l(192379);
var t = l(442837),
    r = l(481060),
    a = l(592125),
    d = l(430824),
    s = l(496675),
    u = l(594174),
    o = l(471253),
    c = l(88751),
    Z = l(981631),
    h = l(388032);
function C(e, n, l) {
    var C;
    let g = a.Z.getChannel(l),
        N = (0, t.e7)([d.Z], () => d.Z.getGuild(n), [n]),
        x = (0, t.e7)([c.ZP], () => c.ZP.getPermissionsForUser(e.id, l), [l, e.id]),
        E = (null === (C = u.default.getCurrentUser()) || void 0 === C ? void 0 : C.id) === e.id,
        U = (0, t.e7)([s.Z], () => null != l && s.Z.canWithPartialContext(Z.Plq.MUTE_MEMBERS, { channelId: l }), [l]);
    return null != g && null != N && (U || E) && x.speaker
        ? (0, i.jsx)(r.sNh, {
              id: 'audience',
              label: E ? h.intl.string(h.t['6C6PJy']) : h.intl.string(h.t.VK3vQ0),
              action: () => {
                  E ? (0, o.yi)(g) : (0, o.hz)(e, g);
              }
          })
        : null;
}
