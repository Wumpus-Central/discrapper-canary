n.d(t, { A: () => s });
var i = n(582128),
    l = n(174459),
    r = n(652215);
function s(e, t, n) {
    let s = (0, i.useRef)(!1);
    (0, i.useEffect)(() => {
        if (null == n) {
            s.current = !1;
            return;
        }
        s.current ||
            ((s.current = !0),
            l.default.track(r.HAw.PAST_DUE_CHECKOUT_INVOICE_LOAD_FAILED, {
                entry_point: e,
                subscription_id: t,
                error_status: n.status,
            }));
    }, [e, t, n]);
}
