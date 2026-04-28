n.d(t, { I: () => i });
var r = n(627968),
    a = n(64700),
    l = n(744682);
let u = {
        deafen: { name: "deafen", start: 0, duration: 70 },
        undeafen: { name: "undeafen", start: 110, duration: 70 },
        hover_undeafened: { name: "hover_undeafened", start: 200, duration: 70 },
        hover_deafened: { name: "hover_deafened", start: 300, duration: 70 },
    },
    i = (e) => {
        let t = a.useRef(null),
            i = a.useRef(e);
        i.current = e;
        let s = a.useMemo(
                () => () => {
                    null != t.current && t.current.play(e);
                },
                [e],
            ),
            d = a.useCallback(() => {
                if (null == t.current) return;
                let n = "deafen" === e ? "hover_undeafened" : "hover_deafened";
                t.current.play(n);
            }, [e]),
            o = a.useCallback(() => {
                if (null == t.current) return;
                let n = "deafen" === e ? "hover_undeafened" : "hover_deafened";
                t.current.stopIfPlaying(n);
            }, [e]),
            c = a.useCallback(
                (e) =>
                    (0, r.jsx)(l.P, {
                        ...e,
                        src: () => n.e("93768").then(n.t.bind(n, 894619, 19)),
                        ref: t,
                        initialAnimation: i.current,
                        markers: u,
                    }),
                [],
            );
        return {
            events: { onClick: s, onMouseEnter: d, onMouseLeave: o },
            play: s,
            getDuration: a.useCallback(() => t.current?.getDuration(), []),
            getCurrentFrame: a.useCallback(() => t.current?.getCurrentFrame() ?? null, []),
            Component: c,
        };
    };
