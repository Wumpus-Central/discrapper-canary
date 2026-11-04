var i = n(158390),
    r = n(855986),
    a = n(620632),
    s = n(73153),
    l = n(927813),
    o = n(507868),
    d = n(652215);
let c = 10 * l.A.Millis.SECOND,
    u = 10 * l.A.Millis.MINUTE,
    _ = 0;
s.h.subscribe("LOGOUT", () => {
    _++;
});
let E = (0, r.UT)(o.A, {
    getQueryId: (e) => e,
    get: (e) => (o.A.getGameCapabilities().has(e) ? o.A.getCapabilities(e) : null),
    load: async function (e) {
        let t = _,
            n = await a.Bo.get({ url: d.Rsh.CLIPS_AUTOCLIPS_GAME_CAPABILITIES(e), rejectWithError: !0 });
        t === _ &&
            s.h.dispatch({
                type: "CLIPS_AUTOCLIPS_CAPABILITIES_UPDATE",
                gameId: e,
                capabilities: n.body.capabilities ?? 0,
            });
    },
    retryConfig: { backoff: () => new i.A(c, u) },
    staleAfter: l.A.Seconds.HOUR,
});
n.d(t, {}, { b: E });
