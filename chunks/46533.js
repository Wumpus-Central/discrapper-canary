n.d(t, { A: () => eA }), n(321073);
var i = n(627968),
    r = n(64700),
    l = n(522160),
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
    f = n(379848),
    C = n(250719),
    T = n(72152),
    N = n(502103),
    S = n(929163),
    x = n(423183),
    v = n(568185),
    y = n(225437),
    b = n(221094),
    O = n(781862),
    L = n(380150),
    R = n(488803),
    P = n(379229),
    j = n(139032),
    D = n(52260),
    M = n(363487),
    w = n(804756),
    U = n(77509),
    G = n(728321),
    k = n(482361),
    V = n(734057),
    B = n(72314),
    H = n(919638),
    F = n(808728),
    Y = n(71393),
    q = n(186111),
    W = n(576705),
    K = n(584569),
    z = n(383501),
    $ = n(287809),
    Q = n(927578),
    X = n(885631),
    Z = n(487401),
    J = n(952790),
    ee = n(718996),
    et = n(64084),
    en = n(846930),
    ei = n(652215),
    er = n(946960),
    el = n(49999),
    ea = n(349828),
    es = n(985018),
    eo = n(484241);
let ed = "server-settings",
    ec = { origin: { x: -8, y: -48 }, targetWidth: 40, targetHeight: 40, offset: { x: 0, y: 0 } };
