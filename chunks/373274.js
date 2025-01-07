n.d(t, {
    E: function () {
        return ef;
    },
    j: function () {
        return ep;
    }
}),
    n(47120),
    n(653041);
var i,
    l = n(200651),
    r = n(192379),
    a = n(392711),
    o = n.n(a),
    s = n(91192),
    c = n(924826),
    u = n(442837),
    d = n(481060),
    h = n(925549),
    p = n(260300),
    f = n(410575),
    m = n(607070),
    g = n(100527),
    v = n(906732),
    C = n(313201),
    x = n(540059),
    I = n(362658),
    _ = n(583962),
    Z = n(915885),
    b = n(258871),
    S = n(216306),
    N = n(398758),
    E = n(220444),
    y = n(31022),
    j = n(10401),
    T = n(131704),
    P = n(592125),
    A = n(796974),
    w = n(984933),
    M = n(914010),
    L = n(540126),
    R = n(734307),
    D = n(854444),
    G = n(761091),
    B = n(301342),
    k = n(906817),
    U = n(429122),
    O = n(285573),
    V = n(995993),
    H = n(910595),
    F = n(466935),
    W = n(120818),
    z = n(61642),
    q = n(848442),
    Y = n(53425),
    Q = n(424785),
    J = n(770202),
    K = n(79556),
    X = n(428127),
    $ = n(950969),
    ee = n(233657),
    et = n(831700),
    en = n(443063),
    ei = n(327530),
    el = n(981631),
    er = n(176505),
    ea = n(388032),
    eo = n(607686);
