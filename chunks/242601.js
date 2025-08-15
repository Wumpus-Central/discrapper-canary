n.d(t, { Z: () => ev }), n(388685), n(539854);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(815061),
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
    R = n(639777),
    D = n(761700),
    k = n(11352),
    M = n(304445),
    U = n(984802),
    G = n(155409),
    B = n(10401),
    V = n(970731),
    H = n(210887),
    F = n(592125),
    z = n(796974),
    W = n(486472),
    Y = n(984933),
    K = n(650774),
    q = n(430824),
    X = n(819640),
    Q = n(496675),
    J = n(878884),
    $ = n(19780),
    ee = n(594174),
    et = n(74538),
    en = n(374023),
    er = n(598056),
    ei = n(373274),
    el = n(315174),
    ea = n(577718),
    eo = n(156978),
    es = n(591190),
    ec = n(981631),
    eu = n(652785),
    ed = n(921944),
    ep = n(647086),
    ef = n(388032),
    eh = n(971606);
function eg(e, t, n) {
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
function em(e) {
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
                eg(e, t, n[t]);
            });
    }
    return e;
}
function eb(e, t) {
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
function e_(e, t) {
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
let eO = "server-settings",
    eE = {
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
class ey extends i.PureComponent {
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
                  children: (0, r.jsx)(G.Z, {
                      tutorialId: eO,
                      position: "bottom",
                      inlineSpecs: eE,
                      children: this.renderGuildHeaderDropdownButton(e),
                  }),
              })
            : t
              ? (0, r.jsx)(p.ua7, {
                    forceOpen: !0,
                    color: p.FGA.BRAND,
                    position: "bottom",
                    shouldShow: !e && !i,
                    text: ef.intl.string(ef.t.sFSrFB),
                    "aria-label": ef.intl.string(ef.t.sFSrFB),
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
                                    header: ef.intl.string(ef.t["Q3qa4+"]),
                                    content: ef.intl.string(ef.t.UyHD4O),
                                    buttonCTA: ef.intl.string(ef.t.U9PrMz),
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
                    children: (0, r.jsx)(el.ZP, {
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
                                a = e_(i, ["onClick"]);
                            return (0, r.jsx)(
                                el.ZP,
                                eb(
                                    em(
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
            r = null != t && (0, er.Z)(t);
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
            a = e_(e, ["isUnavailable", "guild", "selectedChannel", "enableStudyGroup"]);
        if (t || null == n)
            return (0, r.jsx)(es.Z, { withBannerPadding: null != n && null != this.getGuildBannerHash() });
        {
            if (n.features.has(ec.oNc.HUB) && !l)
                return (0, r.jsx)("div", {
                    className: eh.hubContainer,
                    children: (0, r.jsx)(Z.Z, {
                        guild: n,
                        channel: null != i ? i : Y.ZP.getDefaultChannel(n.id),
                    }),
                });
            let e = n.id === ep._ ? ei.j : ei.E;
            return (0, r.jsx)(
                e,
                eb(em({ guild: n }, a), {
                    guildBanner: this.getGuildBannerHash(),
                    hasGuildSubheader: this.state.hasGuildSubheader,
                    onScroll:
                        null != n && (null != this.getGuildBannerHash() || (0, er.Z)(n))
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
            className: eh.container,
            onContextMenu: this.handleContextMenu,
            "aria-label": ef.intl.formatToPlainString(ef.t.nj5gAQ, {
                guildName: null != (e = null == t ? void 0 : t.name) ? e : "",
            }),
            children: [
                null != t && this.renderGuildHeader(this.state.hasGuildSubheader),
                null != t &&
                    (0, r.jsx)(eo.Z, {
                        guild: t,
                        setHasSubheader: (e) => this.setState({ hasGuildSubheader: e }),
                    }),
                this.renderChannelList(),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            eg(this, "historyUnlisten", () => {}),
            eg(this, "guildHeaderRef", i.createRef()),
            eg(this, "guildHeaderDropdownButtonRef", i.createRef()),
            eg(this, "showTimeout", new d.V7()),
            eg(this, "state", {
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
            eg(this, "handleHistoryChange", (e) => {
                null != e.state &&
                    e.state.shouldShowSubscribeTooltip &&
                    this.showTimeout.start(1000, () => this.setState({ shouldShowSubscribeTooltip: !0 }));
            }),
            eg(this, "handleHeaderMenuToggle", (e) => {
                let { isHeaderPopoutOpen: t } = this.props;
                e.stopPropagation(), (0, S.l)(!t), this.closeAllHeaderNotices();
            }),
            eg(this, "handleContextMenu", (e) => {
                let { guild: t } = this.props;
                null != t &&
                    (0, h.jW)(e, async () => {
                        let { default: e } = await n.e("92795").then(n.bind(n, 652171));
                        return (n) => (0, r.jsx)(e, eb(em({}, n), { guild: t }));
                    });
            }),
            eg(this, "handleHeaderContextMenu", (e) => {
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
                        return (n) => (0, r.jsx)(e, eb(em({}, n), { guild: t }));
                    });
            }),
            eg(this, "closeAllHeaderNotices", () => {
                this.handleCloseSubscribeTooltip(),
                    this.handleCloseTemplateDirtyTooltip(),
                    this.handleCloseStudentHubPrivacySettingsTooltip();
            }),
            eg(this, "handleCloseStudentHubPrivacySettingsTooltip", () => {
                var e;
                let t = (0, I.zu)(u.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP),
                    n = null == (e = this.props.guild) ? void 0 : e.features.has(ec.oNc.HUB);
                !t && n && (0, I.Q3)(u.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP, { dismissAction: ed.L.AUTO });
            }),
            eg(this, "handleCloseSubscribeTooltip", () => {
                this.showTimeout.stop(),
                    this.state.shouldShowSubscribeTooltip && this.setState({ shouldShowSubscribeTooltip: !1 });
            }),
            eg(this, "handleCloseTemplateDirtyTooltip", () => {
                let { guild: e, showGuildTemplateDirtyTooltip: t } = this.props;
                null != e && t && j.Z.hideGuildTemplateDirtyTooltip(e.id);
            }),
            eg(this, "renderMenuPopout", async () => {
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
            eg(this, "renderGuildHeaderUpsellPopout", (e) => {
                let {
                    showGuildBoostingProgressBarUpsell: t,
                    showGuildBoostingProgressBarSizeUpsell: n,
                    showRoleSubscriptionUpsell: i,
                    showInviteSplashUpsell: l,
                    showDiscoveryLandingPageSettingsUpsell: a,
                    showHubPrivacySettingsTooltip: o,
                    showMediaChannelUpsell: s,
                    showTierTemplatesUpsell: c,
                    shouldRenderCustomNotificationSoundsCoachmark: d,
                    shouldRenderGuildPowerupPerkCoachmark: p,
                    shouldRenderBoosterEnhancedRoleColorsCoachmark: f,
                    guild: h,
                    theme: g,
                } = this.props;
                if (null == h) return this.renderGuildHeaderDropdownButton(e);
                let m = [];
                return (o && m.push(u.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP),
                t && m.push(u.z.GUILD_HEADER_PREMIUM_GUILD_PROGRESS),
                n && m.push(u.z.GUILD_HEADER_PROGRESS_BAR_SIZE_COACH_MARK),
                i && m.push(u.z.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL),
                l && m.push(u.z.GUILD_HEADER_INVITE_SPLASH),
                a && m.push(u.z.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL),
                p && m.push(u.z.GUILD_POWERUP_PERKS_COACHMARK),
                f && m.push(u.z.BOOSTER_ENHANCED_ROLE_COLORS_COACHMARK),
                0 === m.length)
                    ? this.renderGuildHeaderDropdownButton(e)
                    : (s && m.push(u.z.MEDIA_CHANNEL_UPSELL),
                      c && m.push(u.z.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL),
                      d && m.push(u.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_COACHMARK),
                      (0, r.jsx)(ea.Z, {
                          contentTypes: m,
                          theme: g,
                          guild: h,
                          renderGuildHeaderDropdownButton: () => this.renderGuildHeaderDropdownButton(e),
                      }));
            }),
            eg(this, "renderGuildHeaderDropdownButton", (e) =>
                (0, w.jW)({ location: "guild_sidebar" }).entrypoints
                    ? (0, r.jsx)(el.wD, { open: e })
                    : (0, r.jsx)(g.Z, {
                          open: e,
                          className: a()(eh.dropdownButton, {
                              [eh.dropdownButtonBannerVisible]: this.state.bannerVisible,
                          }),
                          ref: this.guildHeaderDropdownButtonRef,
                      }),
            ),
            eg(this, "setAnimatedValueForBanner", (e) => {
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
            eg(this, "pinBannerOrGuildInfo", (e) => {
                let { scrollTop: t } = e;
                this.setAnimatedValue(t);
            });
    }
}
function ev(e) {
    var t;
    let { guildId: n, hideSelectedChannel: l, selectedChannelId: a } = e,
        o = (0, c.e7)([q.Z], () => q.Z.getGuild(n));
    (0, m.J_)(n);
    let d = (0, C.Z)(n),
        f = (0, c.e7)([z.Z], () => z.Z.getGuildDimensions(n).scrollTo),
        h = (0, c.e7)([$.Z], () => $.Z.getChannelId()),
        g = (0, c.e7)([Q.Z], () => Q.Z.can(ec.Plq.MANAGE_GUILD, o)),
        j = (0, c.e7)([W.Z], () => W.Z.isUnavailable(n)),
        Z = (0, c.e7)([ee.default], () => ee.default.getCurrentUser()),
        w = (0, U.Ll)(),
        M = (0, c.e7)([H.Z], () => (null != w ? w : H.Z.theme)),
        { enableStudyGroup: G } = (0, A.s)(o),
        V = (0, v.ZP)((e) => e.currentlyShown.has(u.z.NAGBAR_NOTICE_CONNECT_PLAYSTATION)),
        [Y, er] = i.useState(!V),
        ei = (0, b.Z)(n),
        { analyticsLocations: el } = (0, O.ZP)(_.Z.GUILD_HEADER);
    i.useEffect(() => {
        n !== ei && er(!V);
    }, [n, ei, V]);
    let [ea, eo] = (0, v.ZP)(
            (e) => [
                eu.XN.some((t) => e.currentlyShown.has(t.dismissibleContentType)),
                e.currentlyShownGroup.has(ed.R.GUILD_HEADER_TOOLTIPS),
            ],
            s.X,
        ),
        es = (0, y.Z)(o),
        ep = (0, p.s9z)(p.JQI),
        ef = (0, c.e7)([X.Z], () => X.Z.hasLayers()),
        eh = (0, c.e7)([B.Z], () => B.Z.shouldShow(eO)),
        eg = g && (null == o ? void 0 : o.premiumProgressBarEnabled) === !1 && !en.s.isDisallowPopupsSet(),
        em = (0, c.e7)([K.Z], () => K.Z.getMemberCount(n)),
        eb =
            g &&
            null != em &&
            em >= 30 &&
            (null == o ? void 0 : o.premiumProgressBarEnabled) === !1 &&
            !en.s.isDisallowPopupsSet(),
        e_ = (0, P.Z)(n),
        eE = (null == o ? void 0 : o.features.has(ec.oNc.HUB)) === !0,
        ev = g && (null == o ? void 0 : o.features.has(ec.oNc.DISCOVERABLE)) === !0,
        eI = (0, E.Q)(),
        eC = (g || (null == o ? void 0 : o.premiumTier) === ec.Eu4.NONE) && !en.s.isDisallowPopupsSet() && !eI,
        eS = (0, c.e7)(
            [x.Z, X.Z],
            () => null != o && null != Z && g && !X.Z.hasLayers() && x.Z.shouldShowGuildTemplateDirtyTooltip(n),
        ),
        eN = (0, c.e7)([F.Z], () => F.Z.getChannel(a)),
        { isPopoutOpen: eT } = (0, S.y)(),
        eP = null != (t = null == o ? void 0 : o.features.has(ec.oNc.COMMUNITY)) && t,
        ej = et.ZP.isNewUser(Z),
        ex = Y && !ej;
    (0, N.Z)(o);
    let eA = (0, I.Nj)(u.z.PREMIUM_TUTORIAL_SERVER_MENU_TOOLTIP),
        eZ = (0, L.Z)(n),
        ew = (0, T.Z)(n),
        eL = (0, c.e7)([$.Z], () => $.Z.getChannelId()),
        eR = (0, c.e7)([J.Z], () => J.Z.desyncedVoiceStatesCount),
        eD = k.Y.useExperiment({ location: "GuildSidebar" }, { autoTrackExposure: !0 }).enabled,
        ek = (0, R.Z)(n),
        eM = (0, D.Z)(null == Z ? void 0 : Z.id, n) && (null == o ? void 0 : o.premiumProgressBarEnabled) === !1;
    return (0, r.jsx)(ey, {
        guildId: n,
        hideSelectedChannel: l,
        guild: o,
        scrollToChannel: f,
        selectedChannelId: l ? null : a,
        selectedChannel: eN,
        selectedVoiceChannelId: h,
        voiceStates: d,
        rtcConnectedChannelId: eL,
        rtcDesyncedVoiceStatesCount: eR,
        isUnavailable: j,
        theme: M,
        user: Z,
        hasChannelNotice: null != es || ea,
        anyLayerOpen: ep || ef,
        showGuildBoostingProgressBarUpsell: eg,
        showGuildBoostingProgressBarSizeUpsell: eb,
        showInviteSplashUpsell: eC,
        showDiscoveryLandingPageSettingsUpsell: ev,
        showGuildHeaderTutorial: eh,
        showGuildTemplateDirtyTooltip: eS,
        showRoleSubscriptionUpsell: e_,
        showHubPrivacySettingsTooltip: eE,
        showNewUnreadsBar: eP,
        showMediaChannelUpsell: eZ,
        showTierTemplatesUpsell: ew,
        isHeaderPopoutOpen: eT,
        enableStudyGroup: G,
        isGuildHeaderDismissibleTooltipShown: eo,
        canShowCoachMarkAtBottom: Y,
        headerAnalyticsLocations: el,
        isTutorialHighlightDismissed: eA,
        shouldRenderBurstCoachmark: ex,
        shouldRenderCustomNotificationSoundsCoachmark: eD,
        shouldRenderGuildPowerupPerkCoachmark: !1 === ek,
        shouldRenderBoosterEnhancedRoleColorsCoachmark: eM,
    });
}
