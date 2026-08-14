n.d(t, { A: () => g });
var i = n(477900),
    r = n(582128),
    l = n(17928);
if (588245 != n.j) var s = n(43105);
var a = n(181079),
    o = n(676168),
    u = n(652215),
    c = n(49999),
    d = n(449817),
    f = n(375708),
    A = n(988572);
let m = new Set([u.rbe.DM, u.rbe.GROUP_DM, u.rbe.GUILD_TEXT, u.rbe.GUILD_ANNOUNCEMENT, u.rbe.GUILD_FORUM]);
function g(e) {
    return (0, o.r1)() ? (0, i.jsx)(N, { ...e }) : null;
}
function N(e) {
    let { targetElementRef: t, channelType: n, isTargetInViewport: u = !0, onVisibilityChange: g } = e,
        [N, v] = r.useState("top"),
        p = r.useRef(null),
        h = r.useRef(null),
        j = (0, l.bG)([a.A], () => a.A.hasStoredFavorites()),
        { shouldShowPopover: x, markPopoverAsDismissed: _ } = (0, o.zO)(u && m.has(n));
    if (
        (r.useEffect(() => {
            if (x) return g?.(!0), () => g?.(!1);
        }, [x, g]),
        r.useLayoutEffect(() => {
            if (x && null != t.current)
                return (
                    e(),
                    window.addEventListener("resize", e),
                    window.addEventListener("scroll", e, !0),
                    () => {
                        null != h.current && (window.cancelAnimationFrame(h.current), (h.current = null)),
                            window.removeEventListener("resize", e),
                            window.removeEventListener("scroll", e, !0);
                    }
                );
            function e() {
                null == h.current &&
                    (h.current = window.requestAnimationFrame(() => {
                        (h.current = null),
                            (function () {
                                let e = t.current?.getBoundingClientRect();
                                if (null == e) return;
                                let n = p.current?.getBoundingClientRect().height ?? 0;
                                v(window.innerHeight - e.top < n ? "bottom" : "top");
                            })();
                    }));
            }
        }, [x, t]),
        !x)
    )
        return null;
    let R = j ? d.default.TWuDTt : d.default["25YCHl"];
    return (0, i.jsx)(s.A, {
        targetElementRef: t,
        gradientColor: "nitro-pink",
        position: "right",
        alignmentStrategy: "edge",
        align: N,
        caretConfig: { align: "top" === N ? "start" : "end" },
        popoverRef: p,
        badge: { type: "beta", variant: "expressive" },
        graphic: { src: A.A, type: "image", aspectRatio: "16/9" },
        title: f.intl.string(R),
        body: f.intl.string(d.default.DFjrWw),
        onRequestClose: () => _(c.i.USER_DISMISS),
    });
}
