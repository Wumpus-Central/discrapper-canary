(n.d(t, {
    Z: () => ts,
    m: () => ti
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
    j = n(586902),
    E = n(980591),
    O = n(468363),
    C = n(326255),
    v = n(771173),
    S = n(963056),
    T = n(570928),
    N = n(100527),
    I = n(906732),
    y = n(676742),
    A = n(1585),
    P = n(304761),
    R = n(865427),
    D = n(358221),
    Z = n(571250),
    w = n(628581),
    k = n(55311),
    L = n(575175),
    B = n(522651),
    M = n(795318),
    U = n(338390),
    V = n(526371),
    G = n(64220),
    F = n(427217),
    H = n(243778),
    z = n(821795),
    W = n(892567),
    Y = n(258609),
    K = n(53891),
    q = n(291533),
    X = n(427347),
    J = n(50697),
    Q = n(90042),
    $ = n(78933),
    ee = n(850020),
    et = n(379839),
    en = n(359135),
    ei = n(516817),
    er = n(332473),
    es = n(963590),
    ea = n(210308),
    el = n(667105),
    eo = n(768419),
    ec = n(184301),
    ed = n(52538),
    eu = n(670188),
    em = n(321614),
    ep = n(879815),
    eg = n(294629),
    eh = n(875527),
    ef = n(702977),
    eb = n(56848),
    ex = n(940315),
    e_ = n(378441),
    ej = n(358820),
    eE = n(723547),
    eO = n(361045),
    eC = n(74650),
    ev = n(306609),
    eS = n(170293),
    eT = n(8404),
    eN = n(199902),
    eI = n(314897),
    ey = n(592125),
    eA = n(831506),
    eP = n(819640),
    eR = n(131951),
    eD = n(19780),
    eZ = n(914010),
    ew = n(885110),
    ek = n(246946),
    eL = n(594174),
    eB = n(78839),
    eM = n(626135),
    eU = n(768581),
    eV = n(572004),
    eG = n(459273),
    eF = n(585483),
    eH = n(70956),
    ez = n(823379),
    eW = n(74538),
    eY = n(374023),
    eK = n(51144),
    eq = n(998502),
    eX = n(578817),
    eJ = n(870569),
    eQ = n(345243),
    e$ = n(115530),
    e0 = n(981631),
    e1 = n(215023),
    e3 = n(921944),
    e6 = n(46140),
    e8 = n(388032),
    e2 = n(239692);
function e5(e, t, n) {
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
function e4(e) {
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
                e5(e, t, n[t]);
            }));
    }
    return e;
}
function e7(e, t) {
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
let e9 = eq.ZP.getEnableHardwareAcceleration() ? f.Xo$ : f.qEK,
    te = 2 * eH.Z.Millis.MINUTE,
    tt = 3 * eH.Z.Millis.SECOND;
function tn(e) {
    let { ref: t, speaking: n, streaming: s, currentUser: l, status: o, handleClick: c, handleMouseLeave: d, renderNameTag: u, nameplate: m, 'data-jump-section': p } = e,
        g = r.useRef(null),
        h = null != t ? t : g,
        b = (0, y.Z)(null == l ? void 0 : l.avatarDecoration),
        x = (0, eU.NZ)({
            avatarDecoration: b,
            size: (0, A.y9)(f.EFr.SIZE_32)
        }),
        j = (0, f.dQu)(f.TVs.modules.guildbar.AVATAR_SIZE),
        O = (0, U.Z)('Account') ? 32 : j,
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
                (0, E.Z)(() => a(!0), 750),
                r.useEffect(() => {
                    let t = (t) => {
                        var n;
                        let { highlightBadge: r } = t;
                        (null != r && i(r), null == (n = e.current) || n.call(e));
                    };
                    return (
                        eF.S.subscribe(e0.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, t),
                        () => {
                            eF.S.unsubscribe(e0.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, t);
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
        T = (0, et.A)(m);
    return null == l
        ? null
        : (0, i.jsx)(_.Z, {
              object: e0.qAy.AVATAR,
              children: (0, i.jsx)(eu.Z, {
                  user: l,
                  targetElementRef: h,
                  clickTrap: !0,
                  preload: () =>
                      (0, ec.Z)(l.id, l.getAvatarURL(void 0, eu.I), {
                          type: 'account_popout',
                          withMutualGuilds: !1,
                          withMutualFriends: !1
                      }),
                  renderPopout: (e, t) => {
                      let { closePopout: n, setPopoutRef: r } = e;
                      return (0, i.jsx)($.Z, {
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
                          e7(
                              e4(
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
                                  'aria-label': e8.intl.string(e8.t['3Uj+2t']),
                                  'data-jump-section': p,
                                  className: a()(e2.avatarWrapper, { [e2.plated]: null != m }),
                                  children: [
                                      (0, i.jsx)(e9, {
                                          size: f.EFr['SIZE_'.concat(O)],
                                          src: l.getAvatarURL(void 0, O - 4, !1),
                                          avatarDecoration: x,
                                          'aria-label': l.username,
                                          status: s ? e0.Skl.STREAMING : o,
                                          isSpeaking: n,
                                          className: e2.avatar
                                      }),
                                      (0, i.jsx)('div', {
                                          className: a()(e2.nameTag, { [e2.canCopy]: eV.wS }),
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
class ti extends r.PureComponent {
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
            t = [e8.intl.string(e8.t.MSaeTU), e8.intl.string(e8.t.UmrCw8), e8.intl.string(e8.t.gKE0Ji), e8.intl.string(e8.t['4DSKbm']), e8.intl.string(e8.t['+8ENdX']), e8.intl.string(e8.t.GlWHv7), e8.intl.string(e8.t.hIzxU1), e8.intl.string(e8.t['26uMPD']), e8.intl.string(e8.t.uFs7R0), e8.intl.string(e8.t.bLXdcX), e8.intl.string(e8.t.gPg9fX)],
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
            (0, C.Z)({
                activities: t,
                status: s,
                applicationStream: n,
                voiceChannel: l ? o : void 0
            })
        )
            return (0, i.jsx)(T.Z, {
                hoverText: a,
                forceHover: e,
                children: (0, i.jsx)(v.Z, {
                    location: 'Account',
                    user: r,
                    activities: t,
                    applicationStream: n,
                    voiceChannel: l ? o : void 0,
                    textClassName: e2.activityStatusText,
                    hideTooltip: !0
                })
            });
        let c =
            null == t
                ? void 0
                : t.find((e) => {
                      let { type: t } = e;
                      return t === e0.IIU.CUSTOM_STATUS;
                  });
        return null != c
            ? (0, i.jsx)(T.Z, {
                  hoverText: a,
                  forceHover: e,
                  children: (0, i.jsx)(F.Z, {
                      activity: c,
                      emojiClassName: e2.emoji,
                      className: e2.customStatus
                  })
              })
            : null != s && s !== e0.Skl.UNKNOWN && r.hasUniqueUsername()
              ? (0, i.jsx)(T.Z, {
                    hoverText: a,
                    forceHover: e,
                    children: (0, i.jsx)(S.Z, { text: eK.ZP.humanizeStatus(s) })
                })
              : a;
    }
    renderAvatarWithPopout(e) {
        let {
            focusSectionProps: { 'data-jump-section': t },
            onClick: n
        } = e;
        return (0, i.jsx)(
            tn,
            e7(e4({}, this.props), {
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
            return (0, i.jsx)(K.ZP, {
                guildId: null != (a = this.props.selectedGuildId) ? a : null,
                onDismiss: s,
                targetElementRef: this.avatarWithPopoutRef,
                children: this.renderAvatarWithPopout({ focusSectionProps: e })
            });
        }
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(ea.Z, {
                    groupName: e3.R.ACCOUNT_NAME_ZONE,
                    targetElementRef: this.avatarWithPopoutRef
                }),
                (0, i.jsx)(H.ZP, {
                    contentTypes: n.avatar,
                    groupName: e3.R.ACCOUNT_NAME_ZONE,
                    children: (t) => {
                        let { visibleContent: n, markAsDismissed: r } = t;
                        switch (n) {
                            case u.z.PREMIUM_SUBSCRIPTION_APRIL_MARKETING_DECO_TOOLTIP:
                                return (0, i.jsx)(G.Z, {
                                    markAsDismissed: r,
                                    targetElementRef: this.avatarWithPopoutRef,
                                    children: () => this.renderAvatarWithPopout({ focusSectionProps: e })
                                });
                            case u.z.EXPIRING_STATUS_COACHMARK:
                                return (0, i.jsx)(Q.Z, {
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
                                  className: a()(e2.container, {
                                      [e2.containerRtcOpened]: null != n,
                                      [e2.containerQuestBarVisible]: !r,
                                      [e2.containerListenAlongVisible]: s
                                  }),
                                  onMouseEnter: this.handleMouseEnter,
                                  onMouseLeave: this.handleMouseLeave,
                                  children: [
                                      (0, i.jsx)(ei.Z, {
                                          nameplate: t,
                                          hovered: l,
                                          placement: en.i.ACCOUNT
                                      }),
                                      this.renderNameZone(e),
                                      (0, i.jsx)(
                                          tr,
                                          e7(e4({}, this.props, this.state), {
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
                              (0, i.jsx)(X.Z, {}),
                              (0, i.jsx)(V.Z, {})
                          ]
                      })
              });
    }
    constructor(...e) {
        (super(...e),
            e5(this, 'copiedTimeout', new m.V7()),
            e5(this, 'copiedDecayTimeout', new m.V7()),
            e5(this, 'speakingWhileMutedTooltipTimeout', new m.V7()),
            e5(this, 'lastSpeakingWhileMutedNotificationTime', void 0),
            e5(this, 'state', {
                hovered: !1,
                copiedStreak: 0,
                shouldShowNametagTooltip: !1,
                shouldShowCopiedFeedback: !1,
                shouldShowSpeakingWhileMutedTooltip: !1,
                hoveringOnMute: !1
            }),
            e5(this, 'containerRef', r.createRef()),
            e5(this, 'avatarWithPopoutRef', r.createRef()),
            e5(this, 'handleToggleSelfMute', () => {
                let { serverMute: e, suppress: t, selfMute: n } = this.props;
                ((0, L.Z)(e, t, e0.jXE.ACCOUNT_PANEL), (0, B.v)(N.Z.ACCOUNT, B.d.MIC, n));
            }),
            e5(this, 'handleToggleSelfDeaf', () => {
                let { serverDeaf: e, selfDeaf: t } = this.props;
                ((0, k.Z)(e, e0.jXE.ACCOUNT_PANEL), (0, B.v)(N.Z.ACCOUNT, B.d.DEAFEN, !t));
            }),
            e5(this, 'handleOpenAccountSettings', () => {
                this.handleOpenSettings();
            }),
            e5(this, 'handleOpenSettings', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, eX.Q)('Account').jumpToVoice && eD.Z.isConnected() ? e0.oAB.VOICE : e0.oAB.ACCOUNT,
                    t = arguments.length > 1 ? arguments[1] : void 0,
                    n = arguments.length > 2 ? arguments[2] : void 0;
                x.Z.open(e, t, n);
            }),
            e5(this, 'handleOpenSettingsContextMenu', (e) => {
                let { currentUser: t } = this.props;
                null != t &&
                    (0, b.jW)(e, async () => {
                        let { default: e } = await n.e('2535').then(n.bind(n, 923422));
                        return (n) =>
                            (0, i.jsx)(
                                e,
                                e7(e4({}, n), {
                                    user: t,
                                    premiumSubscription: this.props.premiumSubscription,
                                    webBuildOverride: this.props.webBuildOverride,
                                    onInteraction: (0, M.u)('UserSettingsCogContextMenu', N.Z.ACCOUNT)
                                })
                            );
                    });
            }),
            e5(this, 'audioOnInteractionHandler', (0, M.u)('AudioDeviceMenu', N.Z.ACCOUNT)),
            e5(this, 'handleInputAudioContextMenu', (e, t) => {
                (0, b.jW)(e, async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 659580));
                    return () => {
                        let { enabledInputProfiles: n } = (0, em.c)({ location: 'Account' });
                        return (0, i.jsx)(I.Gt, {
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
            e5(this, 'handleOutputAudioContextMenu', (e, t) => {
                (0, b.jW)(e, async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 659580));
                    return () =>
                        (0, i.jsx)(I.Gt, {
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
            e5(this, 'handleMouseEnter', () => {
                this.setState({ hovered: !0 });
            }),
            e5(this, 'handleMouseLeave', () => {
                this.setState({ hovered: !1 });
            }),
            e5(this, 'handleMouseEnterMute', () => {
                (this.setState({
                    hoveringOnMute: !0,
                    shouldShowSpeakingWhileMutedTooltip: !1
                }),
                    this.speakingWhileMutedTooltipTimeout.stop());
            }),
            e5(this, 'handleMouseLeaveMute', () => {
                this.setState({ hoveringOnMute: !1 });
            }),
            e5(this, 'handleCopyTag', () => {
                let { currentUser: e } = this.props,
                    { shouldShowNametagTooltip: t, copiedStreak: n } = this.state;
                if (null == e) return;
                ((0, eV.JG)(
                    eK.ZP.getUserTag(e, {
                        decoration: 'never',
                        identifiable: 'always'
                    })
                ),
                    eM.default.track(e0.rMx.TEXT_COPIED, { type: 'User Tag' }));
                let i = {
                    shouldShowCopiedFeedback: !0,
                    shouldShowNametagTooltip: !0
                };
                (t || (i.copiedStreak = n + 1),
                    this.setState(i, () => {
                        (this.copiedTimeout.start(1000, () => this.setState({ shouldShowNametagTooltip: !1 })), this.copiedDecayTimeout.start(2000, () => this.setState({ copiedStreak: 0 })));
                    }));
            }),
            e5(this, 'handleOccludedChanged', () => {
                let { occluded: e } = this.props;
                e &&
                    this.setState({
                        shouldShowNametagTooltip: !1,
                        shouldShowSpeakingWhileMutedTooltip: !1
                    });
            }),
            e5(this, 'handleSpeakingWhileMutedChanged', () => {
                let { selfMute: e, serverMute: t, suppress: n, speakingWhileMuted: i, occluded: r } = this.props,
                    { hoveringOnMute: s } = this.state,
                    a = void 0 === this.lastSpeakingWhileMutedNotificationTime || Date.now() - this.lastSpeakingWhileMutedNotificationTime > te;
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
            e5(this, 'renderNameTag', (e) => {
                let { currentUser: t } = this.props;
                return null == t
                    ? null
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)('div', {
                                  className: e2.panelTitleContainer,
                                  children: (0, i.jsx)(e$.Z, {
                                      children: (0, i.jsx)(W.Z, {
                                          userName: eK.ZP.getName(t),
                                          displayNameStyles: e,
                                          effectDisplayType: z.F.STATIC,
                                          inProfile: !0
                                      })
                                  })
                              }),
                              (0, i.jsx)('div', {
                                  className: e2.panelSubtextContainer,
                                  children: (0, i.jsx)(eQ.Z, { children: this.renderStatus() })
                              })
                          ]
                      });
            }));
    }
}
function tr(e) {
    let { selfDeaf: t, selfMute: n, awaitingRemote: r, serverMute: s, serverDeaf: a, suppress: l, shouldShowSpeakingWhileMutedTooltip: o, isEligibleForPomelo: c, webBuildOverride: d, handleMouseEnterMute: u, handleMouseLeaveMute: m, handleToggleSelfDeaf: p, handleToggleSelfMute: g, handleInputAudioContextMenu: h, handleOutputAudioContextMenu: b, handleOpenAccountSettings: x, handleOpenSettingsContextMenu: _, dismissibleContents: j, nameplate: E, accountContainerRef: O } = e,
        C = (0, et.A)(E);
    return (0, i.jsxs)('div', {
        className: e2.buttons,
        style: C,
        children: [
            (0, i.jsx)(tl, {
                accountContainerRef: O,
                selfMute: n,
                serverMute: s,
                suppress: l,
                awaitingRemote: r,
                tooltipText: o ? e8.intl.string(e8.t['29gnR0']) : void 0,
                tooltipColor: o ? f.FGA.GREEN : void 0,
                tooltipForceOpen: o || void 0,
                onMouseEnter: u,
                onMouseLeave: m,
                onClick: g,
                onContextMenu: h,
                iconForeground: null != E ? e2.iconForeground : void 0,
                nameplate: E
            }),
            (0, i.jsx)(to, {
                selfDeaf: t,
                serverDeaf: a,
                onClick: p,
                onContextMenu: b,
                awaitingRemote: r,
                iconForeground: null != E ? e2.iconForeground : void 0,
                nameplate: E
            }),
            (0, i.jsx)(ta, {
                isEligibleForPomelo: c,
                webBuildOverride: d,
                onClick: x,
                onContextMenu: _,
                dismissibleContents: j.settings,
                iconForeground: null != E ? e2.iconForeground : void 0,
                nameplate: E
            })
        ]
    });
}
function ts() {
    var e;
    let t = (0, d.e7)([eL.default], () => eL.default.getCurrentUser()),
        n = (0, d.e7)([eI.default], () => eI.default.getId()),
        {
            activities: r,
            streaming: s,
            status: a
        } = (0, d.cj)([ew.Z], () => {
            let e = ew.Z.getActivities();
            return {
                activities: e,
                streaming:
                    null !=
                    e.find((e) => {
                        let { type: t } = e;
                        return t === e0.IIU.STREAMING;
                    }),
                status: ew.Z.getStatus()
            };
        }),
        l = (0, d.e7)([eN.Z], () => eN.Z.getAnyStreamForUser(n)),
        c = (0, j.Z)({ userId: n }),
        m = eK.ZP.useUserTag(t, { decoration: 'never' }),
        p = (0, d.e7)([ek.Z], () => ek.Z.hidePersonalInformation),
        g = (0, d.e7)([eD.Z, ey.Z], () => {
            let e = eD.Z.getChannelId();
            return null != e ? ey.Z.getChannel(e) : null;
        }),
        { mute: h, selfMute: b, suppress: x } = (0, eg.Z)(g),
        { selfDeaf: _, deaf: E } = (0, ep.Z)(g),
        C = (0, d.e7)([P.C], () => {
            var e;
            return (0, R.fD)() ? (null == (e = P.C.getCurrentBuildOverride().overrides) ? void 0 : e.discord_web) : null;
        }),
        v = (0, d.e7)([eB.Z], () => eB.Z.getPremiumTypeSubscription()),
        S = (0, d.e7)([eR.Z], () => eR.Z.getSpeakingWhileMuted()),
        T = (0, d.e7)([D.Z], () => D.Z.isFullscreenInContext()),
        y = (0, d.e7)([eP.Z], () => eP.Z.hasLayers()),
        A = (0, f.s9z)(f.JQI) || y || eY.s.isDisallowPopupsSet() || T,
        Z = (0, er.b)(),
        w = (0, d.e7)([Y.Z], () => null != Y.Z.getAwaitingRemoteSessionInfo()),
        k = (0, d.e7)([eZ.Z], () => eZ.Z.getGuildId()),
        L = eW.ZP.canUsePremiumGuildMemberProfile(t),
        B = (null == t || null == (e = t.avatarDecoration) ? void 0 : e.skuId) === e1.rL,
        { voiceActivityStatusEnabled: M } = (0, O.U)({ location: 'Account' }),
        U = (0, J.m)(),
        [V, G] = (0, q.G)(null != k ? k : null),
        { analyticsLocations: F } = (0, I.ZP)(N.Z.ACCOUNT),
        H = (0, ee.K)({ user: t }),
        z = (0, el.Ws)({ location: e6.dr.CONFLICT_CHECKS }),
        W = (0, d.e7)([eo.Z, eL.default, eA.Z], () => {
            let e,
                t = eo.Z.getSyncingWith(),
                n = eo.Z.getActivity(),
                i = [];
            if ((null != t ? (e = t.partyId) : null != n && null != n.party && null != n.party.id && (e = n.party.id), null != e)) {
                var r;
                i = o()(Array.from(null != (r = eA.Z.getParty(e)) ? r : []))
                    .map((e) => eL.default.getUser(e))
                    .filter(ez.lm)
                    .value();
            }
            return i.length > 1;
        }),
        K = {
            avatar: [],
            settings: []
        };
    return (
        !A && (L && K.settings.push(u.z.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK), B && K.avatar.push(u.z.PREMIUM_SUBSCRIPTION_APRIL_MARKETING_DECO_TOOLTIP), U && K.avatar.push(u.z.EXPIRING_STATUS_COACHMARK)),
        (0, i.jsx)(I.Gt, {
            value: F,
            children: (0, i.jsx)(ti, {
                currentUser: t,
                activities: r,
                applicationStream: l,
                voiceChannel: g,
                dismissibleContents: K,
                visibleRecurringAvatarDc: V,
                markRecurringAvatarDcAsDismissed: G,
                userTag: m,
                hidePrivateData: p,
                occluded: A,
                premiumSubscription: v,
                selfDeaf: _,
                selfMute: b,
                serverDeaf: E,
                serverMute: h,
                speaking: c,
                speakingWhileMuted: S,
                status: a,
                streaming: s,
                suppress: x,
                webBuildOverride: C,
                awaitingRemote: w,
                isEligibleForPomelo: Z,
                voiceActivityStatusEnabled: M,
                nameplate: H,
                selectedGuildId: k,
                isQuestBarEmpty: z,
                isListenAlongVisible: W
            })
        })
    );
}
function ta(e) {
    let { webBuildOverride: t, isEligibleForPomelo: n, onClick: s, onContextMenu: a, dismissibleContents: l, iconForeground: o, nameplate: c } = e,
        d = r.useRef(null),
        m = f.ewm,
        p = (0, g.i)();
    m = null != t ? f.bgT : n ? f.Ncx : p.Component;
    let [h, b] = (0, H.US)(l);
    return (0, i.jsx)(f.yRy, {
        targetElementRef: d,
        position: 'top',
        align: 'center',
        shouldShow: null != h,
        renderPopout: h === u.z.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK ? () => (0, i.jsx)(ed.Z, {}) : () => (0, i.jsx)(i.Fragment, {}),
        children: () =>
            (0, i.jsx)(
                eJ.Z,
                e7(
                    e4(
                        {
                            ref: d,
                            tooltipText: null != t ? e8.intl.formatToPlainString(e8.t.Gzh6ZG, { webBuildOverride: t.id }) : e8.intl.string(e8.t.cduTBA),
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
function tl(e) {
    let { selfMute: t, serverMute: n, suppress: s, awaitingRemote: l, tooltipText: o, tooltipColor: m, tooltipForceOpen: p, iconForeground: g, onMouseEnter: b, onMouseLeave: x, onClick: _, onContextMenu: j, nameplate: E, accountContainerRef: O } = e,
        C = t || s || n,
        v = r.useRef(null),
        S = r.useRef(null),
        T = (0, eT.b)(C),
        { activeVoice: y, mostRecentlyRequestedVoiceId: A, lastInitAttemptMayHaveCrashed: P } = (0, e_.o)(),
        { showSilentLagWarning: R } = (0, ex.Y)(),
        D = null != y,
        Z = (0, eb.z)(y),
        k = (0, d.e7)([eD.Z], () => eD.Z.isConnected()),
        { Component: L, events: B, play: M } = T,
        U = n || s ? f.v0G : L,
        V = R ? e8.intl.string(e8.t.ARRV6u) : null,
        G = (0, w.Z)(t, n, s, l),
        F =
            null != o
                ? o
                : null != V
                  ? (0, i.jsxs)('div', {
                        className: e2.tooltipWithSubtext,
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
        { analyticsLocations: z } = (0, I.ZP)(N.Z.AUDIO_INPUT_BUTTON),
        W = (0, eh.Hu)({
            location: N.Z.AUDIO_INPUT_BUTTON,
            autoTrackExposure: !0
        }),
        Y = (0, ef.av)({
            location: N.Z.AUDIO_INPUT_BUTTON,
            autoTrackExposure: !0
        });
    r.useEffect(() => () => M(), [C, M]);
    let K = r.useCallback(
            (e) => {
                j(e, z);
            },
            [j, z]
        ),
        [q, X] = r.useState(!1),
        J = r.useCallback((e) => {
            var t;
            if ((0, c.k)(null == e ? void 0 : e.target, Node) && (null == (t = v.current) ? void 0 : t.contains(e.target))) return h.F;
            X(!1);
        }, []);
    (0, eG.yp)({
        event: e0.CkL.OPEN_VOICE_FILTER_POPOUT,
        handler: () => {
            X(!0);
        }
    });
    let [Q, $] = r.useState(!1);
    r.useEffect(() => {
        let e;
        return (
            k &&
                D &&
                (e = setTimeout(() => {
                    ($(!0), (e = setTimeout(() => $(!1), tt)));
                }, 300)),
            () => {
                ($(!1), clearTimeout(e));
            }
        );
    }, [k]);
    let ee = r.useCallback(() => {
            P || (0, ej.r5)();
        }, [P]),
        et = C ? f.TVs.colors.STATUS_DANGER : R ? f.TVs.colors.STATUS_WARNING : 'currentColor',
        en = C || R,
        ei = (0, es.Z)({ location: 'Account' });
    return (0, i.jsx)(I.Gt, {
        value: z,
        children: (0, i.jsxs)('div', {
            ref: v,
            className: a()(e2.micButtonParent, { [e2.hasColorGlow]: en }),
            children: [
                (0, i.jsx)(eJ.Z, {
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
                    className: a()({ [e2.micButtonWithMenu]: W }),
                    orangeGlow: R,
                    redGlow: C,
                    'aria-label': e8.intl.string(e8.t['w4m94+']),
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
                        onRequestClose: J,
                        shouldShow: q,
                        renderPopout: (e) => {
                            let { closePopout: t } = e;
                            return (0, i.jsx)(ev.l, { onSettingsButtonClick: t });
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
                                !s && (ei && o.push(u.z.VOICE_FILTER_EARLY_ACCESS_COACHMARK), o.push(u.z.VOICE_FILTER_LAUNCH_COACHMARK), Y && k && !D && o.push(u.z.VOICE_FILTER_FIRST_USE_COACHMARK)),
                                (0, i.jsx)('div', {
                                    children: (0, i.jsx)(H.ZP, {
                                        bypassAutoDismiss: !0,
                                        contentTypes: o,
                                        children: (e) => {
                                            let { visibleContent: t, markAsDismissed: s } = e,
                                                o = null;
                                            t === u.z.VOICE_FILTER_EARLY_ACCESS_COACHMARK
                                                ? (o = (0, i.jsx)(eC.U, {
                                                      markAsDismissed: s,
                                                      onCTA: () => X(!0)
                                                  }))
                                                : t === u.z.VOICE_FILTER_LAUNCH_COACHMARK
                                                  ? (o = (0, i.jsx)(eO.n, {
                                                        markAsDismissed: s,
                                                        onCTA: () => X(!0)
                                                    }))
                                                  : t === u.z.VOICE_FILTER_FIRST_USE_COACHMARK &&
                                                    (o = (0, i.jsx)(eE.v, {
                                                        markAsDismissed: s,
                                                        onCTA: () => X(!0)
                                                    }));
                                            let c = () =>
                                                (0, i.jsx)(
                                                    eJ.Z,
                                                    e4(
                                                        {
                                                            ref: S,
                                                            plated: null != E,
                                                            tooltipForceOpen: Q,
                                                            tooltipColor: Q ? f.FGA.GREEN : void 0,
                                                            tooltipContentClassName: Q ? e2.voiceFilterWarning : void 0,
                                                            tooltipText: Q
                                                                ? (0, i.jsxs)(i.Fragment, {
                                                                      children: [
                                                                          (0, i.jsx)('img', {
                                                                              alt: null != Z ? e8.intl.string(Z.name) : '',
                                                                              src: null == Z ? void 0 : Z.iconURL,
                                                                              draggable: !1
                                                                          }),
                                                                          (0, i.jsx)(f.Text, {
                                                                              variant: 'text-sm/medium',
                                                                              color: 'always-white',
                                                                              children: e8.intl.string(e8.t.VlC1dX)
                                                                          })
                                                                      ]
                                                                  })
                                                                : e8.intl.string(e8.t.Hapb4O),
                                                            icon: (0, i.jsx)(a, {
                                                                className: e2.buttonChevronIcon,
                                                                size: 'custom',
                                                                width: 12,
                                                                height: 12,
                                                                color: et
                                                            }),
                                                            role: 'button',
                                                            className: e2.buttonChevron,
                                                            orangeGlow: R,
                                                            redGlow: C,
                                                            'aria-label': e8.intl.string(e8.t.Hapb4O),
                                                            disabled: l,
                                                            onClick: (e) => {
                                                                (s(e3.L.INDIRECT_ACTION), n(e), null != A && !q && P ? (0, eS.$)(() => X(!0)) : X(!q));
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
function to(e) {
    let { selfDeaf: t, serverDeaf: n, awaitingRemote: s, onClick: l, onContextMenu: o, iconForeground: c, nameplate: d } = e,
        u = t || n,
        {
            Component: m,
            play: g,
            events: { onMouseEnter: h, onMouseLeave: b }
        } = (0, p.l)(u ? 'undeafen' : 'deafen'),
        x = n ? f.Vm4 : m,
        { analyticsLocations: _ } = (0, I.ZP)(N.Z.AUDIO_OUTPUT_BUTTON);
    r.useEffect(() => () => g(), [u, g]);
    let j = r.useCallback(
        (e) => {
            o(e, _);
        },
        [o, _]
    );
    return (0, i.jsx)(I.Gt, {
        value: _,
        children: (0, i.jsx)(eJ.Z, {
            plated: null != d,
            tooltipText: (0, Z.Z)(t, n, s),
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
            innerClassName: a()({ [e2.redIcon]: n }),
            iconForeground: u ? e2.strikethrough : void 0,
            role: 'switch',
            redGlow: u,
            'aria-label': e8.intl.string(e8.t.wjcRFR),
            'aria-checked': u,
            disabled: s
        })
    });
}
