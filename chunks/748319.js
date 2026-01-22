n.d(t, {
    A: () => e9,
    g: () => e0,
}),
    n(896048),
    n(321073);
var a = n(627968),
    l = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(735438),
    o = n.n(s),
    c = n(311907),
    d = n(554146),
    u = n(451988),
    m = n(348858),
    p = n(505312),
    h = n(397927),
    f = n(442433),
    x = n(820284),
    b = n(717558),
    g = n(964486),
    v = n(220839),
    j = n(901517),
    y = n(397244),
    _ = n(729551),
    A = n(755039),
    C = n(29160),
    S = n(793574),
    O = n(688810),
    E = n(357046),
    N = n(325445),
    T = n(954921),
    I = n(521502),
    w = n(380610),
    k = n(313961),
    P = n(617354),
    R = n(980923),
    D = n(206018),
    M = n(18235),
    L = n(183184),
    U = n(384059),
    B = n(480890),
    G = n(302223),
    F = n(379848),
    V = n(609425),
    H = n(922301),
    W = n(750112),
    K = n(643501),
    z = n(977700),
    q = n(74848),
    Q = n(449630),
    Y = n(111864),
    J = n(967054),
    X = n(226540),
    $ = n(227),
    Z = n(772786),
    ee = n(987237),
    et = n(967370),
    en = n(535731),
    ea = n(201805),
    el = n(655116),
    ei = n(454719),
    er = n(342296),
    es = n(780964),
    eo = n(77735),
    ec = n(840065),
    ed = n(167579),
    eu = n(173660),
    em = n(277342),
    ep = n(616356),
    eh = n(961350),
    ef = n(734057),
    ex = n(629016),
    eb = n(186111),
    eg = n(430452),
    ev = n(383501),
    ej = n(967198),
    ey = n(461213),
    e_ = n(485296),
    eA = n(351906),
    eC = n(287809),
    eS = n(166403),
    eO = n(954571),
    eE = n(486020),
    eN = n(957565),
    eT = n(203982),
    eI = n(927813),
    ew = n(403362),
    ek = n(562153),
    eP = n(536194),
    eR = n(427262),
    eD = n(837921),
    eM = n(299050),
    eL = n(42473),
    eU = n(994314),
    eB = n(485599),
    eG = n(809991),
    eF = n(652215),
    eV = n(49999),
    eH = n(654487),
    eW = n(731854),
    eK = n(985018),
    ez = n(146664);
