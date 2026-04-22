"use strict";
n.d(t, { QR: () => E, b: () => f, oc: () => _ });
var r,
    i = n(64700),
    s = n(311907),
    a = n(451988),
    o = n(323082),
    l = n(142120),
    u = n(166532),
    d = n(566980),
    c = n(153084),
    _ = (((r = {})[(r.PENDING = 1)] = "PENDING"), (r[(r.ERROR = 2)] = "ERROR"), (r[(r.NONE = 3)] = "NONE"), r);
function f(e, t, n, r) {
    let s = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        a = arguments.length > 5 ? arguments[5] : void 0;
    i.useEffect(() => {
        null != e &&
            (1 === t && e !== u.pn.AWAITING_AUTHENTICATION
                ? n(u.pn.AWAITING_AUTHENTICATION)
                : e === u.pn.AWAITING_AUTHENTICATION &&
                  (2 === t
                      ? n(u.pn.REVIEW)
                      : 3 === t && (s ? (null != a ? a() : n(u.pn.REVIEW)) : (r(d.h.COMPLETED), n(u.pn.CONFIRM)))));
    }, [e, t, n, r, s, a]);
}
function E(e) {
    let t = (0, s.bG)([c.A], () => c.A.awaitingPaymentId),
        n = (0, s.bG)([l.A], () => l.A.isConnected()),
        r = i.useRef(new a.IX());
    i.useEffect(() => {
        n || null == t || 1 !== e ? r.current.stop() : r.current.start(5e3, () => (0, o.TK)(t));
    }, [t, e, n]);
}
