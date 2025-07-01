(n.d(e, { M: () => l }), n(388685));
var i = n(442837),
    r = n(580130);
function l(t) {
    return (0, i.e7)(
        [r.Z],
        () => {
            let e = r.Z.getForSku(t);
            if (null == e) return !1;
            let n = 0;
            for (let t of e) {
                var i, l;
                let e = null != (l = null == (i = t.endsAt) ? void 0 : i.getTime()) ? l : 1 / 0;
                e >= n && (n = e);
            }
            return n > new Date().getTime();
        },
        [t]
    );
}
