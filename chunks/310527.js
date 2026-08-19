l.d(t, { Je: () => a, OH: () => o, fx: () => s, zf: () => c });
var n = l(636537),
    i = l(228366),
    r = l(652215);
function a(e) {
    return n.Bo.get({ url: r.Rsh.GUILD_VANITY_URL(e), oldFormErrors: !0, rejectWithError: !0 }).then((e) => {
        let {
            body: { code: t, uses: l, error: n },
        } = e;
        i.h.dispatch({ type: "GUILD_SETTINGS_SET_VANITY_URL", code: t, uses: l, error: n });
    });
}
function s() {
    i.h.dispatch({ type: "GUILD_SETTINGS_VANITY_URL_RESET" });
}
function o(e) {
    i.h.dispatch({ type: "GUILD_SETTINGS_VANITY_URL_SET", code: e });
}
function c(e, t, l) {
    return n.Bo.patch({
        url: r.Rsh.GUILD_VANITY_URL(e),
        body: { code: t },
        oldFormErrors: !0,
        rejectWithError: (0, n.fT)(),
    }).then(
        (e) => {
            let {
                body: { code: t, uses: l },
            } = e;
            i.h.dispatch({ type: "GUILD_SETTINGS_SET_VANITY_URL", code: t, uses: l });
        },
        (e) => {
            if ((i.h.dispatch({ type: "GUILD_SETTINGS_VANITY_URL_ERROR", error: e.body }), l?.throwErr)) throw e;
            return e;
        },
    );
}
