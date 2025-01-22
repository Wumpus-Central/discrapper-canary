var i = r(47120);
var a = r(653041);
var o = r(200651),
    s = r(192379),
    l = r(120356),
    u = r.n(l),
    c = r(610521),
    d = r(512969),
    f = r(873546),
    p = r(442837),
    h = r(704215),
    _ = r(335854),
    m = r(481060),
    g = r(570140),
    E = r(721037),
    v = r(490173),
    y = r(504626),
    b = r(735246),
    I = r(315263),
    T = r(40851),
    S = r(607070),
    A = r(899663),
    C = r(793903),
    N = r(213609),
    R = r(613413),
    O = r(94795),
    D = r(327943),
    L = r(907459),
    x = r(559407),
    w = r(556766),
    P = r(514361),
    M = r(724145),
    k = r(195302),
    U = r(260035),
    B = r(482215),
    G = r(540059),
    Z = r(947519),
    F = r(243778),
    V = r(314910),
    j = r(84615),
    H = r(429142),
    Y = r(813744),
    W = r(311476),
    K = r(892254),
    z = r(210887),
    q = r(978781),
    Q = r(314897),
    X = r(819640),
    J = r(594174),
    $ = r(451478),
    ee = r(358085),
    et = r(74538),
    en = r(663993),
    er = r(823453),
    ei = r(628123),
    ea = r(436774),
    eo = r(686546),
    es = r(950796),
    el = r(151851),
    eu = r(981631),
    ec = r(921944),
    ed = r(999429);
r(167666),
    Promise.resolve()
        .then(r.bind(r, 62883))
        .then((e) => {
            ee.isPlatformEmbedded ? window.addEventListener('contextmenu', e.contextMenuCallbackNative, !1) : window.addEventListener('contextmenu', e.contextMenuCallbackWeb, !1);
        }),
    (0, _.E)({ getDefaultLinkInterceptor: I.default }),
    (0, en.Un)({
        createPromise: () => Promise.all([r.e('80451'), r.e('30634'), r.e('54343')]).then(r.bind(r, 849493)),
        webpackId: 849493
    }),
    (0, en.Un)({
        createPromise: () => Promise.all([r.e('80451'), r.e('30634'), r.e('81811')]).then(r.bind(r, 80753)),
        webpackId: 80753
    });
let ef = (0, en.Un)({
        createPromise: () => r.e('46369').then(r.bind(r, 177741)),
        webpackId: 177741
    }),
    ep = (0, en.Un)({
        createPromise: () => Promise.all([r.e('78447'), r.e('81465')]).then(r.bind(r, 420541)),
        webpackId: 420541
    }),
    eh = s.memo(function (e) {
        let n = (0, p.e7)([$.Z], () => $.Z.isFocused()),
            r = (0, p.e7)([X.Z], () => X.Z.hasLayers()),
            i = (0, m.useModalsStore)(m.hasAnyModalOpen);
        return (0, G.Q3)('ConnectedTitleBar')
            ? (0, o.jsx)(es.D, {
                  fixed: !0,
                  show: r || i || !Q.default.isAuthenticated()
              })
            : (0, o.jsx)(el.Z, {
                  ...e,
                  focused: n
              });
    });
