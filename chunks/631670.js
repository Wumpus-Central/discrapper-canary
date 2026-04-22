"use strict";
a.d(t, {
    $I: () => m,
    Cw: () => c,
    F7: () => x,
    IM: () => f,
    KD: () => p,
    U_: () => h,
    Uo: () => u,
    _L: () => _,
    _e: () => v,
    fw: () => A,
    pZ: () => g,
    x8: () => b,
});
var r = a(562465),
    l = a(506774),
    n = a(73153),
    i = a(976860);
a(624826);
var s = a(830215);
a(252452);
var o = a(652215),
    d = a(516780);
function c() {
    n.h.dispatch({ type: "USER_PROFILE_SETTINGS_INIT" });
}
function u() {
    n.h.dispatch({ type: "USER_PROFILE_SETTINGS_CLOSE" });
}
function h(e, t) {
    let a = t ? o.Rsh.DELETE_ACCOUNT : o.Rsh.DISABLE_ACCOUNT;
    return r.Bo.post({ url: a, body: { password: e }, oldFormErrors: !0, rejectWithError: !1 }).then(() => {
        s.A.logoutInternal(), (0, i.pX)(o.BVt.DEFAULT_LOGGED_OUT);
    });
}
async function p(e) {
    let t = await r.Bo.patch({ url: o.Rsh.ME, oldFormErrors: !0, body: e, rejectWithError: !1 }),
        a = t.body;
    if (a.token) {
        let t = a.token;
        delete a.token,
            n.h.dispatch({ type: "UPDATE_TOKEN", token: t, userId: a.id }),
            e?.password != null && e?.new_password != null && n.h.dispatch({ type: "PASSWORD_UPDATED", userId: a.id });
    }
    return n.h.dispatch({ type: "CURRENT_USER_UPDATE", user: a }), t;
}
function _(e) {
    let {
        username: t,
        discriminator: a,
        email: r,
        emailToken: i,
        password: s,
        avatar: c,
        avatarDescription: u,
        avatarId: h,
        avatarDecoration: _,
        newPassword: m,
        globalName: b,
        legacyUsername: g,
        nameplate: f,
        primaryGuildId: x,
        displayNameStyles: v,
    } = e;
    n.h.dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT" });
    let A = {
        username: t,
        email: r,
        email_token: i,
        password: s,
        avatar: c,
        avatar_description: u,
        avatar_id: h,
        discriminator: a,
        global_name: b,
        legacy_username: g,
        new_password: m,
    };
    void 0 !== _ && (A.avatar_decoration_sku_id = _?.skuId ?? null),
        void 0 !== f && (A.nameplate_sku_id = f?.skuId ?? null),
        void 0 !== x && (A.primary_guild_id = x),
        null != v
            ? ((A.display_name_font_id = v.fontId),
              (A.display_name_effect_id = v.effectId),
              (A.display_name_colors = v.colors))
            : null === v &&
              ((A.display_name_font_id = null), (A.display_name_effect_id = null), (A.display_name_colors = null));
    let E = l.w.get(o.Xlh),
        y = (0, d.oH)();
    null != y && null != E && ((A.push_provider = y), (A.push_token = E));
    let j = l.w.get(o.Ahp);
    return (
        null != d.vz && null != j && ((A.push_voip_provider = d.vz), (A.push_voip_token = j)),
        p(A).then(
            (e) => (
                n.h.dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT_SUCCESS" }),
                (null != c || null != h) && n.h.dispatch({ type: "RECENT_AVATARS_UPDATE" }),
                e
            ),
            (e) => (n.h.dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT_FAILURE", errors: e.body }), e),
        )
    );
}
function m(e) {
    return r.Bo.post({ url: o.Rsh.USER_HARVEST, body: { backends: e }, oldFormErrors: !0, rejectWithError: !1 });
}
function b() {
    n.h.dispatch({ type: "USER_PROFILE_SETTINGS_CLEAR_ERRORS" });
}
function g() {
    n.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES" });
}
function f() {
    n.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_CHANGES" });
}
function x() {
    n.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_AND_CLOSE_FORM" });
}
function v() {
    n.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_LEGACY_USERNAME_DISABLED" });
}
function A() {
    n.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_PRIMARY_GUILD_CHANGES" });
}
