n.d(t, { A: () => eu }), n(321073);
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
    L = n(488803),
    R = n(379229),
    P = n(139032),
    j = n(52260),
    D = n(363487),
    M = n(804756),
    w = n(77509),
    U = n(728321),
    G = n(482361),
    k = n(734057),
    V = n(72314),
    B = n(919638),
    H = n(808728),
    F = n(71393),
    Y = n(186111),
    W = n(576705),
    q = n(584569),
    K = n(383501),
    z = n(287809),
    $ = n(927578),
    Q = n(885631),
    X = n(487401),
    Z = n(952790),
    J = n(718996),
    ee = n(64084),
    et = n(846930),
    en = n(652215),
    ei = n(946960),
    er = n(49999),
    el = n(349828),
    ea = n(985018),
    es = n(484241);
let eo = "server-settings",
    ed = { origin: { x: -8, y: -48 }, targetWidth: 40, targetHeight: 40, offset: { x: 0, y: 0 } };
class ec extends r.PureComponent {
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
            (this.historyUnlisten = w.A.addRouteChangeListener(this.handleHistoryChange));
        let { location: e } = w.A.getHistory();
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
            t = this.props.guild?.features.has(en.GuildFeatures.HUB);
        !e && t && (0, I.Dr)(o.M.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP, { dismissAction: er.i.AUTO });
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
            : (0, i.jsx)(J.A, {
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
                  children: (0, i.jsx)(U.A, {
                      tutorialId: eo,
                      position: "bottom",
                      inlineSpecs: ed,
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
                                title: ea.intl.string(ea.t.Rk2RJk),
                                body: ea.intl.string(ea.t.sFSrFH),
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
                                title: ea.intl.string(ea.t.Q3qa4x),
                                body: ea.intl.string(ea.t.UyHD4O),
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
                          return (0, i.jsx)(Z.Ay, {
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
            i = null != t && (0, Q.A)(t);
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
            return (0, i.jsx)(et.A, { withBannerPadding: null != t && null != this.getGuildBannerHash() });
        {
            if (t.features.has(en.GuildFeatures.HUB) && !r)
                return (0, i.jsx)("div", {
                    className: es.r0,
                    children: (0, i.jsx)(O.A, { guild: t, channel: n ?? H.Ay.getDefaultChannel(t.id) }),
                });
            let e = t.id === el.Vc ? X.T : X.B;
            return (0, i.jsx)(e, {
                guild: t,
                ...l,
                guildBanner: this.getGuildBannerHash(),
                hasGuildSubheader: this.state.hasGuildSubheader,
                onScroll:
                    null != t && (null != this.getGuildBannerHash() || (0, Q.A)(t)) ? this.pinBannerOrGuildInfo : null,
            });
        }
    }
    render() {
        let { guild: e } = this.props;
        return (0, i.jsxs)("nav", {
            className: es.kL,
            onContextMenu: this.handleContextMenu,
            "aria-label": ea.intl.formatToPlainString(ea.t.nj5gAZ, { guildName: e?.name ?? "" }),
            children: [
                null != e && this.renderGuildHeader(this.state.hasGuildSubheader),
                null != e &&
                    (0, i.jsx)(ee.A, { guild: e, setHasSubheader: (e) => this.setState({ hasGuildSubheader: e }) }),
                this.renderChannelList(),
            ],
        });
    }
}
function eu(e) {
    let { guildId: t, hideSelectedChannel: n, selectedChannelId: l } = e,
        d = (0, s.bG)([F.A], () => F.A.getGuild(t)),
        c = (0, C.A)(t),
        A = (0, s.bG)([V.A], () => V.A.getGuildDimensions(t).scrollTo),
        h = (0, s.bG)([K.A], () => K.A.getChannelId()),
        v = (0, s.bG)([W.A], () => W.A.can(en.xBc.MANAGE_GUILD, d)),
        O = (0, s.bG)([B.A], () => B.A.isUnavailable(t)),
        w = (0, s.bG)([z.default], () => z.default.getCurrentUser()),
        { enableStudyGroup: U } = (0, b.y)(d),
        H = (0, E.Ay)((e) => e.currentlyShown.has(o.M.NAGBAR_NOTICE_CONNECT_PLAYSTATION)),
        [Q, X] = r.useState(!H),
        Z = (0, _.A)(t),
        { analyticsLocations: J } = (0, p.Ay)(m.A.GUILD_HEADER);
    r.useEffect(() => {
        t !== Z && X(!H);
    }, [t, Z, H]);
    let [ee, et] = (0, E.Ay)(
            (e) => [
                ei.cA.some((t) => e.currentlyShown.has(t.dismissibleContentType)),
                e.currentlyShownGroup.has(er.m.GUILD_HEADER_TOOLTIPS),
            ],
            a.x,
        ),
        el = (0, g.A)(d),
        ea = (0, u.red)(u.DXt),
        es = (0, s.bG)([Y.A], () => Y.A.hasLayers()),
        ed = (0, s.bG)([G.A], () => G.A.shouldShow(eo)),
        eu = (0, x.A)(t),
        eA = d?.features.has(en.GuildFeatures.HUB) === !0,
        eh = v && d?.features.has(en.GuildFeatures.DISCOVERABLE) === !0,
        e_ = (0, s.bG)(
            [y.A, Y.A],
            () => null != d && null != w && v && !Y.A.hasLayers() && y.A.shouldShowGuildTemplateDirtyTooltip(t),
        ),
        em = (0, s.bG)([k.A], () => k.A.getChannel(l)),
        { isPopoutOpen: ep } = (0, T.S)(),
        eg = d?.features.has(en.GuildFeatures.COMMUNITY) ?? !1,
        eE = $.Ay.isNewUser(w),
        eI = Q && !eE;
    (0, N.A)(d);
    let ef = (0, I.JZ)(o.M.PREMIUM_TUTORIAL_SERVER_MENU_TOOLTIP),
        eC = (0, S.A)(t),
        eT = (0, s.bG)([K.A], () => K.A.getChannelId()),
        eN = (0, s.bG)([q.A], () => q.A.desyncedVoiceStatesCount),
        eS = (0, D.A)(t),
        ex = (0, L.C$)(t, "GuildSidebar"),
        ev = (0, s.bG)([F.A], () => F.A.getGuild(t)?.features.has(en.GuildFeatures.GAME_SERVERS) ?? !1, [t]),
        ey = (0, M.A)(t),
        eb = (0, P.A)(t),
        eO = !1 === eS && ey && null != eb,
        eL = (0, j.A)(t),
        eR = !1 === eS && ey && null != eL,
        eP = [];
    eA && eP.push(o.M.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP),
        eu && eP.push(o.M.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL),
        eh && eP.push(o.M.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL),
        !1 === eS && eP.push(o.M.GUILD_POWERUP_PERKS_COACHMARK),
        ex && !ev && !1 === eS && eP.push(o.M.GAME_SERVER_HOSTING_NEW_PERK_AVAILABLE_COACHMARK),
        eC && eP.push(o.M.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL);
    let [ej, eD] = (0, f.kn)(eP, er.m.GUILD_HEADER_TOOLTIPS),
        eM = null == ej,
        [ew, eU] = (0, f.D8)(
            eM && eO ? o.M.BOOST_TO_UNLOCK_COACHMARK : null,
            t,
            { cooldownDurationMs: R.bW },
            er.m.GUILD_HEADER_TOOLTIPS,
        ),
        [eG, ek] = (0, f.D8)(
            eM && ew !== o.M.BOOST_TO_UNLOCK_COACHMARK && eR ? o.M.EXPIRING_POWERUP_COACHMARK : null,
            t,
            { cooldownDurationMs: R.mD },
            er.m.GUILD_HEADER_TOOLTIPS,
        ),
        eV = r.useMemo(
            () =>
                null != ej
                    ? { contentType: ej, data: null, markAsDismissed: eD }
                    : ew === o.M.BOOST_TO_UNLOCK_COACHMARK && null != eb
                      ? { contentType: ew, data: { featuredPowerup: eb }, markAsDismissed: eU }
                      : eG === o.M.EXPIRING_POWERUP_COACHMARK && null != eL
                        ? { contentType: eG, data: { featuredExpiringPowerup: eL }, markAsDismissed: ek }
                        : null,
            [ej, ew, eG, eb, eL, eD, eU, ek],
        );
    return (0, i.jsx)(ec, {
        guildId: t,
        hideSelectedChannel: n,
        guild: d,
        scrollToChannel: A,
        selectedChannelId: n ? null : l,
        selectedChannel: em,
        selectedVoiceChannelId: h,
        voiceStates: c,
        rtcConnectedChannelId: eT,
        rtcDesyncedVoiceStatesCount: eN,
        isUnavailable: O,
        user: w,
        hasChannelNotice: null != el || ee,
        anyLayerOpen: ea || es,
        showGuildHeaderTutorial: ed,
        showGuildTemplateDirtyTooltip: e_,
        showNewUnreadsBar: eg,
        isHeaderPopoutOpen: ep,
        enableStudyGroup: U,
        isGuildHeaderDismissibleTooltipShown: et,
        canShowCoachMarkAtBottom: Q,
        headerAnalyticsLocations: J,
        isTutorialHighlightDismissed: ef,
        shouldRenderBurstCoachmark: eI,
        guildHeaderContentDescriptor: eV,
    });
}
