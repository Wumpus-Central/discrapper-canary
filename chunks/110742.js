n.d(t, { M: () => r }), n(47120);
var i = n(442837),
    l = n(580130);
function r(e) {
    return (0, i.e7)(
        [l.Z],
        () => {
            let t = l.Z.getForSku(e);
            if (null == t) return !1;
            let n = 0;
            for (let e of t) {
                var i, r;
                let t = null !== (r = null === (i = e.endsAt) || void 0 === i ? void 0 : i.getTime()) && void 0 !== r ? r : 1 / 0;
                t >= n && (n = t);
            }
            return n > new Date().getTime();
        },
        [e]
    );
}
