n.d(t, { b: () => A });
var i = n(158390),
    r = n(17928),
    a = n(636537),
    s = n(228366),
    l = n(927813),
    o = n(507868),
    d = n(652215);
let c = 10 * l.A.Millis.SECOND,
    u = 10 * l.A.Millis.MINUTE,
    _ = 0;
async function E(e) {
    let t = _,
        n = await a.Bo.get({ url: d.Rsh.CLIPS_AUTOCLIPS_GAME_CAPABILITIES(e), rejectWithError: !0 });
    t === _ &&
        s.h.dispatch({
            type: "CLIPS_AUTOCLIPS_CAPABILITIES_UPDATE",
            gameId: e,
            capabilities: n.body.capabilities ?? 0,
        });
}
s.h.subscribe("LOGOUT", () => {
    _++;
});
let A = (0, r.UT)(o.A, {
    getQueryId: (e) => e,
    get: (e) => (o.A.getGameCapabilities().has(e) ? o.A.getCapabilities(e) : null),
    load: E,
    retryConfig: { backoff: () => new i.A(c, u) },
    staleAfter: l.A.Seconds.HOUR,
});
