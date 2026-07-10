"use strict";
n.d(t, { A: () => E });
var i = n(735438),
    r = n(17928),
    a = n(228366),
    s = n(476931),
    l = n(679787),
    o = n(71393);
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
function c(e, t) {
    if ((0, i.isEqual)(e, d.originalThemeSettings) && t === d.originalEnabled) return !1;
    let n = (0, i.isEqual)(d.draftThemeSettings, d.originalThemeSettings) && d.draftEnabled === d.originalEnabled;
    return (
        (d = {
            ...d,
            originalThemeSettings: (0, l.z_)(e),
            originalEnabled: t,
            draftThemeSettings: n ? (0, l.z_)(e) : d.draftThemeSettings,
            draftEnabled: n ? t : d.draftEnabled,
        }),
        !0
    );
}
function u() {
    if (!d.initialized || null == d.guildId) return !1;
    let e = o.A.getGuild(d.guildId);
    return null != e && c(e.guildTheme?.themeSettings ?? null, e.guildTheme?.enabled ?? !1);
}
class _ extends r.Ay.Store {
    static displayName = "GuildSettingsGuildThemeStore";
    initialize() {
        this.waitFor(o.A);
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
let E = new _(a.h, {
    GUILD_SETTINGS_GUILD_THEME_INIT: function (e) {
        let { guild: t } = e,
            n = (0, l.z_)(t.guildTheme?.themeSettings ?? null),
            i = t.guildTheme?.enabled ?? !1;
        return (
            (d = {
                guildId: t.id,
                draftThemeSettings: (0, l.z_)(n),
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
            n = t && null == d.draftThemeSettings ? (0, s.Qy)() : d.draftThemeSettings;
        return (
            !(d.draftEnabled === t && (0, i.isEqual)(d.draftThemeSettings, n)) &&
            ((d = { ...d, draftEnabled: t, draftThemeSettings: n, saveError: null }), !0)
        );
    },
    GUILD_SETTINGS_GUILD_THEME_SELECT_PRESET: function (e) {
        let { presetId: t } = e,
            n = { presetId: t, customUserThemeSettings: void 0 };
        return (
            !(d.draftEnabled && (0, i.isEqual)(d.draftThemeSettings, n)) &&
            ((d = { ...d, draftThemeSettings: n, draftEnabled: !0, saveError: null }), !0)
        );
    },
    GUILD_SETTINGS_GUILD_THEME_UPDATE_CUSTOM: function (e) {
        let { colors: t, gradientAngle: n, baseMix: r } = e,
            a = {
                presetId: void 0,
                customUserThemeSettings: { colors: [...t], gradientColorStops: [], gradientAngle: n, baseMix: r },
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
                draftThemeSettings: (0, l.z_)(d.originalThemeSettings),
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
        let { guildId: t, guildTheme: n } = e;
        if (!d.initialized || d.guildId !== t) return !1;
        let i = (0, l.z_)(n?.themeSettings ?? null),
            r = n?.enabled ?? !1;
        return (
            (d = {
                ...d,
                draftThemeSettings: (0, l.z_)(i),
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
        return !!d.initialized && d.guildId === t && ((d = { ...d, isSaving: !1, saveError: n }), !0);
    },
    CONNECTION_OPEN: u,
    GUILD_CREATE: u,
    GUILD_UPDATE: function (e) {
        let { guild: t } = e;
        if (!d.initialized || d.guildId !== t.id || void 0 === t.theme) return !1;
        let n = t.theme;
        return c((0, l.L8)(n ?? null), n?.enabled ?? !1);
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
