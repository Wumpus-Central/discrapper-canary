n.d(t, {
    Z: () => tu,
    m: () => to,
}),
    n(388685),
    n(539854);
var a = n(54381),
    r = n(473749),
    i = n(120356),
    l = n.n(i),
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
    S = n(747017),
    E = n(963056),
    T = n(570928),
    O = n(100527),
    N = n(906732),
    P = n(541638),
    w = n(676742),
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
    z = n(243778),
    H = n(386725),
    W = n(821795),
    K = n(892567),
    q = n(258609),
    Y = n(427347),
    Q = n(72897),
    X = n(78933),
    J = n(850020),
    $ = n(379839),
    ee = n(359135),
    et = n(516817),
    en = n(332473),
    ea = n(963590),
    er = n(494424),
    ei = n(299886),
    el = n(375720),
    es = n(659302),
    eo = n(768419),
    ec = n(172416),
    ed = n(184301),
    eu = n(670188),
    em = n(313789),
    ep = n(846071),
    eh = n(518596),
    ef = n(879815),
    ex = n(294629),
    eb = n(875527),
    eg = n(702977),
    ev = n(378441),
    ej = n(358820),
    ey = n(723547),
    eC = n(361045),
    e_ = n(74650),
    eS = n(306609),
    eE = n(170293),
    eT = n(8404),
    eO = n(199902),
    eN = n(314897),
    eP = n(592125),
    ew = n(831506),
    eI = n(819640),
    ek = n(131951),
    eR = n(19780),
    eA = n(914010),
    eZ = n(885110),
    eD = n(606304),
    eL = n(246946),
    eM = n(594174),
    eU = n(78839),
    eB = n(626135),
    eF = n(768581),
    eG = n(572004),
    eV = n(459273),
    ez = n(585483),
    eH = n(70956),
    eW = n(823379),
    eK = n(5192),
    eq = n(374023),
    eY = n(51144),
    eQ = n(998502),
    eX = n(660230),
    eJ = n(853170),
    e$ = n(422202),
    e0 = n(870569),
    e1 = n(345243),
    e4 = n(115530),
    e3 = n(541769),
    e8 = n(981631),
    e7 = n(921944),
    e5 = n(324805),
    e6 = n(65154),
    e2 = n(388032),
    e9 = n(484036);
