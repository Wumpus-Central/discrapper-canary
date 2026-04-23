"use strict";
n.d(t, { A: () => c });
var r = n(64700),
    i = n(311907),
    s = n(192308),
    a = n(267102),
    o = n(186111),
    l = n(712687),
    u = n(652215);
function c() {
    let e = (0, s.useModalsStore)(
            (e) =>
                !Object.entries(e).every((e) => {
                    let [t, n] = e;
                    return 0 === n.length;
                }),
        ),
        t = (0, i.bG)([l.A], () => l.A.isOpen()),
        n = (0, i.bG)([o.A], () => o.A.hasLayers()),
        [c, d] = r.useState(!1),
        _ = (0, a.aL)();
    return (
        r.useEffect(() => {
            function e() {
                d(!0);
            }
            function t() {
                d(!1);
            }
            return (
                _.subscribe(u.jej.POPOUT_SHOW, e),
                _.subscribe(u.jej.POPOUT_HIDE, t),
                () => {
                    _.unsubscribe(u.jej.POPOUT_SHOW, e), _.unsubscribe(u.jej.POPOUT_HIDE, t);
                }
            );
        }, [_]),
        e || t || c || n
    );
}
