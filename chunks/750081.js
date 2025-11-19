n.r(t), n(65234), n(111804), n(490233), n(97749), n(388685), n(358797);
var r,
    i,
    a,
    o,
    s,
    l = n(54381);
n(92138), n(473749);
var c = n(748721),
    u = n(512722),
    d = n.n(u),
    f = n(832037),
    _ = n(749349),
    p = n(464253),
    h = n(485359),
    m = n(395727),
    g = n(471638),
    E = n(766646),
    b = n(960048),
    y = n(63063),
    O = n(240849),
    v = n(998502),
    I = n(513566),
    T = n(534713),
    S = n(358085),
    A = n(703656),
    C = n(284737),
    N = n(473159),
    R = n(846519),
    P = n(579806),
    D = n(896361),
    w = n(746106),
    L = n(177692);
n(987528);
var x = n(857192),
    M = n(395715),
    k = n(44163),
    j = n(710845),
    U = n(70956),
    G = n(378799),
    B = n(758731);
x.default.cssDebuggingEnabled && n.e("64535").then(n.bind(n, 583949)), (0, G.s5)();
let Z = 5 * U.Z.Millis.MINUTE,
    F = document.getElementById("app-mount");
d()(null != F, "Could not find app-mount"), (F.className = __OVERLAY__ ? "" : M.appMount);
let V = (0, c.createRoot)(F),
    H = {
        "/oauth2/authorize": T.Z,
        "/one-time": B.Z,
    };
function Y(e, t, n) {
    var r;
    let i = null != n ? new URLSearchParams(n) : null;
    (null != (r = H[t]) && r.call(H, i)) || (0, A.uL)(t);
}
let W = (e) => V.render((0, l.jsx)(w.w, { children: (0, l.jsx)(D.Z, { children: (0, l.jsx)(e, {}) }) }));
if (null != P.Z) {
    null == (r = P.Z.setUncaughtExceptionHandler) ||
        r.call(P.Z, (e, t) => {
            setImmediate(() => {
                throw (b.Z.captureCrash(e), e);
            });
        }),
        v.ZP.appLoaded();
    let e = null == (i = (a = P.Z.remoteApp).getVersion) ? void 0 : i.call(a),
        t = null == (o = (s = P.Z.remoteApp).getBuildNumber) ? void 0 : o.call(s),
        n = {};
    null != P.Z.remoteApp.getModuleVersions && (n = P.Z.remoteApp.getModuleVersions()),
        b.Z.setExtra({
            hostVersion: e,
            moduleVersions: n,
        }),
        b.Z.setTags({ nativeBuildNumber: null == t ? void 0 : t.toString() });
    let l = Object.keys(n)
        .filter((e) => null != n[e])
        .map((e) => "".concat(e, ": ").concat(n[e]))
        .join(", ");
    new j.Z().log("[NATIVE INFO] host ".concat(e, ", modules: ").concat(l, ", build: ").concat(t)),
        v.ZP.pauseFrameEvictor(),
        v.ZP.initializeExitHook(),
        v.ZP.initializeWERHandler();
}
if (((0, N.O)(window), __OVERLAY__)) W(f.Z.Overlay);
else if (null != window.require && null == window.DiscordNative) W(f.Z.OutdatedClient);
else {
    if ((document.addEventListener("scroll", (e) => e.preventDefault()), S.isPlatformEmbedded)) {
        (window.onbeforeunload = () => v.ZP.beforeUnload()),
            v.ZP.on("HELP_OPEN", () => window.open(y.Z.getCommunityURL()));
        let e = new R.sW(Z, () => v.ZP.purgeMemory());
        v.ZP.on("MAIN_WINDOW_BLUR", () => {
            e.delay(), v.ZP.setFocused(!1), (0, C.T_)(window, !1);
        }),
            v.ZP.on("MAIN_WINDOW_FOCUS", () => {
                e.cancel(), v.ZP.setFocused(!0), (0, C.T_)(window, !0);
            }),
            v.ZP.on("MAIN_WINDOW_PATH", Y),
            v.ZP.on("MAIN_WINDOW_HIDDEN", () => {
                (0, C.al)(window);
            });
    }
    m.Z.initialize(),
        _.Z.initialize(),
        p.Z.init(),
        E.Z.init(),
        k.Z.init(),
        h.Z.initialize(),
        O.Z.initialize(),
        I.Z.initialize(),
        g.j(),
        (0, L.Mn)(),
        W(f.Z.App);
}
