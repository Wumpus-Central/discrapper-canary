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
    U = n(268218),
    P = n(726249),
    w = n(274146),
    k = n(826673),
    V = n(713842),
    B = n(91242),
    H = n(857253),
    F = n(872363),
    K = n(211059),
    W = n(547015),
    Y = n(561446),
    z = n(300233),
    q = n(721592),
    X = n(403363),
    J = n(397036),
    Q = n(392135),
    $ = n(732044),
    Z = n(733441),
    ee = n(187360),
    et = n(287074),
    en = n(867624),
    ei = n(899584),
    es = n(742589),
    el = n(353428),
    er = n(402385),
    ea = n(95550),
    eo = n(467480),
    ec = n(788579),
    ed = n(744483),
    eu = n(889752),
    eh = n(376943),
    eA = n(857071),
    em = n(394953),
    ep = n(187582),
    eg = n(164203),
    e_ = n(976860),
    ef = n(378570),
    ex = n(822382),
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
    eY = n(967198),
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
    tt = n(638990);
let tn = (0, U.Fe)({
    createPromise: () => n.e("46875").then(n.bind(n, 625846)),
    webpackId: 625846,
    renderLoader: () => (0, i.jsx)("div", { className: tt.wG, children: (0, i.jsx)(p.y$y, {}) }),
    name: "ForumChannel",
});
class ti extends s.PureComponent {
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
        null != e && (0, ef.iN)(e.id);
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
                let { default: e } = await Promise.all([n.e("97262"), n.e("42128"), n.e("39778"), n.e("31885")]).then(
                    n.bind(n, 385913),
                );
                return (n) => (0, i.jsx)(e, { ...n, user: s, channelSelected: !0, channel: t });
            });
    }
    renderJoinRequestInterviewButtons = () => {
        let { channel: e } = this.props;
        return e?.hasFlag(e9.lx.IS_JOIN_REQUEST_INTERVIEW_CHANNEL)
            ? (0, i.jsx)(Y.A, { channelId: e.id, showTrailingDivider: !0 })
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
                  F.A,
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
                    a.push((0, i.jsx)(er.A, { channel: e }, "calls")),
                    a.push((0, i.jsx)(et.A, { channel: e }, "pins")),
                    a.push((0, i.jsx)(ea.Ay, { channel: e, tooltip: te.intl.string(te.t.Xjlbvs) }, "invite")),
                    a.push((0, i.jsx)(ed.A, { channel: e, showCallOrActivityPanel: s || l || r }, "profile")),
                    a.push((0, i.jsx)(eo.A, { channel: e }, "safety_tools"));
                break;
            case e7.rbe.GROUP_DM:
                if (
                    (a.push(this.renderJoinRequestInterviewButtons()),
                    a.push(this.renderClipsEnabledIndicatorToolbarItem()),
                    a.push(this.renderStreamQualityLiveIndicatorToolbarItem()),
                    a.push((0, i.jsx)(er.A, { channel: e }, "calls")),
                    a.push((0, i.jsx)(et.A, { channel: e }, "pins")),
                    !e.isManaged())
                ) {
                    let { isGdmCopyExperimentEnabled: t } = this.props,
                        n = te.intl.string(t ? te.t.AQAPts : te.t.Xjlbvs);
                    a.push((0, i.jsx)(ea.Ay, { channel: e, tooltip: n }, "invite"));
                }
                a.push((0, i.jsx)(Z.A, { channelId: e.id }, "members"));
                break;
            case e7.rbe.ANNOUNCEMENT_THREAD:
            case e7.rbe.PRIVATE_THREAD:
            case e7.rbe.PUBLIC_THREAD:
                e.isModeratorReportChannel() && a.push((0, i.jsx)(eT.A, { channel: e })),
                    null == t || t.isForumLikeChannel() || a.push((0, i.jsx)(ev.A, { channel: t }, "browser")),
                    e.isVocalThread() && a.push((0, i.jsx)(ec.A, { channel: e }, "thread-call")),
                    a.push((0, i.jsx)(ey.A, { channel: e }, "notifications")),
                    a.push((0, i.jsx)(et.A, { channel: e }, "pins")),
                    e.isArchivedThread() || a.push((0, i.jsx)(Z.A, { channelId: e.id }, "members")),
                    null != t && (0, E.pk)(e) && a.push((0, i.jsx)(en.A, { channel: e }, "summaries")),
                    a.push((0, i.jsx)(ej.A, { channel: e }, "threads-overflow"));
                break;
            case e7.rbe.GUILD_ANNOUNCEMENT:
            case e7.rbe.GUILD_TEXT:
                a.push((0, i.jsx)(ev.A, { channel: e }, "browser")),
                    n || a.push((0, i.jsx)(ee.A, { channel: e }, "notifications")),
                    a.push((0, i.jsx)(et.A, { channel: e }, "pins")),
                    (0, G.f)("channel_header") && a.push((0, i.jsx)($.A, { channel: e }, "conversations")),
                    a.push((0, i.jsx)(Z.A, { channelId: e.id }, "members")),
                    (0, E.pk)(e) && a.push((0, i.jsx)(en.A, { channel: e }, "summaries"));
                break;
            case e7.rbe.GUILD_FORUM:
            case e7.rbe.GUILD_MEDIA:
                n ||
                    (a.push((0, i.jsx)(ei.A, { channel: e }, "forum-onboarding")),
                    a.push((0, i.jsx)(ee.A, { channel: e }, "notifications"))),
                    __OVERLAY__ || a.push((0, i.jsx)(Z.A, { channelId: e.id }, "members"));
                break;
            case e7.rbe.GUILD_DIRECTORY:
                a.push((0, i.jsx)(Z.A, { channelId: e.id }, "members"));
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
                t.push((0, i.jsx)(Z.A, { channelId: e.id }, "members"));
                break;
            case e7.rbe.ANNOUNCEMENT_THREAD:
            case e7.rbe.PRIVATE_THREAD:
            case e7.rbe.PUBLIC_THREAD:
                e.isArchivedThread() || t.push((0, i.jsx)(Z.A, { channelId: e.id }, "members"));
                break;
            case e7.rbe.GUILD_ANNOUNCEMENT:
            case e7.rbe.GUILD_TEXT:
            case e7.rbe.GUILD_FORUM:
            case e7.rbe.GUILD_MEDIA:
            case e7.rbe.GUILD_DIRECTORY:
                t.push((0, i.jsx)(Z.A, { channelId: e.id }, "members"));
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
        let m = e.isDM() && !e.isSystemDM() ? this.openUserProfile : h ? () => (0, ef.iN)(e.id) : void 0,
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
                            es.A,
                            {
                                guildId: l,
                                channelId: e.id,
                                channelType: e.type,
                                hideSearch: e.isDirectory() || (A && !(0, ex.Eq)()),
                                showDivider: A && !(0, ex.Eq)(),
                                toolbar: this.renderHeaderToolbar(),
                                mobileToolbar: this.renderMobileToolbar(),
                                className: r()(tt.DD, a, { [tt.zh]: e.type === e7.rbe.GROUP_DM }),
                                transparent: f,
                                hidden: d,
                                "aria-label": te.intl.string(te.t.BIYAqa),
                                children: [
                                    h && (0, i.jsx)(el.i$, { channel: e, guild: s, caretPosition: "right" }),
                                    (0, el.zF)({
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
                                                  onClick: () => (0, e_.uh)(e.guild_id, e.id),
                                                  variant: "secondary",
                                                  size: "sm",
                                                  text: te.intl.string(te.t.k5WiPf),
                                              }),
                                          })
                                        : (0, el.EP)(e, s),
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
            case e7.rbe.GUILD_STAGE_VOICE:
                return (0, i.jsx)(eb.A, { channel: e, popoutType: O.N.NO_POPOUT }, e.id);
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
                ? (0, i.jsx)(X.A, { guildId: t.id })
                : (0, i.jsx)(z.H, { guildId: t.id, children: (0, i.jsx)(J.A, { channelId: e.id, guildId: t.id }) });
        if (s) return (0, i.jsx)(eD.A, { guild: t, channelId: e.id });
        if (e.isGuildVocal() || (l && e.isVocalThread())) return null;
        if (e.isDirectory())
            return (
                o()(null != t, "directory channels must exist within a guild"),
                (0, i.jsx)(w.A, { channel: e, guild: t })
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
            showCall: r,
            showActivityPanel: a,
            showFramePanel: c,
        } = this.props;
        if ((o()(null != e, "Missing channel in Channel.renderSidebar"), __OVERLAY__ || s));
        else if (l === e7.YvQ.PROFILE && e.isPrivate() && !r && !a && !c)
            return (0, i.jsx)(eM.A, { channel: e }, `private-channel-profile-${e.id}`);
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
        else if (l === e7.YvQ.SEARCH) return (0, i.jsx)(eC.A, { guildId: n?.id, channelId: e.id });
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
                            onCloseCallback: () => K.A.viewPrompt(e8.X.REAL_NAME_PROMPT, t),
                            modalKey: "Guild Hub Real Name Modal",
                        },
                    ),
                l &&
                    (0, p.mMO)(
                        async () => {
                            let { default: e } = await n.e("98063").then(n.bind(n, 143154));
                            return (n) => (0, i.jsx)(e, { ...n, guildId: t });
                        },
                        { onCloseCallback: () => (0, eG.ry)(t, r), modalKey: "Guild Welcome Screen Modal" },
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
                case eI.PE.CREATE_THREAD:
                    if (t?.isForumLikeChannel()) return null;
                    e = (0, i.jsx)(eS.A, {
                        parentChannelId: s.parentChannelId,
                        parentMessageId: s.parentMessageId,
                        location: s.location,
                    });
                    break;
                case eI.PE.VIEW_THREAD:
                    let n = t?.isForumLikeChannel() ? V.A : eR.A;
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
                    style: { width: e7.da6 },
                    className: tt.uC,
                    children: (0, i.jsx)(W.A, {
                        guildId: e,
                        userId: t,
                        moderatorReportId: n,
                        onClose: () => eE.A.closeGuildSidebar(e),
                    }),
                });
            }
        if (null == e) return null;
        let o = t?.type != null && e7.kvI.GUILD_THREADS_ONLY.has(t.type) ? 528 : 450,
            c = r - e7.MdR - o;
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
                (0, i.jsx)(P.HI, { location: _, subsection: n ?? void 0 }),
                (0, i.jsxs)("div", {
                    "data-has-border": e.type !== e7.rbe.GUILD_VOICE,
                    className: r()(tt.TE, { [tt.js]: m || p, [tt.jl]: m && h }),
                    children: [
                        g
                            ? (0, i.jsx)(x.A, {
                                  style: { right: m ? u : void 0 },
                                  className: tt.x4,
                                  channel: e,
                                  draftType: eV.C.ChannelMessage,
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
            r = (0, h.bG)([eW.A], () => eW.A.getChannelId()),
            a = (0, h.bG)([eW.A], () => eW.A.getVoiceChannelId()),
            o = (0, h.bG)([ek.A], () => t ?? ek.A.getChannel(r), [r, t]),
            c = (0, h.bG)([ek.A], () => ek.A.getChannel(a), [a]),
            p = o?.parent_id,
            _ = (0, h.bG)([ek.A], () => ek.A.getChannel(p), [p]),
            f = (0, h.bG)([eH.A], () => eH.A.getGuild(o?.guild_id), [o]),
            { needSubscriptionToAccess: x } = (0, q.A)(o?.id ?? void 0),
            C = (0, h.bG)([R.A], () => {
                let e = null != r ? R.A.getParticipants(r) : [],
                    t = null != r ? R.A.getActivityParticipants(r) : [];
                return e.length - t.length > 0;
            }, [r]),
            b = (0, H.A)(),
            y = (0, h.bG)([eW.A], () => (b?.channelId ?? eW.A.getVoiceChannelId()) === o?.id),
            O = (0, h.bG)([N.Ay], () => (null != o ? N.Ay.getSelfEmbeddedActivityForChannel(o.id) : null), [o]),
            L = (0, h.bG)([eK.A], () => eK.A.isConnected()),
            M = (0, I.A)(L),
            D = L && !1 === M;
        s.useEffect(() => {
            y &&
                D &&
                null != O &&
                null != o &&
                g.A.selectParticipant(
                    o.id,
                    (0, j.Qt)({ applicationId: O.applicationId, instanceId: O.compositeInstanceId }),
                );
        }, [D, o, y, O]);
        let G = (0, h.bG)([N.Ay], () => N.Ay.getCurrentEmbeddedActivity()),
            U = (0, h.bG)([N.Ay], () => N.Ay.getActivityPanelMode()),
            P = null != G && !(0, S.A)(o?.id) && U === e6.Gd.PANEL,
            w = (0, h.bG)(
                [eq.A],
                () => null != o && o.isVocalThread() && !d().isEmpty(eq.A.getVoiceStatesForChannel(o.id)),
                [o],
            ),
            V = null != o && o.isPrivate() && !P && C,
            F = o?.isGuildVocal() || V || w,
            K = (0, h.bG)([B.A], () => B.A.getFrameLayoutMode() === e5.y.FOCUSED),
            { welcomeModalChannelId: W } = (0, u.zy)(),
            Y = (0, h.bG)([eA.A], () => null != o && eA.A.isLurking(o.guild_id), [o]),
            z = (0, h.bG)([eU.A], () => eU.A.hasSeen(o?.guild_id, Y), [o, Y]),
            X = (0, h.bG)(
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
            J = (0, h.bG)([R.A], () => (null != o ? R.A.getSelectedParticipant(o.id) : null)),
            $ = (0, v.vL)(o),
            Z = (0, eu.A)(f?.id),
            ee = (0, eP.A)(W, f?.id),
            { section: et, channelSidebarState: en } = (0, h.cf)(
                [ew.Ay],
                () => ({ section: ew.Ay.getSection(r, o?.isDM()), channelSidebarState: ew.Ay.getSidebarState(r) }),
                [r, o],
            ),
            ei = f?.id,
            es = (0, h.bG)([ew.Ay], () => ew.Ay.getGuildSidebarState(ei), [ei]),
            el = (0, h.bG)([eY.A], () => eY.A.getGuildId()) === e7.YYv,
            er = (0, em.lI)(),
            ea = (0, eX.Ay)(o),
            eo = (0, eX.Ay)(o, !0),
            ec = null != o && a === o.id,
            ed = null != o && o.isGuildStageVoice();
        (0, T.A)({ onTransition: void 0 }),
            s.useEffect(() => {
                let e = (0, e_.JK)();
                if (e?.location?.state?.stageInviteKey === e4.J2) {
                    let { channelId: t } = (0, eh.vu)(e?.location?.pathname) ?? {};
                    null != t && l(t);
                }
            }, []);
        let ep = { channel: o, inCurrentVoiceChannel: ec },
            eg = s.useRef(ep);
        s.useEffect(() => {
            eg.current = ep;
        }),
            s.useEffect(() => {
                let { channel: e, inCurrentVoiceChannel: t } = eg.current;
                null != n && null != e && ed && e.id === n && !t && ((0, eN.av)(e), l(null));
            }, [n, ed]);
        let ef = (0, E.cI)(o),
            ex = null != o && o.isPrivate(),
            eC = (0, I.A)(ex),
            eE = (0, I.A)(o?.id);
        s.useEffect(() => {
            let e = eC && !ex,
                t = eC && ex && o?.id !== eE;
            (e || t) && (0, k.Dr)(A.M.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: e3.i.AUTO });
        }, [o?.id, eE, ex, eC]);
        let eI = (0, m.useHasAnyModalOpen)(),
            eb = Q.A.useConfig({ location: "Channel" }).enabled;
        return (0, i.jsx)(ts, {
            guildId: o?.guild_id,
            channelId: r,
            channel: o,
            channelName: ea,
            formattedChannelName: eo,
            parentChannel: _,
            voiceChannel: c,
            layout: X,
            needSubscriptionToAccess: x,
            isLurking: Y,
            hasModalOpen: eI,
            section: et,
            channelSidebarState: en,
            guildSidebarState: es,
            guild: f,
            showCall: !x && F,
            showActivityPanel: P,
            showFramePanel: K,
            channelIsContentGated: $,
            isMobile: (0, h.bG)([eF.A], () => o?.type === e7.rbe.DM && eF.A.isMobileOnline(o.getRecipientId()), [o]),
            isUnavailable: (0, h.bG)([eB.A], () => o?.guild_id != null && eB.A.isUnavailable(o.guild_id), [o]),
            showRealNameModal: Z,
            showWelcomeModal: !z && ee,
            showFollowButton: (o?.type === e7.rbe.GUILD_ANNOUNCEMENT && f?.features.has(e7.GuildFeatures.NEWS)) || !1,
            ...(0, h.cf)([eq.A], () => ({ hasVideo: null != o && eq.A.hasVideo(o.id) }), [o]),
            inCall: ec,
            selectedParticipant: J,
            showChannelSummaries: ef,
            isFavorites: el,
            showHeaderGuildBreadcrumb: el || er,
            premiumIndicatorEnabled: !1,
            hasTextActivityInPanelMode: P,
            embeddedActivity: G,
            isGdmCopyExperimentEnabled: eb,
        });
    });
