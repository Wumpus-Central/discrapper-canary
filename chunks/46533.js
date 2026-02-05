n.d(t, { A: () => eo }), n(321073);
var i = n(627968),
    r = n(64700),
    a = n(563495),
    l = n(942381),
    s = n(311907),
    o = n(554146),
    d = n(451988),
    c = n(342494),
    u = n(397927),
    A = n(73153),
    h = n(442433),
    _ = n(512155),
    m = n(475743),
    p = n(793574),
    g = n(688810),
    E = n(665037),
    f = n(771781),
    I = n(826673),
    C = n(250719),
    N = n(72152),
    T = n(502103),
    S = n(929163),
    x = n(423183),
    v = n(568185),
    b = n(225437),
    y = n(221094),
    L = n(781862),
    O = n(380150),
    R = n(488803),
    P = n(363487),
    j = n(77509),
    D = n(728321),
    w = n(482361),
    M = n(734057),
    U = n(72314),
    G = n(919638),
    k = n(808728),
    V = n(71393),
    B = n(186111),
    H = n(576705),
    F = n(584569),
    Y = n(383501),
    W = n(287809),
    q = n(927578),
    z = n(885631),
    K = n(487401),
    $ = n(952790),
    Q = n(718996),
    X = n(64084),
    Z = n(846930),
    J = n(652215),
    ee = n(946960),
    et = n(49999),
    en = n(349828),
    ei = n(985018),
    er = n(484241);
let ea = "server-settings",
    el = { origin: { x: -8, y: -48 }, targetWidth: 40, targetHeight: 40, offset: { x: 0, y: 0 } };
