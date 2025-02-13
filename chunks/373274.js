n.d(t, {
    E: () => eg,
    j: () => em
}),
    n(47120),
    n(653041);
var i,
    l = n(200651),
    r = n(192379),
    o = n(392711),
    a = n.n(o),
    s = n(91192),
    c = n(924826),
    d = n(442837),
    u = n(481060),
    h = n(925549),
    p = n(260300),
    m = n(410575),
    g = n(607070),
    f = n(100527),
    _ = n(906732),
    v = n(313201),
    C = n(540059),
    x = n(362658),
    I = n(583962),
    Z = n(915885),
    b = n(258871),
    S = n(216306),
    N = n(398758),
    E = n(486311),
    j = n(220444),
    y = n(31022),
    T = n(10401),
    A = n(131704),
    P = n(592125),
    R = n(796974),
    w = n(984933),
    L = n(914010),
    M = n(540126),
    D = n(734307),
    G = n(854444),
    k = n(761091),
    B = n(301342),
    O = n(906817),
    U = n(429122),
    V = n(285573),
    F = n(995993),
    H = n(910595),
    z = n(466935),
    W = n(120818),
    q = n(61642),
    Y = n(848442),
    Q = n(53425),
    J = n(424785),
    K = n(770202),
    X = n(79556),
    $ = n(428127),
    ee = n(950969),
    et = n(233657),
    en = n(831700),
    ei = n(443063),
    el = n(327530),
    er = n(981631),
    eo = n(176505),
    ea = n(388032),
    es = n(333265);
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
function ed(e, t) {
    return e ? ('cozy' === t ? 42 : 34) : el.Vf;
}
function eu(e) {
    return e ? 32 : el.Hb;
}
class eh extends (i = r.PureComponent) {
    componentDidMount() {
        this.setState({ initialized: !0 });
    }
    componentWillUnmount() {
        this.updateChannelListScroll.cancel();
    }
    componentDidUpdate(e, t) {
        let { scrollToChannel: n, guildId: i, selectedChannelId: l } = this.props,
            { initialized: r } = this.state,
            { scrollTop: o } = R.Z.getGuildDimensions(i);
        null != n ? (this.scrollToChannel(n), h.Z.clearChannelListScrollTo(i)) : i !== e.guildId ? null != o && this.scrollTo(o) : l !== e.selectedChannelId ? this.scrollToChannel(l) : !t.initialized && r && (null == o && null != l ? this.scrollToChannel(l, !1, el.yE, this.handleListScroll) : this.scrollTo(null != o ? o : 0, this.handleListScroll)), this.testShouldSkipTutorial();
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
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : el.yE,
            i = arguments.length > 3 ? arguments[3] : void 0,
            l = this._list,
            r = this.getSectionRowsFromChannel(e)[0];
        if (null != r && null != l) {
            if (null != r.threadOffset) {
                let [e] = l.getScrollPosition(r.section, r.row),
                    o = r.threadOffset * ed(this.props.isRefreshEnabled, this.props.density);
                l.scrollIntoViewRect({
                    start: e + o,
                    end: e + o + ed(this.props.isRefreshEnabled, this.props.density),
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
                if (i < M.wd || e.isPlaceholderRow(i, l)) return !1;
                let r = e.getChannelFromSectionRow(i, l);
                if (null == r) return !1;
                let { channel: o, category: a } = r;
                return !!(0, A.vc)(o.record.type) && (!a.isCollapsed || !a.isMuted) && !o.isMuted && !!t.isItemVisible(i, l, !0) && (0, j.d)(o.record);
            })
        );
    }
    renderTopUnread() {
        let { topMention: e, bottomUnread: t, bottomMention: n, isUnreadVisible: i } = this.state,
            { guildId: r, guildChannels: o, guildChannelsVersion: a } = this.props;
        return (0, l.jsx)('div', {
            className: es.positionedContainer,
            children: (0, l.jsx)(ee.Z, {
                ref: this.unreadTopRef,
                textUnread: ea.intl.string(ea.t.FCRiT0),
                textMention: ea.intl.string(ea.t['8zH0LC']),
                hide: null == e && (i || null != t || null != n),
                className: es.unreadTop,
                barClassName: es.unreadBar,
                guildId: r,
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
            { bottomMention: i, isUnreadVisible: r } = this.state;
        return (0, l.jsx)(ee.Z, {
            reverse: !0,
            ref: this.unreadBottomRef,
            textUnread: ea.intl.string(ea.t.FCRiT0),
            textMention: ea.intl.string(ea.t['8zH0LC']),
            hide: null == i && r,
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
        let { guildChannels: e, guild: t, guildBanner: n, hasGuildSubheader: i, selectedGuildId: r, isRefreshEnabled: o } = this.props,
            a = {};
        r === er.I_8 && (a['data-favorites'] = !0);
        let { ref: s, ...c } = this.context,
            d = 0;
        return (
            null != n ? (d = o ? el.hl : el.Q0) : t.hasCommunityInfoSubheader() && !i && (d = el.JD),
            (0, l.jsx)(u.Wdt, {
                children: (t) =>
                    (0, l.jsx)(
                        u.aVo,
                        {
                            ref: this.setListRef,
                            className: es.scroller,
                            fade: !0,
                            customTheme: !0,
                            sectionHeight: this.getSectionHeight,
                            footerHeight: this.getSectionFooterHeight,
                            rowHeight: this.getRowHeight,
                            paddingTop: d,
                            paddingBottom: el.$k,
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
                            ...a
                        },
                        'guild-channels'
                    )
            })
        );
    }
    render() {
        let { guildChannels: e, guildChannelsVersion: t, showNewUnreadsBar: n } = this.props;
        return (0, l.jsx)(r.Fragment, {
            children: (0, l.jsx)(v.FG, {
                children: (i) =>
                    (0, l.jsx)(u.y5t, {
                        component: (0, l.jsx)(u.nn4, {
                            children: (0, l.jsx)(u.H, {
                                id: i,
                                children: ea.intl.string(ea.t.OGiMXF)
                            })
                        }),
                        children: n
                            ? (0, l.jsxs)(r.Fragment, {
                                  children: [
                                      (0, l.jsx)('div', {
                                          className: es.positionedContainer,
                                          children: (0, l.jsx)($.Z, {
                                              position: 'top',
                                              guildChannels: e,
                                              guildChannelsVersion: t,
                                              jumpToVoiceChannels: this.jumpToVoiceChannels,
                                              jumpToChannel: this.jumpToChannel
                                          })
                                      }),
                                      this.renderList(),
                                      (0, l.jsx)($.Z, {
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
            ec(this, '_list', null),
            ec(this, 'unreadTopRef', r.createRef()),
            ec(this, 'unreadBottomRef', r.createRef()),
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
                (n.current = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null), (this._list = e);
            }),
            ec(this, 'jumpToVoiceChannels', () => {
                var e, t, n, i;
                let { guildChannels: l, voiceStates: r } = this.props,
                    o = 0,
                    a = null !== (n = null === (e = l.getCategoryFromSection(l.voiceChannelsSectionNumber)) || void 0 === e ? void 0 : e.getShownChannelIds()) && void 0 !== n ? n : [];
                for (let e = 0; e < a.length - 1; e++)
                    if ((null !== (i = r[a[e]]) && void 0 !== i ? i : []).length > 0) {
                        o = e + 1;
                        break;
                    }
                null === (t = this._list) ||
                    void 0 === t ||
                    t.scrollToIndex({
                        section: l.voiceChannelsSectionNumber,
                        row: o,
                        animate: !0,
                        padding: el.yE
                    });
            }),
            ec(this, 'jumpToChannel', (e) => this.scrollToChannel(e, !0, el.Q1)),
            ec(this, 'jumpToChannelWithMentionsAndUnreads', (e, t) => {
                let [n, i] = t;
                return this.scrollToChannel(e, !0, null != n && null != i ? el.Q1 : el.yE);
            }),
            ec(this, 'isChannelVisible', (e, t) => {
                let n = this.getSectionRowsFromChannel(e),
                    i = this._list;
                if (null == i) return !1;
                for (let { row: e, section: l } of n) {
                    let [n, r] = i.getScrollPosition(l, e),
                        o = i.getScrollerState();
                    if ((t && n + r < o.scrollTop + o.offsetHeight) || (!t && n > o.scrollTop)) return !0;
                }
                return !1;
            }),
            ec(this, 'getVisibleChannels', () => {
                let e = this._list;
                if (null == e) return [];
                let t = e.getItems(),
                    n = e.getScrollerState(),
                    i = [];
                for (var l = 0; l < t.length; l++) {
                    let r = t[l];
                    if ((0, u.oZU)(r) && r.section >= this.props.guildChannels.favoritesSectionNumber) {
                        let t = this.props.guildChannels.getChannelFromSectionRow(r.section, r.row),
                            [l, o] = e.getScrollPosition(r.section, r.row);
                        null != t && l + o < n.scrollTop + n.offsetHeight && l > n.scrollTop && i.push(t.channel.id);
                    }
                }
                return i;
            }),
            ec(this, 'handleResize', () => {
                var e, t;
                let { showNewUnreadsBar: n } = this.props,
                    i = null !== (t = null === (e = this._list) || void 0 === e ? void 0 : e.getScrollerState()) && void 0 !== t ? t : null;
                if ((this.setState({ isUnreadVisible: this.isUnreadVisible() }), n && null != i)) {
                    let { scrollTop: e } = i;
                    this.updateChannelListScroll(e);
                }
            }),
            ec(this, 'handleListScroll', () => {
                var e, t;
                let { onScroll: n } = this.props,
                    i = null !== (t = null === (e = this._list) || void 0 === e ? void 0 : e.getScrollerState()) && void 0 !== t ? t : null;
                if (null != i) {
                    let { scrollTop: e } = i;
                    null != n && n(i), this.updateChannelListScroll(e);
                }
                null != this.unreadTopRef.current && this.unreadTopRef.current.calculateState(), null != this.unreadBottomRef.current && this.unreadBottomRef.current.calculateState();
            }),
            ec(this, 'handleUnreadCalculate', (e, t, n) => {
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
            ec(
                this,
                'updateChannelListScroll',
                a().throttle((e) => {
                    h.Z.updateChannelListScroll(this.props.guildId, e, this.getVisibleChannels());
                }, 100)
            ),
            ec(this, 'getSectionHeight', (e) => {
                let { guild: t, guildChannels: n, isRefreshEnabled: i } = this.props;
                return (0, O.EM)(e, t, n, !!i);
            }),
            ec(this, 'getSectionFooterHeight', (e) => {
                let { guildChannels: t, voiceStates: n, selectedVoiceChannelId: i, selectedChannelId: l, optInEnabled: r, guildChannelsVersion: o } = this.props;
                return (0, U.dt)({
                    sectionIndex: e,
                    guildChannels: t,
                    guildChannelsVersion: o,
                    voiceStates: n,
                    selectedChannelId: l,
                    selectedVoiceChannelId: i,
                    optInEnabled: r,
                    visualRefreshEnabled: this.props.isRefreshEnabled,
                    density: this.props.density
                });
            }),
            ec(this, 'getRowHeight', (e, t) => {
                let { guildChannels: n, voiceStates: i, stageChannelSpeakerVoiceStates: l, selectedVoiceChannelId: r, selectedGuildId: o } = this.props,
                    a = ed(this.props.isRefreshEnabled, this.props.density);
                if (e === M.wZ) {
                    let e = n.getGuildActionSection();
                    return e.isEmpty() ? 0 : e.getRow(t) === ei.z.GUILD_PREMIUM_PROGRESS_BAR ? (e.getRows().length > 1 ? I.aR : I.PD) : a;
                }
                if (n.isPlaceholderRow(e, t)) return 0;
                let s = n.getChannelFromSectionRow(e, t);
                if (null == s) return 0;
                let { channel: c, category: d } = s;
                if (c.record.type === er.d4z.GUILD_CATEGORY) return 40;
                let { isFavoritesPerk: u } = x.Z.getCurrentConfig({ location: 'channel_list' }, { autoTrackExposure: !0 });
                for (let e of (u && o === er.I_8 && !c.record.isDM() && !c.record.isGroupDM() && !c.record.isGuildStageVoice() && (a = this.props.isRefreshEnabled ? 46 : el.GQ), c.threadIds)) {
                    a += ed(this.props.isRefreshEnabled, this.props.density);
                    let t = i[c.id];
                    null != t && t.length > 0 && ((a += r === e ? t.length * eu(this.props.isRefreshEnabled) : eu(this.props.isRefreshEnabled)), (a += el.cx));
                }
                if (c.record.isGuildVoice()) {
                    let e = i[c.id];
                    if (null != e && e.length > 0) {
                        let t = e.length * eu(this.props.isRefreshEnabled);
                        (c.isCollapsed || d.isCollapsed) && (t = eu(this.props.isRefreshEnabled)), (a += t + el.cx);
                    }
                    c.id === this.props.rtcConnectedChannelId && (a += this.props.rtcDesyncedVoiceStatesCount * eu(this.props.isRefreshEnabled));
                }
                if ((null != c.subtitle && (a += el.NY), c.record.isGuildStageVoice())) {
                    var h, p;
                    let e = null !== (h = i[c.id]) && void 0 !== h ? h : [],
                        t = null !== (p = l[c.id]) && void 0 !== p ? p : [];
                    if (null != e && e.length > 0) {
                        let e = t.length * eu(this.props.isRefreshEnabled);
                        c.isCollapsed || d.isCollapsed ? (e = Math.ceil(e / el.VE)) : (e += eu(this.props.isRefreshEnabled)), (a += e + el.cx);
                    }
                }
                return a;
            }),
            ec(this, 'dismissRecents', () => {
                let { guild: e, guildChannels: t, selectedChannelId: n } = this.props,
                    i = t.getCategoryFromSection(t.recentsSectionNumber);
                if (null == i) return;
                let l = null,
                    r = i.getShownChannelAndThreadIds();
                null != n && r.includes(n) && (l = (0, S.KY)(t)), (0, S.Uo)(e.id, r, l);
            }),
            ec(this, 'renderSection', (e) => {
                let { section: t } = e,
                    { guildChannels: n, guildChannelsVersion: i, guild: r, selectedChannelId: o, disableManageChannels: a } = this.props;
                return (0, l.jsx)(
                    O.ZP,
                    {
                        sectionIndex: t,
                        guild: r,
                        guildChannels: n,
                        guildChannelsVersion: i,
                        selectedChannelId: o,
                        disableManageChannels: a
                    },
                    (0, O.WW)(t, n)
                );
            }),
            ec(this, 'renderRow', (e) => {
                let { section: t, row: n } = e,
                    { guild: i, selectedChannel: o, selectedChannelId: a, selectedVoiceChannel: s, selectedVoiceChannelId: c, guildChannels: d, voiceStates: u, disableManageChannels: h, stageChannelSpeakerVoiceStates: p, optInEnabled: m, withGuildIcon: g } = this.props;
                if (t === M.wZ) {
                    let e = d.getGuildActionSection(),
                        t = e.getRow(n);
                    if (null == t) return null;
                    switch (t) {
                        case ei.z.GUILD_HUB_HEADER_OPTIONS:
                            return (0, l.jsx)(
                                b.Z,
                                {
                                    guild: i,
                                    channel: w.ZP.getDefaultChannel(i.id)
                                },
                                ei.z.GUILD_HUB_HEADER_OPTIONS
                            );
                        case ei.z.GUILD_PREMIUM_PROGRESS_BAR:
                            let r = e.getRows();
                            return (0, l.jsx)(
                                I.ZP,
                                {
                                    guild: i,
                                    withMargin: r.length > 1
                                },
                                ei.z.GUILD_PREMIUM_PROGRESS_BAR
                            );
                        case ei.z.GUILD_HOME:
                            return (0, l.jsx)(
                                H.Z,
                                {
                                    guild: i,
                                    selected: a === eo.oC.GUILD_HOME
                                },
                                ei.z.GUILD_HOME
                            );
                        case ei.z.GUILD_SCHEDULED_EVENTS:
                            return (0, l.jsx)(
                                et.Z,
                                {
                                    guild: i,
                                    selected: a === ei.z.GUILD_SCHEDULED_EVENTS
                                },
                                ei.z.GUILD_SCHEDULED_EVENTS
                            );
                        case ei.z.GUILD_ROLE_SUBSCRIPTIONS:
                            return (0, l.jsx)(
                                q.Z,
                                {
                                    guild: i,
                                    selected: a === eo.oC.ROLE_SUBSCRIPTIONS
                                },
                                ei.z.GUILD_ROLE_SUBSCRIPTIONS
                            );
                        case ei.z.GUILD_SHOP:
                            return (0, l.jsx)(
                                Y.Z,
                                {
                                    guild: i,
                                    selected: a === eo.oC.GUILD_SHOP
                                },
                                ei.z.GUILD_SHOP
                            );
                        case ei.z.GUILD_MEMBER_APPLICATIONS:
                            return (0, l.jsx)(
                                z.Z,
                                {
                                    guild: i,
                                    selected: a === eo.oC.MEMBER_APPLICATIONS
                                },
                                ei.z.GUILD_MEMBER_APPLICATIONS
                            );
                        case ei.z.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR:
                            return (0, l.jsx)(W.T, { guild: i });
                        case ei.z.CHANNELS_AND_ROLES:
                            return (0, l.jsx)(
                                F.m,
                                {
                                    guild: i,
                                    selected: a === eo.oC.CHANNEL_BROWSER || a === eo.oC.CUSTOMIZE_COMMUNITY
                                },
                                ei.z.CHANNELS_AND_ROLES
                            );
                        case ei.z.GUILD_DIRECTORY:
                            return (0, l.jsx)(
                                V.Z,
                                {
                                    guild: i,
                                    selectedChannelId: a,
                                    disableManageChannels: h
                                },
                                ei.z.GUILD_DIRECTORY
                            );
                        case ei.z.GUILD_MOD_DASH_MEMBER_SAFETY:
                            return (0, l.jsx)(
                                Z.Z,
                                {
                                    guild: i,
                                    selected: a === eo.oC.MEMBER_SAFETY
                                },
                                ei.z.GUILD_MOD_DASH_MEMBER_SAFETY
                            );
                        case ei.z.GUILD_BOOSTS:
                            return (0, l.jsx)(
                                E.Z,
                                {
                                    guild: i,
                                    selected: a === eo.oC.GUILD_BOOSTS
                                },
                                ei.z.GUILD_BOOSTS
                            );
                        default:
                            return null;
                    }
                }
                if (d.isPlaceholderRow(t, n)) return null;
                let f = d.getChannelFromSectionRow(t, n);
                if (null == f) return null;
                let { category: _, channel: v } = f,
                    C = _ instanceof M.VR,
                    x = v.record,
                    S = ''.concat(t).concat(v.id);
                switch (x.type) {
                    case er.d4z.GUILD_ANNOUNCEMENT:
                    case er.d4z.GUILD_TEXT:
                    case er.d4z.GUILD_FORUM:
                    case er.d4z.GUILD_MEDIA:
                    case er.d4z.DM:
                    case er.d4z.GROUP_DM:
                        return (0, l.jsxs)(
                            r.Fragment,
                            {
                                children: [
                                    (0, l.jsx)(X.Z, {
                                        channel: x,
                                        guild: i,
                                        position: v.position,
                                        selected: a === v.id,
                                        muted: v.isMuted,
                                        subtitle: v.subtitle,
                                        disableManageChannels: h,
                                        canBeNewChannel: m && t === d.recentsSectionNumber,
                                        isFavoriteCategory: C,
                                        withGuildIcon: g
                                    }),
                                    v.threadCount > 0
                                        ? (0, l.jsx)(Q.Z, {
                                              withGuildIcon: g,
                                              channel: x,
                                              sortedThreadIds: v.threadIds,
                                              selectedChannel: null != o && (o.id === v.id || o.parent_id === x.id) ? o : null,
                                              selectedVoiceChannelId: (null == s ? void 0 : s.parent_id) === x.id ? c : null
                                          })
                                        : null
                                ]
                            },
                            S
                        );
                    case er.d4z.GUILD_STAGE_VOICE:
                        var N, j;
                        return (0, l.jsx)(
                            J.Z,
                            {
                                channel: x,
                                guild: i,
                                position: v.position,
                                selected: a === v.id,
                                connected: c === v.id,
                                collapsed: v.isCollapsed || _.isCollapsed,
                                voiceStates: null !== (N = u[v.id]) && void 0 !== N ? N : [],
                                speakerVoiceStates: null !== (j = p[v.id]) && void 0 !== j ? j : [],
                                disableManageChannels: h,
                                isFavoriteCategory: C
                            },
                            S
                        );
                    case er.d4z.GUILD_VOICE:
                        return (0, l.jsx)(
                            en.Z,
                            {
                                channel: x,
                                guild: i,
                                position: v.position,
                                selected: a === v.id,
                                connected: c === v.id,
                                collapsed: v.isCollapsed || _.isCollapsed,
                                voiceStates: u[v.id],
                                subtitle: v.subtitle,
                                disableManageChannels: h,
                                showTutorial: v.isFirstVoiceChannel,
                                isFavoriteCategory: C,
                                withGuildIcon: g
                            },
                            S
                        );
                    case er.d4z.GUILD_STORE:
                        return (0, l.jsx)(
                            K.Z,
                            {
                                channel: x,
                                guild: i,
                                position: v.position,
                                selected: a === v.id
                            },
                            S
                        );
                    case er.d4z.GUILD_CATEGORY:
                        if (t !== d.voiceChannelsSectionNumber) return null;
                        return (0, l.jsx)(B.kw, { channel: x }, 'readonly-'.concat(x.id));
                    case er.d4z.PUBLIC_THREAD:
                    case er.d4z.PRIVATE_THREAD:
                        return (0, l.jsx)(
                            X.Z,
                            {
                                channel: x,
                                guild: i,
                                position: v.position,
                                selected: a === v.id,
                                muted: v.isMuted,
                                subtitle: v.subtitle,
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
            ec(this, 'renderSectionFooter', (e) => {
                let { section: t } = e,
                    { guildChannels: n, guildChannelsVersion: i, voiceStates: r, selectedChannelId: o, selectedVoiceChannelId: a, optInEnabled: s, guildId: c } = this.props;
                return (0, l.jsx)(
                    U.ZP,
                    {
                        guildId: c,
                        guildChannels: n,
                        guildChannelsVersion: i,
                        sectionIndex: t,
                        voiceStates: r,
                        selectedChannelId: o,
                        selectedVoiceChannelId: a,
                        optInEnabled: s
                    },
                    (0, U.eo)(t, n, s)
                );
            }),
            ec(this, 'getAnchorId', (e, t) => {
                var n, i, l;
                let { guildChannels: r } = this.props;
                if (e !== M.wZ) {
                    if (null == t) return e === M.p2 ? 'favorites-header' : e === r.recentsSectionNumber ? 'recents-header' : e === r.voiceChannelsSectionNumber ? 'voice-channels' : e === M.wd ? 'uncategorized-header' : null === (l = r.getNamedCategoryFromSection(e)) || void 0 === l ? void 0 : l.id;
                    if (!r.isPlaceholderRow(e, t)) return null === (i = r.getChannelFromSectionRow(e, t)) || void 0 === i ? void 0 : null === (n = i.channel) || void 0 === n ? void 0 : n.id;
                }
            }),
            ec(this, 'testShouldSkipTutorial', () => {
                if (!T.Z.shouldShow('voice-conversations')) return;
                let { guildChannels: e } = this.props,
                    t = e.getFirstVoiceChannel();
                if (null == t) {
                    p.Z.dismiss('voice-conversations');
                    return;
                }
                let n = this._list;
                if (null != n) for (let { section: e, row: i } of this.getSectionRowsFromChannel(t.id)) n.isItemVisible(e, i) || p.Z.dismiss('voice-conversations');
            });
    }
}
ec(eh, 'contextType', s.qB);
let ep = (e) => {
    let { guildId: t, selectedChannelId: n, selectedVoiceChannelId: i } = e,
        o = (0, d.e7)([g.Z], () => g.Z.keyboardModeEnabled),
        { analyticsLocations: a } = (0, _.ZP)(f.Z.GUILD_CHANNEL_LIST),
        u = (0, d.e7)([P.Z], () => P.Z.getChannel(n)),
        h = (0, d.e7)([P.Z], () => P.Z.getChannel(i)),
        p = (0, d.e7)([L.Z], () => L.Z.getGuildId()),
        v = (0, N.DM)(t),
        x = r.useRef(null),
        I = r.useCallback((e, t) => {
            let n = x.current;
            if (null != n) {
                if (er.Xyh.test(t) || (0, eo.AB)(t))
                    n.scrollToChannel(t, !1, 2 * el.yE, () => {
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
                    let t = x.current;
                    if (null == t) return e();
                    t.scrollTo(0, () => requestAnimationFrame(() => e()));
                }),
            []
        ),
        b = r.useCallback(
            () =>
                new Promise((e) => {
                    let t = x.current;
                    if (null == t) return e();
                    t.scrollTo(Number.MAX_SAFE_INTEGER, () => requestAnimationFrame(() => e()));
                }),
            []
        ),
        S = (0, c.ZP)({
            id: 'channels',
            defaultFocused: null != n ? n : void 0,
            isEnabled: o,
            setFocus: I,
            scrollToStart: Z,
            scrollToEnd: b
        }),
        E = S.setFocus;
    r.useEffect(() => {
        null != n && E(n);
    }, [n, E]);
    let j = (0, y.Z)(t),
        T = (0, C.Q3)('NavigableChannels');
    return (0, l.jsx)(_.Gt, {
        value: a,
        children: (0, l.jsx)(m.Z, {
            section: er.jXE.GUILD_CHANNEL_LIST,
            children: (0, l.jsx)(s.bG, {
                navigator: S,
                children: (0, l.jsx)(eh, {
                    ...e,
                    listNavigator: S,
                    ref: x,
                    selectedChannel: u,
                    selectedVoiceChannel: h,
                    stageChannelSpeakerVoiceStates: j,
                    selectedGuildId: p,
                    optInEnabled: v,
                    isRefreshEnabled: T
                })
            })
        })
    });
};
function em(e) {
    let t = (0, G.o)(),
        { isFavoritesPerk: n } = (0, x.z)('favorites-channel-list'),
        { density: i } = (0, u.TCT)();
    return (0, l.jsx)(ep, {
        ...e,
        guildChannels: t,
        guildChannelsVersion: 0,
        withGuildIcon: n,
        density: i
    });
}
function eg(e) {
    let t = (0, k.Z)(e.guild),
        n = (0, d.cj)([D.Z], () => D.Z.getGuild(e.guildId, { guildActionRows: t })),
        i = (0, C.Q3)('GuildChannelList'),
        { density: r } = (0, u.TCT)();
    return (0, l.jsx)(ep, {
        ...e,
        ...n,
        isRefreshEnabled: i,
        density: r
    });
}
