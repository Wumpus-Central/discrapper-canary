"use strict";
n.d(t, { N: () => o });
var r = n(627968),
    i = n(64700),
    a = n(744682);
let s = { earn: { name: "earn", start: 0, duration: 180 }, spend: { name: "spend", start: 240, duration: 180 } },
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
            u = i.useCallback(
                (e) =>
                    (0, r.jsx)(a.P, {
                        ...e,
                        src: () => n.e("78611").then(n.t.bind(n, 433886, 19)),
                        ref: t,
                        initialAnimation: o.current,
                        markers: s,
                    }),
                [],
            );
        return {
            events: {},
            play: l,
            getDuration: i.useCallback(() => t.current?.getDuration(), []),
            getCurrentFrame: i.useCallback(() => t.current?.getCurrentFrame() ?? null, []),
            Component: u,
        };
    };
