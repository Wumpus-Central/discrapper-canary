var l = t(620632),
    i = t(73153),
    r = t(652215);
t.d(
    n,
    {},
    {
        Je: function (e) {
            return l.Bo.get({ url: r.Rsh.GUILD_VANITY_URL(e), oldFormErrors: !0, rejectWithError: !0 }).then((e) => {
                let {
                    body: { code: n, uses: t, error: l },
                } = e;
                i.h.dispatch({ type: "GUILD_SETTINGS_SET_VANITY_URL", code: n, uses: t, error: l });
            });
        },
        OH: function (e) {
            i.h.dispatch({ type: "GUILD_SETTINGS_VANITY_URL_SET", code: e });
        },
        fx: function () {
            i.h.dispatch({ type: "GUILD_SETTINGS_VANITY_URL_RESET" });
        },
        zf: function (e, n, t) {
            return l.Bo.patch({
                url: r.Rsh.GUILD_VANITY_URL(e),
                body: { code: n },
                oldFormErrors: !0,
                rejectWithError: (0, l.fT)(),
            }).then(
                (e) => {
                    let {
                        body: { code: n, uses: t },
                    } = e;
                    i.h.dispatch({ type: "GUILD_SETTINGS_SET_VANITY_URL", code: n, uses: t });
                },
                (e) => {
                    if ((i.h.dispatch({ type: "GUILD_SETTINGS_VANITY_URL_ERROR", error: e.body }), t?.throwErr))
                        throw e;
                    return e;
                },
            );
        },
    },
);
