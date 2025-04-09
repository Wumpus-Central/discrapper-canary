n.d(t, { Z: () => f });
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
function g(e) {
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
class p extends (s = a.ZP.Store) {
    getCurrentPage() {
        return u;
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
let f = new p(l.Z, {
    GUILD_SETTINGS_INIT: function () {
        if (o.Z.getGuildId() === m) return !1;
        m = o.Z.getGuildId();
    },
    GUILD_SETTINGS_SET_SECTION: g,
    GUILD_SETTINGS_SAFETY_SET_SUBSECTION: g,
    GUILD_SETTINGS_SAFETY_PAGE: function (e) {
        let { page: t } = e;
        u = t;
    }
});
