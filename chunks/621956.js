var i = n(477900),
    r = n(582128),
    l = n(744682);
let s = { all: { name: "all", start: 0, duration: 66 } };
n.d(
    t,
    {},
    {
        E: function () {
            let e = r.useRef(null),
                t = r.useCallback(() => {
                    null != e.current && e.current.play("all");
                }, []),
                a = r.useCallback(() => {
                    null != e.current && e.current.play("all");
                }, []),
                o = r.useCallback(() => {
                    null != e.current && e.current.stopIfPlaying("all");
                }, []),
                u = r.useCallback(
                    (t) =>
                        (0, i.jsx)(l.P, {
                            ...t,
                            src: () => n.e(905506).then(n.t.bind(n, 206905, 19)),
                            ref: e,
                            markers: s,
                        }),
                    [],
                );
            return {
                events: { onClick: t, onMouseEnter: a, onMouseLeave: o },
                play: t,
                getDuration: r.useCallback(() => e.current?.getDuration(), []),
                getCurrentFrame: r.useCallback(() => e.current?.getCurrentFrame() ?? null, []),
                Component: u,
            };
        },
    },
);
