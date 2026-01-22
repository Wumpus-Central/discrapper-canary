n.d(t, { A: () => r }), n(896048);
var i = n(64700);
function r(e, t) {
    let [n, r] = i.useState(null),
        l = i.useCallback((e) => {
            r(e);
        }, []),
        a = i.useCallback(() => {
            r(null);
        }, []),
        s = i.useCallback(
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
                let s = [...e],
                    o = s.indexOf(r),
                    c = s.indexOf(l),
                    d = +(c - o > 0);
                s.splice(o, 1), (c = s.indexOf(l)), s.splice(c + d, 0, r), t(s);
            },
            [e, n, a, t],
        );
    return {
        draggingId: n,
        handleDragStart: l,
        handleDragReset: a,
        handleDragComplete: s,
    };
}
