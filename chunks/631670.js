var e = E(620632),
    i = E(506774),
    d = E(73153),
    n = E(724165),
    a = E(61310),
    r = E(870600),
    S = E(976860);
E(624826);
var o = E(830215);
E(252452);
var l = E(652215),
    s = E(516780);
async function p(_) {
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
E.d(
    t,
    {},
    {
        $I: function (_) {
            return e.Bo.post({
                url: l.Rsh.USER_HARVEST,
                body: { backends: _ },
                oldFormErrors: !0,
                rejectWithError: (0, e.fT)(),
            });
        },
        Cw: function () {
            d.h.dispatch({ type: "USER_PROFILE_SETTINGS_INIT" });
        },
        F7: function () {
            d.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_AND_CLOSE_FORM" });
        },
        IM: function () {
            d.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_CHANGES" });
        },
        KD: p,
        U_: function (_, t) {
            let E = t ? l.Rsh.DELETE_ACCOUNT : l.Rsh.DISABLE_ACCOUNT;
            return e.Bo.post({ url: E, body: { password: _ }, oldFormErrors: !0, rejectWithError: (0, e.fT)() }).then(
                () => {
                    (o.A.logoutInternal(), (0, S.pX)(l.BVt.DEFAULT_LOGGED_OUT));
                },
            );
        },
        Uo: function () {
            d.h.dispatch({ type: "USER_PROFILE_SETTINGS_CLOSE" });
        },
        _L: function (_) {
            let {
                username: t,
                discriminator: E,
                email: e,
                emailToken: S,
                password: o,
                avatar: T,
                avatarDescription: h,
                avatarId: R,
                avatarDecoration: c,
                newPassword: u,
                globalName: I,
                legacyUsername: A,
                nameplate: U,
                primaryGuildId: N,
                displayNameStyles: y,
                typingIndicatorStyle: f,
                avatarOriginalMd5: D,
            } = _;
            d.h.dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT" });
            let L = {
                username: t,
                email: e,
                email_token: S,
                password: o,
                avatar: T,
                avatar_description: h,
                avatar_id: R,
                discriminator: E,
                global_name: I,
                legacy_username: A,
                new_password: u,
            };
            (void 0 !== c && (L.avatar_decoration_sku_id = c?.skuId ?? null),
                void 0 !== U && (L.nameplate_sku_id = U?.skuId ?? null),
                void 0 !== N && (L.primary_guild_id = N),
                null != y
                    ? ((L.display_name_font_id = y.fontId),
                      (L.display_name_effect_id = y.effectId),
                      (L.display_name_colors = y.colors))
                    : null === y &&
                      ((L.display_name_font_id = null),
                      (L.display_name_effect_id = null),
                      (L.display_name_colors = null)),
                void 0 !== f && (L.typing_indicator_style = null != f ? (0, r.El)(f) : null));
            let O = i.w.get(l.Xlh),
                C = (0, s.oH)();
            return (
                null != C && null != O && ((L.push_provider = C), (L.push_token = O)),
                i.w.get(l.Ahp),
                p(L, { headers: n.A.buildHeadersForMd5({ [a.f.USER_DEFAULT_PROFILE_AVATAR]: D }) }).then(
                    (_) => (
                        d.h.dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT_SUCCESS" }),
                        (null != T || null != R) && d.h.dispatch({ type: "RECENT_AVATARS_UPDATE" }),
                        _
                    ),
                    (_) => (d.h.dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT_FAILURE", errors: _.body }), _),
                )
            );
        },
        _e: function () {
            d.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_LEGACY_USERNAME_DISABLED" });
        },
        fw: function () {
            d.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_PRIMARY_GUILD_CHANGES" });
        },
        pZ: function () {
            d.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES" });
        },
        x8: function () {
            d.h.dispatch({ type: "USER_PROFILE_SETTINGS_CLEAR_ERRORS" });
        },
    },
);
