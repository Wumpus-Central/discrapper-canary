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
    p = n(652844),
    h = n(747906),
    f = n(789639),
    b = n(930295),
    _ = n(481060),
    x = n(239091),
    E = n(230711),
    C = n(410575),
    j = n(941129),
    O = n(634894),
    S = n(586902),
    v = n(980591),
    T = n(468363),
    I = n(326255),
    N = n(771173),
    y = n(963056),
    A = n(570928),
    P = n(100527),
    R = n(906732),
    D = n(676742),
    Z = n(1585),
    w = n(304761),
    k = n(865427),
    L = n(358221),
    B = n(571250),
    M = n(628581),
    U = n(55311),
    V = n(575175),
    G = n(522651),
    F = n(795318),
    H = n(338390),
    z = n(526371),
    Y = n(64220),
    W = n(359588),
    K = n(459115),
    q = n(427217),
    X = n(132750),
    Q = n(526031),
    J = n(540059),
    $ = n(243778),
    ee = n(258609),
    et = n(53891),
    en = n(291533),
    ei = n(427347),
    er = n(50697),
    es = n(90042),
    el = n(78933),
    ea = n(850020),
    eo = n(379839),
    ec = n(359135),
    ed = n(516817),
    eu = n(332473),
    em = n(210308),
    eg = n(667105),
    ep = n(19199),
    eh = n(212704),
    ef = n(14357),
    eb = n(763296),
    e_ = n(640806),
    ex = n(768419),
    eE = n(184301),
    eC = n(52538),
    ej = n(670188),
    eO = n(321614),
    eS = n(879815),
    ev = n(294629),
    eT = n(875527),
    eI = n(702977),
    eN = n(56848),
    ey = n(940315),
    eA = n(378441),
    eP = n(358820),
    eR = n(723547),
    eD = n(361045),
    eZ = n(306609),
    ew = n(170293),
    ek = n(199902),
    eL = n(314897),
    eB = n(592125),
    eM = n(831506),
    eU = n(819640),
    eV = n(131951),
    eG = n(19780),
    eF = n(914010),
    eH = n(885110),
    ez = n(246946),
    eY = n(594174),
    eW = n(78839),
    eK = n(626135),
    eq = n(768581),
    eX = n(572004),
    eQ = n(459273),
    eJ = n(585483),
    e$ = n(70956),
    e0 = n(823379),
    e1 = n(74538),
    e3 = n(374023),
    e8 = n(51144),
    e6 = n(998502),
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
let ta = e6.ZP.getEnableHardwareAcceleration() ? _.Xo$ : _.qEK,
    to = 2 * e$.Z.Millis.MINUTE,
    tc = 3 * e$.Z.Millis.SECOND;
