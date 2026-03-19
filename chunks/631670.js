n.d(t, {
    $I: () => m,
    Cw: () => c,
    F7: () => I,
    IM: () => E,
    KD: () => h,
    U_: () => A,
    Uo: () => u,
    _L: () => _,
    _e: () => f,
    fw: () => C,
    pZ: () => p,
    x8: () => g,
});
var i = n(562465),
    a = n(506774),
    r = n(73153),
    l = n(976860);
n(624826);
var s = n(830215);
n(252452);
var o = n(652215),
    d = n(516780);
function c() {
    r.h.dispatch({ type: "USER_PROFILE_SETTINGS_INIT" });
}
function u() {
    r.h.dispatch({ type: "USER_PROFILE_SETTINGS_CLOSE" });
}
function A(e, t) {
    let n = t ? o.Rsh.DELETE_ACCOUNT : o.Rsh.DISABLE_ACCOUNT;
    return i.Bo.post({ url: n, body: { password: e }, oldFormErrors: !0, rejectWithError: !1 }).then(() => {
        s.A.logoutInternal(), (0, l.pX)(o.BVt.DEFAULT_LOGGED_OUT);
    });
}
async function h(e) {
    let t = await i.Bo.patch({ url: o.Rsh.ME, oldFormErrors: !0, body: e, rejectWithError: !1 }),
        n = t.body;
    if (n.token) {
        let t = n.token;
        delete n.token,
            r.h.dispatch({ type: "UPDATE_TOKEN", token: t, userId: n.id }),
            e?.password != null && e?.new_password != null && r.h.dispatch({ type: "PASSWORD_UPDATED", userId: n.id });
    }
    return r.h.dispatch({ type: "CURRENT_USER_UPDATE", user: n }), t;
}
function _(e) {
    let {
        username: t,
        discriminator: n,
        email: i,
        emailToken: l,
        password: s,
        avatar: c,
        avatarDescription: u,
        avatarId: A,
        avatarDecoration: _,
        newPassword: m,
        globalName: g,
        legacyUsername: p,
        nameplate: E,
        primaryGuildId: I,
        displayNameStyles: f,
    } = e;
    r.h.dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT" });
    let C = {
        username: t,
        email: i,
        email_token: l,
        password: s,
        avatar: c,
        avatar_description: u,
        avatar_id: A,
        discriminator: n,
        global_name: g,
        legacy_username: p,
        new_password: m,
    };
    void 0 !== _ && (C.avatar_decoration_sku_id = _?.skuId ?? null),
        void 0 !== E && (C.nameplate_sku_id = E?.skuId ?? null),
        void 0 !== I && (C.primary_guild_id = I),
        null != f
            ? ((C.display_name_font_id = f.fontId),
              (C.display_name_effect_id = f.effectId),
              (C.display_name_colors = f.colors))
            : null === f &&
              ((C.display_name_font_id = null), (C.display_name_effect_id = null), (C.display_name_colors = null));
    let T = a.w.get(o.Xlh),
        N = (0, d.oH)();
    null != N && null != T && ((C.push_provider = N), (C.push_token = T));
    let S = a.w.get(o.Ahp);
    return (
        null != d.vz && null != S && ((C.push_voip_provider = d.vz), (C.push_voip_token = S)),
        h(C).then(
            (e) => (
                r.h.dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT_SUCCESS" }),
                (null != c || null != A) && r.h.dispatch({ type: "RECENT_AVATARS_UPDATE" }),
                e
            ),
            (e) => (r.h.dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT_FAILURE", errors: e.body }), e),
        )
    );
}
function m(e) {
    return i.Bo.post({ url: o.Rsh.USER_HARVEST, body: { backends: e }, oldFormErrors: !0, rejectWithError: !1 });
}
function g() {
    r.h.dispatch({ type: "USER_PROFILE_SETTINGS_CLEAR_ERRORS" });
}
function p() {
    r.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES" });
}
function E() {
    r.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_CHANGES" });
}
function I() {
    r.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_AND_CLOSE_FORM" });
}
function f() {
    r.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_LEGACY_USERNAME_DISABLED" });
}
function C() {
    r.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_PRIMARY_GUILD_CHANGES" });
}
