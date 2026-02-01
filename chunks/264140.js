n.d(t, {
    A: () => ts,
}),
    n(896048),
    n(321073);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(284009),
    o = n.n(a),
    c = n(735438),
    u = n.n(c),
    d = n(960488),
    p = n(311907),
    h = n(554146),
    g = n(192308),
    f = n(397927),
    m = n(367513),
    b = n(442433);
n(183994);
var A = n(483270),
    y = n(738876),
    O = n(456412),
    j = n(432371),
    x = n(475743),
    _ = n(933958),
    v = n(156579),
    E = n(108959),
    C = n(480720),
    S = n(323073),
    I = n(793574),
    N = n(568598),
    T = n(313961),
    P = n(164617),
    w = n(540462),
    R = n(355622),
    D = n(689874),
    L = n(268218),
    M = n(726249),
    G = n(274146),
    k = n(826673),
    U = n(795766),
    V = n(713842),
    B = n(91242),
    H = n(857253),
    F = n(872363),
    Y = n(211059),
    K = n(547015),
    W = n(561446),
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
    er = n(353428),
    el = n(402385),
    ei = n(95550),
    es = n(467480),
    ea = n(788579),
    eo = n(744483),
    ec = n(889752),
    eu = n(376943),
    ed = n(857071),
    ep = n(394953),
    eh = n(187582),
    eg = n(164203),
    ef = n(976860),
    em = n(378570),
    eb = n(822382),
    eA = n(23179),
    ey = n(138298),
    eO = n(940382),
    ej = n(323443),
    ex = n(566388),
    e_ = n(168675),
    ev = n(170428),
    eE = n(494208),
    eC = n(933057),
    eS = n(328808),
    eI = n(415586),
    eN = n(210714),
    eT = n(657331),
    eP = n(328776),
    ew = n(522556),
    eR = n(447696),
    eD = n(684407),
    eL = n(709544),
    eM = n(761640),
    eG = n(734057),
    ek = n(31717),
    eU = n(919638),
    eV = n(71393),
    eB = n(290863),
    eH = n(383501),
    eF = n(309010),
    eY = n(967198),
    eK = n(287809),
    eW = n(977997),
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
let tr = (0, L.Fe)({
    createPromise: () => n.e("46875").then(n.bind(n, 625846)),
    webpackId: 625846,
    renderLoader: () =>
        (0, r.jsx)("div", {
            className: e4.wG,
            children: (0, r.jsx)(f.y$y, {}),
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
            (0, b.L3)(e, async () => {
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
            (0, b.L3)(e, async () => {
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
        let l = eK.default.getUser(t.getRecipientId());
        o()(null != l, "Missing user in Channel.openDMContextMenu"),
            (0, b.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("97262"),
                    n.e("29534"),
                    n.e("93169"),
                    n.e("39778"),
                    n.e("54266"),
                ]).then(n.bind(n, 385913));
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
                    ex.A,
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
        return (0, r.jsx)(v.A, {
            maxHeight: n,
            renderExternalHeader: this.renderHeaderBar,
        });
    }
    renderChat() {
        let { channel: e, guild: t, needSubscriptionToAccess: n, channelIsContentGated: l, inCall: i } = this.props;
        if ((o()(null != e, "Missing channel in Channel.renderChat"), n))
            return (o()(null != t, "premium channels must exist within a guild"),
            null == e ? void 0 : e.isRoleSubscriptionTemplatePreviewChannel())
                ? (0, r.jsx)(q.A, {
                      guildId: t.id,
                  })
                : (0, r.jsx)(z.H, {
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
            eX.A,
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
            showCall: s,
            showActivityPanel: a,
            showFramePanel: c,
        } = this.props;
        if ((o()(null != e, "Missing channel in Channel.renderSidebar"), __OVERLAY__ || l));
        else if (i === e1.YvQ.PROFILE && e.isPrivate() && !s && !a && !c)
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
                        eh.A,
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
            isLurking: s,
            isUnavailable: a,
            showRealNameModal: o,
        } = this.props;
        return (
            null == e ||
                null == t ||
                a ||
                l ||
                (o &&
                    (0, f.mMO)(
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
                            onCloseCallback: () => Y.A.viewPrompt(e3.X.REAL_NAME_PROMPT, t),
                            modalKey: "Guild Hub Real Name Modal",
                        },
                    ),
                i &&
                    (0, f.mMO)(
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
                            onCloseCallback: () => (0, eR.ry)(t, s),
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
                width: s,
                channelIsContentGated: a,
            } = this.props;
        if (null == i && null == l) return null;
        if (n === e1.YvQ.SIDEBAR_CHAT && null != l) {
            if (a) return null;
            switch (l.type) {
                case eO.PE.CREATE_THREAD:
                    if (null == t ? void 0 : t.isForumLikeChannel()) return null;
                    e = (0, r.jsx)(e_.A, {
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
                    children: (0, r.jsx)(K.A, {
                        guildId: e,
                        userId: t,
                        moderatorReportId: n,
                        onClose: () => ey.A.closeGuildSidebar(e),
                    }),
                });
            }
        if (null == e) return null;
        let o = (null == t ? void 0 : t.type) != null && e1.kvI.GUILD_THREADS_ONLY.has(t.type) ? 528 : 450,
            c = s - e1.MdR - o;
        return (
            (c += 375),
            (0, r.jsx)(eq.A, {
                sidebarType:
                    (null == t ? void 0 : t.type) != null && e1.kvI.GUILD_THREADS_ONLY.has(t.type)
                        ? eq.X.PostSidebar
                        : eq.X.ThreadSidebar,
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
                section: a,
                hasModalOpen: o,
                guildSidebarState: c,
                hasTextActivityInPanelMode: u,
            } = this.props,
            { threadSidebarWidth: d, isThreadSidebarFloating: p } = this.state,
            h = this.shouldRenderCall();
        if (l) return (0, r.jsx)(eQ.A, {});
        if (null == e)
            return (0, r.jsx)(eZ.A, {
                channelId: this.props.channelId,
            });
        let g = a === e1.YvQ.SIDEBAR_CHAT,
            f = null != c && !g,
            m = !e.isForumLikeChannel() && !o,
            b = null == t ? void 0 : t.name;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(M.HI, {
                    location: b,
                    subsection: null != n ? n : void 0,
                }),
                (0, r.jsxs)("div", {
                    "data-has-border": e.type !== e1.rbe.GUILD_VOICE,
                    className: s()(e4.TE, {
                        [e4.js]: g || f,
                        [e4.jl]: g && p,
                    }),
                    children: [
                        m
                            ? (0, r.jsx)(y.A, {
                                  style: {
                                      right: g ? d : void 0,
                                  },
                                  className: e4.x4,
                                  channel: e,
                                  draftType: ek.C.ChannelMessage,
                              })
                            : null,
                        h || u ? null : this.renderHeaderBar(),
                        this.renderCall(),
                        this.renderEmbeddedActivityPanel(),
                        (0, r.jsxs)("div", {
                            className: s()(e4.Qs, {
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
                null != e && (0, em.iN)(e.id);
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
                    ? (0, r.jsx)(W.A, {
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
                return (null == e ? void 0 : e.type) !== e7.lp.STREAM
                    ? null
                    : (0, r.jsx)(
                          F.A,
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
                    showFramePanel: s,
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
                            a.push(
                                (0, r.jsx)(
                                    el.A,
                                    {
                                        channel: e,
                                    },
                                    "calls",
                                ),
                            ),
                            a.push(
                                (0, r.jsx)(
                                    $.A,
                                    {
                                        channel: e,
                                    },
                                    "pins",
                                ),
                            ),
                            a.push(
                                (0, r.jsx)(
                                    ei.Ay,
                                    {
                                        channel: e,
                                        tooltip: e8.intl.string(e8.t.Xjlbvs),
                                    },
                                    "invite",
                                ),
                            ),
                            a.push(
                                (0, r.jsx)(
                                    eo.A,
                                    {
                                        channel: e,
                                        showCallOrActivityPanel: l || i || s,
                                    },
                                    "profile",
                                ),
                            ),
                            a.push(
                                (0, r.jsx)(
                                    es.A,
                                    {
                                        channel: e,
                                    },
                                    "safety_tools",
                                ),
                            );
                        break;
                    case e1.rbe.GROUP_DM:
                        if (
                            (a.push(this.renderJoinRequestInterviewButtons()),
                            a.push(this.renderClipsEnabledIndicatorToolbarItem()),
                            a.push(this.renderStreamQualityLiveIndicatorToolbarItem()),
                            a.push(
                                (0, r.jsx)(
                                    el.A,
                                    {
                                        channel: e,
                                    },
                                    "calls",
                                ),
                            ),
                            a.push(
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
                            let t = e8.intl.string(e8.t.Xjlbvs);
                            a.push(
                                (0, r.jsx)(
                                    ei.Ay,
                                    {
                                        channel: e,
                                        tooltip: t,
                                    },
                                    "invite",
                                ),
                            );
                        }
                        a.push(
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
                            a.push(
                                (0, r.jsx)(ev.A, {
                                    channel: e,
                                }),
                            ),
                            null == t ||
                                t.isForumLikeChannel() ||
                                a.push(
                                    (0, r.jsx)(
                                        eE.A,
                                        {
                                            channel: t,
                                        },
                                        "browser",
                                    ),
                                ),
                            e.isVocalThread() &&
                                a.push(
                                    (0, r.jsx)(
                                        ea.A,
                                        {
                                            channel: e,
                                        },
                                        "thread-call",
                                    ),
                                ),
                            a.push(
                                (0, r.jsx)(
                                    eC.A,
                                    {
                                        channel: e,
                                    },
                                    "notifications",
                                ),
                            ),
                            a.push(
                                (0, r.jsx)(
                                    $.A,
                                    {
                                        channel: e,
                                    },
                                    "pins",
                                ),
                            ),
                            e.isArchivedThread() ||
                                a.push(
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
                                a.push(
                                    (0, r.jsx)(
                                        ee.A,
                                        {
                                            channel: e,
                                        },
                                        "summaries",
                                    ),
                                ),
                            a.push(
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
                        a.push(
                            (0, r.jsx)(
                                U.A,
                                {
                                    channel: e,
                                },
                                "favorites",
                            ),
                        ),
                            a.push(
                                (0, r.jsx)(
                                    eE.A,
                                    {
                                        channel: e,
                                    },
                                    "browser",
                                ),
                            ),
                            n ||
                                a.push(
                                    (0, r.jsx)(
                                        Z.A,
                                        {
                                            channel: e,
                                        },
                                        "notifications",
                                    ),
                                ),
                            a.push(
                                (0, r.jsx)(
                                    $.A,
                                    {
                                        channel: e,
                                    },
                                    "pins",
                                ),
                            ),
                            a.push(
                                (0, r.jsx)(
                                    Q.A,
                                    {
                                        channelId: e.id,
                                    },
                                    "members",
                                ),
                            ),
                            (0, j.pk)(e) &&
                                a.push(
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
                            (a.push(
                                (0, r.jsx)(
                                    et.A,
                                    {
                                        channel: e,
                                    },
                                    "forum-onboarding",
                                ),
                            ),
                            a.push(
                                (0, r.jsx)(
                                    Z.A,
                                    {
                                        channel: e,
                                    },
                                    "notifications",
                                ),
                            )),
                            __OVERLAY__ ||
                                a.push(
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
                        a.push(
                            (0, r.jsx)(
                                Q.A,
                                {
                                    channelId: e.id,
                                },
                                "members",
                            ),
                        );
                }
                return a;
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
                          children: (0, r.jsx)(f.Button, {
                              variant: "secondary",
                              size: "sm",
                              text: e8.intl.string(e8.t["3aOv+h"]),
                              onClick: () =>
                                  (0, f.mMO)(async () => {
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
                    showCall: a,
                    showActivityPanel: c,
                    showFramePanel: u,
                    hasVideo: d,
                    showHeaderGuildBreadcrumb: p,
                    isFavorites: h,
                } = this.props;
                o()(null != e, "Missing channel in Channel.renderHeaderBar"),
                    o()(null != t, "Should not be null if channel is not null.");
                let g = e.isDM() && !e.isSystemDM() ? this.openUserProfile : p ? () => (0, em.iN)(e.id) : void 0,
                    m =
                        (null == n ? void 0 : n.guild_id) != null && (null == n ? void 0 : n.id) != null
                            ? this.handleTitleParentClick
                            : void 0,
                    b = c || u,
                    A = a || b;
                return (0, r.jsxs)("div", {
                    className: e4.SC,
                    children: [
                        (0, r.jsx)(f.NPJ, {
                            theme: d && a ? e1.NJ8.DARK : void 0,
                            children: (a) =>
                                (0, r.jsxs)(
                                    en.A,
                                    {
                                        guildId: i,
                                        channelId: e.id,
                                        channelType: e.type,
                                        hideSearch: e.isDirectory() || (h && !(0, eb.Eq)()),
                                        showDivider: h && !(0, eb.Eq)(),
                                        toolbar: this.renderHeaderToolbar(),
                                        mobileToolbar: this.renderMobileToolbar(),
                                        className: s()(e4.DD, a, {
                                            [e4.zh]: e.type === e1.rbe.GROUP_DM,
                                        }),
                                        transparent: A,
                                        hidden: u,
                                        "aria-label": e8.intl.string(e8.t.BIYAqa),
                                        children: [
                                            p &&
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
                                                handleClick: g,
                                                handleParentClick: m,
                                                renderFollowButton: this.renderFollowButton,
                                            }),
                                            p
                                                ? (0, r.jsx)("div", {
                                                      className: e4.u8,
                                                      children: (0, r.jsx)(f.Button, {
                                                          onClick: () => (0, ef.uh)(e.guild_id, e.id),
                                                          variant: "secondary",
                                                          size: "sm",
                                                          text: e8.intl.string(e8.t.k5WiPf),
                                                      }),
                                                  })
                                                : (0, er.EP)(e, l),
                                        ],
                                    },
                                    "header-".concat(e.id),
                                ),
                        }),
                        (0, r.jsx)(eg.A, {
                            channelId: e.id,
                        }),
                    ],
                });
            });
    }
}
let ti = (0, O.A)(tl),
    ts = l.memo(function (e) {
        var t;
        let { providedChannel: n } = e,
            [i, s] = l.useState(null),
            a = (0, p.bG)([eF.A], () => eF.A.getChannelId()),
            o = (0, p.bG)([eF.A], () => eF.A.getVoiceChannelId()),
            c = (0, p.bG)([eG.A], () => (null != n ? n : eG.A.getChannel(a)), [a, n]),
            f = (0, p.bG)([eG.A], () => eG.A.getChannel(o), [o]),
            b = null == c ? void 0 : c.parent_id,
            A = (0, p.bG)([eG.A], () => eG.A.getChannel(b), [b]),
            y = (0, p.bG)([eV.A], () => eV.A.getGuild(null == c ? void 0 : c.guild_id), [c]),
            { needSubscriptionToAccess: O } = (0, X.A)(null != (t = null == c ? void 0 : c.id) ? t : void 0),
            v = (0, p.bG)([T.A], () => {
                let e = null != a ? T.A.getParticipants(a) : [],
                    t = null != a ? T.A.getActivityParticipants(a) : [];
                return e.length - t.length > 0;
            }, [a]),
            I = (0, H.A)(),
            P = (0, p.bG)([eF.A], () => {
                var e;
                return (
                    (null != (e = null == I ? void 0 : I.channelId) ? e : eF.A.getVoiceChannelId()) ===
                    (null == c ? void 0 : c.id)
                );
            }),
            w = (0, p.bG)([_.Ay], () => (null != c ? _.Ay.getSelfEmbeddedActivityForChannel(c.id) : null), [c]),
            R = (0, p.bG)([eH.A], () => eH.A.isConnected()),
            D = (0, x.A)(R),
            L = R && !1 === D;
        l.useEffect(() => {
            P &&
                L &&
                null != w &&
                null != c &&
                m.A.selectParticipant(
                    c.id,
                    (0, N.Qt)({
                        applicationId: w.applicationId,
                        instanceId: w.compositeInstanceId,
                    }),
                );
        }, [L, c, P, w]);
        let M = (0, p.bG)([_.Ay], () => _.Ay.getCurrentEmbeddedActivity()),
            G = (0, p.bG)([_.Ay], () => _.Ay.getActivityPanelMode()),
            U = null != M && !(0, E.A)(null == c ? void 0 : c.id) && G === e9.Gd.PANEL,
            V = (0, p.bG)(
                [eW.A],
                () => null != c && c.isVocalThread() && !u().isEmpty(eW.A.getVoiceStatesForChannel(c.id)),
                [c],
            ),
            F = null != c && c.isPrivate() && !U && v,
            Y = (null == c ? void 0 : c.isGuildVocal()) || F || V,
            K = (0, p.bG)([B.A], () => B.A.getFrameLayoutMode() === e2.y.FOCUSED),
            { welcomeModalChannelId: W } = (0, d.zy)(),
            z = (0, p.bG)([ed.A], () => null != c && ed.A.isLurking(c.guild_id), [c]),
            q = (0, p.bG)([eD.A], () => eD.A.hasSeen(null == c ? void 0 : c.guild_id, z), [c, z]),
            J = (0, p.bG)(
                [T.A, _.Ay],
                () =>
                    null != _.Ay.getConnectedActivityLocation() && _.Ay.getActivityPanelMode() === e9.Gd.PANEL
                        ? _.Ay.getFocusedLayout() === e9.E8.NO_CHAT
                            ? e1.DUB.NO_CHAT
                            : e1.DUB.NORMAL
                        : null != a
                          ? T.A.getLayout(a)
                          : e1.DUB.NORMAL,
                [a],
            ),
            Q = (0, p.bG)([T.A], () => (null != c ? T.A.getSelectedParticipant(c.id) : null)),
            Z = (0, S.vL)(c),
            $ = (0, ec.A)(null == y ? void 0 : y.id),
            ee = (0, eL.A)(W, null == y ? void 0 : y.id),
            { section: et, channelSidebarState: en } = (0, p.cf)(
                [eM.Ay],
                () => ({
                    section: eM.Ay.getSection(a, null == c ? void 0 : c.isDM()),
                    channelSidebarState: eM.Ay.getSidebarState(a),
                }),
                [a, c],
            ),
            er = null == y ? void 0 : y.id,
            el = (0, p.bG)([eM.Ay], () => eM.Ay.getGuildSidebarState(er), [er]),
            ei = (0, p.bG)([eY.A], () => eY.A.getGuildId()) === e1.YYv,
            es = (0, ep.lI)(),
            ea = (0, ez.Ay)(c),
            eo = (0, ez.Ay)(c, !0),
            eh = null != c && o === c.id,
            eg = null != c && c.isGuildStageVoice();
        (0, C.A)({
            onTransition: void 0,
        }),
            l.useEffect(() => {
                var e, t, n, r;
                let l = (0, ef.JK)();
                if (
                    (null == l || null == (t = l.location) || null == (e = t.state) ? void 0 : e.stageInviteKey) ===
                    e5.J2
                ) {
                    let { channelId: e } =
                        null != (n = (0, eu.vu)(null == l || null == (r = l.location) ? void 0 : r.pathname)) ? n : {};
                    null != e && s(e);
                }
            }, []);
        let em = {
                channel: c,
                inCurrentVoiceChannel: eh,
            },
            eb = l.useRef(em);
        l.useEffect(() => {
            eb.current = em;
        }),
            l.useEffect(() => {
                let { channel: e, inCurrentVoiceChannel: t } = eb.current;
                null != i && null != e && eg && e.id === i && !t && ((0, ej.av)(e), s(null));
            }, [i, eg]);
        let eA = (0, j.cI)(c),
            ey = null != c && c.isPrivate(),
            eO = (0, x.A)(ey),
            ex = (0, x.A)(null == c ? void 0 : c.id);
        l.useEffect(() => {
            let e = eO && !ey,
                t = eO && ey && (null == c ? void 0 : c.id) !== ex;
            (e || t) &&
                (0, k.Dr)(h.M.ACTIVITY_GDM_CALL_TOOLTIP, {
                    dismissAction: e6.i.AUTO,
                });
        }, [null == c ? void 0 : c.id, ex, ey, eO]);
        let e_ = (0, g.useHasAnyModalOpen)();
        return (0, r.jsx)(
            ti,
            tn(
                tt(
                    {
                        guildId: null == c ? void 0 : c.guild_id,
                        channelId: a,
                        channel: c,
                        channelName: ea,
                        formattedChannelName: eo,
                        parentChannel: A,
                        voiceChannel: f,
                        layout: J,
                        needSubscriptionToAccess: O,
                        isLurking: z,
                        hasModalOpen: e_,
                        section: et,
                        channelSidebarState: en,
                        guildSidebarState: el,
                        guild: y,
                        showCall: !O && Y,
                        showActivityPanel: U,
                        showFramePanel: K,
                        channelIsContentGated: Z,
                        isMobile: (0, p.bG)(
                            [eB.A],
                            () =>
                                (null == c ? void 0 : c.type) === e1.rbe.DM && eB.A.isMobileOnline(c.getRecipientId()),
                            [c],
                        ),
                        isUnavailable: (0, p.bG)(
                            [eU.A],
                            () => (null == c ? void 0 : c.guild_id) != null && eU.A.isUnavailable(c.guild_id),
                            [c],
                        ),
                        showRealNameModal: $,
                        showWelcomeModal: !q && ee,
                        showFollowButton:
                            ((null == c ? void 0 : c.type) === e1.rbe.GUILD_ANNOUNCEMENT &&
                                (null == y ? void 0 : y.features.has(e1.GuildFeatures.NEWS))) ||
                            !1,
                    },
                    (0, p.cf)(
                        [eW.A],
                        () => ({
                            hasVideo: null != c && eW.A.hasVideo(c.id),
                        }),
                        [c],
                    ),
                ),
                {
                    inCall: eh,
                    selectedParticipant: Q,
                    showChannelSummaries: eA,
                    isFavorites: ei,
                    showHeaderGuildBreadcrumb: ei || es,
                    premiumIndicatorEnabled: !1,
                    hasTextActivityInPanelMode: U,
                    embeddedActivity: M,
                },
            ),
        );
    });
