n.d(t, {
    Z: () => tm,
    m: () => tc,
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
    en = n(78933),
    ei = n(850020),
    er = n(379839),
    es = n(359135),
    ea = n(516817),
    el = n(332473),
    eo = n(963590),
    ec = n(210308),
    ed = n(667105),
    eu = n(768419),
    em = n(184301),
    ep = n(52538),
    eg = n(670188),
    eh = n(321614),
    ef = n(879815),
    eb = n(294629),
    ex = n(875527),
    e_ = n(702977),
    ej = n(56848),
    eE = n(940315),
    eC = n(378441),
    eO = n(358820),
    ev = n(723547),
    eS = n(361045),
    eT = n(74650),
    eI = n(306609),
    eN = n(170293),
    ey = n(8404),
    eA = n(199902),
    eP = n(314897),
    eR = n(592125),
    eD = n(831506),
    eZ = n(819640),
    ew = n(131951),
    ek = n(19780),
    eL = n(914010),
    eM = n(885110),
    eB = n(246946),
    eU = n(594174),
    eV = n(78839),
    eG = n(626135),
    eF = n(768581),
    eH = n(572004),
    ez = n(459273),
    eW = n(585483),
    eY = n(70956),
    eK = n(823379),
    eq = n(74538),
    eX = n(374023),
    eJ = n(51144),
    eQ = n(998502),
    e$ = n(578817),
    e0 = n(422202),
    e3 = n(870569),
    e1 = n(345243),
    e8 = n(115530),
    e6 = n(981631),
    e2 = n(215023),
    e5 = n(921944),
    e7 = n(46140),
    e4 = n(65154),
    e9 = n(388032),
    te = n(452414);
function tt(e, t, n) {
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
function tn(e) {
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
                tt(e, t, n[t]);
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
let tr = eQ.ZP.getEnableHardwareAcceleration() ? f.Xo$ : f.qEK,
    ts = 2 * eY.Z.Millis.MINUTE,
    ta = 3 * eY.Z.Millis.SECOND,
    tl = 5 * eY.Z.Millis.SECOND;
function to(e) {
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
        x = (0, eF.NZ)({
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
                        eW.S.subscribe(e6.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, t),
                        () => {
                            eW.S.unsubscribe(e6.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, t);
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
        T = (0, er.A)(m);
    return null == l
        ? null
        : (0, i.jsx)(_.Z, {
              object: e6.qAy.AVATAR,
              children: (0, i.jsx)(eg.Z, {
                  user: l,
                  targetElementRef: h,
                  clickTrap: !0,
                  preload: () =>
                      (0, em.Z)(l.id, l.getAvatarURL(void 0, eg.I), {
                          type: "account_popout",
                          withMutualGuilds: !1,
                          withMutualFriends: !1,
                      }),
                  renderPopout: (e, t) => {
                      let { closePopout: n, setPopoutRef: r } = e;
                      return (0, i.jsx)(en.Z, {
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
                          ti(
                              tn(
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
                                  "aria-label": e9.intl.string(e9.t["3Uj+2t"]),
                                  "data-jump-section": p,
                                  className: a()(te.avatarWrapper, { [te.plated]: null != m }),
                                  children: [
                                      (0, i.jsx)(tr, {
                                          size: f.EFr["SIZE_".concat(E)],
                                          src: l.getAvatarURL(void 0, E - 4, !1),
                                          avatarDecoration: x,
                                          "aria-label": l.username,
                                          status: s ? e6.Skl.STREAMING : o,
                                          isSpeaking: n,
                                          className: te.avatar,
                                      }),
                                      (0, i.jsx)("div", {
                                          className: a()(te.nameTag, { [te.canCopy]: eH.wS }),
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
class tc extends r.PureComponent {
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
                e9.intl.string(e9.t.MSaeTU),
                e9.intl.string(e9.t.UmrCw8),
                e9.intl.string(e9.t.gKE0Ji),
                e9.intl.string(e9.t["4DSKbm"]),
                e9.intl.string(e9.t["+8ENdX"]),
                e9.intl.string(e9.t.GlWHv7),
                e9.intl.string(e9.t.hIzxU1),
                e9.intl.string(e9.t["26uMPD"]),
                e9.intl.string(e9.t.uFs7R0),
                e9.intl.string(e9.t.bLXdcX),
                e9.intl.string(e9.t.gPg9fX),
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
                    textClassName: te.activityStatusText,
                    hideTooltip: !0,
                }),
            });
        let c =
            null == t
                ? void 0
                : t.find((e) => {
                      let { type: t } = e;
                      return t === e6.IIU.CUSTOM_STATUS;
                  });
        return null != c
            ? (0, i.jsx)(I.Z, {
                  hoverText: a,
                  forceHover: e,
                  children: (0, i.jsx)(H.Z, {
                      activity: c,
                      emojiClassName: te.emoji,
                      className: te.customStatus,
                  }),
              })
            : null != s && s !== e6.Skl.UNKNOWN && r.hasUniqueUsername()
              ? (0, i.jsx)(I.Z, {
                    hoverText: a,
                    forceHover: e,
                    children: (0, i.jsx)(T.Z, { text: eJ.ZP.humanizeStatus(s) }),
                })
              : a;
    }
    renderAvatarWithPopout(e) {
        let {
            focusSectionProps: { "data-jump-section": t },
            onClick: n,
        } = e;
        return (0, i.jsx)(
            to,
            ti(tn({}, this.props), {
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
        if (!(null != this.avatarWithPopoutRef.current && this.props.isQuestBarEmpty))
            return this.renderAvatarWithPopout({ focusSectionProps: e });
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
                (0, i.jsx)(ec.Z, {
                    groupName: e5.R.ACCOUNT_NAME_ZONE,
                    targetElementRef: this.avatarWithPopoutRef,
                }),
                (0, i.jsx)(z.ZP, {
                    contentTypes: n.avatar,
                    groupName: e5.R.ACCOUNT_NAME_ZONE,
                    children: (t) => {
                        let { visibleContent: n, markAsDismissed: r } = t;
                        switch (n) {
                            case u.z.PREMIUM_SUBSCRIPTION_APRIL_MARKETING_DECO_TOOLTIP:
                                return (0, i.jsx)(F.Z, {
                                    markAsDismissed: r,
                                    targetElementRef: this.avatarWithPopoutRef,
                                    children: () => this.renderAvatarWithPopout({ focusSectionProps: e }),
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
                                  className: a()(te.container, {
                                      [te.containerRtcOpened]: null != n,
                                      [te.containerQuestBarVisible]: !r,
                                      [te.containerListenAlongVisible]: s,
                                  }),
                                  onMouseEnter: this.handleMouseEnter,
                                  onMouseLeave: this.handleMouseLeave,
                                  children: [
                                      (0, i.jsx)(ea.Z, {
                                          nameplate: t,
                                          hovered: l,
                                          placement: es.i.ACCOUNT,
                                      }),
                                      this.renderNameZone(e),
                                      (0, i.jsx)(
                                          td,
                                          ti(tn({}, this.props, this.state), {
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
            tt(this, "copiedTimeout", new m.V7()),
            tt(this, "copiedDecayTimeout", new m.V7()),
            tt(this, "speakingWhileMutedTooltipTimeout", new m.V7()),
            tt(this, "lastSpeakingWhileMutedNotificationTime", void 0),
            tt(this, "state", {
                hovered: !1,
                copiedStreak: 0,
                shouldShowNametagTooltip: !1,
                shouldShowCopiedFeedback: !1,
                shouldShowSpeakingWhileMutedTooltip: !1,
                hoveringOnMute: !1,
            }),
            tt(this, "containerRef", r.createRef()),
            tt(this, "avatarWithPopoutRef", r.createRef()),
            tt(this, "handleToggleSelfMute", () => {
                let { serverMute: e, suppress: t, selfMute: n } = this.props;
                (0, M.Z)(e, t, e6.jXE.ACCOUNT_PANEL), (0, B.v)(N.Z.ACCOUNT, B.d.MIC, n);
            }),
            tt(this, "handleToggleSelfDeaf", () => {
                let { serverDeaf: e, selfDeaf: t } = this.props;
                (0, L.Z)(e, e6.jXE.ACCOUNT_PANEL), (0, B.v)(N.Z.ACCOUNT, B.d.DEAFEN, !t);
            }),
            tt(this, "handleOpenAccountSettings", () => {
                var e, t, n, i;
                null == (e = (t = this.props).dismissInputDeviceChangedTooltip) || e.call(t),
                    null == (n = (i = this.props).dismissOutputDeviceChangedTooltip) || n.call(i),
                    this.handleOpenSettings();
            }),
            tt(this, "handleOpenSettings", function () {
                let e =
                        arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : (0, e$.Q)("Account").jumpToVoice && ek.Z.isConnected()
                              ? e6.oAB.VOICE
                              : e6.oAB.ACCOUNT,
                    t = arguments.length > 1 ? arguments[1] : void 0,
                    n = arguments.length > 2 ? arguments[2] : void 0;
                x.Z.open(e, t, n);
            }),
            tt(this, "handleOpenSettingsContextMenu", (e) => {
                let { currentUser: t } = this.props;
                null != t &&
                    (0, b.jW)(e, async () => {
                        let { default: e } = await n.e("2535").then(n.bind(n, 923422));
                        return (n) =>
                            (0, i.jsx)(
                                e,
                                ti(tn({}, n), {
                                    user: t,
                                    premiumSubscription: this.props.premiumSubscription,
                                    webBuildOverride: this.props.webBuildOverride,
                                    onInteraction: (0, U.u)("UserSettingsCogContextMenu", N.Z.ACCOUNT),
                                }),
                            );
                    });
            }),
            tt(this, "audioOnInteractionHandler", (0, U.u)("AudioDeviceMenu", N.Z.ACCOUNT)),
            tt(this, "handleInputAudioContextMenu", (e, t) => {
                (0, b.jW)(e, async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 659580));
                    return () => {
                        let { enabledInputProfiles: n } = (0, eh.c)({ location: "Account" });
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
            tt(this, "handleOutputAudioContextMenu", (e, t) => {
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
            tt(this, "handleMouseEnter", () => {
                this.setState({ hovered: !0 });
            }),
            tt(this, "handleMouseLeave", () => {
                this.setState({ hovered: !1 });
            }),
            tt(this, "handleMouseEnterMute", () => {
                this.setState({
                    hoveringOnMute: !0,
                    shouldShowSpeakingWhileMutedTooltip: !1,
                }),
                    this.speakingWhileMutedTooltipTimeout.stop();
            }),
            tt(this, "handleMouseLeaveMute", () => {
                this.setState({ hoveringOnMute: !1 });
            }),
            tt(this, "handleCopyTag", () => {
                let { currentUser: e } = this.props,
                    { shouldShowNametagTooltip: t, copiedStreak: n } = this.state;
                if (null == e) return;
                (0, eH.JG)(
                    eJ.ZP.getUserTag(e, {
                        decoration: "never",
                        identifiable: "always",
                    }),
                ),
                    eG.default.track(e6.rMx.TEXT_COPIED, { type: "User Tag" });
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
            tt(this, "handleOccludedChanged", () => {
                let { occluded: e } = this.props;
                e &&
                    this.setState({
                        shouldShowNametagTooltip: !1,
                        shouldShowSpeakingWhileMutedTooltip: !1,
                    });
            }),
            tt(this, "handleSpeakingWhileMutedChanged", () => {
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
                        Date.now() - this.lastSpeakingWhileMutedNotificationTime > ts;
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
            tt(this, "renderNameTag", (e) => {
                let { currentUser: t, isDisplayNameStylesEnabled: n } = this.props;
                return null == t
                    ? null
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)("div", {
                                  className: te.panelTitleContainer,
                                  children: (0, i.jsx)(e8.Z, {
                                      className: a()({ [te.withDisplayNameStyles]: n && null != e }),
                                      children: (0, i.jsx)(X.Z, {
                                          userName: eJ.ZP.getName(t),
                                          displayNameStyles: e,
                                          effectDisplayType: this.state.hovered ? K.F.ANIMATED : K.F.STATIC,
                                          loop: !0,
                                          inProfile: !0,
                                      }),
                                  }),
                              }),
                              (0, i.jsx)("div", {
                                  className: te.panelSubtextContainer,
                                  children: (0, i.jsx)(e1.Z, { children: this.renderStatus() }),
                              }),
                          ],
                      });
            });
    }
}
function td(e) {
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
        S = (0, er.A)(E),
        { name: T } = (0, et.p6)(e4.h7.AUDIO_INPUT),
        { name: I } = (0, et.p6)(e4.h7.AUDIO_OUTPUT);
    return (0, i.jsxs)("div", {
        className: te.buttons,
        style: S,
        children: [
            (0, i.jsx)(tg, {
                accountContainerRef: C,
                selfMute: n,
                serverMute: s,
                suppress: l,
                awaitingRemote: r,
                tooltipText: o ? e9.intl.string(e9.t["29gnR0"]) : void 0,
                tooltipColor: o ? f.FGA.GREEN : void 0,
                tooltipForceOpen: o || void 0,
                onMouseEnter: u,
                onMouseLeave: m,
                onClick: g,
                onContextMenu: h,
                iconForeground: null != E ? te.iconForeground : void 0,
                nameplate: E,
            }),
            (0, i.jsx)(th, {
                selfDeaf: t,
                serverDeaf: a,
                onClick: p,
                onContextMenu: b,
                awaitingRemote: r,
                iconForeground: null != E ? te.iconForeground : void 0,
                nameplate: E,
            }),
            (0, i.jsx)(tp, {
                isEligibleForPomelo: c,
                webBuildOverride: d,
                onClick: x,
                onContextMenu: _,
                dismissibleContents: j.settings,
                iconForeground: null != E ? te.iconForeground : void 0,
                nameplate: E,
                tooltipText: O
                    ? e9.intl.format(e9.t["18wnuL"], { inputDeviceName: T })
                    : v
                      ? e9.intl.format(e9.t["f+DDY2"], { outputDeviceName: I })
                      : void 0,
                tooltipColor: O || v ? f.FGA.GREEN : void 0,
                tooltipForceOpen: O || v,
                "aria-label": O
                    ? e9.intl.formatToPlainString(e9.t["18wnuL"], { inputDeviceName: T })
                    : v
                      ? e9.intl.formatToPlainString(e9.t["f+DDY2"], { outputDeviceName: I })
                      : void 0,
            }),
        ],
    });
}
function tu(e) {
    let { shouldShowDeviceChangedNotifications: t } = (0, e0.P)({
            location: "Account.useDeviceChangedTooltip",
            autoTrackExposure: !1,
        }),
        n = (0, d.e7)([ek.Z], () => null != ek.Z.getChannelId()),
        i = (0, et.Fh)(e),
        s = r.useRef(new m.V7()),
        [a, l] = r.useState(!1);
    r.useEffect(() => {
        n &&
            i &&
            ((0, e0._)({
                location: "Account.useDeviceChangedTooltip (exposure tracking)",
                autoTrackExposure: !0,
            }),
            t &&
                (l(!0),
                s.current.start(tl, () => {
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
function tm() {
    var e;
    let t = (0, d.e7)([eU.default], () => eU.default.getCurrentUser()),
        n = (0, d.e7)([eP.default], () => eP.default.getId()),
        {
            activities: r,
            streaming: s,
            status: a,
        } = (0, d.cj)([eM.Z], () => {
            let e = eM.Z.getActivities();
            return {
                activities: e,
                streaming:
                    null !=
                    e.find((e) => {
                        let { type: t } = e;
                        return t === e6.IIU.STREAMING;
                    }),
                status: eM.Z.getStatus(),
            };
        }),
        l = (0, d.e7)([eA.Z], () => eA.Z.getAnyStreamForUser(n)),
        c = (0, j.Z)({ userId: n }),
        m = eJ.ZP.useUserTag(t, { decoration: "never" }),
        p = (0, d.e7)([eB.Z], () => eB.Z.hidePersonalInformation),
        g = (0, d.e7)([ek.Z, eR.Z], () => {
            let e = ek.Z.getChannelId();
            return null != e ? eR.Z.getChannel(e) : null;
        }),
        { mute: h, selfMute: b, suppress: x } = (0, eb.Z)(g),
        { selfDeaf: _, deaf: E } = (0, ef.Z)(g),
        C = (0, d.e7)([R.C], () => {
            var e;
            return (0, D.fD)()
                ? null == (e = R.C.getCurrentBuildOverride().overrides)
                    ? void 0
                    : e.discord_web
                : null;
        }),
        v = (0, d.e7)([eV.Z], () => eV.Z.getPremiumTypeSubscription()),
        S = (0, d.e7)([ew.Z], () => ew.Z.getSpeakingWhileMuted()),
        T = (0, d.e7)([Z.Z], () => Z.Z.isFullscreenInContext()),
        I = (0, d.e7)([eZ.Z], () => eZ.Z.hasLayers()),
        A = (0, f.s9z)(f.JQI) || I || eX.s.isDisallowPopupsSet() || T,
        P = (0, el.b)(),
        w = (0, d.e7)([J.Z], () => null != J.Z.getAwaitingRemoteSessionInfo()),
        k = (0, d.e7)([eL.Z], () => eL.Z.getGuildId()),
        L = eq.ZP.canUsePremiumGuildMemberProfile(t),
        M = (null == t || null == (e = t.avatarDecoration) ? void 0 : e.skuId) === e2.rL,
        { voiceActivityStatusEnabled: B } = (0, O.U)({ location: "Account" }),
        [U, V] = (0, $.G)(null != k ? k : null),
        G = W.J.useExperiment({ location: "Account" }).enabled,
        { analyticsLocations: F } = (0, y.ZP)(N.Z.ACCOUNT),
        H = (0, ei.K)({ user: t }),
        z = (0, ed.Ws)({ location: e7.dr.CONFLICT_CHECKS }),
        K = (0, d.e7)([eu.Z, eU.default, eD.Z], () => {
            let e,
                t = eu.Z.getSyncingWith(),
                n = eu.Z.getActivity(),
                i = [];
            if (
                (null != t ? (e = t.partyId) : null != n && null != n.party && null != n.party.id && (e = n.party.id),
                null != e)
            ) {
                var r;
                i = o()(Array.from(null != (r = eD.Z.getParty(e)) ? r : []))
                    .map((e) => eU.default.getUser(e))
                    .filter(eK.lm)
                    .value();
            }
            return i.length > 1;
        }),
        { shouldShowTooltip: q, dismissTooltip: X } = tu(e4.h7.AUDIO_INPUT),
        { shouldShowTooltip: Q, dismissTooltip: ee } = tu(e4.h7.AUDIO_OUTPUT),
        et = {
            avatar: [],
            settings: [],
        };
    !A &&
        (L && et.settings.push(u.z.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK),
        M && et.avatar.push(u.z.PREMIUM_SUBSCRIPTION_APRIL_MARKETING_DECO_TOOLTIP),
        G && et.avatar.push(u.z.DISPLAY_NAME_STYLES_COACHMARK));
    let en = (0, Y.Y)({ location: "AccountConnected" });
    return (0, i.jsx)(y.Gt, {
        value: F,
        children: (0, i.jsx)(tc, {
            currentUser: t,
            activities: r,
            applicationStream: l,
            voiceChannel: g,
            dismissibleContents: et,
            visibleRecurringAvatarDc: U,
            markRecurringAvatarDcAsDismissed: V,
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
            nameplate: H,
            selectedGuildId: k,
            isQuestBarEmpty: z,
            isListenAlongVisible: K,
            isDisplayNameStylesEnabled: en,
            shouldShowInputDeviceChangedTooltip: q,
            shouldShowOutputDeviceChangedTooltip: Q,
            dismissInputDeviceChangedTooltip: X,
            dismissOutputDeviceChangedTooltip: ee,
        }),
    });
}
function tp(e) {
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
                ? () => (0, i.jsx)(ep.Z, {})
                : () => (0, i.jsx)(i.Fragment, {}),
        children: () =>
            (0, i.jsx)(
                e3.Z,
                ti(
                    tn(
                        {
                            ref: b,
                            tooltipText:
                                null != d
                                    ? d
                                    : null != t
                                      ? e9.intl.formatToPlainString(e9.t.Gzh6ZG, { webBuildOverride: t.id })
                                      : e9.intl.string(e9.t.cduTBA),
                            tooltipColor: m,
                            tooltipForceOpen: p,
                            tooltipClassName: te.accountButtonsTooltip,
                            tooltipContentClassName: te.accountButtonsTooltipContent,
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
function tg(e) {
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
        T = (0, ey.b)(O),
        { activeVoice: I, mostRecentlyRequestedVoiceId: A, lastInitAttemptMayHaveCrashed: P } = (0, eC.o)(),
        { showSilentLagWarning: R } = (0, eE.Y)(),
        D = null != I,
        Z = (0, ej.z)(I),
        w = (0, d.e7)([ek.Z], () => ek.Z.isConnected()),
        { Component: L, events: M, play: B } = T,
        U = n || s ? f.v0G : L,
        V = R ? e9.intl.string(e9.t.ARRV6u) : null,
        G = (0, k.Z)(t, n, s, l),
        F =
            null != o
                ? o
                : null != V
                  ? (0, i.jsxs)("div", {
                        className: te.tooltipWithSubtext,
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
        W = (0, ex.Hu)({
            location: N.Z.AUDIO_INPUT_BUTTON,
            autoTrackExposure: !0,
        }),
        Y = (0, e_.av)({
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
    (0, ez.yp)({
        event: e6.CkL.OPEN_VOICE_FILTER_POPOUT,
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
                    $(!0), (e = setTimeout(() => $(!1), ta));
                }, 300)),
            () => {
                $(!1), clearTimeout(e);
            }
        );
    }, [w]);
    let ee = r.useCallback(() => {
            P || (0, eO.r5)();
        }, [P]),
        et = O ? f.TVs.colors.STATUS_DANGER : R ? f.TVs.colors.STATUS_WARNING : "currentColor",
        en = O || R,
        ei = (0, eo.Z)({ location: "Account" });
    return (0, i.jsx)(y.Gt, {
        value: H,
        children: (0, i.jsxs)("div", {
            ref: v,
            className: a()(te.micButtonParent, { [te.hasColorGlow]: en }),
            children: [
                (0, i.jsx)(e3.Z, {
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
                    className: a()({ [te.micButtonWithMenu]: W }),
                    orangeGlow: R,
                    redGlow: O,
                    "aria-label": e9.intl.string(e9.t["w4m94+"]),
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
                            return (0, i.jsx)(eI.l, { onSettingsButtonClick: t });
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
                                                ? (o = (0, i.jsx)(eT.U, {
                                                      markAsDismissed: s,
                                                      onCTA: () => X(!0),
                                                  }))
                                                : t === u.z.VOICE_FILTER_LAUNCH_COACHMARK
                                                  ? (o = (0, i.jsx)(eS.n, {
                                                        markAsDismissed: s,
                                                        onCTA: () => X(!0),
                                                    }))
                                                  : t === u.z.VOICE_FILTER_FIRST_USE_COACHMARK &&
                                                    (o = (0, i.jsx)(ev.v, {
                                                        markAsDismissed: s,
                                                        onCTA: () => X(!0),
                                                    }));
                                            let c = () =>
                                                (0, i.jsx)(
                                                    e3.Z,
                                                    tn(
                                                        {
                                                            ref: S,
                                                            plated: null != E,
                                                            tooltipForceOpen: Q,
                                                            tooltipColor: Q ? f.FGA.GREEN : void 0,
                                                            tooltipContentClassName: Q ? te.voiceFilterWarning : void 0,
                                                            tooltipText: Q
                                                                ? (0, i.jsxs)(i.Fragment, {
                                                                      children: [
                                                                          (0, i.jsx)("img", {
                                                                              alt:
                                                                                  null != Z
                                                                                      ? e9.intl.string(Z.name)
                                                                                      : "",
                                                                              src: null == Z ? void 0 : Z.iconURL,
                                                                              draggable: !1,
                                                                          }),
                                                                          (0, i.jsx)(f.Text, {
                                                                              variant: "text-sm/medium",
                                                                              color: "always-white",
                                                                              children: e9.intl.string(e9.t.VlC1dX),
                                                                          }),
                                                                      ],
                                                                  })
                                                                : e9.intl.string(e9.t.Hapb4O),
                                                            icon: (0, i.jsx)(a, {
                                                                className: te.buttonChevronIcon,
                                                                size: "custom",
                                                                width: 12,
                                                                height: 12,
                                                                color: et,
                                                            }),
                                                            role: "button",
                                                            className: te.buttonChevron,
                                                            orangeGlow: R,
                                                            redGlow: O,
                                                            "aria-label": e9.intl.string(e9.t.Hapb4O),
                                                            disabled: l,
                                                            onClick: (e) => {
                                                                s(e5.L.INDIRECT_ACTION),
                                                                    n(e),
                                                                    null != A && !q && P
                                                                        ? (0, eN.$)(() => X(!0))
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
function th(e) {
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
        children: (0, i.jsx)(e3.Z, {
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
            innerClassName: a()({ [te.redIcon]: n }),
            iconForeground: u ? te.strikethrough : void 0,
            role: "switch",
            redGlow: u,
            "aria-label": e9.intl.string(e9.t.wjcRFR),
            "aria-checked": u,
            disabled: s,
        }),
    });
}
