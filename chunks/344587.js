n.d(t, { Q: () => r });
var l = n(582128),
    a = n(148087);
function r(e) {
    let [t, n] = l.useState(e),
        [r, i] = l.useState("idle"),
        [s, u] = l.useState(e),
        d = (0, a.A)();
    return (
        s !== e
            ? (u(e), i(d && e !== t ? "exit" : "idle"), d || n(e))
            : d || ("idle" === r && t === s) || (n(s), i("idle")),
        l.useEffect(() => {
            if ("exit" !== r) return;
            let e = setTimeout(() => {
                (n(s), i("enter"));
            }, 150);
            return () => clearTimeout(e);
        }, [r, s]),
        l.useEffect(() => {
            if ("enter" !== r) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => i("idle"));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [r]),
        { text: t, phase: r }
    );
}
