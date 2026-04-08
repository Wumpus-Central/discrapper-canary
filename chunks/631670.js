n.d(t, {
    $I: () => g,
    Cw: () => c,
    F7: () => v,
    IM: () => A,
    KD: () => m,
    U_: () => _,
    Uo: () => u,
    _L: () => p,
    _e: () => b,
    fw: () => f,
    pZ: () => h,
    x8: () => x,
});
var l = n(562465),
    a = n(506774),
    i = n(73153),
    r = n(976860);
n(624826);
var s = n(830215);
n(252452);
var d = n(652215),
    o = n(516780);
function c() {
    i.h.dispatch({ type: "USER_PROFILE_SETTINGS_INIT" });
}
function u() {
    i.h.dispatch({ type: "USER_PROFILE_SETTINGS_CLOSE" });
}
function _(e, t) {
    let n = t ? d.Rsh.DELETE_ACCOUNT : d.Rsh.DISABLE_ACCOUNT;
    return l.Bo.post({ url: n, body: { password: e }, oldFormErrors: !0, rejectWithError: !1 }).then(() => {
        s.A.logoutInternal(), (0, r.pX)(d.BVt.DEFAULT_LOGGED_OUT);
    });
}
async function m(e) {
    let t = await l.Bo.patch({ url: d.Rsh.ME, oldFormErrors: !0, body: e, rejectWithError: !1 }),
        n = t.body;
    if (n.token) {
        let t = n.token;
        delete n.token,
            i.h.dispatch({ type: "UPDATE_TOKEN", token: t, userId: n.id }),
            e?.password != null && e?.new_password != null && i.h.dispatch({ type: "PASSWORD_UPDATED", userId: n.id });
    }
    return i.h.dispatch({ type: "CURRENT_USER_UPDATE", user: n }), t;
}
function p(e) {
    let {
        username: t,
        discriminator: n,
        email: l,
        emailToken: r,
        password: s,
        avatar: c,
        avatarDescription: u,
        avatarId: _,
        avatarDecoration: p,
        newPassword: g,
        globalName: x,
        legacyUsername: h,
        nameplate: A,
        primaryGuildId: v,
        displayNameStyles: b,
    } = e;
    i.h.dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT" });
    let f = {
        username: t,
        email: l,
        email_token: r,
        password: s,
        avatar: c,
        avatar_description: u,
        avatar_id: _,
        discriminator: n,
        global_name: x,
        legacy_username: h,
        new_password: g,
    };
    void 0 !== p && (f.avatar_decoration_sku_id = p?.skuId ?? null),
        void 0 !== A && (f.nameplate_sku_id = A?.skuId ?? null),
        void 0 !== v && (f.primary_guild_id = v),
        null != b
            ? ((f.display_name_font_id = b.fontId),
              (f.display_name_effect_id = b.effectId),
              (f.display_name_colors = b.colors))
            : null === b &&
              ((f.display_name_font_id = null), (f.display_name_effect_id = null), (f.display_name_colors = null));
    let T = a.w.get(d.Xlh),
        E = (0, o.oH)();
    null != E && null != T && ((f.push_provider = E), (f.push_token = T));
    let S = a.w.get(d.Ahp);
    return (
        null != o.vz && null != S && ((f.push_voip_provider = o.vz), (f.push_voip_token = S)),
        m(f).then(
            (e) => (
                i.h.dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT_SUCCESS" }),
                (null != c || null != _) && i.h.dispatch({ type: "RECENT_AVATARS_UPDATE" }),
                e
            ),
            (e) => (i.h.dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT_FAILURE", errors: e.body }), e),
        )
    );
}
function g(e) {
    return l.Bo.post({ url: d.Rsh.USER_HARVEST, body: { backends: e }, oldFormErrors: !0, rejectWithError: !1 });
}
function x() {
    i.h.dispatch({ type: "USER_PROFILE_SETTINGS_CLEAR_ERRORS" });
}
function h() {
    i.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES" });
}
function A() {
    i.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_CHANGES" });
}
function v() {
    i.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_AND_CLOSE_FORM" });
}
function b() {
    i.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_LEGACY_USERNAME_DISABLED" });
}
function f() {
    i.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_PRIMARY_GUILD_CHANGES" });
}
