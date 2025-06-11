n.d(t, {
    Z: () => tm,
    m: () => td
}),
    n(388685),
    n(539854);
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
    g = n(400354),
    p = n(789639),
    h = n(930295),
    f = n(481060),
    b = n(239091),
    _ = n(230711),
    x = n(410575),
    E = n(941129),
    j = n(634894),
    C = n(586902),
    O = n(980591),
    S = n(468363),
    v = n(326255),
    T = n(771173),
    I = n(963056),
    N = n(570928),
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
    z = n(359588),
    Y = n(459115),
    W = n(427217),
    K = n(132750),
    q = n(526031),
    X = n(540059),
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
    ed = n(210308),
    eu = n(667105),
    em = n(19199),
    eg = n(212704),
    ep = n(14357),
    eh = n(763296),
    ef = n(640806),
    eb = n(768419),
    e_ = n(184301),
    ex = n(52538),
    eE = n(670188),
    ej = n(321614),
    eC = n(879815),
    eO = n(294629),
    eS = n(875527),
    ev = n(702977),
    eT = n(56848),
    eI = n(940315),
    eN = n(378441),
    ey = n(358820),
    eA = n(723547),
    eP = n(361045),
    eR = n(306609),
    eD = n(170293),
    eZ = n(8404),
    ew = n(199902),
    ek = n(314897),
    eL = n(592125),
    eB = n(831506),
    eM = n(819640),
    eU = n(131951),
    eV = n(19780),
    eG = n(914010),
    eF = n(885110),
    eH = n(246946),
    ez = n(594174),
    eY = n(78839),
    eW = n(626135),
    eK = n(768581),
    eq = n(572004),
    eX = n(459273),
    eQ = n(585483),
    eJ = n(70956),
    e$ = n(823379),
    e0 = n(74538),
    e1 = n(374023),
    e3 = n(51144),
    e8 = n(998502),
    e6 = n(870569),
    e2 = n(345243),
    e5 = n(115530),
    e4 = n(981631),
    e7 = n(215023),
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
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                ti(e, t, n[t]);
            });
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
let tl = e8.ZP.getEnableHardwareAcceleration() ? f.Xo$ : f.qEK,
    ta = 2 * eJ.Z.Millis.MINUTE,
    to = 3 * eJ.Z.Millis.SECOND;