function td(e) {
    let { ref: t, speaking: n, streaming: s, currentUser: a, status: o, handleClick: c, handleMouseLeave: d, renderNameTag: u, nameplate: m, 'data-jump-section': g } = e,
        p = r.useRef(null),
        h = null != t ? t : p,
        f = (0, J.Q3)('RTC Avatar'),
        b = (0, D.Z)(null == a ? void 0 : a.avatarDecoration),
        x = (0, eq.NZ)({
            avatarDecoration: b,
            size: (0, Z.y9)(_.EFr.SIZE_32)
        }),
        E = (0, _.dQu)(_.TVs.modules.guildbar.AVATAR_SIZE),
        j = (0, H.Z)('Account') ? 32 : E,
        {
            updateOpenPopoutRef: O,
            highlightBadge: S,
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
                (0, v.Z)(() => l(!0), 750),
                r.useEffect(() => {
                    let t = (t) => {
                        var n;
                        let { highlightBadge: r } = t;
                        null != r && i(r), null == (n = e.current) || n.call(e);
                    };
                    return (
                        eJ.S.subscribe(e7.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, t),
                        () => {
                            eJ.S.unsubscribe(e7.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, t);
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
        I = (0, eo.A)(m);
    return null == a
        ? null
        : (0, i.jsx)(C.Z, {
              object: e7.qAy.AVATAR,
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
                      return (0, i.jsx)(el.Z, {
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
                      d(), T(void 0);
                  },
                  children: (e) => (
                      O(e),
                      (0, i.jsxs)(
                          _.P3F,
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
                                  'data-jump-section': f ? g : void 0,
                                  className: l()(ti.avatarWrapper, !f && ti.experiment, { [ti.plated]: null != m }),
                                  children: [
                                      (0, i.jsx)(ta, {
                                          size: f ? _.EFr['SIZE_'.concat(j)] : _.EFr.SIZE_32,
                                          src: a.getAvatarURL(void 0, f ? j - 4 : 32, !1),
                                          avatarDecoration: x,
                                          'aria-label': a.username,
                                          status: s ? e7.Skl.STREAMING : o,
                                          isSpeaking: n,
                                          className: ti.avatar
                                      }),
                                      (0, i.jsx)('div', {
                                          className: l()(ti.nameTag, { [ti.canCopy]: eX.wS }),
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
            return (0, i.jsx)(A.Z, {
                hoverText: l,
                forceHover: e,
                children: (0, i.jsx)(N.Z, {
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
            ? (0, i.jsx)(A.Z, {
                  hoverText: l,
                  forceHover: e,
                  children: (0, i.jsx)(q.Z, {
                      activity: u,
                      emojiClassName: ti.emoji,
                      className: ti.customStatus
                  })
              })
            : null != s && s !== e7.Skl.UNKNOWN && r.isPomelo()
              ? (0, i.jsx)(A.Z, {
                    hoverText: l,
                    forceHover: e,
                    children: (0, i.jsx)(y.Z, { text: e8.ZP.humanizeStatus(s) })
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
            return (0, i.jsx)(et.ZP, {
                guildId: null != (l = this.props.selectedGuildId) ? l : null,
                onDismiss: s,
                targetElementRef: this.avatarWithPopoutRef,
                children: () => this.renderAvatarWithPopout({ focusSectionProps: e })
            });
        }
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(em.Z, {
                    groupName: te.R.ACCOUNT_NAME_ZONE,
                    targetElementRef: this.avatarWithPopoutRef
                }),
                (0, i.jsx)($.ZP, {
                    contentTypes: n.avatar,
                    groupName: te.R.ACCOUNT_NAME_ZONE,
                    children: (t) => {
                        let { visibleContent: n, markAsDismissed: r } = t;
                        switch (n) {
                            case u.z.PREMIUM_SUBSCRIPTION_APRIL_MARKETING_DECO_TOOLTIP:
                                return (0, i.jsx)(Y.Z, {
                                    markAsDismissed: r,
                                    targetElementRef: this.avatarWithPopoutRef,
                                    children: () => this.renderAvatarWithPopout({ focusSectionProps: e })
                                });
                            case u.z.EXPIRING_STATUS_COACHMARK:
                                return (0, i.jsx)(es.Z, {
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
                                  className: l()(ti.container, {
                                      [ti.containerRtcOpened]: null != n,
                                      [ti.containerQuestBarVisible]: !r,
                                      [ti.containerListenAlongVisible]: s
                                  }),
                                  onMouseEnter: this.handleMouseEnter,
                                  onMouseLeave: this.handleMouseLeave,
                                  children: [
                                      (0, i.jsx)(ed.Z, {
                                          nameplate: t,
                                          hovered: a,
                                          placement: ec.i.ACCOUNT
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
                              (0, i.jsx)(ei.Z, {}),
                              (0, i.jsx)(z.Z, {})
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
                (0, V.Z)(e, t, e7.jXE.ACCOUNT_PANEL), (0, G.v)(P.Z.ACCOUNT, G.d.MIC, n);
            }),
            tr(this, 'handleToggleSelfDeaf', () => {
                let { serverDeaf: e, selfDeaf: t } = this.props;
                (0, U.Z)(e, e7.jXE.ACCOUNT_PANEL), (0, G.v)(P.Z.ACCOUNT, G.d.DEAFEN, !t);
            }),
            tr(this, 'handleOpenAccountSettings', () => {
                this.handleOpenSettings();
            }),
            tr(this, 'handleOpenSettings', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e7.oAB.ACCOUNT,
                    t = arguments.length > 1 ? arguments[1] : void 0,
                    n = arguments.length > 2 ? arguments[2] : void 0;
                E.Z.open(e, t, n);
            }),
            tr(this, 'handleOpenSettingsContextMenu', (e) => {
                let { currentUser: t } = this.props;
                null != t &&
                    (0, x.jW)(e, async () => {
                        let { default: e } = await n.e('2535').then(n.bind(n, 923422));
                        return (n) =>
                            (0, i.jsx)(
                                e,
                                tl(ts({}, n), {
                                    user: t,
                                    premiumSubscription: this.props.premiumSubscription,
                                    webBuildOverride: this.props.webBuildOverride,
                                    onInteraction: (0, F.u)('UserSettingsCogContextMenu', P.Z.ACCOUNT)
                                })
                            );
                    });
            }),
            tr(this, 'audioOnInteractionHandler', (0, F.u)('AudioDeviceMenu', P.Z.ACCOUNT)),
            tr(this, 'handleInputAudioContextMenu', (e, t) => {
                (0, x.jW)(e, async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 659580));
                    return () => {
                        let { enabledInputProfiles: n } = (0, eO.c)({ location: 'Account' });
                        return (0, i.jsx)(R.Gt, {
                            value: t,
                            children: (0, i.jsx)(e, {
                                onClose: x.Zy,
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
                (0, x.jW)(e, async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 659580));
                    return () =>
                        (0, i.jsx)(R.Gt, {
                            value: t,
                            children: (0, i.jsx)(e, {
                                onClose: x.Zy,
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
                (0, eX.JG)(
                    e8.ZP.getUserTag(e, {
                        decoration: 'never',
                        identifiable: 'always'
                    })
                ),
                    eK.default.track(e7.rMx.TEXT_COPIED, { type: 'User Tag' });
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
                                  children: (0, i.jsx)(e4.Z, { children: e8.ZP.getName(e) })
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
    let { selfDeaf: t, selfMute: n, awaitingRemote: r, serverMute: s, serverDeaf: l, suppress: a, shouldShowSpeakingWhileMutedTooltip: o, isEligibleForPomelo: c, webBuildOverride: d, handleMouseEnterMute: u, handleMouseLeaveMute: m, handleToggleSelfDeaf: g, handleToggleSelfMute: p, handleInputAudioContextMenu: h, handleOutputAudioContextMenu: f, handleOpenAccountSettings: b, handleOpenSettingsContextMenu: x, dismissibleContents: E, nameplate: C, accountContainerRef: j } = e,
        O = (0, eo.A)(C);
    return (0, i.jsxs)('div', {
        className: ti.buttons,
        style: O,
        children: [
            (0, i.jsx)(th, {
                accountContainerRef: j,
                selfMute: n,
                serverMute: s,
                suppress: a,
                awaitingRemote: r,
                tooltipText: o ? tn.intl.string(tn.t['29gnR0']) : void 0,
                tooltipColor: o ? _.FGA.GREEN : void 0,
                tooltipForceOpen: o || void 0,
                onMouseEnter: u,
                onMouseLeave: m,
                onClick: p,
                onContextMenu: h,
                iconForeground: null != C ? ti.iconForeground : void 0,
                nameplate: C
            }),
            (0, i.jsx)(tf, {
                selfDeaf: t,
                serverDeaf: l,
                onClick: g,
                onContextMenu: f,
                awaitingRemote: r,
                iconForeground: null != C ? ti.iconForeground : void 0,
                nameplate: C
            }),
            (0, i.jsx)(tp, {
                isEligibleForPomelo: c,
                webBuildOverride: d,
                onClick: b,
                onContextMenu: x,
                dismissibleContents: E.settings,
                iconForeground: null != C ? ti.iconForeground : void 0,
                nameplate: C
            })
        ]
    });
}
function tg() {
    var e;
    let t = (0, d.e7)([eY.default], () => eY.default.getCurrentUser()),
        n = (0, d.e7)([eL.default], () => eL.default.getId()),
        {
            activities: r,
            streaming: s,
            status: l
        } = (0, d.cj)([eH.Z], () => {
            let e = eH.Z.getActivities();
            return {
                activities: e,
                streaming:
                    null !=
                    e.find((e) => {
                        let { type: t } = e;
                        return t === e7.IIU.STREAMING;
                    }),
                status: eH.Z.getStatus()
            };
        }),
        a = (0, d.e7)([ek.Z], () => ek.Z.getAnyStreamForUser(n)),
        c = (0, S.Z)({ userId: n }),
        m = e8.ZP.useUserTag(t, { decoration: 'never' }),
        g = (0, d.e7)([ez.Z], () => ez.Z.hidePersonalInformation),
        p = (0, d.e7)([eG.Z, eB.Z], () => {
            let e = eG.Z.getChannelId();
            return null != e ? eB.Z.getChannel(e) : null;
        }),
        { mute: h, selfMute: f, suppress: b } = (0, ev.Z)(p),
        { selfDeaf: x, deaf: E } = (0, eS.Z)(p),
        C = (0, d.e7)([w.C], () => {
            var e;
            return (0, k.fD)() ? (null == (e = w.C.getCurrentBuildOverride().overrides) ? void 0 : e.discord_web) : null;
        }),
        v = (0, d.e7)([eW.ZP], () => eW.ZP.getPremiumTypeSubscription()),
        I = (0, d.e7)([eV.Z], () => eV.Z.getSpeakingWhileMuted()),
        N = (0, d.e7)([L.Z], () => L.Z.isFullscreenInContext()),
        y = (0, d.e7)([eU.Z], () => eU.Z.hasLayers()),
        A = (0, _.s9z)(_.JQI) || y || e3.s.isDisallowPopupsSet() || N,
        D = (0, eu.b)(),
        Z = (0, d.e7)([ee.Z], () => null != ee.Z.getAwaitingRemoteSessionInfo()),
        B = (0, d.e7)([eF.Z], () => eF.Z.getGuildId()),
        M = (0, ep.D)(),
        U = (0, j.u)(),
        V = e1.ZP.canUsePremiumGuildMemberProfile(t),
        G = (null == t || null == (e = t.avatarDecoration) ? void 0 : e.skuId) === e9.rL,
        { voiceActivityStatusEnabled: F } = (0, T.U)({ location: 'Account' }),
        H = (0, er.m)(),
        [z, Y] = (0, en.G)(null != B ? B : null),
        { customStatusRTCEntrypointEnabled: q, customStatusHoverOnlyRTCEntrypointEnabled: X } = (0, K.Z)({ location: 'Account' }),
        Q = 'account';
    (0, O.j)({
        location: Q + ' auto on',
        autoTrackExposure: !0
    }),
        (0, O.j)({
            location: Q + ' auto off',
            autoTrackExposure: !1
        });
    let J = (0, d.e7)([eb.Z], () => eb.Z.hasHadOtherUserPlaySoundInSession()),
        { analyticsLocations: $ } = (0, R.ZP)(P.Z.ACCOUNT),
        et = (0, ea.K)({
            location: 'Account',
            user: t
        }),
        ei = (0, eg.Ws)({ location: tt.dr.CONFLICT_CHECKS }),
        es = (0, d.e7)([ex.Z, eY.default, eM.Z], () => {
            let e,
                t = ex.Z.getSyncingWith(),
                n = ex.Z.getActivity(),
                i = [];
            if ((null != t ? (e = t.partyId) : null != n && null != n.party && null != n.party.id && (e = n.party.id), null != e)) {
                var r;
                i = o()(Array.from(null != (r = eM.Z.getParty(e)) ? r : []))
                    .map((e) => eY.default.getUser(e))
                    .filter(e0.lm)
                    .value();
            }
            return i.length > 1;
        }),
        el = (0, W.Z)({ location: 'AccountConnected' }),
        eo = {
            avatar: [],
            settings: []
        };
    return (
        !A && (M && (1 === U ? eo.settings.push(u.z.USER_SAFETY_CONSUMER_EDUCATION_MUTE) : eo.settings.push(u.z.USER_SAFETY_CONSUMER_EDUCATION_BLOCK)), J && eo.settings.push(u.z.SOUNDBOARD_VOLUME_EDUCATION), V && eo.settings.push(u.z.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK), G && eo.avatar.push(u.z.PREMIUM_SUBSCRIPTION_APRIL_MARKETING_DECO_TOOLTIP), H && eo.avatar.push(u.z.EXPIRING_STATUS_COACHMARK), el && eo.avatar.push(u.z.CUSTOM_STATUS_PROMPTS_COACHMARK)),
        (0, i.jsx)(R.Gt, {
            value: $,
            children: (0, i.jsx)(tu, {
                currentUser: t,
                activities: r,
                applicationStream: a,
                voiceChannel: p,
                dismissibleContents: eo,
                visibleRecurringAvatarDc: z,
                markRecurringAvatarDcAsDismissed: Y,
                userTag: m,
                hidePrivateData: g,
                occluded: A,
                premiumSubscription: v,
                selfDeaf: x,
                selfMute: f,
                serverDeaf: E,
                serverMute: h,
                speaking: c,
                speakingWhileMuted: I,
                status: l,
                streaming: s,
                suppress: b,
                webBuildOverride: C,
                awaitingRemote: Z,
                isEligibleForPomelo: D,
                voiceActivityStatusEnabled: F,
                nameplate: et,
                selectedGuildId: B,
                customStatusRTCEntrypointEnabled: q,
                customStatusHoverOnlyRTCEntrypointEnabled: X,
                isQuestBarEmpty: ei,
                isListenAlongVisible: es
            })
        })
    );
}
function tp(e) {
    let { webBuildOverride: t, isEligibleForPomelo: n, onClick: s, onContextMenu: l, dismissibleContents: a, iconForeground: o, nameplate: c } = e,
        d = r.useRef(null),
        m = _.ewm,
        g = (0, f.i)();
    m = null != t ? _.bgT : n ? _.Ncx : g.Component;
    let [p, h] = (0, $.US)(a);
    return (0, i.jsx)(_.yRy, {
        targetElementRef: d,
        position: 'top',
        align: 'center',
        shouldShow: null != p,
        renderPopout: p === u.z.USER_SAFETY_CONSUMER_EDUCATION_BLOCK ? () => (0, i.jsx)(eh.Z, { markAsDismissed: h }) : p === u.z.USER_SAFETY_CONSUMER_EDUCATION_MUTE ? () => (0, i.jsx)(ef.Z, { markAsDismissed: h }) : p === u.z.SOUNDBOARD_VOLUME_EDUCATION ? () => (0, i.jsx)(e_.Z, { markAsDismissed: h }) : p === u.z.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK ? () => (0, i.jsx)(eC.Z, {}) : () => (0, i.jsx)(i.Fragment, {}),
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
    let { selfMute: t, serverMute: n, suppress: s, awaitingRemote: a, tooltipText: o, tooltipColor: u, tooltipForceOpen: m, iconForeground: g, onMouseEnter: f, onMouseLeave: x, onClick: E, onContextMenu: C, nameplate: j, accountContainerRef: O } = e,
        S = t || s || n,
        v = r.useRef(null),
        T = r.useRef(null),
        I = (0, p.O)(S ? 'unmute' : 'mute'),
        N = (0, h.P)(S ? 'unmute' : 'mute'),
        { activeVoice: y, mostRecentlyRequestedVoiceId: A, lastInitAttemptMayHaveCrashed: D } = (0, eA.o)(),
        { showSilentLagWarning: Z } = (0, ey.Y)(),
        w = null != y,
        k = (0, eN.z)(y),
        L = (0, d.e7)([eG.Z], () => eG.Z.isConnected()),
        { Component: B, events: U, play: V } = w ? N : I,
        G = n || s ? _.v0G : B,
        F = Z ? tn.intl.string(tn.t.ARRV6u) : null,
        H = (0, M.Z)(t, n, s, a),
        z =
            null != o
                ? o
                : null != F
                  ? (0, i.jsxs)('div', {
                        className: ti.tooltipWithSubtext,
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
        { analyticsLocations: Y } = (0, R.ZP)(P.Z.AUDIO_INPUT_BUTTON),
        W = (0, eT.Hu)({
            location: P.Z.AUDIO_INPUT_BUTTON,
            autoTrackExposure: !0
        }),
        K = (0, eI.av)({
            location: P.Z.AUDIO_INPUT_BUTTON,
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
    (0, eQ.yp)({
        event: e7.CkL.OPEN_VOICE_FILTER_POPOUT,
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
                    ee(!0), (e = setTimeout(() => ee(!1), tc));
                }, 300)),
            () => {
                ee(!1), clearTimeout(e);
            }
        );
    }, [L]);
    let et = r.useCallback(() => {
            D || (0, eP.r5)();
        }, [D]),
        en = S ? _.TVs.colors.STATUS_DANGER : Z ? _.TVs.colors.STATUS_WARNING : 'currentColor',
        ei = S || Z;
    return (0, i.jsx)(R.Gt, {
        value: Y,
        children: (0, i.jsxs)('div', {
            ref: v,
            className: l()(ti.micButtonParent, { [ti.hasColorGlow]: ei }),
            children: [
                (0, i.jsx)(e2.Z, {
                    tooltipText: z,
                    tooltipColor: u,
                    tooltipForceOpen: m,
                    plated: null != j,
                    onMouseEnter: () => {
                        f(), U.onMouseEnter();
                    },
                    onMouseLeave: () => {
                        x(), U.onMouseLeave();
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
                    className: l()({ [ti.micButtonWithMenu]: W }),
                    orangeGlow: Z,
                    redGlow: S,
                    'aria-label': tn.intl.string(tn.t['w4m94+']),
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
                            return (0, i.jsx)(eZ.l, { onSettingsButtonClick: t });
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
                                children: (0, i.jsx)(eD.n, {
                                    targetElementRef: T,
                                    onCTA: () => Q(!0),
                                    canBeShown: !s,
                                    children: (e, t) =>
                                        (0, i.jsx)(eR.v, {
                                            targetElementRef: T,
                                            onCTA: () => Q(!0),
                                            canBeShown: K && L && !w && !e && !s,
                                            children: (e, s) =>
                                                (0, i.jsx)(
                                                    e2.Z,
                                                    ts(
                                                        {
                                                            ref: T,
                                                            plated: null != j,
                                                            tooltipForceOpen: $,
                                                            tooltipColor: $ ? _.FGA.GREEN : void 0,
                                                            tooltipContentClassName: $ ? ti.voiceFilterWarning : void 0,
                                                            tooltipText: $
                                                                ? (0, i.jsxs)(i.Fragment, {
                                                                      children: [
                                                                          (0, i.jsx)('img', {
                                                                              alt: null != k ? tn.intl.string(k.name) : '',
                                                                              src: null == k ? void 0 : k.iconURL,
                                                                              draggable: !1
                                                                          }),
                                                                          (0, i.jsx)(_.Text, {
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
                                                                color: en
                                                            }),
                                                            role: 'button',
                                                            className: ti.buttonChevron,
                                                            orangeGlow: Z,
                                                            redGlow: S,
                                                            'aria-label': tn.intl.string(tn.t.Hapb4O),
                                                            disabled: a,
                                                            onClick: (e) => {
                                                                null == t || t(), null == s || s(), n(e), null != A && !X && D ? (0, ew.$)(() => Q(!0)) : Q(!X);
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
function tf(e) {
    let { selfDeaf: t, serverDeaf: n, awaitingRemote: s, onClick: a, onContextMenu: o, iconForeground: c, nameplate: d } = e,
        u = t || n,
        {
            Component: m,
            play: p,
            events: { onMouseEnter: h, onMouseLeave: f }
        } = (0, g.l)(u ? 'undeafen' : 'deafen'),
        b = n ? _.Vm4 : m,
        { analyticsLocations: x } = (0, R.ZP)(P.Z.AUDIO_OUTPUT_BUTTON);
    r.useEffect(() => () => p(), [u, p]);
    let E = r.useCallback(
        (e) => {
            o(e, x);
        },
        [o, x]
    );
    return (0, i.jsx)(R.Gt, {
        value: x,
        children: (0, i.jsx)(e2.Z, {
            plated: null != d,
            tooltipText: (0, B.Z)(t, n, s),
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
