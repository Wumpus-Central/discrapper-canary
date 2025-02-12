n.d(t, { Z: () => l }), n(47120);
var i = n(192379),
    r = n(481060),
    a = n(493773),
    s = n(386965),
    o = n(388032);
function l(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { audioRef: n } = i.useContext(s.Z),
        l = i.useRef(null),
        [u, c] = i.useState(() => {
            var e;
            return null != t.soundId && (null === (e = n.current) || void 0 === e ? void 0 : e.dataset.soundId) === t.soundId && !n.current.paused;
        });
    (0, a.ZP)(() => {
        let { current: e } = n;
        null != e && null != t.soundId && u && e.addEventListener('pause', () => c(!1), { once: !0 });
    });
    let d = i.useCallback(() => {
        if (null == e) {
            l.current = null;
            return;
        }
        (null == l.current || l.current.src !== e) && (l.current = new Audio(e));
    }, [l, e]);
    return {
        isPlaying: u,
        playSound: i.useCallback(
            function () {
                var e;
                let { volume: i } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                d(), null === (e = n.current) || void 0 === e || e.pause();
                let { current: a } = l;
                return (
                    null != a &&
                    ((n.current = a),
                    (a.currentTime = 0),
                    (a.volume = null != i ? i : 1),
                    (a.dataset.soundId = t.soundId),
                    a.play().catch(() => {
                        'Safari' === platform.name && (0, r.showToast)((0, r.createToast)(o.intl.string(o.t.qAsyjI), r.ToastType.FAILURE));
                    }),
                    (a.onplay = () => c(!0)),
                    (a.onpause = () => c(!1)),
                    (a.onended = () => c(!1)),
                    !0)
                );
            },
            [n, t.soundId, d]
        ),
        stopSound: i.useCallback(() => {
            let { current: e } = n;
            null != e && (null == t.soundId || e.dataset.soundId === t.soundId) && (e.pause(), c(!1));
        }, [n, t.soundId]),
        preloadSound: d
    };
}
