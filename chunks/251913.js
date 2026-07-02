"use strict";
n.d(t, { QR: () => f, b: () => h, oc: () => _ });
var i,
    r = n(64700),
    s = n(17928),
    a = n(451988),
    o = n(277984),
    l = n(617710),
    u = n(166532),
    d = n(566980),
    c = n(153084),
    _ = (((i = {})[(i.PENDING = 1)] = "PENDING"), (i[(i.ERROR = 2)] = "ERROR"), (i[(i.NONE = 3)] = "NONE"), i);
function h(e, t, n, i) {
    let s = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        a = arguments.length > 5 ? arguments[5] : void 0,
        o = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
    r.useEffect(() => {
        o ||
            null == e ||
            (1 === t && e !== u.pn.AWAITING_AUTHENTICATION
                ? n(u.pn.AWAITING_AUTHENTICATION)
                : e === u.pn.AWAITING_AUTHENTICATION &&
                  (2 === t
                      ? n(u.pn.REVIEW)
                      : 3 === t && (s ? (null != a ? a() : n(u.pn.REVIEW)) : (i(d.h.COMPLETED), n(u.pn.CONFIRM)))));
    }, [e, t, n, i, s, a, o]);
}
function f(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = (0, s.bG)([c.A], () => c.A.awaitingPaymentId),
        i = (0, s.bG)([l.A], () => l.A.isConnected()),
        u = r.useRef(new a.IX());
    r.useEffect(() => {
        t || i || null == n || 1 !== e ? u.current.stop() : u.current.start(5e3, () => (0, o.TK)(n));
    }, [n, e, i, t]);
}
