n.d(t, { Z: () => h });
var r,
    i,
    s,
    a = n(442837),
    l = n(570140),
    o = n(999382),
    c = n(740903),
    d = n(981631);
let u = c.u.OVERVIEW,
    m = null;
function p(e) {
    let { subsection: t } = e;
    switch (t) {
        case d.KsC.SAFETY_AUTOMOD:
            u = c.u.AUTOMOD;
            break;
        case d.KsC.SAFETY_DM_AND_SPAM_PROTECTION:
            u = c.u.DM_AND_SPAM_PROTECTION;
            break;
        case d.KsC.SAFETY_CAPTCHA_AND_RAID_PROTECTION:
            u = c.u.CAPTCHA_AND_RAID_PROTECTION;
            break;
        case d.KsC.SAFETY_PERMISSIONS:
            u = c.u.PERMISSIONS;
            break;
        case d.KsC.SAFETY_OVERVIEW:
        default:
            u = c.u.OVERVIEW;
    }
}
class g extends (s = a.ZP.Store) {
    getCurrentPage() {
        return u;
    }
}
(i = 'GuildSettingsSafetyStore'),
    (r = 'displayName') in g
        ? Object.defineProperty(g, r, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (g[r] = i);
let h = new g(l.Z, {
    GUILD_SETTINGS_INIT: function () {
        if (o.Z.getGuildId() === m) return !1;
        m = o.Z.getGuildId();
    },
    GUILD_SETTINGS_SET_SECTION: p,
    GUILD_SETTINGS_SAFETY_SET_SUBSECTION: p,
    GUILD_SETTINGS_SAFETY_PAGE: function (e) {
        let { page: t } = e;
        u = t;
    }
});
