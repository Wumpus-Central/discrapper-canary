n.d(t, { j: () => s });
var l = n(200651),
    i = n(192379),
    r = n(709014);
let a = {
        all: {
            name: 'all',
            start: 0,
            duration: 66
        }
    },
    s = () => {
        let e = i.useRef(null),
            t = i.useCallback(() => {
                null != e.current && e.current.play('all');
            }, []),
            s = i.useCallback(() => {
                null != e.current && e.current.play('all');
            }, []);
        return {
            events: {
                onClick: t,
                onMouseEnter: s,
                onMouseLeave: i.useCallback(() => {
                    null != e.current && e.current.stopIfPlaying('all');
                }, [])
            },
            play: t,
            Component: i.useCallback(
                (t) =>
                    (0, l.jsx)(r.L, {
                        ...t,
                        src: () => n.e('66944').then(n.t.bind(n, 166174, 19)),
                        ref: e,
                        markers: a
                    }),
                []
            )
        };
    };
