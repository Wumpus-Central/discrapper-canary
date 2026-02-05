n.d(t, { E: () => r });
var i = n(627968),
    l = n(64700),
    a = n(744682);
let s = { all: { name: "all", start: 0, duration: 66 } },
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
            c = l.useCallback(
                (t) =>
                    (0, i.jsx)(a.P, { ...t, src: () => n.e("5506").then(n.t.bind(n, 429286, 19)), ref: e, markers: s }),
                [],
            );
        return {
            events: { onClick: t, onMouseEnter: r, onMouseLeave: o },
            play: t,
            getDuration: l.useCallback(() => e.current?.getDuration(), []),
            getCurrentFrame: l.useCallback(() => e.current?.getCurrentFrame() ?? null, []),
            Component: c,
        };
    };
