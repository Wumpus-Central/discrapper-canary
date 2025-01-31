n.d(t, { s: () => s });
var i = n(200651),
    l = n(192379),
    a = n(709014);
let r = {
        hover: {
            name: 'hover',
            start: 0,
            duration: 40
        },
        click: {
            name: 'click',
            start: 50,
            duration: 65
        }
    },
    s = () => {
        let e = l.useRef(null),
            t = l.useCallback(() => {
                null != e.current && e.current.play('click');
            }, []),
            s = l.useCallback(() => {
                null != e.current && e.current.play('hover');
            }, []);
        return {
            events: {
                onClick: t,
                onMouseEnter: s,
                onMouseLeave: l.useCallback(() => {
                    null != e.current && e.current.stopIfPlaying('hover');
                }, [])
            },
            play: t,
            Component: l.useCallback(
                (t) =>
                    (0, i.jsx)(a.L, {
                        ...t,
                        src: () => n.e('8631').then(n.t.bind(n, 105262, 19)),
                        ref: e,
                        markers: r
                    }),
                []
            )
        };
    };
