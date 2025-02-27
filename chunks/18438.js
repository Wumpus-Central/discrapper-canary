n.d(t, {
    Cf: () => g,
    Fq: () => u,
    HP: () => c,
    ID: () => m,
    IO: () => b,
    It: () => d,
    Re: () => f,
    W3: () => O,
    b9: () => S,
    cV: () => _,
    g_: () => h,
    iq: () => l,
    pG: () => y,
    sr: () => E,
    xn: () => p,
    z5: () => v
}),
    n(411104);
var r = n(544891),
    i = n(570140);
n(37234);
var o = n(626135),
    a = n(768581),
    s = n(981631);
async function l(e, t) {
    let { nick: n, avatar: l, avatarDescription: c, avatarId: u, avatarDecoration: d } = t;
    if (null == e) throw Error('Need guildId');
    i.Z.dispatch({ type: 'GUILD_IDENTITY_SETTINGS_SUBMIT' });
    let f = {
        nick: n,
        avatar: l,
        avatar_description: c,
        avatar_id: u,
        avatar_decoration_id: null === d ? null : null == d ? void 0 : d.id,
        avatar_decoration_sku_id: null === d ? null : null == d ? void 0 : d.skuId
    };
    try {
        let t = await r.tn.patch({
                url: s.ANM.SET_GUILD_MEMBER(e),
                body: f,
                oldFormErrors: !0,
                rejectWithError: !1
            }),
            n = t.body;
        return (
            o.default.track(s.rMx.USER_AVATAR_UPDATED, {
                animated: (0, a.xR)(n.avatar),
                is_guild_profile: !0
            }),
            i.Z.dispatch({ type: 'GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS' }),
            i.Z.dispatch({
                type: 'GUILD_MEMBER_PROFILE_UPDATE',
                guildMember: t.body,
                guildId: e
            }),
            (null != l || null != u) && i.Z.dispatch({ type: 'RECENT_AVATARS_UPDATE' }),
            t
        );
    } catch (t) {
        let e = t.body;
        return (
            (null == e ? void 0 : e.username) != null && ((e.nick = e.username), delete e.username),
            i.Z.dispatch({
                type: 'GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE',
                errors: t.body
            }),
            t
        );
    }
}
function c(e) {
    i.Z.dispatch({
        type: 'GUILD_IDENTITY_SETTINGS_SET_GUILD',
        guild: e
    });
}
function u(e, t) {
    i.Z.dispatch({
        type: 'GUILD_IDENTITY_SETTINGS_INIT',
        guild: e,
        analyticsLocations: t
    });
}
function d() {
    i.Z.dispatch({ type: 'GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM' });
}
function f(e) {
    i.Z.dispatch({
        type: 'GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR_V2',
        avatar: e
    });
}
function _(e) {
    i.Z.dispatch({
        type: 'GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR_DECORATION',
        avatarDecoration: e
    });
}
function p(e) {
    i.Z.dispatch({
        type: 'GUILD_IDENTITY_SETTINGS_SET_PENDING_PROFILE_EFFECT_ID',
        profileEffectId: e
    });
}
function h(e) {
    i.Z.dispatch({
        type: 'GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER',
        banner: e
    });
}
function g(e) {
    i.Z.dispatch({
        type: 'GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO',
        bio: e
    });
}
function m(e) {
    i.Z.dispatch({
        type: 'GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS',
        pronouns: e
    });
}
function E(e) {
    i.Z.dispatch({
        type: 'GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME',
        nickname: e
    });
}
function v(e) {
    i.Z.dispatch({
        type: 'GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS',
        themeColors: e
    });
}
function b() {
    i.Z.dispatch({ type: 'GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES' });
}
function y() {
    i.Z.dispatch({ type: 'GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES' });
}
function O() {
    i.Z.dispatch({ type: 'GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING' });
}
function S() {
    i.Z.dispatch({ type: 'GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS' });
}
