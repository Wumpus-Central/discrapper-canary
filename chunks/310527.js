n.d(t, { Je: () => E, OH: () => s, fx: () => o, zf: () => a });
var r = n(636537),
    l = n(228366),
    i = n(652215);
function E(e) {
    return r.Bo.get({ url: i.Rsh.GUILD_VANITY_URL(e), oldFormErrors: !0, rejectWithError: !0 }).then((e) => {
        let {
            body: { code: t, uses: n, error: r },
        } = e;
        l.h.dispatch({ type: "GUILD_SETTINGS_SET_VANITY_URL", code: t, uses: n, error: r });
    });
}
function o() {
    l.h.dispatch({ type: "GUILD_SETTINGS_VANITY_URL_RESET" });
}
function s(e) {
    l.h.dispatch({ type: "GUILD_SETTINGS_VANITY_URL_SET", code: e });
}
function a(e, t, n) {
    return r.Bo.patch({
        url: i.Rsh.GUILD_VANITY_URL(e),
        body: { code: t },
        oldFormErrors: !0,
        rejectWithError: !1,
    }).then(
        (e) => {
            let {
                body: { code: t, uses: n },
            } = e;
            l.h.dispatch({ type: "GUILD_SETTINGS_SET_VANITY_URL", code: t, uses: n });
        },
        (e) => {
            if ((l.h.dispatch({ type: "GUILD_SETTINGS_VANITY_URL_ERROR", error: e.body }), n?.throwErr)) throw e;
            return e;
        },
    );
}
