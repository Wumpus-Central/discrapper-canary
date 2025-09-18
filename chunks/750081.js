n.r(t), n(65234), n(111804), n(490233), n(97749), n(388685), n(358797);
var r,
    i,
    a,
    o,
    s,
    l = n(951288);
n(92138), n(647438);
var c = n(602954),
    u = n(512722),
    d = n.n(u),
    f = n(832037),
    _ = n(749349),
    p = n(464253),
    h = n(485359),
    m = n(395727),
    g = n(471638),
    E = n(585275),
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
    w = n(896361),
    D = n(746106),
    x = n(177692);
n(986484);
var L = n(857192),
    j = n(113752),
    M = n(44163),
    k = n(710845),
    U = n(70956),
    G = n(378799);
L.default.cssDebuggingEnabled && n.e("95666").then(n.bind(n, 754261)), (0, G.s5)();
let B = 5 * U.Z.Millis.MINUTE,
    Z = document.getElementById("app-mount");
d()(null != Z, "Could not find app-mount"), (Z.className = __OVERLAY__ ? "" : j.appMount);
let F = (0, c.createRoot)(Z),
    V = { "/oauth2/authorize": T.Z };
function H(e, t, n) {
    var r;
    let i = null != n ? new URLSearchParams(n) : null;
    (null != (r = V[t]) && r.call(V, i)) || (0, A.uL)(t);
}
let Y = (e) => F.render((0, l.jsx)(D.w, { children: (0, l.jsx)(w.Z, { children: (0, l.jsx)(e, {}) }) }));
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
    new k.Z().log("[NATIVE INFO] host ".concat(e, ", modules: ").concat(l, ", build: ").concat(t)),
        v.ZP.pauseFrameEvictor(),
        v.ZP.initializeExitHook(),
        v.ZP.initializeWERHandler();
}
if (((0, N.O)(window), __OVERLAY__)) Y(f.Z.Overlay);
else if (null != window.require && null == window.DiscordNative) Y(f.Z.OutdatedClient);
else {
    if ((document.addEventListener("scroll", (e) => e.preventDefault()), S.isPlatformEmbedded)) {
        (window.onbeforeunload = () => v.ZP.beforeUnload()),
            v.ZP.on("HELP_OPEN", () => window.open(y.Z.getCommunityURL()));
        let e = new R.sW(B, () => v.ZP.purgeMemory());
        v.ZP.on("MAIN_WINDOW_BLUR", () => {
            e.delay(), v.ZP.setFocused(!1), (0, C.T_)(window, !1);
        }),
            v.ZP.on("MAIN_WINDOW_FOCUS", () => {
                e.cancel(), v.ZP.setFocused(!0), (0, C.T_)(window, !0);
            }),
            v.ZP.on("MAIN_WINDOW_PATH", H),
            v.ZP.on("MAIN_WINDOW_HIDDEN", () => {
                (0, C.al)(window);
            });
    }
    m.Z.initialize(),
        _.Z.initialize(),
        p.Z.init(),
        E.Z.init(),
        M.Z.init(),
        h.Z.initialize(),
        O.Z.initialize(),
        I.Z.initialize(),
        g.j(),
        (0, x.Mn)(),
        Y(f.Z.App);
}
