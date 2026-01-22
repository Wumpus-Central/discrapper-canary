n.d(t, {
    A: () => c,
}),
    n(896048);
var r = n(64700),
    i = n(964486),
    a = n(946261),
    s = n(536184),
    o = n(523006),
    l = n(257645);

function c(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { audioRef: n } = r.useContext(o.A),
        c = r.useRef(null),
        [u, d] = r.useState(() => {
            var e;
            return (
                null != t.soundId &&
                (null == (e = n.current) ? void 0 : e.dataset.soundId) === t.soundId &&
                !n.current.paused
            );
        });
    (0, i.Ay)(() => {
        let { current: e } = n;
        null != e &&
            null != t.soundId &&
            u &&
            e.addEventListener("pause", () => d(!1), {
                once: !0,
            });
    });
    let f = r.useCallback(async () => {
        if (null == e) {
            c.current = null;
            return;
        }
        if (null != c.current && c.current.src === e) return;
        let t = new (await (0, s.A)(e))();
        (t.src = e), (c.current = t);
    }, [c, e]);
    return {
        isPlaying: u,
        playSound: r.useCallback(
            function () {
                var e, r;
                let { volume: i, outputChannel: s = l.a.DEFAULT } =
                    arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                f(), null == (e = n.current) || e.pause();
                let { current: o } = c;
                return (
                    null != o &&
                    ((n.current = o),
                    (o.currentTime = 0),
                    (o.volume = null != i ? i : 1),
                    (o.dataset.soundId = t.soundId),
                    s === l.a.VOICE && (null == (r = o.setSinkId) || r.call(o, a.voiceSinkId)),
                    o.play(),
                    (o.onplay = () => d(!0)),
                    (o.onpause = () => d(!1)),
                    (o.onended = () => d(!1)),
                    !0)
                );
            },
            [n, t.soundId, f],
        ),
        stopSound: r.useCallback(() => {
            let { current: e } = n;
            null == e || ((null == t.soundId || e.dataset.soundId === t.soundId) && (e.pause(), d(!1)));
        }, [n, t.soundId]),
        preloadSound: f,
    };
}
