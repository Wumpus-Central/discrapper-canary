n.d(t, { Z: () => eC }), n(47120), n(653041);
var r = n(200651),
    i = n(192379),
    l = n(392711),
    o = n.n(l),
    a = n(642128),
    s = n(232713),
    c = n(442837),
    u = n(704215),
    d = n(846519),
    p = n(481060),
    h = n(570140),
    f = n(239091),
    g = n(269128),
    m = n(711237),
    b = n(110924),
    _ = n(100527),
    E = n(906732),
    O = n(211242),
    N = n(785203),
    v = n(745837),
    y = n(13228),
    I = n(540059),
    C = n(211644),
    S = n(605236),
    T = n(243778),
    P = n(492162),
    j = n(818634),
    A = n(596557),
    Z = n(817520),
    x = n(999309),
    L = n(408987),
    w = n(130734),
    R = n(499137),
    D = n(258871),
    k = n(972264),
    M = n(11352),
    U = n(304445),
    G = n(344185),
    W = n(155409),
    V = n(10401),
    B = n(970731),
    H = n(210887),
    F = n(592125),
    z = n(796974),
    Y = n(486472),
    K = n(984933),
    q = n(650774),
    X = n(430824),
    Q = n(819640),
    J = n(496675),
    $ = n(878884),
    ee = n(19780),
    et = n(594174),
    en = n(74538),
    er = n(374023),
    ei = n(373274),
    el = n(315174),
    eo = n(577718),
    ea = n(156978),
    es = n(591190),
    ec = n(327530),
    eu = n(981631),
    ed = n(652785),
    ep = n(921944),
    eh = n(647086),
    ef = n(388032),
    eg = n(287521);
