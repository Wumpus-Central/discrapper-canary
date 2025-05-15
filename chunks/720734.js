n.d(t, {
    Z: () => to,
    m: () => tl
}),
    n(388685),
    n(539854);
var i = n(255367),
    r = n(73800),
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
    C = n(941129),
    j = n(634894),
    O = n(586902),
    S = n(980591),
    v = n(468363),
    T = n(326255),
    I = n(771173),
    N = n(963056),
    y = n(570928),
    A = n(100527),
    P = n(906732),
    R = n(676742),
    D = n(1585),
    Z = n(304761),
    w = n(865427),
    k = n(358221),
    L = n(571250),
    B = n(628581),
    M = n(55311),
    U = n(575175),
    V = n(522651),
    G = n(795318),
    F = n(526371),
    H = n(64220),
    z = n(359588),
    W = n(459115),
    Y = n(427217),
    K = n(132750),
    q = n(526031),
    X = n(540059),
    Q = n(605236),
    J = n(243778),
    $ = n(258609),
    ee = n(53891),
    et = n(291533),
    en = n(427347),
    ei = n(50697),
    er = n(90042),
    es = n(78933),
    el = n(850020),
    ea = n(379839),
    eo = n(359135),
    ec = n(516817),
    ed = n(332473),
    eu = n(240504),
    em = n(637906),
    eg = n(39370),
    ep = n(667105),
    eh = n(19199),
    ef = n(212704),
    eb = n(14357),
    e_ = n(763296),
    ex = n(640806),
    eE = n(184301),
    eC = n(52538),
    ej = n(670188),
    eO = n(321614),
    eS = n(861254),
    ev = n(221241),
    eT = n(879815),
    eI = n(294629),
    eN = n(875527),
    ey = n(56848),
    eA = n(378441),
    eP = n(358820),
    eR = n(469887),
    eD = n(306609),
    eZ = n(199902),
    ew = n(314897),
    ek = n(592125),
    eL = n(819640),
    eB = n(131951),
    eM = n(19780),
    eU = n(914010),
    eV = n(885110),
    eG = n(246946),
    eF = n(594174),
    eH = n(78839),
    ez = n(626135),
    eW = n(768581),
    eY = n(572004),
    eK = n(585483),
    eq = n(70956),
    eX = n(74538),
    eQ = n(374023),
    eJ = n(51144),
    e$ = n(998502),
    e0 = n(870569),
    e1 = n(345243),
    e3 = n(115530),
    e8 = n(981631),
    e6 = n(215023),
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
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                e7(e, t, n[t]);
            });
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
let tt = e$.ZP.getEnableHardwareAcceleration() ? f.Xo$ : f.qEK,
    tn = 2 * eq.Z.Millis.MINUTE,
    ti = 3 * eq.Z.Millis.SECOND,
    tr = 30 * eq.Z.Millis.DAY;
