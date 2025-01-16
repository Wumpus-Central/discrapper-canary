l.d(n, {
    Z: function () {
        return h;
    }
});
var i = l(200651);
l(192379);
var t = l(442837),
    r = l(481060),
    u = l(592125),
    a = l(430824),
    d = l(496675),
    s = l(594174),
    o = l(471253),
    c = l(88751),
    Z = l(981631),
    M = l(388032);
function h(e, n, l) {
    var h;
    let p = u.Z.getChannel(l),
        C = (0, t.e7)([a.Z], () => a.Z.getGuild(n), [n]),
        g = (0, t.e7)([c.ZP], () => c.ZP.getPermissionsForUser(e.id, l), [l, e.id]),
        x = (null === (h = s.default.getCurrentUser()) || void 0 === h ? void 0 : h.id) === e.id,
        E = (0, t.e7)([d.Z], () => null != l && d.Z.canWithPartialContext(Z.Plq.MUTE_MEMBERS, { channelId: l }), [l]);
    return null != p && null != C && (E || x) && g.speaker
        ? (0, i.jsx)(r.MenuItem, {
              id: 'audience',
              label: x ? M.intl.string(M.t['6C6PJy']) : M.intl.string(M.t.VK3vQ0),
              action: () => {
                  x ? (0, o.yi)(p) : (0, o.hz)(e, p);
              }
          })
        : null;
}
