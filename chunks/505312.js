n.d(l, { w: () => s });
var r = n(627968),
    t = n(64700),
    a = n(744682);
let u = { all: { name: "all", start: 0, duration: 66 } };
function s() {
    let e = t.useRef(null),
        l = t.useCallback(() => {
            null != e.current && e.current.play("all");
        }, []),
        s = t.useCallback(() => {
            null != e.current && e.current.play("all");
        }, []),
        c = t.useCallback(() => {
            null != e.current && e.current.stopIfPlaying("all");
        }, []),
        i = t.useCallback(
            (l) => (0, r.jsx)(a.P, { ...l, src: () => n.e("71694").then(n.t.bind(n, 29597, 19)), ref: e, markers: u }),
            [],
        );
    return {
        events: { onMouseEnter: s, onMouseLeave: c },
        play: l,
        getDuration: t.useCallback(() => e.current?.getDuration(), []),
        getCurrentFrame: t.useCallback(() => e.current?.getCurrentFrame() ?? null, []),
        Component: i,
    };
}
