n.d(t, {
    Z: () => e7,
    m: () => e4
}),
    n(47120),
    n(653041);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    o = n(374470),
    l = n(442837),
    c = n(704215),
    d = n(846519),
    u = n(400354),
    m = n(652844),
    g = n(747906),
    p = n(789639),
    h = n(930295),
    f = n(481060),
    b = n(355467),
    N = n(239091),
    x = n(230711),
    _ = n(410575),
    E = n(941129),
    j = n(634894),
    O = n(586902),
    C = n(980591),
    v = n(468363),
    S = n(326255),
    T = n(747017),
    I = n(963056),
    y = n(570928),
    A = n(100527),
    P = n(906732),
    R = n(676742),
    D = n(1585),
    Z = n(304761),
    w = n(865427),
    k = n(571250),
    W = n(628581),
    L = n(55311),
    B = n(575175),
    M = n(522651),
    U = n(795318),
    V = n(526371),
    G = n(64220),
    F = n(427217),
    H = n(540059),
    z = n(605236),
    Y = n(243778),
    K = n(258609),
    q = n(427347),
    X = n(50697),
    J = n(331541),
    Q = n(90042),
    $ = n(850020),
    ee = n(379839),
    et = n(359135),
    en = n(516817),
    er = n(440051),
    ei = n(332473),
    es = n(240504),
    ea = n(637906),
    eo = n(39370),
    el = n(19199),
    ec = n(866483),
    ed = n(14357),
    eu = n(763296),
    em = n(640806),
    eg = n(184301),
    ep = n(52538),
    eh = n(861254),
    ef = n(221241),
    eb = n(879815),
    eN = n(294629),
    ex = n(875527),
    e_ = n(56848),
    eE = n(378441),
    ej = n(358820),
    eO = n(469887),
    eC = n(306609),
    ev = n(199902),
    eS = n(314897),
    eT = n(592125),
    eI = n(819640),
    ey = n(131951),
    eA = n(19780),
    eP = n(885110),
    eR = n(246946),
    eD = n(594174),
    eZ = n(78839),
    ew = n(626135),
    ek = n(768581),
    eW = n(572004),
    eL = n(585483),
    eB = n(70956),
    eM = n(74538),
    eU = n(374023),
    eV = n(51144),
    eG = n(998502),
    eF = n(870569),
    eH = n(345243),
    ez = n(115530),
    eY = n(981631),
    eK = n(215023),
    eq = n(388032),
    eX = n(91678);
