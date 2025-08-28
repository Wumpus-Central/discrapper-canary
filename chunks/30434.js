n.d(t, { Z: () => o });
var r = n(951288),
    l = n(647438),
    i = n(59662);
function o(e) {
    let { node: t, children: n } = e,
        { navTransition: o } = (0, i.t)(),
        s = l.useRef(null);
    return (
        l.useEffect(() => {
            var e, n;
            (null == o || null == (e = o.target) ? void 0 : e.key) === t.key &&
                (null == (n = s.current) ||
                    n.scrollIntoView({
                        behavior: o.animateScroll ? "smooth" : "auto",
                        block: "center",
                    }),
                o.complete());
        }, [o, t.key]),
        (0, r.jsx)("div", {
            ref: s,
            "data-debug-key": t.key,
            children: n,
        })
    );
}
