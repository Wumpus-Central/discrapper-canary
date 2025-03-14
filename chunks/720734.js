n.d(t, {
    Z: () => e1,
    m: () => e$
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
    b = n(355467),
    x = n(239091),
    N = n(230711),
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
    eb = n(358820),
    ex = n(469887),
    eN = n(306609),
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
    eD = n(70956),
    eZ = n(74538),
    ew = n(374023),
    ek = n(51144),
    eW = n(998502),
    eL = n(870569),
    eB = n(345243),
    eM = n(115530),
    eU = n(981631),
    eV = n(215023),
    eG = n(388032),
    eF = n(615866);
function eH(e, t, n) {
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
function ez(e) {
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
                eH(e, t, n[t]);
            });
    }
    return e;
}
function eY(e, t) {
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
let eK = eW.ZP.getEnableHardwareAcceleration() ? f.Xo$ : f.qEK,
    eq = 2 * eD.Z.Millis.MINUTE,
    eX = 3 * eD.Z.Millis.SECOND,
    eJ = 30 * eD.Z.Millis.DAY;
function eQ(e) {
    let { speaking: t, streaming: n, currentUser: i, status: s, handleMouseLeave: l, renderNameTag: o, nameplate: c, hovered: d, isSpeaking: u } = e,
        m = (0, G.Q3)('RTC Avatar'),
        { coloredIconsEnabled: g } = (0, eu.Z)({ location: 'RTC Avatar' }),
        p = (0, P.Z)(null == i ? void 0 : i.avatarDecoration),
        h = (0, eP.NZ)({
            avatarDecoration: p,
            size: (0, R.y9)(f.EFr.SIZE_32)
        }),
        b = (0, f.dQu)(f.TVs.modules.guildbar.AVATAR_SIZE),
        x = (0, X.A)(c);
    return null == i
        ? null
        : (0, r.jsx)(_.Z, {
              object: eU.qAy.AVATAR,
              children: (0, r.jsx)(f.yRy, {
                  clickTrap: !0,
                  renderPopout: (e) => {
                      let { closePopout: t, setPopoutRef: n } = e;
                      return (0, r.jsx)('div', {
                          className: eF.accountProfilePopoutWrapper,
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
                      (0, eo.Z)(i, void 0, {
                          withMutualGuilds: !1,
                          withMutualFriends: !1
                      }),
                  children: (e) =>
                      (0, r.jsxs)(
                          f.P3F,
                          eY(ez({ style: x }, e), {
                              'aria-label': eG.NW.string(eG.t['3Uj+2t']),
                              className: a()(eF.avatarWrapper, !m && g && eF.experiment, { [eF.plated]: null != c }),
                              children: [
                                  (0, r.jsx)(Q.Z, {
                                      nameplate: c,
                                      hovered: d,
                                      isSpeaking: u,
                                      placement: J.i.ACCOUNT
                                  }),
                                  (0, r.jsx)(eK, {
                                      size: m ? f.EFr['SIZE_'.concat(b)] : f.EFr.SIZE_32,
                                      src: i.getAvatarURL(void 0, m ? b - 4 : 32, !1),
                                      avatarDecoration: h,
                                      'aria-label': i.username,
                                      status: n ? eU.Skl.STREAMING : s,
                                      isSpeaking: t,
                                      className: eF.avatar
                                  }),
                                  (0, r.jsx)('div', {
                                      className: a()(eF.nameTag, { [eF.canCopy]: eR.wS }),
                                      children: o()
                                  })
                              ]
                          })
                      )
              })
          });
}
class e$ extends i.PureComponent {
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
            t = [eG.NW.string(eG.t.MSaeTU), eG.NW.string(eG.t.UmrCw8), eG.NW.string(eG.t.gKE0Ji), eG.NW.string(eG.t['4DSKbm']), eG.NW.string(eG.t['+8ENdX']), eG.NW.string(eG.t.GlWHv7), eG.NW.string(eG.t.hIzxU1), eG.NW.string(eG.t['26uMPD']), eG.NW.string(eG.t.uFs7R0), eG.NW.string(eG.t.bLXdcX), eG.NW.string(eG.t.gPg9fX)],
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
                    textClassName: eF.activityStatusText,
                    hideTooltip: !0
                })
            });
        let d =
            null == t
                ? void 0
                : t.find((e) => {
                      let { type: t } = e;
                      return t === eU.IIU.CUSTOM_STATUS;
                  });
        return null != d
            ? (0, r.jsx)(I.Z, {
                  hoverText: l,
                  forceHover: e,
                  children: (0, r.jsx)(V.Z, {
                      activity: d,
                      emojiClassName: eF.emoji,
                      className: eF.customStatus
                  })
              })
            : null != a && a !== eU.Skl.UNKNOWN && s.isPomelo()
              ? (0, r.jsx)(I.Z, {
                    hoverText: l,
                    forceHover: e,
                    children: ek.ZP.humanizeStatus(a)
                })
              : l;
    }
    renderAvatarWithPopout() {
        let { hovered: e } = this.state,
            { speaking: t } = this.props;
        return (0, r.jsx)(
            eQ,
            eY(ez({}, this.props), {
                hovered: e,
                handleMouseLeave: this.handleMouseLeave,
                renderNameTag: this.renderNameTag,
                isSpeaking: t
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
                          className: eF.container,
                          onMouseEnter: this.handleMouseEnter,
                          onMouseLeave: this.handleMouseLeave,
                          children: [
                              this.renderNameZone(),
                              (0, r.jsx)(
                                  e0,
                                  eY(ez({}, this.props, this.state), {
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
            eH(this, 'copiedTimeout', new d.V7()),
            eH(this, 'copiedDecayTimeout', new d.V7()),
            eH(this, 'speakingWhileMutedTooltipTimeout', new d.V7()),
            eH(this, 'lastSpeakingWhileMutedNotificationTime', void 0),
            eH(this, 'state', {
                hovered: !1,
                copiedStreak: 0,
                shouldShowNametagTooltip: !1,
                shouldShowCopiedFeedback: !1,
                shouldShowSpeakingWhileMutedTooltip: !1,
                hoveringOnMute: !1
            }),
            eH(this, 'handleToggleSelfMute', () => {
                let { serverMute: e, suppress: t, selfMute: n } = this.props;
                (0, L.Z)(e, t, eU.jXE.ACCOUNT_PANEL), (0, B.v)(y.Z.ACCOUNT, B.d.MIC, n);
            }),
            eH(this, 'handleToggleSelfDeaf', () => {
                let { serverDeaf: e, selfDeaf: t } = this.props;
                (0, W.Z)(e, eU.jXE.ACCOUNT_PANEL), (0, B.v)(y.Z.ACCOUNT, B.d.DEAFEN, !t);
            }),
            eH(this, 'handleOpenAccountSettings', () => {
                this.handleOpenSettings();
            }),
            eH(this, 'handleOpenSettings', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eU.oAB.ACCOUNT,
                    t = arguments.length > 1 ? arguments[1] : void 0,
                    n = arguments.length > 2 ? arguments[2] : void 0;
                N.Z.open(e, t, n);
            }),
            eH(this, 'handleOpenSettingsContextMenu', (e) => {
                let { currentUser: t } = this.props;
                null != t &&
                    (0, x.jW)(e, async () => {
                        let { default: e } = await n.e('2535').then(n.bind(n, 923422));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                eY(ez({}, n), {
                                    user: t,
                                    premiumSubscription: this.props.premiumSubscription,
                                    webBuildOverride: this.props.webBuildOverride,
                                    onInteraction: (0, M.u)('UserSettingsCogContextMenu', y.Z.ACCOUNT)
                                })
                            );
                    });
            }),
            eH(this, 'audioOnInteractionHandler', (0, M.u)('AudioDeviceMenu', y.Z.ACCOUNT)),
            eH(this, 'handleInputAudioContextMenu', (e, t) => {
                (0, x.jW)(e, async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 659580));
                    return () =>
                        (0, r.jsx)(A.Gt, {
                            value: t,
                            children: this.props.simplifiedCallSettingsEnabled
                                ? (0, r.jsx)(e, {
                                      onClose: x.Zy,
                                      renderInputDevices: !0,
                                      renderInputVolume: !0,
                                      simplified: !0,
                                      onInteraction: this.audioOnInteractionHandler
                                  })
                                : (0, r.jsx)(e, {
                                      onClose: x.Zy,
                                      renderInputDevices: !0,
                                      renderInputModes: !0,
                                      renderInputVolume: !0,
                                      onInteraction: this.audioOnInteractionHandler
                                  })
                        });
                });
            }),
            eH(this, 'handleOutputAudioContextMenu', (e, t) => {
                (0, x.jW)(e, async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 659580));
                    return () =>
                        (0, r.jsx)(A.Gt, {
                            value: t,
                            children: this.props.simplifiedCallSettingsEnabled
                                ? (0, r.jsx)(e, {
                                      onClose: x.Zy,
                                      renderOutputDevices: !0,
                                      renderOutputVolume: !0,
                                      simplified: !0,
                                      onInteraction: this.audioOnInteractionHandler
                                  })
                                : (0, r.jsx)(e, {
                                      onClose: x.Zy,
                                      renderOutputDevices: !0,
                                      renderOutputVolume: !0,
                                      onInteraction: this.audioOnInteractionHandler
                                  })
                        });
                });
            }),
            eH(this, 'handleMouseEnter', () => {
                this.setState({ hovered: !0 });
            }),
            eH(this, 'handleMouseLeave', () => {
                this.setState({ hovered: !1 });
            }),
            eH(this, 'handleMouseEnterMute', () => {
                this.setState({
                    hoveringOnMute: !0,
                    shouldShowSpeakingWhileMutedTooltip: !1
                }),
                    this.speakingWhileMutedTooltipTimeout.stop();
            }),
            eH(this, 'handleMouseLeaveMute', () => {
                this.setState({ hoveringOnMute: !1 });
            }),
            eH(this, 'handleCopyTag', () => {
                let { currentUser: e } = this.props,
                    { shouldShowNametagTooltip: t, copiedStreak: n } = this.state;
                if (null == e) return;
                (0, eR.JG)(
                    ek.ZP.getUserTag(e, {
                        decoration: 'never',
                        identifiable: 'always'
                    })
                ),
                    eA.default.track(eU.rMx.TEXT_COPIED, { type: 'User Tag' });
                let r = {
                    shouldShowCopiedFeedback: !0,
                    shouldShowNametagTooltip: !0
                };
                t || (r.copiedStreak = n + 1),
                    this.setState(r, () => {
                        this.copiedTimeout.start(1000, () => this.setState({ shouldShowNametagTooltip: !1 })), this.copiedDecayTimeout.start(2000, () => this.setState({ copiedStreak: 0 }));
                    });
            }),
            eH(this, 'handleOccludedChanged', () => {
                let { occluded: e } = this.props;
                e &&
                    this.setState({
                        shouldShowNametagTooltip: !1,
                        shouldShowSpeakingWhileMutedTooltip: !1
                    });
            }),
            eH(this, 'handleSpeakingWhileMutedChanged', () => {
                let { selfMute: e, serverMute: t, suppress: n, speakingWhileMuted: r, occluded: i } = this.props,
                    { hoveringOnMute: s } = this.state,
                    a = void 0 === this.lastSpeakingWhileMutedNotificationTime || Date.now() - this.lastSpeakingWhileMutedNotificationTime > eq;
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
            eH(this, 'renderNameTag', () => {
                let { currentUser: e } = this.props;
                return null == e
                    ? null
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)('div', {
                                  className: eF.panelTitleContainer,
                                  children: (0, r.jsx)(eM.Z, { children: ek.ZP.getName(e) })
                              }),
                              (0, r.jsx)('div', {
                                  className: eF.panelSubtextContainer,
                                  children: (0, r.jsx)(eB.Z, { children: this.renderStatus() })
                              })
                          ]
                      });
            });
    }
}
function e0(e) {
    let { selfDeaf: t, selfMute: n, awaitingRemote: i, serverMute: s, serverDeaf: a, suppress: l, shouldShowSpeakingWhileMutedTooltip: o, isEligibleForPomelo: c, webBuildOverride: d, handleMouseEnterMute: u, handleMouseLeaveMute: m, handleToggleSelfDeaf: g, handleToggleSelfMute: p, handleInputAudioContextMenu: h, handleOutputAudioContextMenu: b, handleOpenAccountSettings: x, handleOpenSettingsContextMenu: N, dismissibleContents: _, nameplate: E } = e,
        j = (0, X.A)(E);
    return (0, r.jsxs)('div', {
        className: eF.buttons,
        style: j,
        children: [
            (0, r.jsx)(e6, {
                selfMute: n,
                serverMute: s,
                suppress: l,
                awaitingRemote: i,
                tooltipText: o ? eG.NW.string(eG.t['29gnR0']) : void 0,
                tooltipColor: o ? f.FGA.GREEN : void 0,
                tooltipForceOpen: o || void 0,
                onMouseEnter: u,
                onMouseLeave: m,
                onClick: p,
                onContextMenu: h,
                iconForeground: null != E ? eF.iconForeground : void 0,
                nameplate: E
            }),
            (0, r.jsx)(e3, {
                selfDeaf: t,
                serverDeaf: a,
                onClick: g,
                onContextMenu: b,
                awaitingRemote: i,
                iconForeground: null != E ? eF.iconForeground : void 0,
                nameplate: E
            }),
            (0, r.jsx)(e2, {
                isEligibleForPomelo: c,
                webBuildOverride: d,
                onClick: x,
                onContextMenu: N,
                dismissibleContents: _.settings,
                iconForeground: null != E ? eF.iconForeground : void 0,
                nameplate: E
            })
        ]
    });
}
function e1() {
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
                        return t === eU.IIU.STREAMING;
                    }),
                status: eS.Z.getStatus()
            };
        }),
        d = (0, o.e7)([e_.Z], () => e_.Z.getAnyStreamForUser(n)),
        u = (0, C.Z)({ userId: n }),
        m = ek.ZP.useUserTag(t, { decoration: 'never' }),
        g = (0, o.e7)([eT.Z], () => eT.Z.hidePersonalInformation),
        p = (0, o.e7)([ev.Z, ej.Z], () => {
            let e = ev.Z.getChannelId();
            return null != e ? ej.Z.getChannel(e) : null;
        }),
        { mute: h, selfMute: x, suppress: N } = (0, eg.Z)(p),
        { selfDeaf: _, deaf: S } = (0, em.Z)(p),
        T = (0, o.e7)([D.C], () => {
            var e;
            return (0, Z.fD)() ? (null === (e = D.C.getCurrentBuildOverride().overrides) || void 0 === e ? void 0 : e.discord_web) : null;
        }),
        I = (0, o.e7)([ey.ZP], () => ey.ZP.getPremiumTypeSubscription()),
        P = (0, o.e7)([eO.Z], () => eO.Z.getSpeakingWhileMuted()),
        R = (0, o.e7)([eC.Z], () => eC.Z.hasLayers()),
        w = (0, f.s9z)(f.JQI) || R || ew.s.isDisallowPopupsSet(),
        k = (0, $.b)(),
        W = (0, o.e7)([z.Z], () => null != z.Z.getAwaitingRemoteSessionInfo()),
        L = (0, er.D)(),
        B = (0, E.u)(),
        M = eZ.ZP.canUsePremiumGuildMemberProfile(t),
        U = (null == t ? void 0 : null === (e = t.avatarDecoration) || void 0 === e ? void 0 : e.skuId) === eV.rL,
        { activityStatusCleanupEnabled: V } = (0, O.w)({ location: 'Account' }),
        { voiceActivityStatusEnabled: G } = (0, v.U)({ location: 'Account' }),
        { simplifiedSettingsEnabled: H } = (0, eu.Z)({ location: 'Account' }),
        Y = 'account';
    (0, j.j)({
        location: Y + ' auto on',
        autoTrackExposure: !0
    }),
        (0, j.j)({
            location: Y + ' auto off',
            autoTrackExposure: !1
        });
    let K = (0, o.e7)([ea.Z], () => ea.Z.hasHadOtherUserPlaySoundInSession()),
        X = (function () {
            let e = (0, F.wE)(c.z.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2),
                [t, n] = (0, o.Wu)([ee.Z], () => [ee.Z.hasFetchedRelevance, ee.Z.profileThemesRelevanceExceeded]),
                [r, s] = (0, o.Wu)([ey.ZP], () => [ey.ZP.hasFetchedMostRecentPremiumTypeSubscription(), ey.ZP.getMostRecentPremiumTypeSubscription()]),
                { enabled: a } = et.Z.useExperiment({ location: '08bd40_1' }, { autoTrackExposure: !0 }),
                l = i.useMemo(() => {
                    let e = new Date().getTime();
                    return null != s && (s.status === eU.O0b.ACTIVE || e - s.currentPeriodEnd.getTime() < eJ);
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
        Q = (0, q.K)({
            location: 'Account',
            user: t
        }),
        en = {
            avatar: [],
            settings: []
        };
    return (
        !w && (X && en.settings.push(c.z.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2), L && (1 === B ? en.settings.push(c.z.USER_SAFETY_CONSUMER_EDUCATION_MUTE) : en.settings.push(c.z.USER_SAFETY_CONSUMER_EDUCATION_BLOCK)), K && en.settings.push(c.z.SOUNDBOARD_VOLUME_EDUCATION), M && en.settings.push(c.z.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK), U && en.avatar.push(c.z.PREMIUM_SUBSCRIPTION_APRIL_MARKETING_DECO_TOOLTIP)),
        (0, r.jsx)(A.Gt, {
            value: J,
            children: (0, r.jsx)(e$, {
                currentUser: t,
                activities: s,
                applicationStream: d,
                voiceChannel: p,
                dismissibleContents: en,
                userTag: m,
                hidePrivateData: g,
                occluded: w,
                premiumSubscription: I,
                selfDeaf: _,
                selfMute: x,
                serverDeaf: S,
                serverMute: h,
                speaking: u,
                speakingWhileMuted: P,
                status: l,
                streaming: a,
                suppress: N,
                webBuildOverride: T,
                awaitingRemote: W,
                isEligibleForPomelo: k,
                simplifiedCallSettingsEnabled: H,
                activityStatusCleanupEnabled: V,
                voiceActivityStatusEnabled: G,
                nameplate: Q
            })
        })
    );
}
function e2(e) {
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
                eL.Z,
                eY(
                    ez(
                        {
                            tooltipText: null != t ? eG.NW.formatToPlainString(eG.t.Gzh6ZG, { webBuildOverride: t.id }) : eG.NW.string(eG.t.cduTBA),
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
function e6(e) {
    let { selfMute: t, serverMute: n, suppress: s, awaitingRemote: c, tooltipText: d, tooltipColor: u, tooltipForceOpen: p, iconForeground: b, onMouseEnter: x, onMouseLeave: N, onClick: _, onContextMenu: E, nameplate: j } = e,
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
                        K(!0), (e = setTimeout(() => K(!1), eX));
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
                className: eF.micButtonParent,
                children: [
                    (0, r.jsx)(eL.Z, {
                        tooltipText: M,
                        tooltipColor: u,
                        tooltipForceOpen: p,
                        plated: null != j,
                        onMouseEnter: () => {
                            x(), Z.onMouseEnter();
                        },
                        onMouseLeave: () => {
                            N(), Z.onMouseLeave();
                        },
                        icon: (0, r.jsx)(W, {
                            size: 'custom',
                            width: 20,
                            height: 20,
                            color: C ? f.TVs.colors.STATUS_DANGER : 'currentColor',
                            className: b
                        }),
                        onClick: _,
                        onContextMenu: G,
                        role: 'switch',
                        className: a()({ [eF.micButtonWithMenu]: V }),
                        redGlow: C && B,
                        'aria-label': eG.NW.string(eG.t['w4m94+']),
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
                            onRequestOpen: eb.r5,
                            onRequestClose: z,
                            shouldShow: F,
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
                                    children: (0, r.jsx)(ex.B, {
                                        onCTA: () => H(!0),
                                        canBeShown: !s,
                                        children: (e, t) =>
                                            (0, r.jsx)(
                                                eL.Z,
                                                ez(
                                                    {
                                                        plated: null != j,
                                                        tooltipForceOpen: Y,
                                                        tooltipColor: Y ? f.FGA.GREEN : void 0,
                                                        tooltipContentClassName: Y ? eF.voiceFilterWarning : void 0,
                                                        tooltipText: Y
                                                            ? (0, r.jsxs)(r.Fragment, {
                                                                  children: [
                                                                      (0, r.jsx)('img', {
                                                                          alt: null != P ? eG.NW.string(P.name) : '',
                                                                          src: null == P ? void 0 : P.iconURL,
                                                                          draggable: !1
                                                                      }),
                                                                      (0, r.jsx)(f.Text, {
                                                                          variant: 'text-sm/medium',
                                                                          color: 'always-white',
                                                                          children: eG.NW.string(eG.t.VlC1dX)
                                                                      })
                                                                  ]
                                                              })
                                                            : eG.NW.string(eG.t.Hapb4O),
                                                        icon: (0, r.jsx)(a, {
                                                            className: eF.buttonChevronIcon,
                                                            size: 'custom',
                                                            width: 12,
                                                            height: 12,
                                                            color: B && C ? f.TVs.colors.STATUS_DANGER : f.TVs.colors.TEXT_NORMAL
                                                        }),
                                                        role: 'button',
                                                        className: eF.buttonChevron,
                                                        redGlow: C && B,
                                                        'aria-label': eG.NW.string(eG.t.Hapb4O),
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
function e3(e) {
    let { selfDeaf: t, serverDeaf: n, awaitingRemote: s, onClick: l, onContextMenu: o, iconForeground: c, nameplate: d } = e,
        m = t || n,
        {
            Component: g,
            play: p,
            events: { onMouseEnter: h, onMouseLeave: b }
        } = (0, u.l)(m ? 'undeafen' : 'deafen'),
        x = n ? f.Vm4 : g,
        { coloredIconsEnabled: N } = (0, eu.Z)({ location: 'RTC Microphone Button' }),
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
        children: (0, r.jsx)(eL.Z, {
            plated: null != d,
            tooltipText: (0, w.Z)(t, n, s),
            onMouseEnter: h,
            onMouseLeave: b,
            icon: (0, r.jsx)(x, {
                size: 'custom',
                width: 20,
                height: 20,
                color: m ? f.TVs.colors.STATUS_DANGER : 'currentColor',
                className: c
            }),
            onClick: l,
            onContextMenu: E,
            innerClassName: a()({ [eF.redIcon]: n }),
            iconForeground: m ? eF.strikethrough : void 0,
            role: 'switch',
            redGlow: N && m,
            'aria-label': eG.NW.string(eG.t.wjcRFR),
            'aria-checked': m,
            disabled: s
        })
    });
}
