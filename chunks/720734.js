n.d(t, {
    Z: () => e8,
    m: () => e1,
}),
    n(388685),
    n(539854);
var a = n(54381),
    r = n(473749),
    i = n(120356),
    l = n.n(i),
    s = n(392711),
    o = n.n(s),
    c = n(442837),
    d = n(704215),
    u = n(846519),
    m = n(400354),
    p = n(789639),
    h = n(481060),
    f = n(239091),
    x = n(410575),
    b = n(586902),
    g = n(493773),
    v = n(980591),
    j = n(468363),
    y = n(326255),
    C = n(747017),
    _ = n(963056),
    S = n(570928),
    E = n(100527),
    T = n(906732),
    O = n(541638),
    N = n(676742),
    P = n(1585),
    w = n(304761),
    I = n(865427),
    k = n(358221),
    R = n(571250),
    A = n(628581),
    Z = n(855844),
    D = n(55311),
    L = n(575175),
    M = n(522651),
    U = n(795318),
    B = n(427217),
    F = n(243778),
    G = n(386725),
    V = n(821795),
    z = n(892567),
    W = n(258609),
    H = n(427347),
    q = n(72897),
    K = n(78933),
    Q = n(850020),
    Y = n(379839),
    X = n(359135),
    J = n(516817),
    $ = n(332473),
    ee = n(494424),
    et = n(299886),
    en = n(375720),
    ea = n(659302),
    er = n(768419),
    ei = n(172416),
    el = n(184301),
    es = n(670188),
    eo = n(313789),
    ec = n(846071),
    ed = n(518596),
    eu = n(879815),
    em = n(294629),
    ep = n(8404),
    eh = n(199902),
    ef = n(314897),
    ex = n(592125),
    eb = n(831506),
    eg = n(819640),
    ev = n(131951),
    ej = n(19780),
    ey = n(914010),
    eC = n(885110),
    e_ = n(606304),
    eS = n(246946),
    eE = n(594174),
    eT = n(78839),
    eO = n(626135),
    eN = n(768581),
    eP = n(572004),
    ew = n(585483),
    eI = n(70956),
    ek = n(823379),
    eR = n(5192),
    eA = n(374023),
    eZ = n(51144),
    eD = n(998502),
    eL = n(660230),
    eM = n(870569),
    eU = n(345243),
    eB = n(115530),
    eF = n(541769),
    eG = n(981631),
    eV = n(921944),
    ez = n(324805),
    eW = n(65154),
    eH = n(388032),
    eq = n(484036);
