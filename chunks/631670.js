var i = n(620632),
    r = n(506774),
    a = n(73153),
    s = n(724165),
    l = n(61310),
    o = n(870600),
    d = n(976860);
n(624826);
var c = n(830215);
n(252452);
var u = n(652215),
    _ = n(516780);
async function E(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = await i.Bo.patch({
            url: u.Rsh.ME,
            oldFormErrors: !0,
            body: e,
            headers: t.headers,
            rejectWithError: (0, i.fT)(),
        }),
        r = n.body;
    if (r.token) {
        let t = r.token;
        (delete r.token,
            a.h.dispatch({ type: "UPDATE_TOKEN", token: t, userId: r.id }),
            e?.password != null && e?.new_password != null && a.h.dispatch({ type: "PASSWORD_UPDATED", userId: r.id }));
    }
    return (a.h.dispatch({ type: "CURRENT_USER_UPDATE", user: r }), n);
}
n.d(
    t,
    {},
    {
        $I: function (e) {
            return i.Bo.post({
                url: u.Rsh.USER_HARVEST,
                body: { backends: e },
                oldFormErrors: !0,
                rejectWithError: (0, i.fT)(),
            });
        },
        Cw: function () {
            a.h.dispatch({ type: "USER_PROFILE_SETTINGS_INIT" });
        },
        F7: function () {
            a.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_AND_CLOSE_FORM" });
        },
        IM: function () {
            a.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_CHANGES" });
        },
        KD: E,
        U_: function (e, t) {
            let n = t ? u.Rsh.DELETE_ACCOUNT : u.Rsh.DISABLE_ACCOUNT;
            return i.Bo.post({ url: n, body: { password: e }, oldFormErrors: !0, rejectWithError: (0, i.fT)() }).then(
                () => {
                    (c.A.logoutInternal(), (0, d.pX)(u.BVt.DEFAULT_LOGGED_OUT));
                },
            );
        },
        Uo: function () {
            a.h.dispatch({ type: "USER_PROFILE_SETTINGS_CLOSE" });
        },
        _L: function (e) {
            let {
                username: t,
                discriminator: n,
                email: i,
                emailToken: d,
                password: c,
                avatar: A,
                avatarDescription: f,
                avatarId: h,
                avatarDecoration: I,
                newPassword: p,
                globalName: m,
                legacyUsername: T,
                nameplate: g,
                primaryGuildId: S,
                displayNameStyles: N,
                typingIndicatorStyle: C,
                avatarOriginalMd5: O,
            } = e;
            a.h.dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT" });
            let R = {
                username: t,
                email: i,
                email_token: d,
                password: c,
                avatar: A,
                avatar_description: f,
                avatar_id: h,
                discriminator: n,
                global_name: m,
                legacy_username: T,
                new_password: p,
            };
            (void 0 !== I && (R.avatar_decoration_sku_id = I?.skuId ?? null),
                void 0 !== g && (R.nameplate_sku_id = g?.skuId ?? null),
                void 0 !== S && (R.primary_guild_id = S),
                null != N
                    ? ((R.display_name_font_id = N.fontId),
                      (R.display_name_effect_id = N.effectId),
                      (R.display_name_colors = N.colors))
                    : null === N &&
                      ((R.display_name_font_id = null),
                      (R.display_name_effect_id = null),
                      (R.display_name_colors = null)),
                void 0 !== C && (R.typing_indicator_style = null != C ? (0, o.El)(C) : null));
            let L = r.w.get(u.Xlh),
                y = (0, _.oH)();
            return (
                null != y && null != L && ((R.push_provider = y), (R.push_token = L)),
                r.w.get(u.Ahp),
                E(R, { headers: s.A.buildHeadersForMd5({ [l.f.USER_DEFAULT_PROFILE_AVATAR]: O }) }).then(
                    (e) => (
                        a.h.dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT_SUCCESS" }),
                        (null != A || null != h) && a.h.dispatch({ type: "RECENT_AVATARS_UPDATE" }),
                        e
                    ),
                    (e) => (a.h.dispatch({ type: "USER_PROFILE_SETTINGS_SUBMIT_FAILURE", errors: e.body }), e),
                )
            );
        },
        _e: function () {
            a.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_LEGACY_USERNAME_DISABLED" });
        },
        fw: function () {
            a.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_PRIMARY_GUILD_CHANGES" });
        },
        pZ: function () {
            a.h.dispatch({ type: "USER_PROFILE_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES" });
        },
        x8: function () {
            a.h.dispatch({ type: "USER_PROFILE_SETTINGS_CLEAR_ERRORS" });
        },
    },
);
