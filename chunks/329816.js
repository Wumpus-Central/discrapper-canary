n.d(t, { Z: () => ep }), n(47120), n(653041);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(610521),
    l = n(512969),
    u = n(873546),
    c = n(442837),
    d = n(704215),
    f = n(433517),
    _ = n(335854),
    p = n(481060),
    h = n(570140),
    m = n(721037),
    g = n(490173),
    E = n(114250),
    v = n(735246),
    y = n(315263),
    I = n(40851),
    T = n(607070),
    b = n(899663),
    S = n(793903),
    A = n(213609),
    N = n(613413),
    C = n(94795),
    R = n(327943),
    O = n(907459),
    D = n(559407),
    L = n(556766),
    x = n(514361),
    P = n(724145),
    w = n(195302),
    M = n(260035),
    k = n(482215),
    U = n(540059),
    G = n(947519),
    B = n(605236),
    Z = n(243778),
    F = n(314910),
    V = n(84615),
    j = n(429142),
    H = n(813744),
    Y = n(311476),
    W = n(892254),
    K = n(210887),
    z = n(978781),
    q = n(314897),
    Q = n(819640),
    X = n(594174),
    J = n(451478),
    $ = n(358085),
    ee = n(74538),
    et = n(663993),
    en = n(823453),
    ei = n(628123),
    er = n(436774),
    ea = n(686546),
    es = n(950796),
    eo = n(151851),
    el = n(981631),
    eu = n(921944),
    ec = n(381174);
n(167666),
    Promise.resolve()
        .then(n.bind(n, 62883))
        .then((e) => {
            $.isPlatformEmbedded ? window.addEventListener('contextmenu', e.contextMenuCallbackNative, !1) : window.addEventListener('contextmenu', e.contextMenuCallbackWeb, !1);
        }),
    (0, _.E)({ getDefaultLinkInterceptor: y.default }),
    (0, et.Un)({
        createPromise: () => Promise.all([n.e('80451'), n.e('30634'), n.e('33551')]).then(n.bind(n, 849493)),
        webpackId: 849493
    }),
    (0, et.Un)({
        createPromise: () => Promise.all([n.e('80451'), n.e('30634'), n.e('58493')]).then(n.bind(n, 80753)),
        webpackId: 80753
    });
