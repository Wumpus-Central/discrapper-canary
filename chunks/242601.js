n.d(t, { Z: () => eO }), n(388685), n(539854);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(202841),
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
    x = n(130734),
    A = n(499137),
    Z = n(258871),
    w = n(340541),
    L = n(972264),
    R = n(691698),
    D = n(639777),
    k = n(11352),
    M = n(304445),
    U = n(155409),
    G = n(10401),
    B = n(970731),
    V = n(592125),
    H = n(796974),
    F = n(486472),
    z = n(984933),
    W = n(430824),
    Y = n(819640),
    K = n(496675),
    q = n(878884),
    Q = n(19780),
    X = n(594174),
    J = n(74538),
    $ = n(374023),
    ee = n(598056),
    et = n(373274),
    en = n(315174),
    er = n(577718),
    ei = n(156978),
    el = n(591190),
    ea = n(981631),
    eo = n(652785),
    es = n(921944),
    ec = n(647086),
    eu = n(388032),
    ed = n(971606);
function ep(e, t, n) {
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
function ef(e) {
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
                ep(e, t, n[t]);
            });
    }
    return e;
}
function eh(e, t) {
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
function eg(e, t) {
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
let em = "server-settings",
    eb = {
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
class e_ extends i.PureComponent {
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
            (this.historyUnlisten = M.Z.addRouteChangeListener(this.handleHistoryChange));
        let { location: t } = M.Z.getHistory();
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
                  children: (0, r.jsx)(U.Z, {
                      tutorialId: em,
                      position: "bottom",
                      inlineSpecs: eb,
                      children: this.renderGuildHeaderDropdownButton(e),
                  }),
              })
            : t
              ? (0, r.jsx)(p.ua7, {
                    forceOpen: !0,
                    color: p.FGA.BRAND,
                    position: "bottom",
                    shouldShow: !e && !i,
                    text: eu.intl.string(eu.t.sFSrFB),
                    "aria-label": eu.intl.string(eu.t.sFSrFB),
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
                                children: (0, r.jsx)(B.ZP, {
                                    header: eu.intl.string(eu.t["Q3qa4+"]),
                                    content: eu.intl.string(eu.t.UyHD4O),
                                    buttonCTA: eu.intl.string(eu.t.U9PrMz),
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
                    children: (0, r.jsx)(en.ZP, {
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
                                a = eg(i, ["onClick"]);
                            return (0, r.jsx)(
                                en.ZP,
                                eh(
                                    ef(
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
            r = null != t && (0, ee.Z)(t);
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
            a = eg(e, ["isUnavailable", "guild", "selectedChannel", "enableStudyGroup"]);
        if (t || null == n)
            return (0, r.jsx)(el.Z, { withBannerPadding: null != n && null != this.getGuildBannerHash() });
        {
            if (n.features.has(ea.oNc.HUB) && !l)
                return (0, r.jsx)("div", {
                    className: ed.hubContainer,
                    children: (0, r.jsx)(Z.Z, {
                        guild: n,
                        channel: null != i ? i : z.ZP.getDefaultChannel(n.id),
                    }),
                });
            let e = n.id === ec._ ? et.j : et.E;
            return (0, r.jsx)(
                e,
                eh(ef({ guild: n }, a), {
                    guildBanner: this.getGuildBannerHash(),
                    hasGuildSubheader: this.state.hasGuildSubheader,
                    onScroll:
                        null != n && (null != this.getGuildBannerHash() || (0, ee.Z)(n))
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
            className: ed.container,
            onContextMenu: this.handleContextMenu,
            "aria-label": eu.intl.formatToPlainString(eu.t.nj5gAQ, {
                guildName: null != (e = null == t ? void 0 : t.name) ? e : "",
            }),
            children: [
                null != t && this.renderGuildHeader(this.state.hasGuildSubheader),
                null != t &&
                    (0, r.jsx)(ei.Z, {
                        guild: t,
                        setHasSubheader: (e) => this.setState({ hasGuildSubheader: e }),
                    }),
                this.renderChannelList(),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            ep(this, "historyUnlisten", () => {}),
            ep(this, "guildHeaderRef", i.createRef()),
            ep(this, "guildHeaderDropdownButtonRef", i.createRef()),
            ep(this, "showTimeout", new d.V7()),
            ep(this, "state", {
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
            ep(this, "handleHistoryChange", (e) => {
                null != e.state &&
                    e.state.shouldShowSubscribeTooltip &&
                    this.showTimeout.start(1000, () => this.setState({ shouldShowSubscribeTooltip: !0 }));
            }),
            ep(this, "handleHeaderMenuToggle", (e) => {
                let { isHeaderPopoutOpen: t } = this.props;
                e.stopPropagation(), (0, S.l)(!t), this.closeAllHeaderNotices();
            }),
            ep(this, "handleContextMenu", (e) => {
                let { guild: t } = this.props;
                null != t &&
                    (0, h.jW)(e, async () => {
                        let { default: e } = await n.e("92795").then(n.bind(n, 652171));
                        return (n) => (0, r.jsx)(e, eh(ef({}, n), { guild: t }));
                    });
            }),
            ep(this, "handleHeaderContextMenu", (e) => {
                let { guild: t } = this.props;
                null != t &&
                    (0, h.jW)(e, async () => {
                        let { default: e } = await Promise.all([
                            n.e("1806"),
                            n.e("36599"),
                            n.e("60962"),
                            n.e("58175"),
                            n.e("55616"),
                            n.e("7654"),
                            n.e("44156"),
                            n.e("47463"),
                            n.e("6850"),
                            n.e("58227"),
                            n.e("54408"),
                            n.e("42926"),
                            n.e("88479"),
                            n.e("87154"),
                            n.e("33213"),
                            n.e("23744"),
                        ]).then(n.bind(n, 545135));
                        return (n) => (0, r.jsx)(e, eh(ef({}, n), { guild: t }));
                    });
            }),
            ep(this, "closeAllHeaderNotices", () => {
                this.handleCloseSubscribeTooltip(),
                    this.handleCloseTemplateDirtyTooltip(),
                    this.handleCloseStudentHubPrivacySettingsTooltip();
            }),
            ep(this, "handleCloseStudentHubPrivacySettingsTooltip", () => {
                var e;
                let t = (0, I.zu)(u.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP),
                    n = null == (e = this.props.guild) ? void 0 : e.features.has(ea.oNc.HUB);
                !t && n && (0, I.Q3)(u.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP, { dismissAction: es.L.AUTO });
            }),
            ep(this, "handleCloseSubscribeTooltip", () => {
                this.showTimeout.stop(),
                    this.state.shouldShowSubscribeTooltip && this.setState({ shouldShowSubscribeTooltip: !1 });
            }),
            ep(this, "handleCloseTemplateDirtyTooltip", () => {
                let { guild: e, showGuildTemplateDirtyTooltip: t } = this.props;
                null != e && t && j.Z.hideGuildTemplateDirtyTooltip(e.id);
            }),
            ep(this, "renderMenuPopout", async () => {
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
            ep(this, "renderGuildHeaderUpsellPopout", (e) => {
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
                    guild: p,
                } = this.props;
                if (null == p) return this.renderGuildHeaderDropdownButton(e);
                let f = [];
                return (a && f.push(u.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP),
                t && f.push(u.z.GUILD_HEADER_BOOST_PROGRESS_BAR_UPSELL),
                n && f.push(u.z.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL),
                i && f.push(u.z.GUILD_HEADER_INVITE_SPLASH),
                l && f.push(u.z.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL),
                d && f.push(u.z.GUILD_POWERUP_PERKS_COACHMARK),
                0 === f.length)
                    ? this.renderGuildHeaderDropdownButton(e)
                    : (o && f.push(u.z.MEDIA_CHANNEL_UPSELL),
                      s && f.push(u.z.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL),
                      c && f.push(u.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_COACHMARK),
                      (0, r.jsx)(er.Z, {
                          contentTypes: f,
                          guild: p,
                          renderGuildHeaderDropdownButton: () => this.renderGuildHeaderDropdownButton(e),
                      }));
            }),
            ep(this, "renderGuildHeaderDropdownButton", (e) =>
                (0, w.jW)({ location: "guild_sidebar" }).entrypoints
                    ? (0, r.jsx)(en.wD, { open: e })
                    : (0, r.jsx)(g.Z, {
                          open: e,
                          className: a()(ed.dropdownButton, {
                              [ed.dropdownButtonBannerVisible]: this.state.bannerVisible,
                          }),
                          ref: this.guildHeaderDropdownButtonRef,
                      }),
            ),
            ep(this, "setAnimatedValueForBanner", (e) => {
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
            ep(this, "pinBannerOrGuildInfo", (e) => {
                let { scrollTop: t } = e;
                this.setAnimatedValue(t);
            });
    }
}
function eO(e) {
    var t;
    let { guildId: n, hideSelectedChannel: l, selectedChannelId: a } = e,
        o = (0, c.e7)([W.Z], () => W.Z.getGuild(n));
    (0, m.J_)(n);
    let d = (0, C.Z)(n),
        f = (0, c.e7)([H.Z], () => H.Z.getGuildDimensions(n).scrollTo),
        h = (0, c.e7)([Q.Z], () => Q.Z.getChannelId()),
        g = (0, c.e7)([K.Z], () => K.Z.can(ea.Plq.MANAGE_GUILD, o)),
        j = (0, c.e7)([F.Z], () => F.Z.isUnavailable(n)),
        Z = (0, c.e7)([X.default], () => X.default.getCurrentUser()),
        { enableStudyGroup: w } = (0, A.s)(o),
        M = (0, v.ZP)((e) => e.currentlyShown.has(u.z.NAGBAR_NOTICE_CONNECT_PLAYSTATION)),
        [U, B] = i.useState(!M),
        z = (0, b.Z)(n),
        { analyticsLocations: ee } = (0, O.ZP)(_.Z.GUILD_HEADER);
    i.useEffect(() => {
        n !== z && B(!M);
    }, [n, z, M]);
    let [et, en] = (0, v.ZP)(
            (e) => [
                eo.XN.some((t) => e.currentlyShown.has(t.dismissibleContentType)),
                e.currentlyShownGroup.has(es.R.GUILD_HEADER_TOOLTIPS),
            ],
            s.X,
        ),
        er = (0, y.Z)(o),
        ei = (0, p.s9z)(p.JQI),
        el = (0, c.e7)([Y.Z], () => Y.Z.hasLayers()),
        ec = (0, c.e7)([G.Z], () => G.Z.shouldShow(em)),
        eu =
            (0, R.cT)(n, "GuildSidebar") &&
            g &&
            (null == o ? void 0 : o.premiumProgressBarEnabled) === !1 &&
            !$.s.isDisallowPopupsSet(),
        ed = (0, P.Z)(n),
        ep = (null == o ? void 0 : o.features.has(ea.oNc.HUB)) === !0,
        ef = g && (null == o ? void 0 : o.features.has(ea.oNc.DISCOVERABLE)) === !0,
        eh = (0, E.Q)(),
        eg = (g || (null == o ? void 0 : o.premiumTier) === ea.Eu4.NONE) && !$.s.isDisallowPopupsSet() && !eh,
        eb = (0, c.e7)(
            [x.Z, Y.Z],
            () => null != o && null != Z && g && !Y.Z.hasLayers() && x.Z.shouldShowGuildTemplateDirtyTooltip(n),
        ),
        eO = (0, c.e7)([V.Z], () => V.Z.getChannel(a)),
        { isPopoutOpen: eE } = (0, S.y)(),
        ey = null != (t = null == o ? void 0 : o.features.has(ea.oNc.COMMUNITY)) && t,
        ev = J.ZP.isNewUser(Z),
        eI = U && !ev;
    (0, N.Z)(o);
    let eC = (0, I.Nj)(u.z.PREMIUM_TUTORIAL_SERVER_MENU_TOOLTIP),
        eS = (0, L.Z)(n),
        eN = (0, T.Z)(n),
        eT = (0, c.e7)([Q.Z], () => Q.Z.getChannelId()),
        eP = (0, c.e7)([q.Z], () => q.Z.desyncedVoiceStatesCount),
        ej = k.Y.useExperiment({ location: "GuildSidebar" }, { autoTrackExposure: !0 }).enabled,
        ex = (0, D.Z)(n);
    return (0, r.jsx)(e_, {
        guildId: n,
        hideSelectedChannel: l,
        guild: o,
        scrollToChannel: f,
        selectedChannelId: l ? null : a,
        selectedChannel: eO,
        selectedVoiceChannelId: h,
        voiceStates: d,
        rtcConnectedChannelId: eT,
        rtcDesyncedVoiceStatesCount: eP,
        isUnavailable: j,
        user: Z,
        hasChannelNotice: null != er || et,
        anyLayerOpen: ei || el,
        showGuildPowerupProgressBarUpsell: eu,
        showInviteSplashUpsell: eg,
        showDiscoveryLandingPageSettingsUpsell: ef,
        showGuildHeaderTutorial: ec,
        showGuildTemplateDirtyTooltip: eb,
        showRoleSubscriptionUpsell: ed,
        showHubPrivacySettingsTooltip: ep,
        showNewUnreadsBar: ey,
        showMediaChannelUpsell: eS,
        showTierTemplatesUpsell: eN,
        isHeaderPopoutOpen: eE,
        enableStudyGroup: w,
        isGuildHeaderDismissibleTooltipShown: en,
        canShowCoachMarkAtBottom: U,
        headerAnalyticsLocations: ee,
        isTutorialHighlightDismissed: eC,
        shouldRenderBurstCoachmark: eI,
        shouldRenderCustomNotificationSoundsCoachmark: ej,
        shouldRenderGuildPowerupPerkCoachmark: !1 === ex,
    });
}
