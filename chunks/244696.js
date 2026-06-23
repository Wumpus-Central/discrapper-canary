"use strict";
n.d(t, { A: () => y });
var i = n(735438),
    r = n(512750),
    s = n(17928),
    a = n(228366),
    o = n(645619),
    l = n(71393),
    u = n(967198),
    c = n(679787),
    d = n(652215);
let _ = null,
    h = null;
function f(e) {
    return l.A.getGuild(e)?.features.has(d.GuildFeatures.GUILD_THEME) === !0;
}
function p(e) {
    return (0, c.yX)(l.A.getGuild(e)?.guildTheme);
}
function E() {
    return null != _ && ((_ = null), !0);
}
function m(e, t, n) {
    return (
        (!(_?.guildId === e && (0, i.isEqual)(_.guildTheme, t)) || _.hasThemeFeature !== n) &&
        ((_ = { guildId: e, guildTheme: t, hasThemeFeature: n }), !0)
    );
}
function g(e) {
    return null == e ? E() : m(e, p(e), f(e));
}
function A() {
    return g(u.A.getGuildId());
}
function I(e) {
    if (_?.guildId !== e) return !1;
    let t = u.A.getGuildId();
    return t !== e && g(t);
}
function T(e) {
    let { guildId: t, guildTheme: n } = e;
    return t === u.A.getGuildId() && m(t, (0, c.yX)(n), f(t));
}
class S extends s.Ay.Store {
    static displayName = "GuildThemeRuntimeStore";
    initialize() {
        this.waitFor(o.A, l.A, u.A);
    }
    getGuildThemeSnapshot(e) {
        return e === h ? null : e === _?.guildId ? _.guildTheme : void 0;
    }
}
let y = new S(a.h, {
    CACHE_LOADED: A,
    CACHE_LOADED_LAZY: A,
    CHANNEL_SELECT: function (e) {
        let { guildId: t } = e;
        return null == t ? E() : t !== _?.guildId && g(t);
    },
    CONNECTION_OPEN: A,
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        return I(t.id);
    },
    GUILD_MEMBER_REMOVE: function (e) {
        let { guildId: t } = e;
        return I(t);
    },
    GUILD_UPDATE: function (e) {
        let { guild: t } = e,
            n = !1;
        return (
            t.id !== h || f(t.id) || ((h = null), (n = !0)),
            (function (e) {
                var t;
                let n = _;
                if (null == n || e !== n.guildId) return !1;
                let i = f(e);
                if (i === n.hasThemeFeature) return !1;
                let s =
                    i &&
                    (o.A.getStateForGuild(e)?.unlockedPowerups?.[r.d0] == null ||
                        ((t = n.guildTheme), t?.enabled === !0))
                        ? n.guildTheme
                        : p(e);
                return m(e, s, i);
            })(t.id) && (n = !0),
            n
        );
    },
    GUILD_POWERUP_ENTITLEMENTS_CREATE: function (e) {
        let { guildId: t, entitlements: n } = e;
        return h === t && !!n.some((e) => e.sku_id === r.d0) && ((h = null), !0);
    },
    GUILD_POWERUP_ENTITLEMENTS_DELETE: function (e) {
        let { guildId: t, entitlements: n } = e;
        return !!n.some((e) => e.sku_id === r.d0) && t === _?.guildId && h !== t && ((h = t), !0);
    },
    GUILD_SETTINGS_GUILD_THEME_SAVE_SUCCESS: T,
    GUILD_THEME_PREVIEW_SAVE_SUCCESS: T,
    OVERLAY_INITIALIZE: A,
    LOGOUT: function () {
        let e = null != h;
        return (h = null), E() || e;
    },
});
