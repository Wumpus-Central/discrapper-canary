n.d(t, { Z: () => eH }), n(47120), n(653041);
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
    v = n(941129),
    N = n(634894),
    T = n(586902),
    S = n(907305),
    Z = n(297369),
    x = n(953372),
    A = n(570928),
    b = n(100527),
    L = n(906732),
    y = n(676742),
    P = n(1585),
    O = n(304761),
    R = n(865427),
    j = n(571250),
    D = n(628581),
    w = n(55311),
    M = n(575175),
    k = n(64220),
    U = n(600164),
    G = n(427217),
    B = n(540059),
    V = n(605236),
    H = n(243778),
    F = n(258609),
    z = n(427347),
    W = n(443669),
    Y = n(332473),
    K = n(240504),
    q = n(637906),
    X = n(39370),
    Q = n(19199),
    J = n(111653),
    $ = n(866483),
    ee = n(14357),
    et = n(393333),
    en = n(763296),
    ei = n(640806),
    el = n(184301),
    er = n(52538),
    ea = n(861254),
    es = n(879815),
    eo = n(294629),
    ec = n(875527),
    ed = n(378441),
    eu = n(306609),
    eh = n(199902),
    em = n(314897),
    ep = n(592125),
    eg = n(819640),
    e_ = n(131951),
    ef = n(19780),
    eE = n(885110),
    eI = n(246946),
    eC = n(594174),
    ev = n(78839),
    eN = n(626135),
    eT = n(768581),
    eS = n(572004),
    eZ = n(70956),
    ex = n(74538),
    eA = n(374023),
    eb = n(51144),
    eL = n(998502),
    ey = n(870569),
    eP = n(345243),
    eO = n(115530),
    eR = n(981631),
    ej = n(215023),
    eD = n(388032),
    ew = n(628005);
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
let ek = eL.ZP.getEnableHardwareAcceleration() ? _.Xo$ : _.qEK,
    eU = 2 * eZ.Z.Millis.MINUTE,
    eG = 30 * eZ.Z.Millis.DAY;
