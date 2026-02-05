n.d(t, { w: () => r });
var a = n(627968),
    s = n(64700),
    i = n(744682);
let l = { all: { name: "all", start: 0, duration: 66 } },
    r = () => {
        let e = s.useRef(null),
            t = s.useCallback(() => {
                null != e.current && e.current.play("all");
            }, []),
            r = s.useCallback(() => {
                null != e.current && e.current.play("all");
            }, []),
            o = s.useCallback(() => {
                null != e.current && e.current.stopIfPlaying("all");
            }, []),
            d = s.useCallback(
                (t) =>
                    (0, a.jsx)(i.P, { ...t, src: () => n.e("71694").then(n.t.bind(n, 29597, 19)), ref: e, markers: l }),
                [],
            );
        return {
            events: { onMouseEnter: r, onMouseLeave: o },
            play: t,
            getDuration: s.useCallback(() => e.current?.getDuration(), []),
            getCurrentFrame: s.useCallback(() => e.current?.getCurrentFrame() ?? null, []),
            Component: d,
        };
    };
