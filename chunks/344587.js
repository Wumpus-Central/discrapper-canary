n.d(t, { Q: () => s });
var l = n(582128),
    a = n(218394);
function s(e) {
    let [t, n] = l.useState(e),
        [s, r] = l.useState("idle"),
        [i, u] = l.useState(e),
        d = (0, a.j)();
    return (
        i !== e
            ? (u(e), r(d && e !== t ? "exit" : "idle"), d || n(e))
            : d || ("idle" === s && t === i) || (n(i), r("idle")),
        l.useEffect(() => {
            if ("exit" !== s) return;
            let e = setTimeout(() => {
                (n(i), r("enter"));
            }, 150);
            return () => clearTimeout(e);
        }, [s, i]),
        l.useEffect(() => {
            if ("enter" !== s) return;
            let e = 0,
                t = requestAnimationFrame(() => {
                    e = requestAnimationFrame(() => r("idle"));
                });
            return () => {
                (cancelAnimationFrame(t), cancelAnimationFrame(e));
            };
        }, [s]),
        { text: t, phase: s }
    );
}
