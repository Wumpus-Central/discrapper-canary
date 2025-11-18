n.d(t, {
    Z: () => tf,
    m: () => th,
}),
    n(388685),
    n(539854);
var a = n(54381),
    l = n(473749),
    r = n(120356),
    i = n.n(r),
    s = n(392711),
    o = n.n(s),
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
    ee = n(427347),
    et = n(72897),
    en = n(78933),
    ea = n(850020),
    el = n(379839),
    er = n(359135),
    ei = n(516817),
    es = n(332473),
    eo = n(963590),
    ec = n(494424),
    ed = n(562705),
    eu = n(667105),
    em = n(768419),
    ep = n(172416),
    eh = n(184301),
    ex = n(456077),
    eg = n(620799),
    ef = n(313789),
    eb = n(846071),
    ev = n(518596),
    ej = n(879815),
    e_ = n(294629),
    ey = n(875527),
    eC = n(702977),
    eS = n(56848),
    eE = n(940315),
    eO = n(378441),
    eT = n(358820),
    eN = n(723547),
    eP = n(361045),
    eI = n(74650),
    ew = n(306609),
    ek = n(170293),
    eR = n(8404),
    eA = n(199902),
    eZ = n(314897),
    eD = n(592125),
    eL = n(831506),
    eM = n(819640),
    eU = n(131951),
    eF = n(19780),
    eB = n(914010),
    eG = n(885110),
    ez = n(606304),
    eV = n(246946),
    eH = n(594174),
    eW = n(78839),
    eK = n(626135),
    eq = n(768581),
    eY = n(572004),
    eJ = n(459273),
    eX = n(585483),
    eQ = n(70956),
    e$ = n(823379),
    e0 = n(5192),
    e1 = n(374023),
    e3 = n(51144),
    e4 = n(998502),
    e8 = n(660230),
    e6 = n(853170),
    e5 = n(422202),
    e7 = n(870569),
    e2 = n(345243),
    e9 = n(115530),
    te = n(981631),
    tt = n(921944),
    tn = n(46140),
    ta = n(65154),
    tl = n(388032),
    tr = n(490579);
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
let tc = e4.ZP.getEnableHardwareAcceleration() ? g.Xo$ : g.qEK,
    td = 2 * eQ.Z.Millis.MINUTE,
    tu = 3 * eQ.Z.Millis.SECOND,
    tm = 5 * eQ.Z.Millis.SECOND;
