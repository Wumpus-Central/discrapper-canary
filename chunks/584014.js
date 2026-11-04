var s = t(582128),
    i = t(964486),
    l = t(946261),
    a = t(536184),
    r = t(523006),
    o = t(257645);
t.d(
    n,
    {},
    {
        A: function (e) {
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { audioRef: t } = s.useContext(r.A),
                d = s.useRef(null),
                [c, u] = s.useState(
                    () => null != n.soundId && t.current?.dataset.soundId === n.soundId && !t.current.paused,
                );
            (0, i.Ay)(() => {
                let { current: e } = t;
                null != e && null != n.soundId && c && e.addEventListener("pause", () => u(!1), { once: !0 });
            });
            let m = s.useCallback(async () => {
                if (null == e) {
                    d.current = null;
                    return;
                }
                if (null != d.current && d.current.src === e) return;
                let n = new (await (0, a.A)(e))();
                ((n.src = e), (d.current = n));
            }, [d, e]);
            return (
                s.useEffect(() => {
                    m();
                }, [m]),
                {
                    isPlaying: c,
                    playSound: s.useCallback(
                        async function () {
                            let { volume: e, outputChannel: s = o.a.DEFAULT } =
                                arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            (await m(), t.current?.pause());
                            let { current: i } = d;
                            return (
                                null != i &&
                                ((t.current = i),
                                (i.currentTime = 0),
                                (i.volume = e ?? 1),
                                (i.dataset.soundId = n.soundId),
                                s === o.a.VOICE && i.setSinkId?.(l.B),
                                i.play(),
                                (i.onplay = () => u(!0)),
                                (i.onpause = () => u(!1)),
                                (i.onended = () => u(!1)),
                                !0)
                            );
                        },
                        [t, n.soundId, m],
                    ),
                    stopSound: s.useCallback(() => {
                        let { current: e } = t;
                        null == e || ((null == n.soundId || e.dataset.soundId === n.soundId) && (e.pause(), u(!1)));
                    }, [t, n.soundId]),
                }
            );
        },
    },
);
