n.d(t, {
    Z: () => tg,
    m: () => tp,
}),
    n(388685),
    n(539854);
var a = n(951288),
    i = n(647438),
    r = n(120356),
    l = n.n(r),
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
    T = n(570928),
    O = n(100527),
    N = n(906732),
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
    V = n(812055),
    H = n(243778),
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
    ei = n(379839),
    er = n(359135),
    el = n(516817),
    es = n(332473),
    eo = n(963590),
    ec = n(562705),
    ed = n(667105),
    eu = n(768419),
    em = n(172416),
    ep = n(184301),
    eh = n(456077),
    ex = n(620799),
    eg = n(313789),
    ef = n(846071),
    eb = n(518596),
    ev = n(879815),
    ej = n(294629),
    e_ = n(875527),
    ey = n(702977),
    eC = n(56848),
    eS = n(940315),
    eE = n(378441),
    eT = n(358820),
    eO = n(723547),
    eN = n(361045),
    eP = n(74650),
    eI = n(306609),
    ew = n(170293),
    ek = n(8404),
    eR = n(199902),
    eA = n(314897),
    eZ = n(592125),
    eD = n(831506),
    eL = n(819640),
    eM = n(131951),
    eU = n(19780),
    eF = n(914010),
    eB = n(885110),
    eG = n(606304),
    ez = n(246946),
    eV = n(594174),
    eH = n(78839),
    eW = n(626135),
    eK = n(768581),
    eq = n(572004),
    eY = n(459273),
    eJ = n(585483),
    eX = n(70956),
    eQ = n(823379),
    e$ = n(5192),
    e0 = n(374023),
    e1 = n(51144),
    e8 = n(998502),
    e4 = n(660230),
    e3 = n(853170),
    e2 = n(422202),
    e6 = n(870569),
    e5 = n(345243),
    e7 = n(115530),
    e9 = n(981631),
    te = n(921944),
    tt = n(46140),
    tn = n(65154),
    ta = n(388032),
    ti = n(25874);
