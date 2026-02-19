n.d(t, { A: () => eW, g: () => eG }), n(321073);
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
    h = n(397927),
    x = n(442433),
    p = n(820284),
    g = n(717558),
    _ = n(964486),
    f = n(220839),
    b = n(901517),
    v = n(397244),
    j = n(729551),
    C = n(755039),
    A = n(29160),
    T = n(793574),
    y = n(688810),
    S = n(325445),
    E = n(954921),
    N = n(521502),
    I = n(380610),
    k = n(313961),
    R = n(18235),
    O = n(183184),
    w = n(384059),
    D = n(480890),
    M = n(302223),
    P = n(609425),
    L = n(922301),
    U = n(750112),
    B = n(643501),
    G = n(977700),
    F = n(74848),
    V = n(449630),
    W = n(111864),
    H = n(967054),
    K = n(226540),
    z = n(227),
    $ = n(967370),
    q = n(201805),
    Q = n(655116),
    Y = n(454719),
    J = n(342296),
    X = n(780964),
    Z = n(77735),
    ee = n(840065),
    et = n(167579),
    en = n(173660),
    ea = n(41580),
    ei = n(935101),
    es = n(616356),
    el = n(961350),
    er = n(734057),
    eo = n(629016),
    ed = n(186111),
    ec = n(430452),
    eu = n(383501),
    em = n(967198),
    eh = n(461213),
    ex = n(485296),
    ep = n(287809),
    eg = n(486020),
    e_ = n(203982),
    ef = n(927813),
    eb = n(403362),
    ev = n(536194),
    ej = n(427262),
    eC = n(837921),
    eA = n(994314),
    eT = n(485599),
    ey = n(809991),
    eS = n(226513),
    eE = n(383952),
    eN = n(245750),
    eI = n(652215),
    ek = n(654487),
    eR = n(731854),
    eO = n(985018),
    ew = n(146664);
let eD = eC.Ay.getEnableHardwareAcceleration() ? h.JsQ : h.euF,
    eM = 2.5 * ef.A.Millis.SECOND,
    eP = 2 * ef.A.Millis.MINUTE,
    eL = 2 * ef.A.Millis.MINUTE,
    eU = 5 * ef.A.Millis.SECOND;
