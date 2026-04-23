"use strict";
n.d(t, { A: () => l });
var i = n(64700),
    r = n(17928),
    s = n(287809),
    a = n(403362);
let o = [];
function l(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
        n = (0, r.yK)([s.default], () => {
            let t = e.participants.map((e) => s.default.getUser(e)).filter(a.Vq),
                n = t.find((t) => t.id === e.author_id),
                i = t.filter((t) => t.id !== e.author_id);
            return null == n ? o : [...i, n];
        }, [e]),
        l = i.useMemo(() => n.slice(-t), [t, n]),
        d = l[l.length - 1],
        _ = l[l.length - 2],
        u = Math.max(n.length - 1, 0);
    return {
        orderedParticipants: n,
        displayParticipants: l,
        participant1: d,
        participant2: _,
        numOtherParticipants: u,
    };
}
