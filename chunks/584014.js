n.d(t, { A: () => d });
var i = n(582128),
    s = n(964486),
    l = n(946261),
    a = n(536184),
    r = n(523006),
    o = n(257645);
function d(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { audioRef: n } = i.useContext(r.A),
        d = i.useRef(null),
        [u, c] = i.useState(() => null != t.soundId && n.current?.dataset.soundId === t.soundId && !n.current.paused);
    (0, s.Ay)(() => {
        let { current: e } = n;
        null != e && null != t.soundId && u && e.addEventListener("pause", () => c(!1), { once: !0 });
    });
    let m = i.useCallback(async () => {
        if (null == e) {
            d.current = null;
            return;
        }
        if (null != d.current && d.current.src === e) return;
        let t = new (await (0, a.A)(e))();
        ((t.src = e), (d.current = t));
    }, [d, e]);
    return (
        i.useEffect(() => {
            m();
        }, [m]),
        {
            isPlaying: u,
            playSound: i.useCallback(
                async function () {
                    let { volume: e, outputChannel: i = o.a.DEFAULT } =
                        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    (await m(), n.current?.pause());
                    let { current: s } = d;
                    return (
                        null != s &&
                        ((n.current = s),
                        (s.currentTime = 0),
                        (s.volume = e ?? 1),
                        (s.dataset.soundId = t.soundId),
                        i === o.a.VOICE && s.setSinkId?.(l.voiceSinkId),
                        s.play(),
                        (s.onplay = () => c(!0)),
                        (s.onpause = () => c(!1)),
                        (s.onended = () => c(!1)),
                        !0)
                    );
                },
                [n, t.soundId, m],
            ),
            stopSound: i.useCallback(() => {
                let { current: e } = n;
                null == e || ((null == t.soundId || e.dataset.soundId === t.soundId) && (e.pause(), c(!1)));
            }, [n, t.soundId]),
        }
    );
}
