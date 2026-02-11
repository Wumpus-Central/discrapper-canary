n.d(t, { A: () => e7, g: () => eZ }), n(321073);
var a = n(627968),
    s = n(64700),
    i = n(503698),
    l = n.n(i),
    r = n(735438),
    o = n.n(r),
    d = n(158390),
    c = n(311907),
    u = n(554146),
    m = n(451988),
    h = n(348858),
    x = n(505312),
    p = n(397927),
    g = n(442433),
    f = n(820284),
    _ = n(717558),
    v = n(964486),
    b = n(220839),
    j = n(901517),
    A = n(397244),
    C = n(729551),
    S = n(755039),
    T = n(29160),
    y = n(793574),
    N = n(688810),
    E = n(325445),
    I = n(954921),
    k = n(521502),
    R = n(380610),
    O = n(313961),
    w = n(617354),
    D = n(980923),
    M = n(206018),
    P = n(18235),
    L = n(183184),
    U = n(384059),
    B = n(480890),
    G = n(302223),
    F = n(379848),
    V = n(609425),
    W = n(922301),
    H = n(750112),
    K = n(643501),
    z = n(977700),
    $ = n(74848),
    q = n(449630),
    Q = n(111864),
    Y = n(967054),
    J = n(226540),
    X = n(227),
    Z = n(772786),
    ee = n(134991),
    et = n(967370),
    en = n(535731),
    ea = n(201805),
    es = n(655116),
    ei = n(454719),
    el = n(342296),
    er = n(780964),
    eo = n(77735),
    ed = n(840065),
    ec = n(167579),
    eu = n(173660),
    em = n(340913),
    eh = n(41580),
    ex = n(935101),
    ep = n(277342),
    eg = n(616356),
    ef = n(961350),
    e_ = n(734057),
    ev = n(629016),
    eb = n(186111),
    ej = n(430452),
    eA = n(383501),
    eC = n(967198),
    eS = n(461213),
    eT = n(485296),
    ey = n(351906),
    eN = n(287809),
    eE = n(166403),
    eI = n(486020),
    ek = n(203982),
    eR = n(927813),
    eO = n(403362),
    ew = n(536194),
    eD = n(427262),
    eM = n(837921),
    eP = n(350535),
    eL = n(42473),
    eU = n(994314),
    eB = n(485599),
    eG = n(809991),
    eF = n(652215),
    eV = n(49999),
    eW = n(654487),
    eH = n(731854),
    eK = n(985018),
    ez = n(146664);
let e$ = eM.Ay.getEnableHardwareAcceleration() ? p.JsQ : p.euF,
    eq = 2.5 * eR.A.Millis.SECOND,
    eQ = 2 * eR.A.Millis.MINUTE,
    eY = 2 * eR.A.Millis.MINUTE,
    eJ = 5 * eR.A.Millis.SECOND;
