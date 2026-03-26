n.d(t, { A: () => eG, g: () => eL }), n(321073);
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
    f = n(964486),
    _ = n(220839),
    v = n(397244),
    b = n(729551),
    j = n(755039),
    A = n(29160),
    C = n(793574),
    y = n(688810),
    T = n(521502),
    S = n(380610),
    E = n(313961),
    N = n(18235),
    I = n(183184),
    k = n(384059),
    O = n(480890),
    R = n(601255),
    w = n(562819),
    D = n(449582),
    P = n(351952),
    M = n(88686),
    L = n(214881),
    U = n(302223),
    B = n(609425),
    G = n(922301),
    F = n(750112),
    V = n(643501),
    W = n(977700),
    H = n(74848),
    K = n(449630),
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
    es = n(734057),
    el = n(629016),
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
    ef = n(403362),
    e_ = n(536194),
    ev = n(427262),
    eb = n(837921),
    ej = n(994314),
    eA = n(485599),
    eC = n(809991),
    ey = n(226513),
    eT = n(383952),
    eS = n(245750),
    eE = n(652215),
    eN = n(731854),
    eI = n(985018),
    ek = n(64734);
let eO = eb.Ay.getEnableHardwareAcceleration() ? h.JsQ : h.euF,
    eR = 2.5 * eg.A.Millis.SECOND,
    ew = 2 * eg.A.Millis.MINUTE,
    eD = 2 * eg.A.Millis.MINUTE,
    eP = 5 * eg.A.Millis.SECOND;
