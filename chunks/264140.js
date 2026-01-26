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
    f = n(192308),
    g = n(397927),
    m = n(367513),
    b = n(442433);
n(183994);
var A = n(483270),
    y = n(738876),
    _ = n(456412),
    O = n(432371),
    j = n(475743),
    v = n(933958),
    x = n(156579),
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
    M = n(268218),
    L = n(726249),
    k = n(274146),
    G = n(826673),
    U = n(795766),
    B = n(713842),
    V = n(91242),
    F = n(857253),
    H = n(872363),
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
    es = n(467480),
    ea = n(788579),
    eo = n(744483),
    ec = n(889752),
    eu = n(376943),
    ed = n(857071),
    ep = n(394953),
    eh = n(187582),
    ef = n(164203),
    eg = n(976860),
    em = n(378570),
    eb = n(822382),
    eA = n(23179),
    ey = n(138298),
    e_ = n(940382),
    eO = n(323443),
    ej = n(566388),
    ev = n(168675),
    ex = n(170428),
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
    eM = n(709544),
    eL = n(761640),
    ek = n(734057),
    eG = n(31717),
    eU = n(919638),
    eB = n(71393),
    eV = n(290863),
    eF = n(383501),
    eH = n(309010),
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
    e9 = n(5867),
    e7 = n(806931),
    e2 = n(49999),
    e6 = n(165610),
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
let tr = (0, M.Fe)({
    createPromise: () => n.e("46875").then(n.bind(n, 625846)),
    webpackId: 625846,
    renderLoader: () =>
        (0, r.jsx)("div", {
            className: e4.wG,
            children: (0, r.jsx)(g.y$y, {}),
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
        let l = eW.default.getUser(t.getRecipientId());
        o()(null != l, "Missing user in Channel.openDMContextMenu"),
            (0, b.L3)(e, async () => {
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
                    ej.A,
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
        return (0, r.jsx)(x.A, {
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
                (0, r.jsx)(k.A, {
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
                    (0, g.mMO)(
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
                            onCloseCallback: () => K.A.viewPrompt(e3.X.REAL_NAME_PROMPT, t),
                            modalKey: "Guild Hub Real Name Modal",
                        },
                    ),
                i &&
                    (0, g.mMO)(
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
                case e_.PE.CREATE_THREAD:
                    if (null == t ? void 0 : t.isForumLikeChannel()) return null;
                    e = (0, r.jsx)(ev.A, {
                        parentChannelId: l.parentChannelId,
                        parentMessageId: l.parentMessageId,
                        location: l.location,
                    });
                    break;
                case e_.PE.VIEW_THREAD:
                    let n = (null == t ? void 0 : t.isForumLikeChannel()) ? B.A : eI.A;
                    e = (0, r.jsx)(n, {
                        channelId: l.channelId,
                    });
                    break;
                case e_.PE.VIEW_MOD_REPORT:
                    e = (0, r.jsx)(eI.A, {
                        channelId: l.channelId,
                        baseChannelId: l.baseChannelId,
                    });
                    break;
                case e_.PE.VIEW_CHANNEL:
                case e_.PE.VIEW_MESSAGE_REQUEST:
                default:
                    return null;
            }
        }
        if (null != i && null == e)
            if (i.type !== e_.QV.GUILD_MEMBER_MOD_VIEW) return null;
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
            c = s - e1.MdR - o;
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
        let f = a === e1.YvQ.SIDEBAR_CHAT,
            g = null != c && !f,
            m = !e.isForumLikeChannel() && !o,
            b = null == t ? void 0 : t.name;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(L.HI, {
                    location: b,
                    subsection: null != n ? n : void 0,
                }),
                (0, r.jsxs)("div", {
                    "data-has-border": e.type !== e1.rbe.GUILD_VOICE,
                    className: s()(e4.TE, {
                        [e4.js]: f || g,
                        [e4.jl]: f && p,
                    }),
                    children: [
                        m
                            ? (0, r.jsx)(y.A, {
                                  style: {
                                      right: f ? d : void 0,
                                  },
                                  className: e4.x4,
                                  channel: e,
                                  draftType: eG.C.ChannelMessage,
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
                return (null == e ? void 0 : e.type) !== e7.lp.STREAM
                    ? null
                    : (0, r.jsx)(
                          H.A,
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
                                    ei.A,
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
                                    ei.A,
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
                                (0, r.jsx)(ex.A, {
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
                                (0, O.pk)(e) &&
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
                            (0, O.pk)(e) &&
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
                          children: (0, r.jsx)(g.Button, {
                              variant: "secondary",
                              size: "sm",
                              text: e8.intl.string(e8.t["3aOv+h"]),
                              onClick: () =>
                                  (0, g.mMO)(async () => {
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
                let f = e.isDM() && !e.isSystemDM() ? this.openUserProfile : p ? () => (0, em.iN)(e.id) : void 0,
                    m =
                        (null == n ? void 0 : n.guild_id) != null && (null == n ? void 0 : n.id) != null
                            ? this.handleTitleParentClick
                            : void 0,
                    b = c || u,
                    A = a || b;
                return (0, r.jsxs)("div", {
                    className: e4.SC,
                    children: [
                        (0, r.jsx)(g.NPJ, {
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
                                                handleClick: f,
                                                handleParentClick: m,
                                                renderFollowButton: this.renderFollowButton,
                                            }),
                                            p
                                                ? (0, r.jsx)("div", {
                                                      className: e4.u8,
                                                      children: (0, r.jsx)(g.Button, {
                                                          onClick: () => (0, eg.uh)(e.guild_id, e.id),
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
                        (0, r.jsx)(ef.A, {
                            channelId: e.id,
                        }),
                    ],
                });
            });
    }
}
let ti = (0, _.A)(tl),
    ts = l.memo(function (e) {
        var t;
        let { providedChannel: n } = e,
            [i, s] = l.useState(null),
            a = (0, p.bG)([eH.A], () => eH.A.getChannelId()),
            o = (0, p.bG)([eH.A], () => eH.A.getVoiceChannelId()),
            c = (0, p.bG)([ek.A], () => (null != n ? n : ek.A.getChannel(a)), [a, n]),
            g = (0, p.bG)([ek.A], () => ek.A.getChannel(o), [o]),
            b = null == c ? void 0 : c.parent_id,
            A = (0, p.bG)([ek.A], () => ek.A.getChannel(b), [b]),
            y = (0, p.bG)([eB.A], () => eB.A.getGuild(null == c ? void 0 : c.guild_id), [c]),
            { needSubscriptionToAccess: _ } = (0, q.A)(null != (t = null == c ? void 0 : c.id) ? t : void 0),
            x = (0, p.bG)([T.A], () => {
                let e = null != a ? T.A.getParticipants(a) : [],
                    t = null != a ? T.A.getActivityParticipants(a) : [];
                return e.length - t.length > 0;
            }, [a]),
            I = (0, F.A)(),
            P = (0, p.bG)([eH.A], () => {
                var e;
                return (
                    (null != (e = null == I ? void 0 : I.channelId) ? e : eH.A.getVoiceChannelId()) ===
                    (null == c ? void 0 : c.id)
                );
            }),
            w = (0, p.bG)([v.Ay], () => (null != c ? v.Ay.getSelfEmbeddedActivityForChannel(c.id) : null), [c]),
            R = (0, p.bG)([eF.A], () => eF.A.isConnected()),
            D = (0, j.A)(R),
            M = R && !1 === D;
        l.useEffect(() => {
            P &&
                M &&
                null != w &&
                null != c &&
                m.A.selectParticipant(
                    c.id,
                    (0, N.Qt)({
                        applicationId: w.applicationId,
                        instanceId: w.compositeInstanceId,
                    }),
                );
        }, [M, c, P, w]);
        let L = (0, p.bG)([v.Ay], () => v.Ay.getCurrentEmbeddedActivity()),
            k = (0, p.bG)([v.Ay], () => v.Ay.getActivityPanelMode()),
            U = null != L && !(0, E.A)(null == c ? void 0 : c.id) && k === e9.Gd.PANEL,
            B = (0, p.bG)(
                [ez.A],
                () => null != c && c.isVocalThread() && !u().isEmpty(ez.A.getVoiceStatesForChannel(c.id)),
                [c],
            ),
            H = null != c && c.isPrivate() && !U && x,
            K = (null == c ? void 0 : c.isGuildVocal()) || H || B,
            W = (0, p.bG)([V.A], () => V.A.getFrameLayoutMode() === e6.y.FOCUSED),
            { welcomeModalChannelId: z } = (0, d.zy)(),
            Y = (0, p.bG)([ed.A], () => null != c && ed.A.isLurking(c.guild_id), [c]),
            X = (0, p.bG)([eD.A], () => eD.A.hasSeen(null == c ? void 0 : c.guild_id, Y), [c, Y]),
            J = (0, p.bG)(
                [T.A, v.Ay],
                () =>
                    null != v.Ay.getConnectedActivityLocation() && v.Ay.getActivityPanelMode() === e9.Gd.PANEL
                        ? v.Ay.getFocusedLayout() === e9.E8.NO_CHAT
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
            ee = (0, eM.A)(z, null == y ? void 0 : y.id),
            { section: et, channelSidebarState: en } = (0, p.cf)(
                [eL.Ay],
                () => ({
                    section: eL.Ay.getSection(a, null == c ? void 0 : c.isDM()),
                    channelSidebarState: eL.Ay.getSidebarState(a),
                }),
                [a, c],
            ),
            er = null == y ? void 0 : y.id,
            el = (0, p.bG)([eL.Ay], () => eL.Ay.getGuildSidebarState(er), [er]),
            ei = (0, p.bG)([eK.A], () => eK.A.getGuildId()) === e1.YYv,
            es = (0, ep.lI)(),
            ea = (0, eY.Ay)(c),
            eo = (0, eY.Ay)(c, !0),
            eh = null != c && o === c.id,
            ef = null != c && c.isGuildStageVoice();
        (0, C.A)({
            onTransition: void 0,
        }),
            l.useEffect(() => {
                var e, t, n, r;
                let l = (0, eg.JK)();
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
                null != i && null != e && ef && e.id === i && !t && ((0, eO.av)(e), s(null));
            }, [i, ef]);
        let eA = (0, O.cI)(c),
            ey = null != c && c.isPrivate(),
            e_ = (0, j.A)(ey),
            ej = (0, j.A)(null == c ? void 0 : c.id);
        l.useEffect(() => {
            let e = e_ && !ey,
                t = e_ && ey && (null == c ? void 0 : c.id) !== ej;
            (e || t) &&
                (0, G.Dr)(h.M.ACTIVITY_GDM_CALL_TOOLTIP, {
                    dismissAction: e2.i.AUTO,
                });
        }, [null == c ? void 0 : c.id, ej, ey, e_]);
        let ev = (0, f.useHasAnyModalOpen)();
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
                        voiceChannel: g,
                        layout: J,
                        needSubscriptionToAccess: _,
                        isLurking: Y,
                        hasModalOpen: ev,
                        section: et,
                        channelSidebarState: en,
                        guildSidebarState: el,
                        guild: y,
                        showCall: !_ && K,
                        showActivityPanel: U,
                        showFramePanel: W,
                        channelIsContentGated: Z,
                        isMobile: (0, p.bG)(
                            [eV.A],
                            () =>
                                (null == c ? void 0 : c.type) === e1.rbe.DM && eV.A.isMobileOnline(c.getRecipientId()),
                            [c],
                        ),
                        isUnavailable: (0, p.bG)(
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
                    (0, p.cf)(
                        [ez.A],
                        () => ({
                            hasVideo: null != c && ez.A.hasVideo(c.id),
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
                    embeddedActivity: L,
                },
            ),
        );
    });
