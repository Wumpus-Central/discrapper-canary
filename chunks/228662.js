n.d(t, { A: () => l });
var i = n(582128),
    s = n(174459),
    r = n(652215);
function l(e, t, n) {
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
}
