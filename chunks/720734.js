n.d(t, {
    Z: () => tx,
    m: () => tb
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
    j = n(410575),
    O = n(941129),
    S = n(634894),
    v = n(586902),
    T = n(980591),
    I = n(468363),
    N = n(326255),
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
    z = n(338390),
    Y = n(526371),
    W = n(64220),
    K = n(359588),
    q = n(459115),
    X = n(427217),
    Q = n(132750),
    J = n(526031),
    $ = n(540059),
    ee = n(605236),
    et = n(243778),
    en = n(258609),
    ei = n(53891),
    er = n(291533),
    es = n(427347),
    el = n(50697),
    ea = n(90042),
    eo = n(78933),
    ec = n(850020),
    ed = n(379839),
    eu = n(359135),
    em = n(516817),
    eg = n(332473),
    ep = n(240504),
    eh = n(637906),
    ef = n(210308),
    eb = n(39370),
    e_ = n(667105),
    ex = n(19199),
    eE = n(212704),
    eC = n(14357),
    ej = n(763296),
    eO = n(640806),
    eS = n(768419),
    ev = n(184301),
    eT = n(52538),
    eI = n(670188),
    eN = n(321614),
    ey = n(879815),
    eA = n(294629),
    eP = n(875527),
    eR = n(702977),
    eD = n(56848),
    eZ = n(940315),
    ew = n(378441),
    ek = n(358820),
    eL = n(723547),
    eB = n(361045),
    eM = n(306609),
    eU = n(170293),
    eV = n(199902),
    eG = n(314897),
    eF = n(592125),
    eH = n(831506),
    ez = n(819640),
    eY = n(131951),
    eW = n(19780),
    eK = n(914010),
    eq = n(885110),
    eX = n(246946),
    eQ = n(594174),
    eJ = n(78839),
    e$ = n(626135),
    e0 = n(768581),
    e1 = n(572004),
    e3 = n(459273),
    e8 = n(585483),
    e6 = n(70956),
    e2 = n(823379),
    e5 = n(74538),
    e4 = n(374023),
    e7 = n(51144),
    e9 = n(998502),
    te = n(870569),
    tt = n(345243),
    tn = n(115530),
    ti = n(981631),
    tr = n(215023),
    ts = n(921944),
    tl = n(46140),
    ta = n(388032),
    to = n(239692);
function tc(e, t, n) {
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
function td(e) {
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
                tc(e, t, n[t]);
            });
    }
    return e;
}
function tu(e, t) {
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
let tm = e9.ZP.getEnableHardwareAcceleration() ? _.Xo$ : _.qEK,
    tg = 2 * e6.Z.Millis.MINUTE,
    tp = 3 * e6.Z.Millis.SECOND,
    th = 30 * e6.Z.Millis.DAY;
function tf(e) {
    let { ref: t, speaking: n, streaming: s, currentUser: a, status: o, handleClick: c, handleMouseLeave: d, renderNameTag: u, nameplate: m, 'data-jump-section': g } = e,
        p = r.useRef(null),
        h = null != t ? t : p,
        f = (0, $.Q3)('RTC Avatar'),
        b = (0, Z.Z)(null == a ? void 0 : a.avatarDecoration),
        x = (0, e0.NZ)({
            avatarDecoration: b,
            size: (0, w.y9)(_.EFr.SIZE_32)
        }),
        E = (0, _.dQu)(_.TVs.modules.guildbar.AVATAR_SIZE),
        C = (0, z.Z)('Account') ? 32 : E,
        {
            updateOpenPopoutRef: O,
            highlightBadge: S,
            setHighlightBadge: v
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
                        e8.S.subscribe(ti.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, t),
                        () => {
                            e8.S.unsubscribe(ti.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, t);
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
        I = (0, ed.A)(m);
    return null == a
        ? null
        : (0, i.jsx)(j.Z, {
              object: ti.qAy.AVATAR,
              children: (0, i.jsx)(eI.Z, {
                  user: a,
                  targetElementRef: h,
                  clickTrap: !0,
                  preload: () =>
                      (0, ev.Z)(a.id, a.getAvatarURL(void 0, eI.I), {
                          type: 'account_popout',
                          withMutualGuilds: !1,
                          withMutualFriends: !1
                      }),
                  renderPopout: (e, t) => {
                      let { closePopout: n, setPopoutRef: r } = e;
                      return (0, i.jsx)(eo.Z, {
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
                  animation: _.yRy.Animation.FADE,
                  spacing: 14,
                  fixed: !0,
                  onRequestClose: () => {
                      d(), v(void 0);
                  },
                  children: (e) => (
                      O(e),
                      (0, i.jsxs)(
                          _.P3F,
                          tu(
                              td(
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
                                  'aria-label': ta.intl.string(ta.t['3Uj+2t']),
                                  'data-jump-section': f ? g : void 0,
                                  className: l()(to.avatarWrapper, !f && to.experiment, { [to.plated]: null != m }),
                                  children: [
                                      (0, i.jsx)(tm, {
                                          size: f ? _.EFr['SIZE_'.concat(C)] : _.EFr.SIZE_32,
                                          src: a.getAvatarURL(void 0, f ? C - 4 : 32, !1),
                                          avatarDecoration: x,
                                          'aria-label': a.username,
                                          status: s ? ti.Skl.STREAMING : o,
                                          isSpeaking: n,
                                          className: to.avatar
                                      }),
                                      (0, i.jsx)('div', {
                                          className: l()(to.nameTag, { [to.canCopy]: e1.wS }),
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
class tb extends r.PureComponent {
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
            t = [ta.intl.string(ta.t.MSaeTU), ta.intl.string(ta.t.UmrCw8), ta.intl.string(ta.t.gKE0Ji), ta.intl.string(ta.t['4DSKbm']), ta.intl.string(ta.t['+8ENdX']), ta.intl.string(ta.t.GlWHv7), ta.intl.string(ta.t.hIzxU1), ta.intl.string(ta.t['26uMPD']), ta.intl.string(ta.t.uFs7R0), ta.intl.string(ta.t.bLXdcX), ta.intl.string(ta.t.gPg9fX)],
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
            return (0, i.jsx)(Q.Z, {
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
            (0, N.Z)({
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
                    textClassName: to.activityStatusText,
                    hideTooltip: !0
                })
            });
        let u =
            null == t
                ? void 0
                : t.find((e) => {
                      let { type: t } = e;
                      return t === ti.IIU.CUSTOM_STATUS;
                  });
        return null != u
            ? (0, i.jsx)(P.Z, {
                  hoverText: l,
                  forceHover: e,
                  children: (0, i.jsx)(X.Z, {
                      activity: u,
                      emojiClassName: to.emoji,
                      className: to.customStatus
                  })
              })
            : null != s && s !== ti.Skl.UNKNOWN && r.isPomelo()
              ? (0, i.jsx)(P.Z, {
                    hoverText: l,
                    forceHover: e,
                    children: (0, i.jsx)(A.Z, { text: e7.ZP.humanizeStatus(s) })
                })
              : l;
    }
    renderAvatarWithPopout(e) {
        let {
            focusSectionProps: { 'data-jump-section': t },
            onClick: n
        } = e;
        return (0, i.jsx)(
            tf,
            tu(td({}, this.props), {
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
            return (0, i.jsx)(ei.ZP, {
                guildId: null != (l = this.props.selectedGuildId) ? l : null,
                onDismiss: s,
                targetElementRef: this.avatarWithPopoutRef,
                children: () => this.renderAvatarWithPopout({ focusSectionProps: e })
            });
        }
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(ef.Z, {
                    groupName: ts.R.ACCOUNT_NAME_ZONE,
                    targetElementRef: this.avatarWithPopoutRef
                }),
                (0, i.jsx)(et.ZP, {
                    contentTypes: n.avatar,
                    groupName: ts.R.ACCOUNT_NAME_ZONE,
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
                                return (0, i.jsx)(ea.Z, {
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
                                return (0, i.jsx)(J.Z, {
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
                                  className: l()(to.container, {
                                      [to.containerRtcOpened]: null != n,
                                      [to.containerQuestBarVisible]: !r,
                                      [to.containerListenAlongVisible]: s
                                  }),
                                  onMouseEnter: this.handleMouseEnter,
                                  onMouseLeave: this.handleMouseLeave,
                                  children: [
                                      (0, i.jsx)(em.Z, {
                                          nameplate: t,
                                          hovered: a,
                                          placement: eu.i.ACCOUNT
                                      }),
                                      this.renderNameZone(e),
                                      (0, i.jsx)(
                                          t_,
                                          tu(td({}, this.props, this.state), {
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
                              (0, i.jsx)(es.Z, {}),
                              (0, i.jsx)(Y.Z, {})
                          ]
                      })
              });
    }
    constructor(...e) {
        super(...e),
            tc(this, 'copiedTimeout', new m.V7()),
            tc(this, 'copiedDecayTimeout', new m.V7()),
            tc(this, 'speakingWhileMutedTooltipTimeout', new m.V7()),
            tc(this, 'lastSpeakingWhileMutedNotificationTime', void 0),
            tc(this, 'state', {
                hovered: !1,
                copiedStreak: 0,
                shouldShowNametagTooltip: !1,
                shouldShowCopiedFeedback: !1,
                shouldShowSpeakingWhileMutedTooltip: !1,
                hoveringOnMute: !1
            }),
            tc(this, 'containerRef', r.createRef()),
            tc(this, 'avatarWithPopoutRef', r.createRef()),
            tc(this, 'handleToggleSelfMute', () => {
                let { serverMute: e, suppress: t, selfMute: n } = this.props;
                (0, G.Z)(e, t, ti.jXE.ACCOUNT_PANEL), (0, F.v)(R.Z.ACCOUNT, F.d.MIC, n);
            }),
            tc(this, 'handleToggleSelfDeaf', () => {
                let { serverDeaf: e, selfDeaf: t } = this.props;
                (0, V.Z)(e, ti.jXE.ACCOUNT_PANEL), (0, F.v)(R.Z.ACCOUNT, F.d.DEAFEN, !t);
            }),
            tc(this, 'handleOpenAccountSettings', () => {
                this.handleOpenSettings();
            }),
            tc(this, 'handleOpenSettings', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ti.oAB.ACCOUNT,
                    t = arguments.length > 1 ? arguments[1] : void 0,
                    n = arguments.length > 2 ? arguments[2] : void 0;
                C.Z.open(e, t, n);
            }),
            tc(this, 'handleOpenSettingsContextMenu', (e) => {
                let { currentUser: t } = this.props;
                null != t &&
                    (0, E.jW)(e, async () => {
                        let { default: e } = await n.e('2535').then(n.bind(n, 923422));
                        return (n) =>
                            (0, i.jsx)(
                                e,
                                tu(td({}, n), {
                                    user: t,
                                    premiumSubscription: this.props.premiumSubscription,
                                    webBuildOverride: this.props.webBuildOverride,
                                    onInteraction: (0, H.u)('UserSettingsCogContextMenu', R.Z.ACCOUNT)
                                })
                            );
                    });
            }),
            tc(this, 'audioOnInteractionHandler', (0, H.u)('AudioDeviceMenu', R.Z.ACCOUNT)),
            tc(this, 'handleInputAudioContextMenu', (e, t) => {
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
            tc(this, 'handleOutputAudioContextMenu', (e, t) => {
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
            tc(this, 'handleMouseEnter', () => {
                this.setState({ hovered: !0 });
            }),
            tc(this, 'handleMouseLeave', () => {
                this.setState({ hovered: !1 });
            }),
            tc(this, 'handleMouseEnterMute', () => {
                this.setState({
                    hoveringOnMute: !0,
                    shouldShowSpeakingWhileMutedTooltip: !1
                }),
                    this.speakingWhileMutedTooltipTimeout.stop();
            }),
            tc(this, 'handleMouseLeaveMute', () => {
                this.setState({ hoveringOnMute: !1 });
            }),
            tc(this, 'handleCopyTag', () => {
                let { currentUser: e } = this.props,
                    { shouldShowNametagTooltip: t, copiedStreak: n } = this.state;
                if (null == e) return;
                (0, e1.JG)(
                    e7.ZP.getUserTag(e, {
                        decoration: 'never',
                        identifiable: 'always'
                    })
                ),
                    e$.default.track(ti.rMx.TEXT_COPIED, { type: 'User Tag' });
                let i = {
                    shouldShowCopiedFeedback: !0,
                    shouldShowNametagTooltip: !0
                };
                t || (i.copiedStreak = n + 1),
                    this.setState(i, () => {
                        this.copiedTimeout.start(1000, () => this.setState({ shouldShowNametagTooltip: !1 })), this.copiedDecayTimeout.start(2000, () => this.setState({ copiedStreak: 0 }));
                    });
            }),
            tc(this, 'handleOccludedChanged', () => {
                let { occluded: e } = this.props;
                e &&
                    this.setState({
                        shouldShowNametagTooltip: !1,
                        shouldShowSpeakingWhileMutedTooltip: !1
                    });
            }),
            tc(this, 'handleSpeakingWhileMutedChanged', () => {
                let { selfMute: e, serverMute: t, suppress: n, speakingWhileMuted: i, occluded: r } = this.props,
                    { hoveringOnMute: s } = this.state,
                    l = void 0 === this.lastSpeakingWhileMutedNotificationTime || Date.now() - this.lastSpeakingWhileMutedNotificationTime > tg;
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
            tc(this, 'renderNameTag', () => {
                let { currentUser: e } = this.props;
                return null == e
                    ? null
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)('div', {
                                  className: to.panelTitleContainer,
                                  children: (0, i.jsx)(tn.Z, { children: e7.ZP.getName(e) })
                              }),
                              (0, i.jsx)('div', {
                                  className: to.panelSubtextContainer,
                                  children: (0, i.jsx)(tt.Z, { children: this.renderStatus() })
                              })
                          ]
                      });
            });
    }
}
function t_(e) {
    let { selfDeaf: t, selfMute: n, awaitingRemote: r, serverMute: s, serverDeaf: l, suppress: a, shouldShowSpeakingWhileMutedTooltip: o, isEligibleForPomelo: c, webBuildOverride: d, handleMouseEnterMute: u, handleMouseLeaveMute: m, handleToggleSelfDeaf: g, handleToggleSelfMute: p, handleInputAudioContextMenu: h, handleOutputAudioContextMenu: f, handleOpenAccountSettings: b, handleOpenSettingsContextMenu: x, dismissibleContents: E, nameplate: C, accountContainerRef: j } = e,
        O = (0, ed.A)(C);
    return (0, i.jsxs)('div', {
        className: to.buttons,
        style: O,
        children: [
            (0, i.jsx)(tC, {
                accountContainerRef: j,
                selfMute: n,
                serverMute: s,
                suppress: a,
                awaitingRemote: r,
                tooltipText: o ? ta.intl.string(ta.t['29gnR0']) : void 0,
                tooltipColor: o ? _.FGA.GREEN : void 0,
                tooltipForceOpen: o || void 0,
                onMouseEnter: u,
                onMouseLeave: m,
                onClick: p,
                onContextMenu: h,
                iconForeground: null != C ? to.iconForeground : void 0,
                nameplate: C
            }),
            (0, i.jsx)(tj, {
                selfDeaf: t,
                serverDeaf: l,
                onClick: g,
                onContextMenu: f,
                awaitingRemote: r,
                iconForeground: null != C ? to.iconForeground : void 0,
                nameplate: C
            }),
            (0, i.jsx)(tE, {
                isEligibleForPomelo: c,
                webBuildOverride: d,
                onClick: b,
                onContextMenu: x,
                dismissibleContents: E.settings,
                iconForeground: null != C ? to.iconForeground : void 0,
                nameplate: C
            })
        ]
    });
}
function tx() {
    var e;
    let t = (0, d.e7)([eQ.default], () => eQ.default.getCurrentUser()),
        n = (0, d.e7)([eG.default], () => eG.default.getId()),
        {
            activities: s,
            streaming: l,
            status: a
        } = (0, d.cj)([eq.Z], () => {
            let e = eq.Z.getActivities();
            return {
                activities: e,
                streaming:
                    null !=
                    e.find((e) => {
                        let { type: t } = e;
                        return t === ti.IIU.STREAMING;
                    }),
                status: eq.Z.getStatus()
            };
        }),
        c = (0, d.e7)([eV.Z], () => eV.Z.getAnyStreamForUser(n)),
        m = (0, v.Z)({ userId: n }),
        g = e7.ZP.useUserTag(t, { decoration: 'never' }),
        p = (0, d.e7)([eX.Z], () => eX.Z.hidePersonalInformation),
        h = (0, d.e7)([eW.Z, eF.Z], () => {
            let e = eW.Z.getChannelId();
            return null != e ? eF.Z.getChannel(e) : null;
        }),
        { mute: f, selfMute: b, suppress: E } = (0, eA.Z)(h),
        { selfDeaf: C, deaf: j } = (0, ey.Z)(h),
        T = (0, d.e7)([k.C], () => {
            var e;
            return (0, L.fD)() ? (null == (e = k.C.getCurrentBuildOverride().overrides) ? void 0 : e.discord_web) : null;
        }),
        N = (0, d.e7)([eJ.ZP], () => eJ.ZP.getPremiumTypeSubscription()),
        y = (0, d.e7)([eY.Z], () => eY.Z.getSpeakingWhileMuted()),
        A = (0, d.e7)([B.Z], () => B.Z.isFullscreenInContext()),
        P = (0, d.e7)([ez.Z], () => ez.Z.hasLayers()),
        Z = (0, _.s9z)(_.JQI) || P || e4.s.isDisallowPopupsSet() || A,
        w = (0, eg.b)(),
        M = (0, d.e7)([en.Z], () => null != en.Z.getAwaitingRemoteSessionInfo()),
        U = (0, d.e7)([eK.Z], () => eK.Z.getGuildId()),
        V = (0, ex.D)(),
        G = (0, O.u)(),
        F = e5.ZP.canUsePremiumGuildMemberProfile(t),
        H = (null == t || null == (e = t.avatarDecoration) ? void 0 : e.skuId) === tr.rL,
        { voiceActivityStatusEnabled: z } = (0, I.U)({ location: 'Account' }),
        Y = (0, el.m)(),
        [W, X] = (0, er.G)(null != U ? U : null),
        { customStatusRTCEntrypointEnabled: Q, customStatusHoverOnlyRTCEntrypointEnabled: J } = (0, q.Z)({ location: 'Account' }),
        $ = 'account';
    (0, S.j)({
        location: $ + ' auto on',
        autoTrackExposure: !0
    }),
        (0, S.j)({
            location: $ + ' auto off',
            autoTrackExposure: !1
        });
    let et = (0, d.e7)([ej.Z], () => ej.Z.hasHadOtherUserPlaySoundInSession()),
        ei = (function () {
            let e = (0, ee.wE)(u.z.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2),
                [t, n] = (0, d.Wu)([ep.Z], () => [ep.Z.hasFetchedRelevance, ep.Z.profileThemesRelevanceExceeded]),
                [i, s] = (0, d.Wu)([eJ.ZP], () => [eJ.ZP.hasFetchedMostRecentPremiumTypeSubscription(), eJ.ZP.getMostRecentPremiumTypeSubscription()]),
                { enabled: l } = eh.Z.useExperiment({ location: '08bd40_1' }, { autoTrackExposure: !0 }),
                a = r.useMemo(() => {
                    let e = new Date().getTime();
                    return null != s && (s.status === ti.O0b.ACTIVE || e - s.currentPeriodEnd.getTime() < th);
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
        { analyticsLocations: es } = (0, D.ZP)(R.Z.ACCOUNT),
        ea = (0, ec.K)({
            location: 'Account',
            user: t
        }),
        eo = (0, e_.Ws)({ location: tl.dr.CONFLICT_CHECKS }),
        ed = (0, d.e7)([eS.Z, eQ.default, eH.Z], () => {
            let e,
                t = eS.Z.getSyncingWith(),
                n = eS.Z.getActivity(),
                i = [];
            if ((null != t ? (e = t.partyId) : null != n && null != n.party && null != n.party.id && (e = n.party.id), null != e)) {
                var r;
                i = o()(Array.from(null != (r = eH.Z.getParty(e)) ? r : []))
                    .map((e) => eQ.default.getUser(e))
                    .filter(e2.lm)
                    .value();
            }
            return i.length > 1;
        }),
        eu = (0, K.Z)({ location: 'AccountConnected' }),
        em = {
            avatar: [],
            settings: []
        };
    return (
        !Z && (ei && em.settings.push(u.z.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2), V && (1 === G ? em.settings.push(u.z.USER_SAFETY_CONSUMER_EDUCATION_MUTE) : em.settings.push(u.z.USER_SAFETY_CONSUMER_EDUCATION_BLOCK)), et && em.settings.push(u.z.SOUNDBOARD_VOLUME_EDUCATION), F && em.settings.push(u.z.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK), H && em.avatar.push(u.z.PREMIUM_SUBSCRIPTION_APRIL_MARKETING_DECO_TOOLTIP), Y && em.avatar.push(u.z.EXPIRING_STATUS_COACHMARK), eu && em.avatar.push(u.z.CUSTOM_STATUS_PROMPTS_COACHMARK)),
        (0, i.jsx)(D.Gt, {
            value: es,
            children: (0, i.jsx)(tb, {
                currentUser: t,
                activities: s,
                applicationStream: c,
                voiceChannel: h,
                dismissibleContents: em,
                visibleRecurringAvatarDc: W,
                markRecurringAvatarDcAsDismissed: X,
                userTag: g,
                hidePrivateData: p,
                occluded: Z,
                premiumSubscription: N,
                selfDeaf: C,
                selfMute: b,
                serverDeaf: j,
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
                isQuestBarEmpty: eo,
                isListenAlongVisible: ed
            })
        })
    );
}
function tE(e) {
    let { webBuildOverride: t, isEligibleForPomelo: n, onClick: s, onContextMenu: l, dismissibleContents: a, iconForeground: o, nameplate: c } = e,
        d = r.useRef(null),
        m = _.ewm,
        g = (0, f.i)();
    m = null != t ? _.bgT : n ? _.Ncx : g.Component;
    let [p, h] = (0, et.US)(a);
    return (0, i.jsx)(_.yRy, {
        targetElementRef: d,
        position: 'top',
        align: 'center',
        shouldShow: null != p,
        renderPopout: p === u.z.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2 ? () => (0, i.jsx)(eb.Z, {}) : p === u.z.USER_SAFETY_CONSUMER_EDUCATION_BLOCK ? () => (0, i.jsx)(eE.Z, { markAsDismissed: h }) : p === u.z.USER_SAFETY_CONSUMER_EDUCATION_MUTE ? () => (0, i.jsx)(eC.Z, { markAsDismissed: h }) : p === u.z.SOUNDBOARD_VOLUME_EDUCATION ? () => (0, i.jsx)(eO.Z, { markAsDismissed: h }) : p === u.z.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK ? () => (0, i.jsx)(eT.Z, {}) : () => (0, i.jsx)(i.Fragment, {}),
        children: () =>
            (0, i.jsx)(
                te.Z,
                tu(
                    td(
                        {
                            ref: d,
                            tooltipText: null != t ? ta.intl.formatToPlainString(ta.t.Gzh6ZG, { webBuildOverride: t.id }) : ta.intl.string(ta.t.cduTBA),
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
function tC(e) {
    let { selfMute: t, serverMute: n, suppress: s, awaitingRemote: a, tooltipText: o, tooltipColor: u, tooltipForceOpen: m, iconForeground: g, onMouseEnter: f, onMouseLeave: x, onClick: E, onContextMenu: C, nameplate: j, accountContainerRef: O } = e,
        S = t || s || n,
        v = r.useRef(null),
        T = r.useRef(null),
        I = (0, p.O)(S ? 'unmute' : 'mute'),
        N = (0, h.P)(S ? 'unmute' : 'mute'),
        { activeVoice: y, mostRecentlyRequestedVoiceId: A, lastInitAttemptMayHaveCrashed: P } = (0, ew.o)(),
        { showSilentLagWarning: Z } = (0, eZ.Y)(),
        w = null != y,
        k = (0, eD.z)(y),
        L = (0, d.e7)([eW.Z], () => eW.Z.isConnected()),
        { Component: B, events: M, play: V } = w ? N : I,
        G = n || s ? _.v0G : B,
        F = Z ? ta.intl.string(ta.t.ARRV6u) : null,
        H = (0, U.Z)(t, n, s, a),
        z =
            null != o
                ? o
                : null != F
                  ? (0, i.jsxs)('div', {
                        className: to.tooltipWithSubtext,
                        children: [
                            (0, i.jsx)(_.Text, {
                                variant: 'text-sm/medium',
                                color: 'currentColor',
                                children: H
                            }),
                            null != F &&
                                (0, i.jsx)(_.Text, {
                                    variant: 'text-xs/medium',
                                    color: 'text-warning',
                                    children: F
                                })
                        ]
                    })
                  : H,
        { analyticsLocations: Y } = (0, D.ZP)(R.Z.AUDIO_INPUT_BUTTON),
        W = (0, eP.Hu)({
            location: R.Z.AUDIO_INPUT_BUTTON,
            autoTrackExposure: !0
        }),
        K = (0, eR.av)({
            location: R.Z.AUDIO_INPUT_BUTTON,
            autoTrackExposure: !0
        });
    r.useEffect(() => () => V(), [S, V]);
    let q = r.useCallback(
            (e) => {
                C(e, Y);
            },
            [C, Y]
        ),
        [X, Q] = r.useState(!1),
        J = r.useCallback((e) => {
            var t;
            if ((0, c.k)(null == e ? void 0 : e.target, Node) && (null == (t = v.current) ? void 0 : t.contains(e.target))) return b.F;
            Q(!1);
        }, []);
    (0, e3.yp)({
        event: ti.CkL.OPEN_VOICE_FILTER_POPOUT,
        handler: () => {
            Q(!0);
        }
    });
    let [$, ee] = r.useState(!1);
    r.useEffect(() => {
        let e;
        return (
            L &&
                w &&
                (e = setTimeout(() => {
                    ee(!0), (e = setTimeout(() => ee(!1), tp));
                }, 300)),
            () => {
                ee(!1), clearTimeout(e);
            }
        );
    }, [L]);
    let et = r.useCallback(() => {
            P || (0, ek.r5)();
        }, [P]),
        en = S ? _.TVs.colors.STATUS_DANGER : Z ? _.TVs.colors.STATUS_WARNING : 'currentColor',
        ei = S || Z;
    return (0, i.jsx)(D.Gt, {
        value: Y,
        children: (0, i.jsxs)('div', {
            ref: v,
            className: l()(to.micButtonParent, { [to.hasColorGlow]: ei }),
            children: [
                (0, i.jsx)(te.Z, {
                    tooltipText: z,
                    tooltipColor: u,
                    tooltipForceOpen: m,
                    plated: null != j,
                    onMouseEnter: () => {
                        f(), M.onMouseEnter();
                    },
                    onMouseLeave: () => {
                        x(), M.onMouseLeave();
                    },
                    icon: (0, i.jsx)(G, {
                        size: 'custom',
                        width: 20,
                        height: 20,
                        color: en,
                        className: g
                    }),
                    onClick: E,
                    onContextMenu: q,
                    role: 'switch',
                    className: l()({ [to.micButtonWithMenu]: W }),
                    orangeGlow: Z,
                    redGlow: S,
                    'aria-label': ta.intl.string(ta.t['w4m94+']),
                    'aria-checked': S,
                    disabled: a
                }),
                W &&
                    (0, i.jsx)(_.yRy, {
                        targetElementRef: O,
                        position: 'top',
                        align: 'left',
                        nudgeAlignIntoViewport: !1,
                        animation: _.yRy.Animation.FADE,
                        useMouseEnter: !0,
                        ignoreModalClicks: !0,
                        onRequestOpen: et,
                        onRequestClose: J,
                        shouldShow: X,
                        renderPopout: (e) => {
                            let { closePopout: t } = e;
                            return (0, i.jsx)(eM.l, { onSettingsButtonClick: t });
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
                            let l = s ? _.u04 : _.CJ0;
                            return (0, i.jsx)('div', {
                                children: (0, i.jsx)(eB.n, {
                                    targetElementRef: T,
                                    onCTA: () => Q(!0),
                                    canBeShown: !s,
                                    children: (e, t) =>
                                        (0, i.jsx)(eL.v, {
                                            targetElementRef: T,
                                            onCTA: () => Q(!0),
                                            canBeShown: K && L && !w && !e && !s,
                                            children: (e, s) =>
                                                (0, i.jsx)(
                                                    te.Z,
                                                    td(
                                                        {
                                                            ref: T,
                                                            plated: null != j,
                                                            tooltipForceOpen: $,
                                                            tooltipColor: $ ? _.FGA.GREEN : void 0,
                                                            tooltipContentClassName: $ ? to.voiceFilterWarning : void 0,
                                                            tooltipText: $
                                                                ? (0, i.jsxs)(i.Fragment, {
                                                                      children: [
                                                                          (0, i.jsx)('img', {
                                                                              alt: null != k ? ta.intl.string(k.name) : '',
                                                                              src: null == k ? void 0 : k.iconURL,
                                                                              draggable: !1
                                                                          }),
                                                                          (0, i.jsx)(_.Text, {
                                                                              variant: 'text-sm/medium',
                                                                              color: 'always-white',
                                                                              children: ta.intl.string(ta.t.VlC1dX)
                                                                          })
                                                                      ]
                                                                  })
                                                                : ta.intl.string(ta.t.Hapb4O),
                                                            icon: (0, i.jsx)(l, {
                                                                className: to.buttonChevronIcon,
                                                                size: 'custom',
                                                                width: 12,
                                                                height: 12,
                                                                color: en
                                                            }),
                                                            role: 'button',
                                                            className: to.buttonChevron,
                                                            orangeGlow: Z,
                                                            redGlow: S,
                                                            'aria-label': ta.intl.string(ta.t.Hapb4O),
                                                            disabled: a,
                                                            onClick: (e) => {
                                                                null == t || t(), null == s || s(), n(e), null != A && !X && P ? (0, eU.$)(() => Q(!0)) : Q(!X);
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
function tj(e) {
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
        children: (0, i.jsx)(te.Z, {
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
            innerClassName: l()({ [to.redIcon]: n }),
            iconForeground: u ? to.strikethrough : void 0,
            role: 'switch',
            redGlow: u,
            'aria-label': ta.intl.string(ta.t.wjcRFR),
            'aria-checked': u,
            disabled: s
        })
    });
}
