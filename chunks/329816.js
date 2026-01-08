n.d(t, { Z: () => ei });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(873546),
    l = n(966044),
    c = n(793030),
    u = n(442837),
    d = n(433517),
    f = n(335854),
    p = n(481060),
    _ = n(721037),
    m = n(490173),
    h = n(735246),
    g = n(315263),
    E = n(607070),
    b = n(899663),
    y = n(793903),
    O = n(213609),
    v = n(613413),
    S = n(559407),
    I = n(556766),
    T = n(195302),
    C = n(260035),
    A = n(482215),
    N = n(366841),
    P = n(947519),
    R = n(248687),
    w = n(183641),
    D = n(690833),
    x = n(859678),
    L = n(314910),
    j = n(84615),
    M = n(429142),
    k = n(728285),
    U = n(813744),
    G = n(773275),
    Z = n(254621),
    F = n(746106),
    B = n(526665),
    V = n(995406),
    H = n(314897),
    Y = n(819640),
    W = n(358085),
    K = n(663993),
    z = n(823453),
    q = n(744048),
    Q = n(436774),
    X = n(686546),
    J = n(950796),
    $ = n(981631),
    ee = n(111053);
n(29973),
    Promise.resolve()
        .then(n.bind(n, 62883))
        .then((e) => {
            W.isPlatformEmbedded
                ? window.addEventListener("contextmenu", e.contextMenuCallbackNative, !1)
                : window.addEventListener("contextmenu", e.contextMenuCallbackWeb, !1);
        }),
    (0, f.E)({ getDefaultLinkInterceptor: g.default }),
    (0, K.Un)({
        createPromise: () =>
            Promise.all([n.e("50448"), n.e("82821"), n.e("30634"), n.e("33551")]).then(n.bind(n, 849493)),
        webpackId: 849493,
    }),
    (0, K.Un)({
        createPromise: () =>
            Promise.all([n.e("50448"), n.e("82821"), n.e("30634"), n.e("58493")]).then(n.bind(n, 80753)),
        webpackId: 80753,
    });
let et = (0, K.Un)({
        createPromise: () => n.e("67110").then(n.bind(n, 177741)),
        webpackId: 177741,
    }),
    en = (0, K.Un)({
        createPromise: () => n.e("13474").then(n.bind(n, 420541)),
        webpackId: 420541,
    }),
    er = i.memo(function () {
        let e = (0, u.e7)([Y.Z], () => Y.Z.hasLayers()),
            t = (0, B.wy)("AppSkeleton"),
            n = (0, u.e7)([Y.Z], () => Y.Z.getLayers().includes($.S9g.USER_SETTINGS)),
            i = (0, p.s9z)(p.$sL),
            a = (0, u.e7)([H.default], () => H.default.isAuthenticated());
        if (!n || !t)
            return (0, r.jsx)(J.Dg, {
                fixed: !0,
                show: e || i || !a,
            });
    }),
    ei = function (e) {
        let { children: t, skipsSettingDefaultPageTitle: n } = e,
            a = (0, W.getPlatform)(),
            f = s.tq || s.Em,
            g = (0, u.e7)([E.Z], () => (E.Z.useForcedColors ? "yes" : "no")),
            B = i.useRef(document.body),
            H = "".concat(g);
        (0, N.G)(), (0, x.G)("AppSkeleton");
        let Y = (0, D.Co)("AppSkeleton"),
            K = w.KA.useConfig({ location: "AppSkeleton" }).enableFastConnectEarlyIdentify;
        return (
            i.useEffect(() => {
                W.isPlatformEmbedded && (Y ? d.K.set(D.j4, "json") : d.K.remove(D.j4));
            }, [Y]),
            i.useEffect(() => {
                K ? d.K.set(w.bq, !0) : d.K.remove(w.bq);
            }, [K]),
            (0, r.jsx)(
                F.w,
                {
                    children: (0, r.jsxs)(b.Z, {
                        children: [
                            (0, r.jsx)(z.Z, { skipsSettingDefaultPageTitle: n }),
                            (0, r.jsx)(h.T, {
                                children: (0, r.jsx)(R.Z, {
                                    children: (0, r.jsxs)(p.JcV, {
                                        containerRef: B,
                                        children: [
                                            (0, r.jsx)(X.Co, {}),
                                            (0, r.jsx)(Q.ZP, {}),
                                            (0, r.jsx)(c.OUJ, {}),
                                            (0, r.jsx)(k.Wu, {
                                                appContext: $.IlC.APP,
                                                renderWindow: window,
                                                children: (0, r.jsxs)(L.yP, {
                                                    children: [
                                                        null != a ? (0, r.jsx)(er, {}) : null,
                                                        (0, r.jsxs)("div", {
                                                            className: o()(
                                                                ee.appAsidePanelWrapper,
                                                                f && ee.mobileAppAsidePanelWrapper,
                                                            ),
                                                            children: [
                                                                (0, r.jsx)(A.K, {}),
                                                                (0, r.jsx)("div", {
                                                                    className: ee.notAppAsidePanel,
                                                                    "data-app-not-dev-tools": !0,
                                                                    children: (0, r.jsx)(C.m, {
                                                                        children: (0, r.jsx)(M.OR, {
                                                                            children: (0, r.jsx)(y.Z.Provider, {
                                                                                value: O.Z,
                                                                                children: (0, r.jsx)(T.p, {
                                                                                    children: (0, r.jsxs)(G.ov, {
                                                                                        children: [
                                                                                            (0, r.jsx)("div", {
                                                                                                className: o()(
                                                                                                    f
                                                                                                        ? ee.mobileApp
                                                                                                        : ee.app,
                                                                                                ),
                                                                                                children: t,
                                                                                            }),
                                                                                            (0, r.jsx)(_.Z, {}),
                                                                                            (0, r.jsx)(S.Z, {}),
                                                                                            (0, r.jsx)(m.Z, {}),
                                                                                            (0, r.jsx)(p.nKe, {}),
                                                                                            (0, r.jsx)(V.Z, {}),
                                                                                            (0, r.jsx)(j.Ox, {}),
                                                                                            (0, r.jsx)(l.uZ, {}),
                                                                                            (0, r.jsx)(L.Un, {}),
                                                                                            (0, r.jsx)(M.ot, {}),
                                                                                            (0, r.jsx)(p.Ixi, {
                                                                                                appContext: $.IlC.APP,
                                                                                            }),
                                                                                            (0, r.jsx)(v.Z, {}),
                                                                                            (0, r.jsx)(U.Z, {}),
                                                                                            (0, r.jsx)(et, {}),
                                                                                            (0, r.jsx)(en, {}),
                                                                                            (0, r.jsx)(Z.Z, {}),
                                                                                        ],
                                                                                    }),
                                                                                }),
                                                                            }),
                                                                        }),
                                                                    }),
                                                                }),
                                                                (0, r.jsx)(I.Z, {}),
                                                                (0, r.jsx)(q.Z, { mobile: f }),
                                                                (0, r.jsx)(P.Z, { mobile: f }),
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
                H,
            )
        );
    };
