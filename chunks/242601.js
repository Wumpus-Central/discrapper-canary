n.d(t, { Z: () => eC }), n(388685), n(539854);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(392711),
    s = n.n(o),
    c = n(200100),
    u = n(359959),
    d = n(442837),
    p = n(704215),
    h = n(846519),
    f = n(481060),
    g = n(570140),
    m = n(239091),
    b = n(269128),
    _ = n(711237),
    E = n(110924),
    O = n(100527),
    N = n(906732),
    y = n(211242),
    I = n(785203),
    v = n(745837),
    C = n(13228),
    S = n(540059),
    T = n(211644),
    P = n(605236),
    j = n(243778),
    A = n(492162),
    Z = n(43740),
    x = n(596557),
    w = n(817520),
    L = n(999309),
    R = n(408987),
    D = n(130734),
    k = n(499137),
    M = n(258871),
    U = n(340541),
    G = n(972264),
    W = n(11352),
    V = n(304445),
    B = n(344185),
    H = n(155409),
    F = n(10401),
    z = n(970731),
    Y = n(210887),
    K = n(592125),
    q = n(796974),
    Q = n(486472),
    X = n(984933),
    J = n(650774),
    $ = n(430824),
    ee = n(819640),
    et = n(496675),
    en = n(878884),
    er = n(19780),
    ei = n(594174),
    el = n(74538),
    ea = n(374023),
    eo = n(373274),
    es = n(315174),
    ec = n(577718),
    eu = n(156978),
    ed = n(591190),
    ep = n(981631),
    eh = n(652785),
    ef = n(921944),
    eg = n(647086),
    em = n(388032),
    eb = n(540835);
