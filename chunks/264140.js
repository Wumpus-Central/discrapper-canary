"use strict";
n.d(t, { A: () => ti }), n(321073);
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
    p = n(192308),
    g = n(397927),
    m = n(367513),
    _ = n(442433);
n(183994);
var f = n(483270),
    x = n(738876),
    C = n(456412),
    E = n(432371),
    I = n(475743),
    b = n(933958),
    N = n(156579),
    S = n(108959),
    T = n(480720),
    y = n(323073),
    v = n(793574),
    j = n(568598),
    R = n(313961),
    O = n(164617),
    L = n(540462),
    M = n(355622),
    D = n(689874),
    G = n(268218),
    U = n(726249),
    P = n(274146),
    w = n(826673),
    k = n(713842),
    V = n(91242),
    B = n(857253),
    H = n(872363),
    F = n(211059),
    K = n(547015),
    W = n(561446),
    Y = n(300233),
    z = n(721592),
    X = n(403363),
    q = n(397036),
    J = n(392135),
    Q = n(733441),
    $ = n(187360),
    Z = n(287074),
    ee = n(867624),
    et = n(899584),
    en = n(742589),
    ei = n(353428),
    es = n(402385),
    el = n(95550),
    er = n(467480),
    ea = n(788579),
    eo = n(744483),
    ec = n(889752),
    ed = n(376943),
    eu = n(857071),
    eh = n(394953),
    eA = n(187582),
    ep = n(164203),
    eg = n(976860),
    em = n(378570),
    e_ = n(822382),
    ef = n(23179),
    ex = n(138298),
    eC = n(940382),
    eE = n(323443),
    eI = n(566388),
    eb = n(168675),
    eN = n(170428),
    eS = n(494208),
    eT = n(933057),
    ey = n(328808),
    ev = n(415586),
    ej = n(210714),
    eR = n(657331),
    eO = n(328776),
    eL = n(522556),
    eM = n(447696),
    eD = n(684407),
    eG = n(709544),
    eU = n(761640),
    eP = n(734057),
    ew = n(31717),
    ek = n(919638),
    eV = n(71393),
    eB = n(290863),
    eH = n(383501),
    eF = n(309010),
    eK = n(967198),
    eW = n(287809),
    eY = n(977997),
    ez = n(47167),
    eX = n(698718),
    eq = n(812771),
    eJ = n(991275),
    eQ = n(59e3),
    e$ = n(377045),
    eZ = n(402216),
    e0 = n(746080),
    e1 = n(652215),
    e9 = n(5867),
    e7 = n(806931),
    e6 = n(49999),
    e2 = n(165610),
    e3 = n(957173),
    e5 = n(516607),
    e8 = n(985018),
    e4 = n(638990);
