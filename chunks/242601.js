n.d(t, { Z: () => e_ }), n(388685), n(539854);
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(13941),
    o = n(574583),
    c = n(442837),
    u = n(704215),
    d = n(846519),
    p = n(907862),
    f = n(481060),
    m = n(570140),
    h = n(239091),
    g = n(269128),
    _ = n(711237),
    b = n(110924),
    E = n(100527),
    O = n(906732),
    I = n(785203),
    y = n(211644),
    v = n(266454),
    C = n(492162),
    S = n(43740),
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
    M = n(304445),
    k = n(155409),
    U = n(10401),
    G = n(592125),
    B = n(796974),
    H = n(486472),
    V = n(984933),
    F = n(430824),
    z = n(819640),
    Y = n(496675),
    W = n(878884),
    q = n(19780),
    K = n(594174),
    Q = n(74538),
    J = n(374023),
    X = n(598056),
    $ = n(373274),
    ee = n(315174),
    et = n(577718),
    en = n(156978),
    er = n(591190),
    ei = n(981631),
    el = n(652785),
    ea = n(921944),
    es = n(647086),
    eo = n(388032),
    ec = n(500553);
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
let em = "server-settings",
    eh = {
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
class eg extends i.PureComponent {
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
            m.Z.subscribe("LAYER_PUSH", this.closeAllHeaderNotices),
            (this.historyUnlisten = M.Z.addRouteChangeListener(this.handleHistoryChange));
        let { location: t } = M.Z.getHistory();
        (null == (e = t.state) ? void 0 : e.shouldShowSubscribeTooltip) &&
            this.showTimeout.start(1000, () => this.setState({ shouldShowSubscribeTooltip: !0 }));
    }
    componentWillUnmount() {
        this.showTimeout.stop(),
            this.state.controller.dispose(),
            this.historyUnlisten(),
            m.Z.unsubscribe("LAYER_PUSH", this.closeAllHeaderNotices);
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
                  children: (0, r.jsx)(k.Z, {
                      tutorialId: em,
                      position: "bottom",
                      inlineSpecs: eh,
                      children: this.renderGuildHeaderDropdownButton(e),
                  }),
              })
            : t
              ? (0, r.jsxs)(r.Fragment, {
                    children: [
                        this.renderGuildHeaderDropdownButton(e),
                        !e &&
                            !i &&
                            (0, r.jsx)(p.J2, {
                                targetElementRef: this.guildHeaderDropdownButtonRef,
                                title: eo.intl.string(eo.t.Rk2RJk),
                                body: eo.intl.string(eo.t.sFSrFH),
                                onRequestClose: this.handleCloseTemplateDirtyTooltip,
                                position: "bottom",
                                caretConfig: { align: "center" },
                            }),
                    ],
                })
              : i || e
                ? this.renderGuildHeaderDropdownButton(e)
                : l
                  ? (0, r.jsxs)(r.Fragment, {
                        children: [
                            this.renderGuildHeaderDropdownButton(e),
                            (0, r.jsx)(p.J2, {
                                targetElementRef: this.guildHeaderDropdownButtonRef,
                                title: eo.intl.string(eo.t.Q3qa4x),
                                body: eo.intl.string(eo.t.UyHD4O),
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
                headerAnalyticsLocations: s,
            } = this.props,
            {
                controller: o,
                renderBanner: c,
                bannerVisible: u,
                bannerVisibleHeight: d,
                communityInfoVisible: p,
            } = this.state,
            m = i || l || a;
        return null == t
            ? null
            : (0, r.jsx)(O.Gt, {
                  value: s,
                  children: (0, r.jsx)(f.KeG, {
                      targetElementRef: this.guildHeaderRef,
                      renderPopout: this.renderMenuPopout,
                      position: "bottom",
                      align: "center",
                      animation: f.yRy.Animation.SCALE,
                      shouldShow: n,
                      onRequestClose: () => {
                          (0, S.l)(!1);
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
                                          controller: o,
                                          renderBanner: c,
                                          hasSubheader: e,
                                          bannerVisible: u,
                                          communityInfoVisible: p,
                                          guildBanner: this.getGuildBannerHash(),
                                          onClick: this.handleHeaderMenuToggle,
                                          onContextMenu: this.handleHeaderContextMenu,
                                          disableBannerAnimation: m,
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
            r = null != t && (0, X.Z)(t);
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
            if (n.features.has(ei.GuildFeatures.HUB) && !l)
                return (0, r.jsx)("div", {
                    className: ec.hubContainer,
                    children: (0, r.jsx)(Z.Z, {
                        guild: n,
                        channel: null != i ? i : V.ZP.getDefaultChannel(n.id),
                    }),
                });
            let e = n.id === es._ ? $.j : $.E;
            return (0, r.jsx)(
                e,
                ep(ed({ guild: n }, a), {
                    guildBanner: this.getGuildBannerHash(),
                    hasGuildSubheader: this.state.hasGuildSubheader,
                    onScroll:
                        null != n && (null != this.getGuildBannerHash() || (0, X.Z)(n))
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
            "aria-label": eo.intl.formatToPlainString(eo.t.nj5gAZ, {
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
                controller: new s.Controller({
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
                e.stopPropagation(), (0, S.l)(!t), this.closeAllHeaderNotices();
            }),
            eu(this, "handleContextMenu", (e) => {
                let { guild: t } = this.props;
                null != t &&
                    (0, h.jW)(e, async () => {
                        let { default: e } = await n.e("92795").then(n.bind(n, 652171));
                        return (n) => (0, r.jsx)(e, ep(ed({}, n), { guild: t }));
                    });
            }),
            eu(this, "handleHeaderContextMenu", (e) => {
                let { guild: t } = this.props;
                null != t &&
                    (0, h.jW)(e, async () => {
                        let { default: e } = await Promise.all([
                            n.e("36599"),
                            n.e("76692"),
                            n.e("8271"),
                            n.e("15851"),
                            n.e("51453"),
                            n.e("7654"),
                            n.e("845"),
                            n.e("99063"),
                            n.e("6850"),
                            n.e("58227"),
                            n.e("44686"),
                            n.e("30378"),
                            n.e("29679"),
                            n.e("87154"),
                            n.e("33213"),
                            n.e("8417"),
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
                let t = (0, v.zu)(u.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP),
                    n = null == (e = this.props.guild) ? void 0 : e.features.has(ei.GuildFeatures.HUB);
                !t && n && (0, v.Q3)(u.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP, { dismissAction: ea.L.AUTO });
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
                let { default: e } = await Promise.all([n.e("87154"), n.e("41794")]).then(n.bind(n, 859432));
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
                    showTierTemplatesUpsell: s,
                    shouldRenderGuildPowerupPerkCoachmark: o,
                    guild: c,
                } = this.props;
                if (null == c) return this.renderGuildHeaderDropdownButton(e);
                let d = [];
                return (l && d.push(u.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP),
                t && d.push(u.z.GUILD_HEADER_BOOST_PROGRESS_BAR_UPSELL),
                n && d.push(u.z.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL),
                i && d.push(u.z.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL),
                o && d.push(u.z.GUILD_POWERUP_PERKS_COACHMARK),
                0 === d.length)
                    ? this.renderGuildHeaderDropdownButton(e)
                    : (a && d.push(u.z.MEDIA_CHANNEL_UPSELL),
                      s && d.push(u.z.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL),
                      (0, r.jsx)(et.Z, {
                          contentTypes: d,
                          guild: c,
                          renderGuildHeaderDropdownButton: () => this.renderGuildHeaderDropdownButton(e),
                      }));
            }),
            eu(this, "renderGuildHeaderDropdownButton", (e) =>
                (0, w.LK)({ location: "guild_sidebar" }).isGuildEntrypointEnabled
                    ? (0, r.jsx)(ee.wD, { open: e })
                    : (0, r.jsx)(g.Z, {
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
function e_(e) {
    var t;
    let { guildId: n, hideSelectedChannel: l, selectedChannelId: a } = e,
        s = (0, c.e7)([F.Z], () => F.Z.getGuild(n));
    (0, _.J_)(n);
    let d = (0, C.Z)(n),
        p = (0, c.e7)([B.Z], () => B.Z.getGuildDimensions(n).scrollTo),
        m = (0, c.e7)([q.Z], () => q.Z.getChannelId()),
        h = (0, c.e7)([Y.Z], () => Y.Z.can(ei.Plq.MANAGE_GUILD, s)),
        g = (0, c.e7)([H.Z], () => H.Z.isUnavailable(n)),
        P = (0, c.e7)([K.default], () => K.default.getCurrentUser()),
        { enableStudyGroup: Z } = (0, A.s)(s),
        w = (0, y.ZP)((e) => e.currentlyShown.has(u.z.NAGBAR_NOTICE_CONNECT_PLAYSTATION)),
        [M, k] = i.useState(!w),
        V = (0, b.Z)(n),
        { analyticsLocations: X } = (0, O.ZP)(E.Z.GUILD_HEADER);
    i.useEffect(() => {
        n !== V && k(!w);
    }, [n, V, w]);
    let [$, ee] = (0, y.ZP)(
            (e) => [
                el.XN.some((t) => e.currentlyShown.has(t.dismissibleContentType)),
                e.currentlyShownGroup.has(ea.R.GUILD_HEADER_TOOLTIPS),
            ],
            o.X,
        ),
        et = (0, I.Z)(s),
        en = (0, f.s9z)(f.JQI),
        er = (0, c.e7)([z.Z], () => z.Z.hasLayers()),
        es = (0, c.e7)([U.Z], () => U.Z.shouldShow(em)),
        eo =
            (0, R.cT)(n, "GuildSidebar") &&
            h &&
            (null == s ? void 0 : s.premiumProgressBarEnabled) === !1 &&
            !J.s.isDisallowPopupsSet(),
        ec = (0, j.Z)(n),
        eu = (null == s ? void 0 : s.features.has(ei.GuildFeatures.HUB)) === !0,
        ed = h && (null == s ? void 0 : s.features.has(ei.GuildFeatures.DISCOVERABLE)) === !0,
        ep = (0, c.e7)(
            [x.Z, z.Z],
            () => null != s && null != P && h && !z.Z.hasLayers() && x.Z.shouldShowGuildTemplateDirtyTooltip(n),
        ),
        ef = (0, c.e7)([G.Z], () => G.Z.getChannel(a)),
        { isPopoutOpen: eh } = (0, S.y)(),
        e_ = null != (t = null == s ? void 0 : s.features.has(ei.GuildFeatures.COMMUNITY)) && t,
        eb = Q.ZP.isNewUser(P),
        eE = M && !eb;
    (0, T.Z)(s);
    let eO = (0, v.Nj)(u.z.PREMIUM_TUTORIAL_SERVER_MENU_TOOLTIP),
        eI = (0, L.Z)(n),
        ey = (0, N.Z)(n),
        ev = (0, c.e7)([q.Z], () => q.Z.getChannelId()),
        eC = (0, c.e7)([W.Z], () => W.Z.desyncedVoiceStatesCount),
        eS = (0, D.Z)(n);
    return (0, r.jsx)(eg, {
        guildId: n,
        hideSelectedChannel: l,
        guild: s,
        scrollToChannel: p,
        selectedChannelId: l ? null : a,
        selectedChannel: ef,
        selectedVoiceChannelId: m,
        voiceStates: d,
        rtcConnectedChannelId: ev,
        rtcDesyncedVoiceStatesCount: eC,
        isUnavailable: g,
        user: P,
        hasChannelNotice: null != et || $,
        anyLayerOpen: en || er,
        showGuildPowerupProgressBarUpsell: eo,
        showDiscoveryLandingPageSettingsUpsell: ed,
        showGuildHeaderTutorial: es,
        showGuildTemplateDirtyTooltip: ep,
        showRoleSubscriptionUpsell: ec,
        showHubPrivacySettingsTooltip: eu,
        showNewUnreadsBar: e_,
        showMediaChannelUpsell: eI,
        showTierTemplatesUpsell: ey,
        isHeaderPopoutOpen: eh,
        enableStudyGroup: Z,
        isGuildHeaderDismissibleTooltipShown: ee,
        canShowCoachMarkAtBottom: M,
        headerAnalyticsLocations: X,
        isTutorialHighlightDismissed: eO,
        shouldRenderBurstCoachmark: eE,
        shouldRenderGuildPowerupPerkCoachmark: !1 === eS,
    });
}
