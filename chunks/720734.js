n.d(t, {
    Z: () => e4,
    m: () => e3
}),
    n(47120),
    n(653041);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(374470),
    o = n(442837),
    c = n(704215),
    d = n(846519),
    u = n(400354),
    m = n(652844),
    g = n(747906),
    p = n(789639),
    h = n(930295),
    f = n(481060),
    x = n(355467),
    N = n(239091),
    b = n(230711),
    _ = n(410575),
    E = n(941129),
    j = n(634894),
    C = n(586902),
    O = n(980591),
    S = n(468363),
    v = n(326255),
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
    V = n(64220),
    G = n(427217),
    F = n(540059),
    H = n(605236),
    z = n(243778),
    Y = n(258609),
    K = n(427347),
    q = n(50697),
    X = n(331541),
    J = n(90042),
    Q = n(850020),
    $ = n(379839),
    ee = n(359135),
    et = n(516817),
    en = n(440051),
    er = n(332473),
    ei = n(240504),
    es = n(637906),
    ea = n(39370),
    el = n(19199),
    eo = n(866483),
    ec = n(14357),
    ed = n(763296),
    eu = n(640806),
    em = n(184301),
    eg = n(52538),
    ep = n(861254),
    eh = n(221241),
    ef = n(879815),
    ex = n(294629),
    eN = n(875527),
    eb = n(56848),
    e_ = n(378441),
    eE = n(358820),
    ej = n(469887),
    eC = n(306609),
    eO = n(199902),
    eS = n(314897),
    ev = n(592125),
    eT = n(819640),
    eI = n(131951),
    ey = n(19780),
    eA = n(885110),
    eP = n(246946),
    eR = n(594174),
    eD = n(78839),
    eZ = n(626135),
    ew = n(768581),
    ek = n(572004),
    eW = n(585483),
    eL = n(70956),
    eB = n(74538),
    eM = n(374023),
    eU = n(51144),
    eV = n(998502),
    eG = n(870569),
    eF = n(345243),
    eH = n(115530),
    ez = n(981631),
    eY = n(215023),
    eK = n(388032),
    eq = n(615866);
