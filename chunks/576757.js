"use strict";
n.d(t, { A: () => o });
var i = n(582128),
    r = n(17928),
    a = n(287809),
    s = n(403362);
let l = [];
function o(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
        n = (0, r.yK)([a.default], () => {
            let t = e.participants.map((e) => a.default.getUser(e)).filter(s.Vq),
                n = t.find((t) => t.id === e.author_id),
                i = t.filter((t) => t.id !== e.author_id);
            return null == n ? l : [...i, n];
        }, [e]),
        o = i.useMemo(() => n.slice(-t), [t, n]),
        d = o[o.length - 1],
        c = o[o.length - 2],
        u = Math.max(n.length - 1, 0);
    return {
        orderedParticipants: n,
        displayParticipants: o,
        participant1: d,
        participant2: c,
        numOtherParticipants: u,
    };
}
