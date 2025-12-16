n.d(t, {
    Z: () => th,
    m: () => tu,
}),
    n(388685),
    n(539854);
var a = n(54381),
    r = n(473749),
    l = n(120356),
    i = n.n(l),
    s = n(392711),
    o = n.n(s),
    c = n(374470),
    d = n(442837),
    u = n(704215),
    m = n(846519),
    p = n(400354),
    h = n(789639),
    f = n(930295),
    x = n(481060),
    b = n(239091),
    g = n(410575),
    v = n(586902),
    j = n(493773),
    y = n(980591),
    C = n(468363),
    _ = n(326255),
    S = n(771173),
    E = n(963056),
    T = n(570928),
    O = n(100527),
    N = n(906732),
    w = n(541638),
    P = n(676742),
    I = n(1585),
    k = n(304761),
    R = n(865427),
    A = n(358221),
    Z = n(571250),
    D = n(628581),
    L = n(659580),
    M = n(855844),
    U = n(55311),
    B = n(575175),
    F = n(522651),
    G = n(795318),
    V = n(427217),
    H = n(243778),
    z = n(594928),
    W = n(386725),
    K = n(821795),
    q = n(892567),
    Y = n(258609),
    Q = n(427347),
    X = n(72897),
    J = n(78933),
    $ = n(850020),
    ee = n(379839),
    et = n(359135),
    en = n(516817),
    ea = n(332473),
    er = n(963590),
    el = n(494424),
    ei = n(299886),
    es = n(375720),
    eo = n(659302),
    ec = n(768419),
    ed = n(172416),
    eu = n(184301),
    em = n(670188),
    ep = n(313789),
    eh = n(846071),
    ef = n(518596),
    ex = n(879815),
    eb = n(294629),
    eg = n(875527),
    ev = n(702977),
    ej = n(56848),
    ey = n(940315),
    eC = n(378441),
    e_ = n(358820),
    eS = n(723547),
    eE = n(361045),
    eT = n(74650),
    eO = n(306609),
    eN = n(170293),
    ew = n(8404),
    eP = n(199902),
    eI = n(314897),
    ek = n(592125),
    eR = n(831506),
    eA = n(819640),
    eZ = n(131951),
    eD = n(19780),
    eL = n(914010),
    eM = n(885110),
    eU = n(606304),
    eB = n(246946),
    eF = n(594174),
    eG = n(78839),
    eV = n(626135),
    eH = n(768581),
    ez = n(572004),
    eW = n(459273),
    eK = n(585483),
    eq = n(70956),
    eY = n(823379),
    eQ = n(5192),
    eX = n(374023),
    eJ = n(51144),
    e$ = n(998502),
    e0 = n(660230),
    e1 = n(853170),
    e4 = n(422202),
    e3 = n(870569),
    e8 = n(345243),
    e7 = n(115530),
    e5 = n(541769),
    e6 = n(981631),
    e2 = n(921944),
    e9 = n(324805),
    te = n(65154),
    tt = n(388032),
    tn = n(484036);
function ta(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function tr(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            a.forEach(function (t) {
                ta(e, t, n[t]);
            });
    }
    return e;
}
function tl(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var a = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, a);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let ti = e$.ZP.getEnableHardwareAcceleration() ? x.Xo$ : x.qEK,
    ts = 2 * eq.Z.Millis.MINUTE,
    to = 3 * eq.Z.Millis.SECOND,
    tc = 5 * eq.Z.Millis.SECOND;
