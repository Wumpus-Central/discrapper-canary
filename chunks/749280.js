t.d(n, {
    w: function () {
        return d;
    }
});
var i = t(200651),
    l = t(192379),
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
        let e = l.useRef(null),
            n = l.useCallback(() => {
                null != e.current && e.current.play('click');
            }, []),
            d = l.useCallback(() => {
                null != e.current && e.current.play('hover');
            }, []),
            r = l.useCallback(() => {
                null != e.current && e.current.stopIfPlaying('hover');
            }, []);
        return {
            events: {
                onMouseEnter: d,
                onMouseLeave: r
            },
            play: n,
            Component: l.useCallback(
                (n) =>
                    (0, i.jsx)(a.L, {
                        ...n,
                        src: () => t.e('56855').then(t.t.bind(t, 206509, 19)),
                        ref: e,
                        markers: o
                    }),
                []
            )
        };
    };
