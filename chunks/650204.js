var i,
    a,
    s,
    o,
    l,
    u,
    c,
    d = r(610138);
var f = r(216116);
var _ = r(78328);
var h = r(815648);
var p = r(47120);
var m = r(177593);
var g = r(200651);
r(92138), r(192379);
var E = r(616254),
    v = r(512722),
    I = r.n(v),
    T = r(832037),
    b = r(749349),
    y = r(464253),
    S = r(485359),
    A = r(395727),
    N = r(471638),
    C = r(585275),
    R = r(960048),
    O = r(63063),
    D = r(240849),
    L = r(998502),
    x = r(513566),
    w = r(534713),
    P = r(358085),
    M = r(703656),
    k = r(284737),
    U = r(473159),
    B = r(846519),
    G = r(579806),
    Z = r(896361),
    F = r(892254);
r(390524);
var V = r(857192),
    j = r(395188),
    H = r(44163),
    Y = r(710845),
    W = r(70956);
V.default.cssDebuggingEnabled && r.e('57779').then(r.bind(r, 953758));
let K = 5 * W.Z.Millis.MINUTE,
    z = document.getElementById('app-mount');
I()(null != z, 'Could not find app-mount'), (z.className = __OVERLAY__ ? '' : j.appMount);
let q = (0, E.createRoot)(z),
    Q = { '/oauth2/authorize': w.Z };
function X(e, n, r) {
    var i;
    let a = null != r ? new URLSearchParams(r) : null;
    if (null === (i = Q[n]) || void 0 === i ? !void 0 : !i.call(Q, a)) (0, M.uL)(n);
}
let J = (e) => q.render((0, g.jsx)(F.Z, { children: (0, g.jsx)(Z.Z, { children: (0, g.jsx)(e, {}) }) }));
if (null != G.Z) {
    null === (i = G.Z.setUncaughtExceptionHandler) ||
        void 0 === i ||
        i.call(G.Z, (e, n) => {
            setImmediate(() => {
                throw (R.Z.captureCrash(e), e);
            });
        });
    let e = null === (a = (s = G.Z.remoteApp).getVersion) || void 0 === a ? void 0 : a.call(s),
        n = null === (o = (l = G.Z.remoteApp).getBuildNumber) || void 0 === o ? void 0 : o.call(l),
        r = {};
    null != G.Z.remoteApp.getModuleVersions && (r = G.Z.remoteApp.getModuleVersions()),
        R.Z.setExtra({
            hostVersion: e,
            moduleVersions: r
        }),
        R.Z.setTags({ nativeBuildNumber: null == n ? void 0 : n.toString() });
    let d = Object.keys(r)
        .filter((e) => null != r[e])
        .map((e) => ''.concat(e, ': ').concat(r[e]))
        .join(', ');
    new Y.Z().log('[NATIVE INFO] host '.concat(e, ', modules: ').concat(d, ', build: ').concat(n));
    let f = null === (u = (c = G.Z.remoteApp).getReleaseChannel) || void 0 === u ? void 0 : u.call(c);
    ('canary' === f || 'development' === f) && L.ZP.pauseFrameEvictor(), L.ZP.initializeExitHook(), L.ZP.initializeWERHandler();
}
if (((0, U.O)(window), __OVERLAY__)) J(T.Z.Overlay);
else if (null != window.require && null == window.DiscordNative) J(T.Z.OutdatedClient);
else {
    if ((document.addEventListener('scroll', (e) => e.preventDefault()), P.isPlatformEmbedded)) {
        (window.onbeforeunload = () => L.ZP.beforeUnload()), L.ZP.on('HELP_OPEN', () => window.open(O.Z.getCommunityURL()));
        let e = new B.sW(K, () => L.ZP.purgeMemory());
        L.ZP.on('MAIN_WINDOW_BLUR', () => {
            e.delay(), L.ZP.setFocused(!1), (0, k.T_)(window, !1);
        }),
            L.ZP.on('MAIN_WINDOW_FOCUS', () => {
                e.cancel(), L.ZP.setFocused(!0), (0, k.T_)(window, !0);
            }),
            L.ZP.on('MAIN_WINDOW_PATH', X),
            L.ZP.on('MAIN_WINDOW_HIDDEN', () => {
                (0, k.al)(window);
            });
    }
    A.Z.initialize(), b.Z.initialize(), y.Z.init(), C.Z.init(), H.Z.init(), S.Z.initialize(), D.Z.initialize(), x.Z.initialize(), N.j(), J(T.Z.App);
}
