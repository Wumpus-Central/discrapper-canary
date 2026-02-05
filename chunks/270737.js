n.d(t, { V: () => u });
var r = n(627968),
    a = n(64700),
    l = n(744682);
let i = {
        mute: { name: "mute", start: 0, duration: 70 },
        unmute: { name: "unmute", start: 100, duration: 70 },
        hover_unmuted: { name: "hover_unmuted", start: 180, duration: 40 },
        hover_muted: { name: "hover_muted", start: 240, duration: 40 },
        sparkle_off_muted: { name: "sparkle_off_muted", start: 299, duration: 40 },
        sparkle_on: { name: "sparkle_on", start: 370, duration: 40 },
        sparkle_off: { name: "sparkle_off", start: 450, duration: 40 },
    },
    u = (e) => {
        let t = a.useRef(null),
            u = a.useRef(e);
        u.current = e;
        let s = a.useMemo(
                () => () => {
                    null != t.current && t.current.play(e);
                },
                [e],
            ),
            o = a.useCallback(() => {
                if (null == t.current) return;
                let n = "mute" === e ? "hover_unmuted" : "hover_muted";
                t.current.play(n);
            }, [e]),
            c = a.useCallback(() => {
                if (null == t.current) return;
                let n = "mute" === e ? "hover_unmuted" : "hover_muted";
                t.current.stopIfPlaying(n);
            }, [e]),
            d = a.useCallback(
                (e) =>
                    (0, r.jsx)(l.P, {
                        ...e,
                        src: () => n.e("89759").then(n.t.bind(n, 244450, 19)),
                        ref: t,
                        initialAnimation: u.current,
                        markers: i,
                    }),
                [],
            );
        return {
            events: { onClick: s, onMouseEnter: o, onMouseLeave: c },
            play: s,
            getDuration: a.useCallback(() => t.current?.getDuration(), []),
            getCurrentFrame: a.useCallback(() => t.current?.getCurrentFrame() ?? null, []),
            Component: d,
        };
    };
