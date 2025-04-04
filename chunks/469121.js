n.d(t, { Z: () => s }), n(47120);
var r = n(192379),
    i = n(493773),
    o = n(545511),
    a = n(386965);
function s(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { audioRef: n } = r.useContext(a.Z),
        s = r.useRef(null),
        [l, c] = r.useState(() => {
            var e;
            return null != t.soundId && (null == (e = n.current) ? void 0 : e.dataset.soundId) === t.soundId && !n.current.paused;
        });
    (0, i.ZP)(() => {
        let { current: e } = n;
        null != e && null != t.soundId && l && e.addEventListener('pause', () => c(!1), { once: !0 });
    });
    let u = r.useCallback(async () => {
        if (null == e) {
            s.current = null;
            return;
        }
        if (null != s.current && s.current.src === e) return;
        let t = new (await (0, o.Z)(e))();
        (t.src = e), (s.current = t);
    }, [s, e]);
    return {
        isPlaying: l,
        playSound: r.useCallback(
            function () {
                var e;
                let { volume: r } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                u(), null == (e = n.current) || e.pause();
                let { current: i } = s;
                return null != i && ((n.current = i), (i.currentTime = 0), (i.volume = null != r ? r : 1), (i.dataset.soundId = t.soundId), i.play(), (i.onplay = () => c(!0)), (i.onpause = () => c(!1)), (i.onended = () => c(!1)), !0);
            },
            [n, t.soundId, u]
        ),
        stopSound: r.useCallback(() => {
            let { current: e } = n;
            null != e && (null == t.soundId || e.dataset.soundId === t.soundId) && (e.pause(), c(!1));
        }, [n, t.soundId]),
        preloadSound: u
    };
}
