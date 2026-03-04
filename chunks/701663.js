"use strict";
n.d(t, { A: () => ee });
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
    R = n(172272),
    O = n(102854),
    b = n(670735),
    D = n(866822),
    L = n(158719),
    w = n(318015),
    M = n(611544),
    x = n(750506),
    P = n(361158),
    k = n(80556),
    U = n(267102),
    G = n(867649),
    F = n(975616),
    V = n(385838),
    B = n(961350),
    H = n(186111),
    j = n(723702),
    Y = n(268218),
    W = n(663413),
    K = n(905790),
    $ = n(404374),
    z = n(573435),
    q = n(71855),
    Z = n(652215),
    X = n(295575);
n(939857),
    Promise.resolve()
        .then(n.bind(n, 677134))
        .then((e) => {
            j.isPlatformEmbedded
                ? window.addEventListener("contextmenu", e.contextMenuCallbackNative, !1)
                : window.addEventListener("contextmenu", e.contextMenuCallbackWeb, !1);
        }),
    (0, _.h)({ getDefaultLinkInterceptor: E.default }),
    (0, Y.Fe)({
        createPromise: () => Promise.all([n.e("94678"), n.e("896"), n.e("4787"), n.e("8188")]).then(n.bind(n, 441588)),
        webpackId: 441588,
    }),
    (0, Y.Fe)({
        createPromise: () => Promise.all([n.e("94678"), n.e("896"), n.e("4787"), n.e("56795")]).then(n.bind(n, 961881)),
        webpackId: 961881,
    });
let Q = (0, Y.Fe)({ createPromise: () => n.e("99063").then(n.bind(n, 359094)), webpackId: 359094 }),
    J = i.memo(function () {
        let e = (0, c.bG)([H.A], () => H.A.hasLayers()),
            t = (0, f.red)(f.ueM),
            n = (0, c.bG)([B.default], () => B.default.isAuthenticated());
        return (0, r.jsx)(q.v5, { fixed: !0, show: e || t || !n });
    }),
    ee = function (e) {
        let { children: t, skipsSettingDefaultPageTitle: n } = e,
            s = (0, j.getPlatform)(),
            _ = o.Fr || o.v1,
            E = (0, c.bG)([g.A], () => (g.A.useForcedColors ? "yes" : "no")),
            B = i.useRef(document.body),
            H = `${E}`;
        (0, M.i)("AppSkeleton");
        let Y = (0, L._D)("AppSkeleton"),
            q = D.wX.useConfig({ location: "AppSkeleton" }).enableFastConnectEarlyIdentify,
            ee = (0, w.sK)("AppSkeleton");
        return (
            i.useEffect(() => {
                j.isPlatformEmbedded && (Y ? d.w.set(L.UR, "json") : d.w.remove(L.UR));
            }, [Y]),
            i.useEffect(() => {
                q ? d.w.set(D.Vz, !0) : d.w.remove(D.Vz);
            }, [q]),
            i.useEffect(() => {
                ee ? d.w.set(w.AL, !0) : d.w.remove(w.AL);
            }, [ee]),
            (0, r.jsx)(
                F.e,
                {
                    children: (0, r.jsxs)(A.A, {
                        children: [
                            (0, r.jsx)(W.A, { skipsSettingDefaultPageTitle: n }),
                            (0, r.jsx)(m.N, {
                                children: (0, r.jsx)(b.A, {
                                    children: (0, r.jsxs)(f.xpW, {
                                        containerRef: B,
                                        children: [
                                            (0, r.jsx)(z.Al, {}),
                                            (0, r.jsx)($.Ay, {}),
                                            (0, r.jsx)(u.Utq, {}),
                                            (0, r.jsx)(U.Wr, {
                                                appContext: Z.BRT.APP,
                                                renderWindow: window,
                                                children: (0, r.jsxs)(x.Yf, {
                                                    children: [
                                                        null != s ? (0, r.jsx)(J, {}) : null,
                                                        (0, r.jsxs)("div", {
                                                            className: a()(X.XX, _ && X.Xq),
                                                            children: [
                                                                (0, r.jsx)(R.C1, {}),
                                                                (0, r.jsx)("div", {
                                                                    className: X.x$,
                                                                    "data-app-not-dev-tools": !0,
                                                                    children: (0, r.jsx)(C.l, {
                                                                        children: (0, r.jsx)(k.ks, {
                                                                            children: (0, r.jsx)(I.A.Provider, {
                                                                                value: T.A,
                                                                                children: (0, r.jsxs)(N.p, {
                                                                                    children: [
                                                                                        (0, r.jsx)("div", {
                                                                                            className: a()(
                                                                                                _ ? X.C$ : X.yA,
                                                                                            ),
                                                                                            children: t,
                                                                                        }),
                                                                                        (0, r.jsx)(p.A, {}),
                                                                                        (0, r.jsx)(y.A, {}),
                                                                                        (0, r.jsx)(h.A, {}),
                                                                                        (0, r.jsx)(f.bM6, {}),
                                                                                        (0, r.jsx)(V.A, {}),
                                                                                        (0, r.jsx)(P.up, {}),
                                                                                        (0, r.jsx)(l.P, {}),
                                                                                        (0, r.jsx)(x.C8, {}),
                                                                                        (0, r.jsx)(k.ok, {}),
                                                                                        (0, r.jsx)(f.N9M, {
                                                                                            appContext: Z.BRT.APP,
                                                                                        }),
                                                                                        (0, r.jsx)(S.A, {}),
                                                                                        (0, r.jsx)(G.A, {}),
                                                                                        (0, r.jsx)(Q, {}),
                                                                                    ],
                                                                                }),
                                                                            }),
                                                                        }),
                                                                    }),
                                                                }),
                                                                (0, r.jsx)(v.A, {}),
                                                                (0, r.jsx)(K.A, { mobile: _ }),
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
                H,
            )
        );
    };
