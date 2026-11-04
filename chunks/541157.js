var u = t(855986),
    l = t(46653),
    r = t(718197);
function s() {
    return {
        sessionId: l.default.getSessionId(),
        selfMute: r.Ay.isSelfMute() || r.Ay.isSelfMutedTemporarily(),
        selfDeaf: r.Ay.isSelfDeaf(),
    };
}
t.d(
    n,
    {},
    {
        Nd: function (e, n) {
            let { sessionId: t, selfMute: u, selfDeaf: l } = n;
            return null != e && null != t && e.sessionId === t ? e.merge({ selfMute: u, selfDeaf: l }) : e;
        },
        oN: function () {
            return (0, u.cf)([l.default, r.Ay], s);
        },
    },
);
