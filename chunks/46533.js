n.d(t, { A: () => eh }), n(321073);
var i = n(627968),
    r = n(64700),
    l = n(490249),
    a = n(942381),
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
    C = n(250719),
    T = n(780645),
    N = n(72152),
    S = n(502103),
    x = n(929163),
    v = n(423183),
    y = n(568185),
    b = n(225437),
    O = n(221094),
    L = n(781862),
    R = n(361158),
    P = n(488803),
    j = n(379229),
    D = n(139032),
    M = n(52260),
    w = n(363487),
    U = n(342220),
    G = n(77509),
    k = n(728321),
    V = n(482361),
    B = n(734057),
    H = n(72314),
    F = n(919638),
    Y = n(808728),
    W = n(71393),
    q = n(186111),
    K = n(576705),
    z = n(584569),
    $ = n(383501),
    Q = n(287809),
    X = n(927578),
    Z = n(885631),
    J = n(487401),
    ee = n(952790),
    et = n(718996),
    en = n(64084),
    ei = n(846930),
    er = n(652215),
    el = n(946960),
    ea = n(49999),
    es = n(349828),
    eo = n(985018),
    ed = n(175739);
let ec = "server-settings",
    eu = { origin: { x: -8, y: -48 }, targetWidth: 40, targetHeight: 40, offset: { x: 0, y: 0 } };
