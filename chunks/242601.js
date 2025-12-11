n.d(t, { Z: () => ed }), n(388685), n(539854);
var r = n(54381),
    i = n(473749),
    l = n(467721),
    a = n(55160),
    s = n(442837),
    o = n(704215),
    c = n(846519),
    u = n(907862),
    d = n(481060),
    p = n(570140),
    f = n(239091),
    g = n(711237),
    h = n(110924),
    m = n(100527),
    b = n(906732),
    _ = n(536687),
    E = n(211644),
    O = n(266454),
    v = n(492162),
    y = n(43740),
    I = n(596557),
    C = n(817520),
    S = n(999309),
    T = n(408987),
    N = n(130734),
    j = n(499137),
    P = n(258871),
    x = n(972264),
    A = n(639777),
    Z = n(304445),
    w = n(155409),
    L = n(10401),
    R = n(592125),
    D = n(796974),
    M = n(486472),
    k = n(984933),
    U = n(430824),
    G = n(819640),
    B = n(496675),
    H = n(878884),
    V = n(19780),
    F = n(594174),
    z = n(74538),
    Y = n(598056),
    W = n(373274),
    q = n(315174),
    K = n(577718),
    Q = n(156978),
    J = n(591190),
    X = n(981631),
    $ = n(652785),
    ee = n(921944),
    et = n(647086),
    en = n(388032),
    er = n(289033);
