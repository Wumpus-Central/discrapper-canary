n.d(t, { A: () => th }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(284009),
    o = n.n(r),
    d = n(735438),
    c = n.n(d),
    u = n(873263),
    h = n(311907),
    A = n(554146),
    _ = n(192308),
    m = n(289873),
    g = n(821609),
    p = n(43990),
    f = n(367513),
    E = n(442433);
n(183994);
var x = n(483270),
    I = n(738876),
    C = n(456412),
    b = n(432371),
    N = n(475743),
    S = n(933958),
    v = n(156579),
    T = n(108959),
    y = n(480720),
    R = n(323073),
    j = n(793574),
    L = n(568598),
    O = n(313961),
    G = n(164617),
    D = n(355622),
    M = n(689874),
    U = n(17447),
    P = n(453738),
    w = n(268218),
    k = n(726249),
    V = n(274146),
    B = n(826673),
    H = n(93055),
    F = n(713842),
    W = n(91242),
    Y = n(857253),
    K = n(872363),
    z = n(211059),
    q = n(561446),
    X = n(300233),
    Q = n(721592),
    J = n(403363),
    Z = n(397036),
    $ = n(732044),
    ee = n(733441),
    et = n(187360),
    en = n(287074),
    ei = n(867624),
    el = n(899584),
    es = n(742589),
    ea = n(353428),
    er = n(402385),
    eo = n(95550),
    ed = n(467480),
    ec = n(788579),
    eu = n(744483),
    eh = n(889752),
    eA = n(376943),
    e_ = n(857071),
    em = n(394953),
    eg = n(187582),
    ep = n(164203),
    ef = n(976860),
    eE = n(378570),
    ex = n(456206),
    eI = n(138298),
    eC = n(940382),
    eb = n(288254),
    eN = n(873614),
    eS = n(323443),
    ev = n(168675),
    eT = n(170428),
    ey = n(494208),
    eR = n(933057),
    ej = n(328808),
    eL = n(415586),
    eO = n(210714),
    eG = n(657331),
    eD = n(328776),
    eM = n(522556),
    eU = n(225315),
    eP = n(684407),
    ew = n(709544),
    ek = n(761640),
    eV = n(734057),
    eB = n(31717),
    eH = n(919638),
    eF = n(71393),
    eW = n(290863),
    eY = n(383501),
    eK = n(309010),
    ez = n(287809),
    eq = n(977997),
    eX = n(47167),
    eQ = n(698718),
    eJ = n(812771),
    eZ = n(991275),
    e$ = n(59e3),
    e0 = n(377045),
    e1 = n(402216),
    e6 = n(746080),
    e7 = n(652215),
    e3 = n(5867),
    e9 = n(806931),
    e2 = n(49999),
    e5 = n(165610),
    e8 = n(957173),
    e4 = n(516607),
    te = n(985018),
    tt = n(964623);
let tn = () => (0, i.jsx)("div", { className: tt.wG, children: (0, i.jsx)(m.y, {}) }),
    ti = (0, w.Fe)({
        createPromise: () => Promise.all([n.e("49681"), n.e("7602"), n.e("99998")]).then(n.bind(n, 625846)),
        webpackId: 625846,
        renderLoader: tn,
        name: "ForumChannel",
    }),
    tl = () =>
        Promise.all([
            n.e("755"),
            n.e("34519"),
            n.e("84114"),
            n.e("59965"),
            n.e("66788"),
            n.e("47620"),
            n.e("13779"),
            n.e("92461"),
        ]).then(n.bind(n, 540462)),
    ts = (0, w.Fe)({ createPromise: tl, webpackId: 540462, name: "ChannelCall", renderLoader: tn }),
    ta = () =>
        Promise.all([
            n.e("755"),
            n.e("34519"),
            n.e("84114"),
            n.e("59965"),
            n.e("66788"),
            n.e("47620"),
            n.e("55061"),
            n.e("17306"),
        ]).then(n.bind(n, 566388)),
    tr = (0, w.Fe)({ createPromise: ta, webpackId: 566388, name: "StageChannelCall", renderLoader: tn }),
    to = (0, w.Fe)({
        createPromise: () =>
            Promise.all([n.e("49681"), n.e("13334"), n.e("47810"), n.e("62368")]).then(n.bind(n, 23179)),
        webpackId: 23179,
        name: "SearchResults",
        renderLoader: () => (0, i.jsx)(ex.A, {}),
    }),
    td = (0, w.Fe)({
        createPromise: () =>
            Promise.all([n.e("49681"), n.e("28136"), n.e("15373"), n.e("13334"), n.e("13848")]).then(n.bind(n, 547015)),
        webpackId: 547015,
        name: "GuildMemberModViewSidebar",
    });
class tc extends l.PureComponent {
    state = { topicExpanded: !1, threadSidebarWidth: void 0, isThreadSidebarFloating: !1 };
    componentDidMount() {
        (0, eO.d)("guild_channel"), this.maybePreloadChannelCall();
    }
    componentDidUpdate(e) {
        null != this.props.channel &&
            null != e.channel &&
            this.props.channel.id !== e.channel.id &&
            this.state.topicExpanded &&
            this.setState({ topicExpanded: !1 }),
            this.props.channel?.type !== e.channel?.type && this.maybePreloadChannelCall(),
            this.openChannelModal();
    }
    maybePreloadChannelCall() {
        let e = this.props.channel?.type;
        e === e7.rbe.GUILD_VOICE ? tl() : e === e7.rbe.GUILD_STAGE_VOICE && ta();
    }
    handleTitleParentClick = () => {
        let { parentChannel: e } = this.props;
        null != e && (0, eE.iN)(e.id);
    };
    _handleContextMenu = (e, t) => {
        switch (t.type) {
            case e7.rbe.GUILD_VOICE:
            case e7.rbe.GUILD_ANNOUNCEMENT:
            case e7.rbe.GUILD_TEXT:
            case e7.rbe.GUILD_FORUM:
            case e7.rbe.GUILD_MEDIA:
                this.openChannelContextMenu(e, t);
                break;
            case e7.rbe.ANNOUNCEMENT_THREAD:
            case e7.rbe.PUBLIC_THREAD:
            case e7.rbe.PRIVATE_THREAD:
                this.openThreadContextMenu(e, t);
                break;
            case e7.rbe.DM:
                this.openDMContextMenu(e, t);
        }
    };
    handleContextMenu = (e) => {
        o()(null != this.props.channel, "Missing channel in Channel.handleContextMenu"),
            this._handleContextMenu(e, this.props.channel);
    };
    handleParentContextMenu = (e) => {
        o()(null != this.props.parentChannel, "Missing parentChannel in Channel.handleParentContextMenu"),
            this._handleContextMenu(e, this.props.parentChannel);
    };
    handleThreadSidebarResize = (e, t) => {
        this.setState({ threadSidebarWidth: e, isThreadSidebarFloating: t });
    };
    openUserProfile = () => {
        let { channel: e } = this.props;
        o()(e?.isPrivate(), "Missing private channel in Channel.openUserProfile"),
            (0, eG.openUserProfileModal)({
                userId: e.getRecipientId(),
                guildId: e.guild_id,
                channelId: e.id,
                sourceAnalyticsLocations: [j.A.CHANNEL_HEADER],
            });
    };
    openChannelContextMenu(e, t) {
        let { guild: l } = this.props;
        o()(null != t, "Missing channel in Channel.openChannelContextMenu"),
            o()(null != l, "Missing guild in Channel.openChannelContextMenu"),
            (0, E.L3)(e, async () => {
                let { default: e } = await n.e("17425").then(n.bind(n, 340968));
                return (n) => (0, i.jsx)(e, { ...n, channel: t, guild: l });
            });
    }
    openThreadContextMenu(e, t) {
        o()(null != t, "Missing channel in Channel.openChannelContextMenu"),
            (0, E.L3)(e, async () => {
                let { default: e } = await n.e("22414").then(n.bind(n, 44536));
                return (n) => (0, i.jsx)(e, { ...n, channel: t });
            });
    }
    openDMContextMenu(e, t) {
        o()(null != t, "Missing channel in Channel.openDMContextMenu");
        let l = ez.default.getUser(t.getRecipientId());
        o()(null != l, "Missing user in Channel.openDMContextMenu"),
            (0, E.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("97262"), n.e("42128"), n.e("39778"), n.e("97169")]).then(
                    n.bind(n, 385913),
                );
                return (n) => (0, i.jsx)(e, { ...n, user: l, channelSelected: !0, channel: t });
            });
    }
    renderJoinRequestInterviewButtons = () => {
        let { channel: e } = this.props;
        return e?.hasFlag(e6.lx.IS_JOIN_REQUEST_INTERVIEW_CHANNEL)
            ? (0, i.jsx)(q.A, { channelId: e.id, showTrailingDivider: !0 })
            : null;
    };
    renderClipsEnabledIndicatorToolbarItem = () => {
        let { inCall: e, voiceChannel: t } = this.props;
        return e ? (0, i.jsx)(M.A, { channelId: null != t ? t.id : null }) : null;
    };
    renderStreamQualityLiveIndicatorToolbarItem = () => {
        let { selectedParticipant: e, premiumIndicatorEnabled: t } = this.props;
        return e?.type !== e9.lp.STREAM
            ? null
            : (0, i.jsx)(
                  K.A,
                  { size: e1.Ay.Sizes.LARGE, participant: e, showQuality: !0, premiumIndicator: t },
                  "live-indicator",
              );
    };
    renderHeaderToolbar = () => {
        let {
            channel: e,
            parentChannel: t,
            isLurking: n,
            showCall: l,
            showActivityPanel: s,
            showFramePanel: a,
        } = this.props;
        o()(null != e, "Missing channel in Channel.renderHeaderToolbar");
        let r = [];
        if (e.isSystemDM()) return r;
        switch (e.type) {
            case e7.rbe.GUILD_STAGE_VOICE:
            case e7.rbe.GUILD_VOICE:
                break;
            case e7.rbe.DM:
                r.push(this.renderClipsEnabledIndicatorToolbarItem()),
                    r.push(this.renderStreamQualityLiveIndicatorToolbarItem()),
                    r.push((0, i.jsx)(er.A, { channel: e }, "calls")),
                    r.push((0, i.jsx)(en.A, { channel: e }, "pins")),
                    r.push((0, i.jsx)(eo.Ay, { channel: e, tooltip: te.intl.string(te.t.Xjlbvs) }, "invite")),
                    r.push((0, i.jsx)(eu.A, { channel: e, showCallOrActivityPanel: l || s || a }, "profile")),
                    r.push((0, i.jsx)(ed.A, { channel: e }, "safety_tools"));
                break;
            case e7.rbe.GROUP_DM:
                r.push(this.renderJoinRequestInterviewButtons()),
                    r.push(this.renderClipsEnabledIndicatorToolbarItem()),
                    r.push(this.renderStreamQualityLiveIndicatorToolbarItem()),
                    r.push((0, i.jsx)(er.A, { channel: e }, "calls")),
                    r.push((0, i.jsx)(en.A, { channel: e }, "pins")),
                    e.isManaged() ||
                        r.push((0, i.jsx)(eo.Ay, { channel: e, tooltip: te.intl.string(te.t.AQAPts) }, "invite")),
                    r.push((0, i.jsx)(ee.A, { channelId: e.id }, "members"));
                break;
            case e7.rbe.ANNOUNCEMENT_THREAD:
            case e7.rbe.PRIVATE_THREAD:
            case e7.rbe.PUBLIC_THREAD:
                e.isModeratorReportChannel() && r.push((0, i.jsx)(eT.A, { channel: e })),
                    null == t || t.isForumLikeChannel() || r.push((0, i.jsx)(ey.A, { channel: t }, "browser")),
                    e.isVocalThread() && r.push((0, i.jsx)(ec.A, { channel: e }, "thread-call")),
                    r.push((0, i.jsx)(eR.A, { channel: e }, "notifications")),
                    r.push((0, i.jsx)(en.A, { channel: e }, "pins")),
                    e.isArchivedThread() || r.push((0, i.jsx)(ee.A, { channelId: e.id }, "members")),
                    null != t && (0, b.pk)(e) && r.push((0, i.jsx)(ei.A, { channel: e }, "summaries")),
                    r.push((0, i.jsx)(ej.A, { channel: e }, "threads-overflow"));
                break;
            case e7.rbe.GUILD_ANNOUNCEMENT:
            case e7.rbe.GUILD_TEXT:
                r.push((0, i.jsx)(ey.A, { channel: e }, "browser")),
                    n || r.push((0, i.jsx)(et.A, { channel: e }, "notifications")),
                    r.push((0, i.jsx)(en.A, { channel: e }, "pins")),
                    (0, U.f)("channel_header") && r.push((0, i.jsx)($.A, { channelId: e.id }, "conversations")),
                    r.push((0, i.jsx)(ee.A, { channelId: e.id }, "members")),
                    (0, b.pk)(e) && r.push((0, i.jsx)(ei.A, { channel: e }, "summaries"));
                break;
            case e7.rbe.GUILD_FORUM:
            case e7.rbe.GUILD_MEDIA:
                n ||
                    (r.push((0, i.jsx)(el.A, { channel: e }, "forum-onboarding")),
                    r.push((0, i.jsx)(et.A, { channel: e }, "notifications"))),
                    __OVERLAY__ || r.push((0, i.jsx)(ee.A, { channelId: e.id }, "members"));
                break;
            case e7.rbe.GUILD_DIRECTORY:
                r.push((0, i.jsx)(ee.A, { channelId: e.id }, "members"));
        }
        return r;
    };
    renderMobileToolbar = () => {
        let { channel: e } = this.props;
        o()(null != e, "Missing channel in Channel.renderHeaderToolbar");
        let t = [];
        if (e.isSystemDM()) return t;
        switch (e.type) {
            case e7.rbe.GUILD_STAGE_VOICE:
            case e7.rbe.GUILD_VOICE:
            case e7.rbe.DM:
                break;
            case e7.rbe.GROUP_DM:
                t.push((0, i.jsx)(ee.A, { channelId: e.id }, "members"));
                break;
            case e7.rbe.ANNOUNCEMENT_THREAD:
            case e7.rbe.PRIVATE_THREAD:
            case e7.rbe.PUBLIC_THREAD:
                e.isArchivedThread() || t.push((0, i.jsx)(ee.A, { channelId: e.id }, "members"));
                break;
            case e7.rbe.GUILD_ANNOUNCEMENT:
            case e7.rbe.GUILD_TEXT:
            case e7.rbe.GUILD_FORUM:
            case e7.rbe.GUILD_MEDIA:
            case e7.rbe.GUILD_DIRECTORY:
                t.push((0, i.jsx)(ee.A, { channelId: e.id }, "members"));
        }
        return t;
    };
    renderFollowButton = () => {
        let { showFollowButton: e, channel: t } = this.props;
        return e
            ? (0, i.jsx)("div", {
                  className: tt.u8,
                  children: (0, i.jsx)(g.$, {
                      variant: "secondary",
                      size: "sm",
                      text: te.intl.string(te.t["3aOv+h"]),
                      onClick: () =>
                          (0, _.openModalLazy)(async () => {
                              let { default: e } = await n.e("66464").then(n.bind(n, 464035));
                              return (n) => (0, i.jsx)(e, { channel: t, ...n });
                          }),
                  }),
              })
            : null;
    };
    renderHeaderBar = () => {
        let {
            channel: e,
            channelName: t,
            parentChannel: n,
            guild: l,
            guildId: s,
            showCall: r,
            showActivityPanel: d,
            showFramePanel: c,
            hasVideo: u,
            showHeaderGuildBreadcrumb: h,
        } = this.props;
        o()(null != e, "Missing channel in Channel.renderHeaderBar"),
            o()(null != t, "Should not be null if channel is not null.");
        let A = e.isDM() && !e.isSystemDM() ? this.openUserProfile : h ? () => (0, eE.iN)(e.id) : void 0,
            _ = n?.guild_id != null && n?.id != null ? this.handleTitleParentClick : void 0,
            m = d || c,
            f = r || m;
        return (0, i.jsxs)("div", {
            className: tt.SC,
            children: [
                (0, i.jsx)(p.N, {
                    theme: u && r ? e7.NJ8.DARK : void 0,
                    children: (r) =>
                        (0, i.jsxs)(
                            es.A,
                            {
                                guildId: s,
                                channelId: e.id,
                                channelType: e.type,
                                hideSearch: e.isDirectory(),
                                toolbar: this.renderHeaderToolbar(),
                                mobileToolbar: this.renderMobileToolbar(),
                                className: a()(tt.DD, r, { [tt.zh]: e.type === e7.rbe.GROUP_DM }),
                                transparent: f,
                                hidden: c,
                                "aria-label": te.intl.string(te.t.BIYAqa),
                                children: [
                                    h && (0, i.jsx)(ea.i$, { channel: e, guild: l, caretPosition: "right" }),
                                    (0, ea.zF)({
                                        channel: e,
                                        channelName: t,
                                        parentChannel: n,
                                        guild: l,
                                        hasVideo: u,
                                        handleContextMenu: this.handleContextMenu,
                                        handleParentContextMenu: this.handleParentContextMenu,
                                        handleClick: A,
                                        handleParentClick: _,
                                        renderFollowButton: this.renderFollowButton,
                                    }),
                                    h
                                        ? (0, i.jsx)("div", {
                                              className: tt.u8,
                                              children: (0, i.jsx)(g.$, {
                                                  onClick: () => (0, ef.uh)(e.guild_id, e.id),
                                                  variant: "secondary",
                                                  size: "sm",
                                                  text: te.intl.string(te.t.k5WiPf),
                                              }),
                                          })
                                        : (0, ea.EP)(e, l),
                                ],
                            },
                            `header-${e.id}`,
                        ),
                }),
                (0, i.jsx)(ep.A, { channelId: e.id }),
            ],
        });
    };
    shouldRenderCall() {
        let { showCall: e, channelIsContentGated: t, spoilerGatingChannelId: n } = this.props;
        return !t && null == n && e;
    }
    renderCall() {
        let { channel: e } = this.props;
        if ((o()(null != e, "Missing channel in Channel.renderCall"), !this.shouldRenderCall())) return null;
        switch (e.type) {
            case e7.rbe.GUILD_STAGE_VOICE:
                return (0, i.jsx)(tr, { channel: e, popoutType: G.N.NO_POPOUT }, e.id);
            case e7.rbe.GUILD_VOICE:
            case e7.rbe.DM:
            case e7.rbe.GROUP_DM:
            case e7.rbe.PUBLIC_THREAD:
            case e7.rbe.PRIVATE_THREAD:
                let t = this.props.height - 200;
                return (0, i.jsx)(
                    ts,
                    { channel: e, renderExternalHeader: this.renderHeaderBar, maxHeight: t, popoutType: G.N.NO_POPOUT },
                    `call-${e.id}`,
                );
            default:
                return null;
        }
    }
    renderEmbeddedActivityPanel() {
        let { channel: e } = this.props,
            t = this.shouldRenderCall();
        if ((o()(null != e, "Missing channel in Channel.renderEmbeddedActivityPanel"), t)) return null;
        let n = this.props.height - 200;
        return (0, i.jsx)(v.A, { maxHeight: n, renderExternalHeader: this.renderHeaderBar });
    }
    renderChat() {
        let {
            channel: e,
            guild: t,
            needSubscriptionToAccess: n,
            channelIsContentGated: l,
            spoilerGatingChannelId: s,
            inCall: a,
        } = this.props;
        if ((o()(null != e, "Missing channel in Channel.renderChat"), n))
            return (o()(null != t, "premium channels must exist within a guild"),
            e?.isRoleSubscriptionTemplatePreviewChannel())
                ? (0, i.jsx)(J.A, { guildId: t.id })
                : (0, i.jsx)(X.H, { guildId: t.id, children: (0, i.jsx)(Z.A, { channelId: e.id, guildId: t.id }) });
        if (l) return (0, i.jsx)(eM.A, { guild: t, channelId: e.id });
        if (null != s) return (0, i.jsx)(eN.A, { guild: t, channelId: s });
        if (e.isGuildVocal() || (a && e.isVocalThread())) return null;
        if (e.isDirectory())
            return (
                o()(null != t, "directory channels must exist within a guild"),
                (0, i.jsx)(V.A, { channel: e, guild: t })
            );
        if (e.isForumLikeChannel()) {
            o()(null != t, "forum channels must exist within a guild");
            let n = {
                isThreadSidebarFloating: this.state.isThreadSidebarFloating,
                threadSidebarWidth: this.state.threadSidebarWidth,
            };
            return (0, i.jsx)(ti, { channel: e, guild: t, sidebarState: n }, e.id);
        }
        return (0, i.jsx)(eQ.A, { channel: e, guild: t, chatInputType: D.oU.NORMAL }, null != t ? t.id : "home");
    }
    renderSidebar() {
        let {
            channel: e,
            parentChannel: t,
            guild: n,
            needSubscriptionToAccess: l,
            section: s,
            showCall: a,
            showActivityPanel: r,
            showFramePanel: d,
        } = this.props;
        if ((o()(null != e, "Missing channel in Channel.renderSidebar"), __OVERLAY__ || l));
        else if (s === e7.YvQ.PROFILE && e.isPrivate() && !a && !r && !d)
            return (0, i.jsx)(eD.A, { channel: e }, `private-channel-profile-${e.id}`);
        else if (s === e7.YvQ.MEMBERS)
            switch (e.type) {
                case e7.rbe.GROUP_DM:
                    return (0, i.jsx)(eg.A, { channel: e }, `private-channel-recipients-${e.id}`);
                case e7.rbe.GUILD_DIRECTORY:
                case e7.rbe.GUILD_FORUM:
                case e7.rbe.GUILD_MEDIA:
                case e7.rbe.GUILD_ANNOUNCEMENT:
                case e7.rbe.GUILD_TEXT:
                    let c = !0 === e7.kvI.GUILD_THREADS_ONLY.has(e.type) ? e.id : (e.guild_id ?? e.id);
                    return (0, i.jsx)(eZ.A, { channel: e }, `channel-members-${c}`);
                case e7.rbe.ANNOUNCEMENT_THREAD:
                    if (null != t) return (0, i.jsx)(eZ.A, { channel: t }, `channel-members-${t.id}`);
                    break;
                case e7.rbe.PUBLIC_THREAD:
                case e7.rbe.PRIVATE_THREAD:
                    if (!e.isArchivedThread() && null != n)
                        return (0, i.jsx)(x.A, { channel: e, guild: n }, `channel-members-${e.id}`);
            }
        else if (s === e7.YvQ.CONVERSATIONS)
            switch (e.type) {
                case e7.rbe.GUILD_TEXT:
                case e7.rbe.GUILD_ANNOUNCEMENT:
                    return (0, i.jsx)(P.A, { channel: e }, `channel-conversations-${e.id}`);
            }
        else if (s === e7.YvQ.SEARCH) return (0, i.jsx)(to, { guildId: n?.id, channelId: e.id });
        return null;
    }
    openChannelModal() {
        let {
            channel: e,
            guildId: t,
            hasModalOpen: l,
            showWelcomeModal: s,
            isLurking: a,
            isUnavailable: r,
            showRealNameModal: o,
        } = this.props;
        return (
            null == e ||
                null == t ||
                r ||
                l ||
                (o &&
                    (0, _.openModalLazy)(
                        async () => {
                            let { default: e } = await n.e("38763").then(n.bind(n, 201510));
                            return (n) => (0, i.jsx)(e, { ...n, guildId: t });
                        },
                        {
                            onCloseCallback: () => z.A.viewPrompt(e8.X.REAL_NAME_PROMPT, t),
                            modalKey: "Guild Hub Real Name Modal",
                        },
                    ),
                s &&
                    (0, _.openModalLazy)(
                        async () => {
                            let { default: e } = await n.e("98063").then(n.bind(n, 143154));
                            return (n) => (0, i.jsx)(e, { ...n, guildId: t });
                        },
                        { onCloseCallback: () => (0, eU.ry)(t, a), modalKey: "Guild Welcome Screen Modal" },
                    )),
            null
        );
    }
    renderThreadSidebar() {
        let e,
            {
                channel: t,
                section: n,
                channelSidebarState: l,
                guildSidebarState: s,
                width: a,
                channelIsContentGated: r,
                spoilerGatingChannelId: o,
            } = this.props;
        if (null == s && null == l) return null;
        if (n === e7.YvQ.SIDEBAR_CHAT && null != l) {
            if (r || null != o) return null;
            switch (l.type) {
                case eC.PE.CREATE_THREAD:
                    if (t?.isForumLikeChannel()) return null;
                    e = (0, i.jsx)(ev.A, {
                        parentChannelId: l.parentChannelId,
                        parentMessageId: l.parentMessageId,
                        location: l.location,
                    });
                    break;
                case eC.PE.VIEW_THREAD:
                    let n = t?.isForumLikeChannel() ? F.A : eL.A;
                    e = (0, i.jsx)(n, { channelId: l.channelId });
                    break;
                case eC.PE.VIEW_MOD_REPORT:
                    e = (0, i.jsx)(eL.A, { channelId: l.channelId, baseChannelId: l.baseChannelId });
                    break;
                case eC.PE.VIEW_CHANNEL:
                case eC.PE.VIEW_MESSAGE_REQUEST:
                default:
                    return null;
            }
        }
        if (null != s && null == e)
            if (s.type !== eC.QV.GUILD_MEMBER_MOD_VIEW) return null;
            else {
                let { guildId: e, userId: t, moderatorReportId: n } = s.details;
                return (0, i.jsx)("div", {
                    style: { width: e7.da6 },
                    className: tt.uC,
                    children: (0, i.jsx)(td, {
                        guildId: e,
                        userId: t,
                        moderatorReportId: n,
                        onClose: () => eI.A.closeGuildSidebar(e),
                    }),
                });
            }
        if (null == e) return null;
        let d = t?.type != null && e7.kvI.GUILD_THREADS_ONLY.has(t.type) ? 528 : 450,
            c = a - e7.MdR - d;
        return (
            (c += 375),
            (0, i.jsx)(eJ.A, {
                sidebarType:
                    t?.type != null && e7.kvI.GUILD_THREADS_ONLY.has(t.type) ? eJ.X.PostSidebar : eJ.X.ThreadSidebar,
                maxWidth: c,
                onWidthChange: this.handleThreadSidebarResize,
                children: e,
            })
        );
    }
    render() {
        let {
                channel: e,
                guild: t,
                formattedChannelName: n,
                isUnavailable: l,
                layout: s,
                section: r,
                hasModalOpen: o,
                guildSidebarState: d,
                hasTextActivityInPanelMode: c,
            } = this.props,
            { threadSidebarWidth: u, isThreadSidebarFloating: h } = this.state,
            A = this.shouldRenderCall();
        if (l) return (0, i.jsx)(e$.A, {});
        if (null == e) return (0, i.jsx)(e0.A, { channelId: this.props.channelId });
        let _ = r === e7.YvQ.SIDEBAR_CHAT,
            m = null != d && !_,
            g = !e.isForumLikeChannel() && !o,
            p = t?.name;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(k.HI, { location: p, subsection: n ?? void 0 }),
                (0, i.jsxs)("div", {
                    "data-has-border": e.type !== e7.rbe.GUILD_VOICE,
                    className: a()(tt.TE, { [tt.js]: _ || m, [tt.jl]: _ && h }),
                    children: [
                        g
                            ? (0, i.jsx)(I.A, {
                                  style: { right: _ ? u : void 0 },
                                  className: tt.x4,
                                  channel: e,
                                  draftType: eB.C.ChannelMessage,
                              })
                            : null,
                        A || c ? null : this.renderHeaderBar(),
                        this.renderCall(),
                        this.renderEmbeddedActivityPanel(),
                        (0, i.jsxs)("div", {
                            className: a()(tt.Qs, { [tt.Oo]: s === e7.DUB.NO_CHAT }),
                            children: [this.renderChat(), this.renderSidebar()],
                        }),
                    ],
                }),
                this.renderThreadSidebar(),
            ],
        });
    }
}
let tu = (0, C.A)(tc),
    th = l.memo(function (e) {
        let { providedChannel: t } = e,
            [n, s] = l.useState(null),
            a = (0, h.bG)([eK.A], () => eK.A.getChannelId()),
            r = (0, h.bG)([eK.A], () => eK.A.getVoiceChannelId()),
            o = (0, h.bG)([eV.A], () => t ?? eV.A.getChannel(a), [a, t]),
            d = (0, H.DZ)(),
            m = (0, H.e4)(o, "ConnectedChannel"),
            g = (0, h.bG)([eV.A], () => eV.A.getChannel(r), [r]),
            p = m?.parent_id,
            E = (0, h.bG)([eV.A], () => eV.A.getChannel(p), [p]),
            x = (0, h.bG)([eF.A], () => eF.A.getGuild(m?.guild_id), [m]),
            { needSubscriptionToAccess: I } = (0, Q.A)(m?.id ?? void 0),
            C = (0, h.bG)([O.A], () => {
                let e = null != a ? O.A.getParticipants(a) : [],
                    t = null != a ? O.A.getActivityParticipants(a) : [];
                return e.length - t.length > 0;
            }, [a]),
            v = (0, Y.A)(),
            j = (0, h.bG)([eK.A], () => (v?.channelId ?? eK.A.getVoiceChannelId()) === m?.id),
            G = (0, h.bG)([S.Ay], () => (null != m ? S.Ay.getSelfEmbeddedActivityForChannel(m.id) : null), [m]),
            D = (0, h.bG)([eY.A], () => eY.A.isConnected()),
            M = (0, N.A)(D),
            U = D && !1 === M;
        l.useEffect(() => {
            j &&
                U &&
                null != G &&
                null != m &&
                f.A.selectParticipant(
                    m.id,
                    (0, L.Qt)({ applicationId: G.applicationId, instanceId: G.compositeInstanceId }),
                );
        }, [U, m, j, G]);
        let P = (0, h.bG)([S.Ay], () => S.Ay.getCurrentEmbeddedActivity()),
            w = (0, h.bG)([S.Ay], () => S.Ay.getActivityPanelMode()),
            k = null != P && !(0, T.A)(m?.id) && w === e3.Gd.PANEL,
            V = (0, h.bG)(
                [eq.A],
                () => null != m && m.isVocalThread() && !c().isEmpty(eq.A.getVoiceStatesForChannel(m.id)),
                [m],
            ),
            F = null != m && m.isPrivate() && !k && C,
            K = m?.isGuildVocal() || F || V,
            z = (0, h.bG)([W.A], () => W.A.getFrameLayoutMode() === e5.y.FOCUSED),
            { welcomeModalChannelId: q } = (0, u.zy)(),
            X = (0, h.bG)([e_.A], () => null != m && e_.A.isLurking(m.guild_id), [m]),
            J = (0, h.bG)([eP.A], () => eP.A.hasSeen(m?.guild_id, X), [m, X]),
            Z = (0, h.bG)(
                [O.A, S.Ay],
                () =>
                    null != S.Ay.getConnectedActivityLocation() && S.Ay.getActivityPanelMode() === e3.Gd.PANEL
                        ? S.Ay.getFocusedLayout() === e3.E8.NO_CHAT
                            ? e7.DUB.NO_CHAT
                            : e7.DUB.NORMAL
                        : null != a
                          ? O.A.getLayout(a)
                          : e7.DUB.NORMAL,
                [a],
            ),
            $ = (0, eh.A)(x?.id),
            ee = (0, ew.A)(q, x?.id),
            { section: et, channelSidebarState: en } = (0, h.cf)(
                [ek.Ay],
                () => ({ section: ek.Ay.getSection(a, m?.isDM()), channelSidebarState: ek.Ay.getSidebarState(a) }),
                [a, m],
            ),
            ei = x?.id,
            el = (0, h.bG)([ek.Ay], () => ek.Ay.getGuildSidebarState(ei), [ei]),
            es = (0, em.lI)(),
            ea = (0, eX.Ay)(m),
            er = (0, eX.Ay)(m, !0),
            eo = (0, h.bG)([O.A], () => (null != m ? O.A.getSelectedParticipant(m.id) : null)),
            ed = (0, R.vL)(m),
            ec = (0, eb.Uf)(m),
            eu = null != m && r === m.id,
            eg = null != m && m.isGuildStageVoice();
        (0, y.A)({ onTransition: void 0 }),
            l.useEffect(() => {
                let e = (0, ef.JK)();
                if (e?.location?.state?.stageInviteKey === e4.J2) {
                    let { channelId: t } = (0, eA.vu)(e?.location?.pathname) ?? {};
                    null != t && s(t);
                }
            }, []);
        let ep = { channel: m, inCurrentVoiceChannel: eu },
            eE = l.useRef(ep);
        l.useEffect(() => {
            eE.current = ep;
        }),
            l.useEffect(() => {
                let { channel: e, inCurrentVoiceChannel: t } = eE.current;
                null != n && null != e && eg && e.id === n && !t && ((0, eS.av)(e), s(null));
            }, [n, eg]);
        let ex = (0, b.cI)(m),
            eI = null != m && m.isPrivate(),
            eC = (0, N.A)(eI),
            eN = (0, N.A)(m?.id);
        l.useEffect(() => {
            let e = eC && !eI,
                t = eC && eI && m?.id !== eN;
            (e || t) && (0, B.Dr)(A.M.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: e2.i.AUTO });
        }, [m?.id, eN, eI, eC]);
        let ev = (0, _.useHasAnyModalOpen)();
        return (0, i.jsx)(tu, {
            guildId: m?.guild_id,
            channelId: a,
            channel: m,
            channelName: ea,
            formattedChannelName: er,
            parentChannel: E,
            voiceChannel: g,
            layout: Z,
            needSubscriptionToAccess: I,
            isLurking: X,
            hasModalOpen: ev,
            section: et,
            channelSidebarState: en,
            guildSidebarState: el,
            guild: x,
            showCall: !I && K,
            showActivityPanel: k,
            showFramePanel: z,
            channelIsContentGated: ed,
            spoilerGatingChannelId: ec,
            isMobile: (0, h.bG)([eW.A], () => m?.type === e7.rbe.DM && eW.A.isMobileOnline(m.getRecipientId()), [m]),
            isUnavailable: (0, h.bG)([eH.A], () => m?.guild_id != null && eH.A.isUnavailable(m.guild_id), [m]),
            showRealNameModal: $,
            showWelcomeModal: !J && ee,
            showFollowButton: (m?.type === e7.rbe.GUILD_ANNOUNCEMENT && x?.features.has(e7.GuildFeatures.NEWS)) || !1,
            ...(0, h.cf)([eq.A], () => ({ hasVideo: null != m && eq.A.hasVideo(m.id) }), [m]),
            inCall: eu,
            selectedParticipant: eo,
            showChannelSummaries: ex,
            showHeaderGuildBreadcrumb: d || es,
            premiumIndicatorEnabled: !1,
            hasTextActivityInPanelMode: k,
            embeddedActivity: P,
        });
    });
