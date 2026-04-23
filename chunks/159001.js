"use strict";
n.d(t, { GL: () => s, IM: () => u, JJ: () => l, RE: () => d, V2: () => o, go: () => c, x8: () => _ });
var a = n(562465),
    i = n(73153),
    r = n(652215);
async function s(e, t) {
    let {
        nick: n,
        avatar: s,
        avatarDescription: l,
        avatarId: o,
        avatarDecoration: c,
        nameplate: d,
        displayNameStyles: u,
    } = t;
    if (null == e) throw Error("Need guildId");
    i.h.dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT", guildId: e });
    let _ = {
        nick: n,
        avatar: s,
        avatar_description: l,
        avatar_id: o,
        avatar_decoration_sku_id: void 0 !== c ? (c?.skuId ?? null) : void 0,
        collectibles: void 0 !== d ? { nameplate: null === d ? null : { sku_id: d.skuId } } : void 0,
        display_name_font_id: void 0 !== u ? (null !== u ? u.fontId : null) : void 0,
        display_name_effect_id: void 0 !== u ? (null !== u ? u.effectId : null) : void 0,
        display_name_colors: void 0 !== u ? (null !== u ? u.colors : null) : void 0,
    };
    try {
        let t = await a.Bo.patch({ url: r.Rsh.SET_GUILD_MEMBER(e), body: _, oldFormErrors: !0, rejectWithError: !1 }),
            n = t.body;
        return (
            i.h.dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT_SUCCESS", guildId: e }),
            i.h.dispatch({ type: "GUILD_MEMBER_PROFILE_UPDATE", guildMember: n, guildId: e }),
            (null != s || null != o) && i.h.dispatch({ type: "RECENT_AVATARS_UPDATE" }),
            t
        );
    } catch (n) {
        let t = n.body;
        return (
            t?.username != null && ((t.nick = t.username), delete t.username),
            i.h.dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT_FAILURE", guildId: e, errors: n.body }),
            n
        );
    }
}
function l(e) {
    i.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_GUILD", guildId: e });
}
function o(e) {
    i.h.dispatch({ type: "USER_PROFILE_SETTINGS_INIT", guildId: e });
}
function c() {
    i.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES" });
}
function d() {
    i.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_PROFILE_CHANGES" });
}
function u() {
    i.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_CHANGES" });
}
function _() {
    i.h.dispatch({ type: "USER_PROFILE_SETTINGS_CLEAR_ERRORS" });
}
