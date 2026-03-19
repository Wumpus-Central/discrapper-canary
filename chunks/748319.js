n.d(t, { A: () => eF, g: () => eL }), n(321073);
var a = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
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
    v = n(397244),
    b = n(729551),
    j = n(755039),
    A = n(29160),
    C = n(793574),
    y = n(688810),
    T = n(325445),
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
    U = n(750112),
    L = n(643501),
    B = n(977700),
    G = n(74848),
    F = n(449630),
    V = n(111864),
    W = n(967054),
    H = n(226540),
    K = n(227),
    z = n(201805),
    $ = n(655116),
    q = n(454719),
    Q = n(342296),
    Y = n(780964),
    J = n(77735),
    X = n(840065),
    Z = n(167579),
    ee = n(173660),
    et = n(41580),
    en = n(935101),
    ea = n(616356),
    ei = n(961350),
    el = n(734057),
    es = n(629016),
    er = n(186111),
    eo = n(430452),
    ed = n(383501),
    ec = n(967198),
    eu = n(461213),
    em = n(485296),
    eh = n(287809),
    ex = n(486020),
    ep = n(203982),
    eg = n(927813),
    e_ = n(403362),
    ef = n(536194),
    ev = n(427262),
    eb = n(837921),
    ej = n(994314),
    eA = n(485599),
    eC = n(809991),
    ey = n(226513),
    eT = n(383952),
    eS = n(245750),
    eE = n(652215),
    eN = n(654487),
    eI = n(731854),
    ek = n(985018),
    eR = n(146664);
let eO = eb.Ay.getEnableHardwareAcceleration() ? h.JsQ : h.euF,
    ew = 2.5 * eg.A.Millis.SECOND,
    eD = 2 * eg.A.Millis.MINUTE,
    eM = 2 * eg.A.Millis.MINUTE,
    eP = 5 * eg.A.Millis.SECOND;
