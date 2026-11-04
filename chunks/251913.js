var l,
    i = n(582128),
    r = n(855986),
    a = n(451988),
    s = n(781300),
    o = n(516106),
    u = n(225123),
    c = n(166532),
    d = n(566980),
    m =
        (((l = {})[(l.PENDING = 1)] = "PENDING"),
        (l[(l.ERROR = 2)] = "ERROR"),
        (l[(l.NONE = 3)] = "NONE"),
        (l[(l.CANCELLED = 4)] = "CANCELLED"),
        l);
n.d(
    t,
    {},
    {
        QR: function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = (0, o.t4)((e) => e.awaitingPaymentId),
                l = (0, r.bG)([u.A], () => u.A.isConnected()),
                c = i.useRef(new a.IX());
            i.useEffect(() => {
                t || l || null == n || 1 !== e ? c.current.stop() : c.current.start(5e3, () => (0, s.TK)(n));
            }, [n, e, l, t]);
        },
        b: function (e, t, n, l) {
            let r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                a = arguments.length > 5 ? arguments[5] : void 0,
                s = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
            i.useEffect(() => {
                s ||
                    null == e ||
                    (1 === t && e !== c.pn.AWAITING_AUTHENTICATION
                        ? n(c.pn.AWAITING_AUTHENTICATION)
                        : e === c.pn.AWAITING_AUTHENTICATION &&
                          (2 === t || 4 === t
                              ? n(c.pn.REVIEW)
                              : 3 === t &&
                                (r ? (null != a ? a() : n(c.pn.REVIEW)) : (l(d.h.COMPLETED), n(c.pn.CONFIRM)))));
            }, [e, t, n, l, r, a, s]);
        },
        oc: m,
    },
);
