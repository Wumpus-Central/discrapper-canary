n.d(t, {
    A: () => e6,
    g: () => eZ,
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
    k = n(617354),
    P = n(980923),
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
    Z = n(967370),
    ee = n(535731),
    et = n(201805),
    en = n(655116),
    ea = n(454719),
    el = n(342296),
    er = n(780964),
    ei = n(77735),
    es = n(840065),
    eo = n(167579),
    ec = n(173660),
    ed = n(340913),
    eu = n(41580),
    em = n(935101),
    ep = n(277342),
    eh = n(616356),
    ex = n(961350),
    eg = n(734057),
    ef = n(629016),
    eb = n(186111),
    ev = n(430452),
    ej = n(383501),
    e_ = n(967198),
    ey = n(461213),
    eA = n(485296),
    eC = n(351906),
    eS = n(287809),
    eO = n(166403),
    eT = n(486020),
    eE = n(203982),
    eN = n(927813),
    ew = n(403362),
    eI = n(536194),
    ek = n(427262),
    eP = n(837921),
    eR = n(350535),
    eD = n(42473),
    eM = n(994314),
    eL = n(485599),
    eU = n(809991),
    eB = n(652215),
    eG = n(49999),
    eF = n(654487),
    eV = n(731854),
    eW = n(985018),
    eH = n(146664);

function eK(e, t, n) {
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

function ez(e) {
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
                eK(e, t, n[t]);
            });
    }
    return e;
}

