r.d(n, {
    Cf: function () {
        return m;
    },
    Fq: function () {
        return c;
    },
    HP: function () {
        return u;
    },
    I5: function () {
        return f;
    },
    ID: function () {
        return g;
    },
    IO: function () {
        return y;
    },
    It: function () {
        return d;
    },
    W3: function () {
        return I;
    },
    b9: function () {
        return T;
    },
    cV: function () {
        return p;
    },
    g_: function () {
        return _;
    },
    iq: function () {
        return l;
    },
    pG: function () {
        return b;
    },
    sr: function () {
        return E;
    },
    xn: function () {
        return h;
    },
    z5: function () {
        return v;
    }
});
var i = r(411104);
var a = r(544891),
    o = r(570140);
r(37234);
var s = r(981631);
async function l(e, n) {
    let { nick: r, avatar: i, avatarDecoration: l } = n;
    if (null == e) throw Error('Need guildId');
    o.Z.dispatch({ type: 'GUILD_IDENTITY_SETTINGS_SUBMIT' });
    let u = {
        nick: r,
        avatar: i,
        avatar_decoration_id: null === l ? null : null == l ? void 0 : l.id,
        avatar_decoration_sku_id: null === l ? null : null == l ? void 0 : l.skuId
    };
    try {
        let n = await a.tn.patch({
            url: s.ANM.SET_GUILD_MEMBER(e),
            body: u,
            oldFormErrors: !0,
            rejectWithError: !1
        });
        return (
            o.Z.dispatch({ type: 'GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS' }),
            o.Z.dispatch({
                type: 'GUILD_MEMBER_PROFILE_UPDATE',
                guildMember: n.body,
                guildId: e
            }),
            n
        );
    } catch (n) {
        let e = n.body;
        return (
            (null == e ? void 0 : e.username) != null && ((e.nick = e.username), delete e.username),
            o.Z.dispatch({
                type: 'GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE',
                errors: n.body
            }),
            n
        );
    }
}
function u(e) {
    o.Z.dispatch({
        type: 'GUILD_IDENTITY_SETTINGS_SET_GUILD',
        guild: e
    });
}
function c(e, n) {
    o.Z.dispatch({
        type: 'GUILD_IDENTITY_SETTINGS_INIT',
        guild: e,
        analyticsLocations: n
    });
}
function d() {
    o.Z.dispatch({ type: 'GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM' });
}
function f(e) {
    o.Z.dispatch({
        type: 'GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR',
        avatar: e
    });
}
function p(e) {
    o.Z.dispatch({
        type: 'GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR_DECORATION',
        avatarDecoration: e
    });
}
function h(e) {
    o.Z.dispatch({
        type: 'GUILD_IDENTITY_SETTINGS_SET_PENDING_PROFILE_EFFECT_ID',
        profileEffectId: e
    });
}
function _(e) {
    o.Z.dispatch({
        type: 'GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER',
        banner: e
    });
}
function m(e) {
    o.Z.dispatch({
        type: 'GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO',
        bio: e
    });
}
function g(e) {
    o.Z.dispatch({
        type: 'GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS',
        pronouns: e
    });
}
function E(e) {
    o.Z.dispatch({
        type: 'GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME',
        nickname: e
    });
}
function v(e) {
    o.Z.dispatch({
        type: 'GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS',
        themeColors: e
    });
}
function y() {
    o.Z.dispatch({ type: 'GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES' });
}
function b() {
    o.Z.dispatch({ type: 'GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES' });
}
function I() {
    o.Z.dispatch({ type: 'GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING' });
}
function T() {
    o.Z.dispatch({ type: 'GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS' });
}
