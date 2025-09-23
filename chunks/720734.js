n.d(t, {
    Z: () => tA,
    m: () => tI,
}),
    n(388685),
    n(539854);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(392711),
    l = n.n(s),
    c = n(374470),
    u = n(442837),
    d = n(704215),
    f = n(846519),
    _ = n(400354),
    p = n(789639),
    h = n(930295),
    m = n(481060),
    g = n(239091),
    E = n(410575),
    b = n(586902),
    y = n(493773),
    O = n(980591),
    v = n(468363),
    I = n(326255),
    T = n(771173),
    S = n(963056),
    A = n(570928),
    C = n(100527),
    N = n(906732),
    R = n(676742),
    P = n(1585),
    w = n(304761),
    D = n(865427),
    x = n(358221),
    L = n(571250),
    j = n(628581),
    M = n(659580),
    k = n(855844),
    U = n(55311),
    G = n(575175),
    B = n(522651),
    Z = n(795318),
    F = n(338390),
    V = n(64220),
    H = n(427217),
    Y = n(812055),
    W = n(243778),
    K = n(594928),
    z = n(181430),
    q = n(821795),
    X = n(287647),
    Q = n(892567),
    J = n(258609),
    $ = n(53891),
    ee = n(291533),
    et = n(427347),
    en = n(72897),
    er = n(78933),
    ei = n(850020),
    ea = n(379839),
    eo = n(359135),
    es = n(516817),
    el = n(332473),
    ec = n(963590),
    eu = n(562705),
    ed = n(667105),
    ef = n(768419),
    e_ = n(172416),
    ep = n(184301),
    eh = n(670188),
    em = n(620799),
    eg = n(313789),
    eE = n(321614),
    eb = n(518596),
    ey = n(879815),
    eO = n(294629),
    ev = n(875527),
    eI = n(702977),
    eT = n(56848),
    eS = n(940315),
    eA = n(378441),
    eC = n(358820),
    eN = n(723547),
    eR = n(361045),
    eP = n(74650),
    ew = n(306609),
    eD = n(170293),
    ex = n(8404),
    eL = n(199902),
    ej = n(314897),
    eM = n(592125),
    ek = n(831506),
    eU = n(819640),
    eG = n(131951),
    eB = n(19780),
    eZ = n(914010),
    eF = n(885110),
    eV = n(246946),
    eH = n(594174),
    eY = n(78839),
    eW = n(626135),
    eK = n(768581),
    ez = n(572004),
    eq = n(459273),
    eX = n(585483),
    eQ = n(70956),
    eJ = n(823379),
    e$ = n(374023),
    e0 = n(51144),
    e1 = n(998502),
    e2 = n(853170),
    e3 = n(422202),
    e4 = n(870569),
    e8 = n(345243),
    e6 = n(115530),
    e5 = n(981631),
    e7 = n(215023),
    e9 = n(921944),
    te = n(46140),
    tt = n(65154),
    tn = n(388032),
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
function ta(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                ti(e, t, n[t]);
            });
    }
    return e;
}
function to(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function ts(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : to(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function tl(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = tc(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function tc(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let tu = e1.ZP.getEnableHardwareAcceleration() ? m.Xo$ : m.qEK,
    td = 2000,
    tf = 1000,
    t_ = 11,
    tp = 2000,
    th = 2 * eQ.Z.Millis.MINUTE,
    tm = 3 * eQ.Z.Millis.SECOND,
    tg = 300,
    tE = 5 * eQ.Z.Millis.SECOND;
function tb() {
    return [
        tn.intl.string(tn.t.MSaeTU),
        tn.intl.string(tn.t.UmrCw8),
        tn.intl.string(tn.t.gKE0Ji),
        tn.intl.string(tn.t["4DSKbm"]),
        tn.intl.string(tn.t["+8ENdX"]),
        tn.intl.string(tn.t.GlWHv7),
        tn.intl.string(tn.t.hIzxU1),
        tn.intl.string(tn.t["26uMPD"]),
        tn.intl.string(tn.t.uFs7R0),
        tn.intl.string(tn.t.bLXdcX),
        tn.intl.string(tn.t.gPg9fX),
    ];
}
let ty = 750;
function tO() {
    let e = i.useRef(null),
        t = i.useCallback((t) => {
            e.current = () => {
                t.onMouseDown(), t.onClick();
            };
        }, []),
        [n, r] = i.useState(),
        [a, o] = i.useState(!1);
    return (
        (0, O.Z)(() => o(!0), ty),
        i.useEffect(() => {
            let t = (t) => {
                var n;
                let { highlightBadge: i } = t;
                null != i && r(i), null == (n = e.current) || n.call(e);
            };
            return (
                eX.S.subscribe(e5.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, t),
                () => {
                    eX.S.unsubscribe(e5.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, t);
                }
            );
        }),
        {
            updateOpenPopoutRef: t,
            highlightBadge: a ? n : void 0,
            setHighlightBadge: r,
        }
    );
}
function tv(e) {
    let {
            ref: t,
            speaking: n,
            streaming: a,
            currentUser: s,
            status: l,
            handleClick: c,
            handleMouseLeave: u,
            renderNameTag: d,
            nameplate: f,
            "data-jump-section": _,
        } = e,
        p = i.useRef(null),
        h = null != t ? t : p,
        g = (0, R.Z)(null == s ? void 0 : s.avatarDecoration),
        b = (0, eK.NZ)({
            avatarDecoration: g,
            size: (0, P.y9)(m.EFr.SIZE_32),
        }),
        y = (0, m.dQu)(m.TVs.modules.guildbar.AVATAR_SIZE),
        O = (0, F.Z)("Account") ? 32 : y,
        { updateOpenPopoutRef: v, highlightBadge: I, setHighlightBadge: T } = tO(),
        S = (0, ea.A)(f);
    return null == s
        ? null
        : (0, r.jsx)(E.Z, {
              object: e5.qAy.AVATAR,
              children: (0, r.jsx)(eh.Z, {
                  user: s,
                  targetElementRef: h,
                  clickTrap: !0,
                  preload: () =>
                      (0, ep.Z)(s.id, s.getAvatarURL(void 0, eh.I), {
                          type: "account_popout",
                          withMutualGuilds: !1,
                          withMutualFriends: !1,
                      }),
                  renderPopout: (e, t) => {
                      let { closePopout: n, setPopoutRef: i } = e;
                      return (0, r.jsx)(er.Z, {
                          currentUser: s,
                          highlightBadge: I,
                          openedAt: t,
                          onClose: () => {
                              null == n || n();
                          },
                          setPopoutRef: i,
                      });
                  },
                  position: "top",
                  align: "left",
                  animation: m.yRy.Animation.FADE,
                  spacing: 14,
                  fixed: !0,
                  ignoreModalClicks: !0,
                  onRequestClose: () => {
                      u(), T(void 0);
                  },
                  children: (e) => (
                      v(e),
                      (0, r.jsxs)(
                          m.P3F,
                          ts(
                              ta(
                                  {
                                      innerRef: h,
                                      style: S,
                                  },
                                  e,
                              ),
                              {
                                  onClick: (t) => {
                                      var n;
                                      null == (n = e.onClick) || n.call(e, t), null == c || c(t);
                                  },
                                  "aria-label": tn.intl.string(tn.t["3Uj+2t"]),
                                  "data-jump-section": _,
                                  className: o()(tr.avatarWrapper, { [tr.plated]: null != f }),
                                  children: [
                                      (0, r.jsx)(tu, {
                                          size: m.EFr["SIZE_".concat(O)],
                                          src: s.getAvatarURL(void 0, O - 4, !1),
                                          avatarDecoration: b,
                                          "aria-label": s.username,
                                          status: a ? e5.Skl.STREAMING : l,
                                          isSpeaking: n,
                                          className: tr.avatar,
                                      }),
                                      (0, r.jsx)("div", {
                                          className: o()(tr.nameTag, { [tr.canCopy]: ez.wS }),
                                          children: d(null == s ? void 0 : s.displayNameStyles),
                                      }),
                                  ],
                              },
                          ),
                      )
                  ),
              }),
          });
}
class tI extends i.PureComponent {
    get isCopiedStreakGodlike() {
        let { copiedStreak: e } = this.state;
        return e >= t_ - 1;
    }
    componentDidUpdate(e) {
        let { speakingWhileMuted: t, occluded: n } = e,
            { speakingWhileMuted: r, occluded: i } = this.props;
        i !== n && this.handleOccludedChanged(), r !== t && this.handleSpeakingWhileMutedChanged();
    }
    componentWillUnmount() {
        this.copiedTimeout.stop(), this.copiedDecayTimeout.stop(), this.speakingWhileMutedTooltipTimeout.stop();
    }
    renderCopiedSuccess() {
        let { copiedStreak: e } = this.state,
            t = tb(),
            n = Math.min(Math.max(0, e - 1), t.length - 1);
        return (0, r.jsx)(m.UkV, {
            isShaking: this.isCopiedStreakGodlike,
            children: t[n],
        });
    }
    renderStatus() {
        let { hovered: e } = this.state,
            {
                activities: t,
                applicationStream: n,
                currentUser: i,
                status: a,
                userTag: o,
                voiceActivityStatusEnabled: s,
                voiceChannel: l,
            } = this.props;
        if (null == i) return null;
        if (
            (0, I.Z)({
                activities: t,
                status: a,
                applicationStream: n,
                voiceChannel: s ? l : void 0,
            })
        )
            return (0, r.jsx)(A.Z, {
                hoverText: o,
                forceHover: e,
                children: (0, r.jsx)(T.Z, {
                    location: "Account",
                    user: i,
                    activities: t,
                    applicationStream: n,
                    voiceChannel: s ? l : void 0,
                    textClassName: tr.activityStatusText,
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
            ? (0, r.jsx)(A.Z, {
                  hoverText: o,
                  forceHover: e,
                  children: (0, r.jsx)(H.Z, {
                      activity: c,
                      emojiClassName: tr.emoji,
                      className: tr.customStatus,
                  }),
              })
            : null != a && a !== e5.Skl.UNKNOWN && i.hasUniqueUsername()
              ? (0, r.jsx)(A.Z, {
                    hoverText: o,
                    forceHover: e,
                    children: (0, r.jsx)(S.Z, { text: e0.ZP.humanizeStatus(a) }),
                })
              : o;
    }
    renderAvatarWithPopout(e) {
        let {
            focusSectionProps: { "data-jump-section": t },
            onClick: n,
        } = e;
        return (0, r.jsx)(
            tv,
            ts(ta({}, this.props), {
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
            visibleRecurringAvatarDc: i,
            markRecurringAvatarDcAsDismissed: a,
            visibleRecurringDoNotDisturbReminderPopoverDc: o,
            markRecurringDoNotDisturbReminderPopoverDcAsDismissed: s,
            isQuestBarEmpty: l,
            hasLoadedQuestBar: c,
        } = this.props;
        if (null == t) return null;
        if (!(null != this.avatarWithPopoutRef.current && l && c))
            return this.renderAvatarWithPopout({ focusSectionProps: e });
        if (i === d.z.GUILD_TAG_AVAILABLE_COACHMARK) {
            var u;
            return (0, r.jsx)($.ZP, {
                guildId: null != (u = this.props.selectedGuildId) ? u : null,
                onDismiss: a,
                targetElementRef: this.avatarWithPopoutRef,
                children: this.renderAvatarWithPopout({ focusSectionProps: e }),
            });
        }
        return o === d.z.DO_NOT_DISTURB_REMINDER_POPOVER
            ? (0, r.jsx)(Y.Z, {
                  targetElementRef: this.avatarWithPopoutRef,
                  onDismiss: s,
                  children: this.renderAvatarWithPopout({ focusSectionProps: e }),
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(eu.Z, {
                          groupName: e9.R.ACCOUNT_NAME_ZONE,
                          targetElementRef: this.avatarWithPopoutRef,
                      }),
                      (0, r.jsx)(W.ZP, {
                          contentTypes: n.avatar,
                          groupName: e9.R.ACCOUNT_NAME_ZONE,
                          children: (t) => {
                              let { visibleContent: n, markAsDismissed: i } = t;
                              switch (n) {
                                  case d.z.WIDGETS_RTC_UPSELL_COACHMARK:
                                      return (0, r.jsx)(em.Z, {
                                          markAsDismissed: i,
                                          targetElementRef: this.avatarWithPopoutRef,
                                          children: this.renderAvatarWithPopout({ focusSectionProps: e }),
                                      });
                                  case d.z.PREMIUM_SUBSCRIPTION_APRIL_MARKETING_DECO_TOOLTIP:
                                      return (0, r.jsx)(V.Z, {
                                          markAsDismissed: i,
                                          targetElementRef: this.avatarWithPopoutRef,
                                          children: () => this.renderAvatarWithPopout({ focusSectionProps: e }),
                                      });
                                  case d.z.DISPLAY_NAME_STYLES_COACHMARK:
                                      return (0, r.jsx)(X.e, {
                                          markAsDismissed: i,
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
        let { currentUser: e, nameplate: t, voiceChannel: n, isQuestBarEmpty: i, isListenAlongVisible: a } = this.props,
            s = this.state.hovered;
        return null == e
            ? null
            : (0, r.jsx)(m.Wdt, {
                  children: (e) =>
                      (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsxs)("div", {
                                  ref: this.containerRef,
                                  className: o()(tr.container, {
                                      [tr.containerRtcOpened]: null != n,
                                      [tr.containerQuestBarVisible]: !i,
                                      [tr.containerListenAlongVisible]: a,
                                  }),
                                  onMouseEnter: this.handleMouseEnter,
                                  onMouseLeave: this.handleMouseLeave,
                                  children: [
                                      (0, r.jsx)(es.Z, {
                                          nameplate: t,
                                          hovered: s,
                                          placement: eo.i.ACCOUNT,
                                      }),
                                      this.renderNameZone(e),
                                      (0, r.jsx)(
                                          tT,
                                          ts(ta({}, this.props, this.state), {
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
                              (0, r.jsx)(et.Z, {}),
                          ],
                      }),
              });
    }
    constructor(...e) {
        super(...e),
            ti(this, "copiedTimeout", new f.V7()),
            ti(this, "copiedDecayTimeout", new f.V7()),
            ti(this, "speakingWhileMutedTooltipTimeout", new f.V7()),
            ti(this, "lastSpeakingWhileMutedNotificationTime", void 0),
            ti(this, "state", {
                hovered: !1,
                copiedStreak: 0,
                shouldShowNametagTooltip: !1,
                shouldShowCopiedFeedback: !1,
                shouldShowSpeakingWhileMutedTooltip: !1,
                hoveringOnMute: !1,
            }),
            ti(this, "containerRef", i.createRef()),
            ti(this, "avatarWithPopoutRef", i.createRef()),
            ti(this, "handleToggleSelfMute", () => {
                let { serverMute: e, suppress: t, selfMute: n } = this.props;
                (0, G.Z)(e, t, e5.jXE.ACCOUNT_PANEL), (0, B.v)(C.Z.ACCOUNT, B.d.MIC, n);
            }),
            ti(this, "handleToggleSelfDeaf", () => {
                let { serverDeaf: e, selfDeaf: t } = this.props;
                (0, U.Z)(e, e5.jXE.ACCOUNT_PANEL), (0, B.v)(C.Z.ACCOUNT, B.d.DEAFEN, !t);
            }),
            ti(this, "handleOpenAccountSettings", () => {
                this.dismissTooltips(),
                    eB.Z.isConnected()
                        ? (0, eb.openUserSettings)(eg.n.VOICE_AND_VIDEO_PANEL, { section: e5.oAB.VOICE })
                        : (0, eb.openUserSettings)();
            }),
            ti(this, "handleOpenSettingsContextMenu", (e) => {
                let { currentUser: t } = this.props;
                null != t &&
                    (0, g.jW)(e, async () => {
                        let { default: e } = await n.e("2535").then(n.bind(n, 923422));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                ts(ta({}, n), {
                                    user: t,
                                    premiumSubscription: this.props.premiumSubscription,
                                    webBuildOverride: this.props.webBuildOverride,
                                    onInteraction: (0, Z.u)("UserSettingsCogContextMenu", C.Z.ACCOUNT),
                                }),
                            );
                    });
            }),
            ti(this, "audioOnInteractionHandler", (0, Z.u)("AudioDeviceMenu", C.Z.ACCOUNT)),
            ti(this, "handleInputAudioContextMenu", (e, t) => {
                this.dismissTooltips(),
                    (0, g.jW)(e, async () => {
                        let { default: e } = await Promise.resolve().then(n.bind(n, 659580));
                        return () => {
                            let { enabledInputProfiles: n } = (0, eE.c)({ location: "Account" });
                            return (0, r.jsx)(N.Gt, {
                                value: t,
                                children: (0, r.jsx)(e, {
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
                            (0, r.jsx)(N.Gt, {
                                value: t,
                                children: (0, r.jsx)(e, {
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
                var e, t, n, r;
                null == (e = (t = this.props).dismissInputDeviceChangedTooltip) || e.call(t),
                    null == (n = (r = this.props).dismissOutputDeviceChangedTooltip) || n.call(r),
                    this.dismissSpeakingWhileMutedTooltip();
            }),
            ti(this, "handleCopyTag", () => {
                let { currentUser: e } = this.props,
                    { shouldShowNametagTooltip: t, copiedStreak: n } = this.state;
                if (null == e) return;
                (0, ez.JG)(
                    e0.ZP.getUserTag(e, {
                        decoration: "never",
                        identifiable: "always",
                    }),
                ),
                    eW.default.track(e5.rMx.TEXT_COPIED, { type: "User Tag" });
                let r = {
                    shouldShowCopiedFeedback: !0,
                    shouldShowNametagTooltip: !0,
                };
                t || (r.copiedStreak = n + 1),
                    this.setState(r, () => {
                        this.copiedTimeout.start(tf, () => this.setState({ shouldShowNametagTooltip: !1 })),
                            this.copiedDecayTimeout.start(td, () => this.setState({ copiedStreak: 0 }));
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
                        speakingWhileMuted: r,
                        occluded: i,
                        shouldShowInputDeviceChangedTooltip: a,
                        shouldShowOutputDeviceChangedTooltip: o,
                    } = this.props,
                    { hoveringOnMute: s } = this.state,
                    l =
                        void 0 === this.lastSpeakingWhileMutedNotificationTime ||
                        Date.now() - this.lastSpeakingWhileMutedNotificationTime > th;
                r
                    ? s ||
                      !e ||
                      t ||
                      n ||
                      i ||
                      !l ||
                      a ||
                      o ||
                      this.setState({ shouldShowSpeakingWhileMutedTooltip: !0 }, () => {
                          (this.lastSpeakingWhileMutedNotificationTime = Date.now()),
                              this.speakingWhileMutedTooltipTimeout.start(tp, () =>
                                  this.setState({ shouldShowSpeakingWhileMutedTooltip: !1 }),
                              );
                      })
                    : (this.setState({ shouldShowSpeakingWhileMutedTooltip: !1 }),
                      this.speakingWhileMutedTooltipTimeout.stop());
            }),
            ti(this, "renderNameTag", (e) => {
                let { currentUser: t, isDisplayNameStylesEnabled: n } = this.props;
                if (null == t) return null;
                let i = n && null != e;
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)("div", {
                            className: tr.panelTitleContainer,
                            children: (0, r.jsx)(e6.Z, {
                                className: o()({ [tr.withDisplayNameStyles]: i }),
                                children: (0, r.jsx)(Q.Z, {
                                    userName: e0.ZP.getName(t),
                                    displayNameStyles: e,
                                    effectDisplayType: this.state.hovered ? q.F.ANIMATED : q.F.STATIC,
                                    loop: !0,
                                    inProfile: !0,
                                }),
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: tr.panelSubtextContainer,
                            children: (0, r.jsx)(e8.Z, { children: this.renderStatus() }),
                        }),
                    ],
                });
            });
    }
}
function tT(e) {
    let {
            selfDeaf: t,
            selfMute: n,
            awaitingRemote: i,
            serverMute: a,
            serverDeaf: o,
            suppress: s,
            shouldShowSpeakingWhileMutedTooltip: l,
            isEligibleForPomelo: c,
            webBuildOverride: u,
            handleMouseEnterMute: d,
            handleMouseLeaveMute: f,
            handleToggleSelfDeaf: _,
            handleToggleSelfMute: p,
            handleInputAudioContextMenu: h,
            handleOutputAudioContextMenu: m,
            handleOpenAccountSettings: g,
            handleOpenSettingsContextMenu: E,
            dismissibleContents: b,
            nameplate: y,
            accountContainerRef: O,
            shouldShowInputDeviceChangedTooltip: v = !1,
            shouldShowOutputDeviceChangedTooltip: I = !1,
            dismissTooltips: T,
        } = e,
        S = (0, ea.A)(y);
    return (0, r.jsxs)("div", {
        className: tr.buttons,
        style: S,
        children: [
            (0, r.jsx)(tN, {
                accountContainerRef: O,
                selfMute: n,
                serverMute: a,
                suppress: s,
                awaitingRemote: i,
                onMouseEnter: d,
                onMouseLeave: f,
                onClick: p,
                onContextMenu: h,
                iconForeground: null != y ? tr.iconForeground : void 0,
                nameplate: y,
                shouldShowInputDeviceChangedTooltip: v,
                shouldShowSpeakingWhileMutedTooltip: l,
                dismissTooltips: T,
            }),
            (0, r.jsx)(tR, {
                selfDeaf: t,
                serverDeaf: o,
                onClick: _,
                onContextMenu: m,
                awaitingRemote: i,
                iconForeground: null != y ? tr.iconForeground : void 0,
                nameplate: y,
                shouldShowOutputDeviceChangedTooltip: I,
                dismissTooltips: T,
            }),
            (0, r.jsx)(tC, {
                isEligibleForPomelo: c,
                webBuildOverride: u,
                onClick: g,
                onContextMenu: E,
                dismissibleContents: b.settings,
                iconForeground: null != y ? tr.iconForeground : void 0,
                nameplate: y,
                shouldShowInputDeviceChangedTooltip: v,
                shouldShowOutputDeviceChangedTooltip: I,
            }),
        ],
    });
}
function tS(e) {
    let { shouldShowDeviceChangedNotifications: t } = (0, e3.P)({
            location: "Account.useDeviceChangedTooltip",
            autoTrackExposure: !1,
        }),
        n = (0, u.e7)([eB.Z], () => null != eB.Z.getChannelId()),
        r = (0, en.Fh)(e),
        a = i.useRef(new f.V7()),
        [o, s] = i.useState(!1);
    i.useEffect(() => {
        n &&
            r &&
            ((0, e3._)({
                location: "Account.useDeviceChangedTooltip (exposure tracking)",
                autoTrackExposure: !0,
            }),
            t &&
                (s(!0),
                a.current.start(tE, () => {
                    s(!1);
                })));
    }, [n, r, t]);
    let l = i.useCallback(() => {
        s(!1), a.current.stop();
    }, []);
    return (
        (0, y.zq)(() => {
            a.current.stop();
        }),
        {
            shouldShowTooltip: o,
            dismissTooltip: l,
        }
    );
}
function tA() {
    var e;
    let t = (0, u.e7)([eH.default], () => eH.default.getCurrentUser()),
        n = (0, u.e7)([ej.default], () => ej.default.getId()),
        {
            activities: i,
            streaming: a,
            status: o,
        } = (0, u.cj)([eF.Z], () => {
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
        s = (0, u.e7)([eL.Z], () => eL.Z.getAnyStreamForUser(n)),
        c = (0, b.Z)({ userId: n }),
        f = e0.ZP.useUserTag(t, { decoration: "never" }),
        _ = (0, u.e7)([eV.Z], () => eV.Z.hidePersonalInformation),
        p = (0, u.e7)([eB.Z, eM.Z], () => {
            let e = eB.Z.getChannelId();
            return null != e ? eM.Z.getChannel(e) : null;
        }),
        { mute: h, selfMute: g, suppress: E } = (0, eO.Z)(p),
        { selfDeaf: y, deaf: O } = (0, ey.Z)(p),
        I = (0, u.e7)([w.C], () => {
            var e;
            return (0, D.fD)()
                ? null == (e = w.C.getCurrentBuildOverride().overrides)
                    ? void 0
                    : e.discord_web
                : null;
        }),
        T = (0, u.e7)([eY.Z], () => eY.Z.getPremiumTypeSubscription()),
        S = (0, u.e7)([eG.Z], () => eG.Z.getSpeakingWhileMuted()),
        A = (0, u.e7)([x.Z], () => x.Z.isFullscreenInContext()),
        R = (0, u.e7)([eU.Z], () => eU.Z.hasLayers()),
        P = (0, m.s9z)(m.JQI) || R || e$.s.isDisallowPopupsSet() || A,
        L = (0, el.b)(),
        j = (0, u.e7)([J.Z], () => null != J.Z.getAwaitingRemoteSessionInfo()),
        M = (0, u.e7)([eZ.Z], () => eZ.Z.getGuildId()),
        k = (null == t || null == (e = t.avatarDecoration) ? void 0 : e.skuId) === e7.rL,
        { voiceActivityStatusEnabled: U } = (0, v.U)({ location: "Account" }),
        [G, B] = (0, ee.G)(null != M ? M : null),
        [Z, F] = (0, Y.b)(),
        V = K.JH.useExperiment({ location: "Account" }).enabled,
        { analyticsLocations: H } = (0, N.ZP)(C.Z.ACCOUNT),
        W = (0, ei.K)({ user: t }),
        { isQuestBarEmpty: q, hasLoadedQuestBar: X } = (0, ed.Ws)({ location: te.dr.CONFLICT_CHECKS }),
        Q = (0, u.e7)([ef.Z, eH.default, ek.Z], () => {
            let e,
                t = ef.Z.getSyncingWith(),
                n = ef.Z.getActivity(),
                r = [];
            if (
                (null != t ? (e = t.partyId) : null != n && null != n.party && null != n.party.id && (e = n.party.id),
                null != e)
            ) {
                var i;
                r = l()(Array.from(null != (i = ek.Z.getParty(e)) ? i : []))
                    .map((e) => eH.default.getUser(e))
                    .filter(eJ.lm)
                    .value();
            }
            return r.length > 1;
        }),
        $ = (0, e_.U)({ location: "AccountConnected" }),
        et = {
            avatar: [],
            settings: [],
        };
    !P &&
        (k && et.avatar.push(d.z.PREMIUM_SUBSCRIPTION_APRIL_MARKETING_DECO_TOOLTIP),
        V && et.avatar.push(d.z.DISPLAY_NAME_STYLES_COACHMARK),
        $ && et.avatar.push(d.z.WIDGETS_RTC_UPSELL_COACHMARK));
    let en = (0, z.Y)({ location: "AccountConnected" }),
        { shouldShowTooltip: er, dismissTooltip: ea } = tS(tt.h7.AUDIO_INPUT),
        { shouldShowTooltip: eo, dismissTooltip: es } = tS(tt.h7.AUDIO_OUTPUT);
    return (0, r.jsx)(N.Gt, {
        value: H,
        children: (0, r.jsx)(tI, {
            currentUser: t,
            activities: i,
            applicationStream: s,
            voiceChannel: p,
            dismissibleContents: et,
            visibleRecurringAvatarDc: G,
            markRecurringAvatarDcAsDismissed: B,
            visibleRecurringDoNotDisturbReminderPopoverDc: Z,
            markRecurringDoNotDisturbReminderPopoverDcAsDismissed: F,
            userTag: f,
            hidePrivateData: _,
            occluded: P,
            premiumSubscription: T,
            selfDeaf: y,
            selfMute: g,
            serverDeaf: O,
            serverMute: h,
            speaking: c,
            speakingWhileMuted: S,
            status: o,
            streaming: a,
            suppress: E,
            webBuildOverride: I,
            awaitingRemote: j,
            isEligibleForPomelo: L,
            voiceActivityStatusEnabled: U,
            nameplate: W,
            selectedGuildId: M,
            isQuestBarEmpty: q,
            hasLoadedQuestBar: X,
            isListenAlongVisible: Q,
            isDisplayNameStylesEnabled: en,
            shouldShowInputDeviceChangedTooltip: er,
            shouldShowOutputDeviceChangedTooltip: eo,
            dismissInputDeviceChangedTooltip: ea,
            dismissOutputDeviceChangedTooltip: es,
        }),
    });
}
function tC(e) {
    let t,
        n,
        a,
        {
            webBuildOverride: o,
            isEligibleForPomelo: s,
            onClick: l,
            onContextMenu: c,
            iconForeground: u,
            nameplate: d,
            shouldShowInputDeviceChangedTooltip: f,
            shouldShowOutputDeviceChangedTooltip: _,
        } = e,
        h = i.useRef(null),
        { showRefreshedAudioContextMenu: g } = (0, e2.e)({ location: "SettingsCogButton" }),
        E = !g && (f || _),
        { name: b } = (0, en.p6)(tt.h7.AUDIO_INPUT),
        { name: y } = (0, en.p6)(tt.h7.AUDIO_OUTPUT);
    !g && f
        ? ((t = tn.intl.format(tn.t["18wnuL"], { inputDeviceName: b })),
          (n = tn.intl.formatToPlainString(tn.t["18wnuL"], { inputDeviceName: b })),
          (a = tn.intl.formatToPlainString(tn.t["18wnuL"], { inputDeviceName: b })))
        : !g && _
          ? ((t = tn.intl.format(tn.t["f+DDY2"], { outputDeviceName: y })),
            (n = tn.intl.formatToPlainString(tn.t["f+DDY2"], { outputDeviceName: y })),
            (a = tn.intl.formatToPlainString(tn.t["f+DDY2"], { outputDeviceName: y })))
          : (t =
                null != o
                    ? tn.intl.formatToPlainString(tn.t.Gzh6ZG, { webBuildOverride: o.id })
                    : tn.intl.string(tn.t.cduTBA));
    let O = m.ewm,
        v = (0, p.i)();
    return (
        (O = null != o ? m.bgT : s ? m.Ncx : v.Component),
        (0, r.jsx)(
            e4.Z,
            ts(
                ta(
                    {
                        ref: h,
                        tooltipText: t,
                        tooltipColor: E ? m.FGA.GREEN : void 0,
                        tooltipForceOpen: E,
                        tooltipClassName: tr.accountButtonsTooltip,
                        tooltipContentClassName: tr.accountButtonsTooltipContent,
                        tooltipPositionKeyStemOverride: n,
                        "aria-label": E ? a : void 0,
                        onClick: l,
                        onContextMenu: c,
                        icon: (0, r.jsx)(O, {
                            size: "refresh_sm",
                            color: "currentColor",
                            className: u,
                        }),
                    },
                    v.events,
                ),
                { plated: null != d },
            ),
        )
    );
}
function tN(e) {
    let t,
        {
            selfMute: n,
            serverMute: a,
            suppress: s,
            awaitingRemote: l,
            iconForeground: f,
            onMouseEnter: _,
            onMouseLeave: p,
            onClick: g,
            onContextMenu: E,
            nameplate: b,
            accountContainerRef: y,
            shouldShowSpeakingWhileMutedTooltip: O,
            shouldShowInputDeviceChangedTooltip: v,
            dismissTooltips: I,
        } = e,
        T = n || s || a,
        S = i.useRef(null),
        A = i.useRef(null),
        R = (0, ex.b)(T),
        { activeVoice: P, mostRecentlyRequestedVoiceId: w, lastInitAttemptMayHaveCrashed: D } = (0, eA.o)(),
        { showSilentLagWarning: x } = (0, eS.Y)(),
        L = null != P,
        U = (0, eT.z)(P),
        G = (0, u.e7)([eB.Z], () => eB.Z.isConnected()),
        { Component: B, events: F, play: V } = R,
        H = a || s ? m.v0G : B,
        Y = (0, j.Z)(n, a, s, l),
        K = x ? tn.intl.string(tn.t.ARRV6u) : null;
    t = O
        ? tn.intl.string(tn.t["29gnR0"])
        : null != K
          ? (0, r.jsxs)("div", {
                className: tr.tooltipWithSubtext,
                children: [
                    (0, r.jsx)(m.Text, {
                        variant: "text-sm/medium",
                        color: "currentColor",
                        children: Y,
                    }),
                    (0, r.jsx)(m.Text, {
                        variant: "text-xs/medium",
                        color: "text-feedback-warning",
                        children: K,
                    }),
                ],
            })
          : Y;
    let { analyticsLocations: z } = (0, N.ZP)(C.Z.AUDIO_INPUT_BUTTON),
        q = (0, ev.Hu)({
            location: C.Z.AUDIO_INPUT_BUTTON,
            autoTrackExposure: !0,
        }),
        X = (0, eI.av)({
            location: C.Z.AUDIO_INPUT_BUTTON,
            autoTrackExposure: !0,
        });
    i.useEffect(() => () => V(), [T, V]);
    let Q = i.useCallback(
            (e) => {
                E(e, z);
            },
            [E, z],
        ),
        [J, $] = i.useState(!1),
        ee = i.useCallback((e) => {
            var t;
            if (
                (0, c.kK)(null == e ? void 0 : e.target, Node) &&
                (null == (t = S.current) ? void 0 : t.contains(e.target))
            )
                return h.F;
            $(!1);
        }, []);
    (0, eq.yp)({
        event: e5.CkL.OPEN_VOICE_FILTER_POPOUT,
        handler: () => {
            $(!0);
        },
    });
    let [et, er] = i.useState(!1);
    i.useEffect(() => {
        let e;
        return (
            G &&
                L &&
                (e = setTimeout(() => {
                    er(!0), (e = setTimeout(() => er(!1), tm));
                }, tg)),
            () => {
                er(!1), clearTimeout(e);
            }
        );
    }, [G]);
    let ei = i.useCallback(() => {
            D || (0, eC.r5)();
        }, [D]),
        ea = T ? m.TVs.colors.STATUS_DANGER : x ? m.TVs.colors.STATUS_WARNING : "currentColor",
        eo = T || x,
        es = (0, ec.Z)({ location: "Account" }),
        { name: el } = (0, en.p6)(tt.h7.AUDIO_INPUT),
        { showRefreshedAudioContextMenu: eu } = (0, e2.e)({ location: "MicrophoneButton" }),
        { enabledInputProfiles: ed } = (0, eE.c)({ location: "MicrophoneButton" });
    return eu
        ? (0, r.jsx)(N.Gt, {
              value: z,
              children: (0, r.jsx)(m.yRy, {
                  targetElementRef: S,
                  renderPopout: (e) => {
                      let { closePopout: t } = e;
                      return (
                          I(),
                          (0, r.jsx)(N.Gt, {
                              value: z,
                              children: eu
                                  ? (0, r.jsx)(k.Z, {
                                        onInteraction: (0, Z.u)("AudioDeviceMenu", C.Z.ACCOUNT),
                                        onClose: t,
                                        maybeRenderPTTCheckbox: !0,
                                        renderInputProfiles: ed.length > 0,
                                        renderInputDevices: !0,
                                        maybeRenderInputMeter: !0,
                                        renderInputVolume: !0,
                                        renderSettingsButton: !0,
                                    })
                                  : (0, r.jsx)(M.default, {
                                        onInteraction: (0, Z.u)("AudioDeviceMenu", C.Z.ACCOUNT),
                                        onClose: t,
                                        renderInputDevices: !0,
                                        renderInputProfiles: ed.length > 0,
                                        renderInputVolume: !0,
                                        minimal: !0,
                                    }),
                          })
                      );
                  },
                  position: "top",
                  align: "left",
                  animation: m.yRy.Animation.FADE,
                  spacing: 4,
                  children: (e, n) => {
                      let { onClick: i } = e,
                          { isShown: a } = n,
                          s = a ? m.u04 : m.CJ0;
                      return (0, r.jsxs)("div", {
                          ref: S,
                          className: o()(tr.micButtonParent, {
                              [tr.hasColorGlow]: eo,
                              [tr.popoutOpen]: a,
                          }),
                          children: [
                              (0, r.jsx)(e4.Z, {
                                  "aria-checked": T,
                                  "aria-label": tn.intl.string(tn.t["w4m94+"]),
                                  className: o()({ [tr.micButtonWithMenu]: !0 }),
                                  disabled: l,
                                  icon: (0, r.jsx)(H, {
                                      size: "custom",
                                      width: 20,
                                      height: 20,
                                      color: ea,
                                      className: f,
                                  }),
                                  onClick: g,
                                  onContextMenu: i,
                                  onMouseEnter: () => {
                                      _(), F.onMouseEnter();
                                  },
                                  onMouseLeave: () => {
                                      p(), F.onMouseLeave();
                                  },
                                  orangeGlow: x,
                                  plated: null != b,
                                  redGlow: T,
                                  role: "switch",
                                  tooltipColor: O ? m.FGA.GREEN : void 0,
                                  tooltipForceOpen: O,
                                  tooltipText: t,
                              }),
                              (0, r.jsx)(e4.Z, {
                                  "aria-label": v
                                      ? tn.intl.formatToPlainString(tn.t["18wnuL"], { inputDeviceName: el })
                                      : tn.intl.string(tn.t.fRzCbG),
                                  className: o()(tr.buttonChevron, { [tr.popoutOpen]: a }),
                                  disabled: l,
                                  icon: (0, r.jsx)(s, {
                                      className: tr.buttonChevronIcon,
                                      size: "custom",
                                      width: 12,
                                      height: 12,
                                      color: ea,
                                  }),
                                  onClick: i,
                                  onContextMenu: i,
                                  onMouseEnter: _,
                                  onMouseLeave: p,
                                  orangeGlow: x,
                                  plated: null != b,
                                  redGlow: T,
                                  tooltipClassName: tr.accountButtonsTooltip,
                                  tooltipColor: v ? m.FGA.GREEN : void 0,
                                  tooltipContentClassName: tr.accountButtonsTooltipContent,
                                  tooltipForceOpen: v,
                                  tooltipPositionKeyStemOverride: v
                                      ? tn.intl.formatToPlainString(tn.t["18wnuL"], { inputDeviceName: el })
                                      : void 0,
                                  tooltipShouldShow: !a,
                                  tooltipText: v
                                      ? tn.intl.format(tn.t["18wnuL"], { inputDeviceName: el })
                                      : tn.intl.string(tn.t.fRzCbG),
                              }),
                          ],
                      });
                  },
              }),
          })
        : (0, r.jsx)(N.Gt, {
              value: z,
              children: (0, r.jsxs)("div", {
                  ref: S,
                  className: o()(tr.micButtonParent, { [tr.hasColorGlow]: eo }),
                  children: [
                      (0, r.jsx)(e4.Z, {
                          tooltipText: t,
                          tooltipColor: O ? m.FGA.GREEN : void 0,
                          tooltipForceOpen: O,
                          plated: null != b,
                          onMouseEnter: () => {
                              _(), F.onMouseEnter();
                          },
                          onMouseLeave: () => {
                              p(), F.onMouseLeave();
                          },
                          icon: (0, r.jsx)(H, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: ea,
                              className: f,
                          }),
                          onClick: g,
                          onContextMenu: Q,
                          role: "switch",
                          className: o()({ [tr.micButtonWithMenu]: q }),
                          orangeGlow: x,
                          redGlow: T,
                          "aria-label": tn.intl.string(tn.t["w4m94+"]),
                          "aria-checked": T,
                          disabled: l,
                      }),
                      q &&
                          (0, r.jsx)(m.yRy, {
                              targetElementRef: y,
                              position: "top",
                              align: "left",
                              nudgeAlignIntoViewport: !1,
                              animation: m.yRy.Animation.FADE,
                              useMouseEnter: !0,
                              ignoreModalClicks: !0,
                              onRequestOpen: ei,
                              onRequestClose: ee,
                              shouldShow: J,
                              renderPopout: (e) => {
                                  let { closePopout: t } = e;
                                  return (0, r.jsx)(ew.l, { onSettingsButtonClick: t });
                              },
                              children: (e, t) => {
                                  var { onClick: n } = e,
                                      i = tl(e, ["onClick"]),
                                      { isShown: a } = t;
                                  let o = a ? m.u04 : m.CJ0,
                                      s = [];
                                  return (
                                      !a &&
                                          (es && s.push(d.z.VOICE_FILTER_EARLY_ACCESS_COACHMARK),
                                          s.push(d.z.VOICE_FILTER_LAUNCH_COACHMARK),
                                          X && G && !L && s.push(d.z.VOICE_FILTER_FIRST_USE_COACHMARK)),
                                      (0, r.jsx)("div", {
                                          children: (0, r.jsx)(W.ZP, {
                                              bypassAutoDismiss: !0,
                                              contentTypes: s,
                                              children: (e) => {
                                                  let { visibleContent: t, markAsDismissed: a } = e,
                                                      s = null;
                                                  t === d.z.VOICE_FILTER_EARLY_ACCESS_COACHMARK
                                                      ? (s = (0, r.jsx)(eP.U, {
                                                            markAsDismissed: a,
                                                            onCTA: () => $(!0),
                                                        }))
                                                      : t === d.z.VOICE_FILTER_LAUNCH_COACHMARK
                                                        ? (s = (0, r.jsx)(eR.n, {
                                                              markAsDismissed: a,
                                                              onCTA: () => $(!0),
                                                          }))
                                                        : t === d.z.VOICE_FILTER_FIRST_USE_COACHMARK &&
                                                          (s = (0, r.jsx)(eN.v, {
                                                              markAsDismissed: a,
                                                              onCTA: () => $(!0),
                                                          }));
                                                  let c = () =>
                                                      (0, r.jsx)(
                                                          e4.Z,
                                                          ta(
                                                              {
                                                                  ref: A,
                                                                  plated: null != b,
                                                                  tooltipForceOpen: et,
                                                                  tooltipColor: et ? m.FGA.GREEN : void 0,
                                                                  tooltipContentClassName: et
                                                                      ? tr.voiceFilterWarning
                                                                      : void 0,
                                                                  tooltipText: et
                                                                      ? (0, r.jsxs)(r.Fragment, {
                                                                            children: [
                                                                                (0, r.jsx)("img", {
                                                                                    alt:
                                                                                        null != U
                                                                                            ? tn.intl.string(U.name)
                                                                                            : "",
                                                                                    src: null == U ? void 0 : U.iconURL,
                                                                                    draggable: !1,
                                                                                }),
                                                                                (0, r.jsx)(m.Text, {
                                                                                    variant: "text-sm/medium",
                                                                                    color: "always-white",
                                                                                    children: tn.intl.string(
                                                                                        tn.t.VlC1dX,
                                                                                    ),
                                                                                }),
                                                                            ],
                                                                        })
                                                                      : tn.intl.string(tn.t.Hapb4O),
                                                                  icon: (0, r.jsx)(o, {
                                                                      className: tr.buttonChevronIcon,
                                                                      size: "custom",
                                                                      width: 12,
                                                                      height: 12,
                                                                      color: ea,
                                                                  }),
                                                                  role: "button",
                                                                  className: tr.buttonChevron,
                                                                  orangeGlow: x,
                                                                  redGlow: T,
                                                                  "aria-label": tn.intl.string(tn.t.Hapb4O),
                                                                  disabled: l,
                                                                  onClick: (e) => {
                                                                      a(e9.L.INDIRECT_ACTION),
                                                                          n(e),
                                                                          null != w && !J && D
                                                                              ? (0, eD.$)(() => $(!0))
                                                                              : $(!J);
                                                                  },
                                                              },
                                                              i,
                                                          ),
                                                      );
                                                  return null != s
                                                      ? (0, r.jsx)(m.yRy, {
                                                            targetElementRef: A,
                                                            renderPopout: () => s,
                                                            animation: m.yRy.Animation.TRANSLATE,
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
function tR(e) {
    let {
            selfDeaf: t,
            serverDeaf: n,
            awaitingRemote: a,
            onClick: s,
            onContextMenu: l,
            iconForeground: c,
            nameplate: u,
            shouldShowOutputDeviceChangedTooltip: d,
            dismissTooltips: f,
        } = e,
        p = t || n,
        {
            Component: h,
            play: g,
            events: { onMouseEnter: E, onMouseLeave: b },
        } = (0, _.l)(p ? "undeafen" : "deafen"),
        y = n ? m.Vm4 : h,
        { name: O } = (0, en.p6)(tt.h7.AUDIO_OUTPUT),
        { showRefreshedAudioContextMenu: v } = (0, e2.e)({ location: "HeadphonesButton" }),
        I = (0, L.Z)(t, n, a),
        { analyticsLocations: T } = (0, N.ZP)(C.Z.AUDIO_OUTPUT_BUTTON),
        S = i.useRef(null);
    i.useEffect(() => () => g(), [p, g]);
    let A = i.useCallback(
            (e) => {
                l(e, T);
            },
            [l, T],
        ),
        R = p;
    return v
        ? (0, r.jsx)(N.Gt, {
              value: T,
              children: (0, r.jsx)(m.yRy, {
                  targetElementRef: S,
                  renderPopout: (e) => {
                      let { closePopout: t } = e;
                      return (
                          f(),
                          (0, r.jsx)(N.Gt, {
                              value: T,
                              children: (0, r.jsx)(k.Z, {
                                  onInteraction: (0, Z.u)("AudioDeviceMenu", C.Z.ACCOUNT),
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
                  animation: m.yRy.Animation.FADE,
                  spacing: 4,
                  children: (e, t) => {
                      let { onClick: i } = e,
                          { isShown: l } = t,
                          f = l ? m.u04 : m.CJ0;
                      return (0, r.jsxs)("div", {
                          ref: S,
                          className: o()(tr.micButtonParent, {
                              [tr.hasColorGlow]: R,
                              [tr.popoutOpen]: l,
                          }),
                          children: [
                              (0, r.jsx)(e4.Z, {
                                  "aria-checked": p,
                                  "aria-label": tn.intl.string(tn.t.wjcRFR),
                                  className: tr.micButtonWithMenu,
                                  disabled: a,
                                  icon: (0, r.jsx)(y, {
                                      size: "custom",
                                      width: 20,
                                      height: 20,
                                      color: p ? m.TVs.colors.STATUS_DANGER : "currentColor",
                                      className: c,
                                  }),
                                  iconForeground: p ? tr.strikethrough : void 0,
                                  innerClassName: o()({ [tr.redIcon]: n }),
                                  onClick: s,
                                  onContextMenu: i,
                                  onMouseEnter: E,
                                  onMouseLeave: b,
                                  plated: null != u,
                                  redGlow: p,
                                  role: "switch",
                                  tooltipText: I,
                              }),
                              (0, r.jsx)(e4.Z, {
                                  "aria-label": d
                                      ? tn.intl.formatToPlainString(tn.t["f+DDY2"], { outputDeviceName: O })
                                      : tn.intl.string(tn.t.aA4VcX),
                                  className: o()(tr.buttonChevron, { [tr.popoutOpen]: l }),
                                  disabled: a,
                                  icon: (0, r.jsx)(f, {
                                      className: tr.buttonChevronIcon,
                                      size: "custom",
                                      width: 12,
                                      height: 12,
                                      color: p ? m.TVs.colors.STATUS_DANGER : "currentColor",
                                  }),
                                  onClick: i,
                                  onContextMenu: i,
                                  plated: null != u,
                                  redGlow: p,
                                  tooltipClassName: tr.accountButtonsTooltip,
                                  tooltipColor: d ? m.FGA.GREEN : void 0,
                                  tooltipContentClassName: tr.accountButtonsTooltipContent,
                                  tooltipForceOpen: d,
                                  tooltipPositionKeyStemOverride: d
                                      ? tn.intl.formatToPlainString(tn.t["f+DDY2"], { outputDeviceName: O })
                                      : void 0,
                                  tooltipShouldShow: !l,
                                  tooltipText: d
                                      ? tn.intl.format(tn.t["f+DDY2"], { outputDeviceName: O })
                                      : tn.intl.string(tn.t.aA4VcX),
                              }),
                          ],
                      });
                  },
              }),
          })
        : (0, r.jsx)(N.Gt, {
              value: T,
              children: (0, r.jsx)(e4.Z, {
                  plated: null != u,
                  tooltipText: I,
                  onMouseEnter: E,
                  onMouseLeave: b,
                  icon: (0, r.jsx)(y, {
                      size: "custom",
                      width: 20,
                      height: 20,
                      color: p ? m.TVs.colors.STATUS_DANGER : "currentColor",
                      className: c,
                  }),
                  onClick: s,
                  onContextMenu: A,
                  innerClassName: o()({ [tr.redIcon]: n }),
                  iconForeground: p ? tr.strikethrough : void 0,
                  role: "switch",
                  redGlow: p,
                  "aria-label": tn.intl.string(tn.t.wjcRFR),
                  "aria-checked": p,
                  disabled: a,
              }),
          });
}
