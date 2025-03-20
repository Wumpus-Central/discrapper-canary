n.d(t, { Z: () => eb }), n(47120), n(653041);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(610521),
    l = n(512969),
    c = n(873546),
    u = n(442837),
    d = n(704215),
    f = n(433517),
    _ = n(335854),
    p = n(481060),
    h = n(570140),
    m = n(721037),
    g = n(490173),
    E = n(114250),
    b = n(735246),
    v = n(315263),
    y = n(40851),
    O = n(607070),
    I = n(899663),
    S = n(793903),
    T = n(213609),
    N = n(613413),
    A = n(94795),
    C = n(327943),
    R = n(907459),
    P = n(559407),
    w = n(556766),
    D = n(514361),
    L = n(724145),
    x = n(195302),
    M = n(260035),
    k = n(482215),
    j = n(540059),
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
    ed = n(541222);
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
    (0, _.E)({ getDefaultLinkInterceptor: v.default }),
    (0, et.Un)({
        createPromise: () => Promise.all([n.e('77298'), n.e('80451'), n.e('30634'), n.e('33551')]).then(n.bind(n, 849493)),
        webpackId: 849493
    }),
    (0, et.Un)({
        createPromise: () => Promise.all([n.e('77298'), n.e('80451'), n.e('30634'), n.e('58493')]).then(n.bind(n, 80753)),
        webpackId: 80753
    });
let em = (0, et.Un)({
        createPromise: () => n.e('67110').then(n.bind(n, 177741)),
        webpackId: 177741
    }),
    eg = (0, et.Un)({
        createPromise: () => Promise.all([n.e('78447'), n.e('13474')]).then(n.bind(n, 420541)),
        webpackId: 420541
    }),
    eE = i.memo(function (e) {
        let t = (0, u.e7)([J.Z], () => J.Z.isFocused()),
            n = (0, u.e7)([Q.Z], () => Q.Z.hasLayers()),
            i = (0, p.s9z)(p.$sL);
        return (0, j.Q3)('ConnectedTitleBar')
            ? (0, r.jsx)(es.D, {
                  fixed: !0,
                  show: n || i || !q.default.isAuthenticated()
              })
            : (0, r.jsx)(el.Z, eh(e_({}, e), { focused: t }));
    }),
    eb = function (e) {
        let { children: t, skipsSettingDefaultPageTitle: n } = e,
            { pathname: o } = (0, l.TH)(),
            _ = (0, $.getPlatform)(),
            v = c.tq || c.Em,
            q = (0, u.e7)([K.Z], () => (K.Z.darkSidebar ? ec.BRd.DARK : void 0)),
            J = (0, j.Q3)('AppSkeleton');
        i.useEffect(() => {
            f.K.set(j.k9, String(J));
        }, [J]);
        let et = (0, u.e7)([O.Z], () => (O.Z.useForcedColors ? 'yes' : 'no')),
            [es, el, ef] = (0, u.Wu)([D.Z], () => [D.Z.isEditorOpen, D.Z.isCoachmark, D.Z.isPreview]),
            [e_, ep] = (0, u.Wu)([C.Z], () => [C.Z.isEditorOpen, C.Z.isUpsellPreview]),
            eh = (0, u.e7)([Q.Z], () => Q.Z.getLayers().includes(ec.S9g.USER_SETTINGS)),
            eb = (0, u.e7)([X.default], () => ee.ZP.canUseClientThemes(X.default.getCurrentUser())),
            ev = es && !eh,
            ey = e_ && !eh,
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
                ((0, A.nJ)(),
                h.Z.dispatch({
                    type: 'APP_ICON_TRACK_IMPRESSION',
                    markAsDismissed: eS
                }));
        }, [eT, eN, eS, o]);
        let eA = i.useRef(document.body),
            eC = ev || eN,
            eR = ey && !eN,
            eP = ef || ep,
            { enabled: ew } = W.Z.useExperiment(
                { location: 'AppSkeleton' },
                {
                    autoTrackExposure: eP && (eC || eR),
                    disable: !eP
                }
            ),
            eD = ''.concat(J ? 'enabled' : 'disabled').concat(et);
        return (0, r.jsx)(
            Y.w,
            {
                children: (0, r.jsxs)(I.Z, {
                    children: [
                        (0, r.jsx)(er.Z, { skipsSettingDefaultPageTitle: n }),
                        (0, r.jsx)(b.T, {
                            children: (0, r.jsx)(ei.Z, {
                                children: (0, r.jsxs)(p.JcV, {
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
                                                    null != _
                                                        ? (0, r.jsx)(eE, {
                                                              type: _,
                                                              themeOverride: q
                                                          })
                                                        : null,
                                                    (0, r.jsxs)('div', {
                                                        className: a()(ed.appAsidePanelWrapper, v && ed.mobileAppAsidePanelWrapper),
                                                        children: [
                                                            (0, r.jsx)(k.K, {}),
                                                            (0, r.jsx)('div', {
                                                                className: ed.notAppAsidePanel,
                                                                'data-app-not-dev-tools': !0,
                                                                children: (0, r.jsx)(M.m, {
                                                                    children: (0, r.jsx)(Z.OR, {
                                                                        children: (0, r.jsx)(S.Z.Provider, {
                                                                            value: T.Z,
                                                                            children: (0, r.jsxs)(x.p, {
                                                                                children: [
                                                                                    (0, r.jsx)('div', {
                                                                                        className: a()(v ? ed.mobileApp : ed.app),
                                                                                        children: t
                                                                                    }),
                                                                                    (0, r.jsx)(P.Z, {}),
                                                                                    (0, r.jsx)(g.Z, {}),
                                                                                    (0, r.jsx)(p.nKe, {}),
                                                                                    (0, r.jsx)(E.Z, {}),
                                                                                    (0, r.jsx)(V.Ox, {}),
                                                                                    (0, r.jsx)(F.Un, {}),
                                                                                    (0, r.jsx)(Z.ot, {}),
                                                                                    (0, r.jsx)(p.Ixi, {}),
                                                                                    (0, r.jsx)(N.Z, {}),
                                                                                    (0, r.jsx)(H.Z, {}),
                                                                                    (0, r.jsx)(em, {}),
                                                                                    (0, r.jsx)(eg, {})
                                                                                ]
                                                                            })
                                                                        })
                                                                    })
                                                                })
                                                            }),
                                                            (0, r.jsx)(w.Z, {}),
                                                            (0, r.jsx)(m.Z, {}),
                                                            eC &&
                                                                !ew &&
                                                                (0, r.jsx)(L.Z, {
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
                                                                (0, r.jsx)(R.Z, {
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
                                                            (0, r.jsx)(U.Z, { mobile: v })
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
        );
    };
