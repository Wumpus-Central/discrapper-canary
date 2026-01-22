n.d(t, {
    A: () => ep,
}),
    n(896048),
    n(321073);
var r = n(627968),
    i = n(64700),
    l = n(108531),
    a = n(942381),
    s = n(311907),
    o = n(554146),
    c = n(451988),
    u = n(342494),
    d = n(397927),
    p = n(73153),
    f = n(442433),
    h = n(512155),
    A = n(475743),
    g = n(793574),
    m = n(688810),
    b = n(665037),
    _ = n(771781),
    E = n(826673),
    O = n(250719),
    y = n(72152),
    I = n(502103),
    v = n(929163),
    S = n(423183),
    C = n(568185),
    N = n(225437),
    T = n(221094),
    j = n(781862),
    x = n(380150),
    P = n(488803),
    w = n(363487),
    L = n(77509),
    R = n(728321),
    D = n(482361),
    M = n(734057),
    k = n(72314),
    U = n(919638),
    G = n(808728),
    V = n(71393),
    B = n(186111),
    H = n(576705),
    F = n(584569),
    Y = n(383501),
    K = n(287809),
    z = n(927578),
    W = n(885631),
    q = n(487401),
    Q = n(952790),
    X = n(718996),
    Z = n(64084),
    J = n(846930),
    $ = n(652215),
    ee = n(946960),
    et = n(49999),
    en = n(349828),
    er = n(985018),
    ei = n(484241);

function el(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function ea(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                el(e, t, n[t]);
            });
    }
    return e;
}

function es(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function eo(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        l = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
        return l;
    }
    if (
        ((l = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = {},
                l = Object.getOwnPropertyNames(e);
            for (r = 0; r < l.length; r++)
                (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            return i;
        })(e, t)),
        Object.getOwnPropertySymbols)
    )
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
    return l;
}
let ec = "server-settings",
    eu = {
        origin: {
            x: -8,
            y: -48,
        },
        targetWidth: 40,
        targetHeight: 40,
        offset: {
            x: 0,
            y: 0,
        },
    };
