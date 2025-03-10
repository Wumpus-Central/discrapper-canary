n.d(t, {
    Z: () => e0,
    m: () => eQ
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
    p = n(747906),
    g = n(789639),
    h = n(930295),
    f = n(481060),
    b = n(355467),
    N = n(239091),
    x = n(230711),
    _ = n(410575),
    E = n(941129),
    j = n(634894),
    C = n(586902),
    O = n(907305),
    v = n(468363),
    S = n(297369),
    T = n(953372),
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
    J = n(516817),
    Q = n(332473),
    $ = n(240504),
    ee = n(637906),
    et = n(39370),
    en = n(19199),
    er = n(866483),
    ei = n(14357),
    es = n(763296),
    ea = n(640806),
    el = n(184301),
    eo = n(52538),
    ec = n(861254),
    ed = n(221241),
    eu = n(879815),
    em = n(294629),
    ep = n(875527),
    eg = n(56848),
    eh = n(378441),
    ef = n(358820),
    eb = n(469887),
    eN = n(306609),
    ex = n(199902),
    e_ = n(314897),
    eE = n(592125),
    ej = n(819640),
    eC = n(131951),
    eO = n(19780),
    ev = n(885110),
    eS = n(246946),
    eT = n(594174),
    eI = n(78839),
    ey = n(626135),
    eA = n(768581),
    eP = n(572004),
    eR = n(70956),
    eD = n(74538),
    eZ = n(374023),
    ew = n(51144),
    ek = n(998502),
    eW = n(870569),
    eL = n(345243),
    eB = n(115530),
    eM = n(981631),
    eU = n(215023),
    eV = n(388032),
    eG = n(615866);
function eF(e, t, n) {
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
function eH(e) {
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
                eF(e, t, n[t]);
            });
    }
    return e;
}
function ez(e, t) {
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
let eY = ek.ZP.getEnableHardwareAcceleration() ? f.Xo$ : f.qEK,
    eK = 2 * eR.Z.Millis.MINUTE,
    eq = 3 * eR.Z.Millis.SECOND,
    eX = 30 * eR.Z.Millis.DAY;
function eJ(e) {
    let { speaking: t, streaming: n, currentUser: i, status: s, handleMouseLeave: l, renderNameTag: o, nameplate: c, hovered: d } = e,
        u = (0, G.Q3)('RTC Avatar'),
        { coloredIconsEnabled: m } = (0, ed.Z)({ location: 'RTC Avatar' }),
        p = (0, P.Z)(null == i ? void 0 : i.avatarDecoration),
        g = (0, eA.NZ)({
            avatarDecoration: p,
            size: (0, R.y9)(f.EFr.SIZE_32)
        }),
        h = (0, f.dQu)(f.TVs.modules.guildbar.AVATAR_SIZE),
        b = (0, X.A)(c);
    return null == i
        ? null
        : (0, r.jsx)(_.Z, {
              object: eM.qAy.AVATAR,
              children: (0, r.jsx)(f.yRy, {
                  clickTrap: !0,
                  renderPopout: (e) => {
                      let { closePopout: t, setPopoutRef: n } = e;
                      return (0, r.jsx)('div', {
                          className: eG.accountProfilePopoutWrapper,
                          children: (0, r.jsx)(K.Z, {
                              currentUser: i,
                              onClose: () => {
                                  l(), null == t || t();
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
                  preload: () =>
                      (0, el.Z)(i, void 0, {
                          withMutualGuilds: !1,
                          withMutualFriends: !1
                      }),
                  children: (e) =>
                      (0, r.jsxs)(
                          f.P3F,
                          ez(eH({ style: b }, e), {
                              'aria-label': eV.NW.string(eV.t['3Uj+2t']),
                              className: a()(eG.avatarWrapper, !u && m && eG.experiment),
                              children: [
                                  (0, r.jsx)(J.Z, {
                                      nameplate: c,
                                      hovered: d,
                                      reverse: !0
                                  }),
                                  (0, r.jsx)(eY, {
                                      size: u ? f.EFr['SIZE_'.concat(h)] : f.EFr.SIZE_32,
                                      src: i.getAvatarURL(void 0, u ? h - 4 : 32, !1),
                                      avatarDecoration: g,
                                      'aria-label': i.username,
                                      status: n ? eM.Skl.STREAMING : s,
                                      isSpeaking: t,
                                      className: eG.avatar
                                  }),
                                  (0, r.jsx)('div', {
                                      className: a()(eG.nameTag, { [eG.canCopy]: eP.wS }),
                                      children: o()
                                  })
                              ]
                          })
                      )
              })
          });
}
class eQ extends i.PureComponent {
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
            t = [eV.NW.string(eV.t.MSaeTU), eV.NW.string(eV.t.UmrCw8), eV.NW.string(eV.t.gKE0Ji), eV.NW.string(eV.t['4DSKbm']), eV.NW.string(eV.t['+8ENdX']), eV.NW.string(eV.t.GlWHv7), eV.NW.string(eV.t.hIzxU1), eV.NW.string(eV.t['26uMPD']), eV.NW.string(eV.t.uFs7R0), eV.NW.string(eV.t.bLXdcX), eV.NW.string(eV.t.gPg9fX)],
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
            (0, S.Z)({
                activities: t,
                status: a,
                applicationStream: i,
                voiceChannel: o ? c : void 0
            })
        )
            return (0, r.jsx)(I.Z, {
                hoverText: l,
                forceHover: e,
                children: (0, r.jsx)(T.Z, {
                    user: s,
                    activities: t,
                    applicationStream: i,
                    voiceChannel: o ? c : void 0,
                    textClassName: eG.activityStatusText,
                    hideTooltip: !0
                })
            });
        let d =
            null == t
                ? void 0
                : t.find((e) => {
                      let { type: t } = e;
                      return t === eM.IIU.CUSTOM_STATUS;
                  });
        return null != d
            ? (0, r.jsx)(I.Z, {
                  hoverText: l,
                  forceHover: e,
                  children: (0, r.jsx)(V.Z, {
                      activity: d,
                      emojiClassName: eG.emoji,
                      className: eG.customStatus
                  })
              })
            : null != a && a !== eM.Skl.UNKNOWN && s.isPomelo()
              ? (0, r.jsx)(I.Z, {
                    hoverText: l,
                    forceHover: e,
                    children: ew.ZP.humanizeStatus(a)
                })
              : l;
    }
    renderAvatarWithPopout() {
        let { hovered: e } = this.state;
        return (0, r.jsx)(
            eJ,
            ez(eH({}, this.props), {
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
            : (0, r.jsx)(H.ZP, {
                  contentTypes: t.avatar,
                  children: (e) => {
                      let { visibleContent: t, markAsDismissed: n } = e;
                      return t === c.z.PREMIUM_SUBSCRIPTION_APRIL_MARKETING_DECO_TOOLTIP
                          ? (0, r.jsx)(U.Z, {
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
                          className: eG.container,
                          onMouseEnter: this.handleMouseEnter,
                          onMouseLeave: this.handleMouseLeave,
                          children: [
                              this.renderNameZone(),
                              (0, r.jsx)(
                                  e$,
                                  ez(eH({}, this.props, this.state), {
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
              });
    }
    constructor(...e) {
        super(...e),
            eF(this, 'copiedTimeout', new d.V7()),
            eF(this, 'copiedDecayTimeout', new d.V7()),
            eF(this, 'speakingWhileMutedTooltipTimeout', new d.V7()),
            eF(this, 'lastSpeakingWhileMutedNotificationTime', void 0),
            eF(this, 'state', {
                hovered: !1,
                copiedStreak: 0,
                shouldShowNametagTooltip: !1,
                shouldShowCopiedFeedback: !1,
                shouldShowSpeakingWhileMutedTooltip: !1,
                hoveringOnMute: !1
            }),
            eF(this, 'handleToggleSelfMute', () => {
                let { serverMute: e, suppress: t, selfMute: n } = this.props;
                (0, L.Z)(e, t, eM.jXE.ACCOUNT_PANEL), (0, B.v)(y.Z.ACCOUNT, B.d.MIC, n);
            }),
            eF(this, 'handleToggleSelfDeaf', () => {
                let { serverDeaf: e, selfDeaf: t } = this.props;
                (0, W.Z)(e, eM.jXE.ACCOUNT_PANEL), (0, B.v)(y.Z.ACCOUNT, B.d.DEAFEN, !t);
            }),
            eF(this, 'handleOpenAccountSettings', () => {
                this.handleOpenSettings();
            }),
            eF(this, 'handleOpenSettings', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eM.oAB.ACCOUNT,
                    t = arguments.length > 1 ? arguments[1] : void 0,
                    n = arguments.length > 2 ? arguments[2] : void 0;
                x.Z.open(e, t, n);
            }),
            eF(this, 'handleOpenSettingsContextMenu', (e) => {
                let { currentUser: t } = this.props;
                null != t &&
                    (0, N.jW)(e, async () => {
                        let { default: e } = await n.e('2535').then(n.bind(n, 923422));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                ez(eH({}, n), {
                                    user: t,
                                    premiumSubscription: this.props.premiumSubscription,
                                    webBuildOverride: this.props.webBuildOverride,
                                    onInteraction: (0, M.u)('UserSettingsCogContextMenu', y.Z.ACCOUNT)
                                })
                            );
                    });
            }),
            eF(this, 'audioOnInteractionHandler', (0, M.u)('AudioDeviceMenu', y.Z.ACCOUNT)),
            eF(this, 'handleInputAudioContextMenu', (e, t) => {
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
            eF(this, 'handleOutputAudioContextMenu', (e, t) => {
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
            eF(this, 'handleMouseEnter', () => {
                this.setState({ hovered: !0 });
            }),
            eF(this, 'handleMouseLeave', () => {
                this.setState({ hovered: !1 });
            }),
            eF(this, 'handleMouseEnterMute', () => {
                this.setState({
                    hoveringOnMute: !0,
                    shouldShowSpeakingWhileMutedTooltip: !1
                }),
                    this.speakingWhileMutedTooltipTimeout.stop();
            }),
            eF(this, 'handleMouseLeaveMute', () => {
                this.setState({ hoveringOnMute: !1 });
            }),
            eF(this, 'handleCopyTag', () => {
                let { currentUser: e } = this.props,
                    { shouldShowNametagTooltip: t, copiedStreak: n } = this.state;
                if (null == e) return;
                (0, eP.JG)(
                    ew.ZP.getUserTag(e, {
                        decoration: 'never',
                        identifiable: 'always'
                    })
                ),
                    ey.default.track(eM.rMx.TEXT_COPIED, { type: 'User Tag' });
                let r = {
                    shouldShowCopiedFeedback: !0,
                    shouldShowNametagTooltip: !0
                };
                t || (r.copiedStreak = n + 1),
                    this.setState(r, () => {
                        this.copiedTimeout.start(1000, () => this.setState({ shouldShowNametagTooltip: !1 })), this.copiedDecayTimeout.start(2000, () => this.setState({ copiedStreak: 0 }));
                    });
            }),
            eF(this, 'handleOccludedChanged', () => {
                let { occluded: e } = this.props;
                e &&
                    this.setState({
                        shouldShowNametagTooltip: !1,
                        shouldShowSpeakingWhileMutedTooltip: !1
                    });
            }),
            eF(this, 'handleSpeakingWhileMutedChanged', () => {
                let { selfMute: e, serverMute: t, suppress: n, speakingWhileMuted: r, occluded: i } = this.props,
                    { hoveringOnMute: s } = this.state,
                    a = void 0 === this.lastSpeakingWhileMutedNotificationTime || Date.now() - this.lastSpeakingWhileMutedNotificationTime > eK;
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
            eF(this, 'renderNameTag', () => {
                let { currentUser: e } = this.props;
                return null == e
                    ? null
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)('div', {
                                  className: eG.panelTitleContainer,
                                  children: (0, r.jsx)(eB.Z, { children: ew.ZP.getName(e) })
                              }),
                              (0, r.jsx)('div', {
                                  className: eG.panelSubtextContainer,
                                  children: (0, r.jsx)(eL.Z, { children: this.renderStatus() })
                              })
                          ]
                      });
            });
    }
}
function e$(e) {
    let { selfDeaf: t, selfMute: n, awaitingRemote: i, serverMute: s, serverDeaf: a, suppress: l, shouldShowSpeakingWhileMutedTooltip: o, isEligibleForPomelo: c, webBuildOverride: d, handleMouseEnterMute: u, handleMouseLeaveMute: m, handleToggleSelfDeaf: p, handleToggleSelfMute: g, handleInputAudioContextMenu: h, handleOutputAudioContextMenu: b, handleOpenAccountSettings: N, handleOpenSettingsContextMenu: x, dismissibleContents: _, nameplate: E } = e,
        j = (0, X.A)(E);
    return (0, r.jsxs)('div', {
        className: eG.buttons,
        style: j,
        children: [
            (0, r.jsx)(e2, {
                selfMute: n,
                serverMute: s,
                suppress: l,
                awaitingRemote: i,
                tooltipText: o ? eV.NW.string(eV.t['29gnR0']) : void 0,
                tooltipColor: o ? f.FGA.GREEN : void 0,
                tooltipForceOpen: o || void 0,
                onMouseEnter: u,
                onMouseLeave: m,
                onClick: g,
                onContextMenu: h,
                iconForeground: null != E ? eG.iconForeground : void 0
            }),
            (0, r.jsx)(e6, {
                selfDeaf: t,
                serverDeaf: a,
                onClick: p,
                onContextMenu: b,
                awaitingRemote: i,
                iconForeground: null != E ? eG.iconForeground : void 0
            }),
            (0, r.jsx)(e1, {
                isEligibleForPomelo: c,
                webBuildOverride: d,
                onClick: N,
                onContextMenu: x,
                dismissibleContents: _.settings,
                iconForeground: null != E ? eG.iconForeground : void 0
            })
        ]
    });
}
function e0() {
    var e;
    let t = (0, o.e7)([eT.default], () => eT.default.getCurrentUser()),
        n = (0, o.e7)([e_.default], () => e_.default.getId()),
        {
            activities: s,
            streaming: a,
            status: l
        } = (0, o.cj)([ev.Z], () => {
            let e = ev.Z.getActivities();
            return {
                activities: e,
                streaming:
                    null !=
                    e.find((e) => {
                        let { type: t } = e;
                        return t === eM.IIU.STREAMING;
                    }),
                status: ev.Z.getStatus()
            };
        }),
        d = (0, o.e7)([ex.Z], () => ex.Z.getAnyStreamForUser(n)),
        u = (0, C.Z)({ userId: n }),
        m = ew.ZP.useUserTag(t, { decoration: 'never' }),
        p = (0, o.e7)([eS.Z], () => eS.Z.hidePersonalInformation),
        g = (0, o.e7)([eO.Z, eE.Z], () => {
            let e = eO.Z.getChannelId();
            return null != e ? eE.Z.getChannel(e) : null;
        }),
        { mute: h, selfMute: N, suppress: x } = (0, em.Z)(g),
        { selfDeaf: _, deaf: S } = (0, eu.Z)(g),
        T = (0, o.e7)([D.C], () => {
            var e;
            return (0, Z.fD)() ? (null === (e = D.C.getCurrentBuildOverride().overrides) || void 0 === e ? void 0 : e.discord_web) : null;
        }),
        I = (0, o.e7)([eI.ZP], () => eI.ZP.getPremiumTypeSubscription()),
        P = (0, o.e7)([eC.Z], () => eC.Z.getSpeakingWhileMuted()),
        R = (0, o.e7)([ej.Z], () => ej.Z.hasLayers()),
        w = (0, f.s9z)(f.JQI) || R || eZ.s.isDisallowPopupsSet(),
        k = (0, Q.b)(),
        W = (0, o.e7)([z.Z], () => null != z.Z.getAwaitingRemoteSessionInfo()),
        L = (0, en.D)(),
        B = (0, E.u)(),
        M = eD.ZP.canUsePremiumGuildMemberProfile(t),
        U = (null == t ? void 0 : null === (e = t.avatarDecoration) || void 0 === e ? void 0 : e.skuId) === eU.rL,
        { activityStatusCleanupEnabled: V } = (0, O.w)({ location: 'Account' }),
        { voiceActivityStatusEnabled: G } = (0, v.U)({ location: 'Account' }),
        { simplifiedSettingsEnabled: H } = (0, ed.Z)({ location: 'Account' }),
        Y = 'account';
    (0, j.j)({
        location: Y + ' auto on',
        autoTrackExposure: !0
    }),
        (0, j.j)({
            location: Y + ' auto off',
            autoTrackExposure: !1
        });
    let K = (0, o.e7)([es.Z], () => es.Z.hasHadOtherUserPlaySoundInSession()),
        X = (function () {
            let e = (0, F.wE)(c.z.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2),
                [t, n] = (0, o.Wu)([$.Z], () => [$.Z.hasFetchedRelevance, $.Z.profileThemesRelevanceExceeded]),
                [r, s] = (0, o.Wu)([eI.ZP], () => [eI.ZP.hasFetchedMostRecentPremiumTypeSubscription(), eI.ZP.getMostRecentPremiumTypeSubscription()]),
                { enabled: a } = ee.Z.useExperiment({ location: '08bd40_1' }, { autoTrackExposure: !0 }),
                l = i.useMemo(() => {
                    let e = new Date().getTime();
                    return null != s && (s.status === eM.O0b.ACTIVE || e - s.currentPeriodEnd.getTime() < eX);
                }, [s]);
            return (
                i.useEffect(() => {
                    (async () => {
                        if (!e && null == n && a) {
                            if (!r) {
                                await (0, b.ou)();
                                return;
                            }
                            !l && (t || (await (0, b.l0)()));
                        }
                    })();
                }, [a, n, e, r, t, l]),
                !e && !!a && !l && null != n && n
            );
        })(),
        { analyticsLocations: J } = (0, A.ZP)(y.Z.ACCOUNT),
        et = (0, q.K)({
            location: 'Account',
            user: t
        }),
        er = {
            avatar: [],
            settings: []
        };
    return (
        !w && (X && er.settings.push(c.z.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2), L && (1 === B ? er.settings.push(c.z.USER_SAFETY_CONSUMER_EDUCATION_MUTE) : er.settings.push(c.z.USER_SAFETY_CONSUMER_EDUCATION_BLOCK)), K && er.settings.push(c.z.SOUNDBOARD_VOLUME_EDUCATION), M && er.settings.push(c.z.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK), U && er.avatar.push(c.z.PREMIUM_SUBSCRIPTION_APRIL_MARKETING_DECO_TOOLTIP)),
        (0, r.jsx)(A.Gt, {
            value: J,
            children: (0, r.jsx)(eQ, {
                currentUser: t,
                activities: s,
                applicationStream: d,
                voiceChannel: g,
                dismissibleContents: er,
                userTag: m,
                hidePrivateData: p,
                occluded: w,
                premiumSubscription: I,
                selfDeaf: _,
                selfMute: N,
                serverDeaf: S,
                serverMute: h,
                speaking: u,
                speakingWhileMuted: P,
                status: l,
                streaming: a,
                suppress: x,
                webBuildOverride: T,
                awaitingRemote: W,
                isEligibleForPomelo: k,
                simplifiedCallSettingsEnabled: H,
                activityStatusCleanupEnabled: V,
                voiceActivityStatusEnabled: G,
                nameplate: et
            })
        })
    );
}
function e1(e) {
    let { webBuildOverride: t, isEligibleForPomelo: n, onClick: i, onContextMenu: s, dismissibleContents: a, iconForeground: l } = e,
        o = f.ewm,
        d = (0, g.i)();
    o = null != t ? f.bgT : n ? f.Ncx : d.Component;
    let [u, m] = (0, H.US)(a);
    return (0, r.jsx)(f.yRy, {
        position: 'top',
        align: 'center',
        shouldShow: null != u,
        renderPopout: u === c.z.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2 ? () => (0, r.jsx)(et.Z, {}) : u === c.z.USER_SAFETY_CONSUMER_EDUCATION_BLOCK ? () => (0, r.jsx)(er.Z, { markAsDismissed: m }) : u === c.z.USER_SAFETY_CONSUMER_EDUCATION_MUTE ? () => (0, r.jsx)(ei.Z, { markAsDismissed: m }) : u === c.z.SOUNDBOARD_VOLUME_EDUCATION ? () => (0, r.jsx)(ea.Z, { markAsDismissed: m }) : u === c.z.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK ? () => (0, r.jsx)(eo.Z, {}) : () => (0, r.jsx)(r.Fragment, {}),
        children: () =>
            (0, r.jsx)(
                eW.Z,
                eH(
                    {
                        tooltipText: null != t ? eV.NW.formatToPlainString(eV.t.Gzh6ZG, { webBuildOverride: t.id }) : eV.NW.string(eV.t.cduTBA),
                        onClick: i,
                        onContextMenu: s,
                        iconForeground: l,
                        icon: (0, r.jsx)(o, {
                            size: 'refresh_sm',
                            color: 'currentColor',
                            className: l
                        })
                    },
                    d.events
                )
            )
    });
}
function e2(e) {
    let { selfMute: t, serverMute: n, suppress: s, awaitingRemote: c, tooltipText: d, tooltipColor: u, tooltipForceOpen: g, iconForeground: b, onMouseEnter: N, onMouseLeave: x, onClick: _, onContextMenu: E } = e,
        j = t || s || n,
        C = i.useRef(null),
        O = (0, m.O)(j ? 'unmute' : 'mute'),
        v = (0, p.P)(j ? 'unmute' : 'mute'),
        { activeVoice: S } = (0, eh.o)(),
        T = null != S,
        I = (0, eg.z)(S),
        P = (0, o.e7)([eO.Z], () => eO.Z.isConnected()),
        { Component: R, events: D, play: Z } = T ? v : O,
        w = n || s ? f.v0G : R,
        { mode: W } = (0, ec.ZP)({ location: 'RTC Microphone Button' }),
        { coloredIconsEnabled: L } = (0, ed.Z)({ location: 'RTC Microphone Button' }),
        B = null != d ? d : (0, k.Z)(t, n, s, c, W === ec.BK.GroupedButtonsRedMic),
        { analyticsLocations: M } = (0, A.ZP)(y.Z.AUDIO_INPUT_BUTTON),
        U = (0, ep.Hu)({
            location: y.Z.AUDIO_INPUT_BUTTON,
            autoTrackExposure: !0
        });
    i.useEffect(() => () => Z(), [j, Z]);
    let V = i.useCallback(
            (e) => {
                E(e, M);
            },
            [E, M]
        ),
        [G, F] = i.useState(!1),
        H = i.useCallback((e) => {
            var t;
            if ((0, l.k)(null == e ? void 0 : e.target, Node) && (null === (t = C.current) || void 0 === t ? void 0 : t.contains(e.target))) return h.F;
            F(!1);
        }, []),
        [z, Y] = i.useState(!1);
    return (
        i.useEffect(() => {
            let e;
            return (
                P &&
                    T &&
                    (e = setTimeout(() => {
                        Y(!0), (e = setTimeout(() => Y(!1), eq));
                    }, 300)),
                () => {
                    Y(!1), clearTimeout(e);
                }
            );
        }, [P]),
        (0, r.jsx)(A.Gt, {
            value: M,
            children: (0, r.jsxs)('div', {
                ref: C,
                className: a()(eG.micButtonParent, { [eG.buttonSpace]: L }),
                children: [
                    (0, r.jsx)(eW.Z, {
                        tooltipText: B,
                        tooltipColor: u,
                        tooltipForceOpen: g,
                        onMouseEnter: () => {
                            N(), D.onMouseEnter();
                        },
                        onMouseLeave: () => {
                            x(), D.onMouseLeave();
                        },
                        icon: (0, r.jsx)(w, {
                            size: 'custom',
                            width: 20,
                            height: 20,
                            color: j ? f.TVs.colors.STATUS_DANGER : 'currentColor',
                            className: b
                        }),
                        onClick: _,
                        onContextMenu: V,
                        role: 'switch',
                        className: U ? eG.micButtonWithMenu : void 0,
                        redGlow: j && L,
                        'aria-label': eV.NW.string(eV.t['w4m94+']),
                        'aria-checked': j,
                        disabled: c
                    }),
                    U &&
                        (0, r.jsx)(f.yRy, {
                            position: 'top',
                            align: 'center',
                            animation: f.yRy.Animation.FADE,
                            useMouseEnter: !0,
                            onRequestOpen: ef.r5,
                            onRequestClose: H,
                            shouldShow: G,
                            renderPopout: (e) => {
                                let { closePopout: t } = e;
                                return (0, r.jsx)(eN.l, { onSettingsButtonClick: t });
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
                                        onCTA: () => F(!0),
                                        canBeShown: !s,
                                        children: (e, t) =>
                                            (0, r.jsx)(
                                                eW.Z,
                                                eH(
                                                    {
                                                        tooltipForceOpen: z,
                                                        tooltipColor: z ? f.FGA.GREEN : void 0,
                                                        tooltipContentClassName: z ? eG.voiceFilterWarning : void 0,
                                                        tooltipText: z
                                                            ? (0, r.jsxs)(r.Fragment, {
                                                                  children: [
                                                                      (0, r.jsx)('img', {
                                                                          alt: null != I ? eV.NW.string(I.name) : '',
                                                                          src: null == I ? void 0 : I.iconURL,
                                                                          draggable: !1
                                                                      }),
                                                                      (0, r.jsx)(f.Text, {
                                                                          variant: 'text-sm/medium',
                                                                          children: eV.NW.string(eV.t.VlC1dX)
                                                                      })
                                                                  ]
                                                              })
                                                            : eV.NW.string(eV.t.Hapb4O),
                                                        icon: (0, r.jsx)(a, {
                                                            className: eG.buttonChevronIcon,
                                                            size: 'custom',
                                                            width: 12,
                                                            height: 12,
                                                            color: L && j ? f.TVs.colors.STATUS_DANGER : f.TVs.colors.TEXT_NORMAL
                                                        }),
                                                        role: 'button',
                                                        className: eG.buttonChevron,
                                                        redGlow: j && L,
                                                        'aria-label': eV.NW.string(eV.t.Hapb4O),
                                                        disabled: c,
                                                        onClick: (e) => {
                                                            null == t || t(), n(e), F(!G);
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
function e6(e) {
    let { selfDeaf: t, serverDeaf: n, awaitingRemote: s, onClick: l, onContextMenu: o, iconForeground: c } = e,
        d = t || n,
        {
            Component: m,
            play: p,
            events: { onMouseEnter: g, onMouseLeave: h }
        } = (0, u.l)(d ? 'undeafen' : 'deafen'),
        b = n ? f.Vm4 : m,
        { coloredIconsEnabled: N } = (0, ed.Z)({ location: 'RTC Microphone Button' }),
        { analyticsLocations: x } = (0, A.ZP)(y.Z.AUDIO_OUTPUT_BUTTON);
    i.useEffect(() => () => p(), [d, p]);
    let _ = i.useCallback(
        (e) => {
            o(e, x);
        },
        [o, x]
    );
    return (0, r.jsx)(A.Gt, {
        value: x,
        children: (0, r.jsx)(eW.Z, {
            tooltipText: (0, w.Z)(t, n, s),
            onMouseEnter: g,
            onMouseLeave: h,
            icon: (0, r.jsx)(b, {
                size: 'custom',
                width: 20,
                height: 20,
                color: d ? f.TVs.colors.STATUS_DANGER : 'currentColor',
                className: c
            }),
            onClick: l,
            onContextMenu: _,
            innerClassName: a()({ [eG.redIcon]: n }),
            iconForeground: d ? eG.strikethrough : void 0,
            role: 'switch',
            redGlow: N && d,
            'aria-label': eV.NW.string(eV.t.wjcRFR),
            'aria-checked': d,
            disabled: s
        })
    });
}
