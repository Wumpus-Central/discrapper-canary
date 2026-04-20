n.d(t, { G: () => s });
var i = n(627968),
    l = n(64700),
    a = n(744682);
let r = {
        disable: { name: "disable", start: 0, duration: 70 },
        enable: { name: "enable", start: 100, duration: 70 },
        hover_enabled: { name: "hover_enabled", start: 200, duration: 70 },
        hover_disabled: { name: "hover_disabled", start: 300, duration: 70 },
    },
    s = (e) => {
        let t = l.useRef(null),
            s = l.useRef(e);
        s.current = e;
        let o = l.useMemo(
                () => () => {
                    null != t.current && t.current.play(e);
                },
                [e],
            ),
            d = l.useCallback(() => {
                if (null == t.current) return;
                let n = "enable" === e ? "hover_disabled" : "hover_enabled";
                t.current.play(n);
            }, [e]),
            c = l.useCallback(() => {
                if (null == t.current) return;
                let n = "enable" === e ? "hover_disabled" : "hover_enabled";
                t.current.stopIfPlaying(n);
            }, [e]),
            u = l.useCallback(
                (e) =>
                    (0, i.jsx)(a.P, {
                        ...e,
                        src: () => n.e("24596").then(n.t.bind(n, 941983, 19)),
                        ref: t,
                        initialAnimation: s.current,
                        markers: r,
                    }),
                [],
            );
        return {
            events: { onClick: o, onMouseEnter: d, onMouseLeave: c },
            play: o,
            getDuration: l.useCallback(() => t.current?.getDuration(), []),
            getCurrentFrame: l.useCallback(() => t.current?.getCurrentFrame() ?? null, []),
            Component: u,
        };
    };
