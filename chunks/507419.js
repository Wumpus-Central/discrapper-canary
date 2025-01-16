t(47120);
var l = t(200651),
    a = t(192379),
    i = t(481060),
    r = t(22382),
    s = t(747071),
    o = t(586826),
    u = t(174727),
    c = t(990792),
    d = t(388032),
    f = t(194316);
n.Z = a.memo(function (e) {
    let { sound: n, volume: t, disabled: m } = e,
        [h, g] = a.useState(!1),
        p = a.useRef(null),
        { file: v, audio: x, loadAudioFromFile: N } = (0, o.p)(),
        y = a.useMemo(() => (0, r.Z)(n.soundId), [n]);
    return (
        a.useEffect(() => {
            null == p.current && (p.current = (0, u.XG)(y, n.name).then(N));
        }, [y, N, n.name]),
        (0, l.jsxs)('div', {
            className: f.previewContainer,
            children: [
                (0, l.jsx)(i.Clickable, {
                    onClick: m
                        ? void 0
                        : function () {
                              null != x && (x.paused ? ((x.volume = (0, s.Z)(t)), (x.currentTime = 0), x.play(), g(!0), x.addEventListener('ended', () => g(!1), { once: !0 })) : (x.pause(), g(!1)));
                          },
                    className: f.playButton,
                    'aria-label': h ? d.intl.string(d.t.hHBkuL) : d.intl.string(d.t.RscU7O),
                    children: h
                        ? (0, l.jsx)(i.StopIcon, {
                              size: 'xs',
                              color: 'currentColor',
                              className: f.playIcon
                          })
                        : (0, l.jsx)(i.PlayIcon, {
                              size: 'xs',
                              color: 'currentColor',
                              className: f.playIcon
                          })
                }),
                (0, l.jsx)('div', {
                    className: f.waveformContainer,
                    children: (0, l.jsx)(c.Z, {
                        className: f.waveform,
                        file: v,
                        audio: x
                    })
                })
            ]
        })
    );
});
