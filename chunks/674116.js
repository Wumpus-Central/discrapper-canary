n.d(t, { Z: () => U });
var r = n(200651),
    i = n(192379),
    s = n(442837),
    a = n(481060),
    l = n(846027),
    o = n(230711),
    c = n(921801),
    d = n(131951),
    u = n(663389),
    m = n(63063),
    g = n(680924),
    p = n(58765),
    h = n(429789),
    f = n(726763),
    b = n(208113),
    N = n(894939),
    x = n(710808),
    _ = n(625205),
    E = n(325808),
    j = n(823087),
    O = n(232388),
    C = n(546997),
    S = n(186934),
    v = n(716210),
    T = n(520384),
    I = n(459674),
    y = n(167540),
    A = n(267006),
    P = n(803567),
    R = n(269876),
    D = n(976758),
    Z = n(526761),
    w = n(726985),
    k = n(981631),
    W = n(65154),
    L = n(388032),
    B = n(20493);
let M = ''.concat(m.Z.getArticleURL(k.BhN.VOICE_VIDEO_TROUBLESHOOTING), '?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-voice-video&utm_content=--t%3Apm');
function U() {
    let { inputMode: e } = (0, s.cj)([d.Z], () => ({ inputMode: d.Z.getMode() })),
        t = (0, s.e7)([u.Z], () => u.Z.getSubsection()),
        n = i.createRef(),
        m = i.createRef();
    i.useEffect(() => {
        var e, r;
        t === Z.GA && (null == n || null == (e = n.current) || e.scrollIntoView(), o.Z.clearSubsection()), t === Z.gP && (null == m || null == (r = m.current) || r.scrollIntoView(), o.Z.clearSubsection());
    }, [n, m, t]);
    let k = (0, p.Z)();
    return (0, r.jsxs)(a.hjN, {
        tag: a.RB0.H1,
        title: L.NW.string(L.t.NiTd0d),
        children: [
            (0, r.jsxs)(c.F, {
                setting: w.s6.VOICE_AND_VIDEO_VOICE,
                children: [
                    (0, r.jsx)(c.F, {
                        setting: w.s6.VOICE_AND_VIDEO_DEVICES,
                        children: (0, r.jsx)(_.Z, {})
                    }),
                    (0, r.jsx)(c.F, {
                        setting: w.s6.VOICE_AND_VIDEO_VOLUME_CONTROLS,
                        children: (0, r.jsx)(D.Z, {})
                    }),
                    (0, r.jsxs)(c.F, {
                        setting: w.s6.VOICE_AND_VIDEO_MIC_TEST,
                        children: [
                            (0, r.jsx)(j.Z, {}),
                            (0, r.jsx)(a.R94, {
                                className: B.marginBottom20,
                                type: a.R94.Types.DESCRIPTION,
                                children: L.NW.format(L.t['V+B3FB'], { guideURL: M })
                            }),
                            (0, r.jsx)(a.$i$, { className: B.marginBottom20 })
                        ]
                    }),
                    (0, r.jsx)(c.F, {
                        setting: w.s6.VOICE_AND_VIDEO_INPUT_MODE,
                        children: (0, r.jsx)(E.Z, {})
                    }),
                    (0, r.jsx)(c.F, {
                        setting: w.s6.VOICE_AND_VIDEO_SENSITIVITY,
                        children: e === W.pM.VOICE_ACTIVITY && (0, r.jsx)(R.Z, {})
                    }),
                    (0, r.jsx)(a.$i$, { className: B.marginBottom40 })
                ]
            }),
            (0, r.jsx)(c.F, {
                setting: w.s6.VOICE_AND_VIDEO_SOUNDBOARD,
                children: (0, r.jsx)('div', {
                    style: { scrollMarginTop: '48px' },
                    ref: n
                })
            }),
            (0, r.jsx)(c.F, {
                setting: w.s6.VOICE_AND_VIDEO_SOUNDS,
                children: (0, r.jsx)(N.Z, {})
            }),
            (0, r.jsxs)(c.F, {
                setting: w.s6.VOICE_AND_VIDEO_VIDEO,
                children: [
                    (0, r.jsx)('div', {
                        style: { scrollMarginTop: '48px' },
                        ref: m
                    }),
                    (0, r.jsx)(y.Z, {})
                ]
            }),
            (0, r.jsx)(c.F, {
                setting: w.s6.VOICE_AND_VIDEO_ADVANCED,
                children: (0, r.jsxs)(a.y5t, {
                    component: (0, r.jsx)(a.vwX, {
                        tag: a.RB0.H1,
                        className: B.marginBottom20,
                        children: L.NW.string(L.t['8/udY2'])
                    }),
                    children: [
                        (0, r.jsx)(f.Z, {}),
                        (0, r.jsx)(A.Z, {}),
                        (0, r.jsx)(c.F, {
                            setting: w.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                            children: (0, r.jsx)(P.Z, {})
                        }),
                        (0, r.jsx)(T.Z, {}),
                        (0, r.jsx)(O.Z, {}),
                        (0, r.jsx)(h.Z, {}),
                        k && (0, r.jsx)(S.Z, {}),
                        (0, r.jsx)(b.Z, {}),
                        (0, r.jsx)(C.Z, {}),
                        (0, r.jsx)(v.Z, {}),
                        (0, r.jsx)(I.Z, { refreshStyles: !0 }),
                        (0, r.jsx)(a.$i$, { className: B.marginBottom40 }),
                        (0, r.jsx)(c.F, {
                            setting: w.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                            children: (0, r.jsx)(x.Z, {})
                        }),
                        (0, r.jsx)(c.F, {
                            setting: w.s6.VOICE_AND_VIDEO_RESET_VOICE_SETTINGS,
                            children: (0, r.jsx)(a.xJW, {
                                children: (0, r.jsx)(a.zxk, {
                                    look: a.zxk.Looks.OUTLINED,
                                    color: a.zxk.Colors.RED,
                                    onClick: () => {
                                        (0, g.Z)(L.NW.string(L.t['/RXu6+']), L.NW.string(L.t.sQ42iY), l.Z.reset);
                                    },
                                    size: a.zxk.Sizes.SMALL,
                                    children: L.NW.string(L.t['/RXu6+'])
                                })
                            })
                        })
                    ]
                })
            })
        ]
    });
}
