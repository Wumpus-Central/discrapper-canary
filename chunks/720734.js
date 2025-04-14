n.d(t, {
    Z: () => e7,
    m: () => e9
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
    N = n(239091),
    x = n(230711),
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
    V = n(526371),
    G = n(64220),
    F = n(427217),
    H = n(540059),
    z = n(605236),
    Y = n(243778),
    K = n(258609),
    q = n(53891),
    X = n(291533),
    J = n(427347),
    Q = n(50697),
    $ = n(331541),
    ee = n(90042),
    et = n(850020),
    en = n(379839),
    er = n(359135),
    ei = n(516817),
    es = n(332473),
    ea = n(240504),
    el = n(637906),
    eo = n(39370),
    ec = n(19199),
    ed = n(866483),
    eu = n(14357),
    em = n(763296),
    eg = n(640806),
    ep = n(52538),
    eh = n(670188),
    ef = n(861254),
    eb = n(221241),
    eN = n(879815),
    ex = n(294629),
    e_ = n(875527),
    eE = n(56848),
    ej = n(378441),
    eC = n(358820),
    eO = n(469887),
    eS = n(306609),
    ev = n(199902),
    eT = n(314897),
    eI = n(592125),
    ey = n(819640),
    eA = n(131951),
    eP = n(19780),
    eR = n(914010),
    eD = n(885110),
    eZ = n(246946),
    ew = n(594174),
    ek = n(78839),
    eW = n(626135),
    eL = n(768581),
    eB = n(572004),
    eM = n(585483),
    eU = n(70956),
    eV = n(74538),
    eG = n(374023),
    eF = n(51144),
    eH = n(998502),
    ez = n(870569),
    eY = n(345243),
    eK = n(115530),
    eq = n(981631),
    eX = n(215023),
    eJ = n(388032),
    eQ = n(239692);
function e$(e, t, n) {
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
function e0(e) {
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
                e$(e, t, n[t]);
            });
    }
    return e;
}
function e1(e, t) {
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
let e2 = eH.ZP.getEnableHardwareAcceleration() ? f.Xo$ : f.qEK,
    e3 = 2 * eU.Z.Millis.MINUTE,
    e6 = 3 * eU.Z.Millis.SECOND,
    e8 = 30 * eU.Z.Millis.DAY;
function e4(e) {
    let { speaking: t, streaming: n, currentUser: s, status: l, handleClick: o, handleMouseLeave: c, renderNameTag: d, nameplate: u, 'data-jump-section': m } = e,
        g = i.useRef(null),
        p = (0, H.Q3)('RTC Avatar'),
        { coloredIconsEnabled: h } = (0, eb.Z)({ location: 'RTC Avatar' }),
        b = (0, R.Z)(null == s ? void 0 : s.avatarDecoration),
        N = (0, eL.NZ)({
            avatarDecoration: b,
            size: (0, D.y9)(f.EFr.SIZE_32)
        }),
        x = (0, f.dQu)(f.TVs.modules.guildbar.AVATAR_SIZE),
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
                        eM.S.subscribe(eq.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, t),
                        () => {
                            eM.S.unsubscribe(eq.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, t);
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
        S = (0, en.A)(u);
    return null == s
        ? null
        : (0, r.jsx)(_.Z, {
              object: eq.qAy.AVATAR,
              children: (0, r.jsx)(eh.Z, {
                  user: s,
                  targetElementRef: g,
                  clickTrap: !0,
                  renderPopout: (e, t) => {
                      let { closePopout: n, setPopoutRef: i } = e;
                      return (0, r.jsx)('div', {
                          className: eQ.accountProfilePopoutWrapper,
                          children: (0, r.jsx)($.Z, {
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
                          e1(
                              e0(
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
                                  'aria-label': eJ.NW.string(eJ.t['3Uj+2t']),
                                  'data-jump-section': p ? m : void 0,
                                  className: a()(eQ.avatarWrapper, !p && h && eQ.experiment, { [eQ.plated]: null != u }),
                                  children: [
                                      (0, r.jsx)(e2, {
                                          size: p ? f.EFr['SIZE_'.concat(x)] : f.EFr.SIZE_32,
                                          src: s.getAvatarURL(void 0, p ? x - 4 : 32, !1),
                                          avatarDecoration: N,
                                          'aria-label': s.username,
                                          status: n ? eq.Skl.STREAMING : l,
                                          isSpeaking: t,
                                          className: eQ.avatar
                                      }),
                                      (0, r.jsx)('div', {
                                          className: a()(eQ.nameTag, { [eQ.canCopy]: eB.wS }),
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
class e9 extends i.PureComponent {
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
            t = [eJ.NW.string(eJ.t.MSaeTU), eJ.NW.string(eJ.t.UmrCw8), eJ.NW.string(eJ.t.gKE0Ji), eJ.NW.string(eJ.t['4DSKbm']), eJ.NW.string(eJ.t['+8ENdX']), eJ.NW.string(eJ.t.GlWHv7), eJ.NW.string(eJ.t.hIzxU1), eJ.NW.string(eJ.t['26uMPD']), eJ.NW.string(eJ.t.uFs7R0), eJ.NW.string(eJ.t.bLXdcX), eJ.NW.string(eJ.t.gPg9fX)],
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
                    textClassName: eQ.activityStatusText,
                    hideTooltip: !0
                })
            });
        let c =
            null == t
                ? void 0
                : t.find((e) => {
                      let { type: t } = e;
                      return t === eq.IIU.CUSTOM_STATUS;
                  });
        return null != c
            ? (0, r.jsx)(y.Z, {
                  hoverText: a,
                  forceHover: e,
                  children: (0, r.jsx)(F.Z, {
                      activity: c,
                      emojiClassName: eQ.emoji,
                      className: eQ.customStatus
                  })
              })
            : null != s && s !== eq.Skl.UNKNOWN && i.isPomelo()
              ? (0, r.jsx)(y.Z, {
                    hoverText: a,
                    forceHover: e,
                    children: (0, r.jsx)(I.Z, { text: eF.ZP.humanizeStatus(s) })
                })
              : a;
    }
    renderAvatarWithPopout(e) {
        let {
            focusSectionProps: { 'data-jump-section': t },
            onClick: n
        } = e;
        return (0, r.jsx)(
            e4,
            e1(e0({}, this.props), {
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
            return (0, r.jsx)(q.ZP, {
                guildId: null != (a = this.props.selectedGuildId) ? a : null,
                onDismiss: s,
                children: () => this.renderAvatarWithPopout({ focusSectionProps: e })
            });
        }
        return (0, r.jsx)(Y.ZP, {
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
                        return (0, r.jsx)(ee.Z, {
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
                                  className: eQ.container,
                                  onMouseEnter: this.handleMouseEnter,
                                  onMouseLeave: this.handleMouseLeave,
                                  children: [
                                      (0, r.jsx)(ei.Z, {
                                          nameplate: t,
                                          hovered: n,
                                          placement: er.i.ACCOUNT
                                      }),
                                      this.renderNameZone(e),
                                      (0, r.jsx)(
                                          e5,
                                          e1(e0({}, this.props, this.state), {
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
                              (0, r.jsx)(J.Z, {}),
                              (0, r.jsx)(V.Z, {})
                          ]
                      })
              });
    }
    constructor(...e) {
        super(...e),
            e$(this, 'copiedTimeout', new d.V7()),
            e$(this, 'copiedDecayTimeout', new d.V7()),
            e$(this, 'speakingWhileMutedTooltipTimeout', new d.V7()),
            e$(this, 'lastSpeakingWhileMutedNotificationTime', void 0),
            e$(this, 'state', {
                hovered: !1,
                copiedStreak: 0,
                shouldShowNametagTooltip: !1,
                shouldShowCopiedFeedback: !1,
                shouldShowSpeakingWhileMutedTooltip: !1,
                hoveringOnMute: !1
            }),
            e$(this, 'containerRef', i.createRef()),
            e$(this, 'handleToggleSelfMute', () => {
                let { serverMute: e, suppress: t, selfMute: n } = this.props;
                (0, B.Z)(e, t, eq.jXE.ACCOUNT_PANEL), (0, M.v)(A.Z.ACCOUNT, M.d.MIC, n);
            }),
            e$(this, 'handleToggleSelfDeaf', () => {
                let { serverDeaf: e, selfDeaf: t } = this.props;
                (0, L.Z)(e, eq.jXE.ACCOUNT_PANEL), (0, M.v)(A.Z.ACCOUNT, M.d.DEAFEN, !t);
            }),
            e$(this, 'handleOpenAccountSettings', () => {
                this.handleOpenSettings();
            }),
            e$(this, 'handleOpenSettings', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eq.oAB.ACCOUNT,
                    t = arguments.length > 1 ? arguments[1] : void 0,
                    n = arguments.length > 2 ? arguments[2] : void 0;
                x.Z.open(e, t, n);
            }),
            e$(this, 'handleOpenSettingsContextMenu', (e) => {
                let { currentUser: t } = this.props;
                null != t &&
                    (0, N.jW)(e, async () => {
                        let { default: e } = await n.e('2535').then(n.bind(n, 923422));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                e1(e0({}, n), {
                                    user: t,
                                    premiumSubscription: this.props.premiumSubscription,
                                    webBuildOverride: this.props.webBuildOverride,
                                    onInteraction: (0, U.u)('UserSettingsCogContextMenu', A.Z.ACCOUNT)
                                })
                            );
                    });
            }),
            e$(this, 'audioOnInteractionHandler', (0, U.u)('AudioDeviceMenu', A.Z.ACCOUNT)),
            e$(this, 'handleInputAudioContextMenu', (e, t) => {
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
            e$(this, 'handleOutputAudioContextMenu', (e, t) => {
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
            e$(this, 'handleMouseEnter', () => {
                this.setState({ hovered: !0 });
            }),
            e$(this, 'handleMouseLeave', () => {
                this.setState({ hovered: !1 });
            }),
            e$(this, 'handleMouseEnterMute', () => {
                this.setState({
                    hoveringOnMute: !0,
                    shouldShowSpeakingWhileMutedTooltip: !1
                }),
                    this.speakingWhileMutedTooltipTimeout.stop();
            }),
            e$(this, 'handleMouseLeaveMute', () => {
                this.setState({ hoveringOnMute: !1 });
            }),
            e$(this, 'handleCopyTag', () => {
                let { currentUser: e } = this.props,
                    { shouldShowNametagTooltip: t, copiedStreak: n } = this.state;
                if (null == e) return;
                (0, eB.JG)(
                    eF.ZP.getUserTag(e, {
                        decoration: 'never',
                        identifiable: 'always'
                    })
                ),
                    eW.default.track(eq.rMx.TEXT_COPIED, { type: 'User Tag' });
                let r = {
                    shouldShowCopiedFeedback: !0,
                    shouldShowNametagTooltip: !0
                };
                t || (r.copiedStreak = n + 1),
                    this.setState(r, () => {
                        this.copiedTimeout.start(1000, () => this.setState({ shouldShowNametagTooltip: !1 })), this.copiedDecayTimeout.start(2000, () => this.setState({ copiedStreak: 0 }));
                    });
            }),
            e$(this, 'handleOccludedChanged', () => {
                let { occluded: e } = this.props;
                e &&
                    this.setState({
                        shouldShowNametagTooltip: !1,
                        shouldShowSpeakingWhileMutedTooltip: !1
                    });
            }),
            e$(this, 'handleSpeakingWhileMutedChanged', () => {
                let { selfMute: e, serverMute: t, suppress: n, speakingWhileMuted: r, occluded: i } = this.props,
                    { hoveringOnMute: s } = this.state,
                    a = void 0 === this.lastSpeakingWhileMutedNotificationTime || Date.now() - this.lastSpeakingWhileMutedNotificationTime > e3;
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
            e$(this, 'renderNameTag', () => {
                let { currentUser: e } = this.props;
                return null == e
                    ? null
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)('div', {
                                  className: eQ.panelTitleContainer,
                                  children: (0, r.jsx)(eK.Z, { children: eF.ZP.getName(e) })
                              }),
                              (0, r.jsx)('div', {
                                  className: eQ.panelSubtextContainer,
                                  children: (0, r.jsx)(eY.Z, { children: this.renderStatus() })
                              })
                          ]
                      });
            });
    }
}
function e5(e) {
    let { selfDeaf: t, selfMute: n, awaitingRemote: i, serverMute: s, serverDeaf: a, suppress: l, shouldShowSpeakingWhileMutedTooltip: o, isEligibleForPomelo: c, webBuildOverride: d, handleMouseEnterMute: u, handleMouseLeaveMute: m, handleToggleSelfDeaf: g, handleToggleSelfMute: p, handleInputAudioContextMenu: h, handleOutputAudioContextMenu: b, handleOpenAccountSettings: N, handleOpenSettingsContextMenu: x, dismissibleContents: _, nameplate: E, accountContainerRef: j } = e,
        C = (0, en.A)(E);
    return (0, r.jsxs)('div', {
        className: eQ.buttons,
        style: C,
        children: [
            (0, r.jsx)(tt, {
                accountContainerRef: j,
                selfMute: n,
                serverMute: s,
                suppress: l,
                awaitingRemote: i,
                tooltipText: o ? eJ.NW.string(eJ.t['29gnR0']) : void 0,
                tooltipColor: o ? f.FGA.GREEN : void 0,
                tooltipForceOpen: o || void 0,
                onMouseEnter: u,
                onMouseLeave: m,
                onClick: p,
                onContextMenu: h,
                iconForeground: null != E ? eQ.iconForeground : void 0,
                nameplate: E
            }),
            (0, r.jsx)(tn, {
                selfDeaf: t,
                serverDeaf: a,
                onClick: g,
                onContextMenu: b,
                awaitingRemote: i,
                iconForeground: null != E ? eQ.iconForeground : void 0,
                nameplate: E
            }),
            (0, r.jsx)(te, {
                isEligibleForPomelo: c,
                webBuildOverride: d,
                onClick: N,
                onContextMenu: x,
                dismissibleContents: _.settings,
                iconForeground: null != E ? eQ.iconForeground : void 0,
                nameplate: E
            })
        ]
    });
}
function e7() {
    var e;
    let t = (0, o.e7)([ew.default], () => ew.default.getCurrentUser()),
        n = (0, o.e7)([eT.default], () => eT.default.getId()),
        {
            activities: s,
            streaming: a,
            status: l
        } = (0, o.cj)([eD.Z], () => {
            let e = eD.Z.getActivities();
            return {
                activities: e,
                streaming:
                    null !=
                    e.find((e) => {
                        let { type: t } = e;
                        return t === eq.IIU.STREAMING;
                    }),
                status: eD.Z.getStatus()
            };
        }),
        d = (0, o.e7)([ev.Z], () => ev.Z.getAnyStreamForUser(n)),
        u = (0, C.Z)({ userId: n }),
        m = eF.ZP.useUserTag(t, { decoration: 'never' }),
        g = (0, o.e7)([eZ.Z], () => eZ.Z.hidePersonalInformation),
        p = (0, o.e7)([eP.Z, eI.Z], () => {
            let e = eP.Z.getChannelId();
            return null != e ? eI.Z.getChannel(e) : null;
        }),
        { mute: h, selfMute: N, suppress: x } = (0, ex.Z)(p),
        { selfDeaf: _, deaf: O } = (0, eN.Z)(p),
        v = (0, o.e7)([Z.C], () => {
            var e;
            return (0, w.fD)() ? (null == (e = Z.C.getCurrentBuildOverride().overrides) ? void 0 : e.discord_web) : null;
        }),
        T = (0, o.e7)([ek.ZP], () => ek.ZP.getPremiumTypeSubscription()),
        I = (0, o.e7)([eA.Z], () => eA.Z.getSpeakingWhileMuted()),
        y = (0, o.e7)([ey.Z], () => ey.Z.hasLayers()),
        R = (0, f.s9z)(f.JQI) || y || eG.s.isDisallowPopupsSet(),
        D = (0, es.b)(),
        k = (0, o.e7)([K.Z], () => null != K.Z.getAwaitingRemoteSessionInfo()),
        W = (0, o.e7)([eR.Z], () => eR.Z.getGuildId()),
        L = (0, ec.D)(),
        B = (0, E.u)(),
        M = eV.ZP.canUsePremiumGuildMemberProfile(t),
        U = (null == t || null == (e = t.avatarDecoration) ? void 0 : e.skuId) === eX.rL,
        { voiceActivityStatusEnabled: V } = (0, S.U)({ location: 'Account' }),
        { simplifiedSettingsEnabled: G } = (0, eb.Z)({ location: 'Account' }),
        F = (0, Q.m)(),
        [H, Y] = (0, X.G)(null != W ? W : null),
        q = 'account';
    (0, j.j)({
        location: q + ' auto on',
        autoTrackExposure: !0
    }),
        (0, j.j)({
            location: q + ' auto off',
            autoTrackExposure: !1
        });
    let J = (0, o.e7)([em.Z], () => em.Z.hasHadOtherUserPlaySoundInSession()),
        $ = (function () {
            let e = (0, z.wE)(c.z.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2),
                [t, n] = (0, o.Wu)([ea.Z], () => [ea.Z.hasFetchedRelevance, ea.Z.profileThemesRelevanceExceeded]),
                [r, s] = (0, o.Wu)([ek.ZP], () => [ek.ZP.hasFetchedMostRecentPremiumTypeSubscription(), ek.ZP.getMostRecentPremiumTypeSubscription()]),
                { enabled: a } = el.Z.useExperiment({ location: '08bd40_1' }, { autoTrackExposure: !0 }),
                l = i.useMemo(() => {
                    let e = new Date().getTime();
                    return null != s && (s.status === eq.O0b.ACTIVE || e - s.currentPeriodEnd.getTime() < e8);
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
        { analyticsLocations: ee } = (0, P.ZP)(A.Z.ACCOUNT),
        en = (0, et.K)({
            location: 'Account',
            user: t
        }),
        er = {
            avatar: [],
            settings: []
        };
    return (
        !R && ($ && er.settings.push(c.z.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2), L && (1 === B ? er.settings.push(c.z.USER_SAFETY_CONSUMER_EDUCATION_MUTE) : er.settings.push(c.z.USER_SAFETY_CONSUMER_EDUCATION_BLOCK)), J && er.settings.push(c.z.SOUNDBOARD_VOLUME_EDUCATION), M && er.settings.push(c.z.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK), U && er.avatar.push(c.z.PREMIUM_SUBSCRIPTION_APRIL_MARKETING_DECO_TOOLTIP), F && er.avatar.push(c.z.EXPIRING_STATUS_COACHMARK)),
        (0, r.jsx)(P.Gt, {
            value: ee,
            children: (0, r.jsx)(e9, {
                currentUser: t,
                activities: s,
                applicationStream: d,
                voiceChannel: p,
                dismissibleContents: er,
                visibleRecurringAvatarDc: H,
                markRecurringAvatarDcAsDismissed: Y,
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
                suppress: x,
                webBuildOverride: v,
                awaitingRemote: k,
                isEligibleForPomelo: D,
                simplifiedCallSettingsEnabled: G,
                voiceActivityStatusEnabled: V,
                nameplate: en,
                selectedGuildId: W
            })
        })
    );
}
function te(e) {
    let { webBuildOverride: t, isEligibleForPomelo: n, onClick: s, onContextMenu: a, dismissibleContents: l, iconForeground: o, nameplate: d } = e,
        u = i.useRef(null),
        m = f.ewm,
        g = (0, p.i)();
    m = null != t ? f.bgT : n ? f.Ncx : g.Component;
    let [h, b] = (0, Y.US)(l);
    return (0, r.jsx)(f.yRy, {
        targetElementRef: u,
        position: 'top',
        align: 'center',
        shouldShow: null != h,
        renderPopout: h === c.z.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2 ? () => (0, r.jsx)(eo.Z, {}) : h === c.z.USER_SAFETY_CONSUMER_EDUCATION_BLOCK ? () => (0, r.jsx)(ed.Z, { markAsDismissed: b }) : h === c.z.USER_SAFETY_CONSUMER_EDUCATION_MUTE ? () => (0, r.jsx)(eu.Z, { markAsDismissed: b }) : h === c.z.SOUNDBOARD_VOLUME_EDUCATION ? () => (0, r.jsx)(eg.Z, { markAsDismissed: b }) : h === c.z.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK ? () => (0, r.jsx)(ep.Z, {}) : () => (0, r.jsx)(r.Fragment, {}),
        children: () =>
            (0, r.jsx)(
                ez.Z,
                e1(
                    e0(
                        {
                            ref: u,
                            tooltipText: null != t ? eJ.NW.formatToPlainString(eJ.t.Gzh6ZG, { webBuildOverride: t.id }) : eJ.NW.string(eJ.t.cduTBA),
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
function tt(e) {
    let { selfMute: t, serverMute: n, suppress: s, awaitingRemote: c, tooltipText: d, tooltipColor: u, tooltipForceOpen: p, iconForeground: b, onMouseEnter: N, onMouseLeave: x, onClick: _, onContextMenu: E, nameplate: j, accountContainerRef: C } = e,
        O = t || s || n,
        S = i.useRef(null),
        v = i.useRef(null),
        T = (0, m.O)(O ? 'unmute' : 'mute'),
        I = (0, g.P)(O ? 'unmute' : 'mute'),
        { activeVoice: y } = (0, ej.o)(),
        R = null != y,
        D = (0, eE.z)(y),
        Z = (0, o.e7)([eP.Z], () => eP.Z.isConnected()),
        { Component: w, events: k, play: L } = R ? I : T,
        B = n || s ? f.v0G : w,
        { mode: M } = (0, ef.ZP)({ location: 'RTC Microphone Button' }),
        { coloredIconsEnabled: U } = (0, eb.Z)({ location: 'RTC Microphone Button' }),
        V = null != d ? d : (0, W.Z)(t, n, s, c, M === ef.BK.GroupedButtonsRedMic),
        { analyticsLocations: G } = (0, P.ZP)(A.Z.AUDIO_INPUT_BUTTON),
        F = (0, e_.Hu)({
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
                        X(!0), (e = setTimeout(() => X(!1), e6));
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
                className: eQ.micButtonParent,
                children: [
                    (0, r.jsx)(ez.Z, {
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
                            color: O ? f.TVs.colors.STATUS_DANGER : 'currentColor',
                            className: b
                        }),
                        onClick: _,
                        onContextMenu: H,
                        role: 'switch',
                        className: a()({ [eQ.micButtonWithMenu]: F }),
                        redGlow: O && U,
                        'aria-label': eJ.NW.string(eJ.t['w4m94+']),
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
                            onRequestOpen: eC.r5,
                            onRequestClose: K,
                            shouldShow: z,
                            renderPopout: (e) => {
                                let { closePopout: t } = e;
                                return (0, r.jsx)(eS.l, { onSettingsButtonClick: t });
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
                                    children: (0, r.jsx)(eO.B, {
                                        targetElementRef: v,
                                        onCTA: () => Y(!0),
                                        canBeShown: !s,
                                        children: (e, t) =>
                                            (0, r.jsx)(
                                                ez.Z,
                                                e0(
                                                    {
                                                        ref: v,
                                                        plated: null != j,
                                                        tooltipForceOpen: q,
                                                        tooltipColor: q ? f.FGA.GREEN : void 0,
                                                        tooltipContentClassName: q ? eQ.voiceFilterWarning : void 0,
                                                        tooltipText: q
                                                            ? (0, r.jsxs)(r.Fragment, {
                                                                  children: [
                                                                      (0, r.jsx)('img', {
                                                                          alt: null != D ? eJ.NW.string(D.name) : '',
                                                                          src: null == D ? void 0 : D.iconURL,
                                                                          draggable: !1
                                                                      }),
                                                                      (0, r.jsx)(f.Text, {
                                                                          variant: 'text-sm/medium',
                                                                          color: 'always-white',
                                                                          children: eJ.NW.string(eJ.t.VlC1dX)
                                                                      })
                                                                  ]
                                                              })
                                                            : eJ.NW.string(eJ.t.Hapb4O),
                                                        icon: (0, r.jsx)(l, {
                                                            className: eQ.buttonChevronIcon,
                                                            size: 'custom',
                                                            width: 12,
                                                            height: 12,
                                                            color: U && O ? f.TVs.colors.STATUS_DANGER : f.TVs.colors.TEXT_NORMAL
                                                        }),
                                                        role: 'button',
                                                        className: a()([eQ.buttonChevron], { [eQ.redGlow]: O && U }),
                                                        redGlow: O && U,
                                                        'aria-label': eJ.NW.string(eJ.t.Hapb4O),
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
function tn(e) {
    let { selfDeaf: t, serverDeaf: n, awaitingRemote: s, onClick: l, onContextMenu: o, iconForeground: c, nameplate: d } = e,
        m = t || n,
        {
            Component: g,
            play: p,
            events: { onMouseEnter: h, onMouseLeave: b }
        } = (0, u.l)(m ? 'undeafen' : 'deafen'),
        N = n ? f.Vm4 : g,
        { coloredIconsEnabled: x } = (0, eb.Z)({ location: 'RTC Microphone Button' }),
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
        children: (0, r.jsx)(ez.Z, {
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
            onClick: l,
            onContextMenu: E,
            innerClassName: a()({ [eQ.redIcon]: n }),
            iconForeground: m ? eQ.strikethrough : void 0,
            role: 'switch',
            redGlow: x && m,
            'aria-label': eJ.NW.string(eJ.t.wjcRFR),
            'aria-checked': m,
            disabled: s
        })
    });
}
