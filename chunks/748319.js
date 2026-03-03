n.d(t, { A: () => eV, g: () => eB }), n(321073);
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
    b = n(397244),
    v = n(729551),
    j = n(755039),
    A = n(29160),
    C = n(793574),
    T = n(688810),
    y = n(325445),
    S = n(954921),
    E = n(521502),
    N = n(380610),
    I = n(313961),
    k = n(18235),
    R = n(183184),
    O = n(384059),
    w = n(480890),
    D = n(302223),
    M = n(609425),
    P = n(922301),
    L = n(750112),
    U = n(643501),
    B = n(977700),
    G = n(74848),
    F = n(449630),
    V = n(111864),
    W = n(967054),
    H = n(226540),
    K = n(227),
    z = n(967370),
    $ = n(201805),
    q = n(655116),
    Q = n(454719),
    Y = n(342296),
    J = n(780964),
    X = n(77735),
    Z = n(840065),
    ee = n(167579),
    et = n(173660),
    en = n(41580),
    ea = n(935101),
    ei = n(616356),
    es = n(961350),
    el = n(734057),
    er = n(629016),
    eo = n(186111),
    ed = n(430452),
    ec = n(383501),
    eu = n(967198),
    em = n(461213),
    eh = n(485296),
    ex = n(287809),
    ep = n(486020),
    eg = n(203982),
    e_ = n(927813),
    ef = n(403362),
    eb = n(536194),
    ev = n(427262),
    ej = n(837921),
    eA = n(994314),
    eC = n(485599),
    eT = n(809991),
    ey = n(226513),
    eS = n(383952),
    eE = n(245750),
    eN = n(652215),
    eI = n(654487),
    ek = n(731854),
    eR = n(985018),
    eO = n(146664);
let ew = ej.Ay.getEnableHardwareAcceleration() ? h.JsQ : h.euF,
    eD = 2.5 * e_.A.Millis.SECOND,
    eM = 2 * e_.A.Millis.MINUTE,
    eP = 2 * e_.A.Millis.MINUTE,
    eL = 5 * e_.A.Millis.SECOND;
