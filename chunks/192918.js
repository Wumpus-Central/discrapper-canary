n.d(t, { Z: () => s }), n(47120);
var r = n(192379),
    a = n(442837),
    l = n(594174),
    i = n(823379);
let o = [];
function s(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
        n = (0, a.Wu)(
            [l.default],
            () => {
                let t = e.participants.map((e) => l.default.getUser(e)).filter(i.lm),
                    n = t.find((t) => t.id === e.author_id),
                    r = t.filter((t) => t.id !== e.author_id);
                return null == n ? o : [...r, n];
            },
            [e]
        ),
        s = r.useMemo(() => n.slice(-t), [t, n]),
        c = s[s.length - 1],
        d = s[s.length - 2],
        u = Math.max(n.length - 1, 0);
    return {
        orderedParticipants: n,
        displayParticipants: s,
        participant1: c,
        participant2: d,
        numOtherParticipants: u
    };
}
