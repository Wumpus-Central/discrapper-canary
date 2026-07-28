n.d(t, { QR: () => h, b: () => C, oc: () => E });
var r,
    l = n(582128),
    i = n(17928),
    o = n(451988),
    u = n(277984),
    s = n(617710),
    a = n(166532),
    c = n(566980),
    d = n(153084),
    E =
        (((r = {})[(r.PENDING = 1)] = "PENDING"),
        (r[(r.ERROR = 2)] = "ERROR"),
        (r[(r.NONE = 3)] = "NONE"),
        (r[(r.CANCELLED = 4)] = "CANCELLED"),
        r);
function C(e, t, n, r) {
    let i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        o = arguments.length > 5 ? arguments[5] : void 0,
        u = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
    l.useEffect(() => {
        u ||
            null == e ||
            (1 === t && e !== a.pn.AWAITING_AUTHENTICATION
                ? n(a.pn.AWAITING_AUTHENTICATION)
                : e === a.pn.AWAITING_AUTHENTICATION &&
                  (2 === t || 4 === t
                      ? n(a.pn.REVIEW)
                      : 3 === t && (i ? (null != o ? o() : n(a.pn.REVIEW)) : (r(c.h.COMPLETED), n(a.pn.CONFIRM)))));
    }, [e, t, n, r, i, o, u]);
}
function h(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = (0, i.bG)([d.A], () => d.A.awaitingPaymentId),
        r = (0, i.bG)([s.A], () => s.A.isConnected()),
        a = l.useRef(new o.IX());
    l.useEffect(() => {
        t || r || null == n || 1 !== e ? a.current.stop() : a.current.start(5e3, () => (0, u.TK)(n));
    }, [n, e, r, t]);
}
