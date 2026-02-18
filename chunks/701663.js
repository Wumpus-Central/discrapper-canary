"use strict";
n.d(t, { A: () => en });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(607399),
    l = n(337836),
    u = n(158954),
    c = n(311907),
    d = n(506774),
    _ = n(752239),
    f = n(397927),
    p = n(197808),
    h = n(318009),
    m = n(638421),
    E = n(352423),
    g = n(775602),
    A = n(697138),
    I = n(989395),
    T = n(139286),
    S = n(596155),
    y = n(501280),
    v = n(196923),
    N = n(288610),
    C = n(681582),
    b = n(172272),
    R = n(102854),
    O = n(670735),
    D = n(866822),
    L = n(158719),
    w = n(318015),
    x = n(611544),
    M = n(750506),
    P = n(361158),
    k = n(80556),
    U = n(267102),
    G = n(867649),
    F = n(557571),
    V = n(935261),
    B = n(975616),
    H = n(385838),
    j = n(961350),
    Y = n(186111),
    W = n(723702),
    K = n(268218),
    z = n(663413),
    $ = n(905790),
    q = n(404374),
    Z = n(573435),
    X = n(71855),
    Q = n(652215),
    J = n(295575);
n(939857),
    Promise.resolve()
        .then(n.bind(n, 677134))
        .then((e) => {
            W.isPlatformEmbedded
                ? window.addEventListener("contextmenu", e.contextMenuCallbackNative, !1)
                : window.addEventListener("contextmenu", e.contextMenuCallbackWeb, !1);
        }),
    (0, _.h)({ getDefaultLinkInterceptor: E.default }),
    (0, K.Fe)({
        createPromise: () => Promise.all([n.e("94678"), n.e("896"), n.e("4787"), n.e("8188")]).then(n.bind(n, 441588)),
        webpackId: 441588,
    }),
    (0, K.Fe)({
        createPromise: () => Promise.all([n.e("94678"), n.e("896"), n.e("4787"), n.e("56795")]).then(n.bind(n, 961881)),
        webpackId: 961881,
    });
let ee = (0, K.Fe)({ createPromise: () => n.e("99063").then(n.bind(n, 359094)), webpackId: 359094 }),
    et = i.memo(function () {
        let e = (0, c.bG)([Y.A], () => Y.A.hasLayers()),
            t = (0, f.red)(f.ueM),
            n = (0, c.bG)([j.default], () => j.default.isAuthenticated());
        return (0, r.jsx)(X.v5, { fixed: !0, show: e || t || !n });
    }),
    en = function (e) {
        let { children: t, skipsSettingDefaultPageTitle: n } = e,
            s = (0, W.getPlatform)(),
            _ = o.Fr || o.v1,
            E = (0, c.bG)([g.A], () => (g.A.useForcedColors ? "yes" : "no")),
            j = i.useRef(document.body),
            Y = `${E}`;
        (0, x.i)("AppSkeleton");
        let K = (0, L._D)("AppSkeleton"),
            X = D.wX.useConfig({ location: "AppSkeleton" }).enableFastConnectEarlyIdentify,
            en = (0, w.sK)("AppSkeleton");
        return (
            i.useEffect(() => {
                W.isPlatformEmbedded && (K ? d.w.set(L.UR, "json") : d.w.remove(L.UR));
            }, [K]),
            i.useEffect(() => {
                X ? d.w.set(D.Vz, !0) : d.w.remove(D.Vz);
            }, [X]),
            i.useEffect(() => {
                en ? d.w.set(w.AL, !0) : d.w.remove(w.AL);
            }, [en]),
            (0, r.jsx)(
                B.e,
                {
                    children: (0, r.jsxs)(A.A, {
                        children: [
                            (0, r.jsx)(z.A, { skipsSettingDefaultPageTitle: n }),
                            (0, r.jsx)(m.N, {
                                children: (0, r.jsx)(O.A, {
                                    children: (0, r.jsxs)(f.xpW, {
                                        containerRef: j,
                                        children: [
                                            (0, r.jsx)(Z.Al, {}),
                                            (0, r.jsx)(q.Ay, {}),
                                            (0, r.jsx)(u.Utq, {}),
                                            (0, r.jsx)(U.Wr, {
                                                appContext: Q.BRT.APP,
                                                renderWindow: window,
                                                children: (0, r.jsxs)(M.Yf, {
                                                    children: [
                                                        null != s ? (0, r.jsx)(et, {}) : null,
                                                        (0, r.jsxs)("div", {
                                                            className: a()(J.XX, _ && J.Xq),
                                                            children: [
                                                                (0, r.jsx)(b.C1, {}),
                                                                (0, r.jsx)("div", {
                                                                    className: J.x$,
                                                                    "data-app-not-dev-tools": !0,
                                                                    children: (0, r.jsx)(C.l, {
                                                                        children: (0, r.jsx)(k.ks, {
                                                                            children: (0, r.jsx)(I.A.Provider, {
                                                                                value: T.A,
                                                                                children: (0, r.jsx)(N.p, {
                                                                                    children: (0, r.jsxs)(F.xq, {
                                                                                        children: [
                                                                                            (0, r.jsx)("div", {
                                                                                                className: a()(
                                                                                                    _ ? J.C$ : J.yA,
                                                                                                ),
                                                                                                children: t,
                                                                                            }),
                                                                                            (0, r.jsx)(p.A, {}),
                                                                                            (0, r.jsx)(y.A, {}),
                                                                                            (0, r.jsx)(h.A, {}),
                                                                                            (0, r.jsx)(f.bM6, {}),
                                                                                            (0, r.jsx)(H.A, {}),
                                                                                            (0, r.jsx)(P.up, {}),
                                                                                            (0, r.jsx)(l.P, {}),
                                                                                            (0, r.jsx)(M.C8, {}),
                                                                                            (0, r.jsx)(k.ok, {}),
                                                                                            (0, r.jsx)(f.N9M, {
                                                                                                appContext: Q.BRT.APP,
                                                                                            }),
                                                                                            (0, r.jsx)(S.A, {}),
                                                                                            (0, r.jsx)(G.A, {}),
                                                                                            (0, r.jsx)(ee, {}),
                                                                                            (0, r.jsx)(V.A, {}),
                                                                                        ],
                                                                                    }),
                                                                                }),
                                                                            }),
                                                                        }),
                                                                    }),
                                                                }),
                                                                (0, r.jsx)(v.A, {}),
                                                                (0, r.jsx)($.A, { mobile: _ }),
                                                                (0, r.jsx)(R.A, { mobile: _ }),
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
                Y,
            )
        );
    };
