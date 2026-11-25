var l = t(582128),
    s = t(964486),
    a = t(946261),
    i = t(536184),
    r = t(523006),
    o = t(257645);
t.d(
    n,
    {},
    {
        A: function (e) {
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                { audioRef: t } = l.useContext(r.A),
                u = l.useRef(null),
                [c, d] = l.useState(
                    () => null != n.soundId && t.current?.dataset.soundId === n.soundId && !t.current.paused,
                );
            (0, s.Ay)(() => {
                let { current: e } = t;
                null != e && null != n.soundId && c && e.addEventListener("pause", () => d(!1), { once: !0 });
            });
            let m = l.useCallback(async () => {
                if (null == e) {
                    u.current = null;
                    return;
                }
                if (null != u.current && u.current.src === e) return;
                let n = new (await (0, i.A)(e))();
                ((n.src = e), (u.current = n));
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
                            (await m(), t.current?.pause());
                            let { current: s } = u;
                            return (
                                null != s &&
                                ((t.current = s),
                                (s.currentTime = 0),
                                (s.volume = e ?? 1),
                                (s.dataset.soundId = n.soundId),
                                l === o.a.VOICE && s.setSinkId?.(a.B),
                                s.play(),
                                (s.onplay = () => d(!0)),
                                (s.onpause = () => d(!1)),
                                (s.onended = () => d(!1)),
                                !0)
                            );
                        },
                        [t, n.soundId, m],
                    ),
                    stopSound: l.useCallback(() => {
                        let { current: e } = t;
                        null == e || ((null == n.soundId || e.dataset.soundId === n.soundId) && (e.pause(), d(!1)));
                    }, [t, n.soundId]),
                }
            );
        },
    },
);
