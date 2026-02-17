"use strict";
n.d(t, {
    $I: () => E,
    Ch: () => S,
    Cw: () => _,
    F7: () => R,
    IM: () => N,
    KD: () => p,
    U6: () => I,
    U_: () => h,
    Uo: () => f,
    VG: () => T,
    WR: () => y,
    _L: () => g,
    _e: () => O,
    dM: () => v,
    fw: () => D,
    pZ: () => b,
    x8: () => C,
    zq: () => A,
});
var r = n(562465),
    i = n(506774),
    a = n(582754),
    s = n(73153),
    o = n(976860);
n(624826);
var l = n(830215);
n(252452);
var u = n(652215),
    c = n(516780),
    d = n(985018);
function _() {
    s.h.dispatch({ type: "USER_PROFILE_SETTINGS_INIT" });
}
function f() {
    s.h.dispatch({ type: "USER_PROFILE_SETTINGS_CLOSE" });
}
function h(e, t) {
    let n = t ? u.Rsh.DELETE_ACCOUNT : u.Rsh.DISABLE_ACCOUNT;
    return r.Bo.post({ url: n, body: { password: e }, oldFormErrors: !0, rejectWithError: !1 }).then(() => {
        l.A.logoutInternal(), (0, o.pX)(u.BVt.DEFAULT_LOGGED_OUT);
    });
}
async function p(e) {
    let t = await r.Bo.patch({ url: u.Rsh.ME, oldFormErrors: !0, body: e, rejectWithError: !1 }),
        n = t.body;
    if (n.token) {
        let t = n.token;
        delete n.token,
            s.h.dispatch({ type: "UPDATE_TOKEN", token: t, userId: n.id }),
            e?.password != null && e?.new_password != null && s.h.dispatch({ type: "PASSWORD_UPDATED", userId: n.id });
    }
    return s.h.dispatch({ type: "CURRENT_USER_UPDATE", user: n }), t;
}
function g(e) {
    let {
        username: t,
        discriminator: n,
        email: r,
        emailToken: a,
        password: o,
        avatar: l,
        avatarDescription: d,
        avatarId: _,
        avatarDecoration: f,
        newPassword: h,
        globalName: g,
        legacyUsername: E,
        nameplate: A,
        primaryGuildId: I,
        displayNameStyles: T,
    } = e;
    s.h.dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT" });
    let y = {
        username: t,
        email: r,
        email_token: a,
        password: o,
        avatar: l,
        avatar_description: d,
        avatar_id: _,
        discriminator: n,
        global_name: g,
        legacy_username: E,
        new_password: h,
    };
    void 0 !== f && (y.avatar_decoration_sku_id = f?.skuId ?? null),
        void 0 !== A && (y.nameplate_sku_id = A?.skuId ?? null),
        void 0 !== I && (y.primary_guild_id = I),
        null != T
            ? ((y.display_name_font_id = T.fontId),
              (y.display_name_effect_id = T.effectId),
              (y.display_name_colors = T.colors))
            : null === T &&
              ((y.display_name_font_id = null), (y.display_name_effect_id = null), (y.display_name_colors = null));
    let S = i.w.get(u.Xlh),
        v = (0, c.oH)();
    null != v && null != S && ((y.push_provider = v), (y.push_token = S));
    let C = i.w.get(u.Ahp);
    return (
        null != c.vz && null != C && ((y.push_voip_provider = c.vz), (y.push_voip_token = C)),
        p(y).then(
            (e) => (
                s.h.dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT_SUCCESS" }),
                (null != l || null != _) && s.h.dispatch({ type: "RECENT_AVATARS_UPDATE" }),
                e
            ),
            (e) => (s.h.dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT_FAILURE", errors: e.body }), e),
        )
    );
}
function E(e) {
    return r.Bo.post({ url: u.Rsh.USER_HARVEST, body: { backends: e }, oldFormErrors: !0, rejectWithError: !1 });
}
function A(e) {
    s.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_PENDING_AVATAR", avatar: e }),
        null == e ? a.OR.announce(d.intl.string(d.t["f1+oNk"])) : a.OR.announce(d.intl.string(d.t.NstziV));
}
function I(e) {
    s.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_PENDING_GLOBAL_NAME", globalName: e });
}
function T(e) {
    s.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_PENDING_LEGACY_USERNAME_DISABLED", legacyUsernameDisabled: e });
}
function y(e) {
    s.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_PENDING_COLLECTIBLES_ITEM", item: e });
}
function S(e) {
    s.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_PENDING_PRIMARY_GUILD_ID", primaryGuildId: e });
}
function v(e) {
    s.h.dispatch({ type: "USER_PROFILE_SETTINGS_SET_PENDING_DISPLAY_NAME_STYLES", displayNameStyles: e });
}
function C() {
    s.h.dispatch({ type: "USER_PROFILE_SETTINGS_CLEAR_ERRORS" });
}
function b() {
    s.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES" });
}
function N() {
    s.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_CHANGES" });
}
function R() {
    s.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_AND_CLOSE_FORM" });
}
function O() {
    s.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_LEGACY_USERNAME_DISABLED" });
}
function D() {
    s.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_PRIMARY_GUILD_CHANGES" });
}