function ts(e) {
    let { ref: t, speaking: n, streaming: s, currentUser: a, status: o, handleClick: c, handleMouseLeave: d, renderNameTag: u, nameplate: m, 'data-jump-section': g } = e,
        p = r.useRef(null),
        h = null != t ? t : p,
        b = (0, X.Q3)('RTC Avatar'),
        { coloredIconsEnabled: _ } = (0, ev.Z)({ location: 'RTC Avatar' }),
        x = (0, R.Z)(null == a ? void 0 : a.avatarDecoration),
        C = (0, eW.NZ)({
            avatarDecoration: x,
            size: (0, D.y9)(f.EFr.SIZE_32)
        }),
        j = (0, f.dQu)(f.TVs.modules.guildbar.AVATAR_SIZE),
        {
            updateOpenPopoutRef: O,
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
                (0, S.Z)(() => l(!0), 750),
                r.useEffect(() => {
                    let t = (t) => {
                        var n;
                        let { highlightBadge: r } = t;
                        null != r && i(r), null == (n = e.current) || n.call(e);
                    };
                    return (
                        eK.S.subscribe(e8.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, t),
                        () => {
                            eK.S.unsubscribe(e8.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, t);
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
        I = (0, ea.A)(m);
    return null == a
        ? null
        : (0, i.jsx)(E.Z, {
              object: e8.qAy.AVATAR,
              children: (0, i.jsx)(ej.Z, {
                  user: a,
                  targetElementRef: h,
                  clickTrap: !0,
                  preload: () =>
                      (0, eE.Z)(a.id, a.getAvatarURL(void 0, ej.I), {
                          type: 'account_popout',
                          withMutualGuilds: !1,
                          withMutualFriends: !1
                      }),
                  renderPopout: (e, t) => {
                      let { closePopout: n, setPopoutRef: r } = e;
                      return (0, i.jsx)(es.Z, {
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
                      O(e),
                      (0, i.jsxs)(
                          f.P3F,
                          te(
                              e9(
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
                                  'aria-label': e5.intl.string(e5.t['3Uj+2t']),
                                  'data-jump-section': b ? g : void 0,
                                  className: l()(e4.avatarWrapper, !b && _ && e4.experiment, { [e4.plated]: null != m }),
                                  children: [
                                      (0, i.jsx)(tt, {
                                          size: b ? f.EFr['SIZE_'.concat(j)] : f.EFr.SIZE_32,
                                          src: a.getAvatarURL(void 0, b ? j - 4 : 32, !1),
                                          avatarDecoration: C,
                                          'aria-label': a.username,
                                          status: s ? e8.Skl.STREAMING : o,
                                          isSpeaking: n,
                                          className: e4.avatar
                                      }),
                                      (0, i.jsx)('div', {
                                          className: l()(e4.nameTag, { [e4.canCopy]: eY.wS }),
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
class tl extends r.PureComponent {
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
            t = [e5.intl.string(e5.t.MSaeTU), e5.intl.string(e5.t.UmrCw8), e5.intl.string(e5.t.gKE0Ji), e5.intl.string(e5.t['4DSKbm']), e5.intl.string(e5.t['+8ENdX']), e5.intl.string(e5.t.GlWHv7), e5.intl.string(e5.t.hIzxU1), e5.intl.string(e5.t['26uMPD']), e5.intl.string(e5.t.uFs7R0), e5.intl.string(e5.t.bLXdcX), e5.intl.string(e5.t.gPg9fX)],
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
                    location: 'Account',
                    user: r,
                    activities: t,
                    applicationStream: n,
                    voiceChannel: a ? o : void 0,
                    textClassName: e4.activityStatusText,
                    hideTooltip: !0,
                    disableTextScroll: !0
                })
            });
        let u =
            null == t
                ? void 0
                : t.find((e) => {
                      let { type: t } = e;
                      return t === e8.IIU.CUSTOM_STATUS;
                  });
        return null != u
            ? (0, i.jsx)(y.Z, {
                  hoverText: l,
                  forceHover: e,
                  children: (0, i.jsx)(Y.Z, {
                      activity: u,
                      emojiClassName: e4.emoji,
                      className: e4.customStatus
                  })
              })
            : null != s && s !== e8.Skl.UNKNOWN && r.isPomelo()
              ? (0, i.jsx)(y.Z, {
                    hoverText: l,
                    forceHover: e,
                    children: (0, i.jsx)(N.Z, { text: eJ.ZP.humanizeStatus(s) })
                })
              : l;
    }
    renderAvatarWithPopout(e) {
        let {
            focusSectionProps: { 'data-jump-section': t },
            onClick: n
        } = e;
        return (0, i.jsx)(
            ts,
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
        if (r === c.z.GUILD_TAG_AVAILABLE_COACHMARK) {
            var l;
            return (0, i.jsx)(ee.ZP, {
                guildId: null != (l = this.props.selectedGuildId) ? l : null,
                onDismiss: s,
                children: () => this.renderAvatarWithPopout({ focusSectionProps: e })
            });
        }
        return (0, i.jsx)(J.ZP, {
            contentTypes: n.avatar,
            children: (t) => {
                let { visibleContent: n, markAsDismissed: r } = t;
                switch (n) {
                    case c.z.PREMIUM_SUBSCRIPTION_APRIL_MARKETING_DECO_TOOLTIP:
                        return (0, i.jsx)(H.Z, {
                            markAsDismissed: r,
                            targetElementRef: this.avatarWithPopoutRef,
                            children: () => this.renderAvatarWithPopout({ focusSectionProps: e })
                        });
                    case c.z.EXPIRING_STATUS_COACHMARK:
                        return (0, i.jsx)(er.Z, {
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
                        return (0, i.jsx)(q.Z, {
                            markAsDismissed: r,
                            targetElementRef: this.avatarWithPopoutRef,
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
                                  className: l()(e4.container, {
                                      [e4.containerRtcOpened]: null != n,
                                      [e4.containerQuestBarVisible]: !r
                                  }),
                                  onMouseEnter: this.handleMouseEnter,
                                  onMouseLeave: this.handleMouseLeave,
                                  children: [
                                      (0, i.jsx)(ec.Z, {
                                          nameplate: t,
                                          hovered: s,
                                          placement: eo.i.ACCOUNT
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
                              (0, i.jsx)(en.Z, {}),
                              (0, i.jsx)(F.Z, {})
                          ]
                      })
              });
    }
    constructor(...e) {
        super(...e),
            e7(this, 'copiedTimeout', new d.V7()),
            e7(this, 'copiedDecayTimeout', new d.V7()),
            e7(this, 'speakingWhileMutedTooltipTimeout', new d.V7()),
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
                (0, U.Z)(e, t, e8.jXE.ACCOUNT_PANEL), (0, V.v)(A.Z.ACCOUNT, V.d.MIC, n);
            }),
            e7(this, 'handleToggleSelfDeaf', () => {
                let { serverDeaf: e, selfDeaf: t } = this.props;
                (0, M.Z)(e, e8.jXE.ACCOUNT_PANEL), (0, V.v)(A.Z.ACCOUNT, V.d.DEAFEN, !t);
            }),
            e7(this, 'handleOpenAccountSettings', () => {
                this.handleOpenSettings();
            }),
            e7(this, 'handleOpenSettings', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e8.oAB.ACCOUNT,
                    t = arguments.length > 1 ? arguments[1] : void 0,
                    n = arguments.length > 2 ? arguments[2] : void 0;
                x.Z.open(e, t, n);
            }),
            e7(this, 'handleOpenSettingsContextMenu', (e) => {
                let { currentUser: t } = this.props;
                null != t &&
                    (0, _.jW)(e, async () => {
                        let { default: e } = await n.e('2535').then(n.bind(n, 923422));
                        return (n) =>
                            (0, i.jsx)(
                                e,
                                te(e9({}, n), {
                                    user: t,
                                    premiumSubscription: this.props.premiumSubscription,
                                    webBuildOverride: this.props.webBuildOverride,
                                    onInteraction: (0, G.u)('UserSettingsCogContextMenu', A.Z.ACCOUNT)
                                })
                            );
                    });
            }),
            e7(this, 'audioOnInteractionHandler', (0, G.u)('AudioDeviceMenu', A.Z.ACCOUNT)),
            e7(this, 'handleInputAudioContextMenu', (e, t) => {
                (0, _.jW)(e, async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 659580));
                    return () => {
                        let { enabledInputProfiles: n } = (0, eO.c)({ location: 'Account' });
                        return (0, i.jsx)(P.Gt, {
                            value: t,
                            children: (0, i.jsx)(e, {
                                onClose: _.Zy,
                                renderInputDevices: !0,
                                renderInputProfiles: n.length > 0,
                                renderInputModes: !this.props.simplifiedCallSettingsEnabled,
                                renderInputVolume: !0,
                                simplified: this.props.simplifiedCallSettingsEnabled,
                                onInteraction: this.audioOnInteractionHandler
                            })
                        });
                    };
                });
            }),
            e7(this, 'handleOutputAudioContextMenu', (e, t) => {
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
            e7(this, 'handleMouseEnter', () => {
                this.setState({ hovered: !0 });
            }),
            e7(this, 'handleMouseLeave', () => {
                this.setState({ hovered: !1 });
            }),
            e7(this, 'handleMouseEnterMute', () => {
                this.setState({
                    hoveringOnMute: !0,
                    shouldShowSpeakingWhileMutedTooltip: !1
                }),
                    this.speakingWhileMutedTooltipTimeout.stop();
            }),
            e7(this, 'handleMouseLeaveMute', () => {
                this.setState({ hoveringOnMute: !1 });
            }),
            e7(this, 'handleCopyTag', () => {
                let { currentUser: e } = this.props,
                    { shouldShowNametagTooltip: t, copiedStreak: n } = this.state;
                if (null == e) return;
                (0, eY.JG)(
                    eJ.ZP.getUserTag(e, {
                        decoration: 'never',
                        identifiable: 'always'
                    })
                ),
                    ez.default.track(e8.rMx.TEXT_COPIED, { type: 'User Tag' });
                let i = {
                    shouldShowCopiedFeedback: !0,
                    shouldShowNametagTooltip: !0
                };
                t || (i.copiedStreak = n + 1),
                    this.setState(i, () => {
                        this.copiedTimeout.start(1000, () => this.setState({ shouldShowNametagTooltip: !1 })), this.copiedDecayTimeout.start(2000, () => this.setState({ copiedStreak: 0 }));
                    });
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
                    l = void 0 === this.lastSpeakingWhileMutedNotificationTime || Date.now() - this.lastSpeakingWhileMutedNotificationTime > tn;
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
            e7(this, 'renderNameTag', () => {
                let { currentUser: e } = this.props;
                return null == e
                    ? null
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)('div', {
                                  className: e4.panelTitleContainer,
                                  children: (0, i.jsx)(e3.Z, { children: eJ.ZP.getName(e) })
                              }),
                              (0, i.jsx)('div', {
                                  className: e4.panelSubtextContainer,
                                  children: (0, i.jsx)(e1.Z, { children: this.renderStatus() })
                              })
                          ]
                      });
            });
    }
}
function ta(e) {
    let { selfDeaf: t, selfMute: n, awaitingRemote: r, serverMute: s, serverDeaf: l, suppress: a, shouldShowSpeakingWhileMutedTooltip: o, isEligibleForPomelo: c, webBuildOverride: d, handleMouseEnterMute: u, handleMouseLeaveMute: m, handleToggleSelfDeaf: g, handleToggleSelfMute: p, handleInputAudioContextMenu: h, handleOutputAudioContextMenu: b, handleOpenAccountSettings: _, handleOpenSettingsContextMenu: x, dismissibleContents: E, nameplate: C, accountContainerRef: j } = e,
        O = (0, ea.A)(C);
    return (0, i.jsxs)('div', {
        className: e4.buttons,
        style: O,
        children: [
            (0, i.jsx)(td, {
                accountContainerRef: j,
                selfMute: n,
                serverMute: s,
                suppress: a,
                awaitingRemote: r,
                tooltipText: o ? e5.intl.string(e5.t['29gnR0']) : void 0,
                tooltipColor: o ? f.FGA.GREEN : void 0,
                tooltipForceOpen: o || void 0,
                onMouseEnter: u,
                onMouseLeave: m,
                onClick: p,
                onContextMenu: h,
                iconForeground: null != C ? e4.iconForeground : void 0,
                nameplate: C
            }),
            (0, i.jsx)(tu, {
                selfDeaf: t,
                serverDeaf: l,
                onClick: g,
                onContextMenu: b,
                awaitingRemote: r,
                iconForeground: null != C ? e4.iconForeground : void 0,
                nameplate: C
            }),
            (0, i.jsx)(tc, {
                isEligibleForPomelo: c,
                webBuildOverride: d,
                onClick: _,
                onContextMenu: x,
                dismissibleContents: E.settings,
                iconForeground: null != C ? e4.iconForeground : void 0,
                nameplate: C
            })
        ]
    });
}
function to() {
    var e;
    let t = (0, o.e7)([eF.default], () => eF.default.getCurrentUser()),
        n = (0, o.e7)([ew.default], () => ew.default.getId()),
        {
            activities: s,
            streaming: l,
            status: a
        } = (0, o.cj)([eV.Z], () => {
            let e = eV.Z.getActivities();
            return {
                activities: e,
                streaming:
                    null !=
                    e.find((e) => {
                        let { type: t } = e;
                        return t === e8.IIU.STREAMING;
                    }),
                status: eV.Z.getStatus()
            };
        }),
        d = (0, o.e7)([eZ.Z], () => eZ.Z.getAnyStreamForUser(n)),
        u = (0, O.Z)({ userId: n }),
        m = eJ.ZP.useUserTag(t, { decoration: 'never' }),
        g = (0, o.e7)([eG.Z], () => eG.Z.hidePersonalInformation),
        p = (0, o.e7)([eM.Z, ek.Z], () => {
            let e = eM.Z.getChannelId();
            return null != e ? ek.Z.getChannel(e) : null;
        }),
        { mute: h, selfMute: _, suppress: x } = (0, eI.Z)(p),
        { selfDeaf: E, deaf: S } = (0, eT.Z)(p),
        T = (0, o.e7)([Z.C], () => {
            var e;
            return (0, w.fD)() ? (null == (e = Z.C.getCurrentBuildOverride().overrides) ? void 0 : e.discord_web) : null;
        }),
        I = (0, o.e7)([eH.ZP], () => eH.ZP.getPremiumTypeSubscription()),
        N = (0, o.e7)([eB.Z], () => eB.Z.getSpeakingWhileMuted()),
        y = (0, o.e7)([k.Z], () => k.Z.isFullscreenInContext()),
        R = (0, o.e7)([eL.Z], () => eL.Z.hasLayers()),
        D = (0, f.s9z)(f.JQI) || R || eQ.s.isDisallowPopupsSet() || y,
        L = (0, ed.b)(),
        B = (0, o.e7)([$.Z], () => null != $.Z.getAwaitingRemoteSessionInfo()),
        M = (0, o.e7)([eU.Z], () => eU.Z.getGuildId()),
        U = (0, eh.D)(),
        V = (0, C.u)(),
        G = eX.ZP.canUsePremiumGuildMemberProfile(t),
        F = (null == t || null == (e = t.avatarDecoration) ? void 0 : e.skuId) === e6.rL,
        { voiceActivityStatusEnabled: H } = (0, v.U)({ location: 'Account' }),
        { simplifiedSettingsEnabled: Y } = (0, ev.Z)({ location: 'Account' }),
        K = (0, ei.m)(),
        [q, X] = (0, et.G)(null != M ? M : null),
        { customStatusRTCEntrypointEnabled: J, customStatusHoverOnlyRTCEntrypointEnabled: ee } = (0, W.Z)({ location: 'Account' }),
        en = 'account';
    (0, j.j)({
        location: en + ' auto on',
        autoTrackExposure: !0
    }),
        (0, j.j)({
            location: en + ' auto off',
            autoTrackExposure: !1
        });
    let er = (0, o.e7)([e_.Z], () => e_.Z.hasHadOtherUserPlaySoundInSession()),
        es = (function () {
            let e = (0, Q.wE)(c.z.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2),
                [t, n] = (0, o.Wu)([eu.Z], () => [eu.Z.hasFetchedRelevance, eu.Z.profileThemesRelevanceExceeded]),
                [i, s] = (0, o.Wu)([eH.ZP], () => [eH.ZP.hasFetchedMostRecentPremiumTypeSubscription(), eH.ZP.getMostRecentPremiumTypeSubscription()]),
                { enabled: l } = em.Z.useExperiment({ location: '08bd40_1' }, { autoTrackExposure: !0 }),
                a = r.useMemo(() => {
                    let e = new Date().getTime();
                    return null != s && (s.status === e8.O0b.ACTIVE || e - s.currentPeriodEnd.getTime() < tr);
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
        { analyticsLocations: ea } = (0, P.ZP)(A.Z.ACCOUNT),
        eo = (0, el.K)({
            location: 'Account',
            user: t
        }),
        ec = (0, ep.Ws)({ location: e2.dr.CONFLICT_CHECKS }),
        { isEligibleForCustomStatusLabels: eg } = (0, z.Z)({ location: 'AccountConnected' }),
        ef = {
            avatar: [],
            settings: []
        };
    return (
        !D && (es && ef.settings.push(c.z.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2), U && (1 === V ? ef.settings.push(c.z.USER_SAFETY_CONSUMER_EDUCATION_MUTE) : ef.settings.push(c.z.USER_SAFETY_CONSUMER_EDUCATION_BLOCK)), er && ef.settings.push(c.z.SOUNDBOARD_VOLUME_EDUCATION), G && ef.settings.push(c.z.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK), F && ef.avatar.push(c.z.PREMIUM_SUBSCRIPTION_APRIL_MARKETING_DECO_TOOLTIP), K && ef.avatar.push(c.z.EXPIRING_STATUS_COACHMARK), eg && ef.avatar.push(c.z.CUSTOM_STATUS_PROMPTS_COACHMARK)),
        (0, i.jsx)(P.Gt, {
            value: ea,
            children: (0, i.jsx)(tl, {
                currentUser: t,
                activities: s,
                applicationStream: d,
                voiceChannel: p,
                dismissibleContents: ef,
                visibleRecurringAvatarDc: q,
                markRecurringAvatarDcAsDismissed: X,
                userTag: m,
                hidePrivateData: g,
                occluded: D,
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
                awaitingRemote: B,
                isEligibleForPomelo: L,
                simplifiedCallSettingsEnabled: Y,
                voiceActivityStatusEnabled: H,
                nameplate: eo,
                selectedGuildId: M,
                customStatusRTCEntrypointEnabled: J,
                customStatusHoverOnlyRTCEntrypointEnabled: ee,
                isQuestBarEmpty: ec
            })
        })
    );
}
function tc(e) {
    let { webBuildOverride: t, isEligibleForPomelo: n, onClick: s, onContextMenu: l, dismissibleContents: a, iconForeground: o, nameplate: d } = e,
        u = r.useRef(null),
        m = f.ewm,
        g = (0, p.i)();
    m = null != t ? f.bgT : n ? f.Ncx : g.Component;
    let [h, b] = (0, J.US)(a);
    return (0, i.jsx)(f.yRy, {
        targetElementRef: u,
        position: 'top',
        align: 'center',
        shouldShow: null != h,
        renderPopout: h === c.z.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2 ? () => (0, i.jsx)(eg.Z, {}) : h === c.z.USER_SAFETY_CONSUMER_EDUCATION_BLOCK ? () => (0, i.jsx)(ef.Z, { markAsDismissed: b }) : h === c.z.USER_SAFETY_CONSUMER_EDUCATION_MUTE ? () => (0, i.jsx)(eb.Z, { markAsDismissed: b }) : h === c.z.SOUNDBOARD_VOLUME_EDUCATION ? () => (0, i.jsx)(ex.Z, { markAsDismissed: b }) : h === c.z.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK ? () => (0, i.jsx)(eC.Z, {}) : () => (0, i.jsx)(i.Fragment, {}),
        children: () =>
            (0, i.jsx)(
                e0.Z,
                te(
                    e9(
                        {
                            ref: u,
                            tooltipText: null != t ? e5.intl.formatToPlainString(e5.t.Gzh6ZG, { webBuildOverride: t.id }) : e5.intl.string(e5.t.cduTBA),
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
function td(e) {
    let { selfMute: t, serverMute: n, suppress: s, awaitingRemote: c, tooltipText: d, tooltipColor: u, tooltipForceOpen: p, iconForeground: b, onMouseEnter: _, onMouseLeave: x, onClick: E, onContextMenu: C, nameplate: j, accountContainerRef: O } = e,
        S = t || s || n,
        v = r.useRef(null),
        T = r.useRef(null),
        I = (0, m.O)(S ? 'unmute' : 'mute'),
        N = (0, g.P)(S ? 'unmute' : 'mute'),
        { activeVoice: y } = (0, eA.o)(),
        R = null != y,
        D = (0, ey.z)(y),
        Z = (0, o.e7)([eM.Z], () => eM.Z.isConnected()),
        { Component: w, events: k, play: L } = R ? N : I,
        M = n || s ? f.v0G : w,
        { mode: U } = (0, eS.ZP)({ location: 'RTC Microphone Button' }),
        { coloredIconsEnabled: V } = (0, ev.Z)({ location: 'RTC Microphone Button' }),
        G = null != d ? d : (0, B.Z)(t, n, s, c, U === eS.BK.GroupedButtonsRedMic),
        { analyticsLocations: F } = (0, P.ZP)(A.Z.AUDIO_INPUT_BUTTON),
        H = (0, eN.Hu)({
            location: A.Z.AUDIO_INPUT_BUTTON,
            autoTrackExposure: !0
        });
    r.useEffect(() => () => L(), [S, L]);
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
                        X(!0), (e = setTimeout(() => X(!1), ti));
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
                className: e4.micButtonParent,
                children: [
                    (0, i.jsx)(e0.Z, {
                        tooltipText: G,
                        tooltipColor: u,
                        tooltipForceOpen: p,
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
                        className: l()({ [e4.micButtonWithMenu]: H }),
                        redGlow: S && V,
                        'aria-label': e5.intl.string(e5.t['w4m94+']),
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
                            onRequestOpen: eP.r5,
                            onRequestClose: K,
                            shouldShow: W,
                            renderPopout: (e) => {
                                let { closePopout: t } = e;
                                return (0, i.jsx)(eD.l, { onSettingsButtonClick: t });
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
                                    children: (0, i.jsx)(eR.B, {
                                        targetElementRef: T,
                                        onCTA: () => Y(!0),
                                        canBeShown: !s,
                                        children: (e, t) =>
                                            (0, i.jsx)(
                                                e0.Z,
                                                e9(
                                                    {
                                                        ref: T,
                                                        plated: null != j,
                                                        tooltipForceOpen: q,
                                                        tooltipColor: q ? f.FGA.GREEN : void 0,
                                                        tooltipContentClassName: q ? e4.voiceFilterWarning : void 0,
                                                        tooltipText: q
                                                            ? (0, i.jsxs)(i.Fragment, {
                                                                  children: [
                                                                      (0, i.jsx)('img', {
                                                                          alt: null != D ? e5.intl.string(D.name) : '',
                                                                          src: null == D ? void 0 : D.iconURL,
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
                                                            color: V && S ? f.TVs.colors.STATUS_DANGER : f.TVs.colors.TEXT_NORMAL
                                                        }),
                                                        role: 'button',
                                                        className: l()([e4.buttonChevron], { [e4.redGlow]: S && V }),
                                                        redGlow: S && V,
                                                        'aria-label': e5.intl.string(e5.t.Hapb4O),
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
function tu(e) {
    let { selfDeaf: t, serverDeaf: n, awaitingRemote: s, onClick: a, onContextMenu: o, iconForeground: c, nameplate: d } = e,
        m = t || n,
        {
            Component: g,
            play: p,
            events: { onMouseEnter: h, onMouseLeave: b }
        } = (0, u.l)(m ? 'undeafen' : 'deafen'),
        _ = n ? f.Vm4 : g,
        { coloredIconsEnabled: x } = (0, ev.Z)({ location: 'RTC Microphone Button' }),
        { analyticsLocations: E } = (0, P.ZP)(A.Z.AUDIO_OUTPUT_BUTTON);
    r.useEffect(() => () => p(), [m, p]);
    let C = r.useCallback(
        (e) => {
            o(e, E);
        },
        [o, E]
    );
    return (0, i.jsx)(P.Gt, {
        value: E,
        children: (0, i.jsx)(e0.Z, {
            plated: null != d,
            tooltipText: (0, L.Z)(t, n, s),
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
            innerClassName: l()({ [e4.redIcon]: n }),
            iconForeground: m ? e4.strikethrough : void 0,
            role: 'switch',
            redGlow: x && m,
            'aria-label': e5.intl.string(e5.t.wjcRFR),
            'aria-checked': m,
            disabled: s
        })
    });
}
