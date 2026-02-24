"use strict";
n.d(t, { g: () => o });
var r = n(627968),
    i = n(64700),
    s = n(744682);
let a = { click: { name: "click", start: 0, duration: 66 }, hover: { name: "hover", start: 90, duration: 40 } },
    o = () => {
        let e = i.useRef(null),
            t = i.useCallback(() => {
                null != e.current && e.current.play("click");
            }, []),
            o = i.useCallback(() => {
                null != e.current && e.current.play("hover");
            }, []),
            l = i.useCallback(() => {
                null != e.current && e.current.stopIfPlaying("hover");
            }, []),
            u = i.useCallback(
                (t) =>
                    (0, r.jsx)(s.P, { ...t, src: () => n.e("2890").then(n.t.bind(n, 279825, 19)), ref: e, markers: a }),
                [],
            );
        return {
            events: { onMouseEnter: o, onMouseLeave: l },
            play: t,
            getDuration: i.useCallback(() => e.current?.getDuration(), []),
            getCurrentFrame: i.useCallback(() => e.current?.getCurrentFrame() ?? null, []),
            Component: u,
        };
    };
