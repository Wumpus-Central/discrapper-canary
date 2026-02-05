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
                    d = r.indexOf(s),
                    c = +(d - o > 0);
                r.splice(o, 1), (d = r.indexOf(s)), r.splice(d + c, 0, l), t(r);
            },
            [e, n, a, t],
        );
    return { draggingId: n, handleDragStart: s, handleDragReset: a, handleDragComplete: r };
}
