n.d(t, { T: () => r });
var i = n(627968),
    l = n(64700),
    s = n(744682);
let a = { all: { name: "all", start: 0, duration: 66 } },
    r = () => {
        let e = l.useRef(null),
            t = l.useCallback(() => {
                null != e.current && e.current.play("all");
            }, []),
            r = l.useCallback(() => {
                null != e.current && e.current.play("all");
            }, []),
            o = l.useCallback(() => {
                null != e.current && e.current.stopIfPlaying("all");
            }, []),
            d = l.useCallback(
                (t) =>
                    (0, i.jsx)(s.P, {
                        ...t,
                        src: () => n.e("56591").then(n.t.bind(n, 640114, 19)),
                        ref: e,
                        markers: a,
                    }),
                [],
            );
        return {
            events: { onMouseEnter: r, onMouseLeave: o },
            play: t,
            getDuration: l.useCallback(() => e.current?.getDuration(), []),
            getCurrentFrame: l.useCallback(() => e.current?.getCurrentFrame() ?? null, []),
            Component: d,
        };
    };
