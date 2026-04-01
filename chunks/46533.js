n.d(t, { A: () => ep }), n(321073);
var i = n(627968),
    l = n(64700),
    a = n(773690),
    r = n(942381),
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
    C = n(5180),
    T = n(250719),
    N = n(780645),
    S = n(72152),
    x = n(502103),
    v = n(929163),
    b = n(423183),
    y = n(568185),
    O = n(225437),
    L = n(221094),
    R = n(781862),
    P = n(361158),
    D = n(488803),
    M = n(764322),
    j = n(969983),
    w = n(379229),
    U = n(139032),
    G = n(52260),
    k = n(363487),
    V = n(342220),
    B = n(77509),
    H = n(728321),
    F = n(482361),
    Y = n(734057),
    W = n(72314),
    K = n(919638),
    q = n(808728),
    z = n(71393),
    $ = n(186111),
    Q = n(576705),
    X = n(584569),
    Z = n(383501),
    J = n(287809),
    ee = n(927578),
    et = n(885631),
    en = n(487401),
    ei = n(952790),
    el = n(718996),
    ea = n(64084),
    er = n(66933),
    es = n(846930),
    eo = n(652215),
    ed = n(946960),
    ec = n(49999),
    eu = n(985018),
    eA = n(600001);
let eh = "server-settings",
    e_ = { origin: { x: -8, y: -48 }, targetWidth: 40, targetHeight: 40, offset: { x: 0, y: 0 } };
