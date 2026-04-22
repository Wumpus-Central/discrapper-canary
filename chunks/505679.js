"use strict";
n.d(t, { j: () => o });
var r = n(64700),
    i = n(844222),
    s = n(953992),
    a = n(866323);
function o(e) {
    let { shouldShow: t, onExitComplete: n, onAnimationRest: o } = e,
        { reducedMotion: l } = r.useContext(i.C),
        u = { scale: 0.95, opacity: 0 },
        d = { scale: 1, opacity: 0 };
    return (0, a.p)(
        t,
        {
            keys: (e) => (e ? "tooltip" : "empty"),
            config: s.p,
            from: l.enabled ? d : u,
            enter: { scale: 1, opacity: 1 },
            leave: l.enabled ? d : u,
            onRest: (e, r) => {
                t || n?.(), o?.(e, r);
            },
        },
        "animate-always",
    );
}
