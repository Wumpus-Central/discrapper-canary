n.d(t, {
    i: () => s,
    l: () => l,
}),
    n(388685),
    n(539854);
var r = n(473749),
    i = n(392711),
    a = n.n(i),
    o = n(996435);
function s(e, t, n) {
    let i = r.useRef(null),
        a = r.useRef(new Set());
    r.useEffect(() => {
        let e = n.current;
        if (null == e) return;
        let t = Array.from(e.querySelectorAll("[data-settings-category-key]")).filter(
                (e) => null != e.getAttribute("data-settings-category-key"),
            ),
            r = new Map(),
            s = [];
        return (
            t.forEach((e) => {
                let t = e.getAttribute("data-settings-category-key");
                null != t && (r.set(e, t), s.push(t));
            }),
            (i.current = new IntersectionObserver(
                (e) => {
                    if (
                        (e.forEach((e) => {
                            let { isIntersecting: t, target: n } = e,
                                i = r.get(n);
                            null != i && (t ? a.current.add(i) : a.current.delete(i));
                        }),
                        o.Z.getField("disableSidebarCategoryAutoSelect"))
                    )
                        return;
                    let t = [];
                    if (
                        (s.forEach((e) => {
                            a.current.has(e) && t.push(e);
                        }),
                        0 === t.length)
                    )
                        return;
                    let n = t[0];
                    o.Z.getField("currentCategoryKey") !== n && o.Z.setState({ currentCategoryKey: n });
                },
                {
                    root: e,
                    rootMargin: "0px 100000px 0px 100000px",
                    threshold: 1,
                },
            )),
            t.forEach((e) => {
                var t;
                return null == (t = i.current) ? void 0 : t.observe(e);
            }),
            () => {
                var e;
                t.forEach((e) => {
                    var t;
                    return null == (t = i.current) ? void 0 : t.unobserve(e);
                }),
                    null == (e = i.current) || e.disconnect(),
                    (i.current = null);
            }
        );
    }, [n, e, t]);
}
function l() {
    r.useEffect(() => {
        let e = document.querySelectorAll("[data-settings-panel-scroller]");
        if (0 === e.length) return;
        let t = e[0];
        if (null == t) return;
        let n = a().debounce(() => {
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
