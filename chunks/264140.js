"use strict";
n.d(t, { A: () => tl }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(284009),
    o = n.n(r),
    c = n(735438),
    d = n.n(c),
    u = n(873263),
    h = n(311907),
    A = n(554146),
    m = n(192308),
    g = n(397927),
    p = n(367513),
    _ = n(442433);
n(183994);
var f = n(483270),
    x = n(738876),
    C = n(456412),
    E = n(432371),
    I = n(475743),
    N = n(933958),
    b = n(156579),
    S = n(108959),
    T = n(480720),
    v = n(323073),
    y = n(793574),
    j = n(568598),
    R = n(313961),
    O = n(164617),
    L = n(540462),
    M = n(355622),
    D = n(689874),
    G = n(17447),
    U = n(453738),
    P = n(268218),
    w = n(726249),
    k = n(274146),
    V = n(826673),
    B = n(93055),
    H = n(713842),
    F = n(91242),
    K = n(857253),
    W = n(872363),
    Y = n(211059),
    z = n(547015),
    q = n(561446),
    X = n(300233),
    J = n(721592),
    Q = n(403363),
    $ = n(397036),
    Z = n(732044),
    ee = n(733441),
    et = n(187360),
    en = n(287074),
    ei = n(867624),
    es = n(899584),
    el = n(742589),
    ea = n(353428),
    er = n(402385),
    eo = n(95550),
    ec = n(467480),
    ed = n(788579),
    eu = n(744483),
    eh = n(889752),
    eA = n(376943),
    em = n(857071),
    eg = n(394953),
    ep = n(187582),
    e_ = n(164203),
    ef = n(976860),
    ex = n(378570),
    eC = n(822382),
    eE = n(23179),
    eI = n(138298),
    eN = n(940382),
    eb = n(323443),
    eS = n(566388),
    eT = n(168675),
    ev = n(170428),
    ey = n(494208),
    ej = n(933057),
    eR = n(328808),
    eO = n(415586),
    eL = n(210714),
    eM = n(657331),
    eD = n(328776),
    eG = n(522556),
    eU = n(447696),
    eP = n(684407),
    ew = n(709544),
    ek = n(761640),
    eV = n(734057),
    eB = n(31717),
    eH = n(919638),
    eF = n(71393),
    eK = n(290863),
    eW = n(383501),
    eY = n(309010),
    ez = n(287809),
    eq = n(977997),
    eX = n(47167),
    eJ = n(698718),
    eQ = n(812771),
    e$ = n(991275),
    eZ = n(59e3),
    e0 = n(377045),
    e1 = n(402216),
    e9 = n(746080),
    e7 = n(652215),
    e6 = n(5867),
    e2 = n(806931),
    e3 = n(49999),
    e5 = n(165610),
    e8 = n(957173),
    e4 = n(516607),
    te = n(985018),
    tt = n(370808);
let tn = (0, P.Fe)({
    createPromise: () => n.e("46875").then(n.bind(n, 625846)),
    webpackId: 625846,
    renderLoader: () => (0, i.jsx)("div", { className: tt.wG, children: (0, i.jsx)(g.y$y, {}) }),
    name: "ForumChannel",
});
class ti extends s.PureComponent {
    state = { topicExpanded: !1, threadSidebarWidth: void 0, isThreadSidebarFloating: !1 };
    componentDidMount() {
        (0, eL.d)("guild_channel");
    }
    componentDidUpdate(e) {
        null != this.props.channel &&
            null != e.channel &&
            this.props.channel.id !== e.channel.id &&
            this.state.topicExpanded &&
            this.setState({ topicExpanded: !1 }),
            this.openChannelModal();
    }
    handleTitleParentClick = () => {
        let { parentChannel: e } = this.props;
        null != e && (0, ex.iN)(e.id);
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
            (0, eM.openUserProfileModal)({
                userId: e.getRecipientId(),
                guildId: e.guild_id,
                channelId: e.id,
                sourceAnalyticsLocations: [y.A.CHANNEL_HEADER],
            });
    };
    openChannelContextMenu(e, t) {
        let { guild: s } = this.props;
        o()(null != t, "Missing channel in Channel.openChannelContextMenu"),
            o()(null != s, "Missing guild in Channel.openChannelContextMenu"),
            (0, _.L3)(e, async () => {
                let { default: e } = await n.e("39806").then(n.bind(n, 340968));
                return (n) => (0, i.jsx)(e, { ...n, channel: t, guild: s });
            });
    }
    openThreadContextMenu(e, t) {
        o()(null != t, "Missing channel in Channel.openChannelContextMenu"),
            (0, _.L3)(e, async () => {
                let { default: e } = await n.e("33").then(n.bind(n, 44536));
                return (n) => (0, i.jsx)(e, { ...n, channel: t });
            });
    }
    openDMContextMenu(e, t) {
        o()(null != t, "Missing channel in Channel.openDMContextMenu");
        let s = ez.default.getUser(t.getRecipientId());
        o()(null != s, "Missing user in Channel.openDMContextMenu"),
            (0, _.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("97262"), n.e("42128"), n.e("39778"), n.e("49783")]).then(
                    n.bind(n, 385913),
                );
                return (n) => (0, i.jsx)(e, { ...n, user: s, channelSelected: !0, channel: t });
            });
    }
    renderJoinRequestInterviewButtons = () => {
        let { channel: e } = this.props;
        return e?.hasFlag(e9.lx.IS_JOIN_REQUEST_INTERVIEW_CHANNEL)
            ? (0, i.jsx)(q.A, { channelId: e.id, showTrailingDivider: !0 })
            : null;
    };
    renderClipsEnabledIndicatorToolbarItem = () => {
        let { inCall: e, voiceChannel: t } = this.props;
        return e ? (0, i.jsx)(D.A, { channelId: null != t ? t.id : null }) : null;
    };
    renderStreamQualityLiveIndicatorToolbarItem = () => {
        let { selectedParticipant: e, premiumIndicatorEnabled: t } = this.props;
        return e?.type !== e2.lp.STREAM
            ? null
            : (0, i.jsx)(
                  W.A,
                  { size: e1.Ay.Sizes.LARGE, participant: e, showQuality: !0, premiumIndicator: t },
                  "live-indicator",
              );
    };
    renderHeaderToolbar = () => {
        let {
            channel: e,
            parentChannel: t,
            isLurking: n,
            showCall: s,
            showActivityPanel: l,
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
                    r.push((0, i.jsx)(eu.A, { channel: e, showCallOrActivityPanel: s || l || a }, "profile")),
                    r.push((0, i.jsx)(ec.A, { channel: e }, "safety_tools"));
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
                e.isModeratorReportChannel() && r.push((0, i.jsx)(ev.A, { channel: e })),
                    null == t || t.isForumLikeChannel() || r.push((0, i.jsx)(ey.A, { channel: t }, "browser")),
                    e.isVocalThread() && r.push((0, i.jsx)(ed.A, { channel: e }, "thread-call")),
                    r.push((0, i.jsx)(ej.A, { channel: e }, "notifications")),
                    r.push((0, i.jsx)(en.A, { channel: e }, "pins")),
                    e.isArchivedThread() || r.push((0, i.jsx)(ee.A, { channelId: e.id }, "members")),
                    null != t && (0, E.pk)(e) && r.push((0, i.jsx)(ei.A, { channel: e }, "summaries")),
                    r.push((0, i.jsx)(eR.A, { channel: e }, "threads-overflow"));
                break;
            case e7.rbe.GUILD_ANNOUNCEMENT:
            case e7.rbe.GUILD_TEXT:
                r.push((0, i.jsx)(ey.A, { channel: e }, "browser")),
                    n || r.push((0, i.jsx)(et.A, { channel: e }, "notifications")),
                    r.push((0, i.jsx)(en.A, { channel: e }, "pins")),
                    (0, G.f)("channel_header") && r.push((0, i.jsx)(Z.A, { channelId: e.id }, "conversations")),
                    r.push((0, i.jsx)(ee.A, { channelId: e.id }, "members")),
                    (0, E.pk)(e) && r.push((0, i.jsx)(ei.A, { channel: e }, "summaries"));
                break;
            case e7.rbe.GUILD_FORUM:
            case e7.rbe.GUILD_MEDIA:
                n ||
                    (r.push((0, i.jsx)(es.A, { channel: e }, "forum-onboarding")),
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
                  children: (0, i.jsx)(g.Button, {
                      variant: "secondary",
                      size: "sm",
                      text: te.intl.string(te.t["3aOv+h"]),
                      onClick: () =>
                          (0, g.mMO)(async () => {
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
            guild: s,
            guildId: l,
            showCall: r,
            showActivityPanel: c,
            showFramePanel: d,
            hasVideo: u,
            showHeaderGuildBreadcrumb: h,
            isFavorites: A,
        } = this.props;
        o()(null != e, "Missing channel in Channel.renderHeaderBar"),
            o()(null != t, "Should not be null if channel is not null.");
        let m = e.isDM() && !e.isSystemDM() ? this.openUserProfile : h ? () => (0, ex.iN)(e.id) : void 0,
            p = n?.guild_id != null && n?.id != null ? this.handleTitleParentClick : void 0,
            _ = c || d,
            f = r || _;
        return (0, i.jsxs)("div", {
            className: tt.SC,
            children: [
                (0, i.jsx)(g.NPJ, {
                    theme: u && r ? e7.NJ8.DARK : void 0,
                    children: (r) =>
                        (0, i.jsxs)(
                            el.A,
                            {
                                guildId: l,
                                channelId: e.id,
                                channelType: e.type,
                                hideSearch: e.isDirectory() || (A && !(0, eC.Eq)()),
                                showDivider: A && !(0, eC.Eq)(),
                                toolbar: this.renderHeaderToolbar(),
                                mobileToolbar: this.renderMobileToolbar(),
                                className: a()(tt.DD, r, { [tt.zh]: e.type === e7.rbe.GROUP_DM }),
                                transparent: f,
                                hidden: d,
                                "aria-label": te.intl.string(te.t.BIYAqa),
                                children: [
                                    h && (0, i.jsx)(ea.i$, { channel: e, guild: s, caretPosition: "right" }),
                                    (0, ea.zF)({
                                        channel: e,
                                        channelName: t,
                                        parentChannel: n,
                                        guild: s,
                                        hasVideo: u,
                                        handleContextMenu: this.handleContextMenu,
                                        handleParentContextMenu: this.handleParentContextMenu,
                                        handleClick: m,
                                        handleParentClick: p,
                                        renderFollowButton: this.renderFollowButton,
                                    }),
                                    h
                                        ? (0, i.jsx)("div", {
                                              className: tt.u8,
                                              children: (0, i.jsx)(g.Button, {
                                                  onClick: () => (0, ef.uh)(e.guild_id, e.id),
                                                  variant: "secondary",
                                                  size: "sm",
                                                  text: te.intl.string(te.t.k5WiPf),
                                              }),
                                          })
                                        : (0, ea.EP)(e, s),
                                ],
                            },
                            `header-${e.id}`,
                        ),
                }),
                (0, i.jsx)(e_.A, { channelId: e.id }),
            ],
        });
    };
    shouldRenderCall() {
        let { showCall: e, channelIsContentGated: t } = this.props;
        return !t && e;
    }
    renderCall() {
        let { channel: e } = this.props;
        if ((o()(null != e, "Missing channel in Channel.renderCall"), !this.shouldRenderCall())) return null;
        switch (e.type) {
            case e7.rbe.GUILD_STAGE_VOICE:
                return (0, i.jsx)(eS.A, { channel: e, popoutType: O.N.NO_POPOUT }, e.id);
            case e7.rbe.GUILD_VOICE:
            case e7.rbe.DM:
            case e7.rbe.GROUP_DM:
            case e7.rbe.PUBLIC_THREAD:
            case e7.rbe.PRIVATE_THREAD:
                let t = this.props.height - 200;
                return (0, i.jsx)(
                    L.A,
                    { channel: e, renderExternalHeader: this.renderHeaderBar, maxHeight: t, popoutType: O.N.NO_POPOUT },
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
        return (0, i.jsx)(b.A, { maxHeight: n, renderExternalHeader: this.renderHeaderBar });
    }
    renderChat() {
        let { channel: e, guild: t, needSubscriptionToAccess: n, channelIsContentGated: s, inCall: l } = this.props;
        if ((o()(null != e, "Missing channel in Channel.renderChat"), n))
            return (o()(null != t, "premium channels must exist within a guild"),
            e?.isRoleSubscriptionTemplatePreviewChannel())
                ? (0, i.jsx)(Q.A, { guildId: t.id })
                : (0, i.jsx)(X.H, { guildId: t.id, children: (0, i.jsx)($.A, { channelId: e.id, guildId: t.id }) });
        if (s) return (0, i.jsx)(eG.A, { guild: t, channelId: e.id });
        if (e.isGuildVocal() || (l && e.isVocalThread())) return null;
        if (e.isDirectory())
            return (
                o()(null != t, "directory channels must exist within a guild"),
                (0, i.jsx)(k.A, { channel: e, guild: t })
            );
        if (e.isForumLikeChannel()) {
            o()(null != t, "forum channels must exist within a guild");
            let n = {
                isThreadSidebarFloating: this.state.isThreadSidebarFloating,
                threadSidebarWidth: this.state.threadSidebarWidth,
            };
            return (0, i.jsx)(tn, { channel: e, guild: t, sidebarState: n }, e.id);
        }
        return (0, i.jsx)(eJ.A, { channel: e, guild: t, chatInputType: M.oU.NORMAL }, null != t ? t.id : "home");
    }
    renderSidebar() {
        let {
            channel: e,
            parentChannel: t,
            guild: n,
            needSubscriptionToAccess: s,
            section: l,
            showCall: a,
            showActivityPanel: r,
            showFramePanel: c,
        } = this.props;
        if ((o()(null != e, "Missing channel in Channel.renderSidebar"), __OVERLAY__ || s));
        else if (l === e7.YvQ.PROFILE && e.isPrivate() && !a && !r && !c)
            return (0, i.jsx)(eD.A, { channel: e }, `private-channel-profile-${e.id}`);
        else if (l === e7.YvQ.MEMBERS)
            switch (e.type) {
                case e7.rbe.GROUP_DM:
                    return (0, i.jsx)(ep.A, { channel: e }, `private-channel-recipients-${e.id}`);
                case e7.rbe.GUILD_DIRECTORY:
                case e7.rbe.GUILD_FORUM:
                case e7.rbe.GUILD_MEDIA:
                case e7.rbe.GUILD_ANNOUNCEMENT:
                case e7.rbe.GUILD_TEXT:
                    let d = !0 === e7.kvI.GUILD_THREADS_ONLY.has(e.type) ? e.id : (e.guild_id ?? e.id);
                    return (0, i.jsx)(e$.A, { channel: e }, `channel-members-${d}`);
                case e7.rbe.ANNOUNCEMENT_THREAD:
                    if (null != t) return (0, i.jsx)(e$.A, { channel: t }, `channel-members-${t.id}`);
                    break;
                case e7.rbe.PUBLIC_THREAD:
                case e7.rbe.PRIVATE_THREAD:
                    if (!e.isArchivedThread() && null != n)
                        return (0, i.jsx)(f.A, { channel: e, guild: n }, `channel-members-${e.id}`);
            }
        else if (l === e7.YvQ.CONVERSATIONS)
            switch (e.type) {
                case e7.rbe.GUILD_TEXT:
                case e7.rbe.GUILD_ANNOUNCEMENT:
                    return (0, i.jsx)(U.A, { channel: e }, `channel-conversations-${e.id}`);
            }
        else if (l === e7.YvQ.SEARCH) return (0, i.jsx)(eE.A, { guildId: n?.id, channelId: e.id });
        return null;
    }
    openChannelModal() {
        let {
            channel: e,
            guildId: t,
            hasModalOpen: s,
            showWelcomeModal: l,
            isLurking: a,
            isUnavailable: r,
            showRealNameModal: o,
        } = this.props;
        return (
            null == e ||
                null == t ||
                r ||
                s ||
                (o &&
                    (0, g.mMO)(
                        async () => {
                            let { default: e } = await n.e("38763").then(n.bind(n, 201510));
                            return (n) => (0, i.jsx)(e, { ...n, guildId: t });
                        },
                        {
                            onCloseCallback: () => Y.A.viewPrompt(e8.X.REAL_NAME_PROMPT, t),
                            modalKey: "Guild Hub Real Name Modal",
                        },
                    ),
                l &&
                    (0, g.mMO)(
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
                channelSidebarState: s,
                guildSidebarState: l,
                width: a,
                channelIsContentGated: r,
            } = this.props;
        if (null == l && null == s) return null;
        if (n === e7.YvQ.SIDEBAR_CHAT && null != s) {
            if (r) return null;
            switch (s.type) {
                case eN.PE.CREATE_THREAD:
                    if (t?.isForumLikeChannel()) return null;
                    e = (0, i.jsx)(eT.A, {
                        parentChannelId: s.parentChannelId,
                        parentMessageId: s.parentMessageId,
                        location: s.location,
                    });
                    break;
                case eN.PE.VIEW_THREAD:
                    let n = t?.isForumLikeChannel() ? H.A : eO.A;
                    e = (0, i.jsx)(n, { channelId: s.channelId });
                    break;
                case eN.PE.VIEW_MOD_REPORT:
                    e = (0, i.jsx)(eO.A, { channelId: s.channelId, baseChannelId: s.baseChannelId });
                    break;
                case eN.PE.VIEW_CHANNEL:
                case eN.PE.VIEW_MESSAGE_REQUEST:
                default:
                    return null;
            }
        }
        if (null != l && null == e)
            if (l.type !== eN.QV.GUILD_MEMBER_MOD_VIEW) return null;
            else {
                let { guildId: e, userId: t, moderatorReportId: n } = l.details;
                return (0, i.jsx)("div", {
                    style: { width: e7.da6 },
                    className: tt.uC,
                    children: (0, i.jsx)(z.A, {
                        guildId: e,
                        userId: t,
                        moderatorReportId: n,
                        onClose: () => eI.A.closeGuildSidebar(e),
                    }),
                });
            }
        if (null == e) return null;
        let o = t?.type != null && e7.kvI.GUILD_THREADS_ONLY.has(t.type) ? 528 : 450,
            c = a - e7.MdR - o;
        return (
            (c += 375),
            (0, i.jsx)(eQ.A, {
                sidebarType:
                    t?.type != null && e7.kvI.GUILD_THREADS_ONLY.has(t.type) ? eQ.X.PostSidebar : eQ.X.ThreadSidebar,
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
                isUnavailable: s,
                layout: l,
                section: r,
                hasModalOpen: o,
                guildSidebarState: c,
                hasTextActivityInPanelMode: d,
            } = this.props,
            { threadSidebarWidth: u, isThreadSidebarFloating: h } = this.state,
            A = this.shouldRenderCall();
        if (s) return (0, i.jsx)(eZ.A, {});
        if (null == e) return (0, i.jsx)(e0.A, { channelId: this.props.channelId });
        let m = r === e7.YvQ.SIDEBAR_CHAT,
            g = null != c && !m,
            p = !e.isForumLikeChannel() && !o,
            _ = t?.name;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(w.HI, { location: _, subsection: n ?? void 0 }),
                (0, i.jsxs)("div", {
                    "data-has-border": e.type !== e7.rbe.GUILD_VOICE,
                    className: a()(tt.TE, { [tt.js]: m || g, [tt.jl]: m && h }),
                    children: [
                        p
                            ? (0, i.jsx)(x.A, {
                                  style: { right: m ? u : void 0 },
                                  className: tt.x4,
                                  channel: e,
                                  draftType: eB.C.ChannelMessage,
                              })
                            : null,
                        A || d ? null : this.renderHeaderBar(),
                        this.renderCall(),
                        this.renderEmbeddedActivityPanel(),
                        (0, i.jsxs)("div", {
                            className: a()(tt.Qs, { [tt.Oo]: l === e7.DUB.NO_CHAT }),
                            children: [this.renderChat(), this.renderSidebar()],
                        }),
                    ],
                }),
                this.renderThreadSidebar(),
            ],
        });
    }
}
let ts = (0, C.A)(ti),
    tl = s.memo(function (e) {
        let { providedChannel: t } = e,
            [n, l] = s.useState(null),
            a = (0, h.bG)([eY.A], () => eY.A.getChannelId()),
            r = (0, h.bG)([eY.A], () => eY.A.getVoiceChannelId()),
            o = (0, h.bG)([eV.A], () => t ?? eV.A.getChannel(a), [a, t]),
            c = (0, B.DZ)(),
            g = (0, B.e4)(o, "ConnectedChannel"),
            _ = (0, h.bG)([eV.A], () => eV.A.getChannel(r), [r]),
            f = g?.parent_id,
            x = (0, h.bG)([eV.A], () => eV.A.getChannel(f), [f]),
            C = (0, h.bG)([eF.A], () => eF.A.getGuild(g?.guild_id), [g]),
            { needSubscriptionToAccess: b } = (0, J.A)(g?.id ?? void 0),
            y = (0, h.bG)([R.A], () => {
                let e = null != a ? R.A.getParticipants(a) : [],
                    t = null != a ? R.A.getActivityParticipants(a) : [];
                return e.length - t.length > 0;
            }, [a]),
            O = (0, K.A)(),
            L = (0, h.bG)([eY.A], () => (O?.channelId ?? eY.A.getVoiceChannelId()) === g?.id),
            M = (0, h.bG)([N.Ay], () => (null != g ? N.Ay.getSelfEmbeddedActivityForChannel(g.id) : null), [g]),
            D = (0, h.bG)([eW.A], () => eW.A.isConnected()),
            G = (0, I.A)(D),
            U = D && !1 === G;
        s.useEffect(() => {
            L &&
                U &&
                null != M &&
                null != g &&
                p.A.selectParticipant(
                    g.id,
                    (0, j.Qt)({ applicationId: M.applicationId, instanceId: M.compositeInstanceId }),
                );
        }, [U, g, L, M]);
        let P = (0, h.bG)([N.Ay], () => N.Ay.getCurrentEmbeddedActivity()),
            w = (0, h.bG)([N.Ay], () => N.Ay.getActivityPanelMode()),
            k = null != P && !(0, S.A)(g?.id) && w === e6.Gd.PANEL,
            H = (0, h.bG)(
                [eq.A],
                () => null != g && g.isVocalThread() && !d().isEmpty(eq.A.getVoiceStatesForChannel(g.id)),
                [g],
            ),
            W = null != g && g.isPrivate() && !k && y,
            Y = g?.isGuildVocal() || W || H,
            z = (0, h.bG)([F.A], () => F.A.getFrameLayoutMode() === e5.y.FOCUSED),
            { welcomeModalChannelId: q } = (0, u.zy)(),
            X = (0, h.bG)([em.A], () => null != g && em.A.isLurking(g.guild_id), [g]),
            Q = (0, h.bG)([eP.A], () => eP.A.hasSeen(g?.guild_id, X), [g, X]),
            $ = (0, h.bG)(
                [R.A, N.Ay],
                () =>
                    null != N.Ay.getConnectedActivityLocation() && N.Ay.getActivityPanelMode() === e6.Gd.PANEL
                        ? N.Ay.getFocusedLayout() === e6.E8.NO_CHAT
                            ? e7.DUB.NO_CHAT
                            : e7.DUB.NORMAL
                        : null != a
                          ? R.A.getLayout(a)
                          : e7.DUB.NORMAL,
                [a],
            ),
            Z = (0, eh.A)(C?.id),
            ee = (0, ew.A)(q, C?.id),
            { section: et, channelSidebarState: en } = (0, h.cf)(
                [ek.Ay],
                () => ({ section: ek.Ay.getSection(a, g?.isDM()), channelSidebarState: ek.Ay.getSidebarState(a) }),
                [a, g],
            ),
            ei = C?.id,
            es = (0, h.bG)([ek.Ay], () => ek.Ay.getGuildSidebarState(ei), [ei]),
            el = (0, eg.lI)(),
            ea = (0, eX.Ay)(g),
            er = (0, eX.Ay)(g, !0),
            eo = (0, h.bG)([R.A], () => (null != g ? R.A.getSelectedParticipant(g.id) : null)),
            ec = (0, v.vL)(g),
            ed = null != g && r === g.id,
            eu = null != g && g.isGuildStageVoice();
        (0, T.A)({ onTransition: void 0 }),
            s.useEffect(() => {
                let e = (0, ef.JK)();
                if (e?.location?.state?.stageInviteKey === e4.J2) {
                    let { channelId: t } = (0, eA.vu)(e?.location?.pathname) ?? {};
                    null != t && l(t);
                }
            }, []);
        let ep = { channel: g, inCurrentVoiceChannel: ed },
            e_ = s.useRef(ep);
        s.useEffect(() => {
            e_.current = ep;
        }),
            s.useEffect(() => {
                let { channel: e, inCurrentVoiceChannel: t } = e_.current;
                null != n && null != e && eu && e.id === n && !t && ((0, eb.av)(e), l(null));
            }, [n, eu]);
        let ex = (0, E.cI)(g),
            eC = null != g && g.isPrivate(),
            eE = (0, I.A)(eC),
            eI = (0, I.A)(g?.id);
        s.useEffect(() => {
            let e = eE && !eC,
                t = eE && eC && g?.id !== eI;
            (e || t) && (0, V.Dr)(A.M.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: e3.i.AUTO });
        }, [g?.id, eI, eC, eE]);
        let eN = (0, m.useHasAnyModalOpen)();
        return (0, i.jsx)(ts, {
            guildId: g?.guild_id,
            channelId: a,
            channel: g,
            channelName: ea,
            formattedChannelName: er,
            parentChannel: x,
            voiceChannel: _,
            layout: $,
            needSubscriptionToAccess: b,
            isLurking: X,
            hasModalOpen: eN,
            section: et,
            channelSidebarState: en,
            guildSidebarState: es,
            guild: C,
            showCall: !b && Y,
            showActivityPanel: k,
            showFramePanel: z,
            channelIsContentGated: ec,
            isMobile: (0, h.bG)([eK.A], () => g?.type === e7.rbe.DM && eK.A.isMobileOnline(g.getRecipientId()), [g]),
            isUnavailable: (0, h.bG)([eH.A], () => g?.guild_id != null && eH.A.isUnavailable(g.guild_id), [g]),
            showRealNameModal: Z,
            showWelcomeModal: !Q && ee,
            showFollowButton: (g?.type === e7.rbe.GUILD_ANNOUNCEMENT && C?.features.has(e7.GuildFeatures.NEWS)) || !1,
            ...(0, h.cf)([eq.A], () => ({ hasVideo: null != g && eq.A.hasVideo(g.id) }), [g]),
            inCall: ed,
            selectedParticipant: eo,
            showChannelSummaries: ex,
            isFavorites: c,
            showHeaderGuildBreadcrumb: c || el,
            premiumIndicatorEnabled: !1,
            hasTextActivityInPanelMode: k,
            embeddedActivity: P,
        });
    });