function eB(e) {
    let { speaking: t, streaming: n, currentUser: l, status: r, handleMouseLeave: s, renderNameTag: o } = e,
        c = (0, B.Q3)('RTC Avatar'),
        d = (0, y.Z)(null == l ? void 0 : l.avatarDecoration),
        u = (0, eT.NZ)({
            avatarDecoration: d,
            size: (0, P.y9)(_.EFr.SIZE_32)
        }),
        h = (0, _.dQu)(_.TVs.modules.guildbar.AVATAR_SIZE);
    return null == l
        ? null
        : (0, i.jsx)(C.Z, {
              object: eR.qAy.AVATAR,
              children: (0, i.jsx)(_.yRy, {
                  clickTrap: !0,
                  renderPopout: (e) => {
                      let { closePopout: t, setPopoutRef: n } = e;
                      return (0, i.jsx)('div', {
                          className: ew.accountProfilePopoutWrapper,
                          children: (0, i.jsx)(W.Z, {
                              currentUser: l,
                              setPopoutRef: n,
                              onClose: () => {
                                  s(), null == t || t();
                              }
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
                          'aria-label': eD.intl.string(eD.t['3Uj+2t']),
                          className: ew.avatarWrapper,
                          children: [
                              (0, i.jsx)(ek, {
                                  size: c ? _.EFr['SIZE_'.concat(h)] : _.EFr.SIZE_32,
                                  src: l.getAvatarURL(void 0, c ? h - 4 : 32, !1),
                                  avatarDecoration: u,
                                  'aria-label': l.username,
                                  status: n ? eR.Skl.STREAMING : r,
                                  isSpeaking: t,
                                  className: ew.avatar
                              }),
                              (0, i.jsx)('div', {
                                  className: a()(ew.nameTag, { [ew.canCopy]: eS.wS }),
                                  children: o()
                              })
                          ]
                      })
              })
          });
}
class eV extends l.PureComponent {
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
            t = [eD.intl.string(eD.t.MSaeTU), eD.intl.string(eD.t.UmrCw8), eD.intl.string(eD.t.gKE0Ji), eD.intl.string(eD.t['4DSKbm']), eD.intl.string(eD.t['+8ENdX']), eD.intl.string(eD.t.GlWHv7), eD.intl.string(eD.t.hIzxU1), eD.intl.string(eD.t['26uMPD']), eD.intl.string(eD.t.uFs7R0), eD.intl.string(eD.t.bLXdcX), eD.intl.string(eD.t.gPg9fX)],
            n = Math.min(Math.max(0, e - 1), t.length - 1);
        return (0, i.jsx)(_.UkV, {
            isShaking: this.isCopiedStreakGodlike,
            children: t[n]
        });
    }
    renderStatus() {
        let { hovered: e } = this.state,
            { activities: t, activityStatusCleanupEnabled: n, applicationStream: l, currentUser: r, status: a, userTag: s } = this.props;
        if (null == r) return null;
        if (n && (0, Z.Z)(t, a))
            return (0, i.jsx)(A.Z, {
                hoverText: s,
                forceHover: e,
                children: (0, i.jsx)(x.Z, {
                    user: r,
                    activities: t,
                    applicationStream: l,
                    hideTooltip: !0
                })
            });
        let o =
            null == t
                ? void 0
                : t.find((e) => {
                      let { type: t } = e;
                      return t === eR.IIU.CUSTOM_STATUS;
                  });
        return null != o
            ? (0, i.jsx)(A.Z, {
                  hoverText: s,
                  forceHover: e,
                  children: (0, i.jsx)(G.Z, {
                      activity: o,
                      emojiClassName: ew.emoji,
                      className: ew.customStatus
                  })
              })
            : null != a && a !== eR.Skl.UNKNOWN && r.isPomelo()
              ? (0, i.jsx)(A.Z, {
                    hoverText: s,
                    forceHover: e,
                    children: eb.ZP.humanizeStatus(a)
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
                          className: ew.panelTitleContainer,
                          children: (0, i.jsx)(eO.Z, { children: eb.ZP.getName(e) })
                      }),
                      (0, i.jsx)('div', {
                          className: ew.panelSubtextContainer,
                          children: (0, i.jsx)(eP.Z, { children: this.renderStatus() })
                      })
                  ]
              });
    }
    renderAvatarWithPopout() {
        return (0, i.jsx)(eB, {
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
                              ? (0, i.jsx)(k.Z, {
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
                          className: ew.container,
                          onMouseEnter: this.handleMouseEnter,
                          onMouseLeave: this.handleMouseLeave,
                          children: [
                              this.renderNameZone(),
                              (0, i.jsxs)(U.Z, {
                                  grow: 0,
                                  className: ew.buttons,
                                  children: [
                                      (0, i.jsx)(ez, {
                                          selfMute: n,
                                          serverMute: r,
                                          suppress: s,
                                          awaitingRemote: l,
                                          tooltipText: d ? eD.intl.string(eD.t['29gnR0']) : void 0,
                                          tooltipColor: d ? _.FGA.GREEN : void 0,
                                          tooltipForceOpen: d || void 0,
                                          onMouseEnter: this.handleMouseEnterMute,
                                          onMouseLeave: this.handleMouseLeaveMute,
                                          onClick: this.handleToggleSelfMute,
                                          onContextMenu: this.handleInputAudioContextMenu
                                      }),
                                      (0, i.jsx)(eW, {
                                          selfDeaf: t,
                                          serverDeaf: a,
                                          onClick: this.handleToggleSelfDeaf,
                                          onContextMenu: this.handleOutputAudioContextMenu,
                                          awaitingRemote: l
                                      }),
                                      (0, i.jsx)(H.ZP, {
                                          contentTypes: o.settings,
                                          children: (e) => {
                                              let { visibleContent: t, markAsDismissed: n } = e;
                                              switch (t) {
                                                  case c.z.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2:
                                                      return (0, i.jsx)(_.yRy, {
                                                          position: 'top',
                                                          align: 'center',
                                                          shouldShow: !0,
                                                          renderPopout: () => (0, i.jsx)(X.Z, {}),
                                                          children: this.renderSettingsGear
                                                      });
                                                  case c.z.USER_SAFETY_CONSUMER_EDUCATION_BLOCK:
                                                      return (0, i.jsx)(_.yRy, {
                                                          position: 'top',
                                                          align: 'center',
                                                          shouldShow: !0,
                                                          renderPopout: () => (0, i.jsx)($.Z, { markAsDismissed: n }),
                                                          children: this.renderSettingsGear
                                                      });
                                                  case c.z.USER_SAFETY_CONSUMER_EDUCATION_MUTE:
                                                      return (0, i.jsx)(_.yRy, {
                                                          position: 'top',
                                                          align: 'center',
                                                          shouldShow: !0,
                                                          renderPopout: () => (0, i.jsx)(ee.Z, { markAsDismissed: n }),
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
                                                  case c.z.USER_SAFETY_CONSUMER_EDUCATION_REPORTING:
                                                      return (0, i.jsx)(_.yRy, {
                                                          position: 'top',
                                                          align: 'center',
                                                          shouldShow: !0,
                                                          renderPopout: () => (0, i.jsx)(et.P, { markAsDismissed: n }),
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
                      (0, i.jsx)(z.Z, {})
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
                (0, M.Z)(e, t, eR.jXE.ACCOUNT_PANEL);
            }),
            eM(this, 'handleToggleSelfDeaf', () => {
                let { serverDeaf: e } = this.props;
                (0, w.Z)(e, eR.jXE.ACCOUNT_PANEL);
            }),
            eM(this, 'handleOpenAccountSettings', () => {
                this.handleOpenSettings();
            }),
            eM(this, 'handleOpenSettings', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eR.oAB.ACCOUNT,
                    t = arguments.length > 1 ? arguments[1] : void 0,
                    n = arguments.length > 2 ? arguments[2] : void 0;
                I.Z.open(e, t, n);
            }),
            eM(this, 'handleOpenSettingsContextMenu', (e) => {
                let { currentUser: t } = this.props;
                null != t &&
                    (0, E.jW)(e, async () => {
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
            eM(this, 'handleInputAudioContextMenu', (e, t) => {
                (0, E.jW)(e, async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 659580));
                    return () =>
                        (0, i.jsx)(L.Gt, {
                            value: t,
                            children: (0, i.jsx)(e, {
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
                        (0, i.jsx)(L.Gt, {
                            value: t,
                            children: (0, i.jsx)(e, {
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
                (0, eS.JG)(
                    eb.ZP.getUserTag(e, {
                        decoration: 'never',
                        identifiable: 'always'
                    })
                ),
                    eN.default.track(eR.rMx.TEXT_COPIED, { type: 'User Tag' });
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
                    a = void 0 === this.lastSpeakingWhileMutedNotificationTime || Date.now() - this.lastSpeakingWhileMutedNotificationTime > eU;
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
                (0, i.jsx)(eF, {
                    isEligibleForPomelo: this.props.isEligibleForPomelo,
                    webBuildOverride: this.props.webBuildOverride,
                    onClick: this.handleOpenAccountSettings,
                    onContextMenu: this.handleOpenSettingsContextMenu
                })
            );
    }
}
function eH() {
    var e;
    let t = (0, o.e7)([eC.default], () => eC.default.getCurrentUser()),
        n = (0, o.e7)([em.default], () => em.default.getId()),
        {
            activities: r,
            streaming: a,
            status: s
        } = (0, o.cj)([eE.Z], () => {
            let e = eE.Z.getActivities();
            return {
                activities: e,
                streaming:
                    null !=
                    e.find((e) => {
                        let { type: t } = e;
                        return t === eR.IIU.STREAMING;
                    }),
                status: eE.Z.getStatus()
            };
        }),
        d = (0, o.e7)([eh.Z], () => eh.Z.getAnyStreamForUser(n)),
        u = (0, T.Z)({ userId: n }),
        h = eb.ZP.useUserTag(t, { decoration: 'never' }),
        m = (0, o.e7)([eI.Z], () => eI.Z.hidePersonalInformation),
        p = (0, o.e7)([ef.Z, ep.Z], () => {
            let e = ef.Z.getChannelId();
            return null != e ? ep.Z.getChannel(e) : null;
        }),
        { mute: g, selfMute: E, suppress: I } = (0, eo.Z)(p),
        { selfDeaf: C, deaf: Z } = (0, es.Z)(p),
        x = (0, o.e7)([O.C], () => {
            var e;
            return (0, R.fD)() ? (null === (e = O.C.getCurrentBuildOverride().overrides) || void 0 === e ? void 0 : e.discord_web) : null;
        }),
        A = (0, o.e7)([ev.ZP], () => ev.ZP.getPremiumTypeSubscription()),
        y = (0, o.e7)([e_.Z], () => e_.Z.getSpeakingWhileMuted()),
        P = (0, o.e7)([eg.Z], () => eg.Z.hasLayers()),
        j = (0, _.s9z)(_.JQI) || P || eA.s.isDisallowPopupsSet(),
        D = (0, Y.b)(),
        w = (0, o.e7)([F.Z], () => null != F.Z.getAwaitingRemoteSessionInfo()),
        M = (0, Q.D)(),
        k = (0, v.u)(),
        U = (0, J.t)(),
        G = ex.ZP.canUsePremiumGuildMemberProfile(t),
        B = (null == t ? void 0 : null === (e = t.avatarDecoration) || void 0 === e ? void 0 : e.skuId) === ej.rL,
        { activityStatusCleanupEnabled: H } = (0, S.w)({ location: 'Account' }),
        z = 'account';
    (0, N.j)({
        location: z + ' auto on',
        autoTrackExposure: !0
    }),
        (0, N.j)({
            location: z + ' auto off',
            autoTrackExposure: !1
        });
    let W = (0, o.e7)([en.Z], () => en.Z.hasHadOtherUserPlaySoundInSession()),
        X = (function () {
            let e = (0, V.wE)(c.z.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2),
                [t, n] = (0, o.Wu)([K.Z], () => [K.Z.hasFetchedRelevance, K.Z.profileThemesRelevanceExceeded]),
                [i, r] = (0, o.Wu)([ev.ZP], () => [ev.ZP.hasFetchedMostRecentPremiumTypeSubscription(), ev.ZP.getMostRecentPremiumTypeSubscription()]),
                { enabled: a } = q.Z.useExperiment({ location: '08bd40_1' }, { autoTrackExposure: !0 }),
                s = l.useMemo(() => {
                    let e = new Date().getTime();
                    return null != r && (r.status === eR.O0b.ACTIVE || e - r.currentPeriodEnd.getTime() < eG);
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
        { analyticsLocations: $ } = (0, L.ZP)(b.Z.ACCOUNT),
        ee = {
            avatar: [],
            settings: []
        };
    return (
        !j && (X && ee.settings.push(c.z.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2), M && (1 === k ? ee.settings.push(c.z.USER_SAFETY_CONSUMER_EDUCATION_MUTE) : ee.settings.push(c.z.USER_SAFETY_CONSUMER_EDUCATION_BLOCK)), W && ee.settings.push(c.z.SOUNDBOARD_VOLUME_EDUCATION), U && ee.settings.push(c.z.USER_SAFETY_CONSUMER_EDUCATION_REPORTING), G && ee.settings.push(c.z.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK), B && ee.avatar.push(c.z.PREMIUM_SUBSCRIPTION_APRIL_MARKETING_DECO_TOOLTIP)),
        (0, i.jsx)(L.Gt, {
            value: $,
            children: (0, i.jsx)(eV, {
                currentUser: t,
                activities: r,
                activityStatusCleanupEnabled: H,
                applicationStream: d,
                dismissibleContents: ee,
                userTag: h,
                hidePrivateData: m,
                occluded: j,
                premiumSubscription: A,
                selfDeaf: C,
                selfMute: E,
                serverDeaf: Z,
                serverMute: g,
                speaking: u,
                speakingWhileMuted: y,
                status: s,
                streaming: a,
                suppress: I,
                webBuildOverride: x,
                awaitingRemote: w,
                isEligibleForPomelo: D
            })
        })
    );
}
function eF(e) {
    let { webBuildOverride: t, isEligibleForPomelo: n, onClick: l, onContextMenu: r } = e,
        a = _.ewm,
        s = (0, p.i)();
    return (
        (a = null != t ? _.bgT : n ? _.Ncx : s.Component),
        (0, i.jsx)(ey.Z, {
            tooltipText: null != t ? eD.intl.formatToPlainString(eD.t.Gzh6ZG, { webBuildOverride: t.id }) : eD.intl.string(eD.t.cduTBA),
            onClick: l,
            onContextMenu: r,
            icon: (0, i.jsx)(a, { size: 'refresh_sm' }),
            ...s.events
        })
    );
}
function ez(e) {
    let { selfMute: t, serverMute: n, suppress: r, awaitingRemote: a, tooltipText: o, tooltipColor: c, tooltipForceOpen: d, onMouseEnter: u, onMouseLeave: p, onClick: f, onContextMenu: E } = e,
        C = t || r || n,
        v = l.useRef(null),
        N = (0, h.O)(C ? 'unmute' : 'mute'),
        T = (0, m.P)(C ? 'unmute' : 'mute'),
        { activeVoice: S } = (0, ed.o)(),
        { Component: Z, events: x, play: A } = null != S ? T : N,
        y = n || r ? _.v0G : Z,
        { mode: P } = (0, ea.ZP)({ location: 'RTC Microphone Button' }),
        O = null != o ? o : (0, D.Z)(t, n, r, a, P === ea.BK.GroupedButtonsRedMic),
        { analyticsLocations: R } = (0, L.ZP)(b.Z.AUDIO_INPUT_BUTTON),
        j = (0, ec.H)(b.Z.AUDIO_INPUT_BUTTON);
    l.useEffect(() => () => A(), [C, A]);
    let w = l.useCallback(
            (e) => {
                E(e, R);
            },
            [E, R]
        ),
        M = l.useCallback((e) => {
            var t;
            if ((0, s.k)(null == e ? void 0 : e.target, Node) && (null === (t = v.current) || void 0 === t ? void 0 : t.contains(e.target))) return g.F;
        }, []);
    return (0, i.jsx)(L.Gt, {
        value: R,
        children: (0, i.jsxs)('div', {
            ref: v,
            className: ew.micButtonParent,
            children: [
                (0, i.jsx)(ey.Z, {
                    tooltipText: O,
                    tooltipColor: c,
                    tooltipForceOpen: d,
                    onMouseEnter: () => {
                        u(), x.onMouseEnter();
                    },
                    onMouseLeave: () => {
                        p(), x.onMouseLeave();
                    },
                    icon: (0, i.jsx)(y, {
                        size: 'custom',
                        width: 20,
                        height: 20,
                        color: C ? _.TVs.colors.STATUS_DANGER : 'currentColor'
                    }),
                    iconForeground: C ? ew.strikethrough : null,
                    onClick: f,
                    onContextMenu: w,
                    role: 'switch',
                    className: j ? ew.micButtonWithMenu : void 0,
                    'aria-label': eD.intl.string(eD.t['w4m94+']),
                    'aria-checked': C,
                    disabled: a
                }),
                j &&
                    (0, i.jsx)(_.yRy, {
                        position: 'top',
                        align: 'center',
                        animation: _.yRy.Animation.FADE,
                        onRequestClose: M,
                        renderPopout: (e) => {
                            let { closePopout: t } = e;
                            return (0, i.jsx)(eu.l, {
                                onSettingsButtonClick: () => {
                                    t(), I.Z.open(eR.oAB.VOICE, null, { analyticsLocations: R });
                                }
                            });
                        },
                        children: (e, t) => {
                            let { isShown: n } = t,
                                l = n ? _.u04 : _.CJ0;
                            return (0, i.jsx)(ey.Z, {
                                tooltipText: eD.intl.string(eD.t.Hapb4O),
                                icon: (0, i.jsx)(l, {
                                    className: ew.buttonChevronIcon,
                                    size: 'custom',
                                    width: 12,
                                    height: 12,
                                    color: _.TVs.colors.TEXT_NORMAL
                                }),
                                role: 'button',
                                className: ew.buttonChevron,
                                'aria-label': eD.intl.string(eD.t.Hapb4O),
                                disabled: a,
                                ...e
                            });
                        }
                    })
            ]
        })
    });
}
function eW(e) {
    let { selfDeaf: t, serverDeaf: n, awaitingRemote: r, onClick: s, onContextMenu: o } = e,
        c = t || n,
        {
            Component: d,
            play: h,
            events: { onMouseEnter: m, onMouseLeave: p }
        } = (0, u.l)(c ? 'undeafen' : 'deafen'),
        g = n ? _.Vm4 : d,
        { analyticsLocations: f } = (0, L.ZP)(b.Z.AUDIO_OUTPUT_BUTTON);
    l.useEffect(() => () => h(), [c, h]);
    let E = l.useCallback(
        (e) => {
            o(e, f);
        },
        [o, f]
    );
    return (0, i.jsx)(L.Gt, {
        value: f,
        children: (0, i.jsx)(ey.Z, {
            tooltipText: (0, j.Z)(t, n, r),
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
            innerClassName: a()({ [ew.redIcon]: n }),
            iconForeground: c ? ew.strikethrough : null,
            role: 'switch',
            'aria-label': eD.intl.string(eD.t.wjcRFR),
            'aria-checked': c,
            disabled: r
        })
    });
}
