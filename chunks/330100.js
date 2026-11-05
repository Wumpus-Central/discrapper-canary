var i = n(435558),
    r = n(855986),
    l = n(73153),
    E = n(476931),
    a = n(679787),
    d = n(71393);
let s = {
    guildId: null,
    draftThemeSettings: null,
    draftEnabled: !1,
    originalThemeSettings: null,
    originalEnabled: !1,
    initialized: !1,
    isSaving: !1,
    saveError: null,
};
function u(e, t) {
    if ((0, i.isEqual)(e, s.originalThemeSettings) && t === s.originalEnabled) return !1;
    let n = (0, i.isEqual)(s.draftThemeSettings, s.originalThemeSettings) && s.draftEnabled === s.originalEnabled;
    return (
        (s = {
            ...s,
            originalThemeSettings: (0, a.z_)(e),
            originalEnabled: t,
            draftThemeSettings: n ? (0, a.z_)(e) : s.draftThemeSettings,
            draftEnabled: n ? t : s.draftEnabled,
        }),
        !0
    );
}
function S() {
    if (!s.initialized || null == s.guildId) return !1;
    let e = d.A.getGuild(s.guildId);
    return null != e && u(e.guildTheme?.themeSettings ?? null, e.guildTheme?.enabled ?? !1);
}
class o extends r.Ay.Store {
    static displayName = "GuildSettingsGuildThemeStore";
    initialize() {
        this.waitFor(d.A);
    }
    get guildId() {
        return s.guildId;
    }
    get draftThemeSettings() {
        return s.draftThemeSettings;
    }
    get draftEnabled() {
        return s.draftEnabled;
    }
    get originalThemeSettings() {
        return s.originalThemeSettings;
    }
    get originalEnabled() {
        return s.originalEnabled;
    }
    get isInitialized() {
        return s.initialized;
    }
    get isSaving() {
        return s.isSaving;
    }
    get saveError() {
        return s.saveError;
    }
    hasChanges() {
        return (
            !!s.initialized &&
            (s.draftEnabled !== s.originalEnabled || !(0, i.isEqual)(s.draftThemeSettings, s.originalThemeSettings))
        );
    }
    showNotice() {
        return this.hasChanges();
    }
}
let _ = new o(l.h, {
    GUILD_SETTINGS_GUILD_THEME_INIT: function (e) {
        let { guild: t } = e,
            n = (0, a.z_)(t.guildTheme?.themeSettings ?? null),
            i = t.guildTheme?.enabled ?? !1;
        return (
            (s = {
                guildId: t.id,
                draftThemeSettings: (0, a.z_)(n),
                draftEnabled: i,
                originalThemeSettings: n,
                originalEnabled: i,
                initialized: !0,
                isSaving: !1,
                saveError: null,
            }),
            !0
        );
    },
    GUILD_SETTINGS_GUILD_THEME_SET_ENABLED: function (e) {
        let { enabled: t } = e,
            n = t && null == s.draftThemeSettings ? (0, E.Qy)() : s.draftThemeSettings;
        return (
            !(s.draftEnabled === t && (0, i.isEqual)(s.draftThemeSettings, n)) &&
            ((s = { ...s, draftEnabled: t, draftThemeSettings: n, saveError: null }), !0)
        );
    },
    GUILD_SETTINGS_GUILD_THEME_SELECT_PRESET: function (e) {
        let { presetId: t } = e,
            n = { presetId: t, customUserThemeSettings: void 0 };
        return (
            !(s.draftEnabled && (0, i.isEqual)(s.draftThemeSettings, n)) &&
            ((s = { ...s, draftThemeSettings: n, draftEnabled: !0, saveError: null }), !0)
        );
    },
    GUILD_SETTINGS_GUILD_THEME_UPDATE_CUSTOM: function (e) {
        let { colors: t, gradientAngle: n, baseMix: r } = e,
            l = {
                presetId: void 0,
                customUserThemeSettings: { colors: [...t], gradientColorStops: [], gradientAngle: n, baseMix: r },
            };
        return (
            !(s.draftEnabled && (0, i.isEqual)(s.draftThemeSettings, l)) &&
            ((s = { ...s, draftThemeSettings: l, draftEnabled: !0, saveError: null }), !0)
        );
    },
    GUILD_SETTINGS_GUILD_THEME_RESET_DRAFT: function () {
        return (
            (s = {
                ...s,
                draftThemeSettings: (0, a.z_)(s.originalThemeSettings),
                draftEnabled: s.originalEnabled,
                saveError: null,
            }),
            !0
        );
    },
    GUILD_SETTINGS_GUILD_THEME_SAVE_START: function () {
        return ((s = { ...s, isSaving: !0, saveError: null }), !0);
    },
    GUILD_SETTINGS_GUILD_THEME_SAVE_SUCCESS: function (e) {
        let { guildId: t, guildTheme: n } = e;
        if (!s.initialized || s.guildId !== t) return !1;
        let i = (0, a.z_)(n?.themeSettings ?? null),
            r = n?.enabled ?? !1;
        return (
            (s = {
                ...s,
                draftThemeSettings: (0, a.z_)(i),
                draftEnabled: r,
                originalThemeSettings: i,
                originalEnabled: r,
                isSaving: !1,
                saveError: null,
            }),
            !0
        );
    },
    GUILD_SETTINGS_GUILD_THEME_SAVE_FAILURE: function (e) {
        let { guildId: t, error: n } = e;
        return !!s.initialized && s.guildId === t && ((s = { ...s, isSaving: !1, saveError: n }), !0);
    },
    CONNECTION_OPEN: S,
    GUILD_CREATE: S,
    GUILD_UPDATE: function (e) {
        let { guild: t } = e;
        if (!s.initialized || s.guildId !== t.id || void 0 === t.theme) return !1;
        let n = t.theme;
        return u((0, a.L8)(n ?? null), n?.enabled ?? !1);
    },
    GUILD_SETTINGS_CLOSE: function () {
        return (
            !!s.initialized &&
            ((s = {
                guildId: null,
                draftThemeSettings: null,
                draftEnabled: !1,
                originalThemeSettings: null,
                originalEnabled: !1,
                initialized: !1,
                isSaving: !1,
                saveError: null,
            }),
            !0)
        );
    },
});
n.d(t, {}, { A: _ });
