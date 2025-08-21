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
    k = n(659580),
    U = n(855844),
    G = n(55311),
    B = n(575175),
    Z = n(522651),
    V = n(795318),
    F = n(338390),
    H = n(64220),
    Y = n(427217),
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
    eE = n(321614),
    eb = n(879815),
    ey = n(294629),
    eO = n(875527),
    ev = n(702977),
    eI = n(56848),
    eT = n(940315),
    eS = n(378441),
    eA = n(358820),
    eC = n(723547),
    eN = n(361045),
    eR = n(74650),
    eP = n(306609),
    ew = n(170293),
    eD = n(8404),
    ex = n(199902),
    eL = n(314897),
    ej = n(592125),
    eM = n(831506),
    ek = n(819640),
    eU = n(131951),
    eG = n(19780),
    eB = n(914010),
    eZ = n(885110),
    eV = n(246946),
    eF = n(594174),
    eH = n(78839),
    eY = n(626135),
    eW = n(768581),
    eK = n(572004),
    ez = n(459273),
    eq = n(585483),
    eX = n(70956),
    eQ = n(823379),
    eJ = n(74538),
    e$ = n(374023),
    e0 = n(51144),
    e1 = n(998502),
    e2 = n(578817),
    e3 = n(853170),
    e4 = n(422202),
    e8 = n(870569),
    e6 = n(345243),
    e5 = n(115530),
    e7 = n(981631),
    e9 = n(215023),
    te = n(921944),
    tt = n(46140),
    tn = n(65154),
    tr = n(388032),
    ti = n(25874);
