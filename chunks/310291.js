n.d(t, { Z: () => o }), n(47120);
var r = n(192379),
    i = n(392711),
    s = n.n(i),
    a = n(232473);
let l = (e) => {
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
            let r = t[e];
            (r.amount += n.amount), (r.paymentsCount += n.payments_count), (r.ppgs[n.grouping_id] = n);
        }
        return s().orderBy(Object.values(t), ['periodStartingAt'], ['desc']);
    },
    o = (e, t) => {
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
                payoutsByPeriod: r.useMemo(() => l(null != i ? c.filter((e) => e.user_id === i) : c), [c, i]),
                loading: s
            }
        );
    };
