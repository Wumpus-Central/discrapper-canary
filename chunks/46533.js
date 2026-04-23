n.d(t, { A: () => eC }), n(321073);
var i = n(627968),
    r = n(64700),
    a = n(419354),
    l = n(942381),
    s = n(311907),
    o = n(554146),
    d = n(451988),
    u = n(265486),
    c = n(900797),
    A = n(847374),
    h = n(265872),
    _ = n(192308),
    E = n(73153),
    p = n(442433),
    m = n(475743),
    g = n(793574),
    I = n(688810),
    C = n(665037),
    f = n(771781),
    T = n(826673),
    S = n(932001),
    N = n(93055),
    O = n(5180),
    L = n(250719),
    y = n(780645),
    v = n(72152),
    b = n(502103),
    D = n(929163),
    R = n(423183),
    P = n(568185),
    w = n(225437),
    M = n(221094),
    U = n(781862),
    x = n(361158),
    G = n(488803),
    k = n(764322),
    j = n(969983),
    V = n(379229),
    H = n(139032),
    B = n(52260),
    F = n(363487),
    Y = n(342220),
    K = n(77509),
    z = n(728321),
    W = n(482361),
    $ = n(734057),
    q = n(72314),
    X = n(919638),
    Q = n(808728),
    Z = n(71393),
    J = n(186111),
    ee = n(576705),
    et = n(584569),
    en = n(383501),
    ei = n(287809),
    er = n(927578),
    ea = n(885631),
    el = n(487401),
    es = n(952790),
    eo = n(718996),
    ed = n(64084),
    eu = n(66933),
    ec = n(846930),
    eA = n(652215),
    eh = n(946960),
    e_ = n(49999),
    eE = n(985018),
    ep = n(153822);
let em = "server-settings",
    eg = { origin: { x: -8, y: -48 }, targetWidth: 40, targetHeight: 40, offset: { x: 0, y: 0 } };
