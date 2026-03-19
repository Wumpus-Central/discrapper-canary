"use strict";
n.d(t, { GL: () => a, IM: () => d, JJ: () => o, RE: () => c, V2: () => l, go: () => u, x8: () => _ });
var r = n(562465),
    i = n(73153),
    s = n(652215);
async function a(e, t) {
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
    i.h.dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT", guildId: e });
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
            i.h.dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT_SUCCESS", guildId: e }),
            i.h.dispatch({ type: "GUILD_MEMBER_PROFILE_UPDATE", guildMember: n, guildId: e }),
            (null != a || null != l) && i.h.dispatch({ type: "RECENT_AVATARS_UPDATE" }),
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
function o(e) {
    i.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_GUILD", guildId: e });
}
function l(e) {
    i.h.dispatch({ type: "USER_PROFILE_SETTINGS_INIT", guildId: e });
}
function u() {
    i.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES" });
}
function c() {
    i.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_PROFILE_CHANGES" });
}
function d() {
    i.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_CHANGES" });
}
function _() {
    i.h.dispatch({ type: "USER_PROFILE_SETTINGS_CLEAR_ERRORS" });
}
