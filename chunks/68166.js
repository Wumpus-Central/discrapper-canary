"use strict";
n.d(t, { A: () => d });
var r = n(64700),
    i = n(311907),
    a = n(397927),
    s = n(267102),
    o = n(186111),
    l = n(712687),
    u = n(652215);
function c(e) {
    return !Object.entries(e).every((e) => {
        let [t, n] = e;
        return 0 === n.length;
    });
}
function d() {
    let e = (0, a.red)((e) => c(e)),
        t = (0, i.bG)([l.A], () => l.A.isOpen()),
        n = (0, i.bG)([o.A], () => o.A.hasLayers()),
        [d, _] = r.useState(!1),
        f = (0, s.aL)();
    return (
        r.useEffect(() => {
            function e() {
                _(!0);
            }
            function t() {
                _(!1);
            }
            return (
                f.subscribe(u.jej.POPOUT_SHOW, e),
                f.subscribe(u.jej.POPOUT_HIDE, t),
                () => {
                    f.unsubscribe(u.jej.POPOUT_SHOW, e), f.unsubscribe(u.jej.POPOUT_HIDE, t);
                }
            );
        }, [f]),
        e || t || d || n
    );
}