function eq(e, t) {
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
let eQ = eP.Ay.getEnableHardwareAcceleration() ? h.JsQ : h.euF,
    eY = 2.5 * eN.A.Millis.SECOND,
    eJ = 2 * eN.A.Millis.MINUTE,
    eX = 5 * eN.A.Millis.SECOND;

function e$(e) {
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
        y = (0, eT.F_)({
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
                        eE._.subscribe(eB.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t),
                        () => {
                            eE._.unsubscribe(eB.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t);
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
              object: eB.ZSU.AVATAR,
              children: (0, a.jsx)(el.A, {
                  user: c,
                  targetElementRef: _,
                  clickTrap: !0,
                  preload: () =>
                      (0, ea.A)(c.id, c.getAvatarURL(void 0, el.S), {
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
                          eq(
                              ez(
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
                                  "aria-label": eW.intl.string(eW.t["3Uj+2p"]),
                                  "data-jump-section": b,
                                  className: i()(eH.R3, {
                                      [eH.ZQ]: null != x,
                                  }),
                                  children: [
                                      (0, a.jsx)(eQ, {
                                          size: h._3J["SIZE_".concat(32)],
                                          src: c.getAvatarURL(void 0, 28, !1),
                                          avatarDecoration: y,
                                          "aria-label": c.username,
                                          status: o ? eB.clD.STREAMING : d,
                                          isSpeaking: n,
                                          isLatched: r,
                                          voiceDb: s,
                                          className: eH.my,
                                      }),
                                      (0, a.jsx)("div", {
                                          className: eH.oM,
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
class eZ extends l.PureComponent {
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
                    textClassName: eH.XD,
                    hideTooltip: !0,
                }),
            });
        let c =
            null == t
                ? void 0
                : t.find((e) => {
                      let { type: t } = e;
                      return t === eB.$pd.CUSTOM_STATUS;
                  });
        return null != c
            ? (0, a.jsx)(C.A, {
                  hoverText: i,
                  forceHover: e,
                  children: (0, a.jsx)(B.A, {
                      activity: c,
                      emojiClassName: eH.Zg,
                      className: eH.WO,
                  }),
              })
            : null != r && r !== eB.clD.UNKNOWN && l.hasUniqueUsername()
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
            e$,
            eq(ez({}, this.props), {
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
            : (0, a.jsx)(eU.A, {
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
                                  className: i()(eH.kL, {
                                      [eH.UG]: null != n,
                                      [eH.bc]: !l,
                                      [eH.G5]: r,
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
                                          e0,
                                          eq(ez({}, this.props, this.state), {
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
            eK(this, "speakingWhileMutedTooltipTimeout", new u.Ep()),
            eK(this, "speakingWhilePTTTooltipTimeout", new u.Ep()),
            eK(this, "lastSpeakingWhileMutedNotificationTime", void 0),
            eK(this, "lastSpeakingWhilePTTNotificationTime", void 0),
            eK(this, "state", {
                hovered: !1,
                shouldShowNametagTooltip: !1,
                shouldShowSpeakingWhileMutedTooltip: !1,
                shouldShowSpeakingWhilePTTTooltip: !1,
                hoveringOnMute: !1,
            }),
            eK(this, "containerRef", l.createRef()),
            eK(this, "avatarWithPopoutRef", l.createRef()),
            eK(this, "handleToggleSelfMute", () => {
                let { serverMute: e, suppress: t, selfMute: n } = this.props;
                (0, M.A)(e, t, eB.JJy.ACCOUNT_PANEL), (0, L.X)(S.A.ACCOUNT, L.O.MIC, n);
            }),
            eK(this, "handleToggleSelfDeaf", () => {
                let { serverDeaf: e, selfDeaf: t } = this.props;
                (0, D.A)(e, eB.JJy.ACCOUNT_PANEL), (0, L.X)(S.A.ACCOUNT, L.O.DEAFEN, !t);
            }),
            eK(this, "handleOpenAccountSettings", () => {
                this.dismissTooltips(),
                    ej.A.isConnected()
                        ? (0, es.openUserSettings)(er.X.VOICE_AND_VIDEO_PANEL, {
                              section: eB.nc_.VOICE,
                          })
                        : (0, es.openUserSettings)();
            }),
            eK(this, "handleOpenSettingsContextMenu", (e) => {
                let { currentUser: t } = this.props;
                null != t &&
                    (0, x.L3)(e, async () => {
                        let { default: e } = await n.e("95153").then(n.bind(n, 50120));
                        return (n) =>
                            (0, a.jsx)(
                                e,
                                eq(ez({}, n), {
                                    user: t,
                                    premiumSubscription: this.props.premiumSubscription,
                                    webBuildOverride: this.props.webBuildOverride,
                                    onInteraction: (0, U.s)("UserSettingsCogContextMenu", S.A.ACCOUNT),
                                }),
                            );
                    });
            }),
            eK(this, "audioOnInteractionHandler", (0, U.s)("AudioDeviceMenu", S.A.ACCOUNT)),
            eK(this, "handleInputAudioContextMenu", (e, t) => {
                this.dismissTooltips(),
                    (0, x.L3)(e, async () => {
                        let { default: e } = await n.e("78827").then(n.bind(n, 385318));
                        return () => {
                            let { enabledInputProfiles: n } = (0, ei.d)({
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
            eK(this, "handleOutputAudioContextMenu", (e, t) => {
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
            eK(this, "handleMouseEnter", () => {
                this.setState({
                    hovered: !0,
                });
            }),
            eK(this, "handleMouseLeave", () => {
                this.setState({
                    hovered: !1,
                });
            }),
            eK(this, "handleMouseEnterMute", () => {
                this.setState({
                    hoveringOnMute: !0,
                    shouldShowSpeakingWhileMutedTooltip: !1,
                    shouldShowSpeakingWhilePTTTooltip: !1,
                }),
                    this.speakingWhileMutedTooltipTimeout.stop(),
                    this.speakingWhilePTTTooltipTimeout.stop();
            }),
            eK(this, "handleMouseLeaveMute", () => {
                this.setState({
                    hoveringOnMute: !1,
                });
            }),
            eK(this, "dismissSpeakingWhileMutedTooltip", () => {
                this.setState({
                    shouldShowSpeakingWhileMutedTooltip: !1,
                }),
                    this.speakingWhileMutedTooltipTimeout.stop();
            }),
            eK(this, "dismissSpeakingWhilePTTTooltip", () => {
                this.setState({
                    shouldShowSpeakingWhilePTTTooltip: !1,
                }),
                    this.speakingWhilePTTTooltipTimeout.stop();
            }),
            eK(this, "dismissTooltips", () => {
                var e, t, n, a, l, r;
                null == (e = (t = this.props).dismissInputDeviceChangedTooltip) || e.call(t),
                    null == (n = (a = this.props).dismissOutputDeviceChangedTooltip) || n.call(a),
                    null == (l = (r = this.props).dismissPTTJoinTooltip) || l.call(r),
                    this.dismissSpeakingWhileMutedTooltip(),
                    this.dismissSpeakingWhilePTTTooltip();
            }),
            eK(this, "handleOccludedChanged", () => {
                let { occluded: e } = this.props;
                e &&
                    this.setState({
                        shouldShowNametagTooltip: !1,
                        shouldShowSpeakingWhileMutedTooltip: !1,
                        shouldShowSpeakingWhilePTTTooltip: !1,
                    });
            }),
            eK(this, "handleSpeakingWhileMutedChanged", () => {
                let {
                        selfMute: e,
                        serverMute: t,
                        suppress: n,
                        speakingWhileMuted: a,
                        occluded: l,
                        shouldShowPTTJoinTooltip: r,
                        shouldShowInputDeviceChangedTooltip: i,
                        shouldShowOutputDeviceChangedTooltip: s,
                    } = this.props,
                    { hoveringOnMute: o } = this.state,
                    c =
                        void 0 === this.lastSpeakingWhileMutedNotificationTime ||
                        performance.now() - this.lastSpeakingWhileMutedNotificationTime > eJ;
                a
                    ? o ||
                      !e ||
                      t ||
                      n ||
                      l ||
                      !c ||
                      i ||
                      s ||
                      r ||
                      this.setState(
                          {
                              shouldShowSpeakingWhileMutedTooltip: !0,
                          },
                          () => {
                              (this.lastSpeakingWhileMutedNotificationTime = performance.now()),
                                  this.speakingWhileMutedTooltipTimeout.start(eY, () =>
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
            eK(this, "handleSpeakingWhilePTTChanged", () => {
                let {
                        selfMute: e,
                        serverMute: t,
                        suppress: n,
                        speakingWhilePTTInactive: a,
                        occluded: l,
                        shouldShowPTTJoinTooltip: r,
                        shouldShowInputDeviceChangedTooltip: i,
                        shouldShowOutputDeviceChangedTooltip: s,
                    } = this.props,
                    { hoveringOnMute: o } = this.state,
                    c =
                        void 0 === this.lastSpeakingWhilePTTNotificationTime ||
                        performance.now() - this.lastSpeakingWhilePTTNotificationTime > eJ;
                a
                    ? o ||
                      e ||
                      t ||
                      n ||
                      l ||
                      !c ||
                      i ||
                      s ||
                      r ||
                      this.setState(
                          {
                              shouldShowSpeakingWhilePTTTooltip: !0,
                          },
                          () => {
                              (this.lastSpeakingWhilePTTNotificationTime = performance.now()),
                                  this.speakingWhilePTTTooltipTimeout.start(eY, () =>
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
            eK(this, "renderNameTag", (e) => {
                let { currentUser: t, username: n } = this.props;
                return null == t
                    ? null
                    : (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)("div", {
                                  className: eH.eW,
                                  children: (0, a.jsx)(eL.A, {
                                      className: i()({
                                          [eH.e8]: null != e,
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
                                  className: eH.XP,
                                  children: (0, a.jsx)(eM.A, {
                                      children: this.renderStatus(),
                                  }),
                              }),
                          ],
                      });
            });
    }
}

function e0(e) {
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
            shouldShowInputDeviceChangedTooltip: A = !1,
            shouldShowOutputDeviceChangedTooltip: C = !1,
            shouldShowPTTJoinTooltip: S = !1,
            dismissTooltips: O,
            speaking: T,
            latched: E,
        } = e,
        N = (0, Y.K)(_);
    return (0, a.jsxs)("div", {
        className: eH.Uo,
        style: N,
        children: [
            (0, a.jsx)(e7, {
                accountContainerRef: y,
                selfMute: n,
                serverMute: r,
                suppress: s,
                awaitingRemote: l,
                onMouseEnter: m,
                onMouseLeave: p,
                onClick: x,
                onContextMenu: g,
                iconForeground: null != _ ? eH.t4 : void 0,
                nameplate: _,
                shouldShowInputDeviceChangedTooltip: A,
                shouldShowSpeakingWhileMutedTooltip: o,
                shouldShowSpeakingWhilePTTTooltip: c,
                shouldShowPTTJoinTooltip: S,
                dismissTooltips: O,
                speaking: T,
                latched: E,
            }),
            (0, a.jsx)(e2, {
                selfDeaf: t,
                serverDeaf: i,
                onClick: h,
                onContextMenu: f,
                awaitingRemote: l,
                iconForeground: null != _ ? eH.t4 : void 0,
                nameplate: _,
                shouldShowOutputDeviceChangedTooltip: C,
                dismissTooltips: O,
            }),
            (0, a.jsx)(e9, {
                isEligibleForPomelo: d,
                webBuildOverride: u,
                onClick: b,
                onContextMenu: v,
                dismissibleContents: j.settings,
                iconForeground: null != _ ? eH.t4 : void 0,
                nameplate: _,
                shouldShowInputDeviceChangedTooltip: A,
                shouldShowOutputDeviceChangedTooltip: C,
            }),
        ],
    });
}

function e1(e) {
    let t = (0, c.bG)([ej.A], () => null != ej.A.getChannelId()),
        n = (0, z.Py)(e),
        a = l.useRef(new u.Ep()),
        [r, i] = l.useState(!1);
    l.useEffect(() => {
        t &&
            n &&
            (i(!0),
            a.current.start(eX, () => {
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
    let t = (0, c.bG)([eS.default], () => eS.default.getCurrentUser()),
        n = (0, c.bG)([ex.default], () => ex.default.getId()),
        {
            activities: l,
            streaming: r,
            status: i,
        } = (0, c.cf)([ey.A], () => {
            let e = ey.A.getActivities();
            return {
                activities: e,
                streaming:
                    null !=
                    e.find((e) => {
                        let { type: t } = e;
                        return t === eB.$pd.STREAMING;
                    }),
                status: ey.A.getStatus(),
            };
        }),
        s = (0, c.bG)([eh.A], () => eh.A.getAnyStreamForUser(n)),
        u = (0, f.A)({
            userId: n,
        }),
        m = (0, c.bG)([eA.A], () => eA.A.isCurrentUserPTTLatched()),
        p = (0, c.bG)([eA.A], () => eA.A.getVoiceVolume(n)),
        x = ek.Ay.useUserTag(t, {
            decoration: "never",
        }),
        g = (0, c.bG)([eC.A], () => eC.A.hidePersonalInformation),
        b = (0, c.bG)([ej.A, eg.A], () => {
            let e = ej.A.getChannelId();
            return null != e ? eg.A.getChannel(e) : null;
        }),
        { mute: v, selfMute: _, suppress: y } = (0, ec.A)(b),
        { selfDeaf: A, deaf: C } = (0, eo.A)(b),
        E = (0, c.bG)([N.A], () => {
            var e;
            return (0, w.kK)()
                ? null == (e = N.A.getCurrentBuildOverride().overrides)
                    ? void 0
                    : e.discord_web
                : null;
        }),
        k = (0, c.bG)([eO.A], () => eO.A.getPremiumTypeSubscription()),
        P = (0, c.bG)([ev.A], () => ev.A.getSpeakingWhileMuted()),
        R = (0, c.bG)([I.A], () => I.A.isFullscreenInContext()),
        D = (0, c.bG)([eb.A], () => eb.A.hasLayers()),
        M = (0, h.red)(h.DXt) || D || eI.P.isDisallowPopupsSet() || R,
        L = (0, $.g)(),
        U = (0, c.bG)([H.default], () => null != H.default.getAwaitingRemoteSessionInfo()),
        B = (0, c.bG)([e_.A], () => e_.A.getGuildId()),
        G = null == t ? void 0 : t.avatarDecoration,
        F = (0, T.A)(G),
        V = null != (e = ek.Ay.useName(t)) ? e : "",
        { voiceActivityStatusEnabled: W } = (0, j.G)({
            location: "Account",
        }),
        K = (0, Z.lM)("Account"),
        { analyticsLocations: z } = (0, O.Ay)(S.A.ACCOUNT),
        q = (0, Q.r)({
            user: t,
            guildId: void 0,
        }),
        { isQuestBarEmpty: Y, hasLoadedQuestBar: J } = (0, et.c9)({
            location: eF.rE.CONFLICT_CHECKS,
        }),
        X = (0, c.bG)([en.A, eS.default, ef.A], () => {
            let e,
                t = en.A.getSyncingWith(),
                n = en.A.getActivity(),
                a = [];
            if (
                (null != t ? (e = t.partyId) : null != n && null != n.party && null != n.party.id && (e = n.party.id),
                null != e)
            ) {
                var l;
                a = o()(Array.from(null != (l = ef.A.getParty(e)) ? l : []))
                    .map((e) => eS.default.getUser(e))
                    .filter(ew.Vq)
                    .value();
            }
            return a.length > 1;
        }),
        ee = {
            avatar: [],
            settings: [],
        };
    !M &&
        (ee.avatar.push(d.M.DISPLAY_NAME_STYLES_COACHMARK),
        ee.avatar.push(d.M.WIDGETS_RTC_UPSELL_COACHMARK),
        K && ee.settings.push(d.M.NITRO_PRIVACY_PERK_BETA_COACHMARK));
    let { shouldShowTooltip: ea, dismissTooltip: el } = e1(eV.oh.AUDIO_INPUT),
        { shouldShowTooltip: er, dismissTooltip: ei } = e1(eV.oh.AUDIO_OUTPUT),
        { shouldShowTooltip: es, dismissTooltip: ed } = (0, eu.A)(),
        ep = (0, em.A)();
    return (0, a.jsx)(O.f5, {
        value: z,
        children: (0, a.jsx)(eZ, {
            currentUser: t,
            username: V,
            activities: l,
            applicationStream: s,
            voiceChannel: b,
            dismissibleContents: ee,
            userTag: x,
            hidePrivateData: g,
            occluded: M,
            premiumSubscription: k,
            selfDeaf: A,
            selfMute: _,
            serverDeaf: C,
            serverMute: v,
            speaking: u,
            voiceDb: p,
            speakingWhileMuted: P,
            speakingWhilePTTInactive: ep,
            latched: m && null != b,
            status: i,
            streaming: r,
            suppress: y,
            webBuildOverride: E,
            awaitingRemote: U,
            isEligibleForPomelo: L,
            voiceActivityStatusEnabled: W,
            nameplate: q,
            selectedGuildId: B,
            avatarDecoration: F,
            isQuestBarEmpty: Y,
            hasLoadedQuestBar: J,
            isListenAlongVisible: X,
            shouldShowInputDeviceChangedTooltip: ea,
            shouldShowOutputDeviceChangedTooltip: er,
            dismissInputDeviceChangedTooltip: el,
            dismissOutputDeviceChangedTooltip: ei,
            shouldShowPTTJoinTooltip: es,
            dismissPTTJoinTooltip: ed,
        }),
    });
}

function e9(e) {
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
        x = l.useRef(null);
    t =
        null != r
            ? eW.intl.formatToPlainString(eW.t.Gzh6ZP, {
                  webBuildOverride: r.id,
              })
            : eW.intl.string(eW.t.cduTBL);
    let g = h.Zes,
        f = (0, p.w)();
    return (
        (g = null != r ? h.Hnu : i ? h.vJI : f.Component),
        (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(
                    eD.A,
                    eq(
                        ez(
                            {
                                ref: x,
                                tooltipText: t,
                                tooltipPositionKey: n,
                                onClick: s,
                                onContextMenu: o,
                                "aria-label": eW.intl.string(eW.t.cduTBL),
                                icon: (0, a.jsx)(g, {
                                    size: "refresh_sm",
                                    color: "currentColor",
                                    className: u,
                                }),
                            },
                            f.events,
                        ),
                        {
                            plated: null != m,
                        },
                    ),
                ),
                (0, a.jsx)(G.Ay, {
                    contentTypes: c,
                    groupName: eG.m.ACCOUNT_NAME_ZONE,
                    children: (e) => {
                        let { visibleContent: t, markAsDismissed: n } = e;
                        if (t === d.M.NITRO_PRIVACY_PERK_BETA_COACHMARK)
                            return (0, a.jsx)(ee.y, {
                                targetElementRef: x,
                                markAsDismissed: n,
                            });
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
        C = (0, c.bG)([ev.A], () => ev.A.getMode() === eB.TBI.PUSH_TO_TALK),
        { showPTTIconIndicator: T } = ed.A.useConfig({
            location: "MicrophoneButton",
        }),
        E = l.useRef(null),
        { Component: N, events: w, play: I } = (0, ep.q)(A),
        k = r || s ? h.O1p : N,
        D = (0, c.bG)([ev.A], () => ev.A.getSettings().modeOptions.shortcut),
        M = (0, P.A)(n, r, s, o);
    t = g
        ? {
              tooltipType: "green_void_do_not_use",
              tooltipText: eW.intl.string(eW.t["29gnR4"]),
              tooltipForceOpen: !0,
          }
        : v || f
          ? {
                tooltipType: "green_void_do_not_use",
                tooltipText: eW.intl.format(eW.t.c1qUOQ, {
                    keybind: eR.dI(D).toLocaleUpperCase(),
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
        { name: F } = (0, z.x5)(eV.oh.AUDIO_INPUT),
        { enabledInputProfiles: V } = (0, ei.d)({
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
                    className: i()(eH.WU, {
                        [eH.v8]: A,
                        [eH.q6]: r,
                    }),
                    children: [
                        (0, a.jsx)(
                            eD.A,
                            eq(
                                ez(
                                    {
                                        "aria-checked": A,
                                        "aria-label": eW.intl.string(eW.t.w4m945),
                                        className: eH.$o,
                                        disabled: o,
                                        icon: (0, a.jsx)(k, {
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
                                              className: i()(eH.Ur, {
                                                  [eH.zY]: _,
                                                  [eH.yM]: y && !_,
                                              }),
                                          })
                                        : null,
                                },
                            ),
                        ),
                        (0, a.jsx)(eD.A, {
                            "aria-label": b
                                ? eW.intl.formatToPlainString(eW.t["18wnuD"], {
                                      inputDeviceName: F,
                                  })
                                : eW.intl.string(eW.t.fRzCbB),
                            className: i()(eH.UT, {
                                [eH.q6]: r,
                            }),
                            disabled: o,
                            icon: (0, a.jsx)(s, {
                                className: eH.$$,
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
                                ? eW.intl.formatToPlainString(eW.t["18wnuD"], {
                                      inputDeviceName: F,
                                  })
                                : void 0,
                            tooltipShouldShow: !r,
                            tooltipText: b
                                ? eW.intl.format(eW.t["18wnuD"], {
                                      inputDeviceName: F,
                                  })
                                : eW.intl.string(eW.t.fRzCbB),
                        }),
                    ],
                });
            },
        }),
    });
}

function e2(e) {
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
        { name: j } = (0, z.x5)(eV.oh.AUDIO_OUTPUT),
        _ = (0, k.A)(t, n, r),
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
                        className: i()(eH.WU, {
                            [eH.v8]: p,
                            [eH.q6]: u,
                        }),
                        children: [
                            (0, a.jsx)(eD.A, {
                                "aria-checked": p,
                                "aria-label": eW.intl.string(eW.t.wjcRFX),
                                className: eH.$o,
                                disabled: r,
                                icon: (0, a.jsx)(v, {
                                    size: "custom",
                                    width: 20,
                                    height: 20,
                                    color: p ? h.LU0.colors.ICON_VOICE_MUTED : "currentColor",
                                    className: o,
                                }),
                                iconForeground: p ? eH.of : void 0,
                                innerClassName: i()({
                                    [eH.T3]: n,
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
                            (0, a.jsx)(eD.A, {
                                className: i()(eH.UT, {
                                    [eH.q6]: u,
                                }),
                                disabled: r,
                                icon: (0, a.jsx)(m, {
                                    className: eH.$$,
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
                                    ? eW.intl.formatToPlainString(eW.t["f+DDY/"], {
                                          outputDeviceName: j,
                                      })
                                    : void 0,
                                tooltipShouldShow: !u,
                                tooltipText: d
                                    ? eW.intl.format(eW.t["f+DDY/"], {
                                          outputDeviceName: j,
                                      })
                                    : eW.intl.string(eW.t.aA4Vce),
                                "aria-label": d
                                    ? eW.intl.formatToPlainString(eW.t["f+DDY/"], {
                                          outputDeviceName: j,
                                      })
                                    : eW.intl.string(eW.t.aA4Vce),
                            }),
                        ],
                    });
                },
            }),
        })
    );
}
