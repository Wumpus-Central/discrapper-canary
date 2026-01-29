n.d(t, {
    A: () => e6,
    g: () => e0,
}),
    n(896048),
    n(321073);
var a = n(627968),
    l = n(64700),
    r = n(503698),
    i = n.n(r),
    s = n(735438),
    o = n.n(s),
    c = n(311907),
    d = n(554146),
    u = n(451988),
    m = n(348858),
    p = n(505312),
    h = n(397927),
    x = n(442433),
    g = n(820284),
    f = n(717558),
    b = n(964486),
    v = n(220839),
    j = n(901517),
    _ = n(397244),
    y = n(729551),
    A = n(755039),
    C = n(29160),
    S = n(793574),
    O = n(688810),
    T = n(325445),
    E = n(954921),
    N = n(521502),
    w = n(380610),
    I = n(313961),
    P = n(617354),
    k = n(980923),
    R = n(206018),
    D = n(18235),
    M = n(183184),
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
    q = n(449630),
    Q = n(111864),
    Y = n(967054),
    J = n(226540),
    X = n(227),
    $ = n(772786),
    Z = n(134991),
    ee = n(967370),
    et = n(535731),
    en = n(201805),
    ea = n(655116),
    el = n(454719),
    er = n(342296),
    ei = n(780964),
    es = n(77735),
    eo = n(840065),
    ec = n(167579),
    ed = n(173660),
    eu = n(340913),
    em = n(41580),
    ep = n(935101),
    eh = n(277342),
    ex = n(616356),
    eg = n(961350),
    ef = n(734057),
    eb = n(629016),
    ev = n(186111),
    ej = n(430452),
    e_ = n(383501),
    ey = n(967198),
    eA = n(461213),
    eC = n(485296),
    eS = n(351906),
    eO = n(287809),
    eT = n(166403),
    eE = n(486020),
    eN = n(203982),
    ew = n(927813),
    eI = n(403362),
    eP = n(536194),
    ek = n(427262),
    eR = n(837921),
    eD = n(350535),
    eM = n(42473),
    eL = n(994314),
    eU = n(485599),
    eB = n(809991),
    eG = n(652215),
    eF = n(49999),
    eV = n(654487),
    eW = n(731854),
    eH = n(985018),
    eK = n(146664);

function ez(e, t, n) {
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

function eq(e) {
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
                ez(e, t, n[t]);
            });
    }
    return e;
}

