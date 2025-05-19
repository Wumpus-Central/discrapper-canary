n.d(t, { Z: () => ey }), n(388685), n(539854);
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(670481),
    l = n(114858),
    c = n(873546),
    u = n(442837),
    d = n(704215),
    f = n(335854),
    _ = n(481060),
    p = n(570140),
    h = n(721037),
    m = n(490173),
    g = n(114250),
    E = n(735246),
    b = n(315263),
    y = n(40851),
    O = n(607070),
    v = n(899663),
    I = n(793903),
    S = n(213609),
    T = n(613413),
    A = n(94795),
    N = n(327943),
    C = n(907459),
    P = n(559407),
    R = n(556766),
    w = n(514361),
    D = n(724145),
    L = n(195302),
    x = n(260035),
    k = n(482215),
    M = n(540059),
    j = n(366841),
    U = n(947519),
    G = n(605236),
    B = n(243778),
    F = n(859678),
    V = n(314910),
    Z = n(84615),
    H = n(429142),
    Y = n(813744),
    W = n(311476),
    K = n(746106),
    z = n(210887),
    q = n(978781),
    Q = n(314897),
    X = n(819640),
    J = n(594174),
    $ = n(451478),
    ee = n(358085),
    et = n(74538),
    en = n(663993),
    er = n(766127),
    ei = n(823453),
    ea = n(628123),
    eo = n(436774),
    es = n(686546),
    el = n(950796),
    ec = n(151851),
    eu = n(981631),
    ed = n(921944),
    ef = n(86777);
