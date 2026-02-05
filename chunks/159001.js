"use strict";
n.d(t, {
    Er: () => f,
    GL: () => o,
    IM: () => I,
    Iz: () => _,
    JJ: () => l,
    Oz: () => p,
    RE: () => A,
    V2: () => u,
    WR: () => d,
    Zz: () => m,
    go: () => E,
    mZ: () => g,
    x8: () => T,
    y3: () => h,
    zq: () => c,
});
var r = n(562465),
    i = n(73153),
    a = n(836602),
    s = n(652215);
async function o(e, t) {
    let {
        nick: n,
        avatar: a,
        avatarDescription: o,
        avatarId: l,
        avatarDecoration: u,
        nameplate: c,
        displayNameStyles: d,
    } = t;
    if (null == e) throw Error("Need guildId");
    i.h.dispatch({ type: "USER_SETTINGS_ACCOUNT_SUBMIT", guildId: e });
    let _ = {
        nick: n,
        avatar: a,
        avatar_description: o,
        avatar_id: l,
        avatar_decoration_sku_id: void 0 !== u ? (u?.skuId ?? null) : void 0,
        collectibles: void 0 !== c ? { nameplate: null === c ? null : { sku_id: c.skuId } } : void 0,
        display_name_font_id: void 0 !== d ? (null !== d ? d.fontId : null) : void 0,
        display_name_effect_id: void 0 !== d ? (null !== d ? d.effectId : null) : void 0,
        display_name_colors: void 0 !== d ? (null !== d ? d.colors : null) : void 0,
    };
    try {
        let t = await r.Bo.patch({ url: s.Rsh.SET_GUILD_MEMBER(e), body: _, oldFormErrors: !0, rejectWithError: !1 }),
            n = t.body;
        return (
            i.h.dispatch({ type: "USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS", guildId: e }),
            i.h.dispatch({ type: "GUILD_MEMBER_PROFILE_UPDATE", guildMember: n, guildId: e }),
            (null != a || null != l) && i.h.dispatch({ type: "RECENT_AVATARS_UPDATE" }),
            t
        );
    } catch (n) {
        let t = n.body;
        return (
            t?.username != null && ((t.nick = t.username), delete t.username),
            i.h.dispatch({ type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE", guildId: e, errors: n.body }),
            n
        );
    }
}
function l(e) {
    i.h.dispatch({ type: "USER_SETTINGS_ACCOUNT_SET_GUILD", guildId: e });
}
function u(e) {
    i.h.dispatch({ type: "USER_SETTINGS_ACCOUNT_INIT", guildId: e });
}
function c(e) {
    let t = a.A.selectedGuildId;
    i.h.dispatch({ type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR", guildId: t, avatar: e });
}
function d(e) {
    let t = a.A.selectedGuildId;
    i.h.dispatch({ type: "USER_SETTINGS_ACCOUNT_SET_PENDING_COLLECTIBLES_ITEM", guildId: t, item: e });
}
function _(e) {
    let t = a.A.selectedGuildId;
    i.h.dispatch({ type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER", guildId: t, banner: e });
}
function f(e) {
    let t = a.A.selectedGuildId;
    i.h.dispatch({ type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BIO", guildId: t, bio: e });
}
function p(e) {
    let t = a.A.selectedGuildId;
    i.h.dispatch({ type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS", guildId: t, pronouns: e });
}
function h(e) {
    let t = a.A.selectedGuildId;
    null != t && i.h.dispatch({ type: "USER_SETTINGS_ACCOUNT_SET_PENDING_NICKNAME", guildId: t, nickname: e });
}
function m(e) {
    let t = a.A.selectedGuildId;
    i.h.dispatch({ type: "USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS", guildId: t, themeColors: e });
}
function g(e) {
    let t = a.A.selectedGuildId;
    i.h.dispatch({ type: "USER_SETTINGS_ACCOUNT_SET_PENDING_DISPLAY_NAME_STYLES", guildId: t, displayNameStyles: e });
}
function E() {
    i.h.dispatch({ type: "USER_SETTINGS_ACCOUNT_RESET_PENDING_ACCOUNT_CHANGES" });
}
function A() {
    i.h.dispatch({ type: "USER_SETTINGS_ACCOUNT_RESET_PENDING_PROFILE_CHANGES" });
}
function I() {
    i.h.dispatch({ type: "USER_SETTINGS_ACCOUNT_RESET_PENDING_CHANGES" });
}
function T() {
    i.h.dispatch({ type: "USER_SETTINGS_ACCOUNT_CLEAR_ERRORS" });
}
