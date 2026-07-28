"use strict";
n.d(t, { c: () => l });
var i = n(477900),
    r = n(582128),
    a = n(744682);
let s = { hover: { name: "hover", start: 0, duration: 59 }, click: { name: "click", start: 68, duration: 26 } };
function l() {
    let e = r.useRef(null),
        t = r.useCallback(() => {
            null != e.current && e.current.play("click");
        }, []),
        l = r.useCallback(() => {
            null != e.current && e.current.play("hover");
        }, []),
        o = r.useCallback(() => {
            null != e.current && e.current.stopIfPlaying("hover");
        }, []),
        d = r.useCallback(
            (t) => (0, i.jsx)(a.P, { ...t, src: () => n.e("57830").then(n.t.bind(n, 695941, 19)), ref: e, markers: s }),
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
