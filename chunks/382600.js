n.d(t, {
    P: function () {
        return s;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(709014);
let a = {
        disable: {
            name: 'disable',
            start: 0,
            duration: 70
        },
        enable: {
            name: 'enable',
            start: 100,
            duration: 70
        },
        hover_enabled: {
            name: 'hover_enabled',
            start: 200,
            duration: 70
        },
        hover_disabled: {
            name: 'hover_disabled',
            start: 300,
            duration: 70
        }
    },
    s = (e) => {
        let t = r.useRef(null),
            s = r.useRef(e);
        s.current = e;
        let o = r.useMemo(
                () => () => {
                    null != t.current && t.current.play(e);
                },
                [e]
            ),
            c = r.useCallback(() => {
                if (null == t.current) return;
                let n = 'enable' === e ? 'hover_disabled' : 'hover_enabled';
                t.current.play(n);
            }, [e]),
            d = r.useCallback(() => {
                if (null == t.current) return;
                let n = 'enable' === e ? 'hover_disabled' : 'hover_enabled';
                t.current.stopIfPlaying(n);
            }, [e]);
        return {
            events: {
                onClick: o,
                onMouseEnter: c,
                onMouseLeave: d
            },
            play: o,
            Component: r.useCallback(
                (e) =>
                    (0, i.jsx)(l.L, {
                        ...e,
                        src: () => n.e('7584').then(n.t.bind(n, 883488, 19)),
                        ref: t,
                        initialAnimation: s.current,
                        markers: a
                    }),
                []
            )
        };
    };
