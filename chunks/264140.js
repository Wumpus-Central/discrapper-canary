n.d(t, {
    A: () => ta,
}),
    n(896048),
    n(321073);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(284009),
    o = n.n(s),
    c = n(735438),
    u = n.n(c),
    d = n(960488),
    f = n(311907),
    p = n(554146),
    h = n(192308),
    b = n(397927),
    g = n(367513),
    m = n(442433);
n(183994);
var A = n(483270),
    y = n(738876),
    O = n(456412),
    j = n(432371),
    v = n(475743),
    x = n(933958),
    E = n(156579),
    _ = n(108959),
    C = n(480720),
    S = n(323073),
    I = n(793574),
    N = n(568598),
    T = n(313961),
    P = n(164617),
    w = n(540462),
    R = n(355622),
    D = n(689874),
    M = n(268218),
    L = n(726249),
    G = n(274146),
    k = n(826673),
    U = n(795766),
    V = n(713842),
    F = n(91242),
    H = n(857253),
    B = n(872363),
    K = n(211059),
    W = n(547015),
    z = n(561446),
    Y = n(300233),
    q = n(721592),
    X = n(403363),
    J = n(397036),
    Q = n(733441),
    Z = n(187360),
    $ = n(287074),
    ee = n(867624),
    et = n(899584),
    en = n(742589),
    er = n(353428),
    el = n(402385),
    ei = n(95550),
    ea = n(467480),
    es = n(788579),
    eo = n(744483),
    ec = n(889752),
    eu = n(376943),
    ed = n(857071),
    ef = n(394953),
    ep = n(187582),
    eh = n(164203),
    eb = n(976860),
    eg = n(378570),
    em = n(822382),
    eA = n(23179),
    ey = n(138298),
    eO = n(940382),
    ej = n(323443),
    ev = n(566388),
    ex = n(168675),
    eE = n(170428),
    e_ = n(494208),
    eC = n(933057),
    eS = n(328808),
    eI = n(415586),
    eN = n(210714),
    eT = n(657331),
    eP = n(328776),
    ew = n(522556),
    eR = n(447696),
    eD = n(684407),
    eM = n(709544),
    eL = n(761640),
    eG = n(734057),
    ek = n(31717),
    eU = n(919638),
    eV = n(71393),
    eF = n(290863),
    eH = n(383501),
    eB = n(309010),
    eK = n(967198),
    eW = n(287809),
    ez = n(977997),
    eY = n(47167),
    eq = n(698718),
    eX = n(812771),
    eJ = n(991275),
    eQ = n(59e3),
    eZ = n(377045),
    e$ = n(402216),
    e0 = n(746080),
    e1 = n(652215),
    e2 = n(5867),
    e9 = n(806931),
    e7 = n(49999),
    e3 = n(165610),
    e6 = n(957173),
    e8 = n(516607),
    e5 = n(985018),
    e4 = n(638990);

function te(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function tt(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                te(e, t, n[t]);
            });
    }
    return e;
}

