let i, r, a, l;
n.r(t), n.d(t, { default: () => Is });
var s,
    o,
    d,
    c,
    u,
    A,
    h,
    _,
    E = n(627968),
    p = n(64700),
    m = n(492462),
    I = n(873263),
    g = n(156828),
    C = n(17928),
    T = n(192308),
    f = n(830215),
    N = n(258057),
    S = n(869038),
    L = n(686956),
    O = n(956793),
    y = n(271866),
    b = n(607399),
    v = n(197111),
    P = n(10088),
    R = n(495544),
    D = n(652215);
let w = b.Fr || b.v1;
function M(e) {
    let { children: t, deepLinkType: n, path: i, paramsBuilder: r, search: a } = e,
        l = (0, C.bG)([R.default], () => R.default.getFingerprint() ?? R.default.getId()),
        s = (0, C.bG)([R.default], () => R.default.getInstallationForTracking()),
        o = (0, C.bG)([P.A], () => P.A.getState(i), [i]),
        d = p.useMemo(
            () =>
                null == r
                    ? { path: i, fingerprint: l, installationId: s, search: a }
                    : r({ path: i, fingerprint: l, search: a, installationId: s }),
            [i, r, l, s, a],
        );
    return (
        p.useEffect(() => {
            w || (null == o && v.A.openNativeAppModal(i, D.e$_.DEEP_LINK, { type: n, params: d }));
        }, [o, i, d, n]),
        t
    );
}
var x = n(854378),
    U = n(723702),
    G = n(985018),
    j = n(370227);
let k = n(843020);
function V(e) {
    let { children: t } = e,
        n = (0, C.bG)([P.A], () => P.A.getHighestState());
    return (0, U.isDesktop)() || n !== D.fAW.OPENING
        ? (0, U.isDesktop)() || n !== D.fAW.OPEN
            ? t
            : (0, E.jsxs)(E.Fragment, {
                  children: [
                      (0, E.jsx)("img", { className: j.Lq, src: k, alt: "" }),
                      (0, E.jsx)("div", {
                          className: j.kL,
                          children: (0, E.jsxs)(x.Ay, {
                              children: [
                                  (0, E.jsx)(x.hE, { className: j.Ns, children: G.intl.string(G.t.csrAMJ) }),
                                  (0, E.jsx)(x.tK, { children: G.intl.string(G.t.ghBJz9) }),
                              ],
                          }),
                      }),
                  ],
              })
        : (0, E.jsxs)(E.Fragment, {
              children: [
                  (0, E.jsx)("img", { className: j.Lq, src: k, alt: "" }),
                  (0, E.jsx)("div", {
                      className: j.kL,
                      children: (0, E.jsxs)(x.Ay, {
                          children: [
                              (0, E.jsx)(x.hE, { children: G.intl.string(G.t["Z+hCVU"]) }),
                              (0, E.jsx)(x.CK, {}),
                          ],
                      }),
                  }),
              ],
          });
}
function F(e) {
    function t(t) {
        return (0, E.jsx)(V, { children: (0, E.jsx)(e, { ...t }, "deeplink-wrapper") });
    }
    return (t.displayName = `Deeplink(${e.displayName ?? e.name ?? "<Unknown>"})`), t;
}
var H = n(775602),
    B = n(502229),
    Y = n(836753),
    $ = n(196492),
    z = n(869003),
    q = n(315206),
    K = n(892491),
    W = n(228366),
    X = n(272355),
    Z = n(36149),
    Q = n(381689),
    J = n(260509),
    ee = n(309010),
    et = n(967198),
    en = n(323073),
    ei = n(329972),
    er = n(784578),
    ea = n(204925),
    el = n(835002);
class es extends X.A {
    _initialize() {
        W.h.subscribe("CONNECTION_OPEN", this.handleConnectionOpen),
            W.h.subscribe("CHANNEL_SELECT", this.handleChannelSelect),
            W.h.subscribe("AGE_GATE_MODAL_OPEN", this.handleAgeGateModalOpen),
            W.h.subscribe("AGE_GATE_MODAL_CLOSE", this.handleAgeGateModalClose),
            W.h.subscribe("AGE_GATE_SUCCESS_MODAL_OPEN", this.handleAgeGateSuccess),
            W.h.subscribe("AGE_GATE_FAILURE_MODAL_OPEN", this.handleAgeGateFailure),
            W.h.subscribe("GUILD_UPDATE", this.handleGuildUpdate);
    }
    _terminate() {
        W.h.unsubscribe("CONNECTION_OPEN", this.handleConnectionOpen),
            W.h.unsubscribe("CHANNEL_SELECT", this.handleChannelSelect),
            W.h.unsubscribe("AGE_GATE_MODAL_OPEN", this.handleAgeGateModalOpen),
            W.h.unsubscribe("AGE_GATE_MODAL_CLOSE", this.handleAgeGateModalClose),
            W.h.unsubscribe("AGE_GATE_SUCCESS_MODAL_OPEN", this.handleAgeGateSuccess),
            W.h.unsubscribe("AGE_GATE_FAILURE_MODAL_OPEN", this.handleAgeGateFailure),
            W.h.unsubscribe("GUILD_UPDATE", this.handleGuildUpdate);
    }
    handleChannelSelect(e) {
        let { guildId: t, channelId: n } = e;
        (0, en.kK)(t, n);
    }
    handleConnectionOpen() {
        let e = et.A.getGuildId(),
            t = ee.A.getChannelId();
        (0, en.kK)(e, t);
    }
    handleAgeGateModalOpen(e) {
        let { source: t } = e;
        (0, T.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([
                    n.e("41909"),
                    n.e("20287"),
                    n.e("28367"),
                    n.e("82758"),
                    n.e("57641"),
                    n.e("10136"),
                ]).then(n.bind(n, 776971));
                return (n) => (0, E.jsx)(e, { source: t, ...n });
            },
            { modalKey: ea.Uy, onCloseRequest: D.tEg, backdropStyle: (0, Z.lU)(t) ? K.F.LIGHTBOX : void 0 },
        );
    }
    handleAgeGateSuccess() {
        Q.A.showSuccessToast(el.OB.EXISTING_USER_AGE_GATE_SUCCESS), (0, T.closeModal)(ea.Uy);
    }
    handleAgeGateFailure(e) {
        let { underageMessage: t } = e;
        (0, T.updateModal)(ea.Uy, (e) => (0, E.jsx)(er.default, { underageMessage: t, ...e }));
    }
    handleAgeGateModalClose() {
        (0, T.closeModal)(ea.Uy);
    }
    handleGuildUpdate(e) {
        let { guild: t } = e,
            n = et.A.getGuildId();
        if (
            null != n &&
            t.id === n &&
            (t.owner_configured_content_level === D.ftr.AGE_RESTRICTED ||
                ((0, ei.v)("age_gate_manager") && J.uA.has(t.nsfw_level)))
        )
            return void (0, en.kK)(t.id, null);
    }
}
let eo = new es();
var ed = n(451988),
    ec = n(954571),
    eu = n(927813),
    eA = n(38405),
    eh = n(881615),
    e_ = n(789999);
let eE = R.default.getToken();
class ep extends X.A {
    focusedOrForegrounded = (0, e_.R)();
    heartbeatInterval = new ed.IX();
    schedulerStarted = !1;
    lastHeartbeatTimestamp = 0;
    _initialize() {
        (this.focusedOrForegrounded = (0, e_.R)()),
            R.default.addChangeListener(this.handleAuthenticationChange),
            W.h.subscribe("WINDOW_FOCUS", this.handleWindowFocus),
            W.h.subscribe("APP_STATE_UPDATE", this.handleAppStateUpdate),
            W.h.subscribe("QUESTS_ENROLL_SUCCESS", this.handleEnrollmentSuccess),
            W.h.subscribe("LOGIN_SUCCESS", this.handleLogin),
            W.h.subscribe("LOGOUT", this.handleLogout),
            this.scheduleHeartbeatTracking();
    }
    _terminate() {
        this.stopAnalyticHeartbeat(),
            R.default.removeChangeListener(this.handleAuthenticationChange),
            W.h.unsubscribe("WINDOW_FOCUS", this.handleWindowFocus),
            W.h.unsubscribe("APP_STATE_UPDATE", this.handleAppStateUpdate),
            W.h.unsubscribe("QUESTS_ENROLL_SUCCESS", this.handleEnrollmentSuccess),
            W.h.unsubscribe("LOGIN_SUCCESS", this.handleLogin),
            W.h.unsubscribe("LOGOUT", this.handleLogout);
    }
    maybeStartHeartbeat = () => {
        this.heartbeatInterval.isStarted() ||
            (this.trackHeartbeat(), this.heartbeatInterval.start(5 * eu.A.Millis.MINUTE, this.trackHeartbeat));
    };
    startAnalyticHeartbeat = () => {
        this.schedulerStarted ||
            ((this.schedulerStarted = !0),
            eA.A.addBreadcrumb({ category: "ad", message: "Starting ad session heartbeat" }),
            this.maybeStartHeartbeat());
    };
    trackHeartbeat = (() => {
        var e = this;
        return function () {
            let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (!e.schedulerStarted && !t) {
                eA.A.addBreadcrumb({ category: "ad", message: "Ad heartbeat called but scheduler not started" }),
                    e.heartbeatInterval.stop();
                return;
            }
            let n = performance.now(),
                i = n - e.lastHeartbeatTimestamp,
                r = 5 * eu.A.Millis.MINUTE;
            if (!t && e.lastHeartbeatTimestamp > 0 && i < r) return;
            let a = (0, eh.sN)();
            ec.default.track(D.HAw.CLIENT_AD_HEARTBEAT, {
                client_ad_session_id: a.uuid,
                client_heartbeat_initialization_timestamp: a.createdAtTimestamp,
                client_heartbeat_version: 3,
            }),
                (e.lastHeartbeatTimestamp = n);
        };
    })();
    stopAnalyticHeartbeat = (() => {
        var e = this;
        return function () {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "DEFAULT";
            e.schedulerStarted &&
                ((e.schedulerStarted = !1),
                (e.lastHeartbeatTimestamp = 0),
                eA.A.addBreadcrumb({ category: "ad", message: `Stopping ad session heartbeat: ${t}` }),
                e.heartbeatInterval.stop());
        };
    })();
    scheduleHeartbeatTracking = (() => {
        var e = this;
        return function () {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "DEFAULT";
            if (e.focusedOrForegrounded && null != eE)
                try {
                    e.startAnalyticHeartbeat();
                } catch (e) {
                    eA.A.captureException(e);
                }
            else e.stopAnalyticHeartbeat(t);
        };
    })();
    handleLogin = () => {
        this.scheduleHeartbeatTracking(), this.trackHeartbeat(!0);
    };
    handleLogout = () => {
        this.stopAnalyticHeartbeat("USER_LOGOUT"), (0, eh.Db)();
    };
    handleEnrollmentSuccess = () => {
        (0, eh.sN)(!0);
    };
    handleWindowFocus = (e) => {
        let { focused: t } = e;
        (this.focusedOrForegrounded = t), this.scheduleHeartbeatTracking("WINDOW_FOCUS");
    };
    handleAppStateUpdate = (e) => {
        let { state: t } = e;
        (this.focusedOrForegrounded = t === D.g6G.ACTIVE), this.scheduleHeartbeatTracking("APP_STATE_UPDATE");
    };
    handleAuthenticationChange = () => {
        let e = R.default.getToken();
        eE !== e && ((eE = e), (0, eh.Db)(), this.stopAnalyticHeartbeat()), this.scheduleHeartbeatTracking();
    };
}
let em = new ep();
var eI = n(861638),
    eg = n(793574),
    eC = n(114716),
    eT = n(827343),
    ef = n(328153),
    eN = n(869146),
    eS = n(969341),
    eL = n(531685),
    eO = n(731854);
let ey = new Set(),
    eb = new Set(),
    ev = null;
function eP() {
    for (let e of ey) eT.A.setDisableLocalVideo(e, D.bb8.MANUAL_ENABLED, eO.x.DEFAULT, !1);
    eb.clear(), ey.clear();
}
class eR extends X.A {
    _initialize() {
        W.h.subscribe("RTC_CONNECTION_VIDEO", this.handleIncomingVideo),
            W.h.subscribe("AUDIO_SET_LOCAL_VIDEO_DISABLED", this.handleManualLocalVideoToggle),
            W.h.subscribe("WINDOW_VISIBILITY_CHANGE", this.handleWindowVisibilityChange),
            W.h.subscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect),
            eN.A.addChangeListener(this.handlePopoutChange);
    }
    _terminate() {
        W.h.unsubscribe("RTC_CONNECTION_VIDEO", this.handleIncomingVideo),
            W.h.unsubscribe("AUDIO_SET_LOCAL_VIDEO_DISABLED", this.handleManualLocalVideoToggle),
            W.h.unsubscribe("WINDOW_VISIBILITY_CHANGE", this.handleWindowVisibilityChange),
            W.h.unsubscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect),
            eN.A.removeChangeListener(this.handlePopoutChange),
            eP(),
            (ev = null);
    }
    handleIncomingVideo(e) {
        let { userId: t, context: n, streamId: i } = e;
        if (n !== eO.x.DEFAULT || null == i) return;
        let r = null != ef.Ay.getVisibleGame(),
            a = eL.A.isVisible(),
            l = eN.A.getWindowVisible(D.MLl.CHANNEL_CALL_POPOUT),
            s = eS.Ay.isLocalVideoDisabled(t, n),
            o = eb.has(t);
        !r || a || l || s || o || (ey.add(t), eT.A.setDisableLocalVideo(t, D.bb8.DISABLED, n, !1));
    }
    handleManualLocalVideoToggle(e) {
        let { userId: t, persist: n } = e;
        n && (eb.add(t), ey.delete(t));
    }
    handleWindowVisibilityChange = (e) => {
        let { visible: t } = e;
        t && eP();
    };
    handleVoiceChannelSelect = (e) => {
        let { channelId: t } = e;
        t !== ev && (eP(), (ev = t));
    };
    handlePopoutChange = () => {
        eN.A.getWindowVisible(D.MLl.CHANNEL_CALL_POPOUT) && eP();
    };
}
let eD = new eR();
var ew = n(284009),
    eM = n.n(ew),
    ex = n(735438),
    eU = n.n(ex);
class eG extends p.Component {
    animProps;
    _animationFrame;
    ref = p.createRef();
    constructor(e) {
        super(e), (this.state = { shaking: !1 });
    }
    getDefaultAnimProps(e, t) {
        return {
            duration: e ?? 300,
            progress: 0,
            last: Date.now(),
            intensity: t ?? 5,
            lastDirection: -1,
            frameCount: 0,
        };
    }
    componentWillUnmount() {
        this._animationCleanup();
    }
    shake(e, t) {
        (this.animProps = this.getDefaultAnimProps(e, t)),
            this.state.shaking || this.setState({ shaking: !0 }, this._animate);
    }
    stop() {
        this.state.shaking && this.setState({ shaking: !1 });
    }
    _animate = () => {
        let { animProps: e } = this;
        if (!this.state.shaking || e.progress > e.duration || null == this.ref.current)
            return void this._animationComplete();
        let t = Date.now();
        if (((e.progress += t - e.last), (e.last = t), e.frameCount % 2 != 0)) {
            let t = e.lastDirection * e.intensity,
                n = eU().random(-e.intensity, e.intensity, !0),
                i = Math.max(0, Math.cbrt(e.duration - e.progress / 1e3));
            (e.intensity *= Math.min(1, i)),
                (e.lastDirection *= -1),
                eM()(null != this.ref.current, "Shakeable style set when not mounted"),
                (this.ref.current.style.transform = `translate3d(${t}px,${n}px,0px)`);
        }
        (e.frameCount += 1), (this._animationFrame = requestAnimationFrame(this._animate));
    };
    _animationComplete() {
        this.setState({ shaking: !1 }, this._animationCleanup);
    }
    _animationCleanup = () => {
        null != this.ref.current && (this.ref.current.style.transform = ""), cancelAnimationFrame(this._animationFrame);
    };
    render() {
        let { children: e, ...t } = this.props;
        return (0, E.jsx)("div", { ...t, ref: this.ref, children: e });
    }
}
var ej = n(447453),
    ek = n(143991),
    eV = n(942857),
    eF = n(337371),
    eH = n(775121),
    eB = n(498419),
    eY = n.n(eB),
    e$ = n(481613),
    ez = n.n(e$),
    eq = n(800828),
    eK = n(912309),
    eW = n(458294),
    eX = n(803224),
    eZ = n(994500),
    eQ = n(503509),
    eJ = n(19575),
    e0 = n(726249);
let e1 = new Set(["Blink", "Gecko", "WebKit"]),
    e8 = D.tEg;
if (U.isPlatformEmbedded) e8 = (e) => eJ.Ay.setBadge(e);
else if (e1.has(ez().layout)) {
    let e = new (eY())({ animation: "none" });
    e8 = (t) => {
        try {
            (0, e0.sF)(t), e.badge(-1 === t ? "•" : t);
        } catch (e) {}
    };
}
var e3 = n(780964),
    e2 = n(858897),
    e7 = n(763827),
    e4 = n(485296);
let e6 = (0, U.isMac)() ? null : "DEFAULT";
class e5 extends p.PureComponent {
    getIcon = () => {
        let { deafened: e, muted: t, speaking: n, connected: i, unread: r } = this.props,
            a = e6;
        return (0, U.isMac)() && !i
            ? a
            : (0, U.isLinux)() || !i
              ? (r && (a = "UNREAD"), a)
              : (a = e ? "DEAFENED" : t ? "MUTED" : n ? "SPEAKING" : "CONNECTED");
    };
    componentDidMount() {
        eJ.Ay.setSystemTrayIcon(this.getIcon());
    }
    componentDidUpdate() {
        eJ.Ay.setSystemTrayIcon(this.getIcon());
    }
    componentWillUnmount() {
        eJ.Ay.setSystemTrayIcon(e6);
    }
    render() {
        return null;
    }
}
let e9 = () => null;
U.isPlatformEmbedded &&
    (eJ.Ay.on("SYSTEM_TRAY_TOGGLE_MUTE", () => eT.A.toggleSelfMute({ location: "System Tray" })),
    eJ.Ay.on("SYSTEM_TRAY_TOGGLE_DEAFEN", () => eT.A.toggleSelfDeaf()),
    eJ.Ay.on("SYSTEM_TRAY_OPEN_VOICE_SETTINGS", () => {
        (0, e2.openUserSettings)(e3.X.VOICE_CATEGORY);
    }),
    (e9 = C.Ay.connectStores([e7.A, eS.Ay, e4.A, eW.default, eZ.A, eX.A, eq.A], () => {
        let e = eW.default.getTotalMentionCount(),
            t = eW.default.hasAnyUnread(),
            n = (0, eK.dH)([eZ.A, eq.A]),
            i = !eX.A.getDisableUnreadBadge() && !!(t || e + n > 0);
        return {
            connected: e7.A.isConnected(),
            speaking: e4.A.isCurrentUserSpeaking(),
            muted: eS.Ay.isSelfMute() || eS.Ay.isSelfMutedTemporarily(),
            deafened: eS.Ay.isSelfDeaf(),
            unread: i,
        };
    })(e5)));
let te = e9;
var tt = n(503698),
    tn = n.n(tt),
    ti = n(110259),
    tr = n(167789),
    ta = n(506774),
    tl = n(289873),
    ts = n(43990),
    to = n(939249),
    td = n(720149),
    tc = n(183994),
    tu = n(268218),
    tA = n(335180);
let th = (0, tu.Fe)({
    createPromise: () =>
        Promise.all([
            n.e("81510"),
            n.e("13403"),
            n.e("32101"),
            n.e("50603"),
            n.e("63009"),
            n.e("54316"),
            n.e("92652"),
            n.e("66498"),
            n.e("47680"),
            n.e("10471"),
            n.e("11301"),
            n.e("61737"),
            n.e("2368"),
            n.e("26073"),
            n.e("30221"),
            n.e("47678"),
            n.e("29080"),
            n.e("44057"),
            n.e("29569"),
            n.e("61597"),
            n.e("14875"),
            n.e("10622"),
            n.e("62318"),
            n.e("23324"),
            n.e("9861"),
            n.e("33204"),
            n.e("6687"),
            n.e("3177"),
        ]).then(n.bind(n, 338249)),
    webpackId: 338249,
    renderLoader: tA.IA,
});
var t_ = n(761929),
    tE = n(458518),
    tp = n(107361),
    tm = n(549711),
    tI = n(313961),
    tg = n(702841),
    tC = n(932001),
    tT = n(533550),
    tf = n(49999),
    tN = n(46275);
let tS = p.memo(function (e) {
    let { state: t, markAsDismissed: n } = e,
        { name: i, guildId: r, boundingRect: a } = t,
        l = p.useMemo(() => null, [i, r, n]);
    return null == l
        ? null
        : (0, E.jsx)("div", {
              className: tn()(tN.UX, (null == a || a.y < 0) && tN.R),
              style: null == a ? {} : { top: a.top, left: a.right - a.x },
              children: l,
          });
});
function tL() {
    let e = (0, tg.bG)([et.A], () => et.A.getGuildId()),
        t = (0, tT.RX)(e),
        [n, i] = (0, tC.kn)(
            Object.values(t)
                .filter((e) => {
                    let { disabled: t } = e;
                    return !t;
                })
                .map((e) => {
                    let { name: t } = e;
                    return t;
                }),
            tf.m.SIDEBAR,
        );
    if (null == n) return null;
    let r = t[n];
    return null == r
        ? null
        : (0, E.jsx)("div", { className: tN.kL, children: (0, E.jsx)(tS, { state: r, markAsDismissed: i }) });
}
let tO = (0, tu.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("15498"),
                n.e("59530"),
                n.e("45235"),
                n.e("41909"),
                n.e("97189"),
                n.e("31788"),
                n.e("32101"),
                n.e("69273"),
                n.e("77083"),
                n.e("63009"),
                n.e("84786"),
                n.e("63397"),
                n.e("45650"),
                n.e("27660"),
                n.e("6287"),
                n.e("85484"),
                n.e("81510"),
                n.e("36407"),
                n.e("79705"),
                n.e("33957"),
                n.e("98394"),
                n.e("94925"),
                n.e("92652"),
                n.e("10577"),
                n.e("8357"),
                n.e("23835"),
                n.e("23924"),
                n.e("15510"),
                n.e("48226"),
                n.e("20287"),
                n.e("28367"),
                n.e("35429"),
                n.e("10471"),
                n.e("63232"),
                n.e("64827"),
                n.e("30938"),
                n.e("23808"),
                n.e("11301"),
                n.e("60235"),
                n.e("61737"),
                n.e("79428"),
                n.e("29963"),
                n.e("47834"),
                n.e("98329"),
                n.e("20317"),
                n.e("84569"),
                n.e("2368"),
                n.e("27084"),
                n.e("24313"),
                n.e("48405"),
                n.e("63185"),
                n.e("19551"),
                n.e("84150"),
                n.e("45959"),
                n.e("18573"),
                n.e("55057"),
                n.e("37794"),
                n.e("26073"),
                n.e("7743"),
                n.e("34303"),
                n.e("48172"),
                n.e("28866"),
                n.e("54961"),
                n.e("8304"),
                n.e("58038"),
                n.e("93159"),
                n.e("55936"),
                n.e("11566"),
                n.e("21106"),
                n.e("31988"),
                n.e("94723"),
                n.e("62931"),
                n.e("81987"),
                n.e("58007"),
                n.e("5812"),
                n.e("17363"),
                n.e("42724"),
                n.e("86127"),
                n.e("78453"),
                n.e("12542"),
                n.e("30788"),
                n.e("4193"),
                n.e("25246"),
                n.e("8377"),
                n.e("28610"),
                n.e("44571"),
                n.e("44795"),
                n.e("44928"),
                n.e("36877"),
                n.e("20131"),
                n.e("79724"),
                n.e("21957"),
                n.e("93766"),
                n.e("52511"),
                n.e("54103"),
                n.e("54622"),
                n.e("51678"),
                n.e("69059"),
                n.e("52803"),
                n.e("43710"),
                n.e("64926"),
                n.e("67827"),
                n.e("14708"),
                n.e("99976"),
                n.e("28215"),
                n.e("72570"),
            ]).then(n.bind(n, 887073)),
        webpackId: 887073,
    }),
    ty = (0, tu.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("15498"),
                n.e("59530"),
                n.e("45235"),
                n.e("41909"),
                n.e("97189"),
                n.e("31788"),
                n.e("32101"),
                n.e("69273"),
                n.e("77083"),
                n.e("63009"),
                n.e("84786"),
                n.e("63397"),
                n.e("45650"),
                n.e("27660"),
                n.e("6287"),
                n.e("85484"),
                n.e("81510"),
                n.e("36407"),
                n.e("79705"),
                n.e("33957"),
                n.e("98394"),
                n.e("94925"),
                n.e("84611"),
                n.e("24116"),
                n.e("8357"),
                n.e("65854"),
                n.e("23835"),
                n.e("72900"),
                n.e("43108"),
                n.e("62859"),
                n.e("92652"),
                n.e("10577"),
                n.e("23924"),
                n.e("15510"),
                n.e("48226"),
                n.e("8596"),
                n.e("20287"),
                n.e("28367"),
                n.e("35429"),
                n.e("10471"),
                n.e("63232"),
                n.e("64827"),
                n.e("30938"),
                n.e("23808"),
                n.e("11301"),
                n.e("60235"),
                n.e("61737"),
                n.e("79428"),
                n.e("29963"),
                n.e("47834"),
                n.e("98329"),
                n.e("20317"),
                n.e("84569"),
                n.e("2368"),
                n.e("27084"),
                n.e("24313"),
                n.e("48405"),
                n.e("63185"),
                n.e("19551"),
                n.e("84150"),
                n.e("45959"),
                n.e("18573"),
                n.e("55057"),
                n.e("37794"),
                n.e("26073"),
                n.e("7743"),
                n.e("34303"),
                n.e("48172"),
                n.e("28866"),
                n.e("54961"),
                n.e("8304"),
                n.e("58038"),
                n.e("93159"),
                n.e("55936"),
                n.e("11566"),
                n.e("21106"),
                n.e("31988"),
                n.e("94723"),
                n.e("62931"),
                n.e("81987"),
                n.e("58007"),
                n.e("5812"),
                n.e("17363"),
                n.e("26437"),
                n.e("9233"),
                n.e("69747"),
                n.e("42724"),
                n.e("86127"),
                n.e("34983"),
                n.e("86814"),
                n.e("22822"),
                n.e("78453"),
                n.e("12542"),
                n.e("30788"),
                n.e("4193"),
                n.e("25246"),
                n.e("8377"),
                n.e("28610"),
                n.e("44571"),
                n.e("44795"),
                n.e("44928"),
                n.e("81202"),
                n.e("99549"),
                n.e("36877"),
                n.e("20131"),
                n.e("79724"),
                n.e("61058"),
                n.e("21957"),
                n.e("93766"),
                n.e("52511"),
                n.e("54103"),
                n.e("54622"),
                n.e("51678"),
                n.e("69059"),
                n.e("52803"),
                n.e("43710"),
                n.e("75284"),
                n.e("64926"),
                n.e("67827"),
                n.e("14708"),
                n.e("18861"),
                n.e("13079"),
                n.e("99976"),
                n.e("28215"),
                n.e("64316"),
                n.e("86823"),
                n.e("2750"),
                n.e("49287"),
                n.e("83318"),
                n.e("59275"),
            ]).then(n.bind(n, 461248)),
        webpackId: 461248,
    }),
    tb = (0, tu.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("15498"),
                n.e("59530"),
                n.e("45235"),
                n.e("41909"),
                n.e("97189"),
                n.e("31788"),
                n.e("32101"),
                n.e("69273"),
                n.e("77083"),
                n.e("63009"),
                n.e("84786"),
                n.e("63397"),
                n.e("45650"),
                n.e("27660"),
                n.e("6287"),
                n.e("85484"),
                n.e("81510"),
                n.e("36407"),
                n.e("79705"),
                n.e("33957"),
                n.e("98394"),
                n.e("94925"),
                n.e("92652"),
                n.e("10577"),
                n.e("8357"),
                n.e("23924"),
                n.e("15510"),
                n.e("48226"),
                n.e("20287"),
                n.e("28367"),
                n.e("35429"),
                n.e("10471"),
                n.e("63232"),
                n.e("64827"),
                n.e("30938"),
                n.e("23808"),
                n.e("11301"),
                n.e("60235"),
                n.e("61737"),
                n.e("79428"),
                n.e("29963"),
                n.e("47834"),
                n.e("98329"),
                n.e("20317"),
                n.e("84569"),
                n.e("2368"),
                n.e("27084"),
                n.e("24313"),
                n.e("48405"),
                n.e("63185"),
                n.e("19551"),
                n.e("84150"),
                n.e("45959"),
                n.e("18573"),
                n.e("55057"),
                n.e("37794"),
                n.e("26073"),
                n.e("7743"),
                n.e("34303"),
                n.e("48172"),
                n.e("28866"),
                n.e("54961"),
                n.e("8304"),
                n.e("58038"),
                n.e("93159"),
                n.e("55936"),
                n.e("11566"),
                n.e("21106"),
                n.e("31988"),
                n.e("94723"),
                n.e("62931"),
                n.e("81987"),
                n.e("58007"),
                n.e("5812"),
                n.e("17363"),
                n.e("42724"),
                n.e("86127"),
                n.e("78453"),
                n.e("12542"),
                n.e("30788"),
                n.e("4193"),
                n.e("25246"),
                n.e("8377"),
                n.e("28610"),
                n.e("44571"),
                n.e("44795"),
                n.e("44928"),
                n.e("36877"),
                n.e("20131"),
                n.e("79724"),
                n.e("21957"),
                n.e("93766"),
                n.e("52511"),
                n.e("54103"),
                n.e("54622"),
                n.e("51678"),
                n.e("69059"),
                n.e("52803"),
                n.e("43710"),
                n.e("64926"),
                n.e("67827"),
                n.e("14708"),
                n.e("99976"),
                n.e("28215"),
                n.e("82583"),
            ]).then(n.bind(n, 479808)),
        webpackId: 479808,
    });
var tv = n(201313),
    tP = n(920814),
    tR = n(287344),
    tD = n(969043),
    tw = n(91242),
    tM = n(661531),
    tx = n(862482),
    tU = n(602853),
    tG = n(623646),
    tj = n(446576),
    tk = n(70688),
    tV = n(795816),
    tF = n(216418),
    tH = n(47294),
    tB = n(16961),
    tY = n(58149),
    t$ = n(429913),
    tz = n(982484),
    tq = n(964404),
    tK = n(709562),
    tW = n(520006),
    tX = n(128286),
    tZ = n(625180),
    tQ = n(31728),
    tJ = n(625494),
    t0 = n(165610);
let t1 = (e, t) => {
    W.h.wait(() => {
        (0, tQ.I_)(e, t);
    });
};
function t8(e) {
    let { embedId: t, className: n, style: i, currentWindow: r } = e,
        a = (0, C.bG)([tw.A], () => tw.A.getConnectedFrame()),
        l = (0, C.bG)([tw.A], () => tw.A.getFrameLayoutMode()),
        s = null != a && l === t0.y.FOCUSED ? window : (r ?? window),
        o = p.useRef(null),
        d = p.useCallback(() => {
            null == o.current || t1(t, o.current.getBoundingClientRect());
        }, [t]);
    p.useLayoutEffect(() => {
        d();
    });
    let c = p.useMemo(
        () =>
            new ResizeObserver(() => {
                d();
            }),
        [d],
    );
    return (
        p.useLayoutEffect(() => {
            let e = o.current;
            if (null != e) return c.observe(e), () => c.unobserve(e);
        }, [c]),
        p.useLayoutEffect(() => {
            let e = () => d(),
                t = () => d();
            return (
                s.addEventListener("scroll", e, !0),
                s.addEventListener("resize", t),
                () => {
                    s.removeEventListener("scroll", e, !0), s.removeEventListener("resize", t);
                }
            );
        }, [d, s]),
        p.useLayoutEffect(
            () => (
                tJ._.subscribe(D.jej.MANUAL_IFRAME_RESIZING, d),
                () => {
                    tJ._.unsubscribe(D.jej.MANUAL_IFRAME_RESIZING, d);
                }
            ),
            [d],
        ),
        p.useLayoutEffect(
            () => () => {
                t1(t, null);
            },
            [t],
        ),
        (0, E.jsx)("div", { ref: o, className: n, style: i })
    );
}
var t3 = n(227042),
    t2 = n(186111),
    t7 = n(334463);
let t4 = null;
function t6(e) {
    return `framepip:${e.applicationId}`;
}
function t5() {
    let e = tw.A.getConnectedFrame();
    if (null == e) {
        let e;
        return void (null != (e = t4) && t7.A.isOpen(e) && (W.h.wait(() => tQ.VN(e)), (t4 = null)));
    }
    var t = t6(e);
    if (t7.A.isOpen(t)) return !1;
    if (null != t4) {
        let e = t4;
        W.h.wait(() => tQ.VN(e));
    }
    return W.h.wait(() => tQ.ho(t, D.o1q.FRAME, {})), void (t4 = t);
}
function t9() {
    let e;
    if ((0, t3.A)({ LayerStore: t2.A, PopoutWindowStore: eN.A })) {
        let e;
        return void (null != (e = void 0 ?? t4) && t7.A.isOpen(e) && W.h.wait(() => tQ.jD(e)));
    }
    null != (e = void 0 ?? t4) && t7.A.isOpen(e) && W.h.wait(() => tQ.WU(e));
}
class ne extends X.A {
    _initialize() {
        tw.A.addChangeListener(t5), t2.A.addChangeListener(t9);
    }
    _terminate() {
        tw.A.removeChangeListener(t5), t2.A.removeChangeListener(t9);
    }
}
let nt = new ne();
var nn = n(5867),
    ni = n(492466);
let nr = { [nn.E8.NO_CHAT]: ni.Oo, [nn.E8.RESIZABLE]: ni.Ig };
function na(e) {
    let { frame: t } = e,
        n = (0, t$.h)(t.applicationId),
        i = (0, eV.A)(),
        { selectedChannelId: r, selectedVoiceChannelId: a } = (0, C.cf)([ee.A], () => ({
            selectedChannelId: ee.A.getChannelId(),
            selectedVoiceChannelId: ee.A.getVoiceChannelId(),
        })),
        l = (0, C.bG)([tI.A], () => null != a && r === a && tI.A.getChatOpen(a), [r, a]),
        s = (0, C.bG)([tq.Ay], () => tq.Ay.callChatSidebarWidth),
        o = (0, tU.r)(tM.A.modules.chat.RESIZE_HANDLE_WIDTH),
        d = p.useRef(null),
        c = p.useRef(null),
        [u, A] = p.useState({ width: 0, height: 0 }),
        h = p.useCallback(() => {
            tZ.A.updateFrameLayoutMode({ applicationId: t.applicationId, layoutMode: t0.y.PIP });
        }, [t.applicationId]),
        _ = p.useCallback(() => {
            tZ.A.stopFrame({ applicationId: t.applicationId });
        }, [t.applicationId]);
    p.useLayoutEffect(() => {
        if (null == c.current) return;
        let e = new ResizeObserver(() => {
            A({ width: c.current?.clientWidth ?? 0, height: c.current?.clientHeight ?? 0 });
        });
        return e.observe(c.current), () => e.disconnect();
    }, []),
        p.useEffect(() => {
            let e = (e) => {
                null == d.current ||
                    (0, tG.H)(d.current, e.target) ||
                    i ||
                    tZ.A.updateFrameLayoutMode({ applicationId: t.applicationId, layoutMode: t0.y.PIP });
            };
            return (
                document.addEventListener("mousedown", e),
                () => {
                    document.removeEventListener("mousedown", e);
                }
            );
        }, [t.applicationId, i]);
    let m = u.width / Math.max(u.height, 1) < nn.B5,
        I = 0,
        g = 0,
        T = (0, tF.A)(n?.id);
    if (!T) {
        let e = u.width,
            t = u.height;
        m
            ? ((t = u.width / nn.B5) > u.height && (e = (t = u.height) * nn.B5), (g = (u.height - t) / 2))
            : ((e = Math.min(u.height * nn.B5, u.width)) > u.width && (t = (e = u.width) / nn.B5),
              (I = (u.width - e) / 2));
    }
    let f = nn.E8.NO_CHAT,
        N = (0, tB.G)();
    if (null == n) return null;
    let S = (s ?? D.da6) + o,
        L = t6(t);
    return (0, E.jsx)(ts.N, {
        theme: D.NJ8.DARK,
        children: (e) =>
            (0, E.jsxs)("div", {
                className: tn()(ni.iE, nr[f], e),
                ref: d,
                style: { right: l && !Number.isNaN(S) ? S : 0 },
                children: [
                    (0, E.jsx)(tz.A, { applicationId: t.applicationId }),
                    (0, E.jsx)("div", {
                        className: ni.lq,
                        children: (0, E.jsx)("div", {
                            className: tn()(ni.ht, { [ni.kK]: T }),
                            style: { paddingLeft: I, paddingRight: I, paddingTop: g, paddingBottom: g },
                            ref: c,
                            children: (0, E.jsx)(t8, { className: ni.pU, embedId: L }),
                        }),
                    }),
                    (0, E.jsxs)("div", {
                        className: ni.qr,
                        children: [
                            (0, E.jsx)(tW.A, {
                                appContext: D.BRT.APP,
                                applicationId: n.id,
                                shouldPrioritizeGroupPlusIcon: !0,
                                isRichPresenceInvite: !0,
                                iconClassName: ni.NS,
                                size: tx.$n.Sizes.MEDIUM,
                                look: tx.$n.Looks.FILLED,
                                buttonText: G.intl.string(G.t["6F9ivu"]),
                                color: tx.$n.Colors.TRANSPARENT,
                            }),
                            (0, E.jsxs)("div", {
                                className: ni.Hq,
                                children: [
                                    (0, E.jsx)("div", {
                                        className: ni.qi,
                                        children: (0, E.jsx)(tK.l, {
                                            isTrayButton: !0,
                                            label: G.intl.string(G.t.brPQ5U),
                                            onClick: h,
                                            iconComponent: tj.g,
                                            themeable: !0,
                                        }),
                                    }),
                                    (0, E.jsx)(tK.l, {
                                        isTrayButton: !1,
                                        label: G.intl.string(G.t["R/FK4A"]),
                                        onClick: _,
                                        iconComponent: tk.o,
                                        color: "disconnect",
                                    }),
                                ],
                            }),
                            N
                                ? (0, E.jsx)(tX.A, {
                                      popoutOpen: !1,
                                      onOpenPopout: () => {
                                          (0, tY.zV)(D.HAw.ACTIVITY_POPOUT_POP_OUT_BUTTON_CLICKED),
                                              (0, tH.A)({
                                                  onConfirm: async () => {
                                                      n?.id != null &&
                                                          (await tZ.A.refreshProxyTicket({ applicationId: n.id })),
                                                          (0, tV.jp)();
                                                  },
                                              });
                                      },
                                      onClosePopout: () => {},
                                  })
                                : null,
                        ],
                    }),
                ],
            }),
    });
}
function nl() {
    let e = (0, C.bG)([tw.A], () => tw.A.getConnectedFrame()),
        t = (0, C.bG)([tw.A], () => tw.A.getFrameLayoutMode()),
        n = (0, C.bG)([eN.A], () => eN.A.getWindowOpen(D.MLl.ACTIVITY_POPOUT));
    return t !== t0.y.FOCUSED || null == e || n ? null : (0, E.jsx)(na, { frame: e });
}
var ns = n(696292),
    no = n(664121),
    nd = n(323384),
    nc = n(577473),
    nu = n(834730),
    nA = n(534514),
    nh = n(416730),
    n_ = n(310419),
    nE = n(282026),
    np = n(601193),
    nm = n(631001),
    nI = n(726845),
    ng = n(285395),
    nC = n(837057),
    nT = n(488995),
    nf = n(654487),
    nN = n(525748);
function nS(e) {
    let { tab: t } = e,
        n = nI.A.useField("selectedTab"),
        i = p.useMemo(
            () =>
                (function (e) {
                    switch (e) {
                        case nT.GlobalDiscoveryTab.SERVERS:
                            return (0, E.jsx)(no.R, { color: "currentColor" });
                        case nT.GlobalDiscoveryTab.APPS:
                            return (0, E.jsx)(nd.k, { color: "currentColor" });
                        case nT.GlobalDiscoveryTab.QUESTS:
                            return (0, E.jsx)(nc.r, { color: "currentColor" });
                    }
                })(t),
            [t],
        ),
        r = p.useMemo(() => (0, ng.t)(t), [t]),
        a = n === t,
        l = p.useCallback(() => {
            switch (t) {
                case nT.GlobalDiscoveryTab.QUESTS:
                    return (
                        a && nm.A.resetState(),
                        ec.default.track(D.HAw.DISCOVERY_QUEST_TAB_CLICKED, {
                            client_ad_session_id: (0, eh.sN)().uuid,
                        }),
                        (0, nC.transitionToGlobalDiscovery)({
                            tab: nT.GlobalDiscoveryTab.QUESTS,
                            location: nf.rE.DISCOVERY_SIDEBAR,
                            questContent: ns.u.DISCOVERY_SIDEBAR,
                        })
                    );
                case nT.GlobalDiscoveryTab.APPS:
                    if (!a)
                        return (0, nC.transitionToGlobalDiscovery)({
                            tab: t,
                            newSessionState: {
                                entrypoint: { name: n_.sW.GLOBAL_DISCOVERY_SIDEBAR },
                                restorePreviousView: !0,
                            },
                        });
                    nh.A.resetState(), (0, nC.transitionToGlobalDiscovery)({ tab: t });
                    return;
                case nT.GlobalDiscoveryTab.SERVERS:
                    if (!a) return (0, nC.transitionToGlobalDiscovery)({ tab: t });
                    nE.A.resetState(), np.A.resetState();
                    return;
                default:
                    return (0, nC.transitionToGlobalDiscovery)({ tab: t });
            }
        }, [t, a]);
    return (0, E.jsxs)(to.D, {
        onClick: l,
        className: tn()(nN.pc, { [nN.wH]: a }),
        children: [
            (0, E.jsx)("div", { className: nN.wz, children: i }),
            (0, E.jsx)(nu.E, { variant: "text-md/medium", color: "none", children: r }),
        ],
    });
}
let nL = function () {
    return (0, E.jsxs)("div", {
        className: nN.kL,
        children: [
            (0, E.jsx)("div", {
                className: nN.wx,
                children: (0, E.jsx)(nA.D, { variant: "text-lg/semibold", children: G.intl.string(G.t["1KqYnl"]) }),
            }),
            (0, E.jsx)("nav", {
                className: nN.C$,
                children: nT.GLOBAL_DISCOVERY_TABS.map((e) => (0, E.jsx)(nS, { tab: e }, e)),
            }),
        ],
    });
};
var nO = n(386467),
    ny = n(961973),
    nb = n(440293),
    nv = n(253363),
    nP = n(379610),
    nR = n(164956),
    nD = n(209700),
    nw = n(9588);
let nM = {
        closeSidebar() {
            W.h.dispatch({ type: "MOBILE_WEB_SIDEBAR_CLOSE" });
        },
        openSidebar() {
            W.h.dispatch({ type: "MOBILE_WEB_SIDEBAR_OPEN" });
        },
    },
    nx = !1;
class nU extends C.Ay.Store {
    static displayName = "MobileWebSidebarStore";
    getIsOpen() {
        return !b.Fr || nx;
    }
}
let nG = new nU(W.h, {
    MOBILE_WEB_SIDEBAR_OPEN: function () {
        nx = !0;
    },
    MOBILE_WEB_SIDEBAR_CLOSE: function () {
        nx = !1;
    },
});
var nj = n(601623),
    nk = n(851109);
n(323874), n(14289), n(35956);
var nV = n(777666),
    nF = n(214947),
    nH = n(761508),
    nB = n(944791),
    nY = n(711950),
    n$ = n(915089),
    nz = n(586774),
    nq = n(742589),
    nK = n(95550),
    nW = n(554146),
    nX = n(364522),
    nZ = n(820284),
    nQ = n(688810),
    nJ = n(379848),
    n0 = n(821609),
    n1 = n(290595),
    n8 = n(516746);
function n3(e) {
    let {
        padded: t = !0,
        inset: n = !1,
        active: i = !1,
        className: r,
        children: a,
        onClick: l,
        ref: s,
        noBackground: o = !1,
        ...d
    } = e;
    return null != l
        ? (0, E.jsx)(to.D, {
              innerRef: s,
              onClick: l,
              tabIndex: null != l ? 0 : -1,
              className: tn()(r, { [n8.A7]: !n, [n8.C5]: n, [n8.jC]: t, [n8.vu]: i, [n8.bG]: null != l, [n8._$]: o }),
              ...d,
              children: a,
          })
        : (0, E.jsx)("div", {
              ref: s,
              className: tn()(r, { [n8.A7]: !n, [n8.C5]: n, [n8.jC]: t, [n8.vu]: i, [n8._$]: o }),
              ...d,
              children: a,
          });
}
var n2 = n(362288);
function n7(e) {
    let { className: t, markAsDismissed: n } = e;
    return (0, E.jsxs)(n3, {
        className: tn()(n2.Nr, t),
        children: [
            (0, E.jsx)(nA.D, { variant: "heading-md/semibold", className: n2.wx, children: G.intl.string(G.t.HcbnMM) }),
            (0, E.jsx)(nu.E, {
                variant: "text-sm/normal",
                children: G.intl.format(G.t.NkFrzN, {
                    onPrivacyClick: () => {
                        (0, e2.openUserSettings)(e3.X.DATA_AND_PRIVACY_PANEL);
                    },
                }),
            }),
            (0, E.jsxs)("div", {
                className: n2.UD,
                children: [
                    (0, E.jsx)(n0.$, {
                        variant: "primary",
                        size: "sm",
                        fullWidth: !0,
                        text: G.intl.string(G.t.ebojgD),
                        onClick: () => (0, n1.U)([D.YAq.PERSONALIZATION], []),
                    }),
                    (0, E.jsx)(n0.$, {
                        variant: "secondary",
                        size: "sm",
                        fullWidth: !0,
                        text: G.intl.string(G.t.f3Pet9),
                        onClick: () => n(tf.i.DISMISS),
                    }),
                ],
            }),
        ],
    });
}
var n4 = n(153488),
    n6 = n(111956),
    n5 = n.n(n6),
    n9 = n(922016),
    ie = n(829219),
    it = n(859703),
    ii = n(507107);
let ir = (0, n(945810).mj)({
    name: "2026-01-now-playing-api-call-experiment",
    kind: "user",
    defaultConfig: { use_api_call: !1 },
    variations: {
        0: { use_api_call: !1 },
        1: { use_api_call: !1 },
        2: { use_api_call: !0 },
        3: { use_api_call: !0 },
        4: { use_api_call: !0 },
        5: { use_api_call: !0 },
        6: { use_api_call: !0 },
    },
});
var ia = n(890687),
    il = n(710969),
    is = n(639214),
    io = n(814793),
    id = n(219271),
    ic = n(427358),
    iu = n(287809),
    iA = n(943577),
    ih = n(279877);
n(321073);
var i_ = n(401843),
    iE = n(682261),
    ip = n(765379),
    im = n(90644),
    iI = n(61330),
    ig = n(960076),
    iC = n(834615),
    iT = n(970928),
    iN = n(516085),
    iS = n(141628),
    iL = n(990078),
    iO = n(414499),
    iy = n(687966),
    ib = n(97808),
    iv = n(778712),
    iP = n(983851),
    iR = n(187322),
    iD = n(492684),
    iw = n(212245),
    iM = n(573648),
    ix = n(62583),
    iU = n(908289),
    iG = n(672979),
    ij = n(440594);
function ik(e, t) {
    if (null != e && e.type === D.$pd.CUSTOM_STATUS) return null != e.state ? e.state.trim() : null;
    if (null != t) return null == e || e.type !== D.$pd.PLAYING ? G.intl.string(G.t.eXan7B) : e.name;
    if (null == e || null == e.name) return null;
    if ((0, ig.A)(e)) return null != e.details && "" !== e.details ? e.details : e.name;
    if ((0, ip.A)(e)) return (0, ij.A)(e.name);
    var n = e.type,
        i = e.name;
    switch (n) {
        case D.$pd.LISTENING:
        case D.$pd.WATCHING:
        case D.$pd.COMPETING:
        case D.$pd.STREAMING:
            return i;
        case D.$pd.CUSTOM_STATUS:
        case D.$pd.HANG_STATUS:
            return null;
        case D.$pd.PLAYING:
        default:
            return i;
    }
}
var iV = n(737393),
    iF = n(139286),
    iH = n(46225),
    iB = n(627363),
    iY = n(587895),
    i$ = n(47167),
    iz = n(402216),
    iq = n(939341),
    iK = n(681827),
    iW = n(826673),
    iX = n(609425),
    iZ = n(73392),
    iQ = n(137177),
    iJ = n(279250),
    i0 = n(607407),
    i1 = n(290987),
    i8 = n(928550),
    i3 = n(594262),
    i2 = n(378570),
    i7 = n(345942),
    i4 = n(804980),
    i6 = n(734057),
    i5 = n(879945),
    i9 = n(266080),
    re = n(403362),
    rt = n(427262),
    rn = n(336787),
    ri = n(492213);
let rr = [14, 14, 12, 12, 10, 8, 6],
    ra = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return (0, E.jsx)(nu.E, { className: tn()(ri.P_, t), variant: "text-sm/semibold", children: e });
    },
    rl = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return (0, E.jsx)(nu.E, {
            className: tn()(ri.P_, t),
            variant: "text-xs/normal",
            color: "text-muted",
            children: e,
        });
    },
    rs = (0, iD.A)((e) => {
        let { message: t } = e;
        return (0, E.jsx)("div", { className: ri.__invalid_timestamp, children: t });
    }),
    ro = (e) => {
        let { children: t } = e;
        return (0, E.jsx)("section", { className: ri.uW, children: t });
    },
    rd = (e) => {
        let { inset: t, className: n } = e;
        return (0, E.jsx)("div", { className: tn()(ri.me, { [ri.C5]: t }, n) });
    },
    rc = (e) => {
        let { onCloudPlayClick: t, analyticsLocations: n } = e;
        return (
            (0, iF.A)({
                name: ti.ImpressionNames.CLOUD_PLAY_CTA,
                type: ti.ImpressionTypes.VIEW,
                properties: { location_stack: n },
            }),
            (0, E.jsx)(iL.m, {
                text: G.intl.string(G.t.JVwWva),
                children: (0, E.jsx)(n0.$, {
                    size: "sm",
                    variant: "primary",
                    icon: iO.h,
                    text: G.intl.string(G.t.YsIsPU),
                    onClick: t,
                }),
            })
        );
    },
    ru = (e) => {
        let { activity: t, user: n } = e,
            i = (0, i3.l)({ activity: t, user: n, supportsAskToJoin: !1 }),
            r = null != i,
            { data: a } = (0, iB.YY)(t.application_id),
            { fetched: l, hasAlreadyLinked: s, canStartAuthorization: o, startAuthorization: d } = (0, iH.RD)(a),
            c = !r && l && o && !s;
        return {
            isJoinActivityButtonShown: r,
            joinActivityButtonAction: i,
            isLinkAccountButtonShown: c,
            startAuthorization: d,
            hasButton: r || c,
        };
    },
    rA = (e) => {
        let { activity: t, user: n } = e,
            {
                joinActivityButtonAction: i,
                isJoinActivityButtonShown: r,
                isLinkAccountButtonShown: a,
                startAuthorization: l,
            } = ru({ activity: t, user: n }),
            { newestAnalyticsLocation: s } = (0, nQ.Ay)();
        if (r && null != i) {
            let { isJoining: e, handleJoinRequest: t, buttonCTA: n, tooltip: r, isEnabled: a } = i;
            return (0, E.jsx)(iL.m, {
                text: r,
                asContainer: !a,
                children: (0, E.jsx)(n0.$, {
                    size: "sm",
                    variant: "secondary",
                    icon: iy._,
                    text: n,
                    disabled: !a,
                    loading: e,
                    onClick: (e) => {
                        e.stopPropagation(), t();
                    },
                }),
            });
        }
        return a
            ? (0, E.jsx)(n0.$, {
                  size: "sm",
                  variant: "secondary",
                  icon: iS.A,
                  text: G.intl.string(G.t.sbdnpw),
                  onClick: (e) => {
                      e.stopPropagation(), l({ analyticsLocations: [s] });
                  },
              })
            : null;
    },
    rh = (e) => {
        let { activity: t, analyticsLocations: n } = e,
            { application_id: i, name: r } = t,
            { data: a } = (0, iB.YY)(i),
            l = (0, iV.A)({ application: a, analyticsLocations: n }),
            s = (0, iW.JZ)(nW.M.CLOUD_PLAY_NEW_BADGE),
            o = (0, i8.L)(i);
        return null == l || o
            ? null
            : (0, E.jsxs)(E.Fragment, {
                  children: [
                      (0, E.jsx)(rd, { className: ri.gi }),
                      (0, E.jsxs)("div", {
                          className: ri.DK,
                          children: [
                              (0, E.jsxs)("div", {
                                  className: ri.tJ,
                                  children: [
                                      s
                                          ? null
                                          : (0, E.jsx)(nV.Lp, {
                                                text: G.intl.string(G.t.y2b7CA),
                                                color: tM.A.colors.BACKGROUND_BRAND.css,
                                            }),
                                      (0, E.jsx)(nu.E, {
                                          variant: "text-xs/medium",
                                          children: G.intl.formatToPlainString(G.t.RmiYF3, { gameName: r }),
                                      }),
                                  ],
                              }),
                              (0, E.jsx)(rc, { onCloudPlayClick: l, analyticsLocations: n }),
                          ],
                      }),
                  ],
              });
    };
var r_ = (((s = r_ || {}).XBOX = "XBOX"), (s.SPOTIFY = "SPOTIFY"), (s.MULTIPLE = "MULTIPLE"), s);
let rE = (e) => {
    let t,
        { src: n, onClick: i, onContextMenu: r } = e;
    switch (n) {
        case "XBOX":
            t = (0, E.jsx)(i9.A, { className: ri.nr, color: tM.A.unsafe_rawColors.PRIMARY_300.css });
            break;
        case "SPOTIFY":
            t = (0, E.jsx)(i5.A, { className: ri.nr, color: tM.A.unsafe_rawColors.PLATFORM_SPOTIFY.css });
            break;
        case "MULTIPLE":
            t = (0, E.jsx)("div", {
                className: ri.XQ,
                children: (0, E.jsx)(iy._, {
                    size: "md",
                    className: tn()(ri.nr, ri.iY),
                    color: tM.A.unsafe_rawColors.PRIMARY_300.css,
                }),
            });
            break;
        default:
            t = (0, E.jsx)("img", { src: n ?? void 0, alt: "", className: ri.nr });
    }
    return null != i || null != r
        ? (0, E.jsx)(to.D, { onClick: i, className: tn()(null != i ? ri.vk : ""), onContextMenu: r, children: t })
        : t;
};
rE.Src = r_;
let rp = (e) => {
    let {
            priorityUser: t,
            title: n,
            subtitle: i,
            icon: r,
            onSubtitleClick: a,
            onIconClick: l,
            onContextMenu: s,
            guildId: o,
            displayNameFont: d,
        } = e,
        c = (0, E.jsx)(nu.E, { className: ri.P_, variant: "text-sm/normal", color: "text-muted", children: i });
    return (0, E.jsxs)("header", {
        className: null != r ? ri.dI : ri.sk,
        children: [
            (0, E.jsx)(ib.eu, {
                src: t.user.getAvatarURL(o, 32),
                "aria-label": t.user.username,
                size: iv._3.SIZE_32,
                className: ri.Nw,
                status: t.status,
                onContextMenu: s,
            }),
            (0, E.jsxs)("div", {
                className: ri.__invalid_headerDetails,
                children: [
                    (0, E.jsx)(nu.E, { className: tn()(ri.P_, d), variant: "text-md/semibold", children: n }),
                    null != a ? (0, E.jsx)(to.D, { className: ri.vk, onClick: a, children: c }) : c,
                ],
            }),
            null != r && null != l ? (0, E.jsx)(to.D, { className: ri.vk, onClick: l, children: r }) : r,
        ],
    });
};
rp.Icon = rE;
let rm = (e) => {
    let { children: t, className: n, ...i } = e;
    return (0, E.jsx)(iR.vN, {
        children: (0, E.jsx)(n3, { noBackground: !0, className: tn()(n, ri.iE), padded: !1, ...i, children: t }),
    });
};
(rm.Header = rp),
    (rm.Body = (e) => {
        let { children: t } = e;
        return (0, E.jsx)(n3, { inset: !0, padded: !1, className: ri.rf, children: t });
    }),
    (rm.Separator = rd),
    (rm.VoiceSection = (e) => {
        let { guild: t, channel: n, partySize: i, members: r, onChannelContextMenu: a } = e,
            l = p.useRef(null),
            s = (0, i$.Ay)(n, !0),
            o = (0, J.Iv)(t, 32),
            d = (0, J.Rb)(t);
        return (0, E.jsx)(ro, {
            children: (0, E.jsxs)("div", {
                className: ri.iO,
                ref: l,
                onContextMenu: (e) => a(e, n),
                children: [
                    (0, E.jsx)(to.D, {
                        onClick: () => (0, i7.u)(t.id),
                        "aria-hidden": !0,
                        tabIndex: -1,
                        children: (0, E.jsxs)("div", {
                            className: ri.J4,
                            children: [
                                null != o
                                    ? (0, E.jsx)("img", { alt: "", src: o, className: tn()(ri.y8, ri.p8) })
                                    : (0, E.jsx)("div", {
                                          className: ri.I,
                                          children: (0, E.jsx)("div", {
                                              className: ri.lB,
                                              style: { fontSize: rr[d.length] ?? rr[rr.length - 1] },
                                              children: d,
                                          }),
                                      }),
                                (0, E.jsx)("div", {
                                    className: ri._s,
                                    children: (0, E.jsx)(iP.H, { size: "md", color: "currentColor", className: ri.ZS }),
                                }),
                            ],
                        }),
                    }),
                    (0, E.jsx)(to.D, {
                        onClick: () => {
                            O.default.selectVoiceChannel(n.id), (0, i2.iN)(n.id);
                        },
                        focusProps: { ringTarget: l },
                        children: (0, E.jsxs)("div", { className: ri.U6, children: [ra(t.name, ri.BJ), rl(s, ri.BJ)] }),
                    }),
                    (0, E.jsx)(rn.A, { partySize: i, members: r, guildId: t.id }),
                ],
            }),
        });
    }),
    (rm.GameSection = (e) => {
        let { icon: t, name: n, partySize: i, members: r, activity: a } = e,
            { analyticsLocations: l } = (0, nQ.Ay)(eg.A.NOW_PLAYING_ITEM_GAME_SECTION);
        return (0, E.jsxs)(ro, {
            children: [
                (0, E.jsxs)("div", {
                    className: ri.yn,
                    children: [
                        null != t ? (0, E.jsx)("img", { alt: "", src: t, className: ri.RZ }) : null,
                        (0, E.jsxs)("div", {
                            children: [ra(n), rl(G.intl.formatToPlainString(G.t.C4WXvc, { memberCount: i.totalSize }))],
                        }),
                        (0, E.jsx)(rn.A, { partySize: i, members: r }),
                    ],
                }),
                (0, E.jsx)(rh, { activity: a, analyticsLocations: l }),
            ],
        });
    }),
    (rm.RichPresenceSection = (e) => {
        let { activity: t, getAssetImage: i, user: r } = e,
            { analyticsLocations: a } = (0, nQ.Ay)(eg.A.NOW_PLAYING_ITEM_RICH_PRESENCE_SECTION),
            { data: l } = (0, iB.YY)(t.application_id),
            { assets: s, details: o, state: d, application_id: c } = t,
            { hasButton: u } = ru({ activity: t, user: r }),
            A = (0, iq.C4)(l)?.src ?? n(960648),
            h = (0, iV.A)({ application: l, analyticsLocations: a });
        return null != t.assets || (0, iE.A)(t) || null != h
            ? (0, E.jsxs)(ro, {
                  children: [
                      (0, E.jsxs)("div", {
                          className: tn()(ri.tL, { [ri._2]: u }),
                          children: [
                              null != s && 0 !== Object.keys(s).length
                                  ? (0, E.jsxs)("div", {
                                        className: ri.YY,
                                        children: [
                                            (0, E.jsx)("img", {
                                                alt: s.large_text ?? "",
                                                src: i(c, s.large_image, [160, 160]) ?? A,
                                                className: tn()(ri.nX, { [ri.p8]: null != s.small_image }),
                                            }),
                                            null != s.small_image
                                                ? (0, E.jsx)("img", {
                                                      alt: s.small_text ?? "",
                                                      src: i(c, s.small_image, [64, 64]),
                                                      className: ri.rp,
                                                  })
                                                : null,
                                        ],
                                    })
                                  : (0, E.jsx)("div", {
                                        className: ri.YY,
                                        children: (0, E.jsx)("img", { alt: "", src: A, className: ri.nX }),
                                    }),
                              (0, E.jsxs)("div", {
                                  className: ri.JD,
                                  children: [
                                      ra(null != o && "" !== o ? o : t.name),
                                      null != d ? rl(d) : null,
                                      (() => {
                                          let { timestamps: e } = t;
                                          return null == e || !(0, iG.A)(t) || (0, im.A)(t)
                                              ? null
                                              : rl(
                                                    (0, iE.A)(t)
                                                        ? (0, E.jsx)(rs, { timestamps: e })
                                                        : (0, E.jsx)(i1.Ay, {
                                                              start: e.start,
                                                              end: e.end,
                                                              location: i1.Ay.Locations.USER_ACTIVITY,
                                                              className: ri.__invalid_playTime,
                                                          }),
                                                );
                                      })(),
                                  ],
                              }),
                              (0, E.jsx)(rA, { activity: t, user: r }),
                          ],
                      }),
                      (0, E.jsx)(rh, { activity: t, analyticsLocations: a }),
                  ],
              })
            : null;
    }),
    (rm.XboxSection = (e) => {
        let { title: t } = e;
        return (0, E.jsx)(ro, {
            children: (0, E.jsxs)("div", {
                className: ri.oc,
                children: [
                    (0, E.jsx)(i9.A, { className: ri.Ai }),
                    (0, E.jsxs)("div", {
                        className: ri.__invalid_xboxSectionDetails,
                        children: [ra(t), rl(G.intl.string(G.t["JG9r+9"]))],
                    }),
                ],
            }),
        });
    }),
    (rm.SpotifySection = (e) => {
        let {
            activity: { assets: t, details: n, state: i, application_id: r },
            partySize: a,
            members: l,
            isSolo: s,
            getAssetImage: o,
        } = e;
        return (0, E.jsx)(ro, {
            children: (0, E.jsxs)("div", {
                className: ri.uy,
                children: [
                    null != t
                        ? (0, E.jsxs)("div", {
                              className: ri.YY,
                              children: [
                                  (0, E.jsx)("img", {
                                      alt: t.large_text ?? "",
                                      src: o(r, t.large_image, [160, 160]),
                                      className: tn()(ri.nX, ri.Dy, { [ri.p8]: null != t.small_image }),
                                  }),
                                  s
                                      ? null
                                      : (0, E.jsx)(i5.A, {
                                            className: ri.rp,
                                            color: tM.A.unsafe_rawColors.PLATFORM_SPOTIFY.css,
                                        }),
                              ],
                          })
                        : (0, E.jsx)("div", {}),
                    (0, E.jsxs)("div", {
                        children: [null != n ? ra(n) : null, null != i ? rl(i.replace(/; /g, ", ")) : null],
                    }),
                    (0, E.jsx)(rn.A, { minAvatarsShown: s ? 2 : 1, partySize: a, members: l }),
                ],
            }),
        });
    }),
    (rm.TwitchSection = (e) => {
        let t,
            { activity: i, user: r, getAssetImage: a, guildId: l } = e,
            { name: s, details: o, assets: d, application_id: c } = i;
        return (
            null != d &&
                (0, ig.A)(i) &&
                (t = (0, E.jsx)(iK.A, {
                    className: ri.E6,
                    aspectRatio: 16 / 9,
                    children: (0, E.jsxs)(to.D, {
                        href: (0, iU.A)(i),
                        tag: "a",
                        target: "_blank",
                        children: [
                            (0, E.jsx)("img", {
                                alt: d.large_text ?? "",
                                src: a(c, d.large_image, [900, 500]),
                                className: ri.ZB,
                            }),
                            (0, E.jsx)("img", { src: n(606621), className: ri.vc, alt: "" }),
                        ],
                    }),
                })),
            (0, E.jsxs)(ro, {
                children: [
                    (0, E.jsxs)("div", {
                        className: tn()({ [ri.x5]: null == r, [ri.Qh]: null != r }),
                        children: [
                            (0, E.jsx)("img", { alt: "", src: iM.A.get(D.fg2.TWITCH).icon.lightSVG, className: ri.Gq }),
                            (0, E.jsxs)("div", { children: [ra(s), null != o ? rl(o) : null] }),
                            null != r
                                ? (0, E.jsx)(ib.eu, {
                                      src: r.getAvatarURL(l, 24),
                                      "aria-label": r.username,
                                      className: ri.AZ,
                                      size: iv._3.SIZE_24,
                                  })
                                : null,
                        ],
                    }),
                    t,
                ],
            })
        );
    }),
    (rm.ApplicationStreamingSection = (e) => {
        let { activity: t, user: n, applicationStream: i, onPreviewClick: r, guildId: a } = e,
            l = (0, C.bG)([i6.A], () => i6.A.getChannel(i.channelId)),
            [s, o] = (0, iJ.zP)(l),
            d = (0, E.jsxs)(to.D, {
                onClick: s ? r : void 0,
                className: ri.q_,
                children: [
                    (0, E.jsx)(i0.A, { stream: i, className: ri.IN }),
                    (0, E.jsx)(nu.E, {
                        className: ri.Er,
                        variant: "text-sm/medium",
                        color: "always-white",
                        children: (0, iJ.CT)(o),
                    }),
                ],
            }),
            c =
                (function (e, t) {
                    if (Array.isArray(e)) {
                        let n = e;
                        null != t && !1 !== t.discoverable && (n = [...n, null]);
                        let i = null;
                        for (let e of n) {
                            let n = ik(e, t);
                            if (null != n) return { activity: e, activityText: n };
                            e?.type === D.$pd.CUSTOM_STATUS && null != e.emoji && (i = e);
                        }
                        return i?.emoji != null ? { activity: i, activityText: null } : null;
                    }
                    return ik(e, t);
                })(t, i)?.activityText ?? G.intl.string(G.t.eXan7B),
            u = (0, iX.A)({ userId: n.id, guildId: a }),
            A = (0, iZ.a)({ displayNameStyles: u });
        return (0, E.jsxs)(ro, {
            children: [
                (0, E.jsxs)("div", {
                    className: ri.ME,
                    children: [
                        (0, E.jsx)(ib.eu, {
                            size: iv._3.SIZE_32,
                            src: n.getAvatarURL(a, 32),
                            "aria-label": n.username,
                            className: ri.OL,
                        }),
                        (0, E.jsxs)("div", { children: [ra(rt.Ay.getName(n), A), rl(c)] }),
                        (0, E.jsx)(iz.Ay, { size: iz.Ay.Sizes.SMALL }),
                    ],
                }),
                d,
            ],
        });
    }),
    (rm.EmbeddedActivitySection = (e) => {
        let { activity: t, channel: n, guildId: i, participants: r } = e,
            [a, l] = p.useState(null),
            s = t.application_id;
        p.useEffect(() => {
            null != s &&
                (0, iT.RG)(s, ["embedded_background"]).then((e) => {
                    let [t] = e;
                    return l(t);
                });
        }, [s]);
        let o = (0, C.yK)([iu.default, R.default], () =>
                Array.from(r)
                    .map((e) => (R.default.getId() === e ? null : iu.default.getUser(e)))
                    .filter(re.Vq),
            ),
            d = (0, iw.p)(),
            { analyticsLocations: c } = (0, nQ.Ay)();
        if (null == s) return null;
        let u = iY.A.getApplication(s);
        if (null == u) return null;
        let A = null != t.created_at && t.created_at > 0 ? { start: t.created_at } : void 0,
            h = (0, iT.uD)(u.id, a, 300);
        return (0, E.jsxs)(ro, {
            children: [
                (0, E.jsxs)("div", {
                    className: ri.h1,
                    children: [
                        (0, E.jsx)(iQ.A, { game: u, size: iQ.M.XSMALL, className: ri.VZ }),
                        (0, E.jsx)("div", {
                            className: ri.F0,
                            children: (0, E.jsx)(nu.E, { variant: "text-sm/semibold", children: u.name }),
                        }),
                        null != A
                            ? (0, E.jsx)("div", {
                                  className: ri.T$,
                                  children: (0, E.jsx)(nu.E, {
                                      color: "text-muted",
                                      variant: "text-sm/normal",
                                      children: (0, E.jsx)(rs, { timestamps: A }),
                                  }),
                              })
                            : null,
                    ],
                }),
                (0, E.jsxs)("div", {
                    className: ri.Kt,
                    children: [
                        null != h ? (0, E.jsx)("img", { src: h, alt: u.name, className: ri.pV }) : null,
                        (0, E.jsxs)("div", {
                            className: ri.d4,
                            children: [
                                (0, E.jsx)(i4.LN, { users: o, guildId: i, channelId: n.id }),
                                (0, E.jsx)("div", {
                                    className: ri.ZE,
                                    children: (0, E.jsx)(n0.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: G.intl.string(G.t.VJlc0S),
                                        onClick: (e) => {
                                            e.stopPropagation(),
                                                (0, ix.A)({
                                                    applicationId: s,
                                                    activityChannelId: n.id,
                                                    locationObject: d.location,
                                                    analyticsLocations: c,
                                                });
                                        },
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        });
    });
var rI = n(812808);
function rg(e) {
    let { party: t, onChannelContextMenu: n, quest: i } = e,
        r = (0, rI.G)(),
        { voiceChannels: a, currentActivities: l, partiedMembers: s, applicationStreams: o, guildContext: d } = t,
        c = (0, ia.sb)(i),
        u = [],
        A = (e) => {
            let { length: t } = u;
            u.push(e);
        };
    for (let { activity: e } of (a.length > 0 &&
        a.forEach((e) => {
            let { members: t, channel: i, guild: r } = e;
            A(
                (0, E.jsx)(
                    rm.VoiceSection,
                    {
                        guild: r,
                        channel: i,
                        members: t,
                        partySize: (function (e) {
                            let t = e.length;
                            return { knownSize: t, unknownSize: 0, totalSize: t + 0 };
                        })(t),
                        onChannelContextMenu: n,
                    },
                    `voice-${i.id}`,
                ),
            );
        }),
    t.currentActivities))
        if (null != e) {
            let t = iN.Fm(e);
            if (null != t) {
                A(t);
                break;
            }
        }
    return (
        o.length > 0 &&
            r &&
            o.forEach((e) => {
                let { stream: t, streamUser: n, activity: i } = e;
                A(
                    (0, E.jsx)(
                        rm.ApplicationStreamingSection,
                        {
                            guildId: d?.id,
                            user: n,
                            activity: i,
                            applicationStream: t,
                            onPreviewClick: () => {
                                O.default.selectVoiceChannel(t.channelId), (0, i_.Nl)(t);
                            },
                        },
                        `application-stream-${t.ownerId}`,
                    ),
                );
            }),
        l.forEach((e, t) => {
            let { activity: n, game: r, playingMembers: o, activityUser: u } = e;
            if (null == n || null == n.type) return null;
            if (n.type === D.$pd.PLAYING)
                if (l.length > 1 && !(0, iE.A)(n) && null != r)
                    A(
                        (0, E.jsx)(
                            rm.GameSection,
                            {
                                icon: r.getIconURL(64),
                                name: r.name,
                                partySize: { knownSize: o.length, unknownSize: 0, totalSize: o.length },
                                members: o,
                                activity: n,
                            },
                            `game-${n.session_id ?? t}-${n.application_id ?? t}`,
                        ),
                    );
                else if ((0, ip.A)(n)) {
                    let e = new Set(o.map((e) => e.id)),
                        t = a.find((e) => null != e)?.channel;
                    null != t &&
                        A(
                            (0, E.jsx)(
                                rm.EmbeddedActivitySection,
                                { activity: n, participants: e, channel: t, guildId: t.guild_id },
                                `embedded-activity-${n.application_id}`,
                            ),
                        );
                } else
                    (0, iI.A)(n)
                        ? A((0, E.jsx)(rm.XboxSection, { title: r.name }, `xbox-${n.session_id ?? t}`))
                        : A(
                              (0, E.jsx)(
                                  rm.RichPresenceSection,
                                  { activity: n, getAssetImage: iT.uD, user: u },
                                  `rich-presence-${n.session_id ?? t}-${u.id}`,
                              ),
                          );
            else if ((0, ig.A)(n)) {
                let e = a.length > 0 && a[0].members.length > 1,
                    i = o.length > 1;
                A(
                    (0, E.jsx)(
                        rm.TwitchSection,
                        { guildId: d?.id, activity: n, user: e || i ? u : null, getAssetImage: iT.uD },
                        `streaming-${n.session_id ?? t}`,
                    ),
                );
            } else
                n.type === D.$pd.LISTENING &&
                    ((0, im.A)(n)
                        ? A(
                              (0, E.jsx)(
                                  rm.SpotifySection,
                                  {
                                      activity: n,
                                      isSolo: 1 === s.length,
                                      partySize: { knownSize: o.length, unknownSize: 0, totalSize: o.length },
                                      getAssetImage: iT.uD,
                                      members: o,
                                  },
                                  `spotify-${n.session_id ?? t}-${u.id}`,
                              ),
                          )
                        : (null != n.assets || (0, iE.A)(n)) &&
                          A(
                              (0, E.jsx)(
                                  rm.RichPresenceSection,
                                  { activity: n, getAssetImage: iT.uD, user: u },
                                  `rich-presence-${n.session_id ?? t}-${u.id}`,
                              ),
                          ));
            c &&
                null != i &&
                null != r &&
                (0, is.zS)(n, i) &&
                (null == i.userStatus || !(0, il.gO)(i.userStatus, ii.uF.ACTIVITY_PANEL)) &&
                A((0, E.jsx)(iC.A, { quest: i }, `quest-${i.id}-${n.session_id ?? t}`));
        }),
        u.length > 0 ? (0, E.jsx)(rm.Body, { children: u }) : null
    );
}
n(595);
var rC = n(409626),
    rT = n(692969);
function rf(e) {
    let { party: t, onUserContextMenu: i } = e,
        { priorityMembers: r, partiedMembers: a, guildContext: l } = t,
        s = r[0],
        o = (function (e) {
            let { priorityMembers: t, partiedMembers: n } = e,
                i = new Set(
                    t.map((e) => {
                        let { user: t } = e;
                        return t.id;
                    }),
                ),
                r = n.filter((e) => !i.has(e.id)),
                a = rt.Ay.getName(t[0].user),
                l = null != t[1] ? rt.Ay.getName(t[1].user) : null != r[0] ? rt.Ay.getName(r[0]) : null;
            switch (n.length) {
                case 1:
                    return a;
                case 2:
                    return G.intl.format(G.t.t1DyC1, { user1: a, user2: l });
                default:
                    return G.intl.format(G.t["5CSEcJ"], { user1: a, user2: l, extras: n.length - 2 });
            }
        })(t),
        { subtitle: d, icon: c } = (function (e) {
            let { priorityMembers: t, partiedMembers: i, voiceChannels: r, currentActivities: a } = e,
                l = t.length,
                s = i.length - l,
                o = a[0],
                d = o?.activity,
                c = o?.startedPlayingTime,
                u = { name: d?.name ?? "" };
            if ((0, ip.A)(d) && null != d)
                return {
                    subtitle: (0, E.jsx)(i1.Ay, {
                        start: c,
                        location: i1.Ay.Locations.ACTIVITY_FEED_NEW,
                        messageProps: u,
                    }),
                    icon: null,
                };
            if (l + s === 1 && null != o) {
                let { game: e } = o;
                if (null == d) return { subtitle: null, icon: null };
                let t = iN.Ij(d);
                if (null != t) return t;
                switch (d.type) {
                    case D.$pd.PLAYING:
                        if ((0, iI.A)(d))
                            return {
                                subtitle: G.intl.string(G.t.tO8wOx),
                                icon: (0, E.jsx)(rm.Header.Icon, { src: rm.Header.Icon.Src.XBOX }),
                            };
                        return {
                            subtitle: (0, E.jsx)(i1.Ay, {
                                start: c,
                                location: i1.Ay.Locations.ACTIVITY_FEED_NEW,
                                messageProps: u,
                            }),
                            icon:
                                null != e
                                    ? (0, E.jsx)(rm.Header.Icon, {
                                          src: null != e.getIconURL(64) ? e.getIconURL(64) : n(960648),
                                      })
                                    : null,
                        };
                    case D.$pd.STREAMING:
                        return {
                            subtitle: G.intl.string(G.t.HyGHj7),
                            icon:
                                null != e && null != e.getIconURL(64)
                                    ? (0, E.jsx)(rm.Header.Icon, { src: e.getIconURL(64) })
                                    : null,
                        };
                    case D.$pd.LISTENING:
                        let i;
                        return (
                            (i = (0, im.A)(d)
                                ? (0, E.jsx)(rm.Header.Icon, { src: rm.Header.Icon.Src.SPOTIFY })
                                : null != e.getIconURL(64)
                                  ? (0, E.jsx)(rm.Header.Icon, { src: e.getIconURL(64) })
                                  : (0, E.jsx)(rm.Header.Icon, { src: n(960648) })),
                            { subtitle: G.intl.formatToPlainString(G.t.NF5xop, { name: d.name }), icon: i }
                        );
                    case D.$pd.WATCHING:
                        return {
                            subtitle: G.intl.formatToPlainString(G.t.pW3Ip3, { name: d.name }),
                            icon:
                                null != e && null != e.getIconURL(64)
                                    ? (0, E.jsx)(rm.Header.Icon, { src: e.getIconURL(64) })
                                    : null,
                        };
                    default:
                        return { subtitle: G.intl.string(G.t.grGyaf), icon: null };
                }
            }
            if (0 === a.length) {
                if (r.length > 0) return { subtitle: G.intl.string(G.t.grGyaf), icon: null };
                let e = a[0];
                if (null != e) {
                    let { activity: t } = e;
                    if (null != t) {
                        let e = iN.Ij(t);
                        if (null != e) return e;
                    }
                    if (null != t && t.type === D.$pd.LISTENING)
                        return {
                            subtitle: G.intl.string(G.t.rmnkz4),
                            icon: (0, E.jsx)(rm.Header.Icon, { src: rm.Header.Icon.Src.SPOTIFY }),
                        };
                }
            } else if (1 === a.length) {
                let e = a.find((e) => null != e.activity);
                if (null == e) return { subtitle: null, icon: null };
                let { activity: t, game: n, startedPlayingTime: i } = e;
                return (
                    eM()(null != t, "Activity was null somehow"),
                    {
                        subtitle: (0, E.jsx)(i1.Ay, {
                            start: i,
                            location: i1.Ay.Locations.ACTIVITY_FEED_NEW,
                            messageProps: u,
                        }),
                        icon:
                            null != n && null != n.getIconURL(64)
                                ? (0, E.jsx)(rm.Header.Icon, { src: n.getIconURL(64) })
                                : null,
                    }
                );
            }
            return {
                subtitle: G.intl.string(G.t.sau5tt),
                icon: (0, E.jsx)(rm.Header.Icon, { src: rm.Header.Icon.Src.MULTIPLE }),
            };
        })(t),
        u = (0, rT.A)({
            applicationId: t.currentActivities[0]?.activity?.application_id,
            location: "FriendsActivityFeed",
            source: rC.Ob.FriendsActivityFeed,
        }),
        A = (0, iX.A)({ userId: s.user.id, guildId: l?.id }),
        h = (0, iZ.a)({ displayNameStyles: A });
    return (0, E.jsx)(rm.Header, {
        priorityUser: s,
        guildId: l?.id,
        title: o,
        subtitle: d,
        icon: c,
        onSubtitleClick: u,
        onIconClick: u,
        onContextMenu: (e) => i(e, s.user),
        displayNameFont: 1 === a.length ? h : void 0,
    });
}
var rN = n(550079),
    rS = n(477782),
    rL = n(964486),
    rO = n(308368),
    ry = n(780907),
    rb = n(933958),
    rv = n(776677),
    rP = n(874546),
    rR = n(651743),
    rD = n(30370),
    rw = n(134861),
    rM = n(498642),
    rx = n(71393),
    rU = n(189081),
    rG = n(375492),
    rj = n(576705),
    rk = n(461213),
    rV = n(977997),
    rF = n(689168),
    rH = n(340829),
    rB = n(144914),
    rY = n(715671);
let r$ = iM.A.get(D.fg2.XBOX).name;
var rz = n(975732),
    rq = n(297413),
    rK = n(564450);
function rW(e) {
    let { user: t, status: n, guildId: i } = e;
    return (0, E.jsxs)("div", {
        className: rK.Ku,
        children: [
            (0, E.jsx)(ib.eu, {
                src: t.getAvatarURL(i, 24),
                className: rK.my,
                "aria-label": t.username,
                size: iv._3.SIZE_24,
                status: n,
            }),
            (0, E.jsx)(rq.A, { user: t, hideDiscriminator: !0 }),
        ],
    });
}
function rX(e) {
    let { label: t } = e;
    return (0, E.jsxs)("div", {
        className: rK.Ku,
        children: [(0, E.jsx)("div", { className: tn()(rK.my, rK.L5) }), (0, E.jsx)("div", { children: t })],
    });
}
function rZ(e) {
    let {
            priorityMembers: t,
            otherMembers: n,
            totalMembers: i,
            activity: r,
            guildId: a,
            sourceAnalyticsLocations: l,
        } = e,
        s = [];
    for (let { user: e, status: n } of t)
        s.push(
            (0, E.jsx)(rS.Dr, {
                id: e.id,
                keepItemStyles: !0,
                render: (t) => (0, E.jsx)(rW, { ...t, user: e, status: n, guildId: a }),
                action: () => (0, rz.openUserProfileModal)({ userId: e.id, guildId: a, sourceAnalyticsLocations: l }),
            }),
        );
    for (let e of n)
        s.push(
            (0, E.jsx)(rS.Dr, {
                id: e.id,
                keepItemStyles: !0,
                render: (t) => (0, E.jsx)(rW, { ...t, user: e, guildId: a }),
                action: () => (0, rz.openUserProfileModal)({ userId: e.id, guildId: a, sourceAnalyticsLocations: l }),
            }),
        );
    let o = i - s.length;
    return (
        o > 0 &&
            s.push(
                (0, E.jsx)(rS.Dr, {
                    id: `unknown-members-${r?.session_id}`,
                    render: (e) =>
                        (0, E.jsx)(rX, { ...e, label: G.intl.formatToPlainString(G.t["6Kqn9M"], { count: o }) }),
                }),
            ),
        s
    );
}
var rQ = n(308528),
    rJ = n(855511);
function r0(e) {
    return {
        af_voice_chat: e.voiceChannels.length > 0,
        af_people_count: e.partiedMembers.length,
        af_rich_presence: e.currentActivities.some((e) => {
            let { activity: t } = e;
            return (0, iE.A)(t);
        }),
        game_platform: e.currentActivities.length > 0 ? (0, rJ.A)(e.currentActivities[0].activity) : null,
    };
}
var r1 = n(655116),
    r8 = n(341335),
    r3 = n(286617),
    r2 = n(533207),
    r7 = n(881335),
    r4 = n(272984);
function r6(e) {
    let t,
        n,
        i,
        { party: r, close: a, onSelect: l } = e,
        s = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                { priorityMembers: n, partiedMembers: i } = e,
                r = p.useContext(ec.AnalyticsContext),
                a = n.map((e) => {
                    let { user: t } = e;
                    return t.id;
                }),
                l = 1 === i.length && 1 === n.length,
                s = n.length - i.length > 0;
            return (l || t) && !s && 0 !== a.length
                ? (0, E.jsx)(rS.Dr, {
                      id: "message",
                      action: function () {
                          rQ.A.openPrivateChannel({ recipientIds: a }).then((t) =>
                              tY.Ay.trackWithMetadata(D.HAw.ACTIVITY_FEED_DM_VISITED, {
                                  source: { ...r.location, object: D.ZSU.LIST_ITEM },
                                  channel_id: t,
                                  recipient_id: "string" == typeof a ? a : a[0],
                                  af_recently_played: !1,
                                  ...r0(e),
                              }),
                          );
                      },
                      label: G.intl.string(G.t["g33r/P"]),
                  })
                : null;
        })(r),
        o =
            ((t = p.useContext(ec.AnalyticsContext)),
            (n = r.voiceChannels[0]),
            (i = (0, C.bG)([rj.A], () => null != n && rj.A.can(D.xBc.CONNECT, n.channel))),
            null == n
                ? null
                : [
                      (0, E.jsx)(
                          rS.Dr,
                          {
                              id: "join-voice",
                              action: function () {
                                  (0, i2.iN)(n.channel.id),
                                      O.default.selectVoiceChannel(n.channel.id),
                                      tY.Ay.trackWithMetadata(D.HAw.ACTIVITY_FEED_VOICE_CHANNEL_VISITED, {
                                          source: { ...t.location, object: D.ZSU.LIST_ITEM },
                                          guild_id: n.guild.id,
                                          channel_id: n.channel.id,
                                          ...r0(r),
                                      });
                              },
                              label: G.intl.string(G.t["8yOlh9"]),
                              disabled: !i,
                          },
                          "join-voice",
                      ),
                      (0, E.jsx)(
                          rS.Dr,
                          {
                              id: "goto-server",
                              action: function () {
                                  (0, i7.u)(n.guild.id),
                                      tY.Ay.trackWithMetadata(D.HAw.ACTIVITY_FEED_GUILD_VISITED, {
                                          source: { ...t.location, object: D.ZSU.LIST_ITEM },
                                          guild_id: n.guild.id,
                                          af_recently_played: !1,
                                          ...r0(r),
                                      });
                              },
                              label: G.intl.string(G.t.RGgqm1),
                          },
                          "goto-server",
                      ),
                  ]),
        d = (function (e) {
            let { applicationStreams: t } = e;
            return t.map((e) => {
                let { stream: t, streamUser: n } = e;
                return (0, E.jsx)(
                    rS.Dr,
                    {
                        id: `spectate-${t.ownerId}`,
                        action: () => {
                            O.default.selectVoiceChannel(t.channelId), (0, i_.Nl)(t);
                        },
                        label: G.intl.formatToPlainString(G.t.m09d0T, { streamerName: rt.Ay.getName(n) }),
                    },
                    `spectate-${t.ownerId}`,
                );
            });
        })(r),
        c = (function (e) {
            let { currentActivities: t, isSpotifyActivity: n } = e,
                i = t[0],
                r = (function (e, t) {
                    let n = (0, C.bG)(
                        [r1.A, R.default],
                        () => (null != t ? (0, r3.A)(r1.A, R.default, t, e) : void 0),
                        [e, t],
                    );
                    if (null == n || null == e || null == t) return null;
                    let i = n.isCurrentUser || n.notPlayable || n.playingSameTrack,
                        r = n.isCurrentUser || n.syncingWithUser || n.syncingWithParty;
                    return [
                        (0, E.jsx)(
                            rS.Dr,
                            {
                                id: `spotify-play-${e.session_id}`,
                                action: () => (0, r7.A)(n, r4.Qp.USER_ACTIVITY_PLAY, void 0),
                                label: G.intl.string(G.t.rRffNz),
                                subtext: i ? (0, r8.A)(n, r4.Qp.USER_ACTIVITY_PLAY) : void 0,
                                disabled: i,
                            },
                            `spotify-play-${e.session_id}`,
                        ),
                        n.canPlaySpotify
                            ? (0, E.jsx)(
                                  rS.Dr,
                                  {
                                      id: `spotify-sync-${e.session_id}`,
                                      action: () => (0, r2.A)(n, r4.Qp.USER_ACTIVITY_SYNC, void 0),
                                      label: G.intl.string(G.t.eU3inB),
                                      subtext: r ? (0, r8.A)(n, r4.Qp.USER_ACTIVITY_SYNC) : void 0,
                                      disabled: r,
                                  },
                                  `spotify-sync-${e.session_id}`,
                              )
                            : null,
                    ];
                })(i?.activity, i?.activityUser);
            return n ? r : null;
        })(r),
        u = (function (e) {
            let { currentActivities: t } = e,
                n = t.length > 1,
                i = (function (e) {
                    let { currentActivities: t } = e,
                        n = t.some((e) => {
                            let { activity: t } = e;
                            return (0, iE.A)(t);
                        }),
                        i = (0, C.bG)([rD.A], () =>
                            rD.A.getAccounts().some((e) => e.type === iM.A.get(D.fg2.XBOX).type),
                        ),
                        r = t.filter((e) => {
                            let { activity: t } = e;
                            return (0, iI.A)(t);
                        }),
                        a = r.length > 0,
                        l = r.some((e) => {
                            let { activity: t } = e;
                            return (0, rP.Ay)(t);
                        });
                    return n || i || !a || l
                        ? null
                        : (0, E.jsx)(rS.Dr, {
                              id: "xbox-connect",
                              action: () => (0, e2.openUserSettings)(e3.X.CONNECTIONS_PANEL),
                              label: G.intl.formatToPlainString(G.t.XWSHTb, { platform: r$ }),
                          });
                })(e),
                r = (function (e) {
                    let { currentActivities: t } = e,
                        n = p.useContext(ec.AnalyticsContext);
                    return (0, C.yK)([
                        iu.default,
                        rU.A,
                        i6.A,
                        rx.A,
                        rM.A,
                        eZ.A,
                        ee.A,
                        rV.A,
                        rj.A,
                        rG.A,
                        rk.A,
                        rb.Ay,
                        rR.A,
                        rH.A,
                        rw.A,
                        ef.Ay,
                        rF.A,
                    ], () => {
                        let e = iu.default.getCurrentUser();
                        return t
                            .filter((e) => !(0, ip.A)(e.activity))
                            .map((t) => {
                                let { activity: i, game: r, activityUser: a } = t,
                                    l = rU.A.getActiveLibraryApplication(r.id);
                                return {
                                    ...t,
                                    libraryApplication: l,
                                    activityJoinability: (0, rv.A)({
                                        user: a,
                                        activity: i,
                                        application: r,
                                        channelId: null,
                                        currentUser: e,
                                        isEmbedded: !1,
                                        ChannelStore: i6.A,
                                        GuildStore: rx.A,
                                        GuildMemberCountStore: rM.A,
                                        RelationshipStore: eZ.A,
                                        SelectedChannelStore: ee.A,
                                        VoiceStateStore: rV.A,
                                        PermissionStore: rj.A,
                                        LocalActivityStore: rG.A,
                                        SelfPresenceStore: rk.A,
                                        EmbeddedActivitiesStore: rb.Ay,
                                    }),
                                    canPlay: (0, rB.A)({
                                        LibraryApplicationStore: rU.A,
                                        LaunchableGameStore: rR.A,
                                        DispatchApplicationStore: rH.A,
                                        ConnectedAppsStore: rw.A,
                                        applicationId: r.id,
                                        branchId: null != l ? l.branchId : null,
                                    }),
                                    isJoining: rF.A.getState(r.id, D.xL.JOIN) === D.eAD.LOADING,
                                    isLaunching: rR.A.launchingGames.has(r.id),
                                    isRunning: ef.Ay.getRunningVerifiedApplicationIds().includes(r.id),
                                    location: n.location,
                                };
                            });
                    }, [n.location, t]);
                })(e),
                a = [];
            for (let e of r) {
                let { activity: t } = e;
                null != t &&
                    null != t.type &&
                    a.push(
                        (function (e, t) {
                            let { activity: n, activityUser: i, game: r, activityJoinability: a, isJoining: l } = e;
                            if (null == n) return null;
                            if (a === rv.o.JOINED)
                                return (0, E.jsx)(rS.Dr, {
                                    id: `joined-game-${n.session_id}`,
                                    label: G.intl.string(G.t.KC26NR),
                                    subtext: n.name,
                                    disabled: !0,
                                });
                            if (a === rv.o.CAN_JOIN)
                                return (0, E.jsx)(rS.Dr, {
                                    id: `join-game-${n.session_id}`,
                                    label: l ? G.intl.string(G.t.bf6Ci7) : G.intl.string(G.t.VJlc0S),
                                    subtext: n.name,
                                    disabled: l,
                                    action: () => {
                                        ry.Ay.join({
                                            userId: i.id,
                                            sessionId: n.session_id,
                                            applicationId: r.id,
                                            channelId: null,
                                            messageId: null,
                                            source: D.ThZ.USER_ACTIVITY_ACTIONS,
                                        });
                                    },
                                });
                            if ((0, rP._C)(n)) {
                                async function s() {
                                    if (null == n) return;
                                    let e = await rO.A.sendActivityInviteUser({
                                        type: D.xL.JOIN_REQUEST,
                                        userId: i.id,
                                        activity: n,
                                        location: D.ThZ.USER_ACTIVITY_ACTIONS,
                                    });
                                    null != e && O.default.selectPrivateChannel(e.id);
                                }
                                return (0, E.jsx)(rS.Dr, {
                                    id: `join-${n.session_id}`,
                                    label: t
                                        ? G.intl.formatToPlainString(G.t.wFAvxM, { name: i.toString() })
                                        : G.intl.string(G.t.OKsSCR),
                                    subtext: n.name,
                                    action: s,
                                });
                            }
                            return null;
                        })(e, n),
                        (function (e, t) {
                            let {
                                activity: n,
                                game: i,
                                libraryApplication: r,
                                location: a,
                                canPlay: l,
                                isRunning: s,
                                isLaunching: o,
                            } = e;
                            if (!l || null == n) return null;
                            let d = s
                                ? G.intl.formatToPlainString(G.t["gBme/4"], { name: i.name })
                                : o
                                  ? G.intl.formatToPlainString(G.t.WtSQwG, { name: i.name })
                                  : void 0;
                            return (0, E.jsx)(rS.Dr, {
                                id: `play-${n.session_id}`,
                                action: function () {
                                    (0, rY.playApplication)(i.id, r, {
                                        analyticsParams: { location: { ...a, object: D.ZSU.LIST_ITEM } },
                                    });
                                },
                                label: t
                                    ? G.intl.formatToPlainString(G.t.ZDZEJN, { name: i.name })
                                    : G.intl.string(G.t.XKUw8m),
                                disabled: s || o,
                                subtext: d,
                            });
                        })(e, n),
                    );
            }
            return [...a, i];
        })(r),
        A = (function (e) {
            let { priorityMembers: t, partiedMembers: n, currentActivities: i, guildContext: r } = e,
                a = new Set(
                    t.map((e) => {
                        let { user: t } = e;
                        return t.id;
                    }),
                ),
                l = n.filter((e) => !a.has(e.id)),
                { analyticsLocations: s } = (0, nQ.Ay)(),
                o = p.useMemo(() => {
                    let e = i
                        .flatMap((e) => {
                            let { playingMembers: t } = e;
                            return t;
                        })
                        .map((e) => e.id);
                    return n.filter((t) => !e.includes(t.id));
                }, [n, i]);
            if (i.length <= 1 && 0 === o.length)
                return (0, E.jsx)(rS.rX, {
                    label: n.length > 1 ? G.intl.formatToPlainString(G.t.C4WXvc, { memberCount: n.length }) : void 0,
                    children: rZ({
                        priorityMembers: t,
                        otherMembers: l,
                        totalMembers: n.length,
                        activity: i[0]?.activity ?? void 0,
                        guildId: r?.id,
                        sourceAnalyticsLocations: s,
                    }),
                });
            let d = i.map((e, n) => {
                    let { playingMembers: i, game: l, activity: o } = e,
                        d = new Set(i.map((e) => e.id));
                    return (0, E.jsx)(
                        rS.rX,
                        {
                            label: `${l.name} - ${i.length}`,
                            children: rZ({
                                priorityMembers: t.filter((e) => {
                                    let { user: t } = e;
                                    return d.has(t.id);
                                }),
                                otherMembers: i.filter((e) => !a.has(e.id)),
                                totalMembers: i.length,
                                activity: o ?? void 0,
                                guildId: r?.id,
                                sourceAnalyticsLocations: s,
                            }),
                        },
                        n,
                    );
                }),
                c = o.map((e) => e.id);
            return [
                ...d,
                (0, E.jsx)(rS.rX, {
                    label: `${G.intl.string(G.t["mIx+gG"])} - ${o.length}`,
                    children: rZ({
                        priorityMembers: t.filter((e) => {
                            let { user: t } = e;
                            return c.includes(t.id);
                        }),
                        otherMembers: o.filter((e) => !a.has(e.id)),
                        totalMembers: o.length,
                        guildId: r?.id,
                        sourceAnalyticsLocations: s,
                    }),
                }),
            ];
        })(r);
    return (
        (0, rL.Ay)(() => {
            let e = r.currentActivities
                .filter((e) => e.game?.name != null && (0, ec.isGameApplicationType)(e.game?.type))
                .map((e) => e.game.name);
            ec.default.track(D.HAw.OPEN_POPOUT, { type: "Now Playing Card Popout", games_detected: e });
        }),
        (0, E.jsxs)(rN.W, {
            "data-menu-migrated": !0,
            navId: "now-playing-menu",
            onClose: a,
            "aria-label": G.intl.string(G.t.ogxXGq),
            onSelect: l,
            children: [
                s,
                (0, E.jsxs)(rS.rX, { children: [o, d] }),
                (0, E.jsx)(rS.rX, { children: c }),
                (0, E.jsx)(rS.rX, { children: u }),
                A,
            ],
        })
    );
}
var r5 = n(442433),
    r9 = n(707606),
    ae = n(522986);
let at = 15 * eu.A.Millis.MINUTE,
    an =
        ((o = function (e) {
            let { party: t, onUserContextMenu: n, onChannelContextMenu: i, quest: r } = e,
                a = p.useRef(null),
                l = (0, E.jsx)(rf, { party: t, onUserContextMenu: n }),
                s = (0, E.jsx)(rg, { party: t, onChannelContextMenu: i, quest: r }),
                { partiedMembers: o, applicationStreams: d, currentActivities: c, voiceChannels: u } = t,
                A = o.length,
                h = d.length,
                _ = c.length,
                m = u.length > 0,
                I = p.useCallback(() => {
                    let e = c
                        .filter((e) => e.game?.name != null && (0, ec.isGameApplicationType)(e.game?.type))
                        .map((e) => e.game.name);
                    ec.default.track(D.HAw.NOW_PLAYING_CARD_HOVERED, {
                        num_users: A,
                        num_streams: h,
                        num_activities: _,
                        in_voice_channel: m,
                        games_detected: e,
                    });
                }, [A, h, _, m, c]),
                g = p.useMemo(() => n5()(I, at), [I]);
            return null != l || null != s
                ? (0, E.jsx)(n9.Y, {
                      targetElementRef: a,
                      position: "left",
                      renderPopout: (e) => {
                          let { closePopout: n } = e;
                          return (0, E.jsx)(r6, { party: t, close: n });
                      },
                      spacing: 8,
                      children: (e, t) => {
                          let { isShown: n } = t;
                          return (0, E.jsx)(rm, {
                              ...e,
                              ref: a,
                              onMouseEnter: g,
                              "aria-haspopup": "menu",
                              className: ae.MP,
                              active: n,
                              children: (0, E.jsxs)("div", { children: [l, s] }),
                          });
                      },
                  })
                : null;
        }),
        (0, r9.A)(
            class extends p.Component {
                render() {
                    return (0, E.jsx)(o, {
                        ...this.props,
                        onMessageUser: this.handleMessageUser,
                        onUserContextMenu: this.handleUserContextMenu,
                        onGuildContextMenu: this.handleGuildContextMenu,
                        onChannelContextMenu: this.handleChannelContextMenu,
                    });
                }
                handleMessageUser(e, t) {
                    return rQ.A.openPrivateChannel({ recipientIds: t.id });
                }
                handleUserContextMenu(e, t, i) {
                    (0, r5.L3)(
                        e,
                        async () => {
                            let { default: e } = await Promise.all([
                                n.e("39431"),
                                n.e("31788"),
                                n.e("26132"),
                                n.e("46652"),
                                n.e("93190"),
                                n.e("34552"),
                                n.e("8757"),
                                n.e("89673"),
                                n.e("68403"),
                                n.e("85968"),
                                n.e("60195"),
                                n.e("29787"),
                                n.e("97558"),
                                n.e("94000"),
                                n.e("91994"),
                                n.e("76665"),
                                n.e("76273"),
                                n.e("24198"),
                                n.e("86169"),
                                n.e("32418"),
                            ]).then(n.bind(n, 668569));
                            return (n) => (0, E.jsx)(e, { ...n, user: t });
                        },
                        { onClose: i },
                    );
                }
                handleGuildContextMenu(e, t) {
                    (0, r5.L3)(e, async () => {
                        let { default: e } = await Promise.all([
                            n.e("81510"),
                            n.e("29092"),
                            n.e("45235"),
                            n.e("63397"),
                            n.e("41909"),
                            n.e("6287"),
                            n.e("84611"),
                            n.e("32101"),
                            n.e("83097"),
                            n.e("72900"),
                            n.e("63419"),
                            n.e("69273"),
                            n.e("31788"),
                            n.e("77083"),
                            n.e("63009"),
                            n.e("84786"),
                            n.e("45650"),
                            n.e("97189"),
                            n.e("27660"),
                            n.e("85484"),
                            n.e("36407"),
                            n.e("79705"),
                            n.e("55658"),
                            n.e("87616"),
                            n.e("76032"),
                            n.e("33957"),
                            n.e("8357"),
                            n.e("49699"),
                            n.e("43108"),
                            n.e("35598"),
                            n.e("63635"),
                            n.e("66782"),
                            n.e("82872"),
                            n.e("86479"),
                            n.e("13403"),
                            n.e("94925"),
                            n.e("93329"),
                            n.e("87845"),
                            n.e("45317"),
                            n.e("85639"),
                            n.e("51643"),
                            n.e("61175"),
                            n.e("92652"),
                            n.e("45229"),
                            n.e("84388"),
                            n.e("36685"),
                            n.e("4974"),
                            n.e("80186"),
                            n.e("23924"),
                            n.e("15510"),
                            n.e("48226"),
                            n.e("19402"),
                            n.e("49681"),
                            n.e("96382"),
                            n.e("22687"),
                            n.e("62052"),
                            n.e("63202"),
                            n.e("82596"),
                            n.e("20287"),
                            n.e("28367"),
                            n.e("35429"),
                            n.e("10471"),
                            n.e("63232"),
                            n.e("64827"),
                            n.e("30938"),
                            n.e("23808"),
                            n.e("11301"),
                            n.e("60235"),
                            n.e("61737"),
                            n.e("79428"),
                            n.e("29963"),
                            n.e("47834"),
                            n.e("98329"),
                            n.e("20317"),
                            n.e("84569"),
                            n.e("2368"),
                            n.e("27084"),
                            n.e("24313"),
                            n.e("48405"),
                            n.e("63185"),
                            n.e("19551"),
                            n.e("84150"),
                            n.e("45959"),
                            n.e("18573"),
                            n.e("55057"),
                            n.e("37794"),
                            n.e("26073"),
                            n.e("7743"),
                            n.e("34303"),
                            n.e("48172"),
                            n.e("28866"),
                            n.e("54961"),
                            n.e("8304"),
                            n.e("58038"),
                            n.e("93159"),
                            n.e("55936"),
                            n.e("11566"),
                            n.e("21106"),
                            n.e("31988"),
                            n.e("94723"),
                            n.e("62931"),
                            n.e("81987"),
                            n.e("58007"),
                            n.e("5812"),
                            n.e("17363"),
                            n.e("55411"),
                            n.e("93103"),
                            n.e("58337"),
                            n.e("26437"),
                            n.e("91763"),
                            n.e("13708"),
                            n.e("76602"),
                            n.e("28229"),
                            n.e("71470"),
                            n.e("91007"),
                            n.e("76418"),
                            n.e("21921"),
                            n.e("9233"),
                            n.e("88342"),
                            n.e("69747"),
                            n.e("40258"),
                            n.e("20683"),
                            n.e("66495"),
                            n.e("91146"),
                            n.e("42724"),
                            n.e("43437"),
                            n.e("39970"),
                            n.e("82263"),
                            n.e("42451"),
                            n.e("30221"),
                            n.e("8371"),
                            n.e("8555"),
                            n.e("86127"),
                            n.e("6174"),
                            n.e("39851"),
                            n.e("58216"),
                            n.e("72789"),
                            n.e("6949"),
                            n.e("29871"),
                            n.e("17249"),
                            n.e("41250"),
                            n.e("35027"),
                            n.e("84971"),
                            n.e("53917"),
                            n.e("9640"),
                            n.e("62422"),
                            n.e("15423"),
                            n.e("26295"),
                            n.e("88599"),
                            n.e("36863"),
                            n.e("1518"),
                            n.e("67861"),
                            n.e("15186"),
                            n.e("98765"),
                            n.e("23354"),
                            n.e("89088"),
                            n.e("82644"),
                            n.e("37187"),
                            n.e("71273"),
                            n.e("27779"),
                            n.e("75842"),
                            n.e("12743"),
                            n.e("10957"),
                            n.e("55973"),
                            n.e("20590"),
                            n.e("45172"),
                            n.e("65437"),
                            n.e("34983"),
                            n.e("63235"),
                            n.e("74810"),
                            n.e("28083"),
                            n.e("80830"),
                            n.e("86672"),
                            n.e("3589"),
                            n.e("86814"),
                            n.e("52548"),
                            n.e("35771"),
                            n.e("22266"),
                            n.e("53984"),
                            n.e("59414"),
                            n.e("80854"),
                            n.e("79780"),
                            n.e("35395"),
                            n.e("43780"),
                            n.e("14041"),
                            n.e("46844"),
                            n.e("45413"),
                            n.e("22822"),
                            n.e("75627"),
                            n.e("90664"),
                            n.e("79745"),
                            n.e("34150"),
                            n.e("64850"),
                            n.e("72401"),
                            n.e("22855"),
                            n.e("70104"),
                            n.e("68904"),
                            n.e("68802"),
                            n.e("52617"),
                            n.e("8563"),
                            n.e("2564"),
                            n.e("47417"),
                            n.e("19558"),
                            n.e("58946"),
                            n.e("14285"),
                            n.e("95752"),
                            n.e("78100"),
                            n.e("78453"),
                            n.e("8362"),
                            n.e("80149"),
                            n.e("2698"),
                            n.e("62875"),
                            n.e("4744"),
                            n.e("87046"),
                            n.e("12542"),
                            n.e("501"),
                            n.e("46769"),
                            n.e("33297"),
                            n.e("73384"),
                            n.e("86243"),
                            n.e("82783"),
                            n.e("7833"),
                            n.e("32209"),
                            n.e("30788"),
                            n.e("48295"),
                            n.e("60249"),
                            n.e("4193"),
                            n.e("39171"),
                            n.e("25246"),
                            n.e("37021"),
                            n.e("21049"),
                            n.e("8377"),
                            n.e("28610"),
                            n.e("44571"),
                            n.e("44795"),
                            n.e("80436"),
                            n.e("71268"),
                            n.e("95370"),
                            n.e("97784"),
                            n.e("10014"),
                            n.e("84783"),
                            n.e("44928"),
                            n.e("33416"),
                            n.e("83952"),
                            n.e("37752"),
                            n.e("3217"),
                            n.e("47678"),
                            n.e("5557"),
                            n.e("44780"),
                            n.e("95340"),
                            n.e("62718"),
                            n.e("93907"),
                            n.e("59957"),
                            n.e("89916"),
                            n.e("90301"),
                            n.e("49145"),
                            n.e("68763"),
                            n.e("15188"),
                            n.e("9004"),
                            n.e("15109"),
                            n.e("18489"),
                            n.e("29666"),
                            n.e("58273"),
                            n.e("60773"),
                            n.e("92295"),
                            n.e("19454"),
                            n.e("20930"),
                            n.e("74610"),
                            n.e("50535"),
                            n.e("81202"),
                            n.e("26001"),
                            n.e("99549"),
                            n.e("14591"),
                            n.e("52111"),
                            n.e("8018"),
                            n.e("79211"),
                            n.e("16988"),
                            n.e("30997"),
                            n.e("28136"),
                            n.e("57458"),
                            n.e("59797"),
                            n.e("90213"),
                            n.e("69765"),
                            n.e("1243"),
                            n.e("62304"),
                            n.e("16084"),
                            n.e("38090"),
                            n.e("75859"),
                            n.e("29080"),
                            n.e("44057"),
                            n.e("87317"),
                            n.e("43116"),
                            n.e("27659"),
                            n.e("10943"),
                            n.e("15920"),
                            n.e("68530"),
                            n.e("3930"),
                            n.e("78046"),
                            n.e("3663"),
                            n.e("38601"),
                            n.e("52212"),
                            n.e("66580"),
                            n.e("80093"),
                            n.e("73669"),
                            n.e("66016"),
                            n.e("83518"),
                            n.e("22547"),
                            n.e("60989"),
                            n.e("82486"),
                            n.e("3710"),
                            n.e("45830"),
                            n.e("7775"),
                            n.e("61058"),
                            n.e("50342"),
                            n.e("3304"),
                            n.e("33097"),
                            n.e("5896"),
                            n.e("77602"),
                            n.e("10262"),
                            n.e("95602"),
                            n.e("46313"),
                            n.e("29569"),
                            n.e("36002"),
                            n.e("43233"),
                            n.e("41786"),
                            n.e("91643"),
                            n.e("63726"),
                            n.e("71329"),
                            n.e("37038"),
                            n.e("56373"),
                            n.e("83827"),
                            n.e("42749"),
                            n.e("56026"),
                            n.e("16301"),
                            n.e("22191"),
                            n.e("25961"),
                            n.e("30501"),
                            n.e("8364"),
                            n.e("66147"),
                            n.e("89541"),
                            n.e("74337"),
                            n.e("52823"),
                            n.e("56967"),
                            n.e("47011"),
                            n.e("31203"),
                            n.e("66913"),
                            n.e("71719"),
                            n.e("19690"),
                            n.e("13848"),
                            n.e("39214"),
                            n.e("99108"),
                            n.e("14878"),
                            n.e("88307"),
                            n.e("26508"),
                            n.e("61347"),
                            n.e("14656"),
                            n.e("39855"),
                            n.e("73091"),
                            n.e("14530"),
                            n.e("86692"),
                            n.e("75933"),
                            n.e("52695"),
                            n.e("16237"),
                            n.e("16373"),
                            n.e("81398"),
                            n.e("93767"),
                            n.e("24484"),
                            n.e("44943"),
                            n.e("32347"),
                            n.e("8458"),
                            n.e("11810"),
                            n.e("48111"),
                            n.e("90152"),
                            n.e("24019"),
                            n.e("87973"),
                            n.e("57197"),
                            n.e("14863"),
                            n.e("84951"),
                            n.e("71167"),
                            n.e("12390"),
                            n.e("13446"),
                            n.e("34409"),
                            n.e("32607"),
                            n.e("61309"),
                            n.e("94529"),
                            n.e("30313"),
                            n.e("98371"),
                            n.e("21300"),
                            n.e("65011"),
                            n.e("17699"),
                            n.e("57032"),
                            n.e("45322"),
                            n.e("94832"),
                            n.e("26386"),
                            n.e("65338"),
                            n.e("94171"),
                            n.e("74572"),
                        ]).then(n.bind(n, 860417));
                        return (n) => (0, E.jsx)(e, { ...n, guild: t });
                    });
                }
                handleChannelContextMenu(e, t) {
                    let i = rx.A.getGuild(t.getGuildId());
                    if (null == i) return null;
                    (0, r5.L3)(e, async () => {
                        let { default: e } = await Promise.all([
                            n.e("26132"),
                            n.e("3998"),
                            n.e("9004"),
                            n.e("30997"),
                            n.e("12255"),
                            n.e("40959"),
                            n.e("79995"),
                            n.e("44058"),
                            n.e("35723"),
                            n.e("29542"),
                            n.e("67596"),
                        ]).then(n.bind(n, 113255));
                        return (n) => (0, E.jsx)(e, { ...n, channel: t, guild: i });
                    });
                }
            },
        )),
    ai = eU().throttle(() => id.u(), 3e5);
function ar() {
    let {
            nowPlayingCards: e,
            loaded: t,
            needsRefresh: n,
            fetching: i,
            currentUser: r,
        } = (0, C.cf)([iA.A, ic.A, iu.default], () => ({
            nowPlayingCards: iA.A.nowPlayingCards,
            loaded: iA.A.loaded,
            needsRefresh: ic.A.shouldFetch(),
            fetching: ic.A.isFetching(),
            currentUser: iu.default.getCurrentUser(),
        })),
        a = (0, C.bG)([it.A], () => it.A.quests),
        l = (0, ia.oH)(Array.from(a.values()));
    p.useEffect(
        () => (
            W.h.wait(() => ih.O()),
            () => {
                W.h.wait(() => ih.v());
            }
        ),
        [r?.id],
    ),
        p.useEffect(() => {
            n && !i && ai();
        }, [n, i]);
    let { use_api_call: s } = ir.getConfig({ location: "NowPlaying" }),
        { questsByPartyId: o, questIdsByPartyId: d } = p.useMemo(() => {
            let t = new Map(),
                n = new Map(),
                i = new Set(),
                r = (0, io.$e)(a, nf.B3);
            for (let a of e)
                a.party.currentActivities.forEach((e) => {
                    let { activity: l } = e;
                    if (null == l) return;
                    let s = (0, is.nq)(r, l);
                    null == s || i.has(s.id) || (t.set(a.party.id, s), i.add(s.id), n.set(a.party.id, s.id));
                });
            return { questsByPartyId: t, questIdsByPartyId: n };
        }, [e, a, l]),
        c = (0, C.bG)([it.A], () => it.A.earnedQuestForPlacement.get(ii.uF.ACTIVITY_PANEL), []),
        u = p.useRef([]),
        A = p.useMemo(() => {
            let e = Array.from(d.values()),
                t = u.current;
            return t.length === e.length && e.every((e, n) => e === t[n]) ? t : ((u.current = e), e);
        }, [d]);
    p.useEffect(() => {
        s && 0 !== A.length && (0, ie.yO)(A, ii.uF.ACTIVITY_PANEL, "NowPlaying");
    }, [A, s, c]);
    let h = p.useMemo(() => {
            if (!s) return o;
            if (null == c) return new Map();
            let e = new Map();
            for (let [t, n] of d.entries()) {
                let i = c.earnedDecisionByQuestId.get(n),
                    r = a.get(n);
                (0, il.Oh)(i) && i.shouldDeliver && null != r && e.set(t, r);
            }
            return e;
        }, [c, d, o, s, a]),
        _ = null;
    return t
        ? (_ =
              e.length > 0
                  ? e.map((e) => {
                        let { party: t } = e;
                        return (0, E.jsx)(an, { party: t, quest: h.get(t.id) }, t.id);
                    })
                  : (0, E.jsxs)("div", {
                        className: ae.aM,
                        children: [
                            (0, E.jsx)(nA.D, {
                                variant: "heading-md/semibold",
                                className: ae.jU,
                                children: G.intl.string(G.t["ngJ/5u"]),
                            }),
                            (0, E.jsx)(nu.E, {
                                color: "none",
                                className: ae.BI,
                                variant: "text-sm/normal",
                                children: G.intl.string(G.t["99ZWxQ"]),
                            }),
                        ],
                    }))
        : (0, E.jsx)("div", { className: ae.aM, children: (0, E.jsx)(tl.y, {}) });
}
var aa = n(678428);
function al() {
    let { analyticsLocations: e } = (0, nQ.Ay)(eg.A.ACTIVE_NOW_COLUMN),
        t = (0, C.bG)([n4.A], () => n4.A.hasConsented(D.YAq.PERSONALIZATION)) ? [] : [nW.M.NOW_PLAYING_CONSENT_CARD],
        n = (0, n$.GV)();
    return (0, E.jsx)(nQ.f5, {
        value: e,
        children: (0, E.jsx)(nZ.A, {
            section: D.JJy.ACTIVE_NOW_COLUMN,
            children: (0, E.jsx)("aside", {
                className: tn()(aa.kL, "refresh-active-now"),
                "aria-labelledby": n,
                children: (0, E.jsx)(nX.Ip, {
                    className: aa.XG,
                    children: (0, E.jsxs)("div", {
                        children: [
                            (0, E.jsx)(nA.D, {
                                variant: "heading-lg/semibold",
                                className: aa.wx,
                                id: n,
                                children: G.intl.string(G.t.F4Zggw),
                            }),
                            (0, E.jsx)(nJ.Ay, {
                                contentTypes: t,
                                children: (e) => {
                                    let { visibleContent: t, markAsDismissed: n } = e;
                                    if (t === nW.M.NOW_PLAYING_CONSENT_CARD)
                                        return (0, E.jsx)(n7, {
                                            className: aa.__invalid_consentCard,
                                            markAsDismissed: n,
                                        });
                                },
                            }),
                            (0, E.jsx)(ar, {}),
                        ],
                    }),
                }),
            }),
        }),
    });
}
var as = n(210714),
    ao = n(363195),
    ad = n(595623),
    ac = n(573725),
    au = n(49229),
    aA = n(953051),
    ah = n(395422),
    a_ = n(650583),
    aE = n(235351),
    ap = n(818050);
let am = n(892799),
    aI = { canSend: !1, hint: null, success: null, error: null },
    ag = (0, n$.Ld)(),
    aC = `${ag}-decription`,
    aT = `${ag}-error`;
function af(e, t) {
    switch (t.type) {
        case "RESET":
            return aI;
        case "SUCCESS":
            return { ...aI, success: t.text };
        case "HINT":
            return { ...aI, canSend: !0, hint: t.text };
        case "ERROR":
            return { ...e, canSend: !0, error: t.text };
    }
}
function aN(e) {
    let { placeholder: t = G.intl.string(G.t["Rn/sLl"]) } = e,
        n = p.useRef(null),
        i = p.useRef(null),
        [r, a] = p.useReducer(af, aI),
        { canSend: l, hint: s, error: o, success: d } = r;
    return (
        p.useEffect(() => {
            null != d &&
                (eM()(null != n.current, "Input is submitting when not mounted"),
                (n.current.value = ""),
                n.current.focus());
        }, [d, n]),
        (0, E.jsxs)("form", {
            onSubmit: (e) => {
                e.preventDefault(), eM()(null != n.current, "Input is submitted when not mounted");
                let t = n.current.value.trim();
                !t.includes("#") && t.startsWith("@") && (t = t.substring(1));
                let i = (0, ah.Ty)(t);
                null != i
                    ? a({ type: "ERROR", text: i })
                    : au.A.sendRequest({ discordTag: t, context: { location: "Add Friend" } }).then(
                          () => a({ type: "SUCCESS", text: G.intl.format(G.t.Rtl1Ep, { discordTag: t }) }),
                          (e) => a({ type: "ERROR", text: (0, ah.vU)(e.body?.code, t) }),
                      );
            },
            autoComplete: "off",
            children: [
                (0, E.jsxs)("div", {
                    className: aE.QR,
                    children: [
                        (0, E.jsx)(nu.E, {
                            tag: "div",
                            variant: "heading-md/normal",
                            children: G.intl.string(G.t["Rn/sLl"]),
                        }),
                        (0, E.jsx)("img", { src: am, alt: "Wumpus Waving" }),
                    ],
                }),
                (0, E.jsx)(iR.vN, {
                    focusTarget: n,
                    ringTarget: i,
                    ringClassName: aE.hN,
                    children: (0, E.jsxs)("div", {
                        ref: i,
                        className: tn()(aE.fc, { [aE.kX]: d, [aE.z3]: o }),
                        children: [
                            (0, E.jsx)(ac.p, {
                                id: ag,
                                inputRef: n,
                                className: aE.QP,
                                inputClassName: aE.hF,
                                onKeyPress: (e) => {
                                    let t = e.currentTarget.value;
                                    if (e.key !== a_.N$.Enter && t.includes("#")) {
                                        eM()(null != n.current, "Input is handling keypress when not mounted");
                                        let i = t.indexOf("#"),
                                            r = n.current.selectionStart,
                                            a =
                                                e.key === a_.N$.Backspace ||
                                                e.key === a_.N$.ArrowRight ||
                                                e.key === a_.N$.ArrowLeft,
                                            l = (0, aA.A)(e.key);
                                        null != r && r > i && /^(.+?#\d{4})$/.test(t) && !a
                                            ? e.preventDefault()
                                            : null == r || !(r > i) || l || a || e.preventDefault();
                                    }
                                },
                                onChange: (e) => {
                                    if (e.length <= 0) return void a({ type: "RESET" });
                                    let t = "",
                                        [, n] = e.split("#");
                                    null != n && (t = e + D.RoK.slice(null != n ? n.length + 1 : 0)),
                                        a({ type: "HINT", text: t });
                                },
                                maxLength: 37,
                                autoFocus: !0,
                                autoComplete: "off",
                                name: "add-friend",
                                "data-form-type": "other",
                                "data-lpignore": !0,
                                "data-1p-ignore": !0,
                                placeholder: t,
                                "aria-label": t,
                                "aria-invalid": null != o || void 0,
                                "aria-describedby": null != o ? aT : aC,
                            }),
                            null != s && (0, E.jsx)("div", { className: aE.dQ, "aria-hidden": !0, children: s }),
                            (0, E.jsx)(n0.$, {
                                variant: "primary",
                                size: "sm",
                                text: G.intl.string(G.t["PMsq/b"]),
                                disabled: !l,
                                type: "submit",
                            }),
                        ],
                    }),
                }),
                null != o &&
                    (0, E.jsx)("div", {
                        role: "alert",
                        children: (0, E.jsx)(nu.E, {
                            id: aT,
                            variant: "text-sm/normal",
                            className: ap.Ot,
                            color: "text-feedback-critical",
                            children: o,
                        }),
                    }),
                null != d &&
                    (0, E.jsx)("div", {
                        role: "status",
                        children: (0, E.jsx)(nu.E, {
                            variant: "text-sm/normal",
                            className: ap.Ot,
                            color: "text-feedback-positive",
                            children: d,
                        }),
                    }),
            ],
        })
    );
}
var aS = n(836480),
    aL = n(976860);
function aO(e) {
    let { color: t = "currentColor", ...n } = e;
    return (0, E.jsx)("svg", {
        ...n,
        fill: "none",
        height: "20",
        viewBox: "0 0 20 20",
        width: "20",
        xmlns: "http://www.w3.org/2000/svg",
        children: (0, E.jsx)("path", {
            clipRule: "evenodd",
            d: "m5.41667 4.2625 5.66573 5.7375-5.66573 5.7375 1.74426 1.7625 7.42237-7.5-7.42237-7.5z",
            fill: t,
            fillRule: "evenodd",
        }),
    });
}
var ay = n(505973);
function ab() {
    var e, t, n;
    return (0, E.jsxs)(p.Fragment, {
        children: [
            (0, E.jsxs)("header", {
                className: ay.wx,
                children: [
                    (0, E.jsx)(nA.D, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children: G.intl.string(G.t.IuMx1Y),
                    }),
                    (0, E.jsx)(nu.E, { tag: "div", variant: "heading-md/normal", children: G.intl.string(G.t.DwevPs) }),
                ],
            }),
            (0, E.jsx)("div", {
                className: ay.Vg,
                children:
                    ((e = aS.Q),
                    (t = G.intl.string(G.t.AhKnz4)),
                    (n = () => {
                        ec.default.track(D.HAw.ADD_FRIEND_OTHER_PLACES_DISCOVERY_CLICKED),
                            (0, aL.pX)(D.BVt.GUILD_DISCOVERY);
                    }),
                    (0, E.jsxs)(
                        "button",
                        {
                            className: ay.kL,
                            onClick: n,
                            children: [
                                "function" == typeof e
                                    ? (0, E.jsx)("div", {
                                          className: ay.Kk,
                                          children: (0, E.jsx)(e, {
                                              className: ay.__invalid_iconInner,
                                              color: tM.A.colors.WHITE.css,
                                          }),
                                      })
                                    : (0, E.jsx)("img", { className: ay.Kk, alt: "", src: e }),
                                (0, E.jsx)(nu.E, { className: ay.Qq, variant: "text-md/medium", children: t }),
                                (0, E.jsx)(aO, { className: ay.UE }),
                            ],
                        },
                        t,
                    )),
            }),
        ],
    });
}
var av = n(739175);
function aP() {
    return (0, E.jsxs)("header", {
        className: av.wx,
        children: [
            (0, E.jsx)(nA.D, { variant: "heading-lg/semibold", className: av.DD, children: G.intl.string(G.t.w5uwoI) }),
            (0, E.jsx)(aN, {}),
        ],
    });
}
let aR = function () {
    return (0, E.jsxs)(p.Fragment, { children: [(0, E.jsx)(aP, {}), (0, E.jsx)(ab, {})] });
};
var aD = n(123292),
    aw = n(900797),
    aM = n(847374),
    ax = n(892547),
    aU = n(70730),
    aG = n(45787),
    aj = n(275759),
    ak = n(534890),
    aV = n(530005),
    aF = n(157559),
    aH = n(3203),
    aB = n(408278),
    aY = n(597770),
    a$ = n(414711),
    az = n(397244),
    aq = n(714114),
    aK = n(729551),
    aW = n(501859);
let aX = function (e) {
    let { hovered: t, activities: n, applicationStream: i, status: r, user: a, userIgnored: l } = e,
        { voiceChannel: s } = (0, aq.A)({ userId: a?.id });
    return l
        ? (0, E.jsx)("div", { className: aW.Q, children: G.intl.string(G.t.tFY5Zb) })
        : (0, az.A)({ activities: n, status: r, applicationStream: i, voiceChannel: s })
          ? (0, E.jsx)(aK.A, {
                textClassName: aW.q,
                activities: n,
                applicationStream: i,
                voiceChannel: s,
                animateEmoji: t,
                user: a,
                textSize: "sm",
            })
          : (0, E.jsx)("div", { className: aW.Q, children: (0, rt.MU)(r) });
};
var aZ = n(723690),
    aQ = n(751188);
n(646363);
var aJ = n(728552);
function a0(e) {
    let {
            ref: t,
            isFocused: i,
            isActive: r,
            status: a,
            activities: l,
            applicationStream: s,
            isGameRelationship: o,
            isMobile: d,
            isVR: c,
            onOtherHover: u,
            onClick: A,
            recipientUser: h,
            analyticsLocations: _,
            giftIntentType: m,
        } = e,
        { analyticsLocations: I } = (0, nQ.Ay)(eg.A.PREMIUM_GIFT_INTENT_FRIEND_ROW),
        { Component: g } = (0, aH.V)(),
        f = (0, C.bG)([aj.Ay], () => aj.Ay.getFriendAnniversaryYears(h.id)),
        { openGiftModal: N } = (0, aQ.$)({
            giftRecipient: h,
            analyticsLocations: I,
            analyticsLocation: D.ThZ.FRIEND_ANNIVERSARIES_ACTION_BUTTON,
            analyticsObject: {
                page: D.liQ.FRIENDS_LIST,
                section: D.JJy.FRIENDS_LIST_FRIEND_ROW,
                object: D.ZSU.BUTTON_CTA,
                objectType: D.AnalyticsObjectTypes.GIFT,
            },
            location: "gift-intent-friend-row",
        });
    p.useEffect(() => {
        let e = ic.A.getUserAffinity(h.id);
        (0, iF.x)({
            name: ti.ImpressionNames.GIFT_INTENT_ACTION_BUTTON,
            type: ti.ImpressionTypes.VIEW,
            properties: { gift_intent_type: m, affinity: e?.communicationProbability },
        });
    }, [h, m]);
    let S = (e) => {
        e.stopPropagation();
        let t = ic.A.getUserAffinity(h.id);
        ec.default.track(D.HAw.GIFT_INTENT_ACTION_BUTTON_CLICKED, {
            gift_intent_type: m,
            affinity: t?.dmProbability,
            location_stack: I,
        }),
            N();
    };
    return (0, E.jsx)(a$.A, {
        ref: t,
        isFocused: i,
        isActive: r,
        user: h,
        analyticsLocations: _,
        onOtherHover: u,
        onClick: A,
        height: 72,
        children: (e) =>
            (0, E.jsxs)("div", {
                className: tn()(aJ.a4, aJ.Z$),
                children: [
                    (0, E.jsx)(aZ.A, {
                        className: aJ.Cv,
                        user: h,
                        status: a,
                        isMobile: d,
                        isVR: c,
                        subText: (0, E.jsxs)(E.Fragment, {
                            children: [
                                (0, E.jsx)(aX, {
                                    hovered: e,
                                    activities: l,
                                    applicationStream: s,
                                    status: a,
                                    user: h,
                                    userIgnored: eZ.A.isIgnored(h.id),
                                }),
                                (0, E.jsxs)("div", {
                                    className: aJ.K3,
                                    children: [
                                        (0, E.jsx)(nF.$, { size: "xxs", color: "currentColor" }),
                                        (0, E.jsx)(nu.E, {
                                            variant: "text-xs/normal",
                                            color: "text-subtle",
                                            children: G.intl.formatToPlainString(G.t.S3fdq7, { numberOfYears: f }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        hovered: e,
                        showAccountIdentifier: !o && !h.isProvisional,
                    }),
                    (0, E.jsxs)("div", {
                        className: aJ.o1,
                        children: [
                            (0, E.jsx)(aB.K, {
                                size: "sm",
                                variant: "secondary",
                                icon: g,
                                "aria-label": G.intl.string(G.t.I61IsE),
                                onClick: () => {
                                    ec.default.track(D.HAw.GIFT_INTENT_CARD_SECONDARY_CTA_CLICKED, {
                                        gift_intent_type: m,
                                        cta_type: "send_message",
                                        location_stack: I,
                                    }),
                                        (0, aG.xs)(h.id),
                                        (0, T.openModalLazy)(async () => {
                                            let { default: e } = await Promise.all([n.e("22638"), n.e("95501")]).then(
                                                n.bind(n, 367516),
                                            );
                                            return (t) =>
                                                (0, E.jsx)(e, {
                                                    ...t,
                                                    giftIntentType: m ?? void 0,
                                                    analyticsLocationHistory: I,
                                                });
                                        });
                                },
                            }),
                            (0, E.jsx)(n0.$, {
                                size: "sm",
                                text: G.intl.string(G.t.PEjaCx),
                                icon: aY.o,
                                "aria-label": G.intl.string(G.t.PEjaCx),
                                onClick: S,
                            }),
                        ],
                    }),
                ],
            }),
    });
}
var a1 = n(22212),
    a8 = n(430159),
    a3 = n(513297),
    a2 = n(788868);
function a7(e) {
    let { user: t, applicationId: n, isGameRelationship: i, onSelect: r } = e,
        a = p.useCallback(() => {
            (0, a1.X9)({ targetUserId: t.id, tab: ad.Ay.getState().section }),
                rQ.A.openPrivateChannel({ recipientIds: t.id, joinCall: !0 });
        }, [t.id]),
        l = p.useCallback(() => {
            (0, a1.Cf)({ targetUserId: t.id, tab: ad.Ay.getState().section }),
                rQ.A.openPrivateChannel({ recipientIds: t.id, joinCall: !0, joinCallVideo: !0 });
        }, [t.id]),
        s = p.useCallback(() => {
            a8.A.removeFriend({ userId: t.id, applicationId: i ? n : null, location: "Friends" });
        }, [n, i, t.id]),
        o = p.useCallback(() => {
            let e = i ? G.intl.string(G.t.RLcE6x) : G.intl.string(G.t.cvSt1J);
            (0, a1.lP)({ targetUserId: t.id, tab: ad.Ay.getState().section }),
                aF.A.show({
                    title: G.intl.formatToPlainString(G.t.fPLvZd, { name: rt.Ay.getName(t) }),
                    body: G.intl.formatToPlainString(G.t.l5FFq6, { name: rt.Ay.getName(t) }),
                    confirmText: e,
                    confirmVariant: "critical-primary",
                    cancelText: G.intl.string(G.t["ETE/oC"]),
                    onConfirm: s,
                });
        }, [s, i, t]),
        d = (0, C.bG)([eS.Ay], () => eS.Ay.supports(eO.O5.VIDEO)),
        c = t.isProvisional,
        u = i ? G.intl.string(G.t.RLcE6x) : G.intl.string(G.t.cvSt1J);
    return (0, E.jsxs)(rN.W, {
        "data-menu-migrated-auto": !0,
        navId: "friend-row",
        "aria-label": G.intl.string(G.t.liqwPJ),
        onClose: r5.Z_,
        onSelect: r,
        children: [
            !c && d ? (0, E.jsx)(rS.Dr, { id: "start-video-call", label: G.intl.string(G.t.oCqlGG), action: l }) : null,
            !c && (0, E.jsx)(rS.Dr, { id: "start-voice-call", label: G.intl.string(G.t.focH1t), action: a }),
            (0, E.jsx)(rS.Dr, { id: "remove-friend", label: u, action: o, color: "danger" }),
        ],
    });
}
class a4 extends p.PureComponent {
    peopleListItemRef = p.createRef();
    state = { isActiveRow: !1 };
    componentWillLeave(e) {
        null != this.peopleListItemRef.current && this.peopleListItemRef.current.componentWillLeave(e);
    }
    componentWillEnter(e) {
        null != this.peopleListItemRef.current && this.peopleListItemRef.current.componentWillEnter(e);
    }
    openPrivateChannel = () => {
        let { user: e } = this.props,
            t = eU().find(i6.A.getMutablePrivateChannels(), (t) => t.type === D.rbe.DM && t.getRecipientId() === e.id);
        null != t ? (0, aL.pX)(D.BVt.CHANNEL(D.ME, t.id)) : rQ.A.openPrivateChannel({ recipientIds: e.id });
    };
    handleRowClick = (e) => {
        e.stopPropagation(),
            (0, a1.xF)({ targetUserId: this.props.user.id, tab: ad.Ay.getState().section }),
            this.openPrivateChannel();
    };
    handleMessageClick = (e) => {
        e.stopPropagation(),
            (0, a1.WD)({ targetUserId: this.props.user.id, tab: ad.Ay.getState().section }),
            this.openPrivateChannel();
    };
    handleOpenActionsMenu = (e) => {
        let { user: t, isGameRelationship: n, applicationId: i } = this.props;
        (0, r5.jA)(e, (e) => (0, E.jsx)(a7, { ...e, user: t, applicationId: i, isGameRelationship: n }), {
            onClose: () => {
                this.setState({ isActiveRow: !1 });
            },
        }),
            this.setState({ isActiveRow: !0 });
    };
    render() {
        let {
                user: e,
                isFocused: t,
                analyticsLocations: n,
                activities: i,
                applicationStream: r,
                status: a,
                isMobile: l,
                isVR: s,
                isGameRelationship: o,
                giftIntentType: d,
                hasFriendAnniversarySection: c,
                sectionIndex: u,
            } = this.props,
            { isActiveRow: A } = this.state;
        return (0, aU.p)(eg.A.FRIENDS_LIST) && d === a2.np.FRIEND_ANNIVERSARY && c && 0 === u
            ? (0, E.jsx)(a0, {
                  ref: this.peopleListItemRef,
                  isFocused: t,
                  isActive: A,
                  recipientUser: e,
                  analyticsLocations: n,
                  onOtherHover: () => (A ? null : (0, r5.Z_)()),
                  onClick: this.handleRowClick,
                  giftIntentType: d,
                  status: a,
                  activities: i,
                  applicationStream: r,
                  isMobile: l,
                  isVR: s,
                  isGameRelationship: o,
              })
            : (0, E.jsx)(a$.A, {
                  ref: this.peopleListItemRef,
                  isFocused: t,
                  isActive: A,
                  user: e,
                  analyticsLocations: n,
                  onOtherHover: () => (A ? null : (0, r5.Z_)()),
                  onClick: this.handleRowClick,
                  children: (t) =>
                      (0, E.jsxs)("div", {
                          className: aJ.a4,
                          children: [
                              (0, E.jsx)(aZ.A, {
                                  user: e,
                                  status: a,
                                  isMobile: l,
                                  isVR: s,
                                  subText: (0, E.jsx)(aX, {
                                      hovered: t,
                                      activities: i,
                                      applicationStream: r,
                                      status: a,
                                      user: e,
                                      userIgnored: eZ.A.isIgnored(e.id),
                                  }),
                                  hovered: t,
                                  showAccountIdentifier: !o && !e.isProvisional,
                              }),
                              (0, E.jsxs)("div", {
                                  className: aJ.o1,
                                  children: [
                                      (0, E.jsx)(a3.A, {
                                          icon: ak.o,
                                          tooltip: G.intl.string(G.t["g33r/P"]),
                                          onClick: this.handleMessageClick,
                                          shouldHighlight: t,
                                      }),
                                      (0, E.jsx)(a3.A, {
                                          icon: aV.F,
                                          tooltip: G.intl.string(G.t["UKOtz+"]),
                                          onClick: this.handleOpenActionsMenu,
                                          shouldHighlight: t,
                                      }),
                                  ],
                              }),
                          ],
                      }),
              });
    }
}
var a6 = n(615300),
    a5 = n(396478),
    a9 = n(34275),
    le = (((d = {}).SECTION_NO_RESULTS = "SECTION_NO_RESULTS"), d);
let lt = Object.freeze({
        SECTION_ALL: {
            lightSrc: n(445451),
            darkSrc: n(642269),
            width: 376,
            height: 162,
            renderContent: (e) =>
                (0, E.jsxs)(p.Fragment, {
                    children: [
                        (0, E.jsx)(a5.SG, { note: G.intl.string(G.t.Y4vMY8) }),
                        (0, E.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: a9.x6,
                            children: (0, E.jsx)(n0.$, {
                                variant: "primary",
                                text: G.intl.string(G.t.w5uwoI),
                                onClick: e,
                            }),
                        }),
                    ],
                }),
        },
        SECTION_ONLINE: {
            lightSrc: n(939333),
            darkSrc: n(492055),
            width: 421,
            height: 218,
            renderContent: () => (0, E.jsx)(a5.SG, { note: G.intl.string(G.t.v7HbiQ) }),
        },
        SECTION_BLOCKED: {
            lightSrc: n(751906),
            darkSrc: n(689818),
            width: 433,
            height: 232,
            renderContent: () => (0, E.jsx)(a5.SG, { note: G.intl.string(G.t["9xdyWB"]) }),
        },
        SECTION_PENDING: {
            lightSrc: n(826223),
            darkSrc: n(317017),
            width: 415,
            height: 200,
            renderContent: (e, t) =>
                (0, E.jsxs)("div", {
                    className: a9.y7,
                    children: [
                        (0, E.jsx)(a5.SG, { note: G.intl.string(G.t["aCYQ+P"]) }),
                        null != e &&
                            (0, E.jsx)(n0.$, {
                                variant: "secondary",
                                text: t ? G.intl.string(G.t.R40bU2) : G.intl.string(G.t.rXl8fj),
                                onClick: e,
                                size: "sm",
                            }),
                    ],
                }),
        },
        SECTION_SUGGESTIONS: {
            lightSrc: n(826223),
            darkSrc: n(317017),
            width: 415,
            height: 200,
            renderContent: () => (0, E.jsx)(a5.SG, { note: G.intl.string(G.t["vgI/EF"]) }),
        },
        SECTION_NO_RESULTS: {
            lightSrc: n(939333),
            darkSrc: n(492055),
            width: 421,
            height: 218,
            renderContent: () => (0, E.jsx)(a5.SG, { note: G.intl.string(G.t["7sW4h1"]) }),
        },
    }),
    ln = (e) => {
        let { theme: t } = e,
            n = G.intl.string(G.t["oi+B4p"]);
        return (0, E.jsx)(a5.pp, { theme: t, children: (0, E.jsx)(a5.SG, { note: n }) });
    };
class li extends p.PureComponent {
    state = { opacity: new a6.A.Value(1) };
    componentWillEnter = (e) => {
        this.state.opacity.setValue(0), a6.A.timing(this.state.opacity, { toValue: 1, duration: 250 }).start(e);
    };
    componentWillLeave = (e) => {
        a6.A.timing(this.state.opacity, { toValue: 0, duration: 250 }).start(e);
    };
    render() {
        let { type: e, onClick: t, theme: n } = this.props,
            i = { opacity: this.state.opacity },
            r = (function (e) {
                switch (e) {
                    case D.m3P.ADD_FRIEND:
                    case D.m3P.ALL:
                        return lt.SECTION_ALL;
                    case D.m3P.ONLINE:
                        return lt.SECTION_ONLINE;
                    case D.m3P.PENDING:
                        return lt.SECTION_PENDING;
                    case D.m3P.SUGGESTIONS:
                        return lt.SECTION_SUGGESTIONS;
                    case "SECTION_NO_RESULTS":
                        return lt.SECTION_NO_RESULTS;
                    default:
                        throw Error("FriendsEmptyState: Invalid empty state");
                }
            })(e);
        return e === D.m3P.ADD_FRIEND
            ? (0, E.jsx)(a6.A.div, { className: a9.VD, style: i, children: (0, E.jsx)(ln, { theme: n }) })
            : (0, E.jsx)(a6.A.div, {
                  className: a9.VD,
                  style: i,
                  children: (0, E.jsx)(a5.pp, { theme: n, children: r.renderContent(t) }),
              });
    }
}
let lr = C.Ay.connectStores([ao.A], () => ({ theme: ao.A.theme }), { forwardRef: !0 })(li);
var la = n(933832),
    ll = n(789645),
    ls = n(640708),
    lo = n(390848),
    ld = n(525075);
function lc(e) {
    let { user: t, applicationId: n, isGameRelationship: i, active: r } = e,
        [a, l] = p.useState(!1),
        s = iu.default.getCurrentUser()?.isStaff() && t?.isStaff(),
        { acceptFriendRequest: o, cancelFriendRequest: d } = (0, lo.I)({
            userId: t.id,
            applicationId: n,
            isGameRelationship: i,
            location: "Friends",
            onFinally: () => {
                l(!1);
            },
        }),
        c = p.useCallback(
            (e) => {
                l(!0), e.stopPropagation(), o();
            },
            [o],
        ),
        u = p.useCallback(
            (e) => {
                e.stopPropagation(), d();
            },
            [d],
        );
    return (0, E.jsxs)(E.Fragment, {
        children: [
            s &&
                (0, E.jsx)("div", {
                    className: ld.ou,
                    children: (0, E.jsx)(nV.Lp, {
                        color: tM.A.unsafe_rawColors.BRAND_500.css,
                        text: G.intl.string(G.t.oMx98L),
                    }),
                }),
            (0, E.jsx)(a3.A, {
                icon: la.A,
                actionType: a3.A.ActionTypes.ACCEPT,
                tooltip: G.intl.string(G.t.Zcibdf),
                onClick: c,
                shouldHighlight: r,
                loading: a,
            }),
            (0, E.jsx)(a3.A, {
                icon: ll.P,
                actionType: a3.A.ActionTypes.DENY,
                tooltip: G.intl.string(G.t.xuio0C),
                onClick: u,
                shouldHighlight: r,
            }),
        ],
    });
}
function lu(e) {
    let { userId: t, applicationId: n, isGameRelationship: i, active: r } = e,
        { cancelFriendRequest: a } = (0, lo.I)({
            userId: t,
            applicationId: n,
            isGameRelationship: i,
            location: "Friends",
        }),
        l = p.useCallback(
            (e) => {
                e.stopPropagation(), a();
            },
            [a],
        );
    return (0, E.jsx)(a3.A, {
        icon: ll.P,
        actionType: a3.A.ActionTypes.DENY,
        tooltip: G.intl.string(G.t.eaq81S),
        onClick: l,
        shouldHighlight: r,
    });
}
function lA(e) {
    let { isGameRelationship: t, applicationId: n, userTag: i, isProvisional: r } = e,
        a = p.useMemo(() => (t ? G.intl.string(G.t["Uv/eTx"]) : i), [t, i]),
        l = (0, C.bG)([iY.A], () => (null != n ? iY.A.getApplication(n) : null));
    return (0, E.jsxs)("div", {
        className: ld.P9,
        children: [
            !r && (0, E.jsx)(nu.E, { variant: "text-sm/medium", color: "text-subtle", children: a }),
            null != l &&
                (0, E.jsxs)(E.Fragment, {
                    children: [
                        !r && (0, E.jsx)(ls.A, { height: 2, width: 2 }),
                        (0, E.jsx)(iQ.A, { game: l, size: iQ.M.XXSMALL }),
                        (0, E.jsx)(nu.E, { variant: "text-sm/medium", color: "text-subtle", children: l.name }),
                    ],
                }),
        ],
    });
}
function lh(e) {
    let { user: t, hovered: n, status: i, isGameRelationship: r, applicationId: a } = e,
        l = rt.Ay.useUserTag(t);
    return (0, E.jsx)(aZ.A, {
        user: t,
        hovered: n,
        status: i,
        showAccountIdentifier: !1,
        subText: (0, E.jsx)(lA, {
            isGameRelationship: r,
            isProvisional: t.isProvisional,
            applicationId: a,
            userTag: l,
        }),
    });
}
function l_(e) {
    let { user: t, type: n, status: i, isFocused: r, applicationId: a, isGameRelationship: l } = e,
        { analyticsLocations: s } = (0, nQ.Ay)(),
        o = i === D.clD.OFFLINE ? D.clD.UNKNOWN : i,
        d = p.useCallback(() => (0, rz.openUserProfileModal)({ userId: t.id, sourceAnalyticsLocations: s }), [s, t.id]);
    return (0, E.jsx)(a$.A, {
        isFocused: r,
        user: t,
        analyticsLocations: s,
        onClick: d,
        children: (e) =>
            (0, E.jsxs)("div", {
                className: ld.a4,
                children: [
                    (0, E.jsx)(lh, { user: t, hovered: e, status: o, isGameRelationship: l, applicationId: a }),
                    (0, E.jsx)("div", {
                        className: ld.o1,
                        children:
                            n === D.eA$.PENDING_INCOMING
                                ? (0, E.jsx)(lc, { user: t, applicationId: a, isGameRelationship: l, active: e })
                                : (0, E.jsx)(lu, { userId: t.id, applicationId: a, isGameRelationship: l, active: e }),
                    }),
                ],
            }),
    });
}
var lE = n(887129),
    lp = n(837381),
    lm = n(475825),
    lI = n(795733);
let lg = function (e) {
    let { rows: t, renderRow: n, renderSection: i, footer: r, sectionFilter: a, renderSectionFooter: l } = e,
        s = (e) => {
            let { section: i, row: r } = e,
                a = t[i];
            if (null == a || null == r) return null;
            let l = a[r];
            return null == l ? null : n(l, i);
        },
        o = p.useCallback(
            (e, n) => {
                let i = t[e]?.[n];
                return a === D.m3P.ALL && i?.giftIntentType === a2.np.FRIEND_ANNIVERSARY && 0 === e ? 72 : 61;
            },
            [t, a],
        ),
        d = p.useCallback(
            (e) => {
                let { section: t } = e;
                return i(t);
            },
            [i],
        ),
        c = p.useCallback((e) => (null == l ? null : l(e.section)), [l]),
        u = p.useCallback((e) => (null == l ? 0 : 48 * (null != l(e))), [l]),
        A = (0, C.bG)([H.A], () => H.A.keyboardModeEnabled),
        h = p.useRef(null),
        _ = p.useCallback(
            () =>
                new Promise((e) => {
                    let t = h.current;
                    if (null == t) return e();
                    t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            [],
        ),
        m = p.useCallback(
            () =>
                new Promise((e) => {
                    let t = h.current;
                    if (null == t) return e();
                    t.scrollToBottom({ callback: () => requestAnimationFrame(() => e()) });
                }),
            [],
        ),
        I = p.useCallback((e) => {
            let t = document.querySelector(e),
                n = h.current;
            null != t && null != n && n.scrollIntoViewNode({ node: t, padding: 8, callback: () => t?.focus() });
        }, []),
        g = (0, lE.Ay)({ id: "people-list", isEnabled: A, scrollToStart: _, scrollToEnd: m, setFocus: I }),
        T = p.useMemo(() => t.map((e) => e.length), [t]);
    return (0, E.jsx)(lp.hD, {
        navigator: g,
        children: (0, E.jsx)(lp.PR, {
            children: (e) => {
                let { ref: t, ...n } = e;
                return (0, E.jsxs)(E.Fragment, {
                    children: [
                        (0, E.jsx)(lm.Ei, {
                            ref: (e) => {
                                (h.current = e), (t.current = e?.getScrollerNode() ?? null);
                            },
                            renderRow: s,
                            rowHeight: o,
                            renderSection: d,
                            sectionHeight: 50,
                            renderFooter: c,
                            footerHeight: u,
                            sections: T,
                            className: lI.e3,
                            ...n,
                        }),
                        r,
                    ],
                });
            },
        }),
    });
};
var lC = n(73939);
let lT = function (e) {
    let {
            rows: t,
            renderRow: n,
            renderSection: i,
            hasSearchQuery: r,
            sectionFilter: a,
            footer: l,
            renderSectionFooter: s,
        } = e,
        o = (0, C.bG)([H.A], () => H.A.keyboardModeEnabled),
        d = (0, C.bG)([H.A], () => H.A.useReducedMotion),
        c = (0, lE.Ay)({ id: "people", isEnabled: o, async scrollToStart() {}, async scrollToEnd() {} }),
        u = a !== D.m3P.ONLINE && a !== D.m3P.ALL,
        A = d || r || u,
        h = p.useMemo(
            () =>
                t.map((e, t) =>
                    0 === e.length
                        ? null
                        : A
                          ? (0, E.jsxs)("div", { children: [i(t), e.map((e) => n(e, t)), s?.(t)] }, t)
                          : (0, E.jsxs)(
                                lC.F,
                                {
                                    transitionAppear: !1,
                                    component: "div",
                                    children: [i(t), e.map((e) => n(e, t)), s?.(t)],
                                },
                                t,
                            ),
                ),
            [n, i, s, t, A],
        );
    return (0, E.jsx)(lp.hD, {
        navigator: c,
        children: (0, E.jsx)(lp.PR, {
            children: (e) => {
                let { ref: t, ...n } = e;
                return (0, E.jsxs)(nX.Ar, { ref: t, className: lI.e3, ...n, children: [h, l] });
            },
        }),
    });
};
function lf(e) {
    let {
        rows: t,
        renderRow: n,
        renderSection: i,
        isVirtualizedList: r,
        hasSearchQuery: a,
        sectionFilter: l,
        footer: s,
        renderSectionFooter: o,
    } = e;
    return r
        ? (0, E.jsx)(lg, {
              rows: t,
              renderRow: n,
              renderSection: i,
              footer: s,
              sectionFilter: l,
              renderSectionFooter: o,
          })
        : (0, E.jsx)(lT, {
              rows: t,
              renderRow: n,
              renderSection: i,
              sectionFilter: l,
              hasSearchQuery: a,
              footer: s,
              renderSectionFooter: o,
          });
}
var lN = n(866945),
    lS = n(613755);
function lL() {
    let [e, t] = (0, tC.kn)([nW.M.RESTRICTED_ACCOUNTS_SETTING_NOTICE]);
    return p.useMemo(() => e === nW.M.RESTRICTED_ACCOUNTS_SETTING_NOTICE, [e])
        ? (0, E.jsx)(lN.e, {
              label: G.t.zqv4nV,
              labelHook: () => {
                  (0, e2.openUserSettings)(e3.X.CONTENT_AND_SOCIAL_RESTRICTED_USERS_CATEGORY);
              },
              dismissNotice: () => t(tf.i.USER_DISMISS),
              className: lS._,
              noticeType: el.YA.RESTRICTED_ACCOUNTS_SETTING_NOTICE,
          })
        : null;
}
var lO = n(485947),
    ly = n(490277);
function lb(e) {
    let { title: t, id: n } = e;
    return (0, E.jsx)(lO.A, { className: ly.D, id: n, children: t });
}
var lv = n(38910),
    lP = n(648356);
function lR(e) {
    let { user: t, nickname: n, status: i, isFocused: r } = e,
        { analyticsLocations: a } = (0, nQ.Ay)(),
        l = (e) => {
            e?.stopPropagation(),
                au.A.addRelationship({
                    userId: t.id,
                    context: { location: "Friends" },
                    type: void 0,
                    fromFriendSuggestion: !0,
                });
        },
        s = (e) => {
            e?.stopPropagation(), lv.A.ignore(t.id);
        },
        o = i === D.clD.OFFLINE ? D.clD.UNKNOWN : i;
    return (0, E.jsx)(a$.A, {
        isFocused: r,
        user: t,
        analyticsLocations: a,
        onClick: () => (0, rz.openUserProfileModal)({ userId: t.id, sourceAnalyticsLocations: a }),
        children: (e) => {
            let i = (0, E.jsxs)(E.Fragment, {
                children: [
                    (0, E.jsx)(a3.A, {
                        icon: la.A,
                        actionType: a3.A.ActionTypes.ACCEPT,
                        tooltip: G.intl.string(G.t.Zcibdf),
                        onClick: l,
                        shouldHighlight: e,
                    }),
                    (0, E.jsx)(a3.A, {
                        icon: ll.P,
                        actionType: a3.A.ActionTypes.DENY,
                        tooltip: G.intl.string(G.t.xuio0C),
                        onClick: s,
                        shouldHighlight: e,
                    }),
                ],
            });
            return (0, E.jsxs)("div", {
                className: lP.a,
                children: [
                    (0, E.jsx)(aZ.A, { user: t, hovered: e, status: o, subText: n, className: lP.__invalid_userInfo }),
                    (0, E.jsx)("div", { className: lP.o, children: i }),
                ],
            });
        },
    });
}
let lD = [];
function lw() {
    nY.A.transitionToSection(D.m3P.ADD_FRIEND, { explicit: !0 });
}
function lM() {
    (0, T.openModalLazy)(async () => {
        let { default: e } = await Promise.all([n.e("27917"), n.e("73152")]).then(n.bind(n, 516259));
        return (t) => (0, E.jsx)(e, { ...t });
    });
}
function lx(e) {
    let { section: t, showSpamCta: n } = e,
        i = p.useMemo(() => (n ? lM : t !== D.m3P.PENDING ? lw : void 0), [n, t]);
    return (0, E.jsx)("div", { className: lI.y7, children: (0, E.jsx)(lr, { type: t, onClick: i }, t) });
}
let lU = function (e) {
    let { titleId: t } = e,
        { analyticsLocations: n } = (0, nQ.Ay)(eg.A.FRIENDS_LIST),
        { rows: i, section: r } = (0, C.cf)([ad.Ay], () => ad.Ay.getState()),
        a = (0, C.bG)([eL.A], () => eL.A.isFocused()),
        { relationshipCount: l, hasBlockedOrIgnored: s } = (0, C.cf)([eZ.A], () => ({
            relationshipCount: eZ.A.getRelationshipCount(),
            hasBlockedOrIgnored: eZ.A.getBlockedOrIgnoredIDs().length > 0,
        })),
        [o, d] = p.useState(() => {
            let e = {};
            for (let t of Object.values(D.m3P)) e[t] = "";
            return e;
        }),
        c = (0, aU.p)(eg.A.FRIENDS_LIST),
        [u, A] = p.useState(!1),
        h = p.useCallback(
            (e, t) => {
                let { key: i, ...l } = e;
                switch (r) {
                    case D.m3P.PENDING:
                        return (0, E.jsx)(l_, { ...l, isFocused: a }, i);
                    case D.m3P.SUGGESTIONS:
                        return (0, E.jsx)(lR, { ...l, isFocused: a }, i);
                    case D.m3P.ALL:
                        return (0, E.jsx)(
                            a4,
                            {
                                ...l,
                                isFocused: a,
                                analyticsLocations: n,
                                sectionIndex: t,
                                hasFriendAnniversarySection: c,
                            },
                            `${t}-${i}`,
                        );
                    case D.m3P.ONLINE:
                    default:
                        return (0, E.jsx)(a4, { ...l, isFocused: a, analyticsLocations: n }, i);
                }
            },
            [r, a, n, c],
        ),
        _ = p.useCallback(
            (e) => {
                d({ ...o, [r]: e });
            },
            [o, r],
        ),
        m = p.useCallback(() => {
            d({ ...o, [r]: "" });
        }, [o, r]),
        I = p.useMemo(
            () =>
                r === D.m3P.PENDING && (i.filter(D.m3P.SPAM).length > 0 || i.filter(D.m3P.PENDING_IGNORED).length > 0),
            [i, r],
        ),
        g = p.useMemo(() => i.filter(r, o[r]), [i, o, r]),
        T = r === D.m3P.PENDING,
        f = p.useMemo(() => {
            if (!T) return lD;
            let e = [];
            return (
                g.forEach((t) => {
                    let { applicationId: n } = t;
                    null != n && e.push(n);
                }),
                e
            );
        }, [T, g]);
    (0, t$.A)(f, T);
    let N = p.useMemo(
            () =>
                r === D.m3P.ALL && c && g.some((e) => e.giftIntentType === a2.np.FRIEND_ANNIVERSARY)
                    ? g.filter((e) => e.giftIntentType === a2.np.FRIEND_ANNIVERSARY).length
                    : 0,
            [g, r, c],
        ),
        S = p.useMemo(() => {
            switch (r) {
                case D.m3P.PENDING:
                    let e = [],
                        t = [];
                    return (
                        g.forEach((n) => {
                            n.type === D.eA$.PENDING_INCOMING
                                ? e.push(n)
                                : n.type === D.eA$.PENDING_OUTGOING && t.push(n);
                        }),
                        [e, t]
                    );
                case D.m3P.ALL:
                    if (!(c && g.some((e) => e.giftIntentType === a2.np.FRIEND_ANNIVERSARY))) return [g];
                    {
                        let e = [];
                        return (
                            g.forEach((t) => {
                                t.giftIntentType === a2.np.FRIEND_ANNIVERSARY && e.push(t);
                            }),
                            e.sort((e, t) => ic.A.compareByDmProbability(e.userId, t.userId)),
                            [u ? e : e.slice(0, aj.ZD), g]
                        );
                    }
                default:
                    return [g];
            }
        }, [g, r, u, c]),
        L = p.useMemo(() => g.filter((e) => e.type === D.eA$.PENDING_INCOMING).length, [g]),
        O = r === D.m3P.PENDING && L > 0 && L >= 5,
        y = p.useCallback(
            (e) => {
                e.stopPropagation(), au.A.confirmClearPendingRelationships(L);
            },
            [L],
        ),
        b = p.useCallback(() => {
            A((e) => !e);
        }, []),
        v = p.useCallback(
            (e) => {
                let n = S[e],
                    i = (function (e, t, n, i) {
                        switch (e) {
                            case D.m3P.ONLINE:
                                return G.intl.formatToPlainString(G.t.BagU2U, { online: t.toString() });
                            case D.m3P.PENDING:
                                if (0 === n) return G.intl.formatToPlainString(G.t["g+3FIa"], { count: t.toString() });
                                if (1 === n) return G.intl.formatToPlainString(G.t.npJsRl, { count: t.toString() });
                                throw Error(`Unexpected pending friend requests section index: ${n}`);
                            case D.m3P.SUGGESTIONS:
                                return G.intl.formatToPlainString(G.t["DYMZ/p"], { count: t.toString() });
                            default:
                                if ((0, aU.p)(eg.A.FRIENDS_LIST) && i)
                                    if (0 === n) return G.intl.formatToPlainString(G.t.rrZTqK, { count: t.toString() });
                                    else if (1 === n);
                                    else throw Error(`Unexpected friends all section index: ${n}`);
                                return G.intl.formatToPlainString(G.t.rHRrhC, { count: t.toString() });
                        }
                    })(
                        r,
                        n.length,
                        e,
                        n.some((e) => e.giftIntentType === a2.np.FRIEND_ANNIVERSARY),
                    );
                return r === D.m3P.PENDING && 0 === e
                    ? (0, E.jsxs)(
                          "div",
                          {
                              className: lI.Gf,
                              children: [
                                  (0, E.jsx)(lb, { id: t, title: i }),
                                  O &&
                                      (0, E.jsx)("div", {
                                          className: lI.mt,
                                          children: (0, E.jsx)(aD.Q, {
                                              text: G.intl.string(G.t.O8k7O4),
                                              onClick: y,
                                              "aria-label": G.intl.string(G.t.O8k7O4),
                                              textVariant: "text-sm/medium",
                                          }),
                                      }),
                              ],
                          },
                          i,
                      )
                    : (0, E.jsx)("div", { className: lI.Gf, children: (0, E.jsx)(lb, { id: t, title: i }) }, i);
            },
            [S, r, t, O, y],
        ),
        P = p.useCallback(
            (e) =>
                r === D.m3P.ALL && 0 === e && c && N > aj.ZD
                    ? (0, E.jsx)("div", {
                          className: lI.Nf,
                          children: (0, E.jsx)(n0.$, {
                              icon: u ? aw.t : aM.a,
                              variant: "secondary",
                              size: "sm",
                              text: G.intl.string(u ? G.t["6MwJo/"] : G.t["37C26f"]),
                              onClick: b,
                              "aria-label": G.intl.string(u ? G.t["6MwJo/"] : G.t["37C26f"]),
                          }),
                      })
                    : null,
            [r, N, u, b, c],
        );
    if (
        (p.useEffect(() => {
            r === D.m3P.ALL && (0, aG.Ad)();
        }, [r]),
        p.useEffect(() => {
            A(!1);
        }, [r, N]),
        0 === g.length && "" === o[r])
    )
        return (0, E.jsx)(lx, { section: r, showSpamCta: I });
    let R = "" !== o[r],
        w = 0 === g.length && R;
    return (0, E.jsx)(nQ.f5, {
        value: n,
        children: (0, E.jsxs)(nZ.A, {
            section: D.JJy.FRIENDS_LIST,
            children: [
                s && (0, E.jsx)(lL, {}),
                (0, E.jsx)("div", {
                    className: lI.ON,
                    children: (0, E.jsx)(ax.I, { query: o[r], onChange: _, onClear: m }),
                }),
                (0, E.jsx)(lf, {
                    rows: S,
                    renderRow: h,
                    renderSection: v,
                    sectionFilter: r,
                    isVirtualizedList: l >= 64,
                    hasSearchQuery: R,
                    renderSectionFooter: P,
                    footer:
                        I && !w
                            ? (0, E.jsx)("div", {
                                  className: lI.RE,
                                  children: (0, E.jsx)(aD.Q, {
                                      text: G.intl.string(G.t.R40bU2),
                                      onClick: lM,
                                      textVariant: "text-xs/medium",
                                      variant: "secondary",
                                  }),
                              })
                            : null,
                }),
                w &&
                    (0, E.jsx)("div", {
                        className: lI.y7,
                        children: (0, E.jsx)(lr, { type: le.SECTION_NO_RESULTS }, r),
                    }),
            ],
        }),
    });
};
var lG = n(465158);
function lj() {
    return (0, E.jsx)("div", {
        className: lG.N3,
        children: (0, E.jsx)(nK.Ay, { tooltip: G.intl.string(G.t["HfOgA/"]) }),
    });
}
let lk = function (e) {
    let { initialSection: t } = e,
        n = (0, I.zy)(),
        i = (0, I.W6)();
    p.useEffect(() => {
        "true" === new URLSearchParams(n.search).get("confirm-age") &&
            W.h.dispatch({ type: "AGE_GATE_MODAL_OPEN", source: ea.w_.DEEP_LINK_PROMPT }).then(() => {
                i.replace(D.BVt.ME);
            });
    }, [i, n]),
        p.useEffect(() => {
            nB.I(D.BVt.FRIENDS), (0, as.d)("friends");
        }, []);
    let r = (0, C.bG)([ao.A], () => ao.A.theme),
        a = (0, eK.kX)(),
        { section: l, rows: s } = (0, C.cf)([ad.Ay], () => ad.Ay.getState()),
        o = (0, C.bG)([nz.A], () => nz.A.getSuggestionCount()),
        d = p.useMemo(() => s.getRelationshipCounts(), [s]);
    p.useEffect(() => {
        null != t && nY.A.setInitialSection(t),
            0 === d[D.eA$.FRIEND] &&
                0 === d[D.eA$.PENDING_INCOMING] &&
                0 === d[D.eA$.PENDING_OUTGOING] &&
                0 === d[D.eA$.BLOCKED] &&
                nY.A.transitionToSection(D.m3P.ADD_FRIEND);
    }, [t, d]);
    let c = (e) => {
            nY.A.transitionToSection(e, { explicit: !0 });
        },
        u = (0, n$.GV)(),
        A = (0, n$.GV)(),
        h = [
            {
                id: D.m3P.ONLINE,
                show: s.filter(D.m3P.ONLINE).length > 0,
                content: G.intl.string(G.t.b9w3bO),
                className: lG.AS,
            },
            { id: D.m3P.ALL, show: d[D.eA$.FRIEND] > 0, content: G.intl.string(G.t.PfjFjR), className: lG.AS },
            {
                id: D.m3P.PENDING,
                show: s.filter(D.m3P.PENDING).length > 0,
                content: (0, E.jsxs)(E.Fragment, {
                    children: [G.intl.string(G.t.p6IHGE), a > 0 && (0, E.jsx)(nV.hV, { count: a, className: lG.qS })],
                }),
                ariaLabel: G.intl.formatToPlainString(G.t.OAC0Z4, { count: a.toString() }),
                className: lG.AS,
            },
            {
                id: D.m3P.SUGGESTIONS,
                show: o > 0,
                content: (0, E.jsxs)(E.Fragment, {
                    children: [G.intl.string(G.t["8rSi1/"]), (0, E.jsx)(nV.hV, { count: o, className: lG.qS })],
                }),
                ariaLabel: G.intl.formatToPlainString(G.t.AbMQp7, { count: o.toString() }),
                className: lG.AS,
            },
            {
                id: D.m3P.ADD_FRIEND,
                show: !0,
                content: (0, E.jsx)("span", { children: G.intl.string(G.t.j0wbE5) }),
                ariaLabel: G.intl.string(G.t.j0wbE5),
                className: tn()(lG.AS, lG.GU),
            },
        ],
        _ = null,
        m = (0, E.jsx)("div", { className: lG.Xl, children: (0, E.jsx)(al, {}) });
    return (
        (_ = l === D.m3P.ADD_FRIEND ? (0, E.jsx)(aR, {}) : (0, E.jsx)(lU, { titleId: A })),
        (0, E.jsxs)("main", {
            className: lG.kL,
            "aria-label": G.intl.string(G.t.TdEu5X),
            children: [
                (0, E.jsx)(e0.HI, { location: G.intl.string(G.t.TdEu5X) }),
                (0, E.jsx)(ts.N, {
                    theme: r,
                    children: (e) =>
                        (0, E.jsxs)(nq.A, {
                            className: e,
                            toolbar: (0, E.jsx)(lj, {}),
                            role: "navigation",
                            "aria-labelledby": u,
                            scrollable: !0,
                            children: [
                                (0, E.jsx)(nq.A.Icon, { icon: nF.$, "aria-hidden": !0 }),
                                (0, E.jsx)(nq.A.Title, { id: u, children: G.intl.string(G.t.TdEu5X) }),
                                (0, E.jsx)(nq.A.Divider, {}),
                                (0, E.jsx)(nH.V, {
                                    "aria-label": G.intl.string(G.t.TdEu5X),
                                    selectedItem: l,
                                    type: "top-pill",
                                    onItemSelect: c,
                                    className: lG.$H,
                                    children: h
                                        .filter((e) => e.show)
                                        .map((e) =>
                                            (0, E.jsx)(
                                                nH.V.Item,
                                                {
                                                    id: e.id,
                                                    className: e.className,
                                                    "aria-label": e.ariaLabel,
                                                    children: e.content,
                                                },
                                                e.id,
                                            ),
                                        ),
                                }),
                            ],
                        }),
                }),
                (0, E.jsxs)("div", {
                    className: lG.MJ,
                    children: [
                        (0, E.jsx)(nH.V.Panel, { id: l, className: lG.UL, "aria-labelledby": A, children: _ }),
                        m,
                    ],
                }),
            ],
        })
    );
};
var lV = n(488803),
    lF = n(969117),
    lH = n(376708),
    lB = n(272720),
    lY = n(366811),
    l$ = n(320989),
    lz = n(463347),
    lq = n(334465),
    lK = n(97469),
    lW = n(718446),
    lX = n(650048),
    lZ = n(696451),
    lQ = n(519057),
    lJ = n(935208),
    l0 = n(521502),
    l1 = n(380610),
    l8 = n(828184),
    l3 = n(932553);
let l2 = "isHideDevBanner",
    l7 = () => {
        let [e, t] = (0, p.useState)(ta.w.get(l2, "false")?.toString() === "true"),
            n = (0, C.bG)([l0.A], () => ((0, l1.kK)() ? l0.A.getCurrentBuildOverride().overrides?.discord_web : null));
        if (e) return null;
        let i = () => {
                ta.w.set(l2, !0), t(!0);
            },
            r = () =>
                (0, E.jsx)(to.D, {
                    onClick: i,
                    className: l3.b,
                    "aria-label": G.intl.string(G.t.WAI6xu),
                    children: (0, E.jsx)(ll.P, { size: "md", color: "currentColor", className: l3.ut }),
                });
        return null != n
            ? (0, E.jsxs)("div", {
                  className: tn()(l3.Wz, l3.DM),
                  children: [(0, E.jsx)(l8.A, { className: l3.Kk }), G.intl.string(G.t.Wj3LW4), (0, E.jsx)(r, {})],
              })
            : "staging" === window.GLOBAL_ENV.RELEASE_CHANNEL
              ? (0, E.jsxs)("div", {
                    className: tn()(l3.Wz, l3.mr),
                    children: [
                        (0, E.jsx)(l8.A, { className: l3.Kk }),
                        G.intl.format(G.t.uyrfYF, { buildNumber: "536189" }),
                        (0, E.jsx)(r, {}),
                    ],
                })
              : null;
    };
var l4 = n(765671),
    l6 = n(757780),
    l5 = n(216894),
    l9 = n(985668),
    se = n(504337),
    st = n(629016),
    sn = n(885574),
    si = n(235986),
    sr = n(342296),
    sa = n(636585),
    sl = n(975571),
    ss = n(42473),
    so = n(994314),
    sd = n(485599),
    sc = n(246568);
class su extends p.PureComponent {
    partyMemberAvatarRef = p.createRef();
    partyMemberOverflowRef = p.createRef();
    isHost() {
        let { currentUser: e, host: t } = this.props;
        return e.id === t?.id;
    }
    renderTitle() {
        return (0, E.jsxs)("div", {
            children: [
                (0, E.jsx)(sd.A, {
                    children: this.isHost()
                        ? G.intl.formatToPlainString(G.t["6UJ7mh"], { count: this.props.party.length })
                        : G.intl.string(G.t.RZufbH),
                }),
                (0, E.jsx)(so.A, { children: G.intl.string(G.t["0ZHLIi"]) }),
            ],
        });
    }
    renderStopListeningButton() {
        let { onStopListening: e } = this.props;
        return this.isHost()
            ? null
            : (0, E.jsx)(ss.A, { tooltipText: G.intl.string(G.t.LeZSpz), onClick: e, icon: ll.P });
    }
    renderPartyMember = (e, t) => {
        let n;
        if (null == e) return null;
        let { host: i, onUserContextMenu: r } = this.props;
        return (
            (n = i?.id === e.id ? G.intl.string(G.t["N9bqD+"]) : G.intl.string(G.t.Z2Y4c9)),
            (0, E.jsx)(
                sr.A,
                {
                    targetElementRef: this.partyMemberAvatarRef,
                    user: e,
                    newAnalyticsLocations: [eg.A.AVATAR],
                    position: "top",
                    align: "center",
                    clickTrap: !0,
                    children: (i) =>
                        (0, E.jsx)(iL.m, {
                            text: n,
                            children: (0, p.createElement)(ib.eu, {
                                ...i,
                                key: e.id,
                                src: e.getAvatarURL(void 0, 24),
                                size: iv._3.SIZE_24,
                                className: tn()(sc.my, t),
                                "aria-label": e.username,
                                onContextMenu: (t) => void (null != e && r?.(t, e)),
                                avatarContentRef: this.partyMemberAvatarRef,
                            }),
                        }),
                },
                e.id,
            )
        );
    };
    renderPartyMemberOverflow = (e, t, n) => {
        let { renderOverflowPopout: i } = this.props;
        return (0, E.jsx)(
            n9.Y,
            {
                renderPopout: i,
                targetElementRef: this.partyMemberOverflowRef,
                children: (n) =>
                    (0, E.jsx)(iL.m, {
                        text: G.intl.string(G.t.Zf4NPe),
                        children: (0, E.jsx)("div", {
                            ...n,
                            ref: this.partyMemberOverflowRef,
                            className: tn()(sc.ju, t),
                            children: e,
                        }),
                    }),
            },
            n,
        );
    };
    renderHelpIcon() {
        return this.isHost()
            ? (0, E.jsx)(ss.A, {
                  tooltipText: G.intl.string(G.t.U7N2Hs),
                  onClick: () => {
                      window.open(sl.A.getArticleURL(D.MVz.SPOTIFY_CONNECTION), "_blank");
                  },
                  icon: sn.m,
              })
            : null;
    }
    render() {
        return (0, E.jsxs)("div", {
            className: sc.Jh,
            children: [
                this.renderTitle(),
                (0, E.jsx)(si.A, {
                    justify: si.A.Justify.END,
                    className: sc.Hg,
                    children: (0, E.jsx)(sa.A, {
                        users: this.props.party,
                        max: this.isHost() ? 5 : 4,
                        renderUser: this.renderPartyMember,
                        renderMoreUsers: this.renderPartyMemberOverflow,
                    }),
                }),
                (0, E.jsxs)("div", {
                    className: sc.Pt,
                    children: [this.renderHelpIcon(), this.renderStopListeningButton()],
                }),
            ],
        });
    }
}
var sA = n(883202);
class sh extends p.PureComponent {
    handleContextMenu(e, t) {
        (0, r5.L3)(e, async () => {
            let { default: e } = await Promise.all([
                n.e("39431"),
                n.e("31788"),
                n.e("26132"),
                n.e("46652"),
                n.e("93190"),
                n.e("34552"),
                n.e("8757"),
                n.e("89673"),
                n.e("68403"),
                n.e("85968"),
                n.e("60195"),
                n.e("29787"),
                n.e("97558"),
                n.e("94000"),
                n.e("91994"),
                n.e("76665"),
                n.e("76273"),
                n.e("24198"),
                n.e("86169"),
                n.e("32418"),
            ]).then(n.bind(n, 668569));
            return (n) => (0, E.jsx)(e, { ...n, user: t });
        });
    }
    renderUser(e) {
        return null == e
            ? null
            : (0, E.jsxs)(
                  si.A,
                  {
                      className: sA.kQ,
                      align: si.A.Align.CENTER,
                      onContextMenu: (t) => {
                          null != e && this.handleContextMenu(t, e);
                      },
                      children: [
                          (0, E.jsx)(ib.eu, {
                              src: e.getAvatarURL(void 0, 24),
                              "aria-label": e.username,
                              size: iv._3.SIZE_24,
                              className: sA.my,
                          }),
                          (0, E.jsx)(rq.A, {
                              user: e,
                              className: sA.Tc,
                              usernameClass: sA.Xh,
                              discriminatorClass: sA.D2,
                          }),
                      ],
                  },
                  e.id,
              );
    }
    render() {
        let { party: e, header: t } = this.props,
            n = e.map((e) => this.renderUser(e));
        return (0, E.jsxs)("div", {
            className: sA.Gh,
            children: [
                (0, E.jsx)("div", { className: sA.wx, children: t }),
                (0, E.jsx)(nX.Ip, { className: sA.Qs, fade: !0, children: n }),
            ],
        });
    }
}
class s_ extends p.PureComponent {
    hasParty(e) {
        return e.length > 1;
    }
    handleStopListening() {
        (0, se.A)();
    }
    handleUserContextMenu = (e, t) => {
        (0, r5.L3)(e, async () => {
            let { default: e } = await Promise.all([
                n.e("39431"),
                n.e("31788"),
                n.e("26132"),
                n.e("46652"),
                n.e("93190"),
                n.e("34552"),
                n.e("8757"),
                n.e("89673"),
                n.e("68403"),
                n.e("85968"),
                n.e("60195"),
                n.e("29787"),
                n.e("97558"),
                n.e("94000"),
                n.e("91994"),
                n.e("76665"),
                n.e("76273"),
                n.e("24198"),
                n.e("86169"),
                n.e("32418"),
            ]).then(n.bind(n, 668569));
            return (n) => (0, E.jsx)(e, { ...n, user: t });
        });
    };
    renderOverflowPopout = () => {
        let { party: e } = this.props;
        return (0, E.jsx)(sh, { party: e, header: G.intl.formatToPlainString(G.t.I9et1z, { count: e.length }) });
    };
    render() {
        let { currentUser: e, host: t, party: n } = this.props;
        return this.hasParty(n) && null != e
            ? (0, E.jsx)(su, {
                  currentUser: e,
                  host: t,
                  party: n,
                  renderOverflowPopout: this.renderOverflowPopout,
                  onStopListening: this.handleStopListening,
                  onUserContextMenu: this.handleUserContextMenu,
              })
            : null;
    }
}
let sE = C.Ay.connectStores([r1.A, iu.default, eZ.A, st.A], () => {
    let e,
        t,
        n = r1.A.getSyncingWith(),
        i = r1.A.getActivity(),
        r = iu.default.getCurrentUser(),
        a = [];
    return (
        null != n
            ? ((e = iu.default.getUser(n.userId)), (t = n.partyId))
            : null != i && null != i.party && null != i.party.id && ((e = r), (t = i.party.id)),
        null != t &&
            (a = eU()(Array.from(st.A.getParty(t) ?? []))
                .map((e) => iu.default.getUser(e))
                .filter(re.Vq)
                .orderBy([(t) => null == e || e.id === t.id, (e) => eZ.A.isFriend(e.id)], ["desc", "desc"])
                .value()),
        { currentUser: r, host: e, party: a }
    );
})(s_);
var sp = n(936504),
    sm = n(697744),
    sI = n(416696),
    sg = n(446080),
    sC = n(744682);
let sT = {
    disable: { name: "disable", start: 0, duration: 70 },
    enable: { name: "enable", start: 100, duration: 70 },
    hover_enabled: { name: "hover_enabled", start: 200, duration: 70 },
    hover_disabled: { name: "hover_disabled", start: 300, duration: 70 },
};
var sf = n(315710),
    sN = n(243721),
    sS = n(452027),
    sL = n(349288),
    sO = n(532676),
    sy = n(432017),
    sb = n(125628),
    sv = n(951001),
    sP = n(155718),
    sR = n(967812),
    sD = n(404522),
    sw = n(782091),
    sM = n(641703),
    sx = n(521588),
    sU = n(975412),
    sG = n(152567),
    sj = n(329072),
    sk = n(384059),
    sV = n(480890),
    sF = n(643501),
    sH = n(857253),
    sB = n(528767),
    sY = n(790381),
    s$ = n(30529),
    sz = n(544105),
    sq = n(674586);
function sK(e) {
    let { platform: t } = e;
    return t === sz.f$.XBOX
        ? (0, E.jsx)(i9.A, { className: sq.Kk })
        : t === sz.f$.PLAYSTATION
          ? (0, E.jsx)(sY.A, { className: sq.Kk })
          : null;
}
function sW(e) {
    let { voiceState: t, awaitingRemoteSessionInfo: n } = e,
        i = null != n ? (0, s$.X)(n.type) : null,
        r = (0, C.bG)([sB.A], () => sB.A.getSessionById(t?.sessionId ?? "")?.clientInfo.os),
        a = i ?? r;
    if (null == a || !sz.hv.has(a)) return null;
    let l = null != n,
        s = l
            ? a === sz.f$.XBOX
                ? G.intl.string(G.t.UjA4HX)
                : G.intl.string(G.t.QCw1oW)
            : a === sz.f$.XBOX
              ? G.intl.format(G.t["ynEs/Y"], {})
              : G.intl.format(G.t.TZ17Bg, {});
    return (0, E.jsxs)("div", {
        className: tn()(sq.zr, l ? sq.jI : sq.aW),
        children: [
            (0, E.jsx)(sK, { platform: a }),
            (0, E.jsx)(nu.E, { color: l ? "text-strong" : "always-white", variant: "text-xs/medium", children: s }),
        ],
    });
}
var sX = n(880144),
    sZ = n(338771),
    sQ = n(421838),
    sJ = n(891540),
    s0 = n(267102),
    s1 = n(205106),
    s8 = n(999751),
    s3 = n(123973),
    s2 = n(621956),
    s7 = n(160761),
    s4 = n(173660),
    s6 = n(234320),
    s5 = n(536432),
    s9 = n(674168),
    oe = n(126970),
    ot = n(395766);
function on(e) {
    let { channel: t, ...i } = e,
        r = p.useRef(null),
        { mute: a, suppress: l } = (0, s4.A)(t),
        s = (0, tg.bG)([eS.Ay], () => eS.Ay.isDeaf()),
        o = a || l || s,
        [d, c] = p.useState(!1),
        u = t.getGuildId(),
        A = (0, s5.VE)({ isSoundboardButtonDisabled: o }),
        [h, _] = (0, s7.DP)(A),
        { analyticsLocations: m, parentAnalyticsLocation: I } = (0, nQ.Ay)(eg.A.SOUNDBOARD_BUTTON);
    function g(e) {
        null != u &&
            (0, r5.L3)(e, async () => {
                let { default: e } = await n.e("11562").then(n.bind(n, 666801));
                return (t) =>
                    (0, E.jsx)(e, {
                        guildId: u,
                        sourceAnalyticsLocations: m,
                        ...t,
                        onInteraction: (0, sV.s)("SoundboardContextMenu", eg.A.RTC_PANEL),
                    });
            });
    }
    let {
            Component: C,
            play: T,
            events: { onMouseEnter: f, onMouseLeave: N },
        } = (0, s2.E)(),
        S = p.useCallback(() => {
            o || c(!d);
        }, [o, d]);
    return (
        (0, s6.Vo)({ event: D.jej.TOGGLE_SOUNDBOARD, handler: S }),
        (0, E.jsx)(nQ.f5, {
            value: m,
            children: (0, E.jsx)(iL.m, {
                targetElementRef: r,
                text: a
                    ? G.intl.string(G.t["Ox4/zU"])
                    : l
                      ? G.intl.string(G.t["+YBKYI"])
                      : s
                        ? G.intl.string(G.t.X1lQli)
                        : G.intl.string(G.t["6EJvHt"]),
                asContainer: !0,
                shouldShow: !d,
                children: (0, E.jsx)(n9.Y, {
                    targetElementRef: r,
                    animation: n9.Y.Animation.FADE,
                    shouldShow: d,
                    position: "top",
                    onRequestClose: () => c(!1),
                    renderPopout: (e) => {
                        let { closePopout: n } = e;
                        return (0, E.jsx)(oe.A, {
                            guildId: u,
                            channel: t,
                            onClose: n,
                            gridNotice:
                                h === nW.M.CUSTOM_CALL_SOUNDS_PICKER_UPSELL &&
                                (0, E.jsx)(s9.m, { onClose: n, markAsDismissed: _ }),
                            analyticsSource: "rtc panel",
                        });
                    },
                    children: (e) =>
                        (0, E.jsx)("div", {
                            ref: r,
                            children: (0, E.jsx)(tx.$n, {
                                "data-migration-pending": !0,
                                ...e,
                                className: tn()(ot.x6, ot.Sq, { [ot.W4]: d, [ot.r9]: o }),
                                wrapperClassName: ot.x6,
                                innerClassName: ot.bk,
                                disabled: o,
                                onClick: () => {
                                    null != h && h !== nW.M.CUSTOM_CALL_SOUNDS_PICKER_UPSELL && _(tf.i.UNKNOWN),
                                        c(!d),
                                        T(),
                                        (0, sk.X)(I, sk.O.SOUNDBOARD);
                                },
                                onMouseEnter: (e) => {
                                    i.onMouseEnter?.(e), f();
                                },
                                onMouseLeave: (e) => {
                                    i.onMouseLeave?.(e), N();
                                },
                                onContextMenu: g,
                                fullWidth: !0,
                                size: tx.$n.Sizes.MEDIUM,
                                ...i,
                                children: (0, E.jsx)(C, { className: ot.iA, size: "sm", color: "currentColor" }),
                            }),
                        }),
                }),
            }),
        })
    );
}
var oi = n(63995),
    or = n(69407),
    oa = n(96566),
    ol = n(302884),
    os = n(30108),
    oo = n(39938),
    od = n(105530),
    oc = n(253932),
    ou = n(151476),
    oA = n(405018),
    oh = n(704877),
    o_ = n(848362),
    oE = n(222692),
    op = n(702904),
    om = n(471993),
    oI = n(442353),
    og = n(970636),
    oC = n(616356),
    oT = n(607567),
    of = n(377802),
    oN = n(707592),
    oS = n(132860),
    oL = n(993838),
    oO = n(106044);
function oy(e) {
    let { tooltipText: t, onClick: n } = e,
        { parentAnalyticsLocation: i } = (0, nQ.Ay)(),
        { events: r, Component: a } = (0, of.O)();
    return (0, E.jsx)(ss.A, {
        tooltipText: t,
        onClick: () => {
            (0, sk.X)(i, sk.O.DISCONNECT), n();
        },
        ...r,
        icon: (0, E.jsx)(a, { size: "refresh_sm" }),
    });
}
function ob(e) {
    let { channel: t } = e;
    return (0, E.jsx)(oy, {
        tooltipText: G.intl.string(G.t.SMKyih),
        onClick: () => {
            (0, oO.A)(t) ? (0, oL.j3)(t) : O.default.disconnect();
        },
    });
}
function ov(e) {
    let { channel: t } = e;
    return (0, E.jsx)(oy, {
        tooltipText: G.intl.string(G.t["6vrfgt"]),
        onClick: () => {
            (0, oS.A)(t) ? (0, oN.Py)(t) : O.default.disconnect();
        },
    });
}
function oP(e) {
    let { channel: t } = e;
    return t.isGuildStageVoice() ? (0, E.jsx)(ob, { channel: t }) : (0, E.jsx)(ov, { channel: t });
}
var oR = n(615675),
    oD = n(666654),
    ow = n(990836),
    oM = n(83107),
    ox = n(834040),
    oU = n(307301),
    oG = n(717558),
    oj = n(770178),
    ok = n(765548),
    oV = n(556525),
    oF = n(551826),
    oH = n(31408),
    oB = n(595811);
let oY = { offset: 2 },
    o$ = {
        serverDeaf: { icon: oR.T, colorize: !0, getStatus: () => G.intl.string(G.t.btxSdB) },
        serverMute: { icon: oD.O, colorize: !0, getStatus: () => G.intl.string(G.t.uLddbQ) },
        deaf: { icon: ow.c, colorize: !1, getStatus: () => G.intl.string(G.t.NjmiOL) },
        mute: { icon: oM.z, colorize: !1, getStatus: () => G.intl.string(G.t.tjtv3P) },
        localMute: { icon: oD.O, colorize: !1, getStatus: () => G.intl.string(G.t["9F+xJU"]) },
    };
function oz(e) {
    let t = p.useRef(null),
        { parentAnalyticsLocation: i } = (0, nQ.Ay)(),
        { channel: r, user: a, nick: l, mute: s, deaf: o, serverMute: d, serverDeaf: c } = e,
        u = (0, C.bG)([eS.Ay], () => eS.Ay.isLocalMute(a.id)),
        A = (0, oG.A)({ userId: a.id, checkSoundSharing: !0 }),
        h = r.getGuildId() ?? void 0,
        _ = a.getAvatarURL(r.guild_id, 24),
        m = l ?? rt.Ay.getName(a),
        {
            icon: I,
            colorize: g,
            getStatus: T,
        } = (function (e) {
            let { serverDeaf: t, deaf: n, serverMute: i, mute: r, localMute: a } = e;
            if (t) return o$.serverDeaf;
            if (n) return o$.deaf;
            if (i) return o$.serverMute;
            if (a) return o$.localMute;
            if (r) return o$.mute;
        })({ serverDeaf: c, deaf: o, serverMute: d, mute: s, localMute: u }) ?? {},
        f = null != T ? G.intl.formatToPlainString(G.t["1+MVBP"], { userName: m, status: T() }) : m;
    function N(e) {
        null != h
            ? (0, r5.L3)(e, async () => {
                  let { default: e } = await Promise.all([
                      n.e("63397"),
                      n.e("6287"),
                      n.e("39431"),
                      n.e("26132"),
                      n.e("46652"),
                      n.e("93190"),
                      n.e("34552"),
                      n.e("55411"),
                      n.e("93103"),
                      n.e("13708"),
                      n.e("8757"),
                      n.e("89673"),
                      n.e("91007"),
                      n.e("68403"),
                      n.e("85968"),
                      n.e("76418"),
                      n.e("60195"),
                      n.e("21921"),
                      n.e("88342"),
                      n.e("66495"),
                      n.e("29787"),
                      n.e("97558"),
                      n.e("94000"),
                      n.e("82263"),
                      n.e("42451"),
                      n.e("30221"),
                      n.e("91994"),
                      n.e("98965"),
                      n.e("35027"),
                      n.e("76665"),
                      n.e("35313"),
                      n.e("24198"),
                      n.e("39171"),
                      n.e("36564"),
                      n.e("792"),
                      n.e("45996"),
                      n.e("92822"),
                      n.e("23427"),
                      n.e("49145"),
                      n.e("29422"),
                      n.e("9291"),
                      n.e("74610"),
                      n.e("7059"),
                      n.e("43116"),
                      n.e("66783"),
                      n.e("11617"),
                      n.e("70314"),
                      n.e("70515"),
                      n.e("27435"),
                      n.e("66939"),
                      n.e("17334"),
                      n.e("84841"),
                  ]).then(n.bind(n, 107632));
                  return (t) =>
                      (0, E.jsx)(e, {
                          ...t,
                          user: a,
                          guildId: h,
                          channel: r,
                          showMediaItems: !0,
                          onInteraction: (0, sV.s)("GuildChannelUserContextMenu", eg.A.RTC_PANEL, {
                              targetUserId: a.id,
                          }),
                      });
              })
            : (0, r5.L3)(e, async () => {
                  let { default: e } = await Promise.all([
                      n.e("39431"),
                      n.e("31788"),
                      n.e("26132"),
                      n.e("46652"),
                      n.e("93190"),
                      n.e("34552"),
                      n.e("8757"),
                      n.e("89673"),
                      n.e("68403"),
                      n.e("85968"),
                      n.e("60195"),
                      n.e("29787"),
                      n.e("97558"),
                      n.e("94000"),
                      n.e("91994"),
                      n.e("76665"),
                      n.e("76273"),
                      n.e("24198"),
                      n.e("86169"),
                      n.e("32418"),
                  ]).then(n.bind(n, 668569));
                  return (t) =>
                      (0, E.jsx)(e, {
                          ...t,
                          user: a,
                          showMediaItems: !0,
                          onInteraction: (0, sV.s)("UserGenericContextMenu", eg.A.RTC_PANEL, { targetUserId: a.id }),
                      });
              });
    }
    let S = (0, C.bG)([e4.A], () => e4.A.getVoiceVolume(a.id)),
        L = (0, oV.v)({ isSpeaking: A, voiceDb: S, spreadDirection: oV.O.INSET_ONLY, maxInnerSpreadRadius: 3 });
    return (0, E.jsx)(sr.A, {
        targetElementRef: t,
        user: a,
        guildId: h,
        channelId: r.id,
        position: "top",
        clickTrap: !0,
        children: (e) =>
            (0, E.jsx)(iL.m, {
                text: f,
                children: (0, E.jsx)(to.D, {
                    innerRef: t,
                    onClick: (t) => {
                        e.onClick(t), (0, sk.X)(i, sk.O.VOICE_USER);
                    },
                    className: oB.H,
                    onContextMenu: N,
                    focusProps: oY,
                    children: (0, E.jsx)(oF.A, {
                        shakeLocation: oH.uD.VOICE_USER,
                        isShaking: A,
                        children: (0, E.jsx)("div", {
                            className: oB.my,
                            style: { backgroundImage: `url(${_})`, ...L },
                            children:
                                null != I
                                    ? (0, E.jsx)(I, {
                                          className: tn()(oB.tr, { [oB.qE]: g }),
                                          color: "currentColor",
                                          size: "xs",
                                      })
                                    : null,
                        }),
                    }),
                }),
            }),
    });
}
function oq(e) {
    let { voiceStates: t, channel: n, className: i } = e,
        [r, a] = p.useState(!1),
        l = (0, C.bG)([R.default], () => R.default.getId()),
        { containerRef: s, maxVisibleAvatars: o } = (function (e) {
            let [t, n] = p.useState(7),
                i = (0, ok.A)(() => {
                    let t = r?.current;
                    if (null == t) return;
                    let i = Math.floor((t.offsetWidth + 4) / 28);
                    n(Math.max(1, e > i ? i - 1 : i));
                }),
                r = (0, oj.w)(i, [e], { fireOnMount: !0, fireOnDepsChange: !0 });
            return { containerRef: r, maxVisibleAvatars: t };
        })(t.length - 1),
        [d, c] = (function (e, t, n) {
            let i = [];
            for (let r of e)
                if (r.user.id !== t && !i.some((e) => e.user.id === r.user.id)) {
                    if (i.length >= n) return [i, !0];
                    i.push(r);
                }
            return [i, !1];
        })(t, l, o),
        u = r ? ox.Q : oU.j,
        A = r ? G.intl.string(G.t["Z/Tya5"]) : G.intl.string(G.t.XR5BAc),
        h = (0, E.jsx)(iL.m, {
            text: A,
            ariaHidden: !0,
            children: (0, E.jsx)(aB.K, {
                "aria-label": A,
                onClick: () => a(!r),
                icon: () => (0, E.jsx)(u, { size: "md" }),
                variant: "icon-only",
                size: "sm",
            }),
        }),
        _ = c && r ? t : d;
    return _.length <= 0
        ? null
        : (0, E.jsx)(nX.Ip, {
              className: tn()(oB.XG, i),
              fade: !0,
              children: (0, E.jsxs)("div", {
                  ref: s,
                  className: tn()(oB.Xk, !r && oB.yZ),
                  role: "group",
                  "aria-label": G.intl.string(G.t["/ZgaVU"]),
                  children: [
                      _.map((e) => {
                          let { user: t, nick: i, voiceState: r } = e;
                          return t.id !== l
                              ? (0, E.jsx)(
                                    oz,
                                    {
                                        channel: n,
                                        user: t,
                                        nick: i,
                                        mute: r.isVoiceMuted(),
                                        deaf: r.isVoiceDeafened(),
                                        video: r.selfVideo,
                                        serverMute: r.mute,
                                        serverDeaf: r.deaf,
                                    },
                                    t.id,
                                )
                              : null;
                      }),
                      c ? h : null,
                  ],
              }),
          });
}
var oK = n(806931),
    oW = n(897513),
    oX = n(509381);
let oZ = { offset: { left: -1, top: -1, right: 1, bottom: 1 } };
function oQ(e) {
    let t = e.currentTarget;
    ec.default.track(D.HAw.NOISE_CANCELLATION_LINK_CLICKED, {
        text: t.text,
        href: t.href,
        location: { section: D.JJy.NOISE_CANCELLATION_POPOUT },
    });
}
function oJ() {
    let e = p.useRef(null);
    (0, sf.t)(e),
        p.useEffect(() => {
            ec.default.track(D.HAw.OPEN_POPOUT, { type: D.JJy.NOISE_CANCELLATION_POPOUT });
        }, []);
    let t = (0, C.bG)([eS.Ay], () => eS.Ay.getNoiseCancellation()),
        n = (0, C.bG)([eS.Ay], () =>
            (function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eS.Ay,
                    t = e.getSystemMicrophoneMode();
                return !(0, s1.A)(!0, t);
            })(eS.Ay),
        ),
        i = (0, C.bG)([eS.Ay], () => eS.Ay.getActiveInputProfile()),
        r = null != i && i !== oX.m.CUSTOM,
        a = G.intl.string(G.t.uKdWn6),
        l = G.intl.string(G.t.uKdWn6);
    return (
        n
            ? ((a = G.intl.string(G.t.mXZgC9)),
              (l = G.intl.format(G.t.F6lrb4, {
                  onSettingsClick: () => {
                      eS.Ay.getMediaEngine().showSystemCaptureConfigurationUI("microphone_modes");
                  },
              })))
            : r && (a = G.intl.formatToPlainString(G.t["/tqmfM"], { enabled: t ? "true" : "false", inputProfile: i })),
        (0, E.jsxs)("div", {
            ref: e,
            className: ot.dD,
            children: [
                (0, E.jsx)(iL.m, {
                    text: a,
                    shouldShow: r || n,
                    align: "right",
                    children: (0, E.jsx)("div", {
                        children: (0, E.jsx)(sN.d, {
                            label: G.intl.string(G.t["WGWHv/"]),
                            checked: t && !n,
                            disabled: r || n,
                            onChange: () => eT.A.setNoiseCancellation(!t, { section: D.JJy.NOISE_CANCELLATION_POPOUT }),
                        }),
                    }),
                }),
                (0, E.jsx)(nu.E, { variant: "text-sm/normal", children: l }),
                (0, E.jsx)(sG.A, {
                    title: G.intl.string(G.t.JdUas1),
                    notchBackground: sG.V.BLACK,
                    buttonTest: G.intl.string(G.t["sG+MGg"]),
                    buttonStop: G.intl.string(G.t.Yp3SbJ),
                    location: { section: D.JJy.NOISE_CANCELLATION_POPOUT },
                }),
                (0, E.jsx)(sS.D, {
                    label: G.intl.string(G.t.k6h1F4),
                    children: (0, E.jsxs)(si.A, {
                        justify: si.A.Justify.BETWEEN,
                        className: ot.__invalid_footer,
                        children: [
                            (0, E.jsx)(sL.Anchor, {
                                href: D.X7G.KRISP,
                                onClick: (e) => oQ(e),
                                children: (0, E.jsx)("div", { className: ot.zQ }),
                            }),
                            (0, E.jsx)(sL.Anchor, {
                                href: sl.A.getArticleURL(D.MVz.NOISE_SUPPRESSION),
                                className: ot.W,
                                onClick: (e) => oQ(e),
                                children: G.intl.string(G.t.hvVgAZ),
                            }),
                        ],
                    }),
                }),
            ],
        })
    );
}
function o0() {
    let { parentAnalyticsLocation: e } = (0, nQ.Ay)(),
        t = (0, C.bG)([oo.A], () => oo.A.isMuted()),
        n = t ? G.intl.string(G.t.ScHlfl) : G.intl.string(G.t.zqxfrf);
    return (0, E.jsx)(ss.A, {
        tooltipText: n,
        icon: t ? sO.C : sy.T,
        onClick: () => {
            (0, sk.X)(e, sk.O.STAGE_MUSIC, t), (0, ol.k)(!t);
        },
    });
}
function o1(e) {
    let { channel: t, enableActivities: n, disabled: i } = e,
        r = p.useRef(null),
        { parentAnalyticsLocation: a } = (0, nQ.Ay)(),
        l = (0, ou.A)(),
        s = (0, oh.A)(t),
        o = (0, C.bG)(
            [rb.Ay],
            () => null != rb.Ay.getSelfEmbeddedActivityForLocation(rb.Ay.getConnectedActivityLocation()),
        ),
        d = (0, s3.Ay)(t),
        { reachedLimit: c, limit: u } = (0, oA.A)(t),
        A = p.useCallback(() => {
            (0, oE.A)();
        }, []),
        h = (0, s0.Us)(),
        _ = p.useCallback(
            (e) => {
                if (eS.Ay.isVideoEnabled() === e) return;
                let n = () => {
                    eT.A.setVideoEnabled(e), e && (0, aL.pX)(D.BVt.CHANNEL(t.getGuildId() ?? D.ME, t.id));
                };
                (0, sk.X)(a, sk.O.CAMERA, e), e ? (0, oI.A)(n, h) : n();
            },
            [t, h, a],
        ),
        m = o || n || d,
        { Component: I, play: g, events: T } = (0, sg.K)(l.enabled ? "disable" : "enable");
    return (
        p.useEffect(() => () => g(), [l.enabled, g]),
        (0, E.jsx)(og.r, {
            onChange: _,
            onCameraUnavailable: A,
            hasPermission: s,
            channelLimit: u,
            channelLimitReached: c,
            ...l,
            enabled: !i && l.enabled,
            children: (e) => {
                let { unavailable: t, isActive: n, label: i, iconComponent: l, iconColor: s, ...o } = e,
                    d = (0, E.jsx)(I, { size: "md", className: tn()(ot.iA, { [ot.ij]: !m }), color: "currentColor" });
                return (0, E.jsx)(n9.Y, {
                    targetElementRef: r,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, E.jsx)(sj.A, {
                            onClose: t,
                            minimal: !0,
                            onInteraction: (0, sV.s)("VideoDeviceMenu", a),
                        });
                    },
                    position: "top",
                    align: "center",
                    animation: n9.Y.Animation.FADE,
                    children: (e, a) => {
                        let { onClick: l, ...s } = e,
                            { isShown: c } = a;
                        return (0, E.jsx)(iL.m, {
                            text: i,
                            children: (0, E.jsx)(tx.$n, {
                                "data-migration-pending": !0,
                                buttonRef: r,
                                ...o,
                                ...s,
                                onClick: (e) => {
                                    o.onClick(e), c && l(e);
                                },
                                onMouseEnter: () => {
                                    s.onMouseEnter?.(), T.onMouseEnter();
                                },
                                onMouseLeave: () => {
                                    T.onMouseLeave();
                                },
                                onContextMenu: (e) => {
                                    l(e);
                                },
                                size: tx.$n.Sizes.MEDIUM,
                                className: tn()(ot.x6, ot.Sq, { [ot.rK]: n, [ot.tU]: t, [ot.r9]: o.disabled }),
                                innerClassName: ot.bk,
                                wrapperClassName: ot.x6,
                                fullWidth: !0,
                                focusProps: oZ,
                                children: m
                                    ? d
                                    : (0, E.jsxs)(si.A, {
                                          align: si.A.Align.CENTER,
                                          children: [d, G.intl.string(G.t.FlNoSV)],
                                      }),
                            }),
                        });
                    },
                });
            },
        })
    );
}
function o8(e) {
    let { channel: t, enableActivities: n } = e,
        i = (0, s0.Us)(),
        { parentAnalyticsLocation: r, newestAnalyticsLocation: a } = (0, nQ.Ay)(),
        l = i === D.BRT.POPOUT,
        s = (0, sw.et)(t.id),
        o = (0, sw.dL)(s),
        { userInActivity: d } = (0, C.cf)([rb.Ay], () => ({
            userInActivity: null != rb.Ay.getSelfEmbeddedActivityForChannel(t.id),
        })),
        c = (0, sD.b)({ surface: sP.YI.VOICE_LAUNCHER, skipFetchingShelf: !0 }),
        u = s !== sw.xy.CAN_LAUNCH,
        { Component: A, events: h, play: _ } = (0, sm.c)();
    return n
        ? (0, E.jsx)(nJ.GY, {
              contentType: nW.M.ACTIVITIES_VOICE_LAUNCHER_BADGE,
              latestVersion: c,
              children: (e) => {
                  let { visibleContent: n, markAsDismissed: i } = e;
                  return (0, E.jsx)(iL.m, {
                      text: o,
                      children: (0, E.jsxs)(tx.$n, {
                          "data-migration-pending": !0,
                          fullWidth: !0,
                          size: tx.$n.Sizes.MEDIUM,
                          ...h,
                          onClick: () => {
                              _(),
                                  (0, sU.A)({
                                      context: null != t ? { type: "channel", channel: t } : { type: "contextless" },
                                      openInPopout: l,
                                      analyticsLocation: a,
                                  }),
                                  (0, sk.X)(r, sk.O.ACTIVITY),
                                  n === nW.M.ACTIVITIES_VOICE_LAUNCHER_BADGE && i(tf.i.TAKE_ACTION);
                          },
                          onMouseEnter: () => {
                              h.onMouseEnter();
                          },
                          onMouseLeave: () => {
                              h.onMouseLeave();
                          },
                          disabled: u,
                          className: tn()(ot.x6, ot.Sq, { [ot.rK]: d, [ot.r9]: u }),
                          innerClassName: ot.bk,
                          wrapperClassName: ot.x6,
                          focusProps: oZ,
                          children: [
                              n === nW.M.ACTIVITIES_VOICE_LAUNCHER_BADGE && (0, E.jsx)(sx.a, { top: -1, right: -1 }),
                              (0, E.jsx)(A, { size: "md", color: "currentColor", className: ot.iA }),
                          ],
                      }),
                  });
              },
          })
        : null;
}
function o3(e) {
    let t,
        { channel: n, canGoLive: i, enableActivities: r, disabled: a } = e,
        l = p.useRef(null),
        { parentAnalyticsLocation: s, analyticsLocations: o } = (0, nQ.Ay)(),
        d = (0, C.bG)([iu.default], () => iu.default.getCurrentUser()),
        c = (0, C.yK)([oC.A], () => oC.A.getAllActiveStreams()),
        u = (0, oh.A)(n),
        A = n.getGuildId(),
        h = (0, C.cf)([rb.Ay], () => null != rb.Ay.getSelfEmbeddedActivityForChannel(n.id)),
        _ = (0, s3.Ay)(n),
        m = p.useCallback(() => {
            (0, om.A)(A, n.id, o);
        }, [A, n.id, o]),
        I = c.find((e) => e.ownerId === d?.id),
        g = (0, o_.T)(n, d, c);
    t = null == I ? (i ? m : op.A) : () => (0, sZ.A)(I);
    let T = null != I || g.length > 0,
        f = u ? G.intl.string(G.t.fjBNo1) : G.intl.string(G.t.uQn9B8),
        N = h || r || _,
        S = null != I,
        { Component: L, events: O, play: y } = (0, sI.c)(S ? "disable" : "enable");
    p.useEffect(() => () => y(), [y, S]);
    let b = (0, E.jsx)(L, { size: "md", color: "currentColor", className: tn()(ot.iA, { [ot.ij]: !N }) });
    return (0, E.jsx)(n9.Y, {
        targetElementRef: l,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, E.jsx)(o_.A, {
                channel: n,
                currentUser: d,
                activeStreams: c,
                onClose: t,
                handleGoLive: i ? m : op.A,
                onInteraction: (0, sV.s)("ManageStreamsMenu", s, { entrypoint: oK.GK.OTHER_BUTTON }),
            });
        },
        position: "top",
        align: "center",
        animation: n9.Y.Animation.FADE,
        children: (e) => {
            let { onClick: n, onMouseEnter: i, ...r } = e;
            return (0, E.jsx)(iL.m, {
                text: f,
                children: (0, E.jsx)(tx.$n, {
                    "data-migration-pending": !0,
                    buttonRef: l,
                    size: tx.$n.Sizes.MEDIUM,
                    onClick: (e) => {
                        (0, sk.X)(s, sk.O.STREAM, null == I), T ? n(e) : t();
                    },
                    disabled: !u || a,
                    className: tn()(ot.x6, ot.Sq, { [ot.rK]: null != I, [ot.r9]: !u || a }),
                    ...(T ? r : null),
                    onMouseEnter: () => {
                        i?.(), O.onMouseEnter();
                    },
                    onMouseLeave: () => {
                        O.onMouseLeave();
                    },
                    innerClassName: ot.bk,
                    wrapperClassName: ot.x6,
                    focusProps: oZ,
                    children: N
                        ? b
                        : (0, E.jsxs)(si.A, { align: si.A.Align.CENTER, children: [b, G.intl.string(G.t["r0/+v7"])] }),
                }),
            });
        },
    });
}
class o2 extends p.PureComponent {
    ref = p.createRef();
    krispButtonRef = p.createRef();
    handleChannelLinkClick = (e) => {
        let { guild: t, channel: n } = this.props;
        eM()(null != n, "Channel is null during navigation click"),
            e.stopPropagation(),
            sv.A.channelListScrollTo(t?.id ?? D.ME, n.id),
            (0, sk.X)(eg.A.RTC_PANEL, sk.O.CHANNEL_LINK);
    };
    handleChannelLinkContextMenu = (e) => {
        let { channel: t, analyticsLocations: i } = this.props;
        (0, r5.L3)(e, async () => {
            let { default: e } = await Promise.all([
                n.e("9004"),
                n.e("43266"),
                n.e("44058"),
                n.e("90274"),
                n.e("50590"),
                n.e("57550"),
            ]).then(n.bind(n, 576701));
            return (n) =>
                (0, E.jsx)(nQ.f5, {
                    value: i,
                    children: (0, E.jsx)(e, {
                        ...n,
                        channel: t,
                        onInteraction: (0, sV.s)("RTCConnectionMenu", eg.A.RTC_PANEL),
                    }),
                });
        });
    };
    handleCloseVoicePanelIntroduction = () => {
        sQ.sF(oW._.VOICE_PANEL_INTRODUCTION);
    };
    renderConnectionStatus() {
        let e,
            {
                channel: t,
                guild: n,
                rtcConnectionQuality: i,
                rtcConnectionState: r,
                rtcConnectionLastPing: a,
                hasVideo: l,
            } = this.props;
        if (null == t) return null;
        let s = (0, i$.m1)(t, iu.default, eZ.A);
        return (
            null != n ? ((e = D.BVt.CHANNEL(n.id, t.id)), (s = `${s} / ${n.name}`)) : (e = D.BVt.CHANNEL(D.ME, t.id)),
            (0, E.jsx)(s8.A, {
                channelId: t.id,
                quality: i,
                state: r,
                lastPing: a,
                hasVideo: l,
                connectionStatusTextVariant: "text-md/medium",
                childrenAsSubtitle: !0,
                children: (0, E.jsx)(iR.vN, {
                    children: (0, E.jsx)(sp.N_, {
                        to: e,
                        onClick: this.handleChannelLinkClick,
                        onContextMenu: this.handleChannelLinkContextMenu,
                        children: (0, E.jsx)(so.A, {
                            className: ot.Ix,
                            children: (0, E.jsx)(nu.E, {
                                variant: "text-xs/medium",
                                color: "text-subtle",
                                lineClamp: 1,
                                children: s,
                            }),
                        }),
                    }),
                }),
            })
        );
    }
    renderNoiseCancellation() {
        let {
            noiseCancellationActive: e,
            noiseCancellationError: t,
            hasLayers: n,
            remoteVoiceState: i,
            channel: r,
            voiceStates: a,
        } = this.props;
        return null != i
            ? null
            : r?.isGuildStageVoice() &&
                null == a.find((e) => e.user.id === R.default.getId() && (0, od.eY)(e.voiceState) === od.zF.ON_STAGE) &&
                (0, os.Zl)(r.id)
              ? (0, E.jsx)(o0, {})
              : !n && t
                ? (0, E.jsx)(iL.m, {
                      text: G.intl.string(G.t["i+SO/U"]),
                      forceOpen: !0,
                      children: (0, E.jsx)(ss.A, {
                          tooltipText: null,
                          disabled: !0,
                          icon: sb.m,
                          "aria-label": G.intl.string(G.t["i+SO/U"]),
                      }),
                  })
                : (0, E.jsx)(
                      n9.Y,
                      {
                          targetElementRef: this.krispButtonRef,
                          position: "top",
                          align: "center",
                          renderPopout: () => (0, E.jsx)(oJ, {}),
                          children: (t, n) => {
                              let { isShown: i } = n;
                              return (0, E.jsx)(o7, {
                                  popoutProps: t,
                                  isShown: i,
                                  noiseCancellationActive: e,
                                  ref: this.krispButtonRef,
                              });
                          },
                      },
                      "krisp-popout",
                  );
    }
    renderVoiceStates() {
        let { channel: e, voiceStates: t, showVoiceStates: n } = this.props;
        return null != e && n && 0 !== t.length
            ? (0, E.jsx)(oq, { voiceStates: t, channel: e, className: ot.Xk })
            : null;
    }
    renderChannelButtons() {
        let {
            channel: e,
            canGoLive: t,
            remoteVoiceState: n,
            enableActivities: i,
            voiceStates: r,
            selfStream: a,
            isPrivateChannelWithEnabledActivities: l,
        } = this.props;
        if (null == e || null != n) return null;
        let s = R.default.getId();
        if (e.isGuildStageVoice()) {
            if (!(0, oa.Bw)(e.guild_id) || !t) return null;
            let n = r.find((e) => e.user.id === s);
            if (null == n || n.voiceState.suppress) return null;
        }
        let o = (e.isGuildVoice() || l) && i,
            { reachedLimit: d } = (0, oA.M)(e),
            c = (0, oa.xn)(e.id);
        return (0, E.jsxs)("div", {
            className: ot.uu,
            children: [
                (0, E.jsx)(o1, { channel: e, enableActivities: o, disabled: !c && d }),
                (0, E.jsx)(o3, {
                    channel: e,
                    canGoLive: t,
                    enableActivities: o,
                    disabled: e.isGuildStageVoice() && ((c && null == a) || (!c && d)),
                }),
                o ? (0, E.jsx)(o8, { channel: e, enableActivities: i }) : null,
                (0, s3.Ay)(e) ? (0, E.jsx)(on, { channel: e, focusProps: oZ }) : null,
            ],
        });
    }
    renderVoicePanelIntroduction = () =>
        (0, E.jsxs)("div", {
            className: tn()(ot.SC, "theme-light"),
            children: [
                (0, E.jsx)(nA.D, {
                    className: ot.oN,
                    variant: "heading-md/semibold",
                    children: G.intl.string(G.t["ba/rL2"]),
                }),
                (0, E.jsx)(nu.E, { className: ot.uf, variant: "text-sm/normal", children: G.intl.string(G.t.Ne1Eew) }),
                (0, E.jsx)(n0.$, {
                    fullWidth: !0,
                    onClick: this.handleCloseVoicePanelIntroduction,
                    text: G.intl.string(G.t.shaBeH),
                    focusProps: oZ,
                }),
            ],
        });
    render() {
        let { channel: e, noiseCancellationSupported: t, shouldShowVoicePanelIntroduction: n } = this.props;
        return null == e
            ? null
            : (0, E.jsx)(n9.Y, {
                  targetElementRef: this.ref,
                  renderPopout: this.renderVoicePanelIntroduction,
                  position: "top",
                  align: "center",
                  animation: n9.Y.Animation.TRANSLATE,
                  shouldShow: n,
                  children: () =>
                      (0, E.jsxs)("div", {
                          ref: this.ref,
                          className: ot.kL,
                          children: [
                              (0, E.jsxs)(si.A, {
                                  className: ot.FI,
                                  align: si.A.Align.CENTER,
                                  children: [
                                      (0, E.jsx)("div", { className: ot.vW, children: this.renderConnectionStatus() }),
                                      (0, E.jsxs)(si.A, {
                                          grow: 0,
                                          shrink: 0,
                                          className: ot.nL,
                                          children: [
                                              t ? this.renderNoiseCancellation() : null,
                                              (0, E.jsx)(oP, { channel: e }),
                                          ],
                                      }),
                                  ],
                              }),
                              this.renderVoiceStates(),
                              this.renderChannelButtons(),
                          ],
                      }),
              });
    }
}
function o7(e) {
    var t;
    let i,
        r,
        a,
        l,
        s,
        o,
        { popoutProps: d, isShown: c, noiseCancellationActive: u, ref: A } = e,
        { parentAnalyticsLocation: h } = (0, nQ.Ay)(),
        {
            play: _,
            Component: m,
            events: I,
        } = ((t = u ? "disable" : "enable"),
        (i = p.useRef(null)),
        ((r = p.useRef(t)).current = t),
        (a = p.useMemo(
            () => () => {
                null != i.current && i.current.play(t);
            },
            [t],
        )),
        (l = p.useCallback(() => {
            if (null == i.current) return;
            let e = "enable" === t ? "hover_disabled" : "hover_enabled";
            i.current.play(e);
        }, [t])),
        (s = p.useCallback(() => {
            if (null == i.current) return;
            let e = "enable" === t ? "hover_disabled" : "hover_enabled";
            i.current.stopIfPlaying(e);
        }, [t])),
        (o = p.useCallback(
            (e) =>
                (0, E.jsx)(sC.P, {
                    ...e,
                    src: () => n.e("24596").then(n.t.bind(n, 941983, 19)),
                    ref: i,
                    initialAnimation: r.current,
                    markers: sT,
                }),
            [],
        )),
        {
            events: { onClick: a, onMouseEnter: l, onMouseLeave: s },
            play: a,
            getDuration: p.useCallback(() => i.current?.getDuration(), []),
            getCurrentFrame: p.useCallback(() => i.current?.getCurrentFrame() ?? null, []),
            Component: o,
        });
    return (
        p.useEffect(() => () => _(), [u, _]),
        (0, E.jsx)(ss.A, {
            ...d,
            ref: A,
            onClick: (e) => {
                (0, sk.X)(h, sk.O.KRISP, !u), d.onClick(e);
            },
            onMouseEnter: () => {
                d.onMouseEnter?.(), I.onMouseEnter();
            },
            onMouseLeave: () => {
                I.onMouseLeave();
            },
            tooltipText: c ? null : G.intl.string(G.t.vFiCSx),
            icon: (0, E.jsx)(m, { size: "refresh_sm" }),
        })
    );
}
let o4 = (0, r9.A)(function (e) {
    let t = (0, sH.A)(),
        n = (0, C.bG)([sF.default], () => sF.default.getAwaitingRemoteSessionInfo()),
        i = (0, C.bG)([iu.default], () => iu.default.getCurrentUser()),
        { channelId: r, ...a } = (0, C.cf)([e7.A], () =>
            null != t
                ? {
                      channelId: t.channelId,
                      rtcConnectionQuality: D.bFR.FINE,
                      rtcConnectionState: D.S7L.RTC_CONNECTED,
                      rtcConnectionLastPing: 0,
                  }
                : {
                      channelId: e7.A.getChannelId(),
                      rtcConnectionQuality: e7.A.getQuality(),
                      rtcConnectionState: e7.A.getState(),
                      rtcConnectionLastPing: e7.A.getLastPing(),
                  },
        ),
        l = (0, C.bG)([i6.A], () => i6.A.getChannel(r), [r]),
        s = l?.getGuildId(),
        o = (0, C.bG)([rx.A], () => rx.A.getGuild(s), [s]),
        d = (0, C.cf)([eS.Ay], () => ({
            noiseCancellationSupported: eS.Ay.isNoiseCancellationSupported(),
            noiseCancellationActive: (0, s1.A)(eS.Ay.getNoiseCancellation(), eS.Ay.getSystemMicrophoneMode()),
            noiseCancellationError: eS.Ay.isNoiseCancellationError(),
            canGoLive: (0, sX.A)(eS.Ay),
        })),
        c = (0, C.bG)(
            [eS.Ay, sJ.A],
            () =>
                sJ.A.hasHotspot(oW._.VOICE_PANEL_INTRODUCTION) &&
                (0, rt.mv)(i) &&
                !eS.Ay.isInteractionRequired() &&
                !l?.isGuildStageVoice(),
        ),
        u = (0, C.bG)([rV.A], () => null != r && rV.A.hasVideo(r), [r]),
        A = (0, C.bG)([oC.A], () => oC.A.getCurrentUserActiveStream()),
        h = (0, C.bG)([t2.A], () => t2.A.hasLayers()),
        _ = (0, C.bG)([nR.A], () => nR.A.isViewingRoles(s)),
        m = (0, C.bG)([rj.A], () => _ && !rj.A.can(D.xBc.VIEW_CHANNEL, l), [_, l]),
        I = oc.vL.useSetting(),
        [g, T, f] = (0, C.yK)(
            [oT.Ay, oi.A],
            () =>
                l?.isGuildStageVoice()
                    ? [oi.A.getMutableParticipants(l.id, or.ip.SPEAKER), oi.A.getParticipantsVersion(l.id), null]
                    : [null, null, null != l ? oT.Ay.getVoiceStatesForChannel(l) : null],
            [l],
        ),
        N = p.useMemo(
            () =>
                g?.map((e) => {
                    let { user: t, userNick: n, voiceState: i } = e;
                    return { user: t, nick: n, voiceState: i };
                }) ??
                f ??
                [],
            [g, T, f],
        ),
        [S, L] = p.useState(!1);
    p.useEffect(() => {
        (_ || m) && L(!1);
    }, [_, m, L]);
    let { analyticsLocations: O } = (0, nQ.Ay)(eg.A.RTC_PANEL),
        y = (0, sR.A)(s ?? D.dJq, l?.id),
        b = (0, sM.A)(l?.id);
    return (0, E.jsx)(nQ.f5, {
        value: O,
        children: (0, E.jsxs)("div", {
            className: ot.iE,
            children: [
                null != t || null != n ? (0, E.jsx)(sW, { voiceState: t, awaitingRemoteSessionInfo: n }) : null,
                (0, E.jsx)(o2, {
                    ...e,
                    ...d,
                    ...a,
                    enableActivities: y,
                    remoteVoiceState: t,
                    guild: o,
                    channel: l,
                    hasVideo: u,
                    selfStream: A,
                    hasLayers: h,
                    voiceStates: N,
                    showVoiceStates: I,
                    shouldShowVoicePanelIntroduction: c,
                    isPrivateChannelWithEnabledActivities: b,
                    analyticsLocations: O,
                }),
                !S && _ && null != s
                    ? (0, E.jsxs)("div", {
                          className: ot.BT,
                          children: [
                              (0, E.jsx)(nu.E, {
                                  variant: "text-sm/normal",
                                  className: ot.u0,
                                  children: m ? G.intl.string(G.t.efjuQJ) : G.intl.string(G.t.br8H2N),
                              }),
                              (0, E.jsx)(n0.$, {
                                  size: "sm",
                                  fullWidth: !0,
                                  onClick: () => {
                                      L(!0);
                                  },
                                  text: G.intl.string(G.t.WAI6xu),
                                  focusProps: oZ,
                              }),
                          ],
                      })
                    : null,
            ],
        }),
    });
});
var o6 = n(28082),
    o5 = n(111113);
function o9(e) {
    let { analyticsLocations: t } = (0, nQ.Ay)(eg.A.ACTIVITY_PANEL),
        n = (0, lY.A)((e) => {
            let { guildId: t } = e;
            return t;
        });
    return (0, E.jsx)(nQ.f5, { value: t, children: (0, E.jsx)(l9.A, { ...e, guildId: n }) });
}
let de = p.memo(function () {
    let e = p.useRef(null);
    (0, l4.i4)(
        e,
        (e) => {
            let { height: t } = e;
            document.body.style.setProperty("--custom-app-panels-height", `${t}px`);
        },
        [],
    );
    let { isSorting: t } = (0, l6.A)();
    return (0, E.jsx)("section", {
        ref: e,
        className: tn()(o5.C3, { [o5.aB]: t }),
        "aria-label": G.intl.string(G.t.vTl6Lk),
        children: (0, E.jsxs)(iR.xp, {
            containerRef: e,
            children: [
                (0, E.jsx)(l7, {}),
                (0, E.jsx)(o6.A, {}),
                (0, E.jsx)(sE, {}),
                (0, E.jsx)(nZ.A, { section: D.JJy.ACTIVITY_PANEL, children: (0, E.jsx)(o9, { className: o5.iz }) }),
                (0, E.jsx)(nZ.A, { section: D.JJy.RTC_CONNECTION_PANEL, children: (0, E.jsx)(o4, {}) }),
                (0, E.jsx)(nZ.A, { section: D.JJy.ACCOUNT_PANEL, children: (0, E.jsx)(l5.A, {}) }),
            ],
        }),
    });
});
var dt = n(746080),
    dn = n(758836),
    di = n(539916),
    dr = n(613057),
    da = n(355097);
n(964623);
let dl = (0, g.Fe)({ createPromise: () => Promise.resolve().then(n.bind(n, 201313)), webpackId: 201313 }),
    ds = () => (0, E.jsx)("div", { className: o5.wG, children: (0, E.jsx)(tl.y, {}) }),
    dd = (0, g.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("10373"),
                n.e("72900"),
                n.e("81154"),
                n.e("55658"),
                n.e("63419"),
                n.e("91763"),
                n.e("76602"),
                n.e("28229"),
                n.e("71470"),
                n.e("43437"),
                n.e("39970"),
                n.e("8371"),
                n.e("72789"),
                n.e("17249"),
                n.e("62422"),
                n.e("82644"),
                n.e("35321"),
                n.e("50033"),
                n.e("44780"),
                n.e("90301"),
                n.e("15109"),
                n.e("88990"),
                n.e("76413"),
                n.e("3303"),
                n.e("80945"),
                n.e("18265"),
                n.e("27659"),
                n.e("36419"),
                n.e("28850"),
                n.e("60003"),
                n.e("26516"),
                n.e("85802"),
                n.e("65200"),
                n.e("41348"),
                n.e("2529"),
                n.e("5331"),
                n.e("46240"),
                n.e("81505"),
            ]).then(n.bind(n, 276523)),
        webpackId: 276523,
        name: "NotificationsInboxSidebar",
        renderLoader: ds,
    }),
    dc = (0, g.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("6287"),
                n.e("87616"),
                n.e("76032"),
                n.e("75681"),
                n.e("72900"),
                n.e("63419"),
                n.e("32101"),
                n.e("69273"),
                n.e("31788"),
                n.e("77083"),
                n.e("63009"),
                n.e("84786"),
                n.e("41909"),
                n.e("63397"),
                n.e("45650"),
                n.e("97189"),
                n.e("27660"),
                n.e("85484"),
                n.e("81510"),
                n.e("36407"),
                n.e("79705"),
                n.e("55658"),
                n.e("33957"),
                n.e("8357"),
                n.e("49699"),
                n.e("43108"),
                n.e("35598"),
                n.e("84611"),
                n.e("45235"),
                n.e("63635"),
                n.e("66782"),
                n.e("56183"),
                n.e("80008"),
                n.e("23924"),
                n.e("15510"),
                n.e("48226"),
                n.e("20287"),
                n.e("28367"),
                n.e("35429"),
                n.e("10471"),
                n.e("63232"),
                n.e("64827"),
                n.e("30938"),
                n.e("23808"),
                n.e("11301"),
                n.e("60235"),
                n.e("61737"),
                n.e("79428"),
                n.e("29963"),
                n.e("47834"),
                n.e("98329"),
                n.e("20317"),
                n.e("84569"),
                n.e("2368"),
                n.e("27084"),
                n.e("24313"),
                n.e("48405"),
                n.e("63185"),
                n.e("19551"),
                n.e("84150"),
                n.e("45959"),
                n.e("18573"),
                n.e("55057"),
                n.e("37794"),
                n.e("26073"),
                n.e("7743"),
                n.e("34303"),
                n.e("48172"),
                n.e("28866"),
                n.e("54961"),
                n.e("8304"),
                n.e("58038"),
                n.e("93159"),
                n.e("55936"),
                n.e("11566"),
                n.e("21106"),
                n.e("31988"),
                n.e("94723"),
                n.e("62931"),
                n.e("81987"),
                n.e("58007"),
                n.e("5812"),
                n.e("17363"),
                n.e("58337"),
                n.e("26437"),
                n.e("76602"),
                n.e("28229"),
                n.e("71470"),
                n.e("76418"),
                n.e("21921"),
                n.e("9233"),
                n.e("69747"),
                n.e("40258"),
                n.e("66495"),
                n.e("91146"),
                n.e("42724"),
                n.e("43437"),
                n.e("39970"),
                n.e("82263"),
                n.e("30221"),
                n.e("8371"),
                n.e("8555"),
                n.e("86127"),
                n.e("6174"),
                n.e("39851"),
                n.e("58216"),
                n.e("72789"),
                n.e("6949"),
                n.e("29871"),
                n.e("17249"),
                n.e("41250"),
                n.e("35027"),
                n.e("84971"),
                n.e("53917"),
                n.e("9640"),
                n.e("62422"),
                n.e("15423"),
                n.e("26295"),
                n.e("88599"),
                n.e("36863"),
                n.e("1518"),
                n.e("67861"),
                n.e("15186"),
                n.e("98765"),
                n.e("23354"),
                n.e("89088"),
                n.e("82644"),
                n.e("37187"),
                n.e("71273"),
                n.e("27779"),
                n.e("75842"),
                n.e("12743"),
                n.e("10957"),
                n.e("55973"),
                n.e("20590"),
                n.e("45172"),
                n.e("65437"),
                n.e("34983"),
                n.e("63235"),
                n.e("74810"),
                n.e("28083"),
                n.e("80830"),
                n.e("86672"),
                n.e("3589"),
                n.e("86814"),
                n.e("52548"),
                n.e("35771"),
                n.e("22266"),
                n.e("53984"),
                n.e("59414"),
                n.e("80854"),
                n.e("79780"),
                n.e("35395"),
                n.e("43780"),
                n.e("14041"),
                n.e("46844"),
                n.e("45413"),
                n.e("22822"),
                n.e("75627"),
                n.e("90664"),
                n.e("79745"),
                n.e("34150"),
                n.e("64850"),
                n.e("72401"),
                n.e("22855"),
                n.e("70104"),
                n.e("68904"),
                n.e("68802"),
                n.e("52617"),
                n.e("8563"),
                n.e("2564"),
                n.e("47417"),
                n.e("19558"),
                n.e("58946"),
                n.e("14285"),
                n.e("95752"),
                n.e("78100"),
                n.e("78453"),
                n.e("8362"),
                n.e("80149"),
                n.e("2698"),
                n.e("62875"),
                n.e("4744"),
                n.e("87046"),
                n.e("12542"),
                n.e("501"),
                n.e("46769"),
                n.e("33297"),
                n.e("73384"),
                n.e("86243"),
                n.e("82783"),
                n.e("7833"),
                n.e("32209"),
                n.e("30788"),
                n.e("48295"),
                n.e("4193"),
                n.e("25246"),
                n.e("37021"),
                n.e("21049"),
                n.e("8377"),
                n.e("28610"),
                n.e("44571"),
                n.e("44795"),
                n.e("71268"),
                n.e("95370"),
                n.e("97784"),
                n.e("44928"),
                n.e("90301"),
                n.e("15109"),
                n.e("19454"),
                n.e("99549"),
                n.e("16988"),
                n.e("59797"),
                n.e("69765"),
                n.e("62304"),
                n.e("75859"),
                n.e("15920"),
                n.e("80093"),
                n.e("83518"),
                n.e("73122"),
                n.e("79593"),
                n.e("41706"),
                n.e("14863"),
                n.e("86629"),
                n.e("46855"),
                n.e("55197"),
                n.e("50974"),
                n.e("69171"),
                n.e("78870"),
            ]).then(n.bind(n, 480178)),
        webpackId: 480178,
        name: "GuildShopPage",
        renderLoader: tA.uW,
    }),
    du = (0, g.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("79848"),
                n.e("32101"),
                n.e("69273"),
                n.e("31788"),
                n.e("77083"),
                n.e("63009"),
                n.e("84786"),
                n.e("41909"),
                n.e("63397"),
                n.e("45650"),
                n.e("97189"),
                n.e("27660"),
                n.e("6287"),
                n.e("85484"),
                n.e("81510"),
                n.e("36407"),
                n.e("79705"),
                n.e("72900"),
                n.e("43108"),
                n.e("2313"),
                n.e("23924"),
                n.e("15510"),
                n.e("48226"),
                n.e("20287"),
                n.e("28367"),
                n.e("35429"),
                n.e("10471"),
                n.e("63232"),
                n.e("64827"),
                n.e("30938"),
                n.e("23808"),
                n.e("11301"),
                n.e("60235"),
                n.e("61737"),
                n.e("79428"),
                n.e("29963"),
                n.e("47834"),
                n.e("98329"),
                n.e("20317"),
                n.e("84569"),
                n.e("2368"),
                n.e("27084"),
                n.e("24313"),
                n.e("48405"),
                n.e("63185"),
                n.e("19551"),
                n.e("84150"),
                n.e("45959"),
                n.e("18573"),
                n.e("55057"),
                n.e("37794"),
                n.e("26073"),
                n.e("7743"),
                n.e("34303"),
                n.e("48172"),
                n.e("28866"),
                n.e("54961"),
                n.e("8304"),
                n.e("58038"),
                n.e("93159"),
                n.e("55936"),
                n.e("11566"),
                n.e("21106"),
                n.e("31988"),
                n.e("94723"),
                n.e("62931"),
                n.e("81987"),
                n.e("58007"),
                n.e("5812"),
                n.e("17363"),
                n.e("26437"),
                n.e("9233"),
                n.e("69747"),
                n.e("34983"),
                n.e("86814"),
                n.e("22822"),
                n.e("78453"),
                n.e("12542"),
                n.e("30788"),
                n.e("4193"),
                n.e("25246"),
                n.e("8377"),
                n.e("28610"),
                n.e("44571"),
                n.e("44795"),
                n.e("44928"),
                n.e("99549"),
                n.e("77467"),
                n.e("36768"),
                n.e("14078"),
            ]).then(n.bind(n, 148980)),
        webpackId: 148980,
        name: "SocialLayerStorefront",
        renderLoader: ds,
    }),
    dA = (0, g.Fe)({
        createPromise: () => Promise.all([n.e("4744"), n.e("16373"), n.e("8497")]).then(n.bind(n, 254316)),
        webpackId: 254316,
        name: "ServerMonetizationOnboardingForwarder",
        renderLoader: ds,
    }),
    dh = (0, g.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("86921"),
                n.e("46946"),
                n.e("6287"),
                n.e("79146"),
                n.e("79093"),
                n.e("28510"),
                n.e("72900"),
                n.e("63419"),
                n.e("32101"),
                n.e("69273"),
                n.e("31788"),
                n.e("77083"),
                n.e("63009"),
                n.e("84786"),
                n.e("41909"),
                n.e("63397"),
                n.e("45650"),
                n.e("97189"),
                n.e("27660"),
                n.e("85484"),
                n.e("81510"),
                n.e("36407"),
                n.e("79705"),
                n.e("55658"),
                n.e("87616"),
                n.e("76032"),
                n.e("33957"),
                n.e("8357"),
                n.e("49699"),
                n.e("43108"),
                n.e("35598"),
                n.e("84611"),
                n.e("45235"),
                n.e("63635"),
                n.e("66782"),
                n.e("92652"),
                n.e("45229"),
                n.e("3840"),
                n.e("81579"),
                n.e("45317"),
                n.e("33032"),
                n.e("23924"),
                n.e("15510"),
                n.e("48226"),
                n.e("19402"),
                n.e("13111"),
                n.e("20287"),
                n.e("28367"),
                n.e("35429"),
                n.e("10471"),
                n.e("63232"),
                n.e("64827"),
                n.e("30938"),
                n.e("23808"),
                n.e("11301"),
                n.e("60235"),
                n.e("61737"),
                n.e("79428"),
                n.e("29963"),
                n.e("47834"),
                n.e("98329"),
                n.e("20317"),
                n.e("84569"),
                n.e("2368"),
                n.e("27084"),
                n.e("24313"),
                n.e("48405"),
                n.e("63185"),
                n.e("19551"),
                n.e("84150"),
                n.e("45959"),
                n.e("18573"),
                n.e("55057"),
                n.e("37794"),
                n.e("26073"),
                n.e("7743"),
                n.e("34303"),
                n.e("48172"),
                n.e("28866"),
                n.e("54961"),
                n.e("8304"),
                n.e("58038"),
                n.e("93159"),
                n.e("55936"),
                n.e("11566"),
                n.e("21106"),
                n.e("31988"),
                n.e("94723"),
                n.e("62931"),
                n.e("81987"),
                n.e("58007"),
                n.e("5812"),
                n.e("17363"),
                n.e("34552"),
                n.e("55411"),
                n.e("93103"),
                n.e("58337"),
                n.e("26437"),
                n.e("91763"),
                n.e("13708"),
                n.e("76602"),
                n.e("28229"),
                n.e("71470"),
                n.e("91007"),
                n.e("68403"),
                n.e("76418"),
                n.e("21921"),
                n.e("9233"),
                n.e("88342"),
                n.e("69747"),
                n.e("40258"),
                n.e("20683"),
                n.e("66495"),
                n.e("91146"),
                n.e("42724"),
                n.e("43437"),
                n.e("39970"),
                n.e("82263"),
                n.e("42451"),
                n.e("30221"),
                n.e("8371"),
                n.e("8555"),
                n.e("86127"),
                n.e("6174"),
                n.e("39851"),
                n.e("58216"),
                n.e("98965"),
                n.e("72789"),
                n.e("6949"),
                n.e("29871"),
                n.e("17249"),
                n.e("41250"),
                n.e("35027"),
                n.e("84971"),
                n.e("53917"),
                n.e("9640"),
                n.e("62422"),
                n.e("15423"),
                n.e("26295"),
                n.e("88599"),
                n.e("36863"),
                n.e("1518"),
                n.e("67861"),
                n.e("15186"),
                n.e("98765"),
                n.e("23354"),
                n.e("89088"),
                n.e("82644"),
                n.e("37187"),
                n.e("71273"),
                n.e("27779"),
                n.e("75842"),
                n.e("12743"),
                n.e("10957"),
                n.e("55973"),
                n.e("20590"),
                n.e("45172"),
                n.e("35313"),
                n.e("65437"),
                n.e("34983"),
                n.e("63235"),
                n.e("74810"),
                n.e("28083"),
                n.e("80830"),
                n.e("86672"),
                n.e("3589"),
                n.e("86814"),
                n.e("52548"),
                n.e("35771"),
                n.e("22266"),
                n.e("53984"),
                n.e("59414"),
                n.e("80854"),
                n.e("79780"),
                n.e("35395"),
                n.e("43780"),
                n.e("14041"),
                n.e("46844"),
                n.e("45413"),
                n.e("22822"),
                n.e("75627"),
                n.e("90664"),
                n.e("79745"),
                n.e("34150"),
                n.e("64850"),
                n.e("72401"),
                n.e("22855"),
                n.e("70104"),
                n.e("68904"),
                n.e("68802"),
                n.e("52617"),
                n.e("8563"),
                n.e("2564"),
                n.e("47417"),
                n.e("19558"),
                n.e("58946"),
                n.e("14285"),
                n.e("95752"),
                n.e("78100"),
                n.e("78453"),
                n.e("8362"),
                n.e("80149"),
                n.e("2698"),
                n.e("62875"),
                n.e("4744"),
                n.e("87046"),
                n.e("12542"),
                n.e("501"),
                n.e("46769"),
                n.e("33297"),
                n.e("35321"),
                n.e("73384"),
                n.e("86243"),
                n.e("82783"),
                n.e("7833"),
                n.e("32209"),
                n.e("30788"),
                n.e("48295"),
                n.e("60249"),
                n.e("4193"),
                n.e("39171"),
                n.e("25246"),
                n.e("37021"),
                n.e("21049"),
                n.e("8377"),
                n.e("28610"),
                n.e("36564"),
                n.e("44571"),
                n.e("44795"),
                n.e("80436"),
                n.e("71268"),
                n.e("95370"),
                n.e("97784"),
                n.e("50033"),
                n.e("10014"),
                n.e("84783"),
                n.e("44928"),
                n.e("33416"),
                n.e("37752"),
                n.e("3217"),
                n.e("47678"),
                n.e("5557"),
                n.e("95340"),
                n.e("62718"),
                n.e("93907"),
                n.e("3998"),
                n.e("89916"),
                n.e("90301"),
                n.e("68763"),
                n.e("15188"),
                n.e("61156"),
                n.e("15109"),
                n.e("91671"),
                n.e("29666"),
                n.e("58273"),
                n.e("60773"),
                n.e("92295"),
                n.e("19454"),
                n.e("20930"),
                n.e("16767"),
                n.e("74610"),
                n.e("50535"),
                n.e("44801"),
                n.e("38056"),
                n.e("26001"),
                n.e("36926"),
                n.e("99549"),
                n.e("14591"),
                n.e("52111"),
                n.e("8018"),
                n.e("6841"),
                n.e("63071"),
                n.e("88990"),
                n.e("16988"),
                n.e("57458"),
                n.e("59797"),
                n.e("8829"),
                n.e("86697"),
                n.e("20379"),
                n.e("69765"),
                n.e("76413"),
                n.e("3303"),
                n.e("1243"),
                n.e("62304"),
                n.e("19193"),
                n.e("80945"),
                n.e("18265"),
                n.e("75859"),
                n.e("29080"),
                n.e("96804"),
                n.e("95998"),
                n.e("27659"),
                n.e("36419"),
                n.e("68530"),
                n.e("42234"),
                n.e("78046"),
                n.e("28850"),
                n.e("74678"),
                n.e("20045"),
                n.e("81189"),
                n.e("92077"),
                n.e("10520"),
                n.e("12965"),
                n.e("203"),
                n.e("4774"),
                n.e("49629"),
                n.e("26294"),
                n.e("78601"),
                n.e("89523"),
                n.e("80407"),
                n.e("42726"),
                n.e("34546"),
                n.e("77663"),
                n.e("41701"),
                n.e("39894"),
                n.e("47057"),
                n.e("86902"),
                n.e("68083"),
                n.e("2855"),
                n.e("48730"),
                n.e("71467"),
                n.e("51892"),
                n.e("41838"),
                n.e("46045"),
                n.e("3707"),
                n.e("60003"),
                n.e("16054"),
                n.e("26516"),
                n.e("33869"),
                n.e("50068"),
                n.e("88307"),
                n.e("21883"),
                n.e("78047"),
                n.e("1485"),
                n.e("22511"),
                n.e("31189"),
                n.e("23685"),
                n.e("92313"),
                n.e("82910"),
                n.e("56338"),
            ]).then(n.bind(n, 578839)),
        webpackId: 578839,
        name: "GuildHomePage",
        renderLoader: tA.tV,
    }),
    d_ = (0, g.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("31299"),
                n.e("36685"),
                n.e("45235"),
                n.e("41909"),
                n.e("8357"),
                n.e("84611"),
                n.e("72900"),
                n.e("63419"),
                n.e("6287"),
                n.e("32101"),
                n.e("69273"),
                n.e("31788"),
                n.e("77083"),
                n.e("63009"),
                n.e("84786"),
                n.e("63397"),
                n.e("45650"),
                n.e("97189"),
                n.e("27660"),
                n.e("85484"),
                n.e("81510"),
                n.e("36407"),
                n.e("79705"),
                n.e("55658"),
                n.e("87616"),
                n.e("76032"),
                n.e("33957"),
                n.e("49699"),
                n.e("43108"),
                n.e("35598"),
                n.e("63635"),
                n.e("66782"),
                n.e("92652"),
                n.e("45229"),
                n.e("84388"),
                n.e("4974"),
                n.e("23924"),
                n.e("15510"),
                n.e("48226"),
                n.e("49681"),
                n.e("20287"),
                n.e("28367"),
                n.e("35429"),
                n.e("10471"),
                n.e("63232"),
                n.e("64827"),
                n.e("30938"),
                n.e("23808"),
                n.e("11301"),
                n.e("60235"),
                n.e("61737"),
                n.e("79428"),
                n.e("29963"),
                n.e("47834"),
                n.e("98329"),
                n.e("20317"),
                n.e("84569"),
                n.e("2368"),
                n.e("27084"),
                n.e("24313"),
                n.e("48405"),
                n.e("63185"),
                n.e("19551"),
                n.e("84150"),
                n.e("45959"),
                n.e("18573"),
                n.e("55057"),
                n.e("37794"),
                n.e("26073"),
                n.e("7743"),
                n.e("34303"),
                n.e("48172"),
                n.e("28866"),
                n.e("54961"),
                n.e("8304"),
                n.e("58038"),
                n.e("93159"),
                n.e("55936"),
                n.e("11566"),
                n.e("21106"),
                n.e("31988"),
                n.e("94723"),
                n.e("62931"),
                n.e("81987"),
                n.e("58007"),
                n.e("5812"),
                n.e("17363"),
                n.e("58337"),
                n.e("26437"),
                n.e("13708"),
                n.e("76602"),
                n.e("28229"),
                n.e("71470"),
                n.e("76418"),
                n.e("21921"),
                n.e("9233"),
                n.e("69747"),
                n.e("40258"),
                n.e("66495"),
                n.e("91146"),
                n.e("42724"),
                n.e("43437"),
                n.e("39970"),
                n.e("82263"),
                n.e("30221"),
                n.e("8371"),
                n.e("8555"),
                n.e("86127"),
                n.e("6174"),
                n.e("39851"),
                n.e("58216"),
                n.e("72789"),
                n.e("6949"),
                n.e("29871"),
                n.e("17249"),
                n.e("41250"),
                n.e("35027"),
                n.e("84971"),
                n.e("53917"),
                n.e("9640"),
                n.e("62422"),
                n.e("15423"),
                n.e("26295"),
                n.e("88599"),
                n.e("36863"),
                n.e("1518"),
                n.e("67861"),
                n.e("15186"),
                n.e("98765"),
                n.e("23354"),
                n.e("89088"),
                n.e("82644"),
                n.e("37187"),
                n.e("71273"),
                n.e("27779"),
                n.e("75842"),
                n.e("12743"),
                n.e("10957"),
                n.e("55973"),
                n.e("20590"),
                n.e("45172"),
                n.e("65437"),
                n.e("34983"),
                n.e("63235"),
                n.e("74810"),
                n.e("28083"),
                n.e("80830"),
                n.e("86672"),
                n.e("3589"),
                n.e("86814"),
                n.e("52548"),
                n.e("35771"),
                n.e("22266"),
                n.e("53984"),
                n.e("59414"),
                n.e("80854"),
                n.e("79780"),
                n.e("35395"),
                n.e("43780"),
                n.e("14041"),
                n.e("46844"),
                n.e("45413"),
                n.e("22822"),
                n.e("75627"),
                n.e("90664"),
                n.e("79745"),
                n.e("34150"),
                n.e("64850"),
                n.e("72401"),
                n.e("22855"),
                n.e("70104"),
                n.e("68904"),
                n.e("68802"),
                n.e("52617"),
                n.e("8563"),
                n.e("2564"),
                n.e("47417"),
                n.e("19558"),
                n.e("58946"),
                n.e("14285"),
                n.e("95752"),
                n.e("78100"),
                n.e("78453"),
                n.e("8362"),
                n.e("80149"),
                n.e("2698"),
                n.e("62875"),
                n.e("4744"),
                n.e("87046"),
                n.e("12542"),
                n.e("501"),
                n.e("46769"),
                n.e("33297"),
                n.e("73384"),
                n.e("86243"),
                n.e("82783"),
                n.e("7833"),
                n.e("32209"),
                n.e("30788"),
                n.e("48295"),
                n.e("60249"),
                n.e("4193"),
                n.e("39171"),
                n.e("25246"),
                n.e("37021"),
                n.e("21049"),
                n.e("8377"),
                n.e("28610"),
                n.e("44571"),
                n.e("44795"),
                n.e("71268"),
                n.e("95370"),
                n.e("97784"),
                n.e("10014"),
                n.e("84783"),
                n.e("44928"),
                n.e("33416"),
                n.e("83952"),
                n.e("37752"),
                n.e("3217"),
                n.e("47678"),
                n.e("5557"),
                n.e("62718"),
                n.e("93907"),
                n.e("90301"),
                n.e("49145"),
                n.e("68763"),
                n.e("15188"),
                n.e("15109"),
                n.e("18489"),
                n.e("92295"),
                n.e("19454"),
                n.e("50535"),
                n.e("81202"),
                n.e("26001"),
                n.e("99549"),
                n.e("52111"),
                n.e("16988"),
                n.e("28136"),
                n.e("59797"),
                n.e("90213"),
                n.e("69765"),
                n.e("62304"),
                n.e("75859"),
                n.e("29080"),
                n.e("10943"),
                n.e("68530"),
                n.e("52212"),
                n.e("73669"),
                n.e("66016"),
                n.e("83518"),
                n.e("3710"),
                n.e("48730"),
                n.e("45830"),
                n.e("7775"),
                n.e("61058"),
                n.e("33097"),
                n.e("46313"),
                n.e("36002"),
                n.e("43233"),
                n.e("30501"),
                n.e("66913"),
                n.e("71719"),
                n.e("13848"),
                n.e("39214"),
                n.e("14878"),
                n.e("73091"),
                n.e("44943"),
                n.e("60206"),
                n.e("50096"),
                n.e("99583"),
            ]).then(n.bind(n, 28988)),
        webpackId: 28988,
        name: "MemberSafetyPage",
        renderLoader: tA.NU,
    }),
    dE = (0, g.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("46946"),
                n.e("6287"),
                n.e("79146"),
                n.e("79093"),
                n.e("28510"),
                n.e("72900"),
                n.e("63419"),
                n.e("32101"),
                n.e("69273"),
                n.e("31788"),
                n.e("77083"),
                n.e("63009"),
                n.e("84786"),
                n.e("41909"),
                n.e("63397"),
                n.e("45650"),
                n.e("97189"),
                n.e("27660"),
                n.e("85484"),
                n.e("81510"),
                n.e("36407"),
                n.e("79705"),
                n.e("55658"),
                n.e("87616"),
                n.e("76032"),
                n.e("33957"),
                n.e("8357"),
                n.e("49699"),
                n.e("43108"),
                n.e("35598"),
                n.e("84611"),
                n.e("45235"),
                n.e("63635"),
                n.e("66782"),
                n.e("92652"),
                n.e("45229"),
                n.e("3840"),
                n.e("81579"),
                n.e("45317"),
                n.e("60664"),
                n.e("23924"),
                n.e("15510"),
                n.e("48226"),
                n.e("19402"),
                n.e("13111"),
                n.e("96382"),
                n.e("20287"),
                n.e("28367"),
                n.e("35429"),
                n.e("10471"),
                n.e("63232"),
                n.e("64827"),
                n.e("30938"),
                n.e("23808"),
                n.e("11301"),
                n.e("60235"),
                n.e("61737"),
                n.e("79428"),
                n.e("29963"),
                n.e("47834"),
                n.e("98329"),
                n.e("20317"),
                n.e("84569"),
                n.e("2368"),
                n.e("27084"),
                n.e("24313"),
                n.e("48405"),
                n.e("63185"),
                n.e("19551"),
                n.e("84150"),
                n.e("45959"),
                n.e("18573"),
                n.e("55057"),
                n.e("37794"),
                n.e("26073"),
                n.e("7743"),
                n.e("34303"),
                n.e("48172"),
                n.e("28866"),
                n.e("54961"),
                n.e("8304"),
                n.e("58038"),
                n.e("93159"),
                n.e("55936"),
                n.e("11566"),
                n.e("21106"),
                n.e("31988"),
                n.e("94723"),
                n.e("62931"),
                n.e("81987"),
                n.e("58007"),
                n.e("5812"),
                n.e("17363"),
                n.e("34552"),
                n.e("55411"),
                n.e("93103"),
                n.e("58337"),
                n.e("26437"),
                n.e("91763"),
                n.e("13708"),
                n.e("76602"),
                n.e("28229"),
                n.e("71470"),
                n.e("91007"),
                n.e("68403"),
                n.e("76418"),
                n.e("21921"),
                n.e("9233"),
                n.e("88342"),
                n.e("69747"),
                n.e("40258"),
                n.e("20683"),
                n.e("66495"),
                n.e("91146"),
                n.e("42724"),
                n.e("43437"),
                n.e("39970"),
                n.e("82263"),
                n.e("42451"),
                n.e("30221"),
                n.e("8371"),
                n.e("8555"),
                n.e("86127"),
                n.e("6174"),
                n.e("39851"),
                n.e("58216"),
                n.e("98965"),
                n.e("72789"),
                n.e("6949"),
                n.e("29871"),
                n.e("17249"),
                n.e("41250"),
                n.e("35027"),
                n.e("84971"),
                n.e("53917"),
                n.e("9640"),
                n.e("62422"),
                n.e("15423"),
                n.e("26295"),
                n.e("88599"),
                n.e("36863"),
                n.e("1518"),
                n.e("67861"),
                n.e("15186"),
                n.e("98765"),
                n.e("23354"),
                n.e("89088"),
                n.e("82644"),
                n.e("37187"),
                n.e("71273"),
                n.e("27779"),
                n.e("75842"),
                n.e("12743"),
                n.e("10957"),
                n.e("55973"),
                n.e("20590"),
                n.e("45172"),
                n.e("35313"),
                n.e("65437"),
                n.e("34983"),
                n.e("63235"),
                n.e("74810"),
                n.e("28083"),
                n.e("80830"),
                n.e("86672"),
                n.e("3589"),
                n.e("86814"),
                n.e("52548"),
                n.e("35771"),
                n.e("22266"),
                n.e("53984"),
                n.e("59414"),
                n.e("80854"),
                n.e("79780"),
                n.e("35395"),
                n.e("43780"),
                n.e("14041"),
                n.e("46844"),
                n.e("45413"),
                n.e("22822"),
                n.e("75627"),
                n.e("90664"),
                n.e("79745"),
                n.e("34150"),
                n.e("64850"),
                n.e("72401"),
                n.e("22855"),
                n.e("70104"),
                n.e("68904"),
                n.e("68802"),
                n.e("52617"),
                n.e("8563"),
                n.e("2564"),
                n.e("47417"),
                n.e("19558"),
                n.e("58946"),
                n.e("14285"),
                n.e("95752"),
                n.e("78100"),
                n.e("78453"),
                n.e("8362"),
                n.e("80149"),
                n.e("2698"),
                n.e("62875"),
                n.e("4744"),
                n.e("87046"),
                n.e("12542"),
                n.e("501"),
                n.e("46769"),
                n.e("33297"),
                n.e("35321"),
                n.e("73384"),
                n.e("86243"),
                n.e("82783"),
                n.e("7833"),
                n.e("32209"),
                n.e("30788"),
                n.e("48295"),
                n.e("60249"),
                n.e("4193"),
                n.e("39171"),
                n.e("25246"),
                n.e("37021"),
                n.e("21049"),
                n.e("8377"),
                n.e("28610"),
                n.e("36564"),
                n.e("44571"),
                n.e("44795"),
                n.e("80436"),
                n.e("71268"),
                n.e("95370"),
                n.e("97784"),
                n.e("50033"),
                n.e("10014"),
                n.e("84783"),
                n.e("44928"),
                n.e("33416"),
                n.e("37752"),
                n.e("3217"),
                n.e("47678"),
                n.e("5557"),
                n.e("95340"),
                n.e("62718"),
                n.e("93907"),
                n.e("3998"),
                n.e("89916"),
                n.e("90301"),
                n.e("68763"),
                n.e("15188"),
                n.e("61156"),
                n.e("15109"),
                n.e("91671"),
                n.e("29666"),
                n.e("58273"),
                n.e("60773"),
                n.e("92295"),
                n.e("19454"),
                n.e("20930"),
                n.e("16767"),
                n.e("74610"),
                n.e("50535"),
                n.e("44801"),
                n.e("38056"),
                n.e("26001"),
                n.e("36926"),
                n.e("99549"),
                n.e("14591"),
                n.e("52111"),
                n.e("8018"),
                n.e("6841"),
                n.e("63071"),
                n.e("16988"),
                n.e("57458"),
                n.e("59797"),
                n.e("8829"),
                n.e("86697"),
                n.e("20379"),
                n.e("69765"),
                n.e("76413"),
                n.e("3303"),
                n.e("1243"),
                n.e("62304"),
                n.e("19193"),
                n.e("80945"),
                n.e("18265"),
                n.e("75859"),
                n.e("29080"),
                n.e("96804"),
                n.e("95998"),
                n.e("27659"),
                n.e("36419"),
                n.e("68530"),
                n.e("42234"),
                n.e("78046"),
                n.e("28850"),
                n.e("74678"),
                n.e("20045"),
                n.e("81189"),
                n.e("92077"),
                n.e("10520"),
                n.e("12965"),
                n.e("203"),
                n.e("4774"),
                n.e("49629"),
                n.e("26294"),
                n.e("78601"),
                n.e("89523"),
                n.e("80407"),
                n.e("42726"),
                n.e("34546"),
                n.e("77663"),
                n.e("41701"),
                n.e("39894"),
                n.e("47057"),
                n.e("60989"),
                n.e("86902"),
                n.e("68083"),
                n.e("2855"),
                n.e("48730"),
                n.e("71467"),
                n.e("29260"),
                n.e("51892"),
                n.e("41838"),
                n.e("46045"),
                n.e("3707"),
                n.e("60003"),
                n.e("16054"),
                n.e("26516"),
                n.e("33869"),
                n.e("56026"),
                n.e("16301"),
                n.e("22191"),
                n.e("25961"),
                n.e("50068"),
                n.e("88307"),
                n.e("26508"),
                n.e("61347"),
                n.e("21883"),
                n.e("32347"),
                n.e("78047"),
                n.e("13446"),
                n.e("30313"),
                n.e("1485"),
                n.e("22511"),
                n.e("31189"),
                n.e("13939"),
                n.e("82910"),
                n.e("72165"),
            ]).then(n.bind(n, 807780)),
        webpackId: 807780,
        name: "ChannelsAndRolesPage",
        renderLoader: tA.n,
    }),
    dp = (0, g.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("8357"),
                n.e("45317"),
                n.e("41909"),
                n.e("61195"),
                n.e("91428"),
                n.e("96382"),
                n.e("20287"),
                n.e("8555"),
                n.e("29260"),
                n.e("15275"),
                n.e("56026"),
                n.e("16301"),
                n.e("22191"),
                n.e("25961"),
                n.e("74821"),
                n.e("26508"),
                n.e("86692"),
                n.e("15537"),
                n.e("36999"),
                n.e("13939"),
                n.e("39579"),
            ]).then(n.bind(n, 123071)),
        webpackId: 123071,
        name: "GuildOnboardingPage",
        renderLoader: ds,
    }),
    dm = (0, g.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("62036"),
                n.e("75681"),
                n.e("8357"),
                n.e("55658"),
                n.e("72900"),
                n.e("7850"),
                n.e("76602"),
                n.e("82263"),
                n.e("95602"),
                n.e("42749"),
                n.e("2552"),
                n.e("82926"),
                n.e("3345"),
                n.e("59447"),
                n.e("88466"),
                n.e("49379"),
                n.e("37084"),
                n.e("35016"),
                n.e("88615"),
            ]).then(n.bind(n, 242269)),
        webpackId: 242269,
        name: "GuildPowerupsPage",
        renderLoader: tA.Ru,
    }),
    dI = (0, g.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("6287"),
                n.e("7866"),
                n.e("62036"),
                n.e("91007"),
                n.e("82926"),
                n.e("68708"),
                n.e("88466"),
                n.e("37084"),
                n.e("63562"),
                n.e("19750"),
            ]).then(n.bind(n, 717959)),
        webpackId: 717959,
        name: "GameServerPage",
        renderLoader: tA.Ub,
    }),
    dg = (0, g.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("84611"),
                n.e("93329"),
                n.e("15356"),
                n.e("22687"),
                n.e("82596"),
                n.e("75627"),
                n.e("80149"),
                n.e("501"),
                n.e("52212"),
                n.e("87732"),
                n.e("57197"),
                n.e("22420"),
                n.e("40976"),
                n.e("52753"),
                n.e("17321"),
                n.e("72970"),
            ]).then(n.bind(n, 590114)),
        webpackId: 590114,
        name: "ApplicationLibraryPage",
        renderLoader: tA.cL,
    }),
    dC = (0, g.qT)({
        createPromise: () =>
            Promise.all([
                n.e("51529"),
                n.e("63397"),
                n.e("44651"),
                n.e("8357"),
                n.e("3377"),
                n.e("63635"),
                n.e("32101"),
                n.e("52204"),
                n.e("11491"),
                n.e("83072"),
                n.e("10373"),
                n.e("72900"),
                n.e("81154"),
                n.e("46286"),
                n.e("31788"),
                n.e("70845"),
                n.e("74968"),
                n.e("92436"),
                n.e("71470"),
                n.e("43437"),
                n.e("82263"),
                n.e("30221"),
                n.e("6174"),
                n.e("58216"),
                n.e("6949"),
                n.e("35027"),
                n.e("89088"),
                n.e("35771"),
                n.e("59414"),
                n.e("14041"),
                n.e("22855"),
                n.e("68904"),
                n.e("95752"),
                n.e("2698"),
                n.e("32209"),
                n.e("44571"),
                n.e("80436"),
                n.e("71268"),
                n.e("15109"),
                n.e("19454"),
                n.e("88990"),
                n.e("16988"),
                n.e("59797"),
                n.e("3303"),
                n.e("75859"),
                n.e("87317"),
                n.e("80262"),
                n.e("66783"),
                n.e("11617"),
                n.e("60989"),
                n.e("33448"),
                n.e("14020"),
                n.e("83827"),
                n.e("86300"),
                n.e("61347"),
                n.e("52695"),
                n.e("93767"),
                n.e("84951"),
                n.e("30313"),
                n.e("21300"),
                n.e("70698"),
                n.e("26223"),
                n.e("92539"),
                n.e("2529"),
                n.e("8624"),
                n.e("36999"),
                n.e("42492"),
                n.e("68708"),
                n.e("35895"),
                n.e("3345"),
                n.e("57729"),
                n.e("54588"),
                n.e("59447"),
                n.e("7521"),
                n.e("60206"),
                n.e("86336"),
                n.e("49111"),
                n.e("42270"),
                n.e("97585"),
                n.e("87634"),
                n.e("90879"),
                n.e("42243"),
                n.e("9114"),
                n.e("53683"),
                n.e("83373"),
            ]).then(n.bind(n, 622168)),
        webpackId: 622168,
        name: "GuildSidebar",
        renderLoader: tA.L,
    }),
    dT = (0, g.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("24211"),
                n.e("45235"),
                n.e("25652"),
                n.e("13403"),
                n.e("27084"),
                n.e("84150"),
                n.e("54961"),
                n.e("58337"),
                n.e("26437"),
                n.e("13708"),
                n.e("71470"),
                n.e("20683"),
                n.e("30221"),
                n.e("8371"),
                n.e("58216"),
                n.e("41250"),
                n.e("84971"),
                n.e("27779"),
                n.e("12743"),
                n.e("35771"),
                n.e("22266"),
                n.e("59414"),
                n.e("75627"),
                n.e("34150"),
                n.e("68904"),
                n.e("68802"),
                n.e("8563"),
                n.e("80149"),
                n.e("7833"),
                n.e("60249"),
                n.e("80436"),
                n.e("10014"),
                n.e("84783"),
                n.e("33416"),
                n.e("37752"),
                n.e("47678"),
                n.e("93907"),
                n.e("18489"),
                n.e("50535"),
                n.e("44801"),
                n.e("81202"),
                n.e("36926"),
                n.e("79211"),
                n.e("63071"),
                n.e("88990"),
                n.e("86697"),
                n.e("90213"),
                n.e("3303"),
                n.e("38090"),
                n.e("29080"),
                n.e("80262"),
                n.e("20045"),
                n.e("52212"),
                n.e("10520"),
                n.e("66016"),
                n.e("77663"),
                n.e("83518"),
                n.e("2855"),
                n.e("34936"),
                n.e("19815"),
                n.e("3304"),
                n.e("87732"),
                n.e("46450"),
                n.e("14020"),
                n.e("43549"),
                n.e("89638"),
                n.e("61597"),
                n.e("37038"),
                n.e("27838"),
                n.e("54630"),
                n.e("14656"),
                n.e("39855"),
                n.e("93917"),
                n.e("14530"),
                n.e("619"),
                n.e("36973"),
                n.e("75933"),
                n.e("7406"),
                n.e("24019"),
                n.e("86492"),
                n.e("10622"),
                n.e("32607"),
                n.e("38714"),
                n.e("21331"),
                n.e("65011"),
                n.e("61764"),
                n.e("14248"),
                n.e("6391"),
                n.e("15809"),
                n.e("71367"),
                n.e("69237"),
                n.e("35874"),
                n.e("10741"),
                n.e("86381"),
                n.e("56513"),
                n.e("54360"),
                n.e("8624"),
                n.e("82926"),
                n.e("5235"),
                n.e("35778"),
                n.e("58932"),
                n.e("50695"),
                n.e("24107"),
                n.e("5331"),
                n.e("83438"),
                n.e("65722"),
                n.e("18861"),
                n.e("51356"),
                n.e("69201"),
                n.e("13079"),
                n.e("86686"),
                n.e("78124"),
                n.e("52577"),
                n.e("37589"),
                n.e("22154"),
                n.e("94698"),
                n.e("83701"),
                n.e("64316"),
                n.e("79763"),
                n.e("72158"),
                n.e("87141"),
                n.e("46101"),
                n.e("94329"),
                n.e("49287"),
                n.e("70876"),
                n.e("18911"),
                n.e("15754"),
                n.e("90363"),
                n.e("41140"),
                n.e("48312"),
                n.e("51357"),
            ]).then(n.bind(n, 14566)),
        webpackId: 14566,
        name: "PrivateChannels",
        renderLoader: tA.bM,
    }),
    df = (0, g.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("47695"),
                n.e("8357"),
                n.e("83108"),
                n.e("84611"),
                n.e("3506"),
                n.e("45235"),
                n.e("43661"),
                n.e("29020"),
                n.e("94371"),
                n.e("94925"),
                n.e("84786"),
                n.e("32101"),
                n.e("69273"),
                n.e("31788"),
                n.e("77083"),
                n.e("63009"),
                n.e("41909"),
                n.e("63397"),
                n.e("45650"),
                n.e("97189"),
                n.e("27660"),
                n.e("6287"),
                n.e("85484"),
                n.e("81510"),
                n.e("36407"),
                n.e("79705"),
                n.e("47324"),
                n.e("92652"),
                n.e("8068"),
                n.e("33957"),
                n.e("51919"),
                n.e("51945"),
                n.e("23924"),
                n.e("15510"),
                n.e("48226"),
                n.e("20287"),
                n.e("28367"),
                n.e("35429"),
                n.e("10471"),
                n.e("63232"),
                n.e("64827"),
                n.e("30938"),
                n.e("23808"),
                n.e("11301"),
                n.e("60235"),
                n.e("61737"),
                n.e("79428"),
                n.e("29963"),
                n.e("47834"),
                n.e("98329"),
                n.e("20317"),
                n.e("84569"),
                n.e("2368"),
                n.e("27084"),
                n.e("24313"),
                n.e("48405"),
                n.e("63185"),
                n.e("19551"),
                n.e("84150"),
                n.e("45959"),
                n.e("18573"),
                n.e("55057"),
                n.e("37794"),
                n.e("26073"),
                n.e("7743"),
                n.e("34303"),
                n.e("48172"),
                n.e("28866"),
                n.e("54961"),
                n.e("8304"),
                n.e("58038"),
                n.e("93159"),
                n.e("55936"),
                n.e("11566"),
                n.e("21106"),
                n.e("31988"),
                n.e("94723"),
                n.e("62931"),
                n.e("81987"),
                n.e("58007"),
                n.e("5812"),
                n.e("17363"),
                n.e("55411"),
                n.e("93103"),
                n.e("26437"),
                n.e("40258"),
                n.e("91146"),
                n.e("42724"),
                n.e("86127"),
                n.e("6174"),
                n.e("39851"),
                n.e("6949"),
                n.e("29871"),
                n.e("41250"),
                n.e("15423"),
                n.e("36863"),
                n.e("89088"),
                n.e("71273"),
                n.e("10957"),
                n.e("45172"),
                n.e("52548"),
                n.e("80854"),
                n.e("52617"),
                n.e("58946"),
                n.e("78453"),
                n.e("12542"),
                n.e("30788"),
                n.e("4193"),
                n.e("25246"),
                n.e("8377"),
                n.e("28610"),
                n.e("44571"),
                n.e("44795"),
                n.e("44928"),
                n.e("59957"),
                n.e("74610"),
                n.e("81202"),
                n.e("36926"),
                n.e("16988"),
                n.e("52212"),
                n.e("45830"),
                n.e("61058"),
                n.e("91643"),
                n.e("52511"),
                n.e("54103"),
                n.e("8364"),
                n.e("74337"),
                n.e("56967"),
                n.e("68031"),
                n.e("52803"),
                n.e("53275"),
                n.e("92064"),
                n.e("24564"),
                n.e("71367"),
                n.e("85384"),
                n.e("58932"),
                n.e("96975"),
                n.e("68974"),
                n.e("30003"),
                n.e("79763"),
                n.e("76361"),
                n.e("75072"),
                n.e("78677"),
                n.e("33546"),
                n.e("82428"),
                n.e("5468"),
                n.e("14289"),
            ]).then(n.bind(n, 942262)),
        webpackId: 942262,
        name: "GlobalDiscovery",
        renderLoader: tA.Bj,
    }),
    dN = (0, g.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("41909"),
                n.e("84611"),
                n.e("6287"),
                n.e("20287"),
                n.e("28367"),
                n.e("20683"),
                n.e("83952"),
                n.e("38056"),
                n.e("42234"),
                n.e("34546"),
                n.e("16054"),
                n.e("43549"),
                n.e("63497"),
                n.e("54630"),
                n.e("27462"),
                n.e("86492"),
                n.e("10622"),
                n.e("6627"),
                n.e("99053"),
                n.e("75284"),
                n.e("6391"),
                n.e("14334"),
                n.e("39967"),
                n.e("14093"),
                n.e("25252"),
            ]).then(n.bind(n, 767060)),
        webpackId: 767060,
        name: "FamilyCenterRouter",
        renderLoader: tA.c5,
    }),
    dS = (0, g.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("83108"),
                n.e("8357"),
                n.e("92652"),
                n.e("31788"),
                n.e("8068"),
                n.e("63397"),
                n.e("33957"),
                n.e("6287"),
                n.e("51919"),
                n.e("41909"),
                n.e("51945"),
                n.e("20287"),
                n.e("28367"),
                n.e("34303"),
                n.e("40258"),
                n.e("42724"),
                n.e("86127"),
                n.e("36863"),
                n.e("58946"),
                n.e("59957"),
                n.e("81202"),
                n.e("52511"),
                n.e("54103"),
                n.e("52803"),
                n.e("53275"),
                n.e("96975"),
                n.e("30003"),
                n.e("79763"),
                n.e("33546"),
                n.e("5468"),
            ]).then(n.bind(n, 133276)),
        webpackId: 133276,
        name: "QuestHomePage",
        renderLoader: tA.g4,
    }),
    dL = (0, g.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("84763"),
                n.e("72900"),
                n.e("63419"),
                n.e("6287"),
                n.e("32101"),
                n.e("69273"),
                n.e("31788"),
                n.e("77083"),
                n.e("63009"),
                n.e("84786"),
                n.e("41909"),
                n.e("63397"),
                n.e("45650"),
                n.e("97189"),
                n.e("27660"),
                n.e("85484"),
                n.e("81510"),
                n.e("36407"),
                n.e("79705"),
                n.e("55658"),
                n.e("87616"),
                n.e("76032"),
                n.e("33957"),
                n.e("8357"),
                n.e("49699"),
                n.e("43108"),
                n.e("35598"),
                n.e("84611"),
                n.e("45235"),
                n.e("63635"),
                n.e("66782"),
                n.e("92652"),
                n.e("45229"),
                n.e("11273"),
                n.e("69984"),
                n.e("23924"),
                n.e("15510"),
                n.e("48226"),
                n.e("20287"),
                n.e("28367"),
                n.e("35429"),
                n.e("10471"),
                n.e("63232"),
                n.e("64827"),
                n.e("30938"),
                n.e("23808"),
                n.e("11301"),
                n.e("60235"),
                n.e("61737"),
                n.e("79428"),
                n.e("29963"),
                n.e("47834"),
                n.e("98329"),
                n.e("20317"),
                n.e("84569"),
                n.e("2368"),
                n.e("27084"),
                n.e("24313"),
                n.e("48405"),
                n.e("63185"),
                n.e("19551"),
                n.e("84150"),
                n.e("45959"),
                n.e("18573"),
                n.e("55057"),
                n.e("37794"),
                n.e("26073"),
                n.e("7743"),
                n.e("34303"),
                n.e("48172"),
                n.e("28866"),
                n.e("54961"),
                n.e("8304"),
                n.e("58038"),
                n.e("93159"),
                n.e("55936"),
                n.e("11566"),
                n.e("21106"),
                n.e("31988"),
                n.e("94723"),
                n.e("62931"),
                n.e("81987"),
                n.e("58007"),
                n.e("5812"),
                n.e("17363"),
                n.e("58337"),
                n.e("26437"),
                n.e("13708"),
                n.e("76602"),
                n.e("28229"),
                n.e("71470"),
                n.e("76418"),
                n.e("21921"),
                n.e("9233"),
                n.e("69747"),
                n.e("40258"),
                n.e("66495"),
                n.e("91146"),
                n.e("42724"),
                n.e("43437"),
                n.e("39970"),
                n.e("82263"),
                n.e("30221"),
                n.e("8371"),
                n.e("8555"),
                n.e("86127"),
                n.e("6174"),
                n.e("39851"),
                n.e("58216"),
                n.e("72789"),
                n.e("6949"),
                n.e("29871"),
                n.e("17249"),
                n.e("41250"),
                n.e("35027"),
                n.e("84971"),
                n.e("53917"),
                n.e("9640"),
                n.e("62422"),
                n.e("15423"),
                n.e("26295"),
                n.e("88599"),
                n.e("36863"),
                n.e("1518"),
                n.e("67861"),
                n.e("15186"),
                n.e("98765"),
                n.e("23354"),
                n.e("89088"),
                n.e("82644"),
                n.e("37187"),
                n.e("71273"),
                n.e("27779"),
                n.e("75842"),
                n.e("12743"),
                n.e("10957"),
                n.e("55973"),
                n.e("20590"),
                n.e("45172"),
                n.e("65437"),
                n.e("34983"),
                n.e("63235"),
                n.e("74810"),
                n.e("28083"),
                n.e("80830"),
                n.e("86672"),
                n.e("3589"),
                n.e("86814"),
                n.e("52548"),
                n.e("35771"),
                n.e("22266"),
                n.e("53984"),
                n.e("59414"),
                n.e("80854"),
                n.e("79780"),
                n.e("35395"),
                n.e("43780"),
                n.e("14041"),
                n.e("46844"),
                n.e("45413"),
                n.e("22822"),
                n.e("75627"),
                n.e("90664"),
                n.e("79745"),
                n.e("34150"),
                n.e("64850"),
                n.e("72401"),
                n.e("22855"),
                n.e("70104"),
                n.e("68904"),
                n.e("68802"),
                n.e("52617"),
                n.e("8563"),
                n.e("2564"),
                n.e("47417"),
                n.e("19558"),
                n.e("58946"),
                n.e("14285"),
                n.e("95752"),
                n.e("78100"),
                n.e("78453"),
                n.e("8362"),
                n.e("80149"),
                n.e("2698"),
                n.e("62875"),
                n.e("4744"),
                n.e("87046"),
                n.e("12542"),
                n.e("501"),
                n.e("46769"),
                n.e("33297"),
                n.e("73384"),
                n.e("86243"),
                n.e("82783"),
                n.e("7833"),
                n.e("32209"),
                n.e("30788"),
                n.e("48295"),
                n.e("60249"),
                n.e("4193"),
                n.e("25246"),
                n.e("37021"),
                n.e("21049"),
                n.e("8377"),
                n.e("28610"),
                n.e("44571"),
                n.e("44795"),
                n.e("71268"),
                n.e("95370"),
                n.e("97784"),
                n.e("10014"),
                n.e("84783"),
                n.e("44928"),
                n.e("33416"),
                n.e("37752"),
                n.e("3217"),
                n.e("47678"),
                n.e("5557"),
                n.e("62718"),
                n.e("90301"),
                n.e("15109"),
                n.e("19454"),
                n.e("99549"),
                n.e("16988"),
                n.e("59797"),
                n.e("69765"),
                n.e("62304"),
                n.e("75859"),
                n.e("29080"),
                n.e("68530"),
                n.e("38652"),
            ]).then(n.bind(n, 461007)),
        webpackId: 461007,
        name: "ICYMIPage",
        renderLoader: tA.so,
    }),
    dO = (0, g.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("46946"),
                n.e("6287"),
                n.e("79093"),
                n.e("28510"),
                n.e("72900"),
                n.e("63419"),
                n.e("32101"),
                n.e("69273"),
                n.e("31788"),
                n.e("77083"),
                n.e("63009"),
                n.e("84786"),
                n.e("41909"),
                n.e("63397"),
                n.e("45650"),
                n.e("97189"),
                n.e("27660"),
                n.e("85484"),
                n.e("81510"),
                n.e("36407"),
                n.e("79705"),
                n.e("55658"),
                n.e("87616"),
                n.e("76032"),
                n.e("33957"),
                n.e("8357"),
                n.e("49699"),
                n.e("43108"),
                n.e("35598"),
                n.e("84611"),
                n.e("45235"),
                n.e("63635"),
                n.e("66782"),
                n.e("92652"),
                n.e("45229"),
                n.e("3840"),
                n.e("81579"),
                n.e("23924"),
                n.e("15510"),
                n.e("48226"),
                n.e("19402"),
                n.e("13111"),
                n.e("20287"),
                n.e("28367"),
                n.e("35429"),
                n.e("10471"),
                n.e("63232"),
                n.e("64827"),
                n.e("30938"),
                n.e("23808"),
                n.e("11301"),
                n.e("60235"),
                n.e("61737"),
                n.e("79428"),
                n.e("29963"),
                n.e("47834"),
                n.e("98329"),
                n.e("20317"),
                n.e("84569"),
                n.e("2368"),
                n.e("27084"),
                n.e("24313"),
                n.e("48405"),
                n.e("63185"),
                n.e("19551"),
                n.e("84150"),
                n.e("45959"),
                n.e("18573"),
                n.e("55057"),
                n.e("37794"),
                n.e("26073"),
                n.e("7743"),
                n.e("34303"),
                n.e("48172"),
                n.e("28866"),
                n.e("54961"),
                n.e("8304"),
                n.e("58038"),
                n.e("93159"),
                n.e("55936"),
                n.e("11566"),
                n.e("21106"),
                n.e("31988"),
                n.e("94723"),
                n.e("62931"),
                n.e("81987"),
                n.e("58007"),
                n.e("5812"),
                n.e("17363"),
                n.e("34552"),
                n.e("55411"),
                n.e("93103"),
                n.e("58337"),
                n.e("26437"),
                n.e("13708"),
                n.e("76602"),
                n.e("28229"),
                n.e("71470"),
                n.e("91007"),
                n.e("68403"),
                n.e("76418"),
                n.e("21921"),
                n.e("9233"),
                n.e("88342"),
                n.e("69747"),
                n.e("40258"),
                n.e("20683"),
                n.e("66495"),
                n.e("91146"),
                n.e("42724"),
                n.e("43437"),
                n.e("39970"),
                n.e("82263"),
                n.e("42451"),
                n.e("30221"),
                n.e("8371"),
                n.e("8555"),
                n.e("86127"),
                n.e("6174"),
                n.e("39851"),
                n.e("58216"),
                n.e("98965"),
                n.e("72789"),
                n.e("6949"),
                n.e("29871"),
                n.e("17249"),
                n.e("41250"),
                n.e("35027"),
                n.e("84971"),
                n.e("53917"),
                n.e("9640"),
                n.e("62422"),
                n.e("15423"),
                n.e("26295"),
                n.e("88599"),
                n.e("36863"),
                n.e("1518"),
                n.e("67861"),
                n.e("15186"),
                n.e("98765"),
                n.e("23354"),
                n.e("89088"),
                n.e("82644"),
                n.e("37187"),
                n.e("71273"),
                n.e("27779"),
                n.e("75842"),
                n.e("12743"),
                n.e("10957"),
                n.e("55973"),
                n.e("20590"),
                n.e("45172"),
                n.e("35313"),
                n.e("65437"),
                n.e("34983"),
                n.e("63235"),
                n.e("74810"),
                n.e("28083"),
                n.e("80830"),
                n.e("86672"),
                n.e("3589"),
                n.e("86814"),
                n.e("52548"),
                n.e("35771"),
                n.e("22266"),
                n.e("53984"),
                n.e("59414"),
                n.e("80854"),
                n.e("79780"),
                n.e("35395"),
                n.e("43780"),
                n.e("14041"),
                n.e("46844"),
                n.e("45413"),
                n.e("22822"),
                n.e("75627"),
                n.e("90664"),
                n.e("79745"),
                n.e("34150"),
                n.e("64850"),
                n.e("72401"),
                n.e("22855"),
                n.e("70104"),
                n.e("68904"),
                n.e("68802"),
                n.e("52617"),
                n.e("8563"),
                n.e("2564"),
                n.e("47417"),
                n.e("19558"),
                n.e("58946"),
                n.e("14285"),
                n.e("95752"),
                n.e("78100"),
                n.e("78453"),
                n.e("8362"),
                n.e("80149"),
                n.e("2698"),
                n.e("62875"),
                n.e("4744"),
                n.e("87046"),
                n.e("12542"),
                n.e("501"),
                n.e("46769"),
                n.e("33297"),
                n.e("73384"),
                n.e("86243"),
                n.e("82783"),
                n.e("7833"),
                n.e("32209"),
                n.e("30788"),
                n.e("48295"),
                n.e("60249"),
                n.e("4193"),
                n.e("39171"),
                n.e("25246"),
                n.e("37021"),
                n.e("21049"),
                n.e("8377"),
                n.e("28610"),
                n.e("36564"),
                n.e("44571"),
                n.e("44795"),
                n.e("80436"),
                n.e("71268"),
                n.e("95370"),
                n.e("97784"),
                n.e("10014"),
                n.e("84783"),
                n.e("44928"),
                n.e("33416"),
                n.e("37752"),
                n.e("3217"),
                n.e("47678"),
                n.e("5557"),
                n.e("95340"),
                n.e("62718"),
                n.e("93907"),
                n.e("3998"),
                n.e("89916"),
                n.e("90301"),
                n.e("68763"),
                n.e("15188"),
                n.e("61156"),
                n.e("15109"),
                n.e("91671"),
                n.e("29666"),
                n.e("58273"),
                n.e("60773"),
                n.e("92295"),
                n.e("19454"),
                n.e("20930"),
                n.e("16767"),
                n.e("74610"),
                n.e("50535"),
                n.e("44801"),
                n.e("38056"),
                n.e("26001"),
                n.e("36926"),
                n.e("99549"),
                n.e("14591"),
                n.e("52111"),
                n.e("8018"),
                n.e("6841"),
                n.e("63071"),
                n.e("16988"),
                n.e("57458"),
                n.e("59797"),
                n.e("8829"),
                n.e("86697"),
                n.e("20379"),
                n.e("69765"),
                n.e("76413"),
                n.e("3303"),
                n.e("1243"),
                n.e("62304"),
                n.e("19193"),
                n.e("80945"),
                n.e("18265"),
                n.e("75859"),
                n.e("29080"),
                n.e("96804"),
                n.e("95998"),
                n.e("36419"),
                n.e("68530"),
                n.e("42234"),
                n.e("28850"),
                n.e("74678"),
                n.e("20045"),
                n.e("81189"),
                n.e("92077"),
                n.e("10520"),
                n.e("12965"),
                n.e("203"),
                n.e("4774"),
                n.e("49629"),
                n.e("26294"),
                n.e("78601"),
                n.e("89523"),
                n.e("80407"),
                n.e("42726"),
                n.e("34546"),
                n.e("77663"),
                n.e("41701"),
                n.e("39894"),
                n.e("47057"),
                n.e("86902"),
                n.e("68083"),
                n.e("2855"),
                n.e("48730"),
                n.e("71467"),
                n.e("51892"),
                n.e("41838"),
                n.e("46045"),
                n.e("3707"),
                n.e("16054"),
                n.e("26516"),
                n.e("33869"),
                n.e("50068"),
                n.e("21883"),
                n.e("78047"),
                n.e("22511"),
                n.e("11346"),
                n.e("11015"),
            ]).then(n.bind(n, 515766)),
        webpackId: 515766,
        name: "MessageRequestPage",
        renderLoader: tA.rt,
    }),
    dy = (0, g.qT)({
        createPromise: () =>
            Promise.all([
                n.e("2332"),
                n.e("6287"),
                n.e("8357"),
                n.e("72900"),
                n.e("63419"),
                n.e("32101"),
                n.e("69273"),
                n.e("31788"),
                n.e("77083"),
                n.e("63009"),
                n.e("84786"),
                n.e("41909"),
                n.e("63397"),
                n.e("45650"),
                n.e("97189"),
                n.e("27660"),
                n.e("85484"),
                n.e("81510"),
                n.e("36407"),
                n.e("79705"),
                n.e("55658"),
                n.e("87616"),
                n.e("76032"),
                n.e("33957"),
                n.e("49699"),
                n.e("43108"),
                n.e("35598"),
                n.e("84611"),
                n.e("45235"),
                n.e("63635"),
                n.e("66782"),
                n.e("92652"),
                n.e("45229"),
                n.e("66346"),
                n.e("53773"),
                n.e("79093"),
                n.e("28510"),
                n.e("3840"),
                n.e("81579"),
                n.e("46946"),
                n.e("47206"),
                n.e("75681"),
                n.e("17270"),
                n.e("79146"),
                n.e("41475"),
                n.e("77948"),
                n.e("43446"),
                n.e("50256"),
                n.e("86921"),
                n.e("23924"),
                n.e("15510"),
                n.e("48226"),
                n.e("19402"),
                n.e("13111"),
                n.e("20287"),
                n.e("28367"),
                n.e("35429"),
                n.e("10471"),
                n.e("63232"),
                n.e("64827"),
                n.e("30938"),
                n.e("23808"),
                n.e("11301"),
                n.e("60235"),
                n.e("61737"),
                n.e("79428"),
                n.e("29963"),
                n.e("47834"),
                n.e("98329"),
                n.e("20317"),
                n.e("84569"),
                n.e("2368"),
                n.e("27084"),
                n.e("24313"),
                n.e("48405"),
                n.e("63185"),
                n.e("19551"),
                n.e("84150"),
                n.e("45959"),
                n.e("18573"),
                n.e("55057"),
                n.e("37794"),
                n.e("26073"),
                n.e("7743"),
                n.e("34303"),
                n.e("48172"),
                n.e("28866"),
                n.e("54961"),
                n.e("8304"),
                n.e("58038"),
                n.e("93159"),
                n.e("55936"),
                n.e("11566"),
                n.e("21106"),
                n.e("31988"),
                n.e("94723"),
                n.e("62931"),
                n.e("81987"),
                n.e("58007"),
                n.e("5812"),
                n.e("17363"),
                n.e("34552"),
                n.e("55411"),
                n.e("93103"),
                n.e("58337"),
                n.e("26437"),
                n.e("91763"),
                n.e("13708"),
                n.e("8757"),
                n.e("76602"),
                n.e("28229"),
                n.e("71470"),
                n.e("91007"),
                n.e("68403"),
                n.e("85968"),
                n.e("76418"),
                n.e("21921"),
                n.e("9233"),
                n.e("88342"),
                n.e("69747"),
                n.e("40258"),
                n.e("20683"),
                n.e("66495"),
                n.e("29787"),
                n.e("91146"),
                n.e("42724"),
                n.e("43437"),
                n.e("39970"),
                n.e("82263"),
                n.e("42451"),
                n.e("30221"),
                n.e("8371"),
                n.e("8555"),
                n.e("86127"),
                n.e("6174"),
                n.e("39851"),
                n.e("58216"),
                n.e("98965"),
                n.e("72789"),
                n.e("6949"),
                n.e("29871"),
                n.e("17249"),
                n.e("41250"),
                n.e("35027"),
                n.e("84971"),
                n.e("53917"),
                n.e("9640"),
                n.e("62422"),
                n.e("15423"),
                n.e("26295"),
                n.e("88599"),
                n.e("36863"),
                n.e("1518"),
                n.e("67861"),
                n.e("15186"),
                n.e("98765"),
                n.e("23354"),
                n.e("89088"),
                n.e("82644"),
                n.e("37187"),
                n.e("71273"),
                n.e("27779"),
                n.e("75842"),
                n.e("12743"),
                n.e("10957"),
                n.e("55973"),
                n.e("20590"),
                n.e("45172"),
                n.e("35313"),
                n.e("65437"),
                n.e("34983"),
                n.e("63235"),
                n.e("74810"),
                n.e("28083"),
                n.e("80830"),
                n.e("86672"),
                n.e("3589"),
                n.e("86814"),
                n.e("52548"),
                n.e("35771"),
                n.e("22266"),
                n.e("53984"),
                n.e("59414"),
                n.e("80854"),
                n.e("79780"),
                n.e("35395"),
                n.e("43780"),
                n.e("14041"),
                n.e("46844"),
                n.e("45413"),
                n.e("22822"),
                n.e("75627"),
                n.e("90664"),
                n.e("79745"),
                n.e("34150"),
                n.e("64850"),
                n.e("72401"),
                n.e("22855"),
                n.e("70104"),
                n.e("68904"),
                n.e("68802"),
                n.e("52617"),
                n.e("8563"),
                n.e("2564"),
                n.e("47417"),
                n.e("19558"),
                n.e("58946"),
                n.e("14285"),
                n.e("95752"),
                n.e("78100"),
                n.e("78453"),
                n.e("76273"),
                n.e("8362"),
                n.e("80149"),
                n.e("2698"),
                n.e("62875"),
                n.e("4744"),
                n.e("87046"),
                n.e("12542"),
                n.e("501"),
                n.e("46769"),
                n.e("33297"),
                n.e("35321"),
                n.e("73384"),
                n.e("86243"),
                n.e("82783"),
                n.e("7833"),
                n.e("32209"),
                n.e("30788"),
                n.e("48295"),
                n.e("60249"),
                n.e("4193"),
                n.e("39171"),
                n.e("25246"),
                n.e("37021"),
                n.e("21049"),
                n.e("8377"),
                n.e("28610"),
                n.e("36564"),
                n.e("44571"),
                n.e("44795"),
                n.e("80436"),
                n.e("71268"),
                n.e("95370"),
                n.e("97784"),
                n.e("50033"),
                n.e("10014"),
                n.e("84783"),
                n.e("44928"),
                n.e("33416"),
                n.e("83952"),
                n.e("37752"),
                n.e("3217"),
                n.e("47678"),
                n.e("5557"),
                n.e("44780"),
                n.e("95340"),
                n.e("62718"),
                n.e("93907"),
                n.e("3998"),
                n.e("89916"),
                n.e("90301"),
                n.e("49145"),
                n.e("68763"),
                n.e("15188"),
                n.e("61156"),
                n.e("15109"),
                n.e("18489"),
                n.e("43266"),
                n.e("91671"),
                n.e("29666"),
                n.e("58273"),
                n.e("60773"),
                n.e("92295"),
                n.e("19454"),
                n.e("20930"),
                n.e("16767"),
                n.e("74610"),
                n.e("50535"),
                n.e("44801"),
                n.e("38056"),
                n.e("26001"),
                n.e("36926"),
                n.e("99549"),
                n.e("14591"),
                n.e("52111"),
                n.e("8018"),
                n.e("6841"),
                n.e("63071"),
                n.e("88990"),
                n.e("16988"),
                n.e("57458"),
                n.e("59797"),
                n.e("8829"),
                n.e("86697"),
                n.e("12255"),
                n.e("20379"),
                n.e("69765"),
                n.e("40959"),
                n.e("76413"),
                n.e("3303"),
                n.e("1243"),
                n.e("62304"),
                n.e("19193"),
                n.e("80945"),
                n.e("18265"),
                n.e("75859"),
                n.e("29080"),
                n.e("96804"),
                n.e("95998"),
                n.e("27659"),
                n.e("36419"),
                n.e("80262"),
                n.e("15920"),
                n.e("68530"),
                n.e("42234"),
                n.e("20131"),
                n.e("78046"),
                n.e("28850"),
                n.e("74678"),
                n.e("20045"),
                n.e("81189"),
                n.e("92077"),
                n.e("80093"),
                n.e("10520"),
                n.e("12965"),
                n.e("79724"),
                n.e("203"),
                n.e("4774"),
                n.e("49629"),
                n.e("26294"),
                n.e("78601"),
                n.e("89523"),
                n.e("80407"),
                n.e("42726"),
                n.e("34546"),
                n.e("77663"),
                n.e("41701"),
                n.e("40204"),
                n.e("77467"),
                n.e("39894"),
                n.e("47057"),
                n.e("86902"),
                n.e("68083"),
                n.e("2855"),
                n.e("48730"),
                n.e("71467"),
                n.e("51892"),
                n.e("20965"),
                n.e("41838"),
                n.e("46045"),
                n.e("3707"),
                n.e("60003"),
                n.e("73122"),
                n.e("42324"),
                n.e("16054"),
                n.e("26516"),
                n.e("33869"),
                n.e("96480"),
                n.e("89638"),
                n.e("85802"),
                n.e("65200"),
                n.e("79593"),
                n.e("41706"),
                n.e("50068"),
                n.e("94888"),
                n.e("90804"),
                n.e("93917"),
                n.e("21883"),
                n.e("53275"),
                n.e("78047"),
                n.e("55895"),
                n.e("28011"),
                n.e("1485"),
                n.e("32429"),
                n.e("26250"),
                n.e("37065"),
                n.e("37698"),
                n.e("22511"),
                n.e("51212"),
                n.e("67827"),
                n.e("41348"),
                n.e("84601"),
                n.e("51743"),
                n.e("86470"),
                n.e("86861"),
                n.e("36847"),
                n.e("58932"),
                n.e("50695"),
                n.e("31189"),
                n.e("84042"),
                n.e("27880"),
                n.e("70961"),
                n.e("82830"),
                n.e("46855"),
                n.e("69201"),
                n.e("8032"),
                n.e("77970"),
                n.e("88563"),
                n.e("97934"),
                n.e("92313"),
                n.e("7521"),
                n.e("80782"),
                n.e("59991"),
                n.e("85681"),
                n.e("87791"),
                n.e("92461"),
            ]).then(n.bind(n, 878431)),
        webpackId: 878431,
        name: "Channel",
        renderLoader: tA.l3,
    }),
    db = (0, g.Fe)({
        createPromise: () => n.e("22270").then(n.bind(n, 816015)),
        webpackId: 816015,
        name: "ChannelStoreListing",
        renderLoader: ds,
    }),
    dv = (0, g.Fe)({
        createPromise: () => Promise.all([n.e("89145"), n.e("49212")]).then(n.bind(n, 575429)),
        webpackId: 575429,
        name: "DeepLinkLaunchActivityInDM",
        renderLoader: ds,
    }),
    dP = (0, g.Fe)({
        createPromise: () => Promise.all([n.e("37491"), n.e("46240"), n.e("97544")]).then(n.bind(n, 667429)),
        webpackId: 667429,
        name: "EmptyNotificationsPage",
        renderLoader: ds,
    }),
    dR = (0, g.Fe)({
        createPromise: () =>
            Promise.all([n.e("8357"), n.e("25099"), n.e("15537"), n.e("36999"), n.e("48312"), n.e("86105")]).then(
                n.bind(n, 995198),
            ),
        webpackId: 995198,
        name: "GuildMemberVerificationPreviewDisabled",
        renderLoader: ds,
    }),
    dD = (0, g.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("8357"),
                n.e("91428"),
                n.e("15275"),
                n.e("74821"),
                n.e("15537"),
                n.e("36999"),
                n.e("56485"),
            ]).then(n.bind(n, 140354)),
        webpackId: 140354,
        name: "GuildOnboardingBlockedPage",
        renderLoader: ds,
    }),
    dw = (0, g.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("75681"),
                n.e("72900"),
                n.e("63419"),
                n.e("6287"),
                n.e("32101"),
                n.e("69273"),
                n.e("31788"),
                n.e("77083"),
                n.e("63009"),
                n.e("84786"),
                n.e("41909"),
                n.e("63397"),
                n.e("45650"),
                n.e("97189"),
                n.e("27660"),
                n.e("85484"),
                n.e("81510"),
                n.e("36407"),
                n.e("79705"),
                n.e("55658"),
                n.e("87616"),
                n.e("76032"),
                n.e("33957"),
                n.e("8357"),
                n.e("49699"),
                n.e("43108"),
                n.e("35598"),
                n.e("84611"),
                n.e("45235"),
                n.e("63635"),
                n.e("66782"),
                n.e("62177"),
                n.e("23924"),
                n.e("15510"),
                n.e("48226"),
                n.e("20287"),
                n.e("28367"),
                n.e("35429"),
                n.e("10471"),
                n.e("63232"),
                n.e("64827"),
                n.e("30938"),
                n.e("23808"),
                n.e("11301"),
                n.e("60235"),
                n.e("61737"),
                n.e("79428"),
                n.e("29963"),
                n.e("47834"),
                n.e("98329"),
                n.e("20317"),
                n.e("84569"),
                n.e("2368"),
                n.e("27084"),
                n.e("24313"),
                n.e("48405"),
                n.e("63185"),
                n.e("19551"),
                n.e("84150"),
                n.e("45959"),
                n.e("18573"),
                n.e("55057"),
                n.e("37794"),
                n.e("26073"),
                n.e("7743"),
                n.e("34303"),
                n.e("48172"),
                n.e("28866"),
                n.e("54961"),
                n.e("8304"),
                n.e("58038"),
                n.e("93159"),
                n.e("55936"),
                n.e("11566"),
                n.e("21106"),
                n.e("31988"),
                n.e("94723"),
                n.e("62931"),
                n.e("81987"),
                n.e("58007"),
                n.e("5812"),
                n.e("17363"),
                n.e("58337"),
                n.e("26437"),
                n.e("76602"),
                n.e("28229"),
                n.e("71470"),
                n.e("76418"),
                n.e("21921"),
                n.e("9233"),
                n.e("69747"),
                n.e("40258"),
                n.e("66495"),
                n.e("91146"),
                n.e("42724"),
                n.e("43437"),
                n.e("39970"),
                n.e("82263"),
                n.e("30221"),
                n.e("8371"),
                n.e("8555"),
                n.e("86127"),
                n.e("6174"),
                n.e("39851"),
                n.e("58216"),
                n.e("72789"),
                n.e("6949"),
                n.e("29871"),
                n.e("17249"),
                n.e("41250"),
                n.e("35027"),
                n.e("84971"),
                n.e("53917"),
                n.e("9640"),
                n.e("62422"),
                n.e("15423"),
                n.e("26295"),
                n.e("88599"),
                n.e("36863"),
                n.e("1518"),
                n.e("67861"),
                n.e("15186"),
                n.e("98765"),
                n.e("23354"),
                n.e("89088"),
                n.e("82644"),
                n.e("37187"),
                n.e("71273"),
                n.e("27779"),
                n.e("75842"),
                n.e("12743"),
                n.e("10957"),
                n.e("55973"),
                n.e("20590"),
                n.e("45172"),
                n.e("65437"),
                n.e("34983"),
                n.e("63235"),
                n.e("74810"),
                n.e("28083"),
                n.e("80830"),
                n.e("86672"),
                n.e("3589"),
                n.e("86814"),
                n.e("52548"),
                n.e("35771"),
                n.e("22266"),
                n.e("53984"),
                n.e("59414"),
                n.e("80854"),
                n.e("79780"),
                n.e("35395"),
                n.e("43780"),
                n.e("14041"),
                n.e("46844"),
                n.e("45413"),
                n.e("22822"),
                n.e("75627"),
                n.e("90664"),
                n.e("79745"),
                n.e("34150"),
                n.e("64850"),
                n.e("72401"),
                n.e("22855"),
                n.e("70104"),
                n.e("68904"),
                n.e("68802"),
                n.e("52617"),
                n.e("8563"),
                n.e("2564"),
                n.e("47417"),
                n.e("19558"),
                n.e("58946"),
                n.e("14285"),
                n.e("95752"),
                n.e("78100"),
                n.e("78453"),
                n.e("8362"),
                n.e("80149"),
                n.e("2698"),
                n.e("62875"),
                n.e("4744"),
                n.e("87046"),
                n.e("12542"),
                n.e("501"),
                n.e("46769"),
                n.e("33297"),
                n.e("73384"),
                n.e("86243"),
                n.e("82783"),
                n.e("7833"),
                n.e("32209"),
                n.e("30788"),
                n.e("48295"),
                n.e("4193"),
                n.e("25246"),
                n.e("37021"),
                n.e("21049"),
                n.e("8377"),
                n.e("28610"),
                n.e("44571"),
                n.e("44795"),
                n.e("71268"),
                n.e("95370"),
                n.e("97784"),
                n.e("44928"),
                n.e("90301"),
                n.e("15109"),
                n.e("19454"),
                n.e("99549"),
                n.e("16988"),
                n.e("59797"),
                n.e("69765"),
                n.e("62304"),
                n.e("75859"),
                n.e("15920"),
                n.e("80093"),
                n.e("73122"),
                n.e("79593"),
                n.e("41706"),
                n.e("86629"),
                n.e("54658"),
                n.e("46855"),
                n.e("86336"),
                n.e("85681"),
                n.e("42243"),
                n.e("69171"),
                n.e("45127"),
            ]).then(n.bind(n, 726561)),
        webpackId: 726561,
        name: "GuildRoleSubscriptionsOverviewPageWithContext",
        renderLoader: ds,
    }),
    dM = (e) => {
        let { match: t } = e,
            n = (0, tE.o)(),
            i = (0, C.bG)([i6.A, ee.A], () => {
                let e = ee.A.getChannelId();
                return i6.A.getChannel(e);
            }),
            { guildId: r, channelId: a, messageId: l, threadId: s } = t.params,
            o = a ?? void 0;
        null == o && null != t.params.gameShopPageIndex && (o = dt.VV.GAME_SHOP);
        let d = (0, C.bG)([rx.A], () => rx.A.getGuild(r)),
            c = (0, C.bG)([lZ.Ay], () => (null == r ? null : lZ.Ay.getSelfMember(r))),
            u = (0, lV.C$)(r, "ChannelRenderer"),
            A = (0, lF.N)("ChannelRenderer"),
            h = d?.features.has(D.GuildFeatures.GAME_SERVERS) ?? !1,
            _ = (0, C.bG)([nR.A], () => {
                if (null == r) return;
                let e = nR.A.getData(r);
                if (e?.type === nD._.SERVER_SHOP)
                    switch (e.initialTab) {
                        case "role_subscriptions":
                            return tP.B.GUILD_ROLE_SUBSCRIPTIONS;
                        case "guild_products":
                            return tP.B.GUILD_PRODUCTS;
                        default:
                            return;
                    }
            }),
            m = (0, C.bG)([tD.A], () => (0, lH.C$)(o) && (0, lH.C$)(s), [o, s]);
        p.useEffect(() => {
            m || (null != d && (0, aL.pX)(D.BVt.CHANNEL(d.id, (0, lB.A)(d))), (0, nw.E)());
        }, [m, d]);
        let g = null != d,
            T = p.useRef(null);
        p.useEffect(() => {
            g ||
                null == r ||
                T.current === r ||
                ((T.current = r), L.A.joinGuild(r, { lurker: !0, autoNavigate: !1 }).catch(() => {}));
        }, [g, r]);
        let f = (0, nb.$)(r);
        if (null != r && null != o && (0, dt.jq)(o))
            switch (o) {
                case dt.VV.ROLE_SUBSCRIPTIONS:
                    return f
                        ? (0, E.jsx)(dc, { guildId: r, initialTab: tP.B.GUILD_ROLE_SUBSCRIPTIONS })
                        : (0, E.jsx)(dw, { guildId: r });
                case dt.VV.SERVER_MONETIZATION_ONBOARDING:
                    return (0, E.jsx)(dA, { guildId: r });
                case dt.VV.GAME_SHOP:
                    return (0, E.jsx)(du, { ...e });
                case dt.VV.GUILD_SHOP:
                    return (0, E.jsx)(dc, { guildId: r, productId: l, initialTab: _ });
                case dt.VV.MEMBER_APPLICATIONS:
                    return (0, E.jsx)(I.rd, { to: D.BVt.CHANNEL(r, dt.VV.MEMBER_SAFETY) });
                case dt.VV.GUILD_HOME:
                    return (0, E.jsx)(dh, { guildId: r });
                case dt.VV.CHANNEL_BROWSER:
                    return (0, E.jsx)(dE, { guildId: r, selectedSection: di.qC.BROWSE });
                case dt.VV.GUILD_ONBOARDING:
                    return (0, E.jsx)(dp, { guildId: r });
                case dt.VV.CUSTOMIZE_COMMUNITY:
                    return (0, E.jsx)(dE, { guildId: r, selectedSection: di.qC.CUSTOMIZE });
                case dt.VV.MEMBER_SAFETY:
                    return (0, E.jsx)(d_, { guildId: r });
                case dt.VV.GUILD_BOOSTS:
                    return (0, E.jsx)(dm, {
                        guildId: r,
                        powerupListingId: n.get("powerupId") ?? n.get("powerupSkuId"),
                    });
                case dt.VV.GAME_SERVERS:
                    if (!u || (!h && !A)) return (0, E.jsx)(I.rd, { to: D.BVt.CHANNEL(r) });
                    return (0, E.jsx)(dI, { guildId: r });
                case dt.VV.REPORT_TO_MOD:
                    return (0, E.jsx)(dy, {});
                default:
                    (0, re.xb)(o);
            }
        if ((0, ny.$Y)(d, c)) return (0, E.jsx)(dD, { guildId: r, channelId: o });
        if (i?.type === D.rbe.GUILD_STORE) {
            let e = lJ.default.cast(t.params.messageId);
            return (0, E.jsx)(db, { channel: i, inputSkuId: e }, i.id);
        }
        return (0, E.jsx)(dy, {});
    },
    dx = p.memo(function () {
        let { guildId: e, channelId: t } = (0, lY.A)(),
            { notificationCenterVariant: n } = (0, nk.X8)({ location: "Sidebar" }),
            i = (0, C.bG)([ee.A], () => t ?? ee.A.getChannelId(e));
        return window.location.pathname.startsWith(D.BVt.CHANNEL(D.gNP))
            ? ("sidebar" !== n && (0, aL.bG)(lX.A.defaultRoute), (0, E.jsx)(dd, { includePanelSpacing: !0 }))
            : window.location.pathname.startsWith(D.BVt.GLOBAL_DISCOVERY) ||
                window.location.pathname.startsWith(D.BVt.GUILD_DISCOVERY) ||
                (0, il.r$)()
              ? (0, E.jsx)(nL, {})
              : null != e
                ? (0, E.jsx)(dC, { selectedChannelId: i, guildId: e }, e)
                : (0, E.jsx)(dT, {});
    }),
    dU = (e) => (0, E.jsx)(dM, { ...e }),
    dG = () => (0, E.jsx)(df, {}),
    dj = (e) => (0, E.jsx)(dk, { ...e }),
    dk = (e) => {
        let { channelId: t, messageId: n } = e.match.params;
        return (p.useEffect(() => {
            null != t &&
                null != n &&
                td.A.jumpToMessage({
                    channelId: t,
                    messageId: n,
                    flash: !0,
                    context: "notification_center_navigation",
                });
        }, [t, n]),
        null == t)
            ? (0, E.jsx)(dP, {})
            : dU(e);
    },
    dV = (e) => {
        let { match: t } = e;
        return null != t.params.guildId ? (0, E.jsx)(dR, { guildId: t.params.guildId }) : null;
    },
    dF = (e) => {
        let { match: t } = e;
        return (0, aL.pX)(D.BVt.ME), (0, nP.A)(t.params.inviteCode), null;
    },
    dH = () => (0, E.jsx)(dg, {}),
    dB = () => (0, E.jsx)(th, {}),
    dY = () =>
        function (e) {
            let { tab: t } = (0, m.parse)(e.location.search);
            return Object.values(dn.G2).includes(t) ? (0, E.jsx)(ty, { tab: t, ...e }) : (0, E.jsx)(ty, { ...e });
        };
function d$() {
    return (0, E.jsx)(dS, { topLevelRoute: !0 });
}
let dz = (e) => (0, E.jsx)(dv, { ...e }),
    dq = () => (0, E.jsx)(lk, {}),
    dK = () => (0, E.jsx)(dL, {}),
    dW = () => (0, E.jsx)(dO, {}),
    dX = () => (0, E.jsx)(dN, {}),
    dZ = (e) => {
        let t = e.location.pathname;
        return (0, E.jsx)(M, {
            deepLinkType: dr.XK.FEATURES,
            path: t,
            children: ((e) => {
                let { match: t } = e;
                switch (t.params.feature) {
                    case "friends":
                        return (0, E.jsx)(lk, { initialSection: D.m3P.ONLINE });
                    case "addFriends":
                        return (0, E.jsx)(lk, { initialSection: D.m3P.ADD_FRIEND });
                    case "pendingFriends":
                        return (0, E.jsx)(lk, { initialSection: D.m3P.PENDING });
                    case "sessionManagement":
                        return (0, E.jsx)(I.rd, { to: (0, lW.settingsPathToRoute)(da.od.SESSIONS) });
                    case "connections":
                        return (0, E.jsx)(I.rd, {
                            to: { pathname: (0, lW.settingsPathToRoute)(da.od.CONNECTIONS), search: e.location.search },
                        });
                    case "family-center":
                        return (0, E.jsx)(I.rd, { to: D.BVt.FAMILY_CENTER });
                    case "account-standing":
                        return (0, E.jsx)(I.rd, { to: (0, lW.settingsPathToRoute)(da.od.ACCOUNT_ACCOUNT_STANDING) });
                    case "authorized-apps":
                        return (0, E.jsx)(I.rd, { to: (0, lW.settingsPathToRoute)(da.od.AUTHORIZED_APPS) });
                    case "open-shop":
                        let { tab: n } = (0, m.parse)(e.location.search);
                        if (Object.values(dn.G2).includes(n))
                            return (0, E.jsx)(I.rd, { to: D.BVt.COLLECTIBLES_SHOP_WITH_TAB(n) });
                        return (0, E.jsx)(I.rd, { to: D.BVt.COLLECTIBLES_SHOP });
                    case "editProfile":
                        return (0, E.jsx)(I.rd, {
                            to: { pathname: (0, lW.settingsPathToRoute)(da.od.PROFILE_CUSTOMIZATION) },
                        });
                    case "gift":
                    case "store":
                        return (0, E.jsx)(I.rd, { to: { pathname: D.BVt.NITRO_HOME } });
                    case "connected-games":
                        return (0, E.jsx)(I.rd, {
                            to: (0, lW.settingsPathToRoute)(da.od.CONTENT_AND_SOCIAL_CONNECTED_GAMES),
                        });
                    case "boost":
                        let i = t.params.guildId;
                        return (0, E.jsx)(I.rd, { to: D.BVt.POWERUP_STORE(i) });
                    case "boost-settings":
                        return (0, E.jsx)(I.rd, { to: (0, lW.settingsPathToRoute)(da.od.GUILD_BOOSTING) });
                    default:
                        return (0, E.jsx)(I.rd, { to: D.BVt.ME });
                }
            })(e),
        });
    };
function dQ(e) {
    document.body.style.setProperty("--custom-guild-sidebar-width", `${e}px`);
}
function dJ(e) {
    let { hasNotice: t, sidebarTheme: n, hideSidebar: i, hideChannelList: r, isSidebarOpen: a } = e,
        l = (0, C.bG)([tI.A], () => tI.A.isFullscreenInContext()),
        s = (0, tv.useAppSidebarState)((e) => !e.isOpen) && !1;
    p.useLayoutEffect(() => {}, [!1]),
        p.useLayoutEffect(() => {
            if (s) dQ(76);
            else {
                let e = parseInt(ta.w.get(tc.o) ?? "");
                Number.isNaN(e) && (e = 375), dQ(e);
            }
        }, [s]);
    let o = p.useRef(null),
        d = p.useCallback(
            (e, t) => {
                dQ(e);
                t <= 264 ? document.body.classList.add(o5._A) : document.body.classList.remove(o5._A),
                    t >= 432 ? document.body.classList.add(o5.uN) : document.body.classList.remove(o5.uN);
                let n = t - e;
                o.current?.style.setProperty("--custom-overdrag", `${1 + Math.min(Math.abs(n / 76), 0.25)}`);
            },
            [!1],
        ),
        c = p.useCallback(() => {
            document.body.classList.add(o5.cB);
        }, []),
        u = p.useCallback((e) => {
            document.body.classList.remove(o5.cB),
                document.body.classList.remove(o5._A),
                document.body.classList.remove(o5.uN),
                document.body.classList.remove(o5.l4),
                o.current?.style.setProperty("--custom-overdrag", "0px"),
                ta.w.set(tc.o, e),
                ec.default.track(D.HAw.CHANNEL_SIDEBAR_RESIZED, { width: e });
        }, []),
        A = (0, t_.A)({
            minDimension: 264,
            maxDimension: 432,
            resizableDomNodeRef: o,
            onElementResize: d,
            onElementResizeStart: c,
            onElementResizeEnd: u,
            orientation: t_.R.HORIZONTAL_RIGHT,
            throttleDuration: 0,
        }),
        h = p.useCallback(() => {
            tv.useAppSidebarState.setState((e) => ({ isOpen: !e.isOpen }));
        }, []);
    if (
        (p.useLayoutEffect(() => {
            s && dQ(76);
        }, [s]),
        i)
    )
        return null;
    let _ = { className: tn()(o5.th, { [o5.Qd]: !t }) };
    return (0, E.jsx)(ts.N, {
        theme: n,
        children: (e) =>
            (0, E.jsxs)("div", {
                ref: o,
                "data-collapsed": s,
                className: tn()(o5.pz, e, { [o5.Ij]: b.Fr, [o5.R]: l, [o5.WG]: r }),
                children: [
                    a && (0, E.jsx)(nv.A, { className: o5.Pl, themeOverride: n }),
                    !r &&
                        (0, E.jsxs)(E.Fragment, {
                            children: [
                                (0, E.jsx)("div", { ..._, children: (0, E.jsx)(dx, {}) }),
                                (0, E.jsx)(to.D, {
                                    onClick: h,
                                    "aria-label": "Resize Sidebar",
                                    className: o5.tq,
                                    onMouseDown: A,
                                }),
                                (0, E.jsx)(de, {}),
                            ],
                        }),
                ],
            }),
    });
}
function d0() {
    let e,
        t = (0, C.bG)([lQ.Ay], () => lQ.Ay.hasNotice()),
        n = (0, lK.NC)(),
        i = (function () {
            let [e, t] = p.useState(() => window.location.pathname.startsWith(D.BVt.GUILD_MEMBER_VERIFICATION("")));
            return (
                p.useEffect(
                    () =>
                        l$.A.addRouteChangeListener((e) => {
                            t(e.pathname.startsWith(D.BVt.GUILD_MEMBER_VERIFICATION("")));
                        }),
                    [],
                ),
                e
            );
        })(),
        r = ((e = (0, I.zy)()), (0, lq.B)(e.pathname, D.BVt.GUILD_BOOSTING_MARKETING(lz.pv.guildId()))?.isExact === !0),
        a = (0, C.bG)([nG], () => nG.getIsOpen()),
        { notificationCenterVariant: l } = (0, nk.X8)({ location: "Sidebar" }),
        s = (0, tR.f)("AppView"),
        o = (0, I.W5)([
            D.BVt.CHANNEL(D.ME, lz.pv.channelId()),
            D.BVt.CHANNEL(lz.pv.guildId(), lz.pv.channelId({ optional: !0 }), ":messageId?"),
        ]),
        d = o?.params?.channelId === dt.VV.GUILD_ONBOARDING,
        c = p.useCallback(() => nM.openSidebar(), []),
        u = ((0, tv.useAppSidebarState)((e) => !e.isOpen), (0, C.bG)([tI.A], () => tI.A.isFullscreenInContext())),
        A = (0, C.bG)([tw.A], () => tw.A.isFrameActive());
    return (
        p.useEffect(() => {
            (0, tr.O)(() => {
                dy.preload(), dC.preload();
            });
        }, []),
        (0, E.jsx)("div", {
            className: o5.kL,
            children: (0, E.jsx)(nO.A.Provider, {
                value: o?.params.guildId === D.ME ? void 0 : o?.params.guildId,
                children: (0, E.jsxs)("div", {
                    className: o5.E3,
                    "data-fullscreen": u,
                    children: [
                        !u && (0, E.jsx)(dl, {}),
                        b.Fr ? null : (0, E.jsx)(nj.A, {}),
                        (0, E.jsxs)("div", {
                            className: o5.Qs,
                            children: [
                                (0, E.jsx)(tL, {}),
                                (0, E.jsx)(dJ, {
                                    isSidebarOpen: a,
                                    hasNotice: t,
                                    sidebarTheme: n,
                                    hideChannelList: i || r || d,
                                    hideSidebar: !a,
                                }),
                                (0, E.jsx)("div", {
                                    className: o5.MY,
                                    "data-collapsed": !1,
                                    children: (0, E.jsxs)(tp.A.Provider, {
                                        value: c,
                                        children: [
                                            (0, E.jsxs)(I.dO, {
                                                children: [
                                                    (0, E.jsx)(tm.A, {
                                                        path: D.BVt.ACTIVITY,
                                                        disableTrack: !0,
                                                        children: (0, E.jsx)(I.rd, { to: D.BVt.ME }),
                                                    }),
                                                    (0, E.jsx)(tm.A, {
                                                        path: D.BVt.ACTIVITY_DETAILS(":applicationId"),
                                                        render: dz,
                                                        impressionName: ti.ImpressionNames.ACTIVITY_DETAILS,
                                                        impressionProperties: (e) => {
                                                            let { match: t } = e;
                                                            return { application_id: t?.params.applicationId };
                                                        },
                                                    }),
                                                    (0, E.jsx)(tm.A, {
                                                        path: D.BVt.APPLICATION_LIBRARY,
                                                        render: dH,
                                                        impressionName: ti.ImpressionNames.APPLICATION_LIBRARY,
                                                        disableTrack: !0,
                                                    }),
                                                    (0, E.jsx)(tm.A, {
                                                        path: D.BVt.APPLICATION_STORE,
                                                        render: dB,
                                                        impressionName: ti.ImpressionNames.APPLICATION_STORE,
                                                        disableTrack: !0,
                                                    }),
                                                    (0, E.jsx)(tm.A, {
                                                        path: D.BVt.COLLECTIBLES_SHOP_WITH_TAB(":tab"),
                                                        render: dY(),
                                                        disableTrack: !0,
                                                    }),
                                                    s &&
                                                        (0, E.jsx)(tm.A, {
                                                            path: D.BVt.COLLECTIBLES_SHOP_LAYOUT(":layoutId"),
                                                            render: function (e) {
                                                                let { match: t, ...n } = e,
                                                                    { layoutId: i } = t.params;
                                                                return null == i || "" === i
                                                                    ? (0, E.jsx)(ty, { ...n })
                                                                    : (0, E.jsx)(tb, { layoutId: i, ...n });
                                                            },
                                                            disableTrack: !0,
                                                        }),
                                                    s &&
                                                        (0, E.jsx)(tm.A, {
                                                            path: D.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(
                                                                ":collectionId",
                                                            ),
                                                            render: function (e) {
                                                                let { match: t, ...n } = e,
                                                                    { collectionId: i } = t.params;
                                                                return null == i || "" === i
                                                                    ? (0, E.jsx)(ty, { ...n })
                                                                    : (0, E.jsx)(tO, { collectionId: i, ...n });
                                                            },
                                                            disableTrack: !0,
                                                        }),
                                                    (0, E.jsx)(tm.A, {
                                                        path: D.BVt.COLLECTIBLES_SHOP,
                                                        render: dY(),
                                                        disableTrack: !0,
                                                    }),
                                                    (0, E.jsx)(tm.A, {
                                                        path: D.BVt.COLLECTIBLES_SHOP_PRODUCT_DETAIL(":skuId"),
                                                        render: dY(),
                                                        disableTrack: !0,
                                                    }),
                                                    (0, E.jsx)(tm.A, {
                                                        path: D.BVt.ICYMI,
                                                        render: dK,
                                                        disableTrack: !0,
                                                    }),
                                                    (0, E.jsx)(tm.A, {
                                                        path: D.BVt.MESSAGE_REQUESTS,
                                                        render: dW,
                                                        disableTrack: !0,
                                                    }),
                                                    (0, E.jsx)(tm.A, {
                                                        path: D.BVt.FAMILY_CENTER,
                                                        render: dX,
                                                        disableTrack: !0,
                                                    }),
                                                    (0, E.jsx)(tm.A, {
                                                        path: D.BVt.ME,
                                                        exact: !0,
                                                        render: dq,
                                                        impressionName: ti.ImpressionNames.FRIENDS,
                                                        disableTrack: !0,
                                                    }),
                                                    l === nk.U5.SIDEBAR &&
                                                        (0, E.jsx)(tm.A, {
                                                            path: D.BVt.CHANNEL(
                                                                D.gNP,
                                                                lz.pv.channelId({ optional: !0 }),
                                                                ":messageId?",
                                                            ),
                                                            render: dj,
                                                            disableTrack: !0,
                                                        }),
                                                    (0, E.jsx)(tm.A, {
                                                        path: [
                                                            D.BVt.CHANNEL_THREAD_VIEW(
                                                                lz.pv.guildId(),
                                                                lz.pv.channelId(),
                                                                ":threadId",
                                                                ":messageId?",
                                                            ),
                                                            D.BVt.CHANNELS_GAME_SHOP(
                                                                lz.pv.guildId(),
                                                                ":gameShopPageIndex",
                                                                ":gameShopSkuId?",
                                                                ":gameShopSlug?",
                                                            ),
                                                            D.BVt.CHANNEL(D.ME, lz.pv.channelId()),
                                                            D.BVt.CHANNEL(
                                                                lz.pv.guildId(),
                                                                lz.pv.channelId({ optional: !0 }),
                                                                ":messageId?",
                                                            ),
                                                        ],
                                                        render: dU,
                                                        impressionName: ti.ImpressionNames.GUILD_CHANNEL,
                                                        disableTrack: !0,
                                                    }),
                                                    (0, E.jsx)(tm.A, {
                                                        path: D.BVt.GLOBAL_DISCOVERY,
                                                        render: dG,
                                                        impressionName: ti.ImpressionNames.GLOBAL_DISCOVERY,
                                                        disableTrack: !0,
                                                        exact: !0,
                                                    }),
                                                    (0, E.jsx)(tm.A, {
                                                        path: D.BVt.GLOBAL_DISCOVERY_SERVERS,
                                                        render: dG,
                                                        impressionName: ti.ImpressionNames.GLOBAL_DISCOVERY,
                                                        disableTrack: !0,
                                                    }),
                                                    (0, E.jsx)(tm.A, {
                                                        path: D.BVt.GLOBAL_DISCOVERY_APPS,
                                                        render: dG,
                                                        impressionName: ti.ImpressionNames.GLOBAL_DISCOVERY_APPS,
                                                        disableTrack: !0,
                                                    }),
                                                    (0, E.jsx)(tm.A, {
                                                        path: D.BVt.QUEST_HOME_DEPRECATED,
                                                        render: dG,
                                                        impressionName: ti.ImpressionNames.QUEST_HOME,
                                                        disableTrack: !0,
                                                    }),
                                                    (0, E.jsx)(tm.A, {
                                                        path: D.BVt.QUEST_HOME,
                                                        render: d$,
                                                        impressionName: ti.ImpressionNames.QUEST_HOME,
                                                        disableTrack: !0,
                                                    }),
                                                    (0, E.jsx)(tm.A, {
                                                        path: D.BVt.GUILD_DISCOVERY,
                                                        render: dG,
                                                        impressionName: ti.ImpressionNames.GUILD_DISCOVERY,
                                                        disableTrack: !0,
                                                    }),
                                                    (0, E.jsx)(tm.A, {
                                                        path: D.BVt.GUILD_MEMBER_VERIFICATION(lz.pv.guildId()),
                                                        render: dV,
                                                        impressionName: ti.ImpressionNames.GUILD_MEMBER_VERIFICATION,
                                                        disableTrack: !0,
                                                    }),
                                                    (0, E.jsx)(tm.A, {
                                                        path: D.BVt.GUILD_MEMBER_VERIFICATION_FOR_HUB(
                                                            lz.pv.guildId(),
                                                            ":inviteCode?",
                                                        ),
                                                        render: dF,
                                                    }),
                                                    (0, E.jsx)(tm.A, {
                                                        path: D.BVt.GUILD_FEATURE(":feature", lz.pv.guildId()),
                                                        exact: !0,
                                                        render: dZ,
                                                        disableTrack: !0,
                                                    }),
                                                    (0, E.jsx)(tm.A, {
                                                        path: D.BVt.FEATURE(":feature"),
                                                        exact: !0,
                                                        render: dZ,
                                                        disableTrack: !0,
                                                    }),
                                                ],
                                            }),
                                            A && (0, E.jsx)(nl, {}),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
            }),
        })
    );
}
var d1 = n(575486);
n(938796);
var d8 = n(665260),
    d3 = n(56562),
    d2 = n(77729),
    d7 = n(237774),
    d4 = n(885437),
    d6 = n(973854),
    d5 = n(862927),
    d9 = n(815706),
    ce = n(134047),
    ct = n(626584),
    cn = n(181079),
    ci = n(668267),
    cr = n(379587),
    ca = n(5180),
    cl = n(953384),
    cs = n(973522),
    co = n(454219),
    cd = n(136722),
    cc = n(808728),
    cu = n(698441),
    cA = n(960755),
    ch = n(222823),
    c_ = n(380335),
    cE = n(211753),
    cp = n(41984),
    cm = n(833551),
    cI = n(515183),
    cg = n(871633),
    cC = n(446600),
    cT = n(760751),
    cf = n(232835),
    cN = n(543465),
    cS = n(619921),
    cL = n(256415),
    cO = n(474090),
    cy = n(705751);
async function cb(e) {
    let {
            runningGame: t,
            game: n,
            detectionMethod: i,
            overlayStatus: r,
            overlayMethod: a,
            sharedGuildIds: l,
            voiceChannelId: s,
            voiceChannelType: o,
            voiceChannelBitrate: d,
            voiceChannelGuildId: c,
        } = e,
        [u, A] = await Promise.all([
            (0, cI.E1)(t.pid),
            ef.Ay.canCollectExecutableFingerprintsForRunningGames()
                ? eJ.Ay.getExecutableFingerprintForProcess(t.pid)
                : Promise.resolve(null),
        ]),
        { gameName: h, gameId: _, exe: E, distributor: p, rawExePath: m } = (0, cs.wH)(t),
        I = r.enabledLegacy || r.enabledOOP,
        g = cE.x.legacyEnabled || cE.x.oopEnabled,
        C = r.source;
    ec.default.track(D.HAw.LAUNCH_GAME, {
        game: h,
        game_id: _,
        verified: null != n && (0, cs.PQ)(m, n?.executables),
        elevated: t.elevated,
        is_launcher: t?.isLauncher ?? !1,
        game_platform: D.yTV.DESKTOP,
        detection_method: i,
        distributor: p,
        is_overlay_enabled: g,
        is_overlay_game_enabled: I,
        is_overlay_game_source: C,
        fullscreen_type: null != u ? d3.aI[u] : d3.aI.UNKNOWN.toString(),
        hardware_display_count: (await d2.A?.hardware?.getDisplayCount?.()) ?? null,
        overlay_method: cp.Ue[a] ?? (__OVERLAY__ ? cp.Ue[cp.Ue.Hook] : null),
        activity_status_enabled: oc.tz.getSetting(),
        activity_status_shared_guilds: l,
        current_user_status: rk.A.getStatus(),
        game_detection_enabled: (0, ef.Xr)(t),
        executable_path: E,
        voice_channel_id: s,
        voice_channel_type: o,
        voice_channel_bitrate: d,
        voice_channel_guild_id: c,
        distributor_game_id: t.sku,
        hidden_by_distributor: t.hidden,
        game_metadata: (0, cg.MT)(t),
        executable_fingerprint: A ?? t.executableFingerprint,
    }),
        null != E && ef.Ay.addExecutableTrackedByAnalytics(E);
}
async function cv(e) {
    let {
            runningNonGame: t,
            nonGameApplication: n,
            voiceChannelId: i,
            voiceChannelType: r,
            voiceChannelBitrate: a,
            voiceChannelGuildId: l,
        } = e,
        s = ef.Ay.canCollectExecutableFingerprintsForRunningGames()
            ? await eJ.Ay.getExecutableFingerprintForProcess(t.pid)
            : null;
    ec.default.track(D.HAw.LAUNCH_NON_GAME_APPLICATION, {
        name: n.name,
        application_id: n.id,
        application_type: cy.S7.NON_GAME_DETECTABLE,
        elevated: t.elevated,
        game_platform: D.yTV.DESKTOP,
        distributor: t.distributor,
        detection_method: "verified_non_game_application",
        current_user_status: rk.A.getStatus(),
        executable_path: (0, cs.Ic)(t.exePath),
        voice_channel_id: i,
        voice_channel_type: r,
        voice_channel_bitrate: a,
        voice_channel_guild_id: l,
        executable_fingerprint: s ?? t.executableFingerprint,
    });
}
class cP extends p.PureComponent {
    isMessageRequestsInitialized = !1;
    debouncedRobloxAnalytics = eU().debounce(cb, 5e3);
    componentDidUpdate(e) {
        let {
            voiceChannelId: t,
            voiceChannelGuildId: n,
            voiceChannelType: i,
            voiceChannelBitrate: r,
            videoEnabled: a,
            isScreenSharing: l,
            runningGame: s,
            runningGamePid: o,
            runningNonGame: d,
            selectedChannelId: c,
            selectedGuildId: u,
            connected: A,
        } = this.props;
        if (e.voiceChannelId !== t && null != e.voiceChannelId) {
            let t = ef.Ay.getCurrentGameForAnalytics(),
                n = null != t ? t.name : "",
                i = cC.A.getStageInstanceByChannel(e.voiceChannelId),
                r = cu.Ay.getActiveEventByChannel(e.voiceChannelId),
                a = e7.A.getLastRTCConnectionState();
            a?.channelId !== e.voiceChannelId && (a = null),
                ec.default.track(D.HAw.LEAVE_VOICE_CHANNEL, {
                    channel_id: e.voiceChannelId,
                    channel_type: e.voiceChannelType,
                    channel_bitrate: e.voiceChannelBitrate,
                    guild_id: e.voiceChannelGuildId,
                    rtc_connection_id: a?.rtcConnectionId,
                    game_name: n,
                    duration: a?.duration,
                    game_platform: this.props.gamePlatform,
                    game_id: this.props.gameId,
                    media_session_id: a?.mediaSessionId,
                    stage_instance_id: i?.id,
                    guild_scheduled_event_id: r?.id,
                    ...(0, tY.JK)(e.voiceChannelGuildId, e.voiceChannelId, e.videoEnabled),
                    ...a?.voiceStateAnalytics?.getStats(),
                    ...tI.A.getSelectedParticipantStats(e.voiceChannelId),
                });
        }
        if (e.voiceChannelId !== t && null != t) {
            let e = ef.Ay.getCurrentGameForAnalytics(),
                l = null != e ? e.name : "",
                s = cC.A.getStageInstanceByChannel(t),
                o = cu.Ay.getActiveEventByChannel(t);
            (0, tY.zV)(D.HAw.CHANNEL_OPENED, { ...(0, tY.qL)(t) }), (0, d6.A)({ channelId: t });
            let d = null,
                c = cL.default.getFocusedPID();
            null != c &&
                cm.default.getOverlayMethod(c) !== cp.Ue.Disabled &&
                (cL.default.isInstanceLocked()
                    ? (d = D.Xmn.OVERLAY_LOCKED_ACTIVATED)
                    : cL.default.isInstanceLocked() ||
                      (d = cL.default.isPinned(D.uss.TEXT) ? D.Xmn.OVERLAY_UNLOCKED_PINNED : D.Xmn.OVERLAY_UNLOCKED)),
                ec.default.track(D.HAw.JOIN_VOICE_CHANNEL, {
                    location: d,
                    channel_id: t,
                    channel_type: i,
                    channel_bitrate: r,
                    guild_id: n,
                    game_name: l,
                    game_platform: this.props.gamePlatform,
                    game_id: this.props.gameId,
                    stage_instance_id: s?.id,
                    guild_scheduled_event_id: o?.id,
                    was_moved: e7.A.getWasMoved(),
                    join_voice_id: e7.A.getJoinVoiceId(),
                    ...(0, tY.dL)(n, t),
                    ...(0, tY.JK)(n, t, a),
                });
        }
        let h =
                s?.distributor === e.runningGame?.distributor &&
                s?.sku === e.runningGame?.sku &&
                s?.name === e.runningGame?.name,
            _ = null != e.runningGame && null != s && e.runningGame.isLauncher !== s.isLauncher;
        if (e.runningGame !== s && null != s && !s.isLauncher && (!h || _)) {
            let { gameId: e } = (0, cs.wH)(s),
                a = void 0 !== e ? cT.A.getDetectableGame(e) : null,
                l = ef.Ay.getOverrideForGame(s),
                d = rx.A.getGuildIds(),
                c = oc.JG.getSetting(),
                u = d.filter((e) => !c.includes(e)).slice(0, 200),
                A = null;
            A = null != l ? "custom_override" : null != a ? "verified_game" : "launcher";
            let h = cm.default.getTrackedGameByPid(s.pid),
                _ = (0, ef.hw)(s),
                E = {
                    enabledOOP: h?.oopEnabled ?? _.enabledOOP,
                    enabledLegacy: h?.legacyEnabled ?? _.enabledLegacy,
                    overlayMethod: h?.overlayMethod ?? _.overlayMethod,
                    source: h?.source ?? _.source,
                    reason: "ChatAutoAnalytics",
                },
                p = cm.default.getOverlayMethod(s.pid) ?? E.overlayMethod;
            if (
                (setTimeout(() => {
                    (s.distributor === D.d3x.ROBLOX ? this.debouncedRobloxAnalytics : cb)({
                        runningGame: s,
                        game: a,
                        detectionMethod: A,
                        overlayStatus: E,
                        overlayMethod: p,
                        sharedGuildIds: u,
                        voiceChannelId: t,
                        voiceChannelType: i,
                        voiceChannelBitrate: r,
                        voiceChannelGuildId: n,
                    });
                }, 1e4),
                null != s.name && null != o && cT.A.shouldReport(s))
            ) {
                let e = s.name;
                ry.Ay.identifyGame(o, e)
                    .then((e) => ry.Ay.reportUnverifiedGame(e))
                    .catch((e) => new ct.A("AutoAnalytics").error("Cannot identify game", e));
            }
        }
        if (e.runningNonGame !== d && d?.id != null && e.runningNonGame?.id !== d.id) {
            let e = cl.A.getById(d.id);
            null != e &&
                cv({
                    runningNonGame: d,
                    nonGameApplication: e,
                    voiceChannelId: t,
                    voiceChannelType: i,
                    voiceChannelBitrate: r,
                    voiceChannelGuildId: n,
                });
        }
        if ((e.videoEnabled !== a || e.isScreenSharing !== l) && null != t) {
            let e = "none",
                n = [l ? "screen" : null, a ? "camera" : null].filter(re.Vq),
                i = null;
            l ? ((e = "screen"), (i = (0, d9.p)())) : a && (e = "camera"),
                ec.default.track(D.HAw.VIDEO_INPUT_TOGGLED, {
                    video_input_type: e,
                    video_toggle_source: __OVERLAY__ ? "overlay" : "app",
                    enabled_inputs: n,
                    preview_enabled: oc.bm.getSetting(),
                    ...i,
                    ...this.getGameMetadata(),
                    ...(0, tY.QS)(t),
                });
        }
        if (A && null != c && (!e.connected || c !== e.selectedChannelId || u !== e.selectedGuildId)) {
            let t = e.selectedChannelId,
                n = i6.A.getChannel(t),
                i = rx.A.getGuild(n?.getGuildId());
            if (null != t && null != n && null != i && i.publicUpdatesChannelId === t) {
                let e = cf.A.getMessages(t),
                    r = e
                        .toArray()
                        .reverse()
                        .find(
                            (e) =>
                                (0, d8.Lt)(e.flags, D.pr7.IS_CROSSPOST) &&
                                e.messageReference?.guild_id === "667560445975986187",
                        );
                ec.default.track(D.HAw.ACK_COMMUNITY_MESSAGES, {
                    last_message_id: r?.id,
                    last_message_reference_message_id: r?.messageReference?.message_id,
                    messages_loaded: e.hasFetched,
                    ...(0, tY.dI)(n),
                    ...(0, tY.H$)(i.id),
                });
            }
            e.isTextInVoice &&
                !this.props.isTextInVoice &&
                ce.M.getConfig({ location: "ChatAutoAnalytics" }).collectAnalytics &&
                ec.default.track(D.HAw.TEXT_IN_VOICE_CLOSED, {
                    reason: "switched away",
                    channel_id: t,
                    guild_id: n?.getGuildId(),
                });
        }
    }
    getGameMetadata() {
        return {
            game_platform: this.props.gamePlatform,
            game_name: this.props.gameName,
            game_exe_name: this.props.gameExeName,
            game_id: this.props.gameId,
        };
    }
    render() {
        return null;
    }
}
function cR() {
    let e,
        [t, n] = (0, C.yK)([ee.A], () => [ee.A.getVoiceChannelId(), ee.A.getChannelId()], []),
        i = (0, C.bG)([i6.A], () => i6.A.getChannel(n), [n]),
        r = (0, C.bG)([tI.A], () => i?.id != null && tI.A.getChatOpen(i.id), [i]),
        a = i?.nsfw,
        l = (0, C.bG)([i6.A], () => i6.A.getChannel(t), [t]),
        s = (0, C.bG)([et.A], () => et.A.getGuildId(), []),
        o = (0, C.bG)([rx.A], () => rx.A.getGuild(s), [s]),
        d = (0, C.bG)([iu.default], () => iu.default.getCurrentUser(), []),
        c = (0, C.bG)([lZ.Ay], () => null != d && null != s && (lZ.Ay.getMember(s, d.id)?.isPending ?? !1), [d, s]),
        u = (0, C.bG)([ad.Ay], () => ad.Ay.getState().section, []),
        A = (0, C.bG)([cS.A], () => cS.A.getHomeLink(), []),
        h = (0, C.bG)([co.A], () => co.A.isConnected(), []),
        [_, m] = (0, C.yK)([eS.Ay], () => [eS.Ay.isVideoEnabled(), eS.Ay.isScreenSharing()], []),
        I = (0, C.bG)([rk.A], () => rk.A.getPrimaryActivity(), []),
        { currentGame: g, currentNonGame: T } = (0, C.cf)(
            [ef.Ay],
            () => ({
                currentGame: ef.Ay.getCurrentGameForAnalytics(),
                currentNonGame: ef.Ay.getCurrentNonGameForAnalytics(),
            }),
            [],
        ),
        f =
            0 === (e = (0, C.bG)([cc.Ay], () => cc.Ay.getChannels(s)[cc.I6] ?? [], [s])).length
                ? 0
                : e.filter((e) => {
                      let { channel: t } = e;
                      return rj.A.can(cd.kg(D.xBc.SEND_MESSAGES, D.xBc.VIEW_CHANNEL), t);
                  }).length,
        N = (0, C.bG)([c_.A], () => c_.A.getMessageRequestsCount(), []),
        S = {
            selectedChannelId: n,
            isNSFWChannel: a,
            selectedGuildId: s,
            friendsTabSection: u,
            homeLink: A,
            connected: h,
            videoEnabled: _,
            isScreenSharing: m,
            voiceChannelId: l?.id,
            voiceChannelGuildId: l?.getGuildId(),
            voiceChannelType: l?.type,
            voiceChannelBitrate: l?.bitrate,
            runningGame: g,
            runningGamePid: null != g ? g.pid : null,
            runningNonGame: T,
            gamePlatform: (0, rJ.A)(I),
            gameName: null != I ? I.name : null,
            gameId: null != I ? I.application_id : null,
            gameExeName: null != g ? g.exeName : null,
            hasPreviewEnabled: o?.features.has(D.GuildFeatures.PREVIEW_ENABLED),
            isMemberPending: c,
            postableChannelCount: f,
            isTextInVoice: r,
            numMessageRequests: N,
        };
    return (
        !(function (e) {
            let t = p.useRef(e);
            p.useEffect(() => {
                t.current = e;
            }, [e]);
            let {
                connected: n,
                friendsTabSection: i,
                homeLink: r,
                isMemberPending: a,
                selectedChannelId: l,
                selectedGuildId: s,
            } = e;
            p.useEffect(() => {
                n &&
                    null != l &&
                    ((0, tY.zV)(D.HAw.CHANNEL_OPENED, { ...(0, d4.p)(l), ...(0, tY.qL)(l), selected_guild_id: s }),
                    (0, d6.A)({ channelId: l }),
                    t.current.isTextInVoice &&
                        (0, tY.zV)(D.HAw.TEXT_IN_VOICE_OPENED, { channel_is_nsfw: t.current.isNSFWChannel }));
            }, [n, l, s]),
                p.useEffect(() => {
                    n &&
                        null == s &&
                        r === D.BVt.FRIENDS &&
                        (function (e) {
                            let { tab_opened: t, source: n } = e,
                                i = (0, d5.A)();
                            ec.default.track(D.HAw.FRIENDS_LIST_VIEWED, { tab_opened: t, source: n, ...i }),
                                (0, d7.k)(D.HAw.FRIENDS_LIST_VIEWED_CLICKSTREAM, {
                                    tab_opened: t ?? "tabless",
                                    num_friends: i.num_friends ?? 0,
                                    now_playing_visible: i.now_playing_visible ?? !1,
                                    now_playing_num_cards: i.now_playing_num_cards ?? 0,
                                });
                        })({ tab_opened: i });
                }, [n, i, r, s]),
                p.useEffect(() => {
                    if (n && null != s) {
                        let e = a ? { is_pending: a, preview_enabled: t.current.hasPreviewEnabled } : {},
                            n = rx.A.getGuild(et.A.getGuildId()),
                            i = (function (e) {
                                let { guildChannels: t } = cA.A.getGuildWithoutChangingGuildActionRows(e),
                                    n = new Set(),
                                    i = [];
                                return (
                                    t.forEachShownChannel(
                                        (e) => {
                                            !n.has(e.id) &&
                                                ch.Ay.hasUnread(e.id) &&
                                                !D.kvI.GUILD_VOCAL.has(e.type) &&
                                                i.push(e.id),
                                                n.add(e.id);
                                        },
                                        { ignoreRecents: !0 },
                                    ),
                                    i
                                );
                            })(s),
                            r = {
                                ...e,
                                postable_channels: t.current.postableChannelCount,
                                premium_progress_bar_enabled: n?.premiumProgressBarEnabled ?? !1,
                                viewing_all_channels: !cN.Ay.isOptInEnabled(s),
                                num_recent_channels: cA.A.recentsChannelCount(s),
                                num_unread_channels: i.length,
                                unread_channel_ids: i,
                            };
                        if (
                            ((0, tY.zV)(D.HAw.GUILD_VIEWED, r),
                            (0, d7.k)(D.HAw.GUILD_VIEWED_CLICKSTREAM, { guild_id: s }),
                            (0, ca.ai)(s))
                        ) {
                            let e = cr.o.getConfig({ location: "ChatAutoAnalytics" }).enabled,
                                t = cO.Ay.isPremiumExactly(iu.default.getCurrentUser(), a2.PremiumTypes.TIER_2),
                                n = (0, ci.Kg)();
                            (0, ci.U5)(n, cn.A.getFavoritesCount(), e, t);
                        }
                    }
                }, [n, s, a]);
            let o = p.useRef(!1);
            p.useEffect(() => {
                n &&
                    null == s &&
                    r === D.BVt.MESSAGE_REQUESTS &&
                    !o.current &&
                    ((o.current = !0),
                    ec.default.track(D.HAw.MESSAGE_REQUESTS_INITIALIZED, {
                        num_message_requests: t.current.numMessageRequests,
                    }));
            }, [n, s, r]);
        })(S),
        (0, E.jsx)(cP, { ...S })
    );
}
var cD = n(844222),
    cw = n(398590),
    cM = n(390435),
    cx = n(361158),
    cU = n(783775);
let cG = (0, tu.Fe)({
        createPromise: () => Promise.resolve().then(n.bind(n, 944771)),
        webpackId: 944771,
        name: "ComponentPlayground",
    }),
    cj = (0, tu.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("13403"),
                n.e("81510"),
                n.e("45235"),
                n.e("51755"),
                n.e("6287"),
                n.e("61663"),
                n.e("63397"),
                n.e("86479"),
                n.e("94925"),
                n.e("92652"),
                n.e("41909"),
                n.e("36685"),
                n.e("32101"),
                n.e("84611"),
                n.e("13217"),
                n.e("23924"),
                n.e("62052"),
                n.e("82030"),
                n.e("45959"),
                n.e("26437"),
                n.e("88342"),
                n.e("40258"),
                n.e("20683"),
                n.e("58216"),
                n.e("6949"),
                n.e("84971"),
                n.e("9640"),
                n.e("88599"),
                n.e("63235"),
                n.e("83952"),
                n.e("59957"),
                n.e("68763"),
                n.e("60773"),
                n.e("19454"),
                n.e("26001"),
                n.e("8018"),
                n.e("30997"),
                n.e("28136"),
                n.e("90213"),
                n.e("12255"),
                n.e("16084"),
                n.e("44057"),
                n.e("87317"),
                n.e("10943"),
                n.e("66580"),
                n.e("73669"),
                n.e("66016"),
                n.e("22547"),
                n.e("3710"),
                n.e("7775"),
                n.e("3304"),
                n.e("77602"),
                n.e("10262"),
                n.e("46313"),
                n.e("36002"),
                n.e("43233"),
                n.e("56967"),
                n.e("66913"),
                n.e("99108"),
                n.e("75933"),
                n.e("24484"),
                n.e("84951"),
                n.e("91553"),
                n.e("86861"),
                n.e("94209"),
                n.e("62433"),
                n.e("78888"),
            ]).then(n.bind(n, 608087)),
        webpackId: 608087,
        name: "ChannelSettings",
    }),
    ck = (0, tu.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("15498"),
                n.e("59530"),
                n.e("45235"),
                n.e("41909"),
                n.e("97189"),
                n.e("31788"),
                n.e("32101"),
                n.e("69273"),
                n.e("77083"),
                n.e("63009"),
                n.e("84786"),
                n.e("63397"),
                n.e("45650"),
                n.e("27660"),
                n.e("6287"),
                n.e("85484"),
                n.e("81510"),
                n.e("36407"),
                n.e("79705"),
                n.e("33957"),
                n.e("98394"),
                n.e("94925"),
                n.e("84611"),
                n.e("24116"),
                n.e("8357"),
                n.e("65854"),
                n.e("23835"),
                n.e("72900"),
                n.e("43108"),
                n.e("62859"),
                n.e("92652"),
                n.e("10577"),
                n.e("23924"),
                n.e("15510"),
                n.e("48226"),
                n.e("8596"),
                n.e("20287"),
                n.e("28367"),
                n.e("35429"),
                n.e("10471"),
                n.e("63232"),
                n.e("64827"),
                n.e("30938"),
                n.e("23808"),
                n.e("11301"),
                n.e("60235"),
                n.e("61737"),
                n.e("79428"),
                n.e("29963"),
                n.e("47834"),
                n.e("98329"),
                n.e("20317"),
                n.e("84569"),
                n.e("2368"),
                n.e("27084"),
                n.e("24313"),
                n.e("48405"),
                n.e("63185"),
                n.e("19551"),
                n.e("84150"),
                n.e("45959"),
                n.e("18573"),
                n.e("55057"),
                n.e("37794"),
                n.e("26073"),
                n.e("7743"),
                n.e("34303"),
                n.e("48172"),
                n.e("28866"),
                n.e("54961"),
                n.e("8304"),
                n.e("58038"),
                n.e("93159"),
                n.e("55936"),
                n.e("11566"),
                n.e("21106"),
                n.e("31988"),
                n.e("94723"),
                n.e("62931"),
                n.e("81987"),
                n.e("58007"),
                n.e("5812"),
                n.e("17363"),
                n.e("26437"),
                n.e("9233"),
                n.e("69747"),
                n.e("42724"),
                n.e("86127"),
                n.e("34983"),
                n.e("86814"),
                n.e("22822"),
                n.e("78453"),
                n.e("12542"),
                n.e("30788"),
                n.e("4193"),
                n.e("25246"),
                n.e("8377"),
                n.e("28610"),
                n.e("44571"),
                n.e("44795"),
                n.e("44928"),
                n.e("81202"),
                n.e("99549"),
                n.e("36877"),
                n.e("20131"),
                n.e("79724"),
                n.e("61058"),
                n.e("21957"),
                n.e("93766"),
                n.e("52511"),
                n.e("54103"),
                n.e("54622"),
                n.e("51678"),
                n.e("69059"),
                n.e("52803"),
                n.e("43710"),
                n.e("75284"),
                n.e("64926"),
                n.e("67827"),
                n.e("14708"),
                n.e("18861"),
                n.e("13079"),
                n.e("99976"),
                n.e("28215"),
                n.e("64316"),
                n.e("86823"),
                n.e("2750"),
                n.e("49287"),
                n.e("83318"),
                n.e("59275"),
            ]).then(n.bind(n, 461248)),
        webpackId: 461248,
        name: "CollectiblesShop",
    }),
    cV = (0, tu.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("13403"),
                n.e("81510"),
                n.e("29092"),
                n.e("45235"),
                n.e("63397"),
                n.e("41909"),
                n.e("6287"),
                n.e("84611"),
                n.e("32101"),
                n.e("83097"),
                n.e("72900"),
                n.e("63419"),
                n.e("69273"),
                n.e("31788"),
                n.e("77083"),
                n.e("63009"),
                n.e("84786"),
                n.e("45650"),
                n.e("97189"),
                n.e("27660"),
                n.e("85484"),
                n.e("36407"),
                n.e("79705"),
                n.e("55658"),
                n.e("87616"),
                n.e("76032"),
                n.e("33957"),
                n.e("8357"),
                n.e("49699"),
                n.e("43108"),
                n.e("35598"),
                n.e("63635"),
                n.e("66782"),
                n.e("82872"),
                n.e("86479"),
                n.e("94925"),
                n.e("93329"),
                n.e("87845"),
                n.e("45317"),
                n.e("85639"),
                n.e("51643"),
                n.e("61175"),
                n.e("92652"),
                n.e("45229"),
                n.e("84388"),
                n.e("36685"),
                n.e("4974"),
                n.e("80186"),
                n.e("23924"),
                n.e("15510"),
                n.e("48226"),
                n.e("19402"),
                n.e("49681"),
                n.e("96382"),
                n.e("22687"),
                n.e("62052"),
                n.e("63202"),
                n.e("82596"),
                n.e("20287"),
                n.e("28367"),
                n.e("35429"),
                n.e("10471"),
                n.e("63232"),
                n.e("64827"),
                n.e("30938"),
                n.e("23808"),
                n.e("11301"),
                n.e("60235"),
                n.e("61737"),
                n.e("79428"),
                n.e("29963"),
                n.e("47834"),
                n.e("98329"),
                n.e("20317"),
                n.e("84569"),
                n.e("2368"),
                n.e("27084"),
                n.e("24313"),
                n.e("48405"),
                n.e("63185"),
                n.e("19551"),
                n.e("84150"),
                n.e("45959"),
                n.e("18573"),
                n.e("55057"),
                n.e("37794"),
                n.e("26073"),
                n.e("7743"),
                n.e("34303"),
                n.e("48172"),
                n.e("28866"),
                n.e("54961"),
                n.e("8304"),
                n.e("58038"),
                n.e("93159"),
                n.e("55936"),
                n.e("11566"),
                n.e("21106"),
                n.e("31988"),
                n.e("94723"),
                n.e("62931"),
                n.e("81987"),
                n.e("58007"),
                n.e("5812"),
                n.e("17363"),
                n.e("58337"),
                n.e("26437"),
                n.e("13708"),
                n.e("76602"),
                n.e("28229"),
                n.e("71470"),
                n.e("91007"),
                n.e("76418"),
                n.e("21921"),
                n.e("9233"),
                n.e("88342"),
                n.e("69747"),
                n.e("40258"),
                n.e("20683"),
                n.e("66495"),
                n.e("91146"),
                n.e("42724"),
                n.e("43437"),
                n.e("39970"),
                n.e("82263"),
                n.e("42451"),
                n.e("30221"),
                n.e("8371"),
                n.e("8555"),
                n.e("86127"),
                n.e("6174"),
                n.e("39851"),
                n.e("58216"),
                n.e("72789"),
                n.e("6949"),
                n.e("29871"),
                n.e("17249"),
                n.e("41250"),
                n.e("35027"),
                n.e("84971"),
                n.e("53917"),
                n.e("9640"),
                n.e("62422"),
                n.e("15423"),
                n.e("26295"),
                n.e("88599"),
                n.e("36863"),
                n.e("1518"),
                n.e("67861"),
                n.e("15186"),
                n.e("98765"),
                n.e("23354"),
                n.e("89088"),
                n.e("82644"),
                n.e("37187"),
                n.e("71273"),
                n.e("27779"),
                n.e("75842"),
                n.e("12743"),
                n.e("10957"),
                n.e("55973"),
                n.e("20590"),
                n.e("45172"),
                n.e("65437"),
                n.e("34983"),
                n.e("63235"),
                n.e("74810"),
                n.e("28083"),
                n.e("80830"),
                n.e("86672"),
                n.e("3589"),
                n.e("86814"),
                n.e("52548"),
                n.e("35771"),
                n.e("22266"),
                n.e("53984"),
                n.e("59414"),
                n.e("80854"),
                n.e("79780"),
                n.e("35395"),
                n.e("43780"),
                n.e("14041"),
                n.e("46844"),
                n.e("45413"),
                n.e("22822"),
                n.e("75627"),
                n.e("90664"),
                n.e("79745"),
                n.e("34150"),
                n.e("64850"),
                n.e("72401"),
                n.e("22855"),
                n.e("70104"),
                n.e("68904"),
                n.e("68802"),
                n.e("52617"),
                n.e("8563"),
                n.e("2564"),
                n.e("47417"),
                n.e("19558"),
                n.e("58946"),
                n.e("14285"),
                n.e("95752"),
                n.e("78100"),
                n.e("78453"),
                n.e("8362"),
                n.e("80149"),
                n.e("2698"),
                n.e("62875"),
                n.e("4744"),
                n.e("87046"),
                n.e("12542"),
                n.e("501"),
                n.e("46769"),
                n.e("33297"),
                n.e("73384"),
                n.e("86243"),
                n.e("82783"),
                n.e("7833"),
                n.e("32209"),
                n.e("30788"),
                n.e("48295"),
                n.e("60249"),
                n.e("4193"),
                n.e("39171"),
                n.e("25246"),
                n.e("37021"),
                n.e("21049"),
                n.e("8377"),
                n.e("28610"),
                n.e("44571"),
                n.e("44795"),
                n.e("80436"),
                n.e("71268"),
                n.e("95370"),
                n.e("97784"),
                n.e("10014"),
                n.e("84783"),
                n.e("44928"),
                n.e("33416"),
                n.e("83952"),
                n.e("37752"),
                n.e("3217"),
                n.e("47678"),
                n.e("5557"),
                n.e("44780"),
                n.e("62718"),
                n.e("93907"),
                n.e("59957"),
                n.e("89916"),
                n.e("90301"),
                n.e("49145"),
                n.e("68763"),
                n.e("15188"),
                n.e("15109"),
                n.e("18489"),
                n.e("29666"),
                n.e("58273"),
                n.e("60773"),
                n.e("92295"),
                n.e("19454"),
                n.e("20930"),
                n.e("50535"),
                n.e("81202"),
                n.e("26001"),
                n.e("99549"),
                n.e("14591"),
                n.e("52111"),
                n.e("8018"),
                n.e("79211"),
                n.e("16988"),
                n.e("30997"),
                n.e("28136"),
                n.e("57458"),
                n.e("59797"),
                n.e("90213"),
                n.e("69765"),
                n.e("1243"),
                n.e("62304"),
                n.e("16084"),
                n.e("38090"),
                n.e("75859"),
                n.e("29080"),
                n.e("44057"),
                n.e("87317"),
                n.e("10943"),
                n.e("15920"),
                n.e("68530"),
                n.e("3930"),
                n.e("78046"),
                n.e("3663"),
                n.e("38601"),
                n.e("52212"),
                n.e("66580"),
                n.e("80093"),
                n.e("73669"),
                n.e("66016"),
                n.e("83518"),
                n.e("22547"),
                n.e("60989"),
                n.e("82486"),
                n.e("3710"),
                n.e("45830"),
                n.e("7775"),
                n.e("61058"),
                n.e("50342"),
                n.e("3304"),
                n.e("33097"),
                n.e("5896"),
                n.e("77602"),
                n.e("10262"),
                n.e("95602"),
                n.e("46313"),
                n.e("29569"),
                n.e("36002"),
                n.e("43233"),
                n.e("41786"),
                n.e("91643"),
                n.e("63726"),
                n.e("71329"),
                n.e("37038"),
                n.e("83827"),
                n.e("42749"),
                n.e("56026"),
                n.e("16301"),
                n.e("22191"),
                n.e("25961"),
                n.e("30501"),
                n.e("8364"),
                n.e("66147"),
                n.e("89541"),
                n.e("74337"),
                n.e("52823"),
                n.e("56967"),
                n.e("47011"),
                n.e("31203"),
                n.e("66913"),
                n.e("71719"),
                n.e("13848"),
                n.e("39214"),
                n.e("99108"),
                n.e("14878"),
                n.e("88307"),
                n.e("26508"),
                n.e("61347"),
                n.e("14656"),
                n.e("39855"),
                n.e("73091"),
                n.e("14530"),
                n.e("86692"),
                n.e("75933"),
                n.e("16237"),
                n.e("16373"),
                n.e("81398"),
                n.e("93767"),
                n.e("24484"),
                n.e("44943"),
                n.e("32347"),
                n.e("8458"),
                n.e("11810"),
                n.e("48111"),
                n.e("90152"),
                n.e("24019"),
                n.e("87973"),
                n.e("57197"),
                n.e("14863"),
                n.e("84951"),
                n.e("71167"),
                n.e("12390"),
                n.e("34409"),
                n.e("61309"),
                n.e("94529"),
                n.e("30313"),
                n.e("98371"),
                n.e("21300"),
                n.e("94171"),
                n.e("74572"),
                n.e("98700"),
            ]).then(n.bind(n, 422559)),
        webpackId: 422559,
        name: "GuildSettings",
    }),
    cF = {
        [D.zgK.CHANNEL_SETTINGS]: () => (0, E.jsx)(cj, {}),
        [D.zgK.GUILD_SETTINGS]: () => (0, E.jsx)(cV, {}),
        [D.zgK.COLLECTIBLES_SHOP]: () => (0, E.jsx)(ck, {}),
        [D.zgK.COMPONENT_PLAYGROUND]: () => (0, E.jsx)(cG, {}),
    },
    cH = "SHOWN",
    cB = "HIDDEN",
    cY = { friction: 10, tension: 100 };
function c$() {
    return p.useEffect(() => (eH.A.enable(), eH.A.enableTemp(cM.w), () => eH.A.disableTemp()), []), null;
}
class cz extends p.PureComponent {
    containerRef = p.createRef();
    static getDerivedStateFromProps(e, t) {
        return e.mode !== t.mode ? { animating: !0, mode: e.mode } : null;
    }
    static defaultProps = { baseLayer: !1 };
    static contextType = cD.C;
    constructor(e) {
        super(e);
        let t = 1,
            n = 1;
        e.mode === cB && ((t = 0.93), (n = 0)),
            (this.state = { animating: !1, scale: new a6.A.Value(t), opacity: new a6.A.Value(n), mode: e.mode });
    }
    componentDidUpdate(e) {
        let { mode: t } = this.props,
            { mode: n } = e;
        if (t !== n) {
            if (t === cH && n === cB) return this.animateIn();
            if (t === cB && n === cH) return this.animateUnder();
        }
    }
    componentWillEnter(e) {
        let { opacity: t, scale: n } = this.state;
        n.setValue(1.1), t.setValue(0), e(), this.setState({ animating: !0 }, () => this.animateIn());
    }
    componentWillLeave(e) {
        this.setState({ animating: !0 }, () => this.animateOut(e));
    }
    animateIn(e) {
        C.Ay.Emitter.pause(500);
        let { opacity: t, scale: n } = this.state;
        a6.A.parallel([a6.A.spring(t, { toValue: 1, ...cY }), a6.A.spring(n, { toValue: 1, ...cY })]).start(() =>
            this.animateComplete(e),
        );
    }
    animateOut(e) {
        C.Ay.Emitter.pause(500);
        let { opacity: t, scale: n } = this.state;
        a6.A.parallel([a6.A.spring(t, { toValue: 0, ...cY }), a6.A.spring(n, { toValue: 1.1, ...cY })]).start(() => {
            e(), tJ._.dispatch(D.jej.LAYER_POP_COMPLETE);
        });
    }
    animateUnder() {
        C.Ay.Emitter.pause(500);
        let { opacity: e, scale: t } = this.state;
        a6.A.parallel([a6.A.spring(e, { toValue: 0, ...cY }), a6.A.spring(t, { toValue: 0.93, ...cY })]).start(() =>
            this.animateComplete(),
        );
    }
    animateComplete(e) {
        this.setState({ animating: !1 }, e);
    }
    render() {
        let { animating: e } = this.state,
            { name: t, mode: n, children: i, baseLayer: r, ...a } = this.props,
            l = n === cB,
            s = e || l ? this.getAnimatedStyle() : null,
            o = !l && !r,
            d = (0, E.jsx)(a6.A.div, {
                ref: (e) => (this.containerRef.current = null != e ? e.componentRef : void 0),
                "data-layer": t ?? "base",
                "aria-hidden": l,
                "aria-modal": o,
                "aria-label": o
                    ? (function (e) {
                          switch (e) {
                              case D.zgK.CHANNEL_SETTINGS:
                                  return G.intl.string(G.t.XPDhcc);
                              case D.zgK.COLLECTIBLES_SHOP:
                                  return G.intl.string(G.t.pWG4ze);
                              case D.zgK.COMPONENT_PLAYGROUND:
                                  return "Component Playground";
                              default:
                                  return "";
                          }
                      })(t)
                    : void 0,
                role: o ? "dialog" : void 0,
                className: tn()(cU.qd, { [cU.n3]: r, [cU.bW]: e, "stop-animations": n === cB }),
                style: s,
                ...a,
                children: i,
            });
        return r ? d : (0, E.jsx)(sf.O, { containerRef: this.containerRef, children: d });
    }
    getAnimatedStyle() {
        let { baseLayer: e } = this.props,
            { opacity: t, scale: n } = this.state,
            { reducedMotion: i } = this.context;
        return { opacity: t, transform: i.enabled || e ? void 0 : [{ scale: n }, { translateZ: 0 }] };
    }
}
class cq extends p.PureComponent {
    componentDidMount() {
        tJ._.subscribe(D.jej.LAYER_POP_ESCAPE_KEY, cw.jH);
    }
    componentWillUnmount() {
        tJ._.unsubscribe(D.jej.LAYER_POP_ESCAPE_KEY, cw.jH);
    }
    renderLayers() {
        let { children: e, layers: t, hasFullScreenLayer: n } = this.props,
            { length: i } = t,
            r = [];
        return (
            r.push((0, E.jsx)(cz, { mode: 0 !== i || n ? cB : cH, baseLayer: !0, children: e }, "layer-base")),
            t.forEach((e, t) => r.push(this.renderComponent(e, t, i))),
            r
        );
    }
    renderComponent(e, t, n) {
        let i;
        return (
            (i = "string" == typeof e ? cF[e]() : (0, E.jsx)(e, {})),
            (0, E.jsxs)(
                cz,
                {
                    name: "string" == typeof e ? e : void 0,
                    mode: t === n - 1 ? cH : cB,
                    children: [(0, E.jsx)(c$, {}), i],
                },
                `layer-${t}`,
            )
        );
    }
    renderArtisanalHack() {
        return (0, E.jsx)(ts.N, {
            theme: this.props.sidebarTheme,
            children: (e) => (0, E.jsx)("div", { className: tn()(cU.bg, e) }),
        });
    }
    render() {
        return (0, E.jsxs)(E.Fragment, {
            children: [
                this.renderArtisanalHack(),
                (0, E.jsx)(lC.F, {
                    component: "div",
                    className: tn()(cU.ZF, this.props.className),
                    children: this.renderLayers(),
                }),
            ],
        });
    }
}
function cK(e) {
    let t = (0, lK.NC)(),
        n = (0, C.bG)([t2.A], () => t2.A.getLayers()),
        i = (0, cx.xr)(
            (e) => e.fullScreenLayers.length > 0 && !e.fullScreenLayers.some((e) => e.options.showAppUnderLayer),
        );
    return (0, E.jsx)(cq, { ...e, sidebarTheme: t, layers: n, hasFullScreenLayer: i });
}
var cW = n(107715);
let cX = p.memo(function () {
    let e,
        t,
        n = (0, eV.A)(),
        i = p.useRef(null),
        r = p.useCallback((e) => {
            let { duration: t, intensity: n } = e;
            if (H.A.useReducedMotion || !eL.A.isFocused()) return;
            let { current: r } = i;
            eM()(null != r, "Shakeable is shaken when not mounted"), r.shake(t, n);
        }, []);
    return (
        p.useEffect(() => (eH.A.setLayout(eF.Ay), eH.A.enable(), () => eH.A.disable()), []),
        p.useEffect(
            () => (
                tJ._.subscribe(D.jej.SHAKE_APP, r),
                () => {
                    tJ._.unsubscribe(D.jej.SHAKE_APP, r);
                }
            ),
            [r],
        ),
        (e = (0, C.bG)([eQ.A], () => eQ.A.hasIncomingCalls())),
        (t = (0, C.bG)([eW.default, eZ.A, eX.A, eq.A], () => {
            let e = eW.default.getTotalMentionCount(),
                t = (0, eK.dH)([eZ.A, eq.A]),
                n = eW.default.hasAnyUnread(),
                i = eX.A.getDisableUnreadBadge(),
                r = e + t;
            return 0 === r && n && !i && (r = -1), r;
        })),
        p.useEffect(() => {
            if (!e) return;
            let t = eJ.Ay.bounceDock("critical"),
                n = (0, e0.iA)({ messages: [G.intl.string(G.t["fk1/bX"])], count: 50 });
            return () => {
                t?.(), n();
            };
        }, [e]),
        p.useEffect(() => {
            e8(t);
        }, [t]),
        p.useEffect(() => () => e8(0), []),
        (0, E.jsxs)(eG, {
            ref: i,
            className: cW.y,
            children: [
                (0, E.jsx)(cK, { className: cW.Z, children: (0, E.jsx)(d0, {}) }),
                (0, E.jsx)(te, {}),
                (0, E.jsx)(ek.A, {}),
                (0, E.jsx)(cR, {}),
                (0, E.jsx)(d1.A, {}),
                !n && (0, E.jsx)(ej.S, {}),
            ],
        })
    );
});
var cZ = n(148803),
    cQ = n(154323),
    cJ = n(536194),
    c0 = n(693477),
    c1 = n(892035);
let c8 = "CollectiblesMarketingManager",
    c3 = "CollectiblesAnnouncementModal",
    c2 = new ct.A(c8);
class c7 extends X.A {
    didOpenAnnouncementModal = !1;
    _initialize() {
        W.h.subscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen),
            W.h.subscribe("LOGOUT", this.handleLogout);
    }
    _terminate() {
        W.h.unsubscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen),
            W.h.unsubscribe("LOGOUT", this.handleLogout);
    }
    handleLogout = () => {
        this.didOpenAnnouncementModal = !1;
    };
    handlePostConnectionOpen = () => {
        let e = cQ.A.get("shop_include_unpublished");
        (0, c0.LX)({ release: e ? cZ.P.BETA : cZ.P.PROD }), this.maybeOpenAnnouncementModal();
    };
    maybeOpenAnnouncementModal = async () => {
        if (this.didOpenAnnouncementModal || cJ.P.isDisallowPopupsSet() || (0, T.hasModalOpen)(c3)) return;
        let e = iu.default.getCurrentUser();
        if (
            !(null == e || !e.verified || (0, iW.k8)(nW.M.COLLECTIBLES_PROFILE_FRAMES_ANNOUNCEMENT)) &&
            (0, c1.ix)(c8).isAnnouncementEligible
        ) {
            this.didOpenAnnouncementModal = !0;
            try {
                await (0, T.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([n.e("80178"), n.e("13328")]).then(n.bind(n, 24851));
                        return (t) => (0, E.jsx)(e, { ...t });
                    },
                    { modalKey: c3 },
                );
            } catch (e) {
                (this.didOpenAnnouncementModal = !1), c2.error("Failed to open announcement modal", e);
            }
        }
    };
}
let c4 = new c7();
var c6 = n(347481),
    c5 = n(617617),
    c9 = n(792205);
let ue = { ignoredDevices: {} },
    ut = ue,
    un = !1,
    ui = {},
    ur = {},
    ua = {},
    ul = { id: null, justChanged: !1 },
    us = { id: null, justChanged: !1 },
    uo = /\((.+)\)\s*$/;
function ud(e) {
    if ((0, U.getPlatform)() === U.PlatformTypes.WINDOWS) {
        let t = e.name.match(uo);
        if (null != t) return t[1];
    }
    return e.name;
}
function uc(e, t, n) {
    return null == e || e.displayName !== t
        ? { displayName: t, type: n }
        : (e.type === c9.E.INPUT && n === c9.E.OUTPUT) || (e.type === c9.E.OUTPUT && n === c9.E.INPUT)
          ? { displayName: t, type: c9.E.INPUT_AND_OUTPUT }
          : e;
}
class uu extends C.Ay.DeviceSettingsStore {
    static displayName = "ConnectedDeviceStore";
    static persistKey = "ConnectedDeviceStore";
    static migrations = [(e) => (null == e.ignoredDevices ? { ...e, ignoredDevices: {} } : e)];
    initialize(e) {
        this.waitFor(eS.Ay, c5.A), (ut = e ?? ue);
    }
    getUserAgnosticState() {
        return ut;
    }
    get initialized() {
        return un;
    }
    get lastDeviceConnected() {
        return ua;
    }
    get inputDevices() {
        return ui;
    }
    get lastInputSystemDevice() {
        return ul;
    }
    get outputDevices() {
        return ur;
    }
    get lastOutputSystemDevice() {
        return us;
    }
}
let uA = new uu(W.h, {
        MEDIA_ENGINE_DEVICES: function (e) {
            let { inputDevices: t, outputDevices: n } = e,
                i = {};
            (ul.justChanged = !1),
                t.forEach((e) => {
                    if (((i[ud(e)] = e.id), e.id === eO.dx)) {
                        let t = e.originalId ?? e.originalName;
                        t !== ul.id && (ul.justChanged = !0), (ul.id = t);
                    }
                });
            let r = {};
            if (
                ((us.justChanged = !1),
                n.forEach((e) => {
                    if (((r[ud(e)] = e.id), e.id === eO.dx)) {
                        let t = e.originalId ?? e.originalName;
                        t !== us.id && (us.justChanged = !0), (us.id = t);
                    }
                }),
                !un)
            ) {
                (ui = i), (ur = r), (un = !0);
                return;
            }
            let a = Object.keys(ui),
                l = Object.keys(i),
                s = Object.keys(ur),
                o = Object.keys(r),
                d = eU().difference(a, l),
                c = eU().difference(s, o);
            return (
                d.length > 0 || c.length > 0
                    ? (ua = {})
                    : (eU()
                          .difference(l, a)
                          .forEach((e) => {
                              ua[e] = uc(ua[e], e, c9.E.INPUT);
                          }),
                      eU()
                          .difference(o, s)
                          .forEach((e) => {
                              ua[e] = uc(ua[e], e, c9.E.OUTPUT);
                          })),
                !(eU().isEqual(a, l) && eU().isEqual(s, o)) && ((ui = i), (ur = r), !0)
            );
        },
        CONNECTED_DEVICE_SWITCH: function (e) {
            let { displayName: t, connectedDevicePreference: n, location: i } = e;
            if (n === c9.f.INPUT || n === c9.f.INPUT_AND_OUTPUT) {
                let e = ui[t];
                null != e && W.h.wait(() => eT.A.setInputDevice(e, { location: i }));
            }
            if (n === c9.f.OUTPUT || n === c9.f.INPUT_AND_OUTPUT) {
                let e = ur[t];
                W.h.wait(() => eT.A.setOutputDevice(e, { location: i }));
            }
            delete ua[t];
        },
        CONNECTED_DEVICE_DONT_SWITCH: function (e) {
            let { displayName: t } = e;
            delete ua[t];
        },
        CONNECTED_DEVICE_IGNORE: function (e) {
            let { displayName: t } = e;
            (ut.ignoredDevices[t] = !0), delete ua[t];
        },
        CONNECTED_DEVICE_NEVER_SHOW_MODAL: function () {
            (ua = {}), (ut.neverShowModal = !0);
        },
    }),
    uh = new Set(["DisplayPort"]),
    u_ = "connected-device-modal";
function uE() {
    let e;
    if ((0, T.hasModalOpen)(u_)) return;
    let t = eS.Ay.getInputDeviceId(),
        i = eS.Ay.getOutputDeviceId();
    if (uA.getState().neverShowModal || eU().isEmpty(uA.lastDeviceConnected)) return;
    let r = ud(eS.Ay.getInputDevices()[t]),
        a = ud(eS.Ay.getOutputDevices()[i]);
    if (eU().some(uA.lastDeviceConnected, (e) => uh.has(e.displayName) || e.displayName === r || e.displayName === a))
        return;
    let l = eU().some(
        uA.lastDeviceConnected,
        (e) => c6.A.isCertified(uA.inputDevices[e.displayName]) || c6.A.isCertified(uA.outputDevices[e.displayName]),
    );
    if (
        ((t === eO.dx && uA.lastInputSystemDevice.justChanged) ||
            (i === eO.dx && uA.lastOutputSystemDevice.justChanged)) &&
        !l
    )
        return;
    let s = eU().first(Object.keys(uA.lastDeviceConnected)),
        o = null != s && "" !== s ? uA.lastDeviceConnected[s] : null;
    null == o ||
        uA.getState().ignoredDevices[o.displayName] ||
        (uA.initialized &&
            null != s &&
            (c6.A.isCertified(uA.inputDevices[s])
                ? (e = c6.A.getCertifiedDevice(uA.inputDevices[s]))
                : c6.A.isCertified(uA.outputDevices[s]) && (e = c6.A.getCertifiedDevice(uA.outputDevices[s]))),
        (0, T.openModalLazy)(
            async () => {
                let { default: t } = await n.e("65573").then(n.bind(n, 442468));
                return (n) => {
                    let { transitionState: i, onClose: r } = n;
                    return (0, E.jsx)(t, { device: o, certifiedDeviceMetadata: e, transitionState: i, onClose: r });
                };
            },
            { modalKey: u_ },
        ));
}
let up = {
        init() {
            uA.addChangeListener(uE);
        },
    },
    um = "CONNECTIONS_GRID_MODAL_KEY";
class uI extends X.A {
    _initialize() {
        W.h.subscribe("CONNECTIONS_GRID_MODAL_SHOW", this.handleShow),
            W.h.subscribe("CONNECTIONS_GRID_MODAL_HIDE", this.handleHide);
    }
    _terminate() {
        W.h.unsubscribe("CONNECTIONS_GRID_MODAL_SHOW", this.handleShow),
            W.h.unsubscribe("CONNECTIONS_GRID_MODAL_HIDE", this.handleHide);
    }
    handleShow(e) {
        let {
            onComplete: t,
            excludedPlatformTypes: i,
            includedPlatformTypes: r,
            integrations: a,
            onCompleteApplication: l,
            includeApplicationConnections: s,
        } = e;
        (0, T.hasModalOpen)(um) ||
            (0, T.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                    n.e("84611"),
                    n.e("31788"),
                    n.e("26343"),
                    n.e("89588"),
                    n.e("95198"),
                ]).then(n.bind(n, 58829));
                return (n) =>
                    (0, E.jsx)(e, {
                        onComplete: t,
                        excludedPlatformTypes: i,
                        includedPlatformTypes: r,
                        integrations: a,
                        onCompleteApplication: l,
                        includeApplicationConnections: s,
                        ...n,
                    });
            });
    }
    handleHide() {
        (0, T.closeModal)(um);
    }
}
let ug = new uI();
var uC = n(480900),
    uT = n(293260);
class uf extends X.A {
    _initialize() {
        W.h.subscribe("GUILD_ROLE_CONNECTIONS_MODAL_SHOW", this.handleShow);
    }
    _terminate() {
        W.h.unsubscribe("GUILD_ROLE_CONNECTIONS_MODAL_SHOW", this.handleShow);
    }
    handleShow(e) {
        let { role: t, guildId: n } = e;
        (0, T.hasModalOpen)("GUILD_ROLE_CONNECTIONS_MODAL_KEY") ||
            (null != t && t.tags?.guild_connections === null ? (0, uC.b)(t, n) : (0, uT.c0)(n));
    }
}
let uN = new uf();
var uS = n(793943),
    uL = n(746793),
    uO = n(272613),
    uy = n(874059),
    ub = n(963169),
    uv = n(422258);
function uP(e) {
    let {
        channel: { id: t },
    } = e;
    (0, uv.i_)(t, { trackAnalytics: !1 });
}
class uR extends X.A {
    _initialize() {
        W.h.subscribe("CHANNEL_DELETE", uP);
    }
    _terminate() {
        W.h.unsubscribe("CHANNEL_DELETE", uP);
    }
}
let uD = new uR();
var uw = n(367727),
    uM = n(853742);
class ux extends X.A {
    _initialize() {
        W.h.subscribe("CHANNEL_SELECT", this.handleChannelSelect);
    }
    _terminate() {
        W.h.unsubscribe("CHANNEL_SELECT", this.handleChannelSelect);
    }
    handleChannelSelect(e) {
        let t,
            i,
            r,
            a,
            l,
            { guildId: s } = e;
        if (
            null == s ||
            ((t = rx.A.getGuild(s)),
            (i = !!t?.features.has(D.GuildFeatures.COMMUNITY)),
            (r = rj.A.can(D.xBc.MANAGE_CHANNELS, t)),
            (a = (0, iW.k8)(nW.M.FORUM_CHANNEL_UPSELL_MODAL)),
            (l = rM.A.getMemberCount(s) ?? 0),
            !i || !r || a || !(l >= 200))
        )
            return;
        (0, uM.zd)(), (0, uw.Vh)(nW.M.FORUM_CHANNEL_UPSELL_MODAL);
        let o = function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tf.i.DISMISS;
            (0, iW.Dr)(nW.M.FORUM_CHANNEL_UPSELL_MODAL, { dismissAction: e });
        };
        (0, T.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([n.e("43051"), n.e("90052")]).then(n.bind(n, 653682));
                return (t) =>
                    (0, E.jsx)(e, {
                        ...t,
                        onClose: (e) => {
                            o(e), t.onClose();
                        },
                        guildId: s,
                        shouldUpsellCreation: !0,
                    });
            },
            {
                onCloseCallback: () => (0, iW.Dr)(nW.M.FORUM_CHANNEL_UPSELL_MODAL, { dismissAction: tf.i.DISMISS }),
                onCloseRequest: D.FXj,
            },
        );
    }
}
let uU = new ux();
var uG = n(208207);
class uj extends X.A {
    _initialize() {
        W.h.subscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen);
    }
    _terminate() {
        W.h.unsubscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen);
    }
    handlePostConnectionOpen = () => {
        let e = eq.A.getGameRelationships(),
            t = new Set();
        e.values().forEach((e) => {
            e.type === D.eA$.PENDING_INCOMING && t.add(e.applicationId);
        }),
            iB.Ay.fetchApplications(Array.from(t));
    };
    destroy() {
        W.h.unsubscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen);
    }
}
let uk = new uj(),
    uV = {};
function uF(e) {
    let { name: t, hash: n, missingData: i } = e;
    for (let e of (cT.A.markGameReported(t), i))
        if ("icon" === e) {
            let e = uV[t];
            null != e && ry.Ay.uploadIcon(t, n, e);
            return;
        } else new ct.A("GameStoreIconManager").log(`Could not find missing data key: ${e}`);
}
function uH(e) {
    let { gameName: t, icon: n } = e;
    uV[t] = n;
}
let uB = {
    initialize() {
        W.h.subscribe("UNVERIFIED_GAME_UPDATE", uF), W.h.subscribe("GAME_ICON_UPDATE", uH);
    },
};
var uY = n(738533);
function u$(e) {
    let t,
        n,
        { gameId: i } = e;
    (t = rR.A.launchableGames[i]),
        (null != (n = iY.A.getApplication(i)) ? uY.A.isLaunchable(n) : uY.A.isGameLaunchable(i)).then((e) => {
            e !== t && W.h.dispatch({ type: "GAME_LAUNCHABLE_UPDATE", gameId: i, isLaunchable: e });
        });
}
let uz = {
    initialize() {
        W.h.subscribe("CHECK_LAUNCHABLE_GAME", u$);
    },
};
var uq = n(147964);
let uK = {
    init() {
        rU.A.whenInitialized(() => {
            null != uq.A.testModeApplicationId && (0, y.q1)(uq.A.testModeApplicationId, uq.A.testModeOriginURL);
        });
    },
};
var uW = n(92077);
function uX() {
    if (!(0, rB.S)()) return;
    let e = R.default.getToken(),
        t = R.default.getId();
    if (null == e) throw Error("missing user token");
    uW.Ts(e, t);
}
function uZ() {
    uW.zr();
}
let uQ = {
    init() {
        W.h.subscribe("CONNECTION_OPEN", uX), W.h.subscribe("LOGOUT", uZ);
    },
};
var uJ = n(507263),
    u0 = n(376728),
    u1 = n(970163);
async function u8(e) {
    let { code: t } = e,
        i = (await (0, u1.A)(t)).invite;
    if (null == i || null == i.guild) return;
    let r = i.guild.id,
        a = lZ.Ay.getMember(r, R.default.getId()),
        l = !1;
    if (null != a && null != i.roles && i.roles.length > 0) {
        let e = new Set(a.roles ?? []);
        l = i.roles.some((t) => !e.has(t.id));
    }
    if (null == a || l) return void W.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: i, code: t, context: D.BRT.APP });
    let { default: s } = await Promise.resolve().then(n.bind(n, 608401));
    await s({ guildId: r }), u0.Ay.transitionToInvite(i, void 0, !0);
}
var u3 = n(997509),
    u2 = n(268313),
    u7 = n(567249),
    u4 = n(998740);
function u6(e) {
    return `haven:${e}`;
}
function u5() {
    let e = i;
    if (null == e) return !1;
    let t = u6(e);
    if (!t7.A.isOpen(t)) return !1;
    let n = t7.A.pipHavenWindow;
    if (null == n || n.id !== t) return (i = null), !1;
    W.h.wait(() => tQ.VN(t)), (i = null);
}
function u9() {
    return t2.A.hasLayers();
}
function Ae() {
    let e,
        t,
        n = e7.A.getChannelId(),
        r = null != n ? i6.A.getChannel(n) : null;
    if (
        ((e = e7.A.getChannelId()),
        (t = ee.A.getChannelId()),
        null == e || !u4.A.isUserConnected(e) || e === t || u7.A.getWindowOpen(D.MLl.CHANNEL_CALL_POPOUT) || 0)
    )
        return u5();
    if (null != r && u4.A.isUserConnected(r.id)) {
        if (i !== r.id) {
            let e = u6(r.id);
            if (t7.A.isOpen(e)) return !1;
            if (null != i) {
                let e = i;
                W.h.wait(() => tQ.VN(e));
            }
            return (
                W.h.wait(() => {
                    tQ.ho(e, D.o1q.HAVEN, { channel: r }), u9() && tQ.jD(e);
                }),
                (i = r.id),
                !0
            );
        }
        return !1;
    }
    return u5();
}
function At() {
    if (u9()) {
        let e = void 0 ?? i;
        if (null == e) return;
        let t = u6(e);
        t7.A.isOpen(t) && W.h.wait(() => tQ.jD(t));
        return;
    }
    let e = void 0 ?? i;
    if (null == e) return;
    let t = u6(e);
    t7.A.isOpen(t) && W.h.wait(() => tQ.WU(t));
}
class An extends X.A {
    _initialize() {
        ee.A.addChangeListener(Ae),
            et.A.addChangeListener(Ae),
            e7.A.addChangeListener(Ae),
            rV.A.addChangeListener(Ae),
            t2.A.addChangeListener(At),
            u4.A.addChangeListener(Ae),
            u7.A.addChangeListener(Ae);
    }
    _terminate() {
        ee.A.removeChangeListener(Ae),
            et.A.removeChangeListener(Ae),
            e7.A.removeChangeListener(Ae),
            rV.A.removeChangeListener(Ae),
            t2.A.removeChangeListener(At),
            u4.A.removeChangeListener(Ae),
            u7.A.removeChangeListener(Ae);
    }
}
let Ai = new An(),
    Ar = {
        init() {
            W.h.subscribe("VOICE_CHANNEL_SELECT", (e) => {
                let { channelId: t } = e;
                null == t && sQ.sF(oW._.VOICE_PANEL_INTRODUCTION);
            });
        },
    };
var Aa = n(4106),
    Al = n(875448);
let As = null;
class Ao extends X.A {
    _initialize() {
        W.h.subscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen);
    }
    _terminate() {
        W.h.unsubscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen);
    }
    handlePostConnectionOpen() {
        (0, Al.HF)("ICYMIManager") &&
            (!(function e() {
                let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                Aa.A.fetchDehydrated({ isInitialLoad: t }),
                    null != As && clearTimeout(As),
                    (As = setTimeout(() => e(), 15 * eu.A.Millis.MINUTE));
            })(!0),
            Aa.A.getGuildChannelScores(),
            Aa.A.getRecommendedGuilds());
    }
}
let Ad = new Ao();
var Ac = n(684013),
    Au = n(55619),
    AA = n(734066),
    Ah = n(572164),
    A_ = n(399925),
    AE = n(652896),
    Ap = n(299855),
    Am = n.n(Ap),
    AI = n(157257),
    Ag = n(997630),
    AC = n(905552),
    AT = n(325278),
    Af = n(140175),
    AN = n(528772),
    AS = n(944775),
    AL = n(351906),
    AO = n(532624),
    Ay = n(773371),
    Ab = n(427603);
let Av = new Map();
function AP(e, t, n, i) {
    if (!e7.A.isConnected()) return;
    let r = i.context ?? eO.x.DEFAULT,
        a = Av.get(r);
    null == a && ((a = { held: new Set(), priorityHeld: new Set() }), Av.set(r, a)),
        n || (e ? a.held.add(i.id) : a.held.delete(i.id)),
        t && (e ? a.priorityHeld.add(i.id) : a.priorityHeld.delete(i.id));
    let l = a.held.size > 0,
        s = a.priorityHeld.size > 0;
    (0, Af.N)(l, s);
}
let AR = {
    [D.hCu.TOGGLE_PRIORITY_SPEAKER]: { onTrigger() {}, keyEvents: {} },
    [D.hCu.UNASSIGNED]: { onTrigger() {}, keyEvents: {} },
    [D.hCu.PUSH_TO_TALK]: {
        onTrigger(e, t) {
            eS.Ay.getMode(t.context) === D.TBI.PUSH_TO_TALK &&
                ((AR[D.hCu.PUSH_TO_TALK].isPressed = e), AP(e, !1, !1, t));
        },
        keyEvents: { keyup: !0, keydown: !0 },
        isPressed: !1,
    },
    [D.hCu.PUSH_TO_TALK_PRIORITY]: {
        onTrigger(e, t) {
            eS.Ay.getMode() === D.TBI.PUSH_TO_TALK &&
                ((AR[D.hCu.PUSH_TO_TALK_PRIORITY].isPressed = e), AP(e, !0, !1, t));
        },
        keyEvents: { keyup: !0, keydown: !0 },
        isPressed: !1,
    },
    [D.hCu.VAD_PRIORITY]: {
        onTrigger(e, t) {
            eS.Ay.getMode() === D.TBI.VOICE_ACTIVITY && ((AR[D.hCu.VAD_PRIORITY].isPressed = e), AP(e, !0, !0, t));
        },
        keyEvents: { keyup: !0, keydown: !0 },
        isPressed: !1,
    },
    [D.hCu.PUSH_TO_MUTE]: {
        onTrigger(e) {
            eS.Ay.getMode() === D.TBI.VOICE_ACTIVITY &&
                ((AR[D.hCu.PUSH_TO_MUTE].isPressed = e), eT.A.setTemporarySelfMute(e));
        },
        keyEvents: { keyup: !0, keydown: !0 },
        isPressed: !1,
    },
    [D.hCu.TOGGLE_MUTE]: {
        onTrigger: () => eT.A.toggleSelfMute({ usedKeybind: !0, location: "Custom Keybind" }),
        keyEvents: { keyup: !0, keydown: !1 },
    },
    [D.hCu.TOGGLE_DEAFEN]: {
        onTrigger: () => eT.A.toggleSelfDeaf({ usedKeybind: !0, location: "Custom Keybind" }),
        keyEvents: { keyup: !0, keydown: !1 },
    },
    [D.hCu.TOGGLE_CAMERA]: {
        onTrigger: () =>
            (function () {
                let e = eS.Ay.isVideoEnabled(),
                    t = Object.values(eS.Ay.getVideoDevices())[0],
                    n = t?.disabled ?? !0,
                    i = eS.Ay.supportsInApp(eO.O5.VIDEO) && eS.Ay.supportsInApp(eO.O5.DESKTOP_CAPTURE),
                    r = i6.A.getChannel(e7.A.getChannelId()),
                    a = iu.default.getCurrentUser()?.id;
                if (null == r || null == a) return;
                let { reachedLimit: l } = (0, oA.M)(r);
                if (!l) {
                    if (r.isGuildStageVoice()) {
                        let e = oi.A.getMutableParticipants(r.id, or.ip.SPEAKER),
                            t = e?.find((e) => {
                                let { user: t } = e;
                                return t.id === a;
                            });
                        if (!(0, oa.Bw)(r.guild_id) || !i || null == t || t.voiceState.suppress) return;
                    }
                    return (
                        e
                            ? eT.A.setVideoEnabled(!1)
                            : !1 === n
                              ? (0, oI.A)(
                                    () => {
                                        eT.A.setVideoEnabled(!0);
                                    },
                                    D.BRT.APP,
                                    !0,
                                )
                              : (0, oE.A)(),
                        !1
                    );
                }
            })(),
        keyEvents: { keyup: !0, keydown: !1 },
    },
    [D.hCu.TOGGLE_VOICE_MODE]: {
        onTrigger() {
            let e = eS.Ay.getMode() === D.TBI.PUSH_TO_TALK ? D.TBI.VOICE_ACTIVITY : D.TBI.PUSH_TO_TALK;
            eT.A.setMode(e);
        },
        keyEvents: { keyup: !0, keydown: !1 },
    },
    [D.hCu.TOGGLE_OVERLAY]: { onTrigger() {}, keyEvents: { keyup: !0, keydown: !1 } },
    [D.hCu.TOGGLE_OVERLAY_INPUT_LOCK]: {
        onTrigger(e, t) {
            if (!(0, AO.DV)(t.shortcut)) return;
            let n = (0, Ab.A)();
            null != n && Ac.A.setInputLocked(!cL.default.isLocked(n), n);
        },
        keyEvents: { keyup: !0, keydown: !1 },
    },
    [D.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET]: {
        onTrigger() {
            let e = Ay.default.getFocusedPID(),
                t = null != e;
            null != e &&
                t &&
                cL.default.isPinned(D.uss.TEXT) &&
                cL.default.isLocked(e) &&
                Ay.default.isReady(e) &&
                Ac.A.activateRegion(D.ajI.TEXT_WIDGET);
        },
        keyEvents: { keyup: !0, keydown: !1 },
    },
    [D.hCu.TOGGLE_GO_LIVE_STREAMING]: {
        onTrigger() {
            let e = oC.A.getCurrentUserActiveStream();
            if (null != e) return (0, i_.vN)((0, AE._z)(e));
            !(function () {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                if (!(0, sX.A)(eS.Ay) || null != oC.A.getCurrentUserActiveStream()) return;
                let n = ee.A.getVoiceChannelId(),
                    i = i6.A.getChannel(n);
                if (null == i) return;
                let r = i.getGuildId();
                if ((0, iJ.vz)(i, rx.A, rj.A, !1))
                    if (eS.Ay.getUseSystemScreensharePicker())
                        (0, U.isMac)() && Am().satisfies(d2.A?.os.release, AT.WZ) ? (0, Ag.a)() : (0, Ag.a)("window");
                    else {
                        let n = (0, AC.A)(ef.Ay, AI.A);
                        if (null == n || (n.isLauncher && !e)) return;
                        (0, i_.XI)(r, i.id, { pid: n.pid, analyticsLocations: t });
                    }
            })(!0, [eg.A.GO_LIVE_KEYBIND]);
        },
        keyEvents: { keyup: !0, keydown: !1 },
    },
    [D.hCu.TOGGLE_STREAMER_MODE]: {
        onTrigger() {
            Au.A.setEnabled(!AL.A.enabled);
        },
        keyEvents: { keyup: !0, keydown: !1 },
    },
    [D.hCu.NAVIGATE_BACK]: {
        onTrigger: () => (0, ub.OE)("global_keybind"),
        keyEvents: { keyup: !0, keydown: !1, focused: !0, blurred: !1 },
    },
    [D.hCu.NAVIGATE_FORWARD]: {
        onTrigger: () => (0, ub.Qb)("global_keybind"),
        keyEvents: { keyup: !0, keydown: !1, focused: !0, blurred: !1 },
    },
    [D.hCu.SOUNDBOARD]: {
        onTrigger: () => {
            let e = (0, Ab.A)();
            if (null != e)
                if (AN.A.enabled) (0, AS.Lk)(e);
                else {
                    if (!(0, s3.lI)()) return;
                    (0, AS.hK)(!0, e);
                }
        },
        keyEvents: { keyup: !0, keydown: !1 },
    },
    [D.hCu.SOUNDBOARD_HOLD]: {
        onTrigger: (e) => {
            let t = (0, Ab.A)();
            if (null != t) {
                if (e) {
                    if (!(0, s3.lI)()) return;
                    (0, AS.hK)(!1, t);
                } else (0, AS.Lk)(t);
                return;
            }
        },
        keyEvents: { keyup: !0, keydown: !0 },
    },
    [D.hCu.SAVE_CLIP]: {
        onTrigger: () => {
            (0, Ah.TD)() && (ec.default.track(D.HAw.CLIP_SAVE_KEYBIND_PRESSED), (0, A_.l0)());
        },
        keyEvents: { keyup: !1, keydown: !0 },
    },
    [D.hCu.SAVE_SCREENSHOT]: {
        onTrigger: () => {
            !(0, Ah.TD)() || ((0, AA.cx)() && (ec.default.track(D.HAw.CLIP_SAVE_KEYBIND_PRESSED), (0, A_.yT)()));
        },
        keyEvents: { keyup: !1, keydown: !0 },
    },
    [D.hCu.SWITCH_TO_VOICE_CHANNEL]: {
        onTrigger(e, t) {
            let {
                params: { channelId: n },
            } = t;
            null != n && O.default.selectVoiceChannel(n);
        },
        keyEvents: { keyup: !0, keydown: !1, blurred: !0, focused: !0 },
    },
    [D.hCu.DISCONNECT_FROM_VOICE_CHANNEL]: {
        onTrigger() {
            O.default.selectVoiceChannel(null);
        },
        keyEvents: { keyup: !0, keydown: !1, blurred: !0, focused: !0 },
    },
};
function AD() {
    Av.clear(), (0, Af.N)(!1, !1);
}
class Aw extends X.A {
    _initialize() {
        W.h.wait(() => W.h.dispatch({ type: "KEYBINDS_REGISTER_GLOBAL_KEYBIND_ACTIONS", keybinds: AR })),
            W.h.subscribe("AUDIO_SET_MODE", AD),
            W.h.subscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect);
    }
    _terminate() {
        W.h.unsubscribe("AUDIO_SET_MODE", AD), W.h.unsubscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect);
    }
    handleVoiceChannelSelect(e) {
        let { currentVoiceChannelId: t, channelId: n } = e;
        t !== n && AD();
    }
}
let AM = new Aw();
var Ax = n(913765),
    AU = n(942614),
    AG = n(315982),
    Aj = n(202384),
    Ak = n(709977),
    AV = n(14509),
    AF = n(894778),
    AH = n(225315),
    AB = n(684407),
    AY = n(919638),
    A$ = n(426620),
    Az = n(771016),
    Aq = n(994277);
n(436317);
var AK = n(315290);
function AW() {
    null != r && (0, T.closeModal)(r);
}
class AX extends X.A {
    _initialize() {
        W.h.subscribe("CONNECTION_OPEN", this.handleConnectionOpen), W.h.subscribe("LOGOUT", AW);
    }
    _terminate() {
        W.h.unsubscribe("CONNECTION_OPEN", this.handleConnectionOpen), W.h.unsubscribe("LOGOUT", AW);
    }
    handleConnectionOpen() {
        var e;
        let t,
            i = A$.A.getType();
        if (null == i) return;
        switch (i) {
            case Az.zY.INVITE_UNCLAIMED:
                AF.A.flowStart(AK.do.INVITE, AK.ju.NUF_STARTED);
                break;
            case Az.zY.ORGANIC_REGISTERED:
                AF.A.flowStart(AK.do.ORGANIC, AK.ju.NUF_STARTED);
                break;
            case Az.zY.MARKETING_UNCLAIMED:
                AF.A.flowStart(AK.do.ORGANIC_MARKETING, AK.ju.NUF_STARTED);
        }
        let a = !1,
            l = et.A.getGuildId();
        if (i === Az.zY.INVITE_UNCLAIMED) {
            let e = rx.A.getGuild(l);
            null != e && (0, Ak.Qd)(e) && ((a = !0), (0, AH.Fy)(e.id));
        }
        let s = () => 0 === AY.A.totalGuilds && !U.isPlatformEmbedded,
            o = en.xq();
        (e = [
            {
                key: "Unified NUF Modal",
                open: async function (e) {
                    let { default: t } = await n.e("74082").then(n.bind(n, 491380));
                    if (t.getConfig({ location: "nuf_manager" }).enabled) {
                        r = await (0, T.openModalLazy)(
                            async () => {
                                let { default: e } = await Promise.all([
                                    n.e("45235"),
                                    n.e("13754"),
                                    n.e("16138"),
                                    n.e("80262"),
                                    n.e("74678"),
                                    n.e("19580"),
                                    n.e("27838"),
                                    n.e("94161"),
                                    n.e("97804"),
                                    n.e("56856"),
                                    n.e("82721"),
                                    n.e("16799"),
                                    n.e("99574"),
                                    n.e("57794"),
                                    n.e("19183"),
                                ]).then(n.bind(n, 923314));
                                return (t) => (0, E.jsx)(e, { ...t });
                            },
                            { onCloseRequest: D.tEg, onCloseCallback: e, modalKey: r },
                        );
                        return;
                    }
                    let i = (e) => {
                        switch (e) {
                            case Aq.i.AGE_GATE:
                                AF.A.flowStep(AK.do.ANY, AK.ju.AGE_GATE);
                                break;
                            case Aq.i.CHOOSE_TEMPLATE:
                                AF.A.flowStep(AK.do.ANY, AK.jC.GUILD_TEMPLATES);
                                break;
                            case Aq.i.CUSTOMIZE_GUILD:
                                AF.A.flowStep(AK.do.ANY, AK.jC.GUILD_CREATE);
                                break;
                            case Aq.i.CHANNEL_PROMPT:
                                AF.A.flowStep(AK.do.ANY, AK.jC.CHANNEL_PROMPT);
                                break;
                            case Aq.i.JOIN_GUILD:
                                AF.A.flowStep(AK.do.ANY, AK.jC.JOIN_GUILD);
                                break;
                            case Aq.i.CREATION_INTENT:
                                AF.A.flowStep(AK.do.ANY, AK.jC.CREATION_INTENT);
                                break;
                            case Aq.i.COMPLETE:
                                AF.A.flowStep(AK.do.ANY, AK.jC.SUCCESS);
                                break;
                            case null:
                                break;
                            default:
                                re.xb(e);
                        }
                    };
                    r = await (0, T.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.all([
                                n.e("45235"),
                                n.e("13754"),
                                n.e("41909"),
                                n.e("59307"),
                                n.e("20287"),
                                n.e("28367"),
                                n.e("74678"),
                                n.e("19580"),
                                n.e("97804"),
                                n.e("82758"),
                                n.e("56856"),
                                n.e("99574"),
                                n.e("57641"),
                                n.e("50475"),
                            ]).then(n.bind(n, 111185));
                            return (t) => (0, E.jsx)(e, { ...t, onSlideChange: i });
                        },
                        { onCloseRequest: D.tEg, onCloseCallback: e, modalKey: r },
                    );
                },
                predicate: () => s() && !0,
            },
            { key: "New User Age Gate", open: AG.v, predicate: () => o && !s() && !0 },
            {
                key: "Claim Account Modal",
                open: (e) => AG.R(U.isPlatformEmbedded, e),
                predicate: () =>
                    !a &&
                    null != iu.default.getCurrentUser() &&
                    !iu.default.getCurrentUser()?.isClaimed() &&
                    !(0, AV._9)(),
            },
            {
                key: "Verification Gate with Claim Account",
                open: (e) => (0, Aj.Ze)(l, e ?? void 0),
                predicate: () => a && !iu.default.getCurrentUser()?.isClaimed() && !0,
            },
            {
                key: "Guild Welcome Modal",
                open: (e) =>
                    (0, T.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.all([n.e("71898"), n.e("10585")]).then(
                                n.bind(n, 954784),
                            );
                            return (t) => (0, E.jsx)(e, { ...t, guildId: l });
                        },
                        { onCloseCallback: e },
                    ),
                predicate: () => null != l && null != AB.A.get(l) && AB.A.get(l) !== AB.E,
            },
        ]),
            (t = () => {
                AU.D(), AF.A.flowStep(AK.do.ANY, AK.ju.NUF_COMPLETE, !0);
            }),
            [...e].reverse().forEach((e) => {
                let n = t;
                t = () => {
                    e.predicate() ? e.open(n) : n();
                };
            }),
            t();
    }
}
let AZ = new AX();
var AQ = n(682492),
    AJ = n(414736),
    A0 = n(874486),
    A1 = n(927018),
    A8 = n(3137),
    A3 = n(559908);
let A2 = new Set();
class A7 extends X.A {
    _initialize() {
        W.h.subscribe("MESSAGE_CREATE", this.handleMessageCreate),
            W.h.subscribe("POGGERMODE_SETTINGS_UPDATE", this.handleSettingsUpdate);
    }
    _terminate() {
        W.h.unsubscribe("MESSAGE_CREATE", this.handleMessageCreate),
            W.h.unsubscribe("POGGERMODE_SETTINGS_UPDATE", this.handleSettingsUpdate);
    }
    handleSettingsUpdate = (e) => {
        let { settings: t } = e;
        t.enabled ? (0, AJ._)(A1.sn.ENABLE_POGGERMODE) : !1 === t.enabled && (0, AJ._)(A1.sn.DISABLE_POGGERMODE),
            Object.keys(t).some((e) => e.startsWith("confetti")) && (0, AJ._)(A1.sn.CUSTOMIZE_CONFETTI);
    };
    handleMessageCreate = (e) => {
        let {
            channelId: t,
            message: { author: n, nonce: i, mentions: r },
        } = e;
        if (!A8.A.isEnabled()) return !1;
        let a = R.default.getId();
        if (
            (r?.find((e) => e.id === a) != null
                ? (0, AJ._)(A1.sn.PING_ME)
                : (r?.length ?? 0) > 0 && n?.id === a && (0, AJ._)(A1.sn.PING_SOMEONE),
            !(0, A3.gN)(n?.id, a, i, A2))
        )
            return !1;
        let { combo: l } = A3.Ay.getMostRecentMessageCombo(t) ?? {};
        if (null == l) return !1;
        Object.values(A1.sn).forEach((e) => {
            if (null != A0.A.getUnlocked(e)) return;
            let t = (0, A1.vM)(e),
                n = t?.checkUnlock;
            null == n || (!1 !== n(l) && (0, AJ._)(e));
        });
    };
}
let A4 = new A7();
var A6 = n(64585),
    A5 = n(139033);
class A9 extends X.A {
    _initialize() {
        W.h.subscribe("POGGERMODE_TEMPORARILY_DISABLED", this.handlePoggermodeTemporarilyDisabled);
    }
    _terminate() {
        W.h.unsubscribe("POGGERMODE_TEMPORARILY_DISABLED", this.handlePoggermodeTemporarilyDisabled);
    }
    handlePoggermodeTemporarilyDisabled() {
        (0, A5.A)({ title: G.intl.string(G.t.wDQgnX), subtitle: G.intl.string(G.t.OJklbS) });
    }
}
let he = new A9();
var ht = n(958005),
    hn = n(574172);
n(41604);
let hi = (0, tu.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("6287"),
                n.e("55175"),
                n.e("47324"),
                n.e("63419"),
                n.e("32101"),
                n.e("45235"),
                n.e("4981"),
                n.e("72900"),
                n.e("35392"),
                n.e("31788"),
                n.e("41909"),
                n.e("9987"),
                n.e("69273"),
                n.e("77083"),
                n.e("63009"),
                n.e("84786"),
                n.e("63397"),
                n.e("45650"),
                n.e("97189"),
                n.e("27660"),
                n.e("85484"),
                n.e("81510"),
                n.e("36407"),
                n.e("79705"),
                n.e("80287"),
                n.e("8357"),
                n.e("55658"),
                n.e("38552"),
                n.e("79093"),
                n.e("28510"),
                n.e("87616"),
                n.e("76032"),
                n.e("33957"),
                n.e("49699"),
                n.e("43108"),
                n.e("35598"),
                n.e("84611"),
                n.e("63635"),
                n.e("66782"),
                n.e("92652"),
                n.e("45229"),
                n.e("3840"),
                n.e("81579"),
                n.e("46946"),
                n.e("52204"),
                n.e("11491"),
                n.e("66850"),
                n.e("22155"),
                n.e("13403"),
                n.e("23924"),
                n.e("15510"),
                n.e("48226"),
                n.e("19402"),
                n.e("13111"),
                n.e("68201"),
                n.e("74968"),
                n.e("92436"),
                n.e("20287"),
                n.e("28367"),
                n.e("35429"),
                n.e("10471"),
                n.e("63232"),
                n.e("64827"),
                n.e("30938"),
                n.e("23808"),
                n.e("11301"),
                n.e("60235"),
                n.e("61737"),
                n.e("79428"),
                n.e("29963"),
                n.e("47834"),
                n.e("98329"),
                n.e("20317"),
                n.e("84569"),
                n.e("2368"),
                n.e("27084"),
                n.e("24313"),
                n.e("48405"),
                n.e("63185"),
                n.e("19551"),
                n.e("84150"),
                n.e("45959"),
                n.e("18573"),
                n.e("55057"),
                n.e("37794"),
                n.e("26073"),
                n.e("7743"),
                n.e("34303"),
                n.e("48172"),
                n.e("28866"),
                n.e("54961"),
                n.e("8304"),
                n.e("58038"),
                n.e("93159"),
                n.e("55936"),
                n.e("11566"),
                n.e("21106"),
                n.e("31988"),
                n.e("94723"),
                n.e("62931"),
                n.e("81987"),
                n.e("58007"),
                n.e("5812"),
                n.e("17363"),
                n.e("34552"),
                n.e("55411"),
                n.e("93103"),
                n.e("58337"),
                n.e("26437"),
                n.e("13708"),
                n.e("76602"),
                n.e("28229"),
                n.e("71470"),
                n.e("91007"),
                n.e("68403"),
                n.e("76418"),
                n.e("21921"),
                n.e("9233"),
                n.e("88342"),
                n.e("69747"),
                n.e("40258"),
                n.e("20683"),
                n.e("66495"),
                n.e("91146"),
                n.e("42724"),
                n.e("43437"),
                n.e("39970"),
                n.e("82263"),
                n.e("42451"),
                n.e("30221"),
                n.e("8371"),
                n.e("8555"),
                n.e("86127"),
                n.e("6174"),
                n.e("39851"),
                n.e("58216"),
                n.e("98965"),
                n.e("72789"),
                n.e("6949"),
                n.e("29871"),
                n.e("17249"),
                n.e("41250"),
                n.e("35027"),
                n.e("84971"),
                n.e("53917"),
                n.e("9640"),
                n.e("62422"),
                n.e("15423"),
                n.e("26295"),
                n.e("88599"),
                n.e("36863"),
                n.e("1518"),
                n.e("67861"),
                n.e("15186"),
                n.e("98765"),
                n.e("23354"),
                n.e("89088"),
                n.e("82644"),
                n.e("37187"),
                n.e("71273"),
                n.e("27779"),
                n.e("75842"),
                n.e("12743"),
                n.e("10957"),
                n.e("55973"),
                n.e("20590"),
                n.e("45172"),
                n.e("35313"),
                n.e("65437"),
                n.e("34983"),
                n.e("63235"),
                n.e("74810"),
                n.e("28083"),
                n.e("80830"),
                n.e("86672"),
                n.e("3589"),
                n.e("86814"),
                n.e("52548"),
                n.e("35771"),
                n.e("22266"),
                n.e("53984"),
                n.e("59414"),
                n.e("80854"),
                n.e("79780"),
                n.e("35395"),
                n.e("43780"),
                n.e("14041"),
                n.e("46844"),
                n.e("45413"),
                n.e("22822"),
                n.e("75627"),
                n.e("90664"),
                n.e("79745"),
                n.e("34150"),
                n.e("64850"),
                n.e("72401"),
                n.e("22855"),
                n.e("70104"),
                n.e("68904"),
                n.e("68802"),
                n.e("52617"),
                n.e("8563"),
                n.e("2564"),
                n.e("47417"),
                n.e("19558"),
                n.e("58946"),
                n.e("14285"),
                n.e("95752"),
                n.e("78100"),
                n.e("78453"),
                n.e("8362"),
                n.e("80149"),
                n.e("2698"),
                n.e("62875"),
                n.e("4744"),
                n.e("87046"),
                n.e("12542"),
                n.e("501"),
                n.e("46769"),
                n.e("33297"),
                n.e("35321"),
                n.e("73384"),
                n.e("86243"),
                n.e("82783"),
                n.e("7833"),
                n.e("32209"),
                n.e("30788"),
                n.e("48295"),
                n.e("60249"),
                n.e("4193"),
                n.e("39171"),
                n.e("25246"),
                n.e("37021"),
                n.e("21049"),
                n.e("8377"),
                n.e("28610"),
                n.e("36564"),
                n.e("44571"),
                n.e("44795"),
                n.e("80436"),
                n.e("71268"),
                n.e("95370"),
                n.e("97784"),
                n.e("50033"),
                n.e("10014"),
                n.e("84783"),
                n.e("44928"),
                n.e("33416"),
                n.e("792"),
                n.e("37752"),
                n.e("3217"),
                n.e("47678"),
                n.e("92822"),
                n.e("5557"),
                n.e("95340"),
                n.e("62718"),
                n.e("93907"),
                n.e("3998"),
                n.e("89916"),
                n.e("90301"),
                n.e("68763"),
                n.e("15188"),
                n.e("61156"),
                n.e("15109"),
                n.e("18489"),
                n.e("9291"),
                n.e("91671"),
                n.e("29666"),
                n.e("58273"),
                n.e("60773"),
                n.e("92295"),
                n.e("19454"),
                n.e("20930"),
                n.e("16767"),
                n.e("74610"),
                n.e("50535"),
                n.e("44801"),
                n.e("38056"),
                n.e("26001"),
                n.e("36926"),
                n.e("99549"),
                n.e("14591"),
                n.e("52111"),
                n.e("8018"),
                n.e("6841"),
                n.e("79211"),
                n.e("63071"),
                n.e("16988"),
                n.e("57458"),
                n.e("59797"),
                n.e("8829"),
                n.e("86697"),
                n.e("90213"),
                n.e("20379"),
                n.e("69765"),
                n.e("76413"),
                n.e("3303"),
                n.e("1243"),
                n.e("62304"),
                n.e("19193"),
                n.e("80945"),
                n.e("18265"),
                n.e("75859"),
                n.e("29080"),
                n.e("96804"),
                n.e("44057"),
                n.e("95998"),
                n.e("87317"),
                n.e("36419"),
                n.e("80262"),
                n.e("10943"),
                n.e("68530"),
                n.e("42234"),
                n.e("66783"),
                n.e("78046"),
                n.e("28850"),
                n.e("11617"),
                n.e("74678"),
                n.e("20045"),
                n.e("81189"),
                n.e("92077"),
                n.e("10520"),
                n.e("12965"),
                n.e("203"),
                n.e("4774"),
                n.e("49629"),
                n.e("26294"),
                n.e("78601"),
                n.e("89523"),
                n.e("80407"),
                n.e("42726"),
                n.e("34546"),
                n.e("77663"),
                n.e("41701"),
                n.e("40204"),
                n.e("77467"),
                n.e("39894"),
                n.e("47057"),
                n.e("86902"),
                n.e("68083"),
                n.e("2855"),
                n.e("34936"),
                n.e("19815"),
                n.e("48730"),
                n.e("71467"),
                n.e("49013"),
                n.e("29260"),
                n.e("51892"),
                n.e("20965"),
                n.e("41838"),
                n.e("46045"),
                n.e("40393"),
                n.e("3707"),
                n.e("33448"),
                n.e("3304"),
                n.e("15275"),
                n.e("87732"),
                n.e("42324"),
                n.e("16054"),
                n.e("26516"),
                n.e("755"),
                n.e("77602"),
                n.e("33869"),
                n.e("46450"),
                n.e("14020"),
                n.e("31335"),
                n.e("96480"),
                n.e("86300"),
                n.e("74821"),
                n.e("79216"),
                n.e("50068"),
                n.e("21883"),
                n.e("619"),
                n.e("81398"),
                n.e("53275"),
                n.e("15057"),
                n.e("26792"),
                n.e("78047"),
                n.e("43710"),
                n.e("4374"),
                n.e("84114"),
                n.e("22094"),
                n.e("1485"),
                n.e("32429"),
                n.e("45916"),
                n.e("22511"),
                n.e("26223"),
                n.e("70011"),
                n.e("91553"),
                n.e("61924"),
                n.e("35874"),
                n.e("15980"),
                n.e("30761"),
                n.e("70217"),
                n.e("92539"),
                n.e("36847"),
                n.e("42492"),
                n.e("75525"),
                n.e("35895"),
                n.e("97934"),
                n.e("68709"),
                n.e("14842"),
                n.e("71138"),
            ]).then(n.bind(n, 140539)),
        webpackId: 140539,
        name: "PopoutWindowChannelCall",
    }),
    hr = (0, tu.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("45235"),
                n.e("4981"),
                n.e("72900"),
                n.e("35392"),
                n.e("31788"),
                n.e("41909"),
                n.e("9987"),
                n.e("32101"),
                n.e("69273"),
                n.e("77083"),
                n.e("63009"),
                n.e("84786"),
                n.e("63397"),
                n.e("45650"),
                n.e("97189"),
                n.e("27660"),
                n.e("6287"),
                n.e("85484"),
                n.e("81510"),
                n.e("36407"),
                n.e("79705"),
                n.e("80287"),
                n.e("23924"),
                n.e("15510"),
                n.e("48226"),
                n.e("68201"),
                n.e("20287"),
                n.e("28367"),
                n.e("35429"),
                n.e("10471"),
                n.e("63232"),
                n.e("64827"),
                n.e("30938"),
                n.e("23808"),
                n.e("11301"),
                n.e("60235"),
                n.e("61737"),
                n.e("79428"),
                n.e("29963"),
                n.e("47834"),
                n.e("98329"),
                n.e("20317"),
                n.e("84569"),
                n.e("2368"),
                n.e("27084"),
                n.e("24313"),
                n.e("48405"),
                n.e("63185"),
                n.e("19551"),
                n.e("84150"),
                n.e("45959"),
                n.e("18573"),
                n.e("55057"),
                n.e("37794"),
                n.e("26073"),
                n.e("7743"),
                n.e("34303"),
                n.e("48172"),
                n.e("28866"),
                n.e("54961"),
                n.e("8304"),
                n.e("58038"),
                n.e("93159"),
                n.e("55936"),
                n.e("11566"),
                n.e("21106"),
                n.e("31988"),
                n.e("94723"),
                n.e("62931"),
                n.e("81987"),
                n.e("58007"),
                n.e("5812"),
                n.e("17363"),
                n.e("55411"),
                n.e("93103"),
                n.e("21921"),
                n.e("9233"),
                n.e("69747"),
                n.e("20683"),
                n.e("98765"),
                n.e("28083"),
                n.e("35771"),
                n.e("8563"),
                n.e("78453"),
                n.e("12542"),
                n.e("30788"),
                n.e("4193"),
                n.e("25246"),
                n.e("8377"),
                n.e("28610"),
                n.e("44571"),
                n.e("44795"),
                n.e("44928"),
                n.e("18489"),
                n.e("74610"),
                n.e("50535"),
                n.e("99549"),
                n.e("79211"),
                n.e("40204"),
                n.e("77467"),
                n.e("34936"),
                n.e("19815"),
                n.e("49013"),
                n.e("29260"),
                n.e("20965"),
                n.e("40393"),
                n.e("33448"),
                n.e("87732"),
                n.e("42324"),
                n.e("755"),
                n.e("46450"),
                n.e("31335"),
                n.e("96480"),
                n.e("79216"),
                n.e("21883"),
                n.e("84114"),
                n.e("32429"),
                n.e("15980"),
                n.e("29624"),
                n.e("36133"),
            ]).then(n.bind(n, 418838)),
        webpackId: 418838,
        name: "PopoutWindowCallTile",
    }),
    ha = (0, tu.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("6287"),
                n.e("79093"),
                n.e("28510"),
                n.e("72900"),
                n.e("63419"),
                n.e("32101"),
                n.e("69273"),
                n.e("31788"),
                n.e("77083"),
                n.e("63009"),
                n.e("84786"),
                n.e("41909"),
                n.e("63397"),
                n.e("45650"),
                n.e("97189"),
                n.e("27660"),
                n.e("85484"),
                n.e("81510"),
                n.e("36407"),
                n.e("79705"),
                n.e("55658"),
                n.e("87616"),
                n.e("76032"),
                n.e("33957"),
                n.e("8357"),
                n.e("49699"),
                n.e("43108"),
                n.e("35598"),
                n.e("84611"),
                n.e("45235"),
                n.e("63635"),
                n.e("66782"),
                n.e("92652"),
                n.e("45229"),
                n.e("3840"),
                n.e("81579"),
                n.e("46946"),
                n.e("10611"),
                n.e("4981"),
                n.e("35392"),
                n.e("9987"),
                n.e("80287"),
                n.e("55175"),
                n.e("47324"),
                n.e("23924"),
                n.e("15510"),
                n.e("48226"),
                n.e("19402"),
                n.e("13111"),
                n.e("68201"),
                n.e("20287"),
                n.e("28367"),
                n.e("35429"),
                n.e("10471"),
                n.e("63232"),
                n.e("64827"),
                n.e("30938"),
                n.e("23808"),
                n.e("11301"),
                n.e("60235"),
                n.e("61737"),
                n.e("79428"),
                n.e("29963"),
                n.e("47834"),
                n.e("98329"),
                n.e("20317"),
                n.e("84569"),
                n.e("2368"),
                n.e("27084"),
                n.e("24313"),
                n.e("48405"),
                n.e("63185"),
                n.e("19551"),
                n.e("84150"),
                n.e("45959"),
                n.e("18573"),
                n.e("55057"),
                n.e("37794"),
                n.e("26073"),
                n.e("7743"),
                n.e("34303"),
                n.e("48172"),
                n.e("28866"),
                n.e("54961"),
                n.e("8304"),
                n.e("58038"),
                n.e("93159"),
                n.e("55936"),
                n.e("11566"),
                n.e("21106"),
                n.e("31988"),
                n.e("94723"),
                n.e("62931"),
                n.e("81987"),
                n.e("58007"),
                n.e("5812"),
                n.e("17363"),
                n.e("34552"),
                n.e("55411"),
                n.e("93103"),
                n.e("58337"),
                n.e("26437"),
                n.e("13708"),
                n.e("76602"),
                n.e("28229"),
                n.e("71470"),
                n.e("91007"),
                n.e("68403"),
                n.e("76418"),
                n.e("21921"),
                n.e("9233"),
                n.e("88342"),
                n.e("69747"),
                n.e("40258"),
                n.e("20683"),
                n.e("66495"),
                n.e("91146"),
                n.e("42724"),
                n.e("43437"),
                n.e("39970"),
                n.e("82263"),
                n.e("42451"),
                n.e("30221"),
                n.e("8371"),
                n.e("8555"),
                n.e("86127"),
                n.e("6174"),
                n.e("39851"),
                n.e("58216"),
                n.e("98965"),
                n.e("72789"),
                n.e("6949"),
                n.e("29871"),
                n.e("17249"),
                n.e("41250"),
                n.e("35027"),
                n.e("84971"),
                n.e("53917"),
                n.e("9640"),
                n.e("62422"),
                n.e("15423"),
                n.e("26295"),
                n.e("88599"),
                n.e("36863"),
                n.e("1518"),
                n.e("67861"),
                n.e("15186"),
                n.e("98765"),
                n.e("23354"),
                n.e("89088"),
                n.e("82644"),
                n.e("37187"),
                n.e("71273"),
                n.e("27779"),
                n.e("75842"),
                n.e("12743"),
                n.e("10957"),
                n.e("55973"),
                n.e("20590"),
                n.e("45172"),
                n.e("35313"),
                n.e("65437"),
                n.e("34983"),
                n.e("63235"),
                n.e("74810"),
                n.e("28083"),
                n.e("80830"),
                n.e("86672"),
                n.e("3589"),
                n.e("86814"),
                n.e("52548"),
                n.e("35771"),
                n.e("22266"),
                n.e("53984"),
                n.e("59414"),
                n.e("80854"),
                n.e("79780"),
                n.e("35395"),
                n.e("43780"),
                n.e("14041"),
                n.e("46844"),
                n.e("45413"),
                n.e("22822"),
                n.e("75627"),
                n.e("90664"),
                n.e("79745"),
                n.e("34150"),
                n.e("64850"),
                n.e("72401"),
                n.e("22855"),
                n.e("70104"),
                n.e("68904"),
                n.e("68802"),
                n.e("52617"),
                n.e("8563"),
                n.e("2564"),
                n.e("47417"),
                n.e("19558"),
                n.e("58946"),
                n.e("14285"),
                n.e("95752"),
                n.e("78100"),
                n.e("78453"),
                n.e("8362"),
                n.e("80149"),
                n.e("2698"),
                n.e("62875"),
                n.e("4744"),
                n.e("87046"),
                n.e("12542"),
                n.e("501"),
                n.e("46769"),
                n.e("33297"),
                n.e("35321"),
                n.e("73384"),
                n.e("86243"),
                n.e("82783"),
                n.e("7833"),
                n.e("32209"),
                n.e("30788"),
                n.e("48295"),
                n.e("60249"),
                n.e("4193"),
                n.e("39171"),
                n.e("25246"),
                n.e("37021"),
                n.e("21049"),
                n.e("8377"),
                n.e("28610"),
                n.e("36564"),
                n.e("44571"),
                n.e("44795"),
                n.e("80436"),
                n.e("71268"),
                n.e("95370"),
                n.e("97784"),
                n.e("50033"),
                n.e("10014"),
                n.e("84783"),
                n.e("44928"),
                n.e("33416"),
                n.e("792"),
                n.e("37752"),
                n.e("3217"),
                n.e("47678"),
                n.e("92822"),
                n.e("5557"),
                n.e("95340"),
                n.e("62718"),
                n.e("93907"),
                n.e("3998"),
                n.e("89916"),
                n.e("90301"),
                n.e("68763"),
                n.e("15188"),
                n.e("61156"),
                n.e("15109"),
                n.e("18489"),
                n.e("9291"),
                n.e("91671"),
                n.e("29666"),
                n.e("58273"),
                n.e("60773"),
                n.e("92295"),
                n.e("19454"),
                n.e("20930"),
                n.e("16767"),
                n.e("74610"),
                n.e("50535"),
                n.e("44801"),
                n.e("38056"),
                n.e("26001"),
                n.e("36926"),
                n.e("99549"),
                n.e("14591"),
                n.e("52111"),
                n.e("8018"),
                n.e("6841"),
                n.e("79211"),
                n.e("63071"),
                n.e("16988"),
                n.e("57458"),
                n.e("59797"),
                n.e("8829"),
                n.e("86697"),
                n.e("20379"),
                n.e("69765"),
                n.e("76413"),
                n.e("3303"),
                n.e("1243"),
                n.e("62304"),
                n.e("19193"),
                n.e("80945"),
                n.e("18265"),
                n.e("75859"),
                n.e("29080"),
                n.e("96804"),
                n.e("95998"),
                n.e("36419"),
                n.e("80262"),
                n.e("68530"),
                n.e("42234"),
                n.e("78046"),
                n.e("28850"),
                n.e("74678"),
                n.e("20045"),
                n.e("81189"),
                n.e("92077"),
                n.e("10520"),
                n.e("12965"),
                n.e("203"),
                n.e("4774"),
                n.e("49629"),
                n.e("26294"),
                n.e("78601"),
                n.e("89523"),
                n.e("80407"),
                n.e("42726"),
                n.e("34546"),
                n.e("77663"),
                n.e("41701"),
                n.e("40204"),
                n.e("77467"),
                n.e("39894"),
                n.e("47057"),
                n.e("86902"),
                n.e("68083"),
                n.e("2855"),
                n.e("34936"),
                n.e("19815"),
                n.e("48730"),
                n.e("71467"),
                n.e("49013"),
                n.e("29260"),
                n.e("51892"),
                n.e("20965"),
                n.e("41838"),
                n.e("46045"),
                n.e("40393"),
                n.e("3707"),
                n.e("33448"),
                n.e("15275"),
                n.e("87732"),
                n.e("42324"),
                n.e("16054"),
                n.e("26516"),
                n.e("755"),
                n.e("33869"),
                n.e("46450"),
                n.e("31335"),
                n.e("96480"),
                n.e("56373"),
                n.e("74821"),
                n.e("79216"),
                n.e("20577"),
                n.e("50068"),
                n.e("21883"),
                n.e("619"),
                n.e("26792"),
                n.e("78047"),
                n.e("43710"),
                n.e("90274"),
                n.e("4374"),
                n.e("84114"),
                n.e("22094"),
                n.e("1485"),
                n.e("32429"),
                n.e("64287"),
                n.e("45916"),
                n.e("70011"),
                n.e("91553"),
                n.e("61924"),
                n.e("15980"),
                n.e("30761"),
                n.e("70217"),
                n.e("36847"),
                n.e("42492"),
                n.e("75525"),
                n.e("83701"),
                n.e("78827"),
                n.e("28732"),
                n.e("36308"),
            ]).then(n.bind(n, 911315)),
        webpackId: 911315,
        name: "PopoutWindowStageChannelCall",
    }),
    hl = (0, tu.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("6287"),
                n.e("55175"),
                n.e("47324"),
                n.e("63419"),
                n.e("32101"),
                n.e("45235"),
                n.e("4981"),
                n.e("72900"),
                n.e("35392"),
                n.e("31788"),
                n.e("41909"),
                n.e("9987"),
                n.e("69273"),
                n.e("77083"),
                n.e("63009"),
                n.e("84786"),
                n.e("63397"),
                n.e("45650"),
                n.e("97189"),
                n.e("27660"),
                n.e("85484"),
                n.e("81510"),
                n.e("36407"),
                n.e("79705"),
                n.e("80287"),
                n.e("8357"),
                n.e("55658"),
                n.e("38552"),
                n.e("79093"),
                n.e("28510"),
                n.e("87616"),
                n.e("76032"),
                n.e("33957"),
                n.e("49699"),
                n.e("43108"),
                n.e("35598"),
                n.e("84611"),
                n.e("63635"),
                n.e("66782"),
                n.e("92652"),
                n.e("45229"),
                n.e("3840"),
                n.e("81579"),
                n.e("46946"),
                n.e("52204"),
                n.e("11491"),
                n.e("66850"),
                n.e("22155"),
                n.e("13403"),
                n.e("23924"),
                n.e("15510"),
                n.e("48226"),
                n.e("19402"),
                n.e("13111"),
                n.e("68201"),
                n.e("74968"),
                n.e("92436"),
                n.e("20287"),
                n.e("28367"),
                n.e("35429"),
                n.e("10471"),
                n.e("63232"),
                n.e("64827"),
                n.e("30938"),
                n.e("23808"),
                n.e("11301"),
                n.e("60235"),
                n.e("61737"),
                n.e("79428"),
                n.e("29963"),
                n.e("47834"),
                n.e("98329"),
                n.e("20317"),
                n.e("84569"),
                n.e("2368"),
                n.e("27084"),
                n.e("24313"),
                n.e("48405"),
                n.e("63185"),
                n.e("19551"),
                n.e("84150"),
                n.e("45959"),
                n.e("18573"),
                n.e("55057"),
                n.e("37794"),
                n.e("26073"),
                n.e("7743"),
                n.e("34303"),
                n.e("48172"),
                n.e("28866"),
                n.e("54961"),
                n.e("8304"),
                n.e("58038"),
                n.e("93159"),
                n.e("55936"),
                n.e("11566"),
                n.e("21106"),
                n.e("31988"),
                n.e("94723"),
                n.e("62931"),
                n.e("81987"),
                n.e("58007"),
                n.e("5812"),
                n.e("17363"),
                n.e("34552"),
                n.e("55411"),
                n.e("93103"),
                n.e("58337"),
                n.e("26437"),
                n.e("13708"),
                n.e("76602"),
                n.e("28229"),
                n.e("71470"),
                n.e("91007"),
                n.e("68403"),
                n.e("76418"),
                n.e("21921"),
                n.e("9233"),
                n.e("88342"),
                n.e("69747"),
                n.e("40258"),
                n.e("20683"),
                n.e("66495"),
                n.e("91146"),
                n.e("42724"),
                n.e("43437"),
                n.e("39970"),
                n.e("82263"),
                n.e("42451"),
                n.e("30221"),
                n.e("8371"),
                n.e("8555"),
                n.e("86127"),
                n.e("6174"),
                n.e("39851"),
                n.e("58216"),
                n.e("98965"),
                n.e("72789"),
                n.e("6949"),
                n.e("29871"),
                n.e("17249"),
                n.e("41250"),
                n.e("35027"),
                n.e("84971"),
                n.e("53917"),
                n.e("9640"),
                n.e("62422"),
                n.e("15423"),
                n.e("26295"),
                n.e("88599"),
                n.e("36863"),
                n.e("1518"),
                n.e("67861"),
                n.e("15186"),
                n.e("98765"),
                n.e("23354"),
                n.e("89088"),
                n.e("82644"),
                n.e("37187"),
                n.e("71273"),
                n.e("27779"),
                n.e("75842"),
                n.e("12743"),
                n.e("10957"),
                n.e("55973"),
                n.e("20590"),
                n.e("45172"),
                n.e("35313"),
                n.e("65437"),
                n.e("34983"),
                n.e("63235"),
                n.e("74810"),
                n.e("28083"),
                n.e("80830"),
                n.e("86672"),
                n.e("3589"),
                n.e("86814"),
                n.e("52548"),
                n.e("35771"),
                n.e("22266"),
                n.e("53984"),
                n.e("59414"),
                n.e("80854"),
                n.e("79780"),
                n.e("35395"),
                n.e("43780"),
                n.e("14041"),
                n.e("46844"),
                n.e("45413"),
                n.e("22822"),
                n.e("75627"),
                n.e("90664"),
                n.e("79745"),
                n.e("34150"),
                n.e("64850"),
                n.e("72401"),
                n.e("22855"),
                n.e("70104"),
                n.e("68904"),
                n.e("68802"),
                n.e("52617"),
                n.e("8563"),
                n.e("2564"),
                n.e("47417"),
                n.e("19558"),
                n.e("58946"),
                n.e("14285"),
                n.e("95752"),
                n.e("78100"),
                n.e("78453"),
                n.e("8362"),
                n.e("80149"),
                n.e("2698"),
                n.e("62875"),
                n.e("4744"),
                n.e("87046"),
                n.e("12542"),
                n.e("501"),
                n.e("46769"),
                n.e("33297"),
                n.e("35321"),
                n.e("73384"),
                n.e("86243"),
                n.e("82783"),
                n.e("7833"),
                n.e("32209"),
                n.e("30788"),
                n.e("48295"),
                n.e("60249"),
                n.e("4193"),
                n.e("39171"),
                n.e("25246"),
                n.e("37021"),
                n.e("21049"),
                n.e("8377"),
                n.e("28610"),
                n.e("36564"),
                n.e("44571"),
                n.e("44795"),
                n.e("80436"),
                n.e("71268"),
                n.e("95370"),
                n.e("97784"),
                n.e("50033"),
                n.e("10014"),
                n.e("84783"),
                n.e("44928"),
                n.e("33416"),
                n.e("792"),
                n.e("37752"),
                n.e("3217"),
                n.e("47678"),
                n.e("92822"),
                n.e("5557"),
                n.e("95340"),
                n.e("62718"),
                n.e("93907"),
                n.e("3998"),
                n.e("89916"),
                n.e("90301"),
                n.e("68763"),
                n.e("15188"),
                n.e("61156"),
                n.e("15109"),
                n.e("18489"),
                n.e("9291"),
                n.e("91671"),
                n.e("29666"),
                n.e("58273"),
                n.e("60773"),
                n.e("92295"),
                n.e("19454"),
                n.e("20930"),
                n.e("16767"),
                n.e("74610"),
                n.e("50535"),
                n.e("44801"),
                n.e("38056"),
                n.e("26001"),
                n.e("36926"),
                n.e("99549"),
                n.e("14591"),
                n.e("52111"),
                n.e("8018"),
                n.e("6841"),
                n.e("79211"),
                n.e("63071"),
                n.e("16988"),
                n.e("57458"),
                n.e("59797"),
                n.e("8829"),
                n.e("86697"),
                n.e("90213"),
                n.e("20379"),
                n.e("69765"),
                n.e("76413"),
                n.e("3303"),
                n.e("1243"),
                n.e("62304"),
                n.e("19193"),
                n.e("80945"),
                n.e("18265"),
                n.e("75859"),
                n.e("29080"),
                n.e("96804"),
                n.e("44057"),
                n.e("95998"),
                n.e("87317"),
                n.e("36419"),
                n.e("80262"),
                n.e("10943"),
                n.e("68530"),
                n.e("42234"),
                n.e("66783"),
                n.e("78046"),
                n.e("28850"),
                n.e("11617"),
                n.e("74678"),
                n.e("20045"),
                n.e("81189"),
                n.e("92077"),
                n.e("10520"),
                n.e("12965"),
                n.e("203"),
                n.e("4774"),
                n.e("49629"),
                n.e("26294"),
                n.e("78601"),
                n.e("89523"),
                n.e("80407"),
                n.e("42726"),
                n.e("34546"),
                n.e("77663"),
                n.e("41701"),
                n.e("40204"),
                n.e("77467"),
                n.e("39894"),
                n.e("47057"),
                n.e("86902"),
                n.e("68083"),
                n.e("2855"),
                n.e("34936"),
                n.e("19815"),
                n.e("48730"),
                n.e("71467"),
                n.e("49013"),
                n.e("29260"),
                n.e("51892"),
                n.e("20965"),
                n.e("41838"),
                n.e("46045"),
                n.e("40393"),
                n.e("3707"),
                n.e("33448"),
                n.e("3304"),
                n.e("15275"),
                n.e("87732"),
                n.e("42324"),
                n.e("16054"),
                n.e("26516"),
                n.e("755"),
                n.e("77602"),
                n.e("33869"),
                n.e("46450"),
                n.e("14020"),
                n.e("31335"),
                n.e("96480"),
                n.e("86300"),
                n.e("74821"),
                n.e("79216"),
                n.e("50068"),
                n.e("21883"),
                n.e("619"),
                n.e("81398"),
                n.e("53275"),
                n.e("15057"),
                n.e("26792"),
                n.e("78047"),
                n.e("43710"),
                n.e("4374"),
                n.e("84114"),
                n.e("22094"),
                n.e("1485"),
                n.e("32429"),
                n.e("45916"),
                n.e("22511"),
                n.e("26223"),
                n.e("70011"),
                n.e("91553"),
                n.e("61924"),
                n.e("35874"),
                n.e("15980"),
                n.e("30761"),
                n.e("70217"),
                n.e("92539"),
                n.e("36847"),
                n.e("42492"),
                n.e("75525"),
                n.e("35895"),
                n.e("97934"),
                n.e("68709"),
                n.e("14842"),
                n.e("71138"),
            ]).then(n.bind(n, 767675)),
        webpackId: 767675,
        name: "PopoutWindowRTCDebug",
    }),
    hs = (0, tu.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("83004"),
                n.e("55411"),
                n.e("93103"),
                n.e("74610"),
                n.e("19815"),
                n.e("30761"),
                n.e("56385"),
                n.e("32986"),
                n.e("13492"),
            ]).then(n.bind(n, 481477)),
        webpackId: 481477,
        name: "PopoutWindowActivity",
    });
class ho extends X.A {
    _observer = null;
    _initialize() {
        W.h.subscribe("CHANNEL_CALL_POPOUT_WINDOW_OPEN", this.handleOpenChannelCallPopout),
            W.h.subscribe("CALL_TILE_POPOUT_WINDOW_OPEN", this.handleOpenCallTilePopout),
            W.h.subscribe("RTC_DEBUG_POPOUT_WINDOW_OPEN", this.handleOpenRTCDebugPopout),
            W.h.subscribe("ACTIVITY_POPOUT_WINDOW_OPEN", this.handleOpenActivityPopout),
            this.initializeStyleSheetObserver();
    }
    _terminate() {
        W.h.unsubscribe("CHANNEL_CALL_POPOUT_WINDOW_OPEN", this.handleOpenChannelCallPopout),
            W.h.unsubscribe("CALL_TILE_POPOUT_WINDOW_OPEN", this.handleOpenCallTilePopout),
            W.h.unsubscribe("RTC_DEBUG_POPOUT_WINDOW_OPEN", this.handleOpenRTCDebugPopout),
            W.h.unsubscribe("ACTIVITY_POPOUT_WINDOW_OPEN", this.handleOpenActivityPopout),
            this.terminateStyleSheetObserver();
    }
    handleOpenChannelCallPopout(e) {
        let { channel: t } = e;
        hn.open(
            D.MLl.CHANNEL_CALL_POPOUT,
            (e) =>
                t.isGuildStageVoice()
                    ? (0, E.jsx)(ha, { windowKey: e, channelId: t.id })
                    : (0, E.jsx)(hi, { windowKey: e, channelId: t.id }),
            { defaultWidth: 854, defaultHeight: 480 },
        );
    }
    handleOpenCallTilePopout = (e) => {
        let { channelId: t, participantId: n } = e,
            i = (0, ht.A)(t, n);
        hn.open(i, (e) => (0, E.jsx)(hr, { windowKey: e, channelId: t, participantId: n }), {
            defaultWidth: 854,
            defaultHeight: 480,
        });
    };
    initializeStyleSheetObserver() {
        (this._observer = new MutationObserver(function (e) {
            for (let t of e)
                if ("childList" === t.type) {
                    for (let e of t.addedNodes)
                        if (e.nodeType === Node.ELEMENT_NODE && "LINK" === e.tagName && "stylesheet" === e.rel) {
                            let t = e.href,
                                n = e.integrity;
                            hn.addStylesheet(t, n);
                        }
                }
        })),
            this._observer.observe(document.head, { childList: !0 });
    }
    terminateStyleSheetObserver() {
        null != this._observer && (this._observer.disconnect(), (this._observer = null));
    }
    handleOpenRTCDebugPopout() {
        hn.open(D.MLl.RTC_DEBUG_POPOUT, (e) => (0, E.jsx)(hl, { windowKey: e }), {
            defaultWidth: 854,
            defaultHeight: 480,
        });
    }
    handleOpenActivityPopout() {
        hn.open(D.MLl.ACTIVITY_POPOUT, (e) => (0, E.jsx)(hs, { windowKey: e }), {
            defaultWidth: 854,
            defaultHeight: 480,
        });
    }
}
let hd = new ho();
var hc = n(123924);
class hu extends X.A {
    _initialize() {
        eN.A.addChangeListener(this.handlePopoutWindowChange),
            W.h.subscribe("WINDOW_FOCUS", this.handleMainWindowFocus);
    }
    _terminate() {
        eN.A.removeChangeListener(this.handlePopoutWindowChange),
            W.h.unsubscribe("WINDOW_FOCUS", this.handleMainWindowFocus),
            this.injectWindowAnimationFrame(window);
    }
    handleMainWindowFocus = (e) => {
        e.focused && e.windowId === window.__DISCORD_WINDOW_ID && this.injectWindowAnimationFrame(window);
    };
    handlePopoutWindowChange = () => {
        let e = eN.A.getWindowKeys().find((e) => eN.A.getWindowFocused(e));
        if (null == e) return this.injectWindowAnimationFrame(window);
        let t = eN.A.getWindow(e);
        if (null == t || t.closed) return this.injectWindowAnimationFrame(window);
        this.injectWindowAnimationFrame(t);
    };
    injectWindowAnimationFrame(e) {
        let t = (t) => e.requestAnimationFrame(t),
            n = (t) => e.cancelAnimationFrame(t);
        a6.A.inject.RequestAnimationFrame(t), a6.A.inject.CancelAnimationFrame(n), hc.Globals.frameLoop?.setRAF(t, n);
    }
}
let hA = new hu();
var hh = n(877624),
    h_ = n(835095),
    hE = n(354670),
    hp = n(40185),
    hm = n(881489),
    hI = n(374200),
    hg = n(852218),
    hC = n(231265),
    hT = n(635980);
let hf = "PremiumServerDriveAnnouncementModal";
class hN extends X.A {
    _initialize() {
        W.h.subscribe("PREMIUM_MARKETING_DATA_READY", this.mayShowAnnouncementModal),
            W.h.subscribe("PREMIUM_MARKETING_PREVIEW", this.handlePreview),
            W.h.subscribe("ACTIVE_PROMOTIONS_FETCH_SUCCESS", this.handleActivePromotionsFetchSuccess),
            W.h.subscribe("BILLING_USER_OFFER_FETCH_SUCCESS", this.handleUserOfferFetchSuccess),
            W.h.subscribe("ENTITLEMENT_CREATE", this.handleEntitlementCreate);
    }
    _terminate() {
        W.h.unsubscribe("PREMIUM_MARKETING_DATA_READY", this.mayShowAnnouncementModal),
            W.h.unsubscribe("PREMIUM_MARKETING_PREVIEW", this.handlePreview),
            W.h.unsubscribe("ACTIVE_PROMOTIONS_FETCH_SUCCESS", this.handleActivePromotionsFetchSuccess),
            W.h.unsubscribe("BILLING_USER_OFFER_FETCH_SUCCESS", this.handleUserOfferFetchSuccess),
            W.h.unsubscribe("ENTITLEMENT_CREATE", this.handleEntitlementCreate);
    }
    maybeShowAnnouncementModalFromPromotions = (e) => {
        for (let t of e)
            if (null != t.marketingComponents) {
                if (null != t.trialId) {
                    let e = hE.A.getUserTrialOffer(t.trialId);
                    if (null == e || (null != e.expires_at && Date.parse(e.expires_at) < Date.now())) continue;
                }
                for (let e of t.marketingComponents)
                    if (e.component_type === hh.C.ANNOUNCEMENT_MODAL)
                        return void this.maybeOpenServerDriveAnnouncementModal(e.id, e.promotion_id, e.properties, !1);
            }
        (0, hm.al)(), (0, hm.QM)();
    };
    handleActivePromotionsFetchSuccess = (e) => {
        let { promotions: t } = e;
        this.maybeShowAnnouncementModalFromPromotions(t.map((e) => h_.A.createFromServer(e)));
    };
    handleUserOfferFetchSuccess = (e) => {
        let { userTrialOffer: t } = e;
        null != t &&
            this.maybeShowAnnouncementModalFromPromotions(Object.values(hI.A.promotionsByType[hg.pt.MARKETING_MOMENT]));
    };
    handleEntitlementCreate = (e) => {
        let { entitlement: t } = e;
        cJ.P.isDisallowPopupsSet() || t.source_type !== D.GD.REVERSE_TRIAL || (0, hm.al)();
    };
    maybeOpenServerDriveAnnouncementModal = async (e, t, i, r) => {
        if ((0, T.hasModalOpen)(hf)) return !1;
        let a = (0, hT.H)({ promotionId: t, content: i, isPreview: r });
        if (null != a)
            return (
                (!1 !== r || a?.contentIdentifier !== "summer_bogo_content" || !!(await (0, hC.C)())) &&
                ((0, T.openModalLazy)(
                    async () => {
                        let { default: i } = await Promise.resolve().then(n.bind(n, 635980));
                        return (n) =>
                            (0, E.jsx)(i, { renderModalProps: n, componentId: e, promotionId: t, properties: a });
                    },
                    { modalKey: hf },
                ),
                !0)
            );
    };
    handlePreview = (e) => {
        let { data: t } = e;
        this.maybeOpenServerDriveAnnouncementModal(t.id, t.promotion_id, t.properties, !0);
    };
    mayShowAnnouncementModal = async () => {
        if ((await (0, hp.hb)(), cJ.P.isDisallowPopupsSet())) return;
        let e = iu.default.getCurrentUser();
        if (null != e && !e.verified) return;
    };
}
let hS = new hN();
var hL = n(499454),
    hO = n(17159),
    hy = n(688796),
    hb = n(207803),
    hv = n(84540),
    hP = n(927578),
    hR = n(919395),
    hD = n(339984);
class hw extends X.A {
    _initialize() {
        W.h.subscribe("PROFILE_CUSTOMIZATION_OPEN_PREVIEW_MODAL", this.maybeOpenProfilePreviewModal);
    }
    _terminate() {
        W.h.unsubscribe("PROFILE_CUSTOMIZATION_OPEN_PREVIEW_MODAL", this.maybeOpenProfilePreviewModal);
    }
    maybeOpenProfilePreviewModal(e) {
        return e.uploadType === hD.HL.AVATAR
            ? ((e) => {
                  let { image: t, file: n, guildId: i, isTryItOut: r } = e;
                  if (r) return void (0, hb.e$)(t);
                  let a = iu.default.getCurrentUser();
                  if (hP.Ay.canUseAnimatedAvatar(a) || "image/gif" !== n.type) {
                      (0, hv.p)({ guildId: i, avatar: t }), (0, hR.WU)("set");
                      return;
                  }
                  null != a && (0, hy.G)({ uploadType: hD.HL.AVATAR });
              })(e)
            : e.uploadType === hD.HL.BANNER
              ? ((e) => {
                    let { image: t, guildId: n, isTryItOut: i } = e,
                        r = t.imageUri;
                    if (i) return void (0, hb.xe)(r);
                    let a = iu.default.getCurrentUser(),
                        l = hP.Ay.canUsePremiumProfileCustomization(a);
                    hP.Ay.canUsePremiumProfileCustomization(a)
                        ? (0, hv.p)({ guildId: n, banner: r })
                        : null == a || l || (0, hy.G)({ uploadType: hD.HL.BANNER });
                })(e)
              : void 0;
    }
}
let hM = new hw();
var hx = n(453314),
    hU = n(569745),
    hG = n(655087),
    hj =
        (((c = {})[(c.UNHANDLED = -1)] = "UNHANDLED"),
        (c[(c.NOMINAL = 0)] = "NOMINAL"),
        (c[(c.FAIR = 1)] = "FAIR"),
        (c[(c.SERIOUS = 2)] = "SERIOUS"),
        (c[(c.CRITICAL = 3)] = "CRITICAL"),
        c);
function hk() {
    var e = hG.A.getRawThermalState();
    if (null == e) return -1;
    if ((0, U.isIOS)()) return e;
    if (!(0, U.isAndroid)()) return -1;
    switch (e) {
        case 0:
            return 0;
        case 1:
        case 2:
            return 1;
        case 3:
            return 2;
        case 4:
        case 5:
        case 6:
            return 3;
        default:
            return -1;
    }
}
var hV = n(792620),
    hF = n(290863),
    hH = n(90924),
    hB = n(969151),
    hY = n(562153),
    h$ = n(639621);
function hz() {
    let e = rb.Ay.getCurrentEmbeddedActivity();
    if (null == e) return { participants: [] };
    let t = (0, hB.D)(e.location),
        n = (0, hB.H)(e.location);
    return {
        participants: Array.from(e.userIds, (e) => {
            let i = iu.default.getUser(e);
            if (null == i) return;
            let r = (0, hY.tJ)(t, n, i);
            return { ...(0, h$.A)(i), nickname: r ?? void 0 };
        }).filter(re.Vq),
    };
}
let hq = { [dr.sm.ANY]: [dr.VH] };
var hK = n(360469),
    hW = n(179771),
    hX = n(818348);
let hZ = {
        [hX.e$.INITIATE_IMAGE_UPLOAD]: { request: void 0, response: (e) => ({ image_url: e.string().required() }) },
        [hX.e$.OPEN_SHARE_MOMENT_DIALOG]: {
            response: void 0,
            request: (e) => ({ mediaUrl: e.string().required().max(1024) }),
        },
        [hX.e$.AUTHENTICATE]: {
            request: (e) => ({ access_token: e.string().allow(null).optional() }),
            response: (e) => ({
                access_token: e.string().required(),
                user: e
                    .object({
                        username: e.string().required(),
                        discriminator: e.string().required(),
                        id: e.string().required(),
                        avatar: e.string().allow(null),
                        public_flags: e.number().required(),
                        global_name: e.string().allow(null),
                    })
                    .required(),
                scopes: e
                    .array()
                    .items(e.string().valid(...Object.values(hW.F)))
                    .required(),
                expires: e.string().required(),
                application: e
                    .object({
                        description: e.string().required(),
                        icon: e.string().allow(null),
                        id: e.string().required(),
                        rpc_origins: e.array().items(e.string()).optional(),
                        name: e.string().required(),
                    })
                    .required(),
            }),
        },
        [hX.e$.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS]: {
            request: void 0,
            response: (e) => ({
                participants: e
                    .array()
                    .items(
                        hJ(e)
                            .keys({ nickname: e.string().description("Server nickname. Not unique.") })
                            .required(),
                    )
                    .required(),
            }),
        },
        [hX.e$.SHARE_INTERACTION]: {
            request: (e) => ({
                command: e.string().required(),
                options: e.array().items(e.object({ name: e.string().required(), value: e.string().required() })),
                content: e.string().max(2e3),
                require_launch_channel: e.boolean(),
                preview_image: e.object({
                    height: e.number().required(),
                    url: e.string().required(),
                    width: e.number().required(),
                }),
                components: e.array().items(h0(e)),
                pid: e.number(),
            }),
            response: (e) => ({ success: e.boolean().required() }),
        },
        [hX.e$.SHARE_LINK]: {
            request: (e) => ({
                custom_id: e.string().max(64),
                message: e.string().max(1e3).required(),
                link_id: e.string().max(64),
            }),
            response: (e) => ({
                success: e.boolean().required(),
                didCopyLink: e.boolean().required(),
                didSendMessage: e.boolean().required(),
            }),
        },
        [hX.e$.GET_RELATIONSHIPS]: {
            request: void 0,
            response: (e) => ({
                relationships: e
                    .array()
                    .required()
                    .items(
                        e.object({
                            type: e.number().required(),
                            user: hJ(e).required(),
                            presence: e.object({ status: e.string().required(), activity: hQ(e).allow(null) }),
                        }),
                    ),
            }),
        },
        [hX.e$.INVITE_USER_EMBEDDED]: {
            request: (e) => ({ user_id: e.string().required(), content: e.string().min(0).max(1024) }),
            response: void 0,
        },
        [hX.e$.GET_USER]: {
            request: (e) => ({ id: e.string().max(64).required() }),
            response: (e) => hJ(e).allow(null),
        },
        [hX.e$.GET_QUEST_ENROLLMENT_STATUS]: {
            request: (e) => ({ quest_id: e.string().required() }),
            response: (e) => ({
                quest_id: e.string().required(),
                is_enrolled: e.boolean().required(),
                enrolled_at: e.string().allow(null).optional(),
            }),
        },
        [hX.e$.QUEST_START_TIMER]: {
            request: (e) => ({ quest_id: e.string().required() }),
            response: (e) => ({ success: e.boolean().required() }),
        },
        [hX.e$.GET_QUESTS]: {
            request: void 0,
            response: (e) => ({
                quests: e
                    .array()
                    .items(
                        e.object({
                            quest_id: e.string().required(),
                            enrolled_at: e.string().allow(null).optional(),
                            external_cta_url: e.string().required(),
                        }),
                    )
                    .required(),
            }),
        },
        [hX.e$.REQUEST_PROXY_TICKET_REFRESH]: { request: void 0, response: (e) => ({ ticket: e.string().required() }) },
    },
    hQ = (e) =>
        e.object({
            session_id: e.string().optional(),
            type: e.number().optional(),
            name: e.string().required(),
            url: e.string().allow(null).optional(),
            application_id: e.string().optional(),
            status_display_type: e.number().optional(),
            state: e.string().optional(),
            state_url: e.string().optional(),
            details: e.string().optional(),
            details_url: e.string().optional(),
            emoji: e
                .object({
                    name: e.string().required(),
                    id: e.string().allow(null).optional(),
                    animated: e.bool().optional().allow(null),
                })
                .allow(null)
                .optional(),
            assets: e
                .object({
                    large_image: e.string().optional(),
                    large_text: e.string().optional(),
                    large_url: e.string().optional(),
                    small_image: e.string().optional(),
                    small_text: e.string().optional(),
                    small_url: e.string().optional(),
                })
                .optional(),
            timestamps: e.object({ start: e.number().optional(), end: e.number().optional() }).optional(),
            party: e
                .object({
                    id: e.string().optional(),
                    size: e.array().items(e.number()).length(2).optional(),
                    privacy: e.number().optional(),
                })
                .optional(),
            secrets: e.object({ match: e.string().optional(), join: e.string().optional() }).optional(),
            sync_id: e.string().optional(),
            created_at: e.number().optional(),
            instance: e.bool().optional(),
            flags: e.number().optional(),
            metadata: e.object().optional(),
            platform: e.string().optional(),
            supported_platforms: e.array().items(e.string()).optional(),
            buttons: e.array().items(e.string()).optional(),
            hangStatus: e.string().optional(),
        }),
    hJ = (e) =>
        e
            .object({
                id: e.string().required().description("User ID"),
                username: e.string().required(),
                global_name: e.string().allow(null).description("Global Discord name. Not unique."),
                discriminator: e
                    .string()
                    .required()
                    .description("Global name discriminator. Will be 0 if a unique username"),
                avatar: e.string().allow(null).description("User Avatar ID"),
                flags: e.number().required().description("Public user flags"),
                bot: e.bool().required().description("If a bot user."),
                avatar_decoration_data: e
                    .object({ asset: e.string().allow(null), skuId: e.string(), expiresAt: e.number() })
                    .allow(null)
                    .description("Details about avatar decoration"),
                premium_type: e.number().allow(null).description("Nitro premium type"),
            })
            .description("Discord User"),
    h0 = (e) => e.object({ type: e.number().valid(1).required(), components: e.array().max(5).items(h1(e)) }),
    h1 = (e) =>
        e.object({
            type: e.number().valid(2).required(),
            style: e.number().min(1).max(5).required(),
            label: e.string().max(80).description("Text that appears on the button"),
            custom_id: e
                .string()
                .max(100)
                .description("Developer-defined identifier for the button; max 100 characters"),
        });
function h8(e, t) {
    let { scope: n, handler: i } = t,
        r = { scope: n, handler: i },
        a = hZ[e]?.request,
        l = null;
    return (
        null != a &&
            (r.validation = function (e) {
                return null == l && (l = e.object(a(e)).required().unknown(!0)), l;
            }),
        r
    );
}
var h3 = n(20015),
    h2 = n(636401);
function h7() {
    let e = rb.Ay.getConnectedActivityChannelId();
    return i6.A.getChannel(e);
}
let h4 = {
    [D.e$_.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS]: h8(D.e$_.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS, {
        scope: hq,
        handler(e) {
            let { socket: t } = e;
            return (0, hH.lG)(t.transport), hz();
        },
    }),
    [D.e$_.REQUEST_PROXY_TICKET_REFRESH]: h8(D.e$_.REQUEST_PROXY_TICKET_REFRESH, {
        scope: hq,
        async handler(e) {
            let { socket: t } = e;
            (0, hH.lG)(t.transport);
            let n = (0, hH.D2)(t.application);
            if (!(0, h3.n)(t.application, D.gfo.EMBEDDED))
                throw new h2.A(
                    { errorCode: D.Lw6.UNAUTHORIZED_FOR_APPLICATION },
                    "This application cannot access this API",
                );
            let i = h7();
            try {
                return { ticket: await (0, tV.D2)(n, i?.id) };
            } catch (e) {
                throw new h2.A({ errorCode: D.Lw6.UNKNOWN_ERROR }, "Failed to create proxy ticket");
            }
        },
    }),
};
var h6 = n(636537),
    h5 = n(458664),
    h9 = n(977445);
function _e(e) {
    return e.object().unknown(!0);
}
let _t = {
        [D.e$_.SEND_ANALYTICS_EVENT]: {
            validation: (e) =>
                _e(e)
                    .required()
                    .keys({ event_name: e.string().required(), event_properties: _e(e).required() }),
            handler(e) {
                let {
                    socket: t,
                    args: { event_name: n, event_properties: i },
                } = e;
                (0, hH.lG)(t.transport), (0, hH.D2)(t.application);
                let r = t.application.id,
                    a = h7(),
                    l = a?.getGuildId(),
                    s = iY.A.getApplication(r);
                if (!(0, h3.n)(s, D.gfo.EMBEDDED_FIRST_PARTY))
                    throw new h2.A({ errorCode: D.Lw6.INVALID_COMMAND }, "This application cannot access this API");
                let o = (0, h5.D)(r),
                    d = {
                        activity_application_id: r,
                        activity_channel_type: a?.type,
                        activity_guild_id: l,
                        activity_user_session_id: o?.activityUserSessionId,
                    };
                ec.default.track(n, { ...d, ...i });
            },
        },
        [D.e$_.GET_APPLICATION_TICKET]: {
            scope: dr.hj,
            handler(e) {
                let { socket: t } = e,
                    n = t.application.id;
                if (null == n) throw new h2.A({ errorCode: D.Lw6.INVALID_COMMAND }, "No application.");
                return h6.Bo.post({
                    url: D.Rsh.APPLICATION_TICKET(n),
                    body: { test_mode: (0, h9.F)(n) },
                    retries: 3,
                    oldFormErrors: !0,
                    rejectWithError: !1,
                }).then((e) => {
                    let { body: t } = e;
                    return t;
                });
            },
        },
    },
    _n = {
        [D.e$_.SET_CERTIFIED_DEVICES]: {
            scope: { [dr.sm.ANY]: [hW.F.RPC, dr.hj] },
            validation: (e) =>
                _e(e)
                    .required()
                    .keys({
                        devices: e.array().items(
                            _e(e).keys({
                                type: e
                                    .string()
                                    .required()
                                    .valid([eO.oh.AUDIO_INPUT, eO.oh.AUDIO_OUTPUT, eO.oh.VIDEO_INPUT]),
                                id: e.string().required().min(1),
                                vendor: _e(e)
                                    .required()
                                    .keys({ name: e.string().min(1), url: e.string().min(1) }),
                                model: _e(e)
                                    .required()
                                    .keys({ name: e.string().min(1), url: e.string().min(1) }),
                                related: e.array().items(e.string().min(1)),
                                echo_cancellation: e.boolean(),
                                noise_suppression: e.boolean(),
                                automatic_gain_control: e.boolean(),
                                hardware_mute: e.boolean(),
                            }),
                        ),
                    }),
            handler(e) {
                var t, n;
                let {
                    socket: i,
                    args: { devices: r },
                } = e;
                if (null == i.application.id) throw new h2.A({ errorCode: D.Lw6.INVALID_COMMAND }, "No application.");
                (t = i.application.id),
                    (n = r.map((e) => ({
                        type: e.type,
                        id: e.id,
                        vendor: e.vendor,
                        model: e.model,
                        related: e.related.filter((e) => r.some((t) => t.id === e)),
                        echoCancellation: e.echo_cancellation,
                        noiseSuppression: e.noise_suppression,
                        automaticGainControl: e.automatic_gain_control,
                        hardwareMute: e.hardware_mute,
                    }))),
                    W.h.dispatch({ type: "CERTIFIED_DEVICES_SET", applicationId: t, devices: n });
            },
        },
    };
var _i = n(95701),
    _r = n(147036);
let _a = {
        [D.e$_.GET_CHANNEL]: {
            scope: { [dr.sm.ANY]: [hW.F.RPC, hW.F.GUILDS, hW.F.GUILDS_CHANNELS_READ] },
            handler(e) {
                let {
                        args: { channel_id: t },
                        socket: n,
                    } = e,
                    i = i6.A.getChannel(t);
                if (null == i) throw new h2.A({ errorCode: D.Lw6.INVALID_CHANNEL }, `Invalid channel id: ${t}`);
                if (i.isPrivate()) {
                    let e = n.authorization.scopes;
                    if (!e.includes(hW.F.RPC) && !e.includes(hW.F.DM_CHANNELS_READ))
                        throw new h2.A({ errorCode: D.Lw6.INVALID_PERMISSIONS }, "Invalid scope");
                }
                return (0, hH.SN)(i, (0, hH.B_)(i, n.application.id, n.authorization.scopes));
            },
        },
        [D.e$_.GET_CHANNELS]: {
            scope: hW.F.RPC,
            handler(e) {
                let {
                        args: { guild_id: t },
                    } = e,
                    n = eU().values(i6.A.loadAllGuildAndPrivateChannelsFromDisk());
                if (t) {
                    let e = rx.A.getGuild(t);
                    if (null == e) throw new h2.A({ errorCode: D.Lw6.INVALID_GUILD }, `Invalid guild id: ${t}`);
                    n = n.filter((t) => {
                        let { guild_id: n } = t;
                        return n === e.id;
                    });
                }
                return {
                    channels: n
                        .filter((e) => rj.A.can(D.xBc.VIEW_CHANNEL, e))
                        .map((e) => {
                            let { id: t, name: n, type: i } = e;
                            return { id: t, name: n, type: i };
                        }),
                };
            },
        },
        [D.e$_.GET_CHANNEL_PERMISSIONS]: {
            scope: { [dr.sm.ANY]: [hW.F.GUILDS_MEMBERS_READ, hW.F.GUILDS_CHANNELS_READ] },
            handler(e) {
                let t = h7();
                if (null == t) throw new h2.A({ errorCode: D.Lw6.INVALID_CHANNEL }, "Invalid channel");
                return { permissions: rj.A.computePermissions(t) };
            },
        },
        [D.e$_.SELECT_VOICE_CHANNEL]: {
            scope: hW.F.RPC,
            validation: (e) =>
                _e(e)
                    .required()
                    .keys({
                        channel_id: e.string().allow(null),
                        timeout: e.number().min(0).max(60),
                        force: e.boolean(),
                        navigate: e.boolean(),
                    }),
            handler(e) {
                let {
                    server: t,
                    socket: n,
                    args: { channel_id: i, timeout: r = 0, force: a = !1, navigate: l = !1 },
                } = e;
                if (!i) return O.default.selectVoiceChannel(null), null;
                let s = ee.A.getVoiceChannelId();
                if (null != s && s !== i && !1 === a)
                    throw new h2.A(
                        { errorCode: D.Lw6.SELECT_VOICE_FORCE_REQUIRED },
                        "User is already joined to a voice channel.",
                    );
                return t
                    .storeWait(n, () => i6.A.getChannel(i), r)
                    .catch(() => {
                        throw new h2.A(
                            { errorCode: D.Lw6.SELECT_CHANNEL_TIMED_OUT },
                            "Request to select voice channel timed out.",
                        );
                    })
                    .then((e) => {
                        if (null == e) throw new h2.A({ errorCode: D.Lw6.INVALID_CHANNEL }, `Invalid channel id: ${i}`);
                        if (!(0, _i.gV)(e.type))
                            throw new h2.A({ errorCode: D.Lw6.INVALID_CHANNEL }, "Channel is not a voice channel");
                        return Promise.all([
                            Promise.resolve(e),
                            (0, hH.SN)(e, (0, hH.B_)(e, n.application.id, n.authorization.scopes)),
                        ]);
                    })
                    .then((e) => {
                        let [t, n] = e;
                        if (n.guild_id) {
                            if ((0, _r.Pd)(t, rV.A, rx.A))
                                throw new h2.A({ errorCode: D.Lw6.INVALID_CHANNEL }, "Channel is full");
                            if (!rj.A.can(D.xBc.CONNECT, t))
                                throw new h2.A(
                                    { errorCode: D.Lw6.INVALID_PERMISSIONS },
                                    "Connect permission required to join channel",
                                );
                        }
                        return O.default.selectVoiceChannel(t.id), l && (0, aL.bG)(D.BVt.CHANNEL(t.guild_id, t.id)), n;
                    });
            },
        },
        [D.e$_.GET_SELECTED_VOICE_CHANNEL]: {
            scope: { [dr.sm.ANY]: [hW.F.RPC, hW.F.RPC_VOICE_READ] },
            handler(e) {
                let { socket: t } = e,
                    n = ee.A.getVoiceChannelId(),
                    i = null != n ? i6.A.getChannel(n) : null;
                return null != i ? (0, hH.SN)(i, (0, hH.B_)(i, t.application.id, t.authorization.scopes)) : null;
            },
        },
        [D.e$_.SELECT_TEXT_CHANNEL]: {
            scope: hW.F.RPC,
            validation: (e) =>
                _e(e)
                    .required()
                    .keys({ channel_id: e.string().allow(null), timeout: e.number().min(0).max(60) }),
            handler(e) {
                let {
                    server: t,
                    socket: n,
                    args: { channel_id: i, timeout: r = 0 },
                } = e;
                return i
                    ? t
                          .storeWait(n, () => i6.A.getChannel(i), r)
                          .catch(() => {
                              throw new h2.A(
                                  { errorCode: D.Lw6.SELECT_CHANNEL_TIMED_OUT },
                                  "Request to select text channel timed out.",
                              );
                          })
                          .then((e) => {
                              if (null == e)
                                  throw new h2.A({ errorCode: D.Lw6.INVALID_CHANNEL }, `Invalid channel id: ${i}`);
                              if (!(0, _i.pQ)(e.type))
                                  throw new h2.A({ errorCode: D.Lw6.INVALID_CHANNEL }, "Channel is not a text channel");
                              return Promise.all([
                                  Promise.resolve(e),
                                  (0, hH.SN)(e, (0, hH.B_)(e, n.application.id, n.authorization.scopes)),
                              ]);
                          })
                          .then((e) => {
                              let [t, n] = e;
                              if (n.guild_id && !rj.A.can(D.xBc.VIEW_CHANNEL, t))
                                  throw new h2.A({ errorCode: D.Lw6.INVALID_CHANNEL }, "No permission to see channel");
                              return (
                                  n.guild_id
                                      ? (0, aL.bG)(D.BVt.CHANNEL(n.guild_id, t.id))
                                      : O.default.selectPrivateChannel(t.id),
                                  n
                              );
                          })
                    : ((0, aL.pX)(D.BVt.ME), null);
            },
        },
        [D.e$_.CREATE_CHANNEL_INVITE]: {
            scope: hW.F.RPC,
            handler(e) {
                let {
                    args: { channel_id: t, ...n },
                } = e;
                return u0.Ay.createInvite(t, n, "RPC").catch(() => {
                    throw new h2.A(
                        { errorCode: D.Lw6.INVALID_PERMISSIONS },
                        `Unable to generate an invite for ${t}. Does this user have permissions?`,
                    );
                });
            },
        },
    },
    _l = {
        [D.e$_.SET_CONFIG]: {
            scope: dr.VH,
            validation: (e) => _e(e).required().keys({ use_interactive_pip: e.boolean() }),
            handler(e) {
                let {
                    socket: t,
                    args: { use_interactive_pip: n },
                } = e;
                if (t.transport !== dr.z4.POST_MESSAGE)
                    throw new h2.A(
                        { errorCode: D.Lw6.INVALID_COMMAND },
                        `command not available from "${t.transport} transport`,
                    );
                if (null == t.application.id)
                    throw new h2.A({ errorCode: D.Lw6.INVALID_COMMAND }, "invalid application");
                return (
                    W.h.dispatch({
                        type: "EMBEDDED_ACTIVITY_SET_CONFIG",
                        applicationId: t.application.id,
                        config: { useInteractivePIP: n },
                    }),
                    Promise.resolve({ use_interactive_pip: n })
                );
            },
        },
    },
    _s = {
        [D.e$_.GET_GUILD]: {
            scope: hW.F.RPC,
            validation: (e) =>
                _e(e)
                    .required()
                    .keys({ guild_id: e.string(), timeout: e.number().min(0).max(60) }),
            handler(e) {
                let {
                    socket: t,
                    server: n,
                    args: { guild_id: i, timeout: r = 0 },
                } = e;
                return n
                    .storeWait(t, () => rx.A.getGuild(i), r)
                    .catch(() => {
                        throw new h2.A({ errorCode: D.Lw6.GET_GUILD_TIMED_OUT }, "Request to get guild timed out.");
                    })
                    .then((e) => {
                        if (null == e) throw new h2.A({ errorCode: D.Lw6.INVALID_GUILD }, `Invalid guild id: ${i}`);
                        return {
                            id: e.id,
                            name: e.name,
                            icon_url: (0, J.Iv)(e, 128) ?? null,
                            members: [],
                            vanity_url_code: e.vanityURLCode,
                        };
                    });
            },
        },
        [D.e$_.GET_GUILDS]: {
            scope: hW.F.RPC,
            handler: () => ({
                guilds: rx.A.getGuildsArray().map((e) => ({
                    id: e.id,
                    name: e.name,
                    icon_url: (0, J.Iv)(e, 128) ?? null,
                })),
            }),
        },
    };
var _o = n(486020),
    _d = n(515718);
let _c = {
    [D.e$_.GET_IMAGE]: {
        scope: dr.hj,
        validation: (e) =>
            _e(e)
                .required()
                .keys({
                    type: e.string().required().valid(["user"]),
                    id: e.string().required(),
                    format: e.string().required().valid(["png", "webp", "jpg"]),
                    size: e.number().required().valid([16, 32, 64, 128, 256, 512, 1024]),
                }),
        handler(e) {
            let t,
                {
                    args: { type: n, id: i, format: r = "png", size: a = 128 },
                } = e;
            if ("user" === n) {
                let e = iu.default.getUser(i);
                if (null != e) {
                    t = _o.Ay.getUserAvatarURL(e, !1, a, r);
                    let n = window.GLOBAL_ENV.CDN_HOST;
                    null != n && -1 !== t.indexOf(n) && (t += "&_=");
                } else throw new h2.A({ errorCode: D.Lw6.INVALID_USER }, `Invalid user id: ${i}`);
            }
            if (null == t) throw new h2.A({ errorCode: D.Lw6.INVALID_COMMAND }, "No valid type.");
            return fetch(t)
                .then((e) => e.blob())
                .then((e) => (0, _d.We)(e))
                .then((e) => ({ data_url: e }));
        },
    },
};
var _u = n(119966),
    _A = n(478437),
    _h = n(344351),
    __ = n(855687);
function _E() {
    let e = tw.A.getConnectedFrame();
    if (null != e) return { frame: e, channel: void 0, guild: void 0 };
    let t = h7();
    if (null == t) throw new h2.A({ errorCode: D.Lw6.INVALID_CHANNEL }, "Invalid channel");
    let n = rx.A.getGuild(t.getGuildId());
    if (null == n) throw new h2.A({ errorCode: D.Lw6.INVALID_CHANNEL }, `Invalid guild ${t.getGuildId()}`);
    if (!(0, __.K)(rj.A, n, t))
        throw new h2.A({ errorCode: D.Lw6.INVALID_PERMISSIONS }, `No invite permissions for ${t.id}`);
    return { frame: void 0, channel: t, guild: n };
}
let _p = {
    [hX.e$.INVITE_USER_EMBEDDED]: h8(hX.e$.INVITE_USER_EMBEDDED, {
        scope: { [dr.sm.ANY]: [hW.F.DM_CHANNELS_MESSAGES_WRITE, hW.F.ACTIVITIES_INVITES_WRITE] },
        async handler(e) {
            let t,
                {
                    socket: n,
                    args: { user_id: i, content: r },
                } = e,
                a = n.application.id;
            if (null == a) throw new _u.G({ errorCode: hX.Lw.INVALID_COMMAND }, "No application.");
            let l = rb.Ay.getConnectedActivityLocation();
            if (null == l)
                throw new _u.G(
                    { errorCode: hX.Lw.NO_ELIGIBLE_ACTIVITY },
                    "No eligible activity for application. Ensure an activity was set using setActivity.",
                );
            switch (l.kind) {
                case _h.T.GUILD_CHANNEL:
                case _h.T.GUILD_CHANNEL_MESSAGE:
                    t = _E().channel;
                    break;
                case _h.T.PRIVATE_CHANNEL:
                case _h.T.PRIVATE_CHANNEL_MESSAGE:
                    let s = i6.A.getChannel(l.channel_id);
                    if (null == s) throw new _u.G({ errorCode: hX.Lw.INVALID_CHANNEL }, "Invalid channel");
                    if (s.type === _A.r.DM)
                        throw new _u.G({ errorCode: hX.Lw.INVALID_CHANNEL }, "Cannot send invite to a DM");
                    t = s;
                    break;
                default:
                    throw new _u.G({ errorCode: hX.Lw.NO_ELIGIBLE_ACTIVITY }, "Unsupported activity location");
            }
            try {
                await (0, tV.Ue)({
                    channelId: t.id,
                    applicationId: a,
                    userId: i,
                    prefixedContent: r,
                    location: "RPC_ACTIVITY_INVITE_USER",
                    inviteAnalyticsMetadata: { source: D.PE1.ACTIVITY_INVITE },
                });
            } catch {
                throw new _u.G({ errorCode: hX.Lw.UNKNOWN_ERROR }, "Failed to invite user");
            }
        },
    }),
};
var _m = n(975807),
    _I = n(646865),
    _g = n(231723),
    _C = n(851907);
async function _T(e, t) {
    if (void 0 === e) return !1;
    try {
        let { body: n } = await h6.Bo.get({
            url: D.Rsh.ACTIVITIES_TRUSTED_LINKS(e),
            rejectWithError: !1,
            query: { url: t },
            timeout: 500,
        });
        return !!n.trusted;
    } catch {
        return !1;
    }
}
var _f = n(353835),
    _N = n(76843);
let _S = new Set([hK.AM, hK.eK]),
    _L = {
        [D.e$_.OPEN_EXTERNAL_LINK]: {
            scope: { [dr.sm.ANY]: [dr.VH, dr.W_] },
            validation: (e) => _e(e).required().keys({ url: e.string().required() }),
            async handler(e) {
                let {
                    socket: t,
                    args: { url: n },
                } = e;
                (0, hH.lG)(t.transport);
                let i = rb.Ay.getCurrentEmbeddedActivity();
                try {
                    let e = new URL(n).toString();
                    if (U.isPlatformEmbedded) {
                        let e = (0, _I.f)() ? D.MLl.ACTIVITY_POPOUT : null;
                        _f.A.focus(e, !0);
                    }
                    let r = iY.A.getApplication(t.application?.id),
                        a = (0, hB.H)(i?.location);
                    if (await _T(r?.id, e))
                        return (
                            (0, _m.A)(e),
                            ec.default.track(D.HAw.RPC_OPEN_EXTERNAL_LINK_CALLED, {
                                application_id: t.application?.id,
                                url: e,
                                opened: !0,
                            }),
                            Promise.resolve({ opened: !0 })
                        );
                    return new Promise((n) =>
                        (0, _N.h)(
                            {
                                href: e,
                                shouldConfirm: !0,
                                onConfirm: () => {
                                    (0, _m.A)(e),
                                        ec.default.track(D.HAw.RPC_OPEN_EXTERNAL_LINK_CALLED, {
                                            application_id: t.application?.id,
                                            url: e,
                                            opened: !0,
                                        }),
                                        n({ opened: !0 });
                                },
                                onCancel: () => {
                                    ec.default.track(D.HAw.RPC_OPEN_EXTERNAL_LINK_CALLED, {
                                        application_id: t.application?.id,
                                        url: e,
                                        opened: !1,
                                    }),
                                        n({ opened: !1 });
                                },
                            },
                            void 0,
                            void 0,
                            (function (e) {
                                let { application: t, channelId: n } = e;
                                return null != (0, _C.Ay)({ application: t, channelId: n }) ? _g.KX : _g.SY;
                            })({ application: r, channelId: a }),
                        ),
                    );
                } catch (e) {
                    throw new h2.A({ errorCode: D.Lw6.INVALID_COMMAND }, `Invalid URL: ${n}`);
                }
            },
        },
        [D.e$_.NAVIGATE_TO_CONNECTIONS]: {
            validation: (e) => _e(e),
            scope: { [dr.sm.ANY]: [dr.VH] },
            handler(e) {
                let { socket: t } = e;
                (0, hH.lG)(t.transport);
                let i = (0, hH.D2)(t.application);
                if (!_S.has(i))
                    throw new h2.A(
                        { errorCode: D.Lw6.UNAUTHORIZED_FOR_APPLICATION },
                        "Command not available for this application",
                    );
                {
                    let { openUserSettings: e } = n(858897);
                    e(e3.X.CONNECTIONS_PANEL);
                }
            },
        },
        [D.e$_.SHARE_LINK]: h8(D.e$_.SHARE_LINK, {
            scope: { [dr.sm.ANY]: [dr.VH] },
            handler(e) {
                let {
                    socket: t,
                    args: { custom_id: i, message: r, link_id: a },
                } = e;
                (0, hH.lG)(t.transport);
                let l = (0, hH.D2)(t.application);
                if (null == l) throw new h2.A({ errorCode: D.Lw6.INVALID_COMMAND }, "No application.");
                if (!(0, h3.n)(t.application, D.gfo.EMBEDDED))
                    throw new h2.A({ errorCode: D.Lw6.INVALID_COMMAND }, "This application cannot access this API");
                return new Promise((e) => {
                    !(function (e) {
                        let { applicationId: t, customId: i, linkId: r, message: a, onShare: l } = e,
                            s = iY.A.getApplication(t);
                        if (null == s) return l(!1, !1);
                        let o = null != (0, _C.LU)({ applicationId: s.id }) ? _g.KX : _g.SY,
                            d = !1;
                        function c(e) {
                            l(e, d);
                        }
                        function u() {
                            d = !0;
                        }
                        (0, T.openModalLazy)(
                            async () => {
                                let { default: e } = await Promise.all([
                                    n.e("24092"),
                                    n.e("72618"),
                                    n.e("44780"),
                                    n.e("36946"),
                                    n.e("92639"),
                                    n.e("40963"),
                                    n.e("90480"),
                                    n.e("37065"),
                                    n.e("13491"),
                                    n.e("19666"),
                                ]).then(n.bind(n, 803977));
                                return (n) =>
                                    (0, E.jsx)(e, {
                                        applicationId: t,
                                        customId: i,
                                        linkId: r,
                                        message: a,
                                        onCopyLink: u,
                                        onShare: c,
                                        ...n,
                                    });
                            },
                            {
                                modalKey: "activity-share-moment-modal",
                                contextKey: o,
                                onCloseCallback: () => {
                                    l(!1, d);
                                },
                            },
                        );
                    })({
                        applicationId: l,
                        customId: i,
                        linkId: a,
                        message: r,
                        onShare: (t, n) => {
                            e({ success: n || t, didCopyLink: n, didSendMessage: t });
                        },
                    });
                });
            },
        }),
    },
    _O = new ct.A(D.meB),
    _y = {
        [D.e$_.CAPTURE_LOG]: {
            validation: (e) =>
                _e(e)
                    .required()
                    .keys({ level: e.string().max(10).required(), message: e.string().max(1e3).required() }),
            handler(e) {
                let {
                    socket: t,
                    args: { level: n, message: i },
                } = e;
                (0, hH.lG)(t.transport);
                let r = t.application.id,
                    a = `${r} - ${i}`;
                switch (n) {
                    case "log":
                        _O.log(a);
                        break;
                    case "warn":
                        _O.warn(a);
                        break;
                    case "debug":
                        _O.verbose(a);
                        break;
                    case "info":
                        _O.info(a);
                        break;
                    case "error":
                        _O.error(a);
                }
            },
        },
    },
    _b = {
        [D.e$_.GET_NETWORKING_CONFIG]: {
            scope: dr.hj,
            handler: () =>
                Promise.all([
                    h6.Bo.get({
                        url: location.protocol + window.GLOBAL_ENV.NETWORKING_ENDPOINT,
                        retries: 3,
                        rejectWithError: !1,
                    }).then((e) => {
                        let {
                            body: { address: t },
                        } = e;
                        return t;
                    }),
                    h6.Bo.post({
                        url: D.Rsh.NETWORKING_TOKEN,
                        retries: 3,
                        oldFormErrors: !0,
                        rejectWithError: !1,
                    }).then((e) => {
                        let {
                            body: { token: t },
                        } = e;
                        return t;
                    }),
                ]).then((e) => {
                    let [t, n] = e;
                    return { address: t, token: n };
                }),
        },
        [D.e$_.NETWORKING_SYSTEM_METRICS]: {
            scope: dr.hj,
            handler(e) {
                let { socket: t, args: n } = e;
                (n.application_id = t.application.id), ec.default.track(D.HAw.NETWORKING_SYSTEM_METRICS, n);
            },
        },
        [D.e$_.NETWORKING_PEER_METRICS]: {
            scope: dr.hj,
            handler(e) {
                let { socket: t, args: n } = e;
                (n.application_id = t.application.id), ec.default.track(D.HAw.NETWORKING_PEER_METRICS, n);
            },
        },
        [D.e$_.NETWORKING_CREATE_TOKEN]: {
            scope: dr.hj,
            handler: () =>
                h6.Bo.post({ url: D.Rsh.NETWORKING_TOKEN, retries: 1, oldFormErrors: !0, rejectWithError: !1 }).then(
                    (e) => e.body,
                ),
        },
    },
    _v = { [hX.e$.GET_PLATFORM_BEHAVIORS]: { handler: () => ({ iosKeyboardResizesView: !0 }) } };
var _P = n(77468),
    _R = n(773952);
let _D = new Set([hK.AM, hK.eK]),
    _w = {
        [hX.e$.GET_PROVIDER_ACCESS_TOKEN]: {
            scope: { [dr.sm.ANY]: [dr.VH] },
            validation: (e) =>
                _e(e).required().keys({ provider: e.string().required(), connection_redirect: e.string() }),
            handler: (e) => {
                let {
                    socket: t,
                    args: { provider: n, connection_redirect: i },
                } = e;
                (0, hH.lG)(t.transport);
                let r = (0, hH.D2)(t.application),
                    a = iM.A.get(n);
                if (null == a)
                    throw new h2.A({ errorCode: hX.Lw.INVALID_PROVIDER }, `Platform not found for provider "${n}"`);
                if (n === D.fg2.AMAZON_MUSIC) {
                    if (!_D.has(r))
                        throw new h2.A(
                            { errorCode: hX.Lw.UNAUTHORIZED_FOR_APPLICATION },
                            "Command not available for this application",
                        );
                } else
                    throw new h2.A(
                        { errorCode: hX.Lw.UNAUTHORIZED_FOR_APPLICATION },
                        "Command not available for this application",
                    );
                return new Promise(async (e, t) => {
                    let r = rD.A.getAccount(null, n);
                    if (null == r) {
                        function l(t) {
                            if (null == a) return;
                            let n = (t.accounts ?? []).find((e) => e.type === a.type);
                            null != n && (e({ access_token: n.access_token }), o());
                        }
                        function s() {
                            t(new h2.A({ errorCode: hX.Lw.OAUTH2_ERROR }, `OAuth2 setup for "${n}" failed`)), o();
                        }
                        function o() {
                            W.h.unsubscribe("USER_CONNECTIONS_UPDATE", l),
                                tJ._.unsubscribe(D.jej.CONNECTIONS_CALLBACK_ERROR, s);
                        }
                        W.h.subscribe("USER_CONNECTIONS_UPDATE", l),
                            tJ._.subscribe(D.jej.CONNECTIONS_CALLBACK_ERROR, s),
                            (0, _R.A)({ platformType: a.type, location: D.ThZ.ACTIVITY_RPC, successRedirect: i });
                    } else
                        try {
                            let t = await _P.A.refreshAccessToken(a.type, r.id);
                            if (null == t)
                                throw new h2.A(
                                    { errorCode: hX.Lw.OAUTH2_ERROR },
                                    "Refreshing access token did not return a new access token",
                                );
                            e({ access_token: t });
                        } catch (e) {
                            t(e);
                        }
                });
            },
        },
        [hX.e$.MAYBE_GET_PROVIDER_ACCESS_TOKEN]: {
            scope: { [dr.sm.ANY]: [dr.VH] },
            validation: (e) => _e(e).required().keys({ provider: e.string().required() }),
            handler: async (e) => {
                let {
                    socket: t,
                    args: { provider: n },
                } = e;
                (0, hH.lG)(t.transport);
                let i = (0, hH.D2)(t.application),
                    r = iM.A.get(n);
                if (null == r)
                    throw new h2.A({ errorCode: hX.Lw.INVALID_PROVIDER }, `Platform not found for provider "${n}"`);
                if (n === D.fg2.AMAZON_MUSIC) {
                    if (!_D.has(i))
                        throw new h2.A(
                            { errorCode: hX.Lw.UNAUTHORIZED_FOR_APPLICATION },
                            "Command not available for this application",
                        );
                } else
                    throw new h2.A(
                        { errorCode: hX.Lw.UNAUTHORIZED_FOR_APPLICATION },
                        "Command not available for this application",
                    );
                let a = rD.A.getAccount(null, n);
                if (null == a) throw new h2.A({ errorCode: hX.Lw.NO_CONNECTION_FOUND }, "No connection found");
                let l = await _P.A.refreshAccessToken(r.type, a.id);
                if (null == l)
                    throw new h2.A(
                        { errorCode: hX.Lw.OAUTH2_ERROR },
                        "Refreshing access token did not return a new access token",
                    );
                return { access_token: l };
            },
        },
    },
    _M = {
        [D.e$_.GET_QUEST_ENROLLMENT_STATUS]: {
            scope: hW.F.IDENTIFY,
            handler(e) {
                let {
                    socket: t,
                    args: { quest_id: n },
                } = e;
                (0, hH.lG)(t.transport);
                let i = (0, hH.D2)(t.application),
                    r = it.A.getQuest(n),
                    a = (0, hV.TP)(r);
                if (null == r || null == a || a !== i)
                    throw new h2.A({ errorCode: D.Lw6.INVALID_COMMAND }, `Quest not found: ${n}`);
                return {
                    quest_id: n,
                    is_enrolled: r.userStatus?.enrolledAt != null,
                    enrolled_at: r.userStatus?.enrolledAt ?? null,
                };
            },
        },
        [D.e$_.QUEST_START_TIMER]: {
            scope: hW.F.IDENTIFY,
            handler(e) {
                let {
                    socket: t,
                    args: { quest_id: n },
                } = e;
                (0, hH.lG)(t.transport);
                let i = (0, hH.D2)(t.application),
                    r = it.A.getQuest(n),
                    a = (0, hV.vS)(r);
                if (null == r || null == a || a !== i)
                    throw new h2.A({ errorCode: D.Lw6.INVALID_COMMAND }, `Quest not found: ${n}`);
                if (r.userStatus?.enrolledAt == null)
                    throw new h2.A({ errorCode: D.Lw6.INVALID_COMMAND }, "User is not enrolled in quest");
                return (
                    ec.default.track(D.HAw.RPC_QUEST_START_TIMER_CALLED, { application_id: i, quest_id: n }),
                    W.h.dispatch({ type: "QUEST_APPLICATION_START_TIMER", questId: n, applicationId: i }),
                    { success: !0 }
                );
            },
        },
        [D.e$_.GET_QUESTS]: {
            scope: hW.F.IDENTIFY,
            handler(e) {
                let { socket: t } = e;
                (0, hH.lG)(t.transport);
                let n = (0, hH.D2)(t.application);
                return {
                    quests: (0, is.jm)(it.A.quests, n, !0)
                        .map((e) => ({
                            quest_id: e.id,
                            enrolled_at: e.userStatus?.enrolledAt ?? null,
                            external_cta_url: e.config.ctaConfig.link,
                        }))
                        .sort((e, t) =>
                            null == e.enrolled_at && null == t.enrolled_at
                                ? 0
                                : null == e.enrolled_at
                                  ? 1
                                  : null == t.enrolled_at
                                    ? -1
                                    : new Date(e.enrolled_at).getTime() - new Date(t.enrolled_at).getTime(),
                        ),
                };
            },
        },
    },
    _x = {
        [D.e$_.GET_RELATIONSHIPS]: h8(D.e$_.GET_RELATIONSHIPS, {
            scope: { [dr.sm.ANY]: [hW.F.RELATIONSHIPS_READ] },
            handler(e) {
                if (cd.zy(cd.iu(e.socket.application.flags ?? 0), cd.iu(D.gfo.DISABLE_RELATIONSHIPS_ACCESS)))
                    throw new h2.A({ errorCode: D.Lw6.INVALID_PERMISSIONS }, "Missing Permissions");
                let t = [];
                for (let [n, i] of eZ.A.getMutableRelationships().entries()) {
                    if (i === D.eA$.NONE) continue;
                    let r = iu.default.getUser(n);
                    if (null == r) continue;
                    let a = (0, hH.Gc)(i, r);
                    t.push((0, hH.LP)(a, e.socket.application.id));
                }
                return { relationships: t };
            },
        }),
    };
var _U = n(599026),
    _G = n(182892),
    _j = n(375802);
let _k = ["1402418171662569542"],
    _V = {
        [D.e$_.SET_ACTIVITY]: {
            scope: { [dr.sm.ANY]: [hW.F.RPC, hW.F.RPC_ACTIVITIES_WRITE, dr.hj] },
            validation: (e) =>
                _e(e)
                    .required()
                    .keys({
                        pid: e.number().min(0),
                        activity: _e(e)
                            .keys({
                                name: e.string().min(1).max(128),
                                state: e.string().min(2).max(128),
                                state_url: e.string().uri().min(1).max(256),
                                details: e.string().min(2).max(128),
                                details_url: e.string().uri().min(1).max(256),
                                timestamps: _e(e).keys({ start: e.number().min(1), end: e.number().min(1) }),
                                assets: _e(e).keys({
                                    large_image: e.string().min(1).max(300),
                                    large_text: e.string().min(2).max(128),
                                    large_url: e.string().uri().min(1).max(256),
                                    small_image: e.string().min(1).max(300),
                                    small_text: e.string().min(2).max(128),
                                    small_url: e.string().uri().min(1).max(256),
                                    invite_cover_image: e.string().min(1).max(300),
                                }),
                                party: _e(e).keys({
                                    id: e.string().min(2).max(128),
                                    size: e.array().items(e.number().min(0)).length(2),
                                    privacy: e.number().default(D.KIY.PRIVATE).valid([D.KIY.PRIVATE, D.KIY.PUBLIC]),
                                }),
                                secrets: _e(e).keys({
                                    match: e.string().min(2).max(128),
                                    join: e.string().min(2).max(128),
                                    spectate: e.string().min(2).max(128),
                                }),
                                buttons: e
                                    .array()
                                    .items(
                                        _e(e).keys({
                                            label: e.string().min(1).max(32).required(),
                                            url: e.string().uri().min(1).max(512).required(),
                                        }),
                                    )
                                    .min(1)
                                    .max(2),
                                instance: e.boolean(),
                                supported_platforms: e.array().items(e.string().min(1).max(32)).min(1).max(10),
                                type: e
                                    .number()
                                    .default(D.$pd.PLAYING)
                                    .valid(D.$pd.PLAYING, D.$pd.LISTENING, D.$pd.WATCHING, D.$pd.COMPETING),
                                status_display_type: e.number().optional().valid(_U.A.NAME, _U.A.STATE, _U.A.DETAILS),
                            })
                            .allow(null),
                    }),
            handler(e) {
                let t,
                    {
                        socket: n,
                        args: { pid: i, activity: r },
                        isSocketConnected: a,
                    } = e;
                if (![dr.z4.IPC, dr.z4.WEBSOCKET, dr.z4.POST_MESSAGE].includes(n.transport))
                    throw new h2.A(
                        { errorCode: D.Lw6.INVALID_COMMAND },
                        `command not available from "${n.transport}" transport`,
                    );
                if (null == i && dr.z4.IPC === n.transport)
                    throw new h2.A({ errorCode: D.Lw6.INVALID_COMMAND }, "nonzero pid required");
                if (null == r)
                    return (
                        W.h.dispatch({ type: "LOCAL_ACTIVITY_UPDATE", socketId: n.id, pid: i, activity: r }),
                        Promise.resolve(r)
                    );
                let l = {};
                r.name || (r.name = n.application.name);
                let s = n.application.id;
                r.application_id = s;
                let o = n.transport === dr.z4.POST_MESSAGE;
                r.platform = o ? D.yTV.EMBEDDED : D.yTV.DESKTOP;
                let d = iY.A.getApplication(s ?? void 0),
                    c = r.instance ?? !1,
                    u = r.party?.privacy;
                delete r.instance, delete r.party?.privacy;
                let A = (0, _G.E)(r, c, o, null != d && (0, _j.x)(d) && o, u);
                A > 0 && (r.flags = A);
                let { assets: h, party: _, secrets: E, timestamps: p, buttons: m, type: I } = r;
                if ((null == I && (r.type = D.$pd.PLAYING), null != E)) {
                    let e = eU()
                        .values(E)
                        .filter((e) => !!e);
                    if (null != _ && eU().intersection(e, [_.id]).length > 0 && !_k.includes(n.application.id))
                        throw new h2.A(
                            { errorCode: D.Lw6.INVALID_ACTIVITY_SECRET },
                            "secrets cannot match the party id",
                        );
                    if (eU().uniq(e).length < e.length)
                        throw new h2.A({ errorCode: D.Lw6.INVALID_ACTIVITY_SECRET }, "secrets must be unique");
                    if (null != m)
                        throw new h2.A(
                            { errorCode: D.Lw6.INVALID_ACTIVITY_SECRET },
                            "secrets cannot currently be sent with buttons",
                        );
                }
                if (
                    (null != m && ((l.button_urls = m.map((e) => e.url)), (r.buttons = m.map((e) => e.label))),
                    (r.metadata = l),
                    null != p)
                )
                    for (let e of Object.keys(p))
                        Date.now().toString().length - p[e].toString().length > 2 &&
                            (p[e] = Math.floor(p[e] * eu.A.Millis.SECOND));
                if (null == h) t = Promise.resolve([]);
                else {
                    if (null == n.application || null == n.application.id) throw Error();
                    t = (0, iT.RG)(n.application.id, [h.large_image, h.small_image, h.invite_cover_image]);
                }
                return t.then((e) => {
                    let [t, l, s] = e;
                    if (
                        (null != h &&
                            (null != t ? (h.large_image = t) : delete h.large_image,
                            null != l ? (h.small_image = l) : delete h.small_image,
                            null != s ? (h.invite_cover_image = s) : delete h.invite_cover_image),
                        !a())
                    )
                        return;
                    W.h.dispatch({
                        type: "LOCAL_ACTIVITY_UPDATE",
                        socketId: n.id,
                        pid: i,
                        activity: r,
                        partyPrivacy: u,
                    });
                    let { secrets: o, party: d } = r,
                        c = {
                            application_id: n.application.id,
                            type: r.type,
                            name: r.name,
                            status_display_type: r.status_display_type,
                            details: r.details ?? "",
                            state: r.state ?? "",
                            has_urls:
                                null != r.state_url ||
                                null != r.details_url ||
                                r.assets?.large_url != null ||
                                r.assets?.small_url != null,
                        };
                    return (
                        null != o && ((c.has_match_secret = !!o.match), (c.has_join_secret = !!o.join)),
                        null != h && (c.has_images = !!(h.large_image || h.small_image || h.invite_cover_image)),
                        null != d &&
                            ((c.party_max = null != d.size && d.size[1] > 0 ? d.size[1] : void 0), (c.party_id = d.id)),
                        ec.default.track(D.HAw.ACTIVITY_UPDATED, c),
                        r
                    );
                });
            },
        },
    },
    _F = {
        [hX.e$.SET_ORIENTATION_LOCK_STATE]: {
            validation: (e) =>
                _e(e)
                    .required()
                    .keys({
                        lock_state: e.number().valid(hK.N7.UNLOCKED, hK.N7.PORTRAIT, hK.N7.LANDSCAPE).required(),
                        picture_in_picture_lock_state: e
                            .number()
                            .valid(hK.N7.UNLOCKED, hK.N7.PORTRAIT, hK.N7.LANDSCAPE)
                            .allow(null)
                            .optional(),
                        grid_lock_state: e
                            .number()
                            .valid(hK.N7.UNLOCKED, hK.N7.PORTRAIT, hK.N7.LANDSCAPE)
                            .allow(null)
                            .optional(),
                    }),
            handler(e) {
                let {
                        socket: t,
                        args: { lock_state: n, picture_in_picture_lock_state: i, grid_lock_state: r },
                    } = e,
                    a = t.application.id;
                if (null != a)
                    W.h.dispatch({
                        type: "FRAME_SET_ORIENTATION_LOCK_STATE",
                        applicationId: a,
                        lockState: n,
                        pictureInPictureLockState: i,
                    }),
                        W.h.dispatch({
                            type: "EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE",
                            applicationId: a,
                            lockState: n,
                            pictureInPictureLockState: i,
                            gridLockState: r,
                        });
                else throw new h2.A({ errorCode: hX.Lw.INVALID_COMMAND }, "No application.");
            },
        },
    };
var _H = n(796774),
    _B = n(209932),
    _Y = n(807348),
    _$ = n(693806);
let _z = {
    [hX.e$.GET_SOUNDBOARD_SOUNDS]: {
        scope: { [dr.sm.ANY]: [hW.F.RPC, dr.hj] },
        async handler() {
            await (0, _H.E7)();
            let e = _B.A.getSounds(),
                t = [];
            return e.forEach((e) => e.forEach((e) => t.push((0, _Y.A2)(e)))), t;
        },
    },
    [hX.e$.PLAY_SOUNDBOARD_SOUND]: {
        scope: { [dr.sm.ALL]: [hW.F.RPC, hW.F.RPC_VOICE_WRITE] },
        validation: (e) => _e(e).required().keys({ guild_id: e.string(), sound_id: e.string() }),
        async handler(e) {
            let {
                args: { guild_id: t, sound_id: n },
            } = e;
            await (0, _H.E7)();
            let i = iu.default.getCurrentUser(),
                r = _B.A.getSound(t, n),
                a = (0, _$.A)(),
                l = null != r && null != i && (0, s5.Ir)(i, r, a);
            if (null == a) throw new h2.A({ errorCode: hX.Lw.INVALID_CHANNEL }, "Invalid Channel.");
            if (l)
                if ((0, s3.Ay)(a)) null != r && (0, s5.Ak)(r, a.id, [eg.A.RPC]);
                else throw new h2.A({ errorCode: hX.Lw.INVALID_PERMISSIONS }, "Invalid Permissions.");
            else throw new h2.A({ errorCode: hX.Lw.INVALID_SOUND }, "Invalid Sound.");
        },
    },
};
var _q = n(339048),
    _K = n(830382),
    _W = n(800342),
    _X = n(143582);
function _Z(e) {
    if (dr.z4.IPC !== e && dr.z4.POST_MESSAGE !== e)
        throw new h2.A({ errorCode: D.Lw6.INVALID_COMMAND }, "Invalid transport.");
}
async function _Q(e, t) {
    let n = t.filter((e) => e.type === D.Puh.SUBSCRIPTION_GROUP),
        i = await Promise.all(n.map(async (t) => await (0, _X.vz)(e, t.id))),
        r = [];
    return (
        i.forEach((e) => {
            if (null == e) return null;
            let n = e.subscription_listings;
            if (null == n) return null;
            let i = [];
            n.forEach((e) => {
                e.subscription_plans.forEach((n) => {
                    let r = n?.price,
                        a = t.find((e) => e.id === n.sku_id);
                    if (null == a) return;
                    let l = {
                        id: n.sku_id,
                        name: a.name,
                        type: a.type,
                        price: { amount: r, currency: D.Yri.USD },
                        application_id: e.application_id,
                        flags: e.sku_flags,
                        release_date: a.release_date ?? null,
                    };
                    i.push(l);
                });
            }),
                i.filter((e) => e?.price != null).forEach((e) => r.push(e));
        }),
        r
    );
}
async function _J(e) {
    let { socket: t } = e;
    _Z(t.transport);
    let n = t.application.id;
    if (null == n) throw new h2.A({ errorCode: D.Lw6.INVALID_COMMAND }, "No application.");
    if ((0, h9.F)(n)) {
        let e = await _K.O1(n, !1),
            t = await _Q(n, e);
        return [...e.filter((e) => null != e.price), ...t];
    }
    let i = await _W.JI(n);
    return [
        ...i
            .filter((e) => e.sku.type !== D.Puh.SUBSCRIPTION_GROUP)
            .map((e) => e.sku)
            .filter((e) => null != e.price),
        ...(await _Q(
            n,
            i.map((e) => e.sku),
        )),
    ];
}
function _0(e) {
    let { socket: t } = e;
    _Z(t.transport);
    let n = t.application.id;
    if (null == n) throw new h2.A({ errorCode: D.Lw6.INVALID_COMMAND }, "No application.");
    return _q.LM(n);
}
let _1 = {
    [D.e$_.GET_SKUS]: { [dr.sm.ANY]: [dr.VH, dr.hj], handler: _J },
    [D.e$_.GET_ENTITLEMENTS]: { [dr.sm.ANY]: [dr.VH, dr.hj], handler: _0 },
    [D.e$_.GET_SKUS_EMBEDDED]: { [dr.sm.ANY]: [dr.VH, dr.hj], handler: async (e) => ({ skus: await _J(e) }) },
    [D.e$_.GET_ENTITLEMENTS_EMBEDDED]: {
        [dr.sm.ANY]: [dr.VH, dr.hj],
        handler: async (e) => ({ entitlements: await _0(e) }),
    },
};
n(142703);
var _8 = n(722306);
let _3 = {
    [D.e$_.SUBSCRIBE]: {
        async handler(e) {
            let { server: t, socket: n, evt: i, args: r } = e,
                a = t.events[i];
            if (null == a) throw new h2.A({ errorCode: D.Lw6.INVALID_EVENT }, `Invalid event: ${i}`);
            if (!(0, _8.A)(n.authorization.scopes, a.scope))
                throw new h2.A({ errorCode: D.Lw6.INVALID_PERMISSIONS }, "Not authenticated or invalid scope");
            if (
                (ec.default.track(D.HAw.RPC_SUBSCRIPTION_REQUESTED, {
                    event: i,
                    scope: "object" == typeof a.scope ? JSON.stringify(a.scope) : a.scope,
                    application_id: n.application.id,
                    socket_scope: n.authorization.scopes.toString(),
                }),
                null != a.validation)
            ) {
                let e = await t.getJoi();
                if (null != e.validate(r, a.validation(e), { convert: !1 }).error)
                    throw new h2.A({ errorCode: D.Lw6.INVALID_PAYLOAD }, "Invalid subscription parameters provided");
            }
            let l = a.handler({ args: r, socket: n }),
                s = (function (e, t, n) {
                    switch (t) {
                        case D.ZE4.ACTIVITY_PIP_MODE_UPDATE: {
                            let t = e.application?.id,
                                n = null != t ? rb.Ay.getLayoutModeForApp(t) : null;
                            return null != n ? { is_pip_mode: n !== hK.bN.FOCUSED } : null;
                        }
                        case D.ZE4.ACTIVITY_LAYOUT_MODE_UPDATE: {
                            let t = e.application?.id,
                                n = null != t ? rb.Ay.getLayoutModeForApp(t) : null;
                            return null != n ? { layout_mode: n } : null;
                        }
                        case D.ZE4.FRAME_LAYOUT_MODE_UPDATE: {
                            let t = null != e.application?.id ? tw.A.getConnectedFrame()?.layoutMode : null;
                            return null != t ? { layout_mode: t } : null;
                        }
                        case D.ZE4.THERMAL_STATE_UPDATE: {
                            let e = hk();
                            if (e === hj.UNHANDLED) return null;
                            return { thermal_state: e };
                        }
                        case D.ZE4.ORIENTATION_UPDATE:
                            return null;
                        case D.ZE4.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE:
                            return hz();
                        case D.ZE4.QUEST_ENROLLMENT_STATUS_UPDATE: {
                            let { quest_id: t } = n;
                            if (!t) return null;
                            let i = it.A.getQuest(t),
                                r = (0, hV.TP)(i);
                            if (null == i || null == r || r !== e.application?.id) return null;
                            return {
                                quest_id: t,
                                is_enrolled: i.userStatus?.enrolledAt != null,
                                enrolled_at: i.userStatus?.enrolledAt ?? null,
                            };
                        }
                        default:
                            return null;
                    }
                })(n, i, r);
            return new Promise((e) => {
                setImmediate(() => {
                    t.addSubscription(n, i, r, l),
                        null != s && t.dispatchToSubscriptions(i, (e) => e.socket.id === n.id, s);
                }),
                    e({ evt: i });
            });
        },
    },
    [D.e$_.UNSUBSCRIBE]: {
        handler(e) {
            let { server: t, socket: n, evt: i, args: r } = e;
            if (null == t.events[i]) throw new h2.A({ errorCode: D.Lw6.INVALID_EVENT }, `Invalid event: ${i}`);
            return t.removeSubscription(n, i, r), { evt: i };
        },
    },
};
var _2 = n(773669);
let _7 = { [D.e$_.USER_SETTINGS_GET_LOCALE]: { scope: hW.F.IDENTIFY, handler: () => ({ locale: _2.default.locale }) } },
    _4 = {
        [D.e$_.GET_USER]: h8(D.e$_.GET_USER, {
            scope: { [dr.sm.ANY]: [dr.W_, dr.hj] },
            handler(e) {
                let {
                        args: { id: t },
                    } = e,
                    n = iu.default.getUser(t);
                return null == n ? null : (0, h$.A)(n);
            },
        }),
    },
    _6 = {
        ..._t,
        ..._n,
        ..._a,
        ..._l,
        ..._s,
        ..._c,
        ..._p,
        ..._L,
        ..._y,
        ..._b,
        ..._w,
        ..._x,
        ..._V,
        ..._F,
        ..._1,
        ..._3,
        ..._4,
        ..._7,
        ..._v,
        ..._z,
        ...h4,
        ..._M,
    };
var _5 = n(52133),
    _9 = n(821956);
let Ee = (e) => _e(e).required().keys({ channel_id: e.string().required() });
function Et(e) {
    let {
            args: { channel_id: t },
            socket: n,
        } = e,
        i = i6.A.getChannel(t);
    if (null == i || !(0, hH.B_)(i, n.application.id, n.authorization.scopes))
        throw new h2.A({ errorCode: D.Lw6.INVALID_CHANNEL }, `Invalid channel id: ${t}`);
    if ((0, en.$v)(i)) throw new h2.A({ errorCode: D.Lw6.INVALID_CHANNEL }, `Invalid nsfw channel id: ${i.id}`);
}
let En = (e) => _e(e).keys({ channel_id: e.string().allow(null) });
function Ei(e) {
    let {
        args: { channel_id: t },
    } = e;
    if (null != t && null == i6.A.getChannel(t))
        throw new h2.A({ errorCode: D.Lw6.INVALID_CHANNEL }, `Invalid channel id: ${t}`);
}
let Er = {
    [D.ZE4.GUILD_STATUS]: {
        scope: hW.F.RPC,
        validation: (e) => _e(e).required().keys({ guild_id: e.string().required() }),
        handler(e) {
            let {
                args: { guild_id: t },
            } = e;
            if (null == rx.A.getGuild(t)) throw new h2.A({ errorCode: D.Lw6.INVALID_GUILD }, `Invalid guild id: ${t}`);
            return (e) => {
                let { prevState: n, dispatch: i } = e,
                    r = rx.A.getGuild(t);
                if (null == r) return;
                let a = { guild: { id: r.id, name: r.name, icon_url: (0, J.Iv)(r, 128) ?? null }, online: 0 };
                return eU().isEqual(n, a) || i(a), a;
            };
        },
    },
    [D.ZE4.VOICE_STATE_CREATE]: {
        scope: { [dr.sm.ANY]: [hW.F.RPC, hW.F.RPC_VOICE_READ] },
        validation: (e) => _e(e).required().keys({ channel_id: e.string().required() }),
        handler(e) {
            let {
                args: { channel_id: t },
            } = e;
            if (null == i6.A.getChannel(t))
                throw new h2.A({ errorCode: D.Lw6.INVALID_CHANNEL }, `Invalid channel id: ${t}`);
            return (e) => {
                let { prevState: n, dispatch: i } = e,
                    r = i6.A.getChannel(t);
                if (null == r) return;
                let a = r.getGuildId(),
                    l = Object.values(rV.A.getVoiceStatesForChannel(r.id));
                return (
                    n &&
                        eU()
                            .differenceBy(l, n, (e) => {
                                let { userId: t } = e;
                                return t;
                            })
                            .forEach((e) => i((0, hH.qG)(a, r.id, e))),
                    l
                );
            };
        },
    },
    [D.ZE4.VOICE_STATE_DELETE]: {
        scope: { [dr.sm.ANY]: [hW.F.RPC, hW.F.RPC_VOICE_READ] },
        validation: (e) => _e(e).required().keys({ channel_id: e.string().required() }),
        handler(e) {
            let {
                args: { channel_id: t },
            } = e;
            if (null == i6.A.getChannel(t))
                throw new h2.A({ errorCode: D.Lw6.INVALID_CHANNEL }, `Invalid channel id: ${t}`);
            return (e) => {
                let { prevState: n, dispatch: i } = e,
                    r = i6.A.getChannel(t);
                if (null == r) return;
                let a = r.getGuildId(),
                    l = Object.values(rV.A.getVoiceStatesForChannel(r.id));
                return (
                    eU()
                        .differenceBy(n, l, (e) => {
                            let { userId: t } = e;
                            return t;
                        })
                        .forEach((e) => i((0, hH.qG)(a, r.id, e))),
                    l
                );
            };
        },
    },
    [D.ZE4.VOICE_STATE_UPDATE]: {
        scope: { [dr.sm.ANY]: [hW.F.RPC, hW.F.RPC_VOICE_READ] },
        validation: (e) => _e(e).required().keys({ channel_id: e.string().required() }),
        handler(e) {
            let {
                args: { channel_id: t },
            } = e;
            if (null == i6.A.getChannel(t))
                throw new h2.A({ errorCode: D.Lw6.INVALID_CHANNEL }, `Invalid channel id: ${t}`);
            return (e) => {
                let { prevState: n, dispatch: i } = e,
                    r = i6.A.getChannel(t);
                if (null == r) return;
                let a = r.getGuildId(),
                    l = Object.values(rV.A.getVoiceStatesForChannel(r.id)).map((e) => (0, hH.qG)(a, r.id, e));
                return (
                    eU()
                        .differenceWith(l, n, eU().isEqual)
                        .forEach((e) => i(e)),
                    l
                );
            };
        },
    },
    [D.ZE4.VOICE_CONNECTION_STATUS]: {
        scope: { [dr.sm.ANY]: [hW.F.RPC, hW.F.RPC_VOICE_READ] },
        handler: () => (e) => {
            let { prevState: t, dispatch: n } = e,
                i = {
                    state: (0, hH.SK)(e7.A.getState()),
                    hostname: e7.A.getHostname(),
                    pings: e7.A.getPings(),
                    average_ping: e7.A.getAveragePing(),
                    last_ping: e7.A.getLastPing(),
                };
            return eU().isEqual(i, t) || n(i), i;
        },
    },
    [D.ZE4.MESSAGE_CREATE]: { scope: hW.F.RPC, validation: Ee, handler: Et },
    [D.ZE4.MESSAGE_UPDATE]: { scope: hW.F.RPC, validation: Ee, handler: Et },
    [D.ZE4.MESSAGE_DELETE]: { scope: hW.F.RPC, validation: Ee, handler: Et },
    [D.ZE4.SPEAKING_START]: {
        scope: { [dr.sm.ANY]: [hW.F.RPC, hW.F.RPC_VOICE_READ, dr.hj] },
        validation: En,
        handler: Ei,
    },
    [D.ZE4.SPEAKING_STOP]: {
        scope: { [dr.sm.ANY]: [hW.F.RPC, hW.F.RPC_VOICE_READ, dr.hj] },
        validation: En,
        handler: Ei,
    },
    [D.ZE4.GUILD_CREATE]: { scope: hW.F.RPC, handler() {} },
    [D.ZE4.CHANNEL_CREATE]: { scope: hW.F.RPC, handler() {} },
    [D.ZE4.GAME_JOIN]: { scope: { [dr.sm.ANY]: [hW.F.RPC, dr.hj] }, handler() {} },
    [D.ZE4.GAME_SPECTATE]: { scope: { [dr.sm.ANY]: [hW.F.RPC, dr.hj] }, handler() {} },
    [D.ZE4.ACTIVITY_JOIN]: { scope: { [dr.sm.ANY]: [hW.F.RPC, dr.VH, dr.hj] }, handler() {} },
    [D.ZE4.ACTIVITY_JOIN_REQUEST]: { scope: { [dr.sm.ANY]: [hW.F.RPC, dr.hj] }, handler() {} },
    [D.ZE4.ACTIVITY_SPECTATE]: { scope: { [dr.sm.ANY]: [hW.F.RPC, dr.VH, dr.hj] }, handler() {} },
    [D.ZE4.ACTIVITY_INVITE]: { scope: { [dr.sm.ANY]: [hW.F.RPC, dr.hj] }, handler() {} },
    [D.ZE4.ACTIVITY_PIP_MODE_UPDATE]: { scope: void 0, handler() {} },
    [D.ZE4.ACTIVITY_LAYOUT_MODE_UPDATE]: { scope: void 0, handler() {} },
    [D.ZE4.FRAME_LAYOUT_MODE_UPDATE]: { scope: void 0, handler() {} },
    [D.ZE4.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE]: {
        scope: hq,
        handler: () => (e) => {
            let { prevState: t, dispatch: n } = e,
                i = hz();
            return eU().isEqual(i, t) || n(i), i;
        },
    },
    [D.ZE4.THERMAL_STATE_UPDATE]: { scope: { [dr.sm.ANY]: [dr.VH] }, handler() {} },
    [D.ZE4.ORIENTATION_UPDATE]: { scope: { [dr.sm.ANY]: [dr.VH] }, handler() {} },
    [D.ZE4.VOICE_CHANNEL_SELECT]: { scope: hW.F.RPC, handler() {} },
    [D.ZE4.NOTIFICATION_CREATE]: { scope: { [dr.sm.ALL]: [hW.F.RPC, hW.F.RPC_NOTIFICATIONS_READ] }, handler() {} },
    [D.ZE4.RELATIONSHIP_UPDATE]: {
        scope: hW.F.RELATIONSHIPS_READ,
        handler(e) {
            let { socket: t } = e;
            if (cd.zy(cd.iu(t.application.flags ?? 0), cd.iu(D.gfo.DISABLE_RELATIONSHIPS_ACCESS)))
                throw new h2.A({ errorCode: D.Lw6.INVALID_PERMISSIONS }, "Missing Permissions");
        },
    },
    [D.ZE4.CURRENT_USER_UPDATE]: {
        scope: { [dr.sm.ANY]: [dr.hj, hW.F.IDENTIFY] },
        handler: () => (e) => {
            let { prevState: t, dispatch: n } = e,
                i = { currentUser: iu.default.getCurrentUser() };
            return null == i.currentUser || (null != t && (0, _5.A)(i, t)) || n((0, h$.A)(i.currentUser)), i;
        },
    },
    [D.ZE4.CURRENT_GUILD_MEMBER_UPDATE]: {
        scope: { [dr.sm.ALL]: [hW.F.IDENTIFY, hW.F.GUILDS_MEMBERS_READ] },
        handler(e) {
            let {
                args: { guild_id: t },
            } = e;
            return (e) => {
                let { prevState: n, dispatch: i } = e,
                    r = { currentGuildMember: lZ.Ay.getSelfMember(t) };
                return (
                    null == r.currentGuildMember ||
                        (null != n && (0, _5.A)(r, n)) ||
                        i(
                            (function (e) {
                                let {
                                    userId: t,
                                    nick: n,
                                    guildId: i,
                                    avatar: r,
                                    avatarDecoration: a,
                                    banner: l,
                                    bio: s,
                                    pronouns: o,
                                    colorString: d,
                                } = e;
                                return {
                                    user_id: t,
                                    nick: n,
                                    guild_id: i,
                                    avatar: r,
                                    avatar_decoration_data: (0, _9.Xq)(a),
                                    banner: l,
                                    bio: s,
                                    pronouns: o,
                                    color_string: d,
                                };
                            })(r.currentGuildMember),
                        ),
                    r
                );
            };
        },
    },
    [D.ZE4.ENTITLEMENT_CREATE]: { scope: { [dr.sm.ANY]: [dr.hj, dr.VH] }, handler() {} },
    [D.ZE4.ENTITLEMENT_DELETE]: { scope: { [dr.sm.ANY]: [dr.hj, dr.VH] }, handler() {} },
    [D.ZE4.SCREENSHARE_STATE_UPDATE]: {
        scope: { [dr.sm.ALL]: [dr.hj, hW.F.RPC_SCREENSHARE_READ] },
        handler: () => (e) => {
            let { prevState: t, dispatch: n } = e,
                i = oC.A.getStreamerActiveStreamMetadata(),
                r = i?.pid != null ? ef.Ay.getGameForPID(i.pid) : null,
                a = r?.id != null ? iY.A.getApplication(r.id) : null,
                l =
                    null != a
                        ? { name: a.name, id: a.id, icon: a.icon, cover_image: a.coverImage, type: a.type }
                        : null,
                s = i?.sourceName,
                o = {
                    active: null != i,
                    pid: i?.pid ?? null,
                    application: (null != l ?? null != s) ? { name: s } : null,
                };
            return eU().isEqual(o, t) || n(o), o;
        },
    },
    [D.ZE4.VIDEO_STATE_UPDATE]: {
        scope: { [dr.sm.ALL]: [dr.hj, hW.F.RPC_VIDEO_READ] },
        handler: () => (e) => {
            let { prevState: t, dispatch: n } = e,
                i = { active: eS.Ay.isVideoEnabled() };
            return eU().isEqual(i, t) || n(i), i;
        },
    },
    [D.ZE4.AUTHORIZE_REQUEST]: { scope: void 0, handler() {} },
};
var Ea = n(289919);
let El = {
        [D.ZE4.OVERLAY_UPDATE]: {
            scope: dr.hj,
            handler(e) {
                let {
                    args: { pid: t },
                    socket: n,
                } = e;
                if ("number" != typeof t || t < 10) throw new h2.A({ errorCode: D.Lw6.INVALID_EVENT }, "Invalid pid");
                return (e) => {
                    let { prevState: i, dispatch: r } = e,
                        a = Ay.default.enabled,
                        l = !0,
                        s = n.application.id;
                    if (null != s) {
                        let e = rU.A.getActiveLibraryApplication(s);
                        null != e && (a = a && e.isOverlayEnabled()), (l = cL.default.isLocked(t));
                    }
                    let o = { enabled: a, locked: l };
                    return eU().isEqual(o, i) || r(o), o;
                };
            },
        },
    },
    Es = {
        [D.ZE4.QUEST_ENROLLMENT_STATUS_UPDATE]: {
            scope: hW.F.IDENTIFY,
            validation: (e) => _e(e).required().keys({ quest_id: e.string().required() }),
            handler: function (e) {
                let {
                        args: { quest_id: t },
                        socket: n,
                    } = e,
                    i = it.A.getQuest(t),
                    r = (0, hV.TP)(i);
                if (null == i || null == r || r !== n.application.id)
                    throw new h2.A({ errorCode: D.Lw6.INVALID_COMMAND }, `Quest not found: ${t}`);
            },
        },
    };
var Eo = n(546983);
let Ed =
    ((u = Eo.l6),
    (A = Eo.Au),
    {
        [D.ZE4.VOICE_SETTINGS_UPDATE]: {
            scope: { [dr.sm.ANY]: [hW.F.RPC, hW.F.RPC_VOICE_READ] },
            handler: () => (e) => {
                let { prevState: t, dispatch: n } = e,
                    i = u();
                return eU().isEqual(i, t) || n(i), i;
            },
        },
        [D.ZE4.VOICE_SETTINGS_UPDATE_2]: {
            scope: dr.hj,
            handler(e) {
                let { socket: t } = e;
                return (e) => {
                    let { prevState: n, dispatch: i } = e;
                    if (null == t.application.id) return n;
                    let r = A(t.application.id);
                    return eU().isEqual(r, n) || i(r), r;
                };
            },
        },
    });
var Ec = n(298990),
    Eu = n(334738),
    EA = n(181658);
function Eh(e, t) {
    return null != e.application_id && null == t.getApplicationActivity(e.application_id, !1);
}
var E_ = n(293588),
    EE = n(383233),
    Ep = n(998218),
    Em = n(475815);
async function EI(e, t, n, i) {
    let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
        a = rG.A.getApplicationActivity(t);
    if (null == a || null == a.secrets || !(0, hH.px)(i, a.party, a.secrets))
        throw new h2.A(
            { errorCode: D.Lw6.NO_ELIGIBLE_ACTIVITY },
            "No eligible activity for application. Ensure an activity includes a party and appropriate secret.",
        );
    let l = Eh(a, rk.A);
    if (l) {
        let { lock: t } = (0, Eo.d5)(e);
        return (0, Ec.qf)(a, l).then(() => {
            throw (
                (t(),
                new h2.A(
                    { errorCode: D.Lw6.NO_ELIGIBLE_ACTIVITY },
                    "No eligible activity for application. Ensure user does have have privacy enabled.",
                ))
            );
        });
    }
    await rO.A.sendActivityInviteUser({ userId: n, type: i, activity: a, content: r, location: "In-Game Invite" });
}
let Eg = {
    [D.e$_.SEND_ACTIVITY_JOIN_INVITE]: {
        scope: { [dr.sm.ANY]: [hW.F.RPC, dr.hj] },
        handler(e) {
            let {
                    socket: t,
                    args: { user_id: n, pid: i },
                } = e,
                r = t.application.id;
            if (null == r) throw new h2.A({ errorCode: D.Lw6.INVALID_COMMAND }, "No application.");
            return EI(i, r, n, D.xL.JOIN);
        },
    },
    [D.e$_.CLOSE_ACTIVITY_JOIN_REQUEST]: {
        scope: { [dr.sm.ANY]: [hW.F.RPC, dr.hj] },
        handler(e) {
            let {
                    args: { user_id: t },
                } = e,
                n = i6.A.getDMFromUserId(t);
            null != n &&
                (0, Eu.ack)(
                    n,
                    {
                        section: D.JJy.CLOSE_ACTIVITY_JOIN_REQUEST_RPC_COMMAND,
                        object: D.ZSU.ACK_DECLINE_REQUEST_TO_JOIN,
                        objectType: D.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC,
                    },
                    !0,
                    !0,
                );
        },
    },
    [D.e$_.ACTIVITY_INVITE_USER]: {
        scope: { [dr.sm.ANY]: [hW.F.RPC, dr.hj] },
        validation: (e) =>
            _e(e)
                .required()
                .keys({
                    user_id: e.string().required(),
                    type: e.number().required().valid([D.xL.JOIN]),
                    content: e.string().min(0).max(1024),
                    pid: e.number().min(0).required(),
                }),
        handler(e) {
            let {
                    socket: t,
                    args: { type: n, user_id: i, content: r, pid: a },
                } = e,
                l = t.application.id;
            if (null == l) throw new h2.A({ errorCode: D.Lw6.INVALID_COMMAND }, "No application.");
            return EI(a, l, i, n, r);
        },
    },
    [D.e$_.ACCEPT_ACTIVITY_INVITE]: {
        scope: { [dr.sm.ANY]: [hW.F.RPC, dr.hj] },
        validation: (e) =>
            _e(e)
                .required()
                .keys({
                    type: e.number().required().valid([D.xL.JOIN]),
                    user_id: e.string().required(),
                    session_id: e.string().required(),
                    channel_id: e.string().required(),
                    message_id: e.string().required(),
                    application_id: e.string().optional(),
                }),
        handler(e) {
            let {
                    socket: t,
                    args: { type: n, user_id: i, session_id: r, channel_id: a, message_id: l, application_id: s },
                } = e,
                o = t.transport === dr.z4.IPC ? (s ?? t.application.id) : t.application.id;
            if (null == o) throw new h2.A({ errorCode: D.Lw6.INVALID_COMMAND }, "No application.");
            let d = Promise.resolve(!1);
            return (
                n === D.xL.JOIN &&
                    (d = ry.Ay.join({ userId: i, sessionId: r, applicationId: o, channelId: a, messageId: l })),
                d.then((e) => {
                    if (!e) throw new h2.A({ errorCode: D.Lw6.INVALID_INVITE }, "Invite is expired or invalid.");
                })
            );
        },
    },
    [D.e$_.OPEN_INVITE_DIALOG]: {
        scope: { [dr.sm.ANY]: [hW.F.RPC, dr.hj, dr.VH] },
        handler(e) {
            let { socket: t } = e,
                i = t.application;
            if (null == i.id) throw new h2.A({ errorCode: D.Lw6.INVALID_COMMAND }, "No application.");
            let { channel: r, guild: a, frame: l } = _E(),
                s = (0, _C.Ay)({ application: t.application, channelId: r?.id }),
                o = null != s ? eN.A.getWindow(s) : void 0;
            o?.closed && (o = void 0);
            let d = null != o ? D.BRT.POPOUT : D.BRT.APP;
            if (((0, Em.sP)({}, o?.document), null != l)) {
                if (l.applicationId !== i.id)
                    throw new h2.A({ errorCode: D.Lw6.INVALID_COMMAND }, "Application is not currently mounted.");
                let e = rG.A.getApplicationActivity(i.id);
                if (null != e) (0, Ec.qf)(e, !1, d);
                else
                    throw new h2.A(
                        { errorCode: D.Lw6.NO_ELIGIBLE_ACTIVITY },
                        "No eligible activity for application. Ensure an activity was set using setActivity.",
                    );
            } else
                (0, T.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([
                            n.e("36685"),
                            n.e("32101"),
                            n.e("58216"),
                            n.e("59957"),
                            n.e("19454"),
                            n.e("28136"),
                            n.e("16084"),
                            n.e("87317"),
                            n.e("22547"),
                        ]).then(n.bind(n, 1310));
                        return (t) =>
                            (0, E.jsx)(e, {
                                ...t,
                                guild: a,
                                channel: r,
                                applicationId: i.id,
                                analyticsLocation: D.ThZ.ACTIVITY_RPC,
                                source: D.PE1.ACTIVITY_INVITE,
                            });
                    },
                    { contextKey: d === D.BRT.POPOUT ? _g.KX : _g.SY },
                );
        },
    },
    [D.e$_.INITIATE_IMAGE_UPLOAD]: h8(D.e$_.INITIATE_IMAGE_UPLOAD, {
        scope: { [dr.sm.ANY]: [hW.F.RPC, dr.hj, dr.VH] },
        handler(e) {
            let { socket: t } = e,
                n = t.application.id;
            if (null == n) throw new h2.A({ errorCode: D.Lw6.INVALID_COMMAND }, "No application.");
            let i = h7()?.id;
            return new Promise((e, t) => {
                !(function (e, t) {
                    let n;
                    if ((0, _I.f)()) n = eN.A.getWindow(D.MLl.ACTIVITY_POPOUT);
                    else {
                        let e = eL.A.getLastFocusedWindowId();
                        n = null == e ? null : (0, s0.Iy)(e)?.renderWindow;
                    }
                    if (null == n) throw new h2.A({ errorCode: D.Lw6.UNKNOWN_ERROR }, "No valid window found");
                    let i = n.document.createElement("input");
                    (i.style.display = "none"),
                        (i.type = "file"),
                        (i.accept = "image/jpeg, image/jpg, image/png, image/gif");
                    let r = () => {
                        (null == i.files || 0 === i.files.length) && t(),
                            n.document.body.removeEventListener("focus", r, !0),
                            setTimeout(() => {
                                n.document.body.removeChild(i);
                            }, 1e3);
                    };
                    i.addEventListener("change", () => {
                        (0, re.Vq)(i.files) && e(i.files[0]), r();
                    }),
                        i.addEventListener("cancel", () => {
                            r();
                        }),
                        n.document.body.addEventListener("focus", r, !0),
                        n.document.body.appendChild(i),
                        i.click();
                })(
                    async (r) => {
                        let a = await (0, tV.CS)(n, i, r);
                        (0, re.Vq)(a) && (0, re.Vq)(a.url) && !(a instanceof EA.A) ? e({ image_url: a.url }) : t(a);
                    },
                    () => t(Error("Upload canceled")),
                );
            }).catch((e) => {
                throw new h2.A({ errorCode: D.Lw6.UNKNOWN_ERROR }, e?.message ?? "Failed to upload image");
            });
        },
    }),
    [D.e$_.OPEN_SHARE_MOMENT_DIALOG]: h8(D.e$_.OPEN_SHARE_MOMENT_DIALOG, {
        scope: { [dr.sm.ANY]: [dr.VH] },
        handler(e) {
            let {
                socket: t,
                args: { mediaUrl: i },
            } = e;
            (0, hH.lG)(t.transport);
            let r = t.application.id;
            if (null == r) throw new h2.A({ errorCode: D.Lw6.INVALID_COMMAND }, "No application.");
            if (!(0, h3.n)(t.application, D.gfo.EMBEDDED))
                throw new h2.A({ errorCode: D.Lw6.INVALID_COMMAND }, "This application cannot access this API");
            let a = h7();
            if (!Ep.A.isDiscordCdnUrl(i))
                throw new h2.A({ errorCode: D.Lw6.INVALID_PAYLOAD }, "mediaUrl must be a Discord CDN url");
            !(function (e) {
                let { applicationId: t, channelId: i, mediaUrl: r } = e,
                    a = iY.A.getApplication(t),
                    l = null != (0, _C.Ay)({ application: a, channelId: i }) ? _g.KX : _g.SY;
                (0, T.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([
                            n.e("24092"),
                            n.e("22230"),
                            n.e("44780"),
                            n.e("36946"),
                            n.e("92639"),
                            n.e("40963"),
                            n.e("90480"),
                            n.e("66031"),
                            n.e("94317"),
                            n.e("21743"),
                        ]).then(n.bind(n, 190930));
                        return (n) => (0, E.jsx)(e, { applicationId: t, mediaUrl: r, ...n });
                    },
                    { modalKey: "activity-share-moment-modal", contextKey: l },
                );
            })({ applicationId: r, channelId: a?.id, mediaUrl: i });
        },
    }),
    [D.e$_.SHARE_INTERACTION]: h8(D.e$_.SHARE_INTERACTION, {
        scope: { [dr.sm.ANY]: [dr.VH, dr.hj] },
        handler(e) {
            let t,
                {
                    socket: n,
                    args: {
                        command: i,
                        preview_image: r,
                        components: a,
                        require_launch_channel: l,
                        content: s,
                        options: o,
                        pid: d,
                    },
                } = e,
                c = n.application.id;
            if (null == c) throw new h2.A({ errorCode: D.Lw6.INVALID_COMMAND }, "No application.");
            if (!hK.mO.includes(c)) throw new h2.A({ errorCode: D.Lw6.INVALID_COMMAND }, "Unsupported application.");
            if (!(0, h3.n)(n.application, D.gfo.EMBEDDED))
                throw new h2.A({ errorCode: D.Lw6.INVALID_COMMAND }, "This application cannot access this API");
            let u = h7();
            if (null == u && l) throw new h2.A({ errorCode: D.Lw6.INVALID_COMMAND }, "No channel found");
            if (null !== r || null !== a || null !== s) {
                let e = [];
                void 0 !== r &&
                    (e = [
                        {
                            id: lJ.default.cast(lJ.default.fromTimestamp(Date.now())),
                            size: 0,
                            proxy_url: r.url,
                            filename: "preview",
                            url: r.url,
                            height: r.height,
                            width: r.width,
                        },
                    ]),
                    (t = new EE.Ay({
                        id: lJ.default.cast(lJ.default.fromTimestamp(Date.now())),
                        applicationId: c,
                        content: s,
                        components: a,
                        attachments: e,
                    }));
            }
            return new Promise((e) => {
                let n = !1,
                    r = (0, Eo.d5)(d),
                    a = _g.SY;
                (eN.A.getWindowOpen(D.MLl.ACTIVITY_POPOUT) || r.context === D.BRT.POPOUT) && (a = _g.KX),
                    (0, E_.m)({
                        applicationId: c,
                        channel: u,
                        command: { name: i, options: o },
                        requireLaunchChannel: !0 === l,
                        onShareResult: (t) => {
                            n || (n = t), r.lock(), e({ success: n });
                        },
                        previewMessage: t,
                        contextKey: a,
                    });
            });
        },
    }),
};
var EC = n(469778);
let ET = 10 * eu.A.Millis.SECOND,
    Ef = {
        [D.e$_.VALIDATE_APPLICATION]: {
            scope: dr.hj,
            handler(e) {
                let { socket: t } = e,
                    i = t.application.id;
                try {
                    var r;
                    let e;
                    if (null == i) throw new h2.A({ errorCode: D.Lw6.INVALID_COMMAND }, "No application.");
                    let t = iY.A.getApplication(i);
                    if (null == t) throw new h2.A({ errorCode: D.Lw6.INVALID_ENTITLEMENT }, "SKU does not exist.");
                    let n = t.primarySkuId;
                    if (null == n) throw new h2.A({ errorCode: D.Lw6.INVALID_ENTITLEMENT }, "SKU does not exist.");
                    return Promise.race([
                        ((r = t.id),
                        (e = EC.A.isEntitledToSku(iu.default.getCurrentUser(), n, r)),
                        null != e
                            ? Promise.resolve(e)
                            : (0, _q.LM)(r).then(
                                  () => !0 === EC.A.isEntitledToSku(iu.default.getCurrentUser(), n, r),
                              )).then((e) => {
                            if (!e)
                                throw new h2.A(
                                    { errorCode: D.Lw6.INVALID_ENTITLEMENT },
                                    "User does not have entitlement.",
                                );
                        }),
                        (0, ed.BK)(ET).then(() => {
                            throw new h2.A({ errorCode: D.Lw6.INVALID_ENTITLEMENT }, "Timed out fetching entitlement.");
                        }),
                    ]);
                } catch (e) {
                    throw (
                        (e.code === D.Lw6.INVALID_ENTITLEMENT &&
                            (eJ.Ay.focus(null, !0),
                            (0, T.openModalLazy)(async () => {
                                let { default: e } = await n.e("26766").then(n.bind(n, 448701));
                                return (t) => (0, E.jsx)(e, { ...t, applicationId: i });
                            })),
                        e)
                    );
                }
            },
        },
        [D.e$_.GET_ENTITLEMENT_TICKET]: {
            scope: dr.hj,
            handler(e) {
                let { socket: t } = e,
                    i = t.application.id;
                if (null == i) throw new h2.A({ errorCode: D.Lw6.INVALID_COMMAND }, "No application.");
                return h6.Bo.post({
                    url: D.Rsh.ENTITLEMENT_TICKET(i),
                    body: { test_mode: (0, h9.F)(i) },
                    retries: 3,
                    oldFormErrors: !0,
                    rejectWithError: !1,
                })
                    .then((e) => {
                        let { body: t } = e;
                        return t;
                    })
                    .catch((e) => {
                        throw (
                            (eJ.Ay.focus(null, !0),
                            (0, T.openModalLazy)(async () => {
                                let { default: e } = await n.e("26766").then(n.bind(n, 448701));
                                return (t) => (0, E.jsx)(e, { ...t, applicationId: i });
                            }),
                            e)
                        );
                    });
            },
        },
    };
var EN = n(200330),
    ES = n(321987),
    EL = n(595244),
    EO = n(488428),
    Ey = n(485845),
    Eb = n(898467),
    Ev = n(224750),
    EP = n(716965),
    ER = n(671523),
    ED = n(337095),
    Ew = n(395671),
    EM = n(488926);
let Ex = "CachedTokens",
    EU = { "1273616940451102832": new Eb.A(2, +eu.A.Millis.MINUTE) };
async function EG(e, t, n) {
    let i,
        r,
        a,
        l,
        s,
        {
            client_id: o,
            response_type: d = "code",
            redirect_uri: c,
            code_challenge: u,
            code_challenge_method: A,
            state: h,
            nonce: _,
            scope: E,
            permissions: p,
            guild_id: m,
            channel_id: I,
            prompt: g,
            disable_guild_select: C,
            integration_type: T,
            pid: f,
            signal: N,
            isSocketRpcPrivateScope: S,
        } = e;
    if (N?.aborted) throw new h2.A({ errorCode: D.Lw6.UNKNOWN_ERROR }, "Request aborted");
    if (null == o) throw new h2.A({ errorCode: D.Lw6.OAUTH2_ERROR }, "No Client ID provided");
    if (!S && null != c)
        throw new h2.A(
            { errorCode: D.Lw6.OAUTH2_ERROR },
            "Redirect URI cannot be used in the RPC OAuth2 Authorization flow",
        );
    let L = [];
    if (
        ("string" == typeof E ? (L = E.split(" ").filter((e) => e.length > 0)) : Array.isArray(E) && (L = E),
        null == iu.default.getCurrentUser())
    )
        throw new h2.A({ errorCode: D.Lw6.OAUTH2_ERROR }, "Client is not logged in");
    if (null != T) r = Number(T);
    else {
        let e = (e) => (0, h3.n)(e, D.gfo.EMBEDDED) && e?.integrationTypesConfig?.[Ey.b.USER_INSTALL] != null,
            t = iY.A.getApplication(o);
        r = e(t) || e((t = Ew.Ay.createFromServer(await (0, ED.TA)(o, N)))) ? Ey.b.USER_INSTALL : Ey.b.GUILD_INSTALL;
    }
    try {
        [a, { disclosures: l, allAcked: s }] = await Promise.all([
            (0, EP.qY)({
                clientId: o,
                scopes: L,
                responseType: d,
                redirectUri: c,
                codeChallenge: u,
                codeChallengeMethod: A,
                state: h,
                integrationType: r,
                signal: N,
            }),
            (0, Ev.vG)(o),
        ]);
    } catch (t) {
        let { body: e } = t;
        throw new h2.A(
            { errorCode: D.Lw6.OAUTH2_ERROR },
            `OAuth2 Authorization Error: ${e?.message || "Unknown Error"}`,
        );
    }
    if (g === ER.l.NONE && null != a && a.authorized && s)
        try {
            return (
                await (0, EP.Gq)({
                    authorize: !0,
                    clientId: o,
                    scopes: L,
                    responseType: d,
                    redirectUri: c,
                    codeChallenge: u,
                    codeChallengeMethod: A,
                    state: h,
                    nonce: _,
                    integrationType: r,
                })
            ).location;
        } catch (t) {
            let { body: e } = t;
            throw new h2.A(
                { errorCode: D.Lw6.OAUTH2_ERROR },
                `OAuth2 Authorize Error: ${e?.message || "Unknown Error"}`,
            );
        }
    n?.(a.application, I, f);
    let O = EM.x3;
    try {
        O = cd.iu(p ?? 0);
    } catch (e) {}
    if (
        (null != a.integration_type &&
            Object.values(Ey.b).includes(a.integration_type) &&
            (i = new Map()).set(a.integration_type, a),
        null != EU[a.application.id] && (await EU[a.application.id].process(), N?.aborted))
    )
        throw new h2.A({ errorCode: D.Lw6.UNKNOWN_ERROR }, "Request aborted");
    return t({
        clientId: o,
        authorizations: i,
        scopes: L,
        parsedPermissions: O,
        responseType: d,
        redirectUri: c,
        codeChallenge: u,
        codeChallengeMethod: A,
        state: h,
        guildId: m,
        channelId: I,
        prompt: g,
        disableGuildSelect: C,
        disclosures: l,
        integrationType: r,
        pid: f,
        signal: N,
    });
}
function Ej(e, t) {
    if (e.authorization.accessToken) throw new h2.A({ errorCode: D.Lw6.INVALID_COMMAND }, "Already authenticated");
    if (e.authorization.authing) throw new h2.A({ errorCode: D.Lw6.INVALID_COMMAND }, "Already authenticating");
    return (
        (e.authorization.authing = !0),
        h6.Bo.get({
            url: D.Rsh.OAUTH2_CURRENT_AUTH,
            headers: { Authorization: `Bearer ${t}` },
            oldFormErrors: !0,
            rejectWithError: !1,
        })
            .then(
                (n) => {
                    e.authorization.authing = !1;
                    let { application: i, user: r, scopes: a, expires: l } = n.body;
                    if (e.application.id !== i.id)
                        throw new h2.A(
                            { errorCode: D.Lw6.INVALID_CLIENTID },
                            "Application does not match the connection's",
                        );
                    let s = iu.default.getCurrentUser();
                    if (null == s || !r || s.id !== r.id)
                        throw new h2.A({ errorCode: D.Lw6.INVALID_TOKEN }, "Token does not match current user");
                    return (
                        (e.authorization.scopes = [...e.authorization.scopes, ...a, dr.VH]),
                        (e.authorization.accessToken = t),
                        (e.authorization.expires = new Date(l)),
                        W.h.dispatch({ type: "RPC_APP_AUTHENTICATED", socketId: e.id, application: e.application }),
                        { ...n.body, access_token: t }
                    );
                },
                () => {
                    throw new h2.A({ errorCode: D.Lw6.INVALID_TOKEN }, `Invalid access token: ${t}`);
                },
            )
            .catch((t) => {
                throw ((e.authorization.authing = !1), t);
            })
    );
}
let Ek =
    ((h = (e) => {
        let {
                clientId: t,
                authorizations: n,
                scopes: i,
                parsedPermissions: r,
                responseType: a,
                redirectUri: l,
                codeChallenge: s,
                codeChallengeMethod: o,
                state: d,
                guildId: c,
                channelId: u,
                prompt: A,
                disableGuildSelect: h,
                disclosures: _,
                integrationType: p,
                pid: m,
                signal: I,
            } = e,
            g = `OAuth2Authorize_${t}_${c}_${u}`,
            C = null != p ? n?.get(p) : void 0,
            f = C?.application ?? iY.A.getApplication(t);
        return new Promise((e, C) => {
            let N = (0, Eo.d5)(m),
                S = _g.SY;
            null != f && null != (0, _C.Ay)({ application: f, channelId: u })
                ? (S = _g.KX)
                : N.context === D.BRT.POPOUT && (S = _g.KX);
            let L = !1,
                O = (n) => {
                    let { clientId: i, location: r } = n;
                    if (null == i || i === t) {
                        if (((L = !0), null == r)) {
                            C(new h2.A({ errorCode: D.Lw6.OAUTH2_ERROR }, "OAuth2 Error: No location provided")),
                                N.lock();
                            return;
                        }
                        (e(r), null == l || null == f)
                            ? N.lock()
                            : null == new URL(r).searchParams.get("error")
                              ? (0, T.openModal)(
                                    (e) => (0, E.jsx)(EL.Sm, { application: f, ...e }),
                                    {
                                        onCloseCallback: () => {
                                            N.lock();
                                        },
                                    },
                                    S,
                                )
                              : (0, T.openModal)(
                                    (e) => (0, E.jsx)(EL.xb, { ...e }),
                                    {
                                        onCloseCallback: () => {
                                            N.lock();
                                        },
                                    },
                                    S,
                                );
                    }
                },
                { cleanup: y } = (function (e, t) {
                    function n() {
                        (0, T.closeModal)(e) &&
                            (0, T.openModal)((e) =>
                                (0, E.jsx)(ES.f, {
                                    ...e,
                                    title: G.intl.string(G.t.j2d6Km),
                                    subtitle: G.intl.string(G.t["4LKmN5"]),
                                    actions: [{ text: G.intl.string(G.t.cpT0Cq), onClick: e.onClose }],
                                }),
                            );
                    }
                    return (
                        t?.addEventListener("abort", n),
                        {
                            cleanup: function () {
                                t?.removeEventListener("abort", n);
                            },
                        }
                    );
                })(g, I);
            (0, T.openModal)(
                (e) =>
                    (0, E.jsx)(EN.OAuth2AuthorizeModal, {
                        ...e,
                        authorizations: n,
                        clientId: t,
                        scopes: i ?? [],
                        disclosures: _ ?? [],
                        callback: O,
                        responseType: a,
                        redirectUri: l,
                        codeChallenge: s,
                        codeChallengeMethod: o,
                        state: d,
                        permissions: r,
                        guildId: c,
                        channelId: u,
                        prompt: A,
                        disableGuildSelect: "boolean" == typeof h ? h : "true" === h,
                        integrationType: p,
                        cancelCompletesFlow: !0,
                    }),
                {
                    modalKey: g,
                    onCloseCallback: () => {
                        y(),
                            L ||
                                (C(new h2.A({ errorCode: D.Lw6.OAUTH2_ERROR }, "User cancelled authorization")),
                                N.lock());
                    },
                },
                S,
            );
        });
    }),
    (_ = function (e, t, n) {
        if ((0, Eo.kS)(n) || !U.isPlatformEmbedded) return;
        let i = (0, _C.Ay)({ application: e, channelId: t });
        (0, U.isWindows)() ? eJ.Ay.minimize(i) : eJ.Ay.restore(i), eJ.Ay.focus(i);
    }),
    {
        [D.e$_.AUTHENTICATE]: h8(D.e$_.AUTHENTICATE, {
            handler(e) {
                let {
                    socket: t,
                    signal: n,
                    args: { access_token: i },
                } = e;
                if (null == i && t.transport === dr.z4.IPC) {
                    let e = t.application.id;
                    if (null == e) throw new h2.A({ errorCode: D.Lw6.INVALID_COMMAND }, "No application.");
                    let r = hW.F.IDENTIFY,
                        a = () =>
                            EG(
                                {
                                    client_id: e,
                                    scope: r,
                                    response_type: "token",
                                    signal: n,
                                    isSocketRpcPrivateScope: !1,
                                },
                                h,
                                _,
                            ).then((n) => {
                                var i, r, a;
                                let l;
                                if (null == n)
                                    throw new h2.A({ errorCode: D.Lw6.UNKNOWN_ERROR }, "Unknown error occurred");
                                let s = n.split(/#|\?/),
                                    o = EO.parse(s[s.length - 1]);
                                if (null != o.error)
                                    throw new h2.A(
                                        { errorCode: D.Lw6.OAUTH2_ERROR },
                                        `OAuth2 Error: ${o.error}: ${o.error_description ?? "unknown error"}`,
                                    );
                                return (
                                    (i = o.access_token),
                                    (r = o.scope),
                                    (a = o.expires_in),
                                    ((l = ta.w.get(Ex) ?? {})[e] = {
                                        accessToken: i,
                                        scope: r,
                                        expires: Date.now() + a,
                                    }),
                                    ta.w.set(Ex, l),
                                    Ej(t, o.access_token)
                                );
                            });
                    return null !=
                        (i = (function (e, t) {
                            let n = ta.w.get(Ex);
                            if (null != n && null != n[e]) {
                                let i = n[e];
                                if (!(i.scope !== t || i.expires <= Date.now())) return i.accessToken;
                                delete n[e], ta.w.set(Ex, n);
                            }
                        })(e, r))
                        ? Ej(t, i).catch(() => {
                              let t;
                              return (t = ta.w.get(Ex) ?? {}), delete t[e], ta.w.set(Ex, t), a();
                          })
                        : a();
                }
                if (null == i) throw new h2.A({ errorCode: D.Lw6.INVALID_TOKEN }, "No access token provided");
                return Ej(t, i);
            },
        }),
        [D.e$_.AUTHORIZE]: {
            handler(e) {
                let { socket: t, signal: n, args: i } = e,
                    r = i.client_id;
                if (!r) throw new h2.A({ errorCode: D.Lw6.INVALID_CLIENTID }, "No client id provided");
                if (null != t.authorization.accessToken)
                    throw new h2.A({ errorCode: D.Lw6.INVALID_COMMAND }, "Already authenticated");
                if (t.authorization.authing) throw new h2.A({ errorCode: D.Lw6.INVALID_COMMAND }, "Already authing");
                if (((t.authorization.authing = !0), "token" === i.response_type))
                    throw (
                        ((t.authorization.authing = !1),
                        new h2.A(
                            { errorCode: D.Lw6.INVALID_COMMAND },
                            'Authorization response_type "token" is not supported',
                        ))
                    );
                let a = t.authorization.scopes.includes(dr.LQ);
                if (!a && t.application.id !== r)
                    throw (
                        ((t.authorization.authing = !1),
                        new h2.A({ errorCode: D.Lw6.INVALID_CLIENTID }, "Application does not match the connection's"))
                    );
                let l = i.scopes || i.scope;
                return (
                    delete i.scopes,
                    EG({ ...i, scope: l, signal: n, isSocketRpcPrivateScope: a }, h, _)
                        .then((e) => {
                            if (((t.authorization.authing = !1), null == e))
                                throw new h2.A({ errorCode: D.Lw6.UNKNOWN_ERROR }, "Unknown error occurred");
                            let n = new URL(e),
                                i = n.searchParams.get("code");
                            if (a) return { code: i, location: e };
                            let r = n.searchParams.get("error");
                            if (null != r && "" !== r) {
                                let e = n.searchParams.get("error_description") ?? "unknown error";
                                throw new h2.A({ errorCode: D.Lw6.OAUTH2_ERROR }, `OAuth2 Error: ${r}: ${e}`);
                            }
                            if (null == i)
                                throw new h2.A(
                                    { errorCode: D.Lw6.OAUTH2_ERROR },
                                    "OAuth2 Error: Unable to find auth code",
                                );
                            return { code: i };
                        })
                        .catch((e) => {
                            throw ((t.authorization.authing = !1), e);
                        })
                );
            },
        },
    });
var EV = n(845187);
let EF = "activity-hardware-acceleration-modal",
    EH = {
        [D.e$_.ENCOURAGE_HW_ACCELERATION]: {
            validation: (e) => _e(e),
            handler(e) {
                let { socket: t } = e;
                (0, hH.lG)(t.transport);
                let i = t.application.id;
                if (null != i)
                    return (
                        tq.Ay.disableActivityHardwareAccelerationPrompt ||
                            !U.isPlatformEmbedded ||
                            eJ.Ay.getEnableHardwareAcceleration() ||
                            (0, T.openModalLazy)(
                                async () => {
                                    let { default: e } = await Promise.resolve().then(n.bind(n, 845187));
                                    return (t) => (0, E.jsx)(e, { applicationId: i, ...t });
                                },
                                {
                                    modalKey: EF,
                                    onCloseRequest: () => {
                                        ec.default.track(D.HAw.MODAL_DISMISSED, { type: EV.a }), (0, T.closeModal)(EF);
                                    },
                                },
                            ),
                        { enabled: eJ.Ay.getEnableHardwareAcceleration() }
                    );
            },
        },
    };
var EB = n(43203);
let EY = {
        [D.e$_.OPEN_MESSAGE]: {
            scope: dr.hj,
            handler(e) {
                let {
                    args: { guild_id: t, channel_id: n, message_id: i, pid: r },
                } = e;
                (0, Eo.d5)(r).context === D.BRT.OVERLAY
                    ? W.h.dispatch({ type: "OVERLAY_OPEN_MESSAGE", guildId: t, channelId: n, messageId: i })
                    : ((0, aL.bG)({ pathname: D.BVt.CHANNEL(t, n, i) }), eJ.Ay.focus());
            },
        },
    },
    E$ = new ct.A("RPCCommandsOverlay"),
    Ez = {
        [D.e$_.SET_OVERLAY_LOCKED]: {
            scope: dr.hj,
            validation: (e) =>
                _e(e)
                    .required()
                    .keys({ locked: e.boolean().required(), pid: e.number().min(0).required() }),
            handler(e) {
                let {
                    args: { locked: t, pid: n },
                    socket: { application: i },
                } = e;
                if ((E$.verbose("RPCCommands.SET_OVERLAY_LOCKED", { locked: t, pid: n }), null == i.id))
                    throw new h2.A({ errorCode: D.Lw6.INVALID_COMMAND }, "No application.");
                Ac.A.setInputLocked(t, n);
            },
        },
        [D.e$_.OPEN_OVERLAY_ACTIVITY_INVITE]: {
            scope: dr.hj,
            validation: (e) =>
                _e(e)
                    .required()
                    .keys({ type: e.number().required().valid([D.xL.JOIN]), pid: e.number().min(0).required() }),
            handler(e) {
                let {
                        socket: t,
                        args: { type: n, pid: i },
                    } = e,
                    r = t.application.id;
                if (null == r) throw new h2.A({ errorCode: D.Lw6.INVALID_COMMAND }, "No application.");
                let a = rG.A.getApplicationActivity(r);
                if (null == a || null == a.secrets || !(0, hH.px)(n, a.party, a.secrets))
                    throw new h2.A(
                        { errorCode: D.Lw6.NO_ELIGIBLE_ACTIVITY },
                        "No eligible activity for application. Ensure an activity includes a party and appropriate secret.",
                    );
                let { lock: l, context: s } = (0, Eo.d5)(i),
                    o = Eh(a, rk.A);
                return (0, Ec.qf)(a, o, s).then(() => {
                    if ((l(), o))
                        throw new h2.A(
                            { errorCode: D.Lw6.NO_ELIGIBLE_ACTIVITY },
                            "No eligible activity for application. Ensure user does have have privacy enabled.",
                        );
                });
            },
        },
        [D.e$_.OPEN_OVERLAY_GUILD_INVITE]: {
            scope: dr.hj,
            validation: (e) =>
                _e(e)
                    .required()
                    .keys({ code: e.string().required(), pid: e.number().min(0).required() }),
            handler(e) {
                let {
                    args: { code: t, pid: n },
                    socket: i,
                } = e;
                if (null == i.application.id) throw new h2.A({ errorCode: D.Lw6.INVALID_COMMAND }, "No application.");
                return u0.Ay.resolveInvite(t, "Game SDK").then((e) => {
                    let { invite: t, code: i } = e;
                    if (null == t) throw new h2.A({ errorCode: D.Lw6.INVALID_INVITE }, `Invalid invite id: ${i}`);
                    let { context: r, lock: a } = (0, Eo.d5)(n);
                    return new Promise((e) => {
                        W.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: t, code: i, context: r, resolve: e });
                    }).then(a);
                });
            },
        },
        [D.e$_.OPEN_OVERLAY_VOICE_SETTINGS]: {
            scope: dr.hj,
            validation: (e) =>
                _e(e)
                    .required()
                    .keys({ pid: e.number().min(0).required() }),
            handler(e) {
                let {
                        args: { pid: t },
                        socket: i,
                    } = e,
                    r = i.application.id;
                if (null == r) throw new h2.A({ errorCode: D.Lw6.INVALID_COMMAND }, "No application.");
                let { lock: a, context: l } = (0, Eo.d5)(t);
                return new Promise((e) => {
                    (0, T.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.all([
                                n.e("62631"),
                                n.e("41909"),
                                n.e("63397"),
                                n.e("20287"),
                                n.e("28367"),
                                n.e("58337"),
                                n.e("25246"),
                                n.e("27838"),
                                n.e("97162"),
                                n.e("46327"),
                                n.e("96531"),
                            ]).then(n.bind(n, 880510));
                            return (t) =>
                                (0, E.jsx)(e, { ...t, mediaEngineContext: r, subtitle: i.application.name ?? void 0 });
                        },
                        {
                            contextKey: l === D.BRT.POPOUT ? _g.KX : _g.SY,
                            onCloseCallback: () => {
                                a(), e();
                            },
                        },
                    );
                });
            },
        },
    };
var Eq = n(132500),
    EK = n(80703),
    EW = n(6981),
    EX = n(956549),
    EZ = n(257269),
    EQ = n(323082),
    EJ = n(121623),
    E0 = n(708281);
function E1(e, t) {
    let { fingerprint: n, installationId: i } = e;
    (null != n || null != i) &&
        ec.default.track(D.HAw.EXTERNAL_DYNAMIC_LINK_RECEIVED, {
            invite_code: null,
            has_auth_token: null,
            is_backgrounded: null,
            fingerprint: null != n ? (0, EK.d)(n) : null,
            received_installation_id: i,
            link_type: t,
        });
}
let E8 = {
        [D.e$_.INVITE_BROWSER]: {
            scope: dr.LQ,
            async handler(e) {
                let {
                    args: { code: t, ...n },
                } = e;
                return await (0, EB.$)(t, "Desktop Modal", n);
            },
        },
        [D.e$_.GUILD_TEMPLATE_BROWSER]: {
            scope: dr.LQ,
            async handler(e) {
                let {
                    args: { code: t },
                } = e;
                if (null == iu.default.getCurrentUser()) return;
                let { guildTemplate: i } = await EJ.A.resolveGuildTemplate(t);
                if (null == i)
                    throw new h2.A({ errorCode: D.Lw6.INVALID_GUILD_TEMPLATE }, `Invalid guild template id: ${t}`);
                return (
                    eJ.Ay.focus(),
                    (0, T.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([
                            n.e("6287"),
                            n.e("45235"),
                            n.e("32101"),
                            n.e("99430"),
                            n.e("72465"),
                            n.e("88599"),
                            n.e("83952"),
                            n.e("82486"),
                            n.e("19580"),
                            n.e("26185"),
                            n.e("35383"),
                            n.e("92152"),
                        ]).then(n.bind(n, 72715));
                        return (t) => (0, E.jsx)(e, { ...t, guildTemplate: i });
                    }),
                    { guildTemplate: i, code: t }
                );
            },
        },
        [D.e$_.GIFT_CODE_BROWSER]: {
            scope: dr.LQ,
            handler(e) {
                let {
                    args: { code: t },
                } = e;
                return new Promise((e, i) => {
                    W.h.wait(() => {
                        S.A.resolveGiftCode(t, !0, !0)
                            .then((i) => {
                                let { giftCode: r } = i;
                                eJ.Ay.focus(),
                                    ec.default.track(D.HAw.OPEN_MODAL, { type: "gift_accept", location: D.$OG }),
                                    (0, T.openModalLazy)(async () => {
                                        let { default: e } = await Promise.all([
                                            n.e("73646"),
                                            n.e("35429"),
                                            n.e("10471"),
                                            n.e("23808"),
                                            n.e("78453"),
                                            n.e("30788"),
                                            n.e("7200"),
                                        ]).then(n.bind(n, 361845));
                                        return (n) => (0, E.jsx)(e, { code: t, ...n });
                                    }),
                                    e({ giftCode: r });
                            })
                            .catch(() =>
                                i(new h2.A({ errorCode: D.Lw6.INVALID_GIFT_CODE }, `Invalid gift code: ${t}`)),
                            );
                    });
                });
            },
        },
        [D.e$_.DEEP_LINK]: {
            scope: { [dr.sm.ANY]: [dr.LQ, dr.hj] },
            handler(e) {
                let {
                    args: { type: t, params: i },
                } = e;
                switch ((eJ.Ay.focus(), t)) {
                    case dr.XK.USER_SETTINGS:
                        null != i &&
                            (0, uJ.B)(() => {
                                let e = D.BVt.SETTINGS(i.section, i.subsection),
                                    n = (0, lW.parseSettingsUrl)({ path: e, search: i.search });
                                (0, lW.trackParseSettingsUrl)(n, "deeplink"),
                                    (0, e2.openUserSettings)(n.target, { path: n.path, searchParams: n.params }),
                                    E1(i, (0, dr.OE)(t));
                            });
                        break;
                    case dr.XK.CHANGELOG:
                        null != i &&
                            ((0, aL.pX)(Ep.A.formatPathWithQuery(D.BVt.CHANGELOGS(i.date), i.query)),
                            E1(i, (0, dr.OE)(t)));
                        break;
                    case dr.XK.LIBRARY:
                        (0, aL.pX)(D.BVt.APPLICATION_LIBRARY), null != i && E1(i, (0, dr.OE)(t));
                        break;
                    case dr.XK.STORE_HOME:
                        (0, aL.pX)(D.BVt.APPLICATION_STORE), null != i && E1(i, (0, dr.OE)(t));
                        break;
                    case dr.XK.STORE_LISTING:
                        null != i &&
                            ((0, aL.pX)(D.BVt.APPLICATION_STORE_LISTING_SKU(i.skuId, i.slug)), E1(i, (0, dr.OE)(t)));
                        break;
                    case dr.XK.PICK_GUILD_SETTINGS:
                        null != i &&
                            ((0, aL.pX)(D.BVt.PICK_GUILD_SETTINGS(i.section, i.subsection), { search: i.search }),
                            E1(i, (0, dr.OE)(t)));
                        break;
                    case dr.XK.CHANNEL:
                        null != i &&
                            ((0, aL.pX)(D.BVt.CHANNEL(i.guildId, i.channelId, i.messageId), { search: i.search }),
                            E1(i, (0, dr.OE)(t)));
                        break;
                    case dr.XK.GAME_SHOP:
                        null != i &&
                            ((0, aL.pX)(D.BVt.CHANNELS_GAME_SHOP(i.guildId, i.pageIndex, i.skuId, i.slug)),
                            E1(i, (0, dr.OE)(t)));
                        break;
                    case dr.XK.QUEST_HOME:
                        if (null != i) {
                            let e = new URLSearchParams();
                            null != i.sort && e.set(ia.L1.SORT, i.sort),
                                null != i.filter && e.set(ia.L1.FILTER, i.filter),
                                null != i.tab && e.set(ia.L1.TAB, i.tab),
                                (0, aL.pX)(D.BVt.QUEST_HOME, { hash: i.questId, search: `?${e.toString()}` }),
                                E1(i, (0, dr.OE)(t));
                        } else (0, aL.pX)(D.BVt.QUEST_HOME);
                        break;
                    case dr.XK.QUEST_PREVIEW_TOOL:
                        if (null != i) {
                            let e = new URLSearchParams();
                            e.set(ia.L1.TAB, ia.NC.PREVIEW_TOOL),
                                null != i.questId && e.set(ia.L1.QUEST_ID, i.questId),
                                (0, aL.pX)(D.BVt.QUEST_HOME, { search: `?${e.toString()}` }),
                                E1(i, (0, dr.OE)(t));
                        }
                        break;
                    case dr.XK.DISCOVERY_GAME_RESULTS:
                        null != i &&
                            ((0, aL.pX)(D.BVt.GLOBAL_DISCOVERY_SERVERS, { search: `?game=${i.gameId}` }),
                            E1(i, (0, dr.OE)(t)));
                        break;
                    case dr.XK.OAUTH2:
                        let r = new URL(D.BVt.OAUTH2_AUTHORIZE, window.location.origin);
                        r.search = i.search;
                        let a = (0, EN.getOAuth2AuthorizeProps)(r.toString());
                        if (null != a) return (0, EN.openOAuth2ModalWithCreateGuildModal)(a), !0;
                        return !1;
                    case dr.XK.ONE_TIME_LOGIN:
                        if (null != i) return (0, E0.N)({ token: i.token }), E1(i, (0, dr.OE)(t)), !0;
                        return !1;
                    case dr.XK.SHOP:
                        null != i && ((0, aL.pX)(D.BVt.COLLECTIBLES_SHOP, { search: i.search }), E1(i, (0, dr.OE)(t)));
                        break;
                    case dr.XK.FEATURES:
                        i?.path != null && ((0, aL.pX)(i.path), E1(i, (0, dr.OE)(t)));
                        break;
                    case dr.XK.ACTIVITIES:
                        if (null != i) {
                            let e = i.attemptId || (0, Eq.A)();
                            return (
                                (async function (e, t, n) {
                                    try {
                                        let i = rb.Ay.getCurrentEmbeddedActivity();
                                        if (i?.applicationId === e)
                                            return void ec.default.track(D.HAw.ACTIVITY_DEEP_LINK_RECEIVED, {
                                                application_id: e,
                                                success: !1,
                                                failure_reason: "activity_already_running",
                                                attempt_id: n,
                                            });
                                        let r = await iB.Ay.fetchApplication(e),
                                            a = r?.bot?.id;
                                        if (null == a)
                                            return void ec.default.track(D.HAw.ACTIVITY_DEEP_LINK_RECEIVED, {
                                                application_id: e,
                                                success: !1,
                                                failure_reason: "no_bot_user",
                                                attempt_id: n,
                                            });
                                        let l = await rQ.A.openPrivateChannel({ recipientIds: a }),
                                            s = new URL(t),
                                            o = s.searchParams.get("referrer_id") ?? void 0,
                                            { customId: d } = await (0, EZ.d9)(
                                                e,
                                                s.searchParams.get("link_id"),
                                                s.searchParams.get("custom_id"),
                                            );
                                        await (0, EX.A)({
                                            targetApplicationId: e,
                                            channelId: l,
                                            analyticsLocations: [eg.A.DEEPLINK],
                                            customId: d,
                                            referrerId: o,
                                        }),
                                            ec.default.track(D.HAw.ACTIVITY_DEEP_LINK_RECEIVED, {
                                                application_id: e,
                                                success: !0,
                                                failure_reason: null,
                                                attempt_id: n,
                                            });
                                    } catch (t) {
                                        ec.default.track(D.HAw.ACTIVITY_DEEP_LINK_RECEIVED, {
                                            application_id: e,
                                            success: !1,
                                            failure_reason: "launch_failed",
                                            attempt_id: n,
                                        });
                                    }
                                })(i.applicationId, i.url, e),
                                E1(i, (0, dr.OE)(t)),
                                !0
                            );
                        }
                        return !1;
                    case dr.XK.PLAYGROUND:
                        if (null != i) {
                            let { openPlayground: e } = n(965042);
                            e(i.collection, i.story), E1(i, (0, dr.OE)(t));
                        }
                }
            },
        },
        [D.e$_.BROWSER_HANDOFF]: {
            scope: dr.kw,
            handler(e) {
                let {
                    args: { handoffToken: t, fingerprint: n },
                } = e;
                eJ.Ay.focus(null, !0), (0, EW.mZ)(t, n);
            },
        },
        [D.e$_.CONNECTIONS_CALLBACK]: {
            scope: dr.LQ,
            handler: async (e) => {
                let {
                    args: { providerType: t, code: n, openid_params: i, iss: r, state: a },
                } = e;
                if (!rD.A.hasPendingAuthorizedState(a))
                    throw new h2.A(
                        { errorCode: D.Lw6.INVALID_CONNECTION_CALLBACK_STATE },
                        "Provider authorization did not originate from this discord client",
                    );
                try {
                    return (
                        rD.A.deletePendingAuthorizedState(a),
                        await _P.A.callback(t, { code: n, openid_params: i, iss: r, state: a })
                    );
                } catch (e) {
                    if (e?.status === 400)
                        throw new h2.A({ errorCode: D.Lw6.BAD_REQUEST_FOR_PROVIDER }, "Bad request for provider");
                    throw (tJ._.dispatch(D.jej.CONNECTIONS_CALLBACK_ERROR), e);
                }
            },
        },
        [D.e$_.BRAINTREE_POPUP_BRIDGE_CALLBACK]: {
            scope: dr.LQ,
            handler(e) {
                let {
                    args: { state: t, path: n, query: i },
                } = e;
                return (0, EQ.re)({ paymentSourceType: D.hes.PAYPAL, state: t, path: n, query: i });
            },
        },
        [D.e$_.BILLING_POPUP_BRIDGE_CALLBACK]: {
            scope: dr.LQ,
            handler(e) {
                let {
                    args: { state: t, path: n, query: i, payment_source_type: r },
                } = e;
                return (0, EQ.re)({ paymentSourceType: r, state: t, path: n, query: i });
            },
        },
    },
    E3 = {
        [D.e$_.SET_SUPPRESS_NOTIFICATIONS]: {
            scope: dr.hj,
            handler(e) {
                let {
                    socket: t,
                    args: { suppress_notifications: n, target_user_id: i },
                } = e;
                W.h.dispatch({
                    type: "SET_RPC_NOTIFICATION_SETTINGS",
                    socketId: t.id,
                    suppressNotifications: n,
                    targetUserId: i,
                });
            },
        },
    },
    E2 = [eg.A.RPC];
function E7(e, t) {
    let n = { subscriptionTier: a2.pe.TIER_2, analyticsLocations: E2, analyticsObject: t };
    switch (e) {
        case D.BRT.APP:
            return hO.A.openPremiumPaymentModalInApp(n);
        case D.BRT.OVERLAY:
            return hO.A.openPremiumPaymentModalInOverlay(n);
        default:
            throw Error(`Unexpected app context: ${e}`);
    }
}
let E4 = {
        [D.e$_.START_PURCHASE]: {
            [dr.sm.ANY]: [dr.VH, dr.hj],
            validation: (e) =>
                _e(e)
                    .required()
                    .keys({ sku_id: e.string().required(), pid: e.number().min(0) }),
            handler(e) {
                let {
                    socket: t,
                    args: { sku_id: i, pid: r },
                } = e;
                _Z(t.transport);
                let a = t.application.id;
                if (null == a) throw new h2.A({ errorCode: D.Lw6.INVALID_COMMAND }, "No application.");
                let { lock: l, context: s } = (0, Eo.d5)(t.transport !== dr.z4.POST_MESSAGE ? r : null);
                if (null == h7()) throw new h2.A({ errorCode: D.Lw6.INVALID_CHANNEL }, "Invalid channel");
                let o = { page: D.liQ.IN_APP };
                return (async () => {
                    try {
                        let { openIAPPurchaseModal: e } = await Promise.all([
                                n.e("32101"),
                                n.e("69273"),
                                n.e("31788"),
                                n.e("77083"),
                                n.e("63009"),
                                n.e("84786"),
                                n.e("41909"),
                                n.e("63397"),
                                n.e("45650"),
                                n.e("97189"),
                                n.e("27660"),
                                n.e("6287"),
                                n.e("85484"),
                                n.e("81510"),
                                n.e("36407"),
                                n.e("79705"),
                                n.e("23924"),
                                n.e("15510"),
                                n.e("48226"),
                                n.e("20287"),
                                n.e("28367"),
                                n.e("35429"),
                                n.e("10471"),
                                n.e("63232"),
                                n.e("64827"),
                                n.e("30938"),
                                n.e("23808"),
                                n.e("11301"),
                                n.e("60235"),
                                n.e("61737"),
                                n.e("79428"),
                                n.e("29963"),
                                n.e("47834"),
                                n.e("98329"),
                                n.e("20317"),
                                n.e("84569"),
                                n.e("2368"),
                                n.e("27084"),
                                n.e("24313"),
                                n.e("48405"),
                                n.e("63185"),
                                n.e("19551"),
                                n.e("84150"),
                                n.e("45959"),
                                n.e("18573"),
                                n.e("55057"),
                                n.e("37794"),
                                n.e("26073"),
                                n.e("7743"),
                                n.e("34303"),
                                n.e("48172"),
                                n.e("28866"),
                                n.e("54961"),
                                n.e("8304"),
                                n.e("58038"),
                                n.e("93159"),
                                n.e("55936"),
                                n.e("11566"),
                                n.e("21106"),
                                n.e("31988"),
                                n.e("94723"),
                                n.e("62931"),
                                n.e("81987"),
                                n.e("58007"),
                                n.e("5812"),
                                n.e("17363"),
                                n.e("91146"),
                                n.e("6174"),
                                n.e("39851"),
                                n.e("29871"),
                                n.e("78453"),
                                n.e("12542"),
                                n.e("30788"),
                                n.e("4193"),
                                n.e("25246"),
                                n.e("8377"),
                                n.e("28610"),
                                n.e("44571"),
                                n.e("44795"),
                                n.e("44928"),
                                n.e("62075"),
                            ]).then(n.bind(n, 4630)),
                            t = await e({
                                applicationId: a,
                                skuId: i,
                                openPremiumPaymentModal: () => E7(s, o),
                                analyticsLocations: E2,
                                analyticsLocationObject: o,
                                context: s,
                            });
                        return l(), t;
                    } catch (e) {
                        if ((l(), null != e)) {
                            let t = "";
                            throw (
                                ((t =
                                    "object" == typeof e && "message" in e && "string" == typeof e.message
                                        ? e.message
                                        : "string" == typeof e
                                          ? e
                                          : JSON.stringify(e)),
                                new h2.A({ errorCode: D.Lw6.PURCHASE_ERROR }, t))
                            );
                        }
                        throw new h2.A({ errorCode: D.Lw6.PURCHASE_CANCELED }, "Purchase was canceled by the user.");
                    }
                })();
            },
        },
        [D.e$_.START_PREMIUM_PURCHASE]: {
            [dr.sm.ANY]: [dr.VH, dr.hj],
            validation: (e) => _e(e).keys({ pid: e.number().min(0) }),
            handler(e) {
                let {
                    socket: t,
                    args: { pid: n },
                } = e;
                if ((_Z(t.transport), null == t.application.id))
                    throw new h2.A({ errorCode: D.Lw6.INVALID_COMMAND }, "No application.");
                let { lock: i, context: r } = (0, Eo.d5)(t.transport !== dr.z4.POST_MESSAGE ? n : null);
                return E7(r, { page: D.liQ.IN_APP }).then(
                    () => {
                        i();
                    },
                    (e) => {
                        if ((i(), null != e)) throw new h2.A({ errorCode: D.Lw6.PURCHASE_ERROR }, e);
                        throw new h2.A({ errorCode: D.Lw6.PURCHASE_CANCELED }, "Purchase was canceled by the user.");
                    },
                );
            },
        },
    },
    E6 = {
        [D.e$_.SEND_GENERIC_EVENT]: {
            handler(e) {
                throw new h2.A({ errorCode: D.Lw6.INVALID_COMMAND }, `Deprecated command: ${e.cmd}`);
            },
        },
    },
    E5 = {
        [D.e$_.TOGGLE_VIDEO]: {
            scope: { [dr.sm.ALL]: [hW.F.RPC, hW.F.RPC_VIDEO_WRITE] },
            handler() {
                let e = eS.Ay.isVideoEnabled();
                null != (0, _$.A)() &&
                    (e ? eT.A.setVideoEnabled(!1) : (0, oI.A)(() => eT.A.setVideoEnabled(!0), D.BRT.APP));
            },
        },
        [D.e$_.TOGGLE_SCREENSHARE]: {
            scope: { [dr.sm.ALL]: [hW.F.RPC, hW.F.RPC_SCREENSHARE_WRITE] },
            validation: (e) =>
                _e(e)
                    .optional()
                    .keys({ pid: e.number().optional().min(0) }),
            handler(e) {
                let {
                        args: { pid: t },
                    } = e,
                    i = oC.A.getCurrentUserActiveStream(),
                    r = oC.A.getStreamerActiveStreamMetadata(),
                    a = (0, AC.A)(ef.Ay, AI.A),
                    l = (0, _$.A)();
                null != l &&
                    (null != t && null != r && r.pid !== t && (0, U.isWindows)()
                        ? (0, i_.XI)(l.guild_id, l.id, { pid: t })
                        : null != i
                          ? (0, i_.nO)(!1)
                          : null != t && (0, U.isWindows)()
                            ? (0, i_.XI)(l.guild_id, l.id, { pid: t })
                            : null != a
                              ? (0, i_.XI)(l.guild_id, l.id, { pid: a.pid })
                              : (0, T.openModalLazy)(async () => {
                                    let { default: e } = await Promise.all([
                                        n.e("63397"),
                                        n.e("17918"),
                                        n.e("98552"),
                                        n.e("86672"),
                                        n.e("44801"),
                                        n.e("38601"),
                                        n.e("36946"),
                                        n.e("44727"),
                                        n.e("6565"),
                                        n.e("14304"),
                                        n.e("82001"),
                                    ]).then(n.bind(n, 266536));
                                    return (t) => (0, E.jsx)(e, { ...t, analyticsLocations: [eg.A.RPC] });
                                }));
            },
        },
    };
var E9 = n(350535);
function pe(e) {
    let t = e.application.id;
    if (null == t) throw new h2.A({ errorCode: D.Lw6.INVALID_COMMAND }, "No application.");
    return t;
}
let pt = {
        [D.e$_.SET_VOICE_SETTINGS_2]: {
            scope: dr.hj,
            validation: (e) =>
                _e(e)
                    .required()
                    .keys({
                        input_mode: _e(e).keys({
                            type: e.string().valid(Object.keys(D.TBI)),
                            shortcut: e.string().required(),
                        }),
                        self_mute: e.boolean(),
                        self_deaf: e.boolean(),
                    }),
            handler(e) {
                let {
                        socket: t,
                        args: { input_mode: n, self_mute: i, self_deaf: r },
                    } = e,
                    a = pe(t);
                null != n && eT.A.setMode(n.type, { shortcut: (0, E9.OH)(n.shortcut) }, a),
                    null != i && i !== eS.Ay.isSelfMute(a) && eT.A.toggleSelfMute({ context: a }),
                    null != r && r !== eS.Ay.isSelfDeaf(a) && eT.A.toggleSelfDeaf({ context: a });
            },
        },
        [D.e$_.SET_USER_VOICE_SETTINGS_2]: {
            scope: dr.hj,
            validation: (e) =>
                _e(e)
                    .required()
                    .keys({ user_id: e.string().required(), volume: e.number().min(0).max(200), mute: e.boolean() }),
            handler(e) {
                let {
                        socket: t,
                        args: { user_id: n, mute: i, volume: r },
                    } = e,
                    a = pe(t);
                null != i && i !== eS.Ay.isLocalMute(n, a) && eT.A.toggleLocalMute(n, a),
                    null != r && eT.A.setLocalVolume(n, r, a);
            },
        },
        [D.e$_.PUSH_TO_TALK]: {
            scope: { [dr.sm.ALL]: [hW.F.RPC, hW.F.RPC_VOICE_WRITE] },
            validation: (e) => _e(e).required().keys({ active: e.boolean() }),
            handler(e) {
                let {
                    args: { active: t },
                } = e;
                eS.Ay.getMode(eO.x.DEFAULT) === D.TBI.PUSH_TO_TALK && (0, Af.N)(t);
            },
        },
    },
    pn = {
        [D.e$_.SET_USER_VOICE_SETTINGS]: {
            scope: { [dr.sm.ANY]: [hW.F.RPC, hW.F.RPC_VOICE_WRITE] },
            validation: (e) =>
                _e(e)
                    .required()
                    .keys({
                        user_id: e.string().required(),
                        pan: _e(e).keys({
                            left: e.number().min(0).max(1).required(),
                            right: e.number().min(0).max(1).required(),
                        }),
                        volume: e.number().min(0).max(200),
                        mute: e.boolean(),
                    }),
            handler(e) {
                let {
                        args: { user_id: t, pan: n, volume: i, mute: r },
                    } = e,
                    a = iu.default.getCurrentUser();
                if (null == iu.default.getUser(t) || a?.id === t)
                    throw new h2.A({ errorCode: D.Lw6.INVALID_USER }, `Invalid user id: ${t}`);
                if (
                    (null != n && eT.A.setLocalPan(t, n.left, n.right),
                    null != i && eT.A.setLocalVolume(t, i),
                    null != r)
                ) {
                    let e = eS.Ay.isLocalMute(t);
                    ((e && !r) || (!e && r)) && eT.A.toggleLocalMute(t);
                }
                return {
                    user_id: t,
                    pan: eS.Ay.getLocalPan(t),
                    volume: eS.Ay.getLocalVolume(t),
                    mute: eS.Ay.isLocalMute(t),
                };
            },
        },
        [D.e$_.GET_VOICE_SETTINGS]: {
            scope: { [dr.sm.ANY]: [hW.F.RPC, hW.F.RPC_VOICE_READ] },
            handler: () => (0, Eo.l6)(),
        },
        [D.e$_.SET_VOICE_SETTINGS]: {
            scope: { [dr.sm.ANY]: [hW.F.RPC, hW.F.RPC_VOICE_WRITE] },
            validation: (e) =>
                _e(e)
                    .required()
                    .keys({
                        input: _e(e).keys({
                            device_id: e.string().valid(Object.keys(eS.Ay.getInputDevices())),
                            volume: e.number().min(0).max(100),
                        }),
                        output: _e(e).keys({
                            device_id: e.string().valid(Object.keys(eS.Ay.getOutputDevices())),
                            volume: e.number().min(0).max(200),
                        }),
                        mode: _e(e).keys({
                            type: e.string().valid(Object.keys(D.TBI)),
                            auto_threshold: e.boolean(),
                            threshold: e.number().min(-100).max(0),
                            shortcut: e
                                .array()
                                .items(
                                    _e(e).keys({
                                        type: e.number().min(0).max(3).required(),
                                        code: e.number().required(),
                                        name: e.string(),
                                    }),
                                ),
                            delay: e.number().min(0).max(2e3),
                        }),
                        automatic_gain_control: e.boolean(),
                        echo_cancellation: e.boolean(),
                        noise_suppression: e.boolean(),
                        qos: e.boolean(),
                        silence_warning: e.boolean(),
                        deaf: e.boolean(),
                        mute: e.boolean(),
                    }),
            handler(e) {
                let {
                    args: {
                        input: t,
                        output: n,
                        mode: i,
                        automatic_gain_control: r,
                        echo_cancellation: a,
                        noise_suppression: l,
                        qos: s,
                        silence_warning: o,
                        deaf: d,
                        mute: c,
                    },
                } = e;
                if (
                    (t &&
                        (null != t.device_id && eT.A.setInputDevice(t.device_id),
                        null != t.volume && eT.A.setInputVolume(t.volume)),
                    n &&
                        (null != n.device_id && eT.A.setOutputDevice(n.device_id),
                        null != n.volume && eT.A.setOutputVolume(n.volume)),
                    i)
                ) {
                    let e = eS.Ay.getMode(),
                        t = eS.Ay.getModeOptions();
                    null != i.type && (e = i.type),
                        null != i.auto_threshold && (t.autoThreshold = i.auto_threshold),
                        null != i.threshold && (t.threshold = i.threshold),
                        null != i.shortcut && (t.shortcut = i.shortcut.map((e) => [e.type, e.code])),
                        null != i.delay && (t.delay = i.delay),
                        eT.A.setMode(e, t);
                }
                if (
                    (null != r && eT.A.setAutomaticGainControl(r),
                    null != a && eT.A.setEchoCancellation(a),
                    null != l && eT.A.setNoiseSuppression(l),
                    null != s && eT.A.setQoS(s),
                    null != o && eT.A.setSilenceWarning(o),
                    null != d)
                ) {
                    let e = eS.Ay.isSelfDeaf();
                    ((e && !d) || (!e && d)) && eT.A.toggleSelfDeaf();
                }
                if (null != c) {
                    let e = eS.Ay.isSelfMute();
                    ((e && !c) || (!e && c)) && eT.A.toggleSelfMute();
                }
                return (0, Eo.l6)();
            },
        },
    };
var pi = n(111162),
    pr = n(861621),
    pa = n(143236),
    pl = n(440454);
let ps = 10 * eu.A.Millis.SECOND,
    po = new Map(),
    pd = new Set(),
    pc = (e, t, n) => {
        n([pl.A.CLOSE, t], e);
    };
class pu extends pa.EventEmitter {
    validateSocketClient;
    logger;
    createPostMessageProxySocket;
    onFrameHandled;
    handshakeFailureTimeoutId;
    constructor(e, t, n, i) {
        super(),
            tJ._.subscribe(D.jej.IFRAME_MOUNT, this.handleIFrameMount),
            tJ._.subscribe(D.jej.IFRAME_UNMOUNT, this.handleIFrameUnmount),
            (this.validateSocketClient = e),
            (this.logger = t),
            (this.createPostMessageProxySocket = n),
            (this.onFrameHandled = i);
    }
    disconnectSocket = (() => {
        var e = this;
        return function (t, n) {
            let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            e.emit("disconnect", t, i ? void 0 : n), t.close(n.code, n.message ?? "Unknown");
            let [r] = Array.from(po.entries()).find((e) => {
                let [n, i] = e;
                return i === t;
            }) ?? [null, null];
            null != r && po.delete(r);
        };
    })();
    handleIFrameMount = (e) => {
        let { id: t } = e;
        pd.add(t),
            (this.handshakeFailureTimeoutId = setTimeout(() => {
                Array.from(rb.Ay.getSelfEmbeddedActivities().entries()).forEach((e) => {
                    let [t, n] = e;
                    ec.default.track(D.HAw.ACTIVITY_HANDSHAKE_TIMED_OUT, {
                        application_id: t,
                        channel_id: (0, hB.H)(n.location),
                        guild_id: (0, hB.D)(n.location),
                        timeout_ms: ps,
                    });
                });
            }, ps));
    };
    handleIFrameUnmount = (e) => {
        let { id: t } = e;
        pd.delete(t);
        let [n, i] = Array.from(po.entries()).find((e) => {
            let [n, i] = e;
            return i.frameId === t;
        }) ?? [null, null];
        null != i &&
            null != n &&
            (this.disconnectSocket(i, { code: D.YI$.CLOSE_NORMAL, message: "iFrame gone" }, !0), po.delete(n));
    };
    handleMessage = (e, t, n) => {
        let i = po.get(t);
        try {
            this.routeEvent(i, t, e, n);
        } catch (e) {
            if (e instanceof h2.A && e.errorCode === D.Lw6.INVALID_PAYLOAD) throw e;
            null != i
                ? this.disconnectSocket(i, { code: e.code, message: e.message }, !0)
                : pc(t, { code: e.code, message: e.message }, n);
        }
    };
    routeEvent(e, t, n, i) {
        if (!Array.isArray(n))
            return void console.warn("[PostMessageTransport] Protocol error: event data should be an Array!");
        let [r, a] = n;
        switch (r) {
            case pl.A.HANDSHAKE:
                if (null != e) throw new h2.A({ closeCode: D.YI$.CLOSE_UNSUPPORTED }, "Already connected");
                return this.handleHandshake(t, a, i);
            case pl.A.FRAME:
                if (null == e) throw new h2.A({ closeCode: D.YI$.CLOSE_UNSUPPORTED }, "Not connected");
                return this.handleFrame(t, e, a);
            case pl.A.CLOSE:
                if (null == e) throw new h2.A({ closeCode: D.YI$.CLOSE_UNSUPPORTED }, "Not connected");
                return this.handleClose(e, a);
            default:
                throw new h2.A({ closeCode: D.YI$.CLOSE_UNSUPPORTED }, "Invalid opcode");
        }
    }
    handleFrame = (e, t, n) => {
        let i;
        if (e !== t.origin) throw new h2.A({ closeCode: D.YI$.INVALID_ORIGIN }, "Origin has changed");
        try {
            i = "string" == typeof n ? JSON.parse(n) : n;
        } catch (e) {
            throw new h2.A({ closeCode: D.YI$.CLOSE_UNSUPPORTED }, "Payload not recognized encoding");
        }
        this.onFrameHandled?.(i, this.logger, t), this.emit("request", t, i);
    };
    handleHandshake = async (e, t, i) => {
        let r;
        null != this.handshakeFailureTimeoutId && clearTimeout(this.handshakeFailureTimeoutId);
        let a = (await n.e("34188").then(n.t.bind(n, 88137, 23))).default;
        try {
            a.assert(
                t,
                _e(a)
                    .required()
                    .keys({
                        v: a.number().min(1).max(1).required(),
                        encoding: a.string().equal("json").optional(),
                        client_id: a.string().required(),
                        frame_id: a.string().required(),
                        sdk_version: a.string().optional(),
                    }),
            );
        } catch (e) {
            throw new h2.A({ closeCode: D.YI$.CLOSE_UNSUPPORTED }, e.message);
        }
        let l = t.frame_id;
        if (!pd.has(l))
            throw (
                (this.logger.error(`Unrecognized frame ID ${l}`),
                new h2.A({ closeCode: D.YI$.CLOSE_UNSUPPORTED }, `Unrecognized frame ID ${l}`))
            );
        null != t.sdk_version &&
            ec.default.track(D.HAw.ACTIVITY_HANDSHAKE, { application_id: t.client_id, sdk_version: t.sdk_version });
        try {
            r = this.createPostMessageProxySocket({
                origin: e,
                postMessageToRPCClient: i,
                frameId: l,
                version: Number(t.v),
                logger: this.logger,
                postClose: pc,
                encoding: t.encoding ?? "json",
            });
        } catch (e) {
            throw (this.logger.error(`Error opening window socket ${e}`), e);
        }
        this.logger.info(`Socket Opened: ${r.id}`);
        try {
            if ((await this.validateSocketClient(r, e, t.client_id), !pd.has(l)))
                throw (
                    (this.logger.error(`Frame ID ${l} no longer exists`),
                    new h2.A({ closeCode: D.YI$.CLOSE_UNSUPPORTED }, `Unrecognized frame ID ${l}`))
                );
            po.set(e, r),
                pd.delete(l),
                r.authorization.scopes.push(dr.W_),
                this.emit("connect", r),
                this.logger.info(`Socket Validated: ${r.id}`);
        } catch (e) {
            throw (this.logger.info(`Socket Closed: ${r.id}, ${e.message}`), e);
        }
    };
    handleClose = async (e, t) => {
        let i = (await n.e("34188").then(n.t.bind(n, 88137, 23))).default;
        try {
            i.assert(
                t,
                _e(i)
                    .required()
                    .keys({ code: i.number().valid(Object.values(D.YI$)).required(), message: i.string().optional() }),
            );
        } catch (e) {
            throw new h2.A({ closeCode: D.YI$.CLOSE_UNSUPPORTED }, e.message);
        }
        this.disconnectSocket(e, t);
    };
}
var pA = n(313731);
class ph extends pA.A {
    origin;
    frameId;
    postMessageToRPCClient;
    logger;
    postClose;
    onSendingToRPCClient;
    closed;
    constructor({
        origin: e,
        postMessageToRPCClient: t,
        frameId: n,
        version: i,
        encoding: r,
        logger: a,
        postClose: l,
        onSendingToRPCClient: s,
    }) {
        if ((super(dr.z4.POST_MESSAGE, i, r), -1 === ["etf", "json"].indexOf(r)))
            throw new h2.A({ closeCode: D.YI$.INVALID_ENCODING }, `Invalid Encoding: ${r}`);
        if ("etf" === r) throw new h2.A({ closeCode: D.YI$.INVALID_ENCODING }, "Erlpack cannot be used on this client");
        (this.origin = e),
            (this.postMessageToRPCClient = t),
            (this.frameId = n),
            (this.logger = a),
            (this.postClose = l),
            (this.onSendingToRPCClient = s),
            (this.closed = !1);
    }
    send(e) {
        this.onSendingToRPCClient?.(e, this.id), this.postMessageToRPCClient([pl.A.FRAME, e], this.origin);
    }
    close(e, t) {
        this.closed || this.postClose(this.origin, { code: e, message: t }, this.postMessageToRPCClient),
            (this.closed = !0);
    }
}
let p_ = new ct.A("RPCServer:PostMessage"),
    pE =
        ((l = new pu(
            Eo.j7,
            p_,
            (e) => {
                let {
                    origin: t,
                    postMessageToRPCClient: n,
                    frameId: i,
                    version: r,
                    encoding: a,
                    logger: l,
                    postClose: s,
                } = e;
                return new ph({
                    origin: t,
                    postMessageToRPCClient: n,
                    frameId: i,
                    version: r,
                    encoding: a,
                    logger: l,
                    postClose: s,
                    onSendingToRPCClient: (e, t) => {
                        (pi.default.isLoggingOverlayEvents || (e.cmd !== D.e$_.OVERLAY && e.evt !== D.ZE4.OVERLAY)) &&
                            l.info(`Socket Emit: ${t}`, (0, pr.A)(e));
                    },
                });
            },
            (e, t, n) => {
                (pi.default.isLoggingOverlayEvents || e.cmd !== D.e$_.OVERLAY) &&
                    t.info(`Socket Message: ${n.id}`, (0, pr.A)(e));
            },
        )),
        window.addEventListener("message", (e) => {
            if (window === e.source) return;
            if (null == e.source || null == e.source.postMessage) return void p_.error("Unknown event source");
            let t = e.source,
                n = e.data,
                i = e.origin;
            l.handleMessage(n, i, (e, n) => {
                !(function (e) {
                    try {
                        return e.closed;
                    } catch {
                        return !1;
                    }
                })(t) && t.postMessage(e, n);
            });
        }),
        l),
    pp = { ..._6, ...Eg, ...Ef, ...EH, ...EY, ...EB.A, ...Ez, ...E8, ...E3, ...E4, ...E5, ...pn, ...pt, ...Ek, ...E6 },
    pm = { ...Er, ...El, ...Es, ...Ed },
    pI = {
        server: Ea.A,
        commands: pp,
        events: pm,
        stores: [cL.default],
        transports: [pE],
        registerTransportsForEmbeddedPlatform: function () {
            eJ.Ay.ensureModule("discord_rpc").then(() => {
                for (let e of [n(33006).A, n(998921).A]) Ea.A.registerTransport(e);
            });
        },
    },
    pg = new (class {
        rpcServer;
        transports;
        rpcCommandHandlers;
        rpcEventHandlers;
        stores;
        registerTransportsForEmbeddedPlatform;
        constructor(e) {
            (this.rpcServer = e.server),
                (this.transports = e.transports),
                (this.rpcCommandHandlers = e.commands),
                (this.rpcEventHandlers = e.events),
                (this.stores = e.stores),
                (this.registerTransportsForEmbeddedPlatform = e.registerTransportsForEmbeddedPlatform);
        }
        loadServer() {
            for (let e of (U.isPlatformEmbedded && this.registerTransportsForEmbeddedPlatform(), this.transports))
                this.rpcServer.registerTransport(e);
            for (let [e, t] of Object.entries(this.rpcCommandHandlers)) this.rpcServer.setCommandHandler(e, t);
            for (let [e, t] of Object.entries(this.rpcEventHandlers)) this.rpcServer.setEventHandler(e, t);
        }
        init() {
            (this.rpcServer.getCurrentUser = () => iu.default.getCurrentUser()),
                (this.rpcServer.onConnect = (e) => {
                    W.h.dispatch({ type: "RPC_APP_CONNECTED", socketId: e.id, application: e.application }),
                        ec.default.track(D.HAw.AUTHORIZED_APP_CONNECTED, {
                            app_id: e.application.id,
                            transport: e.transport,
                        });
                }),
                (this.rpcServer.onDisconnect = (e, t) => {
                    W.h.dispatch({
                        type: "RPC_APP_DISCONNECTED",
                        socketId: e.id,
                        application: e.application,
                        reason: t,
                    });
                });
            let e = [i6.A, lZ.Ay, hF.A, rV.A, eS.Ay, e7.A];
            new C.ru(e.concat(this.stores), () => this.rpcServer.updateSubscriptions()).attach("RPCServerManager"),
                W.h.subscribe("MESSAGE_CREATE", this.handleMessage),
                W.h.subscribe("MESSAGE_UPDATE", this.handleMessage),
                W.h.subscribe("MESSAGE_DELETE", this.handleMessage),
                W.h.subscribe("SPEAKING", this.handleSpeaking),
                W.h.subscribe("OAUTH2_TOKEN_REVOKE", this.handleOAuth2TokenRevoke),
                W.h.subscribe("GUILD_CREATE", this.handleGuildCreate),
                W.h.subscribe("CHANNEL_CREATE", this.handleChannelCreate),
                W.h.subscribe("LOGOUT", this.handleLogout),
                W.h.subscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect),
                W.h.subscribe("RPC_NOTIFICATION_CREATE", this.handleNotificationCreate),
                W.h.subscribe("ACTIVITY_JOIN", this.handleActivityJoin),
                W.h.subscribe("ACTIVITY_LAYOUT_MODE_UPDATE", this.handleActivityLayoutModeUpdate),
                W.h.subscribe("FRAME_UPDATE_LAYOUT_MODE", this.handleFrameUpdateLayoutMode),
                W.h.subscribe("THERMAL_STATE_CHANGE", this.handleThermalStateChange),
                W.h.subscribe("ACTIVITY_SCREEN_ORIENTATION_UPDATE", this.handleScreenOrientationUpdate),
                W.h.subscribe("EMBEDDED_ACTIVITY_UPDATE", this.handleEmbeddedActivityUpdate),
                W.h.subscribe("RELATIONSHIP_ADD", this.handleRelationshipAdd),
                W.h.subscribe("RELATIONSHIP_UPDATE", this.handleRelationshipUpdate),
                W.h.subscribe("RELATIONSHIP_REMOVE", this.handleRelationshipRemove),
                W.h.subscribe("PRESENCE_UPDATES", this.handlePresenceUpdates),
                W.h.subscribe("PRESENCES_REPLACE", this.handlePresencesReplace),
                W.h.subscribe("USER_UPDATE", this.handleUserUpdate),
                W.h.subscribe("ENTITLEMENT_CREATE", this.handleEntitlementCreate),
                W.h.subscribe("ENTITLEMENT_DELETE", this.handleEntitlementDelete),
                W.h.subscribe("QUESTS_ENROLL_SUCCESS", this.handleQuestEnrollSuccess);
        }
        terminate() {
            W.h.unsubscribe("MESSAGE_CREATE", this.handleMessage),
                W.h.unsubscribe("MESSAGE_UPDATE", this.handleMessage),
                W.h.unsubscribe("MESSAGE_DELETE", this.handleMessage),
                W.h.unsubscribe("SPEAKING", this.handleSpeaking),
                W.h.unsubscribe("OAUTH2_TOKEN_REVOKE", this.handleOAuth2TokenRevoke),
                W.h.unsubscribe("GUILD_CREATE", this.handleGuildCreate),
                W.h.unsubscribe("CHANNEL_CREATE", this.handleChannelCreate),
                W.h.unsubscribe("LOGOUT", this.handleLogout),
                W.h.unsubscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect),
                W.h.unsubscribe("RPC_NOTIFICATION_CREATE", this.handleNotificationCreate),
                W.h.unsubscribe("ACTIVITY_JOIN", this.handleActivityJoin),
                W.h.unsubscribe("ACTIVITY_LAYOUT_MODE_UPDATE", this.handleActivityLayoutModeUpdate),
                W.h.unsubscribe("FRAME_UPDATE_LAYOUT_MODE", this.handleFrameUpdateLayoutMode),
                W.h.unsubscribe("THERMAL_STATE_CHANGE", this.handleThermalStateChange),
                W.h.unsubscribe("ACTIVITY_SCREEN_ORIENTATION_UPDATE", this.handleScreenOrientationUpdate),
                W.h.unsubscribe("EMBEDDED_ACTIVITY_UPDATE", this.handleEmbeddedActivityUpdate),
                W.h.unsubscribe("RELATIONSHIP_ADD", this.handleRelationshipAdd),
                W.h.unsubscribe("RELATIONSHIP_UPDATE", this.handleRelationshipUpdate),
                W.h.unsubscribe("RELATIONSHIP_REMOVE", this.handleRelationshipRemove),
                W.h.unsubscribe("PRESENCE_UPDATES", this.handlePresenceUpdates),
                W.h.unsubscribe("PRESENCES_REPLACE", this.handlePresencesReplace),
                W.h.unsubscribe("USER_UPDATE", this.handleUserUpdate),
                W.h.unsubscribe("ENTITLEMENT_CREATE", this.handleEntitlementCreate),
                W.h.unsubscribe("ENTITLEMENT_DELETE", this.handleEntitlementDelete),
                W.h.unsubscribe("QUESTS_ENROLL_SUCCESS", this.handleQuestEnrollSuccess);
        }
        handleMessage = (e) => {
            let t, n, i;
            if (0 === this.rpcServer.subscriptions.length) return;
            "MESSAGE_CREATE" === e.type && this.handleActivityMessage(e);
            let r = null;
            switch (e.type) {
                case "MESSAGE_CREATE":
                    if ("SENDING" === e.message.state) return;
                    (t = D.ZE4.MESSAGE_CREATE), (n = e.channelId), (i = e.message), (r = `${t}${e.message.id}`);
                    break;
                case "MESSAGE_UPDATE":
                    (t = D.ZE4.MESSAGE_UPDATE), (n = e.message.channel_id), (i = e.message);
                    break;
                case "MESSAGE_DELETE":
                    (t = D.ZE4.MESSAGE_DELETE), (n = e.channelId), (i = { id: e.id }), (r = `${t}${e.id}`);
                    break;
                default:
                    return (0, re.xb)(e);
            }
            null != n &&
                this.rpcServer.dispatchToSubscriptions(
                    t,
                    { channel_id: n },
                    { channel_id: n, message: (0, hH.Yj)(i) },
                    r,
                );
        };
        handleSpeaking = (e) => {
            if (0 === this.rpcServer.subscriptions.length) return;
            let t = 0 !== e.speakingFlags ? D.ZE4.SPEAKING_START : D.ZE4.SPEAKING_STOP;
            if (e.context === eO.x.DEFAULT) {
                let n = ee.A.getVoiceChannelId();
                if (null != n) {
                    let i = i6.A.getChannel(n);
                    if (null == i) return;
                    let r = rV.A.getVoiceState(i.getGuildId(), e.userId);
                    if (null == r) return;
                    this.rpcServer.dispatchToSubscriptions(
                        t,
                        { channel_id: r.channelId },
                        { channel_id: r.channelId, user_id: e.userId },
                    );
                }
            }
        };
        handleVoiceChannelSelect = (e) => {
            let { guildId: t, channelId: n } = e;
            0 !== this.rpcServer.subscriptions.length &&
                this.rpcServer.dispatchToSubscriptions(D.ZE4.VOICE_CHANNEL_SELECT, {}, { channel_id: n, guild_id: t });
        };
        handleNotificationCreate = (e) => {
            let { channelId: t, message: n, icon: i, title: r, body: a } = e;
            0 !== this.rpcServer.subscriptions.length &&
                this.rpcServer.dispatchToSubscriptions(
                    D.ZE4.NOTIFICATION_CREATE,
                    {},
                    {
                        channel_id: t,
                        message: (0, hH.Yj)(n),
                        icon_url: null != i ? (0, hH.hk)(i) : null,
                        title: r,
                        body: a,
                    },
                );
        };
        handleActivityJoin = (e) => {
            let { applicationId: t, parentApplicationId: n, secret: i, intent: r, embedded: a } = e;
            if (0 === this.rpcServer.subscriptions.length) return;
            let l = { application_id: t, secret: i };
            a && (l.intent = r),
                this.rpcServer.dispatchToSubscriptions(
                    D.ZE4.ACTIVITY_JOIN,
                    (e) => e.socket.application.id === t || (null != n && e.socket.application.parentId === n),
                    l,
                ),
                this.rpcServer.dispatchToSubscriptions(D.ZE4.GAME_JOIN, (e) => e.socket.application.id === t, l);
        };
        handleActivityLayoutModeUpdate = (e) => {
            let { applicationId: t, layoutMode: n } = e;
            if (0 === this.rpcServer.subscriptions.length) return;
            let i = n !== hK.bN.FOCUSED;
            this.rpcServer.dispatchToSubscriptions(
                D.ZE4.ACTIVITY_PIP_MODE_UPDATE,
                (e) => e.socket.application.id === t,
                { is_pip_mode: i },
            );
            let r = { layout_mode: n };
            this.rpcServer.dispatchToSubscriptions(
                D.ZE4.ACTIVITY_LAYOUT_MODE_UPDATE,
                (e) => e.socket.application.id === t,
                r,
            ),
                this.rpcServer.dispatchToSubscriptions(
                    D.ZE4.FRAME_LAYOUT_MODE_UPDATE,
                    (e) => e.socket.application.id === t,
                    r,
                );
        };
        handleFrameUpdateLayoutMode = (e) => {
            let { applicationId: t, layoutMode: n } = e;
            if (0 === this.rpcServer.subscriptions.length) return;
            let i = n === t0.y.PIP ? hK.bN.PIP : hK.bN.FOCUSED,
                r = i !== hK.bN.FOCUSED;
            this.rpcServer.dispatchToSubscriptions(
                D.ZE4.ACTIVITY_PIP_MODE_UPDATE,
                (e) => e.socket.application.id === t,
                { is_pip_mode: r },
            );
            let a = { layout_mode: i };
            this.rpcServer.dispatchToSubscriptions(
                D.ZE4.ACTIVITY_LAYOUT_MODE_UPDATE,
                (e) => e.socket.application.id === t,
                a,
            ),
                this.rpcServer.dispatchToSubscriptions(
                    D.ZE4.FRAME_LAYOUT_MODE_UPDATE,
                    (e) => e.socket.application.id === t,
                    a,
                );
        };
        handleThermalStateChange = (e) => {
            let { applicationId: t } = e;
            if (0 === this.rpcServer.subscriptions.length || null == t) return;
            let n = { thermal_state: hk() };
            this.rpcServer.dispatchToSubscriptions(D.ZE4.THERMAL_STATE_UPDATE, (e) => e.socket.application.id === t, n);
        };
        handleScreenOrientationUpdate = (e) => {
            let { screenOrientation: t } = e;
            0 === this.rpcServer.subscriptions.length ||
                this.rpcServer.dispatchToSubscriptions(D.ZE4.ORIENTATION_UPDATE, {}, { screen_orientation: t });
        };
        handleEmbeddedActivityUpdate = () => {
            if (0 === this.rpcServer.subscriptions.length) return;
            let e = hz();
            this.rpcServer.dispatchToSubscriptions(D.ZE4.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE, {}, e);
        };
        handleActivityMessage = (e) => {
            let { channelId: t, message: n } = e;
            if (0 === this.rpcServer.subscriptions.length) return;
            let { application: i, activity: r } = n;
            if (null == i || null == r || null == r.party_id) return;
            let a = iu.default.getUser(n.author?.id);
            if (null == a) return;
            let l = iu.default.getCurrentUser();
            if (null == l || a.id === l.id) return;
            let s =
                r.type === D.xL.JOIN_REQUEST
                    ? hF.A.getApplicationActivity(l.id, i.id)
                    : hF.A.getApplicationActivity(a.id, i.id);
            if (null == s || null == s.party || s.party.id !== r.party_id) return;
            let o = s.application_id;
            switch (r.type) {
                case D.xL.JOIN:
                    this.rpcServer.dispatchToSubscriptions(
                        D.ZE4.ACTIVITY_INVITE,
                        (e) => e.socket.application.id === o,
                        { user: (0, h$.A)(a), activity: s, type: r.type, channel_id: t, message_id: n.id },
                    );
                    break;
                case D.xL.JOIN_REQUEST:
                    this.rpcServer.dispatchToSubscriptions(
                        D.ZE4.ACTIVITY_JOIN_REQUEST,
                        (e) => e.socket.application.id === o,
                        { user: (0, h$.A)(a), activity: s, type: r.type, channel_id: t, message_id: n.id },
                    );
            }
        };
        handleOAuth2TokenRevoke = (e) => {
            let { accessToken: t } = e;
            this.rpcServer.sockets.forEach((e) => {
                e.authorization.accessToken === t && e.close(D.YI$.TOKEN_REVOKED, "Token revoked");
            });
        };
        handleGuildCreate = (e) => {
            let {
                    guild: { id: t },
                } = e,
                n = rx.A.getGuild(t);
            0 !== this.rpcServer.subscriptions.length &&
                null != n &&
                this.rpcServer.dispatchToSubscriptions(D.ZE4.GUILD_CREATE, {}, { id: t, name: n.name });
        };
        handleChannelCreate = (e) => {
            let {
                channel: { id: t, name: n, type: i },
            } = e;
            0 !== this.rpcServer.subscriptions.length &&
                this.rpcServer.dispatchToSubscriptions(D.ZE4.CHANNEL_CREATE, {}, { id: t, name: n, type: i });
        };
        handleLogout = () => {
            this.rpcServer.sockets.forEach((e) => e.close(D.YI$.CLOSE_NORMAL, "User logout"));
        };
        handleRelationshipAdd = (e) => {
            let {
                relationship: { id: t, type: n },
            } = e;
            if (0 === this.rpcServer.subscriptions.length) return;
            let i = iu.default.getUser(t);
            if (null == i) return;
            let r = (0, hH.Gc)(n, i);
            this.rpcServer.dispatchToSubscriptions(D.ZE4.RELATIONSHIP_UPDATE, {}, (e) =>
                (0, hH.LP)(r, e.socket.application.id),
            );
        };
        handleRelationshipUpdate = (e) => {
            let {
                relationship: { id: t, type: n },
            } = e;
            if (0 === this.rpcServer.subscriptions.length) return;
            let i = iu.default.getUser(t);
            if (null == i) return;
            let r = (0, hH.Gc)(n, i);
            this.rpcServer.dispatchToSubscriptions(D.ZE4.RELATIONSHIP_UPDATE, {}, (e) =>
                (0, hH.LP)(r, e.socket.application.id),
            );
        };
        handleRelationshipRemove = (e) => {
            let {
                relationship: { id: t },
            } = e;
            if (0 === this.rpcServer.subscriptions.length) return;
            let n = iu.default.getUser(t);
            if (null == n) return;
            let i = (0, hH.Gc)(D.eA$.NONE, n);
            this.rpcServer.dispatchToSubscriptions(D.ZE4.RELATIONSHIP_UPDATE, {}, (e) =>
                (0, hH.LP)(i, e.socket.application.id),
            );
        };
        handlePresenceUpdates = (e) => {
            let { updates: t } = e;
            if (0 !== this.rpcServer.subscriptions.length)
                for (let e of new Set(
                    t.map((e) => {
                        let { user: t } = e;
                        return t.id;
                    }),
                ).values()) {
                    let t = eZ.A.getRelationshipType(e);
                    if (t === D.eA$.NONE) continue;
                    let n = iu.default.getUser(e);
                    if (null == n) continue;
                    let i = (0, hH.Gc)(t, n);
                    this.rpcServer.dispatchToSubscriptions(D.ZE4.RELATIONSHIP_UPDATE, {}, (e) =>
                        (0, hH.LP)(i, e.socket.application.id),
                    );
                }
        };
        handlePresencesReplace = () => {
            if (0 !== this.rpcServer.subscriptions.length)
                for (let [e, t] of eZ.A.getMutableRelationships().entries()) {
                    if (t === D.eA$.NONE) continue;
                    let n = iu.default.getUser(e);
                    if (null == n) continue;
                    let i = (0, hH.Gc)(t, n);
                    this.rpcServer.dispatchToSubscriptions(D.ZE4.RELATIONSHIP_UPDATE, {}, (e) =>
                        (0, hH.LP)(i, e.socket.application.id),
                    );
                }
        };
        handleUserUpdate = (e) => {
            let {
                user: { id: t },
            } = e;
            if (0 === this.rpcServer.subscriptions.length) return;
            let n = eZ.A.getRelationshipType(t);
            if (n === D.eA$.NONE) return;
            let i = iu.default.getUser(t);
            if (null == i) return;
            let r = (0, hH.Gc)(n, i);
            this.rpcServer.dispatchToSubscriptions(D.ZE4.RELATIONSHIP_UPDATE, {}, (e) =>
                (0, hH.LP)(r, e.socket.application.id),
            );
        };
        handleEntitlementCreate = (e) => {
            let { entitlement: t } = e;
            0 !== this.rpcServer.subscriptions.length &&
                this.rpcServer.dispatchToSubscriptions(
                    D.ZE4.ENTITLEMENT_CREATE,
                    (e) => e.socket.application.id === t.application_id,
                    { entitlement: t },
                );
        };
        handleEntitlementDelete = (e) => {
            let { entitlement: t } = e;
            0 !== this.rpcServer.subscriptions.length &&
                this.rpcServer.dispatchToSubscriptions(
                    D.ZE4.ENTITLEMENT_DELETE,
                    (e) => e.socket.application.id === t.application_id,
                    { entitlement: t },
                );
        };
        handleQuestEnrollSuccess = (e) => {
            let { enrolledQuestUserStatus: t } = e;
            if (0 === this.rpcServer.subscriptions.length) return;
            let n = t.questId,
                i = it.A.getQuest(n);
            if (null == i) return;
            let r = (0, hV.TP)(i);
            null != r &&
                this.rpcServer.dispatchToSubscriptions(
                    D.ZE4.QUEST_ENROLLMENT_STATUS_UPDATE,
                    (e) => e.socket.application.id === r && e.args?.quest_id === n,
                    { quest_id: n, is_enrolled: null != t.enrolledAt, enrolled_at: t.enrolledAt },
                );
        };
    })(pI);
var pC = n(138298),
    pT = n(940382),
    pf = n(450510),
    pN = n(594061);
class pS extends X.A {
    _initialize() {
        __OVERLAY__ ||
            (W.h.subscribe("VOICE_CHANNEL_EFFECT_SEND", this._handleSoundboardSoundReceived),
            W.h.subscribe("GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY", this._handleSoundboardSoundPlayLocally),
            W.h.subscribe("VOICE_CHANNEL_SELECT", this._handleVoiceChannelSelect),
            W.h.subscribe("AUDIO_TOGGLE_SELF_DEAF", this._handleToggleSelfDeafened));
    }
    _terminate() {
        __OVERLAY__ ||
            (W.h.unsubscribe("VOICE_CHANNEL_EFFECT_SEND", this._handleSoundboardSoundReceived),
            W.h.unsubscribe("GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY", this._handleSoundboardSoundPlayLocally),
            W.h.unsubscribe("VOICE_CHANNEL_SELECT", this._handleVoiceChannelSelect),
            W.h.unsubscribe("AUDIO_TOGGLE_SELF_DEAF", this._handleToggleSelfDeafened));
    }
    _playSound = function (e) {
        arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            arguments.length > 2 && arguments[2],
            arguments.length > 3 && arguments[3];
    };
    _stopAndClearSounds = () => {};
    _handleToggleSelfDeafened = () => {
        eS.Ay.isDeaf() && this._stopAndClearSounds();
    };
    _handleSoundboardSoundReceived = (e) => {
        let { soundId: t, soundVolume: n, userId: i, channelId: r } = e;
        if (null != t && i !== R.default.getId()) return this._playSound(t, n, i, r);
    };
    _handleSoundboardSoundPlayLocally = (e) => {
        let { sound: t, channelId: n } = e,
            i = R.default.getId();
        return this._playSound(t.soundId, t.volume, i, n);
    };
    _handleVoiceChannelSelect = () => {
        this._stopAndClearSounds();
    };
}
var pL = n(102597),
    pO = n(904054),
    py = n(205693),
    pb = n(602674),
    pv = n(76788),
    pP = n(738011),
    pR = n(536184);
let pD = new Map();
async function pw(e) {
    let t = pD.get(e);
    if (null != t) return t;
    let n = await (await fetch(e)).arrayBuffer(),
        i = (0, pb.v)(),
        r = await i?.decodeAudioData(n);
    return null != r && pD.set(e, r), r;
}
let pM = new ct.A("SoundboardManager");
class px extends pS {
    playingSoundsWeb = new Map();
    _initialize() {
        super._initialize(),
            __OVERLAY__ ||
                (W.h.subscribe(
                    "OVERLAY_SOUNDBOARD_SOUNDS_FETCH_REQUEST",
                    this._handleOverlaySoundboardSoundsFetchRequest,
                ),
                W.h.subscribe("RTC_CONNECTION_STATE", this._handleRTCConnectionState));
    }
    _terminate() {
        super._terminate(),
            __OVERLAY__ ||
                (W.h.unsubscribe(
                    "OVERLAY_SOUNDBOARD_SOUNDS_FETCH_REQUEST",
                    this._handleOverlaySoundboardSoundsFetchRequest,
                ),
                W.h.unsubscribe("RTC_CONNECTION_STATE", this._handleRTCConnectionState));
    }
    _stopAndClearSounds = () => {
        eS.Ay.supports(eO.O5.SAMPLE_PLAYBACK) &&
            eS.Ay.getMediaEngine().eachConnection((e) => {
                e.stopAllSamplesLocalPlayback();
            }),
            this.playingSoundsWeb.forEach((e) => {
                e.pause(), (e.src = "");
            }),
            (this.playingSoundsWeb = new Map());
    };
    _playSound = (() => {
        var e = this;
        return async function (t) {
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                i = arguments.length > 2 ? arguments[2] : void 0,
                r = arguments.length > 3 ? arguments[3] : void 0,
                a = null != r && ee.A.getVoiceChannelId() === r;
            if ((null == r || a) && !eS.Ay.isDeaf() && !_B.A.isLocalSoundboardMuted(i))
                try {
                    let r = {
                        soundKey: `${i}-${t}`,
                        soundURL: (0, pL.A)(t),
                        soundVolume: (0, pO.A)(n),
                        reportSoundStartedPlaying: () => (0, _H.dZ)(t, i),
                    };
                    eS.Ay.supports(eO.O5.SAMPLE_PLAYBACK)
                        ? await (function (e) {
                              let { soundKey: t, soundURL: n, soundVolume: i, reportSoundStartedPlaying: r } = e;
                              return new Promise(async (e, a) => {
                                  let l = await pw(n);
                                  null == l && e(),
                                      eS.Ay.getMediaEngine().eachConnection((n) => {
                                          n.context === py.x.DEFAULT &&
                                              (r(),
                                              eM()(null != l, "audioBuffer cannot be null here"),
                                              n.startSamplesLocalPlayback(t, l, i, (t, n) => {
                                                  0 !== t ? a(Error(`${n}`)) : e();
                                              }));
                                      });
                              });
                          })(r)
                        : await (function (e, t) {
                              let { soundKey: n, soundURL: i, soundVolume: r, reportSoundStartedPlaying: a } = e,
                                  l = t.get(n);
                              if (null != l) {
                                  l.currentTime = 0;
                                  return;
                              }
                              return new Promise(async (e) => {
                                  let l = new (await (0, pR.A)(i))();
                                  (l.src = i),
                                      (l.volume = (0, pO.A)(r)),
                                      l.addEventListener(
                                          l instanceof pv.A.OGVPlayer ? "loadedmetadata" : "canplaythrough",
                                          () => {
                                              a(),
                                                  t.set(n, l),
                                                  l.play()?.catch((i) => {
                                                      if ((0, pP.u)(i)) {
                                                          eA.A.captureException(i, {
                                                              tags: { errorType: "autoplay_policy", expected: "true" },
                                                          }),
                                                              t.delete(n),
                                                              (l.src = ""),
                                                              e();
                                                          return;
                                                      }
                                                      throw i;
                                                  });
                                          },
                                      ),
                                      l.addEventListener("ended", () => {
                                          t.delete(n), (l.src = ""), e();
                                      });
                              });
                          })(r, e.playingSoundsWeb);
                } catch (e) {
                    pM.warn(`Error playing soundboard sound: ${e.message}`);
                } finally {
                    (0, _H.g0)(t, i);
                }
        };
    })();
    _handleRTCConnectionState = (e) => {
        let { state: t } = e;
        t === D.S7L.RTC_CONNECTED && (pN.bW.loadIfNecessary(), (0, _H.E7)({ disableAnalytics: !0 }));
    };
    _handleOverlaySoundboardSoundsFetchRequest = () => {
        (0, _H.E7)();
    };
    _handleOpenEducationModal = (e, t) => {
        if (null == e) return;
        let i = i6.A.getChannel(t),
            r = AO.Ay.getKeybindForAction(D.hCu.SOUNDBOARD_HOLD);
        null != i &&
            (0, s3.Ay)(i) &&
            null != r &&
            sJ.A.hasHotspot(pf._2.SOUNDBOARD_WHEEL_EDUCATION_MODAL) &&
            (0, T.openModalLazy)(async () => {
                let { default: t } = await Promise.all([n.e("26912"), n.e("51143")]).then(n.bind(n, 888762));
                return (n) => (0, E.jsx)(t, { ...n, guildId: e, keybind: r, channel: i });
            });
    };
}
let pU = new px();
class pG extends X.A {
    _initialize() {
        W.h.subscribe("VOICE_STATE_UPDATES", this.handleVoiceStateUpdates);
    }
    _terminate() {
        W.h.unsubscribe("VOICE_STATE_UPDATES", this.handleVoiceStateUpdates);
    }
    handleVoiceStateUpdates = (e) => {
        let { voiceStates: t } = e,
            n = R.default.getId();
        t.forEach((e) => {
            e.userId === n &&
                i6.A.getChannel(e.channelId)?.isGuildStageVoice() &&
                (0, od.eY)(e) !== od.zF.ON_STAGE &&
                (this.handleStopStream(e), this.handleStopUserVideo());
        });
    };
    handleStopStream = (e) => {
        let t = oC.A.getActiveStreamForUser(e.userId, e.guildId);
        null != t && (0, i_.vN)((0, AE._z)(t), !1);
    };
    handleStopUserVideo = () => {
        eS.Ay.isVideoEnabled() && eT.A.setVideoEnabled(!1);
    };
}
let pj = new pG(),
    pk = "STAGE_INVITED_TO_SPEAK_MODAL";
class pV extends X.A {
    _initialize() {
        W.h.subscribe("VOICE_STATE_UPDATES", this.handleVoiceStateUpdates);
    }
    _terminate() {
        W.h.unsubscribe("VOICE_STATE_UPDATES", this.handleVoiceStateUpdates);
    }
    handleVoiceStateUpdates = (e) => {
        let { voiceStates: t } = e,
            i = R.default.getId(),
            r = sB.A.getSession()?.sessionId,
            a = t.find((e) => e.userId === i && e.sessionId === r);
        if (null == a) return;
        let l = a.channelId;
        if (null == l) {
            (0, T.hasModalOpen)(pk) && (0, T.closeModal)(pk);
            return;
        }
        let s = i6.A.getChannel(l);
        if (!s?.isGuildStageVoice()) return;
        let o = (0, od.eY)(a) === od.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
        if (null != s && o) {
            if ((0, T.hasModalOpen)(pk)) return;
            (0, T.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.all([n.e("89194"), n.e("90037")]).then(n.bind(n, 427412));
                    return (t) => (0, E.jsx)(e, { ...t, channel: s });
                },
                { modalKey: pk, onCloseRequest: D.FXj },
            );
        }
    };
}
let pF = new pV();
var pH = n(863922),
    pB = n(353202);
n(667532);
var pY = n(989349),
    p$ = n.n(pY),
    pz = n(724066),
    pq = n(100767),
    pK = n(379418),
    pW = n(9842),
    pX = n(761640),
    pZ = n(317525),
    pQ = n(54570),
    pJ = n(8880);
n(75804);
let p0 = [],
    p1 = null,
    p8 = null,
    p3 = null,
    p2 = /\|\|([\s\S]+?)\|\|/g;
function p7(e, t, n, i) {
    let r = rx.A.getGuild(n),
        a = e
            .replace(p2, G.intl.string(G.t["F+x38C"]))
            .replace(/<@!?(\d+)>/g, (e, t) => {
                let i = iu.default.getUser(t);
                return null == i ? G.intl.string(G.t.sKdZ6U) : (lZ.Ay.getNick(n, i.id) ?? rt.Ay.getName(i));
            })
            .replace(/<@&?(\d+)>/g, (e, t) => {
                let n = null != r ? pZ.A.getRole(r.id, t) : null;
                return null != n && null != n.name ? n.name : G.intl.string(G.t["YV4F/n"]);
            })
            .replace(/<#(\d+)>/g, (e, t) => {
                let n = i6.A.getChannel(t);
                return null == n ? G.intl.string(G.t.J90oLW) : (0, i$.m1)(n, iu.default, eZ.A);
            })
            .replace(/<a?:(\w+):(\d+)>/g, (e, t) => `${G.intl.string(G.t.sMOuuS)} ${t}`)
            .replace(/<\/([^\s]+?):(\d+)>/g, (e, t) => `/${t}`)
            .replace(/<t:(\d+):([A-Z]|[a-z])>/g, (e, t, n) => {
                let i = pK.kx[n],
                    r = 1e3 * parseInt(t, 10),
                    a = p$()(r);
                return null != i ? i(a) : a.format();
            });
    return null == i
        ? G.intl.formatToPlainString(G.t["uIj77/"], { username: t, body: a })
        : G.intl.formatToPlainString(G.t["Ix4H+j"], { username: t, body: a, replyUsername: i });
}
function p4() {
    if (!pq.$j) return !1;
    let e = _2.default.locale;
    null == p3 && (p3 = window.speechSynthesis?.getVoices());
    let t = p3.filter((t) => t.lang === e || t.lang.slice(0, e.length) === e);
    p8 = t.length > 0 ? t[0] : null;
}
async function p6(e, t, n, i, r) {
    let a = pq.aW(e, n);
    null !== a &&
        (null == p8 && p4(),
        t ? await (0, pQ.pr)() : p1?.removeEventListener("end", pQ.pr),
        a.addEventListener("end", pQ.pr),
        null != i && a.addEventListener("start", i),
        null != r && a.addEventListener("end", r),
        (p1 = a),
        pq.wz(a, p8));
}
function p5(e, t, n, i, r) {
    p6(e, t, r, () => {
        (0, pQ.kC)(n, i);
    });
}
function p9(e) {
    let { text: t, interrupt: n, maxLength: i, onStart: r, onEnd: a } = e;
    p6(t, n, i, r, a);
}
function me() {
    return null !== p1 && p1.removeEventListener("end", pQ.pr), pq._X(), (p1 = null), !0;
}
function mt(e) {
    let { message: t, channel: n } = e,
        i = t.type === D.lAJ.REPLY ? pW.A.getMessageByReference(t.messageReference) : null,
        r = i?.state === pW.a.LOADED ? i?.message?.author : null,
        a = null != r ? (lZ.Ay.getNick(n.guild_id, r?.id) ?? rt.Ay.getName(r)) : null,
        l = n.getGuildId(),
        s = lZ.Ay.getNick(l, t.author.id) ?? rt.Ay.getName(t.author);
    return p5(p7(t.content, s, l, a), !0, n.id, t.id), !0;
}
function mn(e) {
    let { channelId: t, message: n, optimistic: i } = e;
    if (i || eS.Ay.isSelfDeaf()) return !1;
    let r = i6.A.getChannel(t);
    if (null == r) return !1;
    let a = ee.A.getChannelId(),
        l = pX.Ay.getCurrentSidebarChannelId(a),
        s = t === a || t === l,
        o = oc.on.getSetting() && n.tts && s,
        d = eX.A.getTTSType(),
        c = n.author?.id !== R.default.getId() && (d === D.aVn.ALL_CHANNELS || (d === D.aVn.SELECTED_CHANNEL && s));
    if ((o || c) && !eZ.A.isBlockedOrIgnoredForMessage(n)) {
        if (p0.indexOf(n.id) >= 0) return !1;
        p0.unshift(n.id) > 10 && p0.pop();
        let e = r.getGuildId();
        if (null != e && cN.Ay.getMutedChannels(e).has(t)) return !1;
        let i = lZ.Ay.getNick(e, n.author?.id) ?? rt.Ay.getName(n.author) ?? "",
            a = n.type === D.lAJ.REPLY ? n.referenced_message?.author : null,
            l = null != a ? (lZ.Ay.getNick(e, a?.id) ?? rt.Ay.getName(a)) : null;
        p5(p7(n.content, i, e, l), !1, r.id, n.id, 200);
    }
    return !1;
}
function mi(e) {
    let { id: t, channelId: n } = e,
        i = pJ.A.currentMessage;
    return null != i && t === i.messageId && n === i.channelId && ((0, pQ.pr)(), !0);
}
function mr() {
    eS.Ay.isSelfDeaf() && pq._X();
}
function ma(e) {
    let { channelId: t } = e,
        n = pJ.A.currentMessage;
    null != n && n.channelId !== t && (0, pQ.pr)();
}
let ml = {
    init() {
        W.h.subscribe("SPEAK_TEXT", p9),
            W.h.subscribe("SPEAK_MESSAGE", mt),
            W.h.subscribe("STOP_SPEAKING", me),
            W.h.subscribe("MESSAGE_CREATE", mn),
            W.h.subscribe("MESSAGE_DELETE", mi),
            W.h.subscribe("AUDIO_TOGGLE_SELF_DEAF", mr),
            W.h.subscribe("CHANNEL_SELECT", ma),
            W.h.subscribe("USER_SETTINGS_PROTO_UPDATE", p4),
            (0, pz.I)(p4);
    },
};
var ms = n(403777),
    mo = n(80556);
let md = (0, n(250105).Ay)({
    name: "2026-04-safety-flows",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var mc = n(907135),
    mu = n(446868),
    mA = n(665095),
    mh = n(639719),
    m_ = n(53516),
    mE = n(87404);
let mp = {
    init() {
        W.h.subscribe("CONNECTION_OPEN", this.handleRequiredAction),
            W.h.subscribe("USER_REQUIRED_ACTION_UPDATE", this.handleRequiredAction),
            W.h.subscribe("CURRENT_USER_UPDATE", this.handleCurrentUserUpdate),
            R.default.addChangeListener(this.handleAuthenticationStoreChanged);
    },
    handleRequiredAction(e) {
        let t = e.requiredAction;
        !cJ.P.isDisallowPopupsSet() &&
            null != iu.default.getCurrentUser() &&
            (t === D.a3B.REQUIRE_CAPTCHA ||
            t === D.a3B.REQUIRE_VERIFIED_EMAIL ||
            t === D.a3B.REQUIRE_VERIFIED_PHONE ||
            t === D.a3B.REQUIRE_REVERIFIED_PHONE ||
            t === D.a3B.REQUIRE_VERIFIED_EMAIL_OR_VERIFIED_PHONE ||
            t === D.a3B.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE ||
            t === D.a3B.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE ||
            mu.A.isEmailReverification(t)
                ? (function (e) {
                      let { location: t } = e;
                      return md.getConfig({ location: t }).enabled;
                  })({ location: "verification-legacy" })
                    ? (0, cx.B8)(
                          (e) => {
                              let { closeLayer: t } = e;
                              return (0, E.jsx)(mc.A, { onClose: t });
                          },
                          { layerKey: mE._s, Layer: mo.Ay },
                      )
                    : (0, cx.B8)(() => (0, E.jsx)(mA.A, {}), { layerKey: mE._s, Layer: mo.Ay })
                : t === D.a3B.AGREEMENTS
                  ? (0, T.openModal)((e) => (0, E.jsx)(mh.default, { ...e }), {
                        modalKey: mE.i$,
                        onCloseRequest: hX.FX,
                        dismissable: !1,
                    })
                  : t === D.a3B.REQUIRE_SAFETY_FLOWS
                    ? (0, cx.B8)(
                          (e) => {
                              let { closeLayer: t } = e;
                              return (0, E.jsx)(mc.A, { onClose: t });
                          },
                          { layerKey: mE._s, Layer: mo.Ay },
                      )
                    : null == t && ((0, cx.dF)(mE._s), (0, T.hasModalOpen)(mE.i$) && (0, T.closeModal)(mE.i$)));
    },
    handleAuthenticationStoreChanged() {
        null == R.default.getId() &&
            ((0, cx.dF)(mE._s),
            (0, T.closeModal)(mE.i$),
            (0, T.closeModal)(mE.Pr),
            (0, T.closeModal)(mE.H1),
            (0, T.closeModal)(m_.V));
    },
    handleCurrentUserUpdate(e) {
        let { user: t } = e;
        t.verified && (0, T.closeModal)(mE.H1);
    },
};
var mm = n(803805),
    mI = n(761821);
let mg = "selectedChannelGuildFrecency";
function mC(e) {
    let { state: t } = C.Ay.PersistedStore.migrateAndReadStoreState("GIFFavoritesStore", [
        (e) =>
            null == e
                ? { favorites: [], timesFavorited: 0 }
                : Array.isArray(e)
                  ? { favorites: e, timesFavorited: 0 }
                  : e,
        (e) => (Array.isArray(e.favorites) ? e : { favorites: [], timesFavorited: 0 }),
    ]);
    return null == t || 0 === t.favorites.length
        ? []
        : t.favorites.map((n, i) => {
              let r = mm.tC.create();
              return (
                  (r.format = "IMAGE" === n.format ? mm.TL.IMAGE : "VIDEO" === n.format ? mm.TL.VIDEO : mm.TL.NONE),
                  (r.src = n.src),
                  (r.width = n.width),
                  (r.height = n.height),
                  (r.order = t.favorites.length - i + e),
                  { url: n.url, favorite: r }
              );
          });
}
let mT = [
    {
        version: 2,
        run(e) {
            let t = mC(1);
            if (0 === t.length) return !1;
            for (let { url: n, favorite: i } of (null == e.favoriteGifs && (e.favoriteGifs = mm.uz.create()),
            (e.favoriteGifs.gifs = {}),
            t))
                e.favoriteGifs.gifs[n] = i;
            return (e.favoriteGifs.hideTooltip = t.length > 2), !0;
        },
        cleanup() {},
    },
    {
        version: 3,
        run(e) {
            function t() {
                return { usageHistory: {}, favorites: [] };
            }
            let { state: n } = C.Ay.PersistedStore.migrateAndReadStoreState("StickersPersistedStore", [
                (e) => (null == e || 0 === Object.keys(e).length ? t() : e),
                (e) =>
                    null == e || 0 === Object.keys(e).length ? t() : (null == e.favorites && (e.favorites = []), e),
            ]);
            if (null == n) return !1;
            let i = !1;
            return (
                n.favorites.length > 0 &&
                    ((e.favoriteStickers = mm.tQ.create()),
                    (e.favoriteStickers.stickerIds = eU().uniq(n.favorites).slice(0, 250)),
                    (i = !0)),
                eU().size(n.usageHistory) > 0 &&
                    ((e.stickerFrecency = mm.Do.create()),
                    (e.stickerFrecency.stickers = (0, mI.Mr)(n.usageHistory, 100)),
                    (i = !0)),
                i
            );
        },
        cleanup() {
            ta.w.remove("StickersPersistedStore");
        },
    },
    {
        version: 4,
        run(e) {
            let { state: t } = C.Ay.PersistedStore.migrateAndReadStoreState("EmojiStore", [
                () => ({ usageHistory: ta.w.get("EmojiUsageHistory") || {} }),
            ]);
            if (null == t) return !1;
            let n = !1;
            return (
                null != t.favorites &&
                    t.favorites.length > 0 &&
                    ((e.favoriteEmojis = mm.gW.create()),
                    (e.favoriteEmojis.emojis = eU().uniq(t.favorites).slice(0, 250)),
                    (n = !0)),
                eU().size(t.usageHistory) > 0 &&
                    ((e.emojiFrecency = mm.Q8.create()),
                    (e.emojiFrecency.emojis = (0, mI.Mr)(t.usageHistory, 100)),
                    (n = !0)),
                n
            );
        },
        cleanup() {
            ta.w.remove("EmojiStore"), ta.w.remove("EmojiUsageHistory"), ta.w.remove("EmojiDiversitySurrogate");
        },
    },
    {
        version: 6,
        run(e) {
            null == e.favoriteGifs && (e.favoriteGifs = mm.uz.create()),
                null == e.favoriteGifs.gifs && (e.favoriteGifs.gifs = {});
            let t = mC(1);
            if (0 === t.length) return !1;
            eU()(e.favoriteGifs.gifs)
                .values()
                .sortBy("order")
                .forEach((e, n) => (e.order = t.length + 1 + n));
            let n = mm.uz.toBinary(e.favoriteGifs).length,
                i = 0;
            for (let { url: r, favorite: a } of t) {
                if (((a.order = t.length - i), i++, r in e.favoriteGifs.gifs)) {
                    e.favoriteGifs.gifs[r].order = a.order;
                    continue;
                }
                let l = mm.tC.toBinary(a).length + r.length + 7;
                n + l > 762880 || ((n += l), (e.favoriteGifs.gifs[r] = a));
            }
            for (n = mm.uz.toBinary(e.favoriteGifs).length; n > 762880; ) {
                let t = 0;
                for (let n in e.favoriteGifs.gifs) if ((delete e.favoriteGifs.gifs[n], ++t >= 10)) break;
                n = mm.uz.toBinary(e.favoriteGifs).length;
            }
            return !0;
        },
        cleanup() {},
    },
    {
        version: 7,
        run(e) {
            let { state: t } = C.Ay.PersistedStore.migrateAndReadStoreState("ApplicationCommandFrecency", []);
            if (null == t) return !1;
            let n = !1;
            return (
                eU().size(t.usageHistory) > 0 &&
                    ((e.applicationCommandFrecency = mm.Zc.create()),
                    (e.applicationCommandFrecency.applicationCommands = (0, mI.Mr)(t.usageHistory, 500)),
                    (n = !0)),
                n
            );
        },
        cleanup() {
            ta.w.remove("ApplicationCommandFrecency");
        },
    },
    {
        version: 8,
        run(e) {
            let { state: t } = C.Ay.PersistedStore.migrateAndReadStoreState("SoundboardFavoriteStore", []);
            if (null == t) return !1;
            let n = !1;
            return (
                eU().size(t.favoriteSounds) > 0 &&
                    ((e.favoriteSoundboardSounds = mm.Qn.create()),
                    lJ.default.keys(t.favoriteSounds).forEach((n) => {
                        new Set(t.favoriteSounds[n]).forEach((t) => {
                            e.favoriteSoundboardSounds?.soundIds.push(t);
                        });
                    }),
                    (n = !0)),
                n
            );
        },
        cleanup() {
            ta.w.remove("SoundboardFavoriteStore");
        },
    },
    {
        version: 9,
        run(e) {
            let t = ta.w.get(mg);
            if (null == t) return !1;
            for (let e in t) D.Ut1.test(e) || delete t[e];
            return (
                (e.guildAndChannelFrecency = mm.F1.create()),
                (e.guildAndChannelFrecency.guildAndChannels = (0, mI.Mr)(t, 100)),
                !0
            );
        },
        cleanup() {
            ta.w.remove(mg);
        },
    },
    {
        version: 10,
        run(e) {
            if (null == e.emojiFrecency) return !1;
            let t = e.emojiFrecency.emojis ?? {},
                n = !1;
            if (eU().size(t) > 0) {
                let t = mm.Q8.create();
                mm.Q8.mergePartial(t, e.emojiFrecency),
                    null != e.emojiReactionFrecency && mm.Q8.mergePartial(t, e.emojiReactionFrecency),
                    (e.emojiReactionFrecency = t),
                    (n = !0);
            }
            return n;
        },
        cleanup() {},
    },
];
n(393431), n(532706), n(42231), n(232424), n(949626), n(767709), n(65162);
var mf = n(873298),
    mN = n(406935),
    mS = n(168186),
    mL = n(460288),
    mO = n(573879);
function my(e, t) {
    let n = !1;
    return (
        null == e.userContent &&
            (e.userContent = {
                dismissedContents: new Uint8Array(),
                lastReceivedChangelogId: "0",
                recurringDismissibleContentStates: {},
            }),
        null == e.userContent.dismissedContents && (e.userContent.dismissedContents = new Uint8Array()),
        (0, mL.c0)(e.userContent.dismissedContents, t) ||
            ((e.userContent.dismissedContents = (0, mL.Vf)(e.userContent.dismissedContents, t)), (n = !0)),
        n
    );
}
function mb(e, t, n) {
    return !!pf.HP.hasHiddenHotspot(t) && my(e, n);
}
let mv = [
    {
        version: 2,
        run(e) {
            if (null != e.inbox) return !1;
            let t = !1,
                n = mf.Q0.create();
            (e.inbox = n), ta.w.get("seenInboxTutorial", !1) && ((n.viewedTutorial = !0), (t = !0));
            let i = ta.w.get("recentsButtonTab2");
            null != i && ((n.currentTab = "Recent Mentions" === i ? mf.Y2.MENTIONS : mf.Y2.UNREADS), (t = !0));
            let r = ta.w.get("unread-messages-collapsed-channels") ?? {};
            for (let n in r) {
                if (!r[n]) continue;
                let i = i6.A.getChannel(n);
                null != i &&
                    ((t = !0),
                    (0, mI.gc)(e, i.guild_id ?? "0", i.id, (e) => {
                        e.collapsedInInbox = !0;
                    }));
            }
            return t;
        },
        cleanup() {
            ta.w.remove("seenInboxTutorial"),
                ta.w.remove("recentsButtonTab2"),
                ta.w.remove("unread-messages-collapsed-channels");
        },
    },
    {
        version: 3,
        run(e) {
            let { state: t } = C.Ay.PersistedStore.migrateAndReadStoreState("EmojiStore", [
                () => ({ diversitySurrogate: ta.w.get("EmojiDiversitySurrogate") || "" }),
            ]);
            if (null == t) return !1;
            let n = !1;
            return (
                null != t.diversitySurrogate &&
                    "" !== t.diversitySurrogate &&
                    (null == e.textAndImages && (e.textAndImages = mf.oJ.create()),
                    null == e.textAndImages.diversitySurrogate && (e.textAndImages.diversitySurrogate = mN.hU.create()),
                    (e.textAndImages.diversitySurrogate.value = t.diversitySurrogate),
                    (n = !0)),
                n
            );
        },
        cleanup() {},
    },
    {
        version: 4,
        run(e) {
            let t = !1;
            return (
                (!0 === ta.w.get("HAS_SEEN_HUB_UPSELL") ||
                    pf.HP.hasHiddenHotspot(pf._2.HUB_SECOND_EMAIL_CONNECTION_UPSELL)) &&
                    (t = my(e, nW.M.HUB_WAITLIST_UPSELL)),
                t
            );
        },
        cleanup() {
            ta.w.remove("HAS_SEEN_HUB_UPSELL");
        },
    },
    {
        version: 5,
        run(e) {
            let t = !1;
            (e.textAndImages = e.textAndImages ?? mf.oJ.create()),
                (e.notifications = e.notifications ?? mf.TY.create()),
                (e.privacy = e.privacy ?? mf.E.create()),
                (e.voiceAndVideo = e.voiceAndVideo ?? mf.GY.create()),
                (e.gameLibrary = e.gameLibrary ?? mf.F1.create()),
                (e.debug = e.debug ?? mf.X9.create());
            let n = ta.w.get("UserSettingsStore") ?? {};
            return (
                "boolean" == typeof n.useRichChatTextBox &&
                    ((e.textAndImages.useRichChatInput = mN._t.create({ value: n.useRichChatTextBox })), (t = !0)),
                "string" == typeof n.renderSpoilers &&
                    ((e.textAndImages.renderSpoilers = mN.hU.create({ value: n.renderSpoilers })), (t = !0)),
                "boolean" == typeof n.useThreadSidebar &&
                    ((e.textAndImages.useThreadSidebar = mN._t.create({ value: n.useThreadSidebar })), (t = !0)),
                "boolean" == typeof n.showInAppNotifications &&
                    ((e.notifications.showInAppNotifications = mN._t.create({ value: n.showInAppNotifications })),
                    (t = !0)),
                n.emojiPickerCollapsedSections instanceof Array &&
                    ((e.textAndImages.emojiPickerCollapsedSections = n.emojiPickerCollapsedSections), (t = !0)),
                n.stickerPickerCollapsedSections instanceof Array &&
                    ((e.textAndImages.stickerPickerCollapsedSections = n.stickerPickerCollapsedSections), (t = !0)),
                "boolean" == typeof n.viewImageDescriptions &&
                    ((e.textAndImages.viewImageDescriptions = mN._t.create({ value: n.viewImageDescriptions })),
                    (t = !0)),
                "boolean" == typeof n.showCommandSuggestions &&
                    ((e.textAndImages.showCommandSuggestions = mN._t.create({ value: n.showCommandSuggestions })),
                    (t = !0)),
                "boolean" == typeof n.alwaysPreviewVideo &&
                    ((e.voiceAndVideo.alwaysPreviewVideo = mN._t.create({ value: n.alwaysPreviewVideo })), (t = !0)),
                "boolean" == typeof n.notifyFriendsOnGoLive &&
                    ((e.notifications.notifyFriendsOnGoLive = mN._t.create({ value: n.notifyFriendsOnGoLive })),
                    (t = !0)),
                "boolean" == typeof n.installShortcutDesktop &&
                    ((e.gameLibrary.installShortcutDesktop = mN._t.create({ value: n.installShortcutDesktop })),
                    (t = !0)),
                "boolean" == typeof n.installShortcutStartMenu &&
                    ((e.gameLibrary.installShortcutStartMenu = mN._t.create({ value: n.installShortcutStartMenu })),
                    (t = !0)),
                "boolean" == typeof n.allowActivityPartyPrivacyFriends &&
                    ((e.privacy.allowActivityPartyPrivacyFriends = mN._t.create({
                        value: n.allowActivityPartyPrivacyFriends,
                    })),
                    (t = !0)),
                "boolean" == typeof n.allowActivityPartyPrivacyVoiceChannel &&
                    ((e.privacy.allowActivityPartyPrivacyVoiceChannel = mN._t.create({
                        value: n.allowActivityPartyPrivacyVoiceChannel,
                    })),
                    (t = !0)),
                "boolean" == typeof n.rtcPanelShowVoiceStates &&
                    ((e.debug.rtcPanelShowVoiceStates = mN._t.create({ value: n.rtcPanelShowVoiceStates })), (t = !0)),
                t
            );
        },
        cleanup() {},
    },
    {
        version: 7,
        run: (e) => mb(e, pf._2.APPLICATION_COMMAND_TOOLTIP, nW.M.APPLICATION_COMMAND_TOOLTIP),
        cleanup() {},
    },
    {
        version: 8,
        run: (e) => mb(e, pf._2.CHANNEL_BANNER_MEMBER_LIST_NOTICE, nW.M.CHANNELINFO_CHANNELBANNER_NOTICE),
        cleanup() {},
    },
    {
        version: 9,
        run: (e) => (
            pf.HP.hasHiddenHotspot(pf._2.MULTI_ACCOUNT_TOOLTIP) && ta.w.set(mO.JE, "true"),
            mb(e, pf._2.MULTI_ACCOUNT_TOOLTIP, nW.M.ACCOUNT_MULTIACCOUNT_TOOLTIP)
        ),
        cleanup() {},
    },
    {
        version: 10,
        run(e) {
            let t = mb(e, pf._2.HUB_LINK_CHANNEL_NOTICE, nW.M.CHANNEL_NOTICE_HUBLINK),
                n = ta.w.get("channelNotices") ?? {};
            return (
                !1 === n[D.n5X.INVITE] && my(e, nW.M.CHANNEL_NOTICE_INVITE) && (t = !0),
                !1 === n[D.n5X.QUICKSWITCHER] && my(e, nW.M.CHANNEL_NOTICE_QUICKSWITCHER) && (t = !0),
                !1 === n[D.n5X.GUILD_BOOSTING] && my(e, nW.M.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION) && (t = !0),
                t
            );
        },
        cleanup() {
            ta.w.remove("channelNotices");
        },
    },
    {
        version: 11,
        run(e) {
            let t = !1;
            return (
                mb(e, pf._2.GUILD_EVENT_UPSELL, nW.M.GUILD_HEADER_EVENT_UPSELL) && (t = !0),
                mb(e, pf._2.ANIMATED_GUILD_BANNER_GUILD_HEADER_TOOLTIP, nW.M.GUILD_HEADER_ANIMATED_GUILD_BANNER) &&
                    (t = !0),
                t
            );
        },
        cleanup() {},
    },
    {
        version: 12,
        run(e) {
            let t = !1;
            return (
                ta.w.get("hideNag") && my(e, nW.M.NAGBAR_NOTICE_DOWNLOAD) && (t = !0),
                ta.w.get("hideConnectSpotify") && my(e, nW.M.NAGBAR_NOTICE_CONNECT_SPOTIFY) && (t = !0),
                ta.w.get("hideConnectPlayStation") && my(e, nW.M.NAGBAR_NOTICE_CONNECT_PLAYSTATION) && (t = !0),
                t
            );
        },
        cleanup() {
            ta.w.remove("hideNag"), ta.w.remove("hideConnectSpotify"), ta.w.remove("hideConnectPlayStation");
        },
    },
    {
        version: 13,
        run(e) {
            let t = !1;
            return (
                ta.w.get("hidePremiumPromo") && my(e, nW.M.NAGBAR_NOTICE_PREMIUM_PROMO) && (t = !0),
                ta.w.get("hidePremiumTier2TrialEnding") &&
                    my(e, nW.M.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING) &&
                    (t = !0),
                ta.w.get("hidePremiumReactivateNotice") && my(e, nW.M.NAGBAR_NOTICE_PREMIUM_REACTIVATE) && (t = !0),
                t
            );
        },
        cleanup() {
            ta.w.remove("hidePremiumPromo"),
                ta.w.remove("hidePremiumTier2TrialEnding"),
                ta.w.remove("hidePremiumReactivateNotice");
        },
    },
    { version: 14, run: (e) => mb(e, pf._2.ACTIVITY_BEB_TUTORIAL, nW.M.ACTIVITIES_TUTORIAL_COACH_MARK), cleanup() {} },
    { version: 15, run: (e) => mb(e, pf._2.NOW_PLAYING_CONSENT_CARD, nW.M.NOW_PLAYING_CONSENT_CARD), cleanup() {} },
    {
        version: 16,
        run(e) {
            let t = ta.w.get("PromotionsPersistedStore");
            if (null == t) return !1;
            let n = t._state.lastDismissedOutboundPromotionStartDate;
            return (
                null != n &&
                (null == e.userContent && (e.userContent = mf.YW.create()),
                null == e.userContent.lastDismissedOutboundPromotionStartDate) &&
                ((e.userContent.lastDismissedOutboundPromotionStartDate = mN.hU.create({ value: n })), !0)
            );
        },
        cleanup() {},
    },
    {
        version: 17,
        run(e) {
            let { state: t } = C.Ay.PersistedStore.migrateAndReadStoreState(
                "ExpressionSuggestionsPersistedStore",
                null,
            );
            if (null == t) return !1;
            let n = t.expressionSuggestionsEnabled;
            return (
                null != n &&
                (null == e.textAndImages && (e.textAndImages = mf.oJ.create()),
                null == e.textAndImages.expressionSuggestionsEnabled) &&
                ((e.textAndImages.expressionSuggestionsEnabled = mN._t.create({ value: n })), !0)
            );
        },
        cleanup() {
            ta.w.remove("ExpressionSuggestionsPersistedStore");
        },
    },
    {
        version: 18,
        run(e) {
            let t = !1;
            return (
                mb(e, pf._2.GUILD_DELETE_FEEDBACK, nW.M.GUILD_DELETE_FEEDBACK) && (t = !0),
                mb(e, pf._2.GUILD_LEAVE_FEEDBACK, nW.M.GUILD_LEAVE_FEEDBACK) && (t = !0),
                t
            );
        },
        cleanup() {},
    },
    {
        version: 19,
        run(e) {
            let t = !1;
            return ta.w.get("forumHelperCardStorageKey") && (t = my(e, nW.M.FORUM_CHANNEL_HELPER_CARD)), t;
        },
        cleanup() {
            ta.w.remove("forumHelperCardStorageKey");
        },
    },
    {
        version: 20,
        run(e) {
            let t = ta.w.get("lastChangeLogId");
            if (null == t) return !1;
            if (!(0, mS.hT)(t)) return ta.w.remove("lastChangeLogId"), !1;
            if (null == e.userContent) e.userContent = mf.YW.create();
            else if (
                null != e.userContent &&
                null != e.userContent.lastReceivedChangelogId &&
                "0" !== e.userContent.lastReceivedChangelogId
            )
                return ta.w.remove("lastChangeLogId"), !1;
            return (e.userContent.lastReceivedChangelogId = t), !0;
        },
        cleanup() {
            ta.w.remove("lastChangeLogId");
        },
    },
    {
        version: 21,
        run: (e) => e.appearance?.uiDensity === mf.NS.COMPACT && ((e.appearance.uiDensity = mf.NS.DEFAULT), !0),
        cleanup() {},
    },
];
var mP = n(405892);
let mR = {
    init() {
        (mP.A[da.oD.PRELOADED_USER_SETTINGS] = mv),
            (mP.A[da.oD.FRECENCY_AND_FAVORITES_SETTINGS] = mT),
            W.h.subscribe("CONNECTION_OPEN", mD),
            W.h.subscribe("USER_SETTINGS_PROTO_ENQUEUE_UPDATE", mw),
            W.h.subscribe("USER_SETTINGS_PROTO_LOAD_IF_NECESSARY", mM),
            W.h.subscribe("APP_STATE_UPDATE", mx);
    },
};
function mD() {
    let e = c5.A.getFullState(),
        t = e[da.oD.PRELOADED_USER_SETTINGS];
    t.editInfo.triggeredMigrations && pN.wc.markDirtyFromMigration(t.proto, t.editInfo.cleanupFuncs),
        eU().forEach(pN.Df, (t, n) => {
            let i = e[Number(n)];
            null != i.editInfo.offlineEditDataVersion &&
                null != i.editInfo.protoToSave &&
                t.scheduleSaveFromOfflineEdit();
        });
}
function mw(e) {
    let {
        settings: { proto: t, type: n },
        delaySeconds: i,
        jitter: r,
    } = e;
    pN.Df[n].markDirty(t, { delaySeconds: i, jitter: r });
}
function mM(e) {
    let { settingsType: t } = e;
    pN.Df[t].loadIfNecessary();
}
function mx(e) {
    let { state: t } = e;
    ("inactive" === t || "background" === t) &&
        eU().forEach(pN.Df, (e, t) => {
            null != c5.A.getFullState()[Number(t)].editInfo.timeout &&
                (e.logger.log("Triggering persistChanges due to AppStateUpdate"), e.persistChanges());
        });
}
function mU() {
    let e = a;
    if (null == e || !t7.A.isOpen(e)) return !1;
    W.h.wait(() => tQ.VN(e)), e7.A.getRTCConnection()?.setPipOpen(!1), (a = null);
}
function mG() {
    let e = e7.A.getChannelId(),
        t = a === e;
    if (
        (function () {
            let e = e7.A.getChannelId(),
                t = ee.A.getChannelId();
            if (!eS.Ay.supports(eO.O5.VIDEO) || eN.A.getWindowOpen(D.MLl.CHANNEL_CALL_POPOUT)) return !0;
            let n = null != e && oC.A.getAllActiveStreams().some((t) => !tI.A.isParticipantPoppedOut(e, (0, AE._z)(t)));
            if (
                !(
                    (null != e &&
                        Object.values(rV.A.getVideoVoiceStatesForChannel(e)).some((t) => {
                            let { userId: n } = t;
                            return !eS.Ay.isLocalVideoDisabled(n) && !tI.A.isParticipantPoppedOut(e, n);
                        })) ||
                    n
                )
            )
                return !0;
            let i = t2.A.hasLayers();
            return !(i && t2.A.getLayers().includes(D.zgK.RTC_DEBUG)) && (!!i || e === t);
        })()
    )
        return mU();
    if ((t || mU(), null == e)) return !1;
    let n = i6.A.getChannel(e);
    return (
        !(null == n || t7.A.isOpen(e)) &&
        (W.h.wait(() => tQ.ho(n.id, D.o1q.VIDEO, { channel: n })),
        e7.A.getRTCConnection()?.setPipOpen(!0),
        void (a = e))
    );
}
class mj extends X.A {
    _initialize() {
        ee.A.addChangeListener(mG),
            et.A.addChangeListener(mG),
            e7.A.addChangeListener(mG),
            rV.A.addChangeListener(mG),
            t2.A.addChangeListener(mG),
            oC.A.addChangeListener(mG),
            eN.A.addChangeListener(mG),
            eS.Ay.addChangeListener(mG),
            rb.Ay.addChangeListener(mG),
            tI.A.addChangeListener(mG);
    }
    _terminate() {
        ee.A.removeChangeListener(mG),
            et.A.removeChangeListener(mG),
            e7.A.removeChangeListener(mG),
            rV.A.removeChangeListener(mG),
            t2.A.removeChangeListener(mG),
            oC.A.removeChangeListener(mG),
            eN.A.removeChangeListener(mG),
            eS.Ay.removeChangeListener(mG),
            rb.Ay.removeChangeListener(mG),
            tI.A.removeChangeListener(mG);
    }
}
let mk = new mj();
var mV = n(885576);
let mF = new ed.Ep(),
    mH = new ed.Ep();
class mB extends X.A {
    _initialize() {
        W.h.subscribe("IDLE", this.handleIdleUpdate);
    }
    _terminate() {
        mF.stop(), mH.stop(), W.h.unsubscribe("IDLE", this.handleIdleUpdate);
    }
    handleIdleUpdate() {
        let e = mV.A.getIdleSince();
        if (!U.isPlatformEmbedded) return;
        for (let e of (mF.stop(), mH.stop(), oC.A.getAllActiveStreams())) if (e.state !== D.XYD.ENDED) return;
        if (null == e) return;
        let t = e7.A.getChannelId();
        if (null == t) return;
        mH.start(18e6, () => {
            O.default.selectVoiceChannel(null);
        });
        let n = rx.A.getGuild(e7.A.getGuildId());
        if (null == n || null == n.afkChannelId || n.afkChannelId === t || null == n.afkTimeout) return;
        let i = i6.A.getChannel(t);
        null == i ||
            i.isGuildStageVoice() ||
            mF.start(e + n.afkTimeout * eu.A.Millis.SECOND - Date.now(), () => {
                null != (n = rx.A.getGuild(e7.A.getGuildId())) &&
                    null != n.afkChannelId &&
                    O.default.selectVoiceChannel(n.afkChannelId, !1, !1, { bypassIdleUpdate: !0 });
            });
    }
}
let mY = new mB();
var m$ = n(565058);
let mz = !1,
    mq = null,
    mK = {
        init() {
            W.h.subscribe("CONNECTION_OPEN", (e) => {
                let { pendingPayments: t } = e;
                if (null != t && t.length > 0) {
                    var i;
                    if (mq === t[0] || null == (mq = t[0])) return;
                    (i = mq),
                        mz ||
                            ((mz = !0),
                            (0, T.openModalLazy)(async () => {
                                let { default: e } = await Promise.all([n.e("41066"), n.e("9967")]).then(
                                    n.bind(n, 302810),
                                );
                                return (t) => {
                                    let { transitionState: n, onClose: r } = t;
                                    return (0, E.jsx)(e, {
                                        pendingPayment: i,
                                        transitionState: n,
                                        onClose: () => ((mz = !1), r()),
                                    });
                                };
                            }));
                }
            });
        },
    };
var mW = n(612181);
n(115036), n(131319), n(794383), n(530789), n(712687), n(328968), n(67480), n(116956), n(304296), n(628965);
let mX = D.XlH.CLOSED,
    mZ = {},
    mQ = null;
function mJ() {
    let e = iu.default.getCurrentUser();
    if (null == e) return m0();
    (mX = D.XlH.OPEN),
        (mZ = {}),
        (mQ = {
            ...{
                userId: e.id,
                username: e.username,
                discriminator: e.discriminator,
                email: e.email,
                avatar: e.avatar,
                password: "",
                newPassword: null,
                claimed: e.isClaimed(),
            },
        });
}
function m0() {
    (mX = D.XlH.CLOSED), (mQ = null), (mZ = {});
}
function m1() {
    (mX = D.XlH.OPEN), (mZ = {});
}
class m8 extends C.Ay.Store {
    static displayName = "UserSettingsAccountStore";
    initialize() {
        this.waitFor(iu.default);
    }
    getErrors() {
        return mZ;
    }
    getSubmitting() {
        return mX === D.XlH.SUBMITTING;
    }
    getSettings() {
        return mQ;
    }
}
new m8(W.h, {
    USER_SETTINGS_MODAL_OPEN: function () {
        mJ();
    },
    USER_SETTINGS_MODAL_INIT: mJ,
    USER_SETTINGS_MODAL_CLOSE: m0,
    LOGOUT: m0,
    USER_SETTINGS_MODAL_SUBMIT: function () {
        mX = D.XlH.SUBMITTING;
    },
    USER_SETTINGS_MODAL_SUBMIT_FAILURE: function (e) {
        if (mX !== D.XlH.SUBMITTING) return !1;
        (mX = D.XlH.OPEN), (mZ = e.errors ?? {});
    },
    USER_SETTINGS_MODAL_UPDATE_ACCOUNT: function (e) {
        let { settings: t } = e;
        null == mQ && (mQ = {}), (mQ = { ...mQ, ...t });
    },
    USER_SETTINGS_MODAL_SUBMIT_COMPLETE: m1,
    USER_SETTINGS_MODAL_RESET: function () {
        let e = iu.default.getCurrentUser();
        m1(),
            null != e &&
                (mQ = {
                    ...{
                        userId: e.id,
                        username: e.username,
                        discriminator: e.discriminator,
                        email: e.email,
                        avatar: e.avatar,
                        password: "",
                        newPassword: null,
                        claimed: e.isClaimed(),
                    },
                });
    },
}),
    n(836602),
    n(555337),
    n(863036),
    n(291731),
    n(176360),
    n(439119),
    n(279061),
    n(750128),
    n(921955);
let m3 = !1;
(0, eI.as)(), C.Ay.initialize(), pg.loadServer();
let m2 = (0, g.Fe)({
        createPromise: () => Promise.all([n.e("89145"), n.e("11415")]).then(n.bind(n, 844358)),
        webpackId: 844358,
        name: "UnauthenticatedDeepLinkActivity",
        renderLoader: ds,
    }),
    m7 = (0, g.Fe)({
        createPromise: () => n.e("15243").then(n.bind(n, 190662)),
        webpackId: 190662,
        name: "ApplicationDirectoryRoutes",
        renderLoader: ds,
    });
U.isPlatformEmbedded &&
    (eJ.Ay.on("USER_SETTINGS_OPEN", (e, t) => {
        (0, e2.openUserSettings)();
    }),
    eJ.Ay.on("LAUNCH_APPLICATION", async (e, t) => {
        let i = rU.A.getActiveLibraryApplication(t);
        (await Promise.resolve().then(n.bind(n, 715671))).playApplication(t, i, {
            analyticsParams: { location: { page: D.liQ.DIRECT, object: D.ZSU.WEB_URL } },
        });
    }));
let m4 = F((e) => {
        let { location: t } = e;
        return (
            (0, uJ.B)(() => {
                let e = P.A.getHighestState();
                if (e === D.fAW.OPEN || e === D.fAW.OPENING) return;
                let n = (0, lW.parseSettingsUrl)({ path: t.pathname, search: t.search });
                (0, lW.trackParseSettingsUrl)(n, "deeplink"),
                    (0, e2.openUserSettings)(n.target, { path: n.path, searchParams: n.params });
            }),
            (0, E.jsx)(M, {
                deepLinkType: dr.XK.USER_SETTINGS,
                path: t.pathname,
                search: t.search,
                paramsBuilder: function (e) {
                    let { path: t, fingerprint: n, search: i, installationId: r } = e,
                        [, , a, l] = t.split("/");
                    return { path: t, section: a, subsection: l, fingerprint: n, installationId: r, search: i };
                },
                children: (0, E.jsx)(I.rd, { to: lX.A.defaultRoute }),
            })
        );
    }),
    m6 = F((e) => {
        let { location: t } = e,
            i = (0, AQ.parsePlaygroundUrl)(t.pathname);
        return (
            (0, uJ.B)(() => {
                let { openPlaygroundFromParsedUrl: e } = n(965042);
                e({ match: i });
            }),
            (0, E.jsx)(M, {
                deepLinkType: dr.XK.PLAYGROUND,
                path: t.pathname,
                paramsBuilder: function (e) {
                    let { path: t, fingerprint: n, installationId: i } = e,
                        { collection: r, story: a } = (0, AQ.parsePlaygroundUrl)(t);
                    return { path: t, collection: r, story: a, fingerprint: n, installationId: i };
                },
                children: (0, E.jsx)(I.rd, { to: lX.A.defaultRoute }),
            })
        );
    }),
    m5 = C.Ay.connectStores([co.A, lX.A, R.default], () => ({
        isConnected: co.A.isConnected(),
        defaultRoute: lX.A.defaultRoute,
        defaultRouteFallback: lX.A.fallbackRoute,
        token: R.default.getToken(),
    }))(
        class extends p.Component {
            render() {
                let { isConnected: e, defaultRoute: t, token: n, defaultRouteFallback: i } = this.props;
                if (null == n) return (0, E.jsx)(I.rd, { to: D.BVt.DEFAULT_LOGGED_OUT });
                if (e) {
                    let e = Ir(t);
                    return null == e ||
                        ((e.params.guildId === D.ME || null != rx.A.getGuild(e.params.guildId)) &&
                            null != i6.A.getChannel(e.params.channelId))
                        ? (0, E.jsx)(I.rd, { to: t })
                        : (0, E.jsx)(I.rd, { to: i });
                }
                return null;
            }
        },
    ),
    m9 = F((0, eC.C)(cX, null, { passProps: !1 })),
    Ie = (0, eC.C)(m7, null, { passProps: !1 }),
    It = [
        D.BVt.GUILD_BOOSTING_MARKETING(lz.pv.guildId()),
        ...Array.from(dt.qW).map((e) => D.BVt.CHANNEL(lz.pv.guildId(), e)),
    ];
function In(e) {
    let { guildId: t, channelId: n = null, messageId: i = null, threadId: r = null } = e.params;
    return { guildId: t ?? D.ME, channelId: n, messageId: i, threadId: r };
}
let Ii = [
    {
        path: [D.BVt.ACTIVITY_DETAILS(":applicationId")],
        render: function (e) {
            return (0, mW.wR)() || R.default.getLoginStatus() === D.aUe.LOGGING_IN || !R.default.allowLogoutRedirect()
                ? m9(e)
                : (0, E.jsx)(m2, { applicationId: e.match.params.applicationId });
        },
    },
    {
        path: [D.BVt.APP_WITH_INVITE_AND_GUILD_ONBOARDING(":inviteCode")],
        render: function (e) {
            let { match: t } = e,
                { inviteCode: n } = t.params;
            return (
                (0, uJ.B)(() => {
                    u8({ code: n });
                }),
                (0, E.jsx)(I.rd, { to: lX.A.defaultRoute })
            );
        },
    },
    {
        path: [D.BVt.APP_WITH_GIFT_CODE(":giftCode")],
        render: function (e) {
            let { match: t } = e,
                { giftCode: n } = t.params;
            return (
                (0, uJ.B)(() => {
                    (0, S.G)(n, !0, !0).then((e) => {
                        let { giftCode: t } = e;
                        null != t && (0, hL.h)({ processedCode: t.code });
                    });
                }),
                (0, E.jsx)(I.rd, { to: lX.A.defaultRoute })
            );
        },
    },
    { path: [D.BVt.APP], render: () => (0, E.jsx)(m5, {}) },
    {
        path: [D.BVt.USERS(":id")],
        render: function (e) {
            let { match: t } = e,
                { id: n } = t.params;
            return (
                (0, uJ.B)(() =>
                    (0, rz.openUserProfileModal)({ userId: n, sourceAnalyticsLocations: [eg.A.URI_SCHEME] }),
                ),
                (0, E.jsx)(I.rd, { to: lX.A.defaultRoute })
            );
        },
    },
    {
        path: [D.BVt.APPLICATION_LIBRARY_ACTION(":gameId", ":action")],
        render: function (e) {
            let { match: t } = e,
                { gameId: i, action: r } = t.params;
            return (
                rH.A.whenInitialized(() => {
                    rU.A.whenInitialized(() => {
                        switch (r) {
                            case "launch": {
                                let e = rU.A.getActiveLibraryApplication(i);
                                if (null == e) return;
                                Promise.resolve()
                                    .then(n.bind(n, 715671))
                                    .then((t) => {
                                        t.playApplication(e.id, e, {
                                            analyticsParams: {
                                                location: { page: D.liQ.DIRECT, object: D.ZSU.WEB_URL },
                                            },
                                        });
                                    });
                                break;
                            }
                            case "test-mode":
                                uq.A.whenInitialized(() => y.q1(i));
                                break;
                            case "uninstall": {
                                let e = rU.A.getActiveLibraryApplication(i);
                                if (null == e) return;
                                (0, N.z)(e.id, e.branchId, D.ThZ.URI_SCHEME);
                            }
                        }
                    });
                }),
                (0, E.jsx)(I.rd, { to: D.BVt.APPLICATION_LIBRARY })
            );
        },
    },
    {
        path: [D.BVt.GUILD_CREATE],
        render: function () {
            return (
                (0, uJ.B)(() => uO.A.openCreateGuildModal({ location: "External link" })),
                (0, E.jsx)(I.rd, { to: lX.A.defaultRoute })
            );
        },
    },
    {
        path: [D.BVt.PICK_GUILD_SETTINGS(":section?", ":subsection?")],
        render: function (e) {
            let { match: t } = e,
                { section: i, subsection: r } = t.params,
                a = (0, m.parse)(location.search).feature;
            return (
                (0, uJ.B)(() => {
                    var e;
                    return (
                        (e = { section: (0, u2.A)(D.BEX, i), subsection: (0, u2.A)(D.nd0, r), feature: a }),
                        void (0, T.openModalLazy)(
                            async () => {
                                let { default: t } = await Promise.all([
                                    n.e("19199"),
                                    n.e("4744"),
                                    n.e("16373"),
                                    n.e("66460"),
                                ]).then(n.bind(n, 980791));
                                return (n) => (0, E.jsx)(t, { ...n, ...e });
                            },
                            { modalKey: "Guild Settings Picker Modal" },
                        )
                    );
                }),
                (0, E.jsx)(I.rd, { to: lX.A.defaultRoute })
            );
        },
    },
    {
        path: [D.BVt.DEVELOPER_ACTIVATE_APPLICATION_TEST_MODE],
        render: function (e) {
            let { location: t } = e,
                n = (0, m.parse)(t.search),
                i = "string" == typeof n.applicationId ? n.applicationId : null,
                r = "true" === n.openGameProfile;
            return (
                (0, uJ.B)(() => {
                    null != i &&
                        y.q1(i).then((e) => {
                            null != e &&
                                (0, uS.nf)(uS.HP.APPLICATION_TEST_MODE_DEBUG, { shouldAutoOpenGameProfile: r });
                        });
                }),
                (0, E.jsx)(I.rd, { to: lX.A.defaultRoute })
            );
        },
    },
    { path: [D.BVt.SETTINGS(":section", ":subsection?")], render: m4 },
    { path: [D.BVt.PLAYGROUND(":collection?", ":story?")], render: m6 },
    {
        path: [D.BVt.USER_GUILD_NOTIFICATION_SETTINGS(lz.pv.guildId())],
        render: function (e) {
            let { match: t } = e,
                { guildId: i } = t.params;
            return (
                (0, uJ.B)(() => {
                    (0, T.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([
                            n.e("41909"),
                            n.e("92652"),
                            n.e("93855"),
                            n.e("6287"),
                            n.e("63397"),
                            n.e("20287"),
                            n.e("28367"),
                            n.e("20683"),
                            n.e("8555"),
                            n.e("35321"),
                            n.e("83952"),
                            n.e("38601"),
                            n.e("66580"),
                            n.e("94529"),
                            n.e("94832"),
                            n.e("56814"),
                            n.e("30282"),
                        ]).then(n.bind(n, 893605));
                        return (t) => (0, E.jsx)(e, { ...t, guildId: i });
                    });
                }),
                (0, E.jsx)(I.rd, { to: D.BVt.CHANNEL(i) })
            );
        },
    },
    {
        path: [D.BVt.APPLICATION_LIBRARY_INVENTORY],
        render: function () {
            return (
                (0, uJ.B)(() => (0, e2.openUserSettings)(e3.X.GIFT_PANEL)), (0, E.jsx)(I.rd, { to: lX.A.defaultRoute })
            );
        },
    },
    {
        path: [D.BVt.WELCOME(lz.pv.guildId({ optional: !0 }), lz.pv.channelId({ optional: !0 }))],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, channelId: i } = t.params;
            (0, AU.C)(Az.zY.MARKETING_UNCLAIMED);
            let r = D.BVt.CHANNEL(n, i);
            return (0, E.jsx)(I.rd, { to: r });
        },
    },
    {
        path: [D.BVt.GUILD_EVENT_DETAILS(lz.pv.guildId({ optional: !0 }), ":guildEventId")],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, guildEventId: i } = t.params;
            return (
                (0, uJ.B)(() => {
                    (0, oN.uR)({ eventId: i });
                }),
                (0, E.jsx)(I.rd, { to: D.BVt.CHANNEL(n) })
            );
        },
    },
    {
        path: [D.BVt.GUILD_SETTINGS(lz.pv.guildId(), ":section?", ":subsection?")],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, section: i, subsection: r } = t.params;
            return (
                (0, uJ.B)(() => {
                    u3.A.open(n, (0, u2.A)(D.BEX, i), void 0, (0, u2.A)(D.nd0, r));
                }),
                (0, E.jsx)(I.rd, { to: D.BVt.CHANNEL(n) })
            );
        },
        isChatRoute: !0,
    },
    {
        path: [
            D.BVt.CHANNEL_THREAD_VIEW(lz.pv.guildId(), lz.pv.channelId(), ":threadId", ":messageId?"),
            D.BVt.CHANNEL(lz.pv.guildId(), lz.pv.channelId({ optional: !0 }), ":messageId?"),
            D.BVt.ACTIVITY,
            D.BVt.ACTIVITIES,
            D.BVt.ACTIVITIES_HAPPENING_NOW,
            D.BVt.APPLICATION_LIBRARY,
            D.BVt.APPLICATION_STORE,
            D.BVt.MESSAGE_REQUESTS,
            D.BVt.COLLECTIBLES_SHOP,
            D.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(":collectionId"),
            D.BVt.COLLECTIBLES_SHOP_PRODUCT_DETAIL(":skuId"),
            D.BVt.COLLECTIBLES_SHOP_LAYOUT(":layoutId"),
            D.BVt.GUILD_DISCOVERY,
            D.BVt.QUEST_HOME_DEPRECATED,
            D.BVt.QUEST_HOME,
            D.BVt.ICYMI,
            D.BVt.GLOBAL_DISCOVERY,
            D.BVt.GUILD_MEMBER_VERIFICATION(lz.pv.guildId()),
            D.BVt.GUILD_MEMBER_VERIFICATION_FOR_HUB(lz.pv.guildId(), ":inviteCode?"),
            D.BVt.GUILD_BOOSTING_MARKETING(lz.pv.guildId()),
            D.BVt.GUILD_FEATURE(":feature", lz.pv.guildId()),
            D.BVt.FEATURE(":feature"),
            D.BVt.FAMILY_CENTER,
        ],
        render: m9,
        isChatRoute: !0,
    },
    { path: [D.BVt.APPLICATION_DIRECTORY], render: Ie },
    {
        path: [D.BVt.GAME_SHOP(lz.pv.guildId(), ":shopSkuId?", ":shopSlug?")],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, shopSkuId: i, shopSlug: r } = t.params;
            return (0, E.jsx)(I.rd, { to: D.BVt.CHANNELS_GAME_SHOP(n, 0, i, r) });
        },
    },
];
function Ir(e) {
    for (let { path: t, isChatRoute: n } of Ii) {
        if (!n) continue;
        let i = (0, lq.B)(e, { path: t });
        if (null != i) return i;
    }
    return null;
}
function Ia(e) {
    let { channelId: t, guildId: n, pathname: i } = e;
    if (!co.A.isConnected()) return;
    let { location: r } = (0, aL.JK)();
    r.pathname === i && (null == i6.A.getChannel(t) ? (0, aL.bG)(D.BVt.CHANNEL(n)) : (0, aL.bG)(i));
}
class Il extends p.PureComponent {
    historyUnlisten = () => {};
    rewriterUnlisten = () => {};
    componentDidMount() {
        eJ.Ay.setZoomFactor(H.A.zoom),
            pg.init(),
            eD.initialize(),
            hA.initialize(),
            uB.initialize(),
            mY.initialize(),
            uz.initialize(),
            hO.A.initialize(),
            uy.A.initialize(),
            AM.initialize(),
            B.A.init(),
            uQ.init(),
            uK.init(),
            AZ.initialize(),
            eo.initialize(),
            uU.initialize(),
            hM.initialize(),
            q.Ay.initialize(),
            nt.initialize(),
            mk.initialize(),
            Ai.initialize(),
            hd.initialize(),
            z.A.initialize(),
            Ar.init(),
            up.init(),
            mK.init(),
            $.A.initialize(),
            ml.init(),
            m$.A.init(),
            mp.init(),
            pj.initialize(),
            pF.initialize(),
            ms.A.initialize(),
            mR.init(),
            uD.initialize(),
            Y.A.initialize(),
            pU.initialize(),
            A6.A.initialize(),
            A4.initialize(),
            he.initialize(),
            ug.initialize(),
            uN.initialize(),
            uk.initialize(),
            Ad.initialize(),
            Ax.A.initialize(),
            hx.A.initialize(),
            hS.initialize(),
            c4.initialize(),
            em.initialize(),
            (this.rewriterUnlisten = l$.A.addRouteRewriter(this.ensureChannelMatchesGuild)),
            (this.historyUnlisten = l$.A.addRouteChangeListener(this.handleHistoryChange));
    }
    componentWillUnmount() {
        pg.terminate(),
            mY.terminate(),
            hO.A.terminate(),
            hA.terminate(),
            eD.terminate(),
            q.Ay.terminate(),
            nt.terminate(),
            mk.terminate(),
            z.A.terminate(),
            hM.terminate(),
            hd.terminate(),
            ms.A.terminate(),
            $.A.terminate(),
            uD.terminate(),
            Ax.A.terminate(),
            Y.A.terminate(),
            hx.A.terminate(),
            pU.terminate(),
            A6.A.terminate(),
            A4.terminate(),
            he.terminate(),
            ug.terminate(),
            uN.terminate(),
            hS.terminate(),
            uG.A.terminate(),
            c4.terminate(),
            em.terminate(),
            uk.terminate(),
            Ad.terminate(),
            this.historyUnlisten(),
            this.rewriterUnlisten();
    }
    handleHistoryChange(e) {
        let { pathname: t, search: n } = e;
        !(function (e) {
            if (co.A.isConnected() || co.A.isTryingToConnect()) return;
            let t = R.default.getToken();
            null == t || ((0, hU.Q)(e) && f.A.startSession(t));
        })(t),
            (function (e, t) {
                let n = Ir(e);
                if (null == n) return;
                let { guildId: i, channelId: r, messageId: a, threadId: l } = In(n),
                    s = (0, lz.nn)(i),
                    o = (0, lz.ts)(r),
                    d = (0, lz.ts)(l),
                    c = et.A.getGuildId(),
                    u = c !== i;
                if ((s && u && L.A.selectGuild(i), s && o)) {
                    let n = ee.A.getChannelId(c),
                        s = n !== r,
                        o = null != pX.Ay.getGuildSidebarState(i);
                    if (!m3 || u || s || null != a) {
                        (m3 = !0), O.default.selectChannel({ guildId: i, channelId: r, messageId: a });
                        let { summaryId: e } = (0, m.parse)(t);
                        null != e && pH.Ay.setSelectedSummary(r, e);
                    }
                    if (
                        (o &&
                            s &&
                            null != r &&
                            null != pX.Ay.getCurrentSidebarChannelId(r) &&
                            pC.A.closeChannelSidebar(r),
                        null != l && d)
                    ) {
                        let e = pX.Ay.getCurrentSidebarChannelId(n),
                            t = e !== l;
                        if (null != r && null != l && t)
                            if (o) (0, aL.bG)(D.BVt.CHANNEL(i, l, a));
                            else {
                                let e = { type: pT.LU.THREAD };
                                null != a && (e.initialMessageId = a),
                                    pC.A.openThreadAsSidebar({
                                        guildId: i,
                                        baseChannelId: r,
                                        channelId: l,
                                        details: e,
                                    });
                            }
                        else o && null != e && null != r && pC.A.closeChannelSidebar(r);
                    } else null == r || s || pC.A.closeChannelSidebar(r);
                    let A = nG.getIsOpen();
                    if (r === dt.VV.ROLE_SUBSCRIPTIONS) nM.closeSidebar();
                    else if (u && A) {
                        let t = null == c && i === D.ME,
                            n = e === D.BVt.GUILD_DISCOVERY;
                        t || n ? nM.closeSidebar() : nM.openSidebar();
                    } else ((s && A) || (!u && !s)) && nM.closeSidebar();
                } else It.some((t) => (0, lq.B)(e, t)?.isExact === !0) || (0, aL.bG)(lX.A.fallbackRoute);
            })(t, n),
            (0, ub.MS)();
    }
    ensureChannelMatchesGuild(e) {
        if (!co.A.isConnected()) return null;
        let { pathname: t } = e,
            n = Ir(t);
        if (null == n) return null;
        let { guildId: i, channelId: r, threadId: a } = In(n),
            l = (0, lz.nn)(i) && i !== D.ME && i !== D.YYv;
        if (null != r && (0, lz.ts)(r) && !(0, dt.jq)(r) && l) {
            let n = i6.A.getChannel(r);
            if (null == n) pB.A.loadThread(r).then(() => Ia({ channelId: r, guildId: i, pathname: t }));
            else if (n.guild_id !== i && i !== D.gNP) return { path: D.BVt.CHANNEL(i), state: e.state };
            if (null != a) {
                if (!((0, lz.ts)(a) && !(0, dt.jq)(r))) return null;
                let n = i6.A.getChannel(a);
                if (null == n) pB.A.loadThread(a).then(() => Ia({ channelId: a, guildId: i, pathname: t }));
                else if (n?.parent_id !== r)
                    return pC.A.closeChannelSidebar(r), { path: D.BVt.CHANNEL(i, r), state: e.state };
            }
        }
        return null;
    }
    render() {
        return (0, E.jsxs)(p.Fragment, {
            children: [
                (0, E.jsxs)(I.dO, {
                    children: [
                        (0, E.jsx)(I.rd, { exact: !0, from: "/channels", to: "/" }),
                        Ii.map((e) => {
                            let { path: t, render: n } = e;
                            return (0, E.jsx)(I.qh, { path: t, render: n }, t[0]);
                        }),
                        (0, E.jsx)(I.rd, { to: "/" }),
                    ],
                }),
                (0, E.jsx)(uL.A, {}),
            ],
        });
    }
}
let Is = Il;
