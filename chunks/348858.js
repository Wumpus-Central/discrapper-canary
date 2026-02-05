r.d(t, { I: () => s });
var n = r(627968),
    a = r(64700),
    c = r(744682);
let l = {
        deafen: { name: "deafen", start: 0, duration: 70 },
        undeafen: { name: "undeafen", start: 110, duration: 70 },
        hover_undeafened: { name: "hover_undeafened", start: 200, duration: 70 },
        hover_deafened: { name: "hover_deafened", start: 300, duration: 70 },
    },
    s = (e) => {
        let t = a.useRef(null),
            s = a.useRef(e);
        s.current = e;
        let u = a.useMemo(
                () => () => {
                    null != t.current && t.current.play(e);
                },
                [e],
            ),
            i = a.useCallback(() => {
                if (null == t.current) return;
                let r = "deafen" === e ? "hover_undeafened" : "hover_deafened";
                t.current.play(r);
            }, [e]),
            o = a.useCallback(() => {
                if (null == t.current) return;
                let r = "deafen" === e ? "hover_undeafened" : "hover_deafened";
                t.current.stopIfPlaying(r);
            }, [e]),
            d = a.useCallback(
                (e) =>
                    (0, n.jsx)(c.P, {
                        ...e,
                        src: () => r.e("93768").then(r.t.bind(r, 894619, 19)),
                        ref: t,
                        initialAnimation: s.current,
                        markers: l,
                    }),
                [],
            );
        return {
            events: { onClick: u, onMouseEnter: i, onMouseLeave: o },
            play: u,
            getDuration: a.useCallback(() => t.current?.getDuration(), []),
            getCurrentFrame: a.useCallback(() => t.current?.getCurrentFrame() ?? null, []),
            Component: d,
        };
    };
