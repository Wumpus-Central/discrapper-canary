"use strict";
n.d(t, { A: () => J });
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
    D = n(158719),
    L = n(318015),
    w = n(611544),
    M = n(750506),
    x = n(361158),
    P = n(80556),
    k = n(267102),
    U = n(867649),
    G = n(975616),
    F = n(385838),
    V = n(961350),
    B = n(186111),
    H = n(723702),
    j = n(268218),
    Y = n(663413),
    W = n(905790),
    K = n(404374),
    $ = n(573435),
    z = n(71855),
    q = n(652215),
    Z = n(524769);
n(939857),
    Promise.resolve()
        .then(n.bind(n, 677134))
        .then((e) => {
            H.isPlatformEmbedded
                ? window.addEventListener("contextmenu", e.contextMenuCallbackNative, !1)
                : window.addEventListener("contextmenu", e.contextMenuCallbackWeb, !1);
        }),
    (0, _.h)({ getDefaultLinkInterceptor: E.default }),
    (0, j.Fe)({
        createPromise: () => Promise.all([n.e("94678"), n.e("896"), n.e("4787"), n.e("8188")]).then(n.bind(n, 441588)),
        webpackId: 441588,
    }),
    (0, j.Fe)({
        createPromise: () => Promise.all([n.e("94678"), n.e("896"), n.e("4787"), n.e("56795")]).then(n.bind(n, 961881)),
        webpackId: 961881,
    });
let X = (0, j.Fe)({ createPromise: () => n.e("21444").then(n.bind(n, 359094)), webpackId: 359094 }),
    Q = i.memo(function () {
        let e = (0, c.bG)([B.A], () => B.A.hasLayers()),
            t = (0, f.red)(f.ueM),
            n = (0, c.bG)([V.default], () => V.default.isAuthenticated());
        return (0, r.jsx)(z.v5, { fixed: !0, show: e || t || !n });
    }),
    J = function (e) {
        let { children: t, skipsSettingDefaultPageTitle: n } = e,
            s = (0, H.getPlatform)(),
            _ = o.Fr || o.v1,
            E = (0, c.bG)([g.A], () => (g.A.useForcedColors ? "yes" : "no")),
            V = i.useRef(document.body),
            B = `${E}`;
        (0, w.i)("AppSkeleton");
        let j = (0, D._D)("AppSkeleton"),
            z = (0, L.sK)("AppSkeleton");
        return (
            i.useEffect(() => {
                H.isPlatformEmbedded && (j ? d.w.set(D.UR, "json") : d.w.remove(D.UR));
            }, [j]),
            i.useEffect(() => {
                z ? d.w.set(L.AL, !0) : d.w.remove(L.AL);
            }, [z]),
            (0, r.jsx)(
                G.e,
                {
                    children: (0, r.jsxs)(A.A, {
                        children: [
                            (0, r.jsx)(Y.A, { skipsSettingDefaultPageTitle: n }),
                            (0, r.jsx)(m.N, {
                                children: (0, r.jsx)(b.A, {
                                    children: (0, r.jsxs)(f.xpW, {
                                        containerRef: V,
                                        children: [
                                            (0, r.jsx)($.Al, {}),
                                            (0, r.jsx)(K.Ay, {}),
                                            (0, r.jsx)(u.Utq, {}),
                                            (0, r.jsx)(k.Wr, {
                                                appContext: q.BRT.APP,
                                                renderWindow: window,
                                                children: (0, r.jsxs)(M.Yf, {
                                                    children: [
                                                        null != s ? (0, r.jsx)(Q, {}) : null,
                                                        (0, r.jsxs)("div", {
                                                            className: a()(Z.XX, _ && Z.Xq),
                                                            children: [
                                                                (0, r.jsx)(R.C1, {}),
                                                                (0, r.jsx)("div", {
                                                                    className: Z.x$,
                                                                    "data-app-not-dev-tools": !0,
                                                                    children: (0, r.jsx)(C.l, {
                                                                        children: (0, r.jsx)(P.ks, {
                                                                            children: (0, r.jsx)(I.A.Provider, {
                                                                                value: T.A,
                                                                                children: (0, r.jsxs)(N.p, {
                                                                                    children: [
                                                                                        (0, r.jsx)("div", {
                                                                                            className: a()(
                                                                                                _ ? Z.C$ : Z.yA,
                                                                                            ),
                                                                                            children: t,
                                                                                        }),
                                                                                        (0, r.jsx)(p.A, {}),
                                                                                        (0, r.jsx)(y.A, {}),
                                                                                        (0, r.jsx)(h.A, {}),
                                                                                        (0, r.jsx)(f.bM6, {}),
                                                                                        (0, r.jsx)(F.A, {}),
                                                                                        (0, r.jsx)(x.up, {}),
                                                                                        (0, r.jsx)(l.P, {}),
                                                                                        (0, r.jsx)(M.C8, {}),
                                                                                        (0, r.jsx)(P.ok, {}),
                                                                                        (0, r.jsx)(f.N9M, {
                                                                                            appContext: q.BRT.APP,
                                                                                        }),
                                                                                        (0, r.jsx)(S.A, {}),
                                                                                        (0, r.jsx)(U.A, {}),
                                                                                        (0, r.jsx)(X, {}),
                                                                                    ],
                                                                                }),
                                                                            }),
                                                                        }),
                                                                    }),
                                                                }),
                                                                (0, r.jsx)(v.A, {}),
                                                                (0, r.jsx)(W.A, { mobile: _ }),
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
                B,
            )
        );
    };
