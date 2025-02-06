n.d(t, { Z: () => g });
var i = n(200651);
n(192379);
var l = n(512969),
    r = n(442837),
    a = n(481060),
    o = n(893607),
    s = n(601964),
    c = n(701190),
    d = n(836040),
    u = n(603592),
    h = n(981631),
    p = n(388032);
function g(e) {
    var t;
    let { isOnHubVerificationRoute: n } = e,
        g = (0, l.LX)(null !== (t = window.location.pathname) && void 0 !== t ? t : '', { path: h.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(o.Hw.guildId(), ':inviteCode') }),
        m = (0, r.e7)([c.Z], () => {
            if (null == g) return null;
            let { inviteCode: e } = g.params;
            return null != e ? c.Z.getInvite(e) : null;
        }),
        f = (null == m ? void 0 : m.guild) != null ? new s.ZP(null == m ? void 0 : m.guild) : null;
    return n
        ? null != f && null != m
            ? (0, i.jsx)(d.Z, {
                  guild: f,
                  invite: m
              })
            : (0, i.jsx)(u.Z, {
                  tooltip: p.intl.string(p.t.rn9HIS),
                  id: 'guild-hub-button',
                  icon: a.aVH
              })
        : null;
}
