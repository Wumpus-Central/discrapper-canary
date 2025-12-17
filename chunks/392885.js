n.d(t, { Z: () => m });
var r,
    i,
    l = n(442837),
    a = n(570140),
    s = n(999382),
    o = n(740903),
    c = n(981631);
let d = o.u.OVERVIEW,
    u = null;
function g(e) {
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
class f extends (i = l.ZP.Store) {
    initialize() {
        this.waitFor(s.Z);
    }
    getCurrentPage() {
        return d;
    }
}
(r = "displayName") in f
    ? Object.defineProperty(f, r, {
          value: "GuildSettingsSafetyStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (f[r] = "GuildSettingsSafetyStore");
let m = new f(a.Z, {
    GUILD_SETTINGS_INIT: function () {
        if (s.Z.getGuildId() === u) return !1;
        u = s.Z.getGuildId();
    },
    GUILD_SETTINGS_SET_SECTION: g,
    GUILD_SETTINGS_SAFETY_SET_SUBSECTION: g,
    GUILD_SETTINGS_SAFETY_PAGE: function (e) {
        let { page: t } = e;
        d = t;
    },
});
