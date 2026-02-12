n.d(t, { A: () => e1, g: () => eX }), n(321073);
var a = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
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
    _ = n(820284),
    f = n(717558),
    b = n(964486),
    v = n(220839),
    j = n(901517),
    A = n(397244),
    C = n(729551),
    S = n(755039),
    T = n(29160),
    y = n(793574),
    E = n(688810),
    N = n(325445),
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
    Z = n(134991),
    ee = n(967370),
    et = n(535731),
    en = n(201805),
    ea = n(655116),
    ei = n(454719),
    es = n(342296),
    el = n(780964),
    er = n(77735),
    eo = n(840065),
    ed = n(167579),
    ec = n(173660),
    eu = n(340913),
    em = n(41580),
    eh = n(935101),
    ex = n(277342),
    ep = n(616356),
    eg = n(961350),
    e_ = n(734057),
    ef = n(629016),
    eb = n(186111),
    ev = n(430452),
    ej = n(383501),
    eA = n(967198),
    eC = n(461213),
    eS = n(485296),
    eT = n(351906),
    ey = n(287809),
    eE = n(166403),
    eN = n(486020),
    eI = n(203982),
    ek = n(927813),
    eR = n(403362),
    eO = n(536194),
    ew = n(427262),
    eD = n(837921),
    eM = n(350535),
    eP = n(42473),
    eL = n(994314),
    eU = n(485599),
    eB = n(809991),
    eG = n(652215),
    eF = n(49999),
    eV = n(654487),
    eW = n(731854),
    eH = n(985018),
    eK = n(146664);
let ez = eD.Ay.getEnableHardwareAcceleration() ? p.JsQ : p.euF,
    e$ = 2.5 * ek.A.Millis.SECOND,
    eq = 2 * ek.A.Millis.MINUTE,
    eQ = 2 * ek.A.Millis.MINUTE,
    eY = 5 * ek.A.Millis.SECOND;
