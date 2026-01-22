n.d(t, {
    QR: () => _,
    b: () => f,
    oc: () => d,
});
var r = n(64700),
    i = n(311907),
    a = n(451988),
    s = n(384904),
    o = n(142120),
    l = n(166532),
    c = n(566980),
    u = n(153084),
    d = (function (e) {
        return (e[(e.PENDING = 1)] = "PENDING"), (e[(e.ERROR = 2)] = "ERROR"), (e[(e.NONE = 3)] = "NONE"), e;
    })({});

function f(e, t, n, i) {
    let a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        s = arguments.length > 5 ? arguments[5] : void 0;
    r.useEffect(() => {
        null != e &&
            (1 === t && e !== l.pn.AWAITING_AUTHENTICATION
                ? n(l.pn.AWAITING_AUTHENTICATION)
                : e === l.pn.AWAITING_AUTHENTICATION &&
                  (2 === t
                      ? n(l.pn.REVIEW)
                      : 3 === t && (a ? (null != s ? s() : n(l.pn.REVIEW)) : (i(c.h.COMPLETED), n(l.pn.CONFIRM)))));
    }, [e, t, n, i, a, s]);
}
let p = 5e3;

function _(e) {
    let t = (0, i.bG)([u.A], () => u.A.awaitingPaymentId),
        n = (0, i.bG)([o.A], () => o.A.isConnected()),
        l = r.useRef(new a.IX());
    r.useEffect(() => {
        n || null == t || 1 !== e ? l.current.stop() : l.current.start(p, () => (0, s.TK)(t));
    }, [t, e, n]);
}
