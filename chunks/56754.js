i.d(n, { L: () => r });
var e = i(17928),
    l = i(469778);
function r(t) {
    return (0, e.bG)(
        [l.A],
        () => {
            let n = l.A.getForSku(t);
            if (null == n) return !1;
            let i = 0;
            for (let t of n) {
                let n = t.endsAt?.getTime() ?? 1 / 0;
                n >= i && (i = n);
            }
            return i > new Date().getTime();
        },
        [t],
    );
}
