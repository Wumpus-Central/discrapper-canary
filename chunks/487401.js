"use strict";
n.d(t, { B: () => eh, T: () => eu }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(735438),
    a = n.n(l),
    r = n(837381),
    o = n(884362),
    c = n(311907),
    d = n(397927),
    u = n(951001),
    h = n(820284),
    A = n(775602),
    m = n(793574),
    p = n(688810),
    g = n(915089),
    _ = n(227004),
    f = n(781862),
    x = n(637248),
    C = n(395504),
    E = n(947461),
    I = n(770904),
    N = n(357746),
    b = n(816288),
    S = n(455234),
    T = n(649247),
    v = n(787541),
    y = n(482361),
    j = n(95701),
    R = n(734057),
    O = n(72314),
    L = n(808728),
    M = n(967198),
    D = n(32603),
    G = n(960755),
    U = n(866842),
    P = n(633965),
    w = n(33324),
    k = n(823142),
    V = n(884452),
    B = n(137089),
    H = n(506792),
    F = n(724591),
    K = n(573956),
    W = n(141515),
    Y = n(463938),
    z = n(779881),
    q = n(998986),
    X = n(732077),
    J = n(689025),
    Q = n(698126),
    $ = n(889806),
    Z = n(923432),
    ee = n(815213),
    et = n(530484),
    en = n(422361),
    ei = n(281405);
n(83766);
var es = n(652215),
    el = n(746080),
    ea = n(985018),
    er = n(495401);
function eo(e) {
    return (
        d.LU0.modules.channels.NAME_LINE_HEIGHT.resolve({ density: e }) +
        2 * d.LU0.space.SPACE_XXS.resolve({ density: e }) +
        2
    );
}
class ec extends s.PureComponent {
    static contextType = r.nC;
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
        this.setState({ initialized: !0 }), (0, P.Ei)(this.getVisibleChannels);
    }
    componentWillUnmount() {
        this.updateChannelListScroll.cancel();
    }
    componentDidUpdate(e, t) {
        let { scrollToChannel: n, guildId: i, selectedChannelId: s } = this.props,
            { initialized: l } = this.state,
            { scrollTop: a } = O.A.getGuildDimensions(i);
        null != n
            ? (this.scrollToChannel(n), u.A.clearChannelListScrollTo(i))
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
            if ((0, d.ogc)(l) && l.section >= this.props.guildChannels.favoritesSectionNumber) {
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
                if (i < D.bK || e.isPlaceholderRow(i, s)) return !1;
                let l = e.getChannelFromSectionRow(i, s);
                if (null == l) return !1;
                let { channel: a, category: r } = l;
                return (
                    !!(0, j.ig)(a.record.type) &&
                    (!r.isCollapsed || !r.isMuted) &&
                    !a.isMuted &&
                    !!t.isItemVisible(i, s, !0) &&
                    (0, S.Y)(a.record)
                );
            })
        );
    }
    updateChannelListScroll = a().throttle((e) => {
        u.A.updateChannelListScroll(this.props.guildId, e, this.getVisibleChannels());
    }, 100);
    getSectionHeight = (e) => {
        let { guild: t, guildChannels: n, density: i } = this.props;
        return (0, V.sc)(e, t, n, i);
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
        return (0, B.fz)({
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
        if (e === D.PU) {
            let e = n.getGuildActionSection();
            return e.isEmpty()
                ? 0
                : e.getRow(t) === ei.n.GUILD_PREMIUM_PROGRESS_BAR
                  ? e.getRows().length > 1
                      ? 69
                      : 57
                  : r;
        }
        if (n.isPlaceholderRow(e, t)) return 0;
        let o = n.getChannelFromSectionRow(e, t);
        if (null == o) return 0;
        let { channel: c, category: u } = o;
        if (c.record.type === es.rbe.GUILD_CATEGORY) return 40;
        for (let e of c.threadIds) {
            let { density: t = "default" } = this.props;
            r += eo(t);
            let n = i[c.id];
            null != n && n.length > 0 && (r += l === e ? 32 * n.length : 32);
        }
        if (c.record.isGuildVoice()) {
            let e = i[c.id];
            if (null != e && e.length > 0) {
                let t = 32 * e.length;
                (c.isCollapsed || u.isCollapsed) && (t = 32), (r += t + d.LU0.space.SPACE_XS.resolve({ density: a }));
            }
            c.id === this.props.rtcConnectedChannelId && (r += 32 * this.props.rtcDesyncedVoiceStatesCount);
        }
        if (((null != c.subtitle || l === c.id) && (r += 16), c.record.isGuildStageVoice())) {
            let e = i[c.id] ?? [],
                t = s[c.id] ?? [];
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
        let s = null,
            l = i.getShownChannelAndThreadIds();
        null != n && l.includes(n) && (s = (0, x.xb)(t)), (0, x.DD)(e.id, l, s);
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
            V.Ay,
            {
                sectionIndex: t,
                guild: l,
                guildChannels: n,
                guildChannelsVersion: s,
                selectedChannelId: a,
                disableManageChannels: r,
            },
            (0, V.is)(t, n),
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
        if (t === D.PU) {
            let e = d.getGuildActionSection(),
                t = e.getRow(n);
            if (null == t) return null;
            switch (t) {
                case ei.n.GUILD_HUB_HEADER_OPTIONS:
                    return (0, i.jsx)(
                        f.A,
                        { guild: l, channel: L.Ay.getDefaultChannel(l.id) },
                        ei.n.GUILD_HUB_HEADER_OPTIONS,
                    );
                case ei.n.GUILD_PREMIUM_PROGRESS_BAR:
                    let s = e.getRows();
                    return (0, i.jsx)(b.A, { guild: l, withMargin: s.length > 1 }, ei.n.GUILD_PREMIUM_PROGRESS_BAR);
                case ei.n.GUILD_HOME:
                    return (0, i.jsx)(W.A, { guild: l, selected: r === el.VV.GUILD_HOME }, ei.n.GUILD_HOME);
                case ei.n.GUILD_SCHEDULED_EVENTS:
                    return (0, i.jsx)(
                        et.A,
                        { guild: l, selected: r === ei.n.GUILD_SCHEDULED_EVENTS },
                        ei.n.GUILD_SCHEDULED_EVENTS,
                    );
                case ei.n.GUILD_ROLE_SUBSCRIPTIONS:
                    return (0, i.jsx)(
                        z.A,
                        { guild: l, selected: r === el.VV.ROLE_SUBSCRIPTIONS },
                        ei.n.GUILD_ROLE_SUBSCRIPTIONS,
                    );
                case ei.n.GUILD_SHOP:
                    return (0, i.jsx)(q.A, { guild: l, selected: r === el.VV.GUILD_SHOP }, ei.n.GUILD_SHOP);
                case ei.n.GUILD_GAME_SHOP:
                    return (0, i.jsx)(F.A, { guild: l, selected: r === el.VV.GAME_SHOP }, ei.n.GUILD_GAME_SHOP);
                case ei.n.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR:
                    return (0, i.jsx)(Y.j, { guild: l });
                case ei.n.CHANNELS_AND_ROLES:
                    return (0, i.jsx)(
                        K.G,
                        { guild: l, selected: r === el.VV.CHANNEL_BROWSER || r === el.VV.CUSTOMIZE_COMMUNITY },
                        ei.n.CHANNELS_AND_ROLES,
                    );
                case ei.n.GUILD_DIRECTORY:
                    return (0, i.jsx)(
                        H.A,
                        { guild: l, selectedChannelId: r, disableManageChannels: h },
                        ei.n.GUILD_DIRECTORY,
                    );
                case ei.n.GUILD_MOD_DASH_MEMBER_SAFETY:
                    return (0, i.jsx)(
                        _.A,
                        { guild: l, selected: r === el.VV.MEMBER_SAFETY },
                        ei.n.GUILD_MOD_DASH_MEMBER_SAFETY,
                    );
                case ei.n.GUILD_BOOSTS:
                    return (0, i.jsx)(N.A, { guildId: l.id, selected: r === el.VV.GUILD_BOOSTS }, ei.n.GUILD_BOOSTS);
                case ei.n.GAME_SERVERS:
                    return (0, i.jsx)(I.A, { guildId: l.id, selected: r === el.VV.GAME_SERVERS }, ei.n.GAME_SERVERS);
                case ei.n.GAME_SERVERS_EMPTY:
                    return (0, i.jsx)(
                        E.A,
                        { guildId: l.id, selected: r === el.VV.GAME_SERVERS },
                        ei.n.GAME_SERVERS_EMPTY,
                    );
                default:
                    return null;
            }
        }
        if (d.isPlaceholderRow(t, n)) return null;
        let g = d.getChannelFromSectionRow(t, n);
        if (null == g) return null;
        let { category: x, channel: C } = g,
            S = x instanceof D.xu,
            T = C.record,
            v = `${t}${C.id}`;
        switch (T.type) {
            case es.rbe.GUILD_ANNOUNCEMENT:
            case es.rbe.GUILD_TEXT:
            case es.rbe.GUILD_FORUM:
            case es.rbe.GUILD_MEDIA:
            case es.rbe.DM:
            case es.rbe.GROUP_DM:
                return (0, i.jsxs)(
                    s.Fragment,
                    {
                        children: [
                            (0, i.jsx)($.A, {
                                channel: T,
                                guild: l,
                                position: C.position,
                                selected: r === C.id,
                                muted: C.isMuted,
                                subtitle: C.subtitle,
                                disableManageChannels: h,
                                canBeNewChannel: m && t === d.recentsSectionNumber,
                                isFavoriteCategory: S,
                            }),
                            C.threadCount > 0
                                ? (0, i.jsx)(X.A, {
                                      withGuildIcon: p,
                                      channel: T,
                                      sortedThreadIds: C.threadIds,
                                      selectedChannel: null != a && (a.id === C.id || a.parent_id === T.id) ? a : null,
                                      selectedVoiceChannelId: o?.parent_id === T.id ? c : null,
                                  })
                                : null,
                        ],
                    },
                    v,
                );
            case es.rbe.GUILD_STAGE_VOICE:
                return (0, i.jsx)(
                    J.A,
                    {
                        channel: T,
                        guild: l,
                        position: C.position,
                        selected: r === C.id,
                        connected: c === C.id,
                        collapsed: C.isCollapsed || x.isCollapsed,
                        voiceStates: u[C.id] ?? [],
                        speakerVoiceStates: A[C.id] ?? [],
                        disableManageChannels: h,
                        isFavoriteCategory: S,
                    },
                    v,
                );
            case es.rbe.GUILD_VOICE:
                return (0, i.jsx)(
                    en.A,
                    {
                        channel: T,
                        guild: l,
                        position: C.position,
                        selected: r === C.id,
                        connected: c === C.id,
                        collapsed: C.isCollapsed || x.isCollapsed,
                        voiceStates: u[C.id],
                        subtitle: C.subtitle,
                        disableManageChannels: h,
                        showTutorial: C.isFirstVoiceChannel,
                        isFavoriteCategory: S,
                        withGuildIcon: p,
                    },
                    v,
                );
            case es.rbe.GUILD_STORE:
                return (0, i.jsx)(Q.A, { channel: T, guild: l, position: C.position, selected: r === C.id }, v);
            case es.rbe.GUILD_CATEGORY:
                if (t !== d.voiceChannelsSectionNumber) return null;
                return (0, i.jsx)(k.sM, { channel: T }, `readonly-${T.id}`);
            case es.rbe.PUBLIC_THREAD:
            case es.rbe.PRIVATE_THREAD:
            case es.rbe.ANNOUNCEMENT_THREAD:
                return (0, i.jsx)(
                    $.A,
                    {
                        channel: T,
                        guild: l,
                        position: C.position,
                        selected: r === C.id,
                        muted: C.isMuted,
                        subtitle: C.subtitle,
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
            B.Ay,
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
            (0, B.tt)(t, n, o),
        );
    };
    renderTopUnread() {
        let { topMention: e, bottomUnread: t, bottomMention: n, isUnreadVisible: s } = this.state,
            { guildId: l, guildChannels: a, guildChannelsVersion: r } = this.props;
        return (0, i.jsx)("div", {
            className: er.Eo,
            children: (0, i.jsx)(ee.A, {
                ref: this.unreadTopRef,
                textUnread: ea.intl.string(ea.t.FCRiT3),
                textMention: ea.intl.string(ea.t["8zH0LJ"]),
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
        return (0, i.jsx)(ee.A, {
            reverse: !0,
            ref: this.unreadBottomRef,
            textUnread: ea.intl.string(ea.t.FCRiT3),
            textMention: ea.intl.string(ea.t["8zH0LJ"]),
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
        if (e !== D.PU) {
            if (null == t)
                return e === D.HP
                    ? "favorites-header"
                    : e === n.recentsSectionNumber
                      ? "recents-header"
                      : e === n.voiceChannelsSectionNumber
                        ? "voice-channels"
                        : e === D.bK
                          ? "uncategorized-header"
                          : n.getNamedCategoryFromSection(e)?.id;
            if (!n.isPlaceholderRow(e, t)) return n.getChannelFromSectionRow(e, t)?.channel?.id;
        }
    };
    renderList() {
        let { guildChannels: e, guildBanner: t, selectedGuildId: n, density: s } = this.props,
            l = {};
        n === es.YYv && (l["data-favorites"] = !0);
        let { ref: a, ...r } = this.context,
            o = 0;
        null != t && (o = 84);
        let c = "compact" === s ? 8 : 12;
        return (0, i.jsx)(d.skg, {
            children: (t) =>
                (0, i.jsx)(
                    d.B8B,
                    {
                        ref: this.setListRef,
                        className: er.XG,
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
                        innerAriaLabel: ea.intl.string(ea.t.OGiMXJ),
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
        if (!y.A.shouldShow("voice-conversations")) return;
        let { guildChannels: e } = this.props,
            t = e.getFirstVoiceChannel();
        if (null == t) return void v.X8("voice-conversations");
        let n = this._list;
        if (null != n)
            for (let { section: e, row: i } of this.getSectionRowsFromChannel(t.id))
                n.isItemVisible(e, i) || v.X8("voice-conversations");
    };
    render() {
        let { guildChannels: e, guildChannelsVersion: t, showNewUnreadsBar: n } = this.props;
        return (0, i.jsx)(g.V0, {
            children: (l) =>
                (0, i.jsx)(d.Fmo, {
                    component: (0, i.jsx)(d.AC4, {
                        children: (0, i.jsx)(d.H, { id: l, children: ea.intl.string(ea.t.OGiMXJ) }),
                    }),
                    children: n
                        ? (0, i.jsxs)(s.Fragment, {
                              children: [
                                  (0, i.jsx)("div", {
                                      className: er.Eo,
                                      children: (0, i.jsx)(Z.A, {
                                          position: "top",
                                          guildChannels: e,
                                          guildChannelsVersion: t,
                                          jumpToVoiceChannels: this.jumpToVoiceChannels,
                                          jumpToChannel: this.jumpToChannel,
                                      }),
                                  }),
                                  this.renderList(),
                                  (0, i.jsx)(Z.A, {
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
        a = (0, c.bG)([A.A], () => A.A.keyboardModeEnabled),
        { analyticsLocations: d } = (0, p.Ay)(m.A.GUILD_CHANNEL_LIST),
        u = (0, c.bG)([R.A], () => R.A.getChannel(n)),
        g = (0, c.bG)([R.A], () => R.A.getChannel(l)),
        _ = (0, c.bG)([M.A], () => M.A.getGuildId()),
        f = (0, C.jN)(t),
        x = s.useRef(null),
        E = s.useCallback((e, t) => {
            let n = x.current;
            null != n &&
                (es.Ut1.test(t) || (0, el.jq)(t)
                    ? n.scrollToChannel(t, !1, 16, () => {
                          requestAnimationFrame(() => document.querySelector(e)?.focus());
                      })
                    : document.querySelector(e)?.focus());
        }, []),
        I = s.useCallback(
            () =>
                new Promise((e) => {
                    let t = x.current;
                    if (null == t) return e();
                    t.scrollTo(0, () => requestAnimationFrame(() => e()));
                }),
            [],
        ),
        N = s.useCallback(
            () =>
                new Promise((e) => {
                    let t = x.current;
                    if (null == t) return e();
                    t.scrollTo(Number.MAX_SAFE_INTEGER, () => requestAnimationFrame(() => e()));
                }),
            [],
        ),
        b = (0, o.Ay)({
            id: "channels",
            defaultFocused: n ?? void 0,
            isEnabled: a,
            setFocus: E,
            scrollToStart: I,
            scrollToEnd: N,
        }),
        S = b.setFocus;
    s.useEffect(() => {
        null != n && S(n);
    }, [n, S]);
    let v = (0, T.A)(t);
    return (0, i.jsx)(p.f5, {
        value: d,
        children: (0, i.jsx)(h.A, {
            section: es.JJy.GUILD_CHANNEL_LIST,
            children: (0, i.jsx)(r.hD, {
                navigator: b,
                children: (0, i.jsx)(ec, {
                    ...e,
                    listNavigator: b,
                    ref: x,
                    selectedChannel: u,
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
    let t = (0, U.D)(),
        { density: n } = (0, d.wRf)();
    return (0, i.jsx)(ed, { ...e, guildChannels: t, guildChannelsVersion: 0, withGuildIcon: !1, density: n });
}
function eh(e) {
    let t = (0, w.A)(e.guild),
        n = (0, c.cf)([G.A], () => G.A.getGuild(e.guildId, { guildActionRows: t })),
        { density: s } = (0, d.wRf)();
    return (0, i.jsx)(ed, { ...e, ...n, density: s });
}
