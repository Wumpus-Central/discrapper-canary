"use strict";
n.d(t, { T: () => o });
var r = n(627968),
    i = n(64700),
    s = n(744682);
let a = { all: { name: "all", start: 0, duration: 66 } },
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
                    (0, r.jsx)(s.P, {
                        ...t,
                        src: () => n.e("56591").then(n.t.bind(n, 640114, 19)),
                        ref: e,
                        markers: a,
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
