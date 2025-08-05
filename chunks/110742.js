(n.d(t, { M: () => a }), n(388685));
var r = n(442837),
    i = n(580130);
function a(e) {
    return (0, r.e7)(
        [i.Z],
        () => {
            let t = i.Z.getForSku(e);
            if (null == t) return !1;
            let n = 0;
            for (let e of t) {
                var r, a;
                let t = null != (a = null == (r = e.endsAt) ? void 0 : r.getTime()) ? a : 1 / 0;
                t >= n && (n = t);
            }
            return n > new Date().getTime();
        },
        [e]
    );
}
