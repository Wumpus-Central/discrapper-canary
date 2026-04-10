n.d(t, { B: () => ef, T: () => ep }), n(321073);
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
    m = n(915089),
    g = n(5180),
    p = n(227004),
    f = n(581007),
    x = n(522435),
    E = n(781862),
    I = n(582904),
    C = n(637248),
    N = n(395504),
    T = n(947461),
    S = n(770904),
    b = n(357746),
    v = n(816288),
    y = n(455234),
    j = n(649247),
    R = n(787541),
    O = n(482361),
    L = n(591346),
    M = n(769022),
    D = n(95701),
    U = n(734057),
    G = n(72314),
    P = n(808728),
    k = n(967198),
    w = n(32603),
    B = n(960755),
    V = n(866842),
    H = n(633965),
    F = n(33324),
    W = n(823142),
    K = n(884452),
    Y = n(137089),
    z = n(506792),
    q = n(724591),
    X = n(573956),
    $ = n(141515),
    Q = n(463938),
    J = n(779881),
    Z = n(998986),
    ee = n(732077),
    et = n(689025),
    en = n(698126),
    ei = n(889806),
    el = n(923432),
    es = n(815213),
    ea = n(530484),
    er = n(422361),
    eo = n(281405);
n(83766);
var ed = n(652215),
    ec = n(746080);
n(131955);
var eu = n(985018),
    eh = n(665606),
    eA = n(116648);