function e_(e, t, n) {
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
function eE(e) {
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
                e_(e, t, n[t]);
            });
    }
    return e;
}
function eO(e, t) {
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
function eN(e, t) {
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
let ey = 'server-settings',
    eI = {
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
class ev extends i.PureComponent {
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
        this.setAnimatedValue(0), g.Z.subscribe('LAYER_PUSH', this.closeAllHeaderNotices), (this.historyUnlisten = V.Z.addRouteChangeListener(this.handleHistoryChange));
        let { location: t } = V.Z.getHistory();
        (null == (e = t.state) ? void 0 : e.shouldShowSubscribeTooltip) && this.showTimeout.start(1000, () => this.setState({ shouldShowSubscribeTooltip: !0 }));
    }
    componentWillUnmount() {
        this.showTimeout.stop(), this.state.controller.dispose(), this.historyUnlisten(), g.Z.unsubscribe('LAYER_PUSH', this.closeAllHeaderNotices);
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
                  children: (0, r.jsx)(H.Z, {
                      tutorialId: ey,
                      position: 'bottom',
                      inlineSpecs: eI,
                      children: this.renderGuildHeaderDropdownButton(e)
                  })
              })
            : t
              ? (0, r.jsx)(f.ua7, {
                    forceOpen: !0,
                    color: f.FGA.BRAND,
                    position: 'bottom',
                    shouldShow: !e && !i,
                    text: em.NW.string(em.t.sFSrFB),
                    'aria-label': em.NW.string(em.t.sFSrFB),
                    children: () => this.renderGuildHeaderDropdownButton(e)
                })
              : i || e
                ? this.renderGuildHeaderDropdownButton(e)
                : l
                  ? (0, r.jsx)(f.yRy, {
                        renderPopout: () =>
                            (0, r.jsx)('div', {
                                onClick: (e) => e.stopPropagation(),
                                children: (0, r.jsx)(z.ZP, {
                                    header: em.NW.string(em.t['Q3qa4+']),
                                    content: em.NW.string(em.t.UyHD4O),
                                    buttonCTA: em.NW.string(em.t.U9PrMz),
                                    onClick: this.handleCloseSubscribeTooltip
                                })
                            }),
                        position: 'bottom',
                        align: 'center',
                        animation: f.yRy.Animation.TRANSLATE,
                        shouldShow: !0,
                        children: () => this.renderGuildHeaderDropdownButton(e)
                    })
                  : this.renderGuildHeaderUpsellPopout(e);
    }
    renderGuildHeader(e) {
        let { guild: t, isHeaderPopoutOpen: n, showGuildHeaderTutorial: i, showGuildTemplateDirtyTooltip: l, isGuildHeaderDismissibleTooltipShown: a, headerAnalyticsLocations: o, isRefreshEnabled: s } = this.props,
            { controller: c, renderBanner: u, bannerVisible: d, bannerVisibleHeight: p, communityInfoVisible: h } = this.state,
            g = i || l || a;
        return null == t
            ? null
            : (0, r.jsx)(N.Gt, {
                  value: o,
                  children: (0, r.jsx)(f.KeG, {
                      renderPopout: this.renderMenuPopout,
                      position: 'bottom',
                      align: 'center',
                      animation: f.yRy.Animation.SCALE,
                      shouldShow: n,
                      onRequestClose: () => {
                          (0, Z.l)(!1);
                      },
                      spacing: s ? 4 : 8,
                      children: (i) => {
                          var { onClick: l } = i,
                              a = eN(i, ['onClick']);
                          return (0, r.jsx)(
                              es.ZP,
                              eO(
                                  eE(
                                      {
                                          guild: t,
                                          controller: c,
                                          renderBanner: u,
                                          hasSubheader: e,
                                          bannerVisible: d,
                                          communityInfoVisible: h,
                                          guildBanner: this.getGuildBannerHash(),
                                          onClick: this.handleHeaderMenuToggle,
                                          onContextMenu: this.handleHeaderContextMenu,
                                          disableBannerAnimation: g,
                                          animationOverlayHeight: p
                                      },
                                      a
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
            a = eN(e, ['isUnavailable', 'guild', 'selectedChannel', 'enableStudyGroup']);
        if (t || null == n) return (0, r.jsx)(ed.Z, { withBannerPadding: null != n && null != this.getGuildBannerHash() });
        {
            if (n.hasFeature(ep.oNc.HUB) && !l)
                return (0, r.jsx)('div', {
                    className: eb.hubContainer,
                    children: (0, r.jsx)(M.Z, {
                        guild: n,
                        channel: null != i ? i : X.ZP.getDefaultChannel(n.id)
                    })
                });
            let e = n.id === eg._ ? eo.j : eo.E;
            return (0, r.jsx)(
                e,
                eO(eE({ guild: n }, a), {
                    guildBanner: this.getGuildBannerHash(),
                    hasGuildSubheader: this.state.hasGuildSubheader,
                    onScroll: null != n && (null != this.getGuildBannerHash() || n.hasCommunityInfoSubheader()) ? this.pinBannerOrGuildInfo : null
                })
            );
        }
    }
    renderFooter() {
        let { shouldRenderClipsEducation: e } = this.props;
        return (0, r.jsx)(j.ZP, {
            contentTypes: [],
            children: (t) => {
                let { visibleContent: n } = t;
                return e ? (0, r.jsx)(v.Z, {}) : null;
            }
        });
    }
    render() {
        let { guild: e, footerAnalyticsLocations: t } = this.props;
        return (0, r.jsxs)('nav', {
            className: eb.container,
            onContextMenu: this.handleContextMenu,
            'aria-label': em.NW.formatToPlainString(em.t.nj5gAQ, { guildName: null != e ? e.toString() : '' }),
            children: [
                null != e && this.renderGuildHeader(this.state.hasGuildSubheader),
                null != e &&
                    (0, r.jsx)(eu.Z, {
                        guild: e,
                        setHasSubheader: (e) => this.setState({ hasGuildSubheader: e })
                    }),
                this.renderChannelList(),
                (0, r.jsx)(N.Gt, {
                    value: t,
                    children: this.renderFooter()
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            e_(this, 'historyUnlisten', () => {}),
            e_(this, 'showTimeout', new h.V7()),
            e_(this, 'state', {
                controller: new c.Controller({
                    value: 1,
                    immediate: !0
                }),
                renderBanner: !1,
                bannerVisible: !1,
                communityInfoVisible: !1,
                shouldShowSubscribeTooltip: !1,
                bannerVisibleHeight: (this.props.isRefreshEnabled, 88),
                hasGuildSubheader: !1
            }),
            e_(this, 'handleHistoryChange', (e) => {
                null != e.state && e.state.shouldShowSubscribeTooltip && this.showTimeout.start(1000, () => this.setState({ shouldShowSubscribeTooltip: !0 }));
            }),
            e_(this, 'handleHeaderMenuToggle', (e) => {
                let { isHeaderPopoutOpen: t } = this.props;
                e.stopPropagation(), (0, Z.l)(!t), this.closeAllHeaderNotices();
            }),
            e_(this, 'handleContextMenu', (e) => {
                let { guild: t } = this.props;
                null != t &&
                    (0, m.jW)(e, async () => {
                        let { default: e } = await n.e('92795').then(n.bind(n, 652171));
                        return (n) => (0, r.jsx)(e, eO(eE({}, n), { guild: t }));
                    });
            }),
            e_(this, 'handleHeaderContextMenu', (e) => {
                let { guild: t } = this.props;
                null != t &&
                    (0, m.jW)(e, async () => {
                        let { default: e } = await Promise.all([n.e('7654'), n.e('44156'), n.e('49286'), n.e('6850'), n.e('55666'), n.e('16114'), n.e('58227'), n.e('54408'), n.e('35093'), n.e('69760'), n.e('33213'), n.e('78668')]).then(n.bind(n, 545135));
                        return (n) => (0, r.jsx)(e, eO(eE({}, n), { guild: t }));
                    });
            }),
            e_(this, 'closeAllHeaderNotices', () => {
                this.handleCloseSubscribeTooltip(), this.handleCloseTemplateDirtyTooltip(), this.handleCloseStudentHubPrivacySettingsTooltip();
            }),
            e_(this, 'handleCloseStudentHubPrivacySettingsTooltip', () => {
                var e;
                let t = (0, P.un)(p.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP),
                    n = null == (e = this.props.guild) ? void 0 : e.hasFeature(ep.oNc.HUB);
                !t && n && (0, P.EW)(p.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP, { dismissAction: ef.L.AUTO });
            }),
            e_(this, 'handleCloseSubscribeTooltip', () => {
                this.showTimeout.stop(), this.state.shouldShowSubscribeTooltip && this.setState({ shouldShowSubscribeTooltip: !1 });
            }),
            e_(this, 'handleCloseTemplateDirtyTooltip', () => {
                let { guild: e, showGuildTemplateDirtyTooltip: t } = this.props;
                null != e && t && R.Z.hideGuildTemplateDirtyTooltip(e.id);
            }),
            e_(this, 'renderMenuPopout', async () => {
                let { default: e } = await Promise.all([n.e('69760'), n.e('20246')]).then(n.bind(n, 859432));
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
            e_(this, 'renderGuildHeaderUpsellPopout', (e) => {
                let { showGuildBoostingProgressBarUpsell: t, showGuildBoostingProgressBarSizeUpsell: n, showRoleSubscriptionUpsell: i, showInviteSplashUpsell: l, showDiscoveryLandingPageSettingsUpsell: a, showHubPrivacySettingsTooltip: o, showActiveThreadsNotice: s, showGuildSoundboardPermissionUpsell: c, showMediaChannelUpsell: u, showTierTemplatesUpsell: d, shouldRenderCustomNotificationSoundsCoachmark: h, guild: f, theme: g } = this.props;
                if (null == f) return this.renderGuildHeaderDropdownButton(e);
                let m = [];
                return (o && m.push(p.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP), s && m.push(p.z.GUILD_HEADER_ACTIVE_THREADS_NOTICE), t && m.push(p.z.GUILD_HEADER_PREMIUM_GUILD_PROGRESS), n && m.push(p.z.GUILD_HEADER_PROGRESS_BAR_SIZE_COACH_MARK), i && m.push(p.z.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL), c && m.push(p.z.GUILD_HEADER_SOUNDBOARD_PERMISSION), l && m.push(p.z.GUILD_HEADER_INVITE_SPLASH), a && m.push(p.z.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL), 0 === m.length)
                    ? this.renderGuildHeaderDropdownButton(e)
                    : (u && m.push(p.z.MEDIA_CHANNEL_UPSELL),
                      d && m.push(p.z.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL),
                      h && m.push(p.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_COACHMARK),
                      (0, r.jsx)(ec.Z, {
                          contentTypes: m,
                          theme: g,
                          guild: f,
                          renderGuildHeaderDropdownButton: () => this.renderGuildHeaderDropdownButton(e)
                      }));
            }),
            e_(this, 'renderGuildHeaderDropdownButton', (e) =>
                (0, U.jW)({ location: 'guild_sidebar' })
                    ? (0, r.jsx)(es.wD, { open: e })
                    : (0, r.jsx)(b.Z, {
                          open: e,
                          className: a()(eb.dropdownButton, { [eb.dropdownButtonBannerVisible]: this.state.bannerVisible })
                      })
            ),
            e_(this, 'setAnimatedValueForBanner', (e) => {
                let t = (this.props.isRefreshEnabled, 88),
                    n = this.props.isRefreshEnabled ? 88 : 64,
                    { renderBanner: r, communityInfoVisible: i, bannerVisible: l, bannerVisibleHeight: a, controller: o } = this.state;
                ((e >= n && l) || (e < n && !l)) && (l = !l),
                    ((e >= t && !r) || (e < t && r)) && (r = !r),
                    (a = Math.max(t - e, 0)),
                    (i = l),
                    (r !== this.state.renderBanner || l !== this.state.bannerVisible || a !== this.state.bannerVisibleHeight || i !== this.state.communityInfoVisible) &&
                        this.setState({
                            renderBanner: r,
                            bannerVisible: l,
                            bannerVisibleHeight: a,
                            communityInfoVisible: i
                        }),
                    o
                        .update({
                            value: Math.min(1, Math.max(0, 1 - e / t)),
                            immediate: !0
                        })
                        .start();
            }),
            e_(this, 'pinBannerOrGuildInfo', (e) => {
                let { scrollTop: t } = e;
                this.setAnimatedValue(t);
            });
    }
}
function eC(e) {
    var t;
    let { guildId: n, hideSelectedChannel: l, selectedChannelId: a } = e,
        o = (0, d.e7)([$.Z], () => $.Z.getGuild(n));
    (0, _.J_)(n);
    let c = (0, A.Z)(n),
        h = (0, d.e7)([q.Z], () => q.Z.getGuildDimensions(n).scrollTo),
        g = (0, d.e7)([er.ZP], () => er.ZP.getChannelId()),
        [m, b, v] = (0, d.Wu)([et.Z], () => [et.Z.can(ep.Plq.MANAGE_GUILD, o), et.Z.can(ep.Plq.MANAGE_ROLES, o), et.Z.can(ep.Plq.MANAGE_THREADS, o)]),
        j = (0, d.e7)([Q.Z], () => Q.Z.isUnavailable(n)),
        R = (0, d.e7)([ei.default], () => ei.default.getCurrentUser()),
        M = (0, d.e7)([Y.Z], () => (Y.Z.darkSidebar ? ep.BRd.DARK : Y.Z.theme)),
        { enableStudyGroup: U } = (0, k.s)(o),
        V = (0, T.ZP)((e) => e.currentlyShown.has(p.z.NAGBAR_NOTICE_CONNECT_PLAYSTATION)),
        [H, z] = i.useState(!V),
        X = (0, E.Z)(n),
        { analyticsLocations: eo } = (0, N.ZP)(O.Z.GUILD_HEADER),
        { analyticsLocations: es } = (0, N.ZP)(O.Z.GUILD_CHANNEL_LIST_FOOTER);
    i.useEffect(() => {
        n !== X && z(!V);
    }, [n, X, V]);
    let [ec, eu] = (0, T.ZP)((e) => [eh.XN.some((t) => e.currentlyShown.has(t.dismissibleContentType)), e.currentlyShownGroup.has(ef.R.GUILD_HEADER_TOOLTIPS)], u.X),
        ed = (0, I.Z)(o),
        eg = (0, f.s9z)(f.JQI),
        em = (0, d.e7)([ee.Z], () => ee.Z.hasLayers()),
        eb = (0, d.e7)([F.Z], () => F.Z.shouldShow(ey)),
        e_ = m && (null == o ? void 0 : o.premiumProgressBarEnabled) === !1 && !ea.s.isDisallowPopupsSet(),
        eE = (0, d.e7)([J.Z], () => J.Z.getMemberCount(n)),
        eO = m && null != eE && eE >= 30 && (null == o ? void 0 : o.premiumProgressBarEnabled) === !1 && !ea.s.isDisallowPopupsSet(),
        eN = b && null != o && (o.hasFeature(ep.oNc.COMMUNITY) || (null != eE && eE > 50)),
        eI = (0, L.Z)(n),
        eC = (null == o ? void 0 : o.hasFeature(ep.oNc.HUB)) === !0,
        eS = m && (null == o ? void 0 : o.hasFeature(ep.oNc.DISCOVERABLE)) === !0,
        eT = (0, y.Q)(),
        eP = (m || (null == o ? void 0 : o.premiumTier) === ep.Eu4.NONE) && !ea.s.isDisallowPopupsSet() && !eT,
        ej = (0, d.e7)([D.Z, ee.Z], () => null != o && null != R && m && !ee.Z.hasLayers() && D.Z.shouldShowGuildTemplateDirtyTooltip(n)),
        eA = (0, d.e7)([K.Z], () => K.Z.getChannel(a)),
        { isPopoutOpen: eZ } = (0, Z.y)(),
        ex = null != (t = null == o ? void 0 : o.hasFeature(ep.oNc.COMMUNITY)) && t,
        ew = (0, d.e7)([B.Z], () => !s().isEmpty(B.Z.getThreadsForGuild(n))),
        eL = el.ZP.isNewUser(R),
        eR = H && !eL,
        eD = (0, C.Z)(R);
    (0, x.Z)(o);
    let ek = (0, P.wE)(p.z.PREMIUM_TUTORIAL_SERVER_MENU_TOOLTIP),
        eM = (0, G.Z)(n),
        eU = (0, w.Z)(n),
        eG = (0, d.e7)([er.ZP], () => er.ZP.getChannelId()),
        eW = (0, d.e7)([en.Z], () => en.Z.desyncedVoiceStatesCount),
        eV = W.Y.useExperiment({ location: 'GuildSidebar' }, { autoTrackExposure: !0 }).enabled,
        eB = (0, S.Q3)('GuildSidebar');
    return (0, r.jsx)(ev, {
        guildId: n,
        hideSelectedChannel: l,
        guild: o,
        scrollToChannel: h,
        selectedChannelId: l ? null : a,
        selectedChannel: eA,
        selectedVoiceChannelId: g,
        voiceStates: c,
        rtcConnectedChannelId: eG,
        rtcDesyncedVoiceStatesCount: eW,
        isUnavailable: j,
        theme: M,
        user: R,
        hasChannelNotice: null != ed || ec,
        anyLayerOpen: eg || em,
        showGuildBoostingProgressBarUpsell: e_,
        showGuildBoostingProgressBarSizeUpsell: eO,
        showInviteSplashUpsell: eP,
        showDiscoveryLandingPageSettingsUpsell: eS,
        showGuildHeaderTutorial: eb,
        showGuildTemplateDirtyTooltip: ej,
        showRoleSubscriptionUpsell: eI,
        showHubPrivacySettingsTooltip: eC,
        showNewUnreadsBar: ex,
        showActiveThreadsNotice: v && null != eE && eE >= 200 && ew,
        showGuildSoundboardPermissionUpsell: eN,
        showMediaChannelUpsell: eM,
        showTierTemplatesUpsell: eU,
        isHeaderPopoutOpen: eZ,
        enableStudyGroup: U,
        isGuildHeaderDismissibleTooltipShown: eu,
        canShowCoachMarkAtBottom: H,
        headerAnalyticsLocations: eo,
        footerAnalyticsLocations: es,
        shouldRenderClipsEducation: eD,
        isTutorialHighlightDismissed: ek,
        shouldRenderBurstCoachmark: eR,
        shouldRenderCustomNotificationSoundsCoachmark: eV,
        isRefreshEnabled: eB
    });
}
