n.d(t, { Z: () => et });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(873546),
    l = n(966044),
    c = n(793030),
    u = n(442837),
    d = n(335854),
    f = n(481060),
    p = n(721037),
    _ = n(490173),
    m = n(735246),
    h = n(315263),
    g = n(607070),
    E = n(899663),
    b = n(793903),
    y = n(213609),
    O = n(613413),
    v = n(559407),
    S = n(556766),
    I = n(195302),
    T = n(260035),
    A = n(482215),
    C = n(366841),
    N = n(947519),
    P = n(248687),
    R = n(859678),
    w = n(314910),
    D = n(84615),
    x = n(429142),
    L = n(728285),
    j = n(813744),
    M = n(773275),
    k = n(254621),
    U = n(746106),
    G = n(526665),
    Z = n(995406),
    B = n(314897),
    F = n(819640),
    V = n(358085),
    H = n(663993),
    Y = n(823453),
    W = n(744048),
    K = n(436774),
    z = n(686546),
    q = n(950796),
    Q = n(981631),
    X = n(302821);
n(29973),
    Promise.resolve()
        .then(n.bind(n, 62883))
        .then((e) => {
            V.isPlatformEmbedded
                ? window.addEventListener("contextmenu", e.contextMenuCallbackNative, !1)
                : window.addEventListener("contextmenu", e.contextMenuCallbackWeb, !1);
        }),
    (0, d.E)({ getDefaultLinkInterceptor: h.default }),
    (0, H.Un)({
        createPromise: () =>
            Promise.all([n.e("50448"), n.e("82821"), n.e("30634"), n.e("33551")]).then(n.bind(n, 849493)),
        webpackId: 849493,
    }),
    (0, H.Un)({
        createPromise: () =>
            Promise.all([n.e("50448"), n.e("82821"), n.e("30634"), n.e("58493")]).then(n.bind(n, 80753)),
        webpackId: 80753,
    });
let J = (0, H.Un)({
        createPromise: () => n.e("67110").then(n.bind(n, 177741)),
        webpackId: 177741,
    }),
    $ = (0, H.Un)({
        createPromise: () => n.e("13474").then(n.bind(n, 420541)),
        webpackId: 420541,
    }),
    ee = i.memo(function () {
        let e = (0, u.e7)([F.Z], () => F.Z.hasLayers()),
            t = (0, G.wy)("AppSkeleton"),
            n = (0, u.e7)([F.Z], () => F.Z.getLayers().includes(Q.S9g.USER_SETTINGS)),
            i = (0, f.s9z)(f.$sL),
            a = (0, u.e7)([B.default], () => B.default.isAuthenticated());
        if (!n || !t)
            return (0, r.jsx)(q.Dg, {
                fixed: !0,
                show: e || i || !a,
            });
    }),
    et = function (e) {
        let { children: t, skipsSettingDefaultPageTitle: n } = e,
            a = (0, V.getPlatform)(),
            d = s.tq || s.Em,
            h = (0, u.e7)([g.Z], () => (g.Z.useForcedColors ? "yes" : "no")),
            G = i.useRef(document.body),
            B = "".concat(h);
        return (
            (0, C.G)(),
            (0, R.G)("AppSkeleton"),
            (0, r.jsx)(
                U.w,
                {
                    children: (0, r.jsxs)(E.Z, {
                        children: [
                            (0, r.jsx)(Y.Z, { skipsSettingDefaultPageTitle: n }),
                            (0, r.jsx)(m.T, {
                                children: (0, r.jsx)(P.Z, {
                                    children: (0, r.jsxs)(f.JcV, {
                                        containerRef: G,
                                        children: [
                                            (0, r.jsx)(z.Co, {}),
                                            (0, r.jsx)(K.ZP, {}),
                                            (0, r.jsx)(c.OUJ, {}),
                                            (0, r.jsx)(L.Wu, {
                                                appContext: Q.IlC.APP,
                                                renderWindow: window,
                                                children: (0, r.jsxs)(w.yP, {
                                                    children: [
                                                        null != a ? (0, r.jsx)(ee, {}) : null,
                                                        (0, r.jsxs)("div", {
                                                            className: o()(
                                                                X.appAsidePanelWrapper,
                                                                d && X.mobileAppAsidePanelWrapper,
                                                            ),
                                                            children: [
                                                                (0, r.jsx)(A.K, {}),
                                                                (0, r.jsx)("div", {
                                                                    className: X.notAppAsidePanel,
                                                                    "data-app-not-dev-tools": !0,
                                                                    children: (0, r.jsx)(T.m, {
                                                                        children: (0, r.jsx)(x.OR, {
                                                                            children: (0, r.jsx)(b.Z.Provider, {
                                                                                value: y.Z,
                                                                                children: (0, r.jsx)(I.p, {
                                                                                    children: (0, r.jsxs)(M.ov, {
                                                                                        children: [
                                                                                            (0, r.jsx)("div", {
                                                                                                className: o()(
                                                                                                    d
                                                                                                        ? X.mobileApp
                                                                                                        : X.app,
                                                                                                ),
                                                                                                children: t,
                                                                                            }),
                                                                                            (0, r.jsx)(p.Z, {}),
                                                                                            (0, r.jsx)(v.Z, {}),
                                                                                            (0, r.jsx)(_.Z, {}),
                                                                                            (0, r.jsx)(f.nKe, {}),
                                                                                            (0, r.jsx)(Z.Z, {}),
                                                                                            (0, r.jsx)(D.Ox, {}),
                                                                                            (0, r.jsx)(l.uZ, {}),
                                                                                            (0, r.jsx)(w.Un, {}),
                                                                                            (0, r.jsx)(x.ot, {}),
                                                                                            (0, r.jsx)(f.Ixi, {
                                                                                                appContext: Q.IlC.APP,
                                                                                            }),
                                                                                            (0, r.jsx)(O.Z, {}),
                                                                                            (0, r.jsx)(j.Z, {}),
                                                                                            (0, r.jsx)(J, {}),
                                                                                            (0, r.jsx)($, {}),
                                                                                            (0, r.jsx)(k.Z, {}),
                                                                                        ],
                                                                                    }),
                                                                                }),
                                                                            }),
                                                                        }),
                                                                    }),
                                                                }),
                                                                (0, r.jsx)(S.Z, {}),
                                                                (0, r.jsx)(W.Z, { mobile: d }),
                                                                (0, r.jsx)(N.Z, { mobile: d }),
                                                            ],
                                                        }),
                                                        !1,
                                                    ],
                                                }),
                                            }),
                                            (0, r.jsx)(c.OUJ, {}),
                                        ],
                                    }),
                                }),
                            }),
                        ],
                    }),
                },
                B,
            )
        );
    };
