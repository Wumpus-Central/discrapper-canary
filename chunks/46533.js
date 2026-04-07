n.d(t, { A: () => eg }), n(321073);
var i = n(627968),
    r = n(64700),
    a = n(687498),
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
    f = n(932001),
    C = n(93055),
    T = n(5180),
    N = n(250719),
    S = n(780645),
    x = n(72152),
    v = n(502103),
    b = n(929163),
    y = n(423183),
    O = n(568185),
    L = n(225437),
    R = n(221094),
    P = n(781862),
    D = n(361158),
    M = n(488803),
    j = n(764322),
    w = n(969983),
    U = n(379229),
    G = n(139032),
    k = n(52260),
    V = n(363487),
    B = n(342220),
    H = n(77509),
    F = n(728321),
    Y = n(482361),
    W = n(734057),
    K = n(72314),
    q = n(919638),
    z = n(808728),
    $ = n(71393),
    Q = n(186111),
    X = n(576705),
    Z = n(584569),
    J = n(383501),
    ee = n(287809),
    et = n(927578),
    en = n(885631),
    ei = n(487401),
    er = n(952790),
    ea = n(718996),
    el = n(64084),
    es = n(66933),
    eo = n(846930),
    ed = n(652215),
    ec = n(946960),
    eu = n(49999),
    eA = n(985018),
    eh = n(600001);
let e_ = "server-settings",
    em = { origin: { x: -8, y: -48 }, targetWidth: 40, targetHeight: 40, offset: { x: 0, y: 0 } };
