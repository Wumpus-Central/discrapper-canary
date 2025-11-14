n.d(t, {
    Z: () => tf,
    m: () => th,
}),
    n(388685),
    n(539854);
var a = n(951288),
    r = n(647438),
    i = n(120356),
    l = n.n(i),
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
    er = n(379839),
    ei = n(359135),
    el = n(516817),
    es = n(332473),
    eo = n(963590),
    ec = n(494424),
    ed = n(562705),
    eu = n(667105),
    em = n(768419),
    ep = n(172416),
    eh = n(184301),
    ex = n(456077),
    eg = n(620799),
    ef = n(313789),
    eb = n(846071),
    ev = n(518596),
    ej = n(879815),
    e_ = n(294629),
    ey = n(875527),
    eC = n(702977),
    eS = n(56848),
    eE = n(940315),
    eT = n(378441),
    eO = n(358820),
    eN = n(723547),
    eP = n(361045),
    eI = n(74650),
    ew = n(306609),
    ek = n(170293),
    eR = n(8404),
    eA = n(199902),
    eZ = n(314897),
    eD = n(592125),
    eL = n(831506),
    eM = n(819640),
    eU = n(131951),
    eF = n(19780),
    eB = n(914010),
    eG = n(885110),
    ez = n(606304),
    eV = n(246946),
    eH = n(594174),
    eW = n(78839),
    eK = n(626135),
    eq = n(768581),
    eY = n(572004),
    eJ = n(459273),
    eX = n(585483),
    eQ = n(70956),
    e$ = n(823379),
    e0 = n(5192),
    e1 = n(374023),
    e8 = n(51144),
    e4 = n(998502),
    e3 = n(660230),
    e2 = n(853170),
    e6 = n(422202),
    e5 = n(870569),
    e7 = n(345243),
    e9 = n(115530),
    te = n(981631),
    tt = n(921944),
    tn = n(46140),
    ta = n(65154),
    tr = n(388032),
    ti = n(25874);
