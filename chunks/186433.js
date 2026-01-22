n.r(t), n(896048), n(680155), n(323874), n(14289), n(35956), n(142703);
var r,
    i,
    a,
    s,
    o,
    l = n(627968);
n(140595), n(64700);
var c = n(507240),
    u = n(284009),
    d = n.n(u),
    f = n(999212),
    p = n(242120),
    _ = n(716680),
    h = n(908379),
    m = n(46460),
    g = n(557042),
    E = n(8917),
    b = n(728458),
    y = n(975571),
    O = n(769341),
    A = n(837921),
    v = n(763685),
    S = n(184849),
    I = n(723702),
    T = n(976860),
    C = n(350723),
    N = n(913934),
    R = n(451988),
    w = n(77729),
    P = n(772432),
    D = n(975616),
    x = n(617590),
    L = n(111162),
    j = n(769253),
    M = n(639723),
    k = n(626584),
    U = n(927813),
    G = n(316501),
    V = n(338816);
L.default.cssDebuggingEnabled && n.e("42592").then(n.t.bind(n, 196995, 19)), (0, G.pF)();
let F = 5 * U.A.Millis.MINUTE,
    B = document.getElementById("app-mount");
d()(null != B, "Could not find app-mount"), (B.className = __OVERLAY__ ? "" : j.l);
let H = (0, c.createRoot)(B),
    Y = {
        "/oauth2/authorize": S.A,
        "/one-time": V.A,
    };

function W(e, t, n) {
    var r;
    let i = null != n ? new URLSearchParams(n) : null;
    (null != (r = Y[t]) && r.call(Y, i)) || (0, T.pX)(t);
}
let K = (e) =>
    H.render(
        (0, l.jsx)(D.e, {
            children: (0, l.jsx)(P.A, {
                children: (0, l.jsx)(e, {}),
            }),
        }),
    );
if (null != w.A) {
    null == (r = w.A.setUncaughtExceptionHandler) ||
        r.call(w.A, (e, t) => {
            setImmediate(() => {
                throw (b.A.captureCrash(e), e);
            });
        }),
        A.Ay.appLoaded();
    let e = null == (i = (a = w.A.remoteApp).getVersion) ? void 0 : i.call(a),
        t = null == (s = (o = w.A.remoteApp).getBuildNumber) ? void 0 : s.call(o),
        n = {};
    null != w.A.remoteApp.getModuleVersions && (n = w.A.remoteApp.getModuleVersions()),
        b.A.setExtra({
            hostVersion: e,
            moduleVersions: n,
        }),
        b.A.setTags({
            nativeBuildNumber: null == t ? void 0 : t.toString(),
        });
    let l = Object.keys(n)
        .filter((e) => null != n[e])
        .map((e) => "".concat(e, ": ").concat(n[e]))
        .join(", ");
    new k.A().log("[NATIVE INFO] host ".concat(e, ", modules: ").concat(l, ", build: ").concat(t)),
        A.Ay.pauseFrameEvictor(),
        A.Ay.initializeExitHook(),
        A.Ay.initializeWERHandler();
}
if (((0, N.M)(window), __OVERLAY__)) K(f.A.Overlay);
else if (null != window.require && null == window.DiscordNative) K(f.A.OutdatedClient);
else {
    if ((document.addEventListener("scroll", (e) => e.preventDefault()), I.isPlatformEmbedded)) {
        (window.onbeforeunload = () => A.Ay.beforeUnload()),
            A.Ay.on("HELP_OPEN", () => window.open(y.A.getCommunityURL()));
        let e = new R.J_(F, () => A.Ay.purgeMemory());
        A.Ay.on("MAIN_WINDOW_BLUR", () => {
            e.delay(), A.Ay.setFocused(!1), (0, C.XC)(window, !1);
        }),
            A.Ay.on("MAIN_WINDOW_FOCUS", () => {
                e.cancel(), A.Ay.setFocused(!0), (0, C.XC)(window, !0);
            }),
            A.Ay.on("MAIN_WINDOW_PATH", W),
            A.Ay.on("MAIN_WINDOW_HIDDEN", () => {
                (0, C.R)(window);
            });
    }
    m.A.initialize(),
        p.A.initialize(),
        _.A.init(),
        E.A.init(),
        M.A.init(),
        h.A.initialize(),
        O.A.initialize(),
        v.A.initialize(),
        g.n(),
        (0, x.wP)(),
        K(f.A.App);
}
