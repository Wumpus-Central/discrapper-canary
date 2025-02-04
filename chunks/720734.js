n.d(t, { Z: () => eB }), n(47120), n(653041);
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
    K = n(332473),
    Y = n(240504),
    q = n(637906),
    X = n(39370),
    Q = n(19199),
    J = n(866483),
    $ = n(14357),
    ee = n(763296),
    et = n(640806),
    en = n(184301),
    ei = n(52538),
    el = n(861254),
    er = n(879815),
    ea = n(294629),
    es = n(875527),
    eo = n(378441),
    ec = n(306609),
    ed = n(199902),
    eu = n(314897),
    eh = n(592125),
    em = n(819640),
    ep = n(131951),
    eg = n(19780),
    e_ = n(885110),
    ef = n(246946),
    eE = n(594174),
    eI = n(78839),
    eC = n(626135),
    ev = n(768581),
    eN = n(572004),
    eT = n(70956),
    eS = n(74538),
    eZ = n(374023),
    ex = n(51144),
    eA = n(998502),
    eb = n(870569),
    eL = n(345243),
    ey = n(115530),
    eP = n(981631),
    eO = n(215023),
    eR = n(388032),
    ej = n(628005);
function eD(e, t, n) {
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
let ew = eA.ZP.getEnableHardwareAcceleration() ? _.Xo$ : _.qEK,
    eM = 2 * eT.Z.Millis.MINUTE,
    ek = 30 * eT.Z.Millis.DAY;
function eU(e) {
    let { speaking: t, streaming: n, currentUser: l, status: r, handleMouseLeave: s, renderNameTag: o } = e,
        c = (0, B.Q3)('RTC Avatar'),
        d = (0, y.Z)(null == l ? void 0 : l.avatarDecoration),
        u = (0, ev.NZ)({
            avatarDecoration: d,
            size: (0, P.y9)(_.EFr.SIZE_32)
        }),
        h = (0, _.dQu)(_.TVs.modules.guildbar.AVATAR_SIZE);
    return null == l
        ? null
        : (0, i.jsx)(C.Z, {
              object: eP.qAy.AVATAR,
              children: (0, i.jsx)(_.yRy, {
                  clickTrap: !0,
                  renderPopout: (e) => {
                      let { closePopout: t, setPopoutRef: n } = e;
                      return (0, i.jsx)('div', {
                          className: ej.accountProfilePopoutWrapper,
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
                      (0, en.Z)(l, void 0, {
                          withMutualGuilds: !1,
                          withMutualFriends: !1
                      }),
                  children: (e) =>
                      (0, i.jsxs)(_.P3F, {
                          ...e,
                          'aria-label': eR.intl.string(eR.t['3Uj+2t']),
                          className: ej.avatarWrapper,
                          children: [
                              (0, i.jsx)(ew, {
                                  size: c ? _.EFr['SIZE_'.concat(h)] : _.EFr.SIZE_32,
                                  src: l.getAvatarURL(void 0, c ? h - 4 : 32, !1),
                                  avatarDecoration: u,
                                  'aria-label': l.username,
                                  status: n ? eP.Skl.STREAMING : r,
                                  isSpeaking: t,
                                  className: ej.avatar
                              }),
                              (0, i.jsx)('div', {
                                  className: a()(ej.nameTag, { [ej.canCopy]: eN.wS }),
                                  children: o()
                              })
                          ]
                      })
              })
          });
}
class eG extends l.PureComponent {
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
            t = [eR.intl.string(eR.t.MSaeTU), eR.intl.string(eR.t.UmrCw8), eR.intl.string(eR.t.gKE0Ji), eR.intl.string(eR.t['4DSKbm']), eR.intl.string(eR.t['+8ENdX']), eR.intl.string(eR.t.GlWHv7), eR.intl.string(eR.t.hIzxU1), eR.intl.string(eR.t['26uMPD']), eR.intl.string(eR.t.uFs7R0), eR.intl.string(eR.t.bLXdcX), eR.intl.string(eR.t.gPg9fX)],
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
                    textClassName: ej.activityStatusText,
                    hideTooltip: !0
                })
            });
        let o =
            null == t
                ? void 0
                : t.find((e) => {
                      let { type: t } = e;
                      return t === eP.IIU.CUSTOM_STATUS;
                  });
        return null != o
            ? (0, i.jsx)(A.Z, {
                  hoverText: s,
                  forceHover: e,
                  children: (0, i.jsx)(G.Z, {
                      activity: o,
                      emojiClassName: ej.emoji,
                      className: ej.customStatus
                  })
              })
            : null != a && a !== eP.Skl.UNKNOWN && r.isPomelo()
              ? (0, i.jsx)(A.Z, {
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
                          className: ej.panelTitleContainer,
                          children: (0, i.jsx)(ey.Z, { children: ex.ZP.getName(e) })
                      }),
                      (0, i.jsx)('div', {
                          className: ej.panelSubtextContainer,
                          children: (0, i.jsx)(eL.Z, { children: this.renderStatus() })
                      })
                  ]
              });
    }
    renderAvatarWithPopout() {
        return (0, i.jsx)(eU, {
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
                          className: ej.container,
                          onMouseEnter: this.handleMouseEnter,
                          onMouseLeave: this.handleMouseLeave,
                          children: [
                              this.renderNameZone(),
                              (0, i.jsxs)(U.Z, {
                                  grow: 0,
                                  className: ej.buttons,
                                  children: [
                                      (0, i.jsx)(eH, {
                                          selfMute: n,
                                          serverMute: r,
                                          suppress: s,
                                          awaitingRemote: l,
                                          tooltipText: d ? eR.intl.string(eR.t['29gnR0']) : void 0,
                                          tooltipColor: d ? _.FGA.GREEN : void 0,
                                          tooltipForceOpen: d || void 0,
                                          onMouseEnter: this.handleMouseEnterMute,
                                          onMouseLeave: this.handleMouseLeaveMute,
                                          onClick: this.handleToggleSelfMute,
                                          onContextMenu: this.handleInputAudioContextMenu
                                      }),
                                      (0, i.jsx)(eF, {
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
                                                          renderPopout: () => (0, i.jsx)(J.Z, { markAsDismissed: n }),
                                                          children: this.renderSettingsGear
                                                      });
                                                  case c.z.USER_SAFETY_CONSUMER_EDUCATION_MUTE:
                                                      return (0, i.jsx)(_.yRy, {
                                                          position: 'top',
                                                          align: 'center',
                                                          shouldShow: !0,
                                                          renderPopout: () => (0, i.jsx)($.Z, { markAsDismissed: n }),
                                                          children: this.renderSettingsGear
                                                      });
                                                  case c.z.SOUNDBOARD_VOLUME_EDUCATION:
                                                      return (0, i.jsx)(_.yRy, {
                                                          position: 'top',
                                                          align: 'center',
                                                          shouldShow: !0,
                                                          renderPopout: () => (0, i.jsx)(et.Z, { markAsDismissed: n }),
                                                          children: this.renderSettingsGear
                                                      });
                                                  case c.z.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK:
                                                      return (0, i.jsx)(_.yRy, {
                                                          position: 'top',
                                                          align: 'center',
                                                          shouldShow: !0,
                                                          renderPopout: () => (0, i.jsx)(ei.Z, {}),
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
            eD(this, 'copiedTimeout', new d.V7()),
            eD(this, 'copiedDecayTimeout', new d.V7()),
            eD(this, 'speakingWhileMutedTooltipTimeout', new d.V7()),
            eD(this, 'lastSpeakingWhileMutedNotificationTime', void 0),
            eD(this, 'state', {
                hovered: !1,
                copiedStreak: 0,
                shouldShowNametagTooltip: !1,
                shouldShowCopiedFeedback: !1,
                shouldShowSpeakingWhileMutedTooltip: !1,
                hoveringOnMute: !1
            }),
            eD(this, 'handleToggleSelfMute', () => {
                let { serverMute: e, suppress: t } = this.props;
                (0, M.Z)(e, t, eP.jXE.ACCOUNT_PANEL);
            }),
            eD(this, 'handleToggleSelfDeaf', () => {
                let { serverDeaf: e } = this.props;
                (0, w.Z)(e, eP.jXE.ACCOUNT_PANEL);
            }),
            eD(this, 'handleOpenAccountSettings', () => {
                this.handleOpenSettings();
            }),
            eD(this, 'handleOpenSettings', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eP.oAB.ACCOUNT,
                    t = arguments.length > 1 ? arguments[1] : void 0,
                    n = arguments.length > 2 ? arguments[2] : void 0;
                I.Z.open(e, t, n);
            }),
            eD(this, 'handleOpenSettingsContextMenu', (e) => {
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
            eD(this, 'handleInputAudioContextMenu', (e, t) => {
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
            eD(this, 'handleOutputAudioContextMenu', (e, t) => {
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
            eD(this, 'handleMouseEnter', () => {
                this.setState({ hovered: !0 });
            }),
            eD(this, 'handleMouseLeave', () => {
                this.setState({ hovered: !1 });
            }),
            eD(this, 'handleMouseEnterMute', () => {
                this.setState({
                    hoveringOnMute: !0,
                    shouldShowSpeakingWhileMutedTooltip: !1
                }),
                    this.speakingWhileMutedTooltipTimeout.stop();
            }),
            eD(this, 'handleMouseLeaveMute', () => {
                this.setState({ hoveringOnMute: !1 });
            }),
            eD(this, 'handleCopyTag', () => {
                let { currentUser: e } = this.props,
                    { shouldShowNametagTooltip: t, copiedStreak: n } = this.state;
                if (null == e) return;
                (0, eN.JG)(
                    ex.ZP.getUserTag(e, {
                        decoration: 'never',
                        identifiable: 'always'
                    })
                ),
                    eC.default.track(eP.rMx.TEXT_COPIED, { type: 'User Tag' });
                let i = {
                    shouldShowCopiedFeedback: !0,
                    shouldShowNametagTooltip: !0
                };
                t || (i.copiedStreak = n + 1),
                    this.setState(i, () => {
                        this.copiedTimeout.start(1000, () => this.setState({ shouldShowNametagTooltip: !1 })), this.copiedDecayTimeout.start(2000, () => this.setState({ copiedStreak: 0 }));
                    });
            }),
            eD(this, 'handleOccludedChanged', () => {
                let { occluded: e } = this.props;
                e &&
                    this.setState({
                        shouldShowNametagTooltip: !1,
                        shouldShowSpeakingWhileMutedTooltip: !1
                    });
            }),
            eD(this, 'handleSpeakingWhileMutedChanged', () => {
                let { selfMute: e, serverMute: t, suppress: n, speakingWhileMuted: i, occluded: l } = this.props,
                    { hoveringOnMute: r } = this.state,
                    a = void 0 === this.lastSpeakingWhileMutedNotificationTime || Date.now() - this.lastSpeakingWhileMutedNotificationTime > eM;
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
            eD(this, 'renderSettingsGear', () =>
                (0, i.jsx)(eV, {
                    isEligibleForPomelo: this.props.isEligibleForPomelo,
                    webBuildOverride: this.props.webBuildOverride,
                    onClick: this.handleOpenAccountSettings,
                    onContextMenu: this.handleOpenSettingsContextMenu
                })
            );
    }
}
function eB() {
    var e;
    let t = (0, o.e7)([eE.default], () => eE.default.getCurrentUser()),
        n = (0, o.e7)([eu.default], () => eu.default.getId()),
        {
            activities: r,
            streaming: a,
            status: s
        } = (0, o.cj)([e_.Z], () => {
            let e = e_.Z.getActivities();
            return {
                activities: e,
                streaming:
                    null !=
                    e.find((e) => {
                        let { type: t } = e;
                        return t === eP.IIU.STREAMING;
                    }),
                status: e_.Z.getStatus()
            };
        }),
        d = (0, o.e7)([ed.Z], () => ed.Z.getAnyStreamForUser(n)),
        u = (0, T.Z)({ userId: n }),
        h = ex.ZP.useUserTag(t, { decoration: 'never' }),
        m = (0, o.e7)([ef.Z], () => ef.Z.hidePersonalInformation),
        p = (0, o.e7)([eg.Z, eh.Z], () => {
            let e = eg.Z.getChannelId();
            return null != e ? eh.Z.getChannel(e) : null;
        }),
        { mute: g, selfMute: E, suppress: I } = (0, ea.Z)(p),
        { selfDeaf: C, deaf: Z } = (0, er.Z)(p),
        x = (0, o.e7)([O.C], () => {
            var e;
            return (0, R.fD)() ? (null === (e = O.C.getCurrentBuildOverride().overrides) || void 0 === e ? void 0 : e.discord_web) : null;
        }),
        A = (0, o.e7)([eI.ZP], () => eI.ZP.getPremiumTypeSubscription()),
        y = (0, o.e7)([ep.Z], () => ep.Z.getSpeakingWhileMuted()),
        P = (0, o.e7)([em.Z], () => em.Z.hasLayers()),
        j = (0, _.s9z)(_.JQI) || P || eZ.s.isDisallowPopupsSet(),
        D = (0, K.b)(),
        w = (0, o.e7)([F.Z], () => null != F.Z.getAwaitingRemoteSessionInfo()),
        M = (0, Q.D)(),
        k = (0, v.u)(),
        U = eS.ZP.canUsePremiumGuildMemberProfile(t),
        G = (null == t ? void 0 : null === (e = t.avatarDecoration) || void 0 === e ? void 0 : e.skuId) === eO.rL,
        { activityStatusCleanupEnabled: B } = (0, S.w)({ location: 'Account' }),
        H = 'account';
    (0, N.j)({
        location: H + ' auto on',
        autoTrackExposure: !0
    }),
        (0, N.j)({
            location: H + ' auto off',
            autoTrackExposure: !1
        });
    let z = (0, o.e7)([ee.Z], () => ee.Z.hasHadOtherUserPlaySoundInSession()),
        W = (function () {
            let e = (0, V.wE)(c.z.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2),
                [t, n] = (0, o.Wu)([Y.Z], () => [Y.Z.hasFetchedRelevance, Y.Z.profileThemesRelevanceExceeded]),
                [i, r] = (0, o.Wu)([eI.ZP], () => [eI.ZP.hasFetchedMostRecentPremiumTypeSubscription(), eI.ZP.getMostRecentPremiumTypeSubscription()]),
                { enabled: a } = q.Z.useExperiment({ location: '08bd40_1' }, { autoTrackExposure: !0 }),
                s = l.useMemo(() => {
                    let e = new Date().getTime();
                    return null != r && (r.status === eP.O0b.ACTIVE || e - r.currentPeriodEnd.getTime() < ek);
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
        { analyticsLocations: X } = (0, L.ZP)(b.Z.ACCOUNT),
        J = {
            avatar: [],
            settings: []
        };
    return (
        !j && (W && J.settings.push(c.z.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2), M && (1 === k ? J.settings.push(c.z.USER_SAFETY_CONSUMER_EDUCATION_MUTE) : J.settings.push(c.z.USER_SAFETY_CONSUMER_EDUCATION_BLOCK)), z && J.settings.push(c.z.SOUNDBOARD_VOLUME_EDUCATION), U && J.settings.push(c.z.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK), G && J.avatar.push(c.z.PREMIUM_SUBSCRIPTION_APRIL_MARKETING_DECO_TOOLTIP)),
        (0, i.jsx)(L.Gt, {
            value: X,
            children: (0, i.jsx)(eG, {
                currentUser: t,
                activities: r,
                activityStatusCleanupEnabled: B,
                applicationStream: d,
                dismissibleContents: J,
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
function eV(e) {
    let { webBuildOverride: t, isEligibleForPomelo: n, onClick: l, onContextMenu: r } = e,
        a = _.ewm,
        s = (0, p.i)();
    return (
        (a = null != t ? _.bgT : n ? _.Ncx : s.Component),
        (0, i.jsx)(eb.Z, {
            tooltipText: null != t ? eR.intl.formatToPlainString(eR.t.Gzh6ZG, { webBuildOverride: t.id }) : eR.intl.string(eR.t.cduTBA),
            onClick: l,
            onContextMenu: r,
            icon: (0, i.jsx)(a, { size: 'refresh_sm' }),
            ...s.events
        })
    );
}
function eH(e) {
    let { selfMute: t, serverMute: n, suppress: r, awaitingRemote: a, tooltipText: o, tooltipColor: c, tooltipForceOpen: d, onMouseEnter: u, onMouseLeave: p, onClick: f, onContextMenu: E } = e,
        C = t || r || n,
        v = l.useRef(null),
        N = (0, h.O)(C ? 'unmute' : 'mute'),
        T = (0, m.P)(C ? 'unmute' : 'mute'),
        { activeVoice: S } = (0, eo.o)(),
        { Component: Z, events: x, play: A } = null != S ? T : N,
        y = n || r ? _.v0G : Z,
        { mode: P } = (0, el.ZP)({ location: 'RTC Microphone Button' }),
        O = null != o ? o : (0, D.Z)(t, n, r, a, P === el.BK.GroupedButtonsRedMic),
        { analyticsLocations: R } = (0, L.ZP)(b.Z.AUDIO_INPUT_BUTTON),
        j = (0, es.H)(b.Z.AUDIO_INPUT_BUTTON);
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
            className: ej.micButtonParent,
            children: [
                (0, i.jsx)(eb.Z, {
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
                    iconForeground: C ? ej.strikethrough : null,
                    onClick: f,
                    onContextMenu: w,
                    role: 'switch',
                    className: j ? ej.micButtonWithMenu : void 0,
                    'aria-label': eR.intl.string(eR.t['w4m94+']),
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
                            return (0, i.jsx)(ec.l, {
                                onSettingsButtonClick: () => {
                                    t(), I.Z.open(eP.oAB.VOICE, null, { analyticsLocations: R });
                                }
                            });
                        },
                        children: (e, t) => {
                            let { isShown: n } = t,
                                l = n ? _.u04 : _.CJ0;
                            return (0, i.jsx)(eb.Z, {
                                tooltipText: eR.intl.string(eR.t.Hapb4O),
                                icon: (0, i.jsx)(l, {
                                    className: ej.buttonChevronIcon,
                                    size: 'custom',
                                    width: 12,
                                    height: 12,
                                    color: _.TVs.colors.TEXT_NORMAL
                                }),
                                role: 'button',
                                className: ej.buttonChevron,
                                'aria-label': eR.intl.string(eR.t.Hapb4O),
                                disabled: a,
                                ...e
                            });
                        }
                    })
            ]
        })
    });
}
function eF(e) {
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
        children: (0, i.jsx)(eb.Z, {
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
            innerClassName: a()({ [ej.redIcon]: n }),
            iconForeground: c ? ej.strikethrough : null,
            role: 'switch',
            'aria-label': eR.intl.string(eR.t.wjcRFR),
            'aria-checked': c,
            disabled: r
        })
    });
}