class eA extends r.PureComponent {
    historyUnlisten = () => {};
    guildHeaderRef = r.createRef();
    guildHeaderDropdownButtonRef = r.createRef();
    static getDerivedStateFromProps(e) {
        let { guild: t, hasChannelNotice: n } = e;
        return null == t || null == t.banner || n ? { renderBanner: !1, bannerVisible: !1 } : null;
    }
    showTimeout = new d.Ep();
    state = {
        controller: new l.Controller({ value: 1, immediate: !0 }),
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
            (this.historyUnlisten = G.A.addRouteChangeListener(this.handleHistoryChange));
        let { location: e } = G.A.getHistory();
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
            t.id !== es.Vc &&
            (0, h.L3)(e, async () => {
                let { default: e } = await n.e("10758").then(n.bind(n, 455557));
                return (n) => (0, i.jsx)(e, { ...n, guild: t });
            });
    };
    handleHeaderContextMenu = (e) => {
        let { guild: t } = this.props;
        if (null != t) {
            if (t.id === es.Vc) return void this.props.onFavoriteGuildContextMenu(e);
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
            t = this.props.guild?.features.has(er.GuildFeatures.HUB);
        !e && t && (0, I.Dr)(o.M.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP, { dismissAction: ea.i.AUTO });
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
                { guild: r } = this.props;
            return null != r && (0, i.jsx)(e, { onClose: n, guild: r });
        };
    };
    renderGuildHeaderUpsellPopout = (e) => {
        let { guild: t, guildHeaderContentDescriptor: n } = this.props;
        return null == t || null == n
            ? this.renderGuildHeaderDropdownButton(e)
            : (0, i.jsx)(et.A, {
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
            { shouldShowSubscribeTooltip: l } = this.state;
        return n
            ? (0, i.jsx)("div", {
                  onClick: (t) => (e ? null : t.stopPropagation()),
                  children: (0, i.jsx)(k.A, {
                      tutorialId: ec,
                      position: "bottom",
                      inlineSpecs: eu,
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
                                title: eo.intl.string(eo.t.Rk2RJk),
                                body: eo.intl.string(eo.t.sFSrFH),
                                onRequestClose: this.handleCloseTemplateDirtyTooltip,
                                position: "bottom",
                                caretConfig: { align: "center" },
                            }),
                    ],
                })
              : r || e
                ? this.renderGuildHeaderDropdownButton(e)
                : l
                  ? (0, i.jsxs)(i.Fragment, {
                        children: [
                            this.renderGuildHeaderDropdownButton(e),
                            (0, i.jsx)(c.AM, {
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
                showGuildHeaderTutorial: r,
                showGuildTemplateDirtyTooltip: l,
                isGuildHeaderDismissibleTooltipShown: a,
                headerAnalyticsLocations: s,
            } = this.props,
            {
                controller: o,
                renderBanner: d,
                bannerVisible: c,
                bannerVisibleHeight: A,
                communityInfoVisible: h,
            } = this.state,
            _ = r || l || a;
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
                          (0, N.Z)(!1);
                      },
                      spacing: 4,
                      children: (r) => {
                          let { onClick: l, ...a } = r;
                          return (0, i.jsx)(ee.Ay, {
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
                              ...a,
                              children: this.renderGuildHeaderNotices(n),
                          });
                      },
                  }),
              });
    }
    setAnimatedValue(e) {
        let { guild: t } = this.props,
            n = null != this.getGuildBannerHash(),
            i = null != t && (0, Z.A)(t);
        null != t && (n || i) && (n ? this.setAnimatedValueForBanner(e) : this.setAnimatedValueForGuildInfo(e));
    }
    setAnimatedValueForBanner = (e) => {
        let {
            renderBanner: t,
            communityInfoVisible: n,
            bannerVisible: i,
            bannerVisibleHeight: r,
            controller: l,
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
            l.update({ value: Math.min(1, Math.max(0, 1 - e / 88)), immediate: !0 }).start();
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
        let { isUnavailable: e, guild: t, selectedChannel: n, enableStudyGroup: r, ...l } = this.props;
        if (e || null == t)
            return (0, i.jsx)(ei.A, { withBannerPadding: null != t && null != this.getGuildBannerHash() });
        {
            if (t.features.has(er.GuildFeatures.HUB) && !r)
                return (0, i.jsx)("div", {
                    className: ed.r0,
                    children: (0, i.jsx)(L.A, { guild: t, channel: n ?? Y.Ay.getDefaultChannel(t.id) }),
                });
            let e = t.id === es.Vc ? J.T : J.B;
            return (0, i.jsx)(e, {
                guild: t,
                ...l,
                guildBanner: this.getGuildBannerHash(),
                hasGuildSubheader: this.state.hasGuildSubheader,
                onScroll:
                    null != t && (null != this.getGuildBannerHash() || (0, Z.A)(t)) ? this.pinBannerOrGuildInfo : null,
            });
        }
    }
    render() {
        let { guild: e } = this.props;
        return (0, i.jsxs)("nav", {
            className: ed.kL,
            onContextMenu: this.handleContextMenu,
            "aria-label": eo.intl.formatToPlainString(eo.t.nj5gAZ, { guildName: e?.name ?? "" }),
            children: [
                null != e && this.renderGuildHeader(this.state.hasGuildSubheader),
                null != e &&
                    (0, i.jsx)(en.A, { guild: e, setHasSubheader: (e) => this.setState({ hasGuildSubheader: e }) }),
                this.renderChannelList(),
            ],
        });
    }
}
function eh(e) {
    let { guildId: t, hideSelectedChannel: n, selectedChannelId: l } = e,
        d = (0, T.$)("favorite-guild-header-context"),
        c = (0, s.bG)([W.A], () => W.A.getGuild(t)),
        A = (0, C.A)(t),
        h = (0, s.bG)([H.A], () => H.A.getGuildDimensions(t).scrollTo),
        y = (0, s.bG)([$.A], () => $.A.getChannelId()),
        L = (0, s.bG)([K.A], () => K.A.can(er.xBc.MANAGE_GUILD, c)),
        G = (0, s.bG)([F.A], () => F.A.isUnavailable(t)),
        k = (0, s.bG)([Q.default], () => Q.default.getCurrentUser()),
        { enableStudyGroup: Y } = (0, O.y)(c),
        Z = (0, E.Ay)((e) => e.currentlyShown.has(o.M.NAGBAR_NOTICE_CONNECT_PLAYSTATION)),
        [J, ee] = r.useState(!Z),
        et = (0, _.A)(t),
        { analyticsLocations: en } = (0, p.Ay)(m.A.GUILD_HEADER);
    r.useEffect(() => {
        t !== et && ee(!Z);
    }, [t, et, Z]);
    let [ei, es] = (0, E.Ay)(
            (e) => [
                el.cA.some((t) => e.currentlyShown.has(t.dismissibleContentType)),
                e.currentlyShownGroup.has(ea.m.GUILD_HEADER_TOOLTIPS),
            ],
            a.x,
        ),
        eo = (0, g.A)(c),
        ed = (0, u.red)(u.DXt),
        eu = (0, s.bG)([q.A], () => q.A.hasLayers()),
        eh = (0, R.xr)((e) => e.fullScreenLayers.length > 0),
        e_ = (0, s.bG)([V.A], () => V.A.shouldShow(ec)),
        em = (0, v.A)(t),
        ep = c?.features.has(er.GuildFeatures.HUB) === !0,
        eg = L && c?.features.has(er.GuildFeatures.DISCOVERABLE) === !0,
        eE = (0, s.bG)(
            [b.A, q.A],
            () => null != c && null != k && L && !q.A.hasLayers() && b.A.shouldShowGuildTemplateDirtyTooltip(t),
        ),
        eI = (0, s.bG)([B.A], () => B.A.getChannel(l)),
        { isPopoutOpen: ef } = (0, N.S)(),
        eC = c?.features.has(er.GuildFeatures.COMMUNITY) ?? !1,
        eT = X.Ay.isNewUser(k),
        eN = J && !eT;
    (0, S.A)(c);
    let eS = (0, I.JZ)(o.M.PREMIUM_TUTORIAL_SERVER_MENU_TOOLTIP),
        ex = (0, x.A)(t),
        ev = (0, s.bG)([$.A], () => $.A.getChannelId()),
        ey = (0, s.bG)([z.A], () => z.A.desyncedVoiceStatesCount),
        eb = (0, w.A)(t),
        eO = (0, P.C$)(t, "GuildSidebar"),
        eL = (0, s.bG)([W.A], () => W.A.getGuild(t)?.features.has(er.GuildFeatures.GAME_SERVERS) ?? !1, [t]),
        eR = (0, U.A)(),
        eP = (0, D.A)(t),
        ej = !1 === eb && eR && null != eP,
        eD = (0, M.A)(t),
        eM = !1 === eb && eR && null != eD,
        ew = [];
    ep && ew.push(o.M.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP),
        em && ew.push(o.M.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL),
        eg && ew.push(o.M.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL),
        !1 === eb && ew.push(o.M.GUILD_POWERUP_PERKS_COACHMARK),
        eO && !eL && !1 === eb && ew.push(o.M.GAME_SERVER_HOSTING_NEW_PERK_AVAILABLE_COACHMARK),
        eO && !1 === eb && ew.push(o.M.GAME_SERVER_HOSTING_BATCH_RELEASE_V2_COACHMARK),
        ex && ew.push(o.M.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL);
    let [eU, eG] = (0, f.kn)(ew, ea.m.GUILD_HEADER_TOOLTIPS),
        ek = null == eU,
        [eV, eB] = (0, f.D8)(
            ek && ej ? o.M.BOOST_TO_UNLOCK_COACHMARK : null,
            t,
            { cooldownDurationMs: j.bW, numTimesToRecur: 5 },
            ea.m.GUILD_HEADER_TOOLTIPS,
        ),
        [eH, eF] = (0, f.D8)(
            ek && eV !== o.M.BOOST_TO_UNLOCK_COACHMARK && eM ? o.M.EXPIRING_POWERUP_COACHMARK : null,
            t,
            { cooldownDurationMs: j.mD },
            ea.m.GUILD_HEADER_TOOLTIPS,
        ),
        eY = r.useMemo(
            () =>
                null != eU
                    ? { contentType: eU, data: null, markAsDismissed: eG }
                    : eV === o.M.BOOST_TO_UNLOCK_COACHMARK && null != eP
                      ? { contentType: eV, data: { featuredPowerup: eP }, markAsDismissed: eB }
                      : eH === o.M.EXPIRING_POWERUP_COACHMARK && null != eD
                        ? { contentType: eH, data: { featuredExpiringPowerup: eD }, markAsDismissed: eF }
                        : null,
            [eU, eV, eH, eP, eD, eG, eB, eF],
        );
    return (0, i.jsx)(eA, {
        guildId: t,
        hideSelectedChannel: n,
        guild: c,
        scrollToChannel: h,
        selectedChannelId: n ? null : l,
        selectedChannel: eI,
        selectedVoiceChannelId: y,
        voiceStates: A,
        rtcConnectedChannelId: ev,
        rtcDesyncedVoiceStatesCount: ey,
        isUnavailable: G,
        user: k,
        hasChannelNotice: null != eo || ei,
        anyLayerOpen: ed || eu || eh,
        showGuildHeaderTutorial: e_,
        showGuildTemplateDirtyTooltip: eE,
        showNewUnreadsBar: eC,
        isHeaderPopoutOpen: ef,
        enableStudyGroup: Y,
        isGuildHeaderDismissibleTooltipShown: es,
        canShowCoachMarkAtBottom: J,
        headerAnalyticsLocations: en,
        isTutorialHighlightDismissed: eS,
        shouldRenderBurstCoachmark: eN,
        guildHeaderContentDescriptor: eY,
        onFavoriteGuildContextMenu: d,
    });
}
