n.d(t, {
    Z: () => th,
    m: () => tg
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
    p = n(652844),
    h = n(747906),
    f = n(789639),
    b = n(930295),
    _ = n(481060),
    x = n(355467),
    E = n(239091),
    C = n(230711),
    O = n(410575),
    j = n(941129),
    S = n(634894),
    v = n(586902),
    T = n(980591),
    N = n(468363),
    I = n(326255),
    y = n(771173),
    A = n(963056),
    P = n(570928),
    R = n(100527),
    D = n(906732),
    Z = n(676742),
    w = n(1585),
    k = n(304761),
    L = n(865427),
    B = n(358221),
    M = n(571250),
    U = n(628581),
    V = n(55311),
    G = n(575175),
    F = n(522651),
    H = n(795318),
    z = n(526371),
    W = n(64220),
    Y = n(359588),
    K = n(459115),
    q = n(427217),
    X = n(132750),
    Q = n(526031),
    J = n(540059),
    $ = n(605236),
    ee = n(243778),
    et = n(258609),
    en = n(53891),
    ei = n(291533),
    er = n(427347),
    es = n(50697),
    el = n(90042),
    ea = n(78933),
    eo = n(850020),
    ec = n(379839),
    ed = n(359135),
    eu = n(516817),
    em = n(332473),
    eg = n(240504),
    ep = n(637906),
    eh = n(210308),
    ef = n(39370),
    eb = n(667105),
    e_ = n(19199),
    ex = n(212704),
    eE = n(14357),
    eC = n(763296),
    eO = n(640806),
    ej = n(768419),
    eS = n(184301),
    ev = n(52538),
    eT = n(670188),
    eN = n(321614),
    eI = n(879815),
    ey = n(294629),
    eA = n(875527),
    eP = n(702977),
    eR = n(56848),
    eD = n(378441),
    eZ = n(358820),
    ew = n(723547),
    ek = n(361045),
    eL = n(306609),
    eB = n(199902),
    eM = n(314897),
    eU = n(592125),
    eV = n(831506),
    eG = n(819640),
    eF = n(131951),
    eH = n(19780),
    ez = n(914010),
    eW = n(885110),
    eY = n(246946),
    eK = n(594174),
    eq = n(78839),
    eX = n(626135),
    eQ = n(768581),
    eJ = n(572004),
    e$ = n(585483),
    e0 = n(70956),
    e1 = n(823379),
    e3 = n(74538),
    e8 = n(374023),
    e2 = n(51144),
    e6 = n(998502),
    e5 = n(870569),
    e4 = n(345243),
    e7 = n(115530),
    e9 = n(981631),
    te = n(215023),
    tt = n(921944),
    tn = n(46140),
    ti = n(388032),
    tr = n(239692);
function ts(e, t, n) {
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
function tl(e) {
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
                ts(e, t, n[t]);
            });
    }
    return e;
}
function ta(e, t) {
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
let to = e6.ZP.getEnableHardwareAcceleration() ? _.Xo$ : _.qEK,
    tc = 2 * e0.Z.Millis.MINUTE,
    td = 3 * e0.Z.Millis.SECOND,
    tu = 30 * e0.Z.Millis.DAY;
function tm(e) {
    let { ref: t, speaking: n, streaming: s, currentUser: a, status: o, handleClick: c, handleMouseLeave: d, renderNameTag: u, nameplate: m, 'data-jump-section': g } = e,
        p = r.useRef(null),
        h = null != t ? t : p,
        f = (0, J.Q3)('RTC Avatar'),
        b = (0, Z.Z)(null == a ? void 0 : a.avatarDecoration),
        x = (0, eQ.NZ)({
            avatarDecoration: b,
            size: (0, w.y9)(_.EFr.SIZE_32)
        }),
        E = (0, _.dQu)(_.TVs.modules.guildbar.AVATAR_SIZE),
        {
            updateOpenPopoutRef: C,
            highlightBadge: j,
            setHighlightBadge: S
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
                (0, T.Z)(() => l(!0), 750),
                r.useEffect(() => {
                    let t = (t) => {
                        var n;
                        let { highlightBadge: r } = t;
                        null != r && i(r), null == (n = e.current) || n.call(e);
                    };
                    return (
                        e$.S.subscribe(e9.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, t),
                        () => {
                            e$.S.unsubscribe(e9.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, t);
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
        v = (0, ec.A)(m);
    return null == a
        ? null
        : (0, i.jsx)(O.Z, {
              object: e9.qAy.AVATAR,
              children: (0, i.jsx)(eT.Z, {
                  user: a,
                  targetElementRef: h,
                  clickTrap: !0,
                  preload: () =>
                      (0, eS.Z)(a.id, a.getAvatarURL(void 0, eT.I), {
                          type: 'account_popout',
                          withMutualGuilds: !1,
                          withMutualFriends: !1
                      }),
                  renderPopout: (e, t) => {
                      let { closePopout: n, setPopoutRef: r } = e;
                      return (0, i.jsx)(ea.Z, {
                          currentUser: a,
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
                  animation: _.yRy.Animation.FADE,
                  spacing: 14,
                  fixed: !0,
                  onRequestClose: () => {
                      d(), S(void 0);
                  },
                  children: (e) => (
                      C(e),
                      (0, i.jsxs)(
                          _.P3F,
                          ta(
                              tl(
                                  {
                                      innerRef: h,
                                      style: v
                                  },
                                  e
                              ),
                              {
                                  onClick: (t) => {
                                      var n;
                                      null == (n = e.onClick) || n.call(e, t), null == c || c(t);
                                  },
                                  'aria-label': ti.intl.string(ti.t['3Uj+2t']),
                                  'data-jump-section': f ? g : void 0,
                                  className: l()(tr.avatarWrapper, !f && tr.experiment, { [tr.plated]: null != m }),
                                  children: [
                                      (0, i.jsx)(to, {
                                          size: f ? _.EFr['SIZE_'.concat(E)] : _.EFr.SIZE_32,
                                          src: a.getAvatarURL(void 0, f ? E - 4 : 32, !1),
                                          avatarDecoration: x,
                                          'aria-label': a.username,
                                          status: s ? e9.Skl.STREAMING : o,
                                          isSpeaking: n,
                                          className: tr.avatar
                                      }),
                                      (0, i.jsx)('div', {
                                          className: l()(tr.nameTag, { [tr.canCopy]: eJ.wS }),
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
class tg extends r.PureComponent {
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
            t = [ti.intl.string(ti.t.MSaeTU), ti.intl.string(ti.t.UmrCw8), ti.intl.string(ti.t.gKE0Ji), ti.intl.string(ti.t['4DSKbm']), ti.intl.string(ti.t['+8ENdX']), ti.intl.string(ti.t.GlWHv7), ti.intl.string(ti.t.hIzxU1), ti.intl.string(ti.t['26uMPD']), ti.intl.string(ti.t.uFs7R0), ti.intl.string(ti.t.bLXdcX), ti.intl.string(ti.t.gPg9fX)],
            n = Math.min(Math.max(0, e - 1), t.length - 1);
        return (0, i.jsx)(_.UkV, {
            isShaking: this.isCopiedStreakGodlike,
            children: t[n]
        });
    }
    renderStatus() {
        let { hovered: e } = this.state,
            { activities: t, applicationStream: n, currentUser: r, status: s, userTag: l, voiceActivityStatusEnabled: a, voiceChannel: o, customStatusRTCEntrypointEnabled: c, customStatusHoverOnlyRTCEntrypointEnabled: d } = this.props;
        if (null == r) return null;
        if (c || d)
            return (0, i.jsx)(X.Z, {
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
            (0, I.Z)({
                activities: t,
                status: s,
                applicationStream: n,
                voiceChannel: a ? o : void 0
            })
        )
            return (0, i.jsx)(P.Z, {
                hoverText: l,
                forceHover: e,
                children: (0, i.jsx)(y.Z, {
                    location: 'Account',
                    user: r,
                    activities: t,
                    applicationStream: n,
                    voiceChannel: a ? o : void 0,
                    textClassName: tr.activityStatusText,
                    hideTooltip: !0
                })
            });
        let u =
            null == t
                ? void 0
                : t.find((e) => {
                      let { type: t } = e;
                      return t === e9.IIU.CUSTOM_STATUS;
                  });
        return null != u
            ? (0, i.jsx)(P.Z, {
                  hoverText: l,
                  forceHover: e,
                  children: (0, i.jsx)(q.Z, {
                      activity: u,
                      emojiClassName: tr.emoji,
                      className: tr.customStatus
                  })
              })
            : null != s && s !== e9.Skl.UNKNOWN && r.isPomelo()
              ? (0, i.jsx)(P.Z, {
                    hoverText: l,
                    forceHover: e,
                    children: (0, i.jsx)(A.Z, { text: e2.ZP.humanizeStatus(s) })
                })
              : l;
    }
    renderAvatarWithPopout(e) {
        let {
            focusSectionProps: { 'data-jump-section': t },
            onClick: n
        } = e;
        return (0, i.jsx)(
            tm,
            ta(tl({}, this.props), {
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
            return (0, i.jsx)(en.ZP, {
                guildId: null != (l = this.props.selectedGuildId) ? l : null,
                onDismiss: s,
                targetElementRef: this.avatarWithPopoutRef,
                children: () => this.renderAvatarWithPopout({ focusSectionProps: e })
            });
        }
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(eh.Z, {
                    groupName: tt.R.ACCOUNT_NAME_ZONE,
                    targetElementRef: this.avatarWithPopoutRef
                }),
                (0, i.jsx)(ee.ZP, {
                    contentTypes: n.avatar,
                    groupName: tt.R.ACCOUNT_NAME_ZONE,
                    children: (t) => {
                        let { visibleContent: n, markAsDismissed: r } = t;
                        switch (n) {
                            case u.z.PREMIUM_SUBSCRIPTION_APRIL_MARKETING_DECO_TOOLTIP:
                                return (0, i.jsx)(W.Z, {
                                    markAsDismissed: r,
                                    targetElementRef: this.avatarWithPopoutRef,
                                    children: () => this.renderAvatarWithPopout({ focusSectionProps: e })
                                });
                            case u.z.EXPIRING_STATUS_COACHMARK:
                                return (0, i.jsx)(el.Z, {
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
                                return (0, i.jsx)(Q.Z, {
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
            : (0, i.jsx)(_.Wdt, {
                  children: (e) =>
                      (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsxs)('div', {
                                  ref: this.containerRef,
                                  className: l()(tr.container, {
                                      [tr.containerRtcOpened]: null != n,
                                      [tr.containerQuestBarVisible]: !r,
                                      [tr.containerListenAlongVisible]: s
                                  }),
                                  onMouseEnter: this.handleMouseEnter,
                                  onMouseLeave: this.handleMouseLeave,
                                  children: [
                                      (0, i.jsx)(eu.Z, {
                                          nameplate: t,
                                          hovered: a,
                                          placement: ed.i.ACCOUNT
                                      }),
                                      this.renderNameZone(e),
                                      (0, i.jsx)(
                                          tp,
                                          ta(tl({}, this.props, this.state), {
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
                              (0, i.jsx)(er.Z, {}),
                              (0, i.jsx)(z.Z, {})
                          ]
                      })
              });
    }
    constructor(...e) {
        super(...e),
            ts(this, 'copiedTimeout', new m.V7()),
            ts(this, 'copiedDecayTimeout', new m.V7()),
            ts(this, 'speakingWhileMutedTooltipTimeout', new m.V7()),
            ts(this, 'lastSpeakingWhileMutedNotificationTime', void 0),
            ts(this, 'state', {
                hovered: !1,
                copiedStreak: 0,
                shouldShowNametagTooltip: !1,
                shouldShowCopiedFeedback: !1,
                shouldShowSpeakingWhileMutedTooltip: !1,
                hoveringOnMute: !1
            }),
            ts(this, 'containerRef', r.createRef()),
            ts(this, 'avatarWithPopoutRef', r.createRef()),
            ts(this, 'handleToggleSelfMute', () => {
                let { serverMute: e, suppress: t, selfMute: n } = this.props;
                (0, G.Z)(e, t, e9.jXE.ACCOUNT_PANEL), (0, F.v)(R.Z.ACCOUNT, F.d.MIC, n);
            }),
            ts(this, 'handleToggleSelfDeaf', () => {
                let { serverDeaf: e, selfDeaf: t } = this.props;
                (0, V.Z)(e, e9.jXE.ACCOUNT_PANEL), (0, F.v)(R.Z.ACCOUNT, F.d.DEAFEN, !t);
            }),
            ts(this, 'handleOpenAccountSettings', () => {
                this.handleOpenSettings();
            }),
            ts(this, 'handleOpenSettings', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e9.oAB.ACCOUNT,
                    t = arguments.length > 1 ? arguments[1] : void 0,
                    n = arguments.length > 2 ? arguments[2] : void 0;
                C.Z.open(e, t, n);
            }),
            ts(this, 'handleOpenSettingsContextMenu', (e) => {
                let { currentUser: t } = this.props;
                null != t &&
                    (0, E.jW)(e, async () => {
                        let { default: e } = await n.e('2535').then(n.bind(n, 923422));
                        return (n) =>
                            (0, i.jsx)(
                                e,
                                ta(tl({}, n), {
                                    user: t,
                                    premiumSubscription: this.props.premiumSubscription,
                                    webBuildOverride: this.props.webBuildOverride,
                                    onInteraction: (0, H.u)('UserSettingsCogContextMenu', R.Z.ACCOUNT)
                                })
                            );
                    });
            }),
            ts(this, 'audioOnInteractionHandler', (0, H.u)('AudioDeviceMenu', R.Z.ACCOUNT)),
            ts(this, 'handleInputAudioContextMenu', (e, t) => {
                (0, E.jW)(e, async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 659580));
                    return () => {
                        let { enabledInputProfiles: n } = (0, eN.c)({ location: 'Account' });
                        return (0, i.jsx)(D.Gt, {
                            value: t,
                            children: (0, i.jsx)(e, {
                                onClose: E.Zy,
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
            ts(this, 'handleOutputAudioContextMenu', (e, t) => {
                (0, E.jW)(e, async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 659580));
                    return () =>
                        (0, i.jsx)(D.Gt, {
                            value: t,
                            children: (0, i.jsx)(e, {
                                onClose: E.Zy,
                                renderOutputDevices: !0,
                                renderOutputVolume: !0,
                                minimal: !0,
                                onInteraction: this.audioOnInteractionHandler
                            })
                        });
                });
            }),
            ts(this, 'handleMouseEnter', () => {
                this.setState({ hovered: !0 });
            }),
            ts(this, 'handleMouseLeave', () => {
                this.setState({ hovered: !1 });
            }),
            ts(this, 'handleMouseEnterMute', () => {
                this.setState({
                    hoveringOnMute: !0,
                    shouldShowSpeakingWhileMutedTooltip: !1
                }),
                    this.speakingWhileMutedTooltipTimeout.stop();
            }),
            ts(this, 'handleMouseLeaveMute', () => {
                this.setState({ hoveringOnMute: !1 });
            }),
            ts(this, 'handleCopyTag', () => {
                let { currentUser: e } = this.props,
                    { shouldShowNametagTooltip: t, copiedStreak: n } = this.state;
                if (null == e) return;
                (0, eJ.JG)(
                    e2.ZP.getUserTag(e, {
                        decoration: 'never',
                        identifiable: 'always'
                    })
                ),
                    eX.default.track(e9.rMx.TEXT_COPIED, { type: 'User Tag' });
                let i = {
                    shouldShowCopiedFeedback: !0,
                    shouldShowNametagTooltip: !0
                };
                t || (i.copiedStreak = n + 1),
                    this.setState(i, () => {
                        this.copiedTimeout.start(1000, () => this.setState({ shouldShowNametagTooltip: !1 })), this.copiedDecayTimeout.start(2000, () => this.setState({ copiedStreak: 0 }));
                    });
            }),
            ts(this, 'handleOccludedChanged', () => {
                let { occluded: e } = this.props;
                e &&
                    this.setState({
                        shouldShowNametagTooltip: !1,
                        shouldShowSpeakingWhileMutedTooltip: !1
                    });
            }),
            ts(this, 'handleSpeakingWhileMutedChanged', () => {
                let { selfMute: e, serverMute: t, suppress: n, speakingWhileMuted: i, occluded: r } = this.props,
                    { hoveringOnMute: s } = this.state,
                    l = void 0 === this.lastSpeakingWhileMutedNotificationTime || Date.now() - this.lastSpeakingWhileMutedNotificationTime > tc;
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
            ts(this, 'renderNameTag', () => {
                let { currentUser: e } = this.props;
                return null == e
                    ? null
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)('div', {
                                  className: tr.panelTitleContainer,
                                  children: (0, i.jsx)(e7.Z, { children: e2.ZP.getName(e) })
                              }),
                              (0, i.jsx)('div', {
                                  className: tr.panelSubtextContainer,
                                  children: (0, i.jsx)(e4.Z, { children: this.renderStatus() })
                              })
                          ]
                      });
            });
    }
}
function tp(e) {
    let { selfDeaf: t, selfMute: n, awaitingRemote: r, serverMute: s, serverDeaf: l, suppress: a, shouldShowSpeakingWhileMutedTooltip: o, isEligibleForPomelo: c, webBuildOverride: d, handleMouseEnterMute: u, handleMouseLeaveMute: m, handleToggleSelfDeaf: g, handleToggleSelfMute: p, handleInputAudioContextMenu: h, handleOutputAudioContextMenu: f, handleOpenAccountSettings: b, handleOpenSettingsContextMenu: x, dismissibleContents: E, nameplate: C, accountContainerRef: O } = e,
        j = (0, ec.A)(C);
    return (0, i.jsxs)('div', {
        className: tr.buttons,
        style: j,
        children: [
            (0, i.jsx)(tb, {
                accountContainerRef: O,
                selfMute: n,
                serverMute: s,
                suppress: a,
                awaitingRemote: r,
                tooltipText: o ? ti.intl.string(ti.t['29gnR0']) : void 0,
                tooltipColor: o ? _.FGA.GREEN : void 0,
                tooltipForceOpen: o || void 0,
                onMouseEnter: u,
                onMouseLeave: m,
                onClick: p,
                onContextMenu: h,
                iconForeground: null != C ? tr.iconForeground : void 0,
                nameplate: C
            }),
            (0, i.jsx)(t_, {
                selfDeaf: t,
                serverDeaf: l,
                onClick: g,
                onContextMenu: f,
                awaitingRemote: r,
                iconForeground: null != C ? tr.iconForeground : void 0,
                nameplate: C
            }),
            (0, i.jsx)(tf, {
                isEligibleForPomelo: c,
                webBuildOverride: d,
                onClick: b,
                onContextMenu: x,
                dismissibleContents: E.settings,
                iconForeground: null != C ? tr.iconForeground : void 0,
                nameplate: C
            })
        ]
    });
}
function th() {
    var e;
    let t = (0, d.e7)([eK.default], () => eK.default.getCurrentUser()),
        n = (0, d.e7)([eM.default], () => eM.default.getId()),
        {
            activities: s,
            streaming: l,
            status: a
        } = (0, d.cj)([eW.Z], () => {
            let e = eW.Z.getActivities();
            return {
                activities: e,
                streaming:
                    null !=
                    e.find((e) => {
                        let { type: t } = e;
                        return t === e9.IIU.STREAMING;
                    }),
                status: eW.Z.getStatus()
            };
        }),
        c = (0, d.e7)([eB.Z], () => eB.Z.getAnyStreamForUser(n)),
        m = (0, v.Z)({ userId: n }),
        g = e2.ZP.useUserTag(t, { decoration: 'never' }),
        p = (0, d.e7)([eY.Z], () => eY.Z.hidePersonalInformation),
        h = (0, d.e7)([eH.Z, eU.Z], () => {
            let e = eH.Z.getChannelId();
            return null != e ? eU.Z.getChannel(e) : null;
        }),
        { mute: f, selfMute: b, suppress: E } = (0, ey.Z)(h),
        { selfDeaf: C, deaf: O } = (0, eI.Z)(h),
        T = (0, d.e7)([k.C], () => {
            var e;
            return (0, L.fD)() ? (null == (e = k.C.getCurrentBuildOverride().overrides) ? void 0 : e.discord_web) : null;
        }),
        I = (0, d.e7)([eq.ZP], () => eq.ZP.getPremiumTypeSubscription()),
        y = (0, d.e7)([eF.Z], () => eF.Z.getSpeakingWhileMuted()),
        A = (0, d.e7)([B.Z], () => B.Z.isFullscreenInContext()),
        P = (0, d.e7)([eG.Z], () => eG.Z.hasLayers()),
        Z = (0, _.s9z)(_.JQI) || P || e8.s.isDisallowPopupsSet() || A,
        w = (0, em.b)(),
        M = (0, d.e7)([et.Z], () => null != et.Z.getAwaitingRemoteSessionInfo()),
        U = (0, d.e7)([ez.Z], () => ez.Z.getGuildId()),
        V = (0, e_.D)(),
        G = (0, j.u)(),
        F = e3.ZP.canUsePremiumGuildMemberProfile(t),
        H = (null == t || null == (e = t.avatarDecoration) ? void 0 : e.skuId) === te.rL,
        { voiceActivityStatusEnabled: z } = (0, N.U)({ location: 'Account' }),
        W = (0, es.m)(),
        [q, X] = (0, ei.G)(null != U ? U : null),
        { customStatusRTCEntrypointEnabled: Q, customStatusHoverOnlyRTCEntrypointEnabled: J } = (0, K.Z)({ location: 'Account' }),
        ee = 'account';
    (0, S.j)({
        location: ee + ' auto on',
        autoTrackExposure: !0
    }),
        (0, S.j)({
            location: ee + ' auto off',
            autoTrackExposure: !1
        });
    let en = (0, d.e7)([eC.Z], () => eC.Z.hasHadOtherUserPlaySoundInSession()),
        er = (function () {
            let e = (0, $.wE)(u.z.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2),
                [t, n] = (0, d.Wu)([eg.Z], () => [eg.Z.hasFetchedRelevance, eg.Z.profileThemesRelevanceExceeded]),
                [i, s] = (0, d.Wu)([eq.ZP], () => [eq.ZP.hasFetchedMostRecentPremiumTypeSubscription(), eq.ZP.getMostRecentPremiumTypeSubscription()]),
                { enabled: l } = ep.Z.useExperiment({ location: '08bd40_1' }, { autoTrackExposure: !0 }),
                a = r.useMemo(() => {
                    let e = new Date().getTime();
                    return null != s && (s.status === e9.O0b.ACTIVE || e - s.currentPeriodEnd.getTime() < tu);
                }, [s]);
            return (
                r.useEffect(() => {
                    (async () => {
                        if (!e && null == n && l) {
                            if (!i) return await (0, x.ou)();
                            !a && (t || (await (0, x.l0)()));
                        }
                    })();
                }, [l, n, e, i, t, a]),
                !e && !!l && !a && null != n && n
            );
        })(),
        { analyticsLocations: el } = (0, D.ZP)(R.Z.ACCOUNT),
        ea = (0, eo.K)({
            location: 'Account',
            user: t
        }),
        ec = (0, eb.Ws)({ location: tn.dr.CONFLICT_CHECKS }),
        ed = (0, d.e7)([ej.Z, eK.default, eV.Z], () => {
            let e,
                t = ej.Z.getSyncingWith(),
                n = ej.Z.getActivity(),
                i = [];
            if ((null != t ? (e = t.partyId) : null != n && null != n.party && null != n.party.id && (e = n.party.id), null != e)) {
                var r;
                i = o()(Array.from(null != (r = eV.Z.getParty(e)) ? r : []))
                    .map((e) => eK.default.getUser(e))
                    .filter(e1.lm)
                    .value();
            }
            return i.length > 1;
        }),
        eu = (0, Y.Z)({ location: 'AccountConnected' }),
        eh = {
            avatar: [],
            settings: []
        };
    return (
        !Z && (er && eh.settings.push(u.z.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2), V && (1 === G ? eh.settings.push(u.z.USER_SAFETY_CONSUMER_EDUCATION_MUTE) : eh.settings.push(u.z.USER_SAFETY_CONSUMER_EDUCATION_BLOCK)), en && eh.settings.push(u.z.SOUNDBOARD_VOLUME_EDUCATION), F && eh.settings.push(u.z.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK), H && eh.avatar.push(u.z.PREMIUM_SUBSCRIPTION_APRIL_MARKETING_DECO_TOOLTIP), W && eh.avatar.push(u.z.EXPIRING_STATUS_COACHMARK), eu && eh.avatar.push(u.z.CUSTOM_STATUS_PROMPTS_COACHMARK)),
        (0, i.jsx)(D.Gt, {
            value: el,
            children: (0, i.jsx)(tg, {
                currentUser: t,
                activities: s,
                applicationStream: c,
                voiceChannel: h,
                dismissibleContents: eh,
                visibleRecurringAvatarDc: q,
                markRecurringAvatarDcAsDismissed: X,
                userTag: g,
                hidePrivateData: p,
                occluded: Z,
                premiumSubscription: I,
                selfDeaf: C,
                selfMute: b,
                serverDeaf: O,
                serverMute: f,
                speaking: m,
                speakingWhileMuted: y,
                status: a,
                streaming: l,
                suppress: E,
                webBuildOverride: T,
                awaitingRemote: M,
                isEligibleForPomelo: w,
                voiceActivityStatusEnabled: z,
                nameplate: ea,
                selectedGuildId: U,
                customStatusRTCEntrypointEnabled: Q,
                customStatusHoverOnlyRTCEntrypointEnabled: J,
                isQuestBarEmpty: ec,
                isListenAlongVisible: ed
            })
        })
    );
}
function tf(e) {
    let { webBuildOverride: t, isEligibleForPomelo: n, onClick: s, onContextMenu: l, dismissibleContents: a, iconForeground: o, nameplate: c } = e,
        d = r.useRef(null),
        m = _.ewm,
        g = (0, f.i)();
    m = null != t ? _.bgT : n ? _.Ncx : g.Component;
    let [p, h] = (0, ee.US)(a);
    return (0, i.jsx)(_.yRy, {
        targetElementRef: d,
        position: 'top',
        align: 'center',
        shouldShow: null != p,
        renderPopout: p === u.z.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2 ? () => (0, i.jsx)(ef.Z, {}) : p === u.z.USER_SAFETY_CONSUMER_EDUCATION_BLOCK ? () => (0, i.jsx)(ex.Z, { markAsDismissed: h }) : p === u.z.USER_SAFETY_CONSUMER_EDUCATION_MUTE ? () => (0, i.jsx)(eE.Z, { markAsDismissed: h }) : p === u.z.SOUNDBOARD_VOLUME_EDUCATION ? () => (0, i.jsx)(eO.Z, { markAsDismissed: h }) : p === u.z.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK ? () => (0, i.jsx)(ev.Z, {}) : () => (0, i.jsx)(i.Fragment, {}),
        children: () =>
            (0, i.jsx)(
                e5.Z,
                ta(
                    tl(
                        {
                            ref: d,
                            tooltipText: null != t ? ti.intl.formatToPlainString(ti.t.Gzh6ZG, { webBuildOverride: t.id }) : ti.intl.string(ti.t.cduTBA),
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
function tb(e) {
    let { selfMute: t, serverMute: n, suppress: s, awaitingRemote: a, tooltipText: o, tooltipColor: u, tooltipForceOpen: m, iconForeground: g, onMouseEnter: f, onMouseLeave: x, onClick: E, onContextMenu: C, nameplate: O, accountContainerRef: j } = e,
        S = t || s || n,
        v = r.useRef(null),
        T = r.useRef(null),
        N = (0, p.O)(S ? 'unmute' : 'mute'),
        I = (0, h.P)(S ? 'unmute' : 'mute'),
        { activeVoice: y } = (0, eD.o)(),
        A = null != y,
        P = (0, eR.z)(y),
        Z = (0, d.e7)([eH.Z], () => eH.Z.isConnected()),
        { Component: w, events: k, play: L } = A ? I : N,
        B = n || s ? _.v0G : w,
        M = null != o ? o : (0, U.Z)(t, n, s, a),
        { analyticsLocations: V } = (0, D.ZP)(R.Z.AUDIO_INPUT_BUTTON),
        G = (0, eA.Hu)({
            location: R.Z.AUDIO_INPUT_BUTTON,
            autoTrackExposure: !0
        }),
        F = (0, eP.av)({
            location: R.Z.AUDIO_INPUT_BUTTON,
            autoTrackExposure: !0
        });
    r.useEffect(() => () => L(), [S, L]);
    let H = r.useCallback(
            (e) => {
                C(e, V);
            },
            [C, V]
        ),
        [z, W] = r.useState(!1),
        Y = r.useCallback((e) => {
            var t;
            if ((0, c.k)(null == e ? void 0 : e.target, Node) && (null == (t = v.current) ? void 0 : t.contains(e.target))) return b.F;
            W(!1);
        }, []),
        [K, q] = r.useState(!1);
    return (
        r.useEffect(() => {
            let e;
            return (
                Z &&
                    A &&
                    (e = setTimeout(() => {
                        q(!0), (e = setTimeout(() => q(!1), td));
                    }, 300)),
                () => {
                    q(!1), clearTimeout(e);
                }
            );
        }, [Z]),
        (0, i.jsx)(D.Gt, {
            value: V,
            children: (0, i.jsxs)('div', {
                ref: v,
                className: tr.micButtonParent,
                children: [
                    (0, i.jsx)(e5.Z, {
                        tooltipText: M,
                        tooltipColor: u,
                        tooltipForceOpen: m,
                        plated: null != O,
                        onMouseEnter: () => {
                            f(), k.onMouseEnter();
                        },
                        onMouseLeave: () => {
                            x(), k.onMouseLeave();
                        },
                        icon: (0, i.jsx)(B, {
                            size: 'custom',
                            width: 20,
                            height: 20,
                            color: S ? _.TVs.colors.STATUS_DANGER : 'currentColor',
                            className: g
                        }),
                        onClick: E,
                        onContextMenu: H,
                        role: 'switch',
                        className: l()({ [tr.micButtonWithMenu]: G }),
                        redGlow: S,
                        'aria-label': ti.intl.string(ti.t['w4m94+']),
                        'aria-checked': S,
                        disabled: a
                    }),
                    G &&
                        (0, i.jsx)(_.yRy, {
                            targetElementRef: j,
                            position: 'top',
                            align: 'left',
                            nudgeAlignIntoViewport: !1,
                            animation: _.yRy.Animation.FADE,
                            useMouseEnter: !0,
                            ignoreModalClicks: !0,
                            onRequestOpen: eZ.r5,
                            onRequestClose: Y,
                            shouldShow: z,
                            renderPopout: (e) => {
                                let { closePopout: t } = e;
                                return (0, i.jsx)(eL.l, { onSettingsButtonClick: t });
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
                                let o = s ? _.u04 : _.CJ0;
                                return (0, i.jsx)('div', {
                                    children: (0, i.jsx)(ek.n, {
                                        targetElementRef: T,
                                        onCTA: () => W(!0),
                                        canBeShown: !s,
                                        children: (e, t) =>
                                            (0, i.jsx)(ew.v, {
                                                targetElementRef: T,
                                                onCTA: () => W(!0),
                                                canBeShown: F && Z && !A && !e && !s,
                                                children: (e, s) =>
                                                    (0, i.jsx)(
                                                        e5.Z,
                                                        tl(
                                                            {
                                                                ref: T,
                                                                plated: null != O,
                                                                tooltipForceOpen: K,
                                                                tooltipColor: K ? _.FGA.GREEN : void 0,
                                                                tooltipContentClassName: K ? tr.voiceFilterWarning : void 0,
                                                                tooltipText: K
                                                                    ? (0, i.jsxs)(i.Fragment, {
                                                                          children: [
                                                                              (0, i.jsx)('img', {
                                                                                  alt: null != P ? ti.intl.string(P.name) : '',
                                                                                  src: null == P ? void 0 : P.iconURL,
                                                                                  draggable: !1
                                                                              }),
                                                                              (0, i.jsx)(_.Text, {
                                                                                  variant: 'text-sm/medium',
                                                                                  color: 'always-white',
                                                                                  children: ti.intl.string(ti.t.VlC1dX)
                                                                              })
                                                                          ]
                                                                      })
                                                                    : ti.intl.string(ti.t.Hapb4O),
                                                                icon: (0, i.jsx)(o, {
                                                                    className: tr.buttonChevronIcon,
                                                                    size: 'custom',
                                                                    width: 12,
                                                                    height: 12,
                                                                    color: S ? _.TVs.colors.STATUS_DANGER : _.TVs.colors.TEXT_NORMAL
                                                                }),
                                                                role: 'button',
                                                                className: l()([tr.buttonChevron], { [tr.redGlow]: S }),
                                                                redGlow: S,
                                                                'aria-label': ti.intl.string(ti.t.Hapb4O),
                                                                disabled: a,
                                                                onClick: (e) => {
                                                                    null == t || t(), null == s || s(), n(e), W(!z);
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
        })
    );
}
function t_(e) {
    let { selfDeaf: t, serverDeaf: n, awaitingRemote: s, onClick: a, onContextMenu: o, iconForeground: c, nameplate: d } = e,
        u = t || n,
        {
            Component: m,
            play: p,
            events: { onMouseEnter: h, onMouseLeave: f }
        } = (0, g.l)(u ? 'undeafen' : 'deafen'),
        b = n ? _.Vm4 : m,
        { analyticsLocations: x } = (0, D.ZP)(R.Z.AUDIO_OUTPUT_BUTTON);
    r.useEffect(() => () => p(), [u, p]);
    let E = r.useCallback(
        (e) => {
            o(e, x);
        },
        [o, x]
    );
    return (0, i.jsx)(D.Gt, {
        value: x,
        children: (0, i.jsx)(e5.Z, {
            plated: null != d,
            tooltipText: (0, M.Z)(t, n, s),
            onMouseEnter: h,
            onMouseLeave: f,
            icon: (0, i.jsx)(b, {
                size: 'custom',
                width: 20,
                height: 20,
                color: u ? _.TVs.colors.STATUS_DANGER : 'currentColor',
                className: c
            }),
            onClick: a,
            onContextMenu: E,
            innerClassName: l()({ [tr.redIcon]: n }),
            iconForeground: u ? tr.strikethrough : void 0,
            role: 'switch',
            redGlow: u,
            'aria-label': ti.intl.string(ti.t.wjcRFR),
            'aria-checked': u,
            disabled: s
        })
    });
}