class ep extends r.PureComponent {
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
            (this.historyUnlisten = H.A.addRouteChangeListener(this.handleHistoryChange));
        let { location: e } = H.A.getHistory();
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
        e.stopPropagation(), (0, x.Z)(!t), this.closeAllHeaderNotices();
    };
    handleContextMenu = (e) => {
        let { guild: t, hasFavoritesAccess: r } = this.props;
        if (null != t) {
            if ((0, T.ai)(t.id)) {
                if (!r) return;
                (0, h.L3)(e, async () => {
                    let { default: e } = await n.e("60497").then(n.bind(n, 908424));
                    return (t) => (0, i.jsx)(e, { ...t, navId: "favorites-channel-list-context" });
                });
                return;
            }
            (0, h.L3)(e, async () => {
                let { default: e } = await n.e("10758").then(n.bind(n, 455557));
                return (n) => (0, i.jsx)(e, { ...n, guild: t });
            });
        }
    };
    handleHeaderContextMenu = (e) => {
        let { guild: t } = this.props;
        if (null != t) {
            if ((0, T.ai)(t.id)) return void this.props.onFavoriteGuildContextMenu(e);
            (0, h.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("43600"),
                    n.e("68587"),
                    n.e("63379"),
                    n.e("56026"),
                    n.e("16301"),
                    n.e("22191"),
                    n.e("25961"),
                    n.e("91872"),
                    n.e("35894"),
                    n.e("50796"),
                    n.e("94253"),
                    n.e("8458"),
                    n.e("11810"),
                    n.e("85200"),
                    n.e("54469"),
                    n.e("52191"),
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
        let e = (0, I.k8)(o.M.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP),
            t = this.props.guild?.features.has(ed.GuildFeatures.HUB);
        !e && t && (0, I.Dr)(o.M.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP, { dismissAction: eu.i.AUTO });
    };
    handleCloseSubscribeTooltip = () => {
        this.showTimeout.stop(),
            this.state.shouldShowSubscribeTooltip && this.setState({ shouldShowSubscribeTooltip: !1 });
    };
    handleCloseTemplateDirtyTooltip = () => {
        let { guild: e, showGuildTemplateDirtyTooltip: t } = this.props;
        null != e && t && O.A.hideGuildTemplateDirtyTooltip(e.id);
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
        let { guild: t, guildHeaderContentDescriptor: n } = this.props;
        return null == t || null == n
            ? this.renderGuildHeaderDropdownButton(e)
            : (0, i.jsx)(ea.A, {
                  contentDescriptor: n,
                  guild: t,
                  renderGuildHeaderDropdownButton: () => this.renderGuildHeaderDropdownButton(e),
              });
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
                  children: (0, i.jsx)(F.A, {
                      tutorialId: e_,
                      position: "bottom",
                      inlineSpecs: em,
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
                                title: eA.intl.string(eA.t.Rk2RJk),
                                body: eA.intl.string(eA.t.sFSrFH),
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
                                title: eA.intl.string(eA.t.Q3qa4x),
                                body: eA.intl.string(eA.t.UyHD4O),
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
                          (0, x.Z)(!1);
                      },
                      spacing: 4,
                      children: (r) => {
                          let { onClick: a, ...l } = r;
                          return (0, i.jsx)(er.Ay, {
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
            i = null != t && (0, en.A)(t);
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
            return (0, i.jsx)(eo.A, { withBannerPadding: null != t && null != this.getGuildBannerHash() });
        {
            if (t.features.has(ed.GuildFeatures.HUB) && !r)
                return (0, i.jsx)("div", {
                    className: eh.r0,
                    children: (0, i.jsx)(P.A, { guild: t, channel: n ?? z.Ay.getDefaultChannel(t.id) }),
                });
            let e = (0, T.ai)(t.id) ? ei.T : ei.B;
            return (0, i.jsx)(e, {
                guild: t,
                ...a,
                guildBanner: this.getGuildBannerHash(),
                hasGuildSubheader: this.state.hasGuildSubheader,
                onScroll:
                    null != t && (null != this.getGuildBannerHash() || (0, en.A)(t)) ? this.pinBannerOrGuildInfo : null,
            });
        }
    }
    render() {
        let { guild: e } = this.props,
            t = (0, T.YC)(e);
        return (0, i.jsxs)("nav", {
            className: eh.kL,
            onContextMenu: this.handleContextMenu,
            "aria-label": eA.intl.formatToPlainString(eA.t.nj5gAZ, { guildName: t ?? "" }),
            children: [
                null != e && this.renderGuildHeader(this.state.hasGuildSubheader),
                null != e &&
                    (0, i.jsx)(el.A, { guild: e, setHasSubheader: (e) => this.setState({ hasGuildSubheader: e }) }),
                this.renderChannelList(),
            ],
        });
    }
}
function eg(e) {
    let { guildId: t, hideSelectedChannel: n, selectedChannelId: a } = e,
        d = (0, S.$)("favorite-guild-header-context"),
        { hasAccess: c } = (0, C.TW)("ConnectedGuildSidebar"),
        A = (0, s.bG)([$.A], () => $.A.getGuild(t)),
        h = (0, N.A)(t),
        T = (0, s.bG)([K.A], () => K.A.getGuildDimensions(t).scrollTo),
        O = (0, s.bG)([J.A], () => J.A.getChannelId()),
        P = (0, s.bG)([X.A], () => X.A.can(ed.xBc.MANAGE_GUILD, A)),
        H = (0, s.bG)([q.A], () => q.A.isUnavailable(t)),
        F = (0, s.bG)([ee.default], () => ee.default.getCurrentUser()),
        { enableStudyGroup: z } = (0, R.y)(A),
        en = (0, E.Ay)((e) => e.currentlyShown.has(o.M.NAGBAR_NOTICE_CONNECT_PLAYSTATION)),
        [ei, er] = r.useState(!en),
        ea = (0, _.A)(t),
        { analyticsLocations: el } = (0, p.Ay)(m.A.GUILD_HEADER);
    r.useEffect(() => {
        t !== ea && er(!en);
    }, [t, ea, en]);
    let [eo, eA] = (0, E.Ay)(
            (e) => [
                ec.cA.some((t) => e.currentlyShown.has(t.dismissibleContentType)),
                e.currentlyShownGroup.has(eu.m.GUILD_HEADER_TOOLTIPS),
            ],
            l.x,
        ),
        eh = (0, g.A)(A),
        em = (0, u.red)(u.DXt),
        eg = (0, s.bG)([Q.A], () => Q.A.hasLayers()),
        eE = (0, D.xr)((e) => e.fullScreenLayers.length > 0),
        eI = (0, s.bG)([Y.A], () => Y.A.shouldShow(e_)),
        ef = (0, y.A)(t),
        eC = A?.features.has(ed.GuildFeatures.HUB) === !0,
        eT = P && A?.features.has(ed.GuildFeatures.DISCOVERABLE) === !0,
        eN = (0, s.bG)(
            [L.A, Q.A],
            () => null != A && null != F && P && !Q.A.hasLayers() && L.A.shouldShowGuildTemplateDirtyTooltip(t),
        ),
        eS = (0, s.bG)([W.A], () => W.A.getChannel(a)),
        { isPopoutOpen: ex } = (0, x.S)(),
        ev = A?.features.has(ed.GuildFeatures.COMMUNITY) ?? !1,
        eb = et.Ay.isNewUser(F),
        ey = ei && !eb;
    (0, v.A)(A);
    let eO = (0, I.JZ)(o.M.PREMIUM_TUTORIAL_SERVER_MENU_TOOLTIP),
        eL = (0, b.A)(t),
        eR = (0, s.bG)([J.A], () => J.A.getChannelId()),
        eP = (0, s.bG)([Z.A], () => Z.A.desyncedVoiceStatesCount),
        eD = (0, V.A)(t);
    es.A.useConfig({ guildId: t, location: "guild_sidebar" });
    let eM = (0, M.C$)(t, "GuildSidebar"),
        ej = (0, s.bG)([$.A], () => $.A.getGuild(t)?.features.has(ed.GuildFeatures.GAME_SERVERS) ?? !1, [t]),
        ew = (0, w.J)("GuildSidebar"),
        eU = (0, j.S)(t, "GuildSidebar"),
        eG = (0, B.A)(),
        ek = (0, G.A)(t),
        eV = !1 === eD && eG && null != ek,
        eB = (0, k.A)(t),
        eH = !1 === eD && eG && null != eB,
        eF = [];
    eC && eF.push(o.M.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP),
        ef && eF.push(o.M.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL),
        eT && eF.push(o.M.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL),
        !1 === eD && eF.push(o.M.GUILD_POWERUP_PERKS_COACHMARK),
        eM && !ej && !1 === eD && eF.push(o.M.GAME_SERVER_HOSTING_NEW_PERK_AVAILABLE_COACHMARK),
        eM && ew && !1 === eD && eF.push(o.M.GAME_SERVER_HOSTING_BATCH_RELEASE_V3_COACHMARK),
        eM && !ej && eU && !1 === eD && eF.push(o.M.GAME_SERVER_PRICING_CHANGE_COACHMARK),
        eL && eF.push(o.M.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL);
    let [eY, eW] = (0, f.kn)(eF, eu.m.GUILD_HEADER_TOOLTIPS),
        eK = null == eY,
        [eq, ez] = (0, f.D8)(
            eK && eV ? o.M.BOOST_TO_UNLOCK_COACHMARK : null,
            t,
            { cooldownDurationMs: U.bW, numTimesToRecur: 5 },
            eu.m.GUILD_HEADER_TOOLTIPS,
        ),
        [e$, eQ] = (0, f.D8)(
            eK && eq !== o.M.BOOST_TO_UNLOCK_COACHMARK && eH ? o.M.EXPIRING_POWERUP_COACHMARK : null,
            t,
            { cooldownDurationMs: U.mD },
            eu.m.GUILD_HEADER_TOOLTIPS,
        ),
        eX = r.useMemo(
            () =>
                null != eY
                    ? { contentType: eY, data: null, markAsDismissed: eW }
                    : eq === o.M.BOOST_TO_UNLOCK_COACHMARK && null != ek
                      ? { contentType: eq, data: { featuredPowerup: ek }, markAsDismissed: ez }
                      : e$ === o.M.EXPIRING_POWERUP_COACHMARK && null != eB
                        ? { contentType: e$, data: { featuredExpiringPowerup: eB }, markAsDismissed: eQ }
                        : null,
            [eY, eq, e$, ek, eB, eW, ez, eQ],
        );
    return (0, i.jsx)(ep, {
        guildId: t,
        hideSelectedChannel: n,
        guild: A,
        scrollToChannel: T,
        selectedChannelId: n ? null : a,
        selectedChannel: eS,
        selectedVoiceChannelId: O,
        voiceStates: h,
        rtcConnectedChannelId: eR,
        rtcDesyncedVoiceStatesCount: eP,
        isUnavailable: H,
        user: F,
        hasChannelNotice: null != eh || eo,
        anyLayerOpen: em || eg || eE,
        showGuildHeaderTutorial: eI,
        showGuildTemplateDirtyTooltip: eN,
        showNewUnreadsBar: ev,
        isHeaderPopoutOpen: ex,
        enableStudyGroup: z,
        isGuildHeaderDismissibleTooltipShown: eA,
        canShowCoachMarkAtBottom: ei,
        headerAnalyticsLocations: el,
        isTutorialHighlightDismissed: eO,
        shouldRenderBurstCoachmark: ey,
        guildHeaderContentDescriptor: eX,
        onFavoriteGuildContextMenu: d,
        hasFavoritesAccess: c,
    });
}
