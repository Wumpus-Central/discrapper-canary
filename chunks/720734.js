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
    z = n(459115),
    Y = n(427217),
    W = n(132750),
    K = n(243778),
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
    el = n(332473),
    ea = n(963590),
    eo = n(210308),
    ec = n(667105),
    ed = n(19199),
    eu = n(212704),
    em = n(14357),
    eg = n(763296),
    ep = n(640806),
    eh = n(768419),
    ef = n(184301),
    eb = n(52538),
    e_ = n(670188),
    ex = n(321614),
    eE = n(879815),
    ej = n(294629),
    eO = n(875527),
    eC = n(702977),
    eS = n(56848),
    ev = n(940315),
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
    eY = n(626135),
    eW = n(768581),
    eK = n(572004),
    eq = n(459273),
    eX = n(585483),
    eJ = n(70956),
    eQ = n(823379),
    e$ = n(74538),
    e0 = n(374023),
    e3 = n(51144),
    e1 = n(998502),
    e8 = n(578817),
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
let tl = e1.ZP.getEnableHardwareAcceleration() ? f.Xo$ : f.qEK,
    ta = 2 * eJ.Z.Millis.MINUTE,
    to = 3 * eJ.Z.Millis.SECOND;
function tc(e) {
    let { ref: t, speaking: n, streaming: s, currentUser: a, status: o, handleClick: c, handleMouseLeave: d, renderNameTag: u, nameplate: m, 'data-jump-section': g } = e,
        p = r.useRef(null),
        h = null != t ? t : p,
        b = (0, P.Z)(null == a ? void 0 : a.avatarDecoration),
        _ = (0, eW.NZ)({
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
                        t.onMouseDown(), t.onClick();
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
                        null != r && i(r), null == (n = e.current) || n.call(e);
                    };
                    return (
                        eX.S.subscribe(e4.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, t),
                        () => {
                            eX.S.unsubscribe(e4.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, t);
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
    return null == a
        ? null
        : (0, i.jsx)(x.Z, {
              object: e4.qAy.AVATAR,
              children: (0, i.jsx)(e_.Z, {
                  user: a,
                  targetElementRef: h,
                  clickTrap: !0,
                  preload: () =>
                      (0, ef.Z)(a.id, a.getAvatarURL(void 0, e_.I), {
                          type: 'account_popout',
                          withMutualGuilds: !1,
                          withMutualFriends: !1
                      }),
                  renderPopout: (e, t) => {
                      let { closePopout: n, setPopoutRef: r } = e;
                      return (0, i.jsx)(et.Z, {
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
                      d(), v(void 0);
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
                                      null == (n = e.onClick) || n.call(e, t), null == c || c(t);
                                  },
                                  'aria-label': tt.intl.string(tt.t['3Uj+2t']),
                                  'data-jump-section': g,
                                  className: l()(tn.avatarWrapper, { [tn.plated]: null != m }),
                                  children: [
                                      (0, i.jsx)(tl, {
                                          size: f.EFr['SIZE_'.concat(j)],
                                          src: a.getAvatarURL(void 0, j - 4, !1),
                                          avatarDecoration: _,
                                          'aria-label': a.username,
                                          status: s ? e4.Skl.STREAMING : o,
                                          isSpeaking: n,
                                          className: tn.avatar
                                      }),
                                      (0, i.jsx)('div', {
                                          className: l()(tn.nameTag, { [tn.canCopy]: eK.wS }),
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
            return (0, i.jsx)(I.Z, {
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
            ? (0, i.jsx)(I.Z, {
                  hoverText: l,
                  forceHover: e,
                  children: (0, i.jsx)(Y.Z, {
                      activity: u,
                      emojiClassName: tn.emoji,
                      className: tn.customStatus
                  })
              })
            : null != s && s !== e4.Skl.UNKNOWN && r.isPomelo()
              ? (0, i.jsx)(I.Z, {
                    hoverText: l,
                    forceHover: e,
                    children: (0, i.jsx)(N.Z, { text: e3.ZP.humanizeStatus(s) })
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
            return (0, i.jsx)(X.ZP, {
                guildId: null != (l = this.props.selectedGuildId) ? l : null,
                onDismiss: s,
                targetElementRef: this.avatarWithPopoutRef,
                children: () => this.renderAvatarWithPopout({ focusSectionProps: e })
            });
        }
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(eo.Z, {
                    groupName: e9.R.ACCOUNT_NAME_ZONE,
                    targetElementRef: this.avatarWithPopoutRef
                }),
                (0, i.jsx)(K.ZP, {
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
                                      (0, i.jsx)(es.Z, {
                                          nameplate: t,
                                          hovered: a,
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
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, e8.Q)('Account').jumpToVoice && eU.Z.isConnected() ? e4.oAB.VOICE : e4.oAB.ACCOUNT,
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
                        let { enabledInputProfiles: n } = (0, ex.c)({ location: 'Account' });
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
                (0, eK.JG)(
                    e3.ZP.getUserTag(e, {
                        decoration: 'never',
                        identifiable: 'always'
                    })
                ),
                    eY.default.track(e4.rMx.TEXT_COPIED, { type: 'User Tag' });
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
    let { selfDeaf: t, selfMute: n, awaitingRemote: r, serverMute: s, serverDeaf: l, suppress: a, shouldShowSpeakingWhileMutedTooltip: o, isEligibleForPomelo: c, webBuildOverride: d, handleMouseEnterMute: u, handleMouseLeaveMute: m, handleToggleSelfDeaf: g, handleToggleSelfMute: p, handleInputAudioContextMenu: h, handleOutputAudioContextMenu: b, handleOpenAccountSettings: _, handleOpenSettingsContextMenu: x, dismissibleContents: E, nameplate: j, accountContainerRef: O } = e,
        C = (0, ei.A)(j);
    return (0, i.jsxs)('div', {
        className: tn.buttons,
        style: C,
        children: [
            (0, i.jsx)(tp, {
                accountContainerRef: O,
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
    let t = (0, d.e7)([eH.default], () => eH.default.getCurrentUser()),
        n = (0, d.e7)([ew.default], () => ew.default.getId()),
        {
            activities: r,
            streaming: s,
            status: l
        } = (0, d.cj)([eG.Z], () => {
            let e = eG.Z.getActivities();
            return {
                activities: e,
                streaming:
                    null !=
                    e.find((e) => {
                        let { type: t } = e;
                        return t === e4.IIU.STREAMING;
                    }),
                status: eG.Z.getStatus()
            };
        }),
        a = (0, d.e7)([eZ.Z], () => eZ.Z.getAnyStreamForUser(n)),
        c = (0, O.Z)({ userId: n }),
        m = e3.ZP.useUserTag(t, { decoration: 'never' }),
        g = (0, d.e7)([eF.Z], () => eF.Z.hidePersonalInformation),
        p = (0, d.e7)([eU.Z, ek.Z], () => {
            let e = eU.Z.getChannelId();
            return null != e ? ek.Z.getChannel(e) : null;
        }),
        { mute: h, selfMute: b, suppress: _ } = (0, ej.Z)(p),
        { selfDeaf: x, deaf: C } = (0, eE.Z)(p),
        v = (0, d.e7)([D.C], () => {
            var e;
            return (0, Z.fD)() ? (null == (e = D.C.getCurrentBuildOverride().overrides) ? void 0 : e.discord_web) : null;
        }),
        T = (0, d.e7)([ez.ZP], () => ez.ZP.getPremiumTypeSubscription()),
        N = (0, d.e7)([eM.Z], () => eM.Z.getSpeakingWhileMuted()),
        I = (0, d.e7)([w.Z], () => w.Z.isFullscreenInContext()),
        P = (0, d.e7)([eB.Z], () => eB.Z.hasLayers()),
        R = (0, f.s9z)(f.JQI) || P || e0.s.isDisallowPopupsSet() || I,
        k = (0, el.b)(),
        L = (0, d.e7)([q.Z], () => null != q.Z.getAwaitingRemoteSessionInfo()),
        B = (0, d.e7)([eV.Z], () => eV.Z.getGuildId()),
        M = (0, ed.D)(),
        U = (0, E.u)(),
        V = e$.ZP.canUsePremiumGuildMemberProfile(t),
        G = (null == t || null == (e = t.avatarDecoration) ? void 0 : e.skuId) === e7.rL,
        { voiceActivityStatusEnabled: F } = (0, S.U)({ location: 'Account' }),
        H = (0, $.m)(),
        [Y, W] = (0, J.G)(null != B ? B : null),
        { customStatusRTCEntrypointEnabled: K, customStatusHoverOnlyRTCEntrypointEnabled: X } = (0, z.Z)({ location: 'Account' }),
        Q = 'account';
    (0, j.j)({
        location: Q + ' auto on',
        autoTrackExposure: !0
    }),
        (0, j.j)({
            location: Q + ' auto off',
            autoTrackExposure: !1
        });
    let ee = (0, d.e7)([eg.Z], () => eg.Z.hasHadOtherUserPlaySoundInSession()),
        { analyticsLocations: et } = (0, A.ZP)(y.Z.ACCOUNT),
        ei = (0, en.K)({ user: t }),
        er = (0, ec.Ws)({ location: te.dr.CONFLICT_CHECKS }),
        es = (0, d.e7)([eh.Z, eH.default, eL.Z], () => {
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
        ea = {
            avatar: [],
            settings: []
        };
    return (
        !R && (M && (1 === U ? ea.settings.push(u.z.USER_SAFETY_CONSUMER_EDUCATION_MUTE) : ea.settings.push(u.z.USER_SAFETY_CONSUMER_EDUCATION_BLOCK)), ee && ea.settings.push(u.z.SOUNDBOARD_VOLUME_EDUCATION), V && ea.settings.push(u.z.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK), G && ea.avatar.push(u.z.PREMIUM_SUBSCRIPTION_APRIL_MARKETING_DECO_TOOLTIP), H && ea.avatar.push(u.z.EXPIRING_STATUS_COACHMARK)),
        (0, i.jsx)(A.Gt, {
            value: et,
            children: (0, i.jsx)(td, {
                currentUser: t,
                activities: r,
                applicationStream: a,
                voiceChannel: p,
                dismissibleContents: ea,
                visibleRecurringAvatarDc: Y,
                markRecurringAvatarDcAsDismissed: W,
                userTag: m,
                hidePrivateData: g,
                occluded: R,
                premiumSubscription: T,
                selfDeaf: x,
                selfMute: b,
                serverDeaf: C,
                serverMute: h,
                speaking: c,
                speakingWhileMuted: N,
                status: l,
                streaming: s,
                suppress: _,
                webBuildOverride: v,
                awaitingRemote: L,
                isEligibleForPomelo: k,
                voiceActivityStatusEnabled: F,
                nameplate: ei,
                selectedGuildId: B,
                customStatusRTCEntrypointEnabled: K,
                customStatusHoverOnlyRTCEntrypointEnabled: X,
                isQuestBarEmpty: er,
                isListenAlongVisible: es
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
    let [h, b] = (0, K.US)(a);
    return (0, i.jsx)(f.yRy, {
        targetElementRef: d,
        position: 'top',
        align: 'center',
        shouldShow: null != h,
        renderPopout: h === u.z.USER_SAFETY_CONSUMER_EDUCATION_BLOCK ? () => (0, i.jsx)(eu.Z, { markAsDismissed: b }) : h === u.z.USER_SAFETY_CONSUMER_EDUCATION_MUTE ? () => (0, i.jsx)(em.Z, { markAsDismissed: b }) : h === u.z.SOUNDBOARD_VOLUME_EDUCATION ? () => (0, i.jsx)(ep.Z, { markAsDismissed: b }) : h === u.z.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK ? () => (0, i.jsx)(eb.Z, {}) : () => (0, i.jsx)(i.Fragment, {}),
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
    let { selfMute: t, serverMute: n, suppress: s, awaitingRemote: a, tooltipText: o, tooltipColor: m, tooltipForceOpen: g, iconForeground: p, onMouseEnter: b, onMouseLeave: _, onClick: x, onContextMenu: E, nameplate: j, accountContainerRef: O } = e,
        C = t || s || n,
        S = r.useRef(null),
        v = r.useRef(null),
        T = (0, eD.b)(C),
        { activeVoice: N, mostRecentlyRequestedVoiceId: I, lastInitAttemptMayHaveCrashed: P } = (0, eT.o)(),
        { showSilentLagWarning: R } = (0, ev.Y)(),
        D = null != N,
        Z = (0, eS.z)(N),
        w = (0, d.e7)([eU.Z], () => eU.Z.isConnected()),
        { Component: k, events: B, play: M } = T,
        U = n || s ? f.v0G : k,
        V = R ? tt.intl.string(tt.t.ARRV6u) : null,
        G = (0, L.Z)(t, n, s, a),
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
        Y = (0, eC.av)({
            location: y.Z.AUDIO_INPUT_BUTTON,
            autoTrackExposure: !0
        });
    r.useEffect(() => () => M(), [C, M]);
    let W = r.useCallback(
            (e) => {
                E(e, H);
            },
            [E, H]
        ),
        [q, X] = r.useState(!1),
        J = r.useCallback((e) => {
            var t;
            if ((0, c.k)(null == e ? void 0 : e.target, Node) && (null == (t = S.current) ? void 0 : t.contains(e.target))) return h.F;
            X(!1);
        }, []);
    (0, eq.yp)({
        event: e4.CkL.OPEN_VOICE_FILTER_POPOUT,
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
                    $(!0), (e = setTimeout(() => $(!1), to));
                }, 300)),
            () => {
                $(!1), clearTimeout(e);
            }
        );
    }, [w]);
    let ee = r.useCallback(() => {
            P || (0, eN.r5)();
        }, [P]),
        et = C ? f.TVs.colors.STATUS_DANGER : R ? f.TVs.colors.STATUS_WARNING : 'currentColor',
        en = C || R,
        ei = (0, ea.Z)({ location: 'Account' });
    return (0, i.jsx)(A.Gt, {
        value: H,
        children: (0, i.jsxs)('div', {
            ref: S,
            className: l()(tn.micButtonParent, { [tn.hasColorGlow]: en }),
            children: [
                (0, i.jsx)(e6.Z, {
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
                    className: l()({ [tn.micButtonWithMenu]: z }),
                    orangeGlow: R,
                    redGlow: C,
                    'aria-label': tt.intl.string(tt.t['w4m94+']),
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
                                    children: (0, i.jsx)(K.ZP, {
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
                                                    e6.Z,
                                                    tr(
                                                        {
                                                            ref: v,
                                                            plated: null != j,
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
                                                            icon: (0, i.jsx)(l, {
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
                                                            disabled: a,
                                                            onClick: (e) => {
                                                                s(e9.L.INDIRECT_ACTION), n(e), null != I && !q && P ? (0, eR.$)(() => X(!0)) : X(!q);
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
