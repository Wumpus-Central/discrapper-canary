n.d(t, {
    i: () => a,
    l: () => c,
}),
    n(388685),
    n(539854);
var r = n(473749),
    l = n(392711),
    i = n.n(l),
    o = n(996435);
function a(e, t) {
    let n = r.useRef(null),
        l = r.useRef(new Set());
    r.useEffect(() => {
        let e = t.current;
        if (null == e) return;
        let r = Array.from(e.querySelectorAll("[data-settings-category-key]")).filter(
                (e) => null != e.getAttribute("data-settings-category-key"),
            ),
            i = new Map(),
            a = [];
        return (
            r.forEach((e) => {
                let t = e.getAttribute("data-settings-category-key");
                null != t && (i.set(e, t), a.push(t));
            }),
            (n.current = new IntersectionObserver(
                (e) => {
                    if (
                        (e.forEach((e) => {
                            let { isIntersecting: t, target: n } = e,
                                r = i.get(n);
                            null != r && (t ? l.current.add(r) : l.current.delete(r));
                        }),
                        o.Z.getField("disableSidebarCategoryAutoSelect"))
                    )
                        return;
                    let t = [];
                    if (
                        (a.forEach((e) => {
                            l.current.has(e) && t.push(e);
                        }),
                        0 === t.length)
                    )
                        return;
                    let n = t[0];
                    o.Z.getField("activeCategoryKey") !== n && o.Z.setState({ activeCategoryKey: n });
                },
                {
                    root: e,
                    rootMargin: "0px 100000px 0px 100000px",
                    threshold: 1,
                },
            )),
            r.forEach((e) => {
                var t;
                return null == (t = n.current) ? void 0 : t.observe(e);
            }),
            () => {
                var e;
                r.forEach((e) => {
                    var t;
                    return null == (t = n.current) ? void 0 : t.unobserve(e);
                }),
                    null == (e = n.current) || e.disconnect(),
                    (n.current = null);
            }
        );
    }, [t, e.key, e.layout]);
}
function c() {
    r.useEffect(() => {
        let e = document.querySelectorAll("[data-settings-panel-scroller]");
        if (0 === e.length) return;
        let t = e[0];
        if (null == t) return;
        let n = i().debounce(() => {
            o.Z.setState({ disableSidebarCategoryAutoSelect: !1 });
        }, 50);
        return (
            t.addEventListener("scroll", n),
            () => {
                t.removeEventListener("scroll", n), null == n || n.cancel();
            }
        );
    }, []),
        r.useEffect(
            () => () => {
                o.Z.setState({ disableSidebarCategoryAutoSelect: !1 });
            },
            [],
        );
}
