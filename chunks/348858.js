"use strict";
n.d(t, { I: () => o });
var i = n(627968),
    r = n(64700),
    s = n(744682);
let a = {
        deafen: { name: "deafen", start: 0, duration: 70 },
        undeafen: { name: "undeafen", start: 110, duration: 70 },
        hover_undeafened: { name: "hover_undeafened", start: 200, duration: 70 },
        hover_deafened: { name: "hover_deafened", start: 300, duration: 70 },
    },
    o = (e) => {
        let t = r.useRef(null),
            o = r.useRef(e);
        o.current = e;
        let l = r.useMemo(
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
            c = r.useCallback(() => {
                if (null == t.current) return;
                let n = "deafen" === e ? "hover_undeafened" : "hover_deafened";
                t.current.stopIfPlaying(n);
            }, [e]),
            d = r.useCallback(
                (e) =>
                    (0, i.jsx)(s.P, {
                        ...e,
                        src: () => n.e("93768").then(n.t.bind(n, 894619, 19)),
                        ref: t,
                        initialAnimation: o.current,
                        markers: a,
                    }),
                [],
            );
        return {
            events: { onClick: l, onMouseEnter: u, onMouseLeave: c },
            play: l,
            getDuration: r.useCallback(() => t.current?.getDuration(), []),
            getCurrentFrame: r.useCallback(() => t.current?.getCurrentFrame() ?? null, []),
            Component: d,
        };
    };
