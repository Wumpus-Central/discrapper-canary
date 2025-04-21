n.d(t, {
    E: () => em,
    j: () => eg
}),
    n(388685),
    n(539854),
    n(35282);
var r,
    i = n(200651),
    l = n(192379),
    o = n(392711),
    s = n.n(o),
    a = n(91192),
    c = n(924826),
    u = n(442837),
    d = n(481060),
    h = n(925549),
    p = n(260300),
    f = n(410575),
    g = n(607070),
    m = n(100527),
    b = n(906732),
    y = n(313201),
    _ = n(540059),
    O = n(362658),
    v = n(583962),
    C = n(915885),
    j = n(258871),
    x = n(216306),
    S = n(398758),
    E = n(486311),
    I = n(220444),
    P = n(31022),
    w = n(10401),
    N = n(131704),
    Z = n(592125),
    T = n(796974),
    A = n(984933),
    R = n(914010),
    D = n(540126),
    L = n(734307),
    k = n(854444),
    M = n(761091),
    U = n(301342),
    G = n(906817),
    B = n(429122),
    V = n(285573),
    F = n(995993),
    H = n(910595),
    z = n(120818),
    W = n(61642),
    Y = n(848442),
    K = n(53425),
    q = n(424785),
    Q = n(770202),
    X = n(79556),
    J = n(428127),
    $ = n(950969),
    ee = n(233657),
    et = n(831700),
    en = n(443063),
    er = n(327530),
    ei = n(981631),
    el = n(176505),
    eo = n(388032),
    es = n(789123);