function e_(e) {
    return (
        d.LU0.modules.channels.NAME_LINE_HEIGHT.resolve({ density: e }) +
        2 * d.LU0.space.SPACE_XXS.resolve({ density: e }) +
        2
    );
}
class em extends l.PureComponent {
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
        this.setState({ initialized: !0 }), (0, H.Ei)(this.getVisibleChannels);
    }
    componentWillUnmount() {
        this.updateChannelListScroll.cancel();
    }
    componentDidUpdate(e, t) {
        let { scrollToChannel: n, guildId: i, selectedChannelId: l } = this.props,
            { initialized: s } = this.state,
            { scrollTop: a } = G.A.getGuildDimensions(i);
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
                    r = s.threadOffset * e_(a);
                l.scrollIntoViewRect({ start: e + r, end: e + r + e_(a), padding: n, animate: t, callback: i });
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
                if (i < w.bK || e.isPlaceholderRow(i, l)) return !1;
                let s = e.getChannelFromSectionRow(i, l);
                if (null == s) return !1;
                let { channel: a, category: r } = s;
                return (
                    !!(0, D.ig)(a.record.type) &&
                    (!r.isCollapsed || !r.isMuted) &&
                    !a.isMuted &&
                    !!t.isItemVisible(i, l, !0) &&
                    (0, y.Y)(a.record)
                );
            })
        );
    }
    updateChannelListScroll = (0, s.throttle)((e) => {
        c.A.updateChannelListScroll(this.props.guildId, e, this.getVisibleChannels());
    }, 100);
    getSectionHeight = (e) => {
        let { guild: t, guildChannels: n, density: i } = this.props;
        return (0, K.sc)(e, t, n, i);
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
        return (0, Y.fz)({
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
            r = e_(a);
        if (e === w.PU) {
            let e = n.getGuildActionSection();
            return e.isEmpty()
                ? 0
                : e.getRow(t) === eo.n.GUILD_PREMIUM_PROGRESS_BAR
                  ? e.getRows().length > 1
                      ? 69
                      : 57
                  : r;
        }
        if (n.isPlaceholderRow(e, t)) return 0;
        let o = n.getChannelFromSectionRow(e, t);
        if (null == o) return 0;
        let { channel: c, category: u } = o;
        if (c.record.type === ed.rbe.GUILD_CATEGORY) return 40;
        for (let e of c.threadIds) {
            let { density: t = "default" } = this.props;
            r += e_(t);
            let n = i[c.id];
            null != n && n.length > 0 && (r += s === e ? 32 * n.length : 32);
        }
        if (c.record.isGuildVoice()) {
            let e = i[c.id];
            if (null != e && e.length > 0) {
                let t = 32 * e.length;
                if (
                    (c.isCollapsed || u.isCollapsed ? (t = 32) : (0, I.Ln)(c.record) && (t += 32),
                    (r += t + d.LU0.space.SPACE_XS.resolve({ density: a })),
                    !c.isCollapsed && !u.isCollapsed)
                ) {
                    let { enableHangoutWindow: e } = (0, f.kY)({ guildId: c.record.guild_id, location: "ChannelList" });
                    e && ((0, x.lr)(c.record) ? (r += 134) : s === c.id && (r += 44));
                }
            }
            if (
                (c.id === this.props.rtcConnectedChannelId && (r += 32 * this.props.rtcDesyncedVoiceStatesCount),
                !c.isCollapsed && !u.isCollapsed)
            ) {
                let { showGhostUser: e } = (0, L.NH)({ guildId: c.record.guild_id, location: "ChannelList" });
                e && null != M.A.getLastLeftUserId(c.id) && (r += 32);
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
        null != n && s.includes(n) && (l = (0, C.xb)(t)), (0, C.DD)(e.id, s, l);
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
            K.Ay,
            {
                sectionIndex: t,
                guild: s,
                guildChannels: n,
                guildChannelsVersion: l,
                selectedChannelId: a,
                disableManageChannels: r,
            },
            (0, K.is)(t, n),
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
        if (t === w.PU) {
            let e = c.getGuildActionSection(),
                t = e.getRow(n);
            if (null == t) return null;
            switch (t) {
                case eo.n.GUILD_HUB_HEADER_OPTIONS:
                    return (0, i.jsx)(
                        E.A,
                        { guild: s, channel: P.Ay.getDefaultChannel(s.id) },
                        eo.n.GUILD_HUB_HEADER_OPTIONS,
                    );
                case eo.n.GUILD_PREMIUM_PROGRESS_BAR:
                    let l = e.getRows();
                    return (0, i.jsx)(v.A, { guild: s, withMargin: l.length > 1 }, eo.n.GUILD_PREMIUM_PROGRESS_BAR);
                case eo.n.GUILD_HOME:
                    return (0, i.jsx)($.A, { guild: s, selected: r === ec.VV.GUILD_HOME }, eo.n.GUILD_HOME);
                case eo.n.GUILD_SCHEDULED_EVENTS:
                    return (0, i.jsx)(
                        ea.A,
                        { guild: s, selected: r === eo.n.GUILD_SCHEDULED_EVENTS },
                        eo.n.GUILD_SCHEDULED_EVENTS,
                    );
                case eo.n.GUILD_ROLE_SUBSCRIPTIONS:
                    return (0, i.jsx)(
                        J.A,
                        { guild: s, selected: r === ec.VV.ROLE_SUBSCRIPTIONS },
                        eo.n.GUILD_ROLE_SUBSCRIPTIONS,
                    );
                case eo.n.GUILD_SHOP:
                    return (0, i.jsx)(Z.A, { guild: s, selected: r === ec.VV.GUILD_SHOP }, eo.n.GUILD_SHOP);
                case eo.n.GUILD_GAME_SHOP:
                    return (0, i.jsx)(q.A, { guild: s, selected: r === ec.VV.GAME_SHOP }, eo.n.GUILD_GAME_SHOP);
                case eo.n.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR:
                    return (0, i.jsx)(Q.j, { guild: s });
                case eo.n.CHANNELS_AND_ROLES:
                    return (0, i.jsx)(
                        X.G,
                        { guild: s, selected: r === ec.VV.CHANNEL_BROWSER || r === ec.VV.CUSTOMIZE_COMMUNITY },
                        eo.n.CHANNELS_AND_ROLES,
                    );
                case eo.n.GUILD_DIRECTORY:
                    return (0, i.jsx)(
                        z.A,
                        { guild: s, selectedChannelId: r, disableManageChannels: h },
                        eo.n.GUILD_DIRECTORY,
                    );
                case eo.n.GUILD_MOD_DASH_MEMBER_SAFETY:
                    return (0, i.jsx)(
                        p.A,
                        { guild: s, selected: r === ec.VV.MEMBER_SAFETY },
                        eo.n.GUILD_MOD_DASH_MEMBER_SAFETY,
                    );
                case eo.n.GUILD_BOOSTS:
                    return (0, i.jsx)(b.A, { guildId: s.id, selected: r === ec.VV.GUILD_BOOSTS }, eo.n.GUILD_BOOSTS);
                case eo.n.GAME_SERVERS:
                    return (0, i.jsx)(S.A, { guildId: s.id, selected: r === ec.VV.GAME_SERVERS }, eo.n.GAME_SERVERS);
                case eo.n.GAME_SERVERS_EMPTY:
                    return (0, i.jsx)(
                        T.A,
                        { guildId: s.id, selected: r === ec.VV.GAME_SERVERS },
                        eo.n.GAME_SERVERS_EMPTY,
                    );
                default:
                    return null;
            }
        }
        if (c.isPlaceholderRow(t, n)) return null;
        let g = c.getChannelFromSectionRow(t, n);
        if (null == g) return null;
        let { category: f, channel: x } = g,
            I = f instanceof w.xu,
            C = x.record,
            N = `${t}${x.id}`;
        switch (C.type) {
            case ed.rbe.GUILD_ANNOUNCEMENT:
            case ed.rbe.GUILD_TEXT:
            case ed.rbe.GUILD_FORUM:
            case ed.rbe.GUILD_MEDIA:
            case ed.rbe.DM:
            case ed.rbe.GROUP_DM:
                return (0, i.jsxs)(
                    l.Fragment,
                    {
                        children: [
                            (0, i.jsx)(ei.A, {
                                channel: C,
                                guild: s,
                                position: x.position,
                                selected: r === x.id,
                                muted: x.isMuted,
                                subtitle: x.subtitle,
                                disableManageChannels: h,
                                canBeNewChannel: _ && t === c.recentsSectionNumber,
                                isFavoriteCategory: I,
                                isSuggestedSection: t === c.recentsSectionNumber,
                            }),
                            x.threadCount > 0
                                ? (0, i.jsx)(ee.A, {
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
            case ed.rbe.GUILD_STAGE_VOICE:
                return (0, i.jsx)(
                    et.A,
                    {
                        channel: C,
                        guild: s,
                        position: x.position,
                        selected: r === x.id,
                        connected: d === x.id,
                        collapsed: x.isCollapsed || f.isCollapsed,
                        voiceStates: u[x.id] ?? [],
                        speakerVoiceStates: A[x.id] ?? [],
                        disableManageChannels: h,
                        isFavoriteCategory: I,
                        isSuggestedSection: t === c.recentsSectionNumber,
                    },
                    N,
                );
            case ed.rbe.GUILD_VOICE:
                return (0, i.jsx)(
                    er.A,
                    {
                        channel: C,
                        guild: s,
                        position: x.position,
                        selected: r === x.id,
                        connected: d === x.id,
                        collapsed: x.isCollapsed || f.isCollapsed,
                        voiceStates: u[x.id],
                        subtitle: x.subtitle,
                        disableManageChannels: h,
                        showTutorial: x.isFirstVoiceChannel,
                        isFavoriteCategory: I,
                        withGuildIcon: m,
                        isSuggestedSection: t === c.recentsSectionNumber,
                    },
                    N,
                );
            case ed.rbe.GUILD_STORE:
                return (0, i.jsx)(en.A, { channel: C, guild: s, position: x.position, selected: r === x.id }, N);
            case ed.rbe.GUILD_CATEGORY:
                if (t !== c.voiceChannelsSectionNumber) return null;
                return (0, i.jsx)(W.sM, { channel: C }, `readonly-${C.id}`);
            case ed.rbe.PUBLIC_THREAD:
            case ed.rbe.PRIVATE_THREAD:
            case ed.rbe.ANNOUNCEMENT_THREAD:
                return (0, i.jsx)(
                    ei.A,
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
            Y.Ay,
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
            (0, Y.tt)(t, n, o),
        );
    };
    renderTopUnread() {
        let { topMention: e, bottomUnread: t, bottomMention: n, isUnreadVisible: l } = this.state,
            { guildId: s, guildChannels: a, guildChannelsVersion: r } = this.props;
        return (0, i.jsx)("div", {
            className: eA.Eo,
            children: (0, i.jsx)(es.A, {
                ref: this.unreadTopRef,
                textUnread: eu.intl.string(eu.t.FCRiT3),
                textMention: eu.intl.string(eu.t["8zH0LJ"]),
                hide: null == e && (l || null != t || null != n),
                className: eA.Vq,
                barClassName: eA.bu,
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
        return (0, i.jsx)(es.A, {
            reverse: !0,
            ref: this.unreadBottomRef,
            textUnread: eu.intl.string(eu.t.FCRiT3),
            textMention: eu.intl.string(eu.t["8zH0LJ"]),
            hide: null == l && s,
            className: eA.di,
            barClassName: eA.bu,
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
        if (e !== w.PU) {
            if (null == t)
                return e === w.HP
                    ? "favorites-header"
                    : e === n.recentsSectionNumber
                      ? "recents-header"
                      : e === n.voiceChannelsSectionNumber
                        ? "voice-channels"
                        : e === w.bK
                          ? "uncategorized-header"
                          : n.getNamedCategoryFromSection(e)?.id;
            if (!n.isPlaceholderRow(e, t)) return n.getChannelFromSectionRow(e, t)?.channel?.id;
        }
    };
    renderList() {
        let { guildChannels: e, guildBanner: t, selectedGuildId: n, density: l } = this.props,
            s = {};
        (0, g.ai)(n) && (s["data-favorites"] = !0);
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
                        className: eA.XG,
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
                        innerAriaLabel: eu.intl.string(eu.t.OGiMXJ),
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
        if (!O.A.shouldShow("voice-conversations")) return;
        let { guildChannels: e } = this.props,
            t = e.getFirstVoiceChannel();
        if (null == t) return void R.X8("voice-conversations");
        let n = this._list;
        if (null != n)
            for (let { section: e, row: i } of this.getSectionRowsFromChannel(t.id))
                n.isItemVisible(e, i) || R.X8("voice-conversations");
    };
    render() {
        let { guildChannels: e, guildChannelsVersion: t, showNewUnreadsBar: n } = this.props;
        return (0, i.jsx)(m.V0, {
            children: (s) =>
                (0, i.jsx)(d.Fmo, {
                    component: (0, i.jsx)(d.AC4, {
                        children: (0, i.jsx)(d.H, { id: s, children: eu.intl.string(eu.t.OGiMXJ) }),
                    }),
                    children: n
                        ? (0, i.jsxs)(l.Fragment, {
                              children: [
                                  (0, i.jsx)("div", {
                                      className: eA.Eo,
                                      children: (0, i.jsx)(el.A, {
                                          position: "top",
                                          guildChannels: e,
                                          guildChannelsVersion: t,
                                          jumpToVoiceChannels: this.jumpToVoiceChannels,
                                          jumpToChannel: this.jumpToChannel,
                                      }),
                                  }),
                                  this.renderList(),
                                  (0, i.jsx)(el.A, {
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
let eg = (e) => {
    let { guildId: t, selectedChannelId: n, selectedVoiceChannelId: s } = e,
        d = (0, o.bG)([h.A], () => h.A.keyboardModeEnabled),
        { analyticsLocations: c } = (0, _.Ay)(A.A.GUILD_CHANNEL_LIST),
        m = (0, o.bG)([U.A], () => U.A.getChannel(n)),
        g = (0, o.bG)([U.A], () => U.A.getChannel(s)),
        p = (0, o.bG)([k.A], () => k.A.getGuildId()),
        f = (0, N.jN)(t),
        x = l.useRef(null),
        E = l.useCallback((e, t) => {
            let n = x.current;
            null != n &&
                (ed.Ut1.test(t) || (0, ec.jq)(t)
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
        T = (0, r.Ay)({
            id: "channels",
            defaultFocused: n ?? void 0,
            isEnabled: d,
            setFocus: E,
            scrollToStart: I,
            scrollToEnd: C,
        }),
        S = T.setFocus;
    l.useEffect(() => {
        null != n && S(n);
    }, [n, S]);
    let b = (0, j.A)(t);
    return (0, i.jsx)(_.f5, {
        value: c,
        children: (0, i.jsx)(u.A, {
            section: ed.JJy.GUILD_CHANNEL_LIST,
            children: (0, i.jsx)(a.hD, {
                navigator: T,
                children: (0, i.jsx)(em, {
                    ...e,
                    listNavigator: T,
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
function ep(e) {
    let { guildChannels: t, shouldShowEmptyState: n } = (0, V.D)(),
        { density: l } = (0, d.wRf)();
    return n
        ? (0, i.jsx)("div", {
              className: eA.XG,
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
                                  children: eu.intl.string(eh.default["1n0TGE"]),
                              }),
                              (0, i.jsx)(d.Text, {
                                  variant: "text-sm/medium",
                                  color: "text-muted",
                                  children: eu.intl.string(eh.default.Wwzrs9),
                              }),
                          ],
                      }),
                      (0, i.jsx)("div", { className: eA.ts }),
                      (0, i.jsxs)("div", {
                          className: eA.MS,
                          "aria-hidden": "true",
                          children: [
                              (0, i.jsxs)("div", {
                                  className: eA.pS,
                                  children: [
                                      (0, i.jsx)(d.N$i, { size: "xs", color: d.LU0.colors.ICON_MUTED }),
                                      (0, i.jsx)("div", { className: eA.Qs }),
                                  ],
                              }),
                              (0, i.jsxs)("div", {
                                  className: eA.pS,
                                  children: [
                                      (0, i.jsx)(d.HKD, { size: "xs", color: d.LU0.colors.ICON_MUTED }),
                                      (0, i.jsx)("div", { className: eA.iR }),
                                  ],
                              }),
                              (0, i.jsxs)("div", {
                                  className: eA.pS,
                                  children: [
                                      (0, i.jsx)(d.oyn, { size: "xs", color: d.LU0.colors.ICON_MUTED }),
                                      (0, i.jsx)("div", { className: eA.Qs }),
                                  ],
                              }),
                          ],
                      }),
                  ],
              }),
          })
        : (0, i.jsx)(eg, { ...e, guildChannels: t, guildChannelsVersion: 0, withGuildIcon: !1, density: l });
}
function ef(e) {
    let t = (0, F.A)(e.guild),
        n = (0, o.cf)([B.A], () => B.A.getGuild(e.guildId, { guildActionRows: t })),
        { density: l } = (0, d.wRf)();
    return (0, i.jsx)(eg, { ...e, ...n, density: l });
}
