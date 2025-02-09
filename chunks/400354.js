n.d(t, { l: () => o });
var i = n(200651),
    r = n(192379),
    a = n(709014);
let l = {
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
    o = (e) => {
        let t = r.useRef(null),
            o = r.useRef(e);
        o.current = e;
        let u = r.useMemo(
                () => () => {
                    null != t.current && t.current.play(e);
                },
                [e]
            ),
            c = r.useCallback(() => {
                if (null == t.current) return;
                let n = 'deafen' === e ? 'hover_undeafened' : 'hover_deafened';
                t.current.play(n);
            }, [e]);
        return {
            events: {
                onClick: u,
                onMouseEnter: c,
                onMouseLeave: r.useCallback(() => {
                    if (null == t.current) return;
                    let n = 'deafen' === e ? 'hover_undeafened' : 'hover_deafened';
                    t.current.stopIfPlaying(n);
                }, [e])
            },
            play: u,
            Component: r.useCallback(
                (e) =>
                    (0, i.jsx)(a.L, {
                        ...e,
                        src: () => n.e('68449').then(n.t.bind(n, 406785, 19)),
                        ref: t,
                        initialAnimation: o.current,
                        markers: l
                    }),
                []
            )
        };
    };
