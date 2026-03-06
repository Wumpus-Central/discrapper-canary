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
    c = n(908379),
    d = n(46460),
    _ = n(557042),
    f = n(8917),
    p = n(728458),
    h = n(975571),
    m = n(769341),
    E = n(837921),
    g = n(763685),
    A = n(184849),
    I = n(723702),
    T = n(976860),
    S = n(350723),
    y = n(913934),
    v = n(451988),
    N = n(77729),
    C = n(772432),
    R = n(975616),
    O = n(617590),
    b = n(111162),
    D = n(653103),
    L = n(639723),
    w = n(626584),
    M = n(927813),
    x = n(316501),
    P = n(338816);
b.default.cssDebuggingEnabled && n.e("71454").then(n.t.bind(n, 739533, 19)), (0, x.pF)();
let k = 5 * M.A.Millis.MINUTE,
    U = document.getElementById("app-mount");
a()(null != U, "Could not find app-mount"), (U.className = __OVERLAY__ ? "" : D.l);
let G = (0, i.createRoot)(U),
    F = { "/oauth2/authorize": A.A, "/one-time": P.A };
function V(e, t, n) {
    let r = null != n ? new URLSearchParams(n) : null;
    F[t]?.(r) || (0, T.pX)(t);
}
let B = (e) => G.render((0, r.jsx)(R.e, { children: (0, r.jsx)(C.A, { children: (0, r.jsx)(e, {}) }) }));
if (null != N.A) {
    N.A.setUncaughtExceptionHandler?.((e, t) => {
        setImmediate(() => {
            throw (p.A.captureCrash(e), e);
        });
    }),
        E.Ay.appLoaded();
    let e = N.A.app.getVersion(),
        t = N.A.app.getBuildNumber(),
        n = N.A.app.getModuleVersions();
    p.A.setExtra({ hostVersion: e, moduleVersions: n }), p.A.setTags({ nativeBuildNumber: t?.toString() ?? "" });
    let r = Object.keys(n)
        .filter((e) => null != n[e])
        .map((e) => `${e}: ${n[e]}`)
        .join(", ");
    new w.A().log(`[NATIVE INFO] host ${e}, modules: ${r}, build: ${t}`),
        E.Ay.pauseFrameEvictor(),
        E.Ay.initializeExitHook(),
        E.Ay.initializeWERHandler();
}
if (((0, y.M)(window), __OVERLAY__)) B(o.A.Overlay);
else if (null != window.require && null == window.DiscordNative) B(o.A.OutdatedClient);
else {
    if ((document.addEventListener("scroll", (e) => e.preventDefault()), I.isPlatformEmbedded)) {
        (window.onbeforeunload = () => E.Ay.beforeUnload()),
            E.Ay.on("HELP_OPEN", () => window.open(h.A.getCommunityURL()));
        let e = new v.J_(k, () => E.Ay.purgeMemory());
        E.Ay.on("MAIN_WINDOW_BLUR", () => {
            e.delay(), E.Ay.setFocused(!1), (0, S.XC)(window, !1);
        }),
            E.Ay.on("MAIN_WINDOW_FOCUS", () => {
                e.cancel(), E.Ay.setFocused(!0), (0, S.XC)(window, !0);
            }),
            E.Ay.on("MAIN_WINDOW_PATH", V),
            E.Ay.on("MAIN_WINDOW_HIDDEN", () => {
                (0, S.R)(window);
            });
    }
    d.A.initialize(),
        l.A.initialize(),
        u.A.init(),
        f.A.init(),
        L.A.init(),
        c.A.initialize(),
        m.A.initialize(),
        g.A.initialize(),
        _.n(),
        (0, O.wP)(),
        B(o.A.App);
}
