n.d(t, {
    A: () => m,
}),
    n(896048);
var l = n(627968),
    i = n(64700),
    a = n(397927),
    r = n(102597),
    s = n(904054),
    u = n(236972),
    o = n(667920),
    c = n(997098),
    d = n(985018),
    f = n(214606);
let m = i.memo(function (e) {
    let { sound: t, volume: n, disabled: m } = e,
        [g, h] = i.useState(!1),
        v = i.useRef(null),
        { file: b, audio: x, loadAudioFromFile: p } = (0, u.L)(),
        j = i.useMemo(() => (0, r.A)(t.soundId), [t]);
    return (
        i.useEffect(() => {
            null == v.current && (v.current = (0, o.a)(j, t.name).then(p));
        }, [j, p, t.name]),
        (0, l.jsxs)("div", {
            className: f.i1,
            children: [
                (0, l.jsx)(a.DUT, {
                    onClick: m
                        ? void 0
                        : function () {
                              null != x &&
                                  (x.paused
                                      ? ((x.volume = (0, s.A)(n)),
                                        (x.currentTime = 0),
                                        x.play(),
                                        h(!0),
                                        x.addEventListener("ended", () => h(!1), {
                                            once: !0,
                                        }))
                                      : (x.pause(), h(!1)));
                          },
                    className: f.Rr,
                    "aria-label": g ? d.intl.string(d.t.hHBkuG) : d.intl.string(d.t.RscU7I),
                    children: g
                        ? (0, l.jsx)(a.wFz, {
                              size: "xs",
                              color: "currentColor",
                              className: f.uZ,
                          })
                        : (0, l.jsx)(a.udU, {
                              size: "xs",
                              color: "currentColor",
                              className: f.uZ,
                          }),
                }),
                (0, l.jsx)("div", {
                    className: f.FU,
                    children: (0, l.jsx)(c.A, {
                        className: f.ou,
                        file: b,
                        audio: x,
                    }),
                }),
            ],
        })
    );
});
