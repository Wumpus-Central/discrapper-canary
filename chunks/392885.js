var i,
    r,
    l,
    s,
    a = n(442837),
    o = n(570140),
    c = n(999382),
    d = n(740903),
    u = n(981631);
let m = d.u.OVERVIEW,
    h = null;
function g(e) {
    let { subsection: t } = e;
    switch (t) {
        case u.KsC.SAFETY_AUTOMOD:
            m = d.u.AUTOMOD;
            break;
        case u.KsC.SAFETY_DM_AND_SPAM_PROTECTION:
            m = d.u.DM_AND_SPAM_PROTECTION;
            break;
        case u.KsC.SAFETY_CAPTCHA_AND_RAID_PROTECTION:
            m = d.u.CAPTCHA_AND_RAID_PROTECTION;
            break;
        case u.KsC.SAFETY_PERMISSIONS:
            m = d.u.PERMISSIONS;
            break;
        case u.KsC.SAFETY_OVERVIEW:
        default:
            m = d.u.OVERVIEW;
    }
}
class x extends (s = a.ZP.Store) {
    getCurrentPage() {
        return m;
    }
}
(l = 'GuildSettingsSafetyStore'),
    (r = 'displayName') in (i = x)
        ? Object.defineProperty(i, r, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[r] = l),
    (t.Z = new x(o.Z, {
        GUILD_SETTINGS_INIT: function () {
            if (c.Z.getGuildId() === h) return !1;
            h = c.Z.getGuildId();
        },
        GUILD_SETTINGS_SET_SECTION: g,
        GUILD_SETTINGS_SAFETY_SET_SUBSECTION: g,
        GUILD_SETTINGS_SAFETY_PAGE: function (e) {
            let { page: t } = e;
            m = t;
        }
    }));