function ei(e, t, n) {
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
function el(e) {
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
                ei(e, t, n[t]);
            });
    }
    return e;
}
function ea(e, t) {
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
function es(e, t) {
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
let eo = "server-settings",
    ec = {
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
class eu extends i.PureComponent {
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
            p.Z.subscribe("LAYER_PUSH", this.closeAllHeaderNotices),
            (this.historyUnlisten = Z.Z.addRouteChangeListener(this.handleHistoryChange));
        let { location: t } = Z.Z.getHistory();
        (null == (e = t.state) ? void 0 : e.shouldShowSubscribeTooltip) &&
            this.showTimeout.start(1000, () => this.setState({ shouldShowSubscribeTooltip: !0 }));
    }
    componentWillUnmount() {
        this.showTimeout.stop(),
            this.state.controller.dispose(),
            this.historyUnlisten(),
            p.Z.unsubscribe("LAYER_PUSH", this.closeAllHeaderNotices);
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
                  children: (0, r.jsx)(w.Z, {
                      tutorialId: eo,
                      position: "bottom",
                      inlineSpecs: ec,
                      children: this.renderGuildHeaderDropdownButton(e),
                  }),
              })
            : t
              ? (0, r.jsxs)(r.Fragment, {
                    children: [
                        this.renderGuildHeaderDropdownButton(e),
                        !e &&
                            !i &&
                            (0, r.jsx)(u.J2, {
                                targetElementRef: this.guildHeaderDropdownButtonRef,
                                title: en.intl.string(en.t.Rk2RJk),
                                body: en.intl.string(en.t.sFSrFH),
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
                            (0, r.jsx)(u.J2, {
                                targetElementRef: this.guildHeaderDropdownButtonRef,
                                title: en.intl.string(en.t.Q3qa4x),
                                body: en.intl.string(en.t.UyHD4O),
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
                bannerVisibleHeight: p,
                communityInfoVisible: f,
            } = this.state,
            g = i || l || a;
        return null == t
            ? null
            : (0, r.jsx)(b.Gt, {
                  value: s,
                  children: (0, r.jsx)(d.KeG, {
                      targetElementRef: this.guildHeaderRef,
                      renderPopout: this.renderMenuPopout,
                      position: "bottom",
                      align: "center",
                      animation: d.yRy.Animation.SCALE,
                      shouldShow: n,
                      onRequestClose: () => {
                          (0, y.l)(!1);
                      },
                      spacing: 4,
                      children: (i) => {
                          var { onClick: l } = i,
                              a = es(i, ["onClick"]);
                          return (0, r.jsx)(
                              q.ZP,
                              ea(
                                  el(
                                      {
                                          ref: this.guildHeaderRef,
                                          guild: t,
                                          controller: o,
                                          renderBanner: c,
                                          hasSubheader: e,
                                          bannerVisible: u,
                                          communityInfoVisible: f,
                                          guildBanner: this.getGuildBannerHash(),
                                          onClick: this.handleHeaderMenuToggle,
                                          onContextMenu: this.handleHeaderContextMenu,
                                          disableBannerAnimation: g,
                                          animationOverlayHeight: p,
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
            r = null != t && (0, Y.Z)(t);
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
            a = es(e, ["isUnavailable", "guild", "selectedChannel", "enableStudyGroup"]);
        if (t || null == n)
            return (0, r.jsx)(J.Z, { withBannerPadding: null != n && null != this.getGuildBannerHash() });
        {
            if (n.features.has(X.GuildFeatures.HUB) && !l)
                return (0, r.jsx)("div", {
                    className: er.hubContainer,
                    children: (0, r.jsx)(P.Z, {
                        guild: n,
                        channel: null != i ? i : k.ZP.getDefaultChannel(n.id),
                    }),
                });
            let e = n.id === et._ ? W.j : W.E;
            return (0, r.jsx)(
                e,
                ea(el({ guild: n }, a), {
                    guildBanner: this.getGuildBannerHash(),
                    hasGuildSubheader: this.state.hasGuildSubheader,
                    onScroll:
                        null != n && (null != this.getGuildBannerHash() || (0, Y.Z)(n))
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
            className: er.container,
            onContextMenu: this.handleContextMenu,
            "aria-label": en.intl.formatToPlainString(en.t.nj5gAZ, {
                guildName: null != (e = null == t ? void 0 : t.name) ? e : "",
            }),
            children: [
                null != t && this.renderGuildHeader(this.state.hasGuildSubheader),
                null != t &&
                    (0, r.jsx)(Q.Z, {
                        guild: t,
                        setHasSubheader: (e) => this.setState({ hasGuildSubheader: e }),
                    }),
                this.renderChannelList(),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            ei(this, "historyUnlisten", () => {}),
            ei(this, "guildHeaderRef", i.createRef()),
            ei(this, "guildHeaderDropdownButtonRef", i.createRef()),
            ei(this, "showTimeout", new c.V7()),
            ei(this, "state", {
                controller: new l.Controller({
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
            ei(this, "handleHistoryChange", (e) => {
                null != e.state &&
                    e.state.shouldShowSubscribeTooltip &&
                    this.showTimeout.start(1000, () => this.setState({ shouldShowSubscribeTooltip: !0 }));
            }),
            ei(this, "handleHeaderMenuToggle", (e) => {
                let { isHeaderPopoutOpen: t } = this.props;
                e.stopPropagation(), (0, y.l)(!t), this.closeAllHeaderNotices();
            }),
            ei(this, "handleContextMenu", (e) => {
                let { guild: t } = this.props;
                null != t &&
                    (0, f.jW)(e, async () => {
                        let { default: e } = await n.e("92795").then(n.bind(n, 652171));
                        return (n) => (0, r.jsx)(e, ea(el({}, n), { guild: t }));
                    });
            }),
            ei(this, "handleHeaderContextMenu", (e) => {
                let { guild: t } = this.props;
                null != t &&
                    (0, f.jW)(e, async () => {
                        let { default: e } = await Promise.all([
                            n.e("36599"),
                            n.e("7654"),
                            n.e("76692"),
                            n.e("8271"),
                            n.e("15851"),
                            n.e("51453"),
                            n.e("845"),
                            n.e("9414"),
                            n.e("6850"),
                            n.e("58227"),
                            n.e("44686"),
                            n.e("9536"),
                            n.e("87154"),
                            n.e("33213"),
                            n.e("22431"),
                        ]).then(n.bind(n, 545135));
                        return (n) => (0, r.jsx)(e, ea(el({}, n), { guild: t }));
                    });
            }),
            ei(this, "closeAllHeaderNotices", () => {
                this.handleCloseSubscribeTooltip(),
                    this.handleCloseTemplateDirtyTooltip(),
                    this.handleCloseStudentHubPrivacySettingsTooltip();
            }),
            ei(this, "handleCloseStudentHubPrivacySettingsTooltip", () => {
                var e;
                let t = (0, O.zu)(o.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP),
                    n = null == (e = this.props.guild) ? void 0 : e.features.has(X.GuildFeatures.HUB);
                !t && n && (0, O.Q3)(o.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP, { dismissAction: ee.L.AUTO });
            }),
            ei(this, "handleCloseSubscribeTooltip", () => {
                this.showTimeout.stop(),
                    this.state.shouldShowSubscribeTooltip && this.setState({ shouldShowSubscribeTooltip: !1 });
            }),
            ei(this, "handleCloseTemplateDirtyTooltip", () => {
                let { guild: e, showGuildTemplateDirtyTooltip: t } = this.props;
                null != e && t && T.Z.hideGuildTemplateDirtyTooltip(e.id);
            }),
            ei(this, "renderMenuPopout", async () => {
                let { default: e } = await Promise.all([n.e("87154"), n.e("97368")]).then(n.bind(n, 859432));
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
            ei(this, "renderGuildHeaderUpsellPopout", (e) => {
                let {
                    showRoleSubscriptionUpsell: t,
                    showDiscoveryLandingPageSettingsUpsell: n,
                    showHubPrivacySettingsTooltip: i,
                    showMediaChannelUpsell: l,
                    showTierTemplatesUpsell: a,
                    shouldRenderGuildPowerupPerkCoachmark: s,
                    guild: c,
                } = this.props;
                if (null == c) return this.renderGuildHeaderDropdownButton(e);
                let u = [];
                return (i && u.push(o.z.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP),
                t && u.push(o.z.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL),
                n && u.push(o.z.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL),
                s && u.push(o.z.GUILD_POWERUP_PERKS_COACHMARK),
                0 === u.length)
                    ? this.renderGuildHeaderDropdownButton(e)
                    : (l && u.push(o.z.MEDIA_CHANNEL_UPSELL),
                      a && u.push(o.z.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL),
                      (0, r.jsx)(K.Z, {
                          contentTypes: u,
                          guild: c,
                          renderGuildHeaderDropdownButton: () => this.renderGuildHeaderDropdownButton(e),
                      }));
            }),
            ei(this, "renderGuildHeaderDropdownButton", (e) => {
                let t = e ? d.u04 : d.CJ0;
                return (0, r.jsx)(t, {
                    ref: this.guildHeaderDropdownButtonRef,
                    size: "xs",
                    color: "currentColor",
                });
            }),
            ei(this, "setAnimatedValueForBanner", (e) => {
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
            ei(this, "pinBannerOrGuildInfo", (e) => {
                let { scrollTop: t } = e;
                this.setAnimatedValue(t);
            });
    }
}
function ed(e) {
    var t;
    let { guildId: n, hideSelectedChannel: l, selectedChannelId: c } = e,
        u = (0, s.e7)([U.Z], () => U.Z.getGuild(n));
    (0, g.J_)(n);
    let p = (0, v.Z)(n),
        f = (0, s.e7)([D.Z], () => D.Z.getGuildDimensions(n).scrollTo),
        T = (0, s.e7)([V.Z], () => V.Z.getChannelId()),
        P = (0, s.e7)([B.Z], () => B.Z.can(X.Plq.MANAGE_GUILD, u)),
        Z = (0, s.e7)([M.Z], () => M.Z.isUnavailable(n)),
        w = (0, s.e7)([F.default], () => F.default.getCurrentUser()),
        { enableStudyGroup: k } = (0, j.s)(u),
        Y = (0, E.ZP)((e) => e.currentlyShown.has(o.z.NAGBAR_NOTICE_CONNECT_PLAYSTATION)),
        [W, q] = i.useState(!Y),
        K = (0, h.Z)(n),
        { analyticsLocations: Q } = (0, b.ZP)(m.Z.GUILD_HEADER);
    i.useEffect(() => {
        n !== K && q(!Y);
    }, [n, K, Y]);
    let [J, et] = (0, E.ZP)(
            (e) => [
                $.XN.some((t) => e.currentlyShown.has(t.dismissibleContentType)),
                e.currentlyShownGroup.has(ee.R.GUILD_HEADER_TOOLTIPS),
            ],
            a.X,
        ),
        en = (0, _.Z)(u),
        er = (0, d.s9z)(d.JQI),
        ei = (0, s.e7)([G.Z], () => G.Z.hasLayers()),
        el = (0, s.e7)([L.Z], () => L.Z.shouldShow(eo)),
        ea = (0, S.Z)(n),
        es = (null == u ? void 0 : u.features.has(X.GuildFeatures.HUB)) === !0,
        ec = P && (null == u ? void 0 : u.features.has(X.GuildFeatures.DISCOVERABLE)) === !0,
        ed = (0, s.e7)(
            [N.Z, G.Z],
            () => null != u && null != w && P && !G.Z.hasLayers() && N.Z.shouldShowGuildTemplateDirtyTooltip(n),
        ),
        ep = (0, s.e7)([R.Z], () => R.Z.getChannel(c)),
        { isPopoutOpen: ef } = (0, y.y)(),
        eg = null != (t = null == u ? void 0 : u.features.has(X.GuildFeatures.COMMUNITY)) && t,
        eh = z.ZP.isNewUser(w),
        em = W && !eh;
    (0, I.Z)(u);
    let eb = (0, O.Nj)(o.z.PREMIUM_TUTORIAL_SERVER_MENU_TOOLTIP),
        e_ = (0, x.Z)(n),
        eE = (0, C.Z)(n),
        eO = (0, s.e7)([V.Z], () => V.Z.getChannelId()),
        ev = (0, s.e7)([H.Z], () => H.Z.desyncedVoiceStatesCount),
        ey = (0, A.Z)(n);
    return (0, r.jsx)(eu, {
        guildId: n,
        hideSelectedChannel: l,
        guild: u,
        scrollToChannel: f,
        selectedChannelId: l ? null : c,
        selectedChannel: ep,
        selectedVoiceChannelId: T,
        voiceStates: p,
        rtcConnectedChannelId: eO,
        rtcDesyncedVoiceStatesCount: ev,
        isUnavailable: Z,
        user: w,
        hasChannelNotice: null != en || J,
        anyLayerOpen: er || ei,
        showDiscoveryLandingPageSettingsUpsell: ec,
        showGuildHeaderTutorial: el,
        showGuildTemplateDirtyTooltip: ed,
        showRoleSubscriptionUpsell: ea,
        showHubPrivacySettingsTooltip: es,
        showNewUnreadsBar: eg,
        showMediaChannelUpsell: e_,
        showTierTemplatesUpsell: eE,
        isHeaderPopoutOpen: ef,
        enableStudyGroup: k,
        isGuildHeaderDismissibleTooltipShown: et,
        canShowCoachMarkAtBottom: W,
        headerAnalyticsLocations: Q,
        isTutorialHighlightDismissed: eb,
        shouldRenderBurstCoachmark: em,
        shouldRenderGuildPowerupPerkCoachmark: !1 === ey,
    });
}
