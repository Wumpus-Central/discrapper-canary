"use strict";
n.d(t, { A: () => l });
var i = n(17928),
    r = n(517164),
    a = n(99753),
    s = n(424994);
function l(e) {
    let { activity: t, user: n } = e,
        l = (0, i.bG)([a.A], () => a.A.getMatchingInboxEntry({ activity: t, userId: n.id, feedId: s.X1.GLOBAL_FEED }), [
            t,
            n.id,
        ]),
        o = (0, i.bG)([r.A], () => r.A.getMatchingOutboxEntry({ activity: t, userId: n.id }), [t, n.id]);
    return l ?? o;
}
