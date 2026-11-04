var l = e(855986),
    i = e(517164),
    a = e(99753),
    r = e(424994);
e.d(
    n,
    {},
    {
        A: function (t) {
            let { activity: n, user: e } = t,
                s = (0, l.bG)(
                    [a.A],
                    () => a.A.getMatchingInboxEntry({ activity: n, userId: e.id, feedId: r.X1.GLOBAL_FEED }),
                    [n, e.id],
                ),
                o = (0, l.bG)([i.A], () => i.A.getMatchingOutboxEntry({ activity: n, userId: e.id }), [n, e.id]);
            return s ?? o;
        },
    },
);
