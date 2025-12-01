n.d(t, {
    Cf: () => p,
    Fq: () => l,
    HP: () => s,
    I5: () => u,
    ID: () => _,
    IO: () => E,
    It: () => c,
    N_: () => g,
    W3: () => y,
    ZB: () => d,
    b9: () => O,
    g_: () => f,
    iq: () => o,
    pG: () => b,
    sr: () => m,
    z5: () => h,
}),
    n(415506);
var r = n(544891),
    i = n(570140),
    a = n(981631);
async function o(e, t) {
    var n;
    let {
        nick: o,
        avatar: s,
        avatarDescription: l,
        avatarId: c,
        avatarDecoration: u,
        nameplate: d,
        displayNameStyles: f,
    } = t;
    if (null == e) throw Error("Need guildId");
    i.Z.dispatch({ type: "GUILD_IDENTITY_SETTINGS_SUBMIT" });
    let p = {
        nick: o,
        avatar: s,
        avatar_description: l,
        avatar_id: c,
        avatar_decoration_sku_id: void 0 !== u ? (null != (n = null == u ? void 0 : u.skuId) ? n : null) : void 0,
        collectibles: void 0 !== d ? { nameplate: null === d ? null : { sku_id: d.skuId } } : void 0,
        display_name_font_id: void 0 !== f ? (null !== f ? f.fontId : null) : void 0,
        display_name_effect_id: void 0 !== f ? (null !== f ? f.effectId : null) : void 0,
        display_name_colors: void 0 !== f ? (null !== f ? f.colors : null) : void 0,
    };
    try {
        let t = await r.tn.patch({
                url: a.ANM.SET_GUILD_MEMBER(e),
                body: p,
                oldFormErrors: !0,
                rejectWithError: !1,
            }),
            n = t.body;
        return (
            i.Z.dispatch({ type: "GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS" }),
            i.Z.dispatch({
                type: "GUILD_MEMBER_PROFILE_UPDATE",
                guildMember: n,
                guildId: e,
            }),
            (null != s || null != c) && i.Z.dispatch({ type: "RECENT_AVATARS_UPDATE" }),
            t
        );
    } catch (t) {
        let e = t.body;
        return (
            (null == e ? void 0 : e.username) != null && ((e.nick = e.username), delete e.username),
            i.Z.dispatch({
                type: "GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE",
                errors: t.body,
            }),
            t
        );
    }
}
function s(e) {
    i.Z.dispatch({
        type: "GUILD_IDENTITY_SETTINGS_SET_GUILD",
        guild: e,
    });
}
function l(e) {
    i.Z.dispatch({
        type: "GUILD_IDENTITY_SETTINGS_INIT",
        guild: e,
    });
}
function c() {
    i.Z.dispatch({ type: "GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM" });
}
function u(e) {
    i.Z.dispatch({
        type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR",
        avatar: e,
    });
}
function d(e) {
    i.Z.dispatch({
        type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_COLLECTIBLES_ITEM",
        item: e,
    });
}
function f(e) {
    i.Z.dispatch({
        type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER",
        banner: e,
    });
}
function p(e) {
    i.Z.dispatch({
        type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO",
        bio: e,
    });
}
function _(e) {
    i.Z.dispatch({
        type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS",
        pronouns: e,
    });
}
function m(e) {
    i.Z.dispatch({
        type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME",
        nickname: e,
    });
}
function h(e) {
    i.Z.dispatch({
        type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS",
        themeColors: e,
    });
}
function g(e) {
    i.Z.dispatch({
        type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_DISPLAY_NAME_STYLES",
        displayNameStyles: e,
    });
}
function E() {
    i.Z.dispatch({ type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES" });
}
function b() {
    i.Z.dispatch({ type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES" });
}
function y() {
    i.Z.dispatch({ type: "GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING" });
}
function O() {
    i.Z.dispatch({ type: "GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS" });
}
