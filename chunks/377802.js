n.d(t, { O: () => a });
var l = n(627968),
    i = n(64700),
    r = n(744682);
let s = { all: { name: "all", start: 0, duration: 90 } },
    a = () => {
        let e = i.useRef(null),
            t = i.useCallback(() => {
                null != e.current && e.current.play("all");
            }, []),
            a = i.useCallback(() => {
                null != e.current && e.current.play("all");
            }, []),
            u = i.useCallback(() => {
                null != e.current && e.current.stopIfPlaying("all");
            }, []),
            o = i.useCallback(
                (t) =>
                    (0, l.jsx)(r.P, {
                        ...t,
                        src: () => n.e("70552").then(n.t.bind(n, 772203, 19)),
                        ref: e,
                        markers: s,
                    }),
                [],
            );
        return {
            events: { onMouseEnter: a, onMouseLeave: u },
            play: t,
            getDuration: i.useCallback(() => e.current?.getDuration(), []),
            getCurrentFrame: i.useCallback(() => e.current?.getCurrentFrame() ?? null, []),
            Component: o,
        };
    };
