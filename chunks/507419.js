t.d(n, { Z: () => m }), t(47120);
var l = t(200651),
    a = t(192379),
    i = t(481060),
    s = t(22382),
    r = t(747071),
    u = t(586826),
    o = t(174727),
    d = t(990792),
    c = t(388032),
    f = t(857229);
let m = a.memo(function (e) {
    let { sound: n, volume: t, disabled: m } = e,
        [h, g] = a.useState(!1),
        p = a.useRef(null),
        { file: x, audio: v, loadAudioFromFile: y } = (0, u.p)(),
        b = a.useMemo(() => (0, s.Z)(n.soundId), [n]);
    return (
        a.useEffect(() => {
            null == p.current && (p.current = (0, o.XG)(b, n.name).then(y));
        }, [b, y, n.name]),
        (0, l.jsxs)('div', {
            className: f.previewContainer,
            children: [
                (0, l.jsx)(i.P3F, {
                    onClick: m
                        ? void 0
                        : function () {
                              null != v && (v.paused ? ((v.volume = (0, r.Z)(t)), (v.currentTime = 0), v.play(), g(!0), v.addEventListener('ended', () => g(!1), { once: !0 })) : (v.pause(), g(!1)));
                          },
                    className: f.playButton,
                    'aria-label': h ? c.intl.string(c.t.hHBkuL) : c.intl.string(c.t.RscU7O),
                    children: h
                        ? (0, l.jsx)(i.wNq, {
                              size: 'xs',
                              color: 'currentColor',
                              className: f.playIcon
                          })
                        : (0, l.jsx)(i.o1U, {
                              size: 'xs',
                              color: 'currentColor',
                              className: f.playIcon
                          })
                }),
                (0, l.jsx)('div', {
                    className: f.waveformContainer,
                    children: (0, l.jsx)(d.Z, {
                        className: f.waveform,
                        file: x,
                        audio: v
                    })
                })
            ]
        })
    );
});
