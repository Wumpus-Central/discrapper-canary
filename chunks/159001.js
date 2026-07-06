"use strict";
n.d(t, { GL: () => l, IM: () => h, JJ: () => u, RE: () => _, V2: () => c, go: () => d, x8: () => f });
var i = n(636537),
    r = n(228366),
    s = n(77257),
    a = n(61310),
    o = n(652215);
async function l(e, t) {
    let {
        nick: n,
        avatar: l,
        avatarDescription: u,
        avatarId: c,
        avatarDecoration: d,
        nameplate: _,
        displayNameStyles: h,
        avatarOriginalMd5: f,
    } = t;
    if (null == e) throw Error("Need guildId");
    r.h.dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT", guildId: e });
    let E = {
        nick: n,
        avatar: l,
        avatar_description: u,
        avatar_id: c,
        avatar_decoration_sku_id: void 0 !== d ? (d?.skuId ?? null) : void 0,
        collectibles: void 0 !== _ ? { nameplate: null === _ ? null : { sku_id: _.skuId } } : void 0,
        display_name_font_id: void 0 !== h ? (null !== h ? h.fontId : null) : void 0,
        display_name_effect_id: void 0 !== h ? (null !== h ? h.effectId : null) : void 0,
        display_name_colors: void 0 !== h ? (null !== h ? h.colors : null) : void 0,
    };
    try {
        let t = await i.Bo.patch({
                url: o.Rsh.SET_GUILD_MEMBER(e),
                body: E,
                headers: s.A.buildHeadersForMd5({ [a.f.USER_GUILD_PROFILE_AVATAR]: f }),
                oldFormErrors: !0,
                rejectWithError: !1,
            }),
            n = t.body;
        return (
            r.h.dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT_SUCCESS", guildId: e }),
            r.h.dispatch({ type: "GUILD_MEMBER_PROFILE_UPDATE", guildMember: n, guildId: e }),
            (null != l || null != c) && r.h.dispatch({ type: "RECENT_AVATARS_UPDATE" }),
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
function u(e) {
    r.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_GUILD", guildId: e });
}
function c(e) {
    r.h.dispatch({ type: "USER_PROFILE_SETTINGS_INIT", guildId: e });
}
function d() {
    r.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES" });
}
function _() {
    r.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_PROFILE_CHANGES" });
}
function h() {
    r.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_CHANGES" });
}
function f() {
    r.h.dispatch({ type: "USER_PROFILE_SETTINGS_CLEAR_ERRORS" });
}
