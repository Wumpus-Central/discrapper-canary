n.d(t, { GL: () => l, IM: () => u, JJ: () => s, RE: () => d, V2: () => c, go: () => o, x8: () => _ });
var r = n(562465),
    i = n(73153),
    a = n(652215);
async function l(e, t) {
    let {
        nick: n,
        avatar: l,
        avatarDescription: s,
        avatarId: c,
        avatarDecoration: o,
        nameplate: d,
        displayNameStyles: u,
    } = t;
    if (null == e) throw Error("Need guildId");
    i.h.dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT", guildId: e });
    let _ = {
        nick: n,
        avatar: l,
        avatar_description: s,
        avatar_id: c,
        avatar_decoration_sku_id: void 0 !== o ? (o?.skuId ?? null) : void 0,
        collectibles: void 0 !== d ? { nameplate: null === d ? null : { sku_id: d.skuId } } : void 0,
        display_name_font_id: void 0 !== u ? (null !== u ? u.fontId : null) : void 0,
        display_name_effect_id: void 0 !== u ? (null !== u ? u.effectId : null) : void 0,
        display_name_colors: void 0 !== u ? (null !== u ? u.colors : null) : void 0,
    };
    try {
        let t = await r.Bo.patch({ url: a.Rsh.SET_GUILD_MEMBER(e), body: _, oldFormErrors: !0, rejectWithError: !1 }),
            n = t.body;
        return (
            i.h.dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT_SUCCESS", guildId: e }),
            i.h.dispatch({ type: "GUILD_MEMBER_PROFILE_UPDATE", guildMember: n, guildId: e }),
            (null != l || null != c) && i.h.dispatch({ type: "RECENT_AVATARS_UPDATE" }),
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
function s(e) {
    i.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_GUILD", guildId: e });
}
function c(e) {
    i.h.dispatch({ type: "USER_PROFILE_SETTINGS_INIT", guildId: e });
}
function o() {
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
