n.d(t, {
    Z: () => eq,
    m: () => eK
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
    M = n(64220),
    U = n(600164),
    V = n(427217),
    G = n(540059),
    F = n(605236),
    H = n(243778),
    z = n(258609),
    Y = n(427347),
    K = n(331541),
    q = n(359135),
    X = n(516817),
    J = n(332473),
    Q = n(240504),
    $ = n(637906),
    ee = n(39370),
    et = n(19199),
    en = n(866483),
    er = n(14357),
    ei = n(763296),
    es = n(640806),
    ea = n(184301),
    el = n(52538),
    eo = n(861254),
    ec = n(879815),
    ed = n(294629),
    eu = n(875527),
    em = n(378441),
    eg = n(358820),
    ep = n(469887),
    eh = n(306609),
    ef = n(199902),
    eb = n(314897),
    eN = n(592125),
    ex = n(819640),
    e_ = n(131951),
    eE = n(19780),
    ej = n(885110),
    eC = n(246946),
    eO = n(594174),
    ev = n(78839),
    eS = n(626135),
    eT = n(768581),
    eI = n(572004),
    ey = n(70956),
    eA = n(74538),
    eP = n(374023),
    eR = n(51144),
    eD = n(998502),
    eZ = n(870569),
    ew = n(345243),
    ek = n(115530),
    eW = n(981631),
    eL = n(215023),
    eB = n(388032),
    eM = n(963175);
function eU(e, t, n) {
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
function eV(e) {
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
                eU(e, t, n[t]);
            });
    }
    return e;
}
function eG(e, t) {
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
let eF = eD.ZP.getEnableHardwareAcceleration() ? f.Xo$ : f.qEK,
    eH = 2 * ey.Z.Millis.MINUTE,
    ez = 30 * ey.Z.Millis.DAY;
function eY(e) {
    let { speaking: t, streaming: n, currentUser: i, status: s, handleMouseLeave: l, renderNameTag: o } = e,
        c = (0, G.Q3)('RTC Avatar'),
        d = (0, P.Z)(null == i ? void 0 : i.avatarDecoration),
        u = (0, eT.NZ)({
            avatarDecoration: d,
            size: (0, R.y9)(f.EFr.SIZE_32)
        }),
        m = (0, f.dQu)(f.TVs.modules.guildbar.AVATAR_SIZE);
    return null == i
        ? null
        : (0, r.jsx)(_.Z, {
              object: eW.qAy.AVATAR,
              children: (0, r.jsx)(f.yRy, {
                  clickTrap: !0,
                  renderPopout: (e) => {
                      let { closePopout: t, setPopoutRef: n } = e;
                      return (0, r.jsx)('div', {
                          className: eM.accountProfilePopoutWrapper,
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
                      (0, ea.Z)(i, void 0, {
                          withMutualGuilds: !1,
                          withMutualFriends: !1
                      }),
                  children: (e) =>
                      (0, r.jsxs)(
                          f.P3F,
                          eG(eV({}, e), {
                              'aria-label': eB.NW.string(eB.t['3Uj+2t']),
                              className: eM.avatarWrapper,
                              children: [
                                  (0, r.jsx)(eF, {
                                      size: c ? f.EFr['SIZE_'.concat(m)] : f.EFr.SIZE_32,
                                      src: i.getAvatarURL(void 0, c ? m - 4 : 32, !1),
                                      avatarDecoration: u,
                                      'aria-label': i.username,
                                      status: n ? eW.Skl.STREAMING : s,
                                      isSpeaking: t,
                                      className: eM.avatar
                                  }),
                                  (0, r.jsx)('div', {
                                      className: a()(eM.nameTag, { [eM.canCopy]: eI.wS }),
                                      children: o()
                                  })
                              ]
                          })
                      )
              })
          });
}
class eK extends i.PureComponent {
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
            t = [eB.NW.string(eB.t.MSaeTU), eB.NW.string(eB.t.UmrCw8), eB.NW.string(eB.t.gKE0Ji), eB.NW.string(eB.t['4DSKbm']), eB.NW.string(eB.t['+8ENdX']), eB.NW.string(eB.t.GlWHv7), eB.NW.string(eB.t.hIzxU1), eB.NW.string(eB.t['26uMPD']), eB.NW.string(eB.t.uFs7R0), eB.NW.string(eB.t.bLXdcX), eB.NW.string(eB.t.gPg9fX)],
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
                    textClassName: eM.activityStatusText,
                    hideTooltip: !0
                })
            });
        let d =
            null == t
                ? void 0
                : t.find((e) => {
                      let { type: t } = e;
                      return t === eW.IIU.CUSTOM_STATUS;
                  });
        return null != d
            ? (0, r.jsx)(I.Z, {
                  hoverText: l,
                  forceHover: e,
                  children: (0, r.jsx)(V.Z, {
                      activity: d,
                      emojiClassName: eM.emoji,
                      className: eM.customStatus
                  })
              })
            : null != a && a !== eW.Skl.UNKNOWN && s.isPomelo()
              ? (0, r.jsx)(I.Z, {
                    hoverText: l,
                    forceHover: e,
                    children: eR.ZP.humanizeStatus(a)
                })
              : l;
    }
    renderNameTag() {
        let { currentUser: e } = this.props;
        return null == e
            ? null
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)('div', {
                          className: eM.panelTitleContainer,
                          children: (0, r.jsx)(ek.Z, { children: eR.ZP.getName(e) })
                      }),
                      (0, r.jsx)('div', {
                          className: eM.panelSubtextContainer,
                          children: (0, r.jsx)(ew.Z, { children: this.renderStatus() })
                      })
                  ]
              });
    }
    renderAvatarWithPopout() {
        return (0, r.jsx)(
            eY,
            eG(eV({}, this.props), {
                handleMouseLeave: this.handleMouseLeave,
                renderNameTag: () => this.renderNameTag()
            })
        );
    }
    renderNameZone() {
        let { currentUser: e, dismissibleContents: t } = this.props;
        return null == e
            ? null
            : (0, r.jsx)(r.Fragment, {
                  children: (0, r.jsx)(H.ZP, {
                      contentTypes: t.avatar,
                      children: (e) => {
                          let { visibleContent: t, markAsDismissed: n } = e;
                          return t === c.z.PREMIUM_SUBSCRIPTION_APRIL_MARKETING_DECO_TOOLTIP
                              ? (0, r.jsx)(M.Z, {
                                    markAsDismissed: n,
                                    children: () => this.renderAvatarWithPopout()
                                })
                              : this.renderAvatarWithPopout();
                      }
                  })
              });
    }
    render() {
        let { currentUser: e, selfDeaf: t, selfMute: n, awaitingRemote: i, serverMute: s, serverDeaf: l, suppress: o, dismissibleContents: d, nameplate: u } = this.props,
            { shouldShowSpeakingWhileMutedTooltip: m, hovered: g } = this.state;
        return null == e
            ? null
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(X.Z, {
                          nameplate: u,
                          placement: q.QY.Account,
                          hover: g,
                          children: (0, r.jsxs)('div', {
                              className: a()(eM.container, { [eM.nameplated]: null != u }),
                              onMouseEnter: this.handleMouseEnter,
                              onMouseLeave: this.handleMouseLeave,
                              children: [
                                  this.renderNameZone(),
                                  (0, r.jsxs)(U.Z, {
                                      grow: 0,
                                      className: eM.buttons,
                                      children: [
                                          (0, r.jsx)(eJ, {
                                              selfMute: n,
                                              serverMute: s,
                                              suppress: o,
                                              awaitingRemote: i,
                                              tooltipText: m ? eB.NW.string(eB.t['29gnR0']) : void 0,
                                              tooltipColor: m ? f.FGA.GREEN : void 0,
                                              tooltipForceOpen: m || void 0,
                                              onMouseEnter: this.handleMouseEnterMute,
                                              onMouseLeave: this.handleMouseLeaveMute,
                                              onClick: this.handleToggleSelfMute,
                                              onContextMenu: this.handleInputAudioContextMenu
                                          }),
                                          (0, r.jsx)(eQ, {
                                              selfDeaf: t,
                                              serverDeaf: l,
                                              onClick: this.handleToggleSelfDeaf,
                                              onContextMenu: this.handleOutputAudioContextMenu,
                                              awaitingRemote: i
                                          }),
                                          (0, r.jsx)(H.ZP, {
                                              contentTypes: d.settings,
                                              children: (e) => {
                                                  let { visibleContent: t, markAsDismissed: n } = e;
                                                  switch (t) {
                                                      case c.z.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2:
                                                          return (0, r.jsx)(f.yRy, {
                                                              position: 'top',
                                                              align: 'center',
                                                              shouldShow: !0,
                                                              renderPopout: () => (0, r.jsx)(ee.Z, {}),
                                                              children: this.renderSettingsGear
                                                          });
                                                      case c.z.USER_SAFETY_CONSUMER_EDUCATION_BLOCK:
                                                          return (0, r.jsx)(f.yRy, {
                                                              position: 'top',
                                                              align: 'center',
                                                              shouldShow: !0,
                                                              renderPopout: () => (0, r.jsx)(en.Z, { markAsDismissed: n }),
                                                              children: this.renderSettingsGear
                                                          });
                                                      case c.z.USER_SAFETY_CONSUMER_EDUCATION_MUTE:
                                                          return (0, r.jsx)(f.yRy, {
                                                              position: 'top',
                                                              align: 'center',
                                                              shouldShow: !0,
                                                              renderPopout: () => (0, r.jsx)(er.Z, { markAsDismissed: n }),
                                                              children: this.renderSettingsGear
                                                          });
                                                      case c.z.SOUNDBOARD_VOLUME_EDUCATION:
                                                          return (0, r.jsx)(f.yRy, {
                                                              position: 'top',
                                                              align: 'center',
                                                              shouldShow: !0,
                                                              renderPopout: () => (0, r.jsx)(es.Z, { markAsDismissed: n }),
                                                              children: this.renderSettingsGear
                                                          });
                                                      case c.z.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK:
                                                          return (0, r.jsx)(f.yRy, {
                                                              position: 'top',
                                                              align: 'center',
                                                              shouldShow: !0,
                                                              renderPopout: () => (0, r.jsx)(el.Z, {}),
                                                              children: this.renderSettingsGear
                                                          });
                                                      default:
                                                          return this.renderSettingsGear();
                                                  }
                                              }
                                          })
                                      ]
                                  })
                              ]
                          })
                      }),
                      (0, r.jsx)(Y.Z, {})
                  ]
              });
    }
    constructor(...e) {
        super(...e),
            eU(this, 'copiedTimeout', new d.V7()),
            eU(this, 'copiedDecayTimeout', new d.V7()),
            eU(this, 'speakingWhileMutedTooltipTimeout', new d.V7()),
            eU(this, 'lastSpeakingWhileMutedNotificationTime', void 0),
            eU(this, 'state', {
                hovered: !1,
                copiedStreak: 0,
                shouldShowNametagTooltip: !1,
                shouldShowCopiedFeedback: !1,
                shouldShowSpeakingWhileMutedTooltip: !1,
                hoveringOnMute: !1
            }),
            eU(this, 'handleToggleSelfMute', () => {
                let { serverMute: e, suppress: t } = this.props;
                (0, B.Z)(e, t, eW.jXE.ACCOUNT_PANEL);
            }),
            eU(this, 'handleToggleSelfDeaf', () => {
                let { serverDeaf: e } = this.props;
                (0, L.Z)(e, eW.jXE.ACCOUNT_PANEL);
            }),
            eU(this, 'handleOpenAccountSettings', () => {
                this.handleOpenSettings();
            }),
            eU(this, 'handleOpenSettings', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eW.oAB.ACCOUNT,
                    t = arguments.length > 1 ? arguments[1] : void 0,
                    n = arguments.length > 2 ? arguments[2] : void 0;
                x.Z.open(e, t, n);
            }),
            eU(this, 'handleOpenSettingsContextMenu', (e) => {
                let { currentUser: t } = this.props;
                null != t &&
                    (0, N.jW)(e, async () => {
                        let { default: e } = await n.e('2535').then(n.bind(n, 923422));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                eG(eV({}, n), {
                                    user: t,
                                    premiumSubscription: this.props.premiumSubscription,
                                    webBuildOverride: this.props.webBuildOverride
                                })
                            );
                    });
            }),
            eU(this, 'handleInputAudioContextMenu', (e, t) => {
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
                                      simplified: !0
                                  })
                                : (0, r.jsx)(e, {
                                      onClose: N.Zy,
                                      renderInputDevices: !0,
                                      renderInputModes: !0,
                                      renderInputVolume: !0
                                  })
                        });
                });
            }),
            eU(this, 'handleOutputAudioContextMenu', (e, t) => {
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
                                      simplified: !0
                                  })
                                : (0, r.jsx)(e, {
                                      onClose: N.Zy,
                                      renderOutputDevices: !0,
                                      renderOutputVolume: !0
                                  })
                        });
                });
            }),
            eU(this, 'handleMouseEnter', () => {
                this.setState({ hovered: !0 });
            }),
            eU(this, 'handleMouseLeave', () => {
                this.setState({ hovered: !1 });
            }),
            eU(this, 'handleMouseEnterMute', () => {
                this.setState({
                    hoveringOnMute: !0,
                    shouldShowSpeakingWhileMutedTooltip: !1
                }),
                    this.speakingWhileMutedTooltipTimeout.stop();
            }),
            eU(this, 'handleMouseLeaveMute', () => {
                this.setState({ hoveringOnMute: !1 });
            }),
            eU(this, 'handleCopyTag', () => {
                let { currentUser: e } = this.props,
                    { shouldShowNametagTooltip: t, copiedStreak: n } = this.state;
                if (null == e) return;
                (0, eI.JG)(
                    eR.ZP.getUserTag(e, {
                        decoration: 'never',
                        identifiable: 'always'
                    })
                ),
                    eS.default.track(eW.rMx.TEXT_COPIED, { type: 'User Tag' });
                let r = {
                    shouldShowCopiedFeedback: !0,
                    shouldShowNametagTooltip: !0
                };
                t || (r.copiedStreak = n + 1),
                    this.setState(r, () => {
                        this.copiedTimeout.start(1000, () => this.setState({ shouldShowNametagTooltip: !1 })), this.copiedDecayTimeout.start(2000, () => this.setState({ copiedStreak: 0 }));
                    });
            }),
            eU(this, 'handleOccludedChanged', () => {
                let { occluded: e } = this.props;
                e &&
                    this.setState({
                        shouldShowNametagTooltip: !1,
                        shouldShowSpeakingWhileMutedTooltip: !1
                    });
            }),
            eU(this, 'handleSpeakingWhileMutedChanged', () => {
                let { selfMute: e, serverMute: t, suppress: n, speakingWhileMuted: r, occluded: i } = this.props,
                    { hoveringOnMute: s } = this.state,
                    a = void 0 === this.lastSpeakingWhileMutedNotificationTime || Date.now() - this.lastSpeakingWhileMutedNotificationTime > eH;
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
            eU(this, 'renderSettingsGear', () =>
                (0, r.jsx)(eX, {
                    isEligibleForPomelo: this.props.isEligibleForPomelo,
                    webBuildOverride: this.props.webBuildOverride,
                    onClick: this.handleOpenAccountSettings,
                    onContextMenu: this.handleOpenSettingsContextMenu
                })
            );
    }
}
function eq() {
    var e;
    let t = (0, o.e7)([eO.default], () => eO.default.getCurrentUser()),
        n = (0, o.e7)([eb.default], () => eb.default.getId()),
        {
            activities: s,
            streaming: a,
            status: l
        } = (0, o.cj)([ej.Z], () => {
            let e = ej.Z.getActivities();
            return {
                activities: e,
                streaming:
                    null !=
                    e.find((e) => {
                        let { type: t } = e;
                        return t === eW.IIU.STREAMING;
                    }),
                status: ej.Z.getStatus()
            };
        }),
        d = (0, o.e7)([ef.Z], () => ef.Z.getAnyStreamForUser(n)),
        u = (0, C.Z)({ userId: n }),
        m = eR.ZP.useUserTag(t, { decoration: 'never' }),
        g = (0, o.e7)([eC.Z], () => eC.Z.hidePersonalInformation),
        p = (0, o.e7)([eE.Z, eN.Z], () => {
            let e = eE.Z.getChannelId();
            return null != e ? eN.Z.getChannel(e) : null;
        }),
        { mute: h, selfMute: N, suppress: x } = (0, ed.Z)(p),
        { selfDeaf: _, deaf: S } = (0, ec.Z)(p),
        T = (0, o.e7)([D.C], () => {
            var e;
            return (0, Z.fD)() ? (null === (e = D.C.getCurrentBuildOverride().overrides) || void 0 === e ? void 0 : e.discord_web) : null;
        }),
        I = (0, o.e7)([ev.ZP], () => ev.ZP.getPremiumTypeSubscription()),
        P = (0, o.e7)([e_.Z], () => e_.Z.getSpeakingWhileMuted()),
        R = (0, o.e7)([ex.Z], () => ex.Z.hasLayers()),
        k = (0, f.s9z)(f.JQI) || R || eP.s.isDisallowPopupsSet(),
        W = (0, J.b)(),
        L = (0, o.e7)([z.Z], () => null != z.Z.getAwaitingRemoteSessionInfo()),
        B = (0, et.D)(),
        M = (0, E.u)(),
        U = eA.ZP.canUsePremiumGuildMemberProfile(t),
        V = (null == t ? void 0 : null === (e = t.avatarDecoration) || void 0 === e ? void 0 : e.skuId) === eL.rL,
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
    let q = (0, o.e7)([ei.Z], () => ei.Z.hasHadOtherUserPlaySoundInSession()),
        X = (function () {
            let e = (0, F.wE)(c.z.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2),
                [t, n] = (0, o.Wu)([Q.Z], () => [Q.Z.hasFetchedRelevance, Q.Z.profileThemesRelevanceExceeded]),
                [r, s] = (0, o.Wu)([ev.ZP], () => [ev.ZP.hasFetchedMostRecentPremiumTypeSubscription(), ev.ZP.getMostRecentPremiumTypeSubscription()]),
                { enabled: a } = $.Z.useExperiment({ location: '08bd40_1' }, { autoTrackExposure: !0 }),
                l = i.useMemo(() => {
                    let e = new Date().getTime();
                    return null != s && (s.status === eW.O0b.ACTIVE || e - s.currentPeriodEnd.getTime() < ez);
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
        { analyticsLocations: ee } = (0, A.ZP)(y.Z.ACCOUNT),
        en = {
            avatar: [],
            settings: []
        };
    return (
        !k && (X && en.settings.push(c.z.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2), B && (1 === M ? en.settings.push(c.z.USER_SAFETY_CONSUMER_EDUCATION_MUTE) : en.settings.push(c.z.USER_SAFETY_CONSUMER_EDUCATION_BLOCK)), q && en.settings.push(c.z.SOUNDBOARD_VOLUME_EDUCATION), U && en.settings.push(c.z.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK), V && en.avatar.push(c.z.PREMIUM_SUBSCRIPTION_APRIL_MARKETING_DECO_TOOLTIP)),
        (0, r.jsx)(A.Gt, {
            value: ee,
            children: (0, r.jsx)(eK, {
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
function eX(e) {
    let { webBuildOverride: t, isEligibleForPomelo: n, onClick: i, onContextMenu: s } = e,
        a = f.ewm,
        l = (0, p.i)();
    return (
        (a = null != t ? f.bgT : n ? f.Ncx : l.Component),
        (0, r.jsx)(
            eZ.Z,
            eV(
                {
                    tooltipText: null != t ? eB.NW.formatToPlainString(eB.t.Gzh6ZG, { webBuildOverride: t.id }) : eB.NW.string(eB.t.cduTBA),
                    onClick: i,
                    onContextMenu: s,
                    icon: (0, r.jsx)(a, { size: 'refresh_sm' })
                },
                l.events
            )
        )
    );
}
function eJ(e) {
    let { selfMute: t, serverMute: n, suppress: s, awaitingRemote: a, tooltipText: o, tooltipColor: c, tooltipForceOpen: d, onMouseEnter: u, onMouseLeave: p, onClick: b, onContextMenu: N } = e,
        x = t || s || n,
        _ = i.useRef(null),
        E = (0, m.O)(x ? 'unmute' : 'mute'),
        j = (0, g.P)(x ? 'unmute' : 'mute'),
        { activeVoice: C } = (0, em.o)(),
        { Component: O, events: v, play: S } = null != C ? j : E,
        T = n || s ? f.v0G : O,
        { mode: I } = (0, eo.ZP)({ location: 'RTC Microphone Button' }),
        P = null != o ? o : (0, W.Z)(t, n, s, a, I === eo.BK.GroupedButtonsRedMic),
        { analyticsLocations: R } = (0, A.ZP)(y.Z.AUDIO_INPUT_BUTTON),
        D = (0, eu.Hu)({
            location: y.Z.AUDIO_INPUT_BUTTON,
            autoTrackExposure: !0
        });
    i.useEffect(() => () => S(), [x, S]);
    let Z = i.useCallback(
            (e) => {
                N(e, R);
            },
            [N, R]
        ),
        [w, k] = i.useState(!1),
        L = i.useCallback((e) => {
            var t;
            if ((0, l.k)(null == e ? void 0 : e.target, Node) && (null === (t = _.current) || void 0 === t ? void 0 : t.contains(e.target))) return h.F;
            k(!1);
        }, []);
    return (0, r.jsx)(A.Gt, {
        value: R,
        children: (0, r.jsxs)('div', {
            ref: _,
            className: eM.micButtonParent,
            children: [
                (0, r.jsx)(eZ.Z, {
                    tooltipText: P,
                    tooltipColor: c,
                    tooltipForceOpen: d,
                    onMouseEnter: () => {
                        u(), v.onMouseEnter();
                    },
                    onMouseLeave: () => {
                        p(), v.onMouseLeave();
                    },
                    icon: (0, r.jsx)(T, {
                        size: 'custom',
                        width: 20,
                        height: 20,
                        color: x ? f.TVs.colors.STATUS_DANGER : 'currentColor'
                    }),
                    iconForeground: x ? eM.strikethrough : null,
                    onClick: b,
                    onContextMenu: Z,
                    role: 'switch',
                    className: D ? eM.micButtonWithMenu : void 0,
                    'aria-label': eB.NW.string(eB.t['w4m94+']),
                    'aria-checked': x,
                    disabled: a
                }),
                D &&
                    (0, r.jsx)(f.yRy, {
                        position: 'top',
                        align: 'center',
                        animation: f.yRy.Animation.FADE,
                        useMouseEnter: !0,
                        onRequestOpen: eg.r5,
                        onRequestClose: L,
                        shouldShow: w,
                        renderPopout: (e) => {
                            let { closePopout: t } = e;
                            return (0, r.jsx)(eh.l, { onSettingsButtonClick: t });
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
                            let l = s ? f.u04 : f.CJ0;
                            return (0, r.jsx)('div', {
                                children: (0, r.jsx)(ep.B, {
                                    onCTA: () => k(!0),
                                    canBeShown: !s,
                                    children: (e, t) =>
                                        (0, r.jsx)(
                                            eZ.Z,
                                            eV(
                                                {
                                                    tooltipText: eB.NW.string(eB.t.Hapb4O),
                                                    icon: (0, r.jsx)(l, {
                                                        className: eM.buttonChevronIcon,
                                                        size: 'custom',
                                                        width: 12,
                                                        height: 12,
                                                        color: f.TVs.colors.TEXT_NORMAL
                                                    }),
                                                    role: 'button',
                                                    className: eM.buttonChevron,
                                                    'aria-label': eB.NW.string(eB.t.Hapb4O),
                                                    disabled: a,
                                                    onClick: (e) => {
                                                        null == t || t(), n(e), k(!w);
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
    });
}
function eQ(e) {
    let { selfDeaf: t, serverDeaf: n, awaitingRemote: s, onClick: l, onContextMenu: o } = e,
        c = t || n,
        {
            Component: d,
            play: m,
            events: { onMouseEnter: g, onMouseLeave: p }
        } = (0, u.l)(c ? 'undeafen' : 'deafen'),
        h = n ? f.Vm4 : d,
        { analyticsLocations: b } = (0, A.ZP)(y.Z.AUDIO_OUTPUT_BUTTON);
    i.useEffect(() => () => m(), [c, m]);
    let N = i.useCallback(
        (e) => {
            o(e, b);
        },
        [o, b]
    );
    return (0, r.jsx)(A.Gt, {
        value: b,
        children: (0, r.jsx)(eZ.Z, {
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
            onContextMenu: N,
            innerClassName: a()({ [eM.redIcon]: n }),
            iconForeground: c ? eM.strikethrough : null,
            role: 'switch',
            'aria-label': eB.NW.string(eB.t.wjcRFR),
            'aria-checked': c,
            disabled: s
        })
    });
}
