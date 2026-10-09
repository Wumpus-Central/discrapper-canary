(t.d(n, { A: () => r }), t(321073));
var i = t(17928),
    l = t(996439),
    s = t(63995),
    a = t(518769);
function r(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
        [t] = (0, i.bG)(
            [s.A],
            () => {
                let t = s.A.getMutableParticipants(e).filter((e) => e.type === a.wY.VOICE),
                    i = [];
                for (let e of t) {
                    if (i.length >= n) break;
                    null == i.find((n) => n.id === e.user.id) && i.push(e.user);
                }
                return [{ participants: t, usersInSummary: i }, s.A.getParticipantsVersion(e)];
            },
            [e, n],
            l.D,
        );
    return t;
}
