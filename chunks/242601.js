n.d(t, { Z: () => eg }), n(388685), n(539854);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    s = n(205120),
    o = n(55160),
    c = n(442837),
    u = n(704215),
    d = n(846519),
    p = n(907862),
    f = n(481060),
    h = n(570140),
    g = n(239091),
    m = n(269128),
    _ = n(711237),
    b = n(110924),
    E = n(100527),
    O = n(906732),
    v = n(536687),
    y = n(211644),
    I = n(266454),
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
    R = n(639777),
    D = n(304445),
    M = n(155409),
    k = n(10401),
    U = n(592125),
    G = n(796974),
    B = n(486472),
    H = n(984933),
    V = n(430824),
    F = n(819640),
    z = n(496675),
    Y = n(878884),
    W = n(19780),
    q = n(594174),
    K = n(74538),
    Q = n(598056),
    J = n(373274),
    X = n(315174),
    $ = n(577718),
    ee = n(156978),
    et = n(591190),
    en = n(981631),
    er = n(652785),
    ei = n(921944),
    el = n(647086),
    ea = n(388032),
    es = n(971606);
function eo(e, t, n) {
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
function ec(e) {
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
                eo(e, t, n[t]);
            });
    }
    return e;
}
function eu(e, t) {
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
function ed(e, t) {
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
let ep = "server-settings",
    ef = {
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
class eh extends i.PureComponent {
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
            (this.historyUnlisten = D.Z.addRouteChangeListener(this.handleHistoryChange));
        let { location: t } = D.Z.getHistory();
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
                      tutorialId: ep,
                      position: "bottom",
                      inlineSpecs: ef,
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
                                title: ea.intl.string(ea.t.Rk2RJk),
                                body: ea.intl.string(ea.t.sFSrFH),
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
                                title: ea.intl.string(ea.t.Q3qa4x),
                                body: ea.intl.string(ea.t.UyHD4O),
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
            h = i || l || a;
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
                              a = ed(i, ["onClick"]);
                          return (0, r.jsx)(
                              X.ZP,
                              eu(
                                  ec(
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
            r = null != t && (0, Q.Z)(t);
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
            a = ed(e, ["isUnavailable", "guild", "selectedChannel", "enableStudyGroup"]);
        if (t || null == n)
            return (0, r.jsx)(et.Z, { withBannerPadding: null != n && null != this.getGuildBannerHash() });
        {
            if (n.features.has(en.GuildFeatures.HUB) && !l)
                return (0, r.jsx)("div", {
                    className: es.hubContainer,
                    children: (0, r.jsx)(Z.Z, {
                        guild: n,
                        channel: null != i ? i : H.ZP.getDefaultChannel(n.id),
                    }),
                });
            let e = n.id === el._ ? J.j : J.E;
            return (0, r.jsx)(
                e,
                eu(ec({ guild: n }, a), {
                    guildBanner: this.getGuildBannerHash(),
                    hasGuildSubheader: this.state.hasGuildSubheader,
                    onScroll:
                        null != n && (null != this.getGuildBannerHash() || (0, Q.Z)(n))
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
            className: es.container,
            onContextMenu: this.handleContextMenu,
            "aria-label": ea.intl.formatToPlainString(ea.t.nj5gAZ, {
                guildName: null != (e = null == t ? void 0 : t.name) ? e : "",
            }),
            children: [
                null != t && this.renderGuildHeader(this.state.hasGuildSubheader),
                null != t &&
                    (0, r.jsx)(ee.Z, {
                        guild: t,
                        setHasSubheader: (e) => this.setState({ hasGuildSubheader: e }),
                    }),
                this.renderChannelList(),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            eo(this, "historyUnlisten", () => {}),
            eo(this, "guildHeaderRef", i.createRef()),
            eo(this, "guildHeaderDropdownButtonRef", i.createRef()),
            eo(this, "showTimeout", new d.V7()),
            eo(this, "state", {
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
            eo(this, "handleHistoryChange", (e) => {
                null != e.state &&
                    e.state.shouldShowSubscribeTooltip &&
                    this.showTimeout.start(1000, () => this.setState({ shouldShowSubscribeTooltip: !0 }));
            }),
            eo(this, "handleHeaderMenuToggle", (e) => {
                let { isHeaderPopoutOpen: t } = this.props;
                e.stopPropagation(), (0, S.l)(!t), this.closeAllHeaderNotices();
            }),
            eo(this, "handleContextMenu", (e) => {
                let { guild: t } = this.props;
                null != t &&
                    (0, g.jW)(e, async () => {
                        let { default: e } = await n.e("78248").then(n.bind(n, 652171));
                        return (n) => (0, r.jsx)(e, eu(ec({}, n), { guild: t }));
                    });
            }),
            eo(this, "handleHeaderContextMenu", (e) => {
                let { guild: t } = this.props;
                null != t &&
                    (0, g.jW)(e, async () => {
                        let { default: e } = await Promise.all([
                            n.e("36599"),
                            n.e("7654"),
                            n.e("76692"),
                            n.e("8271"),
                            n.e("15851"),
                            n.e("51453"),
                            n.e("845"),
                            n.e("86736"),
                            n.e("6850"),
                            n.e("58227"),
                            n.e("44686"),
                            n.e("384"),
                            n.e("87154"),
                            n.e("33213"),
                            n.e("1289"),
                        ]).then(n.bind(n, 545135));
                        return (n) => (0, r.jsx)(e, eu(ec({}, n), { guild: t }));
                    });
            }),
            eo(this, "closeAllHeaderNotices", () => {
                this.handleCloseSubscribeTooltip(),
                    this.handleCloseTemplateDirtyTooltip(),
                    this.handleCloseStudentHubPrivacySettingsTooltip();
            }),
            eo(this, "handleCloseStudentHubPrivacySettingsTooltip", () => {
                var e;
                let t = (0, I.zu)(u.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP),
                    n = null == (e = this.props.guild) ? void 0 : e.features.has(en.GuildFeatures.HUB);
                !t && n && (0, I.Q3)(u.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP, { dismissAction: ei.L.AUTO });
            }),
            eo(this, "handleCloseSubscribeTooltip", () => {
                this.showTimeout.stop(),
                    this.state.shouldShowSubscribeTooltip && this.setState({ shouldShowSubscribeTooltip: !1 });
            }),
            eo(this, "handleCloseTemplateDirtyTooltip", () => {
                let { guild: e, showGuildTemplateDirtyTooltip: t } = this.props;
                null != e && t && P.Z.hideGuildTemplateDirtyTooltip(e.id);
            }),
            eo(this, "renderMenuPopout", async () => {
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
            eo(this, "renderGuildHeaderUpsellPopout", (e) => {
                let {
                    showRoleSubscriptionUpsell: t,
                    showDiscoveryLandingPageSettingsUpsell: n,
                    showHubPrivacySettingsTooltip: i,
                    showMediaChannelUpsell: l,
                    showTierTemplatesUpsell: a,
                    shouldRenderGuildPowerupPerkCoachmark: s,
                    guild: o,
                } = this.props;
                if (null == o) return this.renderGuildHeaderDropdownButton(e);
                let c = [];
                return (i && c.push(u.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP),
                t && c.push(u.z.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL),
                n && c.push(u.z.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL),
                s && c.push(u.z.GUILD_POWERUP_PERKS_COACHMARK),
                0 === c.length)
                    ? this.renderGuildHeaderDropdownButton(e)
                    : (l && c.push(u.z.MEDIA_CHANNEL_UPSELL),
                      a && c.push(u.z.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL),
                      (0, r.jsx)($.Z, {
                          contentTypes: c,
                          guild: o,
                          renderGuildHeaderDropdownButton: () => this.renderGuildHeaderDropdownButton(e),
                      }));
            }),
            eo(this, "renderGuildHeaderDropdownButton", (e) =>
                (0, w.LK)({ location: "guild_sidebar" }).isGuildEntrypointEnabled
                    ? (0, r.jsx)(X.wD, { open: e })
                    : (0, r.jsx)(m.Z, {
                          open: e,
                          className: a()(es.dropdownButton, {
                              [es.dropdownButtonBannerVisible]: this.state.bannerVisible,
                          }),
                          ref: this.guildHeaderDropdownButtonRef,
                      }),
            ),
            eo(this, "setAnimatedValueForBanner", (e) => {
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
            eo(this, "pinBannerOrGuildInfo", (e) => {
                let { scrollTop: t } = e;
                this.setAnimatedValue(t);
            });
    }
}
function eg(e) {
    var t;
    let { guildId: n, hideSelectedChannel: l, selectedChannelId: a } = e,
        s = (0, c.e7)([V.Z], () => V.Z.getGuild(n));
    (0, _.J_)(n);
    let d = (0, C.Z)(n),
        p = (0, c.e7)([G.Z], () => G.Z.getGuildDimensions(n).scrollTo),
        h = (0, c.e7)([W.Z], () => W.Z.getChannelId()),
        g = (0, c.e7)([z.Z], () => z.Z.can(en.Plq.MANAGE_GUILD, s)),
        m = (0, c.e7)([B.Z], () => B.Z.isUnavailable(n)),
        P = (0, c.e7)([q.default], () => q.default.getCurrentUser()),
        { enableStudyGroup: Z } = (0, A.s)(s),
        w = (0, y.ZP)((e) => e.currentlyShown.has(u.z.NAGBAR_NOTICE_CONNECT_PLAYSTATION)),
        [D, M] = i.useState(!w),
        H = (0, b.Z)(n),
        { analyticsLocations: Q } = (0, O.ZP)(E.Z.GUILD_HEADER);
    i.useEffect(() => {
        n !== H && M(!w);
    }, [n, H, w]);
    let [J, X] = (0, y.ZP)(
            (e) => [
                er.XN.some((t) => e.currentlyShown.has(t.dismissibleContentType)),
                e.currentlyShownGroup.has(ei.R.GUILD_HEADER_TOOLTIPS),
            ],
            o.X,
        ),
        $ = (0, v.Z)(s),
        ee = (0, f.s9z)(f.JQI),
        et = (0, c.e7)([F.Z], () => F.Z.hasLayers()),
        el = (0, c.e7)([k.Z], () => k.Z.shouldShow(ep)),
        ea = (0, j.Z)(n),
        es = (null == s ? void 0 : s.features.has(en.GuildFeatures.HUB)) === !0,
        eo = g && (null == s ? void 0 : s.features.has(en.GuildFeatures.DISCOVERABLE)) === !0,
        ec = (0, c.e7)(
            [x.Z, F.Z],
            () => null != s && null != P && g && !F.Z.hasLayers() && x.Z.shouldShowGuildTemplateDirtyTooltip(n),
        ),
        eu = (0, c.e7)([U.Z], () => U.Z.getChannel(a)),
        { isPopoutOpen: ed } = (0, S.y)(),
        ef = null != (t = null == s ? void 0 : s.features.has(en.GuildFeatures.COMMUNITY)) && t,
        eg = K.ZP.isNewUser(P),
        em = D && !eg;
    (0, T.Z)(s);
    let e_ = (0, I.Nj)(u.z.PREMIUM_TUTORIAL_SERVER_MENU_TOOLTIP),
        eb = (0, L.Z)(n),
        eE = (0, N.Z)(n),
        eO = (0, c.e7)([W.Z], () => W.Z.getChannelId()),
        ev = (0, c.e7)([Y.Z], () => Y.Z.desyncedVoiceStatesCount),
        ey = (0, R.Z)(n);
    return (0, r.jsx)(eh, {
        guildId: n,
        hideSelectedChannel: l,
        guild: s,
        scrollToChannel: p,
        selectedChannelId: l ? null : a,
        selectedChannel: eu,
        selectedVoiceChannelId: h,
        voiceStates: d,
        rtcConnectedChannelId: eO,
        rtcDesyncedVoiceStatesCount: ev,
        isUnavailable: m,
        user: P,
        hasChannelNotice: null != $ || J,
        anyLayerOpen: ee || et,
        showDiscoveryLandingPageSettingsUpsell: eo,
        showGuildHeaderTutorial: el,
        showGuildTemplateDirtyTooltip: ec,
        showRoleSubscriptionUpsell: ea,
        showHubPrivacySettingsTooltip: es,
        showNewUnreadsBar: ef,
        showMediaChannelUpsell: eb,
        showTierTemplatesUpsell: eE,
        isHeaderPopoutOpen: ed,
        enableStudyGroup: Z,
        isGuildHeaderDismissibleTooltipShown: X,
        canShowCoachMarkAtBottom: D,
        headerAnalyticsLocations: Q,
        isTutorialHighlightDismissed: e_,
        shouldRenderBurstCoachmark: em,
        shouldRenderGuildPowerupPerkCoachmark: !1 === ey,
    });
}
