n.d(t, {
    Z: () => eQ,
    m: () => eX
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
    w = n(682901),
    k = n(571250),
    W = n(628581),
    L = n(55311),
    B = n(575175),
    M = n(795318),
    U = n(64220),
    V = n(427217),
    G = n(540059),
    F = n(605236),
    H = n(243778),
    z = n(258609),
    Y = n(427347),
    K = n(331541),
    q = n(516817),
    X = n(332473),
    J = n(240504),
    Q = n(637906),
    $ = n(39370),
    ee = n(19199),
    et = n(866483),
    en = n(14357),
    er = n(763296),
    ei = n(640806),
    es = n(184301),
    ea = n(52538),
    el = n(861254),
    eo = n(221241),
    ec = n(879815),
    ed = n(294629),
    eu = n(875527),
    em = n(56848),
    eg = n(378441),
    ep = n(358820),
    eh = n(469887),
    ef = n(306609),
    eb = n(199902),
    eN = n(314897),
    ex = n(592125),
    e_ = n(819640),
    eE = n(131951),
    ej = n(19780),
    eC = n(885110),
    eO = n(246946),
    ev = n(594174),
    eS = n(78839),
    eT = n(626135),
    eI = n(768581),
    ey = n(572004),
    eA = n(70956),
    eP = n(74538),
    eR = n(374023),
    eD = n(51144),
    eZ = n(998502),
    ew = n(870569),
    ek = n(345243),
    eW = n(115530),
    eL = n(981631),
    eB = n(215023),
    eM = n(388032),
    eU = n(963175);
function eV(e, t, n) {
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
function eG(e) {
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
                eV(e, t, n[t]);
            });
    }
    return e;
}
function eF(e, t) {
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
let eH = eZ.ZP.getEnableHardwareAcceleration() ? f.Xo$ : f.qEK,
    ez = 2 * eA.Z.Millis.MINUTE,
    eY = 3 * eA.Z.Millis.SECOND,
    eK = 30 * eA.Z.Millis.DAY;
function eq(e) {
    let { speaking: t, streaming: n, currentUser: i, status: s, handleMouseLeave: l, renderNameTag: o, nameplate: c, hovered: d } = e,
        u = (0, G.Q3)('RTC Avatar'),
        { coloredIcons: m } = (0, eo.Z)({ location: 'RTC Avatar' }),
        g = (0, P.Z)(null == i ? void 0 : i.avatarDecoration),
        p = (0, eI.NZ)({
            avatarDecoration: g,
            size: (0, R.y9)(f.EFr.SIZE_32)
        }),
        h = (0, f.dQu)(f.TVs.modules.guildbar.AVATAR_SIZE);
    return null == i
        ? null
        : (0, r.jsx)(_.Z, {
              object: eL.qAy.AVATAR,
              children: (0, r.jsx)(f.yRy, {
                  clickTrap: !0,
                  renderPopout: (e) => {
                      let { closePopout: t, setPopoutRef: n } = e;
                      return (0, r.jsx)('div', {
                          className: eU.accountProfilePopoutWrapper,
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
                      (0, es.Z)(i, void 0, {
                          withMutualGuilds: !1,
                          withMutualFriends: !1
                      }),
                  children: (e) =>
                      (0, r.jsxs)(
                          f.P3F,
                          eF(eG({}, e), {
                              'aria-label': eM.NW.string(eM.t['3Uj+2t']),
                              className: a()(eU.avatarWrapper, !u && m && eU.experiment),
                              children: [
                                  (0, r.jsx)(q.Z, {
                                      nameplate: c,
                                      hovered: d,
                                      reverse: !0
                                  }),
                                  (0, r.jsx)(eH, {
                                      size: u ? f.EFr['SIZE_'.concat(h)] : f.EFr.SIZE_32,
                                      src: i.getAvatarURL(void 0, u ? h - 4 : 32, !1),
                                      avatarDecoration: p,
                                      'aria-label': i.username,
                                      status: n ? eL.Skl.STREAMING : s,
                                      isSpeaking: t,
                                      className: eU.avatar
                                  }),
                                  (0, r.jsx)('div', {
                                      className: a()(eU.nameTag, { [eU.canCopy]: ey.wS }),
                                      children: o()
                                  })
                              ]
                          })
                      )
              })
          });
}
class eX extends i.PureComponent {
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
            t = [eM.NW.string(eM.t.MSaeTU), eM.NW.string(eM.t.UmrCw8), eM.NW.string(eM.t.gKE0Ji), eM.NW.string(eM.t['4DSKbm']), eM.NW.string(eM.t['+8ENdX']), eM.NW.string(eM.t.GlWHv7), eM.NW.string(eM.t.hIzxU1), eM.NW.string(eM.t['26uMPD']), eM.NW.string(eM.t.uFs7R0), eM.NW.string(eM.t.bLXdcX), eM.NW.string(eM.t.gPg9fX)],
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
                    textClassName: eU.activityStatusText,
                    hideTooltip: !0
                })
            });
        let d =
            null == t
                ? void 0
                : t.find((e) => {
                      let { type: t } = e;
                      return t === eL.IIU.CUSTOM_STATUS;
                  });
        return null != d
            ? (0, r.jsx)(I.Z, {
                  hoverText: l,
                  forceHover: e,
                  children: (0, r.jsx)(V.Z, {
                      activity: d,
                      emojiClassName: eU.emoji,
                      className: eU.customStatus
                  })
              })
            : null != a && a !== eL.Skl.UNKNOWN && s.isPomelo()
              ? (0, r.jsx)(I.Z, {
                    hoverText: l,
                    forceHover: e,
                    children: eD.ZP.humanizeStatus(a)
                })
              : l;
    }
    renderAvatarWithPopout() {
        let { hovered: e } = this.state;
        return (0, r.jsx)(
            eq,
            eF(eG({}, this.props), {
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
                          className: eU.container,
                          onMouseEnter: this.handleMouseEnter,
                          onMouseLeave: this.handleMouseLeave,
                          children: [
                              this.renderNameZone(),
                              (0, r.jsx)(
                                  eJ,
                                  eF(eG({}, this.props, this.state), {
                                      handleMouseEnterMute: this.handleMouseEnterMute,
                                      handleMouseLeaveMute: this.handleMouseLeaveMute,
                                      handleToggleSelfMute: this.handleToggleSelfMute,
                                      handleToggleSelfDeaf: this.handleToggleSelfDeaf,
                                      handleInputAudioContextMenu: this.handleInputAudioContextMenu,
                                      handleOutputAudioContextMenu: this.handleOutputAudioContextMenu,
                                      handleOpenAccountSettings: this.handleOpenAccountSettings,
                                      handleOpenSettingsContextMenu: this.handleOpenAccountSettings
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
            eV(this, 'copiedTimeout', new d.V7()),
            eV(this, 'copiedDecayTimeout', new d.V7()),
            eV(this, 'speakingWhileMutedTooltipTimeout', new d.V7()),
            eV(this, 'lastSpeakingWhileMutedNotificationTime', void 0),
            eV(this, 'state', {
                hovered: !1,
                copiedStreak: 0,
                shouldShowNametagTooltip: !1,
                shouldShowCopiedFeedback: !1,
                shouldShowSpeakingWhileMutedTooltip: !1,
                hoveringOnMute: !1
            }),
            eV(this, 'handleToggleSelfMute', () => {
                let { serverMute: e, suppress: t } = this.props;
                (0, B.Z)(e, t, eL.jXE.ACCOUNT_PANEL);
            }),
            eV(this, 'handleToggleSelfDeaf', () => {
                let { serverDeaf: e } = this.props;
                (0, L.Z)(e, eL.jXE.ACCOUNT_PANEL);
            }),
            eV(this, 'handleOpenAccountSettings', () => {
                this.handleOpenSettings();
            }),
            eV(this, 'handleOpenSettings', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eL.oAB.ACCOUNT,
                    t = arguments.length > 1 ? arguments[1] : void 0,
                    n = arguments.length > 2 ? arguments[2] : void 0;
                x.Z.open(e, t, n);
            }),
            eV(this, 'handleOpenSettingsContextMenu', (e) => {
                let { currentUser: t } = this.props;
                null != t &&
                    (0, N.jW)(e, async () => {
                        let { default: e } = await n.e('2535').then(n.bind(n, 923422));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                eF(eG({}, n), {
                                    user: t,
                                    premiumSubscription: this.props.premiumSubscription,
                                    webBuildOverride: this.props.webBuildOverride,
                                    onInteraction: (0, M.u)('UserSettingsCogContextMenu', 'Account Panel')
                                })
                            );
                    });
            }),
            eV(this, 'audioOnInteractionHandler', (0, M.u)('AudioDeviceMenu', 'Account Panel')),
            eV(this, 'handleInputAudioContextMenu', (e, t) => {
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
            eV(this, 'handleOutputAudioContextMenu', (e, t) => {
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
            eV(this, 'handleMouseEnter', () => {
                this.setState({ hovered: !0 });
            }),
            eV(this, 'handleMouseLeave', () => {
                this.setState({ hovered: !1 });
            }),
            eV(this, 'handleMouseEnterMute', () => {
                this.setState({
                    hoveringOnMute: !0,
                    shouldShowSpeakingWhileMutedTooltip: !1
                }),
                    this.speakingWhileMutedTooltipTimeout.stop();
            }),
            eV(this, 'handleMouseLeaveMute', () => {
                this.setState({ hoveringOnMute: !1 });
            }),
            eV(this, 'handleCopyTag', () => {
                let { currentUser: e } = this.props,
                    { shouldShowNametagTooltip: t, copiedStreak: n } = this.state;
                if (null == e) return;
                (0, ey.JG)(
                    eD.ZP.getUserTag(e, {
                        decoration: 'never',
                        identifiable: 'always'
                    })
                ),
                    eT.default.track(eL.rMx.TEXT_COPIED, { type: 'User Tag' });
                let r = {
                    shouldShowCopiedFeedback: !0,
                    shouldShowNametagTooltip: !0
                };
                t || (r.copiedStreak = n + 1),
                    this.setState(r, () => {
                        this.copiedTimeout.start(1000, () => this.setState({ shouldShowNametagTooltip: !1 })), this.copiedDecayTimeout.start(2000, () => this.setState({ copiedStreak: 0 }));
                    });
            }),
            eV(this, 'handleOccludedChanged', () => {
                let { occluded: e } = this.props;
                e &&
                    this.setState({
                        shouldShowNametagTooltip: !1,
                        shouldShowSpeakingWhileMutedTooltip: !1
                    });
            }),
            eV(this, 'handleSpeakingWhileMutedChanged', () => {
                let { selfMute: e, serverMute: t, suppress: n, speakingWhileMuted: r, occluded: i } = this.props,
                    { hoveringOnMute: s } = this.state,
                    a = void 0 === this.lastSpeakingWhileMutedNotificationTime || Date.now() - this.lastSpeakingWhileMutedNotificationTime > ez;
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
            eV(this, 'renderNameTag', () => {
                let { currentUser: e } = this.props;
                return null == e
                    ? null
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)('div', {
                                  className: eU.panelTitleContainer,
                                  children: (0, r.jsx)(eW.Z, { children: eD.ZP.getName(e) })
                              }),
                              (0, r.jsx)('div', {
                                  className: eU.panelSubtextContainer,
                                  children: (0, r.jsx)(ek.Z, { children: this.renderStatus() })
                              })
                          ]
                      });
            });
    }
}
function eJ(e) {
    let { selfDeaf: t, selfMute: n, awaitingRemote: i, serverMute: s, serverDeaf: a, suppress: l, shouldShowSpeakingWhileMutedTooltip: o, isEligibleForPomelo: c, webBuildOverride: d, handleMouseEnterMute: u, handleMouseLeaveMute: m, handleToggleSelfDeaf: g, handleToggleSelfMute: p, handleInputAudioContextMenu: h, handleOutputAudioContextMenu: b, handleOpenAccountSettings: N, handleOpenSettingsContextMenu: x, dismissibleContents: _ } = e;
    return (0, r.jsxs)('div', {
        className: eU.buttons,
        children: [
            (0, r.jsx)(e0, {
                selfMute: n,
                serverMute: s,
                suppress: l,
                awaitingRemote: i,
                tooltipText: o ? eM.NW.string(eM.t['29gnR0']) : void 0,
                tooltipColor: o ? f.FGA.GREEN : void 0,
                tooltipForceOpen: o || void 0,
                onMouseEnter: u,
                onMouseLeave: m,
                onClick: p,
                onContextMenu: h
            }),
            (0, r.jsx)(e1, {
                selfDeaf: t,
                serverDeaf: a,
                onClick: g,
                onContextMenu: b,
                awaitingRemote: i
            }),
            (0, r.jsx)(e$, {
                isEligibleForPomelo: c,
                webBuildOverride: d,
                onClick: N,
                onContextMenu: x,
                dismissibleContents: _.settings
            })
        ]
    });
}
function eQ() {
    var e;
    let t = (0, o.e7)([ev.default], () => ev.default.getCurrentUser()),
        n = (0, o.e7)([eN.default], () => eN.default.getId()),
        {
            activities: s,
            streaming: a,
            status: l
        } = (0, o.cj)([eC.Z], () => {
            let e = eC.Z.getActivities();
            return {
                activities: e,
                streaming:
                    null !=
                    e.find((e) => {
                        let { type: t } = e;
                        return t === eL.IIU.STREAMING;
                    }),
                status: eC.Z.getStatus()
            };
        }),
        d = (0, o.e7)([eb.Z], () => eb.Z.getAnyStreamForUser(n)),
        u = (0, C.Z)({ userId: n }),
        m = eD.ZP.useUserTag(t, { decoration: 'never' }),
        g = (0, o.e7)([eO.Z], () => eO.Z.hidePersonalInformation),
        p = (0, o.e7)([ej.Z, ex.Z], () => {
            let e = ej.Z.getChannelId();
            return null != e ? ex.Z.getChannel(e) : null;
        }),
        { mute: h, selfMute: N, suppress: x } = (0, ed.Z)(p),
        { selfDeaf: _, deaf: S } = (0, ec.Z)(p),
        T = (0, o.e7)([D.C], () => {
            var e;
            return (0, Z.fD)() ? (null === (e = D.C.getCurrentBuildOverride().overrides) || void 0 === e ? void 0 : e.discord_web) : null;
        }),
        I = (0, o.e7)([eS.ZP], () => eS.ZP.getPremiumTypeSubscription()),
        P = (0, o.e7)([eE.Z], () => eE.Z.getSpeakingWhileMuted()),
        R = (0, o.e7)([e_.Z], () => e_.Z.hasLayers()),
        k = (0, f.s9z)(f.JQI) || R || eR.s.isDisallowPopupsSet(),
        W = (0, X.b)(),
        L = (0, o.e7)([z.Z], () => null != z.Z.getAwaitingRemoteSessionInfo()),
        B = (0, ee.D)(),
        M = (0, E.u)(),
        U = eP.ZP.canUsePremiumGuildMemberProfile(t),
        V = (null == t ? void 0 : null === (e = t.avatarDecoration) || void 0 === e ? void 0 : e.skuId) === eB.rL,
        { activityStatusCleanupEnabled: G } = (0, O.w)({ location: 'Account' }),
        { voiceActivityStatusEnabled: H } = (0, v.U)({ location: 'Account' }),
        { enabled: Y } = (0, w.Z)({ location: 'Account' }),
        K = 'account';
    (0, j.j)({
        location: K + ' auto on',
        autoTrackExposure: !0
    }),
        (0, j.j)({
            location: K + ' auto off',
            autoTrackExposure: !1
        });
    let q = (0, o.e7)([er.Z], () => er.Z.hasHadOtherUserPlaySoundInSession()),
        $ = (function () {
            let e = (0, F.wE)(c.z.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2),
                [t, n] = (0, o.Wu)([J.Z], () => [J.Z.hasFetchedRelevance, J.Z.profileThemesRelevanceExceeded]),
                [r, s] = (0, o.Wu)([eS.ZP], () => [eS.ZP.hasFetchedMostRecentPremiumTypeSubscription(), eS.ZP.getMostRecentPremiumTypeSubscription()]),
                { enabled: a } = Q.Z.useExperiment({ location: '08bd40_1' }, { autoTrackExposure: !0 }),
                l = i.useMemo(() => {
                    let e = new Date().getTime();
                    return null != s && (s.status === eL.O0b.ACTIVE || e - s.currentPeriodEnd.getTime() < eK);
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
        { analyticsLocations: et } = (0, A.ZP)(y.Z.ACCOUNT),
        en = {
            avatar: [],
            settings: []
        };
    return (
        !k && ($ && en.settings.push(c.z.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2), B && (1 === M ? en.settings.push(c.z.USER_SAFETY_CONSUMER_EDUCATION_MUTE) : en.settings.push(c.z.USER_SAFETY_CONSUMER_EDUCATION_BLOCK)), q && en.settings.push(c.z.SOUNDBOARD_VOLUME_EDUCATION), U && en.settings.push(c.z.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK), V && en.avatar.push(c.z.PREMIUM_SUBSCRIPTION_APRIL_MARKETING_DECO_TOOLTIP)),
        (0, r.jsx)(A.Gt, {
            value: et,
            children: (0, r.jsx)(eX, {
                currentUser: t,
                activities: s,
                applicationStream: d,
                voiceChannel: p,
                dismissibleContents: en,
                userTag: m,
                hidePrivateData: g,
                occluded: k,
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
                awaitingRemote: L,
                isEligibleForPomelo: W,
                simplifiedCallSettingsEnabled: Y,
                activityStatusCleanupEnabled: G,
                voiceActivityStatusEnabled: H
            })
        })
    );
}
function e$(e) {
    let { webBuildOverride: t, isEligibleForPomelo: n, onClick: i, onContextMenu: s, dismissibleContents: a } = e,
        l = f.ewm,
        o = (0, p.i)();
    l = null != t ? f.bgT : n ? f.Ncx : o.Component;
    let [d, u] = (0, H.US)(a);
    return (0, r.jsx)(f.yRy, {
        position: 'top',
        align: 'center',
        shouldShow: null != d,
        renderPopout: d === c.z.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2 ? () => (0, r.jsx)($.Z, {}) : d === c.z.USER_SAFETY_CONSUMER_EDUCATION_BLOCK ? () => (0, r.jsx)(et.Z, { markAsDismissed: u }) : d === c.z.USER_SAFETY_CONSUMER_EDUCATION_MUTE ? () => (0, r.jsx)(en.Z, { markAsDismissed: u }) : d === c.z.SOUNDBOARD_VOLUME_EDUCATION ? () => (0, r.jsx)(ei.Z, { markAsDismissed: u }) : d === c.z.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK ? () => (0, r.jsx)(ea.Z, {}) : () => (0, r.jsx)(r.Fragment, {}),
        children: () =>
            (0, r.jsx)(
                ew.Z,
                eG(
                    {
                        tooltipText: null != t ? eM.NW.formatToPlainString(eM.t.Gzh6ZG, { webBuildOverride: t.id }) : eM.NW.string(eM.t.cduTBA),
                        onClick: i,
                        onContextMenu: s,
                        icon: (0, r.jsx)(l, { size: 'refresh_sm' })
                    },
                    o.events
                )
            )
    });
}
function e0(e) {
    let { selfMute: t, serverMute: n, suppress: s, awaitingRemote: c, tooltipText: d, tooltipColor: u, tooltipForceOpen: p, onMouseEnter: b, onMouseLeave: N, onClick: x, onContextMenu: _ } = e,
        E = t || s || n,
        j = i.useRef(null),
        C = (0, m.O)(E ? 'unmute' : 'mute'),
        O = (0, g.P)(E ? 'unmute' : 'mute'),
        { activeVoice: v } = (0, eg.o)(),
        S = null != v,
        T = (0, em.z)(v),
        I = (0, o.e7)([ej.Z], () => ej.Z.isConnected()),
        { Component: P, events: R, play: D } = S ? O : C,
        Z = n || s ? f.v0G : P,
        { mode: w } = (0, el.ZP)({ location: 'RTC Microphone Button' }),
        { coloredIcons: k } = (0, eo.Z)({ location: 'RTC Microphone Button' }),
        L = null != d ? d : (0, W.Z)(t, n, s, c, w === el.BK.GroupedButtonsRedMic),
        { analyticsLocations: B } = (0, A.ZP)(y.Z.AUDIO_INPUT_BUTTON),
        M = (0, eu.Hu)({
            location: y.Z.AUDIO_INPUT_BUTTON,
            autoTrackExposure: !0
        });
    i.useEffect(() => () => D(), [E, D]);
    let U = i.useCallback(
            (e) => {
                _(e, B);
            },
            [_, B]
        ),
        [V, G] = i.useState(!1),
        F = i.useCallback((e) => {
            var t;
            if ((0, l.k)(null == e ? void 0 : e.target, Node) && (null === (t = j.current) || void 0 === t ? void 0 : t.contains(e.target))) return h.F;
            G(!1);
        }, []),
        [H, z] = i.useState(!1);
    return (
        i.useEffect(() => {
            let e;
            return (
                I &&
                    S &&
                    !E &&
                    (e = setTimeout(() => {
                        z(!0), (e = setTimeout(() => z(!1), eY));
                    }, 300)),
                () => {
                    z(!1), clearTimeout(e);
                }
            );
        }, [I]),
        (0, r.jsx)(A.Gt, {
            value: B,
            children: (0, r.jsxs)('div', {
                ref: j,
                className: a()(eU.micButtonParent, k),
                children: [
                    (0, r.jsx)(ew.Z, {
                        tooltipText: L,
                        tooltipColor: u,
                        tooltipForceOpen: p,
                        onMouseEnter: () => {
                            b(), R.onMouseEnter();
                        },
                        onMouseLeave: () => {
                            N(), R.onMouseLeave();
                        },
                        icon: (0, r.jsx)(Z, {
                            size: 'custom',
                            width: 20,
                            height: 20,
                            color: E ? f.TVs.colors.STATUS_DANGER : 'currentColor'
                        }),
                        iconForeground: E ? eU.strikethrough : null,
                        onClick: x,
                        onContextMenu: U,
                        role: 'switch',
                        className: M ? eU.micButtonWithMenu : void 0,
                        redGlow: E && k,
                        'aria-label': eM.NW.string(eM.t['w4m94+']),
                        'aria-checked': E,
                        disabled: c
                    }),
                    M &&
                        (0, r.jsx)(f.yRy, {
                            position: 'top',
                            align: 'center',
                            animation: f.yRy.Animation.FADE,
                            useMouseEnter: !0,
                            onRequestOpen: ep.r5,
                            onRequestClose: F,
                            shouldShow: V,
                            renderPopout: (e) => {
                                let { closePopout: t } = e;
                                return (0, r.jsx)(ef.l, { onSettingsButtonClick: t });
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
                                    children: (0, r.jsx)(eh.B, {
                                        onCTA: () => G(!0),
                                        canBeShown: !s,
                                        children: (e, t) =>
                                            (0, r.jsx)(
                                                ew.Z,
                                                eG(
                                                    {
                                                        tooltipForceOpen: H,
                                                        tooltipColor: H ? f.FGA.GREEN : void 0,
                                                        tooltipContentClassName: H ? eU.voiceFilterWarning : void 0,
                                                        tooltipText: H
                                                            ? (0, r.jsxs)(r.Fragment, {
                                                                  children: [
                                                                      (0, r.jsx)('img', {
                                                                          alt: null != T ? eM.NW.string(T.name) : '',
                                                                          src: null == T ? void 0 : T.iconURL,
                                                                          draggable: !1
                                                                      }),
                                                                      (0, r.jsx)(f.Text, {
                                                                          variant: 'text-sm/medium',
                                                                          children: eM.NW.string(eM.t.VlC1dX)
                                                                      })
                                                                  ]
                                                              })
                                                            : eM.NW.string(eM.t.Hapb4O),
                                                        icon: (0, r.jsx)(a, {
                                                            className: eU.buttonChevronIcon,
                                                            size: 'custom',
                                                            width: 12,
                                                            height: 12,
                                                            color: k && E ? f.TVs.colors.STATUS_DANGER : f.TVs.colors.TEXT_NORMAL
                                                        }),
                                                        role: 'button',
                                                        className: eU.buttonChevron,
                                                        redGlow: E && k,
                                                        'aria-label': eM.NW.string(eM.t.Hapb4O),
                                                        disabled: c,
                                                        onClick: (e) => {
                                                            null == t || t(), n(e), G(!V);
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
function e1(e) {
    let { selfDeaf: t, serverDeaf: n, awaitingRemote: s, onClick: l, onContextMenu: o } = e,
        c = t || n,
        {
            Component: d,
            play: m,
            events: { onMouseEnter: g, onMouseLeave: p }
        } = (0, u.l)(c ? 'undeafen' : 'deafen'),
        h = n ? f.Vm4 : d,
        { coloredIcons: b } = (0, eo.Z)({ location: 'RTC Microphone Button' }),
        { analyticsLocations: N } = (0, A.ZP)(y.Z.AUDIO_OUTPUT_BUTTON);
    i.useEffect(() => () => m(), [c, m]);
    let x = i.useCallback(
        (e) => {
            o(e, N);
        },
        [o, N]
    );
    return (0, r.jsx)(A.Gt, {
        value: N,
        children: (0, r.jsx)(ew.Z, {
            tooltipText: (0, k.Z)(t, n, s),
            onMouseEnter: g,
            onMouseLeave: p,
            icon: (0, r.jsx)(h, {
                size: 'custom',
                width: 20,
                height: 20,
                color: c ? f.TVs.colors.STATUS_DANGER : 'currentColor'
            }),
            onClick: l,
            onContextMenu: x,
            innerClassName: a()({ [eU.redIcon]: n }),
            iconForeground: c ? eU.strikethrough : null,
            role: 'switch',
            redGlow: b && c,
            'aria-label': eM.NW.string(eM.t.wjcRFR),
            'aria-checked': c,
            disabled: s
        })
    });
}
