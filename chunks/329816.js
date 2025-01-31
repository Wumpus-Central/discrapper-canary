n.d(t, { Z: () => ef }), n(47120), n(653041);
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
    G = n(243778),
    B = n(314910),
    Z = n(84615),
    F = n(429142),
    V = n(813744),
    j = n(311476),
    H = n(892254),
    Y = n(210887),
    W = n(978781),
    K = n(314897),
    z = n(819640),
    q = n(594174),
    Q = n(451478),
    X = n(358085),
    J = n(74538),
    $ = n(663993),
    ee = n(823453),
    et = n(628123),
    en = n(436774),
    ei = n(686546),
    er = n(950796),
    ea = n(151851),
    es = n(981631),
    eo = n(921944),
    el = n(999429);
n(167666),
    Promise.resolve()
        .then(n.bind(n, 62883))
        .then((e) => {
            X.isPlatformEmbedded ? window.addEventListener('contextmenu', e.contextMenuCallbackNative, !1) : window.addEventListener('contextmenu', e.contextMenuCallbackWeb, !1);
        }),
    (0, f.E)({ getDefaultLinkInterceptor: v.default }),
    (0, $.Un)({
        createPromise: () => Promise.all([n.e('80451'), n.e('30634'), n.e('33551')]).then(n.bind(n, 849493)),
        webpackId: 849493
    }),
    (0, $.Un)({
        createPromise: () => Promise.all([n.e('80451'), n.e('30634'), n.e('58493')]).then(n.bind(n, 80753)),
        webpackId: 80753
    });
