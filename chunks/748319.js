n.d(t, {
    A: () => e0,
    g: () => eX,
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
    w = n(313961),
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
    H = n(750112),
    W = n(643501),
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
    eu = n(277342),
    em = n(616356),
    ep = n(961350),
    eh = n(734057),
    ef = n(629016),
    ex = n(186111),
    eb = n(430452),
    eg = n(383501),
    ev = n(967198),
    ej = n(461213),
    ey = n(485296),
    e_ = n(351906),
    eA = n(287809),
    eC = n(166403),
    eS = n(954571),
    eO = n(486020),
    eE = n(957565),
    eN = n(203982),
    eT = n(927813),
    eI = n(403362),
    ew = n(536194),
    ek = n(427262),
    eP = n(837921),
    eR = n(42473),
    eD = n(994314),
    eM = n(485599),
    eL = n(809991),
    eU = n(652215),
    eB = n(49999),
    eG = n(654487),
    eF = n(731854),
    eV = n(985018),
    eH = n(146664);

function eW(e, t, n) {
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

function eK(e) {
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
                eW(e, t, n[t]);
            });
    }
    return e;
}

function ez(e, t) {
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
let eq = eP.Ay.getEnableHardwareAcceleration() ? h.JsQ : h.euF,
    eQ = 2 * eT.A.Millis.MINUTE,
    eY = 5 * eT.A.Millis.SECOND;

function eJ(e) {
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
        _ = (0, eO.F_)({
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
                        eN._.subscribe(eU.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t),
                        () => {
                            eN._.unsubscribe(eU.jej.SHOW_ACCOUNT_PROFILE_POPOUT, t);
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
              object: eU.ZSU.AVATAR,
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
                          ez(
                              eK(
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
                                  "aria-label": eV.intl.string(eV.t["3Uj+2p"]),
                                  "data-jump-section": g,
                                  className: r()(eH.R3, {
                                      [eH.ZQ]: null != f,
                                  }),
                                  children: [
                                      (0, a.jsx)(eq, {
                                          size: h._3J["SIZE_".concat(32)],
                                          src: c.getAvatarURL(void 0, 28, !1),
                                          avatarDecoration: _,
                                          "aria-label": c.username,
                                          status: o ? eU.clD.STREAMING : d,
                                          isSpeaking: n,
                                          isLatched: i,
                                          voiceDb: s,
                                          className: eH.my,
                                      }),
                                      (0, a.jsx)("div", {
                                          className: r()(eH.oM, {
                                              [eH.K0]: eE.p5,
                                          }),
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
class eX extends l.PureComponent {
    get isCopiedStreakGodlike() {
        let { copiedStreak: e } = this.state;
        return e >= 10;
    }
    componentDidUpdate(e) {
        let { speakingWhileMuted: t, occluded: n } = e,
            { speakingWhileMuted: a, occluded: l } = this.props;
        l !== n && this.handleOccludedChanged(), a !== t && this.handleSpeakingWhileMutedChanged();
    }
    componentWillUnmount() {
        this.copiedTimeout.stop(), this.copiedDecayTimeout.stop(), this.speakingWhileMutedTooltipTimeout.stop();
    }
    renderCopiedSuccess() {
        let { copiedStreak: e } = this.state,
            t = [
                eV.intl.string(eV.t.MSaeTe),
                eV.intl.string(eV.t.UmrCw7),
                eV.intl.string(eV.t.gKE0Jq),
                eV.intl.string(eV.t["4DSKbi"]),
                eV.intl.string(eV.t["+8ENdT"]),
                eV.intl.string(eV.t.GlWHv8),
                eV.intl.string(eV.t.hIzxU9),
                eV.intl.string(eV.t["26uMPL"]),
                eV.intl.string(eV.t.uFs7R2),
                eV.intl.string(eV.t.bLXdcY),
                eV.intl.string(eV.t.gPg9fS),
            ],
            n = Math.min(Math.max(0, e - 1), t.length - 1);
        return (0, a.jsx)(h.bfh, {
            isShaking: this.isCopiedStreakGodlike,
            children: t[n],
        });
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
                    textClassName: eH.XD,
                    hideTooltip: !0,
                }),
            });
        let c =
            null == t
                ? void 0
                : t.find((e) => {
                      let { type: t } = e;
                      return t === eU.$pd.CUSTOM_STATUS;
                  });
        return null != c
            ? (0, a.jsx)(C.A, {
                  hoverText: r,
                  forceHover: e,
                  children: (0, a.jsx)(B.A, {
                      activity: c,
                      emojiClassName: eH.Zg,
                      className: eH.WO,
                  }),
              })
            : null != i && i !== eU.clD.UNKNOWN && l.hasUniqueUsername()
              ? (0, a.jsx)(C.A, {
                    hoverText: r,
                    forceHover: e,
                    children: (0, a.jsx)(A.A, {
                        text: ek.Ay.humanizeStatus(i),
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
            eJ,
            ez(eK({}, this.props), {
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
            : (0, a.jsx)(eL.A, {
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
                                  className: r()(eH.kL, {
                                      [eH.UG]: null != n,
                                      [eH.bc]: !l,
                                      [eH.G5]: i,
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
                                          eZ,
                                          ez(eK({}, this.props, this.state), {
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
            eW(this, "copiedTimeout", new u.Ep()),
            eW(this, "copiedDecayTimeout", new u.Ep()),
            eW(this, "speakingWhileMutedTooltipTimeout", new u.Ep()),
            eW(this, "lastSpeakingWhileMutedNotificationTime", void 0),
            eW(this, "state", {
                hovered: !1,
                copiedStreak: 0,
                shouldShowNametagTooltip: !1,
                shouldShowCopiedFeedback: !1,
                shouldShowSpeakingWhileMutedTooltip: !1,
                hoveringOnMute: !1,
            }),
            eW(this, "containerRef", l.createRef()),
            eW(this, "avatarWithPopoutRef", l.createRef()),
            eW(this, "handleToggleSelfMute", () => {
                let { serverMute: e, suppress: t, selfMute: n } = this.props;
                (0, M.A)(e, t, eU.JJy.ACCOUNT_PANEL), (0, L.X)(S.A.ACCOUNT, L.O.MIC, n);
            }),
            eW(this, "handleToggleSelfDeaf", () => {
                let { serverDeaf: e, selfDeaf: t } = this.props;
                (0, D.A)(e, eU.JJy.ACCOUNT_PANEL), (0, L.X)(S.A.ACCOUNT, L.O.DEAFEN, !t);
            }),
            eW(this, "handleOpenAccountSettings", () => {
                this.dismissTooltips(),
                    eg.A.isConnected()
                        ? (0, eo.openUserSettings)(er.X.VOICE_AND_VIDEO_PANEL, {
                              section: eU.nc_.VOICE,
                          })
                        : (0, eo.openUserSettings)();
            }),
            eW(this, "handleOpenSettingsContextMenu", (e) => {
                let { currentUser: t } = this.props;
                null != t &&
                    (0, f.L3)(e, async () => {
                        let { default: e } = await n.e("95153").then(n.bind(n, 50120));
                        return (n) =>
                            (0, a.jsx)(
                                e,
                                ez(eK({}, n), {
                                    user: t,
                                    premiumSubscription: this.props.premiumSubscription,
                                    webBuildOverride: this.props.webBuildOverride,
                                    onInteraction: (0, U.s)("UserSettingsCogContextMenu", S.A.ACCOUNT),
                                }),
                            );
                    });
            }),
            eW(this, "audioOnInteractionHandler", (0, U.s)("AudioDeviceMenu", S.A.ACCOUNT)),
            eW(this, "handleInputAudioContextMenu", (e, t) => {
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
            eW(this, "handleOutputAudioContextMenu", (e, t) => {
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
            eW(this, "handleMouseEnter", () => {
                this.setState({
                    hovered: !0,
                });
            }),
            eW(this, "handleMouseLeave", () => {
                this.setState({
                    hovered: !1,
                });
            }),
            eW(this, "handleMouseEnterMute", () => {
                this.setState({
                    hoveringOnMute: !0,
                    shouldShowSpeakingWhileMutedTooltip: !1,
                }),
                    this.speakingWhileMutedTooltipTimeout.stop();
            }),
            eW(this, "handleMouseLeaveMute", () => {
                this.setState({
                    hoveringOnMute: !1,
                });
            }),
            eW(this, "dismissSpeakingWhileMutedTooltip", () => {
                this.setState({
                    shouldShowSpeakingWhileMutedTooltip: !1,
                }),
                    this.speakingWhileMutedTooltipTimeout.stop();
            }),
            eW(this, "dismissTooltips", () => {
                var e, t, n, a;
                null == (e = (t = this.props).dismissInputDeviceChangedTooltip) || e.call(t),
                    null == (n = (a = this.props).dismissOutputDeviceChangedTooltip) || n.call(a),
                    this.dismissSpeakingWhileMutedTooltip();
            }),
            eW(this, "handleCopyTag", () => {
                let { currentUser: e } = this.props,
                    { shouldShowNametagTooltip: t, copiedStreak: n } = this.state;
                if (null == e) return;
                (0, eE.C)(
                    ek.Ay.getUserTag(e, {
                        decoration: "never",
                        identifiable: "always",
                    }),
                ),
                    eS.default.track(eU.HAw.TEXT_COPIED, {
                        type: "User Tag",
                    });
                let a = {
                    shouldShowCopiedFeedback: !0,
                    shouldShowNametagTooltip: !0,
                };
                t || (a.copiedStreak = n + 1),
                    this.setState(a, () => {
                        this.copiedTimeout.start(1e3, () =>
                            this.setState({
                                shouldShowNametagTooltip: !1,
                            }),
                        ),
                            this.copiedDecayTimeout.start(2e3, () =>
                                this.setState({
                                    copiedStreak: 0,
                                }),
                            );
                    });
            }),
            eW(this, "handleOccludedChanged", () => {
                let { occluded: e } = this.props;
                e &&
                    this.setState({
                        shouldShowNametagTooltip: !1,
                        shouldShowSpeakingWhileMutedTooltip: !1,
                    });
            }),
            eW(this, "handleSpeakingWhileMutedChanged", () => {
                let {
                        selfMute: e,
                        serverMute: t,
                        suppress: n,
                        speakingWhileMuted: a,
                        occluded: l,
                        shouldShowInputDeviceChangedTooltip: i,
                        shouldShowOutputDeviceChangedTooltip: r,
                    } = this.props,
                    { hoveringOnMute: s } = this.state,
                    o =
                        void 0 === this.lastSpeakingWhileMutedNotificationTime ||
                        Date.now() - this.lastSpeakingWhileMutedNotificationTime > eQ;
                a
                    ? s ||
                      !e ||
                      t ||
                      n ||
                      l ||
                      !o ||
                      i ||
                      r ||
                      this.setState(
                          {
                              shouldShowSpeakingWhileMutedTooltip: !0,
                          },
                          () => {
                              (this.lastSpeakingWhileMutedNotificationTime = Date.now()),
                                  this.speakingWhileMutedTooltipTimeout.start(2e3, () =>
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
            eW(this, "renderNameTag", (e) => {
                let { currentUser: t, username: n } = this.props;
                return null == t
                    ? null
                    : (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)("div", {
                                  className: eH.eW,
                                  children: (0, a.jsx)(eM.A, {
                                      className: r()({
                                          [eH.e8]: null != e,
                                      }),
                                      children: (0, a.jsx)(H.A, {
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
                                  children: (0, a.jsx)(eD.A, {
                                      children: this.renderStatus(),
                                  }),
                              }),
                          ],
                      });
            });
    }
}

function eZ(e) {
    let {
            selfDeaf: t,
            selfMute: n,
            awaitingRemote: l,
            serverMute: i,
            serverDeaf: r,
            suppress: s,
            shouldShowSpeakingWhileMutedTooltip: o,
            isEligibleForPomelo: c,
            webBuildOverride: d,
            handleMouseEnterMute: u,
            handleMouseLeaveMute: m,
            handleToggleSelfDeaf: p,
            handleToggleSelfMute: h,
            handleInputAudioContextMenu: f,
            handleOutputAudioContextMenu: x,
            handleOpenAccountSettings: b,
            handleOpenSettingsContextMenu: g,
            dismissibleContents: v,
            nameplate: j,
            accountContainerRef: y,
            shouldShowInputDeviceChangedTooltip: _ = !1,
            shouldShowOutputDeviceChangedTooltip: A = !1,
            dismissTooltips: C,
        } = e,
        S = (0, Y.K)(j);
    return (0, a.jsxs)("div", {
        className: eH.Uo,
        style: S,
        children: [
            (0, a.jsx)(e6, {
                accountContainerRef: y,
                selfMute: n,
                serverMute: i,
                suppress: s,
                awaitingRemote: l,
                onMouseEnter: u,
                onMouseLeave: m,
                onClick: h,
                onContextMenu: f,
                iconForeground: null != j ? eH.t4 : void 0,
                nameplate: j,
                shouldShowInputDeviceChangedTooltip: _,
                shouldShowSpeakingWhileMutedTooltip: o,
                dismissTooltips: C,
            }),
            (0, a.jsx)(e9, {
                selfDeaf: t,
                serverDeaf: r,
                onClick: p,
                onContextMenu: x,
                awaitingRemote: l,
                iconForeground: null != j ? eH.t4 : void 0,
                nameplate: j,
                shouldShowOutputDeviceChangedTooltip: A,
                dismissTooltips: C,
            }),
            (0, a.jsx)(e1, {
                isEligibleForPomelo: c,
                webBuildOverride: d,
                onClick: b,
                onContextMenu: g,
                dismissibleContents: v.settings,
                iconForeground: null != j ? eH.t4 : void 0,
                nameplate: j,
                shouldShowInputDeviceChangedTooltip: _,
                shouldShowOutputDeviceChangedTooltip: A,
            }),
        ],
    });
}

function e$(e) {
    let t = (0, c.bG)([eg.A], () => null != eg.A.getChannelId()),
        n = (0, z.Py)(e),
        a = l.useRef(new u.Ep()),
        [i, r] = l.useState(!1);
    l.useEffect(() => {
        t &&
            n &&
            (r(!0),
            a.current.start(eY, () => {
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

function e0() {
    var e;
    let t = (0, c.bG)([eA.default], () => eA.default.getCurrentUser()),
        n = (0, c.bG)([ep.default], () => ep.default.getId()),
        {
            activities: l,
            streaming: i,
            status: r,
        } = (0, c.cf)([ej.A], () => {
            let e = ej.A.getActivities();
            return {
                activities: e,
                streaming:
                    null !=
                    e.find((e) => {
                        let { type: t } = e;
                        return t === eU.$pd.STREAMING;
                    }),
                status: ej.A.getStatus(),
            };
        }),
        s = (0, c.bG)([em.A], () => em.A.getAnyStreamForUser(n)),
        u = (0, b.A)({
            userId: n,
        }),
        m = (0, c.bG)([ey.A], () => ey.A.isCurrentUserPTTLatched()),
        p = (0, c.bG)([ey.A], () => ey.A.getVoiceVolume(n)),
        f = ek.Ay.useUserTag(t, {
            decoration: "never",
        }),
        x = (0, c.bG)([e_.A], () => e_.A.hidePersonalInformation),
        g = (0, c.bG)([eg.A, eh.A], () => {
            let e = eg.A.getChannelId();
            return null != e ? eh.A.getChannel(e) : null;
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
        k = (0, c.bG)([eC.A], () => eC.A.getPremiumTypeSubscription()),
        P = (0, c.bG)([eb.A], () => eb.A.getSpeakingWhileMuted()),
        R = (0, c.bG)([w.A], () => w.A.isFullscreenInContext()),
        D = (0, c.bG)([ex.A], () => ex.A.hasLayers()),
        M = (0, h.red)(h.DXt) || D || ew.P.isDisallowPopupsSet() || R,
        L = (0, Z.g)(),
        U = (0, c.bG)([W.default], () => null != W.default.getAwaitingRemoteSessionInfo()),
        B = (0, c.bG)([ev.A], () => ev.A.getGuildId()),
        G = null == t ? void 0 : t.avatarDecoration,
        F = (0, E.A)(G),
        V = null != (e = ek.Ay.useName(t)) ? e : "",
        { voiceActivityStatusEnabled: H } = (0, j.G)({
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
            location: eG.rE.CONFLICT_CHECKS,
        }),
        et = (0, c.bG)([ea.A, eA.default, ef.A], () => {
            let e,
                t = ea.A.getSyncingWith(),
                n = ea.A.getActivity(),
                a = [];
            if (
                (null != t ? (e = t.partyId) : null != n && null != n.party && null != n.party.id && (e = n.party.id),
                null != e)
            ) {
                var l;
                a = o()(Array.from(null != (l = ef.A.getParty(e)) ? l : []))
                    .map((e) => eA.default.getUser(e))
                    .filter(eI.Vq)
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
    let { shouldShowTooltip: ei, dismissTooltip: er } = e$(eF.oh.AUDIO_INPUT),
        { shouldShowTooltip: es, dismissTooltip: eo } = e$(eF.oh.AUDIO_OUTPUT);
    return (0, a.jsx)(O.f5, {
        value: q,
        children: (0, a.jsx)(eX, {
            currentUser: t,
            username: V,
            activities: l,
            applicationStream: s,
            voiceChannel: g,
            dismissibleContents: el,
            userTag: f,
            hidePrivateData: x,
            occluded: M,
            premiumSubscription: k,
            selfDeaf: A,
            selfMute: y,
            serverDeaf: C,
            serverMute: v,
            speaking: u,
            voiceDb: p,
            speakingWhileMuted: P,
            latched: m && null != g,
            status: r,
            streaming: i,
            suppress: _,
            webBuildOverride: N,
            awaitingRemote: U,
            isEligibleForPomelo: L,
            voiceActivityStatusEnabled: H,
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
        }),
    });
}

function e1(e) {
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
            ? eV.intl.formatToPlainString(eV.t.Gzh6ZP, {
                  webBuildOverride: i.id,
              })
            : eV.intl.string(eV.t.cduTBL);
    let x = h.Zes,
        b = (0, p.w)();
    return (
        (x = null != i ? h.Hnu : r ? h.vJI : b.Component),
        (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(
                    eR.A,
                    ez(
                        eK(
                            {
                                ref: f,
                                tooltipText: t,
                                tooltipPositionKey: n,
                                onClick: s,
                                onContextMenu: o,
                                "aria-label": eV.intl.string(eV.t.cduTBL),
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
                    groupName: eB.m.ACCOUNT_NAME_ZONE,
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

function e6(e) {
    let {
            selfMute: t,
            serverMute: n,
            suppress: i,
            awaitingRemote: s,
            iconForeground: o,
            onMouseEnter: c,
            onMouseLeave: d,
            onClick: u,
            nameplate: m,
            shouldShowSpeakingWhileMutedTooltip: p,
            shouldShowInputDeviceChangedTooltip: f,
            dismissTooltips: x,
        } = e,
        b = t || i || n,
        g = l.useRef(null),
        { Component: v, events: j, play: y } = (0, eu.q)(b),
        _ = n || i ? h.O1p : v,
        A = p
            ? {
                  tooltipType: "green_void_do_not_use",
                  tooltipText: eV.intl.string(eV.t["29gnR4"]),
                  tooltipForceOpen: !0,
              }
            : {
                  tooltipText: (0, P.A)(t, n, i, s),
              },
        { analyticsLocations: C } = (0, O.Ay)(S.A.AUDIO_INPUT_BUTTON);
    l.useEffect(() => () => y(), [b, y]);
    let E = b ? h.LU0.colors.ICON_VOICE_MUTED : "currentColor",
        { name: N } = (0, z.x5)(eF.oh.AUDIO_INPUT),
        { enabledInputProfiles: T } = (0, es.d)({
            location: "MicrophoneButton",
        });
    return (0, a.jsx)(O.f5, {
        value: C,
        children: (0, a.jsx)(h.YNO, {
            targetElementRef: g,
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (
                    x(),
                    (0, a.jsx)(O.f5, {
                        value: C,
                        children: (0, a.jsx)(R.A, {
                            onInteraction: (0, U.s)("AudioDeviceMenu", S.A.ACCOUNT),
                            onClose: t,
                            maybeRenderPTTCheckbox: !0,
                            renderInputProfiles: T.length > 0,
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
            children: (e, t) => {
                let { onClick: n } = e,
                    { isShown: l } = t,
                    i = l ? h.tN5 : h.abt;
                return (0, a.jsxs)("div", {
                    ref: g,
                    className: r()(eH.WU, {
                        [eH.v8]: b,
                        [eH.q6]: l,
                    }),
                    children: [
                        (0, a.jsx)(
                            eR.A,
                            eK(
                                {
                                    "aria-checked": b,
                                    "aria-label": eV.intl.string(eV.t.w4m945),
                                    className: eH.$o,
                                    disabled: s,
                                    icon: (0, a.jsx)(_, {
                                        size: "custom",
                                        width: 20,
                                        height: 20,
                                        color: E,
                                        className: o,
                                    }),
                                    onClick: u,
                                    onContextMenu: n,
                                    onMouseEnter: () => {
                                        c(), j.onMouseEnter();
                                    },
                                    onMouseLeave: () => {
                                        d(), j.onMouseLeave();
                                    },
                                    plated: null != m,
                                    redGlow: b,
                                    role: "switch",
                                },
                                A,
                            ),
                        ),
                        (0, a.jsx)(eR.A, {
                            "aria-label": f
                                ? eV.intl.formatToPlainString(eV.t["18wnuD"], {
                                      inputDeviceName: N,
                                  })
                                : eV.intl.string(eV.t.fRzCbB),
                            className: r()(eH.UT, {
                                [eH.q6]: l,
                            }),
                            disabled: s,
                            icon: (0, a.jsx)(i, {
                                className: eH.$$,
                                size: "custom",
                                width: 12,
                                height: 12,
                                color: E,
                            }),
                            onClick: n,
                            onContextMenu: n,
                            onMouseEnter: c,
                            onMouseLeave: d,
                            plated: null != m,
                            redGlow: b,
                            tooltipType: f ? "green_void_do_not_use" : void 0,
                            tooltipForceOpen: f,
                            tooltipPositionKey: f
                                ? eV.intl.formatToPlainString(eV.t["18wnuD"], {
                                      inputDeviceName: N,
                                  })
                                : void 0,
                            tooltipShouldShow: !l,
                            tooltipText: f
                                ? eV.intl.format(eV.t["18wnuD"], {
                                      inputDeviceName: N,
                                  })
                                : eV.intl.string(eV.t.fRzCbB),
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
        { name: j } = (0, z.x5)(eF.oh.AUDIO_OUTPUT),
        y = (0, k.A)(t, n, i),
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
                        className: r()(eH.WU, {
                            [eH.v8]: p,
                            [eH.q6]: u,
                        }),
                        children: [
                            (0, a.jsx)(eR.A, {
                                "aria-checked": p,
                                "aria-label": eV.intl.string(eV.t.wjcRFX),
                                className: eH.$o,
                                disabled: i,
                                icon: (0, a.jsx)(v, {
                                    size: "custom",
                                    width: 20,
                                    height: 20,
                                    color: p ? h.LU0.colors.ICON_VOICE_MUTED : "currentColor",
                                    className: o,
                                }),
                                iconForeground: p ? eH.of : void 0,
                                innerClassName: r()({
                                    [eH.T3]: n,
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
                            (0, a.jsx)(eR.A, {
                                className: r()(eH.UT, {
                                    [eH.q6]: u,
                                }),
                                disabled: i,
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
                                    ? eV.intl.formatToPlainString(eV.t["f+DDY/"], {
                                          outputDeviceName: j,
                                      })
                                    : void 0,
                                tooltipShouldShow: !u,
                                tooltipText: d
                                    ? eV.intl.format(eV.t["f+DDY/"], {
                                          outputDeviceName: j,
                                      })
                                    : eV.intl.string(eV.t.aA4Vce),
                                "aria-label": d
                                    ? eV.intl.formatToPlainString(eV.t["f+DDY/"], {
                                          outputDeviceName: j,
                                      })
                                    : eV.intl.string(eV.t.aA4Vce),
                            }),
                        ],
                    });
                },
            }),
        })
    );
}
