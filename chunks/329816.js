n.d(t, { Z: () => ev }), n(47120), n(653041);
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
    _ = n(648894),
    p = n(335854),
    h = n(481060),
    m = n(570140),
    g = n(721037),
    E = n(490173),
    b = n(114250),
    v = n(735246),
    y = n(315263),
    O = n(40851),
    I = n(607070),
    S = n(899663),
    T = n(793903),
    N = n(213609),
    A = n(613413),
    C = n(94795),
    R = n(327943),
    P = n(907459),
    w = n(559407),
    D = n(556766),
    L = n(514361),
    x = n(724145),
    M = n(195302),
    k = n(260035),
    j = n(482215),
    U = n(540059),
    G = n(947519),
    B = n(605236),
    F = n(243778),
    V = n(314910),
    Z = n(84615),
    H = n(429142),
    W = n(813744),
    Y = n(311476),
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
    eo = n(628123),
    ea = n(436774),
    es = n(686546),
    el = n(950796),
    ec = n(151851),
    eu = n(981631),
    ed = n(921944),
    ef = n(541222);
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
    (0, p.E)({ getDefaultLinkInterceptor: y.default }),
    (0, en.Un)({
        createPromise: () => Promise.all([n.e('77298'), n.e('80451'), n.e('30634'), n.e('33551')]).then(n.bind(n, 849493)),
        webpackId: 849493
    }),
    (0, en.Un)({
        createPromise: () => Promise.all([n.e('77298'), n.e('80451'), n.e('30634'), n.e('58493')]).then(n.bind(n, 80753)),
        webpackId: 80753
    });
