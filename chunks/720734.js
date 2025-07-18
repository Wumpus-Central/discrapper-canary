(n.d(t, {
    Z: () => tc,
    m: () => tl
}),
    n(388685),
    n(539854));
var i = n(255367),
    r = n(73800),
    s = n(120356),
    a = n.n(s),
    l = n(392711),
    o = n.n(l),
    c = n(374470),
    d = n(442837),
    u = n(704215),
    m = n(846519),
    p = n(400354),
    g = n(789639),
    h = n(930295),
    f = n(481060),
    b = n(239091),
    x = n(230711),
    _ = n(410575),
    j = n(941129),
    E = n(586902),
    O = n(980591),
    C = n(468363),
    v = n(326255),
    S = n(771173),
    T = n(963056),
    N = n(570928),
    I = n(100527),
    y = n(906732),
    A = n(676742),
    P = n(1585),
    R = n(304761),
    D = n(865427),
    Z = n(358221),
    w = n(571250),
    k = n(628581),
    L = n(55311),
    B = n(575175),
    M = n(522651),
    U = n(795318),
    V = n(338390),
    G = n(526371),
    F = n(64220),
    H = n(427217),
    z = n(243778),
    W = n(821795),
    Y = n(892567),
    K = n(258609),
    q = n(53891),
    X = n(291533),
    Q = n(427347),
    J = n(50697),
    $ = n(90042),
    ee = n(78933),
    et = n(850020),
    en = n(379839),
    ei = n(359135),
    er = n(516817),
    es = n(332473),
    ea = n(963590),
    el = n(210308),
    eo = n(667105),
    ec = n(19199),
    ed = n(212704),
    eu = n(14357),
    em = n(768419),
    ep = n(184301),
    eg = n(52538),
    eh = n(670188),
    ef = n(321614),
    eb = n(879815),
    ex = n(294629),
    e_ = n(875527),
    ej = n(702977),
    eE = n(56848),
    eO = n(940315),
    eC = n(378441),
    ev = n(358820),
    eS = n(723547),
    eT = n(361045),
    eN = n(74650),
    eI = n(306609),
    ey = n(170293),
    eA = n(8404),
    eP = n(199902),
    eR = n(314897),
    eD = n(592125),
    eZ = n(831506),
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
    eW = n(459273),
    eY = n(585483),
    eK = n(70956),
    eq = n(823379),
    eX = n(74538),
    eQ = n(374023),
    eJ = n(51144),
    e$ = n(998502),
    e0 = n(578817),
    e1 = n(870569),
    e3 = n(345243),
    e6 = n(115530),
    e8 = n(981631),
    e2 = n(215023),
    e5 = n(921944),
    e7 = n(46140),
    e4 = n(388032),
    e9 = n(239692);
