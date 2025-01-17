var i = r(47120);
var a = r(653041);
var s = r(200651),
    o = r(192379),
    l = r(120356),
    u = r.n(l),
    c = r(610521),
    d = r(512969),
    f = r(873546),
    _ = r(442837),
    h = r(704215),
    p = r(335854),
    m = r(481060),
    g = r(570140),
    E = r(721037),
    v = r(490173),
    I = r(504626),
    T = r(735246),
    b = r(315263),
    y = r(40851),
    S = r(607070),
    A = r(899663),
    N = r(793903),
    C = r(213609),
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
    es = r(686546),
    eo = r(950796),
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
    (0, p.E)({ getDefaultLinkInterceptor: b.default }),
    (0, en.Un)({
        createPromise: () => Promise.all([r.e('77298'), r.e('80451'), r.e('30634'), r.e('54343')]).then(r.bind(r, 849493)),
        webpackId: 849493
    }),
    (0, en.Un)({
        createPromise: () => Promise.all([r.e('77298'), r.e('80451'), r.e('30634'), r.e('81811')]).then(r.bind(r, 80753)),
        webpackId: 80753
    });
let ef = (0, en.Un)({
        createPromise: () => r.e('46369').then(r.bind(r, 177741)),
        webpackId: 177741
    }),
    e_ = (0, en.Un)({
        createPromise: () => Promise.all([r.e('78447'), r.e('81465')]).then(r.bind(r, 420541)),
        webpackId: 420541
    }),
    eh = o.memo(function (e) {
        let n = (0, _.e7)([$.Z], () => $.Z.isFocused()),
            r = (0, _.e7)([X.Z], () => X.Z.hasLayers()),
            i = (0, m.useModalsStore)(m.hasAnyModalOpen);
        return (0, G.Q3)('ConnectedTitleBar')
            ? (0, s.jsx)(eo.D, {
                  fixed: !0,
                  show: r || i || !Q.default.isAuthenticated()
              })
            : (0, s.jsx)(el.Z, {
                  ...e,
                  focused: n
              });
    });
