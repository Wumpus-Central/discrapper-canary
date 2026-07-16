"use strict";
n.d(t, { c: () => l });
var i = n(627968),
    r = n(64700),
    a = n(744682);
let s = {
    enable: { name: "enable", start: 0, duration: 70 },
    disable: { name: "disable", start: 90, duration: 70 },
    hover_enabled: { name: "hover_enabled", start: 180, duration: 40 },
    hover_disabled: { name: "hover_disabled", start: 240, duration: 40 },
};
function l(e) {
    let t = r.useRef(null),
        l = r.useRef(e);
    l.current = e;
    let o = r.useMemo(
            () => () => {
                null != t.current && t.current.play(e);
            },
            [e],
        ),
        d = r.useCallback(() => {
            if (null == t.current) return;
            let n = "enable" === e ? "hover_disabled" : "hover_enabled";
            t.current.play(n);
        }, [e]),
        c = r.useCallback(() => {
            if (null == t.current) return;
            let n = "enable" === e ? "hover_disabled" : "hover_enabled";
            t.current.stopIfPlaying(n);
        }, [e]),
        u = r.useCallback(
            (e) =>
                (0, i.jsx)(a.P, {
                    ...e,
                    src: () => n.e("36306").then(n.t.bind(n, 478313, 19)),
                    ref: t,
                    initialAnimation: l.current,
                    markers: s,
                }),
            [],
        );
    return {
        events: { onClick: o, onMouseEnter: d, onMouseLeave: c },
        play: o,
        getDuration: r.useCallback(() => t.current?.getDuration(), []),
        getCurrentFrame: r.useCallback(() => t.current?.getCurrentFrame() ?? null, []),
        Component: u,
    };
}
