n.d(t, {
    Z: () => tg,
    m: () => tu,
}),
    n(388685),
    n(539854);
var i = n(255367),
    r = n(73800),
    s = n(120356),
    a = n.n(s),
    l = n(392711),
    o = n.n(l),
    c = n(374470),
    d = n(442837),
    u = n(704215),
    m = n(846519),
    p = n(400354),
    g = n(789639),
    h = n(930295),
    f = n(481060),
    b = n(239091),
    x = n(230711),
    _ = n(410575),
    j = n(586902),
    E = n(493773),
    C = n(980591),
    O = n(468363),
    v = n(326255),
    S = n(771173),
    T = n(963056),
    I = n(570928),
    N = n(100527),
    y = n(906732),
    A = n(676742),
    P = n(1585),
    R = n(304761),
    D = n(865427),
    Z = n(358221),
    w = n(571250),
    k = n(628581),
    L = n(55311),
    M = n(575175),
    B = n(522651),
    U = n(795318),
    V = n(338390),
    G = n(526371),
    F = n(64220),
    H = n(427217),
    z = n(243778),
    W = n(594928),
    Y = n(181430),
    K = n(821795),
    q = n(287647),
    X = n(892567),
    J = n(258609),
    Q = n(53891),
    $ = n(291533),
    ee = n(427347),
    et = n(72897),
    en = n(50697),
    ei = n(90042),
    er = n(78933),
    es = n(850020),
    ea = n(379839),
    el = n(359135),
    eo = n(516817),
    ec = n(332473),
    ed = n(963590),
    eu = n(210308),
    em = n(667105),
    ep = n(768419),
    eg = n(184301),
    eh = n(52538),
    ef = n(670188),
    eb = n(321614),
    ex = n(879815),
    e_ = n(294629),
    ej = n(875527),
    eE = n(702977),
    eC = n(56848),
    eO = n(940315),
    ev = n(378441),
    eS = n(358820),
    eT = n(723547),
    eI = n(361045),
    eN = n(74650),
    ey = n(306609),
    eA = n(170293),
    eP = n(8404),
    eR = n(199902),
    eD = n(314897),
    eZ = n(592125),
    ew = n(831506),
    ek = n(819640),
    eL = n(131951),
    eM = n(19780),
    eB = n(914010),
    eU = n(885110),
    eV = n(246946),
    eG = n(594174),
    eF = n(78839),
    eH = n(626135),
    ez = n(768581),
    eW = n(572004),
    eY = n(459273),
    eK = n(585483),
    eq = n(70956),
    eX = n(823379),
    eJ = n(74538),
    eQ = n(374023),
    e$ = n(51144),
    e0 = n(998502),
    e3 = n(578817),
    e1 = n(422202),
    e8 = n(870569),
    e6 = n(345243),
    e2 = n(115530),
    e5 = n(981631),
    e7 = n(215023),
    e4 = n(921944),
    e9 = n(46140),
    te = n(65154),
    tt = n(388032),
    tn = n(452414);
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
function tr(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
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
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let ta = e0.ZP.getEnableHardwareAcceleration() ? f.Xo$ : f.qEK,
    tl = 2 * eq.Z.Millis.MINUTE,
    to = 3 * eq.Z.Millis.SECOND,
    tc = 5 * eq.Z.Millis.SECOND;
function td(e) {
    let {
            ref: t,
            speaking: n,
            streaming: s,
            currentUser: l,
            status: o,
            handleClick: c,
            handleMouseLeave: d,
            renderNameTag: u,
            nameplate: m,
            "data-jump-section": p,
        } = e,
        g = r.useRef(null),
        h = null != t ? t : g,
        b = (0, A.Z)(null == l ? void 0 : l.avatarDecoration),
        x = (0, ez.NZ)({
            avatarDecoration: b,
            size: (0, P.y9)(f.EFr.SIZE_32),
        }),
        j = (0, f.dQu)(f.TVs.modules.guildbar.AVATAR_SIZE),
        E = (0, V.Z)("Account") ? 32 : j,
        {
            updateOpenPopoutRef: O,
            highlightBadge: v,
            setHighlightBadge: S,
        } = (function () {
            let e = r.useRef(null),
                t = r.useCallback((t) => {
                    e.current = () => {
                        t.onMouseDown(), t.onClick();
                    };
                }, []),
                [n, i] = r.useState(),
                [s, a] = r.useState(!1);
            return (
                (0, C.Z)(() => a(!0), 750),
                r.useEffect(() => {
                    let t = (t) => {
                        var n;
                        let { highlightBadge: r } = t;
                        null != r && i(r), null == (n = e.current) || n.call(e);
                    };
                    return (
                        eK.S.subscribe(e5.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, t),
                        () => {
                            eK.S.unsubscribe(e5.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, t);
                        }
                    );
                }),
                {
                    updateOpenPopoutRef: t,
                    highlightBadge: s ? n : void 0,
                    setHighlightBadge: i,
                }
            );
        })(),
        T = (0, ea.A)(m);
    return null == l
        ? null
        : (0, i.jsx)(_.Z, {
              object: e5.qAy.AVATAR,
              children: (0, i.jsx)(ef.Z, {
                  user: l,
                  targetElementRef: h,
                  clickTrap: !0,
                  preload: () =>
                      (0, eg.Z)(l.id, l.getAvatarURL(void 0, ef.I), {
                          type: "account_popout",
                          withMutualGuilds: !1,
                          withMutualFriends: !1,
                      }),
                  renderPopout: (e, t) => {
                      let { closePopout: n, setPopoutRef: r } = e;
                      return (0, i.jsx)(er.Z, {
                          currentUser: l,
                          highlightBadge: v,
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
                      d(), S(void 0);
                  },
                  children: (e) => (
                      O(e),
                      (0, i.jsxs)(
                          f.P3F,
                          ts(
                              tr(
                                  {
                                      innerRef: h,
                                      style: T,
                                  },
                                  e,
                              ),
                              {
                                  onClick: (t) => {
                                      var n;
                                      null == (n = e.onClick) || n.call(e, t), null == c || c(t);
                                  },
                                  "aria-label": tt.intl.string(tt.t["3Uj+2t"]),
                                  "data-jump-section": p,
                                  className: a()(tn.avatarWrapper, { [tn.plated]: null != m }),
                                  children: [
                                      (0, i.jsx)(ta, {
                                          size: f.EFr["SIZE_".concat(E)],
                                          src: l.getAvatarURL(void 0, E - 4, !1),
                                          avatarDecoration: x,
                                          "aria-label": l.username,
                                          status: s ? e5.Skl.STREAMING : o,
                                          isSpeaking: n,
                                          className: tn.avatar,
                                      }),
                                      (0, i.jsx)("div", {
                                          className: a()(tn.nameTag, { [tn.canCopy]: eW.wS }),
                                          children: u(null == l ? void 0 : l.displayNameStyles),
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
            { speakingWhileMuted: i, occluded: r } = this.props;
        r !== n && this.handleOccludedChanged(), i !== t && this.handleSpeakingWhileMutedChanged();
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
        return (0, i.jsx)(f.UkV, {
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
                status: s,
                userTag: a,
                voiceActivityStatusEnabled: l,
                voiceChannel: o,
            } = this.props;
        if (null == r) return null;
        if (
            (0, v.Z)({
                activities: t,
                status: s,
                applicationStream: n,
                voiceChannel: l ? o : void 0,
            })
        )
            return (0, i.jsx)(I.Z, {
                hoverText: a,
                forceHover: e,
                children: (0, i.jsx)(S.Z, {
                    location: "Account",
                    user: r,
                    activities: t,
                    applicationStream: n,
                    voiceChannel: l ? o : void 0,
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
            ? (0, i.jsx)(I.Z, {
                  hoverText: a,
                  forceHover: e,
                  children: (0, i.jsx)(H.Z, {
                      activity: c,
                      emojiClassName: tn.emoji,
                      className: tn.customStatus,
                  }),
              })
            : null != s && s !== e5.Skl.UNKNOWN && r.hasUniqueUsername()
              ? (0, i.jsx)(I.Z, {
                    hoverText: a,
                    forceHover: e,
                    children: (0, i.jsx)(T.Z, { text: e$.ZP.humanizeStatus(s) }),
                })
              : a;
    }
    renderAvatarWithPopout(e) {
        let {
            focusSectionProps: { "data-jump-section": t },
            onClick: n,
        } = e;
        return (0, i.jsx)(
            td,
            ts(tr({}, this.props), {
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
            markRecurringAvatarDcAsDismissed: s,
        } = this.props;
        if (null == t) return null;
        if (!this.props.isQuestBarEmpty) return this.renderAvatarWithPopout({ focusSectionProps: e });
        if (r === u.z.GUILD_TAG_AVAILABLE_COACHMARK) {
            var a;
            return (0, i.jsx)(Q.ZP, {
                guildId: null != (a = this.props.selectedGuildId) ? a : null,
                onDismiss: s,
                targetElementRef: this.avatarWithPopoutRef,
                children: this.renderAvatarWithPopout({ focusSectionProps: e }),
            });
        }
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(eu.Z, {
                    groupName: e4.R.ACCOUNT_NAME_ZONE,
                    targetElementRef: this.avatarWithPopoutRef,
                }),
                (0, i.jsx)(z.ZP, {
                    contentTypes: n.avatar,
                    groupName: e4.R.ACCOUNT_NAME_ZONE,
                    children: (t) => {
                        let { visibleContent: n, markAsDismissed: r } = t;
                        switch (n) {
                            case u.z.PREMIUM_SUBSCRIPTION_APRIL_MARKETING_DECO_TOOLTIP:
                                return (0, i.jsx)(F.Z, {
                                    markAsDismissed: r,
                                    targetElementRef: this.avatarWithPopoutRef,
                                    children: () => this.renderAvatarWithPopout({ focusSectionProps: e }),
                                });
                            case u.z.EXPIRING_STATUS_COACHMARK:
                                return (0, i.jsx)(ei.Z, {
                                    markAsDismissed: r,
                                    targetElementRef: this.avatarWithPopoutRef,
                                    children: (t) => {
                                        let { onClick: n } = t;
                                        return this.renderAvatarWithPopout({
                                            focusSectionProps: e,
                                            onClick: n,
                                        });
                                    },
                                });
                            case u.z.DISPLAY_NAME_STYLES_COACHMARK:
                                return (0, i.jsx)(q.e, {
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
        let { currentUser: e, nameplate: t, voiceChannel: n, isQuestBarEmpty: r, isListenAlongVisible: s } = this.props,
            l = this.state.hovered;
        return null == e
            ? null
            : (0, i.jsx)(f.Wdt, {
                  children: (e) =>
                      (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsxs)("div", {
                                  ref: this.containerRef,
                                  className: a()(tn.container, {
                                      [tn.containerRtcOpened]: null != n,
                                      [tn.containerQuestBarVisible]: !r,
                                      [tn.containerListenAlongVisible]: s,
                                  }),
                                  onMouseEnter: this.handleMouseEnter,
                                  onMouseLeave: this.handleMouseLeave,
                                  children: [
                                      (0, i.jsx)(eo.Z, {
                                          nameplate: t,
                                          hovered: l,
                                          placement: el.i.ACCOUNT,
                                      }),
                                      this.renderNameZone(e),
                                      (0, i.jsx)(
                                          tm,
                                          ts(tr({}, this.props, this.state), {
                                              accountContainerRef: this.containerRef,
                                              handleMouseEnterMute: this.handleMouseEnterMute,
                                              handleMouseLeaveMute: this.handleMouseLeaveMute,
                                              handleToggleSelfMute: this.handleToggleSelfMute,
                                              handleToggleSelfDeaf: this.handleToggleSelfDeaf,
                                              handleInputAudioContextMenu: this.handleInputAudioContextMenu,
                                              handleOutputAudioContextMenu: this.handleOutputAudioContextMenu,
                                              handleOpenAccountSettings: this.handleOpenAccountSettings,
                                              handleOpenSettingsContextMenu: this.handleOpenSettingsContextMenu,
                                          }),
                                      ),
                                  ],
                              }),
                              (0, i.jsx)(ee.Z, {}),
                              (0, i.jsx)(G.Z, {}),
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
                (0, M.Z)(e, t, e5.jXE.ACCOUNT_PANEL), (0, B.v)(N.Z.ACCOUNT, B.d.MIC, n);
            }),
            ti(this, "handleToggleSelfDeaf", () => {
                let { serverDeaf: e, selfDeaf: t } = this.props;
                (0, L.Z)(e, e5.jXE.ACCOUNT_PANEL), (0, B.v)(N.Z.ACCOUNT, B.d.DEAFEN, !t);
            }),
            ti(this, "handleOpenAccountSettings", () => {
                var e, t, n, i;
                null == (e = (t = this.props).dismissInputDeviceChangedTooltip) || e.call(t),
                    null == (n = (i = this.props).dismissOutputDeviceChangedTooltip) || n.call(i),
                    this.handleOpenSettings();
            }),
            ti(this, "handleOpenSettings", function () {
                let e =
                        arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : (0, e3.Q)("Account").jumpToVoice && eM.Z.isConnected()
                              ? e5.oAB.VOICE
                              : e5.oAB.ACCOUNT,
                    t = arguments.length > 1 ? arguments[1] : void 0,
                    n = arguments.length > 2 ? arguments[2] : void 0;
                x.Z.open(e, t, n);
            }),
            ti(this, "handleOpenSettingsContextMenu", (e) => {
                let { currentUser: t } = this.props;
                null != t &&
                    (0, b.jW)(e, async () => {
                        let { default: e } = await n.e("2535").then(n.bind(n, 923422));
                        return (n) =>
                            (0, i.jsx)(
                                e,
                                ts(tr({}, n), {
                                    user: t,
                                    premiumSubscription: this.props.premiumSubscription,
                                    webBuildOverride: this.props.webBuildOverride,
                                    onInteraction: (0, U.u)("UserSettingsCogContextMenu", N.Z.ACCOUNT),
                                }),
                            );
                    });
            }),
            ti(this, "audioOnInteractionHandler", (0, U.u)("AudioDeviceMenu", N.Z.ACCOUNT)),
            ti(this, "handleInputAudioContextMenu", (e, t) => {
                (0, b.jW)(e, async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 659580));
                    return () => {
                        let { enabledInputProfiles: n } = (0, eb.c)({ location: "Account" });
                        return (0, i.jsx)(y.Gt, {
                            value: t,
                            children: (0, i.jsx)(e, {
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
                (0, b.jW)(e, async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 659580));
                    return () =>
                        (0, i.jsx)(y.Gt, {
                            value: t,
                            children: (0, i.jsx)(e, {
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
            ti(this, "handleCopyTag", () => {
                let { currentUser: e } = this.props,
                    { shouldShowNametagTooltip: t, copiedStreak: n } = this.state;
                if (null == e) return;
                (0, eW.JG)(
                    e$.ZP.getUserTag(e, {
                        decoration: "never",
                        identifiable: "always",
                    }),
                ),
                    eH.default.track(e5.rMx.TEXT_COPIED, { type: "User Tag" });
                let i = {
                    shouldShowCopiedFeedback: !0,
                    shouldShowNametagTooltip: !0,
                };
                t || (i.copiedStreak = n + 1),
                    this.setState(i, () => {
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
                        speakingWhileMuted: i,
                        occluded: r,
                        shouldShowInputDeviceChangedTooltip: s,
                        shouldShowOutputDeviceChangedTooltip: a,
                    } = this.props,
                    { hoveringOnMute: l } = this.state,
                    o =
                        void 0 === this.lastSpeakingWhileMutedNotificationTime ||
                        Date.now() - this.lastSpeakingWhileMutedNotificationTime > tl;
                i
                    ? l ||
                      !e ||
                      t ||
                      n ||
                      r ||
                      !o ||
                      s ||
                      a ||
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
                let { currentUser: t, isDisplayNameStylesEnabled: n } = this.props;
                return null == t
                    ? null
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)("div", {
                                  className: tn.panelTitleContainer,
                                  children: (0, i.jsx)(e2.Z, {
                                      className: a()({ [tn.withDisplayNameStyles]: n && null != e }),
                                      children: (0, i.jsx)(X.Z, {
                                          userName: e$.ZP.getName(t),
                                          displayNameStyles: e,
                                          effectDisplayType: this.state.hovered ? K.F.ANIMATED : K.F.STATIC,
                                          loop: !0,
                                          inProfile: !0,
                                      }),
                                  }),
                              }),
                              (0, i.jsx)("div", {
                                  className: tn.panelSubtextContainer,
                                  children: (0, i.jsx)(e6.Z, { children: this.renderStatus() }),
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
            serverMute: s,
            serverDeaf: a,
            suppress: l,
            shouldShowSpeakingWhileMutedTooltip: o,
            isEligibleForPomelo: c,
            webBuildOverride: d,
            handleMouseEnterMute: u,
            handleMouseLeaveMute: m,
            handleToggleSelfDeaf: p,
            handleToggleSelfMute: g,
            handleInputAudioContextMenu: h,
            handleOutputAudioContextMenu: b,
            handleOpenAccountSettings: x,
            handleOpenSettingsContextMenu: _,
            dismissibleContents: j,
            nameplate: E,
            accountContainerRef: C,
            shouldShowInputDeviceChangedTooltip: O = !1,
            shouldShowOutputDeviceChangedTooltip: v = !1,
        } = e,
        S = (0, ea.A)(E),
        { name: T } = (0, et.p6)(te.h7.AUDIO_INPUT),
        { name: I } = (0, et.p6)(te.h7.AUDIO_OUTPUT);
    return (0, i.jsxs)("div", {
        className: tn.buttons,
        style: S,
        children: [
            (0, i.jsx)(tf, {
                accountContainerRef: C,
                selfMute: n,
                serverMute: s,
                suppress: l,
                awaitingRemote: r,
                tooltipText: o ? tt.intl.string(tt.t["29gnR0"]) : void 0,
                tooltipColor: o ? f.FGA.GREEN : void 0,
                tooltipForceOpen: o || void 0,
                onMouseEnter: u,
                onMouseLeave: m,
                onClick: g,
                onContextMenu: h,
                iconForeground: null != E ? tn.iconForeground : void 0,
                nameplate: E,
            }),
            (0, i.jsx)(tb, {
                selfDeaf: t,
                serverDeaf: a,
                onClick: p,
                onContextMenu: b,
                awaitingRemote: r,
                iconForeground: null != E ? tn.iconForeground : void 0,
                nameplate: E,
            }),
            (0, i.jsx)(th, {
                isEligibleForPomelo: c,
                webBuildOverride: d,
                onClick: x,
                onContextMenu: _,
                dismissibleContents: j.settings,
                iconForeground: null != E ? tn.iconForeground : void 0,
                nameplate: E,
                tooltipText: O
                    ? tt.intl.format(tt.t["18wnuL"], { inputDeviceName: T })
                    : v
                      ? tt.intl.format(tt.t["f+DDY2"], { outputDeviceName: I })
                      : void 0,
                tooltipColor: O || v ? f.FGA.GREEN : void 0,
                tooltipForceOpen: O || v,
                "aria-label": O
                    ? tt.intl.formatToPlainString(tt.t["18wnuL"], { inputDeviceName: T })
                    : v
                      ? tt.intl.formatToPlainString(tt.t["f+DDY2"], { outputDeviceName: I })
                      : void 0,
            }),
        ],
    });
}
function tp(e) {
    let { shouldShowDeviceChangedNotifications: t } = (0, e1.P)({
            location: "Account.useDeviceChangedTooltip",
            autoTrackExposure: !1,
        }),
        n = (0, d.e7)([eM.Z], () => null != eM.Z.getChannelId()),
        i = (0, et.Fh)(e),
        s = r.useRef(new m.V7()),
        [a, l] = r.useState(!1);
    r.useEffect(() => {
        n &&
            i &&
            ((0, e1._)({
                location: "Account.useDeviceChangedTooltip (exposure tracking)",
                autoTrackExposure: !0,
            }),
            t &&
                (l(!0),
                s.current.start(tc, () => {
                    l(!1);
                })));
    }, [n, i, t]);
    let o = r.useCallback(() => {
        l(!1), s.current.stop();
    }, []);
    return (
        (0, E.zq)(() => {
            s.current.stop();
        }),
        {
            shouldShowTooltip: a,
            dismissTooltip: o,
        }
    );
}
function tg() {
    var e;
    let t = (0, d.e7)([eG.default], () => eG.default.getCurrentUser()),
        n = (0, d.e7)([eD.default], () => eD.default.getId()),
        {
            activities: r,
            streaming: s,
            status: a,
        } = (0, d.cj)([eU.Z], () => {
            let e = eU.Z.getActivities();
            return {
                activities: e,
                streaming:
                    null !=
                    e.find((e) => {
                        let { type: t } = e;
                        return t === e5.IIU.STREAMING;
                    }),
                status: eU.Z.getStatus(),
            };
        }),
        l = (0, d.e7)([eR.Z], () => eR.Z.getAnyStreamForUser(n)),
        c = (0, j.Z)({ userId: n }),
        m = e$.ZP.useUserTag(t, { decoration: "never" }),
        p = (0, d.e7)([eV.Z], () => eV.Z.hidePersonalInformation),
        g = (0, d.e7)([eM.Z, eZ.Z], () => {
            let e = eM.Z.getChannelId();
            return null != e ? eZ.Z.getChannel(e) : null;
        }),
        { mute: h, selfMute: b, suppress: x } = (0, e_.Z)(g),
        { selfDeaf: _, deaf: E } = (0, ex.Z)(g),
        C = (0, d.e7)([R.C], () => {
            var e;
            return (0, D.fD)()
                ? null == (e = R.C.getCurrentBuildOverride().overrides)
                    ? void 0
                    : e.discord_web
                : null;
        }),
        v = (0, d.e7)([eF.Z], () => eF.Z.getPremiumTypeSubscription()),
        S = (0, d.e7)([eL.Z], () => eL.Z.getSpeakingWhileMuted()),
        T = (0, d.e7)([Z.Z], () => Z.Z.isFullscreenInContext()),
        I = (0, d.e7)([ek.Z], () => ek.Z.hasLayers()),
        A = (0, f.s9z)(f.JQI) || I || eQ.s.isDisallowPopupsSet() || T,
        P = (0, ec.b)(),
        w = (0, d.e7)([J.Z], () => null != J.Z.getAwaitingRemoteSessionInfo()),
        k = (0, d.e7)([eB.Z], () => eB.Z.getGuildId()),
        L = eJ.ZP.canUsePremiumGuildMemberProfile(t),
        M = (null == t || null == (e = t.avatarDecoration) ? void 0 : e.skuId) === e7.rL,
        { voiceActivityStatusEnabled: B } = (0, O.U)({ location: "Account" }),
        U = (0, en.m)(),
        [V, G] = (0, $.G)(null != k ? k : null),
        F = W.J.useExperiment({ location: "Account" }).enabled,
        { analyticsLocations: H } = (0, y.ZP)(N.Z.ACCOUNT),
        z = (0, es.K)({ user: t }),
        K = (0, em.Ws)({ location: e9.dr.CONFLICT_CHECKS }),
        q = (0, d.e7)([ep.Z, eG.default, ew.Z], () => {
            let e,
                t = ep.Z.getSyncingWith(),
                n = ep.Z.getActivity(),
                i = [];
            if (
                (null != t ? (e = t.partyId) : null != n && null != n.party && null != n.party.id && (e = n.party.id),
                null != e)
            ) {
                var r;
                i = o()(Array.from(null != (r = ew.Z.getParty(e)) ? r : []))
                    .map((e) => eG.default.getUser(e))
                    .filter(eX.lm)
                    .value();
            }
            return i.length > 1;
        }),
        { shouldShowTooltip: X, dismissTooltip: Q } = tp(te.h7.AUDIO_INPUT),
        { shouldShowTooltip: ee, dismissTooltip: et } = tp(te.h7.AUDIO_OUTPUT),
        ei = {
            avatar: [],
            settings: [],
        };
    !A &&
        (L && ei.settings.push(u.z.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK),
        M && ei.avatar.push(u.z.PREMIUM_SUBSCRIPTION_APRIL_MARKETING_DECO_TOOLTIP),
        U && ei.avatar.push(u.z.EXPIRING_STATUS_COACHMARK),
        F && ei.avatar.push(u.z.DISPLAY_NAME_STYLES_COACHMARK));
    let er = (0, Y.Y)({ location: "AccountConnected" });
    return (0, i.jsx)(y.Gt, {
        value: H,
        children: (0, i.jsx)(tu, {
            currentUser: t,
            activities: r,
            applicationStream: l,
            voiceChannel: g,
            dismissibleContents: ei,
            visibleRecurringAvatarDc: V,
            markRecurringAvatarDcAsDismissed: G,
            userTag: m,
            hidePrivateData: p,
            occluded: A,
            premiumSubscription: v,
            selfDeaf: _,
            selfMute: b,
            serverDeaf: E,
            serverMute: h,
            speaking: c,
            speakingWhileMuted: S,
            status: a,
            streaming: s,
            suppress: x,
            webBuildOverride: C,
            awaitingRemote: w,
            isEligibleForPomelo: P,
            voiceActivityStatusEnabled: B,
            nameplate: z,
            selectedGuildId: k,
            isQuestBarEmpty: K,
            isListenAlongVisible: q,
            isDisplayNameStylesEnabled: er,
            shouldShowInputDeviceChangedTooltip: X,
            shouldShowOutputDeviceChangedTooltip: ee,
            dismissInputDeviceChangedTooltip: Q,
            dismissOutputDeviceChangedTooltip: et,
        }),
    });
}
function th(e) {
    let {
            webBuildOverride: t,
            isEligibleForPomelo: n,
            onClick: s,
            onContextMenu: a,
            dismissibleContents: l,
            iconForeground: o,
            nameplate: c,
            tooltipText: d,
            tooltipColor: m,
            tooltipForceOpen: p,
            "aria-label": h,
        } = e,
        b = r.useRef(null),
        x = f.ewm,
        _ = (0, g.i)();
    x = null != t ? f.bgT : n ? f.Ncx : _.Component;
    let [j, E] = (0, z.US)(l);
    return (0, i.jsx)(f.yRy, {
        targetElementRef: b,
        position: "top",
        align: "center",
        shouldShow: null != j,
        renderPopout:
            j === u.z.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK
                ? () => (0, i.jsx)(eh.Z, {})
                : () => (0, i.jsx)(i.Fragment, {}),
        children: () =>
            (0, i.jsx)(
                e8.Z,
                ts(
                    tr(
                        {
                            ref: b,
                            tooltipText:
                                null != d
                                    ? d
                                    : null != t
                                      ? tt.intl.formatToPlainString(tt.t.Gzh6ZG, { webBuildOverride: t.id })
                                      : tt.intl.string(tt.t.cduTBA),
                            tooltipColor: m,
                            tooltipForceOpen: p,
                            tooltipClassName: tn.accountButtonsTooltip,
                            tooltipContentClassName: tn.accountButtonsTooltipContent,
                            "aria-label": h,
                            onClick: s,
                            onContextMenu: a,
                            icon: (0, i.jsx)(x, {
                                size: "refresh_sm",
                                color: "currentColor",
                                className: o,
                            }),
                        },
                        _.events,
                    ),
                    { plated: null != c },
                ),
            ),
    });
}
function tf(e) {
    let {
            selfMute: t,
            serverMute: n,
            suppress: s,
            awaitingRemote: l,
            tooltipText: o,
            tooltipColor: m,
            tooltipForceOpen: p,
            iconForeground: g,
            onMouseEnter: b,
            onMouseLeave: x,
            onClick: _,
            onContextMenu: j,
            nameplate: E,
            accountContainerRef: C,
        } = e,
        O = t || s || n,
        v = r.useRef(null),
        S = r.useRef(null),
        T = (0, eP.b)(O),
        { activeVoice: I, mostRecentlyRequestedVoiceId: A, lastInitAttemptMayHaveCrashed: P } = (0, ev.o)(),
        { showSilentLagWarning: R } = (0, eO.Y)(),
        D = null != I,
        Z = (0, eC.z)(I),
        w = (0, d.e7)([eM.Z], () => eM.Z.isConnected()),
        { Component: L, events: M, play: B } = T,
        U = n || s ? f.v0G : L,
        V = R ? tt.intl.string(tt.t.ARRV6u) : null,
        G = (0, k.Z)(t, n, s, l),
        F =
            null != o
                ? o
                : null != V
                  ? (0, i.jsxs)("div", {
                        className: tn.tooltipWithSubtext,
                        children: [
                            (0, i.jsx)(f.Text, {
                                variant: "text-sm/medium",
                                color: "currentColor",
                                children: G,
                            }),
                            null != V &&
                                (0, i.jsx)(f.Text, {
                                    variant: "text-xs/medium",
                                    color: "text-feedback-warning",
                                    children: V,
                                }),
                        ],
                    })
                  : G,
        { analyticsLocations: H } = (0, y.ZP)(N.Z.AUDIO_INPUT_BUTTON),
        W = (0, ej.Hu)({
            location: N.Z.AUDIO_INPUT_BUTTON,
            autoTrackExposure: !0,
        }),
        Y = (0, eE.av)({
            location: N.Z.AUDIO_INPUT_BUTTON,
            autoTrackExposure: !0,
        });
    r.useEffect(() => () => B(), [O, B]);
    let K = r.useCallback(
            (e) => {
                j(e, H);
            },
            [j, H],
        ),
        [q, X] = r.useState(!1),
        J = r.useCallback((e) => {
            var t;
            if (
                (0, c.k)(null == e ? void 0 : e.target, Node) &&
                (null == (t = v.current) ? void 0 : t.contains(e.target))
            )
                return h.F;
            X(!1);
        }, []);
    (0, eY.yp)({
        event: e5.CkL.OPEN_VOICE_FILTER_POPOUT,
        handler: () => {
            X(!0);
        },
    });
    let [Q, $] = r.useState(!1);
    r.useEffect(() => {
        let e;
        return (
            w &&
                D &&
                (e = setTimeout(() => {
                    $(!0), (e = setTimeout(() => $(!1), to));
                }, 300)),
            () => {
                $(!1), clearTimeout(e);
            }
        );
    }, [w]);
    let ee = r.useCallback(() => {
            P || (0, eS.r5)();
        }, [P]),
        et = O ? f.TVs.colors.STATUS_DANGER : R ? f.TVs.colors.STATUS_WARNING : "currentColor",
        en = O || R,
        ei = (0, ed.Z)({ location: "Account" });
    return (0, i.jsx)(y.Gt, {
        value: H,
        children: (0, i.jsxs)("div", {
            ref: v,
            className: a()(tn.micButtonParent, { [tn.hasColorGlow]: en }),
            children: [
                (0, i.jsx)(e8.Z, {
                    tooltipText: F,
                    tooltipColor: m,
                    tooltipForceOpen: p,
                    plated: null != E,
                    onMouseEnter: () => {
                        b(), M.onMouseEnter();
                    },
                    onMouseLeave: () => {
                        x(), M.onMouseLeave();
                    },
                    icon: (0, i.jsx)(U, {
                        size: "custom",
                        width: 20,
                        height: 20,
                        color: et,
                        className: g,
                    }),
                    onClick: _,
                    onContextMenu: K,
                    role: "switch",
                    className: a()({ [tn.micButtonWithMenu]: W }),
                    orangeGlow: R,
                    redGlow: O,
                    "aria-label": tt.intl.string(tt.t["w4m94+"]),
                    "aria-checked": O,
                    disabled: l,
                }),
                W &&
                    (0, i.jsx)(f.yRy, {
                        targetElementRef: C,
                        position: "top",
                        align: "left",
                        nudgeAlignIntoViewport: !1,
                        animation: f.yRy.Animation.FADE,
                        useMouseEnter: !0,
                        ignoreModalClicks: !0,
                        onRequestOpen: ee,
                        onRequestClose: J,
                        shouldShow: q,
                        renderPopout: (e) => {
                            let { closePopout: t } = e;
                            return (0, i.jsx)(ey.l, { onSettingsButtonClick: t });
                        },
                        children: (e, t) => {
                            var { onClick: n } = e,
                                r = (function (e, t) {
                                    if (null == e) return {};
                                    var n,
                                        i,
                                        r = (function (e, t) {
                                            if (null == e) return {};
                                            var n,
                                                i,
                                                r = {},
                                                s = Object.keys(e);
                                            for (i = 0; i < s.length; i++)
                                                (n = s[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                            return r;
                                        })(e, t);
                                    if (Object.getOwnPropertySymbols) {
                                        var s = Object.getOwnPropertySymbols(e);
                                        for (i = 0; i < s.length; i++)
                                            (n = s[i]),
                                                !(t.indexOf(n) >= 0) &&
                                                    Object.prototype.propertyIsEnumerable.call(e, n) &&
                                                    (r[n] = e[n]);
                                    }
                                    return r;
                                })(e, ["onClick"]),
                                { isShown: s } = t;
                            let a = s ? f.u04 : f.CJ0,
                                o = [];
                            return (
                                !s &&
                                    (ei && o.push(u.z.VOICE_FILTER_EARLY_ACCESS_COACHMARK),
                                    o.push(u.z.VOICE_FILTER_LAUNCH_COACHMARK),
                                    Y && w && !D && o.push(u.z.VOICE_FILTER_FIRST_USE_COACHMARK)),
                                (0, i.jsx)("div", {
                                    children: (0, i.jsx)(z.ZP, {
                                        bypassAutoDismiss: !0,
                                        contentTypes: o,
                                        children: (e) => {
                                            let { visibleContent: t, markAsDismissed: s } = e,
                                                o = null;
                                            t === u.z.VOICE_FILTER_EARLY_ACCESS_COACHMARK
                                                ? (o = (0, i.jsx)(eN.U, {
                                                      markAsDismissed: s,
                                                      onCTA: () => X(!0),
                                                  }))
                                                : t === u.z.VOICE_FILTER_LAUNCH_COACHMARK
                                                  ? (o = (0, i.jsx)(eI.n, {
                                                        markAsDismissed: s,
                                                        onCTA: () => X(!0),
                                                    }))
                                                  : t === u.z.VOICE_FILTER_FIRST_USE_COACHMARK &&
                                                    (o = (0, i.jsx)(eT.v, {
                                                        markAsDismissed: s,
                                                        onCTA: () => X(!0),
                                                    }));
                                            let c = () =>
                                                (0, i.jsx)(
                                                    e8.Z,
                                                    tr(
                                                        {
                                                            ref: S,
                                                            plated: null != E,
                                                            tooltipForceOpen: Q,
                                                            tooltipColor: Q ? f.FGA.GREEN : void 0,
                                                            tooltipContentClassName: Q ? tn.voiceFilterWarning : void 0,
                                                            tooltipText: Q
                                                                ? (0, i.jsxs)(i.Fragment, {
                                                                      children: [
                                                                          (0, i.jsx)("img", {
                                                                              alt:
                                                                                  null != Z
                                                                                      ? tt.intl.string(Z.name)
                                                                                      : "",
                                                                              src: null == Z ? void 0 : Z.iconURL,
                                                                              draggable: !1,
                                                                          }),
                                                                          (0, i.jsx)(f.Text, {
                                                                              variant: "text-sm/medium",
                                                                              color: "always-white",
                                                                              children: tt.intl.string(tt.t.VlC1dX),
                                                                          }),
                                                                      ],
                                                                  })
                                                                : tt.intl.string(tt.t.Hapb4O),
                                                            icon: (0, i.jsx)(a, {
                                                                className: tn.buttonChevronIcon,
                                                                size: "custom",
                                                                width: 12,
                                                                height: 12,
                                                                color: et,
                                                            }),
                                                            role: "button",
                                                            className: tn.buttonChevron,
                                                            orangeGlow: R,
                                                            redGlow: O,
                                                            "aria-label": tt.intl.string(tt.t.Hapb4O),
                                                            disabled: l,
                                                            onClick: (e) => {
                                                                s(e4.L.INDIRECT_ACTION),
                                                                    n(e),
                                                                    null != A && !q && P
                                                                        ? (0, eA.$)(() => X(!0))
                                                                        : X(!q);
                                                            },
                                                        },
                                                        r,
                                                    ),
                                                );
                                            return null != o
                                                ? (0, i.jsx)(f.yRy, {
                                                      targetElementRef: S,
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
function tb(e) {
    let {
            selfDeaf: t,
            serverDeaf: n,
            awaitingRemote: s,
            onClick: l,
            onContextMenu: o,
            iconForeground: c,
            nameplate: d,
        } = e,
        u = t || n,
        {
            Component: m,
            play: g,
            events: { onMouseEnter: h, onMouseLeave: b },
        } = (0, p.l)(u ? "undeafen" : "deafen"),
        x = n ? f.Vm4 : m,
        { analyticsLocations: _ } = (0, y.ZP)(N.Z.AUDIO_OUTPUT_BUTTON);
    r.useEffect(() => () => g(), [u, g]);
    let j = r.useCallback(
        (e) => {
            o(e, _);
        },
        [o, _],
    );
    return (0, i.jsx)(y.Gt, {
        value: _,
        children: (0, i.jsx)(e8.Z, {
            plated: null != d,
            tooltipText: (0, w.Z)(t, n, s),
            onMouseEnter: h,
            onMouseLeave: b,
            icon: (0, i.jsx)(x, {
                size: "custom",
                width: 20,
                height: 20,
                color: u ? f.TVs.colors.STATUS_DANGER : "currentColor",
                className: c,
            }),
            onClick: l,
            onContextMenu: j,
            innerClassName: a()({ [tn.redIcon]: n }),
            iconForeground: u ? tn.strikethrough : void 0,
            role: "switch",
            redGlow: u,
            "aria-label": tt.intl.string(tt.t.wjcRFR),
            "aria-checked": u,
            disabled: s,
        }),
    });
}