class ed extends i.PureComponent {
    static getDerivedStateFromProps(e) {
        let { guild: t, hasChannelNotice: n } = e;
        return null == t || null == t.banner || n
            ? {
                  renderBanner: !1,
                  bannerVisible: !1,
              }
            : null;
    }
    componentDidMount() {
        var e;
        this.setAnimatedValue(0),
            p.h.subscribe("LAYER_PUSH", this.closeAllHeaderNotices),
            (this.historyUnlisten = L.A.addRouteChangeListener(this.handleHistoryChange));
        let { location: t } = L.A.getHistory();
        (null == (e = t.state) ? void 0 : e.shouldShowSubscribeTooltip) &&
            this.showTimeout.start(1e3, () =>
                this.setState({
                    shouldShowSubscribeTooltip: !0,
                }),
            );
    }
    componentWillUnmount() {
        this.showTimeout.stop(),
            this.state.controller.dispose(),
            this.historyUnlisten(),
            p.h.unsubscribe("LAYER_PUSH", this.closeAllHeaderNotices);
    }
    getGuildBannerHash() {
        let { guild: e, hasChannelNotice: t } = this.props;
        return null == e || t ? null : e.banner;
    }
    renderGuildHeaderNotices(e) {
        let { showGuildTemplateDirtyTooltip: t, showGuildHeaderTutorial: n, anyLayerOpen: i } = this.props,
            { shouldShowSubscribeTooltip: l } = this.state;
        return n
            ? (0, r.jsx)("div", {
                  onClick: (t) => (e ? null : t.stopPropagation()),
                  children: (0, r.jsx)(R.A, {
                      tutorialId: ec,
                      position: "bottom",
                      inlineSpecs: eu,
                      children: this.renderGuildHeaderDropdownButton(e),
                  }),
              })
            : t
              ? (0, r.jsxs)(r.Fragment, {
                    children: [
                        this.renderGuildHeaderDropdownButton(e),
                        !e &&
                            !i &&
                            (0, r.jsx)(u.AM, {
                                targetElementRef: this.guildHeaderDropdownButtonRef,
                                title: er.intl.string(er.t.Rk2RJk),
                                body: er.intl.string(er.t.sFSrFH),
                                onRequestClose: this.handleCloseTemplateDirtyTooltip,
                                position: "bottom",
                                caretConfig: {
                                    align: "center",
                                },
                            }),
                    ],
                })
              : i || e
                ? this.renderGuildHeaderDropdownButton(e)
                : l
                  ? (0, r.jsxs)(r.Fragment, {
                        children: [
                            this.renderGuildHeaderDropdownButton(e),
                            (0, r.jsx)(u.AM, {
                                targetElementRef: this.guildHeaderDropdownButtonRef,
                                title: er.intl.string(er.t.Q3qa4x),
                                body: er.intl.string(er.t.UyHD4O),
                                onRequestClose: this.handleCloseSubscribeTooltip,
                                position: "bottom",
                                caretConfig: {
                                    align: "center",
                                },
                            }),
                        ],
                    })
                  : this.renderGuildHeaderUpsellPopout(e);
    }
    renderGuildHeader(e) {
        let {
                guild: t,
                isHeaderPopoutOpen: n,
                showGuildHeaderTutorial: i,
                showGuildTemplateDirtyTooltip: l,
                isGuildHeaderDismissibleTooltipShown: a,
                headerAnalyticsLocations: s,
            } = this.props,
            {
                controller: o,
                renderBanner: c,
                bannerVisible: u,
                bannerVisibleHeight: p,
                communityInfoVisible: f,
            } = this.state,
            h = i || l || a;
        return null == t
            ? null
            : (0, r.jsx)(m.f5, {
                  value: s,
                  children: (0, r.jsx)(d.QCx, {
                      targetElementRef: this.guildHeaderRef,
                      renderPopout: this.renderMenuPopout,
                      position: "bottom",
                      align: "center",
                      animation: d.YNO.Animation.SCALE,
                      shouldShow: n,
                      onRequestClose: () => {
                          (0, y.Z)(!1);
                      },
                      spacing: 4,
                      children: (i) => {
                          let { onClick: l } = i,
                              a = eo(i, ["onClick"]);
                          return (0, r.jsx)(
                              Q.Ay,
                              es(
                                  ea(
                                      {
                                          ref: this.guildHeaderRef,
                                          guild: t,
                                          controller: o,
                                          renderBanner: c,
                                          hasSubheader: e,
                                          bannerVisible: u,
                                          communityInfoVisible: f,
                                          guildBanner: this.getGuildBannerHash(),
                                          onClick: this.handleHeaderMenuToggle,
                                          onContextMenu: this.handleHeaderContextMenu,
                                          disableBannerAnimation: h,
                                          animationOverlayHeight: p,
                                      },
                                      a,
                                  ),
                                  {
                                      children: this.renderGuildHeaderNotices(n),
                                  },
                              ),
                          );
                      },
                  }),
              });
    }
    setAnimatedValue(e) {
        let { guild: t } = this.props,
            n = null != this.getGuildBannerHash(),
            r = null != t && (0, W.A)(t);
        null != t && (n || r) && (n ? this.setAnimatedValueForBanner(e) : this.setAnimatedValueForGuildInfo(e));
    }
    setAnimatedValueForGuildInfo(e) {
        let { communityInfoVisible: t, controller: n } = this.state;
        ((e >= 20 && t) || (e < 20 && !t)) && (t = !t),
            t !== this.state.communityInfoVisible &&
                this.setState({
                    communityInfoVisible: t,
                }),
            n
                .update({
                    value: Math.min(1, Math.max(0, 1 - e / 20)),
                    immediate: !0,
                })
                .start();
    }
    renderChannelList() {
        let e = this.props,
            { isUnavailable: t, guild: n, selectedChannel: i, enableStudyGroup: l } = e,
            a = eo(e, ["isUnavailable", "guild", "selectedChannel", "enableStudyGroup"]);
        if (t || null == n)
            return (0, r.jsx)(J.A, {
                withBannerPadding: null != n && null != this.getGuildBannerHash(),
            });
        {
            if (n.features.has($.GuildFeatures.HUB) && !l)
                return (0, r.jsx)("div", {
                    className: ei.r0,
                    children: (0, r.jsx)(j.A, {
                        guild: n,
                        channel: null != i ? i : G.Ay.getDefaultChannel(n.id),
                    }),
                });
            let e = n.id === en.V ? q.T : q.B;
            return (0, r.jsx)(
                e,
                es(
                    ea(
                        {
                            guild: n,
                        },
                        a,
                    ),
                    {
                        guildBanner: this.getGuildBannerHash(),
                        hasGuildSubheader: this.state.hasGuildSubheader,
                        onScroll:
                            null != n && (null != this.getGuildBannerHash() || (0, W.A)(n))
                                ? this.pinBannerOrGuildInfo
                                : null,
                    },
                ),
            );
        }
    }
    render() {
        var e;
        let { guild: t } = this.props;
        return (0, r.jsxs)("nav", {
            className: ei.kL,
            onContextMenu: this.handleContextMenu,
            "aria-label": er.intl.formatToPlainString(er.t.nj5gAZ, {
                guildName: null != (e = null == t ? void 0 : t.name) ? e : "",
            }),
            children: [
                null != t && this.renderGuildHeader(this.state.hasGuildSubheader),
                null != t &&
                    (0, r.jsx)(Z.A, {
                        guild: t,
                        setHasSubheader: (e) =>
                            this.setState({
                                hasGuildSubheader: e,
                            }),
                    }),
                this.renderChannelList(),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            el(this, "historyUnlisten", () => {}),
            el(this, "guildHeaderRef", i.createRef()),
            el(this, "guildHeaderDropdownButtonRef", i.createRef()),
            el(this, "showTimeout", new c.Ep()),
            el(this, "state", {
                controller: new l.Controller({
                    value: 1,
                    immediate: !0,
                }),
                renderBanner: !1,
                bannerVisible: !1,
                communityInfoVisible: !1,
                shouldShowSubscribeTooltip: !1,
                bannerVisibleHeight: 88,
                hasGuildSubheader: !1,
            }),
            el(this, "handleHistoryChange", (e) => {
                null != e.state &&
                    e.state.shouldShowSubscribeTooltip &&
                    this.showTimeout.start(1e3, () =>
                        this.setState({
                            shouldShowSubscribeTooltip: !0,
                        }),
                    );
            }),
            el(this, "handleHeaderMenuToggle", (e) => {
                let { isHeaderPopoutOpen: t } = this.props;
                e.stopPropagation(), (0, y.Z)(!t), this.closeAllHeaderNotices();
            }),
            el(this, "handleContextMenu", (e) => {
                let { guild: t } = this.props;
                null != t &&
                    (0, f.L3)(e, async () => {
                        let { default: e } = await n.e("10758").then(n.bind(n, 455557));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                es(ea({}, n), {
                                    guild: t,
                                }),
                            );
                    });
            }),
            el(this, "handleHeaderContextMenu", (e) => {
                let { guild: t } = this.props;
                null != t &&
                    (0, f.L3)(e, async () => {
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
                            n.e("47841"),
                            n.e("59735"),
                            n.e("54469"),
                            n.e("71675"),
                        ]).then(n.bind(n, 544676));
                        return (n) =>
                            (0, r.jsx)(
                                e,
                                es(ea({}, n), {
                                    guild: t,
                                }),
                            );
                    });
            }),
            el(this, "closeAllHeaderNotices", () => {
                this.handleCloseSubscribeTooltip(),
                    this.handleCloseTemplateDirtyTooltip(),
                    this.handleCloseStudentHubPrivacySettingsTooltip();
            }),
            el(this, "handleCloseStudentHubPrivacySettingsTooltip", () => {
                var e;
                let t = (0, E.k8)(o.M.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP),
                    n = null == (e = this.props.guild) ? void 0 : e.features.has($.GuildFeatures.HUB);
                !t &&
                    n &&
                    (0, E.Dr)(o.M.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP, {
                        dismissAction: et.i.AUTO,
                    });
            }),
            el(this, "handleCloseSubscribeTooltip", () => {
                this.showTimeout.stop(),
                    this.state.shouldShowSubscribeTooltip &&
                        this.setState({
                            shouldShowSubscribeTooltip: !1,
                        });
            }),
            el(this, "handleCloseTemplateDirtyTooltip", () => {
                let { guild: e, showGuildTemplateDirtyTooltip: t } = this.props;
                null != e && t && C.A.hideGuildTemplateDirtyTooltip(e.id);
            }),
            el(this, "renderMenuPopout", async () => {
                let { default: e } = await Promise.all([n.e("59735"), n.e("97357")]).then(n.bind(n, 222785));
                return (t) => {
                    let { closePopout: n } = t,
                        { guild: i } = this.props;
                    return (
                        null != i &&
                        (0, r.jsx)(e, {
                            onClose: n,
                            guild: i,
                        })
                    );
                };
            }),
            el(this, "renderGuildHeaderUpsellPopout", (e) => {
                let {
                    showRoleSubscriptionUpsell: t,
                    showDiscoveryLandingPageSettingsUpsell: n,
                    showHubPrivacySettingsTooltip: i,
                    showMediaChannelUpsell: l,
                    showTierTemplatesUpsell: a,
                    shouldRenderGuildPowerupPerkCoachmark: s,
                    shouldRenderGameServerHostingPerkAvailableCoachmark: c,
                    shouldRenderGameServerNewGamesCoachmark: u,
                    guild: d,
                } = this.props;
                if (null == d) return this.renderGuildHeaderDropdownButton(e);
                let p = [];
                return (i && p.push(o.M.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP),
                t && p.push(o.M.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL),
                n && p.push(o.M.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL),
                s && p.push(o.M.GUILD_POWERUP_PERKS_COACHMARK),
                c && p.push(o.M.GAME_SERVER_HOSTING_NEW_PERK_AVAILABLE_COACHMARK),
                u && p.push(o.M.GAME_SERVER_HOSTING_BATCH_RELEASE_V1_COACHMARK),
                0 === p.length)
                    ? this.renderGuildHeaderDropdownButton(e)
                    : (l && p.push(o.M.MEDIA_CHANNEL_UPSELL),
                      a && p.push(o.M.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL),
                      (0, r.jsx)(X.A, {
                          contentTypes: p,
                          guild: d,
                          renderGuildHeaderDropdownButton: () => this.renderGuildHeaderDropdownButton(e),
                      }));
            }),
            el(this, "renderGuildHeaderDropdownButton", (e) => {
                let t = e ? d.tN5 : d.abt;
                return (0, r.jsx)(t, {
                    ref: this.guildHeaderDropdownButtonRef,
                    size: "xs",
                    color: "currentColor",
                });
            }),
            el(this, "setAnimatedValueForBanner", (e) => {
                let {
                    renderBanner: t,
                    communityInfoVisible: n,
                    bannerVisible: r,
                    bannerVisibleHeight: i,
                    controller: l,
                } = this.state;
                ((e >= 88 && r) || (e < 88 && !r)) && (r = !r),
                    ((e >= 88 && !t) || (e < 88 && t)) && (t = !t),
                    (i = Math.max(88 - e, 0)),
                    (n = r),
                    (t !== this.state.renderBanner ||
                        r !== this.state.bannerVisible ||
                        i !== this.state.bannerVisibleHeight ||
                        n !== this.state.communityInfoVisible) &&
                        this.setState({
                            renderBanner: t,
                            bannerVisible: r,
                            bannerVisibleHeight: i,
                            communityInfoVisible: n,
                        }),
                    l
                        .update({
                            value: Math.min(1, Math.max(0, 1 - e / 88)),
                            immediate: !0,
                        })
                        .start();
            }),
            el(this, "pinBannerOrGuildInfo", (e) => {
                let { scrollTop: t } = e;
                this.setAnimatedValue(t);
            });
    }
}

