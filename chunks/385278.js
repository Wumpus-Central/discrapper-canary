n.d(t, { G: () => s });
var i = n(627968),
    r = n(64700),
    l = n(744682);
let a = {
        disable: { name: "disable", start: 0, duration: 70 },
        enable: { name: "enable", start: 100, duration: 70 },
        hover_enabled: { name: "hover_enabled", start: 200, duration: 70 },
        hover_disabled: { name: "hover_disabled", start: 300, duration: 70 },
    },
    s = (e) => {
        let t = r.useRef(null),
            s = r.useRef(e);
        s.current = e;
        let o = r.useMemo(
                () => () => {
                    null != t.current && t.current.play(e);
                },
                [e],
            ),
            d = r.useCallback(() => {
                if (null == t.current) return;
                let n = "enable" === e ? "hover_disabled" : "hover_enabled";
                t.current.play(n);
            }, [e]),
            c = r.useCallback(() => {
                if (null == t.current) return;
                let n = "enable" === e ? "hover_disabled" : "hover_enabled";
                t.current.stopIfPlaying(n);
            }, [e]),
            u = r.useCallback(
                (e) =>
                    (0, i.jsx)(l.P, {
                        ...e,
                        src: () => n.e("24596").then(n.t.bind(n, 941983, 19)),
                        ref: t,
                        initialAnimation: s.current,
                        markers: a,
                    }),
                [],
            );
        return {
            events: { onClick: o, onMouseEnter: d, onMouseLeave: c },
            play: o,
            getDuration: r.useCallback(() => t.current?.getDuration(), []),
            getCurrentFrame: r.useCallback(() => t.current?.getCurrentFrame() ?? null, []),
            Component: u,
        };
    };
