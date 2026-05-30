"use strict";
n.d(t, { A: () => m, v: () => c });
var i,
    r = n(735438),
    s = n(17928),
    a = n(451988),
    o = n(228366),
    l = n(495544),
    u = n(679787),
    c = (((i = {}).GUILD_SETTINGS = "guild_settings"), (i.PERK_MODAL = "perk_modal"), i);
let d = new a.Ep();
function _() {
    return {
        guildId: null,
        draft: null,
        original: null,
        draftEnabled: !1,
        originalEnabled: !1,
        origin: null,
        isSaving: !1,
        isAwaitingGuildUpdate: !1,
        saveError: null,
    };
}
let h = _();
function f() {
    d.stop();
}
function p() {
    return (null != h.guildId || !!d.isStarted()) && (f(), (h = _()), !0);
}
class E extends s.Ay.Store {
    static displayName = "GuildThemePreviewStore";
    initialize() {
        this.waitFor(l.default);
    }
    get guildId() {
        return h.guildId;
    }
    get draft() {
        return h.draft;
    }
    get original() {
        return h.original;
    }
    get draftEnabled() {
        return h.draftEnabled;
    }
    get originalEnabled() {
        return h.originalEnabled;
    }
    get origin() {
        return h.origin;
    }
    get isActive() {
        return null != h.guildId;
    }
    get isSaving() {
        return h.isSaving;
    }
    get isAwaitingGuildUpdate() {
        return h.isAwaitingGuildUpdate;
    }
    get saveError() {
        return h.saveError;
    }
    hasChanges() {
        return null != h.guildId && (h.draftEnabled !== h.originalEnabled || !(0, r.isEqual)(h.draft, h.original));
    }
}
let m = new E(o.h, {
    GUILD_THEME_PREVIEW_START: function (e) {
        let { guildId: t, draft: n, original: i, draftEnabled: r, originalEnabled: s, origin: a } = e;
        f(),
            (h = {
                guildId: t,
                draft: (0, u.z_)(n),
                original: (0, u.z_)(i),
                draftEnabled: r,
                originalEnabled: s,
                origin: a,
                isSaving: !1,
                isAwaitingGuildUpdate: !1,
                saveError: null,
            });
    },
    GUILD_THEME_PREVIEW_SELECT_PRESET: function (e) {
        let { presetId: t } = e;
        if (null == h.guildId) return !1;
        let n = { presetId: t, customUserThemeSettings: void 0 };
        return (
            (!(0, r.isEqual)(h.draft, n) || !h.draftEnabled) &&
            (f(), (h = { ...h, draft: n, draftEnabled: !0, isAwaitingGuildUpdate: !1, saveError: null }), !0)
        );
    },
    GUILD_THEME_PREVIEW_UPDATE_CUSTOM: function (e) {
        let { colors: t, gradientAngle: n, baseMix: i } = e;
        if (null == h.guildId) return !1;
        let s = {
            presetId: void 0,
            customUserThemeSettings: { colors: [...t], gradientColorStops: [], gradientAngle: n, baseMix: i },
        };
        return (
            (!(0, r.isEqual)(h.draft, s) || !h.draftEnabled) &&
            (f(), (h = { ...h, draft: s, draftEnabled: !0, isAwaitingGuildUpdate: !1, saveError: null }), !0)
        );
    },
    GUILD_THEME_PREVIEW_END: p,
    GUILD_THEME_PREVIEW_SAVE_START: function () {
        f(), (h = { ...h, isSaving: !0, isAwaitingGuildUpdate: !1, saveError: null });
    },
    GUILD_THEME_PREVIEW_SAVE_SUCCESS: function (e) {
        let { guildId: t, guildTheme: n } = e;
        if (null == h.guildId || t !== h.guildId) return !1;
        let i = n?.themeSettings ?? null,
            r = n?.enabled ?? !1;
        return (
            (h = {
                ...h,
                draft: (0, u.z_)(i),
                original: (0, u.z_)(i),
                draftEnabled: r,
                originalEnabled: r,
                isSaving: !1,
                isAwaitingGuildUpdate: !0,
                saveError: null,
            }),
            f(),
            d.start(1e4, () => {
                h.isAwaitingGuildUpdate && o.h.dispatch({ type: "GUILD_THEME_PREVIEW_END" });
            }),
            !0
        );
    },
    GUILD_THEME_PREVIEW_SAVE_FAILURE: function (e) {
        let { guildId: t, error: n } = e;
        return (
            null != h.guildId &&
            t === h.guildId &&
            (f(), (h = { ...h, isSaving: !1, isAwaitingGuildUpdate: !1, saveError: n }), !0)
        );
    },
    GUILD_SETTINGS_GUILD_THEME_SAVE_SUCCESS: function (e) {
        let { guildId: t } = e;
        return null != h.guildId && t === h.guildId && p();
    },
    USER_SETTINGS_MODAL_OPEN: p,
    CHANNEL_SELECT: function (e) {
        let { guildId: t } = e;
        return null != h.guildId && t !== h.guildId && (p(), !0);
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        return null != h.guildId && t.id === h.guildId && (p(), !0);
    },
    GUILD_MEMBER_REMOVE: function (e) {
        let { guildId: t, user: n } = e;
        return n.id === l.default.getId() && null != h.guildId && t === h.guildId && (p(), !0);
    },
    GUILD_UPDATE: function (e) {
        var t;
        let n,
            i,
            { guild: s } = e;
        return (
            !!h.isAwaitingGuildUpdate &&
            null != h.guildId &&
            s.id === h.guildId &&
            void 0 !== s.theme &&
            ((t = (0, u.UW)(s.theme)),
            (n = t?.enabled ?? !1),
            (i = t?.themeSettings ?? null),
            !!(n === h.originalEnabled && (0, r.isEqual)(i, h.original)) && (p(), !0))
        );
    },
    LOGOUT: p,
});