function tl(e, t, n) {
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
            a = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            a.forEach(function (t) {
                tl(e, t, n[t]);
            });
    }
    return e;
}
function to(e, t) {
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
let tc = e4.ZP.getEnableHardwareAcceleration() ? g.Xo$ : g.qEK,
    td = 2 * eQ.Z.Millis.MINUTE,
    tu = 3 * eQ.Z.Millis.SECOND,
    tm = 5 * eQ.Z.Millis.SECOND;
function tp(e) {
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
            avatarDecoration: f,
            "data-jump-section": v,
        } = e,
        j = r.useRef(null),
        y = null != t ? t : j,
        C = (0, eq.NZ)({
            avatarDecoration: f,
            size: (0, w.y9)(g.EFr.SIZE_32),
        }),
        S = (0, K.Z)(),
        {
            updateOpenPopoutRef: E,
            highlightBadge: T,
            setHighlightBadge: O,
        } = (function () {
            let e = r.useRef(null),
                t = r.useCallback((t) => {
                    e.current = () => {
                        t.onMouseDown(), t.onClick();
                    };
                }, []),
                [n, a] = r.useState(),
                [i, l] = r.useState(!1);
            return (
                (0, _.Z)(() => l(!0), 750),
                r.useEffect(() => {
                    let t = (t) => {
                        var n;
                        let { highlightBadge: r } = t;
                        null != r && a(r), null == (n = e.current) || n.call(e);
                    };
                    return (
                        eX.S.subscribe(te.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, t),
                        () => {
                            eX.S.unsubscribe(te.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, t);
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
        N = (0, er.A)(p);
    if (null == o) return null;
    let P = x && h !== te.I_8 && h !== te.ME && null != h ? h : void 0;
    return (0, a.jsx)(b.Z, {
        object: te.qAy.AVATAR,
        children: (0, a.jsx)(ex.Z, {
            user: o,
            targetElementRef: y,
            clickTrap: !0,
            preload: () =>
                (0, eh.Z)(o.id, o.getAvatarURL(P, ex.I), {
                    type: "account_popout",
                    withMutualGuilds: !1,
                    withMutualFriends: !1,
                    guildId: P,
                }),
            renderPopout: (e, t) => {
                let { closePopout: n, setPopoutRef: r } = e;
                return (0, a.jsx)(en.Z, {
                    currentUser: o,
                    highlightBadge: T,
                    openedAt: t,
                    onClose: () => {
                        null == n || n();
                    },
                    setPopoutRef: r,
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
                    to(
                        ts(
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
                            "aria-label": tr.intl.string(tr.t["3Uj+2p"]),
                            "data-jump-section": v,
                            className: l()(ti.avatarWrapper, { [ti.plated]: null != p }),
                            children: [
                                (0, a.jsx)(tc, {
                                    size: g.EFr["SIZE_".concat(32)],
                                    src: o.getAvatarURL(x ? h : void 0, 28, !1),
                                    avatarDecoration: C,
                                    "aria-label": o.username,
                                    status: s ? te.Skl.STREAMING : c,
                                    isSpeaking: n,
                                    isLatched: i,
                                    className: ti.avatar,
                                }),
                                (0, a.jsx)("div", {
                                    className: l()(ti.nameTag, { [ti.canCopy]: eY.wS }),
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
class th extends r.PureComponent {
    get isCopiedStreakGodlike() {
        let { copiedStreak: e } = this.state;
        return e >= 10;
    }
    componentDidUpdate(e) {
        let { speakingWhileMuted: t, occluded: n } = e,
            { speakingWhileMuted: a, occluded: r } = this.props;
        r !== n && this.handleOccludedChanged(), a !== t && this.handleSpeakingWhileMutedChanged();
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
                currentUser: r,
                status: i,
                userTag: l,
                voiceActivityStatusEnabled: s,
                voiceChannel: o,
            } = this.props;
        if (null == r) return null;
        if (
            (0, C.Z)({
                activities: t,
                status: i,
                applicationStream: n,
                voiceChannel: s ? o : void 0,
            })
        )
            return (0, a.jsx)(T.Z, {
                hoverText: l,
                forceHover: e,
                children: (0, a.jsx)(S.Z, {
                    location: "Account",
                    user: r,
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
                      return t === te.IIU.CUSTOM_STATUS;
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
            : null != i && i !== te.Skl.UNKNOWN && r.hasUniqueUsername()
              ? (0, a.jsx)(T.Z, {
                    hoverText: l,
                    forceHover: e,
                    children: (0, a.jsx)(E.Z, { text: e8.ZP.humanizeStatus(i) }),
                })
              : l;
    }
    renderAvatarWithPopout(e) {
        let {
            focusSectionProps: { "data-jump-section": t },
            onClick: n,
        } = e;
        return (0, a.jsx)(
            tp,
            to(ts({}, this.props), {
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
            markRecurringAvatarDcAsDismissed: i,
            visibleRecurringDoNotDisturbReminderPopoverDc: l,
            markRecurringDoNotDisturbReminderPopoverDcAsDismissed: s,
            isQuestBarEmpty: o,
            hasLoadedQuestBar: c,
        } = this.props;
        if (null == t) return null;
        if (!(null != this.avatarWithPopoutRef.current && o && c))
            return this.renderAvatarWithPopout({ focusSectionProps: e });
        if (r === u.z.GUILD_TAG_AVAILABLE_COACHMARK) {
            var d;
            return (0, a.jsx)(Q.ZP, {
                guildId: null != (d = this.props.selectedGuildId) ? d : null,
                onDismiss: i,
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
                      (0, a.jsx)(ed.Z, {
                          groupName: tt.R.ACCOUNT_NAME_ZONE,
                          targetElementRef: this.avatarWithPopoutRef,
                      }),
                      (0, a.jsx)(H.ZP, {
                          contentTypes: n.avatar,
                          groupName: tt.R.ACCOUNT_NAME_ZONE,
                          children: (t) => {
                              let { visibleContent: n, markAsDismissed: r } = t;
                              switch (n) {
                                  case u.z.WIDGETS_RTC_UPSELL_COACHMARK:
                                      return (0, a.jsx)(eg.Z, {
                                          markAsDismissed: r,
                                          targetElementRef: this.avatarWithPopoutRef,
                                          children: this.renderAvatarWithPopout({ focusSectionProps: e }),
                                      });
                                  case u.z.DISPLAY_NAME_STYLES_COACHMARK:
                                      return (0, a.jsx)(Y.e, {
                                          markAsDismissed: r,
                                          targetElementRef: this.avatarWithPopoutRef,
                                          children: this.renderAvatarWithPopout({ focusSectionProps: e }),
                                      });
                                  case u.z.TENURE_BADGE_CHURN_REMINDER:
                                      return (0, a.jsx)(ec.Z, {
                                          markAsDismissed: r,
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
        let { currentUser: e, nameplate: t, voiceChannel: n, isQuestBarEmpty: r, isListenAlongVisible: i } = this.props,
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
                                      [ti.containerQuestBarVisible]: !r,
                                      [ti.containerListenAlongVisible]: i,
                                  }),
                                  onMouseEnter: this.handleMouseEnter,
                                  onMouseLeave: this.handleMouseLeave,
                                  children: [
                                      (0, a.jsx)(el.Z, {
                                          nameplate: t,
                                          hovered: s,
                                          placement: ei.i.ACCOUNT,
                                      }),
                                      this.renderNameZone(e),
                                      (0, a.jsx)(
                                          tx,
                                          to(ts({}, this.props, this.state), {
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
            tl(this, "copiedTimeout", new m.V7()),
            tl(this, "copiedDecayTimeout", new m.V7()),
            tl(this, "speakingWhileMutedTooltipTimeout", new m.V7()),
            tl(this, "lastSpeakingWhileMutedNotificationTime", void 0),
            tl(this, "state", {
                hovered: !1,
                copiedStreak: 0,
                shouldShowNametagTooltip: !1,
                shouldShowCopiedFeedback: !1,
                shouldShowSpeakingWhileMutedTooltip: !1,
                hoveringOnMute: !1,
            }),
            tl(this, "containerRef", r.createRef()),
            tl(this, "avatarWithPopoutRef", r.createRef()),
            tl(this, "handleToggleSelfMute", () => {
                let { serverMute: e, suppress: t, selfMute: n } = this.props;
                (0, F.Z)(e, t, te.jXE.ACCOUNT_PANEL), (0, B.v)(O.Z.ACCOUNT, B.d.MIC, n);
            }),
            tl(this, "handleToggleSelfDeaf", () => {
                let { serverDeaf: e, selfDeaf: t } = this.props;
                (0, U.Z)(e, te.jXE.ACCOUNT_PANEL), (0, B.v)(O.Z.ACCOUNT, B.d.DEAFEN, !t);
            }),
            tl(this, "handleOpenAccountSettings", () => {
                this.dismissTooltips(),
                    eF.Z.isConnected()
                        ? (0, ev.openUserSettings)(ef.n.VOICE_AND_VIDEO_PANEL, { section: te.oAB.VOICE })
                        : (0, ev.openUserSettings)();
            }),
            tl(this, "handleOpenSettingsContextMenu", (e) => {
                let { currentUser: t } = this.props;
                null != t &&
                    (0, f.jW)(e, async () => {
                        let { default: e } = await n.e("2535").then(n.bind(n, 923422));
                        return (n) =>
                            (0, a.jsx)(
                                e,
                                to(ts({}, n), {
                                    user: t,
                                    premiumSubscription: this.props.premiumSubscription,
                                    webBuildOverride: this.props.webBuildOverride,
                                    onInteraction: (0, G.u)("UserSettingsCogContextMenu", O.Z.ACCOUNT),
                                }),
                            );
                    });
            }),
            tl(this, "audioOnInteractionHandler", (0, G.u)("AudioDeviceMenu", O.Z.ACCOUNT)),
            tl(this, "handleInputAudioContextMenu", (e, t) => {
                this.dismissTooltips(),
                    (0, f.jW)(e, async () => {
                        let { default: e } = await Promise.resolve().then(n.bind(n, 659580));
                        return () => {
                            let { enabledInputProfiles: n } = (0, eb.G)({ location: "Account" });
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
            tl(this, "handleOutputAudioContextMenu", (e, t) => {
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
            tl(this, "handleMouseEnter", () => {
                this.setState({ hovered: !0 });
            }),
            tl(this, "handleMouseLeave", () => {
                this.setState({ hovered: !1 });
            }),
            tl(this, "handleMouseEnterMute", () => {
                this.setState({
                    hoveringOnMute: !0,
                    shouldShowSpeakingWhileMutedTooltip: !1,
                }),
                    this.speakingWhileMutedTooltipTimeout.stop();
            }),
            tl(this, "handleMouseLeaveMute", () => {
                this.setState({ hoveringOnMute: !1 });
            }),
            tl(this, "dismissSpeakingWhileMutedTooltip", () => {
                this.setState({ shouldShowSpeakingWhileMutedTooltip: !1 }),
                    this.speakingWhileMutedTooltipTimeout.stop();
            }),
            tl(this, "dismissTooltips", () => {
                var e, t, n, a;
                null == (e = (t = this.props).dismissInputDeviceChangedTooltip) || e.call(t),
                    null == (n = (a = this.props).dismissOutputDeviceChangedTooltip) || n.call(a),
                    this.dismissSpeakingWhileMutedTooltip();
            }),
            tl(this, "handleCopyTag", () => {
                let { currentUser: e } = this.props,
                    { shouldShowNametagTooltip: t, copiedStreak: n } = this.state;
                if (null == e) return;
                (0, eY.JG)(
                    e8.ZP.getUserTag(e, {
                        decoration: "never",
                        identifiable: "always",
                    }),
                ),
                    eK.default.track(te.rMx.TEXT_COPIED, { type: "User Tag" });
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
            tl(this, "handleOccludedChanged", () => {
                let { occluded: e } = this.props;
                e &&
                    this.setState({
                        shouldShowNametagTooltip: !1,
                        shouldShowSpeakingWhileMutedTooltip: !1,
                    });
            }),
            tl(this, "handleSpeakingWhileMutedChanged", () => {
                let {
                        selfMute: e,
                        serverMute: t,
                        suppress: n,
                        speakingWhileMuted: a,
                        occluded: r,
                        shouldShowInputDeviceChangedTooltip: i,
                        shouldShowOutputDeviceChangedTooltip: l,
                    } = this.props,
                    { hoveringOnMute: s } = this.state,
                    o =
                        void 0 === this.lastSpeakingWhileMutedNotificationTime ||
                        Date.now() - this.lastSpeakingWhileMutedNotificationTime > td;
                a
                    ? s ||
                      !e ||
                      t ||
                      n ||
                      r ||
                      !o ||
                      i ||
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
            tl(this, "renderNameTag", (e) => {
                let { currentUser: t, username: n } = this.props;
                return null == t
                    ? null
                    : (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)("div", {
                                  className: ti.panelTitleContainer,
                                  children: (0, a.jsx)(e9.Z, {
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
                                  children: (0, a.jsx)(e7.Z, { children: this.renderStatus() }),
                              }),
                          ],
                      });
            });
    }
}
function tx(e) {
    let {
            selfDeaf: t,
            selfMute: n,
            awaitingRemote: r,
            serverMute: i,
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
        E = (0, er.A)(j);
    return (0, a.jsxs)("div", {
        className: ti.buttons,
        style: E,
        children: [
            (0, a.jsx)(tv, {
                accountContainerRef: _,
                selfMute: n,
                serverMute: i,
                suppress: s,
                awaitingRemote: r,
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
            (0, a.jsx)(tj, {
                selfDeaf: t,
                serverDeaf: l,
                onClick: p,
                onContextMenu: g,
                awaitingRemote: r,
                iconForeground: null != j ? ti.iconForeground : void 0,
                nameplate: j,
                shouldShowOutputDeviceChangedTooltip: C,
                dismissTooltips: S,
            }),
            (0, a.jsx)(tb, {
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
function tg(e) {
    let { shouldShowDeviceChangedNotifications: t } = (0, e6.P)({
            location: "Account.useDeviceChangedTooltip",
            autoTrackExposure: !1,
        }),
        n = (0, d.e7)([eF.Z], () => null != eF.Z.getChannelId()),
        a = (0, et.Fh)(e),
        i = r.useRef(new m.V7()),
        [l, s] = r.useState(!1);
    r.useEffect(() => {
        n &&
            a &&
            ((0, e6._)({
                location: "Account.useDeviceChangedTooltip (exposure tracking)",
                autoTrackExposure: !0,
            }),
            t &&
                (s(!0),
                i.current.start(tm, () => {
                    s(!1);
                })));
    }, [n, a, t]);
    let o = r.useCallback(() => {
        s(!1), i.current.stop();
    }, []);
    return (
        (0, j.zq)(() => {
            i.current.stop();
        }),
        {
            shouldShowTooltip: l,
            dismissTooltip: o,
        }
    );
}
function tf() {
    var e;
    let t = (0, d.e7)([eH.default], () => eH.default.getCurrentUser()),
        n = (0, d.e7)([eZ.default], () => eZ.default.getId()),
        r = e3.K.useConfig({ location: "AccountConnected" }).transitionAccountPanel,
        {
            activities: i,
            streaming: l,
            status: s,
        } = (0, d.cj)([eG.Z], () => {
            let e = eG.Z.getActivities();
            return {
                activities: e,
                streaming:
                    null !=
                    e.find((e) => {
                        let { type: t } = e;
                        return t === te.IIU.STREAMING;
                    }),
                status: eG.Z.getStatus(),
            };
        }),
        c = (0, d.e7)([eA.Z], () => eA.Z.getAnyStreamForUser(n)),
        m = (0, v.Z)({ userId: n }),
        p = (0, d.e7)([ez.Z], () => ez.Z.isCurrentUserPTTLatched()),
        h = e8.ZP.useUserTag(t, { decoration: "never" }),
        x = (0, d.e7)([eV.Z], () => eV.Z.hidePersonalInformation),
        f = (0, d.e7)([eF.Z, eD.Z], () => {
            let e = eF.Z.getChannelId();
            return null != e ? eD.Z.getChannel(e) : null;
        }),
        { mute: b, selfMute: j, suppress: _ } = (0, e_.Z)(f),
        { selfDeaf: C, deaf: S } = (0, ej.Z)(f),
        E = (0, d.e7)([k.C], () => {
            var e;
            return (0, R.fD)()
                ? null == (e = k.C.getCurrentBuildOverride().overrides)
                    ? void 0
                    : e.discord_web
                : null;
        }),
        T = (0, d.e7)([eW.Z], () => eW.Z.getPremiumTypeSubscription()),
        w = (0, d.e7)([eU.Z], () => eU.Z.getSpeakingWhileMuted()),
        Z = (0, d.e7)([A.Z], () => A.Z.isFullscreenInContext()),
        D = (0, d.e7)([eM.Z], () => eM.Z.hasLayers()),
        L = (0, g.s9z)(g.JQI) || D || e1.s.isDisallowPopupsSet() || Z,
        M = (0, es.b)(),
        U = (0, d.e7)([X.default], () => null != X.default.getAwaitingRemoteSessionInfo()),
        F = (0, d.e7)([eB.Z], () => eB.Z.getGuildId()),
        B = null == t ? void 0 : t.avatarDecoration,
        G = (0, P.R)(t, null != F ? F : void 0),
        z = (0, I.Z)(r ? G : B),
        H = e0.ZP.useName(null != F ? F : void 0, null, t),
        K = null != (e = e8.ZP.useName(t)) ? e : "",
        { voiceActivityStatusEnabled: q } = (0, y.U)({ location: "Account" }),
        [Y, J] = (0, $.G)(null != F ? F : null),
        [Q, ee] = (0, V.b)(),
        et = W.JH.useExperiment({ location: "Account" }).enabled,
        en = (0, ec.c)(t, "Account"),
        { analyticsLocations: er } = (0, N.ZP)(O.Z.ACCOUNT),
        ei = (0, ea.K)({
            user: t,
            guildId: r && null != F ? F : void 0,
        }),
        { isQuestBarEmpty: el, hasLoadedQuestBar: eo } = (0, eu.Ws)({ location: tn.dr.CONFLICT_CHECKS }),
        ed = (0, d.e7)([em.Z, eH.default, eL.Z], () => {
            let e,
                t = em.Z.getSyncingWith(),
                n = em.Z.getActivity(),
                a = [];
            if (
                (null != t ? (e = t.partyId) : null != n && null != n.party && null != n.party.id && (e = n.party.id),
                null != e)
            ) {
                var r;
                a = o()(Array.from(null != (r = eL.Z.getParty(e)) ? r : []))
                    .map((e) => eH.default.getUser(e))
                    .filter(e$.lm)
                    .value();
            }
            return a.length > 1;
        }),
        eh = (0, ep.Un)({ location: "AccountConnected" }),
        ex = {
            avatar: [],
            settings: [],
        };
    !L &&
        (et && ex.avatar.push(u.z.DISPLAY_NAME_STYLES_COACHMARK),
        en && ex.avatar.push(u.z.TENURE_BADGE_CHURN_REMINDER),
        eh && ex.avatar.push(u.z.WIDGETS_RTC_UPSELL_COACHMARK));
    let { shouldShowTooltip: eg, dismissTooltip: ef } = tg(ta.h7.AUDIO_INPUT),
        { shouldShowTooltip: eb, dismissTooltip: ev } = tg(ta.h7.AUDIO_OUTPUT);
    return (0, a.jsx)(N.Gt, {
        value: er,
        children: (0, a.jsx)(th, {
            currentUser: t,
            username: r ? H : K,
            transitionAccountPanel: r,
            activities: i,
            applicationStream: c,
            voiceChannel: f,
            dismissibleContents: ex,
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
            isQuestBarEmpty: el,
            hasLoadedQuestBar: eo,
            isListenAlongVisible: ed,
            shouldShowInputDeviceChangedTooltip: eg,
            shouldShowOutputDeviceChangedTooltip: eb,
            dismissInputDeviceChangedTooltip: ef,
            dismissOutputDeviceChangedTooltip: ev,
        }),
    });
}
function tb(e) {
    let t,
        n,
        i,
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
        x = r.useRef(null),
        { showRefreshedAudioContextMenu: f } = (0, e2.e)({ location: "SettingsCogButton" }),
        b = !f && (m || p),
        { name: v } = (0, et.p6)(ta.h7.AUDIO_INPUT),
        { name: j } = (0, et.p6)(ta.h7.AUDIO_OUTPUT);
    !f && m
        ? ((t = tr.intl.format(tr.t["18wnuD"], { inputDeviceName: v })),
          (n = tr.intl.formatToPlainString(tr.t["18wnuD"], { inputDeviceName: v })),
          (i = tr.intl.formatToPlainString(tr.t["18wnuD"], { inputDeviceName: v })))
        : !f && p
          ? ((t = tr.intl.format(tr.t["f+DDY/"], { outputDeviceName: j })),
            (n = tr.intl.formatToPlainString(tr.t["f+DDY/"], { outputDeviceName: j })),
            (i = tr.intl.formatToPlainString(tr.t["f+DDY/"], { outputDeviceName: j })))
          : (t =
                null != l
                    ? tr.intl.formatToPlainString(tr.t.Gzh6ZP, { webBuildOverride: l.id })
                    : tr.intl.string(tr.t.cduTBL));
    let _ = g.ewm,
        y = (0, h.i)();
    return (
        (_ = null != l ? g.bgT : s ? g.Ncx : y.Component),
        (0, a.jsx)(
            e5.Z,
            to(
                ts(
                    {
                        ref: x,
                        tooltipText: t,
                        tooltipColor: b ? g.r6K.GREEN : void 0,
                        tooltipForceOpen: b,
                        tooltipClassName: ti.accountButtonsTooltip,
                        tooltipContentClassName: ti.accountButtonsTooltipContent,
                        tooltipPositionKeyStemOverride: n,
                        "aria-label": b ? i : void 0,
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
function tv(e) {
    let t,
        {
            selfMute: n,
            serverMute: i,
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
        S = n || s || i,
        E = r.useRef(null),
        T = r.useRef(null),
        P = (0, eR.b)(S),
        { activeVoice: I, mostRecentlyRequestedVoiceId: w, lastInitAttemptMayHaveCrashed: k } = (0, eT.o)(),
        { showSilentLagWarning: R } = (0, eE.Y)(),
        A = null != I,
        Z = (0, eS.z)(I),
        U = (0, d.e7)([eF.Z], () => eF.Z.isConnected()),
        { Component: F, events: B, play: z } = P,
        V = i || s ? g.v0G : F,
        W = (0, D.Z)(n, i, s, o),
        K = R ? tr.intl.string(tr.t.ARRV6m) : null;
    t = _
        ? tr.intl.string(tr.t["29gnR4"])
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
        Y = (0, ey.Hu)({
            location: O.Z.AUDIO_INPUT_BUTTON,
            autoTrackExposure: !0,
        }),
        J = (0, eC.av)({
            location: O.Z.AUDIO_INPUT_BUTTON,
            autoTrackExposure: !0,
        });
    r.useEffect(() => () => z(), [S, z]);
    let X = r.useCallback(
            (e) => {
                b(e, q);
            },
            [b, q],
        ),
        [Q, $] = r.useState(!1),
        ee = r.useCallback((e) => {
            var t;
            if (
                (0, c.kK)(null == e ? void 0 : e.target, Node) &&
                (null == (t = E.current) ? void 0 : t.contains(e.target))
            )
                return x.F;
            $(!1);
        }, []);
    (0, eJ.yp)({
        event: te.CkL.OPEN_VOICE_FILTER_POPOUT,
        handler: () => {
            $(!0);
        },
    });
    let [en, ea] = r.useState(!1);
    r.useEffect(() => {
        let e;
        return (
            U &&
                A &&
                (e = setTimeout(() => {
                    ea(!0), (e = setTimeout(() => ea(!1), tu));
                }, 300)),
            () => {
                ea(!1), clearTimeout(e);
            }
        );
    }, [U]);
    let er = r.useCallback(() => {
            k || (0, eO.r5)();
        }, [k]),
        ei = S ? g.TVs.colors.STATUS_DANGER : R ? g.TVs.colors.STATUS_WARNING : "currentColor",
        el = S || R,
        es = (0, eo.Z)({ location: "Account" }),
        { name: ec } = (0, et.p6)(ta.h7.AUDIO_INPUT),
        { showRefreshedAudioContextMenu: ed } = (0, e2.e)({ location: "MicrophoneButton" }),
        { enabledInputProfiles: eu } = (0, eb.G)({ location: "MicrophoneButton" });
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
                      let { onClick: r } = e,
                          { isShown: i } = n,
                          s = i ? g.u04 : g.CJ0;
                      return (0, a.jsxs)("div", {
                          ref: E,
                          className: l()(ti.micButtonParent, {
                              [ti.hasColorGlow]: el,
                              [ti.popoutOpen]: i,
                          }),
                          children: [
                              (0, a.jsx)(e5.Z, {
                                  "aria-checked": S,
                                  "aria-label": tr.intl.string(tr.t.w4m945),
                                  className: l()({ [ti.micButtonWithMenu]: !0 }),
                                  disabled: o,
                                  icon: (0, a.jsx)(V, {
                                      size: "custom",
                                      width: 20,
                                      height: 20,
                                      color: ei,
                                      className: m,
                                  }),
                                  onClick: f,
                                  onContextMenu: r,
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
                              (0, a.jsx)(e5.Z, {
                                  "aria-label": y
                                      ? tr.intl.formatToPlainString(tr.t["18wnuD"], { inputDeviceName: ec })
                                      : tr.intl.string(tr.t.fRzCbB),
                                  className: l()(ti.buttonChevron, { [ti.popoutOpen]: i }),
                                  disabled: o,
                                  icon: (0, a.jsx)(s, {
                                      className: ti.buttonChevronIcon,
                                      size: "custom",
                                      width: 12,
                                      height: 12,
                                      color: ei,
                                  }),
                                  onClick: r,
                                  onContextMenu: r,
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
        : (0, a.jsx)(N.Gt, {
              value: q,
              children: (0, a.jsxs)("div", {
                  ref: E,
                  className: l()(ti.micButtonParent, { [ti.hasColorGlow]: el }),
                  children: [
                      (0, a.jsx)(e5.Z, {
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
                              color: ei,
                              className: m,
                          }),
                          onClick: f,
                          onContextMenu: X,
                          role: "switch",
                          className: l()({ [ti.micButtonWithMenu]: Y }),
                          orangeGlow: R,
                          redGlow: S,
                          "aria-label": tr.intl.string(tr.t.w4m945),
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
                              onRequestOpen: er,
                              onRequestClose: ee,
                              shouldShow: Q,
                              renderPopout: (e) => {
                                  let { closePopout: t } = e;
                                  return (0, a.jsx)(ew.l, { onSettingsButtonClick: t });
                              },
                              children: (e, t) => {
                                  var { onClick: n } = e,
                                      r = (function (e, t) {
                                          if (null == e) return {};
                                          var n,
                                              a,
                                              r = (function (e, t) {
                                                  if (null == e) return {};
                                                  var n,
                                                      a,
                                                      r = {},
                                                      i = Object.keys(e);
                                                  for (a = 0; a < i.length; a++)
                                                      (n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                                  return r;
                                              })(e, t);
                                          if (Object.getOwnPropertySymbols) {
                                              var i = Object.getOwnPropertySymbols(e);
                                              for (a = 0; a < i.length; a++)
                                                  (n = i[a]),
                                                      !(t.indexOf(n) >= 0) &&
                                                          Object.prototype.propertyIsEnumerable.call(e, n) &&
                                                          (r[n] = e[n]);
                                          }
                                          return r;
                                      })(e, ["onClick"]),
                                      { isShown: i } = t;
                                  let l = i ? g.u04 : g.CJ0,
                                      s = [];
                                  return (
                                      !i &&
                                          (es && s.push(u.z.VOICE_FILTER_EARLY_ACCESS_COACHMARK),
                                          s.push(u.z.VOICE_FILTER_LAUNCH_COACHMARK),
                                          J && U && !A && s.push(u.z.VOICE_FILTER_FIRST_USE_COACHMARK)),
                                      (0, a.jsx)("div", {
                                          children: (0, a.jsx)(H.ZP, {
                                              bypassAutoDismiss: !0,
                                              contentTypes: s,
                                              children: (e) => {
                                                  let { visibleContent: t, markAsDismissed: i } = e,
                                                      s = null;
                                                  t === u.z.VOICE_FILTER_EARLY_ACCESS_COACHMARK
                                                      ? (s = (0, a.jsx)(eI.U, {
                                                            markAsDismissed: i,
                                                            onCTA: () => $(!0),
                                                        }))
                                                      : t === u.z.VOICE_FILTER_LAUNCH_COACHMARK
                                                        ? (s = (0, a.jsx)(eP.n, {
                                                              markAsDismissed: i,
                                                              onCTA: () => $(!0),
                                                          }))
                                                        : t === u.z.VOICE_FILTER_FIRST_USE_COACHMARK &&
                                                          (s = (0, a.jsx)(eN.v, {
                                                              markAsDismissed: i,
                                                              onCTA: () => $(!0),
                                                          }));
                                                  let c = () =>
                                                      (0, a.jsx)(
                                                          e5.Z,
                                                          ts(
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
                                                                                            ? tr.intl.string(Z.name)
                                                                                            : "",
                                                                                    src: null == Z ? void 0 : Z.iconURL,
                                                                                    draggable: !1,
                                                                                }),
                                                                                (0, a.jsx)(g.Text, {
                                                                                    variant: "text-sm/medium",
                                                                                    color: "always-white",
                                                                                    children: tr.intl.string(
                                                                                        tr.t.VlC1de,
                                                                                    ),
                                                                                }),
                                                                            ],
                                                                        })
                                                                      : tr.intl.string(tr.t.Hapb4J),
                                                                  icon: (0, a.jsx)(l, {
                                                                      className: ti.buttonChevronIcon,
                                                                      size: "custom",
                                                                      width: 12,
                                                                      height: 12,
                                                                      color: ei,
                                                                  }),
                                                                  role: "button",
                                                                  className: ti.buttonChevron,
                                                                  orangeGlow: R,
                                                                  redGlow: S,
                                                                  "aria-label": tr.intl.string(tr.t.Hapb4J),
                                                                  disabled: o,
                                                                  onClick: (e) => {
                                                                      i(tt.L.INDIRECT_ACTION),
                                                                          n(e),
                                                                          null != w && !Q && k
                                                                              ? (0, ek.$)(() => $(!0))
                                                                              : $(!Q);
                                                                  },
                                                              },
                                                              r,
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
function tj(e) {
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
            play: f,
            events: { onMouseEnter: b, onMouseLeave: v },
        } = (0, p.l)(h ? "undeafen" : "deafen"),
        j = n ? g.Vm4 : x,
        { name: _ } = (0, et.p6)(ta.h7.AUDIO_OUTPUT),
        { showRefreshedAudioContextMenu: y } = (0, e2.e)({ location: "HeadphonesButton" }),
        C = (0, Z.Z)(t, n, i),
        { analyticsLocations: S } = (0, N.ZP)(O.Z.AUDIO_OUTPUT_BUTTON),
        E = r.useRef(null);
    r.useEffect(() => () => f(), [h, f]);
    let T = r.useCallback(
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
                      let { onClick: r } = e,
                          { isShown: o } = t,
                          m = o ? g.u04 : g.CJ0;
                      return (0, a.jsxs)("div", {
                          ref: E,
                          className: l()(ti.micButtonParent, {
                              [ti.hasColorGlow]: h,
                              [ti.popoutOpen]: o,
                          }),
                          children: [
                              (0, a.jsx)(e5.Z, {
                                  "aria-checked": h,
                                  "aria-label": tr.intl.string(tr.t.wjcRFX),
                                  className: ti.micButtonWithMenu,
                                  disabled: i,
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
                                  onContextMenu: r,
                                  onMouseEnter: b,
                                  onMouseLeave: v,
                                  plated: null != d,
                                  redGlow: h,
                                  role: "switch",
                                  tooltipText: C,
                              }),
                              (0, a.jsx)(e5.Z, {
                                  "aria-label": u
                                      ? tr.intl.formatToPlainString(tr.t["f+DDY/"], { outputDeviceName: _ })
                                      : tr.intl.string(tr.t.aA4Vce),
                                  className: l()(ti.buttonChevron, { [ti.popoutOpen]: o }),
                                  disabled: i,
                                  icon: (0, a.jsx)(m, {
                                      className: ti.buttonChevronIcon,
                                      size: "custom",
                                      width: 12,
                                      height: 12,
                                      color: h ? g.TVs.colors.STATUS_DANGER : "currentColor",
                                  }),
                                  onClick: r,
                                  onContextMenu: r,
                                  plated: null != d,
                                  redGlow: h,
                                  tooltipClassName: ti.accountButtonsTooltip,
                                  tooltipColor: u ? g.r6K.GREEN : void 0,
                                  tooltipContentClassName: ti.accountButtonsTooltipContent,
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
        : (0, a.jsx)(N.Gt, {
              value: S,
              children: (0, a.jsx)(e5.Z, {
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
                  "aria-label": tr.intl.string(tr.t.wjcRFX),
                  "aria-checked": h,
                  disabled: i,
              }),
          });
}