function e_(e) {
    let { children: n, skipsSettingDefaultPageTitle: r } = e,
        { pathname: i } = (0, d.TH)(),
        a = (0, ee.getPlatform)(),
        l = f.tq || f.Em,
        _ = (0, p.e7)([z.Z], () => (z.Z.darkSidebar ? eu.BRd.DARK : void 0)),
        I = (0, G.Q3)('ChannelSidebar'),
        Q = (0, p.e7)([S.Z], () => (S.Z.useForcedColors ? 'yes' : 'no')),
        [$, en, es] = (0, p.Wu)([P.Z], () => [P.Z.isEditorOpen, P.Z.isCoachmark, P.Z.isPreview]),
        [el, e_] = (0, p.Wu)([D.Z], () => [D.Z.isEditorOpen, D.Z.isUpsellPreview]),
        em = (0, p.e7)([X.Z], () => X.Z.getLayers().includes(eu.S9g.USER_SETTINGS)),
        eg = (0, p.e7)([J.default], () => et.ZP.canUseClientThemes(J.default.getCurrentUser())),
        eE = $ && !em,
        ev = el && !em,
        ey = [];
    eE && en && !eg && ey.push(h.z.CLIENT_THEMES_COACHMARK);
    let [eb, eI] = (0, F.US)(ey, ec.R.SIDEBAR, !0);
    ey.push(h.z.DEKSTOP_CUSTOM_APP_ICON_COACHMARK);
    let eT = eb === h.z.DEKSTOP_CUSTOM_APP_ICON_COACHMARK,
        eS = eb === h.z.CLIENT_THEMES_COACHMARK;
    s.useEffect(() => {
        null ==
            (0, d.LX)(i, {
                path: 'invite',
                exact: !1,
                strict: !1
            }) &&
            eT &&
            !eS &&
            ((0, O.nJ)(),
            g.Z.dispatch({
                type: 'APP_ICON_TRACK_IMPRESSION',
                markAsDismissed: eI
            }));
    }, [eT, eS, eI, i]);
    let eA = s.useRef(document.body),
        eC = (eE && !en) || eS,
        eN = ev && !eS,
        eR = es || e_,
        { enabled: eO } = W.Z.useExperiment(
            { location: 'AppSkeleton' },
            {
                autoTrackExposure: eR && (eC || eN),
                disable: !eR
            }
        ),
        eD = ''.concat(I ? 'enabled' : 'disabled').concat(Q);
    return (0, o.jsx)(
        K.Z,
        {
            children: (0, o.jsx)(A.Z, {
                children: (0, o.jsxs)(m.RedesignIconContextProvider, {
                    children: [
                        (0, o.jsx)(er.Z, { skipsSettingDefaultPageTitle: r }),
                        (0, o.jsx)(b.T, {
                            children: (0, o.jsx)(ei.Z, {
                                children: (0, o.jsxs)(m.FocusRingScope, {
                                    containerRef: eA,
                                    children: [
                                        (0, o.jsx)(eo.Co, {}),
                                        (0, o.jsx)(ea.ZP, {}),
                                        (0, o.jsx)(c.OU, {}),
                                        (0, o.jsx)(T.Wu, {
                                            appContext: eu.IlC.APP,
                                            renderWindow: window,
                                            children: (0, o.jsxs)(V.yP, {
                                                children: [
                                                    null != a
                                                        ? (0, o.jsx)(eh, {
                                                              type: a,
                                                              themeOverride: _
                                                          })
                                                        : null,
                                                    (0, o.jsxs)('div', {
                                                        className: u()(ed.appAsidePanelWrapper, l && ed.mobileAppAsidePanelWrapper),
                                                        children: [
                                                            (0, o.jsx)(B.K, {}),
                                                            (0, o.jsx)('div', {
                                                                className: ed.notAppAsidePanel,
                                                                'data-app-not-dev-tools': !0,
                                                                children: (0, o.jsx)(U.m, {
                                                                    children: (0, o.jsx)(H.OR, {
                                                                        children: (0, o.jsx)(C.Z.Provider, {
                                                                            value: N.Z,
                                                                            children: (0, o.jsxs)(k.p, {
                                                                                children: [
                                                                                    (0, o.jsx)('div', {
                                                                                        className: u()(l ? ed.mobileApp : ed.app),
                                                                                        children: n
                                                                                    }),
                                                                                    (0, o.jsx)(x.Z, {}),
                                                                                    (0, o.jsx)(v.Z, {}),
                                                                                    (0, o.jsx)(m.Modals, {}),
                                                                                    (0, o.jsx)(y.Z, {}),
                                                                                    (0, o.jsx)(j.Ox, {}),
                                                                                    (0, o.jsx)(V.Un, {}),
                                                                                    (0, o.jsx)(H.ot, {}),
                                                                                    (0, o.jsx)(m.ToastContainer, {}),
                                                                                    (0, o.jsx)(R.Z, {}),
                                                                                    (0, o.jsx)(Y.Z, {}),
                                                                                    (0, o.jsx)(ef, {}),
                                                                                    (0, o.jsx)(ep, {})
                                                                                ]
                                                                            })
                                                                        })
                                                                    })
                                                                })
                                                            }),
                                                            (0, o.jsx)(w.Z, {}),
                                                            (0, o.jsx)(E.Z, {}),
                                                            eC && !eO && (0, o.jsx)(M.Z, { markAsDismissed: eI }),
                                                            eN &&
                                                                !eO &&
                                                                (0, o.jsx)(L.Z, {
                                                                    isCoachmark: eT,
                                                                    markAsDismissed: eI
                                                                }),
                                                            (eC || eN) &&
                                                                eO &&
                                                                (0, o.jsx)(q.Z, {
                                                                    initialTab: eN ? q._.APP_ICONS : q._.CLIENT_THEMES,
                                                                    markAsDismissed: eI
                                                                }),
                                                            (0, o.jsx)(Z.Z, { mobile: l })
                                                        ]
                                                    }),
                                                    !1
                                                ]
                                            })
                                        }),
                                        (0, o.jsx)(c.OU, {})
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
}
n.Z = e_;