function tr(e, t, n) {
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
            a = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            a.forEach(function (t) {
                tr(e, t, n[t]);
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
let to = e8.ZP.getEnableHardwareAcceleration() ? g.Xo$ : g.qEK,
    tc = 2 * eX.Z.Millis.MINUTE,
    td = 3 * eX.Z.Millis.SECOND,
    tu = 5 * eX.Z.Millis.SECOND;
function tm(e) {
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
        j = i.useRef(null),
        y = null != t ? t : j,
        C = (0, eK.NZ)({
            avatarDecoration: f,
            size: (0, w.y9)(g.EFr.SIZE_32),
        }),
        S = (0, K.Z)(),
        {
            updateOpenPopoutRef: E,
            highlightBadge: T,
            setHighlightBadge: O,
        } = (function () {
            let e = i.useRef(null),
                t = i.useCallback((t) => {
                    e.current = () => {
                        t.onMouseDown(), t.onClick();
                    };
                }, []),
                [n, a] = i.useState(),
                [r, l] = i.useState(!1);
            return (
                (0, _.Z)(() => l(!0), 750),
                i.useEffect(() => {
                    let t = (t) => {
                        var n;
                        let { highlightBadge: i } = t;
                        null != i && a(i), null == (n = e.current) || n.call(e);
                    };
                    return (
                        eJ.S.subscribe(e9.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, t),
                        () => {
                            eJ.S.unsubscribe(e9.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, t);
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
        N = (0, ei.A)(p);
    if (null == o) return null;
    let P = x && h !== e9.I_8 && h !== e9.ME && null != h ? h : void 0;
    return (0, a.jsx)(b.Z, {
        object: e9.qAy.AVATAR,
        children: (0, a.jsx)(eh.Z, {
            user: o,
            targetElementRef: y,
            clickTrap: !0,
            preload: () =>
                (0, ep.Z)(o.id, o.getAvatarURL(P, eh.I), {
                    type: "account_popout",
                    withMutualGuilds: !1,
                    withMutualFriends: !1,
                    guildId: P,
                }),
            renderPopout: (e, t) => {
                let { closePopout: n, setPopoutRef: i } = e;
                return (0, a.jsx)(en.Z, {
                    currentUser: o,
                    highlightBadge: T,
                    openedAt: t,
                    onClose: () => {
                        null == n || n();
                    },
                    setPopoutRef: i,
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
                u(), O(void 0);
            },
            children: (e) => (
                E(e),
                (0, a.jsxs)(
                    g.P3F,
                    ts(
                        tl(
                            {
                                innerRef: y,
                                style: N,
                            },
                            e,
                        ),
                        {
                            onClick: (t) => {
                                var n;
                                null == (n = e.onClick) || n.call(e, t), null == d || d(t);
                            },
                            "aria-label": ta.intl.string(ta.t["3Uj+2p"]),
                            "data-jump-section": v,
                            className: l()(ti.avatarWrapper, { [ti.plated]: null != p }),
                            children: [
                                (0, a.jsx)(to, {
                                    size: g.EFr["SIZE_".concat(32)],
                                    src: o.getAvatarURL(x ? h : void 0, 28, !1),
                                    avatarDecoration: C,
                                    "aria-label": o.username,
                                    status: s ? e9.Skl.STREAMING : c,
                                    isSpeaking: n,
                                    isLatched: r,
                                    className: ti.avatar,
                                }),
                                (0, a.jsx)("div", {
                                    className: l()(ti.nameTag, { [ti.canCopy]: eq.wS }),
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
class tp extends i.PureComponent {
    get isCopiedStreakGodlike() {
        let { copiedStreak: e } = this.state;
        return e >= 10;
    }
    componentDidUpdate(e) {
        let { speakingWhileMuted: t, occluded: n } = e,
            { speakingWhileMuted: a, occluded: i } = this.props;
        i !== n && this.handleOccludedChanged(), a !== t && this.handleSpeakingWhileMutedChanged();
    }
    componentWillUnmount() {
        this.copiedTimeout.stop(), this.copiedDecayTimeout.stop(), this.speakingWhileMutedTooltipTimeout.stop();
    }
    renderCopiedSuccess() {
        let { copiedStreak: e } = this.state,
            t = [
                ta.intl.string(ta.t.MSaeTe),
                ta.intl.string(ta.t.UmrCw7),
                ta.intl.string(ta.t.gKE0Jq),
                ta.intl.string(ta.t["4DSKbi"]),
                ta.intl.string(ta.t["+8ENdT"]),
                ta.intl.string(ta.t.GlWHv8),
                ta.intl.string(ta.t.hIzxU9),
                ta.intl.string(ta.t["26uMPL"]),
                ta.intl.string(ta.t.uFs7R2),
                ta.intl.string(ta.t.bLXdcY),
                ta.intl.string(ta.t.gPg9fS),
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
                currentUser: i,
                status: r,
                userTag: l,
                voiceActivityStatusEnabled: s,
                voiceChannel: o,
            } = this.props;
        if (null == i) return null;
        if (
            (0, C.Z)({
                activities: t,
                status: r,
                applicationStream: n,
                voiceChannel: s ? o : void 0,
            })
        )
            return (0, a.jsx)(T.Z, {
                hoverText: l,
                forceHover: e,
                children: (0, a.jsx)(S.Z, {
                    location: "Account",
                    user: i,
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
            ? (0, a.jsx)(T.Z, {
                  hoverText: l,
                  forceHover: e,
                  children: (0, a.jsx)(z.Z, {
                      activity: c,
                      emojiClassName: ti.emoji,
                      className: ti.customStatus,
                  }),
              })
            : null != r && r !== e9.Skl.UNKNOWN && i.hasUniqueUsername()
              ? (0, a.jsx)(T.Z, {
                    hoverText: l,
                    forceHover: e,
                    children: (0, a.jsx)(E.Z, { text: e1.ZP.humanizeStatus(r) }),
                })
              : l;
    }
    renderAvatarWithPopout(e) {
        let {
            focusSectionProps: { "data-jump-section": t },
            onClick: n,
        } = e;
        return (0, a.jsx)(
            tm,
            ts(tl({}, this.props), {
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
            markRecurringAvatarDcAsDismissed: r,
            visibleRecurringDoNotDisturbReminderPopoverDc: l,
            markRecurringDoNotDisturbReminderPopoverDcAsDismissed: s,
            isQuestBarEmpty: o,
            hasLoadedQuestBar: c,
        } = this.props;
        if (null == t) return null;
        if (!(null != this.avatarWithPopoutRef.current && o && c))
            return this.renderAvatarWithPopout({ focusSectionProps: e });
        if (i === u.z.GUILD_TAG_AVAILABLE_COACHMARK) {
            var d;
            return (0, a.jsx)(Q.ZP, {
                guildId: null != (d = this.props.selectedGuildId) ? d : null,
                onDismiss: r,
                targetElementRef: this.avatarWithPopoutRef,
                children: this.renderAvatarWithPopout({ focusSectionProps: e }),
            });
        }
        return l === u.z.DO_NOT_DISTURB_REMINDER_POPOVER
            ? (0, a.jsx)(V.Z, {
                  targetElementRef: this.avatarWithPopoutRef,
                  onDismiss: s,
                  children: this.renderAvatarWithPopout({ focusSectionProps: e }),
              })
            : (0, a.jsxs)(a.Fragment, {
                  children: [
                      (0, a.jsx)(ec.Z, {
                          groupName: te.R.ACCOUNT_NAME_ZONE,
                          targetElementRef: this.avatarWithPopoutRef,
                      }),
                      (0, a.jsx)(H.ZP, {
                          contentTypes: n.avatar,
                          groupName: te.R.ACCOUNT_NAME_ZONE,
                          children: (t) => {
                              let { visibleContent: n, markAsDismissed: i } = t;
                              switch (n) {
                                  case u.z.WIDGETS_RTC_UPSELL_COACHMARK:
                                      return (0, a.jsx)(ex.Z, {
                                          markAsDismissed: i,
                                          targetElementRef: this.avatarWithPopoutRef,
                                          children: this.renderAvatarWithPopout({ focusSectionProps: e }),
                                      });
                                  case u.z.DISPLAY_NAME_STYLES_COACHMARK:
                                      return (0, a.jsx)(Y.e, {
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
        let { currentUser: e, nameplate: t, voiceChannel: n, isQuestBarEmpty: i, isListenAlongVisible: r } = this.props,
            s = this.state.hovered;
        return null == e
            ? null
            : (0, a.jsxs)(a.Fragment, {
                  children: [
                      (0, a.jsx)(g.Wdt, {
                          children: (e) =>
                              (0, a.jsxs)("div", {
                                  ref: this.containerRef,
                                  className: l()(ti.container, {
                                      [ti.containerRtcOpened]: null != n,
                                      [ti.containerQuestBarVisible]: !i,
                                      [ti.containerListenAlongVisible]: r,
                                  }),
                                  onMouseEnter: this.handleMouseEnter,
                                  onMouseLeave: this.handleMouseLeave,
                                  children: [
                                      (0, a.jsx)(el.Z, {
                                          nameplate: t,
                                          hovered: s,
                                          placement: er.i.ACCOUNT,
                                      }),
                                      this.renderNameZone(e),
                                      (0, a.jsx)(
                                          th,
                                          ts(tl({}, this.props, this.state), {
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
            tr(this, "copiedTimeout", new m.V7()),
            tr(this, "copiedDecayTimeout", new m.V7()),
            tr(this, "speakingWhileMutedTooltipTimeout", new m.V7()),
            tr(this, "lastSpeakingWhileMutedNotificationTime", void 0),
            tr(this, "state", {
                hovered: !1,
                copiedStreak: 0,
                shouldShowNametagTooltip: !1,
                shouldShowCopiedFeedback: !1,
                shouldShowSpeakingWhileMutedTooltip: !1,
                hoveringOnMute: !1,
            }),
            tr(this, "containerRef", i.createRef()),
            tr(this, "avatarWithPopoutRef", i.createRef()),
            tr(this, "handleToggleSelfMute", () => {
                let { serverMute: e, suppress: t, selfMute: n } = this.props;
                (0, F.Z)(e, t, e9.jXE.ACCOUNT_PANEL), (0, B.v)(O.Z.ACCOUNT, B.d.MIC, n);
            }),
            tr(this, "handleToggleSelfDeaf", () => {
                let { serverDeaf: e, selfDeaf: t } = this.props;
                (0, U.Z)(e, e9.jXE.ACCOUNT_PANEL), (0, B.v)(O.Z.ACCOUNT, B.d.DEAFEN, !t);
            }),
            tr(this, "handleOpenAccountSettings", () => {
                this.dismissTooltips(),
                    eU.Z.isConnected()
                        ? (0, eb.openUserSettings)(eg.n.VOICE_AND_VIDEO_PANEL, { section: e9.oAB.VOICE })
                        : (0, eb.openUserSettings)();
            }),
            tr(this, "handleOpenSettingsContextMenu", (e) => {
                let { currentUser: t } = this.props;
                null != t &&
                    (0, f.jW)(e, async () => {
                        let { default: e } = await n.e("2535").then(n.bind(n, 923422));
                        return (n) =>
                            (0, a.jsx)(
                                e,
                                ts(tl({}, n), {
                                    user: t,
                                    premiumSubscription: this.props.premiumSubscription,
                                    webBuildOverride: this.props.webBuildOverride,
                                    onInteraction: (0, G.u)("UserSettingsCogContextMenu", O.Z.ACCOUNT),
                                }),
                            );
                    });
            }),
            tr(this, "audioOnInteractionHandler", (0, G.u)("AudioDeviceMenu", O.Z.ACCOUNT)),
            tr(this, "handleInputAudioContextMenu", (e, t) => {
                this.dismissTooltips(),
                    (0, f.jW)(e, async () => {
                        let { default: e } = await Promise.resolve().then(n.bind(n, 659580));
                        return () => {
                            let { enabledInputProfiles: n } = (0, ef.G)({ location: "Account" });
                            return (0, a.jsx)(N.Gt, {
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
            tr(this, "handleOutputAudioContextMenu", (e, t) => {
                this.dismissTooltips(),
                    (0, f.jW)(e, async () => {
                        let { default: e } = await Promise.resolve().then(n.bind(n, 659580));
                        return () =>
                            (0, a.jsx)(N.Gt, {
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
            tr(this, "handleMouseEnter", () => {
                this.setState({ hovered: !0 });
            }),
            tr(this, "handleMouseLeave", () => {
                this.setState({ hovered: !1 });
            }),
            tr(this, "handleMouseEnterMute", () => {
                this.setState({
                    hoveringOnMute: !0,
                    shouldShowSpeakingWhileMutedTooltip: !1,
                }),
                    this.speakingWhileMutedTooltipTimeout.stop();
            }),
            tr(this, "handleMouseLeaveMute", () => {
                this.setState({ hoveringOnMute: !1 });
            }),
            tr(this, "dismissSpeakingWhileMutedTooltip", () => {
                this.setState({ shouldShowSpeakingWhileMutedTooltip: !1 }),
                    this.speakingWhileMutedTooltipTimeout.stop();
            }),
            tr(this, "dismissTooltips", () => {
                var e, t, n, a;
                null == (e = (t = this.props).dismissInputDeviceChangedTooltip) || e.call(t),
                    null == (n = (a = this.props).dismissOutputDeviceChangedTooltip) || n.call(a),
                    this.dismissSpeakingWhileMutedTooltip();
            }),
            tr(this, "handleCopyTag", () => {
                let { currentUser: e } = this.props,
                    { shouldShowNametagTooltip: t, copiedStreak: n } = this.state;
                if (null == e) return;
                (0, eq.JG)(
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
            tr(this, "handleOccludedChanged", () => {
                let { occluded: e } = this.props;
                e &&
                    this.setState({
                        shouldShowNametagTooltip: !1,
                        shouldShowSpeakingWhileMutedTooltip: !1,
                    });
            }),
            tr(this, "handleSpeakingWhileMutedChanged", () => {
                let {
                        selfMute: e,
                        serverMute: t,
                        suppress: n,
                        speakingWhileMuted: a,
                        occluded: i,
                        shouldShowInputDeviceChangedTooltip: r,
                        shouldShowOutputDeviceChangedTooltip: l,
                    } = this.props,
                    { hoveringOnMute: s } = this.state,
                    o =
                        void 0 === this.lastSpeakingWhileMutedNotificationTime ||
                        Date.now() - this.lastSpeakingWhileMutedNotificationTime > tc;
                a
                    ? s ||
                      !e ||
                      t ||
                      n ||
                      i ||
                      !o ||
                      r ||
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
            tr(this, "renderNameTag", (e) => {
                let { currentUser: t, username: n } = this.props;
                return null == t
                    ? null
                    : (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)("div", {
                                  className: ti.panelTitleContainer,
                                  children: (0, a.jsx)(e7.Z, {
                                      className: l()({ [ti.withDisplayNameStyles]: null != e }),
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
                                  className: ti.panelSubtextContainer,
                                  children: (0, a.jsx)(e5.Z, { children: this.renderStatus() }),
                              }),
                          ],
                      });
            });
    }
}
function th(e) {
    let {
            selfDeaf: t,
            selfMute: n,
            awaitingRemote: i,
            serverMute: r,
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
        E = (0, ei.A)(j);
    return (0, a.jsxs)("div", {
        className: ti.buttons,
        style: E,
        children: [
            (0, a.jsx)(tb, {
                accountContainerRef: _,
                selfMute: n,
                serverMute: r,
                suppress: s,
                awaitingRemote: i,
                onMouseEnter: u,
                onMouseLeave: m,
                onClick: h,
                onContextMenu: x,
                iconForeground: null != j ? ti.iconForeground : void 0,
                nameplate: j,
                shouldShowInputDeviceChangedTooltip: y,
                shouldShowSpeakingWhileMutedTooltip: o,
                dismissTooltips: S,
            }),
            (0, a.jsx)(tv, {
                selfDeaf: t,
                serverDeaf: l,
                onClick: p,
                onContextMenu: g,
                awaitingRemote: i,
                iconForeground: null != j ? ti.iconForeground : void 0,
                nameplate: j,
                shouldShowOutputDeviceChangedTooltip: C,
                dismissTooltips: S,
            }),
            (0, a.jsx)(tf, {
                isEligibleForPomelo: c,
                webBuildOverride: d,
                onClick: f,
                onContextMenu: b,
                dismissibleContents: v.settings,
                iconForeground: null != j ? ti.iconForeground : void 0,
                nameplate: j,
                shouldShowInputDeviceChangedTooltip: y,
                shouldShowOutputDeviceChangedTooltip: C,
            }),
        ],
    });
}
function tx(e) {
    let { shouldShowDeviceChangedNotifications: t } = (0, e2.P)({
            location: "Account.useDeviceChangedTooltip",
            autoTrackExposure: !1,
        }),
        n = (0, d.e7)([eU.Z], () => null != eU.Z.getChannelId()),
        a = (0, et.Fh)(e),
        r = i.useRef(new m.V7()),
        [l, s] = i.useState(!1);
    i.useEffect(() => {
        n &&
            a &&
            ((0, e2._)({
                location: "Account.useDeviceChangedTooltip (exposure tracking)",
                autoTrackExposure: !0,
            }),
            t &&
                (s(!0),
                r.current.start(tu, () => {
                    s(!1);
                })));
    }, [n, a, t]);
    let o = i.useCallback(() => {
        s(!1), r.current.stop();
    }, []);
    return (
        (0, j.zq)(() => {
            r.current.stop();
        }),
        {
            shouldShowTooltip: l,
            dismissTooltip: o,
        }
    );
}
function tg() {
    var e;
    let t = (0, d.e7)([eV.default], () => eV.default.getCurrentUser()),
        n = (0, d.e7)([eA.default], () => eA.default.getId()),
        i = e4.K.useConfig({ location: "AccountConnected" }).transitionAccountPanel,
        {
            activities: r,
            streaming: l,
            status: s,
        } = (0, d.cj)([eB.Z], () => {
            let e = eB.Z.getActivities();
            return {
                activities: e,
                streaming:
                    null !=
                    e.find((e) => {
                        let { type: t } = e;
                        return t === e9.IIU.STREAMING;
                    }),
                status: eB.Z.getStatus(),
            };
        }),
        c = (0, d.e7)([eR.Z], () => eR.Z.getAnyStreamForUser(n)),
        m = (0, v.Z)({ userId: n }),
        p = (0, d.e7)([eG.Z], () => eG.Z.isCurrentUserPTTLatched()),
        h = e1.ZP.useUserTag(t, { decoration: "never" }),
        x = (0, d.e7)([ez.Z], () => ez.Z.hidePersonalInformation),
        f = (0, d.e7)([eU.Z, eZ.Z], () => {
            let e = eU.Z.getChannelId();
            return null != e ? eZ.Z.getChannel(e) : null;
        }),
        { mute: b, selfMute: j, suppress: _ } = (0, ej.Z)(f),
        { selfDeaf: C, deaf: S } = (0, ev.Z)(f),
        E = (0, d.e7)([k.C], () => {
            var e;
            return (0, R.fD)()
                ? null == (e = k.C.getCurrentBuildOverride().overrides)
                    ? void 0
                    : e.discord_web
                : null;
        }),
        T = (0, d.e7)([eH.Z], () => eH.Z.getPremiumTypeSubscription()),
        w = (0, d.e7)([eM.Z], () => eM.Z.getSpeakingWhileMuted()),
        Z = (0, d.e7)([A.Z], () => A.Z.isFullscreenInContext()),
        D = (0, d.e7)([eL.Z], () => eL.Z.hasLayers()),
        L = (0, g.s9z)(g.JQI) || D || e0.s.isDisallowPopupsSet() || Z,
        M = (0, es.b)(),
        U = (0, d.e7)([X.default], () => null != X.default.getAwaitingRemoteSessionInfo()),
        F = (0, d.e7)([eF.Z], () => eF.Z.getGuildId()),
        B = null == t ? void 0 : t.avatarDecoration,
        G = (0, P.R)(t, null != F ? F : void 0),
        z = (0, I.Z)(i ? G : B),
        H = e$.ZP.useName(null != F ? F : void 0, null, t),
        K = null != (e = e1.ZP.useName(t)) ? e : "",
        { voiceActivityStatusEnabled: q } = (0, y.U)({ location: "Account" }),
        [Y, J] = (0, $.G)(null != F ? F : null),
        [Q, ee] = (0, V.b)(),
        et = W.JH.useExperiment({ location: "Account" }).enabled,
        { analyticsLocations: en } = (0, N.ZP)(O.Z.ACCOUNT),
        ei = (0, ea.K)({
            user: t,
            guildId: i && null != F ? F : void 0,
        }),
        { isQuestBarEmpty: er, hasLoadedQuestBar: el } = (0, ed.Ws)({ location: tt.dr.CONFLICT_CHECKS }),
        eo = (0, d.e7)([eu.Z, eV.default, eD.Z], () => {
            let e,
                t = eu.Z.getSyncingWith(),
                n = eu.Z.getActivity(),
                a = [];
            if (
                (null != t ? (e = t.partyId) : null != n && null != n.party && null != n.party.id && (e = n.party.id),
                null != e)
            ) {
                var i;
                a = o()(Array.from(null != (i = eD.Z.getParty(e)) ? i : []))
                    .map((e) => eV.default.getUser(e))
                    .filter(eQ.lm)
                    .value();
            }
            return a.length > 1;
        }),
        ec = (0, em.Un)({ location: "AccountConnected" }),
        ep = {
            avatar: [],
            settings: [],
        };
    !L &&
        (et && ep.avatar.push(u.z.DISPLAY_NAME_STYLES_COACHMARK),
        ec && ep.avatar.push(u.z.WIDGETS_RTC_UPSELL_COACHMARK));
    let { shouldShowTooltip: eh, dismissTooltip: ex } = tx(tn.h7.AUDIO_INPUT),
        { shouldShowTooltip: eg, dismissTooltip: ef } = tx(tn.h7.AUDIO_OUTPUT);
    return (0, a.jsx)(N.Gt, {
        value: en,
        children: (0, a.jsx)(tp, {
            currentUser: t,
            username: i ? H : K,
            transitionAccountPanel: i,
            activities: r,
            applicationStream: c,
            voiceChannel: f,
            dismissibleContents: ep,
            visibleRecurringAvatarDc: Y,
            markRecurringAvatarDcAsDismissed: J,
            visibleRecurringDoNotDisturbReminderPopoverDc: Q,
            markRecurringDoNotDisturbReminderPopoverDcAsDismissed: ee,
            userTag: h,
            hidePrivateData: x,
            occluded: L,
            premiumSubscription: T,
            selfDeaf: C,
            selfMute: j,
            serverDeaf: S,
            serverMute: b,
            speaking: m,
            speakingWhileMuted: w,
            latched: p && null != f,
            status: s,
            streaming: l,
            suppress: _,
            webBuildOverride: E,
            awaitingRemote: U,
            isEligibleForPomelo: M,
            voiceActivityStatusEnabled: q,
            nameplate: ei,
            selectedGuildId: F,
            avatarDecoration: z,
            isQuestBarEmpty: er,
            hasLoadedQuestBar: el,
            isListenAlongVisible: eo,
            shouldShowInputDeviceChangedTooltip: eh,
            shouldShowOutputDeviceChangedTooltip: eg,
            dismissInputDeviceChangedTooltip: ex,
            dismissOutputDeviceChangedTooltip: ef,
        }),
    });
}
function tf(e) {
    let t,
        n,
        r,
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
        x = i.useRef(null),
        { showRefreshedAudioContextMenu: f } = (0, e3.e)({ location: "SettingsCogButton" }),
        b = !f && (m || p),
        { name: v } = (0, et.p6)(tn.h7.AUDIO_INPUT),
        { name: j } = (0, et.p6)(tn.h7.AUDIO_OUTPUT);
    !f && m
        ? ((t = ta.intl.format(ta.t["18wnuD"], { inputDeviceName: v })),
          (n = ta.intl.formatToPlainString(ta.t["18wnuD"], { inputDeviceName: v })),
          (r = ta.intl.formatToPlainString(ta.t["18wnuD"], { inputDeviceName: v })))
        : !f && p
          ? ((t = ta.intl.format(ta.t["f+DDY/"], { outputDeviceName: j })),
            (n = ta.intl.formatToPlainString(ta.t["f+DDY/"], { outputDeviceName: j })),
            (r = ta.intl.formatToPlainString(ta.t["f+DDY/"], { outputDeviceName: j })))
          : (t =
                null != l
                    ? ta.intl.formatToPlainString(ta.t.Gzh6ZP, { webBuildOverride: l.id })
                    : ta.intl.string(ta.t.cduTBL));
    let _ = g.ewm,
        y = (0, h.i)();
    return (
        (_ = null != l ? g.bgT : s ? g.Ncx : y.Component),
        (0, a.jsx)(
            e6.Z,
            ts(
                tl(
                    {
                        ref: x,
                        tooltipText: t,
                        tooltipColor: b ? g.r6K.GREEN : void 0,
                        tooltipForceOpen: b,
                        tooltipClassName: ti.accountButtonsTooltip,
                        tooltipContentClassName: ti.accountButtonsTooltipContent,
                        tooltipPositionKeyStemOverride: n,
                        "aria-label": b ? r : void 0,
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
function tb(e) {
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
        E = i.useRef(null),
        T = i.useRef(null),
        P = (0, ek.b)(S),
        { activeVoice: I, mostRecentlyRequestedVoiceId: w, lastInitAttemptMayHaveCrashed: k } = (0, eE.o)(),
        { showSilentLagWarning: R } = (0, eS.Y)(),
        A = null != I,
        Z = (0, eC.z)(I),
        U = (0, d.e7)([eU.Z], () => eU.Z.isConnected()),
        { Component: F, events: B, play: z } = P,
        V = r || s ? g.v0G : F,
        W = (0, D.Z)(n, r, s, o),
        K = R ? ta.intl.string(ta.t.ARRV6m) : null;
    t = _
        ? ta.intl.string(ta.t["29gnR4"])
        : null != K
          ? (0, a.jsxs)("div", {
                className: ti.tooltipWithSubtext,
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
    let { analyticsLocations: q } = (0, N.ZP)(O.Z.AUDIO_INPUT_BUTTON),
        Y = (0, e_.Hu)({
            location: O.Z.AUDIO_INPUT_BUTTON,
            autoTrackExposure: !0,
        }),
        J = (0, ey.av)({
            location: O.Z.AUDIO_INPUT_BUTTON,
            autoTrackExposure: !0,
        });
    i.useEffect(() => () => z(), [S, z]);
    let X = i.useCallback(
            (e) => {
                b(e, q);
            },
            [b, q],
        ),
        [Q, $] = i.useState(!1),
        ee = i.useCallback((e) => {
            var t;
            if (
                (0, c.kK)(null == e ? void 0 : e.target, Node) &&
                (null == (t = E.current) ? void 0 : t.contains(e.target))
            )
                return x.F;
            $(!1);
        }, []);
    (0, eY.yp)({
        event: e9.CkL.OPEN_VOICE_FILTER_POPOUT,
        handler: () => {
            $(!0);
        },
    });
    let [en, ea] = i.useState(!1);
    i.useEffect(() => {
        let e;
        return (
            U &&
                A &&
                (e = setTimeout(() => {
                    ea(!0), (e = setTimeout(() => ea(!1), td));
                }, 300)),
            () => {
                ea(!1), clearTimeout(e);
            }
        );
    }, [U]);
    let ei = i.useCallback(() => {
            k || (0, eT.r5)();
        }, [k]),
        er = S ? g.TVs.colors.STATUS_DANGER : R ? g.TVs.colors.STATUS_WARNING : "currentColor",
        el = S || R,
        es = (0, eo.Z)({ location: "Account" }),
        { name: ec } = (0, et.p6)(tn.h7.AUDIO_INPUT),
        { showRefreshedAudioContextMenu: ed } = (0, e3.e)({ location: "MicrophoneButton" }),
        { enabledInputProfiles: eu } = (0, ef.G)({ location: "MicrophoneButton" });
    return ed
        ? (0, a.jsx)(N.Gt, {
              value: q,
              children: (0, a.jsx)(g.yRy, {
                  targetElementRef: E,
                  renderPopout: (e) => {
                      let { closePopout: t } = e;
                      return (
                          C(),
                          (0, a.jsx)(N.Gt, {
                              value: q,
                              children: ed
                                  ? (0, a.jsx)(M.Z, {
                                        onInteraction: (0, G.u)("AudioDeviceMenu", O.Z.ACCOUNT),
                                        onClose: t,
                                        maybeRenderPTTCheckbox: !0,
                                        renderInputProfiles: eu.length > 0,
                                        renderInputDevices: !0,
                                        maybeRenderInputMeter: !0,
                                        renderInputVolume: !0,
                                        renderSettingsButton: !0,
                                    })
                                  : (0, a.jsx)(L.default, {
                                        onInteraction: (0, G.u)("AudioDeviceMenu", O.Z.ACCOUNT),
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
                      let { onClick: i } = e,
                          { isShown: r } = n,
                          s = r ? g.u04 : g.CJ0;
                      return (0, a.jsxs)("div", {
                          ref: E,
                          className: l()(ti.micButtonParent, {
                              [ti.hasColorGlow]: el,
                              [ti.popoutOpen]: r,
                          }),
                          children: [
                              (0, a.jsx)(e6.Z, {
                                  "aria-checked": S,
                                  "aria-label": ta.intl.string(ta.t.w4m945),
                                  className: l()({ [ti.micButtonWithMenu]: !0 }),
                                  disabled: o,
                                  icon: (0, a.jsx)(V, {
                                      size: "custom",
                                      width: 20,
                                      height: 20,
                                      color: er,
                                      className: m,
                                  }),
                                  onClick: f,
                                  onContextMenu: i,
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
                              (0, a.jsx)(e6.Z, {
                                  "aria-label": y
                                      ? ta.intl.formatToPlainString(ta.t["18wnuD"], { inputDeviceName: ec })
                                      : ta.intl.string(ta.t.fRzCbB),
                                  className: l()(ti.buttonChevron, { [ti.popoutOpen]: r }),
                                  disabled: o,
                                  icon: (0, a.jsx)(s, {
                                      className: ti.buttonChevronIcon,
                                      size: "custom",
                                      width: 12,
                                      height: 12,
                                      color: er,
                                  }),
                                  onClick: i,
                                  onContextMenu: i,
                                  onMouseEnter: p,
                                  onMouseLeave: h,
                                  orangeGlow: R,
                                  plated: null != v,
                                  redGlow: S,
                                  tooltipClassName: ti.accountButtonsTooltip,
                                  tooltipColor: y ? g.r6K.GREEN : void 0,
                                  tooltipContentClassName: ti.accountButtonsTooltipContent,
                                  tooltipForceOpen: y,
                                  tooltipPositionKeyStemOverride: y
                                      ? ta.intl.formatToPlainString(ta.t["18wnuD"], { inputDeviceName: ec })
                                      : void 0,
                                  tooltipShouldShow: !r,
                                  tooltipText: y
                                      ? ta.intl.format(ta.t["18wnuD"], { inputDeviceName: ec })
                                      : ta.intl.string(ta.t.fRzCbB),
                              }),
                          ],
                      });
                  },
              }),
          })
        : (0, a.jsx)(N.Gt, {
              value: q,
              children: (0, a.jsxs)("div", {
                  ref: E,
                  className: l()(ti.micButtonParent, { [ti.hasColorGlow]: el }),
                  children: [
                      (0, a.jsx)(e6.Z, {
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
                          icon: (0, a.jsx)(V, {
                              size: "custom",
                              width: 20,
                              height: 20,
                              color: er,
                              className: m,
                          }),
                          onClick: f,
                          onContextMenu: X,
                          role: "switch",
                          className: l()({ [ti.micButtonWithMenu]: Y }),
                          orangeGlow: R,
                          redGlow: S,
                          "aria-label": ta.intl.string(ta.t.w4m945),
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
                              onRequestOpen: ei,
                              onRequestClose: ee,
                              shouldShow: Q,
                              renderPopout: (e) => {
                                  let { closePopout: t } = e;
                                  return (0, a.jsx)(eI.l, { onSettingsButtonClick: t });
                              },
                              children: (e, t) => {
                                  var { onClick: n } = e,
                                      i = (function (e, t) {
                                          if (null == e) return {};
                                          var n,
                                              a,
                                              i = (function (e, t) {
                                                  if (null == e) return {};
                                                  var n,
                                                      a,
                                                      i = {},
                                                      r = Object.keys(e);
                                                  for (a = 0; a < r.length; a++)
                                                      (n = r[a]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                                                  return i;
                                              })(e, t);
                                          if (Object.getOwnPropertySymbols) {
                                              var r = Object.getOwnPropertySymbols(e);
                                              for (a = 0; a < r.length; a++)
                                                  (n = r[a]),
                                                      !(t.indexOf(n) >= 0) &&
                                                          Object.prototype.propertyIsEnumerable.call(e, n) &&
                                                          (i[n] = e[n]);
                                          }
                                          return i;
                                      })(e, ["onClick"]),
                                      { isShown: r } = t;
                                  let l = r ? g.u04 : g.CJ0,
                                      s = [];
                                  return (
                                      !r &&
                                          (es && s.push(u.z.VOICE_FILTER_EARLY_ACCESS_COACHMARK),
                                          s.push(u.z.VOICE_FILTER_LAUNCH_COACHMARK),
                                          J && U && !A && s.push(u.z.VOICE_FILTER_FIRST_USE_COACHMARK)),
                                      (0, a.jsx)("div", {
                                          children: (0, a.jsx)(H.ZP, {
                                              bypassAutoDismiss: !0,
                                              contentTypes: s,
                                              children: (e) => {
                                                  let { visibleContent: t, markAsDismissed: r } = e,
                                                      s = null;
                                                  t === u.z.VOICE_FILTER_EARLY_ACCESS_COACHMARK
                                                      ? (s = (0, a.jsx)(eP.U, {
                                                            markAsDismissed: r,
                                                            onCTA: () => $(!0),
                                                        }))
                                                      : t === u.z.VOICE_FILTER_LAUNCH_COACHMARK
                                                        ? (s = (0, a.jsx)(eN.n, {
                                                              markAsDismissed: r,
                                                              onCTA: () => $(!0),
                                                          }))
                                                        : t === u.z.VOICE_FILTER_FIRST_USE_COACHMARK &&
                                                          (s = (0, a.jsx)(eO.v, {
                                                              markAsDismissed: r,
                                                              onCTA: () => $(!0),
                                                          }));
                                                  let c = () =>
                                                      (0, a.jsx)(
                                                          e6.Z,
                                                          tl(
                                                              {
                                                                  ref: T,
                                                                  plated: null != v,
                                                                  tooltipForceOpen: en,
                                                                  tooltipColor: en ? g.r6K.GREEN : void 0,
                                                                  tooltipContentClassName: en
                                                                      ? ti.voiceFilterWarning
                                                                      : void 0,
                                                                  tooltipText: en
                                                                      ? (0, a.jsxs)(a.Fragment, {
                                                                            children: [
                                                                                (0, a.jsx)("img", {
                                                                                    alt:
                                                                                        null != Z
                                                                                            ? ta.intl.string(Z.name)
                                                                                            : "",
                                                                                    src: null == Z ? void 0 : Z.iconURL,
                                                                                    draggable: !1,
                                                                                }),
                                                                                (0, a.jsx)(g.Text, {
                                                                                    variant: "text-sm/medium",
                                                                                    color: "always-white",
                                                                                    children: ta.intl.string(
                                                                                        ta.t.VlC1de,
                                                                                    ),
                                                                                }),
                                                                            ],
                                                                        })
                                                                      : ta.intl.string(ta.t.Hapb4J),
                                                                  icon: (0, a.jsx)(l, {
                                                                      className: ti.buttonChevronIcon,
                                                                      size: "custom",
                                                                      width: 12,
                                                                      height: 12,
                                                                      color: er,
                                                                  }),
                                                                  role: "button",
                                                                  className: ti.buttonChevron,
                                                                  orangeGlow: R,
                                                                  redGlow: S,
                                                                  "aria-label": ta.intl.string(ta.t.Hapb4J),
                                                                  disabled: o,
                                                                  onClick: (e) => {
                                                                      r(te.L.INDIRECT_ACTION),
                                                                          n(e),
                                                                          null != w && !Q && k
                                                                              ? (0, ew.$)(() => $(!0))
                                                                              : $(!Q);
                                                                  },
                                                              },
                                                              i,
                                                          ),
                                                      );
                                                  return null != s
                                                      ? (0, a.jsx)(g.yRy, {
                                                            targetElementRef: T,
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
function tv(e) {
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
        { name: _ } = (0, et.p6)(tn.h7.AUDIO_OUTPUT),
        { showRefreshedAudioContextMenu: y } = (0, e3.e)({ location: "HeadphonesButton" }),
        C = (0, Z.Z)(t, n, r),
        { analyticsLocations: S } = (0, N.ZP)(O.Z.AUDIO_OUTPUT_BUTTON),
        E = i.useRef(null);
    i.useEffect(() => () => f(), [h, f]);
    let T = i.useCallback(
        (e) => {
            o(e, S);
        },
        [o, S],
    );
    return y
        ? (0, a.jsx)(N.Gt, {
              value: S,
              children: (0, a.jsx)(g.yRy, {
                  targetElementRef: E,
                  renderPopout: (e) => {
                      let { closePopout: t } = e;
                      return (
                          m(),
                          (0, a.jsx)(N.Gt, {
                              value: S,
                              children: (0, a.jsx)(M.Z, {
                                  onInteraction: (0, G.u)("AudioDeviceMenu", O.Z.ACCOUNT),
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
                      let { onClick: i } = e,
                          { isShown: o } = t,
                          m = o ? g.u04 : g.CJ0;
                      return (0, a.jsxs)("div", {
                          ref: E,
                          className: l()(ti.micButtonParent, {
                              [ti.hasColorGlow]: h,
                              [ti.popoutOpen]: o,
                          }),
                          children: [
                              (0, a.jsx)(e6.Z, {
                                  "aria-checked": h,
                                  "aria-label": ta.intl.string(ta.t.wjcRFX),
                                  className: ti.micButtonWithMenu,
                                  disabled: r,
                                  icon: (0, a.jsx)(j, {
                                      size: "custom",
                                      width: 20,
                                      height: 20,
                                      color: h ? g.TVs.colors.STATUS_DANGER : "currentColor",
                                      className: c,
                                  }),
                                  iconForeground: h ? ti.strikethrough : void 0,
                                  innerClassName: l()({ [ti.redIcon]: n }),
                                  onClick: s,
                                  onContextMenu: i,
                                  onMouseEnter: b,
                                  onMouseLeave: v,
                                  plated: null != d,
                                  redGlow: h,
                                  role: "switch",
                                  tooltipText: C,
                              }),
                              (0, a.jsx)(e6.Z, {
                                  "aria-label": u
                                      ? ta.intl.formatToPlainString(ta.t["f+DDY/"], { outputDeviceName: _ })
                                      : ta.intl.string(ta.t.aA4Vce),
                                  className: l()(ti.buttonChevron, { [ti.popoutOpen]: o }),
                                  disabled: r,
                                  icon: (0, a.jsx)(m, {
                                      className: ti.buttonChevronIcon,
                                      size: "custom",
                                      width: 12,
                                      height: 12,
                                      color: h ? g.TVs.colors.STATUS_DANGER : "currentColor",
                                  }),
                                  onClick: i,
                                  onContextMenu: i,
                                  plated: null != d,
                                  redGlow: h,
                                  tooltipClassName: ti.accountButtonsTooltip,
                                  tooltipColor: u ? g.r6K.GREEN : void 0,
                                  tooltipContentClassName: ti.accountButtonsTooltipContent,
                                  tooltipForceOpen: u,
                                  tooltipPositionKeyStemOverride: u
                                      ? ta.intl.formatToPlainString(ta.t["f+DDY/"], { outputDeviceName: _ })
                                      : void 0,
                                  tooltipShouldShow: !o,
                                  tooltipText: u
                                      ? ta.intl.format(ta.t["f+DDY/"], { outputDeviceName: _ })
                                      : ta.intl.string(ta.t.aA4Vce),
                              }),
                          ],
                      });
                  },
              }),
          })
        : (0, a.jsx)(N.Gt, {
              value: S,
              children: (0, a.jsx)(e6.Z, {
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
                  onContextMenu: T,
                  innerClassName: l()({ [ti.redIcon]: n }),
                  iconForeground: h ? ti.strikethrough : void 0,
                  role: "switch",
                  redGlow: h,
                  "aria-label": ta.intl.string(ta.t.wjcRFX),
                  "aria-checked": h,
                  disabled: r,
              }),
          });
}
