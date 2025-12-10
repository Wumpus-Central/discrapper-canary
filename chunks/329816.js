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
    D = n(690833),
    w = n(859678),
    x = n(314910),
    L = n(84615),
    j = n(429142),
    M = n(728285),
    k = n(813744),
    U = n(773275),
    G = n(254621),
    Z = n(746106),
    B = n(526665),
    F = n(995406),
    V = n(314897),
    H = n(819640),
    Y = n(358085),
    W = n(663993),
    K = n(823453),
    z = n(744048),
    q = n(436774),
    Q = n(686546),
    X = n(950796),
    J = n(981631),
    $ = n(302821);
n(29973),
    Promise.resolve()
        .then(n.bind(n, 62883))
        .then((e) => {
            Y.isPlatformEmbedded
                ? window.addEventListener("contextmenu", e.contextMenuCallbackNative, !1)
                : window.addEventListener("contextmenu", e.contextMenuCallbackWeb, !1);
        }),
    (0, f.E)({ getDefaultLinkInterceptor: g.default }),
    (0, W.Un)({
        createPromise: () =>
            Promise.all([n.e("50448"), n.e("82821"), n.e("30634"), n.e("33551")]).then(n.bind(n, 849493)),
        webpackId: 849493,
    }),
    (0, W.Un)({
        createPromise: () =>
            Promise.all([n.e("50448"), n.e("82821"), n.e("30634"), n.e("58493")]).then(n.bind(n, 80753)),
        webpackId: 80753,
    });
let ee = (0, W.Un)({
        createPromise: () => n.e("67110").then(n.bind(n, 177741)),
        webpackId: 177741,
    }),
    et = (0, W.Un)({
        createPromise: () => n.e("13474").then(n.bind(n, 420541)),
        webpackId: 420541,
    }),
    en = i.memo(function () {
        let e = (0, u.e7)([H.Z], () => H.Z.hasLayers()),
            t = (0, B.wy)("AppSkeleton"),
            n = (0, u.e7)([H.Z], () => H.Z.getLayers().includes(J.S9g.USER_SETTINGS)),
            i = (0, p.s9z)(p.$sL),
            a = (0, u.e7)([V.default], () => V.default.isAuthenticated());
        if (!n || !t)
            return (0, r.jsx)(X.Dg, {
                fixed: !0,
                show: e || i || !a,
            });
    }),
    er = function (e) {
        let { children: t, skipsSettingDefaultPageTitle: n } = e,
            a = (0, Y.getPlatform)(),
            f = s.tq || s.Em,
            g = (0, u.e7)([E.Z], () => (E.Z.useForcedColors ? "yes" : "no")),
            B = i.useRef(document.body),
            V = "".concat(g);
        (0, N.G)(), (0, w.G)("AppSkeleton");
        let H = (0, D.Co)("AppSkeleton");
        return (
            i.useEffect(() => {
                Y.isPlatformEmbedded && (H ? d.K.set(D.j4, "json") : d.K.remove(D.j4));
            }, [H]),
            (0, r.jsx)(
                Z.w,
                {
                    children: (0, r.jsxs)(b.Z, {
                        children: [
                            (0, r.jsx)(K.Z, { skipsSettingDefaultPageTitle: n }),
                            (0, r.jsx)(h.T, {
                                children: (0, r.jsx)(R.Z, {
                                    children: (0, r.jsxs)(p.JcV, {
                                        containerRef: B,
                                        children: [
                                            (0, r.jsx)(Q.Co, {}),
                                            (0, r.jsx)(q.ZP, {}),
                                            (0, r.jsx)(c.OUJ, {}),
                                            (0, r.jsx)(M.Wu, {
                                                appContext: J.IlC.APP,
                                                renderWindow: window,
                                                children: (0, r.jsxs)(x.yP, {
                                                    children: [
                                                        null != a ? (0, r.jsx)(en, {}) : null,
                                                        (0, r.jsxs)("div", {
                                                            className: o()(
                                                                $.appAsidePanelWrapper,
                                                                f && $.mobileAppAsidePanelWrapper,
                                                            ),
                                                            children: [
                                                                (0, r.jsx)(A.K, {}),
                                                                (0, r.jsx)("div", {
                                                                    className: $.notAppAsidePanel,
                                                                    "data-app-not-dev-tools": !0,
                                                                    children: (0, r.jsx)(C.m, {
                                                                        children: (0, r.jsx)(j.OR, {
                                                                            children: (0, r.jsx)(y.Z.Provider, {
                                                                                value: O.Z,
                                                                                children: (0, r.jsx)(T.p, {
                                                                                    children: (0, r.jsxs)(U.ov, {
                                                                                        children: [
                                                                                            (0, r.jsx)("div", {
                                                                                                className: o()(
                                                                                                    f
                                                                                                        ? $.mobileApp
                                                                                                        : $.app,
                                                                                                ),
                                                                                                children: t,
                                                                                            }),
                                                                                            (0, r.jsx)(_.Z, {}),
                                                                                            (0, r.jsx)(S.Z, {}),
                                                                                            (0, r.jsx)(m.Z, {}),
                                                                                            (0, r.jsx)(p.nKe, {}),
                                                                                            (0, r.jsx)(F.Z, {}),
                                                                                            (0, r.jsx)(L.Ox, {}),
                                                                                            (0, r.jsx)(l.uZ, {}),
                                                                                            (0, r.jsx)(x.Un, {}),
                                                                                            (0, r.jsx)(j.ot, {}),
                                                                                            (0, r.jsx)(p.Ixi, {
                                                                                                appContext: J.IlC.APP,
                                                                                            }),
                                                                                            (0, r.jsx)(v.Z, {}),
                                                                                            (0, r.jsx)(k.Z, {}),
                                                                                            (0, r.jsx)(ee, {}),
                                                                                            (0, r.jsx)(et, {}),
                                                                                            (0, r.jsx)(G.Z, {}),
                                                                                        ],
                                                                                    }),
                                                                                }),
                                                                            }),
                                                                        }),
                                                                    }),
                                                                }),
                                                                (0, r.jsx)(I.Z, {}),
                                                                (0, r.jsx)(z.Z, { mobile: f }),
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
                V,
            )
        );
    };
