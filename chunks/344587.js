n.d(t, { Q: () => a });
var l = n(582128),
    r = n(218394);
function a(e) {
    let [t, n] = l.useState(e),
        [a, i] = l.useState("idle"),
        [s, u] = l.useState(e),
        o = (0, r.j)();
    return (
        s !== e
            ? (u(e), i(o && e !== t ? "exit" : "idle"), o || n(e))
            : o || ("idle" === a && t === s) || (n(s), i("idle")),
        l.useEffect(() => {
            if ("exit" !== a) return;
            let e = setTimeout(() => {
                (n(s), i("enter"));
            }, 150);
            return () => clearTimeout(e);
        }, [a, s]),
        l.useEffect(() => {
            if ("enter" !== a) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => i("idle"));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [a]),
        { text: t, phase: a }
    );
}
