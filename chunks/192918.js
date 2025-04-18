n.d(t, { Z: () => l }), n(388685);
var r = n(192379),
    i = n(442837),
    a = n(594174),
    o = n(823379);
let s = [];
function l(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
        n = (0, i.Wu)(
            [a.default],
            () => {
                let t = e.participants.map((e) => a.default.getUser(e)).filter(o.lm),
                    n = t.find((t) => t.id === e.author_id),
                    r = t.filter((t) => t.id !== e.author_id);
                return null == n ? s : [...r, n];
            },
            [e]
        ),
        l = r.useMemo(() => n.slice(-t), [t, n]),
        c = l[l.length - 1],
        u = l[l.length - 2],
        d = Math.max(n.length - 1, 0);
    return {
        orderedParticipants: n,
        displayParticipants: l,
        participant1: c,
        participant2: u,
        numOtherParticipants: d
    };
}
