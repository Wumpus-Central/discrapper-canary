r.d(n, {
    D6: function () {
        return _;
    },
    bp: function () {
        return p;
    },
    wr: function () {
        return i;
    }
});
var i,
    a = r(192379),
    o = r(442837),
    s = r(846519),
    l = r(355467),
    u = r(38618),
    c = r(409813),
    d = r(45572),
    f = r(505649);
function p(e, n, r, i) {
    let o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        s = arguments.length > 5 ? arguments[5] : void 0;
    a.useEffect(() => {
        if (null != e) 1 === n && e !== c.h8.AWAITING_AUTHENTICATION ? r(c.h8.AWAITING_AUTHENTICATION) : e === c.h8.AWAITING_AUTHENTICATION && (2 === n ? r(c.h8.REVIEW) : 3 === n && (o ? (null != s ? s() : r(c.h8.REVIEW)) : (i(d.A.COMPLETED), r(c.h8.CONFIRM))));
    }, [e, n, r, i, o, s]);
}
!(function (e) {
    (e[(e.PENDING = 1)] = 'PENDING'), (e[(e.ERROR = 2)] = 'ERROR'), (e[(e.NONE = 3)] = 'NONE');
})(i || (i = {}));
let h = 5000;
function _(e) {
    let n = (0, o.e7)([f.Z], () => f.Z.awaitingPaymentId),
        r = (0, o.e7)([u.Z], () => u.Z.isConnected()),
        i = a.useRef(new s.Xp());
    a.useEffect(() => {
        r || null == n || 1 !== e ? i.current.stop() : i.current.start(h, () => (0, l.O1)(n));
    }, [n, e, r]);
}
