n.d(t, { Z: () => p });
var r,
    i,
    l = n(442837),
    a = n(570140),
    s = n(999382),
    o = n(740903),
    c = n(981631);
let d = o.u.OVERVIEW,
    u = null;
function m(e) {
    let { subsection: t } = e;
    switch (t) {
        case c.KsC.SAFETY_AUTOMOD:
            d = o.u.AUTOMOD;
            break;
        case c.KsC.SAFETY_DM_AND_SPAM_PROTECTION:
            d = o.u.DM_AND_SPAM_PROTECTION;
            break;
        case c.KsC.SAFETY_CAPTCHA_AND_RAID_PROTECTION:
            d = o.u.CAPTCHA_AND_RAID_PROTECTION;
            break;
        case c.KsC.SAFETY_PERMISSIONS:
            d = o.u.PERMISSIONS;
            break;
        case c.KsC.SAFETY_OVERVIEW:
        default:
            d = o.u.OVERVIEW;
    }
}
class g extends (i = l.ZP.Store) {
    getCurrentPage() {
        return d;
    }
}
(r = "displayName") in g
    ? Object.defineProperty(g, r, {
          value: "GuildSettingsSafetyStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (g[r] = "GuildSettingsSafetyStore");
let p = new g(a.Z, {
    GUILD_SETTINGS_INIT: function () {
        if (s.Z.getGuildId() === u) return !1;
        u = s.Z.getGuildId();
    },
    GUILD_SETTINGS_SET_SECTION: m,
    GUILD_SETTINGS_SAFETY_SET_SUBSECTION: m,
    GUILD_SETTINGS_SAFETY_PAGE: function (e) {
        let { page: t } = e;
        d = t;
    },
});
