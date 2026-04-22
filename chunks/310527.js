r.d(t, { Je: () => o, OH: () => s, fx: () => E, zf: () => a });
var n = r(562465),
    l = r(73153),
    i = r(652215);
function o(e) {
    return n.Bo.get({ url: i.Rsh.GUILD_VANITY_URL(e), oldFormErrors: !0, rejectWithError: !0 }).then((e) => {
        let {
            body: { code: t, uses: r, error: n },
        } = e;
        l.h.dispatch({ type: "GUILD_SETTINGS_SET_VANITY_URL", code: t, uses: r, error: n });
    });
}
function E() {
    l.h.dispatch({ type: "GUILD_SETTINGS_VANITY_URL_RESET" });
}
function s(e) {
    l.h.dispatch({ type: "GUILD_SETTINGS_VANITY_URL_SET", code: e });
}
function a(e, t, r) {
    return n.Bo.patch({
        url: i.Rsh.GUILD_VANITY_URL(e),
        body: { code: t },
        oldFormErrors: !0,
        rejectWithError: !1,
    }).then(
        (e) => {
            let {
                body: { code: t, uses: r },
            } = e;
            l.h.dispatch({ type: "GUILD_SETTINGS_SET_VANITY_URL", code: t, uses: r });
        },
        (e) => {
            if ((l.h.dispatch({ type: "GUILD_SETTINGS_VANITY_URL_ERROR", error: e.body }), r?.throwErr)) throw e;
            return e;
        },
    );
}
