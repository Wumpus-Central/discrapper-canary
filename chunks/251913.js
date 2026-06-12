n.d(t, { QR: () => h, b: () => m, oc: () => p });
var l,
    r = n(64700),
    i = n(17928),
    a = n(451988),
    s = n(753390),
    o = n(617710),
    u = n(166532),
    c = n(566980),
    d = n(153084),
    p = (((l = {})[(l.PENDING = 1)] = "PENDING"), (l[(l.ERROR = 2)] = "ERROR"), (l[(l.NONE = 3)] = "NONE"), l);
function m(e, t, n, l) {
    let i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        a = arguments.length > 5 ? arguments[5] : void 0;
    r.useEffect(() => {
        null != e &&
            (1 === t && e !== u.pn.AWAITING_AUTHENTICATION
                ? n(u.pn.AWAITING_AUTHENTICATION)
                : e === u.pn.AWAITING_AUTHENTICATION &&
                  (2 === t
                      ? n(u.pn.REVIEW)
                      : 3 === t && (i ? (null != a ? a() : n(u.pn.REVIEW)) : (l(c.h.COMPLETED), n(u.pn.CONFIRM)))));
    }, [e, t, n, l, i, a]);
}
function h(e) {
    let t = (0, i.bG)([d.A], () => d.A.awaitingPaymentId),
        n = (0, i.bG)([o.A], () => o.A.isConnected()),
        l = r.useRef(new a.IX());
    r.useEffect(() => {
        n || null == t || 1 !== e ? l.current.stop() : l.current.start(5e3, () => (0, s.TK)(t));
    }, [t, e, n]);
}
