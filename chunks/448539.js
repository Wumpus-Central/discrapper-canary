var i = n(582128),
    r = n(333007);
let a = Object.freeze({ box: "border-box" });
n.d(
    t,
    {},
    {
        A: function (e) {
            let { ref: t, onUpdate: n, resizeObserver: s, listenerMap: l, key: o } = e;
            (0, i.useLayoutEffect)(() => {
                let { current: e } = t;
                return (
                    null != e &&
                        (l.set(e, (e) => {
                            (0, r.flushSync)(() => {
                                n(e, o);
                            });
                        }),
                        s.observe(e, a)),
                    () => {
                        null != e && (s.unobserve(e), l.delete(e));
                    }
                );
            }, [n, s, t, l, o]);
        },
        F: { observe() {}, unobserve() {} },
    },
);
