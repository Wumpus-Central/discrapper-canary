t.d(n, { l: () => o });
var i = t(200651),
    r = t(192379),
    a = t(709014);
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
        let n = r.useRef(null),
            o = r.useRef(e);
        o.current = e;
        let u = r.useMemo(
                () => () => {
                    null != n.current && n.current.play(e);
                },
                [e]
            ),
            d = r.useCallback(() => {
                if (null == n.current) return;
                let t = 'deafen' === e ? 'hover_undeafened' : 'hover_deafened';
                n.current.play(t);
            }, [e]);
        return {
            events: {
                onClick: u,
                onMouseEnter: d,
                onMouseLeave: r.useCallback(() => {
                    if (null == n.current) return;
                    let t = 'deafen' === e ? 'hover_undeafened' : 'hover_deafened';
                    n.current.stopIfPlaying(t);
                }, [e])
            },
            play: u,
            Component: r.useCallback(
                (e) =>
                    (0, i.jsx)(a.L, {
                        ...e,
                        src: () => t.e('68449').then(t.t.bind(t, 406785, 19)),
                        ref: n,
                        initialAnimation: o.current,
                        markers: l
                    }),
                []
            )
        };
    };
