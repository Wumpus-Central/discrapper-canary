"use strict";
n.d(t, { Je: () => a, OH: () => l, fx: () => o, zf: () => u });
var i = n(636537),
    r = n(228366),
    s = n(652215);
function a(e) {
    return i.Bo.get({ url: s.Rsh.GUILD_VANITY_URL(e), oldFormErrors: !0, rejectWithError: !0 }).then((e) => {
        let {
            body: { code: t, uses: n, error: i },
        } = e;
        r.h.dispatch({ type: "GUILD_SETTINGS_SET_VANITY_URL", code: t, uses: n, error: i });
    });
}
function o() {
    r.h.dispatch({ type: "GUILD_SETTINGS_VANITY_URL_RESET" });
}
function l(e) {
    r.h.dispatch({ type: "GUILD_SETTINGS_VANITY_URL_SET", code: e });
}
function u(e, t, n) {
    return i.Bo.patch({
        url: s.Rsh.GUILD_VANITY_URL(e),
        body: { code: t },
        oldFormErrors: !0,
        rejectWithError: !1,
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
