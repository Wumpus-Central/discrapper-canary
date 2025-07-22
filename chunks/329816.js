n.d(t, { Z: () => $ });
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(670481),
    l = n(873546),
    c = n(442837),
    u = n(335854),
    d = n(481060),
    f = n(721037),
    _ = n(490173),
    p = n(114250),
    h = n(735246),
    m = n(315263),
    g = n(40851),
    E = n(607070),
    b = n(899663),
    y = n(793903),
    O = n(213609),
    v = n(613413),
    I = n(559407),
    T = n(556766),
    S = n(195302),
    A = n(260035),
    N = n(482215),
    C = n(366841),
    R = n(947519),
    P = n(859678),
    w = n(314910),
    D = n(84615),
    L = n(429142),
    x = n(813744),
    M = n(746106),
    k = n(526665),
    j = n(314897),
    U = n(819640),
    G = n(358085),
    B = n(663993),
    V = n(766127),
    F = n(823453),
    Z = n(744048),
    H = n(628123),
    Y = n(436774),
    W = n(686546),
    K = n(950796),
    z = n(981631),
    q = n(325162);
(n(167666),
    Promise.resolve()
        .then(n.bind(n, 62883))
        .then((e) => {
            G.isPlatformEmbedded ? window.addEventListener('contextmenu', e.contextMenuCallbackNative, !1) : window.addEventListener('contextmenu', e.contextMenuCallbackWeb, !1);
        }),
    (0, u.E)({ getDefaultLinkInterceptor: m.default }),
    (0, B.Un)({
        createPromise: () => Promise.all([n.e('50448'), n.e('80451'), n.e('30634'), n.e('33551')]).then(n.bind(n, 849493)),
        webpackId: 849493
    }),
    (0, B.Un)({
        createPromise: () => Promise.all([n.e('50448'), n.e('80451'), n.e('30634'), n.e('58493')]).then(n.bind(n, 80753)),
        webpackId: 80753
    }));
let X = (0, B.Un)({
        createPromise: () => n.e('67110').then(n.bind(n, 177741)),
        webpackId: 177741
    }),
    Q = (0, B.Un)({
        createPromise: () => n.e('13474').then(n.bind(n, 420541)),
        webpackId: 420541
    }),
    J = i.memo(function () {
        let e = (0, c.e7)([U.Z], () => U.Z.hasLayers()),
            t = (0, k.wy)('AppSkeleton'),
            n = (0, c.e7)([U.Z], () => U.Z.getLayers().includes(z.S9g.USER_SETTINGS)),
            i = (0, d.s9z)(d.$sL);
        if (!n || !t)
            return (0, r.jsx)(K.Dg, {
                fixed: !0,
                show: e || i || !j.default.isAuthenticated()
            });
    }),
    $ = function (e) {
        let { children: t, skipsSettingDefaultPageTitle: n } = e,
            a = (0, G.getPlatform)(),
            u = l.tq || l.Em,
            m = (0, c.e7)([E.Z], () => (E.Z.useForcedColors ? 'yes' : 'no')),
            k = i.useRef(document.body),
            j = ''.concat(m);
        return (
            (0, C.G)(),
            (0, P.G)('AppSkeleton'),
            (0, r.jsx)(
                M.w,
                {
                    children: (0, r.jsxs)(b.Z, {
                        children: [
                            (0, r.jsx)(F.Z, { skipsSettingDefaultPageTitle: n }),
                            (0, r.jsx)(h.T, {
                                children: (0, r.jsx)(H.Z, {
                                    children: (0, r.jsxs)(d.JcV, {
                                        containerRef: k,
                                        children: [
                                            (0, r.jsx)(W.Co, {}),
                                            (0, r.jsx)(Y.ZP, {}),
                                            (0, r.jsx)(s.OU, {}),
                                            (0, r.jsx)(g.Wu, {
                                                appContext: z.IlC.APP,
                                                renderWindow: window,
                                                children: (0, r.jsxs)(w.yP, {
                                                    children: [
                                                        null != a ? (0, r.jsx)(J, {}) : null,
                                                        (0, r.jsxs)('div', {
                                                            className: o()(q.appAsidePanelWrapper, u && q.mobileAppAsidePanelWrapper),
                                                            children: [
                                                                (0, r.jsx)(N.K, {}),
                                                                (0, r.jsx)('div', {
                                                                    className: q.notAppAsidePanel,
                                                                    'data-app-not-dev-tools': !0,
                                                                    children: (0, r.jsx)(A.m, {
                                                                        children: (0, r.jsx)(L.OR, {
                                                                            children: (0, r.jsx)(y.Z.Provider, {
                                                                                value: O.Z,
                                                                                children: (0, r.jsxs)(S.p, {
                                                                                    children: [
                                                                                        (0, r.jsx)('div', {
                                                                                            className: o()(u ? q.mobileApp : q.app),
                                                                                            children: t
                                                                                        }),
                                                                                        (0, r.jsx)(f.Z, {}),
                                                                                        (0, r.jsx)(I.Z, {}),
                                                                                        (0, r.jsx)(_.Z, {}),
                                                                                        (0, r.jsx)(d.nKe, {}),
                                                                                        (0, r.jsx)(p.Z, {}),
                                                                                        (0, r.jsx)(D.Ox, {}),
                                                                                        (0, r.jsx)(w.Un, {}),
                                                                                        (0, r.jsx)(L.ot, {}),
                                                                                        (0, r.jsx)(d.Ixi, {}),
                                                                                        (0, r.jsx)(v.Z, {}),
                                                                                        (0, r.jsx)(x.Z, {}),
                                                                                        (0, r.jsx)(X, {}),
                                                                                        (0, r.jsx)(Q, {})
                                                                                    ]
                                                                                })
                                                                            })
                                                                        })
                                                                    })
                                                                }),
                                                                (0, r.jsx)(T.Z, {}),
                                                                (0, r.jsx)(Z.Z, {}),
                                                                (0, r.jsx)(V.Z, {}),
                                                                (0, r.jsx)(R.Z, { mobile: u })
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
                j
            )
        );
    };
