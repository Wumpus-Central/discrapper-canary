let i, r, a, l, s;
n.r(t), n.d(t, { default: () => Id });
var o,
    d,
    c,
    u,
    _,
    A,
    h,
    E,
    p = n(627968),
    m = n(64700),
    I = n(492462),
    g = n(873263),
    C = n(156828),
    f = n(17928),
    T = n(192308),
    N = n(830215),
    S = n(258057),
    L = n(869038),
    y = n(686956),
    O = n(956793),
    b = n(271866),
    v = n(607399),
    R = n(197111),
    P = n(10088),
    D = n(495544),
    x = n(652215);
let w = v.Fr || v.v1;
function M(e) {
    let { children: t, deepLinkType: n, path: i, paramsBuilder: r, search: a } = e,
        l = (0, f.bG)([D.default], () => D.default.getFingerprint() ?? D.default.getId()),
        s = (0, f.bG)([D.default], () => D.default.getInstallationForTracking()),
        o = (0, f.bG)([P.A], () => P.A.getState(i), [i]),
        d = m.useMemo(
            () =>
                null == r
                    ? { path: i, fingerprint: l, installationId: s, search: a }
                    : r({ path: i, fingerprint: l, search: a, installationId: s }),
            [i, r, l, s, a],
        );
    return (
        m.useEffect(() => {
            w || (null == o && R.A.openNativeAppModal(i, x.e$_.DEEP_LINK, { type: n, params: d }));
        }, [o, i, d, n]),
        t
    );
}
var U = n(854378),
    G = n(723702),
    j = n(985018),
    k = n(370227);
let V = n(843020);
function F(e) {
    let { children: t } = e,
        n = (0, f.bG)([P.A], () => P.A.getHighestState());
    return (0, G.isDesktop)() || n !== x.fAW.OPENING
        ? (0, G.isDesktop)() || n !== x.fAW.OPEN
            ? t
            : (0, p.jsxs)(p.Fragment, {
                  children: [
                      (0, p.jsx)("img", { className: k.Lq, src: V, alt: "" }),
                      (0, p.jsx)("div", {
                          className: k.kL,
                          children: (0, p.jsxs)(U.Ay, {
                              children: [
                                  (0, p.jsx)(U.hE, { className: k.Ns, children: j.intl.string(j.t.csrAMJ) }),
                                  (0, p.jsx)(U.tK, { children: j.intl.string(j.t.ghBJz9) }),
                              ],
                          }),
                      }),
                  ],
              })
        : (0, p.jsxs)(p.Fragment, {
              children: [
                  (0, p.jsx)("img", { className: k.Lq, src: V, alt: "" }),
                  (0, p.jsx)("div", {
                      className: k.kL,
                      children: (0, p.jsxs)(U.Ay, {
                          children: [
                              (0, p.jsx)(U.hE, { children: j.intl.string(j.t["Z+hCVU"]) }),
                              (0, p.jsx)(U.CK, {}),
                          ],
                      }),
                  }),
              ],
          });
}
function H(e) {
    function t(t) {
        return (0, p.jsx)(F, { children: (0, p.jsx)(e, { ...t }, "deeplink-wrapper") });
    }
    return (t.displayName = `Deeplink(${e.displayName ?? e.name ?? "<Unknown>"})`), t;
}
var B = n(775602),
    Y = n(502229),
    $ = n(836753),
    W = n(196492),
    z = n(869003),
    K = n(315206),
    q = n(892491),
    X = n(228366),
    Z = n(272355),
    Q = n(36149),
    J = n(381689),
    ee = n(260509),
    et = n(309010),
    en = n(967198),
    ei = n(323073),
    er = n(329972),
    ea = n(784578),
    el = n(204925),
    es = n(835002);
class eo extends Z.A {
    _initialize() {
        X.h.subscribe("CONNECTION_OPEN", this.handleConnectionOpen),
            X.h.subscribe("CHANNEL_SELECT", this.handleChannelSelect),
            X.h.subscribe("AGE_GATE_MODAL_OPEN", this.handleAgeGateModalOpen),
            X.h.subscribe("AGE_GATE_MODAL_CLOSE", this.handleAgeGateModalClose),
            X.h.subscribe("AGE_GATE_SUCCESS_MODAL_OPEN", this.handleAgeGateSuccess),
            X.h.subscribe("AGE_GATE_FAILURE_MODAL_OPEN", this.handleAgeGateFailure),
            X.h.subscribe("GUILD_UPDATE", this.handleGuildUpdate);
    }
    _terminate() {
        X.h.unsubscribe("CONNECTION_OPEN", this.handleConnectionOpen),
            X.h.unsubscribe("CHANNEL_SELECT", this.handleChannelSelect),
            X.h.unsubscribe("AGE_GATE_MODAL_OPEN", this.handleAgeGateModalOpen),
            X.h.unsubscribe("AGE_GATE_MODAL_CLOSE", this.handleAgeGateModalClose),
            X.h.unsubscribe("AGE_GATE_SUCCESS_MODAL_OPEN", this.handleAgeGateSuccess),
            X.h.unsubscribe("AGE_GATE_FAILURE_MODAL_OPEN", this.handleAgeGateFailure),
            X.h.unsubscribe("GUILD_UPDATE", this.handleGuildUpdate);
    }
    handleChannelSelect(e) {
        let { guildId: t, channelId: n } = e;
        (0, ei.kK)(t, n);
    }
    handleConnectionOpen() {
        let e = en.A.getGuildId(),
            t = et.A.getChannelId();
        (0, ei.kK)(e, t);
    }
    handleAgeGateModalOpen(e) {
        let { source: t } = e;
        (0, T.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([n.e("28367"), n.e("10136"), n.e("7579")]).then(
                    n.bind(n, 776971),
                );
                return (n) => (0, p.jsx)(e, { source: t, ...n });
            },
            { modalKey: el.Uy, onCloseRequest: x.tEg, backdropStyle: (0, Q.lU)(t) ? q.F.LIGHTBOX : void 0 },
        );
    }
    handleAgeGateSuccess() {
        J.A.showSuccessToast(es.OB.EXISTING_USER_AGE_GATE_SUCCESS), (0, T.closeModal)(el.Uy);
    }
    handleAgeGateFailure(e) {
        let { underageMessage: t } = e;
        (0, T.updateModal)(el.Uy, (e) => (0, p.jsx)(ea.default, { underageMessage: t, ...e }));
    }
    handleAgeGateModalClose() {
        (0, T.closeModal)(el.Uy);
    }
    handleGuildUpdate(e) {
        let { guild: t } = e,
            n = en.A.getGuildId();
        if (
            null != n &&
            t.id === n &&
            (t.owner_configured_content_level === x.ftr.AGE_RESTRICTED ||
                ((0, er.v)("age_gate_manager") && ee.uA.has(t.nsfw_level)))
        )
            return void (0, ei.kK)(t.id, null);
    }
}
let ed = new eo();
var ec = n(451988),
    eu = n(954571),
    e_ = n(927813),
    eA = n(38405),
    eh = n(881615),
    eE = n(789999);
let ep = D.default.getToken();
class em extends Z.A {
    focusedOrForegrounded = (0, eE.R)();
    heartbeatInterval = new ec.IX();
    schedulerStarted = !1;
    lastHeartbeatTimestamp = 0;
    _initialize() {
        (this.focusedOrForegrounded = (0, eE.R)()),
            D.default.addChangeListener(this.handleAuthenticationChange),
            X.h.subscribe("WINDOW_FOCUS", this.handleWindowFocus),
            X.h.subscribe("APP_STATE_UPDATE", this.handleAppStateUpdate),
            X.h.subscribe("QUESTS_ENROLL_SUCCESS", this.handleEnrollmentSuccess),
            X.h.subscribe("LOGIN_SUCCESS", this.handleLogin),
            X.h.subscribe("LOGOUT", this.handleLogout),
            this.scheduleHeartbeatTracking();
    }
    _terminate() {
        this.stopAnalyticHeartbeat(),
            D.default.removeChangeListener(this.handleAuthenticationChange),
            X.h.unsubscribe("WINDOW_FOCUS", this.handleWindowFocus),
            X.h.unsubscribe("APP_STATE_UPDATE", this.handleAppStateUpdate),
            X.h.unsubscribe("QUESTS_ENROLL_SUCCESS", this.handleEnrollmentSuccess),
            X.h.unsubscribe("LOGIN_SUCCESS", this.handleLogin),
            X.h.unsubscribe("LOGOUT", this.handleLogout);
    }
    maybeStartHeartbeat = () => {
        this.heartbeatInterval.isStarted() ||
            (this.trackHeartbeat(), this.heartbeatInterval.start(5 * e_.A.Millis.MINUTE, this.trackHeartbeat));
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
                r = 5 * e_.A.Millis.MINUTE;
            if (!t && e.lastHeartbeatTimestamp > 0 && i < r) return;
            let a = (0, eh.sN)();
            eu.default.track(x.HAw.CLIENT_AD_HEARTBEAT, {
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
            if (e.focusedOrForegrounded && null != ep)
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
        (this.focusedOrForegrounded = t === x.g6G.ACTIVE), this.scheduleHeartbeatTracking("APP_STATE_UPDATE");
    };
    handleAuthenticationChange = () => {
        let e = D.default.getToken();
        ep !== e && ((ep = e), (0, eh.Db)(), this.stopAnalyticHeartbeat()), this.scheduleHeartbeatTracking();
    };
}
let eI = new em();
var eg = n(861638),
    eC = n(793574),
    ef = n(114716),
    eT = n(827343),
    eN = n(328153),
    eS = n(869146),
    eL = n(969341),
    ey = n(531685),
    eO = n(731854);
let eb = new Set(),
    ev = new Set(),
    eR = null;
function eP() {
    for (let e of eb) eT.A.setDisableLocalVideo(e, x.bb8.MANUAL_ENABLED, eO.x.DEFAULT, !1);
    ev.clear(), eb.clear();
}
class eD extends Z.A {
    _initialize() {
        X.h.subscribe("RTC_CONNECTION_VIDEO", this.handleIncomingVideo),
            X.h.subscribe("AUDIO_SET_LOCAL_VIDEO_DISABLED", this.handleManualLocalVideoToggle),
            X.h.subscribe("WINDOW_VISIBILITY_CHANGE", this.handleWindowVisibilityChange),
            X.h.subscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect),
            eS.A.addChangeListener(this.handlePopoutChange);
    }
    _terminate() {
        X.h.unsubscribe("RTC_CONNECTION_VIDEO", this.handleIncomingVideo),
            X.h.unsubscribe("AUDIO_SET_LOCAL_VIDEO_DISABLED", this.handleManualLocalVideoToggle),
            X.h.unsubscribe("WINDOW_VISIBILITY_CHANGE", this.handleWindowVisibilityChange),
            X.h.unsubscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect),
            eS.A.removeChangeListener(this.handlePopoutChange),
            eP(),
            (eR = null);
    }
    handleIncomingVideo(e) {
        let { userId: t, context: n, streamId: i } = e;
        if (n !== eO.x.DEFAULT || null == i) return;
        let r = null != eN.Ay.getVisibleGame(),
            a = ey.A.isVisible(),
            l = eS.A.getWindowVisible(x.MLl.CHANNEL_CALL_POPOUT),
            s = eL.Ay.isLocalVideoDisabled(t, n),
            o = ev.has(t);
        !r || a || l || s || o || (eb.add(t), eT.A.setDisableLocalVideo(t, x.bb8.DISABLED, n, !1));
    }
    handleManualLocalVideoToggle(e) {
        let { userId: t, persist: n } = e;
        n && (ev.add(t), eb.delete(t));
    }
    handleWindowVisibilityChange = (e) => {
        let { visible: t } = e;
        t && eP();
    };
    handleVoiceChannelSelect = (e) => {
        let { channelId: t } = e;
        t !== eR && (eP(), (eR = t));
    };
    handlePopoutChange = () => {
        eS.A.getWindowVisible(x.MLl.CHANNEL_CALL_POPOUT) && eP();
    };
}
let ex = new eD();
var ew = n(284009),
    eM = n.n(ew),
    eU = n(735438),
    eG = n.n(eU);
class ej extends m.Component {
    animProps;
    _animationFrame;
    ref = m.createRef();
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
                n = eG().random(-e.intensity, e.intensity, !0),
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
        return (0, p.jsx)("div", { ...t, ref: this.ref, children: e });
    }
}
var ek = n(447453),
    eV = n(143991),
    eF = n(942857),
    eH = n(337371),
    eB = n(775121),
    eY = n(498419),
    e$ = n.n(eY),
    eW = n(481613),
    ez = n.n(eW),
    eK = n(800828),
    eq = n(912309),
    eX = n(458294),
    eZ = n(803224),
    eQ = n(994500),
    eJ = n(503509),
    e0 = n(19575),
    e1 = n(726249);
let e2 = new Set(["Blink", "Gecko", "WebKit"]),
    e6 = x.tEg;
if (G.isPlatformEmbedded) e6 = (e) => e0.Ay.setBadge(e);
else if (e2.has(ez().layout)) {
    let e = new (e$())({ animation: "none" });
    e6 = (t) => {
        try {
            (0, e1.sF)(t), e.badge(-1 === t ? "•" : t);
        } catch (e) {}
    };
}
var e5 = n(780964),
    e3 = n(858897),
    e4 = n(763827),
    e8 = n(485296);
let e7 = (0, G.isMac)() ? null : "DEFAULT";
class e9 extends m.PureComponent {
    getIcon = () => {
        let { deafened: e, muted: t, speaking: n, connected: i, unread: r } = this.props,
            a = e7;
        return (0, G.isMac)() && !i
            ? a
            : (0, G.isLinux)() || !i
              ? (r && (a = "UNREAD"), a)
              : (a = e ? "DEAFENED" : t ? "MUTED" : n ? "SPEAKING" : "CONNECTED");
    };
    componentDidMount() {
        e0.Ay.setSystemTrayIcon(this.getIcon());
    }
    componentDidUpdate() {
        e0.Ay.setSystemTrayIcon(this.getIcon());
    }
    componentWillUnmount() {
        e0.Ay.setSystemTrayIcon(e7);
    }
    render() {
        return null;
    }
}
let te = () => null;
G.isPlatformEmbedded &&
    (e0.Ay.on("SYSTEM_TRAY_TOGGLE_MUTE", () => eT.A.toggleSelfMute({ location: "System Tray" })),
    e0.Ay.on("SYSTEM_TRAY_TOGGLE_DEAFEN", () => eT.A.toggleSelfDeaf()),
    e0.Ay.on("SYSTEM_TRAY_OPEN_VOICE_SETTINGS", () => {
        (0, e3.openUserSettings)(e5.X.VOICE_CATEGORY);
    }),
    (te = f.Ay.connectStores([e4.A, eL.Ay, e8.A, eX.default, eQ.A, eZ.A, eK.A], () => {
        let e = eX.default.getTotalMentionCount(),
            t = eX.default.hasAnyUnread(),
            n = (0, eq.dH)([eQ.A, eK.A]),
            i = !eZ.A.getDisableUnreadBadge() && !!(t || e + n > 0);
        return {
            connected: e4.A.isConnected(),
            speaking: e8.A.isCurrentUserSpeaking(),
            muted: eL.Ay.isSelfMute() || eL.Ay.isSelfMutedTemporarily(),
            deafened: eL.Ay.isSelfDeaf(),
            unread: i,
        };
    })(e9)));
let tt = te;
var tn = n(503698),
    ti = n.n(tn),
    tr = n(110259),
    ta = n(167789),
    tl = n(506774),
    ts = n(289873),
    to = n(43990),
    td = n(939249),
    tc = n(720149),
    tu = n(183994),
    t_ = n(268218),
    tA = n(335180);
let th = (0, t_.Fe)({
    createPromise: () =>
        Promise.all([n.e("86546"), n.e("14875"), n.e("23324"), n.e("51050"), n.e("3177")]).then(n.bind(n, 338249)),
    webpackId: 338249,
    renderLoader: tA.IA,
});
var tE = n(761929),
    tp = n(458518),
    tm = n(107361),
    tI = n(549711),
    tg = n(313961),
    tC = n(702841),
    tf = n(932001),
    tT = n(533550),
    tN = n(49999),
    tS = n(46275);
let tL = m.memo(function (e) {
    let { state: t, markAsDismissed: n } = e,
        { name: i, guildId: r, boundingRect: a } = t,
        l = m.useMemo(() => null, [i, r, n]);
    return null == l
        ? null
        : (0, p.jsx)("div", {
              className: ti()(tS.UX, (null == a || a.y < 0) && tS.R),
              style: null == a ? {} : { top: a.top, left: a.right - a.x },
              children: l,
          });
});
function ty() {
    let e = (0, tC.bG)([en.A], () => en.A.getGuildId()),
        t = (0, tT.RX)(e),
        [n, i] = (0, tf.kn)(
            Object.values(t)
                .filter((e) => {
                    let { disabled: t } = e;
                    return !t;
                })
                .map((e) => {
                    let { name: t } = e;
                    return t;
                }),
            tN.m.SIDEBAR,
        );
    if (null == n) return null;
    let r = t[n];
    return null == r
        ? null
        : (0, p.jsx)("div", { className: tS.kL, children: (0, p.jsx)(tL, { state: r, markAsDismissed: i }) });
}
let tO = (0, t_.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("32292"),
                n.e("28367"),
                n.e("45174"),
                n.e("85519"),
                n.e("11871"),
                n.e("37266"),
                n.e("55057"),
                n.e("14976"),
                n.e("63229"),
                n.e("31988"),
                n.e("55343"),
                n.e("90161"),
                n.e("99717"),
                n.e("6698"),
                n.e("90184"),
                n.e("62597"),
                n.e("72822"),
                n.e("52803"),
                n.e("29890"),
                n.e("37440"),
                n.e("72570"),
            ]).then(n.bind(n, 887073)),
        webpackId: 887073,
    }),
    tb = (0, t_.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("32292"),
                n.e("28367"),
                n.e("45174"),
                n.e("85519"),
                n.e("11871"),
                n.e("37266"),
                n.e("55057"),
                n.e("14976"),
                n.e("63229"),
                n.e("31988"),
                n.e("55343"),
                n.e("34983"),
                n.e("90161"),
                n.e("99717"),
                n.e("6698"),
                n.e("90184"),
                n.e("62597"),
                n.e("72822"),
                n.e("52803"),
                n.e("29890"),
                n.e("37440"),
                n.e("34735"),
                n.e("54350"),
                n.e("59275"),
            ]).then(n.bind(n, 507013)),
        webpackId: 507013,
    }),
    tv = (0, t_.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("32292"),
                n.e("28367"),
                n.e("45174"),
                n.e("85519"),
                n.e("11871"),
                n.e("37266"),
                n.e("55057"),
                n.e("14976"),
                n.e("63229"),
                n.e("31988"),
                n.e("55343"),
                n.e("90161"),
                n.e("99717"),
                n.e("6698"),
                n.e("90184"),
                n.e("62597"),
                n.e("72822"),
                n.e("52803"),
                n.e("29890"),
                n.e("37440"),
                n.e("82583"),
            ]).then(n.bind(n, 479808)),
        webpackId: 479808,
    });
var tR = n(201313),
    tP = n(920814),
    tD = n(287344),
    tx = n(969043),
    tw = n(91242),
    tM = n(661531),
    tU = n(862482),
    tG = n(602853),
    tj = n(623646),
    tk = n(446576),
    tV = n(70688),
    tF = n(795816),
    tH = n(216418),
    tB = n(47294),
    tY = n(16961),
    t$ = n(58149),
    tW = n(429913),
    tz = n(982484),
    tK = n(964404),
    tq = n(709562),
    tX = n(520006),
    tZ = n(128286),
    tQ = n(625180),
    tJ = n(31728),
    t0 = n(625494),
    t1 = n(165610);
let t2 = (e, t) => {
    X.h.wait(() => {
        (0, tJ.I_)(e, t);
    });
};
function t6(e) {
    let { embedId: t, className: n, style: i, currentWindow: r } = e,
        a = (0, f.bG)([tw.A], () => tw.A.getConnectedFrame()),
        l = (0, f.bG)([tw.A], () => tw.A.getFrameLayoutMode()),
        s = null != a && l === t1.y.FOCUSED ? window : (r ?? window),
        o = m.useRef(null),
        d = m.useCallback(() => {
            null == o.current || t2(t, o.current.getBoundingClientRect());
        }, [t]);
    m.useLayoutEffect(() => {
        d();
    });
    let c = m.useMemo(
        () =>
            new ResizeObserver(() => {
                d();
            }),
        [d],
    );
    return (
        m.useLayoutEffect(() => {
            let e = o.current;
            if (null != e) return c.observe(e), () => c.unobserve(e);
        }, [c]),
        m.useLayoutEffect(() => {
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
        m.useLayoutEffect(
            () => (
                t0._.subscribe(x.jej.MANUAL_IFRAME_RESIZING, d),
                () => {
                    t0._.unsubscribe(x.jej.MANUAL_IFRAME_RESIZING, d);
                }
            ),
            [d],
        ),
        m.useLayoutEffect(
            () => () => {
                t2(t, null);
            },
            [t],
        ),
        (0, p.jsx)("div", { ref: o, className: n, style: i })
    );
}
var t5 = n(227042),
    t3 = n(186111),
    t4 = n(334463);
let t8 = null;
function t7(e) {
    return `framepip:${e.applicationId}`;
}
function t9() {
    let e = tw.A.getConnectedFrame();
    if (null == e) {
        let e;
        return void (null != (e = t8) && t4.A.isOpen(e) && (X.h.wait(() => tJ.VN(e)), (t8 = null)));
    }
    var t = t7(e);
    if (t4.A.isOpen(t)) return !1;
    if (null != t8) {
        let e = t8;
        X.h.wait(() => tJ.VN(e));
    }
    return X.h.wait(() => tJ.ho(t, x.o1q.FRAME, {})), void (t8 = t);
}
function ne() {
    let e;
    if ((0, t5.A)({ LayerStore: t3.A, PopoutWindowStore: eS.A })) {
        let e;
        return void (null != (e = void 0 ?? t8) && t4.A.isOpen(e) && X.h.wait(() => tJ.jD(e)));
    }
    null != (e = void 0 ?? t8) && t4.A.isOpen(e) && X.h.wait(() => tJ.WU(e));
}
class nt extends Z.A {
    _initialize() {
        tw.A.addChangeListener(t9), t3.A.addChangeListener(ne);
    }
    _terminate() {
        tw.A.removeChangeListener(t9), t3.A.removeChangeListener(ne);
    }
}
let nn = new nt();
var ni = n(5867),
    nr = n(492466);
let na = { [ni.E8.NO_CHAT]: nr.Oo, [ni.E8.RESIZABLE]: nr.Ig };
function nl(e) {
    let { frame: t } = e,
        n = (0, tW.h)(t.applicationId),
        i = (0, eF.A)(),
        { selectedChannelId: r, selectedVoiceChannelId: a } = (0, f.cf)([et.A], () => ({
            selectedChannelId: et.A.getChannelId(),
            selectedVoiceChannelId: et.A.getVoiceChannelId(),
        })),
        l = (0, f.bG)([tg.A], () => null != a && r === a && tg.A.getChatOpen(a), [r, a]),
        s = (0, f.bG)([tK.Ay], () => tK.Ay.callChatSidebarWidth),
        o = (0, tG.r)(tM.A.modules.chat.RESIZE_HANDLE_WIDTH),
        d = m.useRef(null),
        c = m.useRef(null),
        [u, _] = m.useState({ width: 0, height: 0 }),
        A = m.useCallback(() => {
            tQ.A.updateFrameLayoutMode({ applicationId: t.applicationId, layoutMode: t1.y.PIP });
        }, [t.applicationId]),
        h = m.useCallback(() => {
            tQ.A.stopFrame({ applicationId: t.applicationId });
        }, [t.applicationId]);
    m.useLayoutEffect(() => {
        if (null == c.current) return;
        let e = new ResizeObserver(() => {
            _({ width: c.current?.clientWidth ?? 0, height: c.current?.clientHeight ?? 0 });
        });
        return e.observe(c.current), () => e.disconnect();
    }, []),
        m.useEffect(() => {
            let e = (e) => {
                null == d.current ||
                    (0, tj.H)(d.current, e.target) ||
                    i ||
                    tQ.A.updateFrameLayoutMode({ applicationId: t.applicationId, layoutMode: t1.y.PIP });
            };
            return (
                document.addEventListener("mousedown", e),
                () => {
                    document.removeEventListener("mousedown", e);
                }
            );
        }, [t.applicationId, i]);
    let E = u.width / Math.max(u.height, 1) < ni.B5,
        I = 0,
        g = 0,
        C = (0, tH.A)(n?.id);
    if (!C) {
        let e = u.width,
            t = u.height;
        E
            ? ((t = u.width / ni.B5) > u.height && (e = (t = u.height) * ni.B5), (g = (u.height - t) / 2))
            : ((e = Math.min(u.height * ni.B5, u.width)) > u.width && (t = (e = u.width) / ni.B5),
              (I = (u.width - e) / 2));
    }
    let T = ni.E8.NO_CHAT,
        N = (0, tY.G)();
    if (null == n) return null;
    let S = (s ?? x.da6) + o,
        L = t7(t);
    return (0, p.jsx)(to.N, {
        theme: x.NJ8.DARK,
        children: (e) =>
            (0, p.jsxs)("div", {
                className: ti()(nr.iE, na[T], e),
                ref: d,
                style: { right: l && !Number.isNaN(S) ? S : 0 },
                children: [
                    (0, p.jsx)(tz.A, { applicationId: t.applicationId }),
                    (0, p.jsx)("div", {
                        className: nr.lq,
                        children: (0, p.jsx)("div", {
                            className: ti()(nr.ht, { [nr.kK]: C }),
                            style: { paddingLeft: I, paddingRight: I, paddingTop: g, paddingBottom: g },
                            ref: c,
                            children: (0, p.jsx)(t6, { className: nr.pU, embedId: L }),
                        }),
                    }),
                    (0, p.jsxs)("div", {
                        className: nr.qr,
                        children: [
                            (0, p.jsx)(tX.A, {
                                appContext: x.BRT.APP,
                                applicationId: n.id,
                                shouldPrioritizeGroupPlusIcon: !0,
                                isRichPresenceInvite: !0,
                                iconClassName: nr.NS,
                                size: tU.$n.Sizes.MEDIUM,
                                look: tU.$n.Looks.FILLED,
                                buttonText: j.intl.string(j.t["6F9ivu"]),
                                color: tU.$n.Colors.TRANSPARENT,
                            }),
                            (0, p.jsxs)("div", {
                                className: nr.Hq,
                                children: [
                                    (0, p.jsx)("div", {
                                        className: nr.qi,
                                        children: (0, p.jsx)(tq.l, {
                                            isTrayButton: !0,
                                            label: j.intl.string(j.t.brPQ5U),
                                            onClick: A,
                                            iconComponent: tk.g,
                                            themeable: !0,
                                        }),
                                    }),
                                    (0, p.jsx)(tq.l, {
                                        isTrayButton: !1,
                                        label: j.intl.string(j.t["R/FK4A"]),
                                        onClick: h,
                                        iconComponent: tV.o,
                                        color: "disconnect",
                                    }),
                                ],
                            }),
                            N
                                ? (0, p.jsx)(tZ.A, {
                                      popoutOpen: !1,
                                      onOpenPopout: () => {
                                          (0, t$.zV)(x.HAw.ACTIVITY_POPOUT_POP_OUT_BUTTON_CLICKED),
                                              (0, tB.A)({
                                                  onConfirm: async () => {
                                                      n?.id != null &&
                                                          (await tQ.A.refreshProxyTicket({ applicationId: n.id })),
                                                          (0, tF.jp)();
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
function ns() {
    let e = (0, f.bG)([tw.A], () => tw.A.getConnectedFrame()),
        t = (0, f.bG)([tw.A], () => tw.A.getFrameLayoutMode()),
        n = (0, f.bG)([eS.A], () => eS.A.getWindowOpen(x.MLl.ACTIVITY_POPOUT));
    return t !== t1.y.FOCUSED || null == e || n ? null : (0, p.jsx)(nl, { frame: e });
}
var no = n(696292),
    nd = n(664121),
    nc = n(323384),
    nu = n(577473),
    n_ = n(834730),
    nA = n(534514),
    nh = n(416730),
    nE = n(310419),
    np = n(282026),
    nm = n(601193),
    nI = n(631001),
    ng = n(726845),
    nC = n(285395),
    nf = n(837057),
    nT = n(488995),
    nN = n(654487),
    nS = n(525748);
function nL(e) {
    let { tab: t } = e,
        n = ng.A.useField("selectedTab"),
        i = m.useMemo(
            () =>
                (function (e) {
                    switch (e) {
                        case nT.GlobalDiscoveryTab.SERVERS:
                            return (0, p.jsx)(nd.R, { color: "currentColor" });
                        case nT.GlobalDiscoveryTab.APPS:
                            return (0, p.jsx)(nc.k, { color: "currentColor" });
                        case nT.GlobalDiscoveryTab.QUESTS:
                            return (0, p.jsx)(nu.r, { color: "currentColor" });
                    }
                })(t),
            [t],
        ),
        r = m.useMemo(() => (0, nC.t)(t), [t]),
        a = n === t,
        l = m.useCallback(() => {
            switch (t) {
                case nT.GlobalDiscoveryTab.QUESTS:
                    return (
                        a && nI.A.resetState(),
                        eu.default.track(x.HAw.DISCOVERY_QUEST_TAB_CLICKED, {
                            client_ad_session_id: (0, eh.sN)().uuid,
                        }),
                        (0, nf.transitionToGlobalDiscovery)({
                            tab: nT.GlobalDiscoveryTab.QUESTS,
                            location: nN.rE.DISCOVERY_SIDEBAR,
                            questContent: no.u.DISCOVERY_SIDEBAR,
                        })
                    );
                case nT.GlobalDiscoveryTab.APPS:
                    if (!a)
                        return (0, nf.transitionToGlobalDiscovery)({
                            tab: t,
                            newSessionState: {
                                entrypoint: { name: nE.sW.GLOBAL_DISCOVERY_SIDEBAR },
                                restorePreviousView: !0,
                            },
                        });
                    nh.A.resetState(), (0, nf.transitionToGlobalDiscovery)({ tab: t });
                    return;
                case nT.GlobalDiscoveryTab.SERVERS:
                    if (!a) return (0, nf.transitionToGlobalDiscovery)({ tab: t });
                    np.A.resetState(), nm.A.resetState();
                    return;
                default:
                    return (0, nf.transitionToGlobalDiscovery)({ tab: t });
            }
        }, [t, a]);
    return (0, p.jsxs)(td.D, {
        onClick: l,
        className: ti()(nS.pc, { [nS.wH]: a }),
        children: [
            (0, p.jsx)("div", { className: nS.wz, children: i }),
            (0, p.jsx)(n_.E, { variant: "text-md/medium", color: "none", children: r }),
        ],
    });
}
let ny = function () {
    return (0, p.jsxs)("div", {
        className: nS.kL,
        children: [
            (0, p.jsx)("div", {
                className: nS.wx,
                children: (0, p.jsx)(nA.D, { variant: "text-lg/semibold", children: j.intl.string(j.t["1KqYnl"]) }),
            }),
            (0, p.jsx)("nav", {
                className: nS.C$,
                children: nT.GLOBAL_DISCOVERY_TABS.map((e) => (0, p.jsx)(nL, { tab: e }, e)),
            }),
        ],
    });
};
var nO = n(386467),
    nb = n(961973),
    nv = n(440293),
    nR = n(253363),
    nP = n(379610),
    nD = n(164956),
    nx = n(209700),
    nw = n(9588);
let nM = {
        closeSidebar() {
            X.h.dispatch({ type: "MOBILE_WEB_SIDEBAR_CLOSE" });
        },
        openSidebar() {
            X.h.dispatch({ type: "MOBILE_WEB_SIDEBAR_OPEN" });
        },
    },
    nU = !1;
class nG extends f.Ay.Store {
    static displayName = "MobileWebSidebarStore";
    getIsOpen() {
        return !v.Fr || nU;
    }
}
let nj = new nG(X.h, {
    MOBILE_WEB_SIDEBAR_OPEN: function () {
        nU = !0;
    },
    MOBILE_WEB_SIDEBAR_CLOSE: function () {
        nU = !1;
    },
});
var nk = n(601623),
    nV = n(851109);
n(323874), n(14289), n(35956);
var nF = n(777666),
    nH = n(214947),
    nB = n(761508),
    nY = n(944791),
    n$ = n(711950),
    nW = n(915089),
    nz = n(586774),
    nK = n(742589),
    nq = n(95550),
    nX = n(554146),
    nZ = n(364522),
    nQ = n(820284),
    nJ = n(688810),
    n0 = n(379848),
    n1 = n(821609),
    n2 = n(290595),
    n6 = n(516746);
function n5(e) {
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
        ? (0, p.jsx)(td.D, {
              innerRef: s,
              onClick: l,
              tabIndex: null != l ? 0 : -1,
              className: ti()(r, { [n6.A7]: !n, [n6.C5]: n, [n6.jC]: t, [n6.vu]: i, [n6.bG]: null != l, [n6._$]: o }),
              ...d,
              children: a,
          })
        : (0, p.jsx)("div", {
              ref: s,
              className: ti()(r, { [n6.A7]: !n, [n6.C5]: n, [n6.jC]: t, [n6.vu]: i, [n6._$]: o }),
              ...d,
              children: a,
          });
}
var n3 = n(362288);
function n4(e) {
    let { className: t, markAsDismissed: n } = e;
    return (0, p.jsxs)(n5, {
        className: ti()(n3.Nr, t),
        children: [
            (0, p.jsx)(nA.D, { variant: "heading-md/semibold", className: n3.wx, children: j.intl.string(j.t.HcbnMM) }),
            (0, p.jsx)(n_.E, {
                variant: "text-sm/normal",
                children: j.intl.format(j.t.NkFrzN, {
                    onPrivacyClick: () => {
                        (0, e3.openUserSettings)(e5.X.DATA_AND_PRIVACY_PANEL);
                    },
                }),
            }),
            (0, p.jsxs)("div", {
                className: n3.UD,
                children: [
                    (0, p.jsx)(n1.$, {
                        variant: "primary",
                        size: "sm",
                        fullWidth: !0,
                        text: j.intl.string(j.t.ebojgD),
                        onClick: () => (0, n2.U)([x.YAq.PERSONALIZATION], []),
                    }),
                    (0, p.jsx)(n1.$, {
                        variant: "secondary",
                        size: "sm",
                        fullWidth: !0,
                        text: j.intl.string(j.t.f3Pet9),
                        onClick: () => n(tN.i.DISMISS),
                    }),
                ],
            }),
        ],
    });
}
var n8 = n(153488),
    n7 = n(111956),
    n9 = n.n(n7),
    ie = n(922016),
    it = n(829219),
    ii = n(859703),
    ir = n(507107),
    ia = n(945810);
let il = (0, ia.mj)({
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
var is = n(890687),
    io = n(710969),
    id = n(639214),
    ic = n(814793),
    iu = n(219271),
    i_ = n(427358),
    iA = n(287809),
    ih = n(943577),
    iE = n(279877);
n(321073);
var ip = n(401843),
    im = n(682261),
    iI = n(765379),
    ig = n(90644),
    iC = n(61330),
    iT = n(960076),
    iN = n(834615),
    iS = n(970928),
    iL = n(516085),
    iy = n(141628),
    iO = n(990078),
    ib = n(414499),
    iv = n(687966),
    iR = n(97808),
    iP = n(778712),
    iD = n(983851),
    ix = n(187322),
    iw = n(492684),
    iM = n(212245),
    iU = n(573648),
    iG = n(62583),
    ij = n(908289),
    ik = n(672979),
    iV = n(440594);
function iF(e, t) {
    if (null != e && e.type === x.$pd.CUSTOM_STATUS) return null != e.state ? e.state.trim() : null;
    if (null != t) return null == e || e.type !== x.$pd.PLAYING ? j.intl.string(j.t.eXan7B) : e.name;
    if (null == e || null == e.name) return null;
    if ((0, iT.A)(e)) return null != e.details && "" !== e.details ? e.details : e.name;
    if ((0, iI.A)(e)) return (0, iV.A)(e.name);
    var n = e.type,
        i = e.name;
    switch (n) {
        case x.$pd.LISTENING:
        case x.$pd.WATCHING:
        case x.$pd.COMPETING:
        case x.$pd.STREAMING:
            return i;
        case x.$pd.CUSTOM_STATUS:
        case x.$pd.HANG_STATUS:
            return null;
        case x.$pd.PLAYING:
        default:
            return i;
    }
}
var iH = n(737393),
    iB = n(139286),
    iY = n(46225),
    i$ = n(627363),
    iW = n(587895),
    iz = n(47167),
    iK = n(402216),
    iq = n(939341),
    iX = n(681827),
    iZ = n(826673),
    iQ = n(609425),
    iJ = n(73392),
    i0 = n(137177),
    i1 = n(279250),
    i2 = n(607407),
    i6 = n(290987),
    i5 = n(928550),
    i3 = n(594262),
    i4 = n(378570),
    i8 = n(345942),
    i7 = n(804980),
    i9 = n(734057),
    re = n(879945),
    rt = n(266080),
    rn = n(403362),
    ri = n(427262),
    rr = n(336787),
    ra = n(492213);
let rl = [14, 14, 12, 12, 10, 8, 6],
    rs = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return (0, p.jsx)(n_.E, { className: ti()(ra.P_, t), variant: "text-sm/semibold", children: e });
    },
    ro = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
        return (0, p.jsx)(n_.E, {
            className: ti()(ra.P_, t),
            variant: "text-xs/normal",
            color: "text-muted",
            children: e,
        });
    },
    rd = (0, iw.A)((e) => {
        let { message: t } = e;
        return (0, p.jsx)("div", { className: ra.__invalid_timestamp, children: t });
    }),
    rc = (e) => {
        let { children: t } = e;
        return (0, p.jsx)("section", { className: ra.uW, children: t });
    },
    ru = (e) => {
        let { inset: t, className: n } = e;
        return (0, p.jsx)("div", { className: ti()(ra.me, { [ra.C5]: t }, n) });
    },
    r_ = (e) => {
        let { onCloudPlayClick: t, analyticsLocations: n } = e;
        return (
            (0, iB.A)({
                name: tr.ImpressionNames.CLOUD_PLAY_CTA,
                type: tr.ImpressionTypes.VIEW,
                properties: { location_stack: n },
            }),
            (0, p.jsx)(iO.m, {
                text: j.intl.string(j.t.JVwWva),
                children: (0, p.jsx)(n1.$, {
                    size: "sm",
                    variant: "primary",
                    icon: ib.h,
                    text: j.intl.string(j.t.YsIsPU),
                    onClick: t,
                }),
            })
        );
    },
    rA = (e) => {
        let { activity: t, user: n } = e,
            i = (0, i3.l)({ activity: t, user: n, supportsAskToJoin: !1 }),
            r = null != i,
            { data: a } = (0, i$.YY)(t.application_id),
            { fetched: l, hasAlreadyLinked: s, canStartAuthorization: o, startAuthorization: d } = (0, iY.RD)(a),
            c = !r && l && o && !s;
        return {
            isJoinActivityButtonShown: r,
            joinActivityButtonAction: i,
            isLinkAccountButtonShown: c,
            startAuthorization: d,
            hasButton: r || c,
        };
    },
    rh = (e) => {
        let { activity: t, user: n } = e,
            {
                joinActivityButtonAction: i,
                isJoinActivityButtonShown: r,
                isLinkAccountButtonShown: a,
                startAuthorization: l,
            } = rA({ activity: t, user: n }),
            { newestAnalyticsLocation: s } = (0, nJ.Ay)();
        if (r && null != i) {
            let { isJoining: e, handleJoinRequest: t, buttonCTA: n, tooltip: r, isEnabled: a } = i;
            return (0, p.jsx)(iO.m, {
                text: r,
                asContainer: !a,
                children: (0, p.jsx)(n1.$, {
                    size: "sm",
                    variant: "secondary",
                    icon: iv._,
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
            ? (0, p.jsx)(n1.$, {
                  size: "sm",
                  variant: "secondary",
                  icon: iy.A,
                  text: j.intl.string(j.t.sbdnpw),
                  onClick: (e) => {
                      e.stopPropagation(), l({ analyticsLocations: [s] });
                  },
              })
            : null;
    },
    rE = (e) => {
        let { activity: t, analyticsLocations: n } = e,
            { application_id: i, name: r } = t,
            { data: a } = (0, i$.YY)(i),
            l = (0, iH.A)({ application: a, analyticsLocations: n }),
            s = (0, iZ.JZ)(nX.M.CLOUD_PLAY_NEW_BADGE),
            o = (0, i5.L)(i);
        return null == l || o
            ? null
            : (0, p.jsxs)(p.Fragment, {
                  children: [
                      (0, p.jsx)(ru, { className: ra.gi }),
                      (0, p.jsxs)("div", {
                          className: ra.DK,
                          children: [
                              (0, p.jsxs)("div", {
                                  className: ra.tJ,
                                  children: [
                                      s
                                          ? null
                                          : (0, p.jsx)(nF.Lp, {
                                                text: j.intl.string(j.t.y2b7CA),
                                                color: tM.A.colors.BACKGROUND_BRAND.css,
                                            }),
                                      (0, p.jsx)(n_.E, {
                                          variant: "text-xs/medium",
                                          children: j.intl.formatToPlainString(j.t.RmiYF3, { gameName: r }),
                                      }),
                                  ],
                              }),
                              (0, p.jsx)(r_, { onCloudPlayClick: l, analyticsLocations: n }),
                          ],
                      }),
                  ],
              });
    };
var rp = (((o = rp || {}).XBOX = "XBOX"), (o.SPOTIFY = "SPOTIFY"), (o.MULTIPLE = "MULTIPLE"), o);
let rm = (e) => {
    let t,
        { src: n, onClick: i, onContextMenu: r } = e;
    switch (n) {
        case "XBOX":
            t = (0, p.jsx)(rt.A, { className: ra.nr, color: tM.A.unsafe_rawColors.PRIMARY_300.css });
            break;
        case "SPOTIFY":
            t = (0, p.jsx)(re.A, { className: ra.nr, color: tM.A.unsafe_rawColors.PLATFORM_SPOTIFY.css });
            break;
        case "MULTIPLE":
            t = (0, p.jsx)("div", {
                className: ra.XQ,
                children: (0, p.jsx)(iv._, {
                    size: "md",
                    className: ti()(ra.nr, ra.iY),
                    color: tM.A.unsafe_rawColors.PRIMARY_300.css,
                }),
            });
            break;
        default:
            t = (0, p.jsx)("img", { src: n ?? void 0, alt: "", className: ra.nr });
    }
    return null != i || null != r
        ? (0, p.jsx)(td.D, { onClick: i, className: ti()(null != i ? ra.vk : ""), onContextMenu: r, children: t })
        : t;
};
rm.Src = rp;
let rI = (e) => {
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
        c = (0, p.jsx)(n_.E, { className: ra.P_, variant: "text-sm/normal", color: "text-muted", children: i });
    return (0, p.jsxs)("header", {
        className: null != r ? ra.dI : ra.sk,
        children: [
            (0, p.jsx)(iR.eu, {
                src: t.user.getAvatarURL(o, 32),
                "aria-label": t.user.username,
                size: iP._3.SIZE_32,
                className: ra.Nw,
                status: t.status,
                onContextMenu: s,
            }),
            (0, p.jsxs)("div", {
                className: ra.__invalid_headerDetails,
                children: [
                    (0, p.jsx)(n_.E, { className: ti()(ra.P_, d), variant: "text-md/semibold", children: n }),
                    null != a ? (0, p.jsx)(td.D, { className: ra.vk, onClick: a, children: c }) : c,
                ],
            }),
            null != r && null != l ? (0, p.jsx)(td.D, { className: ra.vk, onClick: l, children: r }) : r,
        ],
    });
};
rI.Icon = rm;
let rg = (e) => {
    let { children: t, className: n, ...i } = e;
    return (0, p.jsx)(ix.vN, {
        children: (0, p.jsx)(n5, { noBackground: !0, className: ti()(n, ra.iE), padded: !1, ...i, children: t }),
    });
};
(rg.Header = rI),
    (rg.Body = (e) => {
        let { children: t } = e;
        return (0, p.jsx)(n5, { inset: !0, padded: !1, className: ra.rf, children: t });
    }),
    (rg.Separator = ru),
    (rg.VoiceSection = (e) => {
        let { guild: t, channel: n, partySize: i, members: r, onChannelContextMenu: a } = e,
            l = m.useRef(null),
            s = (0, iz.Ay)(n, !0),
            o = (0, ee.Iv)(t, 32),
            d = (0, ee.Rb)(t);
        return (0, p.jsx)(rc, {
            children: (0, p.jsxs)("div", {
                className: ra.iO,
                ref: l,
                onContextMenu: (e) => a(e, n),
                children: [
                    (0, p.jsx)(td.D, {
                        onClick: () => (0, i8.u)(t.id),
                        "aria-hidden": !0,
                        tabIndex: -1,
                        children: (0, p.jsxs)("div", {
                            className: ra.J4,
                            children: [
                                null != o
                                    ? (0, p.jsx)("img", { alt: "", src: o, className: ti()(ra.y8, ra.p8) })
                                    : (0, p.jsx)("div", {
                                          className: ra.I,
                                          children: (0, p.jsx)("div", {
                                              className: ra.lB,
                                              style: { fontSize: rl[d.length] ?? rl[rl.length - 1] },
                                              children: d,
                                          }),
                                      }),
                                (0, p.jsx)("div", {
                                    className: ra._s,
                                    children: (0, p.jsx)(iD.H, { size: "md", color: "currentColor", className: ra.ZS }),
                                }),
                            ],
                        }),
                    }),
                    (0, p.jsx)(td.D, {
                        onClick: () => {
                            O.default.selectVoiceChannel(n.id), (0, i4.iN)(n.id);
                        },
                        focusProps: { ringTarget: l },
                        children: (0, p.jsxs)("div", { className: ra.U6, children: [rs(t.name, ra.BJ), ro(s, ra.BJ)] }),
                    }),
                    (0, p.jsx)(rr.A, { partySize: i, members: r, guildId: t.id }),
                ],
            }),
        });
    }),
    (rg.GameSection = (e) => {
        let { icon: t, name: n, partySize: i, members: r, activity: a } = e,
            { analyticsLocations: l } = (0, nJ.Ay)(eC.A.NOW_PLAYING_ITEM_GAME_SECTION);
        return (0, p.jsxs)(rc, {
            children: [
                (0, p.jsxs)("div", {
                    className: ra.yn,
                    children: [
                        null != t ? (0, p.jsx)("img", { alt: "", src: t, className: ra.RZ }) : null,
                        (0, p.jsxs)("div", {
                            children: [rs(n), ro(j.intl.formatToPlainString(j.t.C4WXvc, { memberCount: i.totalSize }))],
                        }),
                        (0, p.jsx)(rr.A, { partySize: i, members: r }),
                    ],
                }),
                (0, p.jsx)(rE, { activity: a, analyticsLocations: l }),
            ],
        });
    }),
    (rg.RichPresenceSection = (e) => {
        let { activity: t, getAssetImage: i, user: r } = e,
            { analyticsLocations: a } = (0, nJ.Ay)(eC.A.NOW_PLAYING_ITEM_RICH_PRESENCE_SECTION),
            { data: l } = (0, i$.YY)(t.application_id),
            { assets: s, details: o, state: d, application_id: c } = t,
            { hasButton: u } = rA({ activity: t, user: r }),
            _ = (0, iq.C4)(l)?.src ?? n(960648),
            A = (0, iH.A)({ application: l, analyticsLocations: a });
        return null != t.assets || (0, im.A)(t) || null != A
            ? (0, p.jsxs)(rc, {
                  children: [
                      (0, p.jsxs)("div", {
                          className: ti()(ra.tL, { [ra._2]: u }),
                          children: [
                              null != s && 0 !== Object.keys(s).length
                                  ? (0, p.jsxs)("div", {
                                        className: ra.YY,
                                        children: [
                                            (0, p.jsx)("img", {
                                                alt: s.large_text ?? "",
                                                src: i(c, s.large_image, [160, 160]) ?? _,
                                                className: ti()(ra.nX, { [ra.p8]: null != s.small_image }),
                                            }),
                                            null != s.small_image
                                                ? (0, p.jsx)("img", {
                                                      alt: s.small_text ?? "",
                                                      src: i(c, s.small_image, [64, 64]),
                                                      className: ra.rp,
                                                  })
                                                : null,
                                        ],
                                    })
                                  : (0, p.jsx)("div", {
                                        className: ra.YY,
                                        children: (0, p.jsx)("img", { alt: "", src: _, className: ra.nX }),
                                    }),
                              (0, p.jsxs)("div", {
                                  className: ra.JD,
                                  children: [
                                      rs(null != o && "" !== o ? o : t.name),
                                      null != d ? ro(d) : null,
                                      (() => {
                                          let { timestamps: e } = t;
                                          return null == e || !(0, ik.A)(t) || (0, ig.A)(t)
                                              ? null
                                              : ro(
                                                    (0, im.A)(t)
                                                        ? (0, p.jsx)(rd, { timestamps: e })
                                                        : (0, p.jsx)(i6.Ay, {
                                                              start: e.start,
                                                              end: e.end,
                                                              location: i6.Ay.Locations.USER_ACTIVITY,
                                                              className: ra.__invalid_playTime,
                                                          }),
                                                );
                                      })(),
                                  ],
                              }),
                              (0, p.jsx)(rh, { activity: t, user: r }),
                          ],
                      }),
                      (0, p.jsx)(rE, { activity: t, analyticsLocations: a }),
                  ],
              })
            : null;
    }),
    (rg.XboxSection = (e) => {
        let { title: t } = e;
        return (0, p.jsx)(rc, {
            children: (0, p.jsxs)("div", {
                className: ra.oc,
                children: [
                    (0, p.jsx)(rt.A, { className: ra.Ai }),
                    (0, p.jsxs)("div", {
                        className: ra.__invalid_xboxSectionDetails,
                        children: [rs(t), ro(j.intl.string(j.t["JG9r+9"]))],
                    }),
                ],
            }),
        });
    }),
    (rg.SpotifySection = (e) => {
        let {
            activity: { assets: t, details: n, state: i, application_id: r },
            partySize: a,
            members: l,
            isSolo: s,
            getAssetImage: o,
        } = e;
        return (0, p.jsx)(rc, {
            children: (0, p.jsxs)("div", {
                className: ra.uy,
                children: [
                    null != t
                        ? (0, p.jsxs)("div", {
                              className: ra.YY,
                              children: [
                                  (0, p.jsx)("img", {
                                      alt: t.large_text ?? "",
                                      src: o(r, t.large_image, [160, 160]),
                                      className: ti()(ra.nX, ra.Dy, { [ra.p8]: null != t.small_image }),
                                  }),
                                  s
                                      ? null
                                      : (0, p.jsx)(re.A, {
                                            className: ra.rp,
                                            color: tM.A.unsafe_rawColors.PLATFORM_SPOTIFY.css,
                                        }),
                              ],
                          })
                        : (0, p.jsx)("div", {}),
                    (0, p.jsxs)("div", {
                        children: [null != n ? rs(n) : null, null != i ? ro(i.replace(/; /g, ", ")) : null],
                    }),
                    (0, p.jsx)(rr.A, { minAvatarsShown: s ? 2 : 1, partySize: a, members: l }),
                ],
            }),
        });
    }),
    (rg.TwitchSection = (e) => {
        let t,
            { activity: i, user: r, getAssetImage: a, guildId: l } = e,
            { name: s, details: o, assets: d, application_id: c } = i;
        return (
            null != d &&
                (0, iT.A)(i) &&
                (t = (0, p.jsx)(iX.A, {
                    className: ra.E6,
                    aspectRatio: 16 / 9,
                    children: (0, p.jsxs)(td.D, {
                        href: (0, ij.A)(i),
                        tag: "a",
                        target: "_blank",
                        children: [
                            (0, p.jsx)("img", {
                                alt: d.large_text ?? "",
                                src: a(c, d.large_image, [900, 500]),
                                className: ra.ZB,
                            }),
                            (0, p.jsx)("img", { src: n(606621), className: ra.vc, alt: "" }),
                        ],
                    }),
                })),
            (0, p.jsxs)(rc, {
                children: [
                    (0, p.jsxs)("div", {
                        className: ti()({ [ra.x5]: null == r, [ra.Qh]: null != r }),
                        children: [
                            (0, p.jsx)("img", { alt: "", src: iU.A.get(x.fg2.TWITCH).icon.lightSVG, className: ra.Gq }),
                            (0, p.jsxs)("div", { children: [rs(s), null != o ? ro(o) : null] }),
                            null != r
                                ? (0, p.jsx)(iR.eu, {
                                      src: r.getAvatarURL(l, 24),
                                      "aria-label": r.username,
                                      className: ra.AZ,
                                      size: iP._3.SIZE_24,
                                  })
                                : null,
                        ],
                    }),
                    t,
                ],
            })
        );
    }),
    (rg.ApplicationStreamingSection = (e) => {
        let { activity: t, user: n, applicationStream: i, onPreviewClick: r, guildId: a } = e,
            l = (0, f.bG)([i9.A], () => i9.A.getChannel(i.channelId)),
            [s, o] = (0, i1.zP)(l),
            d = (0, p.jsxs)(td.D, {
                onClick: s ? r : void 0,
                className: ra.q_,
                children: [
                    (0, p.jsx)(i2.A, { stream: i, className: ra.IN }),
                    (0, p.jsx)(n_.E, {
                        className: ra.Er,
                        variant: "text-sm/medium",
                        color: "always-white",
                        children: (0, i1.CT)(o),
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
                            let n = iF(e, t);
                            if (null != n) return { activity: e, activityText: n };
                            e?.type === x.$pd.CUSTOM_STATUS && null != e.emoji && (i = e);
                        }
                        return i?.emoji != null ? { activity: i, activityText: null } : null;
                    }
                    return iF(e, t);
                })(t, i)?.activityText ?? j.intl.string(j.t.eXan7B),
            u = (0, iQ.A)({ userId: n.id, guildId: a }),
            _ = (0, iJ.a)({ displayNameStyles: u });
        return (0, p.jsxs)(rc, {
            children: [
                (0, p.jsxs)("div", {
                    className: ra.ME,
                    children: [
                        (0, p.jsx)(iR.eu, {
                            size: iP._3.SIZE_32,
                            src: n.getAvatarURL(a, 32),
                            "aria-label": n.username,
                            className: ra.OL,
                        }),
                        (0, p.jsxs)("div", { children: [rs(ri.Ay.getName(n), _), ro(c)] }),
                        (0, p.jsx)(iK.Ay, { size: iK.Ay.Sizes.SMALL }),
                    ],
                }),
                d,
            ],
        });
    }),
    (rg.EmbeddedActivitySection = (e) => {
        let { activity: t, channel: n, guildId: i, participants: r } = e,
            [a, l] = m.useState(null),
            s = t.application_id;
        m.useEffect(() => {
            null != s &&
                (0, iS.RG)(s, ["embedded_background"]).then((e) => {
                    let [t] = e;
                    return l(t);
                });
        }, [s]);
        let o = (0, f.yK)([iA.default, D.default], () =>
                Array.from(r)
                    .map((e) => (D.default.getId() === e ? null : iA.default.getUser(e)))
                    .filter(rn.Vq),
            ),
            d = (0, iM.p)(),
            { analyticsLocations: c } = (0, nJ.Ay)();
        if (null == s) return null;
        let u = iW.A.getApplication(s);
        if (null == u) return null;
        let _ = null != t.created_at && t.created_at > 0 ? { start: t.created_at } : void 0,
            A = (0, iS.uD)(u.id, a, 300);
        return (0, p.jsxs)(rc, {
            children: [
                (0, p.jsxs)("div", {
                    className: ra.h1,
                    children: [
                        (0, p.jsx)(i0.A, { game: u, size: i0.M.XSMALL, className: ra.VZ }),
                        (0, p.jsx)("div", {
                            className: ra.F0,
                            children: (0, p.jsx)(n_.E, { variant: "text-sm/semibold", children: u.name }),
                        }),
                        null != _
                            ? (0, p.jsx)("div", {
                                  className: ra.T$,
                                  children: (0, p.jsx)(n_.E, {
                                      color: "text-muted",
                                      variant: "text-sm/normal",
                                      children: (0, p.jsx)(rd, { timestamps: _ }),
                                  }),
                              })
                            : null,
                    ],
                }),
                (0, p.jsxs)("div", {
                    className: ra.Kt,
                    children: [
                        null != A ? (0, p.jsx)("img", { src: A, alt: u.name, className: ra.pV }) : null,
                        (0, p.jsxs)("div", {
                            className: ra.d4,
                            children: [
                                (0, p.jsx)(i7.LN, { users: o, guildId: i, channelId: n.id }),
                                (0, p.jsx)("div", {
                                    className: ra.ZE,
                                    children: (0, p.jsx)(n1.$, {
                                        variant: "primary",
                                        size: "sm",
                                        text: j.intl.string(j.t.VJlc0S),
                                        onClick: (e) => {
                                            e.stopPropagation(),
                                                (0, iG.A)({
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
var rC = n(812808);
function rf(e) {
    let { party: t, onChannelContextMenu: n, quest: i } = e,
        r = (0, rC.G)(),
        { voiceChannels: a, currentActivities: l, partiedMembers: s, applicationStreams: o, guildContext: d } = t,
        c = (0, is.sb)(i),
        u = [],
        _ = (e) => {
            let { length: t } = u;
            u.push(e);
        };
    for (let { activity: e } of (a.length > 0 &&
        a.forEach((e) => {
            let { members: t, channel: i, guild: r } = e;
            _(
                (0, p.jsx)(
                    rg.VoiceSection,
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
            let t = iL.Fm(e);
            if (null != t) {
                _(t);
                break;
            }
        }
    return (
        o.length > 0 &&
            r &&
            o.forEach((e) => {
                let { stream: t, streamUser: n, activity: i } = e;
                _(
                    (0, p.jsx)(
                        rg.ApplicationStreamingSection,
                        {
                            guildId: d?.id,
                            user: n,
                            activity: i,
                            applicationStream: t,
                            onPreviewClick: () => {
                                O.default.selectVoiceChannel(t.channelId), (0, ip.Nl)(t);
                            },
                        },
                        `application-stream-${t.ownerId}`,
                    ),
                );
            }),
        l.forEach((e, t) => {
            let { activity: n, game: r, playingMembers: o, activityUser: u } = e;
            if (null == n || null == n.type) return null;
            if (n.type === x.$pd.PLAYING)
                if (l.length > 1 && !(0, im.A)(n) && null != r)
                    _(
                        (0, p.jsx)(
                            rg.GameSection,
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
                else if ((0, iI.A)(n)) {
                    let e = new Set(o.map((e) => e.id)),
                        t = a.find((e) => null != e)?.channel;
                    null != t &&
                        _(
                            (0, p.jsx)(
                                rg.EmbeddedActivitySection,
                                { activity: n, participants: e, channel: t, guildId: t.guild_id },
                                `embedded-activity-${n.application_id}`,
                            ),
                        );
                } else
                    (0, iC.A)(n)
                        ? _((0, p.jsx)(rg.XboxSection, { title: r.name }, `xbox-${n.session_id ?? t}`))
                        : _(
                              (0, p.jsx)(
                                  rg.RichPresenceSection,
                                  { activity: n, getAssetImage: iS.uD, user: u },
                                  `rich-presence-${n.session_id ?? t}-${u.id}`,
                              ),
                          );
            else if ((0, iT.A)(n)) {
                let e = a.length > 0 && a[0].members.length > 1,
                    i = o.length > 1;
                _(
                    (0, p.jsx)(
                        rg.TwitchSection,
                        { guildId: d?.id, activity: n, user: e || i ? u : null, getAssetImage: iS.uD },
                        `streaming-${n.session_id ?? t}`,
                    ),
                );
            } else
                n.type === x.$pd.LISTENING &&
                    ((0, ig.A)(n)
                        ? _(
                              (0, p.jsx)(
                                  rg.SpotifySection,
                                  {
                                      activity: n,
                                      isSolo: 1 === s.length,
                                      partySize: { knownSize: o.length, unknownSize: 0, totalSize: o.length },
                                      getAssetImage: iS.uD,
                                      members: o,
                                  },
                                  `spotify-${n.session_id ?? t}-${u.id}`,
                              ),
                          )
                        : (null != n.assets || (0, im.A)(n)) &&
                          _(
                              (0, p.jsx)(
                                  rg.RichPresenceSection,
                                  { activity: n, getAssetImage: iS.uD, user: u },
                                  `rich-presence-${n.session_id ?? t}-${u.id}`,
                              ),
                          ));
            c &&
                null != i &&
                null != r &&
                (0, id.zS)(n, i) &&
                (null == i.userStatus || !(0, io.gO)(i.userStatus, ir.uF.ACTIVITY_PANEL)) &&
                _((0, p.jsx)(iN.A, { quest: i }, `quest-${i.id}-${n.session_id ?? t}`));
        }),
        u.length > 0 ? (0, p.jsx)(rg.Body, { children: u }) : null
    );
}
n(595);
var rT = n(409626),
    rN = n(692969);
function rS(e) {
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
                a = ri.Ay.getName(t[0].user),
                l = null != t[1] ? ri.Ay.getName(t[1].user) : null != r[0] ? ri.Ay.getName(r[0]) : null;
            switch (n.length) {
                case 1:
                    return a;
                case 2:
                    return j.intl.format(j.t.t1DyC1, { user1: a, user2: l });
                default:
                    return j.intl.format(j.t["5CSEcJ"], { user1: a, user2: l, extras: n.length - 2 });
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
            if ((0, iI.A)(d) && null != d)
                return {
                    subtitle: (0, p.jsx)(i6.Ay, {
                        start: c,
                        location: i6.Ay.Locations.ACTIVITY_FEED_NEW,
                        messageProps: u,
                    }),
                    icon: null,
                };
            if (l + s === 1 && null != o) {
                let { game: e } = o;
                if (null == d) return { subtitle: null, icon: null };
                let t = iL.Ij(d);
                if (null != t) return t;
                switch (d.type) {
                    case x.$pd.PLAYING:
                        if ((0, iC.A)(d))
                            return {
                                subtitle: j.intl.string(j.t.tO8wOx),
                                icon: (0, p.jsx)(rg.Header.Icon, { src: rg.Header.Icon.Src.XBOX }),
                            };
                        return {
                            subtitle: (0, p.jsx)(i6.Ay, {
                                start: c,
                                location: i6.Ay.Locations.ACTIVITY_FEED_NEW,
                                messageProps: u,
                            }),
                            icon:
                                null != e
                                    ? (0, p.jsx)(rg.Header.Icon, {
                                          src: null != e.getIconURL(64) ? e.getIconURL(64) : n(960648),
                                      })
                                    : null,
                        };
                    case x.$pd.STREAMING:
                        return {
                            subtitle: j.intl.string(j.t.HyGHj7),
                            icon:
                                null != e && null != e.getIconURL(64)
                                    ? (0, p.jsx)(rg.Header.Icon, { src: e.getIconURL(64) })
                                    : null,
                        };
                    case x.$pd.LISTENING:
                        let i;
                        return (
                            (i = (0, ig.A)(d)
                                ? (0, p.jsx)(rg.Header.Icon, { src: rg.Header.Icon.Src.SPOTIFY })
                                : null != e.getIconURL(64)
                                  ? (0, p.jsx)(rg.Header.Icon, { src: e.getIconURL(64) })
                                  : (0, p.jsx)(rg.Header.Icon, { src: n(960648) })),
                            { subtitle: j.intl.formatToPlainString(j.t.NF5xop, { name: d.name }), icon: i }
                        );
                    case x.$pd.WATCHING:
                        return {
                            subtitle: j.intl.formatToPlainString(j.t.pW3Ip3, { name: d.name }),
                            icon:
                                null != e && null != e.getIconURL(64)
                                    ? (0, p.jsx)(rg.Header.Icon, { src: e.getIconURL(64) })
                                    : null,
                        };
                    default:
                        return { subtitle: j.intl.string(j.t.grGyaf), icon: null };
                }
            }
            if (0 === a.length) {
                if (r.length > 0) return { subtitle: j.intl.string(j.t.grGyaf), icon: null };
                let e = a[0];
                if (null != e) {
                    let { activity: t } = e;
                    if (null != t) {
                        let e = iL.Ij(t);
                        if (null != e) return e;
                    }
                    if (null != t && t.type === x.$pd.LISTENING)
                        return {
                            subtitle: j.intl.string(j.t.rmnkz4),
                            icon: (0, p.jsx)(rg.Header.Icon, { src: rg.Header.Icon.Src.SPOTIFY }),
                        };
                }
            } else if (1 === a.length) {
                let e = a.find((e) => null != e.activity);
                if (null == e) return { subtitle: null, icon: null };
                let { activity: t, game: n, startedPlayingTime: i } = e;
                return (
                    eM()(null != t, "Activity was null somehow"),
                    {
                        subtitle: (0, p.jsx)(i6.Ay, {
                            start: i,
                            location: i6.Ay.Locations.ACTIVITY_FEED_NEW,
                            messageProps: u,
                        }),
                        icon:
                            null != n && null != n.getIconURL(64)
                                ? (0, p.jsx)(rg.Header.Icon, { src: n.getIconURL(64) })
                                : null,
                    }
                );
            }
            return {
                subtitle: j.intl.string(j.t.sau5tt),
                icon: (0, p.jsx)(rg.Header.Icon, { src: rg.Header.Icon.Src.MULTIPLE }),
            };
        })(t),
        u = (0, rN.A)({
            applicationId: t.currentActivities[0]?.activity?.application_id,
            location: "FriendsActivityFeed",
            source: rT.Ob.FriendsActivityFeed,
        }),
        _ = (0, iQ.A)({ userId: s.user.id, guildId: l?.id }),
        A = (0, iJ.a)({ displayNameStyles: _ });
    return (0, p.jsx)(rg.Header, {
        priorityUser: s,
        guildId: l?.id,
        title: o,
        subtitle: d,
        icon: c,
        onSubtitleClick: u,
        onIconClick: u,
        onContextMenu: (e) => i(e, s.user),
        displayNameFont: 1 === a.length ? A : void 0,
    });
}
var rL = n(550079),
    ry = n(477782),
    rO = n(964486),
    rb = n(308368),
    rv = n(780907),
    rR = n(933958),
    rP = n(776677),
    rD = n(874546),
    rx = n(651743),
    rw = n(30370),
    rM = n(134861),
    rU = n(498642),
    rG = n(71393),
    rj = n(189081),
    rk = n(375492),
    rV = n(576705),
    rF = n(461213),
    rH = n(977997),
    rB = n(689168),
    rY = n(340829),
    r$ = n(144914),
    rW = n(715671);
let rz = iU.A.get(x.fg2.XBOX).name;
var rK = n(975732),
    rq = n(297413),
    rX = n(564450);
function rZ(e) {
    let { user: t, status: n, guildId: i } = e;
    return (0, p.jsxs)("div", {
        className: rX.Ku,
        children: [
            (0, p.jsx)(iR.eu, {
                src: t.getAvatarURL(i, 24),
                className: rX.my,
                "aria-label": t.username,
                size: iP._3.SIZE_24,
                status: n,
            }),
            (0, p.jsx)(rq.A, { user: t, hideDiscriminator: !0 }),
        ],
    });
}
function rQ(e) {
    let { label: t } = e;
    return (0, p.jsxs)("div", {
        className: rX.Ku,
        children: [(0, p.jsx)("div", { className: ti()(rX.my, rX.L5) }), (0, p.jsx)("div", { children: t })],
    });
}
function rJ(e) {
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
            (0, p.jsx)(ry.Dr, {
                id: e.id,
                keepItemStyles: !0,
                render: (t) => (0, p.jsx)(rZ, { ...t, user: e, status: n, guildId: a }),
                action: () => (0, rK.openUserProfileModal)({ userId: e.id, guildId: a, sourceAnalyticsLocations: l }),
            }),
        );
    for (let e of n)
        s.push(
            (0, p.jsx)(ry.Dr, {
                id: e.id,
                keepItemStyles: !0,
                render: (t) => (0, p.jsx)(rZ, { ...t, user: e, guildId: a }),
                action: () => (0, rK.openUserProfileModal)({ userId: e.id, guildId: a, sourceAnalyticsLocations: l }),
            }),
        );
    let o = i - s.length;
    return (
        o > 0 &&
            s.push(
                (0, p.jsx)(ry.Dr, {
                    id: `unknown-members-${r?.session_id}`,
                    render: (e) =>
                        (0, p.jsx)(rQ, { ...e, label: j.intl.formatToPlainString(j.t["6Kqn9M"], { count: o }) }),
                }),
            ),
        s
    );
}
var r0 = n(308528),
    r1 = n(855511);
function r2(e) {
    return {
        af_voice_chat: e.voiceChannels.length > 0,
        af_people_count: e.partiedMembers.length,
        af_rich_presence: e.currentActivities.some((e) => {
            let { activity: t } = e;
            return (0, im.A)(t);
        }),
        game_platform: e.currentActivities.length > 0 ? (0, r1.A)(e.currentActivities[0].activity) : null,
    };
}
var r6 = n(655116),
    r5 = n(341335),
    r3 = n(286617),
    r4 = n(533207),
    r8 = n(881335),
    r7 = n(272984);
function r9(e) {
    let t,
        n,
        i,
        { party: r, close: a, onSelect: l } = e,
        s = (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                { priorityMembers: n, partiedMembers: i } = e,
                r = m.useContext(eu.AnalyticsContext),
                a = n.map((e) => {
                    let { user: t } = e;
                    return t.id;
                }),
                l = 1 === i.length && 1 === n.length,
                s = n.length - i.length > 0;
            return (l || t) && !s && 0 !== a.length
                ? (0, p.jsx)(ry.Dr, {
                      id: "message",
                      action: function () {
                          r0.A.openPrivateChannel({ recipientIds: a }).then((t) =>
                              t$.Ay.trackWithMetadata(x.HAw.ACTIVITY_FEED_DM_VISITED, {
                                  source: { ...r.location, object: x.ZSU.LIST_ITEM },
                                  channel_id: t,
                                  recipient_id: "string" == typeof a ? a : a[0],
                                  af_recently_played: !1,
                                  ...r2(e),
                              }),
                          );
                      },
                      label: j.intl.string(j.t["g33r/P"]),
                  })
                : null;
        })(r),
        o =
            ((t = m.useContext(eu.AnalyticsContext)),
            (n = r.voiceChannels[0]),
            (i = (0, f.bG)([rV.A], () => null != n && rV.A.can(x.xBc.CONNECT, n.channel))),
            null == n
                ? null
                : [
                      (0, p.jsx)(
                          ry.Dr,
                          {
                              id: "join-voice",
                              action: function () {
                                  (0, i4.iN)(n.channel.id),
                                      O.default.selectVoiceChannel(n.channel.id),
                                      t$.Ay.trackWithMetadata(x.HAw.ACTIVITY_FEED_VOICE_CHANNEL_VISITED, {
                                          source: { ...t.location, object: x.ZSU.LIST_ITEM },
                                          guild_id: n.guild.id,
                                          channel_id: n.channel.id,
                                          ...r2(r),
                                      });
                              },
                              label: j.intl.string(j.t["8yOlh9"]),
                              disabled: !i,
                          },
                          "join-voice",
                      ),
                      (0, p.jsx)(
                          ry.Dr,
                          {
                              id: "goto-server",
                              action: function () {
                                  (0, i8.u)(n.guild.id),
                                      t$.Ay.trackWithMetadata(x.HAw.ACTIVITY_FEED_GUILD_VISITED, {
                                          source: { ...t.location, object: x.ZSU.LIST_ITEM },
                                          guild_id: n.guild.id,
                                          af_recently_played: !1,
                                          ...r2(r),
                                      });
                              },
                              label: j.intl.string(j.t.RGgqm1),
                          },
                          "goto-server",
                      ),
                  ]),
        d = (function (e) {
            let { applicationStreams: t } = e;
            return t.map((e) => {
                let { stream: t, streamUser: n } = e;
                return (0, p.jsx)(
                    ry.Dr,
                    {
                        id: `spectate-${t.ownerId}`,
                        action: () => {
                            O.default.selectVoiceChannel(t.channelId), (0, ip.Nl)(t);
                        },
                        label: j.intl.formatToPlainString(j.t.m09d0T, { streamerName: ri.Ay.getName(n) }),
                    },
                    `spectate-${t.ownerId}`,
                );
            });
        })(r),
        c = (function (e) {
            let { currentActivities: t, isSpotifyActivity: n } = e,
                i = t[0],
                r = (function (e, t) {
                    let n = (0, f.bG)(
                        [r6.A, D.default],
                        () => (null != t ? (0, r3.A)(r6.A, D.default, t, e) : void 0),
                        [e, t],
                    );
                    if (null == n || null == e || null == t) return null;
                    let i = n.isCurrentUser || n.notPlayable || n.playingSameTrack,
                        r = n.isCurrentUser || n.syncingWithUser || n.syncingWithParty;
                    return [
                        (0, p.jsx)(
                            ry.Dr,
                            {
                                id: `spotify-play-${e.session_id}`,
                                action: () => (0, r8.A)(n, r7.Qp.USER_ACTIVITY_PLAY, void 0),
                                label: j.intl.string(j.t.rRffNz),
                                subtext: i ? (0, r5.A)(n, r7.Qp.USER_ACTIVITY_PLAY) : void 0,
                                disabled: i,
                            },
                            `spotify-play-${e.session_id}`,
                        ),
                        n.canPlaySpotify
                            ? (0, p.jsx)(
                                  ry.Dr,
                                  {
                                      id: `spotify-sync-${e.session_id}`,
                                      action: () => (0, r4.A)(n, r7.Qp.USER_ACTIVITY_SYNC, void 0),
                                      label: j.intl.string(j.t.eU3inB),
                                      subtext: r ? (0, r5.A)(n, r7.Qp.USER_ACTIVITY_SYNC) : void 0,
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
                            return (0, im.A)(t);
                        }),
                        i = (0, f.bG)([rw.A], () =>
                            rw.A.getAccounts().some((e) => e.type === iU.A.get(x.fg2.XBOX).type),
                        ),
                        r = t.filter((e) => {
                            let { activity: t } = e;
                            return (0, iC.A)(t);
                        }),
                        a = r.length > 0,
                        l = r.some((e) => {
                            let { activity: t } = e;
                            return (0, rD.Ay)(t);
                        });
                    return n || i || !a || l
                        ? null
                        : (0, p.jsx)(ry.Dr, {
                              id: "xbox-connect",
                              action: () => (0, e3.openUserSettings)(e5.X.CONNECTIONS_PANEL),
                              label: j.intl.formatToPlainString(j.t.XWSHTb, { platform: rz }),
                          });
                })(e),
                r = (function (e) {
                    let { currentActivities: t } = e,
                        n = m.useContext(eu.AnalyticsContext);
                    return (0, f.yK)([
                        iA.default,
                        rj.A,
                        i9.A,
                        rG.A,
                        rU.A,
                        eQ.A,
                        et.A,
                        rH.A,
                        rV.A,
                        rk.A,
                        rF.A,
                        rR.Ay,
                        rx.A,
                        rY.A,
                        rM.A,
                        eN.Ay,
                        rB.A,
                    ], () => {
                        let e = iA.default.getCurrentUser();
                        return t
                            .filter((e) => !(0, iI.A)(e.activity))
                            .map((t) => {
                                let { activity: i, game: r, activityUser: a } = t,
                                    l = rj.A.getActiveLibraryApplication(r.id);
                                return {
                                    ...t,
                                    libraryApplication: l,
                                    activityJoinability: (0, rP.A)({
                                        user: a,
                                        activity: i,
                                        application: r,
                                        channelId: null,
                                        currentUser: e,
                                        isEmbedded: !1,
                                        ChannelStore: i9.A,
                                        GuildStore: rG.A,
                                        GuildMemberCountStore: rU.A,
                                        RelationshipStore: eQ.A,
                                        SelectedChannelStore: et.A,
                                        VoiceStateStore: rH.A,
                                        PermissionStore: rV.A,
                                        LocalActivityStore: rk.A,
                                        SelfPresenceStore: rF.A,
                                        EmbeddedActivitiesStore: rR.Ay,
                                    }),
                                    canPlay: (0, r$.A)({
                                        LibraryApplicationStore: rj.A,
                                        LaunchableGameStore: rx.A,
                                        DispatchApplicationStore: rY.A,
                                        ConnectedAppsStore: rM.A,
                                        applicationId: r.id,
                                        branchId: null != l ? l.branchId : null,
                                    }),
                                    isJoining: rB.A.getState(r.id, x.xL.JOIN) === x.eAD.LOADING,
                                    isLaunching: rx.A.launchingGames.has(r.id),
                                    isRunning: eN.Ay.getRunningVerifiedApplicationIds().includes(r.id),
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
                            if (a === rP.o.JOINED)
                                return (0, p.jsx)(ry.Dr, {
                                    id: `joined-game-${n.session_id}`,
                                    label: j.intl.string(j.t.KC26NR),
                                    subtext: n.name,
                                    disabled: !0,
                                });
                            if (a === rP.o.CAN_JOIN)
                                return (0, p.jsx)(ry.Dr, {
                                    id: `join-game-${n.session_id}`,
                                    label: l ? j.intl.string(j.t.bf6Ci7) : j.intl.string(j.t.VJlc0S),
                                    subtext: n.name,
                                    disabled: l,
                                    action: () => {
                                        rv.Ay.join({
                                            userId: i.id,
                                            sessionId: n.session_id,
                                            applicationId: r.id,
                                            channelId: null,
                                            messageId: null,
                                            source: x.ThZ.USER_ACTIVITY_ACTIONS,
                                        });
                                    },
                                });
                            if ((0, rD._C)(n)) {
                                async function s() {
                                    if (null == n) return;
                                    let e = await rb.A.sendActivityInviteUser({
                                        type: x.xL.JOIN_REQUEST,
                                        userId: i.id,
                                        activity: n,
                                        location: x.ThZ.USER_ACTIVITY_ACTIONS,
                                    });
                                    null != e && O.default.selectPrivateChannel(e.id);
                                }
                                return (0, p.jsx)(ry.Dr, {
                                    id: `join-${n.session_id}`,
                                    label: t
                                        ? j.intl.formatToPlainString(j.t.wFAvxM, { name: i.toString() })
                                        : j.intl.string(j.t.OKsSCR),
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
                                ? j.intl.formatToPlainString(j.t["gBme/4"], { name: i.name })
                                : o
                                  ? j.intl.formatToPlainString(j.t.WtSQwG, { name: i.name })
                                  : void 0;
                            return (0, p.jsx)(ry.Dr, {
                                id: `play-${n.session_id}`,
                                action: function () {
                                    (0, rW.playApplication)(i.id, r, {
                                        analyticsParams: { location: { ...a, object: x.ZSU.LIST_ITEM } },
                                    });
                                },
                                label: t
                                    ? j.intl.formatToPlainString(j.t.ZDZEJN, { name: i.name })
                                    : j.intl.string(j.t.XKUw8m),
                                disabled: s || o,
                                subtext: d,
                            });
                        })(e, n),
                    );
            }
            return [...a, i];
        })(r),
        _ = (function (e) {
            let { priorityMembers: t, partiedMembers: n, currentActivities: i, guildContext: r } = e,
                a = new Set(
                    t.map((e) => {
                        let { user: t } = e;
                        return t.id;
                    }),
                ),
                l = n.filter((e) => !a.has(e.id)),
                { analyticsLocations: s } = (0, nJ.Ay)(),
                o = m.useMemo(() => {
                    let e = i
                        .flatMap((e) => {
                            let { playingMembers: t } = e;
                            return t;
                        })
                        .map((e) => e.id);
                    return n.filter((t) => !e.includes(t.id));
                }, [n, i]);
            if (i.length <= 1 && 0 === o.length)
                return (0, p.jsx)(ry.rX, {
                    label: n.length > 1 ? j.intl.formatToPlainString(j.t.C4WXvc, { memberCount: n.length }) : void 0,
                    children: rJ({
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
                    return (0, p.jsx)(
                        ry.rX,
                        {
                            label: `${l.name} - ${i.length}`,
                            children: rJ({
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
                (0, p.jsx)(ry.rX, {
                    label: `${j.intl.string(j.t["mIx+gG"])} - ${o.length}`,
                    children: rJ({
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
        (0, rO.Ay)(() => {
            let e = r.currentActivities
                .filter((e) => e.game?.name != null && (0, eu.isGameApplicationType)(e.game?.type))
                .map((e) => e.game.name);
            eu.default.track(x.HAw.OPEN_POPOUT, { type: "Now Playing Card Popout", games_detected: e });
        }),
        (0, p.jsxs)(rL.W, {
            "data-menu-migrated": !0,
            navId: "now-playing-menu",
            onClose: a,
            "aria-label": j.intl.string(j.t.ogxXGq),
            onSelect: l,
            children: [
                s,
                (0, p.jsxs)(ry.rX, { children: [o, d] }),
                (0, p.jsx)(ry.rX, { children: c }),
                (0, p.jsx)(ry.rX, { children: u }),
                _,
            ],
        })
    );
}
var ae = n(442433),
    at = n(707606),
    an = n(522986);
let ai = 15 * e_.A.Millis.MINUTE,
    ar =
        ((d = function (e) {
            let { party: t, onUserContextMenu: n, onChannelContextMenu: i, quest: r } = e,
                a = m.useRef(null),
                l = (0, p.jsx)(rS, { party: t, onUserContextMenu: n }),
                s = (0, p.jsx)(rf, { party: t, onChannelContextMenu: i, quest: r }),
                { partiedMembers: o, applicationStreams: d, currentActivities: c, voiceChannels: u } = t,
                _ = o.length,
                A = d.length,
                h = c.length,
                E = u.length > 0,
                I = m.useCallback(() => {
                    let e = c
                        .filter((e) => e.game?.name != null && (0, eu.isGameApplicationType)(e.game?.type))
                        .map((e) => e.game.name);
                    eu.default.track(x.HAw.NOW_PLAYING_CARD_HOVERED, {
                        num_users: _,
                        num_streams: A,
                        num_activities: h,
                        in_voice_channel: E,
                        games_detected: e,
                    });
                }, [_, A, h, E, c]),
                g = m.useMemo(() => n9()(I, ai), [I]);
            return null != l || null != s
                ? (0, p.jsx)(ie.Y, {
                      targetElementRef: a,
                      position: "left",
                      renderPopout: (e) => {
                          let { closePopout: n } = e;
                          return (0, p.jsx)(r9, { party: t, close: n });
                      },
                      spacing: 8,
                      children: (e, t) => {
                          let { isShown: n } = t;
                          return (0, p.jsx)(rg, {
                              ...e,
                              ref: a,
                              onMouseEnter: g,
                              "aria-haspopup": "menu",
                              className: an.MP,
                              active: n,
                              children: (0, p.jsxs)("div", { children: [l, s] }),
                          });
                      },
                  })
                : null;
        }),
        (0, at.A)(
            class extends m.Component {
                render() {
                    return (0, p.jsx)(d, {
                        ...this.props,
                        onMessageUser: this.handleMessageUser,
                        onUserContextMenu: this.handleUserContextMenu,
                        onGuildContextMenu: this.handleGuildContextMenu,
                        onChannelContextMenu: this.handleChannelContextMenu,
                    });
                }
                handleMessageUser(e, t) {
                    return r0.A.openPrivateChannel({ recipientIds: t.id });
                }
                handleUserContextMenu(e, t, i) {
                    (0, ae.L3)(
                        e,
                        async () => {
                            let { default: e } = await Promise.all([n.e("97262"), n.e("32418"), n.e("61657")]).then(
                                n.bind(n, 668569),
                            );
                            return (n) => (0, p.jsx)(e, { ...n, user: t });
                        },
                        { onClose: i },
                    );
                }
                handleGuildContextMenu(e, t) {
                    (0, ae.L3)(e, async () => {
                        let { default: e } = await Promise.all([
                            n.e("32292"),
                            n.e("49681"),
                            n.e("96382"),
                            n.e("20044"),
                            n.e("28367"),
                            n.e("45174"),
                            n.e("85519"),
                            n.e("11871"),
                            n.e("37266"),
                            n.e("55057"),
                            n.e("14976"),
                            n.e("63229"),
                            n.e("31988"),
                            n.e("55343"),
                            n.e("93103"),
                            n.e("88342"),
                            n.e("8555"),
                            n.e("40142"),
                            n.e("60161"),
                            n.e("98765"),
                            n.e("65437"),
                            n.e("34983"),
                            n.e("92414"),
                            n.e("95208"),
                            n.e("72401"),
                            n.e("47417"),
                            n.e("19558"),
                            n.e("58946"),
                            n.e("76390"),
                            n.e("93312"),
                            n.e("95752"),
                            n.e("87046"),
                            n.e("90161"),
                            n.e("31538"),
                            n.e("34828"),
                            n.e("99717"),
                            n.e("6698"),
                            n.e("98954"),
                            n.e("227"),
                            n.e("90184"),
                            n.e("62718"),
                            n.e("29594"),
                            n.e("52286"),
                            n.e("8018"),
                            n.e("7637"),
                            n.e("28136"),
                            n.e("3025"),
                            n.e("86674"),
                            n.e("4009"),
                            n.e("49862"),
                            n.e("80093"),
                            n.e("22547"),
                            n.e("60989"),
                            n.e("82486"),
                            n.e("77602"),
                            n.e("68587"),
                            n.e("86546"),
                            n.e("15373"),
                            n.e("42749"),
                            n.e("56026"),
                            n.e("16301"),
                            n.e("22191"),
                            n.e("46411"),
                            n.e("25961"),
                            n.e("44935"),
                            n.e("13848"),
                            n.e("62890"),
                            n.e("46291"),
                            n.e("41068"),
                            n.e("32347"),
                            n.e("8458"),
                            n.e("15666"),
                            n.e("11810"),
                            n.e("95765"),
                            n.e("31742"),
                            n.e("13337"),
                            n.e("65338"),
                            n.e("49036"),
                            n.e("49594"),
                        ]).then(n.bind(n, 860417));
                        return (n) => (0, p.jsx)(e, { ...n, guild: t });
                    });
                }
                handleChannelContextMenu(e, t) {
                    let i = rG.A.getGuild(t.getGuildId());
                    if (null == i) return null;
                    (0, ae.L3)(e, async () => {
                        let { default: e } = await n.e("67596").then(n.bind(n, 113255));
                        return (n) => (0, p.jsx)(e, { ...n, channel: t, guild: i });
                    });
                }
            },
        )),
    aa = eG().throttle(() => iu.u(), 3e5);
function al() {
    let {
            nowPlayingCards: e,
            loaded: t,
            needsRefresh: n,
            fetching: i,
            currentUser: r,
        } = (0, f.cf)([ih.A, i_.A, iA.default], () => ({
            nowPlayingCards: ih.A.nowPlayingCards,
            loaded: ih.A.loaded,
            needsRefresh: i_.A.shouldFetch(),
            fetching: i_.A.isFetching(),
            currentUser: iA.default.getCurrentUser(),
        })),
        a = (0, f.bG)([ii.A], () => ii.A.quests),
        l = (0, is.oH)(Array.from(a.values()));
    m.useEffect(
        () => (
            X.h.wait(() => iE.O()),
            () => {
                X.h.wait(() => iE.v());
            }
        ),
        [r?.id],
    ),
        m.useEffect(() => {
            n && !i && aa();
        }, [n, i]);
    let { use_api_call: s } = il.getConfig({ location: "NowPlaying" }),
        { questsByPartyId: o, questIdsByPartyId: d } = m.useMemo(() => {
            let t = new Map(),
                n = new Map(),
                i = new Set(),
                r = (0, ic.$e)(a, nN.B3);
            for (let a of e)
                a.party.currentActivities.forEach((e) => {
                    let { activity: l } = e;
                    if (null == l) return;
                    let s = (0, id.nq)(r, l);
                    null == s || i.has(s.id) || (t.set(a.party.id, s), i.add(s.id), n.set(a.party.id, s.id));
                });
            return { questsByPartyId: t, questIdsByPartyId: n };
        }, [e, a, l]),
        c = (0, f.bG)([ii.A], () => ii.A.earnedQuestForPlacement.get(ir.uF.ACTIVITY_PANEL), []),
        u = m.useRef([]),
        _ = m.useMemo(() => {
            let e = Array.from(d.values()),
                t = u.current;
            return t.length === e.length && e.every((e, n) => e === t[n]) ? t : ((u.current = e), e);
        }, [d]);
    m.useEffect(() => {
        s && 0 !== _.length && (0, it.yO)(_, ir.uF.ACTIVITY_PANEL, "NowPlaying");
    }, [_, s, c]);
    let A = m.useMemo(() => {
            if (!s) return o;
            if (null == c) return new Map();
            let e = new Map();
            for (let [t, n] of d.entries()) {
                let i = c.earnedDecisionByQuestId.get(n),
                    r = a.get(n);
                (0, io.Oh)(i) && i.shouldDeliver && null != r && e.set(t, r);
            }
            return e;
        }, [c, d, o, s, a]),
        h = null;
    return t
        ? (h =
              e.length > 0
                  ? e.map((e) => {
                        let { party: t } = e;
                        return (0, p.jsx)(ar, { party: t, quest: A.get(t.id) }, t.id);
                    })
                  : (0, p.jsxs)("div", {
                        className: an.aM,
                        children: [
                            (0, p.jsx)(nA.D, {
                                variant: "heading-md/semibold",
                                className: an.jU,
                                children: j.intl.string(j.t["ngJ/5u"]),
                            }),
                            (0, p.jsx)(n_.E, {
                                color: "none",
                                className: an.BI,
                                variant: "text-sm/normal",
                                children: j.intl.string(j.t["99ZWxQ"]),
                            }),
                        ],
                    }))
        : (0, p.jsx)("div", { className: an.aM, children: (0, p.jsx)(ts.y, {}) });
}
var as = n(678428);
function ao() {
    let { analyticsLocations: e } = (0, nJ.Ay)(eC.A.ACTIVE_NOW_COLUMN),
        t = (0, f.bG)([n8.A], () => n8.A.hasConsented(x.YAq.PERSONALIZATION)) ? [] : [nX.M.NOW_PLAYING_CONSENT_CARD],
        n = (0, nW.GV)();
    return (0, p.jsx)(nJ.f5, {
        value: e,
        children: (0, p.jsx)(nQ.A, {
            section: x.JJy.ACTIVE_NOW_COLUMN,
            children: (0, p.jsx)("aside", {
                className: ti()(as.kL, "refresh-active-now"),
                "aria-labelledby": n,
                children: (0, p.jsx)(nZ.Ip, {
                    className: as.XG,
                    children: (0, p.jsxs)("div", {
                        children: [
                            (0, p.jsx)(nA.D, {
                                variant: "heading-lg/semibold",
                                className: as.wx,
                                id: n,
                                children: j.intl.string(j.t.F4Zggw),
                            }),
                            (0, p.jsx)(n0.Ay, {
                                contentTypes: t,
                                children: (e) => {
                                    let { visibleContent: t, markAsDismissed: n } = e;
                                    if (t === nX.M.NOW_PLAYING_CONSENT_CARD)
                                        return (0, p.jsx)(n4, {
                                            className: as.__invalid_consentCard,
                                            markAsDismissed: n,
                                        });
                                },
                            }),
                            (0, p.jsx)(al, {}),
                        ],
                    }),
                }),
            }),
        }),
    });
}
var ad = n(210714),
    ac = n(363195),
    au = n(595623),
    a_ = n(573725),
    aA = n(49229),
    ah = n(953051),
    aE = n(395422),
    ap = n(650583),
    am = n(235351),
    aI = n(818050);
let ag = n(892799),
    aC = { canSend: !1, hint: null, success: null, error: null },
    af = (0, nW.Ld)(),
    aT = `${af}-decription`,
    aN = `${af}-error`;
function aS(e, t) {
    switch (t.type) {
        case "RESET":
            return aC;
        case "SUCCESS":
            return { ...aC, success: t.text };
        case "HINT":
            return { ...aC, canSend: !0, hint: t.text };
        case "ERROR":
            return { ...e, canSend: !0, error: t.text };
    }
}
function aL(e) {
    let { placeholder: t = j.intl.string(j.t["Rn/sLl"]) } = e,
        n = m.useRef(null),
        i = m.useRef(null),
        [r, a] = m.useReducer(aS, aC),
        { canSend: l, hint: s, error: o, success: d } = r;
    return (
        m.useEffect(() => {
            null != d &&
                (eM()(null != n.current, "Input is submitting when not mounted"),
                (n.current.value = ""),
                n.current.focus());
        }, [d, n]),
        (0, p.jsxs)("form", {
            onSubmit: (e) => {
                e.preventDefault(), eM()(null != n.current, "Input is submitted when not mounted");
                let t = n.current.value.trim();
                !t.includes("#") && t.startsWith("@") && (t = t.substring(1));
                let i = (0, aE.Ty)(t);
                null != i
                    ? a({ type: "ERROR", text: i })
                    : aA.A.sendRequest({ discordTag: t, context: { location: "Add Friend" } }).then(
                          () => a({ type: "SUCCESS", text: j.intl.format(j.t.Rtl1Ep, { discordTag: t }) }),
                          (e) => a({ type: "ERROR", text: (0, aE.vU)(e.body?.code, t) }),
                      );
            },
            autoComplete: "off",
            children: [
                (0, p.jsxs)("div", {
                    className: am.QR,
                    children: [
                        (0, p.jsx)(n_.E, {
                            tag: "div",
                            variant: "heading-md/normal",
                            children: j.intl.string(j.t["Rn/sLl"]),
                        }),
                        (0, p.jsx)("img", { src: ag, alt: "Wumpus Waving" }),
                    ],
                }),
                (0, p.jsx)(ix.vN, {
                    focusTarget: n,
                    ringTarget: i,
                    ringClassName: am.hN,
                    children: (0, p.jsxs)("div", {
                        ref: i,
                        className: ti()(am.fc, { [am.kX]: d, [am.z3]: o }),
                        children: [
                            (0, p.jsx)(a_.p, {
                                id: af,
                                inputRef: n,
                                className: am.QP,
                                inputClassName: am.hF,
                                onKeyPress: (e) => {
                                    let t = e.currentTarget.value;
                                    if (e.key !== ap.N$.Enter && t.includes("#")) {
                                        eM()(null != n.current, "Input is handling keypress when not mounted");
                                        let i = t.indexOf("#"),
                                            r = n.current.selectionStart,
                                            a =
                                                e.key === ap.N$.Backspace ||
                                                e.key === ap.N$.ArrowRight ||
                                                e.key === ap.N$.ArrowLeft,
                                            l = (0, ah.A)(e.key);
                                        null != r && r > i && /^(.+?#\d{4})$/.test(t) && !a
                                            ? e.preventDefault()
                                            : null == r || !(r > i) || l || a || e.preventDefault();
                                    }
                                },
                                onChange: (e) => {
                                    if (e.length <= 0) return void a({ type: "RESET" });
                                    let t = "",
                                        [, n] = e.split("#");
                                    null != n && (t = e + x.RoK.slice(null != n ? n.length + 1 : 0)),
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
                                "aria-describedby": null != o ? aN : aT,
                            }),
                            null != s && (0, p.jsx)("div", { className: am.dQ, "aria-hidden": !0, children: s }),
                            (0, p.jsx)(n1.$, {
                                variant: "primary",
                                size: "sm",
                                text: j.intl.string(j.t["PMsq/b"]),
                                disabled: !l,
                                type: "submit",
                            }),
                        ],
                    }),
                }),
                null != o &&
                    (0, p.jsx)("div", {
                        role: "alert",
                        children: (0, p.jsx)(n_.E, {
                            id: aN,
                            variant: "text-sm/normal",
                            className: aI.Ot,
                            color: "text-feedback-critical",
                            children: o,
                        }),
                    }),
                null != d &&
                    (0, p.jsx)("div", {
                        role: "status",
                        children: (0, p.jsx)(n_.E, {
                            variant: "text-sm/normal",
                            className: aI.Ot,
                            color: "text-feedback-positive",
                            children: d,
                        }),
                    }),
            ],
        })
    );
}
var ay = n(836480),
    aO = n(976860);
function ab(e) {
    let { color: t = "currentColor", ...n } = e;
    return (0, p.jsx)("svg", {
        ...n,
        fill: "none",
        height: "20",
        viewBox: "0 0 20 20",
        width: "20",
        xmlns: "http://www.w3.org/2000/svg",
        children: (0, p.jsx)("path", {
            clipRule: "evenodd",
            d: "m5.41667 4.2625 5.66573 5.7375-5.66573 5.7375 1.74426 1.7625 7.42237-7.5-7.42237-7.5z",
            fill: t,
            fillRule: "evenodd",
        }),
    });
}
var av = n(505973);
function aR() {
    var e, t, n;
    return (0, p.jsxs)(m.Fragment, {
        children: [
            (0, p.jsxs)("header", {
                className: av.wx,
                children: [
                    (0, p.jsx)(nA.D, {
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children: j.intl.string(j.t.IuMx1Y),
                    }),
                    (0, p.jsx)(n_.E, { tag: "div", variant: "heading-md/normal", children: j.intl.string(j.t.DwevPs) }),
                ],
            }),
            (0, p.jsx)("div", {
                className: av.Vg,
                children:
                    ((e = ay.Q),
                    (t = j.intl.string(j.t.AhKnz4)),
                    (n = () => {
                        eu.default.track(x.HAw.ADD_FRIEND_OTHER_PLACES_DISCOVERY_CLICKED),
                            (0, aO.pX)(x.BVt.GUILD_DISCOVERY);
                    }),
                    (0, p.jsxs)(
                        "button",
                        {
                            className: av.kL,
                            onClick: n,
                            children: [
                                "function" == typeof e
                                    ? (0, p.jsx)("div", {
                                          className: av.Kk,
                                          children: (0, p.jsx)(e, {
                                              className: av.__invalid_iconInner,
                                              color: tM.A.colors.WHITE.css,
                                          }),
                                      })
                                    : (0, p.jsx)("img", { className: av.Kk, alt: "", src: e }),
                                (0, p.jsx)(n_.E, { className: av.Qq, variant: "text-md/medium", children: t }),
                                (0, p.jsx)(ab, { className: av.UE }),
                            ],
                        },
                        t,
                    )),
            }),
        ],
    });
}
var aP = n(739175);
function aD() {
    return (0, p.jsxs)("header", {
        className: aP.wx,
        children: [
            (0, p.jsx)(nA.D, { variant: "heading-lg/semibold", className: aP.DD, children: j.intl.string(j.t.w5uwoI) }),
            (0, p.jsx)(aL, {}),
        ],
    });
}
let ax = function () {
    return (0, p.jsxs)(m.Fragment, { children: [(0, p.jsx)(aD, {}), (0, p.jsx)(aR, {})] });
};
var aw = n(123292),
    aM = n(900797),
    aU = n(847374),
    aG = n(892547),
    aj = n(70730),
    ak = n(45787),
    aV = n(275759);
let aF = (0, ia.mj)({
    kind: "user",
    name: "2026-03-post-friend-accept-cta",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var aH = n(534890),
    aB = n(530005),
    aY = n(157559),
    a$ = n(3203),
    aW = n(408278),
    az = n(597770),
    aK = n(414711),
    aq = n(397244),
    aX = n(714114),
    aZ = n(729551),
    aQ = n(501859);
let aJ = function (e) {
    let { hovered: t, activities: n, applicationStream: i, status: r, user: a, userIgnored: l } = e,
        { voiceChannel: s } = (0, aX.A)({ userId: a?.id });
    return l
        ? (0, p.jsx)("div", { className: aQ.Q, children: j.intl.string(j.t.tFY5Zb) })
        : (0, aq.A)({ activities: n, status: r, applicationStream: i, voiceChannel: s })
          ? (0, p.jsx)(aZ.A, {
                textClassName: aQ.q,
                activities: n,
                applicationStream: i,
                voiceChannel: s,
                animateEmoji: t,
                user: a,
                textSize: "sm",
            })
          : (0, p.jsx)("div", { className: aQ.Q, children: (0, ri.MU)(r) });
};
var a0 = n(723690),
    a1 = n(751188);
n(646363);
var a2 = n(728552);
function a6(e) {
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
            onClick: _,
            recipientUser: A,
            analyticsLocations: h,
            giftIntentType: E,
        } = e,
        { analyticsLocations: I } = (0, nJ.Ay)(eC.A.PREMIUM_GIFT_INTENT_FRIEND_ROW),
        { Component: g } = (0, a$.V)(),
        C = (0, f.bG)([aV.Ay], () => aV.Ay.getFriendAnniversaryYears(A.id)),
        { openGiftModal: N } = (0, a1.$)({
            giftRecipient: A,
            analyticsLocations: I,
            analyticsLocation: x.ThZ.FRIEND_ANNIVERSARIES_ACTION_BUTTON,
            analyticsObject: {
                page: x.liQ.FRIENDS_LIST,
                section: x.JJy.FRIENDS_LIST_FRIEND_ROW,
                object: x.ZSU.BUTTON_CTA,
                objectType: x.AnalyticsObjectTypes.GIFT,
            },
            location: "gift-intent-friend-row",
        });
    m.useEffect(() => {
        let e = i_.A.getUserAffinity(A.id);
        (0, iB.x)({
            name: tr.ImpressionNames.GIFT_INTENT_ACTION_BUTTON,
            type: tr.ImpressionTypes.VIEW,
            properties: { gift_intent_type: E, affinity: e?.communicationProbability },
        });
    }, [A, E]);
    let S = (e) => {
        e.stopPropagation();
        let t = i_.A.getUserAffinity(A.id);
        eu.default.track(x.HAw.GIFT_INTENT_ACTION_BUTTON_CLICKED, {
            gift_intent_type: E,
            affinity: t?.dmProbability,
            location_stack: I,
        }),
            N();
    };
    return (0, p.jsx)(aK.A, {
        ref: t,
        isFocused: i,
        isActive: r,
        user: A,
        analyticsLocations: h,
        onOtherHover: u,
        onClick: _,
        height: 72,
        children: (e) =>
            (0, p.jsxs)("div", {
                className: ti()(a2.a4, a2.Z$),
                children: [
                    (0, p.jsx)(a0.A, {
                        className: a2.Cv,
                        user: A,
                        status: a,
                        isMobile: d,
                        isVR: c,
                        subText: (0, p.jsxs)(p.Fragment, {
                            children: [
                                (0, p.jsx)(aJ, {
                                    hovered: e,
                                    activities: l,
                                    applicationStream: s,
                                    status: a,
                                    user: A,
                                    userIgnored: eQ.A.isIgnored(A.id),
                                }),
                                (0, p.jsxs)("div", {
                                    className: a2.K3,
                                    children: [
                                        (0, p.jsx)(nH.$, { size: "xxs", color: "currentColor" }),
                                        (0, p.jsx)(n_.E, {
                                            variant: "text-xs/normal",
                                            color: "text-subtle",
                                            children: j.intl.formatToPlainString(j.t.S3fdq7, { numberOfYears: C }),
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        hovered: e,
                        showAccountIdentifier: !o && !A.isProvisional,
                    }),
                    (0, p.jsxs)("div", {
                        className: a2.o1,
                        children: [
                            (0, p.jsx)(aW.K, {
                                size: "sm",
                                variant: "secondary",
                                icon: g,
                                "aria-label": j.intl.string(j.t.I61IsE),
                                onClick: () => {
                                    eu.default.track(x.HAw.GIFT_INTENT_CARD_SECONDARY_CTA_CLICKED, {
                                        gift_intent_type: E,
                                        cta_type: "send_message",
                                        location_stack: I,
                                    }),
                                        (0, ak.xs)(A.id),
                                        (0, T.openModalLazy)(async () => {
                                            let { default: e } = await n.e("17882").then(n.bind(n, 367516));
                                            return (t) =>
                                                (0, p.jsx)(e, {
                                                    ...t,
                                                    giftIntentType: E ?? void 0,
                                                    analyticsLocationHistory: I,
                                                });
                                        });
                                },
                            }),
                            (0, p.jsx)(n1.$, {
                                size: "sm",
                                text: j.intl.string(j.t.PEjaCx),
                                icon: az.o,
                                "aria-label": j.intl.string(j.t.PEjaCx),
                                onClick: S,
                            }),
                        ],
                    }),
                ],
            }),
    });
}
var a5 = n(22212),
    a3 = n(430159),
    a4 = n(513297),
    a8 = n(788868);
function a7(e) {
    let { user: t, applicationId: n, isGameRelationship: i, onSelect: r } = e,
        a = m.useCallback(() => {
            (0, a5.X9)({ targetUserId: t.id, tab: au.Ay.getState().section }),
                r0.A.openPrivateChannel({ recipientIds: t.id, joinCall: !0 });
        }, [t.id]),
        l = m.useCallback(() => {
            (0, a5.Cf)({ targetUserId: t.id, tab: au.Ay.getState().section }),
                r0.A.openPrivateChannel({ recipientIds: t.id, joinCall: !0, joinCallVideo: !0 });
        }, [t.id]),
        s = m.useCallback(() => {
            a3.A.removeFriend({ userId: t.id, applicationId: i ? n : null, location: "Friends" });
        }, [n, i, t.id]),
        o = m.useCallback(() => {
            let e = i ? j.intl.string(j.t.RLcE6x) : j.intl.string(j.t.cvSt1J);
            (0, a5.lP)({ targetUserId: t.id, tab: au.Ay.getState().section }),
                aY.A.show({
                    title: j.intl.formatToPlainString(j.t.fPLvZd, { name: ri.Ay.getName(t) }),
                    body: j.intl.formatToPlainString(j.t.l5FFq6, { name: ri.Ay.getName(t) }),
                    confirmText: e,
                    confirmVariant: "critical-primary",
                    cancelText: j.intl.string(j.t["ETE/oC"]),
                    onConfirm: s,
                });
        }, [s, i, t]),
        d = (0, f.bG)([eL.Ay], () => eL.Ay.supports(eO.O5.VIDEO)),
        c = t.isProvisional,
        u = i ? j.intl.string(j.t.RLcE6x) : j.intl.string(j.t.cvSt1J);
    return (0, p.jsxs)(rL.W, {
        "data-menu-migrated-auto": !0,
        navId: "friend-row",
        "aria-label": j.intl.string(j.t.liqwPJ),
        onClose: ae.Z_,
        onSelect: r,
        children: [
            !c && d ? (0, p.jsx)(ry.Dr, { id: "start-video-call", label: j.intl.string(j.t.oCqlGG), action: l }) : null,
            !c && (0, p.jsx)(ry.Dr, { id: "start-voice-call", label: j.intl.string(j.t.focH1t), action: a }),
            (0, p.jsx)(ry.Dr, { id: "remove-friend", label: u, action: o, color: "danger" }),
        ],
    });
}
class a9 extends m.PureComponent {
    peopleListItemRef = m.createRef();
    state = { isActiveRow: !1 };
    componentWillLeave(e) {
        null != this.peopleListItemRef.current && this.peopleListItemRef.current.componentWillLeave(e);
    }
    componentWillEnter(e) {
        null != this.peopleListItemRef.current && this.peopleListItemRef.current.componentWillEnter(e);
    }
    openPrivateChannel = () => {
        let { user: e } = this.props,
            t = eG().find(i9.A.getMutablePrivateChannels(), (t) => t.type === x.rbe.DM && t.getRecipientId() === e.id);
        null != t ? (0, aO.pX)(x.BVt.CHANNEL(x.ME, t.id)) : r0.A.openPrivateChannel({ recipientIds: e.id });
    };
    handleRowClick = (e) => {
        e.stopPropagation(),
            (0, a5.xF)({ targetUserId: this.props.user.id, tab: au.Ay.getState().section }),
            this.openPrivateChannel();
    };
    handleMessageClick = (e) => {
        e.stopPropagation(),
            (0, a5.WD)({ targetUserId: this.props.user.id, tab: au.Ay.getState().section }),
            this.openPrivateChannel();
    };
    handleOpenActionsMenu = (e) => {
        let { user: t, isGameRelationship: n, applicationId: i } = this.props;
        (0, ae.jA)(e, (e) => (0, p.jsx)(a7, { ...e, user: t, applicationId: i, isGameRelationship: n }), {
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
            { isActiveRow: _ } = this.state;
        return (0, aj.p)(eC.A.FRIENDS_LIST) && d === a8.np.FRIEND_ANNIVERSARY && c && 0 === u
            ? (0, p.jsx)(a6, {
                  ref: this.peopleListItemRef,
                  isFocused: t,
                  isActive: _,
                  recipientUser: e,
                  analyticsLocations: n,
                  onOtherHover: () => (_ ? null : (0, ae.Z_)()),
                  onClick: this.handleRowClick,
                  giftIntentType: d,
                  status: a,
                  activities: i,
                  applicationStream: r,
                  isMobile: l,
                  isVR: s,
                  isGameRelationship: o,
              })
            : (0, p.jsx)(aK.A, {
                  ref: this.peopleListItemRef,
                  isFocused: t,
                  isActive: _,
                  user: e,
                  analyticsLocations: n,
                  onOtherHover: () => (_ ? null : (0, ae.Z_)()),
                  onClick: this.handleRowClick,
                  children: (t) =>
                      (0, p.jsxs)("div", {
                          className: a2.a4,
                          children: [
                              (0, p.jsx)(a0.A, {
                                  user: e,
                                  status: a,
                                  isMobile: l,
                                  isVR: s,
                                  subText: (0, p.jsx)(aJ, {
                                      hovered: t,
                                      activities: i,
                                      applicationStream: r,
                                      status: a,
                                      user: e,
                                      userIgnored: eQ.A.isIgnored(e.id),
                                  }),
                                  hovered: t,
                                  showAccountIdentifier: !o && !e.isProvisional,
                              }),
                              (0, p.jsxs)("div", {
                                  className: a2.o1,
                                  children: [
                                      (0, p.jsx)(a4.A, {
                                          icon: aH.o,
                                          tooltip: j.intl.string(j.t["g33r/P"]),
                                          onClick: this.handleMessageClick,
                                          shouldHighlight: t,
                                      }),
                                      (0, p.jsx)(a4.A, {
                                          icon: aB.F,
                                          tooltip: j.intl.string(j.t["UKOtz+"]),
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
var le = n(615300),
    lt = n(396478),
    ln = n(34275),
    li = (((c = {}).SECTION_NO_RESULTS = "SECTION_NO_RESULTS"), c);
let lr = Object.freeze({
        SECTION_ALL: {
            lightSrc: n(445451),
            darkSrc: n(642269),
            width: 376,
            height: 162,
            renderContent: (e) =>
                (0, p.jsxs)(m.Fragment, {
                    children: [
                        (0, p.jsx)(lt.SG, { note: j.intl.string(j.t.Y4vMY8) }),
                        (0, p.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: ln.x6,
                            children: (0, p.jsx)(n1.$, {
                                variant: "primary",
                                text: j.intl.string(j.t.w5uwoI),
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
            renderContent: () => (0, p.jsx)(lt.SG, { note: j.intl.string(j.t.v7HbiQ) }),
        },
        SECTION_BLOCKED: {
            lightSrc: n(751906),
            darkSrc: n(689818),
            width: 433,
            height: 232,
            renderContent: () => (0, p.jsx)(lt.SG, { note: j.intl.string(j.t["9xdyWB"]) }),
        },
        SECTION_PENDING: {
            lightSrc: n(826223),
            darkSrc: n(317017),
            width: 415,
            height: 200,
            renderContent: (e, t) =>
                (0, p.jsxs)("div", {
                    className: ln.y7,
                    children: [
                        (0, p.jsx)(lt.SG, { note: j.intl.string(j.t["aCYQ+P"]) }),
                        null != e &&
                            (0, p.jsx)(n1.$, {
                                variant: "secondary",
                                text: t ? j.intl.string(j.t.R40bU2) : j.intl.string(j.t.rXl8fj),
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
            renderContent: () => (0, p.jsx)(lt.SG, { note: j.intl.string(j.t["vgI/EF"]) }),
        },
        SECTION_NO_RESULTS: {
            lightSrc: n(939333),
            darkSrc: n(492055),
            width: 421,
            height: 218,
            renderContent: () => (0, p.jsx)(lt.SG, { note: j.intl.string(j.t["7sW4h1"]) }),
        },
    }),
    la = (e) => {
        let { theme: t } = e,
            n = j.intl.string(j.t["oi+B4p"]);
        return (0, p.jsx)(lt.pp, { theme: t, children: (0, p.jsx)(lt.SG, { note: n }) });
    };
class ll extends m.PureComponent {
    state = { opacity: new le.A.Value(1) };
    componentWillEnter = (e) => {
        this.state.opacity.setValue(0), le.A.timing(this.state.opacity, { toValue: 1, duration: 250 }).start(e);
    };
    componentWillLeave = (e) => {
        le.A.timing(this.state.opacity, { toValue: 0, duration: 250 }).start(e);
    };
    render() {
        let { type: e, onClick: t, theme: n } = this.props,
            i = { opacity: this.state.opacity },
            r = (function (e) {
                switch (e) {
                    case x.m3P.ADD_FRIEND:
                    case x.m3P.ALL:
                        return lr.SECTION_ALL;
                    case x.m3P.ONLINE:
                        return lr.SECTION_ONLINE;
                    case x.m3P.PENDING:
                        return lr.SECTION_PENDING;
                    case x.m3P.SUGGESTIONS:
                        return lr.SECTION_SUGGESTIONS;
                    case "SECTION_NO_RESULTS":
                        return lr.SECTION_NO_RESULTS;
                    default:
                        throw Error("FriendsEmptyState: Invalid empty state");
                }
            })(e);
        return e === x.m3P.ADD_FRIEND
            ? (0, p.jsx)(le.A.div, { className: ln.VD, style: i, children: (0, p.jsx)(la, { theme: n }) })
            : (0, p.jsx)(le.A.div, {
                  className: ln.VD,
                  style: i,
                  children: (0, p.jsx)(lt.pp, { theme: n, children: r.renderContent(t) }),
              });
    }
}
let ls = f.Ay.connectStores([ac.A], () => ({ theme: ac.A.theme }), { forwardRef: !0 })(ll);
var lo = n(933832),
    ld = n(789645),
    lc = n(478016),
    lu = n(640708),
    l_ = n(390848),
    lA = n(525075);
function lh(e) {
    let { user: t, applicationId: n, isGameRelationship: i, active: r, onAcceptFriendRequest: a } = e,
        [l, s] = m.useState(!1),
        o = iA.default.getCurrentUser()?.isStaff() && t?.isStaff(),
        { acceptFriendRequest: d, cancelFriendRequest: c } = (0, l_.I)({
            userId: t.id,
            applicationId: n,
            isGameRelationship: i,
            location: "Friends",
            onFinally: () => {
                s(!1);
            },
        }),
        u = m.useCallback(
            (e) => {
                s(!0), e.stopPropagation(), a(), d();
            },
            [d, a],
        ),
        _ = m.useCallback(
            (e) => {
                e.stopPropagation(), c();
            },
            [c],
        );
    return (0, p.jsxs)(p.Fragment, {
        children: [
            o &&
                (0, p.jsx)("div", {
                    className: lA.ou,
                    children: (0, p.jsx)(nF.Lp, {
                        color: tM.A.unsafe_rawColors.BRAND_500.css,
                        text: j.intl.string(j.t.oMx98L),
                    }),
                }),
            (0, p.jsx)(a4.A, {
                icon: lo.A,
                actionType: a4.A.ActionTypes.ACCEPT,
                tooltip: j.intl.string(j.t.Zcibdf),
                onClick: u,
                shouldHighlight: r,
                loading: l,
            }),
            (0, p.jsx)(a4.A, {
                icon: ld.P,
                actionType: a4.A.ActionTypes.DENY,
                tooltip: j.intl.string(j.t.xuio0C),
                onClick: _,
                shouldHighlight: r,
            }),
        ],
    });
}
function lE(e) {
    let { userId: t, applicationId: n, isGameRelationship: i, active: r } = e,
        { cancelFriendRequest: a } = (0, l_.I)({
            userId: t,
            applicationId: n,
            isGameRelationship: i,
            location: "Friends",
        }),
        l = m.useCallback(
            (e) => {
                e.stopPropagation(), a();
            },
            [a],
        );
    return (0, p.jsx)(a4.A, {
        icon: ld.P,
        actionType: a4.A.ActionTypes.DENY,
        tooltip: j.intl.string(j.t.eaq81S),
        onClick: l,
        shouldHighlight: r,
    });
}
function lp(e) {
    let { isGameRelationship: t, applicationId: n, userTag: i, isProvisional: r } = e,
        a = m.useMemo(() => (t ? j.intl.string(j.t["Uv/eTx"]) : i), [t, i]),
        l = (0, f.bG)([iW.A], () => (null != n ? iW.A.getApplication(n) : null));
    return (0, p.jsxs)("div", {
        className: lA.P9,
        children: [
            !r && (0, p.jsx)(n_.E, { variant: "text-sm/medium", color: "text-subtle", children: a }),
            null != l &&
                (0, p.jsxs)(p.Fragment, {
                    children: [
                        !r && (0, p.jsx)(lu.A, { height: 2, width: 2 }),
                        (0, p.jsx)(i0.A, { game: l, size: i0.M.XXSMALL }),
                        (0, p.jsx)(n_.E, { variant: "text-sm/medium", color: "text-subtle", children: l.name }),
                    ],
                }),
        ],
    });
}
function lm(e) {
    let { user: t, hovered: n, status: i, isGameRelationship: r, applicationId: a, isFriend: l } = e,
        s = ri.Ay.useUserTag(t);
    return (0, p.jsx)(a0.A, {
        user: t,
        hovered: n,
        status: i,
        showAccountIdentifier: !1,
        subText: l
            ? (0, p.jsxs)("div", {
                  className: lA.Tl,
                  children: [
                      (0, p.jsx)(lc.U, { size: "sm", color: tM.A.colors.ICON_FEEDBACK_POSITIVE }),
                      (0, p.jsx)(n_.E, {
                          variant: "text-sm/medium",
                          color: "text-muted",
                          children: j.intl.string(j.t.bgL68y),
                      }),
                  ],
              })
            : (0, p.jsx)(lp, { isGameRelationship: r, isProvisional: t.isProvisional, applicationId: a, userTag: s }),
    });
}
function lI(e) {
    let {
            user: t,
            type: n,
            status: i,
            isFocused: r,
            applicationId: a,
            isGameRelationship: l,
            onAcceptFriendRequest: s,
        } = e,
        { analyticsLocations: o } = (0, nJ.Ay)(),
        d = i === x.clD.OFFLINE ? x.clD.UNKNOWN : i,
        c = (0, f.bG)([eQ.A], () => eQ.A.getRelationshipType(t.id)),
        u = m.useCallback(() => (0, rK.openUserProfileModal)({ userId: t.id, sourceAnalyticsLocations: o }), [o, t.id]),
        _ = (e) => {
            e.stopPropagation(),
                eu.default.track(x.HAw.FRIEND_REQUEST_ACCEPT_MESSAGE_CLICKED),
                r0.A.openPrivateChannel({ recipientIds: [t.id] });
        };
    return [x.eA$.PENDING_INCOMING, x.eA$.PENDING_OUTGOING, x.eA$.FRIEND].includes(c)
        ? (0, p.jsx)(aK.A, {
              isFocused: r,
              user: t,
              analyticsLocations: o,
              onClick: u,
              children: (e) =>
                  (0, p.jsxs)("div", {
                      className: lA.a4,
                      children: [
                          (0, p.jsx)(lm, {
                              user: t,
                              hovered: e,
                              status: d,
                              isGameRelationship: l,
                              applicationId: a,
                              isFriend: c === x.eA$.FRIEND,
                          }),
                          (0, p.jsx)("div", {
                              className: lA.o1,
                              children:
                                  c === x.eA$.FRIEND
                                      ? (0, p.jsx)(n1.$, {
                                            text: "Message",
                                            variant: "secondary",
                                            icon: aH.o,
                                            onClick: _,
                                        })
                                      : n === x.eA$.PENDING_INCOMING
                                        ? (0, p.jsx)(lh, {
                                              user: t,
                                              applicationId: a,
                                              isGameRelationship: l,
                                              active: e,
                                              onAcceptFriendRequest: s,
                                          })
                                        : (0, p.jsx)(lE, {
                                              userId: t.id,
                                              applicationId: a,
                                              isGameRelationship: l,
                                              active: e,
                                          }),
                          }),
                      ],
                  }),
          })
        : null;
}
var lg = n(887129),
    lC = n(837381),
    lf = n(475825),
    lT = n(795733);
let lN = function (e) {
    let { rows: t, renderRow: n, renderSection: i, footer: r, sectionFilter: a, renderSectionFooter: l } = e,
        s = (e) => {
            let { section: i, row: r } = e,
                a = t[i];
            if (null == a || null == r) return null;
            let l = a[r];
            return null == l ? null : n(l, i);
        },
        o = m.useCallback(
            (e, n) => {
                let i = t[e]?.[n];
                return a === x.m3P.ALL && i?.giftIntentType === a8.np.FRIEND_ANNIVERSARY && 0 === e ? 72 : 61;
            },
            [t, a],
        ),
        d = m.useCallback(
            (e) => {
                let { section: t } = e;
                return i(t);
            },
            [i],
        ),
        c = m.useCallback((e) => (null == l ? null : l(e.section)), [l]),
        u = m.useCallback((e) => (null == l ? 0 : 48 * (null != l(e))), [l]),
        _ = (0, f.bG)([B.A], () => B.A.keyboardModeEnabled),
        A = m.useRef(null),
        h = m.useCallback(
            () =>
                new Promise((e) => {
                    let t = A.current;
                    if (null == t) return e();
                    t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            [],
        ),
        E = m.useCallback(
            () =>
                new Promise((e) => {
                    let t = A.current;
                    if (null == t) return e();
                    t.scrollToBottom({ callback: () => requestAnimationFrame(() => e()) });
                }),
            [],
        ),
        I = m.useCallback((e) => {
            let t = document.querySelector(e),
                n = A.current;
            null != t && null != n && n.scrollIntoViewNode({ node: t, padding: 8, callback: () => t?.focus() });
        }, []),
        g = (0, lg.Ay)({ id: "people-list", isEnabled: _, scrollToStart: h, scrollToEnd: E, setFocus: I }),
        C = m.useMemo(() => t.map((e) => e.length), [t]);
    return (0, p.jsx)(lC.hD, {
        navigator: g,
        children: (0, p.jsx)(lC.PR, {
            children: (e) => {
                let { ref: t, ...n } = e;
                return (0, p.jsxs)(p.Fragment, {
                    children: [
                        (0, p.jsx)(lf.Ei, {
                            ref: (e) => {
                                (A.current = e), (t.current = e?.getScrollerNode() ?? null);
                            },
                            renderRow: s,
                            rowHeight: o,
                            renderSection: d,
                            sectionHeight: 50,
                            renderFooter: c,
                            footerHeight: u,
                            sections: C,
                            className: lT.e3,
                            ...n,
                        }),
                        r,
                    ],
                });
            },
        }),
    });
};
var lS = n(73939);
let lL = function (e) {
    let {
            rows: t,
            renderRow: n,
            renderSection: i,
            hasSearchQuery: r,
            sectionFilter: a,
            footer: l,
            renderSectionFooter: s,
        } = e,
        o = (0, f.bG)([B.A], () => B.A.keyboardModeEnabled),
        d = (0, f.bG)([B.A], () => B.A.useReducedMotion),
        c = (0, lg.Ay)({ id: "people", isEnabled: o, async scrollToStart() {}, async scrollToEnd() {} }),
        u = a !== x.m3P.ONLINE && a !== x.m3P.ALL,
        _ = d || r || u,
        A = m.useMemo(
            () =>
                t.map((e, t) =>
                    0 === e.length
                        ? null
                        : _
                          ? (0, p.jsxs)("div", { children: [i(t), e.map((e) => n(e, t)), s?.(t)] }, t)
                          : (0, p.jsxs)(
                                lS.F,
                                {
                                    transitionAppear: !1,
                                    component: "div",
                                    children: [i(t), e.map((e) => n(e, t)), s?.(t)],
                                },
                                t,
                            ),
                ),
            [n, i, s, t, _],
        );
    return (0, p.jsx)(lC.hD, {
        navigator: c,
        children: (0, p.jsx)(lC.PR, {
            children: (e) => {
                let { ref: t, ...n } = e;
                return (0, p.jsxs)(nZ.Ar, { ref: t, className: lT.e3, ...n, children: [A, l] });
            },
        }),
    });
};
function ly(e) {
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
        ? (0, p.jsx)(lN, {
              rows: t,
              renderRow: n,
              renderSection: i,
              footer: s,
              sectionFilter: l,
              renderSectionFooter: o,
          })
        : (0, p.jsx)(lL, {
              rows: t,
              renderRow: n,
              renderSection: i,
              sectionFilter: l,
              hasSearchQuery: a,
              footer: s,
              renderSectionFooter: o,
          });
}
var lO = n(866945),
    lb = n(613755);
function lv() {
    let [e, t] = (0, tf.kn)([nX.M.RESTRICTED_ACCOUNTS_SETTING_NOTICE]);
    return m.useMemo(() => e === nX.M.RESTRICTED_ACCOUNTS_SETTING_NOTICE, [e])
        ? (0, p.jsx)(lO.e, {
              label: j.t.zqv4nV,
              labelHook: () => {
                  (0, e3.openUserSettings)(e5.X.CONTENT_AND_SOCIAL_RESTRICTED_USERS_CATEGORY);
              },
              dismissNotice: () => t(tN.i.USER_DISMISS),
              className: lb._,
              noticeType: es.YA.RESTRICTED_ACCOUNTS_SETTING_NOTICE,
          })
        : null;
}
var lR = n(485947),
    lP = n(490277);
function lD(e) {
    let { title: t, id: n } = e;
    return (0, p.jsx)(lR.A, { className: lP.D, id: n, children: t });
}
var lx = n(38910),
    lw = n(648356);
function lM(e) {
    let { user: t, nickname: n, status: i, isFocused: r } = e,
        { analyticsLocations: a } = (0, nJ.Ay)(),
        l = (e) => {
            e?.stopPropagation(),
                aA.A.addRelationship({
                    userId: t.id,
                    context: { location: "Friends" },
                    type: void 0,
                    fromFriendSuggestion: !0,
                });
        },
        s = (e) => {
            e?.stopPropagation(), lx.A.ignore(t.id);
        },
        o = i === x.clD.OFFLINE ? x.clD.UNKNOWN : i;
    return (0, p.jsx)(aK.A, {
        isFocused: r,
        user: t,
        analyticsLocations: a,
        onClick: () => (0, rK.openUserProfileModal)({ userId: t.id, sourceAnalyticsLocations: a }),
        children: (e) => {
            let i = (0, p.jsxs)(p.Fragment, {
                children: [
                    (0, p.jsx)(a4.A, {
                        icon: lo.A,
                        actionType: a4.A.ActionTypes.ACCEPT,
                        tooltip: j.intl.string(j.t.Zcibdf),
                        onClick: l,
                        shouldHighlight: e,
                    }),
                    (0, p.jsx)(a4.A, {
                        icon: ld.P,
                        actionType: a4.A.ActionTypes.DENY,
                        tooltip: j.intl.string(j.t.xuio0C),
                        onClick: s,
                        shouldHighlight: e,
                    }),
                ],
            });
            return (0, p.jsxs)("div", {
                className: lw.a,
                children: [
                    (0, p.jsx)(a0.A, { user: t, hovered: e, status: o, subText: n, className: lw.__invalid_userInfo }),
                    (0, p.jsx)("div", { className: lw.o, children: i }),
                ],
            });
        },
    });
}
let lU = [];
function lG() {
    n$.A.transitionToSection(x.m3P.ADD_FRIEND, { explicit: !0 });
}
function lj() {
    (0, T.openModalLazy)(async () => {
        let { default: e } = await n.e("50771").then(n.bind(n, 516259));
        return (t) => (0, p.jsx)(e, { ...t });
    });
}
function lk(e) {
    let { section: t, showSpamCta: n } = e,
        i = m.useMemo(() => (n ? lj : t !== x.m3P.PENDING ? lG : void 0), [n, t]);
    return (0, p.jsx)("div", { className: lT.y7, children: (0, p.jsx)(ls, { type: t, onClick: i }, t) });
}
let lV = function (e) {
    let { titleId: t } = e,
        { analyticsLocations: n } = (0, nJ.Ay)(eC.A.FRIENDS_LIST),
        { rows: i, section: r } = (0, f.cf)([au.Ay], () => au.Ay.getState()),
        a = (0, f.bG)([ey.A], () => ey.A.isFocused()),
        { relationshipCount: l, hasBlockedOrIgnored: s } = (0, f.cf)([eQ.A], () => ({
            relationshipCount: eQ.A.getRelationshipCount(),
            hasBlockedOrIgnored: eQ.A.getBlockedOrIgnoredIDs().length > 0,
        })),
        { enabled: o } = aF.useConfig({ location: "PeopleList" }),
        [d, c] = m.useState([]),
        u = m.useCallback((e) => {
            let { enabled: t } = aF.getConfig({ location: "Friend Request Accept" });
            t && c((t) => [...t, e]);
        }, []);
    r !== x.m3P.PENDING && d.length > 0 && c([]);
    let [_, A] = m.useState(() => {
            let e = {};
            for (let t of Object.values(x.m3P)) e[t] = "";
            return e;
        }),
        h = (0, aj.p)(eC.A.FRIENDS_LIST),
        [E, I] = m.useState(!1),
        g = m.useCallback(
            (e, t) => {
                let { key: i, ...l } = e;
                switch (r) {
                    case x.m3P.PENDING:
                        return (0, p.jsx)(lI, { ...l, isFocused: a, onAcceptFriendRequest: () => u(e) }, i);
                    case x.m3P.SUGGESTIONS:
                        return (0, p.jsx)(lM, { ...l, isFocused: a }, i);
                    case x.m3P.ALL:
                        return (0, p.jsx)(
                            a9,
                            {
                                ...l,
                                isFocused: a,
                                analyticsLocations: n,
                                sectionIndex: t,
                                hasFriendAnniversarySection: h,
                            },
                            `${t}-${i}`,
                        );
                    case x.m3P.ONLINE:
                    default:
                        return (0, p.jsx)(a9, { ...l, isFocused: a, analyticsLocations: n }, i);
                }
            },
            [r, a, n, h, u],
        ),
        C = m.useCallback(
            (e) => {
                A({ ..._, [r]: e });
            },
            [_, r],
        ),
        T = m.useCallback(() => {
            A({ ..._, [r]: "" });
        }, [_, r]),
        N = m.useMemo(
            () =>
                r === x.m3P.PENDING && (i.filter(x.m3P.SPAM).length > 0 || i.filter(x.m3P.PENDING_IGNORED).length > 0),
            [i, r],
        ),
        S = m.useMemo(() => {
            let e = i.filter(r, _[r]);
            return (
                o &&
                    r === x.m3P.PENDING &&
                    "" === _[r] &&
                    (e = eG()([...e, ...d])
                        .uniqBy("key")
                        .sortBy(
                            (e) => e.nickname?.toLowerCase() ?? e.user?.globalName?.toLowerCase() ?? e.usernameLower,
                        )
                        .value()),
                e
            );
        }, [d, o, i, _, r]),
        L = r === x.m3P.PENDING,
        y = m.useMemo(() => {
            if (!L) return lU;
            let e = [];
            return (
                S.forEach((t) => {
                    let { applicationId: n } = t;
                    null != n && e.push(n);
                }),
                e
            );
        }, [L, S]);
    (0, tW.A)(y, L);
    let O = m.useMemo(
            () =>
                r === x.m3P.ALL && h && S.some((e) => e.giftIntentType === a8.np.FRIEND_ANNIVERSARY)
                    ? S.filter((e) => e.giftIntentType === a8.np.FRIEND_ANNIVERSARY).length
                    : 0,
            [S, r, h],
        ),
        b = m.useMemo(() => {
            switch (r) {
                case x.m3P.PENDING:
                    let e = [],
                        t = [];
                    return (
                        S.forEach((n) => {
                            n.type === x.eA$.PENDING_INCOMING
                                ? e.push(n)
                                : n.type === x.eA$.PENDING_OUTGOING && t.push(n);
                        }),
                        [e, t]
                    );
                case x.m3P.ALL:
                    if (!(h && S.some((e) => e.giftIntentType === a8.np.FRIEND_ANNIVERSARY))) return [S];
                    {
                        let e = [];
                        return (
                            S.forEach((t) => {
                                t.giftIntentType === a8.np.FRIEND_ANNIVERSARY && e.push(t);
                            }),
                            e.sort((e, t) => i_.A.compareByDmProbability(e.userId, t.userId)),
                            [E ? e : e.slice(0, aV.ZD), S]
                        );
                    }
                default:
                    return [S];
            }
        }, [S, r, E, h]),
        v = m.useMemo(() => S.filter((e) => e.type === x.eA$.PENDING_INCOMING).length, [S]),
        R = r === x.m3P.PENDING && v > 0 && v >= 5,
        P = m.useCallback(
            (e) => {
                e.stopPropagation(), aA.A.confirmClearPendingRelationships(v);
            },
            [v],
        ),
        D = m.useCallback(() => {
            I((e) => !e);
        }, []),
        w = m.useCallback(
            (e) => {
                let n = b[e],
                    i = (function (e, t, n, i) {
                        switch (e) {
                            case x.m3P.ONLINE:
                                return j.intl.formatToPlainString(j.t.BagU2U, { online: t.toString() });
                            case x.m3P.PENDING:
                                if (0 === n) return j.intl.formatToPlainString(j.t["g+3FIa"], { count: t.toString() });
                                if (1 === n) return j.intl.formatToPlainString(j.t.npJsRl, { count: t.toString() });
                                throw Error(`Unexpected pending friend requests section index: ${n}`);
                            case x.m3P.SUGGESTIONS:
                                return j.intl.formatToPlainString(j.t["DYMZ/p"], { count: t.toString() });
                            default:
                                if ((0, aj.p)(eC.A.FRIENDS_LIST) && i)
                                    if (0 === n) return j.intl.formatToPlainString(j.t.rrZTqK, { count: t.toString() });
                                    else if (1 === n);
                                    else throw Error(`Unexpected friends all section index: ${n}`);
                                return j.intl.formatToPlainString(j.t.rHRrhC, { count: t.toString() });
                        }
                    })(
                        r,
                        n.length,
                        e,
                        n.some((e) => e.giftIntentType === a8.np.FRIEND_ANNIVERSARY),
                    );
                return r === x.m3P.PENDING && 0 === e
                    ? (0, p.jsxs)(
                          "div",
                          {
                              className: lT.Gf,
                              children: [
                                  (0, p.jsx)(lD, { id: t, title: i }),
                                  R &&
                                      (0, p.jsx)("div", {
                                          className: lT.mt,
                                          children: (0, p.jsx)(aw.Q, {
                                              text: j.intl.string(j.t.O8k7O4),
                                              onClick: P,
                                              "aria-label": j.intl.string(j.t.O8k7O4),
                                              textVariant: "text-sm/medium",
                                          }),
                                      }),
                              ],
                          },
                          i,
                      )
                    : (0, p.jsx)("div", { className: lT.Gf, children: (0, p.jsx)(lD, { id: t, title: i }) }, i);
            },
            [b, r, t, R, P],
        ),
        M = m.useCallback(
            (e) =>
                r === x.m3P.ALL && 0 === e && h && O > aV.ZD
                    ? (0, p.jsx)("div", {
                          className: lT.Nf,
                          children: (0, p.jsx)(n1.$, {
                              icon: E ? aM.t : aU.a,
                              variant: "secondary",
                              size: "sm",
                              text: j.intl.string(E ? j.t["6MwJo/"] : j.t["37C26f"]),
                              onClick: D,
                              "aria-label": j.intl.string(E ? j.t["6MwJo/"] : j.t["37C26f"]),
                          }),
                      })
                    : null,
            [r, O, E, D, h],
        );
    if (
        (m.useEffect(() => {
            r === x.m3P.ALL && (0, ak.Ad)();
        }, [r]),
        m.useEffect(() => {
            I(!1);
        }, [r, O]),
        0 === S.length && "" === _[r])
    )
        return (0, p.jsx)(lk, { section: r, showSpamCta: N });
    let U = "" !== _[r],
        G = 0 === S.length && U;
    return (0, p.jsx)(nJ.f5, {
        value: n,
        children: (0, p.jsxs)(nQ.A, {
            section: x.JJy.FRIENDS_LIST,
            children: [
                s && (0, p.jsx)(lv, {}),
                (0, p.jsx)("div", {
                    className: lT.ON,
                    children: (0, p.jsx)(aG.I, { query: _[r], onChange: C, onClear: T }),
                }),
                (0, p.jsx)(ly, {
                    rows: b,
                    renderRow: g,
                    renderSection: w,
                    sectionFilter: r,
                    isVirtualizedList: l >= 64,
                    hasSearchQuery: U,
                    renderSectionFooter: M,
                    footer:
                        N && !G
                            ? (0, p.jsx)("div", {
                                  className: lT.RE,
                                  children: (0, p.jsx)(aw.Q, {
                                      text: j.intl.string(j.t.R40bU2),
                                      onClick: lj,
                                      textVariant: "text-xs/medium",
                                      variant: "secondary",
                                  }),
                              })
                            : null,
                }),
                G &&
                    (0, p.jsx)("div", {
                        className: lT.y7,
                        children: (0, p.jsx)(ls, { type: li.SECTION_NO_RESULTS }, r),
                    }),
            ],
        }),
    });
};
var lF = n(465158);
function lH() {
    return (0, p.jsx)("div", {
        className: lF.N3,
        children: (0, p.jsx)(nq.Ay, { tooltip: j.intl.string(j.t["HfOgA/"]) }),
    });
}
let lB = function (e) {
    let { initialSection: t } = e,
        n = (0, g.zy)(),
        i = (0, g.W6)();
    m.useEffect(() => {
        "true" === new URLSearchParams(n.search).get("confirm-age") &&
            X.h.dispatch({ type: "AGE_GATE_MODAL_OPEN", source: el.w_.DEEP_LINK_PROMPT }).then(() => {
                i.replace(x.BVt.ME);
            });
    }, [i, n]),
        m.useEffect(() => {
            nY.I(x.BVt.FRIENDS), (0, ad.d)("friends");
        }, []);
    let r = (0, f.bG)([ac.A], () => ac.A.theme),
        a = (0, eq.kX)(),
        { section: l, rows: s } = (0, f.cf)([au.Ay], () => au.Ay.getState()),
        o = (0, f.bG)([nz.A], () => nz.A.getSuggestionCount()),
        d = m.useMemo(() => s.getRelationshipCounts(), [s]);
    m.useEffect(() => {
        null != t && n$.A.setInitialSection(t),
            0 === d[x.eA$.FRIEND] &&
                0 === d[x.eA$.PENDING_INCOMING] &&
                0 === d[x.eA$.PENDING_OUTGOING] &&
                0 === d[x.eA$.BLOCKED] &&
                n$.A.transitionToSection(x.m3P.ADD_FRIEND);
    }, [t, d]);
    let c = (e) => {
            n$.A.transitionToSection(e, { explicit: !0 });
        },
        u = (0, nW.GV)(),
        _ = (0, nW.GV)(),
        A = [
            {
                id: x.m3P.ONLINE,
                show: s.filter(x.m3P.ONLINE).length > 0,
                content: j.intl.string(j.t.b9w3bO),
                className: lF.AS,
            },
            { id: x.m3P.ALL, show: d[x.eA$.FRIEND] > 0, content: j.intl.string(j.t.PfjFjR), className: lF.AS },
            {
                id: x.m3P.PENDING,
                show: s.filter(x.m3P.PENDING).length > 0,
                content: (0, p.jsxs)(p.Fragment, {
                    children: [j.intl.string(j.t.p6IHGE), a > 0 && (0, p.jsx)(nF.hV, { count: a, className: lF.qS })],
                }),
                ariaLabel: j.intl.formatToPlainString(j.t.OAC0Z4, { count: a.toString() }),
                className: lF.AS,
            },
            {
                id: x.m3P.SUGGESTIONS,
                show: o > 0,
                content: (0, p.jsxs)(p.Fragment, {
                    children: [j.intl.string(j.t["8rSi1/"]), (0, p.jsx)(nF.hV, { count: o, className: lF.qS })],
                }),
                ariaLabel: j.intl.formatToPlainString(j.t.AbMQp7, { count: o.toString() }),
                className: lF.AS,
            },
            {
                id: x.m3P.ADD_FRIEND,
                show: !0,
                content: (0, p.jsx)("span", { children: j.intl.string(j.t.j0wbE5) }),
                ariaLabel: j.intl.string(j.t.j0wbE5),
                className: ti()(lF.AS, lF.GU),
            },
        ],
        h = null,
        E = (0, p.jsx)("div", { className: lF.Xl, children: (0, p.jsx)(ao, {}) });
    return (
        (h = l === x.m3P.ADD_FRIEND ? (0, p.jsx)(ax, {}) : (0, p.jsx)(lV, { titleId: _ })),
        (0, p.jsxs)("main", {
            className: lF.kL,
            "aria-label": j.intl.string(j.t.TdEu5X),
            children: [
                (0, p.jsx)(e1.HI, { location: j.intl.string(j.t.TdEu5X) }),
                (0, p.jsx)(to.N, {
                    theme: r,
                    children: (e) =>
                        (0, p.jsxs)(nK.A, {
                            className: e,
                            toolbar: (0, p.jsx)(lH, {}),
                            role: "navigation",
                            "aria-labelledby": u,
                            scrollable: !0,
                            children: [
                                (0, p.jsx)(nK.A.Icon, { icon: nH.$, "aria-hidden": !0 }),
                                (0, p.jsx)(nK.A.Title, { id: u, children: j.intl.string(j.t.TdEu5X) }),
                                (0, p.jsx)(nK.A.Divider, {}),
                                (0, p.jsx)(nB.V, {
                                    "aria-label": j.intl.string(j.t.TdEu5X),
                                    selectedItem: l,
                                    type: "top-pill",
                                    onItemSelect: c,
                                    className: lF.$H,
                                    children: A.filter((e) => e.show).map((e) =>
                                        (0, p.jsx)(
                                            nB.V.Item,
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
                (0, p.jsxs)("div", {
                    className: lF.MJ,
                    children: [
                        (0, p.jsx)(nB.V.Panel, { id: l, className: lF.UL, "aria-labelledby": _, children: h }),
                        E,
                    ],
                }),
            ],
        })
    );
};
var lY = n(488803),
    l$ = n(969117),
    lW = n(376708),
    lz = n(272720),
    lK = n(366811),
    lq = n(320989),
    lX = n(463347),
    lZ = n(334465),
    lQ = n(97469),
    lJ = n(718446),
    l0 = n(650048),
    l1 = n(696451),
    l2 = n(519057),
    l6 = n(935208),
    l5 = n(521502),
    l3 = n(380610),
    l4 = n(828184),
    l8 = n(932553);
let l7 = "isHideDevBanner",
    l9 = () => {
        let [e, t] = (0, m.useState)(tl.w.get(l7, "false")?.toString() === "true"),
            n = (0, f.bG)([l5.A], () => ((0, l3.kK)() ? l5.A.getCurrentBuildOverride().overrides?.discord_web : null));
        if (e) return null;
        let i = () => {
                tl.w.set(l7, !0), t(!0);
            },
            r = () =>
                (0, p.jsx)(td.D, {
                    onClick: i,
                    className: l8.b,
                    "aria-label": j.intl.string(j.t.WAI6xu),
                    children: (0, p.jsx)(ld.P, { size: "md", color: "currentColor", className: l8.ut }),
                });
        return null != n
            ? (0, p.jsxs)("div", {
                  className: ti()(l8.Wz, l8.DM),
                  children: [(0, p.jsx)(l4.A, { className: l8.Kk }), j.intl.string(j.t.Wj3LW4), (0, p.jsx)(r, {})],
              })
            : "staging" === window.GLOBAL_ENV.RELEASE_CHANNEL
              ? (0, p.jsxs)("div", {
                    className: ti()(l8.Wz, l8.mr),
                    children: [
                        (0, p.jsx)(l4.A, { className: l8.Kk }),
                        j.intl.format(j.t.uyrfYF, { buildNumber: "536089" }),
                        (0, p.jsx)(r, {}),
                    ],
                })
              : null;
    };
var se = n(765671),
    st = n(757780),
    sn = n(216894),
    si = n(985668),
    sr = n(504337),
    sa = n(629016),
    sl = n(885574),
    ss = n(235986),
    so = n(342296),
    sd = n(636585),
    sc = n(975571),
    su = n(42473),
    s_ = n(994314),
    sA = n(485599),
    sh = n(246568);
class sE extends m.PureComponent {
    partyMemberAvatarRef = m.createRef();
    partyMemberOverflowRef = m.createRef();
    isHost() {
        let { currentUser: e, host: t } = this.props;
        return e.id === t?.id;
    }
    renderTitle() {
        return (0, p.jsxs)("div", {
            children: [
                (0, p.jsx)(sA.A, {
                    children: this.isHost()
                        ? j.intl.formatToPlainString(j.t["6UJ7mh"], { count: this.props.party.length })
                        : j.intl.string(j.t.RZufbH),
                }),
                (0, p.jsx)(s_.A, { children: j.intl.string(j.t["0ZHLIi"]) }),
            ],
        });
    }
    renderStopListeningButton() {
        let { onStopListening: e } = this.props;
        return this.isHost()
            ? null
            : (0, p.jsx)(su.A, { tooltipText: j.intl.string(j.t.LeZSpz), onClick: e, icon: ld.P });
    }
    renderPartyMember = (e, t) => {
        let n;
        if (null == e) return null;
        let { host: i, onUserContextMenu: r } = this.props;
        return (
            (n = i?.id === e.id ? j.intl.string(j.t["N9bqD+"]) : j.intl.string(j.t.Z2Y4c9)),
            (0, p.jsx)(
                so.A,
                {
                    targetElementRef: this.partyMemberAvatarRef,
                    user: e,
                    newAnalyticsLocations: [eC.A.AVATAR],
                    position: "top",
                    align: "center",
                    clickTrap: !0,
                    children: (i) =>
                        (0, p.jsx)(iO.m, {
                            text: n,
                            children: (0, m.createElement)(iR.eu, {
                                ...i,
                                key: e.id,
                                src: e.getAvatarURL(void 0, 24),
                                size: iP._3.SIZE_24,
                                className: ti()(sh.my, t),
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
        return (0, p.jsx)(
            ie.Y,
            {
                renderPopout: i,
                targetElementRef: this.partyMemberOverflowRef,
                children: (n) =>
                    (0, p.jsx)(iO.m, {
                        text: j.intl.string(j.t.Zf4NPe),
                        children: (0, p.jsx)("div", {
                            ...n,
                            ref: this.partyMemberOverflowRef,
                            className: ti()(sh.ju, t),
                            children: e,
                        }),
                    }),
            },
            n,
        );
    };
    renderHelpIcon() {
        return this.isHost()
            ? (0, p.jsx)(su.A, {
                  tooltipText: j.intl.string(j.t.U7N2Hs),
                  onClick: () => {
                      window.open(sc.A.getArticleURL(x.MVz.SPOTIFY_CONNECTION), "_blank");
                  },
                  icon: sl.m,
              })
            : null;
    }
    render() {
        return (0, p.jsxs)("div", {
            className: sh.Jh,
            children: [
                this.renderTitle(),
                (0, p.jsx)(ss.A, {
                    justify: ss.A.Justify.END,
                    className: sh.Hg,
                    children: (0, p.jsx)(sd.A, {
                        users: this.props.party,
                        max: this.isHost() ? 5 : 4,
                        renderUser: this.renderPartyMember,
                        renderMoreUsers: this.renderPartyMemberOverflow,
                    }),
                }),
                (0, p.jsxs)("div", {
                    className: sh.Pt,
                    children: [this.renderHelpIcon(), this.renderStopListeningButton()],
                }),
            ],
        });
    }
}
var sp = n(883202);
class sm extends m.PureComponent {
    handleContextMenu(e, t) {
        (0, ae.L3)(e, async () => {
            let { default: e } = await Promise.all([n.e("97262"), n.e("32418"), n.e("61657")]).then(n.bind(n, 668569));
            return (n) => (0, p.jsx)(e, { ...n, user: t });
        });
    }
    renderUser(e) {
        return null == e
            ? null
            : (0, p.jsxs)(
                  ss.A,
                  {
                      className: sp.kQ,
                      align: ss.A.Align.CENTER,
                      onContextMenu: (t) => {
                          null != e && this.handleContextMenu(t, e);
                      },
                      children: [
                          (0, p.jsx)(iR.eu, {
                              src: e.getAvatarURL(void 0, 24),
                              "aria-label": e.username,
                              size: iP._3.SIZE_24,
                              className: sp.my,
                          }),
                          (0, p.jsx)(rq.A, {
                              user: e,
                              className: sp.Tc,
                              usernameClass: sp.Xh,
                              discriminatorClass: sp.D2,
                          }),
                      ],
                  },
                  e.id,
              );
    }
    render() {
        let { party: e, header: t } = this.props,
            n = e.map((e) => this.renderUser(e));
        return (0, p.jsxs)("div", {
            className: sp.Gh,
            children: [
                (0, p.jsx)("div", { className: sp.wx, children: t }),
                (0, p.jsx)(nZ.Ip, { className: sp.Qs, fade: !0, children: n }),
            ],
        });
    }
}
class sI extends m.PureComponent {
    hasParty(e) {
        return e.length > 1;
    }
    handleStopListening() {
        (0, sr.A)();
    }
    handleUserContextMenu = (e, t) => {
        (0, ae.L3)(e, async () => {
            let { default: e } = await Promise.all([n.e("97262"), n.e("32418"), n.e("61657")]).then(n.bind(n, 668569));
            return (n) => (0, p.jsx)(e, { ...n, user: t });
        });
    };
    renderOverflowPopout = () => {
        let { party: e } = this.props;
        return (0, p.jsx)(sm, { party: e, header: j.intl.formatToPlainString(j.t.I9et1z, { count: e.length }) });
    };
    render() {
        let { currentUser: e, host: t, party: n } = this.props;
        return this.hasParty(n) && null != e
            ? (0, p.jsx)(sE, {
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
let sg = f.Ay.connectStores([r6.A, iA.default, eQ.A, sa.A], () => {
    let e,
        t,
        n = r6.A.getSyncingWith(),
        i = r6.A.getActivity(),
        r = iA.default.getCurrentUser(),
        a = [];
    return (
        null != n
            ? ((e = iA.default.getUser(n.userId)), (t = n.partyId))
            : null != i && null != i.party && null != i.party.id && ((e = r), (t = i.party.id)),
        null != t &&
            (a = eG()(Array.from(sa.A.getParty(t) ?? []))
                .map((e) => iA.default.getUser(e))
                .filter(rn.Vq)
                .orderBy([(t) => null == e || e.id === t.id, (e) => eQ.A.isFriend(e.id)], ["desc", "desc"])
                .value()),
        { currentUser: r, host: e, party: a }
    );
})(sI);
var sC = n(936504),
    sf = n(697744),
    sT = n(416696),
    sN = n(446080),
    sS = n(744682);
let sL = {
    disable: { name: "disable", start: 0, duration: 70 },
    enable: { name: "enable", start: 100, duration: 70 },
    hover_enabled: { name: "hover_enabled", start: 200, duration: 70 },
    hover_disabled: { name: "hover_disabled", start: 300, duration: 70 },
};
var sy = n(315710),
    sO = n(243721),
    sb = n(452027),
    sv = n(349288),
    sR = n(532676),
    sP = n(432017),
    sD = n(125628),
    sx = n(951001),
    sw = n(155718),
    sM = n(967812),
    sU = n(404522),
    sG = n(782091),
    sj = n(641703),
    sk = n(521588),
    sV = n(975412),
    sF = n(152567),
    sH = n(329072),
    sB = n(384059),
    sY = n(480890),
    s$ = n(643501),
    sW = n(857253),
    sz = n(528767),
    sK = n(790381),
    sq = n(30529),
    sX = n(544105),
    sZ = n(674586);
function sQ(e) {
    let { platform: t } = e;
    return t === sX.f$.XBOX
        ? (0, p.jsx)(rt.A, { className: sZ.Kk })
        : t === sX.f$.PLAYSTATION
          ? (0, p.jsx)(sK.A, { className: sZ.Kk })
          : null;
}
function sJ(e) {
    let { voiceState: t, awaitingRemoteSessionInfo: n } = e,
        i = null != n ? (0, sq.X)(n.type) : null,
        r = (0, f.bG)([sz.A], () => sz.A.getSessionById(t?.sessionId ?? "")?.clientInfo.os),
        a = i ?? r;
    if (null == a || !sX.hv.has(a)) return null;
    let l = null != n,
        s = l
            ? a === sX.f$.XBOX
                ? j.intl.string(j.t.UjA4HX)
                : j.intl.string(j.t.QCw1oW)
            : a === sX.f$.XBOX
              ? j.intl.format(j.t["ynEs/Y"], {})
              : j.intl.format(j.t.TZ17Bg, {});
    return (0, p.jsxs)("div", {
        className: ti()(sZ.zr, l ? sZ.jI : sZ.aW),
        children: [
            (0, p.jsx)(sQ, { platform: a }),
            (0, p.jsx)(n_.E, { color: l ? "text-strong" : "always-white", variant: "text-xs/medium", children: s }),
        ],
    });
}
var s0 = n(880144),
    s1 = n(338771),
    s2 = n(421838),
    s6 = n(891540),
    s5 = n(267102),
    s3 = n(205106),
    s4 = n(999751),
    s8 = n(123973),
    s7 = n(621956),
    s9 = n(160761),
    oe = n(173660),
    ot = n(234320),
    on = n(536432),
    oi = n(674168),
    or = n(126970),
    oa = n(395766);
function ol(e) {
    let { channel: t, ...i } = e,
        r = m.useRef(null),
        { mute: a, suppress: l } = (0, oe.A)(t),
        s = (0, tC.bG)([eL.Ay], () => eL.Ay.isDeaf()),
        o = a || l || s,
        [d, c] = m.useState(!1),
        u = t.getGuildId(),
        _ = (0, on.VE)({ isSoundboardButtonDisabled: o }),
        [A, h] = (0, s9.DP)(_),
        { analyticsLocations: E, parentAnalyticsLocation: I } = (0, nJ.Ay)(eC.A.SOUNDBOARD_BUTTON);
    function g(e) {
        null != u &&
            (0, ae.L3)(e, async () => {
                let { default: e } = await n.e("11562").then(n.bind(n, 666801));
                return (t) =>
                    (0, p.jsx)(e, {
                        guildId: u,
                        sourceAnalyticsLocations: E,
                        ...t,
                        onInteraction: (0, sY.s)("SoundboardContextMenu", eC.A.RTC_PANEL),
                    });
            });
    }
    let {
            Component: C,
            play: f,
            events: { onMouseEnter: T, onMouseLeave: N },
        } = (0, s7.E)(),
        S = m.useCallback(() => {
            o || c(!d);
        }, [o, d]);
    return (
        (0, ot.Vo)({ event: x.jej.TOGGLE_SOUNDBOARD, handler: S }),
        (0, p.jsx)(nJ.f5, {
            value: E,
            children: (0, p.jsx)(iO.m, {
                targetElementRef: r,
                text: a
                    ? j.intl.string(j.t["Ox4/zU"])
                    : l
                      ? j.intl.string(j.t["+YBKYI"])
                      : s
                        ? j.intl.string(j.t.X1lQli)
                        : j.intl.string(j.t["6EJvHt"]),
                asContainer: !0,
                shouldShow: !d,
                children: (0, p.jsx)(ie.Y, {
                    targetElementRef: r,
                    animation: ie.Y.Animation.FADE,
                    shouldShow: d,
                    position: "top",
                    onRequestClose: () => c(!1),
                    renderPopout: (e) => {
                        let { closePopout: n } = e;
                        return (0, p.jsx)(or.A, {
                            guildId: u,
                            channel: t,
                            onClose: n,
                            gridNotice:
                                A === nX.M.CUSTOM_CALL_SOUNDS_PICKER_UPSELL &&
                                (0, p.jsx)(oi.m, { onClose: n, markAsDismissed: h }),
                            analyticsSource: "rtc panel",
                        });
                    },
                    children: (e) =>
                        (0, p.jsx)("div", {
                            ref: r,
                            children: (0, p.jsx)(tU.$n, {
                                "data-migration-pending": !0,
                                ...e,
                                className: ti()(oa.x6, oa.Sq, { [oa.W4]: d, [oa.r9]: o }),
                                wrapperClassName: oa.x6,
                                innerClassName: oa.bk,
                                disabled: o,
                                onClick: () => {
                                    null != A && A !== nX.M.CUSTOM_CALL_SOUNDS_PICKER_UPSELL && h(tN.i.UNKNOWN),
                                        c(!d),
                                        f(),
                                        (0, sB.X)(I, sB.O.SOUNDBOARD);
                                },
                                onMouseEnter: (e) => {
                                    i.onMouseEnter?.(e), T();
                                },
                                onMouseLeave: (e) => {
                                    i.onMouseLeave?.(e), N();
                                },
                                onContextMenu: g,
                                fullWidth: !0,
                                size: tU.$n.Sizes.MEDIUM,
                                ...i,
                                children: (0, p.jsx)(C, { className: oa.iA, size: "sm", color: "currentColor" }),
                            }),
                        }),
                }),
            }),
        })
    );
}
var os = n(63995),
    oo = n(69407),
    od = n(96566),
    oc = n(302884),
    ou = n(30108),
    o_ = n(39938),
    oA = n(105530),
    oh = n(253932),
    oE = n(151476),
    op = n(405018),
    om = n(704877),
    oI = n(848362),
    og = n(222692),
    oC = n(702904),
    of = n(471993),
    oT = n(442353),
    oN = n(970636),
    oS = n(616356),
    oL = n(607567),
    oy = n(377802),
    oO = n(707592),
    ob = n(132860),
    ov = n(993838),
    oR = n(106044);
function oP(e) {
    let { tooltipText: t, onClick: n } = e,
        { parentAnalyticsLocation: i } = (0, nJ.Ay)(),
        { events: r, Component: a } = (0, oy.O)();
    return (0, p.jsx)(su.A, {
        tooltipText: t,
        onClick: () => {
            (0, sB.X)(i, sB.O.DISCONNECT), n();
        },
        ...r,
        icon: (0, p.jsx)(a, { size: "refresh_sm" }),
    });
}
function oD(e) {
    let { channel: t } = e;
    return (0, p.jsx)(oP, {
        tooltipText: j.intl.string(j.t.SMKyih),
        onClick: () => {
            (0, oR.A)(t) ? (0, ov.j3)(t) : O.default.disconnect();
        },
    });
}
function ox(e) {
    let { channel: t } = e;
    return (0, p.jsx)(oP, {
        tooltipText: j.intl.string(j.t["6vrfgt"]),
        onClick: () => {
            (0, ob.A)(t) ? (0, oO.Py)(t) : O.default.disconnect();
        },
    });
}
function ow(e) {
    let { channel: t } = e;
    return t.isGuildStageVoice() ? (0, p.jsx)(oD, { channel: t }) : (0, p.jsx)(ox, { channel: t });
}
var oM = n(615675),
    oU = n(666654),
    oG = n(990836),
    oj = n(83107),
    ok = n(834040),
    oV = n(307301),
    oF = n(717558),
    oH = n(770178),
    oB = n(765548),
    oY = n(556525),
    o$ = n(551826),
    oW = n(31408),
    oz = n(595811);
let oK = { offset: 2 },
    oq = {
        serverDeaf: { icon: oM.T, colorize: !0, getStatus: () => j.intl.string(j.t.btxSdB) },
        serverMute: { icon: oU.O, colorize: !0, getStatus: () => j.intl.string(j.t.uLddbQ) },
        deaf: { icon: oG.c, colorize: !1, getStatus: () => j.intl.string(j.t.NjmiOL) },
        mute: { icon: oj.z, colorize: !1, getStatus: () => j.intl.string(j.t.tjtv3P) },
        localMute: { icon: oU.O, colorize: !1, getStatus: () => j.intl.string(j.t["9F+xJU"]) },
    };
function oX(e) {
    let t = m.useRef(null),
        { parentAnalyticsLocation: i } = (0, nJ.Ay)(),
        { channel: r, user: a, nick: l, mute: s, deaf: o, serverMute: d, serverDeaf: c } = e,
        u = (0, f.bG)([eL.Ay], () => eL.Ay.isLocalMute(a.id)),
        _ = (0, oF.A)({ userId: a.id, checkSoundSharing: !0 }),
        A = r.getGuildId() ?? void 0,
        h = a.getAvatarURL(r.guild_id, 24),
        E = l ?? ri.Ay.getName(a),
        {
            icon: I,
            colorize: g,
            getStatus: C,
        } = (function (e) {
            let { serverDeaf: t, deaf: n, serverMute: i, mute: r, localMute: a } = e;
            if (t) return oq.serverDeaf;
            if (n) return oq.deaf;
            if (i) return oq.serverMute;
            if (a) return oq.localMute;
            if (r) return oq.mute;
        })({ serverDeaf: c, deaf: o, serverMute: d, mute: s, localMute: u }) ?? {},
        T = null != C ? j.intl.formatToPlainString(j.t["1+MVBP"], { userName: E, status: C() }) : E;
    function N(e) {
        null != A
            ? (0, ae.L3)(e, async () => {
                  let { default: e } = await Promise.all([
                      n.e("97262"),
                      n.e("93103"),
                      n.e("88342"),
                      n.e("35313"),
                      n.e("84442"),
                      n.e("78178"),
                      n.e("92456"),
                      n.e("20352"),
                  ]).then(n.bind(n, 107632));
                  return (t) =>
                      (0, p.jsx)(e, {
                          ...t,
                          user: a,
                          guildId: A,
                          channel: r,
                          showMediaItems: !0,
                          onInteraction: (0, sY.s)("GuildChannelUserContextMenu", eC.A.RTC_PANEL, {
                              targetUserId: a.id,
                          }),
                      });
              })
            : (0, ae.L3)(e, async () => {
                  let { default: e } = await Promise.all([n.e("97262"), n.e("32418"), n.e("61657")]).then(
                      n.bind(n, 668569),
                  );
                  return (t) =>
                      (0, p.jsx)(e, {
                          ...t,
                          user: a,
                          showMediaItems: !0,
                          onInteraction: (0, sY.s)("UserGenericContextMenu", eC.A.RTC_PANEL, { targetUserId: a.id }),
                      });
              });
    }
    let S = (0, f.bG)([e8.A], () => e8.A.getVoiceVolume(a.id)),
        L = (0, oY.v)({ isSpeaking: _, voiceDb: S, spreadDirection: oY.O.INSET_ONLY, maxInnerSpreadRadius: 3 });
    return (0, p.jsx)(so.A, {
        targetElementRef: t,
        user: a,
        guildId: A,
        channelId: r.id,
        position: "top",
        clickTrap: !0,
        children: (e) =>
            (0, p.jsx)(iO.m, {
                text: T,
                children: (0, p.jsx)(td.D, {
                    innerRef: t,
                    onClick: (t) => {
                        e.onClick(t), (0, sB.X)(i, sB.O.VOICE_USER);
                    },
                    className: oz.H,
                    onContextMenu: N,
                    focusProps: oK,
                    children: (0, p.jsx)(o$.A, {
                        shakeLocation: oW.uD.VOICE_USER,
                        isShaking: _,
                        children: (0, p.jsx)("div", {
                            className: oz.my,
                            style: { backgroundImage: `url(${h})`, ...L },
                            children:
                                null != I
                                    ? (0, p.jsx)(I, {
                                          className: ti()(oz.tr, { [oz.qE]: g }),
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
function oZ(e) {
    let { voiceStates: t, channel: n, className: i } = e,
        [r, a] = m.useState(!1),
        l = (0, f.bG)([D.default], () => D.default.getId()),
        { containerRef: s, maxVisibleAvatars: o } = (function (e) {
            let [t, n] = m.useState(7),
                i = (0, oB.A)(() => {
                    let t = r?.current;
                    if (null == t) return;
                    let i = Math.floor((t.offsetWidth + 4) / 28);
                    n(Math.max(1, e > i ? i - 1 : i));
                }),
                r = (0, oH.w)(i, [e], { fireOnMount: !0, fireOnDepsChange: !0 });
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
        u = r ? ok.Q : oV.j,
        _ = r ? j.intl.string(j.t["Z/Tya5"]) : j.intl.string(j.t.XR5BAc),
        A = (0, p.jsx)(iO.m, {
            text: _,
            ariaHidden: !0,
            children: (0, p.jsx)(aW.K, {
                "aria-label": _,
                onClick: () => a(!r),
                icon: () => (0, p.jsx)(u, { size: "md" }),
                variant: "icon-only",
                size: "sm",
            }),
        }),
        h = c && r ? t : d;
    return h.length <= 0
        ? null
        : (0, p.jsx)(nZ.Ip, {
              className: ti()(oz.XG, i),
              fade: !0,
              children: (0, p.jsxs)("div", {
                  ref: s,
                  className: ti()(oz.Xk, !r && oz.yZ),
                  role: "group",
                  "aria-label": j.intl.string(j.t["/ZgaVU"]),
                  children: [
                      h.map((e) => {
                          let { user: t, nick: i, voiceState: r } = e;
                          return t.id !== l
                              ? (0, p.jsx)(
                                    oX,
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
                      c ? A : null,
                  ],
              }),
          });
}
var oQ = n(806931),
    oJ = n(897513),
    o0 = n(509381);
let o1 = { offset: { left: -1, top: -1, right: 1, bottom: 1 } };
function o2(e) {
    let t = e.currentTarget;
    eu.default.track(x.HAw.NOISE_CANCELLATION_LINK_CLICKED, {
        text: t.text,
        href: t.href,
        location: { section: x.JJy.NOISE_CANCELLATION_POPOUT },
    });
}
function o6() {
    let e = m.useRef(null);
    (0, sy.t)(e),
        m.useEffect(() => {
            eu.default.track(x.HAw.OPEN_POPOUT, { type: x.JJy.NOISE_CANCELLATION_POPOUT });
        }, []);
    let t = (0, f.bG)([eL.Ay], () => eL.Ay.getNoiseCancellation()),
        n = (0, f.bG)([eL.Ay], () =>
            (function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eL.Ay,
                    t = e.getSystemMicrophoneMode();
                return !(0, s3.A)(!0, t);
            })(eL.Ay),
        ),
        i = (0, f.bG)([eL.Ay], () => eL.Ay.getActiveInputProfile()),
        r = null != i && i !== o0.m.CUSTOM,
        a = j.intl.string(j.t.uKdWn6),
        l = j.intl.string(j.t.uKdWn6);
    return (
        n
            ? ((a = j.intl.string(j.t.mXZgC9)),
              (l = j.intl.format(j.t.F6lrb4, {
                  onSettingsClick: () => {
                      eL.Ay.getMediaEngine().showSystemCaptureConfigurationUI("microphone_modes");
                  },
              })))
            : r && (a = j.intl.formatToPlainString(j.t["/tqmfM"], { enabled: t ? "true" : "false", inputProfile: i })),
        (0, p.jsxs)("div", {
            ref: e,
            className: oa.dD,
            children: [
                (0, p.jsx)(iO.m, {
                    text: a,
                    shouldShow: r || n,
                    align: "right",
                    children: (0, p.jsx)("div", {
                        children: (0, p.jsx)(sO.d, {
                            label: j.intl.string(j.t["WGWHv/"]),
                            checked: t && !n,
                            disabled: r || n,
                            onChange: () => eT.A.setNoiseCancellation(!t, { section: x.JJy.NOISE_CANCELLATION_POPOUT }),
                        }),
                    }),
                }),
                (0, p.jsx)(n_.E, { variant: "text-sm/normal", children: l }),
                (0, p.jsx)(sF.A, {
                    title: j.intl.string(j.t.JdUas1),
                    notchBackground: sF.V.BLACK,
                    buttonTest: j.intl.string(j.t["sG+MGg"]),
                    buttonStop: j.intl.string(j.t.Yp3SbJ),
                    location: { section: x.JJy.NOISE_CANCELLATION_POPOUT },
                }),
                (0, p.jsx)(sb.D, {
                    label: j.intl.string(j.t.k6h1F4),
                    children: (0, p.jsxs)(ss.A, {
                        justify: ss.A.Justify.BETWEEN,
                        className: oa.__invalid_footer,
                        children: [
                            (0, p.jsx)(sv.Anchor, {
                                href: x.X7G.KRISP,
                                onClick: (e) => o2(e),
                                children: (0, p.jsx)("div", { className: oa.zQ }),
                            }),
                            (0, p.jsx)(sv.Anchor, {
                                href: sc.A.getArticleURL(x.MVz.NOISE_SUPPRESSION),
                                className: oa.W,
                                onClick: (e) => o2(e),
                                children: j.intl.string(j.t.hvVgAZ),
                            }),
                        ],
                    }),
                }),
            ],
        })
    );
}
function o5() {
    let { parentAnalyticsLocation: e } = (0, nJ.Ay)(),
        t = (0, f.bG)([o_.A], () => o_.A.isMuted()),
        n = t ? j.intl.string(j.t.ScHlfl) : j.intl.string(j.t.zqxfrf);
    return (0, p.jsx)(su.A, {
        tooltipText: n,
        icon: t ? sR.C : sP.T,
        onClick: () => {
            (0, sB.X)(e, sB.O.STAGE_MUSIC, t), (0, oc.k)(!t);
        },
    });
}
function o3(e) {
    let { channel: t, enableActivities: n, disabled: i } = e,
        r = m.useRef(null),
        { parentAnalyticsLocation: a } = (0, nJ.Ay)(),
        l = (0, oE.A)(),
        s = (0, om.A)(t),
        o = (0, f.bG)(
            [rR.Ay],
            () => null != rR.Ay.getSelfEmbeddedActivityForLocation(rR.Ay.getConnectedActivityLocation()),
        ),
        d = (0, s8.Ay)(t),
        { reachedLimit: c, limit: u } = (0, op.A)(t),
        _ = m.useCallback(() => {
            (0, og.A)();
        }, []),
        A = (0, s5.Us)(),
        h = m.useCallback(
            (e) => {
                if (eL.Ay.isVideoEnabled() === e) return;
                let n = () => {
                    eT.A.setVideoEnabled(e), e && (0, aO.pX)(x.BVt.CHANNEL(t.getGuildId() ?? x.ME, t.id));
                };
                (0, sB.X)(a, sB.O.CAMERA, e), e ? (0, oT.A)(n, A) : n();
            },
            [t, A, a],
        ),
        E = o || n || d,
        { Component: I, play: g, events: C } = (0, sN.K)(l.enabled ? "disable" : "enable");
    return (
        m.useEffect(() => () => g(), [l.enabled, g]),
        (0, p.jsx)(oN.r, {
            onChange: h,
            onCameraUnavailable: _,
            hasPermission: s,
            channelLimit: u,
            channelLimitReached: c,
            ...l,
            enabled: !i && l.enabled,
            children: (e) => {
                let { unavailable: t, isActive: n, label: i, iconComponent: l, iconColor: s, ...o } = e,
                    d = (0, p.jsx)(I, { size: "md", className: ti()(oa.iA, { [oa.ij]: !E }), color: "currentColor" });
                return (0, p.jsx)(ie.Y, {
                    targetElementRef: r,
                    renderPopout: (e) => {
                        let { closePopout: t } = e;
                        return (0, p.jsx)(sH.A, {
                            onClose: t,
                            minimal: !0,
                            onInteraction: (0, sY.s)("VideoDeviceMenu", a),
                        });
                    },
                    position: "top",
                    align: "center",
                    animation: ie.Y.Animation.FADE,
                    children: (e, a) => {
                        let { onClick: l, ...s } = e,
                            { isShown: c } = a;
                        return (0, p.jsx)(iO.m, {
                            text: i,
                            children: (0, p.jsx)(tU.$n, {
                                "data-migration-pending": !0,
                                buttonRef: r,
                                ...o,
                                ...s,
                                onClick: (e) => {
                                    o.onClick(e), c && l(e);
                                },
                                onMouseEnter: () => {
                                    s.onMouseEnter?.(), C.onMouseEnter();
                                },
                                onMouseLeave: () => {
                                    C.onMouseLeave();
                                },
                                onContextMenu: (e) => {
                                    l(e);
                                },
                                size: tU.$n.Sizes.MEDIUM,
                                className: ti()(oa.x6, oa.Sq, { [oa.rK]: n, [oa.tU]: t, [oa.r9]: o.disabled }),
                                innerClassName: oa.bk,
                                wrapperClassName: oa.x6,
                                fullWidth: !0,
                                focusProps: o1,
                                children: E
                                    ? d
                                    : (0, p.jsxs)(ss.A, {
                                          align: ss.A.Align.CENTER,
                                          children: [d, j.intl.string(j.t.FlNoSV)],
                                      }),
                            }),
                        });
                    },
                });
            },
        })
    );
}
function o4(e) {
    let { channel: t, enableActivities: n } = e,
        i = (0, s5.Us)(),
        { parentAnalyticsLocation: r, newestAnalyticsLocation: a } = (0, nJ.Ay)(),
        l = i === x.BRT.POPOUT,
        s = (0, sG.et)(t.id),
        o = (0, sG.dL)(s),
        { userInActivity: d } = (0, f.cf)([rR.Ay], () => ({
            userInActivity: null != rR.Ay.getSelfEmbeddedActivityForChannel(t.id),
        })),
        c = (0, sU.b)({ surface: sw.YI.VOICE_LAUNCHER, skipFetchingShelf: !0 }),
        u = s !== sG.xy.CAN_LAUNCH,
        { Component: _, events: A, play: h } = (0, sf.c)();
    return n
        ? (0, p.jsx)(n0.GY, {
              contentType: nX.M.ACTIVITIES_VOICE_LAUNCHER_BADGE,
              latestVersion: c,
              children: (e) => {
                  let { visibleContent: n, markAsDismissed: i } = e;
                  return (0, p.jsx)(iO.m, {
                      text: o,
                      children: (0, p.jsxs)(tU.$n, {
                          "data-migration-pending": !0,
                          fullWidth: !0,
                          size: tU.$n.Sizes.MEDIUM,
                          ...A,
                          onClick: () => {
                              h(),
                                  (0, sV.A)({
                                      context: null != t ? { type: "channel", channel: t } : { type: "contextless" },
                                      openInPopout: l,
                                      analyticsLocation: a,
                                  }),
                                  (0, sB.X)(r, sB.O.ACTIVITY),
                                  n === nX.M.ACTIVITIES_VOICE_LAUNCHER_BADGE && i(tN.i.TAKE_ACTION);
                          },
                          onMouseEnter: () => {
                              A.onMouseEnter();
                          },
                          onMouseLeave: () => {
                              A.onMouseLeave();
                          },
                          disabled: u,
                          className: ti()(oa.x6, oa.Sq, { [oa.rK]: d, [oa.r9]: u }),
                          innerClassName: oa.bk,
                          wrapperClassName: oa.x6,
                          focusProps: o1,
                          children: [
                              n === nX.M.ACTIVITIES_VOICE_LAUNCHER_BADGE && (0, p.jsx)(sk.a, { top: -1, right: -1 }),
                              (0, p.jsx)(_, { size: "md", color: "currentColor", className: oa.iA }),
                          ],
                      }),
                  });
              },
          })
        : null;
}
function o8(e) {
    let t,
        { channel: n, canGoLive: i, enableActivities: r, disabled: a } = e,
        l = m.useRef(null),
        { parentAnalyticsLocation: s, analyticsLocations: o } = (0, nJ.Ay)(),
        d = (0, f.bG)([iA.default], () => iA.default.getCurrentUser()),
        c = (0, f.yK)([oS.A], () => oS.A.getAllActiveStreams()),
        u = (0, om.A)(n),
        _ = n.getGuildId(),
        A = (0, f.cf)([rR.Ay], () => null != rR.Ay.getSelfEmbeddedActivityForChannel(n.id)),
        h = (0, s8.Ay)(n),
        E = m.useCallback(() => {
            (0, of.A)(_, n.id, o);
        }, [_, n.id, o]),
        I = c.find((e) => e.ownerId === d?.id),
        g = (0, oI.T)(n, d, c);
    t = null == I ? (i ? E : oC.A) : () => (0, s1.A)(I);
    let C = null != I || g.length > 0,
        T = u ? j.intl.string(j.t.fjBNo1) : j.intl.string(j.t.uQn9B8),
        N = A || r || h,
        S = null != I,
        { Component: L, events: y, play: O } = (0, sT.c)(S ? "disable" : "enable");
    m.useEffect(() => () => O(), [O, S]);
    let b = (0, p.jsx)(L, { size: "md", color: "currentColor", className: ti()(oa.iA, { [oa.ij]: !N }) });
    return (0, p.jsx)(ie.Y, {
        targetElementRef: l,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, p.jsx)(oI.A, {
                channel: n,
                currentUser: d,
                activeStreams: c,
                onClose: t,
                handleGoLive: i ? E : oC.A,
                onInteraction: (0, sY.s)("ManageStreamsMenu", s, { entrypoint: oQ.GK.OTHER_BUTTON }),
            });
        },
        position: "top",
        align: "center",
        animation: ie.Y.Animation.FADE,
        children: (e) => {
            let { onClick: n, onMouseEnter: i, ...r } = e;
            return (0, p.jsx)(iO.m, {
                text: T,
                children: (0, p.jsx)(tU.$n, {
                    "data-migration-pending": !0,
                    buttonRef: l,
                    size: tU.$n.Sizes.MEDIUM,
                    onClick: (e) => {
                        (0, sB.X)(s, sB.O.STREAM, null == I), C ? n(e) : t();
                    },
                    disabled: !u || a,
                    className: ti()(oa.x6, oa.Sq, { [oa.rK]: null != I, [oa.r9]: !u || a }),
                    ...(C ? r : null),
                    onMouseEnter: () => {
                        i?.(), y.onMouseEnter();
                    },
                    onMouseLeave: () => {
                        y.onMouseLeave();
                    },
                    innerClassName: oa.bk,
                    wrapperClassName: oa.x6,
                    focusProps: o1,
                    children: N
                        ? b
                        : (0, p.jsxs)(ss.A, { align: ss.A.Align.CENTER, children: [b, j.intl.string(j.t["r0/+v7"])] }),
                }),
            });
        },
    });
}
class o7 extends m.PureComponent {
    ref = m.createRef();
    krispButtonRef = m.createRef();
    handleChannelLinkClick = (e) => {
        let { guild: t, channel: n } = this.props;
        eM()(null != n, "Channel is null during navigation click"),
            e.stopPropagation(),
            sx.A.channelListScrollTo(t?.id ?? x.ME, n.id),
            (0, sB.X)(eC.A.RTC_PANEL, sB.O.CHANNEL_LINK);
    };
    handleChannelLinkContextMenu = (e) => {
        let { channel: t, analyticsLocations: i } = this.props;
        (0, ae.L3)(e, async () => {
            let { default: e } = await n.e("57550").then(n.bind(n, 576701));
            return (n) =>
                (0, p.jsx)(nJ.f5, {
                    value: i,
                    children: (0, p.jsx)(e, {
                        ...n,
                        channel: t,
                        onInteraction: (0, sY.s)("RTCConnectionMenu", eC.A.RTC_PANEL),
                    }),
                });
        });
    };
    handleCloseVoicePanelIntroduction = () => {
        s2.sF(oJ._.VOICE_PANEL_INTRODUCTION);
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
        let s = (0, iz.m1)(t, iA.default, eQ.A);
        return (
            null != n ? ((e = x.BVt.CHANNEL(n.id, t.id)), (s = `${s} / ${n.name}`)) : (e = x.BVt.CHANNEL(x.ME, t.id)),
            (0, p.jsx)(s4.A, {
                channelId: t.id,
                quality: i,
                state: r,
                lastPing: a,
                hasVideo: l,
                connectionStatusTextVariant: "text-md/medium",
                childrenAsSubtitle: !0,
                children: (0, p.jsx)(ix.vN, {
                    children: (0, p.jsx)(sC.N_, {
                        to: e,
                        onClick: this.handleChannelLinkClick,
                        onContextMenu: this.handleChannelLinkContextMenu,
                        children: (0, p.jsx)(s_.A, {
                            className: oa.Ix,
                            children: (0, p.jsx)(n_.E, {
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
                null == a.find((e) => e.user.id === D.default.getId() && (0, oA.eY)(e.voiceState) === oA.zF.ON_STAGE) &&
                (0, ou.Zl)(r.id)
              ? (0, p.jsx)(o5, {})
              : !n && t
                ? (0, p.jsx)(iO.m, {
                      text: j.intl.string(j.t["i+SO/U"]),
                      forceOpen: !0,
                      children: (0, p.jsx)(su.A, {
                          tooltipText: null,
                          disabled: !0,
                          icon: sD.m,
                          "aria-label": j.intl.string(j.t["i+SO/U"]),
                      }),
                  })
                : (0, p.jsx)(
                      ie.Y,
                      {
                          targetElementRef: this.krispButtonRef,
                          position: "top",
                          align: "center",
                          renderPopout: () => (0, p.jsx)(o6, {}),
                          children: (t, n) => {
                              let { isShown: i } = n;
                              return (0, p.jsx)(o9, {
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
            ? (0, p.jsx)(oZ, { voiceStates: t, channel: e, className: oa.Xk })
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
        let s = D.default.getId();
        if (e.isGuildStageVoice()) {
            if (!(0, od.Bw)(e.guild_id) || !t) return null;
            let n = r.find((e) => e.user.id === s);
            if (null == n || n.voiceState.suppress) return null;
        }
        let o = (e.isGuildVoice() || l) && i,
            { reachedLimit: d } = (0, op.M)(e),
            c = (0, od.xn)(e.id);
        return (0, p.jsxs)("div", {
            className: oa.uu,
            children: [
                (0, p.jsx)(o3, { channel: e, enableActivities: o, disabled: !c && d }),
                (0, p.jsx)(o8, {
                    channel: e,
                    canGoLive: t,
                    enableActivities: o,
                    disabled: e.isGuildStageVoice() && ((c && null == a) || (!c && d)),
                }),
                o ? (0, p.jsx)(o4, { channel: e, enableActivities: i }) : null,
                (0, s8.Ay)(e) ? (0, p.jsx)(ol, { channel: e, focusProps: o1 }) : null,
            ],
        });
    }
    renderVoicePanelIntroduction = () =>
        (0, p.jsxs)("div", {
            className: ti()(oa.SC, "theme-light"),
            children: [
                (0, p.jsx)(nA.D, {
                    className: oa.oN,
                    variant: "heading-md/semibold",
                    children: j.intl.string(j.t["ba/rL2"]),
                }),
                (0, p.jsx)(n_.E, { className: oa.uf, variant: "text-sm/normal", children: j.intl.string(j.t.Ne1Eew) }),
                (0, p.jsx)(n1.$, {
                    fullWidth: !0,
                    onClick: this.handleCloseVoicePanelIntroduction,
                    text: j.intl.string(j.t.shaBeH),
                    focusProps: o1,
                }),
            ],
        });
    render() {
        let { channel: e, noiseCancellationSupported: t, shouldShowVoicePanelIntroduction: n } = this.props;
        return null == e
            ? null
            : (0, p.jsx)(ie.Y, {
                  targetElementRef: this.ref,
                  renderPopout: this.renderVoicePanelIntroduction,
                  position: "top",
                  align: "center",
                  animation: ie.Y.Animation.TRANSLATE,
                  shouldShow: n,
                  children: () =>
                      (0, p.jsxs)("div", {
                          ref: this.ref,
                          className: oa.kL,
                          children: [
                              (0, p.jsxs)(ss.A, {
                                  className: oa.FI,
                                  align: ss.A.Align.CENTER,
                                  children: [
                                      (0, p.jsx)("div", { className: oa.vW, children: this.renderConnectionStatus() }),
                                      (0, p.jsxs)(ss.A, {
                                          grow: 0,
                                          shrink: 0,
                                          className: oa.nL,
                                          children: [
                                              t ? this.renderNoiseCancellation() : null,
                                              (0, p.jsx)(ow, { channel: e }),
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
function o9(e) {
    var t;
    let i,
        r,
        a,
        l,
        s,
        o,
        { popoutProps: d, isShown: c, noiseCancellationActive: u, ref: _ } = e,
        { parentAnalyticsLocation: A } = (0, nJ.Ay)(),
        {
            play: h,
            Component: E,
            events: I,
        } = ((t = u ? "disable" : "enable"),
        (i = m.useRef(null)),
        ((r = m.useRef(t)).current = t),
        (a = m.useMemo(
            () => () => {
                null != i.current && i.current.play(t);
            },
            [t],
        )),
        (l = m.useCallback(() => {
            if (null == i.current) return;
            let e = "enable" === t ? "hover_disabled" : "hover_enabled";
            i.current.play(e);
        }, [t])),
        (s = m.useCallback(() => {
            if (null == i.current) return;
            let e = "enable" === t ? "hover_disabled" : "hover_enabled";
            i.current.stopIfPlaying(e);
        }, [t])),
        (o = m.useCallback(
            (e) =>
                (0, p.jsx)(sS.P, {
                    ...e,
                    src: () => n.e("24596").then(n.t.bind(n, 941983, 19)),
                    ref: i,
                    initialAnimation: r.current,
                    markers: sL,
                }),
            [],
        )),
        {
            events: { onClick: a, onMouseEnter: l, onMouseLeave: s },
            play: a,
            getDuration: m.useCallback(() => i.current?.getDuration(), []),
            getCurrentFrame: m.useCallback(() => i.current?.getCurrentFrame() ?? null, []),
            Component: o,
        });
    return (
        m.useEffect(() => () => h(), [u, h]),
        (0, p.jsx)(su.A, {
            ...d,
            ref: _,
            onClick: (e) => {
                (0, sB.X)(A, sB.O.KRISP, !u), d.onClick(e);
            },
            onMouseEnter: () => {
                d.onMouseEnter?.(), I.onMouseEnter();
            },
            onMouseLeave: () => {
                I.onMouseLeave();
            },
            tooltipText: c ? null : j.intl.string(j.t.vFiCSx),
            icon: (0, p.jsx)(E, { size: "refresh_sm" }),
        })
    );
}
let de = (0, at.A)(function (e) {
    let t = (0, sW.A)(),
        n = (0, f.bG)([s$.default], () => s$.default.getAwaitingRemoteSessionInfo()),
        i = (0, f.bG)([iA.default], () => iA.default.getCurrentUser()),
        { channelId: r, ...a } = (0, f.cf)([e4.A], () =>
            null != t
                ? {
                      channelId: t.channelId,
                      rtcConnectionQuality: x.bFR.FINE,
                      rtcConnectionState: x.S7L.RTC_CONNECTED,
                      rtcConnectionLastPing: 0,
                  }
                : {
                      channelId: e4.A.getChannelId(),
                      rtcConnectionQuality: e4.A.getQuality(),
                      rtcConnectionState: e4.A.getState(),
                      rtcConnectionLastPing: e4.A.getLastPing(),
                  },
        ),
        l = (0, f.bG)([i9.A], () => i9.A.getChannel(r), [r]),
        s = l?.getGuildId(),
        o = (0, f.bG)([rG.A], () => rG.A.getGuild(s), [s]),
        d = (0, f.cf)([eL.Ay], () => ({
            noiseCancellationSupported: eL.Ay.isNoiseCancellationSupported(),
            noiseCancellationActive: (0, s3.A)(eL.Ay.getNoiseCancellation(), eL.Ay.getSystemMicrophoneMode()),
            noiseCancellationError: eL.Ay.isNoiseCancellationError(),
            canGoLive: (0, s0.A)(eL.Ay),
        })),
        c = (0, f.bG)(
            [eL.Ay, s6.A],
            () =>
                s6.A.hasHotspot(oJ._.VOICE_PANEL_INTRODUCTION) &&
                (0, ri.mv)(i) &&
                !eL.Ay.isInteractionRequired() &&
                !l?.isGuildStageVoice(),
        ),
        u = (0, f.bG)([rH.A], () => null != r && rH.A.hasVideo(r), [r]),
        _ = (0, f.bG)([oS.A], () => oS.A.getCurrentUserActiveStream()),
        A = (0, f.bG)([t3.A], () => t3.A.hasLayers()),
        h = (0, f.bG)([nD.A], () => nD.A.isViewingRoles(s)),
        E = (0, f.bG)([rV.A], () => h && !rV.A.can(x.xBc.VIEW_CHANNEL, l), [h, l]),
        I = oh.vL.useSetting(),
        [g, C, T] = (0, f.yK)(
            [oL.Ay, os.A],
            () =>
                l?.isGuildStageVoice()
                    ? [os.A.getMutableParticipants(l.id, oo.ip.SPEAKER), os.A.getParticipantsVersion(l.id), null]
                    : [null, null, null != l ? oL.Ay.getVoiceStatesForChannel(l) : null],
            [l],
        ),
        N = m.useMemo(
            () =>
                g?.map((e) => {
                    let { user: t, userNick: n, voiceState: i } = e;
                    return { user: t, nick: n, voiceState: i };
                }) ??
                T ??
                [],
            [g, C, T],
        ),
        [S, L] = m.useState(!1);
    m.useEffect(() => {
        (h || E) && L(!1);
    }, [h, E, L]);
    let { analyticsLocations: y } = (0, nJ.Ay)(eC.A.RTC_PANEL),
        O = (0, sM.A)(s ?? x.dJq, l?.id),
        b = (0, sj.A)(l?.id);
    return (0, p.jsx)(nJ.f5, {
        value: y,
        children: (0, p.jsxs)("div", {
            className: oa.iE,
            children: [
                null != t || null != n ? (0, p.jsx)(sJ, { voiceState: t, awaitingRemoteSessionInfo: n }) : null,
                (0, p.jsx)(o7, {
                    ...e,
                    ...d,
                    ...a,
                    enableActivities: O,
                    remoteVoiceState: t,
                    guild: o,
                    channel: l,
                    hasVideo: u,
                    selfStream: _,
                    hasLayers: A,
                    voiceStates: N,
                    showVoiceStates: I,
                    shouldShowVoicePanelIntroduction: c,
                    isPrivateChannelWithEnabledActivities: b,
                    analyticsLocations: y,
                }),
                !S && h && null != s
                    ? (0, p.jsxs)("div", {
                          className: oa.BT,
                          children: [
                              (0, p.jsx)(n_.E, {
                                  variant: "text-sm/normal",
                                  className: oa.u0,
                                  children: E ? j.intl.string(j.t.efjuQJ) : j.intl.string(j.t.br8H2N),
                              }),
                              (0, p.jsx)(n1.$, {
                                  size: "sm",
                                  fullWidth: !0,
                                  onClick: () => {
                                      L(!0);
                                  },
                                  text: j.intl.string(j.t.WAI6xu),
                                  focusProps: o1,
                              }),
                          ],
                      })
                    : null,
            ],
        }),
    });
});
var dt = n(28082),
    dn = n(111113);
function di(e) {
    let { analyticsLocations: t } = (0, nJ.Ay)(eC.A.ACTIVITY_PANEL),
        n = (0, lK.A)((e) => {
            let { guildId: t } = e;
            return t;
        });
    return (0, p.jsx)(nJ.f5, { value: t, children: (0, p.jsx)(si.A, { ...e, guildId: n }) });
}
let dr = m.memo(function () {
    let e = m.useRef(null);
    (0, se.i4)(
        e,
        (e) => {
            let { height: t } = e;
            document.body.style.setProperty("--custom-app-panels-height", `${t}px`);
        },
        [],
    );
    let { isSorting: t } = (0, st.A)();
    return (0, p.jsx)("section", {
        ref: e,
        className: ti()(dn.C3, { [dn.aB]: t }),
        "aria-label": j.intl.string(j.t.vTl6Lk),
        children: (0, p.jsxs)(ix.xp, {
            containerRef: e,
            children: [
                (0, p.jsx)(l9, {}),
                (0, p.jsx)(dt.A, {}),
                (0, p.jsx)(sg, {}),
                (0, p.jsx)(nQ.A, { section: x.JJy.ACTIVITY_PANEL, children: (0, p.jsx)(di, { className: dn.iz }) }),
                (0, p.jsx)(nQ.A, { section: x.JJy.RTC_CONNECTION_PANEL, children: (0, p.jsx)(de, {}) }),
                (0, p.jsx)(nQ.A, { section: x.JJy.ACCOUNT_PANEL, children: (0, p.jsx)(sn.A, {}) }),
            ],
        }),
    });
});
var da = n(746080),
    dl = n(758836),
    ds = n(539916),
    dd = n(613057),
    dc = n(355097);
n(964623);
let du = (0, C.Fe)({ createPromise: () => Promise.resolve().then(n.bind(n, 201313)), webpackId: 201313 }),
    d_ = () => (0, p.jsx)("div", { className: dn.wG, children: (0, p.jsx)(ts.y, {}) }),
    dA = (0, C.Fe)({
        createPromise: () =>
            Promise.all([n.e("60161"), n.e("73644"), n.e("2529"), n.e("81505")]).then(n.bind(n, 276523)),
        webpackId: 276523,
        name: "NotificationsInboxSidebar",
        renderLoader: d_,
    }),
    dh = (0, C.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("32292"),
                n.e("28367"),
                n.e("45174"),
                n.e("85519"),
                n.e("11871"),
                n.e("37266"),
                n.e("55057"),
                n.e("14976"),
                n.e("63229"),
                n.e("31988"),
                n.e("55343"),
                n.e("8555"),
                n.e("40142"),
                n.e("60161"),
                n.e("98765"),
                n.e("65437"),
                n.e("34983"),
                n.e("92414"),
                n.e("95208"),
                n.e("72401"),
                n.e("47417"),
                n.e("19558"),
                n.e("58946"),
                n.e("76390"),
                n.e("93312"),
                n.e("95752"),
                n.e("87046"),
                n.e("90161"),
                n.e("31538"),
                n.e("34828"),
                n.e("99717"),
                n.e("6698"),
                n.e("98954"),
                n.e("227"),
                n.e("90184"),
                n.e("52286"),
                n.e("86674"),
                n.e("4009"),
                n.e("80093"),
                n.e("41706"),
                n.e("78870"),
            ]).then(n.bind(n, 480178)),
        webpackId: 480178,
        name: "GuildShopPage",
        renderLoader: tA.uW,
    }),
    dE = (0, C.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("32292"),
                n.e("28367"),
                n.e("45174"),
                n.e("85519"),
                n.e("11871"),
                n.e("37266"),
                n.e("55057"),
                n.e("14976"),
                n.e("63229"),
                n.e("31988"),
                n.e("55343"),
                n.e("34983"),
                n.e("90161"),
                n.e("99717"),
                n.e("6698"),
                n.e("90184"),
                n.e("14078"),
            ]).then(n.bind(n, 148980)),
        webpackId: 148980,
        name: "SocialLayerStorefront",
        renderLoader: d_,
    }),
    dp = (0, C.Fe)({
        createPromise: () => n.e("8497").then(n.bind(n, 254316)),
        webpackId: 254316,
        name: "ServerMonetizationOnboardingForwarder",
        renderLoader: d_,
    }),
    dm = (0, C.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("32292"),
                n.e("28367"),
                n.e("45174"),
                n.e("85519"),
                n.e("11871"),
                n.e("37266"),
                n.e("55057"),
                n.e("14976"),
                n.e("63229"),
                n.e("31988"),
                n.e("55343"),
                n.e("93103"),
                n.e("88342"),
                n.e("8555"),
                n.e("40142"),
                n.e("60161"),
                n.e("98765"),
                n.e("35313"),
                n.e("65437"),
                n.e("34983"),
                n.e("92414"),
                n.e("95208"),
                n.e("72401"),
                n.e("47417"),
                n.e("19558"),
                n.e("58946"),
                n.e("76390"),
                n.e("93312"),
                n.e("95752"),
                n.e("87046"),
                n.e("90161"),
                n.e("31538"),
                n.e("34828"),
                n.e("99717"),
                n.e("6698"),
                n.e("98954"),
                n.e("227"),
                n.e("90184"),
                n.e("62718"),
                n.e("68883"),
                n.e("29594"),
                n.e("52286"),
                n.e("8018"),
                n.e("7637"),
                n.e("3025"),
                n.e("86674"),
                n.e("4009"),
                n.e("42282"),
                n.e("49862"),
                n.e("44647"),
                n.e("10730"),
                n.e("25657"),
                n.e("49320"),
                n.e("75349"),
                n.e("73644"),
                n.e("54490"),
                n.e("63078"),
                n.e("96694"),
                n.e("53267"),
                n.e("60744"),
                n.e("66319"),
                n.e("33957"),
            ]).then(n.bind(n, 578839)),
        webpackId: 578839,
        name: "GuildHomePage",
        renderLoader: tA.tV,
    }),
    dI = (0, C.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("32292"),
                n.e("49681"),
                n.e("28367"),
                n.e("45174"),
                n.e("85519"),
                n.e("11871"),
                n.e("37266"),
                n.e("55057"),
                n.e("14976"),
                n.e("63229"),
                n.e("31988"),
                n.e("55343"),
                n.e("8555"),
                n.e("40142"),
                n.e("60161"),
                n.e("98765"),
                n.e("65437"),
                n.e("34983"),
                n.e("92414"),
                n.e("95208"),
                n.e("72401"),
                n.e("47417"),
                n.e("19558"),
                n.e("58946"),
                n.e("76390"),
                n.e("93312"),
                n.e("95752"),
                n.e("87046"),
                n.e("90161"),
                n.e("31538"),
                n.e("34828"),
                n.e("99717"),
                n.e("6698"),
                n.e("98954"),
                n.e("227"),
                n.e("90184"),
                n.e("62718"),
                n.e("29594"),
                n.e("52286"),
                n.e("28136"),
                n.e("86674"),
                n.e("4009"),
                n.e("15373"),
                n.e("46411"),
                n.e("13848"),
                n.e("62890"),
                n.e("41068"),
                n.e("99583"),
            ]).then(n.bind(n, 28988)),
        webpackId: 28988,
        name: "MemberSafetyPage",
        renderLoader: tA.NU,
    }),
    dg = (0, C.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("32292"),
                n.e("96382"),
                n.e("28367"),
                n.e("45174"),
                n.e("85519"),
                n.e("11871"),
                n.e("37266"),
                n.e("55057"),
                n.e("14976"),
                n.e("63229"),
                n.e("31988"),
                n.e("55343"),
                n.e("93103"),
                n.e("88342"),
                n.e("8555"),
                n.e("40142"),
                n.e("60161"),
                n.e("98765"),
                n.e("35313"),
                n.e("65437"),
                n.e("34983"),
                n.e("92414"),
                n.e("95208"),
                n.e("72401"),
                n.e("47417"),
                n.e("19558"),
                n.e("58946"),
                n.e("76390"),
                n.e("93312"),
                n.e("95752"),
                n.e("87046"),
                n.e("90161"),
                n.e("31538"),
                n.e("34828"),
                n.e("99717"),
                n.e("6698"),
                n.e("98954"),
                n.e("227"),
                n.e("90184"),
                n.e("62718"),
                n.e("68883"),
                n.e("29594"),
                n.e("52286"),
                n.e("8018"),
                n.e("7637"),
                n.e("3025"),
                n.e("86674"),
                n.e("4009"),
                n.e("42282"),
                n.e("49862"),
                n.e("44647"),
                n.e("10730"),
                n.e("25657"),
                n.e("49320"),
                n.e("60989"),
                n.e("75349"),
                n.e("73644"),
                n.e("54490"),
                n.e("63078"),
                n.e("56026"),
                n.e("16301"),
                n.e("22191"),
                n.e("25961"),
                n.e("32347"),
                n.e("96694"),
                n.e("53267"),
                n.e("36320"),
                n.e("66319"),
                n.e("72165"),
            ]).then(n.bind(n, 807780)),
        webpackId: 807780,
        name: "ChannelsAndRolesPage",
        renderLoader: tA.n,
    }),
    dC = (0, C.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("96382"),
                n.e("8555"),
                n.e("56026"),
                n.e("16301"),
                n.e("22191"),
                n.e("25961"),
                n.e("36320"),
                n.e("39579"),
            ]).then(n.bind(n, 123071)),
        webpackId: 123071,
        name: "GuildOnboardingPage",
        renderLoader: d_,
    }),
    df = (0, C.Fe)({
        createPromise: () =>
            Promise.all([n.e("42749"), n.e("97763"), n.e("35016"), n.e("88615")]).then(n.bind(n, 242269)),
        webpackId: 242269,
        name: "GuildPowerupsPage",
        renderLoader: tA.Ru,
    }),
    dT = (0, C.Fe)({
        createPromise: () => Promise.all([n.e("63562"), n.e("19750")]).then(n.bind(n, 717959)),
        webpackId: 717959,
        name: "GameServerPage",
        renderLoader: tA.Ub,
    }),
    dN = (0, C.Fe)({
        createPromise: () => Promise.all([n.e("31538"), n.e("40976"), n.e("72970")]).then(n.bind(n, 590114)),
        webpackId: 590114,
        name: "ApplicationLibraryPage",
        renderLoader: tA.cL,
    }),
    dS = (0, C.qT)({
        createPromise: () =>
            Promise.all([
                n.e("74968"),
                n.e("95752"),
                n.e("98954"),
                n.e("52286"),
                n.e("4009"),
                n.e("60989"),
                n.e("86300"),
                n.e("31742"),
                n.e("26223"),
                n.e("92539"),
                n.e("2529"),
                n.e("97763"),
                n.e("7521"),
                n.e("99510"),
                n.e("83373"),
            ]).then(n.bind(n, 622168)),
        webpackId: 622168,
        name: "GuildSidebar",
        renderLoader: tA.L,
    }),
    dL = (0, C.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("44647"),
                n.e("83438"),
                n.e("22701"),
                n.e("21595"),
                n.e("34735"),
                n.e("41343"),
                n.e("51357"),
            ]).then(n.bind(n, 285321)),
        webpackId: 285321,
        name: "PrivateChannels",
        renderLoader: tA.bM,
    }),
    dy = (0, C.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("32292"),
                n.e("28367"),
                n.e("45174"),
                n.e("85519"),
                n.e("11871"),
                n.e("37266"),
                n.e("55057"),
                n.e("14976"),
                n.e("63229"),
                n.e("31988"),
                n.e("55343"),
                n.e("93103"),
                n.e("40142"),
                n.e("58946"),
                n.e("90161"),
                n.e("99717"),
                n.e("6698"),
                n.e("90184"),
                n.e("52286"),
                n.e("52803"),
                n.e("53275"),
                n.e("85384"),
                n.e("96975"),
                n.e("30003"),
                n.e("67607"),
                n.e("5769"),
                n.e("14289"),
            ]).then(n.bind(n, 942262)),
        webpackId: 942262,
        name: "GlobalDiscovery",
        renderLoader: tA.Bj,
    }),
    dO = (0, C.Fe)({
        createPromise: () =>
            Promise.all([n.e("28367"), n.e("33098"), n.e("39967"), n.e("25252")]).then(n.bind(n, 767060)),
        webpackId: 767060,
        name: "FamilyCenterRouter",
        renderLoader: tA.c5,
    }),
    db = (0, C.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("28367"),
                n.e("58946"),
                n.e("52803"),
                n.e("53275"),
                n.e("96975"),
                n.e("30003"),
                n.e("5769"),
                n.e("5468"),
            ]).then(n.bind(n, 133276)),
        webpackId: 133276,
        name: "QuestHomePage",
        renderLoader: tA.g4,
    }),
    dv = (0, C.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("32292"),
                n.e("28367"),
                n.e("45174"),
                n.e("85519"),
                n.e("11871"),
                n.e("37266"),
                n.e("55057"),
                n.e("14976"),
                n.e("63229"),
                n.e("31988"),
                n.e("55343"),
                n.e("8555"),
                n.e("40142"),
                n.e("60161"),
                n.e("98765"),
                n.e("65437"),
                n.e("34983"),
                n.e("92414"),
                n.e("95208"),
                n.e("72401"),
                n.e("47417"),
                n.e("19558"),
                n.e("58946"),
                n.e("76390"),
                n.e("93312"),
                n.e("95752"),
                n.e("87046"),
                n.e("90161"),
                n.e("31538"),
                n.e("34828"),
                n.e("99717"),
                n.e("6698"),
                n.e("98954"),
                n.e("227"),
                n.e("90184"),
                n.e("62718"),
                n.e("52286"),
                n.e("86674"),
                n.e("4009"),
                n.e("38652"),
            ]).then(n.bind(n, 461007)),
        webpackId: 461007,
        name: "ICYMIPage",
        renderLoader: tA.so,
    }),
    dR = (0, C.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("32292"),
                n.e("28367"),
                n.e("45174"),
                n.e("85519"),
                n.e("11871"),
                n.e("37266"),
                n.e("55057"),
                n.e("14976"),
                n.e("63229"),
                n.e("31988"),
                n.e("55343"),
                n.e("93103"),
                n.e("88342"),
                n.e("8555"),
                n.e("40142"),
                n.e("60161"),
                n.e("98765"),
                n.e("35313"),
                n.e("65437"),
                n.e("34983"),
                n.e("92414"),
                n.e("95208"),
                n.e("72401"),
                n.e("47417"),
                n.e("19558"),
                n.e("58946"),
                n.e("76390"),
                n.e("93312"),
                n.e("95752"),
                n.e("87046"),
                n.e("90161"),
                n.e("31538"),
                n.e("34828"),
                n.e("99717"),
                n.e("6698"),
                n.e("98954"),
                n.e("227"),
                n.e("90184"),
                n.e("62718"),
                n.e("68883"),
                n.e("29594"),
                n.e("52286"),
                n.e("8018"),
                n.e("7637"),
                n.e("3025"),
                n.e("86674"),
                n.e("4009"),
                n.e("42282"),
                n.e("44647"),
                n.e("10730"),
                n.e("25657"),
                n.e("49320"),
                n.e("75349"),
                n.e("54490"),
                n.e("63078"),
                n.e("96694"),
                n.e("53267"),
                n.e("11015"),
            ]).then(n.bind(n, 515766)),
        webpackId: 515766,
        name: "MessageRequestPage",
        renderLoader: tA.rt,
    }),
    dP = (0, C.qT)({
        createPromise: () =>
            Promise.all([
                n.e("32292"),
                n.e("28367"),
                n.e("45174"),
                n.e("85519"),
                n.e("11871"),
                n.e("37266"),
                n.e("55057"),
                n.e("14976"),
                n.e("63229"),
                n.e("31988"),
                n.e("55343"),
                n.e("93103"),
                n.e("88342"),
                n.e("8555"),
                n.e("40142"),
                n.e("60161"),
                n.e("98765"),
                n.e("35313"),
                n.e("65437"),
                n.e("34983"),
                n.e("92414"),
                n.e("95208"),
                n.e("72401"),
                n.e("47417"),
                n.e("19558"),
                n.e("58946"),
                n.e("76390"),
                n.e("93312"),
                n.e("95752"),
                n.e("87046"),
                n.e("90161"),
                n.e("31538"),
                n.e("34828"),
                n.e("99717"),
                n.e("6698"),
                n.e("98954"),
                n.e("227"),
                n.e("90184"),
                n.e("62718"),
                n.e("68883"),
                n.e("29594"),
                n.e("52286"),
                n.e("8018"),
                n.e("7637"),
                n.e("3025"),
                n.e("86674"),
                n.e("4009"),
                n.e("42282"),
                n.e("49862"),
                n.e("80093"),
                n.e("44647"),
                n.e("10730"),
                n.e("25657"),
                n.e("49320"),
                n.e("75349"),
                n.e("73644"),
                n.e("54490"),
                n.e("63078"),
                n.e("41706"),
                n.e("53275"),
                n.e("96694"),
                n.e("7121"),
                n.e("2059"),
                n.e("53267"),
                n.e("94989"),
                n.e("10247"),
                n.e("51743"),
                n.e("60744"),
                n.e("7521"),
                n.e("45013"),
                n.e("92461"),
            ]).then(n.bind(n, 878431)),
        webpackId: 878431,
        name: "Channel",
        renderLoader: tA.l3,
    }),
    dD = (0, C.Fe)({
        createPromise: () => n.e("22270").then(n.bind(n, 816015)),
        webpackId: 816015,
        name: "ChannelStoreListing",
        renderLoader: d_,
    }),
    dx = (0, C.Fe)({
        createPromise: () => n.e("49212").then(n.bind(n, 575429)),
        webpackId: 575429,
        name: "DeepLinkLaunchActivityInDM",
        renderLoader: d_,
    }),
    dw = (0, C.Fe)({
        createPromise: () => n.e("97544").then(n.bind(n, 667429)),
        webpackId: 667429,
        name: "EmptyNotificationsPage",
        renderLoader: d_,
    }),
    dM = (0, C.Fe)({
        createPromise: () => n.e("86105").then(n.bind(n, 995198)),
        webpackId: 995198,
        name: "GuildMemberVerificationPreviewDisabled",
        renderLoader: d_,
    }),
    dU = (0, C.Fe)({
        createPromise: () => n.e("56485").then(n.bind(n, 140354)),
        webpackId: 140354,
        name: "GuildOnboardingBlockedPage",
        renderLoader: d_,
    }),
    dG = (0, C.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("32292"),
                n.e("28367"),
                n.e("45174"),
                n.e("85519"),
                n.e("11871"),
                n.e("37266"),
                n.e("55057"),
                n.e("14976"),
                n.e("63229"),
                n.e("31988"),
                n.e("55343"),
                n.e("8555"),
                n.e("40142"),
                n.e("60161"),
                n.e("98765"),
                n.e("65437"),
                n.e("34983"),
                n.e("92414"),
                n.e("95208"),
                n.e("72401"),
                n.e("47417"),
                n.e("19558"),
                n.e("58946"),
                n.e("76390"),
                n.e("93312"),
                n.e("95752"),
                n.e("87046"),
                n.e("90161"),
                n.e("31538"),
                n.e("34828"),
                n.e("99717"),
                n.e("6698"),
                n.e("98954"),
                n.e("227"),
                n.e("90184"),
                n.e("52286"),
                n.e("86674"),
                n.e("4009"),
                n.e("80093"),
                n.e("41706"),
                n.e("45127"),
            ]).then(n.bind(n, 726561)),
        webpackId: 726561,
        name: "GuildRoleSubscriptionsOverviewPageWithContext",
        renderLoader: d_,
    }),
    dj = (e) => {
        let { match: t } = e,
            n = (0, tp.o)(),
            i = (0, f.bG)([i9.A, et.A], () => {
                let e = et.A.getChannelId();
                return i9.A.getChannel(e);
            }),
            { guildId: r, channelId: a, messageId: l, threadId: s } = t.params,
            o = a ?? void 0;
        null == o && null != t.params.gameShopPageIndex && (o = da.VV.GAME_SHOP);
        let d = (0, f.bG)([rG.A], () => rG.A.getGuild(r)),
            c = (0, f.bG)([l1.Ay], () => (null == r ? null : l1.Ay.getSelfMember(r))),
            u = (0, lY.C$)(r, "ChannelRenderer"),
            _ = (0, l$.N)("ChannelRenderer"),
            A = d?.features.has(x.GuildFeatures.GAME_SERVERS) ?? !1,
            h = (0, f.bG)([nD.A], () => {
                if (null == r) return;
                let e = nD.A.getData(r);
                if (e?.type === nx._.SERVER_SHOP)
                    switch (e.initialTab) {
                        case "role_subscriptions":
                            return tP.B.GUILD_ROLE_SUBSCRIPTIONS;
                        case "guild_products":
                            return tP.B.GUILD_PRODUCTS;
                        default:
                            return;
                    }
            }),
            E = (0, f.bG)([tx.A], () => (0, lW.C$)(o) && (0, lW.C$)(s), [o, s]);
        m.useEffect(() => {
            E || (null != d && (0, aO.pX)(x.BVt.CHANNEL(d.id, (0, lz.A)(d))), (0, nw.E)());
        }, [E, d]);
        let I = null != d,
            C = m.useRef(null);
        m.useEffect(() => {
            I ||
                null == r ||
                C.current === r ||
                ((C.current = r), y.A.joinGuild(r, { lurker: !0, autoNavigate: !1 }).catch(() => {}));
        }, [I, r]);
        let T = (0, nv.$)(r);
        if (null != r && null != o && (0, da.jq)(o))
            switch (o) {
                case da.VV.ROLE_SUBSCRIPTIONS:
                    return T
                        ? (0, p.jsx)(dh, { guildId: r, initialTab: tP.B.GUILD_ROLE_SUBSCRIPTIONS })
                        : (0, p.jsx)(dG, { guildId: r });
                case da.VV.SERVER_MONETIZATION_ONBOARDING:
                    return (0, p.jsx)(dp, { guildId: r });
                case da.VV.GAME_SHOP:
                    return (0, p.jsx)(dE, { ...e });
                case da.VV.GUILD_SHOP:
                    return (0, p.jsx)(dh, { guildId: r, productId: l, initialTab: h });
                case da.VV.MEMBER_APPLICATIONS:
                    return (0, p.jsx)(g.rd, { to: x.BVt.CHANNEL(r, da.VV.MEMBER_SAFETY) });
                case da.VV.GUILD_HOME:
                    return (0, p.jsx)(dm, { guildId: r });
                case da.VV.CHANNEL_BROWSER:
                    return (0, p.jsx)(dg, { guildId: r, selectedSection: ds.qC.BROWSE });
                case da.VV.GUILD_ONBOARDING:
                    return (0, p.jsx)(dC, { guildId: r });
                case da.VV.CUSTOMIZE_COMMUNITY:
                    return (0, p.jsx)(dg, { guildId: r, selectedSection: ds.qC.CUSTOMIZE });
                case da.VV.MEMBER_SAFETY:
                    return (0, p.jsx)(dI, { guildId: r });
                case da.VV.GUILD_BOOSTS:
                    return (0, p.jsx)(df, {
                        guildId: r,
                        powerupListingId: n.get("powerupId") ?? n.get("powerupSkuId"),
                    });
                case da.VV.GAME_SERVERS:
                    if (!u || (!A && !_)) return (0, p.jsx)(g.rd, { to: x.BVt.CHANNEL(r) });
                    return (0, p.jsx)(dT, { guildId: r });
                case da.VV.REPORT_TO_MOD:
                    return (0, p.jsx)(dP, {});
                default:
                    (0, rn.xb)(o);
            }
        if ((0, nb.$Y)(d, c)) return (0, p.jsx)(dU, { guildId: r, channelId: o });
        if (i?.type === x.rbe.GUILD_STORE) {
            let e = l6.default.cast(t.params.messageId);
            return (0, p.jsx)(dD, { channel: i, inputSkuId: e }, i.id);
        }
        return (0, p.jsx)(dP, {});
    },
    dk = m.memo(function () {
        let { guildId: e, channelId: t } = (0, lK.A)(),
            { notificationCenterVariant: n } = (0, nV.X8)({ location: "Sidebar" }),
            i = (0, f.bG)([et.A], () => t ?? et.A.getChannelId(e));
        return window.location.pathname.startsWith(x.BVt.CHANNEL(x.gNP))
            ? ("sidebar" !== n && (0, aO.bG)(l0.A.defaultRoute), (0, p.jsx)(dA, { includePanelSpacing: !0 }))
            : window.location.pathname.startsWith(x.BVt.GLOBAL_DISCOVERY) ||
                window.location.pathname.startsWith(x.BVt.GUILD_DISCOVERY) ||
                (0, io.r$)()
              ? (0, p.jsx)(ny, {})
              : null != e
                ? (0, p.jsx)(dS, { selectedChannelId: i, guildId: e }, e)
                : (0, p.jsx)(dL, {});
    }),
    dV = (e) => (0, p.jsx)(dj, { ...e }),
    dF = () => (0, p.jsx)(dy, {}),
    dH = (e) => (0, p.jsx)(dB, { ...e }),
    dB = (e) => {
        let { channelId: t, messageId: n } = e.match.params;
        return (m.useEffect(() => {
            null != t &&
                null != n &&
                tc.A.jumpToMessage({
                    channelId: t,
                    messageId: n,
                    flash: !0,
                    context: "notification_center_navigation",
                });
        }, [t, n]),
        null == t)
            ? (0, p.jsx)(dw, {})
            : dV(e);
    },
    dY = (e) => {
        let { match: t } = e;
        return null != t.params.guildId ? (0, p.jsx)(dM, { guildId: t.params.guildId }) : null;
    },
    d$ = (e) => {
        let { match: t } = e;
        return (0, aO.pX)(x.BVt.ME), (0, nP.A)(t.params.inviteCode), null;
    },
    dW = () => (0, p.jsx)(dN, {}),
    dz = () => (0, p.jsx)(th, {}),
    dK = () =>
        function (e) {
            let { tab: t } = (0, I.parse)(e.location.search);
            return Object.values(dl.G2).includes(t) ? (0, p.jsx)(tb, { tab: t, ...e }) : (0, p.jsx)(tb, { ...e });
        };
function dq() {
    return (0, p.jsx)(db, { topLevelRoute: !0 });
}
let dX = (e) => (0, p.jsx)(dx, { ...e }),
    dZ = () => (0, p.jsx)(lB, {}),
    dQ = () => (0, p.jsx)(dv, {}),
    dJ = () => (0, p.jsx)(dR, {}),
    d0 = () => (0, p.jsx)(dO, {}),
    d1 = (e) => {
        let t = e.location.pathname;
        return (0, p.jsx)(M, {
            deepLinkType: dd.XK.FEATURES,
            path: t,
            children: ((e) => {
                let { match: t } = e;
                switch (t.params.feature) {
                    case "friends":
                        return (0, p.jsx)(lB, { initialSection: x.m3P.ONLINE });
                    case "addFriends":
                        return (0, p.jsx)(lB, { initialSection: x.m3P.ADD_FRIEND });
                    case "pendingFriends":
                        return (0, p.jsx)(lB, { initialSection: x.m3P.PENDING });
                    case "sessionManagement":
                        return (0, p.jsx)(g.rd, { to: (0, lJ.settingsPathToRoute)(dc.od.SESSIONS) });
                    case "connections":
                        return (0, p.jsx)(g.rd, {
                            to: { pathname: (0, lJ.settingsPathToRoute)(dc.od.CONNECTIONS), search: e.location.search },
                        });
                    case "family-center":
                        return (0, p.jsx)(g.rd, { to: x.BVt.FAMILY_CENTER });
                    case "account-standing":
                        return (0, p.jsx)(g.rd, { to: (0, lJ.settingsPathToRoute)(dc.od.ACCOUNT_ACCOUNT_STANDING) });
                    case "authorized-apps":
                        return (0, p.jsx)(g.rd, { to: (0, lJ.settingsPathToRoute)(dc.od.AUTHORIZED_APPS) });
                    case "open-shop":
                        let { tab: n } = (0, I.parse)(e.location.search);
                        if (Object.values(dl.G2).includes(n))
                            return (0, p.jsx)(g.rd, { to: x.BVt.COLLECTIBLES_SHOP_WITH_TAB(n) });
                        return (0, p.jsx)(g.rd, { to: x.BVt.COLLECTIBLES_SHOP });
                    case "editProfile":
                        return (0, p.jsx)(g.rd, {
                            to: { pathname: (0, lJ.settingsPathToRoute)(dc.od.PROFILE_CUSTOMIZATION) },
                        });
                    case "gift":
                    case "store":
                        return (0, p.jsx)(g.rd, { to: { pathname: x.BVt.NITRO_HOME } });
                    case "connected-games":
                        return (0, p.jsx)(g.rd, {
                            to: (0, lJ.settingsPathToRoute)(dc.od.CONTENT_AND_SOCIAL_CONNECTED_GAMES),
                        });
                    case "boost":
                        let i = t.params.guildId;
                        return (0, p.jsx)(g.rd, { to: x.BVt.POWERUP_STORE(i) });
                    case "boost-settings":
                        return (0, p.jsx)(g.rd, { to: (0, lJ.settingsPathToRoute)(dc.od.GUILD_BOOSTING) });
                    default:
                        return (0, p.jsx)(g.rd, { to: x.BVt.ME });
                }
            })(e),
        });
    };
function d2(e) {
    document.body.style.setProperty("--custom-guild-sidebar-width", `${e}px`);
}
function d6(e) {
    let { hasNotice: t, sidebarTheme: n, hideSidebar: i, hideChannelList: r, isSidebarOpen: a } = e,
        l = (0, f.bG)([tg.A], () => tg.A.isFullscreenInContext()),
        s = (0, tR.useAppSidebarState)((e) => !e.isOpen) && !1;
    m.useLayoutEffect(() => {}, [!1]),
        m.useLayoutEffect(() => {
            if (s) d2(76);
            else {
                let e = parseInt(tl.w.get(tu.o) ?? "");
                Number.isNaN(e) && (e = 375), d2(e);
            }
        }, [s]);
    let o = m.useRef(null),
        d = m.useCallback(
            (e, t) => {
                d2(e);
                t <= 264 ? document.body.classList.add(dn._A) : document.body.classList.remove(dn._A),
                    t >= 432 ? document.body.classList.add(dn.uN) : document.body.classList.remove(dn.uN);
                let n = t - e;
                o.current?.style.setProperty("--custom-overdrag", `${1 + Math.min(Math.abs(n / 76), 0.25)}`);
            },
            [!1],
        ),
        c = m.useCallback(() => {
            document.body.classList.add(dn.cB);
        }, []),
        u = m.useCallback((e) => {
            document.body.classList.remove(dn.cB),
                document.body.classList.remove(dn._A),
                document.body.classList.remove(dn.uN),
                document.body.classList.remove(dn.l4),
                o.current?.style.setProperty("--custom-overdrag", "0px"),
                tl.w.set(tu.o, e),
                eu.default.track(x.HAw.CHANNEL_SIDEBAR_RESIZED, { width: e });
        }, []),
        _ = (0, tE.A)({
            minDimension: 264,
            maxDimension: 432,
            resizableDomNodeRef: o,
            onElementResize: d,
            onElementResizeStart: c,
            onElementResizeEnd: u,
            orientation: tE.R.HORIZONTAL_RIGHT,
            throttleDuration: 0,
        }),
        A = m.useCallback(() => {
            tR.useAppSidebarState.setState((e) => ({ isOpen: !e.isOpen }));
        }, []);
    if (
        (m.useLayoutEffect(() => {
            s && d2(76);
        }, [s]),
        i)
    )
        return null;
    let h = { className: ti()(dn.th, { [dn.Qd]: !t }) };
    return (0, p.jsx)(to.N, {
        theme: n,
        children: (e) =>
            (0, p.jsxs)("div", {
                ref: o,
                "data-collapsed": s,
                className: ti()(dn.pz, e, { [dn.Ij]: v.Fr, [dn.R]: l, [dn.WG]: r }),
                children: [
                    a && (0, p.jsx)(nR.A, { className: dn.Pl, themeOverride: n }),
                    !r &&
                        (0, p.jsxs)(p.Fragment, {
                            children: [
                                (0, p.jsx)("div", { ...h, children: (0, p.jsx)(dk, {}) }),
                                (0, p.jsx)(td.D, {
                                    onClick: A,
                                    "aria-label": "Resize Sidebar",
                                    className: dn.tq,
                                    onMouseDown: _,
                                }),
                                (0, p.jsx)(dr, {}),
                            ],
                        }),
                ],
            }),
    });
}
function d5() {
    let e,
        t = (0, f.bG)([l2.Ay], () => l2.Ay.hasNotice()),
        n = (0, lQ.NC)(),
        i = (function () {
            let [e, t] = m.useState(() => window.location.pathname.startsWith(x.BVt.GUILD_MEMBER_VERIFICATION("")));
            return (
                m.useEffect(
                    () =>
                        lq.A.addRouteChangeListener((e) => {
                            t(e.pathname.startsWith(x.BVt.GUILD_MEMBER_VERIFICATION("")));
                        }),
                    [],
                ),
                e
            );
        })(),
        r = ((e = (0, g.zy)()), (0, lZ.B)(e.pathname, x.BVt.GUILD_BOOSTING_MARKETING(lX.pv.guildId()))?.isExact === !0),
        a = (0, f.bG)([nj], () => nj.getIsOpen()),
        { notificationCenterVariant: l } = (0, nV.X8)({ location: "Sidebar" }),
        s = (0, tD.f)("AppView"),
        o = (0, g.W5)([
            x.BVt.CHANNEL(x.ME, lX.pv.channelId()),
            x.BVt.CHANNEL(lX.pv.guildId(), lX.pv.channelId({ optional: !0 }), ":messageId?"),
        ]),
        d = o?.params?.channelId === da.VV.GUILD_ONBOARDING,
        c = m.useCallback(() => nM.openSidebar(), []),
        u = ((0, tR.useAppSidebarState)((e) => !e.isOpen), (0, f.bG)([tg.A], () => tg.A.isFullscreenInContext())),
        _ = (0, f.bG)([tw.A], () => tw.A.isFrameActive());
    return (
        m.useEffect(() => {
            (0, ta.O)(() => {
                dP.preload(), dS.preload();
            });
        }, []),
        (0, p.jsx)("div", {
            className: dn.kL,
            children: (0, p.jsx)(nO.A.Provider, {
                value: o?.params.guildId === x.ME ? void 0 : o?.params.guildId,
                children: (0, p.jsxs)("div", {
                    className: dn.E3,
                    "data-fullscreen": u,
                    children: [
                        !u && (0, p.jsx)(du, {}),
                        v.Fr ? null : (0, p.jsx)(nk.A, {}),
                        (0, p.jsxs)("div", {
                            className: dn.Qs,
                            children: [
                                (0, p.jsx)(ty, {}),
                                (0, p.jsx)(d6, {
                                    isSidebarOpen: a,
                                    hasNotice: t,
                                    sidebarTheme: n,
                                    hideChannelList: i || r || d,
                                    hideSidebar: !a,
                                }),
                                (0, p.jsx)("div", {
                                    className: dn.MY,
                                    "data-collapsed": !1,
                                    children: (0, p.jsxs)(tm.A.Provider, {
                                        value: c,
                                        children: [
                                            (0, p.jsxs)(g.dO, {
                                                children: [
                                                    (0, p.jsx)(tI.A, {
                                                        path: x.BVt.ACTIVITY,
                                                        disableTrack: !0,
                                                        children: (0, p.jsx)(g.rd, { to: x.BVt.ME }),
                                                    }),
                                                    (0, p.jsx)(tI.A, {
                                                        path: x.BVt.ACTIVITY_DETAILS(":applicationId"),
                                                        render: dX,
                                                        impressionName: tr.ImpressionNames.ACTIVITY_DETAILS,
                                                        impressionProperties: (e) => {
                                                            let { match: t } = e;
                                                            return { application_id: t?.params.applicationId };
                                                        },
                                                    }),
                                                    (0, p.jsx)(tI.A, {
                                                        path: x.BVt.APPLICATION_LIBRARY,
                                                        render: dW,
                                                        impressionName: tr.ImpressionNames.APPLICATION_LIBRARY,
                                                        disableTrack: !0,
                                                    }),
                                                    (0, p.jsx)(tI.A, {
                                                        path: x.BVt.APPLICATION_STORE,
                                                        render: dz,
                                                        impressionName: tr.ImpressionNames.APPLICATION_STORE,
                                                        disableTrack: !0,
                                                    }),
                                                    (0, p.jsx)(tI.A, {
                                                        path: x.BVt.COLLECTIBLES_SHOP_WITH_TAB(":tab"),
                                                        render: dK(),
                                                        disableTrack: !0,
                                                    }),
                                                    s &&
                                                        (0, p.jsx)(tI.A, {
                                                            path: x.BVt.COLLECTIBLES_SHOP_LAYOUT(":layoutId"),
                                                            render: function (e) {
                                                                let { match: t, ...n } = e,
                                                                    { layoutId: i } = t.params;
                                                                return null == i || "" === i
                                                                    ? (0, p.jsx)(tb, { ...n })
                                                                    : (0, p.jsx)(tv, { layoutId: i, ...n });
                                                            },
                                                            disableTrack: !0,
                                                        }),
                                                    s &&
                                                        (0, p.jsx)(tI.A, {
                                                            path: x.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(
                                                                ":collectionId",
                                                            ),
                                                            render: function (e) {
                                                                let { match: t, ...n } = e,
                                                                    { collectionId: i } = t.params;
                                                                return null == i || "" === i
                                                                    ? (0, p.jsx)(tb, { ...n })
                                                                    : (0, p.jsx)(tO, { collectionId: i, ...n });
                                                            },
                                                            disableTrack: !0,
                                                        }),
                                                    (0, p.jsx)(tI.A, {
                                                        path: x.BVt.COLLECTIBLES_SHOP,
                                                        render: dK(),
                                                        disableTrack: !0,
                                                    }),
                                                    (0, p.jsx)(tI.A, {
                                                        path: x.BVt.COLLECTIBLES_SHOP_PRODUCT_DETAIL(":skuId"),
                                                        render: dK(),
                                                        disableTrack: !0,
                                                    }),
                                                    (0, p.jsx)(tI.A, {
                                                        path: x.BVt.ICYMI,
                                                        render: dQ,
                                                        disableTrack: !0,
                                                    }),
                                                    (0, p.jsx)(tI.A, {
                                                        path: x.BVt.MESSAGE_REQUESTS,
                                                        render: dJ,
                                                        disableTrack: !0,
                                                    }),
                                                    (0, p.jsx)(tI.A, {
                                                        path: x.BVt.FAMILY_CENTER,
                                                        render: d0,
                                                        disableTrack: !0,
                                                    }),
                                                    (0, p.jsx)(tI.A, {
                                                        path: x.BVt.ME,
                                                        exact: !0,
                                                        render: dZ,
                                                        impressionName: tr.ImpressionNames.FRIENDS,
                                                        disableTrack: !0,
                                                    }),
                                                    l === nV.U5.SIDEBAR &&
                                                        (0, p.jsx)(tI.A, {
                                                            path: x.BVt.CHANNEL(
                                                                x.gNP,
                                                                lX.pv.channelId({ optional: !0 }),
                                                                ":messageId?",
                                                            ),
                                                            render: dH,
                                                            disableTrack: !0,
                                                        }),
                                                    (0, p.jsx)(tI.A, {
                                                        path: [
                                                            x.BVt.CHANNEL_THREAD_VIEW(
                                                                lX.pv.guildId(),
                                                                lX.pv.channelId(),
                                                                ":threadId",
                                                                ":messageId?",
                                                            ),
                                                            x.BVt.CHANNELS_GAME_SHOP(
                                                                lX.pv.guildId(),
                                                                ":gameShopPageIndex",
                                                                ":gameShopSkuId?",
                                                                ":gameShopSlug?",
                                                            ),
                                                            x.BVt.CHANNEL(x.ME, lX.pv.channelId()),
                                                            x.BVt.CHANNEL(
                                                                lX.pv.guildId(),
                                                                lX.pv.channelId({ optional: !0 }),
                                                                ":messageId?",
                                                            ),
                                                        ],
                                                        render: dV,
                                                        impressionName: tr.ImpressionNames.GUILD_CHANNEL,
                                                        disableTrack: !0,
                                                    }),
                                                    (0, p.jsx)(tI.A, {
                                                        path: x.BVt.GLOBAL_DISCOVERY,
                                                        render: dF,
                                                        impressionName: tr.ImpressionNames.GLOBAL_DISCOVERY,
                                                        disableTrack: !0,
                                                        exact: !0,
                                                    }),
                                                    (0, p.jsx)(tI.A, {
                                                        path: x.BVt.GLOBAL_DISCOVERY_SERVERS,
                                                        render: dF,
                                                        impressionName: tr.ImpressionNames.GLOBAL_DISCOVERY,
                                                        disableTrack: !0,
                                                    }),
                                                    (0, p.jsx)(tI.A, {
                                                        path: x.BVt.GLOBAL_DISCOVERY_APPS,
                                                        render: dF,
                                                        impressionName: tr.ImpressionNames.GLOBAL_DISCOVERY_APPS,
                                                        disableTrack: !0,
                                                    }),
                                                    (0, p.jsx)(tI.A, {
                                                        path: x.BVt.QUEST_HOME_DEPRECATED,
                                                        render: dF,
                                                        impressionName: tr.ImpressionNames.QUEST_HOME,
                                                        disableTrack: !0,
                                                    }),
                                                    (0, p.jsx)(tI.A, {
                                                        path: x.BVt.QUEST_HOME,
                                                        render: dq,
                                                        impressionName: tr.ImpressionNames.QUEST_HOME,
                                                        disableTrack: !0,
                                                    }),
                                                    (0, p.jsx)(tI.A, {
                                                        path: x.BVt.GUILD_DISCOVERY,
                                                        render: dF,
                                                        impressionName: tr.ImpressionNames.GUILD_DISCOVERY,
                                                        disableTrack: !0,
                                                    }),
                                                    (0, p.jsx)(tI.A, {
                                                        path: x.BVt.GUILD_MEMBER_VERIFICATION(lX.pv.guildId()),
                                                        render: dY,
                                                        impressionName: tr.ImpressionNames.GUILD_MEMBER_VERIFICATION,
                                                        disableTrack: !0,
                                                    }),
                                                    (0, p.jsx)(tI.A, {
                                                        path: x.BVt.GUILD_MEMBER_VERIFICATION_FOR_HUB(
                                                            lX.pv.guildId(),
                                                            ":inviteCode?",
                                                        ),
                                                        render: d$,
                                                    }),
                                                    (0, p.jsx)(tI.A, {
                                                        path: x.BVt.GUILD_FEATURE(":feature", lX.pv.guildId()),
                                                        exact: !0,
                                                        render: d1,
                                                        disableTrack: !0,
                                                    }),
                                                    (0, p.jsx)(tI.A, {
                                                        path: x.BVt.FEATURE(":feature"),
                                                        exact: !0,
                                                        render: d1,
                                                        disableTrack: !0,
                                                    }),
                                                ],
                                            }),
                                            _ && (0, p.jsx)(ns, {}),
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
var d3 = n(575486);
n(938796);
var d4 = n(665260),
    d8 = n(56562),
    d7 = n(77729),
    d9 = n(237774),
    ce = n(885437),
    ct = n(973854),
    cn = n(862927),
    ci = n(815706),
    cr = n(134047),
    ca = n(626584),
    cl = n(181079),
    cs = n(668267),
    co = n(379587),
    cd = n(5180),
    cc = n(953384),
    cu = n(973522),
    c_ = n(366853),
    cA = n(136722),
    ch = n(808728),
    cE = n(698441),
    cp = n(960755),
    cm = n(222823),
    cI = n(380335),
    cg = n(211753),
    cC = n(41984),
    cf = n(833551),
    cT = n(515183),
    cN = n(871633),
    cS = n(446600),
    cL = n(760751),
    cy = n(232835),
    cO = n(543465),
    cb = n(619921),
    cv = n(256415),
    cR = n(474090),
    cP = n(705751);
async function cD(e) {
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
        [u, _] = await Promise.all([
            (0, cT.E1)(t.pid),
            eN.Ay.canCollectExecutableFingerprintsForRunningGames()
                ? e0.Ay.getExecutableFingerprintForProcess(t.pid)
                : Promise.resolve(null),
        ]),
        { gameName: A, gameId: h, exe: E, distributor: p, rawExePath: m } = (0, cu.wH)(t),
        I = r.enabledLegacy || r.enabledOOP,
        g = cg.x.legacyEnabled || cg.x.oopEnabled,
        C = r.source;
    eu.default.track(x.HAw.LAUNCH_GAME, {
        game: A,
        game_id: h,
        verified: null != n && (0, cu.PQ)(m, n?.executables),
        elevated: t.elevated,
        is_launcher: t?.isLauncher ?? !1,
        game_platform: x.yTV.DESKTOP,
        detection_method: i,
        distributor: p,
        is_overlay_enabled: g,
        is_overlay_game_enabled: I,
        is_overlay_game_source: C,
        fullscreen_type: null != u ? d8.aI[u] : d8.aI.UNKNOWN.toString(),
        hardware_display_count: (await d7.A?.hardware?.getDisplayCount?.()) ?? null,
        overlay_method: cC.Ue[a] ?? (__OVERLAY__ ? cC.Ue[cC.Ue.Hook] : null),
        activity_status_enabled: oh.tz.getSetting(),
        activity_status_shared_guilds: l,
        current_user_status: rF.A.getStatus(),
        game_detection_enabled: (0, eN.Xr)(t),
        executable_path: E,
        voice_channel_id: s,
        voice_channel_type: o,
        voice_channel_bitrate: d,
        voice_channel_guild_id: c,
        distributor_game_id: t.sku,
        hidden_by_distributor: t.hidden,
        game_metadata: (0, cN.MT)(t),
        executable_fingerprint: _ ?? t.executableFingerprint,
    }),
        null != E && eN.Ay.addExecutableTrackedByAnalytics(E);
}
async function cx(e) {
    let {
            runningNonGame: t,
            nonGameApplication: n,
            voiceChannelId: i,
            voiceChannelType: r,
            voiceChannelBitrate: a,
            voiceChannelGuildId: l,
        } = e,
        s = eN.Ay.canCollectExecutableFingerprintsForRunningGames()
            ? await e0.Ay.getExecutableFingerprintForProcess(t.pid)
            : null;
    eu.default.track(x.HAw.LAUNCH_NON_GAME_APPLICATION, {
        name: n.name,
        application_id: n.id,
        application_type: cP.S7.NON_GAME_DETECTABLE,
        elevated: t.elevated,
        game_platform: x.yTV.DESKTOP,
        distributor: t.distributor,
        detection_method: "verified_non_game_application",
        current_user_status: rF.A.getStatus(),
        executable_path: (0, cu.Ic)(t.exePath),
        voice_channel_id: i,
        voice_channel_type: r,
        voice_channel_bitrate: a,
        voice_channel_guild_id: l,
        executable_fingerprint: s ?? t.executableFingerprint,
    });
}
class cw extends m.PureComponent {
    isMessageRequestsInitialized = !1;
    debouncedRobloxAnalytics = eG().debounce(cD, 5e3);
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
            connected: _,
        } = this.props;
        if (e.voiceChannelId !== t && null != e.voiceChannelId) {
            let t = eN.Ay.getCurrentGameForAnalytics(),
                n = null != t ? t.name : "",
                i = cS.A.getStageInstanceByChannel(e.voiceChannelId),
                r = cE.Ay.getActiveEventByChannel(e.voiceChannelId),
                a = e4.A.getLastRTCConnectionState();
            a?.channelId !== e.voiceChannelId && (a = null),
                eu.default.track(x.HAw.LEAVE_VOICE_CHANNEL, {
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
                    ...(0, t$.JK)(e.voiceChannelGuildId, e.voiceChannelId, e.videoEnabled),
                    ...a?.voiceStateAnalytics?.getStats(),
                    ...tg.A.getSelectedParticipantStats(e.voiceChannelId),
                });
        }
        if (e.voiceChannelId !== t && null != t) {
            let e = eN.Ay.getCurrentGameForAnalytics(),
                l = null != e ? e.name : "",
                s = cS.A.getStageInstanceByChannel(t),
                o = cE.Ay.getActiveEventByChannel(t);
            (0, t$.zV)(x.HAw.CHANNEL_OPENED, { ...(0, t$.qL)(t) }), (0, ct.A)({ channelId: t });
            let d = null,
                c = cv.default.getFocusedPID();
            null != c &&
                cf.default.getOverlayMethod(c) !== cC.Ue.Disabled &&
                (cv.default.isInstanceLocked()
                    ? (d = x.Xmn.OVERLAY_LOCKED_ACTIVATED)
                    : cv.default.isInstanceLocked() ||
                      (d = cv.default.isPinned(x.uss.TEXT) ? x.Xmn.OVERLAY_UNLOCKED_PINNED : x.Xmn.OVERLAY_UNLOCKED)),
                eu.default.track(x.HAw.JOIN_VOICE_CHANNEL, {
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
                    was_moved: e4.A.getWasMoved(),
                    join_voice_id: e4.A.getJoinVoiceId(),
                    ...(0, t$.dL)(n, t),
                    ...(0, t$.JK)(n, t, a),
                });
        }
        let A =
                s?.distributor === e.runningGame?.distributor &&
                s?.sku === e.runningGame?.sku &&
                s?.name === e.runningGame?.name,
            h = null != e.runningGame && null != s && e.runningGame.isLauncher !== s.isLauncher;
        if (e.runningGame !== s && null != s && !s.isLauncher && (!A || h)) {
            let { gameId: e } = (0, cu.wH)(s),
                a = void 0 !== e ? cL.A.getDetectableGame(e) : null,
                l = eN.Ay.getOverrideForGame(s),
                d = rG.A.getGuildIds(),
                c = oh.JG.getSetting(),
                u = d.filter((e) => !c.includes(e)).slice(0, 200),
                _ = null;
            _ = null != l ? "custom_override" : null != a ? "verified_game" : "launcher";
            let A = cf.default.getTrackedGameByPid(s.pid),
                h = (0, eN.hw)(s),
                E = {
                    enabledOOP: A?.oopEnabled ?? h.enabledOOP,
                    enabledLegacy: A?.legacyEnabled ?? h.enabledLegacy,
                    overlayMethod: A?.overlayMethod ?? h.overlayMethod,
                    source: A?.source ?? h.source,
                    reason: "ChatAutoAnalytics",
                },
                p = cf.default.getOverlayMethod(s.pid) ?? E.overlayMethod;
            if (
                (setTimeout(() => {
                    (s.distributor === x.d3x.ROBLOX ? this.debouncedRobloxAnalytics : cD)({
                        runningGame: s,
                        game: a,
                        detectionMethod: _,
                        overlayStatus: E,
                        overlayMethod: p,
                        sharedGuildIds: u,
                        voiceChannelId: t,
                        voiceChannelType: i,
                        voiceChannelBitrate: r,
                        voiceChannelGuildId: n,
                    });
                }, 1e4),
                null != s.name && null != o && cL.A.shouldReport(s))
            ) {
                let e = s.name;
                rv.Ay.identifyGame(o, e)
                    .then((e) => rv.Ay.reportUnverifiedGame(e))
                    .catch((e) => new ca.A("AutoAnalytics").error("Cannot identify game", e));
            }
        }
        if (e.runningNonGame !== d && d?.id != null && e.runningNonGame?.id !== d.id) {
            let e = cc.A.getById(d.id);
            null != e &&
                cx({
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
                n = [l ? "screen" : null, a ? "camera" : null].filter(rn.Vq),
                i = null;
            l ? ((e = "screen"), (i = (0, ci.p)())) : a && (e = "camera"),
                eu.default.track(x.HAw.VIDEO_INPUT_TOGGLED, {
                    video_input_type: e,
                    video_toggle_source: __OVERLAY__ ? "overlay" : "app",
                    enabled_inputs: n,
                    preview_enabled: oh.bm.getSetting(),
                    ...i,
                    ...this.getGameMetadata(),
                    ...(0, t$.QS)(t),
                });
        }
        if (_ && null != c && (!e.connected || c !== e.selectedChannelId || u !== e.selectedGuildId)) {
            let t = e.selectedChannelId,
                n = i9.A.getChannel(t),
                i = rG.A.getGuild(n?.getGuildId());
            if (null != t && null != n && null != i && i.publicUpdatesChannelId === t) {
                let e = cy.A.getMessages(t),
                    r = e
                        .toArray()
                        .reverse()
                        .find(
                            (e) =>
                                (0, d4.Lt)(e.flags, x.pr7.IS_CROSSPOST) &&
                                e.messageReference?.guild_id === "667560445975986187",
                        );
                eu.default.track(x.HAw.ACK_COMMUNITY_MESSAGES, {
                    last_message_id: r?.id,
                    last_message_reference_message_id: r?.messageReference?.message_id,
                    messages_loaded: e.hasFetched,
                    ...(0, t$.dI)(n),
                    ...(0, t$.H$)(i.id),
                });
            }
            e.isTextInVoice &&
                !this.props.isTextInVoice &&
                cr.M.getConfig({ location: "ChatAutoAnalytics" }).collectAnalytics &&
                eu.default.track(x.HAw.TEXT_IN_VOICE_CLOSED, {
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
function cM() {
    let e,
        [t, n] = (0, f.yK)([et.A], () => [et.A.getVoiceChannelId(), et.A.getChannelId()], []),
        i = (0, f.bG)([i9.A], () => i9.A.getChannel(n), [n]),
        r = (0, f.bG)([tg.A], () => i?.id != null && tg.A.getChatOpen(i.id), [i]),
        a = i?.nsfw,
        l = (0, f.bG)([i9.A], () => i9.A.getChannel(t), [t]),
        s = (0, f.bG)([en.A], () => en.A.getGuildId(), []),
        o = (0, f.bG)([rG.A], () => rG.A.getGuild(s), [s]),
        d = (0, f.bG)([iA.default], () => iA.default.getCurrentUser(), []),
        c = (0, f.bG)([l1.Ay], () => null != d && null != s && (l1.Ay.getMember(s, d.id)?.isPending ?? !1), [d, s]),
        u = (0, f.bG)([au.Ay], () => au.Ay.getState().section, []),
        _ = (0, f.bG)([cb.A], () => cb.A.getHomeLink(), []),
        A = (0, f.bG)([c_.A], () => c_.A.isConnected(), []),
        [h, E] = (0, f.yK)([eL.Ay], () => [eL.Ay.isVideoEnabled(), eL.Ay.isScreenSharing()], []),
        I = (0, f.bG)([rF.A], () => rF.A.getPrimaryActivity(), []),
        { currentGame: g, currentNonGame: C } = (0, f.cf)(
            [eN.Ay],
            () => ({
                currentGame: eN.Ay.getCurrentGameForAnalytics(),
                currentNonGame: eN.Ay.getCurrentNonGameForAnalytics(),
            }),
            [],
        ),
        T =
            0 === (e = (0, f.bG)([ch.Ay], () => ch.Ay.getChannels(s)[ch.I6] ?? [], [s])).length
                ? 0
                : e.filter((e) => {
                      let { channel: t } = e;
                      return rV.A.can(cA.kg(x.xBc.SEND_MESSAGES, x.xBc.VIEW_CHANNEL), t);
                  }).length,
        N = (0, f.bG)([cI.A], () => cI.A.getMessageRequestsCount(), []),
        S = {
            selectedChannelId: n,
            isNSFWChannel: a,
            selectedGuildId: s,
            friendsTabSection: u,
            homeLink: _,
            connected: A,
            videoEnabled: h,
            isScreenSharing: E,
            voiceChannelId: l?.id,
            voiceChannelGuildId: l?.getGuildId(),
            voiceChannelType: l?.type,
            voiceChannelBitrate: l?.bitrate,
            runningGame: g,
            runningGamePid: null != g ? g.pid : null,
            runningNonGame: C,
            gamePlatform: (0, r1.A)(I),
            gameName: null != I ? I.name : null,
            gameId: null != I ? I.application_id : null,
            gameExeName: null != g ? g.exeName : null,
            hasPreviewEnabled: o?.features.has(x.GuildFeatures.PREVIEW_ENABLED),
            isMemberPending: c,
            postableChannelCount: T,
            isTextInVoice: r,
            numMessageRequests: N,
        };
    return (
        !(function (e) {
            let t = m.useRef(e);
            m.useEffect(() => {
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
            m.useEffect(() => {
                n &&
                    null != l &&
                    ((0, t$.zV)(x.HAw.CHANNEL_OPENED, { ...(0, ce.p)(l), ...(0, t$.qL)(l), selected_guild_id: s }),
                    (0, ct.A)({ channelId: l }),
                    t.current.isTextInVoice &&
                        (0, t$.zV)(x.HAw.TEXT_IN_VOICE_OPENED, { channel_is_nsfw: t.current.isNSFWChannel }));
            }, [n, l, s]),
                m.useEffect(() => {
                    n &&
                        null == s &&
                        r === x.BVt.FRIENDS &&
                        (function (e) {
                            let { tab_opened: t, source: n } = e,
                                i = (0, cn.A)();
                            eu.default.track(x.HAw.FRIENDS_LIST_VIEWED, { tab_opened: t, source: n, ...i }),
                                (0, d9.k)(x.HAw.FRIENDS_LIST_VIEWED_CLICKSTREAM, {
                                    tab_opened: t ?? "tabless",
                                    num_friends: i.num_friends ?? 0,
                                    now_playing_visible: i.now_playing_visible ?? !1,
                                    now_playing_num_cards: i.now_playing_num_cards ?? 0,
                                });
                        })({ tab_opened: i });
                }, [n, i, r, s]),
                m.useEffect(() => {
                    if (n && null != s) {
                        let e = a ? { is_pending: a, preview_enabled: t.current.hasPreviewEnabled } : {},
                            n = rG.A.getGuild(en.A.getGuildId()),
                            i = (function (e) {
                                let { guildChannels: t } = cp.A.getGuildWithoutChangingGuildActionRows(e),
                                    n = new Set(),
                                    i = [];
                                return (
                                    t.forEachShownChannel(
                                        (e) => {
                                            !n.has(e.id) &&
                                                cm.Ay.hasUnread(e.id) &&
                                                !x.kvI.GUILD_VOCAL.has(e.type) &&
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
                                viewing_all_channels: !cO.Ay.isOptInEnabled(s),
                                num_recent_channels: cp.A.recentsChannelCount(s),
                                num_unread_channels: i.length,
                                unread_channel_ids: i,
                            };
                        if (
                            ((0, t$.zV)(x.HAw.GUILD_VIEWED, r),
                            (0, d9.k)(x.HAw.GUILD_VIEWED_CLICKSTREAM, { guild_id: s }),
                            (0, cd.ai)(s))
                        ) {
                            let e = co.o.getConfig({ location: "ChatAutoAnalytics" }).enabled,
                                t = cR.Ay.isPremiumExactly(iA.default.getCurrentUser(), a8.PremiumTypes.TIER_2),
                                n = (0, cs.Kg)();
                            (0, cs.U5)(n, cl.A.getFavoritesCount(), e, t);
                        }
                    }
                }, [n, s, a]);
            let o = m.useRef(!1);
            m.useEffect(() => {
                n &&
                    null == s &&
                    r === x.BVt.MESSAGE_REQUESTS &&
                    !o.current &&
                    ((o.current = !0),
                    eu.default.track(x.HAw.MESSAGE_REQUESTS_INITIALIZED, {
                        num_message_requests: t.current.numMessageRequests,
                    }));
            }, [n, s, r]);
        })(S),
        (0, p.jsx)(cw, { ...S })
    );
}
var cU = n(844222),
    cG = n(398590),
    cj = n(390435),
    ck = n(361158),
    cV = n(783775);
let cF = (0, t_.Fe)({
        createPromise: () => Promise.resolve().then(n.bind(n, 944771)),
        webpackId: 944771,
        name: "ComponentPlayground",
    }),
    cH = (0, t_.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("88342"),
                n.e("8018"),
                n.e("28136"),
                n.e("22547"),
                n.e("77602"),
                n.e("68587"),
                n.e("15373"),
                n.e("46291"),
                n.e("78888"),
            ]).then(n.bind(n, 608087)),
        webpackId: 608087,
        name: "ChannelSettings",
    }),
    cB = (0, t_.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("32292"),
                n.e("28367"),
                n.e("45174"),
                n.e("85519"),
                n.e("11871"),
                n.e("37266"),
                n.e("55057"),
                n.e("14976"),
                n.e("63229"),
                n.e("31988"),
                n.e("55343"),
                n.e("34983"),
                n.e("90161"),
                n.e("99717"),
                n.e("6698"),
                n.e("90184"),
                n.e("62597"),
                n.e("72822"),
                n.e("52803"),
                n.e("29890"),
                n.e("37440"),
                n.e("34735"),
                n.e("54350"),
                n.e("59275"),
            ]).then(n.bind(n, 507013)),
        webpackId: 507013,
        name: "CollectiblesShop",
    }),
    cY = (0, t_.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("32292"),
                n.e("49681"),
                n.e("96382"),
                n.e("20044"),
                n.e("28367"),
                n.e("45174"),
                n.e("85519"),
                n.e("11871"),
                n.e("37266"),
                n.e("55057"),
                n.e("14976"),
                n.e("63229"),
                n.e("31988"),
                n.e("55343"),
                n.e("88342"),
                n.e("8555"),
                n.e("40142"),
                n.e("60161"),
                n.e("98765"),
                n.e("65437"),
                n.e("34983"),
                n.e("92414"),
                n.e("95208"),
                n.e("72401"),
                n.e("47417"),
                n.e("19558"),
                n.e("58946"),
                n.e("76390"),
                n.e("93312"),
                n.e("95752"),
                n.e("87046"),
                n.e("90161"),
                n.e("31538"),
                n.e("34828"),
                n.e("99717"),
                n.e("6698"),
                n.e("98954"),
                n.e("227"),
                n.e("90184"),
                n.e("62718"),
                n.e("29594"),
                n.e("52286"),
                n.e("8018"),
                n.e("7637"),
                n.e("28136"),
                n.e("3025"),
                n.e("86674"),
                n.e("4009"),
                n.e("49862"),
                n.e("80093"),
                n.e("22547"),
                n.e("60989"),
                n.e("82486"),
                n.e("77602"),
                n.e("68587"),
                n.e("86546"),
                n.e("15373"),
                n.e("42749"),
                n.e("56026"),
                n.e("16301"),
                n.e("22191"),
                n.e("46411"),
                n.e("25961"),
                n.e("44935"),
                n.e("13848"),
                n.e("62890"),
                n.e("46291"),
                n.e("41068"),
                n.e("32347"),
                n.e("8458"),
                n.e("15666"),
                n.e("11810"),
                n.e("95765"),
                n.e("31742"),
                n.e("49036"),
                n.e("98700"),
            ]).then(n.bind(n, 422559)),
        webpackId: 422559,
        name: "GuildSettings",
    }),
    c$ = {
        [x.zgK.CHANNEL_SETTINGS]: () => (0, p.jsx)(cH, {}),
        [x.zgK.GUILD_SETTINGS]: () => (0, p.jsx)(cY, {}),
        [x.zgK.COLLECTIBLES_SHOP]: () => (0, p.jsx)(cB, {}),
        [x.zgK.COMPONENT_PLAYGROUND]: () => (0, p.jsx)(cF, {}),
    },
    cW = "SHOWN",
    cz = "HIDDEN",
    cK = { friction: 10, tension: 100 };
function cq() {
    return m.useEffect(() => (eB.A.enable(), eB.A.enableTemp(cj.w), () => eB.A.disableTemp()), []), null;
}
class cX extends m.PureComponent {
    containerRef = m.createRef();
    static getDerivedStateFromProps(e, t) {
        return e.mode !== t.mode ? { animating: !0, mode: e.mode } : null;
    }
    static defaultProps = { baseLayer: !1 };
    static contextType = cU.C;
    constructor(e) {
        super(e);
        let t = 1,
            n = 1;
        e.mode === cz && ((t = 0.93), (n = 0)),
            (this.state = { animating: !1, scale: new le.A.Value(t), opacity: new le.A.Value(n), mode: e.mode });
    }
    componentDidUpdate(e) {
        let { mode: t } = this.props,
            { mode: n } = e;
        if (t !== n) {
            if (t === cW && n === cz) return this.animateIn();
            if (t === cz && n === cW) return this.animateUnder();
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
        f.Ay.Emitter.pause(500);
        let { opacity: t, scale: n } = this.state;
        le.A.parallel([le.A.spring(t, { toValue: 1, ...cK }), le.A.spring(n, { toValue: 1, ...cK })]).start(() =>
            this.animateComplete(e),
        );
    }
    animateOut(e) {
        f.Ay.Emitter.pause(500);
        let { opacity: t, scale: n } = this.state;
        le.A.parallel([le.A.spring(t, { toValue: 0, ...cK }), le.A.spring(n, { toValue: 1.1, ...cK })]).start(() => {
            e(), t0._.dispatch(x.jej.LAYER_POP_COMPLETE);
        });
    }
    animateUnder() {
        f.Ay.Emitter.pause(500);
        let { opacity: e, scale: t } = this.state;
        le.A.parallel([le.A.spring(e, { toValue: 0, ...cK }), le.A.spring(t, { toValue: 0.93, ...cK })]).start(() =>
            this.animateComplete(),
        );
    }
    animateComplete(e) {
        this.setState({ animating: !1 }, e);
    }
    render() {
        let { animating: e } = this.state,
            { name: t, mode: n, children: i, baseLayer: r, ...a } = this.props,
            l = n === cz,
            s = e || l ? this.getAnimatedStyle() : null,
            o = !l && !r,
            d = (0, p.jsx)(le.A.div, {
                ref: (e) => (this.containerRef.current = null != e ? e.componentRef : void 0),
                "data-layer": t ?? "base",
                "aria-hidden": l,
                "aria-modal": o,
                "aria-label": o
                    ? (function (e) {
                          switch (e) {
                              case x.zgK.CHANNEL_SETTINGS:
                                  return j.intl.string(j.t.XPDhcc);
                              case x.zgK.COLLECTIBLES_SHOP:
                                  return j.intl.string(j.t.pWG4ze);
                              case x.zgK.COMPONENT_PLAYGROUND:
                                  return "Component Playground";
                              default:
                                  return "";
                          }
                      })(t)
                    : void 0,
                role: o ? "dialog" : void 0,
                className: ti()(cV.qd, { [cV.n3]: r, [cV.bW]: e, "stop-animations": n === cz }),
                style: s,
                ...a,
                children: i,
            });
        return r ? d : (0, p.jsx)(sy.O, { containerRef: this.containerRef, children: d });
    }
    getAnimatedStyle() {
        let { baseLayer: e } = this.props,
            { opacity: t, scale: n } = this.state,
            { reducedMotion: i } = this.context;
        return { opacity: t, transform: i.enabled || e ? void 0 : [{ scale: n }, { translateZ: 0 }] };
    }
}
class cZ extends m.PureComponent {
    componentDidMount() {
        t0._.subscribe(x.jej.LAYER_POP_ESCAPE_KEY, cG.jH);
    }
    componentWillUnmount() {
        t0._.unsubscribe(x.jej.LAYER_POP_ESCAPE_KEY, cG.jH);
    }
    renderLayers() {
        let { children: e, layers: t, hasFullScreenLayer: n } = this.props,
            { length: i } = t,
            r = [];
        return (
            r.push((0, p.jsx)(cX, { mode: 0 !== i || n ? cz : cW, baseLayer: !0, children: e }, "layer-base")),
            t.forEach((e, t) => r.push(this.renderComponent(e, t, i))),
            r
        );
    }
    renderComponent(e, t, n) {
        let i;
        return (
            (i = "string" == typeof e ? c$[e]() : (0, p.jsx)(e, {})),
            (0, p.jsxs)(
                cX,
                {
                    name: "string" == typeof e ? e : void 0,
                    mode: t === n - 1 ? cW : cz,
                    children: [(0, p.jsx)(cq, {}), i],
                },
                `layer-${t}`,
            )
        );
    }
    renderArtisanalHack() {
        return (0, p.jsx)(to.N, {
            theme: this.props.sidebarTheme,
            children: (e) => (0, p.jsx)("div", { className: ti()(cV.bg, e) }),
        });
    }
    render() {
        return (0, p.jsxs)(p.Fragment, {
            children: [
                this.renderArtisanalHack(),
                (0, p.jsx)(lS.F, {
                    component: "div",
                    className: ti()(cV.ZF, this.props.className),
                    children: this.renderLayers(),
                }),
            ],
        });
    }
}
function cQ(e) {
    let t = (0, lQ.NC)(),
        n = (0, f.bG)([t3.A], () => t3.A.getLayers()),
        i = (0, ck.xr)(
            (e) => e.fullScreenLayers.length > 0 && !e.fullScreenLayers.some((e) => e.options.showAppUnderLayer),
        );
    return (0, p.jsx)(cZ, { ...e, sidebarTheme: t, layers: n, hasFullScreenLayer: i });
}
var cJ = n(107715);
let c0 = m.memo(function () {
    let e,
        t,
        n = (0, eF.A)(),
        i = m.useRef(null),
        r = m.useCallback((e) => {
            let { duration: t, intensity: n } = e;
            if (B.A.useReducedMotion || !ey.A.isFocused()) return;
            let { current: r } = i;
            eM()(null != r, "Shakeable is shaken when not mounted"), r.shake(t, n);
        }, []);
    return (
        m.useEffect(() => (eB.A.setLayout(eH.Ay), eB.A.enable(), () => eB.A.disable()), []),
        m.useEffect(
            () => (
                t0._.subscribe(x.jej.SHAKE_APP, r),
                () => {
                    t0._.unsubscribe(x.jej.SHAKE_APP, r);
                }
            ),
            [r],
        ),
        (e = (0, f.bG)([eJ.A], () => eJ.A.hasIncomingCalls())),
        (t = (0, f.bG)([eX.default, eQ.A, eZ.A, eK.A], () => {
            let e = eX.default.getTotalMentionCount(),
                t = (0, eq.dH)([eQ.A, eK.A]),
                n = eX.default.hasAnyUnread(),
                i = eZ.A.getDisableUnreadBadge(),
                r = e + t;
            return 0 === r && n && !i && (r = -1), r;
        })),
        m.useEffect(() => {
            if (!e) return;
            let t = e0.Ay.bounceDock("critical"),
                n = (0, e1.iA)({ messages: [j.intl.string(j.t["fk1/bX"])], count: 50 });
            return () => {
                t?.(), n();
            };
        }, [e]),
        m.useEffect(() => {
            e6(t);
        }, [t]),
        m.useEffect(() => () => e6(0), []),
        (0, p.jsxs)(ej, {
            ref: i,
            className: cJ.y,
            children: [
                (0, p.jsx)(cQ, { className: cJ.Z, children: (0, p.jsx)(d5, {}) }),
                (0, p.jsx)(tt, {}),
                (0, p.jsx)(eV.A, {}),
                (0, p.jsx)(cM, {}),
                (0, p.jsx)(d3.A, {}),
                !n && (0, p.jsx)(ek.S, {}),
            ],
        })
    );
});
var c1 = n(148803),
    c2 = n(693477);
{
    let e = n(154323).A;
    i = () => e.get("shop_include_unpublished");
}
class c6 extends Z.A {
    _initialize() {
        X.h.subscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen);
    }
    _terminate() {
        X.h.unsubscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen);
    }
    handlePostConnectionOpen() {
        let e = i();
        (0, c2.LX)({ release: e ? c1.P.BETA : c1.P.PROD });
    }
}
let c5 = new c6();
var c3 = n(347481),
    c4 = n(617617),
    c8 = n(792205);
let c7 = { ignoredDevices: {} },
    c9 = c7,
    ue = !1,
    ut = {},
    un = {},
    ui = {},
    ur = { id: null, justChanged: !1 },
    ua = { id: null, justChanged: !1 },
    ul = /\((.+)\)\s*$/;
function us(e) {
    if ((0, G.getPlatform)() === G.PlatformTypes.WINDOWS) {
        let t = e.name.match(ul);
        if (null != t) return t[1];
    }
    return e.name;
}
function uo(e, t, n) {
    return null == e || e.displayName !== t
        ? { displayName: t, type: n }
        : (e.type === c8.E.INPUT && n === c8.E.OUTPUT) || (e.type === c8.E.OUTPUT && n === c8.E.INPUT)
          ? { displayName: t, type: c8.E.INPUT_AND_OUTPUT }
          : e;
}
class ud extends f.Ay.DeviceSettingsStore {
    static displayName = "ConnectedDeviceStore";
    static persistKey = "ConnectedDeviceStore";
    static migrations = [(e) => (null == e.ignoredDevices ? { ...e, ignoredDevices: {} } : e)];
    initialize(e) {
        this.waitFor(eL.Ay, c4.A), (c9 = e ?? c7);
    }
    getUserAgnosticState() {
        return c9;
    }
    get initialized() {
        return ue;
    }
    get lastDeviceConnected() {
        return ui;
    }
    get inputDevices() {
        return ut;
    }
    get lastInputSystemDevice() {
        return ur;
    }
    get outputDevices() {
        return un;
    }
    get lastOutputSystemDevice() {
        return ua;
    }
}
let uc = new ud(X.h, {
        MEDIA_ENGINE_DEVICES: function (e) {
            let { inputDevices: t, outputDevices: n } = e,
                i = {};
            (ur.justChanged = !1),
                t.forEach((e) => {
                    if (((i[us(e)] = e.id), e.id === eO.dx)) {
                        let t = e.originalId ?? e.originalName;
                        t !== ur.id && (ur.justChanged = !0), (ur.id = t);
                    }
                });
            let r = {};
            if (
                ((ua.justChanged = !1),
                n.forEach((e) => {
                    if (((r[us(e)] = e.id), e.id === eO.dx)) {
                        let t = e.originalId ?? e.originalName;
                        t !== ua.id && (ua.justChanged = !0), (ua.id = t);
                    }
                }),
                !ue)
            ) {
                (ut = i), (un = r), (ue = !0);
                return;
            }
            let a = Object.keys(ut),
                l = Object.keys(i),
                s = Object.keys(un),
                o = Object.keys(r),
                d = eG().difference(a, l),
                c = eG().difference(s, o);
            return (
                d.length > 0 || c.length > 0
                    ? (ui = {})
                    : (eG()
                          .difference(l, a)
                          .forEach((e) => {
                              ui[e] = uo(ui[e], e, c8.E.INPUT);
                          }),
                      eG()
                          .difference(o, s)
                          .forEach((e) => {
                              ui[e] = uo(ui[e], e, c8.E.OUTPUT);
                          })),
                !(eG().isEqual(a, l) && eG().isEqual(s, o)) && ((ut = i), (un = r), !0)
            );
        },
        CONNECTED_DEVICE_SWITCH: function (e) {
            let { displayName: t, connectedDevicePreference: n, location: i } = e;
            if (n === c8.f.INPUT || n === c8.f.INPUT_AND_OUTPUT) {
                let e = ut[t];
                null != e && X.h.wait(() => eT.A.setInputDevice(e, { location: i }));
            }
            if (n === c8.f.OUTPUT || n === c8.f.INPUT_AND_OUTPUT) {
                let e = un[t];
                X.h.wait(() => eT.A.setOutputDevice(e, { location: i }));
            }
            delete ui[t];
        },
        CONNECTED_DEVICE_DONT_SWITCH: function (e) {
            let { displayName: t } = e;
            delete ui[t];
        },
        CONNECTED_DEVICE_IGNORE: function (e) {
            let { displayName: t } = e;
            (c9.ignoredDevices[t] = !0), delete ui[t];
        },
        CONNECTED_DEVICE_NEVER_SHOW_MODAL: function () {
            (ui = {}), (c9.neverShowModal = !0);
        },
    }),
    uu = new Set(["DisplayPort"]),
    u_ = "connected-device-modal";
function uA() {
    let e;
    if ((0, T.hasModalOpen)(u_)) return;
    let t = eL.Ay.getInputDeviceId(),
        i = eL.Ay.getOutputDeviceId();
    if (uc.getState().neverShowModal || eG().isEmpty(uc.lastDeviceConnected)) return;
    let r = us(eL.Ay.getInputDevices()[t]),
        a = us(eL.Ay.getOutputDevices()[i]);
    if (eG().some(uc.lastDeviceConnected, (e) => uu.has(e.displayName) || e.displayName === r || e.displayName === a))
        return;
    let l = eG().some(
        uc.lastDeviceConnected,
        (e) => c3.A.isCertified(uc.inputDevices[e.displayName]) || c3.A.isCertified(uc.outputDevices[e.displayName]),
    );
    if (
        ((t === eO.dx && uc.lastInputSystemDevice.justChanged) ||
            (i === eO.dx && uc.lastOutputSystemDevice.justChanged)) &&
        !l
    )
        return;
    let s = eG().first(Object.keys(uc.lastDeviceConnected)),
        o = null != s && "" !== s ? uc.lastDeviceConnected[s] : null;
    null == o ||
        uc.getState().ignoredDevices[o.displayName] ||
        (uc.initialized &&
            null != s &&
            (c3.A.isCertified(uc.inputDevices[s])
                ? (e = c3.A.getCertifiedDevice(uc.inputDevices[s]))
                : c3.A.isCertified(uc.outputDevices[s]) && (e = c3.A.getCertifiedDevice(uc.outputDevices[s]))),
        (0, T.openModalLazy)(
            async () => {
                let { default: t } = await n.e("65573").then(n.bind(n, 442468));
                return (n) => {
                    let { transitionState: i, onClose: r } = n;
                    return (0, p.jsx)(t, { device: o, certifiedDeviceMetadata: e, transitionState: i, onClose: r });
                };
            },
            { modalKey: u_ },
        ));
}
let uh = {
        init() {
            uc.addChangeListener(uA);
        },
    },
    uE = "CONNECTIONS_GRID_MODAL_KEY";
class up extends Z.A {
    _initialize() {
        X.h.subscribe("CONNECTIONS_GRID_MODAL_SHOW", this.handleShow),
            X.h.subscribe("CONNECTIONS_GRID_MODAL_HIDE", this.handleHide);
    }
    _terminate() {
        X.h.unsubscribe("CONNECTIONS_GRID_MODAL_SHOW", this.handleShow),
            X.h.unsubscribe("CONNECTIONS_GRID_MODAL_HIDE", this.handleHide);
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
        (0, T.hasModalOpen)(uE) ||
            (0, T.openModalLazy)(async () => {
                let { default: e } = await n.e("95198").then(n.bind(n, 58829));
                return (n) =>
                    (0, p.jsx)(e, {
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
        (0, T.closeModal)(uE);
    }
}
let um = new up();
var uI = n(480900),
    ug = n(293260);
class uC extends Z.A {
    _initialize() {
        X.h.subscribe("GUILD_ROLE_CONNECTIONS_MODAL_SHOW", this.handleShow);
    }
    _terminate() {
        X.h.unsubscribe("GUILD_ROLE_CONNECTIONS_MODAL_SHOW", this.handleShow);
    }
    handleShow(e) {
        let { role: t, guildId: n } = e;
        (0, T.hasModalOpen)("GUILD_ROLE_CONNECTIONS_MODAL_KEY") ||
            (null != t && t.tags?.guild_connections === null ? (0, uI.b)(t, n) : (0, ug.c0)(n));
    }
}
let uf = new uC();
var uT = n(793943),
    uN = n(746793),
    uS = n(272613);
class uL extends Z.A {
    _initialize() {
        X.h.subscribe("POST_CONNECTION_OPEN", this._maybeStartDevSession),
            X.h.subscribe("BILLING_STANDALONE_INITIALIZED", this._maybeStartDevSession),
            X.h.subscribe("LOGOUT", this._maybeStopDevSession);
    }
    _terminate() {
        X.h.unsubscribe("POST_CONNECTION_OPEN", this._maybeStartDevSession),
            X.h.unsubscribe("BILLING_STANDALONE_INITIALIZED", this._maybeStartDevSession),
            X.h.unsubscribe("LOGOUT", this._maybeStopDevSession);
    }
    _maybeStartDevSession() {
        if (null == window.DiscordDevSession || !0 !== window.__METICULOUS_ENABLED) return;
        let e = "production" === window.GLOBAL_ENV.PROJECT_ENV,
            t = iA.default.getCurrentUser();
        t?.email == null ||
            (e && t.isStaff()) ||
            (t.username.startsWith("mtcls") || !e ? window.DiscordDevSession.start() : window.DiscordDevSession.stop());
    }
    _maybeStopDevSession() {
        null != window.DiscordDevSession && window.DiscordDevSession.started && window.DiscordDevSession.stop();
    }
}
let uy = new uL();
var uO = n(963169),
    ub = n(422258);
function uv(e) {
    let {
        channel: { id: t },
    } = e;
    (0, ub.i_)(t, { trackAnalytics: !1 });
}
class uR extends Z.A {
    _initialize() {
        X.h.subscribe("CHANNEL_DELETE", uv);
    }
    _terminate() {
        X.h.unsubscribe("CHANNEL_DELETE", uv);
    }
}
let uP = new uR();
var uD = n(367727),
    ux = n(853742);
class uw extends Z.A {
    _initialize() {
        X.h.subscribe("CHANNEL_SELECT", this.handleChannelSelect);
    }
    _terminate() {
        X.h.unsubscribe("CHANNEL_SELECT", this.handleChannelSelect);
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
            ((t = rG.A.getGuild(s)),
            (i = !!t?.features.has(x.GuildFeatures.COMMUNITY)),
            (r = rV.A.can(x.xBc.MANAGE_CHANNELS, t)),
            (a = (0, iZ.k8)(nX.M.FORUM_CHANNEL_UPSELL_MODAL)),
            (l = rU.A.getMemberCount(s) ?? 0),
            !i || !r || a || !(l >= 200))
        )
            return;
        (0, ux.zd)(), (0, uD.Vh)(nX.M.FORUM_CHANNEL_UPSELL_MODAL);
        let o = function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tN.i.DISMISS;
            (0, iZ.Dr)(nX.M.FORUM_CHANNEL_UPSELL_MODAL, { dismissAction: e });
        };
        (0, T.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([n.e("90052"), n.e("43051")]).then(n.bind(n, 653682));
                return (t) =>
                    (0, p.jsx)(e, {
                        ...t,
                        onClose: (e) => {
                            o(e), t.onClose();
                        },
                        guildId: s,
                        shouldUpsellCreation: !0,
                    });
            },
            {
                onCloseCallback: () => (0, iZ.Dr)(nX.M.FORUM_CHANNEL_UPSELL_MODAL, { dismissAction: tN.i.DISMISS }),
                onCloseRequest: x.FXj,
            },
        );
    }
}
let uM = new uw();
var uU = n(208207);
class uG extends Z.A {
    _initialize() {
        X.h.subscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen);
    }
    _terminate() {
        X.h.unsubscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen);
    }
    handlePostConnectionOpen = () => {
        let e = eK.A.getGameRelationships(),
            t = new Set();
        e.values().forEach((e) => {
            e.type === x.eA$.PENDING_INCOMING && t.add(e.applicationId);
        }),
            i$.Ay.fetchApplications(Array.from(t));
    };
    destroy() {
        X.h.unsubscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen);
    }
}
let uj = new uG(),
    uk = {};
function uV(e) {
    let { name: t, hash: n, missingData: i } = e;
    for (let e of (cL.A.markGameReported(t), i))
        if ("icon" === e) {
            let e = uk[t];
            null != e && rv.Ay.uploadIcon(t, n, e);
            return;
        } else new ca.A("GameStoreIconManager").log(`Could not find missing data key: ${e}`);
}
function uF(e) {
    let { gameName: t, icon: n } = e;
    uk[t] = n;
}
let uH = {
    initialize() {
        X.h.subscribe("UNVERIFIED_GAME_UPDATE", uV), X.h.subscribe("GAME_ICON_UPDATE", uF);
    },
};
var uB = n(738533);
function uY(e) {
    let t,
        n,
        { gameId: i } = e;
    (t = rx.A.launchableGames[i]),
        (null != (n = iW.A.getApplication(i)) ? uB.A.isLaunchable(n) : uB.A.isGameLaunchable(i)).then((e) => {
            e !== t && X.h.dispatch({ type: "GAME_LAUNCHABLE_UPDATE", gameId: i, isLaunchable: e });
        });
}
let u$ = {
    initialize() {
        X.h.subscribe("CHECK_LAUNCHABLE_GAME", uY);
    },
};
var uW = n(147964);
let uz = {
    init() {
        rj.A.whenInitialized(() => {
            null != uW.A.testModeApplicationId && (0, b.q1)(uW.A.testModeApplicationId, uW.A.testModeOriginURL);
        });
    },
};
var uK = n(92077);
function uq() {
    if (!(0, r$.S)()) return;
    let e = D.default.getToken(),
        t = D.default.getId();
    if (null == e) throw Error("missing user token");
    uK.Ts(e, t);
}
function uX() {
    uK.zr();
}
let uZ = {
    init() {
        X.h.subscribe("CONNECTION_OPEN", uq), X.h.subscribe("LOGOUT", uX);
    },
};
var uQ = n(507263),
    uJ = n(376728),
    u0 = n(970163);
async function u1(e) {
    let { code: t } = e,
        i = (await (0, u0.A)(t)).invite;
    if (null == i || null == i.guild) return;
    let r = i.guild.id,
        a = l1.Ay.getMember(r, D.default.getId()),
        l = !1;
    if (null != a && null != i.roles && i.roles.length > 0) {
        let e = new Set(a.roles ?? []);
        l = i.roles.some((t) => !e.has(t.id));
    }
    if (null == a || l) return void X.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: i, code: t, context: x.BRT.APP });
    let { default: s } = await Promise.resolve().then(n.bind(n, 608401));
    await s({ guildId: r }), uJ.Ay.transitionToInvite(i, void 0, !0);
}
var u2 = n(997509),
    u6 = n(268313),
    u5 = n(567249),
    u3 = n(998740);
function u4(e) {
    return `haven:${e}`;
}
function u8() {
    let e = r;
    if (null == e) return !1;
    let t = u4(e);
    if (!t4.A.isOpen(t)) return !1;
    let n = t4.A.pipHavenWindow;
    if (null == n || n.id !== t) return (r = null), !1;
    X.h.wait(() => tJ.VN(t)), (r = null);
}
function u7() {
    return t3.A.hasLayers();
}
function u9() {
    let e,
        t,
        n = e4.A.getChannelId(),
        i = null != n ? i9.A.getChannel(n) : null;
    if (
        ((e = e4.A.getChannelId()),
        (t = et.A.getChannelId()),
        null == e || !u3.A.isUserConnected(e) || e === t || u5.A.getWindowOpen(x.MLl.CHANNEL_CALL_POPOUT) || 0)
    )
        return u8();
    if (null != i && u3.A.isUserConnected(i.id)) {
        if (r !== i.id) {
            let e = u4(i.id);
            if (t4.A.isOpen(e)) return !1;
            if (null != r) {
                let e = r;
                X.h.wait(() => tJ.VN(e));
            }
            return (
                X.h.wait(() => {
                    tJ.ho(e, x.o1q.HAVEN, { channel: i }), u7() && tJ.jD(e);
                }),
                (r = i.id),
                !0
            );
        }
        return !1;
    }
    return u8();
}
function _e() {
    if (u7()) {
        let e = void 0 ?? r;
        if (null == e) return;
        let t = u4(e);
        t4.A.isOpen(t) && X.h.wait(() => tJ.jD(t));
        return;
    }
    let e = void 0 ?? r;
    if (null == e) return;
    let t = u4(e);
    t4.A.isOpen(t) && X.h.wait(() => tJ.WU(t));
}
class _t extends Z.A {
    _initialize() {
        et.A.addChangeListener(u9),
            en.A.addChangeListener(u9),
            e4.A.addChangeListener(u9),
            rH.A.addChangeListener(u9),
            t3.A.addChangeListener(_e),
            u3.A.addChangeListener(u9),
            u5.A.addChangeListener(u9);
    }
    _terminate() {
        et.A.removeChangeListener(u9),
            en.A.removeChangeListener(u9),
            e4.A.removeChangeListener(u9),
            rH.A.removeChangeListener(u9),
            t3.A.removeChangeListener(_e),
            u3.A.removeChangeListener(u9),
            u5.A.removeChangeListener(u9);
    }
}
let _n = new _t(),
    _i = {
        init() {
            X.h.subscribe("VOICE_CHANNEL_SELECT", (e) => {
                let { channelId: t } = e;
                null == t && s2.sF(oJ._.VOICE_PANEL_INTRODUCTION);
            });
        },
    };
var _r = n(4106),
    _a = n(875448);
let _l = null;
class _s extends Z.A {
    _initialize() {
        X.h.subscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen);
    }
    _terminate() {
        X.h.unsubscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen);
    }
    handlePostConnectionOpen() {
        (0, _a.HF)("ICYMIManager") &&
            (!(function e() {
                let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                _r.A.fetchDehydrated({ isInitialLoad: t }),
                    null != _l && clearTimeout(_l),
                    (_l = setTimeout(() => e(), 15 * e_.A.Millis.MINUTE));
            })(!0),
            _r.A.getGuildChannelScores(),
            _r.A.getRecommendedGuilds());
    }
}
let _o = new _s();
var _d = n(684013),
    _c = n(55619),
    _u = n(734066),
    __ = n(572164),
    _A = n(399925),
    _h = n(652896),
    _E = n(299855),
    _p = n.n(_E),
    _m = n(157257),
    _I = n(997630),
    _g = n(905552),
    _C = n(325278),
    _f = n(140175),
    _T = n(528772),
    _N = n(944775),
    _S = n(351906),
    _L = n(532624),
    _y = n(773371),
    _O = n(427603);
let _b = new Map();
function _v(e, t, n, i) {
    if (!e4.A.isConnected()) return;
    let r = i.context ?? eO.x.DEFAULT,
        a = _b.get(r);
    null == a && ((a = { held: new Set(), priorityHeld: new Set() }), _b.set(r, a)),
        n || (e ? a.held.add(i.id) : a.held.delete(i.id)),
        t && (e ? a.priorityHeld.add(i.id) : a.priorityHeld.delete(i.id));
    let l = a.held.size > 0,
        s = a.priorityHeld.size > 0;
    (0, _f.N)(l, s);
}
let _R = {
    [x.hCu.TOGGLE_PRIORITY_SPEAKER]: { onTrigger() {}, keyEvents: {} },
    [x.hCu.UNASSIGNED]: { onTrigger() {}, keyEvents: {} },
    [x.hCu.PUSH_TO_TALK]: {
        onTrigger(e, t) {
            eL.Ay.getMode(t.context) === x.TBI.PUSH_TO_TALK &&
                ((_R[x.hCu.PUSH_TO_TALK].isPressed = e), _v(e, !1, !1, t));
        },
        keyEvents: { keyup: !0, keydown: !0 },
        isPressed: !1,
    },
    [x.hCu.PUSH_TO_TALK_PRIORITY]: {
        onTrigger(e, t) {
            eL.Ay.getMode() === x.TBI.PUSH_TO_TALK &&
                ((_R[x.hCu.PUSH_TO_TALK_PRIORITY].isPressed = e), _v(e, !0, !1, t));
        },
        keyEvents: { keyup: !0, keydown: !0 },
        isPressed: !1,
    },
    [x.hCu.VAD_PRIORITY]: {
        onTrigger(e, t) {
            eL.Ay.getMode() === x.TBI.VOICE_ACTIVITY && ((_R[x.hCu.VAD_PRIORITY].isPressed = e), _v(e, !0, !0, t));
        },
        keyEvents: { keyup: !0, keydown: !0 },
        isPressed: !1,
    },
    [x.hCu.PUSH_TO_MUTE]: {
        onTrigger(e) {
            eL.Ay.getMode() === x.TBI.VOICE_ACTIVITY &&
                ((_R[x.hCu.PUSH_TO_MUTE].isPressed = e), eT.A.setTemporarySelfMute(e));
        },
        keyEvents: { keyup: !0, keydown: !0 },
        isPressed: !1,
    },
    [x.hCu.TOGGLE_MUTE]: {
        onTrigger: () => eT.A.toggleSelfMute({ usedKeybind: !0, location: "Custom Keybind" }),
        keyEvents: { keyup: !0, keydown: !1 },
    },
    [x.hCu.TOGGLE_DEAFEN]: {
        onTrigger: () => eT.A.toggleSelfDeaf({ usedKeybind: !0, location: "Custom Keybind" }),
        keyEvents: { keyup: !0, keydown: !1 },
    },
    [x.hCu.TOGGLE_CAMERA]: {
        onTrigger: () =>
            (function () {
                let e = eL.Ay.isVideoEnabled(),
                    t = Object.values(eL.Ay.getVideoDevices())[0],
                    n = t?.disabled ?? !0,
                    i = eL.Ay.supportsInApp(eO.O5.VIDEO) && eL.Ay.supportsInApp(eO.O5.DESKTOP_CAPTURE),
                    r = i9.A.getChannel(e4.A.getChannelId()),
                    a = iA.default.getCurrentUser()?.id;
                if (null == r || null == a) return;
                let { reachedLimit: l } = (0, op.M)(r);
                if (!l) {
                    if (r.isGuildStageVoice()) {
                        let e = os.A.getMutableParticipants(r.id, oo.ip.SPEAKER),
                            t = e?.find((e) => {
                                let { user: t } = e;
                                return t.id === a;
                            });
                        if (!(0, od.Bw)(r.guild_id) || !i || null == t || t.voiceState.suppress) return;
                    }
                    return (
                        e
                            ? eT.A.setVideoEnabled(!1)
                            : !1 === n
                              ? (0, oT.A)(
                                    () => {
                                        eT.A.setVideoEnabled(!0);
                                    },
                                    x.BRT.APP,
                                    !0,
                                )
                              : (0, og.A)(),
                        !1
                    );
                }
            })(),
        keyEvents: { keyup: !0, keydown: !1 },
    },
    [x.hCu.TOGGLE_VOICE_MODE]: {
        onTrigger() {
            let e = eL.Ay.getMode() === x.TBI.PUSH_TO_TALK ? x.TBI.VOICE_ACTIVITY : x.TBI.PUSH_TO_TALK;
            eT.A.setMode(e);
        },
        keyEvents: { keyup: !0, keydown: !1 },
    },
    [x.hCu.TOGGLE_OVERLAY]: { onTrigger() {}, keyEvents: { keyup: !0, keydown: !1 } },
    [x.hCu.TOGGLE_OVERLAY_INPUT_LOCK]: {
        onTrigger(e, t) {
            if (!(0, _L.DV)(t.shortcut)) return;
            let n = (0, _O.A)();
            null != n && _d.A.setInputLocked(!cv.default.isLocked(n), n);
        },
        keyEvents: { keyup: !0, keydown: !1 },
    },
    [x.hCu.OVERLAY_ACTIVATE_REGION_TEXT_WIDGET]: {
        onTrigger() {
            let e = _y.default.getFocusedPID(),
                t = null != e;
            null != e &&
                t &&
                cv.default.isPinned(x.uss.TEXT) &&
                cv.default.isLocked(e) &&
                _y.default.isReady(e) &&
                _d.A.activateRegion(x.ajI.TEXT_WIDGET);
        },
        keyEvents: { keyup: !0, keydown: !1 },
    },
    [x.hCu.TOGGLE_GO_LIVE_STREAMING]: {
        onTrigger() {
            let e = oS.A.getCurrentUserActiveStream();
            if (null != e) return (0, ip.vN)((0, _h._z)(e));
            !(function () {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                if (!(0, s0.A)(eL.Ay) || null != oS.A.getCurrentUserActiveStream()) return;
                let n = et.A.getVoiceChannelId(),
                    i = i9.A.getChannel(n);
                if (null == i) return;
                let r = i.getGuildId();
                if ((0, i1.vz)(i, rG.A, rV.A, !1))
                    if (eL.Ay.getUseSystemScreensharePicker())
                        (0, G.isMac)() && _p().satisfies(d7.A?.os.release, _C.WZ) ? (0, _I.a)() : (0, _I.a)("window");
                    else {
                        let n = (0, _g.A)(eN.Ay, _m.A);
                        if (null == n || (n.isLauncher && !e)) return;
                        (0, ip.XI)(r, i.id, { pid: n.pid, analyticsLocations: t });
                    }
            })(!0, [eC.A.GO_LIVE_KEYBIND]);
        },
        keyEvents: { keyup: !0, keydown: !1 },
    },
    [x.hCu.TOGGLE_STREAMER_MODE]: {
        onTrigger() {
            _c.A.setEnabled(!_S.A.enabled);
        },
        keyEvents: { keyup: !0, keydown: !1 },
    },
    [x.hCu.NAVIGATE_BACK]: {
        onTrigger: () => (0, uO.OE)("global_keybind"),
        keyEvents: { keyup: !0, keydown: !1, focused: !0, blurred: !1 },
    },
    [x.hCu.NAVIGATE_FORWARD]: {
        onTrigger: () => (0, uO.Qb)("global_keybind"),
        keyEvents: { keyup: !0, keydown: !1, focused: !0, blurred: !1 },
    },
    [x.hCu.SOUNDBOARD]: {
        onTrigger: () => {
            let e = (0, _O.A)();
            if (null != e)
                if (_T.A.enabled) (0, _N.Lk)(e);
                else {
                    if (!(0, s8.lI)()) return;
                    (0, _N.hK)(!0, e);
                }
        },
        keyEvents: { keyup: !0, keydown: !1 },
    },
    [x.hCu.SOUNDBOARD_HOLD]: {
        onTrigger: (e) => {
            let t = (0, _O.A)();
            if (null != t) {
                if (e) {
                    if (!(0, s8.lI)()) return;
                    (0, _N.hK)(!1, t);
                } else (0, _N.Lk)(t);
                return;
            }
        },
        keyEvents: { keyup: !0, keydown: !0 },
    },
    [x.hCu.SAVE_CLIP]: {
        onTrigger: () => {
            (0, __.TD)() && (eu.default.track(x.HAw.CLIP_SAVE_KEYBIND_PRESSED), (0, _A.l0)());
        },
        keyEvents: { keyup: !1, keydown: !0 },
    },
    [x.hCu.SAVE_SCREENSHOT]: {
        onTrigger: () => {
            !(0, __.TD)() || ((0, _u.cx)() && (eu.default.track(x.HAw.CLIP_SAVE_KEYBIND_PRESSED), (0, _A.yT)()));
        },
        keyEvents: { keyup: !1, keydown: !0 },
    },
    [x.hCu.SWITCH_TO_VOICE_CHANNEL]: {
        onTrigger(e, t) {
            let {
                params: { channelId: n },
            } = t;
            null != n && O.default.selectVoiceChannel(n);
        },
        keyEvents: { keyup: !0, keydown: !1, blurred: !0, focused: !0 },
    },
    [x.hCu.DISCONNECT_FROM_VOICE_CHANNEL]: {
        onTrigger() {
            O.default.selectVoiceChannel(null);
        },
        keyEvents: { keyup: !0, keydown: !1, blurred: !0, focused: !0 },
    },
};
function _P() {
    _b.clear(), (0, _f.N)(!1, !1);
}
class _D extends Z.A {
    _initialize() {
        X.h.wait(() => X.h.dispatch({ type: "KEYBINDS_REGISTER_GLOBAL_KEYBIND_ACTIONS", keybinds: _R })),
            X.h.subscribe("AUDIO_SET_MODE", _P),
            X.h.subscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect);
    }
    _terminate() {
        X.h.unsubscribe("AUDIO_SET_MODE", _P), X.h.unsubscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect);
    }
    handleVoiceChannelSelect(e) {
        let { currentVoiceChannelId: t, channelId: n } = e;
        t !== n && _P();
    }
}
let _x = new _D();
var _w = n(913765),
    _M = n(942614),
    _U = n(315982),
    _G = n(202384),
    _j = n(709977),
    _k = n(14509),
    _V = n(894778),
    _F = n(225315),
    _H = n(684407),
    _B = n(919638),
    _Y = n(426620),
    _$ = n(771016),
    _W = n(994277);
n(436317);
var _z = n(315290);
function _K() {
    null != a && (0, T.closeModal)(a);
}
class _q extends Z.A {
    _initialize() {
        X.h.subscribe("CONNECTION_OPEN", this.handleConnectionOpen), X.h.subscribe("LOGOUT", _K);
    }
    _terminate() {
        X.h.unsubscribe("CONNECTION_OPEN", this.handleConnectionOpen), X.h.unsubscribe("LOGOUT", _K);
    }
    handleConnectionOpen() {
        var e;
        let t,
            i = _Y.A.getType();
        if (null == i) return;
        switch (i) {
            case _$.zY.INVITE_UNCLAIMED:
                _V.A.flowStart(_z.do.INVITE, _z.ju.NUF_STARTED);
                break;
            case _$.zY.ORGANIC_REGISTERED:
                _V.A.flowStart(_z.do.ORGANIC, _z.ju.NUF_STARTED);
                break;
            case _$.zY.MARKETING_UNCLAIMED:
                _V.A.flowStart(_z.do.ORGANIC_MARKETING, _z.ju.NUF_STARTED);
        }
        let r = !1,
            l = en.A.getGuildId();
        if (i === _$.zY.INVITE_UNCLAIMED) {
            let e = rG.A.getGuild(l);
            null != e && (0, _j.Qd)(e) && ((r = !0), (0, _F.Fy)(e.id));
        }
        let s = () => 0 === _B.A.totalGuilds && !G.isPlatformEmbedded,
            o = ei.xq();
        (e = [
            {
                key: "Unified NUF Modal",
                open: async function (e) {
                    let { default: t } = await n.e("74082").then(n.bind(n, 491380));
                    if (t.getConfig({ location: "nuf_manager" }).enabled) {
                        a = await (0, T.openModalLazy)(
                            async () => {
                                let { default: e } = await Promise.all([n.e("46881"), n.e("19183"), n.e("41879")]).then(
                                    n.bind(n, 923314),
                                );
                                return (t) => (0, p.jsx)(e, { ...t });
                            },
                            { onCloseRequest: x.tEg, onCloseCallback: e, modalKey: a },
                        );
                        return;
                    }
                    let i = (e) => {
                        switch (e) {
                            case _W.i.AGE_GATE:
                                _V.A.flowStep(_z.do.ANY, _z.ju.AGE_GATE);
                                break;
                            case _W.i.CHOOSE_TEMPLATE:
                                _V.A.flowStep(_z.do.ANY, _z.jC.GUILD_TEMPLATES);
                                break;
                            case _W.i.CUSTOMIZE_GUILD:
                                _V.A.flowStep(_z.do.ANY, _z.jC.GUILD_CREATE);
                                break;
                            case _W.i.CHANNEL_PROMPT:
                                _V.A.flowStep(_z.do.ANY, _z.jC.CHANNEL_PROMPT);
                                break;
                            case _W.i.JOIN_GUILD:
                                _V.A.flowStep(_z.do.ANY, _z.jC.JOIN_GUILD);
                                break;
                            case _W.i.CREATION_INTENT:
                                _V.A.flowStep(_z.do.ANY, _z.jC.CREATION_INTENT);
                                break;
                            case _W.i.COMPLETE:
                                _V.A.flowStep(_z.do.ANY, _z.jC.SUCCESS);
                                break;
                            case null:
                                break;
                            default:
                                rn.xb(e);
                        }
                    };
                    a = await (0, T.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.all([n.e("28367"), n.e("46881"), n.e("39539")]).then(
                                n.bind(n, 111185),
                            );
                            return (t) => (0, p.jsx)(e, { ...t, onSlideChange: i });
                        },
                        { onCloseRequest: x.tEg, onCloseCallback: e, modalKey: a },
                    );
                },
                predicate: () => s() && !0,
            },
            { key: "New User Age Gate", open: _U.v, predicate: () => o && !s() && !0 },
            {
                key: "Claim Account Modal",
                open: (e) => _U.R(G.isPlatformEmbedded, e),
                predicate: () =>
                    !r &&
                    null != iA.default.getCurrentUser() &&
                    !iA.default.getCurrentUser()?.isClaimed() &&
                    !(0, _k._9)(),
            },
            {
                key: "Verification Gate with Claim Account",
                open: (e) => (0, _G.Ze)(l, e ?? void 0),
                predicate: () => r && !iA.default.getCurrentUser()?.isClaimed() && !0,
            },
            {
                key: "Guild Welcome Modal",
                open: (e) =>
                    (0, T.openModalLazy)(
                        async () => {
                            let { default: e } = await n.e("10585").then(n.bind(n, 954784));
                            return (t) => (0, p.jsx)(e, { ...t, guildId: l });
                        },
                        { onCloseCallback: e },
                    ),
                predicate: () => null != l && null != _H.A.get(l) && _H.A.get(l) !== _H.E,
            },
        ]),
            (t = () => {
                _M.D(), _V.A.flowStep(_z.do.ANY, _z.ju.NUF_COMPLETE, !0);
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
let _X = new _q();
var _Z = n(682492),
    _Q = n(414736),
    _J = n(874486),
    _0 = n(927018),
    _1 = n(3137),
    _2 = n(559908);
let _6 = new Set();
class _5 extends Z.A {
    _initialize() {
        X.h.subscribe("MESSAGE_CREATE", this.handleMessageCreate),
            X.h.subscribe("POGGERMODE_SETTINGS_UPDATE", this.handleSettingsUpdate);
    }
    _terminate() {
        X.h.unsubscribe("MESSAGE_CREATE", this.handleMessageCreate),
            X.h.unsubscribe("POGGERMODE_SETTINGS_UPDATE", this.handleSettingsUpdate);
    }
    handleSettingsUpdate = (e) => {
        let { settings: t } = e;
        t.enabled ? (0, _Q._)(_0.sn.ENABLE_POGGERMODE) : !1 === t.enabled && (0, _Q._)(_0.sn.DISABLE_POGGERMODE),
            Object.keys(t).some((e) => e.startsWith("confetti")) && (0, _Q._)(_0.sn.CUSTOMIZE_CONFETTI);
    };
    handleMessageCreate = (e) => {
        let {
            channelId: t,
            message: { author: n, nonce: i, mentions: r },
        } = e;
        if (!_1.A.isEnabled()) return !1;
        let a = D.default.getId();
        if (
            (r?.find((e) => e.id === a) != null
                ? (0, _Q._)(_0.sn.PING_ME)
                : (r?.length ?? 0) > 0 && n?.id === a && (0, _Q._)(_0.sn.PING_SOMEONE),
            !(0, _2.gN)(n?.id, a, i, _6))
        )
            return !1;
        let { combo: l } = _2.Ay.getMostRecentMessageCombo(t) ?? {};
        if (null == l) return !1;
        Object.values(_0.sn).forEach((e) => {
            if (null != _J.A.getUnlocked(e)) return;
            let t = (0, _0.vM)(e),
                n = t?.checkUnlock;
            null == n || (!1 !== n(l) && (0, _Q._)(e));
        });
    };
}
let _3 = new _5();
var _4 = n(64585),
    _8 = n(139033);
class _7 extends Z.A {
    _initialize() {
        X.h.subscribe("POGGERMODE_TEMPORARILY_DISABLED", this.handlePoggermodeTemporarilyDisabled);
    }
    _terminate() {
        X.h.unsubscribe("POGGERMODE_TEMPORARILY_DISABLED", this.handlePoggermodeTemporarilyDisabled);
    }
    handlePoggermodeTemporarilyDisabled() {
        (0, _8.A)({ title: j.intl.string(j.t.wDQgnX), subtitle: j.intl.string(j.t.OJklbS) });
    }
}
let _9 = new _7();
var Ae = n(958005),
    At = n(574172);
n(41604);
let An = (0, t_.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("32292"),
                n.e("74968"),
                n.e("28367"),
                n.e("45174"),
                n.e("85519"),
                n.e("11871"),
                n.e("37266"),
                n.e("55057"),
                n.e("14976"),
                n.e("63229"),
                n.e("31988"),
                n.e("55343"),
                n.e("93103"),
                n.e("88342"),
                n.e("8555"),
                n.e("40142"),
                n.e("60161"),
                n.e("98765"),
                n.e("35313"),
                n.e("65437"),
                n.e("34983"),
                n.e("92414"),
                n.e("95208"),
                n.e("72401"),
                n.e("47417"),
                n.e("19558"),
                n.e("58946"),
                n.e("76390"),
                n.e("93312"),
                n.e("95752"),
                n.e("87046"),
                n.e("90161"),
                n.e("31538"),
                n.e("34828"),
                n.e("99717"),
                n.e("6698"),
                n.e("98954"),
                n.e("227"),
                n.e("90184"),
                n.e("62718"),
                n.e("68883"),
                n.e("29594"),
                n.e("52286"),
                n.e("8018"),
                n.e("7637"),
                n.e("3025"),
                n.e("86674"),
                n.e("4009"),
                n.e("42282"),
                n.e("49862"),
                n.e("44647"),
                n.e("10730"),
                n.e("25657"),
                n.e("49320"),
                n.e("75349"),
                n.e("54490"),
                n.e("40393"),
                n.e("77602"),
                n.e("33773"),
                n.e("63078"),
                n.e("88808"),
                n.e("86300"),
                n.e("53275"),
                n.e("96694"),
                n.e("84114"),
                n.e("53267"),
                n.e("26223"),
                n.e("1009"),
                n.e("92539"),
                n.e("10247"),
                n.e("92030"),
                n.e("93117"),
                n.e("85352"),
                n.e("71138"),
            ]).then(n.bind(n, 140539)),
        webpackId: 140539,
        name: "PopoutWindowChannelCall",
    }),
    Ai = (0, t_.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("32292"),
                n.e("28367"),
                n.e("45174"),
                n.e("85519"),
                n.e("11871"),
                n.e("37266"),
                n.e("55057"),
                n.e("14976"),
                n.e("63229"),
                n.e("31988"),
                n.e("55343"),
                n.e("93103"),
                n.e("98765"),
                n.e("90161"),
                n.e("99717"),
                n.e("6698"),
                n.e("90184"),
                n.e("40393"),
                n.e("33773"),
                n.e("88808"),
                n.e("84114"),
                n.e("36133"),
            ]).then(n.bind(n, 418838)),
        webpackId: 418838,
        name: "PopoutWindowCallTile",
    }),
    Ar = (0, t_.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("32292"),
                n.e("28367"),
                n.e("45174"),
                n.e("85519"),
                n.e("11871"),
                n.e("37266"),
                n.e("55057"),
                n.e("14976"),
                n.e("63229"),
                n.e("31988"),
                n.e("55343"),
                n.e("93103"),
                n.e("88342"),
                n.e("8555"),
                n.e("40142"),
                n.e("60161"),
                n.e("98765"),
                n.e("35313"),
                n.e("65437"),
                n.e("34983"),
                n.e("92414"),
                n.e("95208"),
                n.e("72401"),
                n.e("47417"),
                n.e("19558"),
                n.e("58946"),
                n.e("76390"),
                n.e("93312"),
                n.e("95752"),
                n.e("87046"),
                n.e("90161"),
                n.e("31538"),
                n.e("34828"),
                n.e("99717"),
                n.e("6698"),
                n.e("98954"),
                n.e("227"),
                n.e("90184"),
                n.e("62718"),
                n.e("68883"),
                n.e("29594"),
                n.e("52286"),
                n.e("8018"),
                n.e("7637"),
                n.e("3025"),
                n.e("86674"),
                n.e("4009"),
                n.e("42282"),
                n.e("49862"),
                n.e("44647"),
                n.e("10730"),
                n.e("25657"),
                n.e("49320"),
                n.e("75349"),
                n.e("54490"),
                n.e("40393"),
                n.e("33773"),
                n.e("63078"),
                n.e("88808"),
                n.e("96694"),
                n.e("84114"),
                n.e("1009"),
                n.e("10247"),
                n.e("92030"),
                n.e("28220"),
                n.e("36308"),
            ]).then(n.bind(n, 911315)),
        webpackId: 911315,
        name: "PopoutWindowStageChannelCall",
    }),
    Aa = (0, t_.Fe)({
        createPromise: () =>
            Promise.all([
                n.e("32292"),
                n.e("74968"),
                n.e("28367"),
                n.e("45174"),
                n.e("85519"),
                n.e("11871"),
                n.e("37266"),
                n.e("55057"),
                n.e("14976"),
                n.e("63229"),
                n.e("31988"),
                n.e("55343"),
                n.e("93103"),
                n.e("88342"),
                n.e("8555"),
                n.e("40142"),
                n.e("60161"),
                n.e("98765"),
                n.e("35313"),
                n.e("65437"),
                n.e("34983"),
                n.e("92414"),
                n.e("95208"),
                n.e("72401"),
                n.e("47417"),
                n.e("19558"),
                n.e("58946"),
                n.e("76390"),
                n.e("93312"),
                n.e("95752"),
                n.e("87046"),
                n.e("90161"),
                n.e("31538"),
                n.e("34828"),
                n.e("99717"),
                n.e("6698"),
                n.e("98954"),
                n.e("227"),
                n.e("90184"),
                n.e("62718"),
                n.e("68883"),
                n.e("29594"),
                n.e("52286"),
                n.e("8018"),
                n.e("7637"),
                n.e("3025"),
                n.e("86674"),
                n.e("4009"),
                n.e("42282"),
                n.e("49862"),
                n.e("44647"),
                n.e("10730"),
                n.e("25657"),
                n.e("49320"),
                n.e("75349"),
                n.e("54490"),
                n.e("40393"),
                n.e("77602"),
                n.e("33773"),
                n.e("63078"),
                n.e("88808"),
                n.e("86300"),
                n.e("53275"),
                n.e("96694"),
                n.e("84114"),
                n.e("53267"),
                n.e("26223"),
                n.e("1009"),
                n.e("92539"),
                n.e("10247"),
                n.e("92030"),
                n.e("93117"),
                n.e("85352"),
                n.e("71138"),
            ]).then(n.bind(n, 767675)),
        webpackId: 767675,
        name: "PopoutWindowRTCDebug",
    }),
    Al = (0, t_.Fe)({
        createPromise: () => Promise.all([n.e("93103"), n.e("13492")]).then(n.bind(n, 481477)),
        webpackId: 481477,
        name: "PopoutWindowActivity",
    });
class As extends Z.A {
    _observer = null;
    _initialize() {
        X.h.subscribe("CHANNEL_CALL_POPOUT_WINDOW_OPEN", this.handleOpenChannelCallPopout),
            X.h.subscribe("CALL_TILE_POPOUT_WINDOW_OPEN", this.handleOpenCallTilePopout),
            X.h.subscribe("RTC_DEBUG_POPOUT_WINDOW_OPEN", this.handleOpenRTCDebugPopout),
            X.h.subscribe("ACTIVITY_POPOUT_WINDOW_OPEN", this.handleOpenActivityPopout),
            this.initializeStyleSheetObserver();
    }
    _terminate() {
        X.h.unsubscribe("CHANNEL_CALL_POPOUT_WINDOW_OPEN", this.handleOpenChannelCallPopout),
            X.h.unsubscribe("CALL_TILE_POPOUT_WINDOW_OPEN", this.handleOpenCallTilePopout),
            X.h.unsubscribe("RTC_DEBUG_POPOUT_WINDOW_OPEN", this.handleOpenRTCDebugPopout),
            X.h.unsubscribe("ACTIVITY_POPOUT_WINDOW_OPEN", this.handleOpenActivityPopout),
            this.terminateStyleSheetObserver();
    }
    handleOpenChannelCallPopout(e) {
        let { channel: t } = e;
        At.open(
            x.MLl.CHANNEL_CALL_POPOUT,
            (e) =>
                t.isGuildStageVoice()
                    ? (0, p.jsx)(Ar, { windowKey: e, channelId: t.id })
                    : (0, p.jsx)(An, { windowKey: e, channelId: t.id }),
            { defaultWidth: 854, defaultHeight: 480 },
        );
    }
    handleOpenCallTilePopout = (e) => {
        let { channelId: t, participantId: n } = e,
            i = (0, Ae.A)(t, n);
        At.open(i, (e) => (0, p.jsx)(Ai, { windowKey: e, channelId: t, participantId: n }), {
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
                            At.addStylesheet(t, n);
                        }
                }
        })),
            this._observer.observe(document.head, { childList: !0 });
    }
    terminateStyleSheetObserver() {
        null != this._observer && (this._observer.disconnect(), (this._observer = null));
    }
    handleOpenRTCDebugPopout() {
        At.open(x.MLl.RTC_DEBUG_POPOUT, (e) => (0, p.jsx)(Aa, { windowKey: e }), {
            defaultWidth: 854,
            defaultHeight: 480,
        });
    }
    handleOpenActivityPopout() {
        At.open(x.MLl.ACTIVITY_POPOUT, (e) => (0, p.jsx)(Al, { windowKey: e }), {
            defaultWidth: 854,
            defaultHeight: 480,
        });
    }
}
let Ao = new As();
var Ad = n(123924);
class Ac extends Z.A {
    _initialize() {
        eS.A.addChangeListener(this.handlePopoutWindowChange),
            X.h.subscribe("WINDOW_FOCUS", this.handleMainWindowFocus);
    }
    _terminate() {
        eS.A.removeChangeListener(this.handlePopoutWindowChange),
            X.h.unsubscribe("WINDOW_FOCUS", this.handleMainWindowFocus),
            this.injectWindowAnimationFrame(window);
    }
    handleMainWindowFocus = (e) => {
        e.focused && e.windowId === window.__DISCORD_WINDOW_ID && this.injectWindowAnimationFrame(window);
    };
    handlePopoutWindowChange = () => {
        let e = eS.A.getWindowKeys().find((e) => eS.A.getWindowFocused(e));
        if (null == e) return this.injectWindowAnimationFrame(window);
        let t = eS.A.getWindow(e);
        if (null == t || t.closed) return this.injectWindowAnimationFrame(window);
        this.injectWindowAnimationFrame(t);
    };
    injectWindowAnimationFrame(e) {
        let t = (t) => e.requestAnimationFrame(t),
            n = (t) => e.cancelAnimationFrame(t);
        le.A.inject.RequestAnimationFrame(t), le.A.inject.CancelAnimationFrame(n), Ad.Globals.frameLoop?.setRAF(t, n);
    }
}
let Au = new Ac();
var A_ = n(877624),
    AA = n(835095),
    Ah = n(354670),
    AE = n(536194),
    Ap = n(40185),
    Am = n(881489),
    AI = n(374200),
    Ag = n(852218),
    AC = n(231265),
    Af = n(635980);
let AT = "PremiumServerDriveAnnouncementModal";
class AN extends Z.A {
    _initialize() {
        X.h.subscribe("PREMIUM_MARKETING_DATA_READY", this.mayShowAnnouncementModal),
            X.h.subscribe("PREMIUM_MARKETING_PREVIEW", this.handlePreview),
            X.h.subscribe("ACTIVE_PROMOTIONS_FETCH_SUCCESS", this.handleActivePromotionsFetchSuccess),
            X.h.subscribe("BILLING_USER_OFFER_FETCH_SUCCESS", this.handleUserOfferFetchSuccess),
            X.h.subscribe("ENTITLEMENT_CREATE", this.handleEntitlementCreate);
    }
    _terminate() {
        X.h.unsubscribe("PREMIUM_MARKETING_DATA_READY", this.mayShowAnnouncementModal),
            X.h.unsubscribe("PREMIUM_MARKETING_PREVIEW", this.handlePreview),
            X.h.unsubscribe("ACTIVE_PROMOTIONS_FETCH_SUCCESS", this.handleActivePromotionsFetchSuccess),
            X.h.unsubscribe("BILLING_USER_OFFER_FETCH_SUCCESS", this.handleUserOfferFetchSuccess),
            X.h.unsubscribe("ENTITLEMENT_CREATE", this.handleEntitlementCreate);
    }
    maybeShowAnnouncementModalFromPromotions = (e) => {
        for (let t of e)
            if (null != t.marketingComponents) {
                if (null != t.trialId) {
                    let e = Ah.A.getUserTrialOffer(t.trialId);
                    if (null == e || (null != e.expires_at && Date.parse(e.expires_at) < Date.now())) continue;
                }
                for (let e of t.marketingComponents)
                    if (e.component_type === A_.C.ANNOUNCEMENT_MODAL)
                        return void this.maybeOpenServerDriveAnnouncementModal(e.id, e.promotion_id, e.properties, !1);
            }
        (0, Am.al)(), (0, Am.QM)();
    };
    handleActivePromotionsFetchSuccess = (e) => {
        let { promotions: t } = e;
        this.maybeShowAnnouncementModalFromPromotions(t.map((e) => AA.A.createFromServer(e)));
    };
    handleUserOfferFetchSuccess = (e) => {
        let { userTrialOffer: t } = e;
        null != t &&
            this.maybeShowAnnouncementModalFromPromotions(Object.values(AI.A.promotionsByType[Ag.pt.MARKETING_MOMENT]));
    };
    handleEntitlementCreate = (e) => {
        let { entitlement: t } = e;
        AE.P.isDisallowPopupsSet() || t.source_type !== x.GD.REVERSE_TRIAL || (0, Am.al)();
    };
    maybeOpenServerDriveAnnouncementModal = async (e, t, i, r) => {
        if ((0, T.hasModalOpen)(AT)) return !1;
        let a = (0, Af.H)({ promotionId: t, content: i, isPreview: r });
        if (null != a)
            return (
                (!1 !== r || a?.contentIdentifier !== "summer_bogo_content" || !!(await (0, AC.C)())) &&
                ((0, T.openModalLazy)(
                    async () => {
                        let { default: i } = await Promise.resolve().then(n.bind(n, 635980));
                        return (n) =>
                            (0, p.jsx)(i, { renderModalProps: n, componentId: e, promotionId: t, properties: a });
                    },
                    { modalKey: AT },
                ),
                !0)
            );
    };
    handlePreview = (e) => {
        let { data: t } = e;
        this.maybeOpenServerDriveAnnouncementModal(t.id, t.promotion_id, t.properties, !0);
    };
    mayShowAnnouncementModal = async () => {
        if ((await (0, Ap.hb)(), AE.P.isDisallowPopupsSet())) return;
        let e = iA.default.getCurrentUser();
        if (null != e && !e.verified) return;
    };
}
let AS = new AN();
var AL = n(499454),
    Ay = n(17159),
    AO = n(688796),
    Ab = n(207803),
    Av = n(84540),
    AR = n(927578),
    AP = n(919395),
    AD = n(339984);
class Ax extends Z.A {
    _initialize() {
        X.h.subscribe("PROFILE_CUSTOMIZATION_OPEN_PREVIEW_MODAL", this.maybeOpenProfilePreviewModal);
    }
    _terminate() {
        X.h.unsubscribe("PROFILE_CUSTOMIZATION_OPEN_PREVIEW_MODAL", this.maybeOpenProfilePreviewModal);
    }
    maybeOpenProfilePreviewModal(e) {
        return e.uploadType === AD.HL.AVATAR
            ? ((e) => {
                  let { image: t, file: n, guildId: i, isTryItOut: r } = e;
                  if (r) return void (0, Ab.e$)(t);
                  let a = iA.default.getCurrentUser();
                  if (AR.Ay.canUseAnimatedAvatar(a) || "image/gif" !== n.type) {
                      (0, Av.p)({ guildId: i, avatar: t }), (0, AP.WU)("set");
                      return;
                  }
                  null != a && (0, AO.G)({ uploadType: AD.HL.AVATAR });
              })(e)
            : e.uploadType === AD.HL.BANNER
              ? ((e) => {
                    let { image: t, guildId: n, isTryItOut: i } = e,
                        r = t.imageUri;
                    if (i) return void (0, Ab.xe)(r);
                    let a = iA.default.getCurrentUser(),
                        l = AR.Ay.canUsePremiumProfileCustomization(a);
                    AR.Ay.canUsePremiumProfileCustomization(a)
                        ? (0, Av.p)({ guildId: n, banner: r })
                        : null == a || l || (0, AO.G)({ uploadType: AD.HL.BANNER });
                })(e)
              : void 0;
    }
}
let Aw = new Ax();
var AM = n(453314),
    AU = n(302495),
    AG = n(901123);
let Aj = new Set([
    AG.BV.APP_WITH_INVITE_AND_GUILD_ONBOARDING(":inviteCode"),
    AG.BV.APP_WITH_GIFT_CODE(":giftCode"),
    AG.BV.APP,
    AG.BV.PICK_GUILD_SETTINGS(":section?", ":subsection?"),
    AG.BV.SETTINGS(":section", ":subsection?"),
    AG.BV.USER_GUILD_NOTIFICATION_SETTINGS(AU.p.guildId()),
    AG.BV.APPLICATION_LIBRARY_INVENTORY,
    AG.BV.WELCOME(AU.p.guildId({ optional: !0 }), AU.p.channelId({ optional: !0 })),
    AG.BV.GUILD_EVENT_DETAILS(AU.p.guildId({ optional: !0 }), ":guildEventId"),
    AG.BV.GUILD_SETTINGS(AU.p.guildId(), ":section?", ":subsection?"),
    AG.BV.CHANNEL_THREAD_VIEW(AU.p.guildId(), AU.p.channelId(), ":threadId", ":messageId?"),
    AG.BV.CHANNEL(AU.p.guildId(), AU.p.channelId({ optional: !0 }), ":messageId?"),
    AG.BV.ACTIVITY,
    AG.BV.ACTIVITIES,
    AG.BV.ACTIVITIES_HAPPENING_NOW,
    AG.BV.ACTIVITY_DETAILS(":applicationId"),
    AG.BV.APPLICATION_LIBRARY,
    AG.BV.APPLICATION_STORE,
    AG.BV.MESSAGE_REQUESTS,
    AG.BV.COLLECTIBLES_SHOP,
    AG.BV.COLLECTIBLES_SHOP_COLLECTION_DETAIL(":collectionId"),
    AG.BV.COLLECTIBLES_SHOP_PRODUCT_DETAIL(":skuId"),
    AG.BV.COLLECTIBLES_SHOP_LAYOUT(":layoutId"),
    AG.BV.GUILD_DISCOVERY,
    AG.BV.QUEST_HOME_DEPRECATED,
    AG.BV.QUEST_HOME,
    AG.BV.ICYMI,
    AG.BV.GLOBAL_DISCOVERY,
    AG.BV.GUILD_MEMBER_VERIFICATION(AU.p.guildId()),
    AG.BV.GUILD_MEMBER_VERIFICATION_FOR_HUB(AU.p.guildId(), ":inviteCode?"),
    AG.BV.GUILD_BOOSTING_MARKETING(AU.p.guildId()),
    AG.BV.GUILD_FEATURE(":feature", AU.p.guildId()),
    AG.BV.FEATURE(":feature"),
    AG.BV.FAMILY_CENTER,
    AG.BV.APPLICATION_DIRECTORY,
    AG.BV.GAME_SHOP(AU.p.guildId(), ":shopSkuId?", ":shopSlug?"),
]);
var Ak = n(655087),
    AV =
        (((u = {})[(u.UNHANDLED = -1)] = "UNHANDLED"),
        (u[(u.NOMINAL = 0)] = "NOMINAL"),
        (u[(u.FAIR = 1)] = "FAIR"),
        (u[(u.SERIOUS = 2)] = "SERIOUS"),
        (u[(u.CRITICAL = 3)] = "CRITICAL"),
        u);
function AF() {
    var e = Ak.A.getRawThermalState();
    if (null == e) return -1;
    if ((0, G.isIOS)()) return e;
    if (!(0, G.isAndroid)()) return -1;
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
var AH = n(792620),
    AB = n(290863),
    AY = n(90924),
    A$ = n(969151),
    AW = n(562153),
    Az = n(639621);
function AK() {
    let e = rR.Ay.getCurrentEmbeddedActivity();
    if (null == e) return { participants: [] };
    let t = (0, A$.D)(e.location),
        n = (0, A$.H)(e.location);
    return {
        participants: Array.from(e.userIds, (e) => {
            let i = iA.default.getUser(e);
            if (null == i) return;
            let r = (0, AW.tJ)(t, n, i);
            return { ...(0, Az.A)(i), nickname: r ?? void 0 };
        }).filter(rn.Vq),
    };
}
let Aq = { [dd.sm.ANY]: [dd.VH] };
var AX = n(360469),
    AZ = n(179771),
    AQ = n(818348);
let AJ = {
        [AQ.e$.INITIATE_IMAGE_UPLOAD]: { request: void 0, response: (e) => ({ image_url: e.string().required() }) },
        [AQ.e$.OPEN_SHARE_MOMENT_DIALOG]: {
            response: void 0,
            request: (e) => ({ mediaUrl: e.string().required().max(1024) }),
        },
        [AQ.e$.AUTHENTICATE]: {
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
                    .items(e.string().valid(...Object.values(AZ.F)))
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
        [AQ.e$.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS]: {
            request: void 0,
            response: (e) => ({
                participants: e
                    .array()
                    .items(
                        A1(e)
                            .keys({ nickname: e.string().description("Server nickname. Not unique.") })
                            .required(),
                    )
                    .required(),
            }),
        },
        [AQ.e$.SHARE_INTERACTION]: {
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
                components: e.array().items(A2(e)),
                pid: e.number(),
            }),
            response: (e) => ({ success: e.boolean().required() }),
        },
        [AQ.e$.SHARE_LINK]: {
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
        [AQ.e$.GET_RELATIONSHIPS]: {
            request: void 0,
            response: (e) => ({
                relationships: e
                    .array()
                    .required()
                    .items(
                        e.object({
                            type: e.number().required(),
                            user: A1(e).required(),
                            presence: e.object({ status: e.string().required(), activity: A0(e).allow(null) }),
                        }),
                    ),
            }),
        },
        [AQ.e$.INVITE_USER_EMBEDDED]: {
            request: (e) => ({ user_id: e.string().required(), content: e.string().min(0).max(1024) }),
            response: void 0,
        },
        [AQ.e$.GET_USER]: {
            request: (e) => ({ id: e.string().max(64).required() }),
            response: (e) => A1(e).allow(null),
        },
        [AQ.e$.GET_QUEST_ENROLLMENT_STATUS]: {
            request: (e) => ({ quest_id: e.string().required() }),
            response: (e) => ({
                quest_id: e.string().required(),
                is_enrolled: e.boolean().required(),
                enrolled_at: e.string().allow(null).optional(),
            }),
        },
        [AQ.e$.QUEST_START_TIMER]: {
            request: (e) => ({ quest_id: e.string().required() }),
            response: (e) => ({ success: e.boolean().required() }),
        },
        [AQ.e$.GET_QUESTS]: {
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
        [AQ.e$.REQUEST_PROXY_TICKET_REFRESH]: { request: void 0, response: (e) => ({ ticket: e.string().required() }) },
    },
    A0 = (e) =>
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
    A1 = (e) =>
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
    A2 = (e) => e.object({ type: e.number().valid(1).required(), components: e.array().max(5).items(A6(e)) }),
    A6 = (e) =>
        e.object({
            type: e.number().valid(2).required(),
            style: e.number().min(1).max(5).required(),
            label: e.string().max(80).description("Text that appears on the button"),
            custom_id: e
                .string()
                .max(100)
                .description("Developer-defined identifier for the button; max 100 characters"),
        });
function A5(e, t) {
    let { scope: n, handler: i } = t,
        r = { scope: n, handler: i },
        a = AJ[e]?.request,
        l = null;
    return (
        null != a &&
            (r.validation = function (e) {
                return null == l && (l = e.object(a(e)).required().unknown(!0)), l;
            }),
        r
    );
}
var A3 = n(20015),
    A4 = n(636401);
function A8() {
    let e = rR.Ay.getConnectedActivityChannelId();
    return i9.A.getChannel(e);
}
let A7 = {
    [x.e$_.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS]: A5(x.e$_.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS, {
        scope: Aq,
        handler(e) {
            let { socket: t } = e;
            return (0, AY.lG)(t.transport), AK();
        },
    }),
    [x.e$_.REQUEST_PROXY_TICKET_REFRESH]: A5(x.e$_.REQUEST_PROXY_TICKET_REFRESH, {
        scope: Aq,
        async handler(e) {
            let { socket: t } = e;
            (0, AY.lG)(t.transport);
            let n = (0, AY.D2)(t.application);
            if (!(0, A3.n)(t.application, x.gfo.EMBEDDED))
                throw new A4.A(
                    { errorCode: x.Lw6.UNAUTHORIZED_FOR_APPLICATION },
                    "This application cannot access this API",
                );
            let i = A8();
            try {
                return { ticket: await (0, tF.D2)(n, i?.id) };
            } catch (e) {
                throw new A4.A({ errorCode: x.Lw6.UNKNOWN_ERROR }, "Failed to create proxy ticket");
            }
        },
    }),
};
var A9 = n(636537),
    he = n(458664),
    ht = n(977445);
function hn(e) {
    return e.object().unknown(!0);
}
let hi = {
        [x.e$_.SEND_ANALYTICS_EVENT]: {
            validation: (e) =>
                hn(e)
                    .required()
                    .keys({ event_name: e.string().required(), event_properties: hn(e).required() }),
            handler(e) {
                let {
                    socket: t,
                    args: { event_name: n, event_properties: i },
                } = e;
                (0, AY.lG)(t.transport), (0, AY.D2)(t.application);
                let r = t.application.id,
                    a = A8(),
                    l = a?.getGuildId(),
                    s = iW.A.getApplication(r);
                if (!(0, A3.n)(s, x.gfo.EMBEDDED_FIRST_PARTY))
                    throw new A4.A({ errorCode: x.Lw6.INVALID_COMMAND }, "This application cannot access this API");
                let o = (0, he.D)(r),
                    d = {
                        activity_application_id: r,
                        activity_channel_type: a?.type,
                        activity_guild_id: l,
                        activity_user_session_id: o?.activityUserSessionId,
                    };
                eu.default.track(n, { ...d, ...i });
            },
        },
        [x.e$_.GET_APPLICATION_TICKET]: {
            scope: dd.hj,
            handler(e) {
                let { socket: t } = e,
                    n = t.application.id;
                if (null == n) throw new A4.A({ errorCode: x.Lw6.INVALID_COMMAND }, "No application.");
                return A9.Bo.post({
                    url: x.Rsh.APPLICATION_TICKET(n),
                    body: { test_mode: (0, ht.F)(n) },
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
    hr = {
        [x.e$_.SET_CERTIFIED_DEVICES]: {
            scope: { [dd.sm.ANY]: [AZ.F.RPC, dd.hj] },
            validation: (e) =>
                hn(e)
                    .required()
                    .keys({
                        devices: e.array().items(
                            hn(e).keys({
                                type: e
                                    .string()
                                    .required()
                                    .valid([eO.oh.AUDIO_INPUT, eO.oh.AUDIO_OUTPUT, eO.oh.VIDEO_INPUT]),
                                id: e.string().required().min(1),
                                vendor: hn(e)
                                    .required()
                                    .keys({ name: e.string().min(1), url: e.string().min(1) }),
                                model: hn(e)
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
                if (null == i.application.id) throw new A4.A({ errorCode: x.Lw6.INVALID_COMMAND }, "No application.");
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
                    X.h.dispatch({ type: "CERTIFIED_DEVICES_SET", applicationId: t, devices: n });
            },
        },
    };
var ha = n(95701),
    hl = n(147036);
let hs = {
        [x.e$_.GET_CHANNEL]: {
            scope: { [dd.sm.ANY]: [AZ.F.RPC, AZ.F.GUILDS, AZ.F.GUILDS_CHANNELS_READ] },
            handler(e) {
                let {
                        args: { channel_id: t },
                        socket: n,
                    } = e,
                    i = i9.A.getChannel(t);
                if (null == i) throw new A4.A({ errorCode: x.Lw6.INVALID_CHANNEL }, `Invalid channel id: ${t}`);
                if (i.isPrivate()) {
                    let e = n.authorization.scopes;
                    if (!e.includes(AZ.F.RPC) && !e.includes(AZ.F.DM_CHANNELS_READ))
                        throw new A4.A({ errorCode: x.Lw6.INVALID_PERMISSIONS }, "Invalid scope");
                }
                return (0, AY.SN)(i, (0, AY.B_)(i, n.application.id, n.authorization.scopes));
            },
        },
        [x.e$_.GET_CHANNELS]: {
            scope: AZ.F.RPC,
            handler(e) {
                let {
                        args: { guild_id: t },
                    } = e,
                    n = eG().values(i9.A.loadAllGuildAndPrivateChannelsFromDisk());
                if (t) {
                    let e = rG.A.getGuild(t);
                    if (null == e) throw new A4.A({ errorCode: x.Lw6.INVALID_GUILD }, `Invalid guild id: ${t}`);
                    n = n.filter((t) => {
                        let { guild_id: n } = t;
                        return n === e.id;
                    });
                }
                return {
                    channels: n
                        .filter((e) => rV.A.can(x.xBc.VIEW_CHANNEL, e))
                        .map((e) => {
                            let { id: t, name: n, type: i } = e;
                            return { id: t, name: n, type: i };
                        }),
                };
            },
        },
        [x.e$_.GET_CHANNEL_PERMISSIONS]: {
            scope: { [dd.sm.ANY]: [AZ.F.GUILDS_MEMBERS_READ, AZ.F.GUILDS_CHANNELS_READ] },
            handler(e) {
                let t = A8();
                if (null == t) throw new A4.A({ errorCode: x.Lw6.INVALID_CHANNEL }, "Invalid channel");
                return { permissions: rV.A.computePermissions(t) };
            },
        },
        [x.e$_.SELECT_VOICE_CHANNEL]: {
            scope: AZ.F.RPC,
            validation: (e) =>
                hn(e)
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
                let s = et.A.getVoiceChannelId();
                if (null != s && s !== i && !1 === a)
                    throw new A4.A(
                        { errorCode: x.Lw6.SELECT_VOICE_FORCE_REQUIRED },
                        "User is already joined to a voice channel.",
                    );
                return t
                    .storeWait(n, () => i9.A.getChannel(i), r)
                    .catch(() => {
                        throw new A4.A(
                            { errorCode: x.Lw6.SELECT_CHANNEL_TIMED_OUT },
                            "Request to select voice channel timed out.",
                        );
                    })
                    .then((e) => {
                        if (null == e) throw new A4.A({ errorCode: x.Lw6.INVALID_CHANNEL }, `Invalid channel id: ${i}`);
                        if (!(0, ha.gV)(e.type))
                            throw new A4.A({ errorCode: x.Lw6.INVALID_CHANNEL }, "Channel is not a voice channel");
                        return Promise.all([
                            Promise.resolve(e),
                            (0, AY.SN)(e, (0, AY.B_)(e, n.application.id, n.authorization.scopes)),
                        ]);
                    })
                    .then((e) => {
                        let [t, n] = e;
                        if (n.guild_id) {
                            if ((0, hl.Pd)(t, rH.A, rG.A))
                                throw new A4.A({ errorCode: x.Lw6.INVALID_CHANNEL }, "Channel is full");
                            if (!rV.A.can(x.xBc.CONNECT, t))
                                throw new A4.A(
                                    { errorCode: x.Lw6.INVALID_PERMISSIONS },
                                    "Connect permission required to join channel",
                                );
                        }
                        return O.default.selectVoiceChannel(t.id), l && (0, aO.bG)(x.BVt.CHANNEL(t.guild_id, t.id)), n;
                    });
            },
        },
        [x.e$_.GET_SELECTED_VOICE_CHANNEL]: {
            scope: { [dd.sm.ANY]: [AZ.F.RPC, AZ.F.RPC_VOICE_READ] },
            handler(e) {
                let { socket: t } = e,
                    n = et.A.getVoiceChannelId(),
                    i = null != n ? i9.A.getChannel(n) : null;
                return null != i ? (0, AY.SN)(i, (0, AY.B_)(i, t.application.id, t.authorization.scopes)) : null;
            },
        },
        [x.e$_.SELECT_TEXT_CHANNEL]: {
            scope: AZ.F.RPC,
            validation: (e) =>
                hn(e)
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
                          .storeWait(n, () => i9.A.getChannel(i), r)
                          .catch(() => {
                              throw new A4.A(
                                  { errorCode: x.Lw6.SELECT_CHANNEL_TIMED_OUT },
                                  "Request to select text channel timed out.",
                              );
                          })
                          .then((e) => {
                              if (null == e)
                                  throw new A4.A({ errorCode: x.Lw6.INVALID_CHANNEL }, `Invalid channel id: ${i}`);
                              if (!(0, ha.pQ)(e.type))
                                  throw new A4.A({ errorCode: x.Lw6.INVALID_CHANNEL }, "Channel is not a text channel");
                              return Promise.all([
                                  Promise.resolve(e),
                                  (0, AY.SN)(e, (0, AY.B_)(e, n.application.id, n.authorization.scopes)),
                              ]);
                          })
                          .then((e) => {
                              let [t, n] = e;
                              if (n.guild_id && !rV.A.can(x.xBc.VIEW_CHANNEL, t))
                                  throw new A4.A({ errorCode: x.Lw6.INVALID_CHANNEL }, "No permission to see channel");
                              return (
                                  n.guild_id
                                      ? (0, aO.bG)(x.BVt.CHANNEL(n.guild_id, t.id))
                                      : O.default.selectPrivateChannel(t.id),
                                  n
                              );
                          })
                    : ((0, aO.pX)(x.BVt.ME), null);
            },
        },
        [x.e$_.CREATE_CHANNEL_INVITE]: {
            scope: AZ.F.RPC,
            handler(e) {
                let {
                    args: { channel_id: t, ...n },
                } = e;
                return uJ.Ay.createInvite(t, n, "RPC").catch(() => {
                    throw new A4.A(
                        { errorCode: x.Lw6.INVALID_PERMISSIONS },
                        `Unable to generate an invite for ${t}. Does this user have permissions?`,
                    );
                });
            },
        },
    },
    ho = {
        [x.e$_.SET_CONFIG]: {
            scope: dd.VH,
            validation: (e) => hn(e).required().keys({ use_interactive_pip: e.boolean() }),
            handler(e) {
                let {
                    socket: t,
                    args: { use_interactive_pip: n },
                } = e;
                if (t.transport !== dd.z4.POST_MESSAGE)
                    throw new A4.A(
                        { errorCode: x.Lw6.INVALID_COMMAND },
                        `command not available from "${t.transport} transport`,
                    );
                if (null == t.application.id)
                    throw new A4.A({ errorCode: x.Lw6.INVALID_COMMAND }, "invalid application");
                return (
                    X.h.dispatch({
                        type: "EMBEDDED_ACTIVITY_SET_CONFIG",
                        applicationId: t.application.id,
                        config: { useInteractivePIP: n },
                    }),
                    Promise.resolve({ use_interactive_pip: n })
                );
            },
        },
    },
    hd = {
        [x.e$_.GET_GUILD]: {
            scope: AZ.F.RPC,
            validation: (e) =>
                hn(e)
                    .required()
                    .keys({ guild_id: e.string(), timeout: e.number().min(0).max(60) }),
            handler(e) {
                let {
                    socket: t,
                    server: n,
                    args: { guild_id: i, timeout: r = 0 },
                } = e;
                return n
                    .storeWait(t, () => rG.A.getGuild(i), r)
                    .catch(() => {
                        throw new A4.A({ errorCode: x.Lw6.GET_GUILD_TIMED_OUT }, "Request to get guild timed out.");
                    })
                    .then((e) => {
                        if (null == e) throw new A4.A({ errorCode: x.Lw6.INVALID_GUILD }, `Invalid guild id: ${i}`);
                        return {
                            id: e.id,
                            name: e.name,
                            icon_url: (0, ee.Iv)(e, 128) ?? null,
                            members: [],
                            vanity_url_code: e.vanityURLCode,
                        };
                    });
            },
        },
        [x.e$_.GET_GUILDS]: {
            scope: AZ.F.RPC,
            handler: () => ({
                guilds: rG.A.getGuildsArray().map((e) => ({
                    id: e.id,
                    name: e.name,
                    icon_url: (0, ee.Iv)(e, 128) ?? null,
                })),
            }),
        },
    };
var hc = n(486020),
    hu = n(515718);
let h_ = {
    [x.e$_.GET_IMAGE]: {
        scope: dd.hj,
        validation: (e) =>
            hn(e)
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
                let e = iA.default.getUser(i);
                if (null != e) {
                    t = hc.Ay.getUserAvatarURL(e, !1, a, r);
                    let n = window.GLOBAL_ENV.CDN_HOST;
                    null != n && -1 !== t.indexOf(n) && (t += "&_=");
                } else throw new A4.A({ errorCode: x.Lw6.INVALID_USER }, `Invalid user id: ${i}`);
            }
            if (null == t) throw new A4.A({ errorCode: x.Lw6.INVALID_COMMAND }, "No valid type.");
            return fetch(t)
                .then((e) => e.blob())
                .then((e) => (0, hu.We)(e))
                .then((e) => ({ data_url: e }));
        },
    },
};
var hA = n(119966),
    hh = n(478437),
    hE = n(344351),
    hp = n(855687);
function hm() {
    let e = tw.A.getConnectedFrame();
    if (null != e) return { frame: e, channel: void 0, guild: void 0 };
    let t = A8();
    if (null == t) throw new A4.A({ errorCode: x.Lw6.INVALID_CHANNEL }, "Invalid channel");
    let n = rG.A.getGuild(t.getGuildId());
    if (null == n) throw new A4.A({ errorCode: x.Lw6.INVALID_CHANNEL }, `Invalid guild ${t.getGuildId()}`);
    if (!(0, hp.K)(rV.A, n, t))
        throw new A4.A({ errorCode: x.Lw6.INVALID_PERMISSIONS }, `No invite permissions for ${t.id}`);
    return { frame: void 0, channel: t, guild: n };
}
let hI = {
    [AQ.e$.INVITE_USER_EMBEDDED]: A5(AQ.e$.INVITE_USER_EMBEDDED, {
        scope: { [dd.sm.ANY]: [AZ.F.DM_CHANNELS_MESSAGES_WRITE, AZ.F.ACTIVITIES_INVITES_WRITE] },
        async handler(e) {
            let t,
                {
                    socket: n,
                    args: { user_id: i, content: r },
                } = e,
                a = n.application.id;
            if (null == a) throw new hA.G({ errorCode: AQ.Lw.INVALID_COMMAND }, "No application.");
            let l = rR.Ay.getConnectedActivityLocation();
            if (null == l)
                throw new hA.G(
                    { errorCode: AQ.Lw.NO_ELIGIBLE_ACTIVITY },
                    "No eligible activity for application. Ensure an activity was set using setActivity.",
                );
            switch (l.kind) {
                case hE.T.GUILD_CHANNEL:
                case hE.T.GUILD_CHANNEL_MESSAGE:
                    t = hm().channel;
                    break;
                case hE.T.PRIVATE_CHANNEL:
                case hE.T.PRIVATE_CHANNEL_MESSAGE:
                    let s = i9.A.getChannel(l.channel_id);
                    if (null == s) throw new hA.G({ errorCode: AQ.Lw.INVALID_CHANNEL }, "Invalid channel");
                    if (s.type === hh.r.DM)
                        throw new hA.G({ errorCode: AQ.Lw.INVALID_CHANNEL }, "Cannot send invite to a DM");
                    t = s;
                    break;
                default:
                    throw new hA.G({ errorCode: AQ.Lw.NO_ELIGIBLE_ACTIVITY }, "Unsupported activity location");
            }
            try {
                await (0, tF.Ue)({
                    channelId: t.id,
                    applicationId: a,
                    userId: i,
                    prefixedContent: r,
                    location: "RPC_ACTIVITY_INVITE_USER",
                    inviteAnalyticsMetadata: { source: x.PE1.ACTIVITY_INVITE },
                });
            } catch {
                throw new hA.G({ errorCode: AQ.Lw.UNKNOWN_ERROR }, "Failed to invite user");
            }
        },
    }),
};
var hg = n(975807),
    hC = n(646865),
    hf = n(231723),
    hT = n(851907);
async function hN(e, t) {
    if (void 0 === e) return !1;
    try {
        let { body: n } = await A9.Bo.get({
            url: x.Rsh.ACTIVITIES_TRUSTED_LINKS(e),
            rejectWithError: !1,
            query: { url: t },
            timeout: 500,
        });
        return !!n.trusted;
    } catch {
        return !1;
    }
}
var hS = n(353835),
    hL = n(76843);
let hy = new Set([AX.AM, AX.eK]),
    hO = {
        [x.e$_.OPEN_EXTERNAL_LINK]: {
            scope: { [dd.sm.ANY]: [dd.VH, dd.W_] },
            validation: (e) => hn(e).required().keys({ url: e.string().required() }),
            async handler(e) {
                let {
                    socket: t,
                    args: { url: n },
                } = e;
                (0, AY.lG)(t.transport);
                let i = rR.Ay.getCurrentEmbeddedActivity();
                try {
                    let e = new URL(n).toString();
                    if (G.isPlatformEmbedded) {
                        let e = (0, hC.f)() ? x.MLl.ACTIVITY_POPOUT : null;
                        hS.A.focus(e, !0);
                    }
                    let r = iW.A.getApplication(t.application?.id),
                        a = (0, A$.H)(i?.location);
                    if (await hN(r?.id, e))
                        return (
                            (0, hg.A)(e),
                            eu.default.track(x.HAw.RPC_OPEN_EXTERNAL_LINK_CALLED, {
                                application_id: t.application?.id,
                                url: e,
                                opened: !0,
                            }),
                            Promise.resolve({ opened: !0 })
                        );
                    return new Promise((n) =>
                        (0, hL.h)(
                            {
                                href: e,
                                shouldConfirm: !0,
                                onConfirm: () => {
                                    (0, hg.A)(e),
                                        eu.default.track(x.HAw.RPC_OPEN_EXTERNAL_LINK_CALLED, {
                                            application_id: t.application?.id,
                                            url: e,
                                            opened: !0,
                                        }),
                                        n({ opened: !0 });
                                },
                                onCancel: () => {
                                    eu.default.track(x.HAw.RPC_OPEN_EXTERNAL_LINK_CALLED, {
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
                                return null != (0, hT.Ay)({ application: t, channelId: n }) ? hf.KX : hf.SY;
                            })({ application: r, channelId: a }),
                        ),
                    );
                } catch (e) {
                    throw new A4.A({ errorCode: x.Lw6.INVALID_COMMAND }, `Invalid URL: ${n}`);
                }
            },
        },
        [x.e$_.NAVIGATE_TO_CONNECTIONS]: {
            validation: (e) => hn(e),
            scope: { [dd.sm.ANY]: [dd.VH] },
            handler(e) {
                let { socket: t } = e;
                (0, AY.lG)(t.transport);
                let i = (0, AY.D2)(t.application);
                if (!hy.has(i))
                    throw new A4.A(
                        { errorCode: x.Lw6.UNAUTHORIZED_FOR_APPLICATION },
                        "Command not available for this application",
                    );
                {
                    let { openUserSettings: e } = n(858897);
                    e(e5.X.CONNECTIONS_PANEL);
                }
            },
        },
        [x.e$_.SHARE_LINK]: A5(x.e$_.SHARE_LINK, {
            scope: { [dd.sm.ANY]: [dd.VH] },
            handler(e) {
                let {
                    socket: t,
                    args: { custom_id: i, message: r, link_id: a },
                } = e;
                (0, AY.lG)(t.transport);
                let l = (0, AY.D2)(t.application);
                if (null == l) throw new A4.A({ errorCode: x.Lw6.INVALID_COMMAND }, "No application.");
                if (!(0, A3.n)(t.application, x.gfo.EMBEDDED))
                    throw new A4.A({ errorCode: x.Lw6.INVALID_COMMAND }, "This application cannot access this API");
                return new Promise((e) => {
                    !(function (e) {
                        let { applicationId: t, customId: i, linkId: r, message: a, onShare: l } = e,
                            s = iW.A.getApplication(t);
                        if (null == s) return l(!1, !1);
                        let o = null != (0, hT.LU)({ applicationId: s.id }) ? hf.KX : hf.SY,
                            d = !1;
                        function c(e) {
                            l(e, d);
                        }
                        function u() {
                            d = !0;
                        }
                        (0, T.openModalLazy)(
                            async () => {
                                let { default: e } = await n.e("19666").then(n.bind(n, 803977));
                                return (n) =>
                                    (0, p.jsx)(e, {
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
    hb = new ca.A(x.meB),
    hv = {
        [x.e$_.CAPTURE_LOG]: {
            validation: (e) =>
                hn(e)
                    .required()
                    .keys({ level: e.string().max(10).required(), message: e.string().max(1e3).required() }),
            handler(e) {
                let {
                    socket: t,
                    args: { level: n, message: i },
                } = e;
                (0, AY.lG)(t.transport);
                let r = t.application.id,
                    a = `${r} - ${i}`;
                switch (n) {
                    case "log":
                        hb.log(a);
                        break;
                    case "warn":
                        hb.warn(a);
                        break;
                    case "debug":
                        hb.verbose(a);
                        break;
                    case "info":
                        hb.info(a);
                        break;
                    case "error":
                        hb.error(a);
                }
            },
        },
    },
    hR = {
        [x.e$_.GET_NETWORKING_CONFIG]: {
            scope: dd.hj,
            handler: () =>
                Promise.all([
                    A9.Bo.get({
                        url: location.protocol + window.GLOBAL_ENV.NETWORKING_ENDPOINT,
                        retries: 3,
                        rejectWithError: !1,
                    }).then((e) => {
                        let {
                            body: { address: t },
                        } = e;
                        return t;
                    }),
                    A9.Bo.post({
                        url: x.Rsh.NETWORKING_TOKEN,
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
        [x.e$_.NETWORKING_SYSTEM_METRICS]: {
            scope: dd.hj,
            handler(e) {
                let { socket: t, args: n } = e;
                (n.application_id = t.application.id), eu.default.track(x.HAw.NETWORKING_SYSTEM_METRICS, n);
            },
        },
        [x.e$_.NETWORKING_PEER_METRICS]: {
            scope: dd.hj,
            handler(e) {
                let { socket: t, args: n } = e;
                (n.application_id = t.application.id), eu.default.track(x.HAw.NETWORKING_PEER_METRICS, n);
            },
        },
        [x.e$_.NETWORKING_CREATE_TOKEN]: {
            scope: dd.hj,
            handler: () =>
                A9.Bo.post({ url: x.Rsh.NETWORKING_TOKEN, retries: 1, oldFormErrors: !0, rejectWithError: !1 }).then(
                    (e) => e.body,
                ),
        },
    },
    hP = { [AQ.e$.GET_PLATFORM_BEHAVIORS]: { handler: () => ({ iosKeyboardResizesView: !0 }) } };
var hD = n(77468),
    hx = n(773952);
let hw = new Set([AX.AM, AX.eK]),
    hM = {
        [AQ.e$.GET_PROVIDER_ACCESS_TOKEN]: {
            scope: { [dd.sm.ANY]: [dd.VH] },
            validation: (e) =>
                hn(e).required().keys({ provider: e.string().required(), connection_redirect: e.string() }),
            handler: (e) => {
                let {
                    socket: t,
                    args: { provider: n, connection_redirect: i },
                } = e;
                (0, AY.lG)(t.transport);
                let r = (0, AY.D2)(t.application),
                    a = iU.A.get(n);
                if (null == a)
                    throw new A4.A({ errorCode: AQ.Lw.INVALID_PROVIDER }, `Platform not found for provider "${n}"`);
                if (n === x.fg2.AMAZON_MUSIC) {
                    if (!hw.has(r))
                        throw new A4.A(
                            { errorCode: AQ.Lw.UNAUTHORIZED_FOR_APPLICATION },
                            "Command not available for this application",
                        );
                } else
                    throw new A4.A(
                        { errorCode: AQ.Lw.UNAUTHORIZED_FOR_APPLICATION },
                        "Command not available for this application",
                    );
                return new Promise(async (e, t) => {
                    let r = rw.A.getAccount(null, n);
                    if (null == r) {
                        function l(t) {
                            if (null == a) return;
                            let n = (t.accounts ?? []).find((e) => e.type === a.type);
                            null != n && (e({ access_token: n.access_token }), o());
                        }
                        function s() {
                            t(new A4.A({ errorCode: AQ.Lw.OAUTH2_ERROR }, `OAuth2 setup for "${n}" failed`)), o();
                        }
                        function o() {
                            X.h.unsubscribe("USER_CONNECTIONS_UPDATE", l),
                                t0._.unsubscribe(x.jej.CONNECTIONS_CALLBACK_ERROR, s);
                        }
                        X.h.subscribe("USER_CONNECTIONS_UPDATE", l),
                            t0._.subscribe(x.jej.CONNECTIONS_CALLBACK_ERROR, s),
                            (0, hx.A)({ platformType: a.type, location: x.ThZ.ACTIVITY_RPC, successRedirect: i });
                    } else
                        try {
                            let t = await hD.A.refreshAccessToken(a.type, r.id);
                            if (null == t)
                                throw new A4.A(
                                    { errorCode: AQ.Lw.OAUTH2_ERROR },
                                    "Refreshing access token did not return a new access token",
                                );
                            e({ access_token: t });
                        } catch (e) {
                            t(e);
                        }
                });
            },
        },
        [AQ.e$.MAYBE_GET_PROVIDER_ACCESS_TOKEN]: {
            scope: { [dd.sm.ANY]: [dd.VH] },
            validation: (e) => hn(e).required().keys({ provider: e.string().required() }),
            handler: async (e) => {
                let {
                    socket: t,
                    args: { provider: n },
                } = e;
                (0, AY.lG)(t.transport);
                let i = (0, AY.D2)(t.application),
                    r = iU.A.get(n);
                if (null == r)
                    throw new A4.A({ errorCode: AQ.Lw.INVALID_PROVIDER }, `Platform not found for provider "${n}"`);
                if (n === x.fg2.AMAZON_MUSIC) {
                    if (!hw.has(i))
                        throw new A4.A(
                            { errorCode: AQ.Lw.UNAUTHORIZED_FOR_APPLICATION },
                            "Command not available for this application",
                        );
                } else
                    throw new A4.A(
                        { errorCode: AQ.Lw.UNAUTHORIZED_FOR_APPLICATION },
                        "Command not available for this application",
                    );
                let a = rw.A.getAccount(null, n);
                if (null == a) throw new A4.A({ errorCode: AQ.Lw.NO_CONNECTION_FOUND }, "No connection found");
                let l = await hD.A.refreshAccessToken(r.type, a.id);
                if (null == l)
                    throw new A4.A(
                        { errorCode: AQ.Lw.OAUTH2_ERROR },
                        "Refreshing access token did not return a new access token",
                    );
                return { access_token: l };
            },
        },
    },
    hU = {
        [x.e$_.GET_QUEST_ENROLLMENT_STATUS]: {
            scope: AZ.F.IDENTIFY,
            handler(e) {
                let {
                    socket: t,
                    args: { quest_id: n },
                } = e;
                (0, AY.lG)(t.transport);
                let i = (0, AY.D2)(t.application),
                    r = ii.A.getQuest(n),
                    a = (0, AH.TP)(r);
                if (null == r || null == a || a !== i)
                    throw new A4.A({ errorCode: x.Lw6.INVALID_COMMAND }, `Quest not found: ${n}`);
                return {
                    quest_id: n,
                    is_enrolled: r.userStatus?.enrolledAt != null,
                    enrolled_at: r.userStatus?.enrolledAt ?? null,
                };
            },
        },
        [x.e$_.QUEST_START_TIMER]: {
            scope: AZ.F.IDENTIFY,
            handler(e) {
                let {
                    socket: t,
                    args: { quest_id: n },
                } = e;
                (0, AY.lG)(t.transport);
                let i = (0, AY.D2)(t.application),
                    r = ii.A.getQuest(n),
                    a = (0, AH.vS)(r);
                if (null == r || null == a || a !== i)
                    throw new A4.A({ errorCode: x.Lw6.INVALID_COMMAND }, `Quest not found: ${n}`);
                if (r.userStatus?.enrolledAt == null)
                    throw new A4.A({ errorCode: x.Lw6.INVALID_COMMAND }, "User is not enrolled in quest");
                return (
                    eu.default.track(x.HAw.RPC_QUEST_START_TIMER_CALLED, { application_id: i, quest_id: n }),
                    X.h.dispatch({ type: "QUEST_APPLICATION_START_TIMER", questId: n, applicationId: i }),
                    { success: !0 }
                );
            },
        },
        [x.e$_.GET_QUESTS]: {
            scope: AZ.F.IDENTIFY,
            handler(e) {
                let { socket: t } = e;
                (0, AY.lG)(t.transport);
                let n = (0, AY.D2)(t.application);
                return {
                    quests: (0, id.jm)(ii.A.quests, n, !0)
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
    hG = {
        [x.e$_.GET_RELATIONSHIPS]: A5(x.e$_.GET_RELATIONSHIPS, {
            scope: { [dd.sm.ANY]: [AZ.F.RELATIONSHIPS_READ] },
            handler(e) {
                if (cA.zy(cA.iu(e.socket.application.flags ?? 0), cA.iu(x.gfo.DISABLE_RELATIONSHIPS_ACCESS)))
                    throw new A4.A({ errorCode: x.Lw6.INVALID_PERMISSIONS }, "Missing Permissions");
                let t = [];
                for (let [n, i] of eQ.A.getMutableRelationships().entries()) {
                    if (i === x.eA$.NONE) continue;
                    let r = iA.default.getUser(n);
                    if (null == r) continue;
                    let a = (0, AY.Gc)(i, r);
                    t.push((0, AY.LP)(a, e.socket.application.id));
                }
                return { relationships: t };
            },
        }),
    };
var hj = n(599026),
    hk = n(182892),
    hV = n(375802);
let hF = ["1402418171662569542"],
    hH = {
        [x.e$_.SET_ACTIVITY]: {
            scope: { [dd.sm.ANY]: [AZ.F.RPC, AZ.F.RPC_ACTIVITIES_WRITE, dd.hj] },
            validation: (e) =>
                hn(e)
                    .required()
                    .keys({
                        pid: e.number().min(0),
                        activity: hn(e)
                            .keys({
                                name: e.string().min(1).max(128),
                                state: e.string().min(2).max(128),
                                state_url: e.string().uri().min(1).max(256),
                                details: e.string().min(2).max(128),
                                details_url: e.string().uri().min(1).max(256),
                                timestamps: hn(e).keys({ start: e.number().min(1), end: e.number().min(1) }),
                                assets: hn(e).keys({
                                    large_image: e.string().min(1).max(300),
                                    large_text: e.string().min(2).max(128),
                                    large_url: e.string().uri().min(1).max(256),
                                    small_image: e.string().min(1).max(300),
                                    small_text: e.string().min(2).max(128),
                                    small_url: e.string().uri().min(1).max(256),
                                    invite_cover_image: e.string().min(1).max(300),
                                }),
                                party: hn(e).keys({
                                    id: e.string().min(2).max(128),
                                    size: e.array().items(e.number().min(0)).length(2),
                                    privacy: e.number().default(x.KIY.PRIVATE).valid([x.KIY.PRIVATE, x.KIY.PUBLIC]),
                                }),
                                secrets: hn(e).keys({
                                    match: e.string().min(2).max(128),
                                    join: e.string().min(2).max(128),
                                    spectate: e.string().min(2).max(128),
                                }),
                                buttons: e
                                    .array()
                                    .items(
                                        hn(e).keys({
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
                                    .default(x.$pd.PLAYING)
                                    .valid(x.$pd.PLAYING, x.$pd.LISTENING, x.$pd.WATCHING, x.$pd.COMPETING),
                                status_display_type: e.number().optional().valid(hj.A.NAME, hj.A.STATE, hj.A.DETAILS),
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
                if (![dd.z4.IPC, dd.z4.WEBSOCKET, dd.z4.POST_MESSAGE].includes(n.transport))
                    throw new A4.A(
                        { errorCode: x.Lw6.INVALID_COMMAND },
                        `command not available from "${n.transport}" transport`,
                    );
                if (null == i && dd.z4.IPC === n.transport)
                    throw new A4.A({ errorCode: x.Lw6.INVALID_COMMAND }, "nonzero pid required");
                if (null == r)
                    return (
                        X.h.dispatch({ type: "LOCAL_ACTIVITY_UPDATE", socketId: n.id, pid: i, activity: r }),
                        Promise.resolve(r)
                    );
                let l = {};
                r.name || (r.name = n.application.name);
                let s = n.application.id;
                r.application_id = s;
                let o = n.transport === dd.z4.POST_MESSAGE;
                r.platform = o ? x.yTV.EMBEDDED : x.yTV.DESKTOP;
                let d = iW.A.getApplication(s ?? void 0),
                    c = r.instance ?? !1,
                    u = r.party?.privacy;
                delete r.instance, delete r.party?.privacy;
                let _ = (0, hk.E)(r, c, o, null != d && (0, hV.x)(d) && o, u);
                _ > 0 && (r.flags = _);
                let { assets: A, party: h, secrets: E, timestamps: p, buttons: m, type: I } = r;
                if ((null == I && (r.type = x.$pd.PLAYING), null != E)) {
                    let e = eG()
                        .values(E)
                        .filter((e) => !!e);
                    if (null != h && eG().intersection(e, [h.id]).length > 0 && !hF.includes(n.application.id))
                        throw new A4.A(
                            { errorCode: x.Lw6.INVALID_ACTIVITY_SECRET },
                            "secrets cannot match the party id",
                        );
                    if (eG().uniq(e).length < e.length)
                        throw new A4.A({ errorCode: x.Lw6.INVALID_ACTIVITY_SECRET }, "secrets must be unique");
                    if (null != m)
                        throw new A4.A(
                            { errorCode: x.Lw6.INVALID_ACTIVITY_SECRET },
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
                            (p[e] = Math.floor(p[e] * e_.A.Millis.SECOND));
                if (null == A) t = Promise.resolve([]);
                else {
                    if (null == n.application || null == n.application.id) throw Error();
                    t = (0, iS.RG)(n.application.id, [A.large_image, A.small_image, A.invite_cover_image]);
                }
                return t.then((e) => {
                    let [t, l, s] = e;
                    if (
                        (null != A &&
                            (null != t ? (A.large_image = t) : delete A.large_image,
                            null != l ? (A.small_image = l) : delete A.small_image,
                            null != s ? (A.invite_cover_image = s) : delete A.invite_cover_image),
                        !a())
                    )
                        return;
                    X.h.dispatch({
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
                        null != A && (c.has_images = !!(A.large_image || A.small_image || A.invite_cover_image)),
                        null != d &&
                            ((c.party_max = null != d.size && d.size[1] > 0 ? d.size[1] : void 0), (c.party_id = d.id)),
                        eu.default.track(x.HAw.ACTIVITY_UPDATED, c),
                        r
                    );
                });
            },
        },
    },
    hB = {
        [AQ.e$.SET_ORIENTATION_LOCK_STATE]: {
            validation: (e) =>
                hn(e)
                    .required()
                    .keys({
                        lock_state: e.number().valid(AX.N7.UNLOCKED, AX.N7.PORTRAIT, AX.N7.LANDSCAPE).required(),
                        picture_in_picture_lock_state: e
                            .number()
                            .valid(AX.N7.UNLOCKED, AX.N7.PORTRAIT, AX.N7.LANDSCAPE)
                            .allow(null)
                            .optional(),
                        grid_lock_state: e
                            .number()
                            .valid(AX.N7.UNLOCKED, AX.N7.PORTRAIT, AX.N7.LANDSCAPE)
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
                    X.h.dispatch({
                        type: "FRAME_SET_ORIENTATION_LOCK_STATE",
                        applicationId: a,
                        lockState: n,
                        pictureInPictureLockState: i,
                    }),
                        X.h.dispatch({
                            type: "EMBEDDED_ACTIVITY_SET_ORIENTATION_LOCK_STATE",
                            applicationId: a,
                            lockState: n,
                            pictureInPictureLockState: i,
                            gridLockState: r,
                        });
                else throw new A4.A({ errorCode: AQ.Lw.INVALID_COMMAND }, "No application.");
            },
        },
    };
var hY = n(796774),
    h$ = n(209932),
    hW = n(807348),
    hz = n(693806);
let hK = {
    [AQ.e$.GET_SOUNDBOARD_SOUNDS]: {
        scope: { [dd.sm.ANY]: [AZ.F.RPC, dd.hj] },
        async handler() {
            await (0, hY.E7)();
            let e = h$.A.getSounds(),
                t = [];
            return e.forEach((e) => e.forEach((e) => t.push((0, hW.A2)(e)))), t;
        },
    },
    [AQ.e$.PLAY_SOUNDBOARD_SOUND]: {
        scope: { [dd.sm.ALL]: [AZ.F.RPC, AZ.F.RPC_VOICE_WRITE] },
        validation: (e) => hn(e).required().keys({ guild_id: e.string(), sound_id: e.string() }),
        async handler(e) {
            let {
                args: { guild_id: t, sound_id: n },
            } = e;
            await (0, hY.E7)();
            let i = iA.default.getCurrentUser(),
                r = h$.A.getSound(t, n),
                a = (0, hz.A)(),
                l = null != r && null != i && (0, on.Ir)(i, r, a);
            if (null == a) throw new A4.A({ errorCode: AQ.Lw.INVALID_CHANNEL }, "Invalid Channel.");
            if (l)
                if ((0, s8.Ay)(a)) null != r && (0, on.Ak)(r, a.id, [eC.A.RPC]);
                else throw new A4.A({ errorCode: AQ.Lw.INVALID_PERMISSIONS }, "Invalid Permissions.");
            else throw new A4.A({ errorCode: AQ.Lw.INVALID_SOUND }, "Invalid Sound.");
        },
    },
};
var hq = n(339048),
    hX = n(830382),
    hZ = n(800342),
    hQ = n(143582);
function hJ(e) {
    if (dd.z4.IPC !== e && dd.z4.POST_MESSAGE !== e)
        throw new A4.A({ errorCode: x.Lw6.INVALID_COMMAND }, "Invalid transport.");
}
async function h0(e, t) {
    let n = t.filter((e) => e.type === x.Puh.SUBSCRIPTION_GROUP),
        i = await Promise.all(n.map(async (t) => await (0, hQ.vz)(e, t.id))),
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
                        price: { amount: r, currency: x.Yri.USD },
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
async function h1(e) {
    let { socket: t } = e;
    hJ(t.transport);
    let n = t.application.id;
    if (null == n) throw new A4.A({ errorCode: x.Lw6.INVALID_COMMAND }, "No application.");
    if ((0, ht.F)(n)) {
        let e = await hX.O1(n, !1),
            t = await h0(n, e);
        return [...e.filter((e) => null != e.price), ...t];
    }
    let i = await hZ.JI(n);
    return [
        ...i
            .filter((e) => e.sku.type !== x.Puh.SUBSCRIPTION_GROUP)
            .map((e) => e.sku)
            .filter((e) => null != e.price),
        ...(await h0(
            n,
            i.map((e) => e.sku),
        )),
    ];
}
function h2(e) {
    let { socket: t } = e;
    hJ(t.transport);
    let n = t.application.id;
    if (null == n) throw new A4.A({ errorCode: x.Lw6.INVALID_COMMAND }, "No application.");
    return hq.LM(n);
}
let h6 = {
    [x.e$_.GET_SKUS]: { [dd.sm.ANY]: [dd.VH, dd.hj], handler: h1 },
    [x.e$_.GET_ENTITLEMENTS]: { [dd.sm.ANY]: [dd.VH, dd.hj], handler: h2 },
    [x.e$_.GET_SKUS_EMBEDDED]: { [dd.sm.ANY]: [dd.VH, dd.hj], handler: async (e) => ({ skus: await h1(e) }) },
    [x.e$_.GET_ENTITLEMENTS_EMBEDDED]: {
        [dd.sm.ANY]: [dd.VH, dd.hj],
        handler: async (e) => ({ entitlements: await h2(e) }),
    },
};
n(142703);
var h5 = n(722306);
let h3 = {
    [x.e$_.SUBSCRIBE]: {
        async handler(e) {
            let { server: t, socket: n, evt: i, args: r } = e,
                a = t.events[i];
            if (null == a) throw new A4.A({ errorCode: x.Lw6.INVALID_EVENT }, `Invalid event: ${i}`);
            if (!(0, h5.A)(n.authorization.scopes, a.scope))
                throw new A4.A({ errorCode: x.Lw6.INVALID_PERMISSIONS }, "Not authenticated or invalid scope");
            if (
                (eu.default.track(x.HAw.RPC_SUBSCRIPTION_REQUESTED, {
                    event: i,
                    scope: "object" == typeof a.scope ? JSON.stringify(a.scope) : a.scope,
                    application_id: n.application.id,
                    socket_scope: n.authorization.scopes.toString(),
                }),
                null != a.validation)
            ) {
                let e = await t.getJoi();
                if (null != e.validate(r, a.validation(e), { convert: !1 }).error)
                    throw new A4.A({ errorCode: x.Lw6.INVALID_PAYLOAD }, "Invalid subscription parameters provided");
            }
            let l = a.handler({ args: r, socket: n }),
                s = (function (e, t, n) {
                    switch (t) {
                        case x.ZE4.ACTIVITY_PIP_MODE_UPDATE: {
                            let t = e.application?.id,
                                n = null != t ? rR.Ay.getLayoutModeForApp(t) : null;
                            return null != n ? { is_pip_mode: n !== AX.bN.FOCUSED } : null;
                        }
                        case x.ZE4.ACTIVITY_LAYOUT_MODE_UPDATE: {
                            let t = e.application?.id,
                                n = null != t ? rR.Ay.getLayoutModeForApp(t) : null;
                            return null != n ? { layout_mode: n } : null;
                        }
                        case x.ZE4.FRAME_LAYOUT_MODE_UPDATE: {
                            let t = null != e.application?.id ? tw.A.getConnectedFrame()?.layoutMode : null;
                            return null != t ? { layout_mode: t } : null;
                        }
                        case x.ZE4.THERMAL_STATE_UPDATE: {
                            let e = AF();
                            if (e === AV.UNHANDLED) return null;
                            return { thermal_state: e };
                        }
                        case x.ZE4.ORIENTATION_UPDATE:
                            return null;
                        case x.ZE4.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE:
                            return AK();
                        case x.ZE4.QUEST_ENROLLMENT_STATUS_UPDATE: {
                            let { quest_id: t } = n;
                            if (!t) return null;
                            let i = ii.A.getQuest(t),
                                r = (0, AH.TP)(i);
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
    [x.e$_.UNSUBSCRIBE]: {
        handler(e) {
            let { server: t, socket: n, evt: i, args: r } = e;
            if (null == t.events[i]) throw new A4.A({ errorCode: x.Lw6.INVALID_EVENT }, `Invalid event: ${i}`);
            return t.removeSubscription(n, i, r), { evt: i };
        },
    },
};
var h4 = n(773669);
let h8 = { [x.e$_.USER_SETTINGS_GET_LOCALE]: { scope: AZ.F.IDENTIFY, handler: () => ({ locale: h4.default.locale }) } },
    h7 = {
        [x.e$_.GET_USER]: A5(x.e$_.GET_USER, {
            scope: { [dd.sm.ANY]: [dd.W_, dd.hj] },
            handler(e) {
                let {
                        args: { id: t },
                    } = e,
                    n = iA.default.getUser(t);
                return null == n ? null : (0, Az.A)(n);
            },
        }),
    },
    h9 = {
        ...hi,
        ...hr,
        ...hs,
        ...ho,
        ...hd,
        ...h_,
        ...hI,
        ...hO,
        ...hv,
        ...hR,
        ...hM,
        ...hG,
        ...hH,
        ...hB,
        ...h6,
        ...h3,
        ...h7,
        ...h8,
        ...hP,
        ...hK,
        ...A7,
        ...hU,
    };
var Ee = n(52133),
    Et = n(821956);
let En = (e) => hn(e).required().keys({ channel_id: e.string().required() });
function Ei(e) {
    let {
            args: { channel_id: t },
            socket: n,
        } = e,
        i = i9.A.getChannel(t);
    if (null == i || !(0, AY.B_)(i, n.application.id, n.authorization.scopes))
        throw new A4.A({ errorCode: x.Lw6.INVALID_CHANNEL }, `Invalid channel id: ${t}`);
    if ((0, ei.$v)(i)) throw new A4.A({ errorCode: x.Lw6.INVALID_CHANNEL }, `Invalid nsfw channel id: ${i.id}`);
}
let Er = (e) => hn(e).keys({ channel_id: e.string().allow(null) });
function Ea(e) {
    let {
        args: { channel_id: t },
    } = e;
    if (null != t && null == i9.A.getChannel(t))
        throw new A4.A({ errorCode: x.Lw6.INVALID_CHANNEL }, `Invalid channel id: ${t}`);
}
let El = {
    [x.ZE4.GUILD_STATUS]: {
        scope: AZ.F.RPC,
        validation: (e) => hn(e).required().keys({ guild_id: e.string().required() }),
        handler(e) {
            let {
                args: { guild_id: t },
            } = e;
            if (null == rG.A.getGuild(t)) throw new A4.A({ errorCode: x.Lw6.INVALID_GUILD }, `Invalid guild id: ${t}`);
            return (e) => {
                let { prevState: n, dispatch: i } = e,
                    r = rG.A.getGuild(t);
                if (null == r) return;
                let a = { guild: { id: r.id, name: r.name, icon_url: (0, ee.Iv)(r, 128) ?? null }, online: 0 };
                return eG().isEqual(n, a) || i(a), a;
            };
        },
    },
    [x.ZE4.VOICE_STATE_CREATE]: {
        scope: { [dd.sm.ANY]: [AZ.F.RPC, AZ.F.RPC_VOICE_READ] },
        validation: (e) => hn(e).required().keys({ channel_id: e.string().required() }),
        handler(e) {
            let {
                args: { channel_id: t },
            } = e;
            if (null == i9.A.getChannel(t))
                throw new A4.A({ errorCode: x.Lw6.INVALID_CHANNEL }, `Invalid channel id: ${t}`);
            return (e) => {
                let { prevState: n, dispatch: i } = e,
                    r = i9.A.getChannel(t);
                if (null == r) return;
                let a = r.getGuildId(),
                    l = Object.values(rH.A.getVoiceStatesForChannel(r.id));
                return (
                    n &&
                        eG()
                            .differenceBy(l, n, (e) => {
                                let { userId: t } = e;
                                return t;
                            })
                            .forEach((e) => i((0, AY.qG)(a, r.id, e))),
                    l
                );
            };
        },
    },
    [x.ZE4.VOICE_STATE_DELETE]: {
        scope: { [dd.sm.ANY]: [AZ.F.RPC, AZ.F.RPC_VOICE_READ] },
        validation: (e) => hn(e).required().keys({ channel_id: e.string().required() }),
        handler(e) {
            let {
                args: { channel_id: t },
            } = e;
            if (null == i9.A.getChannel(t))
                throw new A4.A({ errorCode: x.Lw6.INVALID_CHANNEL }, `Invalid channel id: ${t}`);
            return (e) => {
                let { prevState: n, dispatch: i } = e,
                    r = i9.A.getChannel(t);
                if (null == r) return;
                let a = r.getGuildId(),
                    l = Object.values(rH.A.getVoiceStatesForChannel(r.id));
                return (
                    eG()
                        .differenceBy(n, l, (e) => {
                            let { userId: t } = e;
                            return t;
                        })
                        .forEach((e) => i((0, AY.qG)(a, r.id, e))),
                    l
                );
            };
        },
    },
    [x.ZE4.VOICE_STATE_UPDATE]: {
        scope: { [dd.sm.ANY]: [AZ.F.RPC, AZ.F.RPC_VOICE_READ] },
        validation: (e) => hn(e).required().keys({ channel_id: e.string().required() }),
        handler(e) {
            let {
                args: { channel_id: t },
            } = e;
            if (null == i9.A.getChannel(t))
                throw new A4.A({ errorCode: x.Lw6.INVALID_CHANNEL }, `Invalid channel id: ${t}`);
            return (e) => {
                let { prevState: n, dispatch: i } = e,
                    r = i9.A.getChannel(t);
                if (null == r) return;
                let a = r.getGuildId(),
                    l = Object.values(rH.A.getVoiceStatesForChannel(r.id)).map((e) => (0, AY.qG)(a, r.id, e));
                return (
                    eG()
                        .differenceWith(l, n, eG().isEqual)
                        .forEach((e) => i(e)),
                    l
                );
            };
        },
    },
    [x.ZE4.VOICE_CONNECTION_STATUS]: {
        scope: { [dd.sm.ANY]: [AZ.F.RPC, AZ.F.RPC_VOICE_READ] },
        handler: () => (e) => {
            let { prevState: t, dispatch: n } = e,
                i = {
                    state: (0, AY.SK)(e4.A.getState()),
                    hostname: e4.A.getHostname(),
                    pings: e4.A.getPings(),
                    average_ping: e4.A.getAveragePing(),
                    last_ping: e4.A.getLastPing(),
                };
            return eG().isEqual(i, t) || n(i), i;
        },
    },
    [x.ZE4.MESSAGE_CREATE]: { scope: AZ.F.RPC, validation: En, handler: Ei },
    [x.ZE4.MESSAGE_UPDATE]: { scope: AZ.F.RPC, validation: En, handler: Ei },
    [x.ZE4.MESSAGE_DELETE]: { scope: AZ.F.RPC, validation: En, handler: Ei },
    [x.ZE4.SPEAKING_START]: {
        scope: { [dd.sm.ANY]: [AZ.F.RPC, AZ.F.RPC_VOICE_READ, dd.hj] },
        validation: Er,
        handler: Ea,
    },
    [x.ZE4.SPEAKING_STOP]: {
        scope: { [dd.sm.ANY]: [AZ.F.RPC, AZ.F.RPC_VOICE_READ, dd.hj] },
        validation: Er,
        handler: Ea,
    },
    [x.ZE4.GUILD_CREATE]: { scope: AZ.F.RPC, handler() {} },
    [x.ZE4.CHANNEL_CREATE]: { scope: AZ.F.RPC, handler() {} },
    [x.ZE4.GAME_JOIN]: { scope: { [dd.sm.ANY]: [AZ.F.RPC, dd.hj] }, handler() {} },
    [x.ZE4.GAME_SPECTATE]: { scope: { [dd.sm.ANY]: [AZ.F.RPC, dd.hj] }, handler() {} },
    [x.ZE4.ACTIVITY_JOIN]: { scope: { [dd.sm.ANY]: [AZ.F.RPC, dd.VH, dd.hj] }, handler() {} },
    [x.ZE4.ACTIVITY_JOIN_REQUEST]: { scope: { [dd.sm.ANY]: [AZ.F.RPC, dd.hj] }, handler() {} },
    [x.ZE4.ACTIVITY_SPECTATE]: { scope: { [dd.sm.ANY]: [AZ.F.RPC, dd.VH, dd.hj] }, handler() {} },
    [x.ZE4.ACTIVITY_INVITE]: { scope: { [dd.sm.ANY]: [AZ.F.RPC, dd.hj] }, handler() {} },
    [x.ZE4.ACTIVITY_PIP_MODE_UPDATE]: { scope: void 0, handler() {} },
    [x.ZE4.ACTIVITY_LAYOUT_MODE_UPDATE]: { scope: void 0, handler() {} },
    [x.ZE4.FRAME_LAYOUT_MODE_UPDATE]: { scope: void 0, handler() {} },
    [x.ZE4.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE]: {
        scope: Aq,
        handler: () => (e) => {
            let { prevState: t, dispatch: n } = e,
                i = AK();
            return eG().isEqual(i, t) || n(i), i;
        },
    },
    [x.ZE4.THERMAL_STATE_UPDATE]: { scope: { [dd.sm.ANY]: [dd.VH] }, handler() {} },
    [x.ZE4.ORIENTATION_UPDATE]: { scope: { [dd.sm.ANY]: [dd.VH] }, handler() {} },
    [x.ZE4.VOICE_CHANNEL_SELECT]: { scope: AZ.F.RPC, handler() {} },
    [x.ZE4.NOTIFICATION_CREATE]: { scope: { [dd.sm.ALL]: [AZ.F.RPC, AZ.F.RPC_NOTIFICATIONS_READ] }, handler() {} },
    [x.ZE4.RELATIONSHIP_UPDATE]: {
        scope: AZ.F.RELATIONSHIPS_READ,
        handler(e) {
            let { socket: t } = e;
            if (cA.zy(cA.iu(t.application.flags ?? 0), cA.iu(x.gfo.DISABLE_RELATIONSHIPS_ACCESS)))
                throw new A4.A({ errorCode: x.Lw6.INVALID_PERMISSIONS }, "Missing Permissions");
        },
    },
    [x.ZE4.CURRENT_USER_UPDATE]: {
        scope: { [dd.sm.ANY]: [dd.hj, AZ.F.IDENTIFY] },
        handler: () => (e) => {
            let { prevState: t, dispatch: n } = e,
                i = { currentUser: iA.default.getCurrentUser() };
            return null == i.currentUser || (null != t && (0, Ee.A)(i, t)) || n((0, Az.A)(i.currentUser)), i;
        },
    },
    [x.ZE4.CURRENT_GUILD_MEMBER_UPDATE]: {
        scope: { [dd.sm.ALL]: [AZ.F.IDENTIFY, AZ.F.GUILDS_MEMBERS_READ] },
        handler(e) {
            let {
                args: { guild_id: t },
            } = e;
            return (e) => {
                let { prevState: n, dispatch: i } = e,
                    r = { currentGuildMember: l1.Ay.getSelfMember(t) };
                return (
                    null == r.currentGuildMember ||
                        (null != n && (0, Ee.A)(r, n)) ||
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
                                    avatar_decoration_data: (0, Et.Xq)(a),
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
    [x.ZE4.ENTITLEMENT_CREATE]: { scope: { [dd.sm.ANY]: [dd.hj, dd.VH] }, handler() {} },
    [x.ZE4.ENTITLEMENT_DELETE]: { scope: { [dd.sm.ANY]: [dd.hj, dd.VH] }, handler() {} },
    [x.ZE4.SCREENSHARE_STATE_UPDATE]: {
        scope: { [dd.sm.ALL]: [dd.hj, AZ.F.RPC_SCREENSHARE_READ] },
        handler: () => (e) => {
            let { prevState: t, dispatch: n } = e,
                i = oS.A.getStreamerActiveStreamMetadata(),
                r = i?.pid != null ? eN.Ay.getGameForPID(i.pid) : null,
                a = r?.id != null ? iW.A.getApplication(r.id) : null,
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
            return eG().isEqual(o, t) || n(o), o;
        },
    },
    [x.ZE4.VIDEO_STATE_UPDATE]: {
        scope: { [dd.sm.ALL]: [dd.hj, AZ.F.RPC_VIDEO_READ] },
        handler: () => (e) => {
            let { prevState: t, dispatch: n } = e,
                i = { active: eL.Ay.isVideoEnabled() };
            return eG().isEqual(i, t) || n(i), i;
        },
    },
    [x.ZE4.AUTHORIZE_REQUEST]: { scope: void 0, handler() {} },
};
var Es = n(289919);
let Eo = {
        [x.ZE4.OVERLAY_UPDATE]: {
            scope: dd.hj,
            handler(e) {
                let {
                    args: { pid: t },
                    socket: n,
                } = e;
                if ("number" != typeof t || t < 10) throw new A4.A({ errorCode: x.Lw6.INVALID_EVENT }, "Invalid pid");
                return (e) => {
                    let { prevState: i, dispatch: r } = e,
                        a = _y.default.enabled,
                        l = !0,
                        s = n.application.id;
                    if (null != s) {
                        let e = rj.A.getActiveLibraryApplication(s);
                        null != e && (a = a && e.isOverlayEnabled()), (l = cv.default.isLocked(t));
                    }
                    let o = { enabled: a, locked: l };
                    return eG().isEqual(o, i) || r(o), o;
                };
            },
        },
    },
    Ed = {
        [x.ZE4.QUEST_ENROLLMENT_STATUS_UPDATE]: {
            scope: AZ.F.IDENTIFY,
            validation: (e) => hn(e).required().keys({ quest_id: e.string().required() }),
            handler: function (e) {
                let {
                        args: { quest_id: t },
                        socket: n,
                    } = e,
                    i = ii.A.getQuest(t),
                    r = (0, AH.TP)(i);
                if (null == i || null == r || r !== n.application.id)
                    throw new A4.A({ errorCode: x.Lw6.INVALID_COMMAND }, `Quest not found: ${t}`);
            },
        },
    };
var Ec = n(546983);
let Eu =
    ((_ = Ec.l6),
    (A = Ec.Au),
    {
        [x.ZE4.VOICE_SETTINGS_UPDATE]: {
            scope: { [dd.sm.ANY]: [AZ.F.RPC, AZ.F.RPC_VOICE_READ] },
            handler: () => (e) => {
                let { prevState: t, dispatch: n } = e,
                    i = _();
                return eG().isEqual(i, t) || n(i), i;
            },
        },
        [x.ZE4.VOICE_SETTINGS_UPDATE_2]: {
            scope: dd.hj,
            handler(e) {
                let { socket: t } = e;
                return (e) => {
                    let { prevState: n, dispatch: i } = e;
                    if (null == t.application.id) return n;
                    let r = A(t.application.id);
                    return eG().isEqual(r, n) || i(r), r;
                };
            },
        },
    });
var E_ = n(298990),
    EA = n(334738),
    Eh = n(181658);
function EE(e, t) {
    return null != e.application_id && null == t.getApplicationActivity(e.application_id, !1);
}
var Ep = n(293588),
    Em = n(383233),
    EI = n(998218),
    Eg = n(475815);
async function EC(e, t, n, i) {
    let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "",
        a = rk.A.getApplicationActivity(t);
    if (null == a || null == a.secrets || !(0, AY.px)(i, a.party, a.secrets))
        throw new A4.A(
            { errorCode: x.Lw6.NO_ELIGIBLE_ACTIVITY },
            "No eligible activity for application. Ensure an activity includes a party and appropriate secret.",
        );
    let l = EE(a, rF.A);
    if (l) {
        let { lock: t } = (0, Ec.d5)(e);
        return (0, E_.qf)(a, l).then(() => {
            throw (
                (t(),
                new A4.A(
                    { errorCode: x.Lw6.NO_ELIGIBLE_ACTIVITY },
                    "No eligible activity for application. Ensure user does have have privacy enabled.",
                ))
            );
        });
    }
    await rb.A.sendActivityInviteUser({ userId: n, type: i, activity: a, content: r, location: "In-Game Invite" });
}
let Ef = {
    [x.e$_.SEND_ACTIVITY_JOIN_INVITE]: {
        scope: { [dd.sm.ANY]: [AZ.F.RPC, dd.hj] },
        handler(e) {
            let {
                    socket: t,
                    args: { user_id: n, pid: i },
                } = e,
                r = t.application.id;
            if (null == r) throw new A4.A({ errorCode: x.Lw6.INVALID_COMMAND }, "No application.");
            return EC(i, r, n, x.xL.JOIN);
        },
    },
    [x.e$_.CLOSE_ACTIVITY_JOIN_REQUEST]: {
        scope: { [dd.sm.ANY]: [AZ.F.RPC, dd.hj] },
        handler(e) {
            let {
                    args: { user_id: t },
                } = e,
                n = i9.A.getDMFromUserId(t);
            null != n &&
                (0, EA.ack)(
                    n,
                    {
                        section: x.JJy.CLOSE_ACTIVITY_JOIN_REQUEST_RPC_COMMAND,
                        object: x.ZSU.ACK_DECLINE_REQUEST_TO_JOIN,
                        objectType: x.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC,
                    },
                    !0,
                    !0,
                );
        },
    },
    [x.e$_.ACTIVITY_INVITE_USER]: {
        scope: { [dd.sm.ANY]: [AZ.F.RPC, dd.hj] },
        validation: (e) =>
            hn(e)
                .required()
                .keys({
                    user_id: e.string().required(),
                    type: e.number().required().valid([x.xL.JOIN]),
                    content: e.string().min(0).max(1024),
                    pid: e.number().min(0).required(),
                }),
        handler(e) {
            let {
                    socket: t,
                    args: { type: n, user_id: i, content: r, pid: a },
                } = e,
                l = t.application.id;
            if (null == l) throw new A4.A({ errorCode: x.Lw6.INVALID_COMMAND }, "No application.");
            return EC(a, l, i, n, r);
        },
    },
    [x.e$_.ACCEPT_ACTIVITY_INVITE]: {
        scope: { [dd.sm.ANY]: [AZ.F.RPC, dd.hj] },
        validation: (e) =>
            hn(e)
                .required()
                .keys({
                    type: e.number().required().valid([x.xL.JOIN]),
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
                o = t.transport === dd.z4.IPC ? (s ?? t.application.id) : t.application.id;
            if (null == o) throw new A4.A({ errorCode: x.Lw6.INVALID_COMMAND }, "No application.");
            let d = Promise.resolve(!1);
            return (
                n === x.xL.JOIN &&
                    (d = rv.Ay.join({ userId: i, sessionId: r, applicationId: o, channelId: a, messageId: l })),
                d.then((e) => {
                    if (!e) throw new A4.A({ errorCode: x.Lw6.INVALID_INVITE }, "Invite is expired or invalid.");
                })
            );
        },
    },
    [x.e$_.OPEN_INVITE_DIALOG]: {
        scope: { [dd.sm.ANY]: [AZ.F.RPC, dd.hj, dd.VH] },
        handler(e) {
            let { socket: t } = e,
                i = t.application;
            if (null == i.id) throw new A4.A({ errorCode: x.Lw6.INVALID_COMMAND }, "No application.");
            let { channel: r, guild: a, frame: l } = hm(),
                s = (0, hT.Ay)({ application: t.application, channelId: r?.id }),
                o = null != s ? eS.A.getWindow(s) : void 0;
            o?.closed && (o = void 0);
            let d = null != o ? x.BRT.POPOUT : x.BRT.APP;
            if (((0, Eg.sP)({}, o?.document), null != l)) {
                if (l.applicationId !== i.id)
                    throw new A4.A({ errorCode: x.Lw6.INVALID_COMMAND }, "Application is not currently mounted.");
                let e = rk.A.getApplicationActivity(i.id);
                if (null != e) (0, E_.qf)(e, !1, d);
                else
                    throw new A4.A(
                        { errorCode: x.Lw6.NO_ELIGIBLE_ACTIVITY },
                        "No eligible activity for application. Ensure an activity was set using setActivity.",
                    );
            } else
                (0, T.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([n.e("28136"), n.e("22547"), n.e("50441")]).then(
                            n.bind(n, 1310),
                        );
                        return (t) =>
                            (0, p.jsx)(e, {
                                ...t,
                                guild: a,
                                channel: r,
                                applicationId: i.id,
                                analyticsLocation: x.ThZ.ACTIVITY_RPC,
                                source: x.PE1.ACTIVITY_INVITE,
                            });
                    },
                    { contextKey: d === x.BRT.POPOUT ? hf.KX : hf.SY },
                );
        },
    },
    [x.e$_.INITIATE_IMAGE_UPLOAD]: A5(x.e$_.INITIATE_IMAGE_UPLOAD, {
        scope: { [dd.sm.ANY]: [AZ.F.RPC, dd.hj, dd.VH] },
        handler(e) {
            let { socket: t } = e,
                n = t.application.id;
            if (null == n) throw new A4.A({ errorCode: x.Lw6.INVALID_COMMAND }, "No application.");
            let i = A8()?.id;
            return new Promise((e, t) => {
                !(function (e, t) {
                    let n;
                    if ((0, hC.f)()) n = eS.A.getWindow(x.MLl.ACTIVITY_POPOUT);
                    else {
                        let e = ey.A.getLastFocusedWindowId();
                        n = null == e ? null : (0, s5.Iy)(e)?.renderWindow;
                    }
                    if (null == n) throw new A4.A({ errorCode: x.Lw6.UNKNOWN_ERROR }, "No valid window found");
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
                        (0, rn.Vq)(i.files) && e(i.files[0]), r();
                    }),
                        i.addEventListener("cancel", () => {
                            r();
                        }),
                        n.document.body.addEventListener("focus", r, !0),
                        n.document.body.appendChild(i),
                        i.click();
                })(
                    async (r) => {
                        let a = await (0, tF.CS)(n, i, r);
                        (0, rn.Vq)(a) && (0, rn.Vq)(a.url) && !(a instanceof Eh.A) ? e({ image_url: a.url }) : t(a);
                    },
                    () => t(Error("Upload canceled")),
                );
            }).catch((e) => {
                throw new A4.A({ errorCode: x.Lw6.UNKNOWN_ERROR }, e?.message ?? "Failed to upload image");
            });
        },
    }),
    [x.e$_.OPEN_SHARE_MOMENT_DIALOG]: A5(x.e$_.OPEN_SHARE_MOMENT_DIALOG, {
        scope: { [dd.sm.ANY]: [dd.VH] },
        handler(e) {
            let {
                socket: t,
                args: { mediaUrl: i },
            } = e;
            (0, AY.lG)(t.transport);
            let r = t.application.id;
            if (null == r) throw new A4.A({ errorCode: x.Lw6.INVALID_COMMAND }, "No application.");
            if (!(0, A3.n)(t.application, x.gfo.EMBEDDED))
                throw new A4.A({ errorCode: x.Lw6.INVALID_COMMAND }, "This application cannot access this API");
            let a = A8();
            if (!EI.A.isDiscordCdnUrl(i))
                throw new A4.A({ errorCode: x.Lw6.INVALID_PAYLOAD }, "mediaUrl must be a Discord CDN url");
            !(function (e) {
                let { applicationId: t, channelId: i, mediaUrl: r } = e,
                    a = iW.A.getApplication(t),
                    l = null != (0, hT.Ay)({ application: a, channelId: i }) ? hf.KX : hf.SY;
                (0, T.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([n.e("96758"), n.e("27797")]).then(n.bind(n, 190930));
                        return (n) => (0, p.jsx)(e, { applicationId: t, mediaUrl: r, ...n });
                    },
                    { modalKey: "activity-share-moment-modal", contextKey: l },
                );
            })({ applicationId: r, channelId: a?.id, mediaUrl: i });
        },
    }),
    [x.e$_.SHARE_INTERACTION]: A5(x.e$_.SHARE_INTERACTION, {
        scope: { [dd.sm.ANY]: [dd.VH, dd.hj] },
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
            if (null == c) throw new A4.A({ errorCode: x.Lw6.INVALID_COMMAND }, "No application.");
            if (!AX.mO.includes(c)) throw new A4.A({ errorCode: x.Lw6.INVALID_COMMAND }, "Unsupported application.");
            if (!(0, A3.n)(n.application, x.gfo.EMBEDDED))
                throw new A4.A({ errorCode: x.Lw6.INVALID_COMMAND }, "This application cannot access this API");
            let u = A8();
            if (null == u && l) throw new A4.A({ errorCode: x.Lw6.INVALID_COMMAND }, "No channel found");
            if (null !== r || null !== a || null !== s) {
                let e = [];
                void 0 !== r &&
                    (e = [
                        {
                            id: l6.default.cast(l6.default.fromTimestamp(Date.now())),
                            size: 0,
                            proxy_url: r.url,
                            filename: "preview",
                            url: r.url,
                            height: r.height,
                            width: r.width,
                        },
                    ]),
                    (t = new Em.Ay({
                        id: l6.default.cast(l6.default.fromTimestamp(Date.now())),
                        applicationId: c,
                        content: s,
                        components: a,
                        attachments: e,
                    }));
            }
            return new Promise((e) => {
                let n = !1,
                    r = (0, Ec.d5)(d),
                    a = hf.SY;
                (eS.A.getWindowOpen(x.MLl.ACTIVITY_POPOUT) || r.context === x.BRT.POPOUT) && (a = hf.KX),
                    (0, Ep.m)({
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
var ET = n(469778);
let EN = 10 * e_.A.Millis.SECOND,
    ES = {
        [x.e$_.VALIDATE_APPLICATION]: {
            scope: dd.hj,
            handler(e) {
                let { socket: t } = e,
                    i = t.application.id;
                try {
                    var r;
                    let e;
                    if (null == i) throw new A4.A({ errorCode: x.Lw6.INVALID_COMMAND }, "No application.");
                    let t = iW.A.getApplication(i);
                    if (null == t) throw new A4.A({ errorCode: x.Lw6.INVALID_ENTITLEMENT }, "SKU does not exist.");
                    let n = t.primarySkuId;
                    if (null == n) throw new A4.A({ errorCode: x.Lw6.INVALID_ENTITLEMENT }, "SKU does not exist.");
                    return Promise.race([
                        ((r = t.id),
                        (e = ET.A.isEntitledToSku(iA.default.getCurrentUser(), n, r)),
                        null != e
                            ? Promise.resolve(e)
                            : (0, hq.LM)(r).then(
                                  () => !0 === ET.A.isEntitledToSku(iA.default.getCurrentUser(), n, r),
                              )).then((e) => {
                            if (!e)
                                throw new A4.A(
                                    { errorCode: x.Lw6.INVALID_ENTITLEMENT },
                                    "User does not have entitlement.",
                                );
                        }),
                        (0, ec.BK)(EN).then(() => {
                            throw new A4.A({ errorCode: x.Lw6.INVALID_ENTITLEMENT }, "Timed out fetching entitlement.");
                        }),
                    ]);
                } catch (e) {
                    throw (
                        (e.code === x.Lw6.INVALID_ENTITLEMENT &&
                            (e0.Ay.focus(null, !0),
                            (0, T.openModalLazy)(async () => {
                                let { default: e } = await n.e("26766").then(n.bind(n, 448701));
                                return (t) => (0, p.jsx)(e, { ...t, applicationId: i });
                            })),
                        e)
                    );
                }
            },
        },
        [x.e$_.GET_ENTITLEMENT_TICKET]: {
            scope: dd.hj,
            handler(e) {
                let { socket: t } = e,
                    i = t.application.id;
                if (null == i) throw new A4.A({ errorCode: x.Lw6.INVALID_COMMAND }, "No application.");
                return A9.Bo.post({
                    url: x.Rsh.ENTITLEMENT_TICKET(i),
                    body: { test_mode: (0, ht.F)(i) },
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
                            (e0.Ay.focus(null, !0),
                            (0, T.openModalLazy)(async () => {
                                let { default: e } = await n.e("26766").then(n.bind(n, 448701));
                                return (t) => (0, p.jsx)(e, { ...t, applicationId: i });
                            }),
                            e)
                        );
                    });
            },
        },
    };
var EL = n(200330),
    Ey = n(321987),
    EO = n(595244),
    Eb = n(488428),
    Ev = n(485845),
    ER = n(898467),
    EP = n(224750),
    ED = n(716965),
    Ex = n(671523),
    Ew = n(337095),
    EM = n(395671),
    EU = n(488926);
let EG = "CachedTokens",
    Ej = { "1273616940451102832": new ER.A(2, +e_.A.Millis.MINUTE) };
async function Ek(e, t, n) {
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
            code_challenge_method: _,
            state: A,
            nonce: h,
            scope: E,
            permissions: p,
            guild_id: m,
            channel_id: I,
            prompt: g,
            disable_guild_select: C,
            integration_type: f,
            pid: T,
            signal: N,
            isSocketRpcPrivateScope: S,
        } = e;
    if (N?.aborted) throw new A4.A({ errorCode: x.Lw6.UNKNOWN_ERROR }, "Request aborted");
    if (null == o) throw new A4.A({ errorCode: x.Lw6.OAUTH2_ERROR }, "No Client ID provided");
    if (!S && null != c)
        throw new A4.A(
            { errorCode: x.Lw6.OAUTH2_ERROR },
            "Redirect URI cannot be used in the RPC OAuth2 Authorization flow",
        );
    let L = [];
    if (
        ("string" == typeof E ? (L = E.split(" ").filter((e) => e.length > 0)) : Array.isArray(E) && (L = E),
        null == iA.default.getCurrentUser())
    )
        throw new A4.A({ errorCode: x.Lw6.OAUTH2_ERROR }, "Client is not logged in");
    if (null != f) r = Number(f);
    else {
        let e = (e) => (0, A3.n)(e, x.gfo.EMBEDDED) && e?.integrationTypesConfig?.[Ev.b.USER_INSTALL] != null,
            t = iW.A.getApplication(o);
        r = e(t) || e((t = EM.Ay.createFromServer(await (0, Ew.TA)(o, N)))) ? Ev.b.USER_INSTALL : Ev.b.GUILD_INSTALL;
    }
    try {
        [a, { disclosures: l, allAcked: s }] = await Promise.all([
            (0, ED.qY)({
                clientId: o,
                scopes: L,
                responseType: d,
                redirectUri: c,
                codeChallenge: u,
                codeChallengeMethod: _,
                state: A,
                integrationType: r,
                signal: N,
            }),
            (0, EP.vG)(o),
        ]);
    } catch (t) {
        let { body: e } = t;
        throw new A4.A(
            { errorCode: x.Lw6.OAUTH2_ERROR },
            `OAuth2 Authorization Error: ${e?.message || "Unknown Error"}`,
        );
    }
    if (g === Ex.l.NONE && null != a && a.authorized && s)
        try {
            return (
                await (0, ED.Gq)({
                    authorize: !0,
                    clientId: o,
                    scopes: L,
                    responseType: d,
                    redirectUri: c,
                    codeChallenge: u,
                    codeChallengeMethod: _,
                    state: A,
                    nonce: h,
                    integrationType: r,
                })
            ).location;
        } catch (t) {
            let { body: e } = t;
            throw new A4.A(
                { errorCode: x.Lw6.OAUTH2_ERROR },
                `OAuth2 Authorize Error: ${e?.message || "Unknown Error"}`,
            );
        }
    n?.(a.application, I, T);
    let y = EU.x3;
    try {
        y = cA.iu(p ?? 0);
    } catch (e) {}
    if (
        (null != a.integration_type &&
            Object.values(Ev.b).includes(a.integration_type) &&
            (i = new Map()).set(a.integration_type, a),
        null != Ej[a.application.id] && (await Ej[a.application.id].process(), N?.aborted))
    )
        throw new A4.A({ errorCode: x.Lw6.UNKNOWN_ERROR }, "Request aborted");
    return t({
        clientId: o,
        authorizations: i,
        scopes: L,
        parsedPermissions: y,
        responseType: d,
        redirectUri: c,
        codeChallenge: u,
        codeChallengeMethod: _,
        state: A,
        guildId: m,
        channelId: I,
        prompt: g,
        disableGuildSelect: C,
        disclosures: l,
        integrationType: r,
        pid: T,
        signal: N,
    });
}
function EV(e, t) {
    if (e.authorization.accessToken) throw new A4.A({ errorCode: x.Lw6.INVALID_COMMAND }, "Already authenticated");
    if (e.authorization.authing) throw new A4.A({ errorCode: x.Lw6.INVALID_COMMAND }, "Already authenticating");
    return (
        (e.authorization.authing = !0),
        A9.Bo.get({
            url: x.Rsh.OAUTH2_CURRENT_AUTH,
            headers: { Authorization: `Bearer ${t}` },
            oldFormErrors: !0,
            rejectWithError: !1,
        })
            .then(
                (n) => {
                    e.authorization.authing = !1;
                    let { application: i, user: r, scopes: a, expires: l } = n.body;
                    if (e.application.id !== i.id)
                        throw new A4.A(
                            { errorCode: x.Lw6.INVALID_CLIENTID },
                            "Application does not match the connection's",
                        );
                    let s = iA.default.getCurrentUser();
                    if (null == s || !r || s.id !== r.id)
                        throw new A4.A({ errorCode: x.Lw6.INVALID_TOKEN }, "Token does not match current user");
                    return (
                        (e.authorization.scopes = [...e.authorization.scopes, ...a, dd.VH]),
                        (e.authorization.accessToken = t),
                        (e.authorization.expires = new Date(l)),
                        X.h.dispatch({ type: "RPC_APP_AUTHENTICATED", socketId: e.id, application: e.application }),
                        { ...n.body, access_token: t }
                    );
                },
                () => {
                    throw new A4.A({ errorCode: x.Lw6.INVALID_TOKEN }, `Invalid access token: ${t}`);
                },
            )
            .catch((t) => {
                throw ((e.authorization.authing = !1), t);
            })
    );
}
let EF =
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
                prompt: _,
                disableGuildSelect: A,
                disclosures: h,
                integrationType: E,
                pid: m,
                signal: I,
            } = e,
            g = `OAuth2Authorize_${t}_${c}_${u}`,
            C = null != E ? n?.get(E) : void 0,
            f = C?.application ?? iW.A.getApplication(t);
        return new Promise((e, C) => {
            let N = (0, Ec.d5)(m),
                S = hf.SY;
            null != f && null != (0, hT.Ay)({ application: f, channelId: u })
                ? (S = hf.KX)
                : N.context === x.BRT.POPOUT && (S = hf.KX);
            let L = !1,
                y = (n) => {
                    let { clientId: i, location: r } = n;
                    if (null == i || i === t) {
                        if (((L = !0), null == r)) {
                            C(new A4.A({ errorCode: x.Lw6.OAUTH2_ERROR }, "OAuth2 Error: No location provided")),
                                N.lock();
                            return;
                        }
                        (e(r), null == l || null == f)
                            ? N.lock()
                            : null == new URL(r).searchParams.get("error")
                              ? (0, T.openModal)(
                                    (e) => (0, p.jsx)(EO.Sm, { application: f, ...e }),
                                    {
                                        onCloseCallback: () => {
                                            N.lock();
                                        },
                                    },
                                    S,
                                )
                              : (0, T.openModal)(
                                    (e) => (0, p.jsx)(EO.xb, { ...e }),
                                    {
                                        onCloseCallback: () => {
                                            N.lock();
                                        },
                                    },
                                    S,
                                );
                    }
                },
                { cleanup: O } = (function (e, t) {
                    function n() {
                        (0, T.closeModal)(e) &&
                            (0, T.openModal)((e) =>
                                (0, p.jsx)(Ey.f, {
                                    ...e,
                                    title: j.intl.string(j.t.j2d6Km),
                                    subtitle: j.intl.string(j.t["4LKmN5"]),
                                    actions: [{ text: j.intl.string(j.t.cpT0Cq), onClick: e.onClose }],
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
                    (0, p.jsx)(EL.OAuth2AuthorizeModal, {
                        ...e,
                        authorizations: n,
                        clientId: t,
                        scopes: i ?? [],
                        disclosures: h ?? [],
                        callback: y,
                        responseType: a,
                        redirectUri: l,
                        codeChallenge: s,
                        codeChallengeMethod: o,
                        state: d,
                        permissions: r,
                        guildId: c,
                        channelId: u,
                        prompt: _,
                        disableGuildSelect: "boolean" == typeof A ? A : "true" === A,
                        integrationType: E,
                        cancelCompletesFlow: !0,
                    }),
                {
                    modalKey: g,
                    onCloseCallback: () => {
                        O(),
                            L ||
                                (C(new A4.A({ errorCode: x.Lw6.OAUTH2_ERROR }, "User cancelled authorization")),
                                N.lock());
                    },
                },
                S,
            );
        });
    }),
    (E = function (e, t, n) {
        if ((0, Ec.kS)(n) || !G.isPlatformEmbedded) return;
        let i = (0, hT.Ay)({ application: e, channelId: t });
        (0, G.isWindows)() ? e0.Ay.minimize(i) : e0.Ay.restore(i), e0.Ay.focus(i);
    }),
    {
        [x.e$_.AUTHENTICATE]: A5(x.e$_.AUTHENTICATE, {
            handler(e) {
                let {
                    socket: t,
                    signal: n,
                    args: { access_token: i },
                } = e;
                if (null == i && t.transport === dd.z4.IPC) {
                    let e = t.application.id;
                    if (null == e) throw new A4.A({ errorCode: x.Lw6.INVALID_COMMAND }, "No application.");
                    let r = AZ.F.IDENTIFY,
                        a = () =>
                            Ek(
                                {
                                    client_id: e,
                                    scope: r,
                                    response_type: "token",
                                    signal: n,
                                    isSocketRpcPrivateScope: !1,
                                },
                                h,
                                E,
                            ).then((n) => {
                                var i, r, a;
                                let l;
                                if (null == n)
                                    throw new A4.A({ errorCode: x.Lw6.UNKNOWN_ERROR }, "Unknown error occurred");
                                let s = n.split(/#|\?/),
                                    o = Eb.parse(s[s.length - 1]);
                                if (null != o.error)
                                    throw new A4.A(
                                        { errorCode: x.Lw6.OAUTH2_ERROR },
                                        `OAuth2 Error: ${o.error}: ${o.error_description ?? "unknown error"}`,
                                    );
                                return (
                                    (i = o.access_token),
                                    (r = o.scope),
                                    (a = o.expires_in),
                                    ((l = tl.w.get(EG) ?? {})[e] = {
                                        accessToken: i,
                                        scope: r,
                                        expires: Date.now() + a,
                                    }),
                                    tl.w.set(EG, l),
                                    EV(t, o.access_token)
                                );
                            });
                    return null !=
                        (i = (function (e, t) {
                            let n = tl.w.get(EG);
                            if (null != n && null != n[e]) {
                                let i = n[e];
                                if (!(i.scope !== t || i.expires <= Date.now())) return i.accessToken;
                                delete n[e], tl.w.set(EG, n);
                            }
                        })(e, r))
                        ? EV(t, i).catch(() => {
                              let t;
                              return (t = tl.w.get(EG) ?? {}), delete t[e], tl.w.set(EG, t), a();
                          })
                        : a();
                }
                if (null == i) throw new A4.A({ errorCode: x.Lw6.INVALID_TOKEN }, "No access token provided");
                return EV(t, i);
            },
        }),
        [x.e$_.AUTHORIZE]: {
            handler(e) {
                let { socket: t, signal: n, args: i } = e,
                    r = i.client_id;
                if (!r) throw new A4.A({ errorCode: x.Lw6.INVALID_CLIENTID }, "No client id provided");
                if (null != t.authorization.accessToken)
                    throw new A4.A({ errorCode: x.Lw6.INVALID_COMMAND }, "Already authenticated");
                if (t.authorization.authing) throw new A4.A({ errorCode: x.Lw6.INVALID_COMMAND }, "Already authing");
                if (((t.authorization.authing = !0), "token" === i.response_type))
                    throw (
                        ((t.authorization.authing = !1),
                        new A4.A(
                            { errorCode: x.Lw6.INVALID_COMMAND },
                            'Authorization response_type "token" is not supported',
                        ))
                    );
                let a = t.authorization.scopes.includes(dd.LQ);
                if (!a && t.application.id !== r)
                    throw (
                        ((t.authorization.authing = !1),
                        new A4.A({ errorCode: x.Lw6.INVALID_CLIENTID }, "Application does not match the connection's"))
                    );
                let l = i.scopes || i.scope;
                return (
                    delete i.scopes,
                    Ek({ ...i, scope: l, signal: n, isSocketRpcPrivateScope: a }, h, E)
                        .then((e) => {
                            if (((t.authorization.authing = !1), null == e))
                                throw new A4.A({ errorCode: x.Lw6.UNKNOWN_ERROR }, "Unknown error occurred");
                            let n = new URL(e),
                                i = n.searchParams.get("code");
                            if (a) return { code: i, location: e };
                            let r = n.searchParams.get("error");
                            if (null != r && "" !== r) {
                                let e = n.searchParams.get("error_description") ?? "unknown error";
                                throw new A4.A({ errorCode: x.Lw6.OAUTH2_ERROR }, `OAuth2 Error: ${r}: ${e}`);
                            }
                            if (null == i)
                                throw new A4.A(
                                    { errorCode: x.Lw6.OAUTH2_ERROR },
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
var EH = n(845187);
let EB = "activity-hardware-acceleration-modal",
    EY = {
        [x.e$_.ENCOURAGE_HW_ACCELERATION]: {
            validation: (e) => hn(e),
            handler(e) {
                let { socket: t } = e;
                (0, AY.lG)(t.transport);
                let i = t.application.id;
                if (null != i)
                    return (
                        tK.Ay.disableActivityHardwareAccelerationPrompt ||
                            !G.isPlatformEmbedded ||
                            e0.Ay.getEnableHardwareAcceleration() ||
                            (0, T.openModalLazy)(
                                async () => {
                                    let { default: e } = await Promise.resolve().then(n.bind(n, 845187));
                                    return (t) => (0, p.jsx)(e, { applicationId: i, ...t });
                                },
                                {
                                    modalKey: EB,
                                    onCloseRequest: () => {
                                        eu.default.track(x.HAw.MODAL_DISMISSED, { type: EH.a }), (0, T.closeModal)(EB);
                                    },
                                },
                            ),
                        { enabled: e0.Ay.getEnableHardwareAcceleration() }
                    );
            },
        },
    };
var E$ = n(43203);
let EW = {
        [x.e$_.OPEN_MESSAGE]: {
            scope: dd.hj,
            handler(e) {
                let {
                    args: { guild_id: t, channel_id: n, message_id: i, pid: r },
                } = e;
                (0, Ec.d5)(r).context === x.BRT.OVERLAY
                    ? X.h.dispatch({ type: "OVERLAY_OPEN_MESSAGE", guildId: t, channelId: n, messageId: i })
                    : ((0, aO.bG)({ pathname: x.BVt.CHANNEL(t, n, i) }), e0.Ay.focus());
            },
        },
    },
    Ez = new ca.A("RPCCommandsOverlay"),
    EK = {
        [x.e$_.SET_OVERLAY_LOCKED]: {
            scope: dd.hj,
            validation: (e) =>
                hn(e)
                    .required()
                    .keys({ locked: e.boolean().required(), pid: e.number().min(0).required() }),
            handler(e) {
                let {
                    args: { locked: t, pid: n },
                    socket: { application: i },
                } = e;
                if ((Ez.verbose("RPCCommands.SET_OVERLAY_LOCKED", { locked: t, pid: n }), null == i.id))
                    throw new A4.A({ errorCode: x.Lw6.INVALID_COMMAND }, "No application.");
                _d.A.setInputLocked(t, n);
            },
        },
        [x.e$_.OPEN_OVERLAY_ACTIVITY_INVITE]: {
            scope: dd.hj,
            validation: (e) =>
                hn(e)
                    .required()
                    .keys({ type: e.number().required().valid([x.xL.JOIN]), pid: e.number().min(0).required() }),
            handler(e) {
                let {
                        socket: t,
                        args: { type: n, pid: i },
                    } = e,
                    r = t.application.id;
                if (null == r) throw new A4.A({ errorCode: x.Lw6.INVALID_COMMAND }, "No application.");
                let a = rk.A.getApplicationActivity(r);
                if (null == a || null == a.secrets || !(0, AY.px)(n, a.party, a.secrets))
                    throw new A4.A(
                        { errorCode: x.Lw6.NO_ELIGIBLE_ACTIVITY },
                        "No eligible activity for application. Ensure an activity includes a party and appropriate secret.",
                    );
                let { lock: l, context: s } = (0, Ec.d5)(i),
                    o = EE(a, rF.A);
                return (0, E_.qf)(a, o, s).then(() => {
                    if ((l(), o))
                        throw new A4.A(
                            { errorCode: x.Lw6.NO_ELIGIBLE_ACTIVITY },
                            "No eligible activity for application. Ensure user does have have privacy enabled.",
                        );
                });
            },
        },
        [x.e$_.OPEN_OVERLAY_GUILD_INVITE]: {
            scope: dd.hj,
            validation: (e) =>
                hn(e)
                    .required()
                    .keys({ code: e.string().required(), pid: e.number().min(0).required() }),
            handler(e) {
                let {
                    args: { code: t, pid: n },
                    socket: i,
                } = e;
                if (null == i.application.id) throw new A4.A({ errorCode: x.Lw6.INVALID_COMMAND }, "No application.");
                return uJ.Ay.resolveInvite(t, "Game SDK").then((e) => {
                    let { invite: t, code: i } = e;
                    if (null == t) throw new A4.A({ errorCode: x.Lw6.INVALID_INVITE }, `Invalid invite id: ${i}`);
                    let { context: r, lock: a } = (0, Ec.d5)(n);
                    return new Promise((e) => {
                        X.h.dispatch({ type: "INVITE_MODAL_OPEN", invite: t, code: i, context: r, resolve: e });
                    }).then(a);
                });
            },
        },
        [x.e$_.OPEN_OVERLAY_VOICE_SETTINGS]: {
            scope: dd.hj,
            validation: (e) =>
                hn(e)
                    .required()
                    .keys({ pid: e.number().min(0).required() }),
            handler(e) {
                let {
                        args: { pid: t },
                        socket: i,
                    } = e,
                    r = i.application.id;
                if (null == r) throw new A4.A({ errorCode: x.Lw6.INVALID_COMMAND }, "No application.");
                let { lock: a, context: l } = (0, Ec.d5)(t);
                return new Promise((e) => {
                    (0, T.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.all([n.e("28367"), n.e("58847")]).then(
                                n.bind(n, 880510),
                            );
                            return (t) =>
                                (0, p.jsx)(e, { ...t, mediaEngineContext: r, subtitle: i.application.name ?? void 0 });
                        },
                        {
                            contextKey: l === x.BRT.POPOUT ? hf.KX : hf.SY,
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
    EX = n(80703),
    EZ = n(6981),
    EQ = n(956549),
    EJ = n(257269),
    E0 = n(323082),
    E1 = n(121623),
    E2 = n(708281);
function E6(e, t) {
    let { fingerprint: n, installationId: i } = e;
    (null != n || null != i) &&
        eu.default.track(x.HAw.EXTERNAL_DYNAMIC_LINK_RECEIVED, {
            invite_code: null,
            has_auth_token: null,
            is_backgrounded: null,
            fingerprint: null != n ? (0, EX.d)(n) : null,
            received_installation_id: i,
            link_type: t,
        });
}
let E5 = {
        [x.e$_.INVITE_BROWSER]: {
            scope: dd.LQ,
            async handler(e) {
                let {
                    args: { code: t, ...n },
                } = e;
                return await (0, E$.$)(t, "Desktop Modal", n);
            },
        },
        [x.e$_.GUILD_TEMPLATE_BROWSER]: {
            scope: dd.LQ,
            async handler(e) {
                let {
                    args: { code: t },
                } = e;
                if (null == iA.default.getCurrentUser()) return;
                let { guildTemplate: i } = await E1.A.resolveGuildTemplate(t);
                if (null == i)
                    throw new A4.A({ errorCode: x.Lw6.INVALID_GUILD_TEMPLATE }, `Invalid guild template id: ${t}`);
                return (
                    e0.Ay.focus(),
                    (0, T.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([n.e("82486"), n.e("16198"), n.e("85226")]).then(
                            n.bind(n, 72715),
                        );
                        return (t) => (0, p.jsx)(e, { ...t, guildTemplate: i });
                    }),
                    { guildTemplate: i, code: t }
                );
            },
        },
        [x.e$_.GIFT_CODE_BROWSER]: {
            scope: dd.LQ,
            handler(e) {
                let {
                    args: { code: t },
                } = e;
                return new Promise((e, i) => {
                    X.h.wait(() => {
                        L.A.resolveGiftCode(t, !0, !0)
                            .then((i) => {
                                let { giftCode: r } = i;
                                e0.Ay.focus(),
                                    eu.default.track(x.HAw.OPEN_MODAL, { type: "gift_accept", location: x.$OG }),
                                    (0, T.openModalLazy)(async () => {
                                        let { default: e } = await Promise.all([n.e("7200"), n.e("68156")]).then(
                                            n.bind(n, 361845),
                                        );
                                        return (n) => (0, p.jsx)(e, { code: t, ...n });
                                    }),
                                    e({ giftCode: r });
                            })
                            .catch(() =>
                                i(new A4.A({ errorCode: x.Lw6.INVALID_GIFT_CODE }, `Invalid gift code: ${t}`)),
                            );
                    });
                });
            },
        },
        [x.e$_.DEEP_LINK]: {
            scope: { [dd.sm.ANY]: [dd.LQ, dd.hj] },
            handler(e) {
                let {
                    args: { type: t, params: i },
                } = e;
                switch ((e0.Ay.focus(), t)) {
                    case dd.XK.USER_SETTINGS:
                        null != i &&
                            (0, uQ.B)(() => {
                                let e = x.BVt.SETTINGS(i.section, i.subsection),
                                    n = (0, lJ.parseSettingsUrl)({ path: e, search: i.search });
                                (0, lJ.trackParseSettingsUrl)(n, "deeplink"),
                                    (0, e3.openUserSettings)(n.target, { path: n.path, searchParams: n.params }),
                                    E6(i, (0, dd.OE)(t));
                            });
                        break;
                    case dd.XK.CHANGELOG:
                        null != i &&
                            ((0, aO.pX)(EI.A.formatPathWithQuery(x.BVt.CHANGELOGS(i.date), i.query)),
                            E6(i, (0, dd.OE)(t)));
                        break;
                    case dd.XK.LIBRARY:
                        (0, aO.pX)(x.BVt.APPLICATION_LIBRARY), null != i && E6(i, (0, dd.OE)(t));
                        break;
                    case dd.XK.STORE_HOME:
                        (0, aO.pX)(x.BVt.APPLICATION_STORE), null != i && E6(i, (0, dd.OE)(t));
                        break;
                    case dd.XK.STORE_LISTING:
                        null != i &&
                            ((0, aO.pX)(x.BVt.APPLICATION_STORE_LISTING_SKU(i.skuId, i.slug)), E6(i, (0, dd.OE)(t)));
                        break;
                    case dd.XK.PICK_GUILD_SETTINGS:
                        null != i &&
                            ((0, aO.pX)(x.BVt.PICK_GUILD_SETTINGS(i.section, i.subsection), { search: i.search }),
                            E6(i, (0, dd.OE)(t)));
                        break;
                    case dd.XK.CHANNEL:
                        null != i &&
                            ((0, aO.pX)(x.BVt.CHANNEL(i.guildId, i.channelId, i.messageId), { search: i.search }),
                            E6(i, (0, dd.OE)(t)));
                        break;
                    case dd.XK.GAME_SHOP:
                        null != i &&
                            ((0, aO.pX)(x.BVt.CHANNELS_GAME_SHOP(i.guildId, i.pageIndex, i.skuId, i.slug)),
                            E6(i, (0, dd.OE)(t)));
                        break;
                    case dd.XK.QUEST_HOME:
                        if (null != i) {
                            let e = new URLSearchParams();
                            null != i.sort && e.set(is.L1.SORT, i.sort),
                                null != i.filter && e.set(is.L1.FILTER, i.filter),
                                null != i.tab && e.set(is.L1.TAB, i.tab),
                                (0, aO.pX)(x.BVt.QUEST_HOME, { hash: i.questId, search: `?${e.toString()}` }),
                                E6(i, (0, dd.OE)(t));
                        } else (0, aO.pX)(x.BVt.QUEST_HOME);
                        break;
                    case dd.XK.QUEST_PREVIEW_TOOL:
                        if (null != i) {
                            let e = new URLSearchParams();
                            e.set(is.L1.TAB, is.NC.PREVIEW_TOOL),
                                null != i.questId && e.set(is.L1.QUEST_ID, i.questId),
                                (0, aO.pX)(x.BVt.QUEST_HOME, { search: `?${e.toString()}` }),
                                E6(i, (0, dd.OE)(t));
                        }
                        break;
                    case dd.XK.DISCOVERY_GAME_RESULTS:
                        null != i &&
                            ((0, aO.pX)(x.BVt.GLOBAL_DISCOVERY_SERVERS, { search: `?game=${i.gameId}` }),
                            E6(i, (0, dd.OE)(t)));
                        break;
                    case dd.XK.OAUTH2:
                        let r = new URL(x.BVt.OAUTH2_AUTHORIZE, window.location.origin);
                        r.search = i.search;
                        let a = (0, EL.getOAuth2AuthorizeProps)(r.toString());
                        if (null != a) return (0, EL.openOAuth2ModalWithCreateGuildModal)(a), !0;
                        return !1;
                    case dd.XK.ONE_TIME_LOGIN:
                        if (null != i) return (0, E2.N)({ token: i.token }), E6(i, (0, dd.OE)(t)), !0;
                        return !1;
                    case dd.XK.SHOP:
                        null != i && ((0, aO.pX)(x.BVt.COLLECTIBLES_SHOP, { search: i.search }), E6(i, (0, dd.OE)(t)));
                        break;
                    case dd.XK.FEATURES:
                        i?.path != null && ((0, aO.pX)(i.path), E6(i, (0, dd.OE)(t)));
                        break;
                    case dd.XK.ACTIVITIES:
                        if (null != i) {
                            let e = i.attemptId || (0, Eq.A)();
                            return (
                                (async function (e, t, n) {
                                    try {
                                        let i = rR.Ay.getCurrentEmbeddedActivity();
                                        if (i?.applicationId === e)
                                            return void eu.default.track(x.HAw.ACTIVITY_DEEP_LINK_RECEIVED, {
                                                application_id: e,
                                                success: !1,
                                                failure_reason: "activity_already_running",
                                                attempt_id: n,
                                            });
                                        let r = await i$.Ay.fetchApplication(e),
                                            a = r?.bot?.id;
                                        if (null == a)
                                            return void eu.default.track(x.HAw.ACTIVITY_DEEP_LINK_RECEIVED, {
                                                application_id: e,
                                                success: !1,
                                                failure_reason: "no_bot_user",
                                                attempt_id: n,
                                            });
                                        let l = await r0.A.openPrivateChannel({ recipientIds: a }),
                                            s = new URL(t),
                                            o = s.searchParams.get("referrer_id") ?? void 0,
                                            { customId: d } = await (0, EJ.d9)(
                                                e,
                                                s.searchParams.get("link_id"),
                                                s.searchParams.get("custom_id"),
                                            );
                                        await (0, EQ.A)({
                                            targetApplicationId: e,
                                            channelId: l,
                                            analyticsLocations: [eC.A.DEEPLINK],
                                            customId: d,
                                            referrerId: o,
                                        }),
                                            eu.default.track(x.HAw.ACTIVITY_DEEP_LINK_RECEIVED, {
                                                application_id: e,
                                                success: !0,
                                                failure_reason: null,
                                                attempt_id: n,
                                            });
                                    } catch (t) {
                                        eu.default.track(x.HAw.ACTIVITY_DEEP_LINK_RECEIVED, {
                                            application_id: e,
                                            success: !1,
                                            failure_reason: "launch_failed",
                                            attempt_id: n,
                                        });
                                    }
                                })(i.applicationId, i.url, e),
                                E6(i, (0, dd.OE)(t)),
                                !0
                            );
                        }
                        return !1;
                    case dd.XK.PLAYGROUND:
                        if (null != i) {
                            let { openPlayground: e } = n(965042);
                            e(i.collection, i.story), E6(i, (0, dd.OE)(t));
                        }
                }
            },
        },
        [x.e$_.BROWSER_HANDOFF]: {
            scope: dd.kw,
            handler(e) {
                let {
                    args: { handoffToken: t, fingerprint: n },
                } = e;
                e0.Ay.focus(null, !0), (0, EZ.mZ)(t, n);
            },
        },
        [x.e$_.CONNECTIONS_CALLBACK]: {
            scope: dd.LQ,
            handler: async (e) => {
                let {
                    args: { providerType: t, code: n, openid_params: i, iss: r, state: a },
                } = e;
                if (!rw.A.hasPendingAuthorizedState(a))
                    throw new A4.A(
                        { errorCode: x.Lw6.INVALID_CONNECTION_CALLBACK_STATE },
                        "Provider authorization did not originate from this discord client",
                    );
                try {
                    return (
                        rw.A.deletePendingAuthorizedState(a),
                        await hD.A.callback(t, { code: n, openid_params: i, iss: r, state: a })
                    );
                } catch (e) {
                    if (e?.status === 400)
                        throw new A4.A({ errorCode: x.Lw6.BAD_REQUEST_FOR_PROVIDER }, "Bad request for provider");
                    throw (t0._.dispatch(x.jej.CONNECTIONS_CALLBACK_ERROR), e);
                }
            },
        },
        [x.e$_.BRAINTREE_POPUP_BRIDGE_CALLBACK]: {
            scope: dd.LQ,
            handler(e) {
                let {
                    args: { state: t, path: n, query: i },
                } = e;
                return (0, E0.re)({ paymentSourceType: x.hes.PAYPAL, state: t, path: n, query: i });
            },
        },
        [x.e$_.BILLING_POPUP_BRIDGE_CALLBACK]: {
            scope: dd.LQ,
            handler(e) {
                let {
                    args: { state: t, path: n, query: i, payment_source_type: r },
                } = e;
                return (0, E0.re)({ paymentSourceType: r, state: t, path: n, query: i });
            },
        },
    },
    E3 = {
        [x.e$_.SET_SUPPRESS_NOTIFICATIONS]: {
            scope: dd.hj,
            handler(e) {
                let {
                    socket: t,
                    args: { suppress_notifications: n, target_user_id: i },
                } = e;
                X.h.dispatch({
                    type: "SET_RPC_NOTIFICATION_SETTINGS",
                    socketId: t.id,
                    suppressNotifications: n,
                    targetUserId: i,
                });
            },
        },
    },
    E4 = [eC.A.RPC];
function E8(e, t) {
    let n = { subscriptionTier: a8.pe.TIER_2, analyticsLocations: E4, analyticsObject: t };
    switch (e) {
        case x.BRT.APP:
            return Ay.A.openPremiumPaymentModalInApp(n);
        case x.BRT.OVERLAY:
            return Ay.A.openPremiumPaymentModalInOverlay(n);
        default:
            throw Error(`Unexpected app context: ${e}`);
    }
}
let E7 = {
        [x.e$_.START_PURCHASE]: {
            [dd.sm.ANY]: [dd.VH, dd.hj],
            validation: (e) =>
                hn(e)
                    .required()
                    .keys({ sku_id: e.string().required(), pid: e.number().min(0) }),
            handler(e) {
                let {
                    socket: t,
                    args: { sku_id: i, pid: r },
                } = e;
                hJ(t.transport);
                let a = t.application.id;
                if (null == a) throw new A4.A({ errorCode: x.Lw6.INVALID_COMMAND }, "No application.");
                let { lock: l, context: s } = (0, Ec.d5)(t.transport !== dd.z4.POST_MESSAGE ? r : null);
                if (null == A8()) throw new A4.A({ errorCode: x.Lw6.INVALID_CHANNEL }, "Invalid channel");
                let o = { page: x.liQ.IN_APP };
                return (async () => {
                    try {
                        let { openIAPPurchaseModal: e } = await Promise.all([
                                n.e("32292"),
                                n.e("28367"),
                                n.e("45174"),
                                n.e("85519"),
                                n.e("11871"),
                                n.e("37266"),
                                n.e("55057"),
                                n.e("14976"),
                                n.e("63229"),
                                n.e("31988"),
                                n.e("55343"),
                                n.e("90161"),
                                n.e("99717"),
                                n.e("6698"),
                                n.e("90184"),
                                n.e("48672"),
                            ]).then(n.bind(n, 4630)),
                            t = await e({
                                applicationId: a,
                                skuId: i,
                                openPremiumPaymentModal: () => E8(s, o),
                                analyticsLocations: E4,
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
                                new A4.A({ errorCode: x.Lw6.PURCHASE_ERROR }, t))
                            );
                        }
                        throw new A4.A({ errorCode: x.Lw6.PURCHASE_CANCELED }, "Purchase was canceled by the user.");
                    }
                })();
            },
        },
        [x.e$_.START_PREMIUM_PURCHASE]: {
            [dd.sm.ANY]: [dd.VH, dd.hj],
            validation: (e) => hn(e).keys({ pid: e.number().min(0) }),
            handler(e) {
                let {
                    socket: t,
                    args: { pid: n },
                } = e;
                if ((hJ(t.transport), null == t.application.id))
                    throw new A4.A({ errorCode: x.Lw6.INVALID_COMMAND }, "No application.");
                let { lock: i, context: r } = (0, Ec.d5)(t.transport !== dd.z4.POST_MESSAGE ? n : null);
                return E8(r, { page: x.liQ.IN_APP }).then(
                    () => {
                        i();
                    },
                    (e) => {
                        if ((i(), null != e)) throw new A4.A({ errorCode: x.Lw6.PURCHASE_ERROR }, e);
                        throw new A4.A({ errorCode: x.Lw6.PURCHASE_CANCELED }, "Purchase was canceled by the user.");
                    },
                );
            },
        },
    },
    E9 = {
        [x.e$_.SEND_GENERIC_EVENT]: {
            handler(e) {
                throw new A4.A({ errorCode: x.Lw6.INVALID_COMMAND }, `Deprecated command: ${e.cmd}`);
            },
        },
    },
    pe = {
        [x.e$_.TOGGLE_VIDEO]: {
            scope: { [dd.sm.ALL]: [AZ.F.RPC, AZ.F.RPC_VIDEO_WRITE] },
            handler() {
                let e = eL.Ay.isVideoEnabled();
                null != (0, hz.A)() &&
                    (e ? eT.A.setVideoEnabled(!1) : (0, oT.A)(() => eT.A.setVideoEnabled(!0), x.BRT.APP));
            },
        },
        [x.e$_.TOGGLE_SCREENSHARE]: {
            scope: { [dd.sm.ALL]: [AZ.F.RPC, AZ.F.RPC_SCREENSHARE_WRITE] },
            validation: (e) =>
                hn(e)
                    .optional()
                    .keys({ pid: e.number().optional().min(0) }),
            handler(e) {
                let {
                        args: { pid: t },
                    } = e,
                    i = oS.A.getCurrentUserActiveStream(),
                    r = oS.A.getStreamerActiveStreamMetadata(),
                    a = (0, _g.A)(eN.Ay, _m.A),
                    l = (0, hz.A)();
                null != l &&
                    (null != t && null != r && r.pid !== t && (0, G.isWindows)()
                        ? (0, ip.XI)(l.guild_id, l.id, { pid: t })
                        : null != i
                          ? (0, ip.nO)(!1)
                          : null != t && (0, G.isWindows)()
                            ? (0, ip.XI)(l.guild_id, l.id, { pid: t })
                            : null != a
                              ? (0, ip.XI)(l.guild_id, l.id, { pid: a.pid })
                              : (0, T.openModalLazy)(async () => {
                                    let { default: e } = await Promise.all([n.e("27713"), n.e("29463")]).then(
                                        n.bind(n, 301400),
                                    );
                                    return (t) => (0, p.jsx)(e, { ...t, analyticsLocations: [eC.A.RPC] });
                                }));
            },
        },
    };
var pt = n(350535);
function pn(e) {
    let t = e.application.id;
    if (null == t) throw new A4.A({ errorCode: x.Lw6.INVALID_COMMAND }, "No application.");
    return t;
}
let pi = {
        [x.e$_.SET_VOICE_SETTINGS_2]: {
            scope: dd.hj,
            validation: (e) =>
                hn(e)
                    .required()
                    .keys({
                        input_mode: hn(e).keys({
                            type: e.string().valid(Object.keys(x.TBI)),
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
                    a = pn(t);
                null != n && eT.A.setMode(n.type, { shortcut: (0, pt.OH)(n.shortcut) }, a),
                    null != i && i !== eL.Ay.isSelfMute(a) && eT.A.toggleSelfMute({ context: a }),
                    null != r && r !== eL.Ay.isSelfDeaf(a) && eT.A.toggleSelfDeaf({ context: a });
            },
        },
        [x.e$_.SET_USER_VOICE_SETTINGS_2]: {
            scope: dd.hj,
            validation: (e) =>
                hn(e)
                    .required()
                    .keys({ user_id: e.string().required(), volume: e.number().min(0).max(200), mute: e.boolean() }),
            handler(e) {
                let {
                        socket: t,
                        args: { user_id: n, mute: i, volume: r },
                    } = e,
                    a = pn(t);
                null != i && i !== eL.Ay.isLocalMute(n, a) && eT.A.toggleLocalMute(n, a),
                    null != r && eT.A.setLocalVolume(n, r, a);
            },
        },
        [x.e$_.PUSH_TO_TALK]: {
            scope: { [dd.sm.ALL]: [AZ.F.RPC, AZ.F.RPC_VOICE_WRITE] },
            validation: (e) => hn(e).required().keys({ active: e.boolean() }),
            handler(e) {
                let {
                    args: { active: t },
                } = e;
                eL.Ay.getMode(eO.x.DEFAULT) === x.TBI.PUSH_TO_TALK && (0, _f.N)(t);
            },
        },
    },
    pr = {
        [x.e$_.SET_USER_VOICE_SETTINGS]: {
            scope: { [dd.sm.ANY]: [AZ.F.RPC, AZ.F.RPC_VOICE_WRITE] },
            validation: (e) =>
                hn(e)
                    .required()
                    .keys({
                        user_id: e.string().required(),
                        pan: hn(e).keys({
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
                    a = iA.default.getCurrentUser();
                if (null == iA.default.getUser(t) || a?.id === t)
                    throw new A4.A({ errorCode: x.Lw6.INVALID_USER }, `Invalid user id: ${t}`);
                if (
                    (null != n && eT.A.setLocalPan(t, n.left, n.right),
                    null != i && eT.A.setLocalVolume(t, i),
                    null != r)
                ) {
                    let e = eL.Ay.isLocalMute(t);
                    ((e && !r) || (!e && r)) && eT.A.toggleLocalMute(t);
                }
                return {
                    user_id: t,
                    pan: eL.Ay.getLocalPan(t),
                    volume: eL.Ay.getLocalVolume(t),
                    mute: eL.Ay.isLocalMute(t),
                };
            },
        },
        [x.e$_.GET_VOICE_SETTINGS]: {
            scope: { [dd.sm.ANY]: [AZ.F.RPC, AZ.F.RPC_VOICE_READ] },
            handler: () => (0, Ec.l6)(),
        },
        [x.e$_.SET_VOICE_SETTINGS]: {
            scope: { [dd.sm.ANY]: [AZ.F.RPC, AZ.F.RPC_VOICE_WRITE] },
            validation: (e) =>
                hn(e)
                    .required()
                    .keys({
                        input: hn(e).keys({
                            device_id: e.string().valid(Object.keys(eL.Ay.getInputDevices())),
                            volume: e.number().min(0).max(100),
                        }),
                        output: hn(e).keys({
                            device_id: e.string().valid(Object.keys(eL.Ay.getOutputDevices())),
                            volume: e.number().min(0).max(200),
                        }),
                        mode: hn(e).keys({
                            type: e.string().valid(Object.keys(x.TBI)),
                            auto_threshold: e.boolean(),
                            threshold: e.number().min(-100).max(0),
                            shortcut: e
                                .array()
                                .items(
                                    hn(e).keys({
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
                    let e = eL.Ay.getMode(),
                        t = eL.Ay.getModeOptions();
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
                    let e = eL.Ay.isSelfDeaf();
                    ((e && !d) || (!e && d)) && eT.A.toggleSelfDeaf();
                }
                if (null != c) {
                    let e = eL.Ay.isSelfMute();
                    ((e && !c) || (!e && c)) && eT.A.toggleSelfMute();
                }
                return (0, Ec.l6)();
            },
        },
    };
var pa = n(111162),
    pl = n(861621),
    ps = n(143236),
    po = n(440454);
let pd = 10 * e_.A.Millis.SECOND,
    pc = new Map(),
    pu = new Set(),
    p_ = (e, t, n) => {
        n([po.A.CLOSE, t], e);
    };
class pA extends ps.EventEmitter {
    validateSocketClient;
    logger;
    createPostMessageProxySocket;
    onFrameHandled;
    handshakeFailureTimeoutId;
    constructor(e, t, n, i) {
        super(),
            t0._.subscribe(x.jej.IFRAME_MOUNT, this.handleIFrameMount),
            t0._.subscribe(x.jej.IFRAME_UNMOUNT, this.handleIFrameUnmount),
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
            let [r] = Array.from(pc.entries()).find((e) => {
                let [n, i] = e;
                return i === t;
            }) ?? [null, null];
            null != r && pc.delete(r);
        };
    })();
    handleIFrameMount = (e) => {
        let { id: t } = e;
        pu.add(t),
            (this.handshakeFailureTimeoutId = setTimeout(() => {
                Array.from(rR.Ay.getSelfEmbeddedActivities().entries()).forEach((e) => {
                    let [t, n] = e;
                    eu.default.track(x.HAw.ACTIVITY_HANDSHAKE_TIMED_OUT, {
                        application_id: t,
                        channel_id: (0, A$.H)(n.location),
                        guild_id: (0, A$.D)(n.location),
                        timeout_ms: pd,
                    });
                });
            }, pd));
    };
    handleIFrameUnmount = (e) => {
        let { id: t } = e;
        pu.delete(t);
        let [n, i] = Array.from(pc.entries()).find((e) => {
            let [n, i] = e;
            return i.frameId === t;
        }) ?? [null, null];
        null != i &&
            null != n &&
            (this.disconnectSocket(i, { code: x.YI$.CLOSE_NORMAL, message: "iFrame gone" }, !0), pc.delete(n));
    };
    handleMessage = (e, t, n) => {
        let i = pc.get(t);
        try {
            this.routeEvent(i, t, e, n);
        } catch (e) {
            if (e instanceof A4.A && e.errorCode === x.Lw6.INVALID_PAYLOAD) throw e;
            null != i
                ? this.disconnectSocket(i, { code: e.code, message: e.message }, !0)
                : p_(t, { code: e.code, message: e.message }, n);
        }
    };
    routeEvent(e, t, n, i) {
        if (!Array.isArray(n))
            return void console.warn("[PostMessageTransport] Protocol error: event data should be an Array!");
        let [r, a] = n;
        switch (r) {
            case po.A.HANDSHAKE:
                if (null != e) throw new A4.A({ closeCode: x.YI$.CLOSE_UNSUPPORTED }, "Already connected");
                return this.handleHandshake(t, a, i);
            case po.A.FRAME:
                if (null == e) throw new A4.A({ closeCode: x.YI$.CLOSE_UNSUPPORTED }, "Not connected");
                return this.handleFrame(t, e, a);
            case po.A.CLOSE:
                if (null == e) throw new A4.A({ closeCode: x.YI$.CLOSE_UNSUPPORTED }, "Not connected");
                return this.handleClose(e, a);
            default:
                throw new A4.A({ closeCode: x.YI$.CLOSE_UNSUPPORTED }, "Invalid opcode");
        }
    }
    handleFrame = (e, t, n) => {
        let i;
        if (e !== t.origin) throw new A4.A({ closeCode: x.YI$.INVALID_ORIGIN }, "Origin has changed");
        try {
            i = "string" == typeof n ? JSON.parse(n) : n;
        } catch (e) {
            throw new A4.A({ closeCode: x.YI$.CLOSE_UNSUPPORTED }, "Payload not recognized encoding");
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
                hn(a)
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
            throw new A4.A({ closeCode: x.YI$.CLOSE_UNSUPPORTED }, e.message);
        }
        let l = t.frame_id;
        if (!pu.has(l))
            throw (
                (this.logger.error(`Unrecognized frame ID ${l}`),
                new A4.A({ closeCode: x.YI$.CLOSE_UNSUPPORTED }, `Unrecognized frame ID ${l}`))
            );
        null != t.sdk_version &&
            eu.default.track(x.HAw.ACTIVITY_HANDSHAKE, { application_id: t.client_id, sdk_version: t.sdk_version });
        try {
            r = this.createPostMessageProxySocket({
                origin: e,
                postMessageToRPCClient: i,
                frameId: l,
                version: Number(t.v),
                logger: this.logger,
                postClose: p_,
                encoding: t.encoding ?? "json",
            });
        } catch (e) {
            throw (this.logger.error(`Error opening window socket ${e}`), e);
        }
        this.logger.info(`Socket Opened: ${r.id}`);
        try {
            if ((await this.validateSocketClient(r, e, t.client_id), !pu.has(l)))
                throw (
                    (this.logger.error(`Frame ID ${l} no longer exists`),
                    new A4.A({ closeCode: x.YI$.CLOSE_UNSUPPORTED }, `Unrecognized frame ID ${l}`))
                );
            pc.set(e, r),
                pu.delete(l),
                r.authorization.scopes.push(dd.W_),
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
                hn(i)
                    .required()
                    .keys({ code: i.number().valid(Object.values(x.YI$)).required(), message: i.string().optional() }),
            );
        } catch (e) {
            throw new A4.A({ closeCode: x.YI$.CLOSE_UNSUPPORTED }, e.message);
        }
        this.disconnectSocket(e, t);
    };
}
var ph = n(313731);
class pE extends ph.A {
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
        if ((super(dd.z4.POST_MESSAGE, i, r), -1 === ["etf", "json"].indexOf(r)))
            throw new A4.A({ closeCode: x.YI$.INVALID_ENCODING }, `Invalid Encoding: ${r}`);
        if ("etf" === r) throw new A4.A({ closeCode: x.YI$.INVALID_ENCODING }, "Erlpack cannot be used on this client");
        (this.origin = e),
            (this.postMessageToRPCClient = t),
            (this.frameId = n),
            (this.logger = a),
            (this.postClose = l),
            (this.onSendingToRPCClient = s),
            (this.closed = !1);
    }
    send(e) {
        this.onSendingToRPCClient?.(e, this.id), this.postMessageToRPCClient([po.A.FRAME, e], this.origin);
    }
    close(e, t) {
        this.closed || this.postClose(this.origin, { code: e, message: t }, this.postMessageToRPCClient),
            (this.closed = !0);
    }
}
let pp = new ca.A("RPCServer:PostMessage"),
    pm =
        ((s = new pA(
            Ec.j7,
            pp,
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
                return new pE({
                    origin: t,
                    postMessageToRPCClient: n,
                    frameId: i,
                    version: r,
                    encoding: a,
                    logger: l,
                    postClose: s,
                    onSendingToRPCClient: (e, t) => {
                        (pa.default.isLoggingOverlayEvents || (e.cmd !== x.e$_.OVERLAY && e.evt !== x.ZE4.OVERLAY)) &&
                            l.info(`Socket Emit: ${t}`, (0, pl.A)(e));
                    },
                });
            },
            (e, t, n) => {
                (pa.default.isLoggingOverlayEvents || e.cmd !== x.e$_.OVERLAY) &&
                    t.info(`Socket Message: ${n.id}`, (0, pl.A)(e));
            },
        )),
        window.addEventListener("message", (e) => {
            if (window === e.source) return;
            if (null == e.source || null == e.source.postMessage) return void pp.error("Unknown event source");
            let t = e.source,
                n = e.data,
                i = e.origin;
            s.handleMessage(n, i, (e, n) => {
                !(function (e) {
                    try {
                        return e.closed;
                    } catch {
                        return !1;
                    }
                })(t) && t.postMessage(e, n);
            });
        }),
        s),
    pI = { ...h9, ...Ef, ...ES, ...EY, ...EW, ...E$.A, ...EK, ...E5, ...E3, ...E7, ...pe, ...pr, ...pi, ...EF, ...E9 },
    pg = { ...El, ...Eo, ...Ed, ...Eu },
    pC = {
        server: Es.A,
        commands: pI,
        events: pg,
        stores: [cv.default],
        transports: [pm],
        registerTransportsForEmbeddedPlatform: function () {
            e0.Ay.ensureModule("discord_rpc").then(() => {
                for (let e of [n(33006).A, n(998921).A]) Es.A.registerTransport(e);
            });
        },
    },
    pf = new (class {
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
            for (let e of (G.isPlatformEmbedded && this.registerTransportsForEmbeddedPlatform(), this.transports))
                this.rpcServer.registerTransport(e);
            for (let [e, t] of Object.entries(this.rpcCommandHandlers)) this.rpcServer.setCommandHandler(e, t);
            for (let [e, t] of Object.entries(this.rpcEventHandlers)) this.rpcServer.setEventHandler(e, t);
        }
        init() {
            (this.rpcServer.getCurrentUser = () => iA.default.getCurrentUser()),
                (this.rpcServer.onConnect = (e) => {
                    X.h.dispatch({ type: "RPC_APP_CONNECTED", socketId: e.id, application: e.application }),
                        eu.default.track(x.HAw.AUTHORIZED_APP_CONNECTED, {
                            app_id: e.application.id,
                            transport: e.transport,
                        });
                }),
                (this.rpcServer.onDisconnect = (e, t) => {
                    X.h.dispatch({
                        type: "RPC_APP_DISCONNECTED",
                        socketId: e.id,
                        application: e.application,
                        reason: t,
                    });
                });
            let e = [i9.A, l1.Ay, AB.A, rH.A, eL.Ay, e4.A];
            new f.ru(e.concat(this.stores), () => this.rpcServer.updateSubscriptions()).attach("RPCServerManager"),
                X.h.subscribe("MESSAGE_CREATE", this.handleMessage),
                X.h.subscribe("MESSAGE_UPDATE", this.handleMessage),
                X.h.subscribe("MESSAGE_DELETE", this.handleMessage),
                X.h.subscribe("SPEAKING", this.handleSpeaking),
                X.h.subscribe("OAUTH2_TOKEN_REVOKE", this.handleOAuth2TokenRevoke),
                X.h.subscribe("GUILD_CREATE", this.handleGuildCreate),
                X.h.subscribe("CHANNEL_CREATE", this.handleChannelCreate),
                X.h.subscribe("LOGOUT", this.handleLogout),
                X.h.subscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect),
                X.h.subscribe("RPC_NOTIFICATION_CREATE", this.handleNotificationCreate),
                X.h.subscribe("ACTIVITY_JOIN", this.handleActivityJoin),
                X.h.subscribe("ACTIVITY_LAYOUT_MODE_UPDATE", this.handleActivityLayoutModeUpdate),
                X.h.subscribe("FRAME_UPDATE_LAYOUT_MODE", this.handleFrameUpdateLayoutMode),
                X.h.subscribe("THERMAL_STATE_CHANGE", this.handleThermalStateChange),
                X.h.subscribe("ACTIVITY_SCREEN_ORIENTATION_UPDATE", this.handleScreenOrientationUpdate),
                X.h.subscribe("EMBEDDED_ACTIVITY_UPDATE", this.handleEmbeddedActivityUpdate),
                X.h.subscribe("RELATIONSHIP_ADD", this.handleRelationshipAdd),
                X.h.subscribe("RELATIONSHIP_UPDATE", this.handleRelationshipUpdate),
                X.h.subscribe("RELATIONSHIP_REMOVE", this.handleRelationshipRemove),
                X.h.subscribe("PRESENCE_UPDATES", this.handlePresenceUpdates),
                X.h.subscribe("PRESENCES_REPLACE", this.handlePresencesReplace),
                X.h.subscribe("USER_UPDATE", this.handleUserUpdate),
                X.h.subscribe("ENTITLEMENT_CREATE", this.handleEntitlementCreate),
                X.h.subscribe("ENTITLEMENT_DELETE", this.handleEntitlementDelete),
                X.h.subscribe("QUESTS_ENROLL_SUCCESS", this.handleQuestEnrollSuccess);
        }
        terminate() {
            X.h.unsubscribe("MESSAGE_CREATE", this.handleMessage),
                X.h.unsubscribe("MESSAGE_UPDATE", this.handleMessage),
                X.h.unsubscribe("MESSAGE_DELETE", this.handleMessage),
                X.h.unsubscribe("SPEAKING", this.handleSpeaking),
                X.h.unsubscribe("OAUTH2_TOKEN_REVOKE", this.handleOAuth2TokenRevoke),
                X.h.unsubscribe("GUILD_CREATE", this.handleGuildCreate),
                X.h.unsubscribe("CHANNEL_CREATE", this.handleChannelCreate),
                X.h.unsubscribe("LOGOUT", this.handleLogout),
                X.h.unsubscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect),
                X.h.unsubscribe("RPC_NOTIFICATION_CREATE", this.handleNotificationCreate),
                X.h.unsubscribe("ACTIVITY_JOIN", this.handleActivityJoin),
                X.h.unsubscribe("ACTIVITY_LAYOUT_MODE_UPDATE", this.handleActivityLayoutModeUpdate),
                X.h.unsubscribe("FRAME_UPDATE_LAYOUT_MODE", this.handleFrameUpdateLayoutMode),
                X.h.unsubscribe("THERMAL_STATE_CHANGE", this.handleThermalStateChange),
                X.h.unsubscribe("ACTIVITY_SCREEN_ORIENTATION_UPDATE", this.handleScreenOrientationUpdate),
                X.h.unsubscribe("EMBEDDED_ACTIVITY_UPDATE", this.handleEmbeddedActivityUpdate),
                X.h.unsubscribe("RELATIONSHIP_ADD", this.handleRelationshipAdd),
                X.h.unsubscribe("RELATIONSHIP_UPDATE", this.handleRelationshipUpdate),
                X.h.unsubscribe("RELATIONSHIP_REMOVE", this.handleRelationshipRemove),
                X.h.unsubscribe("PRESENCE_UPDATES", this.handlePresenceUpdates),
                X.h.unsubscribe("PRESENCES_REPLACE", this.handlePresencesReplace),
                X.h.unsubscribe("USER_UPDATE", this.handleUserUpdate),
                X.h.unsubscribe("ENTITLEMENT_CREATE", this.handleEntitlementCreate),
                X.h.unsubscribe("ENTITLEMENT_DELETE", this.handleEntitlementDelete),
                X.h.unsubscribe("QUESTS_ENROLL_SUCCESS", this.handleQuestEnrollSuccess);
        }
        handleMessage = (e) => {
            let t, n, i;
            if (0 === this.rpcServer.subscriptions.length) return;
            "MESSAGE_CREATE" === e.type && this.handleActivityMessage(e);
            let r = null;
            switch (e.type) {
                case "MESSAGE_CREATE":
                    if ("SENDING" === e.message.state) return;
                    (t = x.ZE4.MESSAGE_CREATE), (n = e.channelId), (i = e.message), (r = `${t}${e.message.id}`);
                    break;
                case "MESSAGE_UPDATE":
                    (t = x.ZE4.MESSAGE_UPDATE), (n = e.message.channel_id), (i = e.message);
                    break;
                case "MESSAGE_DELETE":
                    (t = x.ZE4.MESSAGE_DELETE), (n = e.channelId), (i = { id: e.id }), (r = `${t}${e.id}`);
                    break;
                default:
                    return (0, rn.xb)(e);
            }
            null != n &&
                this.rpcServer.dispatchToSubscriptions(
                    t,
                    { channel_id: n },
                    { channel_id: n, message: (0, AY.Yj)(i) },
                    r,
                );
        };
        handleSpeaking = (e) => {
            if (0 === this.rpcServer.subscriptions.length) return;
            let t = 0 !== e.speakingFlags ? x.ZE4.SPEAKING_START : x.ZE4.SPEAKING_STOP;
            if (e.context === eO.x.DEFAULT) {
                let n = et.A.getVoiceChannelId();
                if (null != n) {
                    let i = i9.A.getChannel(n);
                    if (null == i) return;
                    let r = rH.A.getVoiceState(i.getGuildId(), e.userId);
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
                this.rpcServer.dispatchToSubscriptions(x.ZE4.VOICE_CHANNEL_SELECT, {}, { channel_id: n, guild_id: t });
        };
        handleNotificationCreate = (e) => {
            let { channelId: t, message: n, icon: i, title: r, body: a } = e;
            0 !== this.rpcServer.subscriptions.length &&
                this.rpcServer.dispatchToSubscriptions(
                    x.ZE4.NOTIFICATION_CREATE,
                    {},
                    {
                        channel_id: t,
                        message: (0, AY.Yj)(n),
                        icon_url: null != i ? (0, AY.hk)(i) : null,
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
                    x.ZE4.ACTIVITY_JOIN,
                    (e) => e.socket.application.id === t || (null != n && e.socket.application.parentId === n),
                    l,
                ),
                this.rpcServer.dispatchToSubscriptions(x.ZE4.GAME_JOIN, (e) => e.socket.application.id === t, l);
        };
        handleActivityLayoutModeUpdate = (e) => {
            let { applicationId: t, layoutMode: n } = e;
            if (0 === this.rpcServer.subscriptions.length) return;
            let i = n !== AX.bN.FOCUSED;
            this.rpcServer.dispatchToSubscriptions(
                x.ZE4.ACTIVITY_PIP_MODE_UPDATE,
                (e) => e.socket.application.id === t,
                { is_pip_mode: i },
            );
            let r = { layout_mode: n };
            this.rpcServer.dispatchToSubscriptions(
                x.ZE4.ACTIVITY_LAYOUT_MODE_UPDATE,
                (e) => e.socket.application.id === t,
                r,
            ),
                this.rpcServer.dispatchToSubscriptions(
                    x.ZE4.FRAME_LAYOUT_MODE_UPDATE,
                    (e) => e.socket.application.id === t,
                    r,
                );
        };
        handleFrameUpdateLayoutMode = (e) => {
            let { applicationId: t, layoutMode: n } = e;
            if (0 === this.rpcServer.subscriptions.length) return;
            let i = n === t1.y.PIP ? AX.bN.PIP : AX.bN.FOCUSED,
                r = i !== AX.bN.FOCUSED;
            this.rpcServer.dispatchToSubscriptions(
                x.ZE4.ACTIVITY_PIP_MODE_UPDATE,
                (e) => e.socket.application.id === t,
                { is_pip_mode: r },
            );
            let a = { layout_mode: i };
            this.rpcServer.dispatchToSubscriptions(
                x.ZE4.ACTIVITY_LAYOUT_MODE_UPDATE,
                (e) => e.socket.application.id === t,
                a,
            ),
                this.rpcServer.dispatchToSubscriptions(
                    x.ZE4.FRAME_LAYOUT_MODE_UPDATE,
                    (e) => e.socket.application.id === t,
                    a,
                );
        };
        handleThermalStateChange = (e) => {
            let { applicationId: t } = e;
            if (0 === this.rpcServer.subscriptions.length || null == t) return;
            let n = { thermal_state: AF() };
            this.rpcServer.dispatchToSubscriptions(x.ZE4.THERMAL_STATE_UPDATE, (e) => e.socket.application.id === t, n);
        };
        handleScreenOrientationUpdate = (e) => {
            let { screenOrientation: t } = e;
            0 === this.rpcServer.subscriptions.length ||
                this.rpcServer.dispatchToSubscriptions(x.ZE4.ORIENTATION_UPDATE, {}, { screen_orientation: t });
        };
        handleEmbeddedActivityUpdate = () => {
            if (0 === this.rpcServer.subscriptions.length) return;
            let e = AK();
            this.rpcServer.dispatchToSubscriptions(x.ZE4.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE, {}, e);
        };
        handleActivityMessage = (e) => {
            let { channelId: t, message: n } = e;
            if (0 === this.rpcServer.subscriptions.length) return;
            let { application: i, activity: r } = n;
            if (null == i || null == r || null == r.party_id) return;
            let a = iA.default.getUser(n.author?.id);
            if (null == a) return;
            let l = iA.default.getCurrentUser();
            if (null == l || a.id === l.id) return;
            let s =
                r.type === x.xL.JOIN_REQUEST
                    ? AB.A.getApplicationActivity(l.id, i.id)
                    : AB.A.getApplicationActivity(a.id, i.id);
            if (null == s || null == s.party || s.party.id !== r.party_id) return;
            let o = s.application_id;
            switch (r.type) {
                case x.xL.JOIN:
                    this.rpcServer.dispatchToSubscriptions(
                        x.ZE4.ACTIVITY_INVITE,
                        (e) => e.socket.application.id === o,
                        { user: (0, Az.A)(a), activity: s, type: r.type, channel_id: t, message_id: n.id },
                    );
                    break;
                case x.xL.JOIN_REQUEST:
                    this.rpcServer.dispatchToSubscriptions(
                        x.ZE4.ACTIVITY_JOIN_REQUEST,
                        (e) => e.socket.application.id === o,
                        { user: (0, Az.A)(a), activity: s, type: r.type, channel_id: t, message_id: n.id },
                    );
            }
        };
        handleOAuth2TokenRevoke = (e) => {
            let { accessToken: t } = e;
            this.rpcServer.sockets.forEach((e) => {
                e.authorization.accessToken === t && e.close(x.YI$.TOKEN_REVOKED, "Token revoked");
            });
        };
        handleGuildCreate = (e) => {
            let {
                    guild: { id: t },
                } = e,
                n = rG.A.getGuild(t);
            0 !== this.rpcServer.subscriptions.length &&
                null != n &&
                this.rpcServer.dispatchToSubscriptions(x.ZE4.GUILD_CREATE, {}, { id: t, name: n.name });
        };
        handleChannelCreate = (e) => {
            let {
                channel: { id: t, name: n, type: i },
            } = e;
            0 !== this.rpcServer.subscriptions.length &&
                this.rpcServer.dispatchToSubscriptions(x.ZE4.CHANNEL_CREATE, {}, { id: t, name: n, type: i });
        };
        handleLogout = () => {
            this.rpcServer.sockets.forEach((e) => e.close(x.YI$.CLOSE_NORMAL, "User logout"));
        };
        handleRelationshipAdd = (e) => {
            let {
                relationship: { id: t, type: n },
            } = e;
            if (0 === this.rpcServer.subscriptions.length) return;
            let i = iA.default.getUser(t);
            if (null == i) return;
            let r = (0, AY.Gc)(n, i);
            this.rpcServer.dispatchToSubscriptions(x.ZE4.RELATIONSHIP_UPDATE, {}, (e) =>
                (0, AY.LP)(r, e.socket.application.id),
            );
        };
        handleRelationshipUpdate = (e) => {
            let {
                relationship: { id: t, type: n },
            } = e;
            if (0 === this.rpcServer.subscriptions.length) return;
            let i = iA.default.getUser(t);
            if (null == i) return;
            let r = (0, AY.Gc)(n, i);
            this.rpcServer.dispatchToSubscriptions(x.ZE4.RELATIONSHIP_UPDATE, {}, (e) =>
                (0, AY.LP)(r, e.socket.application.id),
            );
        };
        handleRelationshipRemove = (e) => {
            let {
                relationship: { id: t },
            } = e;
            if (0 === this.rpcServer.subscriptions.length) return;
            let n = iA.default.getUser(t);
            if (null == n) return;
            let i = (0, AY.Gc)(x.eA$.NONE, n);
            this.rpcServer.dispatchToSubscriptions(x.ZE4.RELATIONSHIP_UPDATE, {}, (e) =>
                (0, AY.LP)(i, e.socket.application.id),
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
                    let t = eQ.A.getRelationshipType(e);
                    if (t === x.eA$.NONE) continue;
                    let n = iA.default.getUser(e);
                    if (null == n) continue;
                    let i = (0, AY.Gc)(t, n);
                    this.rpcServer.dispatchToSubscriptions(x.ZE4.RELATIONSHIP_UPDATE, {}, (e) =>
                        (0, AY.LP)(i, e.socket.application.id),
                    );
                }
        };
        handlePresencesReplace = () => {
            if (0 !== this.rpcServer.subscriptions.length)
                for (let [e, t] of eQ.A.getMutableRelationships().entries()) {
                    if (t === x.eA$.NONE) continue;
                    let n = iA.default.getUser(e);
                    if (null == n) continue;
                    let i = (0, AY.Gc)(t, n);
                    this.rpcServer.dispatchToSubscriptions(x.ZE4.RELATIONSHIP_UPDATE, {}, (e) =>
                        (0, AY.LP)(i, e.socket.application.id),
                    );
                }
        };
        handleUserUpdate = (e) => {
            let {
                user: { id: t },
            } = e;
            if (0 === this.rpcServer.subscriptions.length) return;
            let n = eQ.A.getRelationshipType(t);
            if (n === x.eA$.NONE) return;
            let i = iA.default.getUser(t);
            if (null == i) return;
            let r = (0, AY.Gc)(n, i);
            this.rpcServer.dispatchToSubscriptions(x.ZE4.RELATIONSHIP_UPDATE, {}, (e) =>
                (0, AY.LP)(r, e.socket.application.id),
            );
        };
        handleEntitlementCreate = (e) => {
            let { entitlement: t } = e;
            0 !== this.rpcServer.subscriptions.length &&
                this.rpcServer.dispatchToSubscriptions(
                    x.ZE4.ENTITLEMENT_CREATE,
                    (e) => e.socket.application.id === t.application_id,
                    { entitlement: t },
                );
        };
        handleEntitlementDelete = (e) => {
            let { entitlement: t } = e;
            0 !== this.rpcServer.subscriptions.length &&
                this.rpcServer.dispatchToSubscriptions(
                    x.ZE4.ENTITLEMENT_DELETE,
                    (e) => e.socket.application.id === t.application_id,
                    { entitlement: t },
                );
        };
        handleQuestEnrollSuccess = (e) => {
            let { enrolledQuestUserStatus: t } = e;
            if (0 === this.rpcServer.subscriptions.length) return;
            let n = t.questId,
                i = ii.A.getQuest(n);
            if (null == i) return;
            let r = (0, AH.TP)(i);
            null != r &&
                this.rpcServer.dispatchToSubscriptions(
                    x.ZE4.QUEST_ENROLLMENT_STATUS_UPDATE,
                    (e) => e.socket.application.id === r && e.args?.quest_id === n,
                    { quest_id: n, is_enrolled: null != t.enrolledAt, enrolled_at: t.enrolledAt },
                );
        };
    })(pC);
var pT = n(138298),
    pN = n(940382),
    pS = n(450510),
    pL = n(594061);
class py extends Z.A {
    _initialize() {
        __OVERLAY__ ||
            (X.h.subscribe("VOICE_CHANNEL_EFFECT_SEND", this._handleSoundboardSoundReceived),
            X.h.subscribe("GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY", this._handleSoundboardSoundPlayLocally),
            X.h.subscribe("VOICE_CHANNEL_SELECT", this._handleVoiceChannelSelect),
            X.h.subscribe("AUDIO_TOGGLE_SELF_DEAF", this._handleToggleSelfDeafened));
    }
    _terminate() {
        __OVERLAY__ ||
            (X.h.unsubscribe("VOICE_CHANNEL_EFFECT_SEND", this._handleSoundboardSoundReceived),
            X.h.unsubscribe("GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY", this._handleSoundboardSoundPlayLocally),
            X.h.unsubscribe("VOICE_CHANNEL_SELECT", this._handleVoiceChannelSelect),
            X.h.unsubscribe("AUDIO_TOGGLE_SELF_DEAF", this._handleToggleSelfDeafened));
    }
    _playSound = function (e) {
        arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            arguments.length > 2 && arguments[2],
            arguments.length > 3 && arguments[3];
    };
    _stopAndClearSounds = () => {};
    _handleToggleSelfDeafened = () => {
        eL.Ay.isDeaf() && this._stopAndClearSounds();
    };
    _handleSoundboardSoundReceived = (e) => {
        let { soundId: t, soundVolume: n, userId: i, channelId: r } = e;
        if (null != t && i !== D.default.getId()) return this._playSound(t, n, i, r);
    };
    _handleSoundboardSoundPlayLocally = (e) => {
        let { sound: t, channelId: n } = e,
            i = D.default.getId();
        return this._playSound(t.soundId, t.volume, i, n);
    };
    _handleVoiceChannelSelect = () => {
        this._stopAndClearSounds();
    };
}
var pO = n(102597),
    pb = n(904054),
    pv = n(205693),
    pR = n(602674),
    pP = n(76788),
    pD = n(738011),
    px = n(536184);
let pw = new Map();
async function pM(e) {
    let t = pw.get(e);
    if (null != t) return t;
    let n = await (await fetch(e)).arrayBuffer(),
        i = (0, pR.v)(),
        r = await i?.decodeAudioData(n);
    return null != r && pw.set(e, r), r;
}
let pU = new ca.A("SoundboardManager");
class pG extends py {
    playingSoundsWeb = new Map();
    _initialize() {
        super._initialize(),
            __OVERLAY__ ||
                (X.h.subscribe(
                    "OVERLAY_SOUNDBOARD_SOUNDS_FETCH_REQUEST",
                    this._handleOverlaySoundboardSoundsFetchRequest,
                ),
                X.h.subscribe("RTC_CONNECTION_STATE", this._handleRTCConnectionState));
    }
    _terminate() {
        super._terminate(),
            __OVERLAY__ ||
                (X.h.unsubscribe(
                    "OVERLAY_SOUNDBOARD_SOUNDS_FETCH_REQUEST",
                    this._handleOverlaySoundboardSoundsFetchRequest,
                ),
                X.h.unsubscribe("RTC_CONNECTION_STATE", this._handleRTCConnectionState));
    }
    _stopAndClearSounds = () => {
        eL.Ay.supports(eO.O5.SAMPLE_PLAYBACK) &&
            eL.Ay.getMediaEngine().eachConnection((e) => {
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
                a = null != r && et.A.getVoiceChannelId() === r;
            if ((null == r || a) && !eL.Ay.isDeaf() && !h$.A.isLocalSoundboardMuted(i))
                try {
                    let r = {
                        soundKey: `${i}-${t}`,
                        soundURL: (0, pO.A)(t),
                        soundVolume: (0, pb.A)(n),
                        reportSoundStartedPlaying: () => (0, hY.dZ)(t, i),
                    };
                    eL.Ay.supports(eO.O5.SAMPLE_PLAYBACK)
                        ? await (function (e) {
                              let { soundKey: t, soundURL: n, soundVolume: i, reportSoundStartedPlaying: r } = e;
                              return new Promise(async (e, a) => {
                                  let l = await pM(n);
                                  null == l && e(),
                                      eL.Ay.getMediaEngine().eachConnection((n) => {
                                          n.context === pv.x.DEFAULT &&
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
                                  let l = new (await (0, px.A)(i))();
                                  (l.src = i),
                                      (l.volume = (0, pb.A)(r)),
                                      l.addEventListener(
                                          l instanceof pP.A.OGVPlayer ? "loadedmetadata" : "canplaythrough",
                                          () => {
                                              a(),
                                                  t.set(n, l),
                                                  l.play()?.catch((i) => {
                                                      if ((0, pD.u)(i)) {
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
                    pU.warn(`Error playing soundboard sound: ${e.message}`);
                } finally {
                    (0, hY.g0)(t, i);
                }
        };
    })();
    _handleRTCConnectionState = (e) => {
        let { state: t } = e;
        t === x.S7L.RTC_CONNECTED && (pL.bW.loadIfNecessary(), (0, hY.E7)({ disableAnalytics: !0 }));
    };
    _handleOverlaySoundboardSoundsFetchRequest = () => {
        (0, hY.E7)();
    };
    _handleOpenEducationModal = (e, t) => {
        if (null == e) return;
        let i = i9.A.getChannel(t),
            r = _L.Ay.getKeybindForAction(x.hCu.SOUNDBOARD_HOLD);
        null != i &&
            (0, s8.Ay)(i) &&
            null != r &&
            s6.A.hasHotspot(pS._2.SOUNDBOARD_WHEEL_EDUCATION_MODAL) &&
            (0, T.openModalLazy)(async () => {
                let { default: t } = await n.e("51143").then(n.bind(n, 888762));
                return (n) => (0, p.jsx)(t, { ...n, guildId: e, keybind: r, channel: i });
            });
    };
}
let pj = new pG();
class pk extends Z.A {
    _initialize() {
        X.h.subscribe("VOICE_STATE_UPDATES", this.handleVoiceStateUpdates);
    }
    _terminate() {
        X.h.unsubscribe("VOICE_STATE_UPDATES", this.handleVoiceStateUpdates);
    }
    handleVoiceStateUpdates = (e) => {
        let { voiceStates: t } = e,
            n = D.default.getId();
        t.forEach((e) => {
            e.userId === n &&
                i9.A.getChannel(e.channelId)?.isGuildStageVoice() &&
                (0, oA.eY)(e) !== oA.zF.ON_STAGE &&
                (this.handleStopStream(e), this.handleStopUserVideo());
        });
    };
    handleStopStream = (e) => {
        let t = oS.A.getActiveStreamForUser(e.userId, e.guildId);
        null != t && (0, ip.vN)((0, _h._z)(t), !1);
    };
    handleStopUserVideo = () => {
        eL.Ay.isVideoEnabled() && eT.A.setVideoEnabled(!1);
    };
}
let pV = new pk(),
    pF = "STAGE_INVITED_TO_SPEAK_MODAL";
class pH extends Z.A {
    _initialize() {
        X.h.subscribe("VOICE_STATE_UPDATES", this.handleVoiceStateUpdates);
    }
    _terminate() {
        X.h.unsubscribe("VOICE_STATE_UPDATES", this.handleVoiceStateUpdates);
    }
    handleVoiceStateUpdates = (e) => {
        let { voiceStates: t } = e,
            i = D.default.getId(),
            r = sz.A.getSession()?.sessionId,
            a = t.find((e) => e.userId === i && e.sessionId === r);
        if (null == a) return;
        let l = a.channelId;
        if (null == l) {
            (0, T.hasModalOpen)(pF) && (0, T.closeModal)(pF);
            return;
        }
        let s = i9.A.getChannel(l);
        if (!s?.isGuildStageVoice()) return;
        let o = (0, oA.eY)(a) === oA.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
        if (null != s && o) {
            if ((0, T.hasModalOpen)(pF)) return;
            (0, T.openModalLazy)(
                async () => {
                    let { default: e } = await n.e("90037").then(n.bind(n, 427412));
                    return (t) => (0, p.jsx)(e, { ...t, channel: s });
                },
                { modalKey: pF, onCloseRequest: x.FXj },
            );
        }
    };
}
let pB = new pH();
var pY = n(863922),
    p$ = n(353202);
n(667532);
var pW = n(989349),
    pz = n.n(pW),
    pK = n(724066),
    pq = n(100767),
    pX = n(379418),
    pZ = n(9842),
    pQ = n(761640),
    pJ = n(317525),
    p0 = n(54570),
    p1 = n(8880);
n(75804);
let p2 = [],
    p6 = null,
    p5 = null,
    p3 = null,
    p4 = /\|\|([\s\S]+?)\|\|/g;
function p8(e, t, n, i) {
    let r = rG.A.getGuild(n),
        a = e
            .replace(p4, j.intl.string(j.t["F+x38C"]))
            .replace(/<@!?(\d+)>/g, (e, t) => {
                let i = iA.default.getUser(t);
                return null == i ? j.intl.string(j.t.sKdZ6U) : (l1.Ay.getNick(n, i.id) ?? ri.Ay.getName(i));
            })
            .replace(/<@&?(\d+)>/g, (e, t) => {
                let n = null != r ? pJ.A.getRole(r.id, t) : null;
                return null != n && null != n.name ? n.name : j.intl.string(j.t["YV4F/n"]);
            })
            .replace(/<#(\d+)>/g, (e, t) => {
                let n = i9.A.getChannel(t);
                return null == n ? j.intl.string(j.t.J90oLW) : (0, iz.m1)(n, iA.default, eQ.A);
            })
            .replace(/<a?:(\w+):(\d+)>/g, (e, t) => `${j.intl.string(j.t.sMOuuS)} ${t}`)
            .replace(/<\/([^\s]+?):(\d+)>/g, (e, t) => `/${t}`)
            .replace(/<t:(\d+):([A-Z]|[a-z])>/g, (e, t, n) => {
                let i = pX.kx[n],
                    r = 1e3 * parseInt(t, 10),
                    a = pz()(r);
                return null != i ? i(a) : a.format();
            });
    return null == i
        ? j.intl.formatToPlainString(j.t["uIj77/"], { username: t, body: a })
        : j.intl.formatToPlainString(j.t["Ix4H+j"], { username: t, body: a, replyUsername: i });
}
function p7() {
    if (!pq.$j) return !1;
    let e = h4.default.locale;
    null == p3 && (p3 = window.speechSynthesis?.getVoices());
    let t = p3.filter((t) => t.lang === e || t.lang.slice(0, e.length) === e);
    p5 = t.length > 0 ? t[0] : null;
}
async function p9(e, t, n, i, r) {
    let a = pq.aW(e, n);
    null !== a &&
        (null == p5 && p7(),
        t ? await (0, p0.pr)() : p6?.removeEventListener("end", p0.pr),
        a.addEventListener("end", p0.pr),
        null != i && a.addEventListener("start", i),
        null != r && a.addEventListener("end", r),
        (p6 = a),
        pq.wz(a, p5));
}
function me(e, t, n, i, r) {
    p9(e, t, r, () => {
        (0, p0.kC)(n, i);
    });
}
function mt(e) {
    let { text: t, interrupt: n, maxLength: i, onStart: r, onEnd: a } = e;
    p9(t, n, i, r, a);
}
function mn() {
    return null !== p6 && p6.removeEventListener("end", p0.pr), pq._X(), (p6 = null), !0;
}
function mi(e) {
    let { message: t, channel: n } = e,
        i = t.type === x.lAJ.REPLY ? pZ.A.getMessageByReference(t.messageReference) : null,
        r = i?.state === pZ.a.LOADED ? i?.message?.author : null,
        a = null != r ? (l1.Ay.getNick(n.guild_id, r?.id) ?? ri.Ay.getName(r)) : null,
        l = n.getGuildId(),
        s = l1.Ay.getNick(l, t.author.id) ?? ri.Ay.getName(t.author);
    return me(p8(t.content, s, l, a), !0, n.id, t.id), !0;
}
function mr(e) {
    let { channelId: t, message: n, optimistic: i } = e;
    if (i || eL.Ay.isSelfDeaf()) return !1;
    let r = i9.A.getChannel(t);
    if (null == r) return !1;
    let a = et.A.getChannelId(),
        l = pQ.Ay.getCurrentSidebarChannelId(a),
        s = t === a || t === l,
        o = oh.on.getSetting() && n.tts && s,
        d = eZ.A.getTTSType(),
        c = n.author?.id !== D.default.getId() && (d === x.aVn.ALL_CHANNELS || (d === x.aVn.SELECTED_CHANNEL && s));
    if ((o || c) && !eQ.A.isBlockedOrIgnoredForMessage(n)) {
        if (p2.indexOf(n.id) >= 0) return !1;
        p2.unshift(n.id) > 10 && p2.pop();
        let e = r.getGuildId();
        if (null != e && cO.Ay.getMutedChannels(e).has(t)) return !1;
        let i = l1.Ay.getNick(e, n.author?.id) ?? ri.Ay.getName(n.author) ?? "",
            a = n.type === x.lAJ.REPLY ? n.referenced_message?.author : null,
            l = null != a ? (l1.Ay.getNick(e, a?.id) ?? ri.Ay.getName(a)) : null;
        me(p8(n.content, i, e, l), !1, r.id, n.id, 200);
    }
    return !1;
}
function ma(e) {
    let { id: t, channelId: n } = e,
        i = p1.A.currentMessage;
    return null != i && t === i.messageId && n === i.channelId && ((0, p0.pr)(), !0);
}
function ml() {
    eL.Ay.isSelfDeaf() && pq._X();
}
function ms(e) {
    let { channelId: t } = e,
        n = p1.A.currentMessage;
    null != n && n.channelId !== t && (0, p0.pr)();
}
let mo = {
    init() {
        X.h.subscribe("SPEAK_TEXT", mt),
            X.h.subscribe("SPEAK_MESSAGE", mi),
            X.h.subscribe("STOP_SPEAKING", mn),
            X.h.subscribe("MESSAGE_CREATE", mr),
            X.h.subscribe("MESSAGE_DELETE", ma),
            X.h.subscribe("AUDIO_TOGGLE_SELF_DEAF", ml),
            X.h.subscribe("CHANNEL_SELECT", ms),
            X.h.subscribe("USER_SETTINGS_PROTO_UPDATE", p7),
            (0, pK.I)(p7);
    },
};
var md = n(403777),
    mc = n(80556);
let mu = (0, n(250105).Ay)({
    name: "2026-04-safety-flows",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var m_ = n(907135),
    mA = n(446868),
    mh = n(665095),
    mE = n(639719),
    mp = n(53516),
    mm = n(87404);
let mI = {
    init() {
        X.h.subscribe("CONNECTION_OPEN", this.handleRequiredAction),
            X.h.subscribe("USER_REQUIRED_ACTION_UPDATE", this.handleRequiredAction),
            X.h.subscribe("CURRENT_USER_UPDATE", this.handleCurrentUserUpdate),
            D.default.addChangeListener(this.handleAuthenticationStoreChanged);
    },
    handleRequiredAction(e) {
        let t = e.requiredAction;
        !AE.P.isDisallowPopupsSet() &&
            null != iA.default.getCurrentUser() &&
            (t === x.a3B.REQUIRE_CAPTCHA ||
            t === x.a3B.REQUIRE_VERIFIED_EMAIL ||
            t === x.a3B.REQUIRE_VERIFIED_PHONE ||
            t === x.a3B.REQUIRE_REVERIFIED_PHONE ||
            t === x.a3B.REQUIRE_VERIFIED_EMAIL_OR_VERIFIED_PHONE ||
            t === x.a3B.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE ||
            t === x.a3B.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE ||
            mA.A.isEmailReverification(t)
                ? (function (e) {
                      let { location: t } = e;
                      return mu.getConfig({ location: t }).enabled;
                  })({ location: "verification-legacy" })
                    ? (0, ck.B8)(
                          (e) => {
                              let { closeLayer: t } = e;
                              return (0, p.jsx)(m_.A, { onClose: t });
                          },
                          { layerKey: mm._s, Layer: mc.Ay },
                      )
                    : (0, ck.B8)(() => (0, p.jsx)(mh.A, {}), { layerKey: mm._s, Layer: mc.Ay })
                : t === x.a3B.AGREEMENTS
                  ? (0, T.openModal)((e) => (0, p.jsx)(mE.default, { ...e }), {
                        modalKey: mm.i$,
                        onCloseRequest: AQ.FX,
                        dismissable: !1,
                    })
                  : t === x.a3B.REQUIRE_SAFETY_FLOWS
                    ? (0, ck.B8)(
                          (e) => {
                              let { closeLayer: t } = e;
                              return (0, p.jsx)(m_.A, { onClose: t });
                          },
                          { layerKey: mm._s, Layer: mc.Ay },
                      )
                    : null == t && ((0, ck.dF)(mm._s), (0, T.hasModalOpen)(mm.i$) && (0, T.closeModal)(mm.i$)));
    },
    handleAuthenticationStoreChanged() {
        null == D.default.getId() &&
            ((0, ck.dF)(mm._s),
            (0, T.closeModal)(mm.i$),
            (0, T.closeModal)(mm.Pr),
            (0, T.closeModal)(mm.H1),
            (0, T.closeModal)(mp.V));
    },
    handleCurrentUserUpdate(e) {
        let { user: t } = e;
        t.verified && (0, T.closeModal)(mm.H1);
    },
};
var mg = n(803805),
    mC = n(761821);
let mf = "selectedChannelGuildFrecency";
function mT(e) {
    let { state: t } = f.Ay.PersistedStore.migrateAndReadStoreState("GIFFavoritesStore", [
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
              let r = mg.tC.create();
              return (
                  (r.format = "IMAGE" === n.format ? mg.TL.IMAGE : "VIDEO" === n.format ? mg.TL.VIDEO : mg.TL.NONE),
                  (r.src = n.src),
                  (r.width = n.width),
                  (r.height = n.height),
                  (r.order = t.favorites.length - i + e),
                  { url: n.url, favorite: r }
              );
          });
}
let mN = [
    {
        version: 2,
        run(e) {
            let t = mT(1);
            if (0 === t.length) return !1;
            for (let { url: n, favorite: i } of (null == e.favoriteGifs && (e.favoriteGifs = mg.uz.create()),
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
            let { state: n } = f.Ay.PersistedStore.migrateAndReadStoreState("StickersPersistedStore", [
                (e) => (null == e || 0 === Object.keys(e).length ? t() : e),
                (e) =>
                    null == e || 0 === Object.keys(e).length ? t() : (null == e.favorites && (e.favorites = []), e),
            ]);
            if (null == n) return !1;
            let i = !1;
            return (
                n.favorites.length > 0 &&
                    ((e.favoriteStickers = mg.tQ.create()),
                    (e.favoriteStickers.stickerIds = eG().uniq(n.favorites).slice(0, 250)),
                    (i = !0)),
                eG().size(n.usageHistory) > 0 &&
                    ((e.stickerFrecency = mg.Do.create()),
                    (e.stickerFrecency.stickers = (0, mC.Mr)(n.usageHistory, 100)),
                    (i = !0)),
                i
            );
        },
        cleanup() {
            tl.w.remove("StickersPersistedStore");
        },
    },
    {
        version: 4,
        run(e) {
            let { state: t } = f.Ay.PersistedStore.migrateAndReadStoreState("EmojiStore", [
                () => ({ usageHistory: tl.w.get("EmojiUsageHistory") || {} }),
            ]);
            if (null == t) return !1;
            let n = !1;
            return (
                null != t.favorites &&
                    t.favorites.length > 0 &&
                    ((e.favoriteEmojis = mg.gW.create()),
                    (e.favoriteEmojis.emojis = eG().uniq(t.favorites).slice(0, 250)),
                    (n = !0)),
                eG().size(t.usageHistory) > 0 &&
                    ((e.emojiFrecency = mg.Q8.create()),
                    (e.emojiFrecency.emojis = (0, mC.Mr)(t.usageHistory, 100)),
                    (n = !0)),
                n
            );
        },
        cleanup() {
            tl.w.remove("EmojiStore"), tl.w.remove("EmojiUsageHistory"), tl.w.remove("EmojiDiversitySurrogate");
        },
    },
    {
        version: 6,
        run(e) {
            null == e.favoriteGifs && (e.favoriteGifs = mg.uz.create()),
                null == e.favoriteGifs.gifs && (e.favoriteGifs.gifs = {});
            let t = mT(1);
            if (0 === t.length) return !1;
            eG()(e.favoriteGifs.gifs)
                .values()
                .sortBy("order")
                .forEach((e, n) => (e.order = t.length + 1 + n));
            let n = mg.uz.toBinary(e.favoriteGifs).length,
                i = 0;
            for (let { url: r, favorite: a } of t) {
                if (((a.order = t.length - i), i++, r in e.favoriteGifs.gifs)) {
                    e.favoriteGifs.gifs[r].order = a.order;
                    continue;
                }
                let l = mg.tC.toBinary(a).length + r.length + 7;
                n + l > 762880 || ((n += l), (e.favoriteGifs.gifs[r] = a));
            }
            for (n = mg.uz.toBinary(e.favoriteGifs).length; n > 762880; ) {
                let t = 0;
                for (let n in e.favoriteGifs.gifs) if ((delete e.favoriteGifs.gifs[n], ++t >= 10)) break;
                n = mg.uz.toBinary(e.favoriteGifs).length;
            }
            return !0;
        },
        cleanup() {},
    },
    {
        version: 7,
        run(e) {
            let { state: t } = f.Ay.PersistedStore.migrateAndReadStoreState("ApplicationCommandFrecency", []);
            if (null == t) return !1;
            let n = !1;
            return (
                eG().size(t.usageHistory) > 0 &&
                    ((e.applicationCommandFrecency = mg.Zc.create()),
                    (e.applicationCommandFrecency.applicationCommands = (0, mC.Mr)(t.usageHistory, 500)),
                    (n = !0)),
                n
            );
        },
        cleanup() {
            tl.w.remove("ApplicationCommandFrecency");
        },
    },
    {
        version: 8,
        run(e) {
            let { state: t } = f.Ay.PersistedStore.migrateAndReadStoreState("SoundboardFavoriteStore", []);
            if (null == t) return !1;
            let n = !1;
            return (
                eG().size(t.favoriteSounds) > 0 &&
                    ((e.favoriteSoundboardSounds = mg.Qn.create()),
                    l6.default.keys(t.favoriteSounds).forEach((n) => {
                        new Set(t.favoriteSounds[n]).forEach((t) => {
                            e.favoriteSoundboardSounds?.soundIds.push(t);
                        });
                    }),
                    (n = !0)),
                n
            );
        },
        cleanup() {
            tl.w.remove("SoundboardFavoriteStore");
        },
    },
    {
        version: 9,
        run(e) {
            let t = tl.w.get(mf);
            if (null == t) return !1;
            for (let e in t) x.Ut1.test(e) || delete t[e];
            return (
                (e.guildAndChannelFrecency = mg.F1.create()),
                (e.guildAndChannelFrecency.guildAndChannels = (0, mC.Mr)(t, 100)),
                !0
            );
        },
        cleanup() {
            tl.w.remove(mf);
        },
    },
    {
        version: 10,
        run(e) {
            if (null == e.emojiFrecency) return !1;
            let t = e.emojiFrecency.emojis ?? {},
                n = !1;
            if (eG().size(t) > 0) {
                let t = mg.Q8.create();
                mg.Q8.mergePartial(t, e.emojiFrecency),
                    null != e.emojiReactionFrecency && mg.Q8.mergePartial(t, e.emojiReactionFrecency),
                    (e.emojiReactionFrecency = t),
                    (n = !0);
            }
            return n;
        },
        cleanup() {},
    },
];
n(393431), n(532706), n(42231), n(232424), n(949626), n(767709), n(65162);
var mS = n(873298),
    mL = n(406935),
    my = n(168186),
    mO = n(460288),
    mb = n(573879);
function mv(e, t) {
    let n = !1;
    return (
        null == e.userContent &&
            (e.userContent = {
                dismissedContents: new Uint8Array(),
                lastReceivedChangelogId: "0",
                recurringDismissibleContentStates: {},
            }),
        null == e.userContent.dismissedContents && (e.userContent.dismissedContents = new Uint8Array()),
        (0, mO.c0)(e.userContent.dismissedContents, t) ||
            ((e.userContent.dismissedContents = (0, mO.Vf)(e.userContent.dismissedContents, t)), (n = !0)),
        n
    );
}
function mR(e, t, n) {
    return !!pS.HP.hasHiddenHotspot(t) && mv(e, n);
}
let mP = [
    {
        version: 2,
        run(e) {
            if (null != e.inbox) return !1;
            let t = !1,
                n = mS.Q0.create();
            (e.inbox = n), tl.w.get("seenInboxTutorial", !1) && ((n.viewedTutorial = !0), (t = !0));
            let i = tl.w.get("recentsButtonTab2");
            null != i && ((n.currentTab = "Recent Mentions" === i ? mS.Y2.MENTIONS : mS.Y2.UNREADS), (t = !0));
            let r = tl.w.get("unread-messages-collapsed-channels") ?? {};
            for (let n in r) {
                if (!r[n]) continue;
                let i = i9.A.getChannel(n);
                null != i &&
                    ((t = !0),
                    (0, mC.gc)(e, i.guild_id ?? "0", i.id, (e) => {
                        e.collapsedInInbox = !0;
                    }));
            }
            return t;
        },
        cleanup() {
            tl.w.remove("seenInboxTutorial"),
                tl.w.remove("recentsButtonTab2"),
                tl.w.remove("unread-messages-collapsed-channels");
        },
    },
    {
        version: 3,
        run(e) {
            let { state: t } = f.Ay.PersistedStore.migrateAndReadStoreState("EmojiStore", [
                () => ({ diversitySurrogate: tl.w.get("EmojiDiversitySurrogate") || "" }),
            ]);
            if (null == t) return !1;
            let n = !1;
            return (
                null != t.diversitySurrogate &&
                    "" !== t.diversitySurrogate &&
                    (null == e.textAndImages && (e.textAndImages = mS.oJ.create()),
                    null == e.textAndImages.diversitySurrogate && (e.textAndImages.diversitySurrogate = mL.hU.create()),
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
                (!0 === tl.w.get("HAS_SEEN_HUB_UPSELL") ||
                    pS.HP.hasHiddenHotspot(pS._2.HUB_SECOND_EMAIL_CONNECTION_UPSELL)) &&
                    (t = mv(e, nX.M.HUB_WAITLIST_UPSELL)),
                t
            );
        },
        cleanup() {
            tl.w.remove("HAS_SEEN_HUB_UPSELL");
        },
    },
    {
        version: 5,
        run(e) {
            let t = !1;
            (e.textAndImages = e.textAndImages ?? mS.oJ.create()),
                (e.notifications = e.notifications ?? mS.TY.create()),
                (e.privacy = e.privacy ?? mS.E.create()),
                (e.voiceAndVideo = e.voiceAndVideo ?? mS.GY.create()),
                (e.gameLibrary = e.gameLibrary ?? mS.F1.create()),
                (e.debug = e.debug ?? mS.X9.create());
            let n = tl.w.get("UserSettingsStore") ?? {};
            return (
                "boolean" == typeof n.useRichChatTextBox &&
                    ((e.textAndImages.useRichChatInput = mL._t.create({ value: n.useRichChatTextBox })), (t = !0)),
                "string" == typeof n.renderSpoilers &&
                    ((e.textAndImages.renderSpoilers = mL.hU.create({ value: n.renderSpoilers })), (t = !0)),
                "boolean" == typeof n.useThreadSidebar &&
                    ((e.textAndImages.useThreadSidebar = mL._t.create({ value: n.useThreadSidebar })), (t = !0)),
                "boolean" == typeof n.showInAppNotifications &&
                    ((e.notifications.showInAppNotifications = mL._t.create({ value: n.showInAppNotifications })),
                    (t = !0)),
                n.emojiPickerCollapsedSections instanceof Array &&
                    ((e.textAndImages.emojiPickerCollapsedSections = n.emojiPickerCollapsedSections), (t = !0)),
                n.stickerPickerCollapsedSections instanceof Array &&
                    ((e.textAndImages.stickerPickerCollapsedSections = n.stickerPickerCollapsedSections), (t = !0)),
                "boolean" == typeof n.viewImageDescriptions &&
                    ((e.textAndImages.viewImageDescriptions = mL._t.create({ value: n.viewImageDescriptions })),
                    (t = !0)),
                "boolean" == typeof n.showCommandSuggestions &&
                    ((e.textAndImages.showCommandSuggestions = mL._t.create({ value: n.showCommandSuggestions })),
                    (t = !0)),
                "boolean" == typeof n.alwaysPreviewVideo &&
                    ((e.voiceAndVideo.alwaysPreviewVideo = mL._t.create({ value: n.alwaysPreviewVideo })), (t = !0)),
                "boolean" == typeof n.notifyFriendsOnGoLive &&
                    ((e.notifications.notifyFriendsOnGoLive = mL._t.create({ value: n.notifyFriendsOnGoLive })),
                    (t = !0)),
                "boolean" == typeof n.installShortcutDesktop &&
                    ((e.gameLibrary.installShortcutDesktop = mL._t.create({ value: n.installShortcutDesktop })),
                    (t = !0)),
                "boolean" == typeof n.installShortcutStartMenu &&
                    ((e.gameLibrary.installShortcutStartMenu = mL._t.create({ value: n.installShortcutStartMenu })),
                    (t = !0)),
                "boolean" == typeof n.allowActivityPartyPrivacyFriends &&
                    ((e.privacy.allowActivityPartyPrivacyFriends = mL._t.create({
                        value: n.allowActivityPartyPrivacyFriends,
                    })),
                    (t = !0)),
                "boolean" == typeof n.allowActivityPartyPrivacyVoiceChannel &&
                    ((e.privacy.allowActivityPartyPrivacyVoiceChannel = mL._t.create({
                        value: n.allowActivityPartyPrivacyVoiceChannel,
                    })),
                    (t = !0)),
                "boolean" == typeof n.rtcPanelShowVoiceStates &&
                    ((e.debug.rtcPanelShowVoiceStates = mL._t.create({ value: n.rtcPanelShowVoiceStates })), (t = !0)),
                t
            );
        },
        cleanup() {},
    },
    {
        version: 7,
        run: (e) => mR(e, pS._2.APPLICATION_COMMAND_TOOLTIP, nX.M.APPLICATION_COMMAND_TOOLTIP),
        cleanup() {},
    },
    {
        version: 8,
        run: (e) => mR(e, pS._2.CHANNEL_BANNER_MEMBER_LIST_NOTICE, nX.M.CHANNELINFO_CHANNELBANNER_NOTICE),
        cleanup() {},
    },
    {
        version: 9,
        run: (e) => (
            pS.HP.hasHiddenHotspot(pS._2.MULTI_ACCOUNT_TOOLTIP) && tl.w.set(mb.JE, "true"),
            mR(e, pS._2.MULTI_ACCOUNT_TOOLTIP, nX.M.ACCOUNT_MULTIACCOUNT_TOOLTIP)
        ),
        cleanup() {},
    },
    {
        version: 10,
        run(e) {
            let t = mR(e, pS._2.HUB_LINK_CHANNEL_NOTICE, nX.M.CHANNEL_NOTICE_HUBLINK),
                n = tl.w.get("channelNotices") ?? {};
            return (
                !1 === n[x.n5X.INVITE] && mv(e, nX.M.CHANNEL_NOTICE_INVITE) && (t = !0),
                !1 === n[x.n5X.QUICKSWITCHER] && mv(e, nX.M.CHANNEL_NOTICE_QUICKSWITCHER) && (t = !0),
                !1 === n[x.n5X.GUILD_BOOSTING] && mv(e, nX.M.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION) && (t = !0),
                t
            );
        },
        cleanup() {
            tl.w.remove("channelNotices");
        },
    },
    {
        version: 11,
        run(e) {
            let t = !1;
            return (
                mR(e, pS._2.GUILD_EVENT_UPSELL, nX.M.GUILD_HEADER_EVENT_UPSELL) && (t = !0),
                mR(e, pS._2.ANIMATED_GUILD_BANNER_GUILD_HEADER_TOOLTIP, nX.M.GUILD_HEADER_ANIMATED_GUILD_BANNER) &&
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
                tl.w.get("hideNag") && mv(e, nX.M.NAGBAR_NOTICE_DOWNLOAD) && (t = !0),
                tl.w.get("hideConnectSpotify") && mv(e, nX.M.NAGBAR_NOTICE_CONNECT_SPOTIFY) && (t = !0),
                tl.w.get("hideConnectPlayStation") && mv(e, nX.M.NAGBAR_NOTICE_CONNECT_PLAYSTATION) && (t = !0),
                t
            );
        },
        cleanup() {
            tl.w.remove("hideNag"), tl.w.remove("hideConnectSpotify"), tl.w.remove("hideConnectPlayStation");
        },
    },
    {
        version: 13,
        run(e) {
            let t = !1;
            return (
                tl.w.get("hidePremiumPromo") && mv(e, nX.M.NAGBAR_NOTICE_PREMIUM_PROMO) && (t = !0),
                tl.w.get("hidePremiumTier2TrialEnding") &&
                    mv(e, nX.M.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING) &&
                    (t = !0),
                tl.w.get("hidePremiumReactivateNotice") && mv(e, nX.M.NAGBAR_NOTICE_PREMIUM_REACTIVATE) && (t = !0),
                t
            );
        },
        cleanup() {
            tl.w.remove("hidePremiumPromo"),
                tl.w.remove("hidePremiumTier2TrialEnding"),
                tl.w.remove("hidePremiumReactivateNotice");
        },
    },
    { version: 14, run: (e) => mR(e, pS._2.ACTIVITY_BEB_TUTORIAL, nX.M.ACTIVITIES_TUTORIAL_COACH_MARK), cleanup() {} },
    { version: 15, run: (e) => mR(e, pS._2.NOW_PLAYING_CONSENT_CARD, nX.M.NOW_PLAYING_CONSENT_CARD), cleanup() {} },
    {
        version: 16,
        run(e) {
            let t = tl.w.get("PromotionsPersistedStore");
            if (null == t) return !1;
            let n = t._state.lastDismissedOutboundPromotionStartDate;
            return (
                null != n &&
                (null == e.userContent && (e.userContent = mS.YW.create()),
                null == e.userContent.lastDismissedOutboundPromotionStartDate) &&
                ((e.userContent.lastDismissedOutboundPromotionStartDate = mL.hU.create({ value: n })), !0)
            );
        },
        cleanup() {},
    },
    {
        version: 17,
        run(e) {
            let { state: t } = f.Ay.PersistedStore.migrateAndReadStoreState(
                "ExpressionSuggestionsPersistedStore",
                null,
            );
            if (null == t) return !1;
            let n = t.expressionSuggestionsEnabled;
            return (
                null != n &&
                (null == e.textAndImages && (e.textAndImages = mS.oJ.create()),
                null == e.textAndImages.expressionSuggestionsEnabled) &&
                ((e.textAndImages.expressionSuggestionsEnabled = mL._t.create({ value: n })), !0)
            );
        },
        cleanup() {
            tl.w.remove("ExpressionSuggestionsPersistedStore");
        },
    },
    {
        version: 18,
        run(e) {
            let t = !1;
            return (
                mR(e, pS._2.GUILD_DELETE_FEEDBACK, nX.M.GUILD_DELETE_FEEDBACK) && (t = !0),
                mR(e, pS._2.GUILD_LEAVE_FEEDBACK, nX.M.GUILD_LEAVE_FEEDBACK) && (t = !0),
                t
            );
        },
        cleanup() {},
    },
    {
        version: 19,
        run(e) {
            let t = !1;
            return tl.w.get("forumHelperCardStorageKey") && (t = mv(e, nX.M.FORUM_CHANNEL_HELPER_CARD)), t;
        },
        cleanup() {
            tl.w.remove("forumHelperCardStorageKey");
        },
    },
    {
        version: 20,
        run(e) {
            let t = tl.w.get("lastChangeLogId");
            if (null == t) return !1;
            if (!(0, my.hT)(t)) return tl.w.remove("lastChangeLogId"), !1;
            if (null == e.userContent) e.userContent = mS.YW.create();
            else if (
                null != e.userContent &&
                null != e.userContent.lastReceivedChangelogId &&
                "0" !== e.userContent.lastReceivedChangelogId
            )
                return tl.w.remove("lastChangeLogId"), !1;
            return (e.userContent.lastReceivedChangelogId = t), !0;
        },
        cleanup() {
            tl.w.remove("lastChangeLogId");
        },
    },
    {
        version: 21,
        run: (e) => e.appearance?.uiDensity === mS.NS.COMPACT && ((e.appearance.uiDensity = mS.NS.DEFAULT), !0),
        cleanup() {},
    },
];
var mD = n(405892);
let mx = {
    init() {
        (mD.A[dc.oD.PRELOADED_USER_SETTINGS] = mP),
            (mD.A[dc.oD.FRECENCY_AND_FAVORITES_SETTINGS] = mN),
            X.h.subscribe("CONNECTION_OPEN", mw),
            X.h.subscribe("USER_SETTINGS_PROTO_ENQUEUE_UPDATE", mM),
            X.h.subscribe("USER_SETTINGS_PROTO_LOAD_IF_NECESSARY", mU),
            X.h.subscribe("APP_STATE_UPDATE", mG);
    },
};
function mw() {
    let e = c4.A.getFullState(),
        t = e[dc.oD.PRELOADED_USER_SETTINGS];
    t.editInfo.triggeredMigrations && pL.wc.markDirtyFromMigration(t.proto, t.editInfo.cleanupFuncs),
        eG().forEach(pL.Df, (t, n) => {
            let i = e[Number(n)];
            null != i.editInfo.offlineEditDataVersion &&
                null != i.editInfo.protoToSave &&
                t.scheduleSaveFromOfflineEdit();
        });
}
function mM(e) {
    let {
        settings: { proto: t, type: n },
        delaySeconds: i,
        jitter: r,
    } = e;
    pL.Df[n].markDirty(t, { delaySeconds: i, jitter: r });
}
function mU(e) {
    let { settingsType: t } = e;
    pL.Df[t].loadIfNecessary();
}
function mG(e) {
    let { state: t } = e;
    ("inactive" === t || "background" === t) &&
        eG().forEach(pL.Df, (e, t) => {
            null != c4.A.getFullState()[Number(t)].editInfo.timeout &&
                (e.logger.log("Triggering persistChanges due to AppStateUpdate"), e.persistChanges());
        });
}
function mj() {
    let e = l;
    if (null == e || !t4.A.isOpen(e)) return !1;
    X.h.wait(() => tJ.VN(e)), e4.A.getRTCConnection()?.setPipOpen(!1), (l = null);
}
function mk() {
    let e = e4.A.getChannelId(),
        t = l === e;
    if (
        (function () {
            let e = e4.A.getChannelId(),
                t = et.A.getChannelId();
            if (!eL.Ay.supports(eO.O5.VIDEO) || eS.A.getWindowOpen(x.MLl.CHANNEL_CALL_POPOUT)) return !0;
            let n = null != e && oS.A.getAllActiveStreams().some((t) => !tg.A.isParticipantPoppedOut(e, (0, _h._z)(t)));
            if (
                !(
                    (null != e &&
                        Object.values(rH.A.getVideoVoiceStatesForChannel(e)).some((t) => {
                            let { userId: n } = t;
                            return !eL.Ay.isLocalVideoDisabled(n) && !tg.A.isParticipantPoppedOut(e, n);
                        })) ||
                    n
                )
            )
                return !0;
            let i = t3.A.hasLayers();
            return !(i && t3.A.getLayers().includes(x.zgK.RTC_DEBUG)) && (!!i || e === t);
        })()
    )
        return mj();
    if ((t || mj(), null == e)) return !1;
    let n = i9.A.getChannel(e);
    return (
        !(null == n || t4.A.isOpen(e)) &&
        (X.h.wait(() => tJ.ho(n.id, x.o1q.VIDEO, { channel: n })),
        e4.A.getRTCConnection()?.setPipOpen(!0),
        void (l = e))
    );
}
class mV extends Z.A {
    _initialize() {
        et.A.addChangeListener(mk),
            en.A.addChangeListener(mk),
            e4.A.addChangeListener(mk),
            rH.A.addChangeListener(mk),
            t3.A.addChangeListener(mk),
            oS.A.addChangeListener(mk),
            eS.A.addChangeListener(mk),
            eL.Ay.addChangeListener(mk),
            rR.Ay.addChangeListener(mk),
            tg.A.addChangeListener(mk);
    }
    _terminate() {
        et.A.removeChangeListener(mk),
            en.A.removeChangeListener(mk),
            e4.A.removeChangeListener(mk),
            rH.A.removeChangeListener(mk),
            t3.A.removeChangeListener(mk),
            oS.A.removeChangeListener(mk),
            eS.A.removeChangeListener(mk),
            eL.Ay.removeChangeListener(mk),
            rR.Ay.removeChangeListener(mk),
            tg.A.removeChangeListener(mk);
    }
}
let mF = new mV();
var mH = n(885576);
let mB = new ec.Ep(),
    mY = new ec.Ep();
class m$ extends Z.A {
    _initialize() {
        X.h.subscribe("IDLE", this.handleIdleUpdate);
    }
    _terminate() {
        mB.stop(), mY.stop(), X.h.unsubscribe("IDLE", this.handleIdleUpdate);
    }
    handleIdleUpdate() {
        let e = mH.A.getIdleSince();
        if (!G.isPlatformEmbedded) return;
        for (let e of (mB.stop(), mY.stop(), oS.A.getAllActiveStreams())) if (e.state !== x.XYD.ENDED) return;
        if (null == e) return;
        let t = e4.A.getChannelId();
        if (null == t) return;
        mY.start(18e6, () => {
            O.default.selectVoiceChannel(null);
        });
        let n = rG.A.getGuild(e4.A.getGuildId());
        if (null == n || null == n.afkChannelId || n.afkChannelId === t || null == n.afkTimeout) return;
        let i = i9.A.getChannel(t);
        null == i ||
            i.isGuildStageVoice() ||
            mB.start(e + n.afkTimeout * e_.A.Millis.SECOND - Date.now(), () => {
                null != (n = rG.A.getGuild(e4.A.getGuildId())) &&
                    null != n.afkChannelId &&
                    O.default.selectVoiceChannel(n.afkChannelId, !1, !1, { bypassIdleUpdate: !0 });
            });
    }
}
let mW = new m$();
var mz = n(565058);
let mK = !1,
    mq = null,
    mX = {
        init() {
            X.h.subscribe("CONNECTION_OPEN", (e) => {
                let { pendingPayments: t } = e;
                if (null != t && t.length > 0) {
                    var i;
                    if (mq === t[0] || null == (mq = t[0])) return;
                    (i = mq),
                        mK ||
                            ((mK = !0),
                            (0, T.openModalLazy)(async () => {
                                let { default: e } = await n.e("56999").then(n.bind(n, 302810));
                                return (t) => {
                                    let { transitionState: n, onClose: r } = t;
                                    return (0, p.jsx)(e, {
                                        pendingPayment: i,
                                        transitionState: n,
                                        onClose: () => ((mK = !1), r()),
                                    });
                                };
                            }));
                }
            });
        },
    };
var mZ = n(612181);
n(115036), n(131319), n(794383), n(530789), n(712687), n(328968), n(67480), n(116956), n(304296), n(628965);
let mQ = x.XlH.CLOSED,
    mJ = {},
    m0 = null;
function m1() {
    let e = iA.default.getCurrentUser();
    if (null == e) return m2();
    (mQ = x.XlH.OPEN),
        (mJ = {}),
        (m0 = {
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
function m2() {
    (mQ = x.XlH.CLOSED), (m0 = null), (mJ = {});
}
function m6() {
    (mQ = x.XlH.OPEN), (mJ = {});
}
class m5 extends f.Ay.Store {
    static displayName = "UserSettingsAccountStore";
    initialize() {
        this.waitFor(iA.default);
    }
    getErrors() {
        return mJ;
    }
    getSubmitting() {
        return mQ === x.XlH.SUBMITTING;
    }
    getSettings() {
        return m0;
    }
}
new m5(X.h, {
    USER_SETTINGS_MODAL_OPEN: function () {
        m1();
    },
    USER_SETTINGS_MODAL_INIT: m1,
    USER_SETTINGS_MODAL_CLOSE: m2,
    LOGOUT: m2,
    USER_SETTINGS_MODAL_SUBMIT: function () {
        mQ = x.XlH.SUBMITTING;
    },
    USER_SETTINGS_MODAL_SUBMIT_FAILURE: function (e) {
        if (mQ !== x.XlH.SUBMITTING) return !1;
        (mQ = x.XlH.OPEN), (mJ = e.errors ?? {});
    },
    USER_SETTINGS_MODAL_UPDATE_ACCOUNT: function (e) {
        let { settings: t } = e;
        null == m0 && (m0 = {}), (m0 = { ...m0, ...t });
    },
    USER_SETTINGS_MODAL_SUBMIT_COMPLETE: m6,
    USER_SETTINGS_MODAL_RESET: function () {
        let e = iA.default.getCurrentUser();
        m6(),
            null != e &&
                (m0 = {
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
(0, eg.as)(), f.Ay.initialize(), pf.loadServer();
let m4 = (0, C.Fe)({
        createPromise: () => n.e("11415").then(n.bind(n, 844358)),
        webpackId: 844358,
        name: "UnauthenticatedDeepLinkActivity",
        renderLoader: d_,
    }),
    m8 = (0, C.Fe)({
        createPromise: () => n.e("15243").then(n.bind(n, 190662)),
        webpackId: 190662,
        name: "ApplicationDirectoryRoutes",
        renderLoader: d_,
    });
G.isPlatformEmbedded &&
    (e0.Ay.on("USER_SETTINGS_OPEN", (e, t) => {
        (0, e3.openUserSettings)();
    }),
    e0.Ay.on("LAUNCH_APPLICATION", async (e, t) => {
        let i = rj.A.getActiveLibraryApplication(t);
        (await Promise.resolve().then(n.bind(n, 715671))).playApplication(t, i, {
            analyticsParams: { location: { page: x.liQ.DIRECT, object: x.ZSU.WEB_URL } },
        });
    }));
let m7 = H((e) => {
        let { location: t } = e;
        return (
            (0, uQ.B)(() => {
                let e = P.A.getHighestState();
                if (e === x.fAW.OPEN || e === x.fAW.OPENING) return;
                let n = (0, lJ.parseSettingsUrl)({ path: t.pathname, search: t.search });
                (0, lJ.trackParseSettingsUrl)(n, "deeplink"),
                    (0, e3.openUserSettings)(n.target, { path: n.path, searchParams: n.params });
            }),
            (0, p.jsx)(M, {
                deepLinkType: dd.XK.USER_SETTINGS,
                path: t.pathname,
                search: t.search,
                paramsBuilder: function (e) {
                    let { path: t, fingerprint: n, search: i, installationId: r } = e,
                        [, , a, l] = t.split("/");
                    return { path: t, section: a, subsection: l, fingerprint: n, installationId: r, search: i };
                },
                children: (0, p.jsx)(g.rd, { to: l0.A.defaultRoute }),
            })
        );
    }),
    m9 = H((e) => {
        let { location: t } = e,
            i = (0, _Z.parsePlaygroundUrl)(t.pathname);
        return (
            (0, uQ.B)(() => {
                let { openPlaygroundFromParsedUrl: e } = n(965042);
                e({ match: i });
            }),
            (0, p.jsx)(M, {
                deepLinkType: dd.XK.PLAYGROUND,
                path: t.pathname,
                paramsBuilder: function (e) {
                    let { path: t, fingerprint: n, installationId: i } = e,
                        { collection: r, story: a } = (0, _Z.parsePlaygroundUrl)(t);
                    return { path: t, collection: r, story: a, fingerprint: n, installationId: i };
                },
                children: (0, p.jsx)(g.rd, { to: l0.A.defaultRoute }),
            })
        );
    }),
    Ie = f.Ay.connectStores([c_.A, l0.A, D.default], () => ({
        isConnected: c_.A.isConnected(),
        defaultRoute: l0.A.defaultRoute,
        defaultRouteFallback: l0.A.fallbackRoute,
        token: D.default.getToken(),
    }))(
        class extends m.Component {
            render() {
                let { isConnected: e, defaultRoute: t, token: n, defaultRouteFallback: i } = this.props;
                if (null == n) return (0, p.jsx)(g.rd, { to: x.BVt.DEFAULT_LOGGED_OUT });
                if (e) {
                    let e = Il(t);
                    return null == e ||
                        ((e.params.guildId === x.ME || null != rG.A.getGuild(e.params.guildId)) &&
                            null != i9.A.getChannel(e.params.channelId))
                        ? (0, p.jsx)(g.rd, { to: t })
                        : (0, p.jsx)(g.rd, { to: i });
                }
                return null;
            }
        },
    ),
    It = H((0, ef.C)(c0, null, { passProps: !1 })),
    In = (0, ef.C)(m8, null, { passProps: !1 }),
    Ii = [
        x.BVt.GUILD_BOOSTING_MARKETING(lX.pv.guildId()),
        ...Array.from(da.qW).map((e) => x.BVt.CHANNEL(lX.pv.guildId(), e)),
    ];
function Ir(e) {
    let { guildId: t, channelId: n = null, messageId: i = null, threadId: r = null } = e.params;
    return { guildId: t ?? x.ME, channelId: n, messageId: i, threadId: r };
}
let Ia = [
    {
        path: [x.BVt.ACTIVITY_DETAILS(":applicationId")],
        render: function (e) {
            return (0, mZ.wR)() || D.default.getLoginStatus() === x.aUe.LOGGING_IN || !D.default.allowLogoutRedirect()
                ? It(e)
                : (0, p.jsx)(m4, { applicationId: e.match.params.applicationId });
        },
    },
    {
        path: [x.BVt.APP_WITH_INVITE_AND_GUILD_ONBOARDING(":inviteCode")],
        render: function (e) {
            let { match: t } = e,
                { inviteCode: n } = t.params;
            return (
                (0, uQ.B)(() => {
                    u1({ code: n });
                }),
                (0, p.jsx)(g.rd, { to: l0.A.defaultRoute })
            );
        },
    },
    {
        path: [x.BVt.APP_WITH_GIFT_CODE(":giftCode")],
        render: function (e) {
            let { match: t } = e,
                { giftCode: n } = t.params;
            return (
                (0, uQ.B)(() => {
                    (0, L.G)(n, !0, !0).then((e) => {
                        let { giftCode: t } = e;
                        null != t && (0, AL.h)({ processedCode: t.code });
                    });
                }),
                (0, p.jsx)(g.rd, { to: l0.A.defaultRoute })
            );
        },
    },
    { path: [x.BVt.APP], render: () => (0, p.jsx)(Ie, {}) },
    {
        path: [x.BVt.USERS(":id")],
        render: function (e) {
            let { match: t } = e,
                { id: n } = t.params;
            return (
                (0, uQ.B)(() =>
                    (0, rK.openUserProfileModal)({ userId: n, sourceAnalyticsLocations: [eC.A.URI_SCHEME] }),
                ),
                (0, p.jsx)(g.rd, { to: l0.A.defaultRoute })
            );
        },
    },
    {
        path: [x.BVt.APPLICATION_LIBRARY_ACTION(":gameId", ":action")],
        render: function (e) {
            let { match: t } = e,
                { gameId: i, action: r } = t.params;
            return (
                rY.A.whenInitialized(() => {
                    rj.A.whenInitialized(() => {
                        switch (r) {
                            case "launch": {
                                let e = rj.A.getActiveLibraryApplication(i);
                                if (null == e) return;
                                Promise.resolve()
                                    .then(n.bind(n, 715671))
                                    .then((t) => {
                                        t.playApplication(e.id, e, {
                                            analyticsParams: {
                                                location: { page: x.liQ.DIRECT, object: x.ZSU.WEB_URL },
                                            },
                                        });
                                    });
                                break;
                            }
                            case "test-mode":
                                uW.A.whenInitialized(() => b.q1(i));
                                break;
                            case "uninstall": {
                                let e = rj.A.getActiveLibraryApplication(i);
                                if (null == e) return;
                                (0, S.z)(e.id, e.branchId, x.ThZ.URI_SCHEME);
                            }
                        }
                    });
                }),
                (0, p.jsx)(g.rd, { to: x.BVt.APPLICATION_LIBRARY })
            );
        },
    },
    {
        path: [x.BVt.GUILD_CREATE],
        render: function () {
            return (
                (0, uQ.B)(() => uS.A.openCreateGuildModal({ location: "External link" })),
                (0, p.jsx)(g.rd, { to: l0.A.defaultRoute })
            );
        },
    },
    {
        path: [x.BVt.PICK_GUILD_SETTINGS(":section?", ":subsection?")],
        render: function (e) {
            let { match: t } = e,
                { section: i, subsection: r } = t.params,
                a = (0, I.parse)(location.search).feature;
            return (
                (0, uQ.B)(() => {
                    var e;
                    return (
                        (e = { section: (0, u6.A)(x.BEX, i), subsection: (0, u6.A)(x.nd0, r), feature: a }),
                        void (0, T.openModalLazy)(
                            async () => {
                                let { default: t } = await n.e("66460").then(n.bind(n, 980791));
                                return (n) => (0, p.jsx)(t, { ...n, ...e });
                            },
                            { modalKey: "Guild Settings Picker Modal" },
                        )
                    );
                }),
                (0, p.jsx)(g.rd, { to: l0.A.defaultRoute })
            );
        },
    },
    {
        path: [x.BVt.DEVELOPER_ACTIVATE_APPLICATION_TEST_MODE],
        render: function (e) {
            let { location: t } = e,
                n = (0, I.parse)(t.search),
                i = "string" == typeof n.applicationId ? n.applicationId : null,
                r = "true" === n.openGameProfile;
            return (
                (0, uQ.B)(() => {
                    null != i &&
                        b.q1(i).then((e) => {
                            null != e &&
                                (0, uT.nf)(uT.HP.APPLICATION_TEST_MODE_DEBUG, { shouldAutoOpenGameProfile: r });
                        });
                }),
                (0, p.jsx)(g.rd, { to: l0.A.defaultRoute })
            );
        },
    },
    { path: [x.BVt.SETTINGS(":section", ":subsection?")], render: m7 },
    { path: [x.BVt.PLAYGROUND(":collection?", ":story?")], render: m9 },
    {
        path: [x.BVt.USER_GUILD_NOTIFICATION_SETTINGS(lX.pv.guildId())],
        render: function (e) {
            let { match: t } = e,
                { guildId: i } = t.params;
            return (
                (0, uQ.B)(() => {
                    (0, T.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([
                            n.e("28367"),
                            n.e("8555"),
                            n.e("30282"),
                            n.e("41268"),
                        ]).then(n.bind(n, 893605));
                        return (t) => (0, p.jsx)(e, { ...t, guildId: i });
                    });
                }),
                (0, p.jsx)(g.rd, { to: x.BVt.CHANNEL(i) })
            );
        },
    },
    {
        path: [x.BVt.APPLICATION_LIBRARY_INVENTORY],
        render: function () {
            return (
                (0, uQ.B)(() => (0, e3.openUserSettings)(e5.X.GIFT_PANEL)), (0, p.jsx)(g.rd, { to: l0.A.defaultRoute })
            );
        },
    },
    {
        path: [x.BVt.WELCOME(lX.pv.guildId({ optional: !0 }), lX.pv.channelId({ optional: !0 }))],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, channelId: i } = t.params;
            (0, _M.C)(_$.zY.MARKETING_UNCLAIMED);
            let r = x.BVt.CHANNEL(n, i);
            return (0, p.jsx)(g.rd, { to: r });
        },
    },
    {
        path: [x.BVt.GUILD_EVENT_DETAILS(lX.pv.guildId({ optional: !0 }), ":guildEventId")],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, guildEventId: i } = t.params;
            return (
                (0, uQ.B)(() => {
                    (0, oO.uR)({ eventId: i });
                }),
                (0, p.jsx)(g.rd, { to: x.BVt.CHANNEL(n) })
            );
        },
    },
    {
        path: [x.BVt.GUILD_SETTINGS(lX.pv.guildId(), ":section?", ":subsection?")],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, section: i, subsection: r } = t.params;
            return (
                (0, uQ.B)(() => {
                    u2.A.open(n, (0, u6.A)(x.BEX, i), void 0, (0, u6.A)(x.nd0, r));
                }),
                (0, p.jsx)(g.rd, { to: x.BVt.CHANNEL(n) })
            );
        },
        isChatRoute: !0,
    },
    {
        path: [
            x.BVt.CHANNEL_THREAD_VIEW(lX.pv.guildId(), lX.pv.channelId(), ":threadId", ":messageId?"),
            x.BVt.CHANNEL(lX.pv.guildId(), lX.pv.channelId({ optional: !0 }), ":messageId?"),
            x.BVt.ACTIVITY,
            x.BVt.ACTIVITIES,
            x.BVt.ACTIVITIES_HAPPENING_NOW,
            x.BVt.APPLICATION_LIBRARY,
            x.BVt.APPLICATION_STORE,
            x.BVt.MESSAGE_REQUESTS,
            x.BVt.COLLECTIBLES_SHOP,
            x.BVt.COLLECTIBLES_SHOP_COLLECTION_DETAIL(":collectionId"),
            x.BVt.COLLECTIBLES_SHOP_PRODUCT_DETAIL(":skuId"),
            x.BVt.COLLECTIBLES_SHOP_LAYOUT(":layoutId"),
            x.BVt.GUILD_DISCOVERY,
            x.BVt.QUEST_HOME_DEPRECATED,
            x.BVt.QUEST_HOME,
            x.BVt.ICYMI,
            x.BVt.GLOBAL_DISCOVERY,
            x.BVt.GUILD_MEMBER_VERIFICATION(lX.pv.guildId()),
            x.BVt.GUILD_MEMBER_VERIFICATION_FOR_HUB(lX.pv.guildId(), ":inviteCode?"),
            x.BVt.GUILD_BOOSTING_MARKETING(lX.pv.guildId()),
            x.BVt.GUILD_FEATURE(":feature", lX.pv.guildId()),
            x.BVt.FEATURE(":feature"),
            x.BVt.FAMILY_CENTER,
        ],
        render: It,
        isChatRoute: !0,
    },
    { path: [x.BVt.APPLICATION_DIRECTORY], render: In },
    {
        path: [x.BVt.GAME_SHOP(lX.pv.guildId(), ":shopSkuId?", ":shopSlug?")],
        render: function (e) {
            let { match: t } = e,
                { guildId: n, shopSkuId: i, shopSlug: r } = t.params;
            return (0, p.jsx)(g.rd, { to: x.BVt.CHANNELS_GAME_SHOP(n, 0, i, r) });
        },
    },
];
function Il(e) {
    for (let { path: t, isChatRoute: n } of Ia) {
        if (!n) continue;
        let i = (0, lZ.B)(e, { path: t });
        if (null != i) return i;
    }
    return null;
}
function Is(e) {
    let { channelId: t, guildId: n, pathname: i } = e;
    if (!c_.A.isConnected()) return;
    let { location: r } = (0, aO.JK)();
    r.pathname === i && (null == i9.A.getChannel(t) ? (0, aO.bG)(x.BVt.CHANNEL(n)) : (0, aO.bG)(i));
}
class Io extends m.PureComponent {
    historyUnlisten = () => {};
    rewriterUnlisten = () => {};
    componentDidMount() {
        e0.Ay.setZoomFactor(B.A.zoom),
            pf.init(),
            ex.initialize(),
            Au.initialize(),
            uH.initialize(),
            mW.initialize(),
            u$.initialize(),
            Ay.A.initialize(),
            uy.initialize(),
            _x.initialize(),
            Y.A.init(),
            uZ.init(),
            uz.init(),
            _X.initialize(),
            ed.initialize(),
            uM.initialize(),
            Aw.initialize(),
            K.Ay.initialize(),
            nn.initialize(),
            mF.initialize(),
            _n.initialize(),
            Ao.initialize(),
            z.A.initialize(),
            _i.init(),
            uh.init(),
            mX.init(),
            W.A.initialize(),
            mo.init(),
            mz.A.init(),
            mI.init(),
            pV.initialize(),
            pB.initialize(),
            md.A.initialize(),
            mx.init(),
            uP.initialize(),
            $.A.initialize(),
            pj.initialize(),
            _4.A.initialize(),
            _3.initialize(),
            _9.initialize(),
            um.initialize(),
            uf.initialize(),
            uj.initialize(),
            _o.initialize(),
            _w.A.initialize(),
            AM.A.initialize(),
            AS.initialize(),
            c5.initialize(),
            eI.initialize(),
            (this.rewriterUnlisten = lq.A.addRouteRewriter(this.ensureChannelMatchesGuild)),
            (this.historyUnlisten = lq.A.addRouteChangeListener(this.handleHistoryChange));
    }
    componentWillUnmount() {
        pf.terminate(),
            mW.terminate(),
            Ay.A.terminate(),
            Au.terminate(),
            ex.terminate(),
            K.Ay.terminate(),
            nn.terminate(),
            mF.terminate(),
            z.A.terminate(),
            Aw.terminate(),
            Ao.terminate(),
            md.A.terminate(),
            W.A.terminate(),
            uP.terminate(),
            _w.A.terminate(),
            $.A.terminate(),
            AM.A.terminate(),
            pj.terminate(),
            _4.A.terminate(),
            _3.terminate(),
            _9.terminate(),
            um.terminate(),
            uf.terminate(),
            AS.terminate(),
            uU.A.terminate(),
            c5.terminate(),
            eI.terminate(),
            uj.terminate(),
            _o.terminate(),
            this.historyUnlisten(),
            this.rewriterUnlisten();
    }
    handleHistoryChange(e) {
        let { pathname: t, search: n } = e;
        !(function (e) {
            if (c_.A.isConnected() || c_.A.isTryingToConnect()) return;
            let t = D.default.getToken();
            null == t ||
                ((function (e) {
                    for (let t of Aj) if (null != (0, lZ.B)(e, { path: t })) return !0;
                    return !1;
                })(e) &&
                    N.A.startSession(t));
        })(t),
            (function (e, t) {
                let n = Il(e);
                if (null == n) return;
                let { guildId: i, channelId: r, messageId: a, threadId: l } = Ir(n),
                    s = (0, lX.nn)(i),
                    o = (0, lX.ts)(r),
                    d = (0, lX.ts)(l),
                    c = en.A.getGuildId(),
                    u = c !== i;
                if ((s && u && y.A.selectGuild(i), s && o)) {
                    let n = et.A.getChannelId(c),
                        s = n !== r,
                        o = null != pQ.Ay.getGuildSidebarState(i);
                    if (!m3 || u || s || null != a) {
                        (m3 = !0), O.default.selectChannel({ guildId: i, channelId: r, messageId: a });
                        let { summaryId: e } = (0, I.parse)(t);
                        null != e && pY.Ay.setSelectedSummary(r, e);
                    }
                    if (
                        (o &&
                            s &&
                            null != r &&
                            null != pQ.Ay.getCurrentSidebarChannelId(r) &&
                            pT.A.closeChannelSidebar(r),
                        null != l && d)
                    ) {
                        let e = pQ.Ay.getCurrentSidebarChannelId(n),
                            t = e !== l;
                        if (null != r && null != l && t)
                            if (o) (0, aO.bG)(x.BVt.CHANNEL(i, l, a));
                            else {
                                let e = { type: pN.LU.THREAD };
                                null != a && (e.initialMessageId = a),
                                    pT.A.openThreadAsSidebar({
                                        guildId: i,
                                        baseChannelId: r,
                                        channelId: l,
                                        details: e,
                                    });
                            }
                        else o && null != e && null != r && pT.A.closeChannelSidebar(r);
                    } else null == r || s || pT.A.closeChannelSidebar(r);
                    let _ = nj.getIsOpen();
                    if (r === da.VV.ROLE_SUBSCRIPTIONS) nM.closeSidebar();
                    else if (u && _) {
                        let t = null == c && i === x.ME,
                            n = e === x.BVt.GUILD_DISCOVERY;
                        t || n ? nM.closeSidebar() : nM.openSidebar();
                    } else ((s && _) || (!u && !s)) && nM.closeSidebar();
                } else Ii.some((t) => (0, lZ.B)(e, t)?.isExact === !0) || (0, aO.bG)(l0.A.fallbackRoute);
            })(t, n),
            (0, uO.MS)();
    }
    ensureChannelMatchesGuild(e) {
        if (!c_.A.isConnected()) return null;
        let { pathname: t } = e,
            n = Il(t);
        if (null == n) return null;
        let { guildId: i, channelId: r, threadId: a } = Ir(n),
            l = (0, lX.nn)(i) && i !== x.ME && i !== x.YYv;
        if (null != r && (0, lX.ts)(r) && !(0, da.jq)(r) && l) {
            let n = i9.A.getChannel(r);
            if (null == n) p$.A.loadThread(r).then(() => Is({ channelId: r, guildId: i, pathname: t }));
            else if (n.guild_id !== i && i !== x.gNP) return { path: x.BVt.CHANNEL(i), state: e.state };
            if (null != a) {
                if (!((0, lX.ts)(a) && !(0, da.jq)(r))) return null;
                let n = i9.A.getChannel(a);
                if (null == n) p$.A.loadThread(a).then(() => Is({ channelId: a, guildId: i, pathname: t }));
                else if (n?.parent_id !== r)
                    return pT.A.closeChannelSidebar(r), { path: x.BVt.CHANNEL(i, r), state: e.state };
            }
        }
        return null;
    }
    render() {
        return (0, p.jsxs)(m.Fragment, {
            children: [
                (0, p.jsxs)(g.dO, {
                    children: [
                        (0, p.jsx)(g.rd, { exact: !0, from: "/channels", to: "/" }),
                        Ia.map((e) => {
                            let { path: t, render: n } = e;
                            return (0, p.jsx)(g.qh, { path: t, render: n }, t[0]);
                        }),
                        (0, p.jsx)(g.rd, { to: "/" }),
                    ],
                }),
                (0, p.jsx)(uN.A, {}),
            ],
        });
    }
}
let Id = Io;