function ta(e, t, n) {
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
function to(e) {
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
                ta(e, t, n[t]);
            });
    }
    return e;
}
function ts(e, t) {
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
function tl(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ts(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function tc(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = tu(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function tu(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let td = e1.ZP.getEnableHardwareAcceleration() ? m.Xo$ : m.qEK,
    tf = 2000,
    t_ = 1000,
    tp = 11,
    th = 2000,
    tm = 2 * eX.Z.Millis.MINUTE,
    tg = 3 * eX.Z.Millis.SECOND,
    tE = 300,
    tb = 5 * eX.Z.Millis.SECOND;
function ty() {
    return [
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
    ];
}
let tO = 750;
function tv() {
    let e = i.useRef(null),
        t = i.useCallback((t) => {
            e.current = () => {
                t.onMouseDown(), t.onClick();
            };
        }, []),
        [n, r] = i.useState(),
        [a, o] = i.useState(!1);
    return (
        (0, v.Z)(() => o(!0), tO),
        i.useEffect(() => {
            let t = (t) => {
                var n;
                let { highlightBadge: i } = t;
                null != i && r(i), null == (n = e.current) || n.call(e);
            };
            return (
                eq.S.subscribe(e7.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, t),
                () => {
                    eq.S.unsubscribe(e7.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, t);
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
function tI(e) {
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
        E = (0, eW.NZ)({
            avatarDecoration: g,
            size: (0, w.y9)(m.EFr.SIZE_32),
        }),
        y = (0, m.dQu)(m.TVs.modules.guildbar.AVATAR_SIZE),
        O = (0, F.Z)("Account") ? 32 : y,
        { updateOpenPopoutRef: v, highlightBadge: I, setHighlightBadge: T } = tv(),
        S = (0, ea.A)(f);
    return null == s
        ? null
        : (0, r.jsx)(b.Z, {
              object: e7.qAy.AVATAR,
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
                          tl(
                              to(
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
                                  "aria-label": tr.intl.string(tr.t["3Uj+2t"]),
                                  "data-jump-section": _,
                                  className: o()(ti.avatarWrapper, { [ti.plated]: null != f }),
                                  children: [
                                      (0, r.jsx)(td, {
                                          size: m.EFr["SIZE_".concat(O)],
                                          src: s.getAvatarURL(void 0, O - 4, !1),
                                          avatarDecoration: E,
                                          "aria-label": s.username,
                                          status: a ? e7.Skl.STREAMING : l,
                                          isSpeaking: n,
                                          className: ti.avatar,
                                      }),
                                      (0, r.jsx)("div", {
                                          className: o()(ti.nameTag, { [ti.canCopy]: eK.wS }),
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
function tT() {
    return (0, e2.Q)("Account").jumpToVoice && eG.Z.isConnected();
}
function tS() {
    return tT() ? e7.oAB.VOICE : e7.oAB.ACCOUNT;
}
class tA extends i.PureComponent {
    get isCopiedStreakGodlike() {
        let { copiedStreak: e } = this.state;
        return e >= tp - 1;
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
            t = ty(),
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
                    textClassName: ti.activityStatusText,
                    hideTooltip: !0,
                }),
            });
        let c =
            null == t
                ? void 0
                : t.find((e) => {
                      let { type: t } = e;
                      return t === e7.IIU.CUSTOM_STATUS;
                  });
        return null != c
            ? (0, r.jsx)(C.Z, {
                  hoverText: o,
                  forceHover: e,
                  children: (0, r.jsx)(Y.Z, {
                      activity: c,
                      emojiClassName: ti.emoji,
                      className: ti.customStatus,
                  }),
              })
            : null != a && a !== e7.Skl.UNKNOWN && i.hasUniqueUsername()
              ? (0, r.jsx)(C.Z, {
                    hoverText: o,
                    forceHover: e,
                    children: (0, r.jsx)(A.Z, { text: e0.ZP.humanizeStatus(a) }),
                })
              : o;
    }
    renderAvatarWithPopout(e) {
        let {
            focusSectionProps: { "data-jump-section": t },
            onClick: n,
        } = e;
        return (0, r.jsx)(
            tI,
            tl(to({}, this.props), {
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
            return (0, r.jsx)($.ZP, {
                guildId: null != (o = this.props.selectedGuildId) ? o : null,
                onDismiss: a,
                targetElementRef: this.avatarWithPopoutRef,
                children: this.renderAvatarWithPopout({ focusSectionProps: e }),
            });
        }
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(eu.Z, {
                    groupName: te.R.ACCOUNT_NAME_ZONE,
                    targetElementRef: this.avatarWithPopoutRef,
                }),
                (0, r.jsx)(W.ZP, {
                    contentTypes: n.avatar,
                    groupName: te.R.ACCOUNT_NAME_ZONE,
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
                                  className: o()(ti.container, {
                                      [ti.containerRtcOpened]: null != n,
                                      [ti.containerQuestBarVisible]: !i,
                                      [ti.containerListenAlongVisible]: a,
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
                                          tC,
                                          tl(to({}, this.props, this.state), {
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
            ta(this, "copiedTimeout", new f.V7()),
            ta(this, "copiedDecayTimeout", new f.V7()),
            ta(this, "speakingWhileMutedTooltipTimeout", new f.V7()),
            ta(this, "lastSpeakingWhileMutedNotificationTime", void 0),
            ta(this, "state", {
                hovered: !1,
                copiedStreak: 0,
                shouldShowNametagTooltip: !1,
                shouldShowCopiedFeedback: !1,
                shouldShowSpeakingWhileMutedTooltip: !1,
                hoveringOnMute: !1,
            }),
            ta(this, "containerRef", i.createRef()),
            ta(this, "avatarWithPopoutRef", i.createRef()),
            ta(this, "handleToggleSelfMute", () => {
                let { serverMute: e, suppress: t, selfMute: n } = this.props;
                (0, B.Z)(e, t, e7.jXE.ACCOUNT_PANEL), (0, Z.v)(N.Z.ACCOUNT, Z.d.MIC, n);
            }),
            ta(this, "handleToggleSelfDeaf", () => {
                let { serverDeaf: e, selfDeaf: t } = this.props;
                (0, G.Z)(e, e7.jXE.ACCOUNT_PANEL), (0, Z.v)(N.Z.ACCOUNT, Z.d.DEAFEN, !t);
            }),
            ta(this, "handleOpenAccountSettings", () => {
                this.dismissTooltips(), this.handleOpenSettings();
            }),
            ta(this, "handleOpenSettings", function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tS(),
                    t = arguments.length > 1 ? arguments[1] : void 0,
                    n = arguments.length > 2 ? arguments[2] : void 0;
                E.Z.open(e, t, n);
            }),
            ta(this, "handleOpenSettingsContextMenu", (e) => {
                let { currentUser: t } = this.props;
                null != t &&
                    (0, g.jW)(e, async () => {
                        let { default: e } = await n.e("2535").then(n.bind(n, 923422));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                tl(to({}, n), {
                                    user: t,
                                    premiumSubscription: this.props.premiumSubscription,
                                    webBuildOverride: this.props.webBuildOverride,
                                    onInteraction: (0, V.u)("UserSettingsCogContextMenu", N.Z.ACCOUNT),
                                }),
                            );
                    });
            }),
            ta(this, "audioOnInteractionHandler", (0, V.u)("AudioDeviceMenu", N.Z.ACCOUNT)),
            ta(this, "handleInputAudioContextMenu", (e, t) => {
                this.dismissTooltips(),
                    (0, g.jW)(e, async () => {
                        let { default: e } = await Promise.resolve().then(n.bind(n, 659580));
                        return () => {
                            let { enabledInputProfiles: n } = (0, eE.c)({ location: "Account" });
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
            ta(this, "handleOutputAudioContextMenu", (e, t) => {
                this.dismissTooltips(),
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
            ta(this, "handleMouseEnter", () => {
                this.setState({ hovered: !0 });
            }),
            ta(this, "handleMouseLeave", () => {
                this.setState({ hovered: !1 });
            }),
            ta(this, "handleMouseEnterMute", () => {
                this.setState({
                    hoveringOnMute: !0,
                    shouldShowSpeakingWhileMutedTooltip: !1,
                }),
                    this.speakingWhileMutedTooltipTimeout.stop();
            }),
            ta(this, "handleMouseLeaveMute", () => {
                this.setState({ hoveringOnMute: !1 });
            }),
            ta(this, "dismissSpeakingWhileMutedTooltip", () => {
                this.setState({ shouldShowSpeakingWhileMutedTooltip: !1 }),
                    this.speakingWhileMutedTooltipTimeout.stop();
            }),
            ta(this, "dismissTooltips", () => {
                var e, t, n, r;
                null == (e = (t = this.props).dismissInputDeviceChangedTooltip) || e.call(t),
                    null == (n = (r = this.props).dismissOutputDeviceChangedTooltip) || n.call(r),
                    this.dismissSpeakingWhileMutedTooltip();
            }),
            ta(this, "handleCopyTag", () => {
                let { currentUser: e } = this.props,
                    { shouldShowNametagTooltip: t, copiedStreak: n } = this.state;
                if (null == e) return;
                (0, eK.JG)(
                    e0.ZP.getUserTag(e, {
                        decoration: "never",
                        identifiable: "always",
                    }),
                ),
                    eY.default.track(e7.rMx.TEXT_COPIED, { type: "User Tag" });
                let r = {
                    shouldShowCopiedFeedback: !0,
                    shouldShowNametagTooltip: !0,
                };
                t || (r.copiedStreak = n + 1),
                    this.setState(r, () => {
                        this.copiedTimeout.start(t_, () => this.setState({ shouldShowNametagTooltip: !1 })),
                            this.copiedDecayTimeout.start(tf, () => this.setState({ copiedStreak: 0 }));
                    });
            }),
            ta(this, "handleOccludedChanged", () => {
                let { occluded: e } = this.props;
                e &&
                    this.setState({
                        shouldShowNametagTooltip: !1,
                        shouldShowSpeakingWhileMutedTooltip: !1,
                    });
            }),
            ta(this, "handleSpeakingWhileMutedChanged", () => {
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
                        Date.now() - this.lastSpeakingWhileMutedNotificationTime > tm;
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
                              this.speakingWhileMutedTooltipTimeout.start(th, () =>
                                  this.setState({ shouldShowSpeakingWhileMutedTooltip: !1 }),
                              );
                      })
                    : (this.setState({ shouldShowSpeakingWhileMutedTooltip: !1 }),
                      this.speakingWhileMutedTooltipTimeout.stop());
            }),
            ta(this, "renderNameTag", (e) => {
                let { currentUser: t, isDisplayNameStylesEnabled: n } = this.props;
                if (null == t) return null;
                let i = n && null != e;
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)("div", {
                            className: ti.panelTitleContainer,
                            children: (0, r.jsx)(e5.Z, {
                                className: o()({ [ti.withDisplayNameStyles]: i }),
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
                            className: ti.panelSubtextContainer,
                            children: (0, r.jsx)(e6.Z, { children: this.renderStatus() }),
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
        S = (0, ea.A)(y);
    return (0, r.jsxs)("div", {
        className: ti.buttons,
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
                iconForeground: null != y ? ti.iconForeground : void 0,
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
                iconForeground: null != y ? ti.iconForeground : void 0,
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
                iconForeground: null != y ? ti.iconForeground : void 0,
                nameplate: y,
                shouldShowInputDeviceChangedTooltip: v,
                shouldShowOutputDeviceChangedTooltip: I,
            }),
        ],
    });
}
function tN(e) {
    let { shouldShowDeviceChangedNotifications: t } = (0, e4.P)({
            location: "Account.useDeviceChangedTooltip",
            autoTrackExposure: !1,
        }),
        n = (0, u.e7)([eG.Z], () => null != eG.Z.getChannelId()),
        r = (0, en.Fh)(e),
        a = i.useRef(new f.V7()),
        [o, s] = i.useState(!1);
    i.useEffect(() => {
        n &&
            r &&
            ((0, e4._)({
                location: "Account.useDeviceChangedTooltip (exposure tracking)",
                autoTrackExposure: !0,
            }),
            t &&
                (s(!0),
                a.current.start(tb, () => {
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
function tR() {
    var e;
    let t = (0, u.e7)([eF.default], () => eF.default.getCurrentUser()),
        n = (0, u.e7)([eL.default], () => eL.default.getId()),
        {
            activities: i,
            streaming: a,
            status: o,
        } = (0, u.cj)([eZ.Z], () => {
            let e = eZ.Z.getActivities();
            return {
                activities: e,
                streaming:
                    null !=
                    e.find((e) => {
                        let { type: t } = e;
                        return t === e7.IIU.STREAMING;
                    }),
                status: eZ.Z.getStatus(),
            };
        }),
        s = (0, u.e7)([ex.Z], () => ex.Z.getAnyStreamForUser(n)),
        c = (0, y.Z)({ userId: n }),
        f = e0.ZP.useUserTag(t, { decoration: "never" }),
        _ = (0, u.e7)([eV.Z], () => eV.Z.hidePersonalInformation),
        p = (0, u.e7)([eG.Z, ej.Z], () => {
            let e = eG.Z.getChannelId();
            return null != e ? ej.Z.getChannel(e) : null;
        }),
        { mute: h, selfMute: g, suppress: E } = (0, ey.Z)(p),
        { selfDeaf: b, deaf: O } = (0, eb.Z)(p),
        v = (0, u.e7)([D.C], () => {
            var e;
            return (0, x.fD)()
                ? null == (e = D.C.getCurrentBuildOverride().overrides)
                    ? void 0
                    : e.discord_web
                : null;
        }),
        T = (0, u.e7)([eH.Z], () => eH.Z.getPremiumTypeSubscription()),
        S = (0, u.e7)([eU.Z], () => eU.Z.getSpeakingWhileMuted()),
        A = (0, u.e7)([L.Z], () => L.Z.isFullscreenInContext()),
        C = (0, u.e7)([ek.Z], () => ek.Z.hasLayers()),
        P = (0, m.s9z)(m.JQI) || C || e$.s.isDisallowPopupsSet() || A,
        w = (0, el.b)(),
        j = (0, u.e7)([J.Z], () => null != J.Z.getAwaitingRemoteSessionInfo()),
        M = (0, u.e7)([eB.Z], () => eB.Z.getGuildId()),
        k = eJ.ZP.canUsePremiumGuildMemberProfile(t),
        U = (null == t || null == (e = t.avatarDecoration) ? void 0 : e.skuId) === e9.rL,
        { voiceActivityStatusEnabled: G } = (0, I.U)({ location: "Account" }),
        [B, Z] = (0, ee.G)(null != M ? M : null),
        V = K.J.useExperiment({ location: "Account" }).enabled,
        { analyticsLocations: F } = (0, R.ZP)(N.Z.ACCOUNT),
        H = (0, ei.K)({ user: t }),
        Y = (0, ed.Ws)({ location: tt.dr.CONFLICT_CHECKS }),
        W = (0, u.e7)([ef.Z, eF.default, eM.Z], () => {
            let e,
                t = ef.Z.getSyncingWith(),
                n = ef.Z.getActivity(),
                r = [];
            if (
                (null != t ? (e = t.partyId) : null != n && null != n.party && null != n.party.id && (e = n.party.id),
                null != e)
            ) {
                var i;
                r = l()(Array.from(null != (i = eM.Z.getParty(e)) ? i : []))
                    .map((e) => eF.default.getUser(e))
                    .filter(eQ.lm)
                    .value();
            }
            return r.length > 1;
        }),
        q = (0, e_.k)({ location: "AccountConnected" }),
        X = {
            avatar: [],
            settings: [],
        };
    !P &&
        (k && X.settings.push(d.z.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK),
        U && X.avatar.push(d.z.PREMIUM_SUBSCRIPTION_APRIL_MARKETING_DECO_TOOLTIP),
        V && X.avatar.push(d.z.DISPLAY_NAME_STYLES_COACHMARK),
        q && X.avatar.push(d.z.WIDGETS_RTC_UPSELL_COACHMARK));
    let Q = (0, z.Y)({ location: "AccountConnected" }),
        { shouldShowTooltip: $, dismissTooltip: et } = tN(tn.h7.AUDIO_INPUT),
        { shouldShowTooltip: en, dismissTooltip: er } = tN(tn.h7.AUDIO_OUTPUT);
    return (0, r.jsx)(R.Gt, {
        value: F,
        children: (0, r.jsx)(tA, {
            currentUser: t,
            activities: i,
            applicationStream: s,
            voiceChannel: p,
            dismissibleContents: X,
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
            isQuestBarEmpty: Y,
            isListenAlongVisible: W,
            isDisplayNameStylesEnabled: Q,
            shouldShowInputDeviceChangedTooltip: $,
            shouldShowOutputDeviceChangedTooltip: en,
            dismissInputDeviceChangedTooltip: et,
            dismissOutputDeviceChangedTooltip: er,
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
            dismissibleContents: u,
            iconForeground: f,
            nameplate: _,
            shouldShowInputDeviceChangedTooltip: h,
            shouldShowOutputDeviceChangedTooltip: g,
        } = e,
        E = i.useRef(null),
        { showRefreshedAudioContextMenu: b } = (0, e3.e)({ location: "SettingsCogButton" }),
        y = !b && (h || g),
        { name: O } = (0, en.p6)(tn.h7.AUDIO_INPUT),
        { name: v } = (0, en.p6)(tn.h7.AUDIO_OUTPUT);
    !b && h
        ? ((t = tr.intl.format(tr.t["18wnuL"], { inputDeviceName: O })),
          (n = tr.intl.formatToPlainString(tr.t["18wnuL"], { inputDeviceName: O })),
          (a = tr.intl.formatToPlainString(tr.t["18wnuL"], { inputDeviceName: O })))
        : !b && g
          ? ((t = tr.intl.format(tr.t["f+DDY2"], { outputDeviceName: v })),
            (n = tr.intl.formatToPlainString(tr.t["f+DDY2"], { outputDeviceName: v })),
            (a = tr.intl.formatToPlainString(tr.t["f+DDY2"], { outputDeviceName: v })))
          : (t =
                null != o
                    ? tr.intl.formatToPlainString(tr.t.Gzh6ZG, { webBuildOverride: o.id })
                    : tr.intl.string(tr.t.cduTBA));
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
                e8.Z,
                tl(
                    to(
                        {
                            ref: E,
                            tooltipText: t,
                            tooltipColor: y ? m.FGA.GREEN : void 0,
                            tooltipForceOpen: y,
                            tooltipClassName: ti.accountButtonsTooltip,
                            tooltipContentClassName: ti.accountButtonsTooltipContent,
                            tooltipPositionKeyStemOverride: n,
                            "aria-label": y && a,
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
        C = (0, eD.b)(T),
        { activeVoice: P, mostRecentlyRequestedVoiceId: w, lastInitAttemptMayHaveCrashed: D } = (0, eS.o)(),
        { showSilentLagWarning: x } = (0, eT.Y)(),
        L = null != P,
        j = (0, eI.z)(P),
        G = (0, u.e7)([eG.Z], () => eG.Z.isConnected()),
        { Component: B, events: Z, play: F } = C,
        H = a || s ? m.v0G : B,
        Y = (0, M.Z)(n, a, s, l),
        K = x ? tr.intl.string(tr.t.ARRV6u) : null;
    t = O
        ? tr.intl.string(tr.t["29gnR0"])
        : null != K
          ? (0, r.jsxs)("div", {
                className: ti.tooltipWithSubtext,
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
    let { analyticsLocations: z } = (0, R.ZP)(N.Z.AUDIO_INPUT_BUTTON),
        q = (0, eO.Hu)({
            location: N.Z.AUDIO_INPUT_BUTTON,
            autoTrackExposure: !0,
        }),
        X = (0, ev.av)({
            location: N.Z.AUDIO_INPUT_BUTTON,
            autoTrackExposure: !0,
        });
    i.useEffect(() => () => F(), [T, F]);
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
                (0, c.k)(null == e ? void 0 : e.target, Node) &&
                (null == (t = S.current) ? void 0 : t.contains(e.target))
            )
                return h.F;
            $(!1);
        }, []);
    (0, ez.yp)({
        event: e7.CkL.OPEN_VOICE_FILTER_POPOUT,
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
                    er(!0), (e = setTimeout(() => er(!1), tg));
                }, tE)),
            () => {
                er(!1), clearTimeout(e);
            }
        );
    }, [G]);
    let ei = i.useCallback(() => {
            D || (0, eA.r5)();
        }, [D]),
        ea = T ? m.TVs.colors.STATUS_DANGER : x ? m.TVs.colors.STATUS_WARNING : "currentColor",
        eo = T || x,
        es = (0, ec.Z)({ location: "Account" }),
        { name: el } = (0, en.p6)(tn.h7.AUDIO_INPUT),
        { showRefreshedAudioContextMenu: eu } = (0, e3.e)({ location: "MicrophoneButton" }),
        { enabledInputProfiles: ed } = (0, eE.c)({ location: "MicrophoneButton" });
    return eu
        ? (0, r.jsx)(R.Gt, {
              value: z,
              children: (0, r.jsx)(m.yRy, {
                  targetElementRef: S,
                  renderPopout: (e) => {
                      let { closePopout: t } = e;
                      return (
                          I(),
                          (0, r.jsx)(R.Gt, {
                              value: z,
                              children: eu
                                  ? (0, r.jsx)(U.Z, {
                                        onInteraction: (0, V.u)("AudioDeviceMenu", N.Z.ACCOUNT),
                                        onClose: t,
                                        maybeRenderPTTCheckbox: !0,
                                        renderInputProfiles: ed.length > 0,
                                        renderInputDevices: !0,
                                        maybeRenderInputMeter: !0,
                                        renderInputVolume: !0,
                                        renderSettingsButton: !0,
                                    })
                                  : (0, r.jsx)(k.default, {
                                        onInteraction: (0, V.u)("AudioDeviceMenu", N.Z.ACCOUNT),
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
                          className: o()(ti.micButtonParent, {
                              [ti.hasColorGlow]: eo,
                              [ti.popoutOpen]: a,
                          }),
                          children: [
                              (0, r.jsx)(e8.Z, {
                                  "aria-checked": T,
                                  "aria-label": tr.intl.string(tr.t["w4m94+"]),
                                  className: o()({ [ti.micButtonWithMenu]: !0 }),
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
                              (0, r.jsx)(e8.Z, {
                                  "aria-label": v
                                      ? tr.intl.formatToPlainString(tr.t["18wnuL"], { inputDeviceName: el })
                                      : tr.intl.string(tr.t.fRzCbG),
                                  className: o()(ti.buttonChevron, { [ti.popoutOpen]: a }),
                                  disabled: l,
                                  icon: (0, r.jsx)(s, {
                                      className: ti.buttonChevronIcon,
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
                                  tooltipClassName: ti.accountButtonsTooltip,
                                  tooltipColor: v ? m.FGA.GREEN : void 0,
                                  tooltipContentClassName: ti.accountButtonsTooltipContent,
                                  tooltipForceOpen: v,
                                  tooltipPositionKeyStemOverride: v
                                      ? tr.intl.formatToPlainString(tr.t["18wnuL"], { inputDeviceName: el })
                                      : void 0,
                                  tooltipShouldShow: !a,
                                  tooltipText: v
                                      ? tr.intl.format(tr.t["18wnuL"], { inputDeviceName: el })
                                      : tr.intl.string(tr.t.fRzCbG),
                              }),
                          ],
                      });
                  },
              }),
          })
        : (0, r.jsx)(R.Gt, {
              value: z,
              children: (0, r.jsxs)("div", {
                  ref: S,
                  className: o()(ti.micButtonParent, { [ti.hasColorGlow]: eo }),
                  children: [
                      (0, r.jsx)(e8.Z, {
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
                          className: o()({ [ti.micButtonWithMenu]: q }),
                          orangeGlow: x,
                          redGlow: T,
                          "aria-label": tr.intl.string(tr.t["w4m94+"]),
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
                                  return (0, r.jsx)(eP.l, { onSettingsButtonClick: t });
                              },
                              children: (e, t) => {
                                  var { onClick: n } = e,
                                      i = tc(e, ["onClick"]),
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
                                                      ? (s = (0, r.jsx)(eR.U, {
                                                            markAsDismissed: a,
                                                            onCTA: () => $(!0),
                                                        }))
                                                      : t === d.z.VOICE_FILTER_LAUNCH_COACHMARK
                                                        ? (s = (0, r.jsx)(eN.n, {
                                                              markAsDismissed: a,
                                                              onCTA: () => $(!0),
                                                          }))
                                                        : t === d.z.VOICE_FILTER_FIRST_USE_COACHMARK &&
                                                          (s = (0, r.jsx)(eC.v, {
                                                              markAsDismissed: a,
                                                              onCTA: () => $(!0),
                                                          }));
                                                  let c = () =>
                                                      (0, r.jsx)(
                                                          e8.Z,
                                                          to(
                                                              {
                                                                  ref: A,
                                                                  plated: null != b,
                                                                  tooltipForceOpen: et,
                                                                  tooltipColor: et ? m.FGA.GREEN : void 0,
                                                                  tooltipContentClassName: et
                                                                      ? ti.voiceFilterWarning
                                                                      : void 0,
                                                                  tooltipText: et
                                                                      ? (0, r.jsxs)(r.Fragment, {
                                                                            children: [
                                                                                (0, r.jsx)("img", {
                                                                                    alt:
                                                                                        null != j
                                                                                            ? tr.intl.string(j.name)
                                                                                            : "",
                                                                                    src: null == j ? void 0 : j.iconURL,
                                                                                    draggable: !1,
                                                                                }),
                                                                                (0, r.jsx)(m.Text, {
                                                                                    variant: "text-sm/medium",
                                                                                    color: "always-white",
                                                                                    children: tr.intl.string(
                                                                                        tr.t.VlC1dX,
                                                                                    ),
                                                                                }),
                                                                            ],
                                                                        })
                                                                      : tr.intl.string(tr.t.Hapb4O),
                                                                  icon: (0, r.jsx)(o, {
                                                                      className: ti.buttonChevronIcon,
                                                                      size: "custom",
                                                                      width: 12,
                                                                      height: 12,
                                                                      color: ea,
                                                                  }),
                                                                  role: "button",
                                                                  className: ti.buttonChevron,
                                                                  orangeGlow: x,
                                                                  redGlow: T,
                                                                  "aria-label": tr.intl.string(tr.t.Hapb4O),
                                                                  disabled: l,
                                                                  onClick: (e) => {
                                                                      a(te.L.INDIRECT_ACTION),
                                                                          n(e),
                                                                          null != w && !J && D
                                                                              ? (0, ew.$)(() => $(!0))
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
        { name: O } = (0, en.p6)(tn.h7.AUDIO_OUTPUT),
        { showRefreshedAudioContextMenu: v } = (0, e3.e)({ location: "HeadphonesButton" }),
        I = (0, j.Z)(t, n, a),
        { analyticsLocations: T } = (0, R.ZP)(N.Z.AUDIO_OUTPUT_BUTTON),
        S = i.useRef(null);
    i.useEffect(() => () => g(), [p, g]);
    let A = i.useCallback(
            (e) => {
                l(e, T);
            },
            [l, T],
        ),
        C = p;
    return v
        ? (0, r.jsx)(R.Gt, {
              value: T,
              children: (0, r.jsx)(m.yRy, {
                  targetElementRef: S,
                  renderPopout: (e) => {
                      let { closePopout: t } = e;
                      return (
                          f(),
                          (0, r.jsx)(R.Gt, {
                              value: T,
                              children: (0, r.jsx)(U.Z, {
                                  onInteraction: (0, V.u)("AudioDeviceMenu", N.Z.ACCOUNT),
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
                          className: o()(ti.micButtonParent, {
                              [ti.hasColorGlow]: C,
                              [ti.popoutOpen]: l,
                          }),
                          children: [
                              (0, r.jsx)(e8.Z, {
                                  "aria-checked": p,
                                  "aria-label": tr.intl.string(tr.t.wjcRFR),
                                  className: ti.micButtonWithMenu,
                                  disabled: a,
                                  icon: (0, r.jsx)(y, {
                                      size: "custom",
                                      width: 20,
                                      height: 20,
                                      color: p ? m.TVs.colors.STATUS_DANGER : "currentColor",
                                      className: c,
                                  }),
                                  iconForeground: p ? ti.strikethrough : void 0,
                                  innerClassName: o()({ [ti.redIcon]: n }),
                                  onClick: s,
                                  onContextMenu: i,
                                  onMouseEnter: E,
                                  onMouseLeave: b,
                                  plated: null != u,
                                  redGlow: p,
                                  role: "switch",
                                  tooltipText: I,
                              }),
                              (0, r.jsx)(e8.Z, {
                                  "aria-label": d
                                      ? tr.intl.formatToPlainString(tr.t["f+DDY2"], { outputDeviceName: O })
                                      : tr.intl.string(tr.t.aA4VcX),
                                  className: o()(ti.buttonChevron, { [ti.popoutOpen]: l }),
                                  disabled: a,
                                  icon: (0, r.jsx)(f, {
                                      className: ti.buttonChevronIcon,
                                      size: "custom",
                                      width: 12,
                                      height: 12,
                                      color: p ? m.TVs.colors.STATUS_DANGER : "currentColor",
                                  }),
                                  onClick: i,
                                  onContextMenu: i,
                                  plated: null != u,
                                  redGlow: p,
                                  tooltipClassName: ti.accountButtonsTooltip,
                                  tooltipColor: d ? m.FGA.GREEN : void 0,
                                  tooltipContentClassName: ti.accountButtonsTooltipContent,
                                  tooltipForceOpen: d,
                                  tooltipPositionKeyStemOverride: d
                                      ? tr.intl.formatToPlainString(tr.t["f+DDY2"], { outputDeviceName: O })
                                      : void 0,
                                  tooltipShouldShow: !l,
                                  tooltipText: d
                                      ? tr.intl.format(tr.t["f+DDY2"], { outputDeviceName: O })
                                      : tr.intl.string(tr.t.aA4VcX),
                              }),
                          ],
                      });
                  },
              }),
          })
        : (0, r.jsx)(R.Gt, {
              value: T,
              children: (0, r.jsx)(e8.Z, {
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
                  innerClassName: o()({ [ti.redIcon]: n }),
                  iconForeground: p ? ti.strikethrough : void 0,
                  role: "switch",
                  redGlow: p,
                  "aria-label": tr.intl.string(tr.t.wjcRFR),
                  "aria-checked": p,
                  disabled: a,
              }),
          });
}
