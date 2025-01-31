n.d(t, { Z: () => l }), n(47120);
var i = n(192379);
function l(e, t) {
    let [n, l] = i.useState(null),
        a = i.useCallback((e) => {
            l(e);
        }, []),
        r = i.useCallback(() => {
            l(null);
        }, []),
        s = i.useCallback(
            (i) => {
                r();
                let l = e.find((e) => {
                        let { id: t } = e;
                        return n === t;
                    }),
                    a = e.find((e) => {
                        let { id: t } = e;
                        return i === t;
                    });
                if (null == l || null == a || l === a) return;
                let s = [...e],
                    o = s.indexOf(l),
                    d = s.indexOf(a),
                    c = d - o > 0 ? 1 : 0;
                s.splice(o, 1), (d = s.indexOf(a)), s.splice(d + c, 0, l), t(s);
            },
            [e, n, r, t]
        );
    return {
        draggingId: n,
        handleDragStart: a,
        handleDragReset: r,
        handleDragComplete: s
    };
}