function eX(e, t, n) {
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
function eJ(e) {
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
                eX(e, t, n[t]);
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
let e$ = eV.ZP.getEnableHardwareAcceleration() ? f.Xo$ : f.qEK,
    e0 = 2 * eL.Z.Millis.MINUTE,
    e1 = 3 * eL.Z.Millis.SECOND,
    e2 = 30 * eL.Z.Millis.DAY;
function e6(e) {
    let { speaking: t, streaming: n, currentUser: s, status: l, handleClick: o, handleMouseLeave: c, renderNameTag: d, nameplate: u, 'data-jump-section': m } = e,
        g = i.useRef(null),
        p = (0, F.Q3)('RTC Avatar'),
        { coloredIconsEnabled: h } = (0, eh.Z)({ location: 'RTC Avatar' }),
        x = (0, R.Z)(null == s ? void 0 : s.avatarDecoration),
        N = (0, ew.NZ)({
            avatarDecoration: x,
            size: (0, D.y9)(f.EFr.SIZE_32)
        }),
        b = (0, f.dQu)(f.TVs.modules.guildbar.AVATAR_SIZE),
        {
            updateOpenPopoutRef: E,
            highlightBadge: j,
            setHighlightBadge: C
        } = (function () {
            let e = i.useRef(null),
                t = i.useCallback((t) => {
                    e.current = () => {
                        t.onMouseDown(), t.onClick();
                    };
                }, []),
                [n, r] = i.useState(),
                [s, a] = i.useState(!1);
            return (
                (0, O.Z)(() => a(!0), 750),
                i.useEffect(() => {
                    let t = (t) => {
                        var n;
                        let { highlightBadge: i } = t;
                        null != i && r(i), null === (n = e.current) || void 0 === n || n.call(e);
                    };
                    return (
                        eW.S.subscribe(ez.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, t),
                        () => {
                            eW.S.unsubscribe(ez.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, t);
                        }
                    );
                }),
                {
                    updateOpenPopoutRef: t,
                    highlightBadge: s ? n : void 0,
                    setHighlightBadge: r
                }
            );
        })(),
        S = (0, $.A)(u),
        { showTempStatusOptions: v } = en.Y.useExperiment({ location: 'AvatarWithPopout' }, { autoTrackExposure: !1 });
    return null == s
        ? null
        : (0, r.jsx)(_.Z, {
              object: ez.qAy.AVATAR,
              children: (0, r.jsx)(f.yRy, {
                  targetElementRef: g,
                  clickTrap: !0,
                  renderPopout: (e) => {
                      let { closePopout: t, setPopoutRef: n } = e;
                      return (0, r.jsx)('div', {
                          className: eq.accountProfilePopoutWrapper,
                          children: (0, r.jsx)(X.Z, {
                              currentUser: s,
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
                      c(), C(void 0);
                  },
                  preload: () =>
                      (0, em.Z)(s, void 0, {
                          withMutualGuilds: !1,
                          withMutualFriends: !1
                      }),
                  children: (e) => (
                      E(e),
                      (0, r.jsxs)(
                          f.P3F,
                          eQ(
                              eJ(
                                  {
                                      innerRef: g,
                                      style: S
                                  },
                                  e
                              ),
                              {
                                  onClick: (t) => {
                                      var n;
                                      null === (n = e.onClick) || void 0 === n || n.call(e, t), null == o || o(t);
                                  },
                                  'aria-label': eK.NW.string(eK.t['3Uj+2t']),
                                  'data-jump-section': p ? m : void 0,
                                  className: a()(eq.avatarWrapper, !p && h && eq.experiment, { [eq.plated]: null != u }),
                                  children: [
                                      (0, r.jsx)(e$, {
                                          size: p ? f.EFr['SIZE_'.concat(b)] : f.EFr.SIZE_32,
                                          src: s.getAvatarURL(void 0, p ? b - 4 : 32, !1),
                                          avatarDecoration: N,
                                          'aria-label': s.username,
                                          status: n ? ez.Skl.STREAMING : l,
                                          isSpeaking: t,
                                          className: eq.avatar,
                                          pulseStatusIcon: v
                                      }),
                                      (0, r.jsx)('div', {
                                          className: a()(eq.nameTag, { [eq.canCopy]: ek.wS }),
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
class e3 extends i.PureComponent {
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
            t = [eK.NW.string(eK.t.MSaeTU), eK.NW.string(eK.t.UmrCw8), eK.NW.string(eK.t.gKE0Ji), eK.NW.string(eK.t['4DSKbm']), eK.NW.string(eK.t['+8ENdX']), eK.NW.string(eK.t.GlWHv7), eK.NW.string(eK.t.hIzxU1), eK.NW.string(eK.t['26uMPD']), eK.NW.string(eK.t.uFs7R0), eK.NW.string(eK.t.bLXdcX), eK.NW.string(eK.t.gPg9fX)],
            n = Math.min(Math.max(0, e - 1), t.length - 1);
        return (0, r.jsx)(f.UkV, {
            isShaking: this.isCopiedStreakGodlike,
            children: t[n]
        });
    }
    renderStatus() {
        let { hovered: e } = this.state,
            { activities: t, applicationStream: n, currentUser: i, status: s, userTag: a, voiceActivityStatusEnabled: l, voiceChannel: o } = this.props;
        if (null == i) return null;
        if (
            (0, v.Z)({
                activities: t,
                status: s,
                applicationStream: n,
                voiceChannel: l ? o : void 0
            })
        )
            return (0, r.jsx)(y.Z, {
                hoverText: a,
                forceHover: e,
                children: (0, r.jsx)(T.Z, {
                    user: i,
                    activities: t,
                    applicationStream: n,
                    voiceChannel: l ? o : void 0,
                    textClassName: eq.activityStatusText,
                    hideTooltip: !0
                })
            });
        let c =
            null == t
                ? void 0
                : t.find((e) => {
                      let { type: t } = e;
                      return t === ez.IIU.CUSTOM_STATUS;
                  });
        return null != c
            ? (0, r.jsx)(y.Z, {
                  hoverText: a,
                  forceHover: e,
                  children: (0, r.jsx)(G.Z, {
                      activity: c,
                      emojiClassName: eq.emoji,
                      className: eq.customStatus
                  })
              })
            : null != s && s !== ez.Skl.UNKNOWN && i.isPomelo()
              ? (0, r.jsx)(y.Z, {
                    hoverText: a,
                    forceHover: e,
                    children: (0, r.jsx)(I.Z, { text: eU.ZP.humanizeStatus(s) })
                })
              : a;
    }
    renderAvatarWithPopout(e) {
        let {
            focusSectionProps: { 'data-jump-section': t },
            onClick: n
        } = e;
        return (0, r.jsx)(
            e6,
            eQ(eJ({}, this.props), {
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
            : (0, r.jsx)(z.ZP, {
                  contentTypes: n.avatar,
                  children: (t) => {
                      let { visibleContent: n, markAsDismissed: i } = t;
                      switch (n) {
                          case c.z.PREMIUM_SUBSCRIPTION_APRIL_MARKETING_DECO_TOOLTIP:
                              return (0, r.jsx)(V.Z, {
                                  markAsDismissed: i,
                                  children: () => this.renderAvatarWithPopout({ focusSectionProps: e })
                              });
                          case c.z.EXPIRING_STATUS_COACHMARK:
                              return (0, r.jsx)(J.Z, {
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
                                  className: eq.container,
                                  onMouseEnter: this.handleMouseEnter,
                                  onMouseLeave: this.handleMouseLeave,
                                  children: [
                                      (0, r.jsx)(et.Z, {
                                          nameplate: t,
                                          hovered: n,
                                          placement: ee.i.ACCOUNT
                                      }),
                                      this.renderNameZone(e),
                                      (0, r.jsx)(
                                          e8,
                                          eQ(eJ({}, this.props, this.state), {
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
                              (0, r.jsx)(K.Z, {})
                          ]
                      })
              });
    }
    constructor(...e) {
        super(...e),
            eX(this, 'copiedTimeout', new d.V7()),
            eX(this, 'copiedDecayTimeout', new d.V7()),
            eX(this, 'speakingWhileMutedTooltipTimeout', new d.V7()),
            eX(this, 'lastSpeakingWhileMutedNotificationTime', void 0),
            eX(this, 'state', {
                hovered: !1,
                copiedStreak: 0,
                shouldShowNametagTooltip: !1,
                shouldShowCopiedFeedback: !1,
                shouldShowSpeakingWhileMutedTooltip: !1,
                hoveringOnMute: !1
            }),
            eX(this, 'handleToggleSelfMute', () => {
                let { serverMute: e, suppress: t, selfMute: n } = this.props;
                (0, B.Z)(e, t, ez.jXE.ACCOUNT_PANEL), (0, M.v)(A.Z.ACCOUNT, M.d.MIC, n);
            }),
            eX(this, 'handleToggleSelfDeaf', () => {
                let { serverDeaf: e, selfDeaf: t } = this.props;
                (0, L.Z)(e, ez.jXE.ACCOUNT_PANEL), (0, M.v)(A.Z.ACCOUNT, M.d.DEAFEN, !t);
            }),
            eX(this, 'handleOpenAccountSettings', () => {
                this.handleOpenSettings();
            }),
            eX(this, 'handleOpenSettings', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ez.oAB.ACCOUNT,
                    t = arguments.length > 1 ? arguments[1] : void 0,
                    n = arguments.length > 2 ? arguments[2] : void 0;
                b.Z.open(e, t, n);
            }),
            eX(this, 'handleOpenSettingsContextMenu', (e) => {
                let { currentUser: t } = this.props;
                null != t &&
                    (0, N.jW)(e, async () => {
                        let { default: e } = await n.e('2535').then(n.bind(n, 923422));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                eQ(eJ({}, n), {
                                    user: t,
                                    premiumSubscription: this.props.premiumSubscription,
                                    webBuildOverride: this.props.webBuildOverride,
                                    onInteraction: (0, U.u)('UserSettingsCogContextMenu', A.Z.ACCOUNT)
                                })
                            );
                    });
            }),
            eX(this, 'audioOnInteractionHandler', (0, U.u)('AudioDeviceMenu', A.Z.ACCOUNT)),
            eX(this, 'handleInputAudioContextMenu', (e, t) => {
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
            eX(this, 'handleOutputAudioContextMenu', (e, t) => {
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
            eX(this, 'handleMouseEnter', () => {
                this.setState({ hovered: !0 });
            }),
            eX(this, 'handleMouseLeave', () => {
                this.setState({ hovered: !1 });
            }),
            eX(this, 'handleMouseEnterMute', () => {
                this.setState({
                    hoveringOnMute: !0,
                    shouldShowSpeakingWhileMutedTooltip: !1
                }),
                    this.speakingWhileMutedTooltipTimeout.stop();
            }),
            eX(this, 'handleMouseLeaveMute', () => {
                this.setState({ hoveringOnMute: !1 });
            }),
            eX(this, 'handleCopyTag', () => {
                let { currentUser: e } = this.props,
                    { shouldShowNametagTooltip: t, copiedStreak: n } = this.state;
                if (null == e) return;
                (0, ek.JG)(
                    eU.ZP.getUserTag(e, {
                        decoration: 'never',
                        identifiable: 'always'
                    })
                ),
                    eZ.default.track(ez.rMx.TEXT_COPIED, { type: 'User Tag' });
                let r = {
                    shouldShowCopiedFeedback: !0,
                    shouldShowNametagTooltip: !0
                };
                t || (r.copiedStreak = n + 1),
                    this.setState(r, () => {
                        this.copiedTimeout.start(1000, () => this.setState({ shouldShowNametagTooltip: !1 })), this.copiedDecayTimeout.start(2000, () => this.setState({ copiedStreak: 0 }));
                    });
            }),
            eX(this, 'handleOccludedChanged', () => {
                let { occluded: e } = this.props;
                e &&
                    this.setState({
                        shouldShowNametagTooltip: !1,
                        shouldShowSpeakingWhileMutedTooltip: !1
                    });
            }),
            eX(this, 'handleSpeakingWhileMutedChanged', () => {
                let { selfMute: e, serverMute: t, suppress: n, speakingWhileMuted: r, occluded: i } = this.props,
                    { hoveringOnMute: s } = this.state,
                    a = void 0 === this.lastSpeakingWhileMutedNotificationTime || Date.now() - this.lastSpeakingWhileMutedNotificationTime > e0;
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
            eX(this, 'renderNameTag', () => {
                let { currentUser: e } = this.props;
                return null == e
                    ? null
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)('div', {
                                  className: eq.panelTitleContainer,
                                  children: (0, r.jsx)(eH.Z, { children: eU.ZP.getName(e) })
                              }),
                              (0, r.jsx)('div', {
                                  className: eq.panelSubtextContainer,
                                  children: (0, r.jsx)(eF.Z, { children: this.renderStatus() })
                              })
                          ]
                      });
            });
    }
}
function e8(e) {
    let { selfDeaf: t, selfMute: n, awaitingRemote: i, serverMute: s, serverDeaf: a, suppress: l, shouldShowSpeakingWhileMutedTooltip: o, isEligibleForPomelo: c, webBuildOverride: d, handleMouseEnterMute: u, handleMouseLeaveMute: m, handleToggleSelfDeaf: g, handleToggleSelfMute: p, handleInputAudioContextMenu: h, handleOutputAudioContextMenu: x, handleOpenAccountSettings: N, handleOpenSettingsContextMenu: b, dismissibleContents: _, nameplate: E } = e,
        j = (0, $.A)(E);
    return (0, r.jsxs)('div', {
        className: eq.buttons,
        style: j,
        children: [
            (0, r.jsx)(e9, {
                selfMute: n,
                serverMute: s,
                suppress: l,
                awaitingRemote: i,
                tooltipText: o ? eK.NW.string(eK.t['29gnR0']) : void 0,
                tooltipColor: o ? f.FGA.GREEN : void 0,
                tooltipForceOpen: o || void 0,
                onMouseEnter: u,
                onMouseLeave: m,
                onClick: p,
                onContextMenu: h,
                iconForeground: null != E ? eq.iconForeground : void 0,
                nameplate: E
            }),
            (0, r.jsx)(e5, {
                selfDeaf: t,
                serverDeaf: a,
                onClick: g,
                onContextMenu: x,
                awaitingRemote: i,
                iconForeground: null != E ? eq.iconForeground : void 0,
                nameplate: E
            }),
            (0, r.jsx)(e7, {
                isEligibleForPomelo: c,
                webBuildOverride: d,
                onClick: N,
                onContextMenu: b,
                dismissibleContents: _.settings,
                iconForeground: null != E ? eq.iconForeground : void 0,
                nameplate: E
            })
        ]
    });
}
function e4() {
    var e;
    let t = (0, o.e7)([eR.default], () => eR.default.getCurrentUser()),
        n = (0, o.e7)([eS.default], () => eS.default.getId()),
        {
            activities: s,
            streaming: a,
            status: l
        } = (0, o.cj)([eA.Z], () => {
            let e = eA.Z.getActivities();
            return {
                activities: e,
                streaming:
                    null !=
                    e.find((e) => {
                        let { type: t } = e;
                        return t === ez.IIU.STREAMING;
                    }),
                status: eA.Z.getStatus()
            };
        }),
        d = (0, o.e7)([eO.Z], () => eO.Z.getAnyStreamForUser(n)),
        u = (0, C.Z)({ userId: n }),
        m = eU.ZP.useUserTag(t, { decoration: 'never' }),
        g = (0, o.e7)([eP.Z], () => eP.Z.hidePersonalInformation),
        p = (0, o.e7)([ey.Z, ev.Z], () => {
            let e = ey.Z.getChannelId();
            return null != e ? ev.Z.getChannel(e) : null;
        }),
        { mute: h, selfMute: N, suppress: b } = (0, ex.Z)(p),
        { selfDeaf: _, deaf: O } = (0, ef.Z)(p),
        v = (0, o.e7)([Z.C], () => {
            var e;
            return (0, w.fD)() ? (null === (e = Z.C.getCurrentBuildOverride().overrides) || void 0 === e ? void 0 : e.discord_web) : null;
        }),
        T = (0, o.e7)([eD.ZP], () => eD.ZP.getPremiumTypeSubscription()),
        I = (0, o.e7)([eI.Z], () => eI.Z.getSpeakingWhileMuted()),
        y = (0, o.e7)([eT.Z], () => eT.Z.hasLayers()),
        R = (0, f.s9z)(f.JQI) || y || eM.s.isDisallowPopupsSet(),
        D = (0, er.b)(),
        k = (0, o.e7)([Y.Z], () => null != Y.Z.getAwaitingRemoteSessionInfo()),
        W = (0, el.D)(),
        L = (0, E.u)(),
        B = eB.ZP.canUsePremiumGuildMemberProfile(t),
        M = (null == t ? void 0 : null === (e = t.avatarDecoration) || void 0 === e ? void 0 : e.skuId) === eY.rL,
        { voiceActivityStatusEnabled: U } = (0, S.U)({ location: 'Account' }),
        { simplifiedSettingsEnabled: V } = (0, eh.Z)({ location: 'Account' }),
        G = (0, q.m)(),
        F = 'account';
    (0, j.j)({
        location: F + ' auto on',
        autoTrackExposure: !0
    }),
        (0, j.j)({
            location: F + ' auto off',
            autoTrackExposure: !1
        });
    let z = (0, o.e7)([ed.Z], () => ed.Z.hasHadOtherUserPlaySoundInSession()),
        K = (function () {
            let e = (0, H.wE)(c.z.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2),
                [t, n] = (0, o.Wu)([ei.Z], () => [ei.Z.hasFetchedRelevance, ei.Z.profileThemesRelevanceExceeded]),
                [r, s] = (0, o.Wu)([eD.ZP], () => [eD.ZP.hasFetchedMostRecentPremiumTypeSubscription(), eD.ZP.getMostRecentPremiumTypeSubscription()]),
                { enabled: a } = es.Z.useExperiment({ location: '08bd40_1' }, { autoTrackExposure: !0 }),
                l = i.useMemo(() => {
                    let e = new Date().getTime();
                    return null != s && (s.status === ez.O0b.ACTIVE || e - s.currentPeriodEnd.getTime() < e2);
                }, [s]);
            return (
                i.useEffect(() => {
                    (async () => {
                        if (!e && null == n && a) {
                            if (!r) {
                                await (0, x.ou)();
                                return;
                            }
                            !l && (t || (await (0, x.l0)()));
                        }
                    })();
                }, [a, n, e, r, t, l]),
                !e && !!a && !l && null != n && n
            );
        })(),
        { analyticsLocations: X } = (0, P.ZP)(A.Z.ACCOUNT),
        J = (0, Q.K)({
            location: 'Account',
            user: t
        }),
        $ = {
            avatar: [],
            settings: []
        };
    return (
        !R && (K && $.settings.push(c.z.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2), W && (1 === L ? $.settings.push(c.z.USER_SAFETY_CONSUMER_EDUCATION_MUTE) : $.settings.push(c.z.USER_SAFETY_CONSUMER_EDUCATION_BLOCK)), z && $.settings.push(c.z.SOUNDBOARD_VOLUME_EDUCATION), B && $.settings.push(c.z.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK), M && $.avatar.push(c.z.PREMIUM_SUBSCRIPTION_APRIL_MARKETING_DECO_TOOLTIP), G && $.avatar.push(c.z.EXPIRING_STATUS_COACHMARK)),
        (0, r.jsx)(P.Gt, {
            value: X,
            children: (0, r.jsx)(e3, {
                currentUser: t,
                activities: s,
                applicationStream: d,
                voiceChannel: p,
                dismissibleContents: $,
                userTag: m,
                hidePrivateData: g,
                occluded: R,
                premiumSubscription: T,
                selfDeaf: _,
                selfMute: N,
                serverDeaf: O,
                serverMute: h,
                speaking: u,
                speakingWhileMuted: I,
                status: l,
                streaming: a,
                suppress: b,
                webBuildOverride: v,
                awaitingRemote: k,
                isEligibleForPomelo: D,
                simplifiedCallSettingsEnabled: V,
                voiceActivityStatusEnabled: U,
                nameplate: J
            })
        })
    );
}
function e7(e) {
    let { webBuildOverride: t, isEligibleForPomelo: n, onClick: s, onContextMenu: a, dismissibleContents: l, iconForeground: o, nameplate: d } = e,
        u = i.useRef(null),
        m = f.ewm,
        g = (0, p.i)();
    m = null != t ? f.bgT : n ? f.Ncx : g.Component;
    let [h, x] = (0, z.US)(l);
    return (0, r.jsx)(f.yRy, {
        targetElementRef: u,
        position: 'top',
        align: 'center',
        shouldShow: null != h,
        renderPopout: h === c.z.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2 ? () => (0, r.jsx)(ea.Z, {}) : h === c.z.USER_SAFETY_CONSUMER_EDUCATION_BLOCK ? () => (0, r.jsx)(eo.Z, { markAsDismissed: x }) : h === c.z.USER_SAFETY_CONSUMER_EDUCATION_MUTE ? () => (0, r.jsx)(ec.Z, { markAsDismissed: x }) : h === c.z.SOUNDBOARD_VOLUME_EDUCATION ? () => (0, r.jsx)(eu.Z, { markAsDismissed: x }) : h === c.z.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK ? () => (0, r.jsx)(eg.Z, {}) : () => (0, r.jsx)(r.Fragment, {}),
        children: () =>
            (0, r.jsx)(
                eG.Z,
                eQ(
                    eJ(
                        {
                            ref: u,
                            tooltipText: null != t ? eK.NW.formatToPlainString(eK.t.Gzh6ZG, { webBuildOverride: t.id }) : eK.NW.string(eK.t.cduTBA),
                            onClick: s,
                            onContextMenu: a,
                            icon: (0, r.jsx)(m, {
                                size: 'refresh_sm',
                                color: 'currentColor',
                                className: o
                            })
                        },
                        g.events
                    ),
                    { plated: null != d }
                )
            )
    });
}
function e9(e) {
    let { selfMute: t, serverMute: n, suppress: s, awaitingRemote: c, tooltipText: d, tooltipColor: u, tooltipForceOpen: p, iconForeground: x, onMouseEnter: N, onMouseLeave: b, onClick: _, onContextMenu: E, nameplate: j } = e,
        C = t || s || n,
        O = i.useRef(null),
        S = i.useRef(null),
        v = (0, m.O)(C ? 'unmute' : 'mute'),
        T = (0, g.P)(C ? 'unmute' : 'mute'),
        { activeVoice: I } = (0, e_.o)(),
        y = null != I,
        R = (0, eb.z)(I),
        D = (0, o.e7)([ey.Z], () => ey.Z.isConnected()),
        { Component: Z, events: w, play: k } = y ? T : v,
        L = n || s ? f.v0G : Z,
        { mode: B } = (0, ep.ZP)({ location: 'RTC Microphone Button' }),
        { coloredIconsEnabled: M } = (0, eh.Z)({ location: 'RTC Microphone Button' }),
        U = null != d ? d : (0, W.Z)(t, n, s, c, B === ep.BK.GroupedButtonsRedMic),
        { analyticsLocations: V } = (0, P.ZP)(A.Z.AUDIO_INPUT_BUTTON),
        G = (0, eN.Hu)({
            location: A.Z.AUDIO_INPUT_BUTTON,
            autoTrackExposure: !0
        });
    i.useEffect(() => () => k(), [C, k]);
    let F = i.useCallback(
            (e) => {
                E(e, V);
            },
            [E, V]
        ),
        [H, z] = i.useState(!1),
        Y = i.useCallback((e) => {
            var t;
            if ((0, l.k)(null == e ? void 0 : e.target, Node) && (null === (t = O.current) || void 0 === t ? void 0 : t.contains(e.target))) return h.F;
            z(!1);
        }, []),
        [K, q] = i.useState(!1);
    return (
        i.useEffect(() => {
            let e;
            return (
                D &&
                    y &&
                    (e = setTimeout(() => {
                        q(!0), (e = setTimeout(() => q(!1), e1));
                    }, 300)),
                () => {
                    q(!1), clearTimeout(e);
                }
            );
        }, [D]),
        (0, r.jsx)(P.Gt, {
            value: V,
            children: (0, r.jsxs)('div', {
                ref: O,
                className: eq.micButtonParent,
                children: [
                    (0, r.jsx)(eG.Z, {
                        tooltipText: U,
                        tooltipColor: u,
                        tooltipForceOpen: p,
                        plated: null != j,
                        onMouseEnter: () => {
                            N(), w.onMouseEnter();
                        },
                        onMouseLeave: () => {
                            b(), w.onMouseLeave();
                        },
                        icon: (0, r.jsx)(L, {
                            size: 'custom',
                            width: 20,
                            height: 20,
                            color: C ? f.TVs.colors.STATUS_DANGER : 'currentColor',
                            className: x
                        }),
                        onClick: _,
                        onContextMenu: F,
                        role: 'switch',
                        className: a()({ [eq.micButtonWithMenu]: G }),
                        redGlow: C && M,
                        'aria-label': eK.NW.string(eK.t['w4m94+']),
                        'aria-checked': C,
                        disabled: c
                    }),
                    G &&
                        (0, r.jsx)(f.yRy, {
                            targetElementRef: S,
                            position: 'top',
                            align: 'center',
                            animation: f.yRy.Animation.FADE,
                            useMouseEnter: !0,
                            ignoreModalClicks: !0,
                            onRequestOpen: eE.r5,
                            onRequestClose: Y,
                            shouldShow: H,
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
                                let l = s ? f.u04 : f.CJ0;
                                return (0, r.jsx)('div', {
                                    children: (0, r.jsx)(ej.B, {
                                        onCTA: () => z(!0),
                                        canBeShown: !s,
                                        children: (e, t) =>
                                            (0, r.jsx)(
                                                eG.Z,
                                                eJ(
                                                    {
                                                        ref: S,
                                                        plated: null != j,
                                                        tooltipForceOpen: K,
                                                        tooltipColor: K ? f.FGA.GREEN : void 0,
                                                        tooltipContentClassName: K ? eq.voiceFilterWarning : void 0,
                                                        tooltipText: K
                                                            ? (0, r.jsxs)(r.Fragment, {
                                                                  children: [
                                                                      (0, r.jsx)('img', {
                                                                          alt: null != R ? eK.NW.string(R.name) : '',
                                                                          src: null == R ? void 0 : R.iconURL,
                                                                          draggable: !1
                                                                      }),
                                                                      (0, r.jsx)(f.Text, {
                                                                          variant: 'text-sm/medium',
                                                                          color: 'always-white',
                                                                          children: eK.NW.string(eK.t.VlC1dX)
                                                                      })
                                                                  ]
                                                              })
                                                            : eK.NW.string(eK.t.Hapb4O),
                                                        icon: (0, r.jsx)(l, {
                                                            className: eq.buttonChevronIcon,
                                                            size: 'custom',
                                                            width: 12,
                                                            height: 12,
                                                            color: M && C ? f.TVs.colors.STATUS_DANGER : f.TVs.colors.TEXT_NORMAL
                                                        }),
                                                        role: 'button',
                                                        className: a()([eq.buttonChevron], { [eq.redGlow]: C && M }),
                                                        redGlow: C && M,
                                                        'aria-label': eK.NW.string(eK.t.Hapb4O),
                                                        disabled: c,
                                                        onClick: (e) => {
                                                            null == t || t(), n(e), z(!H);
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
function e5(e) {
    let { selfDeaf: t, serverDeaf: n, awaitingRemote: s, onClick: l, onContextMenu: o, iconForeground: c, nameplate: d } = e,
        m = t || n,
        {
            Component: g,
            play: p,
            events: { onMouseEnter: h, onMouseLeave: x }
        } = (0, u.l)(m ? 'undeafen' : 'deafen'),
        N = n ? f.Vm4 : g,
        { coloredIconsEnabled: b } = (0, eh.Z)({ location: 'RTC Microphone Button' }),
        { analyticsLocations: _ } = (0, P.ZP)(A.Z.AUDIO_OUTPUT_BUTTON);
    i.useEffect(() => () => p(), [m, p]);
    let E = i.useCallback(
        (e) => {
            o(e, _);
        },
        [o, _]
    );
    return (0, r.jsx)(P.Gt, {
        value: _,
        children: (0, r.jsx)(eG.Z, {
            plated: null != d,
            tooltipText: (0, k.Z)(t, n, s),
            onMouseEnter: h,
            onMouseLeave: x,
            icon: (0, r.jsx)(N, {
                size: 'custom',
                width: 20,
                height: 20,
                color: m ? f.TVs.colors.STATUS_DANGER : 'currentColor',
                className: c
            }),
            onClick: l,
            onContextMenu: E,
            innerClassName: a()({ [eq.redIcon]: n }),
            iconForeground: m ? eq.strikethrough : void 0,
            role: 'switch',
            redGlow: b && m,
            'aria-label': eK.NW.string(eK.t.wjcRFR),
            'aria-checked': m,
            disabled: s
        })
    });
}
