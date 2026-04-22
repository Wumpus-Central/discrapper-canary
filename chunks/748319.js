n.d(t, { A: () => ez, g: () => eQ }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(735438),
    o = n.n(r),
    d = n(158390),
    c = n(311907),
    u = n(554146),
    p = n(451988),
    h = n(97808),
    m = n(778712),
    _ = n(265872),
    A = n(939249),
    f = n(140735),
    g = n(312138);
if (21552 == n.j) var x = n(192308);
var E = n(442433),
    C = n(820284),
    T = n(717558),
    v = n(964486),
    S = n(220839),
    b = n(397244),
    j = n(729551),
    I = n(755039),
    R = n(29160),
    N = n(793574),
    y = n(688810),
    O = n(521502),
    M = n(380610),
    U = n(313961),
    k = n(18235),
    P = n(183184),
    w = n(384059),
    L = n(480890),
    D = n(601255),
    F = n(562819),
    B = n(449582),
    G = n(351952),
    V = n(88686),
    W = n(214881),
    Q = n(302223),
    H = n(609425),
    q = n(922301),
    z = n(750112),
    K = n(643501),
    $ = n(977700),
    Y = n(74848),
    X = n(449630),
    Z = n(201805),
    J = n(655116),
    ee = n(890164),
    et = n(454719),
    en = n(342296),
    ei = n(780964),
    es = n(858897),
    el = n(533488),
    ea = n(167579),
    er = n(173660),
    eo = n(41580),
    ed = n(935101),
    ec = n(616356),
    eu = n(961350),
    ep = n(734057),
    eh = n(629016),
    em = n(186111),
    e_ = n(430452),
    eA = n(383501),
    ef = n(967198),
    eg = n(461213),
    ex = n(485296),
    eE = n(287809),
    eC = n(486020),
    eT = n(203982),
    ev = n(927813),
    eS = n(403362),
    eb = n(536194),
    ej = n(427262),
    eI = n(837921),
    eR = n(994314),
    eN = n(485599),
    ey = n(809991),
    eO = n(226513),
    eM = n(383952),
    eU = n(245750),
    ek = n(652215),
    eP = n(731854),
    ew = n(985018),
    eL = n(48193);
let eD = eI.Ay.getEnableHardwareAcceleration() ? h.Js : h.eu,
    eF = 2.5 * ev.A.Millis.SECOND,
    eB = 2 * ev.A.Millis.MINUTE,
    eG = 2 * ev.A.Millis.MINUTE,
    eV = 5 * ev.A.Millis.SECOND;
function eW(e) {
    let {
            ref: t,
            speaking: n,
            voiceDb: l = -1 / 0,
            streaming: r,
            currentUser: o,
            status: d,
            handleClick: c,
            handleMouseLeave: u,
            renderNameTag: p,
            nameplate: h,
            avatarDecoration: f,
            "data-jump-section": g,
        } = e,
        x = s.useRef(null),
        E = t ?? x,
        T = (0, eC.F_)({ avatarDecoration: f, size: (0, F.Te)(m._3.SIZE_32) }),
        v = (0, H.A)(),
        {
            updateOpenPopoutRef: b,
            highlightBadge: j,
            setHighlightBadge: I,
        } = (function () {
            let e = s.useRef(null),
                t = s.useCallback((t) => {
                    e.current = () => {
                        t.onMouseDown(), t.onClick();
                    };
                }, []),
                [n, i] = s.useState(),
                [l, a] = s.useState(!1);
            return (
                (0, S.A)(() => a(!0), 750),
                s.useEffect(() => {
                    let t = (t) => {
                        let { highlightBadge: n } = t;
                        null != n && i(n), e.current?.();
                    };
                    return (
                        eT._.subscribe(ek.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t),
                        () => {
                            eT._.unsubscribe(ek.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t);
                        }
                    );
                }),
                { updateOpenPopoutRef: t, highlightBadge: l ? n : void 0, setHighlightBadge: i }
            );
        })(),
        R = (0, G.K)(h);
    return null == o
        ? null
        : (0, i.jsx)(C.A, {
              object: ek.ZSU.AVATAR,
              children: (0, i.jsx)(en.A, {
                  user: o,
                  targetElementRef: E,
                  clickTrap: !0,
                  preload: () =>
                      (0, et.A)(o.id, o.getAvatarURL(void 0, en.S), {
                          type: "account_popout",
                          withMutualGuilds: !1,
                          withMutualFriends: !1,
                          guildId: void 0,
                      }),
                  renderPopout: (e, t) => {
                      let { closePopout: n, setPopoutRef: s } = e;
                      return (0, i.jsx)(X.A, {
                          currentUser: o,
                          highlightBadge: j,
                          openedAt: t,
                          onClose: () => {
                              n?.();
                          },
                          setPopoutRef: s,
                          className: eL.dI,
                      });
                  },
                  position: "top",
                  align: "left",
                  animation: _.Y.Animation.FADE,
                  spacing: 14,
                  fixed: !0,
                  ignoreModalClicks: !0,
                  onRequestClose: () => {
                      u(), I(void 0);
                  },
                  children: (e) => {
                      b(e);
                      let { onMouseEnter: t, onMouseDown: s, ...u } = e;
                      return (0, i.jsxs)("div", {
                          ref: E,
                          style: R,
                          onMouseEnter: t,
                          onMouseDown: s,
                          onClick: (t) => {
                              e.onClick?.(t), c?.(t);
                          },
                          className: a()(eL.Q9, { [eL.ZQ]: null != h }),
                          children: [
                              (0, i.jsx)(A.D, {
                                  ...u,
                                  onClick: (t) => {
                                      t.stopPropagation(), e.onClick?.(t), c?.(t);
                                  },
                                  "aria-label": ew.intl.string(ew.t["5fWB8U"]),
                                  focusProps: { ringTarget: E },
                                  className: eL.$n,
                                  "data-jump-section": g,
                              }),
                              (0, i.jsx)(eD, {
                                  size: m._3.SIZE_32,
                                  src: o.getAvatarURL(void 0, 28, !1),
                                  avatarDecoration: T,
                                  status: r ? ek.clD.STREAMING : d,
                                  isSpeaking: n,
                                  voiceDb: l,
                                  className: eL.my,
                                  "aria-hidden": !0,
                              }),
                              (0, i.jsx)("div", { className: eL.oM, children: p(v) }),
                          ],
                      });
                  },
              }),
          });
}
class eQ extends s.PureComponent {
    speakingWhileMutedTooltipTimeout = new p.Ep();
    speakingWhilePTTTooltipTimeout = new p.Ep();
    speakingWhilePTTInactiveBackoff = new d.A(eG, null, !1);
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
        let { speakingWhileMuted: t, speakingWhilePTTInactive: n, occluded: i } = e,
            { speakingWhileMuted: s, occluded: l, speakingWhilePTTInactive: a } = this.props;
        l !== i && this.handleOccludedChanged(),
            s !== t && this.handleSpeakingWhileMutedChanged(),
            a !== n && this.handleSpeakingWhilePTTChanged();
    }
    componentWillUnmount() {
        this.speakingWhileMutedTooltipTimeout.stop(), this.speakingWhilePTTTooltipTimeout.stop();
    }
    handleToggleSelfMute = () => {
        let { serverMute: e, suppress: t, selfMute: n } = this.props;
        (0, P.A)(e, t, ek.JJy.ACCOUNT_PANEL), (0, w.X)(N.A.ACCOUNT, w.O.MIC, n);
    };
    handleToggleSelfDeaf = () => {
        let { serverDeaf: e, selfDeaf: t } = this.props;
        (0, k.A)(e, ek.JJy.ACCOUNT_PANEL), (0, w.X)(N.A.ACCOUNT, w.O.DEAFEN, !t);
    };
    handleOpenAccountSettings = () => {
        this.dismissTooltips(),
            eA.A.isConnected() ? (0, es.openUserSettings)(ei.X.VOICE_AND_VIDEO_PANEL) : (0, es.openUserSettings)();
    };
    handleOpenSettingsContextMenu = (e) => {
        let { currentUser: t } = this.props;
        null != t &&
            (0, E.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("755"),
                    n.e("77602"),
                    n.e("86546"),
                    n.e("46815"),
                    n.e("2736"),
                    n.e("71831"),
                    n.e("62175"),
                    n.e("84704"),
                    n.e("33098"),
                    n.e("27482"),
                    n.e("55839"),
                    n.e("70233"),
                    n.e("95782"),
                    n.e("44667"),
                    n.e("83518"),
                    n.e("81694"),
                    n.e("58667"),
                    n.e("57222"),
                    n.e("19395"),
                    n.e("34749"),
                    n.e("40976"),
                    n.e("7803"),
                    n.e("67646"),
                    n.e("35561"),
                    n.e("88109"),
                    n.e("38332"),
                ]).then(n.bind(n, 92962));
                return (t) =>
                    (0, i.jsx)(e, { ...t, onClose: E.Z_, onInteraction: (0, L.s)("UserSettingsMenu", N.A.ACCOUNT) });
            });
    };
    audioOnInteractionHandler = (0, L.s)("AudioDeviceMenu", N.A.ACCOUNT);
    handleInputAudioContextMenu = (e, t) => {
        this.dismissTooltips(),
            (0, E.L3)(e, async () => {
                let { default: e } = await n.e("78827").then(n.bind(n, 385318));
                return () => {
                    let { enabledInputProfiles: n } = (0, el.d)({ location: "Account" });
                    return (0, i.jsx)(y.f5, {
                        value: t,
                        children: (0, i.jsx)(e, {
                            onClose: E.Z_,
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
            (0, E.L3)(e, async () => {
                let { default: e } = await n.e("78827").then(n.bind(n, 385318));
                return () =>
                    (0, i.jsx)(y.f5, {
                        value: t,
                        children: (0, i.jsx)(e, {
                            onClose: E.Z_,
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
                speakingWhileMuted: i,
                occluded: s,
                shouldShowPTTJoinTooltip: l,
                deviceChangedTooltipType: a,
            } = this.props,
            { hoveringOnMute: r } = this.state,
            o =
                void 0 === this.lastSpeakingWhileMutedNotificationTime ||
                performance.now() - this.lastSpeakingWhileMutedNotificationTime > eB;
        i
            ? r ||
              !e ||
              t ||
              n ||
              s ||
              !o ||
              null != a ||
              l ||
              this.setState({ shouldShowSpeakingWhileMutedTooltip: !0 }, () => {
                  (this.lastSpeakingWhileMutedNotificationTime = performance.now()),
                      this.speakingWhileMutedTooltipTimeout.start(eF, () =>
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
                speakingWhilePTTInactive: i,
                occluded: s,
                shouldShowPTTJoinTooltip: l,
                deviceChangedTooltipType: a,
            } = this.props,
            { hoveringOnMute: r } = this.state,
            o =
                void 0 === this.lastSpeakingWhilePTTNotificationTime ||
                performance.now() - this.lastSpeakingWhilePTTNotificationTime >
                    this.speakingWhilePTTInactiveBackoff.current;
        i
            ? r ||
              e ||
              t ||
              n ||
              s ||
              !o ||
              null != a ||
              l ||
              this.setState({ shouldShowSpeakingWhilePTTTooltip: !0 }, () => {
                  (this.lastSpeakingWhilePTTNotificationTime = performance.now()),
                      this.speakingWhilePTTInactiveBackoff.fail(),
                      this.speakingWhilePTTTooltipTimeout.start(eF, () =>
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
                status: l,
                userTag: a,
                voiceChannel: r,
            } = this.props;
        if (null == s) return null;
        if ((0, b.A)({ activities: t, status: l, applicationStream: n, voiceChannel: r }))
            return (0, i.jsxs)(R.A, {
                hoverText: a,
                forceHover: e,
                children: [
                    (0, i.jsx)(f.A, { children: ej.Ay.humanizeStatus(l) }),
                    (0, i.jsx)(j.A, {
                        user: s,
                        activities: t,
                        applicationStream: n,
                        voiceChannel: r,
                        textClassName: eL.XD,
                        hideTooltip: !0,
                    }),
                ],
            });
        let o = t?.find((e) => {
            let { type: t } = e;
            return t === ek.$pd.CUSTOM_STATUS;
        });
        return null != o
            ? (0, i.jsxs)(R.A, {
                  hoverText: a,
                  forceHover: e,
                  children: [
                      (0, i.jsx)(f.A, { children: ej.Ay.humanizeStatus(l) }),
                      (0, i.jsx)(Q.A, { activity: o, emojiClassName: eL.Zg, className: eL.WO }),
                  ],
              })
            : null != l && l !== ek.clD.UNKNOWN && s.hasUniqueUsername()
              ? (0, i.jsx)(R.A, {
                    hoverText: a,
                    forceHover: e,
                    children: (0, i.jsx)(I.A, { text: ej.Ay.humanizeStatus(l) }),
                })
              : a;
    }
    renderNameTag = (e) => {
        let { currentUser: t, username: n } = this.props;
        return null == t
            ? null
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)("div", {
                          className: eL.eW,
                          children: (0, i.jsx)(eN.A, {
                              className: a()({ [eL.e8]: null != e }),
                              children: (0, i.jsx)(z.A, {
                                  userName: n,
                                  displayNameStyles: e,
                                  effectDisplayType: this.state.hovered ? q.G.ANIMATED : q.G.STATIC,
                                  loop: !0,
                                  inProfile: !0,
                              }),
                          }),
                      }),
                      (0, i.jsx)("div", {
                          className: eL.XP,
                          children: (0, i.jsx)(eR.A, { children: this.renderStatus() }),
                      }),
                  ],
              });
    };
    renderNameZone(e) {
        let { currentUser: t, dismissibleContents: n } = this.props;
        return null == t
            ? null
            : (0, i.jsx)(ey.A, {
                  guildId: this.props.selectedGuildId ?? null,
                  currentUser: t,
                  targetElementRef: this.avatarWithPopoutRef,
                  additionalDCs: n.avatar,
                  children: (0, i.jsx)(eW, {
                      ...this.props,
                      ref: this.avatarWithPopoutRef,
                      handleMouseLeave: this.handleMouseLeave,
                      renderNameTag: this.renderNameTag,
                      "data-jump-section": e["data-jump-section"],
                  }),
              });
    }
    render() {
        let { currentUser: e, nameplate: t, voiceChannel: n, isQuestBarEmpty: s, isListenAlongVisible: l } = this.props,
            r = this.state.hovered;
        return null == e
            ? null
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(g.sk, {
                          children: (e) =>
                              (0, i.jsxs)("div", {
                                  ref: this.containerRef,
                                  className: a()(eL.kL, { [eL.UG]: null != n, [eL.bc]: !s, [eL.G5]: l }),
                                  onMouseEnter: this.handleMouseEnter,
                                  onMouseLeave: this.handleMouseLeave,
                                  children: [
                                      (0, i.jsx)(W.A, { nameplate: t, hovered: r, placement: V.u.ACCOUNT }),
                                      this.renderNameZone(e),
                                      (0, i.jsx)(eH, {
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
                      (0, i.jsx)($.A, {}),
                  ],
              });
    }
}
function eH(e) {
    let {
            selfDeaf: t,
            selfMute: n,
            awaitingRemote: s,
            serverMute: l,
            serverDeaf: a,
            suppress: r,
            shouldShowSpeakingWhileMutedTooltip: o,
            shouldShowSpeakingWhilePTTTooltip: d,
            webBuildOverride: c,
            handleMouseEnterMute: u,
            handleMouseLeaveMute: p,
            handleToggleSelfDeaf: h,
            handleToggleSelfMute: m,
            handleInputAudioContextMenu: _,
            handleOutputAudioContextMenu: A,
            handleOpenAccountSettings: f,
            handleOpenSettingsContextMenu: g,
            dismissibleContents: x,
            nameplate: E,
            accountContainerRef: C,
            deviceChangedTooltipType: T,
            shouldShowPTTJoinTooltip: v = !1,
            dismissTooltips: S,
            speaking: b,
        } = e,
        j = (0, G.K)(E);
    return (0, i.jsxs)("div", {
        className: eL.Uo,
        style: j,
        children: [
            (0, i.jsx)(eM.A, {
                accountContainerRef: C,
                selfMute: n,
                serverMute: l,
                suppress: r,
                awaitingRemote: s,
                onMouseEnter: u,
                onMouseLeave: p,
                onClick: m,
                onContextMenu: _,
                iconForeground: null != E ? eL.t4 : void 0,
                nameplate: E,
                shouldShowSpeakingWhileMutedTooltip: o,
                shouldShowInputDeviceChangedTooltip: !o && "input" === T,
                shouldShowSpeakingWhilePTTTooltip: d,
                shouldShowPTTJoinTooltip: v,
                dismissTooltips: S,
                speaking: b,
            }),
            (0, i.jsx)(eO.A, {
                selfDeaf: t,
                serverDeaf: a,
                onClick: h,
                onContextMenu: A,
                awaitingRemote: s,
                iconForeground: null != E ? eL.t4 : void 0,
                nameplate: E,
                shouldShowOutputDeviceChangedTooltip: "output" === T,
                dismissTooltips: S,
            }),
            (0, i.jsx)(eU.A, {
                webBuildOverride: c,
                onClick: f,
                onContextMenu: g,
                dismissibleContents: x.settings,
                iconForeground: null != E ? eL.t4 : void 0,
                nameplate: E,
            }),
        ],
    });
}
function eq(e) {
    let t = (0, c.bG)([eA.A], () => null != eA.A.getChannelId()),
        n = (0, Y.Py)(e),
        i = s.useRef(new p.Ep()),
        [l, a] = s.useState(!1);
    s.useEffect(() => {
        t &&
            n &&
            (a(!0),
            i.current.start(eV, () => {
                a(!1);
            }));
    }, [t, n]);
    let r = s.useCallback(() => {
        a(!1), i.current.stop();
    }, []);
    return (
        (0, v.l0)(() => {
            i.current.stop();
        }),
        { shouldShowTooltip: l, dismissTooltip: r }
    );
}
function ez() {
    let e = (0, c.bG)([eE.default], () => eE.default.getCurrentUser()),
        t = (0, c.bG)([eu.default], () => eu.default.getId()),
        {
            activities: n,
            streaming: l,
            status: a,
        } = (0, c.cf)([eg.A], () => {
            let e = eg.A.getActivities();
            return {
                activities: e,
                streaming:
                    null !=
                    e.find((e) => {
                        let { type: t } = e;
                        return t === ek.$pd.STREAMING;
                    }),
                status: eg.A.getStatus(),
            };
        }),
        r = (0, c.bG)([ec.A], () => ec.A.getAnyStreamForUser(t)),
        d = (0, T.A)({ userId: t }),
        p = (0, c.bG)([ex.A], () => ex.A.getVoiceVolume(t)),
        h = ej.Ay.useUserTag(e, { decoration: "never" }),
        m = (0, c.bG)([eA.A, ep.A], () => {
            let e = eA.A.getChannelId();
            return null != e ? ep.A.getChannel(e) : null;
        }),
        { mute: _, selfMute: A, suppress: f } = (0, er.A)(m),
        { selfDeaf: g, deaf: E } = (0, ea.A)(m),
        C = (0, c.bG)([O.A], () => ((0, M.kK)() ? O.A.getCurrentBuildOverride().overrides?.discord_web : null)),
        v = (0, c.bG)([e_.Ay], () => e_.Ay.getSpeakingWhileMuted()),
        S = (0, c.bG)([U.A], () => U.A.isFullscreenInContext()),
        b = (0, c.bG)([em.A], () => em.A.hasLayers()),
        j = (0, x.useModalsStore)(x.hasAnyModalOpenSelector) || b || eb.P.isDisallowPopupsSet() || S,
        I = (0, c.bG)([K.default], () => null != K.default.getAwaitingRemoteSessionInfo()),
        R = (0, c.bG)([ef.A], () => ef.A.getGuildId()),
        k = e?.avatarDecoration,
        P = (0, D.A)(k),
        w = ej.Ay.useName(e) ?? "",
        { analyticsLocations: L } = (0, y.Ay)(N.A.ACCOUNT),
        F = (0, B.r)({ user: e, guildId: void 0 }),
        { isQuestBarEmpty: G } = (0, Z.c9)(),
        V = (0, c.bG)([J.A, eE.default, eh.A], () => {
            let e,
                t = J.A.getSyncingWith(),
                n = J.A.getActivity(),
                i = [];
            return (
                null != t ? (e = t.partyId) : null != n && null != n.party && null != n.party.id && (e = n.party.id),
                null != e &&
                    (i = o()(Array.from(eh.A.getParty(e) ?? []))
                        .map((e) => eE.default.getUser(e))
                        .filter(eS.Vq)
                        .value()),
                i.length > 1
            );
        }),
        W = { avatar: [], settings: [] },
        Q = (0, ee.lX)("AccountCoachmark");
    !j && (W.avatar.push(u.M.DISPLAY_NAME_STYLES_COACHMARK), Q && W.settings.push(u.M.PRIVATE_PROFILE_COACHMARK));
    let { shouldShowTooltip: H, dismissTooltip: q } = eq(eP.oh.AUDIO_INPUT),
        { shouldShowTooltip: z, dismissTooltip: $ } = eq(eP.oh.AUDIO_OUTPUT),
        { shouldShowTooltip: Y, dismissTooltip: X } = (0, eo.A)(),
        et = (0, ed.A)(),
        en = s.useMemo(() => (H ? "input" : z ? "output" : void 0), [H, z]),
        ei = s.useCallback(
            (e) => {
                switch (e) {
                    case "input":
                        q();
                        break;
                    case "output":
                        $();
                }
            },
            [q, $],
        );
    return (0, i.jsx)(y.f5, {
        value: L,
        children: (0, i.jsx)(eQ, {
            currentUser: e,
            username: w,
            activities: n,
            applicationStream: r,
            voiceChannel: m,
            dismissibleContents: W,
            userTag: h,
            occluded: j,
            selfDeaf: g,
            selfMute: A,
            serverDeaf: E,
            serverMute: _,
            speaking: d,
            voiceDb: p,
            speakingWhileMuted: v,
            speakingWhilePTTInactive: et,
            status: a,
            streaming: l,
            suppress: f,
            webBuildOverride: C,
            awaitingRemote: I,
            nameplate: F,
            selectedGuildId: R,
            avatarDecoration: P,
            isQuestBarEmpty: G,
            isListenAlongVisible: V,
            deviceChangedTooltipType: en,
            onDismissDeviceChangedTooltip: () => ei(en),
            shouldShowPTTJoinTooltip: Y,
            dismissPTTJoinTooltip: X,
        }),
    });
}
