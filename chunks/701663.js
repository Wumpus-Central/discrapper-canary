"use strict";
n.d(t, { A: () => er });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(607399),
    l = n(337836),
    u = n(158954),
    c = n(311907),
    d = n(506774),
    _ = n(752239),
    f = n(397927),
    h = n(197808),
    p = n(318009),
    g = n(638421),
    E = n(352423),
    A = n(775602),
    I = n(697138),
    T = n(989395),
    y = n(139286),
    S = n(596155),
    v = n(501280),
    C = n(196923),
    b = n(288610),
    N = n(681582),
    R = n(172272),
    O = n(102854),
    D = n(670735),
    L = n(866822),
    w = n(158719),
    x = n(318015),
    P = n(611544),
    M = n(750506),
    k = n(361158),
    U = n(80556),
    G = n(267102),
    F = n(867649),
    V = n(557571),
    B = n(935261),
    j = n(975616),
    H = n(385838),
    Y = n(961350),
    W = n(186111),
    K = n(723702),
    $ = n(268218),
    z = n(663413),
    q = n(905790),
    X = n(404374),
    Z = n(573435),
    Q = n(71855),
    J = n(652215),
    ee = n(295575);
n(939857),
    Promise.resolve()
        .then(n.bind(n, 677134))
        .then((e) => {
            K.isPlatformEmbedded
                ? window.addEventListener("contextmenu", e.contextMenuCallbackNative, !1)
                : window.addEventListener("contextmenu", e.contextMenuCallbackWeb, !1);
        }),
    (0, _.h)({ getDefaultLinkInterceptor: E.default }),
    (0, $.Fe)({
        createPromise: () => Promise.all([n.e("94678"), n.e("896"), n.e("4787"), n.e("8188")]).then(n.bind(n, 441588)),
        webpackId: 441588,
    }),
    (0, $.Fe)({
        createPromise: () => Promise.all([n.e("94678"), n.e("896"), n.e("4787"), n.e("56795")]).then(n.bind(n, 961881)),
        webpackId: 961881,
    });
let et = (0, $.Fe)({ createPromise: () => n.e("99063").then(n.bind(n, 359094)), webpackId: 359094 }),
    en = i.memo(function () {
        let e = (0, c.bG)([W.A], () => W.A.hasLayers()),
            t = (0, f.red)(f.ueM),
            n = (0, c.bG)([Y.default], () => Y.default.isAuthenticated());
        return (0, r.jsx)(Q.v5, { fixed: !0, show: e || t || !n });
    }),
    er = function (e) {
        let { children: t, skipsSettingDefaultPageTitle: n } = e,
            a = (0, K.getPlatform)(),
            _ = o.Fr || o.v1,
            E = (0, c.bG)([A.A], () => (A.A.useForcedColors ? "yes" : "no")),
            Y = i.useRef(document.body),
            W = `${E}`;
        (0, P.i)("AppSkeleton");
        let $ = (0, w._D)("AppSkeleton"),
            Q = L.wX.useConfig({ location: "AppSkeleton" }).enableFastConnectEarlyIdentify,
            er = (0, x.sK)("AppSkeleton");
        return (
            i.useEffect(() => {
                K.isPlatformEmbedded && ($ ? d.w.set(w.UR, "json") : d.w.remove(w.UR));
            }, [$]),
            i.useEffect(() => {
                Q ? d.w.set(L.Vz, !0) : d.w.remove(L.Vz);
            }, [Q]),
            i.useEffect(() => {
                er ? d.w.set(x.AL, !0) : d.w.remove(x.AL);
            }, [er]),
            (0, r.jsx)(
                j.e,
                {
                    children: (0, r.jsxs)(I.A, {
                        children: [
                            (0, r.jsx)(z.A, { skipsSettingDefaultPageTitle: n }),
                            (0, r.jsx)(g.N, {
                                children: (0, r.jsx)(D.A, {
                                    children: (0, r.jsxs)(f.xpW, {
                                        containerRef: Y,
                                        children: [
                                            (0, r.jsx)(Z.Al, {}),
                                            (0, r.jsx)(X.Ay, {}),
                                            (0, r.jsx)(u.Utq, {}),
                                            (0, r.jsx)(G.Wr, {
                                                appContext: J.BRT.APP,
                                                renderWindow: window,
                                                children: (0, r.jsxs)(M.Yf, {
                                                    children: [
                                                        null != a ? (0, r.jsx)(en, {}) : null,
                                                        (0, r.jsxs)("div", {
                                                            className: s()(ee.XX, _ && ee.Xq),
                                                            children: [
                                                                (0, r.jsx)(R.C1, {}),
                                                                (0, r.jsx)("div", {
                                                                    className: ee.x$,
                                                                    "data-app-not-dev-tools": !0,
                                                                    children: (0, r.jsx)(N.l, {
                                                                        children: (0, r.jsx)(U.ks, {
                                                                            children: (0, r.jsx)(T.A.Provider, {
                                                                                value: y.A,
                                                                                children: (0, r.jsx)(b.p, {
                                                                                    children: (0, r.jsxs)(V.xq, {
                                                                                        children: [
                                                                                            (0, r.jsx)("div", {
                                                                                                className: s()(
                                                                                                    _ ? ee.C$ : ee.yA,
                                                                                                ),
                                                                                                children: t,
                                                                                            }),
                                                                                            (0, r.jsx)(h.A, {}),
                                                                                            (0, r.jsx)(v.A, {}),
                                                                                            (0, r.jsx)(p.A, {}),
                                                                                            (0, r.jsx)(f.bM6, {}),
                                                                                            (0, r.jsx)(H.A, {}),
                                                                                            (0, r.jsx)(k.up, {}),
                                                                                            (0, r.jsx)(l.P, {}),
                                                                                            (0, r.jsx)(M.C8, {}),
                                                                                            (0, r.jsx)(U.ok, {}),
                                                                                            (0, r.jsx)(f.N9M, {
                                                                                                appContext: J.BRT.APP,
                                                                                            }),
                                                                                            (0, r.jsx)(S.A, {}),
                                                                                            (0, r.jsx)(F.A, {}),
                                                                                            (0, r.jsx)(et, {}),
                                                                                            (0, r.jsx)(B.A, {}),
                                                                                        ],
                                                                                    }),
                                                                                }),
                                                                            }),
                                                                        }),
                                                                    }),
                                                                }),
                                                                (0, r.jsx)(C.A, {}),
                                                                (0, r.jsx)(q.A, { mobile: _ }),
                                                                (0, r.jsx)(O.A, { mobile: _ }),
                                                            ],
                                                        }),
                                                        !1,
                                                    ],
                                                }),
                                            }),
                                            (0, r.jsx)(u.Utq, {}),
                                        ],
                                    }),
                                }),
                            }),
                        ],
                    }),
                },
                W,
            )
        );
    };
