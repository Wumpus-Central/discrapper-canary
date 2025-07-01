(n.d(t, {
    E: () => em,
    j: () => eg
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
    d = n(481060),
    h = n(925549),
    p = n(260300),
    f = n(410575),
    g = n(607070),
    m = n(100527),
    b = n(906732),
    _ = n(313201),
    O = n(362658),
    y = n(583962),
    v = n(915885),
    C = n(258871),
    j = n(216306),
    S = n(398758),
    E = n(742139),
    x = n(486311),
    I = n(620304),
    P = n(220444),
    N = n(31022),
    w = n(10401),
    Z = n(131704),
    T = n(592125),
    A = n(796974),
    R = n(984933),
    D = n(914010),
    L = n(540126),
    M = n(734307),
    k = n(854444),
    U = n(761091),
    G = n(301342),
    B = n(906817),
    F = n(429122),
    V = n(285573),
    H = n(995993),
    z = n(910595),
    W = n(120818),
    K = n(61642),
    Y = n(848442),
    q = n(53425),
    X = n(424785),
    Q = n(770202),
    J = n(79556),
    $ = n(428127),
    ee = n(950969),
    et = n(233657),
    en = n(831700),
    er = n(443063),
    ei = n(327530),
    el = n(981631),
    eo = n(176505),
    ea = n(388032),
    es = n(789123);
function ec(e, t, n) {
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
function eu(e) {
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
                ec(e, t, n[t]);
            }));
    }
    return e;
}
function ed(e, t) {
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
function eh(e) {
    return d.TVs.modules.channels.NAME_LINE_HEIGHT.resolve({ density: e }) + 2 * d.TVs.space.SPACE_XXS.resolve({ density: e }) + 2;
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
            { scrollTop: o } = A.Z.getGuildDimensions(r);
        (null != n ? (this.scrollToChannel(n), h.Z.clearChannelListScrollTo(r)) : r !== e.guildId ? null != o && this.scrollTo(o) : i !== e.selectedChannelId ? this.scrollToChannel(i) : !t.initialized && l && (null == o && null != i ? this.scrollToChannel(i, !1, ei.yE, this.handleListScroll) : this.scrollTo(null != o ? o : 0, this.handleListScroll)), this.testShouldSkipTutorial());
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
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ei.yE,
            r = arguments.length > 3 ? arguments[3] : void 0,
            i = this._list,
            l = this.getSectionRowsFromChannel(e)[0];
        if (null != l && null != i)
            if (null != l.threadOffset) {
                let [e] = i.getScrollPosition(l.section, l.row),
                    { density: o = 'default' } = this.props,
                    a = l.threadOffset * eh(o);
                i.scrollIntoViewRect({
                    start: e + a,
                    end: e + a + eh(o),
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
                if (r < L.wd || e.isPlaceholderRow(r, i)) return !1;
                let l = e.getChannelFromSectionRow(r, i);
                if (null == l) return !1;
                let { channel: o, category: a } = l;
                return !!(0, Z.vc)(o.record.type) && (!a.isCollapsed || !a.isMuted) && !o.isMuted && !!t.isItemVisible(r, i, !0) && (0, P.d)(o.record);
            })
        );
    }
    renderTopUnread() {
        let { topMention: e, bottomUnread: t, bottomMention: n, isUnreadVisible: r } = this.state,
            { guildId: l, guildChannels: o, guildChannelsVersion: a } = this.props;
        return (0, i.jsx)('div', {
            className: es.positionedContainer,
            children: (0, i.jsx)(ee.Z, {
                ref: this.unreadTopRef,
                textUnread: ea.intl.string(ea.t.FCRiT0),
                textMention: ea.intl.string(ea.t['8zH0LC']),
                hide: null == e && (r || null != t || null != n),
                className: es.unreadTop,
                barClassName: es.unreadBar,
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
        return (0, i.jsx)(ee.Z, {
            reverse: !0,
            ref: this.unreadBottomRef,
            textUnread: ea.intl.string(ea.t.FCRiT0),
            textMention: ea.intl.string(ea.t['8zH0LC']),
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
        let { guildChannels: e, guild: t, guildBanner: n, hasGuildSubheader: r, selectedGuildId: l, density: o } = this.props,
            a = {};
        l === el.I_8 && (a['data-favorites'] = !0);
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
            h = 0;
        null != n ? (h = ei.Q0) : t.hasCommunityInfoSubheader() && !r && (h = ei.JD);
        let p = 'compact' === o ? 8 : ei.$k;
        return (0, i.jsx)(d.Wdt, {
            children: (t) =>
                (0, i.jsx)(
                    d.aVo,
                    eu(
                        {
                            ref: this.setListRef,
                            className: es.scroller,
                            fade: !0,
                            customTheme: !0,
                            sectionHeight: this.getSectionHeight,
                            footerHeight: this.getSectionFooterHeight,
                            rowHeight: this.getRowHeight,
                            paddingTop: h,
                            paddingBottom: p,
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
        return (0, i.jsx)(_.FG, {
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
                                      className: es.positionedContainer,
                                      children: (0, i.jsx)($.Z, {
                                          position: 'top',
                                          guildChannels: e,
                                          guildChannelsVersion: t,
                                          jumpToVoiceChannels: this.jumpToVoiceChannels,
                                          jumpToChannel: this.jumpToChannel
                                      })
                                  }),
                                  this.renderList(),
                                  (0, i.jsx)($.Z, {
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
            ec(this, '_list', null),
            ec(this, 'unreadTopRef', l.createRef()),
            ec(this, 'unreadBottomRef', l.createRef()),
            ec(this, 'state', {
                initialized: !1,
                isUnreadVisible: !0,
                topUnread: null,
                topMention: null,
                bottomUnread: null,
                bottomMention: null
            }),
            ec(this, 'setListRef', (e) => {
                var t;
                let { ref: n } = this.context;
                ((n.current = null != (t = null == e ? void 0 : e.getScrollerNode()) ? t : null), (this._list = e));
            }),
            ec(this, 'jumpToVoiceChannels', () => {
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
                        padding: ei.yE
                    });
            }),
            ec(this, 'jumpToChannel', (e) => this.scrollToChannel(e, !0, ei.Q1)),
            ec(this, 'jumpToChannelWithMentionsAndUnreads', (e, t) => {
                let [n, r] = t;
                return this.scrollToChannel(e, !0, null != n && null != r ? ei.Q1 : ei.yE);
            }),
            ec(this, 'isChannelVisible', (e, t) => {
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
            ec(this, 'getVisibleChannels', () => {
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
            ec(this, 'handleResize', () => {
                var e, t;
                let { showNewUnreadsBar: n } = this.props,
                    r = null != (t = null == (e = this._list) ? void 0 : e.getScrollerState()) ? t : null;
                if ((this.setState({ isUnreadVisible: this.isUnreadVisible() }), n && null != r)) {
                    let { scrollTop: e } = r;
                    this.updateChannelListScroll(e);
                }
            }),
            ec(this, 'handleListScroll', () => {
                var e, t;
                let { onScroll: n } = this.props,
                    r = null != (t = null == (e = this._list) ? void 0 : e.getScrollerState()) ? t : null;
                if (null != r) {
                    let { scrollTop: e } = r;
                    (null != n && n(r), this.updateChannelListScroll(e));
                }
                (null != this.unreadTopRef.current && this.unreadTopRef.current.calculateState(), null != this.unreadBottomRef.current && this.unreadBottomRef.current.calculateState());
            }),
            ec(this, 'handleUnreadCalculate', (e, t, n) => {
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
            ec(
                this,
                'updateChannelListScroll',
                a().throttle((e) => {
                    h.Z.updateChannelListScroll(this.props.guildId, e, this.getVisibleChannels());
                }, 100)
            ),
            ec(this, 'getSectionHeight', (e) => {
                let { guild: t, guildChannels: n, density: r } = this.props;
                return (0, B.EM)(e, t, n, r);
            }),
            ec(this, 'getSectionFooterHeight', (e) => {
                let { guildChannels: t, voiceStates: n, selectedVoiceChannelId: r, selectedChannelId: i, optInEnabled: l, guildChannelsVersion: o } = this.props;
                return (0, F.dt)({
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
            ec(this, 'getRowHeight', (e, t) => {
                let { guildChannels: n, voiceStates: r, stageChannelSpeakerVoiceStates: i, selectedVoiceChannelId: l, selectedGuildId: o, density: a = 'default' } = this.props,
                    s = eh(a);
                if (e === L.wZ) {
                    let e = n.getGuildActionSection();
                    return e.isEmpty() ? 0 : e.getRow(t) === er.z.GUILD_PREMIUM_PROGRESS_BAR ? (e.getRows().length > 1 ? y.aR : y.PD) : s;
                }
                if (n.isPlaceholderRow(e, t)) return 0;
                let c = n.getChannelFromSectionRow(e, t);
                if (null == c) return 0;
                let { channel: u, category: h } = c;
                if (u.record.type === el.d4z.GUILD_CATEGORY) return 40;
                let { isFavoritesPerk: p } = O.Z.getCurrentConfig({ location: 'channel_list' }, { autoTrackExposure: !0 });
                for (let e of (!p || o !== el.I_8 || u.record.isDM() || u.record.isGroupDM() || u.record.isGuildStageVoice() || (s = 46), u.threadIds)) {
                    let { density: t = 'default' } = this.props;
                    s += eh(t);
                    let n = r[u.id];
                    null != n && n.length > 0 && ((s += l === e ? 32 * n.length : 32), (s += ei.cx));
                }
                if (u.record.isGuildVoice()) {
                    let e = r[u.id];
                    if (null != e && e.length > 0) {
                        let t = 32 * e.length;
                        ((u.isCollapsed || h.isCollapsed) && (t = 32), (s += t + d.TVs.space.SPACE_XS.resolve({ density: a })));
                    }
                    u.id === this.props.rtcConnectedChannelId && (s += 32 * this.props.rtcDesyncedVoiceStatesCount);
                }
                if ((null != u.subtitle && (s += ei.NY), u.record.isGuildStageVoice())) {
                    var f, g;
                    let e = null != (f = r[u.id]) ? f : [],
                        t = null != (g = i[u.id]) ? g : [];
                    if (null != e && e.length > 0) {
                        let e = 32 * t.length;
                        (u.isCollapsed || h.isCollapsed ? (e = Math.ceil(e / ei.VE)) : (e += 32), (s += e + ei.cx));
                    }
                }
                return s;
            }),
            ec(this, 'dismissRecents', () => {
                let { guild: e, guildChannels: t, selectedChannelId: n } = this.props,
                    r = t.getCategoryFromSection(t.recentsSectionNumber);
                if (null == r) return;
                let i = null,
                    l = r.getShownChannelAndThreadIds();
                (null != n && l.includes(n) && (i = (0, j.KY)(t)), (0, j.Uo)(e.id, l, i));
            }),
            ec(this, 'renderSection', (e) => {
                let { section: t } = e,
                    { guildChannels: n, guildChannelsVersion: r, guild: l, selectedChannelId: o, disableManageChannels: a } = this.props;
                return (0, i.jsx)(
                    B.ZP,
                    {
                        sectionIndex: t,
                        guild: l,
                        guildChannels: n,
                        guildChannelsVersion: r,
                        selectedChannelId: o,
                        disableManageChannels: a
                    },
                    (0, B.WW)(t, n)
                );
            }),
            ec(this, 'renderRow', (e) => {
                let { section: t, row: n } = e,
                    { guild: r, selectedChannel: o, selectedChannelId: a, selectedVoiceChannel: s, selectedVoiceChannelId: c, guildChannels: u, voiceStates: d, disableManageChannels: h, stageChannelSpeakerVoiceStates: p, optInEnabled: f, withGuildIcon: g, isNewGuildPowerupsProgressBarEnabled: m } = this.props;
                if (t === L.wZ) {
                    let e = u.getGuildActionSection(),
                        t = e.getRow(n);
                    if (null == t) return null;
                    switch (t) {
                        case er.z.GUILD_HUB_HEADER_OPTIONS:
                            return (0, i.jsx)(
                                C.Z,
                                {
                                    guild: r,
                                    channel: R.ZP.getDefaultChannel(r.id)
                                },
                                er.z.GUILD_HUB_HEADER_OPTIONS
                            );
                        case er.z.GUILD_PREMIUM_PROGRESS_BAR:
                            let l = e.getRows();
                            return m
                                ? (0, i.jsx)(
                                      I.Z,
                                      {
                                          guild: r,
                                          withMargin: l.length > 1
                                      },
                                      er.z.GUILD_PREMIUM_PROGRESS_BAR
                                  )
                                : (0, i.jsx)(
                                      y.ZP,
                                      {
                                          guild: r,
                                          withMargin: l.length > 1
                                      },
                                      er.z.GUILD_PREMIUM_PROGRESS_BAR
                                  );
                        case er.z.GUILD_HOME:
                            return (0, i.jsx)(
                                z.Z,
                                {
                                    guild: r,
                                    selected: a === eo.oC.GUILD_HOME
                                },
                                er.z.GUILD_HOME
                            );
                        case er.z.GUILD_SCHEDULED_EVENTS:
                            return (0, i.jsx)(
                                et.Z,
                                {
                                    guild: r,
                                    selected: a === er.z.GUILD_SCHEDULED_EVENTS
                                },
                                er.z.GUILD_SCHEDULED_EVENTS
                            );
                        case er.z.GUILD_ROLE_SUBSCRIPTIONS:
                            return (0, i.jsx)(
                                K.Z,
                                {
                                    guild: r,
                                    selected: a === eo.oC.ROLE_SUBSCRIPTIONS
                                },
                                er.z.GUILD_ROLE_SUBSCRIPTIONS
                            );
                        case er.z.GUILD_SHOP:
                            return (0, i.jsx)(
                                Y.Z,
                                {
                                    guild: r,
                                    selected: a === eo.oC.GUILD_SHOP
                                },
                                er.z.GUILD_SHOP
                            );
                        case er.z.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR:
                            return (0, i.jsx)(W.T, { guild: r });
                        case er.z.CHANNELS_AND_ROLES:
                            return (0, i.jsx)(
                                H.m,
                                {
                                    guild: r,
                                    selected: a === eo.oC.CHANNEL_BROWSER || a === eo.oC.CUSTOMIZE_COMMUNITY
                                },
                                er.z.CHANNELS_AND_ROLES
                            );
                        case er.z.GUILD_DIRECTORY:
                            return (0, i.jsx)(
                                V.Z,
                                {
                                    guild: r,
                                    selectedChannelId: a,
                                    disableManageChannels: h
                                },
                                er.z.GUILD_DIRECTORY
                            );
                        case er.z.GUILD_MOD_DASH_MEMBER_SAFETY:
                            return (0, i.jsx)(
                                v.Z,
                                {
                                    guild: r,
                                    selected: a === eo.oC.MEMBER_SAFETY
                                },
                                er.z.GUILD_MOD_DASH_MEMBER_SAFETY
                            );
                        case er.z.GUILD_BOOSTS:
                            return (0, i.jsx)(
                                x.Z,
                                {
                                    guildId: r.id,
                                    selected: a === eo.oC.GUILD_BOOSTS
                                },
                                er.z.GUILD_BOOSTS
                            );
                        default:
                            return null;
                    }
                }
                if (u.isPlaceholderRow(t, n)) return null;
                let b = u.getChannelFromSectionRow(t, n);
                if (null == b) return null;
                let { category: _, channel: O } = b,
                    j = _ instanceof L.VR,
                    S = O.record,
                    E = ''.concat(t).concat(O.id);
                switch (S.type) {
                    case el.d4z.GUILD_ANNOUNCEMENT:
                    case el.d4z.GUILD_TEXT:
                    case el.d4z.GUILD_FORUM:
                    case el.d4z.GUILD_MEDIA:
                    case el.d4z.DM:
                    case el.d4z.GROUP_DM:
                        return (0, i.jsxs)(
                            l.Fragment,
                            {
                                children: [
                                    (0, i.jsx)(J.Z, {
                                        channel: S,
                                        guild: r,
                                        position: O.position,
                                        selected: a === O.id,
                                        muted: O.isMuted,
                                        subtitle: O.subtitle,
                                        disableManageChannels: h,
                                        canBeNewChannel: f && t === u.recentsSectionNumber,
                                        isFavoriteCategory: j,
                                        withGuildIcon: g
                                    }),
                                    O.threadCount > 0
                                        ? (0, i.jsx)(q.Z, {
                                              withGuildIcon: g,
                                              channel: S,
                                              sortedThreadIds: O.threadIds,
                                              selectedChannel: null != o && (o.id === O.id || o.parent_id === S.id) ? o : null,
                                              selectedVoiceChannelId: (null == s ? void 0 : s.parent_id) === S.id ? c : null
                                          })
                                        : null
                                ]
                            },
                            E
                        );
                    case el.d4z.GUILD_STAGE_VOICE:
                        var P, N;
                        return (0, i.jsx)(
                            X.Z,
                            {
                                channel: S,
                                guild: r,
                                position: O.position,
                                selected: a === O.id,
                                connected: c === O.id,
                                collapsed: O.isCollapsed || _.isCollapsed,
                                voiceStates: null != (P = d[O.id]) ? P : [],
                                speakerVoiceStates: null != (N = p[O.id]) ? N : [],
                                disableManageChannels: h,
                                isFavoriteCategory: j
                            },
                            E
                        );
                    case el.d4z.GUILD_VOICE:
                        return (0, i.jsx)(
                            en.Z,
                            {
                                channel: S,
                                guild: r,
                                position: O.position,
                                selected: a === O.id,
                                connected: c === O.id,
                                collapsed: O.isCollapsed || _.isCollapsed,
                                voiceStates: d[O.id],
                                subtitle: O.subtitle,
                                disableManageChannels: h,
                                showTutorial: O.isFirstVoiceChannel,
                                isFavoriteCategory: j,
                                withGuildIcon: g
                            },
                            E
                        );
                    case el.d4z.GUILD_STORE:
                        return (0, i.jsx)(
                            Q.Z,
                            {
                                channel: S,
                                guild: r,
                                position: O.position,
                                selected: a === O.id
                            },
                            E
                        );
                    case el.d4z.GUILD_CATEGORY:
                        if (t !== u.voiceChannelsSectionNumber) return null;
                        return (0, i.jsx)(G.kw, { channel: S }, 'readonly-'.concat(S.id));
                    case el.d4z.PUBLIC_THREAD:
                    case el.d4z.PRIVATE_THREAD:
                        return (0, i.jsx)(
                            J.Z,
                            {
                                channel: S,
                                guild: r,
                                position: O.position,
                                selected: a === O.id,
                                muted: O.isMuted,
                                subtitle: O.subtitle,
                                disableManageChannels: h,
                                canBeNewChannel: !1,
                                isFavoriteCategory: !1,
                                forceTopLevelThread: !0
                            },
                            E
                        );
                    default:
                        return null;
                }
            }),
            ec(this, 'renderSectionFooter', (e) => {
                let { section: t } = e,
                    { guildChannels: n, guildChannelsVersion: r, voiceStates: l, selectedChannelId: o, selectedVoiceChannelId: a, optInEnabled: s, guildId: c } = this.props;
                return (0, i.jsx)(
                    F.ZP,
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
                    (0, F.eo)(t, n, s)
                );
            }),
            ec(this, 'getAnchorId', (e, t) => {
                var n, r, i;
                let { guildChannels: l } = this.props;
                if (e !== L.wZ) {
                    if (null == t) return e === L.p2 ? 'favorites-header' : e === l.recentsSectionNumber ? 'recents-header' : e === l.voiceChannelsSectionNumber ? 'voice-channels' : e === L.wd ? 'uncategorized-header' : null == (i = l.getNamedCategoryFromSection(e)) ? void 0 : i.id;
                    if (!l.isPlaceholderRow(e, t)) return null == (r = l.getChannelFromSectionRow(e, t)) || null == (n = r.channel) ? void 0 : n.id;
                }
            }),
            ec(this, 'testShouldSkipTutorial', () => {
                if (!w.Z.shouldShow('voice-conversations')) return;
                let { guildChannels: e } = this.props,
                    t = e.getFirstVoiceChannel();
                if (null == t) return void p.Z.dismiss('voice-conversations');
                let n = this._list;
                if (null != n) for (let { section: e, row: r } of this.getSectionRowsFromChannel(t.id)) n.isItemVisible(e, r) || p.Z.dismiss('voice-conversations');
            }));
    }
}
(ec(ep, 'contextType', s.qB), ec(ep, 'defaultProps', { density: 'default' }));
let ef = (e) => {
    let { guildId: t, selectedChannelId: n, selectedVoiceChannelId: r } = e,
        o = (0, u.e7)([g.Z], () => g.Z.keyboardModeEnabled),
        { analyticsLocations: a } = (0, b.ZP)(m.Z.GUILD_CHANNEL_LIST),
        d = (0, u.e7)([T.Z], () => T.Z.getChannel(n)),
        h = (0, u.e7)([T.Z], () => T.Z.getChannel(r)),
        p = (0, u.e7)([D.Z], () => D.Z.getGuildId()),
        _ = (0, S.DM)(t),
        O = l.useRef(null),
        y = l.useCallback((e, t) => {
            let n = O.current;
            if (null != n)
                if (el.Xyh.test(t) || (0, eo.AB)(t))
                    n.scrollToChannel(t, !1, 2 * ei.yE, () => {
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
                    let t = O.current;
                    if (null == t) return e();
                    t.scrollTo(0, () => requestAnimationFrame(() => e()));
                }),
            []
        ),
        C = l.useCallback(
            () =>
                new Promise((e) => {
                    let t = O.current;
                    if (null == t) return e();
                    t.scrollTo(Number.MAX_SAFE_INTEGER, () => requestAnimationFrame(() => e()));
                }),
            []
        ),
        j = (0, c.ZP)({
            id: 'channels',
            defaultFocused: null != n ? n : void 0,
            isEnabled: o,
            setFocus: y,
            scrollToStart: v,
            scrollToEnd: C
        }),
        x = j.setFocus;
    l.useEffect(() => {
        null != n && x(n);
    }, [n, x]);
    let I = (0, N.Z)(t),
        P = (0, E.V)('NavigableChannels');
    return (0, i.jsx)(b.Gt, {
        value: a,
        children: (0, i.jsx)(f.Z, {
            section: el.jXE.GUILD_CHANNEL_LIST,
            children: (0, i.jsx)(s.bG, {
                navigator: j,
                children: (0, i.jsx)(
                    ep,
                    ed(eu({}, e), {
                        listNavigator: j,
                        ref: O,
                        selectedChannel: d,
                        selectedVoiceChannel: h,
                        stageChannelSpeakerVoiceStates: I,
                        selectedGuildId: p,
                        optInEnabled: _,
                        isNewGuildPowerupsProgressBarEnabled: P
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
        ed(eu({}, e), {
            guildChannels: t,
            guildChannelsVersion: 0,
            withGuildIcon: n,
            density: r
        })
    );
}
function em(e) {
    let t = (0, U.Z)(e.guild),
        n = (0, u.cj)([M.Z], () => M.Z.getGuild(e.guildId, { guildActionRows: t })),
        { density: r } = (0, d.TCT)();
    return (0, i.jsx)(ef, ed(eu({}, e, n), { density: r }));
}
