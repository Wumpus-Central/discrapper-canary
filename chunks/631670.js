"use strict";
n.d(t, {
    $I: () => E,
    Cw: () => d,
    F7: () => I,
    IM: () => A,
    KD: () => h,
    U_: () => f,
    Uo: () => _,
    _L: () => p,
    _e: () => T,
    fw: () => S,
    pZ: () => g,
    x8: () => m,
});
var i = n(636537),
    r = n(506774),
    s = n(228366),
    a = n(77257),
    o = n(976860);
n(624826);
var l = n(830215);
n(252452);
var u = n(652215),
    c = n(516780);
function d() {
    s.h.dispatch({ type: "USER_PROFILE_SETTINGS_INIT" });
}
function _() {
    s.h.dispatch({ type: "USER_PROFILE_SETTINGS_CLOSE" });
}
function f(e, t) {
    let n = t ? u.Rsh.DELETE_ACCOUNT : u.Rsh.DISABLE_ACCOUNT;
    return i.Bo.post({ url: n, body: { password: e }, oldFormErrors: !0, rejectWithError: !1 }).then(() => {
        l.A.logoutInternal(), (0, o.pX)(u.BVt.DEFAULT_LOGGED_OUT);
    });
}
async function h(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = await i.Bo.patch({ url: u.Rsh.ME, oldFormErrors: !0, body: e, headers: t.headers, rejectWithError: !1 }),
        r = n.body;
    if (r.token) {
        let t = r.token;
        delete r.token,
            s.h.dispatch({ type: "UPDATE_TOKEN", token: t, userId: r.id }),
            e?.password != null && e?.new_password != null && s.h.dispatch({ type: "PASSWORD_UPDATED", userId: r.id });
    }
    return s.h.dispatch({ type: "CURRENT_USER_UPDATE", user: r }), n;
}
function p(e) {
    let {
        username: t,
        discriminator: n,
        email: i,
        emailToken: o,
        password: l,
        avatar: d,
        avatarDescription: _,
        avatarId: f,
        avatarDecoration: p,
        newPassword: E,
        globalName: m,
        legacyUsername: g,
        nameplate: A,
        primaryGuildId: I,
        displayNameStyles: T,
        avatarOriginalMd5: S,
    } = e;
    s.h.dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT" });
    let N = {
        username: t,
        email: i,
        email_token: o,
        password: l,
        avatar: d,
        avatar_description: _,
        avatar_id: f,
        discriminator: n,
        global_name: m,
        legacy_username: g,
        new_password: E,
    };
    void 0 !== p && (N.avatar_decoration_sku_id = p?.skuId ?? null),
        void 0 !== A && (N.nameplate_sku_id = A?.skuId ?? null),
        void 0 !== I && (N.primary_guild_id = I),
        null != T
            ? ((N.display_name_font_id = T.fontId),
              (N.display_name_effect_id = T.effectId),
              (N.display_name_colors = T.colors))
            : null === T &&
              ((N.display_name_font_id = null), (N.display_name_effect_id = null), (N.display_name_colors = null));
    let y = r.w.get(u.Xlh),
        C = (0, c.oH)();
    null != C && null != y && ((N.push_provider = C), (N.push_token = y));
    let v = r.w.get(u.Ahp);
    return (
        null != c.vz && null != v && ((N.push_voip_provider = c.vz), (N.push_voip_token = v)),
        h(N, { headers: a.A.buildHeadersForMd5(S) }).then(
            (e) => (
                s.h.dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT_SUCCESS" }),
                (null != d || null != f) && s.h.dispatch({ type: "RECENT_AVATARS_UPDATE" }),
                e
            ),
            (e) => (s.h.dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT_FAILURE", errors: e.body }), e),
        )
    );
}
function E(e) {
    return i.Bo.post({ url: u.Rsh.USER_HARVEST, body: { backends: e }, oldFormErrors: !0, rejectWithError: !1 });
}
function m() {
    s.h.dispatch({ type: "USER_PROFILE_SETTINGS_CLEAR_ERRORS" });
}
function g() {
    s.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES" });
}
function A() {
    s.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_CHANGES" });
}
function I() {
    s.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_AND_CLOSE_FORM" });
}
function T() {
    s.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_LEGACY_USERNAME_DISABLED" });
}
function S() {
    s.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_PRIMARY_GUILD_CHANGES" });
}