function eK(e, t, n) {
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
function eQ(e) {
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
                eK(e, t, n[t]);
            });
    }
    return e;
}
function eY(e, t) {
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
let eX = eD.ZP.getEnableHardwareAcceleration() ? h.Xo$ : h.qEK,
    eJ = 2 * eI.Z.Millis.MINUTE,
    e$ = 5 * eI.Z.Millis.SECOND;
function e0(e) {
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
            nameplate: f,
            selectedGuildId: b,
            transitionAccountPanel: g,
            avatarDecoration: j,
            "data-jump-section": y,
        } = e,
        C = r.useRef(null),
        _ = null != t ? t : C,
        S = (0, eN.NZ)({
            avatarDecoration: j,
            size: (0, P.y9)(h.EFr.SIZE_32),
        }),
        E = (0, G.Z)(),
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
                (0, v.Z)(() => l(!0), 750),
                r.useEffect(() => {
                    let t = (t) => {
                        var n;
                        let { highlightBadge: r } = t;
                        null != r && a(r), null == (n = e.current) || n.call(e);
                    };
                    return (
                        ew.S.subscribe(eG.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, t),
                        () => {
                            ew.S.unsubscribe(eG.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, t);
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
        w = (0, Y.A)(f);
    if (null == c) return null;
    let I = g && b !== eG.I_8 && b !== eG.ME && null != b ? b : void 0;
    return (0, a.jsx)(x.Z, {
        object: eG.qAy.AVATAR,
        children: (0, a.jsx)(es.Z, {
            user: c,
            targetElementRef: _,
            clickTrap: !0,
            preload: () =>
                (0, el.Z)(c.id, c.getAvatarURL(I, es.I), {
                    type: "account_popout",
                    withMutualGuilds: !1,
                    withMutualFriends: !1,
                    guildId: I,
                }),
            renderPopout: (e, t) => {
                let { closePopout: n, setPopoutRef: r } = e;
                return (0, a.jsx)(K.Z, {
                    currentUser: c,
                    highlightBadge: O,
                    openedAt: t,
                    onClose: () => {
                        null == n || n();
                    },
                    setPopoutRef: r,
                    guildId: I,
                    guildProfileEnabled: g,
                });
            },
            position: "top",
            align: "left",
            animation: h.yRy.Animation.FADE,
            spacing: 14,
            fixed: !0,
            ignoreModalClicks: !0,
            onRequestClose: () => {
                m(), N(void 0);
            },
            children: (e) => (
                T(e),
                (0, a.jsxs)(
                    h.P3F,
                    eY(
                        eQ(
                            {
                                innerRef: _,
                                style: w,
                            },
                            e,
                        ),
                        {
                            onClick: (t) => {
                                var n;
                                null == (n = e.onClick) || n.call(e, t), null == u || u(t);
                            },
                            "aria-label": eH.intl.string(eH.t["3Uj+2p"]),
                            "data-jump-section": y,
                            className: l()(eq.avatarWrapper, { [eq.plated]: null != f }),
                            children: [
                                (0, a.jsx)(eX, {
                                    size: h.EFr["SIZE_".concat(32)],
                                    src: c.getAvatarURL(g ? b : void 0, 28, !1),
                                    avatarDecoration: S,
                                    "aria-label": c.username,
                                    status: o ? eG.Skl.STREAMING : d,
                                    isSpeaking: n,
                                    isLatched: i,
                                    voiceDb: s,
                                    className: eq.avatar,
                                }),
                                (0, a.jsx)("div", {
                                    className: l()(eq.nameTag, { [eq.canCopy]: eP.wS }),
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
class e1 extends r.PureComponent {
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
                eH.intl.string(eH.t.MSaeTe),
                eH.intl.string(eH.t.UmrCw7),
                eH.intl.string(eH.t.gKE0Jq),
                eH.intl.string(eH.t["4DSKbi"]),
                eH.intl.string(eH.t["+8ENdT"]),
                eH.intl.string(eH.t.GlWHv8),
                eH.intl.string(eH.t.hIzxU9),
                eH.intl.string(eH.t["26uMPL"]),
                eH.intl.string(eH.t.uFs7R2),
                eH.intl.string(eH.t.bLXdcY),
                eH.intl.string(eH.t.gPg9fS),
            ],
            n = Math.min(Math.max(0, e - 1), t.length - 1);
        return (0, a.jsx)(h.UkV, {
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
            (0, y.Z)({
                activities: t,
                status: i,
                applicationStream: n,
                voiceChannel: s ? o : void 0,
            })
        )
            return (0, a.jsx)(S.Z, {
                hoverText: l,
                forceHover: e,
                children: (0, a.jsx)(C.Z, {
                    user: r,
                    activities: t,
                    applicationStream: n,
                    voiceChannel: s ? o : void 0,
                    textClassName: eq.activityStatusText,
                    hideTooltip: !0,
                }),
            });
        let c =
            null == t
                ? void 0
                : t.find((e) => {
                      let { type: t } = e;
                      return t === eG.IIU.CUSTOM_STATUS;
                  });
        return null != c
            ? (0, a.jsx)(S.Z, {
                  hoverText: l,
                  forceHover: e,
                  children: (0, a.jsx)(B.Z, {
                      activity: c,
                      emojiClassName: eq.emoji,
                      className: eq.customStatus,
                  }),
              })
            : null != i && i !== eG.Skl.UNKNOWN && r.hasUniqueUsername()
              ? (0, a.jsx)(S.Z, {
                    hoverText: l,
                    forceHover: e,
                    children: (0, a.jsx)(_.Z, { text: eZ.ZP.humanizeStatus(i) }),
                })
              : l;
    }
    renderAvatarWithPopout(e) {
        let {
            focusSectionProps: { "data-jump-section": t },
            onClick: n,
        } = e;
        return (0, a.jsx)(
            e0,
            eY(eQ({}, this.props), {
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
            : (0, a.jsx)(eF.Z, {
                  guildId: null != (t = this.props.selectedGuildId) ? t : null,
                  currentUser: n,
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
                      (0, a.jsx)(h.Wdt, {
                          children: (e) =>
                              (0, a.jsxs)("div", {
                                  ref: this.containerRef,
                                  className: l()(eq.container, {
                                      [eq.containerRtcOpened]: null != n,
                                      [eq.containerQuestBarVisible]: !r,
                                      [eq.containerListenAlongVisible]: i,
                                  }),
                                  onMouseEnter: this.handleMouseEnter,
                                  onMouseLeave: this.handleMouseLeave,
                                  children: [
                                      (0, a.jsx)(J.Z, {
                                          nameplate: t,
                                          hovered: s,
                                          placement: X.i.ACCOUNT,
                                      }),
                                      this.renderNameZone(e),
                                      (0, a.jsx)(
                                          e4,
                                          eY(eQ({}, this.props, this.state), {
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
                      (0, a.jsx)(H.Z, {}),
                  ],
              });
    }
    constructor(...e) {
        super(...e),
            eK(this, "copiedTimeout", new u.V7()),
            eK(this, "copiedDecayTimeout", new u.V7()),
            eK(this, "speakingWhileMutedTooltipTimeout", new u.V7()),
            eK(this, "lastSpeakingWhileMutedNotificationTime", void 0),
            eK(this, "state", {
                hovered: !1,
                copiedStreak: 0,
                shouldShowNametagTooltip: !1,
                shouldShowCopiedFeedback: !1,
                shouldShowSpeakingWhileMutedTooltip: !1,
                hoveringOnMute: !1,
            }),
            eK(this, "containerRef", r.createRef()),
            eK(this, "avatarWithPopoutRef", r.createRef()),
            eK(this, "handleToggleSelfMute", () => {
                let { serverMute: e, suppress: t, selfMute: n } = this.props;
                (0, L.Z)(e, t, eG.jXE.ACCOUNT_PANEL), (0, M.v)(E.Z.ACCOUNT, M.d.MIC, n);
            }),
            eK(this, "handleToggleSelfDeaf", () => {
                let { serverDeaf: e, selfDeaf: t } = this.props;
                (0, D.Z)(e, eG.jXE.ACCOUNT_PANEL), (0, M.v)(E.Z.ACCOUNT, M.d.DEAFEN, !t);
            }),
            eK(this, "handleOpenAccountSettings", () => {
                this.dismissTooltips(),
                    ej.Z.isConnected()
                        ? (0, ed.openUserSettings)(eo.n.VOICE_AND_VIDEO_PANEL, { section: eG.oAB.VOICE })
                        : (0, ed.openUserSettings)();
            }),
            eK(this, "handleOpenSettingsContextMenu", (e) => {
                let { currentUser: t } = this.props;
                null != t &&
                    (0, f.jW)(e, async () => {
                        let { default: e } = await n.e("2535").then(n.bind(n, 923422));
                        return (n) =>
                            (0, a.jsx)(
                                e,
                                eY(eQ({}, n), {
                                    user: t,
                                    premiumSubscription: this.props.premiumSubscription,
                                    webBuildOverride: this.props.webBuildOverride,
                                    onInteraction: (0, U.u)("UserSettingsCogContextMenu", E.Z.ACCOUNT),
                                }),
                            );
                    });
            }),
            eK(this, "audioOnInteractionHandler", (0, U.u)("AudioDeviceMenu", E.Z.ACCOUNT)),
            eK(this, "handleInputAudioContextMenu", (e, t) => {
                this.dismissTooltips(),
                    (0, f.jW)(e, async () => {
                        let { default: e } = await n.e("84007").then(n.bind(n, 659580));
                        return () => {
                            let { enabledInputProfiles: n } = (0, ec.G)({ location: "Account" });
                            return (0, a.jsx)(T.Gt, {
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
            eK(this, "handleOutputAudioContextMenu", (e, t) => {
                this.dismissTooltips(),
                    (0, f.jW)(e, async () => {
                        let { default: e } = await n.e("84007").then(n.bind(n, 659580));
                        return () =>
                            (0, a.jsx)(T.Gt, {
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
            eK(this, "handleMouseEnter", () => {
                this.setState({ hovered: !0 });
            }),
            eK(this, "handleMouseLeave", () => {
                this.setState({ hovered: !1 });
            }),
            eK(this, "handleMouseEnterMute", () => {
                this.setState({
                    hoveringOnMute: !0,
                    shouldShowSpeakingWhileMutedTooltip: !1,
                }),
                    this.speakingWhileMutedTooltipTimeout.stop();
            }),
            eK(this, "handleMouseLeaveMute", () => {
                this.setState({ hoveringOnMute: !1 });
            }),
            eK(this, "dismissSpeakingWhileMutedTooltip", () => {
                this.setState({ shouldShowSpeakingWhileMutedTooltip: !1 }),
                    this.speakingWhileMutedTooltipTimeout.stop();
            }),
            eK(this, "dismissTooltips", () => {
                var e, t, n, a;
                null == (e = (t = this.props).dismissInputDeviceChangedTooltip) || e.call(t),
                    null == (n = (a = this.props).dismissOutputDeviceChangedTooltip) || n.call(a),
                    this.dismissSpeakingWhileMutedTooltip();
            }),
            eK(this, "handleCopyTag", () => {
                let { currentUser: e } = this.props,
                    { shouldShowNametagTooltip: t, copiedStreak: n } = this.state;
                if (null == e) return;
                (0, eP.JG)(
                    eZ.ZP.getUserTag(e, {
                        decoration: "never",
                        identifiable: "always",
                    }),
                ),
                    eO.default.track(eG.rMx.TEXT_COPIED, { type: "User Tag" });
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
            eK(this, "handleOccludedChanged", () => {
                let { occluded: e } = this.props;
                e &&
                    this.setState({
                        shouldShowNametagTooltip: !1,
                        shouldShowSpeakingWhileMutedTooltip: !1,
                    });
            }),
            eK(this, "handleSpeakingWhileMutedChanged", () => {
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
                        Date.now() - this.lastSpeakingWhileMutedNotificationTime > eJ;
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
            eK(this, "renderNameTag", (e) => {
                let { currentUser: t, username: n } = this.props;
                return null == t
                    ? null
                    : (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)("div", {
                                  className: eq.panelTitleContainer,
                                  children: (0, a.jsx)(eB.Z, {
                                      className: l()({ [eq.withDisplayNameStyles]: null != e }),
                                      children: (0, a.jsx)(z.Z, {
                                          userName: n,
                                          displayNameStyles: e,
                                          effectDisplayType: this.state.hovered ? V.F.ANIMATED : V.F.STATIC,
                                          loop: !0,
                                          inProfile: !0,
                                      }),
                                  }),
                              }),
                              (0, a.jsx)("div", {
                                  className: eq.panelSubtextContainer,
                                  children: (0, a.jsx)(eU.Z, { children: this.renderStatus() }),
                              }),
                          ],
                      });
            });
    }
}
function e4(e) {
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
        E = (0, Y.A)(j);
    return (0, a.jsxs)("div", {
        className: eq.buttons,
        style: E,
        children: [
            (0, a.jsx)(e5, {
                accountContainerRef: y,
                selfMute: n,
                serverMute: i,
                suppress: s,
                awaitingRemote: r,
                onMouseEnter: u,
                onMouseLeave: m,
                onClick: h,
                onContextMenu: f,
                iconForeground: null != j ? eq.iconForeground : void 0,
                nameplate: j,
                shouldShowInputDeviceChangedTooltip: C,
                shouldShowSpeakingWhileMutedTooltip: o,
                dismissTooltips: S,
            }),
            (0, a.jsx)(e6, {
                selfDeaf: t,
                serverDeaf: l,
                onClick: p,
                onContextMenu: x,
                awaitingRemote: r,
                iconForeground: null != j ? eq.iconForeground : void 0,
                nameplate: j,
                shouldShowOutputDeviceChangedTooltip: _,
                dismissTooltips: S,
            }),
            (0, a.jsx)(e7, {
                isEligibleForPomelo: c,
                webBuildOverride: d,
                onClick: b,
                onContextMenu: g,
                dismissibleContents: v.settings,
                iconForeground: null != j ? eq.iconForeground : void 0,
                nameplate: j,
                shouldShowInputDeviceChangedTooltip: C,
                shouldShowOutputDeviceChangedTooltip: _,
            }),
        ],
    });
}
function e3(e) {
    let t = (0, c.e7)([ej.Z], () => null != ej.Z.getChannelId()),
        n = (0, q.Fh)(e),
        a = r.useRef(new u.V7()),
        [i, l] = r.useState(!1);
    r.useEffect(() => {
        t &&
            n &&
            (l(!0),
            a.current.start(e$, () => {
                l(!1);
            }));
    }, [t, n]);
    let s = r.useCallback(() => {
        l(!1), a.current.stop();
    }, []);
    return (
        (0, g.zq)(() => {
            a.current.stop();
        }),
        {
            shouldShowTooltip: i,
            dismissTooltip: s,
        }
    );
}
function e8() {
    var e;
    let t = (0, c.e7)([eE.default], () => eE.default.getCurrentUser()),
        n = (0, c.e7)([ef.default], () => ef.default.getId()),
        r = eL.K.useConfig({ location: "AccountConnected" }).transitionAccountPanel,
        {
            activities: i,
            streaming: l,
            status: s,
        } = (0, c.cj)([eC.Z], () => {
            let e = eC.Z.getActivities();
            return {
                activities: e,
                streaming:
                    null !=
                    e.find((e) => {
                        let { type: t } = e;
                        return t === eG.IIU.STREAMING;
                    }),
                status: eC.Z.getStatus(),
            };
        }),
        u = (0, c.e7)([eh.Z], () => eh.Z.getAnyStreamForUser(n)),
        m = (0, b.Z)({ userId: n }),
        p = (0, c.e7)([e_.Z], () => e_.Z.isCurrentUserPTTLatched()),
        f = (0, c.e7)([e_.Z], () => e_.Z.getVoiceVolume(n)),
        x = eZ.ZP.useUserTag(t, { decoration: "never" }),
        g = (0, c.e7)([eS.Z], () => eS.Z.hidePersonalInformation),
        v = (0, c.e7)([ej.Z, ex.Z], () => {
            let e = ej.Z.getChannelId();
            return null != e ? ex.Z.getChannel(e) : null;
        }),
        { mute: y, selfMute: C, suppress: _ } = (0, em.Z)(v),
        { selfDeaf: S, deaf: P } = (0, eu.Z)(v),
        R = (0, c.e7)([w.C], () => {
            var e;
            return (0, I.fD)()
                ? null == (e = w.C.getCurrentBuildOverride().overrides)
                    ? void 0
                    : e.discord_web
                : null;
        }),
        A = (0, c.e7)([eT.Z], () => eT.Z.getPremiumTypeSubscription()),
        Z = (0, c.e7)([ev.Z], () => ev.Z.getSpeakingWhileMuted()),
        D = (0, c.e7)([k.Z], () => k.Z.isFullscreenInContext()),
        L = (0, c.e7)([eg.Z], () => eg.Z.hasLayers()),
        M = (0, h.s9z)(h.JQI) || L || eA.s.isDisallowPopupsSet() || D,
        U = (0, $.b)(),
        B = (0, c.e7)([W.default], () => null != W.default.getAwaitingRemoteSessionInfo()),
        F = (0, c.e7)([ey.Z], () => ey.Z.getGuildId()),
        G = null == t ? void 0 : t.avatarDecoration,
        V = (0, O.R)(t, null != F ? F : void 0),
        z = (0, N.Z)(r ? V : G),
        H = eR.ZP.useName(null != F ? F : void 0, null, t),
        q = null != (e = eZ.ZP.useName(t)) ? e : "",
        { voiceActivityStatusEnabled: K } = (0, j.U)({ location: "Account" }),
        Y = (0, ee.c)(t, "Account"),
        X = et.H.useConfig({ location: "Account" }).enabled,
        { analyticsLocations: J } = (0, T.ZP)(E.Z.ACCOUNT),
        en = (0, Q.K)({
            user: t,
            guildId: r && null != F ? F : void 0,
        }),
        { isQuestBarEmpty: el, hasLoadedQuestBar: es } = (0, ea.Ws)({ location: ez.dr.CONFLICT_CHECKS }),
        eo = (0, c.e7)([er.Z, eE.default, eb.Z], () => {
            let e,
                t = er.Z.getSyncingWith(),
                n = er.Z.getActivity(),
                a = [];
            if (
                (null != t ? (e = t.partyId) : null != n && null != n.party && null != n.party.id && (e = n.party.id),
                null != e)
            ) {
                var r;
                a = o()(Array.from(null != (r = eb.Z.getParty(e)) ? r : []))
                    .map((e) => eE.default.getUser(e))
                    .filter(ek.lm)
                    .value();
            }
            return a.length > 1;
        }),
        ec = (0, ei.U)({ location: "AccountConnected" }),
        ed = {
            avatar: [],
            settings: [],
        };
    !M &&
        (ed.avatar.push(d.z.DISPLAY_NAME_STYLES_COACHMARK),
        Y && ed.avatar.push(d.z.TENURE_BADGE_CHURN_REMINDER),
        ec && ed.avatar.push(d.z.WIDGETS_RTC_UPSELL_COACHMARK),
        X && ed.settings.push(d.z.NITRO_PRIVACY_PERK_BETA_COACHMARK));
    let { shouldShowTooltip: ep, dismissTooltip: eO } = e3(eW.h7.AUDIO_INPUT),
        { shouldShowTooltip: eN, dismissTooltip: eP } = e3(eW.h7.AUDIO_OUTPUT);
    return (0, a.jsx)(T.Gt, {
        value: J,
        children: (0, a.jsx)(e1, {
            currentUser: t,
            username: r ? H : q,
            transitionAccountPanel: r,
            activities: i,
            applicationStream: u,
            voiceChannel: v,
            dismissibleContents: ed,
            userTag: x,
            hidePrivateData: g,
            occluded: M,
            premiumSubscription: A,
            selfDeaf: S,
            selfMute: C,
            serverDeaf: P,
            serverMute: y,
            speaking: m,
            voiceDb: f,
            speakingWhileMuted: Z,
            latched: p && null != v,
            status: s,
            streaming: l,
            suppress: _,
            webBuildOverride: R,
            awaitingRemote: B,
            isEligibleForPomelo: U,
            voiceActivityStatusEnabled: K,
            nameplate: en,
            selectedGuildId: F,
            avatarDecoration: z,
            isQuestBarEmpty: el,
            hasLoadedQuestBar: es,
            isListenAlongVisible: eo,
            shouldShowInputDeviceChangedTooltip: ep,
            shouldShowOutputDeviceChangedTooltip: eN,
            dismissInputDeviceChangedTooltip: eO,
            dismissOutputDeviceChangedTooltip: eP,
        }),
    });
}
function e7(e) {
    let t,
        n,
        {
            webBuildOverride: i,
            isEligibleForPomelo: l,
            onClick: s,
            onContextMenu: o,
            dismissibleContents: c,
            iconForeground: u,
            nameplate: m,
        } = e,
        f = r.useRef(null);
    t = null != i ? eH.intl.formatToPlainString(eH.t.Gzh6ZP, { webBuildOverride: i.id }) : eH.intl.string(eH.t.cduTBL);
    let x = h.ewm,
        b = (0, p.i)();
    return (
        (x = null != i ? h.bgT : l ? h.Ncx : b.Component),
        (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(
                    eM.Z,
                    eY(
                        eQ(
                            {
                                ref: f,
                                tooltipText: t,
                                tooltipPositionKey: n,
                                onClick: s,
                                onContextMenu: o,
                                icon: (0, a.jsx)(x, {
                                    size: "refresh_sm",
                                    color: "currentColor",
                                    className: u,
                                }),
                            },
                            b.events,
                        ),
                        { plated: null != m },
                    ),
                ),
                (0, a.jsx)(F.ZP, {
                    contentTypes: c,
                    groupName: eV.R.ACCOUNT_NAME_ZONE,
                    children: (e) => {
                        let { visibleContent: t, markAsDismissed: n } = e;
                        if (t === d.z.NITRO_PRIVACY_PERK_BETA_COACHMARK)
                            return (0, a.jsx)(en.a, {
                                targetElementRef: f,
                                markAsDismissed: n,
                            });
                    },
                }),
            ],
        })
    );
}
function e5(e) {
    let {
            selfMute: t,
            serverMute: n,
            suppress: i,
            awaitingRemote: s,
            iconForeground: o,
            onMouseEnter: c,
            onMouseLeave: d,
            onClick: u,
            nameplate: m,
            shouldShowSpeakingWhileMutedTooltip: p,
            shouldShowInputDeviceChangedTooltip: f,
            dismissTooltips: x,
        } = e,
        b = t || i || n,
        g = r.useRef(null),
        { Component: v, events: j, play: y } = (0, ep.b)(b),
        C = n || i ? h.v0G : v,
        _ = p
            ? {
                  tooltipType: "green_void_do_not_use",
                  tooltipText: eH.intl.string(eH.t["29gnR4"]),
                  tooltipForceOpen: !0,
              }
            : { tooltipText: (0, A.Z)(t, n, i, s) },
        { analyticsLocations: S } = (0, T.ZP)(E.Z.AUDIO_INPUT_BUTTON);
    r.useEffect(() => () => y(), [b, y]);
    let O = b ? h.TVs.colors.ICON_VOICE_MUTED : "currentColor",
        { name: N } = (0, q.p6)(eW.h7.AUDIO_INPUT),
        { enabledInputProfiles: P } = (0, ec.G)({ location: "MicrophoneButton" });
    return (0, a.jsx)(T.Gt, {
        value: S,
        children: (0, a.jsx)(h.yRy, {
            targetElementRef: g,
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (
                    x(),
                    (0, a.jsx)(T.Gt, {
                        value: S,
                        children: (0, a.jsx)(Z.Z, {
                            onInteraction: (0, U.u)("AudioDeviceMenu", E.Z.ACCOUNT),
                            onClose: t,
                            maybeRenderPTTCheckbox: !0,
                            renderInputProfiles: P.length > 0,
                            renderInputDevices: !0,
                            maybeRenderInputMeter: !0,
                            renderInputVolume: !0,
                            renderSettingsButton: !0,
                        }),
                    })
                );
            },
            position: "top",
            align: "left",
            animation: h.yRy.Animation.FADE,
            spacing: 4,
            children: (e, t) => {
                let { onClick: n } = e,
                    { isShown: r } = t,
                    i = r ? h.u04 : h.CJ0;
                return (0, a.jsxs)("div", {
                    ref: g,
                    className: l()(eq.micButtonParent, {
                        [eq.hasColorGlow]: b,
                        [eq.popoutOpen]: r,
                    }),
                    children: [
                        (0, a.jsx)(
                            eM.Z,
                            eQ(
                                {
                                    "aria-checked": b,
                                    "aria-label": eH.intl.string(eH.t.w4m945),
                                    className: eq.micButtonWithMenu,
                                    disabled: s,
                                    icon: (0, a.jsx)(C, {
                                        size: "custom",
                                        width: 20,
                                        height: 20,
                                        color: O,
                                        className: o,
                                    }),
                                    onClick: u,
                                    onContextMenu: n,
                                    onMouseEnter: () => {
                                        c(), j.onMouseEnter();
                                    },
                                    onMouseLeave: () => {
                                        d(), j.onMouseLeave();
                                    },
                                    plated: null != m,
                                    redGlow: b,
                                    role: "switch",
                                },
                                _,
                            ),
                        ),
                        (0, a.jsx)(eM.Z, {
                            "aria-label": f
                                ? eH.intl.formatToPlainString(eH.t["18wnuD"], { inputDeviceName: N })
                                : eH.intl.string(eH.t.fRzCbB),
                            className: l()(eq.buttonChevron, { [eq.popoutOpen]: r }),
                            disabled: s,
                            icon: (0, a.jsx)(i, {
                                className: eq.buttonChevronIcon,
                                size: "custom",
                                width: 12,
                                height: 12,
                                color: O,
                            }),
                            onClick: n,
                            onContextMenu: n,
                            onMouseEnter: c,
                            onMouseLeave: d,
                            plated: null != m,
                            redGlow: b,
                            tooltipType: f ? "green_void_do_not_use" : void 0,
                            tooltipForceOpen: f,
                            tooltipPositionKey: f
                                ? eH.intl.formatToPlainString(eH.t["18wnuD"], { inputDeviceName: N })
                                : void 0,
                            tooltipShouldShow: !r,
                            tooltipText: f
                                ? eH.intl.format(eH.t["18wnuD"], { inputDeviceName: N })
                                : eH.intl.string(eH.t.fRzCbB),
                        }),
                    ],
                });
            },
        }),
    });
}
function e6(e) {
    let {
            selfDeaf: t,
            serverDeaf: n,
            awaitingRemote: i,
            onClick: s,
            iconForeground: o,
            nameplate: c,
            shouldShowOutputDeviceChangedTooltip: d,
            dismissTooltips: u,
        } = e,
        p = t || n,
        {
            Component: f,
            play: x,
            events: { onMouseEnter: b, onMouseLeave: g },
        } = (0, m.l)(p ? "undeafen" : "deafen"),
        v = n ? h.Vm4 : f,
        { name: j } = (0, q.p6)(eW.h7.AUDIO_OUTPUT),
        y = (0, R.Z)(t, n, i),
        { analyticsLocations: C } = (0, T.ZP)(E.Z.AUDIO_OUTPUT_BUTTON),
        _ = r.useRef(null);
    return (
        r.useEffect(() => () => x(), [p, x]),
        (0, a.jsx)(T.Gt, {
            value: C,
            children: (0, a.jsx)(h.yRy, {
                targetElementRef: _,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (
                        u(),
                        (0, a.jsx)(T.Gt, {
                            value: C,
                            children: (0, a.jsx)(Z.Z, {
                                onInteraction: (0, U.u)("AudioDeviceMenu", E.Z.ACCOUNT),
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
                animation: h.yRy.Animation.FADE,
                spacing: 4,
                children: (e, t) => {
                    let { onClick: r } = e,
                        { isShown: u } = t,
                        m = u ? h.u04 : h.CJ0;
                    return (0, a.jsxs)("div", {
                        ref: _,
                        className: l()(eq.micButtonParent, {
                            [eq.hasColorGlow]: p,
                            [eq.popoutOpen]: u,
                        }),
                        children: [
                            (0, a.jsx)(eM.Z, {
                                "aria-checked": p,
                                "aria-label": eH.intl.string(eH.t.wjcRFX),
                                className: eq.micButtonWithMenu,
                                disabled: i,
                                icon: (0, a.jsx)(v, {
                                    size: "custom",
                                    width: 20,
                                    height: 20,
                                    color: p ? h.TVs.colors.ICON_VOICE_MUTED : "currentColor",
                                    className: o,
                                }),
                                iconForeground: p ? eq.strikethrough : void 0,
                                innerClassName: l()({ [eq.redIcon]: n }),
                                onClick: s,
                                onContextMenu: r,
                                onMouseEnter: b,
                                onMouseLeave: g,
                                plated: null != c,
                                redGlow: p,
                                role: "switch",
                                tooltipText: y,
                            }),
                            (0, a.jsx)(eM.Z, {
                                className: l()(eq.buttonChevron, { [eq.popoutOpen]: u }),
                                disabled: i,
                                icon: (0, a.jsx)(m, {
                                    className: eq.buttonChevronIcon,
                                    size: "custom",
                                    width: 12,
                                    height: 12,
                                    color: p ? h.TVs.colors.ICON_VOICE_MUTED : "currentColor",
                                }),
                                onClick: r,
                                onContextMenu: r,
                                plated: null != c,
                                redGlow: p,
                                tooltipType: d ? "green_void_do_not_use" : void 0,
                                tooltipForceOpen: d,
                                tooltipPositionKey: d
                                    ? eH.intl.formatToPlainString(eH.t["f+DDY/"], { outputDeviceName: j })
                                    : void 0,
                                tooltipShouldShow: !u,
                                tooltipText: d
                                    ? eH.intl.format(eH.t["f+DDY/"], { outputDeviceName: j })
                                    : eH.intl.string(eH.t.aA4Vce),
                                "aria-label": d
                                    ? eH.intl.formatToPlainString(eH.t["f+DDY/"], { outputDeviceName: j })
                                    : eH.intl.string(eH.t.aA4Vce),
                            }),
                        ],
                    });
                },
            }),
        })
    );
}
