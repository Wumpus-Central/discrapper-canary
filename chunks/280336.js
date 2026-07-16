"use strict";
n.d(t, { j: () => l });
var i = n(64700),
    r = n(866323),
    a = n(844222);
let s = { tension: 2400, friction: 52 };
function l(e) {
    let { shouldShow: t, onExitComplete: n, onAnimationRest: l } = e,
        { reducedMotion: o } = i.useContext(a.C),
        d = { scale: 0.95, opacity: 0 },
        c = { scale: 1, opacity: 0 };
    return (0, r.p)(
        t,
        {
            keys: (e) => (e ? "tooltip" : "empty"),
            config: s,
            from: o.enabled ? c : d,
            enter: { scale: 1, opacity: 1 },
            leave: o.enabled ? c : d,
            onRest: (e, i) => {
                t || n?.(), l?.(e, i);
            },
        },
        "animate-always",
    );
}