function eM(e) {
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
            "data-jump-section": f,
        } = e,
        v = i.useRef(null),
        b = t ?? v,
        j = (0, ex.F_)({ avatarDecoration: g, size: (0, w.Te)(h._3J.SIZE_32) }),
        A = (0, B.A)(),
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
                [s, l] = i.useState(!1);
            return (
                (0, _.A)(() => l(!0), 750),
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
                { updateOpenPopoutRef: t, highlightBadge: s ? n : void 0, setHighlightBadge: a }
            );
        })(),
        S = (0, P.K)(x);
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
                      return (0, a.jsx)(K.A, {
                          currentUser: o,
                          highlightBadge: y,
                          onClose: () => {
                              t?.();
                          },
                          setPopoutRef: n,
                          className: ek.dI,
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
                          style: S,
                          onMouseEnter: t,
                          onMouseDown: i,
                          onClick: (t) => {
                              e.onClick?.(t), c?.(t);
                          },
                          className: l()(ek.Q9, { [ek.ZQ]: null != x }),
                          children: [
                              (0, a.jsx)(h.DUT, {
                                  ...u,
                                  onClick: (t) => {
                                      t.stopPropagation(), e.onClick?.(t), c?.(t);
                                  },
                                  "aria-label": eI.intl.string(eI.t["5fWB8U"]),
                                  focusProps: { ringTarget: b },
                                  className: ek.$n,
                                  "data-jump-section": f,
                              }),
                              (0, a.jsx)(eO, {
                                  size: h._3J.SIZE_32,
                                  src: o.getAvatarURL(void 0, 28, !1),
                                  avatarDecoration: j,
                                  status: r ? eE.clD.STREAMING : d,
                                  isSpeaking: n,
                                  voiceDb: s,
                                  className: ek.my,
                                  "aria-hidden": !0,
                              }),
                              (0, a.jsx)("div", { className: ek.oM, children: m(A) }),
                          ],
                      });
                  },
              }),
          });
}
class eL extends i.PureComponent {
    speakingWhileMutedTooltipTimeout = new m.Ep();
    speakingWhilePTTTooltipTimeout = new m.Ep();
    speakingWhilePTTInactiveBackoff = new d.A(eD, null, !1);
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
        (0, I.A)(e, t, eE.JJy.ACCOUNT_PANEL), (0, k.X)(C.A.ACCOUNT, k.O.MIC, n);
    };
    handleToggleSelfDeaf = () => {
        let { serverDeaf: e, selfDeaf: t } = this.props;
        (0, N.A)(e, eE.JJy.ACCOUNT_PANEL), (0, k.X)(C.A.ACCOUNT, k.O.DEAFEN, !t);
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
                    (0, a.jsx)(e, { ...t, onClose: x.Z_, onInteraction: (0, O.s)("UserSettingsMenu", C.A.ACCOUNT) });
            });
    };
    audioOnInteractionHandler = (0, O.s)("AudioDeviceMenu", C.A.ACCOUNT);
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
                shouldShowPTTJoinTooltip: s,
                deviceChangedTooltipType: l,
            } = this.props,
            { hoveringOnMute: r } = this.state,
            o =
                void 0 === this.lastSpeakingWhileMutedNotificationTime ||
                performance.now() - this.lastSpeakingWhileMutedNotificationTime > ew;
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
                      this.speakingWhileMutedTooltipTimeout.start(eR, () =>
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
                      this.speakingWhilePTTTooltipTimeout.start(eR, () =>
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
        if ((0, v.A)({ activities: t, status: s, applicationStream: n, voiceChannel: r }))
            return (0, a.jsxs)(A.A, {
                hoverText: l,
                forceHover: e,
                children: [
                    (0, a.jsx)(h.AC4, { children: ev.Ay.humanizeStatus(s) }),
                    (0, a.jsx)(b.A, {
                        user: i,
                        activities: t,
                        applicationStream: n,
                        voiceChannel: r,
                        textClassName: ek.XD,
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
                  hoverText: l,
                  forceHover: e,
                  children: [
                      (0, a.jsx)(h.AC4, { children: ev.Ay.humanizeStatus(s) }),
                      (0, a.jsx)(U.A, { activity: o, emojiClassName: ek.Zg, className: ek.WO }),
                  ],
              })
            : null != s && s !== eE.clD.UNKNOWN && i.hasUniqueUsername()
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
                          className: ek.eW,
                          children: (0, a.jsx)(eA.A, {
                              className: l()({ [ek.e8]: null != e }),
                              children: (0, a.jsx)(F.A, {
                                  userName: n,
                                  displayNameStyles: e,
                                  effectDisplayType: this.state.hovered ? G.G.ANIMATED : G.G.STATIC,
                                  loop: !0,
                                  inProfile: !0,
                              }),
                          }),
                      }),
                      (0, a.jsx)("div", {
                          className: ek.XP,
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
                  children: (0, a.jsx)(eM, {
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
                                  className: l()(ek.kL, { [ek.UG]: null != n, [ek.bc]: !i, [ek.G5]: s }),
                                  onMouseEnter: this.handleMouseEnter,
                                  onMouseLeave: this.handleMouseLeave,
                                  children: [
                                      (0, a.jsx)(L.A, { nameplate: t, hovered: r, placement: M.u.ACCOUNT }),
                                      this.renderNameZone(e),
                                      (0, a.jsx)(eU, {
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
                      (0, a.jsx)(W.A, {}),
                  ],
              });
    }
}
function eU(e) {
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
            handleOpenAccountSettings: f,
            handleOpenSettingsContextMenu: _,
            dismissibleContents: v,
            nameplate: b,
            accountContainerRef: j,
            deviceChangedTooltipType: A,
            shouldShowPTTJoinTooltip: C = !1,
            dismissTooltips: y,
            speaking: T,
        } = e,
        S = (0, P.K)(b);
    return (0, a.jsxs)("div", {
        className: ek.Uo,
        style: S,
        children: [
            (0, a.jsx)(eT.A, {
                accountContainerRef: j,
                selfMute: n,
                serverMute: s,
                suppress: r,
                awaitingRemote: i,
                onMouseEnter: u,
                onMouseLeave: m,
                onClick: x,
                onContextMenu: p,
                iconForeground: null != b ? ek.t4 : void 0,
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
                serverDeaf: l,
                onClick: h,
                onContextMenu: g,
                awaitingRemote: i,
                iconForeground: null != b ? ek.t4 : void 0,
                nameplate: b,
                shouldShowOutputDeviceChangedTooltip: "output" === A,
                dismissTooltips: y,
            }),
            (0, a.jsx)(eS.A, {
                webBuildOverride: c,
                onClick: f,
                onContextMenu: _,
                dismissibleContents: v.settings,
                iconForeground: null != b ? ek.t4 : void 0,
                nameplate: b,
            }),
        ],
    });
}
function eB(e) {
    let t = (0, c.bG)([ed.A], () => null != ed.A.getChannelId()),
        n = (0, H.Py)(e),
        a = i.useRef(new m.Ep()),
        [s, l] = i.useState(!1);
    i.useEffect(() => {
        t &&
            n &&
            (l(!0),
            a.current.start(eP, () => {
                l(!1);
            }));
    }, [t, n]);
    let r = i.useCallback(() => {
        l(!1), a.current.stop();
    }, []);
    return (
        (0, f.l0)(() => {
            a.current.stop();
        }),
        { shouldShowTooltip: s, dismissTooltip: r }
    );
}
function eG() {
    let e = (0, c.bG)([eh.default], () => eh.default.getCurrentUser()),
        t = (0, c.bG)([ei.default], () => ei.default.getId()),
        {
            activities: n,
            streaming: s,
            status: l,
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
        p = (0, c.bG)([ed.A, es.A], () => {
            let e = ed.A.getChannelId();
            return null != e ? es.A.getChannel(e) : null;
        }),
        { mute: f, selfMute: _, suppress: v } = (0, ee.A)(p),
        { selfDeaf: b, deaf: j } = (0, Z.A)(p),
        A = (0, c.bG)([T.A], () => ((0, S.kK)() ? T.A.getCurrentBuildOverride().overrides?.discord_web : null)),
        N = (0, c.bG)([eo.Ay], () => eo.Ay.getSpeakingWhileMuted()),
        I = (0, c.bG)([E.A], () => E.A.isFullscreenInContext()),
        k = (0, c.bG)([er.A], () => er.A.hasLayers()),
        O = (0, h.red)(h.DXt) || k || e_.P.isDisallowPopupsSet() || I,
        w = (0, c.bG)([V.default], () => null != V.default.getAwaitingRemoteSessionInfo()),
        P = (0, c.bG)([ec.A], () => ec.A.getGuildId()),
        M = e?.avatarDecoration,
        L = (0, R.A)(M),
        U = ev.Ay.useName(e) ?? "",
        { analyticsLocations: B } = (0, y.Ay)(C.A.ACCOUNT),
        G = (0, D.r)({ user: e, guildId: void 0 }),
        { isQuestBarEmpty: F } = (0, z.c9)(),
        W = (0, c.bG)([$.A, eh.default, el.A], () => {
            let e,
                t = $.A.getSyncingWith(),
                n = $.A.getActivity(),
                a = [];
            return (
                null != t ? (e = t.partyId) : null != n && null != n.party && null != n.party.id && (e = n.party.id),
                null != e &&
                    (a = o()(Array.from(el.A.getParty(e) ?? []))
                        .map((e) => eh.default.getUser(e))
                        .filter(ef.Vq)
                        .value()),
                a.length > 1
            );
        }),
        H = { avatar: [], settings: [] };
    O || H.avatar.push(u.M.DISPLAY_NAME_STYLES_COACHMARK);
    let { shouldShowTooltip: K, dismissTooltip: q } = eB(eN.oh.AUDIO_INPUT),
        { shouldShowTooltip: Q, dismissTooltip: Y } = eB(eN.oh.AUDIO_OUTPUT),
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
            selfMute: _,
            serverDeaf: j,
            serverMute: f,
            speaking: d,
            voiceDb: m,
            speakingWhileMuted: N,
            speakingWhilePTTInactive: ex,
            status: l,
            streaming: s,
            suppress: v,
            webBuildOverride: A,
            awaitingRemote: w,
            nameplate: G,
            selectedGuildId: P,
            avatarDecoration: L,
            isQuestBarEmpty: F,
            isListenAlongVisible: W,
            deviceChangedTooltipType: ep,
            onDismissDeviceChangedTooltip: () => eg(ep),
            shouldShowPTTJoinTooltip: J,
            dismissPTTJoinTooltip: X,
        }),
    });
}
