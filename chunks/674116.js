n.d(t, { Z: () => V });
var i = n(255367),
    r = n(73800),
    s = n(442837),
    l = n(481060),
    a = n(846027),
    o = n(230711),
    c = n(921801),
    d = n(131951),
    u = n(663389),
    m = n(63063),
    p = n(680924),
    g = n(58765),
    h = n(429789),
    f = n(726763),
    b = n(208113),
    _ = n(894939),
    x = n(710808),
    E = n(625205),
    j = n(325808),
    C = n(823087),
    O = n(232388),
    S = n(546997),
    v = n(186934),
    T = n(716210),
    N = n(520384),
    I = n(459674),
    y = n(167540),
    A = n(267006),
    P = n(803567),
    R = n(269876),
    D = n(976758),
    Z = n(526761),
    w = n(726985),
    k = n(981631),
    L = n(65154),
    M = n(388032),
    B = n(20493);
let U = ''.concat(m.Z.getArticleURL(k.BhN.VOICE_VIDEO_TROUBLESHOOTING), '?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-voice-video&utm_content=--t%3Apm');
function V() {
    let { inputMode: e } = (0, s.cj)([d.Z], () => ({ inputMode: d.Z.getMode() })),
        t = (0, s.e7)([u.Z], () => u.Z.getSubsection()),
        n = r.createRef(),
        m = r.createRef();
    r.useEffect(() => {
        var e, i;
        t === Z.GA && (null == n || null == (e = n.current) || e.scrollIntoView(), o.Z.clearSubsection()), t === Z.gP && (null == m || null == (i = m.current) || i.scrollIntoView(), o.Z.clearSubsection());
    }, [n, m, t]);
    let k = (0, g.Z)();
    return (0, i.jsxs)(l.hjN, {
        tag: l.RB0.H1,
        title: M.intl.string(M.t.NiTd0d),
        children: [
            (0, i.jsxs)(c.F, {
                setting: w.s6.VOICE_AND_VIDEO_VOICE,
                children: [
                    (0, i.jsx)(c.F, {
                        setting: w.s6.VOICE_AND_VIDEO_DEVICES,
                        children: (0, i.jsx)(E.Z, {})
                    }),
                    (0, i.jsx)(c.F, {
                        setting: w.s6.VOICE_AND_VIDEO_VOLUME_CONTROLS,
                        children: (0, i.jsx)(D.Z, {})
                    }),
                    (0, i.jsxs)(c.F, {
                        setting: w.s6.VOICE_AND_VIDEO_MIC_TEST,
                        children: [
                            (0, i.jsx)(C.Z, {}),
                            (0, i.jsx)(l.R94, {
                                className: B.marginBottom20,
                                type: l.R94.Types.DESCRIPTION,
                                children: M.intl.format(M.t['V+B3FB'], { guideURL: U })
                            }),
                            (0, i.jsx)(l.$i$, { className: B.marginBottom20 })
                        ]
                    }),
                    (0, i.jsx)(c.F, {
                        setting: w.s6.VOICE_AND_VIDEO_INPUT_MODE,
                        children: (0, i.jsx)(j.Z, {})
                    }),
                    (0, i.jsx)(c.F, {
                        setting: w.s6.VOICE_AND_VIDEO_SENSITIVITY,
                        children: e === L.pM.VOICE_ACTIVITY && (0, i.jsx)(R.Z, {})
                    }),
                    (0, i.jsx)(l.$i$, { className: B.marginBottom40 })
                ]
            }),
            (0, i.jsx)(c.F, {
                setting: w.s6.VOICE_AND_VIDEO_SOUNDBOARD,
                children: (0, i.jsx)('div', {
                    style: { scrollMarginTop: '48px' },
                    ref: n
                })
            }),
            (0, i.jsx)(c.F, {
                setting: w.s6.VOICE_AND_VIDEO_SOUNDS,
                children: (0, i.jsx)(_.Z, {})
            }),
            (0, i.jsxs)(c.F, {
                setting: w.s6.VOICE_AND_VIDEO_VIDEO,
                children: [
                    (0, i.jsx)('div', {
                        style: { scrollMarginTop: '48px' },
                        ref: m
                    }),
                    (0, i.jsx)(y.Z, {})
                ]
            }),
            (0, i.jsx)(c.F, {
                setting: w.s6.VOICE_AND_VIDEO_ADVANCED,
                children: (0, i.jsxs)(l.y5t, {
                    component: (0, i.jsx)(l.vwX, {
                        tag: l.RB0.H1,
                        className: B.marginBottom20,
                        children: M.intl.string(M.t['8/udY2'])
                    }),
                    children: [
                        (0, i.jsx)(f.Z, {}),
                        (0, i.jsx)(A.Z, {}),
                        (0, i.jsx)(c.F, {
                            setting: w.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                            children: (0, i.jsx)(P.Z, {})
                        }),
                        (0, i.jsx)(N.Z, {}),
                        (0, i.jsx)(O.Z, {}),
                        (0, i.jsx)(h.Z, {}),
                        k && (0, i.jsx)(v.Z, {}),
                        (0, i.jsx)(b.Z, {}),
                        (0, i.jsx)(S.Z, {}),
                        (0, i.jsx)(T.Z, {}),
                        (0, i.jsx)(I.Z, { refreshStyles: !0 }),
                        (0, i.jsx)(l.$i$, { className: B.marginBottom40 }),
                        (0, i.jsx)(c.F, {
                            setting: w.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                            children: (0, i.jsx)(x.Z, {})
                        }),
                        (0, i.jsx)(c.F, {
                            setting: w.s6.VOICE_AND_VIDEO_RESET_VOICE_SETTINGS,
                            children: (0, i.jsx)(l.xJW, {
                                children: (0, i.jsx)(l.zxk, {
                                    look: l.zxk.Looks.OUTLINED,
                                    color: l.zxk.Colors.RED,
                                    onClick: () => {
                                        (0, p.Z)(M.intl.string(M.t['/RXu6+']), M.intl.string(M.t.sQ42iY), a.Z.reset);
                                    },
                                    size: l.zxk.Sizes.SMALL,
                                    children: M.intl.string(M.t['/RXu6+'])
                                })
                            })
                        })
                    ]
                })
            })
        ]
    });
}
