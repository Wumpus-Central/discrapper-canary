n.d(t, { Q: () => s });
var r = n(473749),
    i = n(793030),
    a = n(377527),
    o = n(481060);
function s(e) {
    let { shouldShow: t, onExitComplete: n, onAnimationRest: s } = e,
        { reducedMotion: l } = r.useContext(i.Sfi),
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
    return (0, o.Yzy)(
        t,
        {
            keys: (e) => (e ? "tooltip" : "empty"),
            config: a.F,
            from: l.enabled ? u : c,
            enter: d,
            leave: l.enabled ? u : c,
            onRest: (e, r) => {
                t || null == n || n(), null == s || s(e, r);
            },
        },
        "animate-always",
    );
}
