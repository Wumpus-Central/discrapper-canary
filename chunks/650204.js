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
    p = n.n(f),
    _ = n(832037),
    h = n(749349),
    m = n(464253),
    g = n(485359),
    E = n(395727),
    v = n(471638),
    b = n(585275),
    y = n(960048),
    O = n(63063),
    S = n(240849),
    I = n(998502),
    T = n(513566),
    N = n(534713),
    A = n(358085),
    C = n(703656),
    R = n(284737),
    P = n(473159),
    w = n(846519),
    D = n(579806),
    x = n(896361),
    L = n(892254);
n(422859);
var M = n(857192),
    k = n(195309),
    j = n(44163),
    U = n(710845),
    G = n(70956);
M.default.cssDebuggingEnabled && n.e('62195').then(n.bind(n, 640646));
let B = 5 * G.Z.Millis.MINUTE,
    Z = document.getElementById('app-mount');
p()(null != Z, 'Could not find app-mount'), (Z.className = __OVERLAY__ ? '' : k.appMount);
let F = (0, d.createRoot)(Z),
    V = { '/oauth2/authorize': N.Z };
function H(e, t, n) {
    var r;
    let i = null != n ? new URLSearchParams(n) : null;
    (null === (r = V[t]) || void 0 === r || !r.call(V, i)) && (0, C.uL)(t);
}
let W = (e) => F.render((0, u.jsx)(L.Z, { children: (0, u.jsx)(x.Z, { children: (0, u.jsx)(e, {}) }) }));
if (null != D.Z) {
    null === (r = D.Z.setUncaughtExceptionHandler) ||
        void 0 === r ||
        r.call(D.Z, (e, t) => {
            setImmediate(() => {
                throw (y.Z.captureCrash(e), e);
            });
        }),
        I.ZP.appLoaded();
    let e = null === (i = (o = D.Z.remoteApp).getVersion) || void 0 === i ? void 0 : i.call(o),
        t = null === (a = (s = D.Z.remoteApp).getBuildNumber) || void 0 === a ? void 0 : a.call(s),
        n = {};
    null != D.Z.remoteApp.getModuleVersions && (n = D.Z.remoteApp.getModuleVersions()),
        y.Z.setExtra({
            hostVersion: e,
            moduleVersions: n
        }),
        y.Z.setTags({ nativeBuildNumber: null == t ? void 0 : t.toString() });
    let u = Object.keys(n)
        .filter((e) => null != n[e])
        .map((e) => ''.concat(e, ': ').concat(n[e]))
        .join(', ');
    new U.Z().log('[NATIVE INFO] host '.concat(e, ', modules: ').concat(u, ', build: ').concat(t));
    let d = null === (l = (c = D.Z.remoteApp).getReleaseChannel) || void 0 === l ? void 0 : l.call(c);
    ('canary' === d || 'development' === d) && I.ZP.pauseFrameEvictor(), I.ZP.initializeExitHook(), I.ZP.initializeWERHandler();
}
if (((0, P.O)(window), __OVERLAY__)) W(_.Z.Overlay);
else if (null != window.require && null == window.DiscordNative) W(_.Z.OutdatedClient);
else {
    if ((document.addEventListener('scroll', (e) => e.preventDefault()), A.isPlatformEmbedded)) {
        (window.onbeforeunload = () => I.ZP.beforeUnload()), I.ZP.on('HELP_OPEN', () => window.open(O.Z.getCommunityURL()));
        let e = new w.sW(B, () => I.ZP.purgeMemory());
        I.ZP.on('MAIN_WINDOW_BLUR', () => {
            e.delay(), I.ZP.setFocused(!1), (0, R.T_)(window, !1);
        }),
            I.ZP.on('MAIN_WINDOW_FOCUS', () => {
                e.cancel(), I.ZP.setFocused(!0), (0, R.T_)(window, !0);
            }),
            I.ZP.on('MAIN_WINDOW_PATH', H),
            I.ZP.on('MAIN_WINDOW_HIDDEN', () => {
                (0, R.al)(window);
            });
    }
    E.Z.initialize(), h.Z.initialize(), m.Z.init(), b.Z.init(), j.Z.init(), g.Z.initialize(), S.Z.initialize(), T.Z.initialize(), v.j(), W(_.Z.App);
}
