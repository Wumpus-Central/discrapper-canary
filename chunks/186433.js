"use strict";
n.r(t), n(323874), n(14289), n(35956), n(142703);
var r = n(627968);
n(140595), n(64700);
var i = n(507240),
    a = n(284009),
    s = n.n(a),
    o = n(999212),
    l = n(242120),
    u = n(716680),
    c = n(908379),
    d = n(46460),
    _ = n(557042),
    f = n(8917),
    p = n(728458),
    h = n(975571),
    m = n(769341),
    g = n(837921),
    E = n(763685),
    A = n(184849),
    I = n(723702),
    T = n(976860),
    y = n(350723),
    S = n(913934),
    v = n(451988),
    C = n(77729),
    b = n(772432),
    N = n(975616),
    R = n(617590),
    O = n(111162),
    D = n(769253),
    L = n(639723),
    w = n(626584),
    x = n(927813),
    P = n(316501),
    M = n(338816);
O.default.cssDebuggingEnabled && n.e("42592").then(n.t.bind(n, 196995, 19)), (0, P.pF)();
let k = 5 * x.A.Millis.MINUTE,
    U = document.getElementById("app-mount");
s()(null != U, "Could not find app-mount"), (U.className = __OVERLAY__ ? "" : D.l);
let G = (0, i.createRoot)(U),
    V = { "/oauth2/authorize": A.A, "/one-time": M.A };
function F(e, t, n) {
    let r = null != n ? new URLSearchParams(n) : null;
    V[t]?.(r) || (0, T.pX)(t);
}
let B = (e) => G.render((0, r.jsx)(N.e, { children: (0, r.jsx)(b.A, { children: (0, r.jsx)(e, {}) }) }));
if (null != C.A) {
    C.A.setUncaughtExceptionHandler?.((e, t) => {
        setImmediate(() => {
            throw (p.A.captureCrash(e), e);
        });
    }),
        g.Ay.appLoaded();
    let e = C.A.remoteApp.getVersion?.(),
        t = C.A.remoteApp.getBuildNumber?.(),
        n = {};
    null != C.A.remoteApp.getModuleVersions && (n = C.A.remoteApp.getModuleVersions()),
        p.A.setExtra({ hostVersion: e, moduleVersions: n }),
        p.A.setTags({ nativeBuildNumber: t?.toString() });
    let r = Object.keys(n)
        .filter((e) => null != n[e])
        .map((e) => `${e}: ${n[e]}`)
        .join(", ");
    new w.A().log(`[NATIVE INFO] host ${e}, modules: ${r}, build: ${t}`),
        g.Ay.pauseFrameEvictor(),
        g.Ay.initializeExitHook(),
        g.Ay.initializeWERHandler();
}
if (((0, S.M)(window), __OVERLAY__)) B(o.A.Overlay);
else if (null != window.require && null == window.DiscordNative) B(o.A.OutdatedClient);
else {
    if ((document.addEventListener("scroll", (e) => e.preventDefault()), I.isPlatformEmbedded)) {
        (window.onbeforeunload = () => g.Ay.beforeUnload()),
            g.Ay.on("HELP_OPEN", () => window.open(h.A.getCommunityURL()));
        let e = new v.J_(k, () => g.Ay.purgeMemory());
        g.Ay.on("MAIN_WINDOW_BLUR", () => {
            e.delay(), g.Ay.setFocused(!1), (0, y.XC)(window, !1);
        }),
            g.Ay.on("MAIN_WINDOW_FOCUS", () => {
                e.cancel(), g.Ay.setFocused(!0), (0, y.XC)(window, !0);
            }),
            g.Ay.on("MAIN_WINDOW_PATH", F),
            g.Ay.on("MAIN_WINDOW_HIDDEN", () => {
                (0, y.R)(window);
            });
    }
    d.A.initialize(),
        l.A.initialize(),
        u.A.init(),
        f.A.init(),
        L.A.init(),
        c.A.initialize(),
        m.A.initialize(),
        E.A.initialize(),
        _.n(),
        (0, R.wP)(),
        B(o.A.App);
}
