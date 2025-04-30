n.d(t, { Z: () => f });
var r = n(200651);
n(192379);
var i = n(512969),
    l = n(442837),
    o = n(481060),
    s = n(893607),
    a = n(601964),
    c = n(701190),
    u = n(836040),
    d = n(603592),
    h = n(981631),
    p = n(388032);
function f(e) {
    var t;
    let { isOnHubVerificationRoute: n } = e,
        f = (0, i.LX)(null != (t = window.location.pathname) ? t : '', { path: h.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(s.Hw.guildId(), ':inviteCode') }),
        g = (0, l.e7)([c.Z], () => {
            if (null == f) return null;
            let { inviteCode: e } = f.params;
            return null != e ? c.Z.getInvite(e) : null;
        }),
        m = (null == g ? void 0 : g.guild) != null ? new a.ZP(null == g ? void 0 : g.guild) : null;
    return n
        ? null != m && null != g
            ? (0, r.jsx)(u.Z, {
                  guild: m,
                  invite: g
              })
            : (0, r.jsx)(d.Z, {
                  tooltip: p.intl.string(p.t.rn9HIS),
                  id: 'guild-hub-button',
                  icon: o.aVH
              })
        : null;
}
