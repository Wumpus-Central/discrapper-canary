n.d(t, {
    E: () => eg,
    j: () => ef,
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
    d = n(481060),
    p = n(925549),
    h = n(260300),
    f = n(410575),
    g = n(607070),
    m = n(100527),
    b = n(906732),
    O = n(313201),
    y = n(362658),
    _ = n(915885),
    v = n(258871),
    j = n(216306),
    x = n(398758),
    C = n(486311),
    S = n(620304),
    E = n(220444),
    P = n(31022),
    I = n(10401),
    N = n(131704),
    w = n(592125),
    Z = n(796974),
    T = n(984933),
    A = n(914010),
    R = n(540126),
    D = n(734307),
    M = n(854444),
    L = n(113544),
    k = n(761091),
    U = n(301342),
    G = n(906817),
    B = n(429122),
    F = n(285573),
    V = n(995993),
    H = n(910595),
    z = n(120818),
    W = n(61642),
    K = n(848442),
    Y = n(53425),
    q = n(424785),
    X = n(770202),
    Q = n(437621),
    J = n(428127),
    $ = n(950969),
    ee = n(233657),
    et = n(831700),
    en = n(443063),
    er = n(327530),
    ei = n(981631),
    el = n(176505),
    eo = n(388032),
    ea = n(776677);
function es(e, t, n) {
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
function ec(e) {
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
                es(e, t, n[t]);
            });
    }
    return e;
}
function eu(e, t) {
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
function ed(e) {
    return (
        d.TVs.modules.channels.NAME_LINE_HEIGHT.resolve({ density: e }) +
        2 * d.TVs.space.SPACE_XXS.resolve({ density: e }) +
        2
    );
}
class ep extends (r = l.PureComponent) {
    componentDidMount() {
        this.setState({ initialized: !0 }), (0, L.Q5)(this.getVisibleChannels);
    }
    componentWillUnmount() {
        this.updateChannelListScroll.cancel();
    }
    componentDidUpdate(e, t) {
        let { scrollToChannel: n, guildId: r, selectedChannelId: i } = this.props,
            { initialized: l } = this.state,
            { scrollTop: o } = Z.Z.getGuildDimensions(r);
        null != n
            ? (this.scrollToChannel(n), p.Z.clearChannelListScrollTo(r))
            : r !== e.guildId
              ? null != o && this.scrollTo(o)
              : i !== e.selectedChannelId
                ? this.scrollToChannel(i)
                : !t.initialized &&
                  l &&
                  (null == o && null != i
                      ? this.scrollToChannel(i, !1, er.yE, this.handleListScroll)
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
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : er.yE,
            r = arguments.length > 3 ? arguments[3] : void 0,
            i = this._list,
            l = this.getSectionRowsFromChannel(e)[0];
        if (null != l && null != i)
            if (null != l.threadOffset) {
                let [e] = i.getScrollPosition(l.section, l.row),
                    { density: o = "default" } = this.props,
                    a = l.threadOffset * ed(o);
                i.scrollIntoViewRect({
                    start: e + a,
                    end: e + a + ed(o),
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
                if (r < R.wd || e.isPlaceholderRow(r, i)) return !1;
                let l = e.getChannelFromSectionRow(r, i);
                if (null == l) return !1;
                let { channel: o, category: a } = l;
                return (
                    !!(0, N.vc)(o.record.type) &&
                    (!a.isCollapsed || !a.isMuted) &&
                    !o.isMuted &&
                    !!t.isItemVisible(r, i, !0) &&
                    (0, E.d)(o.record)
                );
            })
        );
    }
    renderTopUnread() {
        let { topMention: e, bottomUnread: t, bottomMention: n, isUnreadVisible: r } = this.state,
            { guildId: l, guildChannels: o, guildChannelsVersion: a } = this.props;
        return (0, i.jsx)("div", {
            className: ea.positionedContainer,
            children: (0, i.jsx)($.Z, {
                ref: this.unreadTopRef,
                textUnread: eo.intl.string(eo.t.FCRiT0),
                textMention: eo.intl.string(eo.t["8zH0LC"]),
                hide: null == e && (r || null != t || null != n),
                className: ea.unreadTop,
                barClassName: ea.unreadBar,
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
        return (0, i.jsx)($.Z, {
            reverse: !0,
            ref: this.unreadBottomRef,
            textUnread: eo.intl.string(eo.t.FCRiT0),
            textMention: eo.intl.string(eo.t["8zH0LC"]),
            hide: null == r && l,
            className: ea.unreadBottom,
            barClassName: ea.unreadBar,
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
        n === ei.I_8 && (l["data-favorites"] = !0);
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
        null != t && (c = er.Q0);
        let u = "compact" === r ? 8 : er.$k;
        return (0, i.jsx)(d.Wdt, {
            children: (t) =>
                (0, i.jsx)(
                    d.aVo,
                    ec(
                        {
                            ref: this.setListRef,
                            className: ea.scroller,
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
                            innerAriaLabel: eo.intl.string(eo.t.OGiMXF),
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
        return (0, i.jsx)(O.FG, {
            children: (r) =>
                (0, i.jsx)(d.y5t, {
                    component: (0, i.jsx)(d.nn4, {
                        children: (0, i.jsx)(d.H, {
                            id: r,
                            children: eo.intl.string(eo.t.OGiMXF),
                        }),
                    }),
                    children: n
                        ? (0, i.jsxs)(l.Fragment, {
                              children: [
                                  (0, i.jsx)("div", {
                                      className: ea.positionedContainer,
                                      children: (0, i.jsx)(J.Z, {
                                          position: "top",
                                          guildChannels: e,
                                          guildChannelsVersion: t,
                                          jumpToVoiceChannels: this.jumpToVoiceChannels,
                                          jumpToChannel: this.jumpToChannel,
                                      }),
                                  }),
                                  this.renderList(),
                                  (0, i.jsx)(J.Z, {
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
            es(this, "_list", null),
            es(this, "unreadTopRef", l.createRef()),
            es(this, "unreadBottomRef", l.createRef()),
            es(this, "state", {
                initialized: !1,
                isUnreadVisible: !0,
                topUnread: null,
                topMention: null,
                bottomUnread: null,
                bottomMention: null,
            }),
            es(this, "setListRef", (e) => {
                var t;
                let { ref: n } = this.context;
                (n.current = null != (t = null == e ? void 0 : e.getScrollerNode()) ? t : null), (this._list = e);
            }),
            es(this, "jumpToVoiceChannels", () => {
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
                        padding: er.yE,
                    });
            }),
            es(this, "jumpToChannel", (e) => this.scrollToChannel(e, !0, er.Q1)),
            es(this, "jumpToChannelWithMentionsAndUnreads", (e, t) => {
                let [n, r] = t;
                return this.scrollToChannel(e, !0, null != n && null != r ? er.Q1 : er.yE);
            }),
            es(this, "isChannelVisible", (e, t) => {
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
            es(this, "getVisibleChannels", () => {
                let e = this._list;
                if (null == e) return [];
                let t = e.getItems(),
                    n = e.getScrollerState(),
                    r = [];
                for (var i = 0; i < t.length; i++) {
                    let l = t[i];
                    if ((0, d.oZU)(l) && l.section >= this.props.guildChannels.favoritesSectionNumber) {
                        let t = this.props.guildChannels.getChannelFromSectionRow(l.section, l.row),
                            [i, o] = e.getScrollPosition(l.section, l.row);
                        null != t && i + o < n.scrollTop + n.offsetHeight && i > n.scrollTop && r.push(t.channel.id);
                    }
                }
                return r;
            }),
            es(this, "handleResize", () => {
                var e, t;
                let { showNewUnreadsBar: n } = this.props,
                    r = null != (t = null == (e = this._list) ? void 0 : e.getScrollerState()) ? t : null;
                if ((this.setState({ isUnreadVisible: this.isUnreadVisible() }), n && null != r)) {
                    let { scrollTop: e } = r;
                    this.updateChannelListScroll(e);
                }
            }),
            es(this, "handleListScroll", () => {
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
            es(this, "handleUnreadCalculate", (e, t, n) => {
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
            es(
                this,
                "updateChannelListScroll",
                a().throttle((e) => {
                    p.Z.updateChannelListScroll(this.props.guildId, e, this.getVisibleChannels());
                }, 100),
            ),
            es(this, "getSectionHeight", (e) => {
                let { guild: t, guildChannels: n, density: r } = this.props;
                return (0, G.EM)(e, t, n, r);
            }),
            es(this, "getSectionFooterHeight", (e) => {
                let {
                    guildChannels: t,
                    voiceStates: n,
                    selectedVoiceChannelId: r,
                    selectedChannelId: i,
                    optInEnabled: l,
                    guildChannelsVersion: o,
                } = this.props;
                return (0, B.dt)({
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
            es(this, "getRowHeight", (e, t) => {
                let {
                        guildChannels: n,
                        voiceStates: r,
                        stageChannelSpeakerVoiceStates: i,
                        selectedVoiceChannelId: l,
                        selectedGuildId: o,
                        density: a = "default",
                    } = this.props,
                    s = ed(a);
                if (e === R.wZ) {
                    let e = n.getGuildActionSection();
                    return e.isEmpty()
                        ? 0
                        : e.getRow(t) === en.z.GUILD_PREMIUM_PROGRESS_BAR
                          ? e.getRows().length > 1
                              ? 69
                              : 57
                          : s;
                }
                if (n.isPlaceholderRow(e, t)) return 0;
                let c = n.getChannelFromSectionRow(e, t);
                if (null == c) return 0;
                let { channel: u, category: p } = c;
                if (u.record.type === ei.d4z.GUILD_CATEGORY) return 40;
                let { isFavoritesPerk: h } = y.Z.getCurrentConfig(
                    { location: "channel_list" },
                    { autoTrackExposure: !0 },
                );
                for (let e of (!h ||
                    o !== ei.I_8 ||
                    u.record.isDM() ||
                    u.record.isGroupDM() ||
                    u.record.isGuildStageVoice() ||
                    (s = 46),
                u.threadIds)) {
                    let { density: t = "default" } = this.props;
                    s += ed(t);
                    let n = r[u.id];
                    null != n && n.length > 0 && ((s += l === e ? 32 * n.length : 32), (s += er.cx));
                }
                if (u.record.isGuildVoice()) {
                    let e = r[u.id];
                    if (null != e && e.length > 0) {
                        let t = 32 * e.length;
                        (u.isCollapsed || p.isCollapsed) && (t = 32),
                            (s += t + d.TVs.space.SPACE_XS.resolve({ density: a }));
                    }
                    u.id === this.props.rtcConnectedChannelId && (s += 32 * this.props.rtcDesyncedVoiceStatesCount);
                }
                if ((null != u.subtitle && (s += er.NY), u.record.isGuildStageVoice())) {
                    var f, g;
                    let e = null != (f = r[u.id]) ? f : [],
                        t = null != (g = i[u.id]) ? g : [];
                    if (null != e && e.length > 0) {
                        let e = 32 * t.length;
                        u.isCollapsed || p.isCollapsed ? (e = Math.ceil(e / er.VE)) : (e += 32), (s += e + er.cx);
                    }
                }
                return s;
            }),
            es(this, "dismissRecents", () => {
                let { guild: e, guildChannels: t, selectedChannelId: n } = this.props,
                    r = t.getCategoryFromSection(t.recentsSectionNumber);
                if (null == r) return;
                let i = null,
                    l = r.getShownChannelAndThreadIds();
                null != n && l.includes(n) && (i = (0, j.KY)(t)), (0, j.Uo)(e.id, l, i);
            }),
            es(this, "renderSection", (e) => {
                let { section: t } = e,
                    {
                        guildChannels: n,
                        guildChannelsVersion: r,
                        guild: l,
                        selectedChannelId: o,
                        disableManageChannels: a,
                    } = this.props;
                return (0, i.jsx)(
                    G.ZP,
                    {
                        sectionIndex: t,
                        guild: l,
                        guildChannels: n,
                        guildChannelsVersion: r,
                        selectedChannelId: o,
                        disableManageChannels: a,
                    },
                    (0, G.WW)(t, n),
                );
            }),
            es(this, "renderRow", (e) => {
                let { section: t, row: n } = e,
                    {
                        guild: r,
                        selectedChannel: o,
                        selectedChannelId: a,
                        selectedVoiceChannel: s,
                        selectedVoiceChannelId: c,
                        guildChannels: u,
                        voiceStates: d,
                        disableManageChannels: p,
                        stageChannelSpeakerVoiceStates: h,
                        optInEnabled: f,
                        withGuildIcon: g,
                    } = this.props;
                if (t === R.wZ) {
                    let e = u.getGuildActionSection(),
                        t = e.getRow(n);
                    if (null == t) return null;
                    switch (t) {
                        case en.z.GUILD_HUB_HEADER_OPTIONS:
                            return (0, i.jsx)(
                                v.Z,
                                {
                                    guild: r,
                                    channel: T.ZP.getDefaultChannel(r.id),
                                },
                                en.z.GUILD_HUB_HEADER_OPTIONS,
                            );
                        case en.z.GUILD_PREMIUM_PROGRESS_BAR:
                            let l = e.getRows();
                            return (0, i.jsx)(
                                S.Z,
                                {
                                    guild: r,
                                    withMargin: l.length > 1,
                                },
                                en.z.GUILD_PREMIUM_PROGRESS_BAR,
                            );
                        case en.z.GUILD_HOME:
                            return (0, i.jsx)(
                                H.Z,
                                {
                                    guild: r,
                                    selected: a === el.oC.GUILD_HOME,
                                },
                                en.z.GUILD_HOME,
                            );
                        case en.z.GUILD_SCHEDULED_EVENTS:
                            return (0, i.jsx)(
                                ee.Z,
                                {
                                    guild: r,
                                    selected: a === en.z.GUILD_SCHEDULED_EVENTS,
                                },
                                en.z.GUILD_SCHEDULED_EVENTS,
                            );
                        case en.z.GUILD_ROLE_SUBSCRIPTIONS:
                            return (0, i.jsx)(
                                W.Z,
                                {
                                    guild: r,
                                    selected: a === el.oC.ROLE_SUBSCRIPTIONS,
                                },
                                en.z.GUILD_ROLE_SUBSCRIPTIONS,
                            );
                        case en.z.GUILD_SHOP:
                            return (0, i.jsx)(
                                K.Z,
                                {
                                    guild: r,
                                    selected: a === el.oC.GUILD_SHOP,
                                },
                                en.z.GUILD_SHOP,
                            );
                        case en.z.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR:
                            return (0, i.jsx)(z.T, { guild: r });
                        case en.z.CHANNELS_AND_ROLES:
                            return (0, i.jsx)(
                                V.m,
                                {
                                    guild: r,
                                    selected: a === el.oC.CHANNEL_BROWSER || a === el.oC.CUSTOMIZE_COMMUNITY,
                                },
                                en.z.CHANNELS_AND_ROLES,
                            );
                        case en.z.GUILD_DIRECTORY:
                            return (0, i.jsx)(
                                F.Z,
                                {
                                    guild: r,
                                    selectedChannelId: a,
                                    disableManageChannels: p,
                                },
                                en.z.GUILD_DIRECTORY,
                            );
                        case en.z.GUILD_MOD_DASH_MEMBER_SAFETY:
                            return (0, i.jsx)(
                                _.Z,
                                {
                                    guild: r,
                                    selected: a === el.oC.MEMBER_SAFETY,
                                },
                                en.z.GUILD_MOD_DASH_MEMBER_SAFETY,
                            );
                        case en.z.GUILD_BOOSTS:
                            return (0, i.jsx)(
                                C.Z,
                                {
                                    guildId: r.id,
                                    selected: a === el.oC.GUILD_BOOSTS,
                                },
                                en.z.GUILD_BOOSTS,
                            );
                        default:
                            return null;
                    }
                }
                if (u.isPlaceholderRow(t, n)) return null;
                let m = u.getChannelFromSectionRow(t, n);
                if (null == m) return null;
                let { category: b, channel: O } = m,
                    y = b instanceof R.VR,
                    j = O.record,
                    x = "".concat(t).concat(O.id);
                switch (j.type) {
                    case ei.d4z.GUILD_ANNOUNCEMENT:
                    case ei.d4z.GUILD_TEXT:
                    case ei.d4z.GUILD_FORUM:
                    case ei.d4z.GUILD_MEDIA:
                    case ei.d4z.DM:
                    case ei.d4z.GROUP_DM:
                        return (0, i.jsxs)(
                            l.Fragment,
                            {
                                children: [
                                    (0, i.jsx)(Q.Z, {
                                        channel: j,
                                        guild: r,
                                        position: O.position,
                                        selected: a === O.id,
                                        muted: O.isMuted,
                                        subtitle: O.subtitle,
                                        disableManageChannels: p,
                                        canBeNewChannel: f && t === u.recentsSectionNumber,
                                        isFavoriteCategory: y,
                                        withGuildIcon: g,
                                    }),
                                    O.threadCount > 0
                                        ? (0, i.jsx)(Y.Z, {
                                              withGuildIcon: g,
                                              channel: j,
                                              sortedThreadIds: O.threadIds,
                                              selectedChannel:
                                                  null != o && (o.id === O.id || o.parent_id === j.id) ? o : null,
                                              selectedVoiceChannelId:
                                                  (null == s ? void 0 : s.parent_id) === j.id ? c : null,
                                          })
                                        : null,
                                ],
                            },
                            x,
                        );
                    case ei.d4z.GUILD_STAGE_VOICE:
                        var E, P;
                        return (0, i.jsx)(
                            q.Z,
                            {
                                channel: j,
                                guild: r,
                                position: O.position,
                                selected: a === O.id,
                                connected: c === O.id,
                                collapsed: O.isCollapsed || b.isCollapsed,
                                voiceStates: null != (E = d[O.id]) ? E : [],
                                speakerVoiceStates: null != (P = h[O.id]) ? P : [],
                                disableManageChannels: p,
                                isFavoriteCategory: y,
                            },
                            x,
                        );
                    case ei.d4z.GUILD_VOICE:
                        return (0, i.jsx)(
                            et.Z,
                            {
                                channel: j,
                                guild: r,
                                position: O.position,
                                selected: a === O.id,
                                connected: c === O.id,
                                collapsed: O.isCollapsed || b.isCollapsed,
                                voiceStates: d[O.id],
                                subtitle: O.subtitle,
                                disableManageChannels: p,
                                showTutorial: O.isFirstVoiceChannel,
                                isFavoriteCategory: y,
                                withGuildIcon: g,
                            },
                            x,
                        );
                    case ei.d4z.GUILD_STORE:
                        return (0, i.jsx)(
                            X.Z,
                            {
                                channel: j,
                                guild: r,
                                position: O.position,
                                selected: a === O.id,
                            },
                            x,
                        );
                    case ei.d4z.GUILD_CATEGORY:
                        if (t !== u.voiceChannelsSectionNumber) return null;
                        return (0, i.jsx)(U.kw, { channel: j }, "readonly-".concat(j.id));
                    case ei.d4z.PUBLIC_THREAD:
                    case ei.d4z.PRIVATE_THREAD:
                        return (0, i.jsx)(
                            Q.Z,
                            {
                                channel: j,
                                guild: r,
                                position: O.position,
                                selected: a === O.id,
                                muted: O.isMuted,
                                subtitle: O.subtitle,
                                disableManageChannels: p,
                                canBeNewChannel: !1,
                                isFavoriteCategory: !1,
                                forceTopLevelThread: !0,
                            },
                            x,
                        );
                    default:
                        return null;
                }
            }),
            es(this, "renderSectionFooter", (e) => {
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
                    B.ZP,
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
                    (0, B.eo)(t, n, s),
                );
            }),
            es(this, "getAnchorId", (e, t) => {
                var n, r, i;
                let { guildChannels: l } = this.props;
                if (e !== R.wZ) {
                    if (null == t)
                        return e === R.p2
                            ? "favorites-header"
                            : e === l.recentsSectionNumber
                              ? "recents-header"
                              : e === l.voiceChannelsSectionNumber
                                ? "voice-channels"
                                : e === R.wd
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
            es(this, "testShouldSkipTutorial", () => {
                if (!I.Z.shouldShow("voice-conversations")) return;
                let { guildChannels: e } = this.props,
                    t = e.getFirstVoiceChannel();
                if (null == t) return void h.Z.dismiss("voice-conversations");
                let n = this._list;
                if (null != n)
                    for (let { section: e, row: r } of this.getSectionRowsFromChannel(t.id))
                        n.isItemVisible(e, r) || h.Z.dismiss("voice-conversations");
            });
    }
}
es(ep, "contextType", s.qB), es(ep, "defaultProps", { density: "default" });
let eh = (e) => {
    let { guildId: t, selectedChannelId: n, selectedVoiceChannelId: r } = e,
        o = (0, u.e7)([g.Z], () => g.Z.keyboardModeEnabled),
        { analyticsLocations: a } = (0, b.ZP)(m.Z.GUILD_CHANNEL_LIST),
        d = (0, u.e7)([w.Z], () => w.Z.getChannel(n)),
        p = (0, u.e7)([w.Z], () => w.Z.getChannel(r)),
        h = (0, u.e7)([A.Z], () => A.Z.getGuildId()),
        O = (0, x.DM)(t),
        y = l.useRef(null),
        _ = l.useCallback((e, t) => {
            let n = y.current;
            if (null != n)
                if (ei.Xyh.test(t) || (0, el.AB)(t))
                    n.scrollToChannel(t, !1, 2 * er.yE, () => {
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
                    let t = y.current;
                    if (null == t) return e();
                    t.scrollTo(0, () => requestAnimationFrame(() => e()));
                }),
            [],
        ),
        j = l.useCallback(
            () =>
                new Promise((e) => {
                    let t = y.current;
                    if (null == t) return e();
                    t.scrollTo(Number.MAX_SAFE_INTEGER, () => requestAnimationFrame(() => e()));
                }),
            [],
        ),
        C = (0, c.ZP)({
            id: "channels",
            defaultFocused: null != n ? n : void 0,
            isEnabled: o,
            setFocus: _,
            scrollToStart: v,
            scrollToEnd: j,
        }),
        S = C.setFocus;
    l.useEffect(() => {
        null != n && S(n);
    }, [n, S]);
    let E = (0, P.Z)(t);
    return (0, i.jsx)(b.Gt, {
        value: a,
        children: (0, i.jsx)(f.Z, {
            section: ei.jXE.GUILD_CHANNEL_LIST,
            children: (0, i.jsx)(s.bG, {
                navigator: C,
                children: (0, i.jsx)(
                    ep,
                    eu(ec({}, e), {
                        listNavigator: C,
                        ref: y,
                        selectedChannel: d,
                        selectedVoiceChannel: p,
                        stageChannelSpeakerVoiceStates: E,
                        selectedGuildId: h,
                        optInEnabled: O,
                    }),
                ),
            }),
        }),
    });
};
function ef(e) {
    let t = (0, M.o)(),
        { isFavoritesPerk: n } = (0, y.z)("favorites-channel-list"),
        { density: r } = (0, d.TCT)();
    return (0, i.jsx)(
        eh,
        eu(ec({}, e), {
            guildChannels: t,
            guildChannelsVersion: 0,
            withGuildIcon: n,
            density: r,
        }),
    );
}
function eg(e) {
    let t = (0, k.Z)(e.guild),
        n = (0, u.cj)([D.Z], () => D.Z.getGuild(e.guildId, { guildActionRows: t })),
        { density: r } = (0, d.TCT)();
    return (0, i.jsx)(eh, eu(ec({}, e, n), { density: r }));
}
