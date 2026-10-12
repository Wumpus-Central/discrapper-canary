n.d(t, { Q: () => i });
var l = n(582128),
    a = n(148087);
function i(e) {
    let [t, n] = l.useState(e),
        [i, r] = l.useState("idle"),
        [s, o] = l.useState(e),
        d = (0, a.A)();
    return (
        s !== e
            ? (o(e), r(d && e !== t ? "exit" : "idle"), d || n(e))
            : d || ("idle" === i && t === s) || (n(s), r("idle")),
        l.useEffect(() => {
            if ("exit" !== i) return;
            let e = setTimeout(() => {
                (n(s), r("enter"));
            }, 150);
            return () => clearTimeout(e);
        }, [i, s]),
        l.useEffect(() => {
            if ("enter" !== i) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => r("idle"));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [i]),
        { text: t, phase: i }
    );
}
