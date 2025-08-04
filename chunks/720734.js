(n.d(t, {
    Z: () => tl,
    m: () => ts
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
    C = n(980591),
    E = n(468363),
    O = n(326255),
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
    W = n(594928),
    z = n(821795),
    Y = n(287647),
    K = n(892567),
    q = n(258609),
    X = n(53891),
    J = n(291533),
    Q = n(427347),
    $ = n(50697),
    ee = n(90042),
    et = n(78933),
    en = n(850020),
    ei = n(379839),
    er = n(359135),
    es = n(516817),
    ea = n(332473),
    el = n(963590),
    eo = n(210308),
    ec = n(667105),
    ed = n(768419),
    eu = n(184301),
    em = n(52538),
    ep = n(670188),
    eg = n(321614),
    eh = n(879815),
    ef = n(294629),
    eb = n(875527),
    ex = n(702977),
    e_ = n(56848),
    ej = n(940315),
    eC = n(378441),
    eE = n(358820),
    eO = n(723547),
    ev = n(361045),
    eS = n(74650),
    eT = n(306609),
    eN = n(170293),
    eI = n(8404),
    ey = n(199902),
    eA = n(314897),
    eP = n(592125),
    eR = n(831506),
    eD = n(819640),
    eZ = n(131951),
    ew = n(19780),
    ek = n(914010),
    eL = n(885110),
    eB = n(246946),
    eM = n(594174),
    eU = n(78839),
    eV = n(626135),
    eG = n(768581),
    eF = n(572004),
    eH = n(459273),
    eW = n(585483),
    ez = n(70956),
    eY = n(823379),
    eK = n(74538),
    eq = n(374023),
    eX = n(51144),
    eJ = n(998502),
    eQ = n(578817),
    e$ = n(870569),
    e0 = n(345243),
    e1 = n(115530),
    e3 = n(981631),
    e6 = n(215023),
    e8 = n(921944),
    e2 = n(46140),
    e5 = n(388032),
    e4 = n(239692);
function e7(e, t, n) {
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
        ('function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                e7(e, t, n[t]);
            }));
    }
    return e;
}
function te(e, t) {
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
let tt = eJ.ZP.getEnableHardwareAcceleration() ? f.Xo$ : f.qEK,
    tn = 2 * ez.Z.Millis.MINUTE,
    ti = 3 * ez.Z.Millis.SECOND;
function tr(e) {
    let { ref: t, speaking: n, streaming: s, currentUser: l, status: o, handleClick: c, handleMouseLeave: d, renderNameTag: u, nameplate: m, 'data-jump-section': p } = e,
        g = r.useRef(null),
        h = null != t ? t : g,
        b = (0, y.Z)(null == l ? void 0 : l.avatarDecoration),
        x = (0, eG.NZ)({
            avatarDecoration: b,
            size: (0, A.y9)(f.EFr.SIZE_32)
        }),
        j = (0, f.dQu)(f.TVs.modules.guildbar.AVATAR_SIZE),
        E = (0, U.Z)('Account') ? 32 : j,
        {
            updateOpenPopoutRef: O,
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
                (0, C.Z)(() => a(!0), 750),
                r.useEffect(() => {
                    let t = (t) => {
                        var n;
                        let { highlightBadge: r } = t;
                        (null != r && i(r), null == (n = e.current) || n.call(e));
                    };
                    return (
                        eW.S.subscribe(e3.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, t),
                        () => {
                            eW.S.unsubscribe(e3.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, t);
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
        T = (0, ei.A)(m);
    return null == l
        ? null
        : (0, i.jsx)(_.Z, {
              object: e3.qAy.AVATAR,
              children: (0, i.jsx)(ep.Z, {
                  user: l,
                  targetElementRef: h,
                  clickTrap: !0,
                  preload: () =>
                      (0, eu.Z)(l.id, l.getAvatarURL(void 0, ep.I), {
                          type: 'account_popout',
                          withMutualGuilds: !1,
                          withMutualFriends: !1
                      }),
                  renderPopout: (e, t) => {
                      let { closePopout: n, setPopoutRef: r } = e;
                      return (0, i.jsx)(et.Z, {
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
                      O(e),
                      (0, i.jsxs)(
                          f.P3F,
                          te(
                              e9(
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
                                  'aria-label': e5.intl.string(e5.t['3Uj+2t']),
                                  'data-jump-section': p,
                                  className: a()(e4.avatarWrapper, { [e4.plated]: null != m }),
                                  children: [
                                      (0, i.jsx)(tt, {
                                          size: f.EFr['SIZE_'.concat(E)],
                                          src: l.getAvatarURL(void 0, E - 4, !1),
                                          avatarDecoration: x,
                                          'aria-label': l.username,
                                          status: s ? e3.Skl.STREAMING : o,
                                          isSpeaking: n,
                                          className: e4.avatar
                                      }),
                                      (0, i.jsx)('div', {
                                          className: a()(e4.nameTag, { [e4.canCopy]: eF.wS }),
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
class ts extends r.PureComponent {
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
            t = [e5.intl.string(e5.t.MSaeTU), e5.intl.string(e5.t.UmrCw8), e5.intl.string(e5.t.gKE0Ji), e5.intl.string(e5.t['4DSKbm']), e5.intl.string(e5.t['+8ENdX']), e5.intl.string(e5.t.GlWHv7), e5.intl.string(e5.t.hIzxU1), e5.intl.string(e5.t['26uMPD']), e5.intl.string(e5.t.uFs7R0), e5.intl.string(e5.t.bLXdcX), e5.intl.string(e5.t.gPg9fX)],
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
            (0, O.Z)({
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
                    textClassName: e4.activityStatusText,
                    hideTooltip: !0
                })
            });
        let c =
            null == t
                ? void 0
                : t.find((e) => {
                      let { type: t } = e;
                      return t === e3.IIU.CUSTOM_STATUS;
                  });
        return null != c
            ? (0, i.jsx)(T.Z, {
                  hoverText: a,
                  forceHover: e,
                  children: (0, i.jsx)(F.Z, {
                      activity: c,
                      emojiClassName: e4.emoji,
                      className: e4.customStatus
                  })
              })
            : null != s && s !== e3.Skl.UNKNOWN && r.hasUniqueUsername()
              ? (0, i.jsx)(T.Z, {
                    hoverText: a,
                    forceHover: e,
                    children: (0, i.jsx)(S.Z, { text: eX.ZP.humanizeStatus(s) })
                })
              : a;
    }
    renderAvatarWithPopout(e) {
        let {
            focusSectionProps: { 'data-jump-section': t },
            onClick: n
        } = e;
        return (0, i.jsx)(
            tr,
            te(e9({}, this.props), {
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
            return (0, i.jsx)(X.ZP, {
                guildId: null != (a = this.props.selectedGuildId) ? a : null,
                onDismiss: s,
                targetElementRef: this.avatarWithPopoutRef,
                children: this.renderAvatarWithPopout({ focusSectionProps: e })
            });
        }
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(eo.Z, {
                    groupName: e8.R.ACCOUNT_NAME_ZONE,
                    targetElementRef: this.avatarWithPopoutRef
                }),
                (0, i.jsx)(H.ZP, {
                    contentTypes: n.avatar,
                    groupName: e8.R.ACCOUNT_NAME_ZONE,
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
                                return (0, i.jsx)(ee.Z, {
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
                            case u.z.DISPLAY_NAME_STYLES_COACHMARK:
                                return (0, i.jsx)(Y.e, {
                                    markAsDismissed: r,
                                    targetElementRef: this.avatarWithPopoutRef,
                                    children: this.renderAvatarWithPopout({ focusSectionProps: e })
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
                                  className: a()(e4.container, {
                                      [e4.containerRtcOpened]: null != n,
                                      [e4.containerQuestBarVisible]: !r,
                                      [e4.containerListenAlongVisible]: s
                                  }),
                                  onMouseEnter: this.handleMouseEnter,
                                  onMouseLeave: this.handleMouseLeave,
                                  children: [
                                      (0, i.jsx)(es.Z, {
                                          nameplate: t,
                                          hovered: l,
                                          placement: er.i.ACCOUNT
                                      }),
                                      this.renderNameZone(e),
                                      (0, i.jsx)(
                                          ta,
                                          te(e9({}, this.props, this.state), {
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
                              (0, i.jsx)(V.Z, {})
                          ]
                      })
              });
    }
    constructor(...e) {
        (super(...e),
            e7(this, 'copiedTimeout', new m.V7()),
            e7(this, 'copiedDecayTimeout', new m.V7()),
            e7(this, 'speakingWhileMutedTooltipTimeout', new m.V7()),
            e7(this, 'lastSpeakingWhileMutedNotificationTime', void 0),
            e7(this, 'state', {
                hovered: !1,
                copiedStreak: 0,
                shouldShowNametagTooltip: !1,
                shouldShowCopiedFeedback: !1,
                shouldShowSpeakingWhileMutedTooltip: !1,
                hoveringOnMute: !1
            }),
            e7(this, 'containerRef', r.createRef()),
            e7(this, 'avatarWithPopoutRef', r.createRef()),
            e7(this, 'handleToggleSelfMute', () => {
                let { serverMute: e, suppress: t, selfMute: n } = this.props;
                ((0, L.Z)(e, t, e3.jXE.ACCOUNT_PANEL), (0, B.v)(N.Z.ACCOUNT, B.d.MIC, n));
            }),
            e7(this, 'handleToggleSelfDeaf', () => {
                let { serverDeaf: e, selfDeaf: t } = this.props;
                ((0, k.Z)(e, e3.jXE.ACCOUNT_PANEL), (0, B.v)(N.Z.ACCOUNT, B.d.DEAFEN, !t));
            }),
            e7(this, 'handleOpenAccountSettings', () => {
                this.handleOpenSettings();
            }),
            e7(this, 'handleOpenSettings', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, eQ.Q)('Account').jumpToVoice && ew.Z.isConnected() ? e3.oAB.VOICE : e3.oAB.ACCOUNT,
                    t = arguments.length > 1 ? arguments[1] : void 0,
                    n = arguments.length > 2 ? arguments[2] : void 0;
                x.Z.open(e, t, n);
            }),
            e7(this, 'handleOpenSettingsContextMenu', (e) => {
                let { currentUser: t } = this.props;
                null != t &&
                    (0, b.jW)(e, async () => {
                        let { default: e } = await n.e('2535').then(n.bind(n, 923422));
                        return (n) =>
                            (0, i.jsx)(
                                e,
                                te(e9({}, n), {
                                    user: t,
                                    premiumSubscription: this.props.premiumSubscription,
                                    webBuildOverride: this.props.webBuildOverride,
                                    onInteraction: (0, M.u)('UserSettingsCogContextMenu', N.Z.ACCOUNT)
                                })
                            );
                    });
            }),
            e7(this, 'audioOnInteractionHandler', (0, M.u)('AudioDeviceMenu', N.Z.ACCOUNT)),
            e7(this, 'handleInputAudioContextMenu', (e, t) => {
                (0, b.jW)(e, async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 659580));
                    return () => {
                        let { enabledInputProfiles: n } = (0, eg.c)({ location: 'Account' });
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
            e7(this, 'handleOutputAudioContextMenu', (e, t) => {
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
            e7(this, 'handleMouseEnter', () => {
                this.setState({ hovered: !0 });
            }),
            e7(this, 'handleMouseLeave', () => {
                this.setState({ hovered: !1 });
            }),
            e7(this, 'handleMouseEnterMute', () => {
                (this.setState({
                    hoveringOnMute: !0,
                    shouldShowSpeakingWhileMutedTooltip: !1
                }),
                    this.speakingWhileMutedTooltipTimeout.stop());
            }),
            e7(this, 'handleMouseLeaveMute', () => {
                this.setState({ hoveringOnMute: !1 });
            }),
            e7(this, 'handleCopyTag', () => {
                let { currentUser: e } = this.props,
                    { shouldShowNametagTooltip: t, copiedStreak: n } = this.state;
                if (null == e) return;
                ((0, eF.JG)(
                    eX.ZP.getUserTag(e, {
                        decoration: 'never',
                        identifiable: 'always'
                    })
                ),
                    eV.default.track(e3.rMx.TEXT_COPIED, { type: 'User Tag' }));
                let i = {
                    shouldShowCopiedFeedback: !0,
                    shouldShowNametagTooltip: !0
                };
                (t || (i.copiedStreak = n + 1),
                    this.setState(i, () => {
                        (this.copiedTimeout.start(1000, () => this.setState({ shouldShowNametagTooltip: !1 })), this.copiedDecayTimeout.start(2000, () => this.setState({ copiedStreak: 0 })));
                    }));
            }),
            e7(this, 'handleOccludedChanged', () => {
                let { occluded: e } = this.props;
                e &&
                    this.setState({
                        shouldShowNametagTooltip: !1,
                        shouldShowSpeakingWhileMutedTooltip: !1
                    });
            }),
            e7(this, 'handleSpeakingWhileMutedChanged', () => {
                let { selfMute: e, serverMute: t, suppress: n, speakingWhileMuted: i, occluded: r } = this.props,
                    { hoveringOnMute: s } = this.state,
                    a = void 0 === this.lastSpeakingWhileMutedNotificationTime || Date.now() - this.lastSpeakingWhileMutedNotificationTime > tn;
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
            e7(this, 'renderNameTag', (e) => {
                let { currentUser: t } = this.props;
                return null == t
                    ? null
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)('div', {
                                  className: e4.panelTitleContainer,
                                  children: (0, i.jsx)(e1.Z, {
                                      children: (0, i.jsx)(K.Z, {
                                          userName: eX.ZP.getName(t),
                                          displayNameStyles: e,
                                          effectDisplayType: this.state.hovered ? z.F.ANIMATED : z.F.STATIC,
                                          loop: !0,
                                          inProfile: !0
                                      })
                                  })
                              }),
                              (0, i.jsx)('div', {
                                  className: e4.panelSubtextContainer,
                                  children: (0, i.jsx)(e0.Z, { children: this.renderStatus() })
                              })
                          ]
                      });
            }));
    }
}
function ta(e) {
    let { selfDeaf: t, selfMute: n, awaitingRemote: r, serverMute: s, serverDeaf: a, suppress: l, shouldShowSpeakingWhileMutedTooltip: o, isEligibleForPomelo: c, webBuildOverride: d, handleMouseEnterMute: u, handleMouseLeaveMute: m, handleToggleSelfDeaf: p, handleToggleSelfMute: g, handleInputAudioContextMenu: h, handleOutputAudioContextMenu: b, handleOpenAccountSettings: x, handleOpenSettingsContextMenu: _, dismissibleContents: j, nameplate: C, accountContainerRef: E } = e,
        O = (0, ei.A)(C);
    return (0, i.jsxs)('div', {
        className: e4.buttons,
        style: O,
        children: [
            (0, i.jsx)(tc, {
                accountContainerRef: E,
                selfMute: n,
                serverMute: s,
                suppress: l,
                awaitingRemote: r,
                tooltipText: o ? e5.intl.string(e5.t['29gnR0']) : void 0,
                tooltipColor: o ? f.FGA.GREEN : void 0,
                tooltipForceOpen: o || void 0,
                onMouseEnter: u,
                onMouseLeave: m,
                onClick: g,
                onContextMenu: h,
                iconForeground: null != C ? e4.iconForeground : void 0,
                nameplate: C
            }),
            (0, i.jsx)(td, {
                selfDeaf: t,
                serverDeaf: a,
                onClick: p,
                onContextMenu: b,
                awaitingRemote: r,
                iconForeground: null != C ? e4.iconForeground : void 0,
                nameplate: C
            }),
            (0, i.jsx)(to, {
                isEligibleForPomelo: c,
                webBuildOverride: d,
                onClick: x,
                onContextMenu: _,
                dismissibleContents: j.settings,
                iconForeground: null != C ? e4.iconForeground : void 0,
                nameplate: C
            })
        ]
    });
}
function tl() {
    var e;
    let t = (0, d.e7)([eM.default], () => eM.default.getCurrentUser()),
        n = (0, d.e7)([eA.default], () => eA.default.getId()),
        {
            activities: r,
            streaming: s,
            status: a
        } = (0, d.cj)([eL.Z], () => {
            let e = eL.Z.getActivities();
            return {
                activities: e,
                streaming:
                    null !=
                    e.find((e) => {
                        let { type: t } = e;
                        return t === e3.IIU.STREAMING;
                    }),
                status: eL.Z.getStatus()
            };
        }),
        l = (0, d.e7)([ey.Z], () => ey.Z.getAnyStreamForUser(n)),
        c = (0, j.Z)({ userId: n }),
        m = eX.ZP.useUserTag(t, { decoration: 'never' }),
        p = (0, d.e7)([eB.Z], () => eB.Z.hidePersonalInformation),
        g = (0, d.e7)([ew.Z, eP.Z], () => {
            let e = ew.Z.getChannelId();
            return null != e ? eP.Z.getChannel(e) : null;
        }),
        { mute: h, selfMute: b, suppress: x } = (0, ef.Z)(g),
        { selfDeaf: _, deaf: C } = (0, eh.Z)(g),
        O = (0, d.e7)([P.C], () => {
            var e;
            return (0, R.fD)() ? (null == (e = P.C.getCurrentBuildOverride().overrides) ? void 0 : e.discord_web) : null;
        }),
        v = (0, d.e7)([eU.Z], () => eU.Z.getPremiumTypeSubscription()),
        S = (0, d.e7)([eZ.Z], () => eZ.Z.getSpeakingWhileMuted()),
        T = (0, d.e7)([D.Z], () => D.Z.isFullscreenInContext()),
        y = (0, d.e7)([eD.Z], () => eD.Z.hasLayers()),
        A = (0, f.s9z)(f.JQI) || y || eq.s.isDisallowPopupsSet() || T,
        Z = (0, ea.b)(),
        w = (0, d.e7)([q.Z], () => null != q.Z.getAwaitingRemoteSessionInfo()),
        k = (0, d.e7)([ek.Z], () => ek.Z.getGuildId()),
        L = eK.ZP.canUsePremiumGuildMemberProfile(t),
        B = (null == t || null == (e = t.avatarDecoration) ? void 0 : e.skuId) === e6.rL,
        { voiceActivityStatusEnabled: M } = (0, E.U)({ location: 'Account' }),
        U = (0, $.m)(),
        [V, G] = (0, J.G)(null != k ? k : null),
        F = W.J.useExperiment({ location: 'Account' }).enabled,
        { analyticsLocations: H } = (0, I.ZP)(N.Z.ACCOUNT),
        z = (0, en.K)({ user: t }),
        Y = (0, ec.Ws)({ location: e2.dr.CONFLICT_CHECKS }),
        K = (0, d.e7)([ed.Z, eM.default, eR.Z], () => {
            let e,
                t = ed.Z.getSyncingWith(),
                n = ed.Z.getActivity(),
                i = [];
            if ((null != t ? (e = t.partyId) : null != n && null != n.party && null != n.party.id && (e = n.party.id), null != e)) {
                var r;
                i = o()(Array.from(null != (r = eR.Z.getParty(e)) ? r : []))
                    .map((e) => eM.default.getUser(e))
                    .filter(eY.lm)
                    .value();
            }
            return i.length > 1;
        }),
        X = {
            avatar: [],
            settings: []
        };
    return (
        !A && (L && X.settings.push(u.z.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK), B && X.avatar.push(u.z.PREMIUM_SUBSCRIPTION_APRIL_MARKETING_DECO_TOOLTIP), U && X.avatar.push(u.z.EXPIRING_STATUS_COACHMARK), F && X.avatar.push(u.z.DISPLAY_NAME_STYLES_COACHMARK)),
        (0, i.jsx)(I.Gt, {
            value: H,
            children: (0, i.jsx)(ts, {
                currentUser: t,
                activities: r,
                applicationStream: l,
                voiceChannel: g,
                dismissibleContents: X,
                visibleRecurringAvatarDc: V,
                markRecurringAvatarDcAsDismissed: G,
                userTag: m,
                hidePrivateData: p,
                occluded: A,
                premiumSubscription: v,
                selfDeaf: _,
                selfMute: b,
                serverDeaf: C,
                serverMute: h,
                speaking: c,
                speakingWhileMuted: S,
                status: a,
                streaming: s,
                suppress: x,
                webBuildOverride: O,
                awaitingRemote: w,
                isEligibleForPomelo: Z,
                voiceActivityStatusEnabled: M,
                nameplate: z,
                selectedGuildId: k,
                isQuestBarEmpty: Y,
                isListenAlongVisible: K
            })
        })
    );
}
function to(e) {
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
        renderPopout: h === u.z.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK ? () => (0, i.jsx)(em.Z, {}) : () => (0, i.jsx)(i.Fragment, {}),
        children: () =>
            (0, i.jsx)(
                e$.Z,
                te(
                    e9(
                        {
                            ref: d,
                            tooltipText: null != t ? e5.intl.formatToPlainString(e5.t.Gzh6ZG, { webBuildOverride: t.id }) : e5.intl.string(e5.t.cduTBA),
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
function tc(e) {
    let { selfMute: t, serverMute: n, suppress: s, awaitingRemote: l, tooltipText: o, tooltipColor: m, tooltipForceOpen: p, iconForeground: g, onMouseEnter: b, onMouseLeave: x, onClick: _, onContextMenu: j, nameplate: C, accountContainerRef: E } = e,
        O = t || s || n,
        v = r.useRef(null),
        S = r.useRef(null),
        T = (0, eI.b)(O),
        { activeVoice: y, mostRecentlyRequestedVoiceId: A, lastInitAttemptMayHaveCrashed: P } = (0, eC.o)(),
        { showSilentLagWarning: R } = (0, ej.Y)(),
        D = null != y,
        Z = (0, e_.z)(y),
        k = (0, d.e7)([ew.Z], () => ew.Z.isConnected()),
        { Component: L, events: B, play: M } = T,
        U = n || s ? f.v0G : L,
        V = R ? e5.intl.string(e5.t.ARRV6u) : null,
        G = (0, w.Z)(t, n, s, l),
        F =
            null != o
                ? o
                : null != V
                  ? (0, i.jsxs)('div', {
                        className: e4.tooltipWithSubtext,
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
        { analyticsLocations: W } = (0, I.ZP)(N.Z.AUDIO_INPUT_BUTTON),
        z = (0, eb.Hu)({
            location: N.Z.AUDIO_INPUT_BUTTON,
            autoTrackExposure: !0
        }),
        Y = (0, ex.av)({
            location: N.Z.AUDIO_INPUT_BUTTON,
            autoTrackExposure: !0
        });
    r.useEffect(() => () => M(), [O, M]);
    let K = r.useCallback(
            (e) => {
                j(e, W);
            },
            [j, W]
        ),
        [q, X] = r.useState(!1),
        J = r.useCallback((e) => {
            var t;
            if ((0, c.k)(null == e ? void 0 : e.target, Node) && (null == (t = v.current) ? void 0 : t.contains(e.target))) return h.F;
            X(!1);
        }, []);
    (0, eH.yp)({
        event: e3.CkL.OPEN_VOICE_FILTER_POPOUT,
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
                    ($(!0), (e = setTimeout(() => $(!1), ti)));
                }, 300)),
            () => {
                ($(!1), clearTimeout(e));
            }
        );
    }, [k]);
    let ee = r.useCallback(() => {
            P || (0, eE.r5)();
        }, [P]),
        et = O ? f.TVs.colors.STATUS_DANGER : R ? f.TVs.colors.STATUS_WARNING : 'currentColor',
        en = O || R,
        ei = (0, el.Z)({ location: 'Account' });
    return (0, i.jsx)(I.Gt, {
        value: W,
        children: (0, i.jsxs)('div', {
            ref: v,
            className: a()(e4.micButtonParent, { [e4.hasColorGlow]: en }),
            children: [
                (0, i.jsx)(e$.Z, {
                    tooltipText: F,
                    tooltipColor: m,
                    tooltipForceOpen: p,
                    plated: null != C,
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
                    className: a()({ [e4.micButtonWithMenu]: z }),
                    orangeGlow: R,
                    redGlow: O,
                    'aria-label': e5.intl.string(e5.t['w4m94+']),
                    'aria-checked': O,
                    disabled: l
                }),
                z &&
                    (0, i.jsx)(f.yRy, {
                        targetElementRef: E,
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
                            return (0, i.jsx)(eT.l, { onSettingsButtonClick: t });
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
                                                ? (o = (0, i.jsx)(eS.U, {
                                                      markAsDismissed: s,
                                                      onCTA: () => X(!0)
                                                  }))
                                                : t === u.z.VOICE_FILTER_LAUNCH_COACHMARK
                                                  ? (o = (0, i.jsx)(ev.n, {
                                                        markAsDismissed: s,
                                                        onCTA: () => X(!0)
                                                    }))
                                                  : t === u.z.VOICE_FILTER_FIRST_USE_COACHMARK &&
                                                    (o = (0, i.jsx)(eO.v, {
                                                        markAsDismissed: s,
                                                        onCTA: () => X(!0)
                                                    }));
                                            let c = () =>
                                                (0, i.jsx)(
                                                    e$.Z,
                                                    e9(
                                                        {
                                                            ref: S,
                                                            plated: null != C,
                                                            tooltipForceOpen: Q,
                                                            tooltipColor: Q ? f.FGA.GREEN : void 0,
                                                            tooltipContentClassName: Q ? e4.voiceFilterWarning : void 0,
                                                            tooltipText: Q
                                                                ? (0, i.jsxs)(i.Fragment, {
                                                                      children: [
                                                                          (0, i.jsx)('img', {
                                                                              alt: null != Z ? e5.intl.string(Z.name) : '',
                                                                              src: null == Z ? void 0 : Z.iconURL,
                                                                              draggable: !1
                                                                          }),
                                                                          (0, i.jsx)(f.Text, {
                                                                              variant: 'text-sm/medium',
                                                                              color: 'always-white',
                                                                              children: e5.intl.string(e5.t.VlC1dX)
                                                                          })
                                                                      ]
                                                                  })
                                                                : e5.intl.string(e5.t.Hapb4O),
                                                            icon: (0, i.jsx)(a, {
                                                                className: e4.buttonChevronIcon,
                                                                size: 'custom',
                                                                width: 12,
                                                                height: 12,
                                                                color: et
                                                            }),
                                                            role: 'button',
                                                            className: e4.buttonChevron,
                                                            orangeGlow: R,
                                                            redGlow: O,
                                                            'aria-label': e5.intl.string(e5.t.Hapb4O),
                                                            disabled: l,
                                                            onClick: (e) => {
                                                                (s(e8.L.INDIRECT_ACTION), n(e), null != A && !q && P ? (0, eN.$)(() => X(!0)) : X(!q));
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
function td(e) {
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
        children: (0, i.jsx)(e$.Z, {
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
            innerClassName: a()({ [e4.redIcon]: n }),
            iconForeground: u ? e4.strikethrough : void 0,
            role: 'switch',
            redGlow: u,
            'aria-label': e5.intl.string(e5.t.wjcRFR),
            'aria-checked': u,
            disabled: s
        })
    });
}
