(n.d(t, {
    E: () => eC,
    j: () => ey
}),
    n(388685),
    n(539854),
    n(35282));
var r,
    i = n(255367),
    l = n(73800),
    o = n(392711),
    a = n.n(o),
    s = n(91192),
    c = n(924826),
    u = n(442837),
    d = n(704215),
    h = n(481060),
    p = n(925549),
    f = n(260300),
    g = n(410575),
    m = n(607070),
    b = n(100527),
    _ = n(906732),
    O = n(313201),
    y = n(362658),
    C = n(583962),
    v = n(915885),
    j = n(258871),
    E = n(216306),
    S = n(398758),
    x = n(742139),
    I = n(761700),
    P = n(486311),
    N = n(620304),
    w = n(220444),
    T = n(31022),
    Z = n(10401),
    A = n(131704),
    R = n(592125),
    D = n(796974),
    L = n(984933),
    M = n(914010),
    k = n(594174),
    U = n(540126),
    G = n(734307),
    B = n(854444),
    V = n(113544),
    H = n(598056),
    F = n(761091),
    z = n(301342),
    W = n(906817),
    K = n(429122),
    Y = n(285573),
    q = n(995993),
    X = n(910595),
    Q = n(120818),
    J = n(61642),
    $ = n(848442),
    ee = n(53425),
    et = n(424785),
    en = n(770202),
    er = n(79556),
    ei = n(428127),
    el = n(950969),
    eo = n(233657),
    ea = n(831700),
    es = n(443063),
    ec = n(327530),
    eu = n(981631),
    ed = n(176505),
    eh = n(388032),
    ep = n(789123);
