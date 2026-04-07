n.d(t, { B: () => ex, T: () => ef }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(735438),
    a = n(837381),
    r = n(884362),
    o = n(311907),
    d = n(397927),
    c = n(951001),
    u = n(820284),
    h = n(775602),
    A = n(793574),
    _ = n(688810),
    m = n(309698),
    g = n(915089),
    p = n(5180),
    f = n(227004),
    x = n(581007),
    E = n(522435),
    I = n(781862),
    C = n(582904),
    N = n(637248),
    T = n(395504),
    S = n(947461),
    b = n(770904),
    y = n(357746),
    v = n(816288),
    j = n(455234),
    R = n(649247),
    O = n(787541),
    L = n(482361),
    M = n(591346),
    D = n(769022),
    U = n(95701),
    G = n(734057),
    P = n(72314),
    k = n(808728),
    w = n(967198),
    B = n(32603),
    V = n(960755),
    H = n(866842),
    F = n(633965),
    K = n(33324),
    W = n(823142),
    Y = n(884452),
    z = n(137089),
    q = n(506792),
    X = n(724591),
    J = n(573956),
    Q = n(141515),
    $ = n(463938),
    Z = n(779881),
    ee = n(998986),
    et = n(732077),
    en = n(689025),
    ei = n(698126),
    el = n(889806),
    es = n(923432),
    ea = n(815213),
    er = n(530484),
    eo = n(422361),
    ed = n(281405);
n(83766);
var ec = n(652215),
    eu = n(746080);
n(131955);
var eh = n(985018),
    eA = n(665606),
    e_ = n(116648);
function em(e) {
    return (
        d.LU0.modules.channels.NAME_LINE_HEIGHT.resolve({ density: e }) +
        2 * d.LU0.space.SPACE_XXS.resolve({ density: e }) +
        2
    );
}
class eg extends l.PureComponent {
    static contextType = a.nC;
    _list = null;
    unreadTopRef = l.createRef();
    unreadBottomRef = l.createRef();
    static defaultProps = { density: "default" };
    state = {
        initialized: !1,
        isUnreadVisible: !0,
        topUnread: null,
        topMention: null,
        bottomUnread: null,
        bottomMention: null,
    };
    componentDidMount() {
        this.setState({ initialized: !0 }), (0, F.Ei)(this.getVisibleChannels);
    }
    componentWillUnmount() {
        this.updateChannelListScroll.cancel();
    }
    componentDidUpdate(e, t) {
        let { scrollToChannel: n, guildId: i, selectedChannelId: l } = this.props,
            { initialized: s } = this.state,
            { scrollTop: a } = P.A.getGuildDimensions(i);
        null != n
            ? (this.scrollToChannel(n), c.A.clearChannelListScrollTo(i))
            : i !== e.guildId
              ? null != a && this.scrollTo(a)
              : l !== e.selectedChannelId
                ? this.scrollToChannel(l)
                : !t.initialized &&
                  s &&
                  (null == a && null != l
                      ? this.scrollToChannel(l, !1, 8, this.handleListScroll)
                      : this.scrollTo(a ?? 0, this.handleListScroll)),
            this.testShouldSkipTutorial();
    }
    getSectionRowsFromChannel(e) {
        return this.props.guildChannels.getSectionRowsFromChannel(e);
    }
    setListRef = (e) => {
        let { ref: t } = this.context;
        (t.current = e?.getScrollerNode() ?? null), (this._list = e);
    };
    scrollTo(e, t) {
        this._list?.scrollTo({ to: e, animate: !1, callback: t });
    }
    scrollToChannel(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 8,
            i = arguments.length > 3 ? arguments[3] : void 0,
            l = this._list,
            s = this.getSectionRowsFromChannel(e)[0];
        if (null != s && null != l)
            if (null != s.threadOffset) {
                let [e] = l.getScrollPosition(s.section, s.row),
                    { density: a = "default" } = this.props,
                    r = s.threadOffset * em(a);
                l.scrollIntoViewRect({ start: e + r, end: e + r + em(a), padding: n, animate: t, callback: i });
            } else l.scrollToIndex({ section: s.section, row: s.row, animate: t, padding: n, callback: i });
        else i?.();
    }
    jumpToVoiceChannels = () => {
        let { guildChannels: e, voiceStates: t } = this.props,
            n = 0,
            i = e.getCategoryFromSection(e.voiceChannelsSectionNumber)?.getShownChannelIds() ?? [];
        for (let e = 0; e < i.length - 1; e++)
            if ((t[i[e]] ?? []).length > 0) {
                n = e + 1;
                break;
            }
        this._list?.scrollToIndex({ section: e.voiceChannelsSectionNumber, row: n, animate: !0, padding: 8 });
    };
    jumpToChannel = (e) => this.scrollToChannel(e, !0, 32);
    jumpToChannelWithMentionsAndUnreads = (e, t) => {
        let [n, i] = t;
        return this.scrollToChannel(e, !0, null != n && null != i ? 32 : 8);
    };
    isChannelVisible = (e, t) => {
        let n = this.getSectionRowsFromChannel(e),
            i = this._list;
        if (null == i) return !1;
        for (let { row: e, section: l } of n) {
            let [n, s] = i.getScrollPosition(l, e),
                a = i.getScrollerState();
            if ((t && n + s < a.scrollTop + a.offsetHeight) || (!t && n > a.scrollTop)) return !0;
        }
        return !1;
    };
    getVisibleChannels = () => {
        let e = this._list;
        if (null == e) return [];
        let t = e.getItems(),
            n = e.getScrollerState(),
            i = [];
        for (var l = 0; l < t.length; l++) {
            let s = t[l];
            if ((0, d.ogc)(s) && s.section >= this.props.guildChannels.favoritesSectionNumber) {
                let t = this.props.guildChannels.getChannelFromSectionRow(s.section, s.row),
                    [l, a] = e.getScrollPosition(s.section, s.row);
                null != t && l + a < n.scrollTop + n.offsetHeight && l > n.scrollTop && i.push(t.channel.id);
            }
        }
        return i;
    };
    handleResize = () => {
        let { showNewUnreadsBar: e } = this.props,
            t = this._list?.getScrollerState() ?? null;
        if ((this.setState({ isUnreadVisible: this.isUnreadVisible() }), e && null != t)) {
            let { scrollTop: e } = t;
            this.updateChannelListScroll(e);
        }
    };
    handleListScroll = () => {
        let { onScroll: e } = this.props,
            t = this._list?.getScrollerState() ?? null;
        if (null != t) {
            let { scrollTop: n } = t;
            null != e && e(t), this.updateChannelListScroll(n);
        }
        null != this.unreadTopRef.current && this.unreadTopRef.current.calculateState(),
            null != this.unreadBottomRef.current && this.unreadBottomRef.current.calculateState();
    };
    handleUnreadCalculate = (e, t, n) => {
        let i = this.isUnreadVisible();
        n
            ? this.setState({ isUnreadVisible: i, bottomUnread: t, bottomMention: e })
            : this.setState({ isUnreadVisible: i, topUnread: t, topMention: e });
    };
    isUnreadVisible() {
        let { guildChannels: e } = this.props,
            t = this._list;
        return (
            null != t &&
            t.getItems().some((n) => {
                if ("row" !== n.type) return !1;
                let { section: i, row: l } = n;
                if (i < B.bK || e.isPlaceholderRow(i, l)) return !1;
                let s = e.getChannelFromSectionRow(i, l);
                if (null == s) return !1;
                let { channel: a, category: r } = s;
                return (
                    !!(0, U.ig)(a.record.type) &&
                    (!r.isCollapsed || !r.isMuted) &&
                    !a.isMuted &&
                    !!t.isItemVisible(i, l, !0) &&
                    (0, j.Y)(a.record)
                );
            })
        );
    }
    updateChannelListScroll = (0, s.throttle)((e) => {
        c.A.updateChannelListScroll(this.props.guildId, e, this.getVisibleChannels());
    }, 100);
    getSectionHeight = (e) => {
        let { guild: t, guildChannels: n, density: i } = this.props;
        return (0, Y.sc)(e, t, n, i);
    };
    getSectionFooterHeight = (e) => {
        let {
            guildChannels: t,
            voiceStates: n,
            selectedVoiceChannelId: i,
            selectedChannelId: l,
            optInEnabled: s,
            guildChannelsVersion: a,
        } = this.props;
        return (0, z.fz)({
            sectionIndex: e,
            guildChannels: t,
            guildChannelsVersion: a,
            voiceStates: n,
            selectedChannelId: l,
            selectedVoiceChannelId: i,
            optInEnabled: s,
            density: this.props.density,
        });
    };
    getRowHeight = (e, t) => {
        let {
                guildChannels: n,
                voiceStates: i,
                stageChannelSpeakerVoiceStates: l,
                selectedVoiceChannelId: s,
                density: a = "default",
            } = this.props,
            r = em(a);
        if (e === B.PU) {
            let e = n.getGuildActionSection();
            return e.isEmpty()
                ? 0
                : e.getRow(t) === ed.n.GUILD_PREMIUM_PROGRESS_BAR
                  ? e.getRows().length > 1
                      ? 69
                      : 57
                  : r;
        }
        if (n.isPlaceholderRow(e, t)) return 0;
        let o = n.getChannelFromSectionRow(e, t);
        if (null == o) return 0;
        let { channel: c, category: u } = o;
        if (c.record.type === ec.rbe.GUILD_CATEGORY) return 40;
        for (let e of c.threadIds) {
            let { density: t = "default" } = this.props;
            r += em(t);
            let n = i[c.id];
            null != n && n.length > 0 && (r += s === e ? 32 * n.length : 32);
        }
        if (c.record.isGuildVoice()) {
            let e = i[c.id];
            if (null != e && e.length > 0) {
                let t = 32 * e.length;
                c.isCollapsed || u.isCollapsed ? (t = 32) : (0, C.Ln)(c.record) && (t += 32),
                    (r += t + d.LU0.space.SPACE_XS.resolve({ density: a }));
                let { enableHangoutWindow: n } = (0, x.kY)({ guildId: c.record.guild_id, location: "ChannelList" });
                if (n) {
                    let e = m.A.getChannelStatus(c.record);
                    (0, E.TP)(e) ? (r += 134) : s === c.id && (r += 44);
                }
            }
            if (
                (c.id === this.props.rtcConnectedChannelId && (r += 32 * this.props.rtcDesyncedVoiceStatesCount),
                !c.isCollapsed && !u.isCollapsed)
            ) {
                let { enableHistoryHover: e } = (0, M.NH)({ guildId: c.record.guild_id, location: "ChannelList" });
                e && null != D.A.getLastLeftUserId(c.id) && (r += 32);
            }
        }
        if (((null != c.subtitle || s === c.id) && (r += 16), c.record.isGuildStageVoice())) {
            let e = i[c.id] ?? [],
                t = l[c.id] ?? [];
            if (null != e && e.length > 0) {
                let e = 32 * t.length;
                c.isCollapsed || u.isCollapsed ? (e = Math.ceil(e / 5)) : (e += 32), (r += e + 8);
            }
        }
        return r;
    };
    dismissRecents = () => {
        let { guild: e, guildChannels: t, selectedChannelId: n } = this.props,
            i = t.getCategoryFromSection(t.recentsSectionNumber);
        if (null == i) return;
        let l = null,
            s = i.getShownChannelAndThreadIds();
        null != n && s.includes(n) && (l = (0, N.xb)(t)), (0, N.DD)(e.id, s, l);
    };
    renderSection = (e) => {
        let { section: t } = e,
            {
                guildChannels: n,
                guildChannelsVersion: l,
                guild: s,
                selectedChannelId: a,
                disableManageChannels: r,
            } = this.props;
        return (0, i.jsx)(
            Y.Ay,
            {
                sectionIndex: t,
                guild: s,
                guildChannels: n,
                guildChannelsVersion: l,
                selectedChannelId: a,
                disableManageChannels: r,
            },
            (0, Y.is)(t, n),
        );
    };
    renderRow = (e) => {
        let { section: t, row: n } = e,
            {
                guild: s,
                selectedChannel: a,
                selectedChannelId: r,
                selectedVoiceChannel: o,
                selectedVoiceChannelId: d,
                guildChannels: c,
                voiceStates: u,
                disableManageChannels: h,
                stageChannelSpeakerVoiceStates: A,
                optInEnabled: _,
                withGuildIcon: m,
            } = this.props;
        if (t === B.PU) {
            let e = c.getGuildActionSection(),
                t = e.getRow(n);
            if (null == t) return null;
            switch (t) {
                case ed.n.GUILD_HUB_HEADER_OPTIONS:
                    return (0, i.jsx)(
                        I.A,
                        { guild: s, channel: k.Ay.getDefaultChannel(s.id) },
                        ed.n.GUILD_HUB_HEADER_OPTIONS,
                    );
                case ed.n.GUILD_PREMIUM_PROGRESS_BAR:
                    let l = e.getRows();
                    return (0, i.jsx)(v.A, { guild: s, withMargin: l.length > 1 }, ed.n.GUILD_PREMIUM_PROGRESS_BAR);
                case ed.n.GUILD_HOME:
                    return (0, i.jsx)(Q.A, { guild: s, selected: r === eu.VV.GUILD_HOME }, ed.n.GUILD_HOME);
                case ed.n.GUILD_SCHEDULED_EVENTS:
                    return (0, i.jsx)(
                        er.A,
                        { guild: s, selected: r === ed.n.GUILD_SCHEDULED_EVENTS },
                        ed.n.GUILD_SCHEDULED_EVENTS,
                    );
                case ed.n.GUILD_ROLE_SUBSCRIPTIONS:
                    return (0, i.jsx)(
                        Z.A,
                        { guild: s, selected: r === eu.VV.ROLE_SUBSCRIPTIONS },
                        ed.n.GUILD_ROLE_SUBSCRIPTIONS,
                    );
                case ed.n.GUILD_SHOP:
                    return (0, i.jsx)(ee.A, { guild: s, selected: r === eu.VV.GUILD_SHOP }, ed.n.GUILD_SHOP);
                case ed.n.GUILD_GAME_SHOP:
                    return (0, i.jsx)(X.A, { guild: s, selected: r === eu.VV.GAME_SHOP }, ed.n.GUILD_GAME_SHOP);
                case ed.n.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR:
                    return (0, i.jsx)($.j, { guild: s });
                case ed.n.CHANNELS_AND_ROLES:
                    return (0, i.jsx)(
                        J.G,
                        { guild: s, selected: r === eu.VV.CHANNEL_BROWSER || r === eu.VV.CUSTOMIZE_COMMUNITY },
                        ed.n.CHANNELS_AND_ROLES,
                    );
                case ed.n.GUILD_DIRECTORY:
                    return (0, i.jsx)(
                        q.A,
                        { guild: s, selectedChannelId: r, disableManageChannels: h },
                        ed.n.GUILD_DIRECTORY,
                    );
                case ed.n.GUILD_MOD_DASH_MEMBER_SAFETY:
                    return (0, i.jsx)(
                        f.A,
                        { guild: s, selected: r === eu.VV.MEMBER_SAFETY },
                        ed.n.GUILD_MOD_DASH_MEMBER_SAFETY,
                    );
                case ed.n.GUILD_BOOSTS:
                    return (0, i.jsx)(y.A, { guildId: s.id, selected: r === eu.VV.GUILD_BOOSTS }, ed.n.GUILD_BOOSTS);
                case ed.n.GAME_SERVERS:
                    return (0, i.jsx)(b.A, { guildId: s.id, selected: r === eu.VV.GAME_SERVERS }, ed.n.GAME_SERVERS);
                case ed.n.GAME_SERVERS_EMPTY:
                    return (0, i.jsx)(
                        S.A,
                        { guildId: s.id, selected: r === eu.VV.GAME_SERVERS },
                        ed.n.GAME_SERVERS_EMPTY,
                    );
                default:
                    return null;
            }
        }
        if (c.isPlaceholderRow(t, n)) return null;
        let g = c.getChannelFromSectionRow(t, n);
        if (null == g) return null;
        let { category: p, channel: x } = g,
            E = p instanceof B.xu,
            C = x.record,
            N = `${t}${x.id}`;
        switch (C.type) {
            case ec.rbe.GUILD_ANNOUNCEMENT:
            case ec.rbe.GUILD_TEXT:
            case ec.rbe.GUILD_FORUM:
            case ec.rbe.GUILD_MEDIA:
            case ec.rbe.DM:
            case ec.rbe.GROUP_DM:
                return (0, i.jsxs)(
                    l.Fragment,
                    {
                        children: [
                            (0, i.jsx)(el.A, {
                                channel: C,
                                guild: s,
                                position: x.position,
                                selected: r === x.id,
                                muted: x.isMuted,
                                subtitle: x.subtitle,
                                disableManageChannels: h,
                                canBeNewChannel: _ && t === c.recentsSectionNumber,
                                isFavoriteCategory: E,
                                isSuggestedSection: t === c.recentsSectionNumber,
                            }),
                            x.threadCount > 0
                                ? (0, i.jsx)(et.A, {
                                      withGuildIcon: m,
                                      channel: C,
                                      sortedThreadIds: x.threadIds,
                                      selectedChannel: null != a && (a.id === x.id || a.parent_id === C.id) ? a : null,
                                      selectedVoiceChannelId: o?.parent_id === C.id ? d : null,
                                  })
                                : null,
                        ],
                    },
                    N,
                );
            case ec.rbe.GUILD_STAGE_VOICE:
                return (0, i.jsx)(
                    en.A,
                    {
                        channel: C,
                        guild: s,
                        position: x.position,
                        selected: r === x.id,
                        connected: d === x.id,
                        collapsed: x.isCollapsed || p.isCollapsed,
                        voiceStates: u[x.id] ?? [],
                        speakerVoiceStates: A[x.id] ?? [],
                        disableManageChannels: h,
                        isFavoriteCategory: E,
                        isSuggestedSection: t === c.recentsSectionNumber,
                    },
                    N,
                );
            case ec.rbe.GUILD_VOICE:
                return (0, i.jsx)(
                    eo.A,
                    {
                        channel: C,
                        guild: s,
                        position: x.position,
                        selected: r === x.id,
                        connected: d === x.id,
                        collapsed: x.isCollapsed || p.isCollapsed,
                        voiceStates: u[x.id],
                        subtitle: x.subtitle,
                        disableManageChannels: h,
                        showTutorial: x.isFirstVoiceChannel,
                        isFavoriteCategory: E,
                        withGuildIcon: m,
                        isSuggestedSection: t === c.recentsSectionNumber,
                    },
                    N,
                );
            case ec.rbe.GUILD_STORE:
                return (0, i.jsx)(ei.A, { channel: C, guild: s, position: x.position, selected: r === x.id }, N);
            case ec.rbe.GUILD_CATEGORY:
                if (t !== c.voiceChannelsSectionNumber) return null;
                return (0, i.jsx)(W.sM, { channel: C }, `readonly-${C.id}`);
            case ec.rbe.PUBLIC_THREAD:
            case ec.rbe.PRIVATE_THREAD:
            case ec.rbe.ANNOUNCEMENT_THREAD:
                return (0, i.jsx)(
                    el.A,
                    {
                        channel: C,
                        guild: s,
                        position: x.position,
                        selected: r === x.id,
                        muted: x.isMuted,
                        subtitle: x.subtitle,
                        disableManageChannels: h,
                        canBeNewChannel: !1,
                        isFavoriteCategory: !1,
                        forceTopLevelThread: !0,
                    },
                    N,
                );
            default:
                return null;
        }
    };
    renderSectionFooter = (e) => {
        let { section: t } = e,
            {
                guildChannels: n,
                guildChannelsVersion: l,
                voiceStates: s,
                selectedChannelId: a,
                selectedVoiceChannelId: r,
                optInEnabled: o,
                guildId: d,
            } = this.props;
        return (0, i.jsx)(
            z.Ay,
            {
                guildId: d,
                guildChannels: n,
                guildChannelsVersion: l,
                sectionIndex: t,
                voiceStates: s,
                selectedChannelId: a,
                selectedVoiceChannelId: r,
                optInEnabled: o,
            },
            (0, z.tt)(t, n, o),
        );
    };
    renderTopUnread() {
        let { topMention: e, bottomUnread: t, bottomMention: n, isUnreadVisible: l } = this.state,
            { guildId: s, guildChannels: a, guildChannelsVersion: r } = this.props;
        return (0, i.jsx)("div", {
            className: e_.Eo,
            children: (0, i.jsx)(ea.A, {
                ref: this.unreadTopRef,
                textUnread: eh.intl.string(eh.t.FCRiT3),
                textMention: eh.intl.string(eh.t["8zH0LJ"]),
                hide: null == e && (l || null != t || null != n),
                className: e_.Vq,
                barClassName: e_.bu,
                guildId: s,
                guildChannels: a,
                guildChannelsVersion: r,
                isVisible: this.isChannelVisible,
                onJumpTo: this.jumpToChannelWithMentionsAndUnreads,
                onCalculate: this.handleUnreadCalculate,
            }),
        });
    }
    renderBottomUnread() {
        let { guildId: e, guildChannels: t, guildChannelsVersion: n } = this.props,
            { bottomMention: l, isUnreadVisible: s } = this.state;
        return (0, i.jsx)(ea.A, {
            reverse: !0,
            ref: this.unreadBottomRef,
            textUnread: eh.intl.string(eh.t.FCRiT3),
            textMention: eh.intl.string(eh.t["8zH0LJ"]),
            hide: null == l && s,
            className: e_.di,
            barClassName: e_.bu,
            guildId: e,
            guildChannels: t,
            guildChannelsVersion: n,
            isVisible: this.isChannelVisible,
            onJumpTo: this.jumpToChannelWithMentionsAndUnreads,
            onCalculate: this.handleUnreadCalculate,
        });
    }
    getAnchorId = (e, t) => {
        let { guildChannels: n } = this.props;
        if (e !== B.PU) {
            if (null == t)
                return e === B.HP
                    ? "favorites-header"
                    : e === n.recentsSectionNumber
                      ? "recents-header"
                      : e === n.voiceChannelsSectionNumber
                        ? "voice-channels"
                        : e === B.bK
                          ? "uncategorized-header"
                          : n.getNamedCategoryFromSection(e)?.id;
            if (!n.isPlaceholderRow(e, t)) return n.getChannelFromSectionRow(e, t)?.channel?.id;
        }
    };
    renderList() {
        let { guildChannels: e, guildBanner: t, selectedGuildId: n, density: l } = this.props,
            s = {};
        (0, p.ai)(n) && (s["data-favorites"] = !0);
        let { ref: a, ...r } = this.context,
            o = 0;
        null != t && (o = 84);
        let c = "compact" === l ? 8 : 12;
        return (0, i.jsx)(d.skg, {
            children: (t) =>
                (0, i.jsx)(
                    d.B8B,
                    {
                        ref: this.setListRef,
                        className: e_.XG,
                        fade: !0,
                        sectionHeight: this.getSectionHeight,
                        footerHeight: this.getSectionFooterHeight,
                        rowHeight: this.getRowHeight,
                        paddingTop: o,
                        paddingBottom: c,
                        renderSection: this.renderSection,
                        renderFooter: this.renderSectionFooter,
                        renderRow: this.renderRow,
                        onScroll: this.handleListScroll,
                        onResize: this.handleResize,
                        onContentResize: this.handleResize,
                        sections: e.getSections(!0),
                        innerAriaLabel: eh.intl.string(eh.t.OGiMXJ),
                        innerTag: "ul",
                        getAnchorId: this.getAnchorId,
                        ...r,
                        ...t,
                        ...s,
                    },
                    "guild-channels",
                ),
        });
    }
    testShouldSkipTutorial = () => {
        if (!L.A.shouldShow("voice-conversations")) return;
        let { guildChannels: e } = this.props,
            t = e.getFirstVoiceChannel();
        if (null == t) return void O.X8("voice-conversations");
        let n = this._list;
        if (null != n)
            for (let { section: e, row: i } of this.getSectionRowsFromChannel(t.id))
                n.isItemVisible(e, i) || O.X8("voice-conversations");
    };
    render() {
        let { guildChannels: e, guildChannelsVersion: t, showNewUnreadsBar: n } = this.props;
        return (0, i.jsx)(g.V0, {
            children: (s) =>
                (0, i.jsx)(d.Fmo, {
                    component: (0, i.jsx)(d.AC4, {
                        children: (0, i.jsx)(d.H, { id: s, children: eh.intl.string(eh.t.OGiMXJ) }),
                    }),
                    children: n
                        ? (0, i.jsxs)(l.Fragment, {
                              children: [
                                  (0, i.jsx)("div", {
                                      className: e_.Eo,
                                      children: (0, i.jsx)(es.A, {
                                          position: "top",
                                          guildChannels: e,
                                          guildChannelsVersion: t,
                                          jumpToVoiceChannels: this.jumpToVoiceChannels,
                                          jumpToChannel: this.jumpToChannel,
                                      }),
                                  }),
                                  this.renderList(),
                                  (0, i.jsx)(es.A, {
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
}
let ep = (e) => {
    let { guildId: t, selectedChannelId: n, selectedVoiceChannelId: s } = e,
        d = (0, o.bG)([h.A], () => h.A.keyboardModeEnabled),
        { analyticsLocations: c } = (0, _.Ay)(A.A.GUILD_CHANNEL_LIST),
        m = (0, o.bG)([G.A], () => G.A.getChannel(n)),
        g = (0, o.bG)([G.A], () => G.A.getChannel(s)),
        p = (0, o.bG)([w.A], () => w.A.getGuildId()),
        f = (0, T.jN)(t),
        x = l.useRef(null),
        E = l.useCallback((e, t) => {
            let n = x.current;
            null != n &&
                (ec.Ut1.test(t) || (0, eu.jq)(t)
                    ? n.scrollToChannel(t, !1, 16, () => {
                          requestAnimationFrame(() => document.querySelector(e)?.focus());
                      })
                    : document.querySelector(e)?.focus());
        }, []),
        I = l.useCallback(
            () =>
                new Promise((e) => {
                    let t = x.current;
                    if (null == t) return e();
                    t.scrollTo(0, () => requestAnimationFrame(() => e()));
                }),
            [],
        ),
        C = l.useCallback(
            () =>
                new Promise((e) => {
                    let t = x.current;
                    if (null == t) return e();
                    t.scrollTo(Number.MAX_SAFE_INTEGER, () => requestAnimationFrame(() => e()));
                }),
            [],
        ),
        N = (0, r.Ay)({
            id: "channels",
            defaultFocused: n ?? void 0,
            isEnabled: d,
            setFocus: E,
            scrollToStart: I,
            scrollToEnd: C,
        }),
        S = N.setFocus;
    l.useEffect(() => {
        null != n && S(n);
    }, [n, S]);
    let b = (0, R.A)(t);
    return (0, i.jsx)(_.f5, {
        value: c,
        children: (0, i.jsx)(u.A, {
            section: ec.JJy.GUILD_CHANNEL_LIST,
            children: (0, i.jsx)(a.hD, {
                navigator: N,
                children: (0, i.jsx)(eg, {
                    ...e,
                    listNavigator: N,
                    ref: x,
                    selectedChannel: m,
                    selectedVoiceChannel: g,
                    stageChannelSpeakerVoiceStates: b,
                    selectedGuildId: p,
                    optInEnabled: f,
                }),
            }),
        }),
    });
};
function ef(e) {
    let { guildChannels: t, shouldShowEmptyState: n } = (0, H.D)(),
        { density: l } = (0, d.wRf)();
    return n
        ? (0, i.jsx)("div", {
              className: e_.XG,
              children: (0, i.jsxs)(d.BJc, {
                  gap: 8,
                  children: [
                      (0, i.jsxs)(d.BJc, {
                          gap: 8,
                          padding: { top: 16, right: 16, bottom: 0, left: 16 },
                          fullWidth: !1,
                          children: [
                              (0, i.jsx)(d.Heading, {
                                  variant: "heading-md/semibold",
                                  children: eh.intl.string(eA.default["1n0TGE"]),
                              }),
                              (0, i.jsx)(d.Text, {
                                  variant: "text-sm/medium",
                                  color: "text-muted",
                                  children: eh.intl.string(eA.default.Wwzrs9),
                              }),
                          ],
                      }),
                      (0, i.jsx)("div", { className: e_.ts }),
                      (0, i.jsxs)("div", {
                          className: e_.MS,
                          "aria-hidden": "true",
                          children: [
                              (0, i.jsxs)("div", {
                                  className: e_.pS,
                                  children: [
                                      (0, i.jsx)(d.N$i, { size: "xs", color: d.LU0.colors.ICON_MUTED }),
                                      (0, i.jsx)("div", { className: e_.Qs }),
                                  ],
                              }),
                              (0, i.jsxs)("div", {
                                  className: e_.pS,
                                  children: [
                                      (0, i.jsx)(d.HKD, { size: "xs", color: d.LU0.colors.ICON_MUTED }),
                                      (0, i.jsx)("div", { className: e_.iR }),
                                  ],
                              }),
                              (0, i.jsxs)("div", {
                                  className: e_.pS,
                                  children: [
                                      (0, i.jsx)(d.oyn, { size: "xs", color: d.LU0.colors.ICON_MUTED }),
                                      (0, i.jsx)("div", { className: e_.Qs }),
                                  ],
                              }),
                          ],
                      }),
                  ],
              }),
          })
        : (0, i.jsx)(ep, { ...e, guildChannels: t, guildChannelsVersion: 0, withGuildIcon: !1, density: l });
}
function ex(e) {
    let t = (0, K.A)(e.guild),
        n = (0, o.cf)([V.A], () => V.A.getGuild(e.guildId, { guildActionRows: t })),
        { density: l } = (0, d.wRf)();
    return (0, i.jsx)(ep, { ...e, ...n, density: l });
}
