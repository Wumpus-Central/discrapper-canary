n.d(t, { E: () => a });
var i = n(627968),
    l = n(64700),
    s = n(744682);
let r = { all: { name: "all", start: 0, duration: 66 } },
    a = () => {
        let e = l.useRef(null),
            t = l.useCallback(() => {
                null != e.current && e.current.play("all");
            }, []),
            a = l.useCallback(() => {
                null != e.current && e.current.play("all");
            }, []),
            o = l.useCallback(() => {
                null != e.current && e.current.stopIfPlaying("all");
            }, []),
            u = l.useCallback(
                (t) =>
                    (0, i.jsx)(s.P, { ...t, src: () => n.e("5506").then(n.t.bind(n, 429286, 19)), ref: e, markers: r }),
                [],
            );
        return {
            events: { onClick: t, onMouseEnter: a, onMouseLeave: o },
            play: t,
            getDuration: l.useCallback(() => e.current?.getDuration(), []),
            getCurrentFrame: l.useCallback(() => e.current?.getCurrentFrame() ?? null, []),
            Component: u,
        };
    };
