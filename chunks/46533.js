n.d(t, { A: () => em }), n(321073);
var i = n(627968),
    a = n(64700),
    r = n(497766),
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
    g = n(688810),
    p = n(665037),
    E = n(771781),
    I = n(826673),
    f = n(932001),
    C = n(5180),
    T = n(250719),
    N = n(780645),
    S = n(72152),
    x = n(502103),
    v = n(929163),
    y = n(423183),
    b = n(568185),
    O = n(225437),
    L = n(221094),
    R = n(781862),
    P = n(361158),
    D = n(488803),
    M = n(764322),
    j = n(379229),
    w = n(139032),
    U = n(52260),
    G = n(363487),
    k = n(342220),
    V = n(77509),
    B = n(728321),
    H = n(482361),
    F = n(734057),
    Y = n(72314),
    W = n(919638),
    K = n(808728),
    q = n(71393),
    z = n(186111),
    $ = n(576705),
    Q = n(584569),
    X = n(383501),
    Z = n(287809),
    J = n(927578),
    ee = n(885631),
    et = n(487401),
    en = n(952790),
    ei = n(718996),
    ea = n(64084),
    er = n(846930),
    el = n(652215),
    es = n(946960),
    eo = n(49999),
    ed = n(349828),
    ec = n(985018),
    eu = n(175739);
let eA = "server-settings",
    eh = { origin: { x: -8, y: -48 }, targetWidth: 40, targetHeight: 40, offset: { x: 0, y: 0 } };
