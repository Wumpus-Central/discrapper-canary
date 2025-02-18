n.d(t, {
    Z: () => ez,
    m: () => eH
}),
    n(47120),
    n(653041);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    a = n.n(r),
    l = n(374470),
    o = n(442837),
    c = n(704215),
    d = n(846519),
    u = n(400354),
    m = n(652844),
    h = n(747906),
    g = n(789639),
    N = n(930295),
    x = n(481060),
    p = n(355467),
    _ = n(239091),
    E = n(230711),
    C = n(410575),
    f = n(941129),
    T = n(634894),
    S = n(586902),
    I = n(907305),
    b = n(468363),
    v = n(297369),
    j = n(953372),
    A = n(570928),
    O = n(100527),
    R = n(906732),
    P = n(676742),
    Z = n(1585),
    D = n(304761),
    y = n(865427),
    W = n(682901),
    k = n(571250),
    L = n(628581),
    B = n(55311),
    M = n(575175),
    w = n(64220),
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
    ei = n(14357),
    es = n(763296),
    er = n(640806),
    ea = n(184301),
    el = n(52538),
    eo = n(861254),
    ec = n(879815),
    ed = n(294629),
    eu = n(875527),
    em = n(378441),
    eh = n(469887),
    eg = n(306609),
    eN = n(199902),
    ex = n(314897),
    ep = n(592125),
    e_ = n(819640),
    eE = n(131951),
    eC = n(19780),
    ef = n(885110),
    eT = n(246946),
    eS = n(594174),
    eI = n(78839),
    eb = n(626135),
    ev = n(768581),
    ej = n(572004),
    eA = n(70956),
    eO = n(74538),
    eR = n(374023),
    eP = n(51144),
    eZ = n(998502),
    eD = n(870569),
    ey = n(345243),
    eW = n(115530),
    ek = n(981631),
    eL = n(215023),
    eB = n(388032),
    eM = n(226007);
