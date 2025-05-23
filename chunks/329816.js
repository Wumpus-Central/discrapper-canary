n.d(t, { Z: () => eE }), n(388685), n(539854);
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
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
    W = n(746106),
    K = n(210887),
    z = n(314897),
    q = n(819640),
    Q = n(594174),
    X = n(451478),
    J = n(358085),
    $ = n(74538),
    ee = n(663993),
    et = n(766127),
    en = n(823453),
    er = n(628123),
    ei = n(436774),
    eo = n(686546),
    ea = n(950796),
    es = n(151851),
    el = n(981631),
    ec = n(921944),
    eu = n(325162);
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
function e_(e, t) {
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
function ep(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : e_(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
n(167666),
    Promise.resolve()
        .then(n.bind(n, 62883))
        .then((e) => {
            J.isPlatformEmbedded ? window.addEventListener('contextmenu', e.contextMenuCallbackNative, !1) : window.addEventListener('contextmenu', e.contextMenuCallbackWeb, !1);
        }),
    (0, f.E)({ getDefaultLinkInterceptor: b.default }),
    (0, ee.Un)({
        createPromise: () => Promise.all([n.e('50448'), n.e('80451'), n.e('30634'), n.e('33551')]).then(n.bind(n, 849493)),
        webpackId: 849493
    }),
    (0, ee.Un)({
        createPromise: () => Promise.all([n.e('50448'), n.e('80451'), n.e('30634'), n.e('58493')]).then(n.bind(n, 80753)),
        webpackId: 80753
    });
let eh = (0, ee.Un)({
        createPromise: () => n.e('67110').then(n.bind(n, 177741)),
        webpackId: 177741
    }),
    em = (0, ee.Un)({
        createPromise: () => n.e('13474').then(n.bind(n, 420541)),
        webpackId: 420541
    }),
    eg = i.memo(function (e) {
        let t = (0, u.e7)([X.Z], () => X.Z.isFocused()),
            n = (0, u.e7)([q.Z], () => q.Z.hasLayers()),
            i = (0, _.s9z)(_.$sL);
        return (0, M.Q3)('ConnectedTitleBar')
            ? (0, r.jsx)(ea.D, {
                  fixed: !0,
                  show: n || i || !z.default.isAuthenticated()
              })
            : (0, r.jsx)(es.Z, ep(ef({}, e), { focused: t }));
    }),
    eE = function (e) {
        let { children: t, skipsSettingDefaultPageTitle: n } = e,
            { pathname: o } = (0, l.TH)(),
            f = (0, J.getPlatform)(),
            b = c.tq || c.Em,
            z = (0, u.e7)([K.Z], () => (K.Z.darkSidebar ? el.BRd.DARK : void 0)),
            X = (0, M.Q3)('AppSkeleton'),
            ee = (0, u.e7)([O.Z], () => (O.Z.useForcedColors ? 'yes' : 'no')),
            [ea, es] = (0, u.Wu)([w.Z], () => [w.Z.isEditorOpen, w.Z.isCoachmark]),
            ed = (0, u.e7)([N.Z], () => N.Z.isEditorOpen),
            ef = (0, u.e7)([q.Z], () => q.Z.getLayers().includes(el.S9g.USER_SETTINGS)),
            e_ = (0, u.e7)([Q.default], () => $.ZP.canUseClientThemes(Q.default.getCurrentUser())),
            ep = ea && !ef,
            eE = ed && !ef,
            eb = [];
        ef || !es || e_ || eb.push(d.z.CLIENT_THEMES_COACHMARK);
        let [ey, eO] = (0, B.US)(eb, ec.R.SIDEBAR, !0);
        eb.push(d.z.DEKSTOP_CUSTOM_APP_ICON_COACHMARK);
        let ev = ey === d.z.DEKSTOP_CUSTOM_APP_ICON_COACHMARK,
            eI = ey === d.z.CLIENT_THEMES_COACHMARK;
        i.useEffect(() => {
            null ==
                (0, l.LX)(o, {
                    path: 'invite',
                    exact: !1,
                    strict: !1
                }) &&
                ev &&
                !eI &&
                ((0, A.nJ)(),
                p.Z.dispatch({
                    type: 'APP_ICON_TRACK_IMPRESSION',
                    markAsDismissed: eO
                }));
        }, [ev, eI, eO, o]);
        let eS = i.useRef(document.body),
            eT = ep || eI,
            eA = eE && !eI,
            eN = ''.concat(X ? 'enabled' : 'disabled').concat(ee);
        return (
            (0, j.G)(),
            (0, F.G)('AppSkeleton'),
            (0, r.jsx)(
                W.w,
                {
                    children: (0, r.jsxs)(v.Z, {
                        children: [
                            (0, r.jsx)(en.Z, { skipsSettingDefaultPageTitle: n }),
                            (0, r.jsx)(E.T, {
                                children: (0, r.jsx)(er.Z, {
                                    children: (0, r.jsxs)(_.JcV, {
                                        containerRef: eS,
                                        children: [
                                            (0, r.jsx)(eo.Co, {}),
                                            (0, r.jsx)(ei.ZP, {}),
                                            (0, r.jsx)(s.OU, {}),
                                            (0, r.jsx)(y.Wu, {
                                                appContext: el.IlC.APP,
                                                renderWindow: window,
                                                children: (0, r.jsxs)(V.yP, {
                                                    children: [
                                                        null != f
                                                            ? (0, r.jsx)(eg, {
                                                                  type: f,
                                                                  themeOverride: z
                                                              })
                                                            : null,
                                                        (0, r.jsxs)('div', {
                                                            className: a()(eu.appAsidePanelWrapper, b && eu.mobileAppAsidePanelWrapper),
                                                            children: [
                                                                (0, r.jsx)(k.K, {}),
                                                                (0, r.jsx)('div', {
                                                                    className: eu.notAppAsidePanel,
                                                                    'data-app-not-dev-tools': !0,
                                                                    children: (0, r.jsx)(x.m, {
                                                                        children: (0, r.jsx)(H.OR, {
                                                                            children: (0, r.jsx)(I.Z.Provider, {
                                                                                value: S.Z,
                                                                                children: (0, r.jsxs)(L.p, {
                                                                                    children: [
                                                                                        (0, r.jsx)('div', {
                                                                                            className: a()(b ? eu.mobileApp : eu.app),
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
                                                                                        (0, r.jsx)(eh, {}),
                                                                                        (0, r.jsx)(em, {})
                                                                                    ]
                                                                                })
                                                                            })
                                                                        })
                                                                    })
                                                                }),
                                                                (0, r.jsx)(R.Z, {}),
                                                                (0, r.jsx)(h.Z, {}),
                                                                eT &&
                                                                    (0, r.jsx)(D.Z, {
                                                                        markAsDismissed: eI
                                                                            ? eO
                                                                            : () => {
                                                                                  (0, G.EW)(d.z.CLIENT_THEMES_COACHMARK, {
                                                                                      dismissAction: ec.L.INDIRECT_ACTION,
                                                                                      forceTrack: !0
                                                                                  });
                                                                              },
                                                                        showClientThemesCoachmark: eI
                                                                    }),
                                                                eA &&
                                                                    (0, r.jsx)(C.Z, {
                                                                        isCoachmark: ev,
                                                                        markAsDismissed: eO
                                                                    }),
                                                                (0, r.jsx)(et.Z, {}),
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
                eN
            )
        );
    };
