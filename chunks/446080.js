n.d(t, { K: () => a });
var i = n(627968),
    l = n(64700),
    r = n(744682);
let s = {
        disable: { name: "disable", start: 0, duration: 70 },
        enable: { name: "enable", start: 100, duration: 70 },
        hover_enabled: { name: "hover_enabled", start: 180, duration: 70 },
        hover_disabled: { name: "hover_disabled", start: 280, duration: 70 },
    },
    a = (e) => {
        let t = l.useRef(null),
            a = l.useRef(e);
        a.current = e;
        let o = l.useMemo(
                () => () => {
                    null != t.current && t.current.play(e);
                },
                [e],
            ),
            u = l.useCallback(() => {
                if (null == t.current) return;
                let n = "enable" === e ? "hover_disabled" : "hover_enabled";
                t.current.play(n);
            }, [e]),
            d = l.useCallback(() => {
                if (null == t.current) return;
                let n = "enable" === e ? "hover_disabled" : "hover_enabled";
                t.current.stopIfPlaying(n);
            }, [e]),
            c = l.useCallback(
                (e) =>
                    (0, i.jsx)(r.P, {
                        ...e,
                        src: () => n.e("60810").then(n.t.bind(n, 55089, 19)),
                        ref: t,
                        initialAnimation: a.current,
                        markers: s,
                    }),
                [],
            );
        return {
            events: { onClick: o, onMouseEnter: u, onMouseLeave: d },
            play: o,
            getDuration: l.useCallback(() => t.current?.getDuration(), []),
            getCurrentFrame: l.useCallback(() => t.current?.getCurrentFrame() ?? null, []),
            Component: c,
        };
    };
