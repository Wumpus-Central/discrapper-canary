t.d(n, { w: () => d });
var l = t(200651),
    i = t(192379),
    a = t(709014);
let o = {
        hover: {
            name: 'hover',
            start: 0,
            duration: 59
        },
        click: {
            name: 'click',
            start: 68,
            duration: 26
        }
    },
    d = () => {
        let e = i.useRef(null),
            n = i.useCallback(() => {
                null != e.current && e.current.play('click');
            }, []),
            d = i.useCallback(() => {
                null != e.current && e.current.play('hover');
            }, []);
        return {
            events: {
                onMouseEnter: d,
                onMouseLeave: i.useCallback(() => {
                    null != e.current && e.current.stopIfPlaying('hover');
                }, [])
            },
            play: n,
            Component: i.useCallback(
                (n) =>
                    (0, l.jsx)(a.L, {
                        ...n,
                        src: () => t.e('56855').then(t.t.bind(t, 206509, 19)),
                        ref: e,
                        markers: o
                    }),
                []
            )
        };
    };
