n.d(t, { Z: () => l }), n(47120);
var i = n(192379),
    r = n(442837),
    a = n(594174),
    s = n(823379);
let o = [];
function l(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
        n = (0, r.Wu)(
            [a.default],
            () => {
                let t = e.participants.map((e) => a.default.getUser(e)).filter(s.lm),
                    n = t.find((t) => t.id === e.author_id),
                    i = t.filter((t) => t.id !== e.author_id);
                return null == n ? o : [...i, n];
            },
            [e]
        ),
        l = i.useMemo(() => n.slice(-t), [t, n]),
        u = l[l.length - 1],
        c = l[l.length - 2],
        d = Math.max(n.length - 1, 0);
    return {
        orderedParticipants: n,
        displayParticipants: l,
        participant1: u,
        participant2: c,
        numOtherParticipants: d
    };
}
