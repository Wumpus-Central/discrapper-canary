(n.d(t, {
    Z: () => tu,
    m: () => tc
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
    E = n(586902),
    O = n(980591),
    C = n(468363),
    v = n(326255),
    S = n(771173),
    T = n(963056),
    N = n(570928),
    I = n(100527),
    y = n(906732),
    A = n(676742),
    P = n(1585),
    R = n(304761),
    D = n(865427),
    Z = n(358221),
    w = n(571250),
    k = n(628581),
    L = n(55311),
    B = n(575175),
    M = n(522651),
    U = n(795318),
    V = n(338390),
    G = n(526371),
    F = n(64220),
    H = n(427217),
    z = n(243778),
    W = n(821795),
    Y = n(892567),
    K = n(258609),
    q = n(53891),
    X = n(291533),
    J = n(427347),
    Q = n(50697),
    $ = n(90042),
    ee = n(78933),
    et = n(850020),
    en = n(379839),
    ei = n(359135),
    er = n(516817),
    es = n(332473),
    ea = n(963590),
    el = n(210308),
    eo = n(667105),
    ec = n(19199),
    ed = n(212704),
    eu = n(14357),
    em = n(763296),
    ep = n(640806),
    eg = n(768419),
    eh = n(184301),
    ef = n(52538),
    eb = n(670188),
    ex = n(321614),
    e_ = n(879815),
    ej = n(294629),
    eE = n(875527),
    eO = n(702977),
    eC = n(56848),
    ev = n(940315),
    eS = n(378441),
    eT = n(358820),
    eN = n(723547),
    eI = n(361045),
    ey = n(74650),
    eA = n(306609),
    eP = n(170293),
    eR = n(8404),
    eD = n(199902),
    eZ = n(314897),
    ew = n(592125),
    ek = n(831506),
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
    eK = n(459273),
    eq = n(585483),
    eX = n(70956),
    eJ = n(823379),
    eQ = n(74538),
    e$ = n(374023),
    e0 = n(51144),
    e1 = n(998502),
    e3 = n(578817),
    e6 = n(870569),
    e8 = n(345243),
    e2 = n(115530),
    e5 = n(981631),
    e7 = n(215023),
    e4 = n(921944),
    e9 = n(46140),
    te = n(388032),
    tt = n(239692);
function tn(e, t, n) {
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
function ti(e) {
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
                tn(e, t, n[t]);
            }));
    }
    return e;
}
function tr(e, t) {
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
let ts = e1.ZP.getEnableHardwareAcceleration() ? f.Xo$ : f.qEK,
    ta = 2 * eX.Z.Millis.MINUTE,
    tl = 3 * eX.Z.Millis.SECOND;
function to(e) {
    let { ref: t, speaking: n, streaming: s, currentUser: l, status: o, handleClick: c, handleMouseLeave: d, renderNameTag: u, nameplate: m, 'data-jump-section': p } = e,
        g = r.useRef(null),
        h = null != t ? t : g,
        b = (0, A.Z)(null == l ? void 0 : l.avatarDecoration),
        x = (0, eW.NZ)({
            avatarDecoration: b,
            size: (0, P.y9)(f.EFr.SIZE_32)
        }),
        j = (0, f.dQu)(f.TVs.modules.guildbar.AVATAR_SIZE),
        E = (0, V.Z)('Account') ? 32 : j,
        {
            updateOpenPopoutRef: C,
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
                (0, O.Z)(() => a(!0), 750),
                r.useEffect(() => {
                    let t = (t) => {
                        var n;
                        let { highlightBadge: r } = t;
                        (null != r && i(r), null == (n = e.current) || n.call(e));
                    };
                    return (
                        eq.S.subscribe(e5.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, t),
                        () => {
                            eq.S.unsubscribe(e5.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, t);
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
        T = (0, en.A)(m);
    return null == l
        ? null
        : (0, i.jsx)(_.Z, {
              object: e5.qAy.AVATAR,
              children: (0, i.jsx)(eb.Z, {
                  user: l,
                  targetElementRef: h,
                  clickTrap: !0,
                  preload: () =>
                      (0, eh.Z)(l.id, l.getAvatarURL(void 0, eb.I), {
                          type: 'account_popout',
                          withMutualGuilds: !1,
                          withMutualFriends: !1
                      }),
                  renderPopout: (e, t) => {
                      let { closePopout: n, setPopoutRef: r } = e;
                      return (0, i.jsx)(ee.Z, {
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
                      C(e),
                      (0, i.jsxs)(
                          f.P3F,
                          tr(
                              ti(
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
                                  'aria-label': te.intl.string(te.t['3Uj+2t']),
                                  'data-jump-section': p,
                                  className: a()(tt.avatarWrapper, { [tt.plated]: null != m }),
                                  children: [
                                      (0, i.jsx)(ts, {
                                          size: f.EFr['SIZE_'.concat(E)],
                                          src: l.getAvatarURL(void 0, E - 4, !1),
                                          avatarDecoration: x,
                                          'aria-label': l.username,
                                          status: s ? e5.Skl.STREAMING : o,
                                          isSpeaking: n,
                                          className: tt.avatar
                                      }),
                                      (0, i.jsx)('div', {
                                          className: a()(tt.nameTag, { [tt.canCopy]: eY.wS }),
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
class tc extends r.PureComponent {
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
            t = [te.intl.string(te.t.MSaeTU), te.intl.string(te.t.UmrCw8), te.intl.string(te.t.gKE0Ji), te.intl.string(te.t['4DSKbm']), te.intl.string(te.t['+8ENdX']), te.intl.string(te.t.GlWHv7), te.intl.string(te.t.hIzxU1), te.intl.string(te.t['26uMPD']), te.intl.string(te.t.uFs7R0), te.intl.string(te.t.bLXdcX), te.intl.string(te.t.gPg9fX)],
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
            (0, v.Z)({
                activities: t,
                status: s,
                applicationStream: n,
                voiceChannel: l ? o : void 0
            })
        )
            return (0, i.jsx)(N.Z, {
                hoverText: a,
                forceHover: e,
                children: (0, i.jsx)(S.Z, {
                    location: 'Account',
                    user: r,
                    activities: t,
                    applicationStream: n,
                    voiceChannel: l ? o : void 0,
                    textClassName: tt.activityStatusText,
                    hideTooltip: !0
                })
            });
        let c =
            null == t
                ? void 0
                : t.find((e) => {
                      let { type: t } = e;
                      return t === e5.IIU.CUSTOM_STATUS;
                  });
        return null != c
            ? (0, i.jsx)(N.Z, {
                  hoverText: a,
                  forceHover: e,
                  children: (0, i.jsx)(H.Z, {
                      activity: c,
                      emojiClassName: tt.emoji,
                      className: tt.customStatus
                  })
              })
            : null != s && s !== e5.Skl.UNKNOWN && r.isPomelo()
              ? (0, i.jsx)(N.Z, {
                    hoverText: a,
                    forceHover: e,
                    children: (0, i.jsx)(T.Z, { text: e0.ZP.humanizeStatus(s) })
                })
              : a;
    }
    renderAvatarWithPopout(e) {
        let {
            focusSectionProps: { 'data-jump-section': t },
            onClick: n
        } = e;
        return (0, i.jsx)(
            to,
            tr(ti({}, this.props), {
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
            return (0, i.jsx)(q.ZP, {
                guildId: null != (a = this.props.selectedGuildId) ? a : null,
                onDismiss: s,
                targetElementRef: this.avatarWithPopoutRef,
                children: this.renderAvatarWithPopout({ focusSectionProps: e })
            });
        }
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(el.Z, {
                    groupName: e4.R.ACCOUNT_NAME_ZONE,
                    targetElementRef: this.avatarWithPopoutRef
                }),
                (0, i.jsx)(z.ZP, {
                    contentTypes: n.avatar,
                    groupName: e4.R.ACCOUNT_NAME_ZONE,
                    children: (t) => {
                        let { visibleContent: n, markAsDismissed: r } = t;
                        switch (n) {
                            case u.z.PREMIUM_SUBSCRIPTION_APRIL_MARKETING_DECO_TOOLTIP:
                                return (0, i.jsx)(F.Z, {
                                    markAsDismissed: r,
                                    targetElementRef: this.avatarWithPopoutRef,
                                    children: () => this.renderAvatarWithPopout({ focusSectionProps: e })
                                });
                            case u.z.EXPIRING_STATUS_COACHMARK:
                                return (0, i.jsx)($.Z, {
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
                                  className: a()(tt.container, {
                                      [tt.containerRtcOpened]: null != n,
                                      [tt.containerQuestBarVisible]: !r,
                                      [tt.containerListenAlongVisible]: s
                                  }),
                                  onMouseEnter: this.handleMouseEnter,
                                  onMouseLeave: this.handleMouseLeave,
                                  children: [
                                      (0, i.jsx)(er.Z, {
                                          nameplate: t,
                                          hovered: l,
                                          placement: ei.i.ACCOUNT
                                      }),
                                      this.renderNameZone(e),
                                      (0, i.jsx)(
                                          td,
                                          tr(ti({}, this.props, this.state), {
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
                              (0, i.jsx)(J.Z, {}),
                              (0, i.jsx)(G.Z, {})
                          ]
                      })
              });
    }
    constructor(...e) {
        (super(...e),
            tn(this, 'copiedTimeout', new m.V7()),
            tn(this, 'copiedDecayTimeout', new m.V7()),
            tn(this, 'speakingWhileMutedTooltipTimeout', new m.V7()),
            tn(this, 'lastSpeakingWhileMutedNotificationTime', void 0),
            tn(this, 'state', {
                hovered: !1,
                copiedStreak: 0,
                shouldShowNametagTooltip: !1,
                shouldShowCopiedFeedback: !1,
                shouldShowSpeakingWhileMutedTooltip: !1,
                hoveringOnMute: !1
            }),
            tn(this, 'containerRef', r.createRef()),
            tn(this, 'avatarWithPopoutRef', r.createRef()),
            tn(this, 'handleToggleSelfMute', () => {
                let { serverMute: e, suppress: t, selfMute: n } = this.props;
                ((0, B.Z)(e, t, e5.jXE.ACCOUNT_PANEL), (0, M.v)(I.Z.ACCOUNT, M.d.MIC, n));
            }),
            tn(this, 'handleToggleSelfDeaf', () => {
                let { serverDeaf: e, selfDeaf: t } = this.props;
                ((0, L.Z)(e, e5.jXE.ACCOUNT_PANEL), (0, M.v)(I.Z.ACCOUNT, M.d.DEAFEN, !t));
            }),
            tn(this, 'handleOpenAccountSettings', () => {
                this.handleOpenSettings();
            }),
            tn(this, 'handleOpenSettings', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, e3.Q)('Account').jumpToVoice && eM.Z.isConnected() ? e5.oAB.VOICE : e5.oAB.ACCOUNT,
                    t = arguments.length > 1 ? arguments[1] : void 0,
                    n = arguments.length > 2 ? arguments[2] : void 0;
                x.Z.open(e, t, n);
            }),
            tn(this, 'handleOpenSettingsContextMenu', (e) => {
                let { currentUser: t } = this.props;
                null != t &&
                    (0, b.jW)(e, async () => {
                        let { default: e } = await n.e('2535').then(n.bind(n, 923422));
                        return (n) =>
                            (0, i.jsx)(
                                e,
                                tr(ti({}, n), {
                                    user: t,
                                    premiumSubscription: this.props.premiumSubscription,
                                    webBuildOverride: this.props.webBuildOverride,
                                    onInteraction: (0, U.u)('UserSettingsCogContextMenu', I.Z.ACCOUNT)
                                })
                            );
                    });
            }),
            tn(this, 'audioOnInteractionHandler', (0, U.u)('AudioDeviceMenu', I.Z.ACCOUNT)),
            tn(this, 'handleInputAudioContextMenu', (e, t) => {
                (0, b.jW)(e, async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 659580));
                    return () => {
                        let { enabledInputProfiles: n } = (0, ex.c)({ location: 'Account' });
                        return (0, i.jsx)(y.Gt, {
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
            tn(this, 'handleOutputAudioContextMenu', (e, t) => {
                (0, b.jW)(e, async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 659580));
                    return () =>
                        (0, i.jsx)(y.Gt, {
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
            tn(this, 'handleMouseEnter', () => {
                this.setState({ hovered: !0 });
            }),
            tn(this, 'handleMouseLeave', () => {
                this.setState({ hovered: !1 });
            }),
            tn(this, 'handleMouseEnterMute', () => {
                (this.setState({
                    hoveringOnMute: !0,
                    shouldShowSpeakingWhileMutedTooltip: !1
                }),
                    this.speakingWhileMutedTooltipTimeout.stop());
            }),
            tn(this, 'handleMouseLeaveMute', () => {
                this.setState({ hoveringOnMute: !1 });
            }),
            tn(this, 'handleCopyTag', () => {
                let { currentUser: e } = this.props,
                    { shouldShowNametagTooltip: t, copiedStreak: n } = this.state;
                if (null == e) return;
                ((0, eY.JG)(
                    e0.ZP.getUserTag(e, {
                        decoration: 'never',
                        identifiable: 'always'
                    })
                ),
                    ez.default.track(e5.rMx.TEXT_COPIED, { type: 'User Tag' }));
                let i = {
                    shouldShowCopiedFeedback: !0,
                    shouldShowNametagTooltip: !0
                };
                (t || (i.copiedStreak = n + 1),
                    this.setState(i, () => {
                        (this.copiedTimeout.start(1000, () => this.setState({ shouldShowNametagTooltip: !1 })), this.copiedDecayTimeout.start(2000, () => this.setState({ copiedStreak: 0 })));
                    }));
            }),
            tn(this, 'handleOccludedChanged', () => {
                let { occluded: e } = this.props;
                e &&
                    this.setState({
                        shouldShowNametagTooltip: !1,
                        shouldShowSpeakingWhileMutedTooltip: !1
                    });
            }),
            tn(this, 'handleSpeakingWhileMutedChanged', () => {
                let { selfMute: e, serverMute: t, suppress: n, speakingWhileMuted: i, occluded: r } = this.props,
                    { hoveringOnMute: s } = this.state,
                    a = void 0 === this.lastSpeakingWhileMutedNotificationTime || Date.now() - this.lastSpeakingWhileMutedNotificationTime > ta;
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
            tn(this, 'renderNameTag', (e) => {
                let { currentUser: t } = this.props;
                return null == t
                    ? null
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)('div', {
                                  className: tt.panelTitleContainer,
                                  children: (0, i.jsx)(e2.Z, {
                                      children: (0, i.jsx)(Y.Z, {
                                          userName: e0.ZP.getName(t),
                                          displayNameStyles: e,
                                          effectDisplayType: W.F.STATIC
                                      })
                                  })
                              }),
                              (0, i.jsx)('div', {
                                  className: tt.panelSubtextContainer,
                                  children: (0, i.jsx)(e8.Z, { children: this.renderStatus() })
                              })
                          ]
                      });
            }));
    }
}
function td(e) {
    let { selfDeaf: t, selfMute: n, awaitingRemote: r, serverMute: s, serverDeaf: a, suppress: l, shouldShowSpeakingWhileMutedTooltip: o, isEligibleForPomelo: c, webBuildOverride: d, handleMouseEnterMute: u, handleMouseLeaveMute: m, handleToggleSelfDeaf: p, handleToggleSelfMute: g, handleInputAudioContextMenu: h, handleOutputAudioContextMenu: b, handleOpenAccountSettings: x, handleOpenSettingsContextMenu: _, dismissibleContents: j, nameplate: E, accountContainerRef: O } = e,
        C = (0, en.A)(E);
    return (0, i.jsxs)('div', {
        className: tt.buttons,
        style: C,
        children: [
            (0, i.jsx)(tp, {
                accountContainerRef: O,
                selfMute: n,
                serverMute: s,
                suppress: l,
                awaitingRemote: r,
                tooltipText: o ? te.intl.string(te.t['29gnR0']) : void 0,
                tooltipColor: o ? f.FGA.GREEN : void 0,
                tooltipForceOpen: o || void 0,
                onMouseEnter: u,
                onMouseLeave: m,
                onClick: g,
                onContextMenu: h,
                iconForeground: null != E ? tt.iconForeground : void 0,
                nameplate: E
            }),
            (0, i.jsx)(tg, {
                selfDeaf: t,
                serverDeaf: a,
                onClick: p,
                onContextMenu: b,
                awaitingRemote: r,
                iconForeground: null != E ? tt.iconForeground : void 0,
                nameplate: E
            }),
            (0, i.jsx)(tm, {
                isEligibleForPomelo: c,
                webBuildOverride: d,
                onClick: x,
                onContextMenu: _,
                dismissibleContents: j.settings,
                iconForeground: null != E ? tt.iconForeground : void 0,
                nameplate: E
            })
        ]
    });
}
function tu() {
    var e;
    let t = (0, d.e7)([eF.default], () => eF.default.getCurrentUser()),
        n = (0, d.e7)([eZ.default], () => eZ.default.getId()),
        {
            activities: r,
            streaming: s,
            status: a
        } = (0, d.cj)([eV.Z], () => {
            let e = eV.Z.getActivities();
            return {
                activities: e,
                streaming:
                    null !=
                    e.find((e) => {
                        let { type: t } = e;
                        return t === e5.IIU.STREAMING;
                    }),
                status: eV.Z.getStatus()
            };
        }),
        l = (0, d.e7)([eD.Z], () => eD.Z.getAnyStreamForUser(n)),
        c = (0, E.Z)({ userId: n }),
        m = e0.ZP.useUserTag(t, { decoration: 'never' }),
        p = (0, d.e7)([eG.Z], () => eG.Z.hidePersonalInformation),
        g = (0, d.e7)([eM.Z, ew.Z], () => {
            let e = eM.Z.getChannelId();
            return null != e ? ew.Z.getChannel(e) : null;
        }),
        { mute: h, selfMute: b, suppress: x } = (0, ej.Z)(g),
        { selfDeaf: _, deaf: O } = (0, e_.Z)(g),
        v = (0, d.e7)([R.C], () => {
            var e;
            return (0, D.fD)() ? (null == (e = R.C.getCurrentBuildOverride().overrides) ? void 0 : e.discord_web) : null;
        }),
        S = (0, d.e7)([eH.Z], () => eH.Z.getPremiumTypeSubscription()),
        T = (0, d.e7)([eB.Z], () => eB.Z.getSpeakingWhileMuted()),
        N = (0, d.e7)([Z.Z], () => Z.Z.isFullscreenInContext()),
        A = (0, d.e7)([eL.Z], () => eL.Z.hasLayers()),
        P = (0, f.s9z)(f.JQI) || A || e$.s.isDisallowPopupsSet() || N,
        w = (0, es.b)(),
        k = (0, d.e7)([K.Z], () => null != K.Z.getAwaitingRemoteSessionInfo()),
        L = (0, d.e7)([eU.Z], () => eU.Z.getGuildId()),
        B = (0, ec.D)(),
        M = (0, j.u)(),
        U = eQ.ZP.canUsePremiumGuildMemberProfile(t),
        V = (null == t || null == (e = t.avatarDecoration) ? void 0 : e.skuId) === e7.rL,
        { voiceActivityStatusEnabled: G } = (0, C.U)({ location: 'Account' }),
        F = (0, Q.m)(),
        [H, z] = (0, X.G)(null != L ? L : null),
        W = (0, d.e7)([em.Z], () => em.Z.hasHadOtherUserPlaySoundInSession()),
        { analyticsLocations: Y } = (0, y.ZP)(I.Z.ACCOUNT),
        q = (0, et.K)({ user: t }),
        J = (0, eo.Ws)({ location: e9.dr.CONFLICT_CHECKS }),
        $ = (0, d.e7)([eg.Z, eF.default, ek.Z], () => {
            let e,
                t = eg.Z.getSyncingWith(),
                n = eg.Z.getActivity(),
                i = [];
            if ((null != t ? (e = t.partyId) : null != n && null != n.party && null != n.party.id && (e = n.party.id), null != e)) {
                var r;
                i = o()(Array.from(null != (r = ek.Z.getParty(e)) ? r : []))
                    .map((e) => eF.default.getUser(e))
                    .filter(eJ.lm)
                    .value();
            }
            return i.length > 1;
        }),
        ee = {
            avatar: [],
            settings: []
        };
    return (
        !P && (B && (1 === M ? ee.settings.push(u.z.USER_SAFETY_CONSUMER_EDUCATION_MUTE) : ee.settings.push(u.z.USER_SAFETY_CONSUMER_EDUCATION_BLOCK)), W && ee.settings.push(u.z.SOUNDBOARD_VOLUME_EDUCATION), U && ee.settings.push(u.z.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK), V && ee.avatar.push(u.z.PREMIUM_SUBSCRIPTION_APRIL_MARKETING_DECO_TOOLTIP), F && ee.avatar.push(u.z.EXPIRING_STATUS_COACHMARK)),
        (0, i.jsx)(y.Gt, {
            value: Y,
            children: (0, i.jsx)(tc, {
                currentUser: t,
                activities: r,
                applicationStream: l,
                voiceChannel: g,
                dismissibleContents: ee,
                visibleRecurringAvatarDc: H,
                markRecurringAvatarDcAsDismissed: z,
                userTag: m,
                hidePrivateData: p,
                occluded: P,
                premiumSubscription: S,
                selfDeaf: _,
                selfMute: b,
                serverDeaf: O,
                serverMute: h,
                speaking: c,
                speakingWhileMuted: T,
                status: a,
                streaming: s,
                suppress: x,
                webBuildOverride: v,
                awaitingRemote: k,
                isEligibleForPomelo: w,
                voiceActivityStatusEnabled: G,
                nameplate: q,
                selectedGuildId: L,
                isQuestBarEmpty: J,
                isListenAlongVisible: $
            })
        })
    );
}
function tm(e) {
    let { webBuildOverride: t, isEligibleForPomelo: n, onClick: s, onContextMenu: a, dismissibleContents: l, iconForeground: o, nameplate: c } = e,
        d = r.useRef(null),
        m = f.ewm,
        p = (0, g.i)();
    m = null != t ? f.bgT : n ? f.Ncx : p.Component;
    let [h, b] = (0, z.US)(l);
    return (0, i.jsx)(f.yRy, {
        targetElementRef: d,
        position: 'top',
        align: 'center',
        shouldShow: null != h,
        renderPopout: h === u.z.USER_SAFETY_CONSUMER_EDUCATION_BLOCK ? () => (0, i.jsx)(ed.Z, { markAsDismissed: b }) : h === u.z.USER_SAFETY_CONSUMER_EDUCATION_MUTE ? () => (0, i.jsx)(eu.Z, { markAsDismissed: b }) : h === u.z.SOUNDBOARD_VOLUME_EDUCATION ? () => (0, i.jsx)(ep.Z, { markAsDismissed: b }) : h === u.z.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK ? () => (0, i.jsx)(ef.Z, {}) : () => (0, i.jsx)(i.Fragment, {}),
        children: () =>
            (0, i.jsx)(
                e6.Z,
                tr(
                    ti(
                        {
                            ref: d,
                            tooltipText: null != t ? te.intl.formatToPlainString(te.t.Gzh6ZG, { webBuildOverride: t.id }) : te.intl.string(te.t.cduTBA),
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
function tp(e) {
    let { selfMute: t, serverMute: n, suppress: s, awaitingRemote: l, tooltipText: o, tooltipColor: m, tooltipForceOpen: p, iconForeground: g, onMouseEnter: b, onMouseLeave: x, onClick: _, onContextMenu: j, nameplate: E, accountContainerRef: O } = e,
        C = t || s || n,
        v = r.useRef(null),
        S = r.useRef(null),
        T = (0, eR.b)(C),
        { activeVoice: N, mostRecentlyRequestedVoiceId: A, lastInitAttemptMayHaveCrashed: P } = (0, eS.o)(),
        { showSilentLagWarning: R } = (0, ev.Y)(),
        D = null != N,
        Z = (0, eC.z)(N),
        w = (0, d.e7)([eM.Z], () => eM.Z.isConnected()),
        { Component: L, events: B, play: M } = T,
        U = n || s ? f.v0G : L,
        V = R ? te.intl.string(te.t.ARRV6u) : null,
        G = (0, k.Z)(t, n, s, l),
        F =
            null != o
                ? o
                : null != V
                  ? (0, i.jsxs)('div', {
                        className: tt.tooltipWithSubtext,
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
        { analyticsLocations: H } = (0, y.ZP)(I.Z.AUDIO_INPUT_BUTTON),
        W = (0, eE.Hu)({
            location: I.Z.AUDIO_INPUT_BUTTON,
            autoTrackExposure: !0
        }),
        Y = (0, eO.av)({
            location: I.Z.AUDIO_INPUT_BUTTON,
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
    (0, eK.yp)({
        event: e5.CkL.OPEN_VOICE_FILTER_POPOUT,
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
                    ($(!0), (e = setTimeout(() => $(!1), tl)));
                }, 300)),
            () => {
                ($(!1), clearTimeout(e));
            }
        );
    }, [w]);
    let ee = r.useCallback(() => {
            P || (0, eT.r5)();
        }, [P]),
        et = C ? f.TVs.colors.STATUS_DANGER : R ? f.TVs.colors.STATUS_WARNING : 'currentColor',
        en = C || R,
        ei = (0, ea.Z)({ location: 'Account' });
    return (0, i.jsx)(y.Gt, {
        value: H,
        children: (0, i.jsxs)('div', {
            ref: v,
            className: a()(tt.micButtonParent, { [tt.hasColorGlow]: en }),
            children: [
                (0, i.jsx)(e6.Z, {
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
                    className: a()({ [tt.micButtonWithMenu]: W }),
                    orangeGlow: R,
                    redGlow: C,
                    'aria-label': te.intl.string(te.t['w4m94+']),
                    'aria-checked': C,
                    disabled: l
                }),
                W &&
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
                            return (0, i.jsx)(eA.l, { onSettingsButtonClick: t });
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
                                    children: (0, i.jsx)(z.ZP, {
                                        bypassAutoDismiss: !0,
                                        contentTypes: o,
                                        children: (e) => {
                                            let { visibleContent: t, markAsDismissed: s } = e,
                                                o = null;
                                            t === u.z.VOICE_FILTER_EARLY_ACCESS_COACHMARK
                                                ? (o = (0, i.jsx)(ey.U, {
                                                      markAsDismissed: s,
                                                      onCTA: () => X(!0)
                                                  }))
                                                : t === u.z.VOICE_FILTER_LAUNCH_COACHMARK
                                                  ? (o = (0, i.jsx)(eI.n, {
                                                        markAsDismissed: s,
                                                        onCTA: () => X(!0)
                                                    }))
                                                  : t === u.z.VOICE_FILTER_FIRST_USE_COACHMARK &&
                                                    (o = (0, i.jsx)(eN.v, {
                                                        markAsDismissed: s,
                                                        onCTA: () => X(!0)
                                                    }));
                                            let c = () =>
                                                (0, i.jsx)(
                                                    e6.Z,
                                                    ti(
                                                        {
                                                            ref: S,
                                                            plated: null != E,
                                                            tooltipForceOpen: Q,
                                                            tooltipColor: Q ? f.FGA.GREEN : void 0,
                                                            tooltipContentClassName: Q ? tt.voiceFilterWarning : void 0,
                                                            tooltipText: Q
                                                                ? (0, i.jsxs)(i.Fragment, {
                                                                      children: [
                                                                          (0, i.jsx)('img', {
                                                                              alt: null != Z ? te.intl.string(Z.name) : '',
                                                                              src: null == Z ? void 0 : Z.iconURL,
                                                                              draggable: !1
                                                                          }),
                                                                          (0, i.jsx)(f.Text, {
                                                                              variant: 'text-sm/medium',
                                                                              color: 'always-white',
                                                                              children: te.intl.string(te.t.VlC1dX)
                                                                          })
                                                                      ]
                                                                  })
                                                                : te.intl.string(te.t.Hapb4O),
                                                            icon: (0, i.jsx)(a, {
                                                                className: tt.buttonChevronIcon,
                                                                size: 'custom',
                                                                width: 12,
                                                                height: 12,
                                                                color: et
                                                            }),
                                                            role: 'button',
                                                            className: tt.buttonChevron,
                                                            orangeGlow: R,
                                                            redGlow: C,
                                                            'aria-label': te.intl.string(te.t.Hapb4O),
                                                            disabled: l,
                                                            onClick: (e) => {
                                                                (s(e4.L.INDIRECT_ACTION), n(e), null != A && !q && P ? (0, eP.$)(() => X(!0)) : X(!q));
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
function tg(e) {
    let { selfDeaf: t, serverDeaf: n, awaitingRemote: s, onClick: l, onContextMenu: o, iconForeground: c, nameplate: d } = e,
        u = t || n,
        {
            Component: m,
            play: g,
            events: { onMouseEnter: h, onMouseLeave: b }
        } = (0, p.l)(u ? 'undeafen' : 'deafen'),
        x = n ? f.Vm4 : m,
        { analyticsLocations: _ } = (0, y.ZP)(I.Z.AUDIO_OUTPUT_BUTTON);
    r.useEffect(() => () => g(), [u, g]);
    let j = r.useCallback(
        (e) => {
            o(e, _);
        },
        [o, _]
    );
    return (0, i.jsx)(y.Gt, {
        value: _,
        children: (0, i.jsx)(e6.Z, {
            plated: null != d,
            tooltipText: (0, w.Z)(t, n, s),
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
            innerClassName: a()({ [tt.redIcon]: n }),
            iconForeground: u ? tt.strikethrough : void 0,
            role: 'switch',
            redGlow: u,
            'aria-label': te.intl.string(te.t.wjcRFR),
            'aria-checked': u,
            disabled: s
        })
    });
}