function td(e) {
    let {
            ref: t,
            speaking: n,
            latched: l,
            voiceDb: s = -1 / 0,
            streaming: o,
            currentUser: c,
            status: d,
            handleClick: u,
            handleMouseLeave: m,
            renderNameTag: p,
            nameplate: h,
            selectedGuildId: f,
            transitionAccountPanel: b,
            avatarDecoration: v,
            "data-jump-section": j,
        } = e,
        C = r.useRef(null),
        _ = null != t ? t : C,
        S = (0, eH.NZ)({
            avatarDecoration: v,
            size: (0, I.y9)(x.EFr.SIZE_32),
        }),
        E = (0, W.Z)(),
        {
            updateOpenPopoutRef: T,
            highlightBadge: O,
            setHighlightBadge: N,
        } = (function () {
            let e = r.useRef(null),
                t = r.useCallback((t) => {
                    e.current = () => {
                        t.onMouseDown(), t.onClick();
                    };
                }, []),
                [n, a] = r.useState(),
                [l, i] = r.useState(!1);
            return (
                (0, y.Z)(() => i(!0), 750),
                r.useEffect(() => {
                    let t = (t) => {
                        var n;
                        let { highlightBadge: r } = t;
                        null != r && a(r), null == (n = e.current) || n.call(e);
                    };
                    return (
                        eK.S.subscribe(e6.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, t),
                        () => {
                            eK.S.unsubscribe(e6.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, t);
                        }
                    );
                }),
                {
                    updateOpenPopoutRef: t,
                    highlightBadge: l ? n : void 0,
                    setHighlightBadge: a,
                }
            );
        })(),
        w = (0, ee.A)(h);
    if (null == c) return null;
    let P = b && f !== e6.I_8 && f !== e6.ME && null != f ? f : void 0;
    return (0, a.jsx)(g.Z, {
        object: e6.qAy.AVATAR,
        children: (0, a.jsx)(em.Z, {
            user: c,
            targetElementRef: _,
            clickTrap: !0,
            preload: () =>
                (0, eu.Z)(c.id, c.getAvatarURL(P, em.I), {
                    type: "account_popout",
                    withMutualGuilds: !1,
                    withMutualFriends: !1,
                    guildId: P,
                }),
            renderPopout: (e, t) => {
                let { closePopout: n, setPopoutRef: r } = e;
                return (0, a.jsx)(J.Z, {
                    currentUser: c,
                    highlightBadge: O,
                    openedAt: t,
                    onClose: () => {
                        null == n || n();
                    },
                    setPopoutRef: r,
                    guildId: P,
                    guildProfileEnabled: b,
                });
            },
            position: "top",
            align: "left",
            animation: x.yRy.Animation.FADE,
            spacing: 14,
            fixed: !0,
            ignoreModalClicks: !0,
            onRequestClose: () => {
                m(), N(void 0);
            },
            children: (e) => (
                T(e),
                (0, a.jsxs)(
                    x.P3F,
                    tl(
                        tr(
                            {
                                innerRef: _,
                                style: w,
                            },
                            e,
                        ),
                        {
                            onClick: (t) => {
                                var n;
                                null == (n = e.onClick) || n.call(e, t), null == u || u(t);
                            },
                            "aria-label": tt.intl.string(tt.t["3Uj+2p"]),
                            "data-jump-section": j,
                            className: i()(tn.avatarWrapper, { [tn.plated]: null != h }),
                            children: [
                                (0, a.jsx)(ti, {
                                    size: x.EFr["SIZE_".concat(32)],
                                    src: c.getAvatarURL(b ? f : void 0, 28, !1),
                                    avatarDecoration: S,
                                    "aria-label": c.username,
                                    status: o ? e6.Skl.STREAMING : d,
                                    isSpeaking: n,
                                    isLatched: l,
                                    voiceDb: s,
                                    className: tn.avatar,
                                }),
                                (0, a.jsx)("div", {
                                    className: i()(tn.nameTag, { [tn.canCopy]: ez.wS }),
                                    children: p(E),
                                }),
                            ],
                        },
                    ),
                )
            ),
        }),
    });
}
class tu extends r.PureComponent {
    get isCopiedStreakGodlike() {
        let { copiedStreak: e } = this.state;
        return e >= 10;
    }
    componentDidUpdate(e) {
        let { speakingWhileMuted: t, occluded: n } = e,
            { speakingWhileMuted: a, occluded: r } = this.props;
        r !== n && this.handleOccludedChanged(), a !== t && this.handleSpeakingWhileMutedChanged();
    }
    componentWillUnmount() {
        this.copiedTimeout.stop(), this.copiedDecayTimeout.stop(), this.speakingWhileMutedTooltipTimeout.stop();
    }
    renderCopiedSuccess() {
        let { copiedStreak: e } = this.state,
            t = [
                tt.intl.string(tt.t.MSaeTe),
                tt.intl.string(tt.t.UmrCw7),
                tt.intl.string(tt.t.gKE0Jq),
                tt.intl.string(tt.t["4DSKbi"]),
                tt.intl.string(tt.t["+8ENdT"]),
                tt.intl.string(tt.t.GlWHv8),
                tt.intl.string(tt.t.hIzxU9),
                tt.intl.string(tt.t["26uMPL"]),
                tt.intl.string(tt.t.uFs7R2),
                tt.intl.string(tt.t.bLXdcY),
                tt.intl.string(tt.t.gPg9fS),
            ],
            n = Math.min(Math.max(0, e - 1), t.length - 1);
        return (0, a.jsx)(x.UkV, {
            isShaking: this.isCopiedStreakGodlike,
            children: t[n],
        });
    }
    renderStatus() {
        let { hovered: e } = this.state,
            {
                activities: t,
                applicationStream: n,
                currentUser: r,
                status: l,
                userTag: i,
                voiceActivityStatusEnabled: s,
                voiceChannel: o,
            } = this.props;
        if (null == r) return null;
        if (
            (0, _.Z)({
                activities: t,
                status: l,
                applicationStream: n,
                voiceChannel: s ? o : void 0,
            })
        )
            return (0, a.jsx)(T.Z, {
                hoverText: i,
                forceHover: e,
                children: (0, a.jsx)(S.Z, {
                    location: "Account",
                    user: r,
                    activities: t,
                    applicationStream: n,
                    voiceChannel: s ? o : void 0,
                    textClassName: tn.activityStatusText,
                    hideTooltip: !0,
                }),
            });
        let c =
            null == t
                ? void 0
                : t.find((e) => {
                      let { type: t } = e;
                      return t === e6.IIU.CUSTOM_STATUS;
                  });
        return null != c
            ? (0, a.jsx)(T.Z, {
                  hoverText: i,
                  forceHover: e,
                  children: (0, a.jsx)(V.Z, {
                      activity: c,
                      emojiClassName: tn.emoji,
                      className: tn.customStatus,
                  }),
              })
            : null != l && l !== e6.Skl.UNKNOWN && r.hasUniqueUsername()
              ? (0, a.jsx)(T.Z, {
                    hoverText: i,
                    forceHover: e,
                    children: (0, a.jsx)(E.Z, { text: eJ.ZP.humanizeStatus(l) }),
                })
              : i;
    }
    renderAvatarWithPopout(e) {
        let {
            focusSectionProps: { "data-jump-section": t },
            onClick: n,
        } = e;
        return (0, a.jsx)(
            td,
            tl(tr({}, this.props), {
                ref: this.avatarWithPopoutRef,
                handleClick: n,
                handleMouseLeave: this.handleMouseLeave,
                renderNameTag: this.renderNameTag,
                "data-jump-section": t,
            }),
        );
    }
    renderNameZone(e) {
        var t;
        let { currentUser: n, dismissibleContents: r } = this.props;
        return null == n
            ? null
            : (0, a.jsx)(e5.Z, {
                  guildId: null != (t = this.props.selectedGuildId) ? t : null,
                  targetElementRef: this.avatarWithPopoutRef,
                  additionalDCs: r.avatar,
                  children: this.renderAvatarWithPopout({ focusSectionProps: e }),
              });
    }
    render() {
        let { currentUser: e, nameplate: t, voiceChannel: n, isQuestBarEmpty: r, isListenAlongVisible: l } = this.props,
            s = this.state.hovered;
        return null == e
            ? null
            : (0, a.jsxs)(a.Fragment, {
                  children: [
                      (0, a.jsx)(x.Wdt, {
                          children: (e) =>
                              (0, a.jsxs)("div", {
                                  ref: this.containerRef,
                                  className: i()(tn.container, {
                                      [tn.containerRtcOpened]: null != n,
                                      [tn.containerQuestBarVisible]: !r,
                                      [tn.containerListenAlongVisible]: l,
                                  }),
                                  onMouseEnter: this.handleMouseEnter,
                                  onMouseLeave: this.handleMouseLeave,
                                  children: [
                                      (0, a.jsx)(en.Z, {
                                          nameplate: t,
                                          hovered: s,
                                          placement: et.i.ACCOUNT,
                                      }),
                                      this.renderNameZone(e),
                                      (0, a.jsx)(
                                          tm,
                                          tl(tr({}, this.props, this.state), {
                                              accountContainerRef: this.containerRef,
                                              handleMouseEnterMute: this.handleMouseEnterMute,
                                              handleMouseLeaveMute: this.handleMouseLeaveMute,
                                              handleToggleSelfMute: this.handleToggleSelfMute,
                                              handleToggleSelfDeaf: this.handleToggleSelfDeaf,
                                              handleInputAudioContextMenu: this.handleInputAudioContextMenu,
                                              handleOutputAudioContextMenu: this.handleOutputAudioContextMenu,
                                              handleOpenAccountSettings: this.handleOpenAccountSettings,
                                              handleOpenSettingsContextMenu: this.handleOpenSettingsContextMenu,
                                              dismissTooltips: this.dismissTooltips,
                                          }),
                                      ),
                                  ],
                              }),
                      }),
                      (0, a.jsx)(Q.Z, {}),
                  ],
              });
    }
    constructor(...e) {
        super(...e),
            ta(this, "copiedTimeout", new m.V7()),
            ta(this, "copiedDecayTimeout", new m.V7()),
            ta(this, "speakingWhileMutedTooltipTimeout", new m.V7()),
            ta(this, "lastSpeakingWhileMutedNotificationTime", void 0),
            ta(this, "state", {
                hovered: !1,
                copiedStreak: 0,
                shouldShowNametagTooltip: !1,
                shouldShowCopiedFeedback: !1,
                shouldShowSpeakingWhileMutedTooltip: !1,
                hoveringOnMute: !1,
            }),
            ta(this, "containerRef", r.createRef()),
            ta(this, "avatarWithPopoutRef", r.createRef()),
            ta(this, "handleToggleSelfMute", () => {
                let { serverMute: e, suppress: t, selfMute: n } = this.props;
                (0, B.Z)(e, t, e6.jXE.ACCOUNT_PANEL), (0, F.v)(O.Z.ACCOUNT, F.d.MIC, n);
            }),
            ta(this, "handleToggleSelfDeaf", () => {
                let { serverDeaf: e, selfDeaf: t } = this.props;
                (0, U.Z)(e, e6.jXE.ACCOUNT_PANEL), (0, F.v)(O.Z.ACCOUNT, F.d.DEAFEN, !t);
            }),
            ta(this, "handleOpenAccountSettings", () => {
                this.dismissTooltips(),
                    eD.Z.isConnected()
                        ? (0, ef.openUserSettings)(ep.n.VOICE_AND_VIDEO_PANEL, { section: e6.oAB.VOICE })
                        : (0, ef.openUserSettings)();
            }),
            ta(this, "handleOpenSettingsContextMenu", (e) => {
                let { currentUser: t } = this.props;
                null != t &&
                    (0, b.jW)(e, async () => {
                        let { default: e } = await n.e("2535").then(n.bind(n, 923422));
                        return (n) =>
                            (0, a.jsx)(
                                e,
                                tl(tr({}, n), {
                                    user: t,
                                    premiumSubscription: this.props.premiumSubscription,
                                    webBuildOverride: this.props.webBuildOverride,
                                    onInteraction: (0, G.u)("UserSettingsCogContextMenu", O.Z.ACCOUNT),
                                }),
                            );
                    });
            }),
            ta(this, "audioOnInteractionHandler", (0, G.u)("AudioDeviceMenu", O.Z.ACCOUNT)),
            ta(this, "handleInputAudioContextMenu", (e, t) => {
                this.dismissTooltips(),
                    (0, b.jW)(e, async () => {
                        let { default: e } = await Promise.resolve().then(n.bind(n, 659580));
                        return () => {
                            let { enabledInputProfiles: n } = (0, eh.G)({ location: "Account" });
                            return (0, a.jsx)(N.Gt, {
                                value: t,
                                children: (0, a.jsx)(e, {
                                    onClose: b.Zy,
                                    renderInputDevices: !0,
                                    renderInputProfiles: n.length > 0,
                                    renderInputVolume: !0,
                                    minimal: !0,
                                    onInteraction: this.audioOnInteractionHandler,
                                }),
                            });
                        };
                    });
            }),
            ta(this, "handleOutputAudioContextMenu", (e, t) => {
                this.dismissTooltips(),
                    (0, b.jW)(e, async () => {
                        let { default: e } = await Promise.resolve().then(n.bind(n, 659580));
                        return () =>
                            (0, a.jsx)(N.Gt, {
                                value: t,
                                children: (0, a.jsx)(e, {
                                    onClose: b.Zy,
                                    renderOutputDevices: !0,
                                    renderOutputVolume: !0,
                                    minimal: !0,
                                    onInteraction: this.audioOnInteractionHandler,
                                }),
                            });
                    });
            }),
            ta(this, "handleMouseEnter", () => {
                this.setState({ hovered: !0 });
            }),
            ta(this, "handleMouseLeave", () => {
                this.setState({ hovered: !1 });
            }),
            ta(this, "handleMouseEnterMute", () => {
                this.setState({
                    hoveringOnMute: !0,
                    shouldShowSpeakingWhileMutedTooltip: !1,
                }),
                    this.speakingWhileMutedTooltipTimeout.stop();
            }),
            ta(this, "handleMouseLeaveMute", () => {
                this.setState({ hoveringOnMute: !1 });
            }),
            ta(this, "dismissSpeakingWhileMutedTooltip", () => {
                this.setState({ shouldShowSpeakingWhileMutedTooltip: !1 }),
                    this.speakingWhileMutedTooltipTimeout.stop();
            }),
            ta(this, "dismissTooltips", () => {
                var e, t, n, a;
                null == (e = (t = this.props).dismissInputDeviceChangedTooltip) || e.call(t),
                    null == (n = (a = this.props).dismissOutputDeviceChangedTooltip) || n.call(a),
                    this.dismissSpeakingWhileMutedTooltip();
            }),
            ta(this, "handleCopyTag", () => {
                let { currentUser: e } = this.props,
                    { shouldShowNametagTooltip: t, copiedStreak: n } = this.state;
                if (null == e) return;
                (0, ez.JG)(
                    eJ.ZP.getUserTag(e, {
                        decoration: "never",
                        identifiable: "always",
                    }),
                ),
                    eV.default.track(e6.rMx.TEXT_COPIED, { type: "User Tag" });
                let a = {
                    shouldShowCopiedFeedback: !0,
                    shouldShowNametagTooltip: !0,
                };
                t || (a.copiedStreak = n + 1),
                    this.setState(a, () => {
                        this.copiedTimeout.start(1000, () => this.setState({ shouldShowNametagTooltip: !1 })),
                            this.copiedDecayTimeout.start(2000, () => this.setState({ copiedStreak: 0 }));
                    });
            }),
            ta(this, "handleOccludedChanged", () => {
                let { occluded: e } = this.props;
                e &&
                    this.setState({
                        shouldShowNametagTooltip: !1,
                        shouldShowSpeakingWhileMutedTooltip: !1,
                    });
            }),
            ta(this, "handleSpeakingWhileMutedChanged", () => {
                let {
                        selfMute: e,
                        serverMute: t,
                        suppress: n,
                        speakingWhileMuted: a,
                        occluded: r,
                        shouldShowInputDeviceChangedTooltip: l,
                        shouldShowOutputDeviceChangedTooltip: i,
                    } = this.props,
                    { hoveringOnMute: s } = this.state,
                    o =
                        void 0 === this.lastSpeakingWhileMutedNotificationTime ||
                        Date.now() - this.lastSpeakingWhileMutedNotificationTime > ts;
                a
                    ? s ||
                      !e ||
                      t ||
                      n ||
                      r ||
                      !o ||
                      l ||
                      i ||
                      this.setState({ shouldShowSpeakingWhileMutedTooltip: !0 }, () => {
                          (this.lastSpeakingWhileMutedNotificationTime = Date.now()),
                              this.speakingWhileMutedTooltipTimeout.start(2000, () =>
                                  this.setState({ shouldShowSpeakingWhileMutedTooltip: !1 }),
                              );
                      })
                    : (this.setState({ shouldShowSpeakingWhileMutedTooltip: !1 }),
                      this.speakingWhileMutedTooltipTimeout.stop());
            }),
            ta(this, "renderNameTag", (e) => {
                let { currentUser: t, username: n } = this.props;
                return null == t
                    ? null
                    : (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)("div", {
                                  className: tn.panelTitleContainer,
                                  children: (0, a.jsx)(e7.Z, {
                                      className: i()({ [tn.withDisplayNameStyles]: null != e }),
                                      children: (0, a.jsx)(q.Z, {
                                          userName: n,
                                          displayNameStyles: e,
                                          effectDisplayType: this.state.hovered ? K.F.ANIMATED : K.F.STATIC,
                                          loop: !0,
                                          inProfile: !0,
                                      }),
                                  }),
                              }),
                              (0, a.jsx)("div", {
                                  className: tn.panelSubtextContainer,
                                  children: (0, a.jsx)(e8.Z, { children: this.renderStatus() }),
                              }),
                          ],
                      });
            });
    }
}
function tm(e) {
    let {
            selfDeaf: t,
            selfMute: n,
            awaitingRemote: r,
            serverMute: l,
            serverDeaf: i,
            suppress: s,
            shouldShowSpeakingWhileMutedTooltip: o,
            isEligibleForPomelo: c,
            webBuildOverride: d,
            handleMouseEnterMute: u,
            handleMouseLeaveMute: m,
            handleToggleSelfDeaf: p,
            handleToggleSelfMute: h,
            handleInputAudioContextMenu: f,
            handleOutputAudioContextMenu: x,
            handleOpenAccountSettings: b,
            handleOpenSettingsContextMenu: g,
            dismissibleContents: v,
            nameplate: j,
            accountContainerRef: y,
            shouldShowInputDeviceChangedTooltip: C = !1,
            shouldShowOutputDeviceChangedTooltip: _ = !1,
            dismissTooltips: S,
        } = e,
        E = (0, ee.A)(j);
    return (0, a.jsxs)("div", {
        className: tn.buttons,
        style: E,
        children: [
            (0, a.jsx)(tx, {
                accountContainerRef: y,
                selfMute: n,
                serverMute: l,
                suppress: s,
                awaitingRemote: r,
                onMouseEnter: u,
                onMouseLeave: m,
                onClick: h,
                onContextMenu: f,
                iconForeground: null != j ? tn.iconForeground : void 0,
                nameplate: j,
                shouldShowInputDeviceChangedTooltip: C,
                shouldShowSpeakingWhileMutedTooltip: o,
                dismissTooltips: S,
            }),
            (0, a.jsx)(tb, {
                selfDeaf: t,
                serverDeaf: i,
                onClick: p,
                onContextMenu: x,
                awaitingRemote: r,
                iconForeground: null != j ? tn.iconForeground : void 0,
                nameplate: j,
                shouldShowOutputDeviceChangedTooltip: _,
                dismissTooltips: S,
            }),
            (0, a.jsx)(tf, {
                isEligibleForPomelo: c,
                webBuildOverride: d,
                onClick: b,
                onContextMenu: g,
                dismissibleContents: v.settings,
                iconForeground: null != j ? tn.iconForeground : void 0,
                nameplate: j,
                shouldShowInputDeviceChangedTooltip: C,
                shouldShowOutputDeviceChangedTooltip: _,
            }),
        ],
    });
}
function tp(e) {
    let { shouldShowDeviceChangedNotifications: t } = (0, e4.P)({
            location: "Account.useDeviceChangedTooltip",
            autoTrackExposure: !1,
        }),
        n = (0, d.e7)([eD.Z], () => null != eD.Z.getChannelId()),
        a = (0, X.Fh)(e),
        l = r.useRef(new m.V7()),
        [i, s] = r.useState(!1);
    r.useEffect(() => {
        n &&
            a &&
            ((0, e4._)({
                location: "Account.useDeviceChangedTooltip (exposure tracking)",
                autoTrackExposure: !0,
            }),
            t &&
                (s(!0),
                l.current.start(tc, () => {
                    s(!1);
                })));
    }, [n, a, t]);
    let o = r.useCallback(() => {
        s(!1), l.current.stop();
    }, []);
    return (
        (0, j.zq)(() => {
            l.current.stop();
        }),
        {
            shouldShowTooltip: i,
            dismissTooltip: o,
        }
    );
}
function th() {
    var e;
    let t = (0, d.e7)([eF.default], () => eF.default.getCurrentUser()),
        n = (0, d.e7)([eI.default], () => eI.default.getId()),
        r = e0.K.useConfig({ location: "AccountConnected" }).transitionAccountPanel,
        {
            activities: l,
            streaming: i,
            status: s,
        } = (0, d.cj)([eM.Z], () => {
            let e = eM.Z.getActivities();
            return {
                activities: e,
                streaming:
                    null !=
                    e.find((e) => {
                        let { type: t } = e;
                        return t === e6.IIU.STREAMING;
                    }),
                status: eM.Z.getStatus(),
            };
        }),
        c = (0, d.e7)([eP.Z], () => eP.Z.getAnyStreamForUser(n)),
        m = (0, v.Z)({ userId: n }),
        p = (0, d.e7)([eU.Z], () => eU.Z.isCurrentUserPTTLatched()),
        h = (0, d.e7)([eU.Z], () => eU.Z.getVoiceVolume(n)),
        f = eJ.ZP.useUserTag(t, { decoration: "never" }),
        b = (0, d.e7)([eB.Z], () => eB.Z.hidePersonalInformation),
        g = (0, d.e7)([eD.Z, ek.Z], () => {
            let e = eD.Z.getChannelId();
            return null != e ? ek.Z.getChannel(e) : null;
        }),
        { mute: j, selfMute: y, suppress: _ } = (0, eb.Z)(g),
        { selfDeaf: S, deaf: E } = (0, ex.Z)(g),
        T = (0, d.e7)([k.C], () => {
            var e;
            return (0, R.fD)()
                ? null == (e = k.C.getCurrentBuildOverride().overrides)
                    ? void 0
                    : e.discord_web
                : null;
        }),
        I = (0, d.e7)([eG.Z], () => eG.Z.getPremiumTypeSubscription()),
        Z = (0, d.e7)([eZ.Z], () => eZ.Z.getSpeakingWhileMuted()),
        D = (0, d.e7)([A.Z], () => A.Z.isFullscreenInContext()),
        L = (0, d.e7)([eA.Z], () => eA.Z.hasLayers()),
        M = (0, x.s9z)(x.JQI) || L || eX.s.isDisallowPopupsSet() || D,
        U = (0, ea.b)(),
        B = (0, d.e7)([Y.default], () => null != Y.default.getAwaitingRemoteSessionInfo()),
        F = (0, d.e7)([eL.Z], () => eL.Z.getGuildId()),
        G = null == t ? void 0 : t.avatarDecoration,
        V = (0, w.R)(t, null != F ? F : void 0),
        H = (0, P.Z)(r ? V : G),
        W = eQ.ZP.useName(null != F ? F : void 0, null, t),
        K = null != (e = eJ.ZP.useName(t)) ? e : "",
        { voiceActivityStatusEnabled: q } = (0, C.U)({ location: "Account" }),
        Q = z.JH.useExperiment({ location: "Account" }).enabled,
        X = (0, el.c)(t, "Account"),
        J = ei.H.useConfig({ location: "Account" }).enabled,
        { analyticsLocations: ee } = (0, N.ZP)(O.Z.ACCOUNT),
        et = (0, $.K)({
            user: t,
            guildId: r && null != F ? F : void 0,
        }),
        { isQuestBarEmpty: en, hasLoadedQuestBar: er } = (0, eo.Ws)({ location: e9.dr.CONFLICT_CHECKS }),
        es = (0, d.e7)([ec.Z, eF.default, eR.Z], () => {
            let e,
                t = ec.Z.getSyncingWith(),
                n = ec.Z.getActivity(),
                a = [];
            if (
                (null != t ? (e = t.partyId) : null != n && null != n.party && null != n.party.id && (e = n.party.id),
                null != e)
            ) {
                var r;
                a = o()(Array.from(null != (r = eR.Z.getParty(e)) ? r : []))
                    .map((e) => eF.default.getUser(e))
                    .filter(eY.lm)
                    .value();
            }
            return a.length > 1;
        }),
        eu = (0, ed.Un)({ location: "AccountConnected" }),
        em = {
            avatar: [],
            settings: [],
        };
    !M &&
        (Q && em.avatar.push(u.z.DISPLAY_NAME_STYLES_COACHMARK),
        X && em.avatar.push(u.z.TENURE_BADGE_CHURN_REMINDER),
        eu && em.avatar.push(u.z.WIDGETS_RTC_UPSELL_COACHMARK),
        J && em.settings.push(u.z.NITRO_PRIVACY_PERK_BETA_COACHMARK));
    let { shouldShowTooltip: ep, dismissTooltip: eh } = tp(te.h7.AUDIO_INPUT),
        { shouldShowTooltip: ef, dismissTooltip: eg } = tp(te.h7.AUDIO_OUTPUT);
    return (0, a.jsx)(N.Gt, {
        value: ee,
        children: (0, a.jsx)(tu, {
            currentUser: t,
            username: r ? W : K,
            transitionAccountPanel: r,
            activities: l,
            applicationStream: c,
            voiceChannel: g,
            dismissibleContents: em,
            userTag: f,
            hidePrivateData: b,
            occluded: M,
            premiumSubscription: I,
            selfDeaf: S,
            selfMute: y,
            serverDeaf: E,
            serverMute: j,
            speaking: m,
            voiceDb: h,
            speakingWhileMuted: Z,
            latched: p && null != g,
            status: s,
            streaming: i,
            suppress: _,
            webBuildOverride: T,
            awaitingRemote: B,
            isEligibleForPomelo: U,
            voiceActivityStatusEnabled: q,
            nameplate: et,
            selectedGuildId: F,
            avatarDecoration: H,
            isQuestBarEmpty: en,
            hasLoadedQuestBar: er,
            isListenAlongVisible: es,
            shouldShowInputDeviceChangedTooltip: ep,
            shouldShowOutputDeviceChangedTooltip: ef,
            dismissInputDeviceChangedTooltip: eh,
            dismissOutputDeviceChangedTooltip: eg,
        }),
    });
}
function tf(e) {
    let t,
        n,
        l,
        {
            webBuildOverride: i,
            isEligibleForPomelo: s,
            onClick: o,
            onContextMenu: c,
            dismissibleContents: d,
            iconForeground: m,
            nameplate: p,
            shouldShowInputDeviceChangedTooltip: f,
            shouldShowOutputDeviceChangedTooltip: b,
        } = e,
        g = r.useRef(null),
        { showRefreshedAudioContextMenu: v } = (0, e1.e)({ location: "SettingsCogButton" }),
        j = !v && (f || b),
        { name: y } = (0, X.p6)(te.h7.AUDIO_INPUT),
        { name: C } = (0, X.p6)(te.h7.AUDIO_OUTPUT);
    !v && f
        ? ((t = tt.intl.format(tt.t["18wnuD"], { inputDeviceName: y })),
          (n = tt.intl.formatToPlainString(tt.t["18wnuD"], { inputDeviceName: y })),
          (l = tt.intl.formatToPlainString(tt.t["18wnuD"], { inputDeviceName: y })))
        : !v && b
          ? ((t = tt.intl.format(tt.t["f+DDY/"], { outputDeviceName: C })),
            (n = tt.intl.formatToPlainString(tt.t["f+DDY/"], { outputDeviceName: C })),
            (l = tt.intl.formatToPlainString(tt.t["f+DDY/"], { outputDeviceName: C })))
          : (t =
                null != i
                    ? tt.intl.formatToPlainString(tt.t.Gzh6ZP, { webBuildOverride: i.id })
                    : tt.intl.string(tt.t.cduTBL));
    let _ = x.ewm,
        S = (0, h.i)();
    return (
        (_ = null != i ? x.bgT : s ? x.Ncx : S.Component),
        (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(
                    e3.Z,
                    tl(
                        tr(
                            {
                                ref: g,
                                tooltipText: t,
                                tooltipColor: j ? x.r6K.GREEN : void 0,
                                tooltipForceOpen: j,
                                tooltipClassName: tn.accountButtonsTooltip,
                                tooltipContentClassName: tn.accountButtonsTooltipContent,
                                tooltipPositionKeyStemOverride: n,
                                "aria-label": j ? l : void 0,
                                onClick: o,
                                onContextMenu: c,
                                icon: (0, a.jsx)(_, {
                                    size: "refresh_sm",
                                    color: "currentColor",
                                    className: m,
                                }),
                            },
                            S.events,
                        ),
                        { plated: null != p },
                    ),
                ),
                (0, a.jsx)(H.ZP, {
                    contentTypes: d,
                    groupName: e2.R.ACCOUNT_NAME_ZONE,
                    children: (e) => {
                        let { visibleContent: t, markAsDismissed: n } = e;
                        if (t === u.z.NITRO_PRIVACY_PERK_BETA_COACHMARK)
                            return (0, a.jsx)(es.a, {
                                targetElementRef: g,
                                markAsDismissed: n,
                            });
                    },
                }),
            ],
        })
    );
}
function tx(e) {
    let t,
        {
            selfMute: n,
            serverMute: l,
            suppress: s,
            awaitingRemote: o,
            iconForeground: m,
            onMouseEnter: p,
            onMouseLeave: h,
            onClick: b,
            onContextMenu: g,
            nameplate: v,
            accountContainerRef: j,
            shouldShowSpeakingWhileMutedTooltip: y,
            shouldShowInputDeviceChangedTooltip: C,
            dismissTooltips: _,
        } = e,
        S = n || s || l,
        E = r.useRef(null),
        T = r.useRef(null),
        w = (0, ew.b)(S),
        { activeVoice: P, mostRecentlyRequestedVoiceId: I, lastInitAttemptMayHaveCrashed: k } = (0, eC.o)(),
        { showSilentLagWarning: R } = (0, ey.Y)(),
        A = null != P,
        Z = (0, ej.z)(P),
        U = (0, d.e7)([eD.Z], () => eD.Z.isConnected()),
        { Component: B, events: F, play: V } = w,
        z = l || s ? x.v0G : B,
        W = (0, D.Z)(n, l, s, o),
        K = R ? tt.intl.string(tt.t.ARRV6m) : null;
    t = y
        ? tt.intl.string(tt.t["29gnR4"])
        : null != K
          ? (0, a.jsxs)("div", {
                className: tn.tooltipWithSubtext,
                children: [
                    (0, a.jsx)(x.Text, {
                        variant: "text-sm/medium",
                        color: "currentColor",
                        children: W,
                    }),
                    (0, a.jsx)(x.Text, {
                        variant: "text-xs/medium",
                        color: "text-feedback-warning",
                        children: K,
                    }),
                ],
            })
          : W;
    let { analyticsLocations: q } = (0, N.ZP)(O.Z.AUDIO_INPUT_BUTTON),
        Y = (0, eg.Hu)({
            location: O.Z.AUDIO_INPUT_BUTTON,
            autoTrackExposure: !0,
        }),
        Q = (0, ev.av)({
            location: O.Z.AUDIO_INPUT_BUTTON,
            autoTrackExposure: !0,
        });
    r.useEffect(() => () => V(), [S, V]);
    let J = r.useCallback(
            (e) => {
                g(e, q);
            },
            [g, q],
        ),
        [$, ee] = r.useState(!1),
        et = r.useCallback((e) => {
            var t;
            if (
                (0, c.kK)(null == e ? void 0 : e.target, Node) &&
                (null == (t = E.current) ? void 0 : t.contains(e.target))
            )
                return f.F;
            ee(!1);
        }, []);
    (0, eW.yp)({
        event: e6.CkL.OPEN_VOICE_FILTER_POPOUT,
        handler: () => {
            ee(!0);
        },
    });
    let [en, ea] = r.useState(!1);
    r.useEffect(() => {
        let e;
        return (
            U &&
                A &&
                (e = setTimeout(() => {
                    ea(!0), (e = setTimeout(() => ea(!1), to));
                }, 300)),
            () => {
                ea(!1), clearTimeout(e);
            }
        );
    }, [U]);
    let el = r.useCallback(() => {
            k || (0, e_.r5)();
        }, [k]),
        ei = S ? x.TVs.colors.STATUS_DANGER : R ? x.TVs.colors.STATUS_WARNING : "currentColor",
        es = S || R,
        eo = (0, er.Z)({ location: "Account" }),
        { name: ec } = (0, X.p6)(te.h7.AUDIO_INPUT),
        { showRefreshedAudioContextMenu: ed } = (0, e1.e)({ location: "MicrophoneButton" }),
        { enabledInputProfiles: eu } = (0, eh.G)({ location: "MicrophoneButton" });
    return ed
        ? (0, a.jsx)(N.Gt, {
              value: q,
              children: (0, a.jsx)(x.yRy, {
                  targetElementRef: E,
                  renderPopout: (e) => {
                      let { closePopout: t } = e;
                      return (
                          _(),
                          (0, a.jsx)(N.Gt, {
                              value: q,
                              children: ed
                                  ? (0, a.jsx)(M.Z, {
                                        onInteraction: (0, G.u)("AudioDeviceMenu", O.Z.ACCOUNT),
                                        onClose: t,
                                        maybeRenderPTTCheckbox: !0,
                                        renderInputProfiles: eu.length > 0,
                                        renderInputDevices: !0,
                                        maybeRenderInputMeter: !0,
                                        renderInputVolume: !0,
                                        renderSettingsButton: !0,
                                    })
                                  : (0, a.jsx)(L.default, {
                                        onInteraction: (0, G.u)("AudioDeviceMenu", O.Z.ACCOUNT),
                                        onClose: t,
                                        renderInputDevices: !0,
                                        renderInputProfiles: eu.length > 0,
                                        renderInputVolume: !0,
                                        minimal: !0,
                                    }),
                          })
                      );
                  },
                  position: "top",
                  align: "left",
                  animation: x.yRy.Animation.FADE,
                  spacing: 4,
                  children: (e, n) => {
                      let { onClick: r } = e,
                          { isShown: l } = n,
                          s = l ? x.u04 : x.CJ0;
                      return (0, a.jsxs)("div", {
                          ref: E,
                          className: i()(tn.micButtonParent, {
                              [tn.hasColorGlow]: es,
                              [tn.popoutOpen]: l,
                          }),
                          children: [
                              (0, a.jsx)(e3.Z, {
                                  "aria-checked": S,
                                  "aria-label": tt.intl.string(tt.t.w4m945),
                                  className: i()({ [tn.micButtonWithMenu]: !0 }),
                                  disabled: o,
                                  icon: (0, a.jsx)(z, {
                                      size: "custom",
                                      width: 20,
                                      height: 20,
                                      color: ei,
                                      className: m,
                                  }),
                                  onClick: b,
                                  onContextMenu: r,
                                  onMouseEnter: () => {
                                      p(), F.onMouseEnter();
                                  },
                                  onMouseLeave: () => {
                                      h(), F.onMouseLeave();
                                  },
                                  orangeGlow: R,
                                  plated: null != v,
                                  redGlow: S,
                                  role: "switch",
                                  tooltipColor: y ? x.r6K.GREEN : void 0,
                                  tooltipForceOpen: y,
                                  tooltipText: t,
                              }),
                              (0, a.jsx)(e3.Z, {
                                  "aria-label": C
                                      ? tt.intl.formatToPlainString(tt.t["18wnuD"], { inputDeviceName: ec })
                                      : tt.intl.string(tt.t.fRzCbB),
                                  className: i()(tn.buttonChevron, { [tn.popoutOpen]: l }),
                                  disabled: o,
                                  icon: (0, a.jsx)(s, {
                                      className: tn.buttonChevronIcon,
                                      size: "custom",
                                      width: 12,
                                      height: 12,
                                      color: ei,
                                  }),
                                  onClick: r,
                                  onContextMenu: r,
                                  onMouseEnter: p,
                                  onMouseLeave: h,
                                  orangeGlow: R,
                                  plated: null != v,
                                  redGlow: S,
                                  tooltipClassName: tn.accountButtonsTooltip,
                                  tooltipColor: C ? x.r6K.GREEN : void 0,
                                  tooltipContentClassName: tn.accountButtonsTooltipContent,
                                  tooltipForceOpen: C,
                                  tooltipPositionKeyStemOverride: C
                                      ? tt.intl.formatToPlainString(tt.t["18wnuD"], { inputDeviceName: ec })
                                      : void 0,
                                  tooltipShouldShow: !l,
                                  tooltipText: C
                                      ? tt.intl.format(tt.t["18wnuD"], { inputDeviceName: ec })
                                      : tt.intl.string(tt.t.fRzCbB),
                              }),
                          ],
                      });
                  },
              }),
          })
        : (0, a.jsx)(N.Gt, {
              value: q,
              children: (0, a.jsxs)("div", {
                  ref: E,
                  className: i()(tn.micButtonParent, { [tn.hasColorGlow]: es }),
                  children: [
                      (0, a.jsx)(e3.Z, {
                          tooltipText: t,
                          tooltipColor: y ? x.r6K.GREEN : void 0,
                          tooltipForceOpen: y,
                          plated: null != v,
                          onMouseEnter: () => {
                              p(), F.onMouseEnter();
                          },
                          onMouseLeave: () => {
                              h(), F.onMouseLeave();
                          },
                          icon: (0, a.jsx)(z, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: ei,
                              className: m,
                          }),
                          onClick: b,
                          onContextMenu: J,
                          role: "switch",
                          className: i()({ [tn.micButtonWithMenu]: Y }),
                          orangeGlow: R,
                          redGlow: S,
                          "aria-label": tt.intl.string(tt.t.w4m945),
                          "aria-checked": S,
                          disabled: o,
                      }),
                      Y &&
                          (0, a.jsx)(x.yRy, {
                              targetElementRef: j,
                              position: "top",
                              align: "left",
                              nudgeAlignIntoViewport: !1,
                              animation: x.yRy.Animation.FADE,
                              useMouseEnter: !0,
                              ignoreModalClicks: !0,
                              onRequestOpen: el,
                              onRequestClose: et,
                              shouldShow: $,
                              renderPopout: (e) => {
                                  let { closePopout: t } = e;
                                  return (0, a.jsx)(eO.l, { onSettingsButtonClick: t });
                              },
                              children: (e, t) => {
                                  var { onClick: n } = e,
                                      r = (function (e, t) {
                                          if (null == e) return {};
                                          var n,
                                              a,
                                              r = (function (e, t) {
                                                  if (null == e) return {};
                                                  var n,
                                                      a,
                                                      r = {},
                                                      l = Object.keys(e);
                                                  for (a = 0; a < l.length; a++)
                                                      (n = l[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                                  return r;
                                              })(e, t);
                                          if (Object.getOwnPropertySymbols) {
                                              var l = Object.getOwnPropertySymbols(e);
                                              for (a = 0; a < l.length; a++)
                                                  (n = l[a]),
                                                      !(t.indexOf(n) >= 0) &&
                                                          Object.prototype.propertyIsEnumerable.call(e, n) &&
                                                          (r[n] = e[n]);
                                          }
                                          return r;
                                      })(e, ["onClick"]),
                                      { isShown: l } = t;
                                  let i = l ? x.u04 : x.CJ0,
                                      s = [];
                                  return (
                                      !l &&
                                          (eo && s.push(u.z.VOICE_FILTER_EARLY_ACCESS_COACHMARK),
                                          s.push(u.z.VOICE_FILTER_LAUNCH_COACHMARK),
                                          Q && U && !A && s.push(u.z.VOICE_FILTER_FIRST_USE_COACHMARK)),
                                      (0, a.jsx)("div", {
                                          children: (0, a.jsx)(H.ZP, {
                                              bypassAutoDismiss: !0,
                                              contentTypes: s,
                                              children: (e) => {
                                                  let { visibleContent: t, markAsDismissed: l } = e,
                                                      s = null;
                                                  t === u.z.VOICE_FILTER_EARLY_ACCESS_COACHMARK
                                                      ? (s = (0, a.jsx)(eT.U, {
                                                            markAsDismissed: l,
                                                            onCTA: () => ee(!0),
                                                        }))
                                                      : t === u.z.VOICE_FILTER_LAUNCH_COACHMARK
                                                        ? (s = (0, a.jsx)(eE.n, {
                                                              markAsDismissed: l,
                                                              onCTA: () => ee(!0),
                                                          }))
                                                        : t === u.z.VOICE_FILTER_FIRST_USE_COACHMARK &&
                                                          (s = (0, a.jsx)(eS.v, {
                                                              markAsDismissed: l,
                                                              onCTA: () => ee(!0),
                                                          }));
                                                  let c = () =>
                                                      (0, a.jsx)(
                                                          e3.Z,
                                                          tr(
                                                              {
                                                                  ref: T,
                                                                  plated: null != v,
                                                                  tooltipForceOpen: en,
                                                                  tooltipColor: en ? x.r6K.GREEN : void 0,
                                                                  tooltipContentClassName: en
                                                                      ? tn.voiceFilterWarning
                                                                      : void 0,
                                                                  tooltipText: en
                                                                      ? (0, a.jsxs)(a.Fragment, {
                                                                            children: [
                                                                                (0, a.jsx)("img", {
                                                                                    alt:
                                                                                        null != Z
                                                                                            ? tt.intl.string(Z.name)
                                                                                            : "",
                                                                                    src: null == Z ? void 0 : Z.iconURL,
                                                                                    draggable: !1,
                                                                                }),
                                                                                (0, a.jsx)(x.Text, {
                                                                                    variant: "text-sm/medium",
                                                                                    color: "always-white",
                                                                                    children: tt.intl.string(
                                                                                        tt.t.VlC1de,
                                                                                    ),
                                                                                }),
                                                                            ],
                                                                        })
                                                                      : tt.intl.string(tt.t.Hapb4J),
                                                                  icon: (0, a.jsx)(i, {
                                                                      className: tn.buttonChevronIcon,
                                                                      size: "custom",
                                                                      width: 12,
                                                                      height: 12,
                                                                      color: ei,
                                                                  }),
                                                                  role: "button",
                                                                  className: tn.buttonChevron,
                                                                  orangeGlow: R,
                                                                  redGlow: S,
                                                                  "aria-label": tt.intl.string(tt.t.Hapb4J),
                                                                  disabled: o,
                                                                  onClick: (e) => {
                                                                      l(e2.L.INDIRECT_ACTION),
                                                                          n(e),
                                                                          null != I && !$ && k
                                                                              ? (0, eN.$)(() => ee(!0))
                                                                              : ee(!$);
                                                                  },
                                                              },
                                                              r,
                                                          ),
                                                      );
                                                  return null != s
                                                      ? (0, a.jsx)(x.yRy, {
                                                            targetElementRef: T,
                                                            renderPopout: () => s,
                                                            animation: x.yRy.Animation.TRANSLATE,
                                                            animationPosition: "bottom",
                                                            position: "top",
                                                            align: "center",
                                                            shouldShow: !0,
                                                            children: c,
                                                        })
                                                      : c();
                                              },
                                          }),
                                      })
                                  );
                              },
                          }),
                  ],
              }),
          });
}
function tb(e) {
    let {
            selfDeaf: t,
            serverDeaf: n,
            awaitingRemote: l,
            onClick: s,
            onContextMenu: o,
            iconForeground: c,
            nameplate: d,
            shouldShowOutputDeviceChangedTooltip: u,
            dismissTooltips: m,
        } = e,
        h = t || n,
        {
            Component: f,
            play: b,
            events: { onMouseEnter: g, onMouseLeave: v },
        } = (0, p.l)(h ? "undeafen" : "deafen"),
        j = n ? x.Vm4 : f,
        { name: y } = (0, X.p6)(te.h7.AUDIO_OUTPUT),
        { showRefreshedAudioContextMenu: C } = (0, e1.e)({ location: "HeadphonesButton" }),
        _ = (0, Z.Z)(t, n, l),
        { analyticsLocations: S } = (0, N.ZP)(O.Z.AUDIO_OUTPUT_BUTTON),
        E = r.useRef(null);
    r.useEffect(() => () => b(), [h, b]);
    let T = r.useCallback(
        (e) => {
            o(e, S);
        },
        [o, S],
    );
    return C
        ? (0, a.jsx)(N.Gt, {
              value: S,
              children: (0, a.jsx)(x.yRy, {
                  targetElementRef: E,
                  renderPopout: (e) => {
                      let { closePopout: t } = e;
                      return (
                          m(),
                          (0, a.jsx)(N.Gt, {
                              value: S,
                              children: (0, a.jsx)(M.Z, {
                                  onInteraction: (0, G.u)("AudioDeviceMenu", O.Z.ACCOUNT),
                                  onClose: t,
                                  renderOutputDevices: !0,
                                  renderOutputVolume: !0,
                                  renderSettingsButton: !0,
                              }),
                          })
                      );
                  },
                  position: "top",
                  align: "left",
                  animation: x.yRy.Animation.FADE,
                  spacing: 4,
                  children: (e, t) => {
                      let { onClick: r } = e,
                          { isShown: o } = t,
                          m = o ? x.u04 : x.CJ0;
                      return (0, a.jsxs)("div", {
                          ref: E,
                          className: i()(tn.micButtonParent, {
                              [tn.hasColorGlow]: h,
                              [tn.popoutOpen]: o,
                          }),
                          children: [
                              (0, a.jsx)(e3.Z, {
                                  "aria-checked": h,
                                  "aria-label": tt.intl.string(tt.t.wjcRFX),
                                  className: tn.micButtonWithMenu,
                                  disabled: l,
                                  icon: (0, a.jsx)(j, {
                                      size: "custom",
                                      width: 20,
                                      height: 20,
                                      color: h ? x.TVs.colors.STATUS_DANGER : "currentColor",
                                      className: c,
                                  }),
                                  iconForeground: h ? tn.strikethrough : void 0,
                                  innerClassName: i()({ [tn.redIcon]: n }),
                                  onClick: s,
                                  onContextMenu: r,
                                  onMouseEnter: g,
                                  onMouseLeave: v,
                                  plated: null != d,
                                  redGlow: h,
                                  role: "switch",
                                  tooltipText: _,
                              }),
                              (0, a.jsx)(e3.Z, {
                                  "aria-label": u
                                      ? tt.intl.formatToPlainString(tt.t["f+DDY/"], { outputDeviceName: y })
                                      : tt.intl.string(tt.t.aA4Vce),
                                  className: i()(tn.buttonChevron, { [tn.popoutOpen]: o }),
                                  disabled: l,
                                  icon: (0, a.jsx)(m, {
                                      className: tn.buttonChevronIcon,
                                      size: "custom",
                                      width: 12,
                                      height: 12,
                                      color: h ? x.TVs.colors.STATUS_DANGER : "currentColor",
                                  }),
                                  onClick: r,
                                  onContextMenu: r,
                                  plated: null != d,
                                  redGlow: h,
                                  tooltipClassName: tn.accountButtonsTooltip,
                                  tooltipColor: u ? x.r6K.GREEN : void 0,
                                  tooltipContentClassName: tn.accountButtonsTooltipContent,
                                  tooltipForceOpen: u,
                                  tooltipPositionKeyStemOverride: u
                                      ? tt.intl.formatToPlainString(tt.t["f+DDY/"], { outputDeviceName: y })
                                      : void 0,
                                  tooltipShouldShow: !o,
                                  tooltipText: u
                                      ? tt.intl.format(tt.t["f+DDY/"], { outputDeviceName: y })
                                      : tt.intl.string(tt.t.aA4Vce),
                              }),
                          ],
                      });
                  },
              }),
          })
        : (0, a.jsx)(N.Gt, {
              value: S,
              children: (0, a.jsx)(e3.Z, {
                  plated: null != d,
                  tooltipText: _,
                  onMouseEnter: g,
                  onMouseLeave: v,
                  icon: (0, a.jsx)(j, {
                      size: "custom",
                      width: 20,
                      height: 20,
                      color: h ? x.TVs.colors.STATUS_DANGER : "currentColor",
                      className: c,
                  }),
                  onClick: s,
                  onContextMenu: T,
                  innerClassName: i()({ [tn.redIcon]: n }),
                  iconForeground: h ? tn.strikethrough : void 0,
                  role: "switch",
                  redGlow: h,
                  "aria-label": tt.intl.string(tt.t.wjcRFX),
                  "aria-checked": h,
                  disabled: l,
              }),
          });
}
