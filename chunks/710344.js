n.d(t, { Z: () => i }), n(47120);
var r = n(192379);
function i(e, t) {
    let [n, i] = r.useState(null),
        l = r.useCallback((e) => {
            i(e);
        }, []),
        o = r.useCallback(() => {
            i(null);
        }, []),
        a = r.useCallback(
            (r) => {
                o();
                let i = e.find((e) => {
                        let { id: t } = e;
                        return n === t;
                    }),
                    l = e.find((e) => {
                        let { id: t } = e;
                        return r === t;
                    });
                if (null == i || null == l || i === l) return;
                let a = [...e],
                    s = a.indexOf(i),
                    c = a.indexOf(l),
                    d = +(c - s > 0);
                a.splice(s, 1), (c = a.indexOf(l)), a.splice(c + d, 0, i), t(a);
            },
            [e, n, o, t]
        );
    return {
        draggingId: n,
        handleDragStart: l,
        handleDragReset: o,
        handleDragComplete: a
    };
}
