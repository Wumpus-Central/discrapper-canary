E.d(e, { GL: () => o, IM: () => S, JJ: () => s, RE: () => u, V2: () => r, go: () => a, x8: () => c });
var _ = E(636537),
    i = E(73153),
    l = E(268429),
    d = E(61310),
    n = E(652215);
async function o(t, e) {
    let {
        nick: E,
        avatar: o,
        avatarDescription: s,
        avatarId: r,
        avatarDecoration: a,
        nameplate: u,
        displayNameStyles: S,
        vadColors: c,
        avatarOriginalMd5: I,
    } = e;
    if (null == t) throw Error("Need guildId");
    i.h.dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT", guildId: t });
    let R = {
        nick: E,
        avatar: o,
        avatar_description: s,
        avatar_id: r,
        avatar_decoration_sku_id: void 0 !== a ? (a?.skuId ?? null) : void 0,
        collectibles: void 0 !== u ? { nameplate: null === u ? null : { sku_id: u.skuId } } : void 0,
        display_name_font_id: void 0 !== S ? (null !== S ? S.fontId : null) : void 0,
        display_name_effect_id: void 0 !== S ? (null !== S ? S.effectId : null) : void 0,
        display_name_colors: void 0 !== S ? (null !== S ? S.colors : null) : void 0,
        vad_colors: c,
    };
    try {
        let e = await _.Bo.patch({
                url: n.Rsh.SET_GUILD_MEMBER(t),
                body: R,
                headers: l.A.buildHeadersForMd5({ [d.f.USER_GUILD_PROFILE_AVATAR]: I }),
                oldFormErrors: !0,
                rejectWithError: !1,
            }),
            E = e.body;
        return (
            i.h.dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT_SUCCESS", guildId: t }),
            i.h.dispatch({ type: "GUILD_MEMBER_PROFILE_UPDATE", guildMember: E, guildId: t }),
            (null != o || null != r) && i.h.dispatch({ type: "RECENT_AVATARS_UPDATE" }),
            e
        );
    } catch (E) {
        let e = E.body;
        return (
            e?.username != null && ((e.nick = e.username), delete e.username),
            i.h.dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT_FAILURE", guildId: t, errors: E.body }),
            E
        );
    }
}
function s(t) {
    i.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_GUILD", guildId: t });
}
function r(t) {
    i.h.dispatch({ type: "USER_PROFILE_SETTINGS_INIT", guildId: t });
}
function a() {
    i.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES" });
}
function u() {
    i.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_PROFILE_CHANGES" });
}
function S() {
    i.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_CHANGES" });
}
function c() {
    i.h.dispatch({ type: "USER_PROFILE_SETTINGS_CLEAR_ERRORS" });
}