function eJ(e) {
    let {
            ref: t,
            speaking: n,
            latched: s,
            voiceDb: r = -1 / 0,
            streaming: o,
            currentUser: d,
            status: c,
            handleClick: u,
            handleMouseLeave: m,
            renderNameTag: h,
            nameplate: x,
            avatarDecoration: g,
            "data-jump-section": f,
        } = e,
        b = i.useRef(null),
        j = t ?? b,
        A = (0, eN.F_)({ avatarDecoration: g, size: (0, I.Te)(p._3J.SIZE_32) }),
        C = (0, V.A)(),
        {
            updateOpenPopoutRef: S,
            highlightBadge: T,
            setHighlightBadge: y,
        } = (function () {
            let e = i.useRef(null),
                t = i.useCallback((t) => {
                    e.current = () => {
                        t.onMouseDown(), t.onClick();
                    };
                }, []),
                [n, a] = i.useState(),
                [s, l] = i.useState(!1);
            return (
                (0, v.A)(() => l(!0), 750),
                i.useEffect(() => {
                    let t = (t) => {
                        let { highlightBadge: n } = t;
                        null != n && a(n), e.current?.();
                    };
                    return (
                        eI._.subscribe(eG.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t),
                        () => {
                            eI._.unsubscribe(eG.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t);
                        }
                    );
                }),
                { updateOpenPopoutRef: t, highlightBadge: s ? n : void 0, setHighlightBadge: a }
            );
        })(),
        E = (0, Y.K)(x);
    return null == d
        ? null
        : (0, a.jsx)(_.A, {
              object: eG.ZSU.AVATAR,
              children: (0, a.jsx)(es.A, {
                  user: d,
                  targetElementRef: j,
                  clickTrap: !0,
                  preload: () =>
                      (0, ei.A)(d.id, d.getAvatarURL(void 0, es.S), {
                          type: "account_popout",
                          withMutualGuilds: !1,
                          withMutualFriends: !1,
                          guildId: void 0,
                      }),
                  renderPopout: (e, t) => {
                      let { closePopout: n, setPopoutRef: i } = e;
                      return (0, a.jsx)(q.A, {
                          currentUser: d,
                          highlightBadge: T,
                          openedAt: t,
                          onClose: () => {
                              n?.();
                          },
                          setPopoutRef: i,
                          className: eK.dI,
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
                      let { onMouseEnter: t, onMouseDown: i, ...m } = e;
                      return (0, a.jsxs)("div", {
                          ref: j,
                          style: E,
                          onMouseEnter: t,
                          onMouseDown: i,
                          onClick: (t) => {
                              e.onClick?.(t), u?.(t);
                          },
                          className: l()(eK.Q9, { [eK.ZQ]: null != x }),
                          children: [
                              (0, a.jsx)(p.DUT, {
                                  ...m,
                                  onClick: (t) => {
                                      t.stopPropagation(), e.onClick?.(t), u?.(t);
                                  },
                                  "aria-label": eH.intl.string(eH.t["5fWB8U"]),
                                  focusProps: { ringTarget: j },
                                  className: eK.$n,
                                  "data-jump-section": f,
                              }),
                              (0, a.jsx)(ez, {
                                  size: p._3J.SIZE_32,
                                  src: d.getAvatarURL(void 0, 28, !1),
                                  avatarDecoration: A,
                                  status: o ? eG.clD.STREAMING : c,
                                  isSpeaking: n,
                                  isLatched: s,
                                  voiceDb: r,
                                  className: eK.my,
                                  "aria-hidden": !0,
                              }),
                              (0, a.jsx)("div", { className: eK.oM, children: h(C) }),
                          ],
                      });
                  },
              }),
          });
}
class eX extends i.PureComponent {
    speakingWhileMutedTooltipTimeout = new m.Ep();
    speakingWhilePTTTooltipTimeout = new m.Ep();
    speakingWhilePTTInactiveBackoff = new d.A(eQ, null, !1);
    lastSpeakingWhileMutedNotificationTime = void 0;
    lastSpeakingWhilePTTNotificationTime = void 0;
    state = {
        hovered: !1,
        shouldShowNametagTooltip: !1,
        shouldShowSpeakingWhileMutedTooltip: !1,
        shouldShowSpeakingWhilePTTTooltip: !1,
        hoveringOnMute: !1,
    };
    containerRef = i.createRef();
    avatarWithPopoutRef = i.createRef();
    componentDidUpdate(e) {
        let { speakingWhileMuted: t, speakingWhilePTTInactive: n, occluded: a } = e,
            { speakingWhileMuted: i, occluded: s, speakingWhilePTTInactive: l } = this.props;
        s !== a && this.handleOccludedChanged(),
            i !== t && this.handleSpeakingWhileMutedChanged(),
            l !== n && this.handleSpeakingWhilePTTChanged();
    }
    componentWillUnmount() {
        this.speakingWhileMutedTooltipTimeout.stop(), this.speakingWhilePTTTooltipTimeout.stop();
    }
    handleToggleSelfMute = () => {
        let { serverMute: e, suppress: t, selfMute: n } = this.props;
        (0, L.A)(e, t, eG.JJy.ACCOUNT_PANEL), (0, U.X)(y.A.ACCOUNT, U.O.MIC, n);
    };
    handleToggleSelfDeaf = () => {
        let { serverDeaf: e, selfDeaf: t } = this.props;
        (0, P.A)(e, eG.JJy.ACCOUNT_PANEL), (0, U.X)(y.A.ACCOUNT, U.O.DEAFEN, !t);
    };
    handleOpenAccountSettings = () => {
        this.dismissTooltips(),
            ej.A.isConnected()
                ? (0, eo.openUserSettings)(el.X.VOICE_AND_VIDEO_PANEL, { section: eG.nc_.VOICE })
                : (0, eo.openUserSettings)();
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
                    let { enabledInputProfiles: n } = (0, er.d)({ location: "Account" });
                    return (0, a.jsx)(E.f5, {
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
                    (0, a.jsx)(E.f5, {
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
                occluded: i,
                shouldShowPTTJoinTooltip: s,
                deviceChangedTooltipType: l,
            } = this.props,
            { hoveringOnMute: r } = this.state,
            o =
                void 0 === this.lastSpeakingWhileMutedNotificationTime ||
                performance.now() - this.lastSpeakingWhileMutedNotificationTime > eq;
        a
            ? r ||
              !e ||
              t ||
              n ||
              i ||
              !o ||
              null != l ||
              s ||
              this.setState({ shouldShowSpeakingWhileMutedTooltip: !0 }, () => {
                  (this.lastSpeakingWhileMutedNotificationTime = performance.now()),
                      this.speakingWhileMutedTooltipTimeout.start(e$, () =>
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
                occluded: i,
                shouldShowPTTJoinTooltip: s,
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
              i ||
              !o ||
              null != l ||
              s ||
              this.setState({ shouldShowSpeakingWhilePTTTooltip: !0 }, () => {
                  (this.lastSpeakingWhilePTTNotificationTime = performance.now()),
                      this.speakingWhilePTTInactiveBackoff.fail(),
                      this.speakingWhilePTTTooltipTimeout.start(e$, () =>
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
                currentUser: i,
                status: s,
                userTag: l,
                voiceActivityStatusEnabled: r,
                voiceChannel: o,
            } = this.props;
        if (null == i) return null;
        if ((0, A.A)({ activities: t, status: s, applicationStream: n, voiceChannel: r ? o : void 0 }))
            return (0, a.jsxs)(T.A, {
                hoverText: l,
                forceHover: e,
                children: [
                    (0, a.jsx)(p.AC4, { children: ew.Ay.humanizeStatus(s) }),
                    (0, a.jsx)(C.A, {
                        user: i,
                        activities: t,
                        applicationStream: n,
                        voiceChannel: r ? o : void 0,
                        textClassName: eK.XD,
                        hideTooltip: !0,
                    }),
                ],
            });
        let d = t?.find((e) => {
            let { type: t } = e;
            return t === eG.$pd.CUSTOM_STATUS;
        });
        return null != d
            ? (0, a.jsxs)(T.A, {
                  hoverText: l,
                  forceHover: e,
                  children: [
                      (0, a.jsx)(p.AC4, { children: ew.Ay.humanizeStatus(s) }),
                      (0, a.jsx)(G.A, { activity: d, emojiClassName: eK.Zg, className: eK.WO }),
                  ],
              })
            : null != s && s !== eG.clD.UNKNOWN && i.hasUniqueUsername()
              ? (0, a.jsx)(T.A, {
                    hoverText: l,
                    forceHover: e,
                    children: (0, a.jsx)(S.A, { text: ew.Ay.humanizeStatus(s) }),
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
                          className: eK.eW,
                          children: (0, a.jsx)(eU.A, {
                              className: l()({ [eK.e8]: null != e }),
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
                          className: eK.XP,
                          children: (0, a.jsx)(eL.A, { children: this.renderStatus() }),
                      }),
                  ],
              });
    };
    renderAvatarWithPopout(e) {
        let {
            focusSectionProps: { "data-jump-section": t },
            onClick: n,
        } = e;
        return (0, a.jsx)(eJ, {
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
            : (0, a.jsx)(eB.A, {
                  guildId: this.props.selectedGuildId ?? null,
                  currentUser: t,
                  targetElementRef: this.avatarWithPopoutRef,
                  additionalDCs: n.avatar,
                  children: this.renderAvatarWithPopout({ focusSectionProps: e }),
              });
    }
    render() {
        let { currentUser: e, nameplate: t, voiceChannel: n, isQuestBarEmpty: i, isListenAlongVisible: s } = this.props,
            r = this.state.hovered;
        return null == e
            ? null
            : (0, a.jsxs)(a.Fragment, {
                  children: [
                      (0, a.jsx)(p.skg, {
                          children: (e) =>
                              (0, a.jsxs)("div", {
                                  ref: this.containerRef,
                                  className: l()(eK.kL, { [eK.UG]: null != n, [eK.bc]: !i, [eK.G5]: s }),
                                  onMouseEnter: this.handleMouseEnter,
                                  onMouseLeave: this.handleMouseLeave,
                                  children: [
                                      (0, a.jsx)(X.A, { nameplate: t, hovered: r, placement: J.u.ACCOUNT }),
                                      this.renderNameZone(e),
                                      (0, a.jsx)(eZ, {
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
function eZ(e) {
    let {
            selfDeaf: t,
            selfMute: n,
            awaitingRemote: i,
            serverMute: s,
            serverDeaf: l,
            suppress: r,
            shouldShowSpeakingWhileMutedTooltip: o,
            shouldShowSpeakingWhilePTTTooltip: d,
            webBuildOverride: c,
            handleMouseEnterMute: u,
            handleMouseLeaveMute: m,
            handleToggleSelfDeaf: h,
            handleToggleSelfMute: x,
            handleInputAudioContextMenu: p,
            handleOutputAudioContextMenu: g,
            handleOpenAccountSettings: _,
            handleOpenSettingsContextMenu: f,
            dismissibleContents: b,
            nameplate: v,
            accountContainerRef: j,
            deviceChangedTooltipType: A,
            shouldShowPTTJoinTooltip: C = !1,
            dismissTooltips: S,
            speaking: T,
            latched: y,
        } = e,
        E = (0, Y.K)(v);
    return (0, a.jsxs)("div", {
        className: eK.Uo,
        style: E,
        children: [
            (0, a.jsx)(e6, {
                accountContainerRef: j,
                selfMute: n,
                serverMute: s,
                suppress: r,
                awaitingRemote: i,
                onMouseEnter: u,
                onMouseLeave: m,
                onClick: x,
                onContextMenu: p,
                iconForeground: null != v ? eK.t4 : void 0,
                nameplate: v,
                shouldShowSpeakingWhileMutedTooltip: o,
                shouldShowInputDeviceChangedTooltip: !o && "input" === A,
                shouldShowSpeakingWhilePTTTooltip: d,
                shouldShowPTTJoinTooltip: C,
                dismissTooltips: S,
                speaking: T,
                latched: y,
            }),
            (0, a.jsx)(e7, {
                selfDeaf: t,
                serverDeaf: l,
                onClick: h,
                onContextMenu: g,
                awaitingRemote: i,
                iconForeground: null != v ? eK.t4 : void 0,
                nameplate: v,
                shouldShowOutputDeviceChangedTooltip: "output" === A,
                dismissTooltips: S,
            }),
            (0, a.jsx)(e9, {
                webBuildOverride: c,
                onClick: _,
                onContextMenu: f,
                dismissibleContents: b.settings,
                iconForeground: null != v ? eK.t4 : void 0,
                nameplate: v,
            }),
        ],
    });
}
function e0(e) {
    let t = (0, c.bG)([ej.A], () => null != ej.A.getChannelId()),
        n = (0, $.Py)(e),
        a = i.useRef(new m.Ep()),
        [s, l] = i.useState(!1);
    i.useEffect(() => {
        t &&
            n &&
            (l(!0),
            a.current.start(eY, () => {
                l(!1);
            }));
    }, [t, n]);
    let r = i.useCallback(() => {
        l(!1), a.current.stop();
    }, []);
    return (
        (0, b.l0)(() => {
            a.current.stop();
        }),
        { shouldShowTooltip: s, dismissTooltip: r }
    );
}
function e1() {
    let e = (0, c.bG)([ey.default], () => ey.default.getCurrentUser()),
        t = (0, c.bG)([eg.default], () => eg.default.getId()),
        {
            activities: n,
            streaming: s,
            status: l,
        } = (0, c.cf)([eC.A], () => {
            let e = eC.A.getActivities();
            return {
                activities: e,
                streaming:
                    null !=
                    e.find((e) => {
                        let { type: t } = e;
                        return t === eG.$pd.STREAMING;
                    }),
                status: eC.A.getStatus(),
            };
        }),
        r = (0, c.bG)([ep.A], () => ep.A.getAnyStreamForUser(t)),
        d = (0, f.A)({ userId: t }),
        m = (0, c.bG)([eS.A], () => eS.A.isCurrentUserPTTLatched()),
        h = (0, c.bG)([eS.A], () => eS.A.getVoiceVolume(t)),
        x = ew.Ay.useUserTag(e, { decoration: "never" }),
        g = (0, c.bG)([eT.A], () => eT.A.hidePersonalInformation),
        _ = (0, c.bG)([ej.A, e_.A], () => {
            let e = ej.A.getChannelId();
            return null != e ? e_.A.getChannel(e) : null;
        }),
        { mute: b, selfMute: v, suppress: A } = (0, ec.A)(_),
        { selfDeaf: C, deaf: S } = (0, ed.A)(_),
        T = (0, c.bG)([k.A], () => ((0, R.kK)() ? k.A.getCurrentBuildOverride().overrides?.discord_web : null)),
        I = (0, c.bG)([eE.A], () => eE.A.getPremiumTypeSubscription()),
        w = (0, c.bG)([ev.Ay], () => ev.Ay.getSpeakingWhileMuted()),
        D = (0, c.bG)([O.A], () => O.A.isFullscreenInContext()),
        M = (0, c.bG)([eb.A], () => eb.A.hasLayers()),
        P = (0, p.red)(p.DXt) || M || eO.P.isDisallowPopupsSet() || D,
        L = (0, c.bG)([K.default], () => null != K.default.getAwaitingRemoteSessionInfo()),
        U = (0, c.bG)([eA.A], () => eA.A.getGuildId()),
        B = e?.avatarDecoration,
        G = (0, N.A)(B),
        F = ew.Ay.useName(e) ?? "",
        { voiceActivityStatusEnabled: V } = (0, j.G)({ location: "Account" }),
        W = (0, ee.lM)("Account"),
        { analyticsLocations: H } = (0, E.Ay)(y.A.ACCOUNT),
        z = (0, Q.r)({ user: e, guildId: void 0 }),
        { isQuestBarEmpty: $, hasLoadedQuestBar: q } = (0, en.c9)({ location: eV.rE.CONFLICT_CHECKS }),
        Y = (0, c.bG)([ea.A, ey.default, ef.A], () => {
            let e,
                t = ea.A.getSyncingWith(),
                n = ea.A.getActivity(),
                a = [];
            return (
                null != t ? (e = t.partyId) : null != n && null != n.party && null != n.party.id && (e = n.party.id),
                null != e &&
                    (a = o()(Array.from(ef.A.getParty(e) ?? []))
                        .map((e) => ey.default.getUser(e))
                        .filter(eR.Vq)
                        .value()),
                a.length > 1
            );
        }),
        J = { avatar: [], settings: [] };
    !P &&
        (J.avatar.push(u.M.DISPLAY_NAME_STYLES_COACHMARK),
        J.avatar.push(u.M.WIDGETS_RTC_UPSELL_COACHMARK),
        W && J.settings.push(u.M.NITRO_PRIVACY_PERK_BETA_COACHMARK));
    let { shouldShowTooltip: X, dismissTooltip: Z } = e0(eW.oh.AUDIO_INPUT),
        { shouldShowTooltip: et, dismissTooltip: ei } = e0(eW.oh.AUDIO_OUTPUT),
        { shouldShowTooltip: es, dismissTooltip: el } = (0, em.A)(),
        er = (0, eh.A)(),
        eo = i.useMemo(() => (X ? "input" : et ? "output" : void 0), [X, et]),
        eu = i.useCallback(
            (e) => {
                switch (e) {
                    case "input":
                        Z();
                        break;
                    case "output":
                        ei();
                }
            },
            [Z, ei],
        );
    return (0, a.jsx)(E.f5, {
        value: H,
        children: (0, a.jsx)(eX, {
            currentUser: e,
            username: F,
            activities: n,
            applicationStream: r,
            voiceChannel: _,
            dismissibleContents: J,
            userTag: x,
            hidePrivateData: g,
            occluded: P,
            premiumSubscription: I,
            selfDeaf: C,
            selfMute: v,
            serverDeaf: S,
            serverMute: b,
            speaking: d,
            voiceDb: h,
            speakingWhileMuted: w,
            speakingWhilePTTInactive: er,
            latched: m && null != _ && !b && !v,
            status: l,
            streaming: s,
            suppress: A,
            webBuildOverride: T,
            awaitingRemote: L,
            voiceActivityStatusEnabled: V,
            nameplate: z,
            selectedGuildId: U,
            avatarDecoration: G,
            isQuestBarEmpty: $,
            hasLoadedQuestBar: q,
            isListenAlongVisible: Y,
            deviceChangedTooltipType: eo,
            onDismissDeviceChangedTooltip: () => eu(eo),
            shouldShowPTTJoinTooltip: es,
            dismissPTTJoinTooltip: el,
        }),
    });
}
function e9(e) {
    let t,
        n,
        {
            webBuildOverride: s,
            onClick: l,
            onContextMenu: r,
            dismissibleContents: o,
            iconForeground: d,
            nameplate: c,
        } = e,
        m = i.useRef(null),
        [h, g] = i.useState(!1);
    (0, b.Ay)(() => {
        let e = () => g(!0);
        return (
            eI._.subscribe(eG.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e),
            () => {
                eI._.unsubscribe(eG.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e);
            }
        );
    });
    let _ = i.useCallback(() => {
        g(!1), l();
    }, [l]);
    t = null != s ? eH.intl.formatToPlainString(eH.t.Gzh6ZP, { webBuildOverride: s.id }) : eH.intl.string(eH.t.cduTBL);
    let f = p.Zes,
        v = (0, x.w)();
    return (
        (f = null != s ? p.Hnu : v.Component),
        (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(eP.A, {
                    ref: m,
                    tooltipText: t,
                    tooltipPositionKey: n,
                    onClick: _,
                    onContextMenu: r,
                    "aria-label": eH.intl.string(eH.t.cduTBL),
                    icon: (0, a.jsx)(f, { size: "refresh_sm", color: "currentColor", className: d }),
                    ...v.events,
                    plated: null != c,
                }),
                (0, a.jsx)(Z.V, { targetElementRef: m, shouldShow: h, onDismiss: () => g(!1) }),
                !h &&
                    (0, a.jsx)(F.Ay, {
                        contentTypes: o,
                        groupName: eF.m.ACCOUNT_NAME_ZONE,
                        children: (e) => {
                            let { visibleContent: t, markAsDismissed: n } = e;
                            if (t === u.M.NITRO_PRIVACY_PERK_BETA_COACHMARK)
                                return (0, a.jsx)(et.y, { targetElementRef: m, markAsDismissed: n });
                        },
                    }),
            ],
        })
    );
}
function e6(e) {
    let t,
        {
            selfMute: n,
            serverMute: s,
            suppress: r,
            awaitingRemote: o,
            iconForeground: d,
            onMouseEnter: u,
            onMouseLeave: m,
            onClick: h,
            nameplate: x,
            shouldShowSpeakingWhileMutedTooltip: g,
            shouldShowSpeakingWhilePTTTooltip: _,
            shouldShowInputDeviceChangedTooltip: f,
            shouldShowPTTJoinTooltip: b,
            dismissTooltips: v,
            speaking: j,
            latched: A,
        } = e,
        C = n || r || s,
        S = (0, c.bG)([ev.Ay], () => ev.Ay.getMode() === eG.TBI.PUSH_TO_TALK),
        { showPTTIconIndicator: T } = eu.A.useConfig({ location: "MicrophoneButton" }),
        N = i.useRef(null),
        { Component: I, events: k, play: R } = (0, ex.q)(C),
        O = s || r ? p.O1p : I,
        w = (0, c.bG)([ev.Ay], () => ev.Ay.getSettings().modeOptions.shortcut),
        P = (0, D.A)(n, s, r, o);
    t = g
        ? { tooltipType: "green_void_do_not_use", tooltipText: eH.intl.string(eH.t["29gnR4"]), tooltipForceOpen: !0 }
        : b || _
          ? {
                tooltipType: "green_void_do_not_use",
                tooltipText: eH.intl.format(eH.t.c1qUOQ, { keybind: eM.dI(w).toLocaleUpperCase() }),
                tooltipForceOpen: !0,
            }
          : { tooltipText: P };
    let { analyticsLocations: L } = (0, E.Ay)(y.A.AUDIO_INPUT_BUTTON);
    i.useEffect(() => () => R(), [C, R]);
    let U = (0, c.bG)([ej.A], () => null != ej.A.getChannelId()),
        G = T && S && U,
        F = C ? p.LU0.colors.ICON_VOICE_MUTED : "currentColor",
        { name: V } = (0, $.x5)(eW.oh.AUDIO_INPUT),
        { enabledInputProfiles: W } = (0, er.d)({ location: "MicrophoneButton" });
    return (0, a.jsx)(E.f5, {
        value: L,
        children: (0, a.jsx)(p.YNO, {
            targetElementRef: N,
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (
                    v(),
                    (0, a.jsx)(E.f5, {
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
                let { onClick: i } = e,
                    { isShown: s } = n,
                    r = s ? p.tN5 : p.abt;
                return (0, a.jsxs)("div", {
                    ref: N,
                    className: l()(eK.WU, { [eK.v8]: C, [eK.q6]: s }),
                    children: [
                        (0, a.jsx)(eP.A, {
                            "aria-checked": C,
                            "aria-label": eH.intl.string(eH.t.w4m945),
                            className: eK.$o,
                            disabled: o,
                            icon: (0, a.jsx)(O, { size: "custom", width: 20, height: 20, color: F, className: d }),
                            onClick: h,
                            onContextMenu: i,
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
                                ? (0, a.jsx)("div", { className: l()(eK.Ur, { [eK.zY]: j, [eK.yM]: A && !j }) })
                                : null,
                        }),
                        (0, a.jsx)(eP.A, {
                            "aria-label": f
                                ? eH.intl.formatToPlainString(eH.t["18wnuD"], { inputDeviceName: V })
                                : eH.intl.string(eH.t.fRzCbB),
                            className: l()(eK.UT, { [eK.q6]: s }),
                            disabled: o,
                            icon: (0, a.jsx)(r, { className: eK.$$, size: "custom", width: 12, height: 12, color: F }),
                            onClick: i,
                            onContextMenu: i,
                            onMouseEnter: u,
                            onMouseLeave: m,
                            plated: null != x,
                            redGlow: C,
                            tooltipType: f ? "green_void_do_not_use" : void 0,
                            tooltipForceOpen: f,
                            tooltipPositionKey: f
                                ? eH.intl.formatToPlainString(eH.t["18wnuD"], { inputDeviceName: V })
                                : void 0,
                            tooltipShouldShow: !s,
                            tooltipText: f
                                ? eH.intl.format(eH.t["18wnuD"], { inputDeviceName: V })
                                : eH.intl.string(eH.t.fRzCbB),
                        }),
                    ],
                });
            },
        }),
    });
}
function e7(e) {
    let {
            selfDeaf: t,
            serverDeaf: n,
            awaitingRemote: s,
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
            events: { onMouseEnter: _, onMouseLeave: f },
        } = (0, h.I)(m ? "undeafen" : "deafen"),
        b = n ? p.TJE : x,
        { name: v } = (0, $.x5)(eW.oh.AUDIO_OUTPUT),
        j = (0, w.A)(t, n, s),
        { analyticsLocations: A } = (0, E.Ay)(y.A.AUDIO_OUTPUT_BUTTON),
        C = i.useRef(null);
    return (
        i.useEffect(() => () => g(), [m, g]),
        (0, a.jsx)(E.f5, {
            value: A,
            children: (0, a.jsx)(p.YNO, {
                targetElementRef: C,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (
                        u(),
                        (0, a.jsx)(E.f5, {
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
                    let { onClick: i } = e,
                        { isShown: u } = t,
                        h = u ? p.tN5 : p.abt;
                    return (0, a.jsxs)("div", {
                        ref: C,
                        className: l()(eK.WU, { [eK.v8]: m, [eK.q6]: u }),
                        children: [
                            (0, a.jsx)(eP.A, {
                                "aria-checked": m,
                                "aria-label": eH.intl.string(eH.t.wjcRFX),
                                className: eK.$o,
                                disabled: s,
                                icon: (0, a.jsx)(b, {
                                    size: "custom",
                                    width: 20,
                                    height: 20,
                                    color: m ? p.LU0.colors.ICON_VOICE_MUTED : "currentColor",
                                    className: o,
                                }),
                                iconForeground: m ? eK.of : void 0,
                                innerClassName: l()({ [eK.T3]: n }),
                                onClick: r,
                                onContextMenu: i,
                                onMouseEnter: _,
                                onMouseLeave: f,
                                plated: null != d,
                                redGlow: m,
                                role: "switch",
                                tooltipText: j,
                            }),
                            (0, a.jsx)(eP.A, {
                                className: l()(eK.UT, { [eK.q6]: u }),
                                disabled: s,
                                icon: (0, a.jsx)(h, {
                                    className: eK.$$,
                                    size: "custom",
                                    width: 12,
                                    height: 12,
                                    color: m ? p.LU0.colors.ICON_VOICE_MUTED : "currentColor",
                                }),
                                onClick: i,
                                onContextMenu: i,
                                plated: null != d,
                                redGlow: m,
                                tooltipType: c ? "green_void_do_not_use" : void 0,
                                tooltipForceOpen: c,
                                tooltipPositionKey: c
                                    ? eH.intl.formatToPlainString(eH.t["f+DDY/"], { outputDeviceName: v })
                                    : void 0,
                                tooltipShouldShow: !u,
                                tooltipText: c
                                    ? eH.intl.format(eH.t["f+DDY/"], { outputDeviceName: v })
                                    : eH.intl.string(eH.t.aA4Vce),
                                "aria-label": c
                                    ? eH.intl.formatToPlainString(eH.t["f+DDY/"], { outputDeviceName: v })
                                    : eH.intl.string(eH.t.aA4Vce),
                            }),
                        ],
                    });
                },
            }),
        })
    );
}
