n.d(t, { I: () => a });
var i = n(477900),
    l = n(582128),
    r = n(744682);
let s = {
    deafen: { name: "deafen", start: 0, duration: 70 },
    undeafen: { name: "undeafen", start: 110, duration: 70 },
    hover_undeafened: { name: "hover_undeafened", start: 200, duration: 70 },
    hover_deafened: { name: "hover_deafened", start: 300, duration: 70 },
};
function a(e) {
    let t = l.useRef(null),
        a = l.useRef(e);
    a.current = e;
    let o = l.useMemo(
            () => () => {
                null != t.current && t.current.play(e);
            },
            [e],
        ),
        u = l.useCallback(() => {
            if (null == t.current) return;
            let n = "deafen" === e ? "hover_undeafened" : "hover_deafened";
            t.current.play(n);
        }, [e]),
        d = l.useCallback(() => {
            if (null == t.current) return;
            let n = "deafen" === e ? "hover_undeafened" : "hover_deafened";
            t.current.stopIfPlaying(n);
        }, [e]),
        c = l.useCallback(
            (e) =>
                (0, i.jsx)(r.P, {
                    ...e,
                    src: () => n.e("193768").then(n.t.bind(n, 894619, 19)),
                    ref: t,
                    initialAnimation: a.current,
                    markers: s,
                }),
            [],
        );
    return {
        events: { onClick: o, onMouseEnter: u, onMouseLeave: d },
        play: o,
        getDuration: l.useCallback(() => t.current?.getDuration(), []),
        getCurrentFrame: l.useCallback(() => t.current?.getCurrentFrame() ?? null, []),
        Component: c,
    };
}
