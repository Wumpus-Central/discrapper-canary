n.d(t, {
    A: () => e9,
    g: () => e0,
}),
    n(896048),
    n(321073);
var a = n(627968),
    l = n(64700),
    i = n(503698),
    r = n.n(i),
    s = n(735438),
    o = n.n(s),
    c = n(311907),
    d = n(554146),
    u = n(451988),
    m = n(348858),
    p = n(505312),
    h = n(397927),
    f = n(442433),
    x = n(820284),
    b = n(717558),
    g = n(964486),
    v = n(220839),
    j = n(901517),
    y = n(397244),
    _ = n(729551),
    A = n(755039),
    C = n(29160),
    S = n(793574),
    O = n(688810),
    E = n(325445),
    N = n(954921),
    T = n(521502),
    I = n(380610),
    k = n(313961),
    w = n(617354),
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
    Z = n(772786),
    $ = n(987237),
    ee = n(967370),
    et = n(535731),
    en = n(201805),
    ea = n(655116),
    el = n(454719),
    ei = n(342296),
    er = n(780964),
    es = n(77735),
    eo = n(840065),
    ec = n(167579),
    ed = n(173660),
    eu = n(340913),
    em = n(41580),
    ep = n(935101),
    eh = n(277342),
    ef = n(616356),
    ex = n(961350),
    eb = n(734057),
    eg = n(629016),
    ev = n(186111),
    ej = n(430452),
    ey = n(383501),
    e_ = n(967198),
    eA = n(461213),
    eC = n(485296),
    eS = n(351906),
    eO = n(287809),
    eE = n(166403),
    eN = n(486020),
    eT = n(203982),
    eI = n(927813),
    ek = n(403362),
    ew = n(536194),
    eP = n(427262),
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
    eJ = 2.5 * eI.A.Millis.SECOND,
    eX = 2 * eI.A.Millis.MINUTE,
    eZ = 5 * eI.A.Millis.SECOND;

