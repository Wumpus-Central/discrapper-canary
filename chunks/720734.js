n.d(t, {
    Z: () => tb,
    m: () => tx,
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
    O = n(570928),
    T = n(100527),
    N = n(906732),
    P = n(541638),
    I = n(676742),
    w = n(1585),
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
    z = n(427217),
    H = n(812055),
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
    ei = n(359135),
    el = n(516817),
    eo = n(332473),
    es = n(660000),
    ec = n(963590),
    ed = n(494424),
    eu = n(562705),
    em = n(667105),
    ep = n(768419),
    eh = n(172416),
    ex = n(184301),
    eg = n(456077),
    ef = n(620799),
    eb = n(313789),
    ev = n(846071),
    ej = n(518596),
    e_ = n(879815),
    ey = n(294629),
    eC = n(875527),
    eS = n(702977),
    eE = n(56848),
    eO = n(940315),
    eT = n(378441),
    eN = n(358820),
    eP = n(723547),
    eI = n(361045),
    ew = n(74650),
    ek = n(306609),
    eR = n(170293),
    eA = n(8404),
    eZ = n(199902),
    eD = n(314897),
    eL = n(592125),
    eM = n(831506),
    eU = n(819640),
    eB = n(131951),
    eF = n(19780),
    eG = n(914010),
    ez = n(885110),
    eH = n(606304),
    eV = n(246946),
    eW = n(594174),
    eK = n(78839),
    eq = n(626135),
    eY = n(768581),
    eJ = n(572004),
    eX = n(459273),
    eQ = n(585483),
    e$ = n(70956),
    e0 = n(823379),
    e1 = n(5192),
    e8 = n(374023),
    e4 = n(51144),
    e3 = n(998502),
    e2 = n(660230),
    e6 = n(853170),
    e5 = n(422202),
    e7 = n(870569),
    e9 = n(345243),
    te = n(115530),
    tt = n(981631),
    tn = n(921944),
    ta = n(46140),
    tr = n(65154),
    ti = n(388032),
    tl = n(25874);
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
function ts(e) {
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
function tc(e, t) {
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
let td = e3.ZP.getEnableHardwareAcceleration() ? g.Xo$ : g.qEK,
    tu = 2 * e$.Z.Millis.MINUTE,
    tm = 3 * e$.Z.Millis.SECOND,
    tp = 5 * e$.Z.Millis.SECOND;
function th(e) {
    let {
            ref: t,
            speaking: n,
            latched: i,
            streaming: o,
            currentUser: s,
            status: c,
            handleClick: d,
            handleMouseLeave: u,
            renderNameTag: m,
            nameplate: p,
            selectedGuildId: h,
            transitionAccountPanel: x,
            avatarDecoration: f,
            "data-jump-section": v,
        } = e,
        j = r.useRef(null),
        y = null != t ? t : j,
        C = (0, eY.NZ)({
            avatarDecoration: f,
            size: (0, w.y9)(g.EFr.SIZE_32),
        }),
        S = (0, K.Z)(),
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
                (0, _.Z)(() => l(!0), 750),
                r.useEffect(() => {
                    let t = (t) => {
                        var n;
                        let { highlightBadge: r } = t;
                        null != r && a(r), null == (n = e.current) || n.call(e);
                    };
                    return (
                        eQ.S.subscribe(tt.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, t),
                        () => {
                            eQ.S.unsubscribe(tt.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, t);
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
    if (null == s) return null;
    let P = x && h !== tt.I_8 && h !== tt.ME && null != h ? h : void 0;
    return (0, a.jsx)(b.Z, {
        object: tt.qAy.AVATAR,
        children: (0, a.jsx)(eg.Z, {
            user: s,
            targetElementRef: y,
            clickTrap: !0,
            preload: () =>
                (0, ex.Z)(s.id, s.getAvatarURL(P, eg.I), {
                    type: "account_popout",
                    withMutualGuilds: !1,
                    withMutualFriends: !1,
                    guildId: P,
                }),
            renderPopout: (e, t) => {
                let { closePopout: n, setPopoutRef: r } = e;
                return (0, a.jsx)(en.Z, {
                    currentUser: s,
                    highlightBadge: O,
                    openedAt: t,
                    onClose: () => {
                        null == n || n();
                    },
                    setPopoutRef: r,
                    guildId: P,
                    guildProfileEnabled: x,
                });
            },
            position: "top",
            align: "left",
            animation: g.yRy.Animation.FADE,
            spacing: 14,
            fixed: !0,
            ignoreModalClicks: !0,
            onRequestClose: () => {
                u(), T(void 0);
            },
            children: (e) => (
                E(e),
                (0, a.jsxs)(
                    g.P3F,
                    tc(
                        ts(
                            {
                                innerRef: y,
                                style: N,
                            },
                            e,
                        ),
                        {
                            onClick: (t) => {
                                var n;
                                null == (n = e.onClick) || n.call(e, t), null == d || d(t);
                            },
                            "aria-label": ti.intl.string(ti.t["3Uj+2p"]),
                            "data-jump-section": v,
                            className: l()(tl.avatarWrapper, { [tl.plated]: null != p }),
                            children: [
                                (0, a.jsx)(td, {
                                    size: g.EFr["SIZE_".concat(32)],
                                    src: s.getAvatarURL(x ? h : void 0, 28, !1),
                                    avatarDecoration: C,
                                    "aria-label": s.username,
                                    status: o ? tt.Skl.STREAMING : c,
                                    isSpeaking: n,
                                    isLatched: i,
                                    className: tl.avatar,
                                }),
                                (0, a.jsx)("div", {
                                    className: l()(tl.nameTag, { [tl.canCopy]: eJ.wS }),
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
                ti.intl.string(ti.t.MSaeTe),
                ti.intl.string(ti.t.UmrCw7),
                ti.intl.string(ti.t.gKE0Jq),
                ti.intl.string(ti.t["4DSKbi"]),
                ti.intl.string(ti.t["+8ENdT"]),
                ti.intl.string(ti.t.GlWHv8),
                ti.intl.string(ti.t.hIzxU9),
                ti.intl.string(ti.t["26uMPL"]),
                ti.intl.string(ti.t.uFs7R2),
                ti.intl.string(ti.t.bLXdcY),
                ti.intl.string(ti.t.gPg9fS),
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
            return (0, a.jsx)(O.Z, {
                hoverText: l,
                forceHover: e,
                children: (0, a.jsx)(S.Z, {
                    location: "Account",
                    user: r,
                    activities: t,
                    applicationStream: n,
                    voiceChannel: o ? s : void 0,
                    textClassName: tl.activityStatusText,
                    hideTooltip: !0,
                }),
            });
        let c =
            null == t
                ? void 0
                : t.find((e) => {
                      let { type: t } = e;
                      return t === tt.IIU.CUSTOM_STATUS;
                  });
        return null != c
            ? (0, a.jsx)(O.Z, {
                  hoverText: l,
                  forceHover: e,
                  children: (0, a.jsx)(z.Z, {
                      activity: c,
                      emojiClassName: tl.emoji,
                      className: tl.customStatus,
                  }),
              })
            : null != i && i !== tt.Skl.UNKNOWN && r.hasUniqueUsername()
              ? (0, a.jsx)(O.Z, {
                    hoverText: l,
                    forceHover: e,
                    children: (0, a.jsx)(E.Z, { text: e4.ZP.humanizeStatus(i) }),
                })
              : l;
    }
    renderAvatarWithPopout(e) {
        let {
            focusSectionProps: { "data-jump-section": t },
            onClick: n,
        } = e;
        return (0, a.jsx)(
            th,
            tc(ts({}, this.props), {
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
            ? (0, a.jsx)(H.Z, {
                  targetElementRef: this.avatarWithPopoutRef,
                  onDismiss: o,
                  children: this.renderAvatarWithPopout({ focusSectionProps: e }),
              })
            : (0, a.jsxs)(a.Fragment, {
                  children: [
                      (0, a.jsx)(eu.Z, {
                          groupName: tn.R.ACCOUNT_NAME_ZONE,
                          targetElementRef: this.avatarWithPopoutRef,
                      }),
                      (0, a.jsx)(V.ZP, {
                          contentTypes: n.avatar,
                          groupName: tn.R.ACCOUNT_NAME_ZONE,
                          children: (t) => {
                              let { visibleContent: n, markAsDismissed: r } = t;
                              switch (n) {
                                  case u.z.WIDGETS_RTC_UPSELL_COACHMARK:
                                      return (0, a.jsx)(ef.Z, {
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
                                  case u.z.TENURE_BADGE_CHURN_REMINDER:
                                      return (0, a.jsx)(ed.Z, {
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
            : (0, a.jsxs)(a.Fragment, {
                  children: [
                      (0, a.jsx)(g.Wdt, {
                          children: (e) =>
                              (0, a.jsxs)("div", {
                                  ref: this.containerRef,
                                  className: l()(tl.container, {
                                      [tl.containerRtcOpened]: null != n,
                                      [tl.containerQuestBarVisible]: !r,
                                      [tl.containerListenAlongVisible]: i,
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
                                          tg,
                                          tc(ts({}, this.props, this.state), {
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
                (0, B.Z)(e, t, tt.jXE.ACCOUNT_PANEL), (0, F.v)(T.Z.ACCOUNT, F.d.MIC, n);
            }),
            to(this, "handleToggleSelfDeaf", () => {
                let { serverDeaf: e, selfDeaf: t } = this.props;
                (0, U.Z)(e, tt.jXE.ACCOUNT_PANEL), (0, F.v)(T.Z.ACCOUNT, F.d.DEAFEN, !t);
            }),
            to(this, "handleOpenAccountSettings", () => {
                this.dismissTooltips(),
                    eF.Z.isConnected()
                        ? (0, ej.openUserSettings)(eb.n.VOICE_AND_VIDEO_PANEL, { section: tt.oAB.VOICE })
                        : (0, ej.openUserSettings)();
            }),
            to(this, "handleOpenSettingsContextMenu", (e) => {
                let { currentUser: t } = this.props;
                null != t &&
                    (0, f.jW)(e, async () => {
                        let { default: e } = await n.e("2535").then(n.bind(n, 923422));
                        return (n) =>
                            (0, a.jsx)(
                                e,
                                tc(ts({}, n), {
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
                    (0, f.jW)(e, async () => {
                        let { default: e } = await Promise.resolve().then(n.bind(n, 659580));
                        return () => {
                            let { enabledInputProfiles: n } = (0, ev.G)({ location: "Account" });
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
            to(this, "handleOutputAudioContextMenu", (e, t) => {
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
                (0, eJ.JG)(
                    e4.ZP.getUserTag(e, {
                        decoration: "never",
                        identifiable: "always",
                    }),
                ),
                    eq.default.track(tt.rMx.TEXT_COPIED, { type: "User Tag" });
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
                    { hoveringOnMute: o } = this.state,
                    s =
                        void 0 === this.lastSpeakingWhileMutedNotificationTime ||
                        Date.now() - this.lastSpeakingWhileMutedNotificationTime > tu;
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
            to(this, "renderNameTag", (e) => {
                let { currentUser: t, username: n } = this.props;
                return null == t
                    ? null
                    : (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)("div", {
                                  className: tl.panelTitleContainer,
                                  children: (0, a.jsx)(te.Z, {
                                      className: l()({ [tl.withDisplayNameStyles]: null != e }),
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
                                  className: tl.panelSubtextContainer,
                                  children: (0, a.jsx)(e9.Z, { children: this.renderStatus() }),
                              }),
                          ],
                      });
            });
    }
}
function tg(e) {
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
        className: tl.buttons,
        style: E,
        children: [
            (0, a.jsx)(tj, {
                accountContainerRef: _,
                selfMute: n,
                serverMute: i,
                suppress: o,
                awaitingRemote: r,
                onMouseEnter: u,
                onMouseLeave: m,
                onClick: h,
                onContextMenu: x,
                iconForeground: null != j ? tl.iconForeground : void 0,
                nameplate: j,
                shouldShowInputDeviceChangedTooltip: y,
                shouldShowSpeakingWhileMutedTooltip: s,
                dismissTooltips: S,
            }),
            (0, a.jsx)(t_, {
                selfDeaf: t,
                serverDeaf: l,
                onClick: p,
                onContextMenu: g,
                awaitingRemote: r,
                iconForeground: null != j ? tl.iconForeground : void 0,
                nameplate: j,
                shouldShowOutputDeviceChangedTooltip: C,
                dismissTooltips: S,
            }),
            (0, a.jsx)(tv, {
                isEligibleForPomelo: c,
                webBuildOverride: d,
                onClick: f,
                onContextMenu: b,
                dismissibleContents: v.settings,
                iconForeground: null != j ? tl.iconForeground : void 0,
                nameplate: j,
                shouldShowInputDeviceChangedTooltip: y,
                shouldShowOutputDeviceChangedTooltip: C,
            }),
        ],
    });
}
function tf(e) {
    let { shouldShowDeviceChangedNotifications: t } = (0, e5.P)({
            location: "Account.useDeviceChangedTooltip",
            autoTrackExposure: !1,
        }),
        n = (0, d.e7)([eF.Z], () => null != eF.Z.getChannelId()),
        a = (0, et.Fh)(e),
        i = r.useRef(new m.V7()),
        [l, o] = r.useState(!1);
    r.useEffect(() => {
        n &&
            a &&
            ((0, e5._)({
                location: "Account.useDeviceChangedTooltip (exposure tracking)",
                autoTrackExposure: !0,
            }),
            t &&
                (o(!0),
                i.current.start(tp, () => {
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
function tb() {
    var e;
    let t = (0, d.e7)([eW.default], () => eW.default.getCurrentUser()),
        n = (0, d.e7)([eD.default], () => eD.default.getId()),
        r = e2.K.useConfig({ location: "AccountConnected" }).transitionAccountPanel,
        {
            activities: i,
            streaming: l,
            status: o,
        } = (0, d.cj)([ez.Z], () => {
            let e = ez.Z.getActivities();
            return {
                activities: e,
                streaming:
                    null !=
                    e.find((e) => {
                        let { type: t } = e;
                        return t === tt.IIU.STREAMING;
                    }),
                status: ez.Z.getStatus(),
            };
        }),
        c = (0, d.e7)([eZ.Z], () => eZ.Z.getAnyStreamForUser(n)),
        m = (0, v.Z)({ userId: n }),
        p = (0, d.e7)([eH.Z], () => eH.Z.isCurrentUserPTTLatched()),
        h = e4.ZP.useUserTag(t, { decoration: "never" }),
        x = (0, d.e7)([eV.Z], () => eV.Z.hidePersonalInformation),
        f = (0, d.e7)([eF.Z, eL.Z], () => {
            let e = eF.Z.getChannelId();
            return null != e ? eL.Z.getChannel(e) : null;
        }),
        { mute: b, selfMute: j, suppress: _ } = (0, ey.Z)(f),
        { selfDeaf: C, deaf: S } = (0, e_.Z)(f),
        E = (0, d.e7)([k.C], () => {
            var e;
            return (0, R.fD)()
                ? null == (e = k.C.getCurrentBuildOverride().overrides)
                    ? void 0
                    : e.discord_web
                : null;
        }),
        O = (0, d.e7)([eK.Z], () => eK.Z.getPremiumTypeSubscription()),
        w = (0, d.e7)([eB.Z], () => eB.Z.getSpeakingWhileMuted()),
        Z = (0, d.e7)([A.Z], () => A.Z.isFullscreenInContext()),
        D = (0, d.e7)([eU.Z], () => eU.Z.hasLayers()),
        L = (0, g.s9z)(g.JQI) || D || e8.s.isDisallowPopupsSet() || Z,
        M = (0, eo.b)(),
        U = (0, d.e7)([X.default], () => null != X.default.getAwaitingRemoteSessionInfo()),
        B = (0, d.e7)([eG.Z], () => eG.Z.getGuildId()),
        F = null == t ? void 0 : t.avatarDecoration,
        G = (0, P.R)(t, null != B ? B : void 0),
        z = (0, I.Z)(r ? G : F),
        V = e1.ZP.useName(null != B ? B : void 0, null, t),
        K = null != (e = e4.ZP.useName(t)) ? e : "",
        { voiceActivityStatusEnabled: q } = (0, y.U)({ location: "Account" }),
        [Y, J] = (0, $.G)(null != B ? B : null),
        [Q, ee] = (0, H.b)(),
        et = W.JH.useExperiment({ location: "Account" }).enabled,
        en = (0, es.S)(t, "Account"),
        { analyticsLocations: er } = (0, N.ZP)(T.Z.ACCOUNT),
        ei = (0, ea.K)({
            user: t,
            guildId: r && null != B ? B : void 0,
        }),
        { isQuestBarEmpty: el, hasLoadedQuestBar: ec } = (0, em.Ws)({ location: ta.dr.CONFLICT_CHECKS }),
        ed = (0, d.e7)([ep.Z, eW.default, eM.Z], () => {
            let e,
                t = ep.Z.getSyncingWith(),
                n = ep.Z.getActivity(),
                a = [];
            if (
                (null != t ? (e = t.partyId) : null != n && null != n.party && null != n.party.id && (e = n.party.id),
                null != e)
            ) {
                var r;
                a = s()(Array.from(null != (r = eM.Z.getParty(e)) ? r : []))
                    .map((e) => eW.default.getUser(e))
                    .filter(e0.lm)
                    .value();
            }
            return a.length > 1;
        }),
        eu = (0, eh.Un)({ location: "AccountConnected" }),
        ex = {
            avatar: [],
            settings: [],
        };
    !L &&
        (et && ex.avatar.push(u.z.DISPLAY_NAME_STYLES_COACHMARK),
        en && ex.avatar.push(u.z.TENURE_BADGE_CHURN_REMINDER),
        eu && ex.avatar.push(u.z.WIDGETS_RTC_UPSELL_COACHMARK));
    let { shouldShowTooltip: eg, dismissTooltip: ef } = tf(tr.h7.AUDIO_INPUT),
        { shouldShowTooltip: eb, dismissTooltip: ev } = tf(tr.h7.AUDIO_OUTPUT);
    return (0, a.jsx)(N.Gt, {
        value: er,
        children: (0, a.jsx)(tx, {
            currentUser: t,
            username: r ? V : K,
            transitionAccountPanel: r,
            activities: i,
            applicationStream: c,
            voiceChannel: f,
            dismissibleContents: ex,
            visibleRecurringAvatarDc: Y,
            markRecurringAvatarDcAsDismissed: J,
            visibleRecurringDoNotDisturbReminderPopoverDc: Q,
            markRecurringDoNotDisturbReminderPopoverDcAsDismissed: ee,
            userTag: h,
            hidePrivateData: x,
            occluded: L,
            premiumSubscription: O,
            selfDeaf: C,
            selfMute: j,
            serverDeaf: S,
            serverMute: b,
            speaking: m,
            speakingWhileMuted: w,
            latched: p && null != f,
            status: o,
            streaming: l,
            suppress: _,
            webBuildOverride: E,
            awaitingRemote: U,
            isEligibleForPomelo: M,
            voiceActivityStatusEnabled: q,
            nameplate: ei,
            selectedGuildId: B,
            avatarDecoration: z,
            isQuestBarEmpty: el,
            hasLoadedQuestBar: ec,
            isListenAlongVisible: ed,
            shouldShowInputDeviceChangedTooltip: eg,
            shouldShowOutputDeviceChangedTooltip: eb,
            dismissInputDeviceChangedTooltip: ef,
            dismissOutputDeviceChangedTooltip: ev,
        }),
    });
}
function tv(e) {
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
        { showRefreshedAudioContextMenu: f } = (0, e6.e)({ location: "SettingsCogButton" }),
        b = !f && (m || p),
        { name: v } = (0, et.p6)(tr.h7.AUDIO_INPUT),
        { name: j } = (0, et.p6)(tr.h7.AUDIO_OUTPUT);
    !f && m
        ? ((t = ti.intl.format(ti.t["18wnuD"], { inputDeviceName: v })),
          (n = ti.intl.formatToPlainString(ti.t["18wnuD"], { inputDeviceName: v })),
          (i = ti.intl.formatToPlainString(ti.t["18wnuD"], { inputDeviceName: v })))
        : !f && p
          ? ((t = ti.intl.format(ti.t["f+DDY/"], { outputDeviceName: j })),
            (n = ti.intl.formatToPlainString(ti.t["f+DDY/"], { outputDeviceName: j })),
            (i = ti.intl.formatToPlainString(ti.t["f+DDY/"], { outputDeviceName: j })))
          : (t =
                null != l
                    ? ti.intl.formatToPlainString(ti.t.Gzh6ZP, { webBuildOverride: l.id })
                    : ti.intl.string(ti.t.cduTBL));
    let _ = g.ewm,
        y = (0, h.i)();
    return (
        (_ = null != l ? g.bgT : o ? g.Ncx : y.Component),
        (0, a.jsx)(
            e7.Z,
            tc(
                ts(
                    {
                        ref: x,
                        tooltipText: t,
                        tooltipColor: b ? g.r6K.GREEN : void 0,
                        tooltipForceOpen: b,
                        tooltipClassName: tl.accountButtonsTooltip,
                        tooltipContentClassName: tl.accountButtonsTooltipContent,
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
function tj(e) {
    let t,
        {
            selfMute: n,
            serverMute: i,
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
        S = n || o || i,
        E = r.useRef(null),
        O = r.useRef(null),
        P = (0, eA.b)(S),
        { activeVoice: I, mostRecentlyRequestedVoiceId: w, lastInitAttemptMayHaveCrashed: k } = (0, eT.o)(),
        { showSilentLagWarning: R } = (0, eO.Y)(),
        A = null != I,
        Z = (0, eE.z)(I),
        U = (0, d.e7)([eF.Z], () => eF.Z.isConnected()),
        { Component: B, events: F, play: z } = P,
        H = i || o ? g.v0G : B,
        W = (0, D.Z)(n, i, o, s),
        K = R ? ti.intl.string(ti.t.ARRV6m) : null;
    t = _
        ? ti.intl.string(ti.t["29gnR4"])
        : null != K
          ? (0, a.jsxs)("div", {
                className: tl.tooltipWithSubtext,
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
    let { analyticsLocations: q } = (0, N.ZP)(T.Z.AUDIO_INPUT_BUTTON),
        Y = (0, eC.Hu)({
            location: T.Z.AUDIO_INPUT_BUTTON,
            autoTrackExposure: !0,
        }),
        J = (0, eS.av)({
            location: T.Z.AUDIO_INPUT_BUTTON,
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
    (0, eX.yp)({
        event: tt.CkL.OPEN_VOICE_FILTER_POPOUT,
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
                    ea(!0), (e = setTimeout(() => ea(!1), tm));
                }, 300)),
            () => {
                ea(!1), clearTimeout(e);
            }
        );
    }, [U]);
    let er = r.useCallback(() => {
            k || (0, eN.r5)();
        }, [k]),
        ei = S ? g.TVs.colors.STATUS_DANGER : R ? g.TVs.colors.STATUS_WARNING : "currentColor",
        el = S || R,
        eo = (0, ec.Z)({ location: "Account" }),
        { name: es } = (0, et.p6)(tr.h7.AUDIO_INPUT),
        { showRefreshedAudioContextMenu: ed } = (0, e6.e)({ location: "MicrophoneButton" }),
        { enabledInputProfiles: eu } = (0, ev.G)({ location: "MicrophoneButton" });
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
                  animation: g.yRy.Animation.FADE,
                  spacing: 4,
                  children: (e, n) => {
                      let { onClick: r } = e,
                          { isShown: i } = n,
                          o = i ? g.u04 : g.CJ0;
                      return (0, a.jsxs)("div", {
                          ref: E,
                          className: l()(tl.micButtonParent, {
                              [tl.hasColorGlow]: el,
                              [tl.popoutOpen]: i,
                          }),
                          children: [
                              (0, a.jsx)(e7.Z, {
                                  "aria-checked": S,
                                  "aria-label": ti.intl.string(ti.t.w4m945),
                                  className: l()({ [tl.micButtonWithMenu]: !0 }),
                                  disabled: s,
                                  icon: (0, a.jsx)(H, {
                                      size: "custom",
                                      width: 20,
                                      height: 20,
                                      color: ei,
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
                              (0, a.jsx)(e7.Z, {
                                  "aria-label": y
                                      ? ti.intl.formatToPlainString(ti.t["18wnuD"], { inputDeviceName: es })
                                      : ti.intl.string(ti.t.fRzCbB),
                                  className: l()(tl.buttonChevron, { [tl.popoutOpen]: i }),
                                  disabled: s,
                                  icon: (0, a.jsx)(o, {
                                      className: tl.buttonChevronIcon,
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
                                  tooltipClassName: tl.accountButtonsTooltip,
                                  tooltipColor: y ? g.r6K.GREEN : void 0,
                                  tooltipContentClassName: tl.accountButtonsTooltipContent,
                                  tooltipForceOpen: y,
                                  tooltipPositionKeyStemOverride: y
                                      ? ti.intl.formatToPlainString(ti.t["18wnuD"], { inputDeviceName: es })
                                      : void 0,
                                  tooltipShouldShow: !i,
                                  tooltipText: y
                                      ? ti.intl.format(ti.t["18wnuD"], { inputDeviceName: es })
                                      : ti.intl.string(ti.t.fRzCbB),
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
                  className: l()(tl.micButtonParent, { [tl.hasColorGlow]: el }),
                  children: [
                      (0, a.jsx)(e7.Z, {
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
                          icon: (0, a.jsx)(H, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: ei,
                              className: m,
                          }),
                          onClick: f,
                          onContextMenu: X,
                          role: "switch",
                          className: l()({ [tl.micButtonWithMenu]: Y }),
                          orangeGlow: R,
                          redGlow: S,
                          "aria-label": ti.intl.string(ti.t.w4m945),
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
                                  return (0, a.jsx)(ek.l, { onSettingsButtonClick: t });
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
                                  let l = i ? g.u04 : g.CJ0,
                                      o = [];
                                  return (
                                      !i &&
                                          (eo && o.push(u.z.VOICE_FILTER_EARLY_ACCESS_COACHMARK),
                                          o.push(u.z.VOICE_FILTER_LAUNCH_COACHMARK),
                                          J && U && !A && o.push(u.z.VOICE_FILTER_FIRST_USE_COACHMARK)),
                                      (0, a.jsx)("div", {
                                          children: (0, a.jsx)(V.ZP, {
                                              bypassAutoDismiss: !0,
                                              contentTypes: o,
                                              children: (e) => {
                                                  let { visibleContent: t, markAsDismissed: i } = e,
                                                      o = null;
                                                  t === u.z.VOICE_FILTER_EARLY_ACCESS_COACHMARK
                                                      ? (o = (0, a.jsx)(ew.U, {
                                                            markAsDismissed: i,
                                                            onCTA: () => $(!0),
                                                        }))
                                                      : t === u.z.VOICE_FILTER_LAUNCH_COACHMARK
                                                        ? (o = (0, a.jsx)(eI.n, {
                                                              markAsDismissed: i,
                                                              onCTA: () => $(!0),
                                                          }))
                                                        : t === u.z.VOICE_FILTER_FIRST_USE_COACHMARK &&
                                                          (o = (0, a.jsx)(eP.v, {
                                                              markAsDismissed: i,
                                                              onCTA: () => $(!0),
                                                          }));
                                                  let c = () =>
                                                      (0, a.jsx)(
                                                          e7.Z,
                                                          ts(
                                                              {
                                                                  ref: O,
                                                                  plated: null != v,
                                                                  tooltipForceOpen: en,
                                                                  tooltipColor: en ? g.r6K.GREEN : void 0,
                                                                  tooltipContentClassName: en
                                                                      ? tl.voiceFilterWarning
                                                                      : void 0,
                                                                  tooltipText: en
                                                                      ? (0, a.jsxs)(a.Fragment, {
                                                                            children: [
                                                                                (0, a.jsx)("img", {
                                                                                    alt:
                                                                                        null != Z
                                                                                            ? ti.intl.string(Z.name)
                                                                                            : "",
                                                                                    src: null == Z ? void 0 : Z.iconURL,
                                                                                    draggable: !1,
                                                                                }),
                                                                                (0, a.jsx)(g.Text, {
                                                                                    variant: "text-sm/medium",
                                                                                    color: "always-white",
                                                                                    children: ti.intl.string(
                                                                                        ti.t.VlC1de,
                                                                                    ),
                                                                                }),
                                                                            ],
                                                                        })
                                                                      : ti.intl.string(ti.t.Hapb4J),
                                                                  icon: (0, a.jsx)(l, {
                                                                      className: tl.buttonChevronIcon,
                                                                      size: "custom",
                                                                      width: 12,
                                                                      height: 12,
                                                                      color: ei,
                                                                  }),
                                                                  role: "button",
                                                                  className: tl.buttonChevron,
                                                                  orangeGlow: R,
                                                                  redGlow: S,
                                                                  "aria-label": ti.intl.string(ti.t.Hapb4J),
                                                                  disabled: s,
                                                                  onClick: (e) => {
                                                                      i(tn.L.INDIRECT_ACTION),
                                                                          n(e),
                                                                          null != w && !Q && k
                                                                              ? (0, eR.$)(() => $(!0))
                                                                              : $(!Q);
                                                                  },
                                                              },
                                                              r,
                                                          ),
                                                      );
                                                  return null != o
                                                      ? (0, a.jsx)(g.yRy, {
                                                            targetElementRef: O,
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
function t_(e) {
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
            play: f,
            events: { onMouseEnter: b, onMouseLeave: v },
        } = (0, p.l)(h ? "undeafen" : "deafen"),
        j = n ? g.Vm4 : x,
        { name: _ } = (0, et.p6)(tr.h7.AUDIO_OUTPUT),
        { showRefreshedAudioContextMenu: y } = (0, e6.e)({ location: "HeadphonesButton" }),
        C = (0, Z.Z)(t, n, i),
        { analyticsLocations: S } = (0, N.ZP)(T.Z.AUDIO_OUTPUT_BUTTON),
        E = r.useRef(null);
    r.useEffect(() => () => f(), [h, f]);
    let O = r.useCallback(
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
                  animation: g.yRy.Animation.FADE,
                  spacing: 4,
                  children: (e, t) => {
                      let { onClick: r } = e,
                          { isShown: s } = t,
                          m = s ? g.u04 : g.CJ0;
                      return (0, a.jsxs)("div", {
                          ref: E,
                          className: l()(tl.micButtonParent, {
                              [tl.hasColorGlow]: h,
                              [tl.popoutOpen]: s,
                          }),
                          children: [
                              (0, a.jsx)(e7.Z, {
                                  "aria-checked": h,
                                  "aria-label": ti.intl.string(ti.t.wjcRFX),
                                  className: tl.micButtonWithMenu,
                                  disabled: i,
                                  icon: (0, a.jsx)(j, {
                                      size: "custom",
                                      width: 20,
                                      height: 20,
                                      color: h ? g.TVs.colors.STATUS_DANGER : "currentColor",
                                      className: c,
                                  }),
                                  iconForeground: h ? tl.strikethrough : void 0,
                                  innerClassName: l()({ [tl.redIcon]: n }),
                                  onClick: o,
                                  onContextMenu: r,
                                  onMouseEnter: b,
                                  onMouseLeave: v,
                                  plated: null != d,
                                  redGlow: h,
                                  role: "switch",
                                  tooltipText: C,
                              }),
                              (0, a.jsx)(e7.Z, {
                                  "aria-label": u
                                      ? ti.intl.formatToPlainString(ti.t["f+DDY/"], { outputDeviceName: _ })
                                      : ti.intl.string(ti.t.aA4Vce),
                                  className: l()(tl.buttonChevron, { [tl.popoutOpen]: s }),
                                  disabled: i,
                                  icon: (0, a.jsx)(m, {
                                      className: tl.buttonChevronIcon,
                                      size: "custom",
                                      width: 12,
                                      height: 12,
                                      color: h ? g.TVs.colors.STATUS_DANGER : "currentColor",
                                  }),
                                  onClick: r,
                                  onContextMenu: r,
                                  plated: null != d,
                                  redGlow: h,
                                  tooltipClassName: tl.accountButtonsTooltip,
                                  tooltipColor: u ? g.r6K.GREEN : void 0,
                                  tooltipContentClassName: tl.accountButtonsTooltipContent,
                                  tooltipForceOpen: u,
                                  tooltipPositionKeyStemOverride: u
                                      ? ti.intl.formatToPlainString(ti.t["f+DDY/"], { outputDeviceName: _ })
                                      : void 0,
                                  tooltipShouldShow: !s,
                                  tooltipText: u
                                      ? ti.intl.format(ti.t["f+DDY/"], { outputDeviceName: _ })
                                      : ti.intl.string(ti.t.aA4Vce),
                              }),
                          ],
                      });
                  },
              }),
          })
        : (0, a.jsx)(N.Gt, {
              value: S,
              children: (0, a.jsx)(e7.Z, {
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
                  onContextMenu: O,
                  innerClassName: l()({ [tl.redIcon]: n }),
                  iconForeground: h ? tl.strikethrough : void 0,
                  role: "switch",
                  redGlow: h,
                  "aria-label": ti.intl.string(ti.t.wjcRFX),
                  "aria-checked": h,
                  disabled: i,
              }),
          });
}