let eu = (0, $.Un)({
        createPromise: () => n.e('67110').then(n.bind(n, 177741)),
        webpackId: 177741
    }),
    ec = (0, $.Un)({
        createPromise: () => Promise.all([n.e('78447'), n.e('13474')]).then(n.bind(n, 420541)),
        webpackId: 420541
    }),
    ed = r.memo(function (e) {
        let t = (0, c.e7)([Q.Z], () => Q.Z.isFocused()),
            n = (0, c.e7)([z.Z], () => z.Z.hasLayers()),
            r = (0, _.s9z)(_.$sL);
        return (0, k.Q3)('ConnectedTitleBar')
            ? (0, i.jsx)(er.D, {
                  fixed: !0,
                  show: n || r || !K.default.isAuthenticated()
              })
            : (0, i.jsx)(ea.Z, {
                  ...e,
                  focused: t
              });
    }),
    ef = function (e) {
        let { children: t, skipsSettingDefaultPageTitle: n } = e,
            { pathname: a } = (0, l.TH)(),
            f = (0, X.getPlatform)(),
            v = u.tq || u.Em,
            K = (0, c.e7)([Y.Z], () => (Y.Z.darkSidebar ? es.BRd.DARK : void 0)),
            Q = (0, k.Q3)('ChannelSidebar'),
            $ = (0, c.e7)([I.Z], () => (I.Z.useForcedColors ? 'yes' : 'no')),
            [er, ea, ef] = (0, c.Wu)([x.Z], () => [x.Z.isEditorOpen, x.Z.isCoachmark, x.Z.isPreview]),
            [e_, ep] = (0, c.Wu)([C.Z], () => [C.Z.isEditorOpen, C.Z.isUpsellPreview]),
            eh = (0, c.e7)([z.Z], () => z.Z.getLayers().includes(es.S9g.USER_SETTINGS)),
            em = (0, c.e7)([q.default], () => J.ZP.canUseClientThemes(q.default.getCurrentUser())),
            eg = er && !eh,
            eE = e_ && !eh,
            ev = [];
        eg && ea && !em && ev.push(d.z.CLIENT_THEMES_COACHMARK);
        let [ey, eI] = (0, G.US)(ev, eo.R.SIDEBAR, !0);
        ev.push(d.z.DEKSTOP_CUSTOM_APP_ICON_COACHMARK);
        let eb = ey === d.z.DEKSTOP_CUSTOM_APP_ICON_COACHMARK,
            eT = ey === d.z.CLIENT_THEMES_COACHMARK;
        r.useEffect(() => {
            null ==
                (0, l.LX)(a, {
                    path: 'invite',
                    exact: !1,
                    strict: !1
                }) &&
                eb &&
                !eT &&
                ((0, N.nJ)(),
                p.Z.dispatch({
                    type: 'APP_ICON_TRACK_IMPRESSION',
                    markAsDismissed: eI
                }));
        }, [eb, eT, eI, a]);
        let eS = r.useRef(document.body),
            eA = (eg && !ea) || eT,
            eN = eE && !eT,
            eC = ef || ep,
            { enabled: eR } = j.Z.useExperiment(
                { location: 'AppSkeleton' },
                {
                    autoTrackExposure: eC && (eA || eN),
                    disable: !eC
                }
            ),
            eO = ''.concat(Q ? 'enabled' : 'disabled').concat($);
        return (0, i.jsx)(
            H.Z,
            {
                children: (0, i.jsx)(b.Z, {
                    children: (0, i.jsxs)(_.vWI, {
                        children: [
                            (0, i.jsx)(ee.Z, { skipsSettingDefaultPageTitle: n }),
                            (0, i.jsx)(E.T, {
                                children: (0, i.jsx)(et.Z, {
                                    children: (0, i.jsxs)(_.JcV, {
                                        containerRef: eS,
                                        children: [
                                            (0, i.jsx)(ei.Co, {}),
                                            (0, i.jsx)(en.ZP, {}),
                                            (0, i.jsx)(o.OU, {}),
                                            (0, i.jsx)(y.Wu, {
                                                appContext: es.IlC.APP,
                                                renderWindow: window,
                                                children: (0, i.jsxs)(B.yP, {
                                                    children: [
                                                        null != f
                                                            ? (0, i.jsx)(ed, {
                                                                  type: f,
                                                                  themeOverride: K
                                                              })
                                                            : null,
                                                        (0, i.jsxs)('div', {
                                                            className: s()(el.appAsidePanelWrapper, v && el.mobileAppAsidePanelWrapper),
                                                            children: [
                                                                (0, i.jsx)(M.K, {}),
                                                                (0, i.jsx)('div', {
                                                                    className: el.notAppAsidePanel,
                                                                    'data-app-not-dev-tools': !0,
                                                                    children: (0, i.jsx)(w.m, {
                                                                        children: (0, i.jsx)(F.OR, {
                                                                            children: (0, i.jsx)(T.Z.Provider, {
                                                                                value: S.Z,
                                                                                children: (0, i.jsxs)(P.p, {
                                                                                    children: [
                                                                                        (0, i.jsx)('div', {
                                                                                            className: s()(v ? el.mobileApp : el.app),
                                                                                            children: t
                                                                                        }),
                                                                                        (0, i.jsx)(O.Z, {}),
                                                                                        (0, i.jsx)(m.Z, {}),
                                                                                        (0, i.jsx)(_.nKe, {}),
                                                                                        (0, i.jsx)(g.Z, {}),
                                                                                        (0, i.jsx)(Z.Ox, {}),
                                                                                        (0, i.jsx)(B.Un, {}),
                                                                                        (0, i.jsx)(F.ot, {}),
                                                                                        (0, i.jsx)(_.Ixi, {}),
                                                                                        (0, i.jsx)(A.Z, {}),
                                                                                        (0, i.jsx)(V.Z, {}),
                                                                                        (0, i.jsx)(eu, {}),
                                                                                        (0, i.jsx)(ec, {})
                                                                                    ]
                                                                                })
                                                                            })
                                                                        })
                                                                    })
                                                                }),
                                                                (0, i.jsx)(D.Z, {}),
                                                                (0, i.jsx)(h.Z, {}),
                                                                eA && !eR && (0, i.jsx)(L.Z, { markAsDismissed: eI }),
                                                                eN &&
                                                                    !eR &&
                                                                    (0, i.jsx)(R.Z, {
                                                                        isCoachmark: eb,
                                                                        markAsDismissed: eI
                                                                    }),
                                                                (eA || eN) &&
                                                                    eR &&
                                                                    (0, i.jsx)(W.Z, {
                                                                        initialTab: eN ? W._.APP_ICONS : W._.CLIENT_THEMES,
                                                                        markAsDismissed: eI
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
            eO
        );
    };
