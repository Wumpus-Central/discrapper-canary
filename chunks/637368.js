l.d(t, { A: () => g });
var n = l(627968),
    a = l(64700),
    i = l(939249),
    s = l(29080),
    r = l(782134),
    u = l(102597),
    o = l(904054),
    d = l(236972),
    c = l(667920),
    m = l(997098),
    f = l(985018),
    h = l(919195);
let g = a.memo(function (e) {
    let { sound: t, volume: l, disabled: g } = e,
        [x, v] = a.useState(!1),
        j = a.useRef(null),
        { file: p, audio: N, loadAudioFromFile: A } = (0, d.L)(),
        C = a.useMemo(() => (0, u.A)(t.soundId), [t]);
    return (
        a.useEffect(() => {
            null == j.current && (j.current = (0, c.a)(C, t.name).then(A));
        }, [C, A, t.name]),
        (0, n.jsxs)("div", {
            className: h.i1,
            children: [
                (0, n.jsx)(i.D, {
                    onClick: g
                        ? void 0
                        : function () {
                              null != N &&
                                  (N.paused
                                      ? ((N.volume = (0, o.A)(l)),
                                        (N.currentTime = 0),
                                        N.play(),
                                        v(!0),
                                        N.addEventListener("ended", () => v(!1), { once: !0 }))
                                      : (N.pause(), v(!1)));
                          },
                    className: h.Rr,
                    "aria-label": x ? f.intl.string(f.t.hHBkuG) : f.intl.string(f.t.RscU7I),
                    children: x
                        ? (0, n.jsx)(s.w, { size: "xs", color: "currentColor", className: h.uZ })
                        : (0, n.jsx)(r.u, { size: "xs", color: "currentColor", className: h.uZ }),
                }),
                (0, n.jsx)("div", {
                    className: h.FU,
                    children: (0, n.jsx)(m.A, { className: h.ou, file: p, audio: N }),
                }),
            ],
        })
    );
});
