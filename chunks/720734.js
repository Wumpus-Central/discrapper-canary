(n.d(t, {
    Z: () => td,
    m: () => to
}),
    n(388685),
    n(539854));
var i = n(255367),
    r = n(73800),
    s = n(120356),
    l = n.n(s),
    a = n(392711),
    o = n.n(a),
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
    E = n(941129),
    j = n(634894),
    O = n(586902),
    C = n(980591),
    S = n(468363),
    v = n(326255),
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
    Y = n(243778),
    W = n(258609),
    K = n(53891),
    q = n(291533),
    X = n(427347),
    Q = n(50697),
    J = n(90042),
    $ = n(78933),
    ee = n(850020),
    et = n(379839),
    en = n(359135),
    ei = n(516817),
    er = n(332473),
    es = n(963590),
    el = n(210308),
    ea = n(667105),
    eo = n(19199),
    ec = n(212704),
    ed = n(14357),
    eu = n(763296),
    em = n(640806),
    ep = n(768419),
    eg = n(184301),
    eh = n(52538),
    ef = n(670188),
    eb = n(321614),
    ex = n(879815),
    e_ = n(294629),
    eE = n(875527),
    ej = n(702977),
    eO = n(56848),
    eC = n(940315),
    eS = n(378441),
    ev = n(358820),
    eT = n(723547),
    eN = n(361045),
    eI = n(74650),
    ey = n(306609),
    eA = n(170293),
    eP = n(8404),
    eR = n(199902),
    eD = n(314897),
    eZ = n(592125),
    ew = n(831506),
    ek = n(819640),
    eL = n(131951),
    eB = n(19780),
    eM = n(914010),
    eU = n(885110),
    eV = n(246946),
    eG = n(594174),
    eF = n(78839),
    eH = n(626135),
    ez = n(768581),
    eY = n(572004),
    eW = n(459273),
    eK = n(585483),
    eq = n(70956),
    eX = n(823379),
    eQ = n(74538),
    eJ = n(374023),
    e$ = n(51144),
    e0 = n(998502),
    e3 = n(578817),
    e1 = n(870569),
    e8 = n(345243),
    e6 = n(115530),
    e2 = n(981631),
    e5 = n(215023),
    e4 = n(921944),
    e7 = n(46140),
    e9 = n(388032),
    te = n(239692);
