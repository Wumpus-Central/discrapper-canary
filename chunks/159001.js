t.d(E, { GL: () => n, IM: () => I, JJ: () => o, RE: () => s, V2: () => S, go: () => r, x8: () => c });
var e = t(636537),
    d = t(228366),
    i = t(268429),
    l = t(61310),
    a = t(652215);
async function n(_, E) {
    let {
        nick: t,
        avatar: n,
        avatarDescription: o,
        avatarId: S,
        avatarDecoration: r,
        nameplate: s,
        displayNameStyles: I,
        vadColors: c,
        avatarOriginalMd5: u,
    } = E;
    if (null == _) throw Error("Need guildId");
    d.h.dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT", guildId: _ });
    let R = {
        nick: t,
        avatar: n,
        avatar_description: o,
        avatar_id: S,
        avatar_decoration_sku_id: void 0 !== r ? (r?.skuId ?? null) : void 0,
        collectibles: void 0 !== s ? { nameplate: null === s ? null : { sku_id: s.skuId } } : void 0,
        display_name_font_id: void 0 !== I ? (null !== I ? I.fontId : null) : void 0,
        display_name_effect_id: void 0 !== I ? (null !== I ? I.effectId : null) : void 0,
        display_name_colors: void 0 !== I ? (null !== I ? I.colors : null) : void 0,
        vad_colors: c,
    };
    try {
        let E = await e.Bo.patch({
                url: a.Rsh.SET_GUILD_MEMBER(_),
                body: R,
                headers: i.A.buildHeadersForMd5({ [l.f.USER_GUILD_PROFILE_AVATAR]: u }),
                oldFormErrors: !0,
                rejectWithError: !1,
            }),
            t = E.body;
        return (
            d.h.dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT_SUCCESS", guildId: _ }),
            d.h.dispatch({ type: "GUILD_MEMBER_PROFILE_UPDATE", guildMember: t, guildId: _ }),
            (null != n || null != S) && d.h.dispatch({ type: "RECENT_AVATARS_UPDATE" }),
            E
        );
    } catch (t) {
        let E = t.body;
        return (
            E?.username != null && ((E.nick = E.username), delete E.username),
            d.h.dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT_FAILURE", guildId: _, errors: t.body }),
            t
        );
    }
}
function o(_) {
    d.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_GUILD", guildId: _ });
}
function S(_) {
    d.h.dispatch({ type: "USER_PROFILE_SETTINGS_INIT", guildId: _ });
}
function r() {
    d.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES" });
}
function s() {
    d.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_PROFILE_CHANGES" });
}
function I() {
    d.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_CHANGES" });
}
function c() {
    d.h.dispatch({ type: "USER_PROFILE_SETTINGS_CLEAR_ERRORS" });
}
