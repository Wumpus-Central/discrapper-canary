e.d(n, { L: () => r });
var i = e(17928),
    l = e(469778);
function r(t) {
    return (0, i.bG)([l.A], () => {
        let n = l.A.getForSku(t);
        if (null == n) return !1;
        let e = 0;
        for (let t of n) {
            let n = t.endsAt?.getTime() ?? 1 / 0;
            n >= e && (e = n);
        }
        return e > new Date().getTime();
    }, [t]);
}
