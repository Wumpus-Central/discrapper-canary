a.d(t, { L: () => s });
var n = a(64700),
    r = a(844222),
    l = a(866323),
    i = a(555115);
function s(e) {
    let { shouldShow: t, caretPosition: a, onExitComplete: s } = e,
        { reducedMotion: o } = n.useContext(r.C),
        { config: c, ...d } = ((e, t) => {
            let a = { opacity: 0, transform: "" },
                n = { opacity: 0, transform: "" };
            if (t)
                return {
                    from: { opacity: 0 },
                    enter: { opacity: 1 },
                    leave: { opacity: 0 },
                    config: { duration: 150 },
                };
            switch (e) {
                case "top":
                    (a.transform = "translate3d(0, -10px, 0)"), (n.transform = "translate3d(0, -10px, 0)");
                    break;
                case "bottom":
                    (a.transform = "translate3d(0, 10px, 0)"), (n.transform = "translate3d(0, 10px, 0)");
                    break;
                case "left":
                    (a.transform = "translate3d(-10px, 0, 0)"), (n.transform = "translate3d(-10px, 0, 0)");
                    break;
                case "right":
                    (a.transform = "translate3d(10px, 0, 0)"), (n.transform = "translate3d(10px, 0, 0)");
            }
            return { from: a, enter: { opacity: 1, transform: "translate3d(0px, 0px, 0)" }, leave: n, config: void 0 };
        })(a, o.enabled);
    return (0, l.p)(
        t,
        {
            ...d,
            config: c ?? ((e, a) => (t ? i.n : i.t)),
            onRest: () => {
                t || null == s || s();
            },
        },
        "animate-always",
    );
}
