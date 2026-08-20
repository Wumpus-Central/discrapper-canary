t.d(r, { Je: () => o, OH: () => E, fx: () => a, zf: () => s });
var n = t(636537),
    i = t(228366),
    l = t(652215);
function o(e) {
    return n.Bo.get({ url: l.Rsh.GUILD_VANITY_URL(e), oldFormErrors: !0, rejectWithError: !0 }).then((e) => {
        let {
            body: { code: r, uses: t, error: n },
        } = e;
        i.h.dispatch({ type: "GUILD_SETTINGS_SET_VANITY_URL", code: r, uses: t, error: n });
    });
}
function a() {
    i.h.dispatch({ type: "GUILD_SETTINGS_VANITY_URL_RESET" });
}
function E(e) {
    i.h.dispatch({ type: "GUILD_SETTINGS_VANITY_URL_SET", code: e });
}
function s(e, r, t) {
    return n.Bo.patch({
        url: l.Rsh.GUILD_VANITY_URL(e),
        body: { code: r },
        oldFormErrors: !0,
        rejectWithError: (0, n.fT)(),
    }).then(
        (e) => {
            let {
                body: { code: r, uses: t },
            } = e;
            i.h.dispatch({ type: "GUILD_SETTINGS_SET_VANITY_URL", code: r, uses: t });
        },
        (e) => {
            if ((i.h.dispatch({ type: "GUILD_SETTINGS_VANITY_URL_ERROR", error: e.body }), t?.throwErr)) throw e;
            return e;
        },
    );
}
