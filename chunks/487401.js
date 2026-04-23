n.d(t, { B: () => eR, T: () => ej }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(735438),
    a = n(837381),
    r = n(884362),
    o = n(311907),
    d = n(827734),
    c = n(715828),
    u = n(312138),
    h = n(475825),
    A = n(707554),
    _ = n(140735),
    m = n(38021),
    g = n(331322),
    p = n(534514),
    f = n(834730),
    E = n(276293),
    x = n(983851),
    I = n(534890),
    C = n(951001),
    b = n(820284),
    N = n(775602),
    S = n(793574),
    v = n(688810),
    T = n(915089),
    y = n(5180),
    j = n(227004),
    R = n(581007),
    L = n(522435),
    O = n(781862),
    G = n(582904),
    M = n(637248),
    D = n(395504),
    U = n(947461),
    P = n(770904),
    w = n(357746),
    k = n(816288),
    V = n(455234),
    B = n(649247),
    H = n(787541),
    F = n(482361),
    W = n(591346),
    Y = n(769022),
    K = n(95701),
    z = n(734057),
    q = n(72314),
    X = n(808728),
    Q = n(967198),
    Z = n(32603),
    J = n(960755),
    $ = n(866842),
    ee = n(633965),
    et = n(33324),
    en = n(823142),
    ei = n(884452),
    el = n(359470),
    es = n(506792),
    ea = n(724591),
    er = n(573956),
    eo = n(141515),
    ed = n(463938),
    ec = n(779881),
    eu = n(998986),
    eh = n(732077),
    eA = n(689025),
    e_ = n(698126),
    em = n(889806),
    eg = n(923432),
    ep = n(815213),
    ef = n(530484),
    eE = n(422361),
    ex = n(281405);
n(83766);
var eI = n(652215),
    eC = n(746080);
n(131955);
var eb = n(985018),
    eN = n(335993),
    eS = n(121880);
function ev(e) {
    return (
        d.A.modules.channels.NAME_LINE_HEIGHT.resolve({ density: e }) +
        2 * d.A.space.SPACE_XXS.resolve({ density: e }) +
        2
    );
}
class eT extends l.PureComponent {
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
        this.setState({ initialized: !0 }), (0, ee.Ei)(this.getVisibleChannels);
    }
    componentWillUnmount() {
        this.updateChannelListScroll.cancel();
    }
    componentDidUpdate(e, t) {
        let { scrollToChannel: n, guildId: i, selectedChannelId: l } = this.props,
            { initialized: s } = this.state,
            { scrollTop: a } = q.A.getGuildDimensions(i);
        null != n
            ? (this.scrollToChannel(n), C.A.clearChannelListScrollTo(i))
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
                    r = s.threadOffset * ev(a);
                l.scrollIntoViewRect({ start: e + r, end: e + r + ev(a), padding: n, animate: t, callback: i });
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
            if ((0, c.o)(s) && s.section >= this.props.guildChannels.favoritesSectionNumber) {
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
                if (i < Z.bK || e.isPlaceholderRow(i, l)) return !1;
                let s = e.getChannelFromSectionRow(i, l);
                if (null == s) return !1;
                let { channel: a, category: r } = s;
                return (
                    !!(0, K.ig)(a.record.type) &&
                    (!r.isCollapsed || !r.isMuted) &&
                    !a.isMuted &&
                    !!t.isItemVisible(i, l, !0) &&
                    (0, V.Y)(a.record)
                );
            })
        );
    }
    updateChannelListScroll = (0, s.throttle)((e) => {
        C.A.updateChannelListScroll(this.props.guildId, e, this.getVisibleChannels());
    }, 100);
    getSectionHeight = (e) => {
        let { guild: t, guildChannels: n, density: i } = this.props;
        return (0, ei.sc)(e, t, n, i);
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
        return (0, el.fz)({
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
            r = ev(a);
        if (e === Z.PU) {
            let e = n.getGuildActionSection();
            return e.isEmpty()
                ? 0
                : e.getRow(t) === ex.n.GUILD_PREMIUM_PROGRESS_BAR
                  ? e.getRows().length > 1
                      ? 69
                      : 57
                  : r;
        }
        if (n.isPlaceholderRow(e, t)) return 0;
        let o = n.getChannelFromSectionRow(e, t);
        if (null == o) return 0;
        let { channel: c, category: u } = o;
        if (c.record.type === eI.rbe.GUILD_CATEGORY) return 40;
        for (let e of c.threadIds) {
            let { density: t = "default" } = this.props;
            r += ev(t);
            let n = i[c.id];
            null != n && n.length > 0 && (r += s === e ? 32 * n.length : 32);
        }
        if (c.record.isGuildVoice()) {
            let e = i[c.id];
            if (null != e && e.length > 0) {
                let t = 32 * e.length;
                if (
                    (c.isCollapsed || u.isCollapsed ? (t = 32) : (0, G.Ln)(c.record) && (t += 32),
                    (r += t + d.A.space.SPACE_XS.resolve({ density: a })),
                    !c.isCollapsed && !u.isCollapsed)
                ) {
                    let { enableHangoutWindow: e } = (0, R.kY)({ guildId: c.record.guild_id, location: "ChannelList" });
                    e && ((0, L.lr)(c.record) ? (r += 134) : s === c.id && (r += 44));
                }
            }
            if (
                (c.id === this.props.rtcConnectedChannelId && (r += 32 * this.props.rtcDesyncedVoiceStatesCount),
                !c.isCollapsed && !u.isCollapsed)
            ) {
                let { showGhostUser: e } = (0, W.NH)({ guildId: c.record.guild_id, location: "ChannelList" });
                e && null != Y.A.getLastLeftUserId(c.id) && (r += 32);
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
        null != n && s.includes(n) && (l = (0, M.xb)(t)), (0, M.DD)(e.id, s, l);
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
            ei.Ay,
            {
                sectionIndex: t,
                guild: s,
                guildChannels: n,
                guildChannelsVersion: l,
                selectedChannelId: a,
                disableManageChannels: r,
            },
            (0, ei.is)(t, n),
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
        if (t === Z.PU) {
            let e = c.getGuildActionSection(),
                t = e.getRow(n);
            if (null == t) return null;
            switch (t) {
                case ex.n.GUILD_HUB_HEADER_OPTIONS:
                    return (0, i.jsx)(
                        O.A,
                        { guild: s, channel: X.Ay.getDefaultChannel(s.id) },
                        ex.n.GUILD_HUB_HEADER_OPTIONS,
                    );
                case ex.n.GUILD_PREMIUM_PROGRESS_BAR:
                    let l = e.getRows();
                    return (0, i.jsx)(k.A, { guild: s, withMargin: l.length > 1 }, ex.n.GUILD_PREMIUM_PROGRESS_BAR);
                case ex.n.GUILD_HOME:
                    return (0, i.jsx)(eo.A, { guild: s, selected: r === eC.VV.GUILD_HOME }, ex.n.GUILD_HOME);
                case ex.n.GUILD_SCHEDULED_EVENTS:
                    return (0, i.jsx)(
                        ef.A,
                        { guild: s, selected: r === ex.n.GUILD_SCHEDULED_EVENTS },
                        ex.n.GUILD_SCHEDULED_EVENTS,
                    );
                case ex.n.GUILD_ROLE_SUBSCRIPTIONS:
                    return (0, i.jsx)(
                        ec.A,
                        { guild: s, selected: r === eC.VV.ROLE_SUBSCRIPTIONS },
                        ex.n.GUILD_ROLE_SUBSCRIPTIONS,
                    );
                case ex.n.GUILD_SHOP:
                    return (0, i.jsx)(eu.A, { guild: s, selected: r === eC.VV.GUILD_SHOP }, ex.n.GUILD_SHOP);
                case ex.n.GUILD_GAME_SHOP:
                    return (0, i.jsx)(ea.A, { guild: s, selected: r === eC.VV.GAME_SHOP }, ex.n.GUILD_GAME_SHOP);
                case ex.n.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR:
                    return (0, i.jsx)(ed.j, { guild: s });
                case ex.n.CHANNELS_AND_ROLES:
                    return (0, i.jsx)(
                        er.G,
                        { guild: s, selected: r === eC.VV.CHANNEL_BROWSER || r === eC.VV.CUSTOMIZE_COMMUNITY },
                        ex.n.CHANNELS_AND_ROLES,
                    );
                case ex.n.GUILD_DIRECTORY:
                    return (0, i.jsx)(
                        es.A,
                        { guild: s, selectedChannelId: r, disableManageChannels: h },
                        ex.n.GUILD_DIRECTORY,
                    );
                case ex.n.GUILD_MOD_DASH_MEMBER_SAFETY:
                    return (0, i.jsx)(
                        j.A,
                        { guild: s, selected: r === eC.VV.MEMBER_SAFETY },
                        ex.n.GUILD_MOD_DASH_MEMBER_SAFETY,
                    );
                case ex.n.GUILD_BOOSTS:
                    return (0, i.jsx)(w.A, { guildId: s.id, selected: r === eC.VV.GUILD_BOOSTS }, ex.n.GUILD_BOOSTS);
                case ex.n.GAME_SERVERS:
                    return (0, i.jsx)(P.A, { guildId: s.id, selected: r === eC.VV.GAME_SERVERS }, ex.n.GAME_SERVERS);
                case ex.n.GAME_SERVERS_EMPTY:
                    return (0, i.jsx)(
                        U.A,
                        { guildId: s.id, selected: r === eC.VV.GAME_SERVERS },
                        ex.n.GAME_SERVERS_EMPTY,
                    );
                default:
                    return null;
            }
        }
        if (c.isPlaceholderRow(t, n)) return null;
        let g = c.getChannelFromSectionRow(t, n);
        if (null == g) return null;
        let { category: p, channel: f } = g,
            E = p instanceof Z.xu,
            x = f.record,
            I = `${t}${f.id}`;
        switch (x.type) {
            case eI.rbe.GUILD_ANNOUNCEMENT:
            case eI.rbe.GUILD_TEXT:
            case eI.rbe.GUILD_FORUM:
            case eI.rbe.GUILD_MEDIA:
            case eI.rbe.DM:
            case eI.rbe.GROUP_DM:
                return (0, i.jsxs)(
                    l.Fragment,
                    {
                        children: [
                            (0, i.jsx)(em.A, {
                                channel: x,
                                guild: s,
                                position: f.position,
                                selected: r === f.id,
                                muted: f.isMuted,
                                subtitle: f.subtitle,
                                disableManageChannels: h,
                                canBeNewChannel: _ && t === c.recentsSectionNumber,
                                isFavoriteCategory: E,
                                isSuggestedSection: t === c.recentsSectionNumber,
                            }),
                            f.threadCount > 0
                                ? (0, i.jsx)(eh.A, {
                                      withGuildIcon: m,
                                      channel: x,
                                      sortedThreadIds: f.threadIds,
                                      selectedChannel: null != a && (a.id === f.id || a.parent_id === x.id) ? a : null,
                                      selectedVoiceChannelId: o?.parent_id === x.id ? d : null,
                                  })
                                : null,
                        ],
                    },
                    I,
                );
            case eI.rbe.GUILD_STAGE_VOICE:
                return (0, i.jsx)(
                    eA.A,
                    {
                        channel: x,
                        guild: s,
                        position: f.position,
                        selected: r === f.id,
                        connected: d === f.id,
                        collapsed: f.isCollapsed || p.isCollapsed,
                        voiceStates: u[f.id] ?? [],
                        speakerVoiceStates: A[f.id] ?? [],
                        disableManageChannels: h,
                        isFavoriteCategory: E,
                        isSuggestedSection: t === c.recentsSectionNumber,
                    },
                    I,
                );
            case eI.rbe.GUILD_VOICE:
                return (0, i.jsx)(
                    eE.A,
                    {
                        channel: x,
                        guild: s,
                        position: f.position,
                        selected: r === f.id,
                        connected: d === f.id,
                        collapsed: f.isCollapsed || p.isCollapsed,
                        voiceStates: u[f.id],
                        subtitle: f.subtitle,
                        disableManageChannels: h,
                        showTutorial: f.isFirstVoiceChannel,
                        isFavoriteCategory: E,
                        withGuildIcon: m,
                        isSuggestedSection: t === c.recentsSectionNumber,
                    },
                    I,
                );
            case eI.rbe.GUILD_STORE:
                return (0, i.jsx)(e_.A, { channel: x, guild: s, position: f.position, selected: r === f.id }, I);
            case eI.rbe.GUILD_CATEGORY:
                if (t !== c.voiceChannelsSectionNumber) return null;
                return (0, i.jsx)(en.sM, { channel: x }, `readonly-${x.id}`);
            case eI.rbe.PUBLIC_THREAD:
            case eI.rbe.PRIVATE_THREAD:
            case eI.rbe.ANNOUNCEMENT_THREAD:
                return (0, i.jsx)(
                    em.A,
                    {
                        channel: x,
                        guild: s,
                        position: f.position,
                        selected: r === f.id,
                        muted: f.isMuted,
                        subtitle: f.subtitle,
                        disableManageChannels: h,
                        canBeNewChannel: !1,
                        isFavoriteCategory: !1,
                        forceTopLevelThread: !0,
                    },
                    I,
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
            el.Ay,
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
            (0, el.tt)(t, n, o),
        );
    };
    renderTopUnread() {
        let { topMention: e, bottomUnread: t, bottomMention: n, isUnreadVisible: l } = this.state,
            { guildId: s, guildChannels: a, guildChannelsVersion: r } = this.props;
        return (0, i.jsx)("div", {
            className: eS.Eo,
            children: (0, i.jsx)(ep.A, {
                ref: this.unreadTopRef,
                textUnread: eb.intl.string(eb.t.FCRiT3),
                textMention: eb.intl.string(eb.t["8zH0LJ"]),
                hide: null == e && (l || null != t || null != n),
                className: eS.Vq,
                barClassName: eS.bu,
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
        return (0, i.jsx)(ep.A, {
            reverse: !0,
            ref: this.unreadBottomRef,
            textUnread: eb.intl.string(eb.t.FCRiT3),
            textMention: eb.intl.string(eb.t["8zH0LJ"]),
            hide: null == l && s,
            className: eS.di,
            barClassName: eS.bu,
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
        if (e !== Z.PU) {
            if (null == t)
                return e === Z.HP
                    ? "favorites-header"
                    : e === n.recentsSectionNumber
                      ? "recents-header"
                      : e === n.voiceChannelsSectionNumber
                        ? "voice-channels"
                        : e === Z.bK
                          ? "uncategorized-header"
                          : n.getNamedCategoryFromSection(e)?.id;
            if (!n.isPlaceholderRow(e, t)) return n.getChannelFromSectionRow(e, t)?.channel?.id;
        }
    };
    renderList() {
        let { guildChannels: e, guildBanner: t, selectedGuildId: n, density: l } = this.props,
            s = {};
        (0, y.ai)(n) && (s["data-favorites"] = !0);
        let { ref: a, ...r } = this.context,
            o = 0;
        null != t && (o = 84);
        let d = "compact" === l ? 8 : 12;
        return (0, i.jsx)(u.sk, {
            children: (t) =>
                (0, i.jsx)(
                    h.OZ,
                    {
                        ref: this.setListRef,
                        className: eS.XG,
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
                        innerAriaLabel: eb.intl.string(eb.t.OGiMXJ),
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
        if (!F.A.shouldShow("voice-conversations")) return;
        let { guildChannels: e } = this.props,
            t = e.getFirstVoiceChannel();
        if (null == t) return void H.X8("voice-conversations");
        let n = this._list;
        if (null != n)
            for (let { section: e, row: i } of this.getSectionRowsFromChannel(t.id))
                n.isItemVisible(e, i) || H.X8("voice-conversations");
    };
    render() {
        let { guildChannels: e, guildChannelsVersion: t, showNewUnreadsBar: n } = this.props;
        return (0, i.jsx)(T.V0, {
            children: (s) =>
                (0, i.jsx)(A.F, {
                    component: (0, i.jsx)(_.A, {
                        children: (0, i.jsx)(A.H, { id: s, children: eb.intl.string(eb.t.OGiMXJ) }),
                    }),
                    children: n
                        ? (0, i.jsxs)(l.Fragment, {
                              children: [
                                  (0, i.jsx)("div", {
                                      className: eS.Eo,
                                      children: (0, i.jsx)(eg.A, {
                                          position: "top",
                                          guildChannels: e,
                                          guildChannelsVersion: t,
                                          jumpToVoiceChannels: this.jumpToVoiceChannels,
                                          jumpToChannel: this.jumpToChannel,
                                      }),
                                  }),
                                  this.renderList(),
                                  (0, i.jsx)(eg.A, {
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
let ey = (e) => {
    let { guildId: t, selectedChannelId: n, selectedVoiceChannelId: s } = e,
        d = (0, o.bG)([N.A], () => N.A.keyboardModeEnabled),
        { analyticsLocations: c } = (0, v.Ay)(S.A.GUILD_CHANNEL_LIST),
        u = (0, o.bG)([z.A], () => z.A.getChannel(n)),
        h = (0, o.bG)([z.A], () => z.A.getChannel(s)),
        A = (0, o.bG)([Q.A], () => Q.A.getGuildId()),
        _ = (0, D.jN)(t),
        m = l.useRef(null),
        g = l.useCallback((e, t) => {
            let n = m.current;
            null != n &&
                (eI.Ut1.test(t) || (0, eC.jq)(t)
                    ? n.scrollToChannel(t, !1, 16, () => {
                          requestAnimationFrame(() => document.querySelector(e)?.focus());
                      })
                    : document.querySelector(e)?.focus());
        }, []),
        p = l.useCallback(
            () =>
                new Promise((e) => {
                    let t = m.current;
                    if (null == t) return e();
                    t.scrollTo(0, () => requestAnimationFrame(() => e()));
                }),
            [],
        ),
        f = l.useCallback(
            () =>
                new Promise((e) => {
                    let t = m.current;
                    if (null == t) return e();
                    t.scrollTo(Number.MAX_SAFE_INTEGER, () => requestAnimationFrame(() => e()));
                }),
            [],
        ),
        E = (0, r.Ay)({
            id: "channels",
            defaultFocused: n ?? void 0,
            isEnabled: d,
            setFocus: g,
            scrollToStart: p,
            scrollToEnd: f,
        }),
        x = E.setFocus;
    l.useEffect(() => {
        null != n && x(n);
    }, [n, x]);
    let I = (0, B.A)(t);
    return (0, i.jsx)(v.f5, {
        value: c,
        children: (0, i.jsx)(b.A, {
            section: eI.JJy.GUILD_CHANNEL_LIST,
            children: (0, i.jsx)(a.hD, {
                navigator: E,
                children: (0, i.jsx)(eT, {
                    ...e,
                    listNavigator: E,
                    ref: m,
                    selectedChannel: u,
                    selectedVoiceChannel: h,
                    stageChannelSpeakerVoiceStates: I,
                    selectedGuildId: A,
                    optInEnabled: _,
                }),
            }),
        }),
    });
};
function ej(e) {
    let { guildChannels: t, shouldShowEmptyState: n } = (0, $.D)(),
        { density: l } = (0, m.wR)();
    return n
        ? (0, i.jsx)("div", {
              className: eS.XG,
              children: (0, i.jsxs)(g.B, {
                  gap: 8,
                  children: [
                      (0, i.jsxs)(g.B, {
                          gap: 8,
                          padding: { top: 16, right: 16, bottom: 0, left: 16 },
                          fullWidth: !1,
                          children: [
                              (0, i.jsx)(p.D, {
                                  variant: "heading-md/semibold",
                                  children: eb.intl.string(eN.default["1n0TGE"]),
                              }),
                              (0, i.jsx)(f.E, {
                                  variant: "text-sm/medium",
                                  color: "text-muted",
                                  children: eb.intl.string(eN.default.Wwzrs9),
                              }),
                          ],
                      }),
                      (0, i.jsx)("div", { className: eS.ts }),
                      (0, i.jsxs)("div", {
                          className: eS.MS,
                          "aria-hidden": "true",
                          children: [
                              (0, i.jsxs)("div", {
                                  className: eS.pS,
                                  children: [
                                      (0, i.jsx)(E.N, { size: "xs", color: d.A.colors.ICON_MUTED }),
                                      (0, i.jsx)("div", { className: eS.Qs }),
                                  ],
                              }),
                              (0, i.jsxs)("div", {
                                  className: eS.pS,
                                  children: [
                                      (0, i.jsx)(x.H, { size: "xs", color: d.A.colors.ICON_MUTED }),
                                      (0, i.jsx)("div", { className: eS.iR }),
                                  ],
                              }),
                              (0, i.jsxs)("div", {
                                  className: eS.pS,
                                  children: [
                                      (0, i.jsx)(I.o, { size: "xs", color: d.A.colors.ICON_MUTED }),
                                      (0, i.jsx)("div", { className: eS.Qs }),
                                  ],
                              }),
                          ],
                      }),
                  ],
              }),
          })
        : (0, i.jsx)(ey, { ...e, guildChannels: t, guildChannelsVersion: 0, withGuildIcon: !1, density: l });
}
function eR(e) {
    let t = (0, et.A)(e.guild),
        n = (0, o.cf)([J.A], () => J.A.getGuild(e.guildId, { guildActionRows: t })),
        { density: l } = (0, m.wR)();
    return (0, i.jsx)(ey, { ...e, ...n, density: l });
}
