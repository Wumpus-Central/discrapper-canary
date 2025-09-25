n.d(t, {
    Z: () => tb,
    m: () => th,
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
    z = n(338390),
    V = n(64220),
    H = n(427217),
    W = n(812055),
    q = n(243778),
    K = n(594928),
    Y = n(181430),
    X = n(821795),
    J = n(287647),
    $ = n(892567),
    Q = n(258609),
    ee = n(53891),
    et = n(291533),
    en = n(72897),
    ea = n(78933),
    er = n(850020),
    ei = n(379839),
    el = n(359135),
    es = n(516817),
    eo = n(332473),
    ec = n(963590),
    ed = n(562705),
    eu = n(667105),
    em = n(768419),
    ep = n(172416),
    eh = n(184301),
    ex = n(670188),
    ef = n(620799),
    eb = n(313789),
    eg = n(846071),
    ev = n(518596),
    ej = n(879815),
    e_ = n(294629),
    ey = n(875527),
    eC = n(702977),
    eE = n(56848),
    eN = n(940315),
    eS = n(378441),
    eT = n(358820),
    eO = n(723547),
    eP = n(361045),
    eI = n(74650),
    ek = n(306609),
    ew = n(170293),
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
    ez = n(246946),
    eV = n(594174),
    eH = n(78839),
    eW = n(626135),
    eq = n(768581),
    eK = n(572004),
    eY = n(459273),
    eX = n(585483),
    eJ = n(70956),
    e$ = n(823379),
    eQ = n(5192),
    e0 = n(374023),
    e1 = n(51144),
    e8 = n(998502),
    e3 = n(660230),
    e4 = n(853170),
    e6 = n(422202),
    e2 = n(870569),
    e5 = n(345243),
    e7 = n(115530),
    e9 = n(981631),
    te = n(215023),
    tt = n(921944),
    tn = n(46140),
    ta = n(65154),
    tr = n(388032),
    ti = n(490579);
function tl(e, t, n) {
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
                tl(e, t, n[t]);
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
let tc = e8.ZP.getEnableHardwareAcceleration() ? f.Xo$ : f.qEK,
    td = 2 * eJ.Z.Millis.MINUTE,
    tu = 3 * eJ.Z.Millis.SECOND,
    tm = 5 * eJ.Z.Millis.SECOND;
function tp(e) {
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
        y = (0, eq.NZ)({
            avatarDecoration: x,
            size: (0, k.y9)(f.EFr.SIZE_32),
        }),
        C = (0, f.dQu)(f.TVs.modules.guildbar.AVATAR_SIZE),
        E = (0, z.Z)("Account") ? 32 : C,
        {
            updateOpenPopoutRef: N,
            highlightBadge: S,
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
                        eX.S.subscribe(e9.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, t),
                        () => {
                            eX.S.unsubscribe(e9.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, t);
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
        O = (0, ei.A)(m);
    return null == s
        ? null
        : (0, a.jsx)(g.Z, {
              object: e9.qAy.AVATAR,
              children: (0, a.jsx)(ex.Z, {
                  user: s,
                  targetElementRef: j,
                  clickTrap: !0,
                  preload: () =>
                      (0, eh.Z)(s.id, s.getAvatarURL(h ? p : void 0, ex.I), {
                          type: "account_popout",
                          withMutualGuilds: !1,
                          withMutualFriends: !1,
                      }),
                  renderPopout: (e, t) => {
                      let { closePopout: n, setPopoutRef: r } = e;
                      return (0, a.jsx)(ea.Z, {
                          currentUser: s,
                          highlightBadge: S,
                          openedAt: t,
                          onClose: () => {
                              null == n || n();
                          },
                          setPopoutRef: r,
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
                      N(e),
                      (0, a.jsxs)(
                          f.P3F,
                          to(
                              ts(
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
                                  "aria-label": tr.intl.string(tr.t["3Uj+2t"]),
                                  "data-jump-section": b,
                                  className: l()(ti.avatarWrapper, { [ti.plated]: null != m }),
                                  children: [
                                      (0, a.jsx)(tc, {
                                          size: f.EFr["SIZE_".concat(E)],
                                          src: s.getAvatarURL(h ? p : void 0, E - 4, !1),
                                          avatarDecoration: y,
                                          "aria-label": s.username,
                                          status: i ? e9.Skl.STREAMING : o,
                                          isSpeaking: n,
                                          className: ti.avatar,
                                      }),
                                      (0, a.jsx)("div", {
                                          className: l()(ti.nameTag, { [ti.canCopy]: eK.wS }),
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
class th extends r.PureComponent {
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
                tr.intl.string(tr.t.MSaeTU),
                tr.intl.string(tr.t.UmrCw8),
                tr.intl.string(tr.t.gKE0Ji),
                tr.intl.string(tr.t["4DSKbm"]),
                tr.intl.string(tr.t["+8ENdX"]),
                tr.intl.string(tr.t.GlWHv7),
                tr.intl.string(tr.t.hIzxU1),
                tr.intl.string(tr.t["26uMPD"]),
                tr.intl.string(tr.t.uFs7R0),
                tr.intl.string(tr.t.bLXdcX),
                tr.intl.string(tr.t.gPg9fX),
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
                    textClassName: ti.activityStatusText,
                    hideTooltip: !0,
                }),
            });
        let c =
            null == t
                ? void 0
                : t.find((e) => {
                      let { type: t } = e;
                      return t === e9.IIU.CUSTOM_STATUS;
                  });
        return null != c
            ? (0, a.jsx)(S.Z, {
                  hoverText: l,
                  forceHover: e,
                  children: (0, a.jsx)(H.Z, {
                      activity: c,
                      emojiClassName: ti.emoji,
                      className: ti.customStatus,
                  }),
              })
            : null != i && i !== e9.Skl.UNKNOWN && r.hasUniqueUsername()
              ? (0, a.jsx)(S.Z, {
                    hoverText: l,
                    forceHover: e,
                    children: (0, a.jsx)(N.Z, { text: e1.ZP.humanizeStatus(i) }),
                })
              : l;
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
            return (0, a.jsx)(ee.ZP, {
                guildId: null != (d = this.props.selectedGuildId) ? d : null,
                onDismiss: i,
                targetElementRef: this.avatarWithPopoutRef,
                children: this.renderAvatarWithPopout({ focusSectionProps: e }),
            });
        }
        return l === u.z.DO_NOT_DISTURB_REMINDER_POPOVER
            ? (0, a.jsx)(W.Z, {
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
                      (0, a.jsx)(q.ZP, {
                          contentTypes: n.avatar,
                          groupName: tt.R.ACCOUNT_NAME_ZONE,
                          children: (t) => {
                              let { visibleContent: n, markAsDismissed: r } = t;
                              switch (n) {
                                  case u.z.WIDGETS_RTC_UPSELL_COACHMARK:
                                      return (0, a.jsx)(ef.Z, {
                                          markAsDismissed: r,
                                          targetElementRef: this.avatarWithPopoutRef,
                                          children: this.renderAvatarWithPopout({ focusSectionProps: e }),
                                      });
                                  case u.z.PREMIUM_SUBSCRIPTION_APRIL_MARKETING_DECO_TOOLTIP:
                                      return (0, a.jsx)(V.Z, {
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
            s = this.state.hovered;
        return null == e
            ? null
            : (0, a.jsx)(f.Wdt, {
                  children: (e) =>
                      (0, a.jsxs)("div", {
                          ref: this.containerRef,
                          className: l()(ti.container, {
                              [ti.containerRtcOpened]: null != n,
                              [ti.containerQuestBarVisible]: !r,
                              [ti.containerListenAlongVisible]: i,
                          }),
                          onMouseEnter: this.handleMouseEnter,
                          onMouseLeave: this.handleMouseLeave,
                          children: [
                              (0, a.jsx)(es.Z, {
                                  nameplate: t,
                                  hovered: s,
                                  placement: el.i.ACCOUNT,
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
              });
    }
    constructor(...e) {
        super(...e),
            tl(this, "copiedTimeout", new m.V7()),
            tl(this, "copiedDecayTimeout", new m.V7()),
            tl(this, "speakingWhileMutedTooltipTimeout", new m.V7()),
            tl(this, "lastSpeakingWhileMutedNotificationTime", void 0),
            tl(this, "state", {
                hovered: !1,
                copiedStreak: 0,
                shouldShowNametagTooltip: !1,
                shouldShowCopiedFeedback: !1,
                shouldShowSpeakingWhileMutedTooltip: !1,
                hoveringOnMute: !1,
            }),
            tl(this, "containerRef", r.createRef()),
            tl(this, "avatarWithPopoutRef", r.createRef()),
            tl(this, "handleToggleSelfMute", () => {
                let { serverMute: e, suppress: t, selfMute: n } = this.props;
                (0, F.Z)(e, t, e9.jXE.ACCOUNT_PANEL), (0, B.v)(T.Z.ACCOUNT, B.d.MIC, n);
            }),
            tl(this, "handleToggleSelfDeaf", () => {
                let { serverDeaf: e, selfDeaf: t } = this.props;
                (0, U.Z)(e, e9.jXE.ACCOUNT_PANEL), (0, B.v)(T.Z.ACCOUNT, B.d.DEAFEN, !t);
            }),
            tl(this, "handleOpenAccountSettings", () => {
                this.dismissTooltips(),
                    eF.Z.isConnected()
                        ? (0, ev.openUserSettings)(eb.n.VOICE_AND_VIDEO_PANEL, { section: e9.oAB.VOICE })
                        : (0, ev.openUserSettings)();
            }),
            tl(this, "handleOpenSettingsContextMenu", (e) => {
                let { currentUser: t } = this.props;
                null != t &&
                    (0, b.jW)(e, async () => {
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
            tl(this, "audioOnInteractionHandler", (0, G.u)("AudioDeviceMenu", T.Z.ACCOUNT)),
            tl(this, "handleInputAudioContextMenu", (e, t) => {
                this.dismissTooltips(),
                    (0, b.jW)(e, async () => {
                        let { default: e } = await Promise.resolve().then(n.bind(n, 659580));
                        return () => {
                            let { enabledInputProfiles: n } = (0, eg.G)({ location: "Account" });
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
            tl(this, "handleOutputAudioContextMenu", (e, t) => {
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
            tl(this, "handleMouseEnter", () => {
                this.setState({ hovered: !0 });
            }),
            tl(this, "handleMouseLeave", () => {
                this.setState({ hovered: !1 });
            }),
            tl(this, "handleMouseEnterMute", () => {
                this.setState({
                    hoveringOnMute: !0,
                    shouldShowSpeakingWhileMutedTooltip: !1,
                }),
                    this.speakingWhileMutedTooltipTimeout.stop();
            }),
            tl(this, "handleMouseLeaveMute", () => {
                this.setState({ hoveringOnMute: !1 });
            }),
            tl(this, "dismissSpeakingWhileMutedTooltip", () => {
                this.setState({ shouldShowSpeakingWhileMutedTooltip: !1 }),
                    this.speakingWhileMutedTooltipTimeout.stop();
            }),
            tl(this, "dismissTooltips", () => {
                var e, t, n, a;
                null == (e = (t = this.props).dismissInputDeviceChangedTooltip) || e.call(t),
                    null == (n = (a = this.props).dismissOutputDeviceChangedTooltip) || n.call(a),
                    this.dismissSpeakingWhileMutedTooltip();
            }),
            tl(this, "handleCopyTag", () => {
                let { currentUser: e } = this.props,
                    { shouldShowNametagTooltip: t, copiedStreak: n } = this.state;
                if (null == e) return;
                (0, eK.JG)(
                    e1.ZP.getUserTag(e, {
                        decoration: "never",
                        identifiable: "always",
                    }),
                ),
                    eW.default.track(e9.rMx.TEXT_COPIED, { type: "User Tag" });
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
            tl(this, "handleOccludedChanged", () => {
                let { occluded: e } = this.props;
                e &&
                    this.setState({
                        shouldShowNametagTooltip: !1,
                        shouldShowSpeakingWhileMutedTooltip: !1,
                    });
            }),
            tl(this, "handleSpeakingWhileMutedChanged", () => {
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
                        Date.now() - this.lastSpeakingWhileMutedNotificationTime > td;
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
            tl(this, "renderNameTag", (e) => {
                let { currentUser: t, isDisplayNameStylesEnabled: n, username: r } = this.props;
                return null == t
                    ? null
                    : (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)("div", {
                                  className: ti.panelTitleContainer,
                                  children: (0, a.jsx)(e7.Z, {
                                      className: l()({ [ti.withDisplayNameStyles]: n && null != e }),
                                      children: (0, a.jsx)($.Z, {
                                          userName: r,
                                          displayNameStyles: e,
                                          effectDisplayType: this.state.hovered ? X.F.ANIMATED : X.F.STATIC,
                                          loop: !0,
                                          inProfile: !0,
                                      }),
                                  }),
                              }),
                              (0, a.jsx)("div", {
                                  className: ti.panelSubtextContainer,
                                  children: (0, a.jsx)(e5.Z, { children: this.renderStatus() }),
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
        N = (0, ei.A)(j);
    return (0, a.jsxs)("div", {
        className: ti.buttons,
        style: N,
        children: [
            (0, a.jsx)(tv, {
                accountContainerRef: _,
                selfMute: n,
                serverMute: i,
                suppress: s,
                awaitingRemote: r,
                onMouseEnter: u,
                onMouseLeave: m,
                onClick: h,
                onContextMenu: x,
                iconForeground: null != j ? ti.iconForeground : void 0,
                nameplate: j,
                shouldShowInputDeviceChangedTooltip: y,
                shouldShowSpeakingWhileMutedTooltip: o,
                dismissTooltips: E,
            }),
            (0, a.jsx)(tj, {
                selfDeaf: t,
                serverDeaf: l,
                onClick: p,
                onContextMenu: f,
                awaitingRemote: r,
                iconForeground: null != j ? ti.iconForeground : void 0,
                nameplate: j,
                shouldShowOutputDeviceChangedTooltip: C,
                dismissTooltips: E,
            }),
            (0, a.jsx)(tg, {
                isEligibleForPomelo: c,
                webBuildOverride: d,
                onClick: b,
                onContextMenu: g,
                dismissibleContents: v.settings,
                iconForeground: null != j ? ti.iconForeground : void 0,
                nameplate: j,
                shouldShowInputDeviceChangedTooltip: y,
                shouldShowOutputDeviceChangedTooltip: C,
            }),
        ],
    });
}
function tf(e) {
    let { shouldShowDeviceChangedNotifications: t } = (0, e6.P)({
            location: "Account.useDeviceChangedTooltip",
            autoTrackExposure: !1,
        }),
        n = (0, d.e7)([eF.Z], () => null != eF.Z.getChannelId()),
        a = (0, en.Fh)(e),
        i = r.useRef(new m.V7()),
        [l, s] = r.useState(!1);
    r.useEffect(() => {
        n &&
            a &&
            ((0, e6._)({
                location: "Account.useDeviceChangedTooltip (exposure tracking)",
                autoTrackExposure: !0,
            }),
            t &&
                (s(!0),
                i.current.start(tm, () => {
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
function tb() {
    var e, t;
    let n = (0, d.e7)([eV.default], () => eV.default.getCurrentUser()),
        r = (0, d.e7)([eZ.default], () => eZ.default.getId()),
        i = e3.K.useConfig({ location: "AccountConnected" }).transitionAccountPanel,
        {
            activities: l,
            streaming: s,
            status: c,
        } = (0, d.cj)([eG.Z], () => {
            let e = eG.Z.getActivities();
            return {
                activities: e,
                streaming:
                    null !=
                    e.find((e) => {
                        let { type: t } = e;
                        return t === e9.IIU.STREAMING;
                    }),
                status: eG.Z.getStatus(),
            };
        }),
        m = (0, d.e7)([eA.Z], () => eA.Z.getAnyStreamForUser(r)),
        p = (0, v.Z)({ userId: r }),
        h = e1.ZP.useUserTag(n, { decoration: "never" }),
        x = (0, d.e7)([ez.Z], () => ez.Z.hidePersonalInformation),
        b = (0, d.e7)([eF.Z, eD.Z], () => {
            let e = eF.Z.getChannelId();
            return null != e ? eD.Z.getChannel(e) : null;
        }),
        { mute: g, selfMute: j, suppress: _ } = (0, e_.Z)(b),
        { selfDeaf: C, deaf: E } = (0, ej.Z)(b),
        N = (0, d.e7)([w.C], () => {
            var e;
            return (0, R.fD)()
                ? null == (e = w.C.getCurrentBuildOverride().overrides)
                    ? void 0
                    : e.discord_web
                : null;
        }),
        S = (0, d.e7)([eH.Z], () => eH.Z.getPremiumTypeSubscription()),
        k = (0, d.e7)([eU.Z], () => eU.Z.getSpeakingWhileMuted()),
        Z = (0, d.e7)([A.Z], () => A.Z.isFullscreenInContext()),
        D = (0, d.e7)([eM.Z], () => eM.Z.hasLayers()),
        L = (0, f.s9z)(f.JQI) || D || e0.s.isDisallowPopupsSet() || Z,
        M = (0, eo.b)(),
        U = (0, d.e7)([Q.Z], () => null != Q.Z.getAwaitingRemoteSessionInfo()),
        F = (0, d.e7)([eB.Z], () => eB.Z.getGuildId()),
        B = null == n ? void 0 : n.avatarDecoration,
        G = (0, P.R)(n, null != F ? F : void 0),
        z = (0, I.Z)(i ? G : B),
        V = eQ.ZP.useName(null != F ? F : void 0, null, n),
        H = null != (t = e1.ZP.useName(n)) ? t : "",
        q = (null == n || null == (e = n.avatarDecoration) ? void 0 : e.skuId) === te.rL,
        { voiceActivityStatusEnabled: X } = (0, y.U)({ location: "Account" }),
        [J, $] = (0, et.G)(null != F ? F : null),
        [ee, en] = (0, W.b)(),
        ea = K.JH.useExperiment({ location: "Account" }).enabled,
        { analyticsLocations: ei } = (0, O.ZP)(T.Z.ACCOUNT),
        el = (0, er.K)({
            user: n,
            guildId: i && null != F ? F : void 0,
        }),
        { isQuestBarEmpty: es, hasLoadedQuestBar: ec } = (0, eu.Ws)({ location: tn.dr.CONFLICT_CHECKS }),
        ed = (0, d.e7)([em.Z, eV.default, eL.Z], () => {
            let e,
                t = em.Z.getSyncingWith(),
                n = em.Z.getActivity(),
                a = [];
            if (
                (null != t ? (e = t.partyId) : null != n && null != n.party && null != n.party.id && (e = n.party.id),
                null != e)
            ) {
                var r;
                a = o()(Array.from(null != (r = eL.Z.getParty(e)) ? r : []))
                    .map((e) => eV.default.getUser(e))
                    .filter(e$.lm)
                    .value();
            }
            return a.length > 1;
        }),
        eh = (0, ep.U)({ location: "AccountConnected" }),
        ex = {
            avatar: [],
            settings: [],
        };
    !L &&
        (q && ex.avatar.push(u.z.PREMIUM_SUBSCRIPTION_APRIL_MARKETING_DECO_TOOLTIP),
        ea && ex.avatar.push(u.z.DISPLAY_NAME_STYLES_COACHMARK),
        eh && ex.avatar.push(u.z.WIDGETS_RTC_UPSELL_COACHMARK));
    let ef = (0, Y.Y)({ location: "AccountConnected" }),
        { shouldShowTooltip: eb, dismissTooltip: eg } = tf(ta.h7.AUDIO_INPUT),
        { shouldShowTooltip: ev, dismissTooltip: ey } = tf(ta.h7.AUDIO_OUTPUT);
    return (0, a.jsx)(O.Gt, {
        value: ei,
        children: (0, a.jsx)(th, {
            currentUser: n,
            username: i ? V : H,
            transitionAccountPanel: i,
            activities: l,
            applicationStream: m,
            voiceChannel: b,
            dismissibleContents: ex,
            visibleRecurringAvatarDc: J,
            markRecurringAvatarDcAsDismissed: $,
            visibleRecurringDoNotDisturbReminderPopoverDc: ee,
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
            isQuestBarEmpty: es,
            hasLoadedQuestBar: ec,
            isListenAlongVisible: ed,
            isDisplayNameStylesEnabled: ef,
            shouldShowInputDeviceChangedTooltip: eb,
            shouldShowOutputDeviceChangedTooltip: ev,
            dismissInputDeviceChangedTooltip: eg,
            dismissOutputDeviceChangedTooltip: ey,
        }),
    });
}
function tg(e) {
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
        { name: v } = (0, en.p6)(ta.h7.AUDIO_INPUT),
        { name: j } = (0, en.p6)(ta.h7.AUDIO_OUTPUT);
    !b && m
        ? ((t = tr.intl.format(tr.t["18wnuL"], { inputDeviceName: v })),
          (n = tr.intl.formatToPlainString(tr.t["18wnuL"], { inputDeviceName: v })),
          (i = tr.intl.formatToPlainString(tr.t["18wnuL"], { inputDeviceName: v })))
        : !b && p
          ? ((t = tr.intl.format(tr.t["f+DDY2"], { outputDeviceName: j })),
            (n = tr.intl.formatToPlainString(tr.t["f+DDY2"], { outputDeviceName: j })),
            (i = tr.intl.formatToPlainString(tr.t["f+DDY2"], { outputDeviceName: j })))
          : (t =
                null != l
                    ? tr.intl.formatToPlainString(tr.t.Gzh6ZG, { webBuildOverride: l.id })
                    : tr.intl.string(tr.t.cduTBA));
    let _ = f.ewm,
        y = (0, h.i)();
    return (
        (_ = null != l ? f.bgT : s ? f.Ncx : y.Component),
        (0, a.jsx)(
            e2.Z,
            to(
                ts(
                    {
                        ref: x,
                        tooltipText: t,
                        tooltipColor: g ? f.FGA.GREEN : void 0,
                        tooltipForceOpen: g,
                        tooltipClassName: ti.accountButtonsTooltip,
                        tooltipContentClassName: ti.accountButtonsTooltipContent,
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
function tv(e) {
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
        P = (0, eR.b)(E),
        { activeVoice: I, mostRecentlyRequestedVoiceId: k, lastInitAttemptMayHaveCrashed: w } = (0, eS.o)(),
        { showSilentLagWarning: R } = (0, eN.Y)(),
        A = null != I,
        Z = (0, eE.z)(I),
        U = (0, d.e7)([eF.Z], () => eF.Z.isConnected()),
        { Component: F, events: B, play: z } = P,
        V = i || s ? f.v0G : F,
        H = (0, D.Z)(n, i, s, o),
        W = R ? tr.intl.string(tr.t.ARRV6u) : null;
    t = _
        ? tr.intl.string(tr.t["29gnR0"])
        : null != W
          ? (0, a.jsxs)("div", {
                className: ti.tooltipWithSubtext,
                children: [
                    (0, a.jsx)(f.Text, {
                        variant: "text-sm/medium",
                        color: "currentColor",
                        children: H,
                    }),
                    (0, a.jsx)(f.Text, {
                        variant: "text-xs/medium",
                        color: "text-feedback-warning",
                        children: W,
                    }),
                ],
            })
          : H;
    let { analyticsLocations: K } = (0, O.ZP)(T.Z.AUDIO_INPUT_BUTTON),
        Y = (0, ey.Hu)({
            location: T.Z.AUDIO_INPUT_BUTTON,
            autoTrackExposure: !0,
        }),
        X = (0, eC.av)({
            location: T.Z.AUDIO_INPUT_BUTTON,
            autoTrackExposure: !0,
        });
    r.useEffect(() => () => z(), [E, z]);
    let J = r.useCallback(
            (e) => {
                g(e, K);
            },
            [g, K],
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
    (0, eY.yp)({
        event: e9.CkL.OPEN_VOICE_FILTER_POPOUT,
        handler: () => {
            Q(!0);
        },
    });
    let [et, ea] = r.useState(!1);
    r.useEffect(() => {
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
    let er = r.useCallback(() => {
            w || (0, eT.r5)();
        }, [w]),
        ei = E ? f.TVs.colors.STATUS_DANGER : R ? f.TVs.colors.STATUS_WARNING : "currentColor",
        el = E || R,
        es = (0, ec.Z)({ location: "Account" }),
        { name: eo } = (0, en.p6)(ta.h7.AUDIO_INPUT),
        { showRefreshedAudioContextMenu: ed } = (0, e4.e)({ location: "MicrophoneButton" }),
        { enabledInputProfiles: eu } = (0, eg.G)({ location: "MicrophoneButton" });
    return ed
        ? (0, a.jsx)(O.Gt, {
              value: K,
              children: (0, a.jsx)(f.yRy, {
                  targetElementRef: N,
                  renderPopout: (e) => {
                      let { closePopout: t } = e;
                      return (
                          C(),
                          (0, a.jsx)(O.Gt, {
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
                  animation: f.yRy.Animation.FADE,
                  spacing: 4,
                  children: (e, n) => {
                      let { onClick: r } = e,
                          { isShown: i } = n,
                          s = i ? f.u04 : f.CJ0;
                      return (0, a.jsxs)("div", {
                          ref: N,
                          className: l()(ti.micButtonParent, {
                              [ti.hasColorGlow]: el,
                              [ti.popoutOpen]: i,
                          }),
                          children: [
                              (0, a.jsx)(e2.Z, {
                                  "aria-checked": E,
                                  "aria-label": tr.intl.string(tr.t["w4m94+"]),
                                  className: l()({ [ti.micButtonWithMenu]: !0 }),
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
                              (0, a.jsx)(e2.Z, {
                                  "aria-label": y
                                      ? tr.intl.formatToPlainString(tr.t["18wnuL"], { inputDeviceName: eo })
                                      : tr.intl.string(tr.t.fRzCbG),
                                  className: l()(ti.buttonChevron, { [ti.popoutOpen]: i }),
                                  disabled: o,
                                  icon: (0, a.jsx)(s, {
                                      className: ti.buttonChevronIcon,
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
                                  tooltipClassName: ti.accountButtonsTooltip,
                                  tooltipColor: y ? f.FGA.GREEN : void 0,
                                  tooltipContentClassName: ti.accountButtonsTooltipContent,
                                  tooltipForceOpen: y,
                                  tooltipPositionKeyStemOverride: y
                                      ? tr.intl.formatToPlainString(tr.t["18wnuL"], { inputDeviceName: eo })
                                      : void 0,
                                  tooltipShouldShow: !i,
                                  tooltipText: y
                                      ? tr.intl.format(tr.t["18wnuL"], { inputDeviceName: eo })
                                      : tr.intl.string(tr.t.fRzCbG),
                              }),
                          ],
                      });
                  },
              }),
          })
        : (0, a.jsx)(O.Gt, {
              value: K,
              children: (0, a.jsxs)("div", {
                  ref: N,
                  className: l()(ti.micButtonParent, { [ti.hasColorGlow]: el }),
                  children: [
                      (0, a.jsx)(e2.Z, {
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
                          className: l()({ [ti.micButtonWithMenu]: Y }),
                          orangeGlow: R,
                          redGlow: E,
                          "aria-label": tr.intl.string(tr.t["w4m94+"]),
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
                                  let l = i ? f.u04 : f.CJ0,
                                      s = [];
                                  return (
                                      !i &&
                                          (es && s.push(u.z.VOICE_FILTER_EARLY_ACCESS_COACHMARK),
                                          s.push(u.z.VOICE_FILTER_LAUNCH_COACHMARK),
                                          X && U && !A && s.push(u.z.VOICE_FILTER_FIRST_USE_COACHMARK)),
                                      (0, a.jsx)("div", {
                                          children: (0, a.jsx)(q.ZP, {
                                              bypassAutoDismiss: !0,
                                              contentTypes: s,
                                              children: (e) => {
                                                  let { visibleContent: t, markAsDismissed: i } = e,
                                                      s = null;
                                                  t === u.z.VOICE_FILTER_EARLY_ACCESS_COACHMARK
                                                      ? (s = (0, a.jsx)(eI.U, {
                                                            markAsDismissed: i,
                                                            onCTA: () => Q(!0),
                                                        }))
                                                      : t === u.z.VOICE_FILTER_LAUNCH_COACHMARK
                                                        ? (s = (0, a.jsx)(eP.n, {
                                                              markAsDismissed: i,
                                                              onCTA: () => Q(!0),
                                                          }))
                                                        : t === u.z.VOICE_FILTER_FIRST_USE_COACHMARK &&
                                                          (s = (0, a.jsx)(eO.v, {
                                                              markAsDismissed: i,
                                                              onCTA: () => Q(!0),
                                                          }));
                                                  let c = () =>
                                                      (0, a.jsx)(
                                                          e2.Z,
                                                          ts(
                                                              {
                                                                  ref: S,
                                                                  plated: null != v,
                                                                  tooltipForceOpen: et,
                                                                  tooltipColor: et ? f.FGA.GREEN : void 0,
                                                                  tooltipContentClassName: et
                                                                      ? ti.voiceFilterWarning
                                                                      : void 0,
                                                                  tooltipText: et
                                                                      ? (0, a.jsxs)(a.Fragment, {
                                                                            children: [
                                                                                (0, a.jsx)("img", {
                                                                                    alt:
                                                                                        null != Z
                                                                                            ? tr.intl.string(Z.name)
                                                                                            : "",
                                                                                    src: null == Z ? void 0 : Z.iconURL,
                                                                                    draggable: !1,
                                                                                }),
                                                                                (0, a.jsx)(f.Text, {
                                                                                    variant: "text-sm/medium",
                                                                                    color: "always-white",
                                                                                    children: tr.intl.string(
                                                                                        tr.t.VlC1dX,
                                                                                    ),
                                                                                }),
                                                                            ],
                                                                        })
                                                                      : tr.intl.string(tr.t.Hapb4O),
                                                                  icon: (0, a.jsx)(l, {
                                                                      className: ti.buttonChevronIcon,
                                                                      size: "custom",
                                                                      width: 12,
                                                                      height: 12,
                                                                      color: ei,
                                                                  }),
                                                                  role: "button",
                                                                  className: ti.buttonChevron,
                                                                  orangeGlow: R,
                                                                  redGlow: E,
                                                                  "aria-label": tr.intl.string(tr.t.Hapb4O),
                                                                  disabled: o,
                                                                  onClick: (e) => {
                                                                      i(tt.L.INDIRECT_ACTION),
                                                                          n(e),
                                                                          null != k && !$ && w
                                                                              ? (0, ew.$)(() => Q(!0))
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
function tj(e) {
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
        { name: _ } = (0, en.p6)(ta.h7.AUDIO_OUTPUT),
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
                          className: l()(ti.micButtonParent, {
                              [ti.hasColorGlow]: h,
                              [ti.popoutOpen]: o,
                          }),
                          children: [
                              (0, a.jsx)(e2.Z, {
                                  "aria-checked": h,
                                  "aria-label": tr.intl.string(tr.t.wjcRFR),
                                  className: ti.micButtonWithMenu,
                                  disabled: i,
                                  icon: (0, a.jsx)(j, {
                                      size: "custom",
                                      width: 20,
                                      height: 20,
                                      color: h ? f.TVs.colors.STATUS_DANGER : "currentColor",
                                      className: c,
                                  }),
                                  iconForeground: h ? ti.strikethrough : void 0,
                                  innerClassName: l()({ [ti.redIcon]: n }),
                                  onClick: s,
                                  onContextMenu: r,
                                  onMouseEnter: g,
                                  onMouseLeave: v,
                                  plated: null != d,
                                  redGlow: h,
                                  role: "switch",
                                  tooltipText: C,
                              }),
                              (0, a.jsx)(e2.Z, {
                                  "aria-label": u
                                      ? tr.intl.formatToPlainString(tr.t["f+DDY2"], { outputDeviceName: _ })
                                      : tr.intl.string(tr.t.aA4VcX),
                                  className: l()(ti.buttonChevron, { [ti.popoutOpen]: o }),
                                  disabled: i,
                                  icon: (0, a.jsx)(m, {
                                      className: ti.buttonChevronIcon,
                                      size: "custom",
                                      width: 12,
                                      height: 12,
                                      color: h ? f.TVs.colors.STATUS_DANGER : "currentColor",
                                  }),
                                  onClick: r,
                                  onContextMenu: r,
                                  plated: null != d,
                                  redGlow: h,
                                  tooltipClassName: ti.accountButtonsTooltip,
                                  tooltipColor: u ? f.FGA.GREEN : void 0,
                                  tooltipContentClassName: ti.accountButtonsTooltipContent,
                                  tooltipForceOpen: u,
                                  tooltipPositionKeyStemOverride: u
                                      ? tr.intl.formatToPlainString(tr.t["f+DDY2"], { outputDeviceName: _ })
                                      : void 0,
                                  tooltipShouldShow: !o,
                                  tooltipText: u
                                      ? tr.intl.format(tr.t["f+DDY2"], { outputDeviceName: _ })
                                      : tr.intl.string(tr.t.aA4VcX),
                              }),
                          ],
                      });
                  },
              }),
          })
        : (0, a.jsx)(O.Gt, {
              value: E,
              children: (0, a.jsx)(e2.Z, {
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
                  innerClassName: l()({ [ti.redIcon]: n }),
                  iconForeground: h ? ti.strikethrough : void 0,
                  role: "switch",
                  redGlow: h,
                  "aria-label": tr.intl.string(tr.t.wjcRFR),
                  "aria-checked": h,
                  disabled: i,
              }),
          });
}
