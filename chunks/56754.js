l.d(e, { L: () => a });
var i = l(17928),
    n = l(469778);
function a(t) {
    return (0, i.bG)([n.A], () => {
        let e = n.A.getForSku(t);
        if (null == e) return !1;
        let l = 0;
        for (let t of e) {
            let e = t.endsAt?.getTime() ?? 1 / 0;
            e >= l && (l = e);
        }
        return l > new Date().getTime();
    }, [t]);
}
