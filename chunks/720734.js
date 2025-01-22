n.d(t, {
    Z: function () {
        return ej;
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
    b = n(1585),
    A = n(304761),
    Z = n(865427),
    x = n(571250),
    L = n(628581),
    y = n(55311),
    P = n(575175),
    O = n(64220),
    R = n(600164),
    j = n(676035),
    D = n(427217),
    M = n(540059),
    w = n(605236),
    k = n(243778),
    U = n(258609),
    G = n(427347),
    B = n(443669),
    H = n(332473),
    V = n(240504),
    F = n(637906),
    z = n(39370),
    W = n(19199),
    Y = n(111653),
    K = n(866483),
    q = n(14357),
    X = n(393333),
    Q = n(763296),
    J = n(640806),
    $ = n(184301),
    ee = n(52538),
    et = n(861254),
    en = n(879815),
    ei = n(294629),
    er = n(314897),
    el = n(592125),
    ea = n(819640),
    es = n(131951),
    eo = n(19780),
    ec = n(885110),
    ed = n(246946),
    eu = n(594174),
    eh = n(78839),
    em = n(626135),
    ep = n(768581),
    eg = n(572004),
    ef = n(70956),
    e_ = n(74538),
    eE = n(374023),
    eI = n(51144),
    eC = n(998502),
    eN = n(870569),
    ev = n(345243),
    eS = n(115530),
    eT = n(981631),
    eb = n(215023),
    eA = n(388032),
    eZ = n(628005);
function ex(e, t, n) {
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
let eL = eC.ZP.getEnableHardwareAcceleration() ? m.AnimatedAvatar : m.Avatar,
    ey = 2 * ef.Z.Millis.MINUTE,
    eP = 30 * ef.Z.Millis.DAY;
function eO(e) {
    let { speaking: t, streaming: n, currentUser: r, status: l, handleMouseLeave: s, renderNameTag: o } = e,
        c = (0, M.Q3)('RTC Avatar'),
        d = (0, T.Z)(null == r ? void 0 : r.avatarDecoration),
        u = (0, ep.NZ)({
            avatarDecoration: d,
            size: (0, b.y9)(m.AvatarSizes.SIZE_32)
        }),
        h = (0, m.useToken)(m.tokens.modules.guildbar.AVATAR_SIZE);
    return null == r
        ? null
        : (0, i.jsx)(_.Z, {
              object: eT.qAy.AVATAR,
              children: (0, i.jsx)(m.Popout, {
                  clickTrap: !0,
                  renderPopout: (e) => {
                      let { closePopout: t, setPopoutRef: n } = e;
                      return (0, i.jsx)('div', {
                          className: eZ.accountProfilePopoutWrapper,
                          children: (0, i.jsx)(B.Z, {
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
                      (0, $.Z)(r, void 0, {
                          withMutualGuilds: !1,
                          withMutualFriends: !1
                      }),
                  children: (e) =>
                      (0, i.jsxs)(m.Clickable, {
                          ...e,
                          'aria-label': eA.intl.string(eA.t['3Uj+2t']),
                          className: eZ.avatarWrapper,
                          children: [
                              (0, i.jsx)(eL, {
                                  size: c ? m.AvatarSizes['SIZE_'.concat(h)] : m.AvatarSizes.SIZE_32,
                                  src: r.getAvatarURL(void 0, c ? h - 4 : 32, !1),
                                  avatarDecoration: u,
                                  'aria-label': r.username,
                                  status: n ? eT.Skl.STREAMING : l,
                                  isSpeaking: t,
                                  className: eZ.avatar
                              }),
                              (0, i.jsx)('div', {
                                  className: a()(eZ.nameTag, { [eZ.canCopy]: eg.wS }),
                                  children: o()
                              })
                          ]
                      })
              })
          });
}
class eR extends r.PureComponent {
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
            t = [eA.intl.string(eA.t.MSaeTU), eA.intl.string(eA.t.UmrCw8), eA.intl.string(eA.t.gKE0Ji), eA.intl.string(eA.t['4DSKbm']), eA.intl.string(eA.t['+8ENdX']), eA.intl.string(eA.t.GlWHv7), eA.intl.string(eA.t.hIzxU1), eA.intl.string(eA.t['26uMPD']), eA.intl.string(eA.t.uFs7R0), eA.intl.string(eA.t.bLXdcX), eA.intl.string(eA.t.gPg9fX)],
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
        let s = eI.ZP.getName(l),
            o = null != a && a !== eT.Skl.UNKNOWN,
            c = null != n;
        return (
            (c || (o && l.isPomelo())) &&
                (e = (0, i.jsx)(N.Z, {
                    hoverText: r,
                    forceHover: t,
                    children: c
                        ? (0, i.jsx)(D.Z, {
                              activity: n,
                              emojiClassName: eZ.emoji,
                              className: eZ.customStatus
                          })
                        : eI.ZP.humanizeStatus(a)
                })),
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)('div', {
                        className: eZ.panelTitleContainer,
                        children: (0, i.jsx)(eS.Z, { children: s })
                    }),
                    (0, i.jsx)('div', {
                        className: eZ.panelSubtextContainer,
                        children: (0, i.jsx)(ev.Z, { children: null != e ? e : r })
                    })
                ]
            })
        );
    }
    renderAvatarWithPopout() {
        return (0, i.jsx)(eO, {
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
                  children: (0, i.jsx)(k.ZP, {
                      contentTypes: t.avatar,
                      children: (e) => {
                          let { visibleContent: t, markAsDismissed: n } = e;
                          if (t === o.z.PREMIUM_SUBSCRIPTION_APRIL_MARKETING_DECO_TOOLTIP)
                              return (0, i.jsx)(O.Z, {
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
                          className: eZ.container,
                          onMouseEnter: this.handleMouseEnter,
                          onMouseLeave: this.handleMouseLeave,
                          children: [
                              this.renderNameZone(),
                              (0, i.jsxs)(R.Z, {
                                  grow: 0,
                                  className: eZ.buttons,
                                  children: [
                                      (0, i.jsx)(eM, {
                                          selfMute: n,
                                          serverMute: l,
                                          suppress: s,
                                          awaitingRemote: r,
                                          tooltipText: d ? eA.intl.string(eA.t['29gnR0']) : void 0,
                                          tooltipColor: d ? m.TooltipColors.GREEN : void 0,
                                          tooltipForceOpen: d || void 0,
                                          onMouseEnter: this.handleMouseEnterMute,
                                          onMouseLeave: this.handleMouseLeaveMute,
                                          onClick: this.handleToggleSelfMute,
                                          onContextMenu: this.handleInputAudioContextMenu
                                      }),
                                      (0, i.jsx)(ew, {
                                          selfDeaf: t,
                                          serverDeaf: a,
                                          onClick: this.handleToggleSelfDeaf,
                                          onContextMenu: this.handleOutputAudioContextMenu,
                                          awaitingRemote: r
                                      }),
                                      (0, i.jsx)(k.ZP, {
                                          contentTypes: c.settings,
                                          children: (e) => {
                                              let { visibleContent: t, markAsDismissed: n } = e;
                                              switch (t) {
                                                  case o.z.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2:
                                                      return (0, i.jsx)(m.Popout, {
                                                          position: 'top',
                                                          align: 'center',
                                                          shouldShow: !0,
                                                          renderPopout: () => (0, i.jsx)(z.Z, {}),
                                                          children: this.renderSettingsGear
                                                      });
                                                  case o.z.USER_SAFETY_CONSUMER_EDUCATION_BLOCK:
                                                      return (0, i.jsx)(m.Popout, {
                                                          position: 'top',
                                                          align: 'center',
                                                          shouldShow: !0,
                                                          renderPopout: () => (0, i.jsx)(K.Z, { markAsDismissed: n }),
                                                          children: this.renderSettingsGear
                                                      });
                                                  case o.z.USER_SAFETY_CONSUMER_EDUCATION_MUTE:
                                                      return (0, i.jsx)(m.Popout, {
                                                          position: 'top',
                                                          align: 'center',
                                                          shouldShow: !0,
                                                          renderPopout: () => (0, i.jsx)(q.Z, { markAsDismissed: n }),
                                                          children: this.renderSettingsGear
                                                      });
                                                  case o.z.SOUNDBOARD_VOLUME_EDUCATION:
                                                      return (0, i.jsx)(m.Popout, {
                                                          position: 'top',
                                                          align: 'center',
                                                          shouldShow: !0,
                                                          renderPopout: () => (0, i.jsx)(J.Z, { markAsDismissed: n }),
                                                          children: this.renderSettingsGear
                                                      });
                                                  case o.z.USER_SAFETY_CONSUMER_EDUCATION_REPORTING:
                                                      return (0, i.jsx)(m.Popout, {
                                                          position: 'top',
                                                          align: 'center',
                                                          shouldShow: !0,
                                                          renderPopout: () => (0, i.jsx)(X.P, { markAsDismissed: n }),
                                                          children: this.renderSettingsGear
                                                      });
                                                  case o.z.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK:
                                                      return (0, i.jsx)(m.Popout, {
                                                          position: 'top',
                                                          align: 'center',
                                                          shouldShow: !0,
                                                          renderPopout: () => (0, i.jsx)(ee.Z, {}),
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
                      (0, i.jsx)(G.Z, {})
                  ]
              });
    }
    constructor(...e) {
        super(...e),
            ex(this, 'copiedTimeout', new c.V7()),
            ex(this, 'copiedDecayTimeout', new c.V7()),
            ex(this, 'speakingWhileMutedTooltipTimeout', new c.V7()),
            ex(this, 'lastSpeakingWhileMutedNotificationTime', void 0),
            ex(this, 'state', {
                hovered: !1,
                copiedStreak: 0,
                shouldShowNametagTooltip: !1,
                shouldShowCopiedFeedback: !1,
                shouldShowSpeakingWhileMutedTooltip: !1,
                hoveringOnMute: !1
            }),
            ex(this, 'handleToggleSelfMute', () => {
                let { serverMute: e, suppress: t } = this.props;
                (0, P.Z)(e, t, eT.jXE.ACCOUNT_PANEL);
            }),
            ex(this, 'handleToggleSelfDeaf', () => {
                let { serverDeaf: e } = this.props;
                (0, y.Z)(e, eT.jXE.ACCOUNT_PANEL);
            }),
            ex(this, 'handleOpenAccountSettings', () => {
                this.handleOpenSettings();
            }),
            ex(this, 'handleOpenSettings', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eT.oAB.ACCOUNT,
                    t = arguments.length > 1 ? arguments[1] : void 0,
                    n = arguments.length > 2 ? arguments[2] : void 0;
                f.Z.open(e, t, n);
            }),
            ex(this, 'handleOpenSettingsContextMenu', (e) => {
                let { currentUser: t } = this.props;
                null != t &&
                    (0, g.jW)(e, async () => {
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
            ex(this, 'handleInputAudioContextMenu', (e, t) => {
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
            ex(this, 'handleOutputAudioContextMenu', (e, t) => {
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
            ex(this, 'handleMouseEnter', () => {
                this.setState({ hovered: !0 });
            }),
            ex(this, 'handleMouseLeave', () => {
                this.setState({ hovered: !1 });
            }),
            ex(this, 'handleMouseEnterMute', () => {
                this.setState({
                    hoveringOnMute: !0,
                    shouldShowSpeakingWhileMutedTooltip: !1
                }),
                    this.speakingWhileMutedTooltipTimeout.stop();
            }),
            ex(this, 'handleMouseLeaveMute', () => {
                this.setState({ hoveringOnMute: !1 });
            }),
            ex(this, 'handleCopyTag', () => {
                let { currentUser: e } = this.props,
                    { shouldShowNametagTooltip: t, copiedStreak: n } = this.state;
                if (null == e) return;
                (0, eg.JG)(
                    eI.ZP.getUserTag(e, {
                        decoration: 'never',
                        identifiable: 'always'
                    })
                ),
                    em.default.track(eT.rMx.TEXT_COPIED, { type: 'User Tag' });
                let i = {
                    shouldShowCopiedFeedback: !0,
                    shouldShowNametagTooltip: !0
                };
                !t && (i.copiedStreak = n + 1),
                    this.setState(i, () => {
                        this.copiedTimeout.start(1000, () => this.setState({ shouldShowNametagTooltip: !1 })), this.copiedDecayTimeout.start(2000, () => this.setState({ copiedStreak: 0 }));
                    });
            }),
            ex(this, 'handleOccludedChanged', () => {
                let { occluded: e } = this.props;
                e &&
                    this.setState({
                        shouldShowNametagTooltip: !1,
                        shouldShowSpeakingWhileMutedTooltip: !1
                    });
            }),
            ex(this, 'handleSpeakingWhileMutedChanged', () => {
                let { selfMute: e, serverMute: t, suppress: n, speakingWhileMuted: i, occluded: r } = this.props,
                    { hoveringOnMute: l } = this.state,
                    a = void 0 === this.lastSpeakingWhileMutedNotificationTime || Date.now() - this.lastSpeakingWhileMutedNotificationTime > ey;
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
            ex(this, 'renderSettingsGear', () =>
                (0, i.jsx)(eD, {
                    isEligibleForPomelo: this.props.isEligibleForPomelo,
                    webBuildOverride: this.props.webBuildOverride,
                    onClick: this.handleOpenAccountSettings,
                    onContextMenu: this.handleOpenSettingsContextMenu
                })
            );
    }
}
function ej() {
    var e;
    let t = (0, s.e7)([eu.default], () => eu.default.getCurrentUser()),
        n = (0, s.e7)([er.default], () => er.default.getId()),
        l = (0, j.a)(),
        { streaming: a, status: c } = (0, s.cj)([ec.Z], () => ({
            streaming: null != ec.Z.findActivity((e) => e.type === eT.IIU.STREAMING),
            status: ec.Z.getStatus()
        })),
        d = (0, C.Z)({ userId: n }),
        u = eI.ZP.useUserTag(t, { decoration: 'never' }),
        h = (0, s.e7)([ed.Z], () => ed.Z.hidePersonalInformation),
        g = (0, s.e7)([eo.Z, el.Z], () => {
            let e = eo.Z.getChannelId();
            return null != e ? el.Z.getChannel(e) : null;
        }),
        { mute: f, selfMute: _, suppress: N } = (0, ei.Z)(g),
        { selfDeaf: T, deaf: b } = (0, en.Z)(g),
        x = (0, s.e7)([A.C], () => {
            var e;
            return (0, Z.fD)() ? (null === (e = A.C.getCurrentBuildOverride().overrides) || void 0 === e ? void 0 : e.discord_web) : null;
        }),
        L = (0, s.e7)([eh.ZP], () => eh.ZP.getPremiumTypeSubscription()),
        y = (0, s.e7)([es.Z], () => es.Z.getSpeakingWhileMuted()),
        P = (0, s.e7)([ea.Z], () => ea.Z.hasLayers()),
        O = (0, m.useModalsStore)(m.hasAnyModalOpenSelector) || P || eE.s.isDisallowPopupsSet(),
        R = (0, H.b)(),
        D = (0, s.e7)([U.Z], () => null != U.Z.getAwaitingRemoteSessionInfo()),
        M = (0, W.D)(),
        k = (0, E.u)(),
        G = (0, Y.t)(),
        B = e_.ZP.canUsePremiumGuildMemberProfile(t),
        z = (null == t ? void 0 : null === (e = t.avatarDecoration) || void 0 === e ? void 0 : e.skuId) === eb.rL,
        K = 'account';
    (0, I.j)({
        location: K + ' auto on',
        autoTrackExposure: !0
    }),
        (0, I.j)({
            location: K + ' auto off',
            autoTrackExposure: !1
        });
    let q = (0, s.e7)([Q.Z], () => Q.Z.hasHadOtherUserPlaySoundInSession()),
        X = (function () {
            let e = (0, w.wE)(o.z.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2),
                [t, n] = (0, s.Wu)([V.Z], () => [V.Z.hasFetchedRelevance, V.Z.profileThemesRelevanceExceeded]),
                [i, l] = (0, s.Wu)([eh.ZP], () => [eh.ZP.hasFetchedMostRecentPremiumTypeSubscription(), eh.ZP.getMostRecentPremiumTypeSubscription()]),
                { enabled: a } = F.Z.useExperiment({ location: '08bd40_1' }, { autoTrackExposure: !0 }),
                c = r.useMemo(() => {
                    let e = new Date().getTime();
                    return null != l && (l.status === eT.O0b.ACTIVE || e - l.currentPeriodEnd.getTime() < eP);
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
        { analyticsLocations: J } = (0, S.ZP)(v.Z.ACCOUNT),
        $ = {
            avatar: [],
            settings: []
        };
    return (
        !O && (X && $.settings.push(o.z.PROFILE_THEMES_FEATURE_EDUCATION_TOOLTIP_TAKE_2), M && (1 === k ? $.settings.push(o.z.USER_SAFETY_CONSUMER_EDUCATION_MUTE) : $.settings.push(o.z.USER_SAFETY_CONSUMER_EDUCATION_BLOCK)), q && $.settings.push(o.z.SOUNDBOARD_VOLUME_EDUCATION), G && $.settings.push(o.z.USER_SAFETY_CONSUMER_EDUCATION_REPORTING), B && $.settings.push(o.z.PER_GUILD_COLLECTIBLES_CUSTOMIZATION_COACHMARK), z && $.avatar.push(o.z.PREMIUM_SUBSCRIPTION_APRIL_MARKETING_DECO_TOOLTIP)),
        (0, i.jsx)(S.Gt, {
            value: J,
            children: (0, i.jsx)(eR, {
                currentUser: t,
                customStatusActivity: l,
                dismissibleContents: $,
                userTag: u,
                hidePrivateData: h,
                occluded: O,
                premiumSubscription: L,
                selfDeaf: T,
                selfMute: _,
                serverDeaf: b,
                serverMute: f,
                speaking: d,
                speakingWhileMuted: y,
                status: c,
                streaming: a,
                suppress: N,
                webBuildOverride: x,
                awaitingRemote: D,
                isEligibleForPomelo: R
            })
        })
    );
}
function eD(e) {
    let { webBuildOverride: t, isEligibleForPomelo: n, onClick: r, onContextMenu: l } = e,
        a = m.SettingsIcon,
        s = (0, h.i)();
    return (
        (a = null != t ? m.SettingsInfoIcon : n ? m.SettingsCircleIcon : s.Component),
        (0, i.jsx)(eN.Z, {
            tooltipText: null != t ? eA.intl.formatToPlainString(eA.t.Gzh6ZG, { webBuildOverride: t.id }) : eA.intl.string(eA.t.cduTBA),
            onClick: r,
            onContextMenu: l,
            innerClassName: null != t || n ? eZ.buildOverrideButton : null,
            icon: (0, i.jsx)(a, {
                size: 'refresh_sm',
                color: m.tokens.colors.CHANNEL_ICON
            }),
            ...s.events
        })
    );
}
function eM(e) {
    let { selfMute: t, serverMute: n, suppress: l, awaitingRemote: a, tooltipText: s, tooltipColor: o, tooltipForceOpen: c, onMouseEnter: d, onMouseLeave: h, onClick: p, onContextMenu: g } = e,
        f = t || l || n,
        { Component: _, play: E, events: I } = (0, u.O)(f ? 'unmute' : 'mute'),
        C = n || l ? m.MicrophoneDenyIcon : _,
        { mode: N } = (0, et.ZP)({ location: 'RTC Microphone Button' }),
        T = null != s ? s : (0, L.Z)(t, n, l, a, N === et.BK.GroupedButtonsRedMic),
        { analyticsLocations: b } = (0, S.ZP)(v.Z.AUDIO_INPUT_BUTTON);
    r.useEffect(() => () => E(), [f, E]);
    let A = r.useCallback(
        (e) => {
            g(e, b);
        },
        [g, b]
    );
    return (0, i.jsx)(S.Gt, {
        value: b,
        children: (0, i.jsx)(eN.Z, {
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
                color: f ? m.tokens.colors.STATUS_DANGER : m.tokens.colors.CHANNEL_ICON
            }),
            iconForeground: f ? eZ.strikethrough : null,
            onClick: p,
            onContextMenu: A,
            role: 'switch',
            'aria-label': eA.intl.string(eA.t['w4m94+']),
            'aria-checked': f,
            disabled: a
        })
    });
}
function ew(e) {
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
        children: (0, i.jsx)(eN.Z, {
            tooltipText: (0, x.Z)(t, n, l),
            onMouseEnter: p,
            onMouseLeave: g,
            icon: (0, i.jsx)(f, {
                size: 'custom',
                width: 20,
                height: 20,
                color: c ? m.tokens.colors.STATUS_DANGER : m.tokens.colors.CHANNEL_ICON
            }),
            onClick: s,
            onContextMenu: E,
            innerClassName: a()({ [eZ.redIcon]: n }),
            iconForeground: c ? eZ.strikethrough : null,
            role: 'switch',
            'aria-label': eA.intl.string(eA.t.wjcRFR),
            'aria-checked': c,
            disabled: l
        })
    });
}