function te(e, t, n) {
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
function tt(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                te(e, t, n[t]);
            }));
    }
    return e;
}
function tn(e, t) {
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
let ti = e$.ZP.getEnableHardwareAcceleration() ? f.Xo$ : f.qEK,
    tr = 2 * eK.Z.Millis.MINUTE,
    ts = 3 * eK.Z.Millis.SECOND;
function ta(e) {
    let { ref: t, speaking: n, streaming: s, currentUser: l, status: o, handleClick: c, handleMouseLeave: d, renderNameTag: u, nameplate: m, 'data-jump-section': p } = e,
        g = r.useRef(null),
        h = null != t ? t : g,
        b = (0, A.Z)(null == l ? void 0 : l.avatarDecoration),
        x = (0, eH.NZ)({
            avatarDecoration: b,
            size: (0, P.y9)(f.EFr.SIZE_32)
        }),
        j = (0, f.dQu)(f.TVs.modules.guildbar.AVATAR_SIZE),
        E = (0, V.Z)('Account') ? 32 : j,
        {
            updateOpenPopoutRef: C,
            highlightBadge: v,
            setHighlightBadge: S
        } = (function () {
            let e = r.useRef(null),
                t = r.useCallback((t) => {
                    e.current = () => {
                        (t.onMouseDown(), t.onClick());
                    };
                }, []),
                [n, i] = r.useState(),
                [s, a] = r.useState(!1);
            return (
                (0, O.Z)(() => a(!0), 750),
                r.useEffect(() => {
                    let t = (t) => {
                        var n;
                        let { highlightBadge: r } = t;
                        (null != r && i(r), null == (n = e.current) || n.call(e));
                    };
                    return (
                        eY.S.subscribe(e8.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, t),
                        () => {
                            eY.S.unsubscribe(e8.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, t);
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
        T = (0, en.A)(m);
    return null == l
        ? null
        : (0, i.jsx)(_.Z, {
              object: e8.qAy.AVATAR,
              children: (0, i.jsx)(eh.Z, {
                  user: l,
                  targetElementRef: h,
                  clickTrap: !0,
                  preload: () =>
                      (0, ep.Z)(l.id, l.getAvatarURL(void 0, eh.I), {
                          type: 'account_popout',
                          withMutualGuilds: !1,
                          withMutualFriends: !1
                      }),
                  renderPopout: (e, t) => {
                      let { closePopout: n, setPopoutRef: r } = e;
                      return (0, i.jsx)(ee.Z, {
                          currentUser: l,
                          highlightBadge: v,
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
                  ignoreModalClicks: !0,
                  onRequestClose: () => {
                      (d(), S(void 0));
                  },
                  children: (e) => (
                      C(e),
                      (0, i.jsxs)(
                          f.P3F,
                          tn(
                              tt(
                                  {
                                      innerRef: h,
                                      style: T
                                  },
                                  e
                              ),
                              {
                                  onClick: (t) => {
                                      var n;
                                      (null == (n = e.onClick) || n.call(e, t), null == c || c(t));
                                  },
                                  'aria-label': e4.intl.string(e4.t['3Uj+2t']),
                                  'data-jump-section': p,
                                  className: a()(e9.avatarWrapper, { [e9.plated]: null != m }),
                                  children: [
                                      (0, i.jsx)(ti, {
                                          size: f.EFr['SIZE_'.concat(E)],
                                          src: l.getAvatarURL(void 0, E - 4, !1),
                                          avatarDecoration: x,
                                          'aria-label': l.username,
                                          status: s ? e8.Skl.STREAMING : o,
                                          isSpeaking: n,
                                          className: e9.avatar
                                      }),
                                      (0, i.jsx)('div', {
                                          className: a()(e9.nameTag, { [e9.canCopy]: ez.wS }),
                                          children: u(null == l ? void 0 : l.displayNameStyles)
                                      })
                                  ]
                              }
                          )
                      )
                  )
              })
          });
}
class tl extends r.PureComponent {
    get isCopiedStreakGodlike() {
        let { copiedStreak: e } = this.state;
        return e >= 10;
    }
    componentDidUpdate(e) {
        let { speakingWhileMuted: t, occluded: n } = e,
            { speakingWhileMuted: i, occluded: r } = this.props;
        (r !== n && this.handleOccludedChanged(), i !== t && this.handleSpeakingWhileMutedChanged());
    }
    componentWillUnmount() {
        (this.copiedTimeout.stop(), this.copiedDecayTimeout.stop(), this.speakingWhileMutedTooltipTimeout.stop());
    }
    renderCopiedSuccess() {
        let { copiedStreak: e } = this.state,
            t = [e4.intl.string(e4.t.MSaeTU), e4.intl.string(e4.t.UmrCw8), e4.intl.string(e4.t.gKE0Ji), e4.intl.string(e4.t['4DSKbm']), e4.intl.string(e4.t['+8ENdX']), e4.intl.string(e4.t.GlWHv7), e4.intl.string(e4.t.hIzxU1), e4.intl.string(e4.t['26uMPD']), e4.intl.string(e4.t.uFs7R0), e4.intl.string(e4.t.bLXdcX), e4.intl.string(e4.t.gPg9fX)],
            n = Math.min(Math.max(0, e - 1), t.length - 1);
        return (0, i.jsx)(f.UkV, {
            isShaking: this.isCopiedStreakGodlike,
            children: t[n]
        });
    }
    renderStatus() {
        let { hovered: e } = this.state,
            { activities: t, applicationStream: n, currentUser: r, status: s, userTag: a, voiceActivityStatusEnabled: l, voiceChannel: o } = this.props;
        if (null == r) return null;
        if (
            (0, v.Z)({
                activities: t,
                status: s,
                applicationStream: n,
                voiceChannel: l ? o : void 0
            })
        )
            return (0, i.jsx)(N.Z, {
                hoverText: a,
                forceHover: e,
                children: (0, i.jsx)(S.Z, {
                    location: 'Account',
                    user: r,
                    activities: t,
                    applicationStream: n,
                    voiceChannel: l ? o : void 0,
                    textClassName: e9.activityStatusText,
                    hideTooltip: !0
                })
            });
        let c =
            null == t
                ? void 0
                : t.find((e) => {
                      let { type: t } = e;
                      return t === e8.IIU.CUSTOM_STATUS;
                  });
        return null != c
            ? (0, i.jsx)(N.Z, {
                  hoverText: a,
                  forceHover: e,
                  children: (0, i.jsx)(H.Z, {
                      activity: c,
                      emojiClassName: e9.emoji,
                      className: e9.customStatus
                  })
              })
            : null != s && s !== e8.Skl.UNKNOWN && r.isPomelo()
              ? (0, i.jsx)(N.Z, {
                    hoverText: a,
                    forceHover: e,
                    children: (0, i.jsx)(T.Z, { text: eJ.ZP.humanizeStatus(s) })
                })
              : a;
    }
    renderAvatarWithPopout(e) {
        let {
            focusSectionProps: { 'data-jump-section': t },
            onClick: n
        } = e;
        return (0, i.jsx)(
            ta,
            tn(tt({}, this.props), {
                ref: this.avatarWithPopoutRef,
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
        if (r === u.z.GUILD_TAG_AVAILABLE_COACHMARK) {
            var a;
            return (0, i.jsx)(q.ZP, {
                guildId: null != (a = this.props.selectedGuildId) ? a : null,
                onDismiss: s,
                targetElementRef: this.avatarWithPopoutRef,
                children: this.renderAvatarWithPopout({ focusSectionProps: e })
            });
        }
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(el.Z, {
                    groupName: e5.R.ACCOUNT_NAME_ZONE,
                    targetElementRef: this.avatarWithPopoutRef
                }),
                (0, i.jsx)(z.ZP, {
                    contentTypes: n.avatar,
                    groupName: e5.R.ACCOUNT_NAME_ZONE,
                    children: (t) => {
                        let { visibleContent: n, markAsDismissed: r } = t;
                        switch (n) {
                            case u.z.PREMIUM_SUBSCRIPTION_APRIL_MARKETING_DECO_TOOLTIP:
                                return (0, i.jsx)(F.Z, {
                                    markAsDismissed: r,
                                    targetElementRef: this.avatarWithPopoutRef,
                                    children: () => this.renderAvatarWithPopout({ focusSectionProps: e })
                                });
                            case u.z.EXPIRING_STATUS_COACHMARK:
                                return (0, i.jsx)($.Z, {
                                    markAsDismissed: r,
                                    targetElementRef: this.avatarWithPopoutRef,
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
                })
            ]
        });
    }
    render() {
        let { currentUser: e, nameplate: t, voiceChannel: n, isQuestBarEmpty: r, isListenAlongVisible: s } = this.props,
            l = this.state.hovered;
        return null == e
            ? null
            : (0, i.jsx)(f.Wdt, {
                  children: (e) =>
                      (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsxs)('div', {
                                  ref: this.containerRef,
                                  className: a()(e9.container, {
                                      [e9.containerRtcOpened]: null != n,
                                      [e9.containerQuestBarVisible]: !r,
                                      [e9.containerListenAlongVisible]: s
                                  }),
                                  onMouseEnter: this.handleMouseEnter,
                                  onMouseLeave: this.handleMouseLeave,
                                  children: [
                                      (0, i.jsx)(er.Z, {
                                          nameplate: t,
                                          hovered: l,
                                          placement: ei.i.ACCOUNT
                                      }),
                                      this.renderNameZone(e),
                                      (0, i.jsx)(
                                          to,
                                          tn(tt({}, this.props, this.state), {
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
                              (0, i.jsx)(Q.Z, {}),
                              (0, i.jsx)(G.Z, {})
                          ]
                      })
              });
    }
    constructor(...e) {
        (super(...e),
            te(this, 'copiedTimeout', new m.V7()),
            te(this, 'copiedDecayTimeout', new m.V7()),
            te(this, 'speakingWhileMutedTooltipTimeout', new m.V7()),
            te(this, 'lastSpeakingWhileMutedNotificationTime', void 0),
            te(this, 'state', {
                hovered: !1,
                copiedStreak: 0,
                shouldShowNametagTooltip: !1,
                shouldShowCopiedFeedback: !1,
                shouldShowSpeakingWhileMutedTooltip: !1,
                hoveringOnMute: !1
            }),
            te(this, 'containerRef', r.createRef()),
            te(this, 'avatarWithPopoutRef', r.createRef()),
            te(this, 'handleToggleSelfMute', () => {
                let { serverMute: e, suppress: t, selfMute: n } = this.props;
                ((0, B.Z)(e, t, e8.jXE.ACCOUNT_PANEL), (0, M.v)(I.Z.ACCOUNT, M.d.MIC, n));
            }),
            te(this, 'handleToggleSelfDeaf', () => {
                let { serverDeaf: e, selfDeaf: t } = this.props;
                ((0, L.Z)(e, e8.jXE.ACCOUNT_PANEL), (0, M.v)(I.Z.ACCOUNT, M.d.DEAFEN, !t));
            }),
            te(this, 'handleOpenAccountSettings', () => {
                this.handleOpenSettings();
            }),
            te(this, 'handleOpenSettings', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, e0.Q)('Account').jumpToVoice && eL.Z.isConnected() ? e8.oAB.VOICE : e8.oAB.ACCOUNT,
                    t = arguments.length > 1 ? arguments[1] : void 0,
                    n = arguments.length > 2 ? arguments[2] : void 0;
                x.Z.open(e, t, n);
            }),
            te(this, 'handleOpenSettingsContextMenu', (e) => {
                let { currentUser: t } = this.props;
                null != t &&
                    (0, b.jW)(e, async () => {
                        let { default: e } = await n.e('2535').then(n.bind(n, 923422));
                        return (n) =>
                            (0, i.jsx)(
                                e,
                                tn(tt({}, n), {
                                    user: t,
                                    premiumSubscription: this.props.premiumSubscription,
                                    webBuildOverride: this.props.webBuildOverride,
                                    onInteraction: (0, U.u)('UserSettingsCogContextMenu', I.Z.ACCOUNT)
                                })
                            );
                    });
            }),
            te(this, 'audioOnInteractionHandler', (0, U.u)('AudioDeviceMenu', I.Z.ACCOUNT)),
            te(this, 'handleInputAudioContextMenu', (e, t) => {
                (0, b.jW)(e, async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 659580));
                    return () => {
                        let { enabledInputProfiles: n } = (0, ef.c)({ location: 'Account' });
                        return (0, i.jsx)(y.Gt, {
                            value: t,
                            children: (0, i.jsx)(e, {
                                onClose: b.Zy,
                                renderInputDevices: !0,
                                renderInputProfiles: n.length > 0,
                                renderInputVolume: !0,
                                minimal: !0,
                                onInteraction: this.audioOnInteractionHandler
                            })
                        });
                    };
                });
            }),
            te(this, 'handleOutputAudioContextMenu', (e, t) => {
                (0, b.jW)(e, async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 659580));
                    return () =>
                        (0, i.jsx)(y.Gt, {
                            value: t,
                            children: (0, i.jsx)(e, {
                                onClose: b.Zy,
                                renderOutputDevices: !0,
                                renderOutputVolume: !0,
                                minimal: !0,
                                onInteraction: this.audioOnInteractionHandler
                            })
                        });
                });
            }),
            te(this, 'handleMouseEnter', () => {
                this.setState({ hovered: !0 });
            }),
            te(this, 'handleMouseLeave', () => {
                this.setState({ hovered: !1 });
            }),
            te(this, 'handleMouseEnterMute', () => {
                (this.setState({
                    hoveringOnMute: !0,
                    shouldShowSpeakingWhileMutedTooltip: !1
                }),
                    this.speakingWhileMutedTooltipTimeout.stop());
            }),
            te(this, 'handleMouseLeaveMute', () => {
                this.setState({ hoveringOnMute: !1 });
            }),
            te(this, 'handleCopyTag', () => {
                let { currentUser: e } = this.props,
                    { shouldShowNametagTooltip: t, copiedStreak: n } = this.state;
                if (null == e) return;
                ((0, ez.JG)(
                    eJ.ZP.getUserTag(e, {
                        decoration: 'never',
                        identifiable: 'always'
                    })
                ),
                    eF.default.track(e8.rMx.TEXT_COPIED, { type: 'User Tag' }));
                let i = {
                    shouldShowCopiedFeedback: !0,
                    shouldShowNametagTooltip: !0
                };
                (t || (i.copiedStreak = n + 1),
                    this.setState(i, () => {
                        (this.copiedTimeout.start(1000, () => this.setState({ shouldShowNametagTooltip: !1 })), this.copiedDecayTimeout.start(2000, () => this.setState({ copiedStreak: 0 })));
                    }));
            }),
            te(this, 'handleOccludedChanged', () => {
                let { occluded: e } = this.props;
                e &&
                    this.setState({
                        shouldShowNametagTooltip: !1,
                        shouldShowSpeakingWhileMutedTooltip: !1
                    });
            }),
            te(this, 'handleSpeakingWhileMutedChanged', () => {
                let { selfMute: e, serverMute: t, suppress: n, speakingWhileMuted: i, occluded: r } = this.props,
                    { hoveringOnMute: s } = this.state,
                    a = void 0 === this.lastSpeakingWhileMutedNotificationTime || Date.now() - this.lastSpeakingWhileMutedNotificationTime > tr;
                i
                    ? s ||
                      !e ||
                      t ||
                      n ||
                      r ||
                      !a ||
                      this.setState({ shouldShowSpeakingWhileMutedTooltip: !0 }, () => {
                          ((this.lastSpeakingWhileMutedNotificationTime = Date.now()), this.speakingWhileMutedTooltipTimeout.start(2000, () => this.setState({ shouldShowSpeakingWhileMutedTooltip: !1 })));
                      })
                    : (this.setState({ shouldShowSpeakingWhileMutedTooltip: !1 }), this.speakingWhileMutedTooltipTimeout.stop());
            }),
            te(this, 'renderNameTag', (e) => {
                let { currentUser: t } = this.props;
                return null == t
                    ? null
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)('div', {
                                  className: e9.panelTitleContainer,
                                  children: (0, i.jsx)(e6.Z, {
                                      children: (0, i.jsx)(Y.Z, {
                                          userName: eJ.ZP.getName(t),
                                          displayNameStyles: e,
                                          effectDisplayType: W.F.STATIC
                                      })
                                  })
                              }),
                              (0, i.jsx)('div', {
                                  className: e9.panelSubtextContainer,
                                  children: (0, i.jsx)(e3.Z, { children: this.renderStatus() })
                              })
                          ]
                      });
            }));
    }
}
function to(e) {
    let { selfDeaf: t, selfMute: n, awaitingRemote: r, serverMute: s, serverDeaf: a, suppress: l, shouldShowSpeakingWhileMutedTooltip: o, isEligibleForPomelo: c, webBuildOverride: d, handleMouseEnterMute: u, handleMouseLeaveMute: m, handleToggleSelfDeaf: p, handleToggleSelfMute: g, handleInputAudioContextMenu: h, handleOutputAudioContextMenu: b, handleOpenAccountSettings: x, handleOpenSettingsContextMenu: _, dismissibleContents: j, nameplate: E, accountContainerRef: O } = e,
        C = (0, en.A)(E);
    return (0, i.jsxs)('div', {
        className: e9.buttons,
        style: C,
        children: [
            (0, i.jsx)(tu, {
                accountContainerRef: O,
                selfMute: n,
                serverMute: s,
                suppress: l,
                awaitingRemote: r,
                tooltipText: o ? e4.intl.string(e4.t['29gnR0']) : void 0,
                tooltipColor: o ? f.FGA.GREEN : void 0,
                tooltipForceOpen: o || void 0,
                onMouseEnter: u,
                onMouseLeave: m,
                onClick: g,
                onContextMenu: h,
                iconForeground: null != E ? e9.iconForeground : void 0,
                nameplate: E
            }),
            (0, i.jsx)(tm, {
                selfDeaf: t,
                serverDeaf: a,
                onClick: p,
                onContextMenu: b,
                awaitingRemote: r,
                iconForeground: null != E ? e9.iconForeground : void 0,
                nameplate: E
            }),
            (0, i.jsx)(td, {
                isEligibleForPomelo: c,
                webBuildOverride: d,
                onClick: x,
                onContextMenu: _,
                dismissibleContents: j.settings,
                iconForeground: null != E ? e9.iconForeground : void 0,
                nameplate: E
            })
        ]
    });
}
function tc() {
    var e;
    let t = (0, d.e7)([eV.default], () => eV.default.getCurrentUser()),
        n = (0, d.e7)([eR.default], () => eR.default.getId()),
        {
            activities: r,
            streaming: s,
            status: a
        } = (0, d.cj)([eM.Z], () => {
            let e = eM.Z.getActivities();
            return {
                activities: e,
                streaming:
                    null !=
                    e.find((e) => {
                        let { type: t } = e;
                        return t === e8.IIU.STREAMING;
                    }),
                status: eM.Z.getStatus()
            };
        }),
        l = (0, d.e7)([eP.Z], () => eP.Z.getAnyStreamForUser(n)),
        c = (0, E.Z)({ userId: n }),
        m = eJ.ZP.useUserTag(t, { decoration: 'never' }),
        p = (0, d.e7)([eU.Z], () => eU.Z.hidePersonalInformation),
        g = (0, d.e7)([eL.Z, eD.Z], () => {
            let e = eL.Z.getChannelId();
            return null != e ? eD.Z.getChannel(e) : null;
        }),
        { mute: h, selfMute: b, suppress: x } = (0, ex.Z)(g),
        { selfDeaf: _, deaf: O } = (0, eb.Z)(g),
        v = (0, d.e7)([R.C], () => {
            var e;
            return (0, D.fD)() ? (null == (e = R.C.getCurrentBuildOverride().overrides) ? void 0 : e.discord_web) : null;
        }),
        S = (0, d.e7)([eG.Z], () => eG.Z.getPremiumTypeSubscription()),
        T = (0, d.e7)([ek.Z], () => ek.Z.getSpeakingWhileMuted()),
        N = (0, d.e7)([Z.Z], () => Z.Z.isFullscreenInContext()),
        A = (0, d.e7)([ew.Z], () => ew.Z.hasLayers()),
        P = (0, f.s9z)(f.JQI) || A || eQ.s.isDisallowPopupsSet() || N,
        w = (0, es.b)(),
        k = (0, d.e7)([K.Z], () => null != K.Z.getAwaitingRemoteSessionInfo()),
        L = (0, d.e7)([eB.Z], () => eB.Z.getGuildId()),
        B = (0, ec.D)(),
        M = (0, j.u)(),
        U = eX.ZP.canUsePremiumGuildMemberProfile(t),
        V = (null == t || null == (e = t.avatarDecoration) ? void 0 : e.skuId) === e2.rL,
        { voiceActivityStatusEnabled: G } = (0, C.U)({ location: 'Account' }),
        F = (0, J.m)(),
        [H, z] = (0, X.G)(null != L ? L : null),
        { analyticsLocations: W } = (0, y.ZP)(I.Z.ACCOUNT),
        Y = (0, et.K)({ user: t }),
        q = (0, eo.Ws)({ location: e7.dr.CONFLICT_CHECKS }),
        Q = (0, d.e7)([em.Z, eV.default, eZ.Z], () => {
            let e,
                t = em.Z.getSyncingWith(),
                n = em.Z.getActivity(),
                i = [];
            if ((null != t ? (e = t.partyId) : null != n && null != n.party && null != n.party.id && (e = n.party.id), null != e)) {
                var r;
                i = o()(Array.from(null != (r = eZ.Z.getParty(e)) ? r : []))
                    .map((e) => eV.default.getUser(e))
                    .filter(eq.lm)
                    .value();
            }
            return i.length > 1;
        }),
        $ = {
            avatar: [],
            settings: []
        };
    return (
        !P && (B && (1 === M ? $.settings.push(u.z.USER_SAFETY_CONSUMER_EDUCATION_MUTE) : $.settings.push(u.z.USER_SAFETY_CONSUMER_EDUCATION_BLOCK)), U && $.settings.push(u.z.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK), V && $.avatar.push(u.z.PREMIUM_SUBSCRIPTION_APRIL_MARKETING_DECO_TOOLTIP), F && $.avatar.push(u.z.EXPIRING_STATUS_COACHMARK)),
        (0, i.jsx)(y.Gt, {
            value: W,
            children: (0, i.jsx)(tl, {
                currentUser: t,
                activities: r,
                applicationStream: l,
                voiceChannel: g,
                dismissibleContents: $,
                visibleRecurringAvatarDc: H,
                markRecurringAvatarDcAsDismissed: z,
                userTag: m,
                hidePrivateData: p,
                occluded: P,
                premiumSubscription: S,
                selfDeaf: _,
                selfMute: b,
                serverDeaf: O,
                serverMute: h,
                speaking: c,
                speakingWhileMuted: T,
                status: a,
                streaming: s,
                suppress: x,
                webBuildOverride: v,
                awaitingRemote: k,
                isEligibleForPomelo: w,
                voiceActivityStatusEnabled: G,
                nameplate: Y,
                selectedGuildId: L,
                isQuestBarEmpty: q,
                isListenAlongVisible: Q
            })
        })
    );
}
function td(e) {
    let { webBuildOverride: t, isEligibleForPomelo: n, onClick: s, onContextMenu: a, dismissibleContents: l, iconForeground: o, nameplate: c } = e,
        d = r.useRef(null),
        m = f.ewm,
        p = (0, g.i)();
    m = null != t ? f.bgT : n ? f.Ncx : p.Component;
    let [h, b] = (0, z.US)(l);
    return (0, i.jsx)(f.yRy, {
        targetElementRef: d,
        position: 'top',
        align: 'center',
        shouldShow: null != h,
        renderPopout: h === u.z.USER_SAFETY_CONSUMER_EDUCATION_BLOCK ? () => (0, i.jsx)(ed.Z, { markAsDismissed: b }) : h === u.z.USER_SAFETY_CONSUMER_EDUCATION_MUTE ? () => (0, i.jsx)(eu.Z, { markAsDismissed: b }) : h === u.z.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK ? () => (0, i.jsx)(eg.Z, {}) : () => (0, i.jsx)(i.Fragment, {}),
        children: () =>
            (0, i.jsx)(
                e1.Z,
                tn(
                    tt(
                        {
                            ref: d,
                            tooltipText: null != t ? e4.intl.formatToPlainString(e4.t.Gzh6ZG, { webBuildOverride: t.id }) : e4.intl.string(e4.t.cduTBA),
                            onClick: s,
                            onContextMenu: a,
                            icon: (0, i.jsx)(m, {
                                size: 'refresh_sm',
                                color: 'currentColor',
                                className: o
                            })
                        },
                        p.events
                    ),
                    { plated: null != c }
                )
            )
    });
}
function tu(e) {
    let { selfMute: t, serverMute: n, suppress: s, awaitingRemote: l, tooltipText: o, tooltipColor: m, tooltipForceOpen: p, iconForeground: g, onMouseEnter: b, onMouseLeave: x, onClick: _, onContextMenu: j, nameplate: E, accountContainerRef: O } = e,
        C = t || s || n,
        v = r.useRef(null),
        S = r.useRef(null),
        T = (0, eA.b)(C),
        { activeVoice: N, mostRecentlyRequestedVoiceId: A, lastInitAttemptMayHaveCrashed: P } = (0, eC.o)(),
        { showSilentLagWarning: R } = (0, eO.Y)(),
        D = null != N,
        Z = (0, eE.z)(N),
        w = (0, d.e7)([eL.Z], () => eL.Z.isConnected()),
        { Component: L, events: B, play: M } = T,
        U = n || s ? f.v0G : L,
        V = R ? e4.intl.string(e4.t.ARRV6u) : null,
        G = (0, k.Z)(t, n, s, l),
        F =
            null != o
                ? o
                : null != V
                  ? (0, i.jsxs)('div', {
                        className: e9.tooltipWithSubtext,
                        children: [
                            (0, i.jsx)(f.Text, {
                                variant: 'text-sm/medium',
                                color: 'currentColor',
                                children: G
                            }),
                            null != V &&
                                (0, i.jsx)(f.Text, {
                                    variant: 'text-xs/medium',
                                    color: 'text-feedback-warning',
                                    children: V
                                })
                        ]
                    })
                  : G,
        { analyticsLocations: H } = (0, y.ZP)(I.Z.AUDIO_INPUT_BUTTON),
        W = (0, e_.Hu)({
            location: I.Z.AUDIO_INPUT_BUTTON,
            autoTrackExposure: !0
        }),
        Y = (0, ej.av)({
            location: I.Z.AUDIO_INPUT_BUTTON,
            autoTrackExposure: !0
        });
    r.useEffect(() => () => M(), [C, M]);
    let K = r.useCallback(
            (e) => {
                j(e, H);
            },
            [j, H]
        ),
        [q, X] = r.useState(!1),
        Q = r.useCallback((e) => {
            var t;
            if ((0, c.k)(null == e ? void 0 : e.target, Node) && (null == (t = v.current) ? void 0 : t.contains(e.target))) return h.F;
            X(!1);
        }, []);
    (0, eW.yp)({
        event: e8.CkL.OPEN_VOICE_FILTER_POPOUT,
        handler: () => {
            X(!0);
        }
    });
    let [J, $] = r.useState(!1);
    r.useEffect(() => {
        let e;
        return (
            w &&
                D &&
                (e = setTimeout(() => {
                    ($(!0), (e = setTimeout(() => $(!1), ts)));
                }, 300)),
            () => {
                ($(!1), clearTimeout(e));
            }
        );
    }, [w]);
    let ee = r.useCallback(() => {
            P || (0, ev.r5)();
        }, [P]),
        et = C ? f.TVs.colors.STATUS_DANGER : R ? f.TVs.colors.STATUS_WARNING : 'currentColor',
        en = C || R,
        ei = (0, ea.Z)({ location: 'Account' });
    return (0, i.jsx)(y.Gt, {
        value: H,
        children: (0, i.jsxs)('div', {
            ref: v,
            className: a()(e9.micButtonParent, { [e9.hasColorGlow]: en }),
            children: [
                (0, i.jsx)(e1.Z, {
                    tooltipText: F,
                    tooltipColor: m,
                    tooltipForceOpen: p,
                    plated: null != E,
                    onMouseEnter: () => {
                        (b(), B.onMouseEnter());
                    },
                    onMouseLeave: () => {
                        (x(), B.onMouseLeave());
                    },
                    icon: (0, i.jsx)(U, {
                        size: 'custom',
                        width: 20,
                        height: 20,
                        color: et,
                        className: g
                    }),
                    onClick: _,
                    onContextMenu: K,
                    role: 'switch',
                    className: a()({ [e9.micButtonWithMenu]: W }),
                    orangeGlow: R,
                    redGlow: C,
                    'aria-label': e4.intl.string(e4.t['w4m94+']),
                    'aria-checked': C,
                    disabled: l
                }),
                W &&
                    (0, i.jsx)(f.yRy, {
                        targetElementRef: O,
                        position: 'top',
                        align: 'left',
                        nudgeAlignIntoViewport: !1,
                        animation: f.yRy.Animation.FADE,
                        useMouseEnter: !0,
                        ignoreModalClicks: !0,
                        onRequestOpen: ee,
                        onRequestClose: Q,
                        shouldShow: q,
                        renderPopout: (e) => {
                            let { closePopout: t } = e;
                            return (0, i.jsx)(eI.l, { onSettingsButtonClick: t });
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
                                            for (i = 0; i < s.length; i++) ((n = s[i]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                                            return r;
                                        })(e, t);
                                    if (Object.getOwnPropertySymbols) {
                                        var s = Object.getOwnPropertySymbols(e);
                                        for (i = 0; i < s.length; i++) ((n = s[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
                                    }
                                    return r;
                                })(e, ['onClick']),
                                { isShown: s } = t;
                            let a = s ? f.u04 : f.CJ0,
                                o = [];
                            return (
                                !s && (ei && o.push(u.z.VOICE_FILTER_EARLY_ACCESS_COACHMARK), o.push(u.z.VOICE_FILTER_LAUNCH_COACHMARK), Y && w && !D && o.push(u.z.VOICE_FILTER_FIRST_USE_COACHMARK)),
                                (0, i.jsx)('div', {
                                    children: (0, i.jsx)(z.ZP, {
                                        bypassAutoDismiss: !0,
                                        contentTypes: o,
                                        children: (e) => {
                                            let { visibleContent: t, markAsDismissed: s } = e,
                                                o = null;
                                            t === u.z.VOICE_FILTER_EARLY_ACCESS_COACHMARK
                                                ? (o = (0, i.jsx)(eN.U, {
                                                      markAsDismissed: s,
                                                      onCTA: () => X(!0)
                                                  }))
                                                : t === u.z.VOICE_FILTER_LAUNCH_COACHMARK
                                                  ? (o = (0, i.jsx)(eT.n, {
                                                        markAsDismissed: s,
                                                        onCTA: () => X(!0)
                                                    }))
                                                  : t === u.z.VOICE_FILTER_FIRST_USE_COACHMARK &&
                                                    (o = (0, i.jsx)(eS.v, {
                                                        markAsDismissed: s,
                                                        onCTA: () => X(!0)
                                                    }));
                                            let c = () =>
                                                (0, i.jsx)(
                                                    e1.Z,
                                                    tt(
                                                        {
                                                            ref: S,
                                                            plated: null != E,
                                                            tooltipForceOpen: J,
                                                            tooltipColor: J ? f.FGA.GREEN : void 0,
                                                            tooltipContentClassName: J ? e9.voiceFilterWarning : void 0,
                                                            tooltipText: J
                                                                ? (0, i.jsxs)(i.Fragment, {
                                                                      children: [
                                                                          (0, i.jsx)('img', {
                                                                              alt: null != Z ? e4.intl.string(Z.name) : '',
                                                                              src: null == Z ? void 0 : Z.iconURL,
                                                                              draggable: !1
                                                                          }),
                                                                          (0, i.jsx)(f.Text, {
                                                                              variant: 'text-sm/medium',
                                                                              color: 'always-white',
                                                                              children: e4.intl.string(e4.t.VlC1dX)
                                                                          })
                                                                      ]
                                                                  })
                                                                : e4.intl.string(e4.t.Hapb4O),
                                                            icon: (0, i.jsx)(a, {
                                                                className: e9.buttonChevronIcon,
                                                                size: 'custom',
                                                                width: 12,
                                                                height: 12,
                                                                color: et
                                                            }),
                                                            role: 'button',
                                                            className: e9.buttonChevron,
                                                            orangeGlow: R,
                                                            redGlow: C,
                                                            'aria-label': e4.intl.string(e4.t.Hapb4O),
                                                            disabled: l,
                                                            onClick: (e) => {
                                                                (s(e5.L.INDIRECT_ACTION), n(e), null != A && !q && P ? (0, ey.$)(() => X(!0)) : X(!q));
                                                            }
                                                        },
                                                        r
                                                    )
                                                );
                                            return null != o
                                                ? (0, i.jsx)(f.yRy, {
                                                      targetElementRef: S,
                                                      renderPopout: () => o,
                                                      animation: f.yRy.Animation.TRANSLATE,
                                                      animationPosition: 'bottom',
                                                      position: 'top',
                                                      align: 'center',
                                                      shouldShow: !0,
                                                      children: c
                                                  })
                                                : c();
                                        }
                                    })
                                })
                            );
                        }
                    })
            ]
        })
    });
}
function tm(e) {
    let { selfDeaf: t, serverDeaf: n, awaitingRemote: s, onClick: l, onContextMenu: o, iconForeground: c, nameplate: d } = e,
        u = t || n,
        {
            Component: m,
            play: g,
            events: { onMouseEnter: h, onMouseLeave: b }
        } = (0, p.l)(u ? 'undeafen' : 'deafen'),
        x = n ? f.Vm4 : m,
        { analyticsLocations: _ } = (0, y.ZP)(I.Z.AUDIO_OUTPUT_BUTTON);
    r.useEffect(() => () => g(), [u, g]);
    let j = r.useCallback(
        (e) => {
            o(e, _);
        },
        [o, _]
    );
    return (0, i.jsx)(y.Gt, {
        value: _,
        children: (0, i.jsx)(e1.Z, {
            plated: null != d,
            tooltipText: (0, w.Z)(t, n, s),
            onMouseEnter: h,
            onMouseLeave: b,
            icon: (0, i.jsx)(x, {
                size: 'custom',
                width: 20,
                height: 20,
                color: u ? f.TVs.colors.STATUS_DANGER : 'currentColor',
                className: c
            }),
            onClick: l,
            onContextMenu: j,
            innerClassName: a()({ [e9.redIcon]: n }),
            iconForeground: u ? e9.strikethrough : void 0,
            role: 'switch',
            redGlow: u,
            'aria-label': e4.intl.string(e4.t.wjcRFR),
            'aria-checked': u,
            disabled: s
        })
    });
}
