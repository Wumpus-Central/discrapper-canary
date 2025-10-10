n.d(t, { Z: () => eb }), n(388685), n(539854);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(137317),
    s = n(574583),
    c = n(442837),
    u = n(704215),
    d = n(846519),
    p = n(907862),
    f = n(481060),
    h = n(570140),
    g = n(239091),
    m = n(269128),
    b = n(711237),
    _ = n(110924),
    O = n(100527),
    E = n(906732),
    y = n(785203),
    v = n(211644),
    I = n(266454),
    S = n(492162),
    C = n(43740),
    T = n(596557),
    N = n(817520),
    j = n(999309),
    P = n(408987),
    x = n(130734),
    A = n(499137),
    Z = n(258871),
    w = n(340541),
    L = n(972264),
    R = n(691698),
    D = n(639777),
    k = n(304445),
    M = n(155409),
    U = n(10401),
    G = n(592125),
    B = n(796974),
    H = n(486472),
    V = n(984933),
    F = n(430824),
    z = n(819640),
    W = n(496675),
    q = n(878884),
    Y = n(19780),
    K = n(594174),
    Q = n(74538),
    X = n(374023),
    J = n(598056),
    $ = n(373274),
    ee = n(315174),
    et = n(577718),
    en = n(156978),
    er = n(591190),
    ei = n(981631),
    el = n(652785),
    ea = n(921944),
    eo = n(647086),
    es = n(388032),
    ec = n(971606);
