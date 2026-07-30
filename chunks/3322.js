n.d(t, { A: () => f });
var i = n(477900),
    r = n(582128),
    l = n(17928);
if (88245 != n.j) var s = n(43105);
var a = n(181079),
    o = n(49999),
    u = n(449817),
    c = n(375708),
    d = n(988572);
function f(e) {
    let { targetElementRef: t, markMenuItemPopoverAsDismissed: n } = e,
        [f, m] = r.useState("top"),
        A = r.useRef(null),
        v = r.useRef(null),
        g = (0, l.bG)([a.A], () => a.A.hasStoredFavorites());
    r.useLayoutEffect(() => {
        if (null != t.current)
            return (
                e(),
                window.addEventListener("resize", e),
                window.addEventListener("scroll", e, !0),
                () => {
                    null != v.current && (window.cancelAnimationFrame(v.current), (v.current = null)),
                        window.removeEventListener("resize", e),
                        window.removeEventListener("scroll", e, !0);
                }
            );
        function e() {
            null == v.current &&
                (v.current = window.requestAnimationFrame(() => {
                    (v.current = null),
                        (function () {
                            let e = t.current?.getBoundingClientRect();
                            if (null == e) return;
                            let n = A.current?.getBoundingClientRect().height ?? 0;
                            m(window.innerHeight - e.top < n ? "bottom" : "top");
                        })();
                }));
        }
    }, [t]);
    let N = g ? u.default.TWuDTt : u.default["25YCHl"];
    return (0, i.jsx)(s.A, {
        targetElementRef: t,
        gradientColor: "nitro-pink",
        position: "right",
        alignmentStrategy: "edge",
        align: f,
        caretConfig: { align: "top" === f ? "start" : "end" },
        popoverRef: A,
        badge: { type: "beta", variant: "expressive" },
        graphic: { src: d.A, type: "image", aspectRatio: "16/9" },
        title: c.intl.string(N),
        body: c.intl.string(u.default.DFjrWw),
        onRequestClose: () => n?.(o.i.USER_DISMISS),
    });
}
