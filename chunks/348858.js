var i = n(477900),
    r = n(582128),
    l = n(744682);
let s = {
    deafen: { name: "deafen", start: 0, duration: 70 },
    undeafen: { name: "undeafen", start: 110, duration: 70 },
    hover_undeafened: { name: "hover_undeafened", start: 200, duration: 70 },
    hover_deafened: { name: "hover_deafened", start: 300, duration: 70 },
};
n.d(
    t,
    {},
    {
        I: function (e) {
            let t = r.useRef(null),
                a = r.useRef(e);
            a.current = e;
            let o = r.useMemo(
                    () => () => {
                        null != t.current && t.current.play(e);
                    },
                    [e],
                ),
                u = r.useCallback(() => {
                    if (null == t.current) return;
                    let n = "deafen" === e ? "hover_undeafened" : "hover_deafened";
                    t.current.play(n);
                }, [e]),
                d = r.useCallback(() => {
                    if (null == t.current) return;
                    let n = "deafen" === e ? "hover_undeafened" : "hover_deafened";
                    t.current.stopIfPlaying(n);
                }, [e]),
                c = r.useCallback(
                    (e) =>
                        (0, i.jsx)(l.P, {
                            ...e,
                            src: () => n.e(193768).then(n.t.bind(n, 894619, 19)),
                            ref: t,
                            initialAnimation: a.current,
                            markers: s,
                        }),
                    [],
                );
            return {
                events: { onClick: o, onMouseEnter: u, onMouseLeave: d },
                play: o,
                getDuration: r.useCallback(() => t.current?.getDuration(), []),
                getCurrentFrame: r.useCallback(() => t.current?.getCurrentFrame() ?? null, []),
                Component: c,
            };
        },
    },
);
