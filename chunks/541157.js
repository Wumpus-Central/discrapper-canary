t.d(n, { Nd: () => i, oN: () => c });
var u = t(17928),
    l = t(280450),
    r = t(999926);
function s() {
    return {
        sessionId: l.default.getSessionId(),
        selfMute: r.Ay.isSelfMute() || r.Ay.isSelfMutedTemporarily(),
        selfDeaf: r.Ay.isSelfDeaf(),
    };
}
function i(e, n) {
    let { sessionId: t, selfMute: u, selfDeaf: l } = n;
    return null != e && null != t && e.sessionId === t ? e.merge({ selfMute: u, selfDeaf: l }) : e;
}
function c() {
    return (0, u.cf)([l.default, r.Ay], s);
}
