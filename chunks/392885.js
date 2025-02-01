n.d(t, { Z: () => x });
var i,
    r,
    l,
    s = n(442837),
    a = n(570140),
    o = n(999382),
    c = n(740903),
    d = n(981631);
let u = c.u.OVERVIEW,
    m = null;
function h(e) {
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
class g extends (l = s.ZP.Store) {
    getCurrentPage() {
        return u;
    }
}
(r = 'GuildSettingsSafetyStore'),
    (i = 'displayName') in g
        ? Object.defineProperty(g, i, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (g[i] = r);
let x = new g(a.Z, {
    GUILD_SETTINGS_INIT: function () {
        if (o.Z.getGuildId() === m) return !1;
        m = o.Z.getGuildId();
    },
    GUILD_SETTINGS_SET_SECTION: h,
    GUILD_SETTINGS_SAFETY_SET_SUBSECTION: h,
    GUILD_SETTINGS_SAFETY_PAGE: function (e) {
        let { page: t } = e;
        u = t;
    }
});
