r.d(t, { Je: () => o, OH: () => s, fx: () => E, zf: () => _ });
var n = r(636537),
    i = r(228366),
    l = r(652215);
function o(e) {
    return n.Bo.get({ url: l.Rsh.GUILD_VANITY_URL(e), oldFormErrors: !0, rejectWithError: !0 }).then((e) => {
        let {
            body: { code: t, uses: r, error: n },
        } = e;
        i.h.dispatch({ type: "GUILD_SETTINGS_SET_VANITY_URL", code: t, uses: r, error: n });
    });
}
function E() {
    i.h.dispatch({ type: "GUILD_SETTINGS_VANITY_URL_RESET" });
}
function s(e) {
    i.h.dispatch({ type: "GUILD_SETTINGS_VANITY_URL_SET", code: e });
}
function _(e, t, r) {
    return n.Bo.patch({
        url: l.Rsh.GUILD_VANITY_URL(e),
        body: { code: t },
        oldFormErrors: !0,
        rejectWithError: !1,
    }).then(
        (e) => {
            let {
                body: { code: t, uses: r },
            } = e;
            i.h.dispatch({ type: "GUILD_SETTINGS_SET_VANITY_URL", code: t, uses: r });
        },
        (e) => {
            if ((i.h.dispatch({ type: "GUILD_SETTINGS_VANITY_URL_ERROR", error: e.body }), r?.throwErr)) throw e;
            return e;
        },
    );
}