function eU(e) {
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
        j = (0, ep.F_)({ avatarDecoration: g, size: (0, S.Te)(h._3J.SIZE_32) }),
        A = (0, M.A)(),
        {
            updateOpenPopoutRef: C,
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
                        eg._.subscribe(eN.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t),
                        () => {
                            eg._.unsubscribe(eN.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t);
                        }
                    );
                }),
                { updateOpenPopoutRef: t, highlightBadge: s ? n : void 0, setHighlightBadge: a }
            );
        })(),
        E = (0, W.K)(x);
    return null == o
        ? null
        : (0, a.jsx)(p.A, {
              object: eN.ZSU.AVATAR,
              children: (0, a.jsx)(Y.A, {
                  user: o,
                  targetElementRef: v,
                  clickTrap: !0,
                  preload: () =>
                      (0, Q.A)(o.id, o.getAvatarURL(void 0, Y.S), {
                          type: "account_popout",
                          withMutualGuilds: !1,
                          withMutualFriends: !1,
                          guildId: void 0,
                      }),
                  renderPopout: (e, t) => {
                      let { closePopout: n, setPopoutRef: i } = e;
                      return (0, a.jsx)(F.A, {
                          currentUser: o,
                          highlightBadge: T,
                          openedAt: t,
                          onClose: () => {
                              n?.();
                          },
                          setPopoutRef: i,
                          className: eO.dI,
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
                      C(e);
                      let { onMouseEnter: t, onMouseDown: i, ...u } = e;
                      return (0, a.jsxs)("div", {
                          ref: v,
                          style: E,
                          onMouseEnter: t,
                          onMouseDown: i,
                          onClick: (t) => {
                              e.onClick?.(t), c?.(t);
                          },
                          className: l()(eO.Q9, { [eO.ZQ]: null != x }),
                          children: [
                              (0, a.jsx)(h.DUT, {
                                  ...u,
                                  onClick: (t) => {
                                      t.stopPropagation(), e.onClick?.(t), c?.(t);
                                  },
                                  "aria-label": eR.intl.string(eR.t["5fWB8U"]),
                                  focusProps: { ringTarget: v },
                                  className: eO.$n,
                                  "data-jump-section": _,
                              }),
                              (0, a.jsx)(ew, {
                                  size: h._3J.SIZE_32,
                                  src: o.getAvatarURL(void 0, 28, !1),
                                  avatarDecoration: j,
                                  status: r ? eN.clD.STREAMING : d,
                                  isSpeaking: n,
                                  voiceDb: s,
                                  className: eO.my,
                                  "aria-hidden": !0,
                              }),
                              (0, a.jsx)("div", { className: eO.oM, children: m(A) }),
                          ],
                      });
                  },
              }),
          });
}
class eB extends i.PureComponent {
    speakingWhileMutedTooltipTimeout = new m.Ep();
    speakingWhilePTTTooltipTimeout = new m.Ep();
    speakingWhilePTTInactiveBackoff = new d.A(eP, null, !1);
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
        (0, R.A)(e, t, eN.JJy.ACCOUNT_PANEL), (0, O.X)(C.A.ACCOUNT, O.O.MIC, n);
    };
    handleToggleSelfDeaf = () => {
        let { serverDeaf: e, selfDeaf: t } = this.props;
        (0, k.A)(e, eN.JJy.ACCOUNT_PANEL), (0, O.X)(C.A.ACCOUNT, O.O.DEAFEN, !t);
    };
    handleOpenAccountSettings = () => {
        this.dismissTooltips(),
            ec.A.isConnected()
                ? (0, Z.openUserSettings)(J.X.VOICE_AND_VIDEO_PANEL, { section: eN.nc_.VOICE })
                : (0, Z.openUserSettings)();
    };
    handleOpenSettingsContextMenu = (e) => {
        let { currentUser: t } = this.props;
        null != t &&
            (0, x.L3)(e, async () => {
                let { default: e } = await n.e("50143").then(n.bind(n, 92962));
                return (t) =>
                    (0, a.jsx)(e, { ...t, onClose: x.Z_, onInteraction: (0, w.s)("UserSettingsMenu", C.A.ACCOUNT) });
            });
    };
    audioOnInteractionHandler = (0, w.s)("AudioDeviceMenu", C.A.ACCOUNT);
    handleInputAudioContextMenu = (e, t) => {
        this.dismissTooltips(),
            (0, x.L3)(e, async () => {
                let { default: e } = await n.e("78827").then(n.bind(n, 385318));
                return () => {
                    let { enabledInputProfiles: n } = (0, X.d)({ location: "Account" });
                    return (0, a.jsx)(T.f5, {
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
                    (0, a.jsx)(T.f5, {
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
                performance.now() - this.lastSpeakingWhileMutedNotificationTime > eM;
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
                      this.speakingWhileMutedTooltipTimeout.start(eD, () =>
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
                      this.speakingWhilePTTTooltipTimeout.start(eD, () =>
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
                voiceChannel: r,
            } = this.props;
        if (null == i) return null;
        if ((0, b.A)({ activities: t, status: s, applicationStream: n, voiceChannel: r }))
            return (0, a.jsxs)(A.A, {
                hoverText: l,
                forceHover: e,
                children: [
                    (0, a.jsx)(h.AC4, { children: ev.Ay.humanizeStatus(s) }),
                    (0, a.jsx)(v.A, {
                        user: i,
                        activities: t,
                        applicationStream: n,
                        voiceChannel: r,
                        textClassName: eO.XD,
                        hideTooltip: !0,
                    }),
                ],
            });
        let o = t?.find((e) => {
            let { type: t } = e;
            return t === eN.$pd.CUSTOM_STATUS;
        });
        return null != o
            ? (0, a.jsxs)(A.A, {
                  hoverText: l,
                  forceHover: e,
                  children: [
                      (0, a.jsx)(h.AC4, { children: ev.Ay.humanizeStatus(s) }),
                      (0, a.jsx)(D.A, { activity: o, emojiClassName: eO.Zg, className: eO.WO }),
                  ],
              })
            : null != s && s !== eN.clD.UNKNOWN && i.hasUniqueUsername()
              ? (0, a.jsx)(A.A, {
                    hoverText: l,
                    forceHover: e,
                    children: (0, a.jsx)(j.A, { text: ev.Ay.humanizeStatus(s) }),
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
                          className: eO.eW,
                          children: (0, a.jsx)(eC.A, {
                              className: l()({ [eO.e8]: null != e }),
                              children: (0, a.jsx)(L.A, {
                                  userName: n,
                                  displayNameStyles: e,
                                  effectDisplayType: this.state.hovered ? P.G.ANIMATED : P.G.STATIC,
                                  loop: !0,
                                  inProfile: !0,
                              }),
                          }),
                      }),
                      (0, a.jsx)("div", {
                          className: eO.XP,
                          children: (0, a.jsx)(eA.A, { children: this.renderStatus() }),
                      }),
                  ],
              });
    };
    renderNameZone(e) {
        let { currentUser: t, dismissibleContents: n } = this.props;
        return null == t
            ? null
            : (0, a.jsx)(eT.A, {
                  guildId: this.props.selectedGuildId ?? null,
                  currentUser: t,
                  targetElementRef: this.avatarWithPopoutRef,
                  additionalDCs: n.avatar,
                  children: (0, a.jsx)(eU, {
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
                                  className: l()(eO.kL, { [eO.UG]: null != n, [eO.bc]: !i, [eO.G5]: s }),
                                  onMouseEnter: this.handleMouseEnter,
                                  onMouseLeave: this.handleMouseLeave,
                                  children: [
                                      (0, a.jsx)(K.A, { nameplate: t, hovered: r, placement: H.u.ACCOUNT }),
                                      this.renderNameZone(e),
                                      (0, a.jsx)(eG, {
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
                      (0, a.jsx)(B.A, {}),
                  ],
              });
    }
}
function eG(e) {
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
            dismissTooltips: T,
            speaking: y,
        } = e,
        S = (0, W.K)(v);
    return (0, a.jsxs)("div", {
        className: eO.Uo,
        style: S,
        children: [
            (0, a.jsx)(eS.A, {
                accountContainerRef: j,
                selfMute: n,
                serverMute: s,
                suppress: r,
                awaitingRemote: i,
                onMouseEnter: u,
                onMouseLeave: m,
                onClick: x,
                onContextMenu: p,
                iconForeground: null != v ? eO.t4 : void 0,
                nameplate: v,
                shouldShowSpeakingWhileMutedTooltip: o,
                shouldShowInputDeviceChangedTooltip: !o && "input" === A,
                shouldShowSpeakingWhilePTTTooltip: d,
                shouldShowPTTJoinTooltip: C,
                dismissTooltips: T,
                speaking: y,
            }),
            (0, a.jsx)(ey.A, {
                selfDeaf: t,
                serverDeaf: l,
                onClick: h,
                onContextMenu: g,
                awaitingRemote: i,
                iconForeground: null != v ? eO.t4 : void 0,
                nameplate: v,
                shouldShowOutputDeviceChangedTooltip: "output" === A,
                dismissTooltips: T,
            }),
            (0, a.jsx)(eE.A, {
                webBuildOverride: c,
                onClick: _,
                onContextMenu: f,
                dismissibleContents: b.settings,
                iconForeground: null != v ? eO.t4 : void 0,
                nameplate: v,
            }),
        ],
    });
}
function eF(e) {
    let t = (0, c.bG)([ec.A], () => null != ec.A.getChannelId()),
        n = (0, G.Py)(e),
        a = i.useRef(new m.Ep()),
        [s, l] = i.useState(!1);
    i.useEffect(() => {
        t &&
            n &&
            (l(!0),
            a.current.start(eL, () => {
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
function eV() {
    let e = (0, c.bG)([ex.default], () => ex.default.getCurrentUser()),
        t = (0, c.bG)([es.default], () => es.default.getId()),
        {
            activities: n,
            streaming: s,
            status: l,
        } = (0, c.cf)([em.A], () => {
            let e = em.A.getActivities();
            return {
                activities: e,
                streaming:
                    null !=
                    e.find((e) => {
                        let { type: t } = e;
                        return t === eN.$pd.STREAMING;
                    }),
                status: em.A.getStatus(),
            };
        }),
        r = (0, c.bG)([ei.A], () => ei.A.getAnyStreamForUser(t)),
        d = (0, g.A)({ userId: t }),
        m = (0, c.bG)([eh.A], () => eh.A.getVoiceVolume(t)),
        x = ev.Ay.useUserTag(e, { decoration: "never" }),
        p = (0, c.bG)([ec.A, el.A], () => {
            let e = ec.A.getChannelId();
            return null != e ? el.A.getChannel(e) : null;
        }),
        { mute: _, selfMute: f, suppress: b } = (0, et.A)(p),
        { selfDeaf: v, deaf: j } = (0, ee.A)(p),
        A = (0, c.bG)([E.A], () => ((0, N.kK)() ? E.A.getCurrentBuildOverride().overrides?.discord_web : null)),
        S = (0, c.bG)([ed.Ay], () => ed.Ay.getSpeakingWhileMuted()),
        k = (0, c.bG)([I.A], () => I.A.isFullscreenInContext()),
        R = (0, c.bG)([eo.A], () => eo.A.hasLayers()),
        O = (0, h.red)(h.DXt) || R || eb.P.isDisallowPopupsSet() || k,
        w = (0, c.bG)([U.default], () => null != U.default.getAwaitingRemoteSessionInfo()),
        D = (0, c.bG)([eu.A], () => eu.A.getGuildId()),
        M = e?.avatarDecoration,
        P = (0, y.A)(M),
        L = ev.Ay.useName(e) ?? "",
        B = (0, z.lM)("Account"),
        { analyticsLocations: G } = (0, T.Ay)(C.A.ACCOUNT),
        F = (0, V.r)({ user: e, guildId: void 0 }),
        { isQuestBarEmpty: W } = (0, $.c9)({ location: eI.rE.CONFLICT_CHECKS }),
        H = (0, c.bG)([q.A, ex.default, er.A], () => {
            let e,
                t = q.A.getSyncingWith(),
                n = q.A.getActivity(),
                a = [];
            return (
                null != t ? (e = t.partyId) : null != n && null != n.party && null != n.party.id && (e = n.party.id),
                null != e &&
                    (a = o()(Array.from(er.A.getParty(e) ?? []))
                        .map((e) => ex.default.getUser(e))
                        .filter(ef.Vq)
                        .value()),
                a.length > 1
            );
        }),
        K = { avatar: [], settings: [] };
    !O &&
        (K.avatar.push(u.M.DISPLAY_NAME_STYLES_COACHMARK),
        K.avatar.push(u.M.WIDGETS_RTC_UPSELL_COACHMARK),
        B && K.settings.push(u.M.NITRO_PRIVACY_PERK_BETA_COACHMARK));
    let { shouldShowTooltip: Q, dismissTooltip: Y } = eF(ek.oh.AUDIO_INPUT),
        { shouldShowTooltip: J, dismissTooltip: X } = eF(ek.oh.AUDIO_OUTPUT),
        { shouldShowTooltip: Z, dismissTooltip: ep } = (0, en.A)(),
        eg = (0, ea.A)(),
        e_ = i.useMemo(() => (Q ? "input" : J ? "output" : void 0), [Q, J]),
        ej = i.useCallback(
            (e) => {
                switch (e) {
                    case "input":
                        Y();
                        break;
                    case "output":
                        X();
                }
            },
            [Y, X],
        );
    return (0, a.jsx)(T.f5, {
        value: G,
        children: (0, a.jsx)(eB, {
            currentUser: e,
            username: L,
            activities: n,
            applicationStream: r,
            voiceChannel: p,
            dismissibleContents: K,
            userTag: x,
            occluded: O,
            selfDeaf: v,
            selfMute: f,
            serverDeaf: j,
            serverMute: _,
            speaking: d,
            voiceDb: m,
            speakingWhileMuted: S,
            speakingWhilePTTInactive: eg,
            status: l,
            streaming: s,
            suppress: b,
            webBuildOverride: A,
            awaitingRemote: w,
            nameplate: F,
            selectedGuildId: D,
            avatarDecoration: P,
            isQuestBarEmpty: W,
            isListenAlongVisible: H,
            deviceChangedTooltipType: e_,
            onDismissDeviceChangedTooltip: () => ej(e_),
            shouldShowPTTJoinTooltip: Z,
            dismissPTTJoinTooltip: ep,
        }),
    });
}
