n.d(t, { Z: () => ev }), n(47120), n(653041);
var i = n(200651),
    l = n(192379),
    r = n(392711),
    a = n.n(r),
    s = n(642128),
    o = n(232713),
    d = n(442837),
    c = n(704215),
    u = n(846519),
    h = n(481060),
    m = n(570140),
    p = n(239091),
    g = n(269128),
    _ = n(711237),
    f = n(110924),
    E = n(100527),
    I = n(906732),
    C = n(211242),
    N = n(785203),
    v = n(745837),
    T = n(13228),
    S = n(540059),
    A = n(211644),
    Z = n(605236),
    x = n(243778),
    b = n(492162),
    L = n(818634),
    y = n(596557),
    O = n(817520),
    P = n(999309),
    R = n(408987),
    j = n(130734),
    D = n(499137),
    w = n(258871),
    M = n(972264),
    k = n(11352),
    U = n(304445),
    G = n(344185),
    B = n(155409),
    V = n(10401),
    H = n(970731),
    F = n(210887),
    z = n(592125),
    W = n(796974),
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
    ei = n(374023),
    el = n(373274),
    er = n(315174),
    ea = n(577718),
    es = n(156978),
    eo = n(591190),
    ed = n(327530),
    ec = n(981631),
    eu = n(652785),
    eh = n(921944),
    em = n(647086),
    ep = n(388032),
    eg = n(723247);
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
let ef = 88 + ed.pm,
    eE = ef - 24,
    eI = 'server-settings',
    eC = {
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
class eN extends l.PureComponent {
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
        this.setAnimatedValue(0), m.Z.subscribe('LAYER_PUSH', this.closeAllHeaderNotices), (this.historyUnlisten = U.Z.addRouteChangeListener(this.handleHistoryChange));
        let { location: t } = U.Z.getHistory();
        (null === (e = t.state) || void 0 === e ? void 0 : e.shouldShowSubscribeTooltip) && this.showTimeout.start(1000, () => this.setState({ shouldShowSubscribeTooltip: !0 }));
    }
    componentWillUnmount() {
        this.showTimeout.stop(), this.state.controller.dispose(), this.historyUnlisten(), m.Z.unsubscribe('LAYER_PUSH', this.closeAllHeaderNotices);
    }
    getGuildBannerHash() {
        let { guild: e, hasChannelNotice: t } = this.props;
        return null == e || t ? null : e.banner;
    }
    renderGuildHeaderNotices(e) {
        let { showGuildTemplateDirtyTooltip: t, showGuildHeaderTutorial: n, anyLayerOpen: l } = this.props,
            { shouldShowSubscribeTooltip: r } = this.state;
        return n
            ? (0, i.jsx)('div', {
                  onClick: (t) => (e ? null : t.stopPropagation()),
                  children: (0, i.jsx)(B.Z, {
                      tutorialId: eI,
                      position: 'bottom',
                      inlineSpecs: eC,
                      children: this.renderGuildHeaderDropdownButton(e)
                  })
              })
            : t
              ? (0, i.jsx)(h.ua7, {
                    forceOpen: !0,
                    color: h.FGA.BRAND,
                    position: 'bottom',
                    shouldShow: !e && !l,
                    text: ep.intl.string(ep.t.sFSrFB),
                    'aria-label': ep.intl.string(ep.t.sFSrFB),
                    children: () => this.renderGuildHeaderDropdownButton(e)
                })
              : l || e
                ? this.renderGuildHeaderDropdownButton(e)
                : r
                  ? (0, i.jsx)(h.yRy, {
                        renderPopout: () =>
                            (0, i.jsx)('div', {
                                onClick: (e) => e.stopPropagation(),
                                children: (0, i.jsx)(H.ZP, {
                                    header: ep.intl.string(ep.t['Q3qa4+']),
                                    content: ep.intl.string(ep.t.UyHD4O),
                                    buttonCTA: ep.intl.string(ep.t.U9PrMz),
                                    onClick: this.handleCloseSubscribeTooltip
                                })
                            }),
                        position: 'bottom',
                        align: 'center',
                        animation: h.yRy.Animation.TRANSLATE,
                        shouldShow: !0,
                        children: () => this.renderGuildHeaderDropdownButton(e)
                    })
                  : this.renderGuildHeaderUpsellPopout(e);
    }
    renderGuildHeader(e) {
        let { guild: t, isHeaderPopoutOpen: n, showGuildHeaderTutorial: l, showGuildTemplateDirtyTooltip: r, isGuildHeaderDismissibleTooltipShown: a, headerAnalyticsLocations: s } = this.props,
            { controller: o, renderBanner: d, bannerVisible: c, bannerVisibleHeight: u, communityInfoVisible: m } = this.state,
            p = l || r || a;
        return null == t
            ? null
            : (0, i.jsx)(I.Gt, {
                  value: s,
                  children: (0, i.jsx)(h.KeG, {
                      renderPopout: this.renderMenuPopout,
                      position: 'bottom',
                      align: 'center',
                      animation: h.yRy.Animation.SCALE,
                      shouldShow: n,
                      onRequestClose: () => {
                          (0, L.l)(!1);
                      },
                      children: (l) => {
                          let { onClick: r, ...a } = l;
                          return (0, i.jsx)(er.ZP, {
                              guild: t,
                              controller: o,
                              renderBanner: d,
                              hasSubheader: e,
                              bannerVisible: c,
                              communityInfoVisible: m,
                              guildBanner: this.getGuildBannerHash(),
                              onClick: this.handleHeaderMenuToggle,
                              onContextMenu: this.handleHeaderContextMenu,
                              disableBannerAnimation: p,
                              animationOverlayHeight: u,
                              ...a,
                              children: this.renderGuildHeaderNotices(n)
                          });
                      }
                  })
              });
    }
    setAnimatedValue(e) {
        let { guild: t } = this.props,
            n = null != this.getGuildBannerHash(),
            i = null == t ? void 0 : t.hasCommunityInfoSubheader();
        null != t && (n || i) && (n ? this.setAnimatedValueForBanner(e) : this.setAnimatedValueForGuildInfo(e));
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
        let { isUnavailable: e, guild: t, selectedChannel: n, enableStudyGroup: l, ...r } = this.props;
        if (e || null == t) return (0, i.jsx)(eo.Z, { withBannerPadding: null != t && null != this.getGuildBannerHash() });
        if (t.hasFeature(ec.oNc.HUB) && !l)
            return (0, i.jsx)('div', {
                className: eg.hubContainer,
                children: (0, i.jsx)(w.Z, {
                    guild: t,
                    channel: null != n ? n : K.ZP.getDefaultChannel(t.id)
                })
            });
        {
            let e = t.id === em._ ? el.j : el.E;
            return (0, i.jsx)(e, {
                guild: t,
                ...r,
                guildBanner: this.getGuildBannerHash(),
                hasGuildSubheader: this.state.hasGuildSubheader,
                onScroll: null != t && (null != this.getGuildBannerHash() || t.hasCommunityInfoSubheader()) ? this.pinBannerOrGuildInfo : null
            });
        }
    }
    renderFooter() {
        let { shouldRenderClipsEducation: e } = this.props;
        return (0, i.jsx)(x.ZP, {
            contentTypes: [],
            children: (t) => {
                let { visibleContent: n } = t;
                return e ? (0, i.jsx)(v.Z, {}) : (0, i.jsx)(i.Fragment, {});
            }
        });
    }
    render() {
        let { guild: e, footerAnalyticsLocations: t } = this.props;
        return (0, i.jsxs)('nav', {
            className: eg.container,
            onContextMenu: this.handleContextMenu,
            'aria-label': ep.intl.formatToPlainString(ep.t.nj5gAQ, { guildName: null != e ? e.toString() : '' }),
            children: [
                null != e && this.renderGuildHeader(this.state.hasGuildSubheader),
                null != e &&
                    (0, i.jsx)(es.Z, {
                        guild: e,
                        setHasSubheader: (e) => this.setState({ hasGuildSubheader: e })
                    }),
                this.renderChannelList(),
                (0, i.jsx)(I.Gt, {
                    value: t,
                    children: this.renderFooter()
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            e_(this, 'historyUnlisten', () => {}),
            e_(this, 'showTimeout', new u.V7()),
            e_(this, 'state', {
                controller: new s.Controller({
                    value: 1,
                    immediate: !0
                }),
                renderBanner: !1,
                bannerVisible: !1,
                communityInfoVisible: !1,
                shouldShowSubscribeTooltip: !1,
                bannerVisibleHeight: this.props.isRefreshEnabled ? ef : 88,
                hasGuildSubheader: !1
            }),
            e_(this, 'handleHistoryChange', (e) => {
                null != e.state && e.state.shouldShowSubscribeTooltip && this.showTimeout.start(1000, () => this.setState({ shouldShowSubscribeTooltip: !0 }));
            }),
            e_(this, 'handleHeaderMenuToggle', (e) => {
                let { isHeaderPopoutOpen: t } = this.props;
                e.stopPropagation(), (0, L.l)(!t), this.closeAllHeaderNotices();
            }),
            e_(this, 'handleContextMenu', (e) => {
                let { guild: t } = this.props;
                null != t &&
                    (0, p.jW)(e, async () => {
                        let { default: e } = await n.e('92795').then(n.bind(n, 652171));
                        return (n) =>
                            (0, i.jsx)(e, {
                                ...n,
                                guild: t
                            });
                    });
            }),
            e_(this, 'handleHeaderContextMenu', (e) => {
                let { guild: t } = this.props;
                null != t &&
                    (0, p.jW)(e, async () => {
                        let { default: e } = await Promise.all([n.e('7654'), n.e('44156'), n.e('63104'), n.e('6850'), n.e('16114'), n.e('58227'), n.e('54408'), n.e('11684'), n.e('33213'), n.e('16524')]).then(n.bind(n, 545135));
                        return (n) =>
                            (0, i.jsx)(e, {
                                ...n,
                                guild: t
                            });
                    });
            }),
            e_(this, 'closeAllHeaderNotices', () => {
                this.handleCloseSubscribeTooltip(), this.handleCloseTemplateDirtyTooltip(), this.handleCloseStudentHubPrivacySettingsTooltip();
            }),
            e_(this, 'handleCloseStudentHubPrivacySettingsTooltip', () => {
                var e;
                let t = (0, Z.un)(c.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP),
                    n = null === (e = this.props.guild) || void 0 === e ? void 0 : e.hasFeature(ec.oNc.HUB);
                !t && n && (0, Z.EW)(c.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP, { dismissAction: eh.L.AUTO });
            }),
            e_(this, 'handleCloseSubscribeTooltip', () => {
                this.showTimeout.stop(), this.state.shouldShowSubscribeTooltip && this.setState({ shouldShowSubscribeTooltip: !1 });
            }),
            e_(this, 'handleCloseTemplateDirtyTooltip', () => {
                let { guild: e, showGuildTemplateDirtyTooltip: t } = this.props;
                null != e && t && R.Z.hideGuildTemplateDirtyTooltip(e.id);
            }),
            e_(this, 'renderMenuPopout', async () => {
                let { default: e } = await n.e('46826').then(n.bind(n, 859432));
                return (t) => {
                    let { closePopout: n } = t,
                        { guild: l } = this.props;
                    return (
                        null != l &&
                        (0, i.jsx)(e, {
                            onClose: n,
                            guild: l
                        })
                    );
                };
            }),
            e_(this, 'renderGuildHeaderUpsellPopout', (e) => {
                let { showGuildBoostingProgressBarUpsell: t, showGuildBoostingProgressBarSizeUpsell: n, showRoleSubscriptionUpsell: l, showInviteSplashUpsell: r, showDiscoveryLandingPageSettingsUpsell: a, showHubPrivacySettingsTooltip: s, showActiveThreadsNotice: o, showGuildSoundboardPermissionUpsell: d, showMediaChannelUpsell: u, showTierTemplatesUpsell: h, shouldRenderCustomNotificationSoundsCoachmark: m, guild: p, theme: g } = this.props;
                if (null == p) return this.renderGuildHeaderDropdownButton(e);
                let _ = [];
                return (s && _.push(c.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP), o && _.push(c.z.GUILD_HEADER_ACTIVE_THREADS_NOTICE), t && _.push(c.z.GUILD_HEADER_PREMIUM_GUILD_PROGRESS), n && _.push(c.z.GUILD_HEADER_PROGRESS_BAR_SIZE_COACH_MARK), l && _.push(c.z.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL), d && _.push(c.z.GUILD_HEADER_SOUNDBOARD_PERMISSION), r && _.push(c.z.GUILD_HEADER_INVITE_SPLASH), a && _.push(c.z.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL), 0 === _.length)
                    ? this.renderGuildHeaderDropdownButton(e)
                    : (u && _.push(c.z.MEDIA_CHANNEL_UPSELL),
                      h && _.push(c.z.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL),
                      m && _.push(c.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_COACHMARK),
                      (0, i.jsx)(ea.Z, {
                          contentTypes: _,
                          theme: g,
                          guild: p,
                          renderGuildHeaderDropdownButton: () => this.renderGuildHeaderDropdownButton(e)
                      }));
            }),
            e_(this, 'renderGuildHeaderDropdownButton', (e) =>
                (0, i.jsx)(g.Z, {
                    open: e,
                    className: eg.dropdownButton
                })
            ),
            e_(this, 'setAnimatedValueForBanner', (e) => {
                let t = this.props.isRefreshEnabled ? ef : 88,
                    n = this.props.isRefreshEnabled ? eE : 64,
                    { renderBanner: i, communityInfoVisible: l, bannerVisible: r, bannerVisibleHeight: a, controller: s } = this.state;
                ((e >= n && r) || (e < n && !r)) && (r = !r),
                    ((e >= t && !i) || (e < t && i)) && (i = !i),
                    (a = Math.max(t - e, 0)),
                    (l = r),
                    (i !== this.state.renderBanner || r !== this.state.bannerVisible || a !== this.state.bannerVisibleHeight || l !== this.state.communityInfoVisible) &&
                        this.setState({
                            renderBanner: i,
                            bannerVisible: r,
                            bannerVisibleHeight: a,
                            communityInfoVisible: l
                        }),
                    s
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
function ev(e) {
    var t;
    let { guildId: n, hideSelectedChannel: r, selectedChannelId: s } = e,
        u = (0, d.e7)([X.Z], () => X.Z.getGuild(n));
    (0, _.J_)(n);
    let m = (0, b.Z)(n),
        p = (0, d.e7)([W.Z], () => W.Z.getGuildDimensions(n).scrollTo),
        g = (0, d.e7)([ee.Z], () => ee.Z.getChannelId()),
        [v, x, R] = (0, d.Wu)([J.Z], () => [J.Z.can(ec.Plq.MANAGE_GUILD, u), J.Z.can(ec.Plq.MANAGE_ROLES, u), J.Z.can(ec.Plq.MANAGE_THREADS, u)]),
        w = (0, d.e7)([Y.Z], () => Y.Z.isUnavailable(n)),
        U = (0, d.e7)([et.default], () => et.default.getCurrentUser()),
        B = (0, d.e7)([F.Z], () => (F.Z.darkSidebar ? ec.BRd.DARK : F.Z.theme)),
        { enableStudyGroup: H } = (0, D.s)(u),
        K = (0, A.ZP)((e) => e.currentlyShown.has(c.z.NAGBAR_NOTICE_CONNECT_PLAYSTATION)),
        [el, er] = l.useState(!K),
        ea = (0, f.Z)(n),
        { analyticsLocations: es } = (0, I.ZP)(E.Z.GUILD_HEADER),
        { analyticsLocations: eo } = (0, I.ZP)(E.Z.GUILD_CHANNEL_LIST_FOOTER);
    l.useEffect(() => {
        n !== ea && er(!K);
    }, [n, ea, K]);
    let [ed, em] = (0, A.ZP)((e) => [eu.XN.some((t) => e.currentlyShown.has(t.dismissibleContentType)), e.currentlyShownGroup.has(eh.R.GUILD_HEADER_TOOLTIPS)], o.X),
        ep = (0, N.Z)(u),
        eg = (0, h.s9z)(h.JQI),
        e_ = (0, d.e7)([Q.Z], () => Q.Z.hasLayers()),
        ef = (0, d.e7)([V.Z], () => V.Z.shouldShow(eI)),
        eE = v && (null == u ? void 0 : u.premiumProgressBarEnabled) === !1 && !ei.s.isDisallowPopupsSet(),
        eC = (0, d.e7)([q.Z], () => q.Z.getMemberCount(n)),
        ev = v && null != eC && eC >= 30 && (null == u ? void 0 : u.premiumProgressBarEnabled) === !1 && !ei.s.isDisallowPopupsSet(),
        eT = x && null != u && (u.hasFeature(ec.oNc.COMMUNITY) || (null != eC && eC > 50)),
        eS = (0, P.Z)(n),
        eA = (null == u ? void 0 : u.hasFeature(ec.oNc.HUB)) === !0,
        eZ = v && (null == u ? void 0 : u.hasFeature(ec.oNc.DISCOVERABLE)) === !0,
        ex = (0, C.Q)(),
        eb = (v || (null == u ? void 0 : u.premiumTier) === ec.Eu4.NONE) && !ei.s.isDisallowPopupsSet() && !ex,
        eL = (0, d.e7)([j.Z, Q.Z], () => null != u && null != U && v && !Q.Z.hasLayers() && j.Z.shouldShowGuildTemplateDirtyTooltip(n)),
        ey = (0, d.e7)([z.Z], () => z.Z.getChannel(s)),
        { isPopoutOpen: eO } = (0, L.y)(),
        eP = null !== (t = null == u ? void 0 : u.hasFeature(ec.oNc.COMMUNITY)) && void 0 !== t && t,
        eR = (0, d.e7)([G.Z], () => !a().isEmpty(G.Z.getThreadsForGuild(n))),
        ej = en.ZP.isNewUser(U),
        eD = el && !ej,
        ew = (0, T.Z)(U);
    (0, y.Z)(u);
    let eM = (0, Z.wE)(c.z.PREMIUM_TUTORIAL_SERVER_MENU_TOOLTIP),
        ek = (0, M.Z)(n),
        eU = (0, O.Z)(n),
        eG = (0, d.e7)([ee.Z], () => ee.Z.getChannelId()),
        eB = (0, d.e7)([$.Z], () => $.Z.desyncedVoiceStatesCount),
        eV = k.Y.useExperiment({ location: 'GuildSidebar' }, { autoTrackExposure: !0 }).enabled,
        eH = (0, S.Q3)('GuildSidebar');
    return (0, i.jsx)(eN, {
        guildId: n,
        hideSelectedChannel: r,
        guild: u,
        scrollToChannel: p,
        selectedChannelId: r ? null : s,
        selectedChannel: ey,
        selectedVoiceChannelId: g,
        voiceStates: m,
        rtcConnectedChannelId: eG,
        rtcDesyncedVoiceStatesCount: eB,
        isUnavailable: w,
        theme: B,
        user: U,
        hasChannelNotice: null != ep || ed,
        anyLayerOpen: eg || e_,
        showGuildBoostingProgressBarUpsell: eE,
        showGuildBoostingProgressBarSizeUpsell: ev,
        showInviteSplashUpsell: eb,
        showDiscoveryLandingPageSettingsUpsell: eZ,
        showGuildHeaderTutorial: ef,
        showGuildTemplateDirtyTooltip: eL,
        showRoleSubscriptionUpsell: eS,
        showHubPrivacySettingsTooltip: eA,
        showNewUnreadsBar: eP,
        showActiveThreadsNotice: R && null != eC && eC >= 200 && eR,
        showGuildSoundboardPermissionUpsell: eT,
        showMediaChannelUpsell: ek,
        showTierTemplatesUpsell: eU,
        isHeaderPopoutOpen: eO,
        enableStudyGroup: H,
        isGuildHeaderDismissibleTooltipShown: em,
        canShowCoachMarkAtBottom: el,
        headerAnalyticsLocations: es,
        footerAnalyticsLocations: eo,
        shouldRenderClipsEducation: ew,
        isTutorialHighlightDismissed: eM,
        shouldRenderBurstCoachmark: eD,
        shouldRenderCustomNotificationSoundsCoachmark: eV,
        isRefreshEnabled: eH
    });
}
