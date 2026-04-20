"use strict";
n.d(t, { A: () => Q });
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
    D = n(318015),
    L = n(611544),
    w = n(750506),
    M = n(361158),
    P = n(80556),
    x = n(267102),
    k = n(867649),
    U = n(975616),
    G = n(385838),
    F = n(961350),
    V = n(186111),
    B = n(723702),
    H = n(268218),
    j = n(663413),
    Y = n(905790),
    W = n(404374),
    K = n(573435),
    $ = n(71855),
    z = n(652215),
    q = n(906292);
n(939857),
    Promise.resolve()
        .then(n.bind(n, 677134))
        .then((e) => {
            B.isPlatformEmbedded
                ? window.addEventListener("contextmenu", e.contextMenuCallbackNative, !1)
                : window.addEventListener("contextmenu", e.contextMenuCallbackWeb, !1);
        }),
    (0, _.h)({ getDefaultLinkInterceptor: E.default }),
    (0, H.Fe)({
        createPromise: () => Promise.all([n.e("94678"), n.e("896"), n.e("4787"), n.e("8188")]).then(n.bind(n, 441588)),
        webpackId: 441588,
    }),
    (0, H.Fe)({
        createPromise: () => Promise.all([n.e("94678"), n.e("896"), n.e("4787"), n.e("56795")]).then(n.bind(n, 961881)),
        webpackId: 961881,
    });
let Z = (0, H.Fe)({ createPromise: () => n.e("99063").then(n.bind(n, 359094)), webpackId: 359094 }),
    X = i.memo(function () {
        let e = (0, c.bG)([V.A], () => V.A.hasLayers()),
            t = (0, f.red)(f.ueM),
            n = (0, c.bG)([F.default], () => F.default.isAuthenticated());
        return (0, r.jsx)($.v5, { fixed: !0, show: e || t || !n, isLayerOpen: e });
    }),
    Q = function (e) {
        let { children: t, skipsSettingDefaultPageTitle: n } = e,
            s = (0, B.getPlatform)(),
            _ = o.Fr || o.v1,
            E = (0, c.bG)([g.A], () => (g.A.useForcedColors ? "yes" : "no")),
            F = i.useRef(document.body),
            V = `${E}`;
        (0, L.i)("AppSkeleton");
        let H = (0, D.sK)("AppSkeleton");
        return (
            i.useEffect(() => {
                H ? d.w.set(D.AL, !0) : d.w.remove(D.AL);
            }, [H]),
            (0, r.jsx)(
                U.e,
                {
                    children: (0, r.jsxs)(A.A, {
                        children: [
                            (0, r.jsx)(j.A, { skipsSettingDefaultPageTitle: n }),
                            (0, r.jsx)(m.N, {
                                children: (0, r.jsx)(b.A, {
                                    children: (0, r.jsxs)(f.xpW, {
                                        containerRef: F,
                                        children: [
                                            (0, r.jsx)(K.Al, {}),
                                            (0, r.jsx)(W.Ay, {}),
                                            (0, r.jsx)(u.Utq, {}),
                                            (0, r.jsx)(x.Wr, {
                                                appContext: z.BRT.APP,
                                                renderWindow: window,
                                                children: (0, r.jsxs)(w.Yf, {
                                                    children: [
                                                        null != s ? (0, r.jsx)(X, {}) : null,
                                                        (0, r.jsxs)("div", {
                                                            className: a()(q.XX, _ && q.Xq),
                                                            children: [
                                                                (0, r.jsx)(R.C1, {}),
                                                                (0, r.jsx)("div", {
                                                                    className: q.x$,
                                                                    "data-app-not-dev-tools": !0,
                                                                    children: (0, r.jsx)(C.l, {
                                                                        children: (0, r.jsx)(P.ks, {
                                                                            children: (0, r.jsx)(I.A.Provider, {
                                                                                value: T.A,
                                                                                children: (0, r.jsxs)(N.p, {
                                                                                    children: [
                                                                                        (0, r.jsx)("div", {
                                                                                            className: a()(
                                                                                                _ ? q.C$ : q.yA,
                                                                                            ),
                                                                                            children: t,
                                                                                        }),
                                                                                        (0, r.jsx)(p.A, {}),
                                                                                        (0, r.jsx)(y.A, {}),
                                                                                        (0, r.jsx)(h.A, {}),
                                                                                        (0, r.jsx)(f.bM6, {}),
                                                                                        (0, r.jsx)(G.A, {}),
                                                                                        (0, r.jsx)(M.up, {}),
                                                                                        (0, r.jsx)(l.P, {}),
                                                                                        (0, r.jsx)(w.C8, {}),
                                                                                        (0, r.jsx)(P.ok, {}),
                                                                                        (0, r.jsx)(f.N9M, {
                                                                                            appContext: z.BRT.APP,
                                                                                        }),
                                                                                        (0, r.jsx)(S.A, {}),
                                                                                        (0, r.jsx)(k.A, {}),
                                                                                        (0, r.jsx)(Z, {}),
                                                                                    ],
                                                                                }),
                                                                            }),
                                                                        }),
                                                                    }),
                                                                }),
                                                                (0, r.jsx)(v.A, {}),
                                                                (0, r.jsx)(Y.A, { mobile: _ }),
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
                V,
            )
        );
    };
