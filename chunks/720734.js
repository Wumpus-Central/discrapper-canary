n.d(t, {
    Z: () => tf,
    m: () => tp,
}),
    n(388685),
    n(539854);
var a = n(951288),
    r = n(647438),
    i = n(120356),
    l = n.n(i),
    o = n(392711),
    s = n.n(o),
    c = n(374470),
    d = n(442837),
    u = n(704215),
    m = n(846519),
    p = n(400354),
    h = n(789639),
    x = n(930295),
    f = n(481060),
    g = n(239091),
    b = n(410575),
    v = n(586902),
    j = n(493773),
    _ = n(980591),
    y = n(468363),
    C = n(326255),
    S = n(771173),
    E = n(963056),
    T = n(570928),
    O = n(100527),
    N = n(906732),
    P = n(541638),
    I = n(676742),
    w = n(1585),
    R = n(304761),
    k = n(865427),
    A = n(358221),
    D = n(571250),
    Z = n(628581),
    M = n(659580),
    L = n(855844),
    U = n(55311),
    F = n(575175),
    B = n(522651),
    G = n(795318),
    z = n(64220),
    V = n(427217),
    H = n(812055),
    W = n(243778),
    K = n(594928),
    q = n(386725),
    Y = n(821795),
    J = n(287647),
    X = n(892567),
    Q = n(258609),
    $ = n(53891),
    ee = n(291533),
    et = n(72897),
    en = n(78933),
    ea = n(850020),
    er = n(379839),
    ei = n(359135),
    el = n(516817),
    eo = n(332473),
    es = n(963590),
    ec = n(562705),
    ed = n(667105),
    eu = n(768419),
    em = n(172416),
    ep = n(184301),
    eh = n(670188),
    ex = n(620799),
    ef = n(313789),
    eg = n(846071),
    eb = n(518596),
    ev = n(879815),
    ej = n(294629),
    e_ = n(875527),
    ey = n(702977),
    eC = n(56848),
    eS = n(940315),
    eE = n(378441),
    eT = n(358820),
    eO = n(723547),
    eN = n(361045),
    eP = n(74650),
    eI = n(306609),
    ew = n(170293),
    eR = n(8404),
    ek = n(199902),
    eA = n(314897),
    eD = n(592125),
    eZ = n(831506),
    eM = n(819640),
    eL = n(131951),
    eU = n(19780),
    eF = n(914010),
    eB = n(885110),
    eG = n(246946),
    ez = n(594174),
    eV = n(78839),
    eH = n(626135),
    eW = n(768581),
    eK = n(572004),
    eq = n(459273),
    eY = n(585483),
    eJ = n(70956),
    eX = n(823379),
    eQ = n(5192),
    e$ = n(374023),
    e0 = n(51144),
    e1 = n(998502),
    e8 = n(660230),
    e3 = n(853170),
    e4 = n(422202),
    e2 = n(870569),
    e6 = n(345243),
    e5 = n(115530),
    e7 = n(981631),
    e9 = n(215023),
    te = n(921944),
    tt = n(46140),
    tn = n(65154),
    ta = n(388032),
    tr = n(25874);