function es(e, t, n) {
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
function ec(e, t) {
    return e ? ('cozy' === t ? 42 : 34) : ei.Vf;
}
function eu(e) {
    return e ? 32 : ei.Hb;
}
class ed extends (i = r.PureComponent) {
    componentDidMount() {
        this.setState({ initialized: !0 });
    }
    componentWillUnmount() {
        this.updateChannelListScroll.cancel();
    }
    componentDidUpdate(e, t) {
        let { scrollToChannel: n, guildId: i, selectedChannelId: l } = this.props,
            { initialized: r } = this.state,
            { scrollTop: a } = A.Z.getGuildDimensions(i);
        null != n ? (this.scrollToChannel(n), h.Z.clearChannelListScrollTo(i)) : i !== e.guildId ? null != a && this.scrollTo(a) : l !== e.selectedChannelId ? this.scrollToChannel(l) : !t.initialized && r && (null == a && null != l ? this.scrollToChannel(l, !1, ei.yE, this.handleListScroll) : this.scrollTo(null != a ? a : 0, this.handleListScroll)), this.testShouldSkipTutorial();
    }
    getSectionRowsFromChannel(e) {
        return this.props.guildChannels.getSectionRowsFromChannel(e);
    }
    scrollTo(e, t) {
        var n;
        null === (n = this._list) ||
            void 0 === n ||
            n.scrollTo({
                to: e,
                animate: !1,
                callback: t
            });
    }
    scrollToChannel(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ei.yE,
            i = arguments.length > 3 ? arguments[3] : void 0,
            l = this._list,
            r = this.getSectionRowsFromChannel(e)[0];
        if (null != r && null != l) {
            if (null != r.threadOffset) {
                let [e] = l.getScrollPosition(r.section, r.row),
                    a = r.threadOffset * ec(this.props.isRefreshEnabled, this.props.density);
                l.scrollIntoViewRect({
                    start: e + a,
                    end: e + a + ec(this.props.isRefreshEnabled, this.props.density),
                    padding: n,
                    animate: t,
                    callback: i
                });
            } else
                l.scrollToIndex({
                    section: r.section,
                    row: r.row,
                    animate: t,
                    padding: n,
                    callback: i
                });
        } else null == i || i();
    }
    isUnreadVisible() {
        let { guildChannels: e } = this.props,
            t = this._list;
        return (
            null != t &&
            t.getItems().some((n) => {
                if ('row' !== n.type) return !1;
                let { section: i, row: l } = n;
                if (i < L.wd || e.isPlaceholderRow(i, l)) return !1;
                let r = e.getChannelFromSectionRow(i, l);
                if (null == r) return !1;
                let { channel: a, category: o } = r;
                return !!(0, T.vc)(a.record.type) && (!o.isCollapsed || !o.isMuted) && !a.isMuted && !!t.isItemVisible(i, l, !0) && (0, E.d)(a.record);
            })
        );
    }
    renderTopUnread() {
        let { topMention: e, bottomUnread: t, bottomMention: n, isUnreadVisible: i } = this.state,
            { guildId: r, guildChannels: a, guildChannelsVersion: o } = this.props;
        return (0, l.jsx)('div', {
            className: eo.positionedContainer,
            children: (0, l.jsx)($.Z, {
                ref: this.unreadTopRef,
                textUnread: ea.intl.string(ea.t.FCRiT0),
                textMention: ea.intl.string(ea.t['8zH0LC']),
                hide: null == e && (i || null != t || null != n),
                className: eo.unreadTop,
                barClassName: eo.unreadBar,
                guildId: r,
                guildChannels: a,
                guildChannelsVersion: o,
                isVisible: this.isChannelVisible,
                onJumpTo: this.jumpToChannelWithMentionsAndUnreads,
                onCalculate: this.handleUnreadCalculate
            })
        });
    }
    renderBottomUnread() {
        let { guildId: e, guildChannels: t, guildChannelsVersion: n } = this.props,
            { bottomMention: i, isUnreadVisible: r } = this.state;
        return (0, l.jsx)($.Z, {
            reverse: !0,
            ref: this.unreadBottomRef,
            textUnread: ea.intl.string(ea.t.FCRiT0),
            textMention: ea.intl.string(ea.t['8zH0LC']),
            hide: null == i && r,
            className: eo.unreadBottom,
            barClassName: eo.unreadBar,
            guildId: e,
            guildChannels: t,
            guildChannelsVersion: n,
            isVisible: this.isChannelVisible,
            onJumpTo: this.jumpToChannelWithMentionsAndUnreads,
            onCalculate: this.handleUnreadCalculate
        });
    }
    renderList() {
        let { guildChannels: e, guild: t, guildBanner: n, hasGuildSubheader: i, selectedGuildId: r, isRefreshEnabled: a } = this.props,
            o = {};
        r === el.I_8 && (o['data-favorites'] = !0);
        let { ref: s, ...c } = this.context,
            u = 0;
        return (
            null != n ? (u = a ? ei.hl : ei.Q0) : t.hasCommunityInfoSubheader() && !i && (u = ei.JD),
            (0, l.jsx)(d.FocusJumpSection, {
                children: (t) =>
                    (0, l.jsx)(
                        d.List,
                        {
                            ref: this.setListRef,
                            className: eo.scroller,
                            fade: !0,
                            customTheme: !0,
                            sectionHeight: this.getSectionHeight,
                            footerHeight: this.getSectionFooterHeight,
                            rowHeight: this.getRowHeight,
                            paddingTop: u,
                            paddingBottom: ei.$k,
                            renderSection: this.renderSection,
                            renderFooter: this.renderSectionFooter,
                            renderRow: this.renderRow,
                            onScroll: this.handleListScroll,
                            onResize: this.handleResize,
                            onContentResize: this.handleResize,
                            sections: e.getSections(!0),
                            innerAriaLabel: ea.intl.string(ea.t.OGiMXF),
                            innerTag: 'ul',
                            getAnchorId: this.getAnchorId,
                            ...c,
                            ...t,
                            ...o
                        },
                        'guild-channels'
                    )
            })
        );
    }
    render() {
        let { guildChannels: e, guildChannelsVersion: t, showNewUnreadsBar: n } = this.props;
        return (0, l.jsx)(r.Fragment, {
            children: (0, l.jsx)(C.FG, {
                children: (i) =>
                    (0, l.jsx)(d.HeadingLevel, {
                        component: (0, l.jsx)(d.HiddenVisually, {
                            children: (0, l.jsx)(d.H, {
                                id: i,
                                children: ea.intl.string(ea.t.OGiMXF)
                            })
                        }),
                        children: n
                            ? (0, l.jsxs)(r.Fragment, {
                                  children: [
                                      (0, l.jsx)('div', {
                                          className: eo.positionedContainer,
                                          children: (0, l.jsx)(X.Z, {
                                              position: 'top',
                                              guildChannels: e,
                                              guildChannelsVersion: t,
                                              jumpToVoiceChannels: this.jumpToVoiceChannels,
                                              jumpToChannel: this.jumpToChannel
                                          })
                                      }),
                                      this.renderList(),
                                      (0, l.jsx)(X.Z, {
                                          position: 'bottom',
                                          guildChannels: e,
                                          guildChannelsVersion: t,
                                          jumpToVoiceChannels: this.jumpToVoiceChannels,
                                          jumpToChannel: this.jumpToChannel
                                      })
                                  ]
                              })
                            : (0, l.jsxs)(r.Fragment, {
                                  children: [this.renderTopUnread(), this.renderList(), this.renderBottomUnread()]
                              })
                    })
            })
        });
    }
    constructor(...e) {
        super(...e),
            es(this, '_list', null),
            es(this, 'unreadTopRef', r.createRef()),
            es(this, 'unreadBottomRef', r.createRef()),
            es(this, 'state', {
                initialized: !1,
                isUnreadVisible: !0,
                topUnread: null,
                topMention: null,
                bottomUnread: null,
                bottomMention: null
            }),
            es(this, 'setListRef', (e) => {
                var t;
                let { ref: n } = this.context;
                (n.current = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null), (this._list = e);
            }),
            es(this, 'jumpToVoiceChannels', () => {
                var e, t, n, i;
                let { guildChannels: l, voiceStates: r } = this.props,
                    a = 0,
                    o = null !== (n = null === (e = l.getCategoryFromSection(l.voiceChannelsSectionNumber)) || void 0 === e ? void 0 : e.getShownChannelIds()) && void 0 !== n ? n : [];
                for (let e = 0; e < o.length - 1; e++)
                    if ((null !== (i = r[o[e]]) && void 0 !== i ? i : []).length > 0) {
                        a = e + 1;
                        break;
                    }
                null === (t = this._list) ||
                    void 0 === t ||
                    t.scrollToIndex({
                        section: l.voiceChannelsSectionNumber,
                        row: a,
                        animate: !0,
                        padding: ei.yE
                    });
            }),
            es(this, 'jumpToChannel', (e) => this.scrollToChannel(e, !0, ei.Q1)),
            es(this, 'jumpToChannelWithMentionsAndUnreads', (e, t) => {
                let [n, i] = t;
                return this.scrollToChannel(e, !0, null != n && null != i ? ei.Q1 : ei.yE);
            }),
            es(this, 'isChannelVisible', (e, t) => {
                let n = this.getSectionRowsFromChannel(e),
                    i = this._list;
                if (null == i) return !1;
                for (let { row: e, section: l } of n) {
                    let [n, r] = i.getScrollPosition(l, e),
                        a = i.getScrollerState();
                    if (t && n + r < a.scrollTop + a.offsetHeight) return !0;
                    if (!t && n > a.scrollTop) return !0;
                }
                return !1;
            }),
            es(this, 'getVisibleChannels', () => {
                let e = this._list;
                if (null == e) return [];
                let t = e.getItems(),
                    n = e.getScrollerState(),
                    i = [];
                for (var l = 0; l < t.length; l++) {
                    let r = t[l];
                    if ((0, d.isListItemRow)(r) && r.section >= this.props.guildChannels.favoritesSectionNumber) {
                        let t = this.props.guildChannels.getChannelFromSectionRow(r.section, r.row),
                            [l, a] = e.getScrollPosition(r.section, r.row);
                        null != t && l + a < n.scrollTop + n.offsetHeight && l > n.scrollTop && i.push(t.channel.id);
                    }
                }
                return i;
            }),
            es(this, 'handleResize', () => {
                var e, t;
                let { showNewUnreadsBar: n } = this.props,
                    i = null !== (t = null === (e = this._list) || void 0 === e ? void 0 : e.getScrollerState()) && void 0 !== t ? t : null;
                if ((this.setState({ isUnreadVisible: this.isUnreadVisible() }), n && null != i)) {
                    let { scrollTop: e } = i;
                    this.updateChannelListScroll(e);
                }
            }),
            es(this, 'handleListScroll', () => {
                var e, t;
                let { onScroll: n } = this.props,
                    i = null !== (t = null === (e = this._list) || void 0 === e ? void 0 : e.getScrollerState()) && void 0 !== t ? t : null;
                if (null != i) {
                    let { scrollTop: e } = i;
                    null != n && n(i), this.updateChannelListScroll(e);
                }
                null != this.unreadTopRef.current && this.unreadTopRef.current.calculateState(), null != this.unreadBottomRef.current && this.unreadBottomRef.current.calculateState();
            }),
            es(this, 'handleUnreadCalculate', (e, t, n) => {
                let i = this.isUnreadVisible();
                n
                    ? this.setState({
                          isUnreadVisible: i,
                          bottomUnread: t,
                          bottomMention: e
                      })
                    : this.setState({
                          isUnreadVisible: i,
                          topUnread: t,
                          topMention: e
                      });
            }),
            es(
                this,
                'updateChannelListScroll',
                o().throttle((e) => {
                    h.Z.updateChannelListScroll(this.props.guildId, e, this.getVisibleChannels());
                }, 100)
            ),
            es(this, 'getSectionHeight', (e) => {
                let { guild: t, guildChannels: n, isRefreshEnabled: i } = this.props;
                return (0, k.EM)(e, t, n, !!i);
            }),
            es(this, 'getSectionFooterHeight', (e) => {
                let { guildChannels: t, voiceStates: n, selectedVoiceChannelId: i, selectedChannelId: l, optInEnabled: r, guildChannelsVersion: a } = this.props;
                return (0, U.dt)({
                    sectionIndex: e,
                    guildChannels: t,
                    guildChannelsVersion: a,
                    voiceStates: n,
                    selectedChannelId: l,
                    selectedVoiceChannelId: i,
                    optInEnabled: r,
                    visualRefreshEnabled: this.props.isRefreshEnabled,
                    density: this.props.density
                });
            }),
            es(this, 'getRowHeight', (e, t) => {
                let { guildChannels: n, voiceStates: i, stageChannelSpeakerVoiceStates: l, selectedVoiceChannelId: r, selectedGuildId: a } = this.props,
                    o = ec(this.props.isRefreshEnabled, this.props.density);
                if (e === L.wZ) {
                    let e = n.getGuildActionSection();
                    return e.isEmpty() ? 0 : e.getRow(t) === en.z.GUILD_PREMIUM_PROGRESS_BAR ? (e.getRows().length > 1 ? _.aR : _.PD) : o;
                }
                if (n.isPlaceholderRow(e, t)) return 0;
                let s = n.getChannelFromSectionRow(e, t);
                if (null == s) return 0;
                let { channel: c, category: u } = s;
                if (c.record.type === el.d4z.GUILD_CATEGORY) return 40;
                let { isFavoritesPerk: d } = I.Z.getCurrentConfig({ location: 'channel_list' }, { autoTrackExposure: !0 });
                if (d && a === el.I_8 && !c.record.isDM() && !c.record.isGroupDM() && !c.record.isGuildStageVoice()) o = this.props.isRefreshEnabled ? 46 : ei.GQ;
                for (let e of c.threadIds) {
                    o += ec(this.props.isRefreshEnabled, this.props.density);
                    let t = i[c.id];
                    null != t && t.length > 0 && (o += (r === e ? t.length * eu(this.props.isRefreshEnabled) : eu(this.props.isRefreshEnabled)) + ei.cx);
                }
                if (c.record.isGuildVoice()) {
                    let e = i[c.id];
                    if (null != e && e.length > 0) {
                        let t = e.length * eu(this.props.isRefreshEnabled);
                        (c.isCollapsed || u.isCollapsed) && (t = eu(this.props.isRefreshEnabled)), (o += t + ei.cx);
                    }
                    c.id === this.props.rtcConnectedChannelId && (o += this.props.rtcDesyncedVoiceStatesCount * eu(this.props.isRefreshEnabled));
                }
                if ((null != c.subtitle && (o += ei.NY), c.record.isGuildStageVoice())) {
                    var h, p;
                    let e = null !== (h = i[c.id]) && void 0 !== h ? h : [],
                        t = null !== (p = l[c.id]) && void 0 !== p ? p : [];
                    if (null != e && e.length > 0) {
                        let e = t.length * eu(this.props.isRefreshEnabled);
                        c.isCollapsed || u.isCollapsed ? (e = Math.ceil(e / ei.VE)) : (e += eu(this.props.isRefreshEnabled)), (o += e + ei.cx);
                    }
                }
                return o;
            }),
            es(this, 'dismissRecents', () => {
                let { guild: e, guildChannels: t, selectedChannelId: n } = this.props,
                    i = t.getCategoryFromSection(t.recentsSectionNumber);
                if (null == i) return;
                let l = null,
                    r = i.getShownChannelAndThreadIds();
                null != n && r.includes(n) && (l = (0, S.KY)(t)), (0, S.Uo)(e.id, r, l);
            }),
            es(this, 'renderSection', (e) => {
                let { section: t } = e,
                    { guildChannels: n, guildChannelsVersion: i, guild: r, selectedChannelId: a, disableManageChannels: o } = this.props;
                return (0, l.jsx)(
                    k.ZP,
                    {
                        sectionIndex: t,
                        guild: r,
                        guildChannels: n,
                        guildChannelsVersion: i,
                        selectedChannelId: a,
                        disableManageChannels: o
                    },
                    (0, k.WW)(t, n)
                );
            }),
            es(this, 'renderRow', (e) => {
                let { section: t, row: n } = e,
                    { guild: i, selectedChannel: a, selectedChannelId: o, selectedVoiceChannel: s, selectedVoiceChannelId: c, guildChannels: u, voiceStates: d, disableManageChannels: h, stageChannelSpeakerVoiceStates: p, optInEnabled: f, withGuildIcon: m } = this.props;
                if (t === L.wZ) {
                    let e = u.getGuildActionSection(),
                        t = e.getRow(n);
                    if (null == t) return null;
                    switch (t) {
                        case en.z.GUILD_HUB_HEADER_OPTIONS:
                            return (0, l.jsx)(
                                b.Z,
                                {
                                    guild: i,
                                    channel: w.ZP.getDefaultChannel(i.id)
                                },
                                en.z.GUILD_HUB_HEADER_OPTIONS
                            );
                        case en.z.GUILD_PREMIUM_PROGRESS_BAR:
                            let r = e.getRows();
                            return (0, l.jsx)(
                                _.ZP,
                                {
                                    guild: i,
                                    withMargin: r.length > 1
                                },
                                en.z.GUILD_PREMIUM_PROGRESS_BAR
                            );
                        case en.z.GUILD_HOME:
                            return (0, l.jsx)(
                                H.Z,
                                {
                                    guild: i,
                                    selected: o === er.oC.GUILD_HOME
                                },
                                en.z.GUILD_HOME
                            );
                        case en.z.GUILD_SCHEDULED_EVENTS:
                            return (0, l.jsx)(
                                ee.Z,
                                {
                                    guild: i,
                                    selected: o === en.z.GUILD_SCHEDULED_EVENTS
                                },
                                en.z.GUILD_SCHEDULED_EVENTS
                            );
                        case en.z.GUILD_ROLE_SUBSCRIPTIONS:
                            return (0, l.jsx)(
                                z.Z,
                                {
                                    guild: i,
                                    selected: o === er.oC.ROLE_SUBSCRIPTIONS
                                },
                                en.z.GUILD_ROLE_SUBSCRIPTIONS
                            );
                        case en.z.GUILD_SHOP:
                            return (0, l.jsx)(
                                q.Z,
                                {
                                    guild: i,
                                    selected: o === er.oC.GUILD_SHOP
                                },
                                en.z.GUILD_SHOP
                            );
                        case en.z.GUILD_MEMBER_APPLICATIONS:
                            return (0, l.jsx)(
                                F.Z,
                                {
                                    guild: i,
                                    selected: o === er.oC.MEMBER_APPLICATIONS
                                },
                                en.z.GUILD_MEMBER_APPLICATIONS
                            );
                        case en.z.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR:
                            return (0, l.jsx)(W.T, { guild: i });
                        case en.z.CHANNELS_AND_ROLES:
                            return (0, l.jsx)(
                                V.m,
                                {
                                    guild: i,
                                    selected: o === er.oC.CHANNEL_BROWSER || o === er.oC.CUSTOMIZE_COMMUNITY
                                },
                                en.z.CHANNELS_AND_ROLES
                            );
                        case en.z.GUILD_DIRECTORY:
                            return (0, l.jsx)(
                                O.Z,
                                {
                                    guild: i,
                                    selectedChannelId: o,
                                    disableManageChannels: h
                                },
                                en.z.GUILD_DIRECTORY
                            );
                        case en.z.GUILD_MOD_DASH_MEMBER_SAFETY:
                            return (0, l.jsx)(
                                Z.Z,
                                {
                                    guild: i,
                                    selected: o === er.oC.MEMBER_SAFETY
                                },
                                en.z.GUILD_MOD_DASH_MEMBER_SAFETY
                            );
                        default:
                            return null;
                    }
                }
                if (u.isPlaceholderRow(t, n)) return null;
                let g = u.getChannelFromSectionRow(t, n);
                if (null == g) return null;
                let { category: v, channel: C } = g,
                    x = v instanceof L.VR,
                    I = C.record,
                    S = ''.concat(t).concat(C.id);
                switch (I.type) {
                    case el.d4z.GUILD_ANNOUNCEMENT:
                    case el.d4z.GUILD_TEXT:
                    case el.d4z.GUILD_FORUM:
                    case el.d4z.GUILD_MEDIA:
                    case el.d4z.DM:
                    case el.d4z.GROUP_DM:
                        return (0, l.jsxs)(
                            r.Fragment,
                            {
                                children: [
                                    (0, l.jsx)(K.Z, {
                                        channel: I,
                                        guild: i,
                                        position: C.position,
                                        selected: o === C.id,
                                        muted: C.isMuted,
                                        subtitle: C.subtitle,
                                        disableManageChannels: h,
                                        canBeNewChannel: f && t === u.recentsSectionNumber,
                                        isFavoriteCategory: x,
                                        withGuildIcon: m
                                    }),
                                    C.threadCount > 0
                                        ? (0, l.jsx)(Y.Z, {
                                              withGuildIcon: m,
                                              channel: I,
                                              sortedThreadIds: C.threadIds,
                                              selectedChannel: null != a && (a.id === C.id || a.parent_id === I.id) ? a : null,
                                              selectedVoiceChannelId: (null == s ? void 0 : s.parent_id) === I.id ? c : null
                                          })
                                        : null
                                ]
                            },
                            S
                        );
                    case el.d4z.GUILD_STAGE_VOICE:
                        var N, E;
                        return (0, l.jsx)(
                            Q.Z,
                            {
                                channel: I,
                                guild: i,
                                position: C.position,
                                selected: o === C.id,
                                connected: c === C.id,
                                collapsed: C.isCollapsed || v.isCollapsed,
                                voiceStates: null !== (N = d[C.id]) && void 0 !== N ? N : [],
                                speakerVoiceStates: null !== (E = p[C.id]) && void 0 !== E ? E : [],
                                disableManageChannels: h,
                                isFavoriteCategory: x
                            },
                            S
                        );
                    case el.d4z.GUILD_VOICE:
                        return (0, l.jsx)(
                            et.Z,
                            {
                                channel: I,
                                guild: i,
                                position: C.position,
                                selected: o === C.id,
                                connected: c === C.id,
                                collapsed: C.isCollapsed || v.isCollapsed,
                                voiceStates: d[C.id],
                                subtitle: C.subtitle,
                                disableManageChannels: h,
                                showTutorial: C.isFirstVoiceChannel,
                                isFavoriteCategory: x,
                                withGuildIcon: m
                            },
                            S
                        );
                    case el.d4z.GUILD_STORE:
                        return (0, l.jsx)(
                            J.Z,
                            {
                                channel: I,
                                guild: i,
                                position: C.position,
                                selected: o === C.id
                            },
                            S
                        );
                    case el.d4z.GUILD_CATEGORY:
                        if (t !== u.voiceChannelsSectionNumber) return null;
                        return (0, l.jsx)(B.kw, { channel: I }, 'readonly-'.concat(I.id));
                    case el.d4z.PUBLIC_THREAD:
                    case el.d4z.PRIVATE_THREAD:
                        return (0, l.jsx)(
                            K.Z,
                            {
                                channel: I,
                                guild: i,
                                position: C.position,
                                selected: o === C.id,
                                muted: C.isMuted,
                                subtitle: C.subtitle,
                                disableManageChannels: h,
                                canBeNewChannel: !1,
                                isFavoriteCategory: !1,
                                forceTopLevelThread: !0
                            },
                            S
                        );
                    default:
                        return null;
                }
            }),
            es(this, 'renderSectionFooter', (e) => {
                let { section: t } = e,
                    { guildChannels: n, guildChannelsVersion: i, voiceStates: r, selectedChannelId: a, selectedVoiceChannelId: o, optInEnabled: s, guildId: c } = this.props;
                return (0, l.jsx)(
                    U.ZP,
                    {
                        guildId: c,
                        guildChannels: n,
                        guildChannelsVersion: i,
                        sectionIndex: t,
                        voiceStates: r,
                        selectedChannelId: a,
                        selectedVoiceChannelId: o,
                        optInEnabled: s
                    },
                    (0, U.eo)(t, n, s)
                );
            }),
            es(this, 'getAnchorId', (e, t) => {
                var n, i, l;
                let { guildChannels: r } = this.props;
                if (e !== L.wZ) {
                    if (null == t) return e === L.p2 ? 'favorites-header' : e === r.recentsSectionNumber ? 'recents-header' : e === r.voiceChannelsSectionNumber ? 'voice-channels' : e === L.wd ? 'uncategorized-header' : null === (l = r.getNamedCategoryFromSection(e)) || void 0 === l ? void 0 : l.id;
                    if (!r.isPlaceholderRow(e, t)) return null === (i = r.getChannelFromSectionRow(e, t)) || void 0 === i ? void 0 : null === (n = i.channel) || void 0 === n ? void 0 : n.id;
                }
            }),
            es(this, 'testShouldSkipTutorial', () => {
                if (!j.Z.shouldShow('voice-conversations')) return;
                let { guildChannels: e } = this.props,
                    t = e.getFirstVoiceChannel();
                if (null == t) {
                    p.Z.dismiss('voice-conversations');
                    return;
                }
                let n = this._list;
                if (null != n) for (let { section: e, row: i } of this.getSectionRowsFromChannel(t.id)) !n.isItemVisible(e, i) && p.Z.dismiss('voice-conversations');
            });
    }
}
es(ed, 'contextType', s.qB);
let eh = (e) => {
    let { guildId: t, selectedChannelId: n, selectedVoiceChannelId: i } = e,
        a = (0, u.e7)([m.Z], () => m.Z.keyboardModeEnabled),
        { analyticsLocations: o } = (0, v.ZP)(g.Z.GUILD_CHANNEL_LIST),
        d = (0, u.e7)([P.Z], () => P.Z.getChannel(n)),
        h = (0, u.e7)([P.Z], () => P.Z.getChannel(i)),
        p = (0, u.e7)([M.Z], () => M.Z.getGuildId()),
        C = (0, N.DM)(t),
        I = r.useRef(null),
        _ = r.useCallback((e, t) => {
            let n = I.current;
            if (null != n) {
                if (el.Xyh.test(t) || (0, er.AB)(t))
                    n.scrollToChannel(t, !1, 2 * ei.yE, () => {
                        requestAnimationFrame(() => {
                            var t;
                            return null === (t = document.querySelector(e)) || void 0 === t ? void 0 : t.focus();
                        });
                    });
                else {
                    var i;
                    null === (i = document.querySelector(e)) || void 0 === i || i.focus();
                }
            }
        }, []),
        Z = r.useCallback(
            () =>
                new Promise((e) => {
                    let t = I.current;
                    if (null == t) return e();
                    t.scrollTo(0, () => requestAnimationFrame(() => e()));
                }),
            []
        ),
        b = r.useCallback(
            () =>
                new Promise((e) => {
                    let t = I.current;
                    if (null == t) return e();
                    t.scrollTo(Number.MAX_SAFE_INTEGER, () => requestAnimationFrame(() => e()));
                }),
            []
        ),
        S = (0, c.ZP)({
            id: 'channels',
            defaultFocused: null != n ? n : void 0,
            isEnabled: a,
            setFocus: _,
            scrollToStart: Z,
            scrollToEnd: b
        }),
        E = S.setFocus;
    r.useEffect(() => {
        null != n && E(n);
    }, [n, E]);
    let j = (0, y.Z)(t),
        T = (0, x.Q3)('NavigableChannels');
    return (0, l.jsx)(v.Gt, {
        value: o,
        children: (0, l.jsx)(f.Z, {
            section: el.jXE.GUILD_CHANNEL_LIST,
            children: (0, l.jsx)(s.bG, {
                navigator: S,
                children: (0, l.jsx)(ed, {
                    ...e,
                    listNavigator: S,
                    ref: I,
                    selectedChannel: d,
                    selectedVoiceChannel: h,
                    stageChannelSpeakerVoiceStates: j,
                    selectedGuildId: p,
                    optInEnabled: C,
                    isRefreshEnabled: T
                })
            })
        })
    });
};
function ep(e) {
    let t = (0, D.o)(),
        { isFavoritesPerk: n } = (0, I.z)('favorites-channel-list'),
        { density: i } = (0, d.useThemeContext)();
    return (0, l.jsx)(eh, {
        ...e,
        guildChannels: t,
        guildChannelsVersion: 0,
        withGuildIcon: n,
        density: i
    });
}
function ef(e) {
    let t = (0, G.Z)(e.guild),
        n = (0, u.cj)([R.Z], () => R.Z.getGuild(e.guildId, { guildActionRows: t })),
        i = (0, x.Q3)('GuildChannelList'),
        { density: r } = (0, d.useThemeContext)();
    return (0, l.jsx)(eh, {
        ...e,
        ...n,
        isRefreshEnabled: i,
        density: r
    });
}