function eu(e, t, n) {
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
function ed(e) {
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
                eu(e, t, n[t]);
            });
    }
    return e;
}
function ep(e, t) {
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
function ef(e, t) {
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
let eh = "server-settings",
    eg = {
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
class em extends i.PureComponent {
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
            h.Z.subscribe("LAYER_PUSH", this.closeAllHeaderNotices),
            (this.historyUnlisten = k.Z.addRouteChangeListener(this.handleHistoryChange));
        let { location: t } = k.Z.getHistory();
        (null == (e = t.state) ? void 0 : e.shouldShowSubscribeTooltip) &&
            this.showTimeout.start(1000, () => this.setState({ shouldShowSubscribeTooltip: !0 }));
    }
    componentWillUnmount() {
        this.showTimeout.stop(),
            this.state.controller.dispose(),
            this.historyUnlisten(),
            h.Z.unsubscribe("LAYER_PUSH", this.closeAllHeaderNotices);
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
                  children: (0, r.jsx)(M.Z, {
                      tutorialId: eh,
                      position: "bottom",
                      inlineSpecs: eg,
                      children: this.renderGuildHeaderDropdownButton(e),
                  }),
              })
            : t
              ? (0, r.jsx)(f.ua7, {
                    forceOpen: !0,
                    color: f.FGA.BRAND,
                    position: "bottom",
                    shouldShow: !e && !i,
                    text: es.intl.string(es.t.sFSrFB),
                    "aria-label": es.intl.string(es.t.sFSrFB),
                    children: () => this.renderGuildHeaderDropdownButton(e),
                })
              : i || e
                ? this.renderGuildHeaderDropdownButton(e)
                : l
                  ? (0, r.jsxs)(r.Fragment, {
                        children: [
                            this.renderGuildHeaderDropdownButton(e),
                            (0, r.jsx)(p.J2, {
                                targetElementRef: this.guildHeaderDropdownButtonRef,
                                title: es.intl.string(es.t["Q3qa4+"]),
                                body: es.intl.string(es.t.UyHD4O),
                                onRequestClose: this.handleCloseSubscribeTooltip,
                                position: "bottom",
                                caretConfig: { align: "center" },
                            }),
                        ],
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
                communityInfoVisible: p,
            } = this.state,
            h = i || l || a;
        return null == t
            ? null
            : (0, w.jW)({ location: "guild_sidebar" }).entrypoints
              ? (0, r.jsx)(E.Gt, {
                    value: o,
                    children: (0, r.jsx)(ee.ZP, {
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
                        children: this.renderGuildHeaderNotices(n),
                    }),
                })
              : (0, r.jsx)(E.Gt, {
                    value: o,
                    children: (0, r.jsx)(f.KeG, {
                        targetElementRef: this.guildHeaderRef,
                        renderPopout: this.renderMenuPopout,
                        position: "bottom",
                        align: "center",
                        animation: f.yRy.Animation.SCALE,
                        shouldShow: n,
                        onRequestClose: () => {
                            (0, C.l)(!1);
                        },
                        spacing: 4,
                        children: (i) => {
                            var { onClick: l } = i,
                                a = ef(i, ["onClick"]);
                            return (0, r.jsx)(
                                ee.ZP,
                                ep(
                                    ed(
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
            r = null != t && (0, J.Z)(t);
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
            a = ef(e, ["isUnavailable", "guild", "selectedChannel", "enableStudyGroup"]);
        if (t || null == n)
            return (0, r.jsx)(er.Z, { withBannerPadding: null != n && null != this.getGuildBannerHash() });
        {
            if (n.features.has(ei.oNc.HUB) && !l)
                return (0, r.jsx)("div", {
                    className: ec.hubContainer,
                    children: (0, r.jsx)(Z.Z, {
                        guild: n,
                        channel: null != i ? i : V.ZP.getDefaultChannel(n.id),
                    }),
                });
            let e = n.id === eo._ ? $.j : $.E;
            return (0, r.jsx)(
                e,
                ep(ed({ guild: n }, a), {
                    guildBanner: this.getGuildBannerHash(),
                    hasGuildSubheader: this.state.hasGuildSubheader,
                    onScroll:
                        null != n && (null != this.getGuildBannerHash() || (0, J.Z)(n))
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
            className: ec.container,
            onContextMenu: this.handleContextMenu,
            "aria-label": es.intl.formatToPlainString(es.t.nj5gAQ, {
                guildName: null != (e = null == t ? void 0 : t.name) ? e : "",
            }),
            children: [
                null != t && this.renderGuildHeader(this.state.hasGuildSubheader),
                null != t &&
                    (0, r.jsx)(en.Z, {
                        guild: t,
                        setHasSubheader: (e) => this.setState({ hasGuildSubheader: e }),
                    }),
                this.renderChannelList(),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            eu(this, "historyUnlisten", () => {}),
            eu(this, "guildHeaderRef", i.createRef()),
            eu(this, "guildHeaderDropdownButtonRef", i.createRef()),
            eu(this, "showTimeout", new d.V7()),
            eu(this, "state", {
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
            eu(this, "handleHistoryChange", (e) => {
                null != e.state &&
                    e.state.shouldShowSubscribeTooltip &&
                    this.showTimeout.start(1000, () => this.setState({ shouldShowSubscribeTooltip: !0 }));
            }),
            eu(this, "handleHeaderMenuToggle", (e) => {
                let { isHeaderPopoutOpen: t } = this.props;
                e.stopPropagation(), (0, C.l)(!t), this.closeAllHeaderNotices();
            }),
            eu(this, "handleContextMenu", (e) => {
                let { guild: t } = this.props;
                null != t &&
                    (0, g.jW)(e, async () => {
                        let { default: e } = await n.e("92795").then(n.bind(n, 652171));
                        return (n) => (0, r.jsx)(e, ep(ed({}, n), { guild: t }));
                    });
            }),
            eu(this, "handleHeaderContextMenu", (e) => {
                let { guild: t } = this.props;
                null != t &&
                    (0, g.jW)(e, async () => {
                        let { default: e } = await Promise.all([
                            n.e("36599"),
                            n.e("7654"),
                            n.e("58175"),
                            n.e("76692"),
                            n.e("8271"),
                            n.e("15851"),
                            n.e("51453"),
                            n.e("845"),
                            n.e("58511"),
                            n.e("6850"),
                            n.e("58227"),
                            n.e("44686"),
                            n.e("30378"),
                            n.e("64982"),
                            n.e("87154"),
                            n.e("33213"),
                            n.e("1289"),
                        ]).then(n.bind(n, 545135));
                        return (n) => (0, r.jsx)(e, ep(ed({}, n), { guild: t }));
                    });
            }),
            eu(this, "closeAllHeaderNotices", () => {
                this.handleCloseSubscribeTooltip(),
                    this.handleCloseTemplateDirtyTooltip(),
                    this.handleCloseStudentHubPrivacySettingsTooltip();
            }),
            eu(this, "handleCloseStudentHubPrivacySettingsTooltip", () => {
                var e;
                let t = (0, I.zu)(u.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP),
                    n = null == (e = this.props.guild) ? void 0 : e.features.has(ei.oNc.HUB);
                !t && n && (0, I.Q3)(u.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP, { dismissAction: ea.L.AUTO });
            }),
            eu(this, "handleCloseSubscribeTooltip", () => {
                this.showTimeout.stop(),
                    this.state.shouldShowSubscribeTooltip && this.setState({ shouldShowSubscribeTooltip: !1 });
            }),
            eu(this, "handleCloseTemplateDirtyTooltip", () => {
                let { guild: e, showGuildTemplateDirtyTooltip: t } = this.props;
                null != e && t && P.Z.hideGuildTemplateDirtyTooltip(e.id);
            }),
            eu(this, "renderMenuPopout", async () => {
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
            eu(this, "renderGuildHeaderUpsellPopout", (e) => {
                let {
                    showGuildPowerupProgressBarUpsell: t,
                    showRoleSubscriptionUpsell: n,
                    showDiscoveryLandingPageSettingsUpsell: i,
                    showHubPrivacySettingsTooltip: l,
                    showMediaChannelUpsell: a,
                    showTierTemplatesUpsell: o,
                    shouldRenderGuildPowerupPerkCoachmark: s,
                    guild: c,
                } = this.props;
                if (null == c) return this.renderGuildHeaderDropdownButton(e);
                let d = [];
                return (l && d.push(u.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP),
                t && d.push(u.z.GUILD_HEADER_BOOST_PROGRESS_BAR_UPSELL),
                n && d.push(u.z.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL),
                i && d.push(u.z.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL),
                s && d.push(u.z.GUILD_POWERUP_PERKS_COACHMARK),
                0 === d.length)
                    ? this.renderGuildHeaderDropdownButton(e)
                    : (a && d.push(u.z.MEDIA_CHANNEL_UPSELL),
                      o && d.push(u.z.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL),
                      (0, r.jsx)(et.Z, {
                          contentTypes: d,
                          guild: c,
                          renderGuildHeaderDropdownButton: () => this.renderGuildHeaderDropdownButton(e),
                      }));
            }),
            eu(this, "renderGuildHeaderDropdownButton", (e) =>
                (0, w.jW)({ location: "guild_sidebar" }).entrypoints
                    ? (0, r.jsx)(ee.wD, { open: e })
                    : (0, r.jsx)(m.Z, {
                          open: e,
                          className: a()(ec.dropdownButton, {
                              [ec.dropdownButtonBannerVisible]: this.state.bannerVisible,
                          }),
                          ref: this.guildHeaderDropdownButtonRef,
                      }),
            ),
            eu(this, "setAnimatedValueForBanner", (e) => {
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
            eu(this, "pinBannerOrGuildInfo", (e) => {
                let { scrollTop: t } = e;
                this.setAnimatedValue(t);
            });
    }
}
function eb(e) {
    var t;
    let { guildId: n, hideSelectedChannel: l, selectedChannelId: a } = e,
        o = (0, c.e7)([F.Z], () => F.Z.getGuild(n));
    (0, b.J_)(n);
    let d = (0, S.Z)(n),
        p = (0, c.e7)([B.Z], () => B.Z.getGuildDimensions(n).scrollTo),
        h = (0, c.e7)([Y.Z], () => Y.Z.getChannelId()),
        g = (0, c.e7)([W.Z], () => W.Z.can(ei.Plq.MANAGE_GUILD, o)),
        m = (0, c.e7)([H.Z], () => H.Z.isUnavailable(n)),
        P = (0, c.e7)([K.default], () => K.default.getCurrentUser()),
        { enableStudyGroup: Z } = (0, A.s)(o),
        w = (0, v.ZP)((e) => e.currentlyShown.has(u.z.NAGBAR_NOTICE_CONNECT_PLAYSTATION)),
        [k, M] = i.useState(!w),
        V = (0, _.Z)(n),
        { analyticsLocations: J } = (0, E.ZP)(O.Z.GUILD_HEADER);
    i.useEffect(() => {
        n !== V && M(!w);
    }, [n, V, w]);
    let [$, ee] = (0, v.ZP)(
            (e) => [
                el.XN.some((t) => e.currentlyShown.has(t.dismissibleContentType)),
                e.currentlyShownGroup.has(ea.R.GUILD_HEADER_TOOLTIPS),
            ],
            s.X,
        ),
        et = (0, y.Z)(o),
        en = (0, f.s9z)(f.JQI),
        er = (0, c.e7)([z.Z], () => z.Z.hasLayers()),
        eo = (0, c.e7)([U.Z], () => U.Z.shouldShow(eh)),
        es =
            (0, R.cT)(n, "GuildSidebar") &&
            g &&
            (null == o ? void 0 : o.premiumProgressBarEnabled) === !1 &&
            !X.s.isDisallowPopupsSet(),
        ec = (0, j.Z)(n),
        eu = (null == o ? void 0 : o.features.has(ei.oNc.HUB)) === !0,
        ed = g && (null == o ? void 0 : o.features.has(ei.oNc.DISCOVERABLE)) === !0,
        ep = (0, c.e7)(
            [x.Z, z.Z],
            () => null != o && null != P && g && !z.Z.hasLayers() && x.Z.shouldShowGuildTemplateDirtyTooltip(n),
        ),
        ef = (0, c.e7)([G.Z], () => G.Z.getChannel(a)),
        { isPopoutOpen: eg } = (0, C.y)(),
        eb = null != (t = null == o ? void 0 : o.features.has(ei.oNc.COMMUNITY)) && t,
        e_ = Q.ZP.isNewUser(P),
        eO = k && !e_;
    (0, T.Z)(o);
    let eE = (0, I.Nj)(u.z.PREMIUM_TUTORIAL_SERVER_MENU_TOOLTIP),
        ey = (0, L.Z)(n),
        ev = (0, N.Z)(n),
        eI = (0, c.e7)([Y.Z], () => Y.Z.getChannelId()),
        eS = (0, c.e7)([q.Z], () => q.Z.desyncedVoiceStatesCount),
        eC = (0, D.Z)(n);
    return (0, r.jsx)(em, {
        guildId: n,
        hideSelectedChannel: l,
        guild: o,
        scrollToChannel: p,
        selectedChannelId: l ? null : a,
        selectedChannel: ef,
        selectedVoiceChannelId: h,
        voiceStates: d,
        rtcConnectedChannelId: eI,
        rtcDesyncedVoiceStatesCount: eS,
        isUnavailable: m,
        user: P,
        hasChannelNotice: null != et || $,
        anyLayerOpen: en || er,
        showGuildPowerupProgressBarUpsell: es,
        showDiscoveryLandingPageSettingsUpsell: ed,
        showGuildHeaderTutorial: eo,
        showGuildTemplateDirtyTooltip: ep,
        showRoleSubscriptionUpsell: ec,
        showHubPrivacySettingsTooltip: eu,
        showNewUnreadsBar: eb,
        showMediaChannelUpsell: ey,
        showTierTemplatesUpsell: ev,
        isHeaderPopoutOpen: eg,
        enableStudyGroup: Z,
        isGuildHeaderDismissibleTooltipShown: ee,
        canShowCoachMarkAtBottom: k,
        headerAnalyticsLocations: J,
        isTutorialHighlightDismissed: eE,
        shouldRenderBurstCoachmark: eO,
        shouldRenderGuildPowerupPerkCoachmark: !1 === eC,
    });
}
