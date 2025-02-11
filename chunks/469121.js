n.d(t, { Z: () => o }), n(47120);
var i = n(192379),
    r = n(481060),
    a = n(386965),
    s = n(388032);
function o(e) {
    let { audioRef: t } = i.useContext(a.Z),
        n = i.useRef(null),
        [o, l] = i.useState(null != t.current && t.current.src === e && t.current.paused),
        u = i.useCallback(() => {
            if (null == e) {
                n.current = null;
                return;
            }
            (null == n.current || n.current.src !== e) && (n.current = new Audio(e));
        }, [n, e]);
    return {
        isPlaying: o,
        playSound: i.useCallback(
            function () {
                var e;
                let { volume: i } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                u(), null === (e = t.current) || void 0 === e || e.pause();
                let { current: a } = n;
                return (
                    null != a &&
                    ((t.current = a),
                    (a.currentTime = 0),
                    (a.volume = null != i ? i : 1),
                    a.play().catch(() => {
                        'Safari' === platform.name && (0, r.showToast)((0, r.createToast)(s.intl.string(s.t.qAsyjI), r.ToastType.FAILURE));
                    }),
                    (a.onplay = () => l(!0)),
                    (a.onpause = () => l(!1)),
                    (a.onended = () => l(!1)),
                    !0)
                );
            },
            [t, u]
        ),
        stopSound: i.useCallback(() => {
            let { current: e } = t;
            null != e && (e.pause(), l(!1));
        }, [t]),
        preloadSound: u
    };
}