function ep(e) {
    var t;
    let { guildId: n, hideSelectedChannel: l, selectedChannelId: c } = e,
        u = (0, s.bG)([V.A], () => V.A.getGuild(n));
    (0, h.Tc)(n);
    let p = (0, O.A)(n),
        f = (0, s.bG)([k.A], () => k.A.getGuildDimensions(n).scrollTo),
        C = (0, s.bG)([Y.A], () => Y.A.getChannelId()),
        j = (0, s.bG)([H.A], () => H.A.can($.xBc.MANAGE_GUILD, u)),
        L = (0, s.bG)([U.A], () => U.A.isUnavailable(n)),
        R = (0, s.bG)([K.default], () => K.default.getCurrentUser()),
        { enableStudyGroup: G } = (0, T.y)(u),
        W = (0, _.Ay)((e) => e.currentlyShown.has(o.M.NAGBAR_NOTICE_CONNECT_PLAYSTATION)),
        [q, Q] = i.useState(!W),
        X = (0, A.A)(n),
        { analyticsLocations: Z } = (0, m.Ay)(g.A.GUILD_HEADER);
    i.useEffect(() => {
        n !== X && Q(!W);
    }, [n, X, W]);
    let [J, en] = (0, _.Ay)(
            (e) => [
                ee.cA.some((t) => e.currentlyShown.has(t.dismissibleContentType)),
                e.currentlyShownGroup.has(et.m.GUILD_HEADER_TOOLTIPS),
            ],
            a.x,
        ),
        er = (0, b.A)(u),
        ei = (0, d.red)(d.DXt),
        el = (0, s.bG)([B.A], () => B.A.hasLayers()),
        ea = (0, s.bG)([D.A], () => D.A.shouldShow(ec)),
        es = (0, S.A)(n),
        eo = (null == u ? void 0 : u.features.has($.GuildFeatures.HUB)) === !0,
        eu = j && (null == u ? void 0 : u.features.has($.GuildFeatures.DISCOVERABLE)) === !0,
        ep = (0, s.bG)(
            [N.A, B.A],
            () => null != u && null != R && j && !B.A.hasLayers() && N.A.shouldShowGuildTemplateDirtyTooltip(n),
        ),
        ef = (0, s.bG)([M.A], () => M.A.getChannel(c)),
        { isPopoutOpen: eh } = (0, y.S)(),
        eA = null != (t = null == u ? void 0 : u.features.has($.GuildFeatures.COMMUNITY)) && t,
        eg = z.Ay.isNewUser(R),
        em = q && !eg;
    (0, I.A)(u);
    let eb = (0, E.JZ)(o.M.PREMIUM_TUTORIAL_SERVER_MENU_TOOLTIP),
        e_ = (0, x.A)(n),
        eE = (0, v.A)(n),
        eO = (0, s.bG)([Y.A], () => Y.A.getChannelId()),
        ey = (0, s.bG)([F.A], () => F.A.desyncedVoiceStatesCount),
        eI = (0, w.A)(n),
        ev = (0, P.C$)(n, "GuildSidebar"),
        eS = ev && !1 === eI,
        eC = (0, s.bG)([V.A], () => {
            var e, t;
            return (
                null != (e = null == (t = V.A.getGuild(n)) ? void 0 : t.features.has($.GuildFeatures.GAME_SERVERS)) && e
            );
        }, [n]),
        eN = ev && !eC && !1 === eI;
    return (0, r.jsx)(ed, {
        guildId: n,
        hideSelectedChannel: l,
        guild: u,
        scrollToChannel: f,
        selectedChannelId: l ? null : c,
        selectedChannel: ef,
        selectedVoiceChannelId: C,
        voiceStates: p,
        rtcConnectedChannelId: eO,
        rtcDesyncedVoiceStatesCount: ey,
        isUnavailable: L,
        user: R,
        hasChannelNotice: null != er || J,
        anyLayerOpen: ei || el,
        showDiscoveryLandingPageSettingsUpsell: eu,
        showGuildHeaderTutorial: ea,
        showGuildTemplateDirtyTooltip: ep,
        showRoleSubscriptionUpsell: es,
        showHubPrivacySettingsTooltip: eo,
        showNewUnreadsBar: eA,
        showMediaChannelUpsell: e_,
        showTierTemplatesUpsell: eE,
        isHeaderPopoutOpen: eh,
        enableStudyGroup: G,
        isGuildHeaderDismissibleTooltipShown: en,
        canShowCoachMarkAtBottom: q,
        headerAnalyticsLocations: Z,
        isTutorialHighlightDismissed: eb,
        shouldRenderBurstCoachmark: em,
        shouldRenderGuildPowerupPerkCoachmark: !1 === eI,
        shouldRenderGameServerHostingPerkAvailableCoachmark: eN,
        shouldRenderGameServerNewGamesCoachmark: eS,
    });
}
