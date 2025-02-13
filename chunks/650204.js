n(610138), n(216116), n(78328), n(815648), n(47120), n(177593);
var i,
    r,
    a,
    s,
    o,
    l,
    u,
    c = n(200651);
n(92138), n(192379);
var d = n(616254),
    f = n(512722),
    _ = n.n(f),
    p = n(832037),
    h = n(749349),
    m = n(464253),
    g = n(485359),
    E = n(395727),
    v = n(471638),
    y = n(585275),
    I = n(960048),
    T = n(63063),
    b = n(240849),
    S = n(998502),
    A = n(513566),
    N = n(534713),
    C = n(358085),
    R = n(703656),
    O = n(284737),
    D = n(473159),
    L = n(846519),
    x = n(579806),
    P = n(896361),
    w = n(892254);
n(544615);
var M = n(857192),
    k = n(26413),
    U = n(44163),
    G = n(710845),
    B = n(70956);
M.default.cssDebuggingEnabled && n.e('7532').then(n.bind(n, 491008));
let Z = 5 * B.Z.Millis.MINUTE,
    F = document.getElementById('app-mount');
_()(null != F, 'Could not find app-mount'), (F.className = __OVERLAY__ ? '' : k.appMount);
let V = (0, d.createRoot)(F),
    j = { '/oauth2/authorize': N.Z };
function H(e, t, n) {
    var i;
    let r = null != n ? new URLSearchParams(n) : null;
    (null === (i = j[t]) || void 0 === i || !i.call(j, r)) && (0, R.uL)(t);
}
let Y = (e) => V.render((0, c.jsx)(w.Z, { children: (0, c.jsx)(P.Z, { children: (0, c.jsx)(e, {}) }) }));
if (null != x.Z) {
    null === (i = x.Z.setUncaughtExceptionHandler) ||
        void 0 === i ||
        i.call(x.Z, (e, t) => {
            setImmediate(() => {
                throw (I.Z.captureCrash(e), e);
            });
        }),
        S.ZP.appLoaded();
    let e = null === (r = (a = x.Z.remoteApp).getVersion) || void 0 === r ? void 0 : r.call(a),
        t = null === (s = (o = x.Z.remoteApp).getBuildNumber) || void 0 === s ? void 0 : s.call(o),
        n = {};
    null != x.Z.remoteApp.getModuleVersions && (n = x.Z.remoteApp.getModuleVersions()),
        I.Z.setExtra({
            hostVersion: e,
            moduleVersions: n
        }),
        I.Z.setTags({ nativeBuildNumber: null == t ? void 0 : t.toString() });
    let c = Object.keys(n)
        .filter((e) => null != n[e])
        .map((e) => ''.concat(e, ': ').concat(n[e]))
        .join(', ');
    new G.Z().log('[NATIVE INFO] host '.concat(e, ', modules: ').concat(c, ', build: ').concat(t));
    let d = null === (l = (u = x.Z.remoteApp).getReleaseChannel) || void 0 === l ? void 0 : l.call(u);
    ('canary' === d || 'development' === d) && S.ZP.pauseFrameEvictor(), S.ZP.initializeExitHook(), S.ZP.initializeWERHandler();
}
if (((0, D.O)(window), __OVERLAY__)) Y(p.Z.Overlay);
else if (null != window.require && null == window.DiscordNative) Y(p.Z.OutdatedClient);
else {
    if ((document.addEventListener('scroll', (e) => e.preventDefault()), C.isPlatformEmbedded)) {
        (window.onbeforeunload = () => S.ZP.beforeUnload()), S.ZP.on('HELP_OPEN', () => window.open(T.Z.getCommunityURL()));
        let e = new L.sW(Z, () => S.ZP.purgeMemory());
        S.ZP.on('MAIN_WINDOW_BLUR', () => {
            e.delay(), S.ZP.setFocused(!1), (0, O.T_)(window, !1);
        }),
            S.ZP.on('MAIN_WINDOW_FOCUS', () => {
                e.cancel(), S.ZP.setFocused(!0), (0, O.T_)(window, !0);
            }),
            S.ZP.on('MAIN_WINDOW_PATH', H),
            S.ZP.on('MAIN_WINDOW_HIDDEN', () => {
                (0, O.al)(window);
            });
    }
    E.Z.initialize(), h.Z.initialize(), m.Z.init(), y.Z.init(), U.Z.init(), g.Z.initialize(), b.Z.initialize(), A.Z.initialize(), v.j(), Y(p.Z.App);
}
