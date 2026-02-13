n.d(t, { A: () => e5, g: () => e7 }), n(321073);
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
    p = n(342494),
    g = n(397927),
    _ = n(442433),
    f = n(820284),
    b = n(717558),
    v = n(964486),
    j = n(220839),
    A = n(901517),
    C = n(397244),
    T = n(729551),
    S = n(755039),
    y = n(29160),
    E = n(793574),
    N = n(688810),
    I = n(325445),
    k = n(954921),
    R = n(521502),
    O = n(380610),
    w = n(993719),
    D = n(14059),
    M = n(362823),
    P = n(313961),
    U = n(617354),
    L = n(980923),
    B = n(206018),
    G = n(18235),
    F = n(183184),
    V = n(384059),
    W = n(480890),
    H = n(302223),
    K = n(379848),
    z = n(609425),
    $ = n(922301),
    q = n(750112),
    Q = n(643501),
    Y = n(977700),
    J = n(74848),
    X = n(449630),
    Z = n(111864),
    ee = n(967054),
    et = n(226540),
    en = n(227),
    ea = n(134991),
    ei = n(967370),
    es = n(535731),
    el = n(201805),
    er = n(655116),
    eo = n(454719),
    ed = n(342296),
    ec = n(780964),
    eu = n(77735),
    em = n(840065),
    eh = n(167579),
    ex = n(173660),
    ep = n(340913),
    eg = n(41580),
    e_ = n(935101),
    ef = n(277342),
    eb = n(616356),
    ev = n(961350),
    ej = n(734057),
    eA = n(629016),
    eC = n(186111),
    eT = n(430452),
    eS = n(383501),
    ey = n(967198),
    eE = n(461213),
    eN = n(485296),
    eI = n(351906),
    ek = n(287809),
    eR = n(166403),
    eO = n(486020),
    ew = n(203982),
    eD = n(927813),
    eM = n(403362),
    eP = n(536194),
    eU = n(427262),
    eL = n(837921),
    eB = n(350535),
    eG = n(42473),
    eF = n(994314),
    eV = n(485599),
    eW = n(809991),
    eH = n(652215),
    eK = n(49999),
    ez = n(654487),
    e$ = n(731854),
    eq = n(985018),
    eQ = n(807880),
    eY = n(146664),
    eJ = n(973324);
let eX = eL.Ay.getEnableHardwareAcceleration() ? g.JsQ : g.euF,
    eZ = 2.5 * eD.A.Millis.SECOND,
    e0 = 2 * eD.A.Millis.MINUTE,
    e1 = 2 * eD.A.Millis.MINUTE,
    e9 = 5 * eD.A.Millis.SECOND;