function e$(e) {
    let {
            ref: t,
            speaking: n,
            latched: i,
            voiceDb: s = -1 / 0,
            streaming: o,
            currentUser: c,
            status: d,
            handleClick: u,
            handleMouseLeave: m,
            renderNameTag: p,
            nameplate: f,
            avatarDecoration: b,
            "data-jump-section": g,
        } = e,
        j = l.useRef(null),
        y = null != t ? t : j,
        _ = (0, eN.F_)({
            avatarDecoration: b,
            size: (0, N.Te)(h._3J.SIZE_32),
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
                [i, r] = l.useState(!1);
            return (
                (0, v.A)(() => r(!0), 750),
                l.useEffect(() => {
                    let t = (t) => {
                        var n;
                        let { highlightBadge: l } = t;
                        null != l && a(l), null == (n = e.current) || n.call(e);
                    };
                    return (
                        eT._.subscribe(eG.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t),
                        () => {
                            eT._.unsubscribe(eG.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t);
                        }
                    );
                }),
                {
                    updateOpenPopoutRef: t,
                    highlightBadge: i ? n : void 0,
                    setHighlightBadge: a,
                }
            );
        })(),
        E = (0, Y.K)(f);
    return null == c
        ? null
        : (0, a.jsx)(x.A, {
              object: eG.ZSU.AVATAR,
              children: (0, a.jsx)(ei.A, {
                  user: c,
                  targetElementRef: y,
                  clickTrap: !0,
                  preload: () =>
                      (0, el.A)(c.id, c.getAvatarURL(void 0, ei.S), {
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
                                      innerRef: y,
                                      style: E,
                                  },
                                  e,
                              ),
                              {
                                  onClick: (t) => {
                                      var n;
                                      null == (n = e.onClick) || n.call(e, t), null == u || u(t);
                                  },
                                  "aria-label": eH.intl.string(eH.t["3Uj+2p"]),
                                  "data-jump-section": g,
                                  className: r()(eK.R3, {
                                      [eK.ZQ]: null != f,
                                  }),
                                  children: [
                                      (0, a.jsx)(eY, {
                                          size: h._3J["SIZE_".concat(32)],
                                          src: c.getAvatarURL(void 0, 28, !1),
                                          avatarDecoration: _,
                                          "aria-label": c.username,
                                          status: o ? eG.clD.STREAMING : d,
                                          isSpeaking: n,
                                          isLatched: i,
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
            { speakingWhileMuted: l, occluded: i, speakingWhilePTTInactive: r } = this.props;
        i !== a && this.handleOccludedChanged(),
            l !== t && this.handleSpeakingWhileMutedChanged(),
            r !== n && this.handleSpeakingWhilePTTChanged();
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
                status: i,
                userTag: r,
                voiceActivityStatusEnabled: s,
                voiceChannel: o,
            } = this.props;
        if (null == l) return null;
        if (
            (0, y.A)({
                activities: t,
                status: i,
                applicationStream: n,
                voiceChannel: s ? o : void 0,
            })
        )
            return (0, a.jsx)(C.A, {
                hoverText: r,
                forceHover: e,
                children: (0, a.jsx)(_.A, {
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
                  hoverText: r,
                  forceHover: e,
                  children: (0, a.jsx)(B.A, {
                      activity: c,
                      emojiClassName: eK.Zg,
                      className: eK.WO,
                  }),
              })
            : null != i && i !== eG.clD.UNKNOWN && l.hasUniqueUsername()
              ? (0, a.jsx)(C.A, {
                    hoverText: r,
                    forceHover: e,
                    children: (0, a.jsx)(A.A, {
                        text: eP.Ay.humanizeStatus(i),
                    }),
                })
              : r;
    }
    renderAvatarWithPopout(e) {
        let {
            focusSectionProps: { "data-jump-section": t },
            onClick: n,
        } = e;
        return (0, a.jsx)(
            e$,
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
        let { currentUser: e, nameplate: t, voiceChannel: n, isQuestBarEmpty: l, isListenAlongVisible: i } = this.props,
            s = this.state.hovered;
        return null == e
            ? null
            : (0, a.jsxs)(a.Fragment, {
                  children: [
                      (0, a.jsx)(h.skg, {
                          children: (e) =>
                              (0, a.jsxs)("div", {
                                  ref: this.containerRef,
                                  className: r()(eK.kL, {
                                      [eK.UG]: null != n,
                                      [eK.bc]: !l,
                                      [eK.G5]: i,
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
                    ey.A.isConnected()
                        ? (0, eo.openUserSettings)(er.X.VOICE_AND_VIDEO_PANEL, {
                              section: eG.nc_.VOICE,
                          })
                        : (0, eo.openUserSettings)();
            }),
            ez(this, "handleOpenSettingsContextMenu", (e) => {
                let { currentUser: t } = this.props;
                null != t &&
                    (0, f.L3)(e, async () => {
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
                    (0, f.L3)(e, async () => {
                        let { default: e } = await n.e("78827").then(n.bind(n, 385318));
                        return () => {
                            let { enabledInputProfiles: n } = (0, es.d)({
                                location: "Account",
                            });
                            return (0, a.jsx)(O.f5, {
                                value: t,
                                children: (0, a.jsx)(e, {
                                    onClose: f.Z_,
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
                    (0, f.L3)(e, async () => {
                        let { default: e } = await n.e("78827").then(n.bind(n, 385318));
                        return () =>
                            (0, a.jsx)(O.f5, {
                                value: t,
                                children: (0, a.jsx)(e, {
                                    onClose: f.Z_,
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
                var e, t, n, a, l, i;
                null == (e = (t = this.props).dismissInputDeviceChangedTooltip) || e.call(t),
                    null == (n = (a = this.props).dismissOutputDeviceChangedTooltip) || n.call(a),
                    null == (l = (i = this.props).dismissPTTJoinTooltip) || l.call(i),
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
                        shouldShowPTTJoinTooltip: i,
                        shouldShowInputDeviceChangedTooltip: r,
                        shouldShowOutputDeviceChangedTooltip: s,
                    } = this.props,
                    { hoveringOnMute: o } = this.state,
                    c =
                        void 0 === this.lastSpeakingWhileMutedNotificationTime ||
                        performance.now() - this.lastSpeakingWhileMutedNotificationTime > eX;
                a
                    ? o ||
                      !e ||
                      t ||
                      n ||
                      l ||
                      !c ||
                      r ||
                      s ||
                      i ||
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
                        shouldShowPTTJoinTooltip: i,
                        shouldShowInputDeviceChangedTooltip: r,
                        shouldShowOutputDeviceChangedTooltip: s,
                    } = this.props,
                    { hoveringOnMute: o } = this.state,
                    c =
                        void 0 === this.lastSpeakingWhilePTTNotificationTime ||
                        performance.now() - this.lastSpeakingWhilePTTNotificationTime > eX;
                a
                    ? o ||
                      e ||
                      t ||
                      n ||
                      l ||
                      !c ||
                      r ||
                      s ||
                      i ||
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
                                      className: r()({
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
            serverMute: i,
            serverDeaf: r,
            suppress: s,
            shouldShowSpeakingWhileMutedTooltip: o,
            shouldShowSpeakingWhilePTTTooltip: c,
            isEligibleForPomelo: d,
            webBuildOverride: u,
            handleMouseEnterMute: m,
            handleMouseLeaveMute: p,
            handleToggleSelfDeaf: h,
            handleToggleSelfMute: f,
            handleInputAudioContextMenu: x,
            handleOutputAudioContextMenu: b,
            handleOpenAccountSettings: g,
            handleOpenSettingsContextMenu: v,
            dismissibleContents: j,
            nameplate: y,
            accountContainerRef: _,
            shouldShowInputDeviceChangedTooltip: A = !1,
            shouldShowOutputDeviceChangedTooltip: C = !1,
            shouldShowPTTJoinTooltip: S = !1,
            dismissTooltips: O,
            speaking: E,
            latched: N,
        } = e,
        T = (0, Y.K)(y);
    return (0, a.jsxs)("div", {
        className: eK.Uo,
        style: T,
        children: [
            (0, a.jsx)(e2, {
                accountContainerRef: _,
                selfMute: n,
                serverMute: i,
                suppress: s,
                awaitingRemote: l,
                onMouseEnter: m,
                onMouseLeave: p,
                onClick: f,
                onContextMenu: x,
                iconForeground: null != y ? eK.t4 : void 0,
                nameplate: y,
                shouldShowInputDeviceChangedTooltip: A,
                shouldShowSpeakingWhileMutedTooltip: o,
                shouldShowSpeakingWhilePTTTooltip: c,
                shouldShowPTTJoinTooltip: S,
                dismissTooltips: O,
                speaking: E,
                latched: N,
            }),
            (0, a.jsx)(e8, {
                selfDeaf: t,
                serverDeaf: r,
                onClick: h,
                onContextMenu: b,
                awaitingRemote: l,
                iconForeground: null != y ? eK.t4 : void 0,
                nameplate: y,
                shouldShowOutputDeviceChangedTooltip: C,
                dismissTooltips: O,
            }),
            (0, a.jsx)(e7, {
                isEligibleForPomelo: d,
                webBuildOverride: u,
                onClick: g,
                onContextMenu: v,
                dismissibleContents: j.settings,
                iconForeground: null != y ? eK.t4 : void 0,
                nameplate: y,
                shouldShowInputDeviceChangedTooltip: A,
                shouldShowOutputDeviceChangedTooltip: C,
            }),
        ],
    });
}

function e6(e) {
    let t = (0, c.bG)([ey.A], () => null != ey.A.getChannelId()),
        n = (0, z.Py)(e),
        a = l.useRef(new u.Ep()),
        [i, r] = l.useState(!1);
    l.useEffect(() => {
        t &&
            n &&
            (r(!0),
            a.current.start(eZ, () => {
                r(!1);
            }));
    }, [t, n]);
    let s = l.useCallback(() => {
        r(!1), a.current.stop();
    }, []);
    return (
        (0, g.l0)(() => {
            a.current.stop();
        }),
        {
            shouldShowTooltip: i,
            dismissTooltip: s,
        }
    );
}

function e9() {
    var e;
    let t = (0, c.bG)([eO.default], () => eO.default.getCurrentUser()),
        n = (0, c.bG)([ex.default], () => ex.default.getId()),
        {
            activities: l,
            streaming: i,
            status: r,
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
        s = (0, c.bG)([ef.A], () => ef.A.getAnyStreamForUser(n)),
        u = (0, b.A)({
            userId: n,
        }),
        m = (0, c.bG)([eC.A], () => eC.A.isCurrentUserPTTLatched()),
        p = (0, c.bG)([eC.A], () => eC.A.getVoiceVolume(n)),
        f = eP.Ay.useUserTag(t, {
            decoration: "never",
        }),
        x = (0, c.bG)([eS.A], () => eS.A.hidePersonalInformation),
        g = (0, c.bG)([ey.A, eb.A], () => {
            let e = ey.A.getChannelId();
            return null != e ? eb.A.getChannel(e) : null;
        }),
        { mute: v, selfMute: y, suppress: _ } = (0, ed.A)(g),
        { selfDeaf: A, deaf: C } = (0, ec.A)(g),
        N = (0, c.bG)([T.A], () => {
            var e;
            return (0, I.kK)()
                ? null == (e = T.A.getCurrentBuildOverride().overrides)
                    ? void 0
                    : e.discord_web
                : null;
        }),
        w = (0, c.bG)([eE.A], () => eE.A.getPremiumTypeSubscription()),
        P = (0, c.bG)([ej.A], () => ej.A.getSpeakingWhileMuted()),
        R = (0, c.bG)([k.A], () => k.A.isFullscreenInContext()),
        D = (0, c.bG)([ev.A], () => ev.A.hasLayers()),
        M = (0, h.red)(h.DXt) || D || ew.P.isDisallowPopupsSet() || R,
        L = (0, Z.g)(),
        U = (0, c.bG)([H.default], () => null != H.default.getAwaitingRemoteSessionInfo()),
        B = (0, c.bG)([e_.A], () => e_.A.getGuildId()),
        G = null == t ? void 0 : t.avatarDecoration,
        F = (0, E.A)(G),
        V = null != (e = eP.Ay.useName(t)) ? e : "",
        { voiceActivityStatusEnabled: W } = (0, j.G)({
            location: "Account",
        }),
        K = (0, $.C)(t, "Account"),
        z = ee.S.useConfig({
            location: "Account",
        }).enabled,
        { analyticsLocations: q } = (0, O.Ay)(S.A.ACCOUNT),
        Y = (0, Q.r)({
            user: t,
            guildId: void 0,
        }),
        { isQuestBarEmpty: J, hasLoadedQuestBar: X } = (0, en.c9)({
            location: eV.rE.CONFLICT_CHECKS,
        }),
        et = (0, c.bG)([ea.A, eO.default, eg.A], () => {
            let e,
                t = ea.A.getSyncingWith(),
                n = ea.A.getActivity(),
                a = [];
            if (
                (null != t ? (e = t.partyId) : null != n && null != n.party && null != n.party.id && (e = n.party.id),
                null != e)
            ) {
                var l;
                a = o()(Array.from(null != (l = eg.A.getParty(e)) ? l : []))
                    .map((e) => eO.default.getUser(e))
                    .filter(ek.Vq)
                    .value();
            }
            return a.length > 1;
        }),
        el = {
            avatar: [],
            settings: [],
        };
    !M &&
        (el.avatar.push(d.M.DISPLAY_NAME_STYLES_COACHMARK),
        K && el.avatar.push(d.M.TENURE_BADGE_CHURN_REMINDER),
        el.avatar.push(d.M.WIDGETS_RTC_UPSELL_COACHMARK),
        z && el.settings.push(d.M.NITRO_PRIVACY_PERK_BETA_COACHMARK));
    let { shouldShowTooltip: ei, dismissTooltip: er } = e6(eW.oh.AUDIO_INPUT),
        { shouldShowTooltip: es, dismissTooltip: eo } = e6(eW.oh.AUDIO_OUTPUT),
        { shouldShowTooltip: eu, dismissTooltip: eh } = (0, em.A)(),
        eN = (0, ep.A)();
    return (0, a.jsx)(O.f5, {
        value: q,
        children: (0, a.jsx)(e0, {
            currentUser: t,
            username: V,
            activities: l,
            applicationStream: s,
            voiceChannel: g,
            dismissibleContents: el,
            userTag: f,
            hidePrivateData: x,
            occluded: M,
            premiumSubscription: w,
            selfDeaf: A,
            selfMute: y,
            serverDeaf: C,
            serverMute: v,
            speaking: u,
            voiceDb: p,
            speakingWhileMuted: P,
            speakingWhilePTTInactive: eN,
            latched: m && null != g,
            status: r,
            streaming: i,
            suppress: _,
            webBuildOverride: N,
            awaitingRemote: U,
            isEligibleForPomelo: L,
            voiceActivityStatusEnabled: W,
            nameplate: Y,
            selectedGuildId: B,
            avatarDecoration: F,
            isQuestBarEmpty: J,
            hasLoadedQuestBar: X,
            isListenAlongVisible: et,
            shouldShowInputDeviceChangedTooltip: ei,
            shouldShowOutputDeviceChangedTooltip: es,
            dismissInputDeviceChangedTooltip: er,
            dismissOutputDeviceChangedTooltip: eo,
            shouldShowPTTJoinTooltip: eu,
            dismissPTTJoinTooltip: eh,
        }),
    });
}

function e7(e) {
    let t,
        n,
        {
            webBuildOverride: i,
            isEligibleForPomelo: r,
            onClick: s,
            onContextMenu: o,
            dismissibleContents: c,
            iconForeground: u,
            nameplate: m,
        } = e,
        f = l.useRef(null);
    t =
        null != i
            ? eH.intl.formatToPlainString(eH.t.Gzh6ZP, {
                  webBuildOverride: i.id,
              })
            : eH.intl.string(eH.t.cduTBL);
    let x = h.Zes,
        b = (0, p.w)();
    return (
        (x = null != i ? h.Hnu : r ? h.vJI : b.Component),
        (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(
                    eM.A,
                    eQ(
                        eq(
                            {
                                ref: f,
                                tooltipText: t,
                                tooltipPositionKey: n,
                                onClick: s,
                                onContextMenu: o,
                                "aria-label": eH.intl.string(eH.t.cduTBL),
                                icon: (0, a.jsx)(x, {
                                    size: "refresh_sm",
                                    color: "currentColor",
                                    className: u,
                                }),
                            },
                            b.events,
                        ),
                        {
                            plated: null != m,
                        },
                    ),
                ),
                (0, a.jsx)(G.Ay, {
                    contentTypes: c,
                    groupName: eF.m.ACCOUNT_NAME_ZONE,
                    children: (e) => {
                        let { visibleContent: t, markAsDismissed: n } = e;
                        if (t === d.M.NITRO_PRIVACY_PERK_BETA_COACHMARK)
                            return (0, a.jsx)(et.y, {
                                targetElementRef: f,
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
            serverMute: i,
            suppress: s,
            awaitingRemote: o,
            iconForeground: d,
            onMouseEnter: u,
            onMouseLeave: m,
            onClick: p,
            nameplate: f,
            shouldShowSpeakingWhileMutedTooltip: x,
            shouldShowSpeakingWhilePTTTooltip: b,
            shouldShowInputDeviceChangedTooltip: g,
            shouldShowPTTJoinTooltip: v,
            dismissTooltips: j,
            speaking: y,
            latched: _,
        } = e,
        A = n || s || i,
        C = (0, c.bG)([ej.A], () => ej.A.getMode() === eG.TBI.PUSH_TO_TALK),
        { showPTTIconIndicator: E } = eu.A.useConfig({
            location: "MicrophoneButton",
        }),
        N = l.useRef(null),
        { Component: T, events: I, play: k } = (0, eh.q)(A),
        w = i || s ? h.O1p : T,
        D = (0, c.bG)([ej.A], () => ej.A.getSettings().modeOptions.shortcut),
        M = (0, P.A)(n, i, s, o);
    t = x
        ? {
              tooltipType: "green_void_do_not_use",
              tooltipText: eH.intl.string(eH.t["29gnR4"]),
              tooltipForceOpen: !0,
          }
        : v || b
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
    l.useEffect(() => () => k(), [A, k]);
    let B = E && C,
        G = A ? h.LU0.colors.ICON_VOICE_MUTED : "currentColor",
        { name: F } = (0, z.x5)(eW.oh.AUDIO_INPUT),
        { enabledInputProfiles: V } = (0, es.d)({
            location: "MicrophoneButton",
        });
    return (0, a.jsx)(O.f5, {
        value: L,
        children: (0, a.jsx)(h.YNO, {
            targetElementRef: N,
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
                    { isShown: i } = n,
                    s = i ? h.tN5 : h.abt;
                return (0, a.jsxs)("div", {
                    ref: N,
                    className: r()(eK.WU, {
                        [eK.v8]: A,
                        [eK.q6]: i,
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
                                        icon: (0, a.jsx)(w, {
                                            size: "custom",
                                            width: 20,
                                            height: 20,
                                            color: G,
                                            className: d,
                                        }),
                                        onClick: p,
                                        onContextMenu: l,
                                        onMouseEnter: () => {
                                            u(), I.onMouseEnter();
                                        },
                                        onMouseLeave: () => {
                                            m(), I.onMouseLeave();
                                        },
                                        plated: null != f,
                                        redGlow: A,
                                        role: "switch",
                                    },
                                    t,
                                ),
                                {
                                    children: B
                                        ? (0, a.jsx)("div", {
                                              className: r()(eK.Ur, {
                                                  [eK.zY]: y,
                                                  [eK.yM]: _ && !y,
                                              }),
                                          })
                                        : null,
                                },
                            ),
                        ),
                        (0, a.jsx)(eM.A, {
                            "aria-label": g
                                ? eH.intl.formatToPlainString(eH.t["18wnuD"], {
                                      inputDeviceName: F,
                                  })
                                : eH.intl.string(eH.t.fRzCbB),
                            className: r()(eK.UT, {
                                [eK.q6]: i,
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
                            plated: null != f,
                            redGlow: A,
                            tooltipType: g ? "green_void_do_not_use" : void 0,
                            tooltipForceOpen: g,
                            tooltipPositionKey: g
                                ? eH.intl.formatToPlainString(eH.t["18wnuD"], {
                                      inputDeviceName: F,
                                  })
                                : void 0,
                            tooltipShouldShow: !i,
                            tooltipText: g
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
            awaitingRemote: i,
            onClick: s,
            iconForeground: o,
            nameplate: c,
            shouldShowOutputDeviceChangedTooltip: d,
            dismissTooltips: u,
        } = e,
        p = t || n,
        {
            Component: f,
            play: x,
            events: { onMouseEnter: b, onMouseLeave: g },
        } = (0, m.I)(p ? "undeafen" : "deafen"),
        v = n ? h.TJE : f,
        { name: j } = (0, z.x5)(eW.oh.AUDIO_OUTPUT),
        y = (0, w.A)(t, n, i),
        { analyticsLocations: _ } = (0, O.Ay)(S.A.AUDIO_OUTPUT_BUTTON),
        A = l.useRef(null);
    return (
        l.useEffect(() => () => x(), [p, x]),
        (0, a.jsx)(O.f5, {
            value: _,
            children: (0, a.jsx)(h.YNO, {
                targetElementRef: A,
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (
                        u(),
                        (0, a.jsx)(O.f5, {
                            value: _,
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
                        className: r()(eK.WU, {
                            [eK.v8]: p,
                            [eK.q6]: u,
                        }),
                        children: [
                            (0, a.jsx)(eM.A, {
                                "aria-checked": p,
                                "aria-label": eH.intl.string(eH.t.wjcRFX),
                                className: eK.$o,
                                disabled: i,
                                icon: (0, a.jsx)(v, {
                                    size: "custom",
                                    width: 20,
                                    height: 20,
                                    color: p ? h.LU0.colors.ICON_VOICE_MUTED : "currentColor",
                                    className: o,
                                }),
                                iconForeground: p ? eK.of : void 0,
                                innerClassName: r()({
                                    [eK.T3]: n,
                                }),
                                onClick: s,
                                onContextMenu: l,
                                onMouseEnter: b,
                                onMouseLeave: g,
                                plated: null != c,
                                redGlow: p,
                                role: "switch",
                                tooltipText: y,
                            }),
                            (0, a.jsx)(eM.A, {
                                className: r()(eK.UT, {
                                    [eK.q6]: u,
                                }),
                                disabled: i,
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
