n.d(t, { GL: () => l, IM: () => u, JJ: () => s, RE: () => d, V2: () => o, go: () => c, x8: () => _ });
var r = n(636537),
    a = n(228366),
    i = n(652215);
async function l(e, t) {
    let {
        nick: n,
        avatar: l,
        avatarDescription: s,
        avatarId: o,
        avatarDecoration: c,
        nameplate: d,
        displayNameStyles: u,
    } = t;
    if (null == e) throw Error("Need guildId");
    a.h.dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT", guildId: e });
    let _ = {
        nick: n,
        avatar: l,
        avatar_description: s,
        avatar_id: o,
        avatar_decoration_sku_id: void 0 !== c ? (c?.skuId ?? null) : void 0,
        collectibles: void 0 !== d ? { nameplate: null === d ? null : { sku_id: d.skuId } } : void 0,
        display_name_font_id: void 0 !== u ? (null !== u ? u.fontId : null) : void 0,
        display_name_effect_id: void 0 !== u ? (null !== u ? u.effectId : null) : void 0,
        display_name_colors: void 0 !== u ? (null !== u ? u.colors : null) : void 0,
    };
    try {
        let t = await r.Bo.patch({ url: i.Rsh.SET_GUILD_MEMBER(e), body: _, oldFormErrors: !0, rejectWithError: !1 }),
            n = t.body;
        return (
            a.h.dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT_SUCCESS", guildId: e }),
            a.h.dispatch({ type: "GUILD_MEMBER_PROFILE_UPDATE", guildMember: n, guildId: e }),
            (null != l || null != o) && a.h.dispatch({ type: "RECENT_AVATARS_UPDATE" }),
            t
        );
    } catch (n) {
        let t = n.body;
        return (
            t?.username != null && ((t.nick = t.username), delete t.username),
            a.h.dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT_FAILURE", guildId: e, errors: n.body }),
            n
        );
    }
}
function s(e) {
    a.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_GUILD", guildId: e });
}
function o(e) {
    a.h.dispatch({ type: "USER_PROFILE_SETTINGS_INIT", guildId: e });
}
function c() {
    a.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES" });
}
function d() {
    a.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_PROFILE_CHANGES" });
}
function u() {
    a.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_CHANGES" });
}
function _() {
    a.h.dispatch({ type: "USER_PROFILE_SETTINGS_CLEAR_ERRORS" });
}