function ea(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function ec(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                ea(e, t, n[t]);
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
function ed(e, t) {
    return e
        ? d.TVs.modules.channels.NAME_LINE_HEIGHT.resolve({
              enabledExperiments: ['visual-refresh'],
              density: t
          }) +
              2 * d.TVs.space.SPACE_XXS.resolve({ density: t }) +
              2
        : er.Vf;
}
function eh(e) {
    return e ? 32 : er.Hb;
}
class ep extends (r = l.PureComponent) {
    componentDidMount() {
        this.setState({ initialized: !0 });
    }
    componentWillUnmount() {
        this.updateChannelListScroll.cancel();
    }
    componentDidUpdate(e, t) {
        let { scrollToChannel: n, guildId: r, selectedChannelId: i } = this.props,
            { initialized: l } = this.state,
            { scrollTop: o } = T.Z.getGuildDimensions(r);
        null != n ? (this.scrollToChannel(n), h.Z.clearChannelListScrollTo(r)) : r !== e.guildId ? null != o && this.scrollTo(o) : i !== e.selectedChannelId ? this.scrollToChannel(i) : !t.initialized && l && (null == o && null != i ? this.scrollToChannel(i, !1, er.yE, this.handleListScroll) : this.scrollTo(null != o ? o : 0, this.handleListScroll)), this.testShouldSkipTutorial();
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
                callback: t
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
                    { isRefreshEnabled: o = !1, density: s = 'default' } = this.props,
                    a = l.threadOffset * ed(o, s);
                i.scrollIntoViewRect({
                    start: e + a,
                    end: e + a + ed(o, s),
                    padding: n,
                    animate: t,
                    callback: r
                });
            } else
                i.scrollToIndex({
                    section: l.section,
                    row: l.row,
                    animate: t,
                    padding: n,
                    callback: r
                });
        else null == r || r();
    }
    isUnreadVisible() {
        let { guildChannels: e } = this.props,
            t = this._list;
        return (
            null != t &&
            t.getItems().some((n) => {
                if ('row' !== n.type) return !1;
                let { section: r, row: i } = n;
                if (r < D.wd || e.isPlaceholderRow(r, i)) return !1;
                let l = e.getChannelFromSectionRow(r, i);
                if (null == l) return !1;
                let { channel: o, category: s } = l;
                return !!(0, N.vc)(o.record.type) && (!s.isCollapsed || !s.isMuted) && !o.isMuted && !!t.isItemVisible(r, i, !0) && (0, I.d)(o.record);
            })
        );
    }
    renderTopUnread() {
        let { topMention: e, bottomUnread: t, bottomMention: n, isUnreadVisible: r } = this.state,
            { guildId: l, guildChannels: o, guildChannelsVersion: s } = this.props;
        return (0, i.jsx)('div', {
            className: es.positionedContainer,
            children: (0, i.jsx)($.Z, {
                ref: this.unreadTopRef,
                textUnread: eo.intl.string(eo.t.FCRiT0),
                textMention: eo.intl.string(eo.t['8zH0LC']),
                hide: null == e && (r || null != t || null != n),
                className: es.unreadTop,
                barClassName: es.unreadBar,
                guildId: l,
                guildChannels: o,
                guildChannelsVersion: s,
                isVisible: this.isChannelVisible,
                onJumpTo: this.jumpToChannelWithMentionsAndUnreads,
                onCalculate: this.handleUnreadCalculate
            })
        });
    }
    renderBottomUnread() {
        let { guildId: e, guildChannels: t, guildChannelsVersion: n } = this.props,
            { bottomMention: r, isUnreadVisible: l } = this.state;
        return (0, i.jsx)($.Z, {
            reverse: !0,
            ref: this.unreadBottomRef,
            textUnread: eo.intl.string(eo.t.FCRiT0),
            textMention: eo.intl.string(eo.t['8zH0LC']),
            hide: null == r && l,
            className: es.unreadBottom,
            barClassName: es.unreadBar,
            guildId: e,
            guildChannels: t,
            guildChannelsVersion: n,
            isVisible: this.isChannelVisible,
            onJumpTo: this.jumpToChannelWithMentionsAndUnreads,
            onCalculate: this.handleUnreadCalculate
        });
    }
    renderList() {
        let { guildChannels: e, guild: t, guildBanner: n, hasGuildSubheader: r, selectedGuildId: l, isRefreshEnabled: o, density: s } = this.props,
            a = {};
        l === ei.I_8 && (a['data-favorites'] = !0);
        let c = this.context,
            { ref: u } = c,
            h = (function (e, t) {
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
                    for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                }
                return i;
            })(c, ['ref']),
            p = 0;
        null != n ? (p = er.Q0) : t.hasCommunityInfoSubheader() && !r && (p = er.JD);
        let f = o && 'compact' === s ? 8 : er.$k;
        return (0, i.jsx)(d.Wdt, {
            children: (t) =>
                (0, i.jsx)(
                    d.aVo,
                    ec(
                        {
                            ref: this.setListRef,
                            className: es.scroller,
                            fade: !0,
                            customTheme: !0,
                            sectionHeight: this.getSectionHeight,
                            footerHeight: this.getSectionFooterHeight,
                            rowHeight: this.getRowHeight,
                            paddingTop: p,
                            paddingBottom: f,
                            renderSection: this.renderSection,
                            renderFooter: this.renderSectionFooter,
                            renderRow: this.renderRow,
                            onScroll: this.handleListScroll,
                            onResize: this.handleResize,
                            onContentResize: this.handleResize,
                            sections: e.getSections(!0),
                            innerAriaLabel: eo.intl.string(eo.t.OGiMXF),
                            innerTag: 'ul',
                            getAnchorId: this.getAnchorId
                        },
                        h,
                        t,
                        a
                    ),
                    'guild-channels'
                )
        });
    }
    render() {
        let { guildChannels: e, guildChannelsVersion: t, showNewUnreadsBar: n } = this.props;
        return (0, i.jsx)(y.FG, {
            children: (r) =>
                (0, i.jsx)(d.y5t, {
                    component: (0, i.jsx)(d.nn4, {
                        children: (0, i.jsx)(d.H, {
                            id: r,
                            children: eo.intl.string(eo.t.OGiMXF)
                        })
                    }),
                    children: n
                        ? (0, i.jsxs)(l.Fragment, {
                              children: [
                                  (0, i.jsx)('div', {
                                      className: es.positionedContainer,
                                      children: (0, i.jsx)(J.Z, {
                                          position: 'top',
                                          guildChannels: e,
                                          guildChannelsVersion: t,
                                          jumpToVoiceChannels: this.jumpToVoiceChannels,
                                          jumpToChannel: this.jumpToChannel
                                      })
                                  }),
                                  this.renderList(),
                                  (0, i.jsx)(J.Z, {
                                      position: 'bottom',
                                      guildChannels: e,
                                      guildChannelsVersion: t,
                                      jumpToVoiceChannels: this.jumpToVoiceChannels,
                                      jumpToChannel: this.jumpToChannel
                                  })
                              ]
                          })
                        : (0, i.jsxs)(l.Fragment, {
                              children: [this.renderTopUnread(), this.renderList(), this.renderBottomUnread()]
                          })
                })
        });
    }
    constructor(...e) {
        super(...e),
            ea(this, '_list', null),
            ea(this, 'unreadTopRef', l.createRef()),
            ea(this, 'unreadBottomRef', l.createRef()),
            ea(this, 'state', {
                initialized: !1,
                isUnreadVisible: !0,
                topUnread: null,
                topMention: null,
                bottomUnread: null,
                bottomMention: null
            }),
            ea(this, 'setListRef', (e) => {
                var t;
                let { ref: n } = this.context;
                (n.current = null != (t = null == e ? void 0 : e.getScrollerNode()) ? t : null), (this._list = e);
            }),
            ea(this, 'jumpToVoiceChannels', () => {
                var e, t, n, r;
                let { guildChannels: i, voiceStates: l } = this.props,
                    o = 0,
                    s = null != (n = null == (e = i.getCategoryFromSection(i.voiceChannelsSectionNumber)) ? void 0 : e.getShownChannelIds()) ? n : [];
                for (let e = 0; e < s.length - 1; e++)
                    if ((null != (r = l[s[e]]) ? r : []).length > 0) {
                        o = e + 1;
                        break;
                    }
                null == (t = this._list) ||
                    t.scrollToIndex({
                        section: i.voiceChannelsSectionNumber,
                        row: o,
                        animate: !0,
                        padding: er.yE
                    });
            }),
            ea(this, 'jumpToChannel', (e) => this.scrollToChannel(e, !0, er.Q1)),
            ea(this, 'jumpToChannelWithMentionsAndUnreads', (e, t) => {
                let [n, r] = t;
                return this.scrollToChannel(e, !0, null != n && null != r ? er.Q1 : er.yE);
            }),
            ea(this, 'isChannelVisible', (e, t) => {
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
            ea(this, 'getVisibleChannels', () => {
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
            ea(this, 'handleResize', () => {
                var e, t;
                let { showNewUnreadsBar: n } = this.props,
                    r = null != (t = null == (e = this._list) ? void 0 : e.getScrollerState()) ? t : null;
                if ((this.setState({ isUnreadVisible: this.isUnreadVisible() }), n && null != r)) {
                    let { scrollTop: e } = r;
                    this.updateChannelListScroll(e);
                }
            }),
            ea(this, 'handleListScroll', () => {
                var e, t;
                let { onScroll: n } = this.props,
                    r = null != (t = null == (e = this._list) ? void 0 : e.getScrollerState()) ? t : null;
                if (null != r) {
                    let { scrollTop: e } = r;
                    null != n && n(r), this.updateChannelListScroll(e);
                }
                null != this.unreadTopRef.current && this.unreadTopRef.current.calculateState(), null != this.unreadBottomRef.current && this.unreadBottomRef.current.calculateState();
            }),
            ea(this, 'handleUnreadCalculate', (e, t, n) => {
                let r = this.isUnreadVisible();
                n
                    ? this.setState({
                          isUnreadVisible: r,
                          bottomUnread: t,
                          bottomMention: e
                      })
                    : this.setState({
                          isUnreadVisible: r,
                          topUnread: t,
                          topMention: e
                      });
            }),
            ea(
                this,
                'updateChannelListScroll',
                s().throttle((e) => {
                    h.Z.updateChannelListScroll(this.props.guildId, e, this.getVisibleChannels());
                }, 100)
            ),
            ea(this, 'getSectionHeight', (e) => {
                let { guild: t, guildChannels: n, isRefreshEnabled: r, density: i } = this.props;
                return (0, G.EM)(e, t, n, !!r, i);
            }),
            ea(this, 'getSectionFooterHeight', (e) => {
                let { guildChannels: t, voiceStates: n, selectedVoiceChannelId: r, selectedChannelId: i, optInEnabled: l, guildChannelsVersion: o } = this.props;
                return (0, B.dt)({
                    sectionIndex: e,
                    guildChannels: t,
                    guildChannelsVersion: o,
                    voiceStates: n,
                    selectedChannelId: i,
                    selectedVoiceChannelId: r,
                    optInEnabled: l,
                    visualRefreshEnabled: this.props.isRefreshEnabled,
                    density: this.props.density
                });
            }),
            ea(this, 'getRowHeight', (e, t) => {
                let { guildChannels: n, voiceStates: r, stageChannelSpeakerVoiceStates: i, selectedVoiceChannelId: l, selectedGuildId: o, isRefreshEnabled: s = !1, density: a = 'default' } = this.props,
                    c = ed(s, a);
                if (e === D.wZ) {
                    let e = n.getGuildActionSection();
                    return e.isEmpty() ? 0 : e.getRow(t) === en.z.GUILD_PREMIUM_PROGRESS_BAR ? (e.getRows().length > 1 ? v.aR : v.PD) : c;
                }
                if (n.isPlaceholderRow(e, t)) return 0;
                let u = n.getChannelFromSectionRow(e, t);
                if (null == u) return 0;
                let { channel: h, category: p } = u;
                if (h.record.type === ei.d4z.GUILD_CATEGORY) return 40;
                let { isFavoritesPerk: f } = O.Z.getCurrentConfig({ location: 'channel_list' }, { autoTrackExposure: !0 });
                for (let e of (!f || o !== ei.I_8 || h.record.isDM() || h.record.isGroupDM() || h.record.isGuildStageVoice() || (c = this.props.isRefreshEnabled ? 46 : er.GQ), h.threadIds)) {
                    let { isRefreshEnabled: t = !1, density: n = 'default' } = this.props;
                    c += ed(t, n);
                    let i = r[h.id];
                    null != i && i.length > 0 && ((c += l === e ? i.length * eh(this.props.isRefreshEnabled) : eh(this.props.isRefreshEnabled)), (c += er.cx));
                }
                if (h.record.isGuildVoice()) {
                    let e = r[h.id];
                    if (null != e && e.length > 0) {
                        let t = e.length * eh(this.props.isRefreshEnabled);
                        (h.isCollapsed || p.isCollapsed) && (t = eh(this.props.isRefreshEnabled)), (c += t + (s ? d.TVs.space.SPACE_XS.resolve({ density: a }) : er.cx));
                    }
                    h.id === this.props.rtcConnectedChannelId && (c += this.props.rtcDesyncedVoiceStatesCount * eh(this.props.isRefreshEnabled));
                }
                if ((null != h.subtitle && (c += er.NY), h.record.isGuildStageVoice())) {
                    var g, m;
                    let e = null != (g = r[h.id]) ? g : [],
                        t = null != (m = i[h.id]) ? m : [];
                    if (null != e && e.length > 0) {
                        let e = t.length * eh(this.props.isRefreshEnabled);
                        h.isCollapsed || p.isCollapsed ? (e = Math.ceil(e / er.VE)) : (e += eh(this.props.isRefreshEnabled)), (c += e + er.cx);
                    }
                }
                return c;
            }),
            ea(this, 'dismissRecents', () => {
                let { guild: e, guildChannels: t, selectedChannelId: n } = this.props,
                    r = t.getCategoryFromSection(t.recentsSectionNumber);
                if (null == r) return;
                let i = null,
                    l = r.getShownChannelAndThreadIds();
                null != n && l.includes(n) && (i = (0, x.KY)(t)), (0, x.Uo)(e.id, l, i);
            }),
            ea(this, 'renderSection', (e) => {
                let { section: t } = e,
                    { guildChannels: n, guildChannelsVersion: r, guild: l, selectedChannelId: o, disableManageChannels: s } = this.props;
                return (0, i.jsx)(
                    G.ZP,
                    {
                        sectionIndex: t,
                        guild: l,
                        guildChannels: n,
                        guildChannelsVersion: r,
                        selectedChannelId: o,
                        disableManageChannels: s
                    },
                    (0, G.WW)(t, n)
                );
            }),
            ea(this, 'renderRow', (e) => {
                let { section: t, row: n } = e,
                    { guild: r, selectedChannel: o, selectedChannelId: s, selectedVoiceChannel: a, selectedVoiceChannelId: c, guildChannels: u, voiceStates: d, disableManageChannels: h, stageChannelSpeakerVoiceStates: p, optInEnabled: f, withGuildIcon: g } = this.props;
                if (t === D.wZ) {
                    let e = u.getGuildActionSection(),
                        t = e.getRow(n);
                    if (null == t) return null;
                    switch (t) {
                        case en.z.GUILD_HUB_HEADER_OPTIONS:
                            return (0, i.jsx)(
                                j.Z,
                                {
                                    guild: r,
                                    channel: A.ZP.getDefaultChannel(r.id)
                                },
                                en.z.GUILD_HUB_HEADER_OPTIONS
                            );
                        case en.z.GUILD_PREMIUM_PROGRESS_BAR:
                            let l = e.getRows();
                            return (0, i.jsx)(
                                v.ZP,
                                {
                                    guild: r,
                                    withMargin: l.length > 1
                                },
                                en.z.GUILD_PREMIUM_PROGRESS_BAR
                            );
                        case en.z.GUILD_HOME:
                            return (0, i.jsx)(
                                H.Z,
                                {
                                    guild: r,
                                    selected: s === el.oC.GUILD_HOME
                                },
                                en.z.GUILD_HOME
                            );
                        case en.z.GUILD_SCHEDULED_EVENTS:
                            return (0, i.jsx)(
                                ee.Z,
                                {
                                    guild: r,
                                    selected: s === en.z.GUILD_SCHEDULED_EVENTS
                                },
                                en.z.GUILD_SCHEDULED_EVENTS
                            );
                        case en.z.GUILD_ROLE_SUBSCRIPTIONS:
                            return (0, i.jsx)(
                                W.Z,
                                {
                                    guild: r,
                                    selected: s === el.oC.ROLE_SUBSCRIPTIONS
                                },
                                en.z.GUILD_ROLE_SUBSCRIPTIONS
                            );
                        case en.z.GUILD_SHOP:
                            return (0, i.jsx)(
                                Y.Z,
                                {
                                    guild: r,
                                    selected: s === el.oC.GUILD_SHOP
                                },
                                en.z.GUILD_SHOP
                            );
                        case en.z.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR:
                            return (0, i.jsx)(z.T, { guild: r });
                        case en.z.CHANNELS_AND_ROLES:
                            return (0, i.jsx)(
                                F.m,
                                {
                                    guild: r,
                                    selected: s === el.oC.CHANNEL_BROWSER || s === el.oC.CUSTOMIZE_COMMUNITY
                                },
                                en.z.CHANNELS_AND_ROLES
                            );
                        case en.z.GUILD_DIRECTORY:
                            return (0, i.jsx)(
                                V.Z,
                                {
                                    guild: r,
                                    selectedChannelId: s,
                                    disableManageChannels: h
                                },
                                en.z.GUILD_DIRECTORY
                            );
                        case en.z.GUILD_MOD_DASH_MEMBER_SAFETY:
                            return (0, i.jsx)(
                                C.Z,
                                {
                                    guild: r,
                                    selected: s === el.oC.MEMBER_SAFETY
                                },
                                en.z.GUILD_MOD_DASH_MEMBER_SAFETY
                            );
                        case en.z.GUILD_BOOSTS:
                            return (0, i.jsx)(
                                E.Z,
                                {
                                    guildId: r.id,
                                    selected: s === el.oC.GUILD_BOOSTS
                                },
                                en.z.GUILD_BOOSTS
                            );
                        default:
                            return null;
                    }
                }
                if (u.isPlaceholderRow(t, n)) return null;
                let m = u.getChannelFromSectionRow(t, n);
                if (null == m) return null;
                let { category: b, channel: y } = m,
                    _ = b instanceof D.VR,
                    O = y.record,
                    x = ''.concat(t).concat(y.id);
                switch (O.type) {
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
                                    (0, i.jsx)(X.Z, {
                                        channel: O,
                                        guild: r,
                                        position: y.position,
                                        selected: s === y.id,
                                        muted: y.isMuted,
                                        subtitle: y.subtitle,
                                        disableManageChannels: h,
                                        canBeNewChannel: f && t === u.recentsSectionNumber,
                                        isFavoriteCategory: _,
                                        withGuildIcon: g
                                    }),
                                    y.threadCount > 0
                                        ? (0, i.jsx)(K.Z, {
                                              withGuildIcon: g,
                                              channel: O,
                                              sortedThreadIds: y.threadIds,
                                              selectedChannel: null != o && (o.id === y.id || o.parent_id === O.id) ? o : null,
                                              selectedVoiceChannelId: (null == a ? void 0 : a.parent_id) === O.id ? c : null
                                          })
                                        : null
                                ]
                            },
                            x
                        );
                    case ei.d4z.GUILD_STAGE_VOICE:
                        var S, I;
                        return (0, i.jsx)(
                            q.Z,
                            {
                                channel: O,
                                guild: r,
                                position: y.position,
                                selected: s === y.id,
                                connected: c === y.id,
                                collapsed: y.isCollapsed || b.isCollapsed,
                                voiceStates: null != (S = d[y.id]) ? S : [],
                                speakerVoiceStates: null != (I = p[y.id]) ? I : [],
                                disableManageChannels: h,
                                isFavoriteCategory: _
                            },
                            x
                        );
                    case ei.d4z.GUILD_VOICE:
                        return (0, i.jsx)(
                            et.Z,
                            {
                                channel: O,
                                guild: r,
                                position: y.position,
                                selected: s === y.id,
                                connected: c === y.id,
                                collapsed: y.isCollapsed || b.isCollapsed,
                                voiceStates: d[y.id],
                                subtitle: y.subtitle,
                                disableManageChannels: h,
                                showTutorial: y.isFirstVoiceChannel,
                                isFavoriteCategory: _,
                                withGuildIcon: g
                            },
                            x
                        );
                    case ei.d4z.GUILD_STORE:
                        return (0, i.jsx)(
                            Q.Z,
                            {
                                channel: O,
                                guild: r,
                                position: y.position,
                                selected: s === y.id
                            },
                            x
                        );
                    case ei.d4z.GUILD_CATEGORY:
                        if (t !== u.voiceChannelsSectionNumber) return null;
                        return (0, i.jsx)(U.kw, { channel: O }, 'readonly-'.concat(O.id));
                    case ei.d4z.PUBLIC_THREAD:
                    case ei.d4z.PRIVATE_THREAD:
                        return (0, i.jsx)(
                            X.Z,
                            {
                                channel: O,
                                guild: r,
                                position: y.position,
                                selected: s === y.id,
                                muted: y.isMuted,
                                subtitle: y.subtitle,
                                disableManageChannels: h,
                                canBeNewChannel: !1,
                                isFavoriteCategory: !1,
                                forceTopLevelThread: !0
                            },
                            x
                        );
                    default:
                        return null;
                }
            }),
            ea(this, 'renderSectionFooter', (e) => {
                let { section: t } = e,
                    { guildChannels: n, guildChannelsVersion: r, voiceStates: l, selectedChannelId: o, selectedVoiceChannelId: s, optInEnabled: a, guildId: c } = this.props;
                return (0, i.jsx)(
                    B.ZP,
                    {
                        guildId: c,
                        guildChannels: n,
                        guildChannelsVersion: r,
                        sectionIndex: t,
                        voiceStates: l,
                        selectedChannelId: o,
                        selectedVoiceChannelId: s,
                        optInEnabled: a
                    },
                    (0, B.eo)(t, n, a)
                );
            }),
            ea(this, 'getAnchorId', (e, t) => {
                var n, r, i;
                let { guildChannels: l } = this.props;
                if (e !== D.wZ) {
                    if (null == t) return e === D.p2 ? 'favorites-header' : e === l.recentsSectionNumber ? 'recents-header' : e === l.voiceChannelsSectionNumber ? 'voice-channels' : e === D.wd ? 'uncategorized-header' : null == (i = l.getNamedCategoryFromSection(e)) ? void 0 : i.id;
                    if (!l.isPlaceholderRow(e, t)) return null == (r = l.getChannelFromSectionRow(e, t)) || null == (n = r.channel) ? void 0 : n.id;
                }
            }),
            ea(this, 'testShouldSkipTutorial', () => {
                if (!w.Z.shouldShow('voice-conversations')) return;
                let { guildChannels: e } = this.props,
                    t = e.getFirstVoiceChannel();
                if (null == t) return void p.Z.dismiss('voice-conversations');
                let n = this._list;
                if (null != n) for (let { section: e, row: r } of this.getSectionRowsFromChannel(t.id)) n.isItemVisible(e, r) || p.Z.dismiss('voice-conversations');
            });
    }
}
ea(ep, 'contextType', a.qB),
    ea(ep, 'defaultProps', {
        isRefreshEnabled: !1,
        density: 'default'
    });
let ef = (e) => {
    let { guildId: t, selectedChannelId: n, selectedVoiceChannelId: r } = e,
        o = (0, u.e7)([g.Z], () => g.Z.keyboardModeEnabled),
        { analyticsLocations: s } = (0, b.ZP)(m.Z.GUILD_CHANNEL_LIST),
        d = (0, u.e7)([Z.Z], () => Z.Z.getChannel(n)),
        h = (0, u.e7)([Z.Z], () => Z.Z.getChannel(r)),
        p = (0, u.e7)([R.Z], () => R.Z.getGuildId()),
        y = (0, S.DM)(t),
        O = l.useRef(null),
        v = l.useCallback((e, t) => {
            let n = O.current;
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
        C = l.useCallback(
            () =>
                new Promise((e) => {
                    let t = O.current;
                    if (null == t) return e();
                    t.scrollTo(0, () => requestAnimationFrame(() => e()));
                }),
            []
        ),
        j = l.useCallback(
            () =>
                new Promise((e) => {
                    let t = O.current;
                    if (null == t) return e();
                    t.scrollTo(Number.MAX_SAFE_INTEGER, () => requestAnimationFrame(() => e()));
                }),
            []
        ),
        x = (0, c.ZP)({
            id: 'channels',
            defaultFocused: null != n ? n : void 0,
            isEnabled: o,
            setFocus: v,
            scrollToStart: C,
            scrollToEnd: j
        }),
        E = x.setFocus;
    l.useEffect(() => {
        null != n && E(n);
    }, [n, E]);
    let I = (0, P.Z)(t),
        w = (0, _.Q3)('NavigableChannels');
    return (0, i.jsx)(b.Gt, {
        value: s,
        children: (0, i.jsx)(f.Z, {
            section: ei.jXE.GUILD_CHANNEL_LIST,
            children: (0, i.jsx)(a.bG, {
                navigator: x,
                children: (0, i.jsx)(
                    ep,
                    eu(ec({}, e), {
                        listNavigator: x,
                        ref: O,
                        selectedChannel: d,
                        selectedVoiceChannel: h,
                        stageChannelSpeakerVoiceStates: I,
                        selectedGuildId: p,
                        optInEnabled: y,
                        isRefreshEnabled: w
                    })
                )
            })
        })
    });
};
function eg(e) {
    let t = (0, k.o)(),
        { isFavoritesPerk: n } = (0, O.z)('favorites-channel-list'),
        { density: r } = (0, d.TCT)();
    return (0, i.jsx)(
        ef,
        eu(ec({}, e), {
            guildChannels: t,
            guildChannelsVersion: 0,
            withGuildIcon: n,
            density: r
        })
    );
}
function em(e) {
    let t = (0, M.Z)(e.guild),
        n = (0, u.cj)([L.Z], () => L.Z.getGuild(e.guildId, { guildActionRows: t })),
        r = (0, _.Q3)('GuildChannelList'),
        { density: l } = (0, d.TCT)();
    return (0, i.jsx)(
        ef,
        eu(ec({}, e, n), {
            isRefreshEnabled: r,
            density: l
        })
    );
}
