n.d(t, { Z: () => ea });
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
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
    S = n(556766),
    T = n(195302),
    A = n(260035),
    N = n(482215),
    C = n(540059),
    P = n(366841),
    R = n(947519),
    w = n(859678),
    D = n(314910),
    L = n(84615),
    x = n(429142),
    k = n(813744),
    M = n(746106),
    j = n(210887),
    U = n(314897),
    G = n(819640),
    B = n(451478),
    F = n(358085),
    V = n(663993),
    Z = n(766127),
    H = n(823453),
    Y = n(744048),
    W = n(628123),
    K = n(436774),
    z = n(686546),
    q = n(950796),
    Q = n(151851),
    X = n(981631),
    J = n(325162);
function $(e, t, n) {
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
function ee(e) {
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
                $(e, t, n[t]);
            });
    }
    return e;
}
function et(e, t) {
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
function en(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : et(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
n(167666),
    Promise.resolve()
        .then(n.bind(n, 62883))
        .then((e) => {
            F.isPlatformEmbedded ? window.addEventListener('contextmenu', e.contextMenuCallbackNative, !1) : window.addEventListener('contextmenu', e.contextMenuCallbackWeb, !1);
        }),
    (0, u.E)({ getDefaultLinkInterceptor: m.default }),
    (0, V.Un)({
        createPromise: () => Promise.all([n.e('50448'), n.e('80451'), n.e('30634'), n.e('33551')]).then(n.bind(n, 849493)),
        webpackId: 849493
    }),
    (0, V.Un)({
        createPromise: () => Promise.all([n.e('50448'), n.e('80451'), n.e('30634'), n.e('58493')]).then(n.bind(n, 80753)),
        webpackId: 80753
    });
let er = (0, V.Un)({
        createPromise: () => n.e('67110').then(n.bind(n, 177741)),
        webpackId: 177741
    }),
    ei = (0, V.Un)({
        createPromise: () => n.e('13474').then(n.bind(n, 420541)),
        webpackId: 420541
    }),
    eo = i.memo(function (e) {
        let t = (0, c.e7)([B.Z], () => B.Z.isFocused()),
            n = (0, c.e7)([G.Z], () => G.Z.hasLayers()),
            i = (0, d.s9z)(d.$sL);
        return (0, C.Q3)('ConnectedTitleBar')
            ? (0, r.jsx)(q.D, {
                  fixed: !0,
                  show: n || i || !U.default.isAuthenticated()
              })
            : (0, r.jsx)(Q.Z, en(ee({}, e), { focused: t }));
    }),
    ea = function (e) {
        let { children: t, skipsSettingDefaultPageTitle: n } = e,
            o = (0, F.getPlatform)(),
            u = l.tq || l.Em,
            m = (0, c.e7)([j.Z], () => (j.Z.darkSidebar ? X.BRd.DARK : void 0)),
            U = (0, C.Q3)('AppSkeleton'),
            G = (0, c.e7)([E.Z], () => (E.Z.useForcedColors ? 'yes' : 'no')),
            B = i.useRef(document.body),
            V = ''.concat(U ? 'enabled' : 'disabled').concat(G);
        return (
            (0, P.G)(),
            (0, w.G)('AppSkeleton'),
            (0, r.jsx)(
                M.w,
                {
                    children: (0, r.jsxs)(b.Z, {
                        children: [
                            (0, r.jsx)(H.Z, { skipsSettingDefaultPageTitle: n }),
                            (0, r.jsx)(h.T, {
                                children: (0, r.jsx)(W.Z, {
                                    children: (0, r.jsxs)(d.JcV, {
                                        containerRef: B,
                                        children: [
                                            (0, r.jsx)(z.Co, {}),
                                            (0, r.jsx)(K.ZP, {}),
                                            (0, r.jsx)(s.OU, {}),
                                            (0, r.jsx)(g.Wu, {
                                                appContext: X.IlC.APP,
                                                renderWindow: window,
                                                children: (0, r.jsxs)(D.yP, {
                                                    children: [
                                                        null != o
                                                            ? (0, r.jsx)(eo, {
                                                                  type: o,
                                                                  themeOverride: m
                                                              })
                                                            : null,
                                                        (0, r.jsxs)('div', {
                                                            className: a()(J.appAsidePanelWrapper, u && J.mobileAppAsidePanelWrapper),
                                                            children: [
                                                                (0, r.jsx)(N.K, {}),
                                                                (0, r.jsx)('div', {
                                                                    className: J.notAppAsidePanel,
                                                                    'data-app-not-dev-tools': !0,
                                                                    children: (0, r.jsx)(A.m, {
                                                                        children: (0, r.jsx)(x.OR, {
                                                                            children: (0, r.jsx)(y.Z.Provider, {
                                                                                value: O.Z,
                                                                                children: (0, r.jsxs)(T.p, {
                                                                                    children: [
                                                                                        (0, r.jsx)('div', {
                                                                                            className: a()(u ? J.mobileApp : J.app),
                                                                                            children: t
                                                                                        }),
                                                                                        (0, r.jsx)(I.Z, {}),
                                                                                        (0, r.jsx)(_.Z, {}),
                                                                                        (0, r.jsx)(d.nKe, {}),
                                                                                        (0, r.jsx)(p.Z, {}),
                                                                                        (0, r.jsx)(L.Ox, {}),
                                                                                        (0, r.jsx)(D.Un, {}),
                                                                                        (0, r.jsx)(x.ot, {}),
                                                                                        (0, r.jsx)(d.Ixi, {}),
                                                                                        (0, r.jsx)(v.Z, {}),
                                                                                        (0, r.jsx)(k.Z, {}),
                                                                                        (0, r.jsx)(er, {}),
                                                                                        (0, r.jsx)(ei, {})
                                                                                    ]
                                                                                })
                                                                            })
                                                                        })
                                                                    })
                                                                }),
                                                                (0, r.jsx)(S.Z, {}),
                                                                (0, r.jsx)(f.Z, {}),
                                                                (0, r.jsx)(Y.Z, {}),
                                                                (0, r.jsx)(Z.Z, {}),
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
                V
            )
        );
    };
