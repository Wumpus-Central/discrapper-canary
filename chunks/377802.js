"use strict";
n.d(t, { O: () => o });
var r = n(627968),
    i = n(64700),
    a = n(744682);
let s = { all: { name: "all", start: 0, duration: 90 } },
    o = () => {
        let e = i.useRef(null),
            t = i.useCallback(() => {
                null != e.current && e.current.play("all");
            }, []),
            o = i.useCallback(() => {
                null != e.current && e.current.play("all");
            }, []),
            l = i.useCallback(() => {
                null != e.current && e.current.stopIfPlaying("all");
            }, []),
            u = i.useCallback(
                (t) =>
                    (0, r.jsx)(a.P, {
                        ...t,
                        src: () => n.e("70552").then(n.t.bind(n, 772203, 19)),
                        ref: e,
                        markers: s,
                    }),
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
