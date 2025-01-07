n.d(t, {
    Z: function () {
        return eD;
    }
}),
    n(47120),
    n(653041);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(442837),
    o = n(704215),
    c = n(846519),
    d = n(400354),
    u = n(652844),
    h = n(789639),
    m = n(481060),
    p = n(355467),
    g = n(239091),
    f = n(230711),
    _ = n(410575),
    E = n(941129),
    I = n(634894),
    C = n(586902),
    N = n(570928),
    v = n(100527),
    S = n(906732),
    T = n(676742),
    A = n(1585),
    b = n(304761),
    Z = n(865427),
    x = n(571250),
    L = n(628581),
    P = n(55311),
    O = n(575175),
    y = n(64220),
    R = n(377171),
    j = n(600164),
    D = n(676035),
    M = n(427217),
    w = n(540059),
    k = n(605236),
    U = n(243778),
    G = n(258609),
    B = n(427347),
    V = n(443669),
    H = n(332473),
    F = n(240504),
    z = n(637906),
    W = n(39370),
    Y = n(19199),
    K = n(111653),
    q = n(866483),
    X = n(14357),
    Q = n(393333),
    J = n(763296),
    $ = n(640806),
    ee = n(184301),
    et = n(52538),
    en = n(861254),
    ei = n(879815),
    er = n(294629),
    el = n(314897),
    ea = n(592125),
    es = n(819640),
    eo = n(131951),
    ec = n(19780),
    ed = n(885110),
    eu = n(246946),
    eh = n(594174),
    em = n(78839),
    ep = n(626135),
    eg = n(768581),
    ef = n(572004),
    e_ = n(70956),
    eE = n(74538),
    eI = n(374023),
    eC = n(51144),
    eN = n(998502),
    ev = n(870569),
    eS = n(345243),
    eT = n(115530),
    eA = n(981631),
    eb = n(215023),
    eZ = n(388032),
    ex = n(628005);
