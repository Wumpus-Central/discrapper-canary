n.d(t, {
    Z: () => th,
    m: () => tu,
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
    k = n(304761),
    R = n(865427),
    A = n(358221),
    D = n(571250),
    Z = n(628581),
    M = n(659580),
    L = n(855844),
    U = n(55311),
    F = n(575175),
    B = n(522651),
    G = n(795318),
    z = n(427217),
    V = n(812055),
    H = n(243778),
    W = n(594928),
    K = n(386725),
    q = n(821795),
    Y = n(287647),
    J = n(892567),
    X = n(258609),
    Q = n(53891),
    $ = n(291533),
    ee = n(72897),
    et = n(78933),
    en = n(850020),
    ea = n(379839),
    er = n(359135),
    ei = n(516817),
    el = n(332473),
    eo = n(963590),
    es = n(562705),
    ec = n(667105),
    ed = n(768419),
    eu = n(172416),
    em = n(184301),
    ep = n(670188),
    eh = n(620799),
    ex = n(313789),
    ef = n(846071),
    eg = n(518596),
    eb = n(879815),
    ev = n(294629),
    ej = n(875527),
    e_ = n(702977),
    ey = n(56848),
    eC = n(940315),
    eS = n(378441),
    eE = n(358820),
    eT = n(723547),
    eO = n(361045),
    eN = n(74650),
    eP = n(306609),
    eI = n(170293),
    ew = n(8404),
    ek = n(199902),
    eR = n(314897),
    eA = n(592125),
    eD = n(831506),
    eZ = n(819640),
    eM = n(131951),
    eL = n(19780),
    eU = n(914010),
    eF = n(885110),
    eB = n(246946),
    eG = n(594174),
    ez = n(78839),
    eV = n(626135),
    eH = n(768581),
    eW = n(572004),
    eK = n(459273),
    eq = n(585483),
    eY = n(70956),
    eJ = n(823379),
    eX = n(5192),
    eQ = n(374023),
    e$ = n(51144),
    e0 = n(998502),
    e1 = n(660230),
    e8 = n(853170),
    e4 = n(422202),
    e3 = n(870569),
    e2 = n(345243),
    e6 = n(115530),
    e5 = n(981631),
    e7 = n(921944),
    e9 = n(46140),
    te = n(65154),
    tt = n(388032),
    tn = n(25874);
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
let tl = e0.ZP.getEnableHardwareAcceleration() ? f.Xo$ : f.qEK,
    to = 2 * eY.Z.Millis.MINUTE,
    ts = 3 * eY.Z.Millis.SECOND,
    tc = 5 * eY.Z.Millis.SECOND;
function td(e) {
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
        y = (0, eH.NZ)({
            avatarDecoration: x,
            size: (0, w.y9)(f.EFr.SIZE_32),
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
                        eq.S.subscribe(e5.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, t),
                        () => {
                            eq.S.unsubscribe(e5.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, t);
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
        O = (0, ea.A)(m);
    if (null == o) return null;
    let N = h && p !== e5.I_8 && p !== e5.ME && null != p ? p : void 0;
    return (0, a.jsx)(b.Z, {
        object: e5.qAy.AVATAR,
        children: (0, a.jsx)(ep.Z, {
            user: o,
            targetElementRef: j,
            clickTrap: !0,
            preload: () =>
                (0, em.Z)(o.id, o.getAvatarURL(N, ep.I), {
                    type: "account_popout",
                    withMutualGuilds: !1,
                    withMutualFriends: !1,
                    guildId: N,
                }),
            renderPopout: (e, t) => {
                let { closePopout: n, setPopoutRef: r } = e;
                return (0, a.jsx)(et.Z, {
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
                    ti(
                        tr(
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
                            "aria-label": tt.intl.string(tt.t["3Uj+2t"]),
                            "data-jump-section": g,
                            className: l()(tn.avatarWrapper, { [tn.plated]: null != m }),
                            children: [
                                (0, a.jsx)(tl, {
                                    size: f.EFr["SIZE_".concat(32)],
                                    src: o.getAvatarURL(h ? p : void 0, 28, !1),
                                    avatarDecoration: y,
                                    "aria-label": o.username,
                                    status: i ? e5.Skl.STREAMING : s,
                                    isSpeaking: n,
                                    className: tn.avatar,
                                }),
                                (0, a.jsx)("div", {
                                    className: l()(tn.nameTag, { [tn.canCopy]: eW.wS }),
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
                tt.intl.string(tt.t.MSaeTU),
                tt.intl.string(tt.t.UmrCw8),
                tt.intl.string(tt.t.gKE0Ji),
                tt.intl.string(tt.t["4DSKbm"]),
                tt.intl.string(tt.t["+8ENdX"]),
                tt.intl.string(tt.t.GlWHv7),
                tt.intl.string(tt.t.hIzxU1),
                tt.intl.string(tt.t["26uMPD"]),
                tt.intl.string(tt.t.uFs7R0),
                tt.intl.string(tt.t.bLXdcX),
                tt.intl.string(tt.t.gPg9fX),
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
                    textClassName: tn.activityStatusText,
                    hideTooltip: !0,
                }),
            });
        let c =
            null == t
                ? void 0
                : t.find((e) => {
                      let { type: t } = e;
                      return t === e5.IIU.CUSTOM_STATUS;
                  });
        return null != c
            ? (0, a.jsx)(T.Z, {
                  hoverText: l,
                  forceHover: e,
                  children: (0, a.jsx)(z.Z, {
                      activity: c,
                      emojiClassName: tn.emoji,
                      className: tn.customStatus,
                  }),
              })
            : null != i && i !== e5.Skl.UNKNOWN && r.hasUniqueUsername()
              ? (0, a.jsx)(T.Z, {
                    hoverText: l,
                    forceHover: e,
                    children: (0, a.jsx)(E.Z, { text: e$.ZP.humanizeStatus(i) }),
                })
              : l;
    }
    renderAvatarWithPopout(e) {
        let {
            focusSectionProps: { "data-jump-section": t },
            onClick: n,
        } = e;
        return (0, a.jsx)(
            td,
            ti(tr({}, this.props), {
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
            return (0, a.jsx)(Q.ZP, {
                guildId: null != (d = this.props.selectedGuildId) ? d : null,
                onDismiss: i,
                targetElementRef: this.avatarWithPopoutRef,
                children: this.renderAvatarWithPopout({ focusSectionProps: e }),
            });
        }
        return l === u.z.DO_NOT_DISTURB_REMINDER_POPOVER
            ? (0, a.jsx)(V.Z, {
                  targetElementRef: this.avatarWithPopoutRef,
                  onDismiss: o,
                  children: this.renderAvatarWithPopout({ focusSectionProps: e }),
              })
            : (0, a.jsxs)(a.Fragment, {
                  children: [
                      (0, a.jsx)(es.Z, {
                          groupName: e7.R.ACCOUNT_NAME_ZONE,
                          targetElementRef: this.avatarWithPopoutRef,
                      }),
                      (0, a.jsx)(H.ZP, {
                          contentTypes: n.avatar,
                          groupName: e7.R.ACCOUNT_NAME_ZONE,
                          children: (t) => {
                              let { visibleContent: n, markAsDismissed: r } = t;
                              switch (n) {
                                  case u.z.WIDGETS_RTC_UPSELL_COACHMARK:
                                      return (0, a.jsx)(eh.Z, {
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
        let { currentUser: e, nameplate: t, voiceChannel: n, isQuestBarEmpty: r, isListenAlongVisible: i } = this.props,
            o = this.state.hovered;
        return null == e
            ? null
            : (0, a.jsx)(f.Wdt, {
                  children: (e) =>
                      (0, a.jsxs)("div", {
                          ref: this.containerRef,
                          className: l()(tn.container, {
                              [tn.containerRtcOpened]: null != n,
                              [tn.containerQuestBarVisible]: !r,
                              [tn.containerListenAlongVisible]: i,
                          }),
                          onMouseEnter: this.handleMouseEnter,
                          onMouseLeave: this.handleMouseLeave,
                          children: [
                              (0, a.jsx)(ei.Z, {
                                  nameplate: t,
                                  hovered: o,
                                  placement: er.i.ACCOUNT,
                              }),
                              this.renderNameZone(e),
                              (0, a.jsx)(
                                  tm,
                                  ti(tr({}, this.props, this.state), {
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
                (0, F.Z)(e, t, e5.jXE.ACCOUNT_PANEL), (0, B.v)(O.Z.ACCOUNT, B.d.MIC, n);
            }),
            ta(this, "handleToggleSelfDeaf", () => {
                let { serverDeaf: e, selfDeaf: t } = this.props;
                (0, U.Z)(e, e5.jXE.ACCOUNT_PANEL), (0, B.v)(O.Z.ACCOUNT, B.d.DEAFEN, !t);
            }),
            ta(this, "handleOpenAccountSettings", () => {
                this.dismissTooltips(),
                    eL.Z.isConnected()
                        ? (0, eg.openUserSettings)(ex.n.VOICE_AND_VIDEO_PANEL, { section: e5.oAB.VOICE })
                        : (0, eg.openUserSettings)();
            }),
            ta(this, "handleOpenSettingsContextMenu", (e) => {
                let { currentUser: t } = this.props;
                null != t &&
                    (0, g.jW)(e, async () => {
                        let { default: e } = await n.e("2535").then(n.bind(n, 923422));
                        return (n) =>
                            (0, a.jsx)(
                                e,
                                ti(tr({}, n), {
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
                    (0, g.jW)(e, async () => {
                        let { default: e } = await Promise.resolve().then(n.bind(n, 659580));
                        return () => {
                            let { enabledInputProfiles: n } = (0, ef.G)({ location: "Account" });
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
            ta(this, "handleOutputAudioContextMenu", (e, t) => {
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
                (0, eW.JG)(
                    e$.ZP.getUserTag(e, {
                        decoration: "never",
                        identifiable: "always",
                    }),
                ),
                    eV.default.track(e5.rMx.TEXT_COPIED, { type: "User Tag" });
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
                        shouldShowInputDeviceChangedTooltip: i,
                        shouldShowOutputDeviceChangedTooltip: l,
                    } = this.props,
                    { hoveringOnMute: o } = this.state,
                    s =
                        void 0 === this.lastSpeakingWhileMutedNotificationTime ||
                        Date.now() - this.lastSpeakingWhileMutedNotificationTime > to;
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
            ta(this, "renderNameTag", (e) => {
                let { currentUser: t, username: n } = this.props;
                return null == t
                    ? null
                    : (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)("div", {
                                  className: tn.panelTitleContainer,
                                  children: (0, a.jsx)(e6.Z, {
                                      className: l()({ [tn.withDisplayNameStyles]: null != e }),
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
                                  className: tn.panelSubtextContainer,
                                  children: (0, a.jsx)(e2.Z, { children: this.renderStatus() }),
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
        E = (0, ea.A)(j);
    return (0, a.jsxs)("div", {
        className: tn.buttons,
        style: E,
        children: [
            (0, a.jsx)(tf, {
                accountContainerRef: _,
                selfMute: n,
                serverMute: i,
                suppress: o,
                awaitingRemote: r,
                onMouseEnter: u,
                onMouseLeave: m,
                onClick: h,
                onContextMenu: x,
                iconForeground: null != j ? tn.iconForeground : void 0,
                nameplate: j,
                shouldShowInputDeviceChangedTooltip: y,
                shouldShowSpeakingWhileMutedTooltip: s,
                dismissTooltips: S,
            }),
            (0, a.jsx)(tg, {
                selfDeaf: t,
                serverDeaf: l,
                onClick: p,
                onContextMenu: f,
                awaitingRemote: r,
                iconForeground: null != j ? tn.iconForeground : void 0,
                nameplate: j,
                shouldShowOutputDeviceChangedTooltip: C,
                dismissTooltips: S,
            }),
            (0, a.jsx)(tx, {
                isEligibleForPomelo: c,
                webBuildOverride: d,
                onClick: g,
                onContextMenu: b,
                dismissibleContents: v.settings,
                iconForeground: null != j ? tn.iconForeground : void 0,
                nameplate: j,
                shouldShowInputDeviceChangedTooltip: y,
                shouldShowOutputDeviceChangedTooltip: C,
            }),
        ],
    });
}
function tp(e) {
    let { shouldShowDeviceChangedNotifications: t } = (0, e4.P)({
            location: "Account.useDeviceChangedTooltip",
            autoTrackExposure: !1,
        }),
        n = (0, d.e7)([eL.Z], () => null != eL.Z.getChannelId()),
        a = (0, ee.Fh)(e),
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
                i.current.start(tc, () => {
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
function th() {
    var e;
    let t = (0, d.e7)([eG.default], () => eG.default.getCurrentUser()),
        n = (0, d.e7)([eR.default], () => eR.default.getId()),
        r = e1.K.useConfig({ location: "AccountConnected" }).transitionAccountPanel,
        {
            activities: i,
            streaming: l,
            status: o,
        } = (0, d.cj)([eF.Z], () => {
            let e = eF.Z.getActivities();
            return {
                activities: e,
                streaming:
                    null !=
                    e.find((e) => {
                        let { type: t } = e;
                        return t === e5.IIU.STREAMING;
                    }),
                status: eF.Z.getStatus(),
            };
        }),
        c = (0, d.e7)([ek.Z], () => ek.Z.getAnyStreamForUser(n)),
        m = (0, v.Z)({ userId: n }),
        p = e$.ZP.useUserTag(t, { decoration: "never" }),
        h = (0, d.e7)([eB.Z], () => eB.Z.hidePersonalInformation),
        x = (0, d.e7)([eL.Z, eA.Z], () => {
            let e = eL.Z.getChannelId();
            return null != e ? eA.Z.getChannel(e) : null;
        }),
        { mute: g, selfMute: b, suppress: j } = (0, ev.Z)(x),
        { selfDeaf: _, deaf: C } = (0, eb.Z)(x),
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
        D = (0, d.e7)([eZ.Z], () => eZ.Z.hasLayers()),
        Z = (0, f.s9z)(f.JQI) || D || eQ.s.isDisallowPopupsSet() || w,
        M = (0, el.b)(),
        L = (0, d.e7)([X.default], () => null != X.default.getAwaitingRemoteSessionInfo()),
        U = (0, d.e7)([eU.Z], () => eU.Z.getGuildId()),
        F = null == t ? void 0 : t.avatarDecoration,
        B = (0, P.R)(t, null != U ? U : void 0),
        G = (0, I.Z)(r ? B : F),
        z = eX.ZP.useName(null != U ? U : void 0, null, t),
        H = null != (e = e$.ZP.useName(t)) ? e : "",
        { voiceActivityStatusEnabled: K } = (0, y.U)({ location: "Account" }),
        [q, Y] = (0, $.G)(null != U ? U : null),
        [J, Q] = (0, V.b)(),
        ee = W.JH.useExperiment({ location: "Account" }).enabled,
        { analyticsLocations: et } = (0, N.ZP)(O.Z.ACCOUNT),
        ea = (0, en.K)({
            user: t,
            guildId: r && null != U ? U : void 0,
        }),
        { isQuestBarEmpty: er, hasLoadedQuestBar: ei } = (0, ec.Ws)({ location: e9.dr.CONFLICT_CHECKS }),
        eo = (0, d.e7)([ed.Z, eG.default, eD.Z], () => {
            let e,
                t = ed.Z.getSyncingWith(),
                n = ed.Z.getActivity(),
                a = [];
            if (
                (null != t ? (e = t.partyId) : null != n && null != n.party && null != n.party.id && (e = n.party.id),
                null != e)
            ) {
                var r;
                a = s()(Array.from(null != (r = eD.Z.getParty(e)) ? r : []))
                    .map((e) => eG.default.getUser(e))
                    .filter(eJ.lm)
                    .value();
            }
            return a.length > 1;
        }),
        es = (0, eu.Un)({ location: "AccountConnected" }),
        em = {
            avatar: [],
            settings: [],
        };
    !Z &&
        (ee && em.avatar.push(u.z.DISPLAY_NAME_STYLES_COACHMARK),
        es && em.avatar.push(u.z.WIDGETS_RTC_UPSELL_COACHMARK));
    let { shouldShowTooltip: ep, dismissTooltip: eh } = tp(te.h7.AUDIO_INPUT),
        { shouldShowTooltip: ex, dismissTooltip: ef } = tp(te.h7.AUDIO_OUTPUT);
    return (0, a.jsx)(N.Gt, {
        value: et,
        children: (0, a.jsx)(tu, {
            currentUser: t,
            username: r ? z : H,
            transitionAccountPanel: r,
            activities: i,
            applicationStream: c,
            voiceChannel: x,
            dismissibleContents: em,
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
            serverMute: g,
            speaking: m,
            speakingWhileMuted: T,
            status: o,
            streaming: l,
            suppress: j,
            webBuildOverride: S,
            awaitingRemote: L,
            isEligibleForPomelo: M,
            voiceActivityStatusEnabled: K,
            nameplate: ea,
            selectedGuildId: U,
            avatarDecoration: G,
            isQuestBarEmpty: er,
            hasLoadedQuestBar: ei,
            isListenAlongVisible: eo,
            shouldShowInputDeviceChangedTooltip: ep,
            shouldShowOutputDeviceChangedTooltip: ex,
            dismissInputDeviceChangedTooltip: eh,
            dismissOutputDeviceChangedTooltip: ef,
        }),
    });
}
function tx(e) {
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
        { showRefreshedAudioContextMenu: g } = (0, e8.e)({ location: "SettingsCogButton" }),
        b = !g && (m || p),
        { name: v } = (0, ee.p6)(te.h7.AUDIO_INPUT),
        { name: j } = (0, ee.p6)(te.h7.AUDIO_OUTPUT);
    !g && m
        ? ((t = tt.intl.format(tt.t["18wnuL"], { inputDeviceName: v })),
          (n = tt.intl.formatToPlainString(tt.t["18wnuL"], { inputDeviceName: v })),
          (i = tt.intl.formatToPlainString(tt.t["18wnuL"], { inputDeviceName: v })))
        : !g && p
          ? ((t = tt.intl.format(tt.t["f+DDY2"], { outputDeviceName: j })),
            (n = tt.intl.formatToPlainString(tt.t["f+DDY2"], { outputDeviceName: j })),
            (i = tt.intl.formatToPlainString(tt.t["f+DDY2"], { outputDeviceName: j })))
          : (t =
                null != l
                    ? tt.intl.formatToPlainString(tt.t.Gzh6ZG, { webBuildOverride: l.id })
                    : tt.intl.string(tt.t.cduTBA));
    let _ = f.ewm,
        y = (0, h.i)();
    return (
        (_ = null != l ? f.bgT : o ? f.Ncx : y.Component),
        (0, a.jsx)(
            e3.Z,
            ti(
                tr(
                    {
                        ref: x,
                        tooltipText: t,
                        tooltipColor: b ? f.r6K.GREEN : void 0,
                        tooltipForceOpen: b,
                        tooltipClassName: tn.accountButtonsTooltip,
                        tooltipContentClassName: tn.accountButtonsTooltipContent,
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
function tf(e) {
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
        P = (0, ew.b)(S),
        { activeVoice: I, mostRecentlyRequestedVoiceId: w, lastInitAttemptMayHaveCrashed: k } = (0, eS.o)(),
        { showSilentLagWarning: R } = (0, eC.Y)(),
        A = null != I,
        D = (0, ey.z)(I),
        U = (0, d.e7)([eL.Z], () => eL.Z.isConnected()),
        { Component: F, events: B, play: z } = P,
        V = i || o ? f.v0G : F,
        W = (0, Z.Z)(n, i, o, s),
        K = R ? tt.intl.string(tt.t.ARRV6u) : null;
    t = _
        ? tt.intl.string(tt.t["29gnR0"])
        : null != K
          ? (0, a.jsxs)("div", {
                className: tn.tooltipWithSubtext,
                children: [
                    (0, a.jsx)(f.Text, {
                        variant: "text-sm/medium",
                        color: "currentColor",
                        children: W,
                    }),
                    (0, a.jsx)(f.Text, {
                        variant: "text-xs/medium",
                        color: "text-feedback-warning",
                        children: K,
                    }),
                ],
            })
          : W;
    let { analyticsLocations: q } = (0, N.ZP)(O.Z.AUDIO_INPUT_BUTTON),
        Y = (0, ej.Hu)({
            location: O.Z.AUDIO_INPUT_BUTTON,
            autoTrackExposure: !0,
        }),
        J = (0, e_.av)({
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
        et = r.useCallback((e) => {
            var t;
            if (
                (0, c.kK)(null == e ? void 0 : e.target, Node) &&
                (null == (t = E.current) ? void 0 : t.contains(e.target))
            )
                return x.F;
            $(!1);
        }, []);
    (0, eK.yp)({
        event: e5.CkL.OPEN_VOICE_FILTER_POPOUT,
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
                    ea(!0), (e = setTimeout(() => ea(!1), ts));
                }, 300)),
            () => {
                ea(!1), clearTimeout(e);
            }
        );
    }, [U]);
    let er = r.useCallback(() => {
            k || (0, eE.r5)();
        }, [k]),
        ei = S ? f.TVs.colors.STATUS_DANGER : R ? f.TVs.colors.STATUS_WARNING : "currentColor",
        el = S || R,
        es = (0, eo.Z)({ location: "Account" }),
        { name: ec } = (0, ee.p6)(te.h7.AUDIO_INPUT),
        { showRefreshedAudioContextMenu: ed } = (0, e8.e)({ location: "MicrophoneButton" }),
        { enabledInputProfiles: eu } = (0, ef.G)({ location: "MicrophoneButton" });
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
                          className: l()(tn.micButtonParent, {
                              [tn.hasColorGlow]: el,
                              [tn.popoutOpen]: i,
                          }),
                          children: [
                              (0, a.jsx)(e3.Z, {
                                  "aria-checked": S,
                                  "aria-label": tt.intl.string(tt.t["w4m94+"]),
                                  className: l()({ [tn.micButtonWithMenu]: !0 }),
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
                                  orangeGlow: R,
                                  plated: null != v,
                                  redGlow: S,
                                  role: "switch",
                                  tooltipColor: _ ? f.r6K.GREEN : void 0,
                                  tooltipForceOpen: _,
                                  tooltipText: t,
                              }),
                              (0, a.jsx)(e3.Z, {
                                  "aria-label": y
                                      ? tt.intl.formatToPlainString(tt.t["18wnuL"], { inputDeviceName: ec })
                                      : tt.intl.string(tt.t.fRzCbG),
                                  className: l()(tn.buttonChevron, { [tn.popoutOpen]: i }),
                                  disabled: s,
                                  icon: (0, a.jsx)(o, {
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
                                  tooltipColor: y ? f.r6K.GREEN : void 0,
                                  tooltipContentClassName: tn.accountButtonsTooltipContent,
                                  tooltipForceOpen: y,
                                  tooltipPositionKeyStemOverride: y
                                      ? tt.intl.formatToPlainString(tt.t["18wnuL"], { inputDeviceName: ec })
                                      : void 0,
                                  tooltipShouldShow: !i,
                                  tooltipText: y
                                      ? tt.intl.format(tt.t["18wnuL"], { inputDeviceName: ec })
                                      : tt.intl.string(tt.t.fRzCbG),
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
                  className: l()(tn.micButtonParent, { [tn.hasColorGlow]: el }),
                  children: [
                      (0, a.jsx)(e3.Z, {
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
                          className: l()({ [tn.micButtonWithMenu]: Y }),
                          orangeGlow: R,
                          redGlow: S,
                          "aria-label": tt.intl.string(tt.t["w4m94+"]),
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
                              onRequestClose: et,
                              shouldShow: Q,
                              renderPopout: (e) => {
                                  let { closePopout: t } = e;
                                  return (0, a.jsx)(eP.l, { onSettingsButtonClick: t });
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
                                          (es && o.push(u.z.VOICE_FILTER_EARLY_ACCESS_COACHMARK),
                                          o.push(u.z.VOICE_FILTER_LAUNCH_COACHMARK),
                                          J && U && !A && o.push(u.z.VOICE_FILTER_FIRST_USE_COACHMARK)),
                                      (0, a.jsx)("div", {
                                          children: (0, a.jsx)(H.ZP, {
                                              bypassAutoDismiss: !0,
                                              contentTypes: o,
                                              children: (e) => {
                                                  let { visibleContent: t, markAsDismissed: i } = e,
                                                      o = null;
                                                  t === u.z.VOICE_FILTER_EARLY_ACCESS_COACHMARK
                                                      ? (o = (0, a.jsx)(eN.U, {
                                                            markAsDismissed: i,
                                                            onCTA: () => $(!0),
                                                        }))
                                                      : t === u.z.VOICE_FILTER_LAUNCH_COACHMARK
                                                        ? (o = (0, a.jsx)(eO.n, {
                                                              markAsDismissed: i,
                                                              onCTA: () => $(!0),
                                                          }))
                                                        : t === u.z.VOICE_FILTER_FIRST_USE_COACHMARK &&
                                                          (o = (0, a.jsx)(eT.v, {
                                                              markAsDismissed: i,
                                                              onCTA: () => $(!0),
                                                          }));
                                                  let c = () =>
                                                      (0, a.jsx)(
                                                          e3.Z,
                                                          tr(
                                                              {
                                                                  ref: T,
                                                                  plated: null != v,
                                                                  tooltipForceOpen: en,
                                                                  tooltipColor: en ? f.r6K.GREEN : void 0,
                                                                  tooltipContentClassName: en
                                                                      ? tn.voiceFilterWarning
                                                                      : void 0,
                                                                  tooltipText: en
                                                                      ? (0, a.jsxs)(a.Fragment, {
                                                                            children: [
                                                                                (0, a.jsx)("img", {
                                                                                    alt:
                                                                                        null != D
                                                                                            ? tt.intl.string(D.name)
                                                                                            : "",
                                                                                    src: null == D ? void 0 : D.iconURL,
                                                                                    draggable: !1,
                                                                                }),
                                                                                (0, a.jsx)(f.Text, {
                                                                                    variant: "text-sm/medium",
                                                                                    color: "always-white",
                                                                                    children: tt.intl.string(
                                                                                        tt.t.VlC1dX,
                                                                                    ),
                                                                                }),
                                                                            ],
                                                                        })
                                                                      : tt.intl.string(tt.t.Hapb4O),
                                                                  icon: (0, a.jsx)(l, {
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
                                                                  "aria-label": tt.intl.string(tt.t.Hapb4O),
                                                                  disabled: s,
                                                                  onClick: (e) => {
                                                                      i(e7.L.INDIRECT_ACTION),
                                                                          n(e),
                                                                          null != w && !Q && k
                                                                              ? (0, eI.$)(() => $(!0))
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
function tg(e) {
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
        { name: _ } = (0, ee.p6)(te.h7.AUDIO_OUTPUT),
        { showRefreshedAudioContextMenu: y } = (0, e8.e)({ location: "HeadphonesButton" }),
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
                          className: l()(tn.micButtonParent, {
                              [tn.hasColorGlow]: h,
                              [tn.popoutOpen]: s,
                          }),
                          children: [
                              (0, a.jsx)(e3.Z, {
                                  "aria-checked": h,
                                  "aria-label": tt.intl.string(tt.t.wjcRFR),
                                  className: tn.micButtonWithMenu,
                                  disabled: i,
                                  icon: (0, a.jsx)(j, {
                                      size: "custom",
                                      width: 20,
                                      height: 20,
                                      color: h ? f.TVs.colors.STATUS_DANGER : "currentColor",
                                      className: c,
                                  }),
                                  iconForeground: h ? tn.strikethrough : void 0,
                                  innerClassName: l()({ [tn.redIcon]: n }),
                                  onClick: o,
                                  onContextMenu: r,
                                  onMouseEnter: b,
                                  onMouseLeave: v,
                                  plated: null != d,
                                  redGlow: h,
                                  role: "switch",
                                  tooltipText: C,
                              }),
                              (0, a.jsx)(e3.Z, {
                                  "aria-label": u
                                      ? tt.intl.formatToPlainString(tt.t["f+DDY2"], { outputDeviceName: _ })
                                      : tt.intl.string(tt.t.aA4VcX),
                                  className: l()(tn.buttonChevron, { [tn.popoutOpen]: s }),
                                  disabled: i,
                                  icon: (0, a.jsx)(m, {
                                      className: tn.buttonChevronIcon,
                                      size: "custom",
                                      width: 12,
                                      height: 12,
                                      color: h ? f.TVs.colors.STATUS_DANGER : "currentColor",
                                  }),
                                  onClick: r,
                                  onContextMenu: r,
                                  plated: null != d,
                                  redGlow: h,
                                  tooltipClassName: tn.accountButtonsTooltip,
                                  tooltipColor: u ? f.r6K.GREEN : void 0,
                                  tooltipContentClassName: tn.accountButtonsTooltipContent,
                                  tooltipForceOpen: u,
                                  tooltipPositionKeyStemOverride: u
                                      ? tt.intl.formatToPlainString(tt.t["f+DDY2"], { outputDeviceName: _ })
                                      : void 0,
                                  tooltipShouldShow: !s,
                                  tooltipText: u
                                      ? tt.intl.format(tt.t["f+DDY2"], { outputDeviceName: _ })
                                      : tt.intl.string(tt.t.aA4VcX),
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
                  innerClassName: l()({ [tn.redIcon]: n }),
                  iconForeground: h ? tn.strikethrough : void 0,
                  role: "switch",
                  redGlow: h,
                  "aria-label": tt.intl.string(tt.t.wjcRFR),
                  "aria-checked": h,
                  disabled: i,
              }),
          });
}
