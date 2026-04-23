n.d(t, { L: () => a });
var i = n(627968),
    l = n(64700),
    s = n(744682);
let r = {
        mute: { name: "mute", start: 0, duration: 70 },
        unmute: { name: "unmute", start: 100, duration: 70 },
        hover_unmuted: { name: "hover_unmuted", start: 180, duration: 40 },
        hover_muted: { name: "hover_muted", start: 240, duration: 40 },
    },
    a = (e) => {
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
                let n = "mute" === e ? "hover_unmuted" : "hover_muted";
                t.current.play(n);
            }, [e]),
            c = l.useCallback(() => {
                if (null == t.current) return;
                let n = "mute" === e ? "hover_unmuted" : "hover_muted";
                t.current.stopIfPlaying(n);
            }, [e]),
            d = l.useCallback(
                (e) =>
                    (0, i.jsx)(s.P, {
                        ...e,
                        src: () => n.e("18133").then(n.t.bind(n, 705844, 19)),
                        ref: t,
                        initialAnimation: a.current,
                        markers: r,
                    }),
                [],
            );
        return {
            events: { onClick: o, onMouseEnter: u, onMouseLeave: c },
            play: o,
            getDuration: l.useCallback(() => t.current?.getDuration(), []),
            getCurrentFrame: l.useCallback(() => t.current?.getCurrentFrame() ?? null, []),
            Component: d,
        };
    };
