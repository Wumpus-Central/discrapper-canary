t.d(n, { Z: () => m }), t(388685);
var l = t(54381),
    a = t(473749),
    i = t(481060),
    r = t(22382),
    s = t(747071),
    o = t(586826),
    u = t(174727),
    c = t(990792),
    d = t(388032),
    f = t(609978);
let m = a.memo(function (e) {
    let { sound: n, volume: t, disabled: m } = e,
        [g, h] = a.useState(!1),
        v = a.useRef(null),
        { file: p, audio: b, loadAudioFromFile: y } = (0, o.p)(),
        j = a.useMemo(() => (0, r.Z)(n.soundId), [n]);
    return (
        a.useEffect(() => {
            null == v.current && (v.current = (0, u.XG)(j, n.name).then(y));
        }, [j, y, n.name]),
        (0, l.jsxs)("div", {
            className: f.previewContainer,
            children: [
                (0, l.jsx)(i.P3F, {
                    onClick: m
                        ? void 0
                        : function () {
                              null != b &&
                                  (b.paused
                                      ? ((b.volume = (0, s.Z)(t)),
                                        (b.currentTime = 0),
                                        b.play(),
                                        h(!0),
                                        b.addEventListener("ended", () => h(!1), { once: !0 }))
                                      : (b.pause(), h(!1)));
                          },
                    className: f.playButton,
                    "aria-label": g ? d.intl.string(d.t.hHBkuG) : d.intl.string(d.t.RscU7I),
                    children: g
                        ? (0, l.jsx)(i.wNq, {
                              size: "xs",
                              color: "currentColor",
                              className: f.playIcon,
                          })
                        : (0, l.jsx)(i.o1U, {
                              size: "xs",
                              color: "currentColor",
                              className: f.playIcon,
                          }),
                }),
                (0, l.jsx)("div", {
                    className: f.waveformContainer,
                    children: (0, l.jsx)(c.Z, {
                        className: f.waveform,
                        file: p,
                        audio: b,
                    }),
                }),
            ],
        })
    );
});
