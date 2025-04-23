n.d(t, { Z: () => o }), n(388685);
var r = n(192379),
    i = n(392711),
    l = n.n(i),
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
            let r = t[e];
            (r.amount += n.amount), (r.paymentsCount += n.payments_count), (r.ppgs[n.grouping_id] = n);
        }
        return l().orderBy(Object.values(t), ['periodStartingAt'], ['desc']);
    },
    o = (e, t) => {
        let { groupType: n, teamId: i } = t,
            [l, o] = r.useState(!0),
            [c, u] = r.useState([]),
            d = r.useCallback(async () => {
                if ((u([]), null == e)) return void o(!1);
                try {
                    o(!0);
                    let t = await s.C(e, { grouping_type: n });
                    u(t);
                } catch (e) {
                } finally {
                    o(!1);
                }
            }, [e, n]);
        return (
            r.useEffect(() => {
                d();
            }, [d]),
            {
                payoutsByPeriod: r.useMemo(() => a(null != i ? c.filter((e) => e.user_id === i) : c), [c, i]),
                loading: l
            }
        );
    };
