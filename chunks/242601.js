n.d(t, {
    Z: function () {
        return eS;
    }
}),
    n(47120),
    n(653041);
var i = n(200651),
    r = n(192379),
    l = n(392711),
    a = n.n(l),
    s = n(666912),
    o = n(232713),
    c = n(442837),
    d = n(704215),
    u = n(846519),
    h = n(481060),
    m = n(570140),
    p = n(239091),
    g = n(269128),
    f = n(711237),
    _ = n(110924),
    E = n(100527),
    I = n(906732),
    C = n(211242),
    N = n(785203),
    v = n(745837),
    S = n(13228),
    T = n(540059),
    b = n(211644),
    A = n(605236),
    Z = n(243778),
    x = n(492162),
    L = n(818634),
    P = n(596557),
    O = n(817520),
    y = n(999309),
    R = n(408987),
    j = n(130734),
    D = n(499137),
    M = n(258871),
    w = n(972264),
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
    er = n(373274),
    el = n(315174),
    ea = n(577718),
    es = n(156978),
    eo = n(591190),
    ec = n(327530),
    ed = n(981631),
    eu = n(652785),
    eh = n(921944),
    em = n(647086),
    ep = n(388032),
    eg = n(325382);
function ef(e, t, n) {
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
let e_ = 88 + ec.pm,
    eE = 64,
    eI = e_ - 24,
    eC = 'server-settings',
    eN = {
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
class ev extends r.PureComponent {
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
        let { showGuildTemplateDirtyTooltip: t, showGuildHeaderTutorial: n, anyLayerOpen: r } = this.props,
            { shouldShowSubscribeTooltip: l } = this.state;
        if (n)
            return (0, i.jsx)('div', {
                onClick: (t) => (e ? null : t.stopPropagation()),
                children: (0, i.jsx)(B.Z, {
                    tutorialId: eC,
                    position: 'bottom',
                    inlineSpecs: eN,
                    children: this.renderGuildHeaderDropdownButton(e)
                })
            });
        if (t)
            return (0, i.jsx)(h.Tooltip, {
                forceOpen: !0,
                color: h.TooltipColors.BRAND,
                position: 'bottom',
                shouldShow: !e && !r,
                text: ep.intl.string(ep.t.sFSrFB),
                'aria-label': ep.intl.string(ep.t.sFSrFB),
                children: () => this.renderGuildHeaderDropdownButton(e)
            });
        if (!r && !e)
            return l
                ? (0, i.jsx)(h.Popout, {
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
                      animation: h.Popout.Animation.TRANSLATE,
                      shouldShow: !0,
                      children: () => this.renderGuildHeaderDropdownButton(e)
                  })
                : this.renderGuildHeaderUpsellPopout(e);
        return this.renderGuildHeaderDropdownButton(e);
    }
    renderGuildHeader(e) {
        let { guild: t, isHeaderPopoutOpen: n, showGuildHeaderTutorial: r, showGuildTemplateDirtyTooltip: l, isGuildHeaderDismissibleTooltipShown: a, headerAnalyticsLocations: s } = this.props,
            { controller: o, renderBanner: c, bannerVisible: d, bannerVisibleHeight: u, communityInfoVisible: m } = this.state,
            p = r || l || a;
        return null == t
            ? null
            : (0, i.jsx)(I.Gt, {
                  value: s,
                  children: (0, i.jsx)(h.LazyPopout, {
                      renderPopout: this.renderMenuPopout,
                      position: 'bottom',
                      align: 'center',
                      animation: h.Popout.Animation.SCALE,
                      shouldShow: n,
                      onRequestClose: () => {
                          (0, L.l)(!1);
                      },
                      children: (r) => {
                          let { onClick: l, ...a } = r;
                          return (0, i.jsx)(el.ZP, {
                              guild: t,
                              controller: o,
                              renderBanner: c,
                              hasSubheader: e,
                              bannerVisible: d,
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
        if (null != t && (!!n || !!i)) n ? this.setAnimatedValueForBanner(e) : this.setAnimatedValueForGuildInfo(e);
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
        let { isUnavailable: e, guild: t, selectedChannel: n, enableStudyGroup: r, ...l } = this.props;
        if (e || null == t) return (0, i.jsx)(eo.Z, { withBannerPadding: null != t && null != this.getGuildBannerHash() });
        if (t.hasFeature(ed.oNc.HUB) && !r)
            return (0, i.jsx)('div', {
                className: eg.hubContainer,
                children: (0, i.jsx)(M.Z, {
                    guild: t,
                    channel: null != n ? n : K.ZP.getDefaultChannel(t.id)
                })
            });
        {
            let e = t.id === em._ ? er.j : er.E;
            return (0, i.jsx)(e, {
                guild: t,
                ...l,
                guildBanner: this.getGuildBannerHash(),
                hasGuildSubheader: this.state.hasGuildSubheader,
                onScroll: null != t && (null != this.getGuildBannerHash() || t.hasCommunityInfoSubheader()) ? this.pinBannerOrGuildInfo : null
            });
        }
    }
    renderFooter() {
        let { shouldRenderClipsEducation: e } = this.props;
        return (0, i.jsx)(Z.ZP, {
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
            ef(this, 'historyUnlisten', () => {}),
            ef(this, 'showTimeout', new u.V7()),
            ef(this, 'state', {
                controller: new s.Controller({
                    value: 1,
                    immediate: !0
                }),
                renderBanner: !1,
                bannerVisible: !1,
                communityInfoVisible: !1,
                shouldShowSubscribeTooltip: !1,
                bannerVisibleHeight: this.props.isRefreshEnabled ? e_ : 88,
                hasGuildSubheader: !1
            }),
            ef(this, 'handleHistoryChange', (e) => {
                null != e.state && e.state.shouldShowSubscribeTooltip && this.showTimeout.start(1000, () => this.setState({ shouldShowSubscribeTooltip: !0 }));
            }),
            ef(this, 'handleHeaderMenuToggle', (e) => {
                let { isHeaderPopoutOpen: t } = this.props;
                e.stopPropagation(), (0, L.l)(!t), this.closeAllHeaderNotices();
            }),
            ef(this, 'handleContextMenu', (e) => {
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
            ef(this, 'handleHeaderContextMenu', (e) => {
                let { guild: t } = this.props;
                null != t &&
                    (0, p.jW)(e, async () => {
                        let { default: e } = await Promise.all([n.e('63288'), n.e('33053'), n.e('15669'), n.e('7654'), n.e('98479'), n.e('31113'), n.e('60696'), n.e('58227'), n.e('16114'), n.e('4604'), n.e('33213'), n.e('43954')]).then(n.bind(n, 545135));
                        return (n) =>
                            (0, i.jsx)(e, {
                                ...n,
                                guild: t
                            });
                    });
            }),
            ef(this, 'closeAllHeaderNotices', () => {
                this.handleCloseSubscribeTooltip(), this.handleCloseTemplateDirtyTooltip(), this.handleCloseStudentHubPrivacySettingsTooltip();
            }),
            ef(this, 'handleCloseStudentHubPrivacySettingsTooltip', () => {
                var e;
                let t = (0, A.un)(d.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP),
                    n = null === (e = this.props.guild) || void 0 === e ? void 0 : e.hasFeature(ed.oNc.HUB);
                !t && n && (0, A.EW)(d.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP, { dismissAction: eh.L.AUTO });
            }),
            ef(this, 'handleCloseSubscribeTooltip', () => {
                this.showTimeout.stop(), this.state.shouldShowSubscribeTooltip && this.setState({ shouldShowSubscribeTooltip: !1 });
            }),
            ef(this, 'handleCloseTemplateDirtyTooltip', () => {
                let { guild: e, showGuildTemplateDirtyTooltip: t } = this.props;
                null != e && t && R.Z.hideGuildTemplateDirtyTooltip(e.id);
            }),
            ef(this, 'renderMenuPopout', async () => {
                let { default: e } = await n.e('46826').then(n.bind(n, 859432));
                return (t) => {
                    let { closePopout: n } = t,
                        { guild: r } = this.props;
                    return (
                        null != r &&
                        (0, i.jsx)(e, {
                            onClose: n,
                            guild: r
                        })
                    );
                };
            }),
            ef(this, 'renderGuildHeaderUpsellPopout', (e) => {
                let { showGuildBoostingProgressBarUpsell: t, showGuildBoostingProgressBarSizeUpsell: n, showRoleSubscriptionUpsell: r, showInviteSplashUpsell: l, showDiscoveryLandingPageSettingsUpsell: a, showHubPrivacySettingsTooltip: s, showActiveThreadsNotice: o, showGuildSoundboardPermissionUpsell: c, showMediaChannelUpsell: u, showTierTemplatesUpsell: h, shouldRenderCustomNotificationSoundsCoachmark: m, guild: p, theme: g } = this.props;
                if (null == p) return this.renderGuildHeaderDropdownButton(e);
                let f = [];
                return (s && f.push(d.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP), o && f.push(d.z.GUILD_HEADER_ACTIVE_THREADS_NOTICE), t && f.push(d.z.GUILD_HEADER_PREMIUM_GUILD_PROGRESS), n && f.push(d.z.GUILD_HEADER_PROGRESS_BAR_SIZE_COACH_MARK), r && f.push(d.z.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL), c && f.push(d.z.GUILD_HEADER_SOUNDBOARD_PERMISSION), l && f.push(d.z.GUILD_HEADER_INVITE_SPLASH), a && f.push(d.z.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL), 0 === f.length)
                    ? this.renderGuildHeaderDropdownButton(e)
                    : (u && f.push(d.z.MEDIA_CHANNEL_UPSELL),
                      h && f.push(d.z.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL),
                      m && f.push(d.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_COACHMARK),
                      (0, i.jsx)(ea.Z, {
                          contentTypes: f,
                          theme: g,
                          guild: p,
                          renderGuildHeaderDropdownButton: () => this.renderGuildHeaderDropdownButton(e)
                      }));
            }),
            ef(this, 'renderGuildHeaderDropdownButton', (e) =>
                (0, i.jsx)(g.Z, {
                    open: e,
                    className: eg.dropdownButton
                })
            ),
            ef(this, 'setAnimatedValueForBanner', (e) => {
                let t = this.props.isRefreshEnabled ? e_ : 88,
                    n = this.props.isRefreshEnabled ? eI : eE,
                    { renderBanner: i, communityInfoVisible: r, bannerVisible: l, bannerVisibleHeight: a, controller: s } = this.state;
                ((e >= n && l) || (e < n && !l)) && (l = !l),
                    ((e >= t && !i) || (e < t && i)) && (i = !i),
                    (a = Math.max(t - e, 0)),
                    (r = l),
                    (i !== this.state.renderBanner || l !== this.state.bannerVisible || a !== this.state.bannerVisibleHeight || r !== this.state.communityInfoVisible) &&
                        this.setState({
                            renderBanner: i,
                            bannerVisible: l,
                            bannerVisibleHeight: a,
                            communityInfoVisible: r
                        }),
                    s
                        .update({
                            value: Math.min(1, Math.max(0, 1 - e / t)),
                            immediate: !0
                        })
                        .start();
            }),
            ef(this, 'pinBannerOrGuildInfo', (e) => {
                let { scrollTop: t } = e;
                this.setAnimatedValue(t);
            });
    }
}
function eS(e) {
    var t;
    let { guildId: n, hideSelectedChannel: l, selectedChannelId: s } = e,
        u = (0, c.e7)([X.Z], () => X.Z.getGuild(n));
    (0, f.J_)(n);
    let m = (0, x.Z)(n),
        p = (0, c.e7)([W.Z], () => W.Z.getGuildDimensions(n).scrollTo),
        g = (0, c.e7)([ee.Z], () => ee.Z.getChannelId()),
        [v, Z, R] = (0, c.Wu)([J.Z], () => [J.Z.can(ed.Plq.MANAGE_GUILD, u), J.Z.can(ed.Plq.MANAGE_ROLES, u), J.Z.can(ed.Plq.MANAGE_THREADS, u)]),
        M = (0, c.e7)([Y.Z], () => Y.Z.isUnavailable(n)),
        U = (0, c.e7)([et.default], () => et.default.getCurrentUser()),
        B = (0, c.e7)([F.Z], () => (F.Z.darkSidebar ? ed.BRd.DARK : F.Z.theme)),
        { enableStudyGroup: H } = (0, D.s)(u),
        K = (0, b.ZP)((e) => e.currentlyShown.has(d.z.NAGBAR_NOTICE_CONNECT_PLAYSTATION)),
        [er, el] = r.useState(!K),
        ea = (0, _.Z)(n),
        { analyticsLocations: es } = (0, I.ZP)(E.Z.GUILD_HEADER),
        { analyticsLocations: eo } = (0, I.ZP)(E.Z.GUILD_CHANNEL_LIST_FOOTER);
    r.useEffect(() => {
        n !== ea && el(!K);
    }, [n, ea, K]);
    let [ec, em] = (0, b.ZP)((e) => [eu.XN.some((t) => e.currentlyShown.has(t.dismissibleContentType)), e.currentlyShownGroup.has(eh.R.GUILD_HEADER_TOOLTIPS)], o.X),
        ep = (0, N.Z)(u),
        eg = (0, h.useModalsStore)(h.hasAnyModalOpenSelector),
        ef = (0, c.e7)([Q.Z], () => Q.Z.hasLayers()),
        e_ = (0, c.e7)([V.Z], () => V.Z.shouldShow(eC)),
        eE = v && (null == u ? void 0 : u.premiumProgressBarEnabled) === !1 && !ei.s.isDisallowPopupsSet(),
        eI = (0, c.e7)([q.Z], () => q.Z.getMemberCount(n)),
        eN = v && null != eI && eI >= 30 && (null == u ? void 0 : u.premiumProgressBarEnabled) === !1 && !ei.s.isDisallowPopupsSet(),
        eS = Z && null != u && (u.hasFeature(ed.oNc.COMMUNITY) || (null != eI && eI > 50)),
        eT = (0, y.Z)(n),
        eb = (null == u ? void 0 : u.hasFeature(ed.oNc.HUB)) === !0,
        eA = v && (null == u ? void 0 : u.hasFeature(ed.oNc.DISCOVERABLE)) === !0,
        eZ = (0, C.Q)(),
        ex = (v || (null == u ? void 0 : u.premiumTier) === ed.Eu4.NONE) && !ei.s.isDisallowPopupsSet() && !eZ,
        eL = (0, c.e7)([j.Z, Q.Z], () => null != u && null != U && v && !Q.Z.hasLayers() && j.Z.shouldShowGuildTemplateDirtyTooltip(n)),
        eP = (0, c.e7)([z.Z], () => z.Z.getChannel(s)),
        { isPopoutOpen: eO } = (0, L.y)(),
        ey = null !== (t = null == u ? void 0 : u.hasFeature(ed.oNc.COMMUNITY)) && void 0 !== t && t,
        eR = (0, c.e7)([G.Z], () => !a().isEmpty(G.Z.getThreadsForGuild(n))),
        ej = en.ZP.isNewUser(U),
        eD = er && !ej,
        eM = (0, S.Z)(U);
    (0, P.Z)(u);
    let ew = (0, A.wE)(d.z.PREMIUM_TUTORIAL_SERVER_MENU_TOOLTIP),
        ek = (0, w.Z)(n),
        eU = (0, O.Z)(n),
        eG = (0, c.e7)([ee.Z], () => ee.Z.getChannelId()),
        eB = (0, c.e7)([$.Z], () => $.Z.desyncedVoiceStatesCount),
        eV = k.Y.useExperiment({ location: 'GuildSidebar' }, { autoTrackExposure: !0 }).enabled,
        eH = (0, T.Q3)('GuildSidebar');
    return (0, i.jsx)(ev, {
        guildId: n,
        hideSelectedChannel: l,
        guild: u,
        scrollToChannel: p,
        selectedChannelId: l ? null : s,
        selectedChannel: eP,
        selectedVoiceChannelId: g,
        voiceStates: m,
        rtcConnectedChannelId: eG,
        rtcDesyncedVoiceStatesCount: eB,
        isUnavailable: M,
        theme: B,
        user: U,
        hasChannelNotice: null != ep || ec,
        anyLayerOpen: eg || ef,
        showGuildBoostingProgressBarUpsell: eE,
        showGuildBoostingProgressBarSizeUpsell: eN,
        showInviteSplashUpsell: ex,
        showDiscoveryLandingPageSettingsUpsell: eA,
        showGuildHeaderTutorial: e_,
        showGuildTemplateDirtyTooltip: eL,
        showRoleSubscriptionUpsell: eT,
        showHubPrivacySettingsTooltip: eb,
        showNewUnreadsBar: ey,
        showActiveThreadsNotice: R && null != eI && eI >= 200 && eR,
        showGuildSoundboardPermissionUpsell: eS,
        showMediaChannelUpsell: ek,
        showTierTemplatesUpsell: eU,
        isHeaderPopoutOpen: eO,
        enableStudyGroup: H,
        isGuildHeaderDismissibleTooltipShown: em,
        canShowCoachMarkAtBottom: er,
        headerAnalyticsLocations: es,
        footerAnalyticsLocations: eo,
        shouldRenderClipsEducation: eM,
        isTutorialHighlightDismissed: ew,
        shouldRenderBurstCoachmark: eD,
        shouldRenderCustomNotificationSoundsCoachmark: eV,
        isRefreshEnabled: eH
    });
}
