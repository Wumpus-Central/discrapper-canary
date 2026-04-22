"use strict";
n.d(t, { A: () => et });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(607399),
    l = n(337836),
    u = n(825437),
    d = n(311907),
    c = n(506774),
    _ = n(752239),
    f = n(192308),
    E = n(187322),
    h = n(638495),
    p = n(988393),
    m = n(197808),
    g = n(318009),
    A = n(638421),
    I = n(352423),
    T = n(775602),
    S = n(697138),
    y = n(989395),
    N = n(139286),
    O = n(596155),
    R = n(501280),
    v = n(196923),
    C = n(288610),
    b = n(681582),
    D = n(172272),
    L = n(102854),
    w = n(670735),
    M = n(318015),
    P = n(611544),
    U = n(750506),
    k = n(361158),
    x = n(80556),
    G = n(267102),
    V = n(867649),
    F = n(975616),
    B = n(385838),
    H = n(961350),
    Y = n(186111),
    W = n(723702),
    j = n(268218),
    K = n(663413),
    $ = n(905790),
    z = n(404374),
    q = n(573435),
    X = n(71855),
    Q = n(652215),
    J = n(906292);
n(939857),
    Promise.resolve()
        .then(n.bind(n, 677134))
        .then((e) => {
            W.isPlatformEmbedded
                ? window.addEventListener("contextmenu", e.contextMenuCallbackNative, !1)
                : window.addEventListener("contextmenu", e.contextMenuCallbackWeb, !1);
        }),
    (0, _.h)({ getDefaultLinkInterceptor: I.default }),
    (0, j.Fe)({
        createPromise: () => Promise.all([n.e("94678"), n.e("896"), n.e("4787"), n.e("8188")]).then(n.bind(n, 441588)),
        webpackId: 441588,
    }),
    (0, j.Fe)({
        createPromise: () => Promise.all([n.e("94678"), n.e("896"), n.e("4787"), n.e("56795")]).then(n.bind(n, 961881)),
        webpackId: 961881,
    });
let Z = (0, j.Fe)({ createPromise: () => n.e("99063").then(n.bind(n, 359094)), webpackId: 359094 }),
    ee = i.memo(function () {
        let e = (0, d.bG)([Y.A], () => Y.A.hasLayers()),
            t = (0, f.useModalsStore)(f.hasAnyModalOpen),
            n = (0, d.bG)([H.default], () => H.default.isAuthenticated());
        return (0, r.jsx)(X.v5, { fixed: !0, show: e || t || !n, isLayerOpen: e });
    }),
    et = function (e) {
        let { children: t, skipsSettingDefaultPageTitle: n } = e,
            s = (0, W.getPlatform)(),
            _ = o.Fr || o.v1,
            f = (0, d.bG)([T.A], () => (T.A.useForcedColors ? "yes" : "no")),
            I = i.useRef(document.body),
            H = `${f}`;
        (0, P.i)("AppSkeleton");
        let Y = (0, M.sK)("AppSkeleton");
        return (
            i.useEffect(() => {
                Y ? c.w.set(M.AL, !0) : c.w.remove(M.AL);
            }, [Y]),
            (0, r.jsx)(
                F.e,
                {
                    children: (0, r.jsxs)(S.A, {
                        children: [
                            (0, r.jsx)(K.A, { skipsSettingDefaultPageTitle: n }),
                            (0, r.jsx)(A.N, {
                                children: (0, r.jsx)(w.A, {
                                    children: (0, r.jsxs)(E.xp, {
                                        containerRef: I,
                                        children: [
                                            (0, r.jsx)(q.Al, {}),
                                            (0, r.jsx)(z.Ay, {}),
                                            (0, r.jsx)(u.Ut, {}),
                                            (0, r.jsx)(G.Wr, {
                                                appContext: Q.BRT.APP,
                                                renderWindow: window,
                                                children: (0, r.jsxs)(U.Yf, {
                                                    children: [
                                                        null != s ? (0, r.jsx)(ee, {}) : null,
                                                        (0, r.jsxs)("div", {
                                                            className: a()(J.XX, _ && J.Xq),
                                                            children: [
                                                                (0, r.jsx)(D.C1, {}),
                                                                (0, r.jsx)("div", {
                                                                    className: J.x$,
                                                                    "data-app-not-dev-tools": !0,
                                                                    children: (0, r.jsx)(b.l, {
                                                                        children: (0, r.jsx)(x.ks, {
                                                                            children: (0, r.jsx)(y.A.Provider, {
                                                                                value: N.A,
                                                                                children: (0, r.jsxs)(C.p, {
                                                                                    children: [
                                                                                        (0, r.jsx)("div", {
                                                                                            className: a()(
                                                                                                _ ? J.C$ : J.yA,
                                                                                            ),
                                                                                            children: t,
                                                                                        }),
                                                                                        (0, r.jsx)(m.A, {}),
                                                                                        (0, r.jsx)(R.A, {}),
                                                                                        (0, r.jsx)(g.A, {}),
                                                                                        (0, r.jsx)(h.b, {}),
                                                                                        (0, r.jsx)(B.A, {}),
                                                                                        (0, r.jsx)(k.up, {}),
                                                                                        (0, r.jsx)(l.P, {}),
                                                                                        (0, r.jsx)(U.C8, {}),
                                                                                        (0, r.jsx)(x.ok, {}),
                                                                                        (0, r.jsx)(p.N, {
                                                                                            appContext: Q.BRT.APP,
                                                                                        }),
                                                                                        (0, r.jsx)(O.A, {}),
                                                                                        (0, r.jsx)(V.A, {}),
                                                                                        (0, r.jsx)(Z, {}),
                                                                                    ],
                                                                                }),
                                                                            }),
                                                                        }),
                                                                    }),
                                                                }),
                                                                (0, r.jsx)(v.A, {}),
                                                                (0, r.jsx)($.A, { mobile: _ }),
                                                                (0, r.jsx)(L.A, { mobile: _ }),
                                                            ],
                                                        }),
                                                        !1,
                                                    ],
                                                }),
                                            }),
                                            (0, r.jsx)(u.Ut, {}),
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
