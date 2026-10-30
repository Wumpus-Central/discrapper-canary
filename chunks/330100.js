n.d(t, { A: () => h });
var i = n(435558),
    a = n(17928),
    l = n(73153),
    r = n(476931),
    s = n(679787),
    d = n(71393);
let E = {
    guildId: null,
    draftThemeSettings: null,
    draftEnabled: !1,
    originalThemeSettings: null,
    originalEnabled: !1,
    initialized: !1,
    isSaving: !1,
    saveError: null,
};
function o(e, t) {
    if ((0, i.isEqual)(e, E.originalThemeSettings) && t === E.originalEnabled) return !1;
    let n = (0, i.isEqual)(E.draftThemeSettings, E.originalThemeSettings) && E.draftEnabled === E.originalEnabled;
    return (
        (E = {
            ...E,
            originalThemeSettings: (0, s.z_)(e),
            originalEnabled: t,
            draftThemeSettings: n ? (0, s.z_)(e) : E.draftThemeSettings,
            draftEnabled: n ? t : E.draftEnabled,
        }),
        !0
    );
}
function c() {
    if (!E.initialized || null == E.guildId) return !1;
    let e = d.A.getGuild(E.guildId);
    return null != e && o(e.guildTheme?.themeSettings ?? null, e.guildTheme?.enabled ?? !1);
}
class u extends a.Ay.Store {
    static displayName = "GuildSettingsGuildThemeStore";
    initialize() {
        this.waitFor(d.A);
    }
    get guildId() {
        return E.guildId;
    }
    get draftThemeSettings() {
        return E.draftThemeSettings;
    }
    get draftEnabled() {
        return E.draftEnabled;
    }
    get originalThemeSettings() {
        return E.originalThemeSettings;
    }
    get originalEnabled() {
        return E.originalEnabled;
    }
    get isInitialized() {
        return E.initialized;
    }
    get isSaving() {
        return E.isSaving;
    }
    get saveError() {
        return E.saveError;
    }
    hasChanges() {
        return (
            !!E.initialized &&
            (E.draftEnabled !== E.originalEnabled || !(0, i.isEqual)(E.draftThemeSettings, E.originalThemeSettings))
        );
    }
    showNotice() {
        return this.hasChanges();
    }
}
let h = new u(l.h, {
    GUILD_SETTINGS_GUILD_THEME_INIT: function (e) {
        let { guild: t } = e,
            n = (0, s.z_)(t.guildTheme?.themeSettings ?? null),
            i = t.guildTheme?.enabled ?? !1;
        return (
            (E = {
                guildId: t.id,
                draftThemeSettings: (0, s.z_)(n),
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
            n = t && null == E.draftThemeSettings ? (0, r.Qy)() : E.draftThemeSettings;
        return (
            !(E.draftEnabled === t && (0, i.isEqual)(E.draftThemeSettings, n)) &&
            ((E = { ...E, draftEnabled: t, draftThemeSettings: n, saveError: null }), !0)
        );
    },
    GUILD_SETTINGS_GUILD_THEME_SELECT_PRESET: function (e) {
        let { presetId: t } = e,
            n = { presetId: t, customUserThemeSettings: void 0 };
        return (
            !(E.draftEnabled && (0, i.isEqual)(E.draftThemeSettings, n)) &&
            ((E = { ...E, draftThemeSettings: n, draftEnabled: !0, saveError: null }), !0)
        );
    },
    GUILD_SETTINGS_GUILD_THEME_UPDATE_CUSTOM: function (e) {
        let { colors: t, gradientAngle: n, baseMix: a } = e,
            l = {
                presetId: void 0,
                customUserThemeSettings: { colors: [...t], gradientColorStops: [], gradientAngle: n, baseMix: a },
            };
        return (
            !(E.draftEnabled && (0, i.isEqual)(E.draftThemeSettings, l)) &&
            ((E = { ...E, draftThemeSettings: l, draftEnabled: !0, saveError: null }), !0)
        );
    },
    GUILD_SETTINGS_GUILD_THEME_RESET_DRAFT: function () {
        return (
            (E = {
                ...E,
                draftThemeSettings: (0, s.z_)(E.originalThemeSettings),
                draftEnabled: E.originalEnabled,
                saveError: null,
            }),
            !0
        );
    },
    GUILD_SETTINGS_GUILD_THEME_SAVE_START: function () {
        return ((E = { ...E, isSaving: !0, saveError: null }), !0);
    },
    GUILD_SETTINGS_GUILD_THEME_SAVE_SUCCESS: function (e) {
        let { guildId: t, guildTheme: n } = e;
        if (!E.initialized || E.guildId !== t) return !1;
        let i = (0, s.z_)(n?.themeSettings ?? null),
            a = n?.enabled ?? !1;
        return (
            (E = {
                ...E,
                draftThemeSettings: (0, s.z_)(i),
                draftEnabled: a,
                originalThemeSettings: i,
                originalEnabled: a,
                isSaving: !1,
                saveError: null,
            }),
            !0
        );
    },
    GUILD_SETTINGS_GUILD_THEME_SAVE_FAILURE: function (e) {
        let { guildId: t, error: n } = e;
        return !!E.initialized && E.guildId === t && ((E = { ...E, isSaving: !1, saveError: n }), !0);
    },
    CONNECTION_OPEN: c,
    GUILD_CREATE: c,
    GUILD_UPDATE: function (e) {
        let { guild: t } = e;
        if (!E.initialized || E.guildId !== t.id || void 0 === t.theme) return !1;
        let n = t.theme;
        return o((0, s.L8)(n ?? null), n?.enabled ?? !1);
    },
    GUILD_SETTINGS_CLOSE: function () {
        return (
            !!E.initialized &&
            ((E = {
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
