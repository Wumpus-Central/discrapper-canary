n.d(t, { QR: () => h, b: () => E, oc: () => C });
var l,
    r = n(582128),
    i = n(17928),
    o = n(451988),
    u = n(277984),
    s = n(597643),
    a = n(166532),
    c = n(566980),
    d = n(153084),
    C =
        (((l = {})[(l.PENDING = 1)] = "PENDING"),
        (l[(l.ERROR = 2)] = "ERROR"),
        (l[(l.NONE = 3)] = "NONE"),
        (l[(l.CANCELLED = 4)] = "CANCELLED"),
        l);
function E(e, t, n, l) {
    let i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        o = arguments.length > 5 ? arguments[5] : void 0,
        u = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
    r.useEffect(() => {
        u ||
            null == e ||
            (1 === t && e !== a.pn.AWAITING_AUTHENTICATION
                ? n(a.pn.AWAITING_AUTHENTICATION)
                : e === a.pn.AWAITING_AUTHENTICATION &&
                  (2 === t || 4 === t
                      ? n(a.pn.REVIEW)
                      : 3 === t && (i ? (null != o ? o() : n(a.pn.REVIEW)) : (l(c.h.COMPLETED), n(a.pn.CONFIRM)))));
    }, [e, t, n, l, i, o, u]);
}
function h(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = (0, i.bG)([d.A], () => d.A.awaitingPaymentId),
        l = (0, i.bG)([s.A], () => s.A.isConnected()),
        a = r.useRef(new o.IX());
    r.useEffect(() => {
        t || l || null == n || 1 !== e ? a.current.stop() : a.current.start(5e3, () => (0, u.TK)(n));
    }, [n, e, l, t]);
}