function ew(e, t, n) {
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
let eU = eZ.ZP.getEnableHardwareAcceleration() ? x.Xo$ : x.qEK,
    eV = 2 * eA.Z.Millis.MINUTE,
    eG = 30 * eA.Z.Millis.DAY;
function eF(e) {
    let { speaking: t, streaming: n, currentUser: s, status: r, handleMouseLeave: l, renderNameTag: o } = e,
        c = (0, G.Q3)('RTC Avatar'),
        d = (0, P.Z)(null == s ? void 0 : s.avatarDecoration),
        u = (0, ev.NZ)({
            avatarDecoration: d,
            size: (0, Z.y9)(x.EFr.SIZE_32)
        }),
        m = (0, x.dQu)(x.TVs.modules.guildbar.AVATAR_SIZE);
    return null == s
        ? null
        : (0, i.jsx)(C.Z, {
              object: ek.qAy.AVATAR,
              children: (0, i.jsx)(x.yRy, {
                  clickTrap: !0,
                  renderPopout: (e) => {
                      let { closePopout: t, setPopoutRef: n } = e;
                      return (0, i.jsx)('div', {
                          className: eM.accountProfilePopoutWrapper,
                          children: (0, i.jsx)(K.Z, {
                              currentUser: s,
                              onClose: () => {
                                  l(), null == t || t();
                              },
                              setPopoutRef: n
                          })
                      });
                  },
                  position: 'top',
                  align: 'left',
                  animation: x.yRy.Animation.FADE,
                  spacing: 14,
                  fixed: !0,
                  preload: () =>
                      (0, ea.Z)(s, void 0, {
                          withMutualGuilds: !1,
                          withMutualFriends: !1
                      }),
                  children: (e) =>
                      (0, i.jsxs)(x.P3F, {
                          ...e,
                          'aria-label': eB.NW.string(eB.t['3Uj+2t']),
                          className: eM.avatarWrapper,
                          children: [
                              (0, i.jsx)(eU, {
                                  size: c ? x.EFr['SIZE_'.concat(m)] : x.EFr.SIZE_32,
                                  src: s.getAvatarURL(void 0, c ? m - 4 : 32, !1),
                                  avatarDecoration: u,
                                  'aria-label': s.username,
                                  status: n ? ek.Skl.STREAMING : r,
                                  isSpeaking: t,
                                  className: eM.avatar
                              }),
                              (0, i.jsx)('div', {
                                  className: a()(eM.nameTag, { [eM.canCopy]: ej.wS }),
                                  children: o()
                              })
                          ]
                      })
              })
          });
}
class eH extends s.PureComponent {
    get isCopiedStreakGodlike() {
        let { copiedStreak: e } = this.state;
        return e >= 10;
    }
    componentDidUpdate(e) {
        let { speakingWhileMuted: t, occluded: n } = e,
            { speakingWhileMuted: i, occluded: s } = this.props;
        s !== n && this.handleOccludedChanged(), i !== t && this.handleSpeakingWhileMutedChanged();
    }
    componentWillUnmount() {
        this.copiedTimeout.stop(), this.copiedDecayTimeout.stop(), this.speakingWhileMutedTooltipTimeout.stop();
    }
    renderCopiedSuccess() {
        let { copiedStreak: e } = this.state,
            t = [eB.NW.string(eB.t.MSaeTU), eB.NW.string(eB.t.UmrCw8), eB.NW.string(eB.t.gKE0Ji), eB.NW.string(eB.t['4DSKbm']), eB.NW.string(eB.t['+8ENdX']), eB.NW.string(eB.t.GlWHv7), eB.NW.string(eB.t.hIzxU1), eB.NW.string(eB.t['26uMPD']), eB.NW.string(eB.t.uFs7R0), eB.NW.string(eB.t.bLXdcX), eB.NW.string(eB.t.gPg9fX)],
            n = Math.min(Math.max(0, e - 1), t.length - 1);
        return (0, i.jsx)(x.UkV, {
            isShaking: this.isCopiedStreakGodlike,
            children: t[n]
        });
    }
    renderStatus() {
        let { hovered: e } = this.state,
            { activities: t, activityStatusCleanupEnabled: n, applicationStream: s, currentUser: r, status: a, userTag: l, voiceActivityStatusEnabled: o, voiceChannel: c } = this.props;
        if (null == r) return null;
        if (
            (n || o) &&
            (0, v.Z)({
                activities: t,
                status: a,
                applicationStream: s,
                voiceChannel: o ? c : void 0
            })
        )
            return (0, i.jsx)(A.Z, {
                hoverText: l,
                forceHover: e,
                children: (0, i.jsx)(j.Z, {
                    user: r,
                    activities: t,
                    applicationStream: s,
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
                      return t === ek.IIU.CUSTOM_STATUS;
                  });
        return null != d
            ? (0, i.jsx)(A.Z, {
                  hoverText: l,
                  forceHover: e,
                  children: (0, i.jsx)(V.Z, {
                      activity: d,
                      emojiClassName: eM.emoji,
                      className: eM.customStatus
                  })
              })
            : null != a && a !== ek.Skl.UNKNOWN && r.isPomelo()
              ? (0, i.jsx)(A.Z, {
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
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)('div', {
                          className: eM.panelTitleContainer,
                          children: (0, i.jsx)(eW.Z, { children: eP.ZP.getName(e) })
                      }),
                      (0, i.jsx)('div', {
                          className: eM.panelSubtextContainer,
                          children: (0, i.jsx)(ey.Z, { children: this.renderStatus() })
                      })
                  ]
              });
    }
    renderAvatarWithPopout() {
        return (0, i.jsx)(eF, {
            ...this.props,
            handleMouseLeave: this.handleMouseLeave,
            renderNameTag: () => this.renderNameTag()
        });
    }
    renderNameZone() {
        let { currentUser: e, dismissibleContents: t } = this.props;
        return null == e
            ? null
            : (0, i.jsx)(i.Fragment, {
                  children: (0, i.jsx)(H.ZP, {
                      contentTypes: t.avatar,
                      children: (e) => {
                          let { visibleContent: t, markAsDismissed: n } = e;
                          return t === c.z.PREMIUM_SUBSCRIPTION_APRIL_MARKETING_DECO_TOOLTIP
                              ? (0, i.jsx)(w.Z, {
                                    markAsDismissed: n,
                                    children: () => this.renderAvatarWithPopout()
                                })
                              : this.renderAvatarWithPopout();
                      }
                  })
              });
    }
    render() {
        let { currentUser: e, selfDeaf: t, selfMute: n, awaitingRemote: s, serverMute: r, serverDeaf: l, suppress: o, dismissibleContents: d, nameplate: u } = this.props,
            { shouldShowSpeakingWhileMutedTooltip: m, hovered: h } = this.state;
        return null == e
            ? null
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(X.Z, {
                          nameplate: u,
                          placement: q.QY.Account,
                          hover: h,
                          children: (0, i.jsxs)('div', {
                              className: a()(eM.container, { [eM.nameplated]: null != u }),
                              onMouseEnter: this.handleMouseEnter,
                              onMouseLeave: this.handleMouseLeave,
                              children: [
                                  this.renderNameZone(),
                                  (0, i.jsxs)(U.Z, {
                                      grow: 0,
                                      className: eM.buttons,
                                      children: [
                                          (0, i.jsx)(eK, {
                                              selfMute: n,
                                              serverMute: r,
                                              suppress: o,
                                              awaitingRemote: s,
                                              tooltipText: m ? eB.NW.string(eB.t['29gnR0']) : void 0,
                                              tooltipColor: m ? x.FGA.GREEN : void 0,
                                              tooltipForceOpen: m || void 0,
                                              onMouseEnter: this.handleMouseEnterMute,
                                              onMouseLeave: this.handleMouseLeaveMute,
                                              onClick: this.handleToggleSelfMute,
                                              onContextMenu: this.handleInputAudioContextMenu
                                          }),
                                          (0, i.jsx)(eq, {
                                              selfDeaf: t,
                                              serverDeaf: l,
                                              onClick: this.handleToggleSelfDeaf,
                                              onContextMenu: this.handleOutputAudioContextMenu,
                                              awaitingRemote: s
                                          }),
                                          (0, i.jsx)(H.ZP, {
                                              contentTypes: d.settings,
                                              children: (e) => {
                                                  let { visibleContent: t, markAsDismissed: n } = e;
                                                  switch (t) {
                                                      case c.z.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2:
                                                          return (0, i.jsx)(x.yRy, {
                                                              position: 'top',
                                                              align: 'center',
                                                              shouldShow: !0,
                                                              renderPopout: () => (0, i.jsx)(ee.Z, {}),
                                                              children: this.renderSettingsGear
                                                          });
                                                      case c.z.USER_SAFETY_CONSUMER_EDUCATION_BLOCK:
                                                          return (0, i.jsx)(x.yRy, {
                                                              position: 'top',
                                                              align: 'center',
                                                              shouldShow: !0,
                                                              renderPopout: () => (0, i.jsx)(en.Z, { markAsDismissed: n }),
                                                              children: this.renderSettingsGear
                                                          });
                                                      case c.z.USER_SAFETY_CONSUMER_EDUCATION_MUTE:
                                                          return (0, i.jsx)(x.yRy, {
                                                              position: 'top',
                                                              align: 'center',
                                                              shouldShow: !0,
                                                              renderPopout: () => (0, i.jsx)(ei.Z, { markAsDismissed: n }),
                                                              children: this.renderSettingsGear
                                                          });
                                                      case c.z.SOUNDBOARD_VOLUME_EDUCATION:
                                                          return (0, i.jsx)(x.yRy, {
                                                              position: 'top',
                                                              align: 'center',
                                                              shouldShow: !0,
                                                              renderPopout: () => (0, i.jsx)(er.Z, { markAsDismissed: n }),
                                                              children: this.renderSettingsGear
                                                          });
                                                      case c.z.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK:
                                                          return (0, i.jsx)(x.yRy, {
                                                              position: 'top',
                                                              align: 'center',
                                                              shouldShow: !0,
                                                              renderPopout: () => (0, i.jsx)(el.Z, {}),
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
                      (0, i.jsx)(Y.Z, {})
                  ]
              });
    }
    constructor(...e) {
        super(...e),
            ew(this, 'copiedTimeout', new d.V7()),
            ew(this, 'copiedDecayTimeout', new d.V7()),
            ew(this, 'speakingWhileMutedTooltipTimeout', new d.V7()),
            ew(this, 'lastSpeakingWhileMutedNotificationTime', void 0),
            ew(this, 'state', {
                hovered: !1,
                copiedStreak: 0,
                shouldShowNametagTooltip: !1,
                shouldShowCopiedFeedback: !1,
                shouldShowSpeakingWhileMutedTooltip: !1,
                hoveringOnMute: !1
            }),
            ew(this, 'handleToggleSelfMute', () => {
                let { serverMute: e, suppress: t } = this.props;
                (0, M.Z)(e, t, ek.jXE.ACCOUNT_PANEL);
            }),
            ew(this, 'handleToggleSelfDeaf', () => {
                let { serverDeaf: e } = this.props;
                (0, B.Z)(e, ek.jXE.ACCOUNT_PANEL);
            }),
            ew(this, 'handleOpenAccountSettings', () => {
                this.handleOpenSettings();
            }),
            ew(this, 'handleOpenSettings', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ek.oAB.ACCOUNT,
                    t = arguments.length > 1 ? arguments[1] : void 0,
                    n = arguments.length > 2 ? arguments[2] : void 0;
                E.Z.open(e, t, n);
            }),
            ew(this, 'handleOpenSettingsContextMenu', (e) => {
                let { currentUser: t } = this.props;
                null != t &&
                    (0, _.jW)(e, async () => {
                        let { default: e } = await n.e('2535').then(n.bind(n, 923422));
                        return (n) =>
                            (0, i.jsx)(e, {
                                ...n,
                                user: t,
                                premiumSubscription: this.props.premiumSubscription,
                                webBuildOverride: this.props.webBuildOverride
                            });
                    });
            }),
            ew(this, 'handleInputAudioContextMenu', (e, t) => {
                (0, _.jW)(e, async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 659580));
                    return () =>
                        (0, i.jsx)(R.Gt, {
                            value: t,
                            children: this.props.simplifiedCallSettingsEnabled
                                ? (0, i.jsx)(e, {
                                      onClose: _.Zy,
                                      renderInputDevices: !0,
                                      renderInputVolume: !0,
                                      simplified: !0
                                  })
                                : (0, i.jsx)(e, {
                                      onClose: _.Zy,
                                      renderInputDevices: !0,
                                      renderInputModes: !0,
                                      renderInputVolume: !0
                                  })
                        });
                });
            }),
            ew(this, 'handleOutputAudioContextMenu', (e, t) => {
                (0, _.jW)(e, async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 659580));
                    return () =>
                        (0, i.jsx)(R.Gt, {
                            value: t,
                            children: this.props.simplifiedCallSettingsEnabled
                                ? (0, i.jsx)(e, {
                                      onClose: _.Zy,
                                      renderOutputDevices: !0,
                                      renderOutputVolume: !0,
                                      simplified: !0
                                  })
                                : (0, i.jsx)(e, {
                                      onClose: _.Zy,
                                      renderOutputDevices: !0,
                                      renderOutputVolume: !0
                                  })
                        });
                });
            }),
            ew(this, 'handleMouseEnter', () => {
                this.setState({ hovered: !0 });
            }),
            ew(this, 'handleMouseLeave', () => {
                this.setState({ hovered: !1 });
            }),
            ew(this, 'handleMouseEnterMute', () => {
                this.setState({
                    hoveringOnMute: !0,
                    shouldShowSpeakingWhileMutedTooltip: !1
                }),
                    this.speakingWhileMutedTooltipTimeout.stop();
            }),
            ew(this, 'handleMouseLeaveMute', () => {
                this.setState({ hoveringOnMute: !1 });
            }),
            ew(this, 'handleCopyTag', () => {
                let { currentUser: e } = this.props,
                    { shouldShowNametagTooltip: t, copiedStreak: n } = this.state;
                if (null == e) return;
                (0, ej.JG)(
                    eP.ZP.getUserTag(e, {
                        decoration: 'never',
                        identifiable: 'always'
                    })
                ),
                    eb.default.track(ek.rMx.TEXT_COPIED, { type: 'User Tag' });
                let i = {
                    shouldShowCopiedFeedback: !0,
                    shouldShowNametagTooltip: !0
                };
                t || (i.copiedStreak = n + 1),
                    this.setState(i, () => {
                        this.copiedTimeout.start(1000, () => this.setState({ shouldShowNametagTooltip: !1 })), this.copiedDecayTimeout.start(2000, () => this.setState({ copiedStreak: 0 }));
                    });
            }),
            ew(this, 'handleOccludedChanged', () => {
                let { occluded: e } = this.props;
                e &&
                    this.setState({
                        shouldShowNametagTooltip: !1,
                        shouldShowSpeakingWhileMutedTooltip: !1
                    });
            }),
            ew(this, 'handleSpeakingWhileMutedChanged', () => {
                let { selfMute: e, serverMute: t, suppress: n, speakingWhileMuted: i, occluded: s } = this.props,
                    { hoveringOnMute: r } = this.state,
                    a = void 0 === this.lastSpeakingWhileMutedNotificationTime || Date.now() - this.lastSpeakingWhileMutedNotificationTime > eV;
                i
                    ? r ||
                      !e ||
                      t ||
                      n ||
                      s ||
                      !a ||
                      this.setState({ shouldShowSpeakingWhileMutedTooltip: !0 }, () => {
                          (this.lastSpeakingWhileMutedNotificationTime = Date.now()), this.speakingWhileMutedTooltipTimeout.start(2000, () => this.setState({ shouldShowSpeakingWhileMutedTooltip: !1 }));
                      })
                    : (this.setState({ shouldShowSpeakingWhileMutedTooltip: !1 }), this.speakingWhileMutedTooltipTimeout.stop());
            }),
            ew(this, 'renderSettingsGear', () =>
                (0, i.jsx)(eY, {
                    isEligibleForPomelo: this.props.isEligibleForPomelo,
                    webBuildOverride: this.props.webBuildOverride,
                    onClick: this.handleOpenAccountSettings,
                    onContextMenu: this.handleOpenSettingsContextMenu
                })
            );
    }
}
function ez() {
    var e;
    let t = (0, o.e7)([eS.default], () => eS.default.getCurrentUser()),
        n = (0, o.e7)([ex.default], () => ex.default.getId()),
        {
            activities: r,
            streaming: a,
            status: l
        } = (0, o.cj)([ef.Z], () => {
            let e = ef.Z.getActivities();
            return {
                activities: e,
                streaming:
                    null !=
                    e.find((e) => {
                        let { type: t } = e;
                        return t === ek.IIU.STREAMING;
                    }),
                status: ef.Z.getStatus()
            };
        }),
        d = (0, o.e7)([eN.Z], () => eN.Z.getAnyStreamForUser(n)),
        u = (0, S.Z)({ userId: n }),
        m = eP.ZP.useUserTag(t, { decoration: 'never' }),
        h = (0, o.e7)([eT.Z], () => eT.Z.hidePersonalInformation),
        g = (0, o.e7)([eC.Z, ep.Z], () => {
            let e = eC.Z.getChannelId();
            return null != e ? ep.Z.getChannel(e) : null;
        }),
        { mute: N, selfMute: _, suppress: E } = (0, ed.Z)(g),
        { selfDeaf: C, deaf: v } = (0, ec.Z)(g),
        j = (0, o.e7)([D.C], () => {
            var e;
            return (0, y.fD)() ? (null === (e = D.C.getCurrentBuildOverride().overrides) || void 0 === e ? void 0 : e.discord_web) : null;
        }),
        A = (0, o.e7)([eI.ZP], () => eI.ZP.getPremiumTypeSubscription()),
        P = (0, o.e7)([eE.Z], () => eE.Z.getSpeakingWhileMuted()),
        Z = (0, o.e7)([e_.Z], () => e_.Z.hasLayers()),
        k = (0, x.s9z)(x.JQI) || Z || eR.s.isDisallowPopupsSet(),
        L = (0, J.b)(),
        B = (0, o.e7)([z.Z], () => null != z.Z.getAwaitingRemoteSessionInfo()),
        M = (0, et.D)(),
        w = (0, f.u)(),
        U = eO.ZP.canUsePremiumGuildMemberProfile(t),
        V = (null == t ? void 0 : null === (e = t.avatarDecoration) || void 0 === e ? void 0 : e.skuId) === eL.rL,
        { activityStatusCleanupEnabled: G } = (0, I.w)({ location: 'Account' }),
        { voiceActivityStatusEnabled: H } = (0, b.U)({ location: 'Account' }),
        { enabled: Y } = (0, W.Z)({ location: 'Account' }),
        K = 'account';
    (0, T.j)({
        location: K + ' auto on',
        autoTrackExposure: !0
    }),
        (0, T.j)({
            location: K + ' auto off',
            autoTrackExposure: !1
        });
    let q = (0, o.e7)([es.Z], () => es.Z.hasHadOtherUserPlaySoundInSession()),
        X = (function () {
            let e = (0, F.wE)(c.z.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2),
                [t, n] = (0, o.Wu)([Q.Z], () => [Q.Z.hasFetchedRelevance, Q.Z.profileThemesRelevanceExceeded]),
                [i, r] = (0, o.Wu)([eI.ZP], () => [eI.ZP.hasFetchedMostRecentPremiumTypeSubscription(), eI.ZP.getMostRecentPremiumTypeSubscription()]),
                { enabled: a } = $.Z.useExperiment({ location: '08bd40_1' }, { autoTrackExposure: !0 }),
                l = s.useMemo(() => {
                    let e = new Date().getTime();
                    return null != r && (r.status === ek.O0b.ACTIVE || e - r.currentPeriodEnd.getTime() < eG);
                }, [r]);
            return (
                s.useEffect(() => {
                    (async () => {
                        if (!e && null == n && a) {
                            if (!i) {
                                await (0, p.ou)();
                                return;
                            }
                            !l && (t || (await (0, p.l0)()));
                        }
                    })();
                }, [a, n, e, i, t, l]),
                !e && !!a && !l && null != n && n
            );
        })(),
        { analyticsLocations: ee } = (0, R.ZP)(O.Z.ACCOUNT),
        en = {
            avatar: [],
            settings: []
        };
    return (
        !k && (X && en.settings.push(c.z.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2), M && (1 === w ? en.settings.push(c.z.USER_SAFETY_CONSUMER_EDUCATION_MUTE) : en.settings.push(c.z.USER_SAFETY_CONSUMER_EDUCATION_BLOCK)), q && en.settings.push(c.z.SOUNDBOARD_VOLUME_EDUCATION), U && en.settings.push(c.z.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK), V && en.avatar.push(c.z.PREMIUM_SUBSCRIPTION_APRIL_MARKETING_DECO_TOOLTIP)),
        (0, i.jsx)(R.Gt, {
            value: ee,
            children: (0, i.jsx)(eH, {
                currentUser: t,
                activities: r,
                applicationStream: d,
                voiceChannel: g,
                dismissibleContents: en,
                userTag: m,
                hidePrivateData: h,
                occluded: k,
                premiumSubscription: A,
                selfDeaf: C,
                selfMute: _,
                serverDeaf: v,
                serverMute: N,
                speaking: u,
                speakingWhileMuted: P,
                status: l,
                streaming: a,
                suppress: E,
                webBuildOverride: j,
                awaitingRemote: B,
                isEligibleForPomelo: L,
                simplifiedCallSettingsEnabled: Y,
                activityStatusCleanupEnabled: G,
                voiceActivityStatusEnabled: H
            })
        })
    );
}
function eY(e) {
    let { webBuildOverride: t, isEligibleForPomelo: n, onClick: s, onContextMenu: r } = e,
        a = x.ewm,
        l = (0, g.i)();
    return (
        (a = null != t ? x.bgT : n ? x.Ncx : l.Component),
        (0, i.jsx)(eD.Z, {
            tooltipText: null != t ? eB.NW.formatToPlainString(eB.t.Gzh6ZG, { webBuildOverride: t.id }) : eB.NW.string(eB.t.cduTBA),
            onClick: s,
            onContextMenu: r,
            icon: (0, i.jsx)(a, { size: 'refresh_sm' }),
            ...l.events
        })
    );
}
function eK(e) {
    let { selfMute: t, serverMute: n, suppress: r, awaitingRemote: a, tooltipText: o, tooltipColor: c, tooltipForceOpen: d, onMouseEnter: u, onMouseLeave: g, onClick: p, onContextMenu: _ } = e,
        E = t || r || n,
        C = s.useRef(null),
        f = (0, m.O)(E ? 'unmute' : 'mute'),
        T = (0, h.P)(E ? 'unmute' : 'mute'),
        { activeVoice: S } = (0, em.o)(),
        { Component: I, events: b, play: v } = null != S ? T : f,
        j = n || r ? x.v0G : I,
        { mode: A } = (0, eo.ZP)({ location: 'RTC Microphone Button' }),
        P = null != o ? o : (0, L.Z)(t, n, r, a, A === eo.BK.GroupedButtonsRedMic),
        { analyticsLocations: Z } = (0, R.ZP)(O.Z.AUDIO_INPUT_BUTTON),
        D = (0, eu.Hu)({
            location: O.Z.AUDIO_INPUT_BUTTON,
            autoTrackExposure: !0
        });
    s.useEffect(() => () => v(), [E, v]);
    let y = s.useCallback(
            (e) => {
                _(e, Z);
            },
            [_, Z]
        ),
        [W, k] = s.useState(!1),
        B = s.useCallback((e) => {
            var t;
            if ((0, l.k)(null == e ? void 0 : e.target, Node) && (null === (t = C.current) || void 0 === t ? void 0 : t.contains(e.target))) return N.F;
            k(!1);
        }, []);
    return (0, i.jsx)(R.Gt, {
        value: Z,
        children: (0, i.jsxs)('div', {
            ref: C,
            className: eM.micButtonParent,
            children: [
                (0, i.jsx)(eD.Z, {
                    tooltipText: P,
                    tooltipColor: c,
                    tooltipForceOpen: d,
                    onMouseEnter: () => {
                        u(), b.onMouseEnter();
                    },
                    onMouseLeave: () => {
                        g(), b.onMouseLeave();
                    },
                    icon: (0, i.jsx)(j, {
                        size: 'custom',
                        width: 20,
                        height: 20,
                        color: E ? x.TVs.colors.STATUS_DANGER : 'currentColor'
                    }),
                    iconForeground: E ? eM.strikethrough : null,
                    onClick: p,
                    onContextMenu: y,
                    role: 'switch',
                    className: D ? eM.micButtonWithMenu : void 0,
                    'aria-label': eB.NW.string(eB.t['w4m94+']),
                    'aria-checked': E,
                    disabled: a
                }),
                D &&
                    (0, i.jsx)(x.yRy, {
                        position: 'top',
                        align: 'center',
                        animation: x.yRy.Animation.FADE,
                        onRequestClose: B,
                        shouldShow: W,
                        renderPopout: (e) => {
                            let { closePopout: t } = e;
                            return (0, i.jsx)(eg.l, { onSettingsButtonClick: t });
                        },
                        children: (e, t) => {
                            let { onClick: n, ...s } = e,
                                { isShown: r } = t,
                                l = r ? x.u04 : x.CJ0;
                            return (0, i.jsx)('div', {
                                children: (0, i.jsx)(eh.B, {
                                    onCTA: () => k(!0),
                                    canBeShown: !r,
                                    children: (e, t) =>
                                        (0, i.jsx)(eD.Z, {
                                            tooltipText: eB.NW.string(eB.t.Hapb4O),
                                            icon: (0, i.jsx)(l, {
                                                className: eM.buttonChevronIcon,
                                                size: 'custom',
                                                width: 12,
                                                height: 12,
                                                color: x.TVs.colors.TEXT_NORMAL
                                            }),
                                            role: 'button',
                                            className: eM.buttonChevron,
                                            'aria-label': eB.NW.string(eB.t.Hapb4O),
                                            disabled: a,
                                            onClick: (e) => {
                                                null == t || t(), n(e), k(!W);
                                            },
                                            ...s
                                        })
                                })
                            });
                        }
                    })
            ]
        })
    });
}
function eq(e) {
    let { selfDeaf: t, serverDeaf: n, awaitingRemote: r, onClick: l, onContextMenu: o } = e,
        c = t || n,
        {
            Component: d,
            play: m,
            events: { onMouseEnter: h, onMouseLeave: g }
        } = (0, u.l)(c ? 'undeafen' : 'deafen'),
        N = n ? x.Vm4 : d,
        { analyticsLocations: p } = (0, R.ZP)(O.Z.AUDIO_OUTPUT_BUTTON);
    s.useEffect(() => () => m(), [c, m]);
    let _ = s.useCallback(
        (e) => {
            o(e, p);
        },
        [o, p]
    );
    return (0, i.jsx)(R.Gt, {
        value: p,
        children: (0, i.jsx)(eD.Z, {
            tooltipText: (0, k.Z)(t, n, r),
            onMouseEnter: h,
            onMouseLeave: g,
            icon: (0, i.jsx)(N, {
                size: 'custom',
                width: 20,
                height: 20,
                color: c ? x.TVs.colors.STATUS_DANGER : 'currentColor'
            }),
            onClick: l,
            onContextMenu: _,
            innerClassName: a()({ [eM.redIcon]: n }),
            iconForeground: c ? eM.strikethrough : null,
            role: 'switch',
            'aria-label': eB.NW.string(eB.t.wjcRFR),
            'aria-checked': c,
            disabled: r
        })
    });
}
