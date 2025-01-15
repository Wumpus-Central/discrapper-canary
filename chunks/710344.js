n.d(t, {
    Z: function () {
        return l;
    }
}),
    n(47120);
var i = n(192379);
function l(e, t) {
    let [n, l] = i.useState(null),
        r = i.useCallback((e) => {
            l(e);
        }, []),
        a = i.useCallback(() => {
            l(null);
        }, []),
        o = i.useCallback(
            (i) => {
                a();
                let l = e.find((e) => {
                        let { id: t } = e;
                        return n === t;
                    }),
                    r = e.find((e) => {
                        let { id: t } = e;
                        return i === t;
                    });
                if (null == l || null == r || l === r) return;
                let o = [...e],
                    s = o.indexOf(l),
                    d = o.indexOf(r),
                    c = d - s > 0 ? 1 : 0;
                o.splice(s, 1), (d = o.indexOf(r)), o.splice(d + c, 0, l), t(o);
            },
            [e, n, a, t]
        );
    return {
        draggingId: n,
        handleDragStart: r,
        handleDragReset: a,
        handleDragComplete: o
    };
}