function ep(e) {
    let { children: n, skipsSettingDefaultPageTitle: r } = e,
        { pathname: i } = (0, d.TH)(),
        a = (0, ee.getPlatform)(),
        l = f.tq || f.Em,
        p = (0, _.e7)([z.Z], () => (z.Z.darkSidebar ? eu.BRd.DARK : void 0)),
        b = (0, G.Q3)('ChannelSidebar'),
        Q = (0, _.e7)([S.Z], () => (S.Z.useForcedColors ? 'yes' : 'no')),
        [$, en, eo] = (0, _.Wu)([P.Z], () => [P.Z.isEditorOpen, P.Z.isCoachmark, P.Z.isPreview]),
        [el, ep] = (0, _.Wu)([D.Z], () => [D.Z.isEditorOpen, D.Z.isUpsellPreview]),
        em = (0, _.e7)([X.Z], () => X.Z.getLayers().includes(eu.S9g.USER_SETTINGS)),
        eg = (0, _.e7)([J.default], () => et.ZP.canUseClientThemes(J.default.getCurrentUser())),
        eE = $ && !em,
        ev = el && !em,
        eI = [];
    eE && en && !eg && eI.push(h.z.CLIENT_THEMES_COACHMARK);
    let [eT, eb] = (0, F.US)(eI, ec.R.SIDEBAR, !0);
    eI.push(h.z.DEKSTOP_CUSTOM_APP_ICON_COACHMARK);
    let ey = eT === h.z.DEKSTOP_CUSTOM_APP_ICON_COACHMARK,
        eS = eT === h.z.CLIENT_THEMES_COACHMARK;
    o.useEffect(() => {
        null ==
            (0, d.LX)(i, {
                path: 'invite',
                exact: !1,
                strict: !1
            }) &&
            ey &&
            !eS &&
            ((0, O.nJ)(),
            g.Z.dispatch({
                type: 'APP_ICON_TRACK_IMPRESSION',
                markAsDismissed: eb
            }));
    }, [ey, eS, eb, i]);
    let eA = o.useRef(document.body),
        eN = () => {
            let e = (0, d.LX)(i, {
                path: eu.Z5c.APPLICATION_DIRECTORY,
                exact: !1,
                strict: !1
            });
            return ((!!f.tq || !!f.Em) && null != e) || !1;
        },
        eC = (eE && !en) || eS,
        eR = ev && !eS,
        eO = eo || ep,
        { enabled: eD } = W.Z.useExperiment(
            { location: 'AppSkeleton' },
            {
                autoTrackExposure: eO && (eC || eR),
                disable: !eO
            }
        ),
        eL = ''.concat(b ? 'enabled' : 'disabled').concat(Q);
    return (0, s.jsx)(
        K.Z,
        {
            children: (0, s.jsx)(A.Z, {
                children: (0, s.jsxs)(m.RedesignIconContextProvider, {
                    children: [
                        (0, s.jsx)(er.Z, { skipsSettingDefaultPageTitle: r }),
                        (0, s.jsx)(T.T, {
                            children: (0, s.jsx)(ei.Z, {
                                children: (0, s.jsxs)(m.FocusRingScope, {
                                    containerRef: eA,
                                    children: [
                                        (0, s.jsx)(es.Co, {}),
                                        (0, s.jsx)(ea.ZP, {}),
                                        (0, s.jsx)(c.OU, {}),
                                        (0, s.jsx)(y.Wu, {
                                            appContext: eu.IlC.APP,
                                            renderWindow: window,
                                            children: (0, s.jsxs)(V.yP, {
                                                children: [
                                                    null != a
                                                        ? (0, s.jsx)(eh, {
                                                              type: a,
                                                              themeOverride: p
                                                          })
                                                        : null,
                                                    (0, s.jsxs)('div', {
                                                        className: u()(ed.appAsidePanelWrapper, l && ed.mobileAppAsidePanelWrapper, { [ed.allowsScrolling]: eN() }),
                                                        children: [
                                                            (0, s.jsx)(B.K, {}),
                                                            (0, s.jsx)('div', {
                                                                className: ed.notAppAsidePanel,
                                                                'data-app-not-dev-tools': !0,
                                                                children: (0, s.jsx)(U.m, {
                                                                    children: (0, s.jsx)(H.OR, {
                                                                        children: (0, s.jsx)(N.Z.Provider, {
                                                                            value: C.Z,
                                                                            children: (0, s.jsxs)(k.p, {
                                                                                children: [
                                                                                    (0, s.jsx)('div', {
                                                                                        className: u()(l ? ed.mobileApp : ed.app),
                                                                                        children: n
                                                                                    }),
                                                                                    (0, s.jsx)(x.Z, {}),
                                                                                    (0, s.jsx)(v.Z, {}),
                                                                                    (0, s.jsx)(m.Modals, {}),
                                                                                    (0, s.jsx)(I.Z, {}),
                                                                                    (0, s.jsx)(j.Ox, {}),
                                                                                    (0, s.jsx)(V.Un, {}),
                                                                                    (0, s.jsx)(H.ot, {}),
                                                                                    (0, s.jsx)(m.ToastContainer, {}),
                                                                                    (0, s.jsx)(R.Z, {}),
                                                                                    (0, s.jsx)(Y.Z, {}),
                                                                                    (0, s.jsx)(ef, {}),
                                                                                    (0, s.jsx)(e_, {})
                                                                                ]
                                                                            })
                                                                        })
                                                                    })
                                                                })
                                                            }),
                                                            (0, s.jsx)(w.Z, {}),
                                                            (0, s.jsx)(E.Z, {}),
                                                            eC && !eD && (0, s.jsx)(M.Z, { markAsDismissed: eb }),
                                                            eR &&
                                                                !eD &&
                                                                (0, s.jsx)(L.Z, {
                                                                    isCoachmark: ey,
                                                                    markAsDismissed: eb
                                                                }),
                                                            (eC || eR) &&
                                                                eD &&
                                                                (0, s.jsx)(q.Z, {
                                                                    initialTab: eR ? q._.APP_ICONS : q._.CLIENT_THEMES,
                                                                    markAsDismissed: eb
                                                                }),
                                                            (0, s.jsx)(Z.Z, { mobile: l })
                                                        ]
                                                    }),
                                                    !1
                                                ]
                                            })
                                        }),
                                        (0, s.jsx)(c.OU, {})
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
}
n.Z = ep;
