n.d(t, { V: () => a });
var l = n(477900),
    i = n(582128),
    s = n(744682);
let r = { click: { name: "click", start: 0, duration: 66 }, hover: { name: "hover", start: 90, duration: 40 } };
function a() {
    let e = i.useRef(null),
        t = i.useCallback(() => {
            null != e.current && e.current.play("click");
        }, []),
        a = i.useCallback(() => {
            null != e.current && e.current.play("hover");
        }, []),
        o = i.useCallback(() => {
            null != e.current && e.current.stopIfPlaying("hover");
        }, []),
        u = i.useCallback(
            (t) =>
                (0, l.jsx)(s.P, { ...t, src: () => n.e("178205").then(n.t.bind(n, 582636, 19)), ref: e, markers: r }),
            [],
        );
    return {
        events: { onMouseEnter: a, onMouseLeave: o },
        play: t,
        getDuration: i.useCallback(() => e.current?.getDuration(), []),
        getCurrentFrame: i.useCallback(() => e.current?.getCurrentFrame() ?? null, []),
        Component: u,
    };
}
