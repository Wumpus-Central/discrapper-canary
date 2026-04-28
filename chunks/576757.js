"use strict";
n.d(t, { A: () => o });
var l = n(64700),
    i = n(17928),
    s = n(287809),
    a = n(403362);
let r = [];
function o(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
        n = (0, i.yK)([s.default], () => {
            let t = e.participants.map((e) => s.default.getUser(e)).filter(a.Vq),
                n = t.find((t) => t.id === e.author_id),
                l = t.filter((t) => t.id !== e.author_id);
            return null == n ? r : [...l, n];
        }, [e]),
        o = l.useMemo(() => n.slice(-t), [t, n]),
        c = o[o.length - 1],
        u = o[o.length - 2],
        d = Math.max(n.length - 1, 0);
    return {
        orderedParticipants: n,
        displayParticipants: o,
        participant1: c,
        participant2: u,
        numOtherParticipants: d,
    };
}
