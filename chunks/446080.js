"use strict";
n.d(t, { K: () => o });
var r = n(627968),
    i = n(64700),
    s = n(744682);
let a = {
        disable: { name: "disable", start: 0, duration: 70 },
        enable: { name: "enable", start: 100, duration: 70 },
        hover_enabled: { name: "hover_enabled", start: 180, duration: 70 },
        hover_disabled: { name: "hover_disabled", start: 280, duration: 70 },
    },
    o = (e) => {
        let t = i.useRef(null),
            o = i.useRef(e);
        o.current = e;
        let l = i.useMemo(
                () => () => {
                    null != t.current && t.current.play(e);
                },
                [e],
            ),
            u = i.useCallback(() => {
                if (null == t.current) return;
                let n = "enable" === e ? "hover_disabled" : "hover_enabled";
                t.current.play(n);
            }, [e]),
            c = i.useCallback(() => {
                if (null == t.current) return;
                let n = "enable" === e ? "hover_disabled" : "hover_enabled";
                t.current.stopIfPlaying(n);
            }, [e]),
            d = i.useCallback(
                (e) =>
                    (0, r.jsx)(s.P, {
                        ...e,
                        src: () => n.e("60810").then(n.t.bind(n, 55089, 19)),
                        ref: t,
                        initialAnimation: o.current,
                        markers: a,
                    }),
                [],
            );
        return {
            events: { onClick: l, onMouseEnter: u, onMouseLeave: c },
            play: l,
            getDuration: i.useCallback(() => t.current?.getDuration(), []),
            getCurrentFrame: i.useCallback(() => t.current?.getCurrentFrame() ?? null, []),
            Component: d,
        };
    };
