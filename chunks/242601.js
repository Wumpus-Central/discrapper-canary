(n.d(t, { Z: () => eT }), n(388685), n(539854));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(392711),
    s = n.n(o),
    c = n(695469),
    u = n(94171),
    d = n(442837),
    p = n(704215),
    h = n(846519),
    f = n(481060),
    g = n(570140),
    m = n(239091),
    b = n(269128),
    _ = n(711237),
    O = n(110924),
    E = n(100527),
    y = n(906732),
    I = n(211242),
    v = n(785203),
    C = n(745837),
    S = n(13228),
    N = n(211644),
    T = n(605236),
    P = n(243778),
    j = n(492162),
    A = n(43740),
    Z = n(596557),
    x = n(817520),
    L = n(999309),
    w = n(408987),
    R = n(130734),
    D = n(499137),
    k = n(258871),
    M = n(340541),
    U = n(972264),
    G = n(232062),
    B = n(50101),
    V = n(639777),
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
    eO = n(540835);
function eE(e, t, n) {
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
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                eE(e, t, n[t]);
            }));
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
            for (r = 0; r < l.length; r++) ((n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
            return i;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (r = 0; r < l.length; r++) ((n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
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
        (this.setAnimatedValue(0), g.Z.subscribe('LAYER_PUSH', this.closeAllHeaderNotices), (this.historyUnlisten = F.Z.addRouteChangeListener(this.handleHistoryChange)));
        let { location: t } = F.Z.getHistory();
        (null == (e = t.state) ? void 0 : e.shouldShowSubscribeTooltip) && this.showTimeout.start(1000, () => this.setState({ shouldShowSubscribeTooltip: !0 }));
    }
    componentWillUnmount() {
        (this.showTimeout.stop(), this.state.controller.dispose(), this.historyUnlisten(), g.Z.unsubscribe('LAYER_PUSH', this.closeAllHeaderNotices));
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
        let { guild: t, isHeaderPopoutOpen: n, showGuildHeaderTutorial: i, showGuildTemplateDirtyTooltip: l, isGuildHeaderDismissibleTooltipShown: a, headerAnalyticsLocations: o } = this.props,
            { controller: s, renderBanner: c, bannerVisible: u, bannerVisibleHeight: d, communityInfoVisible: p } = this.state,
            h = i || l || a;
        return null == t
            ? null
            : (0, M.jW)({ location: 'guild_sidebar' }).entrypoints
              ? (0, r.jsx)(y.Gt, {
                    value: o,
                    children: (0, r.jsx)(eu.ZP, {
                        guild: t,
                        controller: s,
                        renderBanner: c,
                        hasSubheader: e,
                        bannerVisible: u,
                        communityInfoVisible: p,
                        guildBanner: this.getGuildBannerHash(),
                        onContextMenu: this.handleHeaderContextMenu,
                        disableBannerAnimation: h,
                        animationOverlayHeight: d,
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
                            (0, A.l)(!1);
                        },
                        spacing: 4,
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
                                            controller: s,
                                            renderBanner: c,
                                            hasSubheader: e,
                                            bannerVisible: u,
                                            communityInfoVisible: p,
                                            guildBanner: this.getGuildBannerHash(),
                                            onClick: this.handleHeaderMenuToggle,
                                            onContextMenu: this.handleHeaderContextMenu,
                                            disableBannerAnimation: h,
                                            animationOverlayHeight: d
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
        (((e >= 20 && t) || (e < 20 && !t)) && (t = !t),
            t !== this.state.communityInfoVisible && this.setState({ communityInfoVisible: t }),
            n
                .update({
                    value: Math.min(1, Math.max(0, 1 - e / 20)),
                    immediate: !0
                })
                .start());
    }
    renderChannelList() {
        let e = this.props,
            { isUnavailable: t, guild: n, selectedChannel: i, enableStudyGroup: l } = e,
            a = ev(e, ['isUnavailable', 'guild', 'selectedChannel', 'enableStudyGroup']);
        if (t || null == n) return (0, r.jsx)(eh.Z, { withBannerPadding: null != n && null != this.getGuildBannerHash() });
        {
            if (n.hasFeature(ef.oNc.HUB) && !l)
                return (0, r.jsx)('div', {
                    className: eO.hubContainer,
                    children: (0, r.jsx)(k.Z, {
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
        return (0, r.jsx)(P.ZP, {
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
            className: eO.container,
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
        (super(...e),
            eE(this, 'historyUnlisten', () => {}),
            eE(this, 'guildHeaderRef', i.createRef()),
            eE(this, 'guildHeaderDropdownButtonRef', i.createRef()),
            eE(this, 'showTimeout', new h.V7()),
            eE(this, 'state', {
                controller: new c.Controller({
                    value: 1,
                    immediate: !0
                }),
                renderBanner: !1,
                bannerVisible: !1,
                communityInfoVisible: !1,
                shouldShowSubscribeTooltip: !1,
                bannerVisibleHeight: 88,
                hasGuildSubheader: !1
            }),
            eE(this, 'handleHistoryChange', (e) => {
                null != e.state && e.state.shouldShowSubscribeTooltip && this.showTimeout.start(1000, () => this.setState({ shouldShowSubscribeTooltip: !0 }));
            }),
            eE(this, 'handleHeaderMenuToggle', (e) => {
                let { isHeaderPopoutOpen: t } = this.props;
                (e.stopPropagation(), (0, A.l)(!t), this.closeAllHeaderNotices());
            }),
            eE(this, 'handleContextMenu', (e) => {
                let { guild: t } = this.props;
                null != t &&
                    (0, m.jW)(e, async () => {
                        let { default: e } = await n.e('92795').then(n.bind(n, 652171));
                        return (n) => (0, r.jsx)(e, eI(ey({}, n), { guild: t }));
                    });
            }),
            eE(this, 'handleHeaderContextMenu', (e) => {
                let { guild: t } = this.props;
                null != t &&
                    (0, m.jW)(e, async () => {
                        let { default: e } = await Promise.all([n.e('71418'), n.e('55616'), n.e('7654'), n.e('44156'), n.e('7104'), n.e('6850'), n.e('58227'), n.e('32652'), n.e('54408'), n.e('20087'), n.e('82265'), n.e('87154'), n.e('33213'), n.e('15875')]).then(n.bind(n, 545135));
                        return (n) => (0, r.jsx)(e, eI(ey({}, n), { guild: t }));
                    });
            }),
            eE(this, 'closeAllHeaderNotices', () => {
                (this.handleCloseSubscribeTooltip(), this.handleCloseTemplateDirtyTooltip(), this.handleCloseStudentHubPrivacySettingsTooltip());
            }),
            eE(this, 'handleCloseStudentHubPrivacySettingsTooltip', () => {
                var e;
                let t = (0, T.un)(p.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP),
                    n = null == (e = this.props.guild) ? void 0 : e.hasFeature(ef.oNc.HUB);
                !t && n && (0, T.EW)(p.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP, { dismissAction: em.L.AUTO });
            }),
            eE(this, 'handleCloseSubscribeTooltip', () => {
                (this.showTimeout.stop(), this.state.shouldShowSubscribeTooltip && this.setState({ shouldShowSubscribeTooltip: !1 }));
            }),
            eE(this, 'handleCloseTemplateDirtyTooltip', () => {
                let { guild: e, showGuildTemplateDirtyTooltip: t } = this.props;
                null != e && t && w.Z.hideGuildTemplateDirtyTooltip(e.id);
            }),
            eE(this, 'renderMenuPopout', async () => {
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
            eE(this, 'renderGuildHeaderUpsellPopout', (e) => {
                let { showGuildBoostingProgressBarUpsell: t, showGuildBoostingProgressBarSizeUpsell: n, showRoleSubscriptionUpsell: i, showInviteSplashUpsell: l, showDiscoveryLandingPageSettingsUpsell: a, showHubPrivacySettingsTooltip: o, showActiveThreadsNotice: s, showGuildSoundboardPermissionUpsell: c, showMediaChannelUpsell: u, showTierTemplatesUpsell: d, shouldRenderCustomNotificationSoundsCoachmark: h, shouldRenderGuildPowerupPerkCoachmark: f, shouldRenderBoosterEnhancedRoleColorsCoachmark: g, guild: m, theme: b } = this.props;
                if (null == m) return this.renderGuildHeaderDropdownButton(e);
                let _ = [];
                return (o && _.push(p.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP), s && _.push(p.z.GUILD_HEADER_ACTIVE_THREADS_NOTICE), t && _.push(p.z.GUILD_HEADER_PREMIUM_GUILD_PROGRESS), n && _.push(p.z.GUILD_HEADER_PROGRESS_BAR_SIZE_COACH_MARK), i && _.push(p.z.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL), c && _.push(p.z.GUILD_HEADER_SOUNDBOARD_PERMISSION), l && _.push(p.z.GUILD_HEADER_INVITE_SPLASH), a && _.push(p.z.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL), f && _.push(p.z.GUILD_POWERUP_PERKS_COACHMARK), g && _.push(p.z.BOOSTER_ENHANCED_ROLE_COLORS_COACHMARK), 0 === _.length)
                    ? this.renderGuildHeaderDropdownButton(e)
                    : (u && _.push(p.z.MEDIA_CHANNEL_UPSELL),
                      d && _.push(p.z.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL),
                      h && _.push(p.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_COACHMARK),
                      (0, r.jsx)(ed.Z, {
                          contentTypes: _,
                          theme: b,
                          guild: m,
                          renderGuildHeaderDropdownButton: () => this.renderGuildHeaderDropdownButton(e)
                      }));
            }),
            eE(this, 'renderGuildHeaderDropdownButton', (e) =>
                (0, M.jW)({ location: 'guild_sidebar' }).entrypoints
                    ? (0, r.jsx)(eu.wD, { open: e })
                    : (0, r.jsx)(b.Z, {
                          open: e,
                          className: a()(eO.dropdownButton, { [eO.dropdownButtonBannerVisible]: this.state.bannerVisible }),
                          ref: this.guildHeaderDropdownButtonRef
                      })
            ),
            eE(this, 'setAnimatedValueForBanner', (e) => {
                let { renderBanner: t, communityInfoVisible: n, bannerVisible: r, bannerVisibleHeight: i, controller: l } = this.state;
                (((e >= 88 && r) || (e < 88 && !r)) && (r = !r),
                    ((e >= 88 && !t) || (e < 88 && t)) && (t = !t),
                    (i = Math.max(88 - e, 0)),
                    (n = r),
                    (t !== this.state.renderBanner || r !== this.state.bannerVisible || i !== this.state.bannerVisibleHeight || n !== this.state.communityInfoVisible) &&
                        this.setState({
                            renderBanner: t,
                            bannerVisible: r,
                            bannerVisibleHeight: i,
                            communityInfoVisible: n
                        }),
                    l
                        .update({
                            value: Math.min(1, Math.max(0, 1 - e / 88)),
                            immediate: !0
                        })
                        .start());
            }),
            eE(this, 'pinBannerOrGuildInfo', (e) => {
                let { scrollTop: t } = e;
                this.setAnimatedValue(t);
            }));
    }
}
function eT(e) {
    var t;
    let { guildId: n, hideSelectedChannel: l, selectedChannelId: a } = e,
        o = (0, d.e7)([et.Z], () => et.Z.getGuild(n));
    (0, _.J_)(n);
    let c = (0, j.Z)(n),
        h = (0, d.e7)([Q.Z], () => Q.Z.getGuildDimensions(n).scrollTo),
        g = (0, d.e7)([el.Z], () => el.Z.getChannelId()),
        [m, b, C] = (0, d.Wu)([er.Z], () => [er.Z.can(ef.Plq.MANAGE_GUILD, o), er.Z.can(ef.Plq.MANAGE_ROLES, o), er.Z.can(ef.Plq.MANAGE_THREADS, o)]),
        P = (0, d.e7)([J.Z], () => J.Z.isUnavailable(n)),
        w = (0, d.e7)([ea.default], () => ea.default.getCurrentUser()),
        k = (0, d.e7)([q.Z], () => (q.Z.darkSidebar ? ef.BRd.DARK : q.Z.theme)),
        { enableStudyGroup: M } = (0, D.s)(o),
        F = (0, N.ZP)((e) => e.currentlyShown.has(p.z.NAGBAR_NOTICE_CONNECT_PLAYSTATION)),
        [W, K] = i.useState(!F),
        $ = (0, O.Z)(n),
        { analyticsLocations: ec } = (0, y.ZP)(E.Z.GUILD_HEADER),
        { analyticsLocations: eu } = (0, y.ZP)(E.Z.GUILD_CHANNEL_LIST_FOOTER);
    i.useEffect(() => {
        n !== $ && K(!F);
    }, [n, $, F]);
    let [ed, ep] = (0, N.ZP)((e) => [eg.XN.some((t) => e.currentlyShown.has(t.dismissibleContentType)), e.currentlyShownGroup.has(em.R.GUILD_HEADER_TOOLTIPS)], u.X),
        eh = (0, v.Z)(o),
        eb = (0, f.s9z)(f.JQI),
        e_ = (0, d.e7)([en.Z], () => en.Z.hasLayers()),
        eO = (0, d.e7)([Y.Z], () => Y.Z.shouldShow(eC)),
        eE = m && (null == o ? void 0 : o.premiumProgressBarEnabled) === !1 && !es.s.isDisallowPopupsSet(),
        ey = (0, d.e7)([ee.Z], () => ee.Z.getMemberCount(n)),
        eI = m && null != ey && ey >= 30 && (null == o ? void 0 : o.premiumProgressBarEnabled) === !1 && !es.s.isDisallowPopupsSet(),
        ev = b && null != o && (o.hasFeature(ef.oNc.COMMUNITY) || (null != ey && ey > 50)),
        eS = (0, L.Z)(n),
        eT = (null == o ? void 0 : o.hasFeature(ef.oNc.HUB)) === !0,
        eP = m && (null == o ? void 0 : o.hasFeature(ef.oNc.DISCOVERABLE)) === !0,
        ej = (0, I.Q)(),
        eA = (m || (null == o ? void 0 : o.premiumTier) === ef.Eu4.NONE) && !es.s.isDisallowPopupsSet() && !ej,
        eZ = (0, d.e7)([R.Z, en.Z], () => null != o && null != w && m && !en.Z.hasLayers() && R.Z.shouldShowGuildTemplateDirtyTooltip(n)),
        ex = (0, d.e7)([X.Z], () => X.Z.getChannel(a)),
        { isPopoutOpen: eL } = (0, A.y)(),
        ew = null != (t = null == o ? void 0 : o.hasFeature(ef.oNc.COMMUNITY)) && t,
        eR = (0, d.e7)([z.Z], () => !s().isEmpty(z.Z.getThreadsForGuild(n))),
        eD = eo.ZP.isNewUser(w),
        ek = W && !eD,
        eM = (0, S.Z)(w);
    (0, Z.Z)(o);
    let eU = (0, T.wE)(p.z.PREMIUM_TUTORIAL_SERVER_MENU_TOOLTIP),
        eG = (0, U.Z)(n),
        eB = (0, x.Z)(n),
        eV = (0, d.e7)([el.Z], () => el.Z.getChannelId()),
        eH = (0, d.e7)([ei.Z], () => ei.Z.desyncedVoiceStatesCount),
        eF = H.Y.useExperiment({ location: 'GuildSidebar' }, { autoTrackExposure: !0 }).enabled,
        ez = (0, B.Ek)(n, 'ConnectedGuildSidebar'),
        eW = (0, V.Z)(n),
        eY = (0, G.W)(n, 'ConnectedGuildSidebar'),
        eK = (null == o ? void 0 : o.premiumProgressBarEnabled) === !0;
    return (0, r.jsx)(eN, {
        guildId: n,
        hideSelectedChannel: l,
        guild: o,
        scrollToChannel: h,
        selectedChannelId: l ? null : a,
        selectedChannel: ex,
        selectedVoiceChannelId: g,
        voiceStates: c,
        rtcConnectedChannelId: eV,
        rtcDesyncedVoiceStatesCount: eH,
        isUnavailable: P,
        theme: k,
        user: w,
        hasChannelNotice: null != eh || ed,
        anyLayerOpen: eb || e_,
        showGuildBoostingProgressBarUpsell: eE,
        showGuildBoostingProgressBarSizeUpsell: eI,
        showInviteSplashUpsell: eA,
        showDiscoveryLandingPageSettingsUpsell: eP,
        showGuildHeaderTutorial: eO,
        showGuildTemplateDirtyTooltip: eZ,
        showRoleSubscriptionUpsell: eS,
        showHubPrivacySettingsTooltip: eT,
        showNewUnreadsBar: ew,
        showActiveThreadsNotice: C && null != ey && ey >= 200 && eR,
        showGuildSoundboardPermissionUpsell: ev,
        showMediaChannelUpsell: eG,
        showTierTemplatesUpsell: eB,
        isHeaderPopoutOpen: eL,
        enableStudyGroup: M,
        isGuildHeaderDismissibleTooltipShown: ep,
        canShowCoachMarkAtBottom: W,
        headerAnalyticsLocations: ec,
        footerAnalyticsLocations: eu,
        shouldRenderClipsEducation: eM,
        isTutorialHighlightDismissed: eU,
        shouldRenderBurstCoachmark: ek,
        shouldRenderCustomNotificationSoundsCoachmark: eF,
        shouldRenderGuildPowerupPerkCoachmark: ez && !1 === eW,
        shouldRenderBoosterEnhancedRoleColorsCoachmark: eY && !eK
    });
}
