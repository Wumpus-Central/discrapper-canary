n.d(t, {
    Z: () => eK,
    m: () => eY
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
    N = n(355467),
    x = n(239091),
    b = n(230711),
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
    eg = n(469887),
    ep = n(306609),
    eh = n(199902),
    ef = n(314897),
    eN = n(592125),
    ex = n(819640),
    eb = n(131951),
    e_ = n(19780),
    eE = n(885110),
    ej = n(246946),
    eC = n(594174),
    eO = n(78839),
    ev = n(626135),
    eS = n(768581),
    eT = n(572004),
    eI = n(70956),
    ey = n(74538),
    eA = n(374023),
    eP = n(51144),
    eR = n(998502),
    eD = n(870569),
    eZ = n(345243),
    ew = n(115530),
    ek = n(981631),
    eW = n(215023),
    eL = n(388032),
    eB = n(963175);
function eM(e, t, n) {
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
function eU(e) {
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
                eM(e, t, n[t]);
            });
    }
    return e;
}
function eV(e, t) {
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
let eG = eR.ZP.getEnableHardwareAcceleration() ? f.Xo$ : f.qEK,
    eF = 2 * eI.Z.Millis.MINUTE,
    eH = 30 * eI.Z.Millis.DAY;
function ez(e) {
    let { speaking: t, streaming: n, currentUser: i, status: s, handleMouseLeave: l, renderNameTag: o } = e,
        c = (0, G.Q3)('RTC Avatar'),
        d = (0, P.Z)(null == i ? void 0 : i.avatarDecoration),
        u = (0, eS.NZ)({
            avatarDecoration: d,
            size: (0, R.y9)(f.EFr.SIZE_32)
        }),
        m = (0, f.dQu)(f.TVs.modules.guildbar.AVATAR_SIZE);
    return null == i
        ? null
        : (0, r.jsx)(_.Z, {
              object: ek.qAy.AVATAR,
              children: (0, r.jsx)(f.yRy, {
                  clickTrap: !0,
                  renderPopout: (e) => {
                      let { closePopout: t, setPopoutRef: n } = e;
                      return (0, r.jsx)('div', {
                          className: eB.accountProfilePopoutWrapper,
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
                          eV(eU({}, e), {
                              'aria-label': eL.NW.string(eL.t['3Uj+2t']),
                              className: eB.avatarWrapper,
                              children: [
                                  (0, r.jsx)(eG, {
                                      size: c ? f.EFr['SIZE_'.concat(m)] : f.EFr.SIZE_32,
                                      src: i.getAvatarURL(void 0, c ? m - 4 : 32, !1),
                                      avatarDecoration: u,
                                      'aria-label': i.username,
                                      status: n ? ek.Skl.STREAMING : s,
                                      isSpeaking: t,
                                      className: eB.avatar
                                  }),
                                  (0, r.jsx)('div', {
                                      className: a()(eB.nameTag, { [eB.canCopy]: eT.wS }),
                                      children: o()
                                  })
                              ]
                          })
                      )
              })
          });
}
class eY extends i.PureComponent {
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
            t = [eL.NW.string(eL.t.MSaeTU), eL.NW.string(eL.t.UmrCw8), eL.NW.string(eL.t.gKE0Ji), eL.NW.string(eL.t['4DSKbm']), eL.NW.string(eL.t['+8ENdX']), eL.NW.string(eL.t.GlWHv7), eL.NW.string(eL.t.hIzxU1), eL.NW.string(eL.t['26uMPD']), eL.NW.string(eL.t.uFs7R0), eL.NW.string(eL.t.bLXdcX), eL.NW.string(eL.t.gPg9fX)],
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
                    textClassName: eB.activityStatusText,
                    hideTooltip: !0
                })
            });
        let d =
            null == t
                ? void 0
                : t.find((e) => {
                      let { type: t } = e;
                      return t === ek.IIU.CUSTOM_STATUS;
                  });
        return null != d
            ? (0, r.jsx)(I.Z, {
                  hoverText: l,
                  forceHover: e,
                  children: (0, r.jsx)(V.Z, {
                      activity: d,
                      emojiClassName: eB.emoji,
                      className: eB.customStatus
                  })
              })
            : null != a && a !== ek.Skl.UNKNOWN && s.isPomelo()
              ? (0, r.jsx)(I.Z, {
                    hoverText: l,
                    forceHover: e,
                    children: eP.ZP.humanizeStatus(a)
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
                          className: eB.panelTitleContainer,
                          children: (0, r.jsx)(ew.Z, { children: eP.ZP.getName(e) })
                      }),
                      (0, r.jsx)('div', {
                          className: eB.panelSubtextContainer,
                          children: (0, r.jsx)(eZ.Z, { children: this.renderStatus() })
                      })
                  ]
              });
    }
    renderAvatarWithPopout() {
        return (0, r.jsx)(
            ez,
            eV(eU({}, this.props), {
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
                              className: a()(eB.container, { [eB.nameplated]: null != u }),
                              onMouseEnter: this.handleMouseEnter,
                              onMouseLeave: this.handleMouseLeave,
                              children: [
                                  this.renderNameZone(),
                                  (0, r.jsxs)(U.Z, {
                                      grow: 0,
                                      className: eB.buttons,
                                      children: [
                                          (0, r.jsx)(eX, {
                                              selfMute: n,
                                              serverMute: s,
                                              suppress: o,
                                              awaitingRemote: i,
                                              tooltipText: m ? eL.NW.string(eL.t['29gnR0']) : void 0,
                                              tooltipColor: m ? f.FGA.GREEN : void 0,
                                              tooltipForceOpen: m || void 0,
                                              onMouseEnter: this.handleMouseEnterMute,
                                              onMouseLeave: this.handleMouseLeaveMute,
                                              onClick: this.handleToggleSelfMute,
                                              onContextMenu: this.handleInputAudioContextMenu
                                          }),
                                          (0, r.jsx)(eJ, {
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
            eM(this, 'copiedTimeout', new d.V7()),
            eM(this, 'copiedDecayTimeout', new d.V7()),
            eM(this, 'speakingWhileMutedTooltipTimeout', new d.V7()),
            eM(this, 'lastSpeakingWhileMutedNotificationTime', void 0),
            eM(this, 'state', {
                hovered: !1,
                copiedStreak: 0,
                shouldShowNametagTooltip: !1,
                shouldShowCopiedFeedback: !1,
                shouldShowSpeakingWhileMutedTooltip: !1,
                hoveringOnMute: !1
            }),
            eM(this, 'handleToggleSelfMute', () => {
                let { serverMute: e, suppress: t } = this.props;
                (0, B.Z)(e, t, ek.jXE.ACCOUNT_PANEL);
            }),
            eM(this, 'handleToggleSelfDeaf', () => {
                let { serverDeaf: e } = this.props;
                (0, L.Z)(e, ek.jXE.ACCOUNT_PANEL);
            }),
            eM(this, 'handleOpenAccountSettings', () => {
                this.handleOpenSettings();
            }),
            eM(this, 'handleOpenSettings', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ek.oAB.ACCOUNT,
                    t = arguments.length > 1 ? arguments[1] : void 0,
                    n = arguments.length > 2 ? arguments[2] : void 0;
                b.Z.open(e, t, n);
            }),
            eM(this, 'handleOpenSettingsContextMenu', (e) => {
                let { currentUser: t } = this.props;
                null != t &&
                    (0, x.jW)(e, async () => {
                        let { default: e } = await n.e('2535').then(n.bind(n, 923422));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                eV(eU({}, n), {
                                    user: t,
                                    premiumSubscription: this.props.premiumSubscription,
                                    webBuildOverride: this.props.webBuildOverride
                                })
                            );
                    });
            }),
            eM(this, 'handleInputAudioContextMenu', (e, t) => {
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
                                      simplified: !0
                                  })
                                : (0, r.jsx)(e, {
                                      onClose: x.Zy,
                                      renderInputDevices: !0,
                                      renderInputModes: !0,
                                      renderInputVolume: !0
                                  })
                        });
                });
            }),
            eM(this, 'handleOutputAudioContextMenu', (e, t) => {
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
                                      simplified: !0
                                  })
                                : (0, r.jsx)(e, {
                                      onClose: x.Zy,
                                      renderOutputDevices: !0,
                                      renderOutputVolume: !0
                                  })
                        });
                });
            }),
            eM(this, 'handleMouseEnter', () => {
                this.setState({ hovered: !0 });
            }),
            eM(this, 'handleMouseLeave', () => {
                this.setState({ hovered: !1 });
            }),
            eM(this, 'handleMouseEnterMute', () => {
                this.setState({
                    hoveringOnMute: !0,
                    shouldShowSpeakingWhileMutedTooltip: !1
                }),
                    this.speakingWhileMutedTooltipTimeout.stop();
            }),
            eM(this, 'handleMouseLeaveMute', () => {
                this.setState({ hoveringOnMute: !1 });
            }),
            eM(this, 'handleCopyTag', () => {
                let { currentUser: e } = this.props,
                    { shouldShowNametagTooltip: t, copiedStreak: n } = this.state;
                if (null == e) return;
                (0, eT.JG)(
                    eP.ZP.getUserTag(e, {
                        decoration: 'never',
                        identifiable: 'always'
                    })
                ),
                    ev.default.track(ek.rMx.TEXT_COPIED, { type: 'User Tag' });
                let r = {
                    shouldShowCopiedFeedback: !0,
                    shouldShowNametagTooltip: !0
                };
                t || (r.copiedStreak = n + 1),
                    this.setState(r, () => {
                        this.copiedTimeout.start(1000, () => this.setState({ shouldShowNametagTooltip: !1 })), this.copiedDecayTimeout.start(2000, () => this.setState({ copiedStreak: 0 }));
                    });
            }),
            eM(this, 'handleOccludedChanged', () => {
                let { occluded: e } = this.props;
                e &&
                    this.setState({
                        shouldShowNametagTooltip: !1,
                        shouldShowSpeakingWhileMutedTooltip: !1
                    });
            }),
            eM(this, 'handleSpeakingWhileMutedChanged', () => {
                let { selfMute: e, serverMute: t, suppress: n, speakingWhileMuted: r, occluded: i } = this.props,
                    { hoveringOnMute: s } = this.state,
                    a = void 0 === this.lastSpeakingWhileMutedNotificationTime || Date.now() - this.lastSpeakingWhileMutedNotificationTime > eF;
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
            eM(this, 'renderSettingsGear', () =>
                (0, r.jsx)(eq, {
                    isEligibleForPomelo: this.props.isEligibleForPomelo,
                    webBuildOverride: this.props.webBuildOverride,
                    onClick: this.handleOpenAccountSettings,
                    onContextMenu: this.handleOpenSettingsContextMenu
                })
            );
    }
}
function eK() {
    var e;
    let t = (0, o.e7)([eC.default], () => eC.default.getCurrentUser()),
        n = (0, o.e7)([ef.default], () => ef.default.getId()),
        {
            activities: s,
            streaming: a,
            status: l
        } = (0, o.cj)([eE.Z], () => {
            let e = eE.Z.getActivities();
            return {
                activities: e,
                streaming:
                    null !=
                    e.find((e) => {
                        let { type: t } = e;
                        return t === ek.IIU.STREAMING;
                    }),
                status: eE.Z.getStatus()
            };
        }),
        d = (0, o.e7)([eh.Z], () => eh.Z.getAnyStreamForUser(n)),
        u = (0, C.Z)({ userId: n }),
        m = eP.ZP.useUserTag(t, { decoration: 'never' }),
        g = (0, o.e7)([ej.Z], () => ej.Z.hidePersonalInformation),
        p = (0, o.e7)([e_.Z, eN.Z], () => {
            let e = e_.Z.getChannelId();
            return null != e ? eN.Z.getChannel(e) : null;
        }),
        { mute: h, selfMute: x, suppress: b } = (0, ed.Z)(p),
        { selfDeaf: _, deaf: S } = (0, ec.Z)(p),
        T = (0, o.e7)([D.C], () => {
            var e;
            return (0, Z.fD)() ? (null === (e = D.C.getCurrentBuildOverride().overrides) || void 0 === e ? void 0 : e.discord_web) : null;
        }),
        I = (0, o.e7)([eO.ZP], () => eO.ZP.getPremiumTypeSubscription()),
        P = (0, o.e7)([eb.Z], () => eb.Z.getSpeakingWhileMuted()),
        R = (0, o.e7)([ex.Z], () => ex.Z.hasLayers()),
        k = (0, f.s9z)(f.JQI) || R || eA.s.isDisallowPopupsSet(),
        W = (0, J.b)(),
        L = (0, o.e7)([z.Z], () => null != z.Z.getAwaitingRemoteSessionInfo()),
        B = (0, et.D)(),
        M = (0, E.u)(),
        U = ey.ZP.canUsePremiumGuildMemberProfile(t),
        V = (null == t ? void 0 : null === (e = t.avatarDecoration) || void 0 === e ? void 0 : e.skuId) === eW.rL,
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
                [r, s] = (0, o.Wu)([eO.ZP], () => [eO.ZP.hasFetchedMostRecentPremiumTypeSubscription(), eO.ZP.getMostRecentPremiumTypeSubscription()]),
                { enabled: a } = $.Z.useExperiment({ location: '08bd40_1' }, { autoTrackExposure: !0 }),
                l = i.useMemo(() => {
                    let e = new Date().getTime();
                    return null != s && (s.status === ek.O0b.ACTIVE || e - s.currentPeriodEnd.getTime() < eH);
                }, [s]);
            return (
                i.useEffect(() => {
                    (async () => {
                        if (!e && null == n && a) {
                            if (!r) {
                                await (0, N.ou)();
                                return;
                            }
                            !l && (t || (await (0, N.l0)()));
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
            children: (0, r.jsx)(eY, {
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
                selfMute: x,
                serverDeaf: S,
                serverMute: h,
                speaking: u,
                speakingWhileMuted: P,
                status: l,
                streaming: a,
                suppress: b,
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
function eq(e) {
    let { webBuildOverride: t, isEligibleForPomelo: n, onClick: i, onContextMenu: s } = e,
        a = f.ewm,
        l = (0, p.i)();
    return (
        (a = null != t ? f.bgT : n ? f.Ncx : l.Component),
        (0, r.jsx)(
            eD.Z,
            eU(
                {
                    tooltipText: null != t ? eL.NW.formatToPlainString(eL.t.Gzh6ZG, { webBuildOverride: t.id }) : eL.NW.string(eL.t.cduTBA),
                    onClick: i,
                    onContextMenu: s,
                    icon: (0, r.jsx)(a, { size: 'refresh_sm' })
                },
                l.events
            )
        )
    );
}
function eX(e) {
    let { selfMute: t, serverMute: n, suppress: s, awaitingRemote: a, tooltipText: o, tooltipColor: c, tooltipForceOpen: d, onMouseEnter: u, onMouseLeave: p, onClick: N, onContextMenu: x } = e,
        b = t || s || n,
        _ = i.useRef(null),
        E = (0, m.O)(b ? 'unmute' : 'mute'),
        j = (0, g.P)(b ? 'unmute' : 'mute'),
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
    i.useEffect(() => () => S(), [b, S]);
    let Z = i.useCallback(
            (e) => {
                x(e, R);
            },
            [x, R]
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
            className: eB.micButtonParent,
            children: [
                (0, r.jsx)(eD.Z, {
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
                        color: b ? f.TVs.colors.STATUS_DANGER : 'currentColor'
                    }),
                    iconForeground: b ? eB.strikethrough : null,
                    onClick: N,
                    onContextMenu: Z,
                    role: 'switch',
                    className: D ? eB.micButtonWithMenu : void 0,
                    'aria-label': eL.NW.string(eL.t['w4m94+']),
                    'aria-checked': b,
                    disabled: a
                }),
                D &&
                    (0, r.jsx)(f.yRy, {
                        position: 'top',
                        align: 'center',
                        animation: f.yRy.Animation.FADE,
                        onRequestClose: L,
                        shouldShow: w,
                        renderPopout: (e) => {
                            let { closePopout: t } = e;
                            return (0, r.jsx)(ep.l, { onSettingsButtonClick: t });
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
                                children: (0, r.jsx)(eg.B, {
                                    onCTA: () => k(!0),
                                    canBeShown: !s,
                                    children: (e, t) =>
                                        (0, r.jsx)(
                                            eD.Z,
                                            eU(
                                                {
                                                    tooltipText: eL.NW.string(eL.t.Hapb4O),
                                                    icon: (0, r.jsx)(l, {
                                                        className: eB.buttonChevronIcon,
                                                        size: 'custom',
                                                        width: 12,
                                                        height: 12,
                                                        color: f.TVs.colors.TEXT_NORMAL
                                                    }),
                                                    role: 'button',
                                                    className: eB.buttonChevron,
                                                    'aria-label': eL.NW.string(eL.t.Hapb4O),
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
function eJ(e) {
    let { selfDeaf: t, serverDeaf: n, awaitingRemote: s, onClick: l, onContextMenu: o } = e,
        c = t || n,
        {
            Component: d,
            play: m,
            events: { onMouseEnter: g, onMouseLeave: p }
        } = (0, u.l)(c ? 'undeafen' : 'deafen'),
        h = n ? f.Vm4 : d,
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
        children: (0, r.jsx)(eD.Z, {
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
            innerClassName: a()({ [eB.redIcon]: n }),
            iconForeground: c ? eB.strikethrough : null,
            role: 'switch',
            'aria-label': eL.NW.string(eL.t.wjcRFR),
            'aria-checked': c,
            disabled: s
        })
    });
}
