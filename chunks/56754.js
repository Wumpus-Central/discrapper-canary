i.d(e, { L: () => s });
var n = i(311907),
    l = i(469778);
function s(t) {
    return (0, n.bG)([l.A], () => {
        let e = l.A.getForSku(t);
        if (null == e) return !1;
        let i = 0;
        for (let t of e) {
            let e = t.endsAt?.getTime() ?? 1 / 0;
            e >= i && (i = e);
        }
        return i > new Date().getTime();
    }, [t]);
}
