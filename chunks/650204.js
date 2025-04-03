n(610138), n(216116), n(78328), n(815648), n(47120), n(177593);
var r,
    i,
    o,
    a,
    s,
    l,
    c,
    u = n(200651);
n(92138), n(192379);
var d = n(616254),
    f = n(512722),
    _ = n.n(f),
    p = n(832037),
    h = n(749349),
    m = n(464253),
    g = n(485359),
    E = n(395727),
    b = n(471638),
    y = n(585275),
    v = n(960048),
    O = n(63063),
    I = n(240849),
    S = n(998502),
    T = n(513566),
    N = n(534713),
    A = n(358085),
    C = n(703656),
    R = n(284737),
    P = n(473159),
    w = n(846519),
    D = n(579806),
    L = n(896361),
    x = n(746106);
n(635153);
var M = n(857192),
    k = n(177692),
    j = n(891086),
    U = n(44163),
    G = n(710845),
    B = n(70956),
    F = n(378799);
M.default.cssDebuggingEnabled && n.e('34600').then(n.bind(n, 671996)), (0, k.ZP)(), (0, F.s5)();
let V = 5 * B.Z.Millis.MINUTE,
    Z = document.getElementById('app-mount');
_()(null != Z, 'Could not find app-mount'), (Z.className = __OVERLAY__ ? '' : j.appMount);
let H = (0, d.createRoot)(Z),
    W = { '/oauth2/authorize': N.Z };
function Y(e, t, n) {
    var r;
    let i = null != n ? new URLSearchParams(n) : null;
    (null != (r = W[t]) && r.call(W, i)) || (0, C.uL)(t);
}
let K = (e) => H.render((0, u.jsx)(x.w, { children: (0, u.jsx)(L.Z, { children: (0, u.jsx)(e, {}) }) }));
if (null != D.Z) {
    null == (r = D.Z.setUncaughtExceptionHandler) ||
        r.call(D.Z, (e, t) => {
            setImmediate(() => {
                throw (v.Z.captureCrash(e), e);
            });
        }),
        S.ZP.appLoaded();
    let e = null == (i = (o = D.Z.remoteApp).getVersion) ? void 0 : i.call(o),
        t = null == (a = (s = D.Z.remoteApp).getBuildNumber) ? void 0 : a.call(s),
        n = {};
    null != D.Z.remoteApp.getModuleVersions && (n = D.Z.remoteApp.getModuleVersions()),
        v.Z.setExtra({
            hostVersion: e,
            moduleVersions: n
        }),
        v.Z.setTags({ nativeBuildNumber: null == t ? void 0 : t.toString() });
    let u = Object.keys(n)
        .filter((e) => null != n[e])
        .map((e) => ''.concat(e, ': ').concat(n[e]))
        .join(', ');
    new G.Z().log('[NATIVE INFO] host '.concat(e, ', modules: ').concat(u, ', build: ').concat(t));
    let d = null == (l = (c = D.Z.remoteApp).getReleaseChannel) ? void 0 : l.call(c);
    ('canary' === d || 'development' === d) && S.ZP.pauseFrameEvictor(), S.ZP.initializeExitHook(), S.ZP.initializeWERHandler();
}
if (((0, P.O)(window), __OVERLAY__)) K(p.Z.Overlay);
else if (null != window.require && null == window.DiscordNative) K(p.Z.OutdatedClient);
else {
    if ((document.addEventListener('scroll', (e) => e.preventDefault()), A.isPlatformEmbedded)) {
        (window.onbeforeunload = () => S.ZP.beforeUnload()), S.ZP.on('HELP_OPEN', () => window.open(O.Z.getCommunityURL()));
        let e = new w.sW(V, () => S.ZP.purgeMemory());
        S.ZP.on('MAIN_WINDOW_BLUR', () => {
            e.delay(), S.ZP.setFocused(!1), (0, R.T_)(window, !1);
        }),
            S.ZP.on('MAIN_WINDOW_FOCUS', () => {
                e.cancel(), S.ZP.setFocused(!0), (0, R.T_)(window, !0);
            }),
            S.ZP.on('MAIN_WINDOW_PATH', Y),
            S.ZP.on('MAIN_WINDOW_HIDDEN', () => {
                (0, R.al)(window);
            });
    }
    E.Z.initialize(), h.Z.initialize(), m.Z.init(), y.Z.init(), U.Z.init(), g.Z.initialize(), I.Z.initialize(), T.Z.initialize(), b.j(), K(p.Z.App);
}
