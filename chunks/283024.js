"use strict";
n.d(t, { L: () => u });
var r = n(64700),
    i = n(158954),
    a = n(397927),
    s = n(555115);
let o = 10,
    l = (e, t) => {
        let n = { opacity: 0, transform: "" },
            r = { opacity: 1, transform: "translate3d(0px, 0px, 0)" },
            i = { opacity: 0, transform: "" };
        if (t) return { from: { opacity: 0 }, enter: { opacity: 1 }, leave: { opacity: 0 }, config: { duration: 150 } };
        switch (e) {
            case "top":
                (n.transform = `translate3d(0, -${o}px, 0)`), (i.transform = `translate3d(0, -${o}px, 0)`);
                break;
            case "bottom":
                (n.transform = `translate3d(0, ${o}px, 0)`), (i.transform = `translate3d(0, ${o}px, 0)`);
                break;
            case "left":
                (n.transform = `translate3d(-${o}px, 0, 0)`), (i.transform = `translate3d(-${o}px, 0, 0)`);
                break;
            case "right":
                (n.transform = `translate3d(${o}px, 0, 0)`), (i.transform = `translate3d(${o}px, 0, 0)`);
        }
        return { from: n, enter: r, leave: i, config: void 0 };
    };
function u(e) {
    let { shouldShow: t, caretPosition: n, onExitComplete: o } = e,
        { reducedMotion: u } = r.useContext(i.CZY),
        { config: c, ...d } = l(n, u.enabled);
    return (0, a.pnh)(
        t,
        {
            ...d,
            config: c ?? ((e, n) => (t ? s.n : s.t)),
            onRest: () => {
                t || null == o || o();
            },
        },
        "animate-always",
    );
}
