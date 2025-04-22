n.d(t, {
    Z: () => ts,
    m: () => ti
}),
    n(388685),
    n(539854);
var i = n(200651),
    r = n(192379),
    s = n(120356),
    l = n.n(s),
    a = n(374470),
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
    x = n(230711),
    E = n(410575),
    j = n(941129),
    C = n(634894),
    O = n(586902),
    S = n(980591),
    v = n(468363),
    T = n(326255),
    I = n(747017),
    N = n(963056),
    y = n(570928),
    A = n(100527),
    P = n(906732),
    R = n(676742),
    D = n(1585),
    Z = n(304761),
    w = n(865427),
    k = n(571250),
    L = n(628581),
    B = n(55311),
    M = n(575175),
    U = n(522651),
    V = n(795318),
    G = n(526371),
    F = n(64220),
    H = n(359588),
    z = n(459115),
    Y = n(427217),
    W = n(132750),
    K = n(526031),
    q = n(540059),
    X = n(605236),
    Q = n(243778),
    J = n(258609),
    $ = n(53891),
    ee = n(291533),
    et = n(427347),
    en = n(50697),
    ei = n(90042),
    er = n(78933),
    es = n(850020),
    el = n(379839),
    ea = n(359135),
    eo = n(516817),
    ec = n(332473),
    ed = n(240504),
    eu = n(637906),
    em = n(39370),
    eg = n(667105),
    ep = n(19199),
    eh = n(866483),
    ef = n(14357),
    eb = n(763296),
    e_ = n(640806),
    ex = n(52538),
    eE = n(670188),
    ej = n(861254),
    eC = n(221241),
    eO = n(879815),
    eS = n(294629),
    ev = n(875527),
    eT = n(56848),
    eI = n(378441),
    eN = n(358820),
    ey = n(469887),
    eA = n(306609),
    eP = n(199902),
    eR = n(314897),
    eD = n(592125),
    eZ = n(819640),
    ew = n(131951),
    ek = n(19780),
    eL = n(914010),
    eB = n(885110),
    eM = n(246946),
    eU = n(594174),
    eV = n(78839),
    eG = n(626135),
    eF = n(768581),
    eH = n(572004),
    ez = n(585483),
    eY = n(70956),
    eW = n(74538),
    eK = n(374023),
    eq = n(51144),
    eX = n(998502),
    eQ = n(870569),
    eJ = n(345243),
    e$ = n(115530),
    e0 = n(981631),
    e1 = n(215023),
    e2 = n(46140),
    e3 = n(388032),
    e6 = n(239692);
