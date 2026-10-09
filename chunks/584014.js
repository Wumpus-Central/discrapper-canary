n.d(t, { A: () => u });
var l = n(582128),
    s = n(964486),
    i = n(946261),
    a = n(536184),
    r = n(523006),
    o = n(257645);
function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { audioRef: n } = l.useContext(r.A),
        u = l.useRef(null),
        [c, d] = l.useState(() => null != t.soundId && n.current?.dataset.soundId === t.soundId && !n.current.paused);
    (0, s.Ay)(() => {
        let { current: e } = n;
        null != e && null != t.soundId && c && e.addEventListener("pause", () => d(!1), { once: !0 });
    });
    let m = l.useCallback(async () => {
        if (null == e) {
            u.current = null;
            return;
        }
        if (null != u.current && u.current.src === e) return;
        let t = new (await (0, a.A)(e))();
        ((t.src = e), (u.current = t));
    }, [u, e]);
    return (
        l.useEffect(() => {
            m();
        }, [m]),
        {
            isPlaying: c,
            playSound: l.useCallback(
                async function () {
                    let { volume: e, outputChannel: l = o.a.DEFAULT } =
                        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    (await m(), n.current?.pause());
                    let { current: s } = u;
                    return (
                        null != s &&
                        ((n.current = s),
                        (s.currentTime = 0),
                        (s.volume = e ?? 1),
                        (s.dataset.soundId = t.soundId),
                        l === o.a.VOICE && s.setSinkId?.(i.voiceSinkId),
                        s.play(),
                        (s.onplay = () => d(!0)),
                        (s.onpause = () => d(!1)),
                        (s.onended = () => d(!1)),
                        !0)
                    );
                },
                [n, t.soundId, m],
            ),
            stopSound: l.useCallback(() => {
                let { current: e } = n;
                null == e || ((null == t.soundId || e.dataset.soundId === t.soundId) && (e.pause(), d(!1)));
            }, [n, t.soundId]),
        }
    );
}