function eQ(e, t) {
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
let eY = eR.Ay.getEnableHardwareAcceleration() ? h.JsQ : h.euF,
    eJ = 2.5 * ew.A.Millis.SECOND,
    eX = 2 * ew.A.Millis.MINUTE,
    e$ = 5 * ew.A.Millis.SECOND;

function eZ(e) {
    let {
            ref: t,
            speaking: n,
            latched: r,
            voiceDb: s = -1 / 0,
            streaming: o,
            currentUser: c,
            status: d,
            handleClick: u,
            handleMouseLeave: m,
            renderNameTag: p,
            nameplate: x,
            avatarDecoration: f,
            "data-jump-section": b,
        } = e,
        j = l.useRef(null),
        _ = null != t ? t : j,
        y = (0, eE.F_)({
            avatarDecoration: f,
            size: (0, E.Te)(h._3J.SIZE_32),
        }),
        A = (0, F.A)(),
        {
            updateOpenPopoutRef: C,
            highlightBadge: S,
            setHighlightBadge: O,
        } = (function () {
            let e = l.useRef(null),
                t = l.useCallback((t) => {
                    e.current = () => {
                        t.onMouseDown(), t.onClick();
                    };
                }, []),
                [n, a] = l.useState(),
                [r, i] = l.useState(!1);
            return (
                (0, v.A)(() => i(!0), 750),
                l.useEffect(() => {
                    let t = (t) => {
                        var n;
                        let { highlightBadge: l } = t;
                        null != l && a(l), null == (n = e.current) || n.call(e);
                    };
                    return (
                        eN._.subscribe(eG.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t),
                        () => {
                            eN._.unsubscribe(eG.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t);
                        }
                    );
                }),
                {
                    updateOpenPopoutRef: t,
                    highlightBadge: r ? n : void 0,
                    setHighlightBadge: a,
                }
            );
        })(),
        T = (0, Y.K)(x);
    return null == c
        ? null
        : (0, a.jsx)(g.A, {
              object: eG.ZSU.AVATAR,
              children: (0, a.jsx)(er.A, {
                  user: c,
                  targetElementRef: _,
                  clickTrap: !0,
                  preload: () =>
                      (0, el.A)(c.id, c.getAvatarURL(void 0, er.S), {
                          type: "account_popout",
                          withMutualGuilds: !1,
                          withMutualFriends: !1,
                          guildId: void 0,
                      }),
                  renderPopout: (e, t) => {
                      let { closePopout: n, setPopoutRef: l } = e;
                      return (0, a.jsx)(q.A, {
                          currentUser: c,
                          highlightBadge: S,
                          openedAt: t,
                          onClose: () => {
                              null == n || n();
                          },
                          setPopoutRef: l,
                      });
                  },
                  position: "top",
                  align: "left",
                  animation: h.YNO.Animation.FADE,
                  spacing: 14,
                  fixed: !0,
                  ignoreModalClicks: !0,
                  onRequestClose: () => {
                      m(), O(void 0);
                  },
                  children: (e) => (
                      C(e),
                      (0, a.jsxs)(
                          h.DUT,
                          eQ(
                              eq(
                                  {
                                      innerRef: _,
                                      style: T,
                                  },
                                  e,
                              ),
                              {
                                  onClick: (t) => {
                                      var n;
                                      null == (n = e.onClick) || n.call(e, t), null == u || u(t);
                                  },
                                  "aria-label": eH.intl.string(eH.t["3Uj+2p"]),
                                  "data-jump-section": b,
                                  className: i()(eK.R3, {
                                      [eK.ZQ]: null != x,
                                  }),
                                  children: [
                                      (0, a.jsx)(eY, {
                                          size: h._3J["SIZE_".concat(32)],
                                          src: c.getAvatarURL(void 0, 28, !1),
                                          avatarDecoration: y,
                                          "aria-label": c.username,
                                          status: o ? eG.clD.STREAMING : d,
                                          isSpeaking: n,
                                          isLatched: r,
                                          voiceDb: s,
                                          className: eK.my,
                                      }),
                                      (0, a.jsx)("div", {
                                          className: eK.oM,
                                          children: p(A),
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
    componentDidUpdate(e) {
        let { speakingWhileMuted: t, speakingWhilePTTInactive: n, occluded: a } = e,
            { speakingWhileMuted: l, occluded: r, speakingWhilePTTInactive: i } = this.props;
        r !== a && this.handleOccludedChanged(),
            l !== t && this.handleSpeakingWhileMutedChanged(),
            i !== n && this.handleSpeakingWhilePTTChanged();
    }
    componentWillUnmount() {
        this.speakingWhileMutedTooltipTimeout.stop(), this.speakingWhilePTTTooltipTimeout.stop();
    }
    renderStatus() {
        let { hovered: e } = this.state,
            {
                activities: t,
                applicationStream: n,
                currentUser: l,
                status: r,
                userTag: i,
                voiceActivityStatusEnabled: s,
                voiceChannel: o,
            } = this.props;
        if (null == l) return null;
        if (
            (0, _.A)({
                activities: t,
                status: r,
                applicationStream: n,
                voiceChannel: s ? o : void 0,
            })
        )
            return (0, a.jsx)(C.A, {
                hoverText: i,
                forceHover: e,
                children: (0, a.jsx)(y.A, {
                    user: l,
                    activities: t,
                    applicationStream: n,
                    voiceChannel: s ? o : void 0,
                    textClassName: eK.XD,
                    hideTooltip: !0,
                }),
            });
        let c =
            null == t
                ? void 0
                : t.find((e) => {
                      let { type: t } = e;
                      return t === eG.$pd.CUSTOM_STATUS;
                  });
        return null != c
            ? (0, a.jsx)(C.A, {
                  hoverText: i,
                  forceHover: e,
                  children: (0, a.jsx)(B.A, {
                      activity: c,
                      emojiClassName: eK.Zg,
                      className: eK.WO,
                  }),
              })
            : null != r && r !== eG.clD.UNKNOWN && l.hasUniqueUsername()
              ? (0, a.jsx)(C.A, {
                    hoverText: i,
                    forceHover: e,
                    children: (0, a.jsx)(A.A, {
                        text: ek.Ay.humanizeStatus(r),
                    }),
                })
              : i;
    }
    renderAvatarWithPopout(e) {
        let {
            focusSectionProps: { "data-jump-section": t },
            onClick: n,
        } = e;
        return (0, a.jsx)(
            eZ,
            eQ(eq({}, this.props), {
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
            : (0, a.jsx)(eB.A, {
                  guildId: null != (t = this.props.selectedGuildId) ? t : null,
                  currentUser: n,
                  targetElementRef: this.avatarWithPopoutRef,
                  additionalDCs: l.avatar,
                  children: this.renderAvatarWithPopout({
                      focusSectionProps: e,
                  }),
              });
    }
    render() {
        let { currentUser: e, nameplate: t, voiceChannel: n, isQuestBarEmpty: l, isListenAlongVisible: r } = this.props,
            s = this.state.hovered;
        return null == e
            ? null
            : (0, a.jsxs)(a.Fragment, {
                  children: [
                      (0, a.jsx)(h.skg, {
                          children: (e) =>
                              (0, a.jsxs)("div", {
                                  ref: this.containerRef,
                                  className: i()(eK.kL, {
                                      [eK.UG]: null != n,
                                      [eK.bc]: !l,
                                      [eK.G5]: r,
                                  }),
                                  onMouseEnter: this.handleMouseEnter,
                                  onMouseLeave: this.handleMouseLeave,
                                  children: [
                                      (0, a.jsx)(X.A, {
                                          nameplate: t,
                                          hovered: s,
                                          placement: J.u.ACCOUNT,
                                      }),
                                      this.renderNameZone(e),
                                      (0, a.jsx)(
                                          e1,
                                          eQ(eq({}, this.props, this.state), {
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
                      (0, a.jsx)(K.A, {}),
                  ],
              });
    }
    constructor(...e) {
        super(...e),
            ez(this, "speakingWhileMutedTooltipTimeout", new u.Ep()),
            ez(this, "speakingWhilePTTTooltipTimeout", new u.Ep()),
            ez(this, "lastSpeakingWhileMutedNotificationTime", void 0),
            ez(this, "lastSpeakingWhilePTTNotificationTime", void 0),
            ez(this, "state", {
                hovered: !1,
                shouldShowNametagTooltip: !1,
                shouldShowSpeakingWhileMutedTooltip: !1,
                shouldShowSpeakingWhilePTTTooltip: !1,
                hoveringOnMute: !1,
            }),
            ez(this, "containerRef", l.createRef()),
            ez(this, "avatarWithPopoutRef", l.createRef()),
            ez(this, "handleToggleSelfMute", () => {
                let { serverMute: e, suppress: t, selfMute: n } = this.props;
                (0, M.A)(e, t, eG.JJy.ACCOUNT_PANEL), (0, L.X)(S.A.ACCOUNT, L.O.MIC, n);
            }),
            ez(this, "handleToggleSelfDeaf", () => {
                let { serverDeaf: e, selfDeaf: t } = this.props;
                (0, D.A)(e, eG.JJy.ACCOUNT_PANEL), (0, L.X)(S.A.ACCOUNT, L.O.DEAFEN, !t);
            }),
            ez(this, "handleOpenAccountSettings", () => {
                this.dismissTooltips(),
                    e_.A.isConnected()
                        ? (0, eo.openUserSettings)(ei.X.VOICE_AND_VIDEO_PANEL, {
                              section: eG.nc_.VOICE,
                          })
                        : (0, eo.openUserSettings)();
            }),
            ez(this, "handleOpenSettingsContextMenu", (e) => {
                let { currentUser: t } = this.props;
                null != t &&
                    (0, x.L3)(e, async () => {
                        let { default: e } = await n.e("95153").then(n.bind(n, 50120));
                        return (n) =>
                            (0, a.jsx)(
                                e,
                                eQ(eq({}, n), {
                                    user: t,
                                    premiumSubscription: this.props.premiumSubscription,
                                    webBuildOverride: this.props.webBuildOverride,
                                    onInteraction: (0, U.s)("UserSettingsCogContextMenu", S.A.ACCOUNT),
                                }),
                            );
                    });
            }),
            ez(this, "audioOnInteractionHandler", (0, U.s)("AudioDeviceMenu", S.A.ACCOUNT)),
            ez(this, "handleInputAudioContextMenu", (e, t) => {
                this.dismissTooltips(),
                    (0, x.L3)(e, async () => {
                        let { default: e } = await n.e("78827").then(n.bind(n, 385318));
                        return () => {
                            let { enabledInputProfiles: n } = (0, es.d)({
                                location: "Account",
                            });
                            return (0, a.jsx)(O.f5, {
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
            }),
            ez(this, "handleOutputAudioContextMenu", (e, t) => {
                this.dismissTooltips(),
                    (0, x.L3)(e, async () => {
                        let { default: e } = await n.e("78827").then(n.bind(n, 385318));
                        return () =>
                            (0, a.jsx)(O.f5, {
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
            }),
            ez(this, "handleMouseEnter", () => {
                this.setState({
                    hovered: !0,
                });
            }),
            ez(this, "handleMouseLeave", () => {
                this.setState({
                    hovered: !1,
                });
            }),
            ez(this, "handleMouseEnterMute", () => {
                this.setState({
                    hoveringOnMute: !0,
                    shouldShowSpeakingWhileMutedTooltip: !1,
                    shouldShowSpeakingWhilePTTTooltip: !1,
                }),
                    this.speakingWhileMutedTooltipTimeout.stop(),
                    this.speakingWhilePTTTooltipTimeout.stop();
            }),
            ez(this, "handleMouseLeaveMute", () => {
                this.setState({
                    hoveringOnMute: !1,
                });
            }),
            ez(this, "dismissSpeakingWhileMutedTooltip", () => {
                this.setState({
                    shouldShowSpeakingWhileMutedTooltip: !1,
                }),
                    this.speakingWhileMutedTooltipTimeout.stop();
            }),
            ez(this, "dismissSpeakingWhilePTTTooltip", () => {
                this.setState({
                    shouldShowSpeakingWhilePTTTooltip: !1,
                }),
                    this.speakingWhilePTTTooltipTimeout.stop();
            }),
            ez(this, "dismissTooltips", () => {
                var e, t, n, a;
                null == (e = (t = this.props).onDismissDeviceChangedTooltip) || e.call(t),
                    null == (n = (a = this.props).dismissPTTJoinTooltip) || n.call(a),
                    this.dismissSpeakingWhileMutedTooltip(),
                    this.dismissSpeakingWhilePTTTooltip();
            }),
            ez(this, "handleOccludedChanged", () => {
                let { occluded: e } = this.props;
                e &&
                    this.setState({
                        shouldShowNametagTooltip: !1,
                        shouldShowSpeakingWhileMutedTooltip: !1,
                        shouldShowSpeakingWhilePTTTooltip: !1,
                    });
            }),
            ez(this, "handleSpeakingWhileMutedChanged", () => {
                let {
                        selfMute: e,
                        serverMute: t,
                        suppress: n,
                        speakingWhileMuted: a,
                        occluded: l,
                        shouldShowPTTJoinTooltip: r,
                        deviceChangedTooltipType: i,
                    } = this.props,
                    { hoveringOnMute: s } = this.state,
                    o =
                        void 0 === this.lastSpeakingWhileMutedNotificationTime ||
                        performance.now() - this.lastSpeakingWhileMutedNotificationTime > eX;
                a
                    ? s ||
                      !e ||
                      t ||
                      n ||
                      l ||
                      !o ||
                      null != i ||
                      r ||
                      this.setState(
                          {
                              shouldShowSpeakingWhileMutedTooltip: !0,
                          },
                          () => {
                              (this.lastSpeakingWhileMutedNotificationTime = performance.now()),
                                  this.speakingWhileMutedTooltipTimeout.start(eJ, () =>
                                      this.setState({
                                          shouldShowSpeakingWhileMutedTooltip: !1,
                                      }),
                                  );
                          },
                      )
                    : (this.setState({
                          shouldShowSpeakingWhileMutedTooltip: !1,
                      }),
                      this.speakingWhileMutedTooltipTimeout.stop());
            }),
            ez(this, "handleSpeakingWhilePTTChanged", () => {
                let {
                        selfMute: e,
                        serverMute: t,
                        suppress: n,
                        speakingWhilePTTInactive: a,
                        occluded: l,
                        shouldShowPTTJoinTooltip: r,
                        deviceChangedTooltipType: i,
                    } = this.props,
                    { hoveringOnMute: s } = this.state,
                    o =
                        void 0 === this.lastSpeakingWhilePTTNotificationTime ||
                        performance.now() - this.lastSpeakingWhilePTTNotificationTime > eX;
                a
                    ? s ||
                      e ||
                      t ||
                      n ||
                      l ||
                      !o ||
                      null != i ||
                      r ||
                      this.setState(
                          {
                              shouldShowSpeakingWhilePTTTooltip: !0,
                          },
                          () => {
                              (this.lastSpeakingWhilePTTNotificationTime = performance.now()),
                                  this.speakingWhilePTTTooltipTimeout.start(eJ, () =>
                                      this.setState({
                                          shouldShowSpeakingWhilePTTTooltip: !1,
                                      }),
                                  );
                          },
                      )
                    : (this.setState({
                          shouldShowSpeakingWhilePTTTooltip: !1,
                      }),
                      this.speakingWhilePTTTooltipTimeout.stop());
            }),
            ez(this, "renderNameTag", (e) => {
                let { currentUser: t, username: n } = this.props;
                return null == t
                    ? null
                    : (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)("div", {
                                  className: eK.eW,
                                  children: (0, a.jsx)(eU.A, {
                                      className: i()({
                                          [eK.e8]: null != e,
                                      }),
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
                                  children: (0, a.jsx)(eL.A, {
                                      children: this.renderStatus(),
                                  }),
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
            serverMute: r,
            serverDeaf: i,
            suppress: s,
            shouldShowSpeakingWhileMutedTooltip: o,
            shouldShowSpeakingWhilePTTTooltip: c,
            isEligibleForPomelo: d,
            webBuildOverride: u,
            handleMouseEnterMute: m,
            handleMouseLeaveMute: p,
            handleToggleSelfDeaf: h,
            handleToggleSelfMute: x,
            handleInputAudioContextMenu: g,
            handleOutputAudioContextMenu: f,
            handleOpenAccountSettings: b,
            handleOpenSettingsContextMenu: v,
            dismissibleContents: j,
            nameplate: _,
            accountContainerRef: y,
            deviceChangedTooltipType: A,
            shouldShowPTTJoinTooltip: C = !1,
            dismissTooltips: S,
            speaking: O,
            latched: T,
        } = e,
        E = (0, Y.K)(_);
    return (0, a.jsxs)("div", {
        className: eK.Uo,
        style: E,
        children: [
            (0, a.jsx)(e2, {
                accountContainerRef: y,
                selfMute: n,
                serverMute: r,
                suppress: s,
                awaitingRemote: l,
                onMouseEnter: m,
                onMouseLeave: p,
                onClick: x,
                onContextMenu: g,
                iconForeground: null != _ ? eK.t4 : void 0,
                nameplate: _,
                shouldShowSpeakingWhileMutedTooltip: o,
                shouldShowInputDeviceChangedTooltip: !o && "input" === A,
                shouldShowSpeakingWhilePTTTooltip: c,
                shouldShowPTTJoinTooltip: C,
                dismissTooltips: S,
                speaking: O,
                latched: T,
            }),
            (0, a.jsx)(e8, {
                selfDeaf: t,
                serverDeaf: i,
                onClick: h,
                onContextMenu: f,
                awaitingRemote: l,
                iconForeground: null != _ ? eK.t4 : void 0,
                nameplate: _,
                shouldShowOutputDeviceChangedTooltip: "output" === A,
                dismissTooltips: S,
            }),
            (0, a.jsx)(e7, {
                isEligibleForPomelo: d,
                webBuildOverride: u,
                onClick: b,
                onContextMenu: v,
                dismissibleContents: j.settings,
                iconForeground: null != _ ? eK.t4 : void 0,
                nameplate: _,
            }),
        ],
    });
}

function e9(e) {
    let t = (0, c.bG)([e_.A], () => null != e_.A.getChannelId()),
        n = (0, z.Py)(e),
        a = l.useRef(new u.Ep()),
        [r, i] = l.useState(!1);
    l.useEffect(() => {
        t &&
            n &&
            (i(!0),
            a.current.start(e$, () => {
                i(!1);
            }));
    }, [t, n]);
    let s = l.useCallback(() => {
        i(!1), a.current.stop();
    }, []);
    return (
        (0, b.l0)(() => {
            a.current.stop();
        }),
        {
            shouldShowTooltip: r,
            dismissTooltip: s,
        }
    );
}

function e6() {
    var e;
    let t = (0, c.bG)([eO.default], () => eO.default.getCurrentUser()),
        n = (0, c.bG)([eg.default], () => eg.default.getId()),
        {
            activities: r,
            streaming: i,
            status: s,
        } = (0, c.cf)([eA.A], () => {
            let e = eA.A.getActivities();
            return {
                activities: e,
                streaming:
                    null !=
                    e.find((e) => {
                        let { type: t } = e;
                        return t === eG.$pd.STREAMING;
                    }),
                status: eA.A.getStatus(),
            };
        }),
        u = (0, c.bG)([ex.A], () => ex.A.getAnyStreamForUser(n)),
        m = (0, f.A)({
            userId: n,
        }),
        p = (0, c.bG)([eC.A], () => eC.A.isCurrentUserPTTLatched()),
        x = (0, c.bG)([eC.A], () => eC.A.getVoiceVolume(n)),
        g = ek.Ay.useUserTag(t, {
            decoration: "never",
        }),
        b = (0, c.bG)([eS.A], () => eS.A.hidePersonalInformation),
        v = (0, c.bG)([e_.A, ef.A], () => {
            let e = e_.A.getChannelId();
            return null != e ? ef.A.getChannel(e) : null;
        }),
        { mute: _, selfMute: y, suppress: A } = (0, ed.A)(v),
        { selfDeaf: C, deaf: E } = (0, ec.A)(v),
        P = (0, c.bG)([N.A], () => {
            var e;
            return (0, w.kK)()
                ? null == (e = N.A.getCurrentBuildOverride().overrides)
                    ? void 0
                    : e.discord_web
                : null;
        }),
        k = (0, c.bG)([eT.A], () => eT.A.getPremiumTypeSubscription()),
        R = (0, c.bG)([ej.A], () => ej.A.getSpeakingWhileMuted()),
        D = (0, c.bG)([I.A], () => I.A.isFullscreenInContext()),
        M = (0, c.bG)([ev.A], () => ev.A.hasLayers()),
        L = (0, h.red)(h.DXt) || M || eP.P.isDisallowPopupsSet() || D,
        U = (0, $.g)(),
        B = (0, c.bG)([H.default], () => null != H.default.getAwaitingRemoteSessionInfo()),
        G = (0, c.bG)([ey.A], () => ey.A.getGuildId()),
        F = null == t ? void 0 : t.avatarDecoration,
        V = (0, T.A)(F),
        W = null != (e = ek.Ay.useName(t)) ? e : "",
        { voiceActivityStatusEnabled: K } = (0, j.G)({
            location: "Account",
        }),
        z = (0, ee.lM)("Account"),
        { analyticsLocations: q } = (0, O.Ay)(S.A.ACCOUNT),
        Y = (0, Q.r)({
            user: t,
            guildId: void 0,
        }),
        { isQuestBarEmpty: J, hasLoadedQuestBar: X } = (0, en.c9)({
            location: eV.rE.CONFLICT_CHECKS,
        }),
        Z = (0, c.bG)([ea.A, eO.default, eb.A], () => {
            let e,
                t = ea.A.getSyncingWith(),
                n = ea.A.getActivity(),
                a = [];
            if (
                (null != t ? (e = t.partyId) : null != n && null != n.party && null != n.party.id && (e = n.party.id),
                null != e)
            ) {
                var l;
                a = o()(Array.from(null != (l = eb.A.getParty(e)) ? l : []))
                    .map((e) => eO.default.getUser(e))
                    .filter(eI.Vq)
                    .value();
            }
            return a.length > 1;
        }),
        et = {
            avatar: [],
            settings: [],
        };
    !L &&
        (et.avatar.push(d.M.DISPLAY_NAME_STYLES_COACHMARK),
        et.avatar.push(d.M.WIDGETS_RTC_UPSELL_COACHMARK),
        z && et.settings.push(d.M.NITRO_PRIVACY_PERK_BETA_COACHMARK));
    let { shouldShowTooltip: el, dismissTooltip: er } = e9(eW.oh.AUDIO_INPUT),
        { shouldShowTooltip: ei, dismissTooltip: es } = e9(eW.oh.AUDIO_OUTPUT),
        { shouldShowTooltip: eo, dismissTooltip: eu } = (0, em.A)(),
        eh = (0, ep.A)(),
        eE = l.useMemo(() => (el ? "input" : ei ? "output" : void 0), [el, ei]),
        eN = l.useCallback(
            (e) => {
                switch (e) {
                    case "input":
                        er();
                        break;
                    case "output":
                        es();
                }
            },
            [er, es],
        );
    return (0, a.jsx)(O.f5, {
        value: q,
        children: (0, a.jsx)(e0, {
            currentUser: t,
            username: W,
            activities: r,
            applicationStream: u,
            voiceChannel: v,
            dismissibleContents: et,
            userTag: g,
            hidePrivateData: b,
            occluded: L,
            premiumSubscription: k,
            selfDeaf: C,
            selfMute: y,
            serverDeaf: E,
            serverMute: _,
            speaking: m,
            voiceDb: x,
            speakingWhileMuted: R,
            speakingWhilePTTInactive: eh,
            latched: p && null != v && !_ && !y,
            status: s,
            streaming: i,
            suppress: A,
            webBuildOverride: P,
            awaitingRemote: B,
            isEligibleForPomelo: U,
            voiceActivityStatusEnabled: K,
            nameplate: Y,
            selectedGuildId: G,
            avatarDecoration: V,
            isQuestBarEmpty: J,
            hasLoadedQuestBar: X,
            isListenAlongVisible: Z,
            deviceChangedTooltipType: eE,
            onDismissDeviceChangedTooltip: () => eN(eE),
            shouldShowPTTJoinTooltip: eo,
            dismissPTTJoinTooltip: eu,
        }),
    });
}

function e7(e) {
    let t,
        n,
        {
            webBuildOverride: r,
            isEligibleForPomelo: i,
            onClick: s,
            onContextMenu: o,
            dismissibleContents: c,
            iconForeground: u,
            nameplate: m,
        } = e,
        x = l.useRef(null),
        [g, f] = l.useState(!1);
    (0, b.Ay)(() => {
        let e = () => f(!0);
        return (
            eN._.subscribe(eG.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e),
            () => {
                eN._.unsubscribe(eG.jej.PREMIUM_GROUP_PURCHASE_FLOW_COMPLETED, e);
            }
        );
    });
    let v = l.useCallback(() => {
        f(!1), s();
    }, [s]);
    t =
        null != r
            ? eH.intl.formatToPlainString(eH.t.Gzh6ZP, {
                  webBuildOverride: r.id,
              })
            : eH.intl.string(eH.t.cduTBL);
    let j = h.Zes,
        _ = (0, p.w)();
    return (
        (j = null != r ? h.Hnu : i ? h.vJI : _.Component),
        (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(
                    eM.A,
                    eQ(
                        eq(
                            {
                                ref: x,
                                tooltipText: t,
                                tooltipPositionKey: n,
                                onClick: v,
                                onContextMenu: o,
                                "aria-label": eH.intl.string(eH.t.cduTBL),
                                icon: (0, a.jsx)(j, {
                                    size: "refresh_sm",
                                    color: "currentColor",
                                    className: u,
                                }),
                            },
                            _.events,
                        ),
                        {
                            plated: null != m,
                        },
                    ),
                ),
                (0, a.jsx)(Z.V, {
                    targetElementRef: x,
                    shouldShow: g,
                    onDismiss: () => f(!1),
                }),
                !g &&
                    (0, a.jsx)(G.Ay, {
                        contentTypes: c,
                        groupName: eF.m.ACCOUNT_NAME_ZONE,
                        children: (e) => {
                            let { visibleContent: t, markAsDismissed: n } = e;
                            if (t === d.M.NITRO_PRIVACY_PERK_BETA_COACHMARK)
                                return (0, a.jsx)(et.y, {
                                    targetElementRef: x,
                                    markAsDismissed: n,
                                });
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
            serverMute: r,
            suppress: s,
            awaitingRemote: o,
            iconForeground: d,
            onMouseEnter: u,
            onMouseLeave: m,
            onClick: p,
            nameplate: x,
            shouldShowSpeakingWhileMutedTooltip: g,
            shouldShowSpeakingWhilePTTTooltip: f,
            shouldShowInputDeviceChangedTooltip: b,
            shouldShowPTTJoinTooltip: v,
            dismissTooltips: j,
            speaking: _,
            latched: y,
        } = e,
        A = n || s || r,
        C = (0, c.bG)([ej.A], () => ej.A.getMode() === eG.TBI.PUSH_TO_TALK),
        { showPTTIconIndicator: T } = eu.A.useConfig({
            location: "MicrophoneButton",
        }),
        E = l.useRef(null),
        { Component: N, events: w, play: I } = (0, eh.q)(A),
        P = r || s ? h.O1p : N,
        D = (0, c.bG)([ej.A], () => ej.A.getSettings().modeOptions.shortcut),
        M = (0, k.A)(n, r, s, o);
    t = g
        ? {
              tooltipType: "green_void_do_not_use",
              tooltipText: eH.intl.string(eH.t["29gnR4"]),
              tooltipForceOpen: !0,
          }
        : v || f
          ? {
                tooltipType: "green_void_do_not_use",
                tooltipText: eH.intl.format(eH.t.c1qUOQ, {
                    keybind: eD.dI(D).toLocaleUpperCase(),
                }),
                tooltipForceOpen: !0,
            }
          : {
                tooltipText: M,
            };
    let { analyticsLocations: L } = (0, O.Ay)(S.A.AUDIO_INPUT_BUTTON);
    l.useEffect(() => () => I(), [A, I]);
    let B = T && C,
        G = A ? h.LU0.colors.ICON_VOICE_MUTED : "currentColor",
        { name: F } = (0, z.x5)(eW.oh.AUDIO_INPUT),
        { enabledInputProfiles: V } = (0, es.d)({
            location: "MicrophoneButton",
        });
    return (0, a.jsx)(O.f5, {
        value: L,
        children: (0, a.jsx)(h.YNO, {
            targetElementRef: E,
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (
                    j(),
                    (0, a.jsx)(O.f5, {
                        value: L,
                        children: (0, a.jsx)(R.A, {
                            onInteraction: (0, U.s)("AudioDeviceMenu", S.A.ACCOUNT),
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
            animation: h.YNO.Animation.FADE,
            spacing: 4,
            children: (e, n) => {
                let { onClick: l } = e,
                    { isShown: r } = n,
                    s = r ? h.tN5 : h.abt;
                return (0, a.jsxs)("div", {
                    ref: E,
                    className: i()(eK.WU, {
                        [eK.v8]: A,
                        [eK.q6]: r,
                    }),
                    children: [
                        (0, a.jsx)(
                            eM.A,
                            eQ(
                                eq(
                                    {
                                        "aria-checked": A,
                                        "aria-label": eH.intl.string(eH.t.w4m945),
                                        className: eK.$o,
                                        disabled: o,
                                        icon: (0, a.jsx)(P, {
                                            size: "custom",
                                            width: 20,
                                            height: 20,
                                            color: G,
                                            className: d,
                                        }),
                                        onClick: p,
                                        onContextMenu: l,
                                        onMouseEnter: () => {
                                            u(), w.onMouseEnter();
                                        },
                                        onMouseLeave: () => {
                                            m(), w.onMouseLeave();
                                        },
                                        plated: null != x,
                                        redGlow: A,
                                        role: "switch",
                                    },
                                    t,
                                ),
                                {
                                    children: B
                                        ? (0, a.jsx)("div", {
                                              className: i()(eK.Ur, {
                                                  [eK.zY]: _,
                                                  [eK.yM]: y && !_,
                                              }),
                                          })
                                        : null,
                                },
                            ),
                        ),
                        (0, a.jsx)(eM.A, {
                            "aria-label": b
                                ? eH.intl.formatToPlainString(eH.t["18wnuD"], {
                                      inputDeviceName: F,
                                  })
                                : eH.intl.string(eH.t.fRzCbB),
                            className: i()(eK.UT, {
                                [eK.q6]: r,
                            }),
                            disabled: o,
                            icon: (0, a.jsx)(s, {
                                className: eK.$$,
                                size: "custom",
                                width: 12,
                                height: 12,
                                color: G,
                            }),
                            onClick: l,
                            onContextMenu: l,
                            onMouseEnter: u,
                            onMouseLeave: m,
                            plated: null != x,
                            redGlow: A,
                            tooltipType: b ? "green_void_do_not_use" : void 0,
                            tooltipForceOpen: b,
                            tooltipPositionKey: b
                                ? eH.intl.formatToPlainString(eH.t["18wnuD"], {
                                      inputDeviceName: F,
                                  })
                                : void 0,
                            tooltipShouldShow: !r,
                            tooltipText: b
                                ? eH.intl.format(eH.t["18wnuD"], {
                                      inputDeviceName: F,
                                  })
                                : eH.intl.string(eH.t.fRzCbB),
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
            awaitingRemote: r,
            onClick: s,
            iconForeground: o,
            nameplate: c,
            shouldShowOutputDeviceChangedTooltip: d,
            dismissTooltips: u,
        } = e,
        p = t || n,
        {
            Component: x,
            play: g,
            events: { onMouseEnter: f, onMouseLeave: b },
        } = (0, m.I)(p ? "undeafen" : "deafen"),
        v = n ? h.TJE : x,
        { name: j } = (0, z.x5)(eW.oh.AUDIO_OUTPUT),
        _ = (0, P.A)(t, n, r),
        { analyticsLocations: y } = (0, O.Ay)(S.A.AUDIO_OUTPUT_BUTTON),
        A = l.useRef(null);
    return (
        l.useEffect(() => () => g(), [p, g]),
        (0, a.jsx)(O.f5, {
            value: y,
            children: (0, a.jsx)(h.YNO, {
                targetElementRef: A,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (
                        u(),
                        (0, a.jsx)(O.f5, {
                            value: y,
                            children: (0, a.jsx)(R.A, {
                                onInteraction: (0, U.s)("AudioDeviceMenu", S.A.ACCOUNT),
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
                        className: i()(eK.WU, {
                            [eK.v8]: p,
                            [eK.q6]: u,
                        }),
                        children: [
                            (0, a.jsx)(eM.A, {
                                "aria-checked": p,
                                "aria-label": eH.intl.string(eH.t.wjcRFX),
                                className: eK.$o,
                                disabled: r,
                                icon: (0, a.jsx)(v, {
                                    size: "custom",
                                    width: 20,
                                    height: 20,
                                    color: p ? h.LU0.colors.ICON_VOICE_MUTED : "currentColor",
                                    className: o,
                                }),
                                iconForeground: p ? eK.of : void 0,
                                innerClassName: i()({
                                    [eK.T3]: n,
                                }),
                                onClick: s,
                                onContextMenu: l,
                                onMouseEnter: f,
                                onMouseLeave: b,
                                plated: null != c,
                                redGlow: p,
                                role: "switch",
                                tooltipText: _,
                            }),
                            (0, a.jsx)(eM.A, {
                                className: i()(eK.UT, {
                                    [eK.q6]: u,
                                }),
                                disabled: r,
                                icon: (0, a.jsx)(m, {
                                    className: eK.$$,
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
                                    ? eH.intl.formatToPlainString(eH.t["f+DDY/"], {
                                          outputDeviceName: j,
                                      })
                                    : void 0,
                                tooltipShouldShow: !u,
                                tooltipText: d
                                    ? eH.intl.format(eH.t["f+DDY/"], {
                                          outputDeviceName: j,
                                      })
                                    : eH.intl.string(eH.t.aA4Vce),
                                "aria-label": d
                                    ? eH.intl.formatToPlainString(eH.t["f+DDY/"], {
                                          outputDeviceName: j,
                                      })
                                    : eH.intl.string(eH.t.aA4Vce),
                            }),
                        ],
                    });
                },
            }),
        })
    );
}
