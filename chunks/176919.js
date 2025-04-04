n.d(t, {
    D6: () => p,
    bp: () => f,
    wr: () => d
});
var r = n(192379),
    i = n(442837),
    o = n(846519),
    a = n(355467),
    s = n(38618),
    l = n(409813),
    c = n(45572),
    u = n(505649),
    d = (function (e) {
        return (e[(e.PENDING = 1)] = 'PENDING'), (e[(e.ERROR = 2)] = 'ERROR'), (e[(e.NONE = 3)] = 'NONE'), e;
    })({});
function f(e, t, n, i) {
    let o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        a = arguments.length > 5 ? arguments[5] : void 0;
    r.useEffect(() => {
        null != e && (1 === t && e !== l.h8.AWAITING_AUTHENTICATION ? n(l.h8.AWAITING_AUTHENTICATION) : e === l.h8.AWAITING_AUTHENTICATION && (2 === t ? n(l.h8.REVIEW) : 3 === t && (o ? (null != a ? a() : n(l.h8.REVIEW)) : (i(c.A.COMPLETED), n(l.h8.CONFIRM)))));
    }, [e, t, n, i, o, a]);
}
let _ = 5000;
function p(e) {
    let t = (0, i.e7)([u.Z], () => u.Z.awaitingPaymentId),
        n = (0, i.e7)([s.Z], () => s.Z.isConnected()),
        l = r.useRef(new o.Xp());
    r.useEffect(() => {
        n || null == t || 1 !== e ? l.current.stop() : l.current.start(_, () => (0, a.O1)(t));
    }, [t, e, n]);
}
