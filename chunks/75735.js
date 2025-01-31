n.d(t, { o: () => o });
var i = n(200651),
    r = n(192379),
    a = n(709014);
let s = {
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
            start: 180,
            duration: 70
        },
        hover_disabled: {
            name: 'hover_disabled',
            start: 280,
            duration: 70
        }
    },
    o = (e) => {
        let t = r.useRef(null),
            o = r.useRef(e);
        o.current = e;
        let l = r.useMemo(
                () => () => {
                    null != t.current && t.current.play(e);
                },
                [e]
            ),
            u = r.useCallback(() => {
                if (null == t.current) return;
                let n = 'enable' === e ? 'hover_disabled' : 'hover_enabled';
                t.current.play(n);
            }, [e]);
        return {
            events: {
                onClick: l,
                onMouseEnter: u,
                onMouseLeave: r.useCallback(() => {
                    if (null == t.current) return;
                    let n = 'enable' === e ? 'hover_disabled' : 'hover_enabled';
                    t.current.stopIfPlaying(n);
                }, [e])
            },
            play: l,
            Component: r.useCallback(
                (e) =>
                    (0, i.jsx)(a.L, {
                        ...e,
                        src: () => n.e('8366').then(n.t.bind(n, 553427, 19)),
                        ref: t,
                        initialAnimation: o.current,
                        markers: s
                    }),
                []
            )
        };
    };
