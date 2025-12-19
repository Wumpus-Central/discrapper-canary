n.d(t, {
    Z: () => tm,
    m: () => tc,
}),
    n(388685),
    n(539854);
var a = n(54381),
    r = n(473749),
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
    f = n(930295),
    x = n(481060),
    b = n(239091),
    g = n(410575),
    v = n(586902),
    j = n(493773),
    y = n(980591),
    C = n(468363),
    _ = n(326255),
    S = n(771173),
    E = n(963056),
    T = n(570928),
    O = n(100527),
    N = n(906732),
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
    B = n(575175),
    F = n(522651),
    G = n(795318),
    V = n(427217),
    H = n(243778),
    z = n(594928),
    W = n(386725),
    K = n(821795),
    q = n(892567),
    Y = n(258609),
    Q = n(427347),
    X = n(72897),
    J = n(78933),
    $ = n(850020),
    ee = n(379839),
    et = n(359135),
    en = n(516817),
    ea = n(332473),
    er = n(963590),
    ei = n(494424),
    el = n(299886),
    es = n(375720),
    eo = n(659302),
    ec = n(768419),
    ed = n(172416),
    eu = n(184301),
    em = n(670188),
    ep = n(313789),
    eh = n(846071),
    ef = n(518596),
    ex = n(879815),
    eb = n(294629),
    eg = n(875527),
    ev = n(702977),
    ej = n(378441),
    ey = n(358820),
    eC = n(723547),
    e_ = n(361045),
    eS = n(74650),
    eE = n(306609),
    eT = n(170293),
    eO = n(8404),
    eN = n(199902),
    eP = n(314897),
    ew = n(592125),
    eI = n(831506),
    ek = n(819640),
    eR = n(131951),
    eA = n(19780),
    eZ = n(914010),
    eD = n(885110),
    eL = n(606304),
    eM = n(246946),
    eU = n(594174),
    eB = n(78839),
    eF = n(626135),
    eG = n(768581),
    eV = n(572004),
    eH = n(459273),
    ez = n(585483),
    eW = n(70956),
    eK = n(823379),
    eq = n(5192),
    eY = n(374023),
    eQ = n(51144),
    eX = n(998502),
    eJ = n(660230),
    e$ = n(853170),
    e0 = n(422202),
    e1 = n(870569),
    e4 = n(345243),
    e3 = n(115530),
    e8 = n(541769),
    e7 = n(981631),
    e5 = n(921944),
    e6 = n(324805),
    e2 = n(65154),
    e9 = n(388032),
    te = n(484036);
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
            a = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            a.forEach(function (t) {
                tt(e, t, n[t]);
            });
    }
    return e;
}
function ta(e, t) {
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
let tr = eX.ZP.getEnableHardwareAcceleration() ? x.Xo$ : x.qEK,
    ti = 2 * eW.Z.Millis.MINUTE,
    tl = 3 * eW.Z.Millis.SECOND,
    ts = 5 * eW.Z.Millis.SECOND;
function to(e) {
    let {
            ref: t,
            speaking: n,
            latched: i,
            voiceDb: s = -1 / 0,
            streaming: o,
            currentUser: c,
            status: d,
            handleClick: u,
            handleMouseLeave: m,
            renderNameTag: p,
            nameplate: h,
            selectedGuildId: f,
            transitionAccountPanel: b,
            avatarDecoration: v,
            "data-jump-section": j,
        } = e,
        C = r.useRef(null),
        _ = null != t ? t : C,
        S = (0, eG.NZ)({
            avatarDecoration: v,
            size: (0, I.y9)(x.EFr.SIZE_32),
        }),
        E = (0, W.Z)(),
        {
            updateOpenPopoutRef: T,
            highlightBadge: O,
            setHighlightBadge: N,
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
                (0, y.Z)(() => l(!0), 750),
                r.useEffect(() => {
                    let t = (t) => {
                        var n;
                        let { highlightBadge: r } = t;
                        null != r && a(r), null == (n = e.current) || n.call(e);
                    };
                    return (
                        ez.S.subscribe(e7.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, t),
                        () => {
                            ez.S.unsubscribe(e7.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, t);
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
        P = (0, ee.A)(h);
    if (null == c) return null;
    let w = b && f !== e7.I_8 && f !== e7.ME && null != f ? f : void 0;
    return (0, a.jsx)(g.Z, {
        object: e7.qAy.AVATAR,
        children: (0, a.jsx)(em.Z, {
            user: c,
            targetElementRef: _,
            clickTrap: !0,
            preload: () =>
                (0, eu.Z)(c.id, c.getAvatarURL(w, em.I), {
                    type: "account_popout",
                    withMutualGuilds: !1,
                    withMutualFriends: !1,
                    guildId: w,
                }),
            renderPopout: (e, t) => {
                let { closePopout: n, setPopoutRef: r } = e;
                return (0, a.jsx)(J.Z, {
                    currentUser: c,
                    highlightBadge: O,
                    openedAt: t,
                    onClose: () => {
                        null == n || n();
                    },
                    setPopoutRef: r,
                    guildId: w,
                    guildProfileEnabled: b,
                });
            },
            position: "top",
            align: "left",
            animation: x.yRy.Animation.FADE,
            spacing: 14,
            fixed: !0,
            ignoreModalClicks: !0,
            onRequestClose: () => {
                m(), N(void 0);
            },
            children: (e) => (
                T(e),
                (0, a.jsxs)(
                    x.P3F,
                    ta(
                        tn(
                            {
                                innerRef: _,
                                style: P,
                            },
                            e,
                        ),
                        {
                            onClick: (t) => {
                                var n;
                                null == (n = e.onClick) || n.call(e, t), null == u || u(t);
                            },
                            "aria-label": e9.intl.string(e9.t["3Uj+2p"]),
                            "data-jump-section": j,
                            className: l()(te.avatarWrapper, { [te.plated]: null != h }),
                            children: [
                                (0, a.jsx)(tr, {
                                    size: x.EFr["SIZE_".concat(32)],
                                    src: c.getAvatarURL(b ? f : void 0, 28, !1),
                                    avatarDecoration: S,
                                    "aria-label": c.username,
                                    status: o ? e7.Skl.STREAMING : d,
                                    isSpeaking: n,
                                    isLatched: i,
                                    voiceDb: s,
                                    className: te.avatar,
                                }),
                                (0, a.jsx)("div", {
                                    className: l()(te.nameTag, { [te.canCopy]: eV.wS }),
                                    children: p(E),
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
            { speakingWhileMuted: a, occluded: r } = this.props;
        r !== n && this.handleOccludedChanged(), a !== t && this.handleSpeakingWhileMutedChanged();
    }
    componentWillUnmount() {
        this.copiedTimeout.stop(), this.copiedDecayTimeout.stop(), this.speakingWhileMutedTooltipTimeout.stop();
    }
    renderCopiedSuccess() {
        let { copiedStreak: e } = this.state,
            t = [
                e9.intl.string(e9.t.MSaeTe),
                e9.intl.string(e9.t.UmrCw7),
                e9.intl.string(e9.t.gKE0Jq),
                e9.intl.string(e9.t["4DSKbi"]),
                e9.intl.string(e9.t["+8ENdT"]),
                e9.intl.string(e9.t.GlWHv8),
                e9.intl.string(e9.t.hIzxU9),
                e9.intl.string(e9.t["26uMPL"]),
                e9.intl.string(e9.t.uFs7R2),
                e9.intl.string(e9.t.bLXdcY),
                e9.intl.string(e9.t.gPg9fS),
            ],
            n = Math.min(Math.max(0, e - 1), t.length - 1);
        return (0, a.jsx)(x.UkV, {
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
            (0, _.Z)({
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
                    textClassName: te.activityStatusText,
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
            ? (0, a.jsx)(T.Z, {
                  hoverText: l,
                  forceHover: e,
                  children: (0, a.jsx)(V.Z, {
                      activity: c,
                      emojiClassName: te.emoji,
                      className: te.customStatus,
                  }),
              })
            : null != i && i !== e7.Skl.UNKNOWN && r.hasUniqueUsername()
              ? (0, a.jsx)(T.Z, {
                    hoverText: l,
                    forceHover: e,
                    children: (0, a.jsx)(E.Z, { text: eQ.ZP.humanizeStatus(i) }),
                })
              : l;
    }
    renderAvatarWithPopout(e) {
        let {
            focusSectionProps: { "data-jump-section": t },
            onClick: n,
        } = e;
        return (0, a.jsx)(
            to,
            ta(tn({}, this.props), {
                ref: this.avatarWithPopoutRef,
                handleClick: n,
                handleMouseLeave: this.handleMouseLeave,
                renderNameTag: this.renderNameTag,
                "data-jump-section": t,
            }),
        );
    }
    renderNameZone(e) {
        var t;
        let { currentUser: n, dismissibleContents: r } = this.props;
        return null == n
            ? null
            : (0, a.jsx)(e8.Z, {
                  guildId: null != (t = this.props.selectedGuildId) ? t : null,
                  targetElementRef: this.avatarWithPopoutRef,
                  additionalDCs: r.avatar,
                  children: this.renderAvatarWithPopout({ focusSectionProps: e }),
              });
    }
    render() {
        let { currentUser: e, nameplate: t, voiceChannel: n, isQuestBarEmpty: r, isListenAlongVisible: i } = this.props,
            s = this.state.hovered;
        return null == e
            ? null
            : (0, a.jsxs)(a.Fragment, {
                  children: [
                      (0, a.jsx)(x.Wdt, {
                          children: (e) =>
                              (0, a.jsxs)("div", {
                                  ref: this.containerRef,
                                  className: l()(te.container, {
                                      [te.containerRtcOpened]: null != n,
                                      [te.containerQuestBarVisible]: !r,
                                      [te.containerListenAlongVisible]: i,
                                  }),
                                  onMouseEnter: this.handleMouseEnter,
                                  onMouseLeave: this.handleMouseLeave,
                                  children: [
                                      (0, a.jsx)(en.Z, {
                                          nameplate: t,
                                          hovered: s,
                                          placement: et.i.ACCOUNT,
                                      }),
                                      this.renderNameZone(e),
                                      (0, a.jsx)(
                                          td,
                                          ta(tn({}, this.props, this.state), {
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
                      (0, a.jsx)(Q.Z, {}),
                  ],
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
                (0, B.Z)(e, t, e7.jXE.ACCOUNT_PANEL), (0, F.v)(O.Z.ACCOUNT, F.d.MIC, n);
            }),
            tt(this, "handleToggleSelfDeaf", () => {
                let { serverDeaf: e, selfDeaf: t } = this.props;
                (0, U.Z)(e, e7.jXE.ACCOUNT_PANEL), (0, F.v)(O.Z.ACCOUNT, F.d.DEAFEN, !t);
            }),
            tt(this, "handleOpenAccountSettings", () => {
                this.dismissTooltips(),
                    eA.Z.isConnected()
                        ? (0, ef.openUserSettings)(ep.n.VOICE_AND_VIDEO_PANEL, { section: e7.oAB.VOICE })
                        : (0, ef.openUserSettings)();
            }),
            tt(this, "handleOpenSettingsContextMenu", (e) => {
                let { currentUser: t } = this.props;
                null != t &&
                    (0, b.jW)(e, async () => {
                        let { default: e } = await n.e("2535").then(n.bind(n, 923422));
                        return (n) =>
                            (0, a.jsx)(
                                e,
                                ta(tn({}, n), {
                                    user: t,
                                    premiumSubscription: this.props.premiumSubscription,
                                    webBuildOverride: this.props.webBuildOverride,
                                    onInteraction: (0, G.u)("UserSettingsCogContextMenu", O.Z.ACCOUNT),
                                }),
                            );
                    });
            }),
            tt(this, "audioOnInteractionHandler", (0, G.u)("AudioDeviceMenu", O.Z.ACCOUNT)),
            tt(this, "handleInputAudioContextMenu", (e, t) => {
                this.dismissTooltips(),
                    (0, b.jW)(e, async () => {
                        let { default: e } = await Promise.resolve().then(n.bind(n, 659580));
                        return () => {
                            let { enabledInputProfiles: n } = (0, eh.G)({ location: "Account" });
                            return (0, a.jsx)(N.Gt, {
                                value: t,
                                children: (0, a.jsx)(e, {
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
                this.dismissTooltips(),
                    (0, b.jW)(e, async () => {
                        let { default: e } = await Promise.resolve().then(n.bind(n, 659580));
                        return () =>
                            (0, a.jsx)(N.Gt, {
                                value: t,
                                children: (0, a.jsx)(e, {
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
            tt(this, "dismissSpeakingWhileMutedTooltip", () => {
                this.setState({ shouldShowSpeakingWhileMutedTooltip: !1 }),
                    this.speakingWhileMutedTooltipTimeout.stop();
            }),
            tt(this, "dismissTooltips", () => {
                var e, t, n, a;
                null == (e = (t = this.props).dismissInputDeviceChangedTooltip) || e.call(t),
                    null == (n = (a = this.props).dismissOutputDeviceChangedTooltip) || n.call(a),
                    this.dismissSpeakingWhileMutedTooltip();
            }),
            tt(this, "handleCopyTag", () => {
                let { currentUser: e } = this.props,
                    { shouldShowNametagTooltip: t, copiedStreak: n } = this.state;
                if (null == e) return;
                (0, eV.JG)(
                    eQ.ZP.getUserTag(e, {
                        decoration: "never",
                        identifiable: "always",
                    }),
                ),
                    eF.default.track(e7.rMx.TEXT_COPIED, { type: "User Tag" });
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
                        speakingWhileMuted: a,
                        occluded: r,
                        shouldShowInputDeviceChangedTooltip: i,
                        shouldShowOutputDeviceChangedTooltip: l,
                    } = this.props,
                    { hoveringOnMute: s } = this.state,
                    o =
                        void 0 === this.lastSpeakingWhileMutedNotificationTime ||
                        Date.now() - this.lastSpeakingWhileMutedNotificationTime > ti;
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
            tt(this, "renderNameTag", (e) => {
                let { currentUser: t, username: n } = this.props;
                return null == t
                    ? null
                    : (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)("div", {
                                  className: te.panelTitleContainer,
                                  children: (0, a.jsx)(e3.Z, {
                                      className: l()({ [te.withDisplayNameStyles]: null != e }),
                                      children: (0, a.jsx)(q.Z, {
                                          userName: n,
                                          displayNameStyles: e,
                                          effectDisplayType: this.state.hovered ? K.F.ANIMATED : K.F.STATIC,
                                          loop: !0,
                                          inProfile: !0,
                                      }),
                                  }),
                              }),
                              (0, a.jsx)("div", {
                                  className: te.panelSubtextContainer,
                                  children: (0, a.jsx)(e4.Z, { children: this.renderStatus() }),
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
            handleInputAudioContextMenu: f,
            handleOutputAudioContextMenu: x,
            handleOpenAccountSettings: b,
            handleOpenSettingsContextMenu: g,
            dismissibleContents: v,
            nameplate: j,
            accountContainerRef: y,
            shouldShowInputDeviceChangedTooltip: C = !1,
            shouldShowOutputDeviceChangedTooltip: _ = !1,
            dismissTooltips: S,
        } = e,
        E = (0, ee.A)(j);
    return (0, a.jsxs)("div", {
        className: te.buttons,
        style: E,
        children: [
            (0, a.jsx)(th, {
                accountContainerRef: y,
                selfMute: n,
                serverMute: i,
                suppress: s,
                awaitingRemote: r,
                onMouseEnter: u,
                onMouseLeave: m,
                onClick: h,
                onContextMenu: f,
                iconForeground: null != j ? te.iconForeground : void 0,
                nameplate: j,
                shouldShowInputDeviceChangedTooltip: C,
                shouldShowSpeakingWhileMutedTooltip: o,
                dismissTooltips: S,
            }),
            (0, a.jsx)(tf, {
                selfDeaf: t,
                serverDeaf: l,
                onClick: p,
                onContextMenu: x,
                awaitingRemote: r,
                iconForeground: null != j ? te.iconForeground : void 0,
                nameplate: j,
                shouldShowOutputDeviceChangedTooltip: _,
                dismissTooltips: S,
            }),
            (0, a.jsx)(tp, {
                isEligibleForPomelo: c,
                webBuildOverride: d,
                onClick: b,
                onContextMenu: g,
                dismissibleContents: v.settings,
                iconForeground: null != j ? te.iconForeground : void 0,
                nameplate: j,
                shouldShowInputDeviceChangedTooltip: C,
                shouldShowOutputDeviceChangedTooltip: _,
            }),
        ],
    });
}
function tu(e) {
    let { shouldShowDeviceChangedNotifications: t } = (0, e0.P)({
            location: "Account.useDeviceChangedTooltip",
            autoTrackExposure: !1,
        }),
        n = (0, d.e7)([eA.Z], () => null != eA.Z.getChannelId()),
        a = (0, X.Fh)(e),
        i = r.useRef(new m.V7()),
        [l, s] = r.useState(!1);
    r.useEffect(() => {
        n &&
            a &&
            ((0, e0._)({
                location: "Account.useDeviceChangedTooltip (exposure tracking)",
                autoTrackExposure: !0,
            }),
            t &&
                (s(!0),
                i.current.start(ts, () => {
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
function tm() {
    var e;
    let t = (0, d.e7)([eU.default], () => eU.default.getCurrentUser()),
        n = (0, d.e7)([eP.default], () => eP.default.getId()),
        r = eJ.K.useConfig({ location: "AccountConnected" }).transitionAccountPanel,
        {
            activities: i,
            streaming: l,
            status: s,
        } = (0, d.cj)([eD.Z], () => {
            let e = eD.Z.getActivities();
            return {
                activities: e,
                streaming:
                    null !=
                    e.find((e) => {
                        let { type: t } = e;
                        return t === e7.IIU.STREAMING;
                    }),
                status: eD.Z.getStatus(),
            };
        }),
        c = (0, d.e7)([eN.Z], () => eN.Z.getAnyStreamForUser(n)),
        m = (0, v.Z)({ userId: n }),
        p = (0, d.e7)([eL.Z], () => eL.Z.isCurrentUserPTTLatched()),
        h = (0, d.e7)([eL.Z], () => eL.Z.getVoiceVolume(n)),
        f = eQ.ZP.useUserTag(t, { decoration: "never" }),
        b = (0, d.e7)([eM.Z], () => eM.Z.hidePersonalInformation),
        g = (0, d.e7)([eA.Z, ew.Z], () => {
            let e = eA.Z.getChannelId();
            return null != e ? ew.Z.getChannel(e) : null;
        }),
        { mute: j, selfMute: y, suppress: _ } = (0, eb.Z)(g),
        { selfDeaf: S, deaf: E } = (0, ex.Z)(g),
        T = (0, d.e7)([k.C], () => {
            var e;
            return (0, R.fD)()
                ? null == (e = k.C.getCurrentBuildOverride().overrides)
                    ? void 0
                    : e.discord_web
                : null;
        }),
        I = (0, d.e7)([eB.Z], () => eB.Z.getPremiumTypeSubscription()),
        Z = (0, d.e7)([eR.Z], () => eR.Z.getSpeakingWhileMuted()),
        D = (0, d.e7)([A.Z], () => A.Z.isFullscreenInContext()),
        L = (0, d.e7)([ek.Z], () => ek.Z.hasLayers()),
        M = (0, x.s9z)(x.JQI) || L || eY.s.isDisallowPopupsSet() || D,
        U = (0, ea.b)(),
        B = (0, d.e7)([Y.default], () => null != Y.default.getAwaitingRemoteSessionInfo()),
        F = (0, d.e7)([eZ.Z], () => eZ.Z.getGuildId()),
        G = null == t ? void 0 : t.avatarDecoration,
        V = (0, P.R)(t, null != F ? F : void 0),
        H = (0, w.Z)(r ? V : G),
        W = eq.ZP.useName(null != F ? F : void 0, null, t),
        K = null != (e = eQ.ZP.useName(t)) ? e : "",
        { voiceActivityStatusEnabled: q } = (0, C.U)({ location: "Account" }),
        Q = z.JH.useExperiment({ location: "Account" }).enabled,
        X = (0, ei.c)(t, "Account"),
        J = el.H.useConfig({ location: "Account" }).enabled,
        { analyticsLocations: ee } = (0, N.ZP)(O.Z.ACCOUNT),
        et = (0, $.K)({
            user: t,
            guildId: r && null != F ? F : void 0,
        }),
        { isQuestBarEmpty: en, hasLoadedQuestBar: er } = (0, eo.Ws)({ location: e6.dr.CONFLICT_CHECKS }),
        es = (0, d.e7)([ec.Z, eU.default, eI.Z], () => {
            let e,
                t = ec.Z.getSyncingWith(),
                n = ec.Z.getActivity(),
                a = [];
            if (
                (null != t ? (e = t.partyId) : null != n && null != n.party && null != n.party.id && (e = n.party.id),
                null != e)
            ) {
                var r;
                a = o()(Array.from(null != (r = eI.Z.getParty(e)) ? r : []))
                    .map((e) => eU.default.getUser(e))
                    .filter(eK.lm)
                    .value();
            }
            return a.length > 1;
        }),
        eu = (0, ed.Un)({ location: "AccountConnected" }),
        em = {
            avatar: [],
            settings: [],
        };
    !M &&
        (Q && em.avatar.push(u.z.DISPLAY_NAME_STYLES_COACHMARK),
        X && em.avatar.push(u.z.TENURE_BADGE_CHURN_REMINDER),
        eu && em.avatar.push(u.z.WIDGETS_RTC_UPSELL_COACHMARK),
        J && em.settings.push(u.z.NITRO_PRIVACY_PERK_BETA_COACHMARK));
    let { shouldShowTooltip: ep, dismissTooltip: eh } = tu(e2.h7.AUDIO_INPUT),
        { shouldShowTooltip: ef, dismissTooltip: eg } = tu(e2.h7.AUDIO_OUTPUT);
    return (0, a.jsx)(N.Gt, {
        value: ee,
        children: (0, a.jsx)(tc, {
            currentUser: t,
            username: r ? W : K,
            transitionAccountPanel: r,
            activities: i,
            applicationStream: c,
            voiceChannel: g,
            dismissibleContents: em,
            userTag: f,
            hidePrivateData: b,
            occluded: M,
            premiumSubscription: I,
            selfDeaf: S,
            selfMute: y,
            serverDeaf: E,
            serverMute: j,
            speaking: m,
            voiceDb: h,
            speakingWhileMuted: Z,
            latched: p && null != g,
            status: s,
            streaming: l,
            suppress: _,
            webBuildOverride: T,
            awaitingRemote: B,
            isEligibleForPomelo: U,
            voiceActivityStatusEnabled: q,
            nameplate: et,
            selectedGuildId: F,
            avatarDecoration: H,
            isQuestBarEmpty: en,
            hasLoadedQuestBar: er,
            isListenAlongVisible: es,
            shouldShowInputDeviceChangedTooltip: ep,
            shouldShowOutputDeviceChangedTooltip: ef,
            dismissInputDeviceChangedTooltip: eh,
            dismissOutputDeviceChangedTooltip: eg,
        }),
    });
}
function tp(e) {
    let t,
        n,
        i,
        {
            webBuildOverride: l,
            isEligibleForPomelo: s,
            onClick: o,
            onContextMenu: c,
            dismissibleContents: d,
            iconForeground: m,
            nameplate: p,
            shouldShowInputDeviceChangedTooltip: f,
            shouldShowOutputDeviceChangedTooltip: b,
        } = e,
        g = r.useRef(null),
        { showRefreshedAudioContextMenu: v } = (0, e$.e)({ location: "SettingsCogButton" }),
        j = !v && (f || b),
        { name: y } = (0, X.p6)(e2.h7.AUDIO_INPUT),
        { name: C } = (0, X.p6)(e2.h7.AUDIO_OUTPUT);
    !v && f
        ? ((t = e9.intl.format(e9.t["18wnuD"], { inputDeviceName: y })),
          (n = e9.intl.formatToPlainString(e9.t["18wnuD"], { inputDeviceName: y })),
          (i = e9.intl.formatToPlainString(e9.t["18wnuD"], { inputDeviceName: y })))
        : !v && b
          ? ((t = e9.intl.format(e9.t["f+DDY/"], { outputDeviceName: C })),
            (n = e9.intl.formatToPlainString(e9.t["f+DDY/"], { outputDeviceName: C })),
            (i = e9.intl.formatToPlainString(e9.t["f+DDY/"], { outputDeviceName: C })))
          : (t =
                null != l
                    ? e9.intl.formatToPlainString(e9.t.Gzh6ZP, { webBuildOverride: l.id })
                    : e9.intl.string(e9.t.cduTBL));
    let _ = x.ewm,
        S = (0, h.i)();
    return (
        (_ = null != l ? x.bgT : s ? x.Ncx : S.Component),
        (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(
                    e1.Z,
                    ta(
                        tn(
                            {
                                ref: g,
                                tooltipText: t,
                                tooltipType: j ? "green_void_do_not_use" : void 0,
                                tooltipPositionKey: n,
                                tooltipForceOpen: j,
                                "aria-label": j ? i : void 0,
                                onClick: o,
                                onContextMenu: c,
                                icon: (0, a.jsx)(_, {
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
                (0, a.jsx)(H.ZP, {
                    contentTypes: d,
                    groupName: e5.R.ACCOUNT_NAME_ZONE,
                    children: (e) => {
                        let { visibleContent: t, markAsDismissed: n } = e;
                        if (t === u.z.NITRO_PRIVACY_PERK_BETA_COACHMARK)
                            return (0, a.jsx)(es.a, {
                                targetElementRef: g,
                                markAsDismissed: n,
                            });
                    },
                }),
            ],
        })
    );
}
function th(e) {
    let {
            selfMute: t,
            serverMute: n,
            suppress: i,
            awaitingRemote: s,
            iconForeground: o,
            onMouseEnter: m,
            onMouseLeave: p,
            onClick: h,
            onContextMenu: b,
            nameplate: g,
            accountContainerRef: v,
            shouldShowSpeakingWhileMutedTooltip: j,
            shouldShowInputDeviceChangedTooltip: y,
            dismissTooltips: C,
        } = e,
        _ = t || i || n,
        S = r.useRef(null),
        E = r.useRef(null),
        T = (0, eO.b)(_),
        { activeVoice: P, mostRecentlyRequestedVoiceId: w, lastInitAttemptMayHaveCrashed: I } = (0, ej.o)(),
        k = null != P,
        R = (0, d.e7)([eA.Z], () => eA.Z.isConnected()),
        { Component: A, events: Z, play: U } = T,
        B = n || i ? x.v0G : A,
        F = j
            ? {
                  tooltipType: "green_void_do_not_use",
                  tooltipText: e9.intl.string(e9.t["29gnR4"]),
                  tooltipForceOpen: !0,
              }
            : { tooltipText: (0, D.Z)(t, n, i, s) },
        { analyticsLocations: V } = (0, N.ZP)(O.Z.AUDIO_INPUT_BUTTON),
        z = (0, eg.Hu)({
            location: O.Z.AUDIO_INPUT_BUTTON,
            autoTrackExposure: !0,
        }),
        W = (0, ev.av)({
            location: O.Z.AUDIO_INPUT_BUTTON,
            autoTrackExposure: !0,
        });
    r.useEffect(() => () => U(), [_, U]);
    let K = r.useCallback(
            (e) => {
                b(e, V);
            },
            [b, V],
        ),
        [q, Y] = r.useState(!1),
        Q = r.useCallback((e) => {
            var t;
            if (
                (0, c.kK)(null == e ? void 0 : e.target, Node) &&
                (null == (t = S.current) ? void 0 : t.contains(e.target))
            )
                return f.F;
            Y(!1);
        }, []);
    (0, eH.yp)({
        event: e7.CkL.OPEN_VOICE_FILTER_POPOUT,
        handler: () => {
            Y(!0);
        },
    });
    let [J, $] = r.useState(!1);
    r.useEffect(() => {
        let e;
        return (
            R &&
                k &&
                (e = setTimeout(() => {
                    $(!0), (e = setTimeout(() => $(!1), tl));
                }, 300)),
            () => {
                $(!1), clearTimeout(e);
            }
        );
    }, [R]);
    let ee = r.useCallback(() => {
            I || (0, ey.r5)();
        }, [I]),
        et = _ ? x.TVs.colors.STATUS_DANGER : "currentColor",
        en = (0, er.Z)({ location: "Account" }),
        { name: ea } = (0, X.p6)(e2.h7.AUDIO_INPUT),
        { showRefreshedAudioContextMenu: ei } = (0, e$.e)({ location: "MicrophoneButton" }),
        { enabledInputProfiles: el } = (0, eh.G)({ location: "MicrophoneButton" });
    return ei
        ? (0, a.jsx)(N.Gt, {
              value: V,
              children: (0, a.jsx)(x.yRy, {
                  targetElementRef: S,
                  renderPopout: (e) => {
                      let { closePopout: t } = e;
                      return (
                          C(),
                          (0, a.jsx)(N.Gt, {
                              value: V,
                              children: ei
                                  ? (0, a.jsx)(M.Z, {
                                        onInteraction: (0, G.u)("AudioDeviceMenu", O.Z.ACCOUNT),
                                        onClose: t,
                                        maybeRenderPTTCheckbox: !0,
                                        renderInputProfiles: el.length > 0,
                                        renderInputDevices: !0,
                                        maybeRenderInputMeter: !0,
                                        renderInputVolume: !0,
                                        renderSettingsButton: !0,
                                    })
                                  : (0, a.jsx)(L.default, {
                                        onInteraction: (0, G.u)("AudioDeviceMenu", O.Z.ACCOUNT),
                                        onClose: t,
                                        renderInputDevices: !0,
                                        renderInputProfiles: el.length > 0,
                                        renderInputVolume: !0,
                                        minimal: !0,
                                    }),
                          })
                      );
                  },
                  position: "top",
                  align: "left",
                  animation: x.yRy.Animation.FADE,
                  spacing: 4,
                  children: (e, t) => {
                      let { onClick: n } = e,
                          { isShown: r } = t,
                          i = r ? x.u04 : x.CJ0;
                      return (0, a.jsxs)("div", {
                          ref: S,
                          className: l()(te.micButtonParent, {
                              [te.hasColorGlow]: _,
                              [te.popoutOpen]: r,
                          }),
                          children: [
                              (0, a.jsx)(
                                  e1.Z,
                                  tn(
                                      {
                                          "aria-checked": _,
                                          "aria-label": e9.intl.string(e9.t.w4m945),
                                          className: l()({ [te.micButtonWithMenu]: !0 }),
                                          disabled: s,
                                          icon: (0, a.jsx)(B, {
                                              size: "custom",
                                              width: 20,
                                              height: 20,
                                              color: et,
                                              className: o,
                                          }),
                                          onClick: h,
                                          onContextMenu: n,
                                          onMouseEnter: () => {
                                              m(), Z.onMouseEnter();
                                          },
                                          onMouseLeave: () => {
                                              p(), Z.onMouseLeave();
                                          },
                                          plated: null != g,
                                          redGlow: _,
                                          role: "switch",
                                      },
                                      F,
                                  ),
                              ),
                              (0, a.jsx)(e1.Z, {
                                  "aria-label": y
                                      ? e9.intl.formatToPlainString(e9.t["18wnuD"], { inputDeviceName: ea })
                                      : e9.intl.string(e9.t.fRzCbB),
                                  className: l()(te.buttonChevron, { [te.popoutOpen]: r }),
                                  disabled: s,
                                  icon: (0, a.jsx)(i, {
                                      className: te.buttonChevronIcon,
                                      size: "custom",
                                      width: 12,
                                      height: 12,
                                      color: et,
                                  }),
                                  onClick: n,
                                  onContextMenu: n,
                                  onMouseEnter: m,
                                  onMouseLeave: p,
                                  plated: null != g,
                                  redGlow: _,
                                  tooltipType: y ? "green_void_do_not_use" : void 0,
                                  tooltipForceOpen: y,
                                  tooltipPositionKey: y
                                      ? e9.intl.formatToPlainString(e9.t["18wnuD"], { inputDeviceName: ea })
                                      : void 0,
                                  tooltipShouldShow: !r,
                                  tooltipText: y
                                      ? e9.intl.format(e9.t["18wnuD"], { inputDeviceName: ea })
                                      : e9.intl.string(e9.t.fRzCbB),
                              }),
                          ],
                      });
                  },
              }),
          })
        : (0, a.jsx)(N.Gt, {
              value: V,
              children: (0, a.jsxs)("div", {
                  ref: S,
                  className: l()(te.micButtonParent, { [te.hasColorGlow]: _ }),
                  children: [
                      (0, a.jsx)(
                          e1.Z,
                          tn(
                              {
                                  plated: null != g,
                                  onMouseEnter: () => {
                                      m(), Z.onMouseEnter();
                                  },
                                  onMouseLeave: () => {
                                      p(), Z.onMouseLeave();
                                  },
                                  icon: (0, a.jsx)(B, {
                                      size: "custom",
                                      width: 20,
                                      height: 20,
                                      color: et,
                                      className: o,
                                  }),
                                  onClick: h,
                                  onContextMenu: K,
                                  role: "switch",
                                  className: l()({ [te.micButtonWithMenu]: z }),
                                  redGlow: _,
                                  "aria-label": e9.intl.string(e9.t.w4m945),
                                  "aria-checked": _,
                                  disabled: s,
                              },
                              F,
                          ),
                      ),
                      z &&
                          (0, a.jsx)(x.yRy, {
                              targetElementRef: v,
                              position: "top",
                              align: "left",
                              nudgeAlignIntoViewport: !1,
                              animation: x.yRy.Animation.FADE,
                              useMouseEnter: !0,
                              ignoreModalClicks: !0,
                              onRequestOpen: ee,
                              onRequestClose: Q,
                              shouldShow: q,
                              renderPopout: (e) => {
                                  let { closePopout: t } = e;
                                  return (0, a.jsx)(eE.l, { onSettingsButtonClick: t });
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
                                  let l = i ? x.u04 : x.CJ0,
                                      o = [];
                                  return (
                                      !i &&
                                          (en && o.push(u.z.VOICE_FILTER_EARLY_ACCESS_COACHMARK),
                                          o.push(u.z.VOICE_FILTER_LAUNCH_COACHMARK),
                                          W && R && !k && o.push(u.z.VOICE_FILTER_FIRST_USE_COACHMARK)),
                                      (0, a.jsx)("div", {
                                          children: (0, a.jsx)(H.ZP, {
                                              bypassAutoDismiss: !0,
                                              contentTypes: o,
                                              children: (e) => {
                                                  let { visibleContent: t, markAsDismissed: i } = e,
                                                      o = null;
                                                  t === u.z.VOICE_FILTER_EARLY_ACCESS_COACHMARK
                                                      ? (o = (0, a.jsx)(eS.U, {
                                                            markAsDismissed: i,
                                                            onCTA: () => Y(!0),
                                                        }))
                                                      : t === u.z.VOICE_FILTER_LAUNCH_COACHMARK
                                                        ? (o = (0, a.jsx)(e_.n, {
                                                              markAsDismissed: i,
                                                              onCTA: () => Y(!0),
                                                          }))
                                                        : t === u.z.VOICE_FILTER_FIRST_USE_COACHMARK &&
                                                          (o = (0, a.jsx)(eC.v, {
                                                              markAsDismissed: i,
                                                              onCTA: () => Y(!0),
                                                          }));
                                                  let c = () =>
                                                      (0, a.jsx)(
                                                          e1.Z,
                                                          tn(
                                                              {
                                                                  ref: E,
                                                                  plated: null != g,
                                                                  tooltipForceOpen: J,
                                                                  tooltipText: J
                                                                      ? e9.intl.string(e9.t.VlC1de)
                                                                      : e9.intl.string(e9.t.Hapb4J),
                                                                  icon: (0, a.jsx)(l, {
                                                                      className: te.buttonChevronIcon,
                                                                      size: "custom",
                                                                      width: 12,
                                                                      height: 12,
                                                                      color: et,
                                                                  }),
                                                                  role: "button",
                                                                  className: te.buttonChevron,
                                                                  redGlow: _,
                                                                  "aria-label": e9.intl.string(e9.t.Hapb4J),
                                                                  disabled: s,
                                                                  onClick: (e) => {
                                                                      i(e5.L.INDIRECT_ACTION),
                                                                          n(e),
                                                                          null != w && !q && I
                                                                              ? (0, eT.$)(() => Y(!0))
                                                                              : Y(!q);
                                                                  },
                                                              },
                                                              r,
                                                          ),
                                                      );
                                                  return null != o
                                                      ? (0, a.jsx)(x.yRy, {
                                                            targetElementRef: E,
                                                            renderPopout: () => o,
                                                            animation: x.yRy.Animation.TRANSLATE,
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
function tf(e) {
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
            Component: f,
            play: b,
            events: { onMouseEnter: g, onMouseLeave: v },
        } = (0, p.l)(h ? "undeafen" : "deafen"),
        j = n ? x.Vm4 : f,
        { name: y } = (0, X.p6)(e2.h7.AUDIO_OUTPUT),
        { showRefreshedAudioContextMenu: C } = (0, e$.e)({ location: "HeadphonesButton" }),
        _ = (0, Z.Z)(t, n, i),
        { analyticsLocations: S } = (0, N.ZP)(O.Z.AUDIO_OUTPUT_BUTTON),
        E = r.useRef(null);
    r.useEffect(() => () => b(), [h, b]);
    let T = r.useCallback(
        (e) => {
            o(e, S);
        },
        [o, S],
    );
    return C
        ? (0, a.jsx)(N.Gt, {
              value: S,
              children: (0, a.jsx)(x.yRy, {
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
                  animation: x.yRy.Animation.FADE,
                  spacing: 4,
                  children: (e, t) => {
                      let { onClick: r } = e,
                          { isShown: o } = t,
                          m = o ? x.u04 : x.CJ0;
                      return (0, a.jsxs)("div", {
                          ref: E,
                          className: l()(te.micButtonParent, {
                              [te.hasColorGlow]: h,
                              [te.popoutOpen]: o,
                          }),
                          children: [
                              (0, a.jsx)(e1.Z, {
                                  "aria-checked": h,
                                  "aria-label": e9.intl.string(e9.t.wjcRFX),
                                  className: te.micButtonWithMenu,
                                  disabled: i,
                                  icon: (0, a.jsx)(j, {
                                      size: "custom",
                                      width: 20,
                                      height: 20,
                                      color: h ? x.TVs.colors.STATUS_DANGER : "currentColor",
                                      className: c,
                                  }),
                                  iconForeground: h ? te.strikethrough : void 0,
                                  innerClassName: l()({ [te.redIcon]: n }),
                                  onClick: s,
                                  onContextMenu: r,
                                  onMouseEnter: g,
                                  onMouseLeave: v,
                                  plated: null != d,
                                  redGlow: h,
                                  role: "switch",
                                  tooltipText: _,
                              }),
                              (0, a.jsx)(e1.Z, {
                                  className: l()(te.buttonChevron, { [te.popoutOpen]: o }),
                                  disabled: i,
                                  icon: (0, a.jsx)(m, {
                                      className: te.buttonChevronIcon,
                                      size: "custom",
                                      width: 12,
                                      height: 12,
                                      color: h ? x.TVs.colors.STATUS_DANGER : "currentColor",
                                  }),
                                  onClick: r,
                                  onContextMenu: r,
                                  plated: null != d,
                                  redGlow: h,
                                  tooltipType: u ? "green_void_do_not_use" : void 0,
                                  tooltipForceOpen: u,
                                  tooltipPositionKey: u
                                      ? e9.intl.formatToPlainString(e9.t["f+DDY/"], { outputDeviceName: y })
                                      : void 0,
                                  tooltipShouldShow: !o,
                                  tooltipText: u
                                      ? e9.intl.format(e9.t["f+DDY/"], { outputDeviceName: y })
                                      : e9.intl.string(e9.t.aA4Vce),
                                  "aria-label": u
                                      ? e9.intl.formatToPlainString(e9.t["f+DDY/"], { outputDeviceName: y })
                                      : e9.intl.string(e9.t.aA4Vce),
                              }),
                          ],
                      });
                  },
              }),
          })
        : (0, a.jsx)(N.Gt, {
              value: S,
              children: (0, a.jsx)(e1.Z, {
                  plated: null != d,
                  tooltipText: _,
                  onMouseEnter: g,
                  onMouseLeave: v,
                  icon: (0, a.jsx)(j, {
                      size: "custom",
                      width: 20,
                      height: 20,
                      color: h ? x.TVs.colors.STATUS_DANGER : "currentColor",
                      className: c,
                  }),
                  onClick: s,
                  onContextMenu: T,
                  innerClassName: l()({ [te.redIcon]: n }),
                  iconForeground: h ? te.strikethrough : void 0,
                  role: "switch",
                  redGlow: h,
                  "aria-label": e9.intl.string(e9.t.wjcRFX),
                  "aria-checked": h,
                  disabled: i,
              }),
          });
}
