n.d(t, { Z: () => F });
var i = n(200651),
    s = n(192379),
    l = n(120356),
    r = n.n(l),
    a = n(442837),
    o = n(481060),
    c = n(846027),
    d = n(230711),
    u = n(921801),
    h = n(131951),
    m = n(663389),
    g = n(63063),
    x = n(680924),
    _ = n(58765),
    p = n(429789),
    E = n(726763),
    C = n(208113),
    N = n(894939),
    f = n(710808),
    I = n(625205),
    T = n(325808),
    S = n(823087),
    j = n(232388),
    v = n(546997),
    b = n(186934),
    A = n(716210),
    O = n(520384),
    R = n(459674),
    D = n(167540),
    P = n(267006),
    y = n(803567),
    Z = n(269876),
    L = n(976758),
    k = n(526761),
    B = n(726985),
    M = n(981631),
    V = n(65154),
    w = n(388032),
    U = n(483938);
let G = ''.concat(g.Z.getArticleURL(M.BhN.VOICE_VIDEO_TROUBLESHOOTING), '?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-voice-video&utm_content=--t%3Apm');
function F() {
    let { inputMode: e } = (0, a.cj)([h.Z], () => ({ inputMode: h.Z.getMode() })),
        t = (0, a.e7)([m.Z], () => m.Z.getSubsection()),
        n = s.createRef(),
        l = s.createRef();
    s.useEffect(() => {
        var e, i;
        t === k.GA && (null == n || null === (e = n.current) || void 0 === e || e.scrollIntoView(), d.Z.clearSubsection()), t === k.gP && (null == l || null === (i = l.current) || void 0 === i || i.scrollIntoView(), d.Z.clearSubsection());
    }, [n, l, t]);
    let g = (0, _.Z)();
    return (0, i.jsxs)(o.hjN, {
        tag: o.RB0.H1,
        title: w.intl.string(w.t.NiTd0d),
        children: [
            (0, i.jsxs)(u.F, {
                setting: B.s6.VOICE_AND_VIDEO_VOICE,
                children: [
                    (0, i.jsx)(u.F, {
                        setting: B.s6.VOICE_AND_VIDEO_DEVICES,
                        children: (0, i.jsx)(I.Z, {})
                    }),
                    (0, i.jsx)(u.F, {
                        setting: B.s6.VOICE_AND_VIDEO_VOLUME_CONTROLS,
                        children: (0, i.jsx)(L.Z, {})
                    }),
                    (0, i.jsxs)(u.F, {
                        setting: B.s6.VOICE_AND_VIDEO_MIC_TEST,
                        children: [
                            (0, i.jsx)(S.Z, {}),
                            (0, i.jsx)(o.R94, {
                                className: U.marginBottom20,
                                type: o.R94.Types.DESCRIPTION,
                                children: w.intl.format(w.t['V+B3FB'], { guideURL: G })
                            }),
                            (0, i.jsx)(o.$i$, { className: r()(U.marginBottom20) })
                        ]
                    }),
                    (0, i.jsx)(u.F, {
                        setting: B.s6.VOICE_AND_VIDEO_INPUT_MODE,
                        children: (0, i.jsx)(T.Z, {})
                    }),
                    (0, i.jsx)(u.F, {
                        setting: B.s6.VOICE_AND_VIDEO_SENSITIVITY,
                        children: e === V.pM.VOICE_ACTIVITY && (0, i.jsx)(Z.Z, {})
                    }),
                    (0, i.jsx)(o.$i$, { className: U.marginBottom40 })
                ]
            }),
            (0, i.jsx)(u.F, {
                setting: B.s6.VOICE_AND_VIDEO_SOUNDBOARD,
                children: (0, i.jsx)('div', {
                    style: { scrollMarginTop: '48px' },
                    ref: n
                })
            }),
            (0, i.jsx)(u.F, {
                setting: B.s6.VOICE_AND_VIDEO_SOUNDS,
                children: (0, i.jsx)(N.Z, {})
            }),
            (0, i.jsxs)(u.F, {
                setting: B.s6.VOICE_AND_VIDEO_VIDEO,
                children: [
                    (0, i.jsx)('div', {
                        style: { scrollMarginTop: '48px' },
                        ref: l
                    }),
                    (0, i.jsx)(D.Z, {})
                ]
            }),
            (0, i.jsx)(u.F, {
                setting: B.s6.VOICE_AND_VIDEO_ADVANCED,
                children: (0, i.jsxs)(o.y5t, {
                    component: (0, i.jsx)(o.vwX, {
                        tag: o.RB0.H1,
                        className: U.marginBottom20,
                        children: w.intl.string(w.t['8/udY2'])
                    }),
                    children: [
                        (0, i.jsx)(E.Z, {}),
                        (0, i.jsx)(P.Z, {}),
                        (0, i.jsx)(u.F, {
                            setting: B.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                            children: (0, i.jsx)(y.Z, {})
                        }),
                        (0, i.jsx)(O.Z, {}),
                        (0, i.jsx)(j.Z, {}),
                        (0, i.jsx)(p.Z, {}),
                        g && (0, i.jsx)(b.Z, {}),
                        (0, i.jsx)(C.Z, {}),
                        (0, i.jsx)(v.Z, {}),
                        (0, i.jsx)(A.Z, {}),
                        (0, i.jsx)(R.Z, { refreshStyles: !0 }),
                        (0, i.jsx)(o.$i$, { className: U.marginBottom40 }),
                        (0, i.jsx)(u.F, {
                            setting: B.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                            children: (0, i.jsx)(f.Z, {})
                        }),
                        (0, i.jsx)(u.F, {
                            setting: B.s6.VOICE_AND_VIDEO_RESET_VOICE_SETTINGS,
                            children: (0, i.jsx)(o.xJW, {
                                children: (0, i.jsx)(o.zxk, {
                                    look: o.zxk.Looks.OUTLINED,
                                    color: o.zxk.Colors.RED,
                                    onClick: () => {
                                        (0, x.Z)(w.intl.string(w.t['/RXu6+']), w.intl.string(w.t.sQ42iY), c.Z.reset);
                                    },
                                    size: o.zxk.Sizes.SMALL,
                                    children: w.intl.string(w.t['/RXu6+'])
                                })
                            })
                        })
                    ]
                })
            })
        ]
    });
}
