n.d(t, { O: () => s });
var l = n(200651),
    i = n(192379),
    r = n(709014);
let a = {
        mute: {
            name: 'mute',
            start: 0,
            duration: 70
        },
        unmute: {
            name: 'unmute',
            start: 100,
            duration: 70
        },
        hover_unmuted: {
            name: 'hover_unmuted',
            start: 180,
            duration: 40
        },
        hover_muted: {
            name: 'hover_muted',
            start: 240,
            duration: 40
        }
    },
    s = (e) => {
        let t = i.useRef(null),
            s = i.useRef(e);
        s.current = e;
        let o = i.useMemo(
                () => () => {
                    null != t.current && t.current.play(e);
                },
                [e]
            ),
            u = i.useCallback(() => {
                if (null == t.current) return;
                let n = 'mute' === e ? 'hover_unmuted' : 'hover_muted';
                t.current.play(n);
            }, [e]);
        return {
            events: {
                onClick: o,
                onMouseEnter: u,
                onMouseLeave: i.useCallback(() => {
                    if (null == t.current) return;
                    let n = 'mute' === e ? 'hover_unmuted' : 'hover_muted';
                    t.current.stopIfPlaying(n);
                }, [e])
            },
            play: o,
            Component: i.useCallback(
                (e) =>
                    (0, l.jsx)(r.L, {
                        ...e,
                        src: () => n.e('410').then(n.t.bind(n, 992285, 19)),
                        ref: t,
                        initialAnimation: s.current,
                        markers: a
                    }),
                []
            )
        };
    };
