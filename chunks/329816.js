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
    p = n(735246),
    h = n(315263),
    m = n(607070),
    g = n(899663),
    E = n(793903),
    b = n(213609),
    y = n(613413),
    O = n(559407),
    v = n(556766),
    I = n(195302),
    T = n(260035),
    S = n(482215),
    A = n(366841),
    C = n(947519),
    N = n(248687),
    R = n(859678),
    P = n(314910),
    w = n(84615),
    D = n(429142),
    x = n(728285),
    L = n(813744),
    M = n(746106),
    j = n(526665),
    k = n(811513),
    U = n(314897),
    G = n(819640),
    B = n(358085),
    Z = n(663993),
    F = n(823453),
    V = n(744048),
    H = n(436774),
    Y = n(686546),
    W = n(950796),
    K = n(981631),
    z = n(302821);
n(29973),
    Promise.resolve()
        .then(n.bind(n, 62883))
        .then((e) => {
            B.isPlatformEmbedded
                ? window.addEventListener("contextmenu", e.contextMenuCallbackNative, !1)
                : window.addEventListener("contextmenu", e.contextMenuCallbackWeb, !1);
        }),
    (0, u.E)({ getDefaultLinkInterceptor: h.default }),
    (0, Z.Un)({
        createPromise: () =>
            Promise.all([n.e("50448"), n.e("82821"), n.e("30634"), n.e("33551")]).then(n.bind(n, 849493)),
        webpackId: 849493,
    }),
    (0, Z.Un)({
        createPromise: () =>
            Promise.all([n.e("50448"), n.e("82821"), n.e("30634"), n.e("58493")]).then(n.bind(n, 80753)),
        webpackId: 80753,
    });
let q = (0, Z.Un)({
        createPromise: () => n.e("67110").then(n.bind(n, 177741)),
        webpackId: 177741,
    }),
    X = (0, Z.Un)({
        createPromise: () => n.e("13474").then(n.bind(n, 420541)),
        webpackId: 420541,
    }),
    Q = i.memo(function () {
        let e = (0, c.e7)([G.Z], () => G.Z.hasLayers()),
            t = (0, j.wy)("AppSkeleton"),
            n = (0, c.e7)([G.Z], () => G.Z.getLayers().includes(K.S9g.USER_SETTINGS)),
            i = (0, d.s9z)(d.$sL),
            a = (0, c.e7)([U.default], () => U.default.isAuthenticated());
        if (!n || !t)
            return (0, r.jsx)(W.Dg, {
                fixed: !0,
                show: e || i || !a,
            });
    }),
    J = function (e) {
        let { children: t, skipsSettingDefaultPageTitle: n } = e,
            a = (0, B.getPlatform)(),
            u = s.tq || s.Em,
            h = (0, c.e7)([m.Z], () => (m.Z.useForcedColors ? "yes" : "no")),
            j = i.useRef(document.body),
            U = "".concat(h);
        return (
            (0, A.G)(),
            (0, R.G)("AppSkeleton"),
            (0, r.jsx)(
                M.w,
                {
                    children: (0, r.jsxs)(g.Z, {
                        children: [
                            (0, r.jsx)(F.Z, { skipsSettingDefaultPageTitle: n }),
                            (0, r.jsx)(p.T, {
                                children: (0, r.jsx)(N.Z, {
                                    children: (0, r.jsxs)(d.JcV, {
                                        containerRef: j,
                                        children: [
                                            (0, r.jsx)(Y.Co, {}),
                                            (0, r.jsx)(H.ZP, {}),
                                            (0, r.jsx)(l.OUJ, {}),
                                            (0, r.jsx)(x.Wu, {
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
                                                                (0, r.jsx)(S.K, {}),
                                                                (0, r.jsx)("div", {
                                                                    className: z.notAppAsidePanel,
                                                                    "data-app-not-dev-tools": !0,
                                                                    children: (0, r.jsx)(T.m, {
                                                                        children: (0, r.jsx)(D.OR, {
                                                                            children: (0, r.jsx)(E.Z.Provider, {
                                                                                value: b.Z,
                                                                                children: (0, r.jsxs)(I.p, {
                                                                                    children: [
                                                                                        (0, r.jsx)("div", {
                                                                                            className: o()(
                                                                                                u ? z.mobileApp : z.app,
                                                                                            ),
                                                                                            children: t,
                                                                                        }),
                                                                                        (0, r.jsx)(f.Z, {}),
                                                                                        (0, r.jsx)(O.Z, {}),
                                                                                        (0, r.jsx)(_.Z, {}),
                                                                                        (0, r.jsx)(d.nKe, {}),
                                                                                        (0, r.jsx)(k.Z, {}),
                                                                                        (0, r.jsx)(w.Ox, {}),
                                                                                        (0, r.jsx)(P.Un, {}),
                                                                                        (0, r.jsx)(D.ot, {}),
                                                                                        (0, r.jsx)(d.Ixi, {
                                                                                            appContext: K.IlC.APP,
                                                                                        }),
                                                                                        (0, r.jsx)(y.Z, {}),
                                                                                        (0, r.jsx)(L.Z, {}),
                                                                                        (0, r.jsx)(q, {}),
                                                                                        (0, r.jsx)(X, {}),
                                                                                    ],
                                                                                }),
                                                                            }),
                                                                        }),
                                                                    }),
                                                                }),
                                                                (0, r.jsx)(v.Z, {}),
                                                                (0, r.jsx)(V.Z, { mobile: u }),
                                                                (0, r.jsx)(C.Z, { mobile: u }),
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
                U,
            )
        );
    };