function eX(e) {
    let {
            ref: t,
            speaking: n,
            latched: i,
            voiceDb: r = -1 / 0,
            streaming: o,
            currentUser: d,
            status: c,
            handleClick: u,
            handleMouseLeave: m,
            renderNameTag: h,
            nameplate: x,
            avatarDecoration: g,
            "data-jump-section": _,
        } = e,
        v = s.useRef(null),
        j = t ?? v,
        A = (0, eI.F_)({ avatarDecoration: g, size: (0, I.Te)(p._3J.SIZE_32) }),
        C = (0, V.A)(),
        {
            updateOpenPopoutRef: S,
            highlightBadge: T,
            setHighlightBadge: y,
        } = (function () {
            let e = s.useRef(null),
                t = s.useCallback((t) => {
                    e.current = () => {
                        t.onMouseDown(), t.onClick();
                    };
                }, []),
                [n, a] = s.useState(),
                [i, l] = s.useState(!1);
            return (
                (0, b.A)(() => l(!0), 750),
                s.useEffect(() => {
                    let t = (t) => {
                        let { highlightBadge: n } = t;
                        null != n && a(n), e.current?.();
                    };
                    return (
                        ek._.subscribe(eF.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t),
                        () => {
                            ek._.unsubscribe(eF.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t);
                        }
                    );
                }),
                { updateOpenPopoutRef: t, highlightBadge: i ? n : void 0, setHighlightBadge: a }
            );
        })(),
        N = (0, Y.K)(x);
    return null == d
        ? null
        : (0, a.jsx)(f.A, {
              object: eF.ZSU.AVATAR,
              children: (0, a.jsx)(el.A, {
                  user: d,
                  targetElementRef: j,
                  clickTrap: !0,
                  preload: () =>
                      (0, ei.A)(d.id, d.getAvatarURL(void 0, el.S), {
                          type: "account_popout",
                          withMutualGuilds: !1,
                          withMutualFriends: !1,
                          guildId: void 0,
                      }),
                  renderPopout: (e, t) => {
                      let { closePopout: n, setPopoutRef: s } = e;
                      return (0, a.jsx)(q.A, {
                          currentUser: d,
                          highlightBadge: T,
                          openedAt: t,
                          onClose: () => {
                              n?.();
                          },
                          setPopoutRef: s,
                          className: ez.dI,
                      });
                  },
                  position: "top",
                  align: "left",
                  animation: p.YNO.Animation.FADE,
                  spacing: 14,
                  fixed: !0,
                  ignoreModalClicks: !0,
                  onRequestClose: () => {
                      m(), y(void 0);
                  },
                  children: (e) => {
                      S(e);
                      let { onMouseEnter: t, onMouseDown: s, ...m } = e;
                      return (0, a.jsxs)("div", {
                          ref: j,
                          style: N,
                          onMouseEnter: t,
                          onMouseDown: s,
                          onClick: (t) => {
                              e.onClick?.(t), u?.(t);
                          },
                          className: l()(ez.Q9, { [ez.ZQ]: null != x }),
                          children: [
                              (0, a.jsx)(p.DUT, {
                                  ...m,
                                  onClick: (t) => {
                                      t.stopPropagation(), e.onClick?.(t), u?.(t);
                                  },
                                  "aria-label": eK.intl.string(eK.t["5fWB8U"]),
                                  focusProps: { ringTarget: j },
                                  className: ez.$n,
                                  "data-jump-section": _,
                              }),
                              (0, a.jsx)(e$, {
                                  size: p._3J.SIZE_32,
                                  src: d.getAvatarURL(void 0, 28, !1),
                                  avatarDecoration: A,
                                  status: o ? eF.clD.STREAMING : c,
                                  isSpeaking: n,
                                  isLatched: i,
                                  voiceDb: r,
                                  className: ez.my,
                                  "aria-hidden": !0,
                              }),
                              (0, a.jsx)("div", { className: ez.oM, children: h(C) }),
                          ],
                      });
                  },
              }),
          });
}
class eZ extends s.PureComponent {
    speakingWhileMutedTooltipTimeout = new m.Ep();
    speakingWhilePTTTooltipTimeout = new m.Ep();
    speakingWhilePTTInactiveBackoff = new d.A(eY, null, !1);
    lastSpeakingWhileMutedNotificationTime = void 0;
    lastSpeakingWhilePTTNotificationTime = void 0;
    state = {
        hovered: !1,
        shouldShowNametagTooltip: !1,
        shouldShowSpeakingWhileMutedTooltip: !1,
        shouldShowSpeakingWhilePTTTooltip: !1,
        hoveringOnMute: !1,
    };
    containerRef = s.createRef();
    avatarWithPopoutRef = s.createRef();
    componentDidUpdate(e) {
        let { speakingWhileMuted: t, speakingWhilePTTInactive: n, occluded: a } = e,
            { speakingWhileMuted: s, occluded: i, speakingWhilePTTInactive: l } = this.props;
        i !== a && this.handleOccludedChanged(),
            s !== t && this.handleSpeakingWhileMutedChanged(),
            l !== n && this.handleSpeakingWhilePTTChanged();
    }
    componentWillUnmount() {
        this.speakingWhileMutedTooltipTimeout.stop(), this.speakingWhilePTTTooltipTimeout.stop();
    }
    handleToggleSelfMute = () => {
        let { serverMute: e, suppress: t, selfMute: n } = this.props;
        (0, L.A)(e, t, eF.JJy.ACCOUNT_PANEL), (0, U.X)(y.A.ACCOUNT, U.O.MIC, n);
    };
    handleToggleSelfDeaf = () => {
        let { serverDeaf: e, selfDeaf: t } = this.props;
        (0, P.A)(e, eF.JJy.ACCOUNT_PANEL), (0, U.X)(y.A.ACCOUNT, U.O.DEAFEN, !t);
    };
    handleOpenAccountSettings = () => {
        this.dismissTooltips(),
            eA.A.isConnected()
                ? (0, ed.openUserSettings)(er.X.VOICE_AND_VIDEO_PANEL, { section: eF.nc_.VOICE })
                : (0, ed.openUserSettings)();
    };
    handleOpenSettingsContextMenu = (e) => {
        let { currentUser: t } = this.props;
        null != t &&
            (0, g.L3)(e, async () => {
                let { default: e } = await n.e("95153").then(n.bind(n, 50120));
                return (n) =>
                    (0, a.jsx)(e, {
                        ...n,
                        user: t,
                        premiumSubscription: this.props.premiumSubscription,
                        webBuildOverride: this.props.webBuildOverride,
                        onInteraction: (0, B.s)("UserSettingsCogContextMenu", y.A.ACCOUNT),
                    });
            });
    };
    audioOnInteractionHandler = (0, B.s)("AudioDeviceMenu", y.A.ACCOUNT);
    handleInputAudioContextMenu = (e, t) => {
        this.dismissTooltips(),
            (0, g.L3)(e, async () => {
                let { default: e } = await n.e("78827").then(n.bind(n, 385318));
                return () => {
                    let { enabledInputProfiles: n } = (0, eo.d)({ location: "Account" });
                    return (0, a.jsx)(N.f5, {
                        value: t,
                        children: (0, a.jsx)(e, {
                            onClose: g.Z_,
                            renderInputDevices: !0,
                            renderInputProfiles: n.length > 0,
                            renderInputVolume: !0,
                            minimal: !0,
                            onInteraction: this.audioOnInteractionHandler,
                        }),
                    });
                };
            });
    };
    handleOutputAudioContextMenu = (e, t) => {
        this.dismissTooltips(),
            (0, g.L3)(e, async () => {
                let { default: e } = await n.e("78827").then(n.bind(n, 385318));
                return () =>
                    (0, a.jsx)(N.f5, {
                        value: t,
                        children: (0, a.jsx)(e, {
                            onClose: g.Z_,
                            renderOutputDevices: !0,
                            renderOutputVolume: !0,
                            minimal: !0,
                            onInteraction: this.audioOnInteractionHandler,
                        }),
                    });
            });
    };
    handleMouseEnter = () => {
        this.setState({ hovered: !0 });
    };
    handleMouseLeave = () => {
        this.setState({ hovered: !1 });
    };
    handleMouseEnterMute = () => {
        this.setState({
            hoveringOnMute: !0,
            shouldShowSpeakingWhileMutedTooltip: !1,
            shouldShowSpeakingWhilePTTTooltip: !1,
        }),
            this.speakingWhileMutedTooltipTimeout.stop(),
            this.speakingWhilePTTTooltipTimeout.stop();
    };
    handleMouseLeaveMute = () => {
        this.setState({ hoveringOnMute: !1 });
    };
    dismissSpeakingWhileMutedTooltip = () => {
        this.setState({ shouldShowSpeakingWhileMutedTooltip: !1 }), this.speakingWhileMutedTooltipTimeout.stop();
    };
    dismissSpeakingWhilePTTTooltip = () => {
        this.setState({ shouldShowSpeakingWhilePTTTooltip: !1 }), this.speakingWhilePTTTooltipTimeout.stop();
    };
    dismissTooltips = () => {
        this.props.onDismissDeviceChangedTooltip?.(),
            this.props.dismissPTTJoinTooltip?.(),
            this.dismissSpeakingWhileMutedTooltip(),
            this.dismissSpeakingWhilePTTTooltip();
    };
    handleOccludedChanged = () => {
        let { occluded: e } = this.props;
        e &&
            this.setState({
                shouldShowNametagTooltip: !1,
                shouldShowSpeakingWhileMutedTooltip: !1,
                shouldShowSpeakingWhilePTTTooltip: !1,
            });
    };
    handleSpeakingWhileMutedChanged = () => {
        let {
                selfMute: e,
                serverMute: t,
                suppress: n,
                speakingWhileMuted: a,
                occluded: s,
                shouldShowPTTJoinTooltip: i,
                deviceChangedTooltipType: l,
            } = this.props,
            { hoveringOnMute: r } = this.state,
            o =
                void 0 === this.lastSpeakingWhileMutedNotificationTime ||
                performance.now() - this.lastSpeakingWhileMutedNotificationTime > eQ;
        a
            ? r ||
              !e ||
              t ||
              n ||
              s ||
              !o ||
              null != l ||
              i ||
              this.setState({ shouldShowSpeakingWhileMutedTooltip: !0 }, () => {
                  (this.lastSpeakingWhileMutedNotificationTime = performance.now()),
                      this.speakingWhileMutedTooltipTimeout.start(eq, () =>
                          this.setState({ shouldShowSpeakingWhileMutedTooltip: !1 }),
                      );
              })
            : (this.setState({ shouldShowSpeakingWhileMutedTooltip: !1 }),
              this.speakingWhileMutedTooltipTimeout.stop());
    };
    handleSpeakingWhilePTTChanged = () => {
        let {
                selfMute: e,
                serverMute: t,
                suppress: n,
                speakingWhilePTTInactive: a,
                occluded: s,
                shouldShowPTTJoinTooltip: i,
                deviceChangedTooltipType: l,
            } = this.props,
            { hoveringOnMute: r } = this.state,
            o =
                void 0 === this.lastSpeakingWhilePTTNotificationTime ||
                performance.now() - this.lastSpeakingWhilePTTNotificationTime >
                    this.speakingWhilePTTInactiveBackoff.current;
        a
            ? r ||
              e ||
              t ||
              n ||
              s ||
              !o ||
              null != l ||
              i ||
              this.setState({ shouldShowSpeakingWhilePTTTooltip: !0 }, () => {
                  (this.lastSpeakingWhilePTTNotificationTime = performance.now()),
                      this.speakingWhilePTTInactiveBackoff.fail(),
                      this.speakingWhilePTTTooltipTimeout.start(eq, () =>
                          this.setState({ shouldShowSpeakingWhilePTTTooltip: !1 }),
                      );
              })
            : (this.setState({ shouldShowSpeakingWhilePTTTooltip: !1 }), this.speakingWhilePTTTooltipTimeout.stop());
    };
    renderStatus() {
        let { hovered: e } = this.state,
            {
                activities: t,
                applicationStream: n,
                currentUser: s,
                status: i,
                userTag: l,
                voiceActivityStatusEnabled: r,
                voiceChannel: o,
            } = this.props;
        if (null == s) return null;
        if ((0, A.A)({ activities: t, status: i, applicationStream: n, voiceChannel: r ? o : void 0 }))
            return (0, a.jsxs)(T.A, {
                hoverText: l,
                forceHover: e,
                children: [
                    (0, a.jsx)(p.AC4, { children: eD.Ay.humanizeStatus(i) }),
                    (0, a.jsx)(C.A, {
                        user: s,
                        activities: t,
                        applicationStream: n,
                        voiceChannel: r ? o : void 0,
                        textClassName: ez.XD,
                        hideTooltip: !0,
                    }),
                ],
            });
        let d = t?.find((e) => {
            let { type: t } = e;
            return t === eF.$pd.CUSTOM_STATUS;
        });
        return null != d
            ? (0, a.jsxs)(T.A, {
                  hoverText: l,
                  forceHover: e,
                  children: [
                      (0, a.jsx)(p.AC4, { children: eD.Ay.humanizeStatus(i) }),
                      (0, a.jsx)(G.A, { activity: d, emojiClassName: ez.Zg, className: ez.WO }),
                  ],
              })
            : null != i && i !== eF.clD.UNKNOWN && s.hasUniqueUsername()
              ? (0, a.jsx)(T.A, {
                    hoverText: l,
                    forceHover: e,
                    children: (0, a.jsx)(S.A, { text: eD.Ay.humanizeStatus(i) }),
                })
              : l;
    }
    renderNameTag = (e) => {
        let { currentUser: t, username: n } = this.props;
        return null == t
            ? null
            : (0, a.jsxs)(a.Fragment, {
                  children: [
                      (0, a.jsx)("div", {
                          className: ez.eW,
                          children: (0, a.jsx)(eB.A, {
                              className: l()({ [ez.e8]: null != e }),
                              children: (0, a.jsx)(H.A, {
                                  userName: n,
                                  displayNameStyles: e,
                                  effectDisplayType: this.state.hovered ? W.G.ANIMATED : W.G.STATIC,
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
    };
    renderAvatarWithPopout(e) {
        let {
            focusSectionProps: { "data-jump-section": t },
            onClick: n,
        } = e;
        return (0, a.jsx)(eX, {
            ...this.props,
            ref: this.avatarWithPopoutRef,
            handleClick: n,
            handleMouseLeave: this.handleMouseLeave,
            renderNameTag: this.renderNameTag,
            "data-jump-section": t,
        });
    }
    renderNameZone(e) {
        let { currentUser: t, dismissibleContents: n } = this.props;
        return null == t
            ? null
            : (0, a.jsx)(eG.A, {
                  guildId: this.props.selectedGuildId ?? null,
                  currentUser: t,
                  targetElementRef: this.avatarWithPopoutRef,
                  additionalDCs: n.avatar,
                  children: this.renderAvatarWithPopout({ focusSectionProps: e }),
              });
    }
    render() {
        let { currentUser: e, nameplate: t, voiceChannel: n, isQuestBarEmpty: s, isListenAlongVisible: i } = this.props,
            r = this.state.hovered;
        return null == e
            ? null
            : (0, a.jsxs)(a.Fragment, {
                  children: [
                      (0, a.jsx)(p.skg, {
                          children: (e) =>
                              (0, a.jsxs)("div", {
                                  ref: this.containerRef,
                                  className: l()(ez.kL, { [ez.UG]: null != n, [ez.bc]: !s, [ez.G5]: i }),
                                  onMouseEnter: this.handleMouseEnter,
                                  onMouseLeave: this.handleMouseLeave,
                                  children: [
                                      (0, a.jsx)(X.A, { nameplate: t, hovered: r, placement: J.u.ACCOUNT }),
                                      this.renderNameZone(e),
                                      (0, a.jsx)(e0, {
                                          ...this.props,
                                          ...this.state,
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
                                  ],
                              }),
                      }),
                      (0, a.jsx)(z.A, {}),
                  ],
              });
    }
}
function e0(e) {
    let {
            selfDeaf: t,
            selfMute: n,
            awaitingRemote: s,
            serverMute: i,
            serverDeaf: l,
            suppress: r,
            shouldShowSpeakingWhileMutedTooltip: o,
            shouldShowSpeakingWhilePTTTooltip: d,
            isEligibleForPomelo: c,
            webBuildOverride: u,
            handleMouseEnterMute: m,
            handleMouseLeaveMute: h,
            handleToggleSelfDeaf: x,
            handleToggleSelfMute: p,
            handleInputAudioContextMenu: g,
            handleOutputAudioContextMenu: f,
            handleOpenAccountSettings: _,
            handleOpenSettingsContextMenu: v,
            dismissibleContents: b,
            nameplate: j,
            accountContainerRef: A,
            deviceChangedTooltipType: C,
            shouldShowPTTJoinTooltip: S = !1,
            dismissTooltips: T,
            speaking: y,
            latched: N,
        } = e,
        E = (0, Y.K)(j);
    return (0, a.jsxs)("div", {
        className: ez.Uo,
        style: E,
        children: [
            (0, a.jsx)(e2, {
                accountContainerRef: A,
                selfMute: n,
                serverMute: i,
                suppress: r,
                awaitingRemote: s,
                onMouseEnter: m,
                onMouseLeave: h,
                onClick: p,
                onContextMenu: g,
                iconForeground: null != j ? ez.t4 : void 0,
                nameplate: j,
                shouldShowSpeakingWhileMutedTooltip: o,
                shouldShowInputDeviceChangedTooltip: !o && "input" === C,
                shouldShowSpeakingWhilePTTTooltip: d,
                shouldShowPTTJoinTooltip: S,
                dismissTooltips: T,
                speaking: y,
                latched: N,
            }),
            (0, a.jsx)(e6, {
                selfDeaf: t,
                serverDeaf: l,
                onClick: x,
                onContextMenu: f,
                awaitingRemote: s,
                iconForeground: null != j ? ez.t4 : void 0,
                nameplate: j,
                shouldShowOutputDeviceChangedTooltip: "output" === C,
                dismissTooltips: T,
            }),
            (0, a.jsx)(e9, {
                isEligibleForPomelo: c,
                webBuildOverride: u,
                onClick: _,
                onContextMenu: v,
                dismissibleContents: b.settings,
                iconForeground: null != j ? ez.t4 : void 0,
                nameplate: j,
            }),
        ],
    });
}
function e1(e) {
    let t = (0, c.bG)([eA.A], () => null != eA.A.getChannelId()),
        n = (0, $.Py)(e),
        a = s.useRef(new m.Ep()),
        [i, l] = s.useState(!1);
    s.useEffect(() => {
        t &&
            n &&
            (l(!0),
            a.current.start(eJ, () => {
                l(!1);
            }));
    }, [t, n]);
    let r = s.useCallback(() => {
        l(!1), a.current.stop();
    }, []);
    return (
        (0, v.l0)(() => {
            a.current.stop();
        }),
        { shouldShowTooltip: i, dismissTooltip: r }
    );
}
function e7() {
    let e = (0, c.bG)([eN.default], () => eN.default.getCurrentUser()),
        t = (0, c.bG)([ef.default], () => ef.default.getId()),
        {
            activities: n,
            streaming: i,
            status: l,
        } = (0, c.cf)([eS.A], () => {
            let e = eS.A.getActivities();
            return {
                activities: e,
                streaming:
                    null !=
                    e.find((e) => {
                        let { type: t } = e;
                        return t === eF.$pd.STREAMING;
                    }),
                status: eS.A.getStatus(),
            };
        }),
        r = (0, c.bG)([eg.A], () => eg.A.getAnyStreamForUser(t)),
        d = (0, _.A)({ userId: t }),
        m = (0, c.bG)([eT.A], () => eT.A.isCurrentUserPTTLatched()),
        h = (0, c.bG)([eT.A], () => eT.A.getVoiceVolume(t)),
        x = eD.Ay.useUserTag(e, { decoration: "never" }),
        g = (0, c.bG)([ey.A], () => ey.A.hidePersonalInformation),
        f = (0, c.bG)([eA.A, e_.A], () => {
            let e = eA.A.getChannelId();
            return null != e ? e_.A.getChannel(e) : null;
        }),
        { mute: v, selfMute: b, suppress: A } = (0, eu.A)(f),
        { selfDeaf: C, deaf: S } = (0, ec.A)(f),
        T = (0, c.bG)([k.A], () => ((0, R.kK)() ? k.A.getCurrentBuildOverride().overrides?.discord_web : null)),
        I = (0, c.bG)([eE.A], () => eE.A.getPremiumTypeSubscription()),
        w = (0, c.bG)([ej.Ay], () => ej.Ay.getSpeakingWhileMuted()),
        D = (0, c.bG)([O.A], () => O.A.isFullscreenInContext()),
        M = (0, c.bG)([eb.A], () => eb.A.hasLayers()),
        P = (0, p.red)(p.DXt) || M || ew.P.isDisallowPopupsSet() || D,
        L = (0, Z.g)(),
        U = (0, c.bG)([K.default], () => null != K.default.getAwaitingRemoteSessionInfo()),
        B = (0, c.bG)([eC.A], () => eC.A.getGuildId()),
        G = e?.avatarDecoration,
        F = (0, E.A)(G),
        V = eD.Ay.useName(e) ?? "",
        { voiceActivityStatusEnabled: W } = (0, j.G)({ location: "Account" }),
        H = (0, et.lM)("Account"),
        { analyticsLocations: z } = (0, N.Ay)(y.A.ACCOUNT),
        $ = (0, Q.r)({ user: e, guildId: void 0 }),
        { isQuestBarEmpty: q, hasLoadedQuestBar: Y } = (0, ea.c9)({ location: eW.rE.CONFLICT_CHECKS }),
        J = (0, c.bG)([es.A, eN.default, ev.A], () => {
            let e,
                t = es.A.getSyncingWith(),
                n = es.A.getActivity(),
                a = [];
            return (
                null != t ? (e = t.partyId) : null != n && null != n.party && null != n.party.id && (e = n.party.id),
                null != e &&
                    (a = o()(Array.from(ev.A.getParty(e) ?? []))
                        .map((e) => eN.default.getUser(e))
                        .filter(eO.Vq)
                        .value()),
                a.length > 1
            );
        }),
        X = { avatar: [], settings: [] };
    !P &&
        (X.avatar.push(u.M.DISPLAY_NAME_STYLES_COACHMARK),
        X.avatar.push(u.M.WIDGETS_RTC_UPSELL_COACHMARK),
        H && X.settings.push(u.M.NITRO_PRIVACY_PERK_BETA_COACHMARK));
    let { shouldShowTooltip: ee, dismissTooltip: en } = e1(eH.oh.AUDIO_INPUT),
        { shouldShowTooltip: ei, dismissTooltip: el } = e1(eH.oh.AUDIO_OUTPUT),
        { shouldShowTooltip: er, dismissTooltip: eo } = (0, eh.A)(),
        ed = (0, ex.A)(),
        em = s.useMemo(() => (ee ? "input" : ei ? "output" : void 0), [ee, ei]),
        ep = s.useCallback(
            (e) => {
                switch (e) {
                    case "input":
                        en();
                        break;
                    case "output":
                        el();
                }
            },
            [en, el],
        );
    return (0, a.jsx)(N.f5, {
        value: z,
        children: (0, a.jsx)(eZ, {
            currentUser: e,
            username: V,
            activities: n,
            applicationStream: r,
            voiceChannel: f,
            dismissibleContents: X,
            userTag: x,
            hidePrivateData: g,
            occluded: P,
            premiumSubscription: I,
            selfDeaf: C,
            selfMute: b,
            serverDeaf: S,
            serverMute: v,
            speaking: d,
            voiceDb: h,
            speakingWhileMuted: w,
            speakingWhilePTTInactive: ed,
            latched: m && null != f && !v && !b,
            status: l,
            streaming: i,
            suppress: A,
            webBuildOverride: T,
            awaitingRemote: U,
            isEligibleForPomelo: L,
            voiceActivityStatusEnabled: W,
            nameplate: $,
            selectedGuildId: B,
            avatarDecoration: F,
            isQuestBarEmpty: q,
            hasLoadedQuestBar: Y,
            isListenAlongVisible: J,
            deviceChangedTooltipType: em,
            onDismissDeviceChangedTooltip: () => ep(em),
            shouldShowPTTJoinTooltip: er,
            dismissPTTJoinTooltip: eo,
        }),
    });
}
function e9(e) {
    let t,
        n,
        {
            webBuildOverride: i,
            isEligibleForPomelo: l,
            onClick: r,
            onContextMenu: o,
            dismissibleContents: d,
            iconForeground: c,
            nameplate: m,
        } = e,
        h = s.useRef(null),
        [g, f] = s.useState(!1);
    (0, v.Ay)(() => {
        let e = () => f(!0);
        return (
            ek._.subscribe(eF.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e),
            () => {
                ek._.unsubscribe(eF.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e);
            }
        );
    });
    let _ = s.useCallback(() => {
        f(!1), r();
    }, [r]);
    t = null != i ? eK.intl.formatToPlainString(eK.t.Gzh6ZP, { webBuildOverride: i.id }) : eK.intl.string(eK.t.cduTBL);
    let b = p.Zes,
        j = (0, x.w)();
    return (
        (b = null != i ? p.Hnu : l ? p.vJI : j.Component),
        (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(eL.A, {
                    ref: h,
                    tooltipText: t,
                    tooltipPositionKey: n,
                    onClick: _,
                    onContextMenu: o,
                    "aria-label": eK.intl.string(eK.t.cduTBL),
                    icon: (0, a.jsx)(b, { size: "refresh_sm", color: "currentColor", className: c }),
                    ...j.events,
                    plated: null != m,
                }),
                (0, a.jsx)(ee.V, { targetElementRef: h, shouldShow: g, onDismiss: () => f(!1) }),
                !g &&
                    (0, a.jsx)(F.Ay, {
                        contentTypes: d,
                        groupName: eV.m.ACCOUNT_NAME_ZONE,
                        children: (e) => {
                            let { visibleContent: t, markAsDismissed: n } = e;
                            if (t === u.M.NITRO_PRIVACY_PERK_BETA_COACHMARK)
                                return (0, a.jsx)(en.y, { targetElementRef: h, markAsDismissed: n });
                        },
                    }),
            ],
        })
    );
}
function e2(e) {
    let t,
        {
            selfMute: n,
            serverMute: i,
            suppress: r,
            awaitingRemote: o,
            iconForeground: d,
            onMouseEnter: u,
            onMouseLeave: m,
            onClick: h,
            nameplate: x,
            shouldShowSpeakingWhileMutedTooltip: g,
            shouldShowSpeakingWhilePTTTooltip: f,
            shouldShowInputDeviceChangedTooltip: _,
            shouldShowPTTJoinTooltip: v,
            dismissTooltips: b,
            speaking: j,
            latched: A,
        } = e,
        C = n || r || i,
        S = (0, c.bG)([ej.Ay], () => ej.Ay.getMode() === eF.TBI.PUSH_TO_TALK),
        { showPTTIconIndicator: T } = em.A.useConfig({ location: "MicrophoneButton" }),
        E = s.useRef(null),
        { Component: I, events: k, play: R } = (0, ep.q)(C),
        O = i || r ? p.O1p : I,
        w = (0, c.bG)([ej.Ay], () => ej.Ay.getSettings().modeOptions.shortcut),
        P = (0, D.A)(n, i, r, o);
    t = g
        ? { tooltipType: "green_void_do_not_use", tooltipText: eK.intl.string(eK.t["29gnR4"]), tooltipForceOpen: !0 }
        : v || f
          ? {
                tooltipType: "green_void_do_not_use",
                tooltipText: eK.intl.format(eK.t.c1qUOQ, { keybind: eP.dI(w).toLocaleUpperCase() }),
                tooltipForceOpen: !0,
            }
          : { tooltipText: P };
    let { analyticsLocations: L } = (0, N.Ay)(y.A.AUDIO_INPUT_BUTTON);
    s.useEffect(() => () => R(), [C, R]);
    let U = (0, c.bG)([eA.A], () => null != eA.A.getChannelId()),
        G = T && S && U,
        F = C ? p.LU0.colors.ICON_VOICE_MUTED : "currentColor",
        { name: V } = (0, $.x5)(eH.oh.AUDIO_INPUT),
        { enabledInputProfiles: W } = (0, eo.d)({ location: "MicrophoneButton" });
    return (0, a.jsx)(N.f5, {
        value: L,
        children: (0, a.jsx)(p.YNO, {
            targetElementRef: E,
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (
                    b(),
                    (0, a.jsx)(N.f5, {
                        value: L,
                        children: (0, a.jsx)(M.A, {
                            onInteraction: (0, B.s)("AudioDeviceMenu", y.A.ACCOUNT),
                            onClose: t,
                            maybeRenderPTTCheckbox: !0,
                            renderInputProfiles: W.length > 0,
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
            animation: p.YNO.Animation.FADE,
            spacing: 4,
            children: (e, n) => {
                let { onClick: s } = e,
                    { isShown: i } = n,
                    r = i ? p.tN5 : p.abt;
                return (0, a.jsxs)("div", {
                    ref: E,
                    className: l()(ez.WU, { [ez.v8]: C, [ez.q6]: i }),
                    children: [
                        (0, a.jsx)(eL.A, {
                            "aria-checked": C,
                            "aria-label": eK.intl.string(eK.t.w4m945),
                            className: ez.$o,
                            disabled: o,
                            icon: (0, a.jsx)(O, { size: "custom", width: 20, height: 20, color: F, className: d }),
                            onClick: h,
                            onContextMenu: s,
                            onMouseEnter: () => {
                                u(), k.onMouseEnter();
                            },
                            onMouseLeave: () => {
                                m(), k.onMouseLeave();
                            },
                            plated: null != x,
                            redGlow: C,
                            role: "switch",
                            ...t,
                            children: G
                                ? (0, a.jsx)("div", { className: l()(ez.Ur, { [ez.zY]: j, [ez.yM]: A && !j }) })
                                : null,
                        }),
                        (0, a.jsx)(eL.A, {
                            "aria-label": _
                                ? eK.intl.formatToPlainString(eK.t["18wnuD"], { inputDeviceName: V })
                                : eK.intl.string(eK.t.fRzCbB),
                            className: l()(ez.UT, { [ez.q6]: i }),
                            disabled: o,
                            icon: (0, a.jsx)(r, { className: ez.$$, size: "custom", width: 12, height: 12, color: F }),
                            onClick: s,
                            onContextMenu: s,
                            onMouseEnter: u,
                            onMouseLeave: m,
                            plated: null != x,
                            redGlow: C,
                            tooltipType: _ ? "green_void_do_not_use" : void 0,
                            tooltipForceOpen: _,
                            tooltipPositionKey: _
                                ? eK.intl.formatToPlainString(eK.t["18wnuD"], { inputDeviceName: V })
                                : void 0,
                            tooltipShouldShow: !i,
                            tooltipText: _
                                ? eK.intl.format(eK.t["18wnuD"], { inputDeviceName: V })
                                : eK.intl.string(eK.t.fRzCbB),
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
            onClick: r,
            iconForeground: o,
            nameplate: d,
            shouldShowOutputDeviceChangedTooltip: c,
            dismissTooltips: u,
        } = e,
        m = t || n,
        {
            Component: x,
            play: g,
            events: { onMouseEnter: f, onMouseLeave: _ },
        } = (0, h.I)(m ? "undeafen" : "deafen"),
        v = n ? p.TJE : x,
        { name: b } = (0, $.x5)(eH.oh.AUDIO_OUTPUT),
        j = (0, w.A)(t, n, i),
        { analyticsLocations: A } = (0, N.Ay)(y.A.AUDIO_OUTPUT_BUTTON),
        C = s.useRef(null);
    return (
        s.useEffect(() => () => g(), [m, g]),
        (0, a.jsx)(N.f5, {
            value: A,
            children: (0, a.jsx)(p.YNO, {
                targetElementRef: C,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (
                        u(),
                        (0, a.jsx)(N.f5, {
                            value: A,
                            children: (0, a.jsx)(M.A, {
                                onInteraction: (0, B.s)("AudioDeviceMenu", y.A.ACCOUNT),
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
                animation: p.YNO.Animation.FADE,
                spacing: 4,
                children: (e, t) => {
                    let { onClick: s } = e,
                        { isShown: u } = t,
                        h = u ? p.tN5 : p.abt;
                    return (0, a.jsxs)("div", {
                        ref: C,
                        className: l()(ez.WU, { [ez.v8]: m, [ez.q6]: u }),
                        children: [
                            (0, a.jsx)(eL.A, {
                                "aria-checked": m,
                                "aria-label": eK.intl.string(eK.t.wjcRFX),
                                className: ez.$o,
                                disabled: i,
                                icon: (0, a.jsx)(v, {
                                    size: "custom",
                                    width: 20,
                                    height: 20,
                                    color: m ? p.LU0.colors.ICON_VOICE_MUTED : "currentColor",
                                    className: o,
                                }),
                                iconForeground: m ? ez.of : void 0,
                                innerClassName: l()({ [ez.T3]: n }),
                                onClick: r,
                                onContextMenu: s,
                                onMouseEnter: f,
                                onMouseLeave: _,
                                plated: null != d,
                                redGlow: m,
                                role: "switch",
                                tooltipText: j,
                            }),
                            (0, a.jsx)(eL.A, {
                                className: l()(ez.UT, { [ez.q6]: u }),
                                disabled: i,
                                icon: (0, a.jsx)(h, {
                                    className: ez.$$,
                                    size: "custom",
                                    width: 12,
                                    height: 12,
                                    color: m ? p.LU0.colors.ICON_VOICE_MUTED : "currentColor",
                                }),
                                onClick: s,
                                onContextMenu: s,
                                plated: null != d,
                                redGlow: m,
                                tooltipType: c ? "green_void_do_not_use" : void 0,
                                tooltipForceOpen: c,
                                tooltipPositionKey: c
                                    ? eK.intl.formatToPlainString(eK.t["f+DDY/"], { outputDeviceName: b })
                                    : void 0,
                                tooltipShouldShow: !u,
                                tooltipText: c
                                    ? eK.intl.format(eK.t["f+DDY/"], { outputDeviceName: b })
                                    : eK.intl.string(eK.t.aA4Vce),
                                "aria-label": c
                                    ? eK.intl.formatToPlainString(eK.t["f+DDY/"], { outputDeviceName: b })
                                    : eK.intl.string(eK.t.aA4Vce),
                            }),
                        ],
                    });
                },
            }),
        })
    );
}