function tn(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let tr = (0, M.Fe)({
    createPromise: () => n.e("46875").then(n.bind(n, 625846)),
    webpackId: 625846,
    renderLoader: () =>
        (0, r.jsx)("div", {
            className: e4.wG,
            children: (0, r.jsx)(b.y$y, {}),
        }),
    name: "ForumChannel",
});
class tl extends l.PureComponent {
    componentDidMount() {
        (0, eN.d)("guild_channel");
    }
    componentDidUpdate(e) {
        null != this.props.channel &&
            null != e.channel &&
            this.props.channel.id !== e.channel.id &&
            this.state.topicExpanded &&
            this.setState({
                topicExpanded: !1,
            }),
            this.openChannelModal();
    }
    openChannelContextMenu(e, t) {
        let { guild: l } = this.props;
        o()(null != t, "Missing channel in Channel.openChannelContextMenu"),
            o()(null != l, "Missing guild in Channel.openChannelContextMenu"),
            (0, m.L3)(e, async () => {
                let { default: e } = await n.e("17425").then(n.bind(n, 340968));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        tn(tt({}, n), {
                            channel: t,
                            guild: l,
                        }),
                    );
            });
    }
    openThreadContextMenu(e, t) {
        o()(null != t, "Missing channel in Channel.openChannelContextMenu"),
            (0, m.L3)(e, async () => {
                let { default: e } = await n.e("33").then(n.bind(n, 44536));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        tn(tt({}, n), {
                            channel: t,
                        }),
                    );
            });
    }
    openDMContextMenu(e, t) {
        o()(null != t, "Missing channel in Channel.openDMContextMenu");
        let l = eW.default.getUser(t.getRecipientId());
        o()(null != l, "Missing user in Channel.openDMContextMenu"),
            (0, m.L3)(e, async () => {
                let { default: e } = await Promise.all([n.e("97262"), n.e("29534"), n.e("39778"), n.e("54266")]).then(
                    n.bind(n, 385913),
                );
                return (n) =>
                    (0, r.jsx)(
                        e,
                        tn(tt({}, n), {
                            user: l,
                            channelSelected: !0,
                            channel: t,
                        }),
                    );
            });
    }
    shouldRenderCall() {
        let { showCall: e, channelIsContentGated: t } = this.props;
        return !t && e;
    }
    renderCall() {
        let { channel: e } = this.props;
        if ((o()(null != e, "Missing channel in Channel.renderCall"), !this.shouldRenderCall())) return null;
        switch (e.type) {
            case e1.rbe.GUILD_STAGE_VOICE:
                return (0, r.jsx)(
                    ev.A,
                    {
                        channel: e,
                        popoutType: P.N.NO_POPOUT,
                    },
                    e.id,
                );
            case e1.rbe.GUILD_VOICE:
            case e1.rbe.DM:
            case e1.rbe.GROUP_DM:
            case e1.rbe.PUBLIC_THREAD:
            case e1.rbe.PRIVATE_THREAD:
                let t = this.props.height - 200;
                return (0, r.jsx)(
                    w.A,
                    {
                        channel: e,
                        renderExternalHeader: this.renderHeaderBar,
                        maxHeight: t,
                        popoutType: P.N.NO_POPOUT,
                    },
                    "call-".concat(e.id),
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
        return (0, r.jsx)(E.A, {
            maxHeight: n,
            renderExternalHeader: this.renderHeaderBar,
        });
    }
    renderChat() {
        let { channel: e, guild: t, needSubscriptionToAccess: n, channelIsContentGated: l, inCall: i } = this.props;
        if ((o()(null != e, "Missing channel in Channel.renderChat"), n))
            return (o()(null != t, "premium channels must exist within a guild"),
            null == e ? void 0 : e.isRoleSubscriptionTemplatePreviewChannel())
                ? (0, r.jsx)(X.A, {
                      guildId: t.id,
                  })
                : (0, r.jsx)(Y.H, {
                      guildId: t.id,
                      children: (0, r.jsx)(J.A, {
                          channelId: e.id,
                          guildId: t.id,
                      }),
                  });
        if (l)
            return (0, r.jsx)(ew.A, {
                guild: t,
                channelId: e.id,
            });
        if (e.isGuildVocal() || (i && e.isVocalThread())) return null;
        if (e.isDirectory())
            return (
                o()(null != t, "directory channels must exist within a guild"),
                (0, r.jsx)(G.A, {
                    channel: e,
                    guild: t,
                })
            );
        if (e.isForumLikeChannel()) {
            o()(null != t, "forum channels must exist within a guild");
            let n = {
                isThreadSidebarFloating: this.state.isThreadSidebarFloating,
                threadSidebarWidth: this.state.threadSidebarWidth,
            };
            return (0, r.jsx)(
                tr,
                {
                    channel: e,
                    guild: t,
                    sidebarState: n,
                },
                e.id,
            );
        }
        return (0, r.jsx)(
            eq.A,
            {
                channel: e,
                guild: t,
                chatInputType: R.oU.NORMAL,
            },
            null != t ? t.id : "home",
        );
    }
    renderSidebar() {
        let {
            channel: e,
            parentChannel: t,
            guild: n,
            needSubscriptionToAccess: l,
            section: i,
            showCall: a,
            showActivityPanel: s,
            showFramePanel: c,
        } = this.props;
        if ((o()(null != e, "Missing channel in Channel.renderSidebar"), __OVERLAY__ || l));
        else if (i === e1.YvQ.PROFILE && e.isPrivate() && !a && !s && !c)
            return (0, r.jsx)(
                eP.A,
                {
                    channel: e,
                },
                "private-channel-profile-".concat(e.id),
            );
        else if (i === e1.YvQ.MEMBERS)
            switch (e.type) {
                case e1.rbe.GROUP_DM:
                    return (0, r.jsx)(
                        ep.A,
                        {
                            channel: e,
                        },
                        "private-channel-recipients-".concat(e.id),
                    );
                case e1.rbe.GUILD_DIRECTORY:
                case e1.rbe.GUILD_FORUM:
                case e1.rbe.GUILD_MEDIA:
                case e1.rbe.GUILD_ANNOUNCEMENT:
                case e1.rbe.GUILD_TEXT:
                    var u;
                    let d = !0 === e1.kvI.GUILD_THREADS_ONLY.has(e.type) ? e.id : null != (u = e.guild_id) ? u : e.id;
                    return (0, r.jsx)(
                        eJ.A,
                        {
                            channel: e,
                        },
                        "channel-members-".concat(d),
                    );
                case e1.rbe.ANNOUNCEMENT_THREAD:
                    if (null != t)
                        return (0, r.jsx)(
                            eJ.A,
                            {
                                channel: t,
                            },
                            "channel-members-".concat(t.id),
                        );
                    break;
                case e1.rbe.PUBLIC_THREAD:
                case e1.rbe.PRIVATE_THREAD:
                    if (!e.isArchivedThread() && null != n)
                        return (0, r.jsx)(
                            A.A,
                            {
                                channel: e,
                                guild: n,
                            },
                            "channel-members-".concat(e.id),
                        );
            }
        else if (i === e1.YvQ.SEARCH)
            return (0, r.jsx)(eA.A, {
                guildId: null == n ? void 0 : n.id,
                channelId: e.id,
            });
        return null;
    }
    openChannelModal() {
        let {
            channel: e,
            guildId: t,
            hasModalOpen: l,
            showWelcomeModal: i,
            isLurking: a,
            isUnavailable: s,
            showRealNameModal: o,
        } = this.props;
        return (
            null == e ||
                null == t ||
                s ||
                l ||
                (o &&
                    (0, b.mMO)(
                        async () => {
                            let { default: e } = await n.e("38763").then(n.bind(n, 201510));
                            return (n) =>
                                (0, r.jsx)(
                                    e,
                                    tn(tt({}, n), {
                                        guildId: t,
                                    }),
                                );
                        },
                        {
                            onCloseCallback: () => K.A.viewPrompt(e6.X.REAL_NAME_PROMPT, t),
                            modalKey: "Guild Hub Real Name Modal",
                        },
                    ),
                i &&
                    (0, b.mMO)(
                        async () => {
                            let { default: e } = await n.e("98063").then(n.bind(n, 143154));
                            return (n) =>
                                (0, r.jsx)(
                                    e,
                                    tn(tt({}, n), {
                                        guildId: t,
                                    }),
                                );
                        },
                        {
                            onCloseCallback: () => (0, eR.ry)(t, a),
                            modalKey: "Guild Welcome Screen Modal",
                        },
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
                guildSidebarState: i,
                width: a,
                channelIsContentGated: s,
            } = this.props;
        if (null == i && null == l) return null;
        if (n === e1.YvQ.SIDEBAR_CHAT && null != l) {
            if (s) return null;
            switch (l.type) {
                case eO.PE.CREATE_THREAD:
                    if (null == t ? void 0 : t.isForumLikeChannel()) return null;
                    e = (0, r.jsx)(ex.A, {
                        parentChannelId: l.parentChannelId,
                        parentMessageId: l.parentMessageId,
                        location: l.location,
                    });
                    break;
                case eO.PE.VIEW_THREAD:
                    let n = (null == t ? void 0 : t.isForumLikeChannel()) ? V.A : eI.A;
                    e = (0, r.jsx)(n, {
                        channelId: l.channelId,
                    });
                    break;
                case eO.PE.VIEW_MOD_REPORT:
                    e = (0, r.jsx)(eI.A, {
                        channelId: l.channelId,
                        baseChannelId: l.baseChannelId,
                    });
                    break;
                case eO.PE.VIEW_CHANNEL:
                case eO.PE.VIEW_MESSAGE_REQUEST:
                default:
                    return null;
            }
        }
        if (null != i && null == e)
            if (i.type !== eO.QV.GUILD_MEMBER_MOD_VIEW) return null;
            else {
                let { guildId: e, userId: t, moderatorReportId: n } = i.details;
                return (0, r.jsx)("div", {
                    style: {
                        width: e1.da6,
                    },
                    className: e4.uC,
                    children: (0, r.jsx)(W.A, {
                        guildId: e,
                        userId: t,
                        moderatorReportId: n,
                        onClose: () => ey.A.closeGuildSidebar(e),
                    }),
                });
            }
        if (null == e) return null;
        let o = (null == t ? void 0 : t.type) != null && e1.kvI.GUILD_THREADS_ONLY.has(t.type) ? 528 : 450,
            c = a - e1.MdR - o;
        return (
            (c += 375),
            (0, r.jsx)(eX.A, {
                sidebarType:
                    (null == t ? void 0 : t.type) != null && e1.kvI.GUILD_THREADS_ONLY.has(t.type)
                        ? eX.X.PostSidebar
                        : eX.X.ThreadSidebar,
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
                layout: i,
                section: s,
                hasModalOpen: o,
                guildSidebarState: c,
                hasTextActivityInPanelMode: u,
            } = this.props,
            { threadSidebarWidth: d, isThreadSidebarFloating: f } = this.state,
            p = this.shouldRenderCall();
        if (l) return (0, r.jsx)(eQ.A, {});
        if (null == e)
            return (0, r.jsx)(eZ.A, {
                channelId: this.props.channelId,
            });
        let h = s === e1.YvQ.SIDEBAR_CHAT,
            b = null != c && !h,
            g = !e.isForumLikeChannel() && !o,
            m = null == t ? void 0 : t.name;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(L.HI, {
                    location: m,
                    subsection: null != n ? n : void 0,
                }),
                (0, r.jsxs)("div", {
                    "data-has-border": e.type !== e1.rbe.GUILD_VOICE,
                    className: a()(e4.TE, {
                        [e4.js]: h || b,
                        [e4.jl]: h && f,
                    }),
                    children: [
                        g
                            ? (0, r.jsx)(y.A, {
                                  style: {
                                      right: h ? d : void 0,
                                  },
                                  className: e4.x4,
                                  channel: e,
                                  draftType: ek.C.ChannelMessage,
                              })
                            : null,
                        p || u ? null : this.renderHeaderBar(),
                        this.renderCall(),
                        this.renderEmbeddedActivityPanel(),
                        (0, r.jsxs)("div", {
                            className: a()(e4.Qs, {
                                [e4.Oo]: i === e1.DUB.NO_CHAT,
                            }),
                            children: [this.renderChat(), this.renderSidebar()],
                        }),
                    ],
                }),
                this.renderThreadSidebar(),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            te(this, "state", {
                topicExpanded: !1,
                threadSidebarWidth: void 0,
                isThreadSidebarFloating: !1,
            }),
            te(this, "handleTitleParentClick", () => {
                let { parentChannel: e } = this.props;
                null != e && (0, eg.iN)(e.id);
            }),
            te(this, "_handleContextMenu", (e, t) => {
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
            }),
            te(this, "handleContextMenu", (e) => {
                o()(null != this.props.channel, "Missing channel in Channel.handleContextMenu"),
                    this._handleContextMenu(e, this.props.channel);
            }),
            te(this, "handleParentContextMenu", (e) => {
                o()(null != this.props.parentChannel, "Missing parentChannel in Channel.handleParentContextMenu"),
                    this._handleContextMenu(e, this.props.parentChannel);
            }),
            te(this, "handleThreadSidebarResize", (e, t) => {
                this.setState({
                    threadSidebarWidth: e,
                    isThreadSidebarFloating: t,
                });
            }),
            te(this, "openUserProfile", () => {
                let { channel: e } = this.props;
                o()(null == e ? void 0 : e.isPrivate(), "Missing private channel in Channel.openUserProfile"),
                    (0, eT.openUserProfileModal)({
                        userId: e.getRecipientId(),
                        guildId: e.guild_id,
                        channelId: e.id,
                        sourceAnalyticsLocations: [I.A.CHANNEL_HEADER],
                    });
            }),
            te(this, "renderJoinRequestInterviewButtons", () => {
                let { channel: e } = this.props;
                return (null == e ? void 0 : e.hasFlag(e0.lx.IS_JOIN_REQUEST_INTERVIEW_CHANNEL))
                    ? (0, r.jsx)(z.A, {
                          channelId: e.id,
                          showTrailingDivider: !0,
                      })
                    : null;
            }),
            te(this, "renderClipsEnabledIndicatorToolbarItem", () => {
                let { inCall: e, voiceChannel: t } = this.props;
                return e
                    ? (0, r.jsx)(D.A, {
                          channelId: null != t ? t.id : null,
                      })
                    : null;
            }),
            te(this, "renderStreamQualityLiveIndicatorToolbarItem", () => {
                let { selectedParticipant: e, premiumIndicatorEnabled: t } = this.props;
                return (null == e ? void 0 : e.type) !== e9.lp.STREAM
                    ? null
                    : (0, r.jsx)(
                          B.A,
                          {
                              size: e$.Ay.Sizes.LARGE,
                              participant: e,
                              showQuality: !0,
                              premiumIndicator: t,
                          },
                          "live-indicator",
                      );
            }),
            te(this, "renderHeaderToolbar", () => {
                let {
                    channel: e,
                    parentChannel: t,
                    isLurking: n,
                    showCall: l,
                    showActivityPanel: i,
                    showFramePanel: a,
                } = this.props;
                o()(null != e, "Missing channel in Channel.renderHeaderToolbar");
                let s = [];
                if (e.isSystemDM()) return s;
                switch (e.type) {
                    case e1.rbe.GUILD_STAGE_VOICE:
                    case e1.rbe.GUILD_VOICE:
                        break;
                    case e1.rbe.DM:
                        s.push(this.renderClipsEnabledIndicatorToolbarItem()),
                            s.push(this.renderStreamQualityLiveIndicatorToolbarItem()),
                            s.push(
                                (0, r.jsx)(
                                    el.A,
                                    {
                                        channel: e,
                                    },
                                    "calls",
                                ),
                            ),
                            s.push(
                                (0, r.jsx)(
                                    $.A,
                                    {
                                        channel: e,
                                    },
                                    "pins",
                                ),
                            ),
                            s.push(
                                (0, r.jsx)(
                                    ei.A,
                                    {
                                        channel: e,
                                        tooltip: e5.intl.string(e5.t.Xjlbvs),
                                    },
                                    "invite",
                                ),
                            ),
                            s.push(
                                (0, r.jsx)(
                                    eo.A,
                                    {
                                        channel: e,
                                        showCallOrActivityPanel: l || i || a,
                                    },
                                    "profile",
                                ),
                            ),
                            s.push(
                                (0, r.jsx)(
                                    ea.A,
                                    {
                                        channel: e,
                                    },
                                    "safety_tools",
                                ),
                            );
                        break;
                    case e1.rbe.GROUP_DM:
                        if (
                            (s.push(this.renderJoinRequestInterviewButtons()),
                            s.push(this.renderClipsEnabledIndicatorToolbarItem()),
                            s.push(this.renderStreamQualityLiveIndicatorToolbarItem()),
                            s.push(
                                (0, r.jsx)(
                                    el.A,
                                    {
                                        channel: e,
                                    },
                                    "calls",
                                ),
                            ),
                            s.push(
                                (0, r.jsx)(
                                    $.A,
                                    {
                                        channel: e,
                                    },
                                    "pins",
                                ),
                            ),
                            !e.isManaged())
                        ) {
                            let t = e5.intl.string(e5.t.Xjlbvs);
                            s.push(
                                (0, r.jsx)(
                                    ei.A,
                                    {
                                        channel: e,
                                        tooltip: t,
                                    },
                                    "invite",
                                ),
                            );
                        }
                        s.push(
                            (0, r.jsx)(
                                Q.A,
                                {
                                    channelId: e.id,
                                },
                                "members",
                            ),
                        );
                        break;
                    case e1.rbe.ANNOUNCEMENT_THREAD:
                    case e1.rbe.PRIVATE_THREAD:
                    case e1.rbe.PUBLIC_THREAD:
                        e.isModeratorReportChannel() &&
                            s.push(
                                (0, r.jsx)(eE.A, {
                                    channel: e,
                                }),
                            ),
                            null == t ||
                                t.isForumLikeChannel() ||
                                s.push(
                                    (0, r.jsx)(
                                        e_.A,
                                        {
                                            channel: t,
                                        },
                                        "browser",
                                    ),
                                ),
                            e.isVocalThread() &&
                                s.push(
                                    (0, r.jsx)(
                                        es.A,
                                        {
                                            channel: e,
                                        },
                                        "thread-call",
                                    ),
                                ),
                            s.push(
                                (0, r.jsx)(
                                    eC.A,
                                    {
                                        channel: e,
                                    },
                                    "notifications",
                                ),
                            ),
                            s.push(
                                (0, r.jsx)(
                                    $.A,
                                    {
                                        channel: e,
                                    },
                                    "pins",
                                ),
                            ),
                            e.isArchivedThread() ||
                                s.push(
                                    (0, r.jsx)(
                                        Q.A,
                                        {
                                            channelId: e.id,
                                        },
                                        "members",
                                    ),
                                ),
                            null != t &&
                                (0, j.pk)(e) &&
                                s.push(
                                    (0, r.jsx)(
                                        ee.A,
                                        {
                                            channel: e,
                                        },
                                        "summaries",
                                    ),
                                ),
                            s.push(
                                (0, r.jsx)(
                                    eS.A,
                                    {
                                        channel: e,
                                    },
                                    "threads-overflow",
                                ),
                            );
                        break;
                    case e1.rbe.GUILD_ANNOUNCEMENT:
                    case e1.rbe.GUILD_TEXT:
                        s.push(
                            (0, r.jsx)(
                                U.A,
                                {
                                    channel: e,
                                },
                                "favorites",
                            ),
                        ),
                            s.push(
                                (0, r.jsx)(
                                    e_.A,
                                    {
                                        channel: e,
                                    },
                                    "browser",
                                ),
                            ),
                            n ||
                                s.push(
                                    (0, r.jsx)(
                                        Z.A,
                                        {
                                            channel: e,
                                        },
                                        "notifications",
                                    ),
                                ),
                            s.push(
                                (0, r.jsx)(
                                    $.A,
                                    {
                                        channel: e,
                                    },
                                    "pins",
                                ),
                            ),
                            s.push(
                                (0, r.jsx)(
                                    Q.A,
                                    {
                                        channelId: e.id,
                                    },
                                    "members",
                                ),
                            ),
                            (0, j.pk)(e) &&
                                s.push(
                                    (0, r.jsx)(
                                        ee.A,
                                        {
                                            channel: e,
                                        },
                                        "summaries",
                                    ),
                                );
                        break;
                    case e1.rbe.GUILD_FORUM:
                    case e1.rbe.GUILD_MEDIA:
                        n ||
                            (s.push(
                                (0, r.jsx)(
                                    et.A,
                                    {
                                        channel: e,
                                    },
                                    "forum-onboarding",
                                ),
                            ),
                            s.push(
                                (0, r.jsx)(
                                    Z.A,
                                    {
                                        channel: e,
                                    },
                                    "notifications",
                                ),
                            )),
                            __OVERLAY__ ||
                                s.push(
                                    (0, r.jsx)(
                                        Q.A,
                                        {
                                            channelId: e.id,
                                        },
                                        "members",
                                    ),
                                );
                        break;
                    case e1.rbe.GUILD_DIRECTORY:
                        s.push(
                            (0, r.jsx)(
                                Q.A,
                                {
                                    channelId: e.id,
                                },
                                "members",
                            ),
                        );
                }
                return s;
            }),
            te(this, "renderMobileToolbar", () => {
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
                        t.push(
                            (0, r.jsx)(
                                Q.A,
                                {
                                    channelId: e.id,
                                },
                                "members",
                            ),
                        );
                        break;
                    case e1.rbe.ANNOUNCEMENT_THREAD:
                    case e1.rbe.PRIVATE_THREAD:
                    case e1.rbe.PUBLIC_THREAD:
                        e.isArchivedThread() ||
                            t.push(
                                (0, r.jsx)(
                                    Q.A,
                                    {
                                        channelId: e.id,
                                    },
                                    "members",
                                ),
                            );
                        break;
                    case e1.rbe.GUILD_ANNOUNCEMENT:
                    case e1.rbe.GUILD_TEXT:
                    case e1.rbe.GUILD_FORUM:
                    case e1.rbe.GUILD_MEDIA:
                    case e1.rbe.GUILD_DIRECTORY:
                        t.push(
                            (0, r.jsx)(
                                Q.A,
                                {
                                    channelId: e.id,
                                },
                                "members",
                            ),
                        );
                }
                return t;
            }),
            te(this, "renderFollowButton", () => {
                let { showFollowButton: e, channel: t } = this.props;
                return e
                    ? (0, r.jsx)("div", {
                          className: e4.u8,
                          children: (0, r.jsx)(b.Button, {
                              variant: "secondary",
                              size: "sm",
                              text: e5.intl.string(e5.t["3aOv+h"]),
                              onClick: () =>
                                  (0, b.mMO)(async () => {
                                      let { default: e } = await n.e("66464").then(n.bind(n, 464035));
                                      return (n) =>
                                          (0, r.jsx)(
                                              e,
                                              tt(
                                                  {
                                                      channel: t,
                                                  },
                                                  n,
                                              ),
                                          );
                                  }),
                          }),
                      })
                    : null;
            }),
            te(this, "renderHeaderBar", () => {
                let {
                    channel: e,
                    channelName: t,
                    parentChannel: n,
                    guild: l,
                    guildId: i,
                    showCall: s,
                    showActivityPanel: c,
                    showFramePanel: u,
                    hasVideo: d,
                    showHeaderGuildBreadcrumb: f,
                    isFavorites: p,
                } = this.props;
                o()(null != e, "Missing channel in Channel.renderHeaderBar"),
                    o()(null != t, "Should not be null if channel is not null.");
                let h = e.isDM() && !e.isSystemDM() ? this.openUserProfile : f ? () => (0, eg.iN)(e.id) : void 0,
                    g =
                        (null == n ? void 0 : n.guild_id) != null && (null == n ? void 0 : n.id) != null
                            ? this.handleTitleParentClick
                            : void 0,
                    m = c || u,
                    A = s || m;
                return (0, r.jsxs)("div", {
                    className: e4.SC,
                    children: [
                        (0, r.jsx)(b.NPJ, {
                            theme: d && s ? e1.NJ8.DARK : void 0,
                            children: (s) =>
                                (0, r.jsxs)(
                                    en.A,
                                    {
                                        guildId: i,
                                        channelId: e.id,
                                        channelType: e.type,
                                        hideSearch: e.isDirectory() || (p && !(0, em.Eq)()),
                                        showDivider: p && !(0, em.Eq)(),
                                        toolbar: this.renderHeaderToolbar(),
                                        mobileToolbar: this.renderMobileToolbar(),
                                        className: a()(e4.DD, s, {
                                            [e4.zh]: e.type === e1.rbe.GROUP_DM,
                                        }),
                                        transparent: A,
                                        hidden: u,
                                        "aria-label": e5.intl.string(e5.t.BIYAqa),
                                        children: [
                                            f &&
                                                (0, r.jsx)(er.i$, {
                                                    channel: e,
                                                    guild: l,
                                                    caretPosition: "right",
                                                }),
                                            (0, er.zF)({
                                                channel: e,
                                                channelName: t,
                                                parentChannel: n,
                                                guild: l,
                                                hasVideo: d,
                                                handleContextMenu: this.handleContextMenu,
                                                handleParentContextMenu: this.handleParentContextMenu,
                                                handleClick: h,
                                                handleParentClick: g,
                                                renderFollowButton: this.renderFollowButton,
                                            }),
                                            f
                                                ? (0, r.jsx)("div", {
                                                      className: e4.u8,
                                                      children: (0, r.jsx)(b.Button, {
                                                          onClick: () => (0, eb.uh)(e.guild_id, e.id),
                                                          variant: "secondary",
                                                          size: "sm",
                                                          text: e5.intl.string(e5.t.k5WiPf),
                                                      }),
                                                  })
                                                : (0, er.EP)(e, l),
                                        ],
                                    },
                                    "header-".concat(e.id),
                                ),
                        }),
                        (0, r.jsx)(eh.A, {
                            channelId: e.id,
                        }),
                    ],
                });
            });
    }
}
let ti = (0, O.A)(tl),
    ta = l.memo(function (e) {
        var t;
        let { providedChannel: n } = e,
            [i, a] = l.useState(null),
            s = (0, f.bG)([eB.A], () => eB.A.getChannelId()),
            o = (0, f.bG)([eB.A], () => eB.A.getVoiceChannelId()),
            c = (0, f.bG)([eG.A], () => (null != n ? n : eG.A.getChannel(s)), [s, n]),
            b = (0, f.bG)([eG.A], () => eG.A.getChannel(o), [o]),
            m = null == c ? void 0 : c.parent_id,
            A = (0, f.bG)([eG.A], () => eG.A.getChannel(m), [m]),
            y = (0, f.bG)([eV.A], () => eV.A.getGuild(null == c ? void 0 : c.guild_id), [c]),
            { needSubscriptionToAccess: O } = (0, q.A)(null != (t = null == c ? void 0 : c.id) ? t : void 0),
            E = (0, f.bG)([T.A], () => {
                let e = null != s ? T.A.getParticipants(s) : [],
                    t = null != s ? T.A.getActivityParticipants(s) : [];
                return e.length - t.length > 0;
            }, [s]),
            I = (0, H.A)(),
            P = (0, f.bG)([eB.A], () => {
                var e;
                return (
                    (null != (e = null == I ? void 0 : I.channelId) ? e : eB.A.getVoiceChannelId()) ===
                    (null == c ? void 0 : c.id)
                );
            }),
            w = (0, f.bG)([x.Ay], () => (null != c ? x.Ay.getSelfEmbeddedActivityForChannel(c.id) : null), [c]),
            R = (0, f.bG)([eH.A], () => eH.A.isConnected()),
            D = (0, v.A)(R),
            M = R && !1 === D;
        l.useEffect(() => {
            P &&
                M &&
                null != w &&
                null != c &&
                g.A.selectParticipant(
                    c.id,
                    (0, N.Qt)({
                        applicationId: w.applicationId,
                        instanceId: w.compositeInstanceId,
                    }),
                );
        }, [M, c, P, w]);
        let L = (0, f.bG)([x.Ay], () => x.Ay.getCurrentEmbeddedActivity()),
            G = (0, f.bG)([x.Ay], () => x.Ay.getActivityPanelMode()),
            U = null != L && !(0, _.A)(null == c ? void 0 : c.id) && G === e2.Gd.PANEL,
            V = (0, f.bG)(
                [ez.A],
                () => null != c && c.isVocalThread() && !u().isEmpty(ez.A.getVoiceStatesForChannel(c.id)),
                [c],
            ),
            B = null != c && c.isPrivate() && !U && E,
            K = (null == c ? void 0 : c.isGuildVocal()) || B || V,
            W = (0, f.bG)([F.A], () => F.A.getFrameLayoutMode() === e3.y.FOCUSED),
            { welcomeModalChannelId: z } = (0, d.zy)(),
            Y = (0, f.bG)([ed.A], () => null != c && ed.A.isLurking(c.guild_id), [c]),
            X = (0, f.bG)([eD.A], () => eD.A.hasSeen(null == c ? void 0 : c.guild_id, Y), [c, Y]),
            J = (0, f.bG)(
                [T.A, x.Ay],
                () =>
                    null != x.Ay.getConnectedActivityLocation() && x.Ay.getActivityPanelMode() === e2.Gd.PANEL
                        ? x.Ay.getFocusedLayout() === e2.E8.NO_CHAT
                            ? e1.DUB.NO_CHAT
                            : e1.DUB.NORMAL
                        : null != s
                          ? T.A.getLayout(s)
                          : e1.DUB.NORMAL,
                [s],
            ),
            Q = (0, f.bG)([T.A], () => (null != c ? T.A.getSelectedParticipant(c.id) : null)),
            Z = (0, S.vL)(c),
            $ = (0, ec.A)(null == y ? void 0 : y.id),
            ee = (0, eM.A)(z, null == y ? void 0 : y.id),
            { section: et, channelSidebarState: en } = (0, f.cf)(
                [eL.Ay],
                () => ({
                    section: eL.Ay.getSection(s, null == c ? void 0 : c.isDM()),
                    channelSidebarState: eL.Ay.getSidebarState(s),
                }),
                [s, c],
            ),
            er = null == y ? void 0 : y.id,
            el = (0, f.bG)([eL.Ay], () => eL.Ay.getGuildSidebarState(er), [er]),
            ei = (0, f.bG)([eK.A], () => eK.A.getGuildId()) === e1.YYv,
            ea = (0, ef.lI)(),
            es = (0, eY.Ay)(c),
            eo = (0, eY.Ay)(c, !0),
            ep = null != c && o === c.id,
            eh = null != c && c.isGuildStageVoice();
        (0, C.A)({
            onTransition: void 0,
        }),
            l.useEffect(() => {
                var e, t, n;
                let r = (0, eb.JK)();
                if ((null == r || null == (e = r.location) ? void 0 : e.state) === e8.J2) {
                    let { channelId: e } =
                        null != (t = (0, eu.vu)(null == r || null == (n = r.location) ? void 0 : n.pathname)) ? t : {};
                    null != e && a(e);
                }
            }, []);
        let eg = {
                channel: c,
                inCurrentVoiceChannel: ep,
            },
            em = l.useRef(eg);
        l.useEffect(() => {
            em.current = eg;
        }),
            l.useEffect(() => {
                let { channel: e, inCurrentVoiceChannel: t } = em.current;
                null != i && null != e && eh && e.id === i && !t && ((0, ej.av)(e), a(null));
            }, [i, eh]);
        let eA = (0, j.cI)(c),
            ey = null != c && c.isPrivate(),
            eO = (0, v.A)(ey),
            ev = (0, v.A)(null == c ? void 0 : c.id);
        l.useEffect(() => {
            let e = eO && !ey,
                t = eO && ey && (null == c ? void 0 : c.id) !== ev;
            (e || t) &&
                (0, k.Dr)(p.M.ACTIVITY_GDM_CALL_TOOLTIP, {
                    dismissAction: e7.i.AUTO,
                });
        }, [null == c ? void 0 : c.id, ev, ey, eO]);
        let ex = (0, h.useHasAnyModalOpen)();
        return (0, r.jsx)(
            ti,
            tn(
                tt(
                    {
                        guildId: null == c ? void 0 : c.guild_id,
                        channelId: s,
                        channel: c,
                        channelName: es,
                        formattedChannelName: eo,
                        parentChannel: A,
                        voiceChannel: b,
                        layout: J,
                        needSubscriptionToAccess: O,
                        isLurking: Y,
                        hasModalOpen: ex,
                        section: et,
                        channelSidebarState: en,
                        guildSidebarState: el,
                        guild: y,
                        showCall: !O && K,
                        showActivityPanel: U,
                        showFramePanel: W,
                        channelIsContentGated: Z,
                        isMobile: (0, f.bG)(
                            [eF.A],
                            () =>
                                (null == c ? void 0 : c.type) === e1.rbe.DM && eF.A.isMobileOnline(c.getRecipientId()),
                            [c],
                        ),
                        isUnavailable: (0, f.bG)(
                            [eU.A],
                            () => (null == c ? void 0 : c.guild_id) != null && eU.A.isUnavailable(c.guild_id),
                            [c],
                        ),
                        showRealNameModal: $,
                        showWelcomeModal: !X && ee,
                        showFollowButton:
                            ((null == c ? void 0 : c.type) === e1.rbe.GUILD_ANNOUNCEMENT &&
                                (null == y ? void 0 : y.features.has(e1.GuildFeatures.NEWS))) ||
                            !1,
                    },
                    (0, f.cf)(
                        [ez.A],
                        () => ({
                            hasVideo: null != c && ez.A.hasVideo(c.id),
                        }),
                        [c],
                    ),
                ),
                {
                    inCall: ep,
                    selectedParticipant: Q,
                    showChannelSummaries: eA,
                    isFavorites: ei,
                    showHeaderGuildBreadcrumb: ei || ea,
                    premiumIndicatorEnabled: !1,
                    hasTextActivityInPanelMode: U,
                    embeddedActivity: L,
                },
            ),
        );
    });
