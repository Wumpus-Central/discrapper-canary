"use strict";
n.d(t, { GL: () => o, IM: () => E, JJ: () => d, RE: () => _, V2: () => c, go: () => u, x8: () => A });
var i = n(636537),
    r = n(228366),
    a = n(77257),
    s = n(61310),
    l = n(652215);
async function o(e, t) {
    let {
        nick: n,
        avatar: o,
        avatarDescription: d,
        avatarId: c,
        avatarDecoration: u,
        nameplate: _,
        displayNameStyles: E,
        avatarOriginalMd5: A,
    } = t;
    if (null == e) throw Error("Need guildId");
    r.h.dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT", guildId: e });
    let h = {
        nick: n,
        avatar: o,
        avatar_description: d,
        avatar_id: c,
        avatar_decoration_sku_id: void 0 !== u ? (u?.skuId ?? null) : void 0,
        collectibles: void 0 !== _ ? { nameplate: null === _ ? null : { sku_id: _.skuId } } : void 0,
        display_name_font_id: void 0 !== E ? (null !== E ? E.fontId : null) : void 0,
        display_name_effect_id: void 0 !== E ? (null !== E ? E.effectId : null) : void 0,
        display_name_colors: void 0 !== E ? (null !== E ? E.colors : null) : void 0,
    };
    try {
        let t = await i.Bo.patch({
                url: l.Rsh.SET_GUILD_MEMBER(e),
                body: h,
                headers: a.A.buildHeadersForMd5({ [s.f.USER_GUILD_PROFILE_AVATAR]: A }),
                oldFormErrors: !0,
                rejectWithError: !1,
            }),
            n = t.body;
        return (
            r.h.dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT_SUCCESS", guildId: e }),
            r.h.dispatch({ type: "GUILD_MEMBER_PROFILE_UPDATE", guildMember: n, guildId: e }),
            (null != o || null != c) && r.h.dispatch({ type: "RECENT_AVATARS_UPDATE" }),
            t
        );
    } catch (n) {
        let t = n.body;
        return (
            t?.username != null && ((t.nick = t.username), delete t.username),
            r.h.dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT_FAILURE", guildId: e, errors: n.body }),
            n
        );
    }
}
function d(e) {
    r.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_GUILD", guildId: e });
}
function c(e) {
    r.h.dispatch({ type: "USER_PROFILE_SETTINGS_INIT", guildId: e });
}
function u() {
    r.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES" });
}
function _() {
    r.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_PROFILE_CHANGES" });
}
function E() {
    r.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_CHANGES" });
}
function A() {
    r.h.dispatch({ type: "USER_PROFILE_SETTINGS_CLEAR_ERRORS" });
}
