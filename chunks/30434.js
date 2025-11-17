n.d(t, { Z: () => a });
var r = n(54381),
    l = n(473749),
    i = n(925477),
    o = n(59662);
function a(e) {
    let { node: t, children: n } = e,
        { navTransition: a } = (0, o.t)(),
        c = l.useRef(null),
        s = l.useContext(i.Sf).reducedMotion.enabled;
    return (
        l.useEffect(() => {
            if ((null == a ? void 0 : a.target) === t.key) {
                var e;
                null == (e = c.current) ||
                    e.scrollIntoView({
                        behavior: a.animateScroll && !s ? "smooth" : "auto",
                        block: "center",
                    }),
                    a.complete();
            }
        }, [a, t.key, s]),
        (0, r.jsx)("div", {
            ref: c,
            "data-debug-key": t.key,
            children: n,
        })
    );
}
