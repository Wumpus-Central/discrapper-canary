n.d(t, {
    Cf: () => p,
    Fq: () => l,
    HP: () => o,
    I5: () => c,
    ID: () => h,
    IO: () => E,
    It: () => u,
    W3: () => y,
    b9: () => I,
    cV: () => d,
    g_: () => _,
    iq: () => s,
    pG: () => v,
    sr: () => m,
    xn: () => f,
    z5: () => g
}),
    n(411104);
var i = n(544891),
    r = n(570140);
n(37234);
var a = n(981631);
async function s(e, t) {
    let { nick: n, avatar: s, avatarDecoration: o } = t;
    if (null == e) throw Error('Need guildId');
    r.Z.dispatch({ type: 'GUILD_IDENTITY_SETTINGS_SUBMIT' });
    let l = {
        nick: n,
        avatar: s,
        avatar_decoration_id: null === o ? null : null == o ? void 0 : o.id,
        avatar_decoration_sku_id: null === o ? null : null == o ? void 0 : o.skuId
    };
    try {
        let t = await i.tn.patch({
            url: a.ANM.SET_GUILD_MEMBER(e),
            body: l,
            oldFormErrors: !0,
            rejectWithError: !1
        });
        return (
            r.Z.dispatch({ type: 'GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS' }),
            r.Z.dispatch({
                type: 'GUILD_MEMBER_PROFILE_UPDATE',
                guildMember: t.body,
                guildId: e
            }),
            t
        );
    } catch (t) {
        let e = t.body;
        return (
            (null == e ? void 0 : e.username) != null && ((e.nick = e.username), delete e.username),
            r.Z.dispatch({
                type: 'GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE',
                errors: t.body
            }),
            t
        );
    }
}
function o(e) {
    r.Z.dispatch({
        type: 'GUILD_IDENTITY_SETTINGS_SET_GUILD',
        guild: e
    });
}
function l(e, t) {
    r.Z.dispatch({
        type: 'GUILD_IDENTITY_SETTINGS_INIT',
        guild: e,
        analyticsLocations: t
    });
}
function u() {
    r.Z.dispatch({ type: 'GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM' });
}
function c(e) {
    r.Z.dispatch({
        type: 'GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR',
        avatar: e
    });
}
function d(e) {
    r.Z.dispatch({
        type: 'GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR_DECORATION',
        avatarDecoration: e
    });
}
function f(e) {
    r.Z.dispatch({
        type: 'GUILD_IDENTITY_SETTINGS_SET_PENDING_PROFILE_EFFECT_ID',
        profileEffectId: e
    });
}
function _(e) {
    r.Z.dispatch({
        type: 'GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER',
        banner: e
    });
}
function p(e) {
    r.Z.dispatch({
        type: 'GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO',
        bio: e
    });
}
function h(e) {
    r.Z.dispatch({
        type: 'GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS',
        pronouns: e
    });
}
function m(e) {
    r.Z.dispatch({
        type: 'GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME',
        nickname: e
    });
}
function g(e) {
    r.Z.dispatch({
        type: 'GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS',
        themeColors: e
    });
}
function E() {
    r.Z.dispatch({ type: 'GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES' });
}
function v() {
    r.Z.dispatch({ type: 'GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES' });
}
function y() {
    r.Z.dispatch({ type: 'GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING' });
}
function I() {
    r.Z.dispatch({ type: 'GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS' });
}