function ef(e, t, n) {
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
function eg(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                ef(e, t, n[t]);
            }));
    }
    return e;
}
function em(e, t) {
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
function eb(e) {
    return h.TVs.modules.channels.NAME_LINE_HEIGHT.resolve({ density: e }) + 2 * h.TVs.space.SPACE_XXS.resolve({ density: e }) + 2;
}
class e_ extends (r = l.PureComponent) {
    componentDidMount() {
        (this.setState({ initialized: !0 }), (0, V.Q5)(this.getVisibleChannels));
    }
    componentWillUnmount() {
        this.updateChannelListScroll.cancel();
    }
    componentDidUpdate(e, t) {
        let { scrollToChannel: n, guildId: r, selectedChannelId: i } = this.props,
            { initialized: l } = this.state,
            { scrollTop: o } = D.Z.getGuildDimensions(r);
        (null != n ? (this.scrollToChannel(n), p.Z.clearChannelListScrollTo(r)) : r !== e.guildId ? null != o && this.scrollTo(o) : i !== e.selectedChannelId ? this.scrollToChannel(i) : !t.initialized && l && (null == o && null != i ? this.scrollToChannel(i, !1, ec.yE, this.handleListScroll) : this.scrollTo(null != o ? o : 0, this.handleListScroll)), this.testShouldSkipTutorial());
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
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ec.yE,
            r = arguments.length > 3 ? arguments[3] : void 0,
            i = this._list,
            l = this.getSectionRowsFromChannel(e)[0];
        if (null != l && null != i)
            if (null != l.threadOffset) {
                let [e] = i.getScrollPosition(l.section, l.row),
                    { density: o = 'default' } = this.props,
                    a = l.threadOffset * eb(o);
                i.scrollIntoViewRect({
                    start: e + a,
                    end: e + a + eb(o),
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
                if (r < U.wd || e.isPlaceholderRow(r, i)) return !1;
                let l = e.getChannelFromSectionRow(r, i);
                if (null == l) return !1;
                let { channel: o, category: a } = l;
                return !!(0, A.vc)(o.record.type) && (!a.isCollapsed || !a.isMuted) && !o.isMuted && !!t.isItemVisible(r, i, !0) && (0, w.d)(o.record);
            })
        );
    }
    renderTopUnread() {
        let { topMention: e, bottomUnread: t, bottomMention: n, isUnreadVisible: r } = this.state,
            { guildId: l, guildChannels: o, guildChannelsVersion: a } = this.props;
        return (0, i.jsx)('div', {
            className: ep.positionedContainer,
            children: (0, i.jsx)(el.Z, {
                ref: this.unreadTopRef,
                textUnread: eh.intl.string(eh.t.FCRiT0),
                textMention: eh.intl.string(eh.t['8zH0LC']),
                hide: null == e && (r || null != t || null != n),
                className: ep.unreadTop,
                barClassName: ep.unreadBar,
                guildId: l,
                guildChannels: o,
                guildChannelsVersion: a,
                isVisible: this.isChannelVisible,
                onJumpTo: this.jumpToChannelWithMentionsAndUnreads,
                onCalculate: this.handleUnreadCalculate
            })
        });
    }
    renderBottomUnread() {
        let { guildId: e, guildChannels: t, guildChannelsVersion: n } = this.props,
            { bottomMention: r, isUnreadVisible: l } = this.state;
        return (0, i.jsx)(el.Z, {
            reverse: !0,
            ref: this.unreadBottomRef,
            textUnread: eh.intl.string(eh.t.FCRiT0),
            textMention: eh.intl.string(eh.t['8zH0LC']),
            hide: null == r && l,
            className: ep.unreadBottom,
            barClassName: ep.unreadBar,
            guildId: e,
            guildChannels: t,
            guildChannelsVersion: n,
            isVisible: this.isChannelVisible,
            onJumpTo: this.jumpToChannelWithMentionsAndUnreads,
            onCalculate: this.handleUnreadCalculate
        });
    }
    renderList() {
        let { guildChannels: e, guild: t, guildBanner: n, hasGuildSubheader: r, selectedGuildId: l, density: o } = this.props,
            a = {};
        l === eu.I_8 && (a['data-favorites'] = !0);
        let s = this.context,
            { ref: c } = s,
            u = (function (e, t) {
                if (null == e) return {};
                var n,
                    r,
                    i = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i = {},
                            l = Object.keys(e);
                        for (r = 0; r < l.length; r++) ((n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
                        return i;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < l.length; r++) ((n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
                }
                return i;
            })(s, ['ref']),
            d = 0;
        null != n ? (d = ec.Q0) : (0, H.Z)(t) && !r && (d = ec.JD);
        let p = 'compact' === o ? 8 : ec.$k;
        return (0, i.jsx)(h.Wdt, {
            children: (t) =>
                (0, i.jsx)(
                    h.aVo,
                    eg(
                        {
                            ref: this.setListRef,
                            className: ep.scroller,
                            fade: !0,
                            sectionHeight: this.getSectionHeight,
                            footerHeight: this.getSectionFooterHeight,
                            rowHeight: this.getRowHeight,
                            paddingTop: d,
                            paddingBottom: p,
                            renderSection: this.renderSection,
                            renderFooter: this.renderSectionFooter,
                            renderRow: this.renderRow,
                            onScroll: this.handleListScroll,
                            onResize: this.handleResize,
                            onContentResize: this.handleResize,
                            sections: e.getSections(!0),
                            innerAriaLabel: eh.intl.string(eh.t.OGiMXF),
                            innerTag: 'ul',
                            getAnchorId: this.getAnchorId
                        },
                        u,
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
                (0, i.jsx)(h.y5t, {
                    component: (0, i.jsx)(h.nn4, {
                        children: (0, i.jsx)(h.H, {
                            id: r,
                            children: eh.intl.string(eh.t.OGiMXF)
                        })
                    }),
                    children: n
                        ? (0, i.jsxs)(l.Fragment, {
                              children: [
                                  (0, i.jsx)('div', {
                                      className: ep.positionedContainer,
                                      children: (0, i.jsx)(ei.Z, {
                                          position: 'top',
                                          guildChannels: e,
                                          guildChannelsVersion: t,
                                          jumpToVoiceChannels: this.jumpToVoiceChannels,
                                          jumpToChannel: this.jumpToChannel
                                      })
                                  }),
                                  this.renderList(),
                                  (0, i.jsx)(ei.Z, {
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
        (super(...e),
            ef(this, '_list', null),
            ef(this, 'unreadTopRef', l.createRef()),
            ef(this, 'unreadBottomRef', l.createRef()),
            ef(this, 'state', {
                initialized: !1,
                isUnreadVisible: !0,
                topUnread: null,
                topMention: null,
                bottomUnread: null,
                bottomMention: null
            }),
            ef(this, 'setListRef', (e) => {
                var t;
                let { ref: n } = this.context;
                ((n.current = null != (t = null == e ? void 0 : e.getScrollerNode()) ? t : null), (this._list = e));
            }),
            ef(this, 'jumpToVoiceChannels', () => {
                var e, t, n, r;
                let { guildChannels: i, voiceStates: l } = this.props,
                    o = 0,
                    a = null != (n = null == (e = i.getCategoryFromSection(i.voiceChannelsSectionNumber)) ? void 0 : e.getShownChannelIds()) ? n : [];
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
                        padding: ec.yE
                    });
            }),
            ef(this, 'jumpToChannel', (e) => this.scrollToChannel(e, !0, ec.Q1)),
            ef(this, 'jumpToChannelWithMentionsAndUnreads', (e, t) => {
                let [n, r] = t;
                return this.scrollToChannel(e, !0, null != n && null != r ? ec.Q1 : ec.yE);
            }),
            ef(this, 'isChannelVisible', (e, t) => {
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
            ef(this, 'getVisibleChannels', () => {
                let e = this._list;
                if (null == e) return [];
                let t = e.getItems(),
                    n = e.getScrollerState(),
                    r = [];
                for (var i = 0; i < t.length; i++) {
                    let l = t[i];
                    if ((0, h.oZU)(l) && l.section >= this.props.guildChannels.favoritesSectionNumber) {
                        let t = this.props.guildChannels.getChannelFromSectionRow(l.section, l.row),
                            [i, o] = e.getScrollPosition(l.section, l.row);
                        null != t && i + o < n.scrollTop + n.offsetHeight && i > n.scrollTop && r.push(t.channel.id);
                    }
                }
                return r;
            }),
            ef(this, 'handleResize', () => {
                var e, t;
                let { showNewUnreadsBar: n } = this.props,
                    r = null != (t = null == (e = this._list) ? void 0 : e.getScrollerState()) ? t : null;
                if ((this.setState({ isUnreadVisible: this.isUnreadVisible() }), n && null != r)) {
                    let { scrollTop: e } = r;
                    this.updateChannelListScroll(e);
                }
            }),
            ef(this, 'handleListScroll', () => {
                var e, t;
                let { onScroll: n } = this.props,
                    r = null != (t = null == (e = this._list) ? void 0 : e.getScrollerState()) ? t : null;
                if (null != r) {
                    let { scrollTop: e } = r;
                    (null != n && n(r), this.updateChannelListScroll(e));
                }
                (null != this.unreadTopRef.current && this.unreadTopRef.current.calculateState(), null != this.unreadBottomRef.current && this.unreadBottomRef.current.calculateState());
            }),
            ef(this, 'handleUnreadCalculate', (e, t, n) => {
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
            ef(
                this,
                'updateChannelListScroll',
                a().throttle((e) => {
                    p.Z.updateChannelListScroll(this.props.guildId, e, this.getVisibleChannels());
                }, 100)
            ),
            ef(this, 'getSectionHeight', (e) => {
                let { guild: t, guildChannels: n, density: r } = this.props;
                return (0, W.EM)(e, t, n, r);
            }),
            ef(this, 'getSectionFooterHeight', (e) => {
                let { guildChannels: t, voiceStates: n, selectedVoiceChannelId: r, selectedChannelId: i, optInEnabled: l, guildChannelsVersion: o } = this.props;
                return (0, K.dt)({
                    sectionIndex: e,
                    guildChannels: t,
                    guildChannelsVersion: o,
                    voiceStates: n,
                    selectedChannelId: i,
                    selectedVoiceChannelId: r,
                    optInEnabled: l,
                    density: this.props.density
                });
            }),
            ef(this, 'getRowHeight', (e, t) => {
                let { guildChannels: n, voiceStates: r, stageChannelSpeakerVoiceStates: i, selectedVoiceChannelId: l, selectedGuildId: o, density: a = 'default' } = this.props,
                    s = eb(a);
                if (e === U.wZ) {
                    let e = n.getGuildActionSection();
                    return e.isEmpty() ? 0 : e.getRow(t) === es.z.GUILD_PREMIUM_PROGRESS_BAR ? (e.getRows().length > 1 ? C.aR : C.PD) : s;
                }
                if (n.isPlaceholderRow(e, t)) return 0;
                let c = n.getChannelFromSectionRow(e, t);
                if (null == c) return 0;
                let { channel: u, category: d } = c;
                if (u.record.type === eu.d4z.GUILD_CATEGORY) return 40;
                let { isFavoritesPerk: p } = y.Z.getCurrentConfig({ location: 'channel_list' }, { autoTrackExposure: !0 });
                for (let e of (!p || o !== eu.I_8 || u.record.isDM() || u.record.isGroupDM() || u.record.isGuildStageVoice() || (s = 46), u.threadIds)) {
                    let { density: t = 'default' } = this.props;
                    s += eb(t);
                    let n = r[u.id];
                    null != n && n.length > 0 && ((s += l === e ? 32 * n.length : 32), (s += ec.cx));
                }
                if (u.record.isGuildVoice()) {
                    let e = r[u.id];
                    if (null != e && e.length > 0) {
                        let t = 32 * e.length;
                        ((u.isCollapsed || d.isCollapsed) && (t = 32), (s += t + h.TVs.space.SPACE_XS.resolve({ density: a })));
                    }
                    u.id === this.props.rtcConnectedChannelId && (s += 32 * this.props.rtcDesyncedVoiceStatesCount);
                }
                if ((null != u.subtitle && (s += ec.NY), u.record.isGuildStageVoice())) {
                    var f, g;
                    let e = null != (f = r[u.id]) ? f : [],
                        t = null != (g = i[u.id]) ? g : [];
                    if (null != e && e.length > 0) {
                        let e = 32 * t.length;
                        (u.isCollapsed || d.isCollapsed ? (e = Math.ceil(e / ec.VE)) : (e += 32), (s += e + ec.cx));
                    }
                }
                return s;
            }),
            ef(this, 'dismissRecents', () => {
                let { guild: e, guildChannels: t, selectedChannelId: n } = this.props,
                    r = t.getCategoryFromSection(t.recentsSectionNumber);
                if (null == r) return;
                let i = null,
                    l = r.getShownChannelAndThreadIds();
                (null != n && l.includes(n) && (i = (0, E.KY)(t)), (0, E.Uo)(e.id, l, i));
            }),
            ef(this, 'renderSection', (e) => {
                let { section: t } = e,
                    { guildChannels: n, guildChannelsVersion: r, guild: l, selectedChannelId: o, disableManageChannels: a } = this.props;
                return (0, i.jsx)(
                    W.ZP,
                    {
                        sectionIndex: t,
                        guild: l,
                        guildChannels: n,
                        guildChannelsVersion: r,
                        selectedChannelId: o,
                        disableManageChannels: a
                    },
                    (0, W.WW)(t, n)
                );
            }),
            ef(this, 'renderRow', (e) => {
                let { section: t, row: n } = e,
                    { guild: r, selectedChannel: o, selectedChannelId: a, selectedVoiceChannel: s, selectedVoiceChannelId: c, guildChannels: u, voiceStates: h, disableManageChannels: p, stageChannelSpeakerVoiceStates: f, optInEnabled: g, withGuildIcon: m, isNewGuildPowerupsProgressBarEnabled: b, shouldRenderBoosterEnhancedRoleColorsCoachmark: _ } = this.props;
                if (t === U.wZ) {
                    let e = u.getGuildActionSection(),
                        t = e.getRow(n);
                    if (null == t) return null;
                    switch (t) {
                        case es.z.GUILD_HUB_HEADER_OPTIONS:
                            return (0, i.jsx)(
                                j.Z,
                                {
                                    guild: r,
                                    channel: L.ZP.getDefaultChannel(r.id)
                                },
                                es.z.GUILD_HUB_HEADER_OPTIONS
                            );
                        case es.z.GUILD_PREMIUM_PROGRESS_BAR:
                            let l = e.getRows(),
                                o = [];
                            return (
                                _ && o.push(d.z.BOOSTER_ENHANCED_ROLE_COLORS_COACHMARK),
                                b
                                    ? (0, i.jsx)(
                                          N.Z,
                                          {
                                              guild: r,
                                              tooltipTypes: o,
                                              withMargin: l.length > 1
                                          },
                                          es.z.GUILD_PREMIUM_PROGRESS_BAR
                                      )
                                    : (0, i.jsx)(
                                          C.ZP,
                                          {
                                              guild: r,
                                              tooltipTypes: o,
                                              withMargin: l.length > 1
                                          },
                                          es.z.GUILD_PREMIUM_PROGRESS_BAR
                                      )
                            );
                        case es.z.GUILD_HOME:
                            return (0, i.jsx)(
                                X.Z,
                                {
                                    guild: r,
                                    selected: a === ed.oC.GUILD_HOME
                                },
                                es.z.GUILD_HOME
                            );
                        case es.z.GUILD_SCHEDULED_EVENTS:
                            return (0, i.jsx)(
                                eo.Z,
                                {
                                    guild: r,
                                    selected: a === es.z.GUILD_SCHEDULED_EVENTS
                                },
                                es.z.GUILD_SCHEDULED_EVENTS
                            );
                        case es.z.GUILD_ROLE_SUBSCRIPTIONS:
                            return (0, i.jsx)(
                                J.Z,
                                {
                                    guild: r,
                                    selected: a === ed.oC.ROLE_SUBSCRIPTIONS
                                },
                                es.z.GUILD_ROLE_SUBSCRIPTIONS
                            );
                        case es.z.GUILD_SHOP:
                            return (0, i.jsx)(
                                $.Z,
                                {
                                    guild: r,
                                    selected: a === ed.oC.GUILD_SHOP
                                },
                                es.z.GUILD_SHOP
                            );
                        case es.z.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR:
                            return (0, i.jsx)(Q.T, { guild: r });
                        case es.z.CHANNELS_AND_ROLES:
                            return (0, i.jsx)(
                                q.m,
                                {
                                    guild: r,
                                    selected: a === ed.oC.CHANNEL_BROWSER || a === ed.oC.CUSTOMIZE_COMMUNITY
                                },
                                es.z.CHANNELS_AND_ROLES
                            );
                        case es.z.GUILD_DIRECTORY:
                            return (0, i.jsx)(
                                Y.Z,
                                {
                                    guild: r,
                                    selectedChannelId: a,
                                    disableManageChannels: p
                                },
                                es.z.GUILD_DIRECTORY
                            );
                        case es.z.GUILD_MOD_DASH_MEMBER_SAFETY:
                            return (0, i.jsx)(
                                v.Z,
                                {
                                    guild: r,
                                    selected: a === ed.oC.MEMBER_SAFETY
                                },
                                es.z.GUILD_MOD_DASH_MEMBER_SAFETY
                            );
                        case es.z.GUILD_BOOSTS:
                            return (0, i.jsx)(
                                P.Z,
                                {
                                    guildId: r.id,
                                    selected: a === ed.oC.GUILD_BOOSTS
                                },
                                es.z.GUILD_BOOSTS
                            );
                        default:
                            return null;
                    }
                }
                if (u.isPlaceholderRow(t, n)) return null;
                let O = u.getChannelFromSectionRow(t, n);
                if (null == O) return null;
                let { category: y, channel: E } = O,
                    S = y instanceof U.VR,
                    x = E.record,
                    I = ''.concat(t).concat(E.id);
                switch (x.type) {
                    case eu.d4z.GUILD_ANNOUNCEMENT:
                    case eu.d4z.GUILD_TEXT:
                    case eu.d4z.GUILD_FORUM:
                    case eu.d4z.GUILD_MEDIA:
                    case eu.d4z.DM:
                    case eu.d4z.GROUP_DM:
                        return (0, i.jsxs)(
                            l.Fragment,
                            {
                                children: [
                                    (0, i.jsx)(er.Z, {
                                        channel: x,
                                        guild: r,
                                        position: E.position,
                                        selected: a === E.id,
                                        muted: E.isMuted,
                                        subtitle: E.subtitle,
                                        disableManageChannels: p,
                                        canBeNewChannel: g && t === u.recentsSectionNumber,
                                        isFavoriteCategory: S,
                                        withGuildIcon: m
                                    }),
                                    E.threadCount > 0
                                        ? (0, i.jsx)(ee.Z, {
                                              withGuildIcon: m,
                                              channel: x,
                                              sortedThreadIds: E.threadIds,
                                              selectedChannel: null != o && (o.id === E.id || o.parent_id === x.id) ? o : null,
                                              selectedVoiceChannelId: (null == s ? void 0 : s.parent_id) === x.id ? c : null
                                          })
                                        : null
                                ]
                            },
                            I
                        );
                    case eu.d4z.GUILD_STAGE_VOICE:
                        var w, T;
                        return (0, i.jsx)(
                            et.Z,
                            {
                                channel: x,
                                guild: r,
                                position: E.position,
                                selected: a === E.id,
                                connected: c === E.id,
                                collapsed: E.isCollapsed || y.isCollapsed,
                                voiceStates: null != (w = h[E.id]) ? w : [],
                                speakerVoiceStates: null != (T = f[E.id]) ? T : [],
                                disableManageChannels: p,
                                isFavoriteCategory: S
                            },
                            I
                        );
                    case eu.d4z.GUILD_VOICE:
                        return (0, i.jsx)(
                            ea.Z,
                            {
                                channel: x,
                                guild: r,
                                position: E.position,
                                selected: a === E.id,
                                connected: c === E.id,
                                collapsed: E.isCollapsed || y.isCollapsed,
                                voiceStates: h[E.id],
                                subtitle: E.subtitle,
                                disableManageChannels: p,
                                showTutorial: E.isFirstVoiceChannel,
                                isFavoriteCategory: S,
                                withGuildIcon: m
                            },
                            I
                        );
                    case eu.d4z.GUILD_STORE:
                        return (0, i.jsx)(
                            en.Z,
                            {
                                channel: x,
                                guild: r,
                                position: E.position,
                                selected: a === E.id
                            },
                            I
                        );
                    case eu.d4z.GUILD_CATEGORY:
                        if (t !== u.voiceChannelsSectionNumber) return null;
                        return (0, i.jsx)(z.kw, { channel: x }, 'readonly-'.concat(x.id));
                    case eu.d4z.PUBLIC_THREAD:
                    case eu.d4z.PRIVATE_THREAD:
                        return (0, i.jsx)(
                            er.Z,
                            {
                                channel: x,
                                guild: r,
                                position: E.position,
                                selected: a === E.id,
                                muted: E.isMuted,
                                subtitle: E.subtitle,
                                disableManageChannels: p,
                                canBeNewChannel: !1,
                                isFavoriteCategory: !1,
                                forceTopLevelThread: !0
                            },
                            I
                        );
                    default:
                        return null;
                }
            }),
            ef(this, 'renderSectionFooter', (e) => {
                let { section: t } = e,
                    { guildChannels: n, guildChannelsVersion: r, voiceStates: l, selectedChannelId: o, selectedVoiceChannelId: a, optInEnabled: s, guildId: c } = this.props;
                return (0, i.jsx)(
                    K.ZP,
                    {
                        guildId: c,
                        guildChannels: n,
                        guildChannelsVersion: r,
                        sectionIndex: t,
                        voiceStates: l,
                        selectedChannelId: o,
                        selectedVoiceChannelId: a,
                        optInEnabled: s
                    },
                    (0, K.eo)(t, n, s)
                );
            }),
            ef(this, 'getAnchorId', (e, t) => {
                var n, r, i;
                let { guildChannels: l } = this.props;
                if (e !== U.wZ) {
                    if (null == t) return e === U.p2 ? 'favorites-header' : e === l.recentsSectionNumber ? 'recents-header' : e === l.voiceChannelsSectionNumber ? 'voice-channels' : e === U.wd ? 'uncategorized-header' : null == (i = l.getNamedCategoryFromSection(e)) ? void 0 : i.id;
                    if (!l.isPlaceholderRow(e, t)) return null == (r = l.getChannelFromSectionRow(e, t)) || null == (n = r.channel) ? void 0 : n.id;
                }
            }),
            ef(this, 'testShouldSkipTutorial', () => {
                if (!Z.Z.shouldShow('voice-conversations')) return;
                let { guildChannels: e } = this.props,
                    t = e.getFirstVoiceChannel();
                if (null == t) return void f.Z.dismiss('voice-conversations');
                let n = this._list;
                if (null != n) for (let { section: e, row: r } of this.getSectionRowsFromChannel(t.id)) n.isItemVisible(e, r) || f.Z.dismiss('voice-conversations');
            }));
    }
}
(ef(e_, 'contextType', s.qB), ef(e_, 'defaultProps', { density: 'default' }));
let eO = (e) => {
    let { guildId: t, guild: n, selectedChannelId: r, selectedVoiceChannelId: o } = e,
        a = (0, u.e7)([m.Z], () => m.Z.keyboardModeEnabled),
        { analyticsLocations: d } = (0, _.ZP)(b.Z.GUILD_CHANNEL_LIST),
        h = (0, u.e7)([R.Z], () => R.Z.getChannel(r)),
        p = (0, u.e7)([R.Z], () => R.Z.getChannel(o)),
        f = (0, u.e7)([M.Z], () => M.Z.getGuildId()),
        O = (0, S.DM)(t),
        y = l.useRef(null),
        C = l.useCallback((e, t) => {
            let n = y.current;
            if (null != n)
                if (eu.Xyh.test(t) || (0, ed.AB)(t))
                    n.scrollToChannel(t, !1, 2 * ec.yE, () => {
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
            []
        ),
        j = l.useCallback(
            () =>
                new Promise((e) => {
                    let t = y.current;
                    if (null == t) return e();
                    t.scrollTo(Number.MAX_SAFE_INTEGER, () => requestAnimationFrame(() => e()));
                }),
            []
        ),
        E = (0, c.ZP)({
            id: 'channels',
            defaultFocused: null != r ? r : void 0,
            isEnabled: a,
            setFocus: C,
            scrollToStart: v,
            scrollToEnd: j
        }),
        P = E.setFocus;
    l.useEffect(() => {
        null != r && P(r);
    }, [r, P]);
    let N = (0, T.Z)(t),
        w = (0, x.V)('NavigableChannels'),
        Z = (0, u.e7)([k.default], () => k.default.getCurrentUser()),
        A = (0, I.Z)(null == Z ? void 0 : Z.id, t) && !0 === n.premiumProgressBarEnabled;
    return (0, i.jsx)(_.Gt, {
        value: d,
        children: (0, i.jsx)(g.Z, {
            section: eu.jXE.GUILD_CHANNEL_LIST,
            children: (0, i.jsx)(s.bG, {
                navigator: E,
                children: (0, i.jsx)(
                    e_,
                    em(eg({}, e), {
                        listNavigator: E,
                        ref: y,
                        selectedChannel: h,
                        selectedVoiceChannel: p,
                        stageChannelSpeakerVoiceStates: N,
                        selectedGuildId: f,
                        optInEnabled: O,
                        isNewGuildPowerupsProgressBarEnabled: w,
                        shouldRenderBoosterEnhancedRoleColorsCoachmark: A
                    })
                )
            })
        })
    });
};
function ey(e) {
    let t = (0, B.o)(),
        { isFavoritesPerk: n } = (0, y.z)('favorites-channel-list'),
        { density: r } = (0, h.TCT)();
    return (0, i.jsx)(
        eO,
        em(eg({}, e), {
            guildChannels: t,
            guildChannelsVersion: 0,
            withGuildIcon: n,
            density: r
        })
    );
}
function eC(e) {
    let t = (0, F.Z)(e.guild),
        n = (0, u.cj)([G.Z], () => G.Z.getGuild(e.guildId, { guildActionRows: t })),
        { density: r } = (0, h.TCT)();
    return (0, i.jsx)(eO, em(eg({}, e, n), { density: r }));
}
