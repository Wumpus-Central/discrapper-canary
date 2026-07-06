"use strict";
n.d(t, {
    $I: () => m,
    Cw: () => _,
    F7: () => T,
    IM: () => I,
    KD: () => E,
    U_: () => f,
    Uo: () => h,
    _L: () => p,
    _e: () => S,
    fw: () => N,
    pZ: () => A,
    x8: () => g,
});
var i = n(636537),
    r = n(506774),
    s = n(228366),
    a = n(77257),
    o = n(61310),
    l = n(976860);
n(624826);
var u = n(830215);
n(252452);
var c = n(652215),
    d = n(516780);
function _() {
    s.h.dispatch({ type: "USER_PROFILE_SETTINGS_INIT" });
}
function h() {
    s.h.dispatch({ type: "USER_PROFILE_SETTINGS_CLOSE" });
}
function f(e, t) {
    let n = t ? c.Rsh.DELETE_ACCOUNT : c.Rsh.DISABLE_ACCOUNT;
    return i.Bo.post({ url: n, body: { password: e }, oldFormErrors: !0, rejectWithError: !1 }).then(() => {
        u.A.logoutInternal(), (0, l.pX)(c.BVt.DEFAULT_LOGGED_OUT);
    });
}
async function E(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = await i.Bo.patch({ url: c.Rsh.ME, oldFormErrors: !0, body: e, headers: t.headers, rejectWithError: !1 }),
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
        emailToken: l,
        password: u,
        avatar: _,
        avatarDescription: h,
        avatarId: f,
        avatarDecoration: p,
        newPassword: m,
        globalName: g,
        legacyUsername: A,
        nameplate: I,
        primaryGuildId: T,
        displayNameStyles: S,
        avatarOriginalMd5: N,
    } = e;
    s.h.dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT" });
    let C = {
        username: t,
        email: i,
        email_token: l,
        password: u,
        avatar: _,
        avatar_description: h,
        avatar_id: f,
        discriminator: n,
        global_name: g,
        legacy_username: A,
        new_password: m,
    };
    void 0 !== p && (C.avatar_decoration_sku_id = p?.skuId ?? null),
        void 0 !== I && (C.nameplate_sku_id = I?.skuId ?? null),
        void 0 !== T && (C.primary_guild_id = T),
        null != S
            ? ((C.display_name_font_id = S.fontId),
              (C.display_name_effect_id = S.effectId),
              (C.display_name_colors = S.colors))
            : null === S &&
              ((C.display_name_font_id = null), (C.display_name_effect_id = null), (C.display_name_colors = null));
    let y = r.w.get(c.Xlh),
        O = (0, d.oH)();
    null != O && null != y && ((C.push_provider = O), (C.push_token = y));
    let R = r.w.get(c.Ahp);
    return (
        null != d.vz && null != R && ((C.push_voip_provider = d.vz), (C.push_voip_token = R)),
        E(C, { headers: a.A.buildHeadersForMd5({ [o.f.USER_DEFAULT_PROFILE_AVATAR]: N }) }).then(
            (e) => (
                s.h.dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT_SUCCESS" }),
                (null != _ || null != f) && s.h.dispatch({ type: "RECENT_AVATARS_UPDATE" }),
                e
            ),
            (e) => (s.h.dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT_FAILURE", errors: e.body }), e),
        )
    );
}
function m(e) {
    return i.Bo.post({ url: c.Rsh.USER_HARVEST, body: { backends: e }, oldFormErrors: !0, rejectWithError: !1 });
}
function g() {
    s.h.dispatch({ type: "USER_PROFILE_SETTINGS_CLEAR_ERRORS" });
}
function A() {
    s.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES" });
}
function I() {
    s.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_CHANGES" });
}
function T() {
    s.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_AND_CLOSE_FORM" });
}
function S() {
    s.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_LEGACY_USERNAME_DISABLED" });
}
function N() {
    s.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_PRIMARY_GUILD_CHANGES" });
}
