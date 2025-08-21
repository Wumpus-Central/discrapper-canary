n.d(t, { Z: () => F });
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(481060),
    s = n(846027),
    l = n(230711),
    c = n(921801),
    u = n(825655),
    d = n(131951),
    f = n(663389),
    _ = n(63063),
    p = n(680924),
    h = n(58765),
    m = n(429789),
    g = n(726763),
    E = n(208113),
    b = n(894939),
    y = n(710808),
    O = n(625205),
    v = n(325808),
    I = n(823087),
    T = n(232388),
    S = n(546997),
    A = n(186934),
    C = n(716210),
    N = n(520384),
    R = n(459674),
    P = n(167540),
    w = n(267006),
    D = n(803567),
    x = n(269876),
    L = n(976758),
    j = n(526761),
    M = n(726985),
    k = n(981631),
    U = n(65154),
    G = n(388032),
    B = n(994590),
    Z = n(197571);
let V = "".concat(
    _.Z.getArticleURL(k.BhN.VOICE_VIDEO_TROUBLESHOOTING),
    "?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-voice-video&utm_content=--t%3Apm",
);
function F() {
    let { inputMode: e } = (0, a.cj)([d.Z], () => ({ inputMode: d.Z.getMode() })),
        t = (0, a.e7)([f.Z], () => f.Z.getSubsection()),
        n = i.useRef(null),
        _ = i.useRef(null);
    i.useEffect(() => {
        var e, r;
        t === j.GA && (null == n || null == (e = n.current) || e.scrollIntoView(), l.Z.clearSubsection()),
            t === j.gP && (null == _ || null == (r = _.current) || r.scrollIntoView(), l.Z.clearSubsection());
    }, [n, _, t]);
    let k = (0, h.Z)();
    return (0, r.jsxs)(o.hjN, {
        tag: o.RB0.H1,
        title: G.intl.string(G.t.NiTd0d),
        children: [
            (0, r.jsx)(u.Z, {
                className: B.systemServiceUpsell,
                sourcePage: "voice",
            }),
            (0, r.jsxs)(c.F, {
                setting: M.s6.VOICE_AND_VIDEO_VOICE,
                children: [
                    (0, r.jsx)(c.F, {
                        setting: M.s6.VOICE_AND_VIDEO_DEVICES,
                        children: (0, r.jsx)(O.Z, {}),
                    }),
                    (0, r.jsx)(c.F, {
                        setting: M.s6.VOICE_AND_VIDEO_VOLUME_CONTROLS,
                        children: (0, r.jsx)(L.Z, {}),
                    }),
                    (0, r.jsxs)(c.F, {
                        setting: M.s6.VOICE_AND_VIDEO_MIC_TEST,
                        children: [
                            (0, r.jsx)(I.Z, {}),
                            (0, r.jsx)(o.R94, {
                                className: Z.marginBottom20,
                                type: o.R94.Types.DESCRIPTION,
                                children: G.intl.format(G.t["V+B3FB"], { guideURL: V }),
                            }),
                            (0, r.jsx)(o.$i$, { className: Z.marginBottom20 }),
                        ],
                    }),
                    (0, r.jsx)(c.F, {
                        setting: M.s6.VOICE_AND_VIDEO_INPUT_MODE,
                        children: (0, r.jsx)(v.Z, {}),
                    }),
                    (0, r.jsx)(c.F, {
                        setting: M.s6.VOICE_AND_VIDEO_SENSITIVITY,
                        children: e === U.pM.VOICE_ACTIVITY && (0, r.jsx)(x.Z, {}),
                    }),
                    (0, r.jsx)(o.$i$, { className: Z.marginBottom40 }),
                ],
            }),
            (0, r.jsx)(c.F, {
                setting: M.s6.VOICE_AND_VIDEO_SOUNDBOARD,
                children: (0, r.jsx)("div", {
                    style: { scrollMarginTop: "48px" },
                    ref: n,
                }),
            }),
            (0, r.jsx)(c.F, {
                setting: M.s6.VOICE_AND_VIDEO_SOUNDS,
                children: (0, r.jsx)(b.Z, {}),
            }),
            (0, r.jsxs)(c.F, {
                setting: M.s6.VOICE_AND_VIDEO_VIDEO,
                children: [
                    (0, r.jsx)("div", {
                        style: { scrollMarginTop: "48px" },
                        ref: _,
                    }),
                    (0, r.jsx)(P.Z, {}),
                ],
            }),
            (0, r.jsx)(c.F, {
                setting: M.s6.VOICE_AND_VIDEO_ADVANCED,
                children: (0, r.jsxs)(o.y5t, {
                    component: (0, r.jsx)(o.vwX, {
                        tag: o.RB0.H1,
                        className: Z.marginBottom20,
                        children: G.intl.string(G.t["8/udY2"]),
                    }),
                    children: [
                        (0, r.jsx)(g.Z, {}),
                        (0, r.jsx)(w.Z, {}),
                        (0, r.jsx)(c.F, {
                            setting: M.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                            children: (0, r.jsx)(D.Z, {}),
                        }),
                        (0, r.jsx)(N.Z, {}),
                        (0, r.jsx)(T.Z, {}),
                        (0, r.jsx)(m.Z, {}),
                        k && (0, r.jsx)(A.Z, {}),
                        (0, r.jsx)(E.Z, {}),
                        (0, r.jsx)(S.Z, {}),
                        (0, r.jsx)(C.Z, {}),
                        (0, r.jsx)(R.Z, { refreshStyles: !0 }),
                        (0, r.jsx)(o.$i$, { className: Z.marginBottom40 }),
                        (0, r.jsx)(c.F, {
                            setting: M.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                            children: (0, r.jsx)(y.Z, {}),
                        }),
                        (0, r.jsx)(c.F, {
                            setting: M.s6.VOICE_AND_VIDEO_RESET_VOICE_SETTINGS,
                            children: (0, r.jsx)(o.xJW, {
                                children: (0, r.jsx)(o.zxk, {
                                    variant: "critical-secondary",
                                    size: "sm",
                                    text: G.intl.string(G.t["/RXu6+"]),
                                    onClick: () => {
                                        (0, p.Z)(G.intl.string(G.t["/RXu6+"]), G.intl.string(G.t.sQ42iY), s.Z.reset);
                                    },
                                }),
                            }),
                        }),
                    ],
                }),
            }),
        ],
    });
}
