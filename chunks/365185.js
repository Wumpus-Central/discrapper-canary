n.d(e, { A: () => s });
var l = n(17928),
    i = n(517164),
    a = n(99753),
    r = n(424994);
function s(t) {
    let { activity: e, user: n } = t,
        s = (0, l.bG)([a.A], () => a.A.getMatchingInboxEntry({ activity: e, userId: n.id, feedId: r.X1.GLOBAL_FEED }), [
            e,
            n.id,
        ]),
        o = (0, l.bG)([i.A], () => i.A.getMatchingOutboxEntry({ activity: e, userId: n.id }), [e, n.id]);
    return s ?? o;
}
