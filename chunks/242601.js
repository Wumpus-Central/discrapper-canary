n.d(t, { Z: () => e_ }), n(388685), n(539854);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(261616),
    s = n(524825),
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
    y = n(211242),
    v = n(785203),
    I = n(211644),
    C = n(266454),
    S = n(492162),
    T = n(43740),
    N = n(596557),
    j = n(817520),
    P = n(999309),
    x = n(408987),
    A = n(130734),
    Z = n(499137),
    w = n(258871),
    L = n(340541),
    R = n(972264),
    D = n(691698),
    k = n(639777),
    M = n(304445),
    U = n(155409),
    G = n(10401),
    B = n(592125),
    V = n(796974),
    H = n(486472),
    F = n(984933),
    z = n(430824),
    W = n(819640),
    Y = n(496675),
    K = n(878884),
    q = n(19780),
    Q = n(594174),
    X = n(74538),
    J = n(374023),
    $ = n(598056),
    ee = n(373274),
    et = n(315174),
    en = n(577718),
    er = n(156978),
    ei = n(591190),
    el = n(981631),
    ea = n(652785),
    eo = n(921944),
    es = n(647086),
    ec = n(388032),
    eu = n(971606);
function ed(e, t, n) {
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
function ep(e) {
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
                ed(e, t, n[t]);
            });
    }
    return e;
}
function ef(e, t) {
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
function eh(e, t) {
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
let eg = "server-settings",
    em = {
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
class eb extends i.PureComponent {
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
            (this.historyUnlisten = M.Z.addRouteChangeListener(this.handleHistoryChange));
        let { location: t } = M.Z.getHistory();
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
                  children: (0, r.jsx)(U.Z, {
                      tutorialId: eg,
                      position: "bottom",
                      inlineSpecs: em,
                      children: this.renderGuildHeaderDropdownButton(e),
                  }),
              })
            : t
              ? (0, r.jsx)(f.ua7, {
                    forceOpen: !0,
                    color: f.FGA.BRAND,
                    position: "bottom",
                    shouldShow: !e && !i,
                    text: ec.intl.string(ec.t.sFSrFB),
                    "aria-label": ec.intl.string(ec.t.sFSrFB),
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
                                title: ec.intl.string(ec.t["Q3qa4+"]),
                                body: ec.intl.string(ec.t.UyHD4O),
                                onRequestClose: this.handleCloseSubscribeTooltip,
                                position: "bottom",
                                caretConfig: {
                                    position: "top",
                                    align: "center",
                                },
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
            : (0, L.jW)({ location: "guild_sidebar" }).entrypoints
              ? (0, r.jsx)(E.Gt, {
                    value: o,
                    children: (0, r.jsx)(et.ZP, {
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
                            (0, T.l)(!1);
                        },
                        spacing: 4,
                        children: (i) => {
                            var { onClick: l } = i,
                                a = eh(i, ["onClick"]);
                            return (0, r.jsx)(
                                et.ZP,
                                ef(
                                    ep(
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
            r = null != t && (0, $.Z)(t);
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
            a = eh(e, ["isUnavailable", "guild", "selectedChannel", "enableStudyGroup"]);
        if (t || null == n)
            return (0, r.jsx)(ei.Z, { withBannerPadding: null != n && null != this.getGuildBannerHash() });
        {
            if (n.features.has(el.oNc.HUB) && !l)
                return (0, r.jsx)("div", {
                    className: eu.hubContainer,
                    children: (0, r.jsx)(w.Z, {
                        guild: n,
                        channel: null != i ? i : F.ZP.getDefaultChannel(n.id),
                    }),
                });
            let e = n.id === es._ ? ee.j : ee.E;
            return (0, r.jsx)(
                e,
                ef(ep({ guild: n }, a), {
                    guildBanner: this.getGuildBannerHash(),
                    hasGuildSubheader: this.state.hasGuildSubheader,
                    onScroll:
                        null != n && (null != this.getGuildBannerHash() || (0, $.Z)(n))
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
            className: eu.container,
            onContextMenu: this.handleContextMenu,
            "aria-label": ec.intl.formatToPlainString(ec.t.nj5gAQ, {
                guildName: null != (e = null == t ? void 0 : t.name) ? e : "",
            }),
            children: [
                null != t && this.renderGuildHeader(this.state.hasGuildSubheader),
                null != t &&
                    (0, r.jsx)(er.Z, {
                        guild: t,
                        setHasSubheader: (e) => this.setState({ hasGuildSubheader: e }),
                    }),
                this.renderChannelList(),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            ed(this, "historyUnlisten", () => {}),
            ed(this, "guildHeaderRef", i.createRef()),
            ed(this, "guildHeaderDropdownButtonRef", i.createRef()),
            ed(this, "showTimeout", new d.V7()),
            ed(this, "state", {
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
            ed(this, "handleHistoryChange", (e) => {
                null != e.state &&
                    e.state.shouldShowSubscribeTooltip &&
                    this.showTimeout.start(1000, () => this.setState({ shouldShowSubscribeTooltip: !0 }));
            }),
            ed(this, "handleHeaderMenuToggle", (e) => {
                let { isHeaderPopoutOpen: t } = this.props;
                e.stopPropagation(), (0, T.l)(!t), this.closeAllHeaderNotices();
            }),
            ed(this, "handleContextMenu", (e) => {
                let { guild: t } = this.props;
                null != t &&
                    (0, g.jW)(e, async () => {
                        let { default: e } = await n.e("92795").then(n.bind(n, 652171));
                        return (n) => (0, r.jsx)(e, ef(ep({}, n), { guild: t }));
                    });
            }),
            ed(this, "handleHeaderContextMenu", (e) => {
                let { guild: t } = this.props;
                null != t &&
                    (0, g.jW)(e, async () => {
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
                            n.e("90746"),
                            n.e("88479"),
                            n.e("87154"),
                            n.e("33213"),
                            n.e("1289"),
                        ]).then(n.bind(n, 545135));
                        return (n) => (0, r.jsx)(e, ef(ep({}, n), { guild: t }));
                    });
            }),
            ed(this, "closeAllHeaderNotices", () => {
                this.handleCloseSubscribeTooltip(),
                    this.handleCloseTemplateDirtyTooltip(),
                    this.handleCloseStudentHubPrivacySettingsTooltip();
            }),
            ed(this, "handleCloseStudentHubPrivacySettingsTooltip", () => {
                var e;
                let t = (0, C.zu)(u.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP),
                    n = null == (e = this.props.guild) ? void 0 : e.features.has(el.oNc.HUB);
                !t && n && (0, C.Q3)(u.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP, { dismissAction: eo.L.AUTO });
            }),
            ed(this, "handleCloseSubscribeTooltip", () => {
                this.showTimeout.stop(),
                    this.state.shouldShowSubscribeTooltip && this.setState({ shouldShowSubscribeTooltip: !1 });
            }),
            ed(this, "handleCloseTemplateDirtyTooltip", () => {
                let { guild: e, showGuildTemplateDirtyTooltip: t } = this.props;
                null != e && t && x.Z.hideGuildTemplateDirtyTooltip(e.id);
            }),
            ed(this, "renderMenuPopout", async () => {
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
            ed(this, "renderGuildHeaderUpsellPopout", (e) => {
                let {
                    showGuildPowerupProgressBarUpsell: t,
                    showRoleSubscriptionUpsell: n,
                    showInviteSplashUpsell: i,
                    showDiscoveryLandingPageSettingsUpsell: l,
                    showHubPrivacySettingsTooltip: a,
                    showMediaChannelUpsell: o,
                    showTierTemplatesUpsell: s,
                    shouldRenderGuildPowerupPerkCoachmark: c,
                    guild: d,
                } = this.props;
                if (null == d) return this.renderGuildHeaderDropdownButton(e);
                let p = [];
                return (a && p.push(u.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP),
                t && p.push(u.z.GUILD_HEADER_BOOST_PROGRESS_BAR_UPSELL),
                n && p.push(u.z.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL),
                i && p.push(u.z.GUILD_HEADER_INVITE_SPLASH),
                l && p.push(u.z.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL),
                c && p.push(u.z.GUILD_POWERUP_PERKS_COACHMARK),
                0 === p.length)
                    ? this.renderGuildHeaderDropdownButton(e)
                    : (o && p.push(u.z.MEDIA_CHANNEL_UPSELL),
                      s && p.push(u.z.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL),
                      (0, r.jsx)(en.Z, {
                          contentTypes: p,
                          guild: d,
                          renderGuildHeaderDropdownButton: () => this.renderGuildHeaderDropdownButton(e),
                      }));
            }),
            ed(this, "renderGuildHeaderDropdownButton", (e) =>
                (0, L.jW)({ location: "guild_sidebar" }).entrypoints
                    ? (0, r.jsx)(et.wD, { open: e })
                    : (0, r.jsx)(m.Z, {
                          open: e,
                          className: a()(eu.dropdownButton, {
                              [eu.dropdownButtonBannerVisible]: this.state.bannerVisible,
                          }),
                          ref: this.guildHeaderDropdownButtonRef,
                      }),
            ),
            ed(this, "setAnimatedValueForBanner", (e) => {
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
            ed(this, "pinBannerOrGuildInfo", (e) => {
                let { scrollTop: t } = e;
                this.setAnimatedValue(t);
            });
    }
}
function e_(e) {
    var t;
    let { guildId: n, hideSelectedChannel: l, selectedChannelId: a } = e,
        o = (0, c.e7)([z.Z], () => z.Z.getGuild(n));
    (0, b.J_)(n);
    let d = (0, S.Z)(n),
        p = (0, c.e7)([V.Z], () => V.Z.getGuildDimensions(n).scrollTo),
        h = (0, c.e7)([q.Z], () => q.Z.getChannelId()),
        g = (0, c.e7)([Y.Z], () => Y.Z.can(el.Plq.MANAGE_GUILD, o)),
        m = (0, c.e7)([H.Z], () => H.Z.isUnavailable(n)),
        x = (0, c.e7)([Q.default], () => Q.default.getCurrentUser()),
        { enableStudyGroup: w } = (0, Z.s)(o),
        L = (0, I.ZP)((e) => e.currentlyShown.has(u.z.NAGBAR_NOTICE_CONNECT_PLAYSTATION)),
        [M, U] = i.useState(!L),
        F = (0, _.Z)(n),
        { analyticsLocations: $ } = (0, E.ZP)(O.Z.GUILD_HEADER);
    i.useEffect(() => {
        n !== F && U(!L);
    }, [n, F, L]);
    let [ee, et] = (0, I.ZP)(
            (e) => [
                ea.XN.some((t) => e.currentlyShown.has(t.dismissibleContentType)),
                e.currentlyShownGroup.has(eo.R.GUILD_HEADER_TOOLTIPS),
            ],
            s.X,
        ),
        en = (0, v.Z)(o),
        er = (0, f.s9z)(f.JQI),
        ei = (0, c.e7)([W.Z], () => W.Z.hasLayers()),
        es = (0, c.e7)([G.Z], () => G.Z.shouldShow(eg)),
        ec =
            (0, D.cT)(n, "GuildSidebar") &&
            g &&
            (null == o ? void 0 : o.premiumProgressBarEnabled) === !1 &&
            !J.s.isDisallowPopupsSet(),
        eu = (0, P.Z)(n),
        ed = (null == o ? void 0 : o.features.has(el.oNc.HUB)) === !0,
        ep = g && (null == o ? void 0 : o.features.has(el.oNc.DISCOVERABLE)) === !0,
        ef = (0, y.Q)(),
        eh = (g || (null == o ? void 0 : o.premiumTier) === el.Eu4.NONE) && !J.s.isDisallowPopupsSet() && !ef,
        em = (0, c.e7)(
            [A.Z, W.Z],
            () => null != o && null != x && g && !W.Z.hasLayers() && A.Z.shouldShowGuildTemplateDirtyTooltip(n),
        ),
        e_ = (0, c.e7)([B.Z], () => B.Z.getChannel(a)),
        { isPopoutOpen: eO } = (0, T.y)(),
        eE = null != (t = null == o ? void 0 : o.features.has(el.oNc.COMMUNITY)) && t,
        ey = X.ZP.isNewUser(x),
        ev = M && !ey;
    (0, N.Z)(o);
    let eI = (0, C.Nj)(u.z.PREMIUM_TUTORIAL_SERVER_MENU_TOOLTIP),
        eC = (0, R.Z)(n),
        eS = (0, j.Z)(n),
        eT = (0, c.e7)([q.Z], () => q.Z.getChannelId()),
        eN = (0, c.e7)([K.Z], () => K.Z.desyncedVoiceStatesCount),
        ej = (0, k.Z)(n);
    return (0, r.jsx)(eb, {
        guildId: n,
        hideSelectedChannel: l,
        guild: o,
        scrollToChannel: p,
        selectedChannelId: l ? null : a,
        selectedChannel: e_,
        selectedVoiceChannelId: h,
        voiceStates: d,
        rtcConnectedChannelId: eT,
        rtcDesyncedVoiceStatesCount: eN,
        isUnavailable: m,
        user: x,
        hasChannelNotice: null != en || ee,
        anyLayerOpen: er || ei,
        showGuildPowerupProgressBarUpsell: ec,
        showInviteSplashUpsell: eh,
        showDiscoveryLandingPageSettingsUpsell: ep,
        showGuildHeaderTutorial: es,
        showGuildTemplateDirtyTooltip: em,
        showRoleSubscriptionUpsell: eu,
        showHubPrivacySettingsTooltip: ed,
        showNewUnreadsBar: eE,
        showMediaChannelUpsell: eC,
        showTierTemplatesUpsell: eS,
        isHeaderPopoutOpen: eO,
        enableStudyGroup: w,
        isGuildHeaderDismissibleTooltipShown: et,
        canShowCoachMarkAtBottom: M,
        headerAnalyticsLocations: $,
        isTutorialHighlightDismissed: eI,
        shouldRenderBurstCoachmark: ev,
        shouldRenderGuildPowerupPerkCoachmark: !1 === ej,
    });
}
