var t = l(620632),
    i = l(73153),
    r = l(652215);
l.d(
    n,
    {},
    {
        Je: function (e) {
            return t.Bo.get({ url: r.Rsh.GUILD_VANITY_URL(e), oldFormErrors: !0, rejectWithError: !0 }).then((e) => {
                let {
                    body: { code: n, uses: l, error: t },
                } = e;
                i.h.dispatch({ type: "GUILD_SETTINGS_SET_VANITY_URL", code: n, uses: l, error: t });
            });
        },
        OH: function (e) {
            i.h.dispatch({ type: "GUILD_SETTINGS_VANITY_URL_SET", code: e });
        },
        fx: function () {
            i.h.dispatch({ type: "GUILD_SETTINGS_VANITY_URL_RESET" });
        },
        zf: function (e, n, l) {
            return t.Bo.patch({
                url: r.Rsh.GUILD_VANITY_URL(e),
                body: { code: n },
                oldFormErrors: !0,
                rejectWithError: (0, t.fT)(),
            }).then(
                (e) => {
                    let {
                        body: { code: n, uses: l },
                    } = e;
                    i.h.dispatch({ type: "GUILD_SETTINGS_SET_VANITY_URL", code: n, uses: l });
                },
                (e) => {
                    if ((i.h.dispatch({ type: "GUILD_SETTINGS_VANITY_URL_ERROR", error: e.body }), l?.throwErr))
                        throw e;
                    return e;
                },
            );
        },
    },
);
