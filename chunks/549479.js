l.d(t, { A: () => u });
var n,
    i,
    r = l(311907),
    o = l(73153);
let a = null,
    s = null,
    c = !1;
class d extends (i = r.Ay.Store) {
    getAllowedApplicationIds(e) {
        return a === e ? s : null;
    }
    isFetching(e) {
        return a === e && c;
    }
    hasCachedData(e) {
        return a === e && null !== s;
    }
}
(n = "displayName") in d
    ? Object.defineProperty(d, n, {
          value: "GuildSettingsOnboardingAllowedApplicationsStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (d[n] = "GuildSettingsOnboardingAllowedApplicationsStore");
let u = new d(o.h, {
    GUILD_SETTINGS_ONBOARDING_ALLOWED_APPLICATIONS_FETCH_START: function (e) {
        let { guildId: t } = e;
        (a = t), (c = !0), (s = []);
    },
    GUILD_SETTINGS_ONBOARDING_ALLOWED_APPLICATIONS_FETCH_SUCCESS: function (e) {
        let { guildId: t, applicationIds: l } = e;
        a === t && ((s = l), (c = !1));
    },
    GUILD_SETTINGS_ONBOARDING_ALLOWED_APPLICATIONS_FETCH_FAILURE: function (e) {
        let { guildId: t } = e;
        a === t && ((s = []), (c = !1));
    },
    GUILD_SETTINGS_CLOSE: function () {
        (a = null), (s = null), (c = !1);
    },
});
