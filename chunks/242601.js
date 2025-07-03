(n.d(t, { Z: () => ej }), n(388685), n(539854));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(392711),
    s = n.n(o),
    c = n(405499),
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
    T = n(266454),
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
    H = n(554549),
    F = n(11352),
    z = n(304445),
    W = n(344185),
    Y = n(155409),
    K = n(10401),
    q = n(970731),
    X = n(210887),
    Q = n(592125),
    J = n(796974),
    $ = n(486472),
    ee = n(984933),
    et = n(650774),
    en = n(430824),
    er = n(819640),
    ei = n(496675),
    el = n(878884),
    ea = n(19780),
    eo = n(594174),
    es = n(74538),
    ec = n(374023),
    eu = n(598056),
    ed = n(373274),
    ep = n(315174),
    eh = n(577718),
    ef = n(156978),
    eg = n(591190),
    em = n(981631),
    eb = n(652785),
    e_ = n(921944),
    eO = n(647086),
    eE = n(388032),
    ey = n(540835);
function eI(e, t, n) {
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
function ev(e) {
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
                eI(e, t, n[t]);
            }));
    }
    return e;
}
function eC(e, t) {
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
function eS(e, t) {
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
let eN = 'server-settings',
    eT = {
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
class eP extends i.PureComponent {
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
        (this.setAnimatedValue(0), g.Z.subscribe('LAYER_PUSH', this.closeAllHeaderNotices), (this.historyUnlisten = z.Z.addRouteChangeListener(this.handleHistoryChange)));
        let { location: t } = z.Z.getHistory();
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
                  children: (0, r.jsx)(Y.Z, {
                      tutorialId: eN,
                      position: 'bottom',
                      inlineSpecs: eT,
                      children: this.renderGuildHeaderDropdownButton(e)
                  })
              })
            : t
              ? (0, r.jsx)(f.ua7, {
                    forceOpen: !0,
                    color: f.FGA.BRAND,
                    position: 'bottom',
                    shouldShow: !e && !i,
                    text: eE.intl.string(eE.t.sFSrFB),
                    'aria-label': eE.intl.string(eE.t.sFSrFB),
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
                                children: (0, r.jsx)(q.ZP, {
                                    header: eE.intl.string(eE.t['Q3qa4+']),
                                    content: eE.intl.string(eE.t.UyHD4O),
                                    buttonCTA: eE.intl.string(eE.t.U9PrMz),
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
                    children: (0, r.jsx)(ep.ZP, {
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
                                a = eS(i, ['onClick']);
                            return (0, r.jsx)(
                                ep.ZP,
                                eC(
                                    ev(
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
            r = null != t && (0, eu.Z)(t);
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
            a = eS(e, ['isUnavailable', 'guild', 'selectedChannel', 'enableStudyGroup']);
        if (t || null == n) return (0, r.jsx)(eg.Z, { withBannerPadding: null != n && null != this.getGuildBannerHash() });
        {
            if (n.features.has(em.oNc.HUB) && !l)
                return (0, r.jsx)('div', {
                    className: ey.hubContainer,
                    children: (0, r.jsx)(k.Z, {
                        guild: n,
                        channel: null != i ? i : ee.ZP.getDefaultChannel(n.id)
                    })
                });
            let e = n.id === eO._ ? ed.j : ed.E;
            return (0, r.jsx)(
                e,
                eC(ev({ guild: n }, a), {
                    guildBanner: this.getGuildBannerHash(),
                    hasGuildSubheader: this.state.hasGuildSubheader,
                    onScroll: null != n && (null != this.getGuildBannerHash() || (0, eu.Z)(n)) ? this.pinBannerOrGuildInfo : null
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
        var e;
        let { guild: t, footerAnalyticsLocations: n } = this.props;
        return (0, r.jsxs)('nav', {
            className: ey.container,
            onContextMenu: this.handleContextMenu,
            'aria-label': eE.intl.formatToPlainString(eE.t.nj5gAQ, { guildName: null != (e = null == t ? void 0 : t.name) ? e : '' }),
            children: [
                null != t && this.renderGuildHeader(this.state.hasGuildSubheader),
                null != t &&
                    (0, r.jsx)(ef.Z, {
                        guild: t,
                        setHasSubheader: (e) => this.setState({ hasGuildSubheader: e })
                    }),
                this.renderChannelList(),
                (0, r.jsx)(y.Gt, {
                    value: n,
                    children: this.renderFooter()
                })
            ]
        });
    }
    constructor(...e) {
        (super(...e),
            eI(this, 'historyUnlisten', () => {}),
            eI(this, 'guildHeaderRef', i.createRef()),
            eI(this, 'guildHeaderDropdownButtonRef', i.createRef()),
            eI(this, 'showTimeout', new h.V7()),
            eI(this, 'state', {
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
            eI(this, 'handleHistoryChange', (e) => {
                null != e.state && e.state.shouldShowSubscribeTooltip && this.showTimeout.start(1000, () => this.setState({ shouldShowSubscribeTooltip: !0 }));
            }),
            eI(this, 'handleHeaderMenuToggle', (e) => {
                let { isHeaderPopoutOpen: t } = this.props;
                (e.stopPropagation(), (0, A.l)(!t), this.closeAllHeaderNotices());
            }),
            eI(this, 'handleContextMenu', (e) => {
                let { guild: t } = this.props;
                null != t &&
                    (0, m.jW)(e, async () => {
                        let { default: e } = await n.e('92795').then(n.bind(n, 652171));
                        return (n) => (0, r.jsx)(e, eC(ev({}, n), { guild: t }));
                    });
            }),
            eI(this, 'handleHeaderContextMenu', (e) => {
                let { guild: t } = this.props;
                null != t &&
                    (0, m.jW)(e, async () => {
                        let { default: e } = await Promise.all([n.e('71418'), n.e('55616'), n.e('7654'), n.e('44156'), n.e('7104'), n.e('6850'), n.e('58227'), n.e('32652'), n.e('54408'), n.e('20087'), n.e('82265'), n.e('87154'), n.e('33213'), n.e('15875')]).then(n.bind(n, 545135));
                        return (n) => (0, r.jsx)(e, eC(ev({}, n), { guild: t }));
                    });
            }),
            eI(this, 'closeAllHeaderNotices', () => {
                (this.handleCloseSubscribeTooltip(), this.handleCloseTemplateDirtyTooltip(), this.handleCloseStudentHubPrivacySettingsTooltip());
            }),
            eI(this, 'handleCloseStudentHubPrivacySettingsTooltip', () => {
                var e;
                let t = (0, T.zu)(p.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP),
                    n = null == (e = this.props.guild) ? void 0 : e.features.has(em.oNc.HUB);
                !t && n && (0, T.Q3)(p.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP, { dismissAction: e_.L.AUTO });
            }),
            eI(this, 'handleCloseSubscribeTooltip', () => {
                (this.showTimeout.stop(), this.state.shouldShowSubscribeTooltip && this.setState({ shouldShowSubscribeTooltip: !1 }));
            }),
            eI(this, 'handleCloseTemplateDirtyTooltip', () => {
                let { guild: e, showGuildTemplateDirtyTooltip: t } = this.props;
                null != e && t && w.Z.hideGuildTemplateDirtyTooltip(e.id);
            }),
            eI(this, 'renderMenuPopout', async () => {
                let { default: e } = await Promise.all([n.e('87154'), n.e('21443'), n.e('12519')]).then(n.bind(n, 859432));
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
            eI(this, 'renderGuildHeaderUpsellPopout', (e) => {
                let { showGuildBoostingProgressBarUpsell: t, showGuildBoostingProgressBarSizeUpsell: n, showRoleSubscriptionUpsell: i, showInviteSplashUpsell: l, showDiscoveryLandingPageSettingsUpsell: a, showHubPrivacySettingsTooltip: o, showActiveThreadsNotice: s, showGuildSoundboardPermissionUpsell: c, showMediaChannelUpsell: u, showTierTemplatesUpsell: d, shouldRenderCustomNotificationSoundsCoachmark: h, shouldRenderGuildPowerupPerkCoachmark: f, shouldRenderBoosterEnhancedRoleColorsCoachmark: g, guild: m, theme: b } = this.props;
                if (null == m) return this.renderGuildHeaderDropdownButton(e);
                let _ = [];
                return (o && _.push(p.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP), s && _.push(p.z.GUILD_HEADER_ACTIVE_THREADS_NOTICE), t && _.push(p.z.GUILD_HEADER_PREMIUM_GUILD_PROGRESS), n && _.push(p.z.GUILD_HEADER_PROGRESS_BAR_SIZE_COACH_MARK), i && _.push(p.z.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL), c && _.push(p.z.GUILD_HEADER_SOUNDBOARD_PERMISSION), l && _.push(p.z.GUILD_HEADER_INVITE_SPLASH), a && _.push(p.z.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL), f && _.push(p.z.GUILD_POWERUP_PERKS_COACHMARK), g && _.push(p.z.BOOSTER_ENHANCED_ROLE_COLORS_COACHMARK), 0 === _.length)
                    ? this.renderGuildHeaderDropdownButton(e)
                    : (u && _.push(p.z.MEDIA_CHANNEL_UPSELL),
                      d && _.push(p.z.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL),
                      h && _.push(p.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_COACHMARK),
                      (0, r.jsx)(eh.Z, {
                          contentTypes: _,
                          theme: b,
                          guild: m,
                          renderGuildHeaderDropdownButton: () => this.renderGuildHeaderDropdownButton(e)
                      }));
            }),
            eI(this, 'renderGuildHeaderDropdownButton', (e) =>
                (0, M.jW)({ location: 'guild_sidebar' }).entrypoints
                    ? (0, r.jsx)(ep.wD, { open: e })
                    : (0, r.jsx)(b.Z, {
                          open: e,
                          className: a()(ey.dropdownButton, { [ey.dropdownButtonBannerVisible]: this.state.bannerVisible }),
                          ref: this.guildHeaderDropdownButtonRef
                      })
            ),
            eI(this, 'setAnimatedValueForBanner', (e) => {
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
            eI(this, 'pinBannerOrGuildInfo', (e) => {
                let { scrollTop: t } = e;
                this.setAnimatedValue(t);
            }));
    }
}
function ej(e) {
    var t;
    let { guildId: n, hideSelectedChannel: l, selectedChannelId: a } = e,
        o = (0, d.e7)([en.Z], () => en.Z.getGuild(n));
    (0, _.J_)(n);
    let c = (0, j.Z)(n),
        h = (0, d.e7)([J.Z], () => J.Z.getGuildDimensions(n).scrollTo),
        g = (0, d.e7)([ea.Z], () => ea.Z.getChannelId()),
        [m, b, C] = (0, d.Wu)([ei.Z], () => [ei.Z.can(em.Plq.MANAGE_GUILD, o), ei.Z.can(em.Plq.MANAGE_ROLES, o), ei.Z.can(em.Plq.MANAGE_THREADS, o)]),
        P = (0, d.e7)([$.Z], () => $.Z.isUnavailable(n)),
        w = (0, d.e7)([eo.default], () => eo.default.getCurrentUser()),
        k = (0, d.e7)([X.Z], () => (X.Z.darkSidebar ? em.BRd.DARK : X.Z.theme)),
        { enableStudyGroup: M } = (0, D.s)(o),
        z = (0, N.ZP)((e) => e.currentlyShown.has(p.z.NAGBAR_NOTICE_CONNECT_PLAYSTATION)),
        [Y, q] = i.useState(!z),
        ee = (0, O.Z)(n),
        { analyticsLocations: eu } = (0, y.ZP)(E.Z.GUILD_HEADER),
        { analyticsLocations: ed } = (0, y.ZP)(E.Z.GUILD_CHANNEL_LIST_FOOTER);
    i.useEffect(() => {
        n !== ee && q(!z);
    }, [n, ee, z]);
    let [ep, eh] = (0, N.ZP)((e) => [eb.XN.some((t) => e.currentlyShown.has(t.dismissibleContentType)), e.currentlyShownGroup.has(e_.R.GUILD_HEADER_TOOLTIPS)], u.X),
        ef = (0, v.Z)(o),
        eg = (0, f.s9z)(f.JQI),
        eO = (0, d.e7)([er.Z], () => er.Z.hasLayers()),
        eE = (0, d.e7)([K.Z], () => K.Z.shouldShow(eN)),
        ey = m && (null == o ? void 0 : o.premiumProgressBarEnabled) === !1 && !ec.s.isDisallowPopupsSet(),
        eI = (0, d.e7)([et.Z], () => et.Z.getMemberCount(n)),
        ev = m && null != eI && eI >= 30 && (null == o ? void 0 : o.premiumProgressBarEnabled) === !1 && !ec.s.isDisallowPopupsSet(),
        eC = b && null != o && (o.features.has(em.oNc.COMMUNITY) || (null != eI && eI > 50)),
        eS = (0, L.Z)(n),
        eT = (null == o ? void 0 : o.features.has(em.oNc.HUB)) === !0,
        ej = m && (null == o ? void 0 : o.features.has(em.oNc.DISCOVERABLE)) === !0,
        eA = (0, I.Q)(),
        eZ = (m || (null == o ? void 0 : o.premiumTier) === em.Eu4.NONE) && !ec.s.isDisallowPopupsSet() && !eA,
        ex = (0, d.e7)([R.Z, er.Z], () => null != o && null != w && m && !er.Z.hasLayers() && R.Z.shouldShowGuildTemplateDirtyTooltip(n)),
        eL = (0, d.e7)([Q.Z], () => Q.Z.getChannel(a)),
        { isPopoutOpen: ew } = (0, A.y)(),
        eR = null != (t = null == o ? void 0 : o.features.has(em.oNc.COMMUNITY)) && t,
        eD = (0, d.e7)([W.Z], () => !s().isEmpty(W.Z.getThreadsForGuild(n))),
        ek = es.ZP.isNewUser(w),
        eM = Y && !ek,
        eU = (0, S.Z)(w);
    (0, Z.Z)(o);
    let eG = (0, T.Nj)(p.z.PREMIUM_TUTORIAL_SERVER_MENU_TOOLTIP),
        eB = (0, U.Z)(n),
        eV = (0, x.Z)(n),
        eH = (0, d.e7)([ea.Z], () => ea.Z.getChannelId()),
        eF = (0, d.e7)([el.Z], () => el.Z.desyncedVoiceStatesCount),
        ez = F.Y.useExperiment({ location: 'GuildSidebar' }, { autoTrackExposure: !0 }).enabled,
        eW = (0, B.Ek)(n, 'ConnectedGuildSidebar'),
        eY = (0, V.Z)(n),
        eK = (0, H.Z)(null == w ? void 0 : w.id, n),
        eq = (0, G.W)(n, 'ConnectedGuildSidebar'),
        eX = (null == o ? void 0 : o.premiumProgressBarEnabled) === !0;
    return (0, r.jsx)(eP, {
        guildId: n,
        hideSelectedChannel: l,
        guild: o,
        scrollToChannel: h,
        selectedChannelId: l ? null : a,
        selectedChannel: eL,
        selectedVoiceChannelId: g,
        voiceStates: c,
        rtcConnectedChannelId: eH,
        rtcDesyncedVoiceStatesCount: eF,
        isUnavailable: P,
        theme: k,
        user: w,
        hasChannelNotice: null != ef || ep,
        anyLayerOpen: eg || eO,
        showGuildBoostingProgressBarUpsell: ey,
        showGuildBoostingProgressBarSizeUpsell: ev,
        showInviteSplashUpsell: eZ,
        showDiscoveryLandingPageSettingsUpsell: ej,
        showGuildHeaderTutorial: eE,
        showGuildTemplateDirtyTooltip: ex,
        showRoleSubscriptionUpsell: eS,
        showHubPrivacySettingsTooltip: eT,
        showNewUnreadsBar: eR,
        showActiveThreadsNotice: C && null != eI && eI >= 200 && eD,
        showGuildSoundboardPermissionUpsell: eC,
        showMediaChannelUpsell: eB,
        showTierTemplatesUpsell: eV,
        isHeaderPopoutOpen: ew,
        enableStudyGroup: M,
        isGuildHeaderDismissibleTooltipShown: eh,
        canShowCoachMarkAtBottom: Y,
        headerAnalyticsLocations: eu,
        footerAnalyticsLocations: ed,
        shouldRenderClipsEducation: eU,
        isTutorialHighlightDismissed: eG,
        shouldRenderBurstCoachmark: eM,
        shouldRenderCustomNotificationSoundsCoachmark: ez,
        shouldRenderGuildPowerupPerkCoachmark: eW && !1 === eY,
        shouldRenderBoosterEnhancedRoleColorsCoachmark: eK && eq && !eX
    });
}
