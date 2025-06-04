n.d(t, { Z: () => eT }), n(388685), n(539854);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(392711),
    s = n.n(o),
    c = n(386230),
    u = n(94171),
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
    y = n(906732),
    I = n(211242),
    v = n(785203),
    C = n(745837),
    S = n(13228),
    N = n(540059),
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
    V = n(50101),
    B = n(639777),
    H = n(11352),
    F = n(304445),
    z = n(344185),
    W = n(155409),
    Y = n(10401),
    K = n(970731),
    q = n(210887),
    X = n(592125),
    Q = n(796974),
    J = n(486472),
    $ = n(984933),
    ee = n(650774),
    et = n(430824),
    en = n(819640),
    er = n(496675),
    ei = n(878884),
    el = n(19780),
    ea = n(594174),
    eo = n(74538),
    es = n(374023),
    ec = n(373274),
    eu = n(315174),
    ed = n(577718),
    ep = n(156978),
    eh = n(591190),
    ef = n(981631),
    eg = n(652785),
    em = n(921944),
    eb = n(647086),
    e_ = n(388032),
    eE = n(540835);
function eO(e, t, n) {
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
function ey(e) {
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
                eO(e, t, n[t]);
            });
    }
    return e;
}
function eI(e, t) {
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
function ev(e, t) {
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
let eC = 'server-settings',
    eS = {
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
class eN extends i.PureComponent {
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
        this.setAnimatedValue(0), g.Z.subscribe('LAYER_PUSH', this.closeAllHeaderNotices), (this.historyUnlisten = F.Z.addRouteChangeListener(this.handleHistoryChange));
        let { location: t } = F.Z.getHistory();
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
                  children: (0, r.jsx)(W.Z, {
                      tutorialId: eC,
                      position: 'bottom',
                      inlineSpecs: eS,
                      children: this.renderGuildHeaderDropdownButton(e)
                  })
              })
            : t
              ? (0, r.jsx)(f.ua7, {
                    forceOpen: !0,
                    color: f.FGA.BRAND,
                    position: 'bottom',
                    shouldShow: !e && !i,
                    text: e_.intl.string(e_.t.sFSrFB),
                    'aria-label': e_.intl.string(e_.t.sFSrFB),
                    children: () => this.renderGuildHeaderDropdownButton(e)
                })
              : i || e
                ? this.renderGuildHeaderDropdownButton(e)
                : l
                  ? (0, r.jsx)(f.yRy, {
                        targetElementRef: this.guildHeaderDropdownButtonRef,
                        renderPopout: () =>
                            (0, r.jsx)('div', {
                                onClick: (e) => e.stopPropagation(),
                                children: (0, r.jsx)(K.ZP, {
                                    header: e_.intl.string(e_.t['Q3qa4+']),
                                    content: e_.intl.string(e_.t.UyHD4O),
                                    buttonCTA: e_.intl.string(e_.t.U9PrMz),
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
            : (0, U.jW)({ location: 'guild_sidebar' }).entrypoints
              ? (0, r.jsx)(y.Gt, {
                    value: o,
                    children: (0, r.jsx)(eu.ZP, {
                        guild: t,
                        controller: c,
                        renderBanner: u,
                        hasSubheader: e,
                        bannerVisible: d,
                        communityInfoVisible: h,
                        guildBanner: this.getGuildBannerHash(),
                        onContextMenu: this.handleHeaderContextMenu,
                        disableBannerAnimation: g,
                        animationOverlayHeight: p,
                        children: this.renderGuildHeaderNotices(n)
                    })
                })
              : (0, r.jsx)(y.Gt, {
                    value: o,
                    children: (0, r.jsx)(f.KeG, {
                        targetElementRef: this.guildHeaderRef,
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
                                a = ev(i, ['onClick']);
                            return (0, r.jsx)(
                                eu.ZP,
                                eI(
                                    ey(
                                        {
                                            ref: this.guildHeaderRef,
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
            a = ev(e, ['isUnavailable', 'guild', 'selectedChannel', 'enableStudyGroup']);
        if (t || null == n) return (0, r.jsx)(eh.Z, { withBannerPadding: null != n && null != this.getGuildBannerHash() });
        {
            if (n.hasFeature(ef.oNc.HUB) && !l)
                return (0, r.jsx)('div', {
                    className: eE.hubContainer,
                    children: (0, r.jsx)(M.Z, {
                        guild: n,
                        channel: null != i ? i : $.ZP.getDefaultChannel(n.id)
                    })
                });
            let e = n.id === eb._ ? ec.j : ec.E;
            return (0, r.jsx)(
                e,
                eI(ey({ guild: n }, a), {
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
                return e ? (0, r.jsx)(C.Z, {}) : null;
            }
        });
    }
    render() {
        let { guild: e, footerAnalyticsLocations: t } = this.props;
        return (0, r.jsxs)('nav', {
            className: eE.container,
            onContextMenu: this.handleContextMenu,
            'aria-label': e_.intl.formatToPlainString(e_.t.nj5gAQ, { guildName: null != e ? e.toString() : '' }),
            children: [
                null != e && this.renderGuildHeader(this.state.hasGuildSubheader),
                null != e &&
                    (0, r.jsx)(ep.Z, {
                        guild: e,
                        setHasSubheader: (e) => this.setState({ hasGuildSubheader: e })
                    }),
                this.renderChannelList(),
                (0, r.jsx)(y.Gt, {
                    value: t,
                    children: this.renderFooter()
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            eO(this, 'historyUnlisten', () => {}),
            eO(this, 'guildHeaderRef', i.createRef()),
            eO(this, 'guildHeaderDropdownButtonRef', i.createRef()),
            eO(this, 'showTimeout', new h.V7()),
            eO(this, 'state', {
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
            eO(this, 'handleHistoryChange', (e) => {
                null != e.state && e.state.shouldShowSubscribeTooltip && this.showTimeout.start(1000, () => this.setState({ shouldShowSubscribeTooltip: !0 }));
            }),
            eO(this, 'handleHeaderMenuToggle', (e) => {
                let { isHeaderPopoutOpen: t } = this.props;
                e.stopPropagation(), (0, Z.l)(!t), this.closeAllHeaderNotices();
            }),
            eO(this, 'handleContextMenu', (e) => {
                let { guild: t } = this.props;
                null != t &&
                    (0, m.jW)(e, async () => {
                        let { default: e } = await n.e('92795').then(n.bind(n, 652171));
                        return (n) => (0, r.jsx)(e, eI(ey({}, n), { guild: t }));
                    });
            }),
            eO(this, 'handleHeaderContextMenu', (e) => {
                let { guild: t } = this.props;
                null != t &&
                    (0, m.jW)(e, async () => {
                        let { default: e } = await Promise.all([n.e('7654'), n.e('44156'), n.e('55616'), n.e('49286'), n.e('6850'), n.e('58227'), n.e('32652'), n.e('54408'), n.e('20087'), n.e('92754'), n.e('87154'), n.e('33213'), n.e('15875')]).then(n.bind(n, 545135));
                        return (n) => (0, r.jsx)(e, eI(ey({}, n), { guild: t }));
                    });
            }),
            eO(this, 'closeAllHeaderNotices', () => {
                this.handleCloseSubscribeTooltip(), this.handleCloseTemplateDirtyTooltip(), this.handleCloseStudentHubPrivacySettingsTooltip();
            }),
            eO(this, 'handleCloseStudentHubPrivacySettingsTooltip', () => {
                var e;
                let t = (0, P.un)(p.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP),
                    n = null == (e = this.props.guild) ? void 0 : e.hasFeature(ef.oNc.HUB);
                !t && n && (0, P.EW)(p.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP, { dismissAction: em.L.AUTO });
            }),
            eO(this, 'handleCloseSubscribeTooltip', () => {
                this.showTimeout.stop(), this.state.shouldShowSubscribeTooltip && this.setState({ shouldShowSubscribeTooltip: !1 });
            }),
            eO(this, 'handleCloseTemplateDirtyTooltip', () => {
                let { guild: e, showGuildTemplateDirtyTooltip: t } = this.props;
                null != e && t && R.Z.hideGuildTemplateDirtyTooltip(e.id);
            }),
            eO(this, 'renderMenuPopout', async () => {
                let { default: e } = await Promise.all([n.e('87154'), n.e('42018')]).then(n.bind(n, 859432));
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
            eO(this, 'renderGuildHeaderUpsellPopout', (e) => {
                let { showGuildBoostingProgressBarUpsell: t, showGuildBoostingProgressBarSizeUpsell: n, showRoleSubscriptionUpsell: i, showInviteSplashUpsell: l, showDiscoveryLandingPageSettingsUpsell: a, showHubPrivacySettingsTooltip: o, showActiveThreadsNotice: s, showGuildSoundboardPermissionUpsell: c, showMediaChannelUpsell: u, showTierTemplatesUpsell: d, shouldRenderCustomNotificationSoundsCoachmark: h, shouldRenderGuildPowerupPerkCoachmark: f, guild: g, theme: m } = this.props;
                if (null == g) return this.renderGuildHeaderDropdownButton(e);
                let b = [];
                return (o && b.push(p.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP), s && b.push(p.z.GUILD_HEADER_ACTIVE_THREADS_NOTICE), t && b.push(p.z.GUILD_HEADER_PREMIUM_GUILD_PROGRESS), n && b.push(p.z.GUILD_HEADER_PROGRESS_BAR_SIZE_COACH_MARK), i && b.push(p.z.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL), c && b.push(p.z.GUILD_HEADER_SOUNDBOARD_PERMISSION), l && b.push(p.z.GUILD_HEADER_INVITE_SPLASH), a && b.push(p.z.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL), f && b.push(p.z.GUILD_POWERUP_PERKS_COACHMARK), 0 === b.length)
                    ? this.renderGuildHeaderDropdownButton(e)
                    : (u && b.push(p.z.MEDIA_CHANNEL_UPSELL),
                      d && b.push(p.z.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL),
                      h && b.push(p.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_COACHMARK),
                      (0, r.jsx)(ed.Z, {
                          contentTypes: b,
                          theme: m,
                          guild: g,
                          renderGuildHeaderDropdownButton: () => this.renderGuildHeaderDropdownButton(e)
                      }));
            }),
            eO(this, 'renderGuildHeaderDropdownButton', (e) =>
                (0, U.jW)({ location: 'guild_sidebar' }).entrypoints
                    ? (0, r.jsx)(eu.wD, { open: e })
                    : (0, r.jsx)(b.Z, {
                          open: e,
                          className: a()(eE.dropdownButton, { [eE.dropdownButtonBannerVisible]: this.state.bannerVisible }),
                          ref: this.guildHeaderDropdownButtonRef
                      })
            ),
            eO(this, 'setAnimatedValueForBanner', (e) => {
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
            eO(this, 'pinBannerOrGuildInfo', (e) => {
                let { scrollTop: t } = e;
                this.setAnimatedValue(t);
            });
    }
}
function eT(e) {
    var t;
    let { guildId: n, hideSelectedChannel: l, selectedChannelId: a } = e,
        o = (0, d.e7)([et.Z], () => et.Z.getGuild(n));
    (0, _.J_)(n);
    let c = (0, A.Z)(n),
        h = (0, d.e7)([Q.Z], () => Q.Z.getGuildDimensions(n).scrollTo),
        g = (0, d.e7)([el.Z], () => el.Z.getChannelId()),
        [m, b, C] = (0, d.Wu)([er.Z], () => [er.Z.can(ef.Plq.MANAGE_GUILD, o), er.Z.can(ef.Plq.MANAGE_ROLES, o), er.Z.can(ef.Plq.MANAGE_THREADS, o)]),
        j = (0, d.e7)([J.Z], () => J.Z.isUnavailable(n)),
        R = (0, d.e7)([ea.default], () => ea.default.getCurrentUser()),
        M = (0, d.e7)([q.Z], () => (q.Z.darkSidebar ? ef.BRd.DARK : q.Z.theme)),
        { enableStudyGroup: U } = (0, k.s)(o),
        F = (0, T.ZP)((e) => e.currentlyShown.has(p.z.NAGBAR_NOTICE_CONNECT_PLAYSTATION)),
        [W, K] = i.useState(!F),
        $ = (0, E.Z)(n),
        { analyticsLocations: ec } = (0, y.ZP)(O.Z.GUILD_HEADER),
        { analyticsLocations: eu } = (0, y.ZP)(O.Z.GUILD_CHANNEL_LIST_FOOTER);
    i.useEffect(() => {
        n !== $ && K(!F);
    }, [n, $, F]);
    let [ed, ep] = (0, T.ZP)((e) => [eg.XN.some((t) => e.currentlyShown.has(t.dismissibleContentType)), e.currentlyShownGroup.has(em.R.GUILD_HEADER_TOOLTIPS)], u.X),
        eh = (0, v.Z)(o),
        eb = (0, f.s9z)(f.JQI),
        e_ = (0, d.e7)([en.Z], () => en.Z.hasLayers()),
        eE = (0, d.e7)([Y.Z], () => Y.Z.shouldShow(eC)),
        eO = m && (null == o ? void 0 : o.premiumProgressBarEnabled) === !1 && !es.s.isDisallowPopupsSet(),
        ey = (0, d.e7)([ee.Z], () => ee.Z.getMemberCount(n)),
        eI = m && null != ey && ey >= 30 && (null == o ? void 0 : o.premiumProgressBarEnabled) === !1 && !es.s.isDisallowPopupsSet(),
        ev = b && null != o && (o.hasFeature(ef.oNc.COMMUNITY) || (null != ey && ey > 50)),
        eS = (0, L.Z)(n),
        eT = (null == o ? void 0 : o.hasFeature(ef.oNc.HUB)) === !0,
        eP = m && (null == o ? void 0 : o.hasFeature(ef.oNc.DISCOVERABLE)) === !0,
        ej = (0, I.Q)(),
        eA = (m || (null == o ? void 0 : o.premiumTier) === ef.Eu4.NONE) && !es.s.isDisallowPopupsSet() && !ej,
        eZ = (0, d.e7)([D.Z, en.Z], () => null != o && null != R && m && !en.Z.hasLayers() && D.Z.shouldShowGuildTemplateDirtyTooltip(n)),
        ex = (0, d.e7)([X.Z], () => X.Z.getChannel(a)),
        { isPopoutOpen: ew } = (0, Z.y)(),
        eL = null != (t = null == o ? void 0 : o.hasFeature(ef.oNc.COMMUNITY)) && t,
        eR = (0, d.e7)([z.Z], () => !s().isEmpty(z.Z.getThreadsForGuild(n))),
        eD = eo.ZP.isNewUser(R),
        ek = W && !eD,
        eM = (0, S.Z)(R);
    (0, x.Z)(o);
    let eU = (0, P.wE)(p.z.PREMIUM_TUTORIAL_SERVER_MENU_TOOLTIP),
        eG = (0, G.Z)(n),
        eV = (0, w.Z)(n),
        eB = (0, d.e7)([el.Z], () => el.Z.getChannelId()),
        eH = (0, d.e7)([ei.Z], () => ei.Z.desyncedVoiceStatesCount),
        eF = H.Y.useExperiment({ location: 'GuildSidebar' }, { autoTrackExposure: !0 }).enabled,
        ez = (0, V.Ek)(n, 'ConnectedGuildSidebar'),
        eW = (0, B.Z)(n),
        eY = (0, N.Q3)('GuildSidebar');
    return (0, r.jsx)(eN, {
        guildId: n,
        hideSelectedChannel: l,
        guild: o,
        scrollToChannel: h,
        selectedChannelId: l ? null : a,
        selectedChannel: ex,
        selectedVoiceChannelId: g,
        voiceStates: c,
        rtcConnectedChannelId: eB,
        rtcDesyncedVoiceStatesCount: eH,
        isUnavailable: j,
        theme: M,
        user: R,
        hasChannelNotice: null != eh || ed,
        anyLayerOpen: eb || e_,
        showGuildBoostingProgressBarUpsell: eO,
        showGuildBoostingProgressBarSizeUpsell: eI,
        showInviteSplashUpsell: eA,
        showDiscoveryLandingPageSettingsUpsell: eP,
        showGuildHeaderTutorial: eE,
        showGuildTemplateDirtyTooltip: eZ,
        showRoleSubscriptionUpsell: eS,
        showHubPrivacySettingsTooltip: eT,
        showNewUnreadsBar: eL,
        showActiveThreadsNotice: C && null != ey && ey >= 200 && eR,
        showGuildSoundboardPermissionUpsell: ev,
        showMediaChannelUpsell: eG,
        showTierTemplatesUpsell: eV,
        isHeaderPopoutOpen: ew,
        enableStudyGroup: U,
        isGuildHeaderDismissibleTooltipShown: ep,
        canShowCoachMarkAtBottom: W,
        headerAnalyticsLocations: ec,
        footerAnalyticsLocations: eu,
        shouldRenderClipsEducation: eM,
        isTutorialHighlightDismissed: eU,
        shouldRenderBurstCoachmark: ek,
        shouldRenderCustomNotificationSoundsCoachmark: eF,
        shouldRenderGuildPowerupPerkCoachmark: ez && !1 === eW,
        isRefreshEnabled: eY
    });
}
