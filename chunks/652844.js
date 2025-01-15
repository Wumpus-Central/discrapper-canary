n.d(t, {
    O: function () {
        return s;
    }
});
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
            }, [e]),
            u = l.useCallback(() => {
                if (null == t.current) return;
                let n = 'mute' === e ? 'hover_unmuted' : 'hover_muted';
                t.current.stopIfPlaying(n);
            }, [e]);
        return {
            events: {
                onClick: o,
                onMouseEnter: c,
                onMouseLeave: u
            },
            play: o,
            Component: l.useCallback(
                (e) =>
                    (0, i.jsx)(a.L, {
                        ...e,
                        src: () => n.e('410').then(n.t.bind(n, 992285, 19)),
                        ref: t,
                        initialAnimation: s.current,
                        markers: r
                    }),
                []
            )
        };
    };