function tp(e) {
    let {
            ref: t,
            speaking: n,
            latched: r,
            streaming: s,
            currentUser: o,
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
        j = l.useRef(null),
        y = null != t ? t : j,
        C = (0, eq.NZ)({
            avatarDecoration: f,
            size: (0, w.y9)(g.EFr.SIZE_32),
        }),
        S = (0, K.Z)(),
        {
            updateOpenPopoutRef: E,
            highlightBadge: O,
            setHighlightBadge: T,
        } = (function () {
            let e = l.useRef(null),
                t = l.useCallback((t) => {
                    e.current = () => {
                        t.onMouseDown(), t.onClick();
                    };
                }, []),
                [n, a] = l.useState(),
                [r, i] = l.useState(!1);
            return (
                (0, _.Z)(() => i(!0), 750),
                l.useEffect(() => {
                    let t = (t) => {
                        var n;
                        let { highlightBadge: l } = t;
                        null != l && a(l), null == (n = e.current) || n.call(e);
                    };
                    return (
                        eX.S.subscribe(te.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, t),
                        () => {
                            eX.S.unsubscribe(te.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, t);
                        }
                    );
                }),
                {
                    updateOpenPopoutRef: t,
                    highlightBadge: r ? n : void 0,
                    setHighlightBadge: a,
                }
            );
        })(),
        N = (0, el.A)(p);
    if (null == o) return null;
    let P = x && h !== te.I_8 && h !== te.ME && null != h ? h : void 0;
    return (0, a.jsx)(b.Z, {
        object: te.qAy.AVATAR,
        children: (0, a.jsx)(ex.Z, {
            user: o,
            targetElementRef: y,
            clickTrap: !0,
            preload: () =>
                (0, eh.Z)(o.id, o.getAvatarURL(P, ex.I), {
                    type: "account_popout",
                    withMutualGuilds: !1,
                    withMutualFriends: !1,
                    guildId: P,
                }),
            renderPopout: (e, t) => {
                let { closePopout: n, setPopoutRef: l } = e;
                return (0, a.jsx)(en.Z, {
                    currentUser: o,
                    highlightBadge: O,
                    openedAt: t,
                    onClose: () => {
                        null == n || n();
                    },
                    setPopoutRef: l,
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
                    to(
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
                            "aria-label": tl.intl.string(tl.t["3Uj+2p"]),
                            "data-jump-section": v,
                            className: i()(tr.avatarWrapper, { [tr.plated]: null != p }),
                            children: [
                                (0, a.jsx)(tc, {
                                    size: g.EFr["SIZE_".concat(32)],
                                    src: o.getAvatarURL(x ? h : void 0, 28, !1),
                                    avatarDecoration: C,
                                    "aria-label": o.username,
                                    status: s ? te.Skl.STREAMING : c,
                                    isSpeaking: n,
                                    isLatched: r,
                                    className: tr.avatar,
                                }),
                                (0, a.jsx)("div", {
                                    className: i()(tr.nameTag, { [tr.canCopy]: eY.wS }),
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
class th extends l.PureComponent {
    get isCopiedStreakGodlike() {
        let { copiedStreak: e } = this.state;
        return e >= 10;
    }
    componentDidUpdate(e) {
        let { speakingWhileMuted: t, occluded: n } = e,
            { speakingWhileMuted: a, occluded: l } = this.props;
        l !== n && this.handleOccludedChanged(), a !== t && this.handleSpeakingWhileMutedChanged();
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
                currentUser: l,
                status: r,
                userTag: i,
                voiceActivityStatusEnabled: s,
                voiceChannel: o,
            } = this.props;
        if (null == l) return null;
        if (
            (0, C.Z)({
                activities: t,
                status: r,
                applicationStream: n,
                voiceChannel: s ? o : void 0,
            })
        )
            return (0, a.jsx)(O.Z, {
                hoverText: i,
                forceHover: e,
                children: (0, a.jsx)(S.Z, {
                    location: "Account",
                    user: l,
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
                      return t === te.IIU.CUSTOM_STATUS;
                  });
        return null != c
            ? (0, a.jsx)(O.Z, {
                  hoverText: i,
                  forceHover: e,
                  children: (0, a.jsx)(z.Z, {
                      activity: c,
                      emojiClassName: tr.emoji,
                      className: tr.customStatus,
                  }),
              })
            : null != r && r !== te.Skl.UNKNOWN && l.hasUniqueUsername()
              ? (0, a.jsx)(O.Z, {
                    hoverText: i,
                    forceHover: e,
                    children: (0, a.jsx)(E.Z, { text: e3.ZP.humanizeStatus(r) }),
                })
              : i;
    }
    renderAvatarWithPopout(e) {
        let {
            focusSectionProps: { "data-jump-section": t },
            onClick: n,
        } = e;
        return (0, a.jsx)(
            tp,
            to(ts({}, this.props), {
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
            visibleRecurringAvatarDc: l,
            markRecurringAvatarDcAsDismissed: r,
            visibleRecurringDoNotDisturbReminderPopoverDc: i,
            markRecurringDoNotDisturbReminderPopoverDcAsDismissed: s,
            isQuestBarEmpty: o,
            hasLoadedQuestBar: c,
        } = this.props;
        if (null == t) return null;
        if (!(null != this.avatarWithPopoutRef.current && o && c))
            return this.renderAvatarWithPopout({ focusSectionProps: e });
        if (l === u.z.GUILD_TAG_AVAILABLE_COACHMARK) {
            var d;
            return (0, a.jsx)(Q.ZP, {
                guildId: null != (d = this.props.selectedGuildId) ? d : null,
                onDismiss: r,
                targetElementRef: this.avatarWithPopoutRef,
                children: this.renderAvatarWithPopout({ focusSectionProps: e }),
            });
        }
        return i === u.z.DO_NOT_DISTURB_REMINDER_POPOVER
            ? (0, a.jsx)(V.Z, {
                  targetElementRef: this.avatarWithPopoutRef,
                  onDismiss: s,
                  children: this.renderAvatarWithPopout({ focusSectionProps: e }),
              })
            : (0, a.jsxs)(a.Fragment, {
                  children: [
                      (0, a.jsx)(ed.Z, {
                          groupName: tt.R.ACCOUNT_NAME_ZONE,
                          targetElementRef: this.avatarWithPopoutRef,
                      }),
                      (0, a.jsx)(H.ZP, {
                          contentTypes: n.avatar,
                          groupName: tt.R.ACCOUNT_NAME_ZONE,
                          children: (t) => {
                              let { visibleContent: n, markAsDismissed: l } = t;
                              switch (n) {
                                  case u.z.WIDGETS_RTC_UPSELL_COACHMARK:
                                      return (0, a.jsx)(eg.Z, {
                                          markAsDismissed: l,
                                          targetElementRef: this.avatarWithPopoutRef,
                                          children: this.renderAvatarWithPopout({ focusSectionProps: e }),
                                      });
                                  case u.z.DISPLAY_NAME_STYLES_COACHMARK:
                                      return (0, a.jsx)(Y.e, {
                                          markAsDismissed: l,
                                          targetElementRef: this.avatarWithPopoutRef,
                                          children: this.renderAvatarWithPopout({ focusSectionProps: e }),
                                      });
                                  case u.z.TENURE_BADGE_CHURN_REMINDER:
                                      return (0, a.jsx)(ec.Z, {
                                          markAsDismissed: l,
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
        let { currentUser: e, nameplate: t, voiceChannel: n, isQuestBarEmpty: l, isListenAlongVisible: r } = this.props,
            s = this.state.hovered;
        return null == e
            ? null
            : (0, a.jsxs)(a.Fragment, {
                  children: [
                      (0, a.jsx)(g.Wdt, {
                          children: (e) =>
                              (0, a.jsxs)("div", {
                                  ref: this.containerRef,
                                  className: i()(tr.container, {
                                      [tr.containerRtcOpened]: null != n,
                                      [tr.containerQuestBarVisible]: !l,
                                      [tr.containerListenAlongVisible]: r,
                                  }),
                                  onMouseEnter: this.handleMouseEnter,
                                  onMouseLeave: this.handleMouseLeave,
                                  children: [
                                      (0, a.jsx)(ei.Z, {
                                          nameplate: t,
                                          hovered: s,
                                          placement: er.i.ACCOUNT,
                                      }),
                                      this.renderNameZone(e),
                                      (0, a.jsx)(
                                          tx,
                                          to(ts({}, this.props, this.state), {
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
            ti(this, "containerRef", l.createRef()),
            ti(this, "avatarWithPopoutRef", l.createRef()),
            ti(this, "handleToggleSelfMute", () => {
                let { serverMute: e, suppress: t, selfMute: n } = this.props;
                (0, F.Z)(e, t, te.jXE.ACCOUNT_PANEL), (0, B.v)(T.Z.ACCOUNT, B.d.MIC, n);
            }),
            ti(this, "handleToggleSelfDeaf", () => {
                let { serverDeaf: e, selfDeaf: t } = this.props;
                (0, U.Z)(e, te.jXE.ACCOUNT_PANEL), (0, B.v)(T.Z.ACCOUNT, B.d.DEAFEN, !t);
            }),
            ti(this, "handleOpenAccountSettings", () => {
                this.dismissTooltips(),
                    eF.Z.isConnected()
                        ? (0, ev.openUserSettings)(ef.n.VOICE_AND_VIDEO_PANEL, { section: te.oAB.VOICE })
                        : (0, ev.openUserSettings)();
            }),
            ti(this, "handleOpenSettingsContextMenu", (e) => {
                let { currentUser: t } = this.props;
                null != t &&
                    (0, f.jW)(e, async () => {
                        let { default: e } = await n.e("2535").then(n.bind(n, 923422));
                        return (n) =>
                            (0, a.jsx)(
                                e,
                                to(ts({}, n), {
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
                    (0, f.jW)(e, async () => {
                        let { default: e } = await Promise.resolve().then(n.bind(n, 659580));
                        return () => {
                            let { enabledInputProfiles: n } = (0, eb.G)({ location: "Account" });
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
            ti(this, "handleOutputAudioContextMenu", (e, t) => {
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
                (0, eY.JG)(
                    e3.ZP.getUserTag(e, {
                        decoration: "never",
                        identifiable: "always",
                    }),
                ),
                    eK.default.track(te.rMx.TEXT_COPIED, { type: "User Tag" });
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
                        occluded: l,
                        shouldShowInputDeviceChangedTooltip: r,
                        shouldShowOutputDeviceChangedTooltip: i,
                    } = this.props,
                    { hoveringOnMute: s } = this.state,
                    o =
                        void 0 === this.lastSpeakingWhileMutedNotificationTime ||
                        Date.now() - this.lastSpeakingWhileMutedNotificationTime > td;
                a
                    ? s ||
                      !e ||
                      t ||
                      n ||
                      l ||
                      !o ||
                      r ||
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
            ti(this, "renderNameTag", (e) => {
                let { currentUser: t, username: n } = this.props;
                return null == t
                    ? null
                    : (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)("div", {
                                  className: tr.panelTitleContainer,
                                  children: (0, a.jsx)(e9.Z, {
                                      className: i()({ [tr.withDisplayNameStyles]: null != e }),
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
                                  className: tr.panelSubtextContainer,
                                  children: (0, a.jsx)(e2.Z, { children: this.renderStatus() }),
                              }),
                          ],
                      });
            });
    }
}
function tx(e) {
    let {
            selfDeaf: t,
            selfMute: n,
            awaitingRemote: l,
            serverMute: r,
            serverDeaf: i,
            suppress: s,
            shouldShowSpeakingWhileMutedTooltip: o,
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
        E = (0, el.A)(j);
    return (0, a.jsxs)("div", {
        className: tr.buttons,
        style: E,
        children: [
            (0, a.jsx)(tv, {
                accountContainerRef: _,
                selfMute: n,
                serverMute: r,
                suppress: s,
                awaitingRemote: l,
                onMouseEnter: u,
                onMouseLeave: m,
                onClick: h,
                onContextMenu: x,
                iconForeground: null != j ? tr.iconForeground : void 0,
                nameplate: j,
                shouldShowInputDeviceChangedTooltip: y,
                shouldShowSpeakingWhileMutedTooltip: o,
                dismissTooltips: S,
            }),
            (0, a.jsx)(tj, {
                selfDeaf: t,
                serverDeaf: i,
                onClick: p,
                onContextMenu: g,
                awaitingRemote: l,
                iconForeground: null != j ? tr.iconForeground : void 0,
                nameplate: j,
                shouldShowOutputDeviceChangedTooltip: C,
                dismissTooltips: S,
            }),
            (0, a.jsx)(tb, {
                isEligibleForPomelo: c,
                webBuildOverride: d,
                onClick: f,
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
function tg(e) {
    let { shouldShowDeviceChangedNotifications: t } = (0, e5.P)({
            location: "Account.useDeviceChangedTooltip",
            autoTrackExposure: !1,
        }),
        n = (0, d.e7)([eF.Z], () => null != eF.Z.getChannelId()),
        a = (0, et.Fh)(e),
        r = l.useRef(new m.V7()),
        [i, s] = l.useState(!1);
    l.useEffect(() => {
        n &&
            a &&
            ((0, e5._)({
                location: "Account.useDeviceChangedTooltip (exposure tracking)",
                autoTrackExposure: !0,
            }),
            t &&
                (s(!0),
                r.current.start(tm, () => {
                    s(!1);
                })));
    }, [n, a, t]);
    let o = l.useCallback(() => {
        s(!1), r.current.stop();
    }, []);
    return (
        (0, j.zq)(() => {
            r.current.stop();
        }),
        {
            shouldShowTooltip: i,
            dismissTooltip: o,
        }
    );
}
function tf() {
    var e;
    let t = (0, d.e7)([eH.default], () => eH.default.getCurrentUser()),
        n = (0, d.e7)([eZ.default], () => eZ.default.getId()),
        l = e8.K.useConfig({ location: "AccountConnected" }).transitionAccountPanel,
        {
            activities: r,
            streaming: i,
            status: s,
        } = (0, d.cj)([eG.Z], () => {
            let e = eG.Z.getActivities();
            return {
                activities: e,
                streaming:
                    null !=
                    e.find((e) => {
                        let { type: t } = e;
                        return t === te.IIU.STREAMING;
                    }),
                status: eG.Z.getStatus(),
            };
        }),
        c = (0, d.e7)([eA.Z], () => eA.Z.getAnyStreamForUser(n)),
        m = (0, v.Z)({ userId: n }),
        p = (0, d.e7)([ez.Z], () => ez.Z.isCurrentUserPTTLatched()),
        h = e3.ZP.useUserTag(t, { decoration: "never" }),
        x = (0, d.e7)([eV.Z], () => eV.Z.hidePersonalInformation),
        f = (0, d.e7)([eF.Z, eD.Z], () => {
            let e = eF.Z.getChannelId();
            return null != e ? eD.Z.getChannel(e) : null;
        }),
        { mute: b, selfMute: j, suppress: _ } = (0, e_.Z)(f),
        { selfDeaf: C, deaf: S } = (0, ej.Z)(f),
        E = (0, d.e7)([k.C], () => {
            var e;
            return (0, R.fD)()
                ? null == (e = k.C.getCurrentBuildOverride().overrides)
                    ? void 0
                    : e.discord_web
                : null;
        }),
        O = (0, d.e7)([eW.Z], () => eW.Z.getPremiumTypeSubscription()),
        w = (0, d.e7)([eU.Z], () => eU.Z.getSpeakingWhileMuted()),
        Z = (0, d.e7)([A.Z], () => A.Z.isFullscreenInContext()),
        D = (0, d.e7)([eM.Z], () => eM.Z.hasLayers()),
        L = (0, g.s9z)(g.JQI) || D || e1.s.isDisallowPopupsSet() || Z,
        M = (0, es.b)(),
        U = (0, d.e7)([X.default], () => null != X.default.getAwaitingRemoteSessionInfo()),
        F = (0, d.e7)([eB.Z], () => eB.Z.getGuildId()),
        B = null == t ? void 0 : t.avatarDecoration,
        G = (0, P.R)(t, null != F ? F : void 0),
        z = (0, I.Z)(l ? G : B),
        H = e0.ZP.useName(null != F ? F : void 0, null, t),
        K = null != (e = e3.ZP.useName(t)) ? e : "",
        { voiceActivityStatusEnabled: q } = (0, y.U)({ location: "Account" }),
        [Y, J] = (0, $.G)(null != F ? F : null),
        [Q, ee] = (0, V.b)(),
        et = W.JH.useExperiment({ location: "Account" }).enabled,
        en = (0, ec.c)(t, "Account"),
        { analyticsLocations: el } = (0, N.ZP)(T.Z.ACCOUNT),
        er = (0, ea.K)({
            user: t,
            guildId: l && null != F ? F : void 0,
        }),
        { isQuestBarEmpty: ei, hasLoadedQuestBar: eo } = (0, eu.Ws)({ location: tn.dr.CONFLICT_CHECKS }),
        ed = (0, d.e7)([em.Z, eH.default, eL.Z], () => {
            let e,
                t = em.Z.getSyncingWith(),
                n = em.Z.getActivity(),
                a = [];
            if (
                (null != t ? (e = t.partyId) : null != n && null != n.party && null != n.party.id && (e = n.party.id),
                null != e)
            ) {
                var l;
                a = o()(Array.from(null != (l = eL.Z.getParty(e)) ? l : []))
                    .map((e) => eH.default.getUser(e))
                    .filter(e$.lm)
                    .value();
            }
            return a.length > 1;
        }),
        eh = (0, ep.Un)({ location: "AccountConnected" }),
        ex = {
            avatar: [],
            settings: [],
        };
    !L &&
        (et && ex.avatar.push(u.z.DISPLAY_NAME_STYLES_COACHMARK),
        en && ex.avatar.push(u.z.TENURE_BADGE_CHURN_REMINDER),
        eh && ex.avatar.push(u.z.WIDGETS_RTC_UPSELL_COACHMARK));
    let { shouldShowTooltip: eg, dismissTooltip: ef } = tg(ta.h7.AUDIO_INPUT),
        { shouldShowTooltip: eb, dismissTooltip: ev } = tg(ta.h7.AUDIO_OUTPUT);
    return (0, a.jsx)(N.Gt, {
        value: el,
        children: (0, a.jsx)(th, {
            currentUser: t,
            username: l ? H : K,
            transitionAccountPanel: l,
            activities: r,
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
            status: s,
            streaming: i,
            suppress: _,
            webBuildOverride: E,
            awaitingRemote: U,
            isEligibleForPomelo: M,
            voiceActivityStatusEnabled: q,
            nameplate: er,
            selectedGuildId: F,
            avatarDecoration: z,
            isQuestBarEmpty: ei,
            hasLoadedQuestBar: eo,
            isListenAlongVisible: ed,
            shouldShowInputDeviceChangedTooltip: eg,
            shouldShowOutputDeviceChangedTooltip: eb,
            dismissInputDeviceChangedTooltip: ef,
            dismissOutputDeviceChangedTooltip: ev,
        }),
    });
}
function tb(e) {
    let t,
        n,
        r,
        {
            webBuildOverride: i,
            isEligibleForPomelo: s,
            onClick: o,
            onContextMenu: c,
            iconForeground: d,
            nameplate: u,
            shouldShowInputDeviceChangedTooltip: m,
            shouldShowOutputDeviceChangedTooltip: p,
        } = e,
        x = l.useRef(null),
        { showRefreshedAudioContextMenu: f } = (0, e6.e)({ location: "SettingsCogButton" }),
        b = !f && (m || p),
        { name: v } = (0, et.p6)(ta.h7.AUDIO_INPUT),
        { name: j } = (0, et.p6)(ta.h7.AUDIO_OUTPUT);
    !f && m
        ? ((t = tl.intl.format(tl.t["18wnuD"], { inputDeviceName: v })),
          (n = tl.intl.formatToPlainString(tl.t["18wnuD"], { inputDeviceName: v })),
          (r = tl.intl.formatToPlainString(tl.t["18wnuD"], { inputDeviceName: v })))
        : !f && p
          ? ((t = tl.intl.format(tl.t["f+DDY/"], { outputDeviceName: j })),
            (n = tl.intl.formatToPlainString(tl.t["f+DDY/"], { outputDeviceName: j })),
            (r = tl.intl.formatToPlainString(tl.t["f+DDY/"], { outputDeviceName: j })))
          : (t =
                null != i
                    ? tl.intl.formatToPlainString(tl.t.Gzh6ZP, { webBuildOverride: i.id })
                    : tl.intl.string(tl.t.cduTBL));
    let _ = g.ewm,
        y = (0, h.i)();
    return (
        (_ = null != i ? g.bgT : s ? g.Ncx : y.Component),
        (0, a.jsx)(
            e7.Z,
            to(
                ts(
                    {
                        ref: x,
                        tooltipText: t,
                        tooltipColor: b ? g.r6K.GREEN : void 0,
                        tooltipForceOpen: b,
                        tooltipClassName: tr.accountButtonsTooltip,
                        tooltipContentClassName: tr.accountButtonsTooltipContent,
                        tooltipPositionKeyStemOverride: n,
                        "aria-label": b ? r : void 0,
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
function tv(e) {
    let t,
        {
            selfMute: n,
            serverMute: r,
            suppress: s,
            awaitingRemote: o,
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
        S = n || s || r,
        E = l.useRef(null),
        O = l.useRef(null),
        P = (0, eR.b)(S),
        { activeVoice: I, mostRecentlyRequestedVoiceId: w, lastInitAttemptMayHaveCrashed: k } = (0, eO.o)(),
        { showSilentLagWarning: R } = (0, eE.Y)(),
        A = null != I,
        Z = (0, eS.z)(I),
        U = (0, d.e7)([eF.Z], () => eF.Z.isConnected()),
        { Component: F, events: B, play: z } = P,
        V = r || s ? g.v0G : F,
        W = (0, D.Z)(n, r, s, o),
        K = R ? tl.intl.string(tl.t.ARRV6m) : null;
    t = _
        ? tl.intl.string(tl.t["29gnR4"])
        : null != K
          ? (0, a.jsxs)("div", {
                className: tr.tooltipWithSubtext,
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
        Y = (0, ey.Hu)({
            location: T.Z.AUDIO_INPUT_BUTTON,
            autoTrackExposure: !0,
        }),
        J = (0, eC.av)({
            location: T.Z.AUDIO_INPUT_BUTTON,
            autoTrackExposure: !0,
        });
    l.useEffect(() => () => z(), [S, z]);
    let X = l.useCallback(
            (e) => {
                b(e, q);
            },
            [b, q],
        ),
        [Q, $] = l.useState(!1),
        ee = l.useCallback((e) => {
            var t;
            if (
                (0, c.kK)(null == e ? void 0 : e.target, Node) &&
                (null == (t = E.current) ? void 0 : t.contains(e.target))
            )
                return x.F;
            $(!1);
        }, []);
    (0, eJ.yp)({
        event: te.CkL.OPEN_VOICE_FILTER_POPOUT,
        handler: () => {
            $(!0);
        },
    });
    let [en, ea] = l.useState(!1);
    l.useEffect(() => {
        let e;
        return (
            U &&
                A &&
                (e = setTimeout(() => {
                    ea(!0), (e = setTimeout(() => ea(!1), tu));
                }, 300)),
            () => {
                ea(!1), clearTimeout(e);
            }
        );
    }, [U]);
    let el = l.useCallback(() => {
            k || (0, eT.r5)();
        }, [k]),
        er = S ? g.TVs.colors.STATUS_DANGER : R ? g.TVs.colors.STATUS_WARNING : "currentColor",
        ei = S || R,
        es = (0, eo.Z)({ location: "Account" }),
        { name: ec } = (0, et.p6)(ta.h7.AUDIO_INPUT),
        { showRefreshedAudioContextMenu: ed } = (0, e6.e)({ location: "MicrophoneButton" }),
        { enabledInputProfiles: eu } = (0, eb.G)({ location: "MicrophoneButton" });
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
                      let { onClick: l } = e,
                          { isShown: r } = n,
                          s = r ? g.u04 : g.CJ0;
                      return (0, a.jsxs)("div", {
                          ref: E,
                          className: i()(tr.micButtonParent, {
                              [tr.hasColorGlow]: ei,
                              [tr.popoutOpen]: r,
                          }),
                          children: [
                              (0, a.jsx)(e7.Z, {
                                  "aria-checked": S,
                                  "aria-label": tl.intl.string(tl.t.w4m945),
                                  className: i()({ [tr.micButtonWithMenu]: !0 }),
                                  disabled: o,
                                  icon: (0, a.jsx)(V, {
                                      size: "custom",
                                      width: 20,
                                      height: 20,
                                      color: er,
                                      className: m,
                                  }),
                                  onClick: f,
                                  onContextMenu: l,
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
                                  tooltipColor: _ ? g.r6K.GREEN : void 0,
                                  tooltipForceOpen: _,
                                  tooltipText: t,
                              }),
                              (0, a.jsx)(e7.Z, {
                                  "aria-label": y
                                      ? tl.intl.formatToPlainString(tl.t["18wnuD"], { inputDeviceName: ec })
                                      : tl.intl.string(tl.t.fRzCbB),
                                  className: i()(tr.buttonChevron, { [tr.popoutOpen]: r }),
                                  disabled: o,
                                  icon: (0, a.jsx)(s, {
                                      className: tr.buttonChevronIcon,
                                      size: "custom",
                                      width: 12,
                                      height: 12,
                                      color: er,
                                  }),
                                  onClick: l,
                                  onContextMenu: l,
                                  onMouseEnter: p,
                                  onMouseLeave: h,
                                  orangeGlow: R,
                                  plated: null != v,
                                  redGlow: S,
                                  tooltipClassName: tr.accountButtonsTooltip,
                                  tooltipColor: y ? g.r6K.GREEN : void 0,
                                  tooltipContentClassName: tr.accountButtonsTooltipContent,
                                  tooltipForceOpen: y,
                                  tooltipPositionKeyStemOverride: y
                                      ? tl.intl.formatToPlainString(tl.t["18wnuD"], { inputDeviceName: ec })
                                      : void 0,
                                  tooltipShouldShow: !r,
                                  tooltipText: y
                                      ? tl.intl.format(tl.t["18wnuD"], { inputDeviceName: ec })
                                      : tl.intl.string(tl.t.fRzCbB),
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
                  className: i()(tr.micButtonParent, { [tr.hasColorGlow]: ei }),
                  children: [
                      (0, a.jsx)(e7.Z, {
                          tooltipText: t,
                          tooltipColor: _ ? g.r6K.GREEN : void 0,
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
                              color: er,
                              className: m,
                          }),
                          onClick: f,
                          onContextMenu: X,
                          role: "switch",
                          className: i()({ [tr.micButtonWithMenu]: Y }),
                          orangeGlow: R,
                          redGlow: S,
                          "aria-label": tl.intl.string(tl.t.w4m945),
                          "aria-checked": S,
                          disabled: o,
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
                              onRequestOpen: el,
                              onRequestClose: ee,
                              shouldShow: Q,
                              renderPopout: (e) => {
                                  let { closePopout: t } = e;
                                  return (0, a.jsx)(ew.l, { onSettingsButtonClick: t });
                              },
                              children: (e, t) => {
                                  var { onClick: n } = e,
                                      l = (function (e, t) {
                                          if (null == e) return {};
                                          var n,
                                              a,
                                              l = (function (e, t) {
                                                  if (null == e) return {};
                                                  var n,
                                                      a,
                                                      l = {},
                                                      r = Object.keys(e);
                                                  for (a = 0; a < r.length; a++)
                                                      (n = r[a]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                                                  return l;
                                              })(e, t);
                                          if (Object.getOwnPropertySymbols) {
                                              var r = Object.getOwnPropertySymbols(e);
                                              for (a = 0; a < r.length; a++)
                                                  (n = r[a]),
                                                      !(t.indexOf(n) >= 0) &&
                                                          Object.prototype.propertyIsEnumerable.call(e, n) &&
                                                          (l[n] = e[n]);
                                          }
                                          return l;
                                      })(e, ["onClick"]),
                                      { isShown: r } = t;
                                  let i = r ? g.u04 : g.CJ0,
                                      s = [];
                                  return (
                                      !r &&
                                          (es && s.push(u.z.VOICE_FILTER_EARLY_ACCESS_COACHMARK),
                                          s.push(u.z.VOICE_FILTER_LAUNCH_COACHMARK),
                                          J && U && !A && s.push(u.z.VOICE_FILTER_FIRST_USE_COACHMARK)),
                                      (0, a.jsx)("div", {
                                          children: (0, a.jsx)(H.ZP, {
                                              bypassAutoDismiss: !0,
                                              contentTypes: s,
                                              children: (e) => {
                                                  let { visibleContent: t, markAsDismissed: r } = e,
                                                      s = null;
                                                  t === u.z.VOICE_FILTER_EARLY_ACCESS_COACHMARK
                                                      ? (s = (0, a.jsx)(eI.U, {
                                                            markAsDismissed: r,
                                                            onCTA: () => $(!0),
                                                        }))
                                                      : t === u.z.VOICE_FILTER_LAUNCH_COACHMARK
                                                        ? (s = (0, a.jsx)(eP.n, {
                                                              markAsDismissed: r,
                                                              onCTA: () => $(!0),
                                                          }))
                                                        : t === u.z.VOICE_FILTER_FIRST_USE_COACHMARK &&
                                                          (s = (0, a.jsx)(eN.v, {
                                                              markAsDismissed: r,
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
                                                                      ? tr.voiceFilterWarning
                                                                      : void 0,
                                                                  tooltipText: en
                                                                      ? (0, a.jsxs)(a.Fragment, {
                                                                            children: [
                                                                                (0, a.jsx)("img", {
                                                                                    alt:
                                                                                        null != Z
                                                                                            ? tl.intl.string(Z.name)
                                                                                            : "",
                                                                                    src: null == Z ? void 0 : Z.iconURL,
                                                                                    draggable: !1,
                                                                                }),
                                                                                (0, a.jsx)(g.Text, {
                                                                                    variant: "text-sm/medium",
                                                                                    color: "always-white",
                                                                                    children: tl.intl.string(
                                                                                        tl.t.VlC1de,
                                                                                    ),
                                                                                }),
                                                                            ],
                                                                        })
                                                                      : tl.intl.string(tl.t.Hapb4J),
                                                                  icon: (0, a.jsx)(i, {
                                                                      className: tr.buttonChevronIcon,
                                                                      size: "custom",
                                                                      width: 12,
                                                                      height: 12,
                                                                      color: er,
                                                                  }),
                                                                  role: "button",
                                                                  className: tr.buttonChevron,
                                                                  orangeGlow: R,
                                                                  redGlow: S,
                                                                  "aria-label": tl.intl.string(tl.t.Hapb4J),
                                                                  disabled: o,
                                                                  onClick: (e) => {
                                                                      r(tt.L.INDIRECT_ACTION),
                                                                          n(e),
                                                                          null != w && !Q && k
                                                                              ? (0, ek.$)(() => $(!0))
                                                                              : $(!Q);
                                                                  },
                                                              },
                                                              l,
                                                          ),
                                                      );
                                                  return null != s
                                                      ? (0, a.jsx)(g.yRy, {
                                                            targetElementRef: O,
                                                            renderPopout: () => s,
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
function tj(e) {
    let {
            selfDeaf: t,
            serverDeaf: n,
            awaitingRemote: r,
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
            play: f,
            events: { onMouseEnter: b, onMouseLeave: v },
        } = (0, p.l)(h ? "undeafen" : "deafen"),
        j = n ? g.Vm4 : x,
        { name: _ } = (0, et.p6)(ta.h7.AUDIO_OUTPUT),
        { showRefreshedAudioContextMenu: y } = (0, e6.e)({ location: "HeadphonesButton" }),
        C = (0, Z.Z)(t, n, r),
        { analyticsLocations: S } = (0, N.ZP)(T.Z.AUDIO_OUTPUT_BUTTON),
        E = l.useRef(null);
    l.useEffect(() => () => f(), [h, f]);
    let O = l.useCallback(
        (e) => {
            o(e, S);
        },
        [o, S],
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
                      let { onClick: l } = e,
                          { isShown: o } = t,
                          m = o ? g.u04 : g.CJ0;
                      return (0, a.jsxs)("div", {
                          ref: E,
                          className: i()(tr.micButtonParent, {
                              [tr.hasColorGlow]: h,
                              [tr.popoutOpen]: o,
                          }),
                          children: [
                              (0, a.jsx)(e7.Z, {
                                  "aria-checked": h,
                                  "aria-label": tl.intl.string(tl.t.wjcRFX),
                                  className: tr.micButtonWithMenu,
                                  disabled: r,
                                  icon: (0, a.jsx)(j, {
                                      size: "custom",
                                      width: 20,
                                      height: 20,
                                      color: h ? g.TVs.colors.STATUS_DANGER : "currentColor",
                                      className: c,
                                  }),
                                  iconForeground: h ? tr.strikethrough : void 0,
                                  innerClassName: i()({ [tr.redIcon]: n }),
                                  onClick: s,
                                  onContextMenu: l,
                                  onMouseEnter: b,
                                  onMouseLeave: v,
                                  plated: null != d,
                                  redGlow: h,
                                  role: "switch",
                                  tooltipText: C,
                              }),
                              (0, a.jsx)(e7.Z, {
                                  "aria-label": u
                                      ? tl.intl.formatToPlainString(tl.t["f+DDY/"], { outputDeviceName: _ })
                                      : tl.intl.string(tl.t.aA4Vce),
                                  className: i()(tr.buttonChevron, { [tr.popoutOpen]: o }),
                                  disabled: r,
                                  icon: (0, a.jsx)(m, {
                                      className: tr.buttonChevronIcon,
                                      size: "custom",
                                      width: 12,
                                      height: 12,
                                      color: h ? g.TVs.colors.STATUS_DANGER : "currentColor",
                                  }),
                                  onClick: l,
                                  onContextMenu: l,
                                  plated: null != d,
                                  redGlow: h,
                                  tooltipClassName: tr.accountButtonsTooltip,
                                  tooltipColor: u ? g.r6K.GREEN : void 0,
                                  tooltipContentClassName: tr.accountButtonsTooltipContent,
                                  tooltipForceOpen: u,
                                  tooltipPositionKeyStemOverride: u
                                      ? tl.intl.formatToPlainString(tl.t["f+DDY/"], { outputDeviceName: _ })
                                      : void 0,
                                  tooltipShouldShow: !o,
                                  tooltipText: u
                                      ? tl.intl.format(tl.t["f+DDY/"], { outputDeviceName: _ })
                                      : tl.intl.string(tl.t.aA4Vce),
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
                  onClick: s,
                  onContextMenu: O,
                  innerClassName: i()({ [tr.redIcon]: n }),
                  iconForeground: h ? tr.strikethrough : void 0,
                  role: "switch",
                  redGlow: h,
                  "aria-label": tl.intl.string(tl.t.wjcRFX),
                  "aria-checked": h,
                  disabled: r,
              }),
          });
}
