"use strict";
n.d(t, { O: () => l });
var i = n(627968),
    r = n(64700),
    a = n(744682);
let s = { all: { name: "all", start: 0, duration: 90 } };
function l() {
    let e = r.useRef(null),
        t = r.useCallback(() => {
            null != e.current && e.current.play("all");
        }, []),
        l = r.useCallback(() => {
            null != e.current && e.current.play("all");
        }, []),
        o = r.useCallback(() => {
            null != e.current && e.current.stopIfPlaying("all");
        }, []),
        d = r.useCallback(
            (t) => (0, i.jsx)(a.P, { ...t, src: () => n.e("70552").then(n.t.bind(n, 772203, 19)), ref: e, markers: s }),
            [],
        );
    return {
        events: { onMouseEnter: l, onMouseLeave: o },
        play: t,
        getDuration: r.useCallback(() => e.current?.getDuration(), []),
        getCurrentFrame: r.useCallback(() => e.current?.getCurrentFrame() ?? null, []),
        Component: d,
    };
}
