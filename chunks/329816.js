n.d(t, { Z: () => er });
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
    h = n(490173),
    m = n(735246),
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
    w = n(248687),
    R = n(183641),
    D = n(690833),
    x = n(638214),
    L = n(859678),
    j = n(314910),
    M = n(84615),
    k = n(429142),
    U = n(728285),
    G = n(813744),
    Z = n(773275),
    F = n(254621),
    B = n(746106),
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
    en = i.memo(function () {
        let e = (0, u.e7)([Y.Z], () => Y.Z.hasLayers()),
            t = (0, p.s9z)(p.$sL),
            n = (0, u.e7)([H.default], () => H.default.isAuthenticated());
        return (0, r.jsx)(J.Dg, {
            fixed: !0,
            show: e || t || !n,
        });
    }),
    er = function (e) {
        let { children: t, skipsSettingDefaultPageTitle: n } = e,
            a = (0, W.getPlatform)(),
            f = s.tq || s.Em,
            g = (0, u.e7)([E.Z], () => (E.Z.useForcedColors ? "yes" : "no")),
            H = i.useRef(document.body),
            Y = "".concat(g);
        (0, N.G)(), (0, L.G)("AppSkeleton");
        let K = (0, D.Co)("AppSkeleton"),
            J = R.KA.useConfig({ location: "AppSkeleton" }).enableFastConnectEarlyIdentify,
            er = (0, x.k8)("AppSkeleton");
        return (
            i.useEffect(() => {
                W.isPlatformEmbedded && (K ? d.K.set(D.j4, "json") : d.K.remove(D.j4));
            }, [K]),
            i.useEffect(() => {
                J ? d.K.set(R.bq, !0) : d.K.remove(R.bq);
            }, [J]),
            i.useEffect(() => {
                er ? d.K.set(x.kQ, !0) : d.K.remove(x.kQ);
            }, [er]),
            (0, r.jsx)(
                B.w,
                {
                    children: (0, r.jsxs)(b.Z, {
                        children: [
                            (0, r.jsx)(z.Z, { skipsSettingDefaultPageTitle: n }),
                            (0, r.jsx)(m.T, {
                                children: (0, r.jsx)(w.Z, {
                                    children: (0, r.jsxs)(p.JcV, {
                                        containerRef: H,
                                        children: [
                                            (0, r.jsx)(X.Co, {}),
                                            (0, r.jsx)(Q.ZP, {}),
                                            (0, r.jsx)(c.OUJ, {}),
                                            (0, r.jsx)(U.Wu, {
                                                appContext: $.IlC.APP,
                                                renderWindow: window,
                                                children: (0, r.jsxs)(j.yP, {
                                                    children: [
                                                        null != a ? (0, r.jsx)(en, {}) : null,
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
                                                                        children: (0, r.jsx)(k.OR, {
                                                                            children: (0, r.jsx)(y.Z.Provider, {
                                                                                value: O.Z,
                                                                                children: (0, r.jsx)(T.p, {
                                                                                    children: (0, r.jsxs)(Z.ov, {
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
                                                                                            (0, r.jsx)(h.Z, {}),
                                                                                            (0, r.jsx)(p.nKe, {}),
                                                                                            (0, r.jsx)(V.Z, {}),
                                                                                            (0, r.jsx)(M.Ox, {}),
                                                                                            (0, r.jsx)(l.uZ, {}),
                                                                                            (0, r.jsx)(j.Un, {}),
                                                                                            (0, r.jsx)(k.ot, {}),
                                                                                            (0, r.jsx)(p.Ixi, {
                                                                                                appContext: $.IlC.APP,
                                                                                            }),
                                                                                            (0, r.jsx)(v.Z, {}),
                                                                                            (0, r.jsx)(G.Z, {}),
                                                                                            (0, r.jsx)(et, {}),
                                                                                            (0, r.jsx)(F.Z, {}),
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
                Y,
            )
        );
    };
