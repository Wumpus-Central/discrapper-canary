"use strict";
n.d(t, { A: () => en });
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
    p = n(197808),
    h = n(318009),
    m = n(638421),
    g = n(352423),
    E = n(775602),
    A = n(697138),
    I = n(989395),
    T = n(139286),
    y = n(596155),
    S = n(501280),
    v = n(196923),
    C = n(288610),
    b = n(681582),
    N = n(172272),
    R = n(102854),
    O = n(670735),
    D = n(866822),
    L = n(158719),
    w = n(318015),
    x = n(611544),
    P = n(750506),
    M = n(361158),
    k = n(80556),
    U = n(267102),
    G = n(867649),
    V = n(557571),
    F = n(935261),
    B = n(975616),
    j = n(385838),
    H = n(961350),
    Y = n(186111),
    W = n(723702),
    K = n(268218),
    z = n(663413),
    $ = n(905790),
    q = n(404374),
    Z = n(573435),
    Q = n(71855),
    X = n(652215),
    J = n(295575);
n(939857),
    Promise.resolve()
        .then(n.bind(n, 677134))
        .then((e) => {
            W.isPlatformEmbedded
                ? window.addEventListener("contextmenu", e.contextMenuCallbackNative, !1)
                : window.addEventListener("contextmenu", e.contextMenuCallbackWeb, !1);
        }),
    (0, _.h)({ getDefaultLinkInterceptor: g.default }),
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
            n = (0, c.bG)([H.default], () => H.default.isAuthenticated());
        return (0, r.jsx)(Q.v5, { fixed: !0, show: e || t || !n });
    }),
    en = function (e) {
        let { children: t, skipsSettingDefaultPageTitle: n } = e,
            a = (0, W.getPlatform)(),
            _ = o.Fr || o.v1,
            g = (0, c.bG)([E.A], () => (E.A.useForcedColors ? "yes" : "no")),
            H = i.useRef(document.body),
            Y = `${g}`;
        (0, x.i)("AppSkeleton");
        let K = (0, L._D)("AppSkeleton"),
            Q = D.wX.useConfig({ location: "AppSkeleton" }).enableFastConnectEarlyIdentify,
            en = (0, w.sK)("AppSkeleton");
        return (
            i.useEffect(() => {
                W.isPlatformEmbedded && (K ? d.w.set(L.UR, "json") : d.w.remove(L.UR));
            }, [K]),
            i.useEffect(() => {
                Q ? d.w.set(D.Vz, !0) : d.w.remove(D.Vz);
            }, [Q]),
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
                                        containerRef: H,
                                        children: [
                                            (0, r.jsx)(Z.Al, {}),
                                            (0, r.jsx)(q.Ay, {}),
                                            (0, r.jsx)(u.Utq, {}),
                                            (0, r.jsx)(U.Wr, {
                                                appContext: X.BRT.APP,
                                                renderWindow: window,
                                                children: (0, r.jsxs)(P.Yf, {
                                                    children: [
                                                        null != a ? (0, r.jsx)(et, {}) : null,
                                                        (0, r.jsxs)("div", {
                                                            className: s()(J.XX, _ && J.Xq),
                                                            children: [
                                                                (0, r.jsx)(N.C1, {}),
                                                                (0, r.jsx)("div", {
                                                                    className: J.x$,
                                                                    "data-app-not-dev-tools": !0,
                                                                    children: (0, r.jsx)(b.l, {
                                                                        children: (0, r.jsx)(k.ks, {
                                                                            children: (0, r.jsx)(I.A.Provider, {
                                                                                value: T.A,
                                                                                children: (0, r.jsx)(C.p, {
                                                                                    children: (0, r.jsxs)(V.xq, {
                                                                                        children: [
                                                                                            (0, r.jsx)("div", {
                                                                                                className: s()(
                                                                                                    _ ? J.C$ : J.yA,
                                                                                                ),
                                                                                                children: t,
                                                                                            }),
                                                                                            (0, r.jsx)(p.A, {}),
                                                                                            (0, r.jsx)(S.A, {}),
                                                                                            (0, r.jsx)(h.A, {}),
                                                                                            (0, r.jsx)(f.bM6, {}),
                                                                                            (0, r.jsx)(j.A, {}),
                                                                                            (0, r.jsx)(M.up, {}),
                                                                                            (0, r.jsx)(l.P, {}),
                                                                                            (0, r.jsx)(P.C8, {}),
                                                                                            (0, r.jsx)(k.ok, {}),
                                                                                            (0, r.jsx)(f.N9M, {
                                                                                                appContext: X.BRT.APP,
                                                                                            }),
                                                                                            (0, r.jsx)(y.A, {}),
                                                                                            (0, r.jsx)(G.A, {}),
                                                                                            (0, r.jsx)(ee, {}),
                                                                                            (0, r.jsx)(F.A, {}),
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