class eu extends r.PureComponent {
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
            (this.historyUnlisten = U.A.addRouteChangeListener(this.handleHistoryChange));
        let { location: e } = U.A.getHistory();
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
        e.stopPropagation(), (0, T.Z)(!t), this.closeAllHeaderNotices();
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
            t = this.props.guild?.features.has(ei.GuildFeatures.HUB);
        !e && t && (0, I.Dr)(o.M.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP, { dismissAction: el.i.AUTO });
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
        let { guild: t, guildHeaderContentDescriptor: n } = this.props;
        return null == t || null == n
            ? this.renderGuildHeaderDropdownButton(e)
            : (0, i.jsx)(ee.A, {
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
                  children: (0, i.jsx)(G.A, {
                      tutorialId: ed,
                      position: "bottom",
                      inlineSpecs: ec,
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
                                title: es.intl.string(es.t.Rk2RJk),
                                body: es.intl.string(es.t.sFSrFH),
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
                                title: es.intl.string(es.t.Q3qa4x),
                                body: es.intl.string(es.t.UyHD4O),
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
                          (0, T.Z)(!1);
                      },
                      spacing: 4,
                      children: (r) => {
                          let { onClick: l, ...a } = r;
                          return (0, i.jsx)(J.Ay, {
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
            i = null != t && (0, X.A)(t);
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
            return (0, i.jsx)(en.A, { withBannerPadding: null != t && null != this.getGuildBannerHash() });
        {
            if (t.features.has(ei.GuildFeatures.HUB) && !r)
                return (0, i.jsx)("div", {
                    className: eo.r0,
                    children: (0, i.jsx)(O.A, { guild: t, channel: n ?? F.Ay.getDefaultChannel(t.id) }),
                });
            let e = t.id === ea.Vc ? Z.T : Z.B;
            return (0, i.jsx)(e, {
                guild: t,
                ...l,
                guildBanner: this.getGuildBannerHash(),
                hasGuildSubheader: this.state.hasGuildSubheader,
                onScroll:
                    null != t && (null != this.getGuildBannerHash() || (0, X.A)(t)) ? this.pinBannerOrGuildInfo : null,
            });
        }
    }
    render() {
        let { guild: e } = this.props;
        return (0, i.jsxs)("nav", {
            className: eo.kL,
            onContextMenu: this.handleContextMenu,
            "aria-label": es.intl.formatToPlainString(es.t.nj5gAZ, { guildName: e?.name ?? "" }),
            children: [
                null != e && this.renderGuildHeader(this.state.hasGuildSubheader),
                null != e &&
                    (0, i.jsx)(et.A, { guild: e, setHasSubheader: (e) => this.setState({ hasGuildSubheader: e }) }),
                this.renderChannelList(),
            ],
        });
    }
}
function eA(e) {
    let { guildId: t, hideSelectedChannel: n, selectedChannelId: l } = e,
        d = (0, s.bG)([Y.A], () => Y.A.getGuild(t)),
        c = (0, C.A)(t),
        A = (0, s.bG)([B.A], () => B.A.getGuildDimensions(t).scrollTo),
        h = (0, s.bG)([z.A], () => z.A.getChannelId()),
        v = (0, s.bG)([W.A], () => W.A.can(ei.xBc.MANAGE_GUILD, d)),
        O = (0, s.bG)([H.A], () => H.A.isUnavailable(t)),
        U = (0, s.bG)([$.default], () => $.default.getCurrentUser()),
        { enableStudyGroup: G } = (0, b.y)(d),
        F = (0, E.Ay)((e) => e.currentlyShown.has(o.M.NAGBAR_NOTICE_CONNECT_PLAYSTATION)),
        [X, Z] = r.useState(!F),
        J = (0, _.A)(t),
        { analyticsLocations: ee } = (0, p.Ay)(m.A.GUILD_HEADER);
    r.useEffect(() => {
        t !== J && Z(!F);
    }, [t, J, F]);
    let [et, en] = (0, E.Ay)(
            (e) => [
                er.cA.some((t) => e.currentlyShown.has(t.dismissibleContentType)),
                e.currentlyShownGroup.has(el.m.GUILD_HEADER_TOOLTIPS),
            ],
            a.x,
        ),
        ea = (0, g.A)(d),
        es = (0, u.red)(u.DXt),
        eo = (0, s.bG)([q.A], () => q.A.hasLayers()),
        ec = (0, s.bG)([k.A], () => k.A.shouldShow(ed)),
        eA = (0, x.A)(t),
        eh = d?.features.has(ei.GuildFeatures.HUB) === !0,
        e_ = v && d?.features.has(ei.GuildFeatures.DISCOVERABLE) === !0,
        em = (0, s.bG)(
            [y.A, q.A],
            () => null != d && null != U && v && !q.A.hasLayers() && y.A.shouldShowGuildTemplateDirtyTooltip(t),
        ),
        ep = (0, s.bG)([V.A], () => V.A.getChannel(l)),
        { isPopoutOpen: eg } = (0, T.S)(),
        eE = d?.features.has(ei.GuildFeatures.COMMUNITY) ?? !1,
        eI = Q.Ay.isNewUser(U),
        ef = X && !eI;
    (0, N.A)(d);
    let eC = (0, I.JZ)(o.M.PREMIUM_TUTORIAL_SERVER_MENU_TOOLTIP),
        eT = (0, L.A)(t),
        eN = (0, S.A)(t),
        eS = (0, s.bG)([z.A], () => z.A.getChannelId()),
        ex = (0, s.bG)([K.A], () => K.A.desyncedVoiceStatesCount),
        ev = (0, M.A)(t),
        ey = (0, R.C$)(t, "GuildSidebar"),
        eb = (0, s.bG)([Y.A], () => Y.A.getGuild(t)?.features.has(ei.GuildFeatures.GAME_SERVERS) ?? !1, [t]),
        eO = (0, w.A)(t),
        eL = (0, j.A)(t),
        eR = !1 === ev && eO && null != eL,
        eP = (0, D.A)(t),
        ej = !1 === ev && eO && null != eP,
        eD = [];
    eh && eD.push(o.M.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP),
        eA && eD.push(o.M.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL),
        e_ && eD.push(o.M.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL),
        !1 === ev && eD.push(o.M.GUILD_POWERUP_PERKS_COACHMARK),
        ey && !eb && !1 === ev && eD.push(o.M.GAME_SERVER_HOSTING_NEW_PERK_AVAILABLE_COACHMARK),
        eT && eD.push(o.M.MEDIA_CHANNEL_UPSELL),
        eN && eD.push(o.M.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL);
    let [eM, ew] = (0, f.kn)(eD, el.m.GUILD_HEADER_TOOLTIPS),
        eU = null == eM,
        [eG, ek] = (0, f.D8)(
            eU && eR ? o.M.BOOST_TO_UNLOCK_COACHMARK : null,
            t,
            { cooldownDurationMs: P.bW },
            el.m.GUILD_HEADER_TOOLTIPS,
        ),
        [eV, eB] = (0, f.D8)(
            eU && eG !== o.M.BOOST_TO_UNLOCK_COACHMARK && ej ? o.M.EXPIRING_POWERUP_COACHMARK : null,
            t,
            { cooldownDurationMs: P.mD },
            el.m.GUILD_HEADER_TOOLTIPS,
        ),
        eH = r.useMemo(
            () =>
                null != eM
                    ? { contentType: eM, data: null, markAsDismissed: ew }
                    : eG === o.M.BOOST_TO_UNLOCK_COACHMARK && null != eL
                      ? { contentType: eG, data: { featuredPowerup: eL }, markAsDismissed: ek }
                      : eV === o.M.EXPIRING_POWERUP_COACHMARK && null != eP
                        ? { contentType: eV, data: { featuredExpiringPowerup: eP }, markAsDismissed: eB }
                        : null,
            [eM, eG, eV, eL, eP, ew, ek, eB],
        );
    return (0, i.jsx)(eu, {
        guildId: t,
        hideSelectedChannel: n,
        guild: d,
        scrollToChannel: A,
        selectedChannelId: n ? null : l,
        selectedChannel: ep,
        selectedVoiceChannelId: h,
        voiceStates: c,
        rtcConnectedChannelId: eS,
        rtcDesyncedVoiceStatesCount: ex,
        isUnavailable: O,
        user: U,
        hasChannelNotice: null != ea || et,
        anyLayerOpen: es || eo,
        showGuildHeaderTutorial: ec,
        showGuildTemplateDirtyTooltip: em,
        showNewUnreadsBar: eE,
        isHeaderPopoutOpen: eg,
        enableStudyGroup: G,
        isGuildHeaderDismissibleTooltipShown: en,
        canShowCoachMarkAtBottom: X,
        headerAnalyticsLocations: ee,
        isTutorialHighlightDismissed: eC,
        shouldRenderBurstCoachmark: ef,
        guildHeaderContentDescriptor: eH,
    });
}
