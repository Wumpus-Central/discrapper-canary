n.d(t, { Z: () => m }), n(388685);
var l = n(200651),
    a = n(192379),
    i = n(481060),
    r = n(22382),
    s = n(747071),
    o = n(586826),
    u = n(174727),
    c = n(990792),
    d = n(388032),
    f = n(534844);
let m = a.memo(function (e) {
    let { sound: t, volume: n, disabled: m } = e,
        [h, g] = a.useState(!1),
        p = a.useRef(null),
        { file: y, audio: b, loadAudioFromFile: v } = (0, o.p)(),
        x = a.useMemo(() => (0, r.Z)(t.soundId), [t]);
    return (
        a.useEffect(() => {
            null == p.current && (p.current = (0, u.XG)(x, t.name).then(v));
        }, [x, v, t.name]),
        (0, l.jsxs)('div', {
            className: f.previewContainer,
            children: [
                (0, l.jsx)(i.P3F, {
                    onClick: m
                        ? void 0
                        : function () {
                              null != b && (b.paused ? ((b.volume = (0, s.Z)(n)), (b.currentTime = 0), b.play(), g(!0), b.addEventListener('ended', () => g(!1), { once: !0 })) : (b.pause(), g(!1)));
                          },
                    className: f.playButton,
                    'aria-label': h ? d.intl.string(d.t.hHBkuL) : d.intl.string(d.t.RscU7O),
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
                        file: y,
                        audio: b
                    })
                })
            ]
        })
    );
});
