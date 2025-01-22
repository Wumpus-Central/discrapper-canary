r.d(n, {
    CM: function () {
        return b;
    },
    Cf: function () {
        return v;
    },
    ID: function () {
        return y;
    },
    Xz: function () {
        return S;
    },
    Z: function () {
        return _;
    },
    c_: function () {
        return T;
    },
    f4: function () {
        return A;
    },
    g_: function () {
        return E;
    },
    ho: function () {
        return g;
    },
    pG: function () {
        return m;
    },
    rf: function () {
        return C;
    },
    x3: function () {
        return N;
    },
    z5: function () {
        return I;
    }
});
var i = r(544891),
    a = r(570140),
    o = r(881052),
    s = r(957730),
    l = r(695346),
    u = r(594174),
    c = r(626135),
    d = r(956664),
    f = r(981631),
    p = r(474936);
function h(e) {
    c.default.track(f.rMx.PREMIUM_FEATURE_TRY_OUT, {
        feature_name: e,
        feature_tier: p.h1.PREMIUM_STANDARD
    });
}
async function _(e, n) {
    var r, c, d;
    let p = null === (r = u.default.getCurrentUser()) || void 0 === r ? void 0 : r.id;
    if (null == p) return;
    let h = l.dN.getSetting();
    null != e.bio && h && (e.bio = s.ZP.parse(void 0, e.bio).content);
    try {
        a.Z.dispatch({
            type: 'USER_PROFILE_UPDATE_START',
            userId: p
        });
        let r = await i.tn.patch({
            url: null != n ? f.ANM.USER_GUILD_PROFILE(n, f.ME) : f.ANM.USER_PROFILE(f.ME),
            body: e,
            rejectWithError: !1
        });
        if (r.ok) {
            let e = null === (c = r.body.profile_effect) || void 0 === c ? void 0 : c.id,
                n = null === (d = r.body.profile_effect) || void 0 === d ? void 0 : d.expires_at;
            a.Z.dispatch({
                type: 'USER_PROFILE_UPDATE_SUCCESS',
                userId: p,
                profileEffectId: e,
                profileEffectExpiresAt: n,
                ...r.body
            });
        } else {
            let e = new o.Hx(r);
            a.Z.dispatch({
                type: 'USER_PROFILE_UPDATE_FAILURE',
                errors: r.body,
                apiError: e
            });
        }
        return r;
    } catch (n) {
        let e = new o.Hx(n);
        return (
            a.Z.dispatch({
                type: 'USER_PROFILE_UPDATE_FAILURE',
                errors: {},
                apiError: e
            }),
            n
        );
    }
}
function m() {
    a.Z.dispatch({ type: 'USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES' });
}
function g(e) {
    (null == e ? void 0 : e.startsWith('https:')) === !0
        ? fetch(e)
              .then((e) => e.blob())
              .then((e) => (0, d.fD)(e))
              .then((e) => E(e))
        : null != e && E(e);
}
function E(e) {
    a.Z.dispatch({
        type: 'USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER',
        banner: e
    });
}
function v(e) {
    a.Z.dispatch({
        type: 'USER_SETTINGS_ACCOUNT_SET_PENDING_BIO',
        bio: e
    });
}
function y(e) {
    a.Z.dispatch({
        type: 'USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS',
        pronouns: e
    });
}
function b(e) {
    a.Z.dispatch({
        type: 'USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR',
        color: e
    });
}
function I(e) {
    a.Z.dispatch({
        type: 'USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS',
        themeColors: e
    });
}
function T(e) {
    a.Z.dispatch({
        type: 'USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR',
        avatar: e
    }),
        h(p.QP.ANIMATED_AVATAR);
}
function S(e) {
    a.Z.dispatch({
        type: 'USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION',
        avatarDecoration: e
    }),
        h(p.QP.AVATAR_DECORATION);
}
function A(e) {
    a.Z.dispatch({
        type: 'USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER',
        banner: e
    }),
        h(p.QP.PROFILE_BANNER);
}
function C(e) {
    a.Z.dispatch({
        type: 'USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS',
        themeColors: e
    }),
        h(p.QP.PROFILE_THEME_COLOR);
}
function N(e) {
    a.Z.dispatch({
        type: 'USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_PRESET',
        preset: e
    }),
        h(p.QP.PRESET);
}
