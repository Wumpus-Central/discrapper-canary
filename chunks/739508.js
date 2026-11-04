var i = n(620632),
    r = n(136857),
    a = n(184015),
    s = n(856383),
    l = n(818348);
n.d(
    t,
    {},
    {
        eS: function (e, t) {
            let n = new Date();
            return (n.setMonth(e - 1), n.toLocaleString(t, { month: "short" }));
        },
        gr: function (e) {
            return (
                (e instanceof i.oh && !!(e.status >= 400) && !!(e.status < 500)) ||
                (e instanceof r.Ay && null != e.status && !!(e.status >= 400) && !!(e.status < 500))
            );
        },
        hD: function (e, t) {
            s.A.captureMessage(e, { ...t, tags: { ...t?.tags, app_context: "billing" } });
        },
        ob: async function (e) {
            let t = null;
            if (null != e && e.paymentGateway === l.kM.BRAINTREE) {
                let e = await (0, a.Z)();
                null != e && (t = { braintree_device_data: e });
            }
            return t;
        },
        pM: function (e, t) {
            s.A.captureException(e, { ...t, tags: { ...t?.tags, app_context: "billing" } });
        },
    },
);
