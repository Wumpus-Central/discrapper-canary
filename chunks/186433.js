"use strict";
n.r(t), n(323874), n(14289), n(35956), n(142703);
var r = n(627968);
n(140595), n(64700);
var i = n(507240),
    s = n(284009),
    a = n.n(s),
    o = n(999212),
    l = n(242120),
    u = n(716680),
    d = n(908379),
    c = n(46460),
    _ = n(557042),
    f = n(8917),
    E = n(728458),
    h = n(975571),
    p = n(769341),
    m = n(837921),
    g = n(763685),
    A = n(184849),
    I = n(723702),
    T = n(976860),
    S = n(350723),
    y = n(913934),
    N = n(451988),
    O = n(77729),
    R = n(772432),
    v = n(975616),
    C = n(617590),
    b = n(111162),
    D = n(188094),
    L = n(639723),
    w = n(626584),
    M = n(927813),
    P = n(316501),
    U = n(338816);
b.default.cssDebuggingEnabled && n.e("45105").then(n.t.bind(n, 417512, 19)), (0, P.pF)();
let k = 5 * M.A.Millis.MINUTE,
    x = document.getElementById("app-mount");
a()(null != x, "Could not find app-mount"), (x.className = __OVERLAY__ ? "" : D.l);
let G = (0, i.createRoot)(x),
    V = { "/oauth2/authorize": A.A, "/one-time": U.A },
    F = (e) => G.render((0, r.jsx)(v.e, { children: (0, r.jsx)(R.A, { children: (0, r.jsx)(e, {}) }) }));
if (null != O.A) {
    O.A.setUncaughtExceptionHandler?.((e, t) => {
        setImmediate(() => {
            throw (E.A.captureCrash(e), e);
        });
    }),
        m.Ay.appLoaded();
    let e = O.A.app.getVersion(),
        t = O.A.app.getBuildNumber(),
        n = O.A.app.getModuleVersions();
    E.A.setExtra({ hostVersion: e, moduleVersions: n }), E.A.setTags({ nativeBuildNumber: t?.toString() ?? "" });
    let r = Object.keys(n)
        .filter((e) => null != n[e])
        .map((e) => `${e}: ${n[e]}`)
        .join(", ");
    new w.A().log(`[NATIVE INFO] host ${e}, modules: ${r}, build: ${t}`),
        m.Ay.pauseFrameEvictor(),
        m.Ay.initializeExitHook(),
        m.Ay.initializeWERHandler();
}
if (((0, y.M)(window), __OVERLAY__)) F(o.A.Overlay);
else if (null != window.require && null == window.DiscordNative) F(o.A.OutdatedClient);
else {
    if ((document.addEventListener("scroll", (e) => e.preventDefault()), I.isPlatformEmbedded)) {
        (window.onbeforeunload = () => m.Ay.beforeUnload()),
            m.Ay.on("HELP_OPEN", () => window.open(h.A.getCommunityURL()));
        let e = new N.J_(k, () => m.Ay.purgeMemory());
        m.Ay.on("MAIN_WINDOW_BLUR", () => {
            e.delay(), m.Ay.setFocused(!1), (0, S.XC)(window, !1);
        }),
            m.Ay.on("MAIN_WINDOW_FOCUS", () => {
                e.cancel(), m.Ay.setFocused(!0), (0, S.XC)(window, !0);
            }),
            m.Ay.on("MAIN_WINDOW_PATH", function (e, t, n) {
                let r = null != n ? new URLSearchParams(n) : null;
                V[t]?.(r) || (0, T.pX)(t);
            }),
            m.Ay.on("MAIN_WINDOW_HIDDEN", () => {
                (0, S.R)(window);
            });
    }
    c.A.initialize(),
        l.A.initialize(),
        u.A.init(),
        f.A.init(),
        L.A.init(),
        d.A.initialize(),
        p.A.initialize(),
        g.A.initialize(),
        _.n(),
        (0, C.wP)(),
        F(o.A.App);
}
