"use strict";
n.d(t, {
    Er: () => f,
    GL: () => s,
    IM: () => I,
    Iz: () => _,
    JJ: () => o,
    Oz: () => p,
    RE: () => A,
    V2: () => l,
    WR: () => d,
    Zz: () => m,
    go: () => E,
    mZ: () => g,
    sy: () => u,
    x8: () => T,
    y3: () => h,
    zq: () => c,
});
var r = n(562465),
    i = n(73153),
    a = n(652215);
async function s(e, t) {
    let {
        nick: n,
        avatar: s,
        avatarDescription: o,
        avatarId: l,
        avatarDecoration: u,
        nameplate: c,
        displayNameStyles: d,
    } = t;
    if (null == e) throw Error("Need guildId");
    i.h.dispatch({ type: "GUILD_IDENTITY_SETTINGS_SUBMIT" });
    let _ = {
        nick: n,
        avatar: s,
        avatar_description: o,
        avatar_id: l,
        avatar_decoration_sku_id: void 0 !== u ? (u?.skuId ?? null) : void 0,
        collectibles: void 0 !== c ? { nameplate: null === c ? null : { sku_id: c.skuId } } : void 0,
        display_name_font_id: void 0 !== d ? (null !== d ? d.fontId : null) : void 0,
        display_name_effect_id: void 0 !== d ? (null !== d ? d.effectId : null) : void 0,
        display_name_colors: void 0 !== d ? (null !== d ? d.colors : null) : void 0,
    };
    try {
        let t = await r.Bo.patch({ url: a.Rsh.SET_GUILD_MEMBER(e), body: _, oldFormErrors: !0, rejectWithError: !1 }),
            n = t.body;
        return (
            i.h.dispatch({ type: "GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS" }),
            i.h.dispatch({ type: "GUILD_MEMBER_PROFILE_UPDATE", guildMember: n, guildId: e }),
            (null != s || null != l) && i.h.dispatch({ type: "RECENT_AVATARS_UPDATE" }),
            t
        );
    } catch (t) {
        let e = t.body;
        return (
            e?.username != null && ((e.nick = e.username), delete e.username),
            i.h.dispatch({ type: "GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE", errors: t.body }),
            t
        );
    }
}
function o(e) {
    i.h.dispatch({ type: "GUILD_IDENTITY_SETTINGS_SET_GUILD", guild: e });
}
function l(e) {
    i.h.dispatch({ type: "GUILD_IDENTITY_SETTINGS_INIT", guild: e });
}
function u() {
    i.h.dispatch({ type: "GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM" });
}
function c(e) {
    i.h.dispatch({ type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR", avatar: e });
}
function d(e) {
    i.h.dispatch({ type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_COLLECTIBLES_ITEM", item: e });
}
function _(e) {
    i.h.dispatch({ type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER", banner: e });
}
function f(e) {
    i.h.dispatch({ type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO", bio: e });
}
function p(e) {
    i.h.dispatch({ type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS", pronouns: e });
}
function h(e) {
    i.h.dispatch({ type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME", nickname: e });
}
function m(e) {
    i.h.dispatch({ type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS", themeColors: e });
}
function g(e) {
    i.h.dispatch({ type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_DISPLAY_NAME_STYLES", displayNameStyles: e });
}
function E() {
    i.h.dispatch({ type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES" });
}
function A() {
    i.h.dispatch({ type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES" });
}
function I() {
    i.h.dispatch({ type: "GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING" });
}
function T() {
    i.h.dispatch({ type: "GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS" });
}
