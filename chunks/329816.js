n.d(t, { Z: () => $ });
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
    _ = n(721037),
    p = n(490173),
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
    R = n(248687),
    P = n(859678),
    D = n(314910),
    w = n(84615),
    x = n(429142),
    L = n(728285),
    M = n(813744),
    k = n(746106),
    j = n(526665),
    U = n(811513),
    G = n(314897),
    B = n(819640),
    Z = n(358085),
    F = n(663993),
    V = n(823453),
    H = n(744048),
    Y = n(436774),
    W = n(686546),
    K = n(950796),
    z = n(981631),
    q = n(302821);
n(29973),
    Promise.resolve()
        .then(n.bind(n, 62883))
        .then((e) => {
            Z.isPlatformEmbedded
                ? window.addEventListener("contextmenu", e.contextMenuCallbackNative, !1)
                : window.addEventListener("contextmenu", e.contextMenuCallbackWeb, !1);
        }),
    (0, d.E)({ getDefaultLinkInterceptor: m.default }),
    (0, F.Un)({
        createPromise: () =>
            Promise.all([n.e("50448"), n.e("82821"), n.e("30634"), n.e("33551")]).then(n.bind(n, 849493)),
        webpackId: 849493,
    }),
    (0, F.Un)({
        createPromise: () =>
            Promise.all([n.e("50448"), n.e("82821"), n.e("30634"), n.e("58493")]).then(n.bind(n, 80753)),
        webpackId: 80753,
    });
let X = (0, F.Un)({
        createPromise: () => n.e("67110").then(n.bind(n, 177741)),
        webpackId: 177741,
    }),
    Q = (0, F.Un)({
        createPromise: () => n.e("13474").then(n.bind(n, 420541)),
        webpackId: 420541,
    }),
    J = i.memo(function () {
        let e = (0, u.e7)([B.Z], () => B.Z.hasLayers()),
            t = (0, j.wy)("AppSkeleton"),
            n = (0, u.e7)([B.Z], () => B.Z.getLayers().includes(z.S9g.USER_SETTINGS)),
            i = (0, f.s9z)(f.$sL),
            a = (0, u.e7)([G.default], () => G.default.isAuthenticated());
        if (!n || !t)
            return (0, r.jsx)(K.Dg, {
                fixed: !0,
                show: e || i || !a,
            });
    }),
    $ = function (e) {
        let { children: t, skipsSettingDefaultPageTitle: n } = e,
            a = (0, Z.getPlatform)(),
            d = s.tq || s.Em,
            m = (0, u.e7)([g.Z], () => (g.Z.useForcedColors ? "yes" : "no")),
            j = i.useRef(document.body),
            G = "".concat(m);
        return (
            (0, C.G)(),
            (0, P.G)("AppSkeleton"),
            (0, r.jsx)(
                k.w,
                {
                    children: (0, r.jsxs)(E.Z, {
                        children: [
                            (0, r.jsx)(V.Z, { skipsSettingDefaultPageTitle: n }),
                            (0, r.jsx)(h.T, {
                                children: (0, r.jsx)(R.Z, {
                                    children: (0, r.jsxs)(f.JcV, {
                                        containerRef: j,
                                        children: [
                                            (0, r.jsx)(W.Co, {}),
                                            (0, r.jsx)(Y.ZP, {}),
                                            (0, r.jsx)(c.OUJ, {}),
                                            (0, r.jsx)(L.Wu, {
                                                appContext: z.IlC.APP,
                                                renderWindow: window,
                                                children: (0, r.jsxs)(D.yP, {
                                                    children: [
                                                        null != a ? (0, r.jsx)(J, {}) : null,
                                                        (0, r.jsxs)("div", {
                                                            className: o()(
                                                                q.appAsidePanelWrapper,
                                                                d && q.mobileAppAsidePanelWrapper,
                                                            ),
                                                            children: [
                                                                (0, r.jsx)(A.K, {}),
                                                                (0, r.jsx)("div", {
                                                                    className: q.notAppAsidePanel,
                                                                    "data-app-not-dev-tools": !0,
                                                                    children: (0, r.jsx)(S.m, {
                                                                        children: (0, r.jsx)(x.OR, {
                                                                            children: (0, r.jsx)(b.Z.Provider, {
                                                                                value: y.Z,
                                                                                children: (0, r.jsxs)(T.p, {
                                                                                    children: [
                                                                                        (0, r.jsx)("div", {
                                                                                            className: o()(
                                                                                                d ? q.mobileApp : q.app,
                                                                                            ),
                                                                                            children: t,
                                                                                        }),
                                                                                        (0, r.jsx)(_.Z, {}),
                                                                                        (0, r.jsx)(v.Z, {}),
                                                                                        (0, r.jsx)(p.Z, {}),
                                                                                        (0, r.jsx)(f.nKe, {}),
                                                                                        (0, r.jsx)(U.Z, {}),
                                                                                        (0, r.jsx)(w.Ox, {}),
                                                                                        (0, r.jsx)(l.uZ, {}),
                                                                                        (0, r.jsx)(D.Un, {}),
                                                                                        (0, r.jsx)(x.ot, {}),
                                                                                        (0, r.jsx)(f.Ixi, {
                                                                                            appContext: z.IlC.APP,
                                                                                        }),
                                                                                        (0, r.jsx)(O.Z, {}),
                                                                                        (0, r.jsx)(M.Z, {}),
                                                                                        (0, r.jsx)(X, {}),
                                                                                        (0, r.jsx)(Q, {}),
                                                                                    ],
                                                                                }),
                                                                            }),
                                                                        }),
                                                                    }),
                                                                }),
                                                                (0, r.jsx)(I.Z, {}),
                                                                (0, r.jsx)(H.Z, { mobile: d }),
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
                G,
            )
        );
    };
