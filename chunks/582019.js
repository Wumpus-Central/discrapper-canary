n.d(t, {
    j: function () {
        return s;
    }
});
var i = n(200651),
    l = n(192379),
    a = n(709014);
let r = {
        all: {
            name: 'all',
            start: 0,
            duration: 66
        }
    },
    s = () => {
        let e = l.useRef(null),
            t = l.useCallback(() => {
                null != e.current && e.current.play('all');
            }, []),
            s = l.useCallback(() => {
                null != e.current && e.current.play('all');
            }, []),
            o = l.useCallback(() => {
                null != e.current && e.current.stopIfPlaying('all');
            }, []);
        return {
            events: {
                onClick: t,
                onMouseEnter: s,
                onMouseLeave: o
            },
            play: t,
            Component: l.useCallback(
                (t) =>
                    (0, i.jsx)(a.L, {
                        ...t,
                        src: () => n.e('66944').then(n.t.bind(n, 166174, 19)),
                        ref: e,
                        markers: r
                    }),
                []
            )
        };
    };
