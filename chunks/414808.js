n.d(t, { A: () => c });
var l = n(627968),
    s = n(64700),
    a = n(342494),
    i = n(397927),
    r = n(49999),
    o = n(525736),
    u = n(985018);
function c(e) {
    let { targetElementRef: t, isPremium: n, markMenuItemPopoverAsDismissed: c } = e,
        [d, m] = s.useState("top"),
        A = s.useRef(null),
        p = s.useRef(null);
    return (
        s.useLayoutEffect(() => {
            if (null == t.current) return;
            let e = () => {
                null == p.current &&
                    (p.current = window.requestAnimationFrame(() => {
                        (p.current = null),
                            (() => {
                                let e = t.current?.getBoundingClientRect();
                                if (null == e) return;
                                let n = A.current?.getBoundingClientRect().height ?? 0;
                                m(window.innerHeight - e.top < n ? "bottom" : "top");
                            })();
                    }));
            };
            return (
                e(),
                window.addEventListener("resize", e),
                window.addEventListener("scroll", e, !0),
                () => {
                    null != p.current && (window.cancelAnimationFrame(p.current), (p.current = null)),
                        window.removeEventListener("resize", e),
                        window.removeEventListener("scroll", e, !0);
                }
            );
        }, [t]),
        (0, l.jsx)(a.AM, {
            targetElementRef: t,
            position: "right",
            alignmentStrategy: "edge",
            align: d,
            caretConfig: { align: "top" === d ? "start" : "end" },
            popoverRef: A,
            badge: { type: "beta" },
            title: u.intl.string(n ? o.default["25YCHl"] : o.default.A3ZjbM),
            body: u.intl.string(n ? o.default.DFjrWw : o.default.qJUI2v),
            onRequestClose: () => c?.(r.i.USER_DISMISS),
            actions: [
                {
                    icon: n ? void 0 : i.tvc,
                    text: n ? u.intl.string(o.default["+h9aza"]) : u.intl.string(o.default["avps/2"]),
                    onClick: () => c?.(r.i.TAKE_ACTION),
                    variant: n ? void 0 : "expressive",
                },
            ],
        })
    );
}
