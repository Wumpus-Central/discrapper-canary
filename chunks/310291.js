n.d(t, { Z: () => s }), n(388685);
var r = n(473749),
    i = n(392711),
    l = n.n(i),
    a = n(232473);
let s = (e, t) => {
    let { groupType: n, teamId: i } = t,
        [s, o] = r.useState(!0),
        [c, d] = r.useState([]),
        u = r.useCallback(async () => {
            if ((d([]), null == e)) return void o(!1);
            try {
                o(!0);
                let t = await a.C(e, { grouping_type: n });
                d(t);
            } catch (e) {
            } finally {
                o(!1);
            }
        }, [e, n]);
    return (
        r.useEffect(() => {
            u();
        }, [u]),
        {
            payoutsByPeriod: r.useMemo(
                () =>
                    ((e) => {
                        let t = {};
                        for (let n of e) {
                            let e = new Date(n.period_starting_at),
                                r = new Date(Date.UTC(e.getUTCFullYear(), e.getUTCMonth(), 1)).toISOString();
                            null == t[r] &&
                                (t[r] = {
                                    key: r,
                                    periodStartingAt: r,
                                    ppgs: {},
                                    paymentsCount: 0,
                                    amount: 0,
                                });
                            let i = t[r];
                            (i.amount += n.amount), (i.paymentsCount += n.payments_count), (i.ppgs[n.grouping_id] = n);
                        }
                        return l().orderBy(Object.values(t), ["periodStartingAt"], ["desc"]);
                    })(null != i ? c.filter((e) => e.user_id === i) : c),
                [c, i],
            ),
            loading: s,
        }
    );
};
