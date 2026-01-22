n.d(t, { j: () => o });
var r = n(64700),
    i = n(158954),
    a = n(953992),
    s = n(397927);
function o(e) {
    let { shouldShow: t, onExitComplete: n, onAnimationRest: o } = e,
        { reducedMotion: l } = r.useContext(i.CZY),
        c = {
            scale: 0.95,
            opacity: 0,
        },
        u = {
            scale: 1,
            opacity: 0,
        },
        d = {
            scale: 1,
            opacity: 1,
        };
    return (0, s.pnh)(
        t,
        {
            keys: (e) => (e ? "tooltip" : "empty"),
            config: a.p,
            from: l.enabled ? u : c,
            enter: d,
            leave: l.enabled ? u : c,
            onRest: (e, r) => {
                t || null == n || n(), null == o || o(e, r);
            },
        },
        "animate-always",
    );
}
