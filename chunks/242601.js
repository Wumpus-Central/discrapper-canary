n.d(t, { Z: () => eE }), n(388685), n(539854);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(803948),
    s = n(524825),
    c = n(442837),
    u = n(704215),
    d = n(846519),
    p = n(481060),
    f = n(570140),
    h = n(239091),
    g = n(269128),
    m = n(711237),
    b = n(110924),
    _ = n(100527),
    O = n(906732),
    E = n(211242),
    y = n(785203),
    v = n(211644),
    I = n(266454),
    C = n(492162),
    S = n(43740),
    N = n(596557),
    T = n(817520),
    P = n(999309),
    j = n(408987),
    A = n(130734),
    x = n(499137),
    Z = n(258871),
    w = n(340541),
    L = n(972264),
    R = n(691698),
    D = n(639777),
    k = n(761700),
    M = n(11352),
    U = n(304445),
    G = n(155409),
    B = n(10401),
    V = n(970731),
    H = n(592125),
    F = n(796974),
    z = n(486472),
    W = n(984933),
    Y = n(430824),
    K = n(819640),
    q = n(496675),
    Q = n(878884),
    X = n(19780),
    J = n(594174),
    $ = n(74538),
    ee = n(374023),
    et = n(598056),
    en = n(373274),
    er = n(315174),
    ei = n(577718),
    el = n(156978),
    ea = n(591190),
    eo = n(981631),
    es = n(652785),
    ec = n(921944),
    eu = n(647086),
    ed = n(388032),
    ep = n(971606);
