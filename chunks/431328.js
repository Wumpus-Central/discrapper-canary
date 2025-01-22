r.d(n, {
    Fd: function () {
        return d;
    },
    Io: function () {
        return f;
    },
    Rk: function () {
        return c;
    },
    w8: function () {
        return u;
    }
});
var i = r(47120);
var a = r(442837),
    o = r(136015),
    s = r(565799),
    l = r(501655);
function u(e, n) {
    let [r] = (0, a.e7)([s.Z], () => [s.Z.getMutableParticipants(e, n), s.Z.getParticipantsVersion(e)], [e, n], o.Q);
    return r;
}
function c(e, n) {
    return (0, a.e7)([s.Z], () => s.Z.getParticipantCount(e, n), [e, n]);
}
function d(e) {
    let [n] = (0, a.e7)([s.Z], () => [s.Z.getMutableRequestToSpeakParticipants(e), s.Z.getRequestToSpeakParticipantsVersion(e)], [e], o.Q);
    return n;
}
function f(e) {
    return (0, a.e7)([s.Z], () => s.Z.getMutableParticipants(e, l.pV.SPEAKER).filter((e) => e.type === l.Ui.VOICE).length, [e]);
}
