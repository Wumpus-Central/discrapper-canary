"use strict";
n.d(t, { A: () => tl }), n(321073);
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(284009),
    o = n.n(a),
    c = n(735438),
    d = n.n(c),
    u = n(873263),
    h = n(311907),
    A = n(554146),
    m = n(192308),
    p = n(397927),
    g = n(367513),
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
    Q = n(721592),
    J = n(403363),
    $ = n(397036),
    Z = n(732044),
    ee = n(733441),
    et = n(187360),
    en = n(287074),
    ei = n(867624),
    es = n(899584),
    el = n(742589),
    er = n(353428),
    ea = n(402385),
    eo = n(95550),
    ec = n(467480),
    ed = n(788579),
    eu = n(744483),
    eh = n(889752),
    eA = n(376943),
    em = n(857071),
    ep = n(394953),
    eg = n(187582),
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
    eQ = n(698718),
    eJ = n(812771),
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
    tt = n(638990);
let tn = (0, P.Fe)({
    createPromise: () => n.e("46875").then(n.bind(n, 625846)),
    webpackId: 625846,
    renderLoader: () => (0, i.jsx)("div", { className: tt.wG, children: (0, i.jsx)(p.y$y, {}) }),
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
                let { default: e } = await Promise.all([n.e("97262"), n.e("42128"), n.e("39778"), n.e("60770")]).then(
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
            showFramePanel: r,
        } = this.props;
        o()(null != e, "Missing channel in Channel.renderHeaderToolbar");
        let a = [];
        if (e.isSystemDM()) return a;
        switch (e.type) {
            case e7.rbe.GUILD_STAGE_VOICE:
            case e7.rbe.GUILD_VOICE:
                break;
            case e7.rbe.DM:
                a.push(this.renderClipsEnabledIndicatorToolbarItem()),
                    a.push(this.renderStreamQualityLiveIndicatorToolbarItem()),
                    a.push((0, i.jsx)(ea.A, { channel: e }, "calls")),
                    a.push((0, i.jsx)(en.A, { channel: e }, "pins")),
                    a.push((0, i.jsx)(eo.Ay, { channel: e, tooltip: te.intl.string(te.t.Xjlbvs) }, "invite")),
                    a.push((0, i.jsx)(eu.A, { channel: e, showCallOrActivityPanel: s || l || r }, "profile")),
                    a.push((0, i.jsx)(ec.A, { channel: e }, "safety_tools"));
                break;
            case e7.rbe.GROUP_DM:
                a.push(this.renderJoinRequestInterviewButtons()),
                    a.push(this.renderClipsEnabledIndicatorToolbarItem()),
                    a.push(this.renderStreamQualityLiveIndicatorToolbarItem()),
                    a.push((0, i.jsx)(ea.A, { channel: e }, "calls")),
                    a.push((0, i.jsx)(en.A, { channel: e }, "pins")),
                    e.isManaged() ||
                        a.push((0, i.jsx)(eo.Ay, { channel: e, tooltip: te.intl.string(te.t.AQAPts) }, "invite")),
                    a.push((0, i.jsx)(ee.A, { channelId: e.id }, "members"));
                break;
            case e7.rbe.ANNOUNCEMENT_THREAD:
            case e7.rbe.PRIVATE_THREAD:
            case e7.rbe.PUBLIC_THREAD:
                e.isModeratorReportChannel() && a.push((0, i.jsx)(ev.A, { channel: e })),
                    null == t || t.isForumLikeChannel() || a.push((0, i.jsx)(ey.A, { channel: t }, "browser")),
                    e.isVocalThread() && a.push((0, i.jsx)(ed.A, { channel: e }, "thread-call")),
                    a.push((0, i.jsx)(ej.A, { channel: e }, "notifications")),
                    a.push((0, i.jsx)(en.A, { channel: e }, "pins")),
                    e.isArchivedThread() || a.push((0, i.jsx)(ee.A, { channelId: e.id }, "members")),
                    null != t && (0, E.pk)(e) && a.push((0, i.jsx)(ei.A, { channel: e }, "summaries")),
                    a.push((0, i.jsx)(eR.A, { channel: e }, "threads-overflow"));
                break;
            case e7.rbe.GUILD_ANNOUNCEMENT:
            case e7.rbe.GUILD_TEXT:
                a.push((0, i.jsx)(ey.A, { channel: e }, "browser")),
                    n || a.push((0, i.jsx)(et.A, { channel: e }, "notifications")),
                    a.push((0, i.jsx)(en.A, { channel: e }, "pins")),
                    (0, G.f)("channel_header") && a.push((0, i.jsx)(Z.A, { channelId: e.id }, "conversations")),
                    a.push((0, i.jsx)(ee.A, { channelId: e.id }, "members")),
                    (0, E.pk)(e) && a.push((0, i.jsx)(ei.A, { channel: e }, "summaries"));
                break;
            case e7.rbe.GUILD_FORUM:
            case e7.rbe.GUILD_MEDIA:
                n ||
                    (a.push((0, i.jsx)(es.A, { channel: e }, "forum-onboarding")),
                    a.push((0, i.jsx)(et.A, { channel: e }, "notifications"))),
                    __OVERLAY__ || a.push((0, i.jsx)(ee.A, { channelId: e.id }, "members"));
                break;
            case e7.rbe.GUILD_DIRECTORY:
                a.push((0, i.jsx)(ee.A, { channelId: e.id }, "members"));
        }
        return a;
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
                  children: (0, i.jsx)(p.Button, {
                      variant: "secondary",
                      size: "sm",
                      text: te.intl.string(te.t["3aOv+h"]),
                      onClick: () =>
                          (0, p.mMO)(async () => {
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
            showCall: a,
            showActivityPanel: c,
            showFramePanel: d,
            hasVideo: u,
            showHeaderGuildBreadcrumb: h,
            isFavorites: A,
        } = this.props;
        o()(null != e, "Missing channel in Channel.renderHeaderBar"),
            o()(null != t, "Should not be null if channel is not null.");
        let m = e.isDM() && !e.isSystemDM() ? this.openUserProfile : h ? () => (0, ex.iN)(e.id) : void 0,
            g = n?.guild_id != null && n?.id != null ? this.handleTitleParentClick : void 0,
            _ = c || d,
            f = a || _;
        return (0, i.jsxs)("div", {
            className: tt.SC,
            children: [
                (0, i.jsx)(p.NPJ, {
                    theme: u && a ? e7.NJ8.DARK : void 0,
                    children: (a) =>
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
                                className: r()(tt.DD, a, { [tt.zh]: e.type === e7.rbe.GROUP_DM }),
                                transparent: f,
                                hidden: d,
                                "aria-label": te.intl.string(te.t.BIYAqa),
                                children: [
                                    h && (0, i.jsx)(er.i$, { channel: e, guild: s, caretPosition: "right" }),
                                    (0, er.zF)({
                                        channel: e,
                                        channelName: t,
                                        parentChannel: n,
                                        guild: s,
                                        hasVideo: u,
                                        handleContextMenu: this.handleContextMenu,
                                        handleParentContextMenu: this.handleParentContextMenu,
                                        handleClick: m,
                                        handleParentClick: g,
                                        renderFollowButton: this.renderFollowButton,
                                    }),
                                    h
                                        ? (0, i.jsx)("div", {
                                              className: tt.u8,
                                              children: (0, i.jsx)(p.Button, {
                                                  onClick: () => (0, ef.uh)(e.guild_id, e.id),
                                                  variant: "secondary",
                                                  size: "sm",
                                                  text: te.intl.string(te.t.k5WiPf),
                                              }),
                                          })
                                        : (0, er.EP)(e, s),
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
                ? (0, i.jsx)(J.A, { guildId: t.id })
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
        return (0, i.jsx)(eQ.A, { channel: e, guild: t, chatInputType: M.oU.NORMAL }, null != t ? t.id : "home");
    }
    renderSidebar() {
        let {
            channel: e,
            parentChannel: t,
            guild: n,
            needSubscriptionToAccess: s,
            section: l,
            showCall: r,
            showActivityPanel: a,
            showFramePanel: c,
        } = this.props;
        if ((o()(null != e, "Missing channel in Channel.renderSidebar"), __OVERLAY__ || s));
        else if (l === e7.YvQ.PROFILE && e.isPrivate() && !r && !a && !c)
            return (0, i.jsx)(eD.A, { channel: e }, `private-channel-profile-${e.id}`);
        else if (l === e7.YvQ.MEMBERS)
            switch (e.type) {
                case e7.rbe.GROUP_DM:
                    return (0, i.jsx)(eg.A, { channel: e }, `private-channel-recipients-${e.id}`);
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
            isLurking: r,
            isUnavailable: a,
            showRealNameModal: o,
        } = this.props;
        return (
            null == e ||
                null == t ||
                a ||
                s ||
                (o &&
                    (0, p.mMO)(
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
                    (0, p.mMO)(
                        async () => {
                            let { default: e } = await n.e("98063").then(n.bind(n, 143154));
                            return (n) => (0, i.jsx)(e, { ...n, guildId: t });
                        },
                        { onCloseCallback: () => (0, eU.ry)(t, r), modalKey: "Guild Welcome Screen Modal" },
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
                width: r,
                channelIsContentGated: a,
            } = this.props;
        if (null == l && null == s) return null;
        if (n === e7.YvQ.SIDEBAR_CHAT && null != s) {
            if (a) return null;
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
            c = r - e7.MdR - o;
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
                isUnavailable: s,
                layout: l,
                section: a,
                hasModalOpen: o,
                guildSidebarState: c,
                hasTextActivityInPanelMode: d,
            } = this.props,
            { threadSidebarWidth: u, isThreadSidebarFloating: h } = this.state,
            A = this.shouldRenderCall();
        if (s) return (0, i.jsx)(eZ.A, {});
        if (null == e) return (0, i.jsx)(e0.A, { channelId: this.props.channelId });
        let m = a === e7.YvQ.SIDEBAR_CHAT,
            p = null != c && !m,
            g = !e.isForumLikeChannel() && !o,
            _ = t?.name;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(w.HI, { location: _, subsection: n ?? void 0 }),
                (0, i.jsxs)("div", {
                    "data-has-border": e.type !== e7.rbe.GUILD_VOICE,
                    className: r()(tt.TE, { [tt.js]: m || p, [tt.jl]: m && h }),
                    children: [
                        g
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
                            className: r()(tt.Qs, { [tt.Oo]: l === e7.DUB.NO_CHAT }),
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
            r = (0, h.bG)([eY.A], () => eY.A.getChannelId()),
            a = (0, h.bG)([eY.A], () => eY.A.getVoiceChannelId()),
            o = (0, h.bG)([eV.A], () => t ?? eV.A.getChannel(r), [r, t]),
            c = (0, B.DZ)(),
            { hasAccess: p } = (0, B.TW)("ConnectedChannel"),
            _ = c && !p ? null : o,
            f = (0, h.bG)([eV.A], () => eV.A.getChannel(a), [a]),
            x = _?.parent_id,
            C = (0, h.bG)([eV.A], () => eV.A.getChannel(x), [x]),
            b = (0, h.bG)([eF.A], () => eF.A.getGuild(_?.guild_id), [_]),
            { needSubscriptionToAccess: y } = (0, Q.A)(_?.id ?? void 0),
            O = (0, h.bG)([R.A], () => {
                let e = null != r ? R.A.getParticipants(r) : [],
                    t = null != r ? R.A.getActivityParticipants(r) : [];
                return e.length - t.length > 0;
            }, [r]),
            L = (0, K.A)(),
            M = (0, h.bG)([eY.A], () => (L?.channelId ?? eY.A.getVoiceChannelId()) === _?.id),
            D = (0, h.bG)([N.Ay], () => (null != _ ? N.Ay.getSelfEmbeddedActivityForChannel(_.id) : null), [_]),
            G = (0, h.bG)([eW.A], () => eW.A.isConnected()),
            U = (0, I.A)(G),
            P = G && !1 === U;
        s.useEffect(() => {
            M &&
                P &&
                null != D &&
                null != _ &&
                g.A.selectParticipant(
                    _.id,
                    (0, j.Qt)({ applicationId: D.applicationId, instanceId: D.compositeInstanceId }),
                );
        }, [P, _, M, D]);
        let w = (0, h.bG)([N.Ay], () => N.Ay.getCurrentEmbeddedActivity()),
            k = (0, h.bG)([N.Ay], () => N.Ay.getActivityPanelMode()),
            H = null != w && !(0, S.A)(_?.id) && k === e6.Gd.PANEL,
            W = (0, h.bG)(
                [eq.A],
                () => null != _ && _.isVocalThread() && !d().isEmpty(eq.A.getVoiceStatesForChannel(_.id)),
                [_],
            ),
            Y = null != _ && _.isPrivate() && !H && O,
            z = _?.isGuildVocal() || Y || W,
            q = (0, h.bG)([F.A], () => F.A.getFrameLayoutMode() === e5.y.FOCUSED),
            { welcomeModalChannelId: X } = (0, u.zy)(),
            J = (0, h.bG)([em.A], () => null != _ && em.A.isLurking(_.guild_id), [_]),
            $ = (0, h.bG)([eP.A], () => eP.A.hasSeen(_?.guild_id, J), [_, J]),
            Z = (0, h.bG)(
                [R.A, N.Ay],
                () =>
                    null != N.Ay.getConnectedActivityLocation() && N.Ay.getActivityPanelMode() === e6.Gd.PANEL
                        ? N.Ay.getFocusedLayout() === e6.E8.NO_CHAT
                            ? e7.DUB.NO_CHAT
                            : e7.DUB.NORMAL
                        : null != r
                          ? R.A.getLayout(r)
                          : e7.DUB.NORMAL,
                [r],
            ),
            ee = (0, eh.A)(b?.id),
            et = (0, ew.A)(X, b?.id),
            { section: en, channelSidebarState: ei } = (0, h.cf)(
                [ek.Ay],
                () => ({ section: ek.Ay.getSection(r, _?.isDM()), channelSidebarState: ek.Ay.getSidebarState(r) }),
                [r, _],
            ),
            es = b?.id,
            el = (0, h.bG)([ek.Ay], () => ek.Ay.getGuildSidebarState(es), [es]),
            er = (0, ep.lI)(),
            ea = (0, eX.Ay)(_),
            eo = (0, eX.Ay)(_, !0),
            ec = (0, h.bG)([R.A], () => (null != _ ? R.A.getSelectedParticipant(_.id) : null)),
            ed = (0, v.vL)(_),
            eu = null != _ && a === _.id,
            eg = null != _ && _.isGuildStageVoice();
        (0, T.A)({ onTransition: void 0 }),
            s.useEffect(() => {
                let e = (0, ef.JK)();
                if (e?.location?.state?.stageInviteKey === e4.J2) {
                    let { channelId: t } = (0, eA.vu)(e?.location?.pathname) ?? {};
                    null != t && l(t);
                }
            }, []);
        let e_ = { channel: _, inCurrentVoiceChannel: eu },
            ex = s.useRef(e_);
        s.useEffect(() => {
            ex.current = e_;
        }),
            s.useEffect(() => {
                let { channel: e, inCurrentVoiceChannel: t } = ex.current;
                null != n && null != e && eg && e.id === n && !t && ((0, eb.av)(e), l(null));
            }, [n, eg]);
        let eC = (0, E.cI)(_),
            eE = null != _ && _.isPrivate(),
            eI = (0, I.A)(eE),
            eN = (0, I.A)(_?.id);
        s.useEffect(() => {
            let e = eI && !eE,
                t = eI && eE && _?.id !== eN;
            (e || t) && (0, V.Dr)(A.M.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: e3.i.AUTO });
        }, [_?.id, eN, eE, eI]);
        let eS = (0, m.useHasAnyModalOpen)();
        return (0, i.jsx)(ts, {
            guildId: _?.guild_id,
            channelId: r,
            channel: _,
            channelName: ea,
            formattedChannelName: eo,
            parentChannel: C,
            voiceChannel: f,
            layout: Z,
            needSubscriptionToAccess: y,
            isLurking: J,
            hasModalOpen: eS,
            section: en,
            channelSidebarState: ei,
            guildSidebarState: el,
            guild: b,
            showCall: !y && z,
            showActivityPanel: H,
            showFramePanel: q,
            channelIsContentGated: ed,
            isMobile: (0, h.bG)([eK.A], () => _?.type === e7.rbe.DM && eK.A.isMobileOnline(_.getRecipientId()), [_]),
            isUnavailable: (0, h.bG)([eH.A], () => _?.guild_id != null && eH.A.isUnavailable(_.guild_id), [_]),
            showRealNameModal: ee,
            showWelcomeModal: !$ && et,
            showFollowButton: (_?.type === e7.rbe.GUILD_ANNOUNCEMENT && b?.features.has(e7.GuildFeatures.NEWS)) || !1,
            ...(0, h.cf)([eq.A], () => ({ hasVideo: null != _ && eq.A.hasVideo(_.id) }), [_]),
            inCall: eu,
            selectedParticipant: ec,
            showChannelSummaries: eC,
            isFavorites: c,
            showHeaderGuildBreadcrumb: c || er,
            premiumIndicatorEnabled: !1,
            hasTextActivityInPanelMode: H,
            embeddedActivity: w,
        });
    });