function ef(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function eh(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                ef(e, t, n[t]);
            });
    }
    return e;
}
function eg(e, t) {
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
function em(e, t) {
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
        for (r = 0; r < l.length; r++)
            (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
let eb = "server-settings",
    e_ = {
        origin: {
            x: -8,
            y: -48,
        },
        targetWidth: 40,
        targetHeight: 40,
        offset: {
            x: 0,
            y: 0,
        },
    };
class eO extends i.PureComponent {
    static getDerivedStateFromProps(e) {
        let { guild: t, hasChannelNotice: n } = e;
        return null == t || null == t.banner || n
            ? {
                  renderBanner: !1,
                  bannerVisible: !1,
              }
            : null;
    }
    componentDidMount() {
        var e;
        this.setAnimatedValue(0),
            f.Z.subscribe("LAYER_PUSH", this.closeAllHeaderNotices),
            (this.historyUnlisten = U.Z.addRouteChangeListener(this.handleHistoryChange));
        let { location: t } = U.Z.getHistory();
        (null == (e = t.state) ? void 0 : e.shouldShowSubscribeTooltip) &&
            this.showTimeout.start(1000, () => this.setState({ shouldShowSubscribeTooltip: !0 }));
    }
    componentWillUnmount() {
        this.showTimeout.stop(),
            this.state.controller.dispose(),
            this.historyUnlisten(),
            f.Z.unsubscribe("LAYER_PUSH", this.closeAllHeaderNotices);
    }
    getGuildBannerHash() {
        let { guild: e, hasChannelNotice: t } = this.props;
        return null == e || t ? null : e.banner;
    }
    renderGuildHeaderNotices(e) {
        let { showGuildTemplateDirtyTooltip: t, showGuildHeaderTutorial: n, anyLayerOpen: i } = this.props,
            { shouldShowSubscribeTooltip: l } = this.state;
        return n
            ? (0, r.jsx)("div", {
                  onClick: (t) => (e ? null : t.stopPropagation()),
                  children: (0, r.jsx)(G.Z, {
                      tutorialId: eb,
                      position: "bottom",
                      inlineSpecs: e_,
                      children: this.renderGuildHeaderDropdownButton(e),
                  }),
              })
            : t
              ? (0, r.jsx)(p.ua7, {
                    forceOpen: !0,
                    color: p.FGA.BRAND,
                    position: "bottom",
                    shouldShow: !e && !i,
                    text: ed.intl.string(ed.t.sFSrFB),
                    "aria-label": ed.intl.string(ed.t.sFSrFB),
                    children: () => this.renderGuildHeaderDropdownButton(e),
                })
              : i || e
                ? this.renderGuildHeaderDropdownButton(e)
                : l
                  ? (0, r.jsx)(p.yRy, {
                        targetElementRef: this.guildHeaderDropdownButtonRef,
                        renderPopout: () =>
                            (0, r.jsx)("div", {
                                onClick: (e) => e.stopPropagation(),
                                children: (0, r.jsx)(V.ZP, {
                                    header: ed.intl.string(ed.t["Q3qa4+"]),
                                    content: ed.intl.string(ed.t.UyHD4O),
                                    buttonCTA: ed.intl.string(ed.t.U9PrMz),
                                    onClick: this.handleCloseSubscribeTooltip,
                                }),
                            }),
                        position: "bottom",
                        align: "center",
                        animation: p.yRy.Animation.TRANSLATE,
                        shouldShow: !0,
                        children: () => this.renderGuildHeaderDropdownButton(e),
                    })
                  : this.renderGuildHeaderUpsellPopout(e);
    }
    renderGuildHeader(e) {
        let {
                guild: t,
                isHeaderPopoutOpen: n,
                showGuildHeaderTutorial: i,
                showGuildTemplateDirtyTooltip: l,
                isGuildHeaderDismissibleTooltipShown: a,
                headerAnalyticsLocations: o,
            } = this.props,
            {
                controller: s,
                renderBanner: c,
                bannerVisible: u,
                bannerVisibleHeight: d,
                communityInfoVisible: f,
            } = this.state,
            h = i || l || a;
        return null == t
            ? null
            : (0, w.jW)({ location: "guild_sidebar" }).entrypoints
              ? (0, r.jsx)(O.Gt, {
                    value: o,
                    children: (0, r.jsx)(er.ZP, {
                        guild: t,
                        controller: s,
                        renderBanner: c,
                        hasSubheader: e,
                        bannerVisible: u,
                        communityInfoVisible: f,
                        guildBanner: this.getGuildBannerHash(),
                        onContextMenu: this.handleHeaderContextMenu,
                        disableBannerAnimation: h,
                        animationOverlayHeight: d,
                        children: this.renderGuildHeaderNotices(n),
                    }),
                })
              : (0, r.jsx)(O.Gt, {
                    value: o,
                    children: (0, r.jsx)(p.KeG, {
                        targetElementRef: this.guildHeaderRef,
                        renderPopout: this.renderMenuPopout,
                        position: "bottom",
                        align: "center",
                        animation: p.yRy.Animation.SCALE,
                        shouldShow: n,
                        onRequestClose: () => {
                            (0, S.l)(!1);
                        },
                        spacing: 4,
                        children: (i) => {
                            var { onClick: l } = i,
                                a = em(i, ["onClick"]);
                            return (0, r.jsx)(
                                er.ZP,
                                eg(
                                    eh(
                                        {
                                            ref: this.guildHeaderRef,
                                            guild: t,
                                            controller: s,
                                            renderBanner: c,
                                            hasSubheader: e,
                                            bannerVisible: u,
                                            communityInfoVisible: f,
                                            guildBanner: this.getGuildBannerHash(),
                                            onClick: this.handleHeaderMenuToggle,
                                            onContextMenu: this.handleHeaderContextMenu,
                                            disableBannerAnimation: h,
                                            animationOverlayHeight: d,
                                        },
                                        a,
                                    ),
                                    { children: this.renderGuildHeaderNotices(n) },
                                ),
                            );
                        },
                    }),
                });
    }
    setAnimatedValue(e) {
        let { guild: t } = this.props,
            n = null != this.getGuildBannerHash(),
            r = null != t && (0, et.Z)(t);
        null != t && (n || r) && (n ? this.setAnimatedValueForBanner(e) : this.setAnimatedValueForGuildInfo(e));
    }
    setAnimatedValueForGuildInfo(e) {
        let { communityInfoVisible: t, controller: n } = this.state;
        ((e >= 20 && t) || (e < 20 && !t)) && (t = !t),
            t !== this.state.communityInfoVisible && this.setState({ communityInfoVisible: t }),
            n
                .update({
                    value: Math.min(1, Math.max(0, 1 - e / 20)),
                    immediate: !0,
                })
                .start();
    }
    renderChannelList() {
        let e = this.props,
            { isUnavailable: t, guild: n, selectedChannel: i, enableStudyGroup: l } = e,
            a = em(e, ["isUnavailable", "guild", "selectedChannel", "enableStudyGroup"]);
        if (t || null == n)
            return (0, r.jsx)(ea.Z, { withBannerPadding: null != n && null != this.getGuildBannerHash() });
        {
            if (n.features.has(eo.oNc.HUB) && !l)
                return (0, r.jsx)("div", {
                    className: ep.hubContainer,
                    children: (0, r.jsx)(Z.Z, {
                        guild: n,
                        channel: null != i ? i : W.ZP.getDefaultChannel(n.id),
                    }),
                });
            let e = n.id === eu._ ? en.j : en.E;
            return (0, r.jsx)(
                e,
                eg(eh({ guild: n }, a), {
                    guildBanner: this.getGuildBannerHash(),
                    hasGuildSubheader: this.state.hasGuildSubheader,
                    onScroll:
                        null != n && (null != this.getGuildBannerHash() || (0, et.Z)(n))
                            ? this.pinBannerOrGuildInfo
                            : null,
                }),
            );
        }
    }
    render() {
        var e;
        let { guild: t } = this.props;
        return (0, r.jsxs)("nav", {
            className: ep.container,
            onContextMenu: this.handleContextMenu,
            "aria-label": ed.intl.formatToPlainString(ed.t.nj5gAQ, {
                guildName: null != (e = null == t ? void 0 : t.name) ? e : "",
            }),
            children: [
                null != t && this.renderGuildHeader(this.state.hasGuildSubheader),
                null != t &&
                    (0, r.jsx)(el.Z, {
                        guild: t,
                        setHasSubheader: (e) => this.setState({ hasGuildSubheader: e }),
                    }),
                this.renderChannelList(),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            ef(this, "historyUnlisten", () => {}),
            ef(this, "guildHeaderRef", i.createRef()),
            ef(this, "guildHeaderDropdownButtonRef", i.createRef()),
            ef(this, "showTimeout", new d.V7()),
            ef(this, "state", {
                controller: new o.Controller({
                    value: 1,
                    immediate: !0,
                }),
                renderBanner: !1,
                bannerVisible: !1,
                communityInfoVisible: !1,
                shouldShowSubscribeTooltip: !1,
                bannerVisibleHeight: 88,
                hasGuildSubheader: !1,
            }),
            ef(this, "handleHistoryChange", (e) => {
                null != e.state &&
                    e.state.shouldShowSubscribeTooltip &&
                    this.showTimeout.start(1000, () => this.setState({ shouldShowSubscribeTooltip: !0 }));
            }),
            ef(this, "handleHeaderMenuToggle", (e) => {
                let { isHeaderPopoutOpen: t } = this.props;
                e.stopPropagation(), (0, S.l)(!t), this.closeAllHeaderNotices();
            }),
            ef(this, "handleContextMenu", (e) => {
                let { guild: t } = this.props;
                null != t &&
                    (0, h.jW)(e, async () => {
                        let { default: e } = await n.e("92795").then(n.bind(n, 652171));
                        return (n) => (0, r.jsx)(e, eg(eh({}, n), { guild: t }));
                    });
            }),
            ef(this, "handleHeaderContextMenu", (e) => {
                let { guild: t } = this.props;
                null != t &&
                    (0, h.jW)(e, async () => {
                        let { default: e } = await Promise.all([
                            n.e("1806"),
                            n.e("36599"),
                            n.e("60962"),
                            n.e("58175"),
                            n.e("7654"),
                            n.e("44156"),
                            n.e("47463"),
                            n.e("6850"),
                            n.e("58227"),
                            n.e("54408"),
                            n.e("42926"),
                            n.e("20087"),
                            n.e("6049"),
                            n.e("87154"),
                            n.e("33213"),
                            n.e("23744"),
                        ]).then(n.bind(n, 545135));
                        return (n) => (0, r.jsx)(e, eg(eh({}, n), { guild: t }));
                    });
            }),
            ef(this, "closeAllHeaderNotices", () => {
                this.handleCloseSubscribeTooltip(),
                    this.handleCloseTemplateDirtyTooltip(),
                    this.handleCloseStudentHubPrivacySettingsTooltip();
            }),
            ef(this, "handleCloseStudentHubPrivacySettingsTooltip", () => {
                var e;
                let t = (0, I.zu)(u.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP),
                    n = null == (e = this.props.guild) ? void 0 : e.features.has(eo.oNc.HUB);
                !t && n && (0, I.Q3)(u.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP, { dismissAction: ec.L.AUTO });
            }),
            ef(this, "handleCloseSubscribeTooltip", () => {
                this.showTimeout.stop(),
                    this.state.shouldShowSubscribeTooltip && this.setState({ shouldShowSubscribeTooltip: !1 });
            }),
            ef(this, "handleCloseTemplateDirtyTooltip", () => {
                let { guild: e, showGuildTemplateDirtyTooltip: t } = this.props;
                null != e && t && j.Z.hideGuildTemplateDirtyTooltip(e.id);
            }),
            ef(this, "renderMenuPopout", async () => {
                let { default: e } = await Promise.all([n.e("87154"), n.e("45141")]).then(n.bind(n, 859432));
                return (t) => {
                    let { closePopout: n } = t,
                        { guild: i } = this.props;
                    return (
                        null != i &&
                        (0, r.jsx)(e, {
                            onClose: n,
                            guild: i,
                        })
                    );
                };
            }),
            ef(this, "renderGuildHeaderUpsellPopout", (e) => {
                let {
                    showGuildPowerupProgressBarUpsell: t,
                    showRoleSubscriptionUpsell: n,
                    showInviteSplashUpsell: i,
                    showDiscoveryLandingPageSettingsUpsell: l,
                    showHubPrivacySettingsTooltip: a,
                    showMediaChannelUpsell: o,
                    showTierTemplatesUpsell: s,
                    shouldRenderCustomNotificationSoundsCoachmark: c,
                    shouldRenderGuildPowerupPerkCoachmark: d,
                    shouldRenderBoosterEnhancedRoleColorsCoachmark: p,
                    guild: f,
                } = this.props;
                if (null == f) return this.renderGuildHeaderDropdownButton(e);
                let h = [];
                return (a && h.push(u.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP),
                t && h.push(u.z.GUILD_HEADER_BOOST_PROGRESS_BAR_UPSELL),
                n && h.push(u.z.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL),
                i && h.push(u.z.GUILD_HEADER_INVITE_SPLASH),
                l && h.push(u.z.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL),
                d && h.push(u.z.GUILD_POWERUP_PERKS_COACHMARK),
                p && h.push(u.z.BOOSTER_ENHANCED_ROLE_COLORS_COACHMARK),
                0 === h.length)
                    ? this.renderGuildHeaderDropdownButton(e)
                    : (o && h.push(u.z.MEDIA_CHANNEL_UPSELL),
                      s && h.push(u.z.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL),
                      c && h.push(u.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_COACHMARK),
                      (0, r.jsx)(ei.Z, {
                          contentTypes: h,
                          guild: f,
                          renderGuildHeaderDropdownButton: () => this.renderGuildHeaderDropdownButton(e),
                      }));
            }),
            ef(this, "renderGuildHeaderDropdownButton", (e) =>
                (0, w.jW)({ location: "guild_sidebar" }).entrypoints
                    ? (0, r.jsx)(er.wD, { open: e })
                    : (0, r.jsx)(g.Z, {
                          open: e,
                          className: a()(ep.dropdownButton, {
                              [ep.dropdownButtonBannerVisible]: this.state.bannerVisible,
                          }),
                          ref: this.guildHeaderDropdownButtonRef,
                      }),
            ),
            ef(this, "setAnimatedValueForBanner", (e) => {
                let {
                    renderBanner: t,
                    communityInfoVisible: n,
                    bannerVisible: r,
                    bannerVisibleHeight: i,
                    controller: l,
                } = this.state;
                ((e >= 88 && r) || (e < 88 && !r)) && (r = !r),
                    ((e >= 88 && !t) || (e < 88 && t)) && (t = !t),
                    (i = Math.max(88 - e, 0)),
                    (n = r),
                    (t !== this.state.renderBanner ||
                        r !== this.state.bannerVisible ||
                        i !== this.state.bannerVisibleHeight ||
                        n !== this.state.communityInfoVisible) &&
                        this.setState({
                            renderBanner: t,
                            bannerVisible: r,
                            bannerVisibleHeight: i,
                            communityInfoVisible: n,
                        }),
                    l
                        .update({
                            value: Math.min(1, Math.max(0, 1 - e / 88)),
                            immediate: !0,
                        })
                        .start();
            }),
            ef(this, "pinBannerOrGuildInfo", (e) => {
                let { scrollTop: t } = e;
                this.setAnimatedValue(t);
            });
    }
}
function eE(e) {
    var t;
    let { guildId: n, hideSelectedChannel: l, selectedChannelId: a } = e,
        o = (0, c.e7)([Y.Z], () => Y.Z.getGuild(n));
    (0, m.J_)(n);
    let d = (0, C.Z)(n),
        f = (0, c.e7)([F.Z], () => F.Z.getGuildDimensions(n).scrollTo),
        h = (0, c.e7)([X.Z], () => X.Z.getChannelId()),
        g = (0, c.e7)([q.Z], () => q.Z.can(eo.Plq.MANAGE_GUILD, o)),
        j = (0, c.e7)([z.Z], () => z.Z.isUnavailable(n)),
        Z = (0, c.e7)([J.default], () => J.default.getCurrentUser()),
        { enableStudyGroup: w } = (0, x.s)(o),
        U = (0, v.ZP)((e) => e.currentlyShown.has(u.z.NAGBAR_NOTICE_CONNECT_PLAYSTATION)),
        [G, V] = i.useState(!U),
        W = (0, b.Z)(n),
        { analyticsLocations: et } = (0, O.ZP)(_.Z.GUILD_HEADER);
    i.useEffect(() => {
        n !== W && V(!U);
    }, [n, W, U]);
    let [en, er] = (0, v.ZP)(
            (e) => [
                es.XN.some((t) => e.currentlyShown.has(t.dismissibleContentType)),
                e.currentlyShownGroup.has(ec.R.GUILD_HEADER_TOOLTIPS),
            ],
            s.X,
        ),
        ei = (0, y.Z)(o),
        el = (0, p.s9z)(p.JQI),
        ea = (0, c.e7)([K.Z], () => K.Z.hasLayers()),
        eu = (0, c.e7)([B.Z], () => B.Z.shouldShow(eb)),
        ed =
            (0, R.cT)(n, "GuildSidebar") &&
            g &&
            (null == o ? void 0 : o.premiumProgressBarEnabled) === !1 &&
            !ee.s.isDisallowPopupsSet(),
        ep = (0, P.Z)(n),
        ef = (null == o ? void 0 : o.features.has(eo.oNc.HUB)) === !0,
        eh = g && (null == o ? void 0 : o.features.has(eo.oNc.DISCOVERABLE)) === !0,
        eg = (0, E.Q)(),
        em = (g || (null == o ? void 0 : o.premiumTier) === eo.Eu4.NONE) && !ee.s.isDisallowPopupsSet() && !eg,
        e_ = (0, c.e7)(
            [A.Z, K.Z],
            () => null != o && null != Z && g && !K.Z.hasLayers() && A.Z.shouldShowGuildTemplateDirtyTooltip(n),
        ),
        eE = (0, c.e7)([H.Z], () => H.Z.getChannel(a)),
        { isPopoutOpen: ey } = (0, S.y)(),
        ev = null != (t = null == o ? void 0 : o.features.has(eo.oNc.COMMUNITY)) && t,
        eI = $.ZP.isNewUser(Z),
        eC = G && !eI;
    (0, N.Z)(o);
    let eS = (0, I.Nj)(u.z.PREMIUM_TUTORIAL_SERVER_MENU_TOOLTIP),
        eN = (0, L.Z)(n),
        eT = (0, T.Z)(n),
        eP = (0, c.e7)([X.Z], () => X.Z.getChannelId()),
        ej = (0, c.e7)([Q.Z], () => Q.Z.desyncedVoiceStatesCount),
        eA = M.Y.useExperiment({ location: "GuildSidebar" }, { autoTrackExposure: !0 }).enabled,
        ex = (0, D.Z)(n),
        eZ = (0, k.Z)(null == Z ? void 0 : Z.id, n) && (null == o ? void 0 : o.premiumProgressBarEnabled) === !1;
    return (0, r.jsx)(eO, {
        guildId: n,
        hideSelectedChannel: l,
        guild: o,
        scrollToChannel: f,
        selectedChannelId: l ? null : a,
        selectedChannel: eE,
        selectedVoiceChannelId: h,
        voiceStates: d,
        rtcConnectedChannelId: eP,
        rtcDesyncedVoiceStatesCount: ej,
        isUnavailable: j,
        user: Z,
        hasChannelNotice: null != ei || en,
        anyLayerOpen: el || ea,
        showGuildPowerupProgressBarUpsell: ed,
        showInviteSplashUpsell: em,
        showDiscoveryLandingPageSettingsUpsell: eh,
        showGuildHeaderTutorial: eu,
        showGuildTemplateDirtyTooltip: e_,
        showRoleSubscriptionUpsell: ep,
        showHubPrivacySettingsTooltip: ef,
        showNewUnreadsBar: ev,
        showMediaChannelUpsell: eN,
        showTierTemplatesUpsell: eT,
        isHeaderPopoutOpen: ey,
        enableStudyGroup: w,
        isGuildHeaderDismissibleTooltipShown: er,
        canShowCoachMarkAtBottom: G,
        headerAnalyticsLocations: et,
        isTutorialHighlightDismissed: eS,
        shouldRenderBurstCoachmark: eC,
        shouldRenderCustomNotificationSoundsCoachmark: eA,
        shouldRenderGuildPowerupPerkCoachmark: !1 === ex,
        shouldRenderBoosterEnhancedRoleColorsCoachmark: eZ,
    });
}
