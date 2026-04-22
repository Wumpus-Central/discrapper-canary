a.d(t, { A: () => v });
var n = a(627968),
    l = a(64700),
    i = a(311907),
    s = a(562465),
    r = a(691885),
    o = a(803306),
    d = a(323082),
    c = a(112848),
    u = a(287809),
    m = a(166403),
    h = a(661191),
    p = a(652215),
    x = a(788868);
let g = [
    { id: "1week", label: "1 Week", value: 0 },
    { id: "1month", label: "1 Month (Bronze)", value: 1 },
    { id: "3months", label: "3 Months (Silver)", value: 3 },
    { id: "6months", label: "6 Months (Gold)", value: 6 },
    { id: "1year", label: "1 Year (Platinum)", value: 12 },
    { id: "2years", label: "2 Years (Diamond)", value: 24 },
    { id: "3years", label: "3 Years (Emerald)", value: 36 },
    { id: "5years", label: "5 Years (Ruby)", value: 60 },
    { id: "6years", label: "6 Years (Opal)", value: 72 },
];
function v() {
    let [e, t] = l.useState(!1),
        a = (0, i.bG)([u.default], () => u.default.getCurrentUser()),
        v = (0, c.Lh)(),
        b = (0, i.bG)([m.A], () => m.A.getPremiumTypeSubscription()),
        _ = null != v ? (x.VD[v]?.tenureReqNumMonths ?? 0) : 0,
        f = l.useCallback(
            async (e) => {
                let n = new Date();
                e > 0 ? n.setMonth(n.getMonth() - e) : n.setDate(n.getDate() - 7), n.setDate(n.getDate() - 2);
                let l = {
                    subscription_status: p.Dmq.ACTIVE,
                    endedAt: void 0,
                    premium_streak_started_at: h.default.fromTimestamp(n.getTime()),
                };
                t(!0),
                    await s.Bo.patch({ url: `/debug/subscriptions/${b.id}`, body: l, rejectWithError: !1 }),
                    await (0, o.eO)(a.id),
                    await (0, d.hP)(),
                    t(!1);
            },
            [b, a],
        );
    if (null != a && null != b)
        return (0, n.jsx)(r.l, {
            label: "Tenure",
            hideLabel: !0,
            selectionMode: "single",
            disabled: e,
            value: _,
            options: g,
            onSelectionChange: f,
        });
}