function eL(e, t, n) {
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
let eP = eN.ZP.getEnableHardwareAcceleration() ? m.AnimatedAvatar : m.Avatar,
    eO = 2 * e_.Z.Millis.MINUTE,
    ey = 30 * e_.Z.Millis.DAY;
function eR(e) {
    let { speaking: t, streaming: n, currentUser: r, status: l, handleMouseLeave: s, renderNameTag: o } = e,
        c = (0, w.Q3)('RTC Avatar'),
        d = (0, T.Z)(null == r ? void 0 : r.avatarDecoration),
        u = (0, eg.NZ)({
            avatarDecoration: d,
            size: (0, A.y9)(m.AvatarSizes.SIZE_32)
        });
    return null == r
        ? null
        : (0, i.jsx)(_.Z, {
              object: eA.qAy.AVATAR,
              children: (0, i.jsx)(m.Popout, {
                  renderPopout: (e) => {
                      let { closePopout: t, setPopoutRef: n } = e;
                      return (0, i.jsx)('div', {
                          className: ex.accountProfilePopoutWrapper,
                          children: (0, i.jsx)(V.Z, {
                              currentUser: r,
                              setPopoutRef: n,
                              onClose: () => {
                                  s(), null == t || t();
                              }
                          })
                      });
                  },
                  position: 'top',
                  align: 'left',
                  animation: m.Popout.Animation.FADE,
                  spacing: 14,
                  fixed: !0,
                  preload: () =>
                      (0, ee.Z)(r, void 0, {
                          withMutualGuilds: !1,
                          withMutualFriends: !1
                      }),
                  children: (e) =>
                      (0, i.jsxs)(m.Clickable, {
                          ...e,
                          'aria-label': eZ.intl.string(eZ.t['3Uj+2t']),
                          className: ex.avatarWrapper,
                          children: [
                              (0, i.jsx)(eP, {
                                  size: c ? m.AvatarSizes.SIZE_44 : m.AvatarSizes.SIZE_32,
                                  src: r.getAvatarURL(void 0, c ? 44 : 32, !1),
                                  avatarDecoration: u,
                                  'aria-label': r.username,
                                  status: n ? eA.Skl.STREAMING : l,
                                  isSpeaking: t,
                                  className: ex.avatar
                              }),
                              (0, i.jsx)('div', {
                                  className: a()(ex.nameTag, { [ex.canCopy]: ef.wS }),
                                  children: o()
                              })
                          ]
                      })
              })
          });
}
class ej extends r.PureComponent {
    get isCopiedStreakGodlike() {
        let { copiedStreak: e } = this.state;
        return e >= 10;
    }
    componentDidUpdate(e) {
        let { speakingWhileMuted: t, occluded: n } = e,
            { speakingWhileMuted: i, occluded: r } = this.props;
        r !== n && this.handleOccludedChanged(), i !== t && this.handleSpeakingWhileMutedChanged();
    }
    componentWillUnmount() {
        this.copiedTimeout.stop(), this.copiedDecayTimeout.stop(), this.speakingWhileMutedTooltipTimeout.stop();
    }
    renderCopiedSuccess() {
        let { copiedStreak: e } = this.state,
            t = [eZ.intl.string(eZ.t.MSaeTU), eZ.intl.string(eZ.t.UmrCw8), eZ.intl.string(eZ.t.gKE0Ji), eZ.intl.string(eZ.t['4DSKbm']), eZ.intl.string(eZ.t['+8ENdX']), eZ.intl.string(eZ.t.GlWHv7), eZ.intl.string(eZ.t.hIzxU1), eZ.intl.string(eZ.t['26uMPD']), eZ.intl.string(eZ.t.uFs7R0), eZ.intl.string(eZ.t.bLXdcX), eZ.intl.string(eZ.t.gPg9fX)],
            n = Math.min(Math.max(0, e - 1), t.length - 1);
        return (0, i.jsx)(m.Shaker, {
            isShaking: this.isCopiedStreakGodlike,
            children: t[n]
        });
    }
    renderNameTag() {
        let e;
        let { hovered: t } = this.state,
            { customStatusActivity: n, userTag: r, currentUser: l, status: a } = this.props;
        if (null == l) return null;
        let s = eC.ZP.getName(l),
            o = null != a && a !== eA.Skl.UNKNOWN,
            c = null != n;
        return (
            (c || (o && l.isPomelo())) &&
                (e = (0, i.jsx)(N.Z, {
                    hoverText: r,
                    forceHover: t,
                    children: c
                        ? (0, i.jsx)(M.Z, {
                              activity: n,
                              emojiClassName: ex.emoji,
                              className: ex.customStatus
                          })
                        : eC.ZP.humanizeStatus(a)
                })),
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)('div', {
                        className: ex.panelTitleContainer,
                        children: (0, i.jsx)(eT.Z, { children: s })
                    }),
                    (0, i.jsx)('div', {
                        className: ex.panelSubtextContainer,
                        children: (0, i.jsx)(eS.Z, { children: null != e ? e : r })
                    })
                ]
            })
        );
    }
    renderAvatarWithPopout() {
        return (0, i.jsx)(eR, {
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
                  children: (0, i.jsx)(U.ZP, {
                      contentTypes: t.avatar,
                      children: (e) => {
                          let { visibleContent: t, markAsDismissed: n } = e;
                          if (t === o.z.PREMIUM_SUBSCRIPTION_APRIL_MARKETING_DECO_TOOLTIP)
                              return (0, i.jsx)(y.Z, {
                                  markAsDismissed: n,
                                  children: () => this.renderAvatarWithPopout()
                              });
                          return this.renderAvatarWithPopout();
                      }
                  })
              });
    }
    render() {
        let { currentUser: e, selfDeaf: t, selfMute: n, awaitingRemote: r, serverMute: l, serverDeaf: a, suppress: s, dismissibleContents: c } = this.props,
            { shouldShowSpeakingWhileMutedTooltip: d } = this.state;
        return null == e
            ? null
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsxs)('div', {
                          className: ex.container,
                          onMouseEnter: this.handleMouseEnter,
                          onMouseLeave: this.handleMouseLeave,
                          children: [
                              this.renderNameZone(),
                              (0, i.jsxs)(j.Z, {
                                  grow: 0,
                                  className: ex.buttons,
                                  children: [
                                      (0, i.jsx)(ew, {
                                          selfMute: n,
                                          serverMute: l,
                                          suppress: s,
                                          awaitingRemote: r,
                                          tooltipText: d ? eZ.intl.string(eZ.t['29gnR0']) : void 0,
                                          tooltipColor: d ? m.TooltipColors.GREEN : void 0,
                                          tooltipForceOpen: d || void 0,
                                          onMouseEnter: this.handleMouseEnterMute,
                                          onMouseLeave: this.handleMouseLeaveMute,
                                          onClick: this.handleToggleSelfMute,
                                          onContextMenu: this.handleInputAudioContextMenu
                                      }),
                                      (0, i.jsx)(ek, {
                                          selfDeaf: t,
                                          serverDeaf: a,
                                          onClick: this.handleToggleSelfDeaf,
                                          onContextMenu: this.handleOutputAudioContextMenu,
                                          awaitingRemote: r
                                      }),
                                      (0, i.jsx)(U.ZP, {
                                          contentTypes: c.settings,
                                          children: (e) => {
                                              let { visibleContent: t, markAsDismissed: n } = e;
                                              switch (t) {
                                                  case o.z.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2:
                                                      return (0, i.jsx)(m.Popout, {
                                                          position: 'top',
                                                          align: 'center',
                                                          shouldShow: !0,
                                                          renderPopout: () => (0, i.jsx)(W.Z, {}),
                                                          children: this.renderSettingsGear
                                                      });
                                                  case o.z.USER_SAFETY_CONSUMER_EDUCATION_BLOCK:
                                                      return (0, i.jsx)(m.Popout, {
                                                          position: 'top',
                                                          align: 'center',
                                                          shouldShow: !0,
                                                          renderPopout: () => (0, i.jsx)(q.Z, { markAsDismissed: n }),
                                                          children: this.renderSettingsGear
                                                      });
                                                  case o.z.USER_SAFETY_CONSUMER_EDUCATION_MUTE:
                                                      return (0, i.jsx)(m.Popout, {
                                                          position: 'top',
                                                          align: 'center',
                                                          shouldShow: !0,
                                                          renderPopout: () => (0, i.jsx)(X.Z, { markAsDismissed: n }),
                                                          children: this.renderSettingsGear
                                                      });
                                                  case o.z.SOUNDBOARD_VOLUME_EDUCATION:
                                                      return (0, i.jsx)(m.Popout, {
                                                          position: 'top',
                                                          align: 'center',
                                                          shouldShow: !0,
                                                          renderPopout: () => (0, i.jsx)($.Z, { markAsDismissed: n }),
                                                          children: this.renderSettingsGear
                                                      });
                                                  case o.z.USER_SAFETY_CONSUMER_EDUCATION_REPORTING:
                                                      return (0, i.jsx)(m.Popout, {
                                                          position: 'top',
                                                          align: 'center',
                                                          shouldShow: !0,
                                                          renderPopout: () => (0, i.jsx)(Q.P, { markAsDismissed: n }),
                                                          children: this.renderSettingsGear
                                                      });
                                                  case o.z.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK:
                                                      return (0, i.jsx)(m.Popout, {
                                                          position: 'top',
                                                          align: 'center',
                                                          shouldShow: !0,
                                                          renderPopout: () => (0, i.jsx)(et.Z, {}),
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
                      (0, i.jsx)(B.Z, {})
                  ]
              });
    }
    constructor(...e) {
        super(...e),
            eL(this, 'copiedTimeout', new c.V7()),
            eL(this, 'copiedDecayTimeout', new c.V7()),
            eL(this, 'speakingWhileMutedTooltipTimeout', new c.V7()),
            eL(this, 'lastSpeakingWhileMutedNotificationTime', void 0),
            eL(this, 'state', {
                hovered: !1,
                copiedStreak: 0,
                shouldShowNametagTooltip: !1,
                shouldShowCopiedFeedback: !1,
                shouldShowSpeakingWhileMutedTooltip: !1,
                hoveringOnMute: !1
            }),
            eL(this, 'handleToggleSelfMute', () => {
                let { serverMute: e, suppress: t } = this.props;
                (0, O.Z)(e, t, eA.jXE.ACCOUNT_PANEL);
            }),
            eL(this, 'handleToggleSelfDeaf', () => {
                let { serverDeaf: e } = this.props;
                (0, P.Z)(e, eA.jXE.ACCOUNT_PANEL);
            }),
            eL(this, 'handleOpenAccountSettings', () => {
                this.handleOpenSettings();
            }),
            eL(this, 'handleOpenSettings', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eA.oAB.ACCOUNT,
                    t = arguments.length > 1 ? arguments[1] : void 0,
                    n = arguments.length > 2 ? arguments[2] : void 0;
                f.Z.open(e, t, n);
            }),
            eL(this, 'handleOpenSettingsContextMenu', (e) => {
                let { currentUser: t } = this.props;
                null != t &&
                    (0, g.jW)(e, async () => {
                        let { default: e } = await Promise.all([n.e('23217'), n.e('33053'), n.e('8016'), n.e('15669'), n.e('76540'), n.e('17938'), n.e('22646'), n.e('3940'), n.e('48923'), n.e('30419'), n.e('8821'), n.e('18824'), n.e('38175'), n.e('44889')]).then(n.bind(n, 923422));
                        return (n) =>
                            (0, i.jsx)(e, {
                                ...n,
                                user: t,
                                premiumSubscription: this.props.premiumSubscription,
                                webBuildOverride: this.props.webBuildOverride
                            });
                    });
            }),
            eL(this, 'handleInputAudioContextMenu', (e, t) => {
                (0, g.jW)(e, async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 659580));
                    return () =>
                        (0, i.jsx)(S.Gt, {
                            value: t,
                            children: (0, i.jsx)(e, {
                                onClose: g.Zy,
                                renderInputDevices: !0,
                                renderInputModes: !0,
                                renderInputVolume: !0
                            })
                        });
                });
            }),
            eL(this, 'handleOutputAudioContextMenu', (e, t) => {
                (0, g.jW)(e, async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 659580));
                    return () =>
                        (0, i.jsx)(S.Gt, {
                            value: t,
                            children: (0, i.jsx)(e, {
                                onClose: g.Zy,
                                renderOutputDevices: !0,
                                renderOutputVolume: !0
                            })
                        });
                });
            }),
            eL(this, 'handleMouseEnter', () => {
                this.setState({ hovered: !0 });
            }),
            eL(this, 'handleMouseLeave', () => {
                this.setState({ hovered: !1 });
            }),
            eL(this, 'handleMouseEnterMute', () => {
                this.setState({
                    hoveringOnMute: !0,
                    shouldShowSpeakingWhileMutedTooltip: !1
                }),
                    this.speakingWhileMutedTooltipTimeout.stop();
            }),
            eL(this, 'handleMouseLeaveMute', () => {
                this.setState({ hoveringOnMute: !1 });
            }),
            eL(this, 'handleCopyTag', () => {
                let { currentUser: e } = this.props,
                    { shouldShowNametagTooltip: t, copiedStreak: n } = this.state;
                if (null == e) return;
                (0, ef.JG)(
                    eC.ZP.getUserTag(e, {
                        decoration: 'never',
                        identifiable: 'always'
                    })
                ),
                    ep.default.track(eA.rMx.TEXT_COPIED, { type: 'User Tag' });
                let i = {
                    shouldShowCopiedFeedback: !0,
                    shouldShowNametagTooltip: !0
                };
                !t && (i.copiedStreak = n + 1),
                    this.setState(i, () => {
                        this.copiedTimeout.start(1000, () => this.setState({ shouldShowNametagTooltip: !1 })), this.copiedDecayTimeout.start(2000, () => this.setState({ copiedStreak: 0 }));
                    });
            }),
            eL(this, 'handleOccludedChanged', () => {
                let { occluded: e } = this.props;
                e &&
                    this.setState({
                        shouldShowNametagTooltip: !1,
                        shouldShowSpeakingWhileMutedTooltip: !1
                    });
            }),
            eL(this, 'handleSpeakingWhileMutedChanged', () => {
                let { selfMute: e, serverMute: t, suppress: n, speakingWhileMuted: i, occluded: r } = this.props,
                    { hoveringOnMute: l } = this.state,
                    a = void 0 === this.lastSpeakingWhileMutedNotificationTime || Date.now() - this.lastSpeakingWhileMutedNotificationTime > eO;
                i
                    ? !l &&
                      e &&
                      !t &&
                      !n &&
                      !r &&
                      a &&
                      this.setState({ shouldShowSpeakingWhileMutedTooltip: !0 }, () => {
                          (this.lastSpeakingWhileMutedNotificationTime = Date.now()), this.speakingWhileMutedTooltipTimeout.start(2000, () => this.setState({ shouldShowSpeakingWhileMutedTooltip: !1 }));
                      })
                    : (this.setState({ shouldShowSpeakingWhileMutedTooltip: !1 }), this.speakingWhileMutedTooltipTimeout.stop());
            }),
            eL(this, 'renderSettingsGear', () =>
                (0, i.jsx)(eM, {
                    isEligibleForPomelo: this.props.isEligibleForPomelo,
                    webBuildOverride: this.props.webBuildOverride,
                    onClick: this.handleOpenAccountSettings,
                    onContextMenu: this.handleOpenSettingsContextMenu
                })
            );
    }
}
function eD() {
    var e;
    let t = (0, s.e7)([eh.default], () => eh.default.getCurrentUser()),
        n = (0, s.e7)([el.default], () => el.default.getId()),
        l = (0, D.a)(),
        { streaming: a, status: c } = (0, s.cj)([ed.Z], () => ({
            streaming: null != ed.Z.findActivity((e) => e.type === eA.IIU.STREAMING),
            status: ed.Z.getStatus()
        })),
        d = (0, C.Z)({ userId: n }),
        u = eC.ZP.useUserTag(t, { decoration: 'never' }),
        h = (0, s.e7)([eu.Z], () => eu.Z.hidePersonalInformation),
        g = (0, s.e7)([ec.Z, ea.Z], () => {
            let e = ec.Z.getChannelId();
            return null != e ? ea.Z.getChannel(e) : null;
        }),
        { mute: f, selfMute: _, suppress: N } = (0, er.Z)(g),
        { selfDeaf: T, deaf: A } = (0, ei.Z)(g),
        x = (0, s.e7)([b.C], () => {
            var e;
            return (0, Z.fD)() ? (null === (e = b.C.getCurrentBuildOverride().overrides) || void 0 === e ? void 0 : e.discord_web) : null;
        }),
        L = (0, s.e7)([em.ZP], () => em.ZP.getPremiumTypeSubscription()),
        P = (0, s.e7)([eo.Z], () => eo.Z.getSpeakingWhileMuted()),
        O = (0, s.e7)([es.Z], () => es.Z.hasLayers()),
        y = (0, m.useModalsStore)(m.hasAnyModalOpenSelector) || O || eI.s.isDisallowPopupsSet(),
        R = (0, H.b)(),
        j = (0, s.e7)([G.Z], () => null != G.Z.getAwaitingRemoteSessionInfo()),
        M = (0, Y.D)(),
        w = (0, E.u)(),
        U = (0, K.t)(),
        B = eE.ZP.canUsePremiumGuildMemberProfile(t),
        V = (null == t ? void 0 : null === (e = t.avatarDecoration) || void 0 === e ? void 0 : e.skuId) === eb.rL,
        W = 'account';
    (0, I.j)({
        location: W + ' auto on',
        autoTrackExposure: !0
    }),
        (0, I.j)({
            location: W + ' auto off',
            autoTrackExposure: !1
        });
    let q = (0, s.e7)([J.Z], () => J.Z.hasHadOtherUserPlaySoundInSession()),
        X = (function () {
            let e = (0, k.wE)(o.z.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2),
                [t, n] = (0, s.Wu)([F.Z], () => [F.Z.hasFetchedRelevance, F.Z.profileThemesRelevanceExceeded]),
                [i, l] = (0, s.Wu)([em.ZP], () => [em.ZP.hasFetchedMostRecentPremiumTypeSubscription(), em.ZP.getMostRecentPremiumTypeSubscription()]),
                { enabled: a } = z.Z.useExperiment({ location: '08bd40_1' }, { autoTrackExposure: !0 }),
                c = r.useMemo(() => {
                    let e = new Date().getTime();
                    return null != l && (l.status === eA.O0b.ACTIVE || e - l.currentPeriodEnd.getTime() < ey);
                }, [l]);
            return (
                r.useEffect(() => {
                    (async () => {
                        if (e || null != n || !a) return;
                        if (!i) {
                            await (0, p.ou)();
                            return;
                        }
                        if (!c) !t && (await (0, p.l0)());
                    })();
                }, [a, n, e, i, t, c]),
                !e && !!a && !c && null != n && n
            );
        })(),
        { analyticsLocations: Q } = (0, S.ZP)(v.Z.ACCOUNT),
        $ = {
            avatar: [],
            settings: []
        };
    return (
        !y && (X && $.settings.push(o.z.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2), M && (1 === w ? $.settings.push(o.z.USER_SAFETY_CONSUMER_EDUCATION_MUTE) : $.settings.push(o.z.USER_SAFETY_CONSUMER_EDUCATION_BLOCK)), q && $.settings.push(o.z.SOUNDBOARD_VOLUME_EDUCATION), U && $.settings.push(o.z.USER_SAFETY_CONSUMER_EDUCATION_REPORTING), B && $.settings.push(o.z.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK), V && $.avatar.push(o.z.PREMIUM_SUBSCRIPTION_APRIL_MARKETING_DECO_TOOLTIP)),
        (0, i.jsx)(S.Gt, {
            value: Q,
            children: (0, i.jsx)(ej, {
                currentUser: t,
                customStatusActivity: l,
                dismissibleContents: $,
                userTag: u,
                hidePrivateData: h,
                occluded: y,
                premiumSubscription: L,
                selfDeaf: T,
                selfMute: _,
                serverDeaf: A,
                serverMute: f,
                speaking: d,
                speakingWhileMuted: P,
                status: c,
                streaming: a,
                suppress: N,
                webBuildOverride: x,
                awaitingRemote: j,
                isEligibleForPomelo: R
            })
        })
    );
}
function eM(e) {
    let { webBuildOverride: t, isEligibleForPomelo: n, onClick: r, onContextMenu: l } = e,
        a = (0, m.useRedesignIconContext)().enabled,
        s = null,
        o = m.SettingsIcon,
        c = (0, h.i)();
    return (
        a
            ? (o = null != t ? m.SettingsInfoIcon : n ? m.SettingsCircleIcon : c.Component)
            : null != t
              ? (s = (0, i.jsx)(m.CircleInformationIcon, {
                    size: 'custom',
                    color: 'currentColor',
                    width: 9,
                    height: 9,
                    className: ex.hasBuildOverride,
                    'aria-hidden': !0
                }))
              : n &&
                (s = (0, i.jsx)(m.CircleBadge, {
                    color: R.Z.STATUS_DANGER,
                    className: ex.hasBuildOverride,
                    'aria-hidden': !0
                })),
        (0, i.jsx)(ev.Z, {
            tooltipText: null != t ? eZ.intl.formatToPlainString(eZ.t.Gzh6ZG, { webBuildOverride: t.id }) : eZ.intl.string(eZ.t.cduTBA),
            onClick: r,
            onContextMenu: l,
            innerClassName: null != t || n ? ex.buildOverrideButton : null,
            icon: o,
            ...c.events,
            children: s
        })
    );
}
function ew(e) {
    let { selfMute: t, serverMute: n, suppress: l, awaitingRemote: a, tooltipText: s, tooltipColor: o, tooltipForceOpen: c, onMouseEnter: d, onMouseLeave: h, onClick: p, onContextMenu: g } = e,
        f = t || l || n,
        { Component: _, play: E, events: I } = (0, u.O)(f ? 'unmute' : 'mute'),
        C = n || l ? m.MicrophoneDenyIcon : _,
        { mode: N } = (0, en.ZP)({ location: 'RTC Microphone Button' }),
        T = null != s ? s : (0, L.Z)(t, n, l, a, N === en.BK.GroupedButtonsRedMic),
        { analyticsLocations: A } = (0, S.ZP)(v.Z.AUDIO_INPUT_BUTTON);
    r.useEffect(() => () => E(), [f, E]);
    let b = r.useCallback(
        (e) => {
            g(e, A);
        },
        [g, A]
    );
    return (0, i.jsx)(S.Gt, {
        value: A,
        children: (0, i.jsx)(ev.Z, {
            tooltipText: T,
            tooltipColor: o,
            tooltipForceOpen: c,
            onMouseEnter: () => {
                d(), I.onMouseEnter();
            },
            onMouseLeave: () => {
                h(), I.onMouseLeave();
            },
            icon: (0, i.jsx)(C, {
                size: 'custom',
                width: 20,
                height: 20,
                color: f ? m.tokens.colors.STATUS_DANGER : 'currentColor'
            }),
            iconForeground: f ? ex.strikethrough : null,
            onClick: p,
            onContextMenu: b,
            role: 'switch',
            'aria-label': eZ.intl.string(eZ.t['w4m94+']),
            'aria-checked': f,
            disabled: a
        })
    });
}
function ek(e) {
    let { selfDeaf: t, serverDeaf: n, awaitingRemote: l, onClick: s, onContextMenu: o } = e,
        c = t || n,
        {
            Component: u,
            play: h,
            events: { onMouseEnter: p, onMouseLeave: g }
        } = (0, d.l)(c ? 'undeafen' : 'deafen'),
        f = n ? m.HeadphonesDenyIcon : u,
        { analyticsLocations: _ } = (0, S.ZP)(v.Z.AUDIO_OUTPUT_BUTTON);
    r.useEffect(() => () => h(), [c, h]);
    let E = r.useCallback(
        (e) => {
            o(e, _);
        },
        [o, _]
    );
    return (0, i.jsx)(S.Gt, {
        value: _,
        children: (0, i.jsx)(ev.Z, {
            tooltipText: (0, x.Z)(t, n, l),
            onMouseEnter: p,
            onMouseLeave: g,
            icon: (0, i.jsx)(f, {
                size: 'custom',
                width: 20,
                height: 20,
                color: c ? m.tokens.colors.STATUS_DANGER : 'currentColor'
            }),
            onClick: s,
            onContextMenu: E,
            innerClassName: a()({ [ex.redIcon]: n }),
            iconForeground: c ? ex.strikethrough : null,
            role: 'switch',
            'aria-label': eZ.intl.string(eZ.t.wjcRFR),
            'aria-checked': c,
            disabled: l
        })
    });
}
