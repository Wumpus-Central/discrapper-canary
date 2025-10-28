n.d(t, { Z: () => J });
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(873546),
    l = n(793030),
    c = n(442837),
    u = n(335854),
    d = n(481060),
    f = n(721037),
    _ = n(490173),
    p = n(114250),
    h = n(735246),
    m = n(315263),
    g = n(607070),
    E = n(899663),
    b = n(793903),
    y = n(213609),
    O = n(613413),
    v = n(559407),
    I = n(556766),
    T = n(195302),
    S = n(260035),
    A = n(482215),
    C = n(366841),
    N = n(947519),
    R = n(859678),
    P = n(314910),
    w = n(84615),
    D = n(429142),
    L = n(728285),
    x = n(813744),
    M = n(746106),
    k = n(526665),
    j = n(314897),
    U = n(819640),
    G = n(358085),
    B = n(663993),
    Z = n(823453),
    F = n(744048),
    V = n(628123),
    H = n(436774),
    Y = n(686546),
    W = n(950796),
    K = n(981631),
    z = n(302821);
n(29973),
    Promise.resolve()
        .then(n.bind(n, 62883))
        .then((e) => {
            G.isPlatformEmbedded
                ? window.addEventListener("contextmenu", e.contextMenuCallbackNative, !1)
                : window.addEventListener("contextmenu", e.contextMenuCallbackWeb, !1);
        }),
    (0, u.E)({ getDefaultLinkInterceptor: m.default }),
    (0, B.Un)({
        createPromise: () =>
            Promise.all([n.e("50448"), n.e("82821"), n.e("30634"), n.e("33551")]).then(n.bind(n, 849493)),
        webpackId: 849493,
    }),
    (0, B.Un)({
        createPromise: () =>
            Promise.all([n.e("50448"), n.e("82821"), n.e("30634"), n.e("58493")]).then(n.bind(n, 80753)),
        webpackId: 80753,
    });
let q = (0, B.Un)({
        createPromise: () => n.e("67110").then(n.bind(n, 177741)),
        webpackId: 177741,
    }),
    X = (0, B.Un)({
        createPromise: () => n.e("13474").then(n.bind(n, 420541)),
        webpackId: 420541,
    }),
    Q = i.memo(function () {
        let e = (0, c.e7)([U.Z], () => U.Z.hasLayers()),
            t = (0, k.wy)("AppSkeleton"),
            n = (0, c.e7)([U.Z], () => U.Z.getLayers().includes(K.S9g.USER_SETTINGS)),
            i = (0, d.s9z)(d.$sL),
            a = (0, c.e7)([j.default], () => j.default.isAuthenticated());
        if (!n || !t)
            return (0, r.jsx)(W.Dg, {
                fixed: !0,
                show: e || i || !a,
            });
    }),
    J = function (e) {
        let { children: t, skipsSettingDefaultPageTitle: n } = e,
            a = (0, G.getPlatform)(),
            u = s.tq || s.Em,
            m = (0, c.e7)([g.Z], () => (g.Z.useForcedColors ? "yes" : "no")),
            k = i.useRef(document.body),
            j = "".concat(m);
        return (
            (0, C.G)(),
            (0, R.G)("AppSkeleton"),
            (0, r.jsx)(
                M.w,
                {
                    children: (0, r.jsxs)(E.Z, {
                        children: [
                            (0, r.jsx)(Z.Z, { skipsSettingDefaultPageTitle: n }),
                            (0, r.jsx)(h.T, {
                                children: (0, r.jsx)(V.Z, {
                                    children: (0, r.jsxs)(d.JcV, {
                                        containerRef: k,
                                        children: [
                                            (0, r.jsx)(Y.Co, {}),
                                            (0, r.jsx)(H.ZP, {}),
                                            (0, r.jsx)(l.OUJ, {}),
                                            (0, r.jsx)(L.Wu, {
                                                appContext: K.IlC.APP,
                                                renderWindow: window,
                                                children: (0, r.jsxs)(P.yP, {
                                                    children: [
                                                        null != a ? (0, r.jsx)(Q, {}) : null,
                                                        (0, r.jsxs)("div", {
                                                            className: o()(
                                                                z.appAsidePanelWrapper,
                                                                u && z.mobileAppAsidePanelWrapper,
                                                            ),
                                                            children: [
                                                                (0, r.jsx)(A.K, {}),
                                                                (0, r.jsx)("div", {
                                                                    className: z.notAppAsidePanel,
                                                                    "data-app-not-dev-tools": !0,
                                                                    children: (0, r.jsx)(S.m, {
                                                                        children: (0, r.jsx)(D.OR, {
                                                                            children: (0, r.jsx)(b.Z.Provider, {
                                                                                value: y.Z,
                                                                                children: (0, r.jsxs)(T.p, {
                                                                                    children: [
                                                                                        (0, r.jsx)("div", {
                                                                                            className: o()(
                                                                                                u ? z.mobileApp : z.app,
                                                                                            ),
                                                                                            children: t,
                                                                                        }),
                                                                                        (0, r.jsx)(f.Z, {}),
                                                                                        (0, r.jsx)(v.Z, {}),
                                                                                        (0, r.jsx)(_.Z, {}),
                                                                                        (0, r.jsx)(d.nKe, {}),
                                                                                        (0, r.jsx)(p.Z, {}),
                                                                                        (0, r.jsx)(w.Ox, {}),
                                                                                        (0, r.jsx)(P.Un, {}),
                                                                                        (0, r.jsx)(D.ot, {}),
                                                                                        (0, r.jsx)(d.Ixi, {
                                                                                            appContext: K.IlC.APP,
                                                                                        }),
                                                                                        (0, r.jsx)(O.Z, {}),
                                                                                        (0, r.jsx)(x.Z, {}),
                                                                                        (0, r.jsx)(q, {}),
                                                                                        (0, r.jsx)(X, {}),
                                                                                    ],
                                                                                }),
                                                                            }),
                                                                        }),
                                                                    }),
                                                                }),
                                                                (0, r.jsx)(I.Z, {}),
                                                                (0, r.jsx)(F.Z, { mobile: u }),
                                                                (0, r.jsx)(N.Z, { mobile: u }),
                                                            ],
                                                        }),
                                                        !1,
                                                    ],
                                                }),
                                            }),
                                            (0, r.jsx)(l.OUJ, {}),
                                        ],
                                    }),
                                }),
                            }),
                        ],
                    }),
                },
                j,
            )
        );
    };
