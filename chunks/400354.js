n.d(t, {
    l: function () {
        return u;
    }
});
var r = n(200651),
    i = n(192379),
    l = n(709014);
let a = {
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
    u = (e) => {
        let t = i.useRef(null),
            u = i.useRef(e);
        u.current = e;
        let o = i.useMemo(
                () => () => {
                    null != t.current && t.current.play(e);
                },
                [e]
            ),
            s = i.useCallback(() => {
                if (null == t.current) return;
                let n = 'deafen' === e ? 'hover_undeafened' : 'hover_deafened';
                t.current.play(n);
            }, [e]),
            c = i.useCallback(() => {
                if (null == t.current) return;
                let n = 'deafen' === e ? 'hover_undeafened' : 'hover_deafened';
                t.current.stopIfPlaying(n);
            }, [e]);
        return {
            events: {
                onClick: o,
                onMouseEnter: s,
                onMouseLeave: c
            },
            play: o,
            Component: i.useCallback(
                (e) =>
                    (0, r.jsx)(l.L, {
                        ...e,
                        src: () => n.e('68449').then(n.t.bind(n, 406785, 19)),
                        ref: t,
                        initialAnimation: u.current,
                        markers: a
                    }),
                []
            )
        };
    };
