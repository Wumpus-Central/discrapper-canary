"use strict";
n.d(t, { A: () => u });
var r = n(64700),
    i = n(964486),
    a = n(946261),
    s = n(536184),
    o = n(523006),
    l = n(257645);
function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { audioRef: n } = r.useContext(o.A),
        u = r.useRef(null),
        [c, d] = r.useState(() => null != t.soundId && n.current?.dataset.soundId === t.soundId && !n.current.paused);
    (0, i.Ay)(() => {
        let { current: e } = n;
        null != e && null != t.soundId && c && e.addEventListener("pause", () => d(!1), { once: !0 });
    });
    let _ = r.useCallback(async () => {
        if (null == e) {
            u.current = null;
            return;
        }
        if (null != u.current && u.current.src === e) return;
        let t = new (await (0, s.A)(e))();
        (t.src = e), (u.current = t);
    }, [u, e]);
    return {
        isPlaying: c,
        playSound: r.useCallback(
            function () {
                let { volume: e, outputChannel: r = l.a.DEFAULT } =
                    arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                _(), n.current?.pause();
                let { current: i } = u;
                return (
                    null != i &&
                    ((n.current = i),
                    (i.currentTime = 0),
                    (i.volume = e ?? 1),
                    (i.dataset.soundId = t.soundId),
                    r === l.a.VOICE && i.setSinkId?.(a.voiceSinkId),
                    i.play(),
                    (i.onplay = () => d(!0)),
                    (i.onpause = () => d(!1)),
                    (i.onended = () => d(!1)),
                    !0)
                );
            },
            [n, t.soundId, _],
        ),
        stopSound: r.useCallback(() => {
            let { current: e } = n;
            null == e || ((null == t.soundId || e.dataset.soundId === t.soundId) && (e.pause(), d(!1)));
        }, [n, t.soundId]),
        preloadSound: _,
    };
}
