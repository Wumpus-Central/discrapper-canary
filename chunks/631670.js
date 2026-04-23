n.d(t, {
    $I: () => _,
    Cw: () => d,
    F7: () => E,
    IM: () => x,
    KD: () => h,
    U_: () => m,
    Uo: () => u,
    _L: () => f,
    _e: () => A,
    fw: () => v,
    pZ: () => p,
    x8: () => g,
});
var l = n(562465),
    a = n(506774),
    i = n(73153),
    r = n(976860);
n(624826);
var s = n(830215);
n(252452);
var o = n(652215),
    c = n(516780);
function d() {
    i.h.dispatch({ type: "USER_PROFILE_SETTINGS_INIT" });
}
function u() {
    i.h.dispatch({ type: "USER_PROFILE_SETTINGS_CLOSE" });
}
function m(e, t) {
    let n = t ? o.Rsh.DELETE_ACCOUNT : o.Rsh.DISABLE_ACCOUNT;
    return l.Bo.post({ url: n, body: { password: e }, oldFormErrors: !0, rejectWithError: !1 }).then(() => {
        s.A.logoutInternal(), (0, r.pX)(o.BVt.DEFAULT_LOGGED_OUT);
    });
}
async function h(e) {
    let t = await l.Bo.patch({ url: o.Rsh.ME, oldFormErrors: !0, body: e, rejectWithError: !1 }),
        n = t.body;
    if (n.token) {
        let t = n.token;
        delete n.token,
            i.h.dispatch({ type: "UPDATE_TOKEN", token: t, userId: n.id }),
            e?.password != null && e?.new_password != null && i.h.dispatch({ type: "PASSWORD_UPDATED", userId: n.id });
    }
    return i.h.dispatch({ type: "CURRENT_USER_UPDATE", user: n }), t;
}
function f(e) {
    let {
        username: t,
        discriminator: n,
        email: l,
        emailToken: r,
        password: s,
        avatar: d,
        avatarDescription: u,
        avatarId: m,
        avatarDecoration: f,
        newPassword: _,
        globalName: g,
        legacyUsername: p,
        nameplate: x,
        primaryGuildId: E,
        displayNameStyles: A,
    } = e;
    i.h.dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT" });
    let v = {
        username: t,
        email: l,
        email_token: r,
        password: s,
        avatar: d,
        avatar_description: u,
        avatar_id: m,
        discriminator: n,
        global_name: g,
        legacy_username: p,
        new_password: _,
    };
    void 0 !== f && (v.avatar_decoration_sku_id = f?.skuId ?? null),
        void 0 !== x && (v.nameplate_sku_id = x?.skuId ?? null),
        void 0 !== E && (v.primary_guild_id = E),
        null != A
            ? ((v.display_name_font_id = A.fontId),
              (v.display_name_effect_id = A.effectId),
              (v.display_name_colors = A.colors))
            : null === A &&
              ((v.display_name_font_id = null), (v.display_name_effect_id = null), (v.display_name_colors = null));
    let I = a.w.get(o.Xlh),
        b = (0, c.oH)();
    null != b && null != I && ((v.push_provider = b), (v.push_token = I));
    let j = a.w.get(o.Ahp);
    return (
        null != c.vz && null != j && ((v.push_voip_provider = c.vz), (v.push_voip_token = j)),
        h(v).then(
            (e) => (
                i.h.dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT_SUCCESS" }),
                (null != d || null != m) && i.h.dispatch({ type: "RECENT_AVATARS_UPDATE" }),
                e
            ),
            (e) => (i.h.dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT_FAILURE", errors: e.body }), e),
        )
    );
}
function _(e) {
    return l.Bo.post({ url: o.Rsh.USER_HARVEST, body: { backends: e }, oldFormErrors: !0, rejectWithError: !1 });
}
function g() {
    i.h.dispatch({ type: "USER_PROFILE_SETTINGS_CLEAR_ERRORS" });
}
function p() {
    i.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES" });
}
function x() {
    i.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_CHANGES" });
}
function E() {
    i.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_AND_CLOSE_FORM" });
}
function A() {
    i.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_LEGACY_USERNAME_DISABLED" });
}
function v() {
    i.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_PRIMARY_GUILD_CHANGES" });
}
