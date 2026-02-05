"use strict";
n.d(t, {
    $I: () => g,
    Ch: () => y,
    Cw: () => _,
    F7: () => N,
    IM: () => b,
    U6: () => A,
    U_: () => p,
    Uo: () => f,
    VG: () => I,
    WR: () => T,
    _e: () => R,
    dM: () => S,
    fw: () => O,
    gt: () => h,
    pZ: () => C,
    x8: () => v,
    yu: () => m,
    zq: () => E,
});
var r = n(562465),
    i = n(506774),
    a = n(582754),
    s = n(73153),
    o = n(976860),
    l = n(830215),
    u = n(652215),
    c = n(516780),
    d = n(985018);
function _() {
    s.h.dispatch({ type: "USER_SETTINGS_ACCOUNT_INIT" });
}
function f() {
    s.h.dispatch({ type: "USER_SETTINGS_ACCOUNT_CLOSE" });
}
function p(e, t) {
    let n = t ? u.Rsh.DELETE_ACCOUNT : u.Rsh.DISABLE_ACCOUNT;
    return r.Bo.post({ url: n, body: { password: e }, oldFormErrors: !0, rejectWithError: !1 }).then(() => {
        l.A.logoutInternal(), (0, o.pX)(u.BVt.DEFAULT_LOGGED_OUT);
    });
}
async function h(e) {
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
function m(e) {
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
        newPassword: p,
        globalName: m,
        legacyUsername: g,
        nameplate: E,
        primaryGuildId: A,
        displayNameStyles: I,
    } = e;
    s.h.dispatch({ type: "USER_SETTINGS_ACCOUNT_SUBMIT" });
    let T = {
        username: t,
        email: r,
        email_token: a,
        password: o,
        avatar: l,
        avatar_description: d,
        avatar_id: _,
        discriminator: n,
        global_name: m,
        legacy_username: g,
        new_password: p,
    };
    void 0 !== f && (T.avatar_decoration_sku_id = f?.skuId ?? null),
        void 0 !== E && (T.nameplate_sku_id = E?.skuId ?? null),
        void 0 !== A && (T.primary_guild_id = A),
        null != I
            ? ((T.display_name_font_id = I.fontId),
              (T.display_name_effect_id = I.effectId),
              (T.display_name_colors = I.colors))
            : null === I &&
              ((T.display_name_font_id = null), (T.display_name_effect_id = null), (T.display_name_colors = null));
    let y = i.w.get(u.Xlh),
        S = (0, c.oH)();
    null != S && null != y && ((T.push_provider = S), (T.push_token = y));
    let v = i.w.get(u.Ahp);
    return (
        null != c.vz && null != v && ((T.push_voip_provider = c.vz), (T.push_voip_token = v)),
        h(T).then(
            (e) => (
                s.h.dispatch({ type: "USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS" }),
                (null != l || null != _) && s.h.dispatch({ type: "RECENT_AVATARS_UPDATE" }),
                e
            ),
            (e) => (s.h.dispatch({ type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE", errors: e.body }), e),
        )
    );
}
function g(e) {
    return r.Bo.post({ url: u.Rsh.USER_HARVEST, body: { backends: e }, oldFormErrors: !0, rejectWithError: !1 });
}
function E(e) {
    s.h.dispatch({ type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR", avatar: e }),
        null == e ? a.OR.announce(d.intl.string(d.t["f1+oNk"])) : a.OR.announce(d.intl.string(d.t.NstziV));
}
function A(e) {
    s.h.dispatch({ type: "USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME", globalName: e });
}
function I(e) {
    s.h.dispatch({ type: "USER_SETTINGS_ACCOUNT_SET_PENDING_LEGACY_USERNAME_DISABLED", legacyUsernameDisabled: e });
}
function T(e) {
    s.h.dispatch({ type: "USER_SETTINGS_ACCOUNT_SET_PENDING_COLLECTIBLES_ITEM", item: e });
}
function y(e) {
    s.h.dispatch({ type: "USER_SETTINGS_SET_PENDING_PRIMARY_GUILD_ID", primaryGuildId: e });
}
function S(e) {
    s.h.dispatch({ type: "USER_SETTINGS_ACCOUNT_SET_PENDING_DISPLAY_NAME_STYLES", displayNameStyles: e });
}
function v() {
    s.h.dispatch({ type: "USER_SETTINGS_CLEAR_ERRORS" });
}
function C() {
    s.h.dispatch({ type: "USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES" });
}
function b() {
    s.h.dispatch({ type: "USER_SETTINGS_RESET_ALL_PENDING" });
}
function N() {
    s.h.dispatch({ type: "USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM" });
}
function R() {
    s.h.dispatch({ type: "USER_SETTINGS_ACCOUNT_RESET_PENDING_LEGACY_USERNAME_DISABLED" });
}
function O() {
    s.h.dispatch({ type: "USER_SETTINGS_RESET_PENDING_PRIMARY_GUILD_CHANGES" });
}
