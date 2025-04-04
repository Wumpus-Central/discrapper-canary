t.d(n, { Z: () => m }), t(47120);
var l = t(200651),
    a = t(192379),
    i = t(481060),
    r = t(22382),
    s = t(747071),
    o = t(586826),
    u = t(174727),
    c = t(990792),
    d = t(388032),
    f = t(534844);
let m = a.memo(function (e) {
    let { sound: n, volume: t, disabled: m } = e,
        [h, g] = a.useState(!1),
        p = a.useRef(null),
        { file: b, audio: y, loadAudioFromFile: v } = (0, o.p)(),
        x = a.useMemo(() => (0, r.Z)(n.soundId), [n]);
    return (
        a.useEffect(() => {
            null == p.current && (p.current = (0, u.XG)(x, n.name).then(v));
        }, [x, v, n.name]),
        (0, l.jsxs)('div', {
            className: f.previewContainer,
            children: [
                (0, l.jsx)(i.P3F, {
                    onClick: m
                        ? void 0
                        : function () {
                              null != y && (y.paused ? ((y.volume = (0, s.Z)(t)), (y.currentTime = 0), y.play(), g(!0), y.addEventListener('ended', () => g(!1), { once: !0 })) : (y.pause(), g(!1)));
                          },
                    className: f.playButton,
                    'aria-label': h ? d.NW.string(d.t.hHBkuL) : d.NW.string(d.t.RscU7O),
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
                    children: (0, l.jsx)(c.Z, {
                        className: f.waveform,
                        file: b,
                        audio: y
                    })
                })
            ]
        })
    );
});
