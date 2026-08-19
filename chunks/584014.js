"use strict";
n.d(t, { A: () => u });
var l = n(582128),
    i = n(964486),
    s = n(946261),
    r = n(536184),
    a = n(523006),
    o = n(257645);
function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { audioRef: n } = l.useContext(a.A),
        u = l.useRef(null),
        [c, d] = l.useState(() => null != t.soundId && n.current?.dataset.soundId === t.soundId && !n.current.paused);
    (0, i.Ay)(() => {
        let { current: e } = n;
        null != e && null != t.soundId && c && e.addEventListener("pause", () => d(!1), { once: !0 });
    });
    let h = l.useCallback(async () => {
        if (null == e) {
            u.current = null;
            return;
        }
        if (null != u.current && u.current.src === e) return;
        let t = new (await (0, r.A)(e))();
        (t.src = e), (u.current = t);
    }, [u, e]);
    return (
        l.useEffect(() => {
            h();
        }, [h]),
        {
            isPlaying: c,
            playSound: l.useCallback(
                async function () {
                    let { volume: e, outputChannel: l = o.a.DEFAULT } =
                        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    await h(), n.current?.pause();
                    let { current: i } = u;
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
        }
    );
}
