n.d(t, { Z: () => e_ }), n(47120), n(653041);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(610521),
    l = n(512969),
    u = n(873546),
    c = n(442837),
    d = n(704215),
    f = n(335854),
    _ = n(481060),
    p = n(570140),
    h = n(721037),
    m = n(490173),
    g = n(504626),
    E = n(735246),
    v = n(315263),
    y = n(40851),
    I = n(607070),
    b = n(899663),
    T = n(793903),
    S = n(213609),
    A = n(613413),
    N = n(94795),
    C = n(327943),
    R = n(907459),
    O = n(559407),
    D = n(556766),
    x = n(514361),
    L = n(724145),
    P = n(195302),
    w = n(260035),
    M = n(482215),
    k = n(540059),
    U = n(947519),
    G = n(605236),
    B = n(243778),
    Z = n(314910),
    F = n(84615),
    V = n(429142),
    j = n(813744),
    H = n(311476),
    Y = n(892254),
    W = n(210887),
    K = n(978781),
    z = n(314897),
    q = n(819640),
    Q = n(594174),
    X = n(451478),
    J = n(358085),
    $ = n(74538),
    ee = n(663993),
    et = n(823453),
    en = n(628123),
    ei = n(436774),
    er = n(686546),
    ea = n(950796),
    es = n(151851),
    eo = n(981631),
    el = n(921944),
    eu = n(999429);
n(167666),
    Promise.resolve()
        .then(n.bind(n, 62883))
        .then((e) => {
            J.isPlatformEmbedded ? window.addEventListener('contextmenu', e.contextMenuCallbackNative, !1) : window.addEventListener('contextmenu', e.contextMenuCallbackWeb, !1);
        }),
    (0, f.E)({ getDefaultLinkInterceptor: v.default }),
    (0, ee.Un)({
        createPromise: () => Promise.all([n.e('80451'), n.e('30634'), n.e('33551')]).then(n.bind(n, 849493)),
        webpackId: 849493
    }),
    (0, ee.Un)({
        createPromise: () => Promise.all([n.e('80451'), n.e('30634'), n.e('58493')]).then(n.bind(n, 80753)),
        webpackId: 80753
    });
