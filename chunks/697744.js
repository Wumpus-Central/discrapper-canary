"use strict";
n.d(t, { c: () => o });
var i = n(627968),
    r = n(64700),
    s = n(744682);
let a = { hover: { name: "hover", start: 0, duration: 59 }, click: { name: "click", start: 68, duration: 26 } },
    o = () => {
        let e = r.useRef(null),
            t = r.useCallback(() => {
                null != e.current && e.current.play("click");
            }, []),
            o = r.useCallback(() => {
                null != e.current && e.current.play("hover");
            }, []),
            l = r.useCallback(() => {
                null != e.current && e.current.stopIfPlaying("hover");
            }, []),
            u = r.useCallback(
                (t) =>
                    (0, i.jsx)(s.P, {
                        ...t,
                        src: () => n.e("57830").then(n.t.bind(n, 695941, 19)),
                        ref: e,
                        markers: a,
                    }),
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
