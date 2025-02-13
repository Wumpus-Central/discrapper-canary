n.d(t, { Z: () => eF }), n(47120), n(653041);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(374470),
    o = n(442837),
    c = n(704215),
    d = n(846519),
    u = n(400354),
    h = n(652844),
    m = n(747906),
    p = n(789639),
    g = n(930295),
    _ = n(481060),
    f = n(355467),
    E = n(239091),
    I = n(230711),
    C = n(410575),
    N = n(941129),
    v = n(634894),
    T = n(586902),
    S = n(907305),
    A = n(468363),
    b = n(297369),
    Z = n(953372),
    x = n(570928),
    L = n(100527),
    y = n(906732),
    O = n(676742),
    P = n(1585),
    R = n(304761),
    j = n(865427),
    D = n(682901),
    w = n(571250),
    k = n(628581),
    M = n(55311),
    U = n(575175),
    G = n(64220),
    B = n(600164),
    V = n(427217),
    H = n(540059),
    F = n(605236),
    z = n(243778),
    W = n(258609),
    Y = n(427347),
    K = n(331541),
    q = n(332473),
    X = n(240504),
    Q = n(637906),
    J = n(39370),
    $ = n(19199),
    ee = n(866483),
    et = n(14357),
    en = n(763296),
    ei = n(640806),
    el = n(184301),
    er = n(52538),
    ea = n(861254),
    es = n(879815),
    eo = n(294629),
    ec = n(875527),
    ed = n(378441),
    eu = n(469887),
    eh = n(306609),
    em = n(199902),
    ep = n(314897),
    eg = n(592125),
    e_ = n(819640),
    ef = n(131951),
    eE = n(19780),
    eI = n(885110),
    eC = n(246946),
    eN = n(594174),
    ev = n(78839),
    eT = n(626135),
    eS = n(768581),
    eA = n(572004),
    eb = n(70956),
    eZ = n(74538),
    ex = n(374023),
    eL = n(51144),
    ey = n(998502),
    eO = n(870569),
    eP = n(345243),
    eR = n(115530),
    ej = n(981631),
    eD = n(215023),
    ew = n(388032),
    ek = n(274692);
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
let eU = ey.ZP.getEnableHardwareAcceleration() ? _.Xo$ : _.qEK,
    eG = 2 * eb.Z.Millis.MINUTE,
    eB = 30 * eb.Z.Millis.DAY;