function eq(e, t, n) {
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
                eq(e, t, n[t]);
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
let eJ = eD.Ay.getEnableHardwareAcceleration() ? h.JsQ : h.euF,
    eX = 2 * eI.A.Millis.MINUTE,
    e$ = 5 * eI.A.Millis.SECOND;
function eZ(e) {
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
        _ = l.useRef(null),
        A = null != t ? t : _,
        C = (0, eE.F_)({
            avatarDecoration: j,
            size: (0, T.Te)(h._3J.SIZE_32),
        }),
        S = (0, V.A)(),
        {
            updateOpenPopoutRef: O,
            highlightBadge: E,
            setHighlightBadge: N,
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
                (0, v.A)(() => r(!0), 750),
                l.useEffect(() => {
                    let t = (t) => {
                        var n;
                        let { highlightBadge: l } = t;
                        null != l && a(l), null == (n = e.current) || n.call(e);
                    };
                    return (
                        eT._.subscribe(eF.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t),
                        () => {
                            eT._.unsubscribe(eF.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t);
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
        I = (0, J.K)(f);
    if (null == c) return null;
    let w = g && b !== eF.YYv && b !== eF.ME && null != b ? b : void 0;
    return (0, a.jsx)(x.A, {
        object: eF.ZSU.AVATAR,
        children: (0, a.jsx)(er.A, {
            user: c,
            targetElementRef: A,
            clickTrap: !0,
            preload: () =>
                (0, ei.A)(c.id, c.getAvatarURL(w, er.S), {
                    type: "account_popout",
                    withMutualGuilds: !1,
                    withMutualFriends: !1,
                    guildId: w,
                }),
            renderPopout: (e, t) => {
                let { closePopout: n, setPopoutRef: l } = e;
                return (0, a.jsx)(Q.A, {
                    currentUser: c,
                    highlightBadge: E,
                    openedAt: t,
                    onClose: () => {
                        null == n || n();
                    },
                    setPopoutRef: l,
                    guildId: w,
                    guildProfileEnabled: g,
                });
            },
            position: "top",
            align: "left",
            animation: h.YNO.Animation.FADE,
            spacing: 14,
            fixed: !0,
            ignoreModalClicks: !0,
            onRequestClose: () => {
                m(), N(void 0);
            },
            children: (e) => (
                O(e),
                (0, a.jsxs)(
                    h.DUT,
                    eY(
                        eQ(
                            {
                                innerRef: A,
                                style: I,
                            },
                            e,
                        ),
                        {
                            onClick: (t) => {
                                var n;
                                null == (n = e.onClick) || n.call(e, t), null == u || u(t);
                            },
                            "aria-label": eK.intl.string(eK.t["3Uj+2p"]),
                            "data-jump-section": y,
                            className: r()(ez.R3, { [ez.ZQ]: null != f }),
                            children: [
                                (0, a.jsx)(eJ, {
                                    size: h._3J["SIZE_".concat(32)],
                                    src: c.getAvatarURL(g ? b : void 0, 28, !1),
                                    avatarDecoration: C,
                                    "aria-label": c.username,
                                    status: o ? eF.clD.STREAMING : d,
                                    isSpeaking: n,
                                    isLatched: i,
                                    voiceDb: s,
                                    className: ez.my,
                                }),
                                (0, a.jsx)("div", {
                                    className: r()(ez.oM, { [ez.K0]: eN.p5 }),
                                    children: p(S),
                                }),
                            ],
                        },
                    ),
                )
            ),
        }),
    });
}
class e0 extends l.PureComponent {
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
                eK.intl.string(eK.t.MSaeTe),
                eK.intl.string(eK.t.UmrCw7),
                eK.intl.string(eK.t.gKE0Jq),
                eK.intl.string(eK.t["4DSKbi"]),
                eK.intl.string(eK.t["+8ENdT"]),
                eK.intl.string(eK.t.GlWHv8),
                eK.intl.string(eK.t.hIzxU9),
                eK.intl.string(eK.t["26uMPL"]),
                eK.intl.string(eK.t.uFs7R2),
                eK.intl.string(eK.t.bLXdcY),
                eK.intl.string(eK.t.gPg9fS),
            ],
            n = Math.min(Math.max(0, e - 1), t.length - 1);
        return (0, a.jsx)(h.bfh, {
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
            (0, y.A)({
                activities: t,
                status: i,
                applicationStream: n,
                voiceChannel: s ? o : void 0,
            })
        )
            return (0, a.jsx)(C.A, {
                hoverText: r,
                forceHover: e,
                children: (0, a.jsx)(_.A, {
                    user: l,
                    activities: t,
                    applicationStream: n,
                    voiceChannel: s ? o : void 0,
                    textClassName: ez.XD,
                    hideTooltip: !0,
                }),
            });
        let c =
            null == t
                ? void 0
                : t.find((e) => {
                      let { type: t } = e;
                      return t === eF.$pd.CUSTOM_STATUS;
                  });
        return null != c
            ? (0, a.jsx)(C.A, {
                  hoverText: r,
                  forceHover: e,
                  children: (0, a.jsx)(G.A, {
                      activity: c,
                      emojiClassName: ez.Zg,
                      className: ez.WO,
                  }),
              })
            : null != i && i !== eF.clD.UNKNOWN && l.hasUniqueUsername()
              ? (0, a.jsx)(C.A, {
                    hoverText: r,
                    forceHover: e,
                    children: (0, a.jsx)(A.A, { text: eR.Ay.humanizeStatus(i) }),
                })
              : r;
    }
    renderAvatarWithPopout(e) {
        let {
            focusSectionProps: { "data-jump-section": t },
            onClick: n,
        } = e;
        return (0, a.jsx)(
            eZ,
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
        let { currentUser: n, dismissibleContents: l } = this.props;
        return null == n
            ? null
            : (0, a.jsx)(eG.A, {
                  guildId: null != (t = this.props.selectedGuildId) ? t : null,
                  currentUser: n,
                  targetElementRef: this.avatarWithPopoutRef,
                  additionalDCs: l.avatar,
                  children: this.renderAvatarWithPopout({ focusSectionProps: e }),
              });
    }
    render() {
        let { currentUser: e, nameplate: t, voiceChannel: n, isQuestBarEmpty: l, isListenAlongVisible: i } = this.props,
            s = this.state.hovered;
        return null == e
            ? null
            : (0, a.jsxs)(a.Fragment, {
                  children: [
                      (0, a.jsx)(h.skg, {
                          children: (e) =>
                              (0, a.jsxs)("div", {
                                  ref: this.containerRef,
                                  className: r()(ez.kL, {
                                      [ez.UG]: null != n,
                                      [ez.bc]: !l,
                                      [ez.G5]: i,
                                  }),
                                  onMouseEnter: this.handleMouseEnter,
                                  onMouseLeave: this.handleMouseLeave,
                                  children: [
                                      (0, a.jsx)($.A, {
                                          nameplate: t,
                                          hovered: s,
                                          placement: X.u.ACCOUNT,
                                      }),
                                      this.renderNameZone(e),
                                      (0, a.jsx)(
                                          e1,
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
                      (0, a.jsx)(z.A, {}),
                  ],
              });
    }
    constructor(...e) {
        super(...e),
            eq(this, "copiedTimeout", new u.Ep()),
            eq(this, "copiedDecayTimeout", new u.Ep()),
            eq(this, "speakingWhileMutedTooltipTimeout", new u.Ep()),
            eq(this, "lastSpeakingWhileMutedNotificationTime", void 0),
            eq(this, "state", {
                hovered: !1,
                copiedStreak: 0,
                shouldShowNametagTooltip: !1,
                shouldShowCopiedFeedback: !1,
                shouldShowSpeakingWhileMutedTooltip: !1,
                hoveringOnMute: !1,
            }),
            eq(this, "containerRef", l.createRef()),
            eq(this, "avatarWithPopoutRef", l.createRef()),
            eq(this, "handleToggleSelfMute", () => {
                let { serverMute: e, suppress: t, selfMute: n } = this.props;
                (0, L.A)(e, t, eF.JJy.ACCOUNT_PANEL), (0, U.X)(S.A.ACCOUNT, U.O.MIC, n);
            }),
            eq(this, "handleToggleSelfDeaf", () => {
                let { serverDeaf: e, selfDeaf: t } = this.props;
                (0, M.A)(e, eF.JJy.ACCOUNT_PANEL), (0, U.X)(S.A.ACCOUNT, U.O.DEAFEN, !t);
            }),
            eq(this, "handleOpenAccountSettings", () => {
                this.dismissTooltips(),
                    ev.A.isConnected()
                        ? (0, ec.openUserSettings)(es.X.VOICE_AND_VIDEO_PANEL, { section: eF.nc_.VOICE })
                        : (0, ec.openUserSettings)();
            }),
            eq(this, "handleOpenSettingsContextMenu", (e) => {
                let { currentUser: t } = this.props;
                null != t &&
                    (0, f.L3)(e, async () => {
                        let { default: e } = await n.e("95153").then(n.bind(n, 50120));
                        return (n) =>
                            (0, a.jsx)(
                                e,
                                eY(eQ({}, n), {
                                    user: t,
                                    premiumSubscription: this.props.premiumSubscription,
                                    webBuildOverride: this.props.webBuildOverride,
                                    onInteraction: (0, B.s)("UserSettingsCogContextMenu", S.A.ACCOUNT),
                                }),
                            );
                    });
            }),
            eq(this, "audioOnInteractionHandler", (0, B.s)("AudioDeviceMenu", S.A.ACCOUNT)),
            eq(this, "handleInputAudioContextMenu", (e, t) => {
                this.dismissTooltips(),
                    (0, f.L3)(e, async () => {
                        let { default: e } = await n.e("78827").then(n.bind(n, 385318));
                        return () => {
                            let { enabledInputProfiles: n } = (0, eo.d)({ location: "Account" });
                            return (0, a.jsx)(O.f5, {
                                value: t,
                                children: (0, a.jsx)(e, {
                                    onClose: f.Z_,
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
            eq(this, "handleOutputAudioContextMenu", (e, t) => {
                this.dismissTooltips(),
                    (0, f.L3)(e, async () => {
                        let { default: e } = await n.e("78827").then(n.bind(n, 385318));
                        return () =>
                            (0, a.jsx)(O.f5, {
                                value: t,
                                children: (0, a.jsx)(e, {
                                    onClose: f.Z_,
                                    renderOutputDevices: !0,
                                    renderOutputVolume: !0,
                                    minimal: !0,
                                    onInteraction: this.audioOnInteractionHandler,
                                }),
                            });
                    });
            }),
            eq(this, "handleMouseEnter", () => {
                this.setState({ hovered: !0 });
            }),
            eq(this, "handleMouseLeave", () => {
                this.setState({ hovered: !1 });
            }),
            eq(this, "handleMouseEnterMute", () => {
                this.setState({
                    hoveringOnMute: !0,
                    shouldShowSpeakingWhileMutedTooltip: !1,
                }),
                    this.speakingWhileMutedTooltipTimeout.stop();
            }),
            eq(this, "handleMouseLeaveMute", () => {
                this.setState({ hoveringOnMute: !1 });
            }),
            eq(this, "dismissSpeakingWhileMutedTooltip", () => {
                this.setState({ shouldShowSpeakingWhileMutedTooltip: !1 }),
                    this.speakingWhileMutedTooltipTimeout.stop();
            }),
            eq(this, "dismissTooltips", () => {
                var e, t, n, a;
                null == (e = (t = this.props).dismissInputDeviceChangedTooltip) || e.call(t),
                    null == (n = (a = this.props).dismissOutputDeviceChangedTooltip) || n.call(a),
                    this.dismissSpeakingWhileMutedTooltip();
            }),
            eq(this, "handleCopyTag", () => {
                let { currentUser: e } = this.props,
                    { shouldShowNametagTooltip: t, copiedStreak: n } = this.state;
                if (null == e) return;
                (0, eN.C)(
                    eR.Ay.getUserTag(e, {
                        decoration: "never",
                        identifiable: "always",
                    }),
                ),
                    eO.default.track(eF.HAw.TEXT_COPIED, { type: "User Tag" });
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
            eq(this, "handleOccludedChanged", () => {
                let { occluded: e } = this.props;
                e &&
                    this.setState({
                        shouldShowNametagTooltip: !1,
                        shouldShowSpeakingWhileMutedTooltip: !1,
                    });
            }),
            eq(this, "handleSpeakingWhileMutedChanged", () => {
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
                        Date.now() - this.lastSpeakingWhileMutedNotificationTime > eX;
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
            eq(this, "renderNameTag", (e) => {
                let { currentUser: t, username: n } = this.props;
                return null == t
                    ? null
                    : (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)("div", {
                                  className: ez.eW,
                                  children: (0, a.jsx)(eB.A, {
                                      className: r()({ [ez.e8]: null != e }),
                                      children: (0, a.jsx)(W.A, {
                                          userName: n,
                                          displayNameStyles: e,
                                          effectDisplayType: this.state.hovered ? H.G.ANIMATED : H.G.STATIC,
                                          loop: !0,
                                          inProfile: !0,
                                      }),
                                  }),
                              }),
                              (0, a.jsx)("div", {
                                  className: ez.XP,
                                  children: (0, a.jsx)(eU.A, { children: this.renderStatus() }),
                              }),
                          ],
                      });
            });
    }
}
function e1(e) {
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
            handleInputAudioContextMenu: f,
            handleOutputAudioContextMenu: x,
            handleOpenAccountSettings: b,
            handleOpenSettingsContextMenu: g,
            dismissibleContents: v,
            nameplate: j,
            accountContainerRef: y,
            shouldShowInputDeviceChangedTooltip: _ = !1,
            shouldShowOutputDeviceChangedTooltip: A = !1,
            dismissTooltips: C,
        } = e,
        S = (0, J.K)(j);
    return (0, a.jsxs)("div", {
        className: ez.Uo,
        style: S,
        children: [
            (0, a.jsx)(e7, {
                accountContainerRef: y,
                selfMute: n,
                serverMute: i,
                suppress: s,
                awaitingRemote: l,
                onMouseEnter: u,
                onMouseLeave: m,
                onClick: h,
                onContextMenu: f,
                iconForeground: null != j ? ez.t4 : void 0,
                nameplate: j,
                shouldShowInputDeviceChangedTooltip: _,
                shouldShowSpeakingWhileMutedTooltip: o,
                dismissTooltips: C,
            }),
            (0, a.jsx)(e8, {
                selfDeaf: t,
                serverDeaf: r,
                onClick: p,
                onContextMenu: x,
                awaitingRemote: l,
                iconForeground: null != j ? ez.t4 : void 0,
                nameplate: j,
                shouldShowOutputDeviceChangedTooltip: A,
                dismissTooltips: C,
            }),
            (0, a.jsx)(e2, {
                isEligibleForPomelo: c,
                webBuildOverride: d,
                onClick: b,
                onContextMenu: g,
                dismissibleContents: v.settings,
                iconForeground: null != j ? ez.t4 : void 0,
                nameplate: j,
                shouldShowInputDeviceChangedTooltip: _,
                shouldShowOutputDeviceChangedTooltip: A,
            }),
        ],
    });
}
function e6(e) {
    let t = (0, c.bG)([ev.A], () => null != ev.A.getChannelId()),
        n = (0, q.Py)(e),
        a = l.useRef(new u.Ep()),
        [i, r] = l.useState(!1);
    l.useEffect(() => {
        t &&
            n &&
            (r(!0),
            a.current.start(e$, () => {
                r(!1);
            }));
    }, [t, n]);
    let s = l.useCallback(() => {
        r(!1), a.current.stop();
    }, []);
    return (
        (0, g.l0)(() => {
            a.current.stop();
        }),
        {
            shouldShowTooltip: i,
            dismissTooltip: s,
        }
    );
}
function e9() {
    var e;
    let t = (0, c.bG)([eC.default], () => eC.default.getCurrentUser()),
        n = (0, c.bG)([eh.default], () => eh.default.getId()),
        l = eM.X.useConfig({ location: "AccountConnected" }).transitionAccountPanel,
        {
            activities: i,
            streaming: r,
            status: s,
        } = (0, c.cf)([ey.A], () => {
            let e = ey.A.getActivities();
            return {
                activities: e,
                streaming:
                    null !=
                    e.find((e) => {
                        let { type: t } = e;
                        return t === eF.$pd.STREAMING;
                    }),
                status: ey.A.getStatus(),
            };
        }),
        u = (0, c.bG)([ep.A], () => ep.A.getAnyStreamForUser(n)),
        m = (0, b.A)({ userId: n }),
        p = (0, c.bG)([e_.A], () => e_.A.isCurrentUserPTTLatched()),
        f = (0, c.bG)([e_.A], () => e_.A.getVoiceVolume(n)),
        x = eR.Ay.useUserTag(t, { decoration: "never" }),
        g = (0, c.bG)([eA.A], () => eA.A.hidePersonalInformation),
        v = (0, c.bG)([ev.A, ef.A], () => {
            let e = ev.A.getChannelId();
            return null != e ? ef.A.getChannel(e) : null;
        }),
        { mute: y, selfMute: _, suppress: A } = (0, eu.A)(v),
        { selfDeaf: C, deaf: T } = (0, ed.A)(v),
        P = (0, c.bG)([I.A], () => {
            var e;
            return (0, w.kK)()
                ? null == (e = I.A.getCurrentBuildOverride().overrides)
                    ? void 0
                    : e.discord_web
                : null;
        }),
        R = (0, c.bG)([eS.A], () => eS.A.getPremiumTypeSubscription()),
        D = (0, c.bG)([eg.A], () => eg.A.getSpeakingWhileMuted()),
        M = (0, c.bG)([k.A], () => k.A.isFullscreenInContext()),
        L = (0, c.bG)([eb.A], () => eb.A.hasLayers()),
        U = (0, h.red)(h.DXt) || L || eP.P.isDisallowPopupsSet() || M,
        B = (0, Z.g)(),
        G = (0, c.bG)([K.default], () => null != K.default.getAwaitingRemoteSessionInfo()),
        F = (0, c.bG)([ej.A], () => ej.A.getGuildId()),
        V = null == t ? void 0 : t.avatarDecoration,
        H = (0, E.Z)(t, null != F ? F : void 0),
        W = (0, N.A)(l ? H : V),
        z = ek.Ay.useName(null != F ? F : void 0, null, t),
        q = null != (e = eR.Ay.useName(t)) ? e : "",
        { voiceActivityStatusEnabled: Q } = (0, j.G)({ location: "Account" }),
        J = (0, ee.C)(t, "Account"),
        X = et.S.useConfig({ location: "Account" }).enabled,
        { analyticsLocations: $ } = (0, O.Ay)(S.A.ACCOUNT),
        en = (0, Y.r)({
            user: t,
            guildId: l && null != F ? F : void 0,
        }),
        { isQuestBarEmpty: ei, hasLoadedQuestBar: er } = (0, ea.c9)({ location: eH.rE.CONFLICT_CHECKS }),
        es = (0, c.bG)([el.A, eC.default, ex.A], () => {
            let e,
                t = el.A.getSyncingWith(),
                n = el.A.getActivity(),
                a = [];
            if (
                (null != t ? (e = t.partyId) : null != n && null != n.party && null != n.party.id && (e = n.party.id),
                null != e)
            ) {
                var l;
                a = o()(Array.from(null != (l = ex.A.getParty(e)) ? l : []))
                    .map((e) => eC.default.getUser(e))
                    .filter(ew.Vq)
                    .value();
            }
            return a.length > 1;
        }),
        eo = {
            avatar: [],
            settings: [],
        };
    !U &&
        (eo.avatar.push(d.M.DISPLAY_NAME_STYLES_COACHMARK),
        J && eo.avatar.push(d.M.TENURE_BADGE_CHURN_REMINDER),
        eo.avatar.push(d.M.WIDGETS_RTC_UPSELL_COACHMARK),
        X && eo.settings.push(d.M.NITRO_PRIVACY_PERK_BETA_COACHMARK));
    let { shouldShowTooltip: ec, dismissTooltip: em } = e6(eW.oh.AUDIO_INPUT),
        { shouldShowTooltip: eO, dismissTooltip: eE } = e6(eW.oh.AUDIO_OUTPUT);
    return (0, a.jsx)(O.f5, {
        value: $,
        children: (0, a.jsx)(e0, {
            currentUser: t,
            username: l ? z : q,
            transitionAccountPanel: l,
            activities: i,
            applicationStream: u,
            voiceChannel: v,
            dismissibleContents: eo,
            userTag: x,
            hidePrivateData: g,
            occluded: U,
            premiumSubscription: R,
            selfDeaf: C,
            selfMute: _,
            serverDeaf: T,
            serverMute: y,
            speaking: m,
            voiceDb: f,
            speakingWhileMuted: D,
            latched: p && null != v,
            status: s,
            streaming: r,
            suppress: A,
            webBuildOverride: P,
            awaitingRemote: G,
            isEligibleForPomelo: B,
            voiceActivityStatusEnabled: Q,
            nameplate: en,
            selectedGuildId: F,
            avatarDecoration: W,
            isQuestBarEmpty: ei,
            hasLoadedQuestBar: er,
            isListenAlongVisible: es,
            shouldShowInputDeviceChangedTooltip: ec,
            shouldShowOutputDeviceChangedTooltip: eO,
            dismissInputDeviceChangedTooltip: em,
            dismissOutputDeviceChangedTooltip: eE,
        }),
    });
}
function e2(e) {
    let t,
        n,
        {
            webBuildOverride: i,
            isEligibleForPomelo: r,
            onClick: s,
            onContextMenu: o,
            dismissibleContents: c,
            iconForeground: u,
            nameplate: m,
        } = e,
        f = l.useRef(null);
    t = null != i ? eK.intl.formatToPlainString(eK.t.Gzh6ZP, { webBuildOverride: i.id }) : eK.intl.string(eK.t.cduTBL);
    let x = h.Zes,
        b = (0, p.w)();
    return (
        (x = null != i ? h.Hnu : r ? h.vJI : b.Component),
        (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(
                    eL.A,
                    eY(
                        eQ(
                            {
                                ref: f,
                                tooltipText: t,
                                tooltipPositionKey: n,
                                onClick: s,
                                onContextMenu: o,
                                "aria-label": eK.intl.string(eK.t.cduTBL),
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
                (0, a.jsx)(F.Ay, {
                    contentTypes: c,
                    groupName: eV.m.ACCOUNT_NAME_ZONE,
                    children: (e) => {
                        let { visibleContent: t, markAsDismissed: n } = e;
                        if (t === d.M.NITRO_PRIVACY_PERK_BETA_COACHMARK)
                            return (0, a.jsx)(en.y, {
                                targetElementRef: f,
                                markAsDismissed: n,
                            });
                    },
                }),
            ],
        })
    );
}
function e7(e) {
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
        g = l.useRef(null),
        { Component: v, events: j, play: y } = (0, em.q)(b),
        _ = n || i ? h.O1p : v,
        A = p
            ? {
                  tooltipType: "green_void_do_not_use",
                  tooltipText: eK.intl.string(eK.t["29gnR4"]),
                  tooltipForceOpen: !0,
              }
            : { tooltipText: (0, R.A)(t, n, i, s) },
        { analyticsLocations: C } = (0, O.Ay)(S.A.AUDIO_INPUT_BUTTON);
    l.useEffect(() => () => y(), [b, y]);
    let E = b ? h.LU0.colors.ICON_VOICE_MUTED : "currentColor",
        { name: N } = (0, q.x5)(eW.oh.AUDIO_INPUT),
        { enabledInputProfiles: T } = (0, eo.d)({ location: "MicrophoneButton" });
    return (0, a.jsx)(O.f5, {
        value: C,
        children: (0, a.jsx)(h.YNO, {
            targetElementRef: g,
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (
                    x(),
                    (0, a.jsx)(O.f5, {
                        value: C,
                        children: (0, a.jsx)(D.A, {
                            onInteraction: (0, B.s)("AudioDeviceMenu", S.A.ACCOUNT),
                            onClose: t,
                            maybeRenderPTTCheckbox: !0,
                            renderInputProfiles: T.length > 0,
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
            animation: h.YNO.Animation.FADE,
            spacing: 4,
            children: (e, t) => {
                let { onClick: n } = e,
                    { isShown: l } = t,
                    i = l ? h.tN5 : h.abt;
                return (0, a.jsxs)("div", {
                    ref: g,
                    className: r()(ez.WU, {
                        [ez.v8]: b,
                        [ez.q6]: l,
                    }),
                    children: [
                        (0, a.jsx)(
                            eL.A,
                            eQ(
                                {
                                    "aria-checked": b,
                                    "aria-label": eK.intl.string(eK.t.w4m945),
                                    className: ez.$o,
                                    disabled: s,
                                    icon: (0, a.jsx)(_, {
                                        size: "custom",
                                        width: 20,
                                        height: 20,
                                        color: E,
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
                                A,
                            ),
                        ),
                        (0, a.jsx)(eL.A, {
                            "aria-label": f
                                ? eK.intl.formatToPlainString(eK.t["18wnuD"], { inputDeviceName: N })
                                : eK.intl.string(eK.t.fRzCbB),
                            className: r()(ez.UT, { [ez.q6]: l }),
                            disabled: s,
                            icon: (0, a.jsx)(i, {
                                className: ez.$$,
                                size: "custom",
                                width: 12,
                                height: 12,
                                color: E,
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
                                ? eK.intl.formatToPlainString(eK.t["18wnuD"], { inputDeviceName: N })
                                : void 0,
                            tooltipShouldShow: !l,
                            tooltipText: f
                                ? eK.intl.format(eK.t["18wnuD"], { inputDeviceName: N })
                                : eK.intl.string(eK.t.fRzCbB),
                        }),
                    ],
                });
            },
        }),
    });
}
function e8(e) {
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
        } = (0, m.I)(p ? "undeafen" : "deafen"),
        v = n ? h.TJE : f,
        { name: j } = (0, q.x5)(eW.oh.AUDIO_OUTPUT),
        y = (0, P.A)(t, n, i),
        { analyticsLocations: _ } = (0, O.Ay)(S.A.AUDIO_OUTPUT_BUTTON),
        A = l.useRef(null);
    return (
        l.useEffect(() => () => x(), [p, x]),
        (0, a.jsx)(O.f5, {
            value: _,
            children: (0, a.jsx)(h.YNO, {
                targetElementRef: A,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (
                        u(),
                        (0, a.jsx)(O.f5, {
                            value: _,
                            children: (0, a.jsx)(D.A, {
                                onInteraction: (0, B.s)("AudioDeviceMenu", S.A.ACCOUNT),
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
                animation: h.YNO.Animation.FADE,
                spacing: 4,
                children: (e, t) => {
                    let { onClick: l } = e,
                        { isShown: u } = t,
                        m = u ? h.tN5 : h.abt;
                    return (0, a.jsxs)("div", {
                        ref: A,
                        className: r()(ez.WU, {
                            [ez.v8]: p,
                            [ez.q6]: u,
                        }),
                        children: [
                            (0, a.jsx)(eL.A, {
                                "aria-checked": p,
                                "aria-label": eK.intl.string(eK.t.wjcRFX),
                                className: ez.$o,
                                disabled: i,
                                icon: (0, a.jsx)(v, {
                                    size: "custom",
                                    width: 20,
                                    height: 20,
                                    color: p ? h.LU0.colors.ICON_VOICE_MUTED : "currentColor",
                                    className: o,
                                }),
                                iconForeground: p ? ez.of : void 0,
                                innerClassName: r()({ [ez.T3]: n }),
                                onClick: s,
                                onContextMenu: l,
                                onMouseEnter: b,
                                onMouseLeave: g,
                                plated: null != c,
                                redGlow: p,
                                role: "switch",
                                tooltipText: y,
                            }),
                            (0, a.jsx)(eL.A, {
                                className: r()(ez.UT, { [ez.q6]: u }),
                                disabled: i,
                                icon: (0, a.jsx)(m, {
                                    className: ez.$$,
                                    size: "custom",
                                    width: 12,
                                    height: 12,
                                    color: p ? h.LU0.colors.ICON_VOICE_MUTED : "currentColor",
                                }),
                                onClick: l,
                                onContextMenu: l,
                                plated: null != c,
                                redGlow: p,
                                tooltipType: d ? "green_void_do_not_use" : void 0,
                                tooltipForceOpen: d,
                                tooltipPositionKey: d
                                    ? eK.intl.formatToPlainString(eK.t["f+DDY/"], { outputDeviceName: j })
                                    : void 0,
                                tooltipShouldShow: !u,
                                tooltipText: d
                                    ? eK.intl.format(eK.t["f+DDY/"], { outputDeviceName: j })
                                    : eK.intl.string(eK.t.aA4Vce),
                                "aria-label": d
                                    ? eK.intl.formatToPlainString(eK.t["f+DDY/"], { outputDeviceName: j })
                                    : eK.intl.string(eK.t.aA4Vce),
                            }),
                        ],
                    });
                },
            }),
        })
    );
}
