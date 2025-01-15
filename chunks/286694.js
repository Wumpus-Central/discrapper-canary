t.d(e, {
    Z: function () {
        return E;
    }
});
var i = t(200651);
t(192379);
var r = t(442837),
    l = t(481060),
    u = t(592125),
    a = t(430824),
    o = t(496675),
    d = t(594174),
    s = t(471253),
    c = t(88751),
    f = t(981631),
    _ = t(388032);
function E(n, e, t) {
    var E;
    let p = u.Z.getChannel(t),
        g = (0, r.e7)([a.Z], () => a.Z.getGuild(e), [e]),
        h = (0, r.e7)([c.ZP], () => c.ZP.getPermissionsForUser(n.id, t), [t, n.id]),
        A = (null === (E = d.default.getCurrentUser()) || void 0 === E ? void 0 : E.id) === n.id,
        m = (0, r.e7)([o.Z], () => null != t && o.Z.canWithPartialContext(f.Plq.MUTE_MEMBERS, { channelId: t }), [t]);
    return null != p && null != g && (m || A) && h.speaker
        ? (0, i.jsx)(l.MenuItem, {
              id: 'audience',
              label: A ? _.intl.string(_.t['6C6PJy']) : _.intl.string(_.t.VK3vQ0),
              action: () => {
                  A ? (0, s.yi)(p) : (0, s.hz)(n, p);
              }
          })
        : null;
}
