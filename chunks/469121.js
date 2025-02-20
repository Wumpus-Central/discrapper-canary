n.d(t, { Z: () => l }), n(47120);
var r = n(192379),
    i = n(481060),
    o = n(493773),
    a = n(386965),
    s = n(388032);
function l(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { audioRef: n } = r.useContext(a.Z),
        l = r.useRef(null),
        [c, u] = r.useState(() => {
            var e;
            return null != t.soundId && (null === (e = n.current) || void 0 === e ? void 0 : e.dataset.soundId) === t.soundId && !n.current.paused;
        });
    (0, o.ZP)(() => {
        let { current: e } = n;
        null != e && null != t.soundId && c && e.addEventListener('pause', () => u(!1), { once: !0 });
    });
    let d = r.useCallback(() => {
        if (null == e) {
            l.current = null;
            return;
        }
        (null == l.current || l.current.src !== e) && (l.current = new Audio(e));
    }, [l, e]);
    return {
        isPlaying: c,
        playSound: r.useCallback(
            function () {
                var e;
                let { volume: r } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                d(), null === (e = n.current) || void 0 === e || e.pause();
                let { current: o } = l;
                return (
                    null != o &&
                    ((n.current = o),
                    (o.currentTime = 0),
                    (o.volume = null != r ? r : 1),
                    (o.dataset.soundId = t.soundId),
                    o.play().catch(() => {
                        'Safari' === platform.name && (0, i.showToast)((0, i.createToast)(s.NW.string(s.t.qAsyjI), i.ToastType.FAILURE));
                    }),
                    (o.onplay = () => u(!0)),
                    (o.onpause = () => u(!1)),
                    (o.onended = () => u(!1)),
                    !0)
                );
            },
            [n, t.soundId, d]
        ),
        stopSound: r.useCallback(() => {
            let { current: e } = n;
            null != e && (null == t.soundId || e.dataset.soundId === t.soundId) && (e.pause(), u(!1));
        }, [n, t.soundId]),
        preloadSound: d
    };
}
