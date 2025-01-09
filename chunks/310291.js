n(47120);
var i = n(192379),
    r = n(392711),
    l = n.n(r),
    s = n(232473);
let a = (e) => {
    let t = {};
    for (let n of e) {
        let e = ''.concat(n.period_starting_at, ',').concat(n.status);
        null == t[e] &&
            (t[e] = {
                key: e,
                periodStartingAt: n.period_starting_at,
                ppgs: {},
                paymentsCount: 0,
                amount: 0
            });
        let i = t[e];
        (i.amount += n.amount), (i.paymentsCount += n.payments_count), (i.ppgs[n.grouping_id] = n);
    }
    return l().orderBy(Object.values(t), ['periodStartingAt'], ['desc']);
};
t.Z = (e, t) => {
    let { groupType: n, teamId: r } = t,
        [l, o] = i.useState(!0),
        [c, d] = i.useState([]),
        u = i.useCallback(async () => {
            if ((d([]), null == e)) {
                o(!1);
                return;
            }
            try {
                o(!0);
                let t = await s.C(e, { grouping_type: n });
                d(t);
            } catch {
            } finally {
                o(!1);
            }
        }, [e, n]);
    return (
        i.useEffect(() => {
            u();
        }, [u]),
        {
            payoutsByPeriod: i.useMemo(() => a(null != r ? c.filter((e) => e.user_id === r) : c), [c, r]),
            loading: l
        }
    );
};
