n.d(t, {
    Z: () => tg,
    m: () => tu
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
    z = n(459115),
    Y = n(427217),
    W = n(132750),
    K = n(540059),
    q = n(243778),
    X = n(258609),
    Q = n(53891),
    J = n(291533),
    $ = n(427347),
    ee = n(50697),
    et = n(90042),
    en = n(78933),
    ei = n(850020),
    er = n(379839),
    es = n(359135),
    el = n(516817),
    ea = n(332473),
    eo = n(963590),
    ec = n(210308),
    ed = n(667105),
    eu = n(19199),
    em = n(212704),
    eg = n(14357),
    ep = n(763296),
    eh = n(640806),
    ef = n(768419),
    eb = n(184301),
    e_ = n(52538),
    ex = n(670188),
    eE = n(321614),
    ej = n(879815),
    eC = n(294629),
    eO = n(875527),
    eS = n(702977),
    ev = n(56848),
    eT = n(940315),
    eI = n(378441),
    eN = n(358820),
    ey = n(723547),
    eA = n(361045),
    eP = n(74650),
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
    e6 = n(578817),
    e2 = n(870569),
    e5 = n(345243),
    e4 = n(115530),
    e7 = n(981631),
    e9 = n(215023),
    te = n(921944),
    tt = n(46140),
    tn = n(388032),
    ti = n(239692);
function tr(e, t, n) {
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
function ts(e) {
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
                tr(e, t, n[t]);
            });
    }
    return e;
}
function tl(e, t) {
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
let ta = e8.ZP.getEnableHardwareAcceleration() ? f.Xo$ : f.qEK,
    to = 2 * eJ.Z.Millis.MINUTE,
    tc = 3 * eJ.Z.Millis.SECOND;
function td(e) {
    let { ref: t, speaking: n, streaming: s, currentUser: a, status: o, handleClick: c, handleMouseLeave: d, renderNameTag: u, nameplate: m, 'data-jump-section': g } = e,
        p = r.useRef(null),
        h = null != t ? t : p,
        b = (0, K.Q3)('RTC Avatar'),
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
                        eQ.S.subscribe(e7.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, t),
                        () => {
                            eQ.S.unsubscribe(e7.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, t);
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
        I = (0, er.A)(m);
    return null == a
        ? null
        : (0, i.jsx)(x.Z, {
              object: e7.qAy.AVATAR,
              children: (0, i.jsx)(ex.Z, {
                  user: a,
                  targetElementRef: h,
                  clickTrap: !0,
                  preload: () =>
                      (0, eb.Z)(a.id, a.getAvatarURL(void 0, ex.I), {
                          type: 'account_popout',
                          withMutualGuilds: !1,
                          withMutualFriends: !1
                      }),
                  renderPopout: (e, t) => {
                      let { closePopout: n, setPopoutRef: r } = e;
                      return (0, i.jsx)(en.Z, {
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
                          tl(
                              ts(
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
                                  'aria-label': tn.intl.string(tn.t['3Uj+2t']),
                                  'data-jump-section': b ? g : void 0,
                                  className: l()(ti.avatarWrapper, !b && ti.experiment, { [ti.plated]: null != m }),
                                  children: [
                                      (0, i.jsx)(ta, {
                                          size: b ? f.EFr['SIZE_'.concat(C)] : f.EFr.SIZE_32,
                                          src: a.getAvatarURL(void 0, b ? C - 4 : 32, !1),
                                          avatarDecoration: E,
                                          'aria-label': a.username,
                                          status: s ? e7.Skl.STREAMING : o,
                                          isSpeaking: n,
                                          className: ti.avatar
                                      }),
                                      (0, i.jsx)('div', {
                                          className: l()(ti.nameTag, { [ti.canCopy]: eq.wS }),
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
class tu extends r.PureComponent {
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
            t = [tn.intl.string(tn.t.MSaeTU), tn.intl.string(tn.t.UmrCw8), tn.intl.string(tn.t.gKE0Ji), tn.intl.string(tn.t['4DSKbm']), tn.intl.string(tn.t['+8ENdX']), tn.intl.string(tn.t.GlWHv7), tn.intl.string(tn.t.hIzxU1), tn.intl.string(tn.t['26uMPD']), tn.intl.string(tn.t.uFs7R0), tn.intl.string(tn.t.bLXdcX), tn.intl.string(tn.t.gPg9fX)],
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
            return (0, i.jsx)(W.Z, {
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
                    textClassName: ti.activityStatusText,
                    hideTooltip: !0
                })
            });
        let u =
            null == t
                ? void 0
                : t.find((e) => {
                      let { type: t } = e;
                      return t === e7.IIU.CUSTOM_STATUS;
                  });
        return null != u
            ? (0, i.jsx)(N.Z, {
                  hoverText: l,
                  forceHover: e,
                  children: (0, i.jsx)(Y.Z, {
                      activity: u,
                      emojiClassName: ti.emoji,
                      className: ti.customStatus
                  })
              })
            : null != s && s !== e7.Skl.UNKNOWN && r.isPomelo()
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
            td,
            tl(ts({}, this.props), {
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
            return (0, i.jsx)(Q.ZP, {
                guildId: null != (l = this.props.selectedGuildId) ? l : null,
                onDismiss: s,
                targetElementRef: this.avatarWithPopoutRef,
                children: () => this.renderAvatarWithPopout({ focusSectionProps: e })
            });
        }
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(ec.Z, {
                    groupName: te.R.ACCOUNT_NAME_ZONE,
                    targetElementRef: this.avatarWithPopoutRef
                }),
                (0, i.jsx)(q.ZP, {
                    contentTypes: n.avatar,
                    groupName: te.R.ACCOUNT_NAME_ZONE,
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
                                return (0, i.jsx)(et.Z, {
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
                                  className: l()(ti.container, {
                                      [ti.containerRtcOpened]: null != n,
                                      [ti.containerQuestBarVisible]: !r,
                                      [ti.containerListenAlongVisible]: s
                                  }),
                                  onMouseEnter: this.handleMouseEnter,
                                  onMouseLeave: this.handleMouseLeave,
                                  children: [
                                      (0, i.jsx)(el.Z, {
                                          nameplate: t,
                                          hovered: a,
                                          placement: es.i.ACCOUNT
                                      }),
                                      this.renderNameZone(e),
                                      (0, i.jsx)(
                                          tm,
                                          tl(ts({}, this.props, this.state), {
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
                              (0, i.jsx)($.Z, {}),
                              (0, i.jsx)(F.Z, {})
                          ]
                      })
              });
    }
    constructor(...e) {
        super(...e),
            tr(this, 'copiedTimeout', new m.V7()),
            tr(this, 'copiedDecayTimeout', new m.V7()),
            tr(this, 'speakingWhileMutedTooltipTimeout', new m.V7()),
            tr(this, 'lastSpeakingWhileMutedNotificationTime', void 0),
            tr(this, 'state', {
                hovered: !1,
                copiedStreak: 0,
                shouldShowNametagTooltip: !1,
                shouldShowCopiedFeedback: !1,
                shouldShowSpeakingWhileMutedTooltip: !1,
                hoveringOnMute: !1
            }),
            tr(this, 'containerRef', r.createRef()),
            tr(this, 'avatarWithPopoutRef', r.createRef()),
            tr(this, 'handleToggleSelfMute', () => {
                let { serverMute: e, suppress: t, selfMute: n } = this.props;
                (0, M.Z)(e, t, e7.jXE.ACCOUNT_PANEL), (0, U.v)(y.Z.ACCOUNT, U.d.MIC, n);
            }),
            tr(this, 'handleToggleSelfDeaf', () => {
                let { serverDeaf: e, selfDeaf: t } = this.props;
                (0, B.Z)(e, e7.jXE.ACCOUNT_PANEL), (0, U.v)(y.Z.ACCOUNT, U.d.DEAFEN, !t);
            }),
            tr(this, 'handleOpenAccountSettings', () => {
                this.handleOpenSettings();
            }),
            tr(this, 'handleOpenSettings', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e6.a.getCurrentConfig({ location: 'Account' }, { autoTrackExposure: !0 }).jumpToVoice && eV.Z.isConnected() ? e7.oAB.VOICE : e7.oAB.ACCOUNT,
                    t = arguments.length > 1 ? arguments[1] : void 0,
                    n = arguments.length > 2 ? arguments[2] : void 0;
                _.Z.open(e, t, n);
            }),
            tr(this, 'handleOpenSettingsContextMenu', (e) => {
                let { currentUser: t } = this.props;
                null != t &&
                    (0, b.jW)(e, async () => {
                        let { default: e } = await n.e('2535').then(n.bind(n, 923422));
                        return (n) =>
                            (0, i.jsx)(
                                e,
                                tl(ts({}, n), {
                                    user: t,
                                    premiumSubscription: this.props.premiumSubscription,
                                    webBuildOverride: this.props.webBuildOverride,
                                    onInteraction: (0, V.u)('UserSettingsCogContextMenu', y.Z.ACCOUNT)
                                })
                            );
                    });
            }),
            tr(this, 'audioOnInteractionHandler', (0, V.u)('AudioDeviceMenu', y.Z.ACCOUNT)),
            tr(this, 'handleInputAudioContextMenu', (e, t) => {
                (0, b.jW)(e, async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 659580));
                    return () => {
                        let { enabledInputProfiles: n } = (0, eE.c)({ location: 'Account' });
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
            tr(this, 'handleOutputAudioContextMenu', (e, t) => {
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
            tr(this, 'handleMouseEnter', () => {
                this.setState({ hovered: !0 });
            }),
            tr(this, 'handleMouseLeave', () => {
                this.setState({ hovered: !1 });
            }),
            tr(this, 'handleMouseEnterMute', () => {
                this.setState({
                    hoveringOnMute: !0,
                    shouldShowSpeakingWhileMutedTooltip: !1
                }),
                    this.speakingWhileMutedTooltipTimeout.stop();
            }),
            tr(this, 'handleMouseLeaveMute', () => {
                this.setState({ hoveringOnMute: !1 });
            }),
            tr(this, 'handleCopyTag', () => {
                let { currentUser: e } = this.props,
                    { shouldShowNametagTooltip: t, copiedStreak: n } = this.state;
                if (null == e) return;
                (0, eq.JG)(
                    e3.ZP.getUserTag(e, {
                        decoration: 'never',
                        identifiable: 'always'
                    })
                ),
                    eW.default.track(e7.rMx.TEXT_COPIED, { type: 'User Tag' });
                let i = {
                    shouldShowCopiedFeedback: !0,
                    shouldShowNametagTooltip: !0
                };
                t || (i.copiedStreak = n + 1),
                    this.setState(i, () => {
                        this.copiedTimeout.start(1000, () => this.setState({ shouldShowNametagTooltip: !1 })), this.copiedDecayTimeout.start(2000, () => this.setState({ copiedStreak: 0 }));
                    });
            }),
            tr(this, 'handleOccludedChanged', () => {
                let { occluded: e } = this.props;
                e &&
                    this.setState({
                        shouldShowNametagTooltip: !1,
                        shouldShowSpeakingWhileMutedTooltip: !1
                    });
            }),
            tr(this, 'handleSpeakingWhileMutedChanged', () => {
                let { selfMute: e, serverMute: t, suppress: n, speakingWhileMuted: i, occluded: r } = this.props,
                    { hoveringOnMute: s } = this.state,
                    l = void 0 === this.lastSpeakingWhileMutedNotificationTime || Date.now() - this.lastSpeakingWhileMutedNotificationTime > to;
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
            tr(this, 'renderNameTag', () => {
                let { currentUser: e } = this.props;
                return null == e
                    ? null
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)('div', {
                                  className: ti.panelTitleContainer,
                                  children: (0, i.jsx)(e4.Z, { children: e3.ZP.getName(e) })
                              }),
                              (0, i.jsx)('div', {
                                  className: ti.panelSubtextContainer,
                                  children: (0, i.jsx)(e5.Z, { children: this.renderStatus() })
                              })
                          ]
                      });
            });
    }
}
function tm(e) {
    let { selfDeaf: t, selfMute: n, awaitingRemote: r, serverMute: s, serverDeaf: l, suppress: a, shouldShowSpeakingWhileMutedTooltip: o, isEligibleForPomelo: c, webBuildOverride: d, handleMouseEnterMute: u, handleMouseLeaveMute: m, handleToggleSelfDeaf: g, handleToggleSelfMute: p, handleInputAudioContextMenu: h, handleOutputAudioContextMenu: b, handleOpenAccountSettings: _, handleOpenSettingsContextMenu: x, dismissibleContents: E, nameplate: j, accountContainerRef: C } = e,
        O = (0, er.A)(j);
    return (0, i.jsxs)('div', {
        className: ti.buttons,
        style: O,
        children: [
            (0, i.jsx)(th, {
                accountContainerRef: C,
                selfMute: n,
                serverMute: s,
                suppress: a,
                awaitingRemote: r,
                tooltipText: o ? tn.intl.string(tn.t['29gnR0']) : void 0,
                tooltipColor: o ? f.FGA.GREEN : void 0,
                tooltipForceOpen: o || void 0,
                onMouseEnter: u,
                onMouseLeave: m,
                onClick: p,
                onContextMenu: h,
                iconForeground: null != j ? ti.iconForeground : void 0,
                nameplate: j
            }),
            (0, i.jsx)(tf, {
                selfDeaf: t,
                serverDeaf: l,
                onClick: g,
                onContextMenu: b,
                awaitingRemote: r,
                iconForeground: null != j ? ti.iconForeground : void 0,
                nameplate: j
            }),
            (0, i.jsx)(tp, {
                isEligibleForPomelo: c,
                webBuildOverride: d,
                onClick: _,
                onContextMenu: x,
                dismissibleContents: E.settings,
                iconForeground: null != j ? ti.iconForeground : void 0,
                nameplate: j
            })
        ]
    });
}
function tg() {
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
                        return t === e7.IIU.STREAMING;
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
        { mute: h, selfMute: b, suppress: _ } = (0, eC.Z)(p),
        { selfDeaf: x, deaf: O } = (0, ej.Z)(p),
        v = (0, d.e7)([D.C], () => {
            var e;
            return (0, Z.fD)() ? (null == (e = D.C.getCurrentBuildOverride().overrides) ? void 0 : e.discord_web) : null;
        }),
        T = (0, d.e7)([eY.ZP], () => eY.ZP.getPremiumTypeSubscription()),
        I = (0, d.e7)([eU.Z], () => eU.Z.getSpeakingWhileMuted()),
        N = (0, d.e7)([w.Z], () => w.Z.isFullscreenInContext()),
        P = (0, d.e7)([eM.Z], () => eM.Z.hasLayers()),
        R = (0, f.s9z)(f.JQI) || P || e1.s.isDisallowPopupsSet() || N,
        k = (0, ea.b)(),
        L = (0, d.e7)([X.Z], () => null != X.Z.getAwaitingRemoteSessionInfo()),
        B = (0, d.e7)([eG.Z], () => eG.Z.getGuildId()),
        M = (0, eu.D)(),
        U = (0, E.u)(),
        V = e0.ZP.canUsePremiumGuildMemberProfile(t),
        G = (null == t || null == (e = t.avatarDecoration) ? void 0 : e.skuId) === e9.rL,
        { voiceActivityStatusEnabled: F } = (0, S.U)({ location: 'Account' }),
        H = (0, ee.m)(),
        [Y, W] = (0, J.G)(null != B ? B : null),
        { customStatusRTCEntrypointEnabled: K, customStatusHoverOnlyRTCEntrypointEnabled: q } = (0, z.Z)({ location: 'Account' }),
        Q = 'account';
    (0, j.j)({
        location: Q + ' auto on',
        autoTrackExposure: !0
    }),
        (0, j.j)({
            location: Q + ' auto off',
            autoTrackExposure: !1
        });
    let $ = (0, d.e7)([ep.Z], () => ep.Z.hasHadOtherUserPlaySoundInSession()),
        { analyticsLocations: et } = (0, A.ZP)(y.Z.ACCOUNT),
        en = (0, ei.K)({ user: t }),
        er = (0, ed.Ws)({ location: tt.dr.CONFLICT_CHECKS }),
        es = (0, d.e7)([ef.Z, ez.default, eB.Z], () => {
            let e,
                t = ef.Z.getSyncingWith(),
                n = ef.Z.getActivity(),
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
        el = {
            avatar: [],
            settings: []
        };
    return (
        !R && (M && (1 === U ? el.settings.push(u.z.USER_SAFETY_CONSUMER_EDUCATION_MUTE) : el.settings.push(u.z.USER_SAFETY_CONSUMER_EDUCATION_BLOCK)), $ && el.settings.push(u.z.SOUNDBOARD_VOLUME_EDUCATION), V && el.settings.push(u.z.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK), G && el.avatar.push(u.z.PREMIUM_SUBSCRIPTION_APRIL_MARKETING_DECO_TOOLTIP), H && el.avatar.push(u.z.EXPIRING_STATUS_COACHMARK)),
        (0, i.jsx)(A.Gt, {
            value: et,
            children: (0, i.jsx)(tu, {
                currentUser: t,
                activities: r,
                applicationStream: a,
                voiceChannel: p,
                dismissibleContents: el,
                visibleRecurringAvatarDc: Y,
                markRecurringAvatarDcAsDismissed: W,
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
                nameplate: en,
                selectedGuildId: B,
                customStatusRTCEntrypointEnabled: K,
                customStatusHoverOnlyRTCEntrypointEnabled: q,
                isQuestBarEmpty: er,
                isListenAlongVisible: es
            })
        })
    );
}
function tp(e) {
    let { webBuildOverride: t, isEligibleForPomelo: n, onClick: s, onContextMenu: l, dismissibleContents: a, iconForeground: o, nameplate: c } = e,
        d = r.useRef(null),
        m = f.ewm,
        g = (0, p.i)();
    m = null != t ? f.bgT : n ? f.Ncx : g.Component;
    let [h, b] = (0, q.US)(a);
    return (0, i.jsx)(f.yRy, {
        targetElementRef: d,
        position: 'top',
        align: 'center',
        shouldShow: null != h,
        renderPopout: h === u.z.USER_SAFETY_CONSUMER_EDUCATION_BLOCK ? () => (0, i.jsx)(em.Z, { markAsDismissed: b }) : h === u.z.USER_SAFETY_CONSUMER_EDUCATION_MUTE ? () => (0, i.jsx)(eg.Z, { markAsDismissed: b }) : h === u.z.SOUNDBOARD_VOLUME_EDUCATION ? () => (0, i.jsx)(eh.Z, { markAsDismissed: b }) : h === u.z.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK ? () => (0, i.jsx)(e_.Z, {}) : () => (0, i.jsx)(i.Fragment, {}),
        children: () =>
            (0, i.jsx)(
                e2.Z,
                tl(
                    ts(
                        {
                            ref: d,
                            tooltipText: null != t ? tn.intl.formatToPlainString(tn.t.Gzh6ZG, { webBuildOverride: t.id }) : tn.intl.string(tn.t.cduTBA),
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
function th(e) {
    let { selfMute: t, serverMute: n, suppress: s, awaitingRemote: a, tooltipText: o, tooltipColor: m, tooltipForceOpen: g, iconForeground: p, onMouseEnter: b, onMouseLeave: _, onClick: x, onContextMenu: E, nameplate: j, accountContainerRef: C } = e,
        O = t || s || n,
        S = r.useRef(null),
        v = r.useRef(null),
        T = (0, eZ.b)(O),
        { activeVoice: I, mostRecentlyRequestedVoiceId: N, lastInitAttemptMayHaveCrashed: P } = (0, eI.o)(),
        { showSilentLagWarning: R } = (0, eT.Y)(),
        D = null != I,
        Z = (0, ev.z)(I),
        w = (0, d.e7)([eV.Z], () => eV.Z.isConnected()),
        { Component: k, events: B, play: M } = T,
        U = n || s ? f.v0G : k,
        V = R ? tn.intl.string(tn.t.ARRV6u) : null,
        G = (0, L.Z)(t, n, s, a),
        F =
            null != o
                ? o
                : null != V
                  ? (0, i.jsxs)('div', {
                        className: ti.tooltipWithSubtext,
                        children: [
                            (0, i.jsx)(f.Text, {
                                variant: 'text-sm/medium',
                                color: 'currentColor',
                                children: G
                            }),
                            null != V &&
                                (0, i.jsx)(f.Text, {
                                    variant: 'text-xs/medium',
                                    color: 'text-warning',
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
        Y = (0, eS.av)({
            location: y.Z.AUDIO_INPUT_BUTTON,
            autoTrackExposure: !0
        });
    r.useEffect(() => () => M(), [O, M]);
    let W = r.useCallback(
            (e) => {
                E(e, H);
            },
            [E, H]
        ),
        [K, X] = r.useState(!1),
        Q = r.useCallback((e) => {
            var t;
            if ((0, c.k)(null == e ? void 0 : e.target, Node) && (null == (t = S.current) ? void 0 : t.contains(e.target))) return h.F;
            X(!1);
        }, []);
    (0, eX.yp)({
        event: e7.CkL.OPEN_VOICE_FILTER_POPOUT,
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
                    $(!0), (e = setTimeout(() => $(!1), tc));
                }, 300)),
            () => {
                $(!1), clearTimeout(e);
            }
        );
    }, [w]);
    let ee = r.useCallback(() => {
            P || (0, eN.r5)();
        }, [P]),
        et = O ? f.TVs.colors.STATUS_DANGER : R ? f.TVs.colors.STATUS_WARNING : 'currentColor',
        en = O || R,
        ei = (0, eo.Z)({ location: 'Account' });
    return (0, i.jsx)(A.Gt, {
        value: H,
        children: (0, i.jsxs)('div', {
            ref: S,
            className: l()(ti.micButtonParent, { [ti.hasColorGlow]: en }),
            children: [
                (0, i.jsx)(e2.Z, {
                    tooltipText: F,
                    tooltipColor: m,
                    tooltipForceOpen: g,
                    plated: null != j,
                    onMouseEnter: () => {
                        b(), B.onMouseEnter();
                    },
                    onMouseLeave: () => {
                        _(), B.onMouseLeave();
                    },
                    icon: (0, i.jsx)(U, {
                        size: 'custom',
                        width: 20,
                        height: 20,
                        color: et,
                        className: p
                    }),
                    onClick: x,
                    onContextMenu: W,
                    role: 'switch',
                    className: l()({ [ti.micButtonWithMenu]: z }),
                    orangeGlow: R,
                    redGlow: O,
                    'aria-label': tn.intl.string(tn.t['w4m94+']),
                    'aria-checked': O,
                    disabled: a
                }),
                z &&
                    (0, i.jsx)(f.yRy, {
                        targetElementRef: C,
                        position: 'top',
                        align: 'left',
                        nudgeAlignIntoViewport: !1,
                        animation: f.yRy.Animation.FADE,
                        useMouseEnter: !0,
                        ignoreModalClicks: !0,
                        onRequestOpen: ee,
                        onRequestClose: Q,
                        shouldShow: K,
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
                            let l = s ? f.u04 : f.CJ0,
                                o = [];
                            return (
                                !s && (ei && o.push(u.z.VOICE_FILTER_EARLY_ACCESS_COACHMARK), o.push(u.z.VOICE_FILTER_LAUNCH_COACHMARK), Y && w && !D && o.push(u.z.VOICE_FILTER_FIRST_USE_COACHMARK)),
                                (0, i.jsx)('div', {
                                    children: (0, i.jsx)(q.ZP, {
                                        bypassAutoDismiss: !0,
                                        contentTypes: o,
                                        children: (e) => {
                                            let { visibleContent: t, markAsDismissed: s } = e,
                                                o = null;
                                            t === u.z.VOICE_FILTER_EARLY_ACCESS_COACHMARK
                                                ? (o = (0, i.jsx)(eP.U, {
                                                      markAsDismissed: s,
                                                      onCTA: () => X(!0)
                                                  }))
                                                : t === u.z.VOICE_FILTER_LAUNCH_COACHMARK
                                                  ? (o = (0, i.jsx)(eA.n, {
                                                        markAsDismissed: s,
                                                        onCTA: () => X(!0)
                                                    }))
                                                  : t === u.z.VOICE_FILTER_FIRST_USE_COACHMARK &&
                                                    (o = (0, i.jsx)(ey.v, {
                                                        markAsDismissed: s,
                                                        onCTA: () => X(!0)
                                                    }));
                                            let c = () =>
                                                (0, i.jsx)(
                                                    e2.Z,
                                                    ts(
                                                        {
                                                            ref: v,
                                                            plated: null != j,
                                                            tooltipForceOpen: J,
                                                            tooltipColor: J ? f.FGA.GREEN : void 0,
                                                            tooltipContentClassName: J ? ti.voiceFilterWarning : void 0,
                                                            tooltipText: J
                                                                ? (0, i.jsxs)(i.Fragment, {
                                                                      children: [
                                                                          (0, i.jsx)('img', {
                                                                              alt: null != Z ? tn.intl.string(Z.name) : '',
                                                                              src: null == Z ? void 0 : Z.iconURL,
                                                                              draggable: !1
                                                                          }),
                                                                          (0, i.jsx)(f.Text, {
                                                                              variant: 'text-sm/medium',
                                                                              color: 'always-white',
                                                                              children: tn.intl.string(tn.t.VlC1dX)
                                                                          })
                                                                      ]
                                                                  })
                                                                : tn.intl.string(tn.t.Hapb4O),
                                                            icon: (0, i.jsx)(l, {
                                                                className: ti.buttonChevronIcon,
                                                                size: 'custom',
                                                                width: 12,
                                                                height: 12,
                                                                color: et
                                                            }),
                                                            role: 'button',
                                                            className: ti.buttonChevron,
                                                            orangeGlow: R,
                                                            redGlow: O,
                                                            'aria-label': tn.intl.string(tn.t.Hapb4O),
                                                            disabled: a,
                                                            onClick: (e) => {
                                                                s(te.L.INDIRECT_ACTION), n(e), null != N && !K && P ? (0, eD.$)(() => X(!0)) : X(!K);
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
function tf(e) {
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
        children: (0, i.jsx)(e2.Z, {
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
            innerClassName: l()({ [ti.redIcon]: n }),
            iconForeground: u ? ti.strikethrough : void 0,
            role: 'switch',
            redGlow: u,
            'aria-label': tn.intl.string(tn.t.wjcRFR),
            'aria-checked': u,
            disabled: s
        })
    });
}
