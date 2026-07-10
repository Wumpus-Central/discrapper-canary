"use strict";
n.d(t, { A: () => d });
var i = n(64700),
    r = n(964486),
    a = n(946261),
    s = n(536184),
    l = n(523006),
    o = n(257645);
function d(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { audioRef: n } = i.useContext(l.A),
        d = i.useRef(null),
        [c, u] = i.useState(() => null != t.soundId && n.current?.dataset.soundId === t.soundId && !n.current.paused);
    (0, r.Ay)(() => {
        let { current: e } = n;
        null != e && null != t.soundId && c && e.addEventListener("pause", () => u(!1), { once: !0 });
    });
    let _ = i.useCallback(async () => {
        if (null == e) {
            d.current = null;
            return;
        }
        if (null != d.current && d.current.src === e) return;
        let t = new (await (0, s.A)(e))();
        (t.src = e), (d.current = t);
    }, [d, e]);
    return (
        i.useEffect(() => {
            _();
        }, [_]),
        {
            isPlaying: c,
            playSound: i.useCallback(
                async function () {
                    let { volume: e, outputChannel: i = o.a.DEFAULT } =
                        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    await _(), n.current?.pause();
                    let { current: r } = d;
                    return (
                        null != r &&
                        ((n.current = r),
                        (r.currentTime = 0),
                        (r.volume = e ?? 1),
                        (r.dataset.soundId = t.soundId),
                        i === o.a.VOICE && r.setSinkId?.(a.voiceSinkId),
                        r.play(),
                        (r.onplay = () => u(!0)),
                        (r.onpause = () => u(!1)),
                        (r.onended = () => u(!1)),
                        !0)
                    );
                },
                [n, t.soundId, _],
            ),
            stopSound: i.useCallback(() => {
                let { current: e } = n;
                null == e || ((null == t.soundId || e.dataset.soundId === t.soundId) && (e.pause(), u(!1)));
            }, [n, t.soundId]),
        }
    );
}
