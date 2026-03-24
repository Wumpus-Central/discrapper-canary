"use strict";
n.d(t, { B: () => eg, T: () => e_ }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(735438),
    a = n(837381),
    r = n(884362),
    o = n(311907),
    c = n(397927),
    d = n(951001),
    u = n(820284),
    h = n(775602),
    A = n(793574),
    m = n(688810),
    p = n(309698),
    _ = n(915089),
    g = n(5180),
    f = n(227004),
    x = n(581007),
    C = n(522435),
    E = n(781862),
    I = n(582904),
    N = n(637248),
    b = n(395504),
    S = n(947461),
    T = n(770904),
    v = n(357746),
    y = n(816288),
    j = n(455234),
    R = n(649247),
    O = n(787541),
    L = n(482361),
    M = n(95701),
    D = n(734057),
    G = n(72314),
    U = n(808728),
    P = n(967198),
    w = n(32603),
    k = n(960755),
    V = n(866842),
    B = n(633965),
    H = n(33324),
    F = n(823142),
    K = n(884452),
    W = n(137089),
    Y = n(506792),
    z = n(724591),
    q = n(573956),
    X = n(141515),
    J = n(463938),
    Q = n(779881),
    $ = n(998986),
    Z = n(732077),
    ee = n(689025),
    et = n(698126),
    en = n(889806),
    ei = n(923432),
    es = n(815213),
    el = n(530484),
    ea = n(422361),
    er = n(281405);
n(83766);
var eo = n(652215),
    ec = n(746080);
n(131955);
var ed = n(985018),
    eu = n(665606),
    eh = n(495401);
function eA(e) {
    return (
        c.LU0.modules.channels.NAME_LINE_HEIGHT.resolve({ density: e }) +
        2 * c.LU0.space.SPACE_XXS.resolve({ density: e }) +
        2
    );
}
class em extends s.PureComponent {
    static contextType = a.nC;
    _list = null;
    unreadTopRef = s.createRef();
    unreadBottomRef = s.createRef();
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
        this.setState({ initialized: !0 }), (0, B.Ei)(this.getVisibleChannels);
    }
    componentWillUnmount() {
        this.updateChannelListScroll.cancel();
    }
    componentDidUpdate(e, t) {
        let { scrollToChannel: n, guildId: i, selectedChannelId: s } = this.props,
            { initialized: l } = this.state,
            { scrollTop: a } = G.A.getGuildDimensions(i);
        null != n
            ? (this.scrollToChannel(n), d.A.clearChannelListScrollTo(i))
            : i !== e.guildId
              ? null != a && this.scrollTo(a)
              : s !== e.selectedChannelId
                ? this.scrollToChannel(s)
                : !t.initialized &&
                  l &&
                  (null == a && null != s
                      ? this.scrollToChannel(s, !1, 8, this.handleListScroll)
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
            s = this._list,
            l = this.getSectionRowsFromChannel(e)[0];
        if (null != l && null != s)
            if (null != l.threadOffset) {
                let [e] = s.getScrollPosition(l.section, l.row),
                    { density: a = "default" } = this.props,
                    r = l.threadOffset * eA(a);
                s.scrollIntoViewRect({ start: e + r, end: e + r + eA(a), padding: n, animate: t, callback: i });
            } else s.scrollToIndex({ section: l.section, row: l.row, animate: t, padding: n, callback: i });
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
        for (let { row: e, section: s } of n) {
            let [n, l] = i.getScrollPosition(s, e),
                a = i.getScrollerState();
            if ((t && n + l < a.scrollTop + a.offsetHeight) || (!t && n > a.scrollTop)) return !0;
        }
        return !1;
    };
    getVisibleChannels = () => {
        let e = this._list;
        if (null == e) return [];
        let t = e.getItems(),
            n = e.getScrollerState(),
            i = [];
        for (var s = 0; s < t.length; s++) {
            let l = t[s];
            if ((0, c.ogc)(l) && l.section >= this.props.guildChannels.favoritesSectionNumber) {
                let t = this.props.guildChannels.getChannelFromSectionRow(l.section, l.row),
                    [s, a] = e.getScrollPosition(l.section, l.row);
                null != t && s + a < n.scrollTop + n.offsetHeight && s > n.scrollTop && i.push(t.channel.id);
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
                let { section: i, row: s } = n;
                if (i < w.bK || e.isPlaceholderRow(i, s)) return !1;
                let l = e.getChannelFromSectionRow(i, s);
                if (null == l) return !1;
                let { channel: a, category: r } = l;
                return (
                    !!(0, M.ig)(a.record.type) &&
                    (!r.isCollapsed || !r.isMuted) &&
                    !a.isMuted &&
                    !!t.isItemVisible(i, s, !0) &&
                    (0, j.Y)(a.record)
                );
            })
        );
    }
    updateChannelListScroll = (0, l.throttle)((e) => {
        d.A.updateChannelListScroll(this.props.guildId, e, this.getVisibleChannels());
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
            selectedChannelId: s,
            optInEnabled: l,
            guildChannelsVersion: a,
        } = this.props;
        return (0, W.fz)({
            sectionIndex: e,
            guildChannels: t,
            guildChannelsVersion: a,
            voiceStates: n,
            selectedChannelId: s,
            selectedVoiceChannelId: i,
            optInEnabled: l,
            density: this.props.density,
        });
    };
    getRowHeight = (e, t) => {
        let {
                guildChannels: n,
                voiceStates: i,
                stageChannelSpeakerVoiceStates: s,
                selectedVoiceChannelId: l,
                density: a = "default",
            } = this.props,
            r = eA(a);
        if (e === w.PU) {
            let e = n.getGuildActionSection();
            return e.isEmpty()
                ? 0
                : e.getRow(t) === er.n.GUILD_PREMIUM_PROGRESS_BAR
                  ? e.getRows().length > 1
                      ? 69
                      : 57
                  : r;
        }
        if (n.isPlaceholderRow(e, t)) return 0;
        let o = n.getChannelFromSectionRow(e, t);
        if (null == o) return 0;
        let { channel: d, category: u } = o;
        if (d.record.type === eo.rbe.GUILD_CATEGORY) return 40;
        for (let e of d.threadIds) {
            let { density: t = "default" } = this.props;
            r += eA(t);
            let n = i[d.id];
            null != n && n.length > 0 && (r += l === e ? 32 * n.length : 32);
        }
        if (d.record.isGuildVoice()) {
            let e = i[d.id];
            if (null != e && e.length > 0) {
                let t = 32 * e.length;
                d.isCollapsed || u.isCollapsed ? (t = 32) : (0, I.Ln)(d.record) && (t += 32),
                    (r += t + c.LU0.space.SPACE_XS.resolve({ density: a }));
                let { enableHangoutWindow: n } = (0, x.kY)({ guildId: d.record.guild_id, location: "ChannelList" });
                if (n) {
                    let e = p.A.getChannelStatus(d.record);
                    (0, C.TP)(e) ? (r += 134) : l === d.id && (r += 44);
                }
            }
            d.id === this.props.rtcConnectedChannelId && (r += 32 * this.props.rtcDesyncedVoiceStatesCount);
        }
        if (((null != d.subtitle || l === d.id) && (r += 16), d.record.isGuildStageVoice())) {
            let e = i[d.id] ?? [],
                t = s[d.id] ?? [];
            if (null != e && e.length > 0) {
                let e = 32 * t.length;
                d.isCollapsed || u.isCollapsed ? (e = Math.ceil(e / 5)) : (e += 32), (r += e + 8);
            }
        }
        return r;
    };
    dismissRecents = () => {
        let { guild: e, guildChannels: t, selectedChannelId: n } = this.props,
            i = t.getCategoryFromSection(t.recentsSectionNumber);
        if (null == i) return;
        let s = null,
            l = i.getShownChannelAndThreadIds();
        null != n && l.includes(n) && (s = (0, N.xb)(t)), (0, N.DD)(e.id, l, s);
    };
    renderSection = (e) => {
        let { section: t } = e,
            {
                guildChannels: n,
                guildChannelsVersion: s,
                guild: l,
                selectedChannelId: a,
                disableManageChannels: r,
            } = this.props;
        return (0, i.jsx)(
            K.Ay,
            {
                sectionIndex: t,
                guild: l,
                guildChannels: n,
                guildChannelsVersion: s,
                selectedChannelId: a,
                disableManageChannels: r,
            },
            (0, K.is)(t, n),
        );
    };
    renderRow = (e) => {
        let { section: t, row: n } = e,
            {
                guild: l,
                selectedChannel: a,
                selectedChannelId: r,
                selectedVoiceChannel: o,
                selectedVoiceChannelId: c,
                guildChannels: d,
                voiceStates: u,
                disableManageChannels: h,
                stageChannelSpeakerVoiceStates: A,
                optInEnabled: m,
                withGuildIcon: p,
            } = this.props;
        if (t === w.PU) {
            let e = d.getGuildActionSection(),
                t = e.getRow(n);
            if (null == t) return null;
            switch (t) {
                case er.n.GUILD_HUB_HEADER_OPTIONS:
                    return (0, i.jsx)(
                        E.A,
                        { guild: l, channel: U.Ay.getDefaultChannel(l.id) },
                        er.n.GUILD_HUB_HEADER_OPTIONS,
                    );
                case er.n.GUILD_PREMIUM_PROGRESS_BAR:
                    let s = e.getRows();
                    return (0, i.jsx)(y.A, { guild: l, withMargin: s.length > 1 }, er.n.GUILD_PREMIUM_PROGRESS_BAR);
                case er.n.GUILD_HOME:
                    return (0, i.jsx)(X.A, { guild: l, selected: r === ec.VV.GUILD_HOME }, er.n.GUILD_HOME);
                case er.n.GUILD_SCHEDULED_EVENTS:
                    return (0, i.jsx)(
                        el.A,
                        { guild: l, selected: r === er.n.GUILD_SCHEDULED_EVENTS },
                        er.n.GUILD_SCHEDULED_EVENTS,
                    );
                case er.n.GUILD_ROLE_SUBSCRIPTIONS:
                    return (0, i.jsx)(
                        Q.A,
                        { guild: l, selected: r === ec.VV.ROLE_SUBSCRIPTIONS },
                        er.n.GUILD_ROLE_SUBSCRIPTIONS,
                    );
                case er.n.GUILD_SHOP:
                    return (0, i.jsx)($.A, { guild: l, selected: r === ec.VV.GUILD_SHOP }, er.n.GUILD_SHOP);
                case er.n.GUILD_GAME_SHOP:
                    return (0, i.jsx)(z.A, { guild: l, selected: r === ec.VV.GAME_SHOP }, er.n.GUILD_GAME_SHOP);
                case er.n.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR:
                    return (0, i.jsx)(J.j, { guild: l });
                case er.n.CHANNELS_AND_ROLES:
                    return (0, i.jsx)(
                        q.G,
                        { guild: l, selected: r === ec.VV.CHANNEL_BROWSER || r === ec.VV.CUSTOMIZE_COMMUNITY },
                        er.n.CHANNELS_AND_ROLES,
                    );
                case er.n.GUILD_DIRECTORY:
                    return (0, i.jsx)(
                        Y.A,
                        { guild: l, selectedChannelId: r, disableManageChannels: h },
                        er.n.GUILD_DIRECTORY,
                    );
                case er.n.GUILD_MOD_DASH_MEMBER_SAFETY:
                    return (0, i.jsx)(
                        f.A,
                        { guild: l, selected: r === ec.VV.MEMBER_SAFETY },
                        er.n.GUILD_MOD_DASH_MEMBER_SAFETY,
                    );
                case er.n.GUILD_BOOSTS:
                    return (0, i.jsx)(v.A, { guildId: l.id, selected: r === ec.VV.GUILD_BOOSTS }, er.n.GUILD_BOOSTS);
                case er.n.GAME_SERVERS:
                    return (0, i.jsx)(T.A, { guildId: l.id, selected: r === ec.VV.GAME_SERVERS }, er.n.GAME_SERVERS);
                case er.n.GAME_SERVERS_EMPTY:
                    return (0, i.jsx)(
                        S.A,
                        { guildId: l.id, selected: r === ec.VV.GAME_SERVERS },
                        er.n.GAME_SERVERS_EMPTY,
                    );
                default:
                    return null;
            }
        }
        if (d.isPlaceholderRow(t, n)) return null;
        let _ = d.getChannelFromSectionRow(t, n);
        if (null == _) return null;
        let { category: g, channel: x } = _,
            C = g instanceof w.xu,
            I = x.record,
            N = `${t}${x.id}`;
        switch (I.type) {
            case eo.rbe.GUILD_ANNOUNCEMENT:
            case eo.rbe.GUILD_TEXT:
            case eo.rbe.GUILD_FORUM:
            case eo.rbe.GUILD_MEDIA:
            case eo.rbe.DM:
            case eo.rbe.GROUP_DM:
                return (0, i.jsxs)(
                    s.Fragment,
                    {
                        children: [
                            (0, i.jsx)(en.A, {
                                channel: I,
                                guild: l,
                                position: x.position,
                                selected: r === x.id,
                                muted: x.isMuted,
                                subtitle: x.subtitle,
                                disableManageChannels: h,
                                canBeNewChannel: m && t === d.recentsSectionNumber,
                                isFavoriteCategory: C,
                            }),
                            x.threadCount > 0
                                ? (0, i.jsx)(Z.A, {
                                      withGuildIcon: p,
                                      channel: I,
                                      sortedThreadIds: x.threadIds,
                                      selectedChannel: null != a && (a.id === x.id || a.parent_id === I.id) ? a : null,
                                      selectedVoiceChannelId: o?.parent_id === I.id ? c : null,
                                  })
                                : null,
                        ],
                    },
                    N,
                );
            case eo.rbe.GUILD_STAGE_VOICE:
                return (0, i.jsx)(
                    ee.A,
                    {
                        channel: I,
                        guild: l,
                        position: x.position,
                        selected: r === x.id,
                        connected: c === x.id,
                        collapsed: x.isCollapsed || g.isCollapsed,
                        voiceStates: u[x.id] ?? [],
                        speakerVoiceStates: A[x.id] ?? [],
                        disableManageChannels: h,
                        isFavoriteCategory: C,
                    },
                    N,
                );
            case eo.rbe.GUILD_VOICE:
                return (0, i.jsx)(
                    ea.A,
                    {
                        channel: I,
                        guild: l,
                        position: x.position,
                        selected: r === x.id,
                        connected: c === x.id,
                        collapsed: x.isCollapsed || g.isCollapsed,
                        voiceStates: u[x.id],
                        subtitle: x.subtitle,
                        disableManageChannels: h,
                        showTutorial: x.isFirstVoiceChannel,
                        isFavoriteCategory: C,
                        withGuildIcon: p,
                    },
                    N,
                );
            case eo.rbe.GUILD_STORE:
                return (0, i.jsx)(et.A, { channel: I, guild: l, position: x.position, selected: r === x.id }, N);
            case eo.rbe.GUILD_CATEGORY:
                if (t !== d.voiceChannelsSectionNumber) return null;
                return (0, i.jsx)(F.sM, { channel: I }, `readonly-${I.id}`);
            case eo.rbe.PUBLIC_THREAD:
            case eo.rbe.PRIVATE_THREAD:
            case eo.rbe.ANNOUNCEMENT_THREAD:
                return (0, i.jsx)(
                    en.A,
                    {
                        channel: I,
                        guild: l,
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
                guildChannelsVersion: s,
                voiceStates: l,
                selectedChannelId: a,
                selectedVoiceChannelId: r,
                optInEnabled: o,
                guildId: c,
            } = this.props;
        return (0, i.jsx)(
            W.Ay,
            {
                guildId: c,
                guildChannels: n,
                guildChannelsVersion: s,
                sectionIndex: t,
                voiceStates: l,
                selectedChannelId: a,
                selectedVoiceChannelId: r,
                optInEnabled: o,
            },
            (0, W.tt)(t, n, o),
        );
    };
    renderTopUnread() {
        let { topMention: e, bottomUnread: t, bottomMention: n, isUnreadVisible: s } = this.state,
            { guildId: l, guildChannels: a, guildChannelsVersion: r } = this.props;
        return (0, i.jsx)("div", {
            className: eh.Eo,
            children: (0, i.jsx)(es.A, {
                ref: this.unreadTopRef,
                textUnread: ed.intl.string(ed.t.FCRiT3),
                textMention: ed.intl.string(ed.t["8zH0LJ"]),
                hide: null == e && (s || null != t || null != n),
                className: eh.Vq,
                barClassName: eh.bu,
                guildId: l,
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
            { bottomMention: s, isUnreadVisible: l } = this.state;
        return (0, i.jsx)(es.A, {
            reverse: !0,
            ref: this.unreadBottomRef,
            textUnread: ed.intl.string(ed.t.FCRiT3),
            textMention: ed.intl.string(ed.t["8zH0LJ"]),
            hide: null == s && l,
            className: eh.di,
            barClassName: eh.bu,
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
        let { guildChannels: e, guildBanner: t, selectedGuildId: n, density: s } = this.props,
            l = {};
        (0, g.ai)(n) && (l["data-favorites"] = !0);
        let { ref: a, ...r } = this.context,
            o = 0;
        null != t && (o = 84);
        let d = "compact" === s ? 8 : 12;
        return (0, i.jsx)(c.skg, {
            children: (t) =>
                (0, i.jsx)(
                    c.B8B,
                    {
                        ref: this.setListRef,
                        className: eh.XG,
                        fade: !0,
                        sectionHeight: this.getSectionHeight,
                        footerHeight: this.getSectionFooterHeight,
                        rowHeight: this.getRowHeight,
                        paddingTop: o,
                        paddingBottom: d,
                        renderSection: this.renderSection,
                        renderFooter: this.renderSectionFooter,
                        renderRow: this.renderRow,
                        onScroll: this.handleListScroll,
                        onResize: this.handleResize,
                        onContentResize: this.handleResize,
                        sections: e.getSections(!0),
                        innerAriaLabel: ed.intl.string(ed.t.OGiMXJ),
                        innerTag: "ul",
                        getAnchorId: this.getAnchorId,
                        ...r,
                        ...t,
                        ...l,
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
        return (0, i.jsx)(_.V0, {
            children: (l) =>
                (0, i.jsx)(c.Fmo, {
                    component: (0, i.jsx)(c.AC4, {
                        children: (0, i.jsx)(c.H, { id: l, children: ed.intl.string(ed.t.OGiMXJ) }),
                    }),
                    children: n
                        ? (0, i.jsxs)(s.Fragment, {
                              children: [
                                  (0, i.jsx)("div", {
                                      className: eh.Eo,
                                      children: (0, i.jsx)(ei.A, {
                                          position: "top",
                                          guildChannels: e,
                                          guildChannelsVersion: t,
                                          jumpToVoiceChannels: this.jumpToVoiceChannels,
                                          jumpToChannel: this.jumpToChannel,
                                      }),
                                  }),
                                  this.renderList(),
                                  (0, i.jsx)(ei.A, {
                                      position: "bottom",
                                      guildChannels: e,
                                      guildChannelsVersion: t,
                                      jumpToVoiceChannels: this.jumpToVoiceChannels,
                                      jumpToChannel: this.jumpToChannel,
                                  }),
                              ],
                          })
                        : (0, i.jsxs)(s.Fragment, {
                              children: [this.renderTopUnread(), this.renderList(), this.renderBottomUnread()],
                          }),
                }),
        });
    }
}
let ep = (e) => {
    let { guildId: t, selectedChannelId: n, selectedVoiceChannelId: l } = e,
        c = (0, o.bG)([h.A], () => h.A.keyboardModeEnabled),
        { analyticsLocations: d } = (0, m.Ay)(A.A.GUILD_CHANNEL_LIST),
        p = (0, o.bG)([D.A], () => D.A.getChannel(n)),
        _ = (0, o.bG)([D.A], () => D.A.getChannel(l)),
        g = (0, o.bG)([P.A], () => P.A.getGuildId()),
        f = (0, b.jN)(t),
        x = s.useRef(null),
        C = s.useCallback((e, t) => {
            let n = x.current;
            null != n &&
                (eo.Ut1.test(t) || (0, ec.jq)(t)
                    ? n.scrollToChannel(t, !1, 16, () => {
                          requestAnimationFrame(() => document.querySelector(e)?.focus());
                      })
                    : document.querySelector(e)?.focus());
        }, []),
        E = s.useCallback(
            () =>
                new Promise((e) => {
                    let t = x.current;
                    if (null == t) return e();
                    t.scrollTo(0, () => requestAnimationFrame(() => e()));
                }),
            [],
        ),
        I = s.useCallback(
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
            isEnabled: c,
            setFocus: C,
            scrollToStart: E,
            scrollToEnd: I,
        }),
        S = N.setFocus;
    s.useEffect(() => {
        null != n && S(n);
    }, [n, S]);
    let T = (0, R.A)(t);
    return (0, i.jsx)(m.f5, {
        value: d,
        children: (0, i.jsx)(u.A, {
            section: eo.JJy.GUILD_CHANNEL_LIST,
            children: (0, i.jsx)(a.hD, {
                navigator: N,
                children: (0, i.jsx)(em, {
                    ...e,
                    listNavigator: N,
                    ref: x,
                    selectedChannel: p,
                    selectedVoiceChannel: _,
                    stageChannelSpeakerVoiceStates: T,
                    selectedGuildId: g,
                    optInEnabled: f,
                }),
            }),
        }),
    });
};
function e_(e) {
    let { guildChannels: t, shouldShowEmptyState: n } = (0, V.D)(),
        { density: s } = (0, c.wRf)();
    return n
        ? (0, i.jsx)("div", {
              className: eh.XG,
              children: (0, i.jsxs)(c.BJc, {
                  gap: 8,
                  children: [
                      (0, i.jsxs)(c.BJc, {
                          gap: 8,
                          padding: { top: 16, right: 16, bottom: 0, left: 16 },
                          fullWidth: !1,
                          children: [
                              (0, i.jsx)(c.Heading, {
                                  variant: "heading-md/semibold",
                                  children: ed.intl.string(eu.default["1n0TGE"]),
                              }),
                              (0, i.jsx)(c.Text, {
                                  variant: "text-sm/medium",
                                  color: "text-muted",
                                  children: ed.intl.string(eu.default.Wwzrs9),
                              }),
                          ],
                      }),
                      (0, i.jsx)("div", { className: eh.ts }),
                      (0, i.jsxs)("div", {
                          className: eh.MS,
                          "aria-hidden": "true",
                          children: [
                              (0, i.jsxs)("div", {
                                  className: eh.pS,
                                  children: [
                                      (0, i.jsx)(c.N$i, { size: "xs", color: c.LU0.colors.ICON_MUTED }),
                                      (0, i.jsx)("div", { className: eh.Qs }),
                                  ],
                              }),
                              (0, i.jsxs)("div", {
                                  className: eh.pS,
                                  children: [
                                      (0, i.jsx)(c.HKD, { size: "xs", color: c.LU0.colors.ICON_MUTED }),
                                      (0, i.jsx)("div", { className: eh.iR }),
                                  ],
                              }),
                              (0, i.jsxs)("div", {
                                  className: eh.pS,
                                  children: [
                                      (0, i.jsx)(c.oyn, { size: "xs", color: c.LU0.colors.ICON_MUTED }),
                                      (0, i.jsx)("div", { className: eh.Qs }),
                                  ],
                              }),
                          ],
                      }),
                  ],
              }),
          })
        : (0, i.jsx)(ep, { ...e, guildChannels: t, guildChannelsVersion: 0, withGuildIcon: !1, density: s });
}
function eg(e) {
    let t = (0, H.A)(e.guild),
        n = (0, o.cf)([k.A], () => k.A.getGuild(e.guildId, { guildActionRows: t })),
        { density: s } = (0, c.wRf)();
    return (0, i.jsx)(ep, { ...e, ...n, density: s });
}