class eI extends r.PureComponent {
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
            E.h.subscribe("LAYER_PUSH", this.closeAllHeaderNotices),
            (this.historyUnlisten = K.A.addRouteChangeListener(this.handleHistoryChange));
        let { location: e } = K.A.getHistory();
        e.state?.shouldShowSubscribeTooltip &&
            this.showTimeout.start(1e3, () => this.setState({ shouldShowSubscribeTooltip: !0 }));
    }
    componentWillUnmount() {
        this.showTimeout.stop(),
            this.state.controller.dispose(),
            this.historyUnlisten(),
            E.h.unsubscribe("LAYER_PUSH", this.closeAllHeaderNotices);
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
        e.stopPropagation(), (0, v.Z)(!t), this.closeAllHeaderNotices();
    };
    handleContextMenu = (e) => {
        let { guild: t, hasFavoritesAccess: r } = this.props;
        if (null != t) {
            if ((0, O.ai)(t.id)) {
                if (!r) return;
                (0, p.L3)(e, async () => {
                    let { default: e } = await n.e("60497").then(n.bind(n, 908424));
                    return (t) => (0, i.jsx)(e, { ...t, navId: "favorites-channel-list-context" });
                });
                return;
            }
            (0, p.L3)(e, async () => {
                let { default: e } = await n.e("10758").then(n.bind(n, 455557));
                return (n) => (0, i.jsx)(e, { ...n, guild: t });
            });
        }
    };
    handleHeaderContextMenu = (e) => {
        let { guild: t } = this.props;
        if (null != t) {
            if ((0, O.ai)(t.id)) return void this.props.onFavoriteGuildContextMenu(e);
            (0, p.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("49681"),
                    n.e("96382"),
                    n.e("20044"),
                    n.e("28136"),
                    n.e("82486"),
                    n.e("77602"),
                    n.e("68587"),
                    n.e("43600"),
                    n.e("86546"),
                    n.e("15373"),
                    n.e("63379"),
                    n.e("56026"),
                    n.e("16301"),
                    n.e("22191"),
                    n.e("13334"),
                    n.e("25961"),
                    n.e("2736"),
                    n.e("13848"),
                    n.e("47810"),
                    n.e("54828"),
                    n.e("94683"),
                    n.e("50796"),
                    n.e("8458"),
                    n.e("94253"),
                    n.e("11810"),
                    n.e("72756"),
                    n.e("13337"),
                    n.e("54469"),
                    n.e("4788"),
                    n.e("16603"),
                ]).then(n.bind(n, 544676));
                return (n) => (0, i.jsx)(e, { ...n, guild: t });
            });
        }
    };
    closeAllHeaderNotices = () => {
        this.handleCloseSubscribeTooltip(),
            this.handleCloseTemplateDirtyTooltip(),
            this.handleCloseStudentHubPrivacySettingsTooltip();
    };
    handleCloseStudentHubPrivacySettingsTooltip = () => {
        let e = (0, T.k8)(o.M.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP),
            t = this.props.guild?.features.has(eA.GuildFeatures.HUB);
        !e && t && (0, T.Dr)(o.M.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP, { dismissAction: e_.i.AUTO });
    };
    handleCloseSubscribeTooltip = () => {
        this.showTimeout.stop(),
            this.state.shouldShowSubscribeTooltip && this.setState({ shouldShowSubscribeTooltip: !1 });
    };
    handleCloseTemplateDirtyTooltip = () => {
        let { guild: e, showGuildTemplateDirtyTooltip: t } = this.props;
        null != e && t && P.A.hideGuildTemplateDirtyTooltip(e.id);
    };
    renderMenuPopout = async () => {
        let { default: e } = await Promise.all([n.e("13337"), n.e("19418")]).then(n.bind(n, 222785));
        return (t) => {
            let { closePopout: n } = t,
                { guild: r } = this.props;
            return null != r && (0, i.jsx)(e, { onClose: n, guild: r });
        };
    };
    renderGuildHeaderUpsellPopout = (e) => {
        let { guild: t, guildHeaderContentDescriptor: n } = this.props;
        return null == t || null == n
            ? this.renderGuildHeaderDropdownButton(e)
            : (0, i.jsx)(eo.A, {
                  contentDescriptor: n,
                  guild: t,
                  renderGuildHeaderDropdownButton: () => this.renderGuildHeaderDropdownButton(e),
              });
    };
    renderGuildHeaderDropdownButton = (e) => {
        let t = e ? c.t : A.a;
        return (0, i.jsx)(t, { ref: this.guildHeaderDropdownButtonRef, size: "xs", color: "currentColor" });
    };
    renderGuildHeaderNotices(e) {
        let { showGuildTemplateDirtyTooltip: t, showGuildHeaderTutorial: n, anyLayerOpen: r } = this.props,
            { shouldShowSubscribeTooltip: a } = this.state;
        return n
            ? (0, i.jsx)("div", {
                  onClick: (t) => (e ? null : t.stopPropagation()),
                  children: (0, i.jsx)(z.A, {
                      tutorialId: em,
                      position: "bottom",
                      inlineSpecs: eg,
                      children: this.renderGuildHeaderDropdownButton(e),
                  }),
              })
            : t
              ? (0, i.jsxs)(i.Fragment, {
                    children: [
                        this.renderGuildHeaderDropdownButton(e),
                        !e &&
                            !r &&
                            (0, i.jsx)(u.A, {
                                targetElementRef: this.guildHeaderDropdownButtonRef,
                                title: eE.intl.string(eE.t.Rk2RJk),
                                body: eE.intl.string(eE.t.sFSrFH),
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
                            (0, i.jsx)(u.A, {
                                targetElementRef: this.guildHeaderDropdownButtonRef,
                                title: eE.intl.string(eE.t.Q3qa4x),
                                body: eE.intl.string(eE.t.UyHD4O),
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
                bannerVisible: u,
                bannerVisibleHeight: c,
                communityInfoVisible: A,
            } = this.state,
            _ = r || a || l;
        return null == t
            ? null
            : (0, i.jsx)(I.f5, {
                  value: s,
                  children: (0, i.jsx)(h.Q, {
                      targetElementRef: this.guildHeaderRef,
                      renderPopout: this.renderMenuPopout,
                      position: "bottom",
                      align: "center",
                      animation: h.Y.Animation.SCALE,
                      shouldShow: n,
                      onRequestClose: () => {
                          (0, v.Z)(!1);
                      },
                      spacing: 4,
                      children: (r) => {
                          let { onClick: a, ...l } = r;
                          return (0, i.jsx)(es.Ay, {
                              ref: this.guildHeaderRef,
                              guild: t,
                              controller: o,
                              renderBanner: d,
                              hasSubheader: e,
                              bannerVisible: u,
                              communityInfoVisible: A,
                              guildBanner: this.getGuildBannerHash(),
                              onClick: this.handleHeaderMenuToggle,
                              onContextMenu: this.handleHeaderContextMenu,
                              disableBannerAnimation: _,
                              animationOverlayHeight: c,
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
            i = null != t && (0, ea.A)(t);
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
            return (0, i.jsx)(ec.A, { withBannerPadding: null != t && null != this.getGuildBannerHash() });
        {
            if (t.features.has(eA.GuildFeatures.HUB) && !r)
                return (0, i.jsx)("div", {
                    className: ep.r0,
                    children: (0, i.jsx)(U.A, { guild: t, channel: n ?? Q.Ay.getDefaultChannel(t.id) }),
                });
            let e = (0, O.ai)(t.id) ? el.T : el.B;
            return (0, i.jsx)(e, {
                guild: t,
                ...a,
                guildBanner: this.getGuildBannerHash(),
                hasGuildSubheader: this.state.hasGuildSubheader,
                onScroll:
                    null != t && (null != this.getGuildBannerHash() || (0, ea.A)(t)) ? this.pinBannerOrGuildInfo : null,
            });
        }
    }
    render() {
        let { guild: e } = this.props,
            t = (0, O.YC)(e);
        return (0, i.jsxs)("nav", {
            className: ep.kL,
            onContextMenu: this.handleContextMenu,
            "aria-label": eE.intl.formatToPlainString(eE.t.nj5gAZ, { guildName: t ?? "" }),
            children: [
                null != e && this.renderGuildHeader(this.state.hasGuildSubheader),
                null != e &&
                    (0, i.jsx)(ed.A, { guild: e, setHasSubheader: (e) => this.setState({ hasGuildSubheader: e }) }),
                this.renderChannelList(),
            ],
        });
    }
}
function eC(e) {
    let { guildId: t, hideSelectedChannel: n, selectedChannelId: a } = e,
        d = (0, y.$)("favorite-guild-header-context"),
        { hasAccess: u } = (0, N.TW)("ConnectedGuildSidebar"),
        c = (0, s.bG)([Z.A], () => Z.A.getGuild(t)),
        A = (0, L.A)(t),
        h = (0, s.bG)([q.A], () => q.A.getGuildDimensions(t).scrollTo),
        E = (0, s.bG)([en.A], () => en.A.getChannelId()),
        p = (0, s.bG)([ee.A], () => ee.A.can(eA.xBc.MANAGE_GUILD, c)),
        O = (0, s.bG)([X.A], () => X.A.isUnavailable(t)),
        P = (0, s.bG)([ei.default], () => ei.default.getCurrentUser()),
        { enableStudyGroup: U } = (0, M.y)(c),
        K = (0, f.Ay)((e) => e.currentlyShown.has(o.M.NAGBAR_NOTICE_CONNECT_PLAYSTATION)),
        [z, Q] = r.useState(!K),
        ea = (0, m.A)(t),
        { analyticsLocations: el } = (0, I.Ay)(g.A.GUILD_HEADER);
    r.useEffect(() => {
        t !== ea && Q(!K);
    }, [t, ea, K]);
    let [es, eo] = (0, f.Ay)(
            (e) => [
                eh.cA.some((t) => e.currentlyShown.has(t.dismissibleContentType)),
                e.currentlyShownGroup.has(e_.m.GUILD_HEADER_TOOLTIPS),
            ],
            l.x,
        ),
        ed = (0, C.A)(c),
        ec = (0, _.useModalsStore)(_.hasAnyModalOpenSelector),
        eE = (0, s.bG)([J.A], () => J.A.hasLayers()),
        ep = (0, x.xr)((e) => e.fullScreenLayers.length > 0),
        eg = (0, s.bG)([W.A], () => W.A.shouldShow(em)),
        eC = (0, R.A)(t),
        ef = c?.features.has(eA.GuildFeatures.HUB) === !0,
        eT = p && c?.features.has(eA.GuildFeatures.DISCOVERABLE) === !0,
        eS = (0, s.bG)(
            [w.A, J.A],
            () => null != c && null != P && p && !J.A.hasLayers() && w.A.shouldShowGuildTemplateDirtyTooltip(t),
        ),
        eN = (0, s.bG)([$.A], () => $.A.getChannel(a)),
        { isPopoutOpen: eO } = (0, v.S)(),
        eL = c?.features.has(eA.GuildFeatures.COMMUNITY) ?? !1,
        ey = er.Ay.isNewUser(P),
        ev = z && !ey;
    (0, b.A)(c);
    let eb = (0, T.JZ)(o.M.PREMIUM_TUTORIAL_SERVER_MENU_TOOLTIP),
        eD = (0, D.A)(t),
        eR = (0, s.bG)([en.A], () => en.A.getChannelId()),
        eP = (0, s.bG)([et.A], () => et.A.desyncedVoiceStatesCount),
        ew = (0, F.A)(t);
    eu.A.useConfig({ guildId: t, location: "guild_sidebar" });
    let eM = (0, G.C$)(t, "GuildSidebar"),
        eU = (0, s.bG)([Z.A], () => Z.A.getGuild(t)?.features.has(eA.GuildFeatures.GAME_SERVERS) ?? !1, [t]),
        ex = (0, j.J)("GuildSidebar"),
        eG = (0, k.S)(t, "GuildSidebar"),
        ek = (0, Y.A)(),
        ej = (0, H.A)(t),
        eV = !1 === ew && ek && null != ej,
        eH = (0, B.A)(t),
        eB = !1 === ew && ek && null != eH,
        eF = [];
    ef && eF.push(o.M.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP),
        eC && eF.push(o.M.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL),
        eT && eF.push(o.M.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL),
        !1 === ew && eF.push(o.M.GUILD_POWERUP_PERKS_COACHMARK),
        eM && !eU && !1 === ew && eF.push(o.M.GAME_SERVER_HOSTING_NEW_PERK_AVAILABLE_COACHMARK),
        eM && ex && !1 === ew && eF.push(o.M.GAME_SERVER_HOSTING_BATCH_RELEASE_V3_COACHMARK),
        eM && !eU && eG && !1 === ew && eF.push(o.M.GAME_SERVER_PRICING_CHANGE_COACHMARK),
        eD && eF.push(o.M.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL);
    let [eY, eK] = (0, S.kn)(eF, e_.m.GUILD_HEADER_TOOLTIPS),
        ez = null == eY,
        [eW, e$] = (0, S.D8)(
            ez && eV ? o.M.BOOST_TO_UNLOCK_COACHMARK : null,
            t,
            { cooldownDurationMs: V.bW, numTimesToRecur: 5 },
            e_.m.GUILD_HEADER_TOOLTIPS,
        ),
        [eq, eX] = (0, S.D8)(
            ez && eW !== o.M.BOOST_TO_UNLOCK_COACHMARK && eB ? o.M.EXPIRING_POWERUP_COACHMARK : null,
            t,
            { cooldownDurationMs: V.mD },
            e_.m.GUILD_HEADER_TOOLTIPS,
        ),
        eQ = r.useMemo(
            () =>
                null != eY
                    ? { contentType: eY, data: null, markAsDismissed: eK }
                    : eW === o.M.BOOST_TO_UNLOCK_COACHMARK && null != ej
                      ? { contentType: eW, data: { featuredPowerup: ej }, markAsDismissed: e$ }
                      : eq === o.M.EXPIRING_POWERUP_COACHMARK && null != eH
                        ? { contentType: eq, data: { featuredExpiringPowerup: eH }, markAsDismissed: eX }
                        : null,
            [eY, eW, eq, ej, eH, eK, e$, eX],
        );
    return (0, i.jsx)(eI, {
        guildId: t,
        hideSelectedChannel: n,
        guild: c,
        scrollToChannel: h,
        selectedChannelId: n ? null : a,
        selectedChannel: eN,
        selectedVoiceChannelId: E,
        voiceStates: A,
        rtcConnectedChannelId: eR,
        rtcDesyncedVoiceStatesCount: eP,
        isUnavailable: O,
        user: P,
        hasChannelNotice: null != ed || es,
        anyLayerOpen: ec || eE || ep,
        showGuildHeaderTutorial: eg,
        showGuildTemplateDirtyTooltip: eS,
        showNewUnreadsBar: eL,
        isHeaderPopoutOpen: eO,
        enableStudyGroup: U,
        isGuildHeaderDismissibleTooltipShown: eo,
        canShowCoachMarkAtBottom: z,
        headerAnalyticsLocations: el,
        isTutorialHighlightDismissed: eb,
        shouldRenderBurstCoachmark: ev,
        guildHeaderContentDescriptor: eQ,
        onFavoriteGuildContextMenu: d,
        hasFavoritesAccess: u,
    });
}
