n(610138), n(216116), n(78328), n(815648), n(47120), n(177593);
var i,
    r,
    a,
    s,
    o,
    l,
    u,
    c,
    d = n(200651);
n(92138), n(192379);
var f = n(616254),
    _ = n(512722),
    p = n.n(_),
    h = n(832037),
    m = n(749349),
    g = n(464253),
    E = n(485359),
    v = n(395727),
    y = n(471638),
    I = n(585275),
    T = n(960048),
    b = n(63063),
    S = n(240849),
    A = n(998502),
    N = n(513566),
    C = n(534713),
    R = n(358085),
    O = n(703656),
    D = n(284737),
    x = n(473159),
    L = n(846519),
    P = n(579806),
    w = n(896361),
    M = n(892254);
n(390524);
var k = n(857192),
    U = n(395188),
    G = n(44163),
    B = n(710845),
    Z = n(70956);
k.default.cssDebuggingEnabled && n.e('57779').then(n.bind(n, 953758));
let F = 5 * Z.Z.Millis.MINUTE,
    V = document.getElementById('app-mount');
p()(null != V, 'Could not find app-mount'), (V.className = __OVERLAY__ ? '' : U.appMount);
let j = (0, f.createRoot)(V),
    H = { '/oauth2/authorize': C.Z };
function Y(e, t, n) {
    var i;
    let r = null != n ? new URLSearchParams(n) : null;
    (null === (i = H[t]) || void 0 === i || !i.call(H, r)) && (0, O.uL)(t);
}
let W = (e) => j.render((0, d.jsx)(M.Z, { children: (0, d.jsx)(w.Z, { children: (0, d.jsx)(e, {}) }) }));
if (null != P.Z) {
    null === (i = P.Z.setUncaughtExceptionHandler) ||
        void 0 === i ||
        i.call(P.Z, (e, t) => {
            setImmediate(() => {
                throw (T.Z.captureCrash(e), e);
            });
        }),
        null === (r = P.Z.setWebAppLoaded) || void 0 === r || r.call(P.Z);
    let e = null === (a = (s = P.Z.remoteApp).getVersion) || void 0 === a ? void 0 : a.call(s),
        t = null === (o = (l = P.Z.remoteApp).getBuildNumber) || void 0 === o ? void 0 : o.call(l),
        n = {};
    null != P.Z.remoteApp.getModuleVersions && (n = P.Z.remoteApp.getModuleVersions()),
        T.Z.setExtra({
            hostVersion: e,
            moduleVersions: n
        }),
        T.Z.setTags({ nativeBuildNumber: null == t ? void 0 : t.toString() });
    let d = Object.keys(n)
        .filter((e) => null != n[e])
        .map((e) => ''.concat(e, ': ').concat(n[e]))
        .join(', ');
    new B.Z().log('[NATIVE INFO] host '.concat(e, ', modules: ').concat(d, ', build: ').concat(t));
    let f = null === (u = (c = P.Z.remoteApp).getReleaseChannel) || void 0 === u ? void 0 : u.call(c);
    ('canary' === f || 'development' === f) && A.ZP.pauseFrameEvictor(), A.ZP.initializeExitHook(), A.ZP.initializeWERHandler();
}
if (((0, x.O)(window), __OVERLAY__)) W(h.Z.Overlay);
else if (null != window.require && null == window.DiscordNative) W(h.Z.OutdatedClient);
else {
    if ((document.addEventListener('scroll', (e) => e.preventDefault()), R.isPlatformEmbedded)) {
        (window.onbeforeunload = () => A.ZP.beforeUnload()), A.ZP.on('HELP_OPEN', () => window.open(b.Z.getCommunityURL()));
        let e = new L.sW(F, () => A.ZP.purgeMemory());
        A.ZP.on('MAIN_WINDOW_BLUR', () => {
            e.delay(), A.ZP.setFocused(!1), (0, D.T_)(window, !1);
        }),
            A.ZP.on('MAIN_WINDOW_FOCUS', () => {
                e.cancel(), A.ZP.setFocused(!0), (0, D.T_)(window, !0);
            }),
            A.ZP.on('MAIN_WINDOW_PATH', Y),
            A.ZP.on('MAIN_WINDOW_HIDDEN', () => {
                (0, D.al)(window);
            });
    }
    v.Z.initialize(), m.Z.initialize(), g.Z.init(), I.Z.init(), G.Z.init(), E.Z.initialize(), S.Z.initialize(), N.Z.initialize(), y.j(), W(h.Z.App);
}