let ec = (0, ee.Un)({
        createPromise: () => n.e('67110').then(n.bind(n, 177741)),
        webpackId: 177741
    }),
    ed = (0, ee.Un)({
        createPromise: () => Promise.all([n.e('78447'), n.e('13474')]).then(n.bind(n, 420541)),
        webpackId: 420541
    }),
    ef = r.memo(function (e) {
        let t = (0, c.e7)([X.Z], () => X.Z.isFocused()),
            n = (0, c.e7)([q.Z], () => q.Z.hasLayers()),
            r = (0, _.s9z)(_.$sL);
        return (0, k.Q3)('ConnectedTitleBar')
            ? (0, i.jsx)(ea.D, {
                  fixed: !0,
                  show: n || r || !z.default.isAuthenticated()
              })
            : (0, i.jsx)(es.Z, {
                  ...e,
                  focused: t
              });
    }),
    e_ = function (e) {
        let { children: t, skipsSettingDefaultPageTitle: n } = e,
            { pathname: a } = (0, l.TH)(),
            f = (0, J.getPlatform)(),
            v = u.tq || u.Em,
            z = (0, c.e7)([W.Z], () => (W.Z.darkSidebar ? eo.BRd.DARK : void 0)),
            X = (0, k.Q3)('ChannelSidebar'),
            ee = (0, c.e7)([I.Z], () => (I.Z.useForcedColors ? 'yes' : 'no')),
            [ea, es, e_] = (0, c.Wu)([x.Z], () => [x.Z.isEditorOpen, x.Z.isCoachmark, x.Z.isPreview]),
            [ep, eh] = (0, c.Wu)([C.Z], () => [C.Z.isEditorOpen, C.Z.isUpsellPreview]),
            em = (0, c.e7)([q.Z], () => q.Z.getLayers().includes(eo.S9g.USER_SETTINGS)),
            eg = (0, c.e7)([Q.default], () => $.ZP.canUseClientThemes(Q.default.getCurrentUser())),
            eE = ea && !em,
            ev = ep && !em,
            ey = [];
        em || !es || eg || ey.push(d.z.CLIENT_THEMES_COACHMARK);
        let [eI, eb] = (0, B.US)(ey, el.R.SIDEBAR, !0);
        ey.push(d.z.DEKSTOP_CUSTOM_APP_ICON_COACHMARK);
        let eT = eI === d.z.DEKSTOP_CUSTOM_APP_ICON_COACHMARK,
            eS = eI === d.z.CLIENT_THEMES_COACHMARK;
        r.useEffect(() => {
            null ==
                (0, l.LX)(a, {
                    path: 'invite',
                    exact: !1,
                    strict: !1
                }) &&
                eT &&
                !eS &&
                ((0, N.nJ)(),
                p.Z.dispatch({
                    type: 'APP_ICON_TRACK_IMPRESSION',
                    markAsDismissed: eb
                }));
        }, [eT, eS, eb, a]);
        let eA = r.useRef(document.body),
            eN = eE || eS,
            eC = ev && !eS,
            eR = e_ || eh,
            { enabled: eO } = H.Z.useExperiment(
                { location: 'AppSkeleton' },
                {
                    autoTrackExposure: eR && (eN || eC),
                    disable: !eR
                }
            ),
            eD = ''.concat(X ? 'enabled' : 'disabled').concat(ee);
        return (0, i.jsx)(
            Y.Z,
            {
                children: (0, i.jsx)(b.Z, {
                    children: (0, i.jsxs)(_.vWI, {
                        children: [
                            (0, i.jsx)(et.Z, { skipsSettingDefaultPageTitle: n }),
                            (0, i.jsx)(E.T, {
                                children: (0, i.jsx)(en.Z, {
                                    children: (0, i.jsxs)(_.JcV, {
                                        containerRef: eA,
                                        children: [
                                            (0, i.jsx)(er.Co, {}),
                                            (0, i.jsx)(ei.ZP, {}),
                                            (0, i.jsx)(o.OU, {}),
                                            (0, i.jsx)(y.Wu, {
                                                appContext: eo.IlC.APP,
                                                renderWindow: window,
                                                children: (0, i.jsxs)(Z.yP, {
                                                    children: [
                                                        null != f
                                                            ? (0, i.jsx)(ef, {
                                                                  type: f,
                                                                  themeOverride: z
                                                              })
                                                            : null,
                                                        (0, i.jsxs)('div', {
                                                            className: s()(eu.appAsidePanelWrapper, v && eu.mobileAppAsidePanelWrapper),
                                                            children: [
                                                                (0, i.jsx)(M.K, {}),
                                                                (0, i.jsx)('div', {
                                                                    className: eu.notAppAsidePanel,
                                                                    'data-app-not-dev-tools': !0,
                                                                    children: (0, i.jsx)(w.m, {
                                                                        children: (0, i.jsx)(V.OR, {
                                                                            children: (0, i.jsx)(T.Z.Provider, {
                                                                                value: S.Z,
                                                                                children: (0, i.jsxs)(P.p, {
                                                                                    children: [
                                                                                        (0, i.jsx)('div', {
                                                                                            className: s()(v ? eu.mobileApp : eu.app),
                                                                                            children: t
                                                                                        }),
                                                                                        (0, i.jsx)(O.Z, {}),
                                                                                        (0, i.jsx)(m.Z, {}),
                                                                                        (0, i.jsx)(_.nKe, {}),
                                                                                        (0, i.jsx)(g.Z, {}),
                                                                                        (0, i.jsx)(F.Ox, {}),
                                                                                        (0, i.jsx)(Z.Un, {}),
                                                                                        (0, i.jsx)(V.ot, {}),
                                                                                        (0, i.jsx)(_.Ixi, {}),
                                                                                        (0, i.jsx)(A.Z, {}),
                                                                                        (0, i.jsx)(j.Z, {}),
                                                                                        (0, i.jsx)(ec, {}),
                                                                                        (0, i.jsx)(ed, {})
                                                                                    ]
                                                                                })
                                                                            })
                                                                        })
                                                                    })
                                                                }),
                                                                (0, i.jsx)(D.Z, {}),
                                                                (0, i.jsx)(h.Z, {}),
                                                                eN &&
                                                                    !eO &&
                                                                    (0, i.jsx)(L.Z, {
                                                                        markAsDismissed: eS
                                                                            ? eb
                                                                            : () => {
                                                                                  (0, G.EW)(d.z.CLIENT_THEMES_COACHMARK, {
                                                                                      dismissAction: el.L.INDIRECT_ACTION,
                                                                                      forceTrack: !0
                                                                                  });
                                                                              },
                                                                        showClientThemesCoachmark: eS
                                                                    }),
                                                                eC &&
                                                                    !eO &&
                                                                    (0, i.jsx)(R.Z, {
                                                                        isCoachmark: eT,
                                                                        markAsDismissed: eb
                                                                    }),
                                                                (eN || eC) &&
                                                                    eO &&
                                                                    (0, i.jsx)(K.Z, {
                                                                        initialTab: eC ? K._.APP_ICONS : K._.CLIENT_THEMES,
                                                                        markAsDismissed: eb,
                                                                        isCoachmark: eS
                                                                    }),
                                                                (0, i.jsx)(U.Z, { mobile: v })
                                                            ]
                                                        }),
                                                        !1
                                                    ]
                                                })
                                            }),
                                            (0, i.jsx)(o.OU, {})
                                        ]
                                    })
                                })
                            })
                        ]
                    })
                })
            },
            eD
        );
    };
