"use strict";
n.d(t, { B: () => eh, T: () => eu }), n(321073);
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
    p = n(915089),
    g = n(227004),
    _ = n(781862),
    f = n(637248),
    x = n(395504),
    C = n(947461),
    E = n(770904),
    I = n(357746),
    N = n(816288),
    b = n(455234),
    S = n(649247),
    T = n(787541),
    v = n(482361),
    y = n(95701),
    j = n(734057),
    R = n(72314),
    O = n(808728),
    L = n(967198),
    M = n(32603),
    D = n(960755),
    G = n(866842),
    U = n(633965),
    P = n(33324),
    w = n(823142),
    k = n(884452),
    V = n(137089),
    B = n(506792),
    H = n(724591),
    F = n(573956),
    K = n(141515),
    W = n(463938),
    Y = n(779881),
    z = n(998986),
    q = n(732077),
    X = n(689025),
    J = n(698126),
    Q = n(889806),
    $ = n(923432),
    Z = n(815213),
    ee = n(530484),
    et = n(422361),
    en = n(281405);
n(83766);
var ei = n(652215),
    es = n(746080),
    el = n(985018),
    ea = n(665606),
    er = n(495401);
function eo(e) {
    return (
        c.LU0.modules.channels.NAME_LINE_HEIGHT.resolve({ density: e }) +
        2 * c.LU0.space.SPACE_XXS.resolve({ density: e }) +
        2
    );
}
class ec extends s.PureComponent {
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
        this.setState({ initialized: !0 }), (0, U.Ei)(this.getVisibleChannels);
    }
    componentWillUnmount() {
        this.updateChannelListScroll.cancel();
    }
    componentDidUpdate(e, t) {
        let { scrollToChannel: n, guildId: i, selectedChannelId: s } = this.props,
            { initialized: l } = this.state,
            { scrollTop: a } = R.A.getGuildDimensions(i);
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
                    r = l.threadOffset * eo(a);
                s.scrollIntoViewRect({ start: e + r, end: e + r + eo(a), padding: n, animate: t, callback: i });
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
                if (i < M.bK || e.isPlaceholderRow(i, s)) return !1;
                let l = e.getChannelFromSectionRow(i, s);
                if (null == l) return !1;
                let { channel: a, category: r } = l;
                return (
                    !!(0, y.ig)(a.record.type) &&
                    (!r.isCollapsed || !r.isMuted) &&
                    !a.isMuted &&
                    !!t.isItemVisible(i, s, !0) &&
                    (0, b.Y)(a.record)
                );
            })
        );
    }
    updateChannelListScroll = (0, l.throttle)((e) => {
        d.A.updateChannelListScroll(this.props.guildId, e, this.getVisibleChannels());
    }, 100);
    getSectionHeight = (e) => {
        let { guild: t, guildChannels: n, density: i } = this.props;
        return (0, k.sc)(e, t, n, i);
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
        return (0, V.fz)({
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
            r = eo(a);
        if (e === M.PU) {
            let e = n.getGuildActionSection();
            return e.isEmpty()
                ? 0
                : e.getRow(t) === en.n.GUILD_PREMIUM_PROGRESS_BAR
                  ? e.getRows().length > 1
                      ? 69
                      : 57
                  : r;
        }
        if (n.isPlaceholderRow(e, t)) return 0;
        let o = n.getChannelFromSectionRow(e, t);
        if (null == o) return 0;
        let { channel: d, category: u } = o;
        if (d.record.type === ei.rbe.GUILD_CATEGORY) return 40;
        for (let e of d.threadIds) {
            let { density: t = "default" } = this.props;
            r += eo(t);
            let n = i[d.id];
            null != n && n.length > 0 && (r += l === e ? 32 * n.length : 32);
        }
        if (d.record.isGuildVoice()) {
            let e = i[d.id];
            if (null != e && e.length > 0) {
                let t = 32 * e.length;
                (d.isCollapsed || u.isCollapsed) && (t = 32), (r += t + c.LU0.space.SPACE_XS.resolve({ density: a }));
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
        null != n && l.includes(n) && (s = (0, f.xb)(t)), (0, f.DD)(e.id, l, s);
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
            k.Ay,
            {
                sectionIndex: t,
                guild: l,
                guildChannels: n,
                guildChannelsVersion: s,
                selectedChannelId: a,
                disableManageChannels: r,
            },
            (0, k.is)(t, n),
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
        if (t === M.PU) {
            let e = d.getGuildActionSection(),
                t = e.getRow(n);
            if (null == t) return null;
            switch (t) {
                case en.n.GUILD_HUB_HEADER_OPTIONS:
                    return (0, i.jsx)(
                        _.A,
                        { guild: l, channel: O.Ay.getDefaultChannel(l.id) },
                        en.n.GUILD_HUB_HEADER_OPTIONS,
                    );
                case en.n.GUILD_PREMIUM_PROGRESS_BAR:
                    let s = e.getRows();
                    return (0, i.jsx)(N.A, { guild: l, withMargin: s.length > 1 }, en.n.GUILD_PREMIUM_PROGRESS_BAR);
                case en.n.GUILD_HOME:
                    return (0, i.jsx)(K.A, { guild: l, selected: r === es.VV.GUILD_HOME }, en.n.GUILD_HOME);
                case en.n.GUILD_SCHEDULED_EVENTS:
                    return (0, i.jsx)(
                        ee.A,
                        { guild: l, selected: r === en.n.GUILD_SCHEDULED_EVENTS },
                        en.n.GUILD_SCHEDULED_EVENTS,
                    );
                case en.n.GUILD_ROLE_SUBSCRIPTIONS:
                    return (0, i.jsx)(
                        Y.A,
                        { guild: l, selected: r === es.VV.ROLE_SUBSCRIPTIONS },
                        en.n.GUILD_ROLE_SUBSCRIPTIONS,
                    );
                case en.n.GUILD_SHOP:
                    return (0, i.jsx)(z.A, { guild: l, selected: r === es.VV.GUILD_SHOP }, en.n.GUILD_SHOP);
                case en.n.GUILD_GAME_SHOP:
                    return (0, i.jsx)(H.A, { guild: l, selected: r === es.VV.GAME_SHOP }, en.n.GUILD_GAME_SHOP);
                case en.n.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR:
                    return (0, i.jsx)(W.j, { guild: l });
                case en.n.CHANNELS_AND_ROLES:
                    return (0, i.jsx)(
                        F.G,
                        { guild: l, selected: r === es.VV.CHANNEL_BROWSER || r === es.VV.CUSTOMIZE_COMMUNITY },
                        en.n.CHANNELS_AND_ROLES,
                    );
                case en.n.GUILD_DIRECTORY:
                    return (0, i.jsx)(
                        B.A,
                        { guild: l, selectedChannelId: r, disableManageChannels: h },
                        en.n.GUILD_DIRECTORY,
                    );
                case en.n.GUILD_MOD_DASH_MEMBER_SAFETY:
                    return (0, i.jsx)(
                        g.A,
                        { guild: l, selected: r === es.VV.MEMBER_SAFETY },
                        en.n.GUILD_MOD_DASH_MEMBER_SAFETY,
                    );
                case en.n.GUILD_BOOSTS:
                    return (0, i.jsx)(I.A, { guildId: l.id, selected: r === es.VV.GUILD_BOOSTS }, en.n.GUILD_BOOSTS);
                case en.n.GAME_SERVERS:
                    return (0, i.jsx)(E.A, { guildId: l.id, selected: r === es.VV.GAME_SERVERS }, en.n.GAME_SERVERS);
                case en.n.GAME_SERVERS_EMPTY:
                    return (0, i.jsx)(
                        C.A,
                        { guildId: l.id, selected: r === es.VV.GAME_SERVERS },
                        en.n.GAME_SERVERS_EMPTY,
                    );
                default:
                    return null;
            }
        }
        if (d.isPlaceholderRow(t, n)) return null;
        let f = d.getChannelFromSectionRow(t, n);
        if (null == f) return null;
        let { category: x, channel: b } = f,
            S = x instanceof M.xu,
            T = b.record,
            v = `${t}${b.id}`;
        switch (T.type) {
            case ei.rbe.GUILD_ANNOUNCEMENT:
            case ei.rbe.GUILD_TEXT:
            case ei.rbe.GUILD_FORUM:
            case ei.rbe.GUILD_MEDIA:
            case ei.rbe.DM:
            case ei.rbe.GROUP_DM:
                return (0, i.jsxs)(
                    s.Fragment,
                    {
                        children: [
                            (0, i.jsx)(Q.A, {
                                channel: T,
                                guild: l,
                                position: b.position,
                                selected: r === b.id,
                                muted: b.isMuted,
                                subtitle: b.subtitle,
                                disableManageChannels: h,
                                canBeNewChannel: m && t === d.recentsSectionNumber,
                                isFavoriteCategory: S,
                            }),
                            b.threadCount > 0
                                ? (0, i.jsx)(q.A, {
                                      withGuildIcon: p,
                                      channel: T,
                                      sortedThreadIds: b.threadIds,
                                      selectedChannel: null != a && (a.id === b.id || a.parent_id === T.id) ? a : null,
                                      selectedVoiceChannelId: o?.parent_id === T.id ? c : null,
                                  })
                                : null,
                        ],
                    },
                    v,
                );
            case ei.rbe.GUILD_STAGE_VOICE:
                return (0, i.jsx)(
                    X.A,
                    {
                        channel: T,
                        guild: l,
                        position: b.position,
                        selected: r === b.id,
                        connected: c === b.id,
                        collapsed: b.isCollapsed || x.isCollapsed,
                        voiceStates: u[b.id] ?? [],
                        speakerVoiceStates: A[b.id] ?? [],
                        disableManageChannels: h,
                        isFavoriteCategory: S,
                    },
                    v,
                );
            case ei.rbe.GUILD_VOICE:
                return (0, i.jsx)(
                    et.A,
                    {
                        channel: T,
                        guild: l,
                        position: b.position,
                        selected: r === b.id,
                        connected: c === b.id,
                        collapsed: b.isCollapsed || x.isCollapsed,
                        voiceStates: u[b.id],
                        subtitle: b.subtitle,
                        disableManageChannels: h,
                        showTutorial: b.isFirstVoiceChannel,
                        isFavoriteCategory: S,
                        withGuildIcon: p,
                    },
                    v,
                );
            case ei.rbe.GUILD_STORE:
                return (0, i.jsx)(J.A, { channel: T, guild: l, position: b.position, selected: r === b.id }, v);
            case ei.rbe.GUILD_CATEGORY:
                if (t !== d.voiceChannelsSectionNumber) return null;
                return (0, i.jsx)(w.sM, { channel: T }, `readonly-${T.id}`);
            case ei.rbe.PUBLIC_THREAD:
            case ei.rbe.PRIVATE_THREAD:
            case ei.rbe.ANNOUNCEMENT_THREAD:
                return (0, i.jsx)(
                    Q.A,
                    {
                        channel: T,
                        guild: l,
                        position: b.position,
                        selected: r === b.id,
                        muted: b.isMuted,
                        subtitle: b.subtitle,
                        disableManageChannels: h,
                        canBeNewChannel: !1,
                        isFavoriteCategory: !1,
                        forceTopLevelThread: !0,
                    },
                    v,
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
            V.Ay,
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
            (0, V.tt)(t, n, o),
        );
    };
    renderTopUnread() {
        let { topMention: e, bottomUnread: t, bottomMention: n, isUnreadVisible: s } = this.state,
            { guildId: l, guildChannels: a, guildChannelsVersion: r } = this.props;
        return (0, i.jsx)("div", {
            className: er.Eo,
            children: (0, i.jsx)(Z.A, {
                ref: this.unreadTopRef,
                textUnread: el.intl.string(el.t.FCRiT3),
                textMention: el.intl.string(el.t["8zH0LJ"]),
                hide: null == e && (s || null != t || null != n),
                className: er.Vq,
                barClassName: er.bu,
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
        return (0, i.jsx)(Z.A, {
            reverse: !0,
            ref: this.unreadBottomRef,
            textUnread: el.intl.string(el.t.FCRiT3),
            textMention: el.intl.string(el.t["8zH0LJ"]),
            hide: null == s && l,
            className: er.di,
            barClassName: er.bu,
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
        if (e !== M.PU) {
            if (null == t)
                return e === M.HP
                    ? "favorites-header"
                    : e === n.recentsSectionNumber
                      ? "recents-header"
                      : e === n.voiceChannelsSectionNumber
                        ? "voice-channels"
                        : e === M.bK
                          ? "uncategorized-header"
                          : n.getNamedCategoryFromSection(e)?.id;
            if (!n.isPlaceholderRow(e, t)) return n.getChannelFromSectionRow(e, t)?.channel?.id;
        }
    };
    renderList() {
        let { guildChannels: e, guildBanner: t, selectedGuildId: n, density: s } = this.props,
            l = {};
        n === ei.YYv && (l["data-favorites"] = !0);
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
                        className: er.XG,
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
                        innerAriaLabel: el.intl.string(el.t.OGiMXJ),
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
        if (!v.A.shouldShow("voice-conversations")) return;
        let { guildChannels: e } = this.props,
            t = e.getFirstVoiceChannel();
        if (null == t) return void T.X8("voice-conversations");
        let n = this._list;
        if (null != n)
            for (let { section: e, row: i } of this.getSectionRowsFromChannel(t.id))
                n.isItemVisible(e, i) || T.X8("voice-conversations");
    };
    render() {
        let { guildChannels: e, guildChannelsVersion: t, showNewUnreadsBar: n } = this.props;
        return (0, i.jsx)(p.V0, {
            children: (l) =>
                (0, i.jsx)(c.Fmo, {
                    component: (0, i.jsx)(c.AC4, {
                        children: (0, i.jsx)(c.H, { id: l, children: el.intl.string(el.t.OGiMXJ) }),
                    }),
                    children: n
                        ? (0, i.jsxs)(s.Fragment, {
                              children: [
                                  (0, i.jsx)("div", {
                                      className: er.Eo,
                                      children: (0, i.jsx)($.A, {
                                          position: "top",
                                          guildChannels: e,
                                          guildChannelsVersion: t,
                                          jumpToVoiceChannels: this.jumpToVoiceChannels,
                                          jumpToChannel: this.jumpToChannel,
                                      }),
                                  }),
                                  this.renderList(),
                                  (0, i.jsx)($.A, {
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
let ed = (e) => {
    let { guildId: t, selectedChannelId: n, selectedVoiceChannelId: l } = e,
        c = (0, o.bG)([h.A], () => h.A.keyboardModeEnabled),
        { analyticsLocations: d } = (0, m.Ay)(A.A.GUILD_CHANNEL_LIST),
        p = (0, o.bG)([j.A], () => j.A.getChannel(n)),
        g = (0, o.bG)([j.A], () => j.A.getChannel(l)),
        _ = (0, o.bG)([L.A], () => L.A.getGuildId()),
        f = (0, x.jN)(t),
        C = s.useRef(null),
        E = s.useCallback((e, t) => {
            let n = C.current;
            null != n &&
                (ei.Ut1.test(t) || (0, es.jq)(t)
                    ? n.scrollToChannel(t, !1, 16, () => {
                          requestAnimationFrame(() => document.querySelector(e)?.focus());
                      })
                    : document.querySelector(e)?.focus());
        }, []),
        I = s.useCallback(
            () =>
                new Promise((e) => {
                    let t = C.current;
                    if (null == t) return e();
                    t.scrollTo(0, () => requestAnimationFrame(() => e()));
                }),
            [],
        ),
        N = s.useCallback(
            () =>
                new Promise((e) => {
                    let t = C.current;
                    if (null == t) return e();
                    t.scrollTo(Number.MAX_SAFE_INTEGER, () => requestAnimationFrame(() => e()));
                }),
            [],
        ),
        b = (0, r.Ay)({
            id: "channels",
            defaultFocused: n ?? void 0,
            isEnabled: c,
            setFocus: E,
            scrollToStart: I,
            scrollToEnd: N,
        }),
        T = b.setFocus;
    s.useEffect(() => {
        null != n && T(n);
    }, [n, T]);
    let v = (0, S.A)(t);
    return (0, i.jsx)(m.f5, {
        value: d,
        children: (0, i.jsx)(u.A, {
            section: ei.JJy.GUILD_CHANNEL_LIST,
            children: (0, i.jsx)(a.hD, {
                navigator: b,
                children: (0, i.jsx)(ec, {
                    ...e,
                    listNavigator: b,
                    ref: C,
                    selectedChannel: p,
                    selectedVoiceChannel: g,
                    stageChannelSpeakerVoiceStates: v,
                    selectedGuildId: _,
                    optInEnabled: f,
                }),
            }),
        }),
    });
};
function eu(e) {
    let { guildChannels: t, hasShownFavoritedChannels: n } = (0, G.Om)(),
        { density: s } = (0, c.wRf)();
    return n
        ? (0, i.jsx)(ed, { ...e, guildChannels: t, guildChannelsVersion: 0, withGuildIcon: !1, density: s })
        : (0, i.jsx)("div", {
              className: er.XG,
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
                                  children: el.intl.string(ea.default["1n0TGE"]),
                              }),
                              (0, i.jsx)(c.Text, {
                                  variant: "text-sm/medium",
                                  color: "text-muted",
                                  children: el.intl.string(ea.default.Wwzrs9),
                              }),
                          ],
                      }),
                      (0, i.jsx)("div", { className: er.ts }),
                      (0, i.jsxs)("div", {
                          className: er.MS,
                          "aria-hidden": "true",
                          children: [
                              (0, i.jsxs)("div", {
                                  className: er.pS,
                                  children: [
                                      (0, i.jsx)(c.N$i, { size: "xs", color: c.LU0.colors.ICON_MUTED }),
                                      (0, i.jsx)("div", { className: er.Qs }),
                                  ],
                              }),
                              (0, i.jsxs)("div", {
                                  className: er.pS,
                                  children: [
                                      (0, i.jsx)(c.HKD, { size: "xs", color: c.LU0.colors.ICON_MUTED }),
                                      (0, i.jsx)("div", { className: er.iR }),
                                  ],
                              }),
                              (0, i.jsxs)("div", {
                                  className: er.pS,
                                  children: [
                                      (0, i.jsx)(c.oyn, { size: "xs", color: c.LU0.colors.ICON_MUTED }),
                                      (0, i.jsx)("div", { className: er.Qs }),
                                  ],
                              }),
                          ],
                      }),
                  ],
              }),
          });
}
function eh(e) {
    let t = (0, P.A)(e.guild),
        n = (0, o.cf)([D.A], () => D.A.getGuild(e.guildId, { guildActionRows: t })),
        { density: s } = (0, c.wRf)();
    return (0, i.jsx)(ed, { ...e, ...n, density: s });
}
