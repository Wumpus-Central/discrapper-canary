n.d(t, { P: () => s });
var i = n(200651),
    l = n(192379),
    r = n(709014);
let a = {
        disable: {
            name: 'disable',
            start: 0,
            duration: 70
        },
        enable: {
            name: 'enable',
            start: 100,
            duration: 70
        },
        hover_enabled: {
            name: 'hover_enabled',
            start: 200,
            duration: 70
        },
        hover_disabled: {
            name: 'hover_disabled',
            start: 300,
            duration: 70
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
                let n = 'enable' === e ? 'hover_disabled' : 'hover_enabled';
                t.current.play(n);
            }, [e]);
        return {
            events: {
                onClick: o,
                onMouseEnter: c,
                onMouseLeave: l.useCallback(() => {
                    if (null == t.current) return;
                    let n = 'enable' === e ? 'hover_disabled' : 'hover_enabled';
                    t.current.stopIfPlaying(n);
                }, [e])
            },
            play: o,
            Component: l.useCallback(
                (e) =>
                    (0, i.jsx)(r.L, {
                        ...e,
                        src: () => n.e('7584').then(n.t.bind(n, 883488, 19)),
                        ref: t,
                        initialAnimation: s.current,
                        markers: a
                    }),
                []
            )
        };
    };
