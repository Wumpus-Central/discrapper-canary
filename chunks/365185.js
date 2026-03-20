"use strict";
n.d(t, { A: () => o });
var r = n(311907),
    i = n(517164),
    s = n(99753),
    a = n(424994);
function o(e) {
    let { activity: t, user: n } = e,
        o = (0, r.bG)([s.A], () => s.A.getMatchingInboxEntry({ activity: t, userId: n.id, feedId: a.X1.GLOBAL_FEED }), [
            t,
            n.id,
        ]),
        l = (0, r.bG)([i.A], () => i.A.getMatchingOutboxEntry({ activity: t, userId: n.id }), [t, n.id]);
    return o ?? l;
}
