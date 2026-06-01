"use strict";
n.d(t, { AY: () => _, Ay: () => A, v5: () => d });
var i,
    r,
    s = n(735438),
    a = n(17928),
    o = n(451988),
    l = n(228366),
    u = n(495544),
    c = n(679787),
    d = (((i = {}).GUILD_SETTINGS = "guild_settings"), (i.PERK_MODAL = "perk_modal"), i),
    _ = (((r = {}).GUILD_SETTINGS = "guild_settings"), (r.PREVIEW_PANEL = "preview_panel"), r);
let h = new o.Ep();
function f() {
    return {
        guildId: null,
        draft: null,
        original: null,
        draftEnabled: !1,
        originalEnabled: !1,
        origin: null,
        owner: null,
        isSaving: !1,
        isAwaitingGuildUpdate: !1,
        saveError: null,
    };
}
let p = f();
function E() {
    h.stop();
}
function m() {
    return (null != p.guildId || !!h.isStarted()) && (E(), (p = f()), !0);
}
class g extends a.Ay.Store {
    static displayName = "GuildThemePreviewStore";
    initialize() {
        this.waitFor(u.default);
    }
    get guildId() {
        return p.guildId;
    }
    get draft() {
        return p.draft;
    }
    get original() {
        return p.original;
    }
    get draftEnabled() {
        return p.draftEnabled;
    }
    get originalEnabled() {
        return p.originalEnabled;
    }
    get origin() {
        return p.origin;
    }
    get owner() {
        return p.owner;
    }
    get isActive() {
        return null != p.guildId;
    }
    get isSaving() {
        return p.isSaving;
    }
    get isAwaitingGuildUpdate() {
        return p.isAwaitingGuildUpdate;
    }
    get saveError() {
        return p.saveError;
    }
    hasChanges() {
        return null != p.guildId && (p.draftEnabled !== p.originalEnabled || !(0, s.isEqual)(p.draft, p.original));
    }
}
let A = new g(l.h, {
    GUILD_THEME_PREVIEW_START: function (e) {
        let { guildId: t, draft: n, original: i, draftEnabled: r, originalEnabled: s, origin: a, owner: o } = e;
        E(),
            (p = {
                guildId: t,
                draft: (0, c.z_)(n),
                original: (0, c.z_)(i),
                draftEnabled: r,
                originalEnabled: s,
                origin: a,
                owner: o ?? p.owner,
                isSaving: !1,
                isAwaitingGuildUpdate: !1,
                saveError: null,
            });
    },
    GUILD_THEME_PREVIEW_SELECT_PRESET: function (e) {
        let { presetId: t } = e;
        if (null == p.guildId) return !1;
        let n = { presetId: t, customUserThemeSettings: void 0 };
        return (
            (!(0, s.isEqual)(p.draft, n) || !p.draftEnabled) &&
            (E(), (p = { ...p, draft: n, draftEnabled: !0, isAwaitingGuildUpdate: !1, saveError: null }), !0)
        );
    },
    GUILD_THEME_PREVIEW_UPDATE_CUSTOM: function (e) {
        let { colors: t, gradientAngle: n, baseMix: i } = e;
        if (null == p.guildId) return !1;
        let r = {
            presetId: void 0,
            customUserThemeSettings: { colors: [...t], gradientColorStops: [], gradientAngle: n, baseMix: i },
        };
        return (
            (!(0, s.isEqual)(p.draft, r) || !p.draftEnabled) &&
            (E(), (p = { ...p, draft: r, draftEnabled: !0, isAwaitingGuildUpdate: !1, saveError: null }), !0)
        );
    },
    GUILD_THEME_PREVIEW_TRANSFER_OWNERSHIP: function (e) {
        let { owner: t } = e;
        return null != p.guildId && p.owner !== t && ((p = { ...p, owner: t }), !0);
    },
    GUILD_THEME_PREVIEW_END: m,
    GUILD_THEME_PREVIEW_SAVE_START: function () {
        E(), (p = { ...p, isSaving: !0, isAwaitingGuildUpdate: !1, saveError: null });
    },
    GUILD_THEME_PREVIEW_SAVE_SUCCESS: function (e) {
        let { guildId: t, guildTheme: n } = e;
        if (null == p.guildId || t !== p.guildId) return !1;
        let i = n?.themeSettings ?? null,
            r = n?.enabled ?? !1;
        return (
            (p = {
                ...p,
                draft: (0, c.z_)(i),
                original: (0, c.z_)(i),
                draftEnabled: r,
                originalEnabled: r,
                isSaving: !1,
                isAwaitingGuildUpdate: !0,
                saveError: null,
            }),
            E(),
            h.start(1e4, () => {
                p.isAwaitingGuildUpdate && l.h.dispatch({ type: "GUILD_THEME_PREVIEW_END" });
            }),
            !0
        );
    },
    GUILD_THEME_PREVIEW_SAVE_FAILURE: function (e) {
        let { guildId: t, error: n } = e;
        return (
            null != p.guildId &&
            t === p.guildId &&
            (E(), (p = { ...p, isSaving: !1, isAwaitingGuildUpdate: !1, saveError: n }), !0)
        );
    },
    GUILD_SETTINGS_GUILD_THEME_SAVE_SUCCESS: function (e) {
        let { guildId: t } = e;
        return null != p.guildId && t === p.guildId && m();
    },
    USER_SETTINGS_MODAL_OPEN: m,
    CHANNEL_SELECT: function (e) {
        let { guildId: t } = e;
        return null != p.guildId && t !== p.guildId && (m(), !0);
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        return null != p.guildId && t.id === p.guildId && (m(), !0);
    },
    GUILD_MEMBER_REMOVE: function (e) {
        let { guildId: t, user: n } = e;
        return n.id === u.default.getId() && null != p.guildId && t === p.guildId && (m(), !0);
    },
    GUILD_UPDATE: function (e) {
        var t;
        let n,
            i,
            { guild: r } = e;
        return (
            !!p.isAwaitingGuildUpdate &&
            null != p.guildId &&
            r.id === p.guildId &&
            void 0 !== r.theme &&
            ((t = (0, c.UW)(r.theme)),
            (n = t?.enabled ?? !1),
            (i = t?.themeSettings ?? null),
            !!(n === p.originalEnabled && (0, s.isEqual)(i, p.original)) && (m(), !0))
        );
    },
    LOGOUT: m,
});
