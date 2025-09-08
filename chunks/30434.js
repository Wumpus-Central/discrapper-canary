n.d(t, { Z: () => o });
var r = n(951288),
    i = n(647438),
    l = n(59662);
function o(e) {
    let { node: t, children: n } = e,
        { navTransition: o } = (0, l.t)(),
        a = i.useRef(null);
    return (
        i.useEffect(() => {
            if ((null == o ? void 0 : o.target) === t.key) {
                var e;
                null == (e = a.current) ||
                    e.scrollIntoView({
                        behavior: o.animateScroll ? "smooth" : "auto",
                        block: "center",
                    }),
                    o.complete();
            }
        }, [o, t.key]),
        (0, r.jsx)("div", {
            ref: a,
            "data-debug-key": t.key,
            children: n,
        })
    );
}
