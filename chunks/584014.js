"use strict";
n.d(t, { A: () => u });
var i = n(64700),
    r = n(964486),
    s = n(946261),
    a = n(536184),
    o = n(523006),
    l = n(257645);
function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { audioRef: n } = i.useContext(o.A),
        u = i.useRef(null),
        [c, d] = i.useState(() => null != t.soundId && n.current?.dataset.soundId === t.soundId && !n.current.paused);
    (0, r.Ay)(() => {
        let { current: e } = n;
        null != e && null != t.soundId && c && e.addEventListener("pause", () => d(!1), { once: !0 });
    });
    let _ = i.useCallback(async () => {
        if (null == e) {
            u.current = null;
            return;
        }
        if (null != u.current && u.current.src === e) return;
        let t = new (await (0, a.A)(e))();
        (t.src = e), (u.current = t);
    }, [u, e]);
    return {
        isPlaying: c,
        playSound: i.useCallback(
            function () {
                let { volume: e, outputChannel: i = l.a.DEFAULT } =
                    arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                _(), n.current?.pause();
                let { current: r } = u;
                return (
                    null != r &&
                    ((n.current = r),
                    (r.currentTime = 0),
                    (r.volume = e ?? 1),
                    (r.dataset.soundId = t.soundId),
                    i === l.a.VOICE && r.setSinkId?.(s.voiceSinkId),
                    r.play(),
                    (r.onplay = () => d(!0)),
                    (r.onpause = () => d(!1)),
                    (r.onended = () => d(!1)),
                    !0)
                );
            },
            [n, t.soundId, _],
        ),
        stopSound: i.useCallback(() => {
            let { current: e } = n;
            null == e || ((null == t.soundId || e.dataset.soundId === t.soundId) && (e.pause(), d(!1)));
        }, [n, t.soundId]),
        preloadSound: _,
    };
}
