"use strict";
n.d(t, { A: () => N });
var i = n(435558),
    r = n(512750),
    a = n(17928),
    s = n(228366),
    l = n(645619),
    o = n(71393),
    d = n(967198),
    c = n(679787),
    u = n(652215);
let _ = null,
    E = null;
function A(e) {
    return o.A.getGuild(e)?.features.has(u.GuildFeatures.GUILD_THEME) === !0;
}
function h(e) {
    return (0, c.yX)(o.A.getGuild(e)?.guildTheme);
}
function I() {
    return null != _ && ((_ = null), !0);
}
function f(e, t, n) {
    return (
        (!(_?.guildId === e && (0, i.isEqual)(_.guildTheme, t)) || _.hasThemeFeature !== n) &&
        ((_ = { guildId: e, guildTheme: t, hasThemeFeature: n }), !0)
    );
}
function p(e) {
    return null == e ? I() : f(e, h(e), A(e));
}
function T() {
    return p(d.A.getGuildId());
}
function m(e) {
    if (_?.guildId !== e) return !1;
    let t = d.A.getGuildId();
    return t !== e && p(t);
}
function g(e) {
    let { guildId: t, guildTheme: n } = e;
    return t === d.A.getGuildId() && f(t, (0, c.yX)(n), A(t));
}
class S extends a.Ay.Store {
    static displayName = "GuildThemeRuntimeStore";
    initialize() {
        this.waitFor(l.A, o.A, d.A);
    }
    getGuildThemeSnapshot(e) {
        return e === E ? null : e === _?.guildId ? _.guildTheme : void 0;
    }
}
let N = new S(s.h, {
    CACHE_LOADED: T,
    CACHE_LOADED_LAZY: T,
    CHANNEL_SELECT: function (e) {
        let { guildId: t } = e;
        return null == t ? I() : t !== _?.guildId && p(t);
    },
    CONNECTION_OPEN: T,
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        return m(t.id);
    },
    GUILD_MEMBER_REMOVE: function (e) {
        let { guildId: t } = e;
        return m(t);
    },
    GUILD_UPDATE: function (e) {
        let { guild: t } = e,
            n = !1;
        return (
            t.id !== E || A(t.id) || ((E = null), (n = !0)),
            (function (e) {
                var t;
                let n = _;
                if (null == n || e !== n.guildId) return !1;
                let i = A(e);
                if (i === n.hasThemeFeature) return !1;
                let a =
                    i &&
                    (l.A.getStateForGuild(e)?.unlockedPowerups?.[r.d0] == null ||
                        ((t = n.guildTheme), t?.enabled === !0))
                        ? n.guildTheme
                        : h(e);
                return f(e, a, i);
            })(t.id) && (n = !0),
            n
        );
    },
    GUILD_POWERUP_ENTITLEMENTS_CREATE: function (e) {
        let { guildId: t, entitlements: n } = e;
        return E === t && !!n.some((e) => e.sku_id === r.d0) && ((E = null), !0);
    },
    GUILD_POWERUP_ENTITLEMENTS_DELETE: function (e) {
        let { guildId: t, entitlements: n } = e;
        return !!n.some((e) => e.sku_id === r.d0) && t === _?.guildId && E !== t && ((E = t), !0);
    },
    GUILD_SETTINGS_GUILD_THEME_SAVE_SUCCESS: g,
    GUILD_THEME_PREVIEW_SAVE_SUCCESS: g,
    OVERLAY_INITIALIZE: T,
    LOGOUT: function () {
        let e = null != E;
        return (E = null), I() || e;
    },
});
