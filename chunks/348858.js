"use strict";
n.d(t, { I: () => s });
var r = n(627968),
    i = n(64700),
    a = n(744682);
let l = {
        deafen: { name: "deafen", start: 0, duration: 70 },
        undeafen: { name: "undeafen", start: 110, duration: 70 },
        hover_undeafened: { name: "hover_undeafened", start: 200, duration: 70 },
        hover_deafened: { name: "hover_deafened", start: 300, duration: 70 },
    },
    s = (e) => {
        let t = i.useRef(null),
            s = i.useRef(e);
        s.current = e;
        let o = i.useMemo(
                () => () => {
                    null != t.current && t.current.play(e);
                },
                [e],
            ),
            d = i.useCallback(() => {
                if (null == t.current) return;
                let n = "deafen" === e ? "hover_undeafened" : "hover_deafened";
                t.current.play(n);
            }, [e]),
            c = i.useCallback(() => {
                if (null == t.current) return;
                let n = "deafen" === e ? "hover_undeafened" : "hover_deafened";
                t.current.stopIfPlaying(n);
            }, [e]),
            u = i.useCallback(
                (e) =>
                    (0, r.jsx)(a.P, {
                        ...e,
                        src: () => n.e("93768").then(n.t.bind(n, 894619, 19)),
                        ref: t,
                        initialAnimation: s.current,
                        markers: l,
                    }),
                [],
            );
        return {
            events: { onClick: o, onMouseEnter: d, onMouseLeave: c },
            play: o,
            getDuration: i.useCallback(() => t.current?.getDuration(), []),
            getCurrentFrame: i.useCallback(() => t.current?.getCurrentFrame() ?? null, []),
            Component: u,
        };
    };
