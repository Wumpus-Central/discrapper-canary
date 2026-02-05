l.d(t, { A: () => f });
var n = l(627968),
    a = l(64700),
    i = l(397927),
    s = l(102597),
    r = l(904054),
    u = l(236972),
    o = l(667920),
    d = l(997098),
    c = l(985018),
    m = l(214606);
let f = a.memo(function (e) {
    let { sound: t, volume: l, disabled: f } = e,
        [h, g] = a.useState(!1),
        x = a.useRef(null),
        { file: v, audio: j, loadAudioFromFile: p } = (0, u.L)(),
        N = a.useMemo(() => (0, s.A)(t.soundId), [t]);
    return (
        a.useEffect(() => {
            null == x.current && (x.current = (0, o.a)(N, t.name).then(p));
        }, [N, p, t.name]),
        (0, n.jsxs)("div", {
            className: m.i1,
            children: [
                (0, n.jsx)(i.DUT, {
                    onClick: f
                        ? void 0
                        : function () {
                              null != j &&
                                  (j.paused
                                      ? ((j.volume = (0, r.A)(l)),
                                        (j.currentTime = 0),
                                        j.play(),
                                        g(!0),
                                        j.addEventListener("ended", () => g(!1), { once: !0 }))
                                      : (j.pause(), g(!1)));
                          },
                    className: m.Rr,
                    "aria-label": h ? c.intl.string(c.t.hHBkuG) : c.intl.string(c.t.RscU7I),
                    children: h
                        ? (0, n.jsx)(i.wFz, { size: "xs", color: "currentColor", className: m.uZ })
                        : (0, n.jsx)(i.udU, { size: "xs", color: "currentColor", className: m.uZ }),
                }),
                (0, n.jsx)("div", {
                    className: m.FU,
                    children: (0, n.jsx)(d.A, { className: m.ou, file: v, audio: j }),
                }),
            ],
        })
    );
});
