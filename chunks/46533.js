n.d(t, { A: () => e_ }), n(321073);
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
    j = n(379229),
    M = n(139032),
    w = n(52260),
    U = n(363487),
    G = n(342220),
    k = n(77509),
    V = n(728321),
    B = n(482361),
    H = n(734057),
    F = n(72314),
    Y = n(919638),
    W = n(808728),
    q = n(71393),
    z = n(186111),
    K = n(576705),
    $ = n(584569),
    Q = n(383501),
    X = n(287809),
    Z = n(927578),
    J = n(885631),
    ee = n(487401),
    et = n(952790),
    en = n(718996),
    ei = n(64084),
    er = n(846930),
    el = n(652215),
    ea = n(946960),
    es = n(49999),
    eo = n(349828),
    ed = n(985018),
    ec = n(175739);
let eu = "server-settings",
    eA = { origin: { x: -8, y: -48 }, targetWidth: 40, targetHeight: 40, offset: { x: 0, y: 0 } };
class eh extends r.PureComponent {
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
            (this.historyUnlisten = k.A.addRouteChangeListener(this.handleHistoryChange));
        let { location: e } = k.A.getHistory();
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
            t.id !== eo.Vc &&
            (0, h.L3)(e, async () => {
                let { default: e } = await n.e("10758").then(n.bind(n, 455557));
                return (n) => (0, i.jsx)(e, { ...n, guild: t });
            });
    };
    handleHeaderContextMenu = (e) => {
        let { guild: t } = this.props;
        if (null != t) {
            if (t.id === eo.Vc) return void this.props.onFavoriteGuildContextMenu(e);
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
        !e && t && (0, I.Dr)(o.M.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP, { dismissAction: es.i.AUTO });
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
                { guild: r } = this.props;
            return null != r && (0, i.jsx)(e, { onClose: n, guild: r });
        };
    };
    renderGuildHeaderUpsellPopout = (e) => {
        let { guild: t, guildHeaderContentDescriptor: n } = this.props;
        return null == t || null == n
            ? this.renderGuildHeaderDropdownButton(e)
            : (0, i.jsx)(en.A, {
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
                  children: (0, i.jsx)(V.A, {
                      tutorialId: eu,
                      position: "bottom",
                      inlineSpecs: eA,
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
                                title: ed.intl.string(ed.t.Rk2RJk),
                                body: ed.intl.string(ed.t.sFSrFH),
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
                                title: ed.intl.string(ed.t.Q3qa4x),
                                body: ed.intl.string(ed.t.UyHD4O),
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
                      children: (r) => {
                          let { onClick: l, ...a } = r;
                          return (0, i.jsx)(et.Ay, {
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
            i = null != t && (0, J.A)(t);
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
            return (0, i.jsx)(er.A, { withBannerPadding: null != t && null != this.getGuildBannerHash() });
        {
            if (t.features.has(el.GuildFeatures.HUB) && !r)
                return (0, i.jsx)("div", {
                    className: ec.r0,
                    children: (0, i.jsx)(R.A, { guild: t, channel: n ?? W.Ay.getDefaultChannel(t.id) }),
                });
            let e = t.id === eo.Vc ? ee.T : ee.B;
            return (0, i.jsx)(e, {
                guild: t,
                ...l,
                guildBanner: this.getGuildBannerHash(),
                hasGuildSubheader: this.state.hasGuildSubheader,
                onScroll:
                    null != t && (null != this.getGuildBannerHash() || (0, J.A)(t)) ? this.pinBannerOrGuildInfo : null,
            });
        }
    }
    render() {
        let { guild: e } = this.props,
            t = (0, C.Y)(e);
        return (0, i.jsxs)("nav", {
            className: ec.kL,
            onContextMenu: this.handleContextMenu,
            "aria-label": ed.intl.formatToPlainString(ed.t.nj5gAZ, { guildName: t ?? "" }),
            children: [
                null != e && this.renderGuildHeader(this.state.hasGuildSubheader),
                null != e &&
                    (0, i.jsx)(ei.A, { guild: e, setHasSubheader: (e) => this.setState({ hasGuildSubheader: e }) }),
                this.renderChannelList(),
            ],
        });
    }
}
function e_(e) {
    let { guildId: t, hideSelectedChannel: n, selectedChannelId: l } = e,
        d = (0, N.$)("favorite-guild-header-context"),
        c = (0, s.bG)([q.A], () => q.A.getGuild(t)),
        A = (0, T.A)(t),
        h = (0, s.bG)([F.A], () => F.A.getGuildDimensions(t).scrollTo),
        C = (0, s.bG)([Q.A], () => Q.A.getChannelId()),
        b = (0, s.bG)([K.A], () => K.A.can(el.xBc.MANAGE_GUILD, c)),
        R = (0, s.bG)([Y.A], () => Y.A.isUnavailable(t)),
        k = (0, s.bG)([X.default], () => X.default.getCurrentUser()),
        { enableStudyGroup: V } = (0, L.y)(c),
        W = (0, E.Ay)((e) => e.currentlyShown.has(o.M.NAGBAR_NOTICE_CONNECT_PLAYSTATION)),
        [J, ee] = r.useState(!W),
        et = (0, _.A)(t),
        { analyticsLocations: en } = (0, g.Ay)(m.A.GUILD_HEADER);
    r.useEffect(() => {
        t !== et && ee(!W);
    }, [t, et, W]);
    let [ei, er] = (0, E.Ay)(
            (e) => [
                ea.cA.some((t) => e.currentlyShown.has(t.dismissibleContentType)),
                e.currentlyShownGroup.has(es.m.GUILD_HEADER_TOOLTIPS),
            ],
            a.x,
        ),
        eo = (0, p.A)(c),
        ed = (0, u.red)(u.DXt),
        ec = (0, s.bG)([z.A], () => z.A.hasLayers()),
        eA = (0, P.xr)((e) => e.fullScreenLayers.length > 0),
        e_ = (0, s.bG)([B.A], () => B.A.shouldShow(eu)),
        em = (0, y.A)(t),
        eg = c?.features.has(el.GuildFeatures.HUB) === !0,
        ep = b && c?.features.has(el.GuildFeatures.DISCOVERABLE) === !0,
        eE = (0, s.bG)(
            [O.A, z.A],
            () => null != c && null != k && b && !z.A.hasLayers() && O.A.shouldShowGuildTemplateDirtyTooltip(t),
        ),
        eI = (0, s.bG)([H.A], () => H.A.getChannel(l)),
        { isPopoutOpen: ef } = (0, S.S)(),
        eC = c?.features.has(el.GuildFeatures.COMMUNITY) ?? !1,
        eT = Z.Ay.isNewUser(k),
        eN = J && !eT;
    (0, x.A)(c);
    let eS = (0, I.JZ)(o.M.PREMIUM_TUTORIAL_SERVER_MENU_TOOLTIP),
        ex = (0, v.A)(t),
        ev = (0, s.bG)([Q.A], () => Q.A.getChannelId()),
        ey = (0, s.bG)([$.A], () => $.A.desyncedVoiceStatesCount),
        eb = (0, U.A)(t),
        eO = (0, D.C$)(t, "GuildSidebar"),
        eL = (0, s.bG)([q.A], () => q.A.getGuild(t)?.features.has(el.GuildFeatures.GAME_SERVERS) ?? !1, [t]),
        eR = (0, G.A)(),
        eP = (0, M.A)(t),
        eD = !1 === eb && eR && null != eP,
        ej = (0, w.A)(t),
        eM = !1 === eb && eR && null != ej,
        ew = [];
    eg && ew.push(o.M.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP),
        em && ew.push(o.M.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL),
        ep && ew.push(o.M.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL),
        !1 === eb && ew.push(o.M.GUILD_POWERUP_PERKS_COACHMARK),
        eO && !eL && !1 === eb && ew.push(o.M.GAME_SERVER_HOSTING_NEW_PERK_AVAILABLE_COACHMARK),
        eO && !1 === eb && ew.push(o.M.GAME_SERVER_HOSTING_BATCH_RELEASE_V2_COACHMARK),
        ex && ew.push(o.M.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL);
    let [eU, eG] = (0, f.kn)(ew, es.m.GUILD_HEADER_TOOLTIPS),
        ek = null == eU,
        [eV, eB] = (0, f.D8)(
            ek && eD ? o.M.BOOST_TO_UNLOCK_COACHMARK : null,
            t,
            { cooldownDurationMs: j.bW, numTimesToRecur: 5 },
            es.m.GUILD_HEADER_TOOLTIPS,
        ),
        [eH, eF] = (0, f.D8)(
            ek && eV !== o.M.BOOST_TO_UNLOCK_COACHMARK && eM ? o.M.EXPIRING_POWERUP_COACHMARK : null,
            t,
            { cooldownDurationMs: j.mD },
            es.m.GUILD_HEADER_TOOLTIPS,
        ),
        eY = r.useMemo(
            () =>
                null != eU
                    ? { contentType: eU, data: null, markAsDismissed: eG }
                    : eV === o.M.BOOST_TO_UNLOCK_COACHMARK && null != eP
                      ? { contentType: eV, data: { featuredPowerup: eP }, markAsDismissed: eB }
                      : eH === o.M.EXPIRING_POWERUP_COACHMARK && null != ej
                        ? { contentType: eH, data: { featuredExpiringPowerup: ej }, markAsDismissed: eF }
                        : null,
            [eU, eV, eH, eP, ej, eG, eB, eF],
        );
    return (0, i.jsx)(eh, {
        guildId: t,
        hideSelectedChannel: n,
        guild: c,
        scrollToChannel: h,
        selectedChannelId: n ? null : l,
        selectedChannel: eI,
        selectedVoiceChannelId: C,
        voiceStates: A,
        rtcConnectedChannelId: ev,
        rtcDesyncedVoiceStatesCount: ey,
        isUnavailable: R,
        user: k,
        hasChannelNotice: null != eo || ei,
        anyLayerOpen: ed || ec || eA,
        showGuildHeaderTutorial: e_,
        showGuildTemplateDirtyTooltip: eE,
        showNewUnreadsBar: eC,
        isHeaderPopoutOpen: ef,
        enableStudyGroup: V,
        isGuildHeaderDismissibleTooltipShown: er,
        canShowCoachMarkAtBottom: J,
        headerAnalyticsLocations: en,
        isTutorialHighlightDismissed: eS,
        shouldRenderBurstCoachmark: eN,
        guildHeaderContentDescriptor: eY,
        onFavoriteGuildContextMenu: d,
    });
}
