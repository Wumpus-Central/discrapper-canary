n.d(t, {
    D6: () => p,
    bp: () => f,
    wr: () => d
});
var i = n(192379),
    r = n(442837),
    a = n(846519),
    s = n(355467),
    o = n(38618),
    l = n(409813),
    u = n(45572),
    c = n(505649),
    d = (function (e) {
        return (e[(e.PENDING = 1)] = 'PENDING'), (e[(e.ERROR = 2)] = 'ERROR'), (e[(e.NONE = 3)] = 'NONE'), e;
    })({});
function f(e, t, n, r) {
    let a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        s = arguments.length > 5 ? arguments[5] : void 0;
    i.useEffect(() => {
        null != e && (1 === t && e !== l.h8.AWAITING_AUTHENTICATION ? n(l.h8.AWAITING_AUTHENTICATION) : e === l.h8.AWAITING_AUTHENTICATION && (2 === t ? n(l.h8.REVIEW) : 3 === t && (a ? (null != s ? s() : n(l.h8.REVIEW)) : (r(u.A.COMPLETED), n(l.h8.CONFIRM)))));
    }, [e, t, n, r, a, s]);
}
let _ = 5000;
function p(e) {
    let t = (0, r.e7)([c.Z], () => c.Z.awaitingPaymentId),
        n = (0, r.e7)([o.Z], () => o.Z.isConnected()),
        l = i.useRef(new a.Xp());
    i.useEffect(() => {
        n || null == t || 1 !== e ? l.current.stop() : l.current.start(_, () => (0, s.O1)(t));
    }, [t, e, n]);
}
