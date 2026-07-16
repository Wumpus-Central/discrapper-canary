"use strict";
n.d(t, { Je: () => s, OH: () => o, fx: () => l, zf: () => d });
var i = n(636537),
    r = n(228366),
    a = n(652215);
function s(e) {
    return i.Bo.get({ url: a.Rsh.GUILD_VANITY_URL(e), oldFormErrors: !0, rejectWithError: !0 }).then((e) => {
        let {
            body: { code: t, uses: n, error: i },
        } = e;
        r.h.dispatch({ type: "GUILD_SETTINGS_SET_VANITY_URL", code: t, uses: n, error: i });
    });
}
function l() {
    r.h.dispatch({ type: "GUILD_SETTINGS_VANITY_URL_RESET" });
}
function o(e) {
    r.h.dispatch({ type: "GUILD_SETTINGS_VANITY_URL_SET", code: e });
}
function d(e, t, n) {
    return i.Bo.patch({
        url: a.Rsh.GUILD_VANITY_URL(e),
        body: { code: t },
        oldFormErrors: !0,
        rejectWithError: (0, i.fT)(),
    }).then(
        (e) => {
            let {
                body: { code: t, uses: n },
            } = e;
            r.h.dispatch({ type: "GUILD_SETTINGS_SET_VANITY_URL", code: t, uses: n });
        },
        (e) => {
            if ((r.h.dispatch({ type: "GUILD_SETTINGS_VANITY_URL_ERROR", error: e.body }), n?.throwErr)) throw e;
            return e;
        },
    );
}
