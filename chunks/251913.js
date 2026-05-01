n.d(t, { QR: () => p, b: () => E, oc: () => C });
var o,
    r = n(64700),
    i = n(17928),
    a = n(451988),
    l = n(323082),
    s = n(446458),
    u = n(166532),
    _ = n(566980),
    d = n(153084),
    C = (((o = {})[(o.PENDING = 1)] = "PENDING"), (o[(o.ERROR = 2)] = "ERROR"), (o[(o.NONE = 3)] = "NONE"), o);
function E(e, t, n, o) {
    let i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        a = arguments.length > 5 ? arguments[5] : void 0;
    r.useEffect(() => {
        null != e &&
            (1 === t && e !== u.pn.AWAITING_AUTHENTICATION
                ? n(u.pn.AWAITING_AUTHENTICATION)
                : e === u.pn.AWAITING_AUTHENTICATION &&
                  (2 === t
                      ? n(u.pn.REVIEW)
                      : 3 === t && (i ? (null != a ? a() : n(u.pn.REVIEW)) : (o(_.h.COMPLETED), n(u.pn.CONFIRM)))));
    }, [e, t, n, o, i, a]);
}
function p(e) {
    let t = (0, i.bG)([d.A], () => d.A.awaitingPaymentId),
        n = (0, i.bG)([s.A], () => s.A.isConnected()),
        o = r.useRef(new a.IX());
    r.useEffect(() => {
        n || null == t || 1 !== e ? o.current.stop() : o.current.start(5e3, () => (0, l.TK)(t));
    }, [t, e, n]);
}