function e6(e) {
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
            avatarDecoration: p,
            "data-jump-section": _,
        } = e,
        b = i.useRef(null),
        v = t ?? b,
        A = (0, eO.F_)({ avatarDecoration: p, size: (0, k.Te)(g._3J.SIZE_32) }),
        C = (0, z.A)(),
        {
            updateOpenPopoutRef: T,
            highlightBadge: S,
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
                (0, j.A)(() => l(!0), 750),
                i.useEffect(() => {
                    let t = (t) => {
                        let { highlightBadge: n } = t;
                        null != n && a(n), e.current?.();
                    };
                    return (
                        ew._.subscribe(eH.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t),
                        () => {
                            ew._.unsubscribe(eH.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t);
                        }
                    );
                }),
                { updateOpenPopoutRef: t, highlightBadge: s ? n : void 0, setHighlightBadge: a }
            );
        })(),
        E = (0, ee.K)(x);
    return null == d
        ? null
        : (0, a.jsx)(f.A, {
              object: eH.ZSU.AVATAR,
              children: (0, a.jsx)(ed.A, {
                  user: d,
                  targetElementRef: v,
                  clickTrap: !0,
                  preload: () =>
                      (0, eo.A)(d.id, d.getAvatarURL(void 0, ed.S), {
                          type: "account_popout",
                          withMutualGuilds: !1,
                          withMutualFriends: !1,
                          guildId: void 0,
                      }),
                  renderPopout: (e, t) => {
                      let { closePopout: n, setPopoutRef: i } = e;
                      return (0, a.jsx)(X.A, {
                          currentUser: d,
                          highlightBadge: S,
                          openedAt: t,
                          onClose: () => {
                              n?.();
                          },
                          setPopoutRef: i,
                          className: eY.dI,
                      });
                  },
                  position: "top",
                  align: "left",
                  animation: g.YNO.Animation.FADE,
                  spacing: 14,
                  fixed: !0,
                  ignoreModalClicks: !0,
                  onRequestClose: () => {
                      m(), y(void 0);
                  },
                  children: (e) => {
                      T(e);
                      let { onMouseEnter: t, onMouseDown: i, ...m } = e;
                      return (0, a.jsxs)("div", {
                          ref: v,
                          style: E,
                          onMouseEnter: t,
                          onMouseDown: i,
                          onClick: (t) => {
                              e.onClick?.(t), u?.(t);
                          },
                          className: l()(eY.Q9, { [eY.ZQ]: null != x }),
                          children: [
                              (0, a.jsx)(g.DUT, {
                                  ...m,
                                  onClick: (t) => {
                                      t.stopPropagation(), e.onClick?.(t), u?.(t);
                                  },
                                  "aria-label": eq.intl.string(eq.t["5fWB8U"]),
                                  focusProps: { ringTarget: v },
                                  className: eY.$n,
                                  "data-jump-section": _,
                              }),
                              (0, a.jsx)(eX, {
                                  size: g._3J.SIZE_32,
                                  src: d.getAvatarURL(void 0, 28, !1),
                                  avatarDecoration: A,
                                  status: o ? eH.clD.STREAMING : c,
                                  isSpeaking: n,
                                  isLatched: s,
                                  voiceDb: r,
                                  className: eY.my,
                                  "aria-hidden": !0,
                              }),
                              (0, a.jsx)("div", { className: eY.oM, children: h(C) }),
                          ],
                      });
                  },
              }),
          });
}
class e7 extends i.PureComponent {
    speakingWhileMutedTooltipTimeout = new m.Ep();
    speakingWhilePTTTooltipTimeout = new m.Ep();
    speakingWhilePTTInactiveBackoff = new d.A(e1, null, !1);
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
        (0, F.A)(e, t, eH.JJy.ACCOUNT_PANEL), (0, V.X)(E.A.ACCOUNT, V.O.MIC, n);
    };
    handleToggleSelfDeaf = () => {
        let { serverDeaf: e, selfDeaf: t } = this.props;
        (0, G.A)(e, eH.JJy.ACCOUNT_PANEL), (0, V.X)(E.A.ACCOUNT, V.O.DEAFEN, !t);
    };
    handleOpenAccountSettings = () => {
        this.dismissTooltips(),
            eS.A.isConnected()
                ? (0, em.openUserSettings)(ec.X.VOICE_AND_VIDEO_PANEL, { section: eH.nc_.VOICE })
                : (0, em.openUserSettings)();
    };
    handleOpenSettingsContextMenu = (e) => {
        let { currentUser: t } = this.props;
        null != t &&
            (0, _.L3)(e, async () => {
                let { default: e } = await n.e("95153").then(n.bind(n, 50120));
                return (n) =>
                    (0, a.jsx)(e, {
                        ...n,
                        user: t,
                        premiumSubscription: this.props.premiumSubscription,
                        webBuildOverride: this.props.webBuildOverride,
                        onInteraction: (0, W.s)("UserSettingsCogContextMenu", E.A.ACCOUNT),
                    });
            });
    };
    audioOnInteractionHandler = (0, W.s)("AudioDeviceMenu", E.A.ACCOUNT);
    handleInputAudioContextMenu = (e, t) => {
        this.dismissTooltips(),
            (0, _.L3)(e, async () => {
                let { default: e } = await n.e("78827").then(n.bind(n, 385318));
                return () => {
                    let { enabledInputProfiles: n } = (0, eu.d)({ location: "Account" });
                    return (0, a.jsx)(N.f5, {
                        value: t,
                        children: (0, a.jsx)(e, {
                            onClose: _.Z_,
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
            (0, _.L3)(e, async () => {
                let { default: e } = await n.e("78827").then(n.bind(n, 385318));
                return () =>
                    (0, a.jsx)(N.f5, {
                        value: t,
                        children: (0, a.jsx)(e, {
                            onClose: _.Z_,
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
                performance.now() - this.lastSpeakingWhileMutedNotificationTime > e0;
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
                      this.speakingWhileMutedTooltipTimeout.start(eZ, () =>
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
                      this.speakingWhilePTTTooltipTimeout.start(eZ, () =>
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
        if ((0, C.A)({ activities: t, status: s, applicationStream: n, voiceChannel: r ? o : void 0 }))
            return (0, a.jsxs)(y.A, {
                hoverText: l,
                forceHover: e,
                children: [
                    (0, a.jsx)(g.AC4, { children: eU.Ay.humanizeStatus(s) }),
                    (0, a.jsx)(T.A, {
                        user: i,
                        activities: t,
                        applicationStream: n,
                        voiceChannel: r ? o : void 0,
                        textClassName: eY.XD,
                        hideTooltip: !0,
                    }),
                ],
            });
        let d = t?.find((e) => {
            let { type: t } = e;
            return t === eH.$pd.CUSTOM_STATUS;
        });
        return null != d
            ? (0, a.jsxs)(y.A, {
                  hoverText: l,
                  forceHover: e,
                  children: [
                      (0, a.jsx)(g.AC4, { children: eU.Ay.humanizeStatus(s) }),
                      (0, a.jsx)(H.A, { activity: d, emojiClassName: eY.Zg, className: eY.WO }),
                  ],
              })
            : null != s && s !== eH.clD.UNKNOWN && i.hasUniqueUsername()
              ? (0, a.jsx)(y.A, {
                    hoverText: l,
                    forceHover: e,
                    children: (0, a.jsx)(S.A, { text: eU.Ay.humanizeStatus(s) }),
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
                          className: eY.eW,
                          children: (0, a.jsx)(eV.A, {
                              className: l()({ [eY.e8]: null != e }),
                              children: (0, a.jsx)(q.A, {
                                  userName: n,
                                  displayNameStyles: e,
                                  effectDisplayType: this.state.hovered ? $.G.ANIMATED : $.G.STATIC,
                                  loop: !0,
                                  inProfile: !0,
                              }),
                          }),
                      }),
                      (0, a.jsx)("div", {
                          className: eY.XP,
                          children: (0, a.jsx)(eF.A, { children: this.renderStatus() }),
                      }),
                  ],
              });
    };
    renderAvatarWithPopout(e) {
        let {
            focusSectionProps: { "data-jump-section": t },
            onClick: n,
        } = e;
        return (0, a.jsx)(e6, {
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
            : (0, a.jsx)(eW.A, {
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
                      (0, a.jsx)(g.skg, {
                          children: (e) =>
                              (0, a.jsxs)("div", {
                                  ref: this.containerRef,
                                  className: l()(eY.kL, { [eY.UG]: null != n, [eY.bc]: !i, [eY.G5]: s }),
                                  onMouseEnter: this.handleMouseEnter,
                                  onMouseLeave: this.handleMouseLeave,
                                  children: [
                                      (0, a.jsx)(en.A, { nameplate: t, hovered: r, placement: et.u.ACCOUNT }),
                                      this.renderNameZone(e),
                                      (0, a.jsx)(e2, {
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
                      (0, a.jsx)(Y.A, {}),
                  ],
              });
    }
}
function e2(e) {
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
            speaking: S,
            latched: y,
        } = e,
        E = (0, ee.K)(v);
    return (0, a.jsxs)("div", {
        className: eY.Uo,
        style: E,
        children: [
            (0, a.jsx)(e4, {
                accountContainerRef: j,
                selfMute: n,
                serverMute: s,
                suppress: r,
                awaitingRemote: i,
                onMouseEnter: u,
                onMouseLeave: m,
                onClick: x,
                onContextMenu: p,
                iconForeground: null != v ? eY.t4 : void 0,
                nameplate: v,
                shouldShowSpeakingWhileMutedTooltip: o,
                shouldShowInputDeviceChangedTooltip: !o && "input" === A,
                shouldShowSpeakingWhilePTTTooltip: d,
                shouldShowPTTJoinTooltip: C,
                dismissTooltips: T,
                speaking: S,
                latched: y,
            }),
            (0, a.jsx)(te, {
                selfDeaf: t,
                serverDeaf: l,
                onClick: h,
                onContextMenu: g,
                awaitingRemote: i,
                iconForeground: null != v ? eY.t4 : void 0,
                nameplate: v,
                shouldShowOutputDeviceChangedTooltip: "output" === A,
                dismissTooltips: T,
            }),
            (0, a.jsx)(e8, {
                webBuildOverride: c,
                onClick: _,
                onContextMenu: f,
                dismissibleContents: b.settings,
                iconForeground: null != v ? eY.t4 : void 0,
                nameplate: v,
            }),
        ],
    });
}
function e3(e) {
    let t = (0, c.bG)([eS.A], () => null != eS.A.getChannelId()),
        n = (0, J.Py)(e),
        a = i.useRef(new m.Ep()),
        [s, l] = i.useState(!1);
    i.useEffect(() => {
        t &&
            n &&
            (l(!0),
            a.current.start(e9, () => {
                l(!1);
            }));
    }, [t, n]);
    let r = i.useCallback(() => {
        l(!1), a.current.stop();
    }, []);
    return (
        (0, v.l0)(() => {
            a.current.stop();
        }),
        { shouldShowTooltip: s, dismissTooltip: r }
    );
}
function e5() {
    let e = (0, c.bG)([ek.default], () => ek.default.getCurrentUser()),
        t = (0, c.bG)([ev.default], () => ev.default.getId()),
        {
            activities: n,
            streaming: s,
            status: l,
        } = (0, c.cf)([eE.A], () => {
            let e = eE.A.getActivities();
            return {
                activities: e,
                streaming:
                    null !=
                    e.find((e) => {
                        let { type: t } = e;
                        return t === eH.$pd.STREAMING;
                    }),
                status: eE.A.getStatus(),
            };
        }),
        r = (0, c.bG)([eb.A], () => eb.A.getAnyStreamForUser(t)),
        d = (0, b.A)({ userId: t }),
        m = (0, c.bG)([eN.A], () => eN.A.isCurrentUserPTTLatched()),
        h = (0, c.bG)([eN.A], () => eN.A.getVoiceVolume(t)),
        x = eU.Ay.useUserTag(e, { decoration: "never" }),
        p = (0, c.bG)([eI.A], () => eI.A.hidePersonalInformation),
        _ = (0, c.bG)([eS.A, ej.A], () => {
            let e = eS.A.getChannelId();
            return null != e ? ej.A.getChannel(e) : null;
        }),
        { mute: f, selfMute: v, suppress: j } = (0, ex.A)(_),
        { selfDeaf: C, deaf: T } = (0, eh.A)(_),
        S = (0, c.bG)([R.A], () => ((0, O.kK)() ? R.A.getCurrentBuildOverride().overrides?.discord_web : null)),
        y = (0, c.bG)([eR.A], () => eR.A.getPremiumTypeSubscription()),
        k = (0, c.bG)([eT.Ay], () => eT.Ay.getSpeakingWhileMuted()),
        w = (0, c.bG)([P.A], () => P.A.isFullscreenInContext()),
        D = (0, c.bG)([eC.A], () => eC.A.hasLayers()),
        M = (0, g.red)(g.DXt) || D || eP.P.isDisallowPopupsSet() || w,
        U = (0, c.bG)([Q.default], () => null != Q.default.getAwaitingRemoteSessionInfo()),
        L = (0, c.bG)([ey.A], () => ey.A.getGuildId()),
        B = e?.avatarDecoration,
        G = (0, I.A)(B),
        F = eU.Ay.useName(e) ?? "",
        { voiceActivityStatusEnabled: V } = (0, A.G)({ location: "Account" }),
        W = (0, ei.lM)("Account"),
        { analyticsLocations: H } = (0, N.Ay)(E.A.ACCOUNT),
        K = (0, Z.r)({ user: e, guildId: void 0 }),
        { isQuestBarEmpty: z, hasLoadedQuestBar: $ } = (0, el.c9)({ location: ez.rE.CONFLICT_CHECKS }),
        q = (0, c.bG)([er.A, ek.default, eA.A], () => {
            let e,
                t = er.A.getSyncingWith(),
                n = er.A.getActivity(),
                a = [];
            return (
                null != t ? (e = t.partyId) : null != n && null != n.party && null != n.party.id && (e = n.party.id),
                null != e &&
                    (a = o()(Array.from(eA.A.getParty(e) ?? []))
                        .map((e) => ek.default.getUser(e))
                        .filter(eM.Vq)
                        .value()),
                a.length > 1
            );
        }),
        Y = { avatar: [], settings: [] };
    !M &&
        (Y.avatar.push(u.M.DISPLAY_NAME_STYLES_COACHMARK),
        Y.avatar.push(u.M.WIDGETS_RTC_UPSELL_COACHMARK),
        W && Y.settings.push(u.M.NITRO_PRIVACY_PERK_BETA_COACHMARK));
    let { shouldShowTooltip: J, dismissTooltip: X } = e3(e$.oh.AUDIO_INPUT),
        { shouldShowTooltip: ee, dismissTooltip: et } = e3(e$.oh.AUDIO_OUTPUT),
        { shouldShowTooltip: en, dismissTooltip: ea } = (0, eg.A)(),
        es = (0, e_.A)(),
        eo = i.useMemo(() => (J ? "input" : ee ? "output" : void 0), [J, ee]),
        ed = i.useCallback(
            (e) => {
                switch (e) {
                    case "input":
                        X();
                        break;
                    case "output":
                        et();
                }
            },
            [X, et],
        );
    return (0, a.jsx)(N.f5, {
        value: H,
        children: (0, a.jsx)(e7, {
            currentUser: e,
            username: F,
            activities: n,
            applicationStream: r,
            voiceChannel: _,
            dismissibleContents: Y,
            userTag: x,
            hidePrivateData: p,
            occluded: M,
            premiumSubscription: y,
            selfDeaf: C,
            selfMute: v,
            serverDeaf: T,
            serverMute: f,
            speaking: d,
            voiceDb: h,
            speakingWhileMuted: k,
            speakingWhilePTTInactive: es,
            latched: m && null != _ && !f && !v,
            status: l,
            streaming: s,
            suppress: j,
            webBuildOverride: S,
            awaitingRemote: U,
            voiceActivityStatusEnabled: V,
            nameplate: K,
            selectedGuildId: L,
            avatarDecoration: G,
            isQuestBarEmpty: z,
            hasLoadedQuestBar: $,
            isListenAlongVisible: q,
            deviceChangedTooltipType: eo,
            onDismissDeviceChangedTooltip: () => ed(eo),
            shouldShowPTTJoinTooltip: en,
            dismissPTTJoinTooltip: ea,
        }),
    });
}
function e8(e) {
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
        [h, p] = i.useState(!1);
    (0, v.Ay)(() => {
        let e = () => p(!0);
        return (
            ew._.subscribe(eH.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e),
            () => {
                ew._.unsubscribe(eH.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e);
            }
        );
    });
    let _ = i.useCallback(() => {
        p(!1), l();
    }, [l]);
    t = null != s ? eq.intl.formatToPlainString(eq.t.Gzh6ZP, { webBuildOverride: s.id }) : eq.intl.string(eq.t.cduTBL);
    let f = g.Zes,
        b = (0, x.w)();
    return (
        (f = null != s ? g.Hnu : b.Component),
        (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(eG.A, {
                    ref: m,
                    tooltipText: t,
                    tooltipPositionKey: n,
                    onClick: _,
                    onContextMenu: r,
                    "aria-label": eq.intl.string(eq.t.cduTBL),
                    icon: (0, a.jsx)(f, { size: "refresh_sm", color: "currentColor", className: d }),
                    ...b.events,
                    plated: null != c,
                }),
                (0, a.jsx)(ea.V, { targetElementRef: m, shouldShow: h, onDismiss: () => p(!1) }),
                !h &&
                    (0, a.jsx)(K.Ay, {
                        contentTypes: o,
                        groupName: eK.m.ACCOUNT_NAME_ZONE,
                        children: (e) => {
                            let { visibleContent: t, markAsDismissed: n } = e;
                            if (t === u.M.NITRO_PRIVACY_PERK_BETA_COACHMARK)
                                return (0, a.jsx)(es.y, { targetElementRef: m, markAsDismissed: n });
                        },
                    }),
            ],
        })
    );
}
function e4(e) {
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
            shouldShowSpeakingWhileMutedTooltip: _,
            shouldShowSpeakingWhilePTTTooltip: f,
            shouldShowInputDeviceChangedTooltip: b,
            shouldShowPTTJoinTooltip: v,
            dismissTooltips: j,
            speaking: A,
            latched: C,
        } = e,
        T = n || r || s,
        S = (0, c.bG)([eT.Ay], () => eT.Ay.getMode() === eH.TBI.PUSH_TO_TALK),
        { showPTTIconIndicator: y } = ep.A.useConfig({ location: "MicrophoneButton" }),
        I = i.useRef(null),
        { Component: k, events: R, play: O } = (0, ef.q)(T),
        P = s || r ? g.O1p : k,
        U = (0, c.bG)([eT.Ay], () => eT.Ay.getSettings().modeOptions.shortcut),
        G = (0, c.bG)([D.A], () => D.A.getIsTutorialActive(M.v.MUTE_TUTORIAL)),
        F = (0, L.A)(n, s, r, o);
    t = _
        ? { tooltipType: "green_void_do_not_use", tooltipText: eq.intl.string(eq.t["29gnR4"]), tooltipForceOpen: !0 }
        : v || f
          ? {
                tooltipType: "green_void_do_not_use",
                tooltipText: eq.intl.format(eq.t.c1qUOQ, { keybind: eB.dI(U).toLocaleUpperCase() }),
                tooltipForceOpen: !0,
            }
          : { tooltipText: F };
    let { analyticsLocations: V } = (0, N.Ay)(E.A.AUDIO_INPUT_BUTTON);
    i.useEffect(() => () => O(), [T, O]);
    let H = (0, c.bG)([eS.A], () => null != eS.A.getChannelId()),
        K = y && S && H,
        z = T ? g.LU0.colors.ICON_VOICE_MUTED : "currentColor",
        { name: $ } = (0, J.x5)(e$.oh.AUDIO_INPUT),
        { enabledInputProfiles: q } = (0, eu.d)({ location: "MicrophoneButton" }),
        Q = i.useCallback(() => {
            h(), G && w.N(M.v.MUTE_TUTORIAL);
        }, [h, G]);
    return (0, a.jsxs)(N.f5, {
        value: V,
        children: [
            (0, a.jsx)(g.YNO, {
                targetElementRef: I,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (
                        j(),
                        (0, a.jsx)(N.f5, {
                            value: V,
                            children: (0, a.jsx)(B.A, {
                                onInteraction: (0, W.s)("AudioDeviceMenu", E.A.ACCOUNT),
                                onClose: t,
                                maybeRenderPTTCheckbox: !0,
                                renderInputProfiles: q.length > 0,
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
                animation: g.YNO.Animation.FADE,
                spacing: 4,
                children: (e, n) => {
                    let { onClick: i } = e,
                        { isShown: s } = n,
                        r = s ? g.tN5 : g.abt;
                    return (0, a.jsxs)("div", {
                        ref: I,
                        className: l()(eY.WU, { [eY.v8]: T, [eY.q6]: s }),
                        children: [
                            (0, a.jsx)(eG.A, {
                                "aria-checked": T,
                                "aria-label": eq.intl.string(eq.t.w4m945),
                                className: eY.$o,
                                disabled: o,
                                icon: (0, a.jsx)(P, { size: "custom", width: 20, height: 20, color: z, className: d }),
                                onClick: Q,
                                onContextMenu: i,
                                onMouseEnter: () => {
                                    u(), R.onMouseEnter();
                                },
                                onMouseLeave: () => {
                                    m(), R.onMouseLeave();
                                },
                                plated: null != x,
                                redGlow: T,
                                role: "switch",
                                ...t,
                                children: K
                                    ? (0, a.jsx)("div", { className: l()(eY.Ur, { [eY.zY]: A, [eY.yM]: C && !A }) })
                                    : null,
                            }),
                            (0, a.jsx)(eG.A, {
                                "aria-label": b
                                    ? eq.intl.formatToPlainString(eq.t["18wnuD"], { inputDeviceName: $ })
                                    : eq.intl.string(eq.t.fRzCbB),
                                className: l()(eY.UT, { [eY.q6]: s }),
                                disabled: o,
                                icon: (0, a.jsx)(r, {
                                    className: eY.$$,
                                    size: "custom",
                                    width: 12,
                                    height: 12,
                                    color: z,
                                }),
                                onClick: i,
                                onContextMenu: i,
                                onMouseEnter: u,
                                onMouseLeave: m,
                                plated: null != x,
                                redGlow: T,
                                tooltipType: b ? "green_void_do_not_use" : void 0,
                                tooltipForceOpen: b,
                                tooltipPositionKey: b
                                    ? eq.intl.formatToPlainString(eq.t["18wnuD"], { inputDeviceName: $ })
                                    : void 0,
                                tooltipShouldShow: !s,
                                tooltipText: b
                                    ? eq.intl.format(eq.t["18wnuD"], { inputDeviceName: $ })
                                    : eq.intl.string(eq.t.fRzCbB),
                            }),
                        ],
                    });
                },
            }),
            (0, a.jsx)(p.AM, {
                targetElementRef: I,
                shouldShow: G,
                graphic: { type: "image", src: eJ.A },
                onRequestClose: () => {
                    w.N(M.v.MUTE_TUTORIAL);
                },
                position: "top",
                title: eq.intl.string(eQ.default.VG4zAf),
                body: eq.intl.string(eQ.default["8VIRzR"]),
            }),
        ],
    });
}
function te(e) {
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
            play: p,
            events: { onMouseEnter: _, onMouseLeave: f },
        } = (0, h.I)(m ? "undeafen" : "deafen"),
        b = n ? g.TJE : x,
        { name: v } = (0, J.x5)(e$.oh.AUDIO_OUTPUT),
        j = (0, U.A)(t, n, s),
        { analyticsLocations: A } = (0, N.Ay)(E.A.AUDIO_OUTPUT_BUTTON),
        C = i.useRef(null);
    return (
        i.useEffect(() => () => p(), [m, p]),
        (0, a.jsx)(N.f5, {
            value: A,
            children: (0, a.jsx)(g.YNO, {
                targetElementRef: C,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (
                        u(),
                        (0, a.jsx)(N.f5, {
                            value: A,
                            children: (0, a.jsx)(B.A, {
                                onInteraction: (0, W.s)("AudioDeviceMenu", E.A.ACCOUNT),
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
                animation: g.YNO.Animation.FADE,
                spacing: 4,
                children: (e, t) => {
                    let { onClick: i } = e,
                        { isShown: u } = t,
                        h = u ? g.tN5 : g.abt;
                    return (0, a.jsxs)("div", {
                        ref: C,
                        className: l()(eY.WU, { [eY.v8]: m, [eY.q6]: u }),
                        children: [
                            (0, a.jsx)(eG.A, {
                                "aria-checked": m,
                                "aria-label": eq.intl.string(eq.t.wjcRFX),
                                className: eY.$o,
                                disabled: s,
                                icon: (0, a.jsx)(b, {
                                    size: "custom",
                                    width: 20,
                                    height: 20,
                                    color: m ? g.LU0.colors.ICON_VOICE_MUTED : "currentColor",
                                    className: o,
                                }),
                                iconForeground: m ? eY.of : void 0,
                                innerClassName: l()({ [eY.T3]: n }),
                                onClick: r,
                                onContextMenu: i,
                                onMouseEnter: _,
                                onMouseLeave: f,
                                plated: null != d,
                                redGlow: m,
                                role: "switch",
                                tooltipText: j,
                            }),
                            (0, a.jsx)(eG.A, {
                                className: l()(eY.UT, { [eY.q6]: u }),
                                disabled: s,
                                icon: (0, a.jsx)(h, {
                                    className: eY.$$,
                                    size: "custom",
                                    width: 12,
                                    height: 12,
                                    color: m ? g.LU0.colors.ICON_VOICE_MUTED : "currentColor",
                                }),
                                onClick: i,
                                onContextMenu: i,
                                plated: null != d,
                                redGlow: m,
                                tooltipType: c ? "green_void_do_not_use" : void 0,
                                tooltipForceOpen: c,
                                tooltipPositionKey: c
                                    ? eq.intl.formatToPlainString(eq.t["f+DDY/"], { outputDeviceName: v })
                                    : void 0,
                                tooltipShouldShow: !u,
                                tooltipText: c
                                    ? eq.intl.format(eq.t["f+DDY/"], { outputDeviceName: v })
                                    : eq.intl.string(eq.t.aA4Vce),
                                "aria-label": c
                                    ? eq.intl.formatToPlainString(eq.t["f+DDY/"], { outputDeviceName: v })
                                    : eq.intl.string(eq.t.aA4Vce),
                            }),
                        ],
                    });
                },
            }),
        })
    );
}
