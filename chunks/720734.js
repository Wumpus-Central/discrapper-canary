n.d(t, {
    Z: () => tx,
    m: () => tm,
}),
    n(388685),
    n(539854);
var a = n(951288),
    r = n(647438),
    l = n(120356),
    i = n.n(l),
    o = n(392711),
    s = n.n(o),
    c = n(374470),
    d = n(442837),
    u = n(704215),
    m = n(846519),
    p = n(400354),
    h = n(789639),
    x = n(930295),
    g = n(481060),
    f = n(239091),
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
    k = n(304761),
    R = n(865427),
    A = n(358221),
    D = n(571250),
    Z = n(628581),
    L = n(659580),
    M = n(855844),
    U = n(55311),
    B = n(575175),
    F = n(522651),
    G = n(795318),
    H = n(427217),
    z = n(812055),
    V = n(243778),
    W = n(594928),
    K = n(386725),
    q = n(821795),
    Y = n(287647),
    J = n(892567),
    X = n(258609),
    Q = n(53891),
    $ = n(291533),
    ee = n(427347),
    et = n(72897),
    en = n(78933),
    ea = n(850020),
    er = n(379839),
    el = n(359135),
    ei = n(516817),
    eo = n(332473),
    es = n(963590),
    ec = n(562705),
    ed = n(667105),
    eu = n(768419),
    em = n(172416),
    ep = n(184301),
    eh = n(670188),
    ex = n(620799),
    eg = n(313789),
    ef = n(846071),
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
    ek = n(8404),
    eR = n(199902),
    eA = n(314897),
    eD = n(592125),
    eZ = n(831506),
    eL = n(819640),
    eM = n(131951),
    eU = n(19780),
    eB = n(914010),
    eF = n(885110),
    eG = n(246946),
    eH = n(594174),
    ez = n(78839),
    eV = n(626135),
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
    e4 = n(853170),
    e3 = n(422202),
    e2 = n(870569),
    e6 = n(345243),
    e5 = n(115530),
    e7 = n(981631),
    e9 = n(921944),
    te = n(46140),
    tt = n(65154),
    tn = n(388032),
    ta = n(490579);
