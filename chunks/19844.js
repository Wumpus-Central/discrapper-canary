n.d(t, { A: () => s }), n(896048), n(321073);
var r = n(311907),
    l = n(996439),
    i = n(63995),
    a = n(69407);
function s(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
        [n] = (0, r.bG)(
            [i.A],
            () => {
                let n = i.A.getMutableParticipants(e).filter((e) => e.type === a.wY.VOICE),
                    r = [];
                for (let e of n) {
                    if (r.length >= t) break;
                    null == r.find((t) => t.id === e.user.id) && r.push(e.user);
                }
                return [
                    {
                        participants: n,
                        usersInSummary: r,
                    },
                    i.A.getParticipantsVersion(e),
                ];
            },
            [e, t],
            l.D,
        );
    return n;
}