function eU(e) {
    let {
            ref: t,
            speaking: n,
            voiceDb: l = -1 / 0,
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
        v = i.useRef(null),
        b = t ?? v,
        j = (0, ex.F_)({ avatarDecoration: g, size: (0, S.Te)(h._3J.SIZE_32) }),
        A = (0, M.A)(),
        {
            updateOpenPopoutRef: C,
            highlightBadge: y,
            setHighlightBadge: T,
        } = (function () {
            let e = i.useRef(null),
                t = i.useCallback((t) => {
                    e.current = () => {
                        t.onMouseDown(), t.onClick();
                    };
                }, []),
                [n, a] = i.useState(),
                [l, s] = i.useState(!1);
            return (
                (0, f.A)(() => s(!0), 750),
                i.useEffect(() => {
                    let t = (t) => {
                        let { highlightBadge: n } = t;
                        null != n && a(n), e.current?.();
                    };
                    return (
                        ep._.subscribe(eE.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t),
                        () => {
                            ep._.unsubscribe(eE.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t);
                        }
                    );
                }),
                { updateOpenPopoutRef: t, highlightBadge: l ? n : void 0, setHighlightBadge: a }
            );
        })(),
        E = (0, W.K)(x);
    return null == o
        ? null
        : (0, a.jsx)(p.A, {
              object: eE.ZSU.AVATAR,
              children: (0, a.jsx)(Q.A, {
                  user: o,
                  targetElementRef: b,
                  clickTrap: !0,
                  preload: () =>
                      (0, q.A)(o.id, o.getAvatarURL(void 0, Q.S), {
                          type: "account_popout",
                          withMutualGuilds: !1,
                          withMutualFriends: !1,
                          guildId: void 0,
                      }),
                  renderPopout: (e) => {
                      let { closePopout: t, setPopoutRef: n } = e;
                      return (0, a.jsx)(F.A, {
                          currentUser: o,
                          highlightBadge: y,
                          onClose: () => {
                              t?.();
                          },
                          setPopoutRef: n,
                          className: eR.dI,
                      });
                  },
                  position: "top",
                  align: "left",
                  animation: h.YNO.Animation.FADE,
                  spacing: 14,
                  fixed: !0,
                  ignoreModalClicks: !0,
                  onRequestClose: () => {
                      u(), T(void 0);
                  },
                  children: (e) => {
                      C(e);
                      let { onMouseEnter: t, onMouseDown: i, ...u } = e;
                      return (0, a.jsxs)("div", {
                          ref: b,
                          style: E,
                          onMouseEnter: t,
                          onMouseDown: i,
                          onClick: (t) => {
                              e.onClick?.(t), c?.(t);
                          },
                          className: s()(eR.Q9, { [eR.ZQ]: null != x }),
                          children: [
                              (0, a.jsx)(h.DUT, {
                                  ...u,
                                  onClick: (t) => {
                                      t.stopPropagation(), e.onClick?.(t), c?.(t);
                                  },
                                  "aria-label": ek.intl.string(ek.t["5fWB8U"]),
                                  focusProps: { ringTarget: b },
                                  className: eR.$n,
                                  "data-jump-section": _,
                              }),
                              (0, a.jsx)(eO, {
                                  size: h._3J.SIZE_32,
                                  src: o.getAvatarURL(void 0, 28, !1),
                                  avatarDecoration: j,
                                  status: r ? eE.clD.STREAMING : d,
                                  isSpeaking: n,
                                  voiceDb: l,
                                  className: eR.my,
                                  "aria-hidden": !0,
                              }),
                              (0, a.jsx)("div", { className: eR.oM, children: m(A) }),
                          ],
                      });
                  },
              }),
          });
}
class eL extends i.PureComponent {
    speakingWhileMutedTooltipTimeout = new m.Ep();
    speakingWhilePTTTooltipTimeout = new m.Ep();
    speakingWhilePTTInactiveBackoff = new d.A(eM, null, !1);
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
            { speakingWhileMuted: i, occluded: l, speakingWhilePTTInactive: s } = this.props;
        l !== a && this.handleOccludedChanged(),
            i !== t && this.handleSpeakingWhileMutedChanged(),
            s !== n && this.handleSpeakingWhilePTTChanged();
    }
    componentWillUnmount() {
        this.speakingWhileMutedTooltipTimeout.stop(), this.speakingWhilePTTTooltipTimeout.stop();
    }
    handleToggleSelfMute = () => {
        let { serverMute: e, suppress: t, selfMute: n } = this.props;
        (0, R.A)(e, t, eE.JJy.ACCOUNT_PANEL), (0, O.X)(C.A.ACCOUNT, O.O.MIC, n);
    };
    handleToggleSelfDeaf = () => {
        let { serverDeaf: e, selfDeaf: t } = this.props;
        (0, k.A)(e, eE.JJy.ACCOUNT_PANEL), (0, O.X)(C.A.ACCOUNT, O.O.DEAFEN, !t);
    };
    handleOpenAccountSettings = () => {
        this.dismissTooltips(),
            ed.A.isConnected() ? (0, X.openUserSettings)(Y.X.VOICE_AND_VIDEO_PANEL) : (0, X.openUserSettings)();
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
                    let { enabledInputProfiles: n } = (0, J.d)({ location: "Account" });
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
                shouldShowPTTJoinTooltip: l,
                deviceChangedTooltipType: s,
            } = this.props,
            { hoveringOnMute: r } = this.state,
            o =
                void 0 === this.lastSpeakingWhileMutedNotificationTime ||
                performance.now() - this.lastSpeakingWhileMutedNotificationTime > eD;
        a
            ? r ||
              !e ||
              t ||
              n ||
              i ||
              !o ||
              null != s ||
              l ||
              this.setState({ shouldShowSpeakingWhileMutedTooltip: !0 }, () => {
                  (this.lastSpeakingWhileMutedNotificationTime = performance.now()),
                      this.speakingWhileMutedTooltipTimeout.start(ew, () =>
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
                shouldShowPTTJoinTooltip: l,
                deviceChangedTooltipType: s,
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
              null != s ||
              l ||
              this.setState({ shouldShowSpeakingWhilePTTTooltip: !0 }, () => {
                  (this.lastSpeakingWhilePTTNotificationTime = performance.now()),
                      this.speakingWhilePTTInactiveBackoff.fail(),
                      this.speakingWhilePTTTooltipTimeout.start(ew, () =>
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
                status: l,
                userTag: s,
                voiceChannel: r,
            } = this.props;
        if (null == i) return null;
        if ((0, v.A)({ activities: t, status: l, applicationStream: n, voiceChannel: r }))
            return (0, a.jsxs)(A.A, {
                hoverText: s,
                forceHover: e,
                children: [
                    (0, a.jsx)(h.AC4, { children: ev.Ay.humanizeStatus(l) }),
                    (0, a.jsx)(b.A, {
                        user: i,
                        activities: t,
                        applicationStream: n,
                        voiceChannel: r,
                        textClassName: eR.XD,
                        hideTooltip: !0,
                    }),
                ],
            });
        let o = t?.find((e) => {
            let { type: t } = e;
            return t === eE.$pd.CUSTOM_STATUS;
        });
        return null != o
            ? (0, a.jsxs)(A.A, {
                  hoverText: s,
                  forceHover: e,
                  children: [
                      (0, a.jsx)(h.AC4, { children: ev.Ay.humanizeStatus(l) }),
                      (0, a.jsx)(D.A, { activity: o, emojiClassName: eR.Zg, className: eR.WO }),
                  ],
              })
            : null != l && l !== eE.clD.UNKNOWN && i.hasUniqueUsername()
              ? (0, a.jsx)(A.A, {
                    hoverText: s,
                    forceHover: e,
                    children: (0, a.jsx)(j.A, { text: ev.Ay.humanizeStatus(l) }),
                })
              : s;
    }
    renderNameTag = (e) => {
        let { currentUser: t, username: n } = this.props;
        return null == t
            ? null
            : (0, a.jsxs)(a.Fragment, {
                  children: [
                      (0, a.jsx)("div", {
                          className: eR.eW,
                          children: (0, a.jsx)(eA.A, {
                              className: s()({ [eR.e8]: null != e }),
                              children: (0, a.jsx)(U.A, {
                                  userName: n,
                                  displayNameStyles: e,
                                  effectDisplayType: this.state.hovered ? P.G.ANIMATED : P.G.STATIC,
                                  loop: !0,
                                  inProfile: !0,
                              }),
                          }),
                      }),
                      (0, a.jsx)("div", {
                          className: eR.XP,
                          children: (0, a.jsx)(ej.A, { children: this.renderStatus() }),
                      }),
                  ],
              });
    };
    renderNameZone(e) {
        let { currentUser: t, dismissibleContents: n } = this.props;
        return null == t
            ? null
            : (0, a.jsx)(eC.A, {
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
        let { currentUser: e, nameplate: t, voiceChannel: n, isQuestBarEmpty: i, isListenAlongVisible: l } = this.props,
            r = this.state.hovered;
        return null == e
            ? null
            : (0, a.jsxs)(a.Fragment, {
                  children: [
                      (0, a.jsx)(h.skg, {
                          children: (e) =>
                              (0, a.jsxs)("div", {
                                  ref: this.containerRef,
                                  className: s()(eR.kL, { [eR.UG]: null != n, [eR.bc]: !i, [eR.G5]: l }),
                                  onMouseEnter: this.handleMouseEnter,
                                  onMouseLeave: this.handleMouseLeave,
                                  children: [
                                      (0, a.jsx)(K.A, { nameplate: t, hovered: r, placement: H.u.ACCOUNT }),
                                      this.renderNameZone(e),
                                      (0, a.jsx)(eB, {
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
function eB(e) {
    let {
            selfDeaf: t,
            selfMute: n,
            awaitingRemote: i,
            serverMute: l,
            serverDeaf: s,
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
            dismissibleContents: v,
            nameplate: b,
            accountContainerRef: j,
            deviceChangedTooltipType: A,
            shouldShowPTTJoinTooltip: C = !1,
            dismissTooltips: y,
            speaking: T,
        } = e,
        S = (0, W.K)(b);
    return (0, a.jsxs)("div", {
        className: eR.Uo,
        style: S,
        children: [
            (0, a.jsx)(eT.A, {
                accountContainerRef: j,
                selfMute: n,
                serverMute: l,
                suppress: r,
                awaitingRemote: i,
                onMouseEnter: u,
                onMouseLeave: m,
                onClick: x,
                onContextMenu: p,
                iconForeground: null != b ? eR.t4 : void 0,
                nameplate: b,
                shouldShowSpeakingWhileMutedTooltip: o,
                shouldShowInputDeviceChangedTooltip: !o && "input" === A,
                shouldShowSpeakingWhilePTTTooltip: d,
                shouldShowPTTJoinTooltip: C,
                dismissTooltips: y,
                speaking: T,
            }),
            (0, a.jsx)(ey.A, {
                selfDeaf: t,
                serverDeaf: s,
                onClick: h,
                onContextMenu: g,
                awaitingRemote: i,
                iconForeground: null != b ? eR.t4 : void 0,
                nameplate: b,
                shouldShowOutputDeviceChangedTooltip: "output" === A,
                dismissTooltips: y,
            }),
            (0, a.jsx)(eS.A, {
                webBuildOverride: c,
                onClick: _,
                onContextMenu: f,
                dismissibleContents: v.settings,
                iconForeground: null != b ? eR.t4 : void 0,
                nameplate: b,
            }),
        ],
    });
}
function eG(e) {
    let t = (0, c.bG)([ed.A], () => null != ed.A.getChannelId()),
        n = (0, G.Py)(e),
        a = i.useRef(new m.Ep()),
        [l, s] = i.useState(!1);
    i.useEffect(() => {
        t &&
            n &&
            (s(!0),
            a.current.start(eP, () => {
                s(!1);
            }));
    }, [t, n]);
    let r = i.useCallback(() => {
        s(!1), a.current.stop();
    }, []);
    return (
        (0, _.l0)(() => {
            a.current.stop();
        }),
        { shouldShowTooltip: l, dismissTooltip: r }
    );
}
function eF() {
    let e = (0, c.bG)([eh.default], () => eh.default.getCurrentUser()),
        t = (0, c.bG)([ei.default], () => ei.default.getId()),
        {
            activities: n,
            streaming: l,
            status: s,
        } = (0, c.cf)([eu.A], () => {
            let e = eu.A.getActivities();
            return {
                activities: e,
                streaming:
                    null !=
                    e.find((e) => {
                        let { type: t } = e;
                        return t === eE.$pd.STREAMING;
                    }),
                status: eu.A.getStatus(),
            };
        }),
        r = (0, c.bG)([ea.A], () => ea.A.getAnyStreamForUser(t)),
        d = (0, g.A)({ userId: t }),
        m = (0, c.bG)([em.A], () => em.A.getVoiceVolume(t)),
        x = ev.Ay.useUserTag(e, { decoration: "never" }),
        p = (0, c.bG)([ed.A, el.A], () => {
            let e = ed.A.getChannelId();
            return null != e ? el.A.getChannel(e) : null;
        }),
        { mute: _, selfMute: f, suppress: v } = (0, ee.A)(p),
        { selfDeaf: b, deaf: j } = (0, Z.A)(p),
        A = (0, c.bG)([E.A], () => ((0, N.kK)() ? E.A.getCurrentBuildOverride().overrides?.discord_web : null)),
        S = (0, c.bG)([eo.Ay], () => eo.Ay.getSpeakingWhileMuted()),
        k = (0, c.bG)([I.A], () => I.A.isFullscreenInContext()),
        R = (0, c.bG)([er.A], () => er.A.hasLayers()),
        O = (0, h.red)(h.DXt) || R || ef.P.isDisallowPopupsSet() || k,
        w = (0, c.bG)([L.default], () => null != L.default.getAwaitingRemoteSessionInfo()),
        D = (0, c.bG)([ec.A], () => ec.A.getGuildId()),
        M = e?.avatarDecoration,
        P = (0, T.A)(M),
        U = ev.Ay.useName(e) ?? "",
        { analyticsLocations: B } = (0, y.Ay)(C.A.ACCOUNT),
        G = (0, V.r)({ user: e, guildId: void 0 }),
        { isQuestBarEmpty: F } = (0, z.c9)({ location: eN.rE.CONFLICT_CHECKS }),
        W = (0, c.bG)([$.A, eh.default, es.A], () => {
            let e,
                t = $.A.getSyncingWith(),
                n = $.A.getActivity(),
                a = [];
            return (
                null != t ? (e = t.partyId) : null != n && null != n.party && null != n.party.id && (e = n.party.id),
                null != e &&
                    (a = o()(Array.from(es.A.getParty(e) ?? []))
                        .map((e) => eh.default.getUser(e))
                        .filter(e_.Vq)
                        .value()),
                a.length > 1
            );
        }),
        H = { avatar: [], settings: [] };
    O || H.avatar.push(u.M.DISPLAY_NAME_STYLES_COACHMARK);
    let { shouldShowTooltip: K, dismissTooltip: q } = eG(eI.oh.AUDIO_INPUT),
        { shouldShowTooltip: Q, dismissTooltip: Y } = eG(eI.oh.AUDIO_OUTPUT),
        { shouldShowTooltip: J, dismissTooltip: X } = (0, et.A)(),
        ex = (0, en.A)(),
        ep = i.useMemo(() => (K ? "input" : Q ? "output" : void 0), [K, Q]),
        eg = i.useCallback(
            (e) => {
                switch (e) {
                    case "input":
                        q();
                        break;
                    case "output":
                        Y();
                }
            },
            [q, Y],
        );
    return (0, a.jsx)(y.f5, {
        value: B,
        children: (0, a.jsx)(eL, {
            currentUser: e,
            username: U,
            activities: n,
            applicationStream: r,
            voiceChannel: p,
            dismissibleContents: H,
            userTag: x,
            occluded: O,
            selfDeaf: b,
            selfMute: f,
            serverDeaf: j,
            serverMute: _,
            speaking: d,
            voiceDb: m,
            speakingWhileMuted: S,
            speakingWhilePTTInactive: ex,
            status: s,
            streaming: l,
            suppress: v,
            webBuildOverride: A,
            awaitingRemote: w,
            nameplate: G,
            selectedGuildId: D,
            avatarDecoration: P,
            isQuestBarEmpty: F,
            isListenAlongVisible: W,
            deviceChangedTooltipType: ep,
            onDismissDeviceChangedTooltip: () => eg(ep),
            shouldShowPTTJoinTooltip: J,
            dismissPTTJoinTooltip: X,
        }),
    });
}
