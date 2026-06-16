"use strict";
n.d(t, { A: () => o });
var i = n(17928),
    r = n(517164),
    s = n(99753),
    a = n(424994);
function o(e) {
    let { activity: t, user: n } = e,
        o = (0, i.bG)([s.A], () => s.A.getMatchingInboxEntry({ activity: t, userId: n.id, feedId: a.X1.GLOBAL_FEED }), [
            t,
            n.id,
        ]),
        l = (0, i.bG)([r.A], () => r.A.getMatchingOutboxEntry({ activity: t, userId: n.id }), [t, n.id]);
    return o ?? l;
}
