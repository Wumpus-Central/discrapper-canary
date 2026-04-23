"use strict";
n.d(t, { L: () => o });
var r = n(64700),
    i = n(844222),
    s = n(866323),
    a = n(555115);
function o(e) {
    let { shouldShow: t, caretPosition: n, onExitComplete: o } = e,
        { reducedMotion: l } = r.useContext(i.C),
        { config: u, ...c } = ((e, t) => {
            let n = { opacity: 0, transform: "" },
                r = { opacity: 0, transform: "" };
            if (t)
                return {
                    from: { opacity: 0 },
                    enter: { opacity: 1 },
                    leave: { opacity: 0 },
                    config: { duration: 150 },
                };
            switch (e) {
                case "top":
                    (n.transform = "translate3d(0, -10px, 0)"), (r.transform = "translate3d(0, -10px, 0)");
                    break;
                case "bottom":
                    (n.transform = "translate3d(0, 10px, 0)"), (r.transform = "translate3d(0, 10px, 0)");
                    break;
                case "left":
                    (n.transform = "translate3d(-10px, 0, 0)"), (r.transform = "translate3d(-10px, 0, 0)");
                    break;
                case "right":
                    (n.transform = "translate3d(10px, 0, 0)"), (r.transform = "translate3d(10px, 0, 0)");
            }
            return { from: n, enter: { opacity: 1, transform: "translate3d(0px, 0px, 0)" }, leave: r, config: void 0 };
        })(n, l.enabled);
    return (0, s.p)(
        t,
        {
            ...c,
            config: u ?? ((e, n) => (t ? a.n : a.t)),
            onRest: () => {
                t || null == o || o();
            },
        },
        "animate-always",
    );
}
