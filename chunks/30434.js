n.d(t, { Z: () => c });
var r = n(54381),
    l = n(473749),
    i = n(925477),
    o = n(59662),
    a = n(700425);
function c(e) {
    let { node: t, children: n } = e,
        { navTransition: c } = (0, o.t)(),
        s = l.useRef(null),
        u = l.useContext(i.Sf).reducedMotion.enabled,
        { onProgrammaticScrollStart: d } = (0, a.y)(t);
    return (
        l.useEffect(() => {
            if ((null == c ? void 0 : c.target) === t.key) {
                var e;
                d(),
                    null == (e = s.current) ||
                        e.scrollIntoView({
                            behavior: c.animateScroll && !u ? "smooth" : "auto",
                            block: "start",
                        }),
                    c.complete();
            }
        }, [c, t.key, d, u]),
        (0, r.jsx)("div", {
            ref: s,
            "data-debug-key": t.key,
            children: n,
        })
    );
}
