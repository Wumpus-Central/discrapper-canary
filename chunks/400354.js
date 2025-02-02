n.d(t, { l: () => l });
var i = n(200651),
    a = n(192379),
    r = n(709014);
let o = {
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
    l = (e) => {
        let t = a.useRef(null),
            l = a.useRef(e);
        l.current = e;
        let c = a.useMemo(
                () => () => {
                    null != t.current && t.current.play(e);
                },
                [e]
            ),
            d = a.useCallback(() => {
                if (null == t.current) return;
                let n = 'deafen' === e ? 'hover_undeafened' : 'hover_deafened';
                t.current.play(n);
            }, [e]);
        return {
            events: {
                onClick: c,
                onMouseEnter: d,
                onMouseLeave: a.useCallback(() => {
                    if (null == t.current) return;
                    let n = 'deafen' === e ? 'hover_undeafened' : 'hover_deafened';
                    t.current.stopIfPlaying(n);
                }, [e])
            },
            play: c,
            Component: a.useCallback(
                (e) =>
                    (0, i.jsx)(r.L, {
                        ...e,
                        src: () => n.e('68449').then(n.t.bind(n, 406785, 19)),
                        ref: t,
                        initialAnimation: l.current,
                        markers: o
                    }),
                []
            )
        };
    };
