r.d(n, {
    V: function () {
        return l;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(709014);
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
    l = () => {
        let e = a.useRef(null),
            n = a.useCallback(() => {
                null != e.current && e.current.play('click');
            }, []),
            l = a.useCallback(() => {
                null != e.current && e.current.play('hover');
            }, []),
            u = a.useCallback(() => {
                null != e.current && e.current.stopIfPlaying('hover');
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
                        src: () => r.e('37655').then(r.t.bind(r, 119493, 19)),
                        ref: e,
                        markers: s
                    }),
                []
            )
        };
    };
