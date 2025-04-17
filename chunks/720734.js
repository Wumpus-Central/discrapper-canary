n.d(t, {
    Z: () => tt,
    m: () => e7
}),
    n(388685),
    n(539854);
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
    b = n(355467),
    _ = n(239091),
    N = n(230711),
    x = n(410575),
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
    V = n(526371),
    G = n(64220),
    F = n(459115),
    H = n(427217),
    z = n(132750),
    Y = n(540059),
    K = n(605236),
    q = n(243778),
    X = n(258609),
    Q = n(53891),
    J = n(291533),
    $ = n(427347),
    ee = n(50697),
    et = n(331541),
    en = n(90042),
    er = n(850020),
    ei = n(379839),
    es = n(359135),
    ea = n(516817),
    el = n(332473),
    eo = n(240504),
    ec = n(637906),
    ed = n(39370),
    eu = n(19199),
    em = n(866483),
    eg = n(14357),
    ep = n(763296),
    eh = n(640806),
    ef = n(52538),
    eb = n(670188),
    e_ = n(861254),
    eN = n(221241),
    ex = n(879815),
    eE = n(294629),
    ej = n(875527),
    eC = n(56848),
    eO = n(378441),
    eS = n(358820),
    ev = n(469887),
    eT = n(306609),
    eI = n(199902),
    ey = n(314897),
    eA = n(592125),
    eP = n(819640),
    eR = n(131951),
    eD = n(19780),
    eZ = n(914010),
    ew = n(885110),
    ek = n(246946),
    eW = n(594174),
    eL = n(78839),
    eB = n(626135),
    eM = n(768581),
    eU = n(572004),
    eV = n(585483),
    eG = n(70956),
    eF = n(74538),
    eH = n(374023),
    ez = n(51144),
    eY = n(998502),
    eK = n(870569),
    eq = n(345243),
    eX = n(115530),
    eQ = n(981631),
    eJ = n(215023),
    e$ = n(388032),
    e0 = n(239692);
