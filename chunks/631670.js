"use strict";
n.d(t, {
    $I: () => f,
    Cw: () => _,
    F7: () => g,
    IM: () => m,
    KD: () => h,
    U_: () => A,
    Uo: () => E,
    _L: () => I,
    _e: () => S,
    fw: () => N,
    pZ: () => T,
    x8: () => p,
});
var i = n(636537),
    r = n(506774),
    a = n(228366),
    s = n(77257),
    l = n(61310),
    o = n(976860);
n(624826);
var d = n(830215);
n(252452);
var c = n(652215),
    u = n(516780);
function _() {
    a.h.dispatch({ type: "USER_PROFILE_SETTINGS_INIT" });
}
function E() {
    a.h.dispatch({ type: "USER_PROFILE_SETTINGS_CLOSE" });
}
function A(e, t) {
    let n = t ? c.Rsh.DELETE_ACCOUNT : c.Rsh.DISABLE_ACCOUNT;
    return i.Bo.post({ url: n, body: { password: e }, oldFormErrors: !0, rejectWithError: !1 }).then(() => {
        d.A.logoutInternal(), (0, o.pX)(c.BVt.DEFAULT_LOGGED_OUT);
    });
}
async function h(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = await i.Bo.patch({ url: c.Rsh.ME, oldFormErrors: !0, body: e, headers: t.headers, rejectWithError: !1 }),
        r = n.body;
    if (r.token) {
        let t = r.token;
        delete r.token,
            a.h.dispatch({ type: "UPDATE_TOKEN", token: t, userId: r.id }),
            e?.password != null && e?.new_password != null && a.h.dispatch({ type: "PASSWORD_UPDATED", userId: r.id });
    }
    return a.h.dispatch({ type: "CURRENT_USER_UPDATE", user: r }), n;
}
function I(e) {
    let {
        username: t,
        discriminator: n,
        email: i,
        emailToken: o,
        password: d,
        avatar: _,
        avatarDescription: E,
        avatarId: A,
        avatarDecoration: I,
        newPassword: f,
        globalName: p,
        legacyUsername: T,
        nameplate: m,
        primaryGuildId: g,
        displayNameStyles: S,
        avatarOriginalMd5: N,
    } = e;
    a.h.dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT" });
    let C = {
        username: t,
        email: i,
        email_token: o,
        password: d,
        avatar: _,
        avatar_description: E,
        avatar_id: A,
        discriminator: n,
        global_name: p,
        legacy_username: T,
        new_password: f,
    };
    void 0 !== I && (C.avatar_decoration_sku_id = I?.skuId ?? null),
        void 0 !== m && (C.nameplate_sku_id = m?.skuId ?? null),
        void 0 !== g && (C.primary_guild_id = g),
        null != S
            ? ((C.display_name_font_id = S.fontId),
              (C.display_name_effect_id = S.effectId),
              (C.display_name_colors = S.colors))
            : null === S &&
              ((C.display_name_font_id = null), (C.display_name_effect_id = null), (C.display_name_colors = null));
    let O = r.w.get(c.Xlh),
        R = (0, u.oH)();
    null != R && null != O && ((C.push_provider = R), (C.push_token = O));
    let L = r.w.get(c.Ahp);
    return (
        null != u.vz && null != L && ((C.push_voip_provider = u.vz), (C.push_voip_token = L)),
        h(C, { headers: s.A.buildHeadersForMd5({ [l.f.USER_DEFAULT_PROFILE_AVATAR]: N }) }).then(
            (e) => (
                a.h.dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT_SUCCESS" }),
                (null != _ || null != A) && a.h.dispatch({ type: "RECENT_AVATARS_UPDATE" }),
                e
            ),
            (e) => (a.h.dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT_FAILURE", errors: e.body }), e),
        )
    );
}
function f(e) {
    return i.Bo.post({ url: c.Rsh.USER_HARVEST, body: { backends: e }, oldFormErrors: !0, rejectWithError: !1 });
}
function p() {
    a.h.dispatch({ type: "USER_PROFILE_SETTINGS_CLEAR_ERRORS" });
}
function T() {
    a.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES" });
}
function m() {
    a.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_CHANGES" });
}
function g() {
    a.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_AND_CLOSE_FORM" });
}
function S() {
    a.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_LEGACY_USERNAME_DISABLED" });
}
function N() {
    a.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_PRIMARY_GUILD_CHANGES" });
}
