n.d(t, { A: () => o }), n(321073);
var l = n(64700),
    i = n(155718),
    a = n(594061),
    s = n(723702),
    r = n(847381);
function o(e) {
    return (
        a.bW.loadIfNecessary(),
        l.useMemo(() => {
            let t = [];
            e.forEach((e) => t.push(e.application.id));
            let n = [...t];
            return n.sort((e, n) => (t.findIndex((t) => t === e) < t.findIndex((e) => e === n) ? -1 : 1)), c(e, n);
        }, [e])
    );
}
let c = (e, t) => {
    let n = [...e],
        l = 0;
    return (
        t.forEach((e) => {
            let t = n.findIndex((t) => t.application.id === e);
            if (-1 !== t) {
                let e = n[t];
                n.splice(t, 1), (n = [...n.slice(0, l), e, ...n.slice(l)]), ++l;
            }
        }),
        n
            .map((e, t) => [e, t])
            .filter((e) => {
                let [t] = e,
                    n =
                        t.application.embeddedActivityConfig?.client_platform_config[(0, r.A)((0, s.getOS)())]
                            ?.label_type;
                return null != n && (n === i.Hr.NEW || n === i.Hr.UPDATED);
            })
            .forEach((e) => {
                let [t, l] = e,
                    i =
                        null != t.application.embeddedActivityConfig &&
                        null != t.application.embeddedActivityConfig.shelf_rank
                            ? t.application.embeddedActivityConfig.shelf_rank - 1
                            : l;
                if (i < l) {
                    let e = n[l];
                    n.splice(l, 1), (n = [...n.slice(0, i), e, ...n.slice(i)]);
                }
            }),
        n
    );
};
