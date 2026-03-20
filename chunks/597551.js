n.d(t, { A: () => r });
var i = n(64700),
    s = n(311907),
    l = n(775602),
    a = n(507553);
function r(e, t) {
    let n = a.A.useField("scrollPosition"),
        r = (0, s.bG)([l.A], () => l.A.useReducedMotion);
    (0, i.useEffect)(() => {
        let i = e.current;
        if (null == i || n !== t) return;
        let s = requestAnimationFrame(() => {
            i.scrollIntoView({ behavior: r ? "auto" : "smooth" }), a.A.setState({ scrollPosition: null });
        });
        return () => cancelAnimationFrame(s);
    }, [e, t, n, r]);
}