class em extends l.PureComponent {
    historyUnlisten = () => {};
    guildHeaderRef = l.createRef();
    guildHeaderDropdownButtonRef = l.createRef();
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
            (this.historyUnlisten = B.A.addRouteChangeListener(this.handleHistoryChange));
        let { location: e } = B.A.getHistory();
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
        e.stopPropagation(), (0, S.Z)(!t), this.closeAllHeaderNotices();
    };
    handleContextMenu = (e) => {
        let { guild: t } = this.props;
        if (null != t) {
            if ((0, C.ai)(t.id))
                return void (0, h.L3)(e, async () => {
                    let { default: e } = await n.e("60497").then(n.bind(n, 908424));
                    return (t) => (0, i.jsx)(e, { ...t, navId: "favorites-channel-list-context" });
                });
            (0, h.L3)(e, async () => {
                let { default: e } = await n.e("10758").then(n.bind(n, 455557));
                return (n) => (0, i.jsx)(e, { ...n, guild: t });
            });
        }
    };
    handleHeaderContextMenu = (e) => {
        let { guild: t } = this.props;
        if (null != t) {
            if ((0, C.ai)(t.id)) return void this.props.onFavoriteGuildContextMenu(e);
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
                    n.e("8458"),
                    n.e("11810"),
                    n.e("34656"),
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
            t = this.props.guild?.features.has(eo.GuildFeatures.HUB);
        !e && t && (0, I.Dr)(o.M.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP, { dismissAction: ec.i.AUTO });
    };
    handleCloseSubscribeTooltip = () => {
        this.showTimeout.stop(),
            this.state.shouldShowSubscribeTooltip && this.setState({ shouldShowSubscribeTooltip: !1 });
    };
    handleCloseTemplateDirtyTooltip = () => {
        let { guild: e, showGuildTemplateDirtyTooltip: t } = this.props;
        null != e && t && y.A.hideGuildTemplateDirtyTooltip(e.id);
    };
    renderMenuPopout = async () => {
        let { default: e } = await n.e("19418").then(n.bind(n, 222785));
        return (t) => {
            let { closePopout: n } = t,
                { guild: l } = this.props;
            return null != l && (0, i.jsx)(e, { onClose: n, guild: l });
        };
    };
    renderGuildHeaderUpsellPopout = (e) => {
        let { guild: t, guildHeaderContentDescriptor: n } = this.props;
        return null == t || null == n
            ? this.renderGuildHeaderDropdownButton(e)
            : (0, i.jsx)(el.A, {
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
        let { showGuildTemplateDirtyTooltip: t, showGuildHeaderTutorial: n, anyLayerOpen: l } = this.props,
            { shouldShowSubscribeTooltip: a } = this.state;
        return n
            ? (0, i.jsx)("div", {
                  onClick: (t) => (e ? null : t.stopPropagation()),
                  children: (0, i.jsx)(H.A, {
                      tutorialId: eh,
                      position: "bottom",
                      inlineSpecs: e_,
                      children: this.renderGuildHeaderDropdownButton(e),
                  }),
              })
            : t
              ? (0, i.jsxs)(i.Fragment, {
                    children: [
                        this.renderGuildHeaderDropdownButton(e),
                        !e &&
                            !l &&
                            (0, i.jsx)(c.AM, {
                                targetElementRef: this.guildHeaderDropdownButtonRef,
                                title: eu.intl.string(eu.t.Rk2RJk),
                                body: eu.intl.string(eu.t.sFSrFH),
                                onRequestClose: this.handleCloseTemplateDirtyTooltip,
                                position: "bottom",
                                caretConfig: { align: "center" },
                            }),
                    ],
                })
              : l || e
                ? this.renderGuildHeaderDropdownButton(e)
                : a
                  ? (0, i.jsxs)(i.Fragment, {
                        children: [
                            this.renderGuildHeaderDropdownButton(e),
                            (0, i.jsx)(c.AM, {
                                targetElementRef: this.guildHeaderDropdownButtonRef,
                                title: eu.intl.string(eu.t.Q3qa4x),
                                body: eu.intl.string(eu.t.UyHD4O),
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
                showGuildHeaderTutorial: l,
                showGuildTemplateDirtyTooltip: a,
                isGuildHeaderDismissibleTooltipShown: r,
                headerAnalyticsLocations: s,
            } = this.props,
            {
                controller: o,
                renderBanner: d,
                bannerVisible: c,
                bannerVisibleHeight: A,
                communityInfoVisible: h,
            } = this.state,
            _ = l || a || r;
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
                          (0, S.Z)(!1);
                      },
                      spacing: 4,
                      children: (l) => {
                          let { onClick: a, ...r } = l;
                          return (0, i.jsx)(ei.Ay, {
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
                              ...r,
                              children: this.renderGuildHeaderNotices(n),
                          });
                      },
                  }),
              });
    }
    setAnimatedValue(e) {
        let { guild: t } = this.props,
            n = null != this.getGuildBannerHash(),
            i = null != t && (0, et.A)(t);
        null != t && (n || i) && (n ? this.setAnimatedValueForBanner(e) : this.setAnimatedValueForGuildInfo(e));
    }
    setAnimatedValueForBanner = (e) => {
        let {
            renderBanner: t,
            communityInfoVisible: n,
            bannerVisible: i,
            bannerVisibleHeight: l,
            controller: a,
        } = this.state;
        ((e >= 88 && i) || (e < 88 && !i)) && (i = !i),
            ((e >= 88 && !t) || (e < 88 && t)) && (t = !t),
            (l = Math.max(88 - e, 0)),
            (n = i),
            (t !== this.state.renderBanner ||
                i !== this.state.bannerVisible ||
                l !== this.state.bannerVisibleHeight ||
                n !== this.state.communityInfoVisible) &&
                this.setState({ renderBanner: t, bannerVisible: i, bannerVisibleHeight: l, communityInfoVisible: n }),
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
        let { isUnavailable: e, guild: t, selectedChannel: n, enableStudyGroup: l, ...a } = this.props;
        if (e || null == t)
            return (0, i.jsx)(es.A, { withBannerPadding: null != t && null != this.getGuildBannerHash() });
        {
            if (t.features.has(eo.GuildFeatures.HUB) && !l)
                return (0, i.jsx)("div", {
                    className: eA.r0,
                    children: (0, i.jsx)(R.A, { guild: t, channel: n ?? q.Ay.getDefaultChannel(t.id) }),
                });
            let e = (0, C.ai)(t.id) ? en.T : en.B;
            return (0, i.jsx)(e, {
                guild: t,
                ...a,
                guildBanner: this.getGuildBannerHash(),
                hasGuildSubheader: this.state.hasGuildSubheader,
                onScroll:
                    null != t && (null != this.getGuildBannerHash() || (0, et.A)(t)) ? this.pinBannerOrGuildInfo : null,
            });
        }
    }
    render() {
        let { guild: e } = this.props,
            t = (0, C.YC)(e);
        return (0, i.jsxs)("nav", {
            className: eA.kL,
            onContextMenu: this.handleContextMenu,
            "aria-label": eu.intl.formatToPlainString(eu.t.nj5gAZ, { guildName: t ?? "" }),
            children: [
                null != e && this.renderGuildHeader(this.state.hasGuildSubheader),
                null != e &&
                    (0, i.jsx)(ea.A, { guild: e, setHasSubheader: (e) => this.setState({ hasGuildSubheader: e }) }),
                this.renderChannelList(),
            ],
        });
    }
}
function ep(e) {
    let { guildId: t, hideSelectedChannel: n, selectedChannelId: a } = e,
        d = (0, N.$)("favorite-guild-header-context"),
        c = (0, s.bG)([z.A], () => z.A.getGuild(t)),
        A = (0, T.A)(t),
        h = (0, s.bG)([W.A], () => W.A.getGuildDimensions(t).scrollTo),
        C = (0, s.bG)([Z.A], () => Z.A.getChannelId()),
        y = (0, s.bG)([Q.A], () => Q.A.can(eo.xBc.MANAGE_GUILD, c)),
        R = (0, s.bG)([K.A], () => K.A.isUnavailable(t)),
        B = (0, s.bG)([J.default], () => J.default.getCurrentUser()),
        { enableStudyGroup: H } = (0, L.y)(c),
        q = (0, E.Ay)((e) => e.currentlyShown.has(o.M.NAGBAR_NOTICE_CONNECT_PLAYSTATION)),
        [et, en] = l.useState(!q),
        ei = (0, _.A)(t),
        { analyticsLocations: el } = (0, p.Ay)(m.A.GUILD_HEADER);
    l.useEffect(() => {
        t !== ei && en(!q);
    }, [t, ei, q]);
    let [ea, es] = (0, E.Ay)(
            (e) => [
                ed.cA.some((t) => e.currentlyShown.has(t.dismissibleContentType)),
                e.currentlyShownGroup.has(ec.m.GUILD_HEADER_TOOLTIPS),
            ],
            r.x,
        ),
        eu = (0, g.A)(c),
        eA = (0, u.red)(u.DXt),
        e_ = (0, s.bG)([$.A], () => $.A.hasLayers()),
        ep = (0, P.xr)((e) => e.fullScreenLayers.length > 0),
        eg = (0, s.bG)([F.A], () => F.A.shouldShow(eh)),
        eE = (0, b.A)(t),
        eI = c?.features.has(eo.GuildFeatures.HUB) === !0,
        ef = y && c?.features.has(eo.GuildFeatures.DISCOVERABLE) === !0,
        eC = (0, s.bG)(
            [O.A, $.A],
            () => null != c && null != B && y && !$.A.hasLayers() && O.A.shouldShowGuildTemplateDirtyTooltip(t),
        ),
        eT = (0, s.bG)([Y.A], () => Y.A.getChannel(a)),
        { isPopoutOpen: eN } = (0, S.S)(),
        eS = c?.features.has(eo.GuildFeatures.COMMUNITY) ?? !1,
        ex = ee.Ay.isNewUser(B),
        ev = et && !ex;
    (0, x.A)(c);
    let eb = (0, I.JZ)(o.M.PREMIUM_TUTORIAL_SERVER_MENU_TOOLTIP),
        ey = (0, v.A)(t),
        eO = (0, s.bG)([Z.A], () => Z.A.getChannelId()),
        eL = (0, s.bG)([X.A], () => X.A.desyncedVoiceStatesCount),
        eR = (0, k.A)(t);
    er.A.useConfig({ guildId: t, location: "guild_sidebar" });
    let eP = (0, D.C$)(t, "GuildSidebar"),
        eD = (0, s.bG)([z.A], () => z.A.getGuild(t)?.features.has(eo.GuildFeatures.GAME_SERVERS) ?? !1, [t]),
        eM = (0, j.J)("GuildSidebar"),
        ej = (0, M.S)(t, "GuildSidebar"),
        ew = (0, V.A)(),
        eU = (0, U.A)(t),
        eG = !1 === eR && ew && null != eU,
        ek = (0, G.A)(t),
        eV = !1 === eR && ew && null != ek,
        eB = [];
    eI && eB.push(o.M.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP),
        eE && eB.push(o.M.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL),
        ef && eB.push(o.M.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL),
        !1 === eR && eB.push(o.M.GUILD_POWERUP_PERKS_COACHMARK),
        eP && !eD && !1 === eR && eB.push(o.M.GAME_SERVER_HOSTING_NEW_PERK_AVAILABLE_COACHMARK),
        eP && eM && !1 === eR && eB.push(o.M.GAME_SERVER_HOSTING_BATCH_RELEASE_V3_COACHMARK),
        eP && !eD && ej && !1 === eR && eB.push(o.M.GAME_SERVER_PRICING_CHANGE_COACHMARK),
        ey && eB.push(o.M.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL);
    let [eH, eF] = (0, f.kn)(eB, ec.m.GUILD_HEADER_TOOLTIPS),
        eY = null == eH,
        [eW, eK] = (0, f.D8)(
            eY && eG ? o.M.BOOST_TO_UNLOCK_COACHMARK : null,
            t,
            { cooldownDurationMs: w.bW, numTimesToRecur: 5 },
            ec.m.GUILD_HEADER_TOOLTIPS,
        ),
        [eq, ez] = (0, f.D8)(
            eY && eW !== o.M.BOOST_TO_UNLOCK_COACHMARK && eV ? o.M.EXPIRING_POWERUP_COACHMARK : null,
            t,
            { cooldownDurationMs: w.mD },
            ec.m.GUILD_HEADER_TOOLTIPS,
        ),
        e$ = l.useMemo(
            () =>
                null != eH
                    ? { contentType: eH, data: null, markAsDismissed: eF }
                    : eW === o.M.BOOST_TO_UNLOCK_COACHMARK && null != eU
                      ? { contentType: eW, data: { featuredPowerup: eU }, markAsDismissed: eK }
                      : eq === o.M.EXPIRING_POWERUP_COACHMARK && null != ek
                        ? { contentType: eq, data: { featuredExpiringPowerup: ek }, markAsDismissed: ez }
                        : null,
            [eH, eW, eq, eU, ek, eF, eK, ez],
        );
    return (0, i.jsx)(em, {
        guildId: t,
        hideSelectedChannel: n,
        guild: c,
        scrollToChannel: h,
        selectedChannelId: n ? null : a,
        selectedChannel: eT,
        selectedVoiceChannelId: C,
        voiceStates: A,
        rtcConnectedChannelId: eO,
        rtcDesyncedVoiceStatesCount: eL,
        isUnavailable: R,
        user: B,
        hasChannelNotice: null != eu || ea,
        anyLayerOpen: eA || e_ || ep,
        showGuildHeaderTutorial: eg,
        showGuildTemplateDirtyTooltip: eC,
        showNewUnreadsBar: eS,
        isHeaderPopoutOpen: eN,
        enableStudyGroup: H,
        isGuildHeaderDismissibleTooltipShown: es,
        canShowCoachMarkAtBottom: et,
        headerAnalyticsLocations: el,
        isTutorialHighlightDismissed: eb,
        shouldRenderBurstCoachmark: ev,
        guildHeaderContentDescriptor: e$,
        onFavoriteGuildContextMenu: d,
    });
}
