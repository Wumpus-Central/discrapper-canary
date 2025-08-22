n.d(t, {
    E: () => e_,
    j: () => ey,
}),
    n(388685),
    n(539854),
    n(35282);
var r,
    i = n(951288),
    l = n(647438),
    o = n(392711),
    a = n.n(o),
    s = n(91192),
    c = n(924826),
    u = n(442837),
    d = n(704215),
    p = n(481060),
    h = n(925549),
    f = n(260300),
    g = n(410575),
    m = n(607070),
    b = n(100527),
    O = n(906732),
    y = n(313201),
    _ = n(362658),
    j = n(583962),
    v = n(915885),
    x = n(258871),
    C = n(216306),
    E = n(398758),
    S = n(742139),
    P = n(761700),
    I = n(486311),
    N = n(620304),
    w = n(220444),
    Z = n(31022),
    T = n(10401),
    A = n(131704),
    R = n(592125),
    D = n(796974),
    M = n(984933),
    L = n(914010),
    k = n(594174),
    U = n(540126),
    G = n(734307),
    B = n(854444),
    F = n(113544),
    V = n(761091),
    H = n(301342),
    z = n(906817),
    W = n(429122),
    K = n(285573),
    Y = n(995993),
    q = n(910595),
    X = n(120818),
    Q = n(61642),
    J = n(848442),
    $ = n(53425),
    ee = n(424785),
    et = n(770202),
    en = n(437621),
    er = n(428127),
    ei = n(950969),
    el = n(233657),
    eo = n(831700),
    ea = n(443063),
    es = n(327530),
    ec = n(981631),
    eu = n(176505),
    ed = n(388032),
    ep = n(776677);
