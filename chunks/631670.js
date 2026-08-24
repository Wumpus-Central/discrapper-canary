E.d(t, {
    $I: () => c,
    Cw: () => p,
    F7: () => N,
    IM: () => U,
    KD: () => u,
    U_: () => h,
    Uo: () => T,
    _L: () => R,
    _e: () => y,
    fw: () => f,
    pZ: () => A,
    x8: () => I,
});
var e = E(636537),
    i = E(506774),
    n = E(228366),
    d = E(268429),
    a = E(61310),
    r = E(870600),
    o = E(976860);
E(624826);
var S = E(830215);
E(252452);
var l = E(652215),
    s = E(516780);
function p() {
    n.h.dispatch({ type: "USER_PROFILE_SETTINGS_INIT" });
}
function T() {
    n.h.dispatch({ type: "USER_PROFILE_SETTINGS_CLOSE" });
}
function h(_, t) {
    let E = t ? l.Rsh.DELETE_ACCOUNT : l.Rsh.DISABLE_ACCOUNT;
    return e.Bo.post({ url: E, body: { password: _ }, oldFormErrors: !0, rejectWithError: (0, e.fT)() }).then(() => {
        S.A.logoutInternal(), (0, o.pX)(l.BVt.DEFAULT_LOGGED_OUT);
    });
}
async function u(_) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        E = await e.Bo.patch({
            url: l.Rsh.ME,
            oldFormErrors: !0,
            body: _,
            headers: t.headers,
            rejectWithError: (0, e.fT)(),
        }),
        i = E.body;
    if (i.token) {
        let t = i.token;
        delete i.token,
            n.h.dispatch({ type: "UPDATE_TOKEN", token: t, userId: i.id }),
            _?.password != null && _?.new_password != null && n.h.dispatch({ type: "PASSWORD_UPDATED", userId: i.id });
    }
    return n.h.dispatch({ type: "CURRENT_USER_UPDATE", user: i }), E;
}
function R(_) {
    let {
        username: t,
        discriminator: E,
        email: e,
        emailToken: o,
        password: S,
        avatar: p,
        avatarDescription: T,
        avatarId: h,
        avatarDecoration: R,
        newPassword: c,
        globalName: I,
        legacyUsername: A,
        nameplate: U,
        primaryGuildId: N,
        displayNameStyles: y,
        typingIndicatorStyle: f,
        avatarOriginalMd5: D,
    } = _;
    n.h.dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT" });
    let L = {
        username: t,
        email: e,
        email_token: o,
        password: S,
        avatar: p,
        avatar_description: T,
        avatar_id: h,
        discriminator: E,
        global_name: I,
        legacy_username: A,
        new_password: c,
    };
    void 0 !== R && (L.avatar_decoration_sku_id = R?.skuId ?? null),
        void 0 !== U && (L.nameplate_sku_id = U?.skuId ?? null),
        void 0 !== N && (L.primary_guild_id = N),
        null != y
            ? ((L.display_name_font_id = y.fontId),
              (L.display_name_effect_id = y.effectId),
              (L.display_name_colors = y.colors))
            : null === y &&
              ((L.display_name_font_id = null), (L.display_name_effect_id = null), (L.display_name_colors = null)),
        void 0 !== f && (L.typing_indicator_style = null != f ? (0, r.El)(f) : null);
    let O = i.w.get(l.Xlh),
        C = (0, s.oH)();
    null != C && null != O && ((L.push_provider = C), (L.push_token = O));
    let G = i.w.get(l.Ahp);
    return (
        null != s.vz && null != G && ((L.push_voip_provider = s.vz), (L.push_voip_token = G)),
        u(L, { headers: d.A.buildHeadersForMd5({ [a.f.USER_DEFAULT_PROFILE_AVATAR]: D }) }).then(
            (_) => (
                n.h.dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT_SUCCESS" }),
                (null != p || null != h) && n.h.dispatch({ type: "RECENT_AVATARS_UPDATE" }),
                _
            ),
            (_) => (n.h.dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT_FAILURE", errors: _.body }), _),
        )
    );
}
function c(_) {
    return e.Bo.post({
        url: l.Rsh.USER_HARVEST,
        body: { backends: _ },
        oldFormErrors: !0,
        rejectWithError: (0, e.fT)(),
    });
}
function I() {
    n.h.dispatch({ type: "USER_PROFILE_SETTINGS_CLEAR_ERRORS" });
}
function A() {
    n.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES" });
}
function U() {
    n.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_CHANGES" });
}
function N() {
    n.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_AND_CLOSE_FORM" });
}
function y() {
    n.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_LEGACY_USERNAME_DISABLED" });
}
function f() {
    n.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_PRIMARY_GUILD_CHANGES" });
}