function e8(e, t, n) {
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
function e9(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                e8(e, t, n[t]);
            });
    }
    return e;
}
function e4(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let e5 = eX.ZP.getEnableHardwareAcceleration() ? f.Xo$ : f.qEK,
    e7 = 2 * eY.Z.Millis.MINUTE,
    te = 3 * eY.Z.Millis.SECOND,
    tt = 30 * eY.Z.Millis.DAY;
function tn(e) {
    let { speaking: t, streaming: n, currentUser: s, status: a, handleClick: o, handleMouseLeave: c, renderNameTag: d, nameplate: u, 'data-jump-section': m } = e,
        g = r.useRef(null),
        p = (0, q.Q3)('RTC Avatar'),
        { coloredIconsEnabled: h } = (0, eC.Z)({ location: 'RTC Avatar' }),
        b = (0, R.Z)(null == s ? void 0 : s.avatarDecoration),
        _ = (0, eF.NZ)({
            avatarDecoration: b,
            size: (0, D.y9)(f.EFr.SIZE_32)
        }),
        x = (0, f.dQu)(f.TVs.modules.guildbar.AVATAR_SIZE),
        {
            updateOpenPopoutRef: j,
            highlightBadge: C,
            setHighlightBadge: O
        } = (function () {
            let e = r.useRef(null),
                t = r.useCallback((t) => {
                    e.current = () => {
                        t.onMouseDown(), t.onClick();
                    };
                }, []),
                [n, i] = r.useState(),
                [s, l] = r.useState(!1);
            return (
                (0, S.Z)(() => l(!0), 750),
                r.useEffect(() => {
                    let t = (t) => {
                        var n;
                        let { highlightBadge: r } = t;
                        null != r && i(r), null == (n = e.current) || n.call(e);
                    };
                    return (
                        ez.S.subscribe(e0.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, t),
                        () => {
                            ez.S.unsubscribe(e0.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, t);
                        }
                    );
                }),
                {
                    updateOpenPopoutRef: t,
                    highlightBadge: s ? n : void 0,
                    setHighlightBadge: i
                }
            );
        })(),
        v = (0, el.A)(u);
    return null == s
        ? null
        : (0, i.jsx)(E.Z, {
              object: e0.qAy.AVATAR,
              children: (0, i.jsx)(eE.Z, {
                  user: s,
                  targetElementRef: g,
                  clickTrap: !0,
                  renderPopout: (e, t) => {
                      let { closePopout: n, setPopoutRef: r } = e;
                      return (0, i.jsx)(er.Z, {
                          currentUser: s,
                          highlightBadge: C,
                          openedAt: t,
                          onClose: () => {
                              null == n || n();
                          },
                          setPopoutRef: r
                      });
                  },
                  position: 'top',
                  align: 'left',
                  animation: f.yRy.Animation.FADE,
                  spacing: 14,
                  fixed: !0,
                  onRequestClose: () => {
                      c(), O(void 0);
                  },
                  children: (e) => (
                      j(e),
                      (0, i.jsxs)(
                          f.P3F,
                          e4(
                              e9(
                                  {
                                      innerRef: g,
                                      style: v
                                  },
                                  e
                              ),
                              {
                                  onClick: (t) => {
                                      var n;
                                      null == (n = e.onClick) || n.call(e, t), null == o || o(t);
                                  },
                                  'aria-label': e3.intl.string(e3.t['3Uj+2t']),
                                  'data-jump-section': p ? m : void 0,
                                  className: l()(e6.avatarWrapper, !p && h && e6.experiment, { [e6.plated]: null != u }),
                                  children: [
                                      (0, i.jsx)(e5, {
                                          size: p ? f.EFr['SIZE_'.concat(x)] : f.EFr.SIZE_32,
                                          src: s.getAvatarURL(void 0, p ? x - 4 : 32, !1),
                                          avatarDecoration: _,
                                          'aria-label': s.username,
                                          status: n ? e0.Skl.STREAMING : a,
                                          isSpeaking: t,
                                          className: e6.avatar
                                      }),
                                      (0, i.jsx)('div', {
                                          className: l()(e6.nameTag, { [e6.canCopy]: eH.wS }),
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
class ti extends r.PureComponent {
    get isCopiedStreakGodlike() {
        let { copiedStreak: e } = this.state;
        return e >= 10;
    }
    componentDidUpdate(e) {
        let { speakingWhileMuted: t, occluded: n } = e,
            { speakingWhileMuted: i, occluded: r } = this.props;
        r !== n && this.handleOccludedChanged(), i !== t && this.handleSpeakingWhileMutedChanged();
    }
    componentWillUnmount() {
        this.copiedTimeout.stop(), this.copiedDecayTimeout.stop(), this.speakingWhileMutedTooltipTimeout.stop();
    }
    renderCopiedSuccess() {
        let { copiedStreak: e } = this.state,
            t = [e3.intl.string(e3.t.MSaeTU), e3.intl.string(e3.t.UmrCw8), e3.intl.string(e3.t.gKE0Ji), e3.intl.string(e3.t['4DSKbm']), e3.intl.string(e3.t['+8ENdX']), e3.intl.string(e3.t.GlWHv7), e3.intl.string(e3.t.hIzxU1), e3.intl.string(e3.t['26uMPD']), e3.intl.string(e3.t.uFs7R0), e3.intl.string(e3.t.bLXdcX), e3.intl.string(e3.t.gPg9fX)],
            n = Math.min(Math.max(0, e - 1), t.length - 1);
        return (0, i.jsx)(f.UkV, {
            isShaking: this.isCopiedStreakGodlike,
            children: t[n]
        });
    }
    renderStatus() {
        let { hovered: e } = this.state,
            { activities: t, applicationStream: n, currentUser: r, status: s, userTag: l, voiceActivityStatusEnabled: a, voiceChannel: o, customStatusRTCEntrypointEnabled: c } = this.props;
        if (null == r) return null;
        if (c)
            return (0, i.jsx)(W.Z, {
                user: r,
                applicationStream: n,
                voiceChannel: a ? o : void 0,
                activities: t,
                hovered: e
            });
        if (
            (0, T.Z)({
                activities: t,
                status: s,
                applicationStream: n,
                voiceChannel: a ? o : void 0
            })
        )
            return (0, i.jsx)(y.Z, {
                hoverText: l,
                forceHover: e,
                children: (0, i.jsx)(I.Z, {
                    user: r,
                    activities: t,
                    applicationStream: n,
                    voiceChannel: a ? o : void 0,
                    textClassName: e6.activityStatusText,
                    hideTooltip: !0
                })
            });
        let d =
            null == t
                ? void 0
                : t.find((e) => {
                      let { type: t } = e;
                      return t === e0.IIU.CUSTOM_STATUS;
                  });
        return null != d
            ? (0, i.jsx)(y.Z, {
                  hoverText: l,
                  forceHover: e,
                  children: (0, i.jsx)(Y.Z, {
                      activity: d,
                      emojiClassName: e6.emoji,
                      className: e6.customStatus
                  })
              })
            : null != s && s !== e0.Skl.UNKNOWN && r.isPomelo()
              ? (0, i.jsx)(y.Z, {
                    hoverText: l,
                    forceHover: e,
                    children: (0, i.jsx)(N.Z, { text: eq.ZP.humanizeStatus(s) })
                })
              : l;
    }
    renderAvatarWithPopout(e) {
        let {
            focusSectionProps: { 'data-jump-section': t },
            onClick: n
        } = e;
        return (0, i.jsx)(
            tn,
            e4(e9({}, this.props), {
                handleClick: n,
                handleMouseLeave: this.handleMouseLeave,
                renderNameTag: this.renderNameTag,
                'data-jump-section': t
            })
        );
    }
    renderNameZone(e) {
        let { currentUser: t, dismissibleContents: n, visibleRecurringAvatarDc: r, markRecurringAvatarDcAsDismissed: s } = this.props;
        if (null == t) return null;
        if (r === c.z.GUILD_TAG_AVAILABLE_COACHMARK) {
            var l;
            return (0, i.jsx)($.ZP, {
                guildId: null != (l = this.props.selectedGuildId) ? l : null,
                onDismiss: s,
                children: () => this.renderAvatarWithPopout({ focusSectionProps: e })
            });
        }
        return (0, i.jsx)(Q.ZP, {
            contentTypes: n.avatar,
            children: (t) => {
                let { visibleContent: n, markAsDismissed: r } = t;
                switch (n) {
                    case c.z.PREMIUM_SUBSCRIPTION_APRIL_MARKETING_DECO_TOOLTIP:
                        return (0, i.jsx)(F.Z, {
                            markAsDismissed: r,
                            children: () => this.renderAvatarWithPopout({ focusSectionProps: e })
                        });
                    case c.z.EXPIRING_STATUS_COACHMARK:
                        return (0, i.jsx)(ei.Z, {
                            markAsDismissed: r,
                            children: (t) => {
                                let { onClick: n } = t;
                                return this.renderAvatarWithPopout({
                                    focusSectionProps: e,
                                    onClick: n
                                });
                            }
                        });
                    case c.z.CUSTOM_STATUS_PROMPTS_COACHMARK:
                        return (0, i.jsx)(K.Z, {
                            markAsDismissed: r,
                            children: () => this.renderAvatarWithPopout({ focusSectionProps: e })
                        });
                    default:
                        return this.renderAvatarWithPopout({ focusSectionProps: e });
                }
            }
        });
    }
    render() {
        let { currentUser: e, nameplate: t, voiceChannel: n, isQuestBarEmpty: r } = this.props,
            s = this.state.hovered;
        return null == e
            ? null
            : (0, i.jsx)(f.Wdt, {
                  children: (e) =>
                      (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsxs)('div', {
                                  ref: this.containerRef,
                                  className: l()(e6.container, {
                                      [e6.containerRtcOpened]: null != n,
                                      [e6.containerQuestBarVisible]: !r
                                  }),
                                  onMouseEnter: this.handleMouseEnter,
                                  onMouseLeave: this.handleMouseLeave,
                                  children: [
                                      (0, i.jsx)(eo.Z, {
                                          nameplate: t,
                                          hovered: s,
                                          placement: ea.i.ACCOUNT
                                      }),
                                      this.renderNameZone(e),
                                      (0, i.jsx)(
                                          tr,
                                          e4(e9({}, this.props, this.state), {
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
                              (0, i.jsx)(et.Z, {}),
                              (0, i.jsx)(G.Z, {})
                          ]
                      })
              });
    }
    constructor(...e) {
        super(...e),
            e8(this, 'copiedTimeout', new d.V7()),
            e8(this, 'copiedDecayTimeout', new d.V7()),
            e8(this, 'speakingWhileMutedTooltipTimeout', new d.V7()),
            e8(this, 'lastSpeakingWhileMutedNotificationTime', void 0),
            e8(this, 'state', {
                hovered: !1,
                copiedStreak: 0,
                shouldShowNametagTooltip: !1,
                shouldShowCopiedFeedback: !1,
                shouldShowSpeakingWhileMutedTooltip: !1,
                hoveringOnMute: !1
            }),
            e8(this, 'containerRef', r.createRef()),
            e8(this, 'handleToggleSelfMute', () => {
                let { serverMute: e, suppress: t, selfMute: n } = this.props;
                (0, M.Z)(e, t, e0.jXE.ACCOUNT_PANEL), (0, U.v)(A.Z.ACCOUNT, U.d.MIC, n);
            }),
            e8(this, 'handleToggleSelfDeaf', () => {
                let { serverDeaf: e, selfDeaf: t } = this.props;
                (0, B.Z)(e, e0.jXE.ACCOUNT_PANEL), (0, U.v)(A.Z.ACCOUNT, U.d.DEAFEN, !t);
            }),
            e8(this, 'handleOpenAccountSettings', () => {
                this.handleOpenSettings();
            }),
            e8(this, 'handleOpenSettings', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e0.oAB.ACCOUNT,
                    t = arguments.length > 1 ? arguments[1] : void 0,
                    n = arguments.length > 2 ? arguments[2] : void 0;
                x.Z.open(e, t, n);
            }),
            e8(this, 'handleOpenSettingsContextMenu', (e) => {
                let { currentUser: t } = this.props;
                null != t &&
                    (0, _.jW)(e, async () => {
                        let { default: e } = await n.e('2535').then(n.bind(n, 923422));
                        return (n) =>
                            (0, i.jsx)(
                                e,
                                e4(e9({}, n), {
                                    user: t,
                                    premiumSubscription: this.props.premiumSubscription,
                                    webBuildOverride: this.props.webBuildOverride,
                                    onInteraction: (0, V.u)('UserSettingsCogContextMenu', A.Z.ACCOUNT)
                                })
                            );
                    });
            }),
            e8(this, 'audioOnInteractionHandler', (0, V.u)('AudioDeviceMenu', A.Z.ACCOUNT)),
            e8(this, 'handleInputAudioContextMenu', (e, t) => {
                (0, _.jW)(e, async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 659580));
                    return () =>
                        (0, i.jsx)(P.Gt, {
                            value: t,
                            children: this.props.simplifiedCallSettingsEnabled
                                ? (0, i.jsx)(e, {
                                      onClose: _.Zy,
                                      renderInputDevices: !0,
                                      renderInputVolume: !0,
                                      simplified: !0,
                                      onInteraction: this.audioOnInteractionHandler
                                  })
                                : (0, i.jsx)(e, {
                                      onClose: _.Zy,
                                      renderInputDevices: !0,
                                      renderInputModes: !0,
                                      renderInputVolume: !0,
                                      onInteraction: this.audioOnInteractionHandler
                                  })
                        });
                });
            }),
            e8(this, 'handleOutputAudioContextMenu', (e, t) => {
                (0, _.jW)(e, async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 659580));
                    return () =>
                        (0, i.jsx)(P.Gt, {
                            value: t,
                            children: this.props.simplifiedCallSettingsEnabled
                                ? (0, i.jsx)(e, {
                                      onClose: _.Zy,
                                      renderOutputDevices: !0,
                                      renderOutputVolume: !0,
                                      simplified: !0,
                                      onInteraction: this.audioOnInteractionHandler
                                  })
                                : (0, i.jsx)(e, {
                                      onClose: _.Zy,
                                      renderOutputDevices: !0,
                                      renderOutputVolume: !0,
                                      onInteraction: this.audioOnInteractionHandler
                                  })
                        });
                });
            }),
            e8(this, 'handleMouseEnter', () => {
                this.setState({ hovered: !0 });
            }),
            e8(this, 'handleMouseLeave', () => {
                this.setState({ hovered: !1 });
            }),
            e8(this, 'handleMouseEnterMute', () => {
                this.setState({
                    hoveringOnMute: !0,
                    shouldShowSpeakingWhileMutedTooltip: !1
                }),
                    this.speakingWhileMutedTooltipTimeout.stop();
            }),
            e8(this, 'handleMouseLeaveMute', () => {
                this.setState({ hoveringOnMute: !1 });
            }),
            e8(this, 'handleCopyTag', () => {
                let { currentUser: e } = this.props,
                    { shouldShowNametagTooltip: t, copiedStreak: n } = this.state;
                if (null == e) return;
                (0, eH.JG)(
                    eq.ZP.getUserTag(e, {
                        decoration: 'never',
                        identifiable: 'always'
                    })
                ),
                    eG.default.track(e0.rMx.TEXT_COPIED, { type: 'User Tag' });
                let i = {
                    shouldShowCopiedFeedback: !0,
                    shouldShowNametagTooltip: !0
                };
                t || (i.copiedStreak = n + 1),
                    this.setState(i, () => {
                        this.copiedTimeout.start(1000, () => this.setState({ shouldShowNametagTooltip: !1 })), this.copiedDecayTimeout.start(2000, () => this.setState({ copiedStreak: 0 }));
                    });
            }),
            e8(this, 'handleOccludedChanged', () => {
                let { occluded: e } = this.props;
                e &&
                    this.setState({
                        shouldShowNametagTooltip: !1,
                        shouldShowSpeakingWhileMutedTooltip: !1
                    });
            }),
            e8(this, 'handleSpeakingWhileMutedChanged', () => {
                let { selfMute: e, serverMute: t, suppress: n, speakingWhileMuted: i, occluded: r } = this.props,
                    { hoveringOnMute: s } = this.state,
                    l = void 0 === this.lastSpeakingWhileMutedNotificationTime || Date.now() - this.lastSpeakingWhileMutedNotificationTime > e7;
                i
                    ? s ||
                      !e ||
                      t ||
                      n ||
                      r ||
                      !l ||
                      this.setState({ shouldShowSpeakingWhileMutedTooltip: !0 }, () => {
                          (this.lastSpeakingWhileMutedNotificationTime = Date.now()), this.speakingWhileMutedTooltipTimeout.start(2000, () => this.setState({ shouldShowSpeakingWhileMutedTooltip: !1 }));
                      })
                    : (this.setState({ shouldShowSpeakingWhileMutedTooltip: !1 }), this.speakingWhileMutedTooltipTimeout.stop());
            }),
            e8(this, 'renderNameTag', () => {
                let { currentUser: e } = this.props;
                return null == e
                    ? null
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)('div', {
                                  className: e6.panelTitleContainer,
                                  children: (0, i.jsx)(e$.Z, { children: eq.ZP.getName(e) })
                              }),
                              (0, i.jsx)('div', {
                                  className: e6.panelSubtextContainer,
                                  children: (0, i.jsx)(eJ.Z, { children: this.renderStatus() })
                              })
                          ]
                      });
            });
    }
}
function tr(e) {
    let { selfDeaf: t, selfMute: n, awaitingRemote: r, serverMute: s, serverDeaf: l, suppress: a, shouldShowSpeakingWhileMutedTooltip: o, isEligibleForPomelo: c, webBuildOverride: d, handleMouseEnterMute: u, handleMouseLeaveMute: m, handleToggleSelfDeaf: g, handleToggleSelfMute: p, handleInputAudioContextMenu: h, handleOutputAudioContextMenu: b, handleOpenAccountSettings: _, handleOpenSettingsContextMenu: x, dismissibleContents: E, nameplate: j, accountContainerRef: C } = e,
        O = (0, el.A)(j);
    return (0, i.jsxs)('div', {
        className: e6.buttons,
        style: O,
        children: [
            (0, i.jsx)(ta, {
                accountContainerRef: C,
                selfMute: n,
                serverMute: s,
                suppress: a,
                awaitingRemote: r,
                tooltipText: o ? e3.intl.string(e3.t['29gnR0']) : void 0,
                tooltipColor: o ? f.FGA.GREEN : void 0,
                tooltipForceOpen: o || void 0,
                onMouseEnter: u,
                onMouseLeave: m,
                onClick: p,
                onContextMenu: h,
                iconForeground: null != j ? e6.iconForeground : void 0,
                nameplate: j
            }),
            (0, i.jsx)(to, {
                selfDeaf: t,
                serverDeaf: l,
                onClick: g,
                onContextMenu: b,
                awaitingRemote: r,
                iconForeground: null != j ? e6.iconForeground : void 0,
                nameplate: j
            }),
            (0, i.jsx)(tl, {
                isEligibleForPomelo: c,
                webBuildOverride: d,
                onClick: _,
                onContextMenu: x,
                dismissibleContents: E.settings,
                iconForeground: null != j ? e6.iconForeground : void 0,
                nameplate: j
            })
        ]
    });
}
function ts() {
    var e;
    let t = (0, o.e7)([eU.default], () => eU.default.getCurrentUser()),
        n = (0, o.e7)([eR.default], () => eR.default.getId()),
        {
            activities: s,
            streaming: l,
            status: a
        } = (0, o.cj)([eB.Z], () => {
            let e = eB.Z.getActivities();
            return {
                activities: e,
                streaming:
                    null !=
                    e.find((e) => {
                        let { type: t } = e;
                        return t === e0.IIU.STREAMING;
                    }),
                status: eB.Z.getStatus()
            };
        }),
        d = (0, o.e7)([eP.Z], () => eP.Z.getAnyStreamForUser(n)),
        u = (0, O.Z)({ userId: n }),
        m = eq.ZP.useUserTag(t, { decoration: 'never' }),
        g = (0, o.e7)([eM.Z], () => eM.Z.hidePersonalInformation),
        p = (0, o.e7)([ek.Z, eD.Z], () => {
            let e = ek.Z.getChannelId();
            return null != e ? eD.Z.getChannel(e) : null;
        }),
        { mute: h, selfMute: _, suppress: x } = (0, eS.Z)(p),
        { selfDeaf: E, deaf: S } = (0, eO.Z)(p),
        T = (0, o.e7)([Z.C], () => {
            var e;
            return (0, w.fD)() ? (null == (e = Z.C.getCurrentBuildOverride().overrides) ? void 0 : e.discord_web) : null;
        }),
        I = (0, o.e7)([eV.ZP], () => eV.ZP.getPremiumTypeSubscription()),
        N = (0, o.e7)([ew.Z], () => ew.Z.getSpeakingWhileMuted()),
        y = (0, o.e7)([eZ.Z], () => eZ.Z.hasLayers()),
        R = (0, f.s9z)(f.JQI) || y || eK.s.isDisallowPopupsSet(),
        D = (0, ec.b)(),
        k = (0, o.e7)([J.Z], () => null != J.Z.getAwaitingRemoteSessionInfo()),
        L = (0, o.e7)([eL.Z], () => eL.Z.getGuildId()),
        B = (0, ep.D)(),
        M = (0, j.u)(),
        U = eW.ZP.canUsePremiumGuildMemberProfile(t),
        V = (null == t || null == (e = t.avatarDecoration) ? void 0 : e.skuId) === e1.rL,
        { voiceActivityStatusEnabled: G } = (0, v.U)({ location: 'Account' }),
        { simplifiedSettingsEnabled: F } = (0, eC.Z)({ location: 'Account' }),
        Y = (0, en.m)(),
        [W, K] = (0, ee.G)(null != L ? L : null),
        { enabled: q } = (0, z.Z)({ location: 'Account' }),
        Q = 'account';
    (0, C.j)({
        location: Q + ' auto on',
        autoTrackExposure: !0
    }),
        (0, C.j)({
            location: Q + ' auto off',
            autoTrackExposure: !1
        });
    let $ = (0, o.e7)([eb.Z], () => eb.Z.hasHadOtherUserPlaySoundInSession()),
        et = (function () {
            let e = (0, X.wE)(c.z.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2),
                [t, n] = (0, o.Wu)([ed.Z], () => [ed.Z.hasFetchedRelevance, ed.Z.profileThemesRelevanceExceeded]),
                [i, s] = (0, o.Wu)([eV.ZP], () => [eV.ZP.hasFetchedMostRecentPremiumTypeSubscription(), eV.ZP.getMostRecentPremiumTypeSubscription()]),
                { enabled: l } = eu.Z.useExperiment({ location: '08bd40_1' }, { autoTrackExposure: !0 }),
                a = r.useMemo(() => {
                    let e = new Date().getTime();
                    return null != s && (s.status === e0.O0b.ACTIVE || e - s.currentPeriodEnd.getTime() < tt);
                }, [s]);
            return (
                r.useEffect(() => {
                    (async () => {
                        if (!e && null == n && l) {
                            if (!i) return await (0, b.ou)();
                            !a && (t || (await (0, b.l0)()));
                        }
                    })();
                }, [l, n, e, i, t, a]),
                !e && !!l && !a && null != n && n
            );
        })(),
        { analyticsLocations: ei } = (0, P.ZP)(A.Z.ACCOUNT),
        er = (0, es.K)({
            location: 'Account',
            user: t
        }),
        el = (0, eg.Ws)({ location: e2.dr.CONFLICT_CHECKS }),
        ea = (0, H.Z)({ location: 'AccountConnected' }),
        eo = {
            avatar: [],
            settings: []
        };
    return (
        !R && (et && eo.settings.push(c.z.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2), B && (1 === M ? eo.settings.push(c.z.USER_SAFETY_CONSUMER_EDUCATION_MUTE) : eo.settings.push(c.z.USER_SAFETY_CONSUMER_EDUCATION_BLOCK)), $ && eo.settings.push(c.z.SOUNDBOARD_VOLUME_EDUCATION), U && eo.settings.push(c.z.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK), V && eo.avatar.push(c.z.PREMIUM_SUBSCRIPTION_APRIL_MARKETING_DECO_TOOLTIP), Y && eo.avatar.push(c.z.EXPIRING_STATUS_COACHMARK), ea && eo.avatar.push(c.z.CUSTOM_STATUS_PROMPTS_COACHMARK)),
        (0, i.jsx)(P.Gt, {
            value: ei,
            children: (0, i.jsx)(ti, {
                currentUser: t,
                activities: s,
                applicationStream: d,
                voiceChannel: p,
                dismissibleContents: eo,
                visibleRecurringAvatarDc: W,
                markRecurringAvatarDcAsDismissed: K,
                userTag: m,
                hidePrivateData: g,
                occluded: R,
                premiumSubscription: I,
                selfDeaf: E,
                selfMute: _,
                serverDeaf: S,
                serverMute: h,
                speaking: u,
                speakingWhileMuted: N,
                status: a,
                streaming: l,
                suppress: x,
                webBuildOverride: T,
                awaitingRemote: k,
                isEligibleForPomelo: D,
                simplifiedCallSettingsEnabled: F,
                voiceActivityStatusEnabled: G,
                nameplate: er,
                selectedGuildId: L,
                customStatusRTCEntrypointEnabled: q,
                isQuestBarEmpty: el
            })
        })
    );
}
function tl(e) {
    let { webBuildOverride: t, isEligibleForPomelo: n, onClick: s, onContextMenu: l, dismissibleContents: a, iconForeground: o, nameplate: d } = e,
        u = r.useRef(null),
        m = f.ewm,
        g = (0, p.i)();
    m = null != t ? f.bgT : n ? f.Ncx : g.Component;
    let [h, b] = (0, Q.US)(a);
    return (0, i.jsx)(f.yRy, {
        targetElementRef: u,
        position: 'top',
        align: 'center',
        shouldShow: null != h,
        renderPopout: h === c.z.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2 ? () => (0, i.jsx)(em.Z, {}) : h === c.z.USER_SAFETY_CONSUMER_EDUCATION_BLOCK ? () => (0, i.jsx)(eh.Z, { markAsDismissed: b }) : h === c.z.USER_SAFETY_CONSUMER_EDUCATION_MUTE ? () => (0, i.jsx)(ef.Z, { markAsDismissed: b }) : h === c.z.SOUNDBOARD_VOLUME_EDUCATION ? () => (0, i.jsx)(e_.Z, { markAsDismissed: b }) : h === c.z.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK ? () => (0, i.jsx)(ex.Z, {}) : () => (0, i.jsx)(i.Fragment, {}),
        children: () =>
            (0, i.jsx)(
                eQ.Z,
                e4(
                    e9(
                        {
                            ref: u,
                            tooltipText: null != t ? e3.intl.formatToPlainString(e3.t.Gzh6ZG, { webBuildOverride: t.id }) : e3.intl.string(e3.t.cduTBA),
                            onClick: s,
                            onContextMenu: l,
                            icon: (0, i.jsx)(m, {
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
function ta(e) {
    let { selfMute: t, serverMute: n, suppress: s, awaitingRemote: c, tooltipText: d, tooltipColor: u, tooltipForceOpen: p, iconForeground: b, onMouseEnter: _, onMouseLeave: x, onClick: E, onContextMenu: j, nameplate: C, accountContainerRef: O } = e,
        S = t || s || n,
        v = r.useRef(null),
        T = r.useRef(null),
        I = (0, m.O)(S ? 'unmute' : 'mute'),
        N = (0, g.P)(S ? 'unmute' : 'mute'),
        { activeVoice: y } = (0, eI.o)(),
        R = null != y,
        D = (0, eT.z)(y),
        Z = (0, o.e7)([ek.Z], () => ek.Z.isConnected()),
        { Component: w, events: k, play: B } = R ? N : I,
        M = n || s ? f.v0G : w,
        { mode: U } = (0, ej.ZP)({ location: 'RTC Microphone Button' }),
        { coloredIconsEnabled: V } = (0, eC.Z)({ location: 'RTC Microphone Button' }),
        G = null != d ? d : (0, L.Z)(t, n, s, c, U === ej.BK.GroupedButtonsRedMic),
        { analyticsLocations: F } = (0, P.ZP)(A.Z.AUDIO_INPUT_BUTTON),
        H = (0, ev.Hu)({
            location: A.Z.AUDIO_INPUT_BUTTON,
            autoTrackExposure: !0
        });
    r.useEffect(() => () => B(), [S, B]);
    let z = r.useCallback(
            (e) => {
                j(e, F);
            },
            [j, F]
        ),
        [Y, W] = r.useState(!1),
        K = r.useCallback((e) => {
            var t;
            if ((0, a.k)(null == e ? void 0 : e.target, Node) && (null == (t = v.current) ? void 0 : t.contains(e.target))) return h.F;
            W(!1);
        }, []),
        [q, X] = r.useState(!1);
    return (
        r.useEffect(() => {
            let e;
            return (
                Z &&
                    R &&
                    (e = setTimeout(() => {
                        X(!0), (e = setTimeout(() => X(!1), te));
                    }, 300)),
                () => {
                    X(!1), clearTimeout(e);
                }
            );
        }, [Z]),
        (0, i.jsx)(P.Gt, {
            value: F,
            children: (0, i.jsxs)('div', {
                ref: v,
                className: e6.micButtonParent,
                children: [
                    (0, i.jsx)(eQ.Z, {
                        tooltipText: G,
                        tooltipColor: u,
                        tooltipForceOpen: p,
                        plated: null != C,
                        onMouseEnter: () => {
                            _(), k.onMouseEnter();
                        },
                        onMouseLeave: () => {
                            x(), k.onMouseLeave();
                        },
                        icon: (0, i.jsx)(M, {
                            size: 'custom',
                            width: 20,
                            height: 20,
                            color: S ? f.TVs.colors.STATUS_DANGER : 'currentColor',
                            className: b
                        }),
                        onClick: E,
                        onContextMenu: z,
                        role: 'switch',
                        className: l()({ [e6.micButtonWithMenu]: H }),
                        redGlow: S && V,
                        'aria-label': e3.intl.string(e3.t['w4m94+']),
                        'aria-checked': S,
                        disabled: c
                    }),
                    H &&
                        (0, i.jsx)(f.yRy, {
                            targetElementRef: T,
                            position: 'top',
                            align: 'left',
                            nudgeAlignIntoViewport: !1,
                            overridePositionRef: O,
                            animation: f.yRy.Animation.FADE,
                            useMouseEnter: !0,
                            ignoreModalClicks: !0,
                            onRequestOpen: eN.r5,
                            onRequestClose: K,
                            shouldShow: Y,
                            renderPopout: (e) => {
                                let { closePopout: t } = e;
                                return (0, i.jsx)(eA.l, { onSettingsButtonClick: t });
                            },
                            children: (e, t) => {
                                var { onClick: n } = e,
                                    r = (function (e, t) {
                                        if (null == e) return {};
                                        var n,
                                            i,
                                            r = (function (e, t) {
                                                if (null == e) return {};
                                                var n,
                                                    i,
                                                    r = {},
                                                    s = Object.keys(e);
                                                for (i = 0; i < s.length; i++) (n = s[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                                return r;
                                            })(e, t);
                                        if (Object.getOwnPropertySymbols) {
                                            var s = Object.getOwnPropertySymbols(e);
                                            for (i = 0; i < s.length; i++) (n = s[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
                                        }
                                        return r;
                                    })(e, ['onClick']),
                                    { isShown: s } = t;
                                let a = s ? f.u04 : f.CJ0;
                                return (0, i.jsx)('div', {
                                    children: (0, i.jsx)(ey.B, {
                                        targetElementRef: T,
                                        onCTA: () => W(!0),
                                        canBeShown: !s,
                                        children: (e, t) =>
                                            (0, i.jsx)(
                                                eQ.Z,
                                                e9(
                                                    {
                                                        ref: T,
                                                        plated: null != C,
                                                        tooltipForceOpen: q,
                                                        tooltipColor: q ? f.FGA.GREEN : void 0,
                                                        tooltipContentClassName: q ? e6.voiceFilterWarning : void 0,
                                                        tooltipText: q
                                                            ? (0, i.jsxs)(i.Fragment, {
                                                                  children: [
                                                                      (0, i.jsx)('img', {
                                                                          alt: null != D ? e3.intl.string(D.name) : '',
                                                                          src: null == D ? void 0 : D.iconURL,
                                                                          draggable: !1
                                                                      }),
                                                                      (0, i.jsx)(f.Text, {
                                                                          variant: 'text-sm/medium',
                                                                          color: 'always-white',
                                                                          children: e3.intl.string(e3.t.VlC1dX)
                                                                      })
                                                                  ]
                                                              })
                                                            : e3.intl.string(e3.t.Hapb4O),
                                                        icon: (0, i.jsx)(a, {
                                                            className: e6.buttonChevronIcon,
                                                            size: 'custom',
                                                            width: 12,
                                                            height: 12,
                                                            color: V && S ? f.TVs.colors.STATUS_DANGER : f.TVs.colors.TEXT_NORMAL
                                                        }),
                                                        role: 'button',
                                                        className: l()([e6.buttonChevron], { [e6.redGlow]: S && V }),
                                                        redGlow: S && V,
                                                        'aria-label': e3.intl.string(e3.t.Hapb4O),
                                                        disabled: c,
                                                        onClick: (e) => {
                                                            null == t || t(), n(e), W(!Y);
                                                        }
                                                    },
                                                    r
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
function to(e) {
    let { selfDeaf: t, serverDeaf: n, awaitingRemote: s, onClick: a, onContextMenu: o, iconForeground: c, nameplate: d } = e,
        m = t || n,
        {
            Component: g,
            play: p,
            events: { onMouseEnter: h, onMouseLeave: b }
        } = (0, u.l)(m ? 'undeafen' : 'deafen'),
        _ = n ? f.Vm4 : g,
        { coloredIconsEnabled: x } = (0, eC.Z)({ location: 'RTC Microphone Button' }),
        { analyticsLocations: E } = (0, P.ZP)(A.Z.AUDIO_OUTPUT_BUTTON);
    r.useEffect(() => () => p(), [m, p]);
    let j = r.useCallback(
        (e) => {
            o(e, E);
        },
        [o, E]
    );
    return (0, i.jsx)(P.Gt, {
        value: E,
        children: (0, i.jsx)(eQ.Z, {
            plated: null != d,
            tooltipText: (0, k.Z)(t, n, s),
            onMouseEnter: h,
            onMouseLeave: b,
            icon: (0, i.jsx)(_, {
                size: 'custom',
                width: 20,
                height: 20,
                color: m ? f.TVs.colors.STATUS_DANGER : 'currentColor',
                className: c
            }),
            onClick: a,
            onContextMenu: j,
            innerClassName: l()({ [e6.redIcon]: n }),
            iconForeground: m ? e6.strikethrough : void 0,
            role: 'switch',
            redGlow: x && m,
            'aria-label': e3.intl.string(e3.t.wjcRFR),
            'aria-checked': m,
            disabled: s
        })
    });
}