function ti(e, t, n) {
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
function tl(e) {
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
                ti(e, t, n[t]);
            });
    }
    return e;
}
function to(e, t) {
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
let ts = e1.ZP.getEnableHardwareAcceleration() ? f.Xo$ : f.qEK,
    tc = 2 * eJ.Z.Millis.MINUTE,
    td = 3 * eJ.Z.Millis.SECOND,
    tu = 5 * eJ.Z.Millis.SECOND;
function tm(e) {
    let {
            ref: t,
            speaking: n,
            streaming: i,
            currentUser: o,
            status: s,
            handleClick: c,
            handleMouseLeave: d,
            renderNameTag: u,
            nameplate: m,
            selectedGuildId: p,
            transitionAccountPanel: h,
            avatarDecoration: x,
            "data-jump-section": g,
        } = e,
        v = r.useRef(null),
        j = null != t ? t : v,
        y = (0, eW.NZ)({
            avatarDecoration: x,
            size: (0, w.y9)(f.EFr.SIZE_32),
        }),
        C = (0, q.Z)(),
        {
            updateOpenPopoutRef: S,
            highlightBadge: E,
            setHighlightBadge: T,
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
                (0, _.Z)(() => l(!0), 750),
                r.useEffect(() => {
                    let t = (t) => {
                        var n;
                        let { highlightBadge: r } = t;
                        null != r && a(r), null == (n = e.current) || n.call(e);
                    };
                    return (
                        eY.S.subscribe(e7.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, t),
                        () => {
                            eY.S.unsubscribe(e7.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, t);
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
        O = (0, er.A)(m);
    if (null == o) return null;
    let N = h && p !== e7.I_8 && p !== e7.ME && null != p ? p : void 0;
    return (0, a.jsx)(b.Z, {
        object: e7.qAy.AVATAR,
        children: (0, a.jsx)(eh.Z, {
            user: o,
            targetElementRef: j,
            clickTrap: !0,
            preload: () =>
                (0, ep.Z)(o.id, o.getAvatarURL(N, eh.I), {
                    type: "account_popout",
                    withMutualGuilds: !1,
                    withMutualFriends: !1,
                    guildId: N,
                }),
            renderPopout: (e, t) => {
                let { closePopout: n, setPopoutRef: r } = e;
                return (0, a.jsx)(en.Z, {
                    currentUser: o,
                    highlightBadge: E,
                    openedAt: t,
                    onClose: () => {
                        null == n || n();
                    },
                    setPopoutRef: r,
                    guildId: N,
                    guildProfileEnabled: h,
                });
            },
            position: "top",
            align: "left",
            animation: f.yRy.Animation.FADE,
            spacing: 14,
            fixed: !0,
            ignoreModalClicks: !0,
            onRequestClose: () => {
                d(), T(void 0);
            },
            children: (e) => (
                S(e),
                (0, a.jsxs)(
                    f.P3F,
                    to(
                        tl(
                            {
                                innerRef: j,
                                style: O,
                            },
                            e,
                        ),
                        {
                            onClick: (t) => {
                                var n;
                                null == (n = e.onClick) || n.call(e, t), null == c || c(t);
                            },
                            "aria-label": ta.intl.string(ta.t["3Uj+2p"]),
                            "data-jump-section": g,
                            className: l()(tr.avatarWrapper, { [tr.plated]: null != m }),
                            children: [
                                (0, a.jsx)(ts, {
                                    size: f.EFr["SIZE_".concat(32)],
                                    src: o.getAvatarURL(h ? p : void 0, 28, !1),
                                    avatarDecoration: y,
                                    "aria-label": o.username,
                                    status: i ? e7.Skl.STREAMING : s,
                                    isSpeaking: n,
                                    className: tr.avatar,
                                }),
                                (0, a.jsx)("div", {
                                    className: l()(tr.nameTag, { [tr.canCopy]: eK.wS }),
                                    children: u(C),
                                }),
                            ],
                        },
                    ),
                )
            ),
        }),
    });
}
class tp extends r.PureComponent {
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
                ta.intl.string(ta.t.MSaeTe),
                ta.intl.string(ta.t.UmrCw7),
                ta.intl.string(ta.t.gKE0Jq),
                ta.intl.string(ta.t["4DSKbi"]),
                ta.intl.string(ta.t["+8ENdT"]),
                ta.intl.string(ta.t.GlWHv8),
                ta.intl.string(ta.t.hIzxU9),
                ta.intl.string(ta.t["26uMPL"]),
                ta.intl.string(ta.t.uFs7R2),
                ta.intl.string(ta.t.bLXdcY),
                ta.intl.string(ta.t.gPg9fS),
            ],
            n = Math.min(Math.max(0, e - 1), t.length - 1);
        return (0, a.jsx)(f.UkV, {
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
                voiceActivityStatusEnabled: o,
                voiceChannel: s,
            } = this.props;
        if (null == r) return null;
        if (
            (0, C.Z)({
                activities: t,
                status: i,
                applicationStream: n,
                voiceChannel: o ? s : void 0,
            })
        )
            return (0, a.jsx)(T.Z, {
                hoverText: l,
                forceHover: e,
                children: (0, a.jsx)(S.Z, {
                    location: "Account",
                    user: r,
                    activities: t,
                    applicationStream: n,
                    voiceChannel: o ? s : void 0,
                    textClassName: tr.activityStatusText,
                    hideTooltip: !0,
                }),
            });
        let c =
            null == t
                ? void 0
                : t.find((e) => {
                      let { type: t } = e;
                      return t === e7.IIU.CUSTOM_STATUS;
                  });
        return null != c
            ? (0, a.jsx)(T.Z, {
                  hoverText: l,
                  forceHover: e,
                  children: (0, a.jsx)(V.Z, {
                      activity: c,
                      emojiClassName: tr.emoji,
                      className: tr.customStatus,
                  }),
              })
            : null != i && i !== e7.Skl.UNKNOWN && r.hasUniqueUsername()
              ? (0, a.jsx)(T.Z, {
                    hoverText: l,
                    forceHover: e,
                    children: (0, a.jsx)(E.Z, { text: e0.ZP.humanizeStatus(i) }),
                })
              : l;
    }
    renderAvatarWithPopout(e) {
        let {
            focusSectionProps: { "data-jump-section": t },
            onClick: n,
        } = e;
        return (0, a.jsx)(
            tm,
            to(tl({}, this.props), {
                ref: this.avatarWithPopoutRef,
                handleClick: n,
                handleMouseLeave: this.handleMouseLeave,
                renderNameTag: this.renderNameTag,
                "data-jump-section": t,
            }),
        );
    }
    renderNameZone(e) {
        let {
            currentUser: t,
            dismissibleContents: n,
            visibleRecurringAvatarDc: r,
            markRecurringAvatarDcAsDismissed: i,
            visibleRecurringDoNotDisturbReminderPopoverDc: l,
            markRecurringDoNotDisturbReminderPopoverDcAsDismissed: o,
            isQuestBarEmpty: s,
            hasLoadedQuestBar: c,
        } = this.props;
        if (null == t) return null;
        if (!(null != this.avatarWithPopoutRef.current && s && c))
            return this.renderAvatarWithPopout({ focusSectionProps: e });
        if (r === u.z.GUILD_TAG_AVAILABLE_COACHMARK) {
            var d;
            return (0, a.jsx)($.ZP, {
                guildId: null != (d = this.props.selectedGuildId) ? d : null,
                onDismiss: i,
                targetElementRef: this.avatarWithPopoutRef,
                children: this.renderAvatarWithPopout({ focusSectionProps: e }),
            });
        }
        return l === u.z.DO_NOT_DISTURB_REMINDER_POPOVER
            ? (0, a.jsx)(H.Z, {
                  targetElementRef: this.avatarWithPopoutRef,
                  onDismiss: o,
                  children: this.renderAvatarWithPopout({ focusSectionProps: e }),
              })
            : (0, a.jsxs)(a.Fragment, {
                  children: [
                      (0, a.jsx)(ec.Z, {
                          groupName: te.R.ACCOUNT_NAME_ZONE,
                          targetElementRef: this.avatarWithPopoutRef,
                      }),
                      (0, a.jsx)(W.ZP, {
                          contentTypes: n.avatar,
                          groupName: te.R.ACCOUNT_NAME_ZONE,
                          children: (t) => {
                              let { visibleContent: n, markAsDismissed: r } = t;
                              switch (n) {
                                  case u.z.WIDGETS_RTC_UPSELL_COACHMARK:
                                      return (0, a.jsx)(ex.Z, {
                                          markAsDismissed: r,
                                          targetElementRef: this.avatarWithPopoutRef,
                                          children: this.renderAvatarWithPopout({ focusSectionProps: e }),
                                      });
                                  case u.z.PREMIUM_SUBSCRIPTION_APRIL_MARKETING_DECO_TOOLTIP:
                                      return (0, a.jsx)(z.Z, {
                                          markAsDismissed: r,
                                          targetElementRef: this.avatarWithPopoutRef,
                                          children: () => this.renderAvatarWithPopout({ focusSectionProps: e }),
                                      });
                                  case u.z.DISPLAY_NAME_STYLES_COACHMARK:
                                      return (0, a.jsx)(J.e, {
                                          markAsDismissed: r,
                                          targetElementRef: this.avatarWithPopoutRef,
                                          children: this.renderAvatarWithPopout({ focusSectionProps: e }),
                                      });
                                  default:
                                      return this.renderAvatarWithPopout({ focusSectionProps: e });
                              }
                          },
                      }),
                  ],
              });
    }
    render() {
        let { currentUser: e, nameplate: t, voiceChannel: n, isQuestBarEmpty: r, isListenAlongVisible: i } = this.props,
            o = this.state.hovered;
        return null == e
            ? null
            : (0, a.jsx)(f.Wdt, {
                  children: (e) =>
                      (0, a.jsxs)("div", {
                          ref: this.containerRef,
                          className: l()(tr.container, {
                              [tr.containerRtcOpened]: null != n,
                              [tr.containerQuestBarVisible]: !r,
                              [tr.containerListenAlongVisible]: i,
                          }),
                          onMouseEnter: this.handleMouseEnter,
                          onMouseLeave: this.handleMouseLeave,
                          children: [
                              (0, a.jsx)(el.Z, {
                                  nameplate: t,
                                  hovered: o,
                                  placement: ei.i.ACCOUNT,
                              }),
                              this.renderNameZone(e),
                              (0, a.jsx)(
                                  th,
                                  to(tl({}, this.props, this.state), {
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
              });
    }
    constructor(...e) {
        super(...e),
            ti(this, "copiedTimeout", new m.V7()),
            ti(this, "copiedDecayTimeout", new m.V7()),
            ti(this, "speakingWhileMutedTooltipTimeout", new m.V7()),
            ti(this, "lastSpeakingWhileMutedNotificationTime", void 0),
            ti(this, "state", {
                hovered: !1,
                copiedStreak: 0,
                shouldShowNametagTooltip: !1,
                shouldShowCopiedFeedback: !1,
                shouldShowSpeakingWhileMutedTooltip: !1,
                hoveringOnMute: !1,
            }),
            ti(this, "containerRef", r.createRef()),
            ti(this, "avatarWithPopoutRef", r.createRef()),
            ti(this, "handleToggleSelfMute", () => {
                let { serverMute: e, suppress: t, selfMute: n } = this.props;
                (0, F.Z)(e, t, e7.jXE.ACCOUNT_PANEL), (0, B.v)(O.Z.ACCOUNT, B.d.MIC, n);
            }),
            ti(this, "handleToggleSelfDeaf", () => {
                let { serverDeaf: e, selfDeaf: t } = this.props;
                (0, U.Z)(e, e7.jXE.ACCOUNT_PANEL), (0, B.v)(O.Z.ACCOUNT, B.d.DEAFEN, !t);
            }),
            ti(this, "handleOpenAccountSettings", () => {
                this.dismissTooltips(),
                    eU.Z.isConnected()
                        ? (0, eb.openUserSettings)(ef.n.VOICE_AND_VIDEO_PANEL, { section: e7.oAB.VOICE })
                        : (0, eb.openUserSettings)();
            }),
            ti(this, "handleOpenSettingsContextMenu", (e) => {
                let { currentUser: t } = this.props;
                null != t &&
                    (0, g.jW)(e, async () => {
                        let { default: e } = await n.e("2535").then(n.bind(n, 923422));
                        return (n) =>
                            (0, a.jsx)(
                                e,
                                to(tl({}, n), {
                                    user: t,
                                    premiumSubscription: this.props.premiumSubscription,
                                    webBuildOverride: this.props.webBuildOverride,
                                    onInteraction: (0, G.u)("UserSettingsCogContextMenu", O.Z.ACCOUNT),
                                }),
                            );
                    });
            }),
            ti(this, "audioOnInteractionHandler", (0, G.u)("AudioDeviceMenu", O.Z.ACCOUNT)),
            ti(this, "handleInputAudioContextMenu", (e, t) => {
                this.dismissTooltips(),
                    (0, g.jW)(e, async () => {
                        let { default: e } = await Promise.resolve().then(n.bind(n, 659580));
                        return () => {
                            let { enabledInputProfiles: n } = (0, eg.G)({ location: "Account" });
                            return (0, a.jsx)(N.Gt, {
                                value: t,
                                children: (0, a.jsx)(e, {
                                    onClose: g.Zy,
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
            ti(this, "handleOutputAudioContextMenu", (e, t) => {
                this.dismissTooltips(),
                    (0, g.jW)(e, async () => {
                        let { default: e } = await Promise.resolve().then(n.bind(n, 659580));
                        return () =>
                            (0, a.jsx)(N.Gt, {
                                value: t,
                                children: (0, a.jsx)(e, {
                                    onClose: g.Zy,
                                    renderOutputDevices: !0,
                                    renderOutputVolume: !0,
                                    minimal: !0,
                                    onInteraction: this.audioOnInteractionHandler,
                                }),
                            });
                    });
            }),
            ti(this, "handleMouseEnter", () => {
                this.setState({ hovered: !0 });
            }),
            ti(this, "handleMouseLeave", () => {
                this.setState({ hovered: !1 });
            }),
            ti(this, "handleMouseEnterMute", () => {
                this.setState({
                    hoveringOnMute: !0,
                    shouldShowSpeakingWhileMutedTooltip: !1,
                }),
                    this.speakingWhileMutedTooltipTimeout.stop();
            }),
            ti(this, "handleMouseLeaveMute", () => {
                this.setState({ hoveringOnMute: !1 });
            }),
            ti(this, "dismissSpeakingWhileMutedTooltip", () => {
                this.setState({ shouldShowSpeakingWhileMutedTooltip: !1 }),
                    this.speakingWhileMutedTooltipTimeout.stop();
            }),
            ti(this, "dismissTooltips", () => {
                var e, t, n, a;
                null == (e = (t = this.props).dismissInputDeviceChangedTooltip) || e.call(t),
                    null == (n = (a = this.props).dismissOutputDeviceChangedTooltip) || n.call(a),
                    this.dismissSpeakingWhileMutedTooltip();
            }),
            ti(this, "handleCopyTag", () => {
                let { currentUser: e } = this.props,
                    { shouldShowNametagTooltip: t, copiedStreak: n } = this.state;
                if (null == e) return;
                (0, eK.JG)(
                    e0.ZP.getUserTag(e, {
                        decoration: "never",
                        identifiable: "always",
                    }),
                ),
                    eH.default.track(e7.rMx.TEXT_COPIED, { type: "User Tag" });
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
            ti(this, "handleOccludedChanged", () => {
                let { occluded: e } = this.props;
                e &&
                    this.setState({
                        shouldShowNametagTooltip: !1,
                        shouldShowSpeakingWhileMutedTooltip: !1,
                    });
            }),
            ti(this, "handleSpeakingWhileMutedChanged", () => {
                let {
                        selfMute: e,
                        serverMute: t,
                        suppress: n,
                        speakingWhileMuted: a,
                        occluded: r,
                        shouldShowInputDeviceChangedTooltip: i,
                        shouldShowOutputDeviceChangedTooltip: l,
                    } = this.props,
                    { hoveringOnMute: o } = this.state,
                    s =
                        void 0 === this.lastSpeakingWhileMutedNotificationTime ||
                        Date.now() - this.lastSpeakingWhileMutedNotificationTime > tc;
                a
                    ? o ||
                      !e ||
                      t ||
                      n ||
                      r ||
                      !s ||
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
            ti(this, "renderNameTag", (e) => {
                let { currentUser: t, username: n } = this.props;
                return null == t
                    ? null
                    : (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)("div", {
                                  className: tr.panelTitleContainer,
                                  children: (0, a.jsx)(e5.Z, {
                                      className: l()({ [tr.withDisplayNameStyles]: null != e }),
                                      children: (0, a.jsx)(X.Z, {
                                          userName: n,
                                          displayNameStyles: e,
                                          effectDisplayType: this.state.hovered ? Y.F.ANIMATED : Y.F.STATIC,
                                          loop: !0,
                                          inProfile: !0,
                                      }),
                                  }),
                              }),
                              (0, a.jsx)("div", {
                                  className: tr.panelSubtextContainer,
                                  children: (0, a.jsx)(e6.Z, { children: this.renderStatus() }),
                              }),
                          ],
                      });
            });
    }
}
function th(e) {
    let {
            selfDeaf: t,
            selfMute: n,
            awaitingRemote: r,
            serverMute: i,
            serverDeaf: l,
            suppress: o,
            shouldShowSpeakingWhileMutedTooltip: s,
            isEligibleForPomelo: c,
            webBuildOverride: d,
            handleMouseEnterMute: u,
            handleMouseLeaveMute: m,
            handleToggleSelfDeaf: p,
            handleToggleSelfMute: h,
            handleInputAudioContextMenu: x,
            handleOutputAudioContextMenu: f,
            handleOpenAccountSettings: g,
            handleOpenSettingsContextMenu: b,
            dismissibleContents: v,
            nameplate: j,
            accountContainerRef: _,
            shouldShowInputDeviceChangedTooltip: y = !1,
            shouldShowOutputDeviceChangedTooltip: C = !1,
            dismissTooltips: S,
        } = e,
        E = (0, er.A)(j);
    return (0, a.jsxs)("div", {
        className: tr.buttons,
        style: E,
        children: [
            (0, a.jsx)(tb, {
                accountContainerRef: _,
                selfMute: n,
                serverMute: i,
                suppress: o,
                awaitingRemote: r,
                onMouseEnter: u,
                onMouseLeave: m,
                onClick: h,
                onContextMenu: x,
                iconForeground: null != j ? tr.iconForeground : void 0,
                nameplate: j,
                shouldShowInputDeviceChangedTooltip: y,
                shouldShowSpeakingWhileMutedTooltip: s,
                dismissTooltips: S,
            }),
            (0, a.jsx)(tv, {
                selfDeaf: t,
                serverDeaf: l,
                onClick: p,
                onContextMenu: f,
                awaitingRemote: r,
                iconForeground: null != j ? tr.iconForeground : void 0,
                nameplate: j,
                shouldShowOutputDeviceChangedTooltip: C,
                dismissTooltips: S,
            }),
            (0, a.jsx)(tg, {
                isEligibleForPomelo: c,
                webBuildOverride: d,
                onClick: g,
                onContextMenu: b,
                dismissibleContents: v.settings,
                iconForeground: null != j ? tr.iconForeground : void 0,
                nameplate: j,
                shouldShowInputDeviceChangedTooltip: y,
                shouldShowOutputDeviceChangedTooltip: C,
            }),
        ],
    });
}
function tx(e) {
    let { shouldShowDeviceChangedNotifications: t } = (0, e4.P)({
            location: "Account.useDeviceChangedTooltip",
            autoTrackExposure: !1,
        }),
        n = (0, d.e7)([eU.Z], () => null != eU.Z.getChannelId()),
        a = (0, et.Fh)(e),
        i = r.useRef(new m.V7()),
        [l, o] = r.useState(!1);
    r.useEffect(() => {
        n &&
            a &&
            ((0, e4._)({
                location: "Account.useDeviceChangedTooltip (exposure tracking)",
                autoTrackExposure: !0,
            }),
            t &&
                (o(!0),
                i.current.start(tu, () => {
                    o(!1);
                })));
    }, [n, a, t]);
    let s = r.useCallback(() => {
        o(!1), i.current.stop();
    }, []);
    return (
        (0, j.zq)(() => {
            i.current.stop();
        }),
        {
            shouldShowTooltip: l,
            dismissTooltip: s,
        }
    );
}
function tf() {
    var e, t;
    let n = (0, d.e7)([ez.default], () => ez.default.getCurrentUser()),
        r = (0, d.e7)([eA.default], () => eA.default.getId()),
        i = e8.K.useConfig({ location: "AccountConnected" }).transitionAccountPanel,
        {
            activities: l,
            streaming: o,
            status: c,
        } = (0, d.cj)([eB.Z], () => {
            let e = eB.Z.getActivities();
            return {
                activities: e,
                streaming:
                    null !=
                    e.find((e) => {
                        let { type: t } = e;
                        return t === e7.IIU.STREAMING;
                    }),
                status: eB.Z.getStatus(),
            };
        }),
        m = (0, d.e7)([ek.Z], () => ek.Z.getAnyStreamForUser(r)),
        p = (0, v.Z)({ userId: r }),
        h = e0.ZP.useUserTag(n, { decoration: "never" }),
        x = (0, d.e7)([eG.Z], () => eG.Z.hidePersonalInformation),
        g = (0, d.e7)([eU.Z, eD.Z], () => {
            let e = eU.Z.getChannelId();
            return null != e ? eD.Z.getChannel(e) : null;
        }),
        { mute: b, selfMute: j, suppress: _ } = (0, ej.Z)(g),
        { selfDeaf: C, deaf: S } = (0, ev.Z)(g),
        E = (0, d.e7)([R.C], () => {
            var e;
            return (0, k.fD)()
                ? null == (e = R.C.getCurrentBuildOverride().overrides)
                    ? void 0
                    : e.discord_web
                : null;
        }),
        T = (0, d.e7)([eV.Z], () => eV.Z.getPremiumTypeSubscription()),
        w = (0, d.e7)([eL.Z], () => eL.Z.getSpeakingWhileMuted()),
        D = (0, d.e7)([A.Z], () => A.Z.isFullscreenInContext()),
        Z = (0, d.e7)([eM.Z], () => eM.Z.hasLayers()),
        M = (0, f.s9z)(f.JQI) || Z || e$.s.isDisallowPopupsSet() || D,
        L = (0, eo.b)(),
        U = (0, d.e7)([Q.default], () => null != Q.default.getAwaitingRemoteSessionInfo()),
        F = (0, d.e7)([eF.Z], () => eF.Z.getGuildId()),
        B = null == n ? void 0 : n.avatarDecoration,
        G = (0, P.R)(n, null != F ? F : void 0),
        z = (0, I.Z)(i ? G : B),
        V = eQ.ZP.useName(null != F ? F : void 0, null, n),
        W = null != (t = e0.ZP.useName(n)) ? t : "",
        q = (null == n || null == (e = n.avatarDecoration) ? void 0 : e.skuId) === e9.rL,
        { voiceActivityStatusEnabled: Y } = (0, y.U)({ location: "Account" }),
        [J, X] = (0, ee.G)(null != F ? F : null),
        [$, et] = (0, H.b)(),
        en = K.JH.useExperiment({ location: "Account" }).enabled,
        { analyticsLocations: er } = (0, N.ZP)(O.Z.ACCOUNT),
        ei = (0, ea.K)({
            user: n,
            guildId: i && null != F ? F : void 0,
        }),
        { isQuestBarEmpty: el, hasLoadedQuestBar: es } = (0, ed.Ws)({ location: tt.dr.CONFLICT_CHECKS }),
        ec = (0, d.e7)([eu.Z, ez.default, eZ.Z], () => {
            let e,
                t = eu.Z.getSyncingWith(),
                n = eu.Z.getActivity(),
                a = [];
            if (
                (null != t ? (e = t.partyId) : null != n && null != n.party && null != n.party.id && (e = n.party.id),
                null != e)
            ) {
                var r;
                a = s()(Array.from(null != (r = eZ.Z.getParty(e)) ? r : []))
                    .map((e) => ez.default.getUser(e))
                    .filter(eX.lm)
                    .value();
            }
            return a.length > 1;
        }),
        ep = (0, em.Un)({ location: "AccountConnected" }),
        eh = {
            avatar: [],
            settings: [],
        };
    !M &&
        (q && eh.avatar.push(u.z.PREMIUM_SUBSCRIPTION_APRIL_MARKETING_DECO_TOOLTIP),
        en && eh.avatar.push(u.z.DISPLAY_NAME_STYLES_COACHMARK),
        ep && eh.avatar.push(u.z.WIDGETS_RTC_UPSELL_COACHMARK));
    let { shouldShowTooltip: ex, dismissTooltip: ef } = tx(tn.h7.AUDIO_INPUT),
        { shouldShowTooltip: eg, dismissTooltip: eb } = tx(tn.h7.AUDIO_OUTPUT);
    return (0, a.jsx)(N.Gt, {
        value: er,
        children: (0, a.jsx)(tp, {
            currentUser: n,
            username: i ? V : W,
            transitionAccountPanel: i,
            activities: l,
            applicationStream: m,
            voiceChannel: g,
            dismissibleContents: eh,
            visibleRecurringAvatarDc: J,
            markRecurringAvatarDcAsDismissed: X,
            visibleRecurringDoNotDisturbReminderPopoverDc: $,
            markRecurringDoNotDisturbReminderPopoverDcAsDismissed: et,
            userTag: h,
            hidePrivateData: x,
            occluded: M,
            premiumSubscription: T,
            selfDeaf: C,
            selfMute: j,
            serverDeaf: S,
            serverMute: b,
            speaking: p,
            speakingWhileMuted: w,
            status: c,
            streaming: o,
            suppress: _,
            webBuildOverride: E,
            awaitingRemote: U,
            isEligibleForPomelo: L,
            voiceActivityStatusEnabled: Y,
            nameplate: ei,
            selectedGuildId: F,
            avatarDecoration: z,
            isQuestBarEmpty: el,
            hasLoadedQuestBar: es,
            isListenAlongVisible: ec,
            shouldShowInputDeviceChangedTooltip: ex,
            shouldShowOutputDeviceChangedTooltip: eg,
            dismissInputDeviceChangedTooltip: ef,
            dismissOutputDeviceChangedTooltip: eb,
        }),
    });
}
function tg(e) {
    let t,
        n,
        i,
        {
            webBuildOverride: l,
            isEligibleForPomelo: o,
            onClick: s,
            onContextMenu: c,
            iconForeground: d,
            nameplate: u,
            shouldShowInputDeviceChangedTooltip: m,
            shouldShowOutputDeviceChangedTooltip: p,
        } = e,
        x = r.useRef(null),
        { showRefreshedAudioContextMenu: g } = (0, e3.e)({ location: "SettingsCogButton" }),
        b = !g && (m || p),
        { name: v } = (0, et.p6)(tn.h7.AUDIO_INPUT),
        { name: j } = (0, et.p6)(tn.h7.AUDIO_OUTPUT);
    !g && m
        ? ((t = ta.intl.format(ta.t["18wnuD"], { inputDeviceName: v })),
          (n = ta.intl.formatToPlainString(ta.t["18wnuD"], { inputDeviceName: v })),
          (i = ta.intl.formatToPlainString(ta.t["18wnuD"], { inputDeviceName: v })))
        : !g && p
          ? ((t = ta.intl.format(ta.t["f+DDY/"], { outputDeviceName: j })),
            (n = ta.intl.formatToPlainString(ta.t["f+DDY/"], { outputDeviceName: j })),
            (i = ta.intl.formatToPlainString(ta.t["f+DDY/"], { outputDeviceName: j })))
          : (t =
                null != l
                    ? ta.intl.formatToPlainString(ta.t.Gzh6ZP, { webBuildOverride: l.id })
                    : ta.intl.string(ta.t.cduTBL));
    let _ = f.ewm,
        y = (0, h.i)();
    return (
        (_ = null != l ? f.bgT : o ? f.Ncx : y.Component),
        (0, a.jsx)(
            e2.Z,
            to(
                tl(
                    {
                        ref: x,
                        tooltipText: t,
                        tooltipColor: b ? f.r6K.GREEN : void 0,
                        tooltipForceOpen: b,
                        tooltipClassName: tr.accountButtonsTooltip,
                        tooltipContentClassName: tr.accountButtonsTooltipContent,
                        tooltipPositionKeyStemOverride: n,
                        "aria-label": b ? i : void 0,
                        onClick: s,
                        onContextMenu: c,
                        icon: (0, a.jsx)(_, {
                            size: "refresh_sm",
                            color: "currentColor",
                            className: d,
                        }),
                    },
                    y.events,
                ),
                { plated: null != u },
            ),
        )
    );
}
function tb(e) {
    let t,
        {
            selfMute: n,
            serverMute: i,
            suppress: o,
            awaitingRemote: s,
            iconForeground: m,
            onMouseEnter: p,
            onMouseLeave: h,
            onClick: g,
            onContextMenu: b,
            nameplate: v,
            accountContainerRef: j,
            shouldShowSpeakingWhileMutedTooltip: _,
            shouldShowInputDeviceChangedTooltip: y,
            dismissTooltips: C,
        } = e,
        S = n || o || i,
        E = r.useRef(null),
        T = r.useRef(null),
        P = (0, eR.b)(S),
        { activeVoice: I, mostRecentlyRequestedVoiceId: w, lastInitAttemptMayHaveCrashed: R } = (0, eE.o)(),
        { showSilentLagWarning: k } = (0, eS.Y)(),
        A = null != I,
        D = (0, eC.z)(I),
        U = (0, d.e7)([eU.Z], () => eU.Z.isConnected()),
        { Component: F, events: B, play: z } = P,
        V = i || o ? f.v0G : F,
        H = (0, Z.Z)(n, i, o, s),
        K = k ? ta.intl.string(ta.t.ARRV6m) : null;
    t = _
        ? ta.intl.string(ta.t["29gnR4"])
        : null != K
          ? (0, a.jsxs)("div", {
                className: tr.tooltipWithSubtext,
                children: [
                    (0, a.jsx)(f.Text, {
                        variant: "text-sm/medium",
                        color: "currentColor",
                        children: H,
                    }),
                    (0, a.jsx)(f.Text, {
                        variant: "text-xs/medium",
                        color: "text-feedback-warning",
                        children: K,
                    }),
                ],
            })
          : H;
    let { analyticsLocations: q } = (0, N.ZP)(O.Z.AUDIO_INPUT_BUTTON),
        Y = (0, e_.Hu)({
            location: O.Z.AUDIO_INPUT_BUTTON,
            autoTrackExposure: !0,
        }),
        J = (0, ey.av)({
            location: O.Z.AUDIO_INPUT_BUTTON,
            autoTrackExposure: !0,
        });
    r.useEffect(() => () => z(), [S, z]);
    let X = r.useCallback(
            (e) => {
                b(e, q);
            },
            [b, q],
        ),
        [Q, $] = r.useState(!1),
        ee = r.useCallback((e) => {
            var t;
            if (
                (0, c.kK)(null == e ? void 0 : e.target, Node) &&
                (null == (t = E.current) ? void 0 : t.contains(e.target))
            )
                return x.F;
            $(!1);
        }, []);
    (0, eq.yp)({
        event: e7.CkL.OPEN_VOICE_FILTER_POPOUT,
        handler: () => {
            $(!0);
        },
    });
    let [en, ea] = r.useState(!1);
    r.useEffect(() => {
        let e;
        return (
            U &&
                A &&
                (e = setTimeout(() => {
                    ea(!0), (e = setTimeout(() => ea(!1), td));
                }, 300)),
            () => {
                ea(!1), clearTimeout(e);
            }
        );
    }, [U]);
    let er = r.useCallback(() => {
            R || (0, eT.r5)();
        }, [R]),
        ei = S ? f.TVs.colors.STATUS_DANGER : k ? f.TVs.colors.STATUS_WARNING : "currentColor",
        el = S || k,
        eo = (0, es.Z)({ location: "Account" }),
        { name: ec } = (0, et.p6)(tn.h7.AUDIO_INPUT),
        { showRefreshedAudioContextMenu: ed } = (0, e3.e)({ location: "MicrophoneButton" }),
        { enabledInputProfiles: eu } = (0, eg.G)({ location: "MicrophoneButton" });
    return ed
        ? (0, a.jsx)(N.Gt, {
              value: q,
              children: (0, a.jsx)(f.yRy, {
                  targetElementRef: E,
                  renderPopout: (e) => {
                      let { closePopout: t } = e;
                      return (
                          C(),
                          (0, a.jsx)(N.Gt, {
                              value: q,
                              children: ed
                                  ? (0, a.jsx)(L.Z, {
                                        onInteraction: (0, G.u)("AudioDeviceMenu", O.Z.ACCOUNT),
                                        onClose: t,
                                        maybeRenderPTTCheckbox: !0,
                                        renderInputProfiles: eu.length > 0,
                                        renderInputDevices: !0,
                                        maybeRenderInputMeter: !0,
                                        renderInputVolume: !0,
                                        renderSettingsButton: !0,
                                    })
                                  : (0, a.jsx)(M.default, {
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
                  animation: f.yRy.Animation.FADE,
                  spacing: 4,
                  children: (e, n) => {
                      let { onClick: r } = e,
                          { isShown: i } = n,
                          o = i ? f.u04 : f.CJ0;
                      return (0, a.jsxs)("div", {
                          ref: E,
                          className: l()(tr.micButtonParent, {
                              [tr.hasColorGlow]: el,
                              [tr.popoutOpen]: i,
                          }),
                          children: [
                              (0, a.jsx)(e2.Z, {
                                  "aria-checked": S,
                                  "aria-label": ta.intl.string(ta.t.w4m945),
                                  className: l()({ [tr.micButtonWithMenu]: !0 }),
                                  disabled: s,
                                  icon: (0, a.jsx)(V, {
                                      size: "custom",
                                      width: 20,
                                      height: 20,
                                      color: ei,
                                      className: m,
                                  }),
                                  onClick: g,
                                  onContextMenu: r,
                                  onMouseEnter: () => {
                                      p(), B.onMouseEnter();
                                  },
                                  onMouseLeave: () => {
                                      h(), B.onMouseLeave();
                                  },
                                  orangeGlow: k,
                                  plated: null != v,
                                  redGlow: S,
                                  role: "switch",
                                  tooltipColor: _ ? f.r6K.GREEN : void 0,
                                  tooltipForceOpen: _,
                                  tooltipText: t,
                              }),
                              (0, a.jsx)(e2.Z, {
                                  "aria-label": y
                                      ? ta.intl.formatToPlainString(ta.t["18wnuD"], { inputDeviceName: ec })
                                      : ta.intl.string(ta.t.fRzCbB),
                                  className: l()(tr.buttonChevron, { [tr.popoutOpen]: i }),
                                  disabled: s,
                                  icon: (0, a.jsx)(o, {
                                      className: tr.buttonChevronIcon,
                                      size: "custom",
                                      width: 12,
                                      height: 12,
                                      color: ei,
                                  }),
                                  onClick: r,
                                  onContextMenu: r,
                                  onMouseEnter: p,
                                  onMouseLeave: h,
                                  orangeGlow: k,
                                  plated: null != v,
                                  redGlow: S,
                                  tooltipClassName: tr.accountButtonsTooltip,
                                  tooltipColor: y ? f.r6K.GREEN : void 0,
                                  tooltipContentClassName: tr.accountButtonsTooltipContent,
                                  tooltipForceOpen: y,
                                  tooltipPositionKeyStemOverride: y
                                      ? ta.intl.formatToPlainString(ta.t["18wnuD"], { inputDeviceName: ec })
                                      : void 0,
                                  tooltipShouldShow: !i,
                                  tooltipText: y
                                      ? ta.intl.format(ta.t["18wnuD"], { inputDeviceName: ec })
                                      : ta.intl.string(ta.t.fRzCbB),
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
                  className: l()(tr.micButtonParent, { [tr.hasColorGlow]: el }),
                  children: [
                      (0, a.jsx)(e2.Z, {
                          tooltipText: t,
                          tooltipColor: _ ? f.r6K.GREEN : void 0,
                          tooltipForceOpen: _,
                          plated: null != v,
                          onMouseEnter: () => {
                              p(), B.onMouseEnter();
                          },
                          onMouseLeave: () => {
                              h(), B.onMouseLeave();
                          },
                          icon: (0, a.jsx)(V, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: ei,
                              className: m,
                          }),
                          onClick: g,
                          onContextMenu: X,
                          role: "switch",
                          className: l()({ [tr.micButtonWithMenu]: Y }),
                          orangeGlow: k,
                          redGlow: S,
                          "aria-label": ta.intl.string(ta.t.w4m945),
                          "aria-checked": S,
                          disabled: s,
                      }),
                      Y &&
                          (0, a.jsx)(f.yRy, {
                              targetElementRef: j,
                              position: "top",
                              align: "left",
                              nudgeAlignIntoViewport: !1,
                              animation: f.yRy.Animation.FADE,
                              useMouseEnter: !0,
                              ignoreModalClicks: !0,
                              onRequestOpen: er,
                              onRequestClose: ee,
                              shouldShow: Q,
                              renderPopout: (e) => {
                                  let { closePopout: t } = e;
                                  return (0, a.jsx)(eI.l, { onSettingsButtonClick: t });
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
                                  let l = i ? f.u04 : f.CJ0,
                                      o = [];
                                  return (
                                      !i &&
                                          (eo && o.push(u.z.VOICE_FILTER_EARLY_ACCESS_COACHMARK),
                                          o.push(u.z.VOICE_FILTER_LAUNCH_COACHMARK),
                                          J && U && !A && o.push(u.z.VOICE_FILTER_FIRST_USE_COACHMARK)),
                                      (0, a.jsx)("div", {
                                          children: (0, a.jsx)(W.ZP, {
                                              bypassAutoDismiss: !0,
                                              contentTypes: o,
                                              children: (e) => {
                                                  let { visibleContent: t, markAsDismissed: i } = e,
                                                      o = null;
                                                  t === u.z.VOICE_FILTER_EARLY_ACCESS_COACHMARK
                                                      ? (o = (0, a.jsx)(eP.U, {
                                                            markAsDismissed: i,
                                                            onCTA: () => $(!0),
                                                        }))
                                                      : t === u.z.VOICE_FILTER_LAUNCH_COACHMARK
                                                        ? (o = (0, a.jsx)(eN.n, {
                                                              markAsDismissed: i,
                                                              onCTA: () => $(!0),
                                                          }))
                                                        : t === u.z.VOICE_FILTER_FIRST_USE_COACHMARK &&
                                                          (o = (0, a.jsx)(eO.v, {
                                                              markAsDismissed: i,
                                                              onCTA: () => $(!0),
                                                          }));
                                                  let c = () =>
                                                      (0, a.jsx)(
                                                          e2.Z,
                                                          tl(
                                                              {
                                                                  ref: T,
                                                                  plated: null != v,
                                                                  tooltipForceOpen: en,
                                                                  tooltipColor: en ? f.r6K.GREEN : void 0,
                                                                  tooltipContentClassName: en
                                                                      ? tr.voiceFilterWarning
                                                                      : void 0,
                                                                  tooltipText: en
                                                                      ? (0, a.jsxs)(a.Fragment, {
                                                                            children: [
                                                                                (0, a.jsx)("img", {
                                                                                    alt:
                                                                                        null != D
                                                                                            ? ta.intl.string(D.name)
                                                                                            : "",
                                                                                    src: null == D ? void 0 : D.iconURL,
                                                                                    draggable: !1,
                                                                                }),
                                                                                (0, a.jsx)(f.Text, {
                                                                                    variant: "text-sm/medium",
                                                                                    color: "always-white",
                                                                                    children: ta.intl.string(
                                                                                        ta.t.VlC1de,
                                                                                    ),
                                                                                }),
                                                                            ],
                                                                        })
                                                                      : ta.intl.string(ta.t.Hapb4J),
                                                                  icon: (0, a.jsx)(l, {
                                                                      className: tr.buttonChevronIcon,
                                                                      size: "custom",
                                                                      width: 12,
                                                                      height: 12,
                                                                      color: ei,
                                                                  }),
                                                                  role: "button",
                                                                  className: tr.buttonChevron,
                                                                  orangeGlow: k,
                                                                  redGlow: S,
                                                                  "aria-label": ta.intl.string(ta.t.Hapb4J),
                                                                  disabled: s,
                                                                  onClick: (e) => {
                                                                      i(te.L.INDIRECT_ACTION),
                                                                          n(e),
                                                                          null != w && !Q && R
                                                                              ? (0, ew.$)(() => $(!0))
                                                                              : $(!Q);
                                                                  },
                                                              },
                                                              r,
                                                          ),
                                                      );
                                                  return null != o
                                                      ? (0, a.jsx)(f.yRy, {
                                                            targetElementRef: T,
                                                            renderPopout: () => o,
                                                            animation: f.yRy.Animation.TRANSLATE,
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
function tv(e) {
    let {
            selfDeaf: t,
            serverDeaf: n,
            awaitingRemote: i,
            onClick: o,
            onContextMenu: s,
            iconForeground: c,
            nameplate: d,
            shouldShowOutputDeviceChangedTooltip: u,
            dismissTooltips: m,
        } = e,
        h = t || n,
        {
            Component: x,
            play: g,
            events: { onMouseEnter: b, onMouseLeave: v },
        } = (0, p.l)(h ? "undeafen" : "deafen"),
        j = n ? f.Vm4 : x,
        { name: _ } = (0, et.p6)(tn.h7.AUDIO_OUTPUT),
        { showRefreshedAudioContextMenu: y } = (0, e3.e)({ location: "HeadphonesButton" }),
        C = (0, D.Z)(t, n, i),
        { analyticsLocations: S } = (0, N.ZP)(O.Z.AUDIO_OUTPUT_BUTTON),
        E = r.useRef(null);
    r.useEffect(() => () => g(), [h, g]);
    let T = r.useCallback(
        (e) => {
            s(e, S);
        },
        [s, S],
    );
    return y
        ? (0, a.jsx)(N.Gt, {
              value: S,
              children: (0, a.jsx)(f.yRy, {
                  targetElementRef: E,
                  renderPopout: (e) => {
                      let { closePopout: t } = e;
                      return (
                          m(),
                          (0, a.jsx)(N.Gt, {
                              value: S,
                              children: (0, a.jsx)(L.Z, {
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
                  animation: f.yRy.Animation.FADE,
                  spacing: 4,
                  children: (e, t) => {
                      let { onClick: r } = e,
                          { isShown: s } = t,
                          m = s ? f.u04 : f.CJ0;
                      return (0, a.jsxs)("div", {
                          ref: E,
                          className: l()(tr.micButtonParent, {
                              [tr.hasColorGlow]: h,
                              [tr.popoutOpen]: s,
                          }),
                          children: [
                              (0, a.jsx)(e2.Z, {
                                  "aria-checked": h,
                                  "aria-label": ta.intl.string(ta.t.wjcRFX),
                                  className: tr.micButtonWithMenu,
                                  disabled: i,
                                  icon: (0, a.jsx)(j, {
                                      size: "custom",
                                      width: 20,
                                      height: 20,
                                      color: h ? f.TVs.colors.STATUS_DANGER : "currentColor",
                                      className: c,
                                  }),
                                  iconForeground: h ? tr.strikethrough : void 0,
                                  innerClassName: l()({ [tr.redIcon]: n }),
                                  onClick: o,
                                  onContextMenu: r,
                                  onMouseEnter: b,
                                  onMouseLeave: v,
                                  plated: null != d,
                                  redGlow: h,
                                  role: "switch",
                                  tooltipText: C,
                              }),
                              (0, a.jsx)(e2.Z, {
                                  "aria-label": u
                                      ? ta.intl.formatToPlainString(ta.t["f+DDY/"], { outputDeviceName: _ })
                                      : ta.intl.string(ta.t.aA4Vce),
                                  className: l()(tr.buttonChevron, { [tr.popoutOpen]: s }),
                                  disabled: i,
                                  icon: (0, a.jsx)(m, {
                                      className: tr.buttonChevronIcon,
                                      size: "custom",
                                      width: 12,
                                      height: 12,
                                      color: h ? f.TVs.colors.STATUS_DANGER : "currentColor",
                                  }),
                                  onClick: r,
                                  onContextMenu: r,
                                  plated: null != d,
                                  redGlow: h,
                                  tooltipClassName: tr.accountButtonsTooltip,
                                  tooltipColor: u ? f.r6K.GREEN : void 0,
                                  tooltipContentClassName: tr.accountButtonsTooltipContent,
                                  tooltipForceOpen: u,
                                  tooltipPositionKeyStemOverride: u
                                      ? ta.intl.formatToPlainString(ta.t["f+DDY/"], { outputDeviceName: _ })
                                      : void 0,
                                  tooltipShouldShow: !s,
                                  tooltipText: u
                                      ? ta.intl.format(ta.t["f+DDY/"], { outputDeviceName: _ })
                                      : ta.intl.string(ta.t.aA4Vce),
                              }),
                          ],
                      });
                  },
              }),
          })
        : (0, a.jsx)(N.Gt, {
              value: S,
              children: (0, a.jsx)(e2.Z, {
                  plated: null != d,
                  tooltipText: C,
                  onMouseEnter: b,
                  onMouseLeave: v,
                  icon: (0, a.jsx)(j, {
                      size: "custom",
                      width: 20,
                      height: 20,
                      color: h ? f.TVs.colors.STATUS_DANGER : "currentColor",
                      className: c,
                  }),
                  onClick: o,
                  onContextMenu: T,
                  innerClassName: l()({ [tr.redIcon]: n }),
                  iconForeground: h ? tr.strikethrough : void 0,
                  role: "switch",
                  redGlow: h,
                  "aria-label": ta.intl.string(ta.t.wjcRFX),
                  "aria-checked": h,
                  disabled: i,
              }),
          });
}
