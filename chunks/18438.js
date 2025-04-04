n.d(t, {
    Cf: () => p,
    Fq: () => l,
    HP: () => s,
    I5: () => u,
    ID: () => h,
    IO: () => E,
    It: () => c,
    W3: () => y,
    b9: () => v,
    cV: () => d,
    g_: () => _,
    iq: () => a,
    pG: () => b,
    sr: () => m,
    xn: () => f,
    z5: () => g
}),
    n(411104);
var r = n(544891),
    i = n(570140);
n(37234);
var o = n(981631);
async function a(e, t) {
    let { nick: n, avatar: a, avatarDescription: s, avatarId: l, avatarDecoration: c } = t;
    if (null == e) throw Error('Need guildId');
    i.Z.dispatch({ type: 'GUILD_IDENTITY_SETTINGS_SUBMIT' });
    let u = {
        nick: n,
        avatar: a,
        avatar_description: s,
        avatar_id: l,
        avatar_decoration_id: null === c ? null : null == c ? void 0 : c.id,
        avatar_decoration_sku_id: null === c ? null : null == c ? void 0 : c.skuId
    };
    try {
        let t = await r.tn.patch({
                url: o.ANM.SET_GUILD_MEMBER(e),
                body: u,
                oldFormErrors: !0,
                rejectWithError: !1
            }),
            n = t.body;
        return (
            i.Z.dispatch({ type: 'GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS' }),
            i.Z.dispatch({
                type: 'GUILD_MEMBER_PROFILE_UPDATE',
                guildMember: n,
                guildId: e
            }),
            (null != a || null != l) && i.Z.dispatch({ type: 'RECENT_AVATARS_UPDATE' }),
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
function s(e) {
    i.Z.dispatch({
        type: 'GUILD_IDENTITY_SETTINGS_SET_GUILD',
        guild: e
    });
}
function l(e, t) {
    i.Z.dispatch({
        type: 'GUILD_IDENTITY_SETTINGS_INIT',
        guild: e,
        analyticsLocations: t
    });
}
function c() {
    i.Z.dispatch({ type: 'GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM' });
}
function u(e) {
    i.Z.dispatch({
        type: 'GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR',
        avatar: e
    });
}
function d(e) {
    i.Z.dispatch({
        type: 'GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR_DECORATION',
        avatarDecoration: e
    });
}
function f(e) {
    i.Z.dispatch({
        type: 'GUILD_IDENTITY_SETTINGS_SET_PENDING_PROFILE_EFFECT_ID',
        profileEffectId: e
    });
}
function _(e) {
    i.Z.dispatch({
        type: 'GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER',
        banner: e
    });
}
function p(e) {
    i.Z.dispatch({
        type: 'GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO',
        bio: e
    });
}
function h(e) {
    i.Z.dispatch({
        type: 'GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS',
        pronouns: e
    });
}
function m(e) {
    i.Z.dispatch({
        type: 'GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME',
        nickname: e
    });
}
function g(e) {
    i.Z.dispatch({
        type: 'GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS',
        themeColors: e
    });
}
function E() {
    i.Z.dispatch({ type: 'GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES' });
}
function b() {
    i.Z.dispatch({ type: 'GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES' });
}
function y() {
    i.Z.dispatch({ type: 'GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING' });
}
function v() {
    i.Z.dispatch({ type: 'GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS' });
}
