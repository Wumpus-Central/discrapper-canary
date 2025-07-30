(n.d(t, { Z: () => r }), n(388685));
var i = n(73800);
function r(e, t) {
    let [n, r] = i.useState(null),
        l = i.useCallback((e) => {
            r(e);
        }, []),
        o = i.useCallback(() => {
            r(null);
        }, []),
        a = i.useCallback(
            (i) => {
                o();
                let r = e.find((e) => {
                        let { id: t } = e;
                        return n === t;
                    }),
                    l = e.find((e) => {
                        let { id: t } = e;
                        return i === t;
                    });
                if (null == r || null == l || r === l) return;
                let a = [...e],
                    s = a.indexOf(r),
                    c = a.indexOf(l),
                    d = +(c - s > 0);
                (a.splice(s, 1), (c = a.indexOf(l)), a.splice(c + d, 0, r), t(a));
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
