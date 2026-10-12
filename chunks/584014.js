n.d(t, { A: () => c });
var i = n(582128),
    s = n(964486),
    l = n(946261),
    r = n(536184),
    a = n(523006),
    o = n(257645);
function c(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { audioRef: n } = i.useContext(a.A),
        c = i.useRef(null),
        [d, u] = i.useState(() => null != t.soundId && n.current?.dataset.soundId === t.soundId && !n.current.paused);
    (0, s.Ay)(() => {
        let { current: e } = n;
        null != e && null != t.soundId && d && e.addEventListener("pause", () => u(!1), { once: !0 });
    });
    let m = i.useCallback(async () => {
        if (null == e) {
            c.current = null;
            return;
        }
        if (null != c.current && c.current.src === e) return;
        let t = new (await (0, r.A)(e))();
        ((t.src = e), (c.current = t));
    }, [c, e]);
    return (
        i.useEffect(() => {
            m();
        }, [m]),
        {
            isPlaying: d,
            playSound: i.useCallback(
                async function () {
                    let { volume: e, outputChannel: i = o.a.DEFAULT } =
                        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    (await m(), n.current?.pause());
                    let { current: s } = c;
                    return (
                        null != s &&
                        ((n.current = s),
                        (s.currentTime = 0),
                        (s.volume = e ?? 1),
                        (s.dataset.soundId = t.soundId),
                        i === o.a.VOICE && s.setSinkId?.(l.voiceSinkId),
                        s.play(),
                        (s.onplay = () => u(!0)),
                        (s.onpause = () => u(!1)),
                        (s.onended = () => u(!1)),
                        !0)
                    );
                },
                [n, t.soundId, m],
            ),
            stopSound: i.useCallback(() => {
                let { current: e } = n;
                null == e || ((null == t.soundId || e.dataset.soundId === t.soundId) && (e.pause(), u(!1)));
            }, [n, t.soundId]),
        }
    );
}
