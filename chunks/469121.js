(n.d(t, { Z: () => c }), n(388685));
var r = n(73800),
    i = n(493773),
    a = n(146779),
    o = n(545511),
    s = n(386965),
    l = n(509571);
function c(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { audioRef: n } = r.useContext(s.Z),
        c = r.useRef(null),
        [u, d] = r.useState(() => {
            var e;
            return null != t.soundId && (null == (e = n.current) ? void 0 : e.dataset.soundId) === t.soundId && !n.current.paused;
        });
    (0, i.ZP)(() => {
        let { current: e } = n;
        null != e && null != t.soundId && u && e.addEventListener('pause', () => d(!1), { once: !0 });
    });
    let _ = r.useCallback(async () => {
        if (null == e) {
            c.current = null;
            return;
        }
        if (null != c.current && c.current.src === e) return;
        let t = new (await (0, o.Z)(e))();
        ((t.src = e), (c.current = t));
    }, [c, e]);
    return {
        isPlaying: u,
        playSound: r.useCallback(
            function () {
                var e, r;
                let { volume: i, outputChannel: o = l.w.DEFAULT } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                (_(), null == (e = n.current) || e.pause());
                let { current: s } = c;
                return null != s && ((n.current = s), (s.currentTime = 0), (s.volume = null != i ? i : 1), (s.dataset.soundId = t.soundId), o === l.w.VOICE && (null == (r = s.setSinkId) || r.call(s, a.voiceSinkId)), s.play(), (s.onplay = () => d(!0)), (s.onpause = () => d(!1)), (s.onended = () => d(!1)), !0);
            },
            [n, t.soundId, _]
        ),
        stopSound: r.useCallback(() => {
            let { current: e } = n;
            null != e && (null == t.soundId || e.dataset.soundId === t.soundId) && (e.pause(), d(!1));
        }, [n, t.soundId]),
        preloadSound: _
    };
}
