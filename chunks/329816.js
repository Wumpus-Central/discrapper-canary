n.d(t, { Z: () => es });
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
    C = n(540059),
    R = n(366841),
    P = n(947519),
    w = n(859678),
    D = n(314910),
    L = n(84615),
    x = n(429142),
    M = n(813744),
    k = n(746106),
    j = n(210887),
    U = n(526665),
    G = n(314897),
    B = n(819640),
    F = n(451478),
    V = n(358085),
    Z = n(663993),
    H = n(766127),
    Y = n(823453),
    W = n(744048),
    K = n(628123),
    z = n(436774),
    q = n(686546),
    X = n(950796),
    Q = n(151851),
    J = n(981631),
    $ = n(325162);
function ee(e, t, n) {
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
function et(e) {
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
                ee(e, t, n[t]);
            });
    }
    return e;
}
function en(e, t) {
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
function er(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : en(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
n(167666),
    Promise.resolve()
        .then(n.bind(n, 62883))
        .then((e) => {
            V.isPlatformEmbedded ? window.addEventListener('contextmenu', e.contextMenuCallbackNative, !1) : window.addEventListener('contextmenu', e.contextMenuCallbackWeb, !1);
        }),
    (0, u.E)({ getDefaultLinkInterceptor: m.default }),
    (0, Z.Un)({
        createPromise: () => Promise.all([n.e('50448'), n.e('80451'), n.e('30634'), n.e('33551')]).then(n.bind(n, 849493)),
        webpackId: 849493
    }),
    (0, Z.Un)({
        createPromise: () => Promise.all([n.e('50448'), n.e('80451'), n.e('30634'), n.e('58493')]).then(n.bind(n, 80753)),
        webpackId: 80753
    });
let ei = (0, Z.Un)({
        createPromise: () => n.e('67110').then(n.bind(n, 177741)),
        webpackId: 177741
    }),
    ea = (0, Z.Un)({
        createPromise: () => n.e('13474').then(n.bind(n, 420541)),
        webpackId: 420541
    }),
    eo = i.memo(function (e) {
        let t = (0, c.e7)([F.Z], () => F.Z.isFocused()),
            n = (0, c.e7)([B.Z], () => B.Z.hasLayers()),
            i = (0, U.wy)('AppSkeleton'),
            a = (0, c.e7)([B.Z], () => B.Z.getLayers().includes(J.S9g.USER_SETTINGS)),
            o = (0, d.s9z)(d.$sL);
        if ((0, C.Q3)('ConnectedTitleBar')) {
            if (a && i) return;
            return (0, r.jsx)(X.D, {
                fixed: !0,
                show: n || o || !G.default.isAuthenticated()
            });
        }
        return (0, r.jsx)(Q.Z, er(et({}, e), { focused: t }));
    }),
    es = function (e) {
        let { children: t, skipsSettingDefaultPageTitle: n } = e,
            a = (0, V.getPlatform)(),
            u = l.tq || l.Em,
            m = (0, c.e7)([j.Z], () => (j.Z.darkSidebar ? J.BRd.DARK : void 0)),
            U = (0, C.Q3)('AppSkeleton'),
            G = (0, c.e7)([E.Z], () => (E.Z.useForcedColors ? 'yes' : 'no')),
            B = i.useRef(document.body),
            F = ''.concat(U ? 'enabled' : 'disabled').concat(G);
        return (
            (0, R.G)(),
            (0, w.G)('AppSkeleton'),
            (0, r.jsx)(
                k.w,
                {
                    children: (0, r.jsxs)(b.Z, {
                        children: [
                            (0, r.jsx)(Y.Z, { skipsSettingDefaultPageTitle: n }),
                            (0, r.jsx)(h.T, {
                                children: (0, r.jsx)(K.Z, {
                                    children: (0, r.jsxs)(d.JcV, {
                                        containerRef: B,
                                        children: [
                                            (0, r.jsx)(q.Co, {}),
                                            (0, r.jsx)(z.ZP, {}),
                                            (0, r.jsx)(s.OU, {}),
                                            (0, r.jsx)(g.Wu, {
                                                appContext: J.IlC.APP,
                                                renderWindow: window,
                                                children: (0, r.jsxs)(D.yP, {
                                                    children: [
                                                        null != a
                                                            ? (0, r.jsx)(eo, {
                                                                  type: a,
                                                                  themeOverride: m
                                                              })
                                                            : null,
                                                        (0, r.jsxs)('div', {
                                                            className: o()($.appAsidePanelWrapper, u && $.mobileAppAsidePanelWrapper),
                                                            children: [
                                                                (0, r.jsx)(N.K, {}),
                                                                (0, r.jsx)('div', {
                                                                    className: $.notAppAsidePanel,
                                                                    'data-app-not-dev-tools': !0,
                                                                    children: (0, r.jsx)(A.m, {
                                                                        children: (0, r.jsx)(x.OR, {
                                                                            children: (0, r.jsx)(y.Z.Provider, {
                                                                                value: O.Z,
                                                                                children: (0, r.jsxs)(S.p, {
                                                                                    children: [
                                                                                        (0, r.jsx)('div', {
                                                                                            className: o()(u ? $.mobileApp : $.app),
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
                                                                                        (0, r.jsx)(M.Z, {}),
                                                                                        (0, r.jsx)(ei, {}),
                                                                                        (0, r.jsx)(ea, {})
                                                                                    ]
                                                                                })
                                                                            })
                                                                        })
                                                                    })
                                                                }),
                                                                (0, r.jsx)(T.Z, {}),
                                                                (0, r.jsx)(f.Z, {}),
                                                                (0, r.jsx)(W.Z, {}),
                                                                (0, r.jsx)(H.Z, {}),
                                                                (0, r.jsx)(P.Z, { mobile: u })
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
                F
            )
        );
    };
