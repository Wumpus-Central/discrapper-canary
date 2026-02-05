n.d(e, { L: () => r });
var i = n(311907),
    l = n(469778);
function r(t) {
    return (0, i.bG)([l.A], () => {
        let e = l.A.getForSku(t);
        if (null == e) return !1;
        let n = 0;
        for (let t of e) {
            let e = t.endsAt?.getTime() ?? 1 / 0;
            e >= n && (n = e);
        }
        return n > new Date().getTime();
    }, [t]);
}
