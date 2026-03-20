"use strict";
n.d(t, {
    $I: () => m,
    Cw: () => u,
    F7: () => y,
    IM: () => g,
    KD: () => _,
    U_: () => h,
    Uo: () => d,
    _L: () => f,
    _e: () => v,
    fw: () => x,
    pZ: () => b,
    x8: () => p,
});
var r = n(562465),
    i = n(506774),
    a = n(73153),
    l = n(976860);
n(624826);
var s = n(830215);
n(252452);
var o = n(652215),
    c = n(516780);
function u() {
    a.h.dispatch({ type: "USER_PROFILE_SETTINGS_INIT" });
}
function d() {
    a.h.dispatch({ type: "USER_PROFILE_SETTINGS_CLOSE" });
}
function h(e, t) {
    let n = t ? o.Rsh.DELETE_ACCOUNT : o.Rsh.DISABLE_ACCOUNT;
    return r.Bo.post({ url: n, body: { password: e }, oldFormErrors: !0, rejectWithError: !1 }).then(() => {
        s.A.logoutInternal(), (0, l.pX)(o.BVt.DEFAULT_LOGGED_OUT);
    });
}
async function _(e) {
    let t = await r.Bo.patch({ url: o.Rsh.ME, oldFormErrors: !0, body: e, rejectWithError: !1 }),
        n = t.body;
    if (n.token) {
        let t = n.token;
        delete n.token,
            a.h.dispatch({ type: "UPDATE_TOKEN", token: t, userId: n.id }),
            e?.password != null && e?.new_password != null && a.h.dispatch({ type: "PASSWORD_UPDATED", userId: n.id });
    }
    return a.h.dispatch({ type: "CURRENT_USER_UPDATE", user: n }), t;
}
function f(e) {
    let {
        username: t,
        discriminator: n,
        email: r,
        emailToken: l,
        password: s,
        avatar: u,
        avatarDescription: d,
        avatarId: h,
        avatarDecoration: f,
        newPassword: m,
        globalName: p,
        legacyUsername: b,
        nameplate: g,
        primaryGuildId: y,
        displayNameStyles: v,
    } = e;
    a.h.dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT" });
    let x = {
        username: t,
        email: r,
        email_token: l,
        password: s,
        avatar: u,
        avatar_description: d,
        avatar_id: h,
        discriminator: n,
        global_name: p,
        legacy_username: b,
        new_password: m,
    };
    void 0 !== f && (x.avatar_decoration_sku_id = f?.skuId ?? null),
        void 0 !== g && (x.nameplate_sku_id = g?.skuId ?? null),
        void 0 !== y && (x.primary_guild_id = y),
        null != v
            ? ((x.display_name_font_id = v.fontId),
              (x.display_name_effect_id = v.effectId),
              (x.display_name_colors = v.colors))
            : null === v &&
              ((x.display_name_font_id = null), (x.display_name_effect_id = null), (x.display_name_colors = null));
    let E = i.w.get(o.Xlh),
        A = (0, c.oH)();
    null != A && null != E && ((x.push_provider = A), (x.push_token = E));
    let S = i.w.get(o.Ahp);
    return (
        null != c.vz && null != S && ((x.push_voip_provider = c.vz), (x.push_voip_token = S)),
        _(x).then(
            (e) => (
                a.h.dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT_SUCCESS" }),
                (null != u || null != h) && a.h.dispatch({ type: "RECENT_AVATARS_UPDATE" }),
                e
            ),
            (e) => (a.h.dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT_FAILURE", errors: e.body }), e),
        )
    );
}
function m(e) {
    return r.Bo.post({ url: o.Rsh.USER_HARVEST, body: { backends: e }, oldFormErrors: !0, rejectWithError: !1 });
}
function p() {
    a.h.dispatch({ type: "USER_PROFILE_SETTINGS_CLEAR_ERRORS" });
}
function b() {
    a.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES" });
}
function g() {
    a.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_CHANGES" });
}
function y() {
    a.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_AND_CLOSE_FORM" });
}
function v() {
    a.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_LEGACY_USERNAME_DISABLED" });
}
function x() {
    a.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_PRIMARY_GUILD_CHANGES" });
}
