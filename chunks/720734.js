n.d(t, {
    Z: () => tv,
    m: () => tg,
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
    N = n(570928),
    T = n(100527),
    O = n(906732),
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
    el = n(379839),
    er = n(359135),
    ei = n(516817),
    es = n(332473),
    eo = n(963590),
    ec = n(494424),
    ed = n(562705),
    eu = n(299886),
    em = n(375720),
    ep = n(659302),
    eh = n(768419),
    ex = n(172416),
    eg = n(184301),
    ef = n(456077),
    eb = n(620799),
    ev = n(313789),
    ej = n(846071),
    e_ = n(518596),
    ey = n(879815),
    eC = n(294629),
    eS = n(875527),
    eE = n(702977),
    eN = n(56848),
    eT = n(940315),
    eO = n(378441),
    eP = n(358820),
    eI = n(723547),
    ew = n(361045),
    ek = n(74650),
    eR = n(306609),
    eA = n(170293),
    eZ = n(8404),
    eD = n(199902),
    eL = n(314897),
    eM = n(592125),
    eU = n(831506),
    eF = n(819640),
    eB = n(131951),
    eG = n(19780),
    ez = n(914010),
    eH = n(885110),
    eV = n(606304),
    eW = n(246946),
    eK = n(594174),
    eq = n(78839),
    eY = n(626135),
    eJ = n(768581),
    eX = n(572004),
    eQ = n(459273),
    e$ = n(585483),
    e0 = n(70956),
    e1 = n(823379),
    e4 = n(5192),
    e3 = n(374023),
    e8 = n(51144),
    e2 = n(998502),
    e7 = n(660230),
    e5 = n(853170),
    e6 = n(422202),
    e9 = n(870569),
    te = n(345243),
    tt = n(115530),
    tn = n(981631),
    ta = n(921944),
    tl = n(324805),
    tr = n(65154),
    ti = n(388032),
    ts = n(25874);
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
function tc(e) {
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
function td(e, t) {
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
let tu = e2.ZP.getEnableHardwareAcceleration() ? g.Xo$ : g.qEK,
    tm = 2 * e0.Z.Millis.MINUTE,
    tp = 3 * e0.Z.Millis.SECOND,
    th = 5 * e0.Z.Millis.SECOND;
function tx(e) {
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
        C = (0, eJ.NZ)({
            avatarDecoration: f,
            size: (0, w.y9)(g.EFr.SIZE_32),
        }),
        S = (0, K.Z)(),
        {
            updateOpenPopoutRef: E,
            highlightBadge: N,
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
                        e$.S.subscribe(tn.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, t),
                        () => {
                            e$.S.unsubscribe(tn.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, t);
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
        O = (0, el.A)(p);
    if (null == o) return null;
    let P = x && h !== tn.I_8 && h !== tn.ME && null != h ? h : void 0;
    return (0, a.jsx)(b.Z, {
        object: tn.qAy.AVATAR,
        children: (0, a.jsx)(ef.Z, {
            user: o,
            targetElementRef: y,
            clickTrap: !0,
            preload: () =>
                (0, eg.Z)(o.id, o.getAvatarURL(P, ef.I), {
                    type: "account_popout",
                    withMutualGuilds: !1,
                    withMutualFriends: !1,
                    guildId: P,
                }),
            renderPopout: (e, t) => {
                let { closePopout: n, setPopoutRef: l } = e;
                return (0, a.jsx)(en.Z, {
                    currentUser: o,
                    highlightBadge: N,
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
                    td(
                        tc(
                            {
                                innerRef: y,
                                style: O,
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
                            className: i()(ts.avatarWrapper, { [ts.plated]: null != p }),
                            children: [
                                (0, a.jsx)(tu, {
                                    size: g.EFr["SIZE_".concat(32)],
                                    src: o.getAvatarURL(x ? h : void 0, 28, !1),
                                    avatarDecoration: C,
                                    "aria-label": o.username,
                                    status: s ? tn.Skl.STREAMING : c,
                                    isSpeaking: n,
                                    isLatched: r,
                                    className: ts.avatar,
                                }),
                                (0, a.jsx)("div", {
                                    className: i()(ts.nameTag, { [ts.canCopy]: eX.wS }),
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
class tg extends l.PureComponent {
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
            return (0, a.jsx)(N.Z, {
                hoverText: i,
                forceHover: e,
                children: (0, a.jsx)(S.Z, {
                    location: "Account",
                    user: l,
                    activities: t,
                    applicationStream: n,
                    voiceChannel: s ? o : void 0,
                    textClassName: ts.activityStatusText,
                    hideTooltip: !0,
                }),
            });
        let c =
            null == t
                ? void 0
                : t.find((e) => {
                      let { type: t } = e;
                      return t === tn.IIU.CUSTOM_STATUS;
                  });
        return null != c
            ? (0, a.jsx)(N.Z, {
                  hoverText: i,
                  forceHover: e,
                  children: (0, a.jsx)(z.Z, {
                      activity: c,
                      emojiClassName: ts.emoji,
                      className: ts.customStatus,
                  }),
              })
            : null != r && r !== tn.Skl.UNKNOWN && l.hasUniqueUsername()
              ? (0, a.jsx)(N.Z, {
                    hoverText: i,
                    forceHover: e,
                    children: (0, a.jsx)(E.Z, { text: e8.ZP.humanizeStatus(r) }),
                })
              : i;
    }
    renderAvatarWithPopout(e) {
        let {
            focusSectionProps: { "data-jump-section": t },
            onClick: n,
        } = e;
        return (0, a.jsx)(
            tx,
            td(tc({}, this.props), {
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
            ? (0, a.jsx)(H.Z, {
                  targetElementRef: this.avatarWithPopoutRef,
                  onDismiss: s,
                  children: this.renderAvatarWithPopout({ focusSectionProps: e }),
              })
            : (0, a.jsxs)(a.Fragment, {
                  children: [
                      (0, a.jsx)(ed.Z, {
                          groupName: ta.R.ACCOUNT_NAME_ZONE,
                          targetElementRef: this.avatarWithPopoutRef,
                      }),
                      (0, a.jsx)(V.ZP, {
                          contentTypes: n.avatar,
                          groupName: ta.R.ACCOUNT_NAME_ZONE,
                          children: (t) => {
                              let { visibleContent: n, markAsDismissed: l } = t;
                              switch (n) {
                                  case u.z.WIDGETS_RTC_UPSELL_COACHMARK:
                                      return (0, a.jsx)(eb.Z, {
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
                                  className: i()(ts.container, {
                                      [ts.containerRtcOpened]: null != n,
                                      [ts.containerQuestBarVisible]: !l,
                                      [ts.containerListenAlongVisible]: r,
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
                                          tf,
                                          td(tc({}, this.props, this.state), {
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
            to(this, "containerRef", l.createRef()),
            to(this, "avatarWithPopoutRef", l.createRef()),
            to(this, "handleToggleSelfMute", () => {
                let { serverMute: e, suppress: t, selfMute: n } = this.props;
                (0, F.Z)(e, t, tn.jXE.ACCOUNT_PANEL), (0, B.v)(T.Z.ACCOUNT, B.d.MIC, n);
            }),
            to(this, "handleToggleSelfDeaf", () => {
                let { serverDeaf: e, selfDeaf: t } = this.props;
                (0, U.Z)(e, tn.jXE.ACCOUNT_PANEL), (0, B.v)(T.Z.ACCOUNT, B.d.DEAFEN, !t);
            }),
            to(this, "handleOpenAccountSettings", () => {
                this.dismissTooltips(),
                    eG.Z.isConnected()
                        ? (0, e_.openUserSettings)(ev.n.VOICE_AND_VIDEO_PANEL, { section: tn.oAB.VOICE })
                        : (0, e_.openUserSettings)();
            }),
            to(this, "handleOpenSettingsContextMenu", (e) => {
                let { currentUser: t } = this.props;
                null != t &&
                    (0, f.jW)(e, async () => {
                        let { default: e } = await n.e("2535").then(n.bind(n, 923422));
                        return (n) =>
                            (0, a.jsx)(
                                e,
                                td(tc({}, n), {
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
                            let { enabledInputProfiles: n } = (0, ej.G)({ location: "Account" });
                            return (0, a.jsx)(O.Gt, {
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
                            (0, a.jsx)(O.Gt, {
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
                (0, eX.JG)(
                    e8.ZP.getUserTag(e, {
                        decoration: "never",
                        identifiable: "always",
                    }),
                ),
                    eY.default.track(tn.rMx.TEXT_COPIED, { type: "User Tag" });
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
                        occluded: l,
                        shouldShowInputDeviceChangedTooltip: r,
                        shouldShowOutputDeviceChangedTooltip: i,
                    } = this.props,
                    { hoveringOnMute: s } = this.state,
                    o =
                        void 0 === this.lastSpeakingWhileMutedNotificationTime ||
                        Date.now() - this.lastSpeakingWhileMutedNotificationTime > tm;
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
            to(this, "renderNameTag", (e) => {
                let { currentUser: t, username: n } = this.props;
                return null == t
                    ? null
                    : (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)("div", {
                                  className: ts.panelTitleContainer,
                                  children: (0, a.jsx)(tt.Z, {
                                      className: i()({ [ts.withDisplayNameStyles]: null != e }),
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
                                  className: ts.panelSubtextContainer,
                                  children: (0, a.jsx)(te.Z, { children: this.renderStatus() }),
                              }),
                          ],
                      });
            });
    }
}
function tf(e) {
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
        className: ts.buttons,
        style: E,
        children: [
            (0, a.jsx)(t_, {
                accountContainerRef: _,
                selfMute: n,
                serverMute: r,
                suppress: s,
                awaitingRemote: l,
                onMouseEnter: u,
                onMouseLeave: m,
                onClick: h,
                onContextMenu: x,
                iconForeground: null != j ? ts.iconForeground : void 0,
                nameplate: j,
                shouldShowInputDeviceChangedTooltip: y,
                shouldShowSpeakingWhileMutedTooltip: o,
                dismissTooltips: S,
            }),
            (0, a.jsx)(ty, {
                selfDeaf: t,
                serverDeaf: i,
                onClick: p,
                onContextMenu: g,
                awaitingRemote: l,
                iconForeground: null != j ? ts.iconForeground : void 0,
                nameplate: j,
                shouldShowOutputDeviceChangedTooltip: C,
                dismissTooltips: S,
            }),
            (0, a.jsx)(tj, {
                isEligibleForPomelo: c,
                webBuildOverride: d,
                onClick: f,
                onContextMenu: b,
                dismissibleContents: v.settings,
                iconForeground: null != j ? ts.iconForeground : void 0,
                nameplate: j,
                shouldShowInputDeviceChangedTooltip: y,
                shouldShowOutputDeviceChangedTooltip: C,
            }),
        ],
    });
}
function tb(e) {
    let { shouldShowDeviceChangedNotifications: t } = (0, e6.P)({
            location: "Account.useDeviceChangedTooltip",
            autoTrackExposure: !1,
        }),
        n = (0, d.e7)([eG.Z], () => null != eG.Z.getChannelId()),
        a = (0, et.Fh)(e),
        r = l.useRef(new m.V7()),
        [i, s] = l.useState(!1);
    l.useEffect(() => {
        n &&
            a &&
            ((0, e6._)({
                location: "Account.useDeviceChangedTooltip (exposure tracking)",
                autoTrackExposure: !0,
            }),
            t &&
                (s(!0),
                r.current.start(th, () => {
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
function tv() {
    var e;
    let t = (0, d.e7)([eK.default], () => eK.default.getCurrentUser()),
        n = (0, d.e7)([eL.default], () => eL.default.getId()),
        l = e7.K.useConfig({ location: "AccountConnected" }).transitionAccountPanel,
        {
            activities: r,
            streaming: i,
            status: s,
        } = (0, d.cj)([eH.Z], () => {
            let e = eH.Z.getActivities();
            return {
                activities: e,
                streaming:
                    null !=
                    e.find((e) => {
                        let { type: t } = e;
                        return t === tn.IIU.STREAMING;
                    }),
                status: eH.Z.getStatus(),
            };
        }),
        c = (0, d.e7)([eD.Z], () => eD.Z.getAnyStreamForUser(n)),
        m = (0, v.Z)({ userId: n }),
        p = (0, d.e7)([eV.Z], () => eV.Z.isCurrentUserPTTLatched()),
        h = e8.ZP.useUserTag(t, { decoration: "never" }),
        x = (0, d.e7)([eW.Z], () => eW.Z.hidePersonalInformation),
        f = (0, d.e7)([eG.Z, eM.Z], () => {
            let e = eG.Z.getChannelId();
            return null != e ? eM.Z.getChannel(e) : null;
        }),
        { mute: b, selfMute: j, suppress: _ } = (0, eC.Z)(f),
        { selfDeaf: C, deaf: S } = (0, ey.Z)(f),
        E = (0, d.e7)([k.C], () => {
            var e;
            return (0, R.fD)()
                ? null == (e = k.C.getCurrentBuildOverride().overrides)
                    ? void 0
                    : e.discord_web
                : null;
        }),
        N = (0, d.e7)([eq.Z], () => eq.Z.getPremiumTypeSubscription()),
        w = (0, d.e7)([eB.Z], () => eB.Z.getSpeakingWhileMuted()),
        Z = (0, d.e7)([A.Z], () => A.Z.isFullscreenInContext()),
        D = (0, d.e7)([eF.Z], () => eF.Z.hasLayers()),
        L = (0, g.s9z)(g.JQI) || D || e3.s.isDisallowPopupsSet() || Z,
        M = (0, es.b)(),
        U = (0, d.e7)([X.default], () => null != X.default.getAwaitingRemoteSessionInfo()),
        F = (0, d.e7)([ez.Z], () => ez.Z.getGuildId()),
        B = null == t ? void 0 : t.avatarDecoration,
        G = (0, P.R)(t, null != F ? F : void 0),
        z = (0, I.Z)(l ? G : B),
        V = e4.ZP.useName(null != F ? F : void 0, null, t),
        K = null != (e = e8.ZP.useName(t)) ? e : "",
        { voiceActivityStatusEnabled: q } = (0, y.U)({ location: "Account" }),
        [Y, J] = (0, $.G)(null != F ? F : null),
        [Q, ee] = (0, H.b)(),
        et = W.JH.useExperiment({ location: "Account" }).enabled,
        en = (0, ec.c)(t, "Account"),
        el = eu.H.useConfig({ location: "Account" }).enabled,
        { analyticsLocations: er } = (0, O.ZP)(T.Z.ACCOUNT),
        ei = (0, ea.K)({
            user: t,
            guildId: l && null != F ? F : void 0,
        }),
        { isQuestBarEmpty: eo, hasLoadedQuestBar: ed } = (0, ep.Ws)({ location: tl.dr.CONFLICT_CHECKS }),
        em = (0, d.e7)([eh.Z, eK.default, eU.Z], () => {
            let e,
                t = eh.Z.getSyncingWith(),
                n = eh.Z.getActivity(),
                a = [];
            if (
                (null != t ? (e = t.partyId) : null != n && null != n.party && null != n.party.id && (e = n.party.id),
                null != e)
            ) {
                var l;
                a = o()(Array.from(null != (l = eU.Z.getParty(e)) ? l : []))
                    .map((e) => eK.default.getUser(e))
                    .filter(e1.lm)
                    .value();
            }
            return a.length > 1;
        }),
        eg = (0, ex.Un)({ location: "AccountConnected" }),
        ef = {
            avatar: [],
            settings: [],
        };
    !L &&
        (et && ef.avatar.push(u.z.DISPLAY_NAME_STYLES_COACHMARK),
        en && ef.avatar.push(u.z.TENURE_BADGE_CHURN_REMINDER),
        eg && ef.avatar.push(u.z.WIDGETS_RTC_UPSELL_COACHMARK),
        el && ef.settings.push(u.z.NITRO_PRIVACY_PERK_BETA_COACHMARK));
    let { shouldShowTooltip: eb, dismissTooltip: ev } = tb(tr.h7.AUDIO_INPUT),
        { shouldShowTooltip: ej, dismissTooltip: e_ } = tb(tr.h7.AUDIO_OUTPUT);
    return (0, a.jsx)(O.Gt, {
        value: er,
        children: (0, a.jsx)(tg, {
            currentUser: t,
            username: l ? V : K,
            transitionAccountPanel: l,
            activities: r,
            applicationStream: c,
            voiceChannel: f,
            dismissibleContents: ef,
            visibleRecurringAvatarDc: Y,
            markRecurringAvatarDcAsDismissed: J,
            visibleRecurringDoNotDisturbReminderPopoverDc: Q,
            markRecurringDoNotDisturbReminderPopoverDcAsDismissed: ee,
            userTag: h,
            hidePrivateData: x,
            occluded: L,
            premiumSubscription: N,
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
            nameplate: ei,
            selectedGuildId: F,
            avatarDecoration: z,
            isQuestBarEmpty: eo,
            hasLoadedQuestBar: ed,
            isListenAlongVisible: em,
            shouldShowInputDeviceChangedTooltip: eb,
            shouldShowOutputDeviceChangedTooltip: ej,
            dismissInputDeviceChangedTooltip: ev,
            dismissOutputDeviceChangedTooltip: e_,
        }),
    });
}
function tj(e) {
    let t,
        n,
        r,
        {
            webBuildOverride: i,
            isEligibleForPomelo: s,
            onClick: o,
            onContextMenu: c,
            dismissibleContents: d,
            iconForeground: m,
            nameplate: p,
            shouldShowInputDeviceChangedTooltip: x,
            shouldShowOutputDeviceChangedTooltip: f,
        } = e,
        b = l.useRef(null),
        { showRefreshedAudioContextMenu: v } = (0, e5.e)({ location: "SettingsCogButton" }),
        j = !v && (x || f),
        { name: _ } = (0, et.p6)(tr.h7.AUDIO_INPUT),
        { name: y } = (0, et.p6)(tr.h7.AUDIO_OUTPUT);
    !v && x
        ? ((t = ti.intl.format(ti.t["18wnuD"], { inputDeviceName: _ })),
          (n = ti.intl.formatToPlainString(ti.t["18wnuD"], { inputDeviceName: _ })),
          (r = ti.intl.formatToPlainString(ti.t["18wnuD"], { inputDeviceName: _ })))
        : !v && f
          ? ((t = ti.intl.format(ti.t["f+DDY/"], { outputDeviceName: y })),
            (n = ti.intl.formatToPlainString(ti.t["f+DDY/"], { outputDeviceName: y })),
            (r = ti.intl.formatToPlainString(ti.t["f+DDY/"], { outputDeviceName: y })))
          : (t =
                null != i
                    ? ti.intl.formatToPlainString(ti.t.Gzh6ZP, { webBuildOverride: i.id })
                    : ti.intl.string(ti.t.cduTBL));
    let C = g.ewm,
        S = (0, h.i)();
    return (
        (C = null != i ? g.bgT : s ? g.Ncx : S.Component),
        (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(
                    e9.Z,
                    td(
                        tc(
                            {
                                ref: b,
                                tooltipText: t,
                                tooltipColor: j ? g.r6K.GREEN : void 0,
                                tooltipForceOpen: j,
                                tooltipClassName: ts.accountButtonsTooltip,
                                tooltipContentClassName: ts.accountButtonsTooltipContent,
                                tooltipPositionKeyStemOverride: n,
                                "aria-label": j ? r : void 0,
                                onClick: o,
                                onContextMenu: c,
                                icon: (0, a.jsx)(C, {
                                    size: "refresh_sm",
                                    color: "currentColor",
                                    className: m,
                                }),
                            },
                            S.events,
                        ),
                        { plated: null != p },
                    ),
                ),
                (0, a.jsx)(V.ZP, {
                    contentTypes: d,
                    groupName: ta.R.ACCOUNT_NAME_ZONE,
                    children: (e) => {
                        let { visibleContent: t, markAsDismissed: n } = e;
                        if (t === u.z.NITRO_PRIVACY_PERK_BETA_COACHMARK)
                            return (0, a.jsx)(em.a, {
                                targetElementRef: b,
                                markAsDismissed: n,
                            });
                    },
                }),
            ],
        })
    );
}
function t_(e) {
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
        N = l.useRef(null),
        P = (0, eZ.b)(S),
        { activeVoice: I, mostRecentlyRequestedVoiceId: w, lastInitAttemptMayHaveCrashed: k } = (0, eO.o)(),
        { showSilentLagWarning: R } = (0, eT.Y)(),
        A = null != I,
        Z = (0, eN.z)(I),
        U = (0, d.e7)([eG.Z], () => eG.Z.isConnected()),
        { Component: F, events: B, play: z } = P,
        H = r || s ? g.v0G : F,
        W = (0, D.Z)(n, r, s, o),
        K = R ? ti.intl.string(ti.t.ARRV6m) : null;
    t = _
        ? ti.intl.string(ti.t["29gnR4"])
        : null != K
          ? (0, a.jsxs)("div", {
                className: ts.tooltipWithSubtext,
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
    let { analyticsLocations: q } = (0, O.ZP)(T.Z.AUDIO_INPUT_BUTTON),
        Y = (0, eS.Hu)({
            location: T.Z.AUDIO_INPUT_BUTTON,
            autoTrackExposure: !0,
        }),
        J = (0, eE.av)({
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
    (0, eQ.yp)({
        event: tn.CkL.OPEN_VOICE_FILTER_POPOUT,
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
                    ea(!0), (e = setTimeout(() => ea(!1), tp));
                }, 300)),
            () => {
                ea(!1), clearTimeout(e);
            }
        );
    }, [U]);
    let el = l.useCallback(() => {
            k || (0, eP.r5)();
        }, [k]),
        er = S ? g.TVs.colors.STATUS_DANGER : R ? g.TVs.colors.STATUS_WARNING : "currentColor",
        ei = S || R,
        es = (0, eo.Z)({ location: "Account" }),
        { name: ec } = (0, et.p6)(tr.h7.AUDIO_INPUT),
        { showRefreshedAudioContextMenu: ed } = (0, e5.e)({ location: "MicrophoneButton" }),
        { enabledInputProfiles: eu } = (0, ej.G)({ location: "MicrophoneButton" });
    return ed
        ? (0, a.jsx)(O.Gt, {
              value: q,
              children: (0, a.jsx)(g.yRy, {
                  targetElementRef: E,
                  renderPopout: (e) => {
                      let { closePopout: t } = e;
                      return (
                          C(),
                          (0, a.jsx)(O.Gt, {
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
                          className: i()(ts.micButtonParent, {
                              [ts.hasColorGlow]: ei,
                              [ts.popoutOpen]: r,
                          }),
                          children: [
                              (0, a.jsx)(e9.Z, {
                                  "aria-checked": S,
                                  "aria-label": ti.intl.string(ti.t.w4m945),
                                  className: i()({ [ts.micButtonWithMenu]: !0 }),
                                  disabled: o,
                                  icon: (0, a.jsx)(H, {
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
                              (0, a.jsx)(e9.Z, {
                                  "aria-label": y
                                      ? ti.intl.formatToPlainString(ti.t["18wnuD"], { inputDeviceName: ec })
                                      : ti.intl.string(ti.t.fRzCbB),
                                  className: i()(ts.buttonChevron, { [ts.popoutOpen]: r }),
                                  disabled: o,
                                  icon: (0, a.jsx)(s, {
                                      className: ts.buttonChevronIcon,
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
                                  tooltipClassName: ts.accountButtonsTooltip,
                                  tooltipColor: y ? g.r6K.GREEN : void 0,
                                  tooltipContentClassName: ts.accountButtonsTooltipContent,
                                  tooltipForceOpen: y,
                                  tooltipPositionKeyStemOverride: y
                                      ? ti.intl.formatToPlainString(ti.t["18wnuD"], { inputDeviceName: ec })
                                      : void 0,
                                  tooltipShouldShow: !r,
                                  tooltipText: y
                                      ? ti.intl.format(ti.t["18wnuD"], { inputDeviceName: ec })
                                      : ti.intl.string(ti.t.fRzCbB),
                              }),
                          ],
                      });
                  },
              }),
          })
        : (0, a.jsx)(O.Gt, {
              value: q,
              children: (0, a.jsxs)("div", {
                  ref: E,
                  className: i()(ts.micButtonParent, { [ts.hasColorGlow]: ei }),
                  children: [
                      (0, a.jsx)(e9.Z, {
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
                          icon: (0, a.jsx)(H, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: er,
                              className: m,
                          }),
                          onClick: f,
                          onContextMenu: X,
                          role: "switch",
                          className: i()({ [ts.micButtonWithMenu]: Y }),
                          orangeGlow: R,
                          redGlow: S,
                          "aria-label": ti.intl.string(ti.t.w4m945),
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
                                  return (0, a.jsx)(eR.l, { onSettingsButtonClick: t });
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
                                          children: (0, a.jsx)(V.ZP, {
                                              bypassAutoDismiss: !0,
                                              contentTypes: s,
                                              children: (e) => {
                                                  let { visibleContent: t, markAsDismissed: r } = e,
                                                      s = null;
                                                  t === u.z.VOICE_FILTER_EARLY_ACCESS_COACHMARK
                                                      ? (s = (0, a.jsx)(ek.U, {
                                                            markAsDismissed: r,
                                                            onCTA: () => $(!0),
                                                        }))
                                                      : t === u.z.VOICE_FILTER_LAUNCH_COACHMARK
                                                        ? (s = (0, a.jsx)(ew.n, {
                                                              markAsDismissed: r,
                                                              onCTA: () => $(!0),
                                                          }))
                                                        : t === u.z.VOICE_FILTER_FIRST_USE_COACHMARK &&
                                                          (s = (0, a.jsx)(eI.v, {
                                                              markAsDismissed: r,
                                                              onCTA: () => $(!0),
                                                          }));
                                                  let c = () =>
                                                      (0, a.jsx)(
                                                          e9.Z,
                                                          tc(
                                                              {
                                                                  ref: N,
                                                                  plated: null != v,
                                                                  tooltipForceOpen: en,
                                                                  tooltipColor: en ? g.r6K.GREEN : void 0,
                                                                  tooltipContentClassName: en
                                                                      ? ts.voiceFilterWarning
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
                                                                  icon: (0, a.jsx)(i, {
                                                                      className: ts.buttonChevronIcon,
                                                                      size: "custom",
                                                                      width: 12,
                                                                      height: 12,
                                                                      color: er,
                                                                  }),
                                                                  role: "button",
                                                                  className: ts.buttonChevron,
                                                                  orangeGlow: R,
                                                                  redGlow: S,
                                                                  "aria-label": ti.intl.string(ti.t.Hapb4J),
                                                                  disabled: o,
                                                                  onClick: (e) => {
                                                                      r(ta.L.INDIRECT_ACTION),
                                                                          n(e),
                                                                          null != w && !Q && k
                                                                              ? (0, eA.$)(() => $(!0))
                                                                              : $(!Q);
                                                                  },
                                                              },
                                                              l,
                                                          ),
                                                      );
                                                  return null != s
                                                      ? (0, a.jsx)(g.yRy, {
                                                            targetElementRef: N,
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
function ty(e) {
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
        { name: _ } = (0, et.p6)(tr.h7.AUDIO_OUTPUT),
        { showRefreshedAudioContextMenu: y } = (0, e5.e)({ location: "HeadphonesButton" }),
        C = (0, Z.Z)(t, n, r),
        { analyticsLocations: S } = (0, O.ZP)(T.Z.AUDIO_OUTPUT_BUTTON),
        E = l.useRef(null);
    l.useEffect(() => () => f(), [h, f]);
    let N = l.useCallback(
        (e) => {
            o(e, S);
        },
        [o, S],
    );
    return y
        ? (0, a.jsx)(O.Gt, {
              value: S,
              children: (0, a.jsx)(g.yRy, {
                  targetElementRef: E,
                  renderPopout: (e) => {
                      let { closePopout: t } = e;
                      return (
                          m(),
                          (0, a.jsx)(O.Gt, {
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
                          className: i()(ts.micButtonParent, {
                              [ts.hasColorGlow]: h,
                              [ts.popoutOpen]: o,
                          }),
                          children: [
                              (0, a.jsx)(e9.Z, {
                                  "aria-checked": h,
                                  "aria-label": ti.intl.string(ti.t.wjcRFX),
                                  className: ts.micButtonWithMenu,
                                  disabled: r,
                                  icon: (0, a.jsx)(j, {
                                      size: "custom",
                                      width: 20,
                                      height: 20,
                                      color: h ? g.TVs.colors.STATUS_DANGER : "currentColor",
                                      className: c,
                                  }),
                                  iconForeground: h ? ts.strikethrough : void 0,
                                  innerClassName: i()({ [ts.redIcon]: n }),
                                  onClick: s,
                                  onContextMenu: l,
                                  onMouseEnter: b,
                                  onMouseLeave: v,
                                  plated: null != d,
                                  redGlow: h,
                                  role: "switch",
                                  tooltipText: C,
                              }),
                              (0, a.jsx)(e9.Z, {
                                  "aria-label": u
                                      ? ti.intl.formatToPlainString(ti.t["f+DDY/"], { outputDeviceName: _ })
                                      : ti.intl.string(ti.t.aA4Vce),
                                  className: i()(ts.buttonChevron, { [ts.popoutOpen]: o }),
                                  disabled: r,
                                  icon: (0, a.jsx)(m, {
                                      className: ts.buttonChevronIcon,
                                      size: "custom",
                                      width: 12,
                                      height: 12,
                                      color: h ? g.TVs.colors.STATUS_DANGER : "currentColor",
                                  }),
                                  onClick: l,
                                  onContextMenu: l,
                                  plated: null != d,
                                  redGlow: h,
                                  tooltipClassName: ts.accountButtonsTooltip,
                                  tooltipColor: u ? g.r6K.GREEN : void 0,
                                  tooltipContentClassName: ts.accountButtonsTooltipContent,
                                  tooltipForceOpen: u,
                                  tooltipPositionKeyStemOverride: u
                                      ? ti.intl.formatToPlainString(ti.t["f+DDY/"], { outputDeviceName: _ })
                                      : void 0,
                                  tooltipShouldShow: !o,
                                  tooltipText: u
                                      ? ti.intl.format(ti.t["f+DDY/"], { outputDeviceName: _ })
                                      : ti.intl.string(ti.t.aA4Vce),
                              }),
                          ],
                      });
                  },
              }),
          })
        : (0, a.jsx)(O.Gt, {
              value: S,
              children: (0, a.jsx)(e9.Z, {
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
                  onContextMenu: N,
                  innerClassName: i()({ [ts.redIcon]: n }),
                  iconForeground: h ? ts.strikethrough : void 0,
                  role: "switch",
                  redGlow: h,
                  "aria-label": ti.intl.string(ti.t.wjcRFX),
                  "aria-checked": h,
                  disabled: r,
              }),
          });
}
