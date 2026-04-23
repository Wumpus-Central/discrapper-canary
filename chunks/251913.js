n.d(t, { QR: () => C, b: () => p, oc: () => _ });
var r,
    a = n(64700),
    i = n(17928),
    o = n(451988),
    l = n(323082),
    s = n(366853),
    d = n(166532),
    u = n(566980),
    c = n(153084),
    _ = (((r = {})[(r.PENDING = 1)] = "PENDING"), (r[(r.ERROR = 2)] = "ERROR"), (r[(r.NONE = 3)] = "NONE"), r);
function p(e, t, n, r) {
    let i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        o = arguments.length > 5 ? arguments[5] : void 0;
    a.useEffect(() => {
        null != e &&
            (1 === t && e !== d.pn.AWAITING_AUTHENTICATION
                ? n(d.pn.AWAITING_AUTHENTICATION)
                : e === d.pn.AWAITING_AUTHENTICATION &&
                  (2 === t
                      ? n(d.pn.REVIEW)
                      : 3 === t && (i ? (null != o ? o() : n(d.pn.REVIEW)) : (r(u.h.COMPLETED), n(d.pn.CONFIRM)))));
    }, [e, t, n, r, i, o]);
}
function C(e) {
    let t = (0, i.bG)([c.A], () => c.A.awaitingPaymentId),
        n = (0, i.bG)([s.A], () => s.A.isConnected()),
        r = a.useRef(new o.IX());
    a.useEffect(() => {
        n || null == t || 1 !== e ? r.current.stop() : r.current.start(5e3, () => (0, l.TK)(t));
    }, [t, e, n]);
}
