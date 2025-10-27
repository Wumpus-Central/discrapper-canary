n.d(t, { Z: () => h });
var r = n(951288);
n(647438);
var i = n(843611),
    l = n(442837),
    o = n(481060),
    a = n(893607),
    s = n(701190),
    c = n(411198),
    u = n(836040),
    d = n(603592),
    p = n(981631),
    f = n(388032);
function h(e) {
    var t;
    let { isOnHubVerificationRoute: n } = e,
        h = (0, i.LX)(null != (t = window.location.pathname) ? t : "", {
            path: p.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(a.Hw.guildId(), ":inviteCode"),
        }),
        g = (0, l.e7)([s.Z], () => {
            if (null == h) return null;
            let { inviteCode: e } = h.params;
            return null != e ? s.Z.getInvite(e) : null;
        }),
        m = (null == g ? void 0 : g.guild) != null ? (0, c.Qs)(null == g ? void 0 : g.guild) : null;
    return n
        ? null != m && null != g
            ? (0, r.jsx)(u.Z, {
                  guild: m,
                  invite: g,
              })
            : (0, r.jsx)(d.Z, {
                  tooltip: f.intl.string(f.t.rn9HIc),
                  id: "guild-hub-button",
                  icon: o.aVH,
              })
        : null;
}