function e_(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function ep(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                e_(e, t, n[t]);
            });
    }
    return e;
}
function eh(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function em(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : eh(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
n(167666),
    Promise.resolve()
        .then(n.bind(n, 62883))
        .then((e) => {
            ee.isPlatformEmbedded ? window.addEventListener('contextmenu', e.contextMenuCallbackNative, !1) : window.addEventListener('contextmenu', e.contextMenuCallbackWeb, !1);
        }),
    (0, f.E)({ getDefaultLinkInterceptor: b.default }),
    (0, en.Un)({
        createPromise: () => Promise.all([n.e('50448'), n.e('80451'), n.e('30634'), n.e('33551')]).then(n.bind(n, 849493)),
        webpackId: 849493
    }),
    (0, en.Un)({
        createPromise: () => Promise.all([n.e('50448'), n.e('80451'), n.e('30634'), n.e('58493')]).then(n.bind(n, 80753)),
        webpackId: 80753
    });
let eg = (0, en.Un)({
        createPromise: () => n.e('67110').then(n.bind(n, 177741)),
        webpackId: 177741
    }),
    eE = (0, en.Un)({
        createPromise: () => n.e('13474').then(n.bind(n, 420541)),
        webpackId: 420541
    }),
    eb = i.memo(function (e) {
        let t = (0, u.e7)([$.Z], () => $.Z.isFocused()),
            n = (0, u.e7)([X.Z], () => X.Z.hasLayers()),
            i = (0, _.s9z)(_.$sL);
        return (0, M.Q3)('ConnectedTitleBar')
            ? (0, r.jsx)(el.D, {
                  fixed: !0,
                  show: n || i || !Q.default.isAuthenticated()
              })
            : (0, r.jsx)(ec.Z, em(ep({}, e), { focused: t }));
    }),
    ey = function (e) {
        let { children: t, skipsSettingDefaultPageTitle: n } = e,
            { pathname: a } = (0, l.TH)(),
            f = (0, ee.getPlatform)(),
            b = c.tq || c.Em,
            Q = (0, u.e7)([z.Z], () => (z.Z.darkSidebar ? eu.BRd.DARK : void 0)),
            $ = (0, M.Q3)('AppSkeleton'),
            en = (0, u.e7)([O.Z], () => (O.Z.useForcedColors ? 'yes' : 'no')),
            [el, ec, e_] = (0, u.Wu)([w.Z], () => [w.Z.isEditorOpen, w.Z.isCoachmark, w.Z.isPreview]),
            [ep, eh] = (0, u.Wu)([N.Z], () => [N.Z.isEditorOpen, N.Z.isUpsellPreview]),
            em = (0, u.e7)([X.Z], () => X.Z.getLayers().includes(eu.S9g.USER_SETTINGS)),
            ey = (0, u.e7)([J.default], () => et.ZP.canUseClientThemes(J.default.getCurrentUser())),
            eO = el && !em,
            ev = ep && !em,
            eI = [];
        em || !ec || ey || eI.push(d.z.CLIENT_THEMES_COACHMARK);
        let [eS, eT] = (0, B.US)(eI, ed.R.SIDEBAR, !0);
        eI.push(d.z.DEKSTOP_CUSTOM_APP_ICON_COACHMARK);
        let eA = eS === d.z.DEKSTOP_CUSTOM_APP_ICON_COACHMARK,
            eN = eS === d.z.CLIENT_THEMES_COACHMARK;
        i.useEffect(() => {
            null ==
                (0, l.LX)(a, {
                    path: 'invite',
                    exact: !1,
                    strict: !1
                }) &&
                eA &&
                !eN &&
                ((0, A.nJ)(),
                p.Z.dispatch({
                    type: 'APP_ICON_TRACK_IMPRESSION',
                    markAsDismissed: eT
                }));
        }, [eA, eN, eT, a]);
        let eC = i.useRef(document.body),
            eP = eO || eN,
            eR = ev && !eN,
            ew = e_ || eh,
            { enabled: eD } = W.Z.useExperiment(
                { location: 'AppSkeleton' },
                {
                    autoTrackExposure: ew && (eP || eR),
                    disable: !ew
                }
            ),
            eL = ''.concat($ ? 'enabled' : 'disabled').concat(en);
        return (
            (0, j.G)(),
            (0, F.G)('AppSkeleton'),
            (0, r.jsx)(
                K.w,
                {
                    children: (0, r.jsxs)(v.Z, {
                        children: [
                            (0, r.jsx)(ei.Z, { skipsSettingDefaultPageTitle: n }),
                            (0, r.jsx)(E.T, {
                                children: (0, r.jsx)(ea.Z, {
                                    children: (0, r.jsxs)(_.JcV, {
                                        containerRef: eC,
                                        children: [
                                            (0, r.jsx)(es.Co, {}),
                                            (0, r.jsx)(eo.ZP, {}),
                                            (0, r.jsx)(s.OU, {}),
                                            (0, r.jsx)(y.Wu, {
                                                appContext: eu.IlC.APP,
                                                renderWindow: window,
                                                children: (0, r.jsxs)(V.yP, {
                                                    children: [
                                                        null != f
                                                            ? (0, r.jsx)(eb, {
                                                                  type: f,
                                                                  themeOverride: Q
                                                              })
                                                            : null,
                                                        (0, r.jsxs)('div', {
                                                            className: o()(ef.appAsidePanelWrapper, b && ef.mobileAppAsidePanelWrapper),
                                                            children: [
                                                                (0, r.jsx)(k.K, {}),
                                                                (0, r.jsx)('div', {
                                                                    className: ef.notAppAsidePanel,
                                                                    'data-app-not-dev-tools': !0,
                                                                    children: (0, r.jsx)(x.m, {
                                                                        children: (0, r.jsx)(H.OR, {
                                                                            children: (0, r.jsx)(I.Z.Provider, {
                                                                                value: S.Z,
                                                                                children: (0, r.jsxs)(L.p, {
                                                                                    children: [
                                                                                        (0, r.jsx)('div', {
                                                                                            className: o()(b ? ef.mobileApp : ef.app),
                                                                                            children: t
                                                                                        }),
                                                                                        (0, r.jsx)(P.Z, {}),
                                                                                        (0, r.jsx)(m.Z, {}),
                                                                                        (0, r.jsx)(_.nKe, {}),
                                                                                        (0, r.jsx)(g.Z, {}),
                                                                                        (0, r.jsx)(Z.Ox, {}),
                                                                                        (0, r.jsx)(V.Un, {}),
                                                                                        (0, r.jsx)(H.ot, {}),
                                                                                        (0, r.jsx)(_.Ixi, {}),
                                                                                        (0, r.jsx)(T.Z, {}),
                                                                                        (0, r.jsx)(Y.Z, {}),
                                                                                        (0, r.jsx)(eg, {}),
                                                                                        (0, r.jsx)(eE, {})
                                                                                    ]
                                                                                })
                                                                            })
                                                                        })
                                                                    })
                                                                }),
                                                                (0, r.jsx)(R.Z, {}),
                                                                (0, r.jsx)(h.Z, {}),
                                                                eP &&
                                                                    !eD &&
                                                                    (0, r.jsx)(D.Z, {
                                                                        markAsDismissed: eN
                                                                            ? eT
                                                                            : () => {
                                                                                  (0, G.EW)(d.z.CLIENT_THEMES_COACHMARK, {
                                                                                      dismissAction: ed.L.INDIRECT_ACTION,
                                                                                      forceTrack: !0
                                                                                  });
                                                                              },
                                                                        showClientThemesCoachmark: eN
                                                                    }),
                                                                eR &&
                                                                    !eD &&
                                                                    (0, r.jsx)(C.Z, {
                                                                        isCoachmark: eA,
                                                                        markAsDismissed: eT
                                                                    }),
                                                                (eP || eR) &&
                                                                    eD &&
                                                                    (0, r.jsx)(q.Z, {
                                                                        initialTab: eR ? q._.APP_ICONS : q._.CLIENT_THEMES,
                                                                        markAsDismissed: eT,
                                                                        isCoachmark: eN
                                                                    }),
                                                                (0, r.jsx)(er.Z, {}),
                                                                (0, r.jsx)(U.Z, { mobile: b })
                                                            ]
                                                        }),
                                                        !1
                                                    ]
                                                })
                                            }),
                                            (0, r.jsx)(s.OU, {})
                                        ]
                                    })
                                })
                            })
                        ]
                    })
                },
                eL
            )
        );
    };