let eg = (0, en.Un)({
        createPromise: () => n.e('67110').then(n.bind(n, 177741)),
        webpackId: 177741
    }),
    eE = (0, en.Un)({
        createPromise: () => Promise.all([n.e('78447'), n.e('13474')]).then(n.bind(n, 420541)),
        webpackId: 420541
    }),
    eb = i.memo(function (e) {
        let t = (0, u.e7)([$.Z], () => $.Z.isFocused()),
            n = (0, u.e7)([X.Z], () => X.Z.hasLayers()),
            i = (0, h.s9z)(h.$sL);
        return (0, U.Q3)('ConnectedTitleBar')
            ? (0, r.jsx)(el.D, {
                  fixed: !0,
                  show: n || i || !Q.default.isAuthenticated()
              })
            : (0, r.jsx)(ec.Z, em(ep({}, e), { focused: t }));
    }),
    ev = function (e) {
        let { children: t, skipsSettingDefaultPageTitle: n } = e,
            { pathname: o } = (0, l.TH)(),
            p = (0, ee.getPlatform)(),
            y = c.tq || c.Em,
            Q = (0, u.e7)([z.Z], () => (z.Z.darkSidebar ? eu.BRd.DARK : void 0)),
            $ = (0, U.Q3)('AppSkeleton');
        i.useEffect(() => {
            f.K.set(U.k9, String($));
        }, [$]);
        let en = (0, u.e7)([I.Z], () => (I.Z.useForcedColors ? 'yes' : 'no')),
            [el, ec, e_] = (0, u.Wu)([L.Z], () => [L.Z.isEditorOpen, L.Z.isCoachmark, L.Z.isPreview]),
            [ep, eh] = (0, u.Wu)([R.Z], () => [R.Z.isEditorOpen, R.Z.isUpsellPreview]),
            em = (0, u.e7)([X.Z], () => X.Z.getLayers().includes(eu.S9g.USER_SETTINGS)),
            ev = (0, u.e7)([J.default], () => et.ZP.canUseClientThemes(J.default.getCurrentUser())),
            ey = el && !em,
            eO = ep && !em,
            eI = [];
        em || !ec || ev || eI.push(d.z.CLIENT_THEMES_COACHMARK);
        let [eS, eT] = (0, F.US)(eI, ed.R.SIDEBAR, !0);
        eI.push(d.z.DEKSTOP_CUSTOM_APP_ICON_COACHMARK);
        let eN = eS === d.z.DEKSTOP_CUSTOM_APP_ICON_COACHMARK,
            eA = eS === d.z.CLIENT_THEMES_COACHMARK;
        i.useEffect(() => {
            null ==
                (0, l.LX)(o, {
                    path: 'invite',
                    exact: !1,
                    strict: !1
                }) &&
                eN &&
                !eA &&
                ((0, C.nJ)(),
                m.Z.dispatch({
                    type: 'APP_ICON_TRACK_IMPRESSION',
                    markAsDismissed: eT
                }));
        }, [eN, eA, eT, o]);
        let eC = i.useRef(document.body),
            eR = ey || eA,
            eP = eO && !eA,
            ew = e_ || eh,
            { enabled: eD } = Y.Z.useExperiment(
                { location: 'AppSkeleton' },
                {
                    autoTrackExposure: ew && (eR || eP),
                    disable: !ew
                }
            ),
            eL = ''.concat($ ? 'enabled' : 'disabled').concat(en);
        return (0, r.jsx)(
            K.w,
            {
                children: (0, r.jsx)(S.Z, {
                    children: (0, r.jsx)(_.g, {
                        children: (0, r.jsxs)(h.vWI, {
                            children: [
                                (0, r.jsx)(ei.Z, { skipsSettingDefaultPageTitle: n }),
                                (0, r.jsx)(v.T, {
                                    children: (0, r.jsx)(eo.Z, {
                                        children: (0, r.jsxs)(h.JcV, {
                                            containerRef: eC,
                                            children: [
                                                (0, r.jsx)(es.Co, {}),
                                                (0, r.jsx)(ea.ZP, {}),
                                                (0, r.jsx)(s.OU, {}),
                                                (0, r.jsx)(O.Wu, {
                                                    appContext: eu.IlC.APP,
                                                    renderWindow: window,
                                                    children: (0, r.jsxs)(V.yP, {
                                                        children: [
                                                            null != p
                                                                ? (0, r.jsx)(eb, {
                                                                      type: p,
                                                                      themeOverride: Q
                                                                  })
                                                                : null,
                                                            (0, r.jsxs)('div', {
                                                                className: a()(ef.appAsidePanelWrapper, y && ef.mobileAppAsidePanelWrapper),
                                                                children: [
                                                                    (0, r.jsx)(j.K, {}),
                                                                    (0, r.jsx)('div', {
                                                                        className: ef.notAppAsidePanel,
                                                                        'data-app-not-dev-tools': !0,
                                                                        children: (0, r.jsx)(k.m, {
                                                                            children: (0, r.jsx)(H.OR, {
                                                                                children: (0, r.jsx)(T.Z.Provider, {
                                                                                    value: N.Z,
                                                                                    children: (0, r.jsxs)(M.p, {
                                                                                        children: [
                                                                                            (0, r.jsx)('div', {
                                                                                                className: a()(y ? ef.mobileApp : ef.app),
                                                                                                children: t
                                                                                            }),
                                                                                            (0, r.jsx)(w.Z, {}),
                                                                                            (0, r.jsx)(E.Z, {}),
                                                                                            (0, r.jsx)(h.nKe, {}),
                                                                                            (0, r.jsx)(b.Z, {}),
                                                                                            (0, r.jsx)(Z.Ox, {}),
                                                                                            (0, r.jsx)(V.Un, {}),
                                                                                            (0, r.jsx)(H.ot, {}),
                                                                                            (0, r.jsx)(h.Ixi, {}),
                                                                                            (0, r.jsx)(A.Z, {}),
                                                                                            (0, r.jsx)(W.Z, {}),
                                                                                            (0, r.jsx)(eg, {}),
                                                                                            (0, r.jsx)(eE, {})
                                                                                        ]
                                                                                    })
                                                                                })
                                                                            })
                                                                        })
                                                                    }),
                                                                    (0, r.jsx)(D.Z, {}),
                                                                    (0, r.jsx)(g.Z, {}),
                                                                    eR &&
                                                                        !eD &&
                                                                        (0, r.jsx)(x.Z, {
                                                                            markAsDismissed: eA
                                                                                ? eT
                                                                                : () => {
                                                                                      (0, B.EW)(d.z.CLIENT_THEMES_COACHMARK, {
                                                                                          dismissAction: ed.L.INDIRECT_ACTION,
                                                                                          forceTrack: !0
                                                                                      });
                                                                                  },
                                                                            showClientThemesCoachmark: eA
                                                                        }),
                                                                    eP &&
                                                                        !eD &&
                                                                        (0, r.jsx)(P.Z, {
                                                                            isCoachmark: eN,
                                                                            markAsDismissed: eT
                                                                        }),
                                                                    (eR || eP) &&
                                                                        eD &&
                                                                        (0, r.jsx)(q.Z, {
                                                                            initialTab: eP ? q._.APP_ICONS : q._.CLIENT_THEMES,
                                                                            markAsDismissed: eT,
                                                                            isCoachmark: eA
                                                                        }),
                                                                    (0, r.jsx)(er.Z, {}),
                                                                    (0, r.jsx)(G.Z, { mobile: y })
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
                    })
                })
            },
            eL
        );
    };