class e_ extends a.PureComponent {
    historyUnlisten = () => {};
    guildHeaderRef = a.createRef();
    guildHeaderDropdownButtonRef = a.createRef();
    static getDerivedStateFromProps(e) {
        let { guild: t, hasChannelNotice: n } = e;
        return null == t || null == t.banner || n ? { renderBanner: !1, bannerVisible: !1 } : null;
    }
    showTimeout = new d.Ep();
    state = {
        controller: new r.Controller({ value: 1, immediate: !0 }),
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
            (this.historyUnlisten = V.A.addRouteChangeListener(this.handleHistoryChange));
        let { location: e } = V.A.getHistory();
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
        null != t &&
            t.id !== ed.Vc &&
            (0, h.L3)(e, async () => {
                let { default: e } = await n.e("10758").then(n.bind(n, 455557));
                return (n) => (0, i.jsx)(e, { ...n, guild: t });
            });
    };
    handleHeaderContextMenu = (e) => {
        let { guild: t } = this.props;
        if (null != t) {
            if (t.id === ed.Vc) return void this.props.onFavoriteGuildContextMenu(e);
            (0, h.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("43600"),
                    n.e("68587"),
                    n.e("63379"),
                    n.e("56026"),
                    n.e("16301"),
                    n.e("22191"),
                    n.e("25961"),
                    n.e("96760"),
                    n.e("35894"),
                    n.e("50796"),
                    n.e("8458"),
                    n.e("11810"),
                    n.e("52848"),
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
            t = this.props.guild?.features.has(el.GuildFeatures.HUB);
        !e && t && (0, I.Dr)(o.M.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP, { dismissAction: eo.i.AUTO });
    };
    handleCloseSubscribeTooltip = () => {
        this.showTimeout.stop(),
            this.state.shouldShowSubscribeTooltip && this.setState({ shouldShowSubscribeTooltip: !1 });
    };
    handleCloseTemplateDirtyTooltip = () => {
        let { guild: e, showGuildTemplateDirtyTooltip: t } = this.props;
        null != e && t && b.A.hideGuildTemplateDirtyTooltip(e.id);
    };
    renderMenuPopout = async () => {
        let { default: e } = await n.e("19418").then(n.bind(n, 222785));
        return (t) => {
            let { closePopout: n } = t,
                { guild: a } = this.props;
            return null != a && (0, i.jsx)(e, { onClose: n, guild: a });
        };
    };
    renderGuildHeaderUpsellPopout = (e) => {
        let { guild: t, guildHeaderContentDescriptor: n } = this.props;
        return null == t || null == n
            ? this.renderGuildHeaderDropdownButton(e)
            : (0, i.jsx)(ei.A, {
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
        let { showGuildTemplateDirtyTooltip: t, showGuildHeaderTutorial: n, anyLayerOpen: a } = this.props,
            { shouldShowSubscribeTooltip: r } = this.state;
        return n
            ? (0, i.jsx)("div", {
                  onClick: (t) => (e ? null : t.stopPropagation()),
                  children: (0, i.jsx)(B.A, {
                      tutorialId: eA,
                      position: "bottom",
                      inlineSpecs: eh,
                      children: this.renderGuildHeaderDropdownButton(e),
                  }),
              })
            : t
              ? (0, i.jsxs)(i.Fragment, {
                    children: [
                        this.renderGuildHeaderDropdownButton(e),
                        !e &&
                            !a &&
                            (0, i.jsx)(c.AM, {
                                targetElementRef: this.guildHeaderDropdownButtonRef,
                                title: ec.intl.string(ec.t.Rk2RJk),
                                body: ec.intl.string(ec.t.sFSrFH),
                                onRequestClose: this.handleCloseTemplateDirtyTooltip,
                                position: "bottom",
                                caretConfig: { align: "center" },
                            }),
                    ],
                })
              : a || e
                ? this.renderGuildHeaderDropdownButton(e)
                : r
                  ? (0, i.jsxs)(i.Fragment, {
                        children: [
                            this.renderGuildHeaderDropdownButton(e),
                            (0, i.jsx)(c.AM, {
                                targetElementRef: this.guildHeaderDropdownButtonRef,
                                title: ec.intl.string(ec.t.Q3qa4x),
                                body: ec.intl.string(ec.t.UyHD4O),
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
                showGuildHeaderTutorial: a,
                showGuildTemplateDirtyTooltip: r,
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
            _ = a || r || l;
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
                          (0, S.Z)(!1);
                      },
                      spacing: 4,
                      children: (a) => {
                          let { onClick: r, ...l } = a;
                          return (0, i.jsx)(en.Ay, {
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
            i = null != t && (0, ee.A)(t);
        null != t && (n || i) && (n ? this.setAnimatedValueForBanner(e) : this.setAnimatedValueForGuildInfo(e));
    }
    setAnimatedValueForBanner = (e) => {
        let {
            renderBanner: t,
            communityInfoVisible: n,
            bannerVisible: i,
            bannerVisibleHeight: a,
            controller: r,
        } = this.state;
        ((e >= 88 && i) || (e < 88 && !i)) && (i = !i),
            ((e >= 88 && !t) || (e < 88 && t)) && (t = !t),
            (a = Math.max(88 - e, 0)),
            (n = i),
            (t !== this.state.renderBanner ||
                i !== this.state.bannerVisible ||
                a !== this.state.bannerVisibleHeight ||
                n !== this.state.communityInfoVisible) &&
                this.setState({ renderBanner: t, bannerVisible: i, bannerVisibleHeight: a, communityInfoVisible: n }),
            r.update({ value: Math.min(1, Math.max(0, 1 - e / 88)), immediate: !0 }).start();
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
        let { isUnavailable: e, guild: t, selectedChannel: n, enableStudyGroup: a, ...r } = this.props;
        if (e || null == t)
            return (0, i.jsx)(er.A, { withBannerPadding: null != t && null != this.getGuildBannerHash() });
        {
            if (t.features.has(el.GuildFeatures.HUB) && !a)
                return (0, i.jsx)("div", {
                    className: eu.r0,
                    children: (0, i.jsx)(R.A, { guild: t, channel: n ?? K.Ay.getDefaultChannel(t.id) }),
                });
            let e = t.id === ed.Vc ? et.T : et.B;
            return (0, i.jsx)(e, {
                guild: t,
                ...r,
                guildBanner: this.getGuildBannerHash(),
                hasGuildSubheader: this.state.hasGuildSubheader,
                onScroll:
                    null != t && (null != this.getGuildBannerHash() || (0, ee.A)(t)) ? this.pinBannerOrGuildInfo : null,
            });
        }
    }
    render() {
        let { guild: e } = this.props,
            t = (0, C.YC)(e);
        return (0, i.jsxs)("nav", {
            className: eu.kL,
            onContextMenu: this.handleContextMenu,
            "aria-label": ec.intl.formatToPlainString(ec.t.nj5gAZ, { guildName: t ?? "" }),
            children: [
                null != e && this.renderGuildHeader(this.state.hasGuildSubheader),
                null != e &&
                    (0, i.jsx)(ea.A, { guild: e, setHasSubheader: (e) => this.setState({ hasGuildSubheader: e }) }),
                this.renderChannelList(),
            ],
        });
    }
}
function em(e) {
    let { guildId: t, hideSelectedChannel: n, selectedChannelId: r } = e,
        d = (0, N.$)("favorite-guild-header-context"),
        c = (0, s.bG)([q.A], () => q.A.getGuild(t)),
        A = (0, T.A)(t),
        h = (0, s.bG)([Y.A], () => Y.A.getGuildDimensions(t).scrollTo),
        C = (0, s.bG)([X.A], () => X.A.getChannelId()),
        b = (0, s.bG)([$.A], () => $.A.can(el.xBc.MANAGE_GUILD, c)),
        R = (0, s.bG)([W.A], () => W.A.isUnavailable(t)),
        V = (0, s.bG)([Z.default], () => Z.default.getCurrentUser()),
        { enableStudyGroup: B } = (0, L.y)(c),
        K = (0, E.Ay)((e) => e.currentlyShown.has(o.M.NAGBAR_NOTICE_CONNECT_PLAYSTATION)),
        [ee, et] = a.useState(!K),
        en = (0, _.A)(t),
        { analyticsLocations: ei } = (0, g.Ay)(m.A.GUILD_HEADER);
    a.useEffect(() => {
        t !== en && et(!K);
    }, [t, en, K]);
    let [ea, er] = (0, E.Ay)(
            (e) => [
                es.cA.some((t) => e.currentlyShown.has(t.dismissibleContentType)),
                e.currentlyShownGroup.has(eo.m.GUILD_HEADER_TOOLTIPS),
            ],
            l.x,
        ),
        ed = (0, p.A)(c),
        ec = (0, u.red)(u.DXt),
        eu = (0, s.bG)([z.A], () => z.A.hasLayers()),
        eh = (0, P.xr)((e) => e.fullScreenLayers.length > 0),
        em = (0, s.bG)([H.A], () => H.A.shouldShow(eA)),
        eg = (0, y.A)(t),
        ep = c?.features.has(el.GuildFeatures.HUB) === !0,
        eE = b && c?.features.has(el.GuildFeatures.DISCOVERABLE) === !0,
        eI = (0, s.bG)(
            [O.A, z.A],
            () => null != c && null != V && b && !z.A.hasLayers() && O.A.shouldShowGuildTemplateDirtyTooltip(t),
        ),
        ef = (0, s.bG)([F.A], () => F.A.getChannel(r)),
        { isPopoutOpen: eC } = (0, S.S)(),
        eT = c?.features.has(el.GuildFeatures.COMMUNITY) ?? !1,
        eN = J.Ay.isNewUser(V),
        eS = ee && !eN;
    (0, x.A)(c);
    let ex = (0, I.JZ)(o.M.PREMIUM_TUTORIAL_SERVER_MENU_TOOLTIP),
        ev = (0, v.A)(t),
        ey = (0, s.bG)([X.A], () => X.A.getChannelId()),
        eb = (0, s.bG)([Q.A], () => Q.A.desyncedVoiceStatesCount),
        eO = (0, G.A)(t),
        eL = (0, D.C$)(t, "GuildSidebar"),
        eR = (0, s.bG)([q.A], () => q.A.getGuild(t)?.features.has(el.GuildFeatures.GAME_SERVERS) ?? !1, [t]),
        eP = (0, M.S)(t, "GuildSidebar"),
        eD = (0, k.A)(),
        eM = (0, w.A)(t),
        ej = !1 === eO && eD && null != eM,
        ew = (0, U.A)(t),
        eU = !1 === eO && eD && null != ew,
        eG = [];
    ep && eG.push(o.M.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP),
        eg && eG.push(o.M.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL),
        eE && eG.push(o.M.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL),
        !1 === eO && eG.push(o.M.GUILD_POWERUP_PERKS_COACHMARK),
        eL && !eR && !1 === eO && eG.push(o.M.GAME_SERVER_HOSTING_NEW_PERK_AVAILABLE_COACHMARK),
        eL && !1 === eO && eG.push(o.M.GAME_SERVER_HOSTING_BATCH_RELEASE_V2_COACHMARK),
        eL && !eR && eP && !1 === eO && eG.push(o.M.GAME_SERVER_PRICING_CHANGE_COACHMARK),
        ev && eG.push(o.M.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL);
    let [ek, eV] = (0, f.kn)(eG, eo.m.GUILD_HEADER_TOOLTIPS),
        eB = null == ek,
        [eH, eF] = (0, f.D8)(
            eB && ej ? o.M.BOOST_TO_UNLOCK_COACHMARK : null,
            t,
            { cooldownDurationMs: j.bW, numTimesToRecur: 5 },
            eo.m.GUILD_HEADER_TOOLTIPS,
        ),
        [eY, eW] = (0, f.D8)(
            eB && eH !== o.M.BOOST_TO_UNLOCK_COACHMARK && eU ? o.M.EXPIRING_POWERUP_COACHMARK : null,
            t,
            { cooldownDurationMs: j.mD },
            eo.m.GUILD_HEADER_TOOLTIPS,
        ),
        eK = a.useMemo(
            () =>
                null != ek
                    ? { contentType: ek, data: null, markAsDismissed: eV }
                    : eH === o.M.BOOST_TO_UNLOCK_COACHMARK && null != eM
                      ? { contentType: eH, data: { featuredPowerup: eM }, markAsDismissed: eF }
                      : eY === o.M.EXPIRING_POWERUP_COACHMARK && null != ew
                        ? { contentType: eY, data: { featuredExpiringPowerup: ew }, markAsDismissed: eW }
                        : null,
            [ek, eH, eY, eM, ew, eV, eF, eW],
        );
    return (0, i.jsx)(e_, {
        guildId: t,
        hideSelectedChannel: n,
        guild: c,
        scrollToChannel: h,
        selectedChannelId: n ? null : r,
        selectedChannel: ef,
        selectedVoiceChannelId: C,
        voiceStates: A,
        rtcConnectedChannelId: ey,
        rtcDesyncedVoiceStatesCount: eb,
        isUnavailable: R,
        user: V,
        hasChannelNotice: null != ed || ea,
        anyLayerOpen: ec || eu || eh,
        showGuildHeaderTutorial: em,
        showGuildTemplateDirtyTooltip: eI,
        showNewUnreadsBar: eT,
        isHeaderPopoutOpen: eC,
        enableStudyGroup: B,
        isGuildHeaderDismissibleTooltipShown: er,
        canShowCoachMarkAtBottom: ee,
        headerAnalyticsLocations: ei,
        isTutorialHighlightDismissed: ex,
        shouldRenderBurstCoachmark: eS,
        guildHeaderContentDescriptor: eK,
        onFavoriteGuildContextMenu: d,
    });
}
