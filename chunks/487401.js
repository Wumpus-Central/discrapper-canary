"use strict";
n.d(t, { B: () => em, T: () => eA }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(735438),
    r = n.n(l),
    a = n(837381),
    o = n(884362),
    c = n(311907),
    d = n(397927),
    u = n(951001),
    h = n(820284),
    A = n(775602),
    m = n(793574),
    p = n(688810),
    g = n(915089),
    _ = n(93055),
    f = n(957300),
    x = n(227004),
    C = n(781862),
    E = n(637248),
    I = n(395504),
    N = n(947461),
    b = n(770904),
    S = n(357746),
    T = n(816288),
    v = n(455234),
    y = n(649247),
    j = n(787541),
    R = n(482361),
    O = n(95701),
    L = n(734057),
    M = n(72314),
    D = n(808728),
    G = n(967198),
    U = n(32603),
    P = n(960755),
    w = n(866842),
    k = n(633965),
    V = n(33324),
    B = n(823142),
    H = n(884452),
    F = n(137089),
    K = n(506792),
    W = n(724591),
    Y = n(573956),
    z = n(141515),
    q = n(463938),
    X = n(779881),
    J = n(998986),
    Q = n(732077),
    $ = n(689025),
    Z = n(698126),
    ee = n(667425),
    et = n(923432),
    en = n(815213),
    ei = n(530484),
    es = n(422361),
    el = n(281405);
n(83766);
var er = n(652215),
    ea = n(746080),
    eo = n(985018),
    ec = n(343319);
function ed(e) {
    return (
        d.LU0.modules.channels.NAME_LINE_HEIGHT.resolve({ density: e }) +
        2 * d.LU0.space.SPACE_XXS.resolve({ density: e }) +
        2
    );
}
class eu extends s.PureComponent {
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
        this.setState({ initialized: !0 }), (0, k.Ei)(this.getVisibleChannels);
    }
    componentWillUnmount() {
        this.updateChannelListScroll.cancel();
    }
    componentDidUpdate(e, t) {
        let { scrollToChannel: n, guildId: i, selectedChannelId: s } = this.props,
            { initialized: l } = this.state,
            { scrollTop: r } = M.A.getGuildDimensions(i);
        null != n
            ? (this.scrollToChannel(n), u.A.clearChannelListScrollTo(i))
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
                    a = l.threadOffset * ed(r);
                s.scrollIntoViewRect({ start: e + a, end: e + a + ed(r), padding: n, animate: t, callback: i });
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
            if ((0, d.ogc)(l) && l.section >= this.props.guildChannels.favoritesSectionNumber) {
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
                if (i < U.bK || e.isPlaceholderRow(i, s)) return !1;
                let l = e.getChannelFromSectionRow(i, s);
                if (null == l) return !1;
                let { channel: r, category: a } = l;
                return (
                    !!(0, O.ig)(r.record.type) &&
                    (!a.isCollapsed || !a.isMuted) &&
                    !r.isMuted &&
                    !!t.isItemVisible(i, s, !0) &&
                    (0, v.Y)(r.record)
                );
            })
        );
    }
    updateChannelListScroll = r().throttle((e) => {
        u.A.updateChannelListScroll(this.props.guildId, e, this.getVisibleChannels());
    }, 100);
    getSectionHeight = (e) => {
        let { guild: t, guildChannels: n, density: i } = this.props;
        return (0, H.sc)(e, t, n, i);
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
        return (0, F.fz)({
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
            a = ed(r);
        if (e === U.PU) {
            let e = n.getGuildActionSection();
            return e.isEmpty()
                ? 0
                : e.getRow(t) === el.n.GUILD_PREMIUM_PROGRESS_BAR
                  ? e.getRows().length > 1
                      ? 69
                      : 57
                  : a;
        }
        if (n.isPlaceholderRow(e, t)) return 0;
        let o = n.getChannelFromSectionRow(e, t);
        if (null == o) return 0;
        let { channel: c, category: u } = o;
        if (c.record.type === er.rbe.GUILD_CATEGORY) return 40;
        for (let e of c.threadIds) {
            let { density: t = "default" } = this.props;
            a += ed(t);
            let n = i[c.id];
            null != n && n.length > 0 && (a += l === e ? 32 * n.length : 32);
        }
        if (c.record.isGuildVoice()) {
            let e = i[c.id];
            if (null != e && e.length > 0) {
                let t = 32 * e.length;
                (c.isCollapsed || u.isCollapsed) && (t = 32), (a += t + d.LU0.space.SPACE_XS.resolve({ density: r }));
            }
            c.id === this.props.rtcConnectedChannelId && (a += 32 * this.props.rtcDesyncedVoiceStatesCount);
        }
        if (((null != c.subtitle || l === c.id) && (a += 16), c.record.isGuildStageVoice())) {
            let e = i[c.id] ?? [],
                t = s[c.id] ?? [];
            if (null != e && e.length > 0) {
                let e = 32 * t.length;
                c.isCollapsed || u.isCollapsed ? (e = Math.ceil(e / 5)) : (e += 32), (a += e + 8);
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
        null != n && l.includes(n) && (s = (0, E.xb)(t)), (0, E.DD)(e.id, l, s);
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
            H.Ay,
            {
                sectionIndex: t,
                guild: l,
                guildChannels: n,
                guildChannelsVersion: s,
                selectedChannelId: r,
                disableManageChannels: a,
            },
            (0, H.is)(t, n),
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
        if (t === U.PU) {
            let e = d.getGuildActionSection(),
                t = e.getRow(n);
            if (null == t) return null;
            switch (t) {
                case el.n.GUILD_HUB_HEADER_OPTIONS:
                    return (0, i.jsx)(
                        C.A,
                        { guild: l, channel: D.Ay.getDefaultChannel(l.id) },
                        el.n.GUILD_HUB_HEADER_OPTIONS,
                    );
                case el.n.GUILD_PREMIUM_PROGRESS_BAR:
                    let s = e.getRows();
                    return (0, i.jsx)(T.A, { guild: l, withMargin: s.length > 1 }, el.n.GUILD_PREMIUM_PROGRESS_BAR);
                case el.n.GUILD_HOME:
                    return (0, i.jsx)(z.A, { guild: l, selected: a === ea.VV.GUILD_HOME }, el.n.GUILD_HOME);
                case el.n.GUILD_SCHEDULED_EVENTS:
                    return (0, i.jsx)(
                        ei.A,
                        { guild: l, selected: a === el.n.GUILD_SCHEDULED_EVENTS },
                        el.n.GUILD_SCHEDULED_EVENTS,
                    );
                case el.n.GUILD_ROLE_SUBSCRIPTIONS:
                    return (0, i.jsx)(
                        X.A,
                        { guild: l, selected: a === ea.VV.ROLE_SUBSCRIPTIONS },
                        el.n.GUILD_ROLE_SUBSCRIPTIONS,
                    );
                case el.n.GUILD_SHOP:
                    return (0, i.jsx)(J.A, { guild: l, selected: a === ea.VV.GUILD_SHOP }, el.n.GUILD_SHOP);
                case el.n.GUILD_GAME_SHOP:
                    return (0, i.jsx)(W.A, { guild: l, selected: a === ea.VV.GAME_SHOP }, el.n.GUILD_GAME_SHOP);
                case el.n.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR:
                    return (0, i.jsx)(q.j, { guild: l });
                case el.n.CHANNELS_AND_ROLES:
                    return (0, i.jsx)(
                        Y.G,
                        { guild: l, selected: a === ea.VV.CHANNEL_BROWSER || a === ea.VV.CUSTOMIZE_COMMUNITY },
                        el.n.CHANNELS_AND_ROLES,
                    );
                case el.n.GUILD_DIRECTORY:
                    return (0, i.jsx)(
                        K.A,
                        { guild: l, selectedChannelId: a, disableManageChannels: h },
                        el.n.GUILD_DIRECTORY,
                    );
                case el.n.GUILD_MOD_DASH_MEMBER_SAFETY:
                    return (0, i.jsx)(
                        x.A,
                        { guild: l, selected: a === ea.VV.MEMBER_SAFETY },
                        el.n.GUILD_MOD_DASH_MEMBER_SAFETY,
                    );
                case el.n.GUILD_BOOSTS:
                    return (0, i.jsx)(S.A, { guildId: l.id, selected: a === ea.VV.GUILD_BOOSTS }, el.n.GUILD_BOOSTS);
                case el.n.GAME_SERVERS:
                    return (0, i.jsx)(b.A, { guildId: l.id, selected: a === ea.VV.GAME_SERVERS }, el.n.GAME_SERVERS);
                case el.n.GAME_SERVERS_EMPTY:
                    return (0, i.jsx)(
                        N.A,
                        { guildId: l.id, selected: a === ea.VV.GAME_SERVERS },
                        el.n.GAME_SERVERS_EMPTY,
                    );
                default:
                    return null;
            }
        }
        if (d.isPlaceholderRow(t, n)) return null;
        let g = d.getChannelFromSectionRow(t, n);
        if (null == g) return null;
        let { category: _, channel: f } = g,
            E = _ instanceof U.xu,
            I = f.record,
            v = `${t}${f.id}`;
        switch (I.type) {
            case er.rbe.GUILD_ANNOUNCEMENT:
            case er.rbe.GUILD_TEXT:
            case er.rbe.GUILD_FORUM:
            case er.rbe.GUILD_MEDIA:
            case er.rbe.DM:
            case er.rbe.GROUP_DM:
                return (0, i.jsxs)(
                    s.Fragment,
                    {
                        children: [
                            (0, i.jsx)(ee.A, {
                                channel: I,
                                guild: l,
                                position: f.position,
                                selected: a === f.id,
                                muted: f.isMuted,
                                subtitle: f.subtitle,
                                disableManageChannels: h,
                                canBeNewChannel: m && t === d.recentsSectionNumber,
                                isFavoriteCategory: E,
                                withGuildIcon: p,
                            }),
                            f.threadCount > 0
                                ? (0, i.jsx)(Q.A, {
                                      withGuildIcon: p,
                                      channel: I,
                                      sortedThreadIds: f.threadIds,
                                      selectedChannel: null != r && (r.id === f.id || r.parent_id === I.id) ? r : null,
                                      selectedVoiceChannelId: o?.parent_id === I.id ? c : null,
                                  })
                                : null,
                        ],
                    },
                    v,
                );
            case er.rbe.GUILD_STAGE_VOICE:
                return (0, i.jsx)(
                    $.A,
                    {
                        channel: I,
                        guild: l,
                        position: f.position,
                        selected: a === f.id,
                        connected: c === f.id,
                        collapsed: f.isCollapsed || _.isCollapsed,
                        voiceStates: u[f.id] ?? [],
                        speakerVoiceStates: A[f.id] ?? [],
                        disableManageChannels: h,
                        isFavoriteCategory: E,
                    },
                    v,
                );
            case er.rbe.GUILD_VOICE:
                return (0, i.jsx)(
                    es.A,
                    {
                        channel: I,
                        guild: l,
                        position: f.position,
                        selected: a === f.id,
                        connected: c === f.id,
                        collapsed: f.isCollapsed || _.isCollapsed,
                        voiceStates: u[f.id],
                        subtitle: f.subtitle,
                        disableManageChannels: h,
                        showTutorial: f.isFirstVoiceChannel,
                        isFavoriteCategory: E,
                        withGuildIcon: p,
                    },
                    v,
                );
            case er.rbe.GUILD_STORE:
                return (0, i.jsx)(Z.A, { channel: I, guild: l, position: f.position, selected: a === f.id }, v);
            case er.rbe.GUILD_CATEGORY:
                if (t !== d.voiceChannelsSectionNumber) return null;
                return (0, i.jsx)(B.sM, { channel: I }, `readonly-${I.id}`);
            case er.rbe.PUBLIC_THREAD:
            case er.rbe.PRIVATE_THREAD:
            case er.rbe.ANNOUNCEMENT_THREAD:
                return (0, i.jsx)(
                    ee.A,
                    {
                        channel: I,
                        guild: l,
                        position: f.position,
                        selected: a === f.id,
                        muted: f.isMuted,
                        subtitle: f.subtitle,
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
                selectedChannelId: r,
                selectedVoiceChannelId: a,
                optInEnabled: o,
                guildId: c,
            } = this.props;
        return (0, i.jsx)(
            F.Ay,
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
            (0, F.tt)(t, n, o),
        );
    };
    renderTopUnread() {
        let { topMention: e, bottomUnread: t, bottomMention: n, isUnreadVisible: s } = this.state,
            { guildId: l, guildChannels: r, guildChannelsVersion: a } = this.props;
        return (0, i.jsx)("div", {
            className: ec.Eo,
            children: (0, i.jsx)(en.A, {
                ref: this.unreadTopRef,
                textUnread: eo.intl.string(eo.t.FCRiT3),
                textMention: eo.intl.string(eo.t["8zH0LJ"]),
                hide: null == e && (s || null != t || null != n),
                className: ec.Vq,
                barClassName: ec.bu,
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
        return (0, i.jsx)(en.A, {
            reverse: !0,
            ref: this.unreadBottomRef,
            textUnread: eo.intl.string(eo.t.FCRiT3),
            textMention: eo.intl.string(eo.t["8zH0LJ"]),
            hide: null == s && l,
            className: ec.di,
            barClassName: ec.bu,
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
        if (e !== U.PU) {
            if (null == t)
                return e === U.HP
                    ? "favorites-header"
                    : e === n.recentsSectionNumber
                      ? "recents-header"
                      : e === n.voiceChannelsSectionNumber
                        ? "voice-channels"
                        : e === U.bK
                          ? "uncategorized-header"
                          : n.getNamedCategoryFromSection(e)?.id;
            if (!n.isPlaceholderRow(e, t)) return n.getChannelFromSectionRow(e, t)?.channel?.id;
        }
    };
    renderList() {
        let { guildChannels: e, guildBanner: t, selectedGuildId: n, density: s } = this.props,
            l = {};
        n === er.YYv && (l["data-favorites"] = !0);
        let { ref: r, ...a } = this.context,
            o = 0;
        null != t && (o = 84);
        let c = "compact" === s ? 8 : 12;
        return (0, i.jsx)(d.skg, {
            children: (t) =>
                (0, i.jsx)(
                    d.B8B,
                    {
                        ref: this.setListRef,
                        className: ec.XG,
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
                        innerAriaLabel: eo.intl.string(eo.t.OGiMXJ),
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
        if (!R.A.shouldShow("voice-conversations")) return;
        let { guildChannels: e } = this.props,
            t = e.getFirstVoiceChannel();
        if (null == t) return void j.X8("voice-conversations");
        let n = this._list;
        if (null != n)
            for (let { section: e, row: i } of this.getSectionRowsFromChannel(t.id))
                n.isItemVisible(e, i) || j.X8("voice-conversations");
    };
    render() {
        let { guildChannels: e, guildChannelsVersion: t, showNewUnreadsBar: n } = this.props;
        return (0, i.jsx)(g.V0, {
            children: (l) =>
                (0, i.jsx)(d.Fmo, {
                    component: (0, i.jsx)(d.AC4, {
                        children: (0, i.jsx)(d.H, { id: l, children: eo.intl.string(eo.t.OGiMXJ) }),
                    }),
                    children: n
                        ? (0, i.jsxs)(s.Fragment, {
                              children: [
                                  (0, i.jsx)("div", {
                                      className: ec.Eo,
                                      children: (0, i.jsx)(et.A, {
                                          position: "top",
                                          guildChannels: e,
                                          guildChannelsVersion: t,
                                          jumpToVoiceChannels: this.jumpToVoiceChannels,
                                          jumpToChannel: this.jumpToChannel,
                                      }),
                                  }),
                                  this.renderList(),
                                  (0, i.jsx)(et.A, {
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
let eh = (e) => {
    let { guildId: t, selectedChannelId: n, selectedVoiceChannelId: l } = e,
        r = (0, c.bG)([A.A], () => A.A.keyboardModeEnabled),
        { analyticsLocations: d } = (0, p.Ay)(m.A.GUILD_CHANNEL_LIST),
        u = (0, c.bG)([L.A], () => L.A.getChannel(n)),
        g = (0, c.bG)([L.A], () => L.A.getChannel(l)),
        _ = (0, c.bG)([G.A], () => G.A.getGuildId()),
        f = (0, I.jN)(t),
        x = s.useRef(null),
        C = s.useCallback((e, t) => {
            let n = x.current;
            null != n &&
                (er.Ut1.test(t) || (0, ea.jq)(t)
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
            isEnabled: r,
            setFocus: C,
            scrollToStart: E,
            scrollToEnd: N,
        }),
        S = b.setFocus;
    s.useEffect(() => {
        null != n && S(n);
    }, [n, S]);
    let T = (0, y.A)(t);
    return (0, i.jsx)(p.f5, {
        value: d,
        children: (0, i.jsx)(h.A, {
            section: er.JJy.GUILD_CHANNEL_LIST,
            children: (0, i.jsx)(a.hD, {
                navigator: b,
                children: (0, i.jsx)(eu, {
                    ...e,
                    listNavigator: b,
                    ref: x,
                    selectedChannel: u,
                    selectedVoiceChannel: g,
                    stageChannelSpeakerVoiceStates: T,
                    selectedGuildId: _,
                    optInEnabled: f,
                }),
            }),
        }),
    });
};
function eA(e) {
    let t = (0, w.D)(),
        { density: n } = (0, d.wRf)(),
        { hasAccess: l, isExperimentEnabled: r, isPreviewMode: a } = (0, _.TW)("FavoritesChannelList"),
        o = (0, f.E)((e) => e.enterPreview);
    return (
        s.useEffect(() => {
            !r || l || a || o();
        }, [r, l, a, o]),
        (0, i.jsx)(eh, { ...e, guildChannels: t, guildChannelsVersion: 0, withGuildIcon: !1, density: n })
    );
}
function em(e) {
    let t = (0, V.A)(e.guild),
        n = (0, c.cf)([P.A], () => P.A.getGuild(e.guildId, { guildActionRows: t })),
        { density: s } = (0, d.wRf)();
    return (0, i.jsx)(eh, { ...e, ...n, density: s });
}
