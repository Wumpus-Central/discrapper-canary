n.d(t, {
    Z: () => tv,
    m: () => tx,
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
    S = n(771173),
    E = n(963056),
    O = n(570928),
    T = n(100527),
    N = n(906732),
    P = n(541638),
    w = n(676742),
    I = n(1585),
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
    V = n(427217),
    H = n(812055),
    W = n(243778),
    z = n(594928),
    q = n(386725),
    K = n(821795),
    Q = n(287647),
    Y = n(892567),
    X = n(258609),
    J = n(53891),
    $ = n(291533),
    ee = n(427347),
    et = n(72897),
    en = n(78933),
    ea = n(850020),
    er = n(379839),
    ei = n(359135),
    el = n(516817),
    es = n(332473),
    eo = n(963590),
    ec = n(494424),
    ed = n(562705),
    eu = n(299886),
    em = n(375720),
    ep = n(659302),
    eh = n(768419),
    ef = n(172416),
    ex = n(184301),
    eb = n(670188),
    eg = n(620799),
    ev = n(313789),
    ej = n(846071),
    ey = n(518596),
    eC = n(879815),
    e_ = n(294629),
    eS = n(875527),
    eE = n(702977),
    eO = n(56848),
    eT = n(940315),
    eN = n(378441),
    eP = n(358820),
    ew = n(723547),
    eI = n(361045),
    ek = n(74650),
    eR = n(306609),
    eA = n(170293),
    eD = n(8404),
    eZ = n(199902),
    eL = n(314897),
    eM = n(592125),
    eU = n(831506),
    eB = n(819640),
    eF = n(131951),
    eG = n(19780),
    eV = n(914010),
    eH = n(885110),
    eW = n(606304),
    ez = n(246946),
    eq = n(594174),
    eK = n(78839),
    eQ = n(626135),
    eY = n(768581),
    eX = n(572004),
    eJ = n(459273),
    e$ = n(585483),
    e0 = n(70956),
    e1 = n(823379),
    e4 = n(5192),
    e3 = n(374023),
    e8 = n(51144),
    e7 = n(998502),
    e5 = n(660230),
    e6 = n(853170),
    e2 = n(422202),
    e9 = n(870569),
    te = n(345243),
    tt = n(115530),
    tn = n(981631),
    ta = n(921944),
    tr = n(324805),
    ti = n(65154),
    tl = n(388032),
    ts = n(484036);
function to(e, t, n) {
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
function tc(e) {
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
                to(e, t, n[t]);
            });
    }
    return e;
}
function td(e, t) {
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
let tu = e7.ZP.getEnableHardwareAcceleration() ? x.Xo$ : x.qEK,
    tm = 2 * e0.Z.Millis.MINUTE,
    tp = 3 * e0.Z.Millis.SECOND,
    th = 5 * e0.Z.Millis.SECOND;
function tf(e) {
    let {
            ref: t,
            speaking: n,
            latched: i,
            streaming: s,
            currentUser: o,
            status: c,
            handleClick: d,
            handleMouseLeave: u,
            renderNameTag: m,
            nameplate: p,
            selectedGuildId: h,
            transitionAccountPanel: f,
            avatarDecoration: b,
            "data-jump-section": v,
        } = e,
        j = r.useRef(null),
        C = null != t ? t : j,
        _ = (0, eY.NZ)({
            avatarDecoration: b,
            size: (0, I.y9)(x.EFr.SIZE_32),
        }),
        S = (0, q.Z)(),
        {
            updateOpenPopoutRef: E,
            highlightBadge: O,
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
                (0, y.Z)(() => l(!0), 750),
                r.useEffect(() => {
                    let t = (t) => {
                        var n;
                        let { highlightBadge: r } = t;
                        null != r && a(r), null == (n = e.current) || n.call(e);
                    };
                    return (
                        e$.S.subscribe(tn.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, t),
                        () => {
                            e$.S.unsubscribe(tn.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, t);
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
        N = (0, er.A)(p);
    if (null == o) return null;
    let P = f && h !== tn.I_8 && h !== tn.ME && null != h ? h : void 0;
    return (0, a.jsx)(g.Z, {
        object: tn.qAy.AVATAR,
        children: (0, a.jsx)(eb.Z, {
            user: o,
            targetElementRef: C,
            clickTrap: !0,
            preload: () =>
                (0, ex.Z)(o.id, o.getAvatarURL(P, eb.I), {
                    type: "account_popout",
                    withMutualGuilds: !1,
                    withMutualFriends: !1,
                    guildId: P,
                }),
            renderPopout: (e, t) => {
                let { closePopout: n, setPopoutRef: r } = e;
                return (0, a.jsx)(en.Z, {
                    currentUser: o,
                    highlightBadge: O,
                    openedAt: t,
                    onClose: () => {
                        null == n || n();
                    },
                    setPopoutRef: r,
                    guildId: P,
                    guildProfileEnabled: f,
                });
            },
            position: "top",
            align: "left",
            animation: x.yRy.Animation.FADE,
            spacing: 14,
            fixed: !0,
            ignoreModalClicks: !0,
            onRequestClose: () => {
                u(), T(void 0);
            },
            children: (e) => (
                E(e),
                (0, a.jsxs)(
                    x.P3F,
                    td(
                        tc(
                            {
                                innerRef: C,
                                style: N,
                            },
                            e,
                        ),
                        {
                            onClick: (t) => {
                                var n;
                                null == (n = e.onClick) || n.call(e, t), null == d || d(t);
                            },
                            "aria-label": tl.intl.string(tl.t["3Uj+2p"]),
                            "data-jump-section": v,
                            className: l()(ts.avatarWrapper, { [ts.plated]: null != p }),
                            children: [
                                (0, a.jsx)(tu, {
                                    size: x.EFr["SIZE_".concat(32)],
                                    src: o.getAvatarURL(f ? h : void 0, 28, !1),
                                    avatarDecoration: _,
                                    "aria-label": o.username,
                                    status: s ? tn.Skl.STREAMING : c,
                                    isSpeaking: n,
                                    isLatched: i,
                                    className: ts.avatar,
                                }),
                                (0, a.jsx)("div", {
                                    className: l()(ts.nameTag, { [ts.canCopy]: eX.wS }),
                                    children: m(S),
                                }),
                            ],
                        },
                    ),
                )
            ),
        }),
    });
}
class tx extends r.PureComponent {
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
                tl.intl.string(tl.t.MSaeTe),
                tl.intl.string(tl.t.UmrCw7),
                tl.intl.string(tl.t.gKE0Jq),
                tl.intl.string(tl.t["4DSKbi"]),
                tl.intl.string(tl.t["+8ENdT"]),
                tl.intl.string(tl.t.GlWHv8),
                tl.intl.string(tl.t.hIzxU9),
                tl.intl.string(tl.t["26uMPL"]),
                tl.intl.string(tl.t.uFs7R2),
                tl.intl.string(tl.t.bLXdcY),
                tl.intl.string(tl.t.gPg9fS),
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
            return (0, a.jsx)(O.Z, {
                hoverText: l,
                forceHover: e,
                children: (0, a.jsx)(S.Z, {
                    location: "Account",
                    user: r,
                    activities: t,
                    applicationStream: n,
                    voiceChannel: s ? o : void 0,
                    textClassName: ts.activityStatusText,
                    hideTooltip: !0,
                }),
            });
        let c =
            null == t
                ? void 0
                : t.find((e) => {
                      let { type: t } = e;
                      return t === tn.IIU.CUSTOM_STATUS;
                  });
        return null != c
            ? (0, a.jsx)(O.Z, {
                  hoverText: l,
                  forceHover: e,
                  children: (0, a.jsx)(V.Z, {
                      activity: c,
                      emojiClassName: ts.emoji,
                      className: ts.customStatus,
                  }),
              })
            : null != i && i !== tn.Skl.UNKNOWN && r.hasUniqueUsername()
              ? (0, a.jsx)(O.Z, {
                    hoverText: l,
                    forceHover: e,
                    children: (0, a.jsx)(E.Z, { text: e8.ZP.humanizeStatus(i) }),
                })
              : l;
    }
    renderAvatarWithPopout(e) {
        let {
            focusSectionProps: { "data-jump-section": t },
            onClick: n,
        } = e;
        return (0, a.jsx)(
            tf,
            td(tc({}, this.props), {
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
            return (0, a.jsx)(J.ZP, {
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
                      (0, a.jsx)(ed.Z, {
                          groupName: ta.R.ACCOUNT_NAME_ZONE,
                          targetElementRef: this.avatarWithPopoutRef,
                      }),
                      (0, a.jsx)(W.ZP, {
                          contentTypes: n.avatar,
                          groupName: ta.R.ACCOUNT_NAME_ZONE,
                          children: (t) => {
                              let { visibleContent: n, markAsDismissed: r } = t;
                              switch (n) {
                                  case u.z.WIDGETS_RTC_UPSELL_COACHMARK:
                                      return (0, a.jsx)(eg.Z, {
                                          markAsDismissed: r,
                                          targetElementRef: this.avatarWithPopoutRef,
                                          children: this.renderAvatarWithPopout({ focusSectionProps: e }),
                                      });
                                  case u.z.DISPLAY_NAME_STYLES_COACHMARK:
                                      return (0, a.jsx)(Q.e, {
                                          markAsDismissed: r,
                                          targetElementRef: this.avatarWithPopoutRef,
                                          children: this.renderAvatarWithPopout({ focusSectionProps: e }),
                                      });
                                  case u.z.TENURE_BADGE_CHURN_REMINDER:
                                      return (0, a.jsx)(ec.Z, {
                                          markAsDismissed: r,
                                          mode: "popover",
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
            : (0, a.jsxs)(a.Fragment, {
                  children: [
                      (0, a.jsx)(x.Wdt, {
                          children: (e) =>
                              (0, a.jsxs)("div", {
                                  ref: this.containerRef,
                                  className: l()(ts.container, {
                                      [ts.containerRtcOpened]: null != n,
                                      [ts.containerQuestBarVisible]: !r,
                                      [ts.containerListenAlongVisible]: i,
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
                                          tb,
                                          td(tc({}, this.props, this.state), {
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
            to(this, "copiedTimeout", new m.V7()),
            to(this, "copiedDecayTimeout", new m.V7()),
            to(this, "speakingWhileMutedTooltipTimeout", new m.V7()),
            to(this, "lastSpeakingWhileMutedNotificationTime", void 0),
            to(this, "state", {
                hovered: !1,
                copiedStreak: 0,
                shouldShowNametagTooltip: !1,
                shouldShowCopiedFeedback: !1,
                shouldShowSpeakingWhileMutedTooltip: !1,
                hoveringOnMute: !1,
            }),
            to(this, "containerRef", r.createRef()),
            to(this, "avatarWithPopoutRef", r.createRef()),
            to(this, "handleToggleSelfMute", () => {
                let { serverMute: e, suppress: t, selfMute: n } = this.props;
                (0, B.Z)(e, t, tn.jXE.ACCOUNT_PANEL), (0, F.v)(T.Z.ACCOUNT, F.d.MIC, n);
            }),
            to(this, "handleToggleSelfDeaf", () => {
                let { serverDeaf: e, selfDeaf: t } = this.props;
                (0, U.Z)(e, tn.jXE.ACCOUNT_PANEL), (0, F.v)(T.Z.ACCOUNT, F.d.DEAFEN, !t);
            }),
            to(this, "handleOpenAccountSettings", () => {
                this.dismissTooltips(),
                    eG.Z.isConnected()
                        ? (0, ey.openUserSettings)(ev.n.VOICE_AND_VIDEO_PANEL, { section: tn.oAB.VOICE })
                        : (0, ey.openUserSettings)();
            }),
            to(this, "handleOpenSettingsContextMenu", (e) => {
                let { currentUser: t } = this.props;
                null != t &&
                    (0, b.jW)(e, async () => {
                        let { default: e } = await n.e("2535").then(n.bind(n, 923422));
                        return (n) =>
                            (0, a.jsx)(
                                e,
                                td(tc({}, n), {
                                    user: t,
                                    premiumSubscription: this.props.premiumSubscription,
                                    webBuildOverride: this.props.webBuildOverride,
                                    onInteraction: (0, G.u)("UserSettingsCogContextMenu", T.Z.ACCOUNT),
                                }),
                            );
                    });
            }),
            to(this, "audioOnInteractionHandler", (0, G.u)("AudioDeviceMenu", T.Z.ACCOUNT)),
            to(this, "handleInputAudioContextMenu", (e, t) => {
                this.dismissTooltips(),
                    (0, b.jW)(e, async () => {
                        let { default: e } = await Promise.resolve().then(n.bind(n, 659580));
                        return () => {
                            let { enabledInputProfiles: n } = (0, ej.G)({ location: "Account" });
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
            to(this, "handleOutputAudioContextMenu", (e, t) => {
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
            to(this, "handleMouseEnter", () => {
                this.setState({ hovered: !0 });
            }),
            to(this, "handleMouseLeave", () => {
                this.setState({ hovered: !1 });
            }),
            to(this, "handleMouseEnterMute", () => {
                this.setState({
                    hoveringOnMute: !0,
                    shouldShowSpeakingWhileMutedTooltip: !1,
                }),
                    this.speakingWhileMutedTooltipTimeout.stop();
            }),
            to(this, "handleMouseLeaveMute", () => {
                this.setState({ hoveringOnMute: !1 });
            }),
            to(this, "dismissSpeakingWhileMutedTooltip", () => {
                this.setState({ shouldShowSpeakingWhileMutedTooltip: !1 }),
                    this.speakingWhileMutedTooltipTimeout.stop();
            }),
            to(this, "dismissTooltips", () => {
                var e, t, n, a;
                null == (e = (t = this.props).dismissInputDeviceChangedTooltip) || e.call(t),
                    null == (n = (a = this.props).dismissOutputDeviceChangedTooltip) || n.call(a),
                    this.dismissSpeakingWhileMutedTooltip();
            }),
            to(this, "handleCopyTag", () => {
                let { currentUser: e } = this.props,
                    { shouldShowNametagTooltip: t, copiedStreak: n } = this.state;
                if (null == e) return;
                (0, eX.JG)(
                    e8.ZP.getUserTag(e, {
                        decoration: "never",
                        identifiable: "always",
                    }),
                ),
                    eQ.default.track(tn.rMx.TEXT_COPIED, { type: "User Tag" });
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
            to(this, "handleOccludedChanged", () => {
                let { occluded: e } = this.props;
                e &&
                    this.setState({
                        shouldShowNametagTooltip: !1,
                        shouldShowSpeakingWhileMutedTooltip: !1,
                    });
            }),
            to(this, "handleSpeakingWhileMutedChanged", () => {
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
                        Date.now() - this.lastSpeakingWhileMutedNotificationTime > tm;
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
            to(this, "renderNameTag", (e) => {
                let { currentUser: t, username: n } = this.props;
                return null == t
                    ? null
                    : (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)("div", {
                                  className: ts.panelTitleContainer,
                                  children: (0, a.jsx)(tt.Z, {
                                      className: l()({ [ts.withDisplayNameStyles]: null != e }),
                                      children: (0, a.jsx)(Y.Z, {
                                          userName: n,
                                          displayNameStyles: e,
                                          effectDisplayType: this.state.hovered ? K.F.ANIMATED : K.F.STATIC,
                                          loop: !0,
                                          inProfile: !0,
                                      }),
                                  }),
                              }),
                              (0, a.jsx)("div", {
                                  className: ts.panelSubtextContainer,
                                  children: (0, a.jsx)(te.Z, { children: this.renderStatus() }),
                              }),
                          ],
                      });
            });
    }
}
function tb(e) {
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
        E = (0, er.A)(j);
    return (0, a.jsxs)("div", {
        className: ts.buttons,
        style: E,
        children: [
            (0, a.jsx)(ty, {
                accountContainerRef: y,
                selfMute: n,
                serverMute: i,
                suppress: s,
                awaitingRemote: r,
                onMouseEnter: u,
                onMouseLeave: m,
                onClick: h,
                onContextMenu: f,
                iconForeground: null != j ? ts.iconForeground : void 0,
                nameplate: j,
                shouldShowInputDeviceChangedTooltip: C,
                shouldShowSpeakingWhileMutedTooltip: o,
                dismissTooltips: S,
            }),
            (0, a.jsx)(tC, {
                selfDeaf: t,
                serverDeaf: l,
                onClick: p,
                onContextMenu: x,
                awaitingRemote: r,
                iconForeground: null != j ? ts.iconForeground : void 0,
                nameplate: j,
                shouldShowOutputDeviceChangedTooltip: _,
                dismissTooltips: S,
            }),
            (0, a.jsx)(tj, {
                isEligibleForPomelo: c,
                webBuildOverride: d,
                onClick: b,
                onContextMenu: g,
                dismissibleContents: v.settings,
                iconForeground: null != j ? ts.iconForeground : void 0,
                nameplate: j,
                shouldShowInputDeviceChangedTooltip: C,
                shouldShowOutputDeviceChangedTooltip: _,
            }),
        ],
    });
}
function tg(e) {
    let { shouldShowDeviceChangedNotifications: t } = (0, e2.P)({
            location: "Account.useDeviceChangedTooltip",
            autoTrackExposure: !1,
        }),
        n = (0, d.e7)([eG.Z], () => null != eG.Z.getChannelId()),
        a = (0, et.Fh)(e),
        i = r.useRef(new m.V7()),
        [l, s] = r.useState(!1);
    r.useEffect(() => {
        n &&
            a &&
            ((0, e2._)({
                location: "Account.useDeviceChangedTooltip (exposure tracking)",
                autoTrackExposure: !0,
            }),
            t &&
                (s(!0),
                i.current.start(th, () => {
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
function tv() {
    var e;
    let t = (0, d.e7)([eq.default], () => eq.default.getCurrentUser()),
        n = (0, d.e7)([eL.default], () => eL.default.getId()),
        r = e5.K.useConfig({ location: "AccountConnected" }).transitionAccountPanel,
        {
            activities: i,
            streaming: l,
            status: s,
        } = (0, d.cj)([eH.Z], () => {
            let e = eH.Z.getActivities();
            return {
                activities: e,
                streaming:
                    null !=
                    e.find((e) => {
                        let { type: t } = e;
                        return t === tn.IIU.STREAMING;
                    }),
                status: eH.Z.getStatus(),
            };
        }),
        c = (0, d.e7)([eZ.Z], () => eZ.Z.getAnyStreamForUser(n)),
        m = (0, v.Z)({ userId: n }),
        p = (0, d.e7)([eW.Z], () => eW.Z.isCurrentUserPTTLatched()),
        h = e8.ZP.useUserTag(t, { decoration: "never" }),
        f = (0, d.e7)([ez.Z], () => ez.Z.hidePersonalInformation),
        b = (0, d.e7)([eG.Z, eM.Z], () => {
            let e = eG.Z.getChannelId();
            return null != e ? eM.Z.getChannel(e) : null;
        }),
        { mute: g, selfMute: j, suppress: y } = (0, e_.Z)(b),
        { selfDeaf: _, deaf: S } = (0, eC.Z)(b),
        E = (0, d.e7)([k.C], () => {
            var e;
            return (0, R.fD)()
                ? null == (e = k.C.getCurrentBuildOverride().overrides)
                    ? void 0
                    : e.discord_web
                : null;
        }),
        O = (0, d.e7)([eK.Z], () => eK.Z.getPremiumTypeSubscription()),
        I = (0, d.e7)([eF.Z], () => eF.Z.getSpeakingWhileMuted()),
        D = (0, d.e7)([A.Z], () => A.Z.isFullscreenInContext()),
        Z = (0, d.e7)([eB.Z], () => eB.Z.hasLayers()),
        L = (0, x.s9z)(x.JQI) || Z || e3.s.isDisallowPopupsSet() || D,
        M = (0, es.b)(),
        U = (0, d.e7)([X.default], () => null != X.default.getAwaitingRemoteSessionInfo()),
        B = (0, d.e7)([eV.Z], () => eV.Z.getGuildId()),
        F = null == t ? void 0 : t.avatarDecoration,
        G = (0, P.R)(t, null != B ? B : void 0),
        V = (0, w.Z)(r ? G : F),
        W = e4.ZP.useName(null != B ? B : void 0, null, t),
        q = null != (e = e8.ZP.useName(t)) ? e : "",
        { voiceActivityStatusEnabled: K } = (0, C.U)({ location: "Account" }),
        [Q, Y] = (0, $.G)(null != B ? B : null),
        [J, ee] = (0, H.b)(),
        et = z.JH.useExperiment({ location: "Account" }).enabled,
        en = (0, ec.c)(t, "Account"),
        er = eu.H.useConfig({ location: "Account" }).enabled,
        { analyticsLocations: ei } = (0, N.ZP)(T.Z.ACCOUNT),
        el = (0, ea.K)({
            user: t,
            guildId: r && null != B ? B : void 0,
        }),
        { isQuestBarEmpty: eo, hasLoadedQuestBar: ed } = (0, ep.Ws)({ location: tr.dr.CONFLICT_CHECKS }),
        em = (0, d.e7)([eh.Z, eq.default, eU.Z], () => {
            let e,
                t = eh.Z.getSyncingWith(),
                n = eh.Z.getActivity(),
                a = [];
            if (
                (null != t ? (e = t.partyId) : null != n && null != n.party && null != n.party.id && (e = n.party.id),
                null != e)
            ) {
                var r;
                a = o()(Array.from(null != (r = eU.Z.getParty(e)) ? r : []))
                    .map((e) => eq.default.getUser(e))
                    .filter(e1.lm)
                    .value();
            }
            return a.length > 1;
        }),
        ex = (0, ef.Un)({ location: "AccountConnected" }),
        eb = {
            avatar: [],
            settings: [],
        };
    !L &&
        (et && eb.avatar.push(u.z.DISPLAY_NAME_STYLES_COACHMARK),
        en && eb.avatar.push(u.z.TENURE_BADGE_CHURN_REMINDER),
        ex && eb.avatar.push(u.z.WIDGETS_RTC_UPSELL_COACHMARK),
        er && eb.settings.push(u.z.NITRO_PRIVACY_PERK_BETA_COACHMARK));
    let { shouldShowTooltip: eg, dismissTooltip: ev } = tg(ti.h7.AUDIO_INPUT),
        { shouldShowTooltip: ej, dismissTooltip: ey } = tg(ti.h7.AUDIO_OUTPUT);
    return (0, a.jsx)(N.Gt, {
        value: ei,
        children: (0, a.jsx)(tx, {
            currentUser: t,
            username: r ? W : q,
            transitionAccountPanel: r,
            activities: i,
            applicationStream: c,
            voiceChannel: b,
            dismissibleContents: eb,
            visibleRecurringAvatarDc: Q,
            markRecurringAvatarDcAsDismissed: Y,
            visibleRecurringDoNotDisturbReminderPopoverDc: J,
            markRecurringDoNotDisturbReminderPopoverDcAsDismissed: ee,
            userTag: h,
            hidePrivateData: f,
            occluded: L,
            premiumSubscription: O,
            selfDeaf: _,
            selfMute: j,
            serverDeaf: S,
            serverMute: g,
            speaking: m,
            speakingWhileMuted: I,
            latched: p && null != b,
            status: s,
            streaming: l,
            suppress: y,
            webBuildOverride: E,
            awaitingRemote: U,
            isEligibleForPomelo: M,
            voiceActivityStatusEnabled: K,
            nameplate: el,
            selectedGuildId: B,
            avatarDecoration: V,
            isQuestBarEmpty: eo,
            hasLoadedQuestBar: ed,
            isListenAlongVisible: em,
            shouldShowInputDeviceChangedTooltip: eg,
            shouldShowOutputDeviceChangedTooltip: ej,
            dismissInputDeviceChangedTooltip: ev,
            dismissOutputDeviceChangedTooltip: ey,
        }),
    });
}
function tj(e) {
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
        { showRefreshedAudioContextMenu: v } = (0, e6.e)({ location: "SettingsCogButton" }),
        j = !v && (f || b),
        { name: y } = (0, et.p6)(ti.h7.AUDIO_INPUT),
        { name: C } = (0, et.p6)(ti.h7.AUDIO_OUTPUT);
    !v && f
        ? ((t = tl.intl.format(tl.t["18wnuD"], { inputDeviceName: y })),
          (n = tl.intl.formatToPlainString(tl.t["18wnuD"], { inputDeviceName: y })),
          (i = tl.intl.formatToPlainString(tl.t["18wnuD"], { inputDeviceName: y })))
        : !v && b
          ? ((t = tl.intl.format(tl.t["f+DDY/"], { outputDeviceName: C })),
            (n = tl.intl.formatToPlainString(tl.t["f+DDY/"], { outputDeviceName: C })),
            (i = tl.intl.formatToPlainString(tl.t["f+DDY/"], { outputDeviceName: C })))
          : (t =
                null != l
                    ? tl.intl.formatToPlainString(tl.t.Gzh6ZP, { webBuildOverride: l.id })
                    : tl.intl.string(tl.t.cduTBL));
    let _ = x.ewm,
        S = (0, h.i)();
    return (
        (_ = null != l ? x.bgT : s ? x.Ncx : S.Component),
        (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(
                    e9.Z,
                    td(
                        tc(
                            {
                                ref: g,
                                tooltipText: t,
                                tooltipColor: j ? x.r6K.GREEN : void 0,
                                tooltipForceOpen: j,
                                tooltipClassName: ts.accountButtonsTooltip,
                                tooltipContentClassName: ts.accountButtonsTooltipContent,
                                tooltipPositionKeyStemOverride: n,
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
                (0, a.jsx)(W.ZP, {
                    contentTypes: d,
                    groupName: ta.R.ACCOUNT_NAME_ZONE,
                    children: (e) => {
                        let { visibleContent: t, markAsDismissed: n } = e;
                        if (t === u.z.NITRO_PRIVACY_PERK_BETA_COACHMARK)
                            return (0, a.jsx)(em.a, {
                                targetElementRef: g,
                                markAsDismissed: n,
                            });
                    },
                }),
            ],
        })
    );
}
function ty(e) {
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
            shouldShowSpeakingWhileMutedTooltip: y,
            shouldShowInputDeviceChangedTooltip: C,
            dismissTooltips: _,
        } = e,
        S = n || s || i,
        E = r.useRef(null),
        O = r.useRef(null),
        P = (0, eD.b)(S),
        { activeVoice: w, mostRecentlyRequestedVoiceId: I, lastInitAttemptMayHaveCrashed: k } = (0, eN.o)(),
        { showSilentLagWarning: R } = (0, eT.Y)(),
        A = null != w,
        D = (0, eO.z)(w),
        U = (0, d.e7)([eG.Z], () => eG.Z.isConnected()),
        { Component: B, events: F, play: V } = P,
        H = i || s ? x.v0G : B,
        z = (0, Z.Z)(n, i, s, o),
        q = R ? tl.intl.string(tl.t.ARRV6m) : null;
    t = y
        ? tl.intl.string(tl.t["29gnR4"])
        : null != q
          ? (0, a.jsxs)("div", {
                className: ts.tooltipWithSubtext,
                children: [
                    (0, a.jsx)(x.Text, {
                        variant: "text-sm/medium",
                        color: "currentColor",
                        children: z,
                    }),
                    (0, a.jsx)(x.Text, {
                        variant: "text-xs/medium",
                        color: "text-feedback-warning",
                        children: q,
                    }),
                ],
            })
          : z;
    let { analyticsLocations: K } = (0, N.ZP)(T.Z.AUDIO_INPUT_BUTTON),
        Q = (0, eS.Hu)({
            location: T.Z.AUDIO_INPUT_BUTTON,
            autoTrackExposure: !0,
        }),
        Y = (0, eE.av)({
            location: T.Z.AUDIO_INPUT_BUTTON,
            autoTrackExposure: !0,
        });
    r.useEffect(() => () => V(), [S, V]);
    let X = r.useCallback(
            (e) => {
                g(e, K);
            },
            [g, K],
        ),
        [J, $] = r.useState(!1),
        ee = r.useCallback((e) => {
            var t;
            if (
                (0, c.kK)(null == e ? void 0 : e.target, Node) &&
                (null == (t = E.current) ? void 0 : t.contains(e.target))
            )
                return f.F;
            $(!1);
        }, []);
    (0, eJ.yp)({
        event: tn.CkL.OPEN_VOICE_FILTER_POPOUT,
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
                    ea(!0), (e = setTimeout(() => ea(!1), tp));
                }, 300)),
            () => {
                ea(!1), clearTimeout(e);
            }
        );
    }, [U]);
    let er = r.useCallback(() => {
            k || (0, eP.r5)();
        }, [k]),
        ei = S ? x.TVs.colors.STATUS_DANGER : R ? x.TVs.colors.STATUS_WARNING : "currentColor",
        el = S || R,
        es = (0, eo.Z)({ location: "Account" }),
        { name: ec } = (0, et.p6)(ti.h7.AUDIO_INPUT),
        { showRefreshedAudioContextMenu: ed } = (0, e6.e)({ location: "MicrophoneButton" }),
        { enabledInputProfiles: eu } = (0, ej.G)({ location: "MicrophoneButton" });
    return ed
        ? (0, a.jsx)(N.Gt, {
              value: K,
              children: (0, a.jsx)(x.yRy, {
                  targetElementRef: E,
                  renderPopout: (e) => {
                      let { closePopout: t } = e;
                      return (
                          _(),
                          (0, a.jsx)(N.Gt, {
                              value: K,
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
                  animation: x.yRy.Animation.FADE,
                  spacing: 4,
                  children: (e, n) => {
                      let { onClick: r } = e,
                          { isShown: i } = n,
                          s = i ? x.u04 : x.CJ0;
                      return (0, a.jsxs)("div", {
                          ref: E,
                          className: l()(ts.micButtonParent, {
                              [ts.hasColorGlow]: el,
                              [ts.popoutOpen]: i,
                          }),
                          children: [
                              (0, a.jsx)(e9.Z, {
                                  "aria-checked": S,
                                  "aria-label": tl.intl.string(tl.t.w4m945),
                                  className: l()({ [ts.micButtonWithMenu]: !0 }),
                                  disabled: o,
                                  icon: (0, a.jsx)(H, {
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
                              (0, a.jsx)(e9.Z, {
                                  "aria-label": C
                                      ? tl.intl.formatToPlainString(tl.t["18wnuD"], { inputDeviceName: ec })
                                      : tl.intl.string(tl.t.fRzCbB),
                                  className: l()(ts.buttonChevron, { [ts.popoutOpen]: i }),
                                  disabled: o,
                                  icon: (0, a.jsx)(s, {
                                      className: ts.buttonChevronIcon,
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
                                  tooltipClassName: ts.accountButtonsTooltip,
                                  tooltipColor: C ? x.r6K.GREEN : void 0,
                                  tooltipContentClassName: ts.accountButtonsTooltipContent,
                                  tooltipForceOpen: C,
                                  tooltipPositionKeyStemOverride: C
                                      ? tl.intl.formatToPlainString(tl.t["18wnuD"], { inputDeviceName: ec })
                                      : void 0,
                                  tooltipShouldShow: !i,
                                  tooltipText: C
                                      ? tl.intl.format(tl.t["18wnuD"], { inputDeviceName: ec })
                                      : tl.intl.string(tl.t.fRzCbB),
                              }),
                          ],
                      });
                  },
              }),
          })
        : (0, a.jsx)(N.Gt, {
              value: K,
              children: (0, a.jsxs)("div", {
                  ref: E,
                  className: l()(ts.micButtonParent, { [ts.hasColorGlow]: el }),
                  children: [
                      (0, a.jsx)(e9.Z, {
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
                          icon: (0, a.jsx)(H, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: ei,
                              className: m,
                          }),
                          onClick: b,
                          onContextMenu: X,
                          role: "switch",
                          className: l()({ [ts.micButtonWithMenu]: Q }),
                          orangeGlow: R,
                          redGlow: S,
                          "aria-label": tl.intl.string(tl.t.w4m945),
                          "aria-checked": S,
                          disabled: o,
                      }),
                      Q &&
                          (0, a.jsx)(x.yRy, {
                              targetElementRef: j,
                              position: "top",
                              align: "left",
                              nudgeAlignIntoViewport: !1,
                              animation: x.yRy.Animation.FADE,
                              useMouseEnter: !0,
                              ignoreModalClicks: !0,
                              onRequestOpen: er,
                              onRequestClose: ee,
                              shouldShow: J,
                              renderPopout: (e) => {
                                  let { closePopout: t } = e;
                                  return (0, a.jsx)(eR.l, { onSettingsButtonClick: t });
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
                                      s = [];
                                  return (
                                      !i &&
                                          (es && s.push(u.z.VOICE_FILTER_EARLY_ACCESS_COACHMARK),
                                          s.push(u.z.VOICE_FILTER_LAUNCH_COACHMARK),
                                          Y && U && !A && s.push(u.z.VOICE_FILTER_FIRST_USE_COACHMARK)),
                                      (0, a.jsx)("div", {
                                          children: (0, a.jsx)(W.ZP, {
                                              bypassAutoDismiss: !0,
                                              contentTypes: s,
                                              children: (e) => {
                                                  let { visibleContent: t, markAsDismissed: i } = e,
                                                      s = null;
                                                  t === u.z.VOICE_FILTER_EARLY_ACCESS_COACHMARK
                                                      ? (s = (0, a.jsx)(ek.U, {
                                                            markAsDismissed: i,
                                                            onCTA: () => $(!0),
                                                        }))
                                                      : t === u.z.VOICE_FILTER_LAUNCH_COACHMARK
                                                        ? (s = (0, a.jsx)(eI.n, {
                                                              markAsDismissed: i,
                                                              onCTA: () => $(!0),
                                                          }))
                                                        : t === u.z.VOICE_FILTER_FIRST_USE_COACHMARK &&
                                                          (s = (0, a.jsx)(ew.v, {
                                                              markAsDismissed: i,
                                                              onCTA: () => $(!0),
                                                          }));
                                                  let c = () =>
                                                      (0, a.jsx)(
                                                          e9.Z,
                                                          tc(
                                                              {
                                                                  ref: O,
                                                                  plated: null != v,
                                                                  tooltipForceOpen: en,
                                                                  tooltipColor: en ? x.r6K.GREEN : void 0,
                                                                  tooltipContentClassName: en
                                                                      ? ts.voiceFilterWarning
                                                                      : void 0,
                                                                  tooltipText: en
                                                                      ? (0, a.jsxs)(a.Fragment, {
                                                                            children: [
                                                                                (0, a.jsx)("img", {
                                                                                    alt:
                                                                                        null != D
                                                                                            ? tl.intl.string(D.name)
                                                                                            : "",
                                                                                    src: null == D ? void 0 : D.iconURL,
                                                                                    draggable: !1,
                                                                                }),
                                                                                (0, a.jsx)(x.Text, {
                                                                                    variant: "text-sm/medium",
                                                                                    color: "always-white",
                                                                                    children: tl.intl.string(
                                                                                        tl.t.VlC1de,
                                                                                    ),
                                                                                }),
                                                                            ],
                                                                        })
                                                                      : tl.intl.string(tl.t.Hapb4J),
                                                                  icon: (0, a.jsx)(l, {
                                                                      className: ts.buttonChevronIcon,
                                                                      size: "custom",
                                                                      width: 12,
                                                                      height: 12,
                                                                      color: ei,
                                                                  }),
                                                                  role: "button",
                                                                  className: ts.buttonChevron,
                                                                  orangeGlow: R,
                                                                  redGlow: S,
                                                                  "aria-label": tl.intl.string(tl.t.Hapb4J),
                                                                  disabled: o,
                                                                  onClick: (e) => {
                                                                      i(ta.L.INDIRECT_ACTION),
                                                                          n(e),
                                                                          null != I && !J && k
                                                                              ? (0, eA.$)(() => $(!0))
                                                                              : $(!J);
                                                                  },
                                                              },
                                                              r,
                                                          ),
                                                      );
                                                  return null != s
                                                      ? (0, a.jsx)(x.yRy, {
                                                            targetElementRef: O,
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
function tC(e) {
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
        { name: y } = (0, et.p6)(ti.h7.AUDIO_OUTPUT),
        { showRefreshedAudioContextMenu: C } = (0, e6.e)({ location: "HeadphonesButton" }),
        _ = (0, D.Z)(t, n, i),
        { analyticsLocations: S } = (0, N.ZP)(T.Z.AUDIO_OUTPUT_BUTTON),
        E = r.useRef(null);
    r.useEffect(() => () => b(), [h, b]);
    let O = r.useCallback(
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
                  animation: x.yRy.Animation.FADE,
                  spacing: 4,
                  children: (e, t) => {
                      let { onClick: r } = e,
                          { isShown: o } = t,
                          m = o ? x.u04 : x.CJ0;
                      return (0, a.jsxs)("div", {
                          ref: E,
                          className: l()(ts.micButtonParent, {
                              [ts.hasColorGlow]: h,
                              [ts.popoutOpen]: o,
                          }),
                          children: [
                              (0, a.jsx)(e9.Z, {
                                  "aria-checked": h,
                                  "aria-label": tl.intl.string(tl.t.wjcRFX),
                                  className: ts.micButtonWithMenu,
                                  disabled: i,
                                  icon: (0, a.jsx)(j, {
                                      size: "custom",
                                      width: 20,
                                      height: 20,
                                      color: h ? x.TVs.colors.STATUS_DANGER : "currentColor",
                                      className: c,
                                  }),
                                  iconForeground: h ? ts.strikethrough : void 0,
                                  innerClassName: l()({ [ts.redIcon]: n }),
                                  onClick: s,
                                  onContextMenu: r,
                                  onMouseEnter: g,
                                  onMouseLeave: v,
                                  plated: null != d,
                                  redGlow: h,
                                  role: "switch",
                                  tooltipText: _,
                              }),
                              (0, a.jsx)(e9.Z, {
                                  "aria-label": u
                                      ? tl.intl.formatToPlainString(tl.t["f+DDY/"], { outputDeviceName: y })
                                      : tl.intl.string(tl.t.aA4Vce),
                                  className: l()(ts.buttonChevron, { [ts.popoutOpen]: o }),
                                  disabled: i,
                                  icon: (0, a.jsx)(m, {
                                      className: ts.buttonChevronIcon,
                                      size: "custom",
                                      width: 12,
                                      height: 12,
                                      color: h ? x.TVs.colors.STATUS_DANGER : "currentColor",
                                  }),
                                  onClick: r,
                                  onContextMenu: r,
                                  plated: null != d,
                                  redGlow: h,
                                  tooltipClassName: ts.accountButtonsTooltip,
                                  tooltipColor: u ? x.r6K.GREEN : void 0,
                                  tooltipContentClassName: ts.accountButtonsTooltipContent,
                                  tooltipForceOpen: u,
                                  tooltipPositionKeyStemOverride: u
                                      ? tl.intl.formatToPlainString(tl.t["f+DDY/"], { outputDeviceName: y })
                                      : void 0,
                                  tooltipShouldShow: !o,
                                  tooltipText: u
                                      ? tl.intl.format(tl.t["f+DDY/"], { outputDeviceName: y })
                                      : tl.intl.string(tl.t.aA4Vce),
                              }),
                          ],
                      });
                  },
              }),
          })
        : (0, a.jsx)(N.Gt, {
              value: S,
              children: (0, a.jsx)(e9.Z, {
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
                  onContextMenu: O,
                  innerClassName: l()({ [ts.redIcon]: n }),
                  iconForeground: h ? ts.strikethrough : void 0,
                  role: "switch",
                  redGlow: h,
                  "aria-label": tl.intl.string(tl.t.wjcRFX),
                  "aria-checked": h,
                  disabled: i,
              }),
          });
}
