n.d(t, { V: () => o });
var i = n(200651),
    r = n(192379),
    a = n(709014);
let s = {
        click: {
            name: 'click',
            start: 0,
            duration: 66
        },
        hover: {
            name: 'hover',
            start: 90,
            duration: 40
        }
    },
    o = () => {
        let e = r.useRef(null),
            t = r.useCallback(() => {
                null != e.current && e.current.play('click');
            }, []),
            o = r.useCallback(() => {
                null != e.current && e.current.play('hover');
            }, []);
        return {
            events: {
                onMouseEnter: o,
                onMouseLeave: r.useCallback(() => {
                    null != e.current && e.current.stopIfPlaying('hover');
                }, [])
            },
            play: t,
            Component: r.useCallback(
                (t) =>
                    (0, i.jsx)(a.L, {
                        ...t,
                        src: () => n.e('37655').then(n.t.bind(n, 119493, 19)),
                        ref: e,
                        markers: s
                    }),
                []
            )
        };
    };
