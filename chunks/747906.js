n.d(t, { P: () => s });
var i = n(200651),
    l = n(192379),
    a = n(709014);
let r = {
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
        },
        sparkle_off_muted: {
            name: 'sparkle_off_muted',
            start: 299,
            duration: 40
        },
        sparkle_on: {
            name: 'sparkle_on',
            start: 370,
            duration: 40
        },
        sparkle_off: {
            name: 'sparkle_off',
            start: 450,
            duration: 40
        }
    },
    s = (e) => {
        let t = l.useRef(null),
            s = l.useRef(e);
        s.current = e;
        let o = l.useMemo(
                () => () => {
                    null != t.current && t.current.play(e);
                },
                [e]
            ),
            c = l.useCallback(() => {
                if (null == t.current) return;
                let n = 'mute' === e ? 'hover_unmuted' : 'hover_muted';
                t.current.play(n);
            }, [e]);
        return {
            events: {
                onClick: o,
                onMouseEnter: c,
                onMouseLeave: l.useCallback(() => {
                    if (null == t.current) return;
                    let n = 'mute' === e ? 'hover_unmuted' : 'hover_muted';
                    t.current.stopIfPlaying(n);
                }, [e])
            },
            play: o,
            Component: l.useCallback(
                (e) =>
                    (0, i.jsx)(a.L, {
                        ...e,
                        src: () => n.e('30261').then(n.t.bind(n, 414787, 19)),
                        ref: t,
                        initialAnimation: s.current,
                        markers: r
                    }),
                []
            )
        };
    };
