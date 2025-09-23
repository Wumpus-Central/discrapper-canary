n.d(t, {
    Z: () => tR,
    m: () => tA,
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
    R = n(541638),
    P = n(676742),
    w = n(1585),
    D = n(304761),
    x = n(865427),
    L = n(358221),
    j = n(571250),
    M = n(628581),
    k = n(659580),
    U = n(855844),
    G = n(55311),
    B = n(575175),
    Z = n(522651),
    F = n(795318),
    V = n(338390),
    H = n(64220),
    Y = n(427217),
    W = n(812055),
    K = n(243778),
    z = n(594928),
    q = n(181430),
    X = n(821795),
    Q = n(287647),
    J = n(892567),
    $ = n(258609),
    ee = n(53891),
    et = n(291533),
    en = n(427347),
    er = n(72897),
    ei = n(78933),
    ea = n(850020),
    eo = n(379839),
    es = n(359135),
    el = n(516817),
    ec = n(332473),
    eu = n(963590),
    ed = n(562705),
    ef = n(667105),
    e_ = n(768419),
    ep = n(172416),
    eh = n(184301),
    em = n(670188),
    eg = n(620799),
    eE = n(313789),
    eb = n(321614),
    ey = n(518596),
    eO = n(879815),
    ev = n(294629),
    eI = n(875527),
    eT = n(702977),
    eS = n(56848),
    eA = n(940315),
    eC = n(378441),
    eN = n(358820),
    eR = n(723547),
    eP = n(361045),
    ew = n(74650),
    eD = n(306609),
    ex = n(170293),
    eL = n(8404),
    ej = n(199902),
    eM = n(314897),
    ek = n(592125),
    eU = n(831506),
    eG = n(819640),
    eB = n(131951),
    eZ = n(19780),
    eF = n(914010),
    eV = n(885110),
    eH = n(246946),
    eY = n(594174),
    eW = n(78839),
    eK = n(626135),
    ez = n(768581),
    eq = n(572004),
    eX = n(459273),
    eQ = n(585483),
    eJ = n(70956),
    e$ = n(823379),
    e0 = n(5192),
    e1 = n(374023),
    e2 = n(51144),
    e3 = n(998502),
    e4 = n(660230),
    e8 = n(853170),
    e5 = n(422202),
    e6 = n(870569),
    e7 = n(345243),
    e9 = n(115530),
    te = n(981631),
    tt = n(215023),
    tn = n(921944),
    tr = n(46140),
    ti = n(65154),
    ta = n(388032),
    to = n(490579);
function ts(e, t, n) {
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
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                ts(e, t, n[t]);
            });
    }
    return e;
}
function tc(e, t) {
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
function tu(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : tc(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function td(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = tf(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function tf(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let t_ = e3.ZP.getEnableHardwareAcceleration() ? m.Xo$ : m.qEK,
    tp = 2000,
    th = 1000,
    tm = 11,
    tg = 2000,
    tE = 2 * eJ.Z.Millis.MINUTE,
    tb = 3 * eJ.Z.Millis.SECOND,
    ty = 300,
    tO = 5 * eJ.Z.Millis.SECOND;
function tv() {
    return [
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
    ];
}
let tI = 750;
function tT() {
    let e = i.useRef(null),
        t = i.useCallback((t) => {
            e.current = () => {
                t.onMouseDown(), t.onClick();
            };
        }, []),
        [n, r] = i.useState(),
        [a, o] = i.useState(!1);
    return (
        (0, O.Z)(() => o(!0), tI),
        i.useEffect(() => {
            let t = (t) => {
                var n;
                let { highlightBadge: i } = t;
                null != i && r(i), null == (n = e.current) || n.call(e);
            };
            return (
                eQ.S.subscribe(te.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, t),
                () => {
                    eQ.S.unsubscribe(te.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, t);
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
function tS(e) {
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
            selectedGuildId: _,
            transitionAccountPanel: p,
            avatarDecoration: h,
            "data-jump-section": g,
        } = e,
        b = i.useRef(null),
        y = null != t ? t : b,
        O = (0, ez.NZ)({
            avatarDecoration: h,
            size: (0, w.y9)(m.EFr.SIZE_32),
        }),
        v = (0, m.dQu)(m.TVs.modules.guildbar.AVATAR_SIZE),
        I = (0, V.Z)("Account") ? 32 : v,
        { updateOpenPopoutRef: T, highlightBadge: S, setHighlightBadge: A } = tT(),
        C = (0, eo.A)(f);
    return null == s
        ? null
        : (0, r.jsx)(E.Z, {
              object: te.qAy.AVATAR,
              children: (0, r.jsx)(em.Z, {
                  user: s,
                  targetElementRef: y,
                  clickTrap: !0,
                  preload: () =>
                      (0, eh.Z)(s.id, s.getAvatarURL(p ? _ : void 0, em.I), {
                          type: "account_popout",
                          withMutualGuilds: !1,
                          withMutualFriends: !1,
                      }),
                  renderPopout: (e, t) => {
                      let { closePopout: n, setPopoutRef: i } = e;
                      return (0, r.jsx)(ei.Z, {
                          currentUser: s,
                          highlightBadge: S,
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
                      u(), A(void 0);
                  },
                  children: (e) => (
                      T(e),
                      (0, r.jsxs)(
                          m.P3F,
                          tu(
                              tl(
                                  {
                                      innerRef: y,
                                      style: C,
                                  },
                                  e,
                              ),
                              {
                                  onClick: (t) => {
                                      var n;
                                      null == (n = e.onClick) || n.call(e, t), null == c || c(t);
                                  },
                                  "aria-label": ta.intl.string(ta.t["3Uj+2t"]),
                                  "data-jump-section": g,
                                  className: o()(to.avatarWrapper, { [to.plated]: null != f }),
                                  children: [
                                      (0, r.jsx)(t_, {
                                          size: m.EFr["SIZE_".concat(I)],
                                          src: s.getAvatarURL(p ? _ : void 0, I - 4, !1),
                                          avatarDecoration: O,
                                          "aria-label": s.username,
                                          status: a ? te.Skl.STREAMING : l,
                                          isSpeaking: n,
                                          className: to.avatar,
                                      }),
                                      (0, r.jsx)("div", {
                                          className: o()(to.nameTag, { [to.canCopy]: eq.wS }),
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
class tA extends i.PureComponent {
    get isCopiedStreakGodlike() {
        let { copiedStreak: e } = this.state;
        return e >= tm - 1;
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
            t = tv(),
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
                    textClassName: to.activityStatusText,
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
            ? (0, r.jsx)(A.Z, {
                  hoverText: o,
                  forceHover: e,
                  children: (0, r.jsx)(Y.Z, {
                      activity: c,
                      emojiClassName: to.emoji,
                      className: to.customStatus,
                  }),
              })
            : null != a && a !== te.Skl.UNKNOWN && i.hasUniqueUsername()
              ? (0, r.jsx)(A.Z, {
                    hoverText: o,
                    forceHover: e,
                    children: (0, r.jsx)(S.Z, { text: e2.ZP.humanizeStatus(a) }),
                })
              : o;
    }
    renderAvatarWithPopout(e) {
        let {
            focusSectionProps: { "data-jump-section": t },
            onClick: n,
        } = e;
        return (0, r.jsx)(
            tS,
            tu(tl({}, this.props), {
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
            return (0, r.jsx)(ee.ZP, {
                guildId: null != (u = this.props.selectedGuildId) ? u : null,
                onDismiss: a,
                targetElementRef: this.avatarWithPopoutRef,
                children: this.renderAvatarWithPopout({ focusSectionProps: e }),
            });
        }
        return o === d.z.DO_NOT_DISTURB_REMINDER_POPOVER
            ? (0, r.jsx)(W.Z, {
                  targetElementRef: this.avatarWithPopoutRef,
                  onDismiss: s,
                  children: this.renderAvatarWithPopout({ focusSectionProps: e }),
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(ed.Z, {
                          groupName: tn.R.ACCOUNT_NAME_ZONE,
                          targetElementRef: this.avatarWithPopoutRef,
                      }),
                      (0, r.jsx)(K.ZP, {
                          contentTypes: n.avatar,
                          groupName: tn.R.ACCOUNT_NAME_ZONE,
                          children: (t) => {
                              let { visibleContent: n, markAsDismissed: i } = t;
                              switch (n) {
                                  case d.z.WIDGETS_RTC_UPSELL_COACHMARK:
                                      return (0, r.jsx)(eg.Z, {
                                          markAsDismissed: i,
                                          targetElementRef: this.avatarWithPopoutRef,
                                          children: this.renderAvatarWithPopout({ focusSectionProps: e }),
                                      });
                                  case d.z.PREMIUM_SUBSCRIPTION_APRIL_MARKETING_DECO_TOOLTIP:
                                      return (0, r.jsx)(H.Z, {
                                          markAsDismissed: i,
                                          targetElementRef: this.avatarWithPopoutRef,
                                          children: () => this.renderAvatarWithPopout({ focusSectionProps: e }),
                                      });
                                  case d.z.DISPLAY_NAME_STYLES_COACHMARK:
                                      return (0, r.jsx)(Q.e, {
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
                                  className: o()(to.container, {
                                      [to.containerRtcOpened]: null != n,
                                      [to.containerQuestBarVisible]: !i,
                                      [to.containerListenAlongVisible]: a,
                                  }),
                                  onMouseEnter: this.handleMouseEnter,
                                  onMouseLeave: this.handleMouseLeave,
                                  children: [
                                      (0, r.jsx)(el.Z, {
                                          nameplate: t,
                                          hovered: s,
                                          placement: es.i.ACCOUNT,
                                      }),
                                      this.renderNameZone(e),
                                      (0, r.jsx)(
                                          tC,
                                          tu(tl({}, this.props, this.state), {
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
                              (0, r.jsx)(en.Z, {}),
                          ],
                      }),
              });
    }
    constructor(...e) {
        super(...e),
            ts(this, "copiedTimeout", new f.V7()),
            ts(this, "copiedDecayTimeout", new f.V7()),
            ts(this, "speakingWhileMutedTooltipTimeout", new f.V7()),
            ts(this, "lastSpeakingWhileMutedNotificationTime", void 0),
            ts(this, "state", {
                hovered: !1,
                copiedStreak: 0,
                shouldShowNametagTooltip: !1,
                shouldShowCopiedFeedback: !1,
                shouldShowSpeakingWhileMutedTooltip: !1,
                hoveringOnMute: !1,
            }),
            ts(this, "containerRef", i.createRef()),
            ts(this, "avatarWithPopoutRef", i.createRef()),
            ts(this, "handleToggleSelfMute", () => {
                let { serverMute: e, suppress: t, selfMute: n } = this.props;
                (0, B.Z)(e, t, te.jXE.ACCOUNT_PANEL), (0, Z.v)(C.Z.ACCOUNT, Z.d.MIC, n);
            }),
            ts(this, "handleToggleSelfDeaf", () => {
                let { serverDeaf: e, selfDeaf: t } = this.props;
                (0, G.Z)(e, te.jXE.ACCOUNT_PANEL), (0, Z.v)(C.Z.ACCOUNT, Z.d.DEAFEN, !t);
            }),
            ts(this, "handleOpenAccountSettings", () => {
                this.dismissTooltips(),
                    eZ.Z.isConnected()
                        ? (0, ey.openUserSettings)(eE.n.VOICE_AND_VIDEO_PANEL, { section: te.oAB.VOICE })
                        : (0, ey.openUserSettings)();
            }),
            ts(this, "handleOpenSettingsContextMenu", (e) => {
                let { currentUser: t } = this.props;
                null != t &&
                    (0, g.jW)(e, async () => {
                        let { default: e } = await n.e("2535").then(n.bind(n, 923422));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                tu(tl({}, n), {
                                    user: t,
                                    premiumSubscription: this.props.premiumSubscription,
                                    webBuildOverride: this.props.webBuildOverride,
                                    onInteraction: (0, F.u)("UserSettingsCogContextMenu", C.Z.ACCOUNT),
                                }),
                            );
                    });
            }),
            ts(this, "audioOnInteractionHandler", (0, F.u)("AudioDeviceMenu", C.Z.ACCOUNT)),
            ts(this, "handleInputAudioContextMenu", (e, t) => {
                this.dismissTooltips(),
                    (0, g.jW)(e, async () => {
                        let { default: e } = await Promise.resolve().then(n.bind(n, 659580));
                        return () => {
                            let { enabledInputProfiles: n } = (0, eb.c)({ location: "Account" });
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
            ts(this, "handleOutputAudioContextMenu", (e, t) => {
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
            ts(this, "handleMouseEnter", () => {
                this.setState({ hovered: !0 });
            }),
            ts(this, "handleMouseLeave", () => {
                this.setState({ hovered: !1 });
            }),
            ts(this, "handleMouseEnterMute", () => {
                this.setState({
                    hoveringOnMute: !0,
                    shouldShowSpeakingWhileMutedTooltip: !1,
                }),
                    this.speakingWhileMutedTooltipTimeout.stop();
            }),
            ts(this, "handleMouseLeaveMute", () => {
                this.setState({ hoveringOnMute: !1 });
            }),
            ts(this, "dismissSpeakingWhileMutedTooltip", () => {
                this.setState({ shouldShowSpeakingWhileMutedTooltip: !1 }),
                    this.speakingWhileMutedTooltipTimeout.stop();
            }),
            ts(this, "dismissTooltips", () => {
                var e, t, n, r;
                null == (e = (t = this.props).dismissInputDeviceChangedTooltip) || e.call(t),
                    null == (n = (r = this.props).dismissOutputDeviceChangedTooltip) || n.call(r),
                    this.dismissSpeakingWhileMutedTooltip();
            }),
            ts(this, "handleCopyTag", () => {
                let { currentUser: e } = this.props,
                    { shouldShowNametagTooltip: t, copiedStreak: n } = this.state;
                if (null == e) return;
                (0, eq.JG)(
                    e2.ZP.getUserTag(e, {
                        decoration: "never",
                        identifiable: "always",
                    }),
                ),
                    eK.default.track(te.rMx.TEXT_COPIED, { type: "User Tag" });
                let r = {
                    shouldShowCopiedFeedback: !0,
                    shouldShowNametagTooltip: !0,
                };
                t || (r.copiedStreak = n + 1),
                    this.setState(r, () => {
                        this.copiedTimeout.start(th, () => this.setState({ shouldShowNametagTooltip: !1 })),
                            this.copiedDecayTimeout.start(tp, () => this.setState({ copiedStreak: 0 }));
                    });
            }),
            ts(this, "handleOccludedChanged", () => {
                let { occluded: e } = this.props;
                e &&
                    this.setState({
                        shouldShowNametagTooltip: !1,
                        shouldShowSpeakingWhileMutedTooltip: !1,
                    });
            }),
            ts(this, "handleSpeakingWhileMutedChanged", () => {
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
                        Date.now() - this.lastSpeakingWhileMutedNotificationTime > tE;
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
                              this.speakingWhileMutedTooltipTimeout.start(tg, () =>
                                  this.setState({ shouldShowSpeakingWhileMutedTooltip: !1 }),
                              );
                      })
                    : (this.setState({ shouldShowSpeakingWhileMutedTooltip: !1 }),
                      this.speakingWhileMutedTooltipTimeout.stop());
            }),
            ts(this, "renderNameTag", (e) => {
                let { currentUser: t, isDisplayNameStylesEnabled: n, username: i } = this.props;
                if (null == t) return null;
                let a = n && null != e;
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)("div", {
                            className: to.panelTitleContainer,
                            children: (0, r.jsx)(e9.Z, {
                                className: o()({ [to.withDisplayNameStyles]: a }),
                                children: (0, r.jsx)(J.Z, {
                                    userName: i,
                                    displayNameStyles: e,
                                    effectDisplayType: this.state.hovered ? X.F.ANIMATED : X.F.STATIC,
                                    loop: !0,
                                    inProfile: !0,
                                }),
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: to.panelSubtextContainer,
                            children: (0, r.jsx)(e7.Z, { children: this.renderStatus() }),
                        }),
                    ],
                });
            });
    }
}
function tC(e) {
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
        S = (0, eo.A)(y);
    return (0, r.jsxs)("div", {
        className: to.buttons,
        style: S,
        children: [
            (0, r.jsx)(tw, {
                accountContainerRef: O,
                selfMute: n,
                serverMute: a,
                suppress: s,
                awaitingRemote: i,
                onMouseEnter: d,
                onMouseLeave: f,
                onClick: p,
                onContextMenu: h,
                iconForeground: null != y ? to.iconForeground : void 0,
                nameplate: y,
                shouldShowInputDeviceChangedTooltip: v,
                shouldShowSpeakingWhileMutedTooltip: l,
                dismissTooltips: T,
            }),
            (0, r.jsx)(tD, {
                selfDeaf: t,
                serverDeaf: o,
                onClick: _,
                onContextMenu: m,
                awaitingRemote: i,
                iconForeground: null != y ? to.iconForeground : void 0,
                nameplate: y,
                shouldShowOutputDeviceChangedTooltip: I,
                dismissTooltips: T,
            }),
            (0, r.jsx)(tP, {
                isEligibleForPomelo: c,
                webBuildOverride: u,
                onClick: g,
                onContextMenu: E,
                dismissibleContents: b.settings,
                iconForeground: null != y ? to.iconForeground : void 0,
                nameplate: y,
                shouldShowInputDeviceChangedTooltip: v,
                shouldShowOutputDeviceChangedTooltip: I,
            }),
        ],
    });
}
function tN(e) {
    let { shouldShowDeviceChangedNotifications: t } = (0, e5.P)({
            location: "Account.useDeviceChangedTooltip",
            autoTrackExposure: !1,
        }),
        n = (0, u.e7)([eZ.Z], () => null != eZ.Z.getChannelId()),
        r = (0, er.Fh)(e),
        a = i.useRef(new f.V7()),
        [o, s] = i.useState(!1);
    i.useEffect(() => {
        n &&
            r &&
            ((0, e5._)({
                location: "Account.useDeviceChangedTooltip (exposure tracking)",
                autoTrackExposure: !0,
            }),
            t &&
                (s(!0),
                a.current.start(tO, () => {
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
function tR() {
    var e, t;
    let n = (0, u.e7)([eY.default], () => eY.default.getCurrentUser()),
        i = (0, u.e7)([eM.default], () => eM.default.getId()),
        a = e4.K.useConfig({ location: "AccountConnected" }).transitionAccountPanel,
        {
            activities: o,
            streaming: s,
            status: c,
        } = (0, u.cj)([eV.Z], () => {
            let e = eV.Z.getActivities();
            return {
                activities: e,
                streaming:
                    null !=
                    e.find((e) => {
                        let { type: t } = e;
                        return t === te.IIU.STREAMING;
                    }),
                status: eV.Z.getStatus(),
            };
        }),
        f = (0, u.e7)([ej.Z], () => ej.Z.getAnyStreamForUser(i)),
        _ = (0, b.Z)({ userId: i }),
        p = e2.ZP.useUserTag(n, { decoration: "never" }),
        h = (0, u.e7)([eH.Z], () => eH.Z.hidePersonalInformation),
        g = (0, u.e7)([eZ.Z, ek.Z], () => {
            let e = eZ.Z.getChannelId();
            return null != e ? ek.Z.getChannel(e) : null;
        }),
        { mute: E, selfMute: y, suppress: O } = (0, ev.Z)(g),
        { selfDeaf: I, deaf: T } = (0, eO.Z)(g),
        S = (0, u.e7)([D.C], () => {
            var e;
            return (0, x.fD)()
                ? null == (e = D.C.getCurrentBuildOverride().overrides)
                    ? void 0
                    : e.discord_web
                : null;
        }),
        A = (0, u.e7)([eW.Z], () => eW.Z.getPremiumTypeSubscription()),
        w = (0, u.e7)([eB.Z], () => eB.Z.getSpeakingWhileMuted()),
        j = (0, u.e7)([L.Z], () => L.Z.isFullscreenInContext()),
        M = (0, u.e7)([eG.Z], () => eG.Z.hasLayers()),
        k = (0, m.s9z)(m.JQI) || M || e1.s.isDisallowPopupsSet() || j,
        U = (0, ec.b)(),
        G = (0, u.e7)([$.Z], () => null != $.Z.getAwaitingRemoteSessionInfo()),
        B = (0, u.e7)([eF.Z], () => eF.Z.getGuildId()),
        Z = null == n ? void 0 : n.avatarDecoration,
        F = (0, R.R)(n, null != B ? B : void 0),
        V = (0, P.Z)(a ? F : Z),
        H = e0.ZP.useName(null != B ? B : void 0, null, n),
        Y = null != (t = e2.ZP.useName(n)) ? t : "",
        K = a ? H : Y,
        X = (null == n || null == (e = n.avatarDecoration) ? void 0 : e.skuId) === tt.rL,
        { voiceActivityStatusEnabled: Q } = (0, v.U)({ location: "Account" }),
        [J, ee] = (0, et.G)(null != B ? B : null),
        [en, er] = (0, W.b)(),
        ei = z.JH.useExperiment({ location: "Account" }).enabled,
        { analyticsLocations: eo } = (0, N.ZP)(C.Z.ACCOUNT),
        es = (0, ea.K)({
            user: n,
            guildId: a && null != B ? B : void 0,
        }),
        { isQuestBarEmpty: el, hasLoadedQuestBar: eu } = (0, ef.Ws)({ location: tr.dr.CONFLICT_CHECKS }),
        ed = (0, u.e7)([e_.Z, eY.default, eU.Z], () => {
            let e,
                t = e_.Z.getSyncingWith(),
                n = e_.Z.getActivity(),
                r = [];
            if (
                (null != t ? (e = t.partyId) : null != n && null != n.party && null != n.party.id && (e = n.party.id),
                null != e)
            ) {
                var i;
                r = l()(Array.from(null != (i = eU.Z.getParty(e)) ? i : []))
                    .map((e) => eY.default.getUser(e))
                    .filter(e$.lm)
                    .value();
            }
            return r.length > 1;
        }),
        eh = (0, ep.U)({ location: "AccountConnected" }),
        em = {
            avatar: [],
            settings: [],
        };
    !k &&
        (X && em.avatar.push(d.z.PREMIUM_SUBSCRIPTION_APRIL_MARKETING_DECO_TOOLTIP),
        ei && em.avatar.push(d.z.DISPLAY_NAME_STYLES_COACHMARK),
        eh && em.avatar.push(d.z.WIDGETS_RTC_UPSELL_COACHMARK));
    let eg = (0, q.Y)({ location: "AccountConnected" }),
        { shouldShowTooltip: eE, dismissTooltip: eb } = tN(ti.h7.AUDIO_INPUT),
        { shouldShowTooltip: ey, dismissTooltip: eI } = tN(ti.h7.AUDIO_OUTPUT);
    return (0, r.jsx)(N.Gt, {
        value: eo,
        children: (0, r.jsx)(tA, {
            currentUser: n,
            username: K,
            transitionAccountPanel: a,
            activities: o,
            applicationStream: f,
            voiceChannel: g,
            dismissibleContents: em,
            visibleRecurringAvatarDc: J,
            markRecurringAvatarDcAsDismissed: ee,
            visibleRecurringDoNotDisturbReminderPopoverDc: en,
            markRecurringDoNotDisturbReminderPopoverDcAsDismissed: er,
            userTag: p,
            hidePrivateData: h,
            occluded: k,
            premiumSubscription: A,
            selfDeaf: I,
            selfMute: y,
            serverDeaf: T,
            serverMute: E,
            speaking: _,
            speakingWhileMuted: w,
            status: c,
            streaming: s,
            suppress: O,
            webBuildOverride: S,
            awaitingRemote: G,
            isEligibleForPomelo: U,
            voiceActivityStatusEnabled: Q,
            nameplate: es,
            selectedGuildId: B,
            avatarDecoration: V,
            isQuestBarEmpty: el,
            hasLoadedQuestBar: eu,
            isListenAlongVisible: ed,
            isDisplayNameStylesEnabled: eg,
            shouldShowInputDeviceChangedTooltip: eE,
            shouldShowOutputDeviceChangedTooltip: ey,
            dismissInputDeviceChangedTooltip: eb,
            dismissOutputDeviceChangedTooltip: eI,
        }),
    });
}
function tP(e) {
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
        { showRefreshedAudioContextMenu: g } = (0, e8.e)({ location: "SettingsCogButton" }),
        E = !g && (f || _),
        { name: b } = (0, er.p6)(ti.h7.AUDIO_INPUT),
        { name: y } = (0, er.p6)(ti.h7.AUDIO_OUTPUT);
    !g && f
        ? ((t = ta.intl.format(ta.t["18wnuL"], { inputDeviceName: b })),
          (n = ta.intl.formatToPlainString(ta.t["18wnuL"], { inputDeviceName: b })),
          (a = ta.intl.formatToPlainString(ta.t["18wnuL"], { inputDeviceName: b })))
        : !g && _
          ? ((t = ta.intl.format(ta.t["f+DDY2"], { outputDeviceName: y })),
            (n = ta.intl.formatToPlainString(ta.t["f+DDY2"], { outputDeviceName: y })),
            (a = ta.intl.formatToPlainString(ta.t["f+DDY2"], { outputDeviceName: y })))
          : (t =
                null != o
                    ? ta.intl.formatToPlainString(ta.t.Gzh6ZG, { webBuildOverride: o.id })
                    : ta.intl.string(ta.t.cduTBA));
    let O = m.ewm,
        v = (0, p.i)();
    return (
        (O = null != o ? m.bgT : s ? m.Ncx : v.Component),
        (0, r.jsx)(
            e6.Z,
            tu(
                tl(
                    {
                        ref: h,
                        tooltipText: t,
                        tooltipColor: E ? m.FGA.GREEN : void 0,
                        tooltipForceOpen: E,
                        tooltipClassName: to.accountButtonsTooltip,
                        tooltipContentClassName: to.accountButtonsTooltipContent,
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
function tw(e) {
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
        R = (0, eL.b)(T),
        { activeVoice: P, mostRecentlyRequestedVoiceId: w, lastInitAttemptMayHaveCrashed: D } = (0, eC.o)(),
        { showSilentLagWarning: x } = (0, eA.Y)(),
        L = null != P,
        j = (0, eS.z)(P),
        G = (0, u.e7)([eZ.Z], () => eZ.Z.isConnected()),
        { Component: B, events: Z, play: V } = R,
        H = a || s ? m.v0G : B,
        Y = (0, M.Z)(n, a, s, l),
        W = x ? ta.intl.string(ta.t.ARRV6u) : null;
    t = O
        ? ta.intl.string(ta.t["29gnR0"])
        : null != W
          ? (0, r.jsxs)("div", {
                className: to.tooltipWithSubtext,
                children: [
                    (0, r.jsx)(m.Text, {
                        variant: "text-sm/medium",
                        color: "currentColor",
                        children: Y,
                    }),
                    (0, r.jsx)(m.Text, {
                        variant: "text-xs/medium",
                        color: "text-feedback-warning",
                        children: W,
                    }),
                ],
            })
          : Y;
    let { analyticsLocations: z } = (0, N.ZP)(C.Z.AUDIO_INPUT_BUTTON),
        q = (0, eI.Hu)({
            location: C.Z.AUDIO_INPUT_BUTTON,
            autoTrackExposure: !0,
        }),
        X = (0, eT.av)({
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
    (0, eX.yp)({
        event: te.CkL.OPEN_VOICE_FILTER_POPOUT,
        handler: () => {
            $(!0);
        },
    });
    let [et, en] = i.useState(!1);
    i.useEffect(() => {
        let e;
        return (
            G &&
                L &&
                (e = setTimeout(() => {
                    en(!0), (e = setTimeout(() => en(!1), tb));
                }, ty)),
            () => {
                en(!1), clearTimeout(e);
            }
        );
    }, [G]);
    let ei = i.useCallback(() => {
            D || (0, eN.r5)();
        }, [D]),
        ea = T ? m.TVs.colors.STATUS_DANGER : x ? m.TVs.colors.STATUS_WARNING : "currentColor",
        eo = T || x,
        es = (0, eu.Z)({ location: "Account" }),
        { name: el } = (0, er.p6)(ti.h7.AUDIO_INPUT),
        { showRefreshedAudioContextMenu: ec } = (0, e8.e)({ location: "MicrophoneButton" }),
        { enabledInputProfiles: ed } = (0, eb.c)({ location: "MicrophoneButton" });
    return ec
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
                              children: ec
                                  ? (0, r.jsx)(U.Z, {
                                        onInteraction: (0, F.u)("AudioDeviceMenu", C.Z.ACCOUNT),
                                        onClose: t,
                                        maybeRenderPTTCheckbox: !0,
                                        renderInputProfiles: ed.length > 0,
                                        renderInputDevices: !0,
                                        maybeRenderInputMeter: !0,
                                        renderInputVolume: !0,
                                        renderSettingsButton: !0,
                                    })
                                  : (0, r.jsx)(k.default, {
                                        onInteraction: (0, F.u)("AudioDeviceMenu", C.Z.ACCOUNT),
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
                          className: o()(to.micButtonParent, {
                              [to.hasColorGlow]: eo,
                              [to.popoutOpen]: a,
                          }),
                          children: [
                              (0, r.jsx)(e6.Z, {
                                  "aria-checked": T,
                                  "aria-label": ta.intl.string(ta.t["w4m94+"]),
                                  className: o()({ [to.micButtonWithMenu]: !0 }),
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
                                      _(), Z.onMouseEnter();
                                  },
                                  onMouseLeave: () => {
                                      p(), Z.onMouseLeave();
                                  },
                                  orangeGlow: x,
                                  plated: null != b,
                                  redGlow: T,
                                  role: "switch",
                                  tooltipColor: O ? m.FGA.GREEN : void 0,
                                  tooltipForceOpen: O,
                                  tooltipText: t,
                              }),
                              (0, r.jsx)(e6.Z, {
                                  "aria-label": v
                                      ? ta.intl.formatToPlainString(ta.t["18wnuL"], { inputDeviceName: el })
                                      : ta.intl.string(ta.t.fRzCbG),
                                  className: o()(to.buttonChevron, { [to.popoutOpen]: a }),
                                  disabled: l,
                                  icon: (0, r.jsx)(s, {
                                      className: to.buttonChevronIcon,
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
                                  tooltipClassName: to.accountButtonsTooltip,
                                  tooltipColor: v ? m.FGA.GREEN : void 0,
                                  tooltipContentClassName: to.accountButtonsTooltipContent,
                                  tooltipForceOpen: v,
                                  tooltipPositionKeyStemOverride: v
                                      ? ta.intl.formatToPlainString(ta.t["18wnuL"], { inputDeviceName: el })
                                      : void 0,
                                  tooltipShouldShow: !a,
                                  tooltipText: v
                                      ? ta.intl.format(ta.t["18wnuL"], { inputDeviceName: el })
                                      : ta.intl.string(ta.t.fRzCbG),
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
                  className: o()(to.micButtonParent, { [to.hasColorGlow]: eo }),
                  children: [
                      (0, r.jsx)(e6.Z, {
                          tooltipText: t,
                          tooltipColor: O ? m.FGA.GREEN : void 0,
                          tooltipForceOpen: O,
                          plated: null != b,
                          onMouseEnter: () => {
                              _(), Z.onMouseEnter();
                          },
                          onMouseLeave: () => {
                              p(), Z.onMouseLeave();
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
                          className: o()({ [to.micButtonWithMenu]: q }),
                          orangeGlow: x,
                          redGlow: T,
                          "aria-label": ta.intl.string(ta.t["w4m94+"]),
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
                                  return (0, r.jsx)(eD.l, { onSettingsButtonClick: t });
                              },
                              children: (e, t) => {
                                  var { onClick: n } = e,
                                      i = td(e, ["onClick"]),
                                      { isShown: a } = t;
                                  let o = a ? m.u04 : m.CJ0,
                                      s = [];
                                  return (
                                      !a &&
                                          (es && s.push(d.z.VOICE_FILTER_EARLY_ACCESS_COACHMARK),
                                          s.push(d.z.VOICE_FILTER_LAUNCH_COACHMARK),
                                          X && G && !L && s.push(d.z.VOICE_FILTER_FIRST_USE_COACHMARK)),
                                      (0, r.jsx)("div", {
                                          children: (0, r.jsx)(K.ZP, {
                                              bypassAutoDismiss: !0,
                                              contentTypes: s,
                                              children: (e) => {
                                                  let { visibleContent: t, markAsDismissed: a } = e,
                                                      s = null;
                                                  t === d.z.VOICE_FILTER_EARLY_ACCESS_COACHMARK
                                                      ? (s = (0, r.jsx)(ew.U, {
                                                            markAsDismissed: a,
                                                            onCTA: () => $(!0),
                                                        }))
                                                      : t === d.z.VOICE_FILTER_LAUNCH_COACHMARK
                                                        ? (s = (0, r.jsx)(eP.n, {
                                                              markAsDismissed: a,
                                                              onCTA: () => $(!0),
                                                          }))
                                                        : t === d.z.VOICE_FILTER_FIRST_USE_COACHMARK &&
                                                          (s = (0, r.jsx)(eR.v, {
                                                              markAsDismissed: a,
                                                              onCTA: () => $(!0),
                                                          }));
                                                  let c = () =>
                                                      (0, r.jsx)(
                                                          e6.Z,
                                                          tl(
                                                              {
                                                                  ref: A,
                                                                  plated: null != b,
                                                                  tooltipForceOpen: et,
                                                                  tooltipColor: et ? m.FGA.GREEN : void 0,
                                                                  tooltipContentClassName: et
                                                                      ? to.voiceFilterWarning
                                                                      : void 0,
                                                                  tooltipText: et
                                                                      ? (0, r.jsxs)(r.Fragment, {
                                                                            children: [
                                                                                (0, r.jsx)("img", {
                                                                                    alt:
                                                                                        null != j
                                                                                            ? ta.intl.string(j.name)
                                                                                            : "",
                                                                                    src: null == j ? void 0 : j.iconURL,
                                                                                    draggable: !1,
                                                                                }),
                                                                                (0, r.jsx)(m.Text, {
                                                                                    variant: "text-sm/medium",
                                                                                    color: "always-white",
                                                                                    children: ta.intl.string(
                                                                                        ta.t.VlC1dX,
                                                                                    ),
                                                                                }),
                                                                            ],
                                                                        })
                                                                      : ta.intl.string(ta.t.Hapb4O),
                                                                  icon: (0, r.jsx)(o, {
                                                                      className: to.buttonChevronIcon,
                                                                      size: "custom",
                                                                      width: 12,
                                                                      height: 12,
                                                                      color: ea,
                                                                  }),
                                                                  role: "button",
                                                                  className: to.buttonChevron,
                                                                  orangeGlow: x,
                                                                  redGlow: T,
                                                                  "aria-label": ta.intl.string(ta.t.Hapb4O),
                                                                  disabled: l,
                                                                  onClick: (e) => {
                                                                      a(tn.L.INDIRECT_ACTION),
                                                                          n(e),
                                                                          null != w && !J && D
                                                                              ? (0, ex.$)(() => $(!0))
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
function tD(e) {
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
        { name: O } = (0, er.p6)(ti.h7.AUDIO_OUTPUT),
        { showRefreshedAudioContextMenu: v } = (0, e8.e)({ location: "HeadphonesButton" }),
        I = (0, j.Z)(t, n, a),
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
                              children: (0, r.jsx)(U.Z, {
                                  onInteraction: (0, F.u)("AudioDeviceMenu", C.Z.ACCOUNT),
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
                          className: o()(to.micButtonParent, {
                              [to.hasColorGlow]: R,
                              [to.popoutOpen]: l,
                          }),
                          children: [
                              (0, r.jsx)(e6.Z, {
                                  "aria-checked": p,
                                  "aria-label": ta.intl.string(ta.t.wjcRFR),
                                  className: to.micButtonWithMenu,
                                  disabled: a,
                                  icon: (0, r.jsx)(y, {
                                      size: "custom",
                                      width: 20,
                                      height: 20,
                                      color: p ? m.TVs.colors.STATUS_DANGER : "currentColor",
                                      className: c,
                                  }),
                                  iconForeground: p ? to.strikethrough : void 0,
                                  innerClassName: o()({ [to.redIcon]: n }),
                                  onClick: s,
                                  onContextMenu: i,
                                  onMouseEnter: E,
                                  onMouseLeave: b,
                                  plated: null != u,
                                  redGlow: p,
                                  role: "switch",
                                  tooltipText: I,
                              }),
                              (0, r.jsx)(e6.Z, {
                                  "aria-label": d
                                      ? ta.intl.formatToPlainString(ta.t["f+DDY2"], { outputDeviceName: O })
                                      : ta.intl.string(ta.t.aA4VcX),
                                  className: o()(to.buttonChevron, { [to.popoutOpen]: l }),
                                  disabled: a,
                                  icon: (0, r.jsx)(f, {
                                      className: to.buttonChevronIcon,
                                      size: "custom",
                                      width: 12,
                                      height: 12,
                                      color: p ? m.TVs.colors.STATUS_DANGER : "currentColor",
                                  }),
                                  onClick: i,
                                  onContextMenu: i,
                                  plated: null != u,
                                  redGlow: p,
                                  tooltipClassName: to.accountButtonsTooltip,
                                  tooltipColor: d ? m.FGA.GREEN : void 0,
                                  tooltipContentClassName: to.accountButtonsTooltipContent,
                                  tooltipForceOpen: d,
                                  tooltipPositionKeyStemOverride: d
                                      ? ta.intl.formatToPlainString(ta.t["f+DDY2"], { outputDeviceName: O })
                                      : void 0,
                                  tooltipShouldShow: !l,
                                  tooltipText: d
                                      ? ta.intl.format(ta.t["f+DDY2"], { outputDeviceName: O })
                                      : ta.intl.string(ta.t.aA4VcX),
                              }),
                          ],
                      });
                  },
              }),
          })
        : (0, r.jsx)(N.Gt, {
              value: T,
              children: (0, r.jsx)(e6.Z, {
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
                  innerClassName: o()({ [to.redIcon]: n }),
                  iconForeground: p ? to.strikethrough : void 0,
                  role: "switch",
                  redGlow: p,
                  "aria-label": ta.intl.string(ta.t.wjcRFR),
                  "aria-checked": p,
                  disabled: a,
              }),
          });
}
