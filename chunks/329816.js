n.d(t, { Z: () => eb }), n(388685), n(539854);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(563555),
    l = n(512969),
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
    v = n(607070),
    O = n(899663),
    I = n(793903),
    S = n(213609),
    T = n(613413),
    N = n(94795),
    A = n(327943),
    C = n(907459),
    R = n(559407),
    P = n(556766),
    w = n(514361),
    D = n(724145),
    L = n(195302),
    x = n(260035),
    M = n(482215),
    k = n(540059),
    j = n(366841),
    U = n(947519),
    G = n(605236),
    B = n(243778),
    F = n(314910),
    V = n(84615),
    Z = n(429142),
    H = n(813744),
    W = n(311476),
    Y = n(746106),
    K = n(210887),
    z = n(978781),
    q = n(314897),
    Q = n(819640),
    X = n(594174),
    J = n(451478),
    $ = n(358085),
    ee = n(74538),
    et = n(663993),
    en = n(766127),
    er = n(823453),
    ei = n(628123),
    eo = n(436774),
    ea = n(686546),
    es = n(950796),
    el = n(151851),
    ec = n(981631),
    eu = n(921944),
    ed = n(86777);
function ef(e, t, n) {
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
function e_(e) {
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
                ef(e, t, n[t]);
            });
    }
    return e;
}
function ep(e, t) {
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
function eh(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ep(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
n(167666),
    Promise.resolve()
        .then(n.bind(n, 62883))
        .then((e) => {
            $.isPlatformEmbedded ? window.addEventListener('contextmenu', e.contextMenuCallbackNative, !1) : window.addEventListener('contextmenu', e.contextMenuCallbackWeb, !1);
        }),
    (0, f.E)({ getDefaultLinkInterceptor: b.default }),
    (0, et.Un)({
        createPromise: () => Promise.all([n.e('50448'), n.e('80451'), n.e('30634'), n.e('33551')]).then(n.bind(n, 849493)),
        webpackId: 849493
    }),
    (0, et.Un)({
        createPromise: () => Promise.all([n.e('50448'), n.e('80451'), n.e('30634'), n.e('58493')]).then(n.bind(n, 80753)),
        webpackId: 80753
    });
let em = (0, et.Un)({
        createPromise: () => n.e('67110').then(n.bind(n, 177741)),
        webpackId: 177741
    }),
    eg = (0, et.Un)({
        createPromise: () => n.e('13474').then(n.bind(n, 420541)),
        webpackId: 420541
    }),
    eE = i.memo(function (e) {
        let t = (0, u.e7)([J.Z], () => J.Z.isFocused()),
            n = (0, u.e7)([Q.Z], () => Q.Z.hasLayers()),
            i = (0, _.s9z)(_.$sL);
        return (0, k.Q3)('ConnectedTitleBar')
            ? (0, r.jsx)(es.D, {
                  fixed: !0,
                  show: n || i || !q.default.isAuthenticated()
              })
            : (0, r.jsx)(el.Z, eh(e_({}, e), { focused: t }));
    }),
    eb = function (e) {
        let { children: t, skipsSettingDefaultPageTitle: n } = e,
            { pathname: o } = (0, l.TH)(),
            f = (0, $.getPlatform)(),
            b = c.tq || c.Em,
            q = (0, u.e7)([K.Z], () => (K.Z.darkSidebar ? ec.BRd.DARK : void 0)),
            J = (0, k.Q3)('AppSkeleton'),
            et = (0, u.e7)([v.Z], () => (v.Z.useForcedColors ? 'yes' : 'no')),
            [es, el, ef] = (0, u.Wu)([w.Z], () => [w.Z.isEditorOpen, w.Z.isCoachmark, w.Z.isPreview]),
            [e_, ep] = (0, u.Wu)([A.Z], () => [A.Z.isEditorOpen, A.Z.isUpsellPreview]),
            eh = (0, u.e7)([Q.Z], () => Q.Z.getLayers().includes(ec.S9g.USER_SETTINGS)),
            eb = (0, u.e7)([X.default], () => ee.ZP.canUseClientThemes(X.default.getCurrentUser())),
            ey = es && !eh,
            ev = e_ && !eh,
            eO = [];
        eh || !el || eb || eO.push(d.z.CLIENT_THEMES_COACHMARK);
        let [eI, eS] = (0, B.US)(eO, eu.R.SIDEBAR, !0);
        eO.push(d.z.DEKSTOP_CUSTOM_APP_ICON_COACHMARK);
        let eT = eI === d.z.DEKSTOP_CUSTOM_APP_ICON_COACHMARK,
            eN = eI === d.z.CLIENT_THEMES_COACHMARK;
        i.useEffect(() => {
            null ==
                (0, l.LX)(o, {
                    path: 'invite',
                    exact: !1,
                    strict: !1
                }) &&
                eT &&
                !eN &&
                ((0, N.nJ)(),
                p.Z.dispatch({
                    type: 'APP_ICON_TRACK_IMPRESSION',
                    markAsDismissed: eS
                }));
        }, [eT, eN, eS, o]);
        let eA = i.useRef(document.body),
            eC = ey || eN,
            eR = ev && !eN,
            eP = ef || ep,
            { enabled: ew } = W.Z.useExperiment(
                { location: 'AppSkeleton' },
                {
                    autoTrackExposure: eP && (eC || eR),
                    disable: !eP
                }
            ),
            eD = ''.concat(J ? 'enabled' : 'disabled').concat(et);
        return (
            (0, j.G)(),
            (0, r.jsx)(
                Y.w,
                {
                    children: (0, r.jsxs)(O.Z, {
                        children: [
                            (0, r.jsx)(er.Z, { skipsSettingDefaultPageTitle: n }),
                            (0, r.jsx)(E.T, {
                                children: (0, r.jsx)(ei.Z, {
                                    children: (0, r.jsxs)(_.JcV, {
                                        containerRef: eA,
                                        children: [
                                            (0, r.jsx)(ea.Co, {}),
                                            (0, r.jsx)(eo.ZP, {}),
                                            (0, r.jsx)(s.OU, {}),
                                            (0, r.jsx)(y.Wu, {
                                                appContext: ec.IlC.APP,
                                                renderWindow: window,
                                                children: (0, r.jsxs)(F.yP, {
                                                    children: [
                                                        null != f
                                                            ? (0, r.jsx)(eE, {
                                                                  type: f,
                                                                  themeOverride: q
                                                              })
                                                            : null,
                                                        (0, r.jsxs)('div', {
                                                            className: a()(ed.appAsidePanelWrapper, b && ed.mobileAppAsidePanelWrapper),
                                                            children: [
                                                                (0, r.jsx)(M.K, {}),
                                                                (0, r.jsx)('div', {
                                                                    className: ed.notAppAsidePanel,
                                                                    'data-app-not-dev-tools': !0,
                                                                    children: (0, r.jsx)(x.m, {
                                                                        children: (0, r.jsx)(Z.OR, {
                                                                            children: (0, r.jsx)(I.Z.Provider, {
                                                                                value: S.Z,
                                                                                children: (0, r.jsxs)(L.p, {
                                                                                    children: [
                                                                                        (0, r.jsx)('div', {
                                                                                            className: a()(b ? ed.mobileApp : ed.app),
                                                                                            children: t
                                                                                        }),
                                                                                        (0, r.jsx)(R.Z, {}),
                                                                                        (0, r.jsx)(m.Z, {}),
                                                                                        (0, r.jsx)(_.nKe, {}),
                                                                                        (0, r.jsx)(g.Z, {}),
                                                                                        (0, r.jsx)(V.Ox, {}),
                                                                                        (0, r.jsx)(F.Un, {}),
                                                                                        (0, r.jsx)(Z.ot, {}),
                                                                                        (0, r.jsx)(_.Ixi, {}),
                                                                                        (0, r.jsx)(T.Z, {}),
                                                                                        (0, r.jsx)(H.Z, {}),
                                                                                        (0, r.jsx)(em, {}),
                                                                                        (0, r.jsx)(eg, {})
                                                                                    ]
                                                                                })
                                                                            })
                                                                        })
                                                                    })
                                                                }),
                                                                (0, r.jsx)(P.Z, {}),
                                                                (0, r.jsx)(h.Z, {}),
                                                                eC &&
                                                                    !ew &&
                                                                    (0, r.jsx)(D.Z, {
                                                                        markAsDismissed: eN
                                                                            ? eS
                                                                            : () => {
                                                                                  (0, G.EW)(d.z.CLIENT_THEMES_COACHMARK, {
                                                                                      dismissAction: eu.L.INDIRECT_ACTION,
                                                                                      forceTrack: !0
                                                                                  });
                                                                              },
                                                                        showClientThemesCoachmark: eN
                                                                    }),
                                                                eR &&
                                                                    !ew &&
                                                                    (0, r.jsx)(C.Z, {
                                                                        isCoachmark: eT,
                                                                        markAsDismissed: eS
                                                                    }),
                                                                (eC || eR) &&
                                                                    ew &&
                                                                    (0, r.jsx)(z.Z, {
                                                                        initialTab: eR ? z._.APP_ICONS : z._.CLIENT_THEMES,
                                                                        markAsDismissed: eS,
                                                                        isCoachmark: eN
                                                                    }),
                                                                (0, r.jsx)(en.Z, {}),
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
                eD
            )
        );
    };
