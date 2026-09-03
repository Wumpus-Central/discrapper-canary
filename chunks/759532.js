n.d(t, { AY: () => _, Ay: () => T, v5: () => u });
var i,
    r,
    a = n(435558),
    s = n(17928),
    l = n(451988),
    o = n(228366),
    d = n(280450),
    c = n(679787),
    u = (((i = {}).GUILD_SETTINGS = "guild_settings"), (i.PERK_MODAL = "perk_modal"), i),
    _ = (((r = {}).GUILD_SETTINGS = "guild_settings"), (r.PREVIEW_PANEL = "preview_panel"), r);
let E = new l.Ep();
function A() {
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
let h = A();
function I() {
    E.stop();
}
function f() {
    return (null != h.guildId || !!E.isStarted()) && (I(), (h = A()), !0);
}
class p extends s.Ay.Store {
    static displayName = "GuildThemePreviewStore";
    initialize() {
        this.waitFor(d.default);
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
    get owner() {
        return h.owner;
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
        return null != h.guildId && (h.draftEnabled !== h.originalEnabled || !(0, a.isEqual)(h.draft, h.original));
    }
}
let T = new p(o.h, {
    GUILD_THEME_PREVIEW_START: function (e) {
        let { guildId: t, draft: n, original: i, draftEnabled: r, originalEnabled: a, origin: s, owner: l } = e;
        I(),
            (h = {
                guildId: t,
                draft: (0, c.z_)(n),
                original: (0, c.z_)(i),
                draftEnabled: r,
                originalEnabled: a,
                origin: s,
                owner: l ?? h.owner,
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
            (!(0, a.isEqual)(h.draft, n) || !h.draftEnabled) &&
            (I(), (h = { ...h, draft: n, draftEnabled: !0, isAwaitingGuildUpdate: !1, saveError: null }), !0)
        );
    },
    GUILD_THEME_PREVIEW_UPDATE_CUSTOM: function (e) {
        let { colors: t, gradientAngle: n, baseMix: i } = e;
        if (null == h.guildId) return !1;
        let r = {
            presetId: void 0,
            customUserThemeSettings: { colors: [...t], gradientColorStops: [], gradientAngle: n, baseMix: i },
        };
        return (
            (!(0, a.isEqual)(h.draft, r) || !h.draftEnabled) &&
            (I(), (h = { ...h, draft: r, draftEnabled: !0, isAwaitingGuildUpdate: !1, saveError: null }), !0)
        );
    },
    GUILD_THEME_PREVIEW_TRANSFER_OWNERSHIP: function (e) {
        let { owner: t } = e;
        return null != h.guildId && h.owner !== t && ((h = { ...h, owner: t }), !0);
    },
    GUILD_THEME_PREVIEW_END: f,
    GUILD_THEME_PREVIEW_SAVE_START: function () {
        I(), (h = { ...h, isSaving: !0, isAwaitingGuildUpdate: !1, saveError: null });
    },
    GUILD_THEME_PREVIEW_SAVE_SUCCESS: function (e) {
        let { guildId: t, guildTheme: n } = e;
        if (null == h.guildId || t !== h.guildId) return !1;
        let i = n?.themeSettings ?? null,
            r = n?.enabled ?? !1;
        return (
            (h = {
                ...h,
                draft: (0, c.z_)(i),
                original: (0, c.z_)(i),
                draftEnabled: r,
                originalEnabled: r,
                isSaving: !1,
                isAwaitingGuildUpdate: !0,
                saveError: null,
            }),
            I(),
            E.start(1e4, () => {
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
            (I(), (h = { ...h, isSaving: !1, isAwaitingGuildUpdate: !1, saveError: n }), !0)
        );
    },
    GUILD_SETTINGS_GUILD_THEME_SAVE_SUCCESS: function (e) {
        let { guildId: t } = e;
        return null != h.guildId && t === h.guildId && f();
    },
    USER_SETTINGS_MODAL_OPEN: f,
    CHANNEL_SELECT: function (e) {
        let { guildId: t } = e;
        return null != h.guildId && t !== h.guildId && (f(), !0);
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        return null != h.guildId && t.id === h.guildId && (f(), !0);
    },
    GUILD_MEMBER_REMOVE: function (e) {
        let { guildId: t, user: n } = e;
        return n.id === d.default.getId() && null != h.guildId && t === h.guildId && (f(), !0);
    },
    GUILD_UPDATE: function (e) {
        var t;
        let n,
            i,
            { guild: r } = e;
        return (
            !!h.isAwaitingGuildUpdate &&
            null != h.guildId &&
            r.id === h.guildId &&
            void 0 !== r.theme &&
            ((t = (0, c.UW)(r.theme)),
            (n = t?.enabled ?? !1),
            (i = t?.themeSettings ?? null),
            !!(n === h.originalEnabled && (0, a.isEqual)(i, h.original)) && (f(), !0))
        );
    },
    LOGOUT: f,
});
