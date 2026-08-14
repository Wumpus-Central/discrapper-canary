n.d(t, { E: () => a });
var i = n(477900),
    l = n(582128),
    s = n(744682);
let r = { all: { name: "all", start: 0, duration: 66 } };
function a() {
    let e = l.useRef(null),
        t = l.useCallback(() => {
            null != e.current && e.current.play("all");
        }, []),
        a = l.useCallback(() => {
            null != e.current && e.current.play("all");
        }, []),
        o = l.useCallback(() => {
            null != e.current && e.current.stopIfPlaying("all");
        }, []),
        u = l.useCallback(
            (t) =>
                (0, i.jsx)(s.P, { ...t, src: () => n.e("905506").then(n.t.bind(n, 206905, 19)), ref: e, markers: r }),
            [],
        );
    return {
        events: { onClick: t, onMouseEnter: a, onMouseLeave: o },
        play: t,
        getDuration: l.useCallback(() => e.current?.getDuration(), []),
        getCurrentFrame: l.useCallback(() => e.current?.getCurrentFrame() ?? null, []),
        Component: u,
    };
}
