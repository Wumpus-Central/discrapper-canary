var i = n(121894);
let r = new WeakMap(),
    a = new Map(),
    s = new WeakMap();
n.d(
    t,
    {},
    {
        $v: function (e, t) {
            e.unobserve(t);
        },
        JE: function (e, t) {
            (a.delete(e), null != t && r.delete(t));
        },
        NQ: function (e, t, n) {
            (r.set(t, e), a.set(e, n));
            let l = t.ownerDocument?.defaultView ?? window,
                o = s.get(l);
            return (
                null == o &&
                    ((o = new l.ResizeObserver((e) => {
                        (0, i.r)(() => {
                            for (let t of e) {
                                let e = t.target,
                                    n = r.get(e);
                                if (null == n) continue;
                                let i = a.get(n);
                                null != i && i(t);
                            }
                        });
                    })),
                    s.set(l, o)),
                o
            );
        },
        wB: function (e, t) {
            e.observe(t);
        },
    },
);
