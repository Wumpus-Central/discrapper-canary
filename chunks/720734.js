n.d(t, {
    Z: () => e6,
    m: () => e1
}),
    n(47120),
    n(653041);
var r = n(200651),
    i = n(192379),
    s = n(120356),
    a = n.n(s),
    l = n(374470),
    o = n(442837),
    c = n(704215),
    d = n(846519),
    u = n(400354),
    m = n(652844),
    g = n(747906),
    p = n(789639),
    h = n(930295),
    f = n(481060),
    x = n(355467),
    N = n(239091),
    b = n(230711),
    _ = n(410575),
    E = n(941129),
    j = n(634894),
    C = n(586902),
    O = n(980591),
    v = n(907305),
    S = n(468363),
    T = n(297369),
    I = n(953372),
    y = n(570928),
    A = n(100527),
    P = n(906732),
    R = n(676742),
    D = n(1585),
    Z = n(304761),
    w = n(865427),
    k = n(571250),
    W = n(628581),
    L = n(55311),
    B = n(575175),
    M = n(522651),
    U = n(795318),
    V = n(64220),
    G = n(427217),
    F = n(540059),
    H = n(605236),
    z = n(243778),
    Y = n(258609),
    K = n(427347),
    q = n(331541),
    X = n(850020),
    J = n(379839),
    Q = n(359135),
    $ = n(516817),
    ee = n(332473),
    et = n(240504),
    en = n(637906),
    er = n(39370),
    ei = n(19199),
    es = n(866483),
    ea = n(14357),
    el = n(763296),
    eo = n(640806),
    ec = n(184301),
    ed = n(52538),
    eu = n(861254),
    em = n(221241),
    eg = n(879815),
    ep = n(294629),
    eh = n(875527),
    ef = n(56848),
    ex = n(378441),
    eN = n(358820),
    eb = n(469887),
    e_ = n(306609),
    eE = n(199902),
    ej = n(314897),
    eC = n(592125),
    eO = n(819640),
    ev = n(131951),
    eS = n(19780),
    eT = n(885110),
    eI = n(246946),
    ey = n(594174),
    eA = n(78839),
    eP = n(626135),
    eR = n(768581),
    eD = n(572004),
    eZ = n(585483),
    ew = n(70956),
    ek = n(74538),
    eW = n(374023),
    eL = n(51144),
    eB = n(998502),
    eM = n(870569),
    eU = n(345243),
    eV = n(115530),
    eG = n(981631),
    eF = n(215023),
    eH = n(388032),
    ez = n(615866);
