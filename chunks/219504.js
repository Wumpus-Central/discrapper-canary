n.d(t, { A: () => l });
var i = n(64700);
function l(e, t) {
    let [n, l] = i.useState(null),
        s = i.useCallback((e) => {
            l(e);
        }, []),
        a = i.useCallback(() => {
            l(null);
        }, []),
        r = i.useCallback(
            (i) => {
                a();
                let l = e.find((e) => {
                        let { id: t } = e;
                        return n === t;
                    }),
                    s = e.find((e) => {
                        let { id: t } = e;
                        return i === t;
                    });
                if (null == l || null == s || l === s) return;
                let r = [...e],
                    o = r.indexOf(l),
                    c = r.indexOf(s),
                    d = +(c - o > 0);
                r.splice(o, 1), (c = r.indexOf(s)), r.splice(c + d, 0, l), t(r);
            },
            [e, n, a, t],
        );
    return { draggingId: n, handleDragStart: s, handleDragReset: a, handleDragComplete: r };
}
