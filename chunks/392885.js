n.d(t, { Z: () => f });
var r,
    i,
    l,
    s = n(442837),
    a = n(570140),
    o = n(999382),
    c = n(740903),
    u = n(981631);
let d = c.u.OVERVIEW,
    m = null;
function g(e) {
    let { subsection: t } = e;
    switch (t) {
        case u.KsC.SAFETY_AUTOMOD:
            d = c.u.AUTOMOD;
            break;
        case u.KsC.SAFETY_DM_AND_SPAM_PROTECTION:
            d = c.u.DM_AND_SPAM_PROTECTION;
            break;
        case u.KsC.SAFETY_CAPTCHA_AND_RAID_PROTECTION:
            d = c.u.CAPTCHA_AND_RAID_PROTECTION;
            break;
        case u.KsC.SAFETY_PERMISSIONS:
            d = c.u.PERMISSIONS;
            break;
        case u.KsC.SAFETY_OVERVIEW:
        default:
            d = c.u.OVERVIEW;
    }
}
class p extends (l = s.ZP.Store) {
    getCurrentPage() {
        return d;
    }
}
(i = 'GuildSettingsSafetyStore'),
    (r = 'displayName') in p
        ? Object.defineProperty(p, r, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (p[r] = i);
let f = new p(a.Z, {
    GUILD_SETTINGS_INIT: function () {
        if (o.Z.getGuildId() === m) return !1;
        m = o.Z.getGuildId();
    },
    GUILD_SETTINGS_SET_SECTION: g,
    GUILD_SETTINGS_SAFETY_SET_SUBSECTION: g,
    GUILD_SETTINGS_SAFETY_PAGE: function (e) {
        let { page: t } = e;
        d = t;
    }
});
