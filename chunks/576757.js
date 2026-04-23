"use strict";
n.d(t, { A: () => l });
var r = n(64700),
    i = n(311907),
    s = n(287809),
    a = n(403362);
let o = [];
function l(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
        n = (0, i.yK)([s.default], () => {
            let t = e.participants.map((e) => s.default.getUser(e)).filter(a.Vq),
                n = t.find((t) => t.id === e.author_id),
                r = t.filter((t) => t.id !== e.author_id);
            return null == n ? o : [...r, n];
        }, [e]),
        l = r.useMemo(() => n.slice(-t), [t, n]),
        u = l[l.length - 1],
        c = l[l.length - 2],
        d = Math.max(n.length - 1, 0);
    return {
        orderedParticipants: n,
        displayParticipants: l,
        participant1: u,
        participant2: c,
        numOtherParticipants: d,
    };
}
