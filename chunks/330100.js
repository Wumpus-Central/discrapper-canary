i.d(t, { A: () => u });
var n = i(435558),
    l = i(17928),
    a = i(228366),
    r = i(476931),
    E = i(679787),
    s = i(71393);
let d = {
    guildId: null,
    draftThemeSettings: null,
    draftEnabled: !1,
    originalThemeSettings: null,
    originalEnabled: !1,
    initialized: !1,
    isSaving: !1,
    saveError: null,
};
function h(e, t) {
    if ((0, n.isEqual)(e, d.originalThemeSettings) && t === d.originalEnabled) return !1;
    let i = (0, n.isEqual)(d.draftThemeSettings, d.originalThemeSettings) && d.draftEnabled === d.originalEnabled;
    return (
        (d = {
            ...d,
            originalThemeSettings: (0, E.z_)(e),
            originalEnabled: t,
            draftThemeSettings: i ? (0, E.z_)(e) : d.draftThemeSettings,
            draftEnabled: i ? t : d.draftEnabled,
        }),
        !0
    );
}
function c() {
    if (!d.initialized || null == d.guildId) return !1;
    let e = s.A.getGuild(d.guildId);
    return null != e && h(e.guildTheme?.themeSettings ?? null, e.guildTheme?.enabled ?? !1);
}
class o extends l.Ay.Store {
    static displayName = "GuildSettingsGuildThemeStore";
    initialize() {
        this.waitFor(s.A);
    }
    get guildId() {
        return d.guildId;
    }
    get draftThemeSettings() {
        return d.draftThemeSettings;
    }
    get draftEnabled() {
        return d.draftEnabled;
    }
    get originalThemeSettings() {
        return d.originalThemeSettings;
    }
    get originalEnabled() {
        return d.originalEnabled;
    }
    get isInitialized() {
        return d.initialized;
    }
    get isSaving() {
        return d.isSaving;
    }
    get saveError() {
        return d.saveError;
    }
    hasChanges() {
        return (
            !!d.initialized &&
            (d.draftEnabled !== d.originalEnabled || !(0, n.isEqual)(d.draftThemeSettings, d.originalThemeSettings))
        );
    }
    showNotice() {
        return this.hasChanges();
    }
}
let u = new o(a.h, {
    GUILD_SETTINGS_GUILD_THEME_INIT: function (e) {
        let { guild: t } = e,
            i = (0, E.z_)(t.guildTheme?.themeSettings ?? null),
            n = t.guildTheme?.enabled ?? !1;
        return (
            (d = {
                guildId: t.id,
                draftThemeSettings: (0, E.z_)(i),
                draftEnabled: n,
                originalThemeSettings: i,
                originalEnabled: n,
                initialized: !0,
                isSaving: !1,
                saveError: null,
            }),
            !0
        );
    },
    GUILD_SETTINGS_GUILD_THEME_SET_ENABLED: function (e) {
        let { enabled: t } = e,
            i = t && null == d.draftThemeSettings ? (0, r.Qy)() : d.draftThemeSettings;
        return (
            !(d.draftEnabled === t && (0, n.isEqual)(d.draftThemeSettings, i)) &&
            ((d = { ...d, draftEnabled: t, draftThemeSettings: i, saveError: null }), !0)
        );
    },
    GUILD_SETTINGS_GUILD_THEME_SELECT_PRESET: function (e) {
        let { presetId: t } = e,
            i = { presetId: t, customUserThemeSettings: void 0 };
        return (
            !(d.draftEnabled && (0, n.isEqual)(d.draftThemeSettings, i)) &&
            ((d = { ...d, draftThemeSettings: i, draftEnabled: !0, saveError: null }), !0)
        );
    },
    GUILD_SETTINGS_GUILD_THEME_UPDATE_CUSTOM: function (e) {
        let { colors: t, gradientAngle: i, baseMix: l } = e,
            a = {
                presetId: void 0,
                customUserThemeSettings: { colors: [...t], gradientColorStops: [], gradientAngle: i, baseMix: l },
            };
        return (
            !(d.draftEnabled && (0, n.isEqual)(d.draftThemeSettings, a)) &&
            ((d = { ...d, draftThemeSettings: a, draftEnabled: !0, saveError: null }), !0)
        );
    },
    GUILD_SETTINGS_GUILD_THEME_RESET_DRAFT: function () {
        return (
            (d = {
                ...d,
                draftThemeSettings: (0, E.z_)(d.originalThemeSettings),
                draftEnabled: d.originalEnabled,
                saveError: null,
            }),
            !0
        );
    },
    GUILD_SETTINGS_GUILD_THEME_SAVE_START: function () {
        return (d = { ...d, isSaving: !0, saveError: null }), !0;
    },
    GUILD_SETTINGS_GUILD_THEME_SAVE_SUCCESS: function (e) {
        let { guildId: t, guildTheme: i } = e;
        if (!d.initialized || d.guildId !== t) return !1;
        let n = (0, E.z_)(i?.themeSettings ?? null),
            l = i?.enabled ?? !1;
        return (
            (d = {
                ...d,
                draftThemeSettings: (0, E.z_)(n),
                draftEnabled: l,
                originalThemeSettings: n,
                originalEnabled: l,
                isSaving: !1,
                saveError: null,
            }),
            !0
        );
    },
    GUILD_SETTINGS_GUILD_THEME_SAVE_FAILURE: function (e) {
        let { guildId: t, error: i } = e;
        return !!d.initialized && d.guildId === t && ((d = { ...d, isSaving: !1, saveError: i }), !0);
    },
    CONNECTION_OPEN: c,
    GUILD_CREATE: c,
    GUILD_UPDATE: function (e) {
        let { guild: t } = e;
        if (!d.initialized || d.guildId !== t.id || void 0 === t.theme) return !1;
        let i = t.theme;
        return h((0, E.L8)(i ?? null), i?.enabled ?? !1);
    },
    GUILD_SETTINGS_CLOSE: function () {
        return (
            !!d.initialized &&
            ((d = {
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
