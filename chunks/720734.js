n.d(t, {
    Z: () => tv,
    m: () => tf,
}),
    n(388685),
    n(539854);
var a = n(54381),
    l = n(473749),
    i = n(120356),
    r = n.n(i),
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
    g = n(239091),
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
    w = n(676742),
    I = n(1585),
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
    ei = n(359135),
    er = n(516817),
    es = n(332473),
    eo = n(963590),
    ec = n(494424),
    ed = n(562705),
    eu = n(299886),
    em = n(375720),
    ep = n(659302),
    eh = n(768419),
    ex = n(172416),
    ef = n(184301),
    eg = n(670188),
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
    ew = n(723547),
    eI = n(361045),
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
    ti = n(65154),
    tr = n(388032),
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
let tu = e2.ZP.getEnableHardwareAcceleration() ? f.Xo$ : f.qEK,
    tm = 2 * e0.Z.Millis.MINUTE,
    tp = 3 * e0.Z.Millis.SECOND,
    th = 5 * e0.Z.Millis.SECOND;
function tx(e) {
    let {
            ref: t,
            speaking: n,
            latched: i,
            streaming: s,
            currentUser: o,
            status: c,
            handleClick: d,
            handleMouseLeave: u,
            renderNameTag: m,
            nameplate: p,
            selectedGuildId: h,
            transitionAccountPanel: x,
            avatarDecoration: g,
            "data-jump-section": v,
        } = e,
        j = l.useRef(null),
        y = null != t ? t : j,
        C = (0, eJ.NZ)({
            avatarDecoration: g,
            size: (0, I.y9)(f.EFr.SIZE_32),
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
                [i, r] = l.useState(!1);
            return (
                (0, _.Z)(() => r(!0), 750),
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
                    highlightBadge: i ? n : void 0,
                    setHighlightBadge: a,
                }
            );
        })(),
        O = (0, el.A)(p);
    if (null == o) return null;
    let P = x && h !== tn.I_8 && h !== tn.ME && null != h ? h : void 0;
    return (0, a.jsx)(b.Z, {
        object: tn.qAy.AVATAR,
        children: (0, a.jsx)(eg.Z, {
            user: o,
            targetElementRef: y,
            clickTrap: !0,
            preload: () =>
                (0, ef.Z)(o.id, o.getAvatarURL(P, eg.I), {
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
            animation: f.yRy.Animation.FADE,
            spacing: 14,
            fixed: !0,
            ignoreModalClicks: !0,
            onRequestClose: () => {
                u(), T(void 0);
            },
            children: (e) => (
                E(e),
                (0, a.jsxs)(
                    f.P3F,
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
                            "aria-label": tr.intl.string(tr.t["3Uj+2p"]),
                            "data-jump-section": v,
                            className: r()(ts.avatarWrapper, { [ts.plated]: null != p }),
                            children: [
                                (0, a.jsx)(tu, {
                                    size: f.EFr["SIZE_".concat(32)],
                                    src: o.getAvatarURL(x ? h : void 0, 28, !1),
                                    avatarDecoration: C,
                                    "aria-label": o.username,
                                    status: s ? tn.Skl.STREAMING : c,
                                    isSpeaking: n,
                                    isLatched: i,
                                    className: ts.avatar,
                                }),
                                (0, a.jsx)("div", {
                                    className: r()(ts.nameTag, { [ts.canCopy]: eX.wS }),
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
class tf extends l.PureComponent {
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
                tr.intl.string(tr.t.MSaeTe),
                tr.intl.string(tr.t.UmrCw7),
                tr.intl.string(tr.t.gKE0Jq),
                tr.intl.string(tr.t["4DSKbi"]),
                tr.intl.string(tr.t["+8ENdT"]),
                tr.intl.string(tr.t.GlWHv8),
                tr.intl.string(tr.t.hIzxU9),
                tr.intl.string(tr.t["26uMPL"]),
                tr.intl.string(tr.t.uFs7R2),
                tr.intl.string(tr.t.bLXdcY),
                tr.intl.string(tr.t.gPg9fS),
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
                currentUser: l,
                status: i,
                userTag: r,
                voiceActivityStatusEnabled: s,
                voiceChannel: o,
            } = this.props;
        if (null == l) return null;
        if (
            (0, C.Z)({
                activities: t,
                status: i,
                applicationStream: n,
                voiceChannel: s ? o : void 0,
            })
        )
            return (0, a.jsx)(N.Z, {
                hoverText: r,
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
                  hoverText: r,
                  forceHover: e,
                  children: (0, a.jsx)(z.Z, {
                      activity: c,
                      emojiClassName: ts.emoji,
                      className: ts.customStatus,
                  }),
              })
            : null != i && i !== tn.Skl.UNKNOWN && l.hasUniqueUsername()
              ? (0, a.jsx)(N.Z, {
                    hoverText: r,
                    forceHover: e,
                    children: (0, a.jsx)(E.Z, { text: e8.ZP.humanizeStatus(i) }),
                })
              : r;
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
            markRecurringAvatarDcAsDismissed: i,
            visibleRecurringDoNotDisturbReminderPopoverDc: r,
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
                onDismiss: i,
                targetElementRef: this.avatarWithPopoutRef,
                children: this.renderAvatarWithPopout({ focusSectionProps: e }),
            });
        }
        return r === u.z.DO_NOT_DISTURB_REMINDER_POPOVER
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
        let { currentUser: e, nameplate: t, voiceChannel: n, isQuestBarEmpty: l, isListenAlongVisible: i } = this.props,
            s = this.state.hovered;
        return null == e
            ? null
            : (0, a.jsxs)(a.Fragment, {
                  children: [
                      (0, a.jsx)(f.Wdt, {
                          children: (e) =>
                              (0, a.jsxs)("div", {
                                  ref: this.containerRef,
                                  className: r()(ts.container, {
                                      [ts.containerRtcOpened]: null != n,
                                      [ts.containerQuestBarVisible]: !l,
                                      [ts.containerListenAlongVisible]: i,
                                  }),
                                  onMouseEnter: this.handleMouseEnter,
                                  onMouseLeave: this.handleMouseLeave,
                                  children: [
                                      (0, a.jsx)(er.Z, {
                                          nameplate: t,
                                          hovered: s,
                                          placement: ei.i.ACCOUNT,
                                      }),
                                      this.renderNameZone(e),
                                      (0, a.jsx)(
                                          tg,
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
                    (0, g.jW)(e, async () => {
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
                    (0, g.jW)(e, async () => {
                        let { default: e } = await Promise.resolve().then(n.bind(n, 659580));
                        return () => {
                            let { enabledInputProfiles: n } = (0, ej.G)({ location: "Account" });
                            return (0, a.jsx)(O.Gt, {
                                value: t,
                                children: (0, a.jsx)(e, {
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
                            (0, a.jsx)(O.Gt, {
                                value: t,
                                children: (0, a.jsx)(e, {
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
                        shouldShowInputDeviceChangedTooltip: i,
                        shouldShowOutputDeviceChangedTooltip: r,
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
                      i ||
                      r ||
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
                                      className: r()({ [ts.withDisplayNameStyles]: null != e }),
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
function tg(e) {
    let {
            selfDeaf: t,
            selfMute: n,
            awaitingRemote: l,
            serverMute: i,
            serverDeaf: r,
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
            handleOpenAccountSettings: g,
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
                serverMute: i,
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
                serverDeaf: r,
                onClick: p,
                onContextMenu: f,
                awaitingRemote: l,
                iconForeground: null != j ? ts.iconForeground : void 0,
                nameplate: j,
                shouldShowOutputDeviceChangedTooltip: C,
                dismissTooltips: S,
            }),
            (0, a.jsx)(tj, {
                isEligibleForPomelo: c,
                webBuildOverride: d,
                onClick: g,
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
        i = l.useRef(new m.V7()),
        [r, s] = l.useState(!1);
    l.useEffect(() => {
        n &&
            a &&
            ((0, e6._)({
                location: "Account.useDeviceChangedTooltip (exposure tracking)",
                autoTrackExposure: !0,
            }),
            t &&
                (s(!0),
                i.current.start(th, () => {
                    s(!1);
                })));
    }, [n, a, t]);
    let o = l.useCallback(() => {
        s(!1), i.current.stop();
    }, []);
    return (
        (0, j.zq)(() => {
            i.current.stop();
        }),
        {
            shouldShowTooltip: r,
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
            activities: i,
            streaming: r,
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
        g = (0, d.e7)([eG.Z, eM.Z], () => {
            let e = eG.Z.getChannelId();
            return null != e ? eM.Z.getChannel(e) : null;
        }),
        { mute: b, selfMute: j, suppress: _ } = (0, eC.Z)(g),
        { selfDeaf: C, deaf: S } = (0, ey.Z)(g),
        E = (0, d.e7)([k.C], () => {
            var e;
            return (0, R.fD)()
                ? null == (e = k.C.getCurrentBuildOverride().overrides)
                    ? void 0
                    : e.discord_web
                : null;
        }),
        N = (0, d.e7)([eq.Z], () => eq.Z.getPremiumTypeSubscription()),
        I = (0, d.e7)([eB.Z], () => eB.Z.getSpeakingWhileMuted()),
        Z = (0, d.e7)([A.Z], () => A.Z.isFullscreenInContext()),
        D = (0, d.e7)([eF.Z], () => eF.Z.hasLayers()),
        L = (0, f.s9z)(f.JQI) || D || e3.s.isDisallowPopupsSet() || Z,
        M = (0, es.b)(),
        U = (0, d.e7)([X.default], () => null != X.default.getAwaitingRemoteSessionInfo()),
        F = (0, d.e7)([ez.Z], () => ez.Z.getGuildId()),
        B = null == t ? void 0 : t.avatarDecoration,
        G = (0, P.R)(t, null != F ? F : void 0),
        z = (0, w.Z)(l ? G : B),
        V = e4.ZP.useName(null != F ? F : void 0, null, t),
        K = null != (e = e8.ZP.useName(t)) ? e : "",
        { voiceActivityStatusEnabled: q } = (0, y.U)({ location: "Account" }),
        [Y, J] = (0, $.G)(null != F ? F : null),
        [Q, ee] = (0, H.b)(),
        et = W.JH.useExperiment({ location: "Account" }).enabled,
        en = (0, ec.c)(t, "Account"),
        el = eu.H.useConfig({ location: "Account" }).enabled,
        { analyticsLocations: ei } = (0, O.ZP)(T.Z.ACCOUNT),
        er = (0, ea.K)({
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
        ef = (0, ex.Un)({ location: "AccountConnected" }),
        eg = {
            avatar: [],
            settings: [],
        };
    !L &&
        (et && eg.avatar.push(u.z.DISPLAY_NAME_STYLES_COACHMARK),
        en && eg.avatar.push(u.z.TENURE_BADGE_CHURN_REMINDER),
        ef && eg.avatar.push(u.z.WIDGETS_RTC_UPSELL_COACHMARK),
        el && eg.settings.push(u.z.NITRO_PRIVACY_PERK_BETA_COACHMARK));
    let { shouldShowTooltip: eb, dismissTooltip: ev } = tb(ti.h7.AUDIO_INPUT),
        { shouldShowTooltip: ej, dismissTooltip: e_ } = tb(ti.h7.AUDIO_OUTPUT);
    return (0, a.jsx)(O.Gt, {
        value: ei,
        children: (0, a.jsx)(tf, {
            currentUser: t,
            username: l ? V : K,
            transitionAccountPanel: l,
            activities: i,
            applicationStream: c,
            voiceChannel: g,
            dismissibleContents: eg,
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
            speakingWhileMuted: I,
            latched: p && null != g,
            status: s,
            streaming: r,
            suppress: _,
            webBuildOverride: E,
            awaitingRemote: U,
            isEligibleForPomelo: M,
            voiceActivityStatusEnabled: q,
            nameplate: er,
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
        i,
        {
            webBuildOverride: r,
            isEligibleForPomelo: s,
            onClick: o,
            onContextMenu: c,
            dismissibleContents: d,
            iconForeground: m,
            nameplate: p,
            shouldShowInputDeviceChangedTooltip: x,
            shouldShowOutputDeviceChangedTooltip: g,
        } = e,
        b = l.useRef(null),
        { showRefreshedAudioContextMenu: v } = (0, e5.e)({ location: "SettingsCogButton" }),
        j = !v && (x || g),
        { name: _ } = (0, et.p6)(ti.h7.AUDIO_INPUT),
        { name: y } = (0, et.p6)(ti.h7.AUDIO_OUTPUT);
    !v && x
        ? ((t = tr.intl.format(tr.t["18wnuD"], { inputDeviceName: _ })),
          (n = tr.intl.formatToPlainString(tr.t["18wnuD"], { inputDeviceName: _ })),
          (i = tr.intl.formatToPlainString(tr.t["18wnuD"], { inputDeviceName: _ })))
        : !v && g
          ? ((t = tr.intl.format(tr.t["f+DDY/"], { outputDeviceName: y })),
            (n = tr.intl.formatToPlainString(tr.t["f+DDY/"], { outputDeviceName: y })),
            (i = tr.intl.formatToPlainString(tr.t["f+DDY/"], { outputDeviceName: y })))
          : (t =
                null != r
                    ? tr.intl.formatToPlainString(tr.t.Gzh6ZP, { webBuildOverride: r.id })
                    : tr.intl.string(tr.t.cduTBL));
    let C = f.ewm,
        S = (0, h.i)();
    return (
        (C = null != r ? f.bgT : s ? f.Ncx : S.Component),
        (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(
                    e9.Z,
                    td(
                        tc(
                            {
                                ref: b,
                                tooltipText: t,
                                tooltipColor: j ? f.r6K.GREEN : void 0,
                                tooltipForceOpen: j,
                                tooltipClassName: ts.accountButtonsTooltip,
                                tooltipContentClassName: ts.accountButtonsTooltipContent,
                                tooltipPositionKeyStemOverride: n,
                                "aria-label": j ? i : void 0,
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
            serverMute: i,
            suppress: s,
            awaitingRemote: o,
            iconForeground: m,
            onMouseEnter: p,
            onMouseLeave: h,
            onClick: g,
            onContextMenu: b,
            nameplate: v,
            accountContainerRef: j,
            shouldShowSpeakingWhileMutedTooltip: _,
            shouldShowInputDeviceChangedTooltip: y,
            dismissTooltips: C,
        } = e,
        S = n || s || i,
        E = l.useRef(null),
        N = l.useRef(null),
        P = (0, eZ.b)(S),
        { activeVoice: w, mostRecentlyRequestedVoiceId: I, lastInitAttemptMayHaveCrashed: k } = (0, eO.o)(),
        { showSilentLagWarning: R } = (0, eT.Y)(),
        A = null != w,
        Z = (0, eN.z)(w),
        U = (0, d.e7)([eG.Z], () => eG.Z.isConnected()),
        { Component: F, events: B, play: z } = P,
        H = i || s ? f.v0G : F,
        W = (0, D.Z)(n, i, s, o),
        K = R ? tr.intl.string(tr.t.ARRV6m) : null;
    t = _
        ? tr.intl.string(tr.t["29gnR4"])
        : null != K
          ? (0, a.jsxs)("div", {
                className: ts.tooltipWithSubtext,
                children: [
                    (0, a.jsx)(f.Text, {
                        variant: "text-sm/medium",
                        color: "currentColor",
                        children: W,
                    }),
                    (0, a.jsx)(f.Text, {
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
        ei = S ? f.TVs.colors.STATUS_DANGER : R ? f.TVs.colors.STATUS_WARNING : "currentColor",
        er = S || R,
        es = (0, eo.Z)({ location: "Account" }),
        { name: ec } = (0, et.p6)(ti.h7.AUDIO_INPUT),
        { showRefreshedAudioContextMenu: ed } = (0, e5.e)({ location: "MicrophoneButton" }),
        { enabledInputProfiles: eu } = (0, ej.G)({ location: "MicrophoneButton" });
    return ed
        ? (0, a.jsx)(O.Gt, {
              value: q,
              children: (0, a.jsx)(f.yRy, {
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
                  animation: f.yRy.Animation.FADE,
                  spacing: 4,
                  children: (e, n) => {
                      let { onClick: l } = e,
                          { isShown: i } = n,
                          s = i ? f.u04 : f.CJ0;
                      return (0, a.jsxs)("div", {
                          ref: E,
                          className: r()(ts.micButtonParent, {
                              [ts.hasColorGlow]: er,
                              [ts.popoutOpen]: i,
                          }),
                          children: [
                              (0, a.jsx)(e9.Z, {
                                  "aria-checked": S,
                                  "aria-label": tr.intl.string(tr.t.w4m945),
                                  className: r()({ [ts.micButtonWithMenu]: !0 }),
                                  disabled: o,
                                  icon: (0, a.jsx)(H, {
                                      size: "custom",
                                      width: 20,
                                      height: 20,
                                      color: ei,
                                      className: m,
                                  }),
                                  onClick: g,
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
                                  tooltipColor: _ ? f.r6K.GREEN : void 0,
                                  tooltipForceOpen: _,
                                  tooltipText: t,
                              }),
                              (0, a.jsx)(e9.Z, {
                                  "aria-label": y
                                      ? tr.intl.formatToPlainString(tr.t["18wnuD"], { inputDeviceName: ec })
                                      : tr.intl.string(tr.t.fRzCbB),
                                  className: r()(ts.buttonChevron, { [ts.popoutOpen]: i }),
                                  disabled: o,
                                  icon: (0, a.jsx)(s, {
                                      className: ts.buttonChevronIcon,
                                      size: "custom",
                                      width: 12,
                                      height: 12,
                                      color: ei,
                                  }),
                                  onClick: l,
                                  onContextMenu: l,
                                  onMouseEnter: p,
                                  onMouseLeave: h,
                                  orangeGlow: R,
                                  plated: null != v,
                                  redGlow: S,
                                  tooltipClassName: ts.accountButtonsTooltip,
                                  tooltipColor: y ? f.r6K.GREEN : void 0,
                                  tooltipContentClassName: ts.accountButtonsTooltipContent,
                                  tooltipForceOpen: y,
                                  tooltipPositionKeyStemOverride: y
                                      ? tr.intl.formatToPlainString(tr.t["18wnuD"], { inputDeviceName: ec })
                                      : void 0,
                                  tooltipShouldShow: !i,
                                  tooltipText: y
                                      ? tr.intl.format(tr.t["18wnuD"], { inputDeviceName: ec })
                                      : tr.intl.string(tr.t.fRzCbB),
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
                  className: r()(ts.micButtonParent, { [ts.hasColorGlow]: er }),
                  children: [
                      (0, a.jsx)(e9.Z, {
                          tooltipText: t,
                          tooltipColor: _ ? f.r6K.GREEN : void 0,
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
                              color: ei,
                              className: m,
                          }),
                          onClick: g,
                          onContextMenu: X,
                          role: "switch",
                          className: r()({ [ts.micButtonWithMenu]: Y }),
                          orangeGlow: R,
                          redGlow: S,
                          "aria-label": tr.intl.string(tr.t.w4m945),
                          "aria-checked": S,
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
                                                      i = Object.keys(e);
                                                  for (a = 0; a < i.length; a++)
                                                      (n = i[a]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                                                  return l;
                                              })(e, t);
                                          if (Object.getOwnPropertySymbols) {
                                              var i = Object.getOwnPropertySymbols(e);
                                              for (a = 0; a < i.length; a++)
                                                  (n = i[a]),
                                                      !(t.indexOf(n) >= 0) &&
                                                          Object.prototype.propertyIsEnumerable.call(e, n) &&
                                                          (l[n] = e[n]);
                                          }
                                          return l;
                                      })(e, ["onClick"]),
                                      { isShown: i } = t;
                                  let r = i ? f.u04 : f.CJ0,
                                      s = [];
                                  return (
                                      !i &&
                                          (es && s.push(u.z.VOICE_FILTER_EARLY_ACCESS_COACHMARK),
                                          s.push(u.z.VOICE_FILTER_LAUNCH_COACHMARK),
                                          J && U && !A && s.push(u.z.VOICE_FILTER_FIRST_USE_COACHMARK)),
                                      (0, a.jsx)("div", {
                                          children: (0, a.jsx)(V.ZP, {
                                              bypassAutoDismiss: !0,
                                              contentTypes: s,
                                              children: (e) => {
                                                  let { visibleContent: t, markAsDismissed: i } = e,
                                                      s = null;
                                                  t === u.z.VOICE_FILTER_EARLY_ACCESS_COACHMARK
                                                      ? (s = (0, a.jsx)(ek.U, {
                                                            markAsDismissed: i,
                                                            onCTA: () => $(!0),
                                                        }))
                                                      : t === u.z.VOICE_FILTER_LAUNCH_COACHMARK
                                                        ? (s = (0, a.jsx)(eI.n, {
                                                              markAsDismissed: i,
                                                              onCTA: () => $(!0),
                                                          }))
                                                        : t === u.z.VOICE_FILTER_FIRST_USE_COACHMARK &&
                                                          (s = (0, a.jsx)(ew.v, {
                                                              markAsDismissed: i,
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
                                                                  tooltipColor: en ? f.r6K.GREEN : void 0,
                                                                  tooltipContentClassName: en
                                                                      ? ts.voiceFilterWarning
                                                                      : void 0,
                                                                  tooltipText: en
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
                                                                                        tr.t.VlC1de,
                                                                                    ),
                                                                                }),
                                                                            ],
                                                                        })
                                                                      : tr.intl.string(tr.t.Hapb4J),
                                                                  icon: (0, a.jsx)(r, {
                                                                      className: ts.buttonChevronIcon,
                                                                      size: "custom",
                                                                      width: 12,
                                                                      height: 12,
                                                                      color: ei,
                                                                  }),
                                                                  role: "button",
                                                                  className: ts.buttonChevron,
                                                                  orangeGlow: R,
                                                                  redGlow: S,
                                                                  "aria-label": tr.intl.string(tr.t.Hapb4J),
                                                                  disabled: o,
                                                                  onClick: (e) => {
                                                                      i(ta.L.INDIRECT_ACTION),
                                                                          n(e),
                                                                          null != I && !Q && k
                                                                              ? (0, eA.$)(() => $(!0))
                                                                              : $(!Q);
                                                                  },
                                                              },
                                                              l,
                                                          ),
                                                      );
                                                  return null != s
                                                      ? (0, a.jsx)(f.yRy, {
                                                            targetElementRef: N,
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
function ty(e) {
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
            play: g,
            events: { onMouseEnter: b, onMouseLeave: v },
        } = (0, p.l)(h ? "undeafen" : "deafen"),
        j = n ? f.Vm4 : x,
        { name: _ } = (0, et.p6)(ti.h7.AUDIO_OUTPUT),
        { showRefreshedAudioContextMenu: y } = (0, e5.e)({ location: "HeadphonesButton" }),
        C = (0, Z.Z)(t, n, i),
        { analyticsLocations: S } = (0, O.ZP)(T.Z.AUDIO_OUTPUT_BUTTON),
        E = l.useRef(null);
    l.useEffect(() => () => g(), [h, g]);
    let N = l.useCallback(
        (e) => {
            o(e, S);
        },
        [o, S],
    );
    return y
        ? (0, a.jsx)(O.Gt, {
              value: S,
              children: (0, a.jsx)(f.yRy, {
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
                  animation: f.yRy.Animation.FADE,
                  spacing: 4,
                  children: (e, t) => {
                      let { onClick: l } = e,
                          { isShown: o } = t,
                          m = o ? f.u04 : f.CJ0;
                      return (0, a.jsxs)("div", {
                          ref: E,
                          className: r()(ts.micButtonParent, {
                              [ts.hasColorGlow]: h,
                              [ts.popoutOpen]: o,
                          }),
                          children: [
                              (0, a.jsx)(e9.Z, {
                                  "aria-checked": h,
                                  "aria-label": tr.intl.string(tr.t.wjcRFX),
                                  className: ts.micButtonWithMenu,
                                  disabled: i,
                                  icon: (0, a.jsx)(j, {
                                      size: "custom",
                                      width: 20,
                                      height: 20,
                                      color: h ? f.TVs.colors.STATUS_DANGER : "currentColor",
                                      className: c,
                                  }),
                                  iconForeground: h ? ts.strikethrough : void 0,
                                  innerClassName: r()({ [ts.redIcon]: n }),
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
                                      ? tr.intl.formatToPlainString(tr.t["f+DDY/"], { outputDeviceName: _ })
                                      : tr.intl.string(tr.t.aA4Vce),
                                  className: r()(ts.buttonChevron, { [ts.popoutOpen]: o }),
                                  disabled: i,
                                  icon: (0, a.jsx)(m, {
                                      className: ts.buttonChevronIcon,
                                      size: "custom",
                                      width: 12,
                                      height: 12,
                                      color: h ? f.TVs.colors.STATUS_DANGER : "currentColor",
                                  }),
                                  onClick: l,
                                  onContextMenu: l,
                                  plated: null != d,
                                  redGlow: h,
                                  tooltipClassName: ts.accountButtonsTooltip,
                                  tooltipColor: u ? f.r6K.GREEN : void 0,
                                  tooltipContentClassName: ts.accountButtonsTooltipContent,
                                  tooltipForceOpen: u,
                                  tooltipPositionKeyStemOverride: u
                                      ? tr.intl.formatToPlainString(tr.t["f+DDY/"], { outputDeviceName: _ })
                                      : void 0,
                                  tooltipShouldShow: !o,
                                  tooltipText: u
                                      ? tr.intl.format(tr.t["f+DDY/"], { outputDeviceName: _ })
                                      : tr.intl.string(tr.t.aA4Vce),
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
                      color: h ? f.TVs.colors.STATUS_DANGER : "currentColor",
                      className: c,
                  }),
                  onClick: s,
                  onContextMenu: N,
                  innerClassName: r()({ [ts.redIcon]: n }),
                  iconForeground: h ? ts.strikethrough : void 0,
                  role: "switch",
                  redGlow: h,
                  "aria-label": tr.intl.string(tr.t.wjcRFX),
                  "aria-checked": h,
                  disabled: i,
              }),
          });
}