function e1(e, t, n) {
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
function e2(e) {
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
                e1(e, t, n[t]);
            });
    }
    return e;
}
function e3(e, t) {
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
let e6 = eY.ZP.getEnableHardwareAcceleration() ? f.Xo$ : f.qEK,
    e8 = 2 * eG.Z.Millis.MINUTE,
    e4 = 3 * eG.Z.Millis.SECOND,
    e9 = 30 * eG.Z.Millis.DAY;
function e5(e) {
    let { speaking: t, streaming: n, currentUser: s, status: l, handleClick: o, handleMouseLeave: c, renderNameTag: d, nameplate: u, 'data-jump-section': m } = e,
        g = i.useRef(null),
        p = (0, Y.Q3)('RTC Avatar'),
        { coloredIconsEnabled: h } = (0, eN.Z)({ location: 'RTC Avatar' }),
        b = (0, R.Z)(null == s ? void 0 : s.avatarDecoration),
        _ = (0, eM.NZ)({
            avatarDecoration: b,
            size: (0, D.y9)(f.EFr.SIZE_32)
        }),
        N = (0, f.dQu)(f.TVs.modules.guildbar.AVATAR_SIZE),
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
                        null != i && r(i), null == (n = e.current) || n.call(e);
                    };
                    return (
                        eV.S.subscribe(eQ.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, t),
                        () => {
                            eV.S.unsubscribe(eQ.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, t);
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
        S = (0, ei.A)(u);
    return null == s
        ? null
        : (0, r.jsx)(x.Z, {
              object: eQ.qAy.AVATAR,
              children: (0, r.jsx)(eb.Z, {
                  user: s,
                  targetElementRef: g,
                  clickTrap: !0,
                  renderPopout: (e, t) => {
                      let { closePopout: n, setPopoutRef: i } = e;
                      return (0, r.jsx)('div', {
                          className: e0.accountProfilePopoutWrapper,
                          children: (0, r.jsx)(et.Z, {
                              currentUser: s,
                              highlightBadge: j,
                              openedAt: t,
                              onClose: () => {
                                  null == n || n();
                              },
                              setPopoutRef: i
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
                  children: (e) => (
                      E(e),
                      (0, r.jsxs)(
                          f.P3F,
                          e3(
                              e2(
                                  {
                                      innerRef: g,
                                      style: S
                                  },
                                  e
                              ),
                              {
                                  onClick: (t) => {
                                      var n;
                                      null == (n = e.onClick) || n.call(e, t), null == o || o(t);
                                  },
                                  'aria-label': e$.NW.string(e$.t['3Uj+2t']),
                                  'data-jump-section': p ? m : void 0,
                                  className: a()(e0.avatarWrapper, !p && h && e0.experiment, { [e0.plated]: null != u }),
                                  children: [
                                      (0, r.jsx)(e6, {
                                          size: p ? f.EFr['SIZE_'.concat(N)] : f.EFr.SIZE_32,
                                          src: s.getAvatarURL(void 0, p ? N - 4 : 32, !1),
                                          avatarDecoration: _,
                                          'aria-label': s.username,
                                          status: n ? eQ.Skl.STREAMING : l,
                                          isSpeaking: t,
                                          className: e0.avatar
                                      }),
                                      (0, r.jsx)('div', {
                                          className: a()(e0.nameTag, { [e0.canCopy]: eU.wS }),
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
class e7 extends i.PureComponent {
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
            t = [e$.NW.string(e$.t.MSaeTU), e$.NW.string(e$.t.UmrCw8), e$.NW.string(e$.t.gKE0Ji), e$.NW.string(e$.t['4DSKbm']), e$.NW.string(e$.t['+8ENdX']), e$.NW.string(e$.t.GlWHv7), e$.NW.string(e$.t.hIzxU1), e$.NW.string(e$.t['26uMPD']), e$.NW.string(e$.t.uFs7R0), e$.NW.string(e$.t.bLXdcX), e$.NW.string(e$.t.gPg9fX)],
            n = Math.min(Math.max(0, e - 1), t.length - 1);
        return (0, r.jsx)(f.UkV, {
            isShaking: this.isCopiedStreakGodlike,
            children: t[n]
        });
    }
    renderStatus() {
        let { hovered: e } = this.state,
            { activities: t, applicationStream: n, currentUser: i, status: s, userTag: a, voiceActivityStatusEnabled: l, voiceChannel: o, customStatusRTCEntrypointEnabled: c } = this.props;
        if (null == i) return null;
        if (c)
            return (0, r.jsx)(z.Z, {
                user: i,
                applicationStream: n,
                voiceChannel: l ? o : void 0,
                activities: t,
                hovered: e
            });
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
                    textClassName: e0.activityStatusText,
                    hideTooltip: !0
                })
            });
        let d =
            null == t
                ? void 0
                : t.find((e) => {
                      let { type: t } = e;
                      return t === eQ.IIU.CUSTOM_STATUS;
                  });
        return null != d
            ? (0, r.jsx)(y.Z, {
                  hoverText: a,
                  forceHover: e,
                  children: (0, r.jsx)(H.Z, {
                      activity: d,
                      emojiClassName: e0.emoji,
                      className: e0.customStatus
                  })
              })
            : null != s && s !== eQ.Skl.UNKNOWN && i.isPomelo()
              ? (0, r.jsx)(y.Z, {
                    hoverText: a,
                    forceHover: e,
                    children: (0, r.jsx)(I.Z, { text: ez.ZP.humanizeStatus(s) })
                })
              : a;
    }
    renderAvatarWithPopout(e) {
        let {
            focusSectionProps: { 'data-jump-section': t },
            onClick: n
        } = e;
        return (0, r.jsx)(
            e5,
            e3(e2({}, this.props), {
                handleClick: n,
                handleMouseLeave: this.handleMouseLeave,
                renderNameTag: this.renderNameTag,
                'data-jump-section': t
            })
        );
    }
    renderNameZone(e) {
        let { currentUser: t, dismissibleContents: n, visibleRecurringAvatarDc: i, markRecurringAvatarDcAsDismissed: s } = this.props;
        if (null == t) return null;
        if (i === c.z.GUILD_TAG_AVAILABLE_COACHMARK) {
            var a;
            return (0, r.jsx)(Q.ZP, {
                guildId: null != (a = this.props.selectedGuildId) ? a : null,
                onDismiss: s,
                children: () => this.renderAvatarWithPopout({ focusSectionProps: e })
            });
        }
        return (0, r.jsx)(q.ZP, {
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
                        return (0, r.jsx)(en.Z, {
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
        let { currentUser: e, nameplate: t, voiceChannel: n } = this.props,
            i = this.state.hovered;
        return null == e
            ? null
            : (0, r.jsx)(f.Wdt, {
                  children: (e) =>
                      (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsxs)('div', {
                                  ref: this.containerRef,
                                  className: a()(e0.container, { [e0.containerRtcOpened]: null != n }),
                                  onMouseEnter: this.handleMouseEnter,
                                  onMouseLeave: this.handleMouseLeave,
                                  children: [
                                      (0, r.jsx)(ea.Z, {
                                          nameplate: t,
                                          hovered: i,
                                          placement: es.i.ACCOUNT
                                      }),
                                      this.renderNameZone(e),
                                      (0, r.jsx)(
                                          te,
                                          e3(e2({}, this.props, this.state), {
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
                              (0, r.jsx)($.Z, {}),
                              (0, r.jsx)(V.Z, {})
                          ]
                      })
              });
    }
    constructor(...e) {
        super(...e),
            e1(this, 'copiedTimeout', new d.V7()),
            e1(this, 'copiedDecayTimeout', new d.V7()),
            e1(this, 'speakingWhileMutedTooltipTimeout', new d.V7()),
            e1(this, 'lastSpeakingWhileMutedNotificationTime', void 0),
            e1(this, 'state', {
                hovered: !1,
                copiedStreak: 0,
                shouldShowNametagTooltip: !1,
                shouldShowCopiedFeedback: !1,
                shouldShowSpeakingWhileMutedTooltip: !1,
                hoveringOnMute: !1
            }),
            e1(this, 'containerRef', i.createRef()),
            e1(this, 'handleToggleSelfMute', () => {
                let { serverMute: e, suppress: t, selfMute: n } = this.props;
                (0, B.Z)(e, t, eQ.jXE.ACCOUNT_PANEL), (0, M.v)(A.Z.ACCOUNT, M.d.MIC, n);
            }),
            e1(this, 'handleToggleSelfDeaf', () => {
                let { serverDeaf: e, selfDeaf: t } = this.props;
                (0, L.Z)(e, eQ.jXE.ACCOUNT_PANEL), (0, M.v)(A.Z.ACCOUNT, M.d.DEAFEN, !t);
            }),
            e1(this, 'handleOpenAccountSettings', () => {
                this.handleOpenSettings();
            }),
            e1(this, 'handleOpenSettings', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eQ.oAB.ACCOUNT,
                    t = arguments.length > 1 ? arguments[1] : void 0,
                    n = arguments.length > 2 ? arguments[2] : void 0;
                N.Z.open(e, t, n);
            }),
            e1(this, 'handleOpenSettingsContextMenu', (e) => {
                let { currentUser: t } = this.props;
                null != t &&
                    (0, _.jW)(e, async () => {
                        let { default: e } = await n.e('2535').then(n.bind(n, 923422));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                e3(e2({}, n), {
                                    user: t,
                                    premiumSubscription: this.props.premiumSubscription,
                                    webBuildOverride: this.props.webBuildOverride,
                                    onInteraction: (0, U.u)('UserSettingsCogContextMenu', A.Z.ACCOUNT)
                                })
                            );
                    });
            }),
            e1(this, 'audioOnInteractionHandler', (0, U.u)('AudioDeviceMenu', A.Z.ACCOUNT)),
            e1(this, 'handleInputAudioContextMenu', (e, t) => {
                (0, _.jW)(e, async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 659580));
                    return () =>
                        (0, r.jsx)(P.Gt, {
                            value: t,
                            children: this.props.simplifiedCallSettingsEnabled
                                ? (0, r.jsx)(e, {
                                      onClose: _.Zy,
                                      renderInputDevices: !0,
                                      renderInputVolume: !0,
                                      simplified: !0,
                                      onInteraction: this.audioOnInteractionHandler
                                  })
                                : (0, r.jsx)(e, {
                                      onClose: _.Zy,
                                      renderInputDevices: !0,
                                      renderInputModes: !0,
                                      renderInputVolume: !0,
                                      onInteraction: this.audioOnInteractionHandler
                                  })
                        });
                });
            }),
            e1(this, 'handleOutputAudioContextMenu', (e, t) => {
                (0, _.jW)(e, async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 659580));
                    return () =>
                        (0, r.jsx)(P.Gt, {
                            value: t,
                            children: this.props.simplifiedCallSettingsEnabled
                                ? (0, r.jsx)(e, {
                                      onClose: _.Zy,
                                      renderOutputDevices: !0,
                                      renderOutputVolume: !0,
                                      simplified: !0,
                                      onInteraction: this.audioOnInteractionHandler
                                  })
                                : (0, r.jsx)(e, {
                                      onClose: _.Zy,
                                      renderOutputDevices: !0,
                                      renderOutputVolume: !0,
                                      onInteraction: this.audioOnInteractionHandler
                                  })
                        });
                });
            }),
            e1(this, 'handleMouseEnter', () => {
                this.setState({ hovered: !0 });
            }),
            e1(this, 'handleMouseLeave', () => {
                this.setState({ hovered: !1 });
            }),
            e1(this, 'handleMouseEnterMute', () => {
                this.setState({
                    hoveringOnMute: !0,
                    shouldShowSpeakingWhileMutedTooltip: !1
                }),
                    this.speakingWhileMutedTooltipTimeout.stop();
            }),
            e1(this, 'handleMouseLeaveMute', () => {
                this.setState({ hoveringOnMute: !1 });
            }),
            e1(this, 'handleCopyTag', () => {
                let { currentUser: e } = this.props,
                    { shouldShowNametagTooltip: t, copiedStreak: n } = this.state;
                if (null == e) return;
                (0, eU.JG)(
                    ez.ZP.getUserTag(e, {
                        decoration: 'never',
                        identifiable: 'always'
                    })
                ),
                    eB.default.track(eQ.rMx.TEXT_COPIED, { type: 'User Tag' });
                let r = {
                    shouldShowCopiedFeedback: !0,
                    shouldShowNametagTooltip: !0
                };
                t || (r.copiedStreak = n + 1),
                    this.setState(r, () => {
                        this.copiedTimeout.start(1000, () => this.setState({ shouldShowNametagTooltip: !1 })), this.copiedDecayTimeout.start(2000, () => this.setState({ copiedStreak: 0 }));
                    });
            }),
            e1(this, 'handleOccludedChanged', () => {
                let { occluded: e } = this.props;
                e &&
                    this.setState({
                        shouldShowNametagTooltip: !1,
                        shouldShowSpeakingWhileMutedTooltip: !1
                    });
            }),
            e1(this, 'handleSpeakingWhileMutedChanged', () => {
                let { selfMute: e, serverMute: t, suppress: n, speakingWhileMuted: r, occluded: i } = this.props,
                    { hoveringOnMute: s } = this.state,
                    a = void 0 === this.lastSpeakingWhileMutedNotificationTime || Date.now() - this.lastSpeakingWhileMutedNotificationTime > e8;
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
            e1(this, 'renderNameTag', () => {
                let { currentUser: e } = this.props;
                return null == e
                    ? null
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)('div', {
                                  className: e0.panelTitleContainer,
                                  children: (0, r.jsx)(eX.Z, { children: ez.ZP.getName(e) })
                              }),
                              (0, r.jsx)('div', {
                                  className: e0.panelSubtextContainer,
                                  children: (0, r.jsx)(eq.Z, { children: this.renderStatus() })
                              })
                          ]
                      });
            });
    }
}
function te(e) {
    let { selfDeaf: t, selfMute: n, awaitingRemote: i, serverMute: s, serverDeaf: a, suppress: l, shouldShowSpeakingWhileMutedTooltip: o, isEligibleForPomelo: c, webBuildOverride: d, handleMouseEnterMute: u, handleMouseLeaveMute: m, handleToggleSelfDeaf: g, handleToggleSelfMute: p, handleInputAudioContextMenu: h, handleOutputAudioContextMenu: b, handleOpenAccountSettings: _, handleOpenSettingsContextMenu: N, dismissibleContents: x, nameplate: E, accountContainerRef: j } = e,
        C = (0, ei.A)(E);
    return (0, r.jsxs)('div', {
        className: e0.buttons,
        style: C,
        children: [
            (0, r.jsx)(tr, {
                accountContainerRef: j,
                selfMute: n,
                serverMute: s,
                suppress: l,
                awaitingRemote: i,
                tooltipText: o ? e$.NW.string(e$.t['29gnR0']) : void 0,
                tooltipColor: o ? f.FGA.GREEN : void 0,
                tooltipForceOpen: o || void 0,
                onMouseEnter: u,
                onMouseLeave: m,
                onClick: p,
                onContextMenu: h,
                iconForeground: null != E ? e0.iconForeground : void 0,
                nameplate: E
            }),
            (0, r.jsx)(ti, {
                selfDeaf: t,
                serverDeaf: a,
                onClick: g,
                onContextMenu: b,
                awaitingRemote: i,
                iconForeground: null != E ? e0.iconForeground : void 0,
                nameplate: E
            }),
            (0, r.jsx)(tn, {
                isEligibleForPomelo: c,
                webBuildOverride: d,
                onClick: _,
                onContextMenu: N,
                dismissibleContents: x.settings,
                iconForeground: null != E ? e0.iconForeground : void 0,
                nameplate: E
            })
        ]
    });
}
function tt() {
    var e;
    let t = (0, o.e7)([eW.default], () => eW.default.getCurrentUser()),
        n = (0, o.e7)([ey.default], () => ey.default.getId()),
        {
            activities: s,
            streaming: a,
            status: l
        } = (0, o.cj)([ew.Z], () => {
            let e = ew.Z.getActivities();
            return {
                activities: e,
                streaming:
                    null !=
                    e.find((e) => {
                        let { type: t } = e;
                        return t === eQ.IIU.STREAMING;
                    }),
                status: ew.Z.getStatus()
            };
        }),
        d = (0, o.e7)([eI.Z], () => eI.Z.getAnyStreamForUser(n)),
        u = (0, C.Z)({ userId: n }),
        m = ez.ZP.useUserTag(t, { decoration: 'never' }),
        g = (0, o.e7)([ek.Z], () => ek.Z.hidePersonalInformation),
        p = (0, o.e7)([eD.Z, eA.Z], () => {
            let e = eD.Z.getChannelId();
            return null != e ? eA.Z.getChannel(e) : null;
        }),
        { mute: h, selfMute: _, suppress: N } = (0, eE.Z)(p),
        { selfDeaf: x, deaf: O } = (0, ex.Z)(p),
        v = (0, o.e7)([Z.C], () => {
            var e;
            return (0, w.fD)() ? (null == (e = Z.C.getCurrentBuildOverride().overrides) ? void 0 : e.discord_web) : null;
        }),
        T = (0, o.e7)([eL.ZP], () => eL.ZP.getPremiumTypeSubscription()),
        I = (0, o.e7)([eR.Z], () => eR.Z.getSpeakingWhileMuted()),
        y = (0, o.e7)([eP.Z], () => eP.Z.hasLayers()),
        R = (0, f.s9z)(f.JQI) || y || eH.s.isDisallowPopupsSet(),
        D = (0, el.b)(),
        k = (0, o.e7)([X.Z], () => null != X.Z.getAwaitingRemoteSessionInfo()),
        W = (0, o.e7)([eZ.Z], () => eZ.Z.getGuildId()),
        L = (0, eu.D)(),
        B = (0, E.u)(),
        M = eF.ZP.canUsePremiumGuildMemberProfile(t),
        U = (null == t || null == (e = t.avatarDecoration) ? void 0 : e.skuId) === eJ.rL,
        { voiceActivityStatusEnabled: V } = (0, S.U)({ location: 'Account' }),
        { simplifiedSettingsEnabled: G } = (0, eN.Z)({ location: 'Account' }),
        H = (0, ee.m)(),
        [z, Y] = (0, J.G)(null != W ? W : null),
        { enabled: q } = (0, F.Z)({ location: 'Account' }),
        Q = 'account';
    (0, j.j)({
        location: Q + ' auto on',
        autoTrackExposure: !0
    }),
        (0, j.j)({
            location: Q + ' auto off',
            autoTrackExposure: !1
        });
    let $ = (0, o.e7)([ep.Z], () => ep.Z.hasHadOtherUserPlaySoundInSession()),
        et = (function () {
            let e = (0, K.wE)(c.z.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2),
                [t, n] = (0, o.Wu)([eo.Z], () => [eo.Z.hasFetchedRelevance, eo.Z.profileThemesRelevanceExceeded]),
                [r, s] = (0, o.Wu)([eL.ZP], () => [eL.ZP.hasFetchedMostRecentPremiumTypeSubscription(), eL.ZP.getMostRecentPremiumTypeSubscription()]),
                { enabled: a } = ec.Z.useExperiment({ location: '08bd40_1' }, { autoTrackExposure: !0 }),
                l = i.useMemo(() => {
                    let e = new Date().getTime();
                    return null != s && (s.status === eQ.O0b.ACTIVE || e - s.currentPeriodEnd.getTime() < e9);
                }, [s]);
            return (
                i.useEffect(() => {
                    (async () => {
                        if (!e && null == n && a) {
                            if (!r) return await (0, b.ou)();
                            !l && (t || (await (0, b.l0)()));
                        }
                    })();
                }, [a, n, e, r, t, l]),
                !e && !!a && !l && null != n && n
            );
        })(),
        { analyticsLocations: en } = (0, P.ZP)(A.Z.ACCOUNT),
        ei = (0, er.K)({
            location: 'Account',
            user: t
        }),
        es = {
            avatar: [],
            settings: []
        };
    return (
        !R && (et && es.settings.push(c.z.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2), L && (1 === B ? es.settings.push(c.z.USER_SAFETY_CONSUMER_EDUCATION_MUTE) : es.settings.push(c.z.USER_SAFETY_CONSUMER_EDUCATION_BLOCK)), $ && es.settings.push(c.z.SOUNDBOARD_VOLUME_EDUCATION), M && es.settings.push(c.z.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK), U && es.avatar.push(c.z.PREMIUM_SUBSCRIPTION_APRIL_MARKETING_DECO_TOOLTIP), H && es.avatar.push(c.z.EXPIRING_STATUS_COACHMARK)),
        (0, r.jsx)(P.Gt, {
            value: en,
            children: (0, r.jsx)(e7, {
                currentUser: t,
                activities: s,
                applicationStream: d,
                voiceChannel: p,
                dismissibleContents: es,
                visibleRecurringAvatarDc: z,
                markRecurringAvatarDcAsDismissed: Y,
                userTag: m,
                hidePrivateData: g,
                occluded: R,
                premiumSubscription: T,
                selfDeaf: x,
                selfMute: _,
                serverDeaf: O,
                serverMute: h,
                speaking: u,
                speakingWhileMuted: I,
                status: l,
                streaming: a,
                suppress: N,
                webBuildOverride: v,
                awaitingRemote: k,
                isEligibleForPomelo: D,
                simplifiedCallSettingsEnabled: G,
                voiceActivityStatusEnabled: V,
                nameplate: ei,
                selectedGuildId: W,
                customStatusRTCEntrypointEnabled: q
            })
        })
    );
}
function tn(e) {
    let { webBuildOverride: t, isEligibleForPomelo: n, onClick: s, onContextMenu: a, dismissibleContents: l, iconForeground: o, nameplate: d } = e,
        u = i.useRef(null),
        m = f.ewm,
        g = (0, p.i)();
    m = null != t ? f.bgT : n ? f.Ncx : g.Component;
    let [h, b] = (0, q.US)(l);
    return (0, r.jsx)(f.yRy, {
        targetElementRef: u,
        position: 'top',
        align: 'center',
        shouldShow: null != h,
        renderPopout: h === c.z.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2 ? () => (0, r.jsx)(ed.Z, {}) : h === c.z.USER_SAFETY_CONSUMER_EDUCATION_BLOCK ? () => (0, r.jsx)(em.Z, { markAsDismissed: b }) : h === c.z.USER_SAFETY_CONSUMER_EDUCATION_MUTE ? () => (0, r.jsx)(eg.Z, { markAsDismissed: b }) : h === c.z.SOUNDBOARD_VOLUME_EDUCATION ? () => (0, r.jsx)(eh.Z, { markAsDismissed: b }) : h === c.z.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK ? () => (0, r.jsx)(ef.Z, {}) : () => (0, r.jsx)(r.Fragment, {}),
        children: () =>
            (0, r.jsx)(
                eK.Z,
                e3(
                    e2(
                        {
                            ref: u,
                            tooltipText: null != t ? e$.NW.formatToPlainString(e$.t.Gzh6ZG, { webBuildOverride: t.id }) : e$.NW.string(e$.t.cduTBA),
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
function tr(e) {
    let { selfMute: t, serverMute: n, suppress: s, awaitingRemote: c, tooltipText: d, tooltipColor: u, tooltipForceOpen: p, iconForeground: b, onMouseEnter: _, onMouseLeave: N, onClick: x, onContextMenu: E, nameplate: j, accountContainerRef: C } = e,
        O = t || s || n,
        S = i.useRef(null),
        v = i.useRef(null),
        T = (0, m.O)(O ? 'unmute' : 'mute'),
        I = (0, g.P)(O ? 'unmute' : 'mute'),
        { activeVoice: y } = (0, eO.o)(),
        R = null != y,
        D = (0, eC.z)(y),
        Z = (0, o.e7)([eD.Z], () => eD.Z.isConnected()),
        { Component: w, events: k, play: L } = R ? I : T,
        B = n || s ? f.v0G : w,
        { mode: M } = (0, e_.ZP)({ location: 'RTC Microphone Button' }),
        { coloredIconsEnabled: U } = (0, eN.Z)({ location: 'RTC Microphone Button' }),
        V = null != d ? d : (0, W.Z)(t, n, s, c, M === e_.BK.GroupedButtonsRedMic),
        { analyticsLocations: G } = (0, P.ZP)(A.Z.AUDIO_INPUT_BUTTON),
        F = (0, ej.Hu)({
            location: A.Z.AUDIO_INPUT_BUTTON,
            autoTrackExposure: !0
        });
    i.useEffect(() => () => L(), [O, L]);
    let H = i.useCallback(
            (e) => {
                E(e, G);
            },
            [E, G]
        ),
        [z, Y] = i.useState(!1),
        K = i.useCallback((e) => {
            var t;
            if ((0, l.k)(null == e ? void 0 : e.target, Node) && (null == (t = S.current) ? void 0 : t.contains(e.target))) return h.F;
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
                        X(!0), (e = setTimeout(() => X(!1), e4));
                    }, 300)),
                () => {
                    X(!1), clearTimeout(e);
                }
            );
        }, [Z]),
        (0, r.jsx)(P.Gt, {
            value: G,
            children: (0, r.jsxs)('div', {
                ref: S,
                className: e0.micButtonParent,
                children: [
                    (0, r.jsx)(eK.Z, {
                        tooltipText: V,
                        tooltipColor: u,
                        tooltipForceOpen: p,
                        plated: null != j,
                        onMouseEnter: () => {
                            _(), k.onMouseEnter();
                        },
                        onMouseLeave: () => {
                            N(), k.onMouseLeave();
                        },
                        icon: (0, r.jsx)(B, {
                            size: 'custom',
                            width: 20,
                            height: 20,
                            color: O ? f.TVs.colors.STATUS_DANGER : 'currentColor',
                            className: b
                        }),
                        onClick: x,
                        onContextMenu: H,
                        role: 'switch',
                        className: a()({ [e0.micButtonWithMenu]: F }),
                        redGlow: O && U,
                        'aria-label': e$.NW.string(e$.t['w4m94+']),
                        'aria-checked': O,
                        disabled: c
                    }),
                    F &&
                        (0, r.jsx)(f.yRy, {
                            targetElementRef: v,
                            position: 'top',
                            align: 'left',
                            nudgeAlignIntoViewport: !1,
                            overridePositionRef: C,
                            animation: f.yRy.Animation.FADE,
                            useMouseEnter: !0,
                            ignoreModalClicks: !0,
                            onRequestOpen: eS.r5,
                            onRequestClose: K,
                            shouldShow: z,
                            renderPopout: (e) => {
                                let { closePopout: t } = e;
                                return (0, r.jsx)(eT.l, { onSettingsButtonClick: t });
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
                                    children: (0, r.jsx)(ev.B, {
                                        targetElementRef: v,
                                        onCTA: () => Y(!0),
                                        canBeShown: !s,
                                        children: (e, t) =>
                                            (0, r.jsx)(
                                                eK.Z,
                                                e2(
                                                    {
                                                        ref: v,
                                                        plated: null != j,
                                                        tooltipForceOpen: q,
                                                        tooltipColor: q ? f.FGA.GREEN : void 0,
                                                        tooltipContentClassName: q ? e0.voiceFilterWarning : void 0,
                                                        tooltipText: q
                                                            ? (0, r.jsxs)(r.Fragment, {
                                                                  children: [
                                                                      (0, r.jsx)('img', {
                                                                          alt: null != D ? e$.NW.string(D.name) : '',
                                                                          src: null == D ? void 0 : D.iconURL,
                                                                          draggable: !1
                                                                      }),
                                                                      (0, r.jsx)(f.Text, {
                                                                          variant: 'text-sm/medium',
                                                                          color: 'always-white',
                                                                          children: e$.NW.string(e$.t.VlC1dX)
                                                                      })
                                                                  ]
                                                              })
                                                            : e$.NW.string(e$.t.Hapb4O),
                                                        icon: (0, r.jsx)(l, {
                                                            className: e0.buttonChevronIcon,
                                                            size: 'custom',
                                                            width: 12,
                                                            height: 12,
                                                            color: U && O ? f.TVs.colors.STATUS_DANGER : f.TVs.colors.TEXT_NORMAL
                                                        }),
                                                        role: 'button',
                                                        className: a()([e0.buttonChevron], { [e0.redGlow]: O && U }),
                                                        redGlow: O && U,
                                                        'aria-label': e$.NW.string(e$.t.Hapb4O),
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
function ti(e) {
    let { selfDeaf: t, serverDeaf: n, awaitingRemote: s, onClick: l, onContextMenu: o, iconForeground: c, nameplate: d } = e,
        m = t || n,
        {
            Component: g,
            play: p,
            events: { onMouseEnter: h, onMouseLeave: b }
        } = (0, u.l)(m ? 'undeafen' : 'deafen'),
        _ = n ? f.Vm4 : g,
        { coloredIconsEnabled: N } = (0, eN.Z)({ location: 'RTC Microphone Button' }),
        { analyticsLocations: x } = (0, P.ZP)(A.Z.AUDIO_OUTPUT_BUTTON);
    i.useEffect(() => () => p(), [m, p]);
    let E = i.useCallback(
        (e) => {
            o(e, x);
        },
        [o, x]
    );
    return (0, r.jsx)(P.Gt, {
        value: x,
        children: (0, r.jsx)(eK.Z, {
            plated: null != d,
            tooltipText: (0, k.Z)(t, n, s),
            onMouseEnter: h,
            onMouseLeave: b,
            icon: (0, r.jsx)(_, {
                size: 'custom',
                width: 20,
                height: 20,
                color: m ? f.TVs.colors.STATUS_DANGER : 'currentColor',
                className: c
            }),
            onClick: l,
            onContextMenu: E,
            innerClassName: a()({ [e0.redIcon]: n }),
            iconForeground: m ? e0.strikethrough : void 0,
            role: 'switch',
            redGlow: N && m,
            'aria-label': e$.NW.string(e$.t.wjcRFR),
            'aria-checked': m,
            disabled: s
        })
    });
}
