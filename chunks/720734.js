n.d(t, {
    Z: () => tT,
    m: () => tO,
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
    E = n(230711),
    b = n(410575),
    y = n(586902),
    O = n(493773),
    v = n(980591),
    I = n(468363),
    T = n(326255),
    S = n(771173),
    A = n(963056),
    C = n(570928),
    N = n(100527),
    R = n(906732),
    P = n(676742),
    w = n(1585),
    D = n(304761),
    x = n(865427),
    L = n(358221),
    j = n(571250),
    M = n(628581),
    k = n(55311),
    U = n(575175),
    G = n(522651),
    B = n(795318),
    Z = n(338390),
    V = n(64220),
    F = n(427217),
    H = n(243778),
    Y = n(594928),
    W = n(181430),
    K = n(821795),
    z = n(287647),
    q = n(892567),
    X = n(258609),
    Q = n(53891),
    J = n(291533),
    $ = n(427347),
    ee = n(72897),
    et = n(78933),
    en = n(850020),
    er = n(379839),
    ei = n(359135),
    ea = n(516817),
    eo = n(332473),
    es = n(963590),
    el = n(562705),
    ec = n(667105),
    eu = n(768419),
    ed = n(184301),
    ef = n(52538),
    e_ = n(670188),
    ep = n(321614),
    eh = n(879815),
    em = n(294629),
    eg = n(875527),
    eE = n(702977),
    eb = n(56848),
    ey = n(940315),
    eO = n(378441),
    ev = n(358820),
    eI = n(723547),
    eT = n(361045),
    eS = n(74650),
    eA = n(306609),
    eC = n(170293),
    eN = n(8404),
    eR = n(199902),
    eP = n(314897),
    ew = n(592125),
    eD = n(831506),
    ex = n(819640),
    eL = n(131951),
    ej = n(19780),
    eM = n(914010),
    ek = n(885110),
    eU = n(246946),
    eG = n(594174),
    eB = n(78839),
    eZ = n(626135),
    eV = n(768581),
    eF = n(572004),
    eH = n(459273),
    eY = n(585483),
    eW = n(70956),
    eK = n(823379),
    ez = n(74538),
    eq = n(374023),
    eX = n(51144),
    eQ = n(998502),
    eJ = n(578817),
    e$ = n(422202),
    e0 = n(870569),
    e1 = n(345243),
    e2 = n(115530),
    e3 = n(981631),
    e4 = n(215023),
    e8 = n(921944),
    e6 = n(46140),
    e5 = n(65154),
    e7 = n(388032),
    e9 = n(25874);
function te(e, t, n) {
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
function tt(e) {
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
                te(e, t, n[t]);
            });
    }
    return e;
}
function tn(e, t) {
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
function tr(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : tn(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function ti(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = ta(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function ta(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let to = eQ.ZP.getEnableHardwareAcceleration() ? m.Xo$ : m.qEK,
    ts = 2000,
    tl = 1000,
    tc = 11,
    tu = 2000,
    td = 2 * eW.Z.Millis.MINUTE,
    tf = 3 * eW.Z.Millis.SECOND,
    t_ = 300,
    tp = 5 * eW.Z.Millis.SECOND;
function th() {
    return [
        e7.intl.string(e7.t.MSaeTU),
        e7.intl.string(e7.t.UmrCw8),
        e7.intl.string(e7.t.gKE0Ji),
        e7.intl.string(e7.t["4DSKbm"]),
        e7.intl.string(e7.t["+8ENdX"]),
        e7.intl.string(e7.t.GlWHv7),
        e7.intl.string(e7.t.hIzxU1),
        e7.intl.string(e7.t["26uMPD"]),
        e7.intl.string(e7.t.uFs7R0),
        e7.intl.string(e7.t.bLXdcX),
        e7.intl.string(e7.t.gPg9fX),
    ];
}
let tm = 750;
function tg() {
    let e = i.useRef(null),
        t = i.useCallback((t) => {
            e.current = () => {
                t.onMouseDown(), t.onClick();
            };
        }, []),
        [n, r] = i.useState(),
        [a, o] = i.useState(!1);
    return (
        (0, v.Z)(() => o(!0), tm),
        i.useEffect(() => {
            let t = (t) => {
                var n;
                let { highlightBadge: i } = t;
                null != i && r(i), null == (n = e.current) || n.call(e);
            };
            return (
                eY.S.subscribe(e3.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, t),
                () => {
                    eY.S.unsubscribe(e3.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, t);
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
function tE(e) {
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
        g = (0, P.Z)(null == s ? void 0 : s.avatarDecoration),
        E = (0, eV.NZ)({
            avatarDecoration: g,
            size: (0, w.y9)(m.EFr.SIZE_32),
        }),
        y = (0, m.dQu)(m.TVs.modules.guildbar.AVATAR_SIZE),
        O = (0, Z.Z)("Account") ? 32 : y,
        { updateOpenPopoutRef: v, highlightBadge: I, setHighlightBadge: T } = tg(),
        S = (0, er.A)(f);
    return null == s
        ? null
        : (0, r.jsx)(b.Z, {
              object: e3.qAy.AVATAR,
              children: (0, r.jsx)(e_.Z, {
                  user: s,
                  targetElementRef: h,
                  clickTrap: !0,
                  preload: () =>
                      (0, ed.Z)(s.id, s.getAvatarURL(void 0, e_.I), {
                          type: "account_popout",
                          withMutualGuilds: !1,
                          withMutualFriends: !1,
                      }),
                  renderPopout: (e, t) => {
                      let { closePopout: n, setPopoutRef: i } = e;
                      return (0, r.jsx)(et.Z, {
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
                          tr(
                              tt(
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
                                  "aria-label": e7.intl.string(e7.t["3Uj+2t"]),
                                  "data-jump-section": _,
                                  className: o()(e9.avatarWrapper, { [e9.plated]: null != f }),
                                  children: [
                                      (0, r.jsx)(to, {
                                          size: m.EFr["SIZE_".concat(O)],
                                          src: s.getAvatarURL(void 0, O - 4, !1),
                                          avatarDecoration: E,
                                          "aria-label": s.username,
                                          status: a ? e3.Skl.STREAMING : l,
                                          isSpeaking: n,
                                          className: e9.avatar,
                                      }),
                                      (0, r.jsx)("div", {
                                          className: o()(e9.nameTag, { [e9.canCopy]: eF.wS }),
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
function tb() {
    return (0, eJ.Q)("Account").jumpToVoice && ej.Z.isConnected();
}
function ty() {
    return tb() ? e3.oAB.VOICE : e3.oAB.ACCOUNT;
}
class tO extends i.PureComponent {
    get isCopiedStreakGodlike() {
        let { copiedStreak: e } = this.state;
        return e >= tc - 1;
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
            t = th(),
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
            (0, T.Z)({
                activities: t,
                status: a,
                applicationStream: n,
                voiceChannel: s ? l : void 0,
            })
        )
            return (0, r.jsx)(C.Z, {
                hoverText: o,
                forceHover: e,
                children: (0, r.jsx)(S.Z, {
                    location: "Account",
                    user: i,
                    activities: t,
                    applicationStream: n,
                    voiceChannel: s ? l : void 0,
                    textClassName: e9.activityStatusText,
                    hideTooltip: !0,
                }),
            });
        let c =
            null == t
                ? void 0
                : t.find((e) => {
                      let { type: t } = e;
                      return t === e3.IIU.CUSTOM_STATUS;
                  });
        return null != c
            ? (0, r.jsx)(C.Z, {
                  hoverText: o,
                  forceHover: e,
                  children: (0, r.jsx)(F.Z, {
                      activity: c,
                      emojiClassName: e9.emoji,
                      className: e9.customStatus,
                  }),
              })
            : null != a && a !== e3.Skl.UNKNOWN && i.hasUniqueUsername()
              ? (0, r.jsx)(C.Z, {
                    hoverText: o,
                    forceHover: e,
                    children: (0, r.jsx)(A.Z, { text: eX.ZP.humanizeStatus(a) }),
                })
              : o;
    }
    renderAvatarWithPopout(e) {
        let {
            focusSectionProps: { "data-jump-section": t },
            onClick: n,
        } = e;
        return (0, r.jsx)(
            tE,
            tr(tt({}, this.props), {
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
        } = this.props;
        if (null == t) return null;
        if (!(null != this.avatarWithPopoutRef.current && this.props.isQuestBarEmpty))
            return this.renderAvatarWithPopout({ focusSectionProps: e });
        if (i === d.z.GUILD_TAG_AVAILABLE_COACHMARK) {
            var o;
            return (0, r.jsx)(Q.ZP, {
                guildId: null != (o = this.props.selectedGuildId) ? o : null,
                onDismiss: a,
                targetElementRef: this.avatarWithPopoutRef,
                children: this.renderAvatarWithPopout({ focusSectionProps: e }),
            });
        }
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(el.Z, {
                    groupName: e8.R.ACCOUNT_NAME_ZONE,
                    targetElementRef: this.avatarWithPopoutRef,
                }),
                (0, r.jsx)(H.ZP, {
                    contentTypes: n.avatar,
                    groupName: e8.R.ACCOUNT_NAME_ZONE,
                    children: (t) => {
                        let { visibleContent: n, markAsDismissed: i } = t;
                        switch (n) {
                            case d.z.PREMIUM_SUBSCRIPTION_APRIL_MARKETING_DECO_TOOLTIP:
                                return (0, r.jsx)(V.Z, {
                                    markAsDismissed: i,
                                    targetElementRef: this.avatarWithPopoutRef,
                                    children: () => this.renderAvatarWithPopout({ focusSectionProps: e }),
                                });
                            case d.z.DISPLAY_NAME_STYLES_COACHMARK:
                                return (0, r.jsx)(z.e, {
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
                                  className: o()(e9.container, {
                                      [e9.containerRtcOpened]: null != n,
                                      [e9.containerQuestBarVisible]: !i,
                                      [e9.containerListenAlongVisible]: a,
                                  }),
                                  onMouseEnter: this.handleMouseEnter,
                                  onMouseLeave: this.handleMouseLeave,
                                  children: [
                                      (0, r.jsx)(ea.Z, {
                                          nameplate: t,
                                          hovered: s,
                                          placement: ei.i.ACCOUNT,
                                      }),
                                      this.renderNameZone(e),
                                      (0, r.jsx)(
                                          tv,
                                          tr(tt({}, this.props, this.state), {
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
                              (0, r.jsx)($.Z, {}),
                          ],
                      }),
              });
    }
    constructor(...e) {
        super(...e),
            te(this, "copiedTimeout", new f.V7()),
            te(this, "copiedDecayTimeout", new f.V7()),
            te(this, "speakingWhileMutedTooltipTimeout", new f.V7()),
            te(this, "lastSpeakingWhileMutedNotificationTime", void 0),
            te(this, "state", {
                hovered: !1,
                copiedStreak: 0,
                shouldShowNametagTooltip: !1,
                shouldShowCopiedFeedback: !1,
                shouldShowSpeakingWhileMutedTooltip: !1,
                hoveringOnMute: !1,
            }),
            te(this, "containerRef", i.createRef()),
            te(this, "avatarWithPopoutRef", i.createRef()),
            te(this, "handleToggleSelfMute", () => {
                let { serverMute: e, suppress: t, selfMute: n } = this.props;
                (0, U.Z)(e, t, e3.jXE.ACCOUNT_PANEL), (0, G.v)(N.Z.ACCOUNT, G.d.MIC, n);
            }),
            te(this, "handleToggleSelfDeaf", () => {
                let { serverDeaf: e, selfDeaf: t } = this.props;
                (0, k.Z)(e, e3.jXE.ACCOUNT_PANEL), (0, G.v)(N.Z.ACCOUNT, G.d.DEAFEN, !t);
            }),
            te(this, "handleOpenAccountSettings", () => {
                var e, t, n, r;
                null == (e = (t = this.props).dismissInputDeviceChangedTooltip) || e.call(t),
                    null == (n = (r = this.props).dismissOutputDeviceChangedTooltip) || n.call(r),
                    this.handleOpenSettings();
            }),
            te(this, "handleOpenSettings", function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ty(),
                    t = arguments.length > 1 ? arguments[1] : void 0,
                    n = arguments.length > 2 ? arguments[2] : void 0;
                E.Z.open(e, t, n);
            }),
            te(this, "handleOpenSettingsContextMenu", (e) => {
                let { currentUser: t } = this.props;
                null != t &&
                    (0, g.jW)(e, async () => {
                        let { default: e } = await n.e("2535").then(n.bind(n, 923422));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                tr(tt({}, n), {
                                    user: t,
                                    premiumSubscription: this.props.premiumSubscription,
                                    webBuildOverride: this.props.webBuildOverride,
                                    onInteraction: (0, B.u)("UserSettingsCogContextMenu", N.Z.ACCOUNT),
                                }),
                            );
                    });
            }),
            te(this, "audioOnInteractionHandler", (0, B.u)("AudioDeviceMenu", N.Z.ACCOUNT)),
            te(this, "handleInputAudioContextMenu", (e, t) => {
                (0, g.jW)(e, async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 659580));
                    return () => {
                        let { enabledInputProfiles: n } = (0, ep.c)({ location: "Account" });
                        return (0, r.jsx)(R.Gt, {
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
            te(this, "handleOutputAudioContextMenu", (e, t) => {
                (0, g.jW)(e, async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 659580));
                    return () =>
                        (0, r.jsx)(R.Gt, {
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
            te(this, "handleMouseEnter", () => {
                this.setState({ hovered: !0 });
            }),
            te(this, "handleMouseLeave", () => {
                this.setState({ hovered: !1 });
            }),
            te(this, "handleMouseEnterMute", () => {
                this.setState({
                    hoveringOnMute: !0,
                    shouldShowSpeakingWhileMutedTooltip: !1,
                }),
                    this.speakingWhileMutedTooltipTimeout.stop();
            }),
            te(this, "handleMouseLeaveMute", () => {
                this.setState({ hoveringOnMute: !1 });
            }),
            te(this, "handleCopyTag", () => {
                let { currentUser: e } = this.props,
                    { shouldShowNametagTooltip: t, copiedStreak: n } = this.state;
                if (null == e) return;
                (0, eF.JG)(
                    eX.ZP.getUserTag(e, {
                        decoration: "never",
                        identifiable: "always",
                    }),
                ),
                    eZ.default.track(e3.rMx.TEXT_COPIED, { type: "User Tag" });
                let r = {
                    shouldShowCopiedFeedback: !0,
                    shouldShowNametagTooltip: !0,
                };
                t || (r.copiedStreak = n + 1),
                    this.setState(r, () => {
                        this.copiedTimeout.start(tl, () => this.setState({ shouldShowNametagTooltip: !1 })),
                            this.copiedDecayTimeout.start(ts, () => this.setState({ copiedStreak: 0 }));
                    });
            }),
            te(this, "handleOccludedChanged", () => {
                let { occluded: e } = this.props;
                e &&
                    this.setState({
                        shouldShowNametagTooltip: !1,
                        shouldShowSpeakingWhileMutedTooltip: !1,
                    });
            }),
            te(this, "handleSpeakingWhileMutedChanged", () => {
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
                        Date.now() - this.lastSpeakingWhileMutedNotificationTime > td;
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
                              this.speakingWhileMutedTooltipTimeout.start(tu, () =>
                                  this.setState({ shouldShowSpeakingWhileMutedTooltip: !1 }),
                              );
                      })
                    : (this.setState({ shouldShowSpeakingWhileMutedTooltip: !1 }),
                      this.speakingWhileMutedTooltipTimeout.stop());
            }),
            te(this, "renderNameTag", (e) => {
                let { currentUser: t, isDisplayNameStylesEnabled: n } = this.props;
                if (null == t) return null;
                let i = n && null != e;
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)("div", {
                            className: e9.panelTitleContainer,
                            children: (0, r.jsx)(e2.Z, {
                                className: o()({ [e9.withDisplayNameStyles]: i }),
                                children: (0, r.jsx)(q.Z, {
                                    userName: eX.ZP.getName(t),
                                    displayNameStyles: e,
                                    effectDisplayType: this.state.hovered ? K.F.ANIMATED : K.F.STATIC,
                                    loop: !0,
                                    inProfile: !0,
                                }),
                            }),
                        }),
                        (0, r.jsx)("div", {
                            className: e9.panelSubtextContainer,
                            children: (0, r.jsx)(e1.Z, { children: this.renderStatus() }),
                        }),
                    ],
                });
            });
    }
}
function tv(e) {
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
            handleOutputAudioContextMenu: g,
            handleOpenAccountSettings: E,
            handleOpenSettingsContextMenu: b,
            dismissibleContents: y,
            nameplate: O,
            accountContainerRef: v,
            shouldShowInputDeviceChangedTooltip: I = !1,
            shouldShowOutputDeviceChangedTooltip: T = !1,
        } = e,
        S = (0, er.A)(O),
        { name: A } = (0, ee.p6)(e5.h7.AUDIO_INPUT),
        { name: C } = (0, ee.p6)(e5.h7.AUDIO_OUTPUT);
    return (0, r.jsxs)("div", {
        className: e9.buttons,
        style: S,
        children: [
            (0, r.jsx)(tA, {
                accountContainerRef: v,
                selfMute: n,
                serverMute: a,
                suppress: s,
                awaitingRemote: i,
                tooltipText: l ? e7.intl.string(e7.t["29gnR0"]) : void 0,
                tooltipColor: l ? m.FGA.GREEN : void 0,
                tooltipForceOpen: l || void 0,
                onMouseEnter: d,
                onMouseLeave: f,
                onClick: p,
                onContextMenu: h,
                iconForeground: null != O ? e9.iconForeground : void 0,
                nameplate: O,
            }),
            (0, r.jsx)(tC, {
                selfDeaf: t,
                serverDeaf: o,
                onClick: _,
                onContextMenu: g,
                awaitingRemote: i,
                iconForeground: null != O ? e9.iconForeground : void 0,
                nameplate: O,
            }),
            (0, r.jsx)(tS, {
                isEligibleForPomelo: c,
                webBuildOverride: u,
                onClick: E,
                onContextMenu: b,
                dismissibleContents: y.settings,
                iconForeground: null != O ? e9.iconForeground : void 0,
                nameplate: O,
                tooltipText: I
                    ? e7.intl.format(e7.t["18wnuL"], { inputDeviceName: A })
                    : T
                      ? e7.intl.format(e7.t["f+DDY2"], { outputDeviceName: C })
                      : void 0,
                tooltipColor: I || T ? m.FGA.GREEN : void 0,
                tooltipForceOpen: I || T,
                "aria-label": I
                    ? e7.intl.formatToPlainString(e7.t["18wnuL"], { inputDeviceName: A })
                    : T
                      ? e7.intl.formatToPlainString(e7.t["f+DDY2"], { outputDeviceName: C })
                      : void 0,
            }),
        ],
    });
}
function tI(e) {
    let { shouldShowDeviceChangedNotifications: t } = (0, e$.P)({
            location: "Account.useDeviceChangedTooltip",
            autoTrackExposure: !1,
        }),
        n = (0, u.e7)([ej.Z], () => null != ej.Z.getChannelId()),
        r = (0, ee.Fh)(e),
        a = i.useRef(new f.V7()),
        [o, s] = i.useState(!1);
    i.useEffect(() => {
        n &&
            r &&
            ((0, e$._)({
                location: "Account.useDeviceChangedTooltip (exposure tracking)",
                autoTrackExposure: !0,
            }),
            t &&
                (s(!0),
                a.current.start(tp, () => {
                    s(!1);
                })));
    }, [n, r, t]);
    let l = i.useCallback(() => {
        s(!1), a.current.stop();
    }, []);
    return (
        (0, O.zq)(() => {
            a.current.stop();
        }),
        {
            shouldShowTooltip: o,
            dismissTooltip: l,
        }
    );
}
function tT() {
    var e;
    let t = (0, u.e7)([eG.default], () => eG.default.getCurrentUser()),
        n = (0, u.e7)([eP.default], () => eP.default.getId()),
        {
            activities: i,
            streaming: a,
            status: o,
        } = (0, u.cj)([ek.Z], () => {
            let e = ek.Z.getActivities();
            return {
                activities: e,
                streaming:
                    null !=
                    e.find((e) => {
                        let { type: t } = e;
                        return t === e3.IIU.STREAMING;
                    }),
                status: ek.Z.getStatus(),
            };
        }),
        s = (0, u.e7)([eR.Z], () => eR.Z.getAnyStreamForUser(n)),
        c = (0, y.Z)({ userId: n }),
        f = eX.ZP.useUserTag(t, { decoration: "never" }),
        _ = (0, u.e7)([eU.Z], () => eU.Z.hidePersonalInformation),
        p = (0, u.e7)([ej.Z, ew.Z], () => {
            let e = ej.Z.getChannelId();
            return null != e ? ew.Z.getChannel(e) : null;
        }),
        { mute: h, selfMute: g, suppress: E } = (0, em.Z)(p),
        { selfDeaf: b, deaf: O } = (0, eh.Z)(p),
        v = (0, u.e7)([D.C], () => {
            var e;
            return (0, x.fD)()
                ? null == (e = D.C.getCurrentBuildOverride().overrides)
                    ? void 0
                    : e.discord_web
                : null;
        }),
        T = (0, u.e7)([eB.Z], () => eB.Z.getPremiumTypeSubscription()),
        S = (0, u.e7)([eL.Z], () => eL.Z.getSpeakingWhileMuted()),
        A = (0, u.e7)([L.Z], () => L.Z.isFullscreenInContext()),
        C = (0, u.e7)([ex.Z], () => ex.Z.hasLayers()),
        P = (0, m.s9z)(m.JQI) || C || eq.s.isDisallowPopupsSet() || A,
        w = (0, eo.b)(),
        j = (0, u.e7)([X.Z], () => null != X.Z.getAwaitingRemoteSessionInfo()),
        M = (0, u.e7)([eM.Z], () => eM.Z.getGuildId()),
        k = ez.ZP.canUsePremiumGuildMemberProfile(t),
        U = (null == t || null == (e = t.avatarDecoration) ? void 0 : e.skuId) === e4.rL,
        { voiceActivityStatusEnabled: G } = (0, I.U)({ location: "Account" }),
        [B, Z] = (0, J.G)(null != M ? M : null),
        V = Y.J.useExperiment({ location: "Account" }).enabled,
        { analyticsLocations: F } = (0, R.ZP)(N.Z.ACCOUNT),
        H = (0, en.K)({ user: t }),
        K = (0, ec.Ws)({ location: e6.dr.CONFLICT_CHECKS }),
        z = (0, u.e7)([eu.Z, eG.default, eD.Z], () => {
            let e,
                t = eu.Z.getSyncingWith(),
                n = eu.Z.getActivity(),
                r = [];
            if (
                (null != t ? (e = t.partyId) : null != n && null != n.party && null != n.party.id && (e = n.party.id),
                null != e)
            ) {
                var i;
                r = l()(Array.from(null != (i = eD.Z.getParty(e)) ? i : []))
                    .map((e) => eG.default.getUser(e))
                    .filter(eK.lm)
                    .value();
            }
            return r.length > 1;
        }),
        { shouldShowTooltip: q, dismissTooltip: Q } = tI(e5.h7.AUDIO_INPUT),
        { shouldShowTooltip: $, dismissTooltip: ee } = tI(e5.h7.AUDIO_OUTPUT),
        et = {
            avatar: [],
            settings: [],
        };
    !P &&
        (k && et.settings.push(d.z.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK),
        U && et.avatar.push(d.z.PREMIUM_SUBSCRIPTION_APRIL_MARKETING_DECO_TOOLTIP),
        V && et.avatar.push(d.z.DISPLAY_NAME_STYLES_COACHMARK));
    let er = (0, W.Y)({ location: "AccountConnected" });
    return (0, r.jsx)(R.Gt, {
        value: F,
        children: (0, r.jsx)(tO, {
            currentUser: t,
            activities: i,
            applicationStream: s,
            voiceChannel: p,
            dismissibleContents: et,
            visibleRecurringAvatarDc: B,
            markRecurringAvatarDcAsDismissed: Z,
            userTag: f,
            hidePrivateData: _,
            occluded: P,
            premiumSubscription: T,
            selfDeaf: b,
            selfMute: g,
            serverDeaf: O,
            serverMute: h,
            speaking: c,
            speakingWhileMuted: S,
            status: o,
            streaming: a,
            suppress: E,
            webBuildOverride: v,
            awaitingRemote: j,
            isEligibleForPomelo: w,
            voiceActivityStatusEnabled: G,
            nameplate: H,
            selectedGuildId: M,
            isQuestBarEmpty: K,
            isListenAlongVisible: z,
            isDisplayNameStylesEnabled: er,
            shouldShowInputDeviceChangedTooltip: q,
            shouldShowOutputDeviceChangedTooltip: $,
            dismissInputDeviceChangedTooltip: Q,
            dismissOutputDeviceChangedTooltip: ee,
        }),
    });
}
function tS(e) {
    let {
            webBuildOverride: t,
            isEligibleForPomelo: n,
            onClick: a,
            onContextMenu: o,
            dismissibleContents: s,
            iconForeground: l,
            nameplate: c,
            tooltipText: u,
            tooltipColor: f,
            tooltipForceOpen: _,
            "aria-label": h,
        } = e,
        g = i.useRef(null),
        E = m.ewm,
        b = (0, p.i)();
    E = null != t ? m.bgT : n ? m.Ncx : b.Component;
    let [y, O] = (0, H.US)(s),
        v = (e) =>
            e === d.z.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK
                ? () => (0, r.jsx)(ef.Z, {})
                : () => (0, r.jsx)(r.Fragment, {});
    return (0, r.jsx)(m.yRy, {
        targetElementRef: g,
        position: "top",
        align: "center",
        shouldShow: null != y,
        renderPopout: v(y),
        children: () =>
            (0, r.jsx)(
                e0.Z,
                tr(
                    tt(
                        {
                            ref: g,
                            tooltipText:
                                null != u
                                    ? u
                                    : null != t
                                      ? e7.intl.formatToPlainString(e7.t.Gzh6ZG, { webBuildOverride: t.id })
                                      : e7.intl.string(e7.t.cduTBA),
                            tooltipColor: f,
                            tooltipForceOpen: _,
                            tooltipClassName: e9.accountButtonsTooltip,
                            tooltipContentClassName: e9.accountButtonsTooltipContent,
                            "aria-label": h,
                            onClick: a,
                            onContextMenu: o,
                            icon: (0, r.jsx)(E, {
                                size: "refresh_sm",
                                color: "currentColor",
                                className: l,
                            }),
                        },
                        b.events,
                    ),
                    { plated: null != c },
                ),
            ),
    });
}
function tA(e) {
    let {
            selfMute: t,
            serverMute: n,
            suppress: a,
            awaitingRemote: s,
            tooltipText: l,
            tooltipColor: f,
            tooltipForceOpen: _,
            iconForeground: p,
            onMouseEnter: g,
            onMouseLeave: E,
            onClick: b,
            onContextMenu: y,
            nameplate: O,
            accountContainerRef: v,
        } = e,
        I = t || a || n,
        T = i.useRef(null),
        S = i.useRef(null),
        A = (0, eN.b)(I),
        { activeVoice: C, mostRecentlyRequestedVoiceId: P, lastInitAttemptMayHaveCrashed: w } = (0, eO.o)(),
        { showSilentLagWarning: D } = (0, ey.Y)(),
        x = null != C,
        L = (0, eb.z)(C),
        j = (0, u.e7)([ej.Z], () => ej.Z.isConnected()),
        { Component: k, events: U, play: G } = A,
        B = n || a ? m.v0G : k,
        Z = D ? e7.intl.string(e7.t.ARRV6u) : null,
        V = (0, M.Z)(t, n, a, s),
        F =
            null != l
                ? l
                : null != Z
                  ? (0, r.jsxs)("div", {
                        className: e9.tooltipWithSubtext,
                        children: [
                            (0, r.jsx)(m.Text, {
                                variant: "text-sm/medium",
                                color: "currentColor",
                                children: V,
                            }),
                            null != Z &&
                                (0, r.jsx)(m.Text, {
                                    variant: "text-xs/medium",
                                    color: "text-feedback-warning",
                                    children: Z,
                                }),
                        ],
                    })
                  : V,
        { analyticsLocations: Y } = (0, R.ZP)(N.Z.AUDIO_INPUT_BUTTON),
        W = (0, eg.Hu)({
            location: N.Z.AUDIO_INPUT_BUTTON,
            autoTrackExposure: !0,
        }),
        K = (0, eE.av)({
            location: N.Z.AUDIO_INPUT_BUTTON,
            autoTrackExposure: !0,
        });
    i.useEffect(() => () => G(), [I, G]);
    let z = i.useCallback(
            (e) => {
                y(e, Y);
            },
            [y, Y],
        ),
        [q, X] = i.useState(!1),
        Q = i.useCallback((e) => {
            var t;
            if (
                (0, c.k)(null == e ? void 0 : e.target, Node) &&
                (null == (t = T.current) ? void 0 : t.contains(e.target))
            )
                return h.F;
            X(!1);
        }, []);
    (0, eH.yp)({
        event: e3.CkL.OPEN_VOICE_FILTER_POPOUT,
        handler: () => {
            X(!0);
        },
    });
    let [J, $] = i.useState(!1);
    i.useEffect(() => {
        let e;
        return (
            j &&
                x &&
                (e = setTimeout(() => {
                    $(!0), (e = setTimeout(() => $(!1), tf));
                }, t_)),
            () => {
                $(!1), clearTimeout(e);
            }
        );
    }, [j]);
    let ee = i.useCallback(() => {
            w || (0, ev.r5)();
        }, [w]),
        et = I ? m.TVs.colors.STATUS_DANGER : D ? m.TVs.colors.STATUS_WARNING : "currentColor",
        en = I || D,
        er = (0, es.Z)({ location: "Account" });
    return (0, r.jsx)(R.Gt, {
        value: Y,
        children: (0, r.jsxs)("div", {
            ref: T,
            className: o()(e9.micButtonParent, { [e9.hasColorGlow]: en }),
            children: [
                (0, r.jsx)(e0.Z, {
                    tooltipText: F,
                    tooltipColor: f,
                    tooltipForceOpen: _,
                    plated: null != O,
                    onMouseEnter: () => {
                        g(), U.onMouseEnter();
                    },
                    onMouseLeave: () => {
                        E(), U.onMouseLeave();
                    },
                    icon: (0, r.jsx)(B, {
                        size: "custom",
                        width: 20,
                        height: 20,
                        color: et,
                        className: p,
                    }),
                    onClick: b,
                    onContextMenu: z,
                    role: "switch",
                    className: o()({ [e9.micButtonWithMenu]: W }),
                    orangeGlow: D,
                    redGlow: I,
                    "aria-label": e7.intl.string(e7.t["w4m94+"]),
                    "aria-checked": I,
                    disabled: s,
                }),
                W &&
                    (0, r.jsx)(m.yRy, {
                        targetElementRef: v,
                        position: "top",
                        align: "left",
                        nudgeAlignIntoViewport: !1,
                        animation: m.yRy.Animation.FADE,
                        useMouseEnter: !0,
                        ignoreModalClicks: !0,
                        onRequestOpen: ee,
                        onRequestClose: Q,
                        shouldShow: q,
                        renderPopout: (e) => {
                            let { closePopout: t } = e;
                            return (0, r.jsx)(eA.l, { onSettingsButtonClick: t });
                        },
                        children: (e, t) => {
                            var { onClick: n } = e,
                                i = ti(e, ["onClick"]),
                                { isShown: a } = t;
                            let o = a ? m.u04 : m.CJ0,
                                l = [];
                            return (
                                !a &&
                                    (er && l.push(d.z.VOICE_FILTER_EARLY_ACCESS_COACHMARK),
                                    l.push(d.z.VOICE_FILTER_LAUNCH_COACHMARK),
                                    K && j && !x && l.push(d.z.VOICE_FILTER_FIRST_USE_COACHMARK)),
                                (0, r.jsx)("div", {
                                    children: (0, r.jsx)(H.ZP, {
                                        bypassAutoDismiss: !0,
                                        contentTypes: l,
                                        children: (e) => {
                                            let { visibleContent: t, markAsDismissed: a } = e,
                                                l = null;
                                            t === d.z.VOICE_FILTER_EARLY_ACCESS_COACHMARK
                                                ? (l = (0, r.jsx)(eS.U, {
                                                      markAsDismissed: a,
                                                      onCTA: () => X(!0),
                                                  }))
                                                : t === d.z.VOICE_FILTER_LAUNCH_COACHMARK
                                                  ? (l = (0, r.jsx)(eT.n, {
                                                        markAsDismissed: a,
                                                        onCTA: () => X(!0),
                                                    }))
                                                  : t === d.z.VOICE_FILTER_FIRST_USE_COACHMARK &&
                                                    (l = (0, r.jsx)(eI.v, {
                                                        markAsDismissed: a,
                                                        onCTA: () => X(!0),
                                                    }));
                                            let c = () =>
                                                (0, r.jsx)(
                                                    e0.Z,
                                                    tt(
                                                        {
                                                            ref: S,
                                                            plated: null != O,
                                                            tooltipForceOpen: J,
                                                            tooltipColor: J ? m.FGA.GREEN : void 0,
                                                            tooltipContentClassName: J ? e9.voiceFilterWarning : void 0,
                                                            tooltipText: J
                                                                ? (0, r.jsxs)(r.Fragment, {
                                                                      children: [
                                                                          (0, r.jsx)("img", {
                                                                              alt:
                                                                                  null != L
                                                                                      ? e7.intl.string(L.name)
                                                                                      : "",
                                                                              src: null == L ? void 0 : L.iconURL,
                                                                              draggable: !1,
                                                                          }),
                                                                          (0, r.jsx)(m.Text, {
                                                                              variant: "text-sm/medium",
                                                                              color: "always-white",
                                                                              children: e7.intl.string(e7.t.VlC1dX),
                                                                          }),
                                                                      ],
                                                                  })
                                                                : e7.intl.string(e7.t.Hapb4O),
                                                            icon: (0, r.jsx)(o, {
                                                                className: e9.buttonChevronIcon,
                                                                size: "custom",
                                                                width: 12,
                                                                height: 12,
                                                                color: et,
                                                            }),
                                                            role: "button",
                                                            className: e9.buttonChevron,
                                                            orangeGlow: D,
                                                            redGlow: I,
                                                            "aria-label": e7.intl.string(e7.t.Hapb4O),
                                                            disabled: s,
                                                            onClick: (e) => {
                                                                a(e8.L.INDIRECT_ACTION),
                                                                    n(e),
                                                                    null != P && !q && w
                                                                        ? (0, eC.$)(() => X(!0))
                                                                        : X(!q);
                                                            },
                                                        },
                                                        i,
                                                    ),
                                                );
                                            return null != l
                                                ? (0, r.jsx)(m.yRy, {
                                                      targetElementRef: S,
                                                      renderPopout: () => l,
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
function tC(e) {
    let {
            selfDeaf: t,
            serverDeaf: n,
            awaitingRemote: a,
            onClick: s,
            onContextMenu: l,
            iconForeground: c,
            nameplate: u,
        } = e,
        d = t || n,
        {
            Component: f,
            play: p,
            events: { onMouseEnter: h, onMouseLeave: g },
        } = (0, _.l)(d ? "undeafen" : "deafen"),
        E = n ? m.Vm4 : f,
        { analyticsLocations: b } = (0, R.ZP)(N.Z.AUDIO_OUTPUT_BUTTON);
    i.useEffect(() => () => p(), [d, p]);
    let y = i.useCallback(
        (e) => {
            l(e, b);
        },
        [l, b],
    );
    return (0, r.jsx)(R.Gt, {
        value: b,
        children: (0, r.jsx)(e0.Z, {
            plated: null != u,
            tooltipText: (0, j.Z)(t, n, a),
            onMouseEnter: h,
            onMouseLeave: g,
            icon: (0, r.jsx)(E, {
                size: "custom",
                width: 20,
                height: 20,
                color: d ? m.TVs.colors.STATUS_DANGER : "currentColor",
                className: c,
            }),
            onClick: s,
            onContextMenu: y,
            innerClassName: o()({ [e9.redIcon]: n }),
            iconForeground: d ? e9.strikethrough : void 0,
            role: "switch",
            redGlow: d,
            "aria-label": e7.intl.string(e7.t.wjcRFR),
            "aria-checked": d,
            disabled: a,
        }),
    });
}