function eJ(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function eQ(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                eJ(e, t, n[t]);
            });
    }
    return e;
}
function e$(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let e0 = eG.ZP.getEnableHardwareAcceleration() ? f.Xo$ : f.qEK,
    e1 = 2 * eB.Z.Millis.MINUTE,
    e2 = 3 * eB.Z.Millis.SECOND,
    e6 = 30 * eB.Z.Millis.DAY;
function e3(e) {
    let { speaking: t, streaming: n, currentUser: s, status: o, handleClick: l, handleMouseLeave: c, renderNameTag: d, nameplate: u, 'data-jump-section': m } = e,
        g = i.useRef(null),
        p = (0, H.Q3)('RTC Avatar'),
        { coloredIconsEnabled: h } = (0, ef.Z)({ location: 'RTC Avatar' }),
        b = (0, R.Z)(null == s ? void 0 : s.avatarDecoration),
        N = (0, ek.NZ)({
            avatarDecoration: b,
            size: (0, D.y9)(f.EFr.SIZE_32)
        }),
        x = (0, f.dQu)(f.TVs.modules.guildbar.AVATAR_SIZE),
        {
            updateOpenPopoutRef: E,
            highlightBadge: j,
            setHighlightBadge: O,
            pendingBadges: v,
            setPendingBadges: S
        } = (function () {
            let e = i.useRef(null),
                t = i.useCallback((t) => {
                    e.current = () => {
                        t.onMouseDown(), t.onClick();
                    };
                }, []),
                [n, r] = i.useState(),
                [s, a] = i.useState(),
                [o, l] = i.useState(!1);
            return (
                (0, C.Z)(() => l(!0), 750),
                i.useEffect(() => {
                    let t = (t) => {
                        var n;
                        let { pendingBadges: i, highlightBadge: s } = t;
                        null != s && r(s), null != i && a(i), null === (n = e.current) || void 0 === n || n.call(e);
                    };
                    return (
                        eL.S.subscribe(eY.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, t),
                        () => {
                            eL.S.unsubscribe(eY.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, t);
                        }
                    );
                }),
                {
                    updateOpenPopoutRef: t,
                    highlightBadge: o ? n : void 0,
                    setHighlightBadge: r,
                    pendingBadges: s,
                    setPendingBadges: a
                }
            );
        })(),
        T = (0, ee.A)(u),
        { showTempStatusOptions: I } = er.Y.useExperiment({ location: 'AvatarWithPopout' }, { autoTrackExposure: !1 });
    return null == s
        ? null
        : (0, r.jsx)(_.Z, {
              object: eY.qAy.AVATAR,
              children: (0, r.jsx)(f.yRy, {
                  targetElementRef: g,
                  clickTrap: !0,
                  renderPopout: (e) => {
                      let { closePopout: t, setPopoutRef: n } = e;
                      return (0, r.jsx)('div', {
                          className: eX.accountProfilePopoutWrapper,
                          children: (0, r.jsx)(J.Z, {
                              currentUser: s,
                              pendingBadges: v,
                              highlightBadge: j,
                              onClose: () => {
                                  null == t || t();
                              },
                              setPopoutRef: n
                          })
                      });
                  },
                  position: 'top',
                  align: 'left',
                  animation: f.yRy.Animation.FADE,
                  spacing: 14,
                  fixed: !0,
                  onRequestClose: () => {
                      c(), O(void 0), S(void 0);
                  },
                  preload: () =>
                      (0, eg.Z)(s, void 0, {
                          withMutualGuilds: !1,
                          withMutualFriends: !1
                      }),
                  children: (e) => (
                      E(e),
                      (0, r.jsxs)(
                          f.P3F,
                          e$(
                              eQ(
                                  {
                                      innerRef: g,
                                      style: T
                                  },
                                  e
                              ),
                              {
                                  onClick: (t) => {
                                      var n;
                                      null === (n = e.onClick) || void 0 === n || n.call(e, t), null == l || l(t);
                                  },
                                  'aria-label': eq.NW.string(eq.t['3Uj+2t']),
                                  'data-jump-section': p ? m : void 0,
                                  className: a()(eX.avatarWrapper, !p && h && eX.experiment, { [eX.plated]: null != u }),
                                  children: [
                                      (0, r.jsx)(e0, {
                                          size: p ? f.EFr['SIZE_'.concat(x)] : f.EFr.SIZE_32,
                                          src: s.getAvatarURL(void 0, p ? x - 4 : 32, !1),
                                          avatarDecoration: N,
                                          'aria-label': s.username,
                                          status: n ? eY.Skl.STREAMING : o,
                                          isSpeaking: t,
                                          className: eX.avatar,
                                          pulseStatusIcon: I
                                      }),
                                      (0, r.jsx)('div', {
                                          className: a()(eX.nameTag, { [eX.canCopy]: eW.wS }),
                                          children: d()
                                      })
                                  ]
                              }
                          )
                      )
                  )
              })
          });
}
class e4 extends i.PureComponent {
    get isCopiedStreakGodlike() {
        let { copiedStreak: e } = this.state;
        return e >= 10;
    }
    componentDidUpdate(e) {
        let { speakingWhileMuted: t, occluded: n } = e,
            { speakingWhileMuted: r, occluded: i } = this.props;
        i !== n && this.handleOccludedChanged(), r !== t && this.handleSpeakingWhileMutedChanged();
    }
    componentWillUnmount() {
        this.copiedTimeout.stop(), this.copiedDecayTimeout.stop(), this.speakingWhileMutedTooltipTimeout.stop();
    }
    renderCopiedSuccess() {
        let { copiedStreak: e } = this.state,
            t = [eq.NW.string(eq.t.MSaeTU), eq.NW.string(eq.t.UmrCw8), eq.NW.string(eq.t.gKE0Ji), eq.NW.string(eq.t['4DSKbm']), eq.NW.string(eq.t['+8ENdX']), eq.NW.string(eq.t.GlWHv7), eq.NW.string(eq.t.hIzxU1), eq.NW.string(eq.t['26uMPD']), eq.NW.string(eq.t.uFs7R0), eq.NW.string(eq.t.bLXdcX), eq.NW.string(eq.t.gPg9fX)],
            n = Math.min(Math.max(0, e - 1), t.length - 1);
        return (0, r.jsx)(f.UkV, {
            isShaking: this.isCopiedStreakGodlike,
            children: t[n]
        });
    }
    renderStatus() {
        let { hovered: e } = this.state,
            { activities: t, applicationStream: n, currentUser: i, status: s, userTag: a, voiceActivityStatusEnabled: o, voiceChannel: l } = this.props;
        if (null == i) return null;
        if (
            (0, S.Z)({
                activities: t,
                status: s,
                applicationStream: n,
                voiceChannel: o ? l : void 0
            })
        )
            return (0, r.jsx)(y.Z, {
                hoverText: a,
                forceHover: e,
                children: (0, r.jsx)(T.Z, {
                    user: i,
                    activities: t,
                    applicationStream: n,
                    voiceChannel: o ? l : void 0,
                    textClassName: eX.activityStatusText,
                    hideTooltip: !0
                })
            });
        let c =
            null == t
                ? void 0
                : t.find((e) => {
                      let { type: t } = e;
                      return t === eY.IIU.CUSTOM_STATUS;
                  });
        return null != c
            ? (0, r.jsx)(y.Z, {
                  hoverText: a,
                  forceHover: e,
                  children: (0, r.jsx)(F.Z, {
                      activity: c,
                      emojiClassName: eX.emoji,
                      className: eX.customStatus
                  })
              })
            : null != s && s !== eY.Skl.UNKNOWN && i.isPomelo()
              ? (0, r.jsx)(y.Z, {
                    hoverText: a,
                    forceHover: e,
                    children: (0, r.jsx)(I.Z, { text: eV.ZP.humanizeStatus(s) })
                })
              : a;
    }
    renderAvatarWithPopout(e) {
        let {
            focusSectionProps: { 'data-jump-section': t },
            onClick: n
        } = e;
        return (0, r.jsx)(
            e3,
            e$(eQ({}, this.props), {
                handleClick: n,
                handleMouseLeave: this.handleMouseLeave,
                renderNameTag: this.renderNameTag,
                'data-jump-section': t
            })
        );
    }
    renderNameZone(e) {
        let { currentUser: t, dismissibleContents: n } = this.props;
        return null == t
            ? null
            : (0, r.jsx)(Y.ZP, {
                  contentTypes: n.avatar,
                  children: (t) => {
                      let { visibleContent: n, markAsDismissed: i } = t;
                      switch (n) {
                          case c.z.PREMIUM_SUBSCRIPTION_APRIL_MARKETING_DECO_TOOLTIP:
                              return (0, r.jsx)(G.Z, {
                                  markAsDismissed: i,
                                  children: () => this.renderAvatarWithPopout({ focusSectionProps: e })
                              });
                          case c.z.EXPIRING_STATUS_COACHMARK:
                              return (0, r.jsx)(Q.Z, {
                                  markAsDismissed: i,
                                  children: (t) => {
                                      let { onClick: n } = t;
                                      return this.renderAvatarWithPopout({
                                          focusSectionProps: e,
                                          onClick: n
                                      });
                                  }
                              });
                          default:
                              return this.renderAvatarWithPopout({ focusSectionProps: e });
                      }
                  }
              });
    }
    render() {
        let { currentUser: e, nameplate: t } = this.props,
            n = this.state.hovered;
        return null == e
            ? null
            : (0, r.jsx)(f.Wdt, {
                  children: (e) =>
                      (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsxs)('div', {
                                  ref: this.containerRef,
                                  className: eX.container,
                                  onMouseEnter: this.handleMouseEnter,
                                  onMouseLeave: this.handleMouseLeave,
                                  children: [
                                      (0, r.jsx)(en.Z, {
                                          nameplate: t,
                                          hovered: n,
                                          placement: et.i.ACCOUNT
                                      }),
                                      this.renderNameZone(e),
                                      (0, r.jsx)(
                                          e8,
                                          e$(eQ({}, this.props, this.state), {
                                              accountContainerRef: this.containerRef,
                                              handleMouseEnterMute: this.handleMouseEnterMute,
                                              handleMouseLeaveMute: this.handleMouseLeaveMute,
                                              handleToggleSelfMute: this.handleToggleSelfMute,
                                              handleToggleSelfDeaf: this.handleToggleSelfDeaf,
                                              handleInputAudioContextMenu: this.handleInputAudioContextMenu,
                                              handleOutputAudioContextMenu: this.handleOutputAudioContextMenu,
                                              handleOpenAccountSettings: this.handleOpenAccountSettings,
                                              handleOpenSettingsContextMenu: this.handleOpenSettingsContextMenu
                                          })
                                      )
                                  ]
                              }),
                              (0, r.jsx)(q.Z, {}),
                              (0, r.jsx)(V.Z, {})
                          ]
                      })
              });
    }
    constructor(...e) {
        super(...e),
            eJ(this, 'copiedTimeout', new d.V7()),
            eJ(this, 'copiedDecayTimeout', new d.V7()),
            eJ(this, 'speakingWhileMutedTooltipTimeout', new d.V7()),
            eJ(this, 'lastSpeakingWhileMutedNotificationTime', void 0),
            eJ(this, 'state', {
                hovered: !1,
                copiedStreak: 0,
                shouldShowNametagTooltip: !1,
                shouldShowCopiedFeedback: !1,
                shouldShowSpeakingWhileMutedTooltip: !1,
                hoveringOnMute: !1
            }),
            eJ(this, 'containerRef', i.createRef()),
            eJ(this, 'handleToggleSelfMute', () => {
                let { serverMute: e, suppress: t, selfMute: n } = this.props;
                (0, B.Z)(e, t, eY.jXE.ACCOUNT_PANEL), (0, M.v)(A.Z.ACCOUNT, M.d.MIC, n);
            }),
            eJ(this, 'handleToggleSelfDeaf', () => {
                let { serverDeaf: e, selfDeaf: t } = this.props;
                (0, L.Z)(e, eY.jXE.ACCOUNT_PANEL), (0, M.v)(A.Z.ACCOUNT, M.d.DEAFEN, !t);
            }),
            eJ(this, 'handleOpenAccountSettings', () => {
                this.handleOpenSettings();
            }),
            eJ(this, 'handleOpenSettings', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eY.oAB.ACCOUNT,
                    t = arguments.length > 1 ? arguments[1] : void 0,
                    n = arguments.length > 2 ? arguments[2] : void 0;
                x.Z.open(e, t, n);
            }),
            eJ(this, 'handleOpenSettingsContextMenu', (e) => {
                let { currentUser: t } = this.props;
                null != t &&
                    (0, N.jW)(e, async () => {
                        let { default: e } = await n.e('2535').then(n.bind(n, 923422));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                e$(eQ({}, n), {
                                    user: t,
                                    premiumSubscription: this.props.premiumSubscription,
                                    webBuildOverride: this.props.webBuildOverride,
                                    onInteraction: (0, U.u)('UserSettingsCogContextMenu', A.Z.ACCOUNT)
                                })
                            );
                    });
            }),
            eJ(this, 'audioOnInteractionHandler', (0, U.u)('AudioDeviceMenu', A.Z.ACCOUNT)),
            eJ(this, 'handleInputAudioContextMenu', (e, t) => {
                (0, N.jW)(e, async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 659580));
                    return () =>
                        (0, r.jsx)(P.Gt, {
                            value: t,
                            children: this.props.simplifiedCallSettingsEnabled
                                ? (0, r.jsx)(e, {
                                      onClose: N.Zy,
                                      renderInputDevices: !0,
                                      renderInputVolume: !0,
                                      simplified: !0,
                                      onInteraction: this.audioOnInteractionHandler
                                  })
                                : (0, r.jsx)(e, {
                                      onClose: N.Zy,
                                      renderInputDevices: !0,
                                      renderInputModes: !0,
                                      renderInputVolume: !0,
                                      onInteraction: this.audioOnInteractionHandler
                                  })
                        });
                });
            }),
            eJ(this, 'handleOutputAudioContextMenu', (e, t) => {
                (0, N.jW)(e, async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 659580));
                    return () =>
                        (0, r.jsx)(P.Gt, {
                            value: t,
                            children: this.props.simplifiedCallSettingsEnabled
                                ? (0, r.jsx)(e, {
                                      onClose: N.Zy,
                                      renderOutputDevices: !0,
                                      renderOutputVolume: !0,
                                      simplified: !0,
                                      onInteraction: this.audioOnInteractionHandler
                                  })
                                : (0, r.jsx)(e, {
                                      onClose: N.Zy,
                                      renderOutputDevices: !0,
                                      renderOutputVolume: !0,
                                      onInteraction: this.audioOnInteractionHandler
                                  })
                        });
                });
            }),
            eJ(this, 'handleMouseEnter', () => {
                this.setState({ hovered: !0 });
            }),
            eJ(this, 'handleMouseLeave', () => {
                this.setState({ hovered: !1 });
            }),
            eJ(this, 'handleMouseEnterMute', () => {
                this.setState({
                    hoveringOnMute: !0,
                    shouldShowSpeakingWhileMutedTooltip: !1
                }),
                    this.speakingWhileMutedTooltipTimeout.stop();
            }),
            eJ(this, 'handleMouseLeaveMute', () => {
                this.setState({ hoveringOnMute: !1 });
            }),
            eJ(this, 'handleCopyTag', () => {
                let { currentUser: e } = this.props,
                    { shouldShowNametagTooltip: t, copiedStreak: n } = this.state;
                if (null == e) return;
                (0, eW.JG)(
                    eV.ZP.getUserTag(e, {
                        decoration: 'never',
                        identifiable: 'always'
                    })
                ),
                    ew.default.track(eY.rMx.TEXT_COPIED, { type: 'User Tag' });
                let r = {
                    shouldShowCopiedFeedback: !0,
                    shouldShowNametagTooltip: !0
                };
                t || (r.copiedStreak = n + 1),
                    this.setState(r, () => {
                        this.copiedTimeout.start(1000, () => this.setState({ shouldShowNametagTooltip: !1 })), this.copiedDecayTimeout.start(2000, () => this.setState({ copiedStreak: 0 }));
                    });
            }),
            eJ(this, 'handleOccludedChanged', () => {
                let { occluded: e } = this.props;
                e &&
                    this.setState({
                        shouldShowNametagTooltip: !1,
                        shouldShowSpeakingWhileMutedTooltip: !1
                    });
            }),
            eJ(this, 'handleSpeakingWhileMutedChanged', () => {
                let { selfMute: e, serverMute: t, suppress: n, speakingWhileMuted: r, occluded: i } = this.props,
                    { hoveringOnMute: s } = this.state,
                    a = void 0 === this.lastSpeakingWhileMutedNotificationTime || Date.now() - this.lastSpeakingWhileMutedNotificationTime > e1;
                r
                    ? s ||
                      !e ||
                      t ||
                      n ||
                      i ||
                      !a ||
                      this.setState({ shouldShowSpeakingWhileMutedTooltip: !0 }, () => {
                          (this.lastSpeakingWhileMutedNotificationTime = Date.now()), this.speakingWhileMutedTooltipTimeout.start(2000, () => this.setState({ shouldShowSpeakingWhileMutedTooltip: !1 }));
                      })
                    : (this.setState({ shouldShowSpeakingWhileMutedTooltip: !1 }), this.speakingWhileMutedTooltipTimeout.stop());
            }),
            eJ(this, 'renderNameTag', () => {
                let { currentUser: e } = this.props;
                return null == e
                    ? null
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)('div', {
                                  className: eX.panelTitleContainer,
                                  children: (0, r.jsx)(ez.Z, { children: eV.ZP.getName(e) })
                              }),
                              (0, r.jsx)('div', {
                                  className: eX.panelSubtextContainer,
                                  children: (0, r.jsx)(eH.Z, { children: this.renderStatus() })
                              })
                          ]
                      });
            });
    }
}
function e8(e) {
    let { selfDeaf: t, selfMute: n, awaitingRemote: i, serverMute: s, serverDeaf: a, suppress: o, shouldShowSpeakingWhileMutedTooltip: l, isEligibleForPomelo: c, webBuildOverride: d, handleMouseEnterMute: u, handleMouseLeaveMute: m, handleToggleSelfDeaf: g, handleToggleSelfMute: p, handleInputAudioContextMenu: h, handleOutputAudioContextMenu: b, handleOpenAccountSettings: N, handleOpenSettingsContextMenu: x, dismissibleContents: _, nameplate: E, accountContainerRef: j } = e,
        O = (0, ee.A)(E);
    return (0, r.jsxs)('div', {
        className: eX.buttons,
        style: O,
        children: [
            (0, r.jsx)(e5, {
                accountContainerRef: j,
                selfMute: n,
                serverMute: s,
                suppress: o,
                awaitingRemote: i,
                tooltipText: l ? eq.NW.string(eq.t['29gnR0']) : void 0,
                tooltipColor: l ? f.FGA.GREEN : void 0,
                tooltipForceOpen: l || void 0,
                onMouseEnter: u,
                onMouseLeave: m,
                onClick: p,
                onContextMenu: h,
                iconForeground: null != E ? eX.iconForeground : void 0,
                nameplate: E
            }),
            (0, r.jsx)(te, {
                selfDeaf: t,
                serverDeaf: a,
                onClick: g,
                onContextMenu: b,
                awaitingRemote: i,
                iconForeground: null != E ? eX.iconForeground : void 0,
                nameplate: E
            }),
            (0, r.jsx)(e9, {
                isEligibleForPomelo: c,
                webBuildOverride: d,
                onClick: N,
                onContextMenu: x,
                dismissibleContents: _.settings,
                iconForeground: null != E ? eX.iconForeground : void 0,
                nameplate: E
            })
        ]
    });
}
function e7() {
    var e;
    let t = (0, l.e7)([eD.default], () => eD.default.getCurrentUser()),
        n = (0, l.e7)([eS.default], () => eS.default.getId()),
        {
            activities: s,
            streaming: a,
            status: o
        } = (0, l.cj)([eP.Z], () => {
            let e = eP.Z.getActivities();
            return {
                activities: e,
                streaming:
                    null !=
                    e.find((e) => {
                        let { type: t } = e;
                        return t === eY.IIU.STREAMING;
                    }),
                status: eP.Z.getStatus()
            };
        }),
        d = (0, l.e7)([ev.Z], () => ev.Z.getAnyStreamForUser(n)),
        u = (0, O.Z)({ userId: n }),
        m = eV.ZP.useUserTag(t, { decoration: 'never' }),
        g = (0, l.e7)([eR.Z], () => eR.Z.hidePersonalInformation),
        p = (0, l.e7)([eA.Z, eT.Z], () => {
            let e = eA.Z.getChannelId();
            return null != e ? eT.Z.getChannel(e) : null;
        }),
        { mute: h, selfMute: N, suppress: x } = (0, eN.Z)(p),
        { selfDeaf: _, deaf: C } = (0, eb.Z)(p),
        S = (0, l.e7)([Z.C], () => {
            var e;
            return (0, w.fD)() ? (null === (e = Z.C.getCurrentBuildOverride().overrides) || void 0 === e ? void 0 : e.discord_web) : null;
        }),
        T = (0, l.e7)([eZ.ZP], () => eZ.ZP.getPremiumTypeSubscription()),
        I = (0, l.e7)([ey.Z], () => ey.Z.getSpeakingWhileMuted()),
        y = (0, l.e7)([eI.Z], () => eI.Z.hasLayers()),
        R = (0, f.s9z)(f.JQI) || y || eU.s.isDisallowPopupsSet(),
        D = (0, ei.b)(),
        k = (0, l.e7)([K.Z], () => null != K.Z.getAwaitingRemoteSessionInfo()),
        W = (0, el.D)(),
        L = (0, E.u)(),
        B = eM.ZP.canUsePremiumGuildMemberProfile(t),
        M = (null == t ? void 0 : null === (e = t.avatarDecoration) || void 0 === e ? void 0 : e.skuId) === eK.rL,
        { voiceActivityStatusEnabled: U } = (0, v.U)({ location: 'Account' }),
        { simplifiedSettingsEnabled: V } = (0, ef.Z)({ location: 'Account' }),
        G = (0, X.m)(),
        F = 'account';
    (0, j.j)({
        location: F + ' auto on',
        autoTrackExposure: !0
    }),
        (0, j.j)({
            location: F + ' auto off',
            autoTrackExposure: !1
        });
    let H = (0, l.e7)([eu.Z], () => eu.Z.hasHadOtherUserPlaySoundInSession()),
        Y = (function () {
            let e = (0, z.wE)(c.z.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2),
                [t, n] = (0, l.Wu)([es.Z], () => [es.Z.hasFetchedRelevance, es.Z.profileThemesRelevanceExceeded]),
                [r, s] = (0, l.Wu)([eZ.ZP], () => [eZ.ZP.hasFetchedMostRecentPremiumTypeSubscription(), eZ.ZP.getMostRecentPremiumTypeSubscription()]),
                { enabled: a } = ea.Z.useExperiment({ location: '08bd40_1' }, { autoTrackExposure: !0 }),
                o = i.useMemo(() => {
                    let e = new Date().getTime();
                    return null != s && (s.status === eY.O0b.ACTIVE || e - s.currentPeriodEnd.getTime() < e6);
                }, [s]);
            return (
                i.useEffect(() => {
                    (async () => {
                        if (!e && null == n && a) {
                            if (!r) {
                                await (0, b.ou)();
                                return;
                            }
                            !o && (t || (await (0, b.l0)()));
                        }
                    })();
                }, [a, n, e, r, t, o]),
                !e && !!a && !o && null != n && n
            );
        })(),
        { analyticsLocations: q } = (0, P.ZP)(A.Z.ACCOUNT),
        J = (0, $.K)({
            location: 'Account',
            user: t
        }),
        Q = {
            avatar: [],
            settings: []
        };
    return (
        !R && (Y && Q.settings.push(c.z.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2), W && (1 === L ? Q.settings.push(c.z.USER_SAFETY_CONSUMER_EDUCATION_MUTE) : Q.settings.push(c.z.USER_SAFETY_CONSUMER_EDUCATION_BLOCK)), H && Q.settings.push(c.z.SOUNDBOARD_VOLUME_EDUCATION), B && Q.settings.push(c.z.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK), M && Q.avatar.push(c.z.PREMIUM_SUBSCRIPTION_APRIL_MARKETING_DECO_TOOLTIP), G && Q.avatar.push(c.z.EXPIRING_STATUS_COACHMARK)),
        (0, r.jsx)(P.Gt, {
            value: q,
            children: (0, r.jsx)(e4, {
                currentUser: t,
                activities: s,
                applicationStream: d,
                voiceChannel: p,
                dismissibleContents: Q,
                userTag: m,
                hidePrivateData: g,
                occluded: R,
                premiumSubscription: T,
                selfDeaf: _,
                selfMute: N,
                serverDeaf: C,
                serverMute: h,
                speaking: u,
                speakingWhileMuted: I,
                status: o,
                streaming: a,
                suppress: x,
                webBuildOverride: S,
                awaitingRemote: k,
                isEligibleForPomelo: D,
                simplifiedCallSettingsEnabled: V,
                voiceActivityStatusEnabled: U,
                nameplate: J
            })
        })
    );
}
function e9(e) {
    let { webBuildOverride: t, isEligibleForPomelo: n, onClick: s, onContextMenu: a, dismissibleContents: o, iconForeground: l, nameplate: d } = e,
        u = i.useRef(null),
        m = f.ewm,
        g = (0, p.i)();
    m = null != t ? f.bgT : n ? f.Ncx : g.Component;
    let [h, b] = (0, Y.US)(o);
    return (0, r.jsx)(f.yRy, {
        targetElementRef: u,
        position: 'top',
        align: 'center',
        shouldShow: null != h,
        renderPopout: h === c.z.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2 ? () => (0, r.jsx)(eo.Z, {}) : h === c.z.USER_SAFETY_CONSUMER_EDUCATION_BLOCK ? () => (0, r.jsx)(ec.Z, { markAsDismissed: b }) : h === c.z.USER_SAFETY_CONSUMER_EDUCATION_MUTE ? () => (0, r.jsx)(ed.Z, { markAsDismissed: b }) : h === c.z.SOUNDBOARD_VOLUME_EDUCATION ? () => (0, r.jsx)(em.Z, { markAsDismissed: b }) : h === c.z.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK ? () => (0, r.jsx)(ep.Z, {}) : () => (0, r.jsx)(r.Fragment, {}),
        children: () =>
            (0, r.jsx)(
                eF.Z,
                e$(
                    eQ(
                        {
                            ref: u,
                            tooltipText: null != t ? eq.NW.formatToPlainString(eq.t.Gzh6ZG, { webBuildOverride: t.id }) : eq.NW.string(eq.t.cduTBA),
                            onClick: s,
                            onContextMenu: a,
                            icon: (0, r.jsx)(m, {
                                size: 'refresh_sm',
                                color: 'currentColor',
                                className: l
                            })
                        },
                        g.events
                    ),
                    { plated: null != d }
                )
            )
    });
}
function e5(e) {
    let { selfMute: t, serverMute: n, suppress: s, awaitingRemote: c, tooltipText: d, tooltipColor: u, tooltipForceOpen: p, iconForeground: b, onMouseEnter: N, onMouseLeave: x, onClick: _, onContextMenu: E, nameplate: j, accountContainerRef: O } = e,
        C = t || s || n,
        v = i.useRef(null),
        S = i.useRef(null),
        T = (0, m.O)(C ? 'unmute' : 'mute'),
        I = (0, g.P)(C ? 'unmute' : 'mute'),
        { activeVoice: y } = (0, eE.o)(),
        R = null != y,
        D = (0, e_.z)(y),
        Z = (0, l.e7)([eA.Z], () => eA.Z.isConnected()),
        { Component: w, events: k, play: L } = R ? I : T,
        B = n || s ? f.v0G : w,
        { mode: M } = (0, eh.ZP)({ location: 'RTC Microphone Button' }),
        { coloredIconsEnabled: U } = (0, ef.Z)({ location: 'RTC Microphone Button' }),
        V = null != d ? d : (0, W.Z)(t, n, s, c, M === eh.BK.GroupedButtonsRedMic),
        { analyticsLocations: G } = (0, P.ZP)(A.Z.AUDIO_INPUT_BUTTON),
        F = (0, ex.Hu)({
            location: A.Z.AUDIO_INPUT_BUTTON,
            autoTrackExposure: !0
        });
    i.useEffect(() => () => L(), [C, L]);
    let H = i.useCallback(
            (e) => {
                E(e, G);
            },
            [E, G]
        ),
        [z, Y] = i.useState(!1),
        K = i.useCallback((e) => {
            var t;
            if ((0, o.k)(null == e ? void 0 : e.target, Node) && (null === (t = v.current) || void 0 === t ? void 0 : t.contains(e.target))) return h.F;
            Y(!1);
        }, []),
        [q, X] = i.useState(!1);
    return (
        i.useEffect(() => {
            let e;
            return (
                Z &&
                    R &&
                    (e = setTimeout(() => {
                        X(!0), (e = setTimeout(() => X(!1), e2));
                    }, 300)),
                () => {
                    X(!1), clearTimeout(e);
                }
            );
        }, [Z]),
        (0, r.jsx)(P.Gt, {
            value: G,
            children: (0, r.jsxs)('div', {
                ref: v,
                className: eX.micButtonParent,
                children: [
                    (0, r.jsx)(eF.Z, {
                        tooltipText: V,
                        tooltipColor: u,
                        tooltipForceOpen: p,
                        plated: null != j,
                        onMouseEnter: () => {
                            N(), k.onMouseEnter();
                        },
                        onMouseLeave: () => {
                            x(), k.onMouseLeave();
                        },
                        icon: (0, r.jsx)(B, {
                            size: 'custom',
                            width: 20,
                            height: 20,
                            color: C ? f.TVs.colors.STATUS_DANGER : 'currentColor',
                            className: b
                        }),
                        onClick: _,
                        onContextMenu: H,
                        role: 'switch',
                        className: a()({ [eX.micButtonWithMenu]: F }),
                        redGlow: C && U,
                        'aria-label': eq.NW.string(eq.t['w4m94+']),
                        'aria-checked': C,
                        disabled: c
                    }),
                    F &&
                        (0, r.jsx)(f.yRy, {
                            targetElementRef: S,
                            position: 'top',
                            align: 'left',
                            nudgeAlignIntoViewport: !1,
                            overridePositionRef: O,
                            animation: f.yRy.Animation.FADE,
                            useMouseEnter: !0,
                            ignoreModalClicks: !0,
                            onRequestOpen: ej.r5,
                            onRequestClose: K,
                            shouldShow: z,
                            renderPopout: (e) => {
                                let { closePopout: t } = e;
                                return (0, r.jsx)(eC.l, { onSettingsButtonClick: t });
                            },
                            children: (e, t) => {
                                var { onClick: n } = e,
                                    i = (function (e, t) {
                                        if (null == e) return {};
                                        var n,
                                            r,
                                            i = (function (e, t) {
                                                if (null == e) return {};
                                                var n,
                                                    r,
                                                    i = {},
                                                    s = Object.keys(e);
                                                for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                                                return i;
                                            })(e, t);
                                        if (Object.getOwnPropertySymbols) {
                                            var s = Object.getOwnPropertySymbols(e);
                                            for (r = 0; r < s.length; r++) (n = s[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                                        }
                                        return i;
                                    })(e, ['onClick']),
                                    { isShown: s } = t;
                                let o = s ? f.u04 : f.CJ0;
                                return (0, r.jsx)('div', {
                                    children: (0, r.jsx)(eO.B, {
                                        targetElementRef: S,
                                        onCTA: () => Y(!0),
                                        canBeShown: !s,
                                        children: (e, t) =>
                                            (0, r.jsx)(
                                                eF.Z,
                                                eQ(
                                                    {
                                                        ref: S,
                                                        plated: null != j,
                                                        tooltipForceOpen: q,
                                                        tooltipColor: q ? f.FGA.GREEN : void 0,
                                                        tooltipContentClassName: q ? eX.voiceFilterWarning : void 0,
                                                        tooltipText: q
                                                            ? (0, r.jsxs)(r.Fragment, {
                                                                  children: [
                                                                      (0, r.jsx)('img', {
                                                                          alt: null != D ? eq.NW.string(D.name) : '',
                                                                          src: null == D ? void 0 : D.iconURL,
                                                                          draggable: !1
                                                                      }),
                                                                      (0, r.jsx)(f.Text, {
                                                                          variant: 'text-sm/medium',
                                                                          color: 'always-white',
                                                                          children: eq.NW.string(eq.t.VlC1dX)
                                                                      })
                                                                  ]
                                                              })
                                                            : eq.NW.string(eq.t.Hapb4O),
                                                        icon: (0, r.jsx)(o, {
                                                            className: eX.buttonChevronIcon,
                                                            size: 'custom',
                                                            width: 12,
                                                            height: 12,
                                                            color: U && C ? f.TVs.colors.STATUS_DANGER : f.TVs.colors.TEXT_NORMAL
                                                        }),
                                                        role: 'button',
                                                        className: a()([eX.buttonChevron], { [eX.redGlow]: C && U }),
                                                        redGlow: C && U,
                                                        'aria-label': eq.NW.string(eq.t.Hapb4O),
                                                        disabled: c,
                                                        onClick: (e) => {
                                                            null == t || t(), n(e), Y(!z);
                                                        }
                                                    },
                                                    i
                                                )
                                            )
                                    })
                                });
                            }
                        })
                ]
            })
        })
    );
}
function te(e) {
    let { selfDeaf: t, serverDeaf: n, awaitingRemote: s, onClick: o, onContextMenu: l, iconForeground: c, nameplate: d } = e,
        m = t || n,
        {
            Component: g,
            play: p,
            events: { onMouseEnter: h, onMouseLeave: b }
        } = (0, u.l)(m ? 'undeafen' : 'deafen'),
        N = n ? f.Vm4 : g,
        { coloredIconsEnabled: x } = (0, ef.Z)({ location: 'RTC Microphone Button' }),
        { analyticsLocations: _ } = (0, P.ZP)(A.Z.AUDIO_OUTPUT_BUTTON);
    i.useEffect(() => () => p(), [m, p]);
    let E = i.useCallback(
        (e) => {
            l(e, _);
        },
        [l, _]
    );
    return (0, r.jsx)(P.Gt, {
        value: _,
        children: (0, r.jsx)(eF.Z, {
            plated: null != d,
            tooltipText: (0, k.Z)(t, n, s),
            onMouseEnter: h,
            onMouseLeave: b,
            icon: (0, r.jsx)(N, {
                size: 'custom',
                width: 20,
                height: 20,
                color: m ? f.TVs.colors.STATUS_DANGER : 'currentColor',
                className: c
            }),
            onClick: o,
            onContextMenu: E,
            innerClassName: a()({ [eX.redIcon]: n }),
            iconForeground: m ? eX.strikethrough : void 0,
            role: 'switch',
            redGlow: x && m,
            'aria-label': eq.NW.string(eq.t.wjcRFR),
            'aria-checked': m,
            disabled: s
        })
    });
}
