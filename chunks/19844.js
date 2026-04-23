n.d(t, { A: () => r }), n(321073);
var i = n(311907),
    l = n(996439),
    a = n(63995),
    s = n(69407);
function r(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
        [n] = (0, i.bG)(
            [a.A],
            () => {
                let n = a.A.getMutableParticipants(e).filter((e) => e.type === s.wY.VOICE),
                    i = [];
                for (let e of n) {
                    if (i.length >= t) break;
                    null == i.find((t) => t.id === e.user.id) && i.push(e.user);
                }
                return [{ participants: n, usersInSummary: i }, a.A.getParticipantsVersion(e)];
            },
            [e, t],
            l.D,
        );
    return n;
}
