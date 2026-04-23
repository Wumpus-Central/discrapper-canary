"use strict";
n.d(t, { Je: () => a, OH: () => l, fx: () => o, zf: () => u });
var r = n(562465),
    i = n(73153),
    s = n(652215);
function a(e) {
    return r.Bo.get({ url: s.Rsh.GUILD_VANITY_URL(e), oldFormErrors: !0, rejectWithError: !0 }).then((e) => {
        let {
            body: { code: t, uses: n, error: r },
        } = e;
        i.h.dispatch({ type: "GUILD_SETTINGS_SET_VANITY_URL", code: t, uses: n, error: r });
    });
}
function o() {
    i.h.dispatch({ type: "GUILD_SETTINGS_VANITY_URL_RESET" });
}
function l(e) {
    i.h.dispatch({ type: "GUILD_SETTINGS_VANITY_URL_SET", code: e });
}
function u(e, t, n) {
    return r.Bo.patch({
        url: s.Rsh.GUILD_VANITY_URL(e),
        body: { code: t },
        oldFormErrors: !0,
        rejectWithError: !1,
    }).then(
        (e) => {
            let {
                body: { code: t, uses: n },
            } = e;
            i.h.dispatch({ type: "GUILD_SETTINGS_SET_VANITY_URL", code: t, uses: n });
        },
        (e) => {
            if ((i.h.dispatch({ type: "GUILD_SETTINGS_VANITY_URL_ERROR", error: e.body }), n?.throwErr)) throw e;
            return e;
        },
    );
}
