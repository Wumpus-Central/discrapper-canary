var i = n(477900),
    r = n(582128),
    l = n(744682);
let s = {
    mute: { name: "mute", start: 0, duration: 70 },
    unmute: { name: "unmute", start: 100, duration: 70 },
    hover_unmuted: { name: "hover_unmuted", start: 180, duration: 40 },
    hover_muted: { name: "hover_muted", start: 240, duration: 40 },
};
n.d(
    t,
    {},
    {
        L: function (e) {
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
                    let n = "mute" === e ? "hover_unmuted" : "hover_muted";
                    t.current.play(n);
                }, [e]),
                d = r.useCallback(() => {
                    if (null == t.current) return;
                    let n = "mute" === e ? "hover_unmuted" : "hover_muted";
                    t.current.stopIfPlaying(n);
                }, [e]),
                c = r.useCallback(
                    (e) =>
                        (0, i.jsx)(l.P, {
                            ...e,
                            src: () => n.e(218133).then(n.t.bind(n, 705844, 19)),
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
