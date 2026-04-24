"use strict";
n.d(t, { A: () => c });
var l = n(64700),
    i = n(964486),
    s = n(946261),
    a = n(536184),
    r = n(523006),
    o = n(257645);
function c(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { audioRef: n } = l.useContext(r.A),
        c = l.useRef(null),
        [u, d] = l.useState(() => null != t.soundId && n.current?.dataset.soundId === t.soundId && !n.current.paused);
    (0, i.Ay)(() => {
        let { current: e } = n;
        null != e && null != t.soundId && u && e.addEventListener("pause", () => d(!1), { once: !0 });
    });
    let h = l.useCallback(async () => {
        if (null == e) {
            c.current = null;
            return;
        }
        if (null != c.current && c.current.src === e) return;
        let t = new (await (0, a.A)(e))();
        (t.src = e), (c.current = t);
    }, [c, e]);
    return {
        isPlaying: u,
        playSound: l.useCallback(
            function () {
                let { volume: e, outputChannel: l = o.a.DEFAULT } =
                    arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                h(), n.current?.pause();
                let { current: i } = c;
                return (
                    null != i &&
                    ((n.current = i),
                    (i.currentTime = 0),
                    (i.volume = e ?? 1),
                    (i.dataset.soundId = t.soundId),
                    l === o.a.VOICE && i.setSinkId?.(s.voiceSinkId),
                    i.play(),
                    (i.onplay = () => d(!0)),
                    (i.onpause = () => d(!1)),
                    (i.onended = () => d(!1)),
                    !0)
                );
            },
            [n, t.soundId, h],
        ),
        stopSound: l.useCallback(() => {
            let { current: e } = n;
            null == e || ((null == t.soundId || e.dataset.soundId === t.soundId) && (e.pause(), d(!1)));
        }, [n, t.soundId]),
        preloadSound: h,
    };
}
