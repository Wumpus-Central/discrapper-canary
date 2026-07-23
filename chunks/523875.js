"use strict";
n.d(t, { L: () => l });
var i = n(627968),
    r = n(64700),
    a = n(744682);
let s = {
    mute: { name: "mute", start: 0, duration: 70 },
    unmute: { name: "unmute", start: 100, duration: 70 },
    hover_unmuted: { name: "hover_unmuted", start: 180, duration: 40 },
    hover_muted: { name: "hover_muted", start: 240, duration: 40 },
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
            let n = "mute" === e ? "hover_unmuted" : "hover_muted";
            t.current.play(n);
        }, [e]),
        c = r.useCallback(() => {
            if (null == t.current) return;
            let n = "mute" === e ? "hover_unmuted" : "hover_muted";
            t.current.stopIfPlaying(n);
        }, [e]),
        u = r.useCallback(
            (e) =>
                (0, i.jsx)(a.P, {
                    ...e,
                    src: () => n.e("18133").then(n.t.bind(n, 705844, 19)),
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
