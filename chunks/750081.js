(n.r(t), n(65234), n(111804), n(490233), n(97749), n(388685), n(358797));
var r,
    i,
    o,
    a,
    s,
    l,
    c,
    u = n(255367);
(n(92138), n(73800));
var d = n(155458),
    f = n(512722),
    _ = n.n(f),
    p = n(832037),
    h = n(749349),
    m = n(464253),
    g = n(485359),
    E = n(395727),
    b = n(471638),
    y = n(585275),
    O = n(960048),
    v = n(63063),
    I = n(240849),
    T = n(998502),
    S = n(513566),
    A = n(534713),
    N = n(358085),
    C = n(703656),
    R = n(284737),
    P = n(473159),
    w = n(846519),
    D = n(579806),
    L = n(896361),
    x = n(746106),
    M = n(177692);
n(635153);
var k = n(857192),
    j = n(891086),
    U = n(44163),
    G = n(710845),
    B = n(70956),
    Z = n(378799);
(k.default.cssDebuggingEnabled && n.e('34600').then(n.bind(n, 671996)), (0, Z.s5)());
let F = 5 * B.Z.Millis.MINUTE,
    V = document.getElementById('app-mount');
(_()(null != V, 'Could not find app-mount'), (V.className = __OVERLAY__ ? '' : j.appMount));
let H = (0, d.createRoot)(V),
    Y = { '/oauth2/authorize': A.Z };
function W(e, t, n) {
    var r;
    let i = null != n ? new URLSearchParams(n) : null;
    (null != (r = Y[t]) && r.call(Y, i)) || (0, C.uL)(t);
}
let K = (e) => H.render((0, u.jsx)(x.w, { children: (0, u.jsx)(L.Z, { children: (0, u.jsx)(e, {}) }) }));
if (null != D.Z) {
    (null == (r = D.Z.setUncaughtExceptionHandler) ||
        r.call(D.Z, (e, t) => {
            setImmediate(() => {
                throw (O.Z.captureCrash(e), e);
            });
        }),
        T.ZP.appLoaded());
    let e = null == (i = (o = D.Z.remoteApp).getVersion) ? void 0 : i.call(o),
        t = null == (a = (s = D.Z.remoteApp).getBuildNumber) ? void 0 : a.call(s),
        n = {};
    (null != D.Z.remoteApp.getModuleVersions && (n = D.Z.remoteApp.getModuleVersions()),
        O.Z.setExtra({
            hostVersion: e,
            moduleVersions: n
        }),
        O.Z.setTags({ nativeBuildNumber: null == t ? void 0 : t.toString() }));
    let u = Object.keys(n)
        .filter((e) => null != n[e])
        .map((e) => ''.concat(e, ': ').concat(n[e]))
        .join(', ');
    new G.Z().log('[NATIVE INFO] host '.concat(e, ', modules: ').concat(u, ', build: ').concat(t));
    let d = null == (l = (c = D.Z.remoteApp).getReleaseChannel) ? void 0 : l.call(c);
    (('ptb' === d || 'canary' === d || 'development' === d) && T.ZP.pauseFrameEvictor(), T.ZP.initializeExitHook(), T.ZP.initializeWERHandler());
}
if (((0, P.O)(window), __OVERLAY__)) K(p.Z.Overlay);
else if (null != window.require && null == window.DiscordNative) K(p.Z.OutdatedClient);
else {
    if ((document.addEventListener('scroll', (e) => e.preventDefault()), N.isPlatformEmbedded)) {
        ((window.onbeforeunload = () => T.ZP.beforeUnload()), T.ZP.on('HELP_OPEN', () => window.open(v.Z.getCommunityURL())));
        let e = new w.sW(F, () => T.ZP.purgeMemory());
        (T.ZP.on('MAIN_WINDOW_BLUR', () => {
            (e.delay(), T.ZP.setFocused(!1), (0, R.T_)(window, !1));
        }),
            T.ZP.on('MAIN_WINDOW_FOCUS', () => {
                (e.cancel(), T.ZP.setFocused(!0), (0, R.T_)(window, !0));
            }),
            T.ZP.on('MAIN_WINDOW_PATH', W),
            T.ZP.on('MAIN_WINDOW_HIDDEN', () => {
                (0, R.al)(window);
            }));
    }
    (E.Z.initialize(), h.Z.initialize(), m.Z.init(), y.Z.init(), U.Z.init(), g.Z.initialize(), I.Z.initialize(), S.Z.initialize(), b.j(), (0, M.Mn)(), K(p.Z.App));
}
