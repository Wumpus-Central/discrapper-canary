(n.d(t, {
    Z: () => tm,
    m: () => td
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
    E = n(634894),
    O = n(586902),
    C = n(980591),
    v = n(468363),
    S = n(326255),
    T = n(771173),
    N = n(963056),
    I = n(570928),
    y = n(100527),
    A = n(906732),
    P = n(676742),
    R = n(1585),
    D = n(304761),
    Z = n(865427),
    w = n(358221),
    k = n(571250),
    L = n(628581),
    B = n(55311),
    M = n(575175),
    U = n(522651),
    V = n(795318),
    G = n(338390),
    F = n(526371),
    H = n(64220),
    z = n(427217),
    W = n(243778),
    Y = n(821795),
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
    ed = n(19199),
    eu = n(212704),
    em = n(14357),
    ep = n(763296),
    eg = n(640806),
    eh = n(768419),
    ef = n(184301),
    eb = n(52538),
    ex = n(670188),
    e_ = n(321614),
    ej = n(879815),
    eE = n(294629),
    eO = n(875527),
    eC = n(702977),
    ev = n(56848),
    eS = n(940315),
    eT = n(378441),
    eN = n(358820),
    eI = n(723547),
    ey = n(361045),
    eA = n(74650),
    eP = n(306609),
    eR = n(170293),
    eD = n(8404),
    eZ = n(199902),
    ew = n(314897),
    ek = n(592125),
    eL = n(831506),
    eB = n(819640),
    eM = n(131951),
    eU = n(19780),
    eV = n(914010),
    eG = n(885110),
    eF = n(246946),
    eH = n(594174),
    ez = n(78839),
    eW = n(626135),
    eY = n(768581),
    eK = n(572004),
    eq = n(459273),
    eX = n(585483),
    eJ = n(70956),
    eQ = n(823379),
    e$ = n(74538),
    e0 = n(374023),
    e1 = n(51144),
    e3 = n(998502),
    e6 = n(578817),
    e8 = n(870569),
    e2 = n(345243),
    e5 = n(115530),
    e7 = n(981631),
    e4 = n(215023),
    e9 = n(921944),
    te = n(46140),
    tt = n(388032),
    tn = n(239692);
function ti(e, t, n) {
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
function tr(e) {
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
                ti(e, t, n[t]);
            }));
    }
    return e;
}
function ts(e, t) {
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
let ta = e3.ZP.getEnableHardwareAcceleration() ? f.Xo$ : f.qEK,
    tl = 2 * eJ.Z.Millis.MINUTE,
    to = 3 * eJ.Z.Millis.SECOND;
function tc(e) {
    let { ref: t, speaking: n, streaming: s, currentUser: l, status: o, handleClick: c, handleMouseLeave: d, renderNameTag: u, nameplate: m, 'data-jump-section': p } = e,
        g = r.useRef(null),
        h = null != t ? t : g,
        b = (0, P.Z)(null == l ? void 0 : l.avatarDecoration),
        x = (0, eY.NZ)({
            avatarDecoration: b,
            size: (0, R.y9)(f.EFr.SIZE_32)
        }),
        j = (0, f.dQu)(f.TVs.modules.guildbar.AVATAR_SIZE),
        E = (0, G.Z)('Account') ? 32 : j,
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
                        eX.S.subscribe(e7.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, t),
                        () => {
                            eX.S.unsubscribe(e7.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, t);
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
              object: e7.qAy.AVATAR,
              children: (0, i.jsx)(ex.Z, {
                  user: l,
                  targetElementRef: h,
                  clickTrap: !0,
                  preload: () =>
                      (0, ef.Z)(l.id, l.getAvatarURL(void 0, ex.I), {
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
                          ts(
                              tr(
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
                                  'aria-label': tt.intl.string(tt.t['3Uj+2t']),
                                  'data-jump-section': p,
                                  className: a()(tn.avatarWrapper, { [tn.plated]: null != m }),
                                  children: [
                                      (0, i.jsx)(ta, {
                                          size: f.EFr['SIZE_'.concat(E)],
                                          src: l.getAvatarURL(void 0, E - 4, !1),
                                          avatarDecoration: x,
                                          'aria-label': l.username,
                                          status: s ? e7.Skl.STREAMING : o,
                                          isSpeaking: n,
                                          className: tn.avatar
                                      }),
                                      (0, i.jsx)('div', {
                                          className: a()(tn.nameTag, { [tn.canCopy]: eK.wS }),
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
class td extends r.PureComponent {
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
            t = [tt.intl.string(tt.t.MSaeTU), tt.intl.string(tt.t.UmrCw8), tt.intl.string(tt.t.gKE0Ji), tt.intl.string(tt.t['4DSKbm']), tt.intl.string(tt.t['+8ENdX']), tt.intl.string(tt.t.GlWHv7), tt.intl.string(tt.t.hIzxU1), tt.intl.string(tt.t['26uMPD']), tt.intl.string(tt.t.uFs7R0), tt.intl.string(tt.t.bLXdcX), tt.intl.string(tt.t.gPg9fX)],
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
            (0, S.Z)({
                activities: t,
                status: s,
                applicationStream: n,
                voiceChannel: l ? o : void 0
            })
        )
            return (0, i.jsx)(I.Z, {
                hoverText: a,
                forceHover: e,
                children: (0, i.jsx)(T.Z, {
                    location: 'Account',
                    user: r,
                    activities: t,
                    applicationStream: n,
                    voiceChannel: l ? o : void 0,
                    textClassName: tn.activityStatusText,
                    hideTooltip: !0
                })
            });
        let c =
            null == t
                ? void 0
                : t.find((e) => {
                      let { type: t } = e;
                      return t === e7.IIU.CUSTOM_STATUS;
                  });
        return null != c
            ? (0, i.jsx)(I.Z, {
                  hoverText: a,
                  forceHover: e,
                  children: (0, i.jsx)(z.Z, {
                      activity: c,
                      emojiClassName: tn.emoji,
                      className: tn.customStatus
                  })
              })
            : null != s && s !== e7.Skl.UNKNOWN && r.isPomelo()
              ? (0, i.jsx)(I.Z, {
                    hoverText: a,
                    forceHover: e,
                    children: (0, i.jsx)(N.Z, { text: e1.ZP.humanizeStatus(s) })
                })
              : a;
    }
    renderAvatarWithPopout(e) {
        let {
            focusSectionProps: { 'data-jump-section': t },
            onClick: n
        } = e;
        return (0, i.jsx)(
            tc,
            ts(tr({}, this.props), {
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
                    groupName: e9.R.ACCOUNT_NAME_ZONE,
                    targetElementRef: this.avatarWithPopoutRef
                }),
                (0, i.jsx)(W.ZP, {
                    contentTypes: n.avatar,
                    groupName: e9.R.ACCOUNT_NAME_ZONE,
                    children: (t) => {
                        let { visibleContent: n, markAsDismissed: r } = t;
                        switch (n) {
                            case u.z.PREMIUM_SUBSCRIPTION_APRIL_MARKETING_DECO_TOOLTIP:
                                return (0, i.jsx)(H.Z, {
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
                                  className: a()(tn.container, {
                                      [tn.containerRtcOpened]: null != n,
                                      [tn.containerQuestBarVisible]: !r,
                                      [tn.containerListenAlongVisible]: s
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
                                          tu,
                                          ts(tr({}, this.props, this.state), {
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
                              (0, i.jsx)(F.Z, {})
                          ]
                      })
              });
    }
    constructor(...e) {
        (super(...e),
            ti(this, 'copiedTimeout', new m.V7()),
            ti(this, 'copiedDecayTimeout', new m.V7()),
            ti(this, 'speakingWhileMutedTooltipTimeout', new m.V7()),
            ti(this, 'lastSpeakingWhileMutedNotificationTime', void 0),
            ti(this, 'state', {
                hovered: !1,
                copiedStreak: 0,
                shouldShowNametagTooltip: !1,
                shouldShowCopiedFeedback: !1,
                shouldShowSpeakingWhileMutedTooltip: !1,
                hoveringOnMute: !1
            }),
            ti(this, 'containerRef', r.createRef()),
            ti(this, 'avatarWithPopoutRef', r.createRef()),
            ti(this, 'handleToggleSelfMute', () => {
                let { serverMute: e, suppress: t, selfMute: n } = this.props;
                ((0, M.Z)(e, t, e7.jXE.ACCOUNT_PANEL), (0, U.v)(y.Z.ACCOUNT, U.d.MIC, n));
            }),
            ti(this, 'handleToggleSelfDeaf', () => {
                let { serverDeaf: e, selfDeaf: t } = this.props;
                ((0, B.Z)(e, e7.jXE.ACCOUNT_PANEL), (0, U.v)(y.Z.ACCOUNT, U.d.DEAFEN, !t));
            }),
            ti(this, 'handleOpenAccountSettings', () => {
                this.handleOpenSettings();
            }),
            ti(this, 'handleOpenSettings', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, e6.Q)('Account').jumpToVoice && eU.Z.isConnected() ? e7.oAB.VOICE : e7.oAB.ACCOUNT,
                    t = arguments.length > 1 ? arguments[1] : void 0,
                    n = arguments.length > 2 ? arguments[2] : void 0;
                x.Z.open(e, t, n);
            }),
            ti(this, 'handleOpenSettingsContextMenu', (e) => {
                let { currentUser: t } = this.props;
                null != t &&
                    (0, b.jW)(e, async () => {
                        let { default: e } = await n.e('2535').then(n.bind(n, 923422));
                        return (n) =>
                            (0, i.jsx)(
                                e,
                                ts(tr({}, n), {
                                    user: t,
                                    premiumSubscription: this.props.premiumSubscription,
                                    webBuildOverride: this.props.webBuildOverride,
                                    onInteraction: (0, V.u)('UserSettingsCogContextMenu', y.Z.ACCOUNT)
                                })
                            );
                    });
            }),
            ti(this, 'audioOnInteractionHandler', (0, V.u)('AudioDeviceMenu', y.Z.ACCOUNT)),
            ti(this, 'handleInputAudioContextMenu', (e, t) => {
                (0, b.jW)(e, async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 659580));
                    return () => {
                        let { enabledInputProfiles: n } = (0, e_.c)({ location: 'Account' });
                        return (0, i.jsx)(A.Gt, {
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
            ti(this, 'handleOutputAudioContextMenu', (e, t) => {
                (0, b.jW)(e, async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 659580));
                    return () =>
                        (0, i.jsx)(A.Gt, {
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
            ti(this, 'handleMouseEnter', () => {
                this.setState({ hovered: !0 });
            }),
            ti(this, 'handleMouseLeave', () => {
                this.setState({ hovered: !1 });
            }),
            ti(this, 'handleMouseEnterMute', () => {
                (this.setState({
                    hoveringOnMute: !0,
                    shouldShowSpeakingWhileMutedTooltip: !1
                }),
                    this.speakingWhileMutedTooltipTimeout.stop());
            }),
            ti(this, 'handleMouseLeaveMute', () => {
                this.setState({ hoveringOnMute: !1 });
            }),
            ti(this, 'handleCopyTag', () => {
                let { currentUser: e } = this.props,
                    { shouldShowNametagTooltip: t, copiedStreak: n } = this.state;
                if (null == e) return;
                ((0, eK.JG)(
                    e1.ZP.getUserTag(e, {
                        decoration: 'never',
                        identifiable: 'always'
                    })
                ),
                    eW.default.track(e7.rMx.TEXT_COPIED, { type: 'User Tag' }));
                let i = {
                    shouldShowCopiedFeedback: !0,
                    shouldShowNametagTooltip: !0
                };
                (t || (i.copiedStreak = n + 1),
                    this.setState(i, () => {
                        (this.copiedTimeout.start(1000, () => this.setState({ shouldShowNametagTooltip: !1 })), this.copiedDecayTimeout.start(2000, () => this.setState({ copiedStreak: 0 })));
                    }));
            }),
            ti(this, 'handleOccludedChanged', () => {
                let { occluded: e } = this.props;
                e &&
                    this.setState({
                        shouldShowNametagTooltip: !1,
                        shouldShowSpeakingWhileMutedTooltip: !1
                    });
            }),
            ti(this, 'handleSpeakingWhileMutedChanged', () => {
                let { selfMute: e, serverMute: t, suppress: n, speakingWhileMuted: i, occluded: r } = this.props,
                    { hoveringOnMute: s } = this.state,
                    a = void 0 === this.lastSpeakingWhileMutedNotificationTime || Date.now() - this.lastSpeakingWhileMutedNotificationTime > tl;
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
            ti(this, 'renderNameTag', (e) => {
                let { currentUser: t } = this.props;
                return null == t
                    ? null
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)('div', {
                                  className: tn.panelTitleContainer,
                                  children: (0, i.jsx)(e5.Z, {
                                      children: (0, i.jsx)(K.Z, {
                                          userName: e1.ZP.getName(t),
                                          displayNameStyles: e,
                                          effectDisplayType: Y.F.STATIC
                                      })
                                  })
                              }),
                              (0, i.jsx)('div', {
                                  className: tn.panelSubtextContainer,
                                  children: (0, i.jsx)(e2.Z, { children: this.renderStatus() })
                              })
                          ]
                      });
            }));
    }
}
function tu(e) {
    let { selfDeaf: t, selfMute: n, awaitingRemote: r, serverMute: s, serverDeaf: a, suppress: l, shouldShowSpeakingWhileMutedTooltip: o, isEligibleForPomelo: c, webBuildOverride: d, handleMouseEnterMute: u, handleMouseLeaveMute: m, handleToggleSelfDeaf: p, handleToggleSelfMute: g, handleInputAudioContextMenu: h, handleOutputAudioContextMenu: b, handleOpenAccountSettings: x, handleOpenSettingsContextMenu: _, dismissibleContents: j, nameplate: E, accountContainerRef: O } = e,
        C = (0, ei.A)(E);
    return (0, i.jsxs)('div', {
        className: tn.buttons,
        style: C,
        children: [
            (0, i.jsx)(tg, {
                accountContainerRef: O,
                selfMute: n,
                serverMute: s,
                suppress: l,
                awaitingRemote: r,
                tooltipText: o ? tt.intl.string(tt.t['29gnR0']) : void 0,
                tooltipColor: o ? f.FGA.GREEN : void 0,
                tooltipForceOpen: o || void 0,
                onMouseEnter: u,
                onMouseLeave: m,
                onClick: g,
                onContextMenu: h,
                iconForeground: null != E ? tn.iconForeground : void 0,
                nameplate: E
            }),
            (0, i.jsx)(th, {
                selfDeaf: t,
                serverDeaf: a,
                onClick: p,
                onContextMenu: b,
                awaitingRemote: r,
                iconForeground: null != E ? tn.iconForeground : void 0,
                nameplate: E
            }),
            (0, i.jsx)(tp, {
                isEligibleForPomelo: c,
                webBuildOverride: d,
                onClick: x,
                onContextMenu: _,
                dismissibleContents: j.settings,
                iconForeground: null != E ? tn.iconForeground : void 0,
                nameplate: E
            })
        ]
    });
}
function tm() {
    var e;
    let t = (0, d.e7)([eH.default], () => eH.default.getCurrentUser()),
        n = (0, d.e7)([ew.default], () => ew.default.getId()),
        {
            activities: r,
            streaming: s,
            status: a
        } = (0, d.cj)([eG.Z], () => {
            let e = eG.Z.getActivities();
            return {
                activities: e,
                streaming:
                    null !=
                    e.find((e) => {
                        let { type: t } = e;
                        return t === e7.IIU.STREAMING;
                    }),
                status: eG.Z.getStatus()
            };
        }),
        l = (0, d.e7)([eZ.Z], () => eZ.Z.getAnyStreamForUser(n)),
        c = (0, O.Z)({ userId: n }),
        m = e1.ZP.useUserTag(t, { decoration: 'never' }),
        p = (0, d.e7)([eF.Z], () => eF.Z.hidePersonalInformation),
        g = (0, d.e7)([eU.Z, ek.Z], () => {
            let e = eU.Z.getChannelId();
            return null != e ? ek.Z.getChannel(e) : null;
        }),
        { mute: h, selfMute: b, suppress: x } = (0, eE.Z)(g),
        { selfDeaf: _, deaf: C } = (0, ej.Z)(g),
        S = (0, d.e7)([D.C], () => {
            var e;
            return (0, Z.fD)() ? (null == (e = D.C.getCurrentBuildOverride().overrides) ? void 0 : e.discord_web) : null;
        }),
        T = (0, d.e7)([ez.Z], () => ez.Z.getPremiumTypeSubscription()),
        N = (0, d.e7)([eM.Z], () => eM.Z.getSpeakingWhileMuted()),
        I = (0, d.e7)([w.Z], () => w.Z.isFullscreenInContext()),
        P = (0, d.e7)([eB.Z], () => eB.Z.hasLayers()),
        R = (0, f.s9z)(f.JQI) || P || e0.s.isDisallowPopupsSet() || I,
        k = (0, ea.b)(),
        L = (0, d.e7)([q.Z], () => null != q.Z.getAwaitingRemoteSessionInfo()),
        B = (0, d.e7)([eV.Z], () => eV.Z.getGuildId()),
        M = (0, ed.D)(),
        U = (0, j.u)(),
        V = e$.ZP.canUsePremiumGuildMemberProfile(t),
        G = (null == t || null == (e = t.avatarDecoration) ? void 0 : e.skuId) === e4.rL,
        { voiceActivityStatusEnabled: F } = (0, v.U)({ location: 'Account' }),
        H = (0, $.m)(),
        [z, W] = (0, J.G)(null != B ? B : null),
        Y = 'account';
    ((0, E.j)({
        location: Y + ' auto on',
        autoTrackExposure: !0
    }),
        (0, E.j)({
            location: Y + ' auto off',
            autoTrackExposure: !1
        }));
    let K = (0, d.e7)([ep.Z], () => ep.Z.hasHadOtherUserPlaySoundInSession()),
        { analyticsLocations: X } = (0, A.ZP)(y.Z.ACCOUNT),
        Q = (0, en.K)({ user: t }),
        ee = (0, ec.Ws)({ location: te.dr.CONFLICT_CHECKS }),
        et = (0, d.e7)([eh.Z, eH.default, eL.Z], () => {
            let e,
                t = eh.Z.getSyncingWith(),
                n = eh.Z.getActivity(),
                i = [];
            if ((null != t ? (e = t.partyId) : null != n && null != n.party && null != n.party.id && (e = n.party.id), null != e)) {
                var r;
                i = o()(Array.from(null != (r = eL.Z.getParty(e)) ? r : []))
                    .map((e) => eH.default.getUser(e))
                    .filter(eQ.lm)
                    .value();
            }
            return i.length > 1;
        }),
        ei = {
            avatar: [],
            settings: []
        };
    return (
        !R && (M && (1 === U ? ei.settings.push(u.z.USER_SAFETY_CONSUMER_EDUCATION_MUTE) : ei.settings.push(u.z.USER_SAFETY_CONSUMER_EDUCATION_BLOCK)), K && ei.settings.push(u.z.SOUNDBOARD_VOLUME_EDUCATION), V && ei.settings.push(u.z.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK), G && ei.avatar.push(u.z.PREMIUM_SUBSCRIPTION_APRIL_MARKETING_DECO_TOOLTIP), H && ei.avatar.push(u.z.EXPIRING_STATUS_COACHMARK)),
        (0, i.jsx)(A.Gt, {
            value: X,
            children: (0, i.jsx)(td, {
                currentUser: t,
                activities: r,
                applicationStream: l,
                voiceChannel: g,
                dismissibleContents: ei,
                visibleRecurringAvatarDc: z,
                markRecurringAvatarDcAsDismissed: W,
                userTag: m,
                hidePrivateData: p,
                occluded: R,
                premiumSubscription: T,
                selfDeaf: _,
                selfMute: b,
                serverDeaf: C,
                serverMute: h,
                speaking: c,
                speakingWhileMuted: N,
                status: a,
                streaming: s,
                suppress: x,
                webBuildOverride: S,
                awaitingRemote: L,
                isEligibleForPomelo: k,
                voiceActivityStatusEnabled: F,
                nameplate: Q,
                selectedGuildId: B,
                isQuestBarEmpty: ee,
                isListenAlongVisible: et
            })
        })
    );
}
function tp(e) {
    let { webBuildOverride: t, isEligibleForPomelo: n, onClick: s, onContextMenu: a, dismissibleContents: l, iconForeground: o, nameplate: c } = e,
        d = r.useRef(null),
        m = f.ewm,
        p = (0, g.i)();
    m = null != t ? f.bgT : n ? f.Ncx : p.Component;
    let [h, b] = (0, W.US)(l);
    return (0, i.jsx)(f.yRy, {
        targetElementRef: d,
        position: 'top',
        align: 'center',
        shouldShow: null != h,
        renderPopout: h === u.z.USER_SAFETY_CONSUMER_EDUCATION_BLOCK ? () => (0, i.jsx)(eu.Z, { markAsDismissed: b }) : h === u.z.USER_SAFETY_CONSUMER_EDUCATION_MUTE ? () => (0, i.jsx)(em.Z, { markAsDismissed: b }) : h === u.z.SOUNDBOARD_VOLUME_EDUCATION ? () => (0, i.jsx)(eg.Z, { markAsDismissed: b }) : h === u.z.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK ? () => (0, i.jsx)(eb.Z, {}) : () => (0, i.jsx)(i.Fragment, {}),
        children: () =>
            (0, i.jsx)(
                e8.Z,
                ts(
                    tr(
                        {
                            ref: d,
                            tooltipText: null != t ? tt.intl.formatToPlainString(tt.t.Gzh6ZG, { webBuildOverride: t.id }) : tt.intl.string(tt.t.cduTBA),
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
function tg(e) {
    let { selfMute: t, serverMute: n, suppress: s, awaitingRemote: l, tooltipText: o, tooltipColor: m, tooltipForceOpen: p, iconForeground: g, onMouseEnter: b, onMouseLeave: x, onClick: _, onContextMenu: j, nameplate: E, accountContainerRef: O } = e,
        C = t || s || n,
        v = r.useRef(null),
        S = r.useRef(null),
        T = (0, eD.b)(C),
        { activeVoice: N, mostRecentlyRequestedVoiceId: I, lastInitAttemptMayHaveCrashed: P } = (0, eT.o)(),
        { showSilentLagWarning: R } = (0, eS.Y)(),
        D = null != N,
        Z = (0, ev.z)(N),
        w = (0, d.e7)([eU.Z], () => eU.Z.isConnected()),
        { Component: k, events: B, play: M } = T,
        U = n || s ? f.v0G : k,
        V = R ? tt.intl.string(tt.t.ARRV6u) : null,
        G = (0, L.Z)(t, n, s, l),
        F =
            null != o
                ? o
                : null != V
                  ? (0, i.jsxs)('div', {
                        className: tn.tooltipWithSubtext,
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
        { analyticsLocations: H } = (0, A.ZP)(y.Z.AUDIO_INPUT_BUTTON),
        z = (0, eO.Hu)({
            location: y.Z.AUDIO_INPUT_BUTTON,
            autoTrackExposure: !0
        }),
        Y = (0, eC.av)({
            location: y.Z.AUDIO_INPUT_BUTTON,
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
        J = r.useCallback((e) => {
            var t;
            if ((0, c.k)(null == e ? void 0 : e.target, Node) && (null == (t = v.current) ? void 0 : t.contains(e.target))) return h.F;
            X(!1);
        }, []);
    (0, eq.yp)({
        event: e7.CkL.OPEN_VOICE_FILTER_POPOUT,
        handler: () => {
            X(!0);
        }
    });
    let [Q, $] = r.useState(!1);
    r.useEffect(() => {
        let e;
        return (
            w &&
                D &&
                (e = setTimeout(() => {
                    ($(!0), (e = setTimeout(() => $(!1), to)));
                }, 300)),
            () => {
                ($(!1), clearTimeout(e));
            }
        );
    }, [w]);
    let ee = r.useCallback(() => {
            P || (0, eN.r5)();
        }, [P]),
        et = C ? f.TVs.colors.STATUS_DANGER : R ? f.TVs.colors.STATUS_WARNING : 'currentColor',
        en = C || R,
        ei = (0, el.Z)({ location: 'Account' });
    return (0, i.jsx)(A.Gt, {
        value: H,
        children: (0, i.jsxs)('div', {
            ref: v,
            className: a()(tn.micButtonParent, { [tn.hasColorGlow]: en }),
            children: [
                (0, i.jsx)(e8.Z, {
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
                    className: a()({ [tn.micButtonWithMenu]: z }),
                    orangeGlow: R,
                    redGlow: C,
                    'aria-label': tt.intl.string(tt.t['w4m94+']),
                    'aria-checked': C,
                    disabled: l
                }),
                z &&
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
                                    children: (0, i.jsx)(W.ZP, {
                                        bypassAutoDismiss: !0,
                                        contentTypes: o,
                                        children: (e) => {
                                            let { visibleContent: t, markAsDismissed: s } = e,
                                                o = null;
                                            t === u.z.VOICE_FILTER_EARLY_ACCESS_COACHMARK
                                                ? (o = (0, i.jsx)(eA.U, {
                                                      markAsDismissed: s,
                                                      onCTA: () => X(!0)
                                                  }))
                                                : t === u.z.VOICE_FILTER_LAUNCH_COACHMARK
                                                  ? (o = (0, i.jsx)(ey.n, {
                                                        markAsDismissed: s,
                                                        onCTA: () => X(!0)
                                                    }))
                                                  : t === u.z.VOICE_FILTER_FIRST_USE_COACHMARK &&
                                                    (o = (0, i.jsx)(eI.v, {
                                                        markAsDismissed: s,
                                                        onCTA: () => X(!0)
                                                    }));
                                            let c = () =>
                                                (0, i.jsx)(
                                                    e8.Z,
                                                    tr(
                                                        {
                                                            ref: S,
                                                            plated: null != E,
                                                            tooltipForceOpen: Q,
                                                            tooltipColor: Q ? f.FGA.GREEN : void 0,
                                                            tooltipContentClassName: Q ? tn.voiceFilterWarning : void 0,
                                                            tooltipText: Q
                                                                ? (0, i.jsxs)(i.Fragment, {
                                                                      children: [
                                                                          (0, i.jsx)('img', {
                                                                              alt: null != Z ? tt.intl.string(Z.name) : '',
                                                                              src: null == Z ? void 0 : Z.iconURL,
                                                                              draggable: !1
                                                                          }),
                                                                          (0, i.jsx)(f.Text, {
                                                                              variant: 'text-sm/medium',
                                                                              color: 'always-white',
                                                                              children: tt.intl.string(tt.t.VlC1dX)
                                                                          })
                                                                      ]
                                                                  })
                                                                : tt.intl.string(tt.t.Hapb4O),
                                                            icon: (0, i.jsx)(a, {
                                                                className: tn.buttonChevronIcon,
                                                                size: 'custom',
                                                                width: 12,
                                                                height: 12,
                                                                color: et
                                                            }),
                                                            role: 'button',
                                                            className: tn.buttonChevron,
                                                            orangeGlow: R,
                                                            redGlow: C,
                                                            'aria-label': tt.intl.string(tt.t.Hapb4O),
                                                            disabled: l,
                                                            onClick: (e) => {
                                                                (s(e9.L.INDIRECT_ACTION), n(e), null != I && !q && P ? (0, eR.$)(() => X(!0)) : X(!q));
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
function th(e) {
    let { selfDeaf: t, serverDeaf: n, awaitingRemote: s, onClick: l, onContextMenu: o, iconForeground: c, nameplate: d } = e,
        u = t || n,
        {
            Component: m,
            play: g,
            events: { onMouseEnter: h, onMouseLeave: b }
        } = (0, p.l)(u ? 'undeafen' : 'deafen'),
        x = n ? f.Vm4 : m,
        { analyticsLocations: _ } = (0, A.ZP)(y.Z.AUDIO_OUTPUT_BUTTON);
    r.useEffect(() => () => g(), [u, g]);
    let j = r.useCallback(
        (e) => {
            o(e, _);
        },
        [o, _]
    );
    return (0, i.jsx)(A.Gt, {
        value: _,
        children: (0, i.jsx)(e8.Z, {
            plated: null != d,
            tooltipText: (0, k.Z)(t, n, s),
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
            innerClassName: a()({ [tn.redIcon]: n }),
            iconForeground: u ? tn.strikethrough : void 0,
            role: 'switch',
            redGlow: u,
            'aria-label': tt.intl.string(tt.t.wjcRFR),
            'aria-checked': u,
            disabled: s
        })
    });
}
