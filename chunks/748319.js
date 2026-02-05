n.d(t, { A: () => e0, g: () => eJ }), n(321073);
var a = n(627968),
    s = n(64700),
    i = n(503698),
    l = n.n(i),
    r = n(735438),
    o = n.n(r),
    d = n(311907),
    c = n(554146),
    u = n(451988),
    m = n(348858),
    h = n(505312),
    x = n(397927),
    p = n(442433),
    g = n(820284),
    _ = n(717558),
    f = n(964486),
    v = n(220839),
    b = n(901517),
    j = n(397244),
    A = n(729551),
    C = n(755039),
    S = n(29160),
    T = n(793574),
    y = n(688810),
    N = n(325445),
    E = n(954921),
    I = n(521502),
    k = n(380610),
    R = n(313961),
    O = n(617354),
    w = n(980923),
    D = n(206018),
    M = n(18235),
    P = n(183184),
    L = n(384059),
    U = n(480890),
    B = n(302223),
    G = n(379848),
    F = n(609425),
    V = n(922301),
    W = n(750112),
    H = n(643501),
    K = n(977700),
    z = n(74848),
    $ = n(449630),
    q = n(111864),
    Q = n(967054),
    Y = n(226540),
    J = n(227),
    X = n(772786),
    Z = n(134991),
    ee = n(967370),
    et = n(535731),
    en = n(201805),
    ea = n(655116),
    es = n(454719),
    ei = n(342296),
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
    ev = n(186111),
    eb = n(430452),
    ej = n(383501),
    eA = n(967198),
    eC = n(461213),
    eS = n(485296),
    eT = n(351906),
    ey = n(287809),
    eN = n(166403),
    eE = n(486020),
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
let ez = eD.Ay.getEnableHardwareAcceleration() ? x.JsQ : x.euF,
    e$ = 2.5 * ek.A.Millis.SECOND,
    eq = 2 * ek.A.Millis.MINUTE,
    eQ = 5 * ek.A.Millis.SECOND;