function eV(e) {
    let { speaking: t, streaming: n, currentUser: l, status: r, handleMouseLeave: s, renderNameTag: o } = e,
        c = (0, H.Q3)('RTC Avatar'),
        d = (0, O.Z)(null == l ? void 0 : l.avatarDecoration),
        u = (0, eS.NZ)({
            avatarDecoration: d,
            size: (0, P.y9)(_.EFr.SIZE_32)
        }),
        h = (0, _.dQu)(_.TVs.modules.guildbar.AVATAR_SIZE);
    return null == l
        ? null
        : (0, i.jsx)(C.Z, {
              object: ej.qAy.AVATAR,
              children: (0, i.jsx)(_.yRy, {
                  clickTrap: !0,
                  renderPopout: (e) => {
                      let { closePopout: t, setPopoutRef: n } = e;
                      return (0, i.jsx)('div', {
                          className: ek.accountProfilePopoutWrapper,
                          children: (0, i.jsx)(K.Z, {
                              currentUser: l,
                              onClose: () => {
                                  s(), null == t || t();
                              },
                              setPopoutRef: n
                          })
                      });
                  },
                  position: 'top',
                  align: 'left',
                  animation: _.yRy.Animation.FADE,
                  spacing: 14,
                  fixed: !0,
                  preload: () =>
                      (0, el.Z)(l, void 0, {
                          withMutualGuilds: !1,
                          withMutualFriends: !1
                      }),
                  children: (e) =>
                      (0, i.jsxs)(_.P3F, {
                          ...e,
                          'aria-label': ew.intl.string(ew.t['3Uj+2t']),
                          className: ek.avatarWrapper,
                          children: [
                              (0, i.jsx)(eU, {
                                  size: c ? _.EFr['SIZE_'.concat(h)] : _.EFr.SIZE_32,
                                  src: l.getAvatarURL(void 0, c ? h - 4 : 32, !1),
                                  avatarDecoration: u,
                                  'aria-label': l.username,
                                  status: n ? ej.Skl.STREAMING : r,
                                  isSpeaking: t,
                                  className: ek.avatar
                              }),
                              (0, i.jsx)('div', {
                                  className: a()(ek.nameTag, { [ek.canCopy]: eA.wS }),
                                  children: o()
                              })
                          ]
                      })
              })
          });
}
class eH extends l.PureComponent {
    get isCopiedStreakGodlike() {
        let { copiedStreak: e } = this.state;
        return e >= 10;
    }
    componentDidUpdate(e) {
        let { speakingWhileMuted: t, occluded: n } = e,
            { speakingWhileMuted: i, occluded: l } = this.props;
        l !== n && this.handleOccludedChanged(), i !== t && this.handleSpeakingWhileMutedChanged();
    }
    componentWillUnmount() {
        this.copiedTimeout.stop(), this.copiedDecayTimeout.stop(), this.speakingWhileMutedTooltipTimeout.stop();
    }
    renderCopiedSuccess() {
        let { copiedStreak: e } = this.state,
            t = [ew.intl.string(ew.t.MSaeTU), ew.intl.string(ew.t.UmrCw8), ew.intl.string(ew.t.gKE0Ji), ew.intl.string(ew.t['4DSKbm']), ew.intl.string(ew.t['+8ENdX']), ew.intl.string(ew.t.GlWHv7), ew.intl.string(ew.t.hIzxU1), ew.intl.string(ew.t['26uMPD']), ew.intl.string(ew.t.uFs7R0), ew.intl.string(ew.t.bLXdcX), ew.intl.string(ew.t.gPg9fX)],
            n = Math.min(Math.max(0, e - 1), t.length - 1);
        return (0, i.jsx)(_.UkV, {
            isShaking: this.isCopiedStreakGodlike,
            children: t[n]
        });
    }
    renderStatus() {
        let { hovered: e } = this.state,
            { activities: t, activityStatusCleanupEnabled: n, applicationStream: l, currentUser: r, status: a, userTag: s, voiceActivityStatusEnabled: o, voiceChannel: c } = this.props;
        if (null == r) return null;
        if (
            (n || o) &&
            (0, b.Z)({
                activities: t,
                status: a,
                applicationStream: l,
                voiceChannel: o ? c : void 0
            })
        )
            return (0, i.jsx)(x.Z, {
                hoverText: s,
                forceHover: e,
                children: (0, i.jsx)(Z.Z, {
                    user: r,
                    activities: t,
                    applicationStream: l,
                    voiceChannel: o ? c : void 0,
                    textClassName: ek.activityStatusText,
                    hideTooltip: !0
                })
            });
        let d =
            null == t
                ? void 0
                : t.find((e) => {
                      let { type: t } = e;
                      return t === ej.IIU.CUSTOM_STATUS;
                  });
        return null != d
            ? (0, i.jsx)(x.Z, {
                  hoverText: s,
                  forceHover: e,
                  children: (0, i.jsx)(V.Z, {
                      activity: d,
                      emojiClassName: ek.emoji,
                      className: ek.customStatus
                  })
              })
            : null != a && a !== ej.Skl.UNKNOWN && r.isPomelo()
              ? (0, i.jsx)(x.Z, {
                    hoverText: s,
                    forceHover: e,
                    children: eL.ZP.humanizeStatus(a)
                })
              : s;
    }
    renderNameTag() {
        let { currentUser: e } = this.props;
        return null == e
            ? null
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)('div', {
                          className: ek.panelTitleContainer,
                          children: (0, i.jsx)(eR.Z, { children: eL.ZP.getName(e) })
                      }),
                      (0, i.jsx)('div', {
                          className: ek.panelSubtextContainer,
                          children: (0, i.jsx)(eP.Z, { children: this.renderStatus() })
                      })
                  ]
              });
    }
    renderAvatarWithPopout() {
        return (0, i.jsx)(eV, {
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
                  children: (0, i.jsx)(z.ZP, {
                      contentTypes: t.avatar,
                      children: (e) => {
                          let { visibleContent: t, markAsDismissed: n } = e;
                          return t === c.z.PREMIUM_SUBSCRIPTION_APRIL_MARKETING_DECO_TOOLTIP
                              ? (0, i.jsx)(G.Z, {
                                    markAsDismissed: n,
                                    children: () => this.renderAvatarWithPopout()
                                })
                              : this.renderAvatarWithPopout();
                      }
                  })
              });
    }
    render() {
        let { currentUser: e, selfDeaf: t, selfMute: n, awaitingRemote: l, serverMute: r, serverDeaf: a, suppress: s, dismissibleContents: o } = this.props,
            { shouldShowSpeakingWhileMutedTooltip: d } = this.state;
        return null == e
            ? null
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsxs)('div', {
                          className: ek.container,
                          onMouseEnter: this.handleMouseEnter,
                          onMouseLeave: this.handleMouseLeave,
                          children: [
                              this.renderNameZone(),
                              (0, i.jsxs)(B.Z, {
                                  grow: 0,
                                  className: ek.buttons,
                                  children: [
                                      (0, i.jsx)(eW, {
                                          selfMute: n,
                                          serverMute: r,
                                          suppress: s,
                                          awaitingRemote: l,
                                          tooltipText: d ? ew.intl.string(ew.t['29gnR0']) : void 0,
                                          tooltipColor: d ? _.FGA.GREEN : void 0,
                                          tooltipForceOpen: d || void 0,
                                          onMouseEnter: this.handleMouseEnterMute,
                                          onMouseLeave: this.handleMouseLeaveMute,
                                          onClick: this.handleToggleSelfMute,
                                          onContextMenu: this.handleInputAudioContextMenu
                                      }),
                                      (0, i.jsx)(eY, {
                                          selfDeaf: t,
                                          serverDeaf: a,
                                          onClick: this.handleToggleSelfDeaf,
                                          onContextMenu: this.handleOutputAudioContextMenu,
                                          awaitingRemote: l
                                      }),
                                      (0, i.jsx)(z.ZP, {
                                          contentTypes: o.settings,
                                          children: (e) => {
                                              let { visibleContent: t, markAsDismissed: n } = e;
                                              switch (t) {
                                                  case c.z.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2:
                                                      return (0, i.jsx)(_.yRy, {
                                                          position: 'top',
                                                          align: 'center',
                                                          shouldShow: !0,
                                                          renderPopout: () => (0, i.jsx)(J.Z, {}),
                                                          children: this.renderSettingsGear
                                                      });
                                                  case c.z.USER_SAFETY_CONSUMER_EDUCATION_BLOCK:
                                                      return (0, i.jsx)(_.yRy, {
                                                          position: 'top',
                                                          align: 'center',
                                                          shouldShow: !0,
                                                          renderPopout: () => (0, i.jsx)(ee.Z, { markAsDismissed: n }),
                                                          children: this.renderSettingsGear
                                                      });
                                                  case c.z.USER_SAFETY_CONSUMER_EDUCATION_MUTE:
                                                      return (0, i.jsx)(_.yRy, {
                                                          position: 'top',
                                                          align: 'center',
                                                          shouldShow: !0,
                                                          renderPopout: () => (0, i.jsx)(et.Z, { markAsDismissed: n }),
                                                          children: this.renderSettingsGear
                                                      });
                                                  case c.z.SOUNDBOARD_VOLUME_EDUCATION:
                                                      return (0, i.jsx)(_.yRy, {
                                                          position: 'top',
                                                          align: 'center',
                                                          shouldShow: !0,
                                                          renderPopout: () => (0, i.jsx)(ei.Z, { markAsDismissed: n }),
                                                          children: this.renderSettingsGear
                                                      });
                                                  case c.z.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK:
                                                      return (0, i.jsx)(_.yRy, {
                                                          position: 'top',
                                                          align: 'center',
                                                          shouldShow: !0,
                                                          renderPopout: () => (0, i.jsx)(er.Z, {}),
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
                      }),
                      (0, i.jsx)(Y.Z, {})
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
                (0, U.Z)(e, t, ej.jXE.ACCOUNT_PANEL);
            }),
            eM(this, 'handleToggleSelfDeaf', () => {
                let { serverDeaf: e } = this.props;
                (0, M.Z)(e, ej.jXE.ACCOUNT_PANEL);
            }),
            eM(this, 'handleOpenAccountSettings', () => {
                this.handleOpenSettings();
            }),
            eM(this, 'handleOpenSettings', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ej.oAB.ACCOUNT,
                    t = arguments.length > 1 ? arguments[1] : void 0,
                    n = arguments.length > 2 ? arguments[2] : void 0;
                I.Z.open(e, t, n);
            }),
            eM(this, 'handleOpenSettingsContextMenu', (e) => {
                let { currentUser: t } = this.props;
                null != t &&
                    (0, E.jW)(e, async () => {
                        let { default: e } = await Promise.all([n.e('23217'), n.e('33053'), n.e('8016'), n.e('17298'), n.e('76540'), n.e('17938'), n.e('81966'), n.e('22646'), n.e('3940'), n.e('48923'), n.e('30419'), n.e('18824'), n.e('72992'), n.e('8007')]).then(n.bind(n, 923422));
                        return (n) =>
                            (0, i.jsx)(e, {
                                ...n,
                                user: t,
                                premiumSubscription: this.props.premiumSubscription,
                                webBuildOverride: this.props.webBuildOverride
                            });
                    });
            }),
            eM(this, 'handleInputAudioContextMenu', (e, t) => {
                (0, E.jW)(e, async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 659580));
                    return () =>
                        (0, i.jsx)(y.Gt, {
                            value: t,
                            children: this.props.simplifiedCallSettingsEnabled
                                ? (0, i.jsx)(e, {
                                      onClose: E.Zy,
                                      renderInputDevices: !0,
                                      renderInputVolume: !0,
                                      simplified: !0
                                  })
                                : (0, i.jsx)(e, {
                                      onClose: E.Zy,
                                      renderInputDevices: !0,
                                      renderInputModes: !0,
                                      renderInputVolume: !0
                                  })
                        });
                });
            }),
            eM(this, 'handleOutputAudioContextMenu', (e, t) => {
                (0, E.jW)(e, async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 659580));
                    return () =>
                        (0, i.jsx)(y.Gt, {
                            value: t,
                            children: this.props.simplifiedCallSettingsEnabled
                                ? (0, i.jsx)(e, {
                                      onClose: E.Zy,
                                      renderOutputDevices: !0,
                                      renderOutputVolume: !0,
                                      simplified: !0
                                  })
                                : (0, i.jsx)(e, {
                                      onClose: E.Zy,
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
                (0, eA.JG)(
                    eL.ZP.getUserTag(e, {
                        decoration: 'never',
                        identifiable: 'always'
                    })
                ),
                    eT.default.track(ej.rMx.TEXT_COPIED, { type: 'User Tag' });
                let i = {
                    shouldShowCopiedFeedback: !0,
                    shouldShowNametagTooltip: !0
                };
                t || (i.copiedStreak = n + 1),
                    this.setState(i, () => {
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
                let { selfMute: e, serverMute: t, suppress: n, speakingWhileMuted: i, occluded: l } = this.props,
                    { hoveringOnMute: r } = this.state,
                    a = void 0 === this.lastSpeakingWhileMutedNotificationTime || Date.now() - this.lastSpeakingWhileMutedNotificationTime > eG;
                i
                    ? r ||
                      !e ||
                      t ||
                      n ||
                      l ||
                      !a ||
                      this.setState({ shouldShowSpeakingWhileMutedTooltip: !0 }, () => {
                          (this.lastSpeakingWhileMutedNotificationTime = Date.now()), this.speakingWhileMutedTooltipTimeout.start(2000, () => this.setState({ shouldShowSpeakingWhileMutedTooltip: !1 }));
                      })
                    : (this.setState({ shouldShowSpeakingWhileMutedTooltip: !1 }), this.speakingWhileMutedTooltipTimeout.stop());
            }),
            eM(this, 'renderSettingsGear', () =>
                (0, i.jsx)(ez, {
                    isEligibleForPomelo: this.props.isEligibleForPomelo,
                    webBuildOverride: this.props.webBuildOverride,
                    onClick: this.handleOpenAccountSettings,
                    onContextMenu: this.handleOpenSettingsContextMenu
                })
            );
    }
}
function eF() {
    var e;
    let t = (0, o.e7)([eN.default], () => eN.default.getCurrentUser()),
        n = (0, o.e7)([ep.default], () => ep.default.getId()),
        {
            activities: r,
            streaming: a,
            status: s
        } = (0, o.cj)([eI.Z], () => {
            let e = eI.Z.getActivities();
            return {
                activities: e,
                streaming:
                    null !=
                    e.find((e) => {
                        let { type: t } = e;
                        return t === ej.IIU.STREAMING;
                    }),
                status: eI.Z.getStatus()
            };
        }),
        d = (0, o.e7)([em.Z], () => em.Z.getAnyStreamForUser(n)),
        u = (0, T.Z)({ userId: n }),
        h = eL.ZP.useUserTag(t, { decoration: 'never' }),
        m = (0, o.e7)([eC.Z], () => eC.Z.hidePersonalInformation),
        p = (0, o.e7)([eE.Z, eg.Z], () => {
            let e = eE.Z.getChannelId();
            return null != e ? eg.Z.getChannel(e) : null;
        }),
        { mute: g, selfMute: E, suppress: I } = (0, eo.Z)(p),
        { selfDeaf: C, deaf: b } = (0, es.Z)(p),
        Z = (0, o.e7)([R.C], () => {
            var e;
            return (0, j.fD)() ? (null === (e = R.C.getCurrentBuildOverride().overrides) || void 0 === e ? void 0 : e.discord_web) : null;
        }),
        x = (0, o.e7)([ev.ZP], () => ev.ZP.getPremiumTypeSubscription()),
        O = (0, o.e7)([ef.Z], () => ef.Z.getSpeakingWhileMuted()),
        P = (0, o.e7)([e_.Z], () => e_.Z.hasLayers()),
        w = (0, _.s9z)(_.JQI) || P || ex.s.isDisallowPopupsSet(),
        k = (0, q.b)(),
        M = (0, o.e7)([W.Z], () => null != W.Z.getAwaitingRemoteSessionInfo()),
        U = (0, $.D)(),
        G = (0, N.u)(),
        B = eZ.ZP.canUsePremiumGuildMemberProfile(t),
        V = (null == t ? void 0 : null === (e = t.avatarDecoration) || void 0 === e ? void 0 : e.skuId) === eD.rL,
        { activityStatusCleanupEnabled: H } = (0, S.w)({ location: 'Account' }),
        { voiceActivityStatusEnabled: z } = (0, A.U)({ location: 'Account' }),
        { enabled: Y } = (0, D.Z)({ location: 'Account' }),
        K = 'account';
    (0, v.j)({
        location: K + ' auto on',
        autoTrackExposure: !0
    }),
        (0, v.j)({
            location: K + ' auto off',
            autoTrackExposure: !1
        });
    let J = (0, o.e7)([en.Z], () => en.Z.hasHadOtherUserPlaySoundInSession()),
        ee = (function () {
            let e = (0, F.wE)(c.z.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2),
                [t, n] = (0, o.Wu)([X.Z], () => [X.Z.hasFetchedRelevance, X.Z.profileThemesRelevanceExceeded]),
                [i, r] = (0, o.Wu)([ev.ZP], () => [ev.ZP.hasFetchedMostRecentPremiumTypeSubscription(), ev.ZP.getMostRecentPremiumTypeSubscription()]),
                { enabled: a } = Q.Z.useExperiment({ location: '08bd40_1' }, { autoTrackExposure: !0 }),
                s = l.useMemo(() => {
                    let e = new Date().getTime();
                    return null != r && (r.status === ej.O0b.ACTIVE || e - r.currentPeriodEnd.getTime() < eB);
                }, [r]);
            return (
                l.useEffect(() => {
                    (async () => {
                        if (!e && null == n && a) {
                            if (!i) {
                                await (0, f.ou)();
                                return;
                            }
                            !s && (t || (await (0, f.l0)()));
                        }
                    })();
                }, [a, n, e, i, t, s]),
                !e && !!a && !s && null != n && n
            );
        })(),
        { analyticsLocations: et } = (0, y.ZP)(L.Z.ACCOUNT),
        ei = {
            avatar: [],
            settings: []
        };
    return (
        !w && (ee && ei.settings.push(c.z.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2), U && (1 === G ? ei.settings.push(c.z.USER_SAFETY_CONSUMER_EDUCATION_MUTE) : ei.settings.push(c.z.USER_SAFETY_CONSUMER_EDUCATION_BLOCK)), J && ei.settings.push(c.z.SOUNDBOARD_VOLUME_EDUCATION), B && ei.settings.push(c.z.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK), V && ei.avatar.push(c.z.PREMIUM_SUBSCRIPTION_APRIL_MARKETING_DECO_TOOLTIP)),
        (0, i.jsx)(y.Gt, {
            value: et,
            children: (0, i.jsx)(eH, {
                currentUser: t,
                activities: r,
                applicationStream: d,
                voiceChannel: p,
                dismissibleContents: ei,
                userTag: h,
                hidePrivateData: m,
                occluded: w,
                premiumSubscription: x,
                selfDeaf: C,
                selfMute: E,
                serverDeaf: b,
                serverMute: g,
                speaking: u,
                speakingWhileMuted: O,
                status: s,
                streaming: a,
                suppress: I,
                webBuildOverride: Z,
                awaitingRemote: M,
                isEligibleForPomelo: k,
                simplifiedCallSettingsEnabled: Y,
                activityStatusCleanupEnabled: H,
                voiceActivityStatusEnabled: z
            })
        })
    );
}
function ez(e) {
    let { webBuildOverride: t, isEligibleForPomelo: n, onClick: l, onContextMenu: r } = e,
        a = _.ewm,
        s = (0, p.i)();
    return (
        (a = null != t ? _.bgT : n ? _.Ncx : s.Component),
        (0, i.jsx)(eO.Z, {
            tooltipText: null != t ? ew.intl.formatToPlainString(ew.t.Gzh6ZG, { webBuildOverride: t.id }) : ew.intl.string(ew.t.cduTBA),
            onClick: l,
            onContextMenu: r,
            icon: (0, i.jsx)(a, { size: 'refresh_sm' }),
            ...s.events
        })
    );
}
function eW(e) {
    let { selfMute: t, serverMute: n, suppress: r, awaitingRemote: a, tooltipText: o, tooltipColor: c, tooltipForceOpen: d, onMouseEnter: u, onMouseLeave: p, onClick: f, onContextMenu: E } = e,
        I = t || r || n,
        C = l.useRef(null),
        N = (0, h.O)(I ? 'unmute' : 'mute'),
        v = (0, m.P)(I ? 'unmute' : 'mute'),
        { activeVoice: T } = (0, ed.o)(),
        { Component: S, events: A, play: b } = null != T ? v : N,
        Z = n || r ? _.v0G : S,
        { mode: x } = (0, ea.ZP)({ location: 'RTC Microphone Button' }),
        O = null != o ? o : (0, k.Z)(t, n, r, a, x === ea.BK.GroupedButtonsRedMic),
        { analyticsLocations: P } = (0, y.ZP)(L.Z.AUDIO_INPUT_BUTTON),
        R = (0, ec.H)(L.Z.AUDIO_INPUT_BUTTON);
    l.useEffect(() => () => b(), [I, b]);
    let j = l.useCallback(
            (e) => {
                E(e, P);
            },
            [E, P]
        ),
        [D, w] = l.useState(!1),
        M = l.useCallback((e) => {
            var t;
            if ((0, s.k)(null == e ? void 0 : e.target, Node) && (null === (t = C.current) || void 0 === t ? void 0 : t.contains(e.target))) return g.F;
            w(!1);
        }, []);
    return (0, i.jsx)(y.Gt, {
        value: P,
        children: (0, i.jsxs)('div', {
            ref: C,
            className: ek.micButtonParent,
            children: [
                (0, i.jsx)(eO.Z, {
                    tooltipText: O,
                    tooltipColor: c,
                    tooltipForceOpen: d,
                    onMouseEnter: () => {
                        u(), A.onMouseEnter();
                    },
                    onMouseLeave: () => {
                        p(), A.onMouseLeave();
                    },
                    icon: (0, i.jsx)(Z, {
                        size: 'custom',
                        width: 20,
                        height: 20,
                        color: I ? _.TVs.colors.STATUS_DANGER : 'currentColor'
                    }),
                    iconForeground: I ? ek.strikethrough : null,
                    onClick: f,
                    onContextMenu: j,
                    role: 'switch',
                    className: R ? ek.micButtonWithMenu : void 0,
                    'aria-label': ew.intl.string(ew.t['w4m94+']),
                    'aria-checked': I,
                    disabled: a
                }),
                R &&
                    (0, i.jsx)(_.yRy, {
                        position: 'top',
                        align: 'center',
                        animation: _.yRy.Animation.FADE,
                        onRequestClose: M,
                        shouldShow: D,
                        renderPopout: (e) => {
                            let { closePopout: t } = e;
                            return (0, i.jsx)(eh.l, { onSettingsButtonClick: t });
                        },
                        children: (e, t) => {
                            let { onClick: n, ...l } = e,
                                { isShown: r } = t,
                                s = r ? _.u04 : _.CJ0;
                            return (0, i.jsx)('div', {
                                children: (0, i.jsx)(eu.B, {
                                    onCTA: () => w(!0),
                                    canBeShown: !r,
                                    children: (e, t) =>
                                        (0, i.jsx)(eO.Z, {
                                            tooltipText: ew.intl.string(ew.t.Hapb4O),
                                            icon: (0, i.jsx)(s, {
                                                className: ek.buttonChevronIcon,
                                                size: 'custom',
                                                width: 12,
                                                height: 12,
                                                color: _.TVs.colors.TEXT_NORMAL
                                            }),
                                            role: 'button',
                                            className: ek.buttonChevron,
                                            'aria-label': ew.intl.string(ew.t.Hapb4O),
                                            disabled: a,
                                            onClick: (e) => {
                                                null == t || t(), n(e), w(!D);
                                            },
                                            ...l
                                        })
                                })
                            });
                        }
                    })
            ]
        })
    });
}
function eY(e) {
    let { selfDeaf: t, serverDeaf: n, awaitingRemote: r, onClick: s, onContextMenu: o } = e,
        c = t || n,
        {
            Component: d,
            play: h,
            events: { onMouseEnter: m, onMouseLeave: p }
        } = (0, u.l)(c ? 'undeafen' : 'deafen'),
        g = n ? _.Vm4 : d,
        { analyticsLocations: f } = (0, y.ZP)(L.Z.AUDIO_OUTPUT_BUTTON);
    l.useEffect(() => () => h(), [c, h]);
    let E = l.useCallback(
        (e) => {
            o(e, f);
        },
        [o, f]
    );
    return (0, i.jsx)(y.Gt, {
        value: f,
        children: (0, i.jsx)(eO.Z, {
            tooltipText: (0, w.Z)(t, n, r),
            onMouseEnter: m,
            onMouseLeave: p,
            icon: (0, i.jsx)(g, {
                size: 'custom',
                width: 20,
                height: 20,
                color: c ? _.TVs.colors.STATUS_DANGER : 'currentColor'
            }),
            onClick: s,
            onContextMenu: E,
            innerClassName: a()({ [ek.redIcon]: n }),
            iconForeground: c ? ek.strikethrough : null,
            role: 'switch',
            'aria-label': ew.intl.string(ew.t.wjcRFR),
            'aria-checked': c,
            disabled: r
        })
    });
}
