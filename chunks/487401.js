"use strict";
n.d(t, { B: () => eu, T: () => ed }), n(321073);
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
    p = n(793574),
    g = n(688810),
    m = n(915089),
    _ = n(227004),
    f = n(781862),
    x = n(637248),
    C = n(395504),
    E = n(770904),
    I = n(357746),
    b = n(816288),
    N = n(455234),
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
    G = n(994020),
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
    X = n(732077),
    q = n(689025),
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
    er = n(495401);
function ea(e) {
    return (
        d.LU0.modules.channels.NAME_LINE_HEIGHT.resolve({ density: e }) +
        2 * d.LU0.space.SPACE_XXS.resolve({ density: e }) +
        2
    );
}
class eo extends s.PureComponent {
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
            { scrollTop: r } = R.A.getGuildDimensions(i);
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
                    a = l.threadOffset * ea(r);
                s.scrollIntoViewRect({ start: e + a, end: e + a + ea(r), padding: n, animate: t, callback: i });
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
                if (i < M.bK || e.isPlaceholderRow(i, s)) return !1;
                let l = e.getChannelFromSectionRow(i, s);
                if (null == l) return !1;
                let { channel: r, category: a } = l;
                return (
                    !!(0, y.ig)(r.record.type) &&
                    (!a.isCollapsed || !a.isMuted) &&
                    !r.isMuted &&
                    !!t.isItemVisible(i, s, !0) &&
                    (0, N.Y)(r.record)
                );
            })
        );
    }
    updateChannelListScroll = r().throttle((e) => {
        u.A.updateChannelListScroll(this.props.guildId, e, this.getVisibleChannels());
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
            guildChannelsVersion: r,
        } = this.props;
        return (0, V.fz)({
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
            a = ea(r);
        if (e === M.PU) {
            let e = n.getGuildActionSection();
            return e.isEmpty()
                ? 0
                : e.getRow(t) === en.n.GUILD_PREMIUM_PROGRESS_BAR
                  ? e.getRows().length > 1
                      ? 69
                      : 57
                  : a;
        }
        if (n.isPlaceholderRow(e, t)) return 0;
        let o = n.getChannelFromSectionRow(e, t);
        if (null == o) return 0;
        let { channel: c, category: u } = o;
        if (c.record.type === ei.rbe.GUILD_CATEGORY) return 40;
        for (let e of c.threadIds) {
            let { density: t = "default" } = this.props;
            a += ea(t);
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
        null != n && l.includes(n) && (s = (0, x.xb)(t)), (0, x.DD)(e.id, l, s);
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
            k.Ay,
            {
                sectionIndex: t,
                guild: l,
                guildChannels: n,
                guildChannelsVersion: s,
                selectedChannelId: r,
                disableManageChannels: a,
            },
            (0, k.is)(t, n),
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
                optInEnabled: p,
                withGuildIcon: g,
            } = this.props;
        if (t === M.PU) {
            let e = d.getGuildActionSection(),
                t = e.getRow(n);
            if (null == t) return null;
            switch (t) {
                case en.n.GUILD_HUB_HEADER_OPTIONS:
                    return (0, i.jsx)(
                        f.A,
                        { guild: l, channel: O.Ay.getDefaultChannel(l.id) },
                        en.n.GUILD_HUB_HEADER_OPTIONS,
                    );
                case en.n.GUILD_PREMIUM_PROGRESS_BAR:
                    let s = e.getRows();
                    return (0, i.jsx)(b.A, { guild: l, withMargin: s.length > 1 }, en.n.GUILD_PREMIUM_PROGRESS_BAR);
                case en.n.GUILD_HOME:
                    return (0, i.jsx)(K.A, { guild: l, selected: a === es.VV.GUILD_HOME }, en.n.GUILD_HOME);
                case en.n.GUILD_SCHEDULED_EVENTS:
                    return (0, i.jsx)(
                        ee.A,
                        { guild: l, selected: a === en.n.GUILD_SCHEDULED_EVENTS },
                        en.n.GUILD_SCHEDULED_EVENTS,
                    );
                case en.n.GUILD_ROLE_SUBSCRIPTIONS:
                    return (0, i.jsx)(
                        Y.A,
                        { guild: l, selected: a === es.VV.ROLE_SUBSCRIPTIONS },
                        en.n.GUILD_ROLE_SUBSCRIPTIONS,
                    );
                case en.n.GUILD_SHOP:
                    return (0, i.jsx)(z.A, { guild: l, selected: a === es.VV.GUILD_SHOP }, en.n.GUILD_SHOP);
                case en.n.GUILD_GAME_SHOP:
                    return (0, i.jsx)(H.A, { guild: l, selected: a === es.VV.GAME_SHOP }, en.n.GUILD_GAME_SHOP);
                case en.n.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR:
                    return (0, i.jsx)(W.j, { guild: l });
                case en.n.CHANNELS_AND_ROLES:
                    return (0, i.jsx)(
                        F.G,
                        { guild: l, selected: a === es.VV.CHANNEL_BROWSER || a === es.VV.CUSTOMIZE_COMMUNITY },
                        en.n.CHANNELS_AND_ROLES,
                    );
                case en.n.GUILD_DIRECTORY:
                    return (0, i.jsx)(
                        B.A,
                        { guild: l, selectedChannelId: a, disableManageChannels: h },
                        en.n.GUILD_DIRECTORY,
                    );
                case en.n.GUILD_MOD_DASH_MEMBER_SAFETY:
                    return (0, i.jsx)(
                        _.A,
                        { guild: l, selected: a === es.VV.MEMBER_SAFETY },
                        en.n.GUILD_MOD_DASH_MEMBER_SAFETY,
                    );
                case en.n.GUILD_BOOSTS:
                    return (0, i.jsx)(I.A, { guildId: l.id, selected: a === es.VV.GUILD_BOOSTS }, en.n.GUILD_BOOSTS);
                case en.n.GAME_SERVERS:
                    return (0, i.jsx)(E.A, { guildId: l.id, selected: a === es.VV.GAME_SERVERS }, en.n.GAME_SERVERS);
                default:
                    return null;
            }
        }
        if (d.isPlaceholderRow(t, n)) return null;
        let m = d.getChannelFromSectionRow(t, n);
        if (null == m) return null;
        let { category: x, channel: C } = m,
            N = x instanceof M.xu,
            S = C.record,
            T = `${t}${C.id}`;
        switch (S.type) {
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
                                channel: S,
                                guild: l,
                                position: C.position,
                                selected: a === C.id,
                                muted: C.isMuted,
                                subtitle: C.subtitle,
                                disableManageChannels: h,
                                canBeNewChannel: p && t === d.recentsSectionNumber,
                                isFavoriteCategory: N,
                                withGuildIcon: g,
                            }),
                            C.threadCount > 0
                                ? (0, i.jsx)(X.A, {
                                      withGuildIcon: g,
                                      channel: S,
                                      sortedThreadIds: C.threadIds,
                                      selectedChannel: null != r && (r.id === C.id || r.parent_id === S.id) ? r : null,
                                      selectedVoiceChannelId: o?.parent_id === S.id ? c : null,
                                  })
                                : null,
                        ],
                    },
                    T,
                );
            case ei.rbe.GUILD_STAGE_VOICE:
                return (0, i.jsx)(
                    q.A,
                    {
                        channel: S,
                        guild: l,
                        position: C.position,
                        selected: a === C.id,
                        connected: c === C.id,
                        collapsed: C.isCollapsed || x.isCollapsed,
                        voiceStates: u[C.id] ?? [],
                        speakerVoiceStates: A[C.id] ?? [],
                        disableManageChannels: h,
                        isFavoriteCategory: N,
                    },
                    T,
                );
            case ei.rbe.GUILD_VOICE:
                return (0, i.jsx)(
                    et.A,
                    {
                        channel: S,
                        guild: l,
                        position: C.position,
                        selected: a === C.id,
                        connected: c === C.id,
                        collapsed: C.isCollapsed || x.isCollapsed,
                        voiceStates: u[C.id],
                        subtitle: C.subtitle,
                        disableManageChannels: h,
                        showTutorial: C.isFirstVoiceChannel,
                        isFavoriteCategory: N,
                        withGuildIcon: g,
                    },
                    T,
                );
            case ei.rbe.GUILD_STORE:
                return (0, i.jsx)(J.A, { channel: S, guild: l, position: C.position, selected: a === C.id }, T);
            case ei.rbe.GUILD_CATEGORY:
                if (t !== d.voiceChannelsSectionNumber) return null;
                return (0, i.jsx)(w.sM, { channel: S }, `readonly-${S.id}`);
            case ei.rbe.PUBLIC_THREAD:
            case ei.rbe.PRIVATE_THREAD:
            case ei.rbe.ANNOUNCEMENT_THREAD:
                return (0, i.jsx)(
                    Q.A,
                    {
                        channel: S,
                        guild: l,
                        position: C.position,
                        selected: a === C.id,
                        muted: C.isMuted,
                        subtitle: C.subtitle,
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
                guildChannelsVersion: s,
                voiceStates: l,
                selectedChannelId: r,
                selectedVoiceChannelId: a,
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
                selectedChannelId: r,
                selectedVoiceChannelId: a,
                optInEnabled: o,
            },
            (0, V.tt)(t, n, o),
        );
    };
    renderTopUnread() {
        let { topMention: e, bottomUnread: t, bottomMention: n, isUnreadVisible: s } = this.state,
            { guildId: l, guildChannels: r, guildChannelsVersion: a } = this.props;
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
                        innerAriaLabel: el.intl.string(el.t.OGiMXJ),
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
        return (0, i.jsx)(m.V0, {
            children: (l) =>
                (0, i.jsx)(d.Fmo, {
                    component: (0, i.jsx)(d.AC4, {
                        children: (0, i.jsx)(d.H, { id: l, children: el.intl.string(el.t.OGiMXJ) }),
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
let ec = (e) => {
    let { guildId: t, selectedChannelId: n, selectedVoiceChannelId: l } = e,
        r = (0, c.bG)([A.A], () => A.A.keyboardModeEnabled),
        { analyticsLocations: d } = (0, g.Ay)(p.A.GUILD_CHANNEL_LIST),
        u = (0, c.bG)([j.A], () => j.A.getChannel(n)),
        m = (0, c.bG)([j.A], () => j.A.getChannel(l)),
        _ = (0, c.bG)([L.A], () => L.A.getGuildId()),
        f = (0, C.jN)(t),
        x = s.useRef(null),
        E = s.useCallback((e, t) => {
            let n = x.current;
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
                    let t = x.current;
                    if (null == t) return e();
                    t.scrollTo(0, () => requestAnimationFrame(() => e()));
                }),
            [],
        ),
        b = s.useCallback(
            () =>
                new Promise((e) => {
                    let t = x.current;
                    if (null == t) return e();
                    t.scrollTo(Number.MAX_SAFE_INTEGER, () => requestAnimationFrame(() => e()));
                }),
            [],
        ),
        N = (0, o.Ay)({
            id: "channels",
            defaultFocused: n ?? void 0,
            isEnabled: r,
            setFocus: E,
            scrollToStart: I,
            scrollToEnd: b,
        }),
        T = N.setFocus;
    s.useEffect(() => {
        null != n && T(n);
    }, [n, T]);
    let v = (0, S.A)(t);
    return (0, i.jsx)(g.f5, {
        value: d,
        children: (0, i.jsx)(h.A, {
            section: ei.JJy.GUILD_CHANNEL_LIST,
            children: (0, i.jsx)(a.hD, {
                navigator: N,
                children: (0, i.jsx)(eo, {
                    ...e,
                    listNavigator: N,
                    ref: x,
                    selectedChannel: u,
                    selectedVoiceChannel: m,
                    stageChannelSpeakerVoiceStates: v,
                    selectedGuildId: _,
                    optInEnabled: f,
                }),
            }),
        }),
    });
};
function ed(e) {
    let t = (0, G.x)(),
        { density: n } = (0, d.wRf)();
    return (0, i.jsx)(ec, { ...e, guildChannels: t, guildChannelsVersion: 0, withGuildIcon: !1, density: n });
}
function eu(e) {
    let t = (0, P.A)(e.guild),
        n = (0, c.cf)([D.A], () => D.A.getGuild(e.guildId, { guildActionRows: t })),
        { density: s } = (0, d.wRf)();
    return (0, i.jsx)(ec, { ...e, ...n, density: s });
}
