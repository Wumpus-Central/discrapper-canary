n.d(t, {
    E: () => eO,
    j: () => eb
}),
    n(388685),
    n(539854),
    n(35282);
var r,
    i = n(255367),
    l = n(73800),
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
    O = n(313201),
    y = n(540059),
    _ = n(362658),
    v = n(583962),
    C = n(915885),
    j = n(258871),
    S = n(216306),
    x = n(398758),
    E = n(742139),
    P = n(486311),
    I = n(620304),
    N = n(220444),
    w = n(31022),
    Z = n(10401),
    T = n(131704),
    A = n(592125),
    R = n(796974),
    D = n(984933),
    L = n(914010),
    M = n(540126),
    k = n(734307),
    U = n(854444),
    G = n(761091),
    B = n(301342),
    V = n(906817),
    H = n(429122),
    F = n(285573),
    z = n(995993),
    W = n(910595),
    K = n(120818),
    Y = n(61642),
    q = n(848442),
    Q = n(53425),
    X = n(424785),
    J = n(770202),
    $ = n(79556),
    ee = n(428127),
    et = n(950969),
    en = n(233657),
    er = n(831700),
    ei = n(443063),
    el = n(327530),
    eo = n(981631),
    es = n(176505),
    ea = n(388032),
    ec = n(789123);
