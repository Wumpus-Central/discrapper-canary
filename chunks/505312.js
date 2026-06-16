"use strict";
n.d(t, { w: () => o });
var i = n(627968),
    r = n(64700),
    s = n(744682);
let a = { all: { name: "all", start: 0, duration: 66 } },
    o = () => {
        let e = r.useRef(null),
            t = r.useCallback(() => {
                null != e.current && e.current.play("all");
            }, []),
            o = r.useCallback(() => {
                null != e.current && e.current.play("all");
            }, []),
            l = r.useCallback(() => {
                null != e.current && e.current.stopIfPlaying("all");
            }, []),
            u = r.useCallback(
                (t) =>
                    (0, i.jsx)(s.P, { ...t, src: () => n.e("71694").then(n.t.bind(n, 29597, 19)), ref: e, markers: a }),
                [],
            );
        return {
            events: { onMouseEnter: o, onMouseLeave: l },
            play: t,
            getDuration: r.useCallback(() => e.current?.getDuration(), []),
            getCurrentFrame: r.useCallback(() => e.current?.getCurrentFrame() ?? null, []),
            Component: u,
        };
    };
