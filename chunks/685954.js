"use strict";
n.d(t, { A: () => l }), n(321073);
var r = n(64700),
    i = n(155718),
    s = n(594061),
    a = n(723702),
    o = n(847381);
function l(e) {
    return (
        s.bW.loadIfNecessary(),
        r.useMemo(() => {
            let t = [];
            e.forEach((e) => t.push(e.application.id));
            let n = [...t];
            return n.sort((e, n) => (t.findIndex((t) => t === e) < t.findIndex((e) => e === n) ? -1 : 1)), u(e, n);
        }, [e])
    );
}
let u = (e, t) => {
    let n = [...e],
        r = 0;
    return (
        t.forEach((e) => {
            let t = n.findIndex((t) => t.application.id === e);
            if (-1 !== t) {
                let e = n[t];
                n.splice(t, 1), (n = [...n.slice(0, r), e, ...n.slice(r)]), ++r;
            }
        }),
        n
            .map((e, t) => [e, t])
            .filter((e) => {
                let [t] = e,
                    n =
                        t.application.embeddedActivityConfig?.client_platform_config[(0, o.A)((0, a.getOS)())]
                            ?.label_type;
                return null != n && (n === i.Hr.NEW || n === i.Hr.UPDATED);
            })
            .forEach((e) => {
                let [t, r] = e,
                    i =
                        null != t.application.embeddedActivityConfig &&
                        null != t.application.embeddedActivityConfig.shelf_rank
                            ? t.application.embeddedActivityConfig.shelf_rank - 1
                            : r;
                if (i < r) {
                    let e = n[r];
                    n.splice(r, 1), (n = [...n.slice(0, i), e, ...n.slice(i)]);
                }
            }),
        n
    );
};
