n.d(t, {
    Z: () => e2,
    m: () => e0
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
    v = n(468363),
    S = n(326255),
    T = n(747017),
    I = n(570928),
    y = n(100527),
    A = n(906732),
    P = n(676742),
    R = n(1585),
    D = n(304761),
    Z = n(865427),
    w = n(571250),
    k = n(628581),
    W = n(55311),
    L = n(575175),
    B = n(522651),
    M = n(795318),
    U = n(64220),
    V = n(427217),
    G = n(540059),
    F = n(605236),
    H = n(243778),
    z = n(258609),
    Y = n(427347),
    K = n(331541),
    q = n(850020),
    X = n(379839),
    J = n(359135),
    Q = n(516817),
    $ = n(332473),
    ee = n(240504),
    et = n(637906),
    en = n(39370),
    er = n(19199),
    ei = n(866483),
    es = n(14357),
    ea = n(763296),
    el = n(640806),
    eo = n(184301),
    ec = n(52538),
    ed = n(861254),
    eu = n(221241),
    em = n(879815),
    eg = n(294629),
    ep = n(875527),
    eh = n(56848),
    ef = n(378441),
    ex = n(358820),
    eN = n(469887),
    eb = n(306609),
    e_ = n(199902),
    eE = n(314897),
    ej = n(592125),
    eC = n(819640),
    eO = n(131951),
    ev = n(19780),
    eS = n(885110),
    eT = n(246946),
    eI = n(594174),
    ey = n(78839),
    eA = n(626135),
    eP = n(768581),
    eR = n(572004),
    eD = n(585483),
    eZ = n(70956),
    ew = n(74538),
    ek = n(374023),
    eW = n(51144),
    eL = n(998502),
    eB = n(870569),
    eM = n(345243),
    eU = n(115530),
    eV = n(981631),
    eG = n(215023),
    eF = n(388032),
    eH = n(615866);
function ez(e, t, n) {
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
function eY(e) {
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
                ez(e, t, n[t]);
            });
    }
    return e;
}
function eK(e, t) {
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
let eq = eL.ZP.getEnableHardwareAcceleration() ? f.Xo$ : f.qEK,
    eX = 2 * eZ.Z.Millis.MINUTE,
    eJ = 3 * eZ.Z.Millis.SECOND,
    eQ = 30 * eZ.Z.Millis.DAY;
function e$(e) {
    let { speaking: t, streaming: n, currentUser: s, status: l, handleMouseLeave: o, renderNameTag: c, nameplate: d, hovered: u, 'data-jump-section': m } = e,
        g = (0, G.Q3)('RTC Avatar'),
        { coloredIconsEnabled: p } = (0, eu.Z)({ location: 'RTC Avatar' }),
        h = (0, P.Z)(null == s ? void 0 : s.avatarDecoration),
        x = (0, eP.NZ)({
            avatarDecoration: h,
            size: (0, R.y9)(f.EFr.SIZE_32)
        }),
        N = (0, f.dQu)(f.TVs.modules.guildbar.AVATAR_SIZE),
        {
            updateOpenPopoutRef: b,
            highlightBadge: E,
            setHighlightBadge: j
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
                        eD.S.subscribe(eV.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, t),
                        () => {
                            eD.S.unsubscribe(eV.CkL.SHOW_ACCOUNT_PROFILE_POPOUT, t);
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
        C = (0, X.A)(d);
    return null == s
        ? null
        : (0, r.jsx)(_.Z, {
              object: eV.qAy.AVATAR,
              children: (0, r.jsx)(f.yRy, {
                  clickTrap: !0,
                  renderPopout: (e) => {
                      let { closePopout: t, setPopoutRef: n } = e;
                      return (0, r.jsx)('div', {
                          className: eH.accountProfilePopoutWrapper,
                          children: (0, r.jsx)(K.Z, {
                              currentUser: s,
                              highlightBadge: E,
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
                      o(), j(void 0);
                  },
                  preload: () =>
                      (0, eo.Z)(s, void 0, {
                          withMutualGuilds: !1,
                          withMutualFriends: !1
                      }),
                  children: (e) => (
                      b(e),
                      (0, r.jsxs)(
                          f.P3F,
                          eK(eY({ style: C }, e), {
                              'aria-label': eF.NW.string(eF.t['3Uj+2t']),
                              'data-jump-section': g ? m : void 0,
                              className: a()(eH.avatarWrapper, !g && p && eH.experiment, { [eH.plated]: null != d }),
                              children: [
                                  (0, r.jsx)(Q.Z, {
                                      nameplate: d,
                                      hovered: u,
                                      placement: J.i.ACCOUNT
                                  }),
                                  (0, r.jsx)(eq, {
                                      size: g ? f.EFr['SIZE_'.concat(N)] : f.EFr.SIZE_32,
                                      src: s.getAvatarURL(void 0, g ? N - 4 : 32, !1),
                                      avatarDecoration: x,
                                      'aria-label': s.username,
                                      status: n ? eV.Skl.STREAMING : l,
                                      isSpeaking: t,
                                      className: eH.avatar
                                  }),
                                  (0, r.jsx)('div', {
                                      className: a()(eH.nameTag, { [eH.canCopy]: eR.wS }),
                                      children: c()
                                  })
                              ]
                          })
                      )
                  )
              })
          });
}
class e0 extends i.PureComponent {
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
            t = [eF.NW.string(eF.t.MSaeTU), eF.NW.string(eF.t.UmrCw8), eF.NW.string(eF.t.gKE0Ji), eF.NW.string(eF.t['4DSKbm']), eF.NW.string(eF.t['+8ENdX']), eF.NW.string(eF.t.GlWHv7), eF.NW.string(eF.t.hIzxU1), eF.NW.string(eF.t['26uMPD']), eF.NW.string(eF.t.uFs7R0), eF.NW.string(eF.t.bLXdcX), eF.NW.string(eF.t.gPg9fX)],
            n = Math.min(Math.max(0, e - 1), t.length - 1);
        return (0, r.jsx)(f.UkV, {
            isShaking: this.isCopiedStreakGodlike,
            children: t[n]
        });
    }
    renderStatus() {
        let { hovered: e } = this.state,
            { activities: t, applicationStream: n, currentUser: i, status: s, userTag: a, voiceActivityStatusEnabled: l, voiceChannel: o } = this.props;
        if (null == i) return null;
        if (
            (0, S.Z)({
                activities: t,
                status: s,
                applicationStream: n,
                voiceChannel: l ? o : void 0
            })
        )
            return (0, r.jsx)(I.Z, {
                hoverText: a,
                forceHover: e,
                children: (0, r.jsx)(T.Z, {
                    user: i,
                    activities: t,
                    applicationStream: n,
                    voiceChannel: l ? o : void 0,
                    textClassName: eH.activityStatusText,
                    hideTooltip: !0
                })
            });
        let c =
            null == t
                ? void 0
                : t.find((e) => {
                      let { type: t } = e;
                      return t === eV.IIU.CUSTOM_STATUS;
                  });
        return null != c
            ? (0, r.jsx)(I.Z, {
                  hoverText: a,
                  forceHover: e,
                  children: (0, r.jsx)(V.Z, {
                      activity: c,
                      emojiClassName: eH.emoji,
                      className: eH.customStatus
                  })
              })
            : null != s && s !== eV.Skl.UNKNOWN && i.isPomelo()
              ? (0, r.jsx)(I.Z, {
                    hoverText: a,
                    forceHover: e,
                    children: eW.ZP.humanizeStatus(s)
                })
              : a;
    }
    renderAvatarWithPopout(e) {
        let { 'data-jump-section': t } = e,
            { hovered: n } = this.state;
        return (0, r.jsx)(
            e$,
            eK(eY({}, this.props), {
                hovered: n,
                handleMouseLeave: this.handleMouseLeave,
                renderNameTag: this.renderNameTag,
                'data-jump-section': t
            })
        );
    }
    renderNameZone(e) {
        let { currentUser: t, dismissibleContents: n } = this.props;
        return null == t
            ? null
            : (0, r.jsx)(H.ZP, {
                  contentTypes: n.avatar,
                  children: (t) => {
                      let { visibleContent: n, markAsDismissed: i } = t;
                      return n === c.z.PREMIUM_SUBSCRIPTION_APRIL_MARKETING_DECO_TOOLTIP
                          ? (0, r.jsx)(U.Z, {
                                markAsDismissed: i,
                                children: () => this.renderAvatarWithPopout(e)
                            })
                          : this.renderAvatarWithPopout(e);
                  }
              });
    }
    render() {
        let { currentUser: e } = this.props;
        return null == e
            ? null
            : (0, r.jsx)(f.Wdt, {
                  children: (e) =>
                      (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsxs)('div', {
                                  className: eH.container,
                                  onMouseEnter: this.handleMouseEnter,
                                  onMouseLeave: this.handleMouseLeave,
                                  children: [
                                      this.renderNameZone(e),
                                      (0, r.jsx)(
                                          e1,
                                          eK(eY({}, this.props, this.state), {
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
                              (0, r.jsx)(Y.Z, {})
                          ]
                      })
              });
    }
    constructor(...e) {
        super(...e),
            ez(this, 'copiedTimeout', new d.V7()),
            ez(this, 'copiedDecayTimeout', new d.V7()),
            ez(this, 'speakingWhileMutedTooltipTimeout', new d.V7()),
            ez(this, 'lastSpeakingWhileMutedNotificationTime', void 0),
            ez(this, 'state', {
                hovered: !1,
                copiedStreak: 0,
                shouldShowNametagTooltip: !1,
                shouldShowCopiedFeedback: !1,
                shouldShowSpeakingWhileMutedTooltip: !1,
                hoveringOnMute: !1
            }),
            ez(this, 'handleToggleSelfMute', () => {
                let { serverMute: e, suppress: t, selfMute: n } = this.props;
                (0, L.Z)(e, t, eV.jXE.ACCOUNT_PANEL), (0, B.v)(y.Z.ACCOUNT, B.d.MIC, n);
            }),
            ez(this, 'handleToggleSelfDeaf', () => {
                let { serverDeaf: e, selfDeaf: t } = this.props;
                (0, W.Z)(e, eV.jXE.ACCOUNT_PANEL), (0, B.v)(y.Z.ACCOUNT, B.d.DEAFEN, !t);
            }),
            ez(this, 'handleOpenAccountSettings', () => {
                this.handleOpenSettings();
            }),
            ez(this, 'handleOpenSettings', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eV.oAB.ACCOUNT,
                    t = arguments.length > 1 ? arguments[1] : void 0,
                    n = arguments.length > 2 ? arguments[2] : void 0;
                b.Z.open(e, t, n);
            }),
            ez(this, 'handleOpenSettingsContextMenu', (e) => {
                let { currentUser: t } = this.props;
                null != t &&
                    (0, N.jW)(e, async () => {
                        let { default: e } = await n.e('2535').then(n.bind(n, 923422));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                eK(eY({}, n), {
                                    user: t,
                                    premiumSubscription: this.props.premiumSubscription,
                                    webBuildOverride: this.props.webBuildOverride,
                                    onInteraction: (0, M.u)('UserSettingsCogContextMenu', y.Z.ACCOUNT)
                                })
                            );
                    });
            }),
            ez(this, 'audioOnInteractionHandler', (0, M.u)('AudioDeviceMenu', y.Z.ACCOUNT)),
            ez(this, 'handleInputAudioContextMenu', (e, t) => {
                (0, N.jW)(e, async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 659580));
                    return () =>
                        (0, r.jsx)(A.Gt, {
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
            ez(this, 'handleOutputAudioContextMenu', (e, t) => {
                (0, N.jW)(e, async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 659580));
                    return () =>
                        (0, r.jsx)(A.Gt, {
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
            ez(this, 'handleMouseEnter', () => {
                this.setState({ hovered: !0 });
            }),
            ez(this, 'handleMouseLeave', () => {
                this.setState({ hovered: !1 });
            }),
            ez(this, 'handleMouseEnterMute', () => {
                this.setState({
                    hoveringOnMute: !0,
                    shouldShowSpeakingWhileMutedTooltip: !1
                }),
                    this.speakingWhileMutedTooltipTimeout.stop();
            }),
            ez(this, 'handleMouseLeaveMute', () => {
                this.setState({ hoveringOnMute: !1 });
            }),
            ez(this, 'handleCopyTag', () => {
                let { currentUser: e } = this.props,
                    { shouldShowNametagTooltip: t, copiedStreak: n } = this.state;
                if (null == e) return;
                (0, eR.JG)(
                    eW.ZP.getUserTag(e, {
                        decoration: 'never',
                        identifiable: 'always'
                    })
                ),
                    eA.default.track(eV.rMx.TEXT_COPIED, { type: 'User Tag' });
                let r = {
                    shouldShowCopiedFeedback: !0,
                    shouldShowNametagTooltip: !0
                };
                t || (r.copiedStreak = n + 1),
                    this.setState(r, () => {
                        this.copiedTimeout.start(1000, () => this.setState({ shouldShowNametagTooltip: !1 })), this.copiedDecayTimeout.start(2000, () => this.setState({ copiedStreak: 0 }));
                    });
            }),
            ez(this, 'handleOccludedChanged', () => {
                let { occluded: e } = this.props;
                e &&
                    this.setState({
                        shouldShowNametagTooltip: !1,
                        shouldShowSpeakingWhileMutedTooltip: !1
                    });
            }),
            ez(this, 'handleSpeakingWhileMutedChanged', () => {
                let { selfMute: e, serverMute: t, suppress: n, speakingWhileMuted: r, occluded: i } = this.props,
                    { hoveringOnMute: s } = this.state,
                    a = void 0 === this.lastSpeakingWhileMutedNotificationTime || Date.now() - this.lastSpeakingWhileMutedNotificationTime > eX;
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
            ez(this, 'renderNameTag', () => {
                let { currentUser: e } = this.props;
                return null == e
                    ? null
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)('div', {
                                  className: eH.panelTitleContainer,
                                  children: (0, r.jsx)(eU.Z, { children: eW.ZP.getName(e) })
                              }),
                              (0, r.jsx)('div', {
                                  className: eH.panelSubtextContainer,
                                  children: (0, r.jsx)(eM.Z, { children: this.renderStatus() })
                              })
                          ]
                      });
            });
    }
}
function e1(e) {
    let { selfDeaf: t, selfMute: n, awaitingRemote: i, serverMute: s, serverDeaf: a, suppress: l, shouldShowSpeakingWhileMutedTooltip: o, isEligibleForPomelo: c, webBuildOverride: d, handleMouseEnterMute: u, handleMouseLeaveMute: m, handleToggleSelfDeaf: g, handleToggleSelfMute: p, handleInputAudioContextMenu: h, handleOutputAudioContextMenu: x, handleOpenAccountSettings: N, handleOpenSettingsContextMenu: b, dismissibleContents: _, nameplate: E } = e,
        j = (0, X.A)(E);
    return (0, r.jsxs)('div', {
        className: eH.buttons,
        style: j,
        children: [
            (0, r.jsx)(e3, {
                selfMute: n,
                serverMute: s,
                suppress: l,
                awaitingRemote: i,
                tooltipText: o ? eF.NW.string(eF.t['29gnR0']) : void 0,
                tooltipColor: o ? f.FGA.GREEN : void 0,
                tooltipForceOpen: o || void 0,
                onMouseEnter: u,
                onMouseLeave: m,
                onClick: p,
                onContextMenu: h,
                iconForeground: null != E ? eH.iconForeground : void 0,
                nameplate: E
            }),
            (0, r.jsx)(e8, {
                selfDeaf: t,
                serverDeaf: a,
                onClick: g,
                onContextMenu: x,
                awaitingRemote: i,
                iconForeground: null != E ? eH.iconForeground : void 0,
                nameplate: E
            }),
            (0, r.jsx)(e6, {
                isEligibleForPomelo: c,
                webBuildOverride: d,
                onClick: N,
                onContextMenu: b,
                dismissibleContents: _.settings,
                iconForeground: null != E ? eH.iconForeground : void 0,
                nameplate: E
            })
        ]
    });
}
function e2() {
    var e;
    let t = (0, o.e7)([eI.default], () => eI.default.getCurrentUser()),
        n = (0, o.e7)([eE.default], () => eE.default.getId()),
        {
            activities: s,
            streaming: a,
            status: l
        } = (0, o.cj)([eS.Z], () => {
            let e = eS.Z.getActivities();
            return {
                activities: e,
                streaming:
                    null !=
                    e.find((e) => {
                        let { type: t } = e;
                        return t === eV.IIU.STREAMING;
                    }),
                status: eS.Z.getStatus()
            };
        }),
        d = (0, o.e7)([e_.Z], () => e_.Z.getAnyStreamForUser(n)),
        u = (0, C.Z)({ userId: n }),
        m = eW.ZP.useUserTag(t, { decoration: 'never' }),
        g = (0, o.e7)([eT.Z], () => eT.Z.hidePersonalInformation),
        p = (0, o.e7)([ev.Z, ej.Z], () => {
            let e = ev.Z.getChannelId();
            return null != e ? ej.Z.getChannel(e) : null;
        }),
        { mute: h, selfMute: N, suppress: b } = (0, eg.Z)(p),
        { selfDeaf: _, deaf: O } = (0, em.Z)(p),
        S = (0, o.e7)([D.C], () => {
            var e;
            return (0, Z.fD)() ? (null === (e = D.C.getCurrentBuildOverride().overrides) || void 0 === e ? void 0 : e.discord_web) : null;
        }),
        T = (0, o.e7)([ey.ZP], () => ey.ZP.getPremiumTypeSubscription()),
        I = (0, o.e7)([eO.Z], () => eO.Z.getSpeakingWhileMuted()),
        P = (0, o.e7)([eC.Z], () => eC.Z.hasLayers()),
        R = (0, f.s9z)(f.JQI) || P || ek.s.isDisallowPopupsSet(),
        w = (0, $.b)(),
        k = (0, o.e7)([z.Z], () => null != z.Z.getAwaitingRemoteSessionInfo()),
        W = (0, er.D)(),
        L = (0, E.u)(),
        B = ew.ZP.canUsePremiumGuildMemberProfile(t),
        M = (null == t ? void 0 : null === (e = t.avatarDecoration) || void 0 === e ? void 0 : e.skuId) === eG.rL,
        { voiceActivityStatusEnabled: U } = (0, v.U)({ location: 'Account' }),
        { simplifiedSettingsEnabled: V } = (0, eu.Z)({ location: 'Account' }),
        G = 'account';
    (0, j.j)({
        location: G + ' auto on',
        autoTrackExposure: !0
    }),
        (0, j.j)({
            location: G + ' auto off',
            autoTrackExposure: !1
        });
    let H = (0, o.e7)([ea.Z], () => ea.Z.hasHadOtherUserPlaySoundInSession()),
        Y = (function () {
            let e = (0, F.wE)(c.z.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2),
                [t, n] = (0, o.Wu)([ee.Z], () => [ee.Z.hasFetchedRelevance, ee.Z.profileThemesRelevanceExceeded]),
                [r, s] = (0, o.Wu)([ey.ZP], () => [ey.ZP.hasFetchedMostRecentPremiumTypeSubscription(), ey.ZP.getMostRecentPremiumTypeSubscription()]),
                { enabled: a } = et.Z.useExperiment({ location: '08bd40_1' }, { autoTrackExposure: !0 }),
                l = i.useMemo(() => {
                    let e = new Date().getTime();
                    return null != s && (s.status === eV.O0b.ACTIVE || e - s.currentPeriodEnd.getTime() < eQ);
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
        { analyticsLocations: K } = (0, A.ZP)(y.Z.ACCOUNT),
        X = (0, q.K)({
            location: 'Account',
            user: t
        }),
        J = {
            avatar: [],
            settings: []
        };
    return (
        !R && (Y && J.settings.push(c.z.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2), W && (1 === L ? J.settings.push(c.z.USER_SAFETY_CONSUMER_EDUCATION_MUTE) : J.settings.push(c.z.USER_SAFETY_CONSUMER_EDUCATION_BLOCK)), H && J.settings.push(c.z.SOUNDBOARD_VOLUME_EDUCATION), B && J.settings.push(c.z.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK), M && J.avatar.push(c.z.PREMIUM_SUBSCRIPTION_APRIL_MARKETING_DECO_TOOLTIP)),
        (0, r.jsx)(A.Gt, {
            value: K,
            children: (0, r.jsx)(e0, {
                currentUser: t,
                activities: s,
                applicationStream: d,
                voiceChannel: p,
                dismissibleContents: J,
                userTag: m,
                hidePrivateData: g,
                occluded: R,
                premiumSubscription: T,
                selfDeaf: _,
                selfMute: N,
                serverDeaf: O,
                serverMute: h,
                speaking: u,
                speakingWhileMuted: I,
                status: l,
                streaming: a,
                suppress: b,
                webBuildOverride: S,
                awaitingRemote: k,
                isEligibleForPomelo: w,
                simplifiedCallSettingsEnabled: V,
                voiceActivityStatusEnabled: U,
                nameplate: X
            })
        })
    );
}
function e6(e) {
    let { webBuildOverride: t, isEligibleForPomelo: n, onClick: i, onContextMenu: s, dismissibleContents: a, iconForeground: l, nameplate: o } = e,
        d = f.ewm,
        u = (0, p.i)();
    d = null != t ? f.bgT : n ? f.Ncx : u.Component;
    let [m, g] = (0, H.US)(a);
    return (0, r.jsx)(f.yRy, {
        position: 'top',
        align: 'center',
        shouldShow: null != m,
        renderPopout: m === c.z.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2 ? () => (0, r.jsx)(en.Z, {}) : m === c.z.USER_SAFETY_CONSUMER_EDUCATION_BLOCK ? () => (0, r.jsx)(ei.Z, { markAsDismissed: g }) : m === c.z.USER_SAFETY_CONSUMER_EDUCATION_MUTE ? () => (0, r.jsx)(es.Z, { markAsDismissed: g }) : m === c.z.SOUNDBOARD_VOLUME_EDUCATION ? () => (0, r.jsx)(el.Z, { markAsDismissed: g }) : m === c.z.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK ? () => (0, r.jsx)(ec.Z, {}) : () => (0, r.jsx)(r.Fragment, {}),
        children: () =>
            (0, r.jsx)(
                eB.Z,
                eK(
                    eY(
                        {
                            tooltipText: null != t ? eF.NW.formatToPlainString(eF.t.Gzh6ZG, { webBuildOverride: t.id }) : eF.NW.string(eF.t.cduTBA),
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
function e3(e) {
    let { selfMute: t, serverMute: n, suppress: s, awaitingRemote: c, tooltipText: d, tooltipColor: u, tooltipForceOpen: p, iconForeground: x, onMouseEnter: N, onMouseLeave: b, onClick: _, onContextMenu: E, nameplate: j } = e,
        C = t || s || n,
        O = i.useRef(null),
        v = (0, m.O)(C ? 'unmute' : 'mute'),
        S = (0, g.P)(C ? 'unmute' : 'mute'),
        { activeVoice: T } = (0, ef.o)(),
        I = null != T,
        P = (0, eh.z)(T),
        R = (0, o.e7)([ev.Z], () => ev.Z.isConnected()),
        { Component: D, events: Z, play: w } = I ? S : v,
        W = n || s ? f.v0G : D,
        { mode: L } = (0, ed.ZP)({ location: 'RTC Microphone Button' }),
        { coloredIconsEnabled: B } = (0, eu.Z)({ location: 'RTC Microphone Button' }),
        M = null != d ? d : (0, k.Z)(t, n, s, c, L === ed.BK.GroupedButtonsRedMic),
        { analyticsLocations: U } = (0, A.ZP)(y.Z.AUDIO_INPUT_BUTTON),
        V = (0, ep.Hu)({
            location: y.Z.AUDIO_INPUT_BUTTON,
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
                        K(!0), (e = setTimeout(() => K(!1), eJ));
                    }, 300)),
                () => {
                    K(!1), clearTimeout(e);
                }
            );
        }, [R]),
        (0, r.jsx)(A.Gt, {
            value: U,
            children: (0, r.jsxs)('div', {
                ref: O,
                className: eH.micButtonParent,
                children: [
                    (0, r.jsx)(eB.Z, {
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
                        icon: (0, r.jsx)(W, {
                            size: 'custom',
                            width: 20,
                            height: 20,
                            color: C ? f.TVs.colors.STATUS_DANGER : 'currentColor',
                            className: x
                        }),
                        onClick: _,
                        onContextMenu: G,
                        role: 'switch',
                        className: a()({ [eH.micButtonWithMenu]: V }),
                        redGlow: C && B,
                        'aria-label': eF.NW.string(eF.t['w4m94+']),
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
                            onRequestOpen: ex.r5,
                            onRequestClose: z,
                            shouldShow: F,
                            renderPopout: (e) => {
                                let { closePopout: t } = e;
                                return (0, r.jsx)(eb.l, { onSettingsButtonClick: t });
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
                                    children: (0, r.jsx)(eN.B, {
                                        onCTA: () => H(!0),
                                        canBeShown: !s,
                                        children: (e, t) =>
                                            (0, r.jsx)(
                                                eB.Z,
                                                eY(
                                                    {
                                                        plated: null != j,
                                                        tooltipForceOpen: Y,
                                                        tooltipColor: Y ? f.FGA.GREEN : void 0,
                                                        tooltipContentClassName: Y ? eH.voiceFilterWarning : void 0,
                                                        tooltipText: Y
                                                            ? (0, r.jsxs)(r.Fragment, {
                                                                  children: [
                                                                      (0, r.jsx)('img', {
                                                                          alt: null != P ? eF.NW.string(P.name) : '',
                                                                          src: null == P ? void 0 : P.iconURL,
                                                                          draggable: !1
                                                                      }),
                                                                      (0, r.jsx)(f.Text, {
                                                                          variant: 'text-sm/medium',
                                                                          color: 'always-white',
                                                                          children: eF.NW.string(eF.t.VlC1dX)
                                                                      })
                                                                  ]
                                                              })
                                                            : eF.NW.string(eF.t.Hapb4O),
                                                        icon: (0, r.jsx)(a, {
                                                            className: eH.buttonChevronIcon,
                                                            size: 'custom',
                                                            width: 12,
                                                            height: 12,
                                                            color: B && C ? f.TVs.colors.STATUS_DANGER : f.TVs.colors.TEXT_NORMAL
                                                        }),
                                                        role: 'button',
                                                        className: eH.buttonChevron,
                                                        redGlow: C && B,
                                                        'aria-label': eF.NW.string(eF.t.Hapb4O),
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
function e8(e) {
    let { selfDeaf: t, serverDeaf: n, awaitingRemote: s, onClick: l, onContextMenu: o, iconForeground: c, nameplate: d } = e,
        m = t || n,
        {
            Component: g,
            play: p,
            events: { onMouseEnter: h, onMouseLeave: x }
        } = (0, u.l)(m ? 'undeafen' : 'deafen'),
        N = n ? f.Vm4 : g,
        { coloredIconsEnabled: b } = (0, eu.Z)({ location: 'RTC Microphone Button' }),
        { analyticsLocations: _ } = (0, A.ZP)(y.Z.AUDIO_OUTPUT_BUTTON);
    i.useEffect(() => () => p(), [m, p]);
    let E = i.useCallback(
        (e) => {
            o(e, _);
        },
        [o, _]
    );
    return (0, r.jsx)(A.Gt, {
        value: _,
        children: (0, r.jsx)(eB.Z, {
            plated: null != d,
            tooltipText: (0, w.Z)(t, n, s),
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
            innerClassName: a()({ [eH.redIcon]: n }),
            iconForeground: m ? eH.strikethrough : void 0,
            role: 'switch',
            redGlow: b && m,
            'aria-label': eF.NW.string(eF.t.wjcRFR),
            'aria-checked': m,
            disabled: s
        })
    });
}
