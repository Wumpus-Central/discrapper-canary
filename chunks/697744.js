"use strict";
n.d(t, { c: () => r });
var l = n(627968),
    i = n(64700),
    s = n(744682);
let a = { hover: { name: "hover", start: 0, duration: 59 }, click: { name: "click", start: 68, duration: 26 } },
    r = () => {
        let e = i.useRef(null),
            t = i.useCallback(() => {
                null != e.current && e.current.play("click");
            }, []),
            r = i.useCallback(() => {
                null != e.current && e.current.play("hover");
            }, []),
            o = i.useCallback(() => {
                null != e.current && e.current.stopIfPlaying("hover");
            }, []),
            c = i.useCallback(
                (t) =>
                    (0, l.jsx)(s.P, {
                        ...t,
                        src: () => n.e("57830").then(n.t.bind(n, 695941, 19)),
                        ref: e,
                        markers: a,
                    }),
                [],
            );
        return {
            events: { onMouseEnter: r, onMouseLeave: o },
            play: t,
            getDuration: i.useCallback(() => e.current?.getDuration(), []),
            getCurrentFrame: i.useCallback(() => e.current?.getCurrentFrame() ?? null, []),
            Component: c,
        };
    };