let ed = (0, et.Un)({
        createPromise: () => n.e('67110').then(n.bind(n, 177741)),
        webpackId: 177741
    }),
    ef = (0, et.Un)({
        createPromise: () => Promise.all([n.e('78447'), n.e('13474')]).then(n.bind(n, 420541)),
        webpackId: 420541
    }),
    e_ = r.memo(function (e) {
        let t = (0, c.e7)([J.Z], () => J.Z.isFocused()),
            n = (0, c.e7)([Q.Z], () => Q.Z.hasLayers()),
            r = (0, p.s9z)(p.$sL);
        return (0, U.Q3)('ConnectedTitleBar')
            ? (0, i.jsx)(es.D, {
                  fixed: !0,
                  show: n || r || !q.default.isAuthenticated()
              })
            : (0, i.jsx)(eo.Z, {
                  ...e,
                  focused: t
              });
    }),
    ep = function (e) {
        let { children: t, skipsSettingDefaultPageTitle: n } = e,
            { pathname: a } = (0, l.TH)(),
            _ = (0, $.getPlatform)(),
            y = u.tq || u.Em,
            q = (0, c.e7)([K.Z], () => (K.Z.darkSidebar ? el.BRd.DARK : void 0)),
            J = (0, U.Q3)('AppSkeleton');
        r.useEffect(() => {
            f.K.set(U.k9, String(J));
        }, [J]);
        let et = (0, c.e7)([T.Z], () => (T.Z.useForcedColors ? 'yes' : 'no')),
            [es, eo, ep] = (0, c.Wu)([x.Z], () => [x.Z.isEditorOpen, x.Z.isCoachmark, x.Z.isPreview]),
            [eh, em] = (0, c.Wu)([R.Z], () => [R.Z.isEditorOpen, R.Z.isUpsellPreview]),
            eg = (0, c.e7)([Q.Z], () => Q.Z.getLayers().includes(el.S9g.USER_SETTINGS)),
            eE = (0, c.e7)([X.default], () => ee.ZP.canUseClientThemes(X.default.getCurrentUser())),
            ev = es && !eg,
            ey = eh && !eg,
            eI = [];
        eg || !eo || eE || eI.push(d.z.CLIENT_THEMES_COACHMARK);
        let [eT, eb] = (0, Z.US)(eI, eu.R.SIDEBAR, !0);
        eI.push(d.z.DEKSTOP_CUSTOM_APP_ICON_COACHMARK);
        let eS = eT === d.z.DEKSTOP_CUSTOM_APP_ICON_COACHMARK,
            eA = eT === d.z.CLIENT_THEMES_COACHMARK;
        r.useEffect(() => {
            null ==
                (0, l.LX)(a, {
                    path: 'invite',
                    exact: !1,
                    strict: !1
                }) &&
                eS &&
                !eA &&
                ((0, C.nJ)(),
                h.Z.dispatch({
                    type: 'APP_ICON_TRACK_IMPRESSION',
                    markAsDismissed: eb
                }));
        }, [eS, eA, eb, a]);
        let eN = r.useRef(document.body),
            eC = ev || eA,
            eR = ey && !eA,
            eO = ep || em,
            { enabled: eD } = Y.Z.useExperiment(
                { location: 'AppSkeleton' },
                {
                    autoTrackExposure: eO && (eC || eR),
                    disable: !eO
                }
            ),
            eL = ''.concat(J ? 'enabled' : 'disabled').concat(et);
        return (0, i.jsx)(
            W.Z,
            {
                children: (0, i.jsx)(b.Z, {
                    children: (0, i.jsxs)(p.vWI, {
                        children: [
                            (0, i.jsx)(en.Z, { skipsSettingDefaultPageTitle: n }),
                            (0, i.jsx)(v.T, {
                                children: (0, i.jsx)(ei.Z, {
                                    children: (0, i.jsxs)(p.JcV, {
                                        containerRef: eN,
                                        children: [
                                            (0, i.jsx)(ea.Co, {}),
                                            (0, i.jsx)(er.ZP, {}),
                                            (0, i.jsx)(o.OU, {}),
                                            (0, i.jsx)(I.Wu, {
                                                appContext: el.IlC.APP,
                                                renderWindow: window,
                                                children: (0, i.jsxs)(F.yP, {
                                                    children: [
                                                        null != _
                                                            ? (0, i.jsx)(e_, {
                                                                  type: _,
                                                                  themeOverride: q
                                                              })
                                                            : null,
                                                        (0, i.jsxs)('div', {
                                                            className: s()(ec.appAsidePanelWrapper, y && ec.mobileAppAsidePanelWrapper),
                                                            children: [
                                                                (0, i.jsx)(k.K, {}),
                                                                (0, i.jsx)('div', {
                                                                    className: ec.notAppAsidePanel,
                                                                    'data-app-not-dev-tools': !0,
                                                                    children: (0, i.jsx)(M.m, {
                                                                        children: (0, i.jsx)(j.OR, {
                                                                            children: (0, i.jsx)(S.Z.Provider, {
                                                                                value: A.Z,
                                                                                children: (0, i.jsxs)(w.p, {
                                                                                    children: [
                                                                                        (0, i.jsx)('div', {
                                                                                            className: s()(y ? ec.mobileApp : ec.app),
                                                                                            children: t
                                                                                        }),
                                                                                        (0, i.jsx)(D.Z, {}),
                                                                                        (0, i.jsx)(g.Z, {}),
                                                                                        (0, i.jsx)(p.nKe, {}),
                                                                                        (0, i.jsx)(E.Z, {}),
                                                                                        (0, i.jsx)(V.Ox, {}),
                                                                                        (0, i.jsx)(F.Un, {}),
                                                                                        (0, i.jsx)(j.ot, {}),
                                                                                        (0, i.jsx)(p.Ixi, {}),
                                                                                        (0, i.jsx)(N.Z, {}),
                                                                                        (0, i.jsx)(H.Z, {}),
                                                                                        (0, i.jsx)(ed, {}),
                                                                                        (0, i.jsx)(ef, {})
                                                                                    ]
                                                                                })
                                                                            })
                                                                        })
                                                                    })
                                                                }),
                                                                (0, i.jsx)(L.Z, {}),
                                                                (0, i.jsx)(m.Z, {}),
                                                                eC &&
                                                                    !eD &&
                                                                    (0, i.jsx)(P.Z, {
                                                                        markAsDismissed: eA
                                                                            ? eb
                                                                            : () => {
                                                                                  (0, B.EW)(d.z.CLIENT_THEMES_COACHMARK, {
                                                                                      dismissAction: eu.L.INDIRECT_ACTION,
                                                                                      forceTrack: !0
                                                                                  });
                                                                              },
                                                                        showClientThemesCoachmark: eA
                                                                    }),
                                                                eR &&
                                                                    !eD &&
                                                                    (0, i.jsx)(O.Z, {
                                                                        isCoachmark: eS,
                                                                        markAsDismissed: eb
                                                                    }),
                                                                (eC || eR) &&
                                                                    eD &&
                                                                    (0, i.jsx)(z.Z, {
                                                                        initialTab: eR ? z._.APP_ICONS : z._.CLIENT_THEMES,
                                                                        markAsDismissed: eb,
                                                                        isCoachmark: eA
                                                                    }),
                                                                (0, i.jsx)(G.Z, { mobile: y })
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
            eL
        );
    };
