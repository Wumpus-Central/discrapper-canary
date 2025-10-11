t.d(n, { Z: () => m }), t(388685);
var a = t(951288),
    l = t(647438),
    r = t(481060),
    i = t(22382),
    o = t(747071),
    s = t(586826),
    u = t(174727),
    c = t(990792),
    d = t(388032),
    f = t(612926);
let m = l.memo(function (e) {
    let { sound: n, volume: t, disabled: m } = e,
        [g, h] = l.useState(!1),
        p = l.useRef(null),
        { file: b, audio: y, loadAudioFromFile: v } = (0, s.p)(),
        x = l.useMemo(() => (0, i.Z)(n.soundId), [n]);
    return (
        l.useEffect(() => {
            null == p.current && (p.current = (0, u.XG)(x, n.name).then(v));
        }, [x, v, n.name]),
        (0, a.jsxs)("div", {
            className: f.previewContainer,
            children: [
                (0, a.jsx)(r.P3F, {
                    onClick: m
                        ? void 0
                        : function () {
                              null != y &&
                                  (y.paused
                                      ? ((y.volume = (0, o.Z)(t)),
                                        (y.currentTime = 0),
                                        y.play(),
                                        h(!0),
                                        y.addEventListener("ended", () => h(!1), { once: !0 }))
                                      : (y.pause(), h(!1)));
                          },
                    className: f.playButton,
                    "aria-label": g ? d.intl.string(d.t.hHBkuL) : d.intl.string(d.t.RscU7O),
                    children: g
                        ? (0, a.jsx)(r.wNq, {
                              size: "xs",
                              color: "currentColor",
                              className: f.playIcon,
                          })
                        : (0, a.jsx)(r.o1U, {
                              size: "xs",
                              color: "currentColor",
                              className: f.playIcon,
                          }),
                }),
                (0, a.jsx)("div", {
                    className: f.waveformContainer,
                    children: (0, a.jsx)(c.Z, {
                        className: f.waveform,
                        file: b,
                        audio: y,
                    }),
                }),
            ],
        })
    );
});