function eh(e, t, n) {
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
function ef(e) {
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
                eh(e, t, n[t]);
            });
    }
    return e;
}
function eg(e, t) {
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
function em(e) {
    return (
        p.TVs.modules.channels.NAME_LINE_HEIGHT.resolve({ density: e }) +
        2 * p.TVs.space.SPACE_XXS.resolve({ density: e }) +
        2
    );
}
class eb extends (r = l.PureComponent) {
    componentDidMount() {
        this.setState({ initialized: !0 }), (0, F.Q5)(this.getVisibleChannels);
    }
    componentWillUnmount() {
        this.updateChannelListScroll.cancel();
    }
    componentDidUpdate(e, t) {
        let { scrollToChannel: n, guildId: r, selectedChannelId: i } = this.props,
            { initialized: l } = this.state,
            { scrollTop: o } = D.Z.getGuildDimensions(r);
        null != n
            ? (this.scrollToChannel(n), h.Z.clearChannelListScrollTo(r))
            : r !== e.guildId
              ? null != o && this.scrollTo(o)
              : i !== e.selectedChannelId
                ? this.scrollToChannel(i)
                : !t.initialized &&
                  l &&
                  (null == o && null != i
                      ? this.scrollToChannel(i, !1, es.yE, this.handleListScroll)
                      : this.scrollTo(null != o ? o : 0, this.handleListScroll)),
            this.testShouldSkipTutorial();
    }
    getSectionRowsFromChannel(e) {
        return this.props.guildChannels.getSectionRowsFromChannel(e);
    }
    scrollTo(e, t) {
        var n;
        null == (n = this._list) ||
            n.scrollTo({
                to: e,
                animate: !1,
                callback: t,
            });
    }
    scrollToChannel(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : es.yE,
            r = arguments.length > 3 ? arguments[3] : void 0,
            i = this._list,
            l = this.getSectionRowsFromChannel(e)[0];
        if (null != l && null != i)
            if (null != l.threadOffset) {
                let [e] = i.getScrollPosition(l.section, l.row),
                    { density: o = "default" } = this.props,
                    a = l.threadOffset * em(o);
                i.scrollIntoViewRect({
                    start: e + a,
                    end: e + a + em(o),
                    padding: n,
                    animate: t,
                    callback: r,
                });
            } else
                i.scrollToIndex({
                    section: l.section,
                    row: l.row,
                    animate: t,
                    padding: n,
                    callback: r,
                });
        else null == r || r();
    }
    isUnreadVisible() {
        let { guildChannels: e } = this.props,
            t = this._list;
        return (
            null != t &&
            t.getItems().some((n) => {
                if ("row" !== n.type) return !1;
                let { section: r, row: i } = n;
                if (r < U.wd || e.isPlaceholderRow(r, i)) return !1;
                let l = e.getChannelFromSectionRow(r, i);
                if (null == l) return !1;
                let { channel: o, category: a } = l;
                return (
                    !!(0, A.vc)(o.record.type) &&
                    (!a.isCollapsed || !a.isMuted) &&
                    !o.isMuted &&
                    !!t.isItemVisible(r, i, !0) &&
                    (0, w.d)(o.record)
                );
            })
        );
    }
    renderTopUnread() {
        let { topMention: e, bottomUnread: t, bottomMention: n, isUnreadVisible: r } = this.state,
            { guildId: l, guildChannels: o, guildChannelsVersion: a } = this.props;
        return (0, i.jsx)("div", {
            className: ep.positionedContainer,
            children: (0, i.jsx)(ei.Z, {
                ref: this.unreadTopRef,
                textUnread: ed.intl.string(ed.t.FCRiT0),
                textMention: ed.intl.string(ed.t["8zH0LC"]),
                hide: null == e && (r || null != t || null != n),
                className: ep.unreadTop,
                barClassName: ep.unreadBar,
                guildId: l,
                guildChannels: o,
                guildChannelsVersion: a,
                isVisible: this.isChannelVisible,
                onJumpTo: this.jumpToChannelWithMentionsAndUnreads,
                onCalculate: this.handleUnreadCalculate,
            }),
        });
    }
    renderBottomUnread() {
        let { guildId: e, guildChannels: t, guildChannelsVersion: n } = this.props,
            { bottomMention: r, isUnreadVisible: l } = this.state;
        return (0, i.jsx)(ei.Z, {
            reverse: !0,
            ref: this.unreadBottomRef,
            textUnread: ed.intl.string(ed.t.FCRiT0),
            textMention: ed.intl.string(ed.t["8zH0LC"]),
            hide: null == r && l,
            className: ep.unreadBottom,
            barClassName: ep.unreadBar,
            guildId: e,
            guildChannels: t,
            guildChannelsVersion: n,
            isVisible: this.isChannelVisible,
            onJumpTo: this.jumpToChannelWithMentionsAndUnreads,
            onCalculate: this.handleUnreadCalculate,
        });
    }
    renderList() {
        let { guildChannels: e, guildBanner: t, selectedGuildId: n, density: r } = this.props,
            l = {};
        n === ec.I_8 && (l["data-favorites"] = !0);
        let o = this.context,
            { ref: a } = o,
            s = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    i = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i = {},
                            l = Object.keys(e);
                        for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                        return i;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < l.length; r++)
                        (n = l[r]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                }
                return i;
            })(o, ["ref"]),
            c = 0;
        null != t && (c = es.Q0);
        let u = "compact" === r ? 8 : es.$k;
        return (0, i.jsx)(p.Wdt, {
            children: (t) =>
                (0, i.jsx)(
                    p.aVo,
                    ef(
                        {
                            ref: this.setListRef,
                            className: ep.scroller,
                            fade: !0,
                            sectionHeight: this.getSectionHeight,
                            footerHeight: this.getSectionFooterHeight,
                            rowHeight: this.getRowHeight,
                            paddingTop: c,
                            paddingBottom: u,
                            renderSection: this.renderSection,
                            renderFooter: this.renderSectionFooter,
                            renderRow: this.renderRow,
                            onScroll: this.handleListScroll,
                            onResize: this.handleResize,
                            onContentResize: this.handleResize,
                            sections: e.getSections(!0),
                            innerAriaLabel: ed.intl.string(ed.t.OGiMXF),
                            innerTag: "ul",
                            getAnchorId: this.getAnchorId,
                        },
                        s,
                        t,
                        l,
                    ),
                    "guild-channels",
                ),
        });
    }
    render() {
        let { guildChannels: e, guildChannelsVersion: t, showNewUnreadsBar: n } = this.props;
        return (0, i.jsx)(y.FG, {
            children: (r) =>
                (0, i.jsx)(p.y5t, {
                    component: (0, i.jsx)(p.nn4, {
                        children: (0, i.jsx)(p.H, {
                            id: r,
                            children: ed.intl.string(ed.t.OGiMXF),
                        }),
                    }),
                    children: n
                        ? (0, i.jsxs)(l.Fragment, {
                              children: [
                                  (0, i.jsx)("div", {
                                      className: ep.positionedContainer,
                                      children: (0, i.jsx)(er.Z, {
                                          position: "top",
                                          guildChannels: e,
                                          guildChannelsVersion: t,
                                          jumpToVoiceChannels: this.jumpToVoiceChannels,
                                          jumpToChannel: this.jumpToChannel,
                                      }),
                                  }),
                                  this.renderList(),
                                  (0, i.jsx)(er.Z, {
                                      position: "bottom",
                                      guildChannels: e,
                                      guildChannelsVersion: t,
                                      jumpToVoiceChannels: this.jumpToVoiceChannels,
                                      jumpToChannel: this.jumpToChannel,
                                  }),
                              ],
                          })
                        : (0, i.jsxs)(l.Fragment, {
                              children: [this.renderTopUnread(), this.renderList(), this.renderBottomUnread()],
                          }),
                }),
        });
    }
    constructor(...e) {
        super(...e),
            eh(this, "_list", null),
            eh(this, "unreadTopRef", l.createRef()),
            eh(this, "unreadBottomRef", l.createRef()),
            eh(this, "state", {
                initialized: !1,
                isUnreadVisible: !0,
                topUnread: null,
                topMention: null,
                bottomUnread: null,
                bottomMention: null,
            }),
            eh(this, "setListRef", (e) => {
                var t;
                let { ref: n } = this.context;
                (n.current = null != (t = null == e ? void 0 : e.getScrollerNode()) ? t : null), (this._list = e);
            }),
            eh(this, "jumpToVoiceChannels", () => {
                var e, t, n, r;
                let { guildChannels: i, voiceStates: l } = this.props,
                    o = 0,
                    a =
                        null !=
                        (n =
                            null == (e = i.getCategoryFromSection(i.voiceChannelsSectionNumber))
                                ? void 0
                                : e.getShownChannelIds())
                            ? n
                            : [];
                for (let e = 0; e < a.length - 1; e++)
                    if ((null != (r = l[a[e]]) ? r : []).length > 0) {
                        o = e + 1;
                        break;
                    }
                null == (t = this._list) ||
                    t.scrollToIndex({
                        section: i.voiceChannelsSectionNumber,
                        row: o,
                        animate: !0,
                        padding: es.yE,
                    });
            }),
            eh(this, "jumpToChannel", (e) => this.scrollToChannel(e, !0, es.Q1)),
            eh(this, "jumpToChannelWithMentionsAndUnreads", (e, t) => {
                let [n, r] = t;
                return this.scrollToChannel(e, !0, null != n && null != r ? es.Q1 : es.yE);
            }),
            eh(this, "isChannelVisible", (e, t) => {
                let n = this.getSectionRowsFromChannel(e),
                    r = this._list;
                if (null == r) return !1;
                for (let { row: e, section: i } of n) {
                    let [n, l] = r.getScrollPosition(i, e),
                        o = r.getScrollerState();
                    if ((t && n + l < o.scrollTop + o.offsetHeight) || (!t && n > o.scrollTop)) return !0;
                }
                return !1;
            }),
            eh(this, "getVisibleChannels", () => {
                let e = this._list;
                if (null == e) return [];
                let t = e.getItems(),
                    n = e.getScrollerState(),
                    r = [];
                for (var i = 0; i < t.length; i++) {
                    let l = t[i];
                    if ((0, p.oZU)(l) && l.section >= this.props.guildChannels.favoritesSectionNumber) {
                        let t = this.props.guildChannels.getChannelFromSectionRow(l.section, l.row),
                            [i, o] = e.getScrollPosition(l.section, l.row);
                        null != t && i + o < n.scrollTop + n.offsetHeight && i > n.scrollTop && r.push(t.channel.id);
                    }
                }
                return r;
            }),
            eh(this, "handleResize", () => {
                var e, t;
                let { showNewUnreadsBar: n } = this.props,
                    r = null != (t = null == (e = this._list) ? void 0 : e.getScrollerState()) ? t : null;
                if ((this.setState({ isUnreadVisible: this.isUnreadVisible() }), n && null != r)) {
                    let { scrollTop: e } = r;
                    this.updateChannelListScroll(e);
                }
            }),
            eh(this, "handleListScroll", () => {
                var e, t;
                let { onScroll: n } = this.props,
                    r = null != (t = null == (e = this._list) ? void 0 : e.getScrollerState()) ? t : null;
                if (null != r) {
                    let { scrollTop: e } = r;
                    null != n && n(r), this.updateChannelListScroll(e);
                }
                null != this.unreadTopRef.current && this.unreadTopRef.current.calculateState(),
                    null != this.unreadBottomRef.current && this.unreadBottomRef.current.calculateState();
            }),
            eh(this, "handleUnreadCalculate", (e, t, n) => {
                let r = this.isUnreadVisible();
                n
                    ? this.setState({
                          isUnreadVisible: r,
                          bottomUnread: t,
                          bottomMention: e,
                      })
                    : this.setState({
                          isUnreadVisible: r,
                          topUnread: t,
                          topMention: e,
                      });
            }),
            eh(
                this,
                "updateChannelListScroll",
                a().throttle((e) => {
                    h.Z.updateChannelListScroll(this.props.guildId, e, this.getVisibleChannels());
                }, 100),
            ),
            eh(this, "getSectionHeight", (e) => {
                let { guild: t, guildChannels: n, density: r } = this.props;
                return (0, z.EM)(e, t, n, r);
            }),
            eh(this, "getSectionFooterHeight", (e) => {
                let {
                    guildChannels: t,
                    voiceStates: n,
                    selectedVoiceChannelId: r,
                    selectedChannelId: i,
                    optInEnabled: l,
                    guildChannelsVersion: o,
                } = this.props;
                return (0, W.dt)({
                    sectionIndex: e,
                    guildChannels: t,
                    guildChannelsVersion: o,
                    voiceStates: n,
                    selectedChannelId: i,
                    selectedVoiceChannelId: r,
                    optInEnabled: l,
                    density: this.props.density,
                });
            }),
            eh(this, "getRowHeight", (e, t) => {
                let {
                        guildChannels: n,
                        voiceStates: r,
                        stageChannelSpeakerVoiceStates: i,
                        selectedVoiceChannelId: l,
                        selectedGuildId: o,
                        density: a = "default",
                    } = this.props,
                    s = em(a);
                if (e === U.wZ) {
                    let e = n.getGuildActionSection();
                    return e.isEmpty()
                        ? 0
                        : e.getRow(t) === ea.z.GUILD_PREMIUM_PROGRESS_BAR
                          ? e.getRows().length > 1
                              ? j.aR
                              : j.PD
                          : s;
                }
                if (n.isPlaceholderRow(e, t)) return 0;
                let c = n.getChannelFromSectionRow(e, t);
                if (null == c) return 0;
                let { channel: u, category: d } = c;
                if (u.record.type === ec.d4z.GUILD_CATEGORY) return 40;
                let { isFavoritesPerk: h } = _.Z.getCurrentConfig(
                    { location: "channel_list" },
                    { autoTrackExposure: !0 },
                );
                for (let e of (!h ||
                    o !== ec.I_8 ||
                    u.record.isDM() ||
                    u.record.isGroupDM() ||
                    u.record.isGuildStageVoice() ||
                    (s = 46),
                u.threadIds)) {
                    let { density: t = "default" } = this.props;
                    s += em(t);
                    let n = r[u.id];
                    null != n && n.length > 0 && ((s += l === e ? 32 * n.length : 32), (s += es.cx));
                }
                if (u.record.isGuildVoice()) {
                    let e = r[u.id];
                    if (null != e && e.length > 0) {
                        let t = 32 * e.length;
                        (u.isCollapsed || d.isCollapsed) && (t = 32),
                            (s += t + p.TVs.space.SPACE_XS.resolve({ density: a }));
                    }
                    u.id === this.props.rtcConnectedChannelId && (s += 32 * this.props.rtcDesyncedVoiceStatesCount);
                }
                if ((null != u.subtitle && (s += es.NY), u.record.isGuildStageVoice())) {
                    var f, g;
                    let e = null != (f = r[u.id]) ? f : [],
                        t = null != (g = i[u.id]) ? g : [];
                    if (null != e && e.length > 0) {
                        let e = 32 * t.length;
                        u.isCollapsed || d.isCollapsed ? (e = Math.ceil(e / es.VE)) : (e += 32), (s += e + es.cx);
                    }
                }
                return s;
            }),
            eh(this, "dismissRecents", () => {
                let { guild: e, guildChannels: t, selectedChannelId: n } = this.props,
                    r = t.getCategoryFromSection(t.recentsSectionNumber);
                if (null == r) return;
                let i = null,
                    l = r.getShownChannelAndThreadIds();
                null != n && l.includes(n) && (i = (0, C.KY)(t)), (0, C.Uo)(e.id, l, i);
            }),
            eh(this, "renderSection", (e) => {
                let { section: t } = e,
                    {
                        guildChannels: n,
                        guildChannelsVersion: r,
                        guild: l,
                        selectedChannelId: o,
                        disableManageChannels: a,
                    } = this.props;
                return (0, i.jsx)(
                    z.ZP,
                    {
                        sectionIndex: t,
                        guild: l,
                        guildChannels: n,
                        guildChannelsVersion: r,
                        selectedChannelId: o,
                        disableManageChannels: a,
                    },
                    (0, z.WW)(t, n),
                );
            }),
            eh(this, "renderRow", (e) => {
                let { section: t, row: n } = e,
                    {
                        guild: r,
                        selectedChannel: o,
                        selectedChannelId: a,
                        selectedVoiceChannel: s,
                        selectedVoiceChannelId: c,
                        guildChannels: u,
                        voiceStates: p,
                        disableManageChannels: h,
                        stageChannelSpeakerVoiceStates: f,
                        optInEnabled: g,
                        withGuildIcon: m,
                        isNewGuildPowerupsProgressBarEnabled: b,
                        shouldRenderBoosterEnhancedRoleColorsCoachmark: O,
                    } = this.props;
                if (t === U.wZ) {
                    let e = u.getGuildActionSection(),
                        t = e.getRow(n);
                    if (null == t) return null;
                    switch (t) {
                        case ea.z.GUILD_HUB_HEADER_OPTIONS:
                            return (0, i.jsx)(
                                x.Z,
                                {
                                    guild: r,
                                    channel: M.ZP.getDefaultChannel(r.id),
                                },
                                ea.z.GUILD_HUB_HEADER_OPTIONS,
                            );
                        case ea.z.GUILD_PREMIUM_PROGRESS_BAR:
                            let l = e.getRows(),
                                o = [];
                            return (
                                O && o.push(d.z.BOOSTER_ENHANCED_ROLE_COLORS_COACHMARK),
                                b
                                    ? (0, i.jsx)(
                                          N.Z,
                                          {
                                              guild: r,
                                              tooltipTypes: o,
                                              withMargin: l.length > 1,
                                          },
                                          ea.z.GUILD_PREMIUM_PROGRESS_BAR,
                                      )
                                    : (0, i.jsx)(
                                          j.ZP,
                                          {
                                              guild: r,
                                              tooltipTypes: o,
                                              withMargin: l.length > 1,
                                          },
                                          ea.z.GUILD_PREMIUM_PROGRESS_BAR,
                                      )
                            );
                        case ea.z.GUILD_HOME:
                            return (0, i.jsx)(
                                q.Z,
                                {
                                    guild: r,
                                    selected: a === eu.oC.GUILD_HOME,
                                },
                                ea.z.GUILD_HOME,
                            );
                        case ea.z.GUILD_SCHEDULED_EVENTS:
                            return (0, i.jsx)(
                                el.Z,
                                {
                                    guild: r,
                                    selected: a === ea.z.GUILD_SCHEDULED_EVENTS,
                                },
                                ea.z.GUILD_SCHEDULED_EVENTS,
                            );
                        case ea.z.GUILD_ROLE_SUBSCRIPTIONS:
                            return (0, i.jsx)(
                                Q.Z,
                                {
                                    guild: r,
                                    selected: a === eu.oC.ROLE_SUBSCRIPTIONS,
                                },
                                ea.z.GUILD_ROLE_SUBSCRIPTIONS,
                            );
                        case ea.z.GUILD_SHOP:
                            return (0, i.jsx)(
                                J.Z,
                                {
                                    guild: r,
                                    selected: a === eu.oC.GUILD_SHOP,
                                },
                                ea.z.GUILD_SHOP,
                            );
                        case ea.z.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR:
                            return (0, i.jsx)(X.T, { guild: r });
                        case ea.z.CHANNELS_AND_ROLES:
                            return (0, i.jsx)(
                                Y.m,
                                {
                                    guild: r,
                                    selected: a === eu.oC.CHANNEL_BROWSER || a === eu.oC.CUSTOMIZE_COMMUNITY,
                                },
                                ea.z.CHANNELS_AND_ROLES,
                            );
                        case ea.z.GUILD_DIRECTORY:
                            return (0, i.jsx)(
                                K.Z,
                                {
                                    guild: r,
                                    selectedChannelId: a,
                                    disableManageChannels: h,
                                },
                                ea.z.GUILD_DIRECTORY,
                            );
                        case ea.z.GUILD_MOD_DASH_MEMBER_SAFETY:
                            return (0, i.jsx)(
                                v.Z,
                                {
                                    guild: r,
                                    selected: a === eu.oC.MEMBER_SAFETY,
                                },
                                ea.z.GUILD_MOD_DASH_MEMBER_SAFETY,
                            );
                        case ea.z.GUILD_BOOSTS:
                            return (0, i.jsx)(
                                I.Z,
                                {
                                    guildId: r.id,
                                    selected: a === eu.oC.GUILD_BOOSTS,
                                },
                                ea.z.GUILD_BOOSTS,
                            );
                        default:
                            return null;
                    }
                }
                if (u.isPlaceholderRow(t, n)) return null;
                let y = u.getChannelFromSectionRow(t, n);
                if (null == y) return null;
                let { category: _, channel: C } = y,
                    E = _ instanceof U.VR,
                    S = C.record,
                    P = "".concat(t).concat(C.id);
                switch (S.type) {
                    case ec.d4z.GUILD_ANNOUNCEMENT:
                    case ec.d4z.GUILD_TEXT:
                    case ec.d4z.GUILD_FORUM:
                    case ec.d4z.GUILD_MEDIA:
                    case ec.d4z.DM:
                    case ec.d4z.GROUP_DM:
                        return (0, i.jsxs)(
                            l.Fragment,
                            {
                                children: [
                                    (0, i.jsx)(en.Z, {
                                        channel: S,
                                        guild: r,
                                        position: C.position,
                                        selected: a === C.id,
                                        muted: C.isMuted,
                                        subtitle: C.subtitle,
                                        disableManageChannels: h,
                                        canBeNewChannel: g && t === u.recentsSectionNumber,
                                        isFavoriteCategory: E,
                                        withGuildIcon: m,
                                    }),
                                    C.threadCount > 0
                                        ? (0, i.jsx)($.Z, {
                                              withGuildIcon: m,
                                              channel: S,
                                              sortedThreadIds: C.threadIds,
                                              selectedChannel:
                                                  null != o && (o.id === C.id || o.parent_id === S.id) ? o : null,
                                              selectedVoiceChannelId:
                                                  (null == s ? void 0 : s.parent_id) === S.id ? c : null,
                                          })
                                        : null,
                                ],
                            },
                            P,
                        );
                    case ec.d4z.GUILD_STAGE_VOICE:
                        var w, Z;
                        return (0, i.jsx)(
                            ee.Z,
                            {
                                channel: S,
                                guild: r,
                                position: C.position,
                                selected: a === C.id,
                                connected: c === C.id,
                                collapsed: C.isCollapsed || _.isCollapsed,
                                voiceStates: null != (w = p[C.id]) ? w : [],
                                speakerVoiceStates: null != (Z = f[C.id]) ? Z : [],
                                disableManageChannels: h,
                                isFavoriteCategory: E,
                            },
                            P,
                        );
                    case ec.d4z.GUILD_VOICE:
                        return (0, i.jsx)(
                            eo.Z,
                            {
                                channel: S,
                                guild: r,
                                position: C.position,
                                selected: a === C.id,
                                connected: c === C.id,
                                collapsed: C.isCollapsed || _.isCollapsed,
                                voiceStates: p[C.id],
                                subtitle: C.subtitle,
                                disableManageChannels: h,
                                showTutorial: C.isFirstVoiceChannel,
                                isFavoriteCategory: E,
                                withGuildIcon: m,
                            },
                            P,
                        );
                    case ec.d4z.GUILD_STORE:
                        return (0, i.jsx)(
                            et.Z,
                            {
                                channel: S,
                                guild: r,
                                position: C.position,
                                selected: a === C.id,
                            },
                            P,
                        );
                    case ec.d4z.GUILD_CATEGORY:
                        if (t !== u.voiceChannelsSectionNumber) return null;
                        return (0, i.jsx)(H.kw, { channel: S }, "readonly-".concat(S.id));
                    case ec.d4z.PUBLIC_THREAD:
                    case ec.d4z.PRIVATE_THREAD:
                        return (0, i.jsx)(
                            en.Z,
                            {
                                channel: S,
                                guild: r,
                                position: C.position,
                                selected: a === C.id,
                                muted: C.isMuted,
                                subtitle: C.subtitle,
                                disableManageChannels: h,
                                canBeNewChannel: !1,
                                isFavoriteCategory: !1,
                                forceTopLevelThread: !0,
                            },
                            P,
                        );
                    default:
                        return null;
                }
            }),
            eh(this, "renderSectionFooter", (e) => {
                let { section: t } = e,
                    {
                        guildChannels: n,
                        guildChannelsVersion: r,
                        voiceStates: l,
                        selectedChannelId: o,
                        selectedVoiceChannelId: a,
                        optInEnabled: s,
                        guildId: c,
                    } = this.props;
                return (0, i.jsx)(
                    W.ZP,
                    {
                        guildId: c,
                        guildChannels: n,
                        guildChannelsVersion: r,
                        sectionIndex: t,
                        voiceStates: l,
                        selectedChannelId: o,
                        selectedVoiceChannelId: a,
                        optInEnabled: s,
                    },
                    (0, W.eo)(t, n, s),
                );
            }),
            eh(this, "getAnchorId", (e, t) => {
                var n, r, i;
                let { guildChannels: l } = this.props;
                if (e !== U.wZ) {
                    if (null == t)
                        return e === U.p2
                            ? "favorites-header"
                            : e === l.recentsSectionNumber
                              ? "recents-header"
                              : e === l.voiceChannelsSectionNumber
                                ? "voice-channels"
                                : e === U.wd
                                  ? "uncategorized-header"
                                  : null == (i = l.getNamedCategoryFromSection(e))
                                    ? void 0
                                    : i.id;
                    if (!l.isPlaceholderRow(e, t))
                        return null == (r = l.getChannelFromSectionRow(e, t)) || null == (n = r.channel)
                            ? void 0
                            : n.id;
                }
            }),
            eh(this, "testShouldSkipTutorial", () => {
                if (!T.Z.shouldShow("voice-conversations")) return;
                let { guildChannels: e } = this.props,
                    t = e.getFirstVoiceChannel();
                if (null == t) return void f.Z.dismiss("voice-conversations");
                let n = this._list;
                if (null != n)
                    for (let { section: e, row: r } of this.getSectionRowsFromChannel(t.id))
                        n.isItemVisible(e, r) || f.Z.dismiss("voice-conversations");
            });
    }
}
eh(eb, "contextType", s.qB), eh(eb, "defaultProps", { density: "default" });
let eO = (e) => {
    let { guildId: t, guild: n, selectedChannelId: r, selectedVoiceChannelId: o } = e,
        a = (0, u.e7)([m.Z], () => m.Z.keyboardModeEnabled),
        { analyticsLocations: d } = (0, O.ZP)(b.Z.GUILD_CHANNEL_LIST),
        p = (0, u.e7)([R.Z], () => R.Z.getChannel(r)),
        h = (0, u.e7)([R.Z], () => R.Z.getChannel(o)),
        f = (0, u.e7)([L.Z], () => L.Z.getGuildId()),
        y = (0, E.DM)(t),
        _ = l.useRef(null),
        j = l.useCallback((e, t) => {
            let n = _.current;
            if (null != n)
                if (ec.Xyh.test(t) || (0, eu.AB)(t))
                    n.scrollToChannel(t, !1, 2 * es.yE, () => {
                        requestAnimationFrame(() => {
                            var t;
                            return null == (t = document.querySelector(e)) ? void 0 : t.focus();
                        });
                    });
                else {
                    var r;
                    null == (r = document.querySelector(e)) || r.focus();
                }
        }, []),
        v = l.useCallback(
            () =>
                new Promise((e) => {
                    let t = _.current;
                    if (null == t) return e();
                    t.scrollTo(0, () => requestAnimationFrame(() => e()));
                }),
            [],
        ),
        x = l.useCallback(
            () =>
                new Promise((e) => {
                    let t = _.current;
                    if (null == t) return e();
                    t.scrollTo(Number.MAX_SAFE_INTEGER, () => requestAnimationFrame(() => e()));
                }),
            [],
        ),
        C = (0, c.ZP)({
            id: "channels",
            defaultFocused: null != r ? r : void 0,
            isEnabled: a,
            setFocus: j,
            scrollToStart: v,
            scrollToEnd: x,
        }),
        I = C.setFocus;
    l.useEffect(() => {
        null != r && I(r);
    }, [r, I]);
    let N = (0, Z.Z)(t),
        w = (0, S.V)("NavigableChannels"),
        T = (0, u.e7)([k.default], () => k.default.getCurrentUser()),
        A = (0, P.Z)(null == T ? void 0 : T.id, t) && !0 === n.premiumProgressBarEnabled;
    return (0, i.jsx)(O.Gt, {
        value: d,
        children: (0, i.jsx)(g.Z, {
            section: ec.jXE.GUILD_CHANNEL_LIST,
            children: (0, i.jsx)(s.bG, {
                navigator: C,
                children: (0, i.jsx)(
                    eb,
                    eg(ef({}, e), {
                        listNavigator: C,
                        ref: _,
                        selectedChannel: p,
                        selectedVoiceChannel: h,
                        stageChannelSpeakerVoiceStates: N,
                        selectedGuildId: f,
                        optInEnabled: y,
                        isNewGuildPowerupsProgressBarEnabled: w,
                        shouldRenderBoosterEnhancedRoleColorsCoachmark: A,
                    }),
                ),
            }),
        }),
    });
};
function ey(e) {
    let t = (0, B.o)(),
        { isFavoritesPerk: n } = (0, _.z)("favorites-channel-list"),
        { density: r } = (0, p.TCT)();
    return (0, i.jsx)(
        eO,
        eg(ef({}, e), {
            guildChannels: t,
            guildChannelsVersion: 0,
            withGuildIcon: n,
            density: r,
        }),
    );
}
function e_(e) {
    let t = (0, V.Z)(e.guild),
        n = (0, u.cj)([G.Z], () => G.Z.getGuild(e.guildId, { guildActionRows: t })),
        { density: r } = (0, p.TCT)();
    return (0, i.jsx)(eO, eg(ef({}, e, n), { density: r }));
}