function eB(e) {
    let {
            ref: t,
            speaking: n,
            voiceDb: s = -1 / 0,
            streaming: r,
            currentUser: o,
            status: d,
            handleClick: c,
            handleMouseLeave: u,
            renderNameTag: m,
            nameplate: x,
            avatarDecoration: g,
            "data-jump-section": _,
        } = e,
        b = i.useRef(null),
        v = t ?? b,
        j = (0, eg.F_)({ avatarDecoration: g, size: (0, E.Te)(h._3J.SIZE_32) }),
        C = (0, P.A)(),
        {
            updateOpenPopoutRef: A,
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
                (0, f.A)(() => l(!0), 750),
                i.useEffect(() => {
                    let t = (t) => {
                        let { highlightBadge: n } = t;
                        null != n && a(n), e.current?.();
                    };
                    return (
                        e_._.subscribe(eI.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t),
                        () => {
                            e_._.unsubscribe(eI.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t);
                        }
                    );
                }),
                { updateOpenPopoutRef: t, highlightBadge: s ? n : void 0, setHighlightBadge: a }
            );
        })(),
        S = (0, H.K)(x);
    return null == o
        ? null
        : (0, a.jsx)(p.A, {
              object: eI.ZSU.AVATAR,
              children: (0, a.jsx)(J.A, {
                  user: o,
                  targetElementRef: v,
                  clickTrap: !0,
                  preload: () =>
                      (0, Y.A)(o.id, o.getAvatarURL(void 0, J.S), {
                          type: "account_popout",
                          withMutualGuilds: !1,
                          withMutualFriends: !1,
                          guildId: void 0,
                      }),
                  renderPopout: (e, t) => {
                      let { closePopout: n, setPopoutRef: i } = e;
                      return (0, a.jsx)(V.A, {
                          currentUser: o,
                          highlightBadge: T,
                          openedAt: t,
                          onClose: () => {
                              n?.();
                          },
                          setPopoutRef: i,
                          className: ew.dI,
                      });
                  },
                  position: "top",
                  align: "left",
                  animation: h.YNO.Animation.FADE,
                  spacing: 14,
                  fixed: !0,
                  ignoreModalClicks: !0,
                  onRequestClose: () => {
                      u(), y(void 0);
                  },
                  children: (e) => {
                      A(e);
                      let { onMouseEnter: t, onMouseDown: i, ...u } = e;
                      return (0, a.jsxs)("div", {
                          ref: v,
                          style: S,
                          onMouseEnter: t,
                          onMouseDown: i,
                          onClick: (t) => {
                              e.onClick?.(t), c?.(t);
                          },
                          className: l()(ew.Q9, { [ew.ZQ]: null != x }),
                          children: [
                              (0, a.jsx)(h.DUT, {
                                  ...u,
                                  onClick: (t) => {
                                      t.stopPropagation(), e.onClick?.(t), c?.(t);
                                  },
                                  "aria-label": eO.intl.string(eO.t["5fWB8U"]),
                                  focusProps: { ringTarget: v },
                                  className: ew.$n,
                                  "data-jump-section": _,
                              }),
                              (0, a.jsx)(eD, {
                                  size: h._3J.SIZE_32,
                                  src: o.getAvatarURL(void 0, 28, !1),
                                  avatarDecoration: j,
                                  status: r ? eI.clD.STREAMING : d,
                                  isSpeaking: n,
                                  voiceDb: s,
                                  className: ew.my,
                                  "aria-hidden": !0,
                              }),
                              (0, a.jsx)("div", { className: ew.oM, children: m(C) }),
                          ],
                      });
                  },
              }),
          });
}
class eG extends i.PureComponent {
    speakingWhileMutedTooltipTimeout = new m.Ep();
    speakingWhilePTTTooltipTimeout = new m.Ep();
    speakingWhilePTTInactiveBackoff = new d.A(eL, null, !1);
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
        (0, O.A)(e, t, eI.JJy.ACCOUNT_PANEL), (0, w.X)(T.A.ACCOUNT, w.O.MIC, n);
    };
    handleToggleSelfDeaf = () => {
        let { serverDeaf: e, selfDeaf: t } = this.props;
        (0, R.A)(e, eI.JJy.ACCOUNT_PANEL), (0, w.X)(T.A.ACCOUNT, w.O.DEAFEN, !t);
    };
    handleOpenAccountSettings = () => {
        this.dismissTooltips(),
            eu.A.isConnected()
                ? (0, ee.openUserSettings)(X.X.VOICE_AND_VIDEO_PANEL, { section: eI.nc_.VOICE })
                : (0, ee.openUserSettings)();
    };
    handleOpenSettingsContextMenu = (e) => {
        let { currentUser: t } = this.props;
        null != t &&
            (0, x.L3)(e, async () => {
                let { default: e } = await n.e("95153").then(n.bind(n, 50120));
                return (n) =>
                    (0, a.jsx)(e, {
                        ...n,
                        user: t,
                        webBuildOverride: this.props.webBuildOverride,
                        onInteraction: (0, D.s)("UserSettingsCogContextMenu", T.A.ACCOUNT),
                    });
            });
    };
    audioOnInteractionHandler = (0, D.s)("AudioDeviceMenu", T.A.ACCOUNT);
    handleInputAudioContextMenu = (e, t) => {
        this.dismissTooltips(),
            (0, x.L3)(e, async () => {
                let { default: e } = await n.e("78827").then(n.bind(n, 385318));
                return () => {
                    let { enabledInputProfiles: n } = (0, Z.d)({ location: "Account" });
                    return (0, a.jsx)(y.f5, {
                        value: t,
                        children: (0, a.jsx)(e, {
                            onClose: x.Z_,
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
            (0, x.L3)(e, async () => {
                let { default: e } = await n.e("78827").then(n.bind(n, 385318));
                return () =>
                    (0, a.jsx)(y.f5, {
                        value: t,
                        children: (0, a.jsx)(e, {
                            onClose: x.Z_,
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
                performance.now() - this.lastSpeakingWhileMutedNotificationTime > eP;
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
                      this.speakingWhileMutedTooltipTimeout.start(eM, () =>
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
                      this.speakingWhilePTTTooltipTimeout.start(eM, () =>
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
        if ((0, v.A)({ activities: t, status: s, applicationStream: n, voiceChannel: r ? o : void 0 }))
            return (0, a.jsxs)(A.A, {
                hoverText: l,
                forceHover: e,
                children: [
                    (0, a.jsx)(h.AC4, { children: ej.Ay.humanizeStatus(s) }),
                    (0, a.jsx)(j.A, {
                        user: i,
                        activities: t,
                        applicationStream: n,
                        voiceChannel: r ? o : void 0,
                        textClassName: ew.XD,
                        hideTooltip: !0,
                    }),
                ],
            });
        let d = t?.find((e) => {
            let { type: t } = e;
            return t === eI.$pd.CUSTOM_STATUS;
        });
        return null != d
            ? (0, a.jsxs)(A.A, {
                  hoverText: l,
                  forceHover: e,
                  children: [
                      (0, a.jsx)(h.AC4, { children: ej.Ay.humanizeStatus(s) }),
                      (0, a.jsx)(M.A, { activity: d, emojiClassName: ew.Zg, className: ew.WO }),
                  ],
              })
            : null != s && s !== eI.clD.UNKNOWN && i.hasUniqueUsername()
              ? (0, a.jsx)(A.A, {
                    hoverText: l,
                    forceHover: e,
                    children: (0, a.jsx)(C.A, { text: ej.Ay.humanizeStatus(s) }),
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
                          className: ew.eW,
                          children: (0, a.jsx)(eT.A, {
                              className: l()({ [ew.e8]: null != e }),
                              children: (0, a.jsx)(U.A, {
                                  userName: n,
                                  displayNameStyles: e,
                                  effectDisplayType: this.state.hovered ? L.G.ANIMATED : L.G.STATIC,
                                  loop: !0,
                                  inProfile: !0,
                              }),
                          }),
                      }),
                      (0, a.jsx)("div", {
                          className: ew.XP,
                          children: (0, a.jsx)(eA.A, { children: this.renderStatus() }),
                      }),
                  ],
              });
    };
    renderNameZone(e) {
        let { currentUser: t, dismissibleContents: n } = this.props;
        return null == t
            ? null
            : (0, a.jsx)(ey.A, {
                  guildId: this.props.selectedGuildId ?? null,
                  currentUser: t,
                  targetElementRef: this.avatarWithPopoutRef,
                  additionalDCs: n.avatar,
                  children: (0, a.jsx)(eB, {
                      ...this.props,
                      ref: this.avatarWithPopoutRef,
                      handleMouseLeave: this.handleMouseLeave,
                      renderNameTag: this.renderNameTag,
                      "data-jump-section": e["data-jump-section"],
                  }),
              });
    }
    render() {
        let { currentUser: e, nameplate: t, voiceChannel: n, isQuestBarEmpty: i, isListenAlongVisible: s } = this.props,
            r = this.state.hovered;
        return null == e
            ? null
            : (0, a.jsxs)(a.Fragment, {
                  children: [
                      (0, a.jsx)(h.skg, {
                          children: (e) =>
                              (0, a.jsxs)("div", {
                                  ref: this.containerRef,
                                  className: l()(ew.kL, { [ew.UG]: null != n, [ew.bc]: !i, [ew.G5]: s }),
                                  onMouseEnter: this.handleMouseEnter,
                                  onMouseLeave: this.handleMouseLeave,
                                  children: [
                                      (0, a.jsx)(z.A, { nameplate: t, hovered: r, placement: K.u.ACCOUNT }),
                                      this.renderNameZone(e),
                                      (0, a.jsx)(eF, {
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
                      (0, a.jsx)(G.A, {}),
                  ],
              });
    }
}
function eF(e) {
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
            deviceChangedTooltipType: C,
            shouldShowPTTJoinTooltip: A = !1,
            dismissTooltips: T,
            speaking: y,
        } = e,
        S = (0, H.K)(v);
    return (0, a.jsxs)("div", {
        className: ew.Uo,
        style: S,
        children: [
            (0, a.jsx)(eE.A, {
                accountContainerRef: j,
                selfMute: n,
                serverMute: s,
                suppress: r,
                awaitingRemote: i,
                onMouseEnter: u,
                onMouseLeave: m,
                onClick: x,
                onContextMenu: p,
                iconForeground: null != v ? ew.t4 : void 0,
                nameplate: v,
                shouldShowSpeakingWhileMutedTooltip: o,
                shouldShowInputDeviceChangedTooltip: !o && "input" === C,
                shouldShowSpeakingWhilePTTTooltip: d,
                shouldShowPTTJoinTooltip: A,
                dismissTooltips: T,
                speaking: y,
            }),
            (0, a.jsx)(eS.A, {
                selfDeaf: t,
                serverDeaf: l,
                onClick: h,
                onContextMenu: g,
                awaitingRemote: i,
                iconForeground: null != v ? ew.t4 : void 0,
                nameplate: v,
                shouldShowOutputDeviceChangedTooltip: "output" === C,
                dismissTooltips: T,
            }),
            (0, a.jsx)(eN.A, {
                webBuildOverride: c,
                onClick: _,
                onContextMenu: f,
                dismissibleContents: b.settings,
                iconForeground: null != v ? ew.t4 : void 0,
                nameplate: v,
            }),
        ],
    });
}
function eV(e) {
    let t = (0, c.bG)([eu.A], () => null != eu.A.getChannelId()),
        n = (0, F.Py)(e),
        a = i.useRef(new m.Ep()),
        [s, l] = i.useState(!1);
    i.useEffect(() => {
        t &&
            n &&
            (l(!0),
            a.current.start(eU, () => {
                l(!1);
            }));
    }, [t, n]);
    let r = i.useCallback(() => {
        l(!1), a.current.stop();
    }, []);
    return (
        (0, _.l0)(() => {
            a.current.stop();
        }),
        { shouldShowTooltip: s, dismissTooltip: r }
    );
}
function eW() {
    let e = (0, c.bG)([ep.default], () => ep.default.getCurrentUser()),
        t = (0, c.bG)([el.default], () => el.default.getId()),
        {
            activities: n,
            streaming: s,
            status: l,
        } = (0, c.cf)([eh.A], () => {
            let e = eh.A.getActivities();
            return {
                activities: e,
                streaming:
                    null !=
                    e.find((e) => {
                        let { type: t } = e;
                        return t === eI.$pd.STREAMING;
                    }),
                status: eh.A.getStatus(),
            };
        }),
        r = (0, c.bG)([es.A], () => es.A.getAnyStreamForUser(t)),
        d = (0, g.A)({ userId: t }),
        m = (0, c.bG)([ex.A], () => ex.A.getVoiceVolume(t)),
        x = ej.Ay.useUserTag(e, { decoration: "never" }),
        p = (0, c.bG)([eu.A, er.A], () => {
            let e = eu.A.getChannelId();
            return null != e ? er.A.getChannel(e) : null;
        }),
        { mute: _, selfMute: f, suppress: v } = (0, en.A)(p),
        { selfDeaf: j, deaf: C } = (0, et.A)(p),
        A = (0, c.bG)([N.A], () => ((0, I.kK)() ? N.A.getCurrentBuildOverride().overrides?.discord_web : null)),
        E = (0, c.bG)([ec.Ay], () => ec.Ay.getSpeakingWhileMuted()),
        R = (0, c.bG)([k.A], () => k.A.isFullscreenInContext()),
        O = (0, c.bG)([ed.A], () => ed.A.hasLayers()),
        w = (0, h.red)(h.DXt) || O || ev.P.isDisallowPopupsSet() || R,
        D = (0, c.bG)([B.default], () => null != B.default.getAwaitingRemoteSessionInfo()),
        M = (0, c.bG)([em.A], () => em.A.getGuildId()),
        P = e?.avatarDecoration,
        L = (0, S.A)(P),
        U = ej.Ay.useName(e) ?? "",
        { voiceActivityStatusEnabled: G } = (0, b.G)({ location: "Account" }),
        F = (0, $.lM)("Account"),
        { analyticsLocations: V } = (0, y.Ay)(T.A.ACCOUNT),
        H = (0, W.r)({ user: e, guildId: void 0 }),
        { isQuestBarEmpty: K } = (0, q.c9)({ location: ek.rE.CONFLICT_CHECKS }),
        z = (0, c.bG)([Q.A, ep.default, eo.A], () => {
            let e,
                t = Q.A.getSyncingWith(),
                n = Q.A.getActivity(),
                a = [];
            return (
                null != t ? (e = t.partyId) : null != n && null != n.party && null != n.party.id && (e = n.party.id),
                null != e &&
                    (a = o()(Array.from(eo.A.getParty(e) ?? []))
                        .map((e) => ep.default.getUser(e))
                        .filter(eb.Vq)
                        .value()),
                a.length > 1
            );
        }),
        Y = { avatar: [], settings: [] };
    !w &&
        (Y.avatar.push(u.M.DISPLAY_NAME_STYLES_COACHMARK),
        Y.avatar.push(u.M.WIDGETS_RTC_UPSELL_COACHMARK),
        F && Y.settings.push(u.M.NITRO_PRIVACY_PERK_BETA_COACHMARK));
    let { shouldShowTooltip: J, dismissTooltip: X } = eV(eR.oh.AUDIO_INPUT),
        { shouldShowTooltip: Z, dismissTooltip: ee } = eV(eR.oh.AUDIO_OUTPUT),
        { shouldShowTooltip: eg, dismissTooltip: e_ } = (0, ea.A)(),
        ef = (0, ei.A)(),
        eC = i.useMemo(() => (J ? "input" : Z ? "output" : void 0), [J, Z]),
        eA = i.useCallback(
            (e) => {
                switch (e) {
                    case "input":
                        X();
                        break;
                    case "output":
                        ee();
                }
            },
            [X, ee],
        );
    return (0, a.jsx)(y.f5, {
        value: V,
        children: (0, a.jsx)(eG, {
            currentUser: e,
            username: U,
            activities: n,
            applicationStream: r,
            voiceChannel: p,
            dismissibleContents: Y,
            userTag: x,
            occluded: w,
            selfDeaf: j,
            selfMute: f,
            serverDeaf: C,
            serverMute: _,
            speaking: d,
            voiceDb: m,
            speakingWhileMuted: E,
            speakingWhilePTTInactive: ef,
            status: l,
            streaming: s,
            suppress: v,
            webBuildOverride: A,
            awaitingRemote: D,
            voiceActivityStatusEnabled: G,
            nameplate: H,
            selectedGuildId: M,
            avatarDecoration: L,
            isQuestBarEmpty: K,
            isListenAlongVisible: z,
            deviceChangedTooltipType: eC,
            onDismissDeviceChangedTooltip: () => eA(eC),
            shouldShowPTTJoinTooltip: eg,
            dismissPTTJoinTooltip: e_,
        }),
    });
}
