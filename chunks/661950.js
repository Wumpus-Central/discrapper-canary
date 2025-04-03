n.d(t, { Z: () => T });
var r = n(200651);
n(192379);
var i = n(442837),
    s = n(481060),
    a = n(921801),
    l = n(131951),
    o = n(63063),
    c = n(603963),
    d = n(738486),
    u = n(429789),
    m = n(208113),
    g = n(625205),
    p = n(325808),
    h = n(823087),
    f = n(232388),
    b = n(716210),
    N = n(459674),
    x = n(803567),
    _ = n(269876),
    E = n(976758),
    j = n(726985),
    O = n(981631),
    C = n(65154),
    S = n(388032);
let v = ''.concat(o.Z.getArticleURL(O.BhN.VOICE_VIDEO_TROUBLESHOOTING), '?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-voice-video&utm_content=--t%3Apm');
function T() {
    let { inputMode: e } = (0, i.cj)([l.Z], () => ({ inputMode: l.Z.getMode() }));
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(c.Z, {
                webSetting: j.s6.VOICE_AND_VIDEO_VOICE,
                children: [
                    (0, r.jsxs)(d.Z, {
                        children: [
                            (0, r.jsx)(a.F, {
                                setting: j.s6.VOICE_AND_VIDEO_DEVICES,
                                children: (0, r.jsx)(g.Z, {})
                            }),
                            (0, r.jsx)(a.F, {
                                setting: j.s6.VOICE_AND_VIDEO_VOLUME_CONTROLS,
                                children: (0, r.jsx)(E.Z, {})
                            }),
                            (0, r.jsxs)(a.F, {
                                setting: j.s6.VOICE_AND_VIDEO_MIC_TEST,
                                children: [
                                    (0, r.jsx)(h.Z, {}),
                                    (0, r.jsx)(s.R94, {
                                        type: s.R94.Types.DESCRIPTION,
                                        children: S.NW.format(S.t['V+B3FB'], { guideURL: v })
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, r.jsxs)(d.Z, {
                        children: [
                            (0, r.jsx)(a.F, {
                                setting: j.s6.VOICE_AND_VIDEO_INPUT_MODE,
                                children: (0, r.jsx)(p.Z, {})
                            }),
                            (0, r.jsx)(a.F, {
                                setting: j.s6.VOICE_AND_VIDEO_SENSITIVITY,
                                children: e === C.pM.VOICE_ACTIVITY && (0, r.jsx)(_.Z, {})
                            })
                        ]
                    })
                ]
            }),
            (0, r.jsx)(c.Z, {
                webSetting: j.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                title: S.NW.string(S.t['6I6GUl']),
                children: (0, r.jsx)(x.Z, { refreshStyles: !0 })
            }),
            (0, r.jsx)(c.Z, {
                title: S.NW.string(S.t['8/udY2']),
                webSetting: j.s6.VOICE_AND_VIDEO_VOICE_ADVANCED,
                children: (0, r.jsxs)(d.Z, {
                    children: [(0, r.jsx)(b.Z, { refreshStyles: !0 }), (0, r.jsx)(N.Z, { refreshStyles: !0 }), (0, r.jsx)(u.Z, { refreshStyles: !0 }), (0, r.jsx)(m.Z, { refreshStyles: !0 }), (0, r.jsx)(f.Z, { refreshStyles: !0 })]
                })
            })
        ]
    });
}
