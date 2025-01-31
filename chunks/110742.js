e.d(t, { M: () => a }), e(47120);
var l = e(442837),
    i = e(580130);
function a(n) {
    return (0, l.e7)(
        [i.Z],
        () => {
            let t = i.Z.getForSku(n);
            if (null == t) return !1;
            let e = 0;
            for (let n of t) {
                var l, a;
                let t = null !== (a = null === (l = n.endsAt) || void 0 === l ? void 0 : l.getTime()) && void 0 !== a ? a : 1 / 0;
                t >= e && (e = t);
            }
            return e > new Date().getTime();
        },
        [n]
    );
}
