n.d(t, {
    Z: function () {
        return m;
    }
});
var i = n(200651);
n(192379);
var l = n(512969),
    r = n(442837),
    a = n(481060),
    o = n(893607),
    s = n(601964),
    c = n(701190),
    u = n(836040),
    d = n(603592),
    h = n(981631),
    p = n(388032);
function m(e) {
    var t;
    let { isOnHubVerificationRoute: n } = e,
        m = (0, l.LX)(null !== (t = window.location.pathname) && void 0 !== t ? t : '', { path: h.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(o.Hw.guildId(), ':inviteCode') }),
        f = (0, r.e7)([c.Z], () => {
            if (null == m) return null;
            let { inviteCode: e } = m.params;
            return null != e ? c.Z.getInvite(e) : null;
        }),
        g = (null == f ? void 0 : f.guild) != null ? new s.ZP(null == f ? void 0 : f.guild) : null;
    return n
        ? null != g && null != f
            ? (0, i.jsx)(u.Z, {
                  guild: g,
                  invite: f
              })
            : (0, i.jsx)(d.Z, {
                  tooltip: p.intl.string(p.t.rn9HIS),
                  id: 'guild-hub-button',
                  icon: a.HubIcon
              })
        : null;
}