function eY(e) {
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
            nameplate: p,
            avatarDecoration: _,
            "data-jump-section": f,
        } = e,
        b = s.useRef(null),
        j = t ?? b,
        A = (0, eE.F_)({ avatarDecoration: _, size: (0, E.Te)(x._3J.SIZE_32) }),
        C = (0, F.A)(),
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
                (0, v.A)(() => l(!0), 750),
                s.useEffect(() => {
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
                { updateOpenPopoutRef: t, highlightBadge: i ? n : void 0, setHighlightBadge: a }
            );
        })(),
        N = (0, Q.K)(p);
    return null == d
        ? null
        : (0, a.jsx)(g.A, {
              object: eG.ZSU.AVATAR,
              children: (0, a.jsx)(ei.A, {
                  user: d,
                  targetElementRef: j,
                  clickTrap: !0,
                  preload: () =>
                      (0, es.A)(d.id, d.getAvatarURL(void 0, ei.S), {
                          type: "account_popout",
                          withMutualGuilds: !1,
                          withMutualFriends: !1,
                          guildId: void 0,
                      }),
                  renderPopout: (e, t) => {
                      let { closePopout: n, setPopoutRef: s } = e;
                      return (0, a.jsx)($.A, {
                          currentUser: d,
                          highlightBadge: T,
                          openedAt: t,
                          onClose: () => {
                              n?.();
                          },
                          setPopoutRef: s,
                      });
                  },
                  position: "top",
                  align: "left",
                  animation: x.YNO.Animation.FADE,
                  spacing: 14,
                  fixed: !0,
                  ignoreModalClicks: !0,
                  onRequestClose: () => {
                      m(), y(void 0);
                  },
                  children: (e) => (
                      S(e),
                      (0, a.jsxs)(x.DUT, {
                          innerRef: j,
                          style: N,
                          ...e,
                          onClick: (t) => {
                              e.onClick?.(t), u?.(t);
                          },
                          "aria-label": eH.intl.string(eH.t["3Uj+2p"]),
                          "data-jump-section": f,
                          className: l()(eK.R3, { [eK.ZQ]: null != p }),
                          children: [
                              (0, a.jsx)(ez, {
                                  size: x._3J.SIZE_32,
                                  src: d.getAvatarURL(void 0, 28, !1),
                                  avatarDecoration: A,
                                  "aria-label": d.username,
                                  status: o ? eG.clD.STREAMING : c,
                                  isSpeaking: n,
                                  isLatched: i,
                                  voiceDb: r,
                                  className: eK.my,
                              }),
                              (0, a.jsx)("div", { className: eK.oM, children: h(C) }),
                          ],
                      })
                  ),
              }),
          });
}
class eJ extends s.PureComponent {
    speakingWhileMutedTooltipTimeout = new u.Ep();
    speakingWhilePTTTooltipTimeout = new u.Ep();
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
        (0, P.A)(e, t, eG.JJy.ACCOUNT_PANEL), (0, L.X)(T.A.ACCOUNT, L.O.MIC, n);
    };
    handleToggleSelfDeaf = () => {
        let { serverDeaf: e, selfDeaf: t } = this.props;
        (0, M.A)(e, eG.JJy.ACCOUNT_PANEL), (0, L.X)(T.A.ACCOUNT, L.O.DEAFEN, !t);
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
            (0, p.L3)(e, async () => {
                let { default: e } = await n.e("95153").then(n.bind(n, 50120));
                return (n) =>
                    (0, a.jsx)(e, {
                        ...n,
                        user: t,
                        premiumSubscription: this.props.premiumSubscription,
                        webBuildOverride: this.props.webBuildOverride,
                        onInteraction: (0, U.s)("UserSettingsCogContextMenu", T.A.ACCOUNT),
                    });
            });
    };
    audioOnInteractionHandler = (0, U.s)("AudioDeviceMenu", T.A.ACCOUNT);
    handleInputAudioContextMenu = (e, t) => {
        this.dismissTooltips(),
            (0, p.L3)(e, async () => {
                let { default: e } = await n.e("78827").then(n.bind(n, 385318));
                return () => {
                    let { enabledInputProfiles: n } = (0, er.d)({ location: "Account" });
                    return (0, a.jsx)(y.f5, {
                        value: t,
                        children: (0, a.jsx)(e, {
                            onClose: p.Z_,
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
            (0, p.L3)(e, async () => {
                let { default: e } = await n.e("78827").then(n.bind(n, 385318));
                return () =>
                    (0, a.jsx)(y.f5, {
                        value: t,
                        children: (0, a.jsx)(e, {
                            onClose: p.Z_,
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
                performance.now() - this.lastSpeakingWhileMutedNotificationTime > eq;
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
                occluded: s,
                shouldShowPTTJoinTooltip: i,
                deviceChangedTooltipType: l,
            } = this.props,
            { hoveringOnMute: r } = this.state,
            o =
                void 0 === this.lastSpeakingWhilePTTNotificationTime ||
                performance.now() - this.lastSpeakingWhilePTTNotificationTime > eq;
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
                currentUser: s,
                status: i,
                userTag: l,
                voiceActivityStatusEnabled: r,
                voiceChannel: o,
            } = this.props;
        if (null == s) return null;
        if ((0, j.A)({ activities: t, status: i, applicationStream: n, voiceChannel: r ? o : void 0 }))
            return (0, a.jsx)(S.A, {
                hoverText: l,
                forceHover: e,
                children: (0, a.jsx)(A.A, {
                    user: s,
                    activities: t,
                    applicationStream: n,
                    voiceChannel: r ? o : void 0,
                    textClassName: eK.XD,
                    hideTooltip: !0,
                }),
            });
        let d = t?.find((e) => {
            let { type: t } = e;
            return t === eG.$pd.CUSTOM_STATUS;
        });
        return null != d
            ? (0, a.jsx)(S.A, {
                  hoverText: l,
                  forceHover: e,
                  children: (0, a.jsx)(B.A, { activity: d, emojiClassName: eK.Zg, className: eK.WO }),
              })
            : null != i && i !== eG.clD.UNKNOWN && s.hasUniqueUsername()
              ? (0, a.jsx)(S.A, {
                    hoverText: l,
                    forceHover: e,
                    children: (0, a.jsx)(C.A, { text: ew.Ay.humanizeStatus(i) }),
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
                              children: (0, a.jsx)(W.A, {
                                  userName: n,
                                  displayNameStyles: e,
                                  effectDisplayType: this.state.hovered ? V.G.ANIMATED : V.G.STATIC,
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
        return (0, a.jsx)(eY, {
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
        let { currentUser: e, nameplate: t, voiceChannel: n, isQuestBarEmpty: s, isListenAlongVisible: i } = this.props,
            r = this.state.hovered;
        return null == e
            ? null
            : (0, a.jsxs)(a.Fragment, {
                  children: [
                      (0, a.jsx)(x.skg, {
                          children: (e) =>
                              (0, a.jsxs)("div", {
                                  ref: this.containerRef,
                                  className: l()(eK.kL, { [eK.UG]: null != n, [eK.bc]: !s, [eK.G5]: i }),
                                  onMouseEnter: this.handleMouseEnter,
                                  onMouseLeave: this.handleMouseLeave,
                                  children: [
                                      (0, a.jsx)(J.A, { nameplate: t, hovered: r, placement: Y.u.ACCOUNT }),
                                      this.renderNameZone(e),
                                      (0, a.jsx)(eX, {
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
                      (0, a.jsx)(K.A, {}),
                  ],
              });
    }
}
function eX(e) {
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
            handleOutputAudioContextMenu: _,
            handleOpenAccountSettings: f,
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
        E = (0, Q.K)(j);
    return (0, a.jsxs)("div", {
        className: eK.Uo,
        style: E,
        children: [
            (0, a.jsx)(e7, {
                accountContainerRef: A,
                selfMute: n,
                serverMute: i,
                suppress: r,
                awaitingRemote: s,
                onMouseEnter: m,
                onMouseLeave: h,
                onClick: p,
                onContextMenu: g,
                iconForeground: null != j ? eK.t4 : void 0,
                nameplate: j,
                shouldShowSpeakingWhileMutedTooltip: o,
                shouldShowInputDeviceChangedTooltip: !o && "input" === C,
                shouldShowSpeakingWhilePTTTooltip: d,
                shouldShowPTTJoinTooltip: S,
                dismissTooltips: T,
                speaking: y,
                latched: N,
            }),
            (0, a.jsx)(e9, {
                selfDeaf: t,
                serverDeaf: l,
                onClick: x,
                onContextMenu: _,
                awaitingRemote: s,
                iconForeground: null != j ? eK.t4 : void 0,
                nameplate: j,
                shouldShowOutputDeviceChangedTooltip: "output" === C,
                dismissTooltips: T,
            }),
            (0, a.jsx)(e1, {
                isEligibleForPomelo: c,
                webBuildOverride: u,
                onClick: f,
                onContextMenu: v,
                dismissibleContents: b.settings,
                iconForeground: null != j ? eK.t4 : void 0,
                nameplate: j,
            }),
        ],
    });
}
function eZ(e) {
    let t = (0, d.bG)([ej.A], () => null != ej.A.getChannelId()),
        n = (0, z.Py)(e),
        a = s.useRef(new u.Ep()),
        [i, l] = s.useState(!1);
    s.useEffect(() => {
        t &&
            n &&
            (l(!0),
            a.current.start(eQ, () => {
                l(!1);
            }));
    }, [t, n]);
    let r = s.useCallback(() => {
        l(!1), a.current.stop();
    }, []);
    return (
        (0, f.l0)(() => {
            a.current.stop();
        }),
        { shouldShowTooltip: i, dismissTooltip: r }
    );
}
function e0() {
    let e = (0, d.bG)([ey.default], () => ey.default.getCurrentUser()),
        t = (0, d.bG)([eg.default], () => eg.default.getId()),
        {
            activities: n,
            streaming: i,
            status: l,
        } = (0, d.cf)([eC.A], () => {
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
        r = (0, d.bG)([ep.A], () => ep.A.getAnyStreamForUser(t)),
        u = (0, _.A)({ userId: t }),
        m = (0, d.bG)([eS.A], () => eS.A.isCurrentUserPTTLatched()),
        h = (0, d.bG)([eS.A], () => eS.A.getVoiceVolume(t)),
        p = ew.Ay.useUserTag(e, { decoration: "never" }),
        g = (0, d.bG)([eT.A], () => eT.A.hidePersonalInformation),
        f = (0, d.bG)([ej.A, e_.A], () => {
            let e = ej.A.getChannelId();
            return null != e ? e_.A.getChannel(e) : null;
        }),
        { mute: v, selfMute: j, suppress: A } = (0, ec.A)(f),
        { selfDeaf: C, deaf: S } = (0, ed.A)(f),
        E = (0, d.bG)([I.A], () => ((0, k.kK)() ? I.A.getCurrentBuildOverride().overrides?.discord_web : null)),
        O = (0, d.bG)([eN.A], () => eN.A.getPremiumTypeSubscription()),
        w = (0, d.bG)([eb.A], () => eb.A.getSpeakingWhileMuted()),
        D = (0, d.bG)([R.A], () => R.A.isFullscreenInContext()),
        M = (0, d.bG)([ev.A], () => ev.A.hasLayers()),
        P = (0, x.red)(x.DXt) || M || eO.P.isDisallowPopupsSet() || D,
        L = (0, X.g)(),
        U = (0, d.bG)([H.default], () => null != H.default.getAwaitingRemoteSessionInfo()),
        B = (0, d.bG)([eA.A], () => eA.A.getGuildId()),
        G = e?.avatarDecoration,
        F = (0, N.A)(G),
        V = ew.Ay.useName(e) ?? "",
        { voiceActivityStatusEnabled: W } = (0, b.G)({ location: "Account" }),
        K = (0, ee.lM)("Account"),
        { analyticsLocations: z } = (0, y.Ay)(T.A.ACCOUNT),
        $ = (0, q.r)({ user: e, guildId: void 0 }),
        { isQuestBarEmpty: Q, hasLoadedQuestBar: Y } = (0, en.c9)({ location: eV.rE.CONFLICT_CHECKS }),
        J = (0, d.bG)([ea.A, ey.default, ef.A], () => {
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
        Z = { avatar: [], settings: [] };
    !P &&
        (Z.avatar.push(c.M.DISPLAY_NAME_STYLES_COACHMARK),
        Z.avatar.push(c.M.WIDGETS_RTC_UPSELL_COACHMARK),
        K && Z.settings.push(c.M.NITRO_PRIVACY_PERK_BETA_COACHMARK));
    let { shouldShowTooltip: et, dismissTooltip: es } = eZ(eW.oh.AUDIO_INPUT),
        { shouldShowTooltip: ei, dismissTooltip: el } = eZ(eW.oh.AUDIO_OUTPUT),
        { shouldShowTooltip: er, dismissTooltip: eo } = (0, em.A)(),
        eu = (0, eh.A)(),
        ex = s.useMemo(() => (et ? "input" : ei ? "output" : void 0), [et, ei]),
        eE = s.useCallback(
            (e) => {
                switch (e) {
                    case "input":
                        es();
                        break;
                    case "output":
                        el();
                }
            },
            [es, el],
        );
    return (0, a.jsx)(y.f5, {
        value: z,
        children: (0, a.jsx)(eJ, {
            currentUser: e,
            username: V,
            activities: n,
            applicationStream: r,
            voiceChannel: f,
            dismissibleContents: Z,
            userTag: p,
            hidePrivateData: g,
            occluded: P,
            premiumSubscription: O,
            selfDeaf: C,
            selfMute: j,
            serverDeaf: S,
            serverMute: v,
            speaking: u,
            voiceDb: h,
            speakingWhileMuted: w,
            speakingWhilePTTInactive: eu,
            latched: m && null != f && !v && !j,
            status: l,
            streaming: i,
            suppress: A,
            webBuildOverride: E,
            awaitingRemote: U,
            isEligibleForPomelo: L,
            voiceActivityStatusEnabled: W,
            nameplate: $,
            selectedGuildId: B,
            avatarDecoration: F,
            isQuestBarEmpty: Q,
            hasLoadedQuestBar: Y,
            isListenAlongVisible: J,
            deviceChangedTooltipType: ex,
            onDismissDeviceChangedTooltip: () => eE(ex),
            shouldShowPTTJoinTooltip: er,
            dismissPTTJoinTooltip: eo,
        }),
    });
}
function e1(e) {
    let t,
        n,
        {
            webBuildOverride: i,
            isEligibleForPomelo: l,
            onClick: r,
            onContextMenu: o,
            dismissibleContents: d,
            iconForeground: u,
            nameplate: m,
        } = e,
        p = s.useRef(null),
        [g, _] = s.useState(!1);
    (0, f.Ay)(() => {
        let e = () => _(!0);
        return (
            eI._.subscribe(eG.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e),
            () => {
                eI._.unsubscribe(eG.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e);
            }
        );
    });
    let v = s.useCallback(() => {
        _(!1), r();
    }, [r]);
    t = null != i ? eH.intl.formatToPlainString(eH.t.Gzh6ZP, { webBuildOverride: i.id }) : eH.intl.string(eH.t.cduTBL);
    let b = x.Zes,
        j = (0, h.w)();
    return (
        (b = null != i ? x.Hnu : l ? x.vJI : j.Component),
        (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(eP.A, {
                    ref: p,
                    tooltipText: t,
                    tooltipPositionKey: n,
                    onClick: v,
                    onContextMenu: o,
                    "aria-label": eH.intl.string(eH.t.cduTBL),
                    icon: (0, a.jsx)(b, { size: "refresh_sm", color: "currentColor", className: u }),
                    ...j.events,
                    plated: null != m,
                }),
                (0, a.jsx)(Z.V, { targetElementRef: p, shouldShow: g, onDismiss: () => _(!1) }),
                !g &&
                    (0, a.jsx)(G.Ay, {
                        contentTypes: d,
                        groupName: eF.m.ACCOUNT_NAME_ZONE,
                        children: (e) => {
                            let { visibleContent: t, markAsDismissed: n } = e;
                            if (t === c.M.NITRO_PRIVACY_PERK_BETA_COACHMARK)
                                return (0, a.jsx)(et.y, { targetElementRef: p, markAsDismissed: n });
                        },
                    }),
            ],
        })
    );
}
function e7(e) {
    let t,
        {
            selfMute: n,
            serverMute: i,
            suppress: r,
            awaitingRemote: o,
            iconForeground: c,
            onMouseEnter: u,
            onMouseLeave: m,
            onClick: h,
            nameplate: p,
            shouldShowSpeakingWhileMutedTooltip: g,
            shouldShowSpeakingWhilePTTTooltip: _,
            shouldShowInputDeviceChangedTooltip: f,
            shouldShowPTTJoinTooltip: v,
            dismissTooltips: b,
            speaking: j,
            latched: A,
        } = e,
        C = n || r || i,
        S = (0, d.bG)([eb.A], () => eb.A.getMode() === eG.TBI.PUSH_TO_TALK),
        { showPTTIconIndicator: N } = eu.A.useConfig({ location: "MicrophoneButton" }),
        E = s.useRef(null),
        { Component: I, events: k, play: R } = (0, ex.q)(C),
        O = i || r ? x.O1p : I,
        M = (0, d.bG)([eb.A], () => eb.A.getSettings().modeOptions.shortcut),
        P = (0, w.A)(n, i, r, o);
    t = g
        ? { tooltipType: "green_void_do_not_use", tooltipText: eH.intl.string(eH.t["29gnR4"]), tooltipForceOpen: !0 }
        : v || _
          ? {
                tooltipType: "green_void_do_not_use",
                tooltipText: eH.intl.format(eH.t.c1qUOQ, { keybind: eM.dI(M).toLocaleUpperCase() }),
                tooltipForceOpen: !0,
            }
          : { tooltipText: P };
    let { analyticsLocations: L } = (0, y.Ay)(T.A.AUDIO_INPUT_BUTTON);
    s.useEffect(() => () => R(), [C, R]);
    let B = N && S,
        G = C ? x.LU0.colors.ICON_VOICE_MUTED : "currentColor",
        { name: F } = (0, z.x5)(eW.oh.AUDIO_INPUT),
        { enabledInputProfiles: V } = (0, er.d)({ location: "MicrophoneButton" });
    return (0, a.jsx)(y.f5, {
        value: L,
        children: (0, a.jsx)(x.YNO, {
            targetElementRef: E,
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (
                    b(),
                    (0, a.jsx)(y.f5, {
                        value: L,
                        children: (0, a.jsx)(D.A, {
                            onInteraction: (0, U.s)("AudioDeviceMenu", T.A.ACCOUNT),
                            onClose: t,
                            maybeRenderPTTCheckbox: !0,
                            renderInputProfiles: V.length > 0,
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
            animation: x.YNO.Animation.FADE,
            spacing: 4,
            children: (e, n) => {
                let { onClick: s } = e,
                    { isShown: i } = n,
                    r = i ? x.tN5 : x.abt;
                return (0, a.jsxs)("div", {
                    ref: E,
                    className: l()(eK.WU, { [eK.v8]: C, [eK.q6]: i }),
                    children: [
                        (0, a.jsx)(eP.A, {
                            "aria-checked": C,
                            "aria-label": eH.intl.string(eH.t.w4m945),
                            className: eK.$o,
                            disabled: o,
                            icon: (0, a.jsx)(O, { size: "custom", width: 20, height: 20, color: G, className: c }),
                            onClick: h,
                            onContextMenu: s,
                            onMouseEnter: () => {
                                u(), k.onMouseEnter();
                            },
                            onMouseLeave: () => {
                                m(), k.onMouseLeave();
                            },
                            plated: null != p,
                            redGlow: C,
                            role: "switch",
                            ...t,
                            children: B
                                ? (0, a.jsx)("div", { className: l()(eK.Ur, { [eK.zY]: j, [eK.yM]: A && !j }) })
                                : null,
                        }),
                        (0, a.jsx)(eP.A, {
                            "aria-label": f
                                ? eH.intl.formatToPlainString(eH.t["18wnuD"], { inputDeviceName: F })
                                : eH.intl.string(eH.t.fRzCbB),
                            className: l()(eK.UT, { [eK.q6]: i }),
                            disabled: o,
                            icon: (0, a.jsx)(r, { className: eK.$$, size: "custom", width: 12, height: 12, color: G }),
                            onClick: s,
                            onContextMenu: s,
                            onMouseEnter: u,
                            onMouseLeave: m,
                            plated: null != p,
                            redGlow: C,
                            tooltipType: f ? "green_void_do_not_use" : void 0,
                            tooltipForceOpen: f,
                            tooltipPositionKey: f
                                ? eH.intl.formatToPlainString(eH.t["18wnuD"], { inputDeviceName: F })
                                : void 0,
                            tooltipShouldShow: !i,
                            tooltipText: f
                                ? eH.intl.format(eH.t["18wnuD"], { inputDeviceName: F })
                                : eH.intl.string(eH.t.fRzCbB),
                        }),
                    ],
                });
            },
        }),
    });
}
function e9(e) {
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
        h = t || n,
        {
            Component: p,
            play: g,
            events: { onMouseEnter: _, onMouseLeave: f },
        } = (0, m.I)(h ? "undeafen" : "deafen"),
        v = n ? x.TJE : p,
        { name: b } = (0, z.x5)(eW.oh.AUDIO_OUTPUT),
        j = (0, O.A)(t, n, i),
        { analyticsLocations: A } = (0, y.Ay)(T.A.AUDIO_OUTPUT_BUTTON),
        C = s.useRef(null);
    return (
        s.useEffect(() => () => g(), [h, g]),
        (0, a.jsx)(y.f5, {
            value: A,
            children: (0, a.jsx)(x.YNO, {
                targetElementRef: C,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (
                        u(),
                        (0, a.jsx)(y.f5, {
                            value: A,
                            children: (0, a.jsx)(D.A, {
                                onInteraction: (0, U.s)("AudioDeviceMenu", T.A.ACCOUNT),
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
                animation: x.YNO.Animation.FADE,
                spacing: 4,
                children: (e, t) => {
                    let { onClick: s } = e,
                        { isShown: u } = t,
                        m = u ? x.tN5 : x.abt;
                    return (0, a.jsxs)("div", {
                        ref: C,
                        className: l()(eK.WU, { [eK.v8]: h, [eK.q6]: u }),
                        children: [
                            (0, a.jsx)(eP.A, {
                                "aria-checked": h,
                                "aria-label": eH.intl.string(eH.t.wjcRFX),
                                className: eK.$o,
                                disabled: i,
                                icon: (0, a.jsx)(v, {
                                    size: "custom",
                                    width: 20,
                                    height: 20,
                                    color: h ? x.LU0.colors.ICON_VOICE_MUTED : "currentColor",
                                    className: o,
                                }),
                                iconForeground: h ? eK.of : void 0,
                                innerClassName: l()({ [eK.T3]: n }),
                                onClick: r,
                                onContextMenu: s,
                                onMouseEnter: _,
                                onMouseLeave: f,
                                plated: null != d,
                                redGlow: h,
                                role: "switch",
                                tooltipText: j,
                            }),
                            (0, a.jsx)(eP.A, {
                                className: l()(eK.UT, { [eK.q6]: u }),
                                disabled: i,
                                icon: (0, a.jsx)(m, {
                                    className: eK.$$,
                                    size: "custom",
                                    width: 12,
                                    height: 12,
                                    color: h ? x.LU0.colors.ICON_VOICE_MUTED : "currentColor",
                                }),
                                onClick: s,
                                onContextMenu: s,
                                plated: null != d,
                                redGlow: h,
                                tooltipType: c ? "green_void_do_not_use" : void 0,
                                tooltipForceOpen: c,
                                tooltipPositionKey: c
                                    ? eH.intl.formatToPlainString(eH.t["f+DDY/"], { outputDeviceName: b })
                                    : void 0,
                                tooltipShouldShow: !u,
                                tooltipText: c
                                    ? eH.intl.format(eH.t["f+DDY/"], { outputDeviceName: b })
                                    : eH.intl.string(eH.t.aA4Vce),
                                "aria-label": c
                                    ? eH.intl.formatToPlainString(eH.t["f+DDY/"], { outputDeviceName: b })
                                    : eH.intl.string(eH.t.aA4Vce),
                            }),
                        ],
                    });
                },
            }),
        })
    );
}
