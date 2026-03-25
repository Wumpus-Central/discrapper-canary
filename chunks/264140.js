"use strict";
n.d(t, { A: () => ts }), n(321073);
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
    _ = n(397927),
    p = n(367513),
    g = n(442433);
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
    e_ = n(394953),
    ep = n(187582),
    eg = n(164203),
    ef = n(976860),
    ex = n(378570),
    eC = n(23179),
    eE = n(138298),
    eI = n(940382),
    eN = n(323443),
    eb = n(566388),
    eS = n(168675),
    eT = n(170428),
    ev = n(494208),
    ey = n(933057),
    ej = n(328808),
    eR = n(415586),
    eO = n(210714),
    eL = n(657331),
    eM = n(328776),
    eD = n(522556),
    eG = n(447696),
    eU = n(684407),
    eP = n(709544),
    ew = n(761640),
    ek = n(734057),
    eV = n(31717),
    eB = n(919638),
    eH = n(71393),
    eF = n(290863),
    eK = n(383501),
    eW = n(309010),
    eY = n(287809),
    ez = n(977997),
    eq = n(47167),
    eX = n(698718),
    eJ = n(812771),
    eQ = n(991275),
    e$ = n(59e3),
    eZ = n(377045),
    e0 = n(402216),
    e1 = n(746080),
    e9 = n(652215),
    e7 = n(5867),
    e6 = n(806931),
    e2 = n(49999),
    e3 = n(165610),
    e5 = n(957173),
    e8 = n(516607),
    e4 = n(985018),
    te = n(638990);
