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
    L = n(429142),
    x = n(728285),
    M = n(813744),
    j = n(953865),
    k = n(254621),
    U = n(746106),
    G = n(526665),
    B = n(811513),
    Z = n(314897),
    F = n(819640),
    V = n(358085),
    H = n(663993),
    Y = n(823453),
    W = n(744048),
    K = n(436774),
    z = n(686546),
    q = n(950796),
    X = n(981631),
    Q = n(654924);
n(29973),
    Promise.resolve()
        .then(n.bind(n, 62883))
        .then((e) => {
            V.isPlatformEmbedded
                ? window.addEventListener("contextmenu", e.contextMenuCallbackNative, !1)
                : window.addEventListener("contextmenu", e.contextMenuCallbackWeb, !1);
        }),
    (0, d.E)({ getDefaultLinkInterceptor: m.default }),
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
            n = (0, u.e7)([F.Z], () => F.Z.getLayers().includes(X.S9g.USER_SETTINGS)),
            i = (0, f.s9z)(f.$sL),
            a = (0, u.e7)([Z.default], () => Z.default.isAuthenticated());
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
            m = (0, u.e7)([g.Z], () => (g.Z.useForcedColors ? "yes" : "no")),
            G = i.useRef(document.body),
            Z = "".concat(m);
        return (
            (0, C.G)(),
            (0, P.G)("AppSkeleton"),
            (0, r.jsx)(
                U.w,
                {
                    children: (0, r.jsxs)(E.Z, {
                        children: [
                            (0, r.jsx)(Y.Z, { skipsSettingDefaultPageTitle: n }),
                            (0, r.jsx)(h.T, {
                                children: (0, r.jsx)(R.Z, {
                                    children: (0, r.jsxs)(f.JcV, {
                                        containerRef: G,
                                        children: [
                                            (0, r.jsx)(z.Co, {}),
                                            (0, r.jsx)(K.ZP, {}),
                                            (0, r.jsx)(c.OUJ, {}),
                                            (0, r.jsx)(x.Wu, {
                                                appContext: X.IlC.APP,
                                                renderWindow: window,
                                                children: (0, r.jsxs)(D.yP, {
                                                    children: [
                                                        null != a ? (0, r.jsx)(ee, {}) : null,
                                                        (0, r.jsxs)("div", {
                                                            className: o()(
                                                                Q.appAsidePanelWrapper,
                                                                d && Q.mobileAppAsidePanelWrapper,
                                                            ),
                                                            children: [
                                                                (0, r.jsx)(A.K, {}),
                                                                (0, r.jsx)("div", {
                                                                    className: Q.notAppAsidePanel,
                                                                    "data-app-not-dev-tools": !0,
                                                                    children: (0, r.jsx)(S.m, {
                                                                        children: (0, r.jsx)(L.OR, {
                                                                            children: (0, r.jsx)(b.Z.Provider, {
                                                                                value: y.Z,
                                                                                children: (0, r.jsx)(T.p, {
                                                                                    children: (0, r.jsxs)(j.ov, {
                                                                                        children: [
                                                                                            (0, r.jsx)("div", {
                                                                                                className: o()(
                                                                                                    d
                                                                                                        ? Q.mobileApp
                                                                                                        : Q.app,
                                                                                                ),
                                                                                                children: t,
                                                                                            }),
                                                                                            (0, r.jsx)(_.Z, {}),
                                                                                            (0, r.jsx)(v.Z, {}),
                                                                                            (0, r.jsx)(p.Z, {}),
                                                                                            (0, r.jsx)(f.nKe, {}),
                                                                                            (0, r.jsx)(B.Z, {}),
                                                                                            (0, r.jsx)(w.Ox, {}),
                                                                                            (0, r.jsx)(l.uZ, {}),
                                                                                            (0, r.jsx)(D.Un, {}),
                                                                                            (0, r.jsx)(L.ot, {}),
                                                                                            (0, r.jsx)(f.Ixi, {
                                                                                                appContext: X.IlC.APP,
                                                                                            }),
                                                                                            (0, r.jsx)(O.Z, {}),
                                                                                            (0, r.jsx)(M.Z, {}),
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
                                                                (0, r.jsx)(I.Z, {}),
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
                Z,
            )
        );
    };
