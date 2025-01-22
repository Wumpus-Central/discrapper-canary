r.d(n, {
    K: function () {
        return l;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(709014);
let s = {
        all: {
            name: 'all',
            start: 0,
            duration: 90
        }
    },
    l = () => {
        let e = a.useRef(null),
            n = a.useCallback(() => {
                null != e.current && e.current.play('all');
            }, []),
            l = a.useCallback(() => {
                null != e.current && e.current.play('all');
            }, []),
            u = a.useCallback(() => {
                null != e.current && e.current.stopIfPlaying('all');
            }, []);
        return {
            events: {
                onMouseEnter: l,
                onMouseLeave: u
            },
            play: n,
            Component: a.useCallback(
                (n) =>
                    (0, i.jsx)(o.L, {
                        ...n,
                        src: () => r.e('52680').then(r.t.bind(r, 728913, 19)),
                        ref: e,
                        markers: s
                    }),
                []
            )
        };
    };
