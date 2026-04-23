l.d(e, { A: () => c });
var i = l(311907),
    n = l(73153);
let r = null,
    o = null,
    s = !1;
class a extends i.Ay.Store {
    static displayName = "GuildSettingsOnboardingAllowedApplicationsStore";
    getAllowedApplicationIds(t) {
        return r === t ? o : null;
    }
    isFetching(t) {
        return r === t && s;
    }
    hasCachedData(t) {
        return r === t && null !== o;
    }
}
let c = new a(n.h, {
    GUILD_SETTINGS_ONBOARDING_ALLOWED_APPLICATIONS_FETCH_START: function (t) {
        let { guildId: e } = t;
        (r = e), (s = !0), (o = []);
    },
    GUILD_SETTINGS_ONBOARDING_ALLOWED_APPLICATIONS_FETCH_SUCCESS: function (t) {
        let { guildId: e, applicationIds: l } = t;
        r === e && ((o = l), (s = !1));
    },
    GUILD_SETTINGS_ONBOARDING_ALLOWED_APPLICATIONS_FETCH_FAILURE: function (t) {
        let { guildId: e } = t;
        r === e && ((o = []), (s = !1));
    },
    GUILD_SETTINGS_CLOSE: function () {
        (r = null), (o = null), (s = !1);
    },
});
