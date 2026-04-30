n.d(t, { QR: () => p, b: () => E, oc: () => C });
var o,
    r = n(64700),
    a = n(17928),
    i = n(451988),
    l = n(323082),
    u = n(446458),
    s = n(166532),
    _ = n(566980),
    d = n(153084),
    C = (((o = {})[(o.PENDING = 1)] = "PENDING"), (o[(o.ERROR = 2)] = "ERROR"), (o[(o.NONE = 3)] = "NONE"), o);
function E(e, t, n, o) {
    let a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        i = arguments.length > 5 ? arguments[5] : void 0;
    r.useEffect(() => {
        null != e &&
            (1 === t && e !== s.pn.AWAITING_AUTHENTICATION
                ? n(s.pn.AWAITING_AUTHENTICATION)
                : e === s.pn.AWAITING_AUTHENTICATION &&
                  (2 === t
                      ? n(s.pn.REVIEW)
                      : 3 === t && (a ? (null != i ? i() : n(s.pn.REVIEW)) : (o(_.h.COMPLETED), n(s.pn.CONFIRM)))));
    }, [e, t, n, o, a, i]);
}
function p(e) {
    let t = (0, a.bG)([d.A], () => d.A.awaitingPaymentId),
        n = (0, a.bG)([u.A], () => u.A.isConnected()),
        o = r.useRef(new i.IX());
    r.useEffect(() => {
        n || null == t || 1 !== e ? o.current.stop() : o.current.start(5e3, () => (0, l.TK)(t));
    }, [t, e, n]);
}
