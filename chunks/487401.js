"use strict";
n.d(t, { B: () => eg, T: () => ep }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(735438),
    r = n(837381),
    a = n(884362),
    o = n(311907),
    c = n(397927),
    d = n(951001),
    u = n(820284),
    h = n(775602),
    A = n(793574),
    m = n(688810),
    p = n(309698),
    g = n(915089),
    _ = n(5180),
    f = n(227004),
    x = n(581007),
    C = n(522435),
    E = n(781862),
    I = n(637248),
    N = n(395504),
    b = n(947461),
    S = n(770904),
    T = n(357746),
    v = n(816288),
    y = n(455234),
    j = n(649247),
    R = n(787541),
    O = n(482361),
    L = n(95701),
    M = n(734057),
    D = n(72314),
    G = n(808728),
    U = n(967198),
    P = n(32603),
    w = n(960755),
    k = n(866842),
    V = n(633965),
    B = n(33324),
    H = n(823142),
    F = n(884452),
    K = n(137089),
    W = n(506792),
    Y = n(724591),
    z = n(573956),
    q = n(141515),
    X = n(463938),
    Q = n(779881),
    J = n(998986),
    $ = n(732077),
    Z = n(689025),
    ee = n(698126),
    et = n(889806),
    en = n(923432),
    ei = n(815213),
    es = n(530484),
    el = n(422361),
    er = n(281405);
n(83766);
var ea = n(652215),
    eo = n(746080);
n(131955);
var ec = n(985018),
    ed = n(665606),
    eu = n(495401);
function eh(e) {
    return (
        c.LU0.modules.channels.NAME_LINE_HEIGHT.resolve({ density: e }) +
        2 * c.LU0.space.SPACE_XXS.resolve({ density: e }) +
        2
    );
}
class eA extends s.PureComponent {
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
        this.setState({ initialized: !0 }), (0, V.Ei)(this.getVisibleChannels);
    }
    componentWillUnmount() {
        this.updateChannelListScroll.cancel();
    }
    componentDidUpdate(e, t) {
        let { scrollToChannel: n, guildId: i, selectedChannelId: s } = this.props,
            { initialized: l } = this.state,
            { scrollTop: r } = D.A.getGuildDimensions(i);
        null != n
            ? (this.scrollToChannel(n), d.A.clearChannelListScrollTo(i))
            : i !== e.guildId
              ? null != r && this.scrollTo(r)
              : s !== e.selectedChannelId
                ? this.scrollToChannel(s)
                : !t.initialized &&
                  l &&
                  (null == r && null != s
                      ? this.scrollToChannel(s, !1, 8, this.handleListScroll)
                      : this.scrollTo(r ?? 0, this.handleListScroll)),
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
                    { density: r = "default" } = this.props,
                    a = l.threadOffset * eh(r);
                s.scrollIntoViewRect({ start: e + a, end: e + a + eh(r), padding: n, animate: t, callback: i });
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
                r = i.getScrollerState();
            if ((t && n + l < r.scrollTop + r.offsetHeight) || (!t && n > r.scrollTop)) return !0;
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
                    [s, r] = e.getScrollPosition(l.section, l.row);
                null != t && s + r < n.scrollTop + n.offsetHeight && s > n.scrollTop && i.push(t.channel.id);
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
                if (i < P.bK || e.isPlaceholderRow(i, s)) return !1;
                let l = e.getChannelFromSectionRow(i, s);
                if (null == l) return !1;
                let { channel: r, category: a } = l;
                return (
                    !!(0, L.ig)(r.record.type) &&
                    (!a.isCollapsed || !a.isMuted) &&
                    !r.isMuted &&
                    !!t.isItemVisible(i, s, !0) &&
                    (0, y.Y)(r.record)
                );
            })
        );
    }
    updateChannelListScroll = (0, l.throttle)((e) => {
        d.A.updateChannelListScroll(this.props.guildId, e, this.getVisibleChannels());
    }, 100);
    getSectionHeight = (e) => {
        let { guild: t, guildChannels: n, density: i } = this.props;
        return (0, F.sc)(e, t, n, i);
    };
    getSectionFooterHeight = (e) => {
        let {
            guildChannels: t,
            voiceStates: n,
            selectedVoiceChannelId: i,
            selectedChannelId: s,
            optInEnabled: l,
            guildChannelsVersion: r,
        } = this.props;
        return (0, K.fz)({
            sectionIndex: e,
            guildChannels: t,
            guildChannelsVersion: r,
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
                density: r = "default",
            } = this.props,
            a = eh(r);
        if (e === P.PU) {
            let e = n.getGuildActionSection();
            return e.isEmpty()
                ? 0
                : e.getRow(t) === er.n.GUILD_PREMIUM_PROGRESS_BAR
                  ? e.getRows().length > 1
                      ? 69
                      : 57
                  : a;
        }
        if (n.isPlaceholderRow(e, t)) return 0;
        let o = n.getChannelFromSectionRow(e, t);
        if (null == o) return 0;
        let { channel: d, category: u } = o;
        if (d.record.type === ea.rbe.GUILD_CATEGORY) return 40;
        for (let e of d.threadIds) {
            let { density: t = "default" } = this.props;
            a += eh(t);
            let n = i[d.id];
            null != n && n.length > 0 && (a += l === e ? 32 * n.length : 32);
        }
        if (d.record.isGuildVoice()) {
            let e = i[d.id];
            if (null != e && e.length > 0) {
                let t = 32 * e.length;
                (d.isCollapsed || u.isCollapsed) && (t = 32), (a += t + c.LU0.space.SPACE_XS.resolve({ density: r }));
                let { enableHangoutWindow: n } = (0, x.kY)({ guildId: d.record.guild_id, location: "ChannelList" });
                if (n) {
                    let e = p.A.getChannelStatus(d.record);
                    (0, C.TP)(e) ? (a += 134) : l === d.id && (a += 44);
                }
            }
            d.id === this.props.rtcConnectedChannelId && (a += 32 * this.props.rtcDesyncedVoiceStatesCount);
        }
        if (((null != d.subtitle || l === d.id) && (a += 16), d.record.isGuildStageVoice())) {
            let e = i[d.id] ?? [],
                t = s[d.id] ?? [];
            if (null != e && e.length > 0) {
                let e = 32 * t.length;
                d.isCollapsed || u.isCollapsed ? (e = Math.ceil(e / 5)) : (e += 32), (a += e + 8);
            }
        }
        return a;
    };
    dismissRecents = () => {
        let { guild: e, guildChannels: t, selectedChannelId: n } = this.props,
            i = t.getCategoryFromSection(t.recentsSectionNumber);
        if (null == i) return;
        let s = null,
            l = i.getShownChannelAndThreadIds();
        null != n && l.includes(n) && (s = (0, I.xb)(t)), (0, I.DD)(e.id, l, s);
    };
    renderSection = (e) => {
        let { section: t } = e,
            {
                guildChannels: n,
                guildChannelsVersion: s,
                guild: l,
                selectedChannelId: r,
                disableManageChannels: a,
            } = this.props;
        return (0, i.jsx)(
            F.Ay,
            {
                sectionIndex: t,
                guild: l,
                guildChannels: n,
                guildChannelsVersion: s,
                selectedChannelId: r,
                disableManageChannels: a,
            },
            (0, F.is)(t, n),
        );
    };
    renderRow = (e) => {
        let { section: t, row: n } = e,
            {
                guild: l,
                selectedChannel: r,
                selectedChannelId: a,
                selectedVoiceChannel: o,
                selectedVoiceChannelId: c,
                guildChannels: d,
                voiceStates: u,
                disableManageChannels: h,
                stageChannelSpeakerVoiceStates: A,
                optInEnabled: m,
                withGuildIcon: p,
            } = this.props;
        if (t === P.PU) {
            let e = d.getGuildActionSection(),
                t = e.getRow(n);
            if (null == t) return null;
            switch (t) {
                case er.n.GUILD_HUB_HEADER_OPTIONS:
                    return (0, i.jsx)(
                        E.A,
                        { guild: l, channel: G.Ay.getDefaultChannel(l.id) },
                        er.n.GUILD_HUB_HEADER_OPTIONS,
                    );
                case er.n.GUILD_PREMIUM_PROGRESS_BAR:
                    let s = e.getRows();
                    return (0, i.jsx)(v.A, { guild: l, withMargin: s.length > 1 }, er.n.GUILD_PREMIUM_PROGRESS_BAR);
                case er.n.GUILD_HOME:
                    return (0, i.jsx)(q.A, { guild: l, selected: a === eo.VV.GUILD_HOME }, er.n.GUILD_HOME);
                case er.n.GUILD_SCHEDULED_EVENTS:
                    return (0, i.jsx)(
                        es.A,
                        { guild: l, selected: a === er.n.GUILD_SCHEDULED_EVENTS },
                        er.n.GUILD_SCHEDULED_EVENTS,
                    );
                case er.n.GUILD_ROLE_SUBSCRIPTIONS:
                    return (0, i.jsx)(
                        Q.A,
                        { guild: l, selected: a === eo.VV.ROLE_SUBSCRIPTIONS },
                        er.n.GUILD_ROLE_SUBSCRIPTIONS,
                    );
                case er.n.GUILD_SHOP:
                    return (0, i.jsx)(J.A, { guild: l, selected: a === eo.VV.GUILD_SHOP }, er.n.GUILD_SHOP);
                case er.n.GUILD_GAME_SHOP:
                    return (0, i.jsx)(Y.A, { guild: l, selected: a === eo.VV.GAME_SHOP }, er.n.GUILD_GAME_SHOP);
                case er.n.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR:
                    return (0, i.jsx)(X.j, { guild: l });
                case er.n.CHANNELS_AND_ROLES:
                    return (0, i.jsx)(
                        z.G,
                        { guild: l, selected: a === eo.VV.CHANNEL_BROWSER || a === eo.VV.CUSTOMIZE_COMMUNITY },
                        er.n.CHANNELS_AND_ROLES,
                    );
                case er.n.GUILD_DIRECTORY:
                    return (0, i.jsx)(
                        W.A,
                        { guild: l, selectedChannelId: a, disableManageChannels: h },
                        er.n.GUILD_DIRECTORY,
                    );
                case er.n.GUILD_MOD_DASH_MEMBER_SAFETY:
                    return (0, i.jsx)(
                        f.A,
                        { guild: l, selected: a === eo.VV.MEMBER_SAFETY },
                        er.n.GUILD_MOD_DASH_MEMBER_SAFETY,
                    );
                case er.n.GUILD_BOOSTS:
                    return (0, i.jsx)(T.A, { guildId: l.id, selected: a === eo.VV.GUILD_BOOSTS }, er.n.GUILD_BOOSTS);
                case er.n.GAME_SERVERS:
                    return (0, i.jsx)(S.A, { guildId: l.id, selected: a === eo.VV.GAME_SERVERS }, er.n.GAME_SERVERS);
                case er.n.GAME_SERVERS_EMPTY:
                    return (0, i.jsx)(
                        b.A,
                        { guildId: l.id, selected: a === eo.VV.GAME_SERVERS },
                        er.n.GAME_SERVERS_EMPTY,
                    );
                default:
                    return null;
            }
        }
        if (d.isPlaceholderRow(t, n)) return null;
        let g = d.getChannelFromSectionRow(t, n);
        if (null == g) return null;
        let { category: _, channel: x } = g,
            C = _ instanceof P.xu,
            I = x.record,
            N = `${t}${x.id}`;
        switch (I.type) {
            case ea.rbe.GUILD_ANNOUNCEMENT:
            case ea.rbe.GUILD_TEXT:
            case ea.rbe.GUILD_FORUM:
            case ea.rbe.GUILD_MEDIA:
            case ea.rbe.DM:
            case ea.rbe.GROUP_DM:
                return (0, i.jsxs)(
                    s.Fragment,
                    {
                        children: [
                            (0, i.jsx)(et.A, {
                                channel: I,
                                guild: l,
                                position: x.position,
                                selected: a === x.id,
                                muted: x.isMuted,
                                subtitle: x.subtitle,
                                disableManageChannels: h,
                                canBeNewChannel: m && t === d.recentsSectionNumber,
                                isFavoriteCategory: C,
                            }),
                            x.threadCount > 0
                                ? (0, i.jsx)($.A, {
                                      withGuildIcon: p,
                                      channel: I,
                                      sortedThreadIds: x.threadIds,
                                      selectedChannel: null != r && (r.id === x.id || r.parent_id === I.id) ? r : null,
                                      selectedVoiceChannelId: o?.parent_id === I.id ? c : null,
                                  })
                                : null,
                        ],
                    },
                    N,
                );
            case ea.rbe.GUILD_STAGE_VOICE:
                return (0, i.jsx)(
                    Z.A,
                    {
                        channel: I,
                        guild: l,
                        position: x.position,
                        selected: a === x.id,
                        connected: c === x.id,
                        collapsed: x.isCollapsed || _.isCollapsed,
                        voiceStates: u[x.id] ?? [],
                        speakerVoiceStates: A[x.id] ?? [],
                        disableManageChannels: h,
                        isFavoriteCategory: C,
                    },
                    N,
                );
            case ea.rbe.GUILD_VOICE:
                return (0, i.jsx)(
                    el.A,
                    {
                        channel: I,
                        guild: l,
                        position: x.position,
                        selected: a === x.id,
                        connected: c === x.id,
                        collapsed: x.isCollapsed || _.isCollapsed,
                        voiceStates: u[x.id],
                        subtitle: x.subtitle,
                        disableManageChannels: h,
                        showTutorial: x.isFirstVoiceChannel,
                        isFavoriteCategory: C,
                        withGuildIcon: p,
                    },
                    N,
                );
            case ea.rbe.GUILD_STORE:
                return (0, i.jsx)(ee.A, { channel: I, guild: l, position: x.position, selected: a === x.id }, N);
            case ea.rbe.GUILD_CATEGORY:
                if (t !== d.voiceChannelsSectionNumber) return null;
                return (0, i.jsx)(H.sM, { channel: I }, `readonly-${I.id}`);
            case ea.rbe.PUBLIC_THREAD:
            case ea.rbe.PRIVATE_THREAD:
            case ea.rbe.ANNOUNCEMENT_THREAD:
                return (0, i.jsx)(
                    et.A,
                    {
                        channel: I,
                        guild: l,
                        position: x.position,
                        selected: a === x.id,
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
                selectedChannelId: r,
                selectedVoiceChannelId: a,
                optInEnabled: o,
                guildId: c,
            } = this.props;
        return (0, i.jsx)(
            K.Ay,
            {
                guildId: c,
                guildChannels: n,
                guildChannelsVersion: s,
                sectionIndex: t,
                voiceStates: l,
                selectedChannelId: r,
                selectedVoiceChannelId: a,
                optInEnabled: o,
            },
            (0, K.tt)(t, n, o),
        );
    };
    renderTopUnread() {
        let { topMention: e, bottomUnread: t, bottomMention: n, isUnreadVisible: s } = this.state,
            { guildId: l, guildChannels: r, guildChannelsVersion: a } = this.props;
        return (0, i.jsx)("div", {
            className: eu.Eo,
            children: (0, i.jsx)(ei.A, {
                ref: this.unreadTopRef,
                textUnread: ec.intl.string(ec.t.FCRiT3),
                textMention: ec.intl.string(ec.t["8zH0LJ"]),
                hide: null == e && (s || null != t || null != n),
                className: eu.Vq,
                barClassName: eu.bu,
                guildId: l,
                guildChannels: r,
                guildChannelsVersion: a,
                isVisible: this.isChannelVisible,
                onJumpTo: this.jumpToChannelWithMentionsAndUnreads,
                onCalculate: this.handleUnreadCalculate,
            }),
        });
    }
    renderBottomUnread() {
        let { guildId: e, guildChannels: t, guildChannelsVersion: n } = this.props,
            { bottomMention: s, isUnreadVisible: l } = this.state;
        return (0, i.jsx)(ei.A, {
            reverse: !0,
            ref: this.unreadBottomRef,
            textUnread: ec.intl.string(ec.t.FCRiT3),
            textMention: ec.intl.string(ec.t["8zH0LJ"]),
            hide: null == s && l,
            className: eu.di,
            barClassName: eu.bu,
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
        if (e !== P.PU) {
            if (null == t)
                return e === P.HP
                    ? "favorites-header"
                    : e === n.recentsSectionNumber
                      ? "recents-header"
                      : e === n.voiceChannelsSectionNumber
                        ? "voice-channels"
                        : e === P.bK
                          ? "uncategorized-header"
                          : n.getNamedCategoryFromSection(e)?.id;
            if (!n.isPlaceholderRow(e, t)) return n.getChannelFromSectionRow(e, t)?.channel?.id;
        }
    };
    renderList() {
        let { guildChannels: e, guildBanner: t, selectedGuildId: n, density: s } = this.props,
            l = {};
        (0, _.ai)(n) && (l["data-favorites"] = !0);
        let { ref: r, ...a } = this.context,
            o = 0;
        null != t && (o = 84);
        let d = "compact" === s ? 8 : 12;
        return (0, i.jsx)(c.skg, {
            children: (t) =>
                (0, i.jsx)(
                    c.B8B,
                    {
                        ref: this.setListRef,
                        className: eu.XG,
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
                        innerAriaLabel: ec.intl.string(ec.t.OGiMXJ),
                        innerTag: "ul",
                        getAnchorId: this.getAnchorId,
                        ...a,
                        ...t,
                        ...l,
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
        return (0, i.jsx)(g.V0, {
            children: (l) =>
                (0, i.jsx)(c.Fmo, {
                    component: (0, i.jsx)(c.AC4, {
                        children: (0, i.jsx)(c.H, { id: l, children: ec.intl.string(ec.t.OGiMXJ) }),
                    }),
                    children: n
                        ? (0, i.jsxs)(s.Fragment, {
                              children: [
                                  (0, i.jsx)("div", {
                                      className: eu.Eo,
                                      children: (0, i.jsx)(en.A, {
                                          position: "top",
                                          guildChannels: e,
                                          guildChannelsVersion: t,
                                          jumpToVoiceChannels: this.jumpToVoiceChannels,
                                          jumpToChannel: this.jumpToChannel,
                                      }),
                                  }),
                                  this.renderList(),
                                  (0, i.jsx)(en.A, {
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
let em = (e) => {
    let { guildId: t, selectedChannelId: n, selectedVoiceChannelId: l } = e,
        c = (0, o.bG)([h.A], () => h.A.keyboardModeEnabled),
        { analyticsLocations: d } = (0, m.Ay)(A.A.GUILD_CHANNEL_LIST),
        p = (0, o.bG)([M.A], () => M.A.getChannel(n)),
        g = (0, o.bG)([M.A], () => M.A.getChannel(l)),
        _ = (0, o.bG)([U.A], () => U.A.getGuildId()),
        f = (0, N.jN)(t),
        x = s.useRef(null),
        C = s.useCallback((e, t) => {
            let n = x.current;
            null != n &&
                (ea.Ut1.test(t) || (0, eo.jq)(t)
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
        b = (0, a.Ay)({
            id: "channels",
            defaultFocused: n ?? void 0,
            isEnabled: c,
            setFocus: C,
            scrollToStart: E,
            scrollToEnd: I,
        }),
        S = b.setFocus;
    s.useEffect(() => {
        null != n && S(n);
    }, [n, S]);
    let T = (0, j.A)(t);
    return (0, i.jsx)(m.f5, {
        value: d,
        children: (0, i.jsx)(u.A, {
            section: ea.JJy.GUILD_CHANNEL_LIST,
            children: (0, i.jsx)(r.hD, {
                navigator: b,
                children: (0, i.jsx)(eA, {
                    ...e,
                    listNavigator: b,
                    ref: x,
                    selectedChannel: p,
                    selectedVoiceChannel: g,
                    stageChannelSpeakerVoiceStates: T,
                    selectedGuildId: _,
                    optInEnabled: f,
                }),
            }),
        }),
    });
};
function ep(e) {
    let { guildChannels: t, hasShownFavoritedChannels: n } = (0, k.Om)(),
        { density: s } = (0, c.wRf)();
    return n
        ? (0, i.jsx)(em, { ...e, guildChannels: t, guildChannelsVersion: 0, withGuildIcon: !1, density: s })
        : (0, i.jsx)("div", {
              className: eu.XG,
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
                                  children: ec.intl.string(ed.default["1n0TGE"]),
                              }),
                              (0, i.jsx)(c.Text, {
                                  variant: "text-sm/medium",
                                  color: "text-muted",
                                  children: ec.intl.string(ed.default.Wwzrs9),
                              }),
                          ],
                      }),
                      (0, i.jsx)("div", { className: eu.ts }),
                      (0, i.jsxs)("div", {
                          className: eu.MS,
                          "aria-hidden": "true",
                          children: [
                              (0, i.jsxs)("div", {
                                  className: eu.pS,
                                  children: [
                                      (0, i.jsx)(c.N$i, { size: "xs", color: c.LU0.colors.ICON_MUTED }),
                                      (0, i.jsx)("div", { className: eu.Qs }),
                                  ],
                              }),
                              (0, i.jsxs)("div", {
                                  className: eu.pS,
                                  children: [
                                      (0, i.jsx)(c.HKD, { size: "xs", color: c.LU0.colors.ICON_MUTED }),
                                      (0, i.jsx)("div", { className: eu.iR }),
                                  ],
                              }),
                              (0, i.jsxs)("div", {
                                  className: eu.pS,
                                  children: [
                                      (0, i.jsx)(c.oyn, { size: "xs", color: c.LU0.colors.ICON_MUTED }),
                                      (0, i.jsx)("div", { className: eu.Qs }),
                                  ],
                              }),
                          ],
                      }),
                  ],
              }),
          });
}
function eg(e) {
    let t = (0, B.A)(e.guild),
        n = (0, o.cf)([w.A], () => w.A.getGuild(e.guildId, { guildActionRows: t })),
        { density: s } = (0, c.wRf)();
    return (0, i.jsx)(em, { ...e, ...n, density: s });
}
