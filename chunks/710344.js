n.d(t, { Z: () => r }), n(388685);
var i = n(473749);
function r(e, t) {
    let [n, r] = i.useState(null),
        l = i.useCallback((e) => {
            r(e);
        }, []),
        a = i.useCallback(() => {
            r(null);
        }, []),
        o = i.useCallback(
            (i) => {
                a();
                let r = e.find((e) => {
                        let { id: t } = e;
                        return n === t;
                    }),
                    l = e.find((e) => {
                        let { id: t } = e;
                        return i === t;
                    });
                if (null == r || null == l || r === l) return;
                let o = [...e],
                    s = o.indexOf(r),
                    c = o.indexOf(l),
                    d = +(c - s > 0);
                o.splice(s, 1), (c = o.indexOf(l)), o.splice(c + d, 0, r), t(o);
            },
            [e, n, a, t],
        );
    return {
        draggingId: n,
        handleDragStart: l,
        handleDragReset: a,
        handleDragComplete: o,
    };
}