function em(e, t, n) {
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
function eb(e) {
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
                em(e, t, n[t]);
            });
    }
    return e;
}
function e_(e, t) {
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
function eE(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = {},
                l = Object.keys(e);
            for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
let eO = 88 + ec.pm,
    eN = eO - 24,
    ev = 'server-settings',
    ey = {
        origin: {
            x: -8,
            y: -48
        },
        targetWidth: 40,
        targetHeight: 40,
        offset: {
            x: 0,
            y: 0
        }
    };
class eI extends i.PureComponent {
    static getDerivedStateFromProps(e) {
        let { guild: t, hasChannelNotice: n } = e;
        return null == t || null == t.banner || n
            ? {
                  renderBanner: !1,
                  bannerVisible: !1
              }
            : null;
    }
    componentDidMount() {
        var e;
        this.setAnimatedValue(0), h.Z.subscribe('LAYER_PUSH', this.closeAllHeaderNotices), (this.historyUnlisten = U.Z.addRouteChangeListener(this.handleHistoryChange));
        let { location: t } = U.Z.getHistory();
        (null === (e = t.state) || void 0 === e ? void 0 : e.shouldShowSubscribeTooltip) && this.showTimeout.start(1000, () => this.setState({ shouldShowSubscribeTooltip: !0 }));
    }
    componentWillUnmount() {
        this.showTimeout.stop(), this.state.controller.dispose(), this.historyUnlisten(), h.Z.unsubscribe('LAYER_PUSH', this.closeAllHeaderNotices);
    }
    getGuildBannerHash() {
        let { guild: e, hasChannelNotice: t } = this.props;
        return null == e || t ? null : e.banner;
    }
    renderGuildHeaderNotices(e) {
        let { showGuildTemplateDirtyTooltip: t, showGuildHeaderTutorial: n, anyLayerOpen: i } = this.props,
            { shouldShowSubscribeTooltip: l } = this.state;
        return n
            ? (0, r.jsx)('div', {
                  onClick: (t) => (e ? null : t.stopPropagation()),
                  children: (0, r.jsx)(W.Z, {
                      tutorialId: ev,
                      position: 'bottom',
                      inlineSpecs: ey,
                      children: this.renderGuildHeaderDropdownButton(e)
                  })
              })
            : t
              ? (0, r.jsx)(p.ua7, {
                    forceOpen: !0,
                    color: p.FGA.BRAND,
                    position: 'bottom',
                    shouldShow: !e && !i,
                    text: ef.NW.string(ef.t.sFSrFB),
                    'aria-label': ef.NW.string(ef.t.sFSrFB),
                    children: () => this.renderGuildHeaderDropdownButton(e)
                })
              : i || e
                ? this.renderGuildHeaderDropdownButton(e)
                : l
                  ? (0, r.jsx)(p.yRy, {
                        renderPopout: () =>
                            (0, r.jsx)('div', {
                                onClick: (e) => e.stopPropagation(),
                                children: (0, r.jsx)(B.ZP, {
                                    header: ef.NW.string(ef.t['Q3qa4+']),
                                    content: ef.NW.string(ef.t.UyHD4O),
                                    buttonCTA: ef.NW.string(ef.t.U9PrMz),
                                    onClick: this.handleCloseSubscribeTooltip
                                })
                            }),
                        position: 'bottom',
                        align: 'center',
                        animation: p.yRy.Animation.TRANSLATE,
                        shouldShow: !0,
                        children: () => this.renderGuildHeaderDropdownButton(e)
                    })
                  : this.renderGuildHeaderUpsellPopout(e);
    }
    renderGuildHeader(e) {
        let { guild: t, isHeaderPopoutOpen: n, showGuildHeaderTutorial: i, showGuildTemplateDirtyTooltip: l, isGuildHeaderDismissibleTooltipShown: o, headerAnalyticsLocations: a } = this.props,
            { controller: s, renderBanner: c, bannerVisible: u, bannerVisibleHeight: d, communityInfoVisible: h } = this.state,
            f = i || l || o;
        return null == t
            ? null
            : (0, r.jsx)(E.Gt, {
                  value: a,
                  children: (0, r.jsx)(p.KeG, {
                      renderPopout: this.renderMenuPopout,
                      position: 'bottom',
                      align: 'center',
                      animation: p.yRy.Animation.SCALE,
                      shouldShow: n,
                      onRequestClose: () => {
                          (0, j.l)(!1);
                      },
                      children: (i) => {
                          var { onClick: l } = i,
                              o = eE(i, ['onClick']);
                          return (0, r.jsx)(
                              el.ZP,
                              e_(
                                  eb(
                                      {
                                          guild: t,
                                          controller: s,
                                          renderBanner: c,
                                          hasSubheader: e,
                                          bannerVisible: u,
                                          communityInfoVisible: h,
                                          guildBanner: this.getGuildBannerHash(),
                                          onClick: this.handleHeaderMenuToggle,
                                          onContextMenu: this.handleHeaderContextMenu,
                                          disableBannerAnimation: f,
                                          animationOverlayHeight: d
                                      },
                                      o
                                  ),
                                  { children: this.renderGuildHeaderNotices(n) }
                              )
                          );
                      }
                  })
              });
    }
    setAnimatedValue(e) {
        let { guild: t } = this.props,
            n = null != this.getGuildBannerHash(),
            r = null == t ? void 0 : t.hasCommunityInfoSubheader();
        null != t && (n || r) && (n ? this.setAnimatedValueForBanner(e) : this.setAnimatedValueForGuildInfo(e));
    }
    setAnimatedValueForGuildInfo(e) {
        let { communityInfoVisible: t, controller: n } = this.state;
        ((e >= 20 && t) || (e < 20 && !t)) && (t = !t),
            t !== this.state.communityInfoVisible && this.setState({ communityInfoVisible: t }),
            n
                .update({
                    value: Math.min(1, Math.max(0, 1 - e / 20)),
                    immediate: !0
                })
                .start();
    }
    renderChannelList() {
        let e = this.props,
            { isUnavailable: t, guild: n, selectedChannel: i, enableStudyGroup: l } = e,
            o = eE(e, ['isUnavailable', 'guild', 'selectedChannel', 'enableStudyGroup']);
        if (t || null == n) return (0, r.jsx)(es.Z, { withBannerPadding: null != n && null != this.getGuildBannerHash() });
        if (n.hasFeature(eu.oNc.HUB) && !l)
            return (0, r.jsx)('div', {
                className: eg.hubContainer,
                children: (0, r.jsx)(D.Z, {
                    guild: n,
                    channel: null != i ? i : K.ZP.getDefaultChannel(n.id)
                })
            });
        {
            let e = n.id === eh._ ? ei.j : ei.E;
            return (0, r.jsx)(
                e,
                e_(eb({ guild: n }, o), {
                    guildBanner: this.getGuildBannerHash(),
                    hasGuildSubheader: this.state.hasGuildSubheader,
                    onScroll: null != n && (null != this.getGuildBannerHash() || n.hasCommunityInfoSubheader()) ? this.pinBannerOrGuildInfo : null
                })
            );
        }
    }
    renderFooter() {
        let { shouldRenderClipsEducation: e } = this.props;
        return (0, r.jsx)(T.ZP, {
            contentTypes: [],
            children: (t) => {
                let { visibleContent: n } = t;
                return e ? (0, r.jsx)(v.Z, {}) : (0, r.jsx)(r.Fragment, {});
            }
        });
    }
    render() {
        let { guild: e, footerAnalyticsLocations: t } = this.props;
        return (0, r.jsxs)('nav', {
            className: eg.container,
            onContextMenu: this.handleContextMenu,
            'aria-label': ef.NW.formatToPlainString(ef.t.nj5gAQ, { guildName: null != e ? e.toString() : '' }),
            children: [
                null != e && this.renderGuildHeader(this.state.hasGuildSubheader),
                null != e &&
                    (0, r.jsx)(ea.Z, {
                        guild: e,
                        setHasSubheader: (e) => this.setState({ hasGuildSubheader: e })
                    }),
                this.renderChannelList(),
                (0, r.jsx)(E.Gt, {
                    value: t,
                    children: this.renderFooter()
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            em(this, 'historyUnlisten', () => {}),
            em(this, 'showTimeout', new d.V7()),
            em(this, 'state', {
                controller: new a.Controller({
                    value: 1,
                    immediate: !0
                }),
                renderBanner: !1,
                bannerVisible: !1,
                communityInfoVisible: !1,
                shouldShowSubscribeTooltip: !1,
                bannerVisibleHeight: this.props.isRefreshEnabled ? eO : 88,
                hasGuildSubheader: !1
            }),
            em(this, 'handleHistoryChange', (e) => {
                null != e.state && e.state.shouldShowSubscribeTooltip && this.showTimeout.start(1000, () => this.setState({ shouldShowSubscribeTooltip: !0 }));
            }),
            em(this, 'handleHeaderMenuToggle', (e) => {
                let { isHeaderPopoutOpen: t } = this.props;
                e.stopPropagation(), (0, j.l)(!t), this.closeAllHeaderNotices();
            }),
            em(this, 'handleContextMenu', (e) => {
                let { guild: t } = this.props;
                null != t &&
                    (0, f.jW)(e, async () => {
                        let { default: e } = await n.e('92795').then(n.bind(n, 652171));
                        return (n) => (0, r.jsx)(e, e_(eb({}, n), { guild: t }));
                    });
            }),
            em(this, 'handleHeaderContextMenu', (e) => {
                let { guild: t } = this.props;
                null != t &&
                    (0, f.jW)(e, async () => {
                        let { default: e } = await Promise.all([n.e('7654'), n.e('44156'), n.e('79783'), n.e('6850'), n.e('16114'), n.e('58227'), n.e('54408'), n.e('71567'), n.e('69760'), n.e('33213'), n.e('57191')]).then(n.bind(n, 545135));
                        return (n) => (0, r.jsx)(e, e_(eb({}, n), { guild: t }));
                    });
            }),
            em(this, 'closeAllHeaderNotices', () => {
                this.handleCloseSubscribeTooltip(), this.handleCloseTemplateDirtyTooltip(), this.handleCloseStudentHubPrivacySettingsTooltip();
            }),
            em(this, 'handleCloseStudentHubPrivacySettingsTooltip', () => {
                var e;
                let t = (0, S.un)(u.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP),
                    n = null === (e = this.props.guild) || void 0 === e ? void 0 : e.hasFeature(eu.oNc.HUB);
                !t && n && (0, S.EW)(u.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP, { dismissAction: ep.L.AUTO });
            }),
            em(this, 'handleCloseSubscribeTooltip', () => {
                this.showTimeout.stop(), this.state.shouldShowSubscribeTooltip && this.setState({ shouldShowSubscribeTooltip: !1 });
            }),
            em(this, 'handleCloseTemplateDirtyTooltip', () => {
                let { guild: e, showGuildTemplateDirtyTooltip: t } = this.props;
                null != e && t && L.Z.hideGuildTemplateDirtyTooltip(e.id);
            }),
            em(this, 'renderMenuPopout', async () => {
                let { default: e } = await Promise.all([n.e('69760'), n.e('21704')]).then(n.bind(n, 859432));
                return (t) => {
                    let { closePopout: n } = t,
                        { guild: i } = this.props;
                    return (
                        null != i &&
                        (0, r.jsx)(e, {
                            onClose: n,
                            guild: i
                        })
                    );
                };
            }),
            em(this, 'renderGuildHeaderUpsellPopout', (e) => {
                let { showGuildBoostingProgressBarUpsell: t, showGuildBoostingProgressBarSizeUpsell: n, showRoleSubscriptionUpsell: i, showInviteSplashUpsell: l, showDiscoveryLandingPageSettingsUpsell: o, showHubPrivacySettingsTooltip: a, showActiveThreadsNotice: s, showGuildSoundboardPermissionUpsell: c, showMediaChannelUpsell: d, showTierTemplatesUpsell: p, shouldRenderCustomNotificationSoundsCoachmark: h, guild: f, theme: g } = this.props;
                if (null == f) return this.renderGuildHeaderDropdownButton(e);
                let m = [];
                return (a && m.push(u.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP), s && m.push(u.z.GUILD_HEADER_ACTIVE_THREADS_NOTICE), t && m.push(u.z.GUILD_HEADER_PREMIUM_GUILD_PROGRESS), n && m.push(u.z.GUILD_HEADER_PROGRESS_BAR_SIZE_COACH_MARK), i && m.push(u.z.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL), c && m.push(u.z.GUILD_HEADER_SOUNDBOARD_PERMISSION), l && m.push(u.z.GUILD_HEADER_INVITE_SPLASH), o && m.push(u.z.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL), 0 === m.length)
                    ? this.renderGuildHeaderDropdownButton(e)
                    : (d && m.push(u.z.MEDIA_CHANNEL_UPSELL),
                      p && m.push(u.z.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL),
                      h && m.push(u.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_COACHMARK),
                      (0, r.jsx)(eo.Z, {
                          contentTypes: m,
                          theme: g,
                          guild: f,
                          renderGuildHeaderDropdownButton: () => this.renderGuildHeaderDropdownButton(e)
                      }));
            }),
            em(this, 'renderGuildHeaderDropdownButton', (e) =>
                (0, r.jsx)(g.Z, {
                    open: e,
                    className: eg.dropdownButton
                })
            ),
            em(this, 'setAnimatedValueForBanner', (e) => {
                let t = this.props.isRefreshEnabled ? eO : 88,
                    n = this.props.isRefreshEnabled ? eN : 64,
                    { renderBanner: r, communityInfoVisible: i, bannerVisible: l, bannerVisibleHeight: o, controller: a } = this.state;
                ((e >= n && l) || (e < n && !l)) && (l = !l),
                    ((e >= t && !r) || (e < t && r)) && (r = !r),
                    (o = Math.max(t - e, 0)),
                    (i = l),
                    (r !== this.state.renderBanner || l !== this.state.bannerVisible || o !== this.state.bannerVisibleHeight || i !== this.state.communityInfoVisible) &&
                        this.setState({
                            renderBanner: r,
                            bannerVisible: l,
                            bannerVisibleHeight: o,
                            communityInfoVisible: i
                        }),
                    a
                        .update({
                            value: Math.min(1, Math.max(0, 1 - e / t)),
                            immediate: !0
                        })
                        .start();
            }),
            em(this, 'pinBannerOrGuildInfo', (e) => {
                let { scrollTop: t } = e;
                this.setAnimatedValue(t);
            });
    }
}
function eC(e) {
    var t;
    let { guildId: n, hideSelectedChannel: l, selectedChannelId: a } = e,
        d = (0, c.e7)([X.Z], () => X.Z.getGuild(n));
    (0, m.J_)(n);
    let h = (0, P.Z)(n),
        f = (0, c.e7)([z.Z], () => z.Z.getGuildDimensions(n).scrollTo),
        g = (0, c.e7)([ee.Z], () => ee.Z.getChannelId()),
        [v, T, L] = (0, c.Wu)([J.Z], () => [J.Z.can(eu.Plq.MANAGE_GUILD, d), J.Z.can(eu.Plq.MANAGE_ROLES, d), J.Z.can(eu.Plq.MANAGE_THREADS, d)]),
        D = (0, c.e7)([Y.Z], () => Y.Z.isUnavailable(n)),
        U = (0, c.e7)([et.default], () => et.default.getCurrentUser()),
        W = (0, c.e7)([H.Z], () => (H.Z.darkSidebar ? eu.BRd.DARK : H.Z.theme)),
        { enableStudyGroup: B } = (0, R.s)(d),
        K = (0, C.ZP)((e) => e.currentlyShown.has(u.z.NAGBAR_NOTICE_CONNECT_PLAYSTATION)),
        [ei, el] = i.useState(!K),
        eo = (0, b.Z)(n),
        { analyticsLocations: ea } = (0, E.ZP)(_.Z.GUILD_HEADER),
        { analyticsLocations: es } = (0, E.ZP)(_.Z.GUILD_CHANNEL_LIST_FOOTER);
    i.useEffect(() => {
        n !== eo && el(!K);
    }, [n, eo, K]);
    let [ec, eh] = (0, C.ZP)((e) => [ed.XN.some((t) => e.currentlyShown.has(t.dismissibleContentType)), e.currentlyShownGroup.has(ep.R.GUILD_HEADER_TOOLTIPS)], s.X),
        ef = (0, N.Z)(d),
        eg = (0, p.s9z)(p.JQI),
        em = (0, c.e7)([Q.Z], () => Q.Z.hasLayers()),
        eb = (0, c.e7)([V.Z], () => V.Z.shouldShow(ev)),
        e_ = v && (null == d ? void 0 : d.premiumProgressBarEnabled) === !1 && !er.s.isDisallowPopupsSet(),
        eE = (0, c.e7)([q.Z], () => q.Z.getMemberCount(n)),
        eO = v && null != eE && eE >= 30 && (null == d ? void 0 : d.premiumProgressBarEnabled) === !1 && !er.s.isDisallowPopupsSet(),
        eN = T && null != d && (d.hasFeature(eu.oNc.COMMUNITY) || (null != eE && eE > 50)),
        ey = (0, x.Z)(n),
        eC = (null == d ? void 0 : d.hasFeature(eu.oNc.HUB)) === !0,
        eS = v && (null == d ? void 0 : d.hasFeature(eu.oNc.DISCOVERABLE)) === !0,
        eT = (0, O.Q)(),
        eP = (v || (null == d ? void 0 : d.premiumTier) === eu.Eu4.NONE) && !er.s.isDisallowPopupsSet() && !eT,
        ej = (0, c.e7)([w.Z, Q.Z], () => null != d && null != U && v && !Q.Z.hasLayers() && w.Z.shouldShowGuildTemplateDirtyTooltip(n)),
        eA = (0, c.e7)([F.Z], () => F.Z.getChannel(a)),
        { isPopoutOpen: eZ } = (0, j.y)(),
        ex = null !== (t = null == d ? void 0 : d.hasFeature(eu.oNc.COMMUNITY)) && void 0 !== t && t,
        eL = (0, c.e7)([G.Z], () => !o().isEmpty(G.Z.getThreadsForGuild(n))),
        ew = en.ZP.isNewUser(U),
        eR = ei && !ew,
        eD = (0, y.Z)(U);
    (0, A.Z)(d);
    let ek = (0, S.wE)(u.z.PREMIUM_TUTORIAL_SERVER_MENU_TOOLTIP),
        eM = (0, k.Z)(n),
        eU = (0, Z.Z)(n),
        eG = (0, c.e7)([ee.Z], () => ee.Z.getChannelId()),
        eW = (0, c.e7)([$.Z], () => $.Z.desyncedVoiceStatesCount),
        eV = M.Y.useExperiment({ location: 'GuildSidebar' }, { autoTrackExposure: !0 }).enabled,
        eB = (0, I.Q3)('GuildSidebar');
    return (0, r.jsx)(eI, {
        guildId: n,
        hideSelectedChannel: l,
        guild: d,
        scrollToChannel: f,
        selectedChannelId: l ? null : a,
        selectedChannel: eA,
        selectedVoiceChannelId: g,
        voiceStates: h,
        rtcConnectedChannelId: eG,
        rtcDesyncedVoiceStatesCount: eW,
        isUnavailable: D,
        theme: W,
        user: U,
        hasChannelNotice: null != ef || ec,
        anyLayerOpen: eg || em,
        showGuildBoostingProgressBarUpsell: e_,
        showGuildBoostingProgressBarSizeUpsell: eO,
        showInviteSplashUpsell: eP,
        showDiscoveryLandingPageSettingsUpsell: eS,
        showGuildHeaderTutorial: eb,
        showGuildTemplateDirtyTooltip: ej,
        showRoleSubscriptionUpsell: ey,
        showHubPrivacySettingsTooltip: eC,
        showNewUnreadsBar: ex,
        showActiveThreadsNotice: L && null != eE && eE >= 200 && eL,
        showGuildSoundboardPermissionUpsell: eN,
        showMediaChannelUpsell: eM,
        showTierTemplatesUpsell: eU,
        isHeaderPopoutOpen: eZ,
        enableStudyGroup: B,
        isGuildHeaderDismissibleTooltipShown: eh,
        canShowCoachMarkAtBottom: ei,
        headerAnalyticsLocations: ea,
        footerAnalyticsLocations: es,
        shouldRenderClipsEducation: eD,
        isTutorialHighlightDismissed: ek,
        shouldRenderBurstCoachmark: eR,
        shouldRenderCustomNotificationSoundsCoachmark: eV,
        isRefreshEnabled: eB
    });
}
