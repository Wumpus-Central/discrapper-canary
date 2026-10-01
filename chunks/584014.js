n.d(t, { A: () => u });
var l = n(582128),
    i = n(964486),
    s = n(946261),
    a = n(536184),
    r = n(523006),
    o = n(257645);
function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { audioRef: n } = l.useContext(r.A),
        u = l.useRef(null),
        [d, c] = l.useState(() => null != t.soundId && n.current?.dataset.soundId === t.soundId && !n.current.paused);
    (0, i.Ay)(() => {
        let { current: e } = n;
        null != e && null != t.soundId && d && e.addEventListener("pause", () => c(!1), { once: !0 });
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
            isPlaying: d,
            playSound: l.useCallback(
                async function () {
                    let { volume: e, outputChannel: l = o.a.DEFAULT } =
                        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    (await m(), n.current?.pause());
                    let { current: i } = u;
                    return (
                        null != i &&
                        ((n.current = i),
                        (i.currentTime = 0),
                        (i.volume = e ?? 1),
                        (i.dataset.soundId = t.soundId),
                        l === o.a.VOICE && i.setSinkId?.(s.voiceSinkId),
                        i.play(),
                        (i.onplay = () => c(!0)),
                        (i.onpause = () => c(!1)),
                        (i.onended = () => c(!1)),
                        !0)
                    );
                },
                [n, t.soundId, m],
            ),
            stopSound: l.useCallback(() => {
                let { current: e } = n;
                null == e || ((null == t.soundId || e.dataset.soundId === t.soundId) && (e.pause(), c(!1)));
            }, [n, t.soundId]),
        }
    );
}
