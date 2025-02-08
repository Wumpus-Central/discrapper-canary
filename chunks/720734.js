n.d(t, { Z: () => eV }), n(47120), n(653041);
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
    Z = n(297369),
    A = n(953372),
    x = n(570928),
    b = n(100527),
    L = n(906732),
    y = n(676742),
    P = n(1585),
    O = n(304761),
    R = n(865427),
    j = n(682901),
    D = n(571250),
    w = n(628581),
    M = n(55311),
    k = n(575175),
    U = n(64220),
    G = n(600164),
    B = n(427217),
    V = n(540059),
    H = n(605236),
    F = n(243778),
    z = n(258609),
    W = n(427347),
    Y = n(331541),
    K = n(332473),
    q = n(240504),
    X = n(637906),
    Q = n(39370),
    J = n(19199),
    $ = n(866483),
    ee = n(14357),
    et = n(763296),
    en = n(640806),
    ei = n(184301),
    el = n(52538),
    er = n(861254),
    ea = n(879815),
    es = n(294629),
    eo = n(875527),
    ec = n(378441),
    ed = n(306609),
    eu = n(199902),
    eh = n(314897),
    em = n(592125),
    ep = n(819640),
    eg = n(131951),
    e_ = n(19780),
    ef = n(885110),
    eE = n(246946),
    eI = n(594174),
    eC = n(78839),
    eN = n(626135),
    ev = n(768581),
    eT = n(572004),
    eS = n(70956),
    eZ = n(74538),
    eA = n(374023),
    ex = n(51144),
    eb = n(998502),
    eL = n(870569),
    ey = n(345243),
    eP = n(115530),
    eO = n(981631),
    eR = n(215023),
    ej = n(388032),
    eD = n(628005);
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
let eM = eb.ZP.getEnableHardwareAcceleration() ? _.Xo$ : _.qEK,
    ek = 2 * eS.Z.Millis.MINUTE,
    eU = 30 * eS.Z.Millis.DAY;
