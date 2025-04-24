n.d(t, {
    Z: () => tl,
    m: () => tr
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
    p = n(747906),
    g = n(789639),
    h = n(930295),
    f = n(481060),
    b = n(355467),
    _ = n(239091),
    x = n(230711),
    E = n(410575),
    C = n(941129),
    j = n(634894),
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
    W = n(427217),
    Y = n(132750),
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
    ep = n(667105),
    eg = n(19199),
    eh = n(866483),
    ef = n(14357),
    eb = n(763296),
    e_ = n(640806),
    ex = n(184301),
    eE = n(52538),
    eC = n(670188),
    ej = n(861254),
    eO = n(221241),
    eS = n(879815),
    ev = n(294629),
    eT = n(875527),
    eI = n(56848),
    eN = n(378441),
    ey = n(358820),
    eA = n(469887),
    eP = n(306609),
    eR = n(199902),
    eD = n(314897),
    eZ = n(592125),
    ew = n(819640),
    ek = n(131951),
    eL = n(19780),
    eB = n(914010),
    eM = n(885110),
    eU = n(246946),
    eV = n(594174),
    eG = n(78839),
    eF = n(626135),
    eH = n(768581),
    ez = n(572004),
    eW = n(585483),
    eY = n(70956),
    eK = n(74538),
    eq = n(374023),
    eX = n(51144),
    eQ = n(998502),
    eJ = n(870569),
    e$ = n(345243),
    e0 = n(115530),
    e1 = n(981631),
    e2 = n(215023),
    e3 = n(46140),
    e6 = n(388032),
    e8 = n(239692);
function e4(e, t, n) {
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
                e4(e, t, n[t]);
            });
    }
    return e;
}
function e5(e, t) {
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
let e7 = eQ.ZP.getEnableHardwareAcceleration() ? f.Xo$ : f.qEK,
    te = 2 * eY.Z.Millis.MINUTE,
    tt = 3 * eY.Z.Millis.SECOND,
    tn = 30 * eY.Z.Millis.DAY;
function ti(e) {
    let { speaking: t, streaming: n, currentUser: s, status: a, handleClick: o, handleMouseLeave: c, renderNameTag: d, nameplate: u, 'data-jump-section': m } = e,
        p = r.useRef(null),
        g = (0, q.Q3)('RTC Avatar'),
        { coloredIconsEnabled: h } = (0, eO.Z)({ location: 'RTC Avatar' }),
        b = (0, R.Z)(null == s ? void 0 : s.avatarDecoration),
        _ = (0, eH.NZ)({
            avatarDecoration: b,
            size: (0, D.y9)(f.EFr.SIZE_32)
        }),
        x = (0, f.dQu)(f.TVs.modules.guildbar.AVATAR_SIZE),
        {
            updateOpenPopoutRef: C,
            highlightBadge: j,
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
                        eW.S.subscribe(e1.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, t),
                        () => {
                            eW.S.unsubscribe(e1.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, t);
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
              object: e1.qAy.AVATAR,
              children: (0, i.jsx)(eC.Z, {
                  user: s,
                  targetElementRef: p,
                  clickTrap: !0,
                  preload: () =>
                      (0, ex.Z)(s.id, s.getAvatarURL(void 0, eC.I), {
                          type: 'account_popout',
                          withMutualGuilds: !1,
                          withMutualFriends: !1
                      }),
                  renderPopout: (e, t) => {
                      let { closePopout: n, setPopoutRef: r } = e;
                      return (0, i.jsx)(er.Z, {
                          currentUser: s,
                          highlightBadge: j,
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
                      C(e),
                      (0, i.jsxs)(
                          f.P3F,
                          e5(
                              e9(
                                  {
                                      innerRef: p,
                                      style: v
                                  },
                                  e
                              ),
                              {
                                  onClick: (t) => {
                                      var n;
                                      null == (n = e.onClick) || n.call(e, t), null == o || o(t);
                                  },
                                  'aria-label': e6.intl.string(e6.t['3Uj+2t']),
                                  'data-jump-section': g ? m : void 0,
                                  className: l()(e8.avatarWrapper, !g && h && e8.experiment, { [e8.plated]: null != u }),
                                  children: [
                                      (0, i.jsx)(e7, {
                                          size: g ? f.EFr['SIZE_'.concat(x)] : f.EFr.SIZE_32,
                                          src: s.getAvatarURL(void 0, g ? x - 4 : 32, !1),
                                          avatarDecoration: _,
                                          'aria-label': s.username,
                                          status: n ? e1.Skl.STREAMING : a,
                                          isSpeaking: t,
                                          className: e8.avatar
                                      }),
                                      (0, i.jsx)('div', {
                                          className: l()(e8.nameTag, { [e8.canCopy]: ez.wS }),
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
class tr extends r.PureComponent {
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
            t = [e6.intl.string(e6.t.MSaeTU), e6.intl.string(e6.t.UmrCw8), e6.intl.string(e6.t.gKE0Ji), e6.intl.string(e6.t['4DSKbm']), e6.intl.string(e6.t['+8ENdX']), e6.intl.string(e6.t.GlWHv7), e6.intl.string(e6.t.hIzxU1), e6.intl.string(e6.t['26uMPD']), e6.intl.string(e6.t.uFs7R0), e6.intl.string(e6.t.bLXdcX), e6.intl.string(e6.t.gPg9fX)],
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
            return (0, i.jsx)(Y.Z, {
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
                    textClassName: e8.activityStatusText,
                    hideTooltip: !0
                })
            });
        let d =
            null == t
                ? void 0
                : t.find((e) => {
                      let { type: t } = e;
                      return t === e1.IIU.CUSTOM_STATUS;
                  });
        return null != d
            ? (0, i.jsx)(y.Z, {
                  hoverText: l,
                  forceHover: e,
                  children: (0, i.jsx)(W.Z, {
                      activity: d,
                      emojiClassName: e8.emoji,
                      className: e8.customStatus
                  })
              })
            : null != s && s !== e1.Skl.UNKNOWN && r.isPomelo()
              ? (0, i.jsx)(y.Z, {
                    hoverText: l,
                    forceHover: e,
                    children: (0, i.jsx)(N.Z, { text: eX.ZP.humanizeStatus(s) })
                })
              : l;
    }
    renderAvatarWithPopout(e) {
        let {
            focusSectionProps: { 'data-jump-section': t },
            onClick: n
        } = e;
        return (0, i.jsx)(
            ti,
            e5(e9({}, this.props), {
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
                                  className: l()(e8.container, {
                                      [e8.containerRtcOpened]: null != n,
                                      [e8.containerQuestBarVisible]: !r
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
                                          ts,
                                          e5(e9({}, this.props, this.state), {
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
            e4(this, 'copiedTimeout', new d.V7()),
            e4(this, 'copiedDecayTimeout', new d.V7()),
            e4(this, 'speakingWhileMutedTooltipTimeout', new d.V7()),
            e4(this, 'lastSpeakingWhileMutedNotificationTime', void 0),
            e4(this, 'state', {
                hovered: !1,
                copiedStreak: 0,
                shouldShowNametagTooltip: !1,
                shouldShowCopiedFeedback: !1,
                shouldShowSpeakingWhileMutedTooltip: !1,
                hoveringOnMute: !1
            }),
            e4(this, 'containerRef', r.createRef()),
            e4(this, 'handleToggleSelfMute', () => {
                let { serverMute: e, suppress: t, selfMute: n } = this.props;
                (0, M.Z)(e, t, e1.jXE.ACCOUNT_PANEL), (0, U.v)(A.Z.ACCOUNT, U.d.MIC, n);
            }),
            e4(this, 'handleToggleSelfDeaf', () => {
                let { serverDeaf: e, selfDeaf: t } = this.props;
                (0, B.Z)(e, e1.jXE.ACCOUNT_PANEL), (0, U.v)(A.Z.ACCOUNT, U.d.DEAFEN, !t);
            }),
            e4(this, 'handleOpenAccountSettings', () => {
                this.handleOpenSettings();
            }),
            e4(this, 'handleOpenSettings', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e1.oAB.ACCOUNT,
                    t = arguments.length > 1 ? arguments[1] : void 0,
                    n = arguments.length > 2 ? arguments[2] : void 0;
                x.Z.open(e, t, n);
            }),
            e4(this, 'handleOpenSettingsContextMenu', (e) => {
                let { currentUser: t } = this.props;
                null != t &&
                    (0, _.jW)(e, async () => {
                        let { default: e } = await n.e('2535').then(n.bind(n, 923422));
                        return (n) =>
                            (0, i.jsx)(
                                e,
                                e5(e9({}, n), {
                                    user: t,
                                    premiumSubscription: this.props.premiumSubscription,
                                    webBuildOverride: this.props.webBuildOverride,
                                    onInteraction: (0, V.u)('UserSettingsCogContextMenu', A.Z.ACCOUNT)
                                })
                            );
                    });
            }),
            e4(this, 'audioOnInteractionHandler', (0, V.u)('AudioDeviceMenu', A.Z.ACCOUNT)),
            e4(this, 'handleInputAudioContextMenu', (e, t) => {
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
            e4(this, 'handleOutputAudioContextMenu', (e, t) => {
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
            e4(this, 'handleMouseEnter', () => {
                this.setState({ hovered: !0 });
            }),
            e4(this, 'handleMouseLeave', () => {
                this.setState({ hovered: !1 });
            }),
            e4(this, 'handleMouseEnterMute', () => {
                this.setState({
                    hoveringOnMute: !0,
                    shouldShowSpeakingWhileMutedTooltip: !1
                }),
                    this.speakingWhileMutedTooltipTimeout.stop();
            }),
            e4(this, 'handleMouseLeaveMute', () => {
                this.setState({ hoveringOnMute: !1 });
            }),
            e4(this, 'handleCopyTag', () => {
                let { currentUser: e } = this.props,
                    { shouldShowNametagTooltip: t, copiedStreak: n } = this.state;
                if (null == e) return;
                (0, ez.JG)(
                    eX.ZP.getUserTag(e, {
                        decoration: 'never',
                        identifiable: 'always'
                    })
                ),
                    eF.default.track(e1.rMx.TEXT_COPIED, { type: 'User Tag' });
                let i = {
                    shouldShowCopiedFeedback: !0,
                    shouldShowNametagTooltip: !0
                };
                t || (i.copiedStreak = n + 1),
                    this.setState(i, () => {
                        this.copiedTimeout.start(1000, () => this.setState({ shouldShowNametagTooltip: !1 })), this.copiedDecayTimeout.start(2000, () => this.setState({ copiedStreak: 0 }));
                    });
            }),
            e4(this, 'handleOccludedChanged', () => {
                let { occluded: e } = this.props;
                e &&
                    this.setState({
                        shouldShowNametagTooltip: !1,
                        shouldShowSpeakingWhileMutedTooltip: !1
                    });
            }),
            e4(this, 'handleSpeakingWhileMutedChanged', () => {
                let { selfMute: e, serverMute: t, suppress: n, speakingWhileMuted: i, occluded: r } = this.props,
                    { hoveringOnMute: s } = this.state,
                    l = void 0 === this.lastSpeakingWhileMutedNotificationTime || Date.now() - this.lastSpeakingWhileMutedNotificationTime > te;
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
            e4(this, 'renderNameTag', () => {
                let { currentUser: e } = this.props;
                return null == e
                    ? null
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)('div', {
                                  className: e8.panelTitleContainer,
                                  children: (0, i.jsx)(e0.Z, { children: eX.ZP.getName(e) })
                              }),
                              (0, i.jsx)('div', {
                                  className: e8.panelSubtextContainer,
                                  children: (0, i.jsx)(e$.Z, { children: this.renderStatus() })
                              })
                          ]
                      });
            });
    }
}
function ts(e) {
    let { selfDeaf: t, selfMute: n, awaitingRemote: r, serverMute: s, serverDeaf: l, suppress: a, shouldShowSpeakingWhileMutedTooltip: o, isEligibleForPomelo: c, webBuildOverride: d, handleMouseEnterMute: u, handleMouseLeaveMute: m, handleToggleSelfDeaf: p, handleToggleSelfMute: g, handleInputAudioContextMenu: h, handleOutputAudioContextMenu: b, handleOpenAccountSettings: _, handleOpenSettingsContextMenu: x, dismissibleContents: E, nameplate: C, accountContainerRef: j } = e,
        O = (0, el.A)(C);
    return (0, i.jsxs)('div', {
        className: e8.buttons,
        style: O,
        children: [
            (0, i.jsx)(to, {
                accountContainerRef: j,
                selfMute: n,
                serverMute: s,
                suppress: a,
                awaitingRemote: r,
                tooltipText: o ? e6.intl.string(e6.t['29gnR0']) : void 0,
                tooltipColor: o ? f.FGA.GREEN : void 0,
                tooltipForceOpen: o || void 0,
                onMouseEnter: u,
                onMouseLeave: m,
                onClick: g,
                onContextMenu: h,
                iconForeground: null != C ? e8.iconForeground : void 0,
                nameplate: C
            }),
            (0, i.jsx)(tc, {
                selfDeaf: t,
                serverDeaf: l,
                onClick: p,
                onContextMenu: b,
                awaitingRemote: r,
                iconForeground: null != C ? e8.iconForeground : void 0,
                nameplate: C
            }),
            (0, i.jsx)(ta, {
                isEligibleForPomelo: c,
                webBuildOverride: d,
                onClick: _,
                onContextMenu: x,
                dismissibleContents: E.settings,
                iconForeground: null != C ? e8.iconForeground : void 0,
                nameplate: C
            })
        ]
    });
}
function tl() {
    var e;
    let t = (0, o.e7)([eV.default], () => eV.default.getCurrentUser()),
        n = (0, o.e7)([eD.default], () => eD.default.getId()),
        {
            activities: s,
            streaming: l,
            status: a
        } = (0, o.cj)([eM.Z], () => {
            let e = eM.Z.getActivities();
            return {
                activities: e,
                streaming:
                    null !=
                    e.find((e) => {
                        let { type: t } = e;
                        return t === e1.IIU.STREAMING;
                    }),
                status: eM.Z.getStatus()
            };
        }),
        d = (0, o.e7)([eR.Z], () => eR.Z.getAnyStreamForUser(n)),
        u = (0, O.Z)({ userId: n }),
        m = eX.ZP.useUserTag(t, { decoration: 'never' }),
        p = (0, o.e7)([eU.Z], () => eU.Z.hidePersonalInformation),
        g = (0, o.e7)([eL.Z, eZ.Z], () => {
            let e = eL.Z.getChannelId();
            return null != e ? eZ.Z.getChannel(e) : null;
        }),
        { mute: h, selfMute: _, suppress: x } = (0, ev.Z)(g),
        { selfDeaf: E, deaf: S } = (0, eS.Z)(g),
        T = (0, o.e7)([Z.C], () => {
            var e;
            return (0, w.fD)() ? (null == (e = Z.C.getCurrentBuildOverride().overrides) ? void 0 : e.discord_web) : null;
        }),
        I = (0, o.e7)([eG.ZP], () => eG.ZP.getPremiumTypeSubscription()),
        N = (0, o.e7)([ek.Z], () => ek.Z.getSpeakingWhileMuted()),
        y = (0, o.e7)([ew.Z], () => ew.Z.hasLayers()),
        R = (0, f.s9z)(f.JQI) || y || eq.s.isDisallowPopupsSet(),
        D = (0, ec.b)(),
        k = (0, o.e7)([J.Z], () => null != J.Z.getAwaitingRemoteSessionInfo()),
        L = (0, o.e7)([eB.Z], () => eB.Z.getGuildId()),
        B = (0, eg.D)(),
        M = (0, C.u)(),
        U = eK.ZP.canUsePremiumGuildMemberProfile(t),
        V = (null == t || null == (e = t.avatarDecoration) ? void 0 : e.skuId) === e2.rL,
        { voiceActivityStatusEnabled: G } = (0, v.U)({ location: 'Account' }),
        { simplifiedSettingsEnabled: F } = (0, eO.Z)({ location: 'Account' }),
        W = (0, en.m)(),
        [Y, K] = (0, ee.G)(null != L ? L : null),
        { enabled: q } = (0, z.Z)({ location: 'Account' }),
        Q = 'account';
    (0, j.j)({
        location: Q + ' auto on',
        autoTrackExposure: !0
    }),
        (0, j.j)({
            location: Q + ' auto off',
            autoTrackExposure: !1
        });
    let $ = (0, o.e7)([eb.Z], () => eb.Z.hasHadOtherUserPlaySoundInSession()),
        et = (function () {
            let e = (0, X.wE)(c.z.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2),
                [t, n] = (0, o.Wu)([ed.Z], () => [ed.Z.hasFetchedRelevance, ed.Z.profileThemesRelevanceExceeded]),
                [i, s] = (0, o.Wu)([eG.ZP], () => [eG.ZP.hasFetchedMostRecentPremiumTypeSubscription(), eG.ZP.getMostRecentPremiumTypeSubscription()]),
                { enabled: l } = eu.Z.useExperiment({ location: '08bd40_1' }, { autoTrackExposure: !0 }),
                a = r.useMemo(() => {
                    let e = new Date().getTime();
                    return null != s && (s.status === e1.O0b.ACTIVE || e - s.currentPeriodEnd.getTime() < tn);
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
        el = (0, ep.Ws)({ location: e3.dr.CONFLICT_CHECKS }),
        ea = (0, H.Z)({ location: 'AccountConnected' }),
        eo = {
            avatar: [],
            settings: []
        };
    return (
        !R && (et && eo.settings.push(c.z.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2), B && (1 === M ? eo.settings.push(c.z.USER_SAFETY_CONSUMER_EDUCATION_MUTE) : eo.settings.push(c.z.USER_SAFETY_CONSUMER_EDUCATION_BLOCK)), $ && eo.settings.push(c.z.SOUNDBOARD_VOLUME_EDUCATION), U && eo.settings.push(c.z.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK), V && eo.avatar.push(c.z.PREMIUM_SUBSCRIPTION_APRIL_MARKETING_DECO_TOOLTIP), W && eo.avatar.push(c.z.EXPIRING_STATUS_COACHMARK), ea && eo.avatar.push(c.z.CUSTOM_STATUS_PROMPTS_COACHMARK)),
        (0, i.jsx)(P.Gt, {
            value: ei,
            children: (0, i.jsx)(tr, {
                currentUser: t,
                activities: s,
                applicationStream: d,
                voiceChannel: g,
                dismissibleContents: eo,
                visibleRecurringAvatarDc: Y,
                markRecurringAvatarDcAsDismissed: K,
                userTag: m,
                hidePrivateData: p,
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
function ta(e) {
    let { webBuildOverride: t, isEligibleForPomelo: n, onClick: s, onContextMenu: l, dismissibleContents: a, iconForeground: o, nameplate: d } = e,
        u = r.useRef(null),
        m = f.ewm,
        p = (0, g.i)();
    m = null != t ? f.bgT : n ? f.Ncx : p.Component;
    let [h, b] = (0, Q.US)(a);
    return (0, i.jsx)(f.yRy, {
        targetElementRef: u,
        position: 'top',
        align: 'center',
        shouldShow: null != h,
        renderPopout: h === c.z.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2 ? () => (0, i.jsx)(em.Z, {}) : h === c.z.USER_SAFETY_CONSUMER_EDUCATION_BLOCK ? () => (0, i.jsx)(eh.Z, { markAsDismissed: b }) : h === c.z.USER_SAFETY_CONSUMER_EDUCATION_MUTE ? () => (0, i.jsx)(ef.Z, { markAsDismissed: b }) : h === c.z.SOUNDBOARD_VOLUME_EDUCATION ? () => (0, i.jsx)(e_.Z, { markAsDismissed: b }) : h === c.z.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK ? () => (0, i.jsx)(eE.Z, {}) : () => (0, i.jsx)(i.Fragment, {}),
        children: () =>
            (0, i.jsx)(
                eJ.Z,
                e5(
                    e9(
                        {
                            ref: u,
                            tooltipText: null != t ? e6.intl.formatToPlainString(e6.t.Gzh6ZG, { webBuildOverride: t.id }) : e6.intl.string(e6.t.cduTBA),
                            onClick: s,
                            onContextMenu: l,
                            icon: (0, i.jsx)(m, {
                                size: 'refresh_sm',
                                color: 'currentColor',
                                className: o
                            })
                        },
                        p.events
                    ),
                    { plated: null != d }
                )
            )
    });
}
function to(e) {
    let { selfMute: t, serverMute: n, suppress: s, awaitingRemote: c, tooltipText: d, tooltipColor: u, tooltipForceOpen: g, iconForeground: b, onMouseEnter: _, onMouseLeave: x, onClick: E, onContextMenu: C, nameplate: j, accountContainerRef: O } = e,
        S = t || s || n,
        v = r.useRef(null),
        T = r.useRef(null),
        I = (0, m.O)(S ? 'unmute' : 'mute'),
        N = (0, p.P)(S ? 'unmute' : 'mute'),
        { activeVoice: y } = (0, eN.o)(),
        R = null != y,
        D = (0, eI.z)(y),
        Z = (0, o.e7)([eL.Z], () => eL.Z.isConnected()),
        { Component: w, events: k, play: B } = R ? N : I,
        M = n || s ? f.v0G : w,
        { mode: U } = (0, ej.ZP)({ location: 'RTC Microphone Button' }),
        { coloredIconsEnabled: V } = (0, eO.Z)({ location: 'RTC Microphone Button' }),
        G = null != d ? d : (0, L.Z)(t, n, s, c, U === ej.BK.GroupedButtonsRedMic),
        { analyticsLocations: F } = (0, P.ZP)(A.Z.AUDIO_INPUT_BUTTON),
        H = (0, eT.Hu)({
            location: A.Z.AUDIO_INPUT_BUTTON,
            autoTrackExposure: !0
        });
    r.useEffect(() => () => B(), [S, B]);
    let z = r.useCallback(
            (e) => {
                C(e, F);
            },
            [C, F]
        ),
        [W, Y] = r.useState(!1),
        K = r.useCallback((e) => {
            var t;
            if ((0, a.k)(null == e ? void 0 : e.target, Node) && (null == (t = v.current) ? void 0 : t.contains(e.target))) return h.F;
            Y(!1);
        }, []),
        [q, X] = r.useState(!1);
    return (
        r.useEffect(() => {
            let e;
            return (
                Z &&
                    R &&
                    (e = setTimeout(() => {
                        X(!0), (e = setTimeout(() => X(!1), tt));
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
                className: e8.micButtonParent,
                children: [
                    (0, i.jsx)(eJ.Z, {
                        tooltipText: G,
                        tooltipColor: u,
                        tooltipForceOpen: g,
                        plated: null != j,
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
                        className: l()({ [e8.micButtonWithMenu]: H }),
                        redGlow: S && V,
                        'aria-label': e6.intl.string(e6.t['w4m94+']),
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
                            onRequestOpen: ey.r5,
                            onRequestClose: K,
                            shouldShow: W,
                            renderPopout: (e) => {
                                let { closePopout: t } = e;
                                return (0, i.jsx)(eP.l, { onSettingsButtonClick: t });
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
                                    children: (0, i.jsx)(eA.B, {
                                        targetElementRef: T,
                                        onCTA: () => Y(!0),
                                        canBeShown: !s,
                                        children: (e, t) =>
                                            (0, i.jsx)(
                                                eJ.Z,
                                                e9(
                                                    {
                                                        ref: T,
                                                        plated: null != j,
                                                        tooltipForceOpen: q,
                                                        tooltipColor: q ? f.FGA.GREEN : void 0,
                                                        tooltipContentClassName: q ? e8.voiceFilterWarning : void 0,
                                                        tooltipText: q
                                                            ? (0, i.jsxs)(i.Fragment, {
                                                                  children: [
                                                                      (0, i.jsx)('img', {
                                                                          alt: null != D ? e6.intl.string(D.name) : '',
                                                                          src: null == D ? void 0 : D.iconURL,
                                                                          draggable: !1
                                                                      }),
                                                                      (0, i.jsx)(f.Text, {
                                                                          variant: 'text-sm/medium',
                                                                          color: 'always-white',
                                                                          children: e6.intl.string(e6.t.VlC1dX)
                                                                      })
                                                                  ]
                                                              })
                                                            : e6.intl.string(e6.t.Hapb4O),
                                                        icon: (0, i.jsx)(a, {
                                                            className: e8.buttonChevronIcon,
                                                            size: 'custom',
                                                            width: 12,
                                                            height: 12,
                                                            color: V && S ? f.TVs.colors.STATUS_DANGER : f.TVs.colors.TEXT_NORMAL
                                                        }),
                                                        role: 'button',
                                                        className: l()([e8.buttonChevron], { [e8.redGlow]: S && V }),
                                                        redGlow: S && V,
                                                        'aria-label': e6.intl.string(e6.t.Hapb4O),
                                                        disabled: c,
                                                        onClick: (e) => {
                                                            null == t || t(), n(e), Y(!W);
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
function tc(e) {
    let { selfDeaf: t, serverDeaf: n, awaitingRemote: s, onClick: a, onContextMenu: o, iconForeground: c, nameplate: d } = e,
        m = t || n,
        {
            Component: p,
            play: g,
            events: { onMouseEnter: h, onMouseLeave: b }
        } = (0, u.l)(m ? 'undeafen' : 'deafen'),
        _ = n ? f.Vm4 : p,
        { coloredIconsEnabled: x } = (0, eO.Z)({ location: 'RTC Microphone Button' }),
        { analyticsLocations: E } = (0, P.ZP)(A.Z.AUDIO_OUTPUT_BUTTON);
    r.useEffect(() => () => g(), [m, g]);
    let C = r.useCallback(
        (e) => {
            o(e, E);
        },
        [o, E]
    );
    return (0, i.jsx)(P.Gt, {
        value: E,
        children: (0, i.jsx)(eJ.Z, {
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
            onContextMenu: C,
            innerClassName: l()({ [e8.redIcon]: n }),
            iconForeground: m ? e8.strikethrough : void 0,
            role: 'switch',
            redGlow: x && m,
            'aria-label': e6.intl.string(e6.t.wjcRFR),
            'aria-checked': m,
            disabled: s
        })
    });
}