function tc(e) {
    let { ref: t, speaking: n, streaming: s, currentUser: a, status: o, handleClick: c, handleMouseLeave: d, renderNameTag: u, nameplate: m, 'data-jump-section': g } = e,
        p = r.useRef(null),
        h = null != t ? t : p,
        b = (0, X.Q3)('RTC Avatar'),
        _ = (0, P.Z)(null == a ? void 0 : a.avatarDecoration),
        E = (0, eK.NZ)({
            avatarDecoration: _,
            size: (0, R.y9)(f.EFr.SIZE_32)
        }),
        j = (0, f.dQu)(f.TVs.modules.guildbar.AVATAR_SIZE),
        C = (0, G.Z)('Account') ? 32 : j,
        {
            updateOpenPopoutRef: S,
            highlightBadge: v,
            setHighlightBadge: T
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
                (0, O.Z)(() => l(!0), 750),
                r.useEffect(() => {
                    let t = (t) => {
                        var n;
                        let { highlightBadge: r } = t;
                        null != r && i(r), null == (n = e.current) || n.call(e);
                    };
                    return (
                        eQ.S.subscribe(e4.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, t),
                        () => {
                            eQ.S.unsubscribe(e4.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, t);
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
        I = (0, el.A)(m);
    return null == a
        ? null
        : (0, i.jsx)(x.Z, {
              object: e4.qAy.AVATAR,
              children: (0, i.jsx)(eE.Z, {
                  user: a,
                  targetElementRef: h,
                  clickTrap: !0,
                  preload: () =>
                      (0, e_.Z)(a.id, a.getAvatarURL(void 0, eE.I), {
                          type: 'account_popout',
                          withMutualGuilds: !1,
                          withMutualFriends: !1
                      }),
                  renderPopout: (e, t) => {
                      let { closePopout: n, setPopoutRef: r } = e;
                      return (0, i.jsx)(er.Z, {
                          currentUser: a,
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
                  onRequestClose: () => {
                      d(), T(void 0);
                  },
                  children: (e) => (
                      S(e),
                      (0, i.jsxs)(
                          f.P3F,
                          ts(
                              tr(
                                  {
                                      innerRef: h,
                                      style: I
                                  },
                                  e
                              ),
                              {
                                  onClick: (t) => {
                                      var n;
                                      null == (n = e.onClick) || n.call(e, t), null == c || c(t);
                                  },
                                  'aria-label': tt.intl.string(tt.t['3Uj+2t']),
                                  'data-jump-section': b ? g : void 0,
                                  className: l()(tn.avatarWrapper, !b && tn.experiment, { [tn.plated]: null != m }),
                                  children: [
                                      (0, i.jsx)(tl, {
                                          size: b ? f.EFr['SIZE_'.concat(C)] : f.EFr.SIZE_32,
                                          src: a.getAvatarURL(void 0, b ? C - 4 : 32, !1),
                                          avatarDecoration: E,
                                          'aria-label': a.username,
                                          status: s ? e4.Skl.STREAMING : o,
                                          isSpeaking: n,
                                          className: tn.avatar
                                      }),
                                      (0, i.jsx)('div', {
                                          className: l()(tn.nameTag, { [tn.canCopy]: eq.wS }),
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
class td extends r.PureComponent {
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
            t = [tt.intl.string(tt.t.MSaeTU), tt.intl.string(tt.t.UmrCw8), tt.intl.string(tt.t.gKE0Ji), tt.intl.string(tt.t['4DSKbm']), tt.intl.string(tt.t['+8ENdX']), tt.intl.string(tt.t.GlWHv7), tt.intl.string(tt.t.hIzxU1), tt.intl.string(tt.t['26uMPD']), tt.intl.string(tt.t.uFs7R0), tt.intl.string(tt.t.bLXdcX), tt.intl.string(tt.t.gPg9fX)],
            n = Math.min(Math.max(0, e - 1), t.length - 1);
        return (0, i.jsx)(f.UkV, {
            isShaking: this.isCopiedStreakGodlike,
            children: t[n]
        });
    }
    renderStatus() {
        let { hovered: e } = this.state,
            { activities: t, applicationStream: n, currentUser: r, status: s, userTag: l, voiceActivityStatusEnabled: a, voiceChannel: o, customStatusRTCEntrypointEnabled: c, customStatusHoverOnlyRTCEntrypointEnabled: d } = this.props;
        if (null == r) return null;
        if (c || d)
            return (0, i.jsx)(K.Z, {
                user: r,
                applicationStream: n,
                voiceChannel: a ? o : void 0,
                activities: t,
                hovered: e,
                status: s,
                userTag: l,
                customStatusHoverOnlyRTCEntrypointEnabled: d
            });
        if (
            (0, v.Z)({
                activities: t,
                status: s,
                applicationStream: n,
                voiceChannel: a ? o : void 0
            })
        )
            return (0, i.jsx)(N.Z, {
                hoverText: l,
                forceHover: e,
                children: (0, i.jsx)(T.Z, {
                    location: 'Account',
                    user: r,
                    activities: t,
                    applicationStream: n,
                    voiceChannel: a ? o : void 0,
                    textClassName: tn.activityStatusText,
                    hideTooltip: !0
                })
            });
        let u =
            null == t
                ? void 0
                : t.find((e) => {
                      let { type: t } = e;
                      return t === e4.IIU.CUSTOM_STATUS;
                  });
        return null != u
            ? (0, i.jsx)(N.Z, {
                  hoverText: l,
                  forceHover: e,
                  children: (0, i.jsx)(W.Z, {
                      activity: u,
                      emojiClassName: tn.emoji,
                      className: tn.customStatus
                  })
              })
            : null != s && s !== e4.Skl.UNKNOWN && r.isPomelo()
              ? (0, i.jsx)(N.Z, {
                    hoverText: l,
                    forceHover: e,
                    children: (0, i.jsx)(I.Z, { text: e3.ZP.humanizeStatus(s) })
                })
              : l;
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
            var l;
            return (0, i.jsx)($.ZP, {
                guildId: null != (l = this.props.selectedGuildId) ? l : null,
                onDismiss: s,
                targetElementRef: this.avatarWithPopoutRef,
                children: () => this.renderAvatarWithPopout({ focusSectionProps: e })
            });
        }
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(ed.Z, {
                    groupName: e9.R.ACCOUNT_NAME_ZONE,
                    targetElementRef: this.avatarWithPopoutRef
                }),
                (0, i.jsx)(Q.ZP, {
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
                                return (0, i.jsx)(ei.Z, {
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
                            case u.z.CUSTOM_STATUS_PROMPTS_COACHMARK:
                                return (0, i.jsx)(q.Z, {
                                    markAsDismissed: r,
                                    targetElementRef: this.avatarWithPopoutRef,
                                    children: () => this.renderAvatarWithPopout({ focusSectionProps: e })
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
                                  className: l()(tn.container, {
                                      [tn.containerRtcOpened]: null != n,
                                      [tn.containerQuestBarVisible]: !r,
                                      [tn.containerListenAlongVisible]: s
                                  }),
                                  onMouseEnter: this.handleMouseEnter,
                                  onMouseLeave: this.handleMouseLeave,
                                  children: [
                                      (0, i.jsx)(eo.Z, {
                                          nameplate: t,
                                          hovered: a,
                                          placement: ea.i.ACCOUNT
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
                              (0, i.jsx)(et.Z, {}),
                              (0, i.jsx)(F.Z, {})
                          ]
                      })
              });
    }
    constructor(...e) {
        super(...e),
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
                (0, M.Z)(e, t, e4.jXE.ACCOUNT_PANEL), (0, U.v)(y.Z.ACCOUNT, U.d.MIC, n);
            }),
            ti(this, 'handleToggleSelfDeaf', () => {
                let { serverDeaf: e, selfDeaf: t } = this.props;
                (0, B.Z)(e, e4.jXE.ACCOUNT_PANEL), (0, U.v)(y.Z.ACCOUNT, U.d.DEAFEN, !t);
            }),
            ti(this, 'handleOpenAccountSettings', () => {
                this.handleOpenSettings();
            }),
            ti(this, 'handleOpenSettings', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e4.oAB.ACCOUNT,
                    t = arguments.length > 1 ? arguments[1] : void 0,
                    n = arguments.length > 2 ? arguments[2] : void 0;
                _.Z.open(e, t, n);
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
                        let { enabledInputProfiles: n } = (0, ej.c)({ location: 'Account' });
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
                this.setState({
                    hoveringOnMute: !0,
                    shouldShowSpeakingWhileMutedTooltip: !1
                }),
                    this.speakingWhileMutedTooltipTimeout.stop();
            }),
            ti(this, 'handleMouseLeaveMute', () => {
                this.setState({ hoveringOnMute: !1 });
            }),
            ti(this, 'handleCopyTag', () => {
                let { currentUser: e } = this.props,
                    { shouldShowNametagTooltip: t, copiedStreak: n } = this.state;
                if (null == e) return;
                (0, eq.JG)(
                    e3.ZP.getUserTag(e, {
                        decoration: 'never',
                        identifiable: 'always'
                    })
                ),
                    eW.default.track(e4.rMx.TEXT_COPIED, { type: 'User Tag' });
                let i = {
                    shouldShowCopiedFeedback: !0,
                    shouldShowNametagTooltip: !0
                };
                t || (i.copiedStreak = n + 1),
                    this.setState(i, () => {
                        this.copiedTimeout.start(1000, () => this.setState({ shouldShowNametagTooltip: !1 })), this.copiedDecayTimeout.start(2000, () => this.setState({ copiedStreak: 0 }));
                    });
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
                    l = void 0 === this.lastSpeakingWhileMutedNotificationTime || Date.now() - this.lastSpeakingWhileMutedNotificationTime > ta;
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
            ti(this, 'renderNameTag', () => {
                let { currentUser: e } = this.props;
                return null == e
                    ? null
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)('div', {
                                  className: tn.panelTitleContainer,
                                  children: (0, i.jsx)(e5.Z, { children: e3.ZP.getName(e) })
                              }),
                              (0, i.jsx)('div', {
                                  className: tn.panelSubtextContainer,
                                  children: (0, i.jsx)(e2.Z, { children: this.renderStatus() })
                              })
                          ]
                      });
            });
    }
}
function tu(e) {
    let { selfDeaf: t, selfMute: n, awaitingRemote: r, serverMute: s, serverDeaf: l, suppress: a, shouldShowSpeakingWhileMutedTooltip: o, isEligibleForPomelo: c, webBuildOverride: d, handleMouseEnterMute: u, handleMouseLeaveMute: m, handleToggleSelfDeaf: g, handleToggleSelfMute: p, handleInputAudioContextMenu: h, handleOutputAudioContextMenu: b, handleOpenAccountSettings: _, handleOpenSettingsContextMenu: x, dismissibleContents: E, nameplate: j, accountContainerRef: C } = e,
        O = (0, el.A)(j);
    return (0, i.jsxs)('div', {
        className: tn.buttons,
        style: O,
        children: [
            (0, i.jsx)(tp, {
                accountContainerRef: C,
                selfMute: n,
                serverMute: s,
                suppress: a,
                awaitingRemote: r,
                tooltipText: o ? tt.intl.string(tt.t['29gnR0']) : void 0,
                tooltipColor: o ? f.FGA.GREEN : void 0,
                tooltipForceOpen: o || void 0,
                onMouseEnter: u,
                onMouseLeave: m,
                onClick: p,
                onContextMenu: h,
                iconForeground: null != j ? tn.iconForeground : void 0,
                nameplate: j
            }),
            (0, i.jsx)(th, {
                selfDeaf: t,
                serverDeaf: l,
                onClick: g,
                onContextMenu: b,
                awaitingRemote: r,
                iconForeground: null != j ? tn.iconForeground : void 0,
                nameplate: j
            }),
            (0, i.jsx)(tg, {
                isEligibleForPomelo: c,
                webBuildOverride: d,
                onClick: _,
                onContextMenu: x,
                dismissibleContents: E.settings,
                iconForeground: null != j ? tn.iconForeground : void 0,
                nameplate: j
            })
        ]
    });
}
function tm() {
    var e;
    let t = (0, d.e7)([ez.default], () => ez.default.getCurrentUser()),
        n = (0, d.e7)([ek.default], () => ek.default.getId()),
        {
            activities: r,
            streaming: s,
            status: l
        } = (0, d.cj)([eF.Z], () => {
            let e = eF.Z.getActivities();
            return {
                activities: e,
                streaming:
                    null !=
                    e.find((e) => {
                        let { type: t } = e;
                        return t === e4.IIU.STREAMING;
                    }),
                status: eF.Z.getStatus()
            };
        }),
        a = (0, d.e7)([ew.Z], () => ew.Z.getAnyStreamForUser(n)),
        c = (0, C.Z)({ userId: n }),
        m = e3.ZP.useUserTag(t, { decoration: 'never' }),
        g = (0, d.e7)([eH.Z], () => eH.Z.hidePersonalInformation),
        p = (0, d.e7)([eV.Z, eL.Z], () => {
            let e = eV.Z.getChannelId();
            return null != e ? eL.Z.getChannel(e) : null;
        }),
        { mute: h, selfMute: b, suppress: _ } = (0, eO.Z)(p),
        { selfDeaf: x, deaf: O } = (0, eC.Z)(p),
        v = (0, d.e7)([D.C], () => {
            var e;
            return (0, Z.fD)() ? (null == (e = D.C.getCurrentBuildOverride().overrides) ? void 0 : e.discord_web) : null;
        }),
        T = (0, d.e7)([eY.ZP], () => eY.ZP.getPremiumTypeSubscription()),
        I = (0, d.e7)([eU.Z], () => eU.Z.getSpeakingWhileMuted()),
        N = (0, d.e7)([w.Z], () => w.Z.isFullscreenInContext()),
        P = (0, d.e7)([eM.Z], () => eM.Z.hasLayers()),
        R = (0, f.s9z)(f.JQI) || P || e1.s.isDisallowPopupsSet() || N,
        k = (0, ec.b)(),
        L = (0, d.e7)([J.Z], () => null != J.Z.getAwaitingRemoteSessionInfo()),
        B = (0, d.e7)([eG.Z], () => eG.Z.getGuildId()),
        M = (0, em.D)(),
        U = (0, E.u)(),
        V = e0.ZP.canUsePremiumGuildMemberProfile(t),
        G = (null == t || null == (e = t.avatarDecoration) ? void 0 : e.skuId) === e7.rL,
        { voiceActivityStatusEnabled: F } = (0, S.U)({ location: 'Account' }),
        H = (0, en.m)(),
        [W, K] = (0, ee.G)(null != B ? B : null),
        { customStatusRTCEntrypointEnabled: q, customStatusHoverOnlyRTCEntrypointEnabled: X } = (0, Y.Z)({ location: 'Account' }),
        Q = 'account';
    (0, j.j)({
        location: Q + ' auto on',
        autoTrackExposure: !0
    }),
        (0, j.j)({
            location: Q + ' auto off',
            autoTrackExposure: !1
        });
    let $ = (0, d.e7)([eh.Z], () => eh.Z.hasHadOtherUserPlaySoundInSession()),
        { analyticsLocations: et } = (0, A.ZP)(y.Z.ACCOUNT),
        ei = (0, es.K)({ user: t }),
        er = (0, eu.Ws)({ location: te.dr.CONFLICT_CHECKS }),
        el = (0, d.e7)([eb.Z, ez.default, eB.Z], () => {
            let e,
                t = eb.Z.getSyncingWith(),
                n = eb.Z.getActivity(),
                i = [];
            if ((null != t ? (e = t.partyId) : null != n && null != n.party && null != n.party.id && (e = n.party.id), null != e)) {
                var r;
                i = o()(Array.from(null != (r = eB.Z.getParty(e)) ? r : []))
                    .map((e) => ez.default.getUser(e))
                    .filter(e$.lm)
                    .value();
            }
            return i.length > 1;
        }),
        ea = (0, z.Z)({ location: 'AccountConnected' }),
        eo = {
            avatar: [],
            settings: []
        };
    return (
        !R && (M && (1 === U ? eo.settings.push(u.z.USER_SAFETY_CONSUMER_EDUCATION_MUTE) : eo.settings.push(u.z.USER_SAFETY_CONSUMER_EDUCATION_BLOCK)), $ && eo.settings.push(u.z.SOUNDBOARD_VOLUME_EDUCATION), V && eo.settings.push(u.z.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK), G && eo.avatar.push(u.z.PREMIUM_SUBSCRIPTION_APRIL_MARKETING_DECO_TOOLTIP), H && eo.avatar.push(u.z.EXPIRING_STATUS_COACHMARK), ea && eo.avatar.push(u.z.CUSTOM_STATUS_PROMPTS_COACHMARK)),
        (0, i.jsx)(A.Gt, {
            value: et,
            children: (0, i.jsx)(td, {
                currentUser: t,
                activities: r,
                applicationStream: a,
                voiceChannel: p,
                dismissibleContents: eo,
                visibleRecurringAvatarDc: W,
                markRecurringAvatarDcAsDismissed: K,
                userTag: m,
                hidePrivateData: g,
                occluded: R,
                premiumSubscription: T,
                selfDeaf: x,
                selfMute: b,
                serverDeaf: O,
                serverMute: h,
                speaking: c,
                speakingWhileMuted: I,
                status: l,
                streaming: s,
                suppress: _,
                webBuildOverride: v,
                awaitingRemote: L,
                isEligibleForPomelo: k,
                voiceActivityStatusEnabled: F,
                nameplate: ei,
                selectedGuildId: B,
                customStatusRTCEntrypointEnabled: q,
                customStatusHoverOnlyRTCEntrypointEnabled: X,
                isQuestBarEmpty: er,
                isListenAlongVisible: el
            })
        })
    );
}
function tg(e) {
    let { webBuildOverride: t, isEligibleForPomelo: n, onClick: s, onContextMenu: l, dismissibleContents: a, iconForeground: o, nameplate: c } = e,
        d = r.useRef(null),
        m = f.ewm,
        g = (0, p.i)();
    m = null != t ? f.bgT : n ? f.Ncx : g.Component;
    let [h, b] = (0, Q.US)(a);
    return (0, i.jsx)(f.yRy, {
        targetElementRef: d,
        position: 'top',
        align: 'center',
        shouldShow: null != h,
        renderPopout: h === u.z.USER_SAFETY_CONSUMER_EDUCATION_BLOCK ? () => (0, i.jsx)(eg.Z, { markAsDismissed: b }) : h === u.z.USER_SAFETY_CONSUMER_EDUCATION_MUTE ? () => (0, i.jsx)(ep.Z, { markAsDismissed: b }) : h === u.z.SOUNDBOARD_VOLUME_EDUCATION ? () => (0, i.jsx)(ef.Z, { markAsDismissed: b }) : h === u.z.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK ? () => (0, i.jsx)(ex.Z, {}) : () => (0, i.jsx)(i.Fragment, {}),
        children: () =>
            (0, i.jsx)(
                e6.Z,
                ts(
                    tr(
                        {
                            ref: d,
                            tooltipText: null != t ? tt.intl.formatToPlainString(tt.t.Gzh6ZG, { webBuildOverride: t.id }) : tt.intl.string(tt.t.cduTBA),
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
                    { plated: null != c }
                )
            )
    });
}
function tp(e) {
    let { selfMute: t, serverMute: n, suppress: s, awaitingRemote: a, tooltipText: o, tooltipColor: u, tooltipForceOpen: m, iconForeground: g, onMouseEnter: p, onMouseLeave: b, onClick: _, onContextMenu: x, nameplate: E, accountContainerRef: j } = e,
        C = t || s || n,
        O = r.useRef(null),
        S = r.useRef(null),
        v = (0, eZ.b)(C),
        { activeVoice: T, mostRecentlyRequestedVoiceId: I, lastInitAttemptMayHaveCrashed: N } = (0, eN.o)(),
        { showSilentLagWarning: P } = (0, eI.Y)(),
        R = null != T,
        D = (0, eT.z)(T),
        Z = (0, d.e7)([eV.Z], () => eV.Z.isConnected()),
        { Component: w, events: k, play: B } = v,
        M = n || s ? f.v0G : w,
        U = P ? tt.intl.string(tt.t.ARRV6u) : null,
        V = (0, L.Z)(t, n, s, a),
        G =
            null != o
                ? o
                : null != U
                  ? (0, i.jsxs)('div', {
                        className: tn.tooltipWithSubtext,
                        children: [
                            (0, i.jsx)(f.Text, {
                                variant: 'text-sm/medium',
                                color: 'currentColor',
                                children: V
                            }),
                            null != U &&
                                (0, i.jsx)(f.Text, {
                                    variant: 'text-xs/medium',
                                    color: 'text-warning',
                                    children: U
                                })
                        ]
                    })
                  : V,
        { analyticsLocations: F } = (0, A.ZP)(y.Z.AUDIO_INPUT_BUTTON),
        H = (0, eS.Hu)({
            location: y.Z.AUDIO_INPUT_BUTTON,
            autoTrackExposure: !0
        }),
        z = (0, ev.av)({
            location: y.Z.AUDIO_INPUT_BUTTON,
            autoTrackExposure: !0
        });
    r.useEffect(() => () => B(), [C, B]);
    let Y = r.useCallback(
            (e) => {
                x(e, F);
            },
            [x, F]
        ),
        [W, K] = r.useState(!1),
        q = r.useCallback((e) => {
            var t;
            if ((0, c.k)(null == e ? void 0 : e.target, Node) && (null == (t = O.current) ? void 0 : t.contains(e.target))) return h.F;
            K(!1);
        }, []);
    (0, eX.yp)({
        event: e4.CkL.OPEN_VOICE_FILTER_POPOUT,
        handler: () => {
            K(!0);
        }
    });
    let [X, Q] = r.useState(!1);
    r.useEffect(() => {
        let e;
        return (
            Z &&
                R &&
                (e = setTimeout(() => {
                    Q(!0), (e = setTimeout(() => Q(!1), to));
                }, 300)),
            () => {
                Q(!1), clearTimeout(e);
            }
        );
    }, [Z]);
    let J = r.useCallback(() => {
            N || (0, ey.r5)();
        }, [N]),
        $ = C ? f.TVs.colors.STATUS_DANGER : P ? f.TVs.colors.STATUS_WARNING : 'currentColor',
        ee = C || P;
    return (0, i.jsx)(A.Gt, {
        value: F,
        children: (0, i.jsxs)('div', {
            ref: O,
            className: l()(tn.micButtonParent, { [tn.hasColorGlow]: ee }),
            children: [
                (0, i.jsx)(e6.Z, {
                    tooltipText: G,
                    tooltipColor: u,
                    tooltipForceOpen: m,
                    plated: null != E,
                    onMouseEnter: () => {
                        p(), k.onMouseEnter();
                    },
                    onMouseLeave: () => {
                        b(), k.onMouseLeave();
                    },
                    icon: (0, i.jsx)(M, {
                        size: 'custom',
                        width: 20,
                        height: 20,
                        color: $,
                        className: g
                    }),
                    onClick: _,
                    onContextMenu: Y,
                    role: 'switch',
                    className: l()({ [tn.micButtonWithMenu]: H }),
                    orangeGlow: P,
                    redGlow: C,
                    'aria-label': tt.intl.string(tt.t['w4m94+']),
                    'aria-checked': C,
                    disabled: a
                }),
                H &&
                    (0, i.jsx)(f.yRy, {
                        targetElementRef: j,
                        position: 'top',
                        align: 'left',
                        nudgeAlignIntoViewport: !1,
                        animation: f.yRy.Animation.FADE,
                        useMouseEnter: !0,
                        ignoreModalClicks: !0,
                        onRequestOpen: J,
                        onRequestClose: q,
                        shouldShow: W,
                        renderPopout: (e) => {
                            let { closePopout: t } = e;
                            return (0, i.jsx)(eR.l, { onSettingsButtonClick: t });
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
                            let l = s ? f.u04 : f.CJ0;
                            return (0, i.jsx)('div', {
                                children: (0, i.jsx)(eP.n, {
                                    targetElementRef: S,
                                    onCTA: () => K(!0),
                                    canBeShown: !s,
                                    children: (e, t) =>
                                        (0, i.jsx)(eA.v, {
                                            targetElementRef: S,
                                            onCTA: () => K(!0),
                                            canBeShown: z && Z && !R && !e && !s,
                                            children: (e, s) =>
                                                (0, i.jsx)(
                                                    e6.Z,
                                                    tr(
                                                        {
                                                            ref: S,
                                                            plated: null != E,
                                                            tooltipForceOpen: X,
                                                            tooltipColor: X ? f.FGA.GREEN : void 0,
                                                            tooltipContentClassName: X ? tn.voiceFilterWarning : void 0,
                                                            tooltipText: X
                                                                ? (0, i.jsxs)(i.Fragment, {
                                                                      children: [
                                                                          (0, i.jsx)('img', {
                                                                              alt: null != D ? tt.intl.string(D.name) : '',
                                                                              src: null == D ? void 0 : D.iconURL,
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
                                                            icon: (0, i.jsx)(l, {
                                                                className: tn.buttonChevronIcon,
                                                                size: 'custom',
                                                                width: 12,
                                                                height: 12,
                                                                color: $
                                                            }),
                                                            role: 'button',
                                                            className: tn.buttonChevron,
                                                            orangeGlow: P,
                                                            redGlow: C,
                                                            'aria-label': tt.intl.string(tt.t.Hapb4O),
                                                            disabled: a,
                                                            onClick: (e) => {
                                                                null == t || t(), null == s || s(), n(e), null != I && !W && N ? (0, eD.$)(() => K(!0)) : K(!W);
                                                            }
                                                        },
                                                        r
                                                    )
                                                )
                                        })
                                })
                            });
                        }
                    })
            ]
        })
    });
}
function th(e) {
    let { selfDeaf: t, serverDeaf: n, awaitingRemote: s, onClick: a, onContextMenu: o, iconForeground: c, nameplate: d } = e,
        u = t || n,
        {
            Component: m,
            play: p,
            events: { onMouseEnter: h, onMouseLeave: b }
        } = (0, g.l)(u ? 'undeafen' : 'deafen'),
        _ = n ? f.Vm4 : m,
        { analyticsLocations: x } = (0, A.ZP)(y.Z.AUDIO_OUTPUT_BUTTON);
    r.useEffect(() => () => p(), [u, p]);
    let E = r.useCallback(
        (e) => {
            o(e, x);
        },
        [o, x]
    );
    return (0, i.jsx)(A.Gt, {
        value: x,
        children: (0, i.jsx)(e6.Z, {
            plated: null != d,
            tooltipText: (0, k.Z)(t, n, s),
            onMouseEnter: h,
            onMouseLeave: b,
            icon: (0, i.jsx)(_, {
                size: 'custom',
                width: 20,
                height: 20,
                color: u ? f.TVs.colors.STATUS_DANGER : 'currentColor',
                className: c
            }),
            onClick: a,
            onContextMenu: E,
            innerClassName: l()({ [tn.redIcon]: n }),
            iconForeground: u ? tn.strikethrough : void 0,
            role: 'switch',
            redGlow: u,
            'aria-label': tt.intl.string(tt.t.wjcRFR),
            'aria-checked': u,
            disabled: s
        })
    });
}