function eG(e) {
    let { speaking: t, streaming: n, currentUser: l, status: r, handleMouseLeave: s, renderNameTag: o } = e,
        c = (0, V.Q3)('RTC Avatar'),
        d = (0, y.Z)(null == l ? void 0 : l.avatarDecoration),
        u = (0, ev.NZ)({
            avatarDecoration: d,
            size: (0, P.y9)(_.EFr.SIZE_32)
        }),
        h = (0, _.dQu)(_.TVs.modules.guildbar.AVATAR_SIZE);
    return null == l
        ? null
        : (0, i.jsx)(C.Z, {
              object: eO.qAy.AVATAR,
              children: (0, i.jsx)(_.yRy, {
                  clickTrap: !0,
                  renderPopout: (e) => {
                      let { closePopout: t, setPopoutRef: n } = e;
                      return (0, i.jsx)('div', {
                          className: eD.accountProfilePopoutWrapper,
                          children: (0, i.jsx)(Y.Z, {
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
                      (0, ei.Z)(l, void 0, {
                          withMutualGuilds: !1,
                          withMutualFriends: !1
                      }),
                  children: (e) =>
                      (0, i.jsxs)(_.P3F, {
                          ...e,
                          'aria-label': ej.intl.string(ej.t['3Uj+2t']),
                          className: eD.avatarWrapper,
                          children: [
                              (0, i.jsx)(eM, {
                                  size: c ? _.EFr['SIZE_'.concat(h)] : _.EFr.SIZE_32,
                                  src: l.getAvatarURL(void 0, c ? h - 4 : 32, !1),
                                  avatarDecoration: u,
                                  'aria-label': l.username,
                                  status: n ? eO.Skl.STREAMING : r,
                                  isSpeaking: t,
                                  className: eD.avatar
                              }),
                              (0, i.jsx)('div', {
                                  className: a()(eD.nameTag, { [eD.canCopy]: eT.wS }),
                                  children: o()
                              })
                          ]
                      })
              })
          });
}
class eB extends l.PureComponent {
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
            t = [ej.intl.string(ej.t.MSaeTU), ej.intl.string(ej.t.UmrCw8), ej.intl.string(ej.t.gKE0Ji), ej.intl.string(ej.t['4DSKbm']), ej.intl.string(ej.t['+8ENdX']), ej.intl.string(ej.t.GlWHv7), ej.intl.string(ej.t.hIzxU1), ej.intl.string(ej.t['26uMPD']), ej.intl.string(ej.t.uFs7R0), ej.intl.string(ej.t.bLXdcX), ej.intl.string(ej.t.gPg9fX)],
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
            return (0, i.jsx)(x.Z, {
                hoverText: s,
                forceHover: e,
                children: (0, i.jsx)(A.Z, {
                    user: r,
                    activities: t,
                    applicationStream: l,
                    textClassName: eD.activityStatusText,
                    hideTooltip: !0
                })
            });
        let o =
            null == t
                ? void 0
                : t.find((e) => {
                      let { type: t } = e;
                      return t === eO.IIU.CUSTOM_STATUS;
                  });
        return null != o
            ? (0, i.jsx)(x.Z, {
                  hoverText: s,
                  forceHover: e,
                  children: (0, i.jsx)(B.Z, {
                      activity: o,
                      emojiClassName: eD.emoji,
                      className: eD.customStatus
                  })
              })
            : null != a && a !== eO.Skl.UNKNOWN && r.isPomelo()
              ? (0, i.jsx)(x.Z, {
                    hoverText: s,
                    forceHover: e,
                    children: ex.ZP.humanizeStatus(a)
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
                          className: eD.panelTitleContainer,
                          children: (0, i.jsx)(eP.Z, { children: ex.ZP.getName(e) })
                      }),
                      (0, i.jsx)('div', {
                          className: eD.panelSubtextContainer,
                          children: (0, i.jsx)(ey.Z, { children: this.renderStatus() })
                      })
                  ]
              });
    }
    renderAvatarWithPopout() {
        return (0, i.jsx)(eG, {
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
                  children: (0, i.jsx)(F.ZP, {
                      contentTypes: t.avatar,
                      children: (e) => {
                          let { visibleContent: t, markAsDismissed: n } = e;
                          return t === c.z.PREMIUM_SUBSCRIPTION_APRIL_MARKETING_DECO_TOOLTIP
                              ? (0, i.jsx)(U.Z, {
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
                          className: eD.container,
                          onMouseEnter: this.handleMouseEnter,
                          onMouseLeave: this.handleMouseLeave,
                          children: [
                              this.renderNameZone(),
                              (0, i.jsxs)(G.Z, {
                                  grow: 0,
                                  className: eD.buttons,
                                  children: [
                                      (0, i.jsx)(eF, {
                                          selfMute: n,
                                          serverMute: r,
                                          suppress: s,
                                          awaitingRemote: l,
                                          tooltipText: d ? ej.intl.string(ej.t['29gnR0']) : void 0,
                                          tooltipColor: d ? _.FGA.GREEN : void 0,
                                          tooltipForceOpen: d || void 0,
                                          onMouseEnter: this.handleMouseEnterMute,
                                          onMouseLeave: this.handleMouseLeaveMute,
                                          onClick: this.handleToggleSelfMute,
                                          onContextMenu: this.handleInputAudioContextMenu
                                      }),
                                      (0, i.jsx)(ez, {
                                          selfDeaf: t,
                                          serverDeaf: a,
                                          onClick: this.handleToggleSelfDeaf,
                                          onContextMenu: this.handleOutputAudioContextMenu,
                                          awaitingRemote: l
                                      }),
                                      (0, i.jsx)(F.ZP, {
                                          contentTypes: o.settings,
                                          children: (e) => {
                                              let { visibleContent: t, markAsDismissed: n } = e;
                                              switch (t) {
                                                  case c.z.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2:
                                                      return (0, i.jsx)(_.yRy, {
                                                          position: 'top',
                                                          align: 'center',
                                                          shouldShow: !0,
                                                          renderPopout: () => (0, i.jsx)(Q.Z, {}),
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
                                                          renderPopout: () => (0, i.jsx)(en.Z, { markAsDismissed: n }),
                                                          children: this.renderSettingsGear
                                                      });
                                                  case c.z.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK:
                                                      return (0, i.jsx)(_.yRy, {
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
                      }),
                      (0, i.jsx)(W.Z, {})
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
                (0, k.Z)(e, t, eO.jXE.ACCOUNT_PANEL);
            }),
            ew(this, 'handleToggleSelfDeaf', () => {
                let { serverDeaf: e } = this.props;
                (0, M.Z)(e, eO.jXE.ACCOUNT_PANEL);
            }),
            ew(this, 'handleOpenAccountSettings', () => {
                this.handleOpenSettings();
            }),
            ew(this, 'handleOpenSettings', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eO.oAB.ACCOUNT,
                    t = arguments.length > 1 ? arguments[1] : void 0,
                    n = arguments.length > 2 ? arguments[2] : void 0;
                I.Z.open(e, t, n);
            }),
            ew(this, 'handleOpenSettingsContextMenu', (e) => {
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
            ew(this, 'handleInputAudioContextMenu', (e, t) => {
                (0, E.jW)(e, async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 659580));
                    return () =>
                        (0, i.jsx)(L.Gt, {
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
            ew(this, 'handleOutputAudioContextMenu', (e, t) => {
                (0, E.jW)(e, async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 659580));
                    return () =>
                        (0, i.jsx)(L.Gt, {
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
                (0, eT.JG)(
                    ex.ZP.getUserTag(e, {
                        decoration: 'never',
                        identifiable: 'always'
                    })
                ),
                    eN.default.track(eO.rMx.TEXT_COPIED, { type: 'User Tag' });
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
                let { selfMute: e, serverMute: t, suppress: n, speakingWhileMuted: i, occluded: l } = this.props,
                    { hoveringOnMute: r } = this.state,
                    a = void 0 === this.lastSpeakingWhileMutedNotificationTime || Date.now() - this.lastSpeakingWhileMutedNotificationTime > ek;
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
            ew(this, 'renderSettingsGear', () =>
                (0, i.jsx)(eH, {
                    isEligibleForPomelo: this.props.isEligibleForPomelo,
                    webBuildOverride: this.props.webBuildOverride,
                    onClick: this.handleOpenAccountSettings,
                    onContextMenu: this.handleOpenSettingsContextMenu
                })
            );
    }
}
function eV() {
    var e;
    let t = (0, o.e7)([eI.default], () => eI.default.getCurrentUser()),
        n = (0, o.e7)([eh.default], () => eh.default.getId()),
        {
            activities: r,
            streaming: a,
            status: s
        } = (0, o.cj)([ef.Z], () => {
            let e = ef.Z.getActivities();
            return {
                activities: e,
                streaming:
                    null !=
                    e.find((e) => {
                        let { type: t } = e;
                        return t === eO.IIU.STREAMING;
                    }),
                status: ef.Z.getStatus()
            };
        }),
        d = (0, o.e7)([eu.Z], () => eu.Z.getAnyStreamForUser(n)),
        u = (0, T.Z)({ userId: n }),
        h = ex.ZP.useUserTag(t, { decoration: 'never' }),
        m = (0, o.e7)([eE.Z], () => eE.Z.hidePersonalInformation),
        p = (0, o.e7)([e_.Z, em.Z], () => {
            let e = e_.Z.getChannelId();
            return null != e ? em.Z.getChannel(e) : null;
        }),
        { mute: g, selfMute: E, suppress: I } = (0, es.Z)(p),
        { selfDeaf: C, deaf: Z } = (0, ea.Z)(p),
        A = (0, o.e7)([O.C], () => {
            var e;
            return (0, R.fD)() ? (null === (e = O.C.getCurrentBuildOverride().overrides) || void 0 === e ? void 0 : e.discord_web) : null;
        }),
        x = (0, o.e7)([eC.ZP], () => eC.ZP.getPremiumTypeSubscription()),
        y = (0, o.e7)([eg.Z], () => eg.Z.getSpeakingWhileMuted()),
        P = (0, o.e7)([ep.Z], () => ep.Z.hasLayers()),
        D = (0, _.s9z)(_.JQI) || P || eA.s.isDisallowPopupsSet(),
        w = (0, K.b)(),
        M = (0, o.e7)([z.Z], () => null != z.Z.getAwaitingRemoteSessionInfo()),
        k = (0, J.D)(),
        U = (0, N.u)(),
        G = eZ.ZP.canUsePremiumGuildMemberProfile(t),
        B = (null == t ? void 0 : null === (e = t.avatarDecoration) || void 0 === e ? void 0 : e.skuId) === eR.rL,
        { activityStatusCleanupEnabled: V } = (0, S.w)({ location: 'Account' }),
        { enabled: F } = (0, j.Z)({ location: 'Account' }),
        W = 'account';
    (0, v.j)({
        location: W + ' auto on',
        autoTrackExposure: !0
    }),
        (0, v.j)({
            location: W + ' auto off',
            autoTrackExposure: !1
        });
    let Y = (0, o.e7)([et.Z], () => et.Z.hasHadOtherUserPlaySoundInSession()),
        Q = (function () {
            let e = (0, H.wE)(c.z.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2),
                [t, n] = (0, o.Wu)([q.Z], () => [q.Z.hasFetchedRelevance, q.Z.profileThemesRelevanceExceeded]),
                [i, r] = (0, o.Wu)([eC.ZP], () => [eC.ZP.hasFetchedMostRecentPremiumTypeSubscription(), eC.ZP.getMostRecentPremiumTypeSubscription()]),
                { enabled: a } = X.Z.useExperiment({ location: '08bd40_1' }, { autoTrackExposure: !0 }),
                s = l.useMemo(() => {
                    let e = new Date().getTime();
                    return null != r && (r.status === eO.O0b.ACTIVE || e - r.currentPeriodEnd.getTime() < eU);
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
        !D && (Q && ee.settings.push(c.z.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2), k && (1 === U ? ee.settings.push(c.z.USER_SAFETY_CONSUMER_EDUCATION_MUTE) : ee.settings.push(c.z.USER_SAFETY_CONSUMER_EDUCATION_BLOCK)), Y && ee.settings.push(c.z.SOUNDBOARD_VOLUME_EDUCATION), G && ee.settings.push(c.z.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK), B && ee.avatar.push(c.z.PREMIUM_SUBSCRIPTION_APRIL_MARKETING_DECO_TOOLTIP)),
        (0, i.jsx)(L.Gt, {
            value: $,
            children: (0, i.jsx)(eB, {
                currentUser: t,
                activities: r,
                activityStatusCleanupEnabled: V,
                applicationStream: d,
                dismissibleContents: ee,
                userTag: h,
                hidePrivateData: m,
                occluded: D,
                premiumSubscription: x,
                selfDeaf: C,
                selfMute: E,
                serverDeaf: Z,
                serverMute: g,
                speaking: u,
                speakingWhileMuted: y,
                status: s,
                streaming: a,
                suppress: I,
                webBuildOverride: A,
                awaitingRemote: M,
                isEligibleForPomelo: w,
                simplifiedCallSettingsEnabled: F
            })
        })
    );
}
function eH(e) {
    let { webBuildOverride: t, isEligibleForPomelo: n, onClick: l, onContextMenu: r } = e,
        a = _.ewm,
        s = (0, p.i)();
    return (
        (a = null != t ? _.bgT : n ? _.Ncx : s.Component),
        (0, i.jsx)(eL.Z, {
            tooltipText: null != t ? ej.intl.formatToPlainString(ej.t.Gzh6ZG, { webBuildOverride: t.id }) : ej.intl.string(ej.t.cduTBA),
            onClick: l,
            onContextMenu: r,
            icon: (0, i.jsx)(a, { size: 'refresh_sm' }),
            ...s.events
        })
    );
}
function eF(e) {
    let { selfMute: t, serverMute: n, suppress: r, awaitingRemote: a, tooltipText: o, tooltipColor: c, tooltipForceOpen: d, onMouseEnter: u, onMouseLeave: p, onClick: f, onContextMenu: E } = e,
        C = t || r || n,
        N = l.useRef(null),
        v = (0, h.O)(C ? 'unmute' : 'mute'),
        T = (0, m.P)(C ? 'unmute' : 'mute'),
        { activeVoice: S } = (0, ec.o)(),
        { Component: Z, events: A, play: x } = null != S ? T : v,
        y = n || r ? _.v0G : Z,
        { mode: P } = (0, er.ZP)({ location: 'RTC Microphone Button' }),
        O = null != o ? o : (0, w.Z)(t, n, r, a, P === er.BK.GroupedButtonsRedMic),
        { analyticsLocations: R } = (0, L.ZP)(b.Z.AUDIO_INPUT_BUTTON),
        j = (0, eo.H)(b.Z.AUDIO_INPUT_BUTTON);
    l.useEffect(() => () => x(), [C, x]);
    let D = l.useCallback(
            (e) => {
                E(e, R);
            },
            [E, R]
        ),
        M = l.useCallback((e) => {
            var t;
            if ((0, s.k)(null == e ? void 0 : e.target, Node) && (null === (t = N.current) || void 0 === t ? void 0 : t.contains(e.target))) return g.F;
        }, []);
    return (0, i.jsx)(L.Gt, {
        value: R,
        children: (0, i.jsxs)('div', {
            ref: N,
            className: eD.micButtonParent,
            children: [
                (0, i.jsx)(eL.Z, {
                    tooltipText: O,
                    tooltipColor: c,
                    tooltipForceOpen: d,
                    onMouseEnter: () => {
                        u(), A.onMouseEnter();
                    },
                    onMouseLeave: () => {
                        p(), A.onMouseLeave();
                    },
                    icon: (0, i.jsx)(y, {
                        size: 'custom',
                        width: 20,
                        height: 20,
                        color: C ? _.TVs.colors.STATUS_DANGER : 'currentColor'
                    }),
                    iconForeground: C ? eD.strikethrough : null,
                    onClick: f,
                    onContextMenu: D,
                    role: 'switch',
                    className: j ? eD.micButtonWithMenu : void 0,
                    'aria-label': ej.intl.string(ej.t['w4m94+']),
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
                            return (0, i.jsx)(ed.l, {
                                onSettingsButtonClick: () => {
                                    t(), I.Z.open(eO.oAB.VOICE, null, { analyticsLocations: R });
                                }
                            });
                        },
                        children: (e, t) => {
                            let { isShown: n } = t,
                                l = n ? _.u04 : _.CJ0;
                            return (0, i.jsx)(eL.Z, {
                                tooltipText: ej.intl.string(ej.t.Hapb4O),
                                icon: (0, i.jsx)(l, {
                                    className: eD.buttonChevronIcon,
                                    size: 'custom',
                                    width: 12,
                                    height: 12,
                                    color: _.TVs.colors.TEXT_NORMAL
                                }),
                                role: 'button',
                                className: eD.buttonChevron,
                                'aria-label': ej.intl.string(ej.t.Hapb4O),
                                disabled: a,
                                ...e
                            });
                        }
                    })
            ]
        })
    });
}
function ez(e) {
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
        children: (0, i.jsx)(eL.Z, {
            tooltipText: (0, D.Z)(t, n, r),
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
            innerClassName: a()({ [eD.redIcon]: n }),
            iconForeground: c ? eD.strikethrough : null,
            role: 'switch',
            'aria-label': ej.intl.string(ej.t.wjcRFR),
            'aria-checked': c,
            disabled: r
        })
    });
}
