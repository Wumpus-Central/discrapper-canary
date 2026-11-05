var l = n(582128),
    a = n(218394);
n.d(
    t,
    {},
    {
        Q: function (e) {
            let [t, n] = l.useState(e),
                [r, s] = l.useState("idle"),
                [i, u] = l.useState(e),
                o = (0, a.j)();
            return (
                i !== e
                    ? (u(e), s(o && e !== t ? "exit" : "idle"), o || n(e))
                    : o || ("idle" === r && t === i) || (n(i), s("idle")),
                l.useEffect(() => {
                    if ("exit" !== r) return;
                    let e = setTimeout(() => {
                        (n(i), s("enter"));
                    }, 150);
                    return () => clearTimeout(e);
                }, [r, i]),
                l.useEffect(() => {
                    if ("enter" !== r) return;
                    let e = 0,
                        t = requestAnimationFrame(() => {
                            e = requestAnimationFrame(() => s("idle"));
                        });
                    return () => {
                        (cancelAnimationFrame(t), cancelAnimationFrame(e));
                    };
                }, [r]),
                { text: t, phase: r }
            );
        },
    },
);
