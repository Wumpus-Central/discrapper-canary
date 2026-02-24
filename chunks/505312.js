n.d(t, { w: () => r });
var a = n(627968),
    i = n(64700),
    s = n(744682);
let l = { all: { name: "all", start: 0, duration: 66 } },
    r = () => {
        let e = i.useRef(null),
            t = i.useCallback(() => {
                null != e.current && e.current.play("all");
            }, []),
            r = i.useCallback(() => {
                null != e.current && e.current.play("all");
            }, []),
            o = i.useCallback(() => {
                null != e.current && e.current.stopIfPlaying("all");
            }, []),
            d = i.useCallback(
                (t) =>
                    (0, a.jsx)(s.P, { ...t, src: () => n.e("71694").then(n.t.bind(n, 29597, 19)), ref: e, markers: l }),
                [],
            );
        return {
            events: { onMouseEnter: r, onMouseLeave: o },
            play: t,
            getDuration: i.useCallback(() => e.current?.getDuration(), []),
            getCurrentFrame: i.useCallback(() => e.current?.getCurrentFrame() ?? null, []),
            Component: d,
        };
    };
