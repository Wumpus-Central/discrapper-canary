n.d(t, { Z: () => i });
var r = n(951288),
    l = n(647438),
    o = n(59662);
function i(e) {
    let { node: t, children: n } = e,
        { navTransition: i } = (0, o.t)(),
        a = l.useRef(null);
    return (
        l.useEffect(() => {
            if ((null == i ? void 0 : i.target) === t.key) {
                var e;
                null == (e = a.current) ||
                    e.scrollIntoView({
                        behavior: i.animateScroll ? "smooth" : "auto",
                        block: "center",
                    }),
                    i.complete();
            }
        }, [i, t.key]),
        (0, r.jsx)("div", {
            ref: a,
            "data-debug-key": t.key,
            children: n,
        })
    );
}