let tt = (0, P.Fe)({
    createPromise: () => n.e("46875").then(n.bind(n, 625846)),
    webpackId: 625846,
    renderLoader: () => (0, i.jsx)("div", { className: te.wG, children: (0, i.jsx)(_.y$y, {}) }),
    name: "ForumChannel",
});
class tn extends s.PureComponent {
    state = { topicExpanded: !1, threadSidebarWidth: void 0, isThreadSidebarFloating: !1 };
    componentDidMount() {
        (0, eO.d)("guild_channel");
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
            case e9.rbe.GUILD_VOICE:
            case e9.rbe.GUILD_ANNOUNCEMENT:
            case e9.rbe.GUILD_TEXT:
            case e9.rbe.GUILD_FORUM:
            case e9.rbe.GUILD_MEDIA:
                this.openChannelContextMenu(e, t);
                break;
            case e9.rbe.ANNOUNCEMENT_THREAD:
            case e9.rbe.PUBLIC_THREAD:
            case e9.rbe.PRIVATE_THREAD:
                this.openThreadContextMenu(e, t);
                break;
            case e9.rbe.DM:
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
            (0, eL.openUserProfileModal)({
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
            (0, g.L3)(e, async () => {
                let { default: e } = await n.e("17425").then(n.bind(n, 340968));
                return (n) => (0, i.jsx)(e, { ...n, channel: t, guild: s });
            });
    }
    openThreadContextMenu(e, t) {
        o()(null != t, "Missing channel in Channel.openChannelContextMenu"),
            (0, g.L3)(e, async () => {
                let { default: e } = await n.e("33").then(n.bind(n, 44536));
                return (n) => (0, i.jsx)(e, { ...n, channel: t });
            });
    }
    openDMContextMenu(e, t) {
        o()(null != t, "Missing channel in Channel.openDMContextMenu");
        let s = eY.default.getUser(t.getRecipientId());
        o()(null != s, "Missing user in Channel.openDMContextMenu"),
            (0, g.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("97262"), n.e("42128"), n.e("39778"), n.e("38389")]).then(
                    n.bind(n, 385913),
                );
                return (n) => (0, i.jsx)(e, { ...n, user: s, channelSelected: !0, channel: t });
            });
    }
    renderJoinRequestInterviewButtons = () => {
        let { channel: e } = this.props;
        return e?.hasFlag(e1.lx.IS_JOIN_REQUEST_INTERVIEW_CHANNEL)
            ? (0, i.jsx)(q.A, { channelId: e.id, showTrailingDivider: !0 })
            : null;
    };
    renderClipsEnabledIndicatorToolbarItem = () => {
        let { inCall: e, voiceChannel: t } = this.props;
        return e ? (0, i.jsx)(D.A, { channelId: null != t ? t.id : null }) : null;
    };
    renderStreamQualityLiveIndicatorToolbarItem = () => {
        let { selectedParticipant: e, premiumIndicatorEnabled: t } = this.props;
        return e?.type !== e6.lp.STREAM
            ? null
            : (0, i.jsx)(
                  W.A,
                  { size: e0.Ay.Sizes.LARGE, participant: e, showQuality: !0, premiumIndicator: t },
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
            case e9.rbe.GUILD_STAGE_VOICE:
            case e9.rbe.GUILD_VOICE:
                break;
            case e9.rbe.DM:
                r.push(this.renderClipsEnabledIndicatorToolbarItem()),
                    r.push(this.renderStreamQualityLiveIndicatorToolbarItem()),
                    r.push((0, i.jsx)(er.A, { channel: e }, "calls")),
                    r.push((0, i.jsx)(en.A, { channel: e }, "pins")),
                    r.push((0, i.jsx)(eo.Ay, { channel: e, tooltip: e4.intl.string(e4.t.Xjlbvs) }, "invite")),
                    r.push((0, i.jsx)(eu.A, { channel: e, showCallOrActivityPanel: s || l || a }, "profile")),
                    r.push((0, i.jsx)(ec.A, { channel: e }, "safety_tools"));
                break;
            case e9.rbe.GROUP_DM:
                r.push(this.renderJoinRequestInterviewButtons()),
                    r.push(this.renderClipsEnabledIndicatorToolbarItem()),
                    r.push(this.renderStreamQualityLiveIndicatorToolbarItem()),
                    r.push((0, i.jsx)(er.A, { channel: e }, "calls")),
                    r.push((0, i.jsx)(en.A, { channel: e }, "pins")),
                    e.isManaged() ||
                        r.push((0, i.jsx)(eo.Ay, { channel: e, tooltip: e4.intl.string(e4.t.AQAPts) }, "invite")),
                    r.push((0, i.jsx)(ee.A, { channelId: e.id }, "members"));
                break;
            case e9.rbe.ANNOUNCEMENT_THREAD:
            case e9.rbe.PRIVATE_THREAD:
            case e9.rbe.PUBLIC_THREAD:
                e.isModeratorReportChannel() && r.push((0, i.jsx)(eT.A, { channel: e })),
                    null == t || t.isForumLikeChannel() || r.push((0, i.jsx)(ev.A, { channel: t }, "browser")),
                    e.isVocalThread() && r.push((0, i.jsx)(ed.A, { channel: e }, "thread-call")),
                    r.push((0, i.jsx)(ey.A, { channel: e }, "notifications")),
                    r.push((0, i.jsx)(en.A, { channel: e }, "pins")),
                    e.isArchivedThread() || r.push((0, i.jsx)(ee.A, { channelId: e.id }, "members")),
                    null != t && (0, E.pk)(e) && r.push((0, i.jsx)(ei.A, { channel: e }, "summaries")),
                    r.push((0, i.jsx)(ej.A, { channel: e }, "threads-overflow"));
                break;
            case e9.rbe.GUILD_ANNOUNCEMENT:
            case e9.rbe.GUILD_TEXT:
                r.push((0, i.jsx)(ev.A, { channel: e }, "browser")),
                    n || r.push((0, i.jsx)(et.A, { channel: e }, "notifications")),
                    r.push((0, i.jsx)(en.A, { channel: e }, "pins")),
                    (0, G.f)("channel_header") && r.push((0, i.jsx)(Z.A, { channelId: e.id }, "conversations")),
                    r.push((0, i.jsx)(ee.A, { channelId: e.id }, "members")),
                    (0, E.pk)(e) && r.push((0, i.jsx)(ei.A, { channel: e }, "summaries"));
                break;
            case e9.rbe.GUILD_FORUM:
            case e9.rbe.GUILD_MEDIA:
                n ||
                    (r.push((0, i.jsx)(es.A, { channel: e }, "forum-onboarding")),
                    r.push((0, i.jsx)(et.A, { channel: e }, "notifications"))),
                    __OVERLAY__ || r.push((0, i.jsx)(ee.A, { channelId: e.id }, "members"));
                break;
            case e9.rbe.GUILD_DIRECTORY:
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
            case e9.rbe.GUILD_STAGE_VOICE:
            case e9.rbe.GUILD_VOICE:
            case e9.rbe.DM:
                break;
            case e9.rbe.GROUP_DM:
                t.push((0, i.jsx)(ee.A, { channelId: e.id }, "members"));
                break;
            case e9.rbe.ANNOUNCEMENT_THREAD:
            case e9.rbe.PRIVATE_THREAD:
            case e9.rbe.PUBLIC_THREAD:
                e.isArchivedThread() || t.push((0, i.jsx)(ee.A, { channelId: e.id }, "members"));
                break;
            case e9.rbe.GUILD_ANNOUNCEMENT:
            case e9.rbe.GUILD_TEXT:
            case e9.rbe.GUILD_FORUM:
            case e9.rbe.GUILD_MEDIA:
            case e9.rbe.GUILD_DIRECTORY:
                t.push((0, i.jsx)(ee.A, { channelId: e.id }, "members"));
        }
        return t;
    };
    renderFollowButton = () => {
        let { showFollowButton: e, channel: t } = this.props;
        return e
            ? (0, i.jsx)("div", {
                  className: te.u8,
                  children: (0, i.jsx)(_.Button, {
                      variant: "secondary",
                      size: "sm",
                      text: e4.intl.string(e4.t["3aOv+h"]),
                      onClick: () =>
                          (0, _.mMO)(async () => {
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
        } = this.props;
        o()(null != e, "Missing channel in Channel.renderHeaderBar"),
            o()(null != t, "Should not be null if channel is not null.");
        let A = e.isDM() && !e.isSystemDM() ? this.openUserProfile : h ? () => (0, ex.iN)(e.id) : void 0,
            m = n?.guild_id != null && n?.id != null ? this.handleTitleParentClick : void 0,
            p = c || d,
            g = r || p;
        return (0, i.jsxs)("div", {
            className: te.SC,
            children: [
                (0, i.jsx)(_.NPJ, {
                    theme: u && r ? e9.NJ8.DARK : void 0,
                    children: (r) =>
                        (0, i.jsxs)(
                            el.A,
                            {
                                guildId: l,
                                channelId: e.id,
                                channelType: e.type,
                                hideSearch: e.isDirectory(),
                                toolbar: this.renderHeaderToolbar(),
                                mobileToolbar: this.renderMobileToolbar(),
                                className: a()(te.DD, r, { [te.zh]: e.type === e9.rbe.GROUP_DM }),
                                transparent: g,
                                hidden: d,
                                "aria-label": e4.intl.string(e4.t.BIYAqa),
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
                                        handleClick: A,
                                        handleParentClick: m,
                                        renderFollowButton: this.renderFollowButton,
                                    }),
                                    h
                                        ? (0, i.jsx)("div", {
                                              className: te.u8,
                                              children: (0, i.jsx)(_.Button, {
                                                  onClick: () => (0, ef.uh)(e.guild_id, e.id),
                                                  variant: "secondary",
                                                  size: "sm",
                                                  text: e4.intl.string(e4.t.k5WiPf),
                                              }),
                                          })
                                        : (0, ea.EP)(e, s),
                                ],
                            },
                            `header-${e.id}`,
                        ),
                }),
                (0, i.jsx)(eg.A, { channelId: e.id }),
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
            case e9.rbe.GUILD_STAGE_VOICE:
                return (0, i.jsx)(eb.A, { channel: e, popoutType: O.N.NO_POPOUT }, e.id);
            case e9.rbe.GUILD_VOICE:
            case e9.rbe.DM:
            case e9.rbe.GROUP_DM:
            case e9.rbe.PUBLIC_THREAD:
            case e9.rbe.PRIVATE_THREAD:
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
        if (s) return (0, i.jsx)(eD.A, { guild: t, channelId: e.id });
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
            return (0, i.jsx)(tt, { channel: e, guild: t, sidebarState: n }, e.id);
        }
        return (0, i.jsx)(eX.A, { channel: e, guild: t, chatInputType: M.oU.NORMAL }, null != t ? t.id : "home");
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
        else if (l === e9.YvQ.PROFILE && e.isPrivate() && !a && !r && !c)
            return (0, i.jsx)(eM.A, { channel: e }, `private-channel-profile-${e.id}`);
        else if (l === e9.YvQ.MEMBERS)
            switch (e.type) {
                case e9.rbe.GROUP_DM:
                    return (0, i.jsx)(ep.A, { channel: e }, `private-channel-recipients-${e.id}`);
                case e9.rbe.GUILD_DIRECTORY:
                case e9.rbe.GUILD_FORUM:
                case e9.rbe.GUILD_MEDIA:
                case e9.rbe.GUILD_ANNOUNCEMENT:
                case e9.rbe.GUILD_TEXT:
                    let d = !0 === e9.kvI.GUILD_THREADS_ONLY.has(e.type) ? e.id : (e.guild_id ?? e.id);
                    return (0, i.jsx)(eQ.A, { channel: e }, `channel-members-${d}`);
                case e9.rbe.ANNOUNCEMENT_THREAD:
                    if (null != t) return (0, i.jsx)(eQ.A, { channel: t }, `channel-members-${t.id}`);
                    break;
                case e9.rbe.PUBLIC_THREAD:
                case e9.rbe.PRIVATE_THREAD:
                    if (!e.isArchivedThread() && null != n)
                        return (0, i.jsx)(f.A, { channel: e, guild: n }, `channel-members-${e.id}`);
            }
        else if (l === e9.YvQ.CONVERSATIONS)
            switch (e.type) {
                case e9.rbe.GUILD_TEXT:
                case e9.rbe.GUILD_ANNOUNCEMENT:
                    return (0, i.jsx)(U.A, { channel: e }, `channel-conversations-${e.id}`);
            }
        else if (l === e9.YvQ.SEARCH) return (0, i.jsx)(eC.A, { guildId: n?.id, channelId: e.id });
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
                    (0, _.mMO)(
                        async () => {
                            let { default: e } = await n.e("38763").then(n.bind(n, 201510));
                            return (n) => (0, i.jsx)(e, { ...n, guildId: t });
                        },
                        {
                            onCloseCallback: () => Y.A.viewPrompt(e5.X.REAL_NAME_PROMPT, t),
                            modalKey: "Guild Hub Real Name Modal",
                        },
                    ),
                l &&
                    (0, _.mMO)(
                        async () => {
                            let { default: e } = await n.e("98063").then(n.bind(n, 143154));
                            return (n) => (0, i.jsx)(e, { ...n, guildId: t });
                        },
                        { onCloseCallback: () => (0, eG.ry)(t, a), modalKey: "Guild Welcome Screen Modal" },
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
        if (n === e9.YvQ.SIDEBAR_CHAT && null != s) {
            if (r) return null;
            switch (s.type) {
                case eI.PE.CREATE_THREAD:
                    if (t?.isForumLikeChannel()) return null;
                    e = (0, i.jsx)(eS.A, {
                        parentChannelId: s.parentChannelId,
                        parentMessageId: s.parentMessageId,
                        location: s.location,
                    });
                    break;
                case eI.PE.VIEW_THREAD:
                    let n = t?.isForumLikeChannel() ? H.A : eR.A;
                    e = (0, i.jsx)(n, { channelId: s.channelId });
                    break;
                case eI.PE.VIEW_MOD_REPORT:
                    e = (0, i.jsx)(eR.A, { channelId: s.channelId, baseChannelId: s.baseChannelId });
                    break;
                case eI.PE.VIEW_CHANNEL:
                case eI.PE.VIEW_MESSAGE_REQUEST:
                default:
                    return null;
            }
        }
        if (null != l && null == e)
            if (l.type !== eI.QV.GUILD_MEMBER_MOD_VIEW) return null;
            else {
                let { guildId: e, userId: t, moderatorReportId: n } = l.details;
                return (0, i.jsx)("div", {
                    style: { width: e9.da6 },
                    className: te.uC,
                    children: (0, i.jsx)(z.A, {
                        guildId: e,
                        userId: t,
                        moderatorReportId: n,
                        onClose: () => eE.A.closeGuildSidebar(e),
                    }),
                });
            }
        if (null == e) return null;
        let o = t?.type != null && e9.kvI.GUILD_THREADS_ONLY.has(t.type) ? 528 : 450,
            c = a - e9.MdR - o;
        return (
            (c += 375),
            (0, i.jsx)(eJ.A, {
                sidebarType:
                    t?.type != null && e9.kvI.GUILD_THREADS_ONLY.has(t.type) ? eJ.X.PostSidebar : eJ.X.ThreadSidebar,
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
        if (s) return (0, i.jsx)(e$.A, {});
        if (null == e) return (0, i.jsx)(eZ.A, { channelId: this.props.channelId });
        let m = r === e9.YvQ.SIDEBAR_CHAT,
            _ = null != c && !m,
            p = !e.isForumLikeChannel() && !o,
            g = t?.name;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(w.HI, { location: g, subsection: n ?? void 0 }),
                (0, i.jsxs)("div", {
                    "data-has-border": e.type !== e9.rbe.GUILD_VOICE,
                    className: a()(te.TE, { [te.js]: m || _, [te.jl]: m && h }),
                    children: [
                        p
                            ? (0, i.jsx)(x.A, {
                                  style: { right: m ? u : void 0 },
                                  className: te.x4,
                                  channel: e,
                                  draftType: eV.C.ChannelMessage,
                              })
                            : null,
                        A || d ? null : this.renderHeaderBar(),
                        this.renderCall(),
                        this.renderEmbeddedActivityPanel(),
                        (0, i.jsxs)("div", {
                            className: a()(te.Qs, { [te.Oo]: l === e9.DUB.NO_CHAT }),
                            children: [this.renderChat(), this.renderSidebar()],
                        }),
                    ],
                }),
                this.renderThreadSidebar(),
            ],
        });
    }
}
let ti = (0, C.A)(tn),
    ts = s.memo(function (e) {
        let { providedChannel: t } = e,
            [n, l] = s.useState(null),
            a = (0, h.bG)([eW.A], () => eW.A.getChannelId()),
            r = (0, h.bG)([eW.A], () => eW.A.getVoiceChannelId()),
            o = (0, h.bG)([ek.A], () => t ?? ek.A.getChannel(a), [a, t]),
            c = (0, B.DZ)(),
            _ = (0, B.e4)(o, "ConnectedChannel"),
            g = (0, h.bG)([ek.A], () => ek.A.getChannel(r), [r]),
            f = _?.parent_id,
            x = (0, h.bG)([ek.A], () => ek.A.getChannel(f), [f]),
            C = (0, h.bG)([eH.A], () => eH.A.getGuild(_?.guild_id), [_]),
            { needSubscriptionToAccess: b } = (0, J.A)(_?.id ?? void 0),
            y = (0, h.bG)([R.A], () => {
                let e = null != a ? R.A.getParticipants(a) : [],
                    t = null != a ? R.A.getActivityParticipants(a) : [];
                return e.length - t.length > 0;
            }, [a]),
            O = (0, K.A)(),
            L = (0, h.bG)([eW.A], () => (O?.channelId ?? eW.A.getVoiceChannelId()) === _?.id),
            M = (0, h.bG)([N.Ay], () => (null != _ ? N.Ay.getSelfEmbeddedActivityForChannel(_.id) : null), [_]),
            D = (0, h.bG)([eK.A], () => eK.A.isConnected()),
            G = (0, I.A)(D),
            U = D && !1 === G;
        s.useEffect(() => {
            L &&
                U &&
                null != M &&
                null != _ &&
                p.A.selectParticipant(
                    _.id,
                    (0, j.Qt)({ applicationId: M.applicationId, instanceId: M.compositeInstanceId }),
                );
        }, [U, _, L, M]);
        let P = (0, h.bG)([N.Ay], () => N.Ay.getCurrentEmbeddedActivity()),
            w = (0, h.bG)([N.Ay], () => N.Ay.getActivityPanelMode()),
            k = null != P && !(0, S.A)(_?.id) && w === e7.Gd.PANEL,
            H = (0, h.bG)(
                [ez.A],
                () => null != _ && _.isVocalThread() && !d().isEmpty(ez.A.getVoiceStatesForChannel(_.id)),
                [_],
            ),
            W = null != _ && _.isPrivate() && !k && y,
            Y = _?.isGuildVocal() || W || H,
            z = (0, h.bG)([F.A], () => F.A.getFrameLayoutMode() === e3.y.FOCUSED),
            { welcomeModalChannelId: q } = (0, u.zy)(),
            X = (0, h.bG)([em.A], () => null != _ && em.A.isLurking(_.guild_id), [_]),
            Q = (0, h.bG)([eU.A], () => eU.A.hasSeen(_?.guild_id, X), [_, X]),
            $ = (0, h.bG)(
                [R.A, N.Ay],
                () =>
                    null != N.Ay.getConnectedActivityLocation() && N.Ay.getActivityPanelMode() === e7.Gd.PANEL
                        ? N.Ay.getFocusedLayout() === e7.E8.NO_CHAT
                            ? e9.DUB.NO_CHAT
                            : e9.DUB.NORMAL
                        : null != a
                          ? R.A.getLayout(a)
                          : e9.DUB.NORMAL,
                [a],
            ),
            Z = (0, eh.A)(C?.id),
            ee = (0, eP.A)(q, C?.id),
            { section: et, channelSidebarState: en } = (0, h.cf)(
                [ew.Ay],
                () => ({ section: ew.Ay.getSection(a, _?.isDM()), channelSidebarState: ew.Ay.getSidebarState(a) }),
                [a, _],
            ),
            ei = C?.id,
            es = (0, h.bG)([ew.Ay], () => ew.Ay.getGuildSidebarState(ei), [ei]),
            el = (0, e_.lI)(),
            ea = (0, eq.Ay)(_),
            er = (0, eq.Ay)(_, !0),
            eo = (0, h.bG)([R.A], () => (null != _ ? R.A.getSelectedParticipant(_.id) : null)),
            ec = (0, v.vL)(_),
            ed = null != _ && r === _.id,
            eu = null != _ && _.isGuildStageVoice();
        (0, T.A)({ onTransition: void 0 }),
            s.useEffect(() => {
                let e = (0, ef.JK)();
                if (e?.location?.state?.stageInviteKey === e8.J2) {
                    let { channelId: t } = (0, eA.vu)(e?.location?.pathname) ?? {};
                    null != t && l(t);
                }
            }, []);
        let ep = { channel: _, inCurrentVoiceChannel: ed },
            eg = s.useRef(ep);
        s.useEffect(() => {
            eg.current = ep;
        }),
            s.useEffect(() => {
                let { channel: e, inCurrentVoiceChannel: t } = eg.current;
                null != n && null != e && eu && e.id === n && !t && ((0, eN.av)(e), l(null));
            }, [n, eu]);
        let ex = (0, E.cI)(_),
            eC = null != _ && _.isPrivate(),
            eE = (0, I.A)(eC),
            eI = (0, I.A)(_?.id);
        s.useEffect(() => {
            let e = eE && !eC,
                t = eE && eC && _?.id !== eI;
            (e || t) && (0, V.Dr)(A.M.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: e2.i.AUTO });
        }, [_?.id, eI, eC, eE]);
        let eb = (0, m.useHasAnyModalOpen)();
        return (0, i.jsx)(ti, {
            guildId: _?.guild_id,
            channelId: a,
            channel: _,
            channelName: ea,
            formattedChannelName: er,
            parentChannel: x,
            voiceChannel: g,
            layout: $,
            needSubscriptionToAccess: b,
            isLurking: X,
            hasModalOpen: eb,
            section: et,
            channelSidebarState: en,
            guildSidebarState: es,
            guild: C,
            showCall: !b && Y,
            showActivityPanel: k,
            showFramePanel: z,
            channelIsContentGated: ec,
            isMobile: (0, h.bG)([eF.A], () => _?.type === e9.rbe.DM && eF.A.isMobileOnline(_.getRecipientId()), [_]),
            isUnavailable: (0, h.bG)([eB.A], () => _?.guild_id != null && eB.A.isUnavailable(_.guild_id), [_]),
            showRealNameModal: Z,
            showWelcomeModal: !Q && ee,
            showFollowButton: (_?.type === e9.rbe.GUILD_ANNOUNCEMENT && C?.features.has(e9.GuildFeatures.NEWS)) || !1,
            ...(0, h.cf)([ez.A], () => ({ hasVideo: null != _ && ez.A.hasVideo(_.id) }), [_]),
            inCall: ed,
            selectedParticipant: eo,
            showChannelSummaries: ex,
            showHeaderGuildBreadcrumb: c || el,
            premiumIndicatorEnabled: !1,
            hasTextActivityInPanelMode: k,
            embeddedActivity: P,
        });
    });
