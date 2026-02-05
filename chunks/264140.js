n.d(t, { A: () => ti }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(284009),
    o = n.n(r),
    d = n(735438),
    c = n.n(d),
    u = n(960488),
    h = n(311907),
    A = n(554146),
    g = n(192308),
    m = n(397927),
    p = n(367513),
    _ = n(442433);
n(183994);
var x = n(483270),
    f = n(738876),
    E = n(456412),
    C = n(432371),
    I = n(475743),
    S = n(933958),
    b = n(156579),
    N = n(108959),
    T = n(480720),
    j = n(323073),
    v = n(793574),
    y = n(568598),
    R = n(313961),
    O = n(164617),
    L = n(540462),
    D = n(355622),
    M = n(689874),
    G = n(268218),
    U = n(726249),
    P = n(274146),
    k = n(826673),
    w = n(795766),
    V = n(713842),
    B = n(91242),
    H = n(857253),
    F = n(872363),
    Y = n(211059),
    W = n(547015),
    K = n(561446),
    z = n(300233),
    X = n(721592),
    q = n(403363),
    J = n(397036),
    Q = n(733441),
    Z = n(187360),
    $ = n(287074),
    ee = n(867624),
    et = n(899584),
    en = n(742589),
    ei = n(353428),
    el = n(402385),
    es = n(95550),
    ea = n(467480),
    er = n(788579),
    eo = n(744483),
    ed = n(889752),
    ec = n(376943),
    eu = n(857071),
    eh = n(394953),
    eA = n(187582),
    eg = n(164203),
    em = n(976860),
    ep = n(378570),
    e_ = n(822382),
    ex = n(23179),
    ef = n(138298),
    eE = n(940382),
    eC = n(323443),
    eI = n(566388),
    eS = n(168675),
    eb = n(170428),
    eN = n(494208),
    eT = n(933057),
    ej = n(328808),
    ev = n(415586),
    ey = n(210714),
    eR = n(657331),
    eO = n(328776),
    eL = n(522556),
    eD = n(447696),
    eM = n(684407),
    eG = n(709544),
    eU = n(761640),
    eP = n(734057),
    ek = n(31717),
    ew = n(919638),
    eV = n(71393),
    eB = n(290863),
    eH = n(383501),
    eF = n(309010),
    eY = n(967198),
    eW = n(287809),
    eK = n(977997),
    ez = n(47167),
    eX = n(698718),
    eq = n(812771),
    eJ = n(991275),
    eQ = n(59e3),
    eZ = n(377045),
    e$ = n(402216),
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
    renderLoader: () => (0, i.jsx)("div", { className: e4.wG, children: (0, i.jsx)(m.y$y, {}) }),
    name: "ForumChannel",
});
class tt extends l.PureComponent {
    state = { topicExpanded: !1, threadSidebarWidth: void 0, isThreadSidebarFloating: !1 };
    componentDidMount() {
        (0, ey.d)("guild_channel");
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
        null != e && (0, ep.iN)(e.id);
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
        let { guild: l } = this.props;
        o()(null != t, "Missing channel in Channel.openChannelContextMenu"),
            o()(null != l, "Missing guild in Channel.openChannelContextMenu"),
            (0, _.L3)(e, async () => {
                let { default: e } = await n.e("39806").then(n.bind(n, 340968));
                return (n) => (0, i.jsx)(e, { ...n, channel: t, guild: l });
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
        let l = eW.default.getUser(t.getRecipientId());
        o()(null != l, "Missing user in Channel.openDMContextMenu"),
            (0, _.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("97262"), n.e("42128"), n.e("39778"), n.e("54266")]).then(
                    n.bind(n, 385913),
                );
                return (n) => (0, i.jsx)(e, { ...n, user: l, channelSelected: !0, channel: t });
            });
    }
    renderJoinRequestInterviewButtons = () => {
        let { channel: e } = this.props;
        return e?.hasFlag(e0.lx.IS_JOIN_REQUEST_INTERVIEW_CHANNEL)
            ? (0, i.jsx)(K.A, { channelId: e.id, showTrailingDivider: !0 })
            : null;
    };
    renderClipsEnabledIndicatorToolbarItem = () => {
        let { inCall: e, voiceChannel: t } = this.props;
        return e ? (0, i.jsx)(M.A, { channelId: null != t ? t.id : null }) : null;
    };
    renderStreamQualityLiveIndicatorToolbarItem = () => {
        let { selectedParticipant: e, premiumIndicatorEnabled: t } = this.props;
        return e?.type !== e7.lp.STREAM
            ? null
            : (0, i.jsx)(
                  F.A,
                  { size: e$.Ay.Sizes.LARGE, participant: e, showQuality: !0, premiumIndicator: t },
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
            case e1.rbe.GUILD_STAGE_VOICE:
            case e1.rbe.GUILD_VOICE:
                break;
            case e1.rbe.DM:
                r.push(this.renderClipsEnabledIndicatorToolbarItem()),
                    r.push(this.renderStreamQualityLiveIndicatorToolbarItem()),
                    r.push((0, i.jsx)(el.A, { channel: e }, "calls")),
                    r.push((0, i.jsx)($.A, { channel: e }, "pins")),
                    r.push((0, i.jsx)(es.Ay, { channel: e, tooltip: e8.intl.string(e8.t.Xjlbvs) }, "invite")),
                    r.push((0, i.jsx)(eo.A, { channel: e, showCallOrActivityPanel: l || s || a }, "profile")),
                    r.push((0, i.jsx)(ea.A, { channel: e }, "safety_tools"));
                break;
            case e1.rbe.GROUP_DM:
                if (
                    (r.push(this.renderJoinRequestInterviewButtons()),
                    r.push(this.renderClipsEnabledIndicatorToolbarItem()),
                    r.push(this.renderStreamQualityLiveIndicatorToolbarItem()),
                    r.push((0, i.jsx)(el.A, { channel: e }, "calls")),
                    r.push((0, i.jsx)($.A, { channel: e }, "pins")),
                    !e.isManaged())
                ) {
                    let t = e8.intl.string(e8.t.Xjlbvs);
                    r.push((0, i.jsx)(es.Ay, { channel: e, tooltip: t }, "invite"));
                }
                r.push((0, i.jsx)(Q.A, { channelId: e.id }, "members"));
                break;
            case e1.rbe.ANNOUNCEMENT_THREAD:
            case e1.rbe.PRIVATE_THREAD:
            case e1.rbe.PUBLIC_THREAD:
                e.isModeratorReportChannel() && r.push((0, i.jsx)(eb.A, { channel: e })),
                    null == t || t.isForumLikeChannel() || r.push((0, i.jsx)(eN.A, { channel: t }, "browser")),
                    e.isVocalThread() && r.push((0, i.jsx)(er.A, { channel: e }, "thread-call")),
                    r.push((0, i.jsx)(eT.A, { channel: e }, "notifications")),
                    r.push((0, i.jsx)($.A, { channel: e }, "pins")),
                    e.isArchivedThread() || r.push((0, i.jsx)(Q.A, { channelId: e.id }, "members")),
                    null != t && (0, C.pk)(e) && r.push((0, i.jsx)(ee.A, { channel: e }, "summaries")),
                    r.push((0, i.jsx)(ej.A, { channel: e }, "threads-overflow"));
                break;
            case e1.rbe.GUILD_ANNOUNCEMENT:
            case e1.rbe.GUILD_TEXT:
                r.push((0, i.jsx)(w.A, { channel: e }, "favorites")),
                    r.push((0, i.jsx)(eN.A, { channel: e }, "browser")),
                    n || r.push((0, i.jsx)(Z.A, { channel: e }, "notifications")),
                    r.push((0, i.jsx)($.A, { channel: e }, "pins")),
                    r.push((0, i.jsx)(Q.A, { channelId: e.id }, "members")),
                    (0, C.pk)(e) && r.push((0, i.jsx)(ee.A, { channel: e }, "summaries"));
                break;
            case e1.rbe.GUILD_FORUM:
            case e1.rbe.GUILD_MEDIA:
                n ||
                    (r.push((0, i.jsx)(et.A, { channel: e }, "forum-onboarding")),
                    r.push((0, i.jsx)(Z.A, { channel: e }, "notifications"))),
                    __OVERLAY__ || r.push((0, i.jsx)(Q.A, { channelId: e.id }, "members"));
                break;
            case e1.rbe.GUILD_DIRECTORY:
                r.push((0, i.jsx)(Q.A, { channelId: e.id }, "members"));
        }
        return r;
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
                  children: (0, i.jsx)(m.Button, {
                      variant: "secondary",
                      size: "sm",
                      text: e8.intl.string(e8.t["3aOv+h"]),
                      onClick: () =>
                          (0, m.mMO)(async () => {
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
            isFavorites: A,
        } = this.props;
        o()(null != e, "Missing channel in Channel.renderHeaderBar"),
            o()(null != t, "Should not be null if channel is not null.");
        let g = e.isDM() && !e.isSystemDM() ? this.openUserProfile : h ? () => (0, ep.iN)(e.id) : void 0,
            p = n?.guild_id != null && n?.id != null ? this.handleTitleParentClick : void 0,
            _ = d || c,
            x = r || _;
        return (0, i.jsxs)("div", {
            className: e4.SC,
            children: [
                (0, i.jsx)(m.NPJ, {
                    theme: u && r ? e1.NJ8.DARK : void 0,
                    children: (r) =>
                        (0, i.jsxs)(
                            en.A,
                            {
                                guildId: s,
                                channelId: e.id,
                                channelType: e.type,
                                hideSearch: e.isDirectory() || (A && !(0, e_.Eq)()),
                                showDivider: A && !(0, e_.Eq)(),
                                toolbar: this.renderHeaderToolbar(),
                                mobileToolbar: this.renderMobileToolbar(),
                                className: a()(e4.DD, r, { [e4.zh]: e.type === e1.rbe.GROUP_DM }),
                                transparent: x,
                                hidden: c,
                                "aria-label": e8.intl.string(e8.t.BIYAqa),
                                children: [
                                    h && (0, i.jsx)(ei.i$, { channel: e, guild: l, caretPosition: "right" }),
                                    (0, ei.zF)({
                                        channel: e,
                                        channelName: t,
                                        parentChannel: n,
                                        guild: l,
                                        hasVideo: u,
                                        handleContextMenu: this.handleContextMenu,
                                        handleParentContextMenu: this.handleParentContextMenu,
                                        handleClick: g,
                                        handleParentClick: p,
                                        renderFollowButton: this.renderFollowButton,
                                    }),
                                    h
                                        ? (0, i.jsx)("div", {
                                              className: e4.u8,
                                              children: (0, i.jsx)(m.Button, {
                                                  onClick: () => (0, em.uh)(e.guild_id, e.id),
                                                  variant: "secondary",
                                                  size: "sm",
                                                  text: e8.intl.string(e8.t.k5WiPf),
                                              }),
                                          })
                                        : (0, ei.EP)(e, l),
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
        return (0, i.jsx)(b.A, { maxHeight: n, renderExternalHeader: this.renderHeaderBar });
    }
    renderChat() {
        let { channel: e, guild: t, needSubscriptionToAccess: n, channelIsContentGated: l, inCall: s } = this.props;
        if ((o()(null != e, "Missing channel in Channel.renderChat"), n))
            return (o()(null != t, "premium channels must exist within a guild"),
            e?.isRoleSubscriptionTemplatePreviewChannel())
                ? (0, i.jsx)(q.A, { guildId: t.id })
                : (0, i.jsx)(z.H, { guildId: t.id, children: (0, i.jsx)(J.A, { channelId: e.id, guildId: t.id }) });
        if (l) return (0, i.jsx)(eL.A, { guild: t, channelId: e.id });
        if (e.isGuildVocal() || (s && e.isVocalThread())) return null;
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
        return (0, i.jsx)(eX.A, { channel: e, guild: t, chatInputType: D.oU.NORMAL }, null != t ? t.id : "home");
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
        else if (s === e1.YvQ.PROFILE && e.isPrivate() && !a && !r && !d)
            return (0, i.jsx)(eO.A, { channel: e }, `private-channel-profile-${e.id}`);
        else if (s === e1.YvQ.MEMBERS)
            switch (e.type) {
                case e1.rbe.GROUP_DM:
                    return (0, i.jsx)(eA.A, { channel: e }, `private-channel-recipients-${e.id}`);
                case e1.rbe.GUILD_DIRECTORY:
                case e1.rbe.GUILD_FORUM:
                case e1.rbe.GUILD_MEDIA:
                case e1.rbe.GUILD_ANNOUNCEMENT:
                case e1.rbe.GUILD_TEXT:
                    let c = !0 === e1.kvI.GUILD_THREADS_ONLY.has(e.type) ? e.id : (e.guild_id ?? e.id);
                    return (0, i.jsx)(eJ.A, { channel: e }, `channel-members-${c}`);
                case e1.rbe.ANNOUNCEMENT_THREAD:
                    if (null != t) return (0, i.jsx)(eJ.A, { channel: t }, `channel-members-${t.id}`);
                    break;
                case e1.rbe.PUBLIC_THREAD:
                case e1.rbe.PRIVATE_THREAD:
                    if (!e.isArchivedThread() && null != n)
                        return (0, i.jsx)(x.A, { channel: e, guild: n }, `channel-members-${e.id}`);
            }
        else if (s === e1.YvQ.SEARCH) return (0, i.jsx)(ex.A, { guildId: n?.id, channelId: e.id });
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
                    (0, m.mMO)(
                        async () => {
                            let { default: e } = await n.e("38763").then(n.bind(n, 201510));
                            return (n) => (0, i.jsx)(e, { ...n, guildId: t });
                        },
                        {
                            onCloseCallback: () => Y.A.viewPrompt(e3.X.REAL_NAME_PROMPT, t),
                            modalKey: "Guild Hub Real Name Modal",
                        },
                    ),
                s &&
                    (0, m.mMO)(
                        async () => {
                            let { default: e } = await n.e("98063").then(n.bind(n, 143154));
                            return (n) => (0, i.jsx)(e, { ...n, guildId: t });
                        },
                        { onCloseCallback: () => (0, eD.ry)(t, a), modalKey: "Guild Welcome Screen Modal" },
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
            } = this.props;
        if (null == s && null == l) return null;
        if (n === e1.YvQ.SIDEBAR_CHAT && null != l) {
            if (r) return null;
            switch (l.type) {
                case eE.PE.CREATE_THREAD:
                    if (t?.isForumLikeChannel()) return null;
                    e = (0, i.jsx)(eS.A, {
                        parentChannelId: l.parentChannelId,
                        parentMessageId: l.parentMessageId,
                        location: l.location,
                    });
                    break;
                case eE.PE.VIEW_THREAD:
                    let n = t?.isForumLikeChannel() ? V.A : ev.A;
                    e = (0, i.jsx)(n, { channelId: l.channelId });
                    break;
                case eE.PE.VIEW_MOD_REPORT:
                    e = (0, i.jsx)(ev.A, { channelId: l.channelId, baseChannelId: l.baseChannelId });
                    break;
                case eE.PE.VIEW_CHANNEL:
                case eE.PE.VIEW_MESSAGE_REQUEST:
                default:
                    return null;
            }
        }
        if (null != s && null == e)
            if (s.type !== eE.QV.GUILD_MEMBER_MOD_VIEW) return null;
            else {
                let { guildId: e, userId: t, moderatorReportId: n } = s.details;
                return (0, i.jsx)("div", {
                    style: { width: e1.da6 },
                    className: e4.uC,
                    children: (0, i.jsx)(W.A, {
                        guildId: e,
                        userId: t,
                        moderatorReportId: n,
                        onClose: () => ef.A.closeGuildSidebar(e),
                    }),
                });
            }
        if (null == e) return null;
        let o = t?.type != null && e1.kvI.GUILD_THREADS_ONLY.has(t.type) ? 528 : 450,
            d = a - e1.MdR - o;
        return (
            (d += 375),
            (0, i.jsx)(eq.A, {
                sidebarType:
                    t?.type != null && e1.kvI.GUILD_THREADS_ONLY.has(t.type) ? eq.X.PostSidebar : eq.X.ThreadSidebar,
                maxWidth: d,
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
        if (l) return (0, i.jsx)(eQ.A, {});
        if (null == e) return (0, i.jsx)(eZ.A, { channelId: this.props.channelId });
        let g = r === e1.YvQ.SIDEBAR_CHAT,
            m = null != d && !g,
            p = !e.isForumLikeChannel() && !o,
            _ = t?.name;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(U.HI, { location: _, subsection: n ?? void 0 }),
                (0, i.jsxs)("div", {
                    "data-has-border": e.type !== e1.rbe.GUILD_VOICE,
                    className: a()(e4.TE, { [e4.js]: g || m, [e4.jl]: g && h }),
                    children: [
                        p
                            ? (0, i.jsx)(f.A, {
                                  style: { right: g ? u : void 0 },
                                  className: e4.x4,
                                  channel: e,
                                  draftType: ek.C.ChannelMessage,
                              })
                            : null,
                        A || c ? null : this.renderHeaderBar(),
                        this.renderCall(),
                        this.renderEmbeddedActivityPanel(),
                        (0, i.jsxs)("div", {
                            className: a()(e4.Qs, { [e4.Oo]: s === e1.DUB.NO_CHAT }),
                            children: [this.renderChat(), this.renderSidebar()],
                        }),
                    ],
                }),
                this.renderThreadSidebar(),
            ],
        });
    }
}
let tn = (0, E.A)(tt),
    ti = l.memo(function (e) {
        let { providedChannel: t } = e,
            [n, s] = l.useState(null),
            a = (0, h.bG)([eF.A], () => eF.A.getChannelId()),
            r = (0, h.bG)([eF.A], () => eF.A.getVoiceChannelId()),
            o = (0, h.bG)([eP.A], () => t ?? eP.A.getChannel(a), [a, t]),
            d = (0, h.bG)([eP.A], () => eP.A.getChannel(r), [r]),
            m = o?.parent_id,
            _ = (0, h.bG)([eP.A], () => eP.A.getChannel(m), [m]),
            x = (0, h.bG)([eV.A], () => eV.A.getGuild(o?.guild_id), [o]),
            { needSubscriptionToAccess: f } = (0, X.A)(o?.id ?? void 0),
            E = (0, h.bG)([R.A], () => {
                let e = null != a ? R.A.getParticipants(a) : [],
                    t = null != a ? R.A.getActivityParticipants(a) : [];
                return e.length - t.length > 0;
            }, [a]),
            b = (0, H.A)(),
            v = (0, h.bG)([eF.A], () => (b?.channelId ?? eF.A.getVoiceChannelId()) === o?.id),
            O = (0, h.bG)([S.Ay], () => (null != o ? S.Ay.getSelfEmbeddedActivityForChannel(o.id) : null), [o]),
            L = (0, h.bG)([eH.A], () => eH.A.isConnected()),
            D = (0, I.A)(L),
            M = L && !1 === D;
        l.useEffect(() => {
            v &&
                M &&
                null != O &&
                null != o &&
                p.A.selectParticipant(
                    o.id,
                    (0, y.Qt)({ applicationId: O.applicationId, instanceId: O.compositeInstanceId }),
                );
        }, [M, o, v, O]);
        let G = (0, h.bG)([S.Ay], () => S.Ay.getCurrentEmbeddedActivity()),
            U = (0, h.bG)([S.Ay], () => S.Ay.getActivityPanelMode()),
            P = null != G && !(0, N.A)(o?.id) && U === e9.Gd.PANEL,
            w = (0, h.bG)(
                [eK.A],
                () => null != o && o.isVocalThread() && !c().isEmpty(eK.A.getVoiceStatesForChannel(o.id)),
                [o],
            ),
            V = null != o && o.isPrivate() && !P && E,
            F = o?.isGuildVocal() || V || w,
            Y = (0, h.bG)([B.A], () => B.A.getFrameLayoutMode() === e2.y.FOCUSED),
            { welcomeModalChannelId: W } = (0, u.zy)(),
            K = (0, h.bG)([eu.A], () => null != o && eu.A.isLurking(o.guild_id), [o]),
            z = (0, h.bG)([eM.A], () => eM.A.hasSeen(o?.guild_id, K), [o, K]),
            q = (0, h.bG)(
                [R.A, S.Ay],
                () =>
                    null != S.Ay.getConnectedActivityLocation() && S.Ay.getActivityPanelMode() === e9.Gd.PANEL
                        ? S.Ay.getFocusedLayout() === e9.E8.NO_CHAT
                            ? e1.DUB.NO_CHAT
                            : e1.DUB.NORMAL
                        : null != a
                          ? R.A.getLayout(a)
                          : e1.DUB.NORMAL,
                [a],
            ),
            J = (0, h.bG)([R.A], () => (null != o ? R.A.getSelectedParticipant(o.id) : null)),
            Q = (0, j.vL)(o),
            Z = (0, ed.A)(x?.id),
            $ = (0, eG.A)(W, x?.id),
            { section: ee, channelSidebarState: et } = (0, h.cf)(
                [eU.Ay],
                () => ({ section: eU.Ay.getSection(a, o?.isDM()), channelSidebarState: eU.Ay.getSidebarState(a) }),
                [a, o],
            ),
            en = x?.id,
            ei = (0, h.bG)([eU.Ay], () => eU.Ay.getGuildSidebarState(en), [en]),
            el = (0, h.bG)([eY.A], () => eY.A.getGuildId()) === e1.YYv,
            es = (0, eh.lI)(),
            ea = (0, ez.Ay)(o),
            er = (0, ez.Ay)(o, !0),
            eo = null != o && r === o.id,
            eA = null != o && o.isGuildStageVoice();
        (0, T.A)({ onTransition: void 0 }),
            l.useEffect(() => {
                let e = (0, em.JK)();
                if (e?.location?.state?.stageInviteKey === e5.J2) {
                    let { channelId: t } = (0, ec.vu)(e?.location?.pathname) ?? {};
                    null != t && s(t);
                }
            }, []);
        let eg = { channel: o, inCurrentVoiceChannel: eo },
            ep = l.useRef(eg);
        l.useEffect(() => {
            ep.current = eg;
        }),
            l.useEffect(() => {
                let { channel: e, inCurrentVoiceChannel: t } = ep.current;
                null != n && null != e && eA && e.id === n && !t && ((0, eC.av)(e), s(null));
            }, [n, eA]);
        let e_ = (0, C.cI)(o),
            ex = null != o && o.isPrivate(),
            ef = (0, I.A)(ex),
            eE = (0, I.A)(o?.id);
        l.useEffect(() => {
            let e = ef && !ex,
                t = ef && ex && o?.id !== eE;
            (e || t) && (0, k.Dr)(A.M.ACTIVITY_GDM_CALL_TOOLTIP, { dismissAction: e6.i.AUTO });
        }, [o?.id, eE, ex, ef]);
        let eI = (0, g.useHasAnyModalOpen)();
        return (0, i.jsx)(tn, {
            guildId: o?.guild_id,
            channelId: a,
            channel: o,
            channelName: ea,
            formattedChannelName: er,
            parentChannel: _,
            voiceChannel: d,
            layout: q,
            needSubscriptionToAccess: f,
            isLurking: K,
            hasModalOpen: eI,
            section: ee,
            channelSidebarState: et,
            guildSidebarState: ei,
            guild: x,
            showCall: !f && F,
            showActivityPanel: P,
            showFramePanel: Y,
            channelIsContentGated: Q,
            isMobile: (0, h.bG)([eB.A], () => o?.type === e1.rbe.DM && eB.A.isMobileOnline(o.getRecipientId()), [o]),
            isUnavailable: (0, h.bG)([ew.A], () => o?.guild_id != null && ew.A.isUnavailable(o.guild_id), [o]),
            showRealNameModal: Z,
            showWelcomeModal: !z && $,
            showFollowButton: (o?.type === e1.rbe.GUILD_ANNOUNCEMENT && x?.features.has(e1.GuildFeatures.NEWS)) || !1,
            ...(0, h.cf)([eK.A], () => ({ hasVideo: null != o && eK.A.hasVideo(o.id) }), [o]),
            inCall: eo,
            selectedParticipant: J,
            showChannelSummaries: e_,
            isFavorites: el,
            showHeaderGuildBreadcrumb: el || es,
            premiumIndicatorEnabled: !1,
            hasTextActivityInPanelMode: P,
            embeddedActivity: G,
        });
    });
