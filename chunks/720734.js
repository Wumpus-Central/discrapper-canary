n.d(t, {
    Z: () => tN,
    m: () => tS,
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
    e_ = n(447448),
    ep = n(184301),
    eh = n(52538),
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
    e0 = n(74538),
    e1 = n(374023),
    e2 = n(51144),
    e3 = n(998502),
    e4 = n(853170),
    e8 = n(422202),
    e6 = n(870569),
    e5 = n(345243),
    e7 = n(115530),
    e9 = n(981631),
    te = n(215023),
    tt = n(921944),
    tn = n(46140),
    tr = n(65154),
    ti = n(388032),
    ta = n(490579);
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
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                to(e, t, n[t]);
            });
    }
    return e;
}
function tl(e, t) {
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
function tc(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : tl(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function tu(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = td(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function td(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let tf = e3.ZP.getEnableHardwareAcceleration() ? m.Xo$ : m.qEK,
    t_ = 2000,
    tp = 1000,
    th = 11,
    tm = 2000,
    tg = 2 * eJ.Z.Millis.MINUTE,
    tE = 3 * eJ.Z.Millis.SECOND,
    tb = 300,
    ty = 5 * eJ.Z.Millis.SECOND;
function tO() {
    return [
        ti.intl.string(ti.t.MSaeTU),
        ti.intl.string(ti.t.UmrCw8),
        ti.intl.string(ti.t.gKE0Ji),
        ti.intl.string(ti.t["4DSKbm"]),
        ti.intl.string(ti.t["+8ENdX"]),
        ti.intl.string(ti.t.GlWHv7),
        ti.intl.string(ti.t.hIzxU1),
        ti.intl.string(ti.t["26uMPD"]),
        ti.intl.string(ti.t.uFs7R0),
        ti.intl.string(ti.t.bLXdcX),
        ti.intl.string(ti.t.gPg9fX),
    ];
}
let tv = 750;
function tI() {
    let e = i.useRef(null),
        t = i.useCallback((t) => {
            e.current = () => {
                t.onMouseDown(), t.onClick();
            };
        }, []),
        [n, r] = i.useState(),
        [a, o] = i.useState(!1);
    return (
        (0, O.Z)(() => o(!0), tv),
        i.useEffect(() => {
            let t = (t) => {
                var n;
                let { highlightBadge: i } = t;
                null != i && r(i), null == (n = e.current) || n.call(e);
            };
            return (
                eQ.S.subscribe(e9.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, t),
                () => {
                    eQ.S.unsubscribe(e9.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, t);
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
function tT(e) {
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
        b = (0, ez.NZ)({
            avatarDecoration: g,
            size: (0, P.y9)(m.EFr.SIZE_32),
        }),
        y = (0, m.dQu)(m.TVs.modules.guildbar.AVATAR_SIZE),
        O = (0, F.Z)("Account") ? 32 : y,
        { updateOpenPopoutRef: v, highlightBadge: I, setHighlightBadge: T } = tI(),
        S = (0, ea.A)(f);
    return null == s
        ? null
        : (0, r.jsx)(E.Z, {
              object: e9.qAy.AVATAR,
              children: (0, r.jsx)(em.Z, {
                  user: s,
                  targetElementRef: h,
                  clickTrap: !0,
                  preload: () =>
                      (0, ep.Z)(s.id, s.getAvatarURL(void 0, em.I), {
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
                          tc(
                              ts(
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
                                  "aria-label": ti.intl.string(ti.t["3Uj+2t"]),
                                  "data-jump-section": _,
                                  className: o()(ta.avatarWrapper, { [ta.plated]: null != f }),
                                  children: [
                                      (0, r.jsx)(tf, {
                                          size: m.EFr["SIZE_".concat(O)],
                                          src: s.getAvatarURL(void 0, O - 4, !1),
                                          avatarDecoration: b,
                                          "aria-label": s.username,
                                          status: a ? e9.Skl.STREAMING : l,
                                          isSpeaking: n,
                                          className: ta.avatar,
                                      }),
                                      (0, r.jsx)("div", {
                                          className: o()(ta.nameTag, { [ta.canCopy]: eq.wS }),
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
class tS extends i.PureComponent {
    get isCopiedStreakGodlike() {
        let { copiedStreak: e } = this.state;
        return e >= th - 1;
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
            t = tO(),
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
                    textClassName: ta.activityStatusText,
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
            ? (0, r.jsx)(A.Z, {
                  hoverText: o,
                  forceHover: e,
                  children: (0, r.jsx)(H.Z, {
                      activity: c,
                      emojiClassName: ta.emoji,
                      className: ta.customStatus,
                  }),
              })
            : null != a && a !== e9.Skl.UNKNOWN && i.hasUniqueUsername()
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
            tT,
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
                          groupName: tt.R.ACCOUNT_NAME_ZONE,
                          targetElementRef: this.avatarWithPopoutRef,
                      }),
                      (0, r.jsx)(W.ZP, {
                          contentTypes: n.avatar,
                          groupName: tt.R.ACCOUNT_NAME_ZONE,
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
                                  className: o()(ta.container, {
                                      [ta.containerRtcOpened]: null != n,
                                      [ta.containerQuestBarVisible]: !i,
                                      [ta.containerListenAlongVisible]: a,
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
                                          tA,
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
                              (0, r.jsx)(et.Z, {}),
                          ],
                      }),
              });
    }
    constructor(...e) {
        super(...e),
            to(this, "copiedTimeout", new f.V7()),
            to(this, "copiedDecayTimeout", new f.V7()),
            to(this, "speakingWhileMutedTooltipTimeout", new f.V7()),
            to(this, "lastSpeakingWhileMutedNotificationTime", void 0),
            to(this, "state", {
                hovered: !1,
                copiedStreak: 0,
                shouldShowNametagTooltip: !1,
                shouldShowCopiedFeedback: !1,
                shouldShowSpeakingWhileMutedTooltip: !1,
                hoveringOnMute: !1,
            }),
            to(this, "containerRef", i.createRef()),
            to(this, "avatarWithPopoutRef", i.createRef()),
            to(this, "handleToggleSelfMute", () => {
                let { serverMute: e, suppress: t, selfMute: n } = this.props;
                (0, G.Z)(e, t, e9.jXE.ACCOUNT_PANEL), (0, B.v)(C.Z.ACCOUNT, B.d.MIC, n);
            }),
            to(this, "handleToggleSelfDeaf", () => {
                let { serverDeaf: e, selfDeaf: t } = this.props;
                (0, U.Z)(e, e9.jXE.ACCOUNT_PANEL), (0, B.v)(C.Z.ACCOUNT, B.d.DEAFEN, !t);
            }),
            to(this, "handleOpenAccountSettings", () => {
                this.dismissTooltips(),
                    eZ.Z.isConnected()
                        ? (0, ey.openUserSettings)(eE.n.VOICE_AND_VIDEO_PANEL, { section: e9.oAB.VOICE })
                        : (0, ey.openUserSettings)();
            }),
            to(this, "handleOpenSettingsContextMenu", (e) => {
                let { currentUser: t } = this.props;
                null != t &&
                    (0, g.jW)(e, async () => {
                        let { default: e } = await n.e("2535").then(n.bind(n, 923422));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                tc(ts({}, n), {
                                    user: t,
                                    premiumSubscription: this.props.premiumSubscription,
                                    webBuildOverride: this.props.webBuildOverride,
                                    onInteraction: (0, Z.u)("UserSettingsCogContextMenu", C.Z.ACCOUNT),
                                }),
                            );
                    });
            }),
            to(this, "audioOnInteractionHandler", (0, Z.u)("AudioDeviceMenu", C.Z.ACCOUNT)),
            to(this, "handleInputAudioContextMenu", (e, t) => {
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
            to(this, "handleOutputAudioContextMenu", (e, t) => {
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
                var e, t, n, r;
                null == (e = (t = this.props).dismissInputDeviceChangedTooltip) || e.call(t),
                    null == (n = (r = this.props).dismissOutputDeviceChangedTooltip) || n.call(r),
                    this.dismissSpeakingWhileMutedTooltip();
            }),
            to(this, "handleCopyTag", () => {
                let { currentUser: e } = this.props,
                    { shouldShowNametagTooltip: t, copiedStreak: n } = this.state;
                if (null == e) return;
                (0, eq.JG)(
                    e2.ZP.getUserTag(e, {
                        decoration: "never",
                        identifiable: "always",
                    }),
                ),
                    eK.default.track(e9.rMx.TEXT_COPIED, { type: "User Tag" });
                let r = {
                    shouldShowCopiedFeedback: !0,
                    shouldShowNametagTooltip: !0,
                };
                t || (r.copiedStreak = n + 1),
                    this.setState(r, () => {
                        this.copiedTimeout.start(tp, () => this.setState({ shouldShowNametagTooltip: !1 })),
                            this.copiedDecayTimeout.start(t_, () => this.setState({ copiedStreak: 0 }));
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
                        speakingWhileMuted: r,
                        occluded: i,
                        shouldShowInputDeviceChangedTooltip: a,
                        shouldShowOutputDeviceChangedTooltip: o,
                    } = this.props,
                    { hoveringOnMute: s } = this.state,
                    l =
                        void 0 === this.lastSpeakingWhileMutedNotificationTime ||
                        Date.now() - this.lastSpeakingWhileMutedNotificationTime > tg;
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
                              this.speakingWhileMutedTooltipTimeout.start(tm, () =>
                                  this.setState({ shouldShowSpeakingWhileMutedTooltip: !1 }),
                              );
                      })
                    : (this.setState({ shouldShowSpeakingWhileMutedTooltip: !1 }),
                      this.speakingWhileMutedTooltipTimeout.stop());
            }),
            to(this, "renderNameTag", (e) => {
                let { currentUser: t, isDisplayNameStylesEnabled: n } = this.props;
                if (null == t) return null;
                let i = n && null != e;
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)("div", {
                            className: ta.panelTitleContainer,
                            children: (0, r.jsx)(e7.Z, {
                                className: o()({ [ta.withDisplayNameStyles]: i }),
                                children: (0, r.jsx)(Q.Z, {
                                    userName: e2.ZP.getName(t),
                                    displayNameStyles: e,
                                    effectDisplayType: this.state.hovered ? q.F.ANIMATED : q.F.STATIC,
                                    loop: !0,
                                    inProfile: !0,
                                }),
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: ta.panelSubtextContainer,
                            children: (0, r.jsx)(e5.Z, { children: this.renderStatus() }),
                        }),
                    ],
                });
            });
    }
}
function tA(e) {
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
        className: ta.buttons,
        style: S,
        children: [
            (0, r.jsx)(tP, {
                accountContainerRef: O,
                selfMute: n,
                serverMute: a,
                suppress: s,
                awaitingRemote: i,
                onMouseEnter: d,
                onMouseLeave: f,
                onClick: p,
                onContextMenu: h,
                iconForeground: null != y ? ta.iconForeground : void 0,
                nameplate: y,
                shouldShowInputDeviceChangedTooltip: v,
                shouldShowSpeakingWhileMutedTooltip: l,
                dismissTooltips: T,
            }),
            (0, r.jsx)(tw, {
                selfDeaf: t,
                serverDeaf: o,
                onClick: _,
                onContextMenu: m,
                awaitingRemote: i,
                iconForeground: null != y ? ta.iconForeground : void 0,
                nameplate: y,
                shouldShowOutputDeviceChangedTooltip: I,
                dismissTooltips: T,
            }),
            (0, r.jsx)(tR, {
                isEligibleForPomelo: c,
                webBuildOverride: u,
                onClick: g,
                onContextMenu: E,
                dismissibleContents: b.settings,
                iconForeground: null != y ? ta.iconForeground : void 0,
                nameplate: y,
                shouldShowInputDeviceChangedTooltip: v,
                shouldShowOutputDeviceChangedTooltip: I,
            }),
        ],
    });
}
function tC(e) {
    let { shouldShowDeviceChangedNotifications: t } = (0, e8.P)({
            location: "Account.useDeviceChangedTooltip",
            autoTrackExposure: !1,
        }),
        n = (0, u.e7)([eZ.Z], () => null != eZ.Z.getChannelId()),
        r = (0, en.Fh)(e),
        a = i.useRef(new f.V7()),
        [o, s] = i.useState(!1);
    i.useEffect(() => {
        n &&
            r &&
            ((0, e8._)({
                location: "Account.useDeviceChangedTooltip (exposure tracking)",
                autoTrackExposure: !0,
            }),
            t &&
                (s(!0),
                a.current.start(ty, () => {
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
function tN() {
    var e;
    let t = (0, u.e7)([eY.default], () => eY.default.getCurrentUser()),
        n = (0, u.e7)([eM.default], () => eM.default.getId()),
        {
            activities: i,
            streaming: a,
            status: o,
        } = (0, u.cj)([eV.Z], () => {
            let e = eV.Z.getActivities();
            return {
                activities: e,
                streaming:
                    null !=
                    e.find((e) => {
                        let { type: t } = e;
                        return t === e9.IIU.STREAMING;
                    }),
                status: eV.Z.getStatus(),
            };
        }),
        s = (0, u.e7)([ej.Z], () => ej.Z.getAnyStreamForUser(n)),
        c = (0, b.Z)({ userId: n }),
        f = e2.ZP.useUserTag(t, { decoration: "never" }),
        _ = (0, u.e7)([eH.Z], () => eH.Z.hidePersonalInformation),
        p = (0, u.e7)([eZ.Z, ek.Z], () => {
            let e = eZ.Z.getChannelId();
            return null != e ? ek.Z.getChannel(e) : null;
        }),
        { mute: h, selfMute: g, suppress: E } = (0, ev.Z)(p),
        { selfDeaf: y, deaf: O } = (0, eO.Z)(p),
        I = (0, u.e7)([w.C], () => {
            var e;
            return (0, D.fD)()
                ? null == (e = w.C.getCurrentBuildOverride().overrides)
                    ? void 0
                    : e.discord_web
                : null;
        }),
        T = (0, u.e7)([eW.Z], () => eW.Z.getPremiumTypeSubscription()),
        S = (0, u.e7)([eB.Z], () => eB.Z.getSpeakingWhileMuted()),
        A = (0, u.e7)([x.Z], () => x.Z.isFullscreenInContext()),
        R = (0, u.e7)([eG.Z], () => eG.Z.hasLayers()),
        P = (0, m.s9z)(m.JQI) || R || e1.s.isDisallowPopupsSet() || A,
        L = (0, el.b)(),
        j = (0, u.e7)([J.Z], () => null != J.Z.getAwaitingRemoteSessionInfo()),
        M = (0, u.e7)([eF.Z], () => eF.Z.getGuildId()),
        k = e0.ZP.canUsePremiumGuildMemberProfile(t),
        U = (null == t || null == (e = t.avatarDecoration) ? void 0 : e.skuId) === te.rL,
        { voiceActivityStatusEnabled: G } = (0, v.U)({ location: "Account" }),
        [B, Z] = (0, ee.G)(null != M ? M : null),
        [F, V] = (0, Y.b)(),
        H = K.J.useExperiment({ location: "Account" }).enabled,
        { analyticsLocations: W } = (0, N.ZP)(C.Z.ACCOUNT),
        q = (0, ei.K)({ user: t }),
        { isQuestBarEmpty: X, hasLoadedQuestBar: Q } = (0, ed.Ws)({ location: tn.dr.CONFLICT_CHECKS }),
        $ = (0, u.e7)([ef.Z, eY.default, eU.Z], () => {
            let e,
                t = ef.Z.getSyncingWith(),
                n = ef.Z.getActivity(),
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
        et = (0, e_.k)({ location: "AccountConnected" }),
        en = {
            avatar: [],
            settings: [],
        };
    !P &&
        (k && en.settings.push(d.z.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK),
        U && en.avatar.push(d.z.PREMIUM_SUBSCRIPTION_APRIL_MARKETING_DECO_TOOLTIP),
        H && en.avatar.push(d.z.DISPLAY_NAME_STYLES_COACHMARK),
        et && en.avatar.push(d.z.WIDGETS_RTC_UPSELL_COACHMARK));
    let er = (0, z.Y)({ location: "AccountConnected" }),
        { shouldShowTooltip: ea, dismissTooltip: eo } = tC(tr.h7.AUDIO_INPUT),
        { shouldShowTooltip: es, dismissTooltip: ec } = tC(tr.h7.AUDIO_OUTPUT);
    return (0, r.jsx)(N.Gt, {
        value: W,
        children: (0, r.jsx)(tS, {
            currentUser: t,
            activities: i,
            applicationStream: s,
            voiceChannel: p,
            dismissibleContents: en,
            visibleRecurringAvatarDc: B,
            markRecurringAvatarDcAsDismissed: Z,
            visibleRecurringDoNotDisturbReminderPopoverDc: F,
            markRecurringDoNotDisturbReminderPopoverDcAsDismissed: V,
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
            voiceActivityStatusEnabled: G,
            nameplate: q,
            selectedGuildId: M,
            isQuestBarEmpty: X,
            hasLoadedQuestBar: Q,
            isListenAlongVisible: $,
            isDisplayNameStylesEnabled: er,
            shouldShowInputDeviceChangedTooltip: ea,
            shouldShowOutputDeviceChangedTooltip: es,
            dismissInputDeviceChangedTooltip: eo,
            dismissOutputDeviceChangedTooltip: ec,
        }),
    });
}
function tR(e) {
    let t,
        n,
        a,
        {
            webBuildOverride: o,
            isEligibleForPomelo: s,
            onClick: l,
            onContextMenu: c,
            dismissibleContents: u,
            iconForeground: f,
            nameplate: _,
            shouldShowInputDeviceChangedTooltip: h,
            shouldShowOutputDeviceChangedTooltip: g,
        } = e,
        E = i.useRef(null),
        { showRefreshedAudioContextMenu: b } = (0, e4.e)({ location: "SettingsCogButton" }),
        y = !b && (h || g),
        { name: O } = (0, en.p6)(tr.h7.AUDIO_INPUT),
        { name: v } = (0, en.p6)(tr.h7.AUDIO_OUTPUT);
    !b && h
        ? ((t = ti.intl.format(ti.t["18wnuL"], { inputDeviceName: O })),
          (n = ti.intl.formatToPlainString(ti.t["18wnuL"], { inputDeviceName: O })),
          (a = ti.intl.formatToPlainString(ti.t["18wnuL"], { inputDeviceName: O })))
        : !b && g
          ? ((t = ti.intl.format(ti.t["f+DDY2"], { outputDeviceName: v })),
            (n = ti.intl.formatToPlainString(ti.t["f+DDY2"], { outputDeviceName: v })),
            (a = ti.intl.formatToPlainString(ti.t["f+DDY2"], { outputDeviceName: v })))
          : (t =
                null != o
                    ? ti.intl.formatToPlainString(ti.t.Gzh6ZG, { webBuildOverride: o.id })
                    : ti.intl.string(ti.t.cduTBA));
    let I = m.ewm,
        T = (0, p.i)();
    I = null != o ? m.bgT : s ? m.Ncx : T.Component;
    let [S, A] = (0, W.US)(u),
        C = (e) =>
            e === d.z.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK
                ? () => (0, r.jsx)(eh.Z, {})
                : () => (0, r.jsx)(r.Fragment, {});
    return (0, r.jsx)(m.yRy, {
        targetElementRef: E,
        position: "top",
        align: "center",
        shouldShow: null != S,
        renderPopout: C(S),
        children: () =>
            (0, r.jsx)(
                e6.Z,
                tc(
                    ts(
                        {
                            ref: E,
                            tooltipText: t,
                            tooltipColor: y ? m.FGA.GREEN : void 0,
                            tooltipForceOpen: y,
                            tooltipClassName: ta.accountButtonsTooltip,
                            tooltipContentClassName: ta.accountButtonsTooltipContent,
                            tooltipPositionKeyStemOverride: n,
                            "aria-label": y ? a : void 0,
                            onClick: l,
                            onContextMenu: c,
                            icon: (0, r.jsx)(I, {
                                size: "refresh_sm",
                                color: "currentColor",
                                className: f,
                            }),
                        },
                        T.events,
                    ),
                    { plated: null != _ },
                ),
            ),
    });
}
function tP(e) {
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
        U = (0, eS.z)(P),
        G = (0, u.e7)([eZ.Z], () => eZ.Z.isConnected()),
        { Component: B, events: F, play: V } = R,
        H = a || s ? m.v0G : B,
        Y = (0, j.Z)(n, a, s, l),
        K = x ? ti.intl.string(ti.t.ARRV6u) : null;
    t = O
        ? ti.intl.string(ti.t["29gnR0"])
        : null != K
          ? (0, r.jsxs)("div", {
                className: ta.tooltipWithSubtext,
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
        event: e9.CkL.OPEN_VOICE_FILTER_POPOUT,
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
                    er(!0), (e = setTimeout(() => er(!1), tE));
                }, tb)),
            () => {
                er(!1), clearTimeout(e);
            }
        );
    }, [G]);
    let ei = i.useCallback(() => {
            D || (0, eN.r5)();
        }, [D]),
        ea = T ? m.TVs.colors.STATUS_DANGER : x ? m.TVs.colors.STATUS_WARNING : "currentColor",
        eo = T || x,
        es = (0, ec.Z)({ location: "Account" }),
        { name: el } = (0, en.p6)(tr.h7.AUDIO_INPUT),
        { showRefreshedAudioContextMenu: eu } = (0, e4.e)({ location: "MicrophoneButton" }),
        { enabledInputProfiles: ed } = (0, eb.c)({ location: "MicrophoneButton" });
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
                          className: o()(ta.micButtonParent, {
                              [ta.hasColorGlow]: eo,
                              [ta.popoutOpen]: a,
                          }),
                          children: [
                              (0, r.jsx)(e6.Z, {
                                  "aria-checked": T,
                                  "aria-label": ti.intl.string(ti.t["w4m94+"]),
                                  className: o()({ [ta.micButtonWithMenu]: !0 }),
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
                              (0, r.jsx)(e6.Z, {
                                  "aria-label": v
                                      ? ti.intl.formatToPlainString(ti.t["18wnuL"], { inputDeviceName: el })
                                      : ti.intl.string(ti.t.fRzCbG),
                                  className: o()(ta.buttonChevron, { [ta.popoutOpen]: a }),
                                  disabled: l,
                                  icon: (0, r.jsx)(s, {
                                      className: ta.buttonChevronIcon,
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
                                  tooltipClassName: ta.accountButtonsTooltip,
                                  tooltipColor: v ? m.FGA.GREEN : void 0,
                                  tooltipContentClassName: ta.accountButtonsTooltipContent,
                                  tooltipForceOpen: v,
                                  tooltipPositionKeyStemOverride: v
                                      ? ti.intl.formatToPlainString(ti.t["18wnuL"], { inputDeviceName: el })
                                      : void 0,
                                  tooltipShouldShow: !a,
                                  tooltipText: v
                                      ? ti.intl.format(ti.t["18wnuL"], { inputDeviceName: el })
                                      : ti.intl.string(ti.t.fRzCbG),
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
                  className: o()(ta.micButtonParent, { [ta.hasColorGlow]: eo }),
                  children: [
                      (0, r.jsx)(e6.Z, {
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
                          className: o()({ [ta.micButtonWithMenu]: q }),
                          orangeGlow: x,
                          redGlow: T,
                          "aria-label": ti.intl.string(ti.t["w4m94+"]),
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
                                      i = tu(e, ["onClick"]),
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
                                                          ts(
                                                              {
                                                                  ref: A,
                                                                  plated: null != b,
                                                                  tooltipForceOpen: et,
                                                                  tooltipColor: et ? m.FGA.GREEN : void 0,
                                                                  tooltipContentClassName: et
                                                                      ? ta.voiceFilterWarning
                                                                      : void 0,
                                                                  tooltipText: et
                                                                      ? (0, r.jsxs)(r.Fragment, {
                                                                            children: [
                                                                                (0, r.jsx)("img", {
                                                                                    alt:
                                                                                        null != U
                                                                                            ? ti.intl.string(U.name)
                                                                                            : "",
                                                                                    src: null == U ? void 0 : U.iconURL,
                                                                                    draggable: !1,
                                                                                }),
                                                                                (0, r.jsx)(m.Text, {
                                                                                    variant: "text-sm/medium",
                                                                                    color: "always-white",
                                                                                    children: ti.intl.string(
                                                                                        ti.t.VlC1dX,
                                                                                    ),
                                                                                }),
                                                                            ],
                                                                        })
                                                                      : ti.intl.string(ti.t.Hapb4O),
                                                                  icon: (0, r.jsx)(o, {
                                                                      className: ta.buttonChevronIcon,
                                                                      size: "custom",
                                                                      width: 12,
                                                                      height: 12,
                                                                      color: ea,
                                                                  }),
                                                                  role: "button",
                                                                  className: ta.buttonChevron,
                                                                  orangeGlow: x,
                                                                  redGlow: T,
                                                                  "aria-label": ti.intl.string(ti.t.Hapb4O),
                                                                  disabled: l,
                                                                  onClick: (e) => {
                                                                      a(tt.L.INDIRECT_ACTION),
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
function tw(e) {
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
        { name: O } = (0, en.p6)(tr.h7.AUDIO_OUTPUT),
        { showRefreshedAudioContextMenu: v } = (0, e4.e)({ location: "HeadphonesButton" }),
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
                          className: o()(ta.micButtonParent, {
                              [ta.hasColorGlow]: R,
                              [ta.popoutOpen]: l,
                          }),
                          children: [
                              (0, r.jsx)(e6.Z, {
                                  "aria-checked": p,
                                  "aria-label": ti.intl.string(ti.t.wjcRFR),
                                  className: ta.micButtonWithMenu,
                                  disabled: a,
                                  icon: (0, r.jsx)(y, {
                                      size: "custom",
                                      width: 20,
                                      height: 20,
                                      color: p ? m.TVs.colors.STATUS_DANGER : "currentColor",
                                      className: c,
                                  }),
                                  iconForeground: p ? ta.strikethrough : void 0,
                                  innerClassName: o()({ [ta.redIcon]: n }),
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
                                      ? ti.intl.formatToPlainString(ti.t["f+DDY2"], { outputDeviceName: O })
                                      : ti.intl.string(ti.t.aA4VcX),
                                  className: o()(ta.buttonChevron, { [ta.popoutOpen]: l }),
                                  disabled: a,
                                  icon: (0, r.jsx)(f, {
                                      className: ta.buttonChevronIcon,
                                      size: "custom",
                                      width: 12,
                                      height: 12,
                                      color: p ? m.TVs.colors.STATUS_DANGER : "currentColor",
                                  }),
                                  onClick: i,
                                  onContextMenu: i,
                                  plated: null != u,
                                  redGlow: p,
                                  tooltipClassName: ta.accountButtonsTooltip,
                                  tooltipColor: d ? m.FGA.GREEN : void 0,
                                  tooltipContentClassName: ta.accountButtonsTooltipContent,
                                  tooltipForceOpen: d,
                                  tooltipPositionKeyStemOverride: d
                                      ? ti.intl.formatToPlainString(ti.t["f+DDY2"], { outputDeviceName: O })
                                      : void 0,
                                  tooltipShouldShow: !l,
                                  tooltipText: d
                                      ? ti.intl.format(ti.t["f+DDY2"], { outputDeviceName: O })
                                      : ti.intl.string(ti.t.aA4VcX),
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
                  innerClassName: o()({ [ta.redIcon]: n }),
                  iconForeground: p ? ta.strikethrough : void 0,
                  role: "switch",
                  redGlow: p,
                  "aria-label": ti.intl.string(ti.t.wjcRFR),
                  "aria-checked": p,
                  disabled: a,
              }),
          });
}
