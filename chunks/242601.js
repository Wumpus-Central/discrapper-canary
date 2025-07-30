(n.d(t, { Z: () => eS }), n(388685), n(539854));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(392711),
    s = n.n(o),
    c = n(564854),
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
    v = n(211242),
    I = n(785203),
    C = n(211644),
    S = n(266454),
    N = n(492162),
    T = n(43740),
    P = n(596557),
    j = n(817520),
    A = n(999309),
    x = n(408987),
    Z = n(130734),
    w = n(499137),
    L = n(258871),
    R = n(340541),
    D = n(972264),
    k = n(639777),
    M = n(761700),
    U = n(11352),
    G = n(304445),
    V = n(984802),
    B = n(344185),
    H = n(155409),
    F = n(10401),
    z = n(970731),
    W = n(210887),
    Y = n(592125),
    K = n(796974),
    q = n(486472),
    X = n(984933),
    Q = n(650774),
    J = n(430824),
    $ = n(819640),
    ee = n(496675),
    et = n(878884),
    en = n(19780),
    er = n(594174),
    ei = n(74538),
    el = n(374023),
    ea = n(598056),
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
function eO(e) {
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
                e_(e, t, n[t]);
            }));
    }
    return e;
}
function eE(e, t) {
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
function ey(e, t) {
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
let ev = 'server-settings',
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
class eC extends i.PureComponent {
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
        (this.setAnimatedValue(0), g.Z.subscribe('LAYER_PUSH', this.closeAllHeaderNotices), (this.historyUnlisten = G.Z.addRouteChangeListener(this.handleHistoryChange)));
        let { location: t } = G.Z.getHistory();
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
                  children: (0, r.jsx)(H.Z, {
                      tutorialId: ev,
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
                    text: em.intl.string(em.t.sFSrFB),
                    'aria-label': em.intl.string(em.t.sFSrFB),
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
                                children: (0, r.jsx)(z.ZP, {
                                    header: em.intl.string(em.t['Q3qa4+']),
                                    content: em.intl.string(em.t.UyHD4O),
                                    buttonCTA: em.intl.string(em.t.U9PrMz),
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
            : (0, R.jW)({ location: 'guild_sidebar' }).entrypoints
              ? (0, r.jsx)(y.Gt, {
                    value: o,
                    children: (0, r.jsx)(es.ZP, {
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
                            (0, T.l)(!1);
                        },
                        spacing: 4,
                        children: (i) => {
                            var { onClick: l } = i,
                                a = ey(i, ['onClick']);
                            return (0, r.jsx)(
                                es.ZP,
                                eE(
                                    eO(
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
            r = null != t && (0, ea.Z)(t);
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
            a = ey(e, ['isUnavailable', 'guild', 'selectedChannel', 'enableStudyGroup']);
        if (t || null == n) return (0, r.jsx)(ed.Z, { withBannerPadding: null != n && null != this.getGuildBannerHash() });
        {
            if (n.features.has(ep.oNc.HUB) && !l)
                return (0, r.jsx)('div', {
                    className: eb.hubContainer,
                    children: (0, r.jsx)(L.Z, {
                        guild: n,
                        channel: null != i ? i : X.ZP.getDefaultChannel(n.id)
                    })
                });
            let e = n.id === eg._ ? eo.j : eo.E;
            return (0, r.jsx)(
                e,
                eE(eO({ guild: n }, a), {
                    guildBanner: this.getGuildBannerHash(),
                    hasGuildSubheader: this.state.hasGuildSubheader,
                    onScroll: null != n && (null != this.getGuildBannerHash() || (0, ea.Z)(n)) ? this.pinBannerOrGuildInfo : null
                })
            );
        }
    }
    render() {
        var e;
        let { guild: t } = this.props;
        return (0, r.jsxs)('nav', {
            className: eb.container,
            onContextMenu: this.handleContextMenu,
            'aria-label': em.intl.formatToPlainString(em.t.nj5gAQ, { guildName: null != (e = null == t ? void 0 : t.name) ? e : '' }),
            children: [
                null != t && this.renderGuildHeader(this.state.hasGuildSubheader),
                null != t &&
                    (0, r.jsx)(eu.Z, {
                        guild: t,
                        setHasSubheader: (e) => this.setState({ hasGuildSubheader: e })
                    }),
                this.renderChannelList()
            ]
        });
    }
    constructor(...e) {
        (super(...e),
            e_(this, 'historyUnlisten', () => {}),
            e_(this, 'guildHeaderRef', i.createRef()),
            e_(this, 'guildHeaderDropdownButtonRef', i.createRef()),
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
                bannerVisibleHeight: 88,
                hasGuildSubheader: !1
            }),
            e_(this, 'handleHistoryChange', (e) => {
                null != e.state && e.state.shouldShowSubscribeTooltip && this.showTimeout.start(1000, () => this.setState({ shouldShowSubscribeTooltip: !0 }));
            }),
            e_(this, 'handleHeaderMenuToggle', (e) => {
                let { isHeaderPopoutOpen: t } = this.props;
                (e.stopPropagation(), (0, T.l)(!t), this.closeAllHeaderNotices());
            }),
            e_(this, 'handleContextMenu', (e) => {
                let { guild: t } = this.props;
                null != t &&
                    (0, m.jW)(e, async () => {
                        let { default: e } = await n.e('92795').then(n.bind(n, 652171));
                        return (n) => (0, r.jsx)(e, eE(eO({}, n), { guild: t }));
                    });
            }),
            e_(this, 'handleHeaderContextMenu', (e) => {
                let { guild: t } = this.props;
                null != t &&
                    (0, m.jW)(e, async () => {
                        let { default: e } = await Promise.all([n.e('1806'), n.e('58175'), n.e('71418'), n.e('7654'), n.e('44156'), n.e('99226'), n.e('6850'), n.e('58227'), n.e('54408'), n.e('20087'), n.e('94312'), n.e('87154'), n.e('33213'), n.e('15875')]).then(n.bind(n, 545135));
                        return (n) => (0, r.jsx)(e, eE(eO({}, n), { guild: t }));
                    });
            }),
            e_(this, 'closeAllHeaderNotices', () => {
                (this.handleCloseSubscribeTooltip(), this.handleCloseTemplateDirtyTooltip(), this.handleCloseStudentHubPrivacySettingsTooltip());
            }),
            e_(this, 'handleCloseStudentHubPrivacySettingsTooltip', () => {
                var e;
                let t = (0, S.zu)(p.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP),
                    n = null == (e = this.props.guild) ? void 0 : e.features.has(ep.oNc.HUB);
                !t && n && (0, S.Q3)(p.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP, { dismissAction: ef.L.AUTO });
            }),
            e_(this, 'handleCloseSubscribeTooltip', () => {
                (this.showTimeout.stop(), this.state.shouldShowSubscribeTooltip && this.setState({ shouldShowSubscribeTooltip: !1 }));
            }),
            e_(this, 'handleCloseTemplateDirtyTooltip', () => {
                let { guild: e, showGuildTemplateDirtyTooltip: t } = this.props;
                null != e && t && x.Z.hideGuildTemplateDirtyTooltip(e.id);
            }),
            e_(this, 'renderMenuPopout', async () => {
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
            e_(this, 'renderGuildHeaderUpsellPopout', (e) => {
                let { showGuildBoostingProgressBarUpsell: t, showGuildBoostingProgressBarSizeUpsell: n, showRoleSubscriptionUpsell: i, showInviteSplashUpsell: l, showDiscoveryLandingPageSettingsUpsell: a, showHubPrivacySettingsTooltip: o, showActiveThreadsNotice: s, showGuildSoundboardPermissionUpsell: c, showMediaChannelUpsell: u, showTierTemplatesUpsell: d, shouldRenderCustomNotificationSoundsCoachmark: h, shouldRenderGuildPowerupPerkCoachmark: f, shouldRenderBoosterEnhancedRoleColorsCoachmark: g, guild: m, theme: b } = this.props;
                if (null == m) return this.renderGuildHeaderDropdownButton(e);
                let _ = [];
                return (o && _.push(p.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP), s && _.push(p.z.GUILD_HEADER_ACTIVE_THREADS_NOTICE), t && _.push(p.z.GUILD_HEADER_PREMIUM_GUILD_PROGRESS), n && _.push(p.z.GUILD_HEADER_PROGRESS_BAR_SIZE_COACH_MARK), i && _.push(p.z.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL), c && _.push(p.z.GUILD_HEADER_SOUNDBOARD_PERMISSION), l && _.push(p.z.GUILD_HEADER_INVITE_SPLASH), a && _.push(p.z.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL), f && _.push(p.z.GUILD_POWERUP_PERKS_COACHMARK), g && _.push(p.z.BOOSTER_ENHANCED_ROLE_COLORS_COACHMARK), 0 === _.length)
                    ? this.renderGuildHeaderDropdownButton(e)
                    : (u && _.push(p.z.MEDIA_CHANNEL_UPSELL),
                      d && _.push(p.z.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL),
                      h && _.push(p.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_COACHMARK),
                      (0, r.jsx)(ec.Z, {
                          contentTypes: _,
                          theme: b,
                          guild: m,
                          renderGuildHeaderDropdownButton: () => this.renderGuildHeaderDropdownButton(e)
                      }));
            }),
            e_(this, 'renderGuildHeaderDropdownButton', (e) =>
                (0, R.jW)({ location: 'guild_sidebar' }).entrypoints
                    ? (0, r.jsx)(es.wD, { open: e })
                    : (0, r.jsx)(b.Z, {
                          open: e,
                          className: a()(eb.dropdownButton, { [eb.dropdownButtonBannerVisible]: this.state.bannerVisible }),
                          ref: this.guildHeaderDropdownButtonRef
                      })
            ),
            e_(this, 'setAnimatedValueForBanner', (e) => {
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
            e_(this, 'pinBannerOrGuildInfo', (e) => {
                let { scrollTop: t } = e;
                this.setAnimatedValue(t);
            }));
    }
}
function eS(e) {
    var t;
    let { guildId: n, hideSelectedChannel: l, selectedChannelId: a } = e,
        o = (0, d.e7)([J.Z], () => J.Z.getGuild(n));
    (0, _.J_)(n);
    let c = (0, N.Z)(n),
        h = (0, d.e7)([K.Z], () => K.Z.getGuildDimensions(n).scrollTo),
        g = (0, d.e7)([en.Z], () => en.Z.getChannelId()),
        [m, b, x] = (0, d.Wu)([ee.Z], () => [ee.Z.can(ep.Plq.MANAGE_GUILD, o), ee.Z.can(ep.Plq.MANAGE_ROLES, o), ee.Z.can(ep.Plq.MANAGE_THREADS, o)]),
        L = (0, d.e7)([q.Z], () => q.Z.isUnavailable(n)),
        R = (0, d.e7)([er.default], () => er.default.getCurrentUser()),
        G = (0, V.Ll)(),
        H = (0, d.e7)([W.Z], () => (null != G ? G : W.Z.theme)),
        { enableStudyGroup: z } = (0, w.s)(o),
        X = (0, C.ZP)((e) => e.currentlyShown.has(p.z.NAGBAR_NOTICE_CONNECT_PLAYSTATION)),
        [ea, eo] = i.useState(!X),
        es = (0, O.Z)(n),
        { analyticsLocations: ec } = (0, y.ZP)(E.Z.GUILD_HEADER);
    i.useEffect(() => {
        n !== es && eo(!X);
    }, [n, es, X]);
    let [eu, ed] = (0, C.ZP)((e) => [eh.XN.some((t) => e.currentlyShown.has(t.dismissibleContentType)), e.currentlyShownGroup.has(ef.R.GUILD_HEADER_TOOLTIPS)], u.X),
        eg = (0, I.Z)(o),
        em = (0, f.s9z)(f.JQI),
        eb = (0, d.e7)([$.Z], () => $.Z.hasLayers()),
        e_ = (0, d.e7)([F.Z], () => F.Z.shouldShow(ev)),
        eO = m && (null == o ? void 0 : o.premiumProgressBarEnabled) === !1 && !el.s.isDisallowPopupsSet(),
        eE = (0, d.e7)([Q.Z], () => Q.Z.getMemberCount(n)),
        ey = m && null != eE && eE >= 30 && (null == o ? void 0 : o.premiumProgressBarEnabled) === !1 && !el.s.isDisallowPopupsSet(),
        eI = b && null != o && (o.features.has(ep.oNc.COMMUNITY) || (null != eE && eE > 50)),
        eS = (0, A.Z)(n),
        eN = (null == o ? void 0 : o.features.has(ep.oNc.HUB)) === !0,
        eT = m && (null == o ? void 0 : o.features.has(ep.oNc.DISCOVERABLE)) === !0,
        eP = (0, v.Q)(),
        ej = (m || (null == o ? void 0 : o.premiumTier) === ep.Eu4.NONE) && !el.s.isDisallowPopupsSet() && !eP,
        eA = (0, d.e7)([Z.Z, $.Z], () => null != o && null != R && m && !$.Z.hasLayers() && Z.Z.shouldShowGuildTemplateDirtyTooltip(n)),
        ex = (0, d.e7)([Y.Z], () => Y.Z.getChannel(a)),
        { isPopoutOpen: eZ } = (0, T.y)(),
        ew = null != (t = null == o ? void 0 : o.features.has(ep.oNc.COMMUNITY)) && t,
        eL = (0, d.e7)([B.Z], () => !s().isEmpty(B.Z.getThreadsForGuild(n))),
        eR = ei.ZP.isNewUser(R),
        eD = ea && !eR;
    (0, P.Z)(o);
    let ek = (0, S.Nj)(p.z.PREMIUM_TUTORIAL_SERVER_MENU_TOOLTIP),
        eM = (0, D.Z)(n),
        eU = (0, j.Z)(n),
        eG = (0, d.e7)([en.Z], () => en.Z.getChannelId()),
        eV = (0, d.e7)([et.Z], () => et.Z.desyncedVoiceStatesCount),
        eB = U.Y.useExperiment({ location: 'GuildSidebar' }, { autoTrackExposure: !0 }).enabled,
        eH = (0, k.Z)(n),
        eF = (0, M.Z)(null == R ? void 0 : R.id, n) && (null == o ? void 0 : o.premiumProgressBarEnabled) === !1;
    return (0, r.jsx)(eC, {
        guildId: n,
        hideSelectedChannel: l,
        guild: o,
        scrollToChannel: h,
        selectedChannelId: l ? null : a,
        selectedChannel: ex,
        selectedVoiceChannelId: g,
        voiceStates: c,
        rtcConnectedChannelId: eG,
        rtcDesyncedVoiceStatesCount: eV,
        isUnavailable: L,
        theme: H,
        user: R,
        hasChannelNotice: null != eg || eu,
        anyLayerOpen: em || eb,
        showGuildBoostingProgressBarUpsell: eO,
        showGuildBoostingProgressBarSizeUpsell: ey,
        showInviteSplashUpsell: ej,
        showDiscoveryLandingPageSettingsUpsell: eT,
        showGuildHeaderTutorial: e_,
        showGuildTemplateDirtyTooltip: eA,
        showRoleSubscriptionUpsell: eS,
        showHubPrivacySettingsTooltip: eN,
        showNewUnreadsBar: ew,
        showActiveThreadsNotice: x && null != eE && eE >= 200 && eL,
        showGuildSoundboardPermissionUpsell: eI,
        showMediaChannelUpsell: eM,
        showTierTemplatesUpsell: eU,
        isHeaderPopoutOpen: eZ,
        enableStudyGroup: z,
        isGuildHeaderDismissibleTooltipShown: ed,
        canShowCoachMarkAtBottom: ea,
        headerAnalyticsLocations: ec,
        isTutorialHighlightDismissed: ek,
        shouldRenderBurstCoachmark: eD,
        shouldRenderCustomNotificationSoundsCoachmark: eB,
        shouldRenderGuildPowerupPerkCoachmark: !1 === eH,
        shouldRenderBoosterEnhancedRoleColorsCoachmark: eF
    });
}
