l.d(t, { A: () => g });
var i = l(735438),
    n = l(17928),
    a = l(228366),
    r = l(476931),
    s = l(679787),
    E = l(71393);
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
    if ((0, i.isEqual)(e, d.originalThemeSettings) && t === d.originalEnabled) return !1;
    let l = (0, i.isEqual)(d.draftThemeSettings, d.originalThemeSettings) && d.draftEnabled === d.originalEnabled;
    return (
        (d = {
            ...d,
            originalThemeSettings: (0, s.z_)(e),
            originalEnabled: t,
            draftThemeSettings: l ? (0, s.z_)(e) : d.draftThemeSettings,
            draftEnabled: l ? t : d.draftEnabled,
        }),
        !0
    );
}
function c() {
    if (!d.initialized || null == d.guildId) return !1;
    let e = E.A.getGuild(d.guildId);
    return null != e && h(e.guildTheme?.themeSettings ?? null, e.guildTheme?.enabled ?? !1);
}
class o extends n.Ay.Store {
    static displayName = "GuildSettingsGuildThemeStore";
    initialize() {
        this.waitFor(E.A);
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
            (d.draftEnabled !== d.originalEnabled || !(0, i.isEqual)(d.draftThemeSettings, d.originalThemeSettings))
        );
    }
    showNotice() {
        return this.hasChanges();
    }
}
let g = new o(a.h, {
    GUILD_SETTINGS_GUILD_THEME_INIT: function (e) {
        let { guild: t } = e,
            l = (0, s.z_)(t.guildTheme?.themeSettings ?? null),
            i = t.guildTheme?.enabled ?? !1;
        return (
            (d = {
                guildId: t.id,
                draftThemeSettings: (0, s.z_)(l),
                draftEnabled: i,
                originalThemeSettings: l,
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
            l = t && null == d.draftThemeSettings ? (0, r.Qy)() : d.draftThemeSettings;
        return (
            !(d.draftEnabled === t && (0, i.isEqual)(d.draftThemeSettings, l)) &&
            ((d = { ...d, draftEnabled: t, draftThemeSettings: l, saveError: null }), !0)
        );
    },
    GUILD_SETTINGS_GUILD_THEME_SELECT_PRESET: function (e) {
        let { presetId: t } = e,
            l = { presetId: t, customUserThemeSettings: void 0 };
        return (
            !(d.draftEnabled && (0, i.isEqual)(d.draftThemeSettings, l)) &&
            ((d = { ...d, draftThemeSettings: l, draftEnabled: !0, saveError: null }), !0)
        );
    },
    GUILD_SETTINGS_GUILD_THEME_UPDATE_CUSTOM: function (e) {
        let { colors: t, gradientAngle: l, baseMix: n } = e,
            a = {
                presetId: void 0,
                customUserThemeSettings: { colors: [...t], gradientColorStops: [], gradientAngle: l, baseMix: n },
            };
        return (
            !(d.draftEnabled && (0, i.isEqual)(d.draftThemeSettings, a)) &&
            ((d = { ...d, draftThemeSettings: a, draftEnabled: !0, saveError: null }), !0)
        );
    },
    GUILD_SETTINGS_GUILD_THEME_RESET_DRAFT: function () {
        return (
            (d = {
                ...d,
                draftThemeSettings: (0, s.z_)(d.originalThemeSettings),
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
        let { guildId: t, guildTheme: l } = e;
        if (!d.initialized || d.guildId !== t) return !1;
        let i = (0, s.z_)(l?.themeSettings ?? null),
            n = l?.enabled ?? !1;
        return (
            (d = {
                ...d,
                draftThemeSettings: (0, s.z_)(i),
                draftEnabled: n,
                originalThemeSettings: i,
                originalEnabled: n,
                isSaving: !1,
                saveError: null,
            }),
            !0
        );
    },
    GUILD_SETTINGS_GUILD_THEME_SAVE_FAILURE: function (e) {
        let { guildId: t, error: l } = e;
        return !!d.initialized && d.guildId === t && ((d = { ...d, isSaving: !1, saveError: l }), !0);
    },
    CONNECTION_OPEN: c,
    GUILD_CREATE: c,
    GUILD_UPDATE: function (e) {
        let { guild: t } = e;
        if (!d.initialized || d.guildId !== t.id || void 0 === t.theme) return !1;
        let l = t.theme;
        return h((0, s.L8)(l ?? null), l?.enabled ?? !1);
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
