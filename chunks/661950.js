n.d(t, { Z: () => N });
var i = n(255367);
n(73800);
var r = n(442837),
    s = n(481060),
    l = n(921801),
    a = n(131951),
    o = n(63063),
    c = n(603963),
    d = n(738486),
    u = n(429789),
    m = n(208113),
    p = n(625205),
    g = n(325808),
    h = n(823087),
    f = n(232388),
    b = n(716210),
    _ = n(459674),
    x = n(803567),
    E = n(269876),
    j = n(976758),
    C = n(726985),
    O = n(981631),
    S = n(65154),
    v = n(388032);
let T = ''.concat(o.Z.getArticleURL(O.BhN.VOICE_VIDEO_TROUBLESHOOTING), '?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-voice-video&utm_content=--t%3Apm');
function N() {
    let { inputMode: e } = (0, r.cj)([a.Z], () => ({ inputMode: a.Z.getMode() }));
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(c.Z, {
                webSetting: C.s6.VOICE_AND_VIDEO_VOICE,
                children: [
                    (0, i.jsxs)(d.Z, {
                        children: [
                            (0, i.jsx)(l.F, {
                                setting: C.s6.VOICE_AND_VIDEO_DEVICES,
                                children: (0, i.jsx)(p.Z, {})
                            }),
                            (0, i.jsx)(l.F, {
                                setting: C.s6.VOICE_AND_VIDEO_VOLUME_CONTROLS,
                                children: (0, i.jsx)(j.Z, {})
                            }),
                            (0, i.jsxs)(l.F, {
                                setting: C.s6.VOICE_AND_VIDEO_MIC_TEST,
                                children: [
                                    (0, i.jsx)(h.Z, {}),
                                    (0, i.jsx)(s.R94, {
                                        type: s.R94.Types.DESCRIPTION,
                                        children: v.intl.format(v.t['V+B3FB'], { guideURL: T })
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, i.jsxs)(d.Z, {
                        children: [
                            (0, i.jsx)(l.F, {
                                setting: C.s6.VOICE_AND_VIDEO_INPUT_MODE,
                                children: (0, i.jsx)(g.Z, {})
                            }),
                            (0, i.jsx)(l.F, {
                                setting: C.s6.VOICE_AND_VIDEO_SENSITIVITY,
                                children: e === S.pM.VOICE_ACTIVITY && (0, i.jsx)(E.Z, {})
                            })
                        ]
                    })
                ]
            }),
            (0, i.jsx)(c.Z, {
                webSetting: C.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                title: v.intl.string(v.t['6I6GUl']),
                children: (0, i.jsx)(x.Z, { refreshStyles: !0 })
            }),
            (0, i.jsx)(c.Z, {
                title: v.intl.string(v.t['8/udY2']),
                webSetting: C.s6.VOICE_AND_VIDEO_VOICE_ADVANCED,
                children: (0, i.jsxs)(d.Z, {
                    children: [(0, i.jsx)(b.Z, { refreshStyles: !0 }), (0, i.jsx)(_.Z, { refreshStyles: !0 }), (0, i.jsx)(u.Z, { refreshStyles: !0 }), (0, i.jsx)(m.Z, { refreshStyles: !0 }), (0, i.jsx)(f.Z, { refreshStyles: !0 })]
                })
            })
        ]
    });
}
