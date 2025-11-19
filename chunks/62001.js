n.d(t, { m: () => i }), n(388685), n(642613);
var r = n(473749);
function i(e, t, n) {
    let i = r.useRef(null),
        l = r.useRef(new Map()),
        a = r.useRef(new Set()),
        s = r.useRef(t),
        o = r.useRef(e);
    return (
        r.useEffect(() => {
            (s.current = t), (o.current = e);
        }, [t, e]),
        r.useEffect(() => {
            var e;
            return (
                (i.current = new IntersectionObserver(
                    (e) => {
                        let t = !1;
                        if (
                            (e.forEach((e) => {
                                let n = e.target.getAttribute("data-item-id");
                                null != n &&
                                    (e.isIntersecting && e.intersectionRatio >= 0.5
                                        ? a.current.has(n) || (a.current.add(n), (t = !0))
                                        : a.current.has(n) && (a.current.delete(n), (t = !0)));
                            }),
                            t)
                        ) {
                            let e = o.current,
                                t = Array.from(a.current)
                                    .map((t) => {
                                        let n = e.findIndex((e) => e.id === t);
                                        return n >= 0
                                            ? {
                                                  index: n,
                                                  item: e[n],
                                              }
                                            : null;
                                    })
                                    .filter((e) => null !== e)
                                    .sort((e, t) => e.index - t.index);
                            s.current({ viewableItems: t });
                        }
                    },
                    {
                        root: null != (e = null == n ? void 0 : n.current) ? e : null,
                        threshold: [0, 0.5, 1],
                        rootMargin: "0px",
                    },
                )),
                () => {
                    var e;
                    null == (e = i.current) || e.disconnect();
                }
            );
        }, [n]),
        {
            registerItemRef: r.useCallback((e, t) => {
                if (null != t) l.current.set(e, t), null != i.current && i.current.observe(t);
                else {
                    let t = l.current.get(e);
                    if (null != t) {
                        var n;
                        null == (n = i.current) || n.unobserve(t), l.current.delete(e);
                    }
                }
            }, []),
        }
    );
}
