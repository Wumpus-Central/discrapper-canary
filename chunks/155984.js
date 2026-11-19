var i = n(536637),
    l = n.n(i),
    s = n(855986),
    r = n(295405),
    a = n(97352),
    o = n(166403),
    u = n(448645),
    c = n(652215),
    d = n(818348);
n.d(
    t,
    {},
    {
        l: function () {
            let e = (0, s.bG)([o.A], () => o.A.getPremiumTypeSubscription()),
                t = (0, s.bG)([a.A], () =>
                    null != e && null != e.planIdFromItems ? a.A.get(e?.planIdFromItems) : null,
                ),
                n = (0, s.bG)(
                    [r.A],
                    () => (null != e && null != e.paymentSourceId ? r.A.getPaymentSource(e.paymentSourceId) : null),
                    [e],
                ),
                i = null != n && d.AD.has(n.type),
                m = e?.status === c.Dmq.PAST_DUE ? l()().diff(l()(e.currentPeriodStart), "days") : 0;
            return (
                !!(null != e && null != t && (0, u.xq)(t.id)) &&
                i &&
                m >= 0 &&
                m <= (0, u.ji)(e).days &&
                e.status === c.Dmq.PAST_DUE &&
                !e.isPurchasedExternally
            );
        },
    },
);
