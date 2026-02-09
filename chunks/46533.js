n.d(t, { A: () => es }), n(321073);
var i = n(627968),
    r = n(64700),
    a = n(92674),
    l = n(942381),
    s = n(311907),
    o = n(554146),
    d = n(451988),
    c = n(342494),
    u = n(397927),
    A = n(73153),
    h = n(442433),
    _ = n(475743),
    m = n(793574),
    p = n(688810),
    g = n(665037),
    E = n(771781),
    I = n(826673),
    f = n(250719),
    C = n(72152),
    N = n(502103),
    T = n(929163),
    S = n(423183),
    x = n(568185),
    v = n(225437),
    b = n(221094),
    y = n(781862),
    L = n(380150),
    O = n(488803),
    R = n(363487),
    P = n(77509),
    j = n(728321),
    D = n(482361),
    w = n(734057),
    M = n(72314),
    U = n(919638),
    G = n(808728),
    k = n(71393),
    V = n(186111),
    B = n(576705),
    H = n(584569),
    F = n(383501),
    Y = n(287809),
    W = n(927578),
    q = n(885631),
    z = n(487401),
    K = n(952790),
    $ = n(718996),
    Q = n(64084),
    X = n(846930),
    Z = n(652215),
    J = n(946960),
    ee = n(49999),
    et = n(349828),
    en = n(985018),
    ei = n(484241);
let er = "server-settings",
    ea = { origin: { x: -8, y: -48 }, targetWidth: 40, targetHeight: 40, offset: { x: 0, y: 0 } };
