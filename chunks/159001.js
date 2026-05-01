"use strict";
n.d(t, { GL: () => o, IM: () => _, JJ: () => l, RE: () => d, V2: () => u, go: () => c, x8: () => f });
var i = n(636537),
    r = n(228366),
    s = n(77257),
    a = n(652215);
async function o(e, t) {
    let {
        nick: n,
        avatar: o,
        avatarDescription: l,
        avatarId: u,
        avatarDecoration: c,
        nameplate: d,
        displayNameStyles: _,
        avatarOriginalMd5: f,
    } = t;
    if (null == e) throw Error("Need guildId");
    r.h.dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT", guildId: e });
    let h = {
        nick: n,
        avatar: o,
        avatar_description: l,
        avatar_id: u,
        avatar_decoration_sku_id: void 0 !== c ? (c?.skuId ?? null) : void 0,
        collectibles: void 0 !== d ? { nameplate: null === d ? null : { sku_id: d.skuId } } : void 0,
        display_name_font_id: void 0 !== _ ? (null !== _ ? _.fontId : null) : void 0,
        display_name_effect_id: void 0 !== _ ? (null !== _ ? _.effectId : null) : void 0,
        display_name_colors: void 0 !== _ ? (null !== _ ? _.colors : null) : void 0,
    };
    try {
        let t = await i.Bo.patch({
                url: a.Rsh.SET_GUILD_MEMBER(e),
                body: h,
                headers: s.A.buildHeadersForMd5(f),
                oldFormErrors: !0,
                rejectWithError: !1,
            }),
            n = t.body;
        return (
            r.h.dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT_SUCCESS", guildId: e }),
            r.h.dispatch({ type: "GUILD_MEMBER_PROFILE_UPDATE", guildMember: n, guildId: e }),
            (null != o || null != u) && r.h.dispatch({ type: "RECENT_AVATARS_UPDATE" }),
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
function l(e) {
    r.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_GUILD", guildId: e });
}
function u(e) {
    r.h.dispatch({ type: "USER_PROFILE_SETTINGS_INIT", guildId: e });
}
function c() {
    r.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES" });
}
function d() {
    r.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_PROFILE_CHANGES" });
}
function _() {
    r.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_CHANGES" });
}
function f() {
    r.h.dispatch({ type: "USER_PROFILE_SETTINGS_CLEAR_ERRORS" });
}
