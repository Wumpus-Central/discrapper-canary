e.d(n, { A: () => s });
var l = e(17928),
    i = e(517164),
    r = e(99753),
    a = e(424994);
function s(t) {
    let { activity: n, user: e } = t,
        s = (0, l.bG)([r.A], () => r.A.getMatchingInboxEntry({ activity: n, userId: e.id, feedId: a.X1.GLOBAL_FEED }), [
            n,
            e.id,
        ]),
        o = (0, l.bG)([i.A], () => i.A.getMatchingOutboxEntry({ activity: n, userId: e.id }), [n, e.id]);
    return s ?? o;
}
