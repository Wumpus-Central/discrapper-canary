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
    s = n(392711),
    o = n.n(s),
    c = n(374470),
    d = n(442837),
    u = n(704215),
    m = n(846519),
    p = n(400354),
    h = n(789639),
    x = n(930295),
    f = n(481060),
    b = n(239091),
    g = n(410575),
    v = n(586902),
    j = n(493773),
    _ = n(980591),
    y = n(468363),
    C = n(326255),
    E = n(771173),
    N = n(963056),
    S = n(570928),
    T = n(100527),
    O = n(906732),
    P = n(541638),
    I = n(676742),
    k = n(1585),
    w = n(304761),
    R = n(865427),
    A = n(358221),
    Z = n(571250),
    D = n(628581),
    L = n(659580),
    M = n(855844),
    U = n(55311),
    F = n(575175),
    B = n(522651),
    G = n(795318),
    z = n(64220),
    V = n(427217),
    H = n(812055),
    W = n(243778),
    K = n(594928),
    q = n(181430),
    Y = n(821795),
    X = n(287647),
    J = n(892567),
    $ = n(258609),
    Q = n(53891),
    ee = n(291533),
    et = n(72897),
    en = n(78933),
    ea = n(850020),
    er = n(379839),
    ei = n(359135),
    el = n(516817),
    es = n(332473),
    eo = n(963590),
    ec = n(562705),
    ed = n(667105),
    eu = n(768419),
    em = n(172416),
    ep = n(184301),
    eh = n(670188),
    ex = n(620799),
    ef = n(313789),
    eb = n(846071),
    eg = n(518596),
    ev = n(879815),
    ej = n(294629),
    e_ = n(875527),
    ey = n(702977),
    eC = n(56848),
    eE = n(940315),
    eN = n(378441),
    eS = n(358820),
    eT = n(723547),
    eO = n(361045),
    eP = n(74650),
    eI = n(306609),
    ek = n(170293),
    ew = n(8404),
    eR = n(199902),
    eA = n(314897),
    eZ = n(592125),
    eD = n(831506),
    eL = n(819640),
    eM = n(131951),
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
    eX = n(70956),
    eJ = n(823379),
    e$ = n(5192),
    eQ = n(374023),
    e0 = n(51144),
    e1 = n(998502),
    e8 = n(660230),
    e4 = n(853170),
    e3 = n(422202),
    e6 = n(870569),
    e2 = n(345243),
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
function ts(e, t) {
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
let to = e1.ZP.getEnableHardwareAcceleration() ? f.Xo$ : f.qEK,
    tc = 2 * eX.Z.Millis.MINUTE,
    td = 3 * eX.Z.Millis.SECOND,
    tu = 5 * eX.Z.Millis.SECOND;
function tm(e) {
    let {
            ref: t,
            speaking: n,
            streaming: i,
            currentUser: s,
            status: o,
            handleClick: c,
            handleMouseLeave: d,
            renderNameTag: u,
            nameplate: m,
            selectedGuildId: p,
            transitionAccountPanel: h,
            avatarDecoration: x,
            "data-jump-section": b,
        } = e,
        v = r.useRef(null),
        j = null != t ? t : v,
        y = (0, eW.NZ)({
            avatarDecoration: x,
            size: (0, k.y9)(f.EFr.SIZE_32),
        }),
        {
            updateOpenPopoutRef: C,
            highlightBadge: E,
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
        S = (0, er.A)(m);
    if (null == s) return null;
    let T = h && p !== e7.I_8 && p !== e7.ME && null != p ? p : void 0;
    return (0, a.jsx)(g.Z, {
        object: e7.qAy.AVATAR,
        children: (0, a.jsx)(eh.Z, {
            user: s,
            targetElementRef: j,
            clickTrap: !0,
            preload: () =>
                (0, ep.Z)(s.id, s.getAvatarURL(T, eh.I), {
                    type: "account_popout",
                    withMutualGuilds: !1,
                    withMutualFriends: !1,
                    guildId: T,
                }),
            renderPopout: (e, t) => {
                let { closePopout: n, setPopoutRef: r } = e;
                return (0, a.jsx)(en.Z, {
                    currentUser: s,
                    highlightBadge: E,
                    openedAt: t,
                    onClose: () => {
                        null == n || n();
                    },
                    setPopoutRef: r,
                    guildId: T,
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
                d(), N(void 0);
            },
            children: (e) => (
                C(e),
                (0, a.jsxs)(
                    f.P3F,
                    ts(
                        tl(
                            {
                                innerRef: j,
                                style: S,
                            },
                            e,
                        ),
                        {
                            onClick: (t) => {
                                var n;
                                null == (n = e.onClick) || n.call(e, t), null == c || c(t);
                            },
                            "aria-label": ta.intl.string(ta.t["3Uj+2t"]),
                            "data-jump-section": b,
                            className: l()(tr.avatarWrapper, { [tr.plated]: null != m }),
                            children: [
                                (0, a.jsx)(to, {
                                    size: f.EFr["SIZE_".concat(32)],
                                    src: s.getAvatarURL(h ? p : void 0, 28, !1),
                                    avatarDecoration: y,
                                    "aria-label": s.username,
                                    status: i ? e7.Skl.STREAMING : o,
                                    isSpeaking: n,
                                    className: tr.avatar,
                                }),
                                (0, a.jsx)("div", {
                                    className: l()(tr.nameTag, { [tr.canCopy]: eK.wS }),
                                    children: u(null == s ? void 0 : s.displayNameStyles),
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
                ta.intl.string(ta.t.MSaeTU),
                ta.intl.string(ta.t.UmrCw8),
                ta.intl.string(ta.t.gKE0Ji),
                ta.intl.string(ta.t["4DSKbm"]),
                ta.intl.string(ta.t["+8ENdX"]),
                ta.intl.string(ta.t.GlWHv7),
                ta.intl.string(ta.t.hIzxU1),
                ta.intl.string(ta.t["26uMPD"]),
                ta.intl.string(ta.t.uFs7R0),
                ta.intl.string(ta.t.bLXdcX),
                ta.intl.string(ta.t.gPg9fX),
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
                voiceActivityStatusEnabled: s,
                voiceChannel: o,
            } = this.props;
        if (null == r) return null;
        if (
            (0, C.Z)({
                activities: t,
                status: i,
                applicationStream: n,
                voiceChannel: s ? o : void 0,
            })
        )
            return (0, a.jsx)(S.Z, {
                hoverText: l,
                forceHover: e,
                children: (0, a.jsx)(E.Z, {
                    location: "Account",
                    user: r,
                    activities: t,
                    applicationStream: n,
                    voiceChannel: s ? o : void 0,
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
            ? (0, a.jsx)(S.Z, {
                  hoverText: l,
                  forceHover: e,
                  children: (0, a.jsx)(V.Z, {
                      activity: c,
                      emojiClassName: tr.emoji,
                      className: tr.customStatus,
                  }),
              })
            : null != i && i !== e7.Skl.UNKNOWN && r.hasUniqueUsername()
              ? (0, a.jsx)(S.Z, {
                    hoverText: l,
                    forceHover: e,
                    children: (0, a.jsx)(N.Z, { text: e0.ZP.humanizeStatus(i) }),
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
            ts(tl({}, this.props), {
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
            markRecurringDoNotDisturbReminderPopoverDcAsDismissed: s,
            isQuestBarEmpty: o,
            hasLoadedQuestBar: c,
        } = this.props;
        if (null == t) return null;
        if (!(null != this.avatarWithPopoutRef.current && o && c))
            return this.renderAvatarWithPopout({ focusSectionProps: e });
        if (r === u.z.GUILD_TAG_AVAILABLE_COACHMARK) {
            var d;
            return (0, a.jsx)(Q.ZP, {
                guildId: null != (d = this.props.selectedGuildId) ? d : null,
                onDismiss: i,
                targetElementRef: this.avatarWithPopoutRef,
                children: this.renderAvatarWithPopout({ focusSectionProps: e }),
            });
        }
        return l === u.z.DO_NOT_DISTURB_REMINDER_POPOVER
            ? (0, a.jsx)(H.Z, {
                  targetElementRef: this.avatarWithPopoutRef,
                  onDismiss: s,
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
                                      return (0, a.jsx)(X.e, {
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
            s = this.state.hovered;
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
                                  hovered: s,
                                  placement: ei.i.ACCOUNT,
                              }),
                              this.renderNameZone(e),
                              (0, a.jsx)(
                                  th,
                                  ts(tl({}, this.props, this.state), {
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
                (0, F.Z)(e, t, e7.jXE.ACCOUNT_PANEL), (0, B.v)(T.Z.ACCOUNT, B.d.MIC, n);
            }),
            ti(this, "handleToggleSelfDeaf", () => {
                let { serverDeaf: e, selfDeaf: t } = this.props;
                (0, U.Z)(e, e7.jXE.ACCOUNT_PANEL), (0, B.v)(T.Z.ACCOUNT, B.d.DEAFEN, !t);
            }),
            ti(this, "handleOpenAccountSettings", () => {
                this.dismissTooltips(),
                    eU.Z.isConnected()
                        ? (0, eg.openUserSettings)(ef.n.VOICE_AND_VIDEO_PANEL, { section: e7.oAB.VOICE })
                        : (0, eg.openUserSettings)();
            }),
            ti(this, "handleOpenSettingsContextMenu", (e) => {
                let { currentUser: t } = this.props;
                null != t &&
                    (0, b.jW)(e, async () => {
                        let { default: e } = await n.e("2535").then(n.bind(n, 923422));
                        return (n) =>
                            (0, a.jsx)(
                                e,
                                ts(tl({}, n), {
                                    user: t,
                                    premiumSubscription: this.props.premiumSubscription,
                                    webBuildOverride: this.props.webBuildOverride,
                                    onInteraction: (0, G.u)("UserSettingsCogContextMenu", T.Z.ACCOUNT),
                                }),
                            );
                    });
            }),
            ti(this, "audioOnInteractionHandler", (0, G.u)("AudioDeviceMenu", T.Z.ACCOUNT)),
            ti(this, "handleInputAudioContextMenu", (e, t) => {
                this.dismissTooltips(),
                    (0, b.jW)(e, async () => {
                        let { default: e } = await Promise.resolve().then(n.bind(n, 659580));
                        return () => {
                            let { enabledInputProfiles: n } = (0, eb.G)({ location: "Account" });
                            return (0, a.jsx)(O.Gt, {
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
            ti(this, "handleOutputAudioContextMenu", (e, t) => {
                this.dismissTooltips(),
                    (0, b.jW)(e, async () => {
                        let { default: e } = await Promise.resolve().then(n.bind(n, 659580));
                        return () =>
                            (0, a.jsx)(O.Gt, {
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
                    { hoveringOnMute: s } = this.state,
                    o =
                        void 0 === this.lastSpeakingWhileMutedNotificationTime ||
                        Date.now() - this.lastSpeakingWhileMutedNotificationTime > tc;
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
            ti(this, "renderNameTag", (e) => {
                let { currentUser: t, isDisplayNameStylesEnabled: n, username: r } = this.props;
                return null == t
                    ? null
                    : (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)("div", {
                                  className: tr.panelTitleContainer,
                                  children: (0, a.jsx)(e5.Z, {
                                      className: l()({ [tr.withDisplayNameStyles]: n && null != e }),
                                      children: (0, a.jsx)(J.Z, {
                                          userName: r,
                                          displayNameStyles: e,
                                          effectDisplayType: this.state.hovered ? Y.F.ANIMATED : Y.F.STATIC,
                                          loop: !0,
                                          inProfile: !0,
                                      }),
                                  }),
                              }),
                              (0, a.jsx)("div", {
                                  className: tr.panelSubtextContainer,
                                  children: (0, a.jsx)(e2.Z, { children: this.renderStatus() }),
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
            suppress: s,
            shouldShowSpeakingWhileMutedTooltip: o,
            isEligibleForPomelo: c,
            webBuildOverride: d,
            handleMouseEnterMute: u,
            handleMouseLeaveMute: m,
            handleToggleSelfDeaf: p,
            handleToggleSelfMute: h,
            handleInputAudioContextMenu: x,
            handleOutputAudioContextMenu: f,
            handleOpenAccountSettings: b,
            handleOpenSettingsContextMenu: g,
            dismissibleContents: v,
            nameplate: j,
            accountContainerRef: _,
            shouldShowInputDeviceChangedTooltip: y = !1,
            shouldShowOutputDeviceChangedTooltip: C = !1,
            dismissTooltips: E,
        } = e,
        N = (0, er.A)(j);
    return (0, a.jsxs)("div", {
        className: tr.buttons,
        style: N,
        children: [
            (0, a.jsx)(tg, {
                accountContainerRef: _,
                selfMute: n,
                serverMute: i,
                suppress: s,
                awaitingRemote: r,
                onMouseEnter: u,
                onMouseLeave: m,
                onClick: h,
                onContextMenu: x,
                iconForeground: null != j ? tr.iconForeground : void 0,
                nameplate: j,
                shouldShowInputDeviceChangedTooltip: y,
                shouldShowSpeakingWhileMutedTooltip: o,
                dismissTooltips: E,
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
                dismissTooltips: E,
            }),
            (0, a.jsx)(tb, {
                isEligibleForPomelo: c,
                webBuildOverride: d,
                onClick: b,
                onContextMenu: g,
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
    let { shouldShowDeviceChangedNotifications: t } = (0, e3.P)({
            location: "Account.useDeviceChangedTooltip",
            autoTrackExposure: !1,
        }),
        n = (0, d.e7)([eU.Z], () => null != eU.Z.getChannelId()),
        a = (0, et.Fh)(e),
        i = r.useRef(new m.V7()),
        [l, s] = r.useState(!1);
    r.useEffect(() => {
        n &&
            a &&
            ((0, e3._)({
                location: "Account.useDeviceChangedTooltip (exposure tracking)",
                autoTrackExposure: !0,
            }),
            t &&
                (s(!0),
                i.current.start(tu, () => {
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
function tf() {
    var e, t;
    let n = (0, d.e7)([ez.default], () => ez.default.getCurrentUser()),
        r = (0, d.e7)([eA.default], () => eA.default.getId()),
        i = e8.K.useConfig({ location: "AccountConnected" }).transitionAccountPanel,
        {
            activities: l,
            streaming: s,
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
        m = (0, d.e7)([eR.Z], () => eR.Z.getAnyStreamForUser(r)),
        p = (0, v.Z)({ userId: r }),
        h = e0.ZP.useUserTag(n, { decoration: "never" }),
        x = (0, d.e7)([eG.Z], () => eG.Z.hidePersonalInformation),
        b = (0, d.e7)([eU.Z, eZ.Z], () => {
            let e = eU.Z.getChannelId();
            return null != e ? eZ.Z.getChannel(e) : null;
        }),
        { mute: g, selfMute: j, suppress: _ } = (0, ej.Z)(b),
        { selfDeaf: C, deaf: E } = (0, ev.Z)(b),
        N = (0, d.e7)([w.C], () => {
            var e;
            return (0, R.fD)()
                ? null == (e = w.C.getCurrentBuildOverride().overrides)
                    ? void 0
                    : e.discord_web
                : null;
        }),
        S = (0, d.e7)([eV.Z], () => eV.Z.getPremiumTypeSubscription()),
        k = (0, d.e7)([eM.Z], () => eM.Z.getSpeakingWhileMuted()),
        Z = (0, d.e7)([A.Z], () => A.Z.isFullscreenInContext()),
        D = (0, d.e7)([eL.Z], () => eL.Z.hasLayers()),
        L = (0, f.s9z)(f.JQI) || D || eQ.s.isDisallowPopupsSet() || Z,
        M = (0, es.b)(),
        U = (0, d.e7)([$.Z], () => null != $.Z.getAwaitingRemoteSessionInfo()),
        F = (0, d.e7)([eF.Z], () => eF.Z.getGuildId()),
        B = null == n ? void 0 : n.avatarDecoration,
        G = (0, P.R)(n, null != F ? F : void 0),
        z = (0, I.Z)(i ? G : B),
        V = e$.ZP.useName(null != F ? F : void 0, null, n),
        W = null != (t = e0.ZP.useName(n)) ? t : "",
        Y = (null == n || null == (e = n.avatarDecoration) ? void 0 : e.skuId) === e9.rL,
        { voiceActivityStatusEnabled: X } = (0, y.U)({ location: "Account" }),
        [J, Q] = (0, ee.G)(null != F ? F : null),
        [et, en] = (0, H.b)(),
        er = K.JH.useExperiment({ location: "Account" }).enabled,
        { analyticsLocations: ei } = (0, O.ZP)(T.Z.ACCOUNT),
        el = (0, ea.K)({
            user: n,
            guildId: i && null != F ? F : void 0,
        }),
        { isQuestBarEmpty: eo, hasLoadedQuestBar: ec } = (0, ed.Ws)({ location: tt.dr.CONFLICT_CHECKS }),
        ep = (0, d.e7)([eu.Z, ez.default, eD.Z], () => {
            let e,
                t = eu.Z.getSyncingWith(),
                n = eu.Z.getActivity(),
                a = [];
            if (
                (null != t ? (e = t.partyId) : null != n && null != n.party && null != n.party.id && (e = n.party.id),
                null != e)
            ) {
                var r;
                a = o()(Array.from(null != (r = eD.Z.getParty(e)) ? r : []))
                    .map((e) => ez.default.getUser(e))
                    .filter(eJ.lm)
                    .value();
            }
            return a.length > 1;
        }),
        eh = (0, em.U)({ location: "AccountConnected" }),
        ex = {
            avatar: [],
            settings: [],
        };
    !L &&
        (Y && ex.avatar.push(u.z.PREMIUM_SUBSCRIPTION_APRIL_MARKETING_DECO_TOOLTIP),
        er && ex.avatar.push(u.z.DISPLAY_NAME_STYLES_COACHMARK),
        eh && ex.avatar.push(u.z.WIDGETS_RTC_UPSELL_COACHMARK));
    let ef = (0, q.Y)({ location: "AccountConnected" }),
        { shouldShowTooltip: eb, dismissTooltip: eg } = tx(tn.h7.AUDIO_INPUT),
        { shouldShowTooltip: e_, dismissTooltip: ey } = tx(tn.h7.AUDIO_OUTPUT);
    return (0, a.jsx)(O.Gt, {
        value: ei,
        children: (0, a.jsx)(tp, {
            currentUser: n,
            username: i ? V : W,
            transitionAccountPanel: i,
            activities: l,
            applicationStream: m,
            voiceChannel: b,
            dismissibleContents: ex,
            visibleRecurringAvatarDc: J,
            markRecurringAvatarDcAsDismissed: Q,
            visibleRecurringDoNotDisturbReminderPopoverDc: et,
            markRecurringDoNotDisturbReminderPopoverDcAsDismissed: en,
            userTag: h,
            hidePrivateData: x,
            occluded: L,
            premiumSubscription: S,
            selfDeaf: C,
            selfMute: j,
            serverDeaf: E,
            serverMute: g,
            speaking: p,
            speakingWhileMuted: k,
            status: c,
            streaming: s,
            suppress: _,
            webBuildOverride: N,
            awaitingRemote: U,
            isEligibleForPomelo: M,
            voiceActivityStatusEnabled: X,
            nameplate: el,
            selectedGuildId: F,
            avatarDecoration: z,
            isQuestBarEmpty: eo,
            hasLoadedQuestBar: ec,
            isListenAlongVisible: ep,
            isDisplayNameStylesEnabled: ef,
            shouldShowInputDeviceChangedTooltip: eb,
            shouldShowOutputDeviceChangedTooltip: e_,
            dismissInputDeviceChangedTooltip: eg,
            dismissOutputDeviceChangedTooltip: ey,
        }),
    });
}
function tb(e) {
    let t,
        n,
        i,
        {
            webBuildOverride: l,
            isEligibleForPomelo: s,
            onClick: o,
            onContextMenu: c,
            iconForeground: d,
            nameplate: u,
            shouldShowInputDeviceChangedTooltip: m,
            shouldShowOutputDeviceChangedTooltip: p,
        } = e,
        x = r.useRef(null),
        { showRefreshedAudioContextMenu: b } = (0, e4.e)({ location: "SettingsCogButton" }),
        g = !b && (m || p),
        { name: v } = (0, et.p6)(tn.h7.AUDIO_INPUT),
        { name: j } = (0, et.p6)(tn.h7.AUDIO_OUTPUT);
    !b && m
        ? ((t = ta.intl.format(ta.t["18wnuL"], { inputDeviceName: v })),
          (n = ta.intl.formatToPlainString(ta.t["18wnuL"], { inputDeviceName: v })),
          (i = ta.intl.formatToPlainString(ta.t["18wnuL"], { inputDeviceName: v })))
        : !b && p
          ? ((t = ta.intl.format(ta.t["f+DDY2"], { outputDeviceName: j })),
            (n = ta.intl.formatToPlainString(ta.t["f+DDY2"], { outputDeviceName: j })),
            (i = ta.intl.formatToPlainString(ta.t["f+DDY2"], { outputDeviceName: j })))
          : (t =
                null != l
                    ? ta.intl.formatToPlainString(ta.t.Gzh6ZG, { webBuildOverride: l.id })
                    : ta.intl.string(ta.t.cduTBA));
    let _ = f.ewm,
        y = (0, h.i)();
    return (
        (_ = null != l ? f.bgT : s ? f.Ncx : y.Component),
        (0, a.jsx)(
            e6.Z,
            ts(
                tl(
                    {
                        ref: x,
                        tooltipText: t,
                        tooltipColor: g ? f.FGA.GREEN : void 0,
                        tooltipForceOpen: g,
                        tooltipClassName: tr.accountButtonsTooltip,
                        tooltipContentClassName: tr.accountButtonsTooltipContent,
                        tooltipPositionKeyStemOverride: n,
                        "aria-label": g ? i : void 0,
                        onClick: o,
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
function tg(e) {
    let t,
        {
            selfMute: n,
            serverMute: i,
            suppress: s,
            awaitingRemote: o,
            iconForeground: m,
            onMouseEnter: p,
            onMouseLeave: h,
            onClick: b,
            onContextMenu: g,
            nameplate: v,
            accountContainerRef: j,
            shouldShowSpeakingWhileMutedTooltip: _,
            shouldShowInputDeviceChangedTooltip: y,
            dismissTooltips: C,
        } = e,
        E = n || s || i,
        N = r.useRef(null),
        S = r.useRef(null),
        P = (0, ew.b)(E),
        { activeVoice: I, mostRecentlyRequestedVoiceId: k, lastInitAttemptMayHaveCrashed: w } = (0, eN.o)(),
        { showSilentLagWarning: R } = (0, eE.Y)(),
        A = null != I,
        Z = (0, eC.z)(I),
        U = (0, d.e7)([eU.Z], () => eU.Z.isConnected()),
        { Component: F, events: B, play: z } = P,
        V = i || s ? f.v0G : F,
        H = (0, D.Z)(n, i, s, o),
        K = R ? ta.intl.string(ta.t.ARRV6u) : null;
    t = _
        ? ta.intl.string(ta.t["29gnR0"])
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
    let { analyticsLocations: q } = (0, O.ZP)(T.Z.AUDIO_INPUT_BUTTON),
        Y = (0, e_.Hu)({
            location: T.Z.AUDIO_INPUT_BUTTON,
            autoTrackExposure: !0,
        }),
        X = (0, ey.av)({
            location: T.Z.AUDIO_INPUT_BUTTON,
            autoTrackExposure: !0,
        });
    r.useEffect(() => () => z(), [E, z]);
    let J = r.useCallback(
            (e) => {
                g(e, q);
            },
            [g, q],
        ),
        [$, Q] = r.useState(!1),
        ee = r.useCallback((e) => {
            var t;
            if (
                (0, c.kK)(null == e ? void 0 : e.target, Node) &&
                (null == (t = N.current) ? void 0 : t.contains(e.target))
            )
                return x.F;
            Q(!1);
        }, []);
    (0, eq.yp)({
        event: e7.CkL.OPEN_VOICE_FILTER_POPOUT,
        handler: () => {
            Q(!0);
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
            w || (0, eS.r5)();
        }, [w]),
        ei = E ? f.TVs.colors.STATUS_DANGER : R ? f.TVs.colors.STATUS_WARNING : "currentColor",
        el = E || R,
        es = (0, eo.Z)({ location: "Account" }),
        { name: ec } = (0, et.p6)(tn.h7.AUDIO_INPUT),
        { showRefreshedAudioContextMenu: ed } = (0, e4.e)({ location: "MicrophoneButton" }),
        { enabledInputProfiles: eu } = (0, eb.G)({ location: "MicrophoneButton" });
    return ed
        ? (0, a.jsx)(O.Gt, {
              value: q,
              children: (0, a.jsx)(f.yRy, {
                  targetElementRef: N,
                  renderPopout: (e) => {
                      let { closePopout: t } = e;
                      return (
                          C(),
                          (0, a.jsx)(O.Gt, {
                              value: q,
                              children: ed
                                  ? (0, a.jsx)(M.Z, {
                                        onInteraction: (0, G.u)("AudioDeviceMenu", T.Z.ACCOUNT),
                                        onClose: t,
                                        maybeRenderPTTCheckbox: !0,
                                        renderInputProfiles: eu.length > 0,
                                        renderInputDevices: !0,
                                        maybeRenderInputMeter: !0,
                                        renderInputVolume: !0,
                                        renderSettingsButton: !0,
                                    })
                                  : (0, a.jsx)(L.default, {
                                        onInteraction: (0, G.u)("AudioDeviceMenu", T.Z.ACCOUNT),
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
                          s = i ? f.u04 : f.CJ0;
                      return (0, a.jsxs)("div", {
                          ref: N,
                          className: l()(tr.micButtonParent, {
                              [tr.hasColorGlow]: el,
                              [tr.popoutOpen]: i,
                          }),
                          children: [
                              (0, a.jsx)(e6.Z, {
                                  "aria-checked": E,
                                  "aria-label": ta.intl.string(ta.t["w4m94+"]),
                                  className: l()({ [tr.micButtonWithMenu]: !0 }),
                                  disabled: o,
                                  icon: (0, a.jsx)(V, {
                                      size: "custom",
                                      width: 20,
                                      height: 20,
                                      color: ei,
                                      className: m,
                                  }),
                                  onClick: b,
                                  onContextMenu: r,
                                  onMouseEnter: () => {
                                      p(), B.onMouseEnter();
                                  },
                                  onMouseLeave: () => {
                                      h(), B.onMouseLeave();
                                  },
                                  orangeGlow: R,
                                  plated: null != v,
                                  redGlow: E,
                                  role: "switch",
                                  tooltipColor: _ ? f.FGA.GREEN : void 0,
                                  tooltipForceOpen: _,
                                  tooltipText: t,
                              }),
                              (0, a.jsx)(e6.Z, {
                                  "aria-label": y
                                      ? ta.intl.formatToPlainString(ta.t["18wnuL"], { inputDeviceName: ec })
                                      : ta.intl.string(ta.t.fRzCbG),
                                  className: l()(tr.buttonChevron, { [tr.popoutOpen]: i }),
                                  disabled: o,
                                  icon: (0, a.jsx)(s, {
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
                                  orangeGlow: R,
                                  plated: null != v,
                                  redGlow: E,
                                  tooltipClassName: tr.accountButtonsTooltip,
                                  tooltipColor: y ? f.FGA.GREEN : void 0,
                                  tooltipContentClassName: tr.accountButtonsTooltipContent,
                                  tooltipForceOpen: y,
                                  tooltipPositionKeyStemOverride: y
                                      ? ta.intl.formatToPlainString(ta.t["18wnuL"], { inputDeviceName: ec })
                                      : void 0,
                                  tooltipShouldShow: !i,
                                  tooltipText: y
                                      ? ta.intl.format(ta.t["18wnuL"], { inputDeviceName: ec })
                                      : ta.intl.string(ta.t.fRzCbG),
                              }),
                          ],
                      });
                  },
              }),
          })
        : (0, a.jsx)(O.Gt, {
              value: q,
              children: (0, a.jsxs)("div", {
                  ref: N,
                  className: l()(tr.micButtonParent, { [tr.hasColorGlow]: el }),
                  children: [
                      (0, a.jsx)(e6.Z, {
                          tooltipText: t,
                          tooltipColor: _ ? f.FGA.GREEN : void 0,
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
                          onClick: b,
                          onContextMenu: J,
                          role: "switch",
                          className: l()({ [tr.micButtonWithMenu]: Y }),
                          orangeGlow: R,
                          redGlow: E,
                          "aria-label": ta.intl.string(ta.t["w4m94+"]),
                          "aria-checked": E,
                          disabled: o,
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
                              shouldShow: $,
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
                                      s = [];
                                  return (
                                      !i &&
                                          (es && s.push(u.z.VOICE_FILTER_EARLY_ACCESS_COACHMARK),
                                          s.push(u.z.VOICE_FILTER_LAUNCH_COACHMARK),
                                          X && U && !A && s.push(u.z.VOICE_FILTER_FIRST_USE_COACHMARK)),
                                      (0, a.jsx)("div", {
                                          children: (0, a.jsx)(W.ZP, {
                                              bypassAutoDismiss: !0,
                                              contentTypes: s,
                                              children: (e) => {
                                                  let { visibleContent: t, markAsDismissed: i } = e,
                                                      s = null;
                                                  t === u.z.VOICE_FILTER_EARLY_ACCESS_COACHMARK
                                                      ? (s = (0, a.jsx)(eP.U, {
                                                            markAsDismissed: i,
                                                            onCTA: () => Q(!0),
                                                        }))
                                                      : t === u.z.VOICE_FILTER_LAUNCH_COACHMARK
                                                        ? (s = (0, a.jsx)(eO.n, {
                                                              markAsDismissed: i,
                                                              onCTA: () => Q(!0),
                                                          }))
                                                        : t === u.z.VOICE_FILTER_FIRST_USE_COACHMARK &&
                                                          (s = (0, a.jsx)(eT.v, {
                                                              markAsDismissed: i,
                                                              onCTA: () => Q(!0),
                                                          }));
                                                  let c = () =>
                                                      (0, a.jsx)(
                                                          e6.Z,
                                                          tl(
                                                              {
                                                                  ref: S,
                                                                  plated: null != v,
                                                                  tooltipForceOpen: en,
                                                                  tooltipColor: en ? f.FGA.GREEN : void 0,
                                                                  tooltipContentClassName: en
                                                                      ? tr.voiceFilterWarning
                                                                      : void 0,
                                                                  tooltipText: en
                                                                      ? (0, a.jsxs)(a.Fragment, {
                                                                            children: [
                                                                                (0, a.jsx)("img", {
                                                                                    alt:
                                                                                        null != Z
                                                                                            ? ta.intl.string(Z.name)
                                                                                            : "",
                                                                                    src: null == Z ? void 0 : Z.iconURL,
                                                                                    draggable: !1,
                                                                                }),
                                                                                (0, a.jsx)(f.Text, {
                                                                                    variant: "text-sm/medium",
                                                                                    color: "always-white",
                                                                                    children: ta.intl.string(
                                                                                        ta.t.VlC1dX,
                                                                                    ),
                                                                                }),
                                                                            ],
                                                                        })
                                                                      : ta.intl.string(ta.t.Hapb4O),
                                                                  icon: (0, a.jsx)(l, {
                                                                      className: tr.buttonChevronIcon,
                                                                      size: "custom",
                                                                      width: 12,
                                                                      height: 12,
                                                                      color: ei,
                                                                  }),
                                                                  role: "button",
                                                                  className: tr.buttonChevron,
                                                                  orangeGlow: R,
                                                                  redGlow: E,
                                                                  "aria-label": ta.intl.string(ta.t.Hapb4O),
                                                                  disabled: o,
                                                                  onClick: (e) => {
                                                                      i(te.L.INDIRECT_ACTION),
                                                                          n(e),
                                                                          null != k && !$ && w
                                                                              ? (0, ek.$)(() => Q(!0))
                                                                              : Q(!$);
                                                                  },
                                                              },
                                                              r,
                                                          ),
                                                      );
                                                  return null != s
                                                      ? (0, a.jsx)(f.yRy, {
                                                            targetElementRef: S,
                                                            renderPopout: () => s,
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
            onClick: s,
            onContextMenu: o,
            iconForeground: c,
            nameplate: d,
            shouldShowOutputDeviceChangedTooltip: u,
            dismissTooltips: m,
        } = e,
        h = t || n,
        {
            Component: x,
            play: b,
            events: { onMouseEnter: g, onMouseLeave: v },
        } = (0, p.l)(h ? "undeafen" : "deafen"),
        j = n ? f.Vm4 : x,
        { name: _ } = (0, et.p6)(tn.h7.AUDIO_OUTPUT),
        { showRefreshedAudioContextMenu: y } = (0, e4.e)({ location: "HeadphonesButton" }),
        C = (0, Z.Z)(t, n, i),
        { analyticsLocations: E } = (0, O.ZP)(T.Z.AUDIO_OUTPUT_BUTTON),
        N = r.useRef(null);
    r.useEffect(() => () => b(), [h, b]);
    let S = r.useCallback(
        (e) => {
            o(e, E);
        },
        [o, E],
    );
    return y
        ? (0, a.jsx)(O.Gt, {
              value: E,
              children: (0, a.jsx)(f.yRy, {
                  targetElementRef: N,
                  renderPopout: (e) => {
                      let { closePopout: t } = e;
                      return (
                          m(),
                          (0, a.jsx)(O.Gt, {
                              value: E,
                              children: (0, a.jsx)(M.Z, {
                                  onInteraction: (0, G.u)("AudioDeviceMenu", T.Z.ACCOUNT),
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
                          { isShown: o } = t,
                          m = o ? f.u04 : f.CJ0;
                      return (0, a.jsxs)("div", {
                          ref: N,
                          className: l()(tr.micButtonParent, {
                              [tr.hasColorGlow]: h,
                              [tr.popoutOpen]: o,
                          }),
                          children: [
                              (0, a.jsx)(e6.Z, {
                                  "aria-checked": h,
                                  "aria-label": ta.intl.string(ta.t.wjcRFR),
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
                                  onClick: s,
                                  onContextMenu: r,
                                  onMouseEnter: g,
                                  onMouseLeave: v,
                                  plated: null != d,
                                  redGlow: h,
                                  role: "switch",
                                  tooltipText: C,
                              }),
                              (0, a.jsx)(e6.Z, {
                                  "aria-label": u
                                      ? ta.intl.formatToPlainString(ta.t["f+DDY2"], { outputDeviceName: _ })
                                      : ta.intl.string(ta.t.aA4VcX),
                                  className: l()(tr.buttonChevron, { [tr.popoutOpen]: o }),
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
                                  tooltipColor: u ? f.FGA.GREEN : void 0,
                                  tooltipContentClassName: tr.accountButtonsTooltipContent,
                                  tooltipForceOpen: u,
                                  tooltipPositionKeyStemOverride: u
                                      ? ta.intl.formatToPlainString(ta.t["f+DDY2"], { outputDeviceName: _ })
                                      : void 0,
                                  tooltipShouldShow: !o,
                                  tooltipText: u
                                      ? ta.intl.format(ta.t["f+DDY2"], { outputDeviceName: _ })
                                      : ta.intl.string(ta.t.aA4VcX),
                              }),
                          ],
                      });
                  },
              }),
          })
        : (0, a.jsx)(O.Gt, {
              value: E,
              children: (0, a.jsx)(e6.Z, {
                  plated: null != d,
                  tooltipText: C,
                  onMouseEnter: g,
                  onMouseLeave: v,
                  icon: (0, a.jsx)(j, {
                      size: "custom",
                      width: 20,
                      height: 20,
                      color: h ? f.TVs.colors.STATUS_DANGER : "currentColor",
                      className: c,
                  }),
                  onClick: s,
                  onContextMenu: S,
                  innerClassName: l()({ [tr.redIcon]: n }),
                  iconForeground: h ? tr.strikethrough : void 0,
                  role: "switch",
                  redGlow: h,
                  "aria-label": ta.intl.string(ta.t.wjcRFR),
                  "aria-checked": h,
                  disabled: i,
              }),
          });
}