class es extends r.PureComponent {
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
            (this.historyUnlisten = j.A.addRouteChangeListener(this.handleHistoryChange));
        let { location: e } = j.A.getHistory();
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
        e.stopPropagation(), (0, N.Z)(!t), this.closeAllHeaderNotices();
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
                    n.e("68587"),
                    n.e("43600"),
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
            t = this.props.guild?.features.has(J.GuildFeatures.HUB);
        !e && t && (0, I.Dr)(o.M.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP, { dismissAction: et.i.AUTO });
    };
    handleCloseSubscribeTooltip = () => {
        this.showTimeout.stop(),
            this.state.shouldShowSubscribeTooltip && this.setState({ shouldShowSubscribeTooltip: !1 });
    };
    handleCloseTemplateDirtyTooltip = () => {
        let { guild: e, showGuildTemplateDirtyTooltip: t } = this.props;
        null != e && t && v.A.hideGuildTemplateDirtyTooltip(e.id);
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
              (0, i.jsx)(Q.A, {
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
                  children: (0, i.jsx)(D.A, {
                      tutorialId: ea,
                      position: "bottom",
                      inlineSpecs: el,
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
                                title: ei.intl.string(ei.t.Rk2RJk),
                                body: ei.intl.string(ei.t.sFSrFH),
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
                                title: ei.intl.string(ei.t.Q3qa4x),
                                body: ei.intl.string(ei.t.UyHD4O),
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
            : (0, i.jsx)(g.f5, {
                  value: s,
                  children: (0, i.jsx)(u.QCx, {
                      targetElementRef: this.guildHeaderRef,
                      renderPopout: this.renderMenuPopout,
                      position: "bottom",
                      align: "center",
                      animation: u.YNO.Animation.SCALE,
                      shouldShow: n,
                      onRequestClose: () => {
                          (0, N.Z)(!1);
                      },
                      spacing: 4,
                      children: (r) => {
                          let { onClick: a, ...l } = r;
                          return (0, i.jsx)($.Ay, {
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
            i = null != t && (0, z.A)(t);
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
            return (0, i.jsx)(Z.A, { withBannerPadding: null != t && null != this.getGuildBannerHash() });
        {
            if (t.features.has(J.GuildFeatures.HUB) && !r)
                return (0, i.jsx)("div", {
                    className: er.r0,
                    children: (0, i.jsx)(L.A, { guild: t, channel: n ?? k.Ay.getDefaultChannel(t.id) }),
                });
            let e = t.id === en.V ? K.T : K.B;
            return (0, i.jsx)(e, {
                guild: t,
                ...a,
                guildBanner: this.getGuildBannerHash(),
                hasGuildSubheader: this.state.hasGuildSubheader,
                onScroll:
                    null != t && (null != this.getGuildBannerHash() || (0, z.A)(t)) ? this.pinBannerOrGuildInfo : null,
            });
        }
    }
    render() {
        let { guild: e } = this.props;
        return (0, i.jsxs)("nav", {
            className: er.kL,
            onContextMenu: this.handleContextMenu,
            "aria-label": ei.intl.formatToPlainString(ei.t.nj5gAZ, { guildName: e?.name ?? "" }),
            children: [
                null != e && this.renderGuildHeader(this.state.hasGuildSubheader),
                null != e &&
                    (0, i.jsx)(X.A, { guild: e, setHasSubheader: (e) => this.setState({ hasGuildSubheader: e }) }),
                this.renderChannelList(),
            ],
        });
    }
}
function eo(e) {
    let { guildId: t, hideSelectedChannel: n, selectedChannelId: a } = e,
        d = (0, s.bG)([V.A], () => V.A.getGuild(t));
    (0, _.Tc)(t);
    let c = (0, C.A)(t),
        A = (0, s.bG)([U.A], () => U.A.getGuildDimensions(t).scrollTo),
        h = (0, s.bG)([Y.A], () => Y.A.getChannelId()),
        v = (0, s.bG)([H.A], () => H.A.can(J.xBc.MANAGE_GUILD, d)),
        L = (0, s.bG)([G.A], () => G.A.isUnavailable(t)),
        j = (0, s.bG)([W.default], () => W.default.getCurrentUser()),
        { enableStudyGroup: D } = (0, y.y)(d),
        k = (0, f.Ay)((e) => e.currentlyShown.has(o.M.NAGBAR_NOTICE_CONNECT_PLAYSTATION)),
        [z, K] = r.useState(!k),
        $ = (0, m.A)(t),
        { analyticsLocations: Q } = (0, g.Ay)(p.A.GUILD_HEADER);
    r.useEffect(() => {
        t !== $ && K(!k);
    }, [t, $, k]);
    let [X, Z] = (0, f.Ay)(
            (e) => [
                ee.cA.some((t) => e.currentlyShown.has(t.dismissibleContentType)),
                e.currentlyShownGroup.has(et.m.GUILD_HEADER_TOOLTIPS),
            ],
            l.x,
        ),
        en = (0, E.A)(d),
        ei = (0, u.red)(u.DXt),
        er = (0, s.bG)([B.A], () => B.A.hasLayers()),
        el = (0, s.bG)([w.A], () => w.A.shouldShow(ea)),
        eo = (0, x.A)(t),
        ed = d?.features.has(J.GuildFeatures.HUB) === !0,
        ec = v && d?.features.has(J.GuildFeatures.DISCOVERABLE) === !0,
        eu = (0, s.bG)(
            [b.A, B.A],
            () => null != d && null != j && v && !B.A.hasLayers() && b.A.shouldShowGuildTemplateDirtyTooltip(t),
        ),
        eA = (0, s.bG)([M.A], () => M.A.getChannel(a)),
        { isPopoutOpen: eh } = (0, N.S)(),
        e_ = d?.features.has(J.GuildFeatures.COMMUNITY) ?? !1,
        em = q.Ay.isNewUser(j),
        ep = z && !em;
    (0, T.A)(d);
    let eg = (0, I.JZ)(o.M.PREMIUM_TUTORIAL_SERVER_MENU_TOOLTIP),
        eE = (0, O.A)(t),
        ef = (0, S.A)(t),
        eI = (0, s.bG)([Y.A], () => Y.A.getChannelId()),
        eC = (0, s.bG)([F.A], () => F.A.desyncedVoiceStatesCount),
        eN = (0, P.A)(t),
        eT = (0, R.C$)(t, "GuildSidebar"),
        eS = (0, s.bG)([V.A], () => V.A.getGuild(t)?.features.has(J.GuildFeatures.GAME_SERVERS) ?? !1, [t]);
    return (0, i.jsx)(es, {
        guildId: t,
        hideSelectedChannel: n,
        guild: d,
        scrollToChannel: A,
        selectedChannelId: n ? null : a,
        selectedChannel: eA,
        selectedVoiceChannelId: h,
        voiceStates: c,
        rtcConnectedChannelId: eI,
        rtcDesyncedVoiceStatesCount: eC,
        isUnavailable: L,
        user: j,
        hasChannelNotice: null != en || X,
        anyLayerOpen: ei || er,
        showDiscoveryLandingPageSettingsUpsell: ec,
        showGuildHeaderTutorial: el,
        showGuildTemplateDirtyTooltip: eu,
        showRoleSubscriptionUpsell: eo,
        showHubPrivacySettingsTooltip: ed,
        showNewUnreadsBar: e_,
        showMediaChannelUpsell: eE,
        showTierTemplatesUpsell: ef,
        isHeaderPopoutOpen: eh,
        enableStudyGroup: D,
        isGuildHeaderDismissibleTooltipShown: Z,
        canShowCoachMarkAtBottom: z,
        headerAnalyticsLocations: Q,
        isTutorialHighlightDismissed: eg,
        shouldRenderBurstCoachmark: ep,
        shouldRenderGuildPowerupPerkCoachmark: !1 === eN,
        shouldRenderGameServerHostingPerkAvailableCoachmark: eT && !eS && !1 === eN,
    });
}
