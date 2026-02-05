n.d(t, { B: () => eh, T: () => eu }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(735438),
    a = n.n(s),
    r = n(837381),
    o = n(884362),
    d = n(311907),
    c = n(397927),
    u = n(951001),
    h = n(166649),
    A = n(820284),
    g = n(775602),
    m = n(793574),
    p = n(688810),
    _ = n(915089),
    x = n(616075),
    f = n(227004),
    E = n(781862),
    C = n(637248),
    I = n(395504),
    S = n(770904),
    b = n(357746),
    N = n(816288),
    T = n(455234),
    j = n(649247),
    v = n(482361),
    y = n(95701),
    R = n(734057),
    O = n(72314),
    L = n(808728),
    D = n(967198),
    M = n(32603),
    G = n(960755),
    U = n(994020),
    P = n(633965),
    k = n(33324),
    w = n(823142),
    V = n(884452),
    B = n(137089),
    H = n(506792),
    F = n(724591),
    Y = n(573956),
    W = n(141515),
    K = n(463938),
    z = n(779881),
    X = n(998986),
    q = n(732077),
    J = n(689025),
    Q = n(698126),
    Z = n(889806),
    $ = n(923432),
    ee = n(815213),
    et = n(530484),
    en = n(422361),
    ei = n(281405);
n(83766);
var el = n(652215),
    es = n(746080),
    ea = n(985018),
    er = n(495401);
function eo(e) {
    return (
        c.LU0.modules.channels.NAME_LINE_HEIGHT.resolve({ density: e }) +
        2 * c.LU0.space.SPACE_XXS.resolve({ density: e }) +
        2
    );
}
class ed extends l.PureComponent {
    static contextType = r.nC;
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
        this.setState({ initialized: !0 }), (0, P.Ei)(this.getVisibleChannels);
    }
    componentWillUnmount() {
        this.updateChannelListScroll.cancel();
    }
    componentDidUpdate(e, t) {
        let { scrollToChannel: n, guildId: i, selectedChannelId: l } = this.props,
            { initialized: s } = this.state,
            { scrollTop: a } = O.A.getGuildDimensions(i);
        null != n
            ? (this.scrollToChannel(n), u.A.clearChannelListScrollTo(i))
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
                    r = s.threadOffset * eo(a);
                l.scrollIntoViewRect({ start: e + r, end: e + r + eo(a), padding: n, animate: t, callback: i });
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
            if ((0, c.ogc)(s) && s.section >= this.props.guildChannels.favoritesSectionNumber) {
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
                if (i < M.bK || e.isPlaceholderRow(i, l)) return !1;
                let s = e.getChannelFromSectionRow(i, l);
                if (null == s) return !1;
                let { channel: a, category: r } = s;
                return (
                    !!(0, y.ig)(a.record.type) &&
                    (!r.isCollapsed || !r.isMuted) &&
                    !a.isMuted &&
                    !!t.isItemVisible(i, l, !0) &&
                    (0, T.Y)(a.record)
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
            selectedChannelId: l,
            optInEnabled: s,
            guildChannelsVersion: a,
        } = this.props;
        return (0, B.fz)({
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
                selectedGuildId: a,
                density: r = "default",
            } = this.props,
            o = eo(r);
        if (e === M.PU) {
            let e = n.getGuildActionSection();
            return e.isEmpty()
                ? 0
                : e.getRow(t) === ei.n.GUILD_PREMIUM_PROGRESS_BAR
                  ? e.getRows().length > 1
                      ? 69
                      : 57
                  : o;
        }
        if (n.isPlaceholderRow(e, t)) return 0;
        let d = n.getChannelFromSectionRow(e, t);
        if (null == d) return 0;
        let { channel: u, category: h } = d;
        if (u.record.type === el.rbe.GUILD_CATEGORY) return 40;
        let { isFavoritesPerk: A } = x.A.getCurrentConfig({ location: "channel_list" }, { autoTrackExposure: !0 });
        for (let e of (!A ||
            a !== el.YYv ||
            u.record.isDM() ||
            u.record.isGroupDM() ||
            u.record.isGuildStageVoice() ||
            (o = 46),
        u.threadIds)) {
            let { density: t = "default" } = this.props;
            o += eo(t);
            let n = i[u.id];
            null != n && n.length > 0 && (o += s === e ? 32 * n.length : 32);
        }
        if (u.record.isGuildVoice()) {
            let e = i[u.id];
            if (null != e && e.length > 0) {
                let t = 32 * e.length;
                (u.isCollapsed || h.isCollapsed) && (t = 32), (o += t + c.LU0.space.SPACE_XS.resolve({ density: r }));
            }
            u.id === this.props.rtcConnectedChannelId && (o += 32 * this.props.rtcDesyncedVoiceStatesCount);
        }
        if (((null != u.subtitle || s === u.id) && (o += 16), u.record.isGuildStageVoice())) {
            let e = i[u.id] ?? [],
                t = l[u.id] ?? [];
            if (null != e && e.length > 0) {
                let e = 32 * t.length;
                u.isCollapsed || h.isCollapsed ? (e = Math.ceil(e / 5)) : (e += 32), (o += e + 8);
            }
        }
        return o;
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
            V.Ay,
            {
                sectionIndex: t,
                guild: s,
                guildChannels: n,
                guildChannelsVersion: l,
                selectedChannelId: a,
                disableManageChannels: r,
            },
            (0, V.is)(t, n),
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
                optInEnabled: g,
                withGuildIcon: m,
            } = this.props;
        if (t === M.PU) {
            let e = c.getGuildActionSection(),
                t = e.getRow(n);
            if (null == t) return null;
            switch (t) {
                case ei.n.GUILD_HUB_HEADER_OPTIONS:
                    return (0, i.jsx)(
                        E.A,
                        { guild: s, channel: L.Ay.getDefaultChannel(s.id) },
                        ei.n.GUILD_HUB_HEADER_OPTIONS,
                    );
                case ei.n.GUILD_PREMIUM_PROGRESS_BAR:
                    let l = e.getRows();
                    return (0, i.jsx)(N.A, { guild: s, withMargin: l.length > 1 }, ei.n.GUILD_PREMIUM_PROGRESS_BAR);
                case ei.n.GUILD_HOME:
                    return (0, i.jsx)(W.A, { guild: s, selected: r === es.VV.GUILD_HOME }, ei.n.GUILD_HOME);
                case ei.n.GUILD_SCHEDULED_EVENTS:
                    return (0, i.jsx)(
                        et.A,
                        { guild: s, selected: r === ei.n.GUILD_SCHEDULED_EVENTS },
                        ei.n.GUILD_SCHEDULED_EVENTS,
                    );
                case ei.n.GUILD_ROLE_SUBSCRIPTIONS:
                    return (0, i.jsx)(
                        z.A,
                        { guild: s, selected: r === es.VV.ROLE_SUBSCRIPTIONS },
                        ei.n.GUILD_ROLE_SUBSCRIPTIONS,
                    );
                case ei.n.GUILD_SHOP:
                    return (0, i.jsx)(X.A, { guild: s, selected: r === es.VV.GUILD_SHOP }, ei.n.GUILD_SHOP);
                case ei.n.GUILD_GAME_SHOP:
                    return (0, i.jsx)(F.A, { guild: s, selected: r === es.VV.GAME_SHOP }, ei.n.GUILD_GAME_SHOP);
                case ei.n.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR:
                    return (0, i.jsx)(K.j, { guild: s });
                case ei.n.CHANNELS_AND_ROLES:
                    return (0, i.jsx)(
                        Y.G,
                        { guild: s, selected: r === es.VV.CHANNEL_BROWSER || r === es.VV.CUSTOMIZE_COMMUNITY },
                        ei.n.CHANNELS_AND_ROLES,
                    );
                case ei.n.GUILD_DIRECTORY:
                    return (0, i.jsx)(
                        H.A,
                        { guild: s, selectedChannelId: r, disableManageChannels: h },
                        ei.n.GUILD_DIRECTORY,
                    );
                case ei.n.GUILD_MOD_DASH_MEMBER_SAFETY:
                    return (0, i.jsx)(
                        f.A,
                        { guild: s, selected: r === es.VV.MEMBER_SAFETY },
                        ei.n.GUILD_MOD_DASH_MEMBER_SAFETY,
                    );
                case ei.n.GUILD_BOOSTS:
                    return (0, i.jsx)(b.A, { guildId: s.id, selected: r === es.VV.GUILD_BOOSTS }, ei.n.GUILD_BOOSTS);
                case ei.n.GAME_SERVERS:
                    return (0, i.jsx)(S.A, { guildId: s.id, selected: r === es.VV.GAME_SERVERS }, ei.n.GAME_SERVERS);
                default:
                    return null;
            }
        }
        if (c.isPlaceholderRow(t, n)) return null;
        let p = c.getChannelFromSectionRow(t, n);
        if (null == p) return null;
        let { category: _, channel: x } = p,
            C = _ instanceof M.xu,
            I = x.record,
            T = `${t}${x.id}`;
        switch (I.type) {
            case el.rbe.GUILD_ANNOUNCEMENT:
            case el.rbe.GUILD_TEXT:
            case el.rbe.GUILD_FORUM:
            case el.rbe.GUILD_MEDIA:
            case el.rbe.DM:
            case el.rbe.GROUP_DM:
                return (0, i.jsxs)(
                    l.Fragment,
                    {
                        children: [
                            (0, i.jsx)(Z.A, {
                                channel: I,
                                guild: s,
                                position: x.position,
                                selected: r === x.id,
                                muted: x.isMuted,
                                subtitle: x.subtitle,
                                disableManageChannels: h,
                                canBeNewChannel: g && t === c.recentsSectionNumber,
                                isFavoriteCategory: C,
                                withGuildIcon: m,
                            }),
                            x.threadCount > 0
                                ? (0, i.jsx)(q.A, {
                                      withGuildIcon: m,
                                      channel: I,
                                      sortedThreadIds: x.threadIds,
                                      selectedChannel: null != a && (a.id === x.id || a.parent_id === I.id) ? a : null,
                                      selectedVoiceChannelId: o?.parent_id === I.id ? d : null,
                                  })
                                : null,
                        ],
                    },
                    T,
                );
            case el.rbe.GUILD_STAGE_VOICE:
                return (0, i.jsx)(
                    J.A,
                    {
                        channel: I,
                        guild: s,
                        position: x.position,
                        selected: r === x.id,
                        connected: d === x.id,
                        collapsed: x.isCollapsed || _.isCollapsed,
                        voiceStates: u[x.id] ?? [],
                        speakerVoiceStates: A[x.id] ?? [],
                        disableManageChannels: h,
                        isFavoriteCategory: C,
                    },
                    T,
                );
            case el.rbe.GUILD_VOICE:
                return (0, i.jsx)(
                    en.A,
                    {
                        channel: I,
                        guild: s,
                        position: x.position,
                        selected: r === x.id,
                        connected: d === x.id,
                        collapsed: x.isCollapsed || _.isCollapsed,
                        voiceStates: u[x.id],
                        subtitle: x.subtitle,
                        disableManageChannels: h,
                        showTutorial: x.isFirstVoiceChannel,
                        isFavoriteCategory: C,
                        withGuildIcon: m,
                    },
                    T,
                );
            case el.rbe.GUILD_STORE:
                return (0, i.jsx)(Q.A, { channel: I, guild: s, position: x.position, selected: r === x.id }, T);
            case el.rbe.GUILD_CATEGORY:
                if (t !== c.voiceChannelsSectionNumber) return null;
                return (0, i.jsx)(w.sM, { channel: I }, `readonly-${I.id}`);
            case el.rbe.PUBLIC_THREAD:
            case el.rbe.PRIVATE_THREAD:
            case el.rbe.ANNOUNCEMENT_THREAD:
                return (0, i.jsx)(
                    Z.A,
                    {
                        channel: I,
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
                    T,
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
            B.Ay,
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
            (0, B.tt)(t, n, o),
        );
    };
    renderTopUnread() {
        let { topMention: e, bottomUnread: t, bottomMention: n, isUnreadVisible: l } = this.state,
            { guildId: s, guildChannels: a, guildChannelsVersion: r } = this.props;
        return (0, i.jsx)("div", {
            className: er.Eo,
            children: (0, i.jsx)(ee.A, {
                ref: this.unreadTopRef,
                textUnread: ea.intl.string(ea.t.FCRiT3),
                textMention: ea.intl.string(ea.t["8zH0LJ"]),
                hide: null == e && (l || null != t || null != n),
                className: er.Vq,
                barClassName: er.bu,
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
        return (0, i.jsx)(ee.A, {
            reverse: !0,
            ref: this.unreadBottomRef,
            textUnread: ea.intl.string(ea.t.FCRiT3),
            textMention: ea.intl.string(ea.t["8zH0LJ"]),
            hide: null == l && s,
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
        let { guildChannels: e, guildBanner: t, selectedGuildId: n, density: l } = this.props,
            s = {};
        n === el.YYv && (s["data-favorites"] = !0);
        let { ref: a, ...r } = this.context,
            o = 0;
        null != t && (o = 84);
        let d = "compact" === l ? 8 : 12;
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
                        innerAriaLabel: ea.intl.string(ea.t.OGiMXJ),
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
        if (!v.A.shouldShow("voice-conversations")) return;
        let { guildChannels: e } = this.props,
            t = e.getFirstVoiceChannel();
        if (null == t) return void h.A.dismiss("voice-conversations");
        let n = this._list;
        if (null != n)
            for (let { section: e, row: i } of this.getSectionRowsFromChannel(t.id))
                n.isItemVisible(e, i) || h.A.dismiss("voice-conversations");
    };
    render() {
        let { guildChannels: e, guildChannelsVersion: t, showNewUnreadsBar: n } = this.props;
        return (0, i.jsx)(_.V0, {
            children: (s) =>
                (0, i.jsx)(c.Fmo, {
                    component: (0, i.jsx)(c.AC4, {
                        children: (0, i.jsx)(c.H, { id: s, children: ea.intl.string(ea.t.OGiMXJ) }),
                    }),
                    children: n
                        ? (0, i.jsxs)(l.Fragment, {
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
                        : (0, i.jsxs)(l.Fragment, {
                              children: [this.renderTopUnread(), this.renderList(), this.renderBottomUnread()],
                          }),
                }),
        });
    }
}
let ec = (e) => {
    let { guildId: t, selectedChannelId: n, selectedVoiceChannelId: s } = e,
        a = (0, d.bG)([g.A], () => g.A.keyboardModeEnabled),
        { analyticsLocations: c } = (0, p.Ay)(m.A.GUILD_CHANNEL_LIST),
        u = (0, d.bG)([R.A], () => R.A.getChannel(n)),
        h = (0, d.bG)([R.A], () => R.A.getChannel(s)),
        _ = (0, d.bG)([D.A], () => D.A.getGuildId()),
        x = (0, I.jN)(t),
        f = l.useRef(null),
        E = l.useCallback((e, t) => {
            let n = f.current;
            null != n &&
                (el.Ut1.test(t) || (0, es.jq)(t)
                    ? n.scrollToChannel(t, !1, 16, () => {
                          requestAnimationFrame(() => document.querySelector(e)?.focus());
                      })
                    : document.querySelector(e)?.focus());
        }, []),
        C = l.useCallback(
            () =>
                new Promise((e) => {
                    let t = f.current;
                    if (null == t) return e();
                    t.scrollTo(0, () => requestAnimationFrame(() => e()));
                }),
            [],
        ),
        S = l.useCallback(
            () =>
                new Promise((e) => {
                    let t = f.current;
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
            scrollToStart: C,
            scrollToEnd: S,
        }),
        N = b.setFocus;
    l.useEffect(() => {
        null != n && N(n);
    }, [n, N]);
    let T = (0, j.A)(t);
    return (0, i.jsx)(p.f5, {
        value: c,
        children: (0, i.jsx)(A.A, {
            section: el.JJy.GUILD_CHANNEL_LIST,
            children: (0, i.jsx)(r.hD, {
                navigator: b,
                children: (0, i.jsx)(ed, {
                    ...e,
                    listNavigator: b,
                    ref: f,
                    selectedChannel: u,
                    selectedVoiceChannel: h,
                    stageChannelSpeakerVoiceStates: T,
                    selectedGuildId: _,
                    optInEnabled: x,
                }),
            }),
        }),
    });
};
function eu(e) {
    let t = (0, U.x)(),
        { isFavoritesPerk: n } = (0, x.l)("favorites-channel-list"),
        { density: l } = (0, c.wRf)();
    return (0, i.jsx)(ec, { ...e, guildChannels: t, guildChannelsVersion: 0, withGuildIcon: n, density: l });
}
function eh(e) {
    let t = (0, k.A)(e.guild),
        n = (0, d.cf)([G.A], () => G.A.getGuild(e.guildId, { guildActionRows: t })),
        { density: l } = (0, c.wRf)();
    return (0, i.jsx)(ec, { ...e, ...n, density: l });
}