let te = (0, G.Fe)({
    createPromise: () => n.e("46875").then(n.bind(n, 625846)),
    webpackId: 625846,
    renderLoader: () => (0, i.jsx)("div", { className: e4.wG, children: (0, i.jsx)(g.y$y, {}) }),
    name: "ForumChannel",
});
class tt extends s.PureComponent {
    state = { topicExpanded: !1, threadSidebarWidth: void 0, isThreadSidebarFloating: !1 };
    componentDidMount() {
        (0, ej.d)("guild_channel");
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
        null != e && (0, em.iN)(e.id);
    };
    _handleContextMenu = (e, t) => {
        switch (t.type) {
            case e1.rbe.GUILD_VOICE:
            case e1.rbe.GUILD_ANNOUNCEMENT:
            case e1.rbe.GUILD_TEXT:
            case e1.rbe.GUILD_FORUM:
            case e1.rbe.GUILD_MEDIA:
                this.openChannelContextMenu(e, t);
                break;
            case e1.rbe.ANNOUNCEMENT_THREAD:
            case e1.rbe.PUBLIC_THREAD:
            case e1.rbe.PRIVATE_THREAD:
                this.openThreadContextMenu(e, t);
                break;
            case e1.rbe.DM:
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
            (0, eR.openUserProfileModal)({
                userId: e.getRecipientId(),
                guildId: e.guild_id,
                channelId: e.id,
                sourceAnalyticsLocations: [v.A.CHANNEL_HEADER],
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
        let s = eW.default.getUser(t.getRecipientId());
        o()(null != s, "Missing user in Channel.openDMContextMenu"),
            (0, _.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("97262"), n.e("42128"), n.e("39778"), n.e("31885")]).then(
                    n.bind(n, 385913),
                );
                return (n) => (0, i.jsx)(e, { ...n, user: s, channelSelected: !0, channel: t });
            });
    }
    renderJoinRequestInterviewButtons = () => {
        let { channel: e } = this.props;
        return e?.hasFlag(e0.lx.IS_JOIN_REQUEST_INTERVIEW_CHANNEL)
            ? (0, i.jsx)(W.A, { channelId: e.id, showTrailingDivider: !0 })
            : null;
    };
    renderClipsEnabledIndicatorToolbarItem = () => {
        let { inCall: e, voiceChannel: t } = this.props;
        return e ? (0, i.jsx)(D.A, { channelId: null != t ? t.id : null }) : null;
    };
    renderStreamQualityLiveIndicatorToolbarItem = () => {
        let { selectedParticipant: e, premiumIndicatorEnabled: t } = this.props;
        return e?.type !== e7.lp.STREAM
            ? null
            : (0, i.jsx)(
                  H.A,
                  { size: eZ.Ay.Sizes.LARGE, participant: e, showQuality: !0, premiumIndicator: t },
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
            case e1.rbe.GUILD_STAGE_VOICE:
            case e1.rbe.GUILD_VOICE:
                break;
            case e1.rbe.DM:
                a.push(this.renderClipsEnabledIndicatorToolbarItem()),
                    a.push(this.renderStreamQualityLiveIndicatorToolbarItem()),
                    a.push((0, i.jsx)(es.A, { channel: e }, "calls")),
                    a.push((0, i.jsx)(Z.A, { channel: e }, "pins")),
                    a.push((0, i.jsx)(el.Ay, { channel: e, tooltip: e8.intl.string(e8.t.Xjlbvs) }, "invite")),
                    a.push((0, i.jsx)(eo.A, { channel: e, showCallOrActivityPanel: s || l || r }, "profile")),
                    a.push((0, i.jsx)(er.A, { channel: e }, "safety_tools"));
                break;
            case e1.rbe.GROUP_DM:
                if (
                    (a.push(this.renderJoinRequestInterviewButtons()),
                    a.push(this.renderClipsEnabledIndicatorToolbarItem()),
                    a.push(this.renderStreamQualityLiveIndicatorToolbarItem()),
                    a.push((0, i.jsx)(es.A, { channel: e }, "calls")),
                    a.push((0, i.jsx)(Z.A, { channel: e }, "pins")),
                    !e.isManaged())
                ) {
                    let { isGdmCopyExperimentEnabled: t } = this.props,
                        n = e8.intl.string(t ? e8.t.AQAPts : e8.t.Xjlbvs);
                    a.push((0, i.jsx)(el.Ay, { channel: e, tooltip: n }, "invite"));
                }
                a.push((0, i.jsx)(Q.A, { channelId: e.id }, "members"));
                break;
            case e1.rbe.ANNOUNCEMENT_THREAD:
            case e1.rbe.PRIVATE_THREAD:
            case e1.rbe.PUBLIC_THREAD:
                e.isModeratorReportChannel() && a.push((0, i.jsx)(eN.A, { channel: e })),
                    null == t || t.isForumLikeChannel() || a.push((0, i.jsx)(eS.A, { channel: t }, "browser")),
                    e.isVocalThread() && a.push((0, i.jsx)(ea.A, { channel: e }, "thread-call")),
                    a.push((0, i.jsx)(eT.A, { channel: e }, "notifications")),
                    a.push((0, i.jsx)(Z.A, { channel: e }, "pins")),
                    e.isArchivedThread() || a.push((0, i.jsx)(Q.A, { channelId: e.id }, "members")),
                    null != t && (0, E.pk)(e) && a.push((0, i.jsx)(ee.A, { channel: e }, "summaries")),
                    a.push((0, i.jsx)(ey.A, { channel: e }, "threads-overflow"));
                break;
            case e1.rbe.GUILD_ANNOUNCEMENT:
            case e1.rbe.GUILD_TEXT:
                a.push((0, i.jsx)(eS.A, { channel: e }, "browser")),
                    n || a.push((0, i.jsx)($.A, { channel: e }, "notifications")),
                    a.push((0, i.jsx)(Z.A, { channel: e }, "pins")),
                    a.push((0, i.jsx)(Q.A, { channelId: e.id }, "members")),
                    (0, E.pk)(e) && a.push((0, i.jsx)(ee.A, { channel: e }, "summaries"));
                break;
            case e1.rbe.GUILD_FORUM:
            case e1.rbe.GUILD_MEDIA:
                n ||
                    (a.push((0, i.jsx)(et.A, { channel: e }, "forum-onboarding")),
                    a.push((0, i.jsx)($.A, { channel: e }, "notifications"))),
                    __OVERLAY__ || a.push((0, i.jsx)(Q.A, { channelId: e.id }, "members"));
                break;
            case e1.rbe.GUILD_DIRECTORY:
                a.push((0, i.jsx)(Q.A, { channelId: e.id }, "members"));
        }
        return a;
    };
    renderMobileToolbar = () => {
        let { channel: e } = this.props;
        o()(null != e, "Missing channel in Channel.renderHeaderToolbar");
        let t = [];
        if (e.isSystemDM()) return t;
        switch (e.type) {
            case e1.rbe.GUILD_STAGE_VOICE:
            case e1.rbe.GUILD_VOICE:
            case e1.rbe.DM:
                break;
            case e1.rbe.GROUP_DM:
                t.push((0, i.jsx)(Q.A, { channelId: e.id }, "members"));
                break;
            case e1.rbe.ANNOUNCEMENT_THREAD:
            case e1.rbe.PRIVATE_THREAD:
            case e1.rbe.PUBLIC_THREAD:
                e.isArchivedThread() || t.push((0, i.jsx)(Q.A, { channelId: e.id }, "members"));
                break;
            case e1.rbe.GUILD_ANNOUNCEMENT:
            case e1.rbe.GUILD_TEXT:
            case e1.rbe.GUILD_FORUM:
            case e1.rbe.GUILD_MEDIA:
            case e1.rbe.GUILD_DIRECTORY:
                t.push((0, i.jsx)(Q.A, { channelId: e.id }, "members"));
        }
        return t;
    };
    renderFollowButton = () => {
        let { showFollowButton: e, channel: t } = this.props;
        return e
            ? (0, i.jsx)("div", {
                  className: e4.u8,
                  children: (0, i.jsx)(g.Button, {
                      variant: "secondary",
                      size: "sm",
                      text: e8.intl.string(e8.t["3aOv+h"]),
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
            showCall: a,
            showActivityPanel: c,
            showFramePanel: d,
            hasVideo: u,
            showHeaderGuildBreadcrumb: h,
            isFavorites: A,
        } = this.props;
        o()(null != e, "Missing channel in Channel.renderHeaderBar"),
            o()(null != t, "Should not be null if channel is not null.");
        let p = e.isDM() && !e.isSystemDM() ? this.openUserProfile : h ? () => (0, em.iN)(e.id) : void 0,
            m = n?.guild_id != null && n?.id != null ? this.handleTitleParentClick : void 0,
            _ = c || d,
            f = a || _;
        return (0, i.jsxs)("div", {
            className: e4.SC,
            children: [
                (0, i.jsx)(g.NPJ, {
                    theme: u && a ? e1.NJ8.DARK : void 0,
                    children: (a) =>
                        (0, i.jsxs)(
                            en.A,
                            {
                                guildId: l,
                                channelId: e.id,
                                channelType: e.type,
                                hideSearch: e.isDirectory() || (A && !(0, e_.Eq)()),
                                showDivider: A && !(0, e_.Eq)(),
                                toolbar: this.renderHeaderToolbar(),
                                mobileToolbar: this.renderMobileToolbar(),
                                className: r()(e4.DD, a, { [e4.zh]: e.type === e1.rbe.GROUP_DM }),
                                transparent: f,
                                hidden: d,
                                "aria-label": e8.intl.string(e8.t.BIYAqa),
                                children: [
                                    h && (0, i.jsx)(ei.i$, { channel: e, guild: s, caretPosition: "right" }),
                                    (0, ei.zF)({
                                        channel: e,
                                        channelName: t,
                                        parentChannel: n,
                                        guild: s,
                                        hasVideo: u,
                                        handleContextMenu: this.handleContextMenu,
                                        handleParentContextMenu: this.handleParentContextMenu,
                                        handleClick: p,
                                        handleParentClick: m,
                                        renderFollowButton: this.renderFollowButton,
                                    }),
                                    h
                                        ? (0, i.jsx)("div", {
                                              className: e4.u8,
                                              children: (0, i.jsx)(g.Button, {
                                                  onClick: () => (0, eg.uh)(e.guild_id, e.id),
                                                  variant: "secondary",
                                                  size: "sm",
                                                  text: e8.intl.string(e8.t.k5WiPf),
                                              }),
                                          })
                                        : (0, ei.EP)(e, s),
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
        let { showCall: e, channelIsContentGated: t } = this.props;
        return !t && e;
    }
    renderCall() {
        let { channel: e } = this.props;
        if ((o()(null != e, "Missing channel in Channel.renderCall"), !this.shouldRenderCall())) return null;
        switch (e.type) {
            case e1.rbe.GUILD_STAGE_VOICE:
                return (0, i.jsx)(eI.A, { channel: e, popoutType: O.N.NO_POPOUT }, e.id);
            case e1.rbe.GUILD_VOICE:
            case e1.rbe.DM:
            case e1.rbe.GROUP_DM:
            case e1.rbe.PUBLIC_THREAD:
            case e1.rbe.PRIVATE_THREAD:
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
        return (0, i.jsx)(N.A, { maxHeight: n, renderExternalHeader: this.renderHeaderBar });
    }
    renderChat() {
        let { channel: e, guild: t, needSubscriptionToAccess: n, channelIsContentGated: s, inCall: l } = this.props;
        if ((o()(null != e, "Missing channel in Channel.renderChat"), n))
            return (o()(null != t, "premium channels must exist within a guild"),
            e?.isRoleSubscriptionTemplatePreviewChannel())
                ? (0, i.jsx)(X.A, { guildId: t.id })
                : (0, i.jsx)(Y.H, { guildId: t.id, children: (0, i.jsx)(q.A, { channelId: e.id, guildId: t.id }) });
        if (s) return (0, i.jsx)(eL.A, { guild: t, channelId: e.id });
        if (e.isGuildVocal() || (l && e.isVocalThread())) return null;
        if (e.isDirectory())
            return (
                o()(null != t, "directory channels must exist within a guild"),
                (0, i.jsx)(P.A, { channel: e, guild: t })
            );
        if (e.isForumLikeChannel()) {
            o()(null != t, "forum channels must exist within a guild");
            let n = {
                isThreadSidebarFloating: this.state.isThreadSidebarFloating,
                threadSidebarWidth: this.state.threadSidebarWidth,
            };
            return (0, i.jsx)(te, { channel: e, guild: t, sidebarState: n }, e.id);
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
            showCall: r,
            showActivityPanel: a,
            showFramePanel: c,
        } = this.props;
        if ((o()(null != e, "Missing channel in Channel.renderSidebar"), __OVERLAY__ || s));
        else if (l === e1.YvQ.PROFILE && e.isPrivate() && !r && !a && !c)
            return (0, i.jsx)(eO.A, { channel: e }, `private-channel-profile-${e.id}`);
        else if (l === e1.YvQ.MEMBERS)
            switch (e.type) {
                case e1.rbe.GROUP_DM:
                    return (0, i.jsx)(eA.A, { channel: e }, `private-channel-recipients-${e.id}`);
                case e1.rbe.GUILD_DIRECTORY:
                case e1.rbe.GUILD_FORUM:
                case e1.rbe.GUILD_MEDIA:
                case e1.rbe.GUILD_ANNOUNCEMENT:
                case e1.rbe.GUILD_TEXT:
                    let d = !0 === e1.kvI.GUILD_THREADS_ONLY.has(e.type) ? e.id : (e.guild_id ?? e.id);
                    return (0, i.jsx)(eJ.A, { channel: e }, `channel-members-${d}`);
                case e1.rbe.ANNOUNCEMENT_THREAD:
                    if (null != t) return (0, i.jsx)(eJ.A, { channel: t }, `channel-members-${t.id}`);
                    break;
                case e1.rbe.PUBLIC_THREAD:
                case e1.rbe.PRIVATE_THREAD:
                    if (!e.isArchivedThread() && null != n)
                        return (0, i.jsx)(f.A, { channel: e, guild: n }, `channel-members-${e.id}`);
            }
        else if (l === e1.YvQ.SEARCH) return (0, i.jsx)(ef.A, { guildId: n?.id, channelId: e.id });
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
                    (0, g.mMO)(
                        async () => {
                            let { default: e } = await n.e("38763").then(n.bind(n, 201510));
                            return (n) => (0, i.jsx)(e, { ...n, guildId: t });
                        },
                        {
                            onCloseCallback: () => F.A.viewPrompt(e3.X.REAL_NAME_PROMPT, t),
                            modalKey: "Guild Hub Real Name Modal",
                        },
                    ),
                l &&
                    (0, g.mMO)(
                        async () => {
                            let { default: e } = await n.e("98063").then(n.bind(n, 143154));
                            return (n) => (0, i.jsx)(e, { ...n, guildId: t });
                        },
                        { onCloseCallback: () => (0, eM.ry)(t, r), modalKey: "Guild Welcome Screen Modal" },
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
        if (n === e1.YvQ.SIDEBAR_CHAT && null != s) {
            if (a) return null;
            switch (s.type) {
                case eC.PE.CREATE_THREAD:
                    if (t?.isForumLikeChannel()) return null;
                    e = (0, i.jsx)(eb.A, {
                        parentChannelId: s.parentChannelId,
                        parentMessageId: s.parentMessageId,
                        location: s.location,
                    });
                    break;
                case eC.PE.VIEW_THREAD:
                    let n = t?.isForumLikeChannel() ? k.A : ev.A;
                    e = (0, i.jsx)(n, { channelId: s.channelId });
                    break;
                case eC.PE.VIEW_MOD_REPORT:
                    e = (0, i.jsx)(ev.A, { channelId: s.channelId, baseChannelId: s.baseChannelId });
                    break;
                case eC.PE.VIEW_CHANNEL:
                case eC.PE.VIEW_MESSAGE_REQUEST:
                default:
                    return null;
            }
        }
        if (null != l && null == e)
            if (l.type !== eC.QV.GUILD_MEMBER_MOD_VIEW) return null;
            else {
                let { guildId: e, userId: t, moderatorReportId: n } = l.details;
                return (0, i.jsx)("div", {
                    style: { width: e1.da6 },
                    className: e4.uC,
                    children: (0, i.jsx)(K.A, {
                        guildId: e,
                        userId: t,
                        moderatorReportId: n,
                        onClose: () => ex.A.closeGuildSidebar(e),
                    }),
                });
            }
        if (null == e) return null;
        let o = t?.type != null && e1.kvI.GUILD_THREADS_ONLY.has(t.type) ? 528 : 450,
            c = r - e1.MdR - o;
        return (
            (c += 375),
            (0, i.jsx)(eq.A, {
                sidebarType:
                    t?.type != null && e1.kvI.GUILD_THREADS_ONLY.has(t.type) ? eq.X.PostSidebar : eq.X.ThreadSidebar,
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
        if (s) return (0, i.jsx)(eQ.A, {});
        if (null == e) return (0, i.jsx)(e$.A, { channelId: this.props.channelId });
        let p = a === e1.YvQ.SIDEBAR_CHAT,
            g = null != c && !p,
            m = !e.isForumLikeChannel() && !o,
            _ = t?.name;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(U.HI, { location: _, subsection: n ?? void 0 }),
                (0, i.jsxs)("div", {
                    "data-has-border": e.type !== e1.rbe.GUILD_VOICE,
                    className: r()(e4.TE, { [e4.js]: p || g, [e4.jl]: p && h }),
                    children: [
                        m
                            ? (0, i.jsx)(x.A, {
                                  style: { right: p ? u : void 0 },
                                  className: e4.x4,
                                  channel: e,
                                  draftType: ew.C.ChannelMessage,
                              })
                            : null,
                        A || d ? null : this.renderHeaderBar(),
                        this.renderCall(),
                        this.renderEmbeddedActivityPanel(),
                        (0, i.jsxs)("div", {
                            className: r()(e4.Qs, { [e4.Oo]: l === e1.DUB.NO_CHAT }),
                            children: [this.renderChat(), this.renderSidebar()],
                        }),
                    ],
                }),
                this.renderThreadSidebar(),
            ],
        });
    }
}
let tn = (0, C.A)(tt),
    ti = s.memo(function (e) {
        let { providedChannel: t } = e,
            [n, l] = s.useState(null),
            r = (0, h.bG)([eF.A], () => eF.A.getChannelId()),
            a = (0, h.bG)([eF.A], () => eF.A.getVoiceChannelId()),
            o = (0, h.bG)([eP.A], () => t ?? eP.A.getChannel(r), [r, t]),
            c = (0, h.bG)([eP.A], () => eP.A.getChannel(a), [a]),
            g = o?.parent_id,
            _ = (0, h.bG)([eP.A], () => eP.A.getChannel(g), [g]),
            f = (0, h.bG)([eV.A], () => eV.A.getGuild(o?.guild_id), [o]),
            { needSubscriptionToAccess: x } = (0, z.A)(o?.id ?? void 0),
            C = (0, h.bG)([R.A], () => {
                let e = null != r ? R.A.getParticipants(r) : [],
                    t = null != r ? R.A.getActivityParticipants(r) : [];
                return e.length - t.length > 0;
            }, [r]),
            N = (0, B.A)(),
            v = (0, h.bG)([eF.A], () => (N?.channelId ?? eF.A.getVoiceChannelId()) === o?.id),
            O = (0, h.bG)([b.Ay], () => (null != o ? b.Ay.getSelfEmbeddedActivityForChannel(o.id) : null), [o]),
            L = (0, h.bG)([eH.A], () => eH.A.isConnected()),
            M = (0, I.A)(L),
            D = L && !1 === M;
        s.useEffect(() => {
            v &&
                D &&
                null != O &&
                null != o &&
                m.A.selectParticipant(
                    o.id,
                    (0, j.Qt)({ applicationId: O.applicationId, instanceId: O.compositeInstanceId }),
                );
        }, [D, o, v, O]);
        let G = (0, h.bG)([b.Ay], () => b.Ay.getCurrentEmbeddedActivity()),
            U = (0, h.bG)([b.Ay], () => b.Ay.getActivityPanelMode()),
            P = null != G && !(0, S.A)(o?.id) && U === e9.Gd.PANEL,
            k = (0, h.bG)(
                [eY.A],
                () => null != o && o.isVocalThread() && !d().isEmpty(eY.A.getVoiceStatesForChannel(o.id)),
                [o],
            ),
            H = null != o && o.isPrivate() && !P && C,
            F = o?.isGuildVocal() || H || k,
            K = (0, h.bG)([V.A], () => V.A.getFrameLayoutMode() === e2.y.FOCUSED),
            { welcomeModalChannelId: W } = (0, u.zy)(),
            Y = (0, h.bG)([eu.A], () => null != o && eu.A.isLurking(o.guild_id), [o]),
            X = (0, h.bG)([eD.A], () => eD.A.hasSeen(o?.guild_id, Y), [o, Y]),
            q = (0, h.bG)(
                [R.A, b.Ay],
                () =>
                    null != b.Ay.getConnectedActivityLocation() && b.Ay.getActivityPanelMode() === e9.Gd.PANEL
                        ? b.Ay.getFocusedLayout() === e9.E8.NO_CHAT
                            ? e1.DUB.NO_CHAT
                            : e1.DUB.NORMAL
                        : null != r
                          ? R.A.getLayout(r)
                          : e1.DUB.NORMAL,
                [r],
            ),
            Q = (0, h.bG)([R.A], () => (null != o ? R.A.getSelectedParticipant(o.id) : null)),
            $ = (0, y.vL)(o),
            Z = (0, ec.A)(f?.id),
            ee = (0, eG.A)(W, f?.id),
            { section: et, channelSidebarState: en } = (0, h.cf)(
                [eU.Ay],
                () => ({ section: eU.Ay.getSection(r, o?.isDM()), channelSidebarState: eU.Ay.getSidebarState(r) }),
                [r, o],
            ),
            ei = f?.id,
            es = (0, h.bG)([eU.Ay], () => eU.Ay.getGuildSidebarState(ei), [ei]),
            el = (0, h.bG)([eK.A], () => eK.A.getGuildId()) === e1.YYv,
            er = (0, eh.lI)(),
            ea = (0, ez.Ay)(o),
            eo = (0, ez.Ay)(o, !0),
            eA = null != o && a === o.id,
            ep = null != o && o.isGuildStageVoice();
        (0, T.A)({ onTransition: void 0 }),
            s.useEffect(() => {
                let e = (0, eg.JK)();
                if (e?.location?.state?.stageInviteKey === e5.J2) {
                    let { channelId: t } = (0, ed.vu)(e?.location?.pathname) ?? {};
                    null != t && l(t);
                }
            }, []);
        let em = { channel: o, inCurrentVoiceChannel: eA },
            e_ = s.useRef(em);
        s.useEffect(() => {
            e_.current = em;
        }),
            s.useEffect(() => {
                let { channel: e, inCurrentVoiceChannel: t } = e_.current;
                null != n && null != e && ep && e.id === n && !t && ((0, eE.av)(e), l(null));
            }, [n, ep]);
        let ef = (0, E.cI)(o),
            ex = null != o && o.isPrivate(),
            eC = (0, I.A)(ex),
            eI = (0, I.A)(o?.id);
        s.useEffect(() => {
            let e = eC && !ex,
                t = eC && ex && o?.id !== eI;
            (e || t) && (0, w.Dr)(A.M.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: e6.i.AUTO });
        }, [o?.id, eI, ex, eC]);
        let eb = (0, p.useHasAnyModalOpen)(),
            eN = J.A.useConfig({ location: "Channel" }).enabled;
        return (0, i.jsx)(tn, {
            guildId: o?.guild_id,
            channelId: r,
            channel: o,
            channelName: ea,
            formattedChannelName: eo,
            parentChannel: _,
            voiceChannel: c,
            layout: q,
            needSubscriptionToAccess: x,
            isLurking: Y,
            hasModalOpen: eb,
            section: et,
            channelSidebarState: en,
            guildSidebarState: es,
            guild: f,
            showCall: !x && F,
            showActivityPanel: P,
            showFramePanel: K,
            channelIsContentGated: $,
            isMobile: (0, h.bG)([eB.A], () => o?.type === e1.rbe.DM && eB.A.isMobileOnline(o.getRecipientId()), [o]),
            isUnavailable: (0, h.bG)([ek.A], () => o?.guild_id != null && ek.A.isUnavailable(o.guild_id), [o]),
            showRealNameModal: Z,
            showWelcomeModal: !X && ee,
            showFollowButton: (o?.type === e1.rbe.GUILD_ANNOUNCEMENT && f?.features.has(e1.GuildFeatures.NEWS)) || !1,
            ...(0, h.cf)([eY.A], () => ({ hasVideo: null != o && eY.A.hasVideo(o.id) }), [o]),
            inCall: eA,
            selectedParticipant: Q,
            showChannelSummaries: ef,
            isFavorites: el,
            showHeaderGuildBreadcrumb: el || er,
            premiumIndicatorEnabled: !1,
            hasTextActivityInPanelMode: P,
            embeddedActivity: G,
            isGdmCopyExperimentEnabled: eN,
        });
    });
