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
    d = E(228366),
    n = E(268429),
    o = E(61310),
    a = E(870600),
    r = E(976860);
E(624826);
var S = E(830215);
E(252452);
var l = E(652215),
    s = E(516780);
function p() {
    d.h.dispatch({ type: "USER_PROFILE_SETTINGS_INIT" });
}
function T() {
    d.h.dispatch({ type: "USER_PROFILE_SETTINGS_CLOSE" });
}
function h(_, t) {
    let E = t ? l.Rsh.DELETE_ACCOUNT : l.Rsh.DISABLE_ACCOUNT;
    return e.Bo.post({ url: E, body: { password: _ }, oldFormErrors: !0, rejectWithError: (0, e.fT)() }).then(() => {
        (S.A.logoutInternal(), (0, r.pX)(l.BVt.DEFAULT_LOGGED_OUT));
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
        (delete i.token,
            d.h.dispatch({ type: "UPDATE_TOKEN", token: t, userId: i.id }),
            _?.password != null && _?.new_password != null && d.h.dispatch({ type: "PASSWORD_UPDATED", userId: i.id }));
    }
    return (d.h.dispatch({ type: "CURRENT_USER_UPDATE", user: i }), E);
}
function R(_) {
    let {
        username: t,
        discriminator: E,
        email: e,
        emailToken: r,
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
        vadColors: f,
        typingIndicatorStyle: D,
        avatarOriginalMd5: L,
    } = _;
    d.h.dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT" });
    let O = {
        username: t,
        email: e,
        email_token: r,
        password: S,
        avatar: p,
        avatar_description: T,
        avatar_id: h,
        discriminator: E,
        global_name: I,
        legacy_username: A,
        new_password: c,
    };
    (void 0 !== R && (O.avatar_decoration_sku_id = R?.skuId ?? null),
        void 0 !== U && (O.nameplate_sku_id = U?.skuId ?? null),
        void 0 !== N && (O.primary_guild_id = N),
        null != y
            ? ((O.display_name_font_id = y.fontId),
              (O.display_name_effect_id = y.effectId),
              (O.display_name_colors = y.colors))
            : null === y &&
              ((O.display_name_font_id = null), (O.display_name_effect_id = null), (O.display_name_colors = null)),
        void 0 !== f && (O.vad_colors = f),
        void 0 !== D && (O.typing_indicator_style = null != D ? (0, a.El)(D) : null));
    let v = i.w.get(l.Xlh),
        C = (0, s.oH)();
    null != C && null != v && ((O.push_provider = C), (O.push_token = v));
    let G = i.w.get(l.Ahp);
    return (
        null != s.vz && null != G && ((O.push_voip_provider = s.vz), (O.push_voip_token = G)),
        u(O, { headers: n.A.buildHeadersForMd5({ [o.f.USER_DEFAULT_PROFILE_AVATAR]: L }) }).then(
            (_) => (
                d.h.dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT_SUCCESS" }),
                (null != p || null != h) && d.h.dispatch({ type: "RECENT_AVATARS_UPDATE" }),
                _
            ),
            (_) => (d.h.dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT_FAILURE", errors: _.body }), _),
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
    d.h.dispatch({ type: "USER_PROFILE_SETTINGS_CLEAR_ERRORS" });
}
function A() {
    d.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES" });
}
function U() {
    d.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_CHANGES" });
}
function N() {
    d.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_AND_CLOSE_FORM" });
}
function y() {
    d.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_LEGACY_USERNAME_DISABLED" });
}
function f() {
    d.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_PRIMARY_GUILD_CHANGES" });
}
