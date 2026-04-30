"use strict";
n.d(t, { QR: () => h, b: () => f, oc: () => _ });
var i,
    r = n(64700),
    s = n(17928),
    a = n(451988),
    o = n(753390),
    l = n(587626),
    u = n(166532),
    c = n(566980),
    d = n(153084),
    _ = (((i = {})[(i.PENDING = 1)] = "PENDING"), (i[(i.ERROR = 2)] = "ERROR"), (i[(i.NONE = 3)] = "NONE"), i);
function f(e, t, n, i) {
    let s = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        a = arguments.length > 5 ? arguments[5] : void 0;
    r.useEffect(() => {
        null != e &&
            (1 === t && e !== u.pn.AWAITING_AUTHENTICATION
                ? n(u.pn.AWAITING_AUTHENTICATION)
                : e === u.pn.AWAITING_AUTHENTICATION &&
                  (2 === t
                      ? n(u.pn.REVIEW)
                      : 3 === t && (s ? (null != a ? a() : n(u.pn.REVIEW)) : (i(c.h.COMPLETED), n(u.pn.CONFIRM)))));
    }, [e, t, n, i, s, a]);
}
function h(e) {
    let t = (0, s.bG)([d.A], () => d.A.awaitingPaymentId),
        n = (0, s.bG)([l.A], () => l.A.isConnected()),
        i = r.useRef(new a.IX());
    r.useEffect(() => {
        n || null == t || 1 !== e ? i.current.stop() : i.current.start(5e3, () => (0, o.TK)(t));
    }, [t, e, n]);
}