function eu(e, t, n) {
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
function ed(e) {
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
                eu(e, t, n[t]);
            });
    }
    return e;
}
function eh(e, t) {
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
function ep(e, t) {
    return e
        ? d.TVs.modules.channels.NAME_LINE_HEIGHT.resolve({
              enabledExperiments: ['visual-refresh'],
              density: t
          }) +
              2 * d.TVs.space.SPACE_XXS.resolve({ density: t }) +
              2
        : el.Vf;
}
function ef(e) {
    return e ? 32 : el.Hb;
}
class eg extends (r = l.PureComponent) {
    componentDidMount() {
        this.setState({ initialized: !0 });
    }
    componentWillUnmount() {
        this.updateChannelListScroll.cancel();
    }
    componentDidUpdate(e, t) {
        let { scrollToChannel: n, guildId: r, selectedChannelId: i } = this.props,
            { initialized: l } = this.state,
            { scrollTop: o } = R.Z.getGuildDimensions(r);
        null != n ? (this.scrollToChannel(n), h.Z.clearChannelListScrollTo(r)) : r !== e.guildId ? null != o && this.scrollTo(o) : i !== e.selectedChannelId ? this.scrollToChannel(i) : !t.initialized && l && (null == o && null != i ? this.scrollToChannel(i, !1, el.yE, this.handleListScroll) : this.scrollTo(null != o ? o : 0, this.handleListScroll)), this.testShouldSkipTutorial();
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
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : el.yE,
            r = arguments.length > 3 ? arguments[3] : void 0,
            i = this._list,
            l = this.getSectionRowsFromChannel(e)[0];
        if (null != l && null != i)
            if (null != l.threadOffset) {
                let [e] = i.getScrollPosition(l.section, l.row),
                    { isRefreshEnabled: o = !1, density: s = 'default' } = this.props,
                    a = l.threadOffset * ep(o, s);
                i.scrollIntoViewRect({
                    start: e + a,
                    end: e + a + ep(o, s),
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
                if (r < M.wd || e.isPlaceholderRow(r, i)) return !1;
                let l = e.getChannelFromSectionRow(r, i);
                if (null == l) return !1;
                let { channel: o, category: s } = l;
                return !!(0, T.vc)(o.record.type) && (!s.isCollapsed || !s.isMuted) && !o.isMuted && !!t.isItemVisible(r, i, !0) && (0, N.d)(o.record);
            })
        );
    }
    renderTopUnread() {
        let { topMention: e, bottomUnread: t, bottomMention: n, isUnreadVisible: r } = this.state,
            { guildId: l, guildChannels: o, guildChannelsVersion: s } = this.props;
        return (0, i.jsx)('div', {
            className: ec.positionedContainer,
            children: (0, i.jsx)(et.Z, {
                ref: this.unreadTopRef,
                textUnread: ea.intl.string(ea.t.FCRiT0),
                textMention: ea.intl.string(ea.t['8zH0LC']),
                hide: null == e && (r || null != t || null != n),
                className: ec.unreadTop,
                barClassName: ec.unreadBar,
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
        return (0, i.jsx)(et.Z, {
            reverse: !0,
            ref: this.unreadBottomRef,
            textUnread: ea.intl.string(ea.t.FCRiT0),
            textMention: ea.intl.string(ea.t['8zH0LC']),
            hide: null == r && l,
            className: ec.unreadBottom,
            barClassName: ec.unreadBar,
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
        l === eo.I_8 && (a['data-favorites'] = !0);
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
        null != n ? (p = el.Q0) : t.hasCommunityInfoSubheader() && !r && (p = el.JD);
        let f = o && 'compact' === s ? 8 : el.$k;
        return (0, i.jsx)(d.Wdt, {
            children: (t) =>
                (0, i.jsx)(
                    d.aVo,
                    ed(
                        {
                            ref: this.setListRef,
                            className: ec.scroller,
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
                            innerAriaLabel: ea.intl.string(ea.t.OGiMXF),
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
        return (0, i.jsx)(O.FG, {
            children: (r) =>
                (0, i.jsx)(d.y5t, {
                    component: (0, i.jsx)(d.nn4, {
                        children: (0, i.jsx)(d.H, {
                            id: r,
                            children: ea.intl.string(ea.t.OGiMXF)
                        })
                    }),
                    children: n
                        ? (0, i.jsxs)(l.Fragment, {
                              children: [
                                  (0, i.jsx)('div', {
                                      className: ec.positionedContainer,
                                      children: (0, i.jsx)(ee.Z, {
                                          position: 'top',
                                          guildChannels: e,
                                          guildChannelsVersion: t,
                                          jumpToVoiceChannels: this.jumpToVoiceChannels,
                                          jumpToChannel: this.jumpToChannel
                                      })
                                  }),
                                  this.renderList(),
                                  (0, i.jsx)(ee.Z, {
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
            eu(this, '_list', null),
            eu(this, 'unreadTopRef', l.createRef()),
            eu(this, 'unreadBottomRef', l.createRef()),
            eu(this, 'state', {
                initialized: !1,
                isUnreadVisible: !0,
                topUnread: null,
                topMention: null,
                bottomUnread: null,
                bottomMention: null
            }),
            eu(this, 'setListRef', (e) => {
                var t;
                let { ref: n } = this.context;
                (n.current = null != (t = null == e ? void 0 : e.getScrollerNode()) ? t : null), (this._list = e);
            }),
            eu(this, 'jumpToVoiceChannels', () => {
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
                        padding: el.yE
                    });
            }),
            eu(this, 'jumpToChannel', (e) => this.scrollToChannel(e, !0, el.Q1)),
            eu(this, 'jumpToChannelWithMentionsAndUnreads', (e, t) => {
                let [n, r] = t;
                return this.scrollToChannel(e, !0, null != n && null != r ? el.Q1 : el.yE);
            }),
            eu(this, 'isChannelVisible', (e, t) => {
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
            eu(this, 'getVisibleChannels', () => {
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
            eu(this, 'handleResize', () => {
                var e, t;
                let { showNewUnreadsBar: n } = this.props,
                    r = null != (t = null == (e = this._list) ? void 0 : e.getScrollerState()) ? t : null;
                if ((this.setState({ isUnreadVisible: this.isUnreadVisible() }), n && null != r)) {
                    let { scrollTop: e } = r;
                    this.updateChannelListScroll(e);
                }
            }),
            eu(this, 'handleListScroll', () => {
                var e, t;
                let { onScroll: n } = this.props,
                    r = null != (t = null == (e = this._list) ? void 0 : e.getScrollerState()) ? t : null;
                if (null != r) {
                    let { scrollTop: e } = r;
                    null != n && n(r), this.updateChannelListScroll(e);
                }
                null != this.unreadTopRef.current && this.unreadTopRef.current.calculateState(), null != this.unreadBottomRef.current && this.unreadBottomRef.current.calculateState();
            }),
            eu(this, 'handleUnreadCalculate', (e, t, n) => {
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
            eu(
                this,
                'updateChannelListScroll',
                s().throttle((e) => {
                    h.Z.updateChannelListScroll(this.props.guildId, e, this.getVisibleChannels());
                }, 100)
            ),
            eu(this, 'getSectionHeight', (e) => {
                let { guild: t, guildChannels: n, isRefreshEnabled: r, density: i } = this.props;
                return (0, V.EM)(e, t, n, !!r, i);
            }),
            eu(this, 'getSectionFooterHeight', (e) => {
                let { guildChannels: t, voiceStates: n, selectedVoiceChannelId: r, selectedChannelId: i, optInEnabled: l, guildChannelsVersion: o } = this.props;
                return (0, H.dt)({
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
            eu(this, 'getRowHeight', (e, t) => {
                let { guildChannels: n, voiceStates: r, stageChannelSpeakerVoiceStates: i, selectedVoiceChannelId: l, selectedGuildId: o, isRefreshEnabled: s = !1, density: a = 'default' } = this.props,
                    c = ep(s, a);
                if (e === M.wZ) {
                    let e = n.getGuildActionSection();
                    return e.isEmpty() ? 0 : e.getRow(t) === ei.z.GUILD_PREMIUM_PROGRESS_BAR ? (e.getRows().length > 1 ? v.aR : v.PD) : c;
                }
                if (n.isPlaceholderRow(e, t)) return 0;
                let u = n.getChannelFromSectionRow(e, t);
                if (null == u) return 0;
                let { channel: h, category: p } = u;
                if (h.record.type === eo.d4z.GUILD_CATEGORY) return 40;
                let { isFavoritesPerk: f } = _.Z.getCurrentConfig({ location: 'channel_list' }, { autoTrackExposure: !0 });
                for (let e of (!f || o !== eo.I_8 || h.record.isDM() || h.record.isGroupDM() || h.record.isGuildStageVoice() || (c = this.props.isRefreshEnabled ? 46 : el.GQ), h.threadIds)) {
                    let { isRefreshEnabled: t = !1, density: n = 'default' } = this.props;
                    c += ep(t, n);
                    let i = r[h.id];
                    null != i && i.length > 0 && ((c += l === e ? i.length * ef(this.props.isRefreshEnabled) : ef(this.props.isRefreshEnabled)), (c += el.cx));
                }
                if (h.record.isGuildVoice()) {
                    let e = r[h.id];
                    if (null != e && e.length > 0) {
                        let t = e.length * ef(this.props.isRefreshEnabled);
                        (h.isCollapsed || p.isCollapsed) && (t = ef(this.props.isRefreshEnabled)), (c += t + (s ? d.TVs.space.SPACE_XS.resolve({ density: a }) : el.cx));
                    }
                    h.id === this.props.rtcConnectedChannelId && (c += this.props.rtcDesyncedVoiceStatesCount * ef(this.props.isRefreshEnabled));
                }
                if ((null != h.subtitle && (c += el.NY), h.record.isGuildStageVoice())) {
                    var g, m;
                    let e = null != (g = r[h.id]) ? g : [],
                        t = null != (m = i[h.id]) ? m : [];
                    if (null != e && e.length > 0) {
                        let e = t.length * ef(this.props.isRefreshEnabled);
                        h.isCollapsed || p.isCollapsed ? (e = Math.ceil(e / el.VE)) : (e += ef(this.props.isRefreshEnabled)), (c += e + el.cx);
                    }
                }
                return c;
            }),
            eu(this, 'dismissRecents', () => {
                let { guild: e, guildChannels: t, selectedChannelId: n } = this.props,
                    r = t.getCategoryFromSection(t.recentsSectionNumber);
                if (null == r) return;
                let i = null,
                    l = r.getShownChannelAndThreadIds();
                null != n && l.includes(n) && (i = (0, S.KY)(t)), (0, S.Uo)(e.id, l, i);
            }),
            eu(this, 'renderSection', (e) => {
                let { section: t } = e,
                    { guildChannels: n, guildChannelsVersion: r, guild: l, selectedChannelId: o, disableManageChannels: s } = this.props;
                return (0, i.jsx)(
                    V.ZP,
                    {
                        sectionIndex: t,
                        guild: l,
                        guildChannels: n,
                        guildChannelsVersion: r,
                        selectedChannelId: o,
                        disableManageChannels: s
                    },
                    (0, V.WW)(t, n)
                );
            }),
            eu(this, 'renderRow', (e) => {
                let { section: t, row: n } = e,
                    { guild: r, selectedChannel: o, selectedChannelId: s, selectedVoiceChannel: a, selectedVoiceChannelId: c, guildChannels: u, voiceStates: d, disableManageChannels: h, stageChannelSpeakerVoiceStates: p, optInEnabled: f, withGuildIcon: g, isNewGuildPowerupsProgressBarEnabled: m } = this.props;
                if (t === M.wZ) {
                    let e = u.getGuildActionSection(),
                        t = e.getRow(n);
                    if (null == t) return null;
                    switch (t) {
                        case ei.z.GUILD_HUB_HEADER_OPTIONS:
                            return (0, i.jsx)(
                                j.Z,
                                {
                                    guild: r,
                                    channel: D.ZP.getDefaultChannel(r.id)
                                },
                                ei.z.GUILD_HUB_HEADER_OPTIONS
                            );
                        case ei.z.GUILD_PREMIUM_PROGRESS_BAR:
                            let l = e.getRows();
                            return m
                                ? (0, i.jsx)(
                                      I.Z,
                                      {
                                          guild: r,
                                          withMargin: l.length > 1
                                      },
                                      ei.z.GUILD_PREMIUM_PROGRESS_BAR
                                  )
                                : (0, i.jsx)(
                                      v.ZP,
                                      {
                                          guild: r,
                                          withMargin: l.length > 1
                                      },
                                      ei.z.GUILD_PREMIUM_PROGRESS_BAR
                                  );
                        case ei.z.GUILD_HOME:
                            return (0, i.jsx)(
                                W.Z,
                                {
                                    guild: r,
                                    selected: s === es.oC.GUILD_HOME
                                },
                                ei.z.GUILD_HOME
                            );
                        case ei.z.GUILD_SCHEDULED_EVENTS:
                            return (0, i.jsx)(
                                en.Z,
                                {
                                    guild: r,
                                    selected: s === ei.z.GUILD_SCHEDULED_EVENTS
                                },
                                ei.z.GUILD_SCHEDULED_EVENTS
                            );
                        case ei.z.GUILD_ROLE_SUBSCRIPTIONS:
                            return (0, i.jsx)(
                                Y.Z,
                                {
                                    guild: r,
                                    selected: s === es.oC.ROLE_SUBSCRIPTIONS
                                },
                                ei.z.GUILD_ROLE_SUBSCRIPTIONS
                            );
                        case ei.z.GUILD_SHOP:
                            return (0, i.jsx)(
                                q.Z,
                                {
                                    guild: r,
                                    selected: s === es.oC.GUILD_SHOP
                                },
                                ei.z.GUILD_SHOP
                            );
                        case ei.z.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR:
                            return (0, i.jsx)(K.T, { guild: r });
                        case ei.z.CHANNELS_AND_ROLES:
                            return (0, i.jsx)(
                                z.m,
                                {
                                    guild: r,
                                    selected: s === es.oC.CHANNEL_BROWSER || s === es.oC.CUSTOMIZE_COMMUNITY
                                },
                                ei.z.CHANNELS_AND_ROLES
                            );
                        case ei.z.GUILD_DIRECTORY:
                            return (0, i.jsx)(
                                F.Z,
                                {
                                    guild: r,
                                    selectedChannelId: s,
                                    disableManageChannels: h
                                },
                                ei.z.GUILD_DIRECTORY
                            );
                        case ei.z.GUILD_MOD_DASH_MEMBER_SAFETY:
                            return (0, i.jsx)(
                                C.Z,
                                {
                                    guild: r,
                                    selected: s === es.oC.MEMBER_SAFETY
                                },
                                ei.z.GUILD_MOD_DASH_MEMBER_SAFETY
                            );
                        case ei.z.GUILD_BOOSTS:
                            return (0, i.jsx)(
                                P.Z,
                                {
                                    guildId: r.id,
                                    selected: s === es.oC.GUILD_BOOSTS
                                },
                                ei.z.GUILD_BOOSTS
                            );
                        default:
                            return null;
                    }
                }
                if (u.isPlaceholderRow(t, n)) return null;
                let b = u.getChannelFromSectionRow(t, n);
                if (null == b) return null;
                let { category: O, channel: y } = b,
                    _ = O instanceof M.VR,
                    S = y.record,
                    x = ''.concat(t).concat(y.id);
                switch (S.type) {
                    case eo.d4z.GUILD_ANNOUNCEMENT:
                    case eo.d4z.GUILD_TEXT:
                    case eo.d4z.GUILD_FORUM:
                    case eo.d4z.GUILD_MEDIA:
                    case eo.d4z.DM:
                    case eo.d4z.GROUP_DM:
                        return (0, i.jsxs)(
                            l.Fragment,
                            {
                                children: [
                                    (0, i.jsx)($.Z, {
                                        channel: S,
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
                                        ? (0, i.jsx)(Q.Z, {
                                              withGuildIcon: g,
                                              channel: S,
                                              sortedThreadIds: y.threadIds,
                                              selectedChannel: null != o && (o.id === y.id || o.parent_id === S.id) ? o : null,
                                              selectedVoiceChannelId: (null == a ? void 0 : a.parent_id) === S.id ? c : null
                                          })
                                        : null
                                ]
                            },
                            x
                        );
                    case eo.d4z.GUILD_STAGE_VOICE:
                        var E, N;
                        return (0, i.jsx)(
                            X.Z,
                            {
                                channel: S,
                                guild: r,
                                position: y.position,
                                selected: s === y.id,
                                connected: c === y.id,
                                collapsed: y.isCollapsed || O.isCollapsed,
                                voiceStates: null != (E = d[y.id]) ? E : [],
                                speakerVoiceStates: null != (N = p[y.id]) ? N : [],
                                disableManageChannels: h,
                                isFavoriteCategory: _
                            },
                            x
                        );
                    case eo.d4z.GUILD_VOICE:
                        return (0, i.jsx)(
                            er.Z,
                            {
                                channel: S,
                                guild: r,
                                position: y.position,
                                selected: s === y.id,
                                connected: c === y.id,
                                collapsed: y.isCollapsed || O.isCollapsed,
                                voiceStates: d[y.id],
                                subtitle: y.subtitle,
                                disableManageChannels: h,
                                showTutorial: y.isFirstVoiceChannel,
                                isFavoriteCategory: _,
                                withGuildIcon: g
                            },
                            x
                        );
                    case eo.d4z.GUILD_STORE:
                        return (0, i.jsx)(
                            J.Z,
                            {
                                channel: S,
                                guild: r,
                                position: y.position,
                                selected: s === y.id
                            },
                            x
                        );
                    case eo.d4z.GUILD_CATEGORY:
                        if (t !== u.voiceChannelsSectionNumber) return null;
                        return (0, i.jsx)(B.kw, { channel: S }, 'readonly-'.concat(S.id));
                    case eo.d4z.PUBLIC_THREAD:
                    case eo.d4z.PRIVATE_THREAD:
                        return (0, i.jsx)(
                            $.Z,
                            {
                                channel: S,
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
            eu(this, 'renderSectionFooter', (e) => {
                let { section: t } = e,
                    { guildChannels: n, guildChannelsVersion: r, voiceStates: l, selectedChannelId: o, selectedVoiceChannelId: s, optInEnabled: a, guildId: c } = this.props;
                return (0, i.jsx)(
                    H.ZP,
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
                    (0, H.eo)(t, n, a)
                );
            }),
            eu(this, 'getAnchorId', (e, t) => {
                var n, r, i;
                let { guildChannels: l } = this.props;
                if (e !== M.wZ) {
                    if (null == t) return e === M.p2 ? 'favorites-header' : e === l.recentsSectionNumber ? 'recents-header' : e === l.voiceChannelsSectionNumber ? 'voice-channels' : e === M.wd ? 'uncategorized-header' : null == (i = l.getNamedCategoryFromSection(e)) ? void 0 : i.id;
                    if (!l.isPlaceholderRow(e, t)) return null == (r = l.getChannelFromSectionRow(e, t)) || null == (n = r.channel) ? void 0 : n.id;
                }
            }),
            eu(this, 'testShouldSkipTutorial', () => {
                if (!Z.Z.shouldShow('voice-conversations')) return;
                let { guildChannels: e } = this.props,
                    t = e.getFirstVoiceChannel();
                if (null == t) return void p.Z.dismiss('voice-conversations');
                let n = this._list;
                if (null != n) for (let { section: e, row: r } of this.getSectionRowsFromChannel(t.id)) n.isItemVisible(e, r) || p.Z.dismiss('voice-conversations');
            });
    }
}
eu(eg, 'contextType', a.qB),
    eu(eg, 'defaultProps', {
        isRefreshEnabled: !1,
        density: 'default'
    });
let em = (e) => {
    let { guildId: t, selectedChannelId: n, selectedVoiceChannelId: r } = e,
        o = (0, u.e7)([g.Z], () => g.Z.keyboardModeEnabled),
        { analyticsLocations: s } = (0, b.ZP)(m.Z.GUILD_CHANNEL_LIST),
        d = (0, u.e7)([A.Z], () => A.Z.getChannel(n)),
        h = (0, u.e7)([A.Z], () => A.Z.getChannel(r)),
        p = (0, u.e7)([L.Z], () => L.Z.getGuildId()),
        O = (0, x.DM)(t),
        _ = l.useRef(null),
        v = l.useCallback((e, t) => {
            let n = _.current;
            if (null != n)
                if (eo.Xyh.test(t) || (0, es.AB)(t))
                    n.scrollToChannel(t, !1, 2 * el.yE, () => {
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
                    let t = _.current;
                    if (null == t) return e();
                    t.scrollTo(0, () => requestAnimationFrame(() => e()));
                }),
            []
        ),
        j = l.useCallback(
            () =>
                new Promise((e) => {
                    let t = _.current;
                    if (null == t) return e();
                    t.scrollTo(Number.MAX_SAFE_INTEGER, () => requestAnimationFrame(() => e()));
                }),
            []
        ),
        S = (0, c.ZP)({
            id: 'channels',
            defaultFocused: null != n ? n : void 0,
            isEnabled: o,
            setFocus: v,
            scrollToStart: C,
            scrollToEnd: j
        }),
        P = S.setFocus;
    l.useEffect(() => {
        null != n && P(n);
    }, [n, P]);
    let I = (0, w.Z)(t),
        N = (0, y.Q3)('NavigableChannels'),
        Z = (0, E.V)('NavigableChannels');
    return (0, i.jsx)(b.Gt, {
        value: s,
        children: (0, i.jsx)(f.Z, {
            section: eo.jXE.GUILD_CHANNEL_LIST,
            children: (0, i.jsx)(a.bG, {
                navigator: S,
                children: (0, i.jsx)(
                    eg,
                    eh(ed({}, e), {
                        listNavigator: S,
                        ref: _,
                        selectedChannel: d,
                        selectedVoiceChannel: h,
                        stageChannelSpeakerVoiceStates: I,
                        selectedGuildId: p,
                        optInEnabled: O,
                        isRefreshEnabled: N,
                        isNewGuildPowerupsProgressBarEnabled: Z
                    })
                )
            })
        })
    });
};
function eb(e) {
    let t = (0, U.o)(),
        { isFavoritesPerk: n } = (0, _.z)('favorites-channel-list'),
        { density: r } = (0, d.TCT)();
    return (0, i.jsx)(
        em,
        eh(ed({}, e), {
            guildChannels: t,
            guildChannelsVersion: 0,
            withGuildIcon: n,
            density: r
        })
    );
}
function eO(e) {
    let t = (0, G.Z)(e.guild),
        n = (0, u.cj)([k.Z], () => k.Z.getGuild(e.guildId, { guildActionRows: t })),
        r = (0, y.Q3)('GuildChannelList'),
        { density: l } = (0, d.TCT)();
    return (0, i.jsx)(
        em,
        eh(ed({}, e, n), {
            isRefreshEnabled: r,
            density: l
        })
    );
}
