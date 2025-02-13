n.d(t, { l: () => a });
var l = n(200651),
    i = n(192379),
    r = n(709014);
let u = {
        deafen: {
            name: 'deafen',
            start: 0,
            duration: 70
        },
        undeafen: {
            name: 'undeafen',
            start: 110,
            duration: 70
        },
        hover_undeafened: {
            name: 'hover_undeafened',
            start: 200,
            duration: 70
        },
        hover_deafened: {
            name: 'hover_deafened',
            start: 300,
            duration: 70
        }
    },
    a = (e) => {
        let t = i.useRef(null),
            a = i.useRef(e);
        a.current = e;
        let o = i.useMemo(
                () => () => {
                    null != t.current && t.current.play(e);
                },
                [e]
            ),
            d = i.useCallback(() => {
                if (null == t.current) return;
                let n = 'deafen' === e ? 'hover_undeafened' : 'hover_deafened';
                t.current.play(n);
            }, [e]);
        return {
            events: {
                onClick: o,
                onMouseEnter: d,
                onMouseLeave: i.useCallback(() => {
                    if (null == t.current) return;
                    let n = 'deafen' === e ? 'hover_undeafened' : 'hover_deafened';
                    t.current.stopIfPlaying(n);
                }, [e])
            },
            play: o,
            Component: i.useCallback(
                (e) =>
                    (0, l.jsx)(r.L, {
                        ...e,
                        src: () => n.e('68449').then(n.t.bind(n, 406785, 19)),
                        ref: t,
                        initialAnimation: a.current,
                        markers: u
                    }),
                []
            )
        };
    };