function eY(e, t, n) {
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
function eK(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                eY(e, t, n[t]);
            });
    }
    return e;
}
function eq(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let eX = eB.ZP.getEnableHardwareAcceleration() ? f.Xo$ : f.qEK,
    eJ = 2 * ew.Z.Millis.MINUTE,
    eQ = 3 * ew.Z.Millis.SECOND,
    e$ = 30 * ew.Z.Millis.DAY;
function e0(e) {
    let { speaking: t, streaming: n, currentUser: s, status: l, handleMouseLeave: o, renderNameTag: c, nameplate: d, hovered: u } = e,
        m = (0, F.Q3)('RTC Avatar'),
        { coloredIconsEnabled: g } = (0, em.Z)({ location: 'RTC Avatar' }),
        p = (0, R.Z)(null == s ? void 0 : s.avatarDecoration),
        h = (0, eR.NZ)({
            avatarDecoration: p,
            size: (0, D.y9)(f.EFr.SIZE_32)
        }),
        x = (0, f.dQu)(f.TVs.modules.guildbar.AVATAR_SIZE),
        {
            updateOpenPopoutRef: N,
            highlightBadge: b,
            setHighlightBadge: E
        } = (function () {
            let e = i.useRef(null),
                t = i.useCallback((t) => {
                    e.current = () => {
                        t.onMouseDown(), t.onClick();
                    };
                }, []),
                [n, r] = i.useState(),
                [s, a] = i.useState(!1);
            return (
                (0, O.Z)(() => a(!0), 750),
                i.useEffect(() => {
                    let t = (t) => {
                        var n;
                        let { highlightBadge: i } = t;
                        null != i && r(i), null === (n = e.current) || void 0 === n || n.call(e);
                    };
                    return (
                        eZ.S.subscribe(eG.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, t),
                        () => {
                            eZ.S.unsubscribe(eG.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, t);
                        }
                    );
                }),
                {
                    updateOpenPopoutRef: t,
                    highlightBadge: s ? n : void 0,
                    setHighlightBadge: r
                }
            );
        })(),
        j = (0, J.A)(d);
    return null == s
        ? null
        : (0, r.jsx)(_.Z, {
              object: eG.qAy.AVATAR,
              children: (0, r.jsx)(f.yRy, {
                  clickTrap: !0,
                  renderPopout: (e) => {
                      let { closePopout: t, setPopoutRef: n } = e;
                      return (0, r.jsx)('div', {
                          className: ez.accountProfilePopoutWrapper,
                          children: (0, r.jsx)(q.Z, {
                              currentUser: s,
                              highlightBadge: b,
                              onClose: () => {
                                  null == t || t();
                              },
                              setPopoutRef: n
                          })
                      });
                  },
                  position: 'top',
                  align: 'left',
                  animation: f.yRy.Animation.FADE,
                  spacing: 14,
                  fixed: !0,
                  onRequestClose: () => {
                      o(), E(void 0);
                  },
                  preload: () =>
                      (0, ec.Z)(s, void 0, {
                          withMutualGuilds: !1,
                          withMutualFriends: !1
                      }),
                  children: (e) => (
                      N(e),
                      (0, r.jsxs)(
                          f.P3F,
                          eq(eK({ style: j }, e), {
                              'aria-label': eH.NW.string(eH.t['3Uj+2t']),
                              className: a()(ez.avatarWrapper, !m && g && ez.experiment, { [ez.plated]: null != d }),
                              children: [
                                  (0, r.jsx)($.Z, {
                                      nameplate: d,
                                      hovered: u,
                                      placement: Q.i.ACCOUNT
                                  }),
                                  (0, r.jsx)(eX, {
                                      size: m ? f.EFr['SIZE_'.concat(x)] : f.EFr.SIZE_32,
                                      src: s.getAvatarURL(void 0, m ? x - 4 : 32, !1),
                                      avatarDecoration: h,
                                      'aria-label': s.username,
                                      status: n ? eG.Skl.STREAMING : l,
                                      isSpeaking: t,
                                      className: ez.avatar
                                  }),
                                  (0, r.jsx)('div', {
                                      className: a()(ez.nameTag, { [ez.canCopy]: eD.wS }),
                                      children: c()
                                  })
                              ]
                          })
                      )
                  )
              })
          });
}
class e1 extends i.PureComponent {
    get isCopiedStreakGodlike() {
        let { copiedStreak: e } = this.state;
        return e >= 10;
    }
    componentDidUpdate(e) {
        let { speakingWhileMuted: t, occluded: n } = e,
            { speakingWhileMuted: r, occluded: i } = this.props;
        i !== n && this.handleOccludedChanged(), r !== t && this.handleSpeakingWhileMutedChanged();
    }
    componentWillUnmount() {
        this.copiedTimeout.stop(), this.copiedDecayTimeout.stop(), this.speakingWhileMutedTooltipTimeout.stop();
    }
    renderCopiedSuccess() {
        let { copiedStreak: e } = this.state,
            t = [eH.NW.string(eH.t.MSaeTU), eH.NW.string(eH.t.UmrCw8), eH.NW.string(eH.t.gKE0Ji), eH.NW.string(eH.t['4DSKbm']), eH.NW.string(eH.t['+8ENdX']), eH.NW.string(eH.t.GlWHv7), eH.NW.string(eH.t.hIzxU1), eH.NW.string(eH.t['26uMPD']), eH.NW.string(eH.t.uFs7R0), eH.NW.string(eH.t.bLXdcX), eH.NW.string(eH.t.gPg9fX)],
            n = Math.min(Math.max(0, e - 1), t.length - 1);
        return (0, r.jsx)(f.UkV, {
            isShaking: this.isCopiedStreakGodlike,
            children: t[n]
        });
    }
    renderStatus() {
        let { hovered: e } = this.state,
            { activities: t, activityStatusCleanupEnabled: n, applicationStream: i, currentUser: s, status: a, userTag: l, voiceActivityStatusEnabled: o, voiceChannel: c } = this.props;
        if (null == s) return null;
        if (
            (n || o) &&
            (0, T.Z)({
                activities: t,
                status: a,
                applicationStream: i,
                voiceChannel: o ? c : void 0
            })
        )
            return (0, r.jsx)(y.Z, {
                hoverText: l,
                forceHover: e,
                children: (0, r.jsx)(I.Z, {
                    user: s,
                    activities: t,
                    applicationStream: i,
                    voiceChannel: o ? c : void 0,
                    textClassName: ez.activityStatusText,
                    hideTooltip: !0
                })
            });
        let d =
            null == t
                ? void 0
                : t.find((e) => {
                      let { type: t } = e;
                      return t === eG.IIU.CUSTOM_STATUS;
                  });
        return null != d
            ? (0, r.jsx)(y.Z, {
                  hoverText: l,
                  forceHover: e,
                  children: (0, r.jsx)(G.Z, {
                      activity: d,
                      emojiClassName: ez.emoji,
                      className: ez.customStatus
                  })
              })
            : null != a && a !== eG.Skl.UNKNOWN && s.isPomelo()
              ? (0, r.jsx)(y.Z, {
                    hoverText: l,
                    forceHover: e,
                    children: eL.ZP.humanizeStatus(a)
                })
              : l;
    }
    renderAvatarWithPopout() {
        let { hovered: e } = this.state;
        return (0, r.jsx)(
            e0,
            eq(eK({}, this.props), {
                hovered: e,
                handleMouseLeave: this.handleMouseLeave,
                renderNameTag: this.renderNameTag
            })
        );
    }
    renderNameZone() {
        let { currentUser: e, dismissibleContents: t } = this.props;
        return null == e
            ? null
            : (0, r.jsx)(z.ZP, {
                  contentTypes: t.avatar,
                  children: (e) => {
                      let { visibleContent: t, markAsDismissed: n } = e;
                      return t === c.z.PREMIUM_SUBSCRIPTION_APRIL_MARKETING_DECO_TOOLTIP
                          ? (0, r.jsx)(V.Z, {
                                markAsDismissed: n,
                                children: () => this.renderAvatarWithPopout()
                            })
                          : this.renderAvatarWithPopout();
                  }
              });
    }
    render() {
        let { currentUser: e } = this.props;
        return null == e
            ? null
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsxs)('div', {
                          className: ez.container,
                          onMouseEnter: this.handleMouseEnter,
                          onMouseLeave: this.handleMouseLeave,
                          children: [
                              this.renderNameZone(),
                              (0, r.jsx)(
                                  e2,
                                  eq(eK({}, this.props, this.state), {
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
                      (0, r.jsx)(K.Z, {})
                  ]
              });
    }
    constructor(...e) {
        super(...e),
            eY(this, 'copiedTimeout', new d.V7()),
            eY(this, 'copiedDecayTimeout', new d.V7()),
            eY(this, 'speakingWhileMutedTooltipTimeout', new d.V7()),
            eY(this, 'lastSpeakingWhileMutedNotificationTime', void 0),
            eY(this, 'state', {
                hovered: !1,
                copiedStreak: 0,
                shouldShowNametagTooltip: !1,
                shouldShowCopiedFeedback: !1,
                shouldShowSpeakingWhileMutedTooltip: !1,
                hoveringOnMute: !1
            }),
            eY(this, 'handleToggleSelfMute', () => {
                let { serverMute: e, suppress: t, selfMute: n } = this.props;
                (0, B.Z)(e, t, eG.jXE.ACCOUNT_PANEL), (0, M.v)(A.Z.ACCOUNT, M.d.MIC, n);
            }),
            eY(this, 'handleToggleSelfDeaf', () => {
                let { serverDeaf: e, selfDeaf: t } = this.props;
                (0, L.Z)(e, eG.jXE.ACCOUNT_PANEL), (0, M.v)(A.Z.ACCOUNT, M.d.DEAFEN, !t);
            }),
            eY(this, 'handleOpenAccountSettings', () => {
                this.handleOpenSettings();
            }),
            eY(this, 'handleOpenSettings', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eG.oAB.ACCOUNT,
                    t = arguments.length > 1 ? arguments[1] : void 0,
                    n = arguments.length > 2 ? arguments[2] : void 0;
                b.Z.open(e, t, n);
            }),
            eY(this, 'handleOpenSettingsContextMenu', (e) => {
                let { currentUser: t } = this.props;
                null != t &&
                    (0, N.jW)(e, async () => {
                        let { default: e } = await n.e('2535').then(n.bind(n, 923422));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                eq(eK({}, n), {
                                    user: t,
                                    premiumSubscription: this.props.premiumSubscription,
                                    webBuildOverride: this.props.webBuildOverride,
                                    onInteraction: (0, U.u)('UserSettingsCogContextMenu', A.Z.ACCOUNT)
                                })
                            );
                    });
            }),
            eY(this, 'audioOnInteractionHandler', (0, U.u)('AudioDeviceMenu', A.Z.ACCOUNT)),
            eY(this, 'handleInputAudioContextMenu', (e, t) => {
                (0, N.jW)(e, async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 659580));
                    return () =>
                        (0, r.jsx)(P.Gt, {
                            value: t,
                            children: this.props.simplifiedCallSettingsEnabled
                                ? (0, r.jsx)(e, {
                                      onClose: N.Zy,
                                      renderInputDevices: !0,
                                      renderInputVolume: !0,
                                      simplified: !0,
                                      onInteraction: this.audioOnInteractionHandler
                                  })
                                : (0, r.jsx)(e, {
                                      onClose: N.Zy,
                                      renderInputDevices: !0,
                                      renderInputModes: !0,
                                      renderInputVolume: !0,
                                      onInteraction: this.audioOnInteractionHandler
                                  })
                        });
                });
            }),
            eY(this, 'handleOutputAudioContextMenu', (e, t) => {
                (0, N.jW)(e, async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 659580));
                    return () =>
                        (0, r.jsx)(P.Gt, {
                            value: t,
                            children: this.props.simplifiedCallSettingsEnabled
                                ? (0, r.jsx)(e, {
                                      onClose: N.Zy,
                                      renderOutputDevices: !0,
                                      renderOutputVolume: !0,
                                      simplified: !0,
                                      onInteraction: this.audioOnInteractionHandler
                                  })
                                : (0, r.jsx)(e, {
                                      onClose: N.Zy,
                                      renderOutputDevices: !0,
                                      renderOutputVolume: !0,
                                      onInteraction: this.audioOnInteractionHandler
                                  })
                        });
                });
            }),
            eY(this, 'handleMouseEnter', () => {
                this.setState({ hovered: !0 });
            }),
            eY(this, 'handleMouseLeave', () => {
                this.setState({ hovered: !1 });
            }),
            eY(this, 'handleMouseEnterMute', () => {
                this.setState({
                    hoveringOnMute: !0,
                    shouldShowSpeakingWhileMutedTooltip: !1
                }),
                    this.speakingWhileMutedTooltipTimeout.stop();
            }),
            eY(this, 'handleMouseLeaveMute', () => {
                this.setState({ hoveringOnMute: !1 });
            }),
            eY(this, 'handleCopyTag', () => {
                let { currentUser: e } = this.props,
                    { shouldShowNametagTooltip: t, copiedStreak: n } = this.state;
                if (null == e) return;
                (0, eD.JG)(
                    eL.ZP.getUserTag(e, {
                        decoration: 'never',
                        identifiable: 'always'
                    })
                ),
                    eP.default.track(eG.rMx.TEXT_COPIED, { type: 'User Tag' });
                let r = {
                    shouldShowCopiedFeedback: !0,
                    shouldShowNametagTooltip: !0
                };
                t || (r.copiedStreak = n + 1),
                    this.setState(r, () => {
                        this.copiedTimeout.start(1000, () => this.setState({ shouldShowNametagTooltip: !1 })), this.copiedDecayTimeout.start(2000, () => this.setState({ copiedStreak: 0 }));
                    });
            }),
            eY(this, 'handleOccludedChanged', () => {
                let { occluded: e } = this.props;
                e &&
                    this.setState({
                        shouldShowNametagTooltip: !1,
                        shouldShowSpeakingWhileMutedTooltip: !1
                    });
            }),
            eY(this, 'handleSpeakingWhileMutedChanged', () => {
                let { selfMute: e, serverMute: t, suppress: n, speakingWhileMuted: r, occluded: i } = this.props,
                    { hoveringOnMute: s } = this.state,
                    a = void 0 === this.lastSpeakingWhileMutedNotificationTime || Date.now() - this.lastSpeakingWhileMutedNotificationTime > eJ;
                r
                    ? s ||
                      !e ||
                      t ||
                      n ||
                      i ||
                      !a ||
                      this.setState({ shouldShowSpeakingWhileMutedTooltip: !0 }, () => {
                          (this.lastSpeakingWhileMutedNotificationTime = Date.now()), this.speakingWhileMutedTooltipTimeout.start(2000, () => this.setState({ shouldShowSpeakingWhileMutedTooltip: !1 }));
                      })
                    : (this.setState({ shouldShowSpeakingWhileMutedTooltip: !1 }), this.speakingWhileMutedTooltipTimeout.stop());
            }),
            eY(this, 'renderNameTag', () => {
                let { currentUser: e } = this.props;
                return null == e
                    ? null
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)('div', {
                                  className: ez.panelTitleContainer,
                                  children: (0, r.jsx)(eV.Z, { children: eL.ZP.getName(e) })
                              }),
                              (0, r.jsx)('div', {
                                  className: ez.panelSubtextContainer,
                                  children: (0, r.jsx)(eU.Z, { children: this.renderStatus() })
                              })
                          ]
                      });
            });
    }
}
function e2(e) {
    let { selfDeaf: t, selfMute: n, awaitingRemote: i, serverMute: s, serverDeaf: a, suppress: l, shouldShowSpeakingWhileMutedTooltip: o, isEligibleForPomelo: c, webBuildOverride: d, handleMouseEnterMute: u, handleMouseLeaveMute: m, handleToggleSelfDeaf: g, handleToggleSelfMute: p, handleInputAudioContextMenu: h, handleOutputAudioContextMenu: x, handleOpenAccountSettings: N, handleOpenSettingsContextMenu: b, dismissibleContents: _, nameplate: E } = e,
        j = (0, J.A)(E);
    return (0, r.jsxs)('div', {
        className: ez.buttons,
        style: j,
        children: [
            (0, r.jsx)(e8, {
                selfMute: n,
                serverMute: s,
                suppress: l,
                awaitingRemote: i,
                tooltipText: o ? eH.NW.string(eH.t['29gnR0']) : void 0,
                tooltipColor: o ? f.FGA.GREEN : void 0,
                tooltipForceOpen: o || void 0,
                onMouseEnter: u,
                onMouseLeave: m,
                onClick: p,
                onContextMenu: h,
                iconForeground: null != E ? ez.iconForeground : void 0,
                nameplate: E
            }),
            (0, r.jsx)(e4, {
                selfDeaf: t,
                serverDeaf: a,
                onClick: g,
                onContextMenu: x,
                awaitingRemote: i,
                iconForeground: null != E ? ez.iconForeground : void 0,
                nameplate: E
            }),
            (0, r.jsx)(e3, {
                isEligibleForPomelo: c,
                webBuildOverride: d,
                onClick: N,
                onContextMenu: b,
                dismissibleContents: _.settings,
                iconForeground: null != E ? ez.iconForeground : void 0,
                nameplate: E
            })
        ]
    });
}
function e6() {
    var e;
    let t = (0, o.e7)([ey.default], () => ey.default.getCurrentUser()),
        n = (0, o.e7)([ej.default], () => ej.default.getId()),
        {
            activities: s,
            streaming: a,
            status: l
        } = (0, o.cj)([eT.Z], () => {
            let e = eT.Z.getActivities();
            return {
                activities: e,
                streaming:
                    null !=
                    e.find((e) => {
                        let { type: t } = e;
                        return t === eG.IIU.STREAMING;
                    }),
                status: eT.Z.getStatus()
            };
        }),
        d = (0, o.e7)([eE.Z], () => eE.Z.getAnyStreamForUser(n)),
        u = (0, C.Z)({ userId: n }),
        m = eL.ZP.useUserTag(t, { decoration: 'never' }),
        g = (0, o.e7)([eI.Z], () => eI.Z.hidePersonalInformation),
        p = (0, o.e7)([eS.Z, eC.Z], () => {
            let e = eS.Z.getChannelId();
            return null != e ? eC.Z.getChannel(e) : null;
        }),
        { mute: h, selfMute: N, suppress: b } = (0, ep.Z)(p),
        { selfDeaf: _, deaf: O } = (0, eg.Z)(p),
        T = (0, o.e7)([Z.C], () => {
            var e;
            return (0, w.fD)() ? (null === (e = Z.C.getCurrentBuildOverride().overrides) || void 0 === e ? void 0 : e.discord_web) : null;
        }),
        I = (0, o.e7)([eA.ZP], () => eA.ZP.getPremiumTypeSubscription()),
        y = (0, o.e7)([ev.Z], () => ev.Z.getSpeakingWhileMuted()),
        R = (0, o.e7)([eO.Z], () => eO.Z.hasLayers()),
        D = (0, f.s9z)(f.JQI) || R || eW.s.isDisallowPopupsSet(),
        k = (0, ee.b)(),
        W = (0, o.e7)([Y.Z], () => null != Y.Z.getAwaitingRemoteSessionInfo()),
        L = (0, ei.D)(),
        B = (0, E.u)(),
        M = ek.ZP.canUsePremiumGuildMemberProfile(t),
        U = (null == t ? void 0 : null === (e = t.avatarDecoration) || void 0 === e ? void 0 : e.skuId) === eF.rL,
        { activityStatusCleanupEnabled: V } = (0, v.w)({ location: 'Account' }),
        { voiceActivityStatusEnabled: G } = (0, S.U)({ location: 'Account' }),
        { simplifiedSettingsEnabled: F } = (0, em.Z)({ location: 'Account' }),
        z = 'account';
    (0, j.j)({
        location: z + ' auto on',
        autoTrackExposure: !0
    }),
        (0, j.j)({
            location: z + ' auto off',
            autoTrackExposure: !1
        });
    let K = (0, o.e7)([el.Z], () => el.Z.hasHadOtherUserPlaySoundInSession()),
        q = (function () {
            let e = (0, H.wE)(c.z.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2),
                [t, n] = (0, o.Wu)([et.Z], () => [et.Z.hasFetchedRelevance, et.Z.profileThemesRelevanceExceeded]),
                [r, s] = (0, o.Wu)([eA.ZP], () => [eA.ZP.hasFetchedMostRecentPremiumTypeSubscription(), eA.ZP.getMostRecentPremiumTypeSubscription()]),
                { enabled: a } = en.Z.useExperiment({ location: '08bd40_1' }, { autoTrackExposure: !0 }),
                l = i.useMemo(() => {
                    let e = new Date().getTime();
                    return null != s && (s.status === eG.O0b.ACTIVE || e - s.currentPeriodEnd.getTime() < e$);
                }, [s]);
            return (
                i.useEffect(() => {
                    (async () => {
                        if (!e && null == n && a) {
                            if (!r) {
                                await (0, x.ou)();
                                return;
                            }
                            !l && (t || (await (0, x.l0)()));
                        }
                    })();
                }, [a, n, e, r, t, l]),
                !e && !!a && !l && null != n && n
            );
        })(),
        { analyticsLocations: J } = (0, P.ZP)(A.Z.ACCOUNT),
        Q = (0, X.K)({
            location: 'Account',
            user: t
        }),
        $ = {
            avatar: [],
            settings: []
        };
    return (
        !D && (q && $.settings.push(c.z.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2), L && (1 === B ? $.settings.push(c.z.USER_SAFETY_CONSUMER_EDUCATION_MUTE) : $.settings.push(c.z.USER_SAFETY_CONSUMER_EDUCATION_BLOCK)), K && $.settings.push(c.z.SOUNDBOARD_VOLUME_EDUCATION), M && $.settings.push(c.z.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK), U && $.avatar.push(c.z.PREMIUM_SUBSCRIPTION_APRIL_MARKETING_DECO_TOOLTIP)),
        (0, r.jsx)(P.Gt, {
            value: J,
            children: (0, r.jsx)(e1, {
                currentUser: t,
                activities: s,
                applicationStream: d,
                voiceChannel: p,
                dismissibleContents: $,
                userTag: m,
                hidePrivateData: g,
                occluded: D,
                premiumSubscription: I,
                selfDeaf: _,
                selfMute: N,
                serverDeaf: O,
                serverMute: h,
                speaking: u,
                speakingWhileMuted: y,
                status: l,
                streaming: a,
                suppress: b,
                webBuildOverride: T,
                awaitingRemote: W,
                isEligibleForPomelo: k,
                simplifiedCallSettingsEnabled: F,
                activityStatusCleanupEnabled: V,
                voiceActivityStatusEnabled: G,
                nameplate: Q
            })
        })
    );
}
function e3(e) {
    let { webBuildOverride: t, isEligibleForPomelo: n, onClick: i, onContextMenu: s, dismissibleContents: a, iconForeground: l, nameplate: o } = e,
        d = f.ewm,
        u = (0, p.i)();
    d = null != t ? f.bgT : n ? f.Ncx : u.Component;
    let [m, g] = (0, z.US)(a);
    return (0, r.jsx)(f.yRy, {
        position: 'top',
        align: 'center',
        shouldShow: null != m,
        renderPopout: m === c.z.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2 ? () => (0, r.jsx)(er.Z, {}) : m === c.z.USER_SAFETY_CONSUMER_EDUCATION_BLOCK ? () => (0, r.jsx)(es.Z, { markAsDismissed: g }) : m === c.z.USER_SAFETY_CONSUMER_EDUCATION_MUTE ? () => (0, r.jsx)(ea.Z, { markAsDismissed: g }) : m === c.z.SOUNDBOARD_VOLUME_EDUCATION ? () => (0, r.jsx)(eo.Z, { markAsDismissed: g }) : m === c.z.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK ? () => (0, r.jsx)(ed.Z, {}) : () => (0, r.jsx)(r.Fragment, {}),
        children: () =>
            (0, r.jsx)(
                eM.Z,
                eq(
                    eK(
                        {
                            tooltipText: null != t ? eH.NW.formatToPlainString(eH.t.Gzh6ZG, { webBuildOverride: t.id }) : eH.NW.string(eH.t.cduTBA),
                            onClick: i,
                            onContextMenu: s,
                            icon: (0, r.jsx)(d, {
                                size: 'refresh_sm',
                                color: 'currentColor',
                                className: l
                            })
                        },
                        u.events
                    ),
                    { plated: null != o }
                )
            )
    });
}
function e8(e) {
    let { selfMute: t, serverMute: n, suppress: s, awaitingRemote: c, tooltipText: d, tooltipColor: u, tooltipForceOpen: p, iconForeground: x, onMouseEnter: N, onMouseLeave: b, onClick: _, onContextMenu: E, nameplate: j } = e,
        C = t || s || n,
        O = i.useRef(null),
        v = (0, m.O)(C ? 'unmute' : 'mute'),
        S = (0, g.P)(C ? 'unmute' : 'mute'),
        { activeVoice: T } = (0, ex.o)(),
        I = null != T,
        y = (0, ef.z)(T),
        R = (0, o.e7)([eS.Z], () => eS.Z.isConnected()),
        { Component: D, events: Z, play: w } = I ? S : v,
        k = n || s ? f.v0G : D,
        { mode: L } = (0, eu.ZP)({ location: 'RTC Microphone Button' }),
        { coloredIconsEnabled: B } = (0, em.Z)({ location: 'RTC Microphone Button' }),
        M = null != d ? d : (0, W.Z)(t, n, s, c, L === eu.BK.GroupedButtonsRedMic),
        { analyticsLocations: U } = (0, P.ZP)(A.Z.AUDIO_INPUT_BUTTON),
        V = (0, eh.Hu)({
            location: A.Z.AUDIO_INPUT_BUTTON,
            autoTrackExposure: !0
        });
    i.useEffect(() => () => w(), [C, w]);
    let G = i.useCallback(
            (e) => {
                E(e, U);
            },
            [E, U]
        ),
        [F, H] = i.useState(!1),
        z = i.useCallback((e) => {
            var t;
            if ((0, l.k)(null == e ? void 0 : e.target, Node) && (null === (t = O.current) || void 0 === t ? void 0 : t.contains(e.target))) return h.F;
            H(!1);
        }, []),
        [Y, K] = i.useState(!1);
    return (
        i.useEffect(() => {
            let e;
            return (
                R &&
                    I &&
                    (e = setTimeout(() => {
                        K(!0), (e = setTimeout(() => K(!1), eQ));
                    }, 300)),
                () => {
                    K(!1), clearTimeout(e);
                }
            );
        }, [R]),
        (0, r.jsx)(P.Gt, {
            value: U,
            children: (0, r.jsxs)('div', {
                ref: O,
                className: ez.micButtonParent,
                children: [
                    (0, r.jsx)(eM.Z, {
                        tooltipText: M,
                        tooltipColor: u,
                        tooltipForceOpen: p,
                        plated: null != j,
                        onMouseEnter: () => {
                            N(), Z.onMouseEnter();
                        },
                        onMouseLeave: () => {
                            b(), Z.onMouseLeave();
                        },
                        icon: (0, r.jsx)(k, {
                            size: 'custom',
                            width: 20,
                            height: 20,
                            color: C ? f.TVs.colors.STATUS_DANGER : 'currentColor',
                            className: x
                        }),
                        onClick: _,
                        onContextMenu: G,
                        role: 'switch',
                        className: a()({ [ez.micButtonWithMenu]: V }),
                        redGlow: C && B,
                        'aria-label': eH.NW.string(eH.t['w4m94+']),
                        'aria-checked': C,
                        disabled: c
                    }),
                    V &&
                        (0, r.jsx)(f.yRy, {
                            position: 'top',
                            align: 'center',
                            animation: f.yRy.Animation.FADE,
                            useMouseEnter: !0,
                            ignoreModalClicks: !0,
                            onRequestOpen: eN.r5,
                            onRequestClose: z,
                            shouldShow: F,
                            renderPopout: (e) => {
                                let { closePopout: t } = e;
                                return (0, r.jsx)(e_.l, { onSettingsButtonClick: t });
                            },
                            children: (e, t) => {
                                var { onClick: n } = e,
                                    i = (function (e, t) {
                                        if (null == e) return {};
                                        var n,
                                            r,
                                            i = (function (e, t) {
                                                if (null == e) return {};
                                                var n,
                                                    r,
                                                    i = {},
                                                    s = Object.keys(e);
                                                for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                                                return i;
                                            })(e, t);
                                        if (Object.getOwnPropertySymbols) {
                                            var s = Object.getOwnPropertySymbols(e);
                                            for (r = 0; r < s.length; r++) (n = s[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                                        }
                                        return i;
                                    })(e, ['onClick']),
                                    { isShown: s } = t;
                                let a = s ? f.u04 : f.CJ0;
                                return (0, r.jsx)('div', {
                                    children: (0, r.jsx)(eb.B, {
                                        onCTA: () => H(!0),
                                        canBeShown: !s,
                                        children: (e, t) =>
                                            (0, r.jsx)(
                                                eM.Z,
                                                eK(
                                                    {
                                                        plated: null != j,
                                                        tooltipForceOpen: Y,
                                                        tooltipColor: Y ? f.FGA.GREEN : void 0,
                                                        tooltipContentClassName: Y ? ez.voiceFilterWarning : void 0,
                                                        tooltipText: Y
                                                            ? (0, r.jsxs)(r.Fragment, {
                                                                  children: [
                                                                      (0, r.jsx)('img', {
                                                                          alt: null != y ? eH.NW.string(y.name) : '',
                                                                          src: null == y ? void 0 : y.iconURL,
                                                                          draggable: !1
                                                                      }),
                                                                      (0, r.jsx)(f.Text, {
                                                                          variant: 'text-sm/medium',
                                                                          color: 'always-white',
                                                                          children: eH.NW.string(eH.t.VlC1dX)
                                                                      })
                                                                  ]
                                                              })
                                                            : eH.NW.string(eH.t.Hapb4O),
                                                        icon: (0, r.jsx)(a, {
                                                            className: ez.buttonChevronIcon,
                                                            size: 'custom',
                                                            width: 12,
                                                            height: 12,
                                                            color: B && C ? f.TVs.colors.STATUS_DANGER : f.TVs.colors.TEXT_NORMAL
                                                        }),
                                                        role: 'button',
                                                        className: ez.buttonChevron,
                                                        redGlow: C && B,
                                                        'aria-label': eH.NW.string(eH.t.Hapb4O),
                                                        disabled: c,
                                                        onClick: (e) => {
                                                            null == t || t(), n(e), H(!F);
                                                        }
                                                    },
                                                    i
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
function e4(e) {
    let { selfDeaf: t, serverDeaf: n, awaitingRemote: s, onClick: l, onContextMenu: o, iconForeground: c, nameplate: d } = e,
        m = t || n,
        {
            Component: g,
            play: p,
            events: { onMouseEnter: h, onMouseLeave: x }
        } = (0, u.l)(m ? 'undeafen' : 'deafen'),
        N = n ? f.Vm4 : g,
        { coloredIconsEnabled: b } = (0, em.Z)({ location: 'RTC Microphone Button' }),
        { analyticsLocations: _ } = (0, P.ZP)(A.Z.AUDIO_OUTPUT_BUTTON);
    i.useEffect(() => () => p(), [m, p]);
    let E = i.useCallback(
        (e) => {
            o(e, _);
        },
        [o, _]
    );
    return (0, r.jsx)(P.Gt, {
        value: _,
        children: (0, r.jsx)(eM.Z, {
            plated: null != d,
            tooltipText: (0, k.Z)(t, n, s),
            onMouseEnter: h,
            onMouseLeave: x,
            icon: (0, r.jsx)(N, {
                size: 'custom',
                width: 20,
                height: 20,
                color: m ? f.TVs.colors.STATUS_DANGER : 'currentColor',
                className: c
            }),
            onClick: l,
            onContextMenu: E,
            innerClassName: a()({ [ez.redIcon]: n }),
            iconForeground: m ? ez.strikethrough : void 0,
            role: 'switch',
            redGlow: b && m,
            'aria-label': eH.NW.string(eH.t.wjcRFR),
            'aria-checked': m,
            disabled: s
        })
    });
}