class el extends r.PureComponent {
    historyUnlisten = () => {};
    guildHeaderRef = r.createRef();
    guildHeaderDropdownButtonRef = r.createRef();
    static getDerivedStateFromProps(e) {
        let { guild: t, hasChannelNotice: n } = e;
        return null == t || null == t.banner || n ? { renderBanner: !1, bannerVisible: !1 } : null;
    }
    showTimeout = new d.Ep();
    state = {
        controller: new a.Controller({ value: 1, immediate: !0 }),
        renderBanner: !1,
        bannerVisible: !1,
        communityInfoVisible: !1,
        shouldShowSubscribeTooltip: !1,
        bannerVisibleHeight: 88,
        hasGuildSubheader: !1,
    };
    componentDidMount() {
        this.setAnimatedValue(0),
            A.h.subscribe("LAYER_PUSH", this.closeAllHeaderNotices),
            (this.historyUnlisten = P.A.addRouteChangeListener(this.handleHistoryChange));
        let { location: e } = P.A.getHistory();
        e.state?.shouldShowSubscribeTooltip &&
            this.showTimeout.start(1e3, () => this.setState({ shouldShowSubscribeTooltip: !0 }));
    }
    componentWillUnmount() {
        this.showTimeout.stop(),
            this.state.controller.dispose(),
            this.historyUnlisten(),
            A.h.unsubscribe("LAYER_PUSH", this.closeAllHeaderNotices);
    }
    getGuildBannerHash() {
        let { guild: e, hasChannelNotice: t } = this.props;
        return null == e || t ? null : e.banner;
    }
    handleHistoryChange = (e) => {
        null != e.state &&
            e.state.shouldShowSubscribeTooltip &&
            this.showTimeout.start(1e3, () => this.setState({ shouldShowSubscribeTooltip: !0 }));
    };
    handleHeaderMenuToggle = (e) => {
        let { isHeaderPopoutOpen: t } = this.props;
        e.stopPropagation(), (0, C.Z)(!t), this.closeAllHeaderNotices();
    };
    handleContextMenu = (e) => {
        let { guild: t } = this.props;
        null != t &&
            (0, h.L3)(e, async () => {
                let { default: e } = await n.e("10758").then(n.bind(n, 455557));
                return (n) => (0, i.jsx)(e, { ...n, guild: t });
            });
    };
    handleHeaderContextMenu = (e) => {
        let { guild: t } = this.props;
        null != t &&
            (0, h.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("43600"),
                    n.e("68587"),
                    n.e("63379"),
                    n.e("56026"),
                    n.e("16301"),
                    n.e("22191"),
                    n.e("25961"),
                    n.e("21968"),
                    n.e("35894"),
                    n.e("50796"),
                    n.e("8458"),
                    n.e("11810"),
                    n.e("39048"),
                    n.e("54469"),
                    n.e("52191"),
                ]).then(n.bind(n, 544676));
                return (n) => (0, i.jsx)(e, { ...n, guild: t });
            });
    };
    closeAllHeaderNotices = () => {
        this.handleCloseSubscribeTooltip(),
            this.handleCloseTemplateDirtyTooltip(),
            this.handleCloseStudentHubPrivacySettingsTooltip();
    };
    handleCloseStudentHubPrivacySettingsTooltip = () => {
        let e = (0, I.k8)(o.M.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP),
            t = this.props.guild?.features.has(Z.GuildFeatures.HUB);
        !e && t && (0, I.Dr)(o.M.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP, { dismissAction: ee.i.AUTO });
    };
    handleCloseSubscribeTooltip = () => {
        this.showTimeout.stop(),
            this.state.shouldShowSubscribeTooltip && this.setState({ shouldShowSubscribeTooltip: !1 });
    };
    handleCloseTemplateDirtyTooltip = () => {
        let { guild: e, showGuildTemplateDirtyTooltip: t } = this.props;
        null != e && t && x.A.hideGuildTemplateDirtyTooltip(e.id);
    };
    renderMenuPopout = async () => {
        let { default: e } = await n.e("19418").then(n.bind(n, 222785));
        return (t) => {
            let { closePopout: n } = t,
                { guild: r } = this.props;
            return null != r && (0, i.jsx)(e, { onClose: n, guild: r });
        };
    };
    renderGuildHeaderUpsellPopout = (e) => {
        let {
            showRoleSubscriptionUpsell: t,
            showDiscoveryLandingPageSettingsUpsell: n,
            showHubPrivacySettingsTooltip: r,
            showMediaChannelUpsell: a,
            showTierTemplatesUpsell: l,
            shouldRenderGuildPowerupPerkCoachmark: s,
            shouldRenderGameServerHostingPerkAvailableCoachmark: d,
            guild: c,
        } = this.props;
        if (null == c) return this.renderGuildHeaderDropdownButton(e);
        let u = [];
        return (r && u.push(o.M.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP),
        t && u.push(o.M.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL),
        n && u.push(o.M.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL),
        s && u.push(o.M.GUILD_POWERUP_PERKS_COACHMARK),
        d && u.push(o.M.GAME_SERVER_HOSTING_NEW_PERK_AVAILABLE_COACHMARK),
        0 === u.length)
            ? this.renderGuildHeaderDropdownButton(e)
            : (a && u.push(o.M.MEDIA_CHANNEL_UPSELL),
              l && u.push(o.M.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL),
              (0, i.jsx)($.A, {
                  contentTypes: u,
                  guild: c,
                  renderGuildHeaderDropdownButton: () => this.renderGuildHeaderDropdownButton(e),
              }));
    };
    renderGuildHeaderDropdownButton = (e) => {
        let t = e ? u.tN5 : u.abt;
        return (0, i.jsx)(t, { ref: this.guildHeaderDropdownButtonRef, size: "xs", color: "currentColor" });
    };
    renderGuildHeaderNotices(e) {
        let { showGuildTemplateDirtyTooltip: t, showGuildHeaderTutorial: n, anyLayerOpen: r } = this.props,
            { shouldShowSubscribeTooltip: a } = this.state;
        return n
            ? (0, i.jsx)("div", {
                  onClick: (t) => (e ? null : t.stopPropagation()),
                  children: (0, i.jsx)(j.A, {
                      tutorialId: er,
                      position: "bottom",
                      inlineSpecs: ea,
                      children: this.renderGuildHeaderDropdownButton(e),
                  }),
              })
            : t
              ? (0, i.jsxs)(i.Fragment, {
                    children: [
                        this.renderGuildHeaderDropdownButton(e),
                        !e &&
                            !r &&
                            (0, i.jsx)(c.AM, {
                                targetElementRef: this.guildHeaderDropdownButtonRef,
                                title: en.intl.string(en.t.Rk2RJk),
                                body: en.intl.string(en.t.sFSrFH),
                                onRequestClose: this.handleCloseTemplateDirtyTooltip,
                                position: "bottom",
                                caretConfig: { align: "center" },
                            }),
                    ],
                })
              : r || e
                ? this.renderGuildHeaderDropdownButton(e)
                : a
                  ? (0, i.jsxs)(i.Fragment, {
                        children: [
                            this.renderGuildHeaderDropdownButton(e),
                            (0, i.jsx)(c.AM, {
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
                showGuildHeaderTutorial: r,
                showGuildTemplateDirtyTooltip: a,
                isGuildHeaderDismissibleTooltipShown: l,
                headerAnalyticsLocations: s,
            } = this.props,
            {
                controller: o,
                renderBanner: d,
                bannerVisible: c,
                bannerVisibleHeight: A,
                communityInfoVisible: h,
            } = this.state,
            _ = r || a || l;
        return null == t
            ? null
            : (0, i.jsx)(p.f5, {
                  value: s,
                  children: (0, i.jsx)(u.QCx, {
                      targetElementRef: this.guildHeaderRef,
                      renderPopout: this.renderMenuPopout,
                      position: "bottom",
                      align: "center",
                      animation: u.YNO.Animation.SCALE,
                      shouldShow: n,
                      onRequestClose: () => {
                          (0, C.Z)(!1);
                      },
                      spacing: 4,
                      children: (r) => {
                          let { onClick: a, ...l } = r;
                          return (0, i.jsx)(K.Ay, {
                              ref: this.guildHeaderRef,
                              guild: t,
                              controller: o,
                              renderBanner: d,
                              hasSubheader: e,
                              bannerVisible: c,
                              communityInfoVisible: h,
                              guildBanner: this.getGuildBannerHash(),
                              onClick: this.handleHeaderMenuToggle,
                              onContextMenu: this.handleHeaderContextMenu,
                              disableBannerAnimation: _,
                              animationOverlayHeight: A,
                              ...l,
                              children: this.renderGuildHeaderNotices(n),
                          });
                      },
                  }),
              });
    }
    setAnimatedValue(e) {
        let { guild: t } = this.props,
            n = null != this.getGuildBannerHash(),
            i = null != t && (0, q.A)(t);
        null != t && (n || i) && (n ? this.setAnimatedValueForBanner(e) : this.setAnimatedValueForGuildInfo(e));
    }
    setAnimatedValueForBanner = (e) => {
        let {
            renderBanner: t,
            communityInfoVisible: n,
            bannerVisible: i,
            bannerVisibleHeight: r,
            controller: a,
        } = this.state;
        ((e >= 88 && i) || (e < 88 && !i)) && (i = !i),
            ((e >= 88 && !t) || (e < 88 && t)) && (t = !t),
            (r = Math.max(88 - e, 0)),
            (n = i),
            (t !== this.state.renderBanner ||
                i !== this.state.bannerVisible ||
                r !== this.state.bannerVisibleHeight ||
                n !== this.state.communityInfoVisible) &&
                this.setState({ renderBanner: t, bannerVisible: i, bannerVisibleHeight: r, communityInfoVisible: n }),
            a.update({ value: Math.min(1, Math.max(0, 1 - e / 88)), immediate: !0 }).start();
    };
    setAnimatedValueForGuildInfo(e) {
        let { communityInfoVisible: t, controller: n } = this.state;
        ((e >= 20 && t) || (e < 20 && !t)) && (t = !t),
            t !== this.state.communityInfoVisible && this.setState({ communityInfoVisible: t }),
            n.update({ value: Math.min(1, Math.max(0, 1 - e / 20)), immediate: !0 }).start();
    }
    pinBannerOrGuildInfo = (e) => {
        let { scrollTop: t } = e;
        this.setAnimatedValue(t);
    };
    renderChannelList() {
        let { isUnavailable: e, guild: t, selectedChannel: n, enableStudyGroup: r, ...a } = this.props;
        if (e || null == t)
            return (0, i.jsx)(X.A, { withBannerPadding: null != t && null != this.getGuildBannerHash() });
        {
            if (t.features.has(Z.GuildFeatures.HUB) && !r)
                return (0, i.jsx)("div", {
                    className: ei.r0,
                    children: (0, i.jsx)(y.A, { guild: t, channel: n ?? G.Ay.getDefaultChannel(t.id) }),
                });
            let e = t.id === et.V ? z.T : z.B;
            return (0, i.jsx)(e, {
                guild: t,
                ...a,
                guildBanner: this.getGuildBannerHash(),
                hasGuildSubheader: this.state.hasGuildSubheader,
                onScroll:
                    null != t && (null != this.getGuildBannerHash() || (0, q.A)(t)) ? this.pinBannerOrGuildInfo : null,
            });
        }
    }
    render() {
        let { guild: e } = this.props;
        return (0, i.jsxs)("nav", {
            className: ei.kL,
            onContextMenu: this.handleContextMenu,
            "aria-label": en.intl.formatToPlainString(en.t.nj5gAZ, { guildName: e?.name ?? "" }),
            children: [
                null != e && this.renderGuildHeader(this.state.hasGuildSubheader),
                null != e &&
                    (0, i.jsx)(Q.A, { guild: e, setHasSubheader: (e) => this.setState({ hasGuildSubheader: e }) }),
                this.renderChannelList(),
            ],
        });
    }
}
function es(e) {
    let { guildId: t, hideSelectedChannel: n, selectedChannelId: a } = e,
        d = (0, s.bG)([k.A], () => k.A.getGuild(t)),
        c = (0, f.A)(t),
        A = (0, s.bG)([M.A], () => M.A.getGuildDimensions(t).scrollTo),
        h = (0, s.bG)([F.A], () => F.A.getChannelId()),
        x = (0, s.bG)([B.A], () => B.A.can(Z.xBc.MANAGE_GUILD, d)),
        y = (0, s.bG)([U.A], () => U.A.isUnavailable(t)),
        P = (0, s.bG)([Y.default], () => Y.default.getCurrentUser()),
        { enableStudyGroup: j } = (0, b.y)(d),
        G = (0, E.Ay)((e) => e.currentlyShown.has(o.M.NAGBAR_NOTICE_CONNECT_PLAYSTATION)),
        [q, z] = r.useState(!G),
        K = (0, _.A)(t),
        { analyticsLocations: $ } = (0, p.Ay)(m.A.GUILD_HEADER);
    r.useEffect(() => {
        t !== K && z(!G);
    }, [t, K, G]);
    let [Q, X] = (0, E.Ay)(
            (e) => [
                J.cA.some((t) => e.currentlyShown.has(t.dismissibleContentType)),
                e.currentlyShownGroup.has(ee.m.GUILD_HEADER_TOOLTIPS),
            ],
            l.x,
        ),
        et = (0, g.A)(d),
        en = (0, u.red)(u.DXt),
        ei = (0, s.bG)([V.A], () => V.A.hasLayers()),
        ea = (0, s.bG)([D.A], () => D.A.shouldShow(er)),
        es = (0, S.A)(t),
        eo = d?.features.has(Z.GuildFeatures.HUB) === !0,
        ed = x && d?.features.has(Z.GuildFeatures.DISCOVERABLE) === !0,
        ec = (0, s.bG)(
            [v.A, V.A],
            () => null != d && null != P && x && !V.A.hasLayers() && v.A.shouldShowGuildTemplateDirtyTooltip(t),
        ),
        eu = (0, s.bG)([w.A], () => w.A.getChannel(a)),
        { isPopoutOpen: eA } = (0, C.S)(),
        eh = d?.features.has(Z.GuildFeatures.COMMUNITY) ?? !1,
        e_ = W.Ay.isNewUser(P),
        em = q && !e_;
    (0, N.A)(d);
    let ep = (0, I.JZ)(o.M.PREMIUM_TUTORIAL_SERVER_MENU_TOOLTIP),
        eg = (0, L.A)(t),
        eE = (0, T.A)(t),
        eI = (0, s.bG)([F.A], () => F.A.getChannelId()),
        ef = (0, s.bG)([H.A], () => H.A.desyncedVoiceStatesCount),
        eC = (0, R.A)(t),
        eN = (0, O.C$)(t, "GuildSidebar"),
        eT = (0, s.bG)([k.A], () => k.A.getGuild(t)?.features.has(Z.GuildFeatures.GAME_SERVERS) ?? !1, [t]);
    return (0, i.jsx)(el, {
        guildId: t,
        hideSelectedChannel: n,
        guild: d,
        scrollToChannel: A,
        selectedChannelId: n ? null : a,
        selectedChannel: eu,
        selectedVoiceChannelId: h,
        voiceStates: c,
        rtcConnectedChannelId: eI,
        rtcDesyncedVoiceStatesCount: ef,
        isUnavailable: y,
        user: P,
        hasChannelNotice: null != et || Q,
        anyLayerOpen: en || ei,
        showDiscoveryLandingPageSettingsUpsell: ed,
        showGuildHeaderTutorial: ea,
        showGuildTemplateDirtyTooltip: ec,
        showRoleSubscriptionUpsell: es,
        showHubPrivacySettingsTooltip: eo,
        showNewUnreadsBar: eh,
        showMediaChannelUpsell: eg,
        showTierTemplatesUpsell: eE,
        isHeaderPopoutOpen: eA,
        enableStudyGroup: j,
        isGuildHeaderDismissibleTooltipShown: X,
        canShowCoachMarkAtBottom: q,
        headerAnalyticsLocations: $,
        isTutorialHighlightDismissed: ep,
        shouldRenderBurstCoachmark: em,
        shouldRenderGuildPowerupPerkCoachmark: !1 === eC,
        shouldRenderGameServerHostingPerkAvailableCoachmark: eN && !eT && !1 === eC,
    });
}
