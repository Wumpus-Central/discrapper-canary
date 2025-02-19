n.d(t, { Z: () => eE }), n(47120), n(653041);
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
    p = n(335854),
    _ = n(481060),
    h = n(570140),
    m = n(721037),
    g = n(490173),
    E = n(114250),
    v = n(735246),
    b = n(315263),
    y = n(40851),
    O = n(607070),
    S = n(899663),
    I = n(793903),
    T = n(213609),
    N = n(613413),
    A = n(94795),
    C = n(327943),
    R = n(907459),
    P = n(559407),
    w = n(556766),
    D = n(514361),
    x = n(724145),
    L = n(195302),
    M = n(260035),
    k = n(482215),
    j = n(540059),
    U = n(947519),
    G = n(605236),
    B = n(243778),
    Z = n(314910),
    F = n(84615),
    V = n(429142),
    H = n(813744),
    W = n(311476),
    Y = n(892254),
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
    er = n(628123),
    ei = n(436774),
    eo = n(686546),
    ea = n(950796),
    es = n(151851),
    el = n(981631),
    ec = n(921944),
    eu = n(239007);
function ed(e, t, n) {
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
function ef(e) {
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
                ed(e, t, n[t]);
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
function e_(e, t) {
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
    (0, p.E)({ getDefaultLinkInterceptor: b.default }),
    (0, et.Un)({
        createPromise: () => Promise.all([n.e('80451'), n.e('30634'), n.e('33551')]).then(n.bind(n, 849493)),
        webpackId: 849493
    }),
    (0, et.Un)({
        createPromise: () => Promise.all([n.e('80451'), n.e('30634'), n.e('58493')]).then(n.bind(n, 80753)),
        webpackId: 80753
    });
let eh = (0, et.Un)({
        createPromise: () => n.e('67110').then(n.bind(n, 177741)),
        webpackId: 177741
    }),
    em = (0, et.Un)({
        createPromise: () => Promise.all([n.e('78447'), n.e('13474')]).then(n.bind(n, 420541)),
        webpackId: 420541
    }),
    eg = i.memo(function (e) {
        let t = (0, u.e7)([J.Z], () => J.Z.isFocused()),
            n = (0, u.e7)([Q.Z], () => Q.Z.hasLayers()),
            i = (0, _.s9z)(_.$sL);
        return (0, j.Q3)('ConnectedTitleBar')
            ? (0, r.jsx)(ea.D, {
                  fixed: !0,
                  show: n || i || !q.default.isAuthenticated()
              })
            : (0, r.jsx)(es.Z, e_(ef({}, e), { focused: t }));
    }),
    eE = function (e) {
        let { children: t, skipsSettingDefaultPageTitle: n } = e,
            { pathname: o } = (0, l.TH)(),
            p = (0, $.getPlatform)(),
            b = c.tq || c.Em,
            q = (0, u.e7)([K.Z], () => (K.Z.darkSidebar ? el.BRd.DARK : void 0)),
            J = (0, j.Q3)('AppSkeleton');
        i.useEffect(() => {
            f.K.set(j.k9, String(J));
        }, [J]);
        let et = (0, u.e7)([O.Z], () => (O.Z.useForcedColors ? 'yes' : 'no')),
            [ea, es, ed] = (0, u.Wu)([D.Z], () => [D.Z.isEditorOpen, D.Z.isCoachmark, D.Z.isPreview]),
            [ef, ep] = (0, u.Wu)([C.Z], () => [C.Z.isEditorOpen, C.Z.isUpsellPreview]),
            e_ = (0, u.e7)([Q.Z], () => Q.Z.getLayers().includes(el.S9g.USER_SETTINGS)),
            eE = (0, u.e7)([X.default], () => ee.ZP.canUseClientThemes(X.default.getCurrentUser())),
            ev = ea && !e_,
            eb = ef && !e_,
            ey = [];
        e_ || !es || eE || ey.push(d.z.CLIENT_THEMES_COACHMARK);
        let [eO, eS] = (0, B.US)(ey, ec.R.SIDEBAR, !0);
        ey.push(d.z.DEKSTOP_CUSTOM_APP_ICON_COACHMARK);
        let eI = eO === d.z.DEKSTOP_CUSTOM_APP_ICON_COACHMARK,
            eT = eO === d.z.CLIENT_THEMES_COACHMARK;
        i.useEffect(() => {
            null ==
                (0, l.LX)(o, {
                    path: 'invite',
                    exact: !1,
                    strict: !1
                }) &&
                eI &&
                !eT &&
                ((0, A.nJ)(),
                h.Z.dispatch({
                    type: 'APP_ICON_TRACK_IMPRESSION',
                    markAsDismissed: eS
                }));
        }, [eI, eT, eS, o]);
        let eN = i.useRef(document.body),
            eA = ev || eT,
            eC = eb && !eT,
            eR = ed || ep,
            { enabled: eP } = W.Z.useExperiment(
                { location: 'AppSkeleton' },
                {
                    autoTrackExposure: eR && (eA || eC),
                    disable: !eR
                }
            ),
            ew = ''.concat(J ? 'enabled' : 'disabled').concat(et);
        return (0, r.jsx)(
            Y.Z,
            {
                children: (0, r.jsx)(S.Z, {
                    children: (0, r.jsxs)(_.vWI, {
                        children: [
                            (0, r.jsx)(en.Z, { skipsSettingDefaultPageTitle: n }),
                            (0, r.jsx)(v.T, {
                                children: (0, r.jsx)(er.Z, {
                                    children: (0, r.jsxs)(_.JcV, {
                                        containerRef: eN,
                                        children: [
                                            (0, r.jsx)(eo.Co, {}),
                                            (0, r.jsx)(ei.ZP, {}),
                                            (0, r.jsx)(s.OU, {}),
                                            (0, r.jsx)(y.Wu, {
                                                appContext: el.IlC.APP,
                                                renderWindow: window,
                                                children: (0, r.jsxs)(Z.yP, {
                                                    children: [
                                                        null != p
                                                            ? (0, r.jsx)(eg, {
                                                                  type: p,
                                                                  themeOverride: q
                                                              })
                                                            : null,
                                                        (0, r.jsxs)('div', {
                                                            className: a()(eu.appAsidePanelWrapper, b && eu.mobileAppAsidePanelWrapper),
                                                            children: [
                                                                (0, r.jsx)(k.K, {}),
                                                                (0, r.jsx)('div', {
                                                                    className: eu.notAppAsidePanel,
                                                                    'data-app-not-dev-tools': !0,
                                                                    children: (0, r.jsx)(M.m, {
                                                                        children: (0, r.jsx)(V.OR, {
                                                                            children: (0, r.jsx)(I.Z.Provider, {
                                                                                value: T.Z,
                                                                                children: (0, r.jsxs)(L.p, {
                                                                                    children: [
                                                                                        (0, r.jsx)('div', {
                                                                                            className: a()(b ? eu.mobileApp : eu.app),
                                                                                            children: t
                                                                                        }),
                                                                                        (0, r.jsx)(P.Z, {}),
                                                                                        (0, r.jsx)(g.Z, {}),
                                                                                        (0, r.jsx)(_.nKe, {}),
                                                                                        (0, r.jsx)(E.Z, {}),
                                                                                        (0, r.jsx)(F.Ox, {}),
                                                                                        (0, r.jsx)(Z.Un, {}),
                                                                                        (0, r.jsx)(V.ot, {}),
                                                                                        (0, r.jsx)(_.Ixi, {}),
                                                                                        (0, r.jsx)(N.Z, {}),
                                                                                        (0, r.jsx)(H.Z, {}),
                                                                                        (0, r.jsx)(eh, {}),
                                                                                        (0, r.jsx)(em, {})
                                                                                    ]
                                                                                })
                                                                            })
                                                                        })
                                                                    })
                                                                }),
                                                                (0, r.jsx)(w.Z, {}),
                                                                (0, r.jsx)(m.Z, {}),
                                                                eA &&
                                                                    !eP &&
                                                                    (0, r.jsx)(x.Z, {
                                                                        markAsDismissed: eT
                                                                            ? eS
                                                                            : () => {
                                                                                  (0, G.EW)(d.z.CLIENT_THEMES_COACHMARK, {
                                                                                      dismissAction: ec.L.INDIRECT_ACTION,
                                                                                      forceTrack: !0
                                                                                  });
                                                                              },
                                                                        showClientThemesCoachmark: eT
                                                                    }),
                                                                eC &&
                                                                    !eP &&
                                                                    (0, r.jsx)(R.Z, {
                                                                        isCoachmark: eI,
                                                                        markAsDismissed: eS
                                                                    }),
                                                                (eA || eC) &&
                                                                    eP &&
                                                                    (0, r.jsx)(z.Z, {
                                                                        initialTab: eC ? z._.APP_ICONS : z._.CLIENT_THEMES,
                                                                        markAsDismissed: eS,
                                                                        isCoachmark: eT
                                                                    }),
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
                })
            },
            ew
        );
    };
