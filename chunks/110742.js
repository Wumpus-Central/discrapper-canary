n.d(t, { M: () => i }), n(47120);
var r = n(442837),
    l = n(580130);
function i(e) {
    return (0, r.e7)(
        [l.Z],
        () => {
            let t = l.Z.getForSku(e);
            if (null == t) return !1;
            let n = 0;
            for (let e of t) {
                var r, i;
                let t = null != (i = null == (r = e.endsAt) ? void 0 : r.getTime()) ? i : 1 / 0;
                t >= n && (n = t);
            }
            return n > new Date().getTime();
        },
        [e]
    );
}