function te(e, t, n) {
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
function tt(e) {
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
                te(e, t, n[t]);
            });
    }
    return e;
}
function tn(e, t) {
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
let ta = eQ.ZP.getEnableHardwareAcceleration() ? x.Xo$ : x.qEK,
    tr = 2 * eH.Z.Millis.MINUTE,
    ti = 3 * eH.Z.Millis.SECOND,
    tl = 5 * eH.Z.Millis.SECOND;
function ts(e) {
    let {
            ref: t,
            speaking: n,
            latched: i,
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
        S = (0, eF.NZ)({
            avatarDecoration: v,
            size: (0, I.y9)(x.EFr.SIZE_32),
        }),
        E = (0, H.Z)(),
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
                [i, l] = r.useState(!1);
            return (
                (0, y.Z)(() => l(!0), 750),
                r.useEffect(() => {
                    let t = (t) => {
                        var n;
                        let { highlightBadge: r } = t;
                        null != r && a(r), null == (n = e.current) || n.call(e);
                    };
                    return (
                        ez.S.subscribe(e8.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, t),
                        () => {
                            ez.S.unsubscribe(e8.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, t);
                        }
                    );
                }),
                {
                    updateOpenPopoutRef: t,
                    highlightBadge: i ? n : void 0,
                    setHighlightBadge: a,
                }
            );
        })(),
        P = (0, $.A)(h);
    if (null == c) return null;
    let w = b && f !== e8.I_8 && f !== e8.ME && null != f ? f : void 0;
    return (0, a.jsx)(g.Z, {
        object: e8.qAy.AVATAR,
        children: (0, a.jsx)(eu.Z, {
            user: c,
            targetElementRef: _,
            clickTrap: !0,
            preload: () =>
                (0, ed.Z)(c.id, c.getAvatarURL(w, eu.I), {
                    type: "account_popout",
                    withMutualGuilds: !1,
                    withMutualFriends: !1,
                    guildId: w,
                }),
            renderPopout: (e, t) => {
                let { closePopout: n, setPopoutRef: r } = e;
                return (0, a.jsx)(X.Z, {
                    currentUser: c,
                    highlightBadge: O,
                    openedAt: t,
                    onClose: () => {
                        null == n || n();
                    },
                    setPopoutRef: r,
                    guildId: w,
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
                    tn(
                        tt(
                            {
                                innerRef: _,
                                style: P,
                            },
                            e,
                        ),
                        {
                            onClick: (t) => {
                                var n;
                                null == (n = e.onClick) || n.call(e, t), null == u || u(t);
                            },
                            "aria-label": e2.intl.string(e2.t["3Uj+2p"]),
                            "data-jump-section": j,
                            className: l()(e9.avatarWrapper, { [e9.plated]: null != h }),
                            children: [
                                (0, a.jsx)(ta, {
                                    size: x.EFr["SIZE_".concat(32)],
                                    src: c.getAvatarURL(b ? f : void 0, 28, !1),
                                    avatarDecoration: S,
                                    "aria-label": c.username,
                                    status: o ? e8.Skl.STREAMING : d,
                                    isSpeaking: n,
                                    isLatched: i,
                                    voiceDb: s,
                                    className: e9.avatar,
                                }),
                                (0, a.jsx)("div", {
                                    className: l()(e9.nameTag, { [e9.canCopy]: eG.wS }),
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
class to extends r.PureComponent {
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
                e2.intl.string(e2.t.MSaeTe),
                e2.intl.string(e2.t.UmrCw7),
                e2.intl.string(e2.t.gKE0Jq),
                e2.intl.string(e2.t["4DSKbi"]),
                e2.intl.string(e2.t["+8ENdT"]),
                e2.intl.string(e2.t.GlWHv8),
                e2.intl.string(e2.t.hIzxU9),
                e2.intl.string(e2.t["26uMPL"]),
                e2.intl.string(e2.t.uFs7R2),
                e2.intl.string(e2.t.bLXdcY),
                e2.intl.string(e2.t.gPg9fS),
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
                status: i,
                userTag: l,
                voiceActivityStatusEnabled: s,
                voiceChannel: o,
            } = this.props;
        if (null == r) return null;
        if (
            (0, _.Z)({
                activities: t,
                status: i,
                applicationStream: n,
                voiceChannel: s ? o : void 0,
            })
        )
            return (0, a.jsx)(T.Z, {
                hoverText: l,
                forceHover: e,
                children: (0, a.jsx)(S.Z, {
                    user: r,
                    activities: t,
                    applicationStream: n,
                    voiceChannel: s ? o : void 0,
                    textClassName: e9.activityStatusText,
                    hideTooltip: !0,
                }),
            });
        let c =
            null == t
                ? void 0
                : t.find((e) => {
                      let { type: t } = e;
                      return t === e8.IIU.CUSTOM_STATUS;
                  });
        return null != c
            ? (0, a.jsx)(T.Z, {
                  hoverText: l,
                  forceHover: e,
                  children: (0, a.jsx)(V.Z, {
                      activity: c,
                      emojiClassName: e9.emoji,
                      className: e9.customStatus,
                  }),
              })
            : null != i && i !== e8.Skl.UNKNOWN && r.hasUniqueUsername()
              ? (0, a.jsx)(T.Z, {
                    hoverText: l,
                    forceHover: e,
                    children: (0, a.jsx)(E.Z, { text: eY.ZP.humanizeStatus(i) }),
                })
              : l;
    }
    renderAvatarWithPopout(e) {
        let {
            focusSectionProps: { "data-jump-section": t },
            onClick: n,
        } = e;
        return (0, a.jsx)(
            ts,
            tn(tt({}, this.props), {
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
            : (0, a.jsx)(e3.Z, {
                  guildId: null != (t = this.props.selectedGuildId) ? t : null,
                  currentUser: n,
                  targetElementRef: this.avatarWithPopoutRef,
                  additionalDCs: r.avatar,
                  children: this.renderAvatarWithPopout({ focusSectionProps: e }),
              });
    }
    render() {
        let { currentUser: e, nameplate: t, voiceChannel: n, isQuestBarEmpty: r, isListenAlongVisible: i } = this.props,
            s = this.state.hovered;
        return null == e
            ? null
            : (0, a.jsxs)(a.Fragment, {
                  children: [
                      (0, a.jsx)(x.Wdt, {
                          children: (e) =>
                              (0, a.jsxs)("div", {
                                  ref: this.containerRef,
                                  className: l()(e9.container, {
                                      [e9.containerRtcOpened]: null != n,
                                      [e9.containerQuestBarVisible]: !r,
                                      [e9.containerListenAlongVisible]: i,
                                  }),
                                  onMouseEnter: this.handleMouseEnter,
                                  onMouseLeave: this.handleMouseLeave,
                                  children: [
                                      (0, a.jsx)(et.Z, {
                                          nameplate: t,
                                          hovered: s,
                                          placement: ee.i.ACCOUNT,
                                      }),
                                      this.renderNameZone(e),
                                      (0, a.jsx)(
                                          tc,
                                          tn(tt({}, this.props, this.state), {
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
                      (0, a.jsx)(Y.Z, {}),
                  ],
              });
    }
    constructor(...e) {
        super(...e),
            te(this, "copiedTimeout", new m.V7()),
            te(this, "copiedDecayTimeout", new m.V7()),
            te(this, "speakingWhileMutedTooltipTimeout", new m.V7()),
            te(this, "lastSpeakingWhileMutedNotificationTime", void 0),
            te(this, "state", {
                hovered: !1,
                copiedStreak: 0,
                shouldShowNametagTooltip: !1,
                shouldShowCopiedFeedback: !1,
                shouldShowSpeakingWhileMutedTooltip: !1,
                hoveringOnMute: !1,
            }),
            te(this, "containerRef", r.createRef()),
            te(this, "avatarWithPopoutRef", r.createRef()),
            te(this, "handleToggleSelfMute", () => {
                let { serverMute: e, suppress: t, selfMute: n } = this.props;
                (0, B.Z)(e, t, e8.jXE.ACCOUNT_PANEL), (0, F.v)(O.Z.ACCOUNT, F.d.MIC, n);
            }),
            te(this, "handleToggleSelfDeaf", () => {
                let { serverDeaf: e, selfDeaf: t } = this.props;
                (0, U.Z)(e, e8.jXE.ACCOUNT_PANEL), (0, F.v)(O.Z.ACCOUNT, F.d.DEAFEN, !t);
            }),
            te(this, "handleOpenAccountSettings", () => {
                this.dismissTooltips(),
                    eR.Z.isConnected()
                        ? (0, eh.openUserSettings)(em.n.VOICE_AND_VIDEO_PANEL, { section: e8.oAB.VOICE })
                        : (0, eh.openUserSettings)();
            }),
            te(this, "handleOpenSettingsContextMenu", (e) => {
                let { currentUser: t } = this.props;
                null != t &&
                    (0, b.jW)(e, async () => {
                        let { default: e } = await n.e("2535").then(n.bind(n, 923422));
                        return (n) =>
                            (0, a.jsx)(
                                e,
                                tn(tt({}, n), {
                                    user: t,
                                    premiumSubscription: this.props.premiumSubscription,
                                    webBuildOverride: this.props.webBuildOverride,
                                    onInteraction: (0, G.u)("UserSettingsCogContextMenu", O.Z.ACCOUNT),
                                }),
                            );
                    });
            }),
            te(this, "audioOnInteractionHandler", (0, G.u)("AudioDeviceMenu", O.Z.ACCOUNT)),
            te(this, "handleInputAudioContextMenu", (e, t) => {
                this.dismissTooltips(),
                    (0, b.jW)(e, async () => {
                        let { default: e } = await Promise.resolve().then(n.bind(n, 659580));
                        return () => {
                            let { enabledInputProfiles: n } = (0, ep.G)({ location: "Account" });
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
            te(this, "handleOutputAudioContextMenu", (e, t) => {
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
            te(this, "handleMouseEnter", () => {
                this.setState({ hovered: !0 });
            }),
            te(this, "handleMouseLeave", () => {
                this.setState({ hovered: !1 });
            }),
            te(this, "handleMouseEnterMute", () => {
                this.setState({
                    hoveringOnMute: !0,
                    shouldShowSpeakingWhileMutedTooltip: !1,
                }),
                    this.speakingWhileMutedTooltipTimeout.stop();
            }),
            te(this, "handleMouseLeaveMute", () => {
                this.setState({ hoveringOnMute: !1 });
            }),
            te(this, "dismissSpeakingWhileMutedTooltip", () => {
                this.setState({ shouldShowSpeakingWhileMutedTooltip: !1 }),
                    this.speakingWhileMutedTooltipTimeout.stop();
            }),
            te(this, "dismissTooltips", () => {
                var e, t, n, a;
                null == (e = (t = this.props).dismissInputDeviceChangedTooltip) || e.call(t),
                    null == (n = (a = this.props).dismissOutputDeviceChangedTooltip) || n.call(a),
                    this.dismissSpeakingWhileMutedTooltip();
            }),
            te(this, "handleCopyTag", () => {
                let { currentUser: e } = this.props,
                    { shouldShowNametagTooltip: t, copiedStreak: n } = this.state;
                if (null == e) return;
                (0, eG.JG)(
                    eY.ZP.getUserTag(e, {
                        decoration: "never",
                        identifiable: "always",
                    }),
                ),
                    eB.default.track(e8.rMx.TEXT_COPIED, { type: "User Tag" });
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
            te(this, "handleOccludedChanged", () => {
                let { occluded: e } = this.props;
                e &&
                    this.setState({
                        shouldShowNametagTooltip: !1,
                        shouldShowSpeakingWhileMutedTooltip: !1,
                    });
            }),
            te(this, "handleSpeakingWhileMutedChanged", () => {
                let {
                        selfMute: e,
                        serverMute: t,
                        suppress: n,
                        speakingWhileMuted: a,
                        occluded: r,
                        shouldShowInputDeviceChangedTooltip: i,
                        shouldShowOutputDeviceChangedTooltip: l,
                    } = this.props,
                    { hoveringOnMute: s } = this.state,
                    o =
                        void 0 === this.lastSpeakingWhileMutedNotificationTime ||
                        Date.now() - this.lastSpeakingWhileMutedNotificationTime > tr;
                a
                    ? s ||
                      !e ||
                      t ||
                      n ||
                      r ||
                      !o ||
                      i ||
                      l ||
                      this.setState({ shouldShowSpeakingWhileMutedTooltip: !0 }, () => {
                          (this.lastSpeakingWhileMutedNotificationTime = Date.now()),
                              this.speakingWhileMutedTooltipTimeout.start(2000, () =>
                                  this.setState({ shouldShowSpeakingWhileMutedTooltip: !1 }),
                              );
                      })
                    : (this.setState({ shouldShowSpeakingWhileMutedTooltip: !1 }),
                      this.speakingWhileMutedTooltipTimeout.stop());
            }),
            te(this, "renderNameTag", (e) => {
                let { currentUser: t, username: n } = this.props;
                return null == t
                    ? null
                    : (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)("div", {
                                  className: e9.panelTitleContainer,
                                  children: (0, a.jsx)(e4.Z, {
                                      className: l()({ [e9.withDisplayNameStyles]: null != e }),
                                      children: (0, a.jsx)(K.Z, {
                                          userName: n,
                                          displayNameStyles: e,
                                          effectDisplayType: this.state.hovered ? W.F.ANIMATED : W.F.STATIC,
                                          loop: !0,
                                          inProfile: !0,
                                      }),
                                  }),
                              }),
                              (0, a.jsx)("div", {
                                  className: e9.panelSubtextContainer,
                                  children: (0, a.jsx)(e1.Z, { children: this.renderStatus() }),
                              }),
                          ],
                      });
            });
    }
}
function tc(e) {
    let {
            selfDeaf: t,
            selfMute: n,
            awaitingRemote: r,
            serverMute: i,
            serverDeaf: l,
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
        E = (0, $.A)(j);
    return (0, a.jsxs)("div", {
        className: e9.buttons,
        style: E,
        children: [
            (0, a.jsx)(tp, {
                accountContainerRef: y,
                selfMute: n,
                serverMute: i,
                suppress: s,
                awaitingRemote: r,
                onMouseEnter: u,
                onMouseLeave: m,
                onClick: h,
                onContextMenu: f,
                iconForeground: null != j ? e9.iconForeground : void 0,
                nameplate: j,
                shouldShowInputDeviceChangedTooltip: C,
                shouldShowSpeakingWhileMutedTooltip: o,
                dismissTooltips: S,
            }),
            (0, a.jsx)(th, {
                selfDeaf: t,
                serverDeaf: l,
                onClick: p,
                onContextMenu: x,
                awaitingRemote: r,
                iconForeground: null != j ? e9.iconForeground : void 0,
                nameplate: j,
                shouldShowOutputDeviceChangedTooltip: _,
                dismissTooltips: S,
            }),
            (0, a.jsx)(tm, {
                isEligibleForPomelo: c,
                webBuildOverride: d,
                onClick: b,
                onContextMenu: g,
                dismissibleContents: v.settings,
                iconForeground: null != j ? e9.iconForeground : void 0,
                nameplate: j,
                shouldShowInputDeviceChangedTooltip: C,
                shouldShowOutputDeviceChangedTooltip: _,
            }),
        ],
    });
}
function td(e) {
    let { shouldShowDeviceChangedNotifications: t } = (0, e$.P)({
            location: "Account.useDeviceChangedTooltip",
            autoTrackExposure: !1,
        }),
        n = (0, d.e7)([eR.Z], () => null != eR.Z.getChannelId()),
        a = (0, Q.Fh)(e),
        i = r.useRef(new m.V7()),
        [l, s] = r.useState(!1);
    r.useEffect(() => {
        n &&
            a &&
            ((0, e$._)({
                location: "Account.useDeviceChangedTooltip (exposure tracking)",
                autoTrackExposure: !0,
            }),
            t &&
                (s(!0),
                i.current.start(tl, () => {
                    s(!1);
                })));
    }, [n, a, t]);
    let o = r.useCallback(() => {
        s(!1), i.current.stop();
    }, []);
    return (
        (0, j.zq)(() => {
            i.current.stop();
        }),
        {
            shouldShowTooltip: l,
            dismissTooltip: o,
        }
    );
}
function tu() {
    var e;
    let t = (0, d.e7)([eM.default], () => eM.default.getCurrentUser()),
        n = (0, d.e7)([eN.default], () => eN.default.getId()),
        r = eX.K.useConfig({ location: "AccountConnected" }).transitionAccountPanel,
        {
            activities: i,
            streaming: l,
            status: s,
        } = (0, d.cj)([eZ.Z], () => {
            let e = eZ.Z.getActivities();
            return {
                activities: e,
                streaming:
                    null !=
                    e.find((e) => {
                        let { type: t } = e;
                        return t === e8.IIU.STREAMING;
                    }),
                status: eZ.Z.getStatus(),
            };
        }),
        c = (0, d.e7)([eO.Z], () => eO.Z.getAnyStreamForUser(n)),
        m = (0, v.Z)({ userId: n }),
        p = (0, d.e7)([eD.Z], () => eD.Z.isCurrentUserPTTLatched()),
        h = (0, d.e7)([eD.Z], () => eD.Z.getVoiceVolume(n)),
        f = eY.ZP.useUserTag(t, { decoration: "never" }),
        b = (0, d.e7)([eL.Z], () => eL.Z.hidePersonalInformation),
        g = (0, d.e7)([eR.Z, eP.Z], () => {
            let e = eR.Z.getChannelId();
            return null != e ? eP.Z.getChannel(e) : null;
        }),
        { mute: j, selfMute: y, suppress: _ } = (0, ex.Z)(g),
        { selfDeaf: S, deaf: E } = (0, ef.Z)(g),
        T = (0, d.e7)([k.C], () => {
            var e;
            return (0, R.fD)()
                ? null == (e = k.C.getCurrentBuildOverride().overrides)
                    ? void 0
                    : e.discord_web
                : null;
        }),
        I = (0, d.e7)([eU.Z], () => eU.Z.getPremiumTypeSubscription()),
        Z = (0, d.e7)([ek.Z], () => ek.Z.getSpeakingWhileMuted()),
        D = (0, d.e7)([A.Z], () => A.Z.isFullscreenInContext()),
        L = (0, d.e7)([eI.Z], () => eI.Z.hasLayers()),
        M = (0, x.s9z)(x.JQI) || L || eq.s.isDisallowPopupsSet() || D,
        U = (0, en.b)(),
        B = (0, d.e7)([q.default], () => null != q.default.getAwaitingRemoteSessionInfo()),
        F = (0, d.e7)([eA.Z], () => eA.Z.getGuildId()),
        G = null == t ? void 0 : t.avatarDecoration,
        V = (0, P.R)(t, null != F ? F : void 0),
        z = (0, w.Z)(r ? V : G),
        H = eK.ZP.useName(null != F ? F : void 0, null, t),
        W = null != (e = eY.ZP.useName(t)) ? e : "",
        { voiceActivityStatusEnabled: K } = (0, C.U)({ location: "Account" }),
        Y = (0, er.c)(t, "Account"),
        Q = ei.H.useConfig({ location: "Account" }).enabled,
        { analyticsLocations: X } = (0, N.ZP)(O.Z.ACCOUNT),
        $ = (0, J.K)({
            user: t,
            guildId: r && null != F ? F : void 0,
        }),
        { isQuestBarEmpty: ee, hasLoadedQuestBar: et } = (0, es.Ws)({ location: e5.dr.CONFLICT_CHECKS }),
        ea = (0, d.e7)([eo.Z, eM.default, ew.Z], () => {
            let e,
                t = eo.Z.getSyncingWith(),
                n = eo.Z.getActivity(),
                a = [];
            if (
                (null != t ? (e = t.partyId) : null != n && null != n.party && null != n.party.id && (e = n.party.id),
                null != e)
            ) {
                var r;
                a = o()(Array.from(null != (r = ew.Z.getParty(e)) ? r : []))
                    .map((e) => eM.default.getUser(e))
                    .filter(eW.lm)
                    .value();
            }
            return a.length > 1;
        }),
        el = (0, ec.Un)({ location: "AccountConnected" }),
        ed = {
            avatar: [],
            settings: [],
        };
    !M &&
        (ed.avatar.push(u.z.DISPLAY_NAME_STYLES_COACHMARK),
        Y && ed.avatar.push(u.z.TENURE_BADGE_CHURN_REMINDER),
        el && ed.avatar.push(u.z.WIDGETS_RTC_UPSELL_COACHMARK),
        Q && ed.settings.push(u.z.NITRO_PRIVACY_PERK_BETA_COACHMARK));
    let { shouldShowTooltip: eu, dismissTooltip: em } = td(e6.h7.AUDIO_INPUT),
        { shouldShowTooltip: ep, dismissTooltip: eh } = td(e6.h7.AUDIO_OUTPUT);
    return (0, a.jsx)(N.Gt, {
        value: X,
        children: (0, a.jsx)(to, {
            currentUser: t,
            username: r ? H : W,
            transitionAccountPanel: r,
            activities: i,
            applicationStream: c,
            voiceChannel: g,
            dismissibleContents: ed,
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
            streaming: l,
            suppress: _,
            webBuildOverride: T,
            awaitingRemote: B,
            isEligibleForPomelo: U,
            voiceActivityStatusEnabled: K,
            nameplate: $,
            selectedGuildId: F,
            avatarDecoration: z,
            isQuestBarEmpty: ee,
            hasLoadedQuestBar: et,
            isListenAlongVisible: ea,
            shouldShowInputDeviceChangedTooltip: eu,
            shouldShowOutputDeviceChangedTooltip: ep,
            dismissInputDeviceChangedTooltip: em,
            dismissOutputDeviceChangedTooltip: eh,
        }),
    });
}
function tm(e) {
    let t,
        n,
        i,
        {
            webBuildOverride: l,
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
        { showRefreshedAudioContextMenu: v } = (0, eJ.e)({ location: "SettingsCogButton" }),
        j = !v && (f || b),
        { name: y } = (0, Q.p6)(e6.h7.AUDIO_INPUT),
        { name: C } = (0, Q.p6)(e6.h7.AUDIO_OUTPUT);
    !v && f
        ? ((t = e2.intl.format(e2.t["18wnuD"], { inputDeviceName: y })),
          (n = e2.intl.formatToPlainString(e2.t["18wnuD"], { inputDeviceName: y })),
          (i = e2.intl.formatToPlainString(e2.t["18wnuD"], { inputDeviceName: y })))
        : !v && b
          ? ((t = e2.intl.format(e2.t["f+DDY/"], { outputDeviceName: C })),
            (n = e2.intl.formatToPlainString(e2.t["f+DDY/"], { outputDeviceName: C })),
            (i = e2.intl.formatToPlainString(e2.t["f+DDY/"], { outputDeviceName: C })))
          : (t =
                null != l
                    ? e2.intl.formatToPlainString(e2.t.Gzh6ZP, { webBuildOverride: l.id })
                    : e2.intl.string(e2.t.cduTBL));
    let _ = x.ewm,
        S = (0, h.i)();
    return (
        (_ = null != l ? x.bgT : s ? x.Ncx : S.Component),
        (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(
                    e0.Z,
                    tn(
                        tt(
                            {
                                ref: g,
                                tooltipText: t,
                                tooltipType: j ? "green_void_do_not_use" : void 0,
                                tooltipPositionKey: n,
                                tooltipForceOpen: j,
                                "aria-label": j ? i : void 0,
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
                (0, a.jsx)(z.ZP, {
                    contentTypes: d,
                    groupName: e7.R.ACCOUNT_NAME_ZONE,
                    children: (e) => {
                        let { visibleContent: t, markAsDismissed: n } = e;
                        if (t === u.z.NITRO_PRIVACY_PERK_BETA_COACHMARK)
                            return (0, a.jsx)(el.a, {
                                targetElementRef: g,
                                markAsDismissed: n,
                            });
                    },
                }),
            ],
        })
    );
}
function tp(e) {
    let {
            selfMute: t,
            serverMute: n,
            suppress: i,
            awaitingRemote: s,
            iconForeground: o,
            onMouseEnter: m,
            onMouseLeave: p,
            onClick: h,
            onContextMenu: b,
            nameplate: g,
            accountContainerRef: v,
            shouldShowSpeakingWhileMutedTooltip: j,
            shouldShowInputDeviceChangedTooltip: y,
            dismissTooltips: C,
        } = e,
        _ = t || i || n,
        S = r.useRef(null),
        E = r.useRef(null),
        T = (0, eT.b)(_),
        { activeVoice: P, mostRecentlyRequestedVoiceId: w, lastInitAttemptMayHaveCrashed: I } = (0, ev.o)(),
        k = null != P,
        R = (0, d.e7)([eR.Z], () => eR.Z.isConnected()),
        { Component: A, events: Z, play: U } = T,
        B = n || i ? x.v0G : A,
        F = j
            ? {
                  tooltipType: "green_void_do_not_use",
                  tooltipText: e2.intl.string(e2.t["29gnR4"]),
                  tooltipForceOpen: !0,
              }
            : { tooltipText: (0, D.Z)(t, n, i, s) },
        { analyticsLocations: V } = (0, N.ZP)(O.Z.AUDIO_INPUT_BUTTON),
        H = (0, eb.Hu)({
            location: O.Z.AUDIO_INPUT_BUTTON,
            autoTrackExposure: !0,
        }),
        W = (0, eg.av)({
            location: O.Z.AUDIO_INPUT_BUTTON,
            autoTrackExposure: !0,
        });
    r.useEffect(() => () => U(), [_, U]);
    let K = r.useCallback(
            (e) => {
                b(e, V);
            },
            [b, V],
        ),
        [q, Y] = r.useState(!1),
        X = r.useCallback((e) => {
            var t;
            if (
                (0, c.kK)(null == e ? void 0 : e.target, Node) &&
                (null == (t = S.current) ? void 0 : t.contains(e.target))
            )
                return f.F;
            Y(!1);
        }, []);
    (0, eV.yp)({
        event: e8.CkL.OPEN_VOICE_FILTER_POPOUT,
        handler: () => {
            Y(!0);
        },
    });
    let [J, $] = r.useState(!1);
    r.useEffect(() => {
        let e;
        return (
            R &&
                k &&
                (e = setTimeout(() => {
                    $(!0), (e = setTimeout(() => $(!1), ti));
                }, 300)),
            () => {
                $(!1), clearTimeout(e);
            }
        );
    }, [R]);
    let ee = r.useCallback(() => {
            I || (0, ej.r5)();
        }, [I]),
        et = _ ? x.TVs.colors.ICON_VOICE_MUTED : "currentColor",
        en = (0, ea.Z)({ location: "Account" }),
        { name: er } = (0, Q.p6)(e6.h7.AUDIO_INPUT),
        { showRefreshedAudioContextMenu: ei } = (0, eJ.e)({ location: "MicrophoneButton" }),
        { enabledInputProfiles: el } = (0, ep.G)({ location: "MicrophoneButton" });
    return ei
        ? (0, a.jsx)(N.Gt, {
              value: V,
              children: (0, a.jsx)(x.yRy, {
                  targetElementRef: S,
                  renderPopout: (e) => {
                      let { closePopout: t } = e;
                      return (
                          C(),
                          (0, a.jsx)(N.Gt, {
                              value: V,
                              children: ei
                                  ? (0, a.jsx)(M.Z, {
                                        onInteraction: (0, G.u)("AudioDeviceMenu", O.Z.ACCOUNT),
                                        onClose: t,
                                        maybeRenderPTTCheckbox: !0,
                                        renderInputProfiles: el.length > 0,
                                        renderInputDevices: !0,
                                        maybeRenderInputMeter: !0,
                                        renderInputVolume: !0,
                                        renderSettingsButton: !0,
                                    })
                                  : (0, a.jsx)(L.default, {
                                        onInteraction: (0, G.u)("AudioDeviceMenu", O.Z.ACCOUNT),
                                        onClose: t,
                                        renderInputDevices: !0,
                                        renderInputProfiles: el.length > 0,
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
                  children: (e, t) => {
                      let { onClick: n } = e,
                          { isShown: r } = t,
                          i = r ? x.u04 : x.CJ0;
                      return (0, a.jsxs)("div", {
                          ref: S,
                          className: l()(e9.micButtonParent, {
                              [e9.hasColorGlow]: _,
                              [e9.popoutOpen]: r,
                          }),
                          children: [
                              (0, a.jsx)(
                                  e0.Z,
                                  tt(
                                      {
                                          "aria-checked": _,
                                          "aria-label": e2.intl.string(e2.t.w4m945),
                                          className: l()({ [e9.micButtonWithMenu]: !0 }),
                                          disabled: s,
                                          icon: (0, a.jsx)(B, {
                                              size: "custom",
                                              width: 20,
                                              height: 20,
                                              color: et,
                                              className: o,
                                          }),
                                          onClick: h,
                                          onContextMenu: n,
                                          onMouseEnter: () => {
                                              m(), Z.onMouseEnter();
                                          },
                                          onMouseLeave: () => {
                                              p(), Z.onMouseLeave();
                                          },
                                          plated: null != g,
                                          redGlow: _,
                                          role: "switch",
                                      },
                                      F,
                                  ),
                              ),
                              (0, a.jsx)(e0.Z, {
                                  "aria-label": y
                                      ? e2.intl.formatToPlainString(e2.t["18wnuD"], { inputDeviceName: er })
                                      : e2.intl.string(e2.t.fRzCbB),
                                  className: l()(e9.buttonChevron, { [e9.popoutOpen]: r }),
                                  disabled: s,
                                  icon: (0, a.jsx)(i, {
                                      className: e9.buttonChevronIcon,
                                      size: "custom",
                                      width: 12,
                                      height: 12,
                                      color: et,
                                  }),
                                  onClick: n,
                                  onContextMenu: n,
                                  onMouseEnter: m,
                                  onMouseLeave: p,
                                  plated: null != g,
                                  redGlow: _,
                                  tooltipType: y ? "green_void_do_not_use" : void 0,
                                  tooltipForceOpen: y,
                                  tooltipPositionKey: y
                                      ? e2.intl.formatToPlainString(e2.t["18wnuD"], { inputDeviceName: er })
                                      : void 0,
                                  tooltipShouldShow: !r,
                                  tooltipText: y
                                      ? e2.intl.format(e2.t["18wnuD"], { inputDeviceName: er })
                                      : e2.intl.string(e2.t.fRzCbB),
                              }),
                          ],
                      });
                  },
              }),
          })
        : (0, a.jsx)(N.Gt, {
              value: V,
              children: (0, a.jsxs)("div", {
                  ref: S,
                  className: l()(e9.micButtonParent, { [e9.hasColorGlow]: _ }),
                  children: [
                      (0, a.jsx)(
                          e0.Z,
                          tt(
                              {
                                  plated: null != g,
                                  onMouseEnter: () => {
                                      m(), Z.onMouseEnter();
                                  },
                                  onMouseLeave: () => {
                                      p(), Z.onMouseLeave();
                                  },
                                  icon: (0, a.jsx)(B, {
                                      size: "custom",
                                      width: 20,
                                      height: 20,
                                      color: et,
                                      className: o,
                                  }),
                                  onClick: h,
                                  onContextMenu: K,
                                  role: "switch",
                                  className: l()({ [e9.micButtonWithMenu]: H }),
                                  redGlow: _,
                                  "aria-label": e2.intl.string(e2.t.w4m945),
                                  "aria-checked": _,
                                  disabled: s,
                              },
                              F,
                          ),
                      ),
                      H &&
                          (0, a.jsx)(x.yRy, {
                              targetElementRef: v,
                              position: "top",
                              align: "left",
                              nudgeAlignIntoViewport: !1,
                              animation: x.yRy.Animation.FADE,
                              useMouseEnter: !0,
                              ignoreModalClicks: !0,
                              onRequestOpen: ee,
                              onRequestClose: X,
                              shouldShow: q,
                              renderPopout: (e) => {
                                  let { closePopout: t } = e;
                                  return (0, a.jsx)(eS.l, { onSettingsButtonClick: t });
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
                                                      i = Object.keys(e);
                                                  for (a = 0; a < i.length; a++)
                                                      (n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                                  return r;
                                              })(e, t);
                                          if (Object.getOwnPropertySymbols) {
                                              var i = Object.getOwnPropertySymbols(e);
                                              for (a = 0; a < i.length; a++)
                                                  (n = i[a]),
                                                      !(t.indexOf(n) >= 0) &&
                                                          Object.prototype.propertyIsEnumerable.call(e, n) &&
                                                          (r[n] = e[n]);
                                          }
                                          return r;
                                      })(e, ["onClick"]),
                                      { isShown: i } = t;
                                  let l = i ? x.u04 : x.CJ0,
                                      o = [];
                                  return (
                                      !i &&
                                          (en && o.push(u.z.VOICE_FILTER_EARLY_ACCESS_COACHMARK),
                                          o.push(u.z.VOICE_FILTER_LAUNCH_COACHMARK),
                                          W && R && !k && o.push(u.z.VOICE_FILTER_FIRST_USE_COACHMARK)),
                                      (0, a.jsx)("div", {
                                          children: (0, a.jsx)(z.ZP, {
                                              bypassAutoDismiss: !0,
                                              contentTypes: o,
                                              children: (e) => {
                                                  let { visibleContent: t, markAsDismissed: i } = e,
                                                      o = null;
                                                  t === u.z.VOICE_FILTER_EARLY_ACCESS_COACHMARK
                                                      ? (o = (0, a.jsx)(e_.U, {
                                                            markAsDismissed: i,
                                                            onCTA: () => Y(!0),
                                                        }))
                                                      : t === u.z.VOICE_FILTER_LAUNCH_COACHMARK
                                                        ? (o = (0, a.jsx)(eC.n, {
                                                              markAsDismissed: i,
                                                              onCTA: () => Y(!0),
                                                          }))
                                                        : t === u.z.VOICE_FILTER_FIRST_USE_COACHMARK &&
                                                          (o = (0, a.jsx)(ey.v, {
                                                              markAsDismissed: i,
                                                              onCTA: () => Y(!0),
                                                          }));
                                                  let c = () =>
                                                      (0, a.jsx)(
                                                          e0.Z,
                                                          tt(
                                                              {
                                                                  ref: E,
                                                                  plated: null != g,
                                                                  tooltipForceOpen: J,
                                                                  tooltipText: J
                                                                      ? e2.intl.string(e2.t.VlC1de)
                                                                      : e2.intl.string(e2.t.Hapb4J),
                                                                  icon: (0, a.jsx)(l, {
                                                                      className: e9.buttonChevronIcon,
                                                                      size: "custom",
                                                                      width: 12,
                                                                      height: 12,
                                                                      color: et,
                                                                  }),
                                                                  role: "button",
                                                                  className: e9.buttonChevron,
                                                                  redGlow: _,
                                                                  "aria-label": e2.intl.string(e2.t.Hapb4J),
                                                                  disabled: s,
                                                                  onClick: (e) => {
                                                                      i(e7.L.INDIRECT_ACTION),
                                                                          n(e),
                                                                          null != w && !q && I
                                                                              ? (0, eE.$)(() => Y(!0))
                                                                              : Y(!q);
                                                                  },
                                                              },
                                                              r,
                                                          ),
                                                      );
                                                  return null != o
                                                      ? (0, a.jsx)(x.yRy, {
                                                            targetElementRef: E,
                                                            renderPopout: () => o,
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
function th(e) {
    let {
            selfDeaf: t,
            serverDeaf: n,
            awaitingRemote: i,
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
        { name: y } = (0, Q.p6)(e6.h7.AUDIO_OUTPUT),
        { showRefreshedAudioContextMenu: C } = (0, eJ.e)({ location: "HeadphonesButton" }),
        _ = (0, Z.Z)(t, n, i),
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
                          className: l()(e9.micButtonParent, {
                              [e9.hasColorGlow]: h,
                              [e9.popoutOpen]: o,
                          }),
                          children: [
                              (0, a.jsx)(e0.Z, {
                                  "aria-checked": h,
                                  "aria-label": e2.intl.string(e2.t.wjcRFX),
                                  className: e9.micButtonWithMenu,
                                  disabled: i,
                                  icon: (0, a.jsx)(j, {
                                      size: "custom",
                                      width: 20,
                                      height: 20,
                                      color: h ? x.TVs.colors.ICON_VOICE_MUTED : "currentColor",
                                      className: c,
                                  }),
                                  iconForeground: h ? e9.strikethrough : void 0,
                                  innerClassName: l()({ [e9.redIcon]: n }),
                                  onClick: s,
                                  onContextMenu: r,
                                  onMouseEnter: g,
                                  onMouseLeave: v,
                                  plated: null != d,
                                  redGlow: h,
                                  role: "switch",
                                  tooltipText: _,
                              }),
                              (0, a.jsx)(e0.Z, {
                                  className: l()(e9.buttonChevron, { [e9.popoutOpen]: o }),
                                  disabled: i,
                                  icon: (0, a.jsx)(m, {
                                      className: e9.buttonChevronIcon,
                                      size: "custom",
                                      width: 12,
                                      height: 12,
                                      color: h ? x.TVs.colors.ICON_VOICE_MUTED : "currentColor",
                                  }),
                                  onClick: r,
                                  onContextMenu: r,
                                  plated: null != d,
                                  redGlow: h,
                                  tooltipType: u ? "green_void_do_not_use" : void 0,
                                  tooltipForceOpen: u,
                                  tooltipPositionKey: u
                                      ? e2.intl.formatToPlainString(e2.t["f+DDY/"], { outputDeviceName: y })
                                      : void 0,
                                  tooltipShouldShow: !o,
                                  tooltipText: u
                                      ? e2.intl.format(e2.t["f+DDY/"], { outputDeviceName: y })
                                      : e2.intl.string(e2.t.aA4Vce),
                                  "aria-label": u
                                      ? e2.intl.formatToPlainString(e2.t["f+DDY/"], { outputDeviceName: y })
                                      : e2.intl.string(e2.t.aA4Vce),
                              }),
                          ],
                      });
                  },
              }),
          })
        : (0, a.jsx)(N.Gt, {
              value: S,
              children: (0, a.jsx)(e0.Z, {
                  plated: null != d,
                  tooltipText: _,
                  onMouseEnter: g,
                  onMouseLeave: v,
                  icon: (0, a.jsx)(j, {
                      size: "custom",
                      width: 20,
                      height: 20,
                      color: h ? x.TVs.colors.ICON_VOICE_MUTED : "currentColor",
                      className: c,
                  }),
                  onClick: s,
                  onContextMenu: T,
                  innerClassName: l()({ [e9.redIcon]: n }),
                  iconForeground: h ? e9.strikethrough : void 0,
                  role: "switch",
                  redGlow: h,
                  "aria-label": e2.intl.string(e2.t.wjcRFX),
                  "aria-checked": h,
                  disabled: i,
              }),
          });
}
