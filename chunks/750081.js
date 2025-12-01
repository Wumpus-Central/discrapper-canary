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
    p = n(749349),
    _ = n(464253),
    m = n(485359),
    h = n(395727),
    g = n(471638),
    E = n(766646),
    b = n(960048),
    y = n(63063),
    O = n(240849),
    v = n(998502),
    S = n(513566),
    I = n(534713),
    T = n(358085),
    A = n(703656),
    C = n(284737),
    N = n(473159),
    P = n(846519),
    R = n(579806),
    w = n(896361),
    D = n(746106),
    x = n(177692);
n(986484);
var L = n(857192),
    j = n(113752),
    M = n(44163),
    k = n(710845),
    U = n(70956),
    G = n(378799),
    Z = n(758731);
L.default.cssDebuggingEnabled && n.e("95666").then(n.bind(n, 754261)), (0, G.s5)();
let B = 5 * U.Z.Millis.MINUTE,
    F = document.getElementById("app-mount");
d()(null != F, "Could not find app-mount"), (F.className = __OVERLAY__ ? "" : j.appMount);
let V = (0, c.createRoot)(F),
    H = {
        "/oauth2/authorize": I.Z,
        "/one-time": Z.Z,
    };
function Y(e, t, n) {
    var r;
    let i = null != n ? new URLSearchParams(n) : null;
    (null != (r = H[t]) && r.call(H, i)) || (0, A.uL)(t);
}
let W = (e) => V.render((0, l.jsx)(D.w, { children: (0, l.jsx)(w.Z, { children: (0, l.jsx)(e, {}) }) }));
if (null != R.Z) {
    null == (r = R.Z.setUncaughtExceptionHandler) ||
        r.call(R.Z, (e, t) => {
            setImmediate(() => {
                throw (b.Z.captureCrash(e), e);
            });
        }),
        v.ZP.appLoaded();
    let e = null == (i = (a = R.Z.remoteApp).getVersion) ? void 0 : i.call(a),
        t = null == (o = (s = R.Z.remoteApp).getBuildNumber) ? void 0 : o.call(s),
        n = {};
    null != R.Z.remoteApp.getModuleVersions && (n = R.Z.remoteApp.getModuleVersions()),
        b.Z.setExtra({
            hostVersion: e,
            moduleVersions: n,
        }),
        b.Z.setTags({ nativeBuildNumber: null == t ? void 0 : t.toString() });
    let l = Object.keys(n)
        .filter((e) => null != n[e])
        .map((e) => "".concat(e, ": ").concat(n[e]))
        .join(", ");
    new k.Z().log("[NATIVE INFO] host ".concat(e, ", modules: ").concat(l, ", build: ").concat(t)),
        v.ZP.pauseFrameEvictor(),
        v.ZP.initializeExitHook(),
        v.ZP.initializeWERHandler();
}
if (((0, N.O)(window), __OVERLAY__)) W(f.Z.Overlay);
else if (null != window.require && null == window.DiscordNative) W(f.Z.OutdatedClient);
else {
    if ((document.addEventListener("scroll", (e) => e.preventDefault()), T.isPlatformEmbedded)) {
        (window.onbeforeunload = () => v.ZP.beforeUnload()),
            v.ZP.on("HELP_OPEN", () => window.open(y.Z.getCommunityURL()));
        let e = new P.sW(B, () => v.ZP.purgeMemory());
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
    h.Z.initialize(),
        p.Z.initialize(),
        _.Z.init(),
        E.Z.init(),
        M.Z.init(),
        m.Z.initialize(),
        O.Z.initialize(),
        S.Z.initialize(),
        g.j(),
        (0, x.Mn)(),
        W(f.Z.App);
}