function tt(e, t, n) {
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
function tn(e) {
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
                tt(e, t, n[t]);
            }));
    }
    return e;
}
function ti(e, t) {
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
let tr = e0.ZP.getEnableHardwareAcceleration() ? f.Xo$ : f.qEK,
    ts = 2 * eq.Z.Millis.MINUTE,
    tl = 3 * eq.Z.Millis.SECOND;
function ta(e) {
    let { ref: t, speaking: n, streaming: s, currentUser: a, status: o, handleClick: c, handleMouseLeave: d, renderNameTag: u, nameplate: m, 'data-jump-section': p } = e,
        g = r.useRef(null),
        h = null != t ? t : g,
        b = (0, P.Z)(null == a ? void 0 : a.avatarDecoration),
        x = (0, ez.NZ)({
            avatarDecoration: b,
            size: (0, R.y9)(f.EFr.SIZE_32)
        }),
        E = (0, f.dQu)(f.TVs.modules.guildbar.AVATAR_SIZE),
        j = (0, G.Z)('Account') ? 32 : E,
        {
            updateOpenPopoutRef: O,
            highlightBadge: S,
            setHighlightBadge: v
        } = (function () {
            let e = r.useRef(null),
                t = r.useCallback((t) => {
                    e.current = () => {
                        (t.onMouseDown(), t.onClick());
                    };
                }, []),
                [n, i] = r.useState(),
                [s, l] = r.useState(!1);
            return (
                (0, C.Z)(() => l(!0), 750),
                r.useEffect(() => {
                    let t = (t) => {
                        var n;
                        let { highlightBadge: r } = t;
                        (null != r && i(r), null == (n = e.current) || n.call(e));
                    };
                    return (
                        eK.S.subscribe(e2.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, t),
                        () => {
                            eK.S.unsubscribe(e2.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, t);
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
    return null == a
        ? null
        : (0, i.jsx)(_.Z, {
              object: e2.qAy.AVATAR,
              children: (0, i.jsx)(ef.Z, {
                  user: a,
                  targetElementRef: h,
                  clickTrap: !0,
                  preload: () =>
                      (0, eg.Z)(a.id, a.getAvatarURL(void 0, ef.I), {
                          type: 'account_popout',
                          withMutualGuilds: !1,
                          withMutualFriends: !1
                      }),
                  renderPopout: (e, t) => {
                      let { closePopout: n, setPopoutRef: r } = e;
                      return (0, i.jsx)($.Z, {
                          currentUser: a,
                          highlightBadge: S,
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
                      (d(), v(void 0));
                  },
                  children: (e) => (
                      O(e),
                      (0, i.jsxs)(
                          f.P3F,
                          ti(
                              tn(
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
                                  'aria-label': e9.intl.string(e9.t['3Uj+2t']),
                                  'data-jump-section': p,
                                  className: l()(te.avatarWrapper, { [te.plated]: null != m }),
                                  children: [
                                      (0, i.jsx)(tr, {
                                          size: f.EFr['SIZE_'.concat(j)],
                                          src: a.getAvatarURL(void 0, j - 4, !1),
                                          avatarDecoration: x,
                                          'aria-label': a.username,
                                          status: s ? e2.Skl.STREAMING : o,
                                          isSpeaking: n,
                                          className: te.avatar
                                      }),
                                      (0, i.jsx)('div', {
                                          className: l()(te.nameTag, { [te.canCopy]: eY.wS }),
                                          children: u()
                                      })
                                  ]
                              }
                          )
                      )
                  )
              })
          });
}
class to extends r.PureComponent {
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
            t = [e9.intl.string(e9.t.MSaeTU), e9.intl.string(e9.t.UmrCw8), e9.intl.string(e9.t.gKE0Ji), e9.intl.string(e9.t['4DSKbm']), e9.intl.string(e9.t['+8ENdX']), e9.intl.string(e9.t.GlWHv7), e9.intl.string(e9.t.hIzxU1), e9.intl.string(e9.t['26uMPD']), e9.intl.string(e9.t.uFs7R0), e9.intl.string(e9.t.bLXdcX), e9.intl.string(e9.t.gPg9fX)],
            n = Math.min(Math.max(0, e - 1), t.length - 1);
        return (0, i.jsx)(f.UkV, {
            isShaking: this.isCopiedStreakGodlike,
            children: t[n]
        });
    }
    renderStatus() {
        let { hovered: e } = this.state,
            { activities: t, applicationStream: n, currentUser: r, status: s, userTag: l, voiceActivityStatusEnabled: a, voiceChannel: o } = this.props;
        if (null == r) return null;
        if (
            (0, v.Z)({
                activities: t,
                status: s,
                applicationStream: n,
                voiceChannel: a ? o : void 0
            })
        )
            return (0, i.jsx)(I.Z, {
                hoverText: l,
                forceHover: e,
                children: (0, i.jsx)(T.Z, {
                    location: 'Account',
                    user: r,
                    activities: t,
                    applicationStream: n,
                    voiceChannel: a ? o : void 0,
                    textClassName: te.activityStatusText,
                    hideTooltip: !0
                })
            });
        let c =
            null == t
                ? void 0
                : t.find((e) => {
                      let { type: t } = e;
                      return t === e2.IIU.CUSTOM_STATUS;
                  });
        return null != c
            ? (0, i.jsx)(I.Z, {
                  hoverText: l,
                  forceHover: e,
                  children: (0, i.jsx)(z.Z, {
                      activity: c,
                      emojiClassName: te.emoji,
                      className: te.customStatus
                  })
              })
            : null != s && s !== e2.Skl.UNKNOWN && r.isPomelo()
              ? (0, i.jsx)(I.Z, {
                    hoverText: l,
                    forceHover: e,
                    children: (0, i.jsx)(N.Z, { text: e$.ZP.humanizeStatus(s) })
                })
              : l;
    }
    renderAvatarWithPopout(e) {
        let {
            focusSectionProps: { 'data-jump-section': t },
            onClick: n
        } = e;
        return (0, i.jsx)(
            ta,
            ti(tn({}, this.props), {
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
            var l;
            return (0, i.jsx)(K.ZP, {
                guildId: null != (l = this.props.selectedGuildId) ? l : null,
                onDismiss: s,
                targetElementRef: this.avatarWithPopoutRef,
                children: () => this.renderAvatarWithPopout({ focusSectionProps: e })
            });
        }
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(el.Z, {
                    groupName: e4.R.ACCOUNT_NAME_ZONE,
                    targetElementRef: this.avatarWithPopoutRef
                }),
                (0, i.jsx)(Y.ZP, {
                    contentTypes: n.avatar,
                    groupName: e4.R.ACCOUNT_NAME_ZONE,
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
                                return (0, i.jsx)(J.Z, {
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
            a = this.state.hovered;
        return null == e
            ? null
            : (0, i.jsx)(f.Wdt, {
                  children: (e) =>
                      (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsxs)('div', {
                                  ref: this.containerRef,
                                  className: l()(te.container, {
                                      [te.containerRtcOpened]: null != n,
                                      [te.containerQuestBarVisible]: !r,
                                      [te.containerListenAlongVisible]: s
                                  }),
                                  onMouseEnter: this.handleMouseEnter,
                                  onMouseLeave: this.handleMouseLeave,
                                  children: [
                                      (0, i.jsx)(ei.Z, {
                                          nameplate: t,
                                          hovered: a,
                                          placement: en.i.ACCOUNT
                                      }),
                                      this.renderNameZone(e),
                                      (0, i.jsx)(
                                          tc,
                                          ti(tn({}, this.props, this.state), {
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
                              (0, i.jsx)(F.Z, {})
                          ]
                      })
              });
    }
    constructor(...e) {
        (super(...e),
            tt(this, 'copiedTimeout', new m.V7()),
            tt(this, 'copiedDecayTimeout', new m.V7()),
            tt(this, 'speakingWhileMutedTooltipTimeout', new m.V7()),
            tt(this, 'lastSpeakingWhileMutedNotificationTime', void 0),
            tt(this, 'state', {
                hovered: !1,
                copiedStreak: 0,
                shouldShowNametagTooltip: !1,
                shouldShowCopiedFeedback: !1,
                shouldShowSpeakingWhileMutedTooltip: !1,
                hoveringOnMute: !1
            }),
            tt(this, 'containerRef', r.createRef()),
            tt(this, 'avatarWithPopoutRef', r.createRef()),
            tt(this, 'handleToggleSelfMute', () => {
                let { serverMute: e, suppress: t, selfMute: n } = this.props;
                ((0, M.Z)(e, t, e2.jXE.ACCOUNT_PANEL), (0, U.v)(y.Z.ACCOUNT, U.d.MIC, n));
            }),
            tt(this, 'handleToggleSelfDeaf', () => {
                let { serverDeaf: e, selfDeaf: t } = this.props;
                ((0, B.Z)(e, e2.jXE.ACCOUNT_PANEL), (0, U.v)(y.Z.ACCOUNT, U.d.DEAFEN, !t));
            }),
            tt(this, 'handleOpenAccountSettings', () => {
                this.handleOpenSettings();
            }),
            tt(this, 'handleOpenSettings', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, e3.Q)('Account').jumpToVoice && eB.Z.isConnected() ? e2.oAB.VOICE : e2.oAB.ACCOUNT,
                    t = arguments.length > 1 ? arguments[1] : void 0,
                    n = arguments.length > 2 ? arguments[2] : void 0;
                x.Z.open(e, t, n);
            }),
            tt(this, 'handleOpenSettingsContextMenu', (e) => {
                let { currentUser: t } = this.props;
                null != t &&
                    (0, b.jW)(e, async () => {
                        let { default: e } = await n.e('2535').then(n.bind(n, 923422));
                        return (n) =>
                            (0, i.jsx)(
                                e,
                                ti(tn({}, n), {
                                    user: t,
                                    premiumSubscription: this.props.premiumSubscription,
                                    webBuildOverride: this.props.webBuildOverride,
                                    onInteraction: (0, V.u)('UserSettingsCogContextMenu', y.Z.ACCOUNT)
                                })
                            );
                    });
            }),
            tt(this, 'audioOnInteractionHandler', (0, V.u)('AudioDeviceMenu', y.Z.ACCOUNT)),
            tt(this, 'handleInputAudioContextMenu', (e, t) => {
                (0, b.jW)(e, async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 659580));
                    return () => {
                        let { enabledInputProfiles: n } = (0, eb.c)({ location: 'Account' });
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
            tt(this, 'handleOutputAudioContextMenu', (e, t) => {
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
            tt(this, 'handleMouseEnter', () => {
                this.setState({ hovered: !0 });
            }),
            tt(this, 'handleMouseLeave', () => {
                this.setState({ hovered: !1 });
            }),
            tt(this, 'handleMouseEnterMute', () => {
                (this.setState({
                    hoveringOnMute: !0,
                    shouldShowSpeakingWhileMutedTooltip: !1
                }),
                    this.speakingWhileMutedTooltipTimeout.stop());
            }),
            tt(this, 'handleMouseLeaveMute', () => {
                this.setState({ hoveringOnMute: !1 });
            }),
            tt(this, 'handleCopyTag', () => {
                let { currentUser: e } = this.props,
                    { shouldShowNametagTooltip: t, copiedStreak: n } = this.state;
                if (null == e) return;
                ((0, eY.JG)(
                    e$.ZP.getUserTag(e, {
                        decoration: 'never',
                        identifiable: 'always'
                    })
                ),
                    eH.default.track(e2.rMx.TEXT_COPIED, { type: 'User Tag' }));
                let i = {
                    shouldShowCopiedFeedback: !0,
                    shouldShowNametagTooltip: !0
                };
                (t || (i.copiedStreak = n + 1),
                    this.setState(i, () => {
                        (this.copiedTimeout.start(1000, () => this.setState({ shouldShowNametagTooltip: !1 })), this.copiedDecayTimeout.start(2000, () => this.setState({ copiedStreak: 0 })));
                    }));
            }),
            tt(this, 'handleOccludedChanged', () => {
                let { occluded: e } = this.props;
                e &&
                    this.setState({
                        shouldShowNametagTooltip: !1,
                        shouldShowSpeakingWhileMutedTooltip: !1
                    });
            }),
            tt(this, 'handleSpeakingWhileMutedChanged', () => {
                let { selfMute: e, serverMute: t, suppress: n, speakingWhileMuted: i, occluded: r } = this.props,
                    { hoveringOnMute: s } = this.state,
                    l = void 0 === this.lastSpeakingWhileMutedNotificationTime || Date.now() - this.lastSpeakingWhileMutedNotificationTime > ts;
                i
                    ? s ||
                      !e ||
                      t ||
                      n ||
                      r ||
                      !l ||
                      this.setState({ shouldShowSpeakingWhileMutedTooltip: !0 }, () => {
                          ((this.lastSpeakingWhileMutedNotificationTime = Date.now()), this.speakingWhileMutedTooltipTimeout.start(2000, () => this.setState({ shouldShowSpeakingWhileMutedTooltip: !1 })));
                      })
                    : (this.setState({ shouldShowSpeakingWhileMutedTooltip: !1 }), this.speakingWhileMutedTooltipTimeout.stop());
            }),
            tt(this, 'renderNameTag', () => {
                let { currentUser: e } = this.props;
                return null == e
                    ? null
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)('div', {
                                  className: te.panelTitleContainer,
                                  children: (0, i.jsx)(e6.Z, { children: e$.ZP.getName(e) })
                              }),
                              (0, i.jsx)('div', {
                                  className: te.panelSubtextContainer,
                                  children: (0, i.jsx)(e8.Z, { children: this.renderStatus() })
                              })
                          ]
                      });
            }));
    }
}
function tc(e) {
    let { selfDeaf: t, selfMute: n, awaitingRemote: r, serverMute: s, serverDeaf: l, suppress: a, shouldShowSpeakingWhileMutedTooltip: o, isEligibleForPomelo: c, webBuildOverride: d, handleMouseEnterMute: u, handleMouseLeaveMute: m, handleToggleSelfDeaf: p, handleToggleSelfMute: g, handleInputAudioContextMenu: h, handleOutputAudioContextMenu: b, handleOpenAccountSettings: x, handleOpenSettingsContextMenu: _, dismissibleContents: E, nameplate: j, accountContainerRef: O } = e,
        C = (0, et.A)(j);
    return (0, i.jsxs)('div', {
        className: te.buttons,
        style: C,
        children: [
            (0, i.jsx)(tm, {
                accountContainerRef: O,
                selfMute: n,
                serverMute: s,
                suppress: a,
                awaitingRemote: r,
                tooltipText: o ? e9.intl.string(e9.t['29gnR0']) : void 0,
                tooltipColor: o ? f.FGA.GREEN : void 0,
                tooltipForceOpen: o || void 0,
                onMouseEnter: u,
                onMouseLeave: m,
                onClick: g,
                onContextMenu: h,
                iconForeground: null != j ? te.iconForeground : void 0,
                nameplate: j
            }),
            (0, i.jsx)(tp, {
                selfDeaf: t,
                serverDeaf: l,
                onClick: p,
                onContextMenu: b,
                awaitingRemote: r,
                iconForeground: null != j ? te.iconForeground : void 0,
                nameplate: j
            }),
            (0, i.jsx)(tu, {
                isEligibleForPomelo: c,
                webBuildOverride: d,
                onClick: x,
                onContextMenu: _,
                dismissibleContents: E.settings,
                iconForeground: null != j ? te.iconForeground : void 0,
                nameplate: j
            })
        ]
    });
}
function td() {
    var e;
    let t = (0, d.e7)([eG.default], () => eG.default.getCurrentUser()),
        n = (0, d.e7)([eD.default], () => eD.default.getId()),
        {
            activities: r,
            streaming: s,
            status: l
        } = (0, d.cj)([eU.Z], () => {
            let e = eU.Z.getActivities();
            return {
                activities: e,
                streaming:
                    null !=
                    e.find((e) => {
                        let { type: t } = e;
                        return t === e2.IIU.STREAMING;
                    }),
                status: eU.Z.getStatus()
            };
        }),
        a = (0, d.e7)([eR.Z], () => eR.Z.getAnyStreamForUser(n)),
        c = (0, O.Z)({ userId: n }),
        m = e$.ZP.useUserTag(t, { decoration: 'never' }),
        p = (0, d.e7)([eV.Z], () => eV.Z.hidePersonalInformation),
        g = (0, d.e7)([eB.Z, eZ.Z], () => {
            let e = eB.Z.getChannelId();
            return null != e ? eZ.Z.getChannel(e) : null;
        }),
        { mute: h, selfMute: b, suppress: x } = (0, e_.Z)(g),
        { selfDeaf: _, deaf: C } = (0, ex.Z)(g),
        v = (0, d.e7)([D.C], () => {
            var e;
            return (0, Z.fD)() ? (null == (e = D.C.getCurrentBuildOverride().overrides) ? void 0 : e.discord_web) : null;
        }),
        T = (0, d.e7)([eF.Z], () => eF.Z.getPremiumTypeSubscription()),
        N = (0, d.e7)([eL.Z], () => eL.Z.getSpeakingWhileMuted()),
        I = (0, d.e7)([w.Z], () => w.Z.isFullscreenInContext()),
        P = (0, d.e7)([ek.Z], () => ek.Z.hasLayers()),
        R = (0, f.s9z)(f.JQI) || P || eJ.s.isDisallowPopupsSet() || I,
        k = (0, er.b)(),
        L = (0, d.e7)([W.Z], () => null != W.Z.getAwaitingRemoteSessionInfo()),
        B = (0, d.e7)([eM.Z], () => eM.Z.getGuildId()),
        M = (0, eo.D)(),
        U = (0, E.u)(),
        V = eQ.ZP.canUsePremiumGuildMemberProfile(t),
        G = (null == t || null == (e = t.avatarDecoration) ? void 0 : e.skuId) === e5.rL,
        { voiceActivityStatusEnabled: F } = (0, S.U)({ location: 'Account' }),
        H = (0, Q.m)(),
        [z, Y] = (0, q.G)(null != B ? B : null),
        K = 'account';
    ((0, j.j)({
        location: K + ' auto on',
        autoTrackExposure: !0
    }),
        (0, j.j)({
            location: K + ' auto off',
            autoTrackExposure: !1
        }));
    let X = (0, d.e7)([eu.Z], () => eu.Z.hasHadOtherUserPlaySoundInSession()),
        { analyticsLocations: J } = (0, A.ZP)(y.Z.ACCOUNT),
        $ = (0, ee.K)({ user: t }),
        et = (0, ea.Ws)({ location: e7.dr.CONFLICT_CHECKS }),
        en = (0, d.e7)([ep.Z, eG.default, ew.Z], () => {
            let e,
                t = ep.Z.getSyncingWith(),
                n = ep.Z.getActivity(),
                i = [];
            if ((null != t ? (e = t.partyId) : null != n && null != n.party && null != n.party.id && (e = n.party.id), null != e)) {
                var r;
                i = o()(Array.from(null != (r = ew.Z.getParty(e)) ? r : []))
                    .map((e) => eG.default.getUser(e))
                    .filter(eX.lm)
                    .value();
            }
            return i.length > 1;
        }),
        ei = {
            avatar: [],
            settings: []
        };
    return (
        !R && (M && (1 === U ? ei.settings.push(u.z.USER_SAFETY_CONSUMER_EDUCATION_MUTE) : ei.settings.push(u.z.USER_SAFETY_CONSUMER_EDUCATION_BLOCK)), X && ei.settings.push(u.z.SOUNDBOARD_VOLUME_EDUCATION), V && ei.settings.push(u.z.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK), G && ei.avatar.push(u.z.PREMIUM_SUBSCRIPTION_APRIL_MARKETING_DECO_TOOLTIP), H && ei.avatar.push(u.z.EXPIRING_STATUS_COACHMARK)),
        (0, i.jsx)(A.Gt, {
            value: J,
            children: (0, i.jsx)(to, {
                currentUser: t,
                activities: r,
                applicationStream: a,
                voiceChannel: g,
                dismissibleContents: ei,
                visibleRecurringAvatarDc: z,
                markRecurringAvatarDcAsDismissed: Y,
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
                status: l,
                streaming: s,
                suppress: x,
                webBuildOverride: v,
                awaitingRemote: L,
                isEligibleForPomelo: k,
                voiceActivityStatusEnabled: F,
                nameplate: $,
                selectedGuildId: B,
                isQuestBarEmpty: et,
                isListenAlongVisible: en
            })
        })
    );
}
function tu(e) {
    let { webBuildOverride: t, isEligibleForPomelo: n, onClick: s, onContextMenu: l, dismissibleContents: a, iconForeground: o, nameplate: c } = e,
        d = r.useRef(null),
        m = f.ewm,
        p = (0, g.i)();
    m = null != t ? f.bgT : n ? f.Ncx : p.Component;
    let [h, b] = (0, Y.US)(a);
    return (0, i.jsx)(f.yRy, {
        targetElementRef: d,
        position: 'top',
        align: 'center',
        shouldShow: null != h,
        renderPopout: h === u.z.USER_SAFETY_CONSUMER_EDUCATION_BLOCK ? () => (0, i.jsx)(ec.Z, { markAsDismissed: b }) : h === u.z.USER_SAFETY_CONSUMER_EDUCATION_MUTE ? () => (0, i.jsx)(ed.Z, { markAsDismissed: b }) : h === u.z.SOUNDBOARD_VOLUME_EDUCATION ? () => (0, i.jsx)(em.Z, { markAsDismissed: b }) : h === u.z.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK ? () => (0, i.jsx)(eh.Z, {}) : () => (0, i.jsx)(i.Fragment, {}),
        children: () =>
            (0, i.jsx)(
                e1.Z,
                ti(
                    tn(
                        {
                            ref: d,
                            tooltipText: null != t ? e9.intl.formatToPlainString(e9.t.Gzh6ZG, { webBuildOverride: t.id }) : e9.intl.string(e9.t.cduTBA),
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
                    { plated: null != c }
                )
            )
    });
}
function tm(e) {
    let { selfMute: t, serverMute: n, suppress: s, awaitingRemote: a, tooltipText: o, tooltipColor: m, tooltipForceOpen: p, iconForeground: g, onMouseEnter: b, onMouseLeave: x, onClick: _, onContextMenu: E, nameplate: j, accountContainerRef: O } = e,
        C = t || s || n,
        S = r.useRef(null),
        v = r.useRef(null),
        T = (0, eP.b)(C),
        { activeVoice: N, mostRecentlyRequestedVoiceId: I, lastInitAttemptMayHaveCrashed: P } = (0, eS.o)(),
        { showSilentLagWarning: R } = (0, eC.Y)(),
        D = null != N,
        Z = (0, eO.z)(N),
        w = (0, d.e7)([eB.Z], () => eB.Z.isConnected()),
        { Component: k, events: B, play: M } = T,
        U = n || s ? f.v0G : k,
        V = R ? e9.intl.string(e9.t.ARRV6u) : null,
        G = (0, L.Z)(t, n, s, a),
        F =
            null != o
                ? o
                : null != V
                  ? (0, i.jsxs)('div', {
                        className: te.tooltipWithSubtext,
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
        z = (0, eE.Hu)({
            location: y.Z.AUDIO_INPUT_BUTTON,
            autoTrackExposure: !0
        }),
        W = (0, ej.av)({
            location: y.Z.AUDIO_INPUT_BUTTON,
            autoTrackExposure: !0
        });
    r.useEffect(() => () => M(), [C, M]);
    let K = r.useCallback(
            (e) => {
                E(e, H);
            },
            [E, H]
        ),
        [q, X] = r.useState(!1),
        Q = r.useCallback((e) => {
            var t;
            if ((0, c.k)(null == e ? void 0 : e.target, Node) && (null == (t = S.current) ? void 0 : t.contains(e.target))) return h.F;
            X(!1);
        }, []);
    (0, eW.yp)({
        event: e2.CkL.OPEN_VOICE_FILTER_POPOUT,
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
                    ($(!0), (e = setTimeout(() => $(!1), tl)));
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
        ei = (0, es.Z)({ location: 'Account' });
    return (0, i.jsx)(A.Gt, {
        value: H,
        children: (0, i.jsxs)('div', {
            ref: S,
            className: l()(te.micButtonParent, { [te.hasColorGlow]: en }),
            children: [
                (0, i.jsx)(e1.Z, {
                    tooltipText: F,
                    tooltipColor: m,
                    tooltipForceOpen: p,
                    plated: null != j,
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
                    className: l()({ [te.micButtonWithMenu]: z }),
                    orangeGlow: R,
                    redGlow: C,
                    'aria-label': e9.intl.string(e9.t['w4m94+']),
                    'aria-checked': C,
                    disabled: a
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
                        onRequestClose: Q,
                        shouldShow: q,
                        renderPopout: (e) => {
                            let { closePopout: t } = e;
                            return (0, i.jsx)(ey.l, { onSettingsButtonClick: t });
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
                            let l = s ? f.u04 : f.CJ0,
                                o = [];
                            return (
                                !s && (ei && o.push(u.z.VOICE_FILTER_EARLY_ACCESS_COACHMARK), o.push(u.z.VOICE_FILTER_LAUNCH_COACHMARK), W && w && !D && o.push(u.z.VOICE_FILTER_FIRST_USE_COACHMARK)),
                                (0, i.jsx)('div', {
                                    children: (0, i.jsx)(Y.ZP, {
                                        bypassAutoDismiss: !0,
                                        contentTypes: o,
                                        children: (e) => {
                                            let { visibleContent: t, markAsDismissed: s } = e,
                                                o = null;
                                            t === u.z.VOICE_FILTER_EARLY_ACCESS_COACHMARK
                                                ? (o = (0, i.jsx)(eI.U, {
                                                      markAsDismissed: s,
                                                      onCTA: () => X(!0)
                                                  }))
                                                : t === u.z.VOICE_FILTER_LAUNCH_COACHMARK
                                                  ? (o = (0, i.jsx)(eN.n, {
                                                        markAsDismissed: s,
                                                        onCTA: () => X(!0)
                                                    }))
                                                  : t === u.z.VOICE_FILTER_FIRST_USE_COACHMARK &&
                                                    (o = (0, i.jsx)(eT.v, {
                                                        markAsDismissed: s,
                                                        onCTA: () => X(!0)
                                                    }));
                                            let c = () =>
                                                (0, i.jsx)(
                                                    e1.Z,
                                                    tn(
                                                        {
                                                            ref: v,
                                                            plated: null != j,
                                                            tooltipForceOpen: J,
                                                            tooltipColor: J ? f.FGA.GREEN : void 0,
                                                            tooltipContentClassName: J ? te.voiceFilterWarning : void 0,
                                                            tooltipText: J
                                                                ? (0, i.jsxs)(i.Fragment, {
                                                                      children: [
                                                                          (0, i.jsx)('img', {
                                                                              alt: null != Z ? e9.intl.string(Z.name) : '',
                                                                              src: null == Z ? void 0 : Z.iconURL,
                                                                              draggable: !1
                                                                          }),
                                                                          (0, i.jsx)(f.Text, {
                                                                              variant: 'text-sm/medium',
                                                                              color: 'always-white',
                                                                              children: e9.intl.string(e9.t.VlC1dX)
                                                                          })
                                                                      ]
                                                                  })
                                                                : e9.intl.string(e9.t.Hapb4O),
                                                            icon: (0, i.jsx)(l, {
                                                                className: te.buttonChevronIcon,
                                                                size: 'custom',
                                                                width: 12,
                                                                height: 12,
                                                                color: et
                                                            }),
                                                            role: 'button',
                                                            className: te.buttonChevron,
                                                            orangeGlow: R,
                                                            redGlow: C,
                                                            'aria-label': e9.intl.string(e9.t.Hapb4O),
                                                            disabled: a,
                                                            onClick: (e) => {
                                                                (s(e4.L.INDIRECT_ACTION), n(e), null != I && !q && P ? (0, eA.$)(() => X(!0)) : X(!q));
                                                            }
                                                        },
                                                        r
                                                    )
                                                );
                                            return null != o
                                                ? (0, i.jsx)(f.yRy, {
                                                      targetElementRef: v,
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
function tp(e) {
    let { selfDeaf: t, serverDeaf: n, awaitingRemote: s, onClick: a, onContextMenu: o, iconForeground: c, nameplate: d } = e,
        u = t || n,
        {
            Component: m,
            play: g,
            events: { onMouseEnter: h, onMouseLeave: b }
        } = (0, p.l)(u ? 'undeafen' : 'deafen'),
        x = n ? f.Vm4 : m,
        { analyticsLocations: _ } = (0, A.ZP)(y.Z.AUDIO_OUTPUT_BUTTON);
    r.useEffect(() => () => g(), [u, g]);
    let E = r.useCallback(
        (e) => {
            o(e, _);
        },
        [o, _]
    );
    return (0, i.jsx)(A.Gt, {
        value: _,
        children: (0, i.jsx)(e1.Z, {
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
            onClick: a,
            onContextMenu: E,
            innerClassName: l()({ [te.redIcon]: n }),
            iconForeground: u ? te.strikethrough : void 0,
            role: 'switch',
            redGlow: u,
            'aria-label': e9.intl.string(e9.t.wjcRFR),
            'aria-checked': u,
            disabled: s
        })
    });
}
