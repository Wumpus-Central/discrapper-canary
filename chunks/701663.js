"use strict";
n.d(t, { A: () => et });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(607399),
    l = n(337836),
    u = n(825437),
    c = n(311907),
    d = n(506774),
    _ = n(752239),
    f = n(192308),
    p = n(187322),
    h = n(638495),
    E = n(988393),
    m = n(197808),
    g = n(318009),
    A = n(638421),
    I = n(352423),
    T = n(775602),
    S = n(697138),
    y = n(989395),
    N = n(139286),
    v = n(596155),
    C = n(501280),
    O = n(196923),
    R = n(288610),
    b = n(681582),
    D = n(172272),
    L = n(102854),
    w = n(670735),
    M = n(318015),
    P = n(611544),
    x = n(750506),
    k = n(361158),
    U = n(80556),
    G = n(267102),
    F = n(867649),
    V = n(975616),
    B = n(385838),
    H = n(961350),
    j = n(186111),
    Y = n(723702),
    W = n(268218),
    K = n(663413),
    $ = n(905790),
    z = n(404374),
    q = n(573435),
    X = n(71855),
    Q = n(652215),
    Z = n(906292);
n(939857),
    Promise.resolve()
        .then(n.bind(n, 677134))
        .then((e) => {
            Y.isPlatformEmbedded
                ? window.addEventListener("contextmenu", e.contextMenuCallbackNative, !1)
                : window.addEventListener("contextmenu", e.contextMenuCallbackWeb, !1);
        }),
    (0, _.h)({ getDefaultLinkInterceptor: I.default }),
    (0, W.Fe)({
        createPromise: () => Promise.all([n.e("94678"), n.e("896"), n.e("4787"), n.e("8188")]).then(n.bind(n, 441588)),
        webpackId: 441588,
    }),
    (0, W.Fe)({
        createPromise: () => Promise.all([n.e("94678"), n.e("896"), n.e("4787"), n.e("56795")]).then(n.bind(n, 961881)),
        webpackId: 961881,
    });
let J = (0, W.Fe)({ createPromise: () => n.e("99063").then(n.bind(n, 359094)), webpackId: 359094 }),
    ee = i.memo(function () {
        let e = (0, c.bG)([j.A], () => j.A.hasLayers()),
            t = (0, f.useModalsStore)(f.hasAnyModalOpen),
            n = (0, c.bG)([H.default], () => H.default.isAuthenticated());
        return (0, r.jsx)(X.v5, { fixed: !0, show: e || t || !n, isLayerOpen: e });
    }),
    et = function (e) {
        let { children: t, skipsSettingDefaultPageTitle: n } = e,
            s = (0, Y.getPlatform)(),
            _ = o.Fr || o.v1,
            f = (0, c.bG)([T.A], () => (T.A.useForcedColors ? "yes" : "no")),
            I = i.useRef(document.body),
            H = `${f}`;
        (0, P.i)("AppSkeleton");
        let j = (0, M.sK)("AppSkeleton");
        return (
            i.useEffect(() => {
                j ? d.w.set(M.AL, !0) : d.w.remove(M.AL);
            }, [j]),
            (0, r.jsx)(
                V.e,
                {
                    children: (0, r.jsxs)(S.A, {
                        children: [
                            (0, r.jsx)(K.A, { skipsSettingDefaultPageTitle: n }),
                            (0, r.jsx)(A.N, {
                                children: (0, r.jsx)(w.A, {
                                    children: (0, r.jsxs)(p.xp, {
                                        containerRef: I,
                                        children: [
                                            (0, r.jsx)(q.Al, {}),
                                            (0, r.jsx)(z.Ay, {}),
                                            (0, r.jsx)(u.Ut, {}),
                                            (0, r.jsx)(G.Wr, {
                                                appContext: Q.BRT.APP,
                                                renderWindow: window,
                                                children: (0, r.jsxs)(x.Yf, {
                                                    children: [
                                                        null != s ? (0, r.jsx)(ee, {}) : null,
                                                        (0, r.jsxs)("div", {
                                                            className: a()(Z.XX, _ && Z.Xq),
                                                            children: [
                                                                (0, r.jsx)(D.C1, {}),
                                                                (0, r.jsx)("div", {
                                                                    className: Z.x$,
                                                                    "data-app-not-dev-tools": !0,
                                                                    children: (0, r.jsx)(b.l, {
                                                                        children: (0, r.jsx)(U.ks, {
                                                                            children: (0, r.jsx)(y.A.Provider, {
                                                                                value: N.A,
                                                                                children: (0, r.jsxs)(R.p, {
                                                                                    children: [
                                                                                        (0, r.jsx)("div", {
                                                                                            className: a()(
                                                                                                _ ? Z.C$ : Z.yA,
                                                                                            ),
                                                                                            children: t,
                                                                                        }),
                                                                                        (0, r.jsx)(m.A, {}),
                                                                                        (0, r.jsx)(C.A, {}),
                                                                                        (0, r.jsx)(g.A, {}),
                                                                                        (0, r.jsx)(h.b, {}),
                                                                                        (0, r.jsx)(B.A, {}),
                                                                                        (0, r.jsx)(k.up, {}),
                                                                                        (0, r.jsx)(l.P, {}),
                                                                                        (0, r.jsx)(x.C8, {}),
                                                                                        (0, r.jsx)(U.ok, {}),
                                                                                        (0, r.jsx)(E.N, {
                                                                                            appContext: Q.BRT.APP,
                                                                                        }),
                                                                                        (0, r.jsx)(v.A, {}),
                                                                                        (0, r.jsx)(F.A, {}),
                                                                                        (0, r.jsx)(J, {}),
                                                                                    ],
                                                                                }),
                                                                            }),
                                                                        }),
                                                                    }),
                                                                }),
                                                                (0, r.jsx)(O.A, {}),
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
