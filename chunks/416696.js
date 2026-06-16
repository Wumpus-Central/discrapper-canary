"use strict";
n.d(t, { c: () => o });
var i = n(627968),
    r = n(64700),
    s = n(744682);
let a = {
        enable: { name: "enable", start: 0, duration: 70 },
        disable: { name: "disable", start: 90, duration: 70 },
        hover_enabled: { name: "hover_enabled", start: 180, duration: 40 },
        hover_disabled: { name: "hover_disabled", start: 240, duration: 40 },
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
                let n = "enable" === e ? "hover_disabled" : "hover_enabled";
                t.current.play(n);
            }, [e]),
            c = r.useCallback(() => {
                if (null == t.current) return;
                let n = "enable" === e ? "hover_disabled" : "hover_enabled";
                t.current.stopIfPlaying(n);
            }, [e]),
            d = r.useCallback(
                (e) =>
                    (0, i.jsx)(s.P, {
                        ...e,
                        src: () => n.e("36306").then(n.t.bind(n, 478313, 19)),
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
