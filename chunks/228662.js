var i = n(582128),
    s = n(129230),
    r = n(652215);
n.d(
    t,
    {},
    {
        A: function (e, t, n) {
            let l = (0, i.useRef)(!1);
            (0, i.useEffect)(() => {
                if (null == n) {
                    l.current = !1;
                    return;
                }
                l.current ||
                    ((l.current = !0),
                    s.default.track(r.HAw.PAST_DUE_CHECKOUT_INVOICE_LOAD_FAILED, {
                        entry_point: e,
                        subscription_id: t,
                        error_status: n.status,
                    }));
            }, [e, t, n]);
        },
    },
);
