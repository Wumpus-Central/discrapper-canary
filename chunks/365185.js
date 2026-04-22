e.d(n, { A: () => s });
var i = e(311907),
    l = e(517164),
    r = e(99753),
    a = e(424994);
function s(t) {
    let { activity: n, user: e } = t,
        s = (0, i.bG)([r.A], () => r.A.getMatchingInboxEntry({ activity: n, userId: e.id, feedId: a.X1.GLOBAL_FEED }), [
            n,
            e.id,
        ]),
        o = (0, i.bG)([l.A], () => l.A.getMatchingOutboxEntry({ activity: n, userId: e.id }), [n, e.id]);
    return s ?? o;
}