function tr(e, t, n) {
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
                tr(e, t, n[t]);
            });
    }
    return e;
}
function ti(e, t) {
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
let to = e1.ZP.getEnableHardwareAcceleration() ? g.Xo$ : g.qEK,
    ts = 2 * eJ.Z.Millis.MINUTE,
    tc = 3 * eJ.Z.Millis.SECOND,
    td = 5 * eJ.Z.Millis.SECOND;
function tu(e) {
    let {
            ref: t,
            speaking: n,
            streaming: l,
            currentUser: o,
            status: s,
            handleClick: c,
            handleMouseLeave: d,
            renderNameTag: u,
            nameplate: m,
            selectedGuildId: p,
            transitionAccountPanel: h,
            avatarDecoration: x,
            "data-jump-section": f,
        } = e,
        v = r.useRef(null),
        j = null != t ? t : v,
        y = (0, eW.NZ)({
            avatarDecoration: x,
            size: (0, w.y9)(g.EFr.SIZE_32),
        }),
        C = (0, K.Z)(),
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
                [l, i] = r.useState(!1);
            return (
                (0, _.Z)(() => i(!0), 750),
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
                    highlightBadge: l ? n : void 0,
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
            animation: g.yRy.Animation.FADE,
            spacing: 14,
            fixed: !0,
            ignoreModalClicks: !0,
            onRequestClose: () => {
                d(), T(void 0);
            },
            children: (e) => (
                S(e),
                (0, a.jsxs)(
                    g.P3F,
                    ti(
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
                            "aria-label": tn.intl.string(tn.t["3Uj+2p"]),
                            "data-jump-section": f,
                            className: i()(ta.avatarWrapper, { [ta.plated]: null != m }),
                            children: [
                                (0, a.jsx)(to, {
                                    size: g.EFr["SIZE_".concat(32)],
                                    src: o.getAvatarURL(h ? p : void 0, 28, !1),
                                    avatarDecoration: y,
                                    "aria-label": o.username,
                                    status: l ? e7.Skl.STREAMING : s,
                                    isSpeaking: n,
                                    className: ta.avatar,
                                }),
                                (0, a.jsx)("div", {
                                    className: i()(ta.nameTag, { [ta.canCopy]: eK.wS }),
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
class tm extends r.PureComponent {
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
                tn.intl.string(tn.t.MSaeTe),
                tn.intl.string(tn.t.UmrCw7),
                tn.intl.string(tn.t.gKE0Jq),
                tn.intl.string(tn.t["4DSKbi"]),
                tn.intl.string(tn.t["+8ENdT"]),
                tn.intl.string(tn.t.GlWHv8),
                tn.intl.string(tn.t.hIzxU9),
                tn.intl.string(tn.t["26uMPL"]),
                tn.intl.string(tn.t.uFs7R2),
                tn.intl.string(tn.t.bLXdcY),
                tn.intl.string(tn.t.gPg9fS),
            ],
            n = Math.min(Math.max(0, e - 1), t.length - 1);
        return (0, a.jsx)(g.UkV, {
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
                voiceActivityStatusEnabled: o,
                voiceChannel: s,
            } = this.props;
        if (null == r) return null;
        if (
            (0, C.Z)({
                activities: t,
                status: l,
                applicationStream: n,
                voiceChannel: o ? s : void 0,
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
                    voiceChannel: o ? s : void 0,
                    textClassName: ta.activityStatusText,
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
                  hoverText: i,
                  forceHover: e,
                  children: (0, a.jsx)(H.Z, {
                      activity: c,
                      emojiClassName: ta.emoji,
                      className: ta.customStatus,
                  }),
              })
            : null != l && l !== e7.Skl.UNKNOWN && r.hasUniqueUsername()
              ? (0, a.jsx)(T.Z, {
                    hoverText: i,
                    forceHover: e,
                    children: (0, a.jsx)(E.Z, { text: e0.ZP.humanizeStatus(l) }),
                })
              : i;
    }
    renderAvatarWithPopout(e) {
        let {
            focusSectionProps: { "data-jump-section": t },
            onClick: n,
        } = e;
        return (0, a.jsx)(
            tu,
            ti(tl({}, this.props), {
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
            markRecurringAvatarDcAsDismissed: l,
            visibleRecurringDoNotDisturbReminderPopoverDc: i,
            markRecurringDoNotDisturbReminderPopoverDcAsDismissed: o,
            isQuestBarEmpty: s,
            hasLoadedQuestBar: c,
        } = this.props;
        if (null == t) return null;
        if (!(null != this.avatarWithPopoutRef.current && s && c))
            return this.renderAvatarWithPopout({ focusSectionProps: e });
        if (r === u.z.GUILD_TAG_AVAILABLE_COACHMARK) {
            var d;
            return (0, a.jsx)(Q.ZP, {
                guildId: null != (d = this.props.selectedGuildId) ? d : null,
                onDismiss: l,
                targetElementRef: this.avatarWithPopoutRef,
                children: this.renderAvatarWithPopout({ focusSectionProps: e }),
            });
        }
        return i === u.z.DO_NOT_DISTURB_REMINDER_POPOVER
            ? (0, a.jsx)(z.Z, {
                  targetElementRef: this.avatarWithPopoutRef,
                  onDismiss: o,
                  children: this.renderAvatarWithPopout({ focusSectionProps: e }),
              })
            : (0, a.jsxs)(a.Fragment, {
                  children: [
                      (0, a.jsx)(ec.Z, {
                          groupName: e9.R.ACCOUNT_NAME_ZONE,
                          targetElementRef: this.avatarWithPopoutRef,
                      }),
                      (0, a.jsx)(V.ZP, {
                          contentTypes: n.avatar,
                          groupName: e9.R.ACCOUNT_NAME_ZONE,
                          children: (t) => {
                              let { visibleContent: n, markAsDismissed: r } = t;
                              switch (n) {
                                  case u.z.WIDGETS_RTC_UPSELL_COACHMARK:
                                      return (0, a.jsx)(ex.Z, {
                                          markAsDismissed: r,
                                          targetElementRef: this.avatarWithPopoutRef,
                                          children: this.renderAvatarWithPopout({ focusSectionProps: e }),
                                      });
                                  case u.z.DISPLAY_NAME_STYLES_COACHMARK:
                                      return (0, a.jsx)(Y.e, {
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
        let { currentUser: e, nameplate: t, voiceChannel: n, isQuestBarEmpty: r, isListenAlongVisible: l } = this.props,
            o = this.state.hovered;
        return null == e
            ? null
            : (0, a.jsxs)(a.Fragment, {
                  children: [
                      (0, a.jsx)(g.Wdt, {
                          children: (e) =>
                              (0, a.jsxs)("div", {
                                  ref: this.containerRef,
                                  className: i()(ta.container, {
                                      [ta.containerRtcOpened]: null != n,
                                      [ta.containerQuestBarVisible]: !r,
                                      [ta.containerListenAlongVisible]: l,
                                  }),
                                  onMouseEnter: this.handleMouseEnter,
                                  onMouseLeave: this.handleMouseLeave,
                                  children: [
                                      (0, a.jsx)(ei.Z, {
                                          nameplate: t,
                                          hovered: o,
                                          placement: el.i.ACCOUNT,
                                      }),
                                      this.renderNameZone(e),
                                      (0, a.jsx)(
                                          tp,
                                          ti(tl({}, this.props, this.state), {
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
                      (0, a.jsx)(ee.Z, {}),
                  ],
              });
    }
    constructor(...e) {
        super(...e),
            tr(this, "copiedTimeout", new m.V7()),
            tr(this, "copiedDecayTimeout", new m.V7()),
            tr(this, "speakingWhileMutedTooltipTimeout", new m.V7()),
            tr(this, "lastSpeakingWhileMutedNotificationTime", void 0),
            tr(this, "state", {
                hovered: !1,
                copiedStreak: 0,
                shouldShowNametagTooltip: !1,
                shouldShowCopiedFeedback: !1,
                shouldShowSpeakingWhileMutedTooltip: !1,
                hoveringOnMute: !1,
            }),
            tr(this, "containerRef", r.createRef()),
            tr(this, "avatarWithPopoutRef", r.createRef()),
            tr(this, "handleToggleSelfMute", () => {
                let { serverMute: e, suppress: t, selfMute: n } = this.props;
                (0, B.Z)(e, t, e7.jXE.ACCOUNT_PANEL), (0, F.v)(O.Z.ACCOUNT, F.d.MIC, n);
            }),
            tr(this, "handleToggleSelfDeaf", () => {
                let { serverDeaf: e, selfDeaf: t } = this.props;
                (0, U.Z)(e, e7.jXE.ACCOUNT_PANEL), (0, F.v)(O.Z.ACCOUNT, F.d.DEAFEN, !t);
            }),
            tr(this, "handleOpenAccountSettings", () => {
                this.dismissTooltips(),
                    eU.Z.isConnected()
                        ? (0, eb.openUserSettings)(eg.n.VOICE_AND_VIDEO_PANEL, { section: e7.oAB.VOICE })
                        : (0, eb.openUserSettings)();
            }),
            tr(this, "handleOpenSettingsContextMenu", (e) => {
                let { currentUser: t } = this.props;
                null != t &&
                    (0, f.jW)(e, async () => {
                        let { default: e } = await n.e("2535").then(n.bind(n, 923422));
                        return (n) =>
                            (0, a.jsx)(
                                e,
                                ti(tl({}, n), {
                                    user: t,
                                    premiumSubscription: this.props.premiumSubscription,
                                    webBuildOverride: this.props.webBuildOverride,
                                    onInteraction: (0, G.u)("UserSettingsCogContextMenu", O.Z.ACCOUNT),
                                }),
                            );
                    });
            }),
            tr(this, "audioOnInteractionHandler", (0, G.u)("AudioDeviceMenu", O.Z.ACCOUNT)),
            tr(this, "handleInputAudioContextMenu", (e, t) => {
                this.dismissTooltips(),
                    (0, f.jW)(e, async () => {
                        let { default: e } = await Promise.resolve().then(n.bind(n, 659580));
                        return () => {
                            let { enabledInputProfiles: n } = (0, ef.G)({ location: "Account" });
                            return (0, a.jsx)(N.Gt, {
                                value: t,
                                children: (0, a.jsx)(e, {
                                    onClose: f.Zy,
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
            tr(this, "handleOutputAudioContextMenu", (e, t) => {
                this.dismissTooltips(),
                    (0, f.jW)(e, async () => {
                        let { default: e } = await Promise.resolve().then(n.bind(n, 659580));
                        return () =>
                            (0, a.jsx)(N.Gt, {
                                value: t,
                                children: (0, a.jsx)(e, {
                                    onClose: f.Zy,
                                    renderOutputDevices: !0,
                                    renderOutputVolume: !0,
                                    minimal: !0,
                                    onInteraction: this.audioOnInteractionHandler,
                                }),
                            });
                    });
            }),
            tr(this, "handleMouseEnter", () => {
                this.setState({ hovered: !0 });
            }),
            tr(this, "handleMouseLeave", () => {
                this.setState({ hovered: !1 });
            }),
            tr(this, "handleMouseEnterMute", () => {
                this.setState({
                    hoveringOnMute: !0,
                    shouldShowSpeakingWhileMutedTooltip: !1,
                }),
                    this.speakingWhileMutedTooltipTimeout.stop();
            }),
            tr(this, "handleMouseLeaveMute", () => {
                this.setState({ hoveringOnMute: !1 });
            }),
            tr(this, "dismissSpeakingWhileMutedTooltip", () => {
                this.setState({ shouldShowSpeakingWhileMutedTooltip: !1 }),
                    this.speakingWhileMutedTooltipTimeout.stop();
            }),
            tr(this, "dismissTooltips", () => {
                var e, t, n, a;
                null == (e = (t = this.props).dismissInputDeviceChangedTooltip) || e.call(t),
                    null == (n = (a = this.props).dismissOutputDeviceChangedTooltip) || n.call(a),
                    this.dismissSpeakingWhileMutedTooltip();
            }),
            tr(this, "handleCopyTag", () => {
                let { currentUser: e } = this.props,
                    { shouldShowNametagTooltip: t, copiedStreak: n } = this.state;
                if (null == e) return;
                (0, eK.JG)(
                    e0.ZP.getUserTag(e, {
                        decoration: "never",
                        identifiable: "always",
                    }),
                ),
                    eV.default.track(e7.rMx.TEXT_COPIED, { type: "User Tag" });
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
            tr(this, "handleOccludedChanged", () => {
                let { occluded: e } = this.props;
                e &&
                    this.setState({
                        shouldShowNametagTooltip: !1,
                        shouldShowSpeakingWhileMutedTooltip: !1,
                    });
            }),
            tr(this, "handleSpeakingWhileMutedChanged", () => {
                let {
                        selfMute: e,
                        serverMute: t,
                        suppress: n,
                        speakingWhileMuted: a,
                        occluded: r,
                        shouldShowInputDeviceChangedTooltip: l,
                        shouldShowOutputDeviceChangedTooltip: i,
                    } = this.props,
                    { hoveringOnMute: o } = this.state,
                    s =
                        void 0 === this.lastSpeakingWhileMutedNotificationTime ||
                        Date.now() - this.lastSpeakingWhileMutedNotificationTime > ts;
                a
                    ? o ||
                      !e ||
                      t ||
                      n ||
                      r ||
                      !s ||
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
            tr(this, "renderNameTag", (e) => {
                let { currentUser: t, username: n } = this.props;
                return null == t
                    ? null
                    : (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)("div", {
                                  className: ta.panelTitleContainer,
                                  children: (0, a.jsx)(e5.Z, {
                                      className: i()({ [ta.withDisplayNameStyles]: null != e }),
                                      children: (0, a.jsx)(J.Z, {
                                          userName: n,
                                          displayNameStyles: e,
                                          effectDisplayType: this.state.hovered ? q.F.ANIMATED : q.F.STATIC,
                                          loop: !0,
                                          inProfile: !0,
                                      }),
                                  }),
                              }),
                              (0, a.jsx)("div", {
                                  className: ta.panelSubtextContainer,
                                  children: (0, a.jsx)(e6.Z, { children: this.renderStatus() }),
                              }),
                          ],
                      });
            });
    }
}
function tp(e) {
    let {
            selfDeaf: t,
            selfMute: n,
            awaitingRemote: r,
            serverMute: l,
            serverDeaf: i,
            suppress: o,
            shouldShowSpeakingWhileMutedTooltip: s,
            isEligibleForPomelo: c,
            webBuildOverride: d,
            handleMouseEnterMute: u,
            handleMouseLeaveMute: m,
            handleToggleSelfDeaf: p,
            handleToggleSelfMute: h,
            handleInputAudioContextMenu: x,
            handleOutputAudioContextMenu: g,
            handleOpenAccountSettings: f,
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
        className: ta.buttons,
        style: E,
        children: [
            (0, a.jsx)(tf, {
                accountContainerRef: _,
                selfMute: n,
                serverMute: l,
                suppress: o,
                awaitingRemote: r,
                onMouseEnter: u,
                onMouseLeave: m,
                onClick: h,
                onContextMenu: x,
                iconForeground: null != j ? ta.iconForeground : void 0,
                nameplate: j,
                shouldShowInputDeviceChangedTooltip: y,
                shouldShowSpeakingWhileMutedTooltip: s,
                dismissTooltips: S,
            }),
            (0, a.jsx)(tb, {
                selfDeaf: t,
                serverDeaf: i,
                onClick: p,
                onContextMenu: g,
                awaitingRemote: r,
                iconForeground: null != j ? ta.iconForeground : void 0,
                nameplate: j,
                shouldShowOutputDeviceChangedTooltip: C,
                dismissTooltips: S,
            }),
            (0, a.jsx)(tg, {
                isEligibleForPomelo: c,
                webBuildOverride: d,
                onClick: f,
                onContextMenu: b,
                dismissibleContents: v.settings,
                iconForeground: null != j ? ta.iconForeground : void 0,
                nameplate: j,
                shouldShowInputDeviceChangedTooltip: y,
                shouldShowOutputDeviceChangedTooltip: C,
            }),
        ],
    });
}
function th(e) {
    let { shouldShowDeviceChangedNotifications: t } = (0, e3.P)({
            location: "Account.useDeviceChangedTooltip",
            autoTrackExposure: !1,
        }),
        n = (0, d.e7)([eU.Z], () => null != eU.Z.getChannelId()),
        a = (0, et.Fh)(e),
        l = r.useRef(new m.V7()),
        [i, o] = r.useState(!1);
    r.useEffect(() => {
        n &&
            a &&
            ((0, e3._)({
                location: "Account.useDeviceChangedTooltip (exposure tracking)",
                autoTrackExposure: !0,
            }),
            t &&
                (o(!0),
                l.current.start(td, () => {
                    o(!1);
                })));
    }, [n, a, t]);
    let s = r.useCallback(() => {
        o(!1), l.current.stop();
    }, []);
    return (
        (0, j.zq)(() => {
            l.current.stop();
        }),
        {
            shouldShowTooltip: i,
            dismissTooltip: s,
        }
    );
}
function tx() {
    var e;
    let t = (0, d.e7)([eH.default], () => eH.default.getCurrentUser()),
        n = (0, d.e7)([eA.default], () => eA.default.getId()),
        r = e8.K.useConfig({ location: "AccountConnected" }).transitionAccountPanel,
        {
            activities: l,
            streaming: i,
            status: o,
        } = (0, d.cj)([eF.Z], () => {
            let e = eF.Z.getActivities();
            return {
                activities: e,
                streaming:
                    null !=
                    e.find((e) => {
                        let { type: t } = e;
                        return t === e7.IIU.STREAMING;
                    }),
                status: eF.Z.getStatus(),
            };
        }),
        c = (0, d.e7)([eR.Z], () => eR.Z.getAnyStreamForUser(n)),
        m = (0, v.Z)({ userId: n }),
        p = e0.ZP.useUserTag(t, { decoration: "never" }),
        h = (0, d.e7)([eG.Z], () => eG.Z.hidePersonalInformation),
        x = (0, d.e7)([eU.Z, eD.Z], () => {
            let e = eU.Z.getChannelId();
            return null != e ? eD.Z.getChannel(e) : null;
        }),
        { mute: f, selfMute: b, suppress: j } = (0, ej.Z)(x),
        { selfDeaf: _, deaf: C } = (0, ev.Z)(x),
        S = (0, d.e7)([k.C], () => {
            var e;
            return (0, R.fD)()
                ? null == (e = k.C.getCurrentBuildOverride().overrides)
                    ? void 0
                    : e.discord_web
                : null;
        }),
        E = (0, d.e7)([ez.Z], () => ez.Z.getPremiumTypeSubscription()),
        T = (0, d.e7)([eM.Z], () => eM.Z.getSpeakingWhileMuted()),
        w = (0, d.e7)([A.Z], () => A.Z.isFullscreenInContext()),
        D = (0, d.e7)([eL.Z], () => eL.Z.hasLayers()),
        Z = (0, g.s9z)(g.JQI) || D || e$.s.isDisallowPopupsSet() || w,
        L = (0, eo.b)(),
        M = (0, d.e7)([X.default], () => null != X.default.getAwaitingRemoteSessionInfo()),
        U = (0, d.e7)([eB.Z], () => eB.Z.getGuildId()),
        B = null == t ? void 0 : t.avatarDecoration,
        F = (0, P.R)(t, null != U ? U : void 0),
        G = (0, I.Z)(r ? F : B),
        H = eQ.ZP.useName(null != U ? U : void 0, null, t),
        V = null != (e = e0.ZP.useName(t)) ? e : "",
        { voiceActivityStatusEnabled: K } = (0, y.U)({ location: "Account" }),
        [q, Y] = (0, $.G)(null != U ? U : null),
        [J, Q] = (0, z.b)(),
        ee = W.JH.useExperiment({ location: "Account" }).enabled,
        { analyticsLocations: et } = (0, N.ZP)(O.Z.ACCOUNT),
        en = (0, ea.K)({
            user: t,
            guildId: r && null != U ? U : void 0,
        }),
        { isQuestBarEmpty: er, hasLoadedQuestBar: el } = (0, ed.Ws)({ location: te.dr.CONFLICT_CHECKS }),
        ei = (0, d.e7)([eu.Z, eH.default, eZ.Z], () => {
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
                    .map((e) => eH.default.getUser(e))
                    .filter(eX.lm)
                    .value();
            }
            return a.length > 1;
        }),
        es = (0, em.Un)({ location: "AccountConnected" }),
        ec = {
            avatar: [],
            settings: [],
        };
    !Z &&
        (ee && ec.avatar.push(u.z.DISPLAY_NAME_STYLES_COACHMARK),
        es && ec.avatar.push(u.z.WIDGETS_RTC_UPSELL_COACHMARK));
    let { shouldShowTooltip: ep, dismissTooltip: eh } = th(tt.h7.AUDIO_INPUT),
        { shouldShowTooltip: ex, dismissTooltip: eg } = th(tt.h7.AUDIO_OUTPUT);
    return (0, a.jsx)(N.Gt, {
        value: et,
        children: (0, a.jsx)(tm, {
            currentUser: t,
            username: r ? H : V,
            transitionAccountPanel: r,
            activities: l,
            applicationStream: c,
            voiceChannel: x,
            dismissibleContents: ec,
            visibleRecurringAvatarDc: q,
            markRecurringAvatarDcAsDismissed: Y,
            visibleRecurringDoNotDisturbReminderPopoverDc: J,
            markRecurringDoNotDisturbReminderPopoverDcAsDismissed: Q,
            userTag: p,
            hidePrivateData: h,
            occluded: Z,
            premiumSubscription: E,
            selfDeaf: _,
            selfMute: b,
            serverDeaf: C,
            serverMute: f,
            speaking: m,
            speakingWhileMuted: T,
            status: o,
            streaming: i,
            suppress: j,
            webBuildOverride: S,
            awaitingRemote: M,
            isEligibleForPomelo: L,
            voiceActivityStatusEnabled: K,
            nameplate: en,
            selectedGuildId: U,
            avatarDecoration: G,
            isQuestBarEmpty: er,
            hasLoadedQuestBar: el,
            isListenAlongVisible: ei,
            shouldShowInputDeviceChangedTooltip: ep,
            shouldShowOutputDeviceChangedTooltip: ex,
            dismissInputDeviceChangedTooltip: eh,
            dismissOutputDeviceChangedTooltip: eg,
        }),
    });
}
function tg(e) {
    let t,
        n,
        l,
        {
            webBuildOverride: i,
            isEligibleForPomelo: o,
            onClick: s,
            onContextMenu: c,
            iconForeground: d,
            nameplate: u,
            shouldShowInputDeviceChangedTooltip: m,
            shouldShowOutputDeviceChangedTooltip: p,
        } = e,
        x = r.useRef(null),
        { showRefreshedAudioContextMenu: f } = (0, e4.e)({ location: "SettingsCogButton" }),
        b = !f && (m || p),
        { name: v } = (0, et.p6)(tt.h7.AUDIO_INPUT),
        { name: j } = (0, et.p6)(tt.h7.AUDIO_OUTPUT);
    !f && m
        ? ((t = tn.intl.format(tn.t["18wnuD"], { inputDeviceName: v })),
          (n = tn.intl.formatToPlainString(tn.t["18wnuD"], { inputDeviceName: v })),
          (l = tn.intl.formatToPlainString(tn.t["18wnuD"], { inputDeviceName: v })))
        : !f && p
          ? ((t = tn.intl.format(tn.t["f+DDY/"], { outputDeviceName: j })),
            (n = tn.intl.formatToPlainString(tn.t["f+DDY/"], { outputDeviceName: j })),
            (l = tn.intl.formatToPlainString(tn.t["f+DDY/"], { outputDeviceName: j })))
          : (t =
                null != i
                    ? tn.intl.formatToPlainString(tn.t.Gzh6ZP, { webBuildOverride: i.id })
                    : tn.intl.string(tn.t.cduTBL));
    let _ = g.ewm,
        y = (0, h.i)();
    return (
        (_ = null != i ? g.bgT : o ? g.Ncx : y.Component),
        (0, a.jsx)(
            e2.Z,
            ti(
                tl(
                    {
                        ref: x,
                        tooltipText: t,
                        tooltipColor: b ? g.r6K.GREEN : void 0,
                        tooltipForceOpen: b,
                        tooltipClassName: ta.accountButtonsTooltip,
                        tooltipContentClassName: ta.accountButtonsTooltipContent,
                        tooltipPositionKeyStemOverride: n,
                        "aria-label": b ? l : void 0,
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
function tf(e) {
    let t,
        {
            selfMute: n,
            serverMute: l,
            suppress: o,
            awaitingRemote: s,
            iconForeground: m,
            onMouseEnter: p,
            onMouseLeave: h,
            onClick: f,
            onContextMenu: b,
            nameplate: v,
            accountContainerRef: j,
            shouldShowSpeakingWhileMutedTooltip: _,
            shouldShowInputDeviceChangedTooltip: y,
            dismissTooltips: C,
        } = e,
        S = n || o || l,
        E = r.useRef(null),
        T = r.useRef(null),
        P = (0, ek.b)(S),
        { activeVoice: I, mostRecentlyRequestedVoiceId: w, lastInitAttemptMayHaveCrashed: k } = (0, eE.o)(),
        { showSilentLagWarning: R } = (0, eS.Y)(),
        A = null != I,
        D = (0, eC.z)(I),
        U = (0, d.e7)([eU.Z], () => eU.Z.isConnected()),
        { Component: B, events: F, play: H } = P,
        z = l || o ? g.v0G : B,
        W = (0, Z.Z)(n, l, o, s),
        K = R ? tn.intl.string(tn.t.ARRV6m) : null;
    t = _
        ? tn.intl.string(tn.t["29gnR4"])
        : null != K
          ? (0, a.jsxs)("div", {
                className: ta.tooltipWithSubtext,
                children: [
                    (0, a.jsx)(g.Text, {
                        variant: "text-sm/medium",
                        color: "currentColor",
                        children: W,
                    }),
                    (0, a.jsx)(g.Text, {
                        variant: "text-xs/medium",
                        color: "text-feedback-warning",
                        children: K,
                    }),
                ],
            })
          : W;
    let { analyticsLocations: q } = (0, N.ZP)(O.Z.AUDIO_INPUT_BUTTON),
        Y = (0, e_.Hu)({
            location: O.Z.AUDIO_INPUT_BUTTON,
            autoTrackExposure: !0,
        }),
        J = (0, ey.av)({
            location: O.Z.AUDIO_INPUT_BUTTON,
            autoTrackExposure: !0,
        });
    r.useEffect(() => () => H(), [S, H]);
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
                    ea(!0), (e = setTimeout(() => ea(!1), tc));
                }, 300)),
            () => {
                ea(!1), clearTimeout(e);
            }
        );
    }, [U]);
    let er = r.useCallback(() => {
            k || (0, eT.r5)();
        }, [k]),
        el = S ? g.TVs.colors.STATUS_DANGER : R ? g.TVs.colors.STATUS_WARNING : "currentColor",
        ei = S || R,
        eo = (0, es.Z)({ location: "Account" }),
        { name: ec } = (0, et.p6)(tt.h7.AUDIO_INPUT),
        { showRefreshedAudioContextMenu: ed } = (0, e4.e)({ location: "MicrophoneButton" }),
        { enabledInputProfiles: eu } = (0, ef.G)({ location: "MicrophoneButton" });
    return ed
        ? (0, a.jsx)(N.Gt, {
              value: q,
              children: (0, a.jsx)(g.yRy, {
                  targetElementRef: E,
                  renderPopout: (e) => {
                      let { closePopout: t } = e;
                      return (
                          C(),
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
                  animation: g.yRy.Animation.FADE,
                  spacing: 4,
                  children: (e, n) => {
                      let { onClick: r } = e,
                          { isShown: l } = n,
                          o = l ? g.u04 : g.CJ0;
                      return (0, a.jsxs)("div", {
                          ref: E,
                          className: i()(ta.micButtonParent, {
                              [ta.hasColorGlow]: ei,
                              [ta.popoutOpen]: l,
                          }),
                          children: [
                              (0, a.jsx)(e2.Z, {
                                  "aria-checked": S,
                                  "aria-label": tn.intl.string(tn.t.w4m945),
                                  className: i()({ [ta.micButtonWithMenu]: !0 }),
                                  disabled: s,
                                  icon: (0, a.jsx)(z, {
                                      size: "custom",
                                      width: 20,
                                      height: 20,
                                      color: el,
                                      className: m,
                                  }),
                                  onClick: f,
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
                                  tooltipColor: _ ? g.r6K.GREEN : void 0,
                                  tooltipForceOpen: _,
                                  tooltipText: t,
                              }),
                              (0, a.jsx)(e2.Z, {
                                  "aria-label": y
                                      ? tn.intl.formatToPlainString(tn.t["18wnuD"], { inputDeviceName: ec })
                                      : tn.intl.string(tn.t.fRzCbB),
                                  className: i()(ta.buttonChevron, { [ta.popoutOpen]: l }),
                                  disabled: s,
                                  icon: (0, a.jsx)(o, {
                                      className: ta.buttonChevronIcon,
                                      size: "custom",
                                      width: 12,
                                      height: 12,
                                      color: el,
                                  }),
                                  onClick: r,
                                  onContextMenu: r,
                                  onMouseEnter: p,
                                  onMouseLeave: h,
                                  orangeGlow: R,
                                  plated: null != v,
                                  redGlow: S,
                                  tooltipClassName: ta.accountButtonsTooltip,
                                  tooltipColor: y ? g.r6K.GREEN : void 0,
                                  tooltipContentClassName: ta.accountButtonsTooltipContent,
                                  tooltipForceOpen: y,
                                  tooltipPositionKeyStemOverride: y
                                      ? tn.intl.formatToPlainString(tn.t["18wnuD"], { inputDeviceName: ec })
                                      : void 0,
                                  tooltipShouldShow: !l,
                                  tooltipText: y
                                      ? tn.intl.format(tn.t["18wnuD"], { inputDeviceName: ec })
                                      : tn.intl.string(tn.t.fRzCbB),
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
                  className: i()(ta.micButtonParent, { [ta.hasColorGlow]: ei }),
                  children: [
                      (0, a.jsx)(e2.Z, {
                          tooltipText: t,
                          tooltipColor: _ ? g.r6K.GREEN : void 0,
                          tooltipForceOpen: _,
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
                              color: el,
                              className: m,
                          }),
                          onClick: f,
                          onContextMenu: X,
                          role: "switch",
                          className: i()({ [ta.micButtonWithMenu]: Y }),
                          orangeGlow: R,
                          redGlow: S,
                          "aria-label": tn.intl.string(tn.t.w4m945),
                          "aria-checked": S,
                          disabled: s,
                      }),
                      Y &&
                          (0, a.jsx)(g.yRy, {
                              targetElementRef: j,
                              position: "top",
                              align: "left",
                              nudgeAlignIntoViewport: !1,
                              animation: g.yRy.Animation.FADE,
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
                                  let i = l ? g.u04 : g.CJ0,
                                      o = [];
                                  return (
                                      !l &&
                                          (eo && o.push(u.z.VOICE_FILTER_EARLY_ACCESS_COACHMARK),
                                          o.push(u.z.VOICE_FILTER_LAUNCH_COACHMARK),
                                          J && U && !A && o.push(u.z.VOICE_FILTER_FIRST_USE_COACHMARK)),
                                      (0, a.jsx)("div", {
                                          children: (0, a.jsx)(V.ZP, {
                                              bypassAutoDismiss: !0,
                                              contentTypes: o,
                                              children: (e) => {
                                                  let { visibleContent: t, markAsDismissed: l } = e,
                                                      o = null;
                                                  t === u.z.VOICE_FILTER_EARLY_ACCESS_COACHMARK
                                                      ? (o = (0, a.jsx)(eP.U, {
                                                            markAsDismissed: l,
                                                            onCTA: () => $(!0),
                                                        }))
                                                      : t === u.z.VOICE_FILTER_LAUNCH_COACHMARK
                                                        ? (o = (0, a.jsx)(eN.n, {
                                                              markAsDismissed: l,
                                                              onCTA: () => $(!0),
                                                          }))
                                                        : t === u.z.VOICE_FILTER_FIRST_USE_COACHMARK &&
                                                          (o = (0, a.jsx)(eO.v, {
                                                              markAsDismissed: l,
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
                                                                  tooltipColor: en ? g.r6K.GREEN : void 0,
                                                                  tooltipContentClassName: en
                                                                      ? ta.voiceFilterWarning
                                                                      : void 0,
                                                                  tooltipText: en
                                                                      ? (0, a.jsxs)(a.Fragment, {
                                                                            children: [
                                                                                (0, a.jsx)("img", {
                                                                                    alt:
                                                                                        null != D
                                                                                            ? tn.intl.string(D.name)
                                                                                            : "",
                                                                                    src: null == D ? void 0 : D.iconURL,
                                                                                    draggable: !1,
                                                                                }),
                                                                                (0, a.jsx)(g.Text, {
                                                                                    variant: "text-sm/medium",
                                                                                    color: "always-white",
                                                                                    children: tn.intl.string(
                                                                                        tn.t.VlC1de,
                                                                                    ),
                                                                                }),
                                                                            ],
                                                                        })
                                                                      : tn.intl.string(tn.t.Hapb4J),
                                                                  icon: (0, a.jsx)(i, {
                                                                      className: ta.buttonChevronIcon,
                                                                      size: "custom",
                                                                      width: 12,
                                                                      height: 12,
                                                                      color: el,
                                                                  }),
                                                                  role: "button",
                                                                  className: ta.buttonChevron,
                                                                  orangeGlow: R,
                                                                  redGlow: S,
                                                                  "aria-label": tn.intl.string(tn.t.Hapb4J),
                                                                  disabled: s,
                                                                  onClick: (e) => {
                                                                      l(e9.L.INDIRECT_ACTION),
                                                                          n(e),
                                                                          null != w && !Q && k
                                                                              ? (0, ew.$)(() => $(!0))
                                                                              : $(!Q);
                                                                  },
                                                              },
                                                              r,
                                                          ),
                                                      );
                                                  return null != o
                                                      ? (0, a.jsx)(g.yRy, {
                                                            targetElementRef: T,
                                                            renderPopout: () => o,
                                                            animation: g.yRy.Animation.TRANSLATE,
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
            play: f,
            events: { onMouseEnter: b, onMouseLeave: v },
        } = (0, p.l)(h ? "undeafen" : "deafen"),
        j = n ? g.Vm4 : x,
        { name: _ } = (0, et.p6)(tt.h7.AUDIO_OUTPUT),
        { showRefreshedAudioContextMenu: y } = (0, e4.e)({ location: "HeadphonesButton" }),
        C = (0, D.Z)(t, n, l),
        { analyticsLocations: S } = (0, N.ZP)(O.Z.AUDIO_OUTPUT_BUTTON),
        E = r.useRef(null);
    r.useEffect(() => () => f(), [h, f]);
    let T = r.useCallback(
        (e) => {
            s(e, S);
        },
        [s, S],
    );
    return y
        ? (0, a.jsx)(N.Gt, {
              value: S,
              children: (0, a.jsx)(g.yRy, {
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
                  animation: g.yRy.Animation.FADE,
                  spacing: 4,
                  children: (e, t) => {
                      let { onClick: r } = e,
                          { isShown: s } = t,
                          m = s ? g.u04 : g.CJ0;
                      return (0, a.jsxs)("div", {
                          ref: E,
                          className: i()(ta.micButtonParent, {
                              [ta.hasColorGlow]: h,
                              [ta.popoutOpen]: s,
                          }),
                          children: [
                              (0, a.jsx)(e2.Z, {
                                  "aria-checked": h,
                                  "aria-label": tn.intl.string(tn.t.wjcRFX),
                                  className: ta.micButtonWithMenu,
                                  disabled: l,
                                  icon: (0, a.jsx)(j, {
                                      size: "custom",
                                      width: 20,
                                      height: 20,
                                      color: h ? g.TVs.colors.STATUS_DANGER : "currentColor",
                                      className: c,
                                  }),
                                  iconForeground: h ? ta.strikethrough : void 0,
                                  innerClassName: i()({ [ta.redIcon]: n }),
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
                                      ? tn.intl.formatToPlainString(tn.t["f+DDY/"], { outputDeviceName: _ })
                                      : tn.intl.string(tn.t.aA4Vce),
                                  className: i()(ta.buttonChevron, { [ta.popoutOpen]: s }),
                                  disabled: l,
                                  icon: (0, a.jsx)(m, {
                                      className: ta.buttonChevronIcon,
                                      size: "custom",
                                      width: 12,
                                      height: 12,
                                      color: h ? g.TVs.colors.STATUS_DANGER : "currentColor",
                                  }),
                                  onClick: r,
                                  onContextMenu: r,
                                  plated: null != d,
                                  redGlow: h,
                                  tooltipClassName: ta.accountButtonsTooltip,
                                  tooltipColor: u ? g.r6K.GREEN : void 0,
                                  tooltipContentClassName: ta.accountButtonsTooltipContent,
                                  tooltipForceOpen: u,
                                  tooltipPositionKeyStemOverride: u
                                      ? tn.intl.formatToPlainString(tn.t["f+DDY/"], { outputDeviceName: _ })
                                      : void 0,
                                  tooltipShouldShow: !s,
                                  tooltipText: u
                                      ? tn.intl.format(tn.t["f+DDY/"], { outputDeviceName: _ })
                                      : tn.intl.string(tn.t.aA4Vce),
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
                      color: h ? g.TVs.colors.STATUS_DANGER : "currentColor",
                      className: c,
                  }),
                  onClick: o,
                  onContextMenu: T,
                  innerClassName: i()({ [ta.redIcon]: n }),
                  iconForeground: h ? ta.strikethrough : void 0,
                  role: "switch",
                  redGlow: h,
                  "aria-label": tn.intl.string(tn.t.wjcRFX),
                  "aria-checked": h,
                  disabled: l,
              }),
          });
}
