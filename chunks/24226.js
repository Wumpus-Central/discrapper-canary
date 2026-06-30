n.r(t), n.d(t, { default: () => n$ });
var s,
    l,
    a,
    i = n(627968),
    r = n(64700),
    d = n(503698),
    o = n.n(d),
    c = n(484030),
    u = n(873298),
    h = n(305866),
    g = n(707554),
    m = n(251333),
    A = n(17928),
    f = n(815021),
    p = n(935063),
    E = n(378939),
    x = n(964486),
    S = n(475743),
    C = n(323073),
    N = n(202803),
    y = n(636922),
    j = n(835835),
    I = n(910425),
    _ = n(885386),
    R = n(734057),
    M = n(517019),
    v = n(309010),
    L = n(135978),
    O = n(939249),
    b = n(289873),
    D = n(834730),
    T = n(375708),
    k = n(373423);
function U(e) {
    let { className: t, onJump: n } = e,
        [s, l] = r.useState(!1);
    return (0, i.jsx)(O.D, {
        className: o()(k.n, t),
        onClick: function (e) {
            l(!0), n(e);
        },
        children: s
            ? (0, i.jsx)(b.y, { type: b.y.Type.PULSING_ELLIPSIS })
            : (0, i.jsx)(D.E, { variant: "text-xs/medium", className: k.Q, children: T.intl.string(T.t.k5WiPf) }),
    });
}
var F = n(837381),
    G = n(661531),
    w = n(990078),
    H = n(187322),
    P = n(534514),
    K = n(812993),
    B = n(397244),
    J = n(714114),
    X = n(394871),
    z = n(95561),
    V = n(571694),
    Y = n(47167),
    $ = n(713654),
    q = n(915089),
    Z = n(548118),
    Q = n(616356),
    W = n(71393),
    ee = n(290863),
    et = n(568548),
    en = n(287809),
    es = n(147925),
    el = n(652215),
    ea = n(110357);
let ei = { top: 8, bottom: 8, left: -4, right: -4 };
function er(e) {
    let { channelState: t, toggle: n, getNumUnreadChannels: s } = e;
    return (0, i.jsx)(w.m, {
        text: T.intl.string(T.t.iTcuma),
        children: (0, i.jsx)(O.D, {
            className: o()(ea.cS, { [ea.yZ]: t?.collapsed }),
            onClick: function () {
                null != t &&
                    null != n &&
                    (n(t),
                    (0, z.zV)(el.HAw.INBOX_CHANNEL_COLLAPSED, {
                        channel_id: t.channelId,
                        guild_id: t.guildId,
                        num_unread_channels_remaining: s?.() ?? 0,
                        is_now_collapsed: !t.collapsed,
                    }));
            },
            children: (0, i.jsx)(es.A, { width: 16, height: 16 }),
        }),
    });
}
function ed(e) {
    let {
            channel: t,
            children: n,
            gotoChannel: s,
            mentionCount: l,
            channelState: a,
            toggleCollapsed: r,
            showCollapseButton: d = !1,
            getNumUnreadChannels: o,
        } = e,
        c = (0, F.rm)(`recents-header-${t.id}-${(0, q.GV)()}`),
        u = d && !t.isNSFW() && null != a && "nsfw" !== a.type;
    return (0, i.jsx)(H.vN, {
        offset: ei,
        children: (0, i.jsxs)("div", {
            className: ea.ZO,
            ...c,
            tabIndex: 0,
            "data-recents-channel": t.id,
            onKeyDown: function (e) {
                if (("Enter" === e.key || " " === e.key) && e.target === e.currentTarget) {
                    e.preventDefault(), s(e);
                    return;
                }
                null != r &&
                    null != a &&
                    (("ArrowRight" === e.key && a.collapsed) || ("ArrowLeft" === e.key && !a.collapsed)) &&
                    r?.(a);
            },
            children: [
                u && null != a ? (0, i.jsx)(er, { channelState: a, toggle: r, getNumUnreadChannels: o }) : null,
                (0, i.jsx)(eo, { channel: t, gotoChannel: s }),
                (0, i.jsx)(eh, { channel: t, gotoChannel: s, mentionCount: l }),
                n,
            ],
        }),
    });
}
function eo(e) {
    let { channel: t, gotoChannel: n } = e;
    return t.isPrivate()
        ? (0, i.jsx)(ec, { channel: t, gotoChannel: n })
        : (0, i.jsx)(eu, { channel: t, gotoChannel: n });
}
function ec(e) {
    let { channel: t, gotoChannel: n } = e,
        s = (0, A.bG)([en.default], () => (t.isDM() ? en.default.getUser(t.getRecipientId()) : null)),
        l = null == s ? (0, V.Y)(t) : s.getAvatarURL(void 0, 40);
    return (0, i.jsx)(O.D, {
        onClick: n,
        tabIndex: -1,
        children: (0, i.jsx)("img", { className: ea.ro, src: l, alt: "", "aria-hidden": !0 }),
    });
}
function eu(e) {
    let { channel: t, gotoChannel: n } = e,
        s = (0, A.bG)([W.A], () => W.A.getGuild(t.guild_id));
    return null == s
        ? null
        : (0, i.jsx)(Z.Ay, {
              "aria-hidden": !0,
              className: ea.$f,
              guild: s,
              size: Z.Ay.Sizes.MEDIUM,
              active: !0,
              onClick: n,
              tabIndex: -1,
          });
}
function eh(e) {
    let { channel: t, gotoChannel: n, mentionCount: s } = e,
        l = (0, A.bG)([W.A], () => W.A.getGuild(t.guild_id)),
        a = (0, A.bG)([R.A], () => R.A.getChannel(t.parent_id)),
        r = (0, A.bG)([et.Ay], () => et.Ay.getIsMentionLowImportance(t.id)),
        d = (0, $.gU)(t, l),
        c = (0, Y.Ay)(t, !1),
        u = (0, Y.Ay)(a),
        h = null == a ? l?.name : `${l?.name} \u{203A} ${u}`,
        g = t.isMultiUserDM()
            ? T.intl.formatToPlainString(T.t.CxSA5N, { members: t.recipients.length + 1 })
            : t.isPrivate()
              ? (0, i.jsx)(eg, { channel: t })
              : (0, i.jsx)(O.D, { className: o()(ea.W$, ea.J5), onClick: n, children: h });
    return (0, i.jsxs)("div", {
        className: ea.yP,
        children: [
            (0, i.jsx)(P.D, {
                variant: "heading-md/semibold",
                className: ea.un,
                children: (0, i.jsxs)(O.D, {
                    className: ea.HA,
                    onClick: n,
                    children: [
                        t.isThread() || t.isGroupDM() || null == d
                            ? null
                            : (0, i.jsx)(d, {
                                  className: t.isForumLikeChannel() ? ea.dj : void 0,
                                  width: 18,
                                  height: 18,
                                  size: "custom",
                                  color: "currentColor",
                              }),
                        (0, i.jsx)("span", { className: ea.je, children: c }),
                        null != s && s > 0
                            ? (0, i.jsx)("div", {
                                  className: ea.qS,
                                  children: (0, i.jsx)(K.hV, {
                                      count: s,
                                      color: r
                                          ? G.A.colors.BACKGROUND_MOD_STRONG.css
                                          : G.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
                                  }),
                              })
                            : null,
                    ],
                }),
            }),
            (0, i.jsx)(D.E, { color: "text-default", variant: "text-xs/normal", className: ea.PL, children: g }),
        ],
    });
}
function eg(e) {
    let { channel: t } = e,
        {
            user: n,
            status: s,
            activities: l,
            applicationStream: a,
        } = (0, A.cf)([en.default, ee.A, Q.A], () => {
            let e = en.default.getUser(t.getRecipientId());
            return {
                user: e,
                status: null != e ? ee.A.getStatus(e.id) : null,
                activities: null != e ? ee.A.getActivities(e.id) : null,
                applicationStream: null != e ? Q.A.getAnyStreamForUser(e.id) : null,
            };
        }),
        { voiceChannel: r } = (0, J.Ay)({ userId: n?.id });
    return (0, B.A)({ activities: l, status: s, applicationStream: a, voiceChannel: r })
        ? (0, i.jsx)(X.A, { user: n, activities: l, applicationStream: a, voiceChannel: r, hideTooltip: !0 })
        : null;
}
var em = n(303727),
    eA = n(711917);
function ef(e) {
    let { Icon: t, header: n, tip: s, disableStars: l } = e;
    return (0, i.jsxs)("div", {
        className: eA.kL,
        children: [
            (0, i.jsxs)("div", {
                className: eA.zc,
                children: [
                    (0, i.jsx)(t, { color: "currentColor", size: "custom", className: eA.Kk, width: 36, height: 36 }),
                    l ? null : (0, i.jsx)(em.A, { className: eA.uf }),
                ],
            }),
            (0, i.jsx)(P.D, { className: eA.wx, variant: "heading-xl/semibold", children: n }),
            (0, i.jsxs)(D.E, {
                color: "text-default",
                variant: "text-xs/normal",
                children: [
                    l
                        ? null
                        : (0, i.jsxs)(D.E, {
                              tag: "span",
                              className: eA.PP,
                              variant: "text-xs/bold",
                              color: "text-feedback-positive",
                              children: [T.intl.string(T.t["8tvIiN"]), ":", " "],
                          }),
                    s,
                ],
            }),
        ],
    });
}
var ep = n(575863);
let eE = { offset: { left: 4, right: -12 } };
function ex(e, t, n) {
    let s = t ? L.Ay.guildFilter : null,
        l = t ? L.Ay.roleFilter : null,
        a = t ? L.Ay.everyoneFilter : null,
        i = null;
    null != e && null != s && (i = s === el.KE7.ALL_SERVERS ? null : e.getGuildId()),
        E.A.fetchRecentMentions({ before: n, limit: el.Ue3, guildId: i, roles: l, everyone: a });
}
function eS(e) {
    let { onJump: t } = e,
        n = (0, A.bG)([R.A, v.A], () => R.A.getChannel(v.A.getChannelId())),
        {
            messages: s,
            hasMore: l,
            loading: a,
            guildFilter: d,
            roleFilter: c,
            everyoneFilter: u,
        } = (0, A.cf)([L.Ay], () => ({
            messages: L.Ay.getMentions(),
            hasMore: L.Ay.hasMore,
            loading: L.Ay.loading,
            guildFilter: L.Ay.guildFilter,
            roleFilter: L.Ay.roleFilter,
            everyoneFilter: L.Ay.everyoneFilter,
        })),
        h = (0, I.Sc)(),
        g = (0, S.A)(d),
        m = (0, S.A)(c),
        f = (0, S.A)(u);
    r.useEffect(() => {
        L.Ay.hasLoadedEver
            ? ((null != g && d !== g) || (null != m && c !== m) || (null != f && u !== f)) && ex(n, !0)
            : ex(n, !0);
    }, [g, d, m, c, f, u, n, !0]),
        (0, x.Ay)(() => {
            s?.some(N.$r) && (E.A.clearMentions(), ex(n, !0));
        }),
        r.useEffect(
            () => () => {
                E.A.truncateMentions(el.Ue3);
            },
            [],
        );
    let p = r.useCallback(() => null, []);
    return (0, i.jsx)(j.Ay, {
        className: o()(ep.sH, { [ep.qC]: h }),
        scrollerClassName: ep.XG,
        onFetch: () => null,
        onJump: t,
        onCloseMessage: function (e) {
            E.A.deleteRecentMention(e.id);
        },
        channel: n,
        messages: s,
        loading: a,
        hasMore: l,
        analyticsName: "Recent Mentions",
        loadMore: function () {
            ex(n, !0, null != s && s.length > 0 ? s[s.length - 1].id : null);
        },
        canCloseAllMessages: !0,
        renderHeader: p,
        renderEmptyState: ey,
        renderMessage: eC,
        "aria-label": T.intl.string(T.t.jbV6MM),
        listName: "recents",
    });
}
function eC(e, t) {
    return [(0, i.jsx)(eN, { message: e, gotoMessage: t, dismissible: !0 }, e.id)];
}
function eN(e) {
    let { message: t, gotoMessage: n, dismissible: s } = e;
    if (null == t) return null;
    let l = R.A.getChannel(t.channel_id);
    if (null == l || (0, C.Jm)(l) || (0, C.$v)(l)) return null;
    let a = M.A.didAgree(l.getGuildId()),
        r = !!(0, C.Gc)(l) && !a;
    return (0, i.jsxs)("div", {
        className: ep.kL,
        children: [
            (0, i.jsx)(ed, {
                channel: l,
                gotoChannel: n,
                children:
                    null != s ? (0, i.jsx)(f.J, { size: "sm", onClick: () => E.A.deleteRecentMention(t.id) }) : null,
            }),
            (0, i.jsxs)("div", {
                className: ep.zC,
                children: [
                    (0, i.jsx)(U, { className: ep.QT, onJump: n }),
                    (0, i.jsx)(
                        y.A,
                        {
                            message: t,
                            channel: l,
                            className: ep.iU,
                            hideAccessories: r,
                            compact: _.hH.getSetting(),
                            animateAvatar: !1,
                            focusProps: eE,
                            trackAnnouncementViews: !0,
                        },
                        t.id,
                    ),
                ],
            }),
        ],
    });
}
function ey() {
    return (0, i.jsx)(ef, { Icon: p.X, header: T.intl.string(T.t.bgDz74), tip: T.intl.string(T.t.NS15vk) });
}
var ej = n(702841),
    eI = n(912592),
    e_ = n(890856),
    eR = n(761508),
    eM = n(966597),
    ev = n(85109),
    eL = n(214947),
    eO = n(711950),
    eb = n(322387),
    eD = n(912309),
    eT = n(174459),
    ek = n(134314);
function eU(e) {
    let { closePopout: t } = e,
        n = (0, eD.kX)();
    return (0, i.jsx)(w.m, {
        asContainer: !0,
        text: T.intl.string(T.t["lMR96+"]),
        children: (0, i.jsxs)(O.D, {
            "aria-label": `${T.intl.string(T.t["lMR96+"])}, ${n}`,
            className: ek.b,
            onClick: () => {
                eT.default.track(el.HAw.NOTIFICATION_CENTER_ACTION, {
                    action_type: eb.e1.FRIEND_REQUESTS_BUTTON_CLICK,
                }),
                    eO.A.transitionToSection(el.m3P.PENDING, { explicit: !0 }),
                    t();
            },
            children: [
                (0, i.jsx)(eL.$, { size: "xs", color: "currentColor" }),
                (0, i.jsx)(K.hV, { count: n, color: G.A.colors.BACKGROUND_MOD_STRONG.css }),
            ],
        }),
    });
}
var eF = n(980707),
    eG = n(477782),
    ew = n(922016),
    eH = n(408278),
    eP = n(783977);
function eK(e) {
    let { closePopout: t, onSelect: n } = e,
        s = (0, A.bG)([R.A, v.A], () => R.A.getChannel(v.A.getChannelId())),
        {
            everyoneFilter: l,
            roleFilter: a,
            guildFilter: r,
        } = (0, A.cf)([L.Ay], () => {
            let { everyoneFilter: e, roleFilter: t, guildFilter: n } = L.Ay;
            return { everyoneFilter: e, roleFilter: t, guildFilter: n };
        });
    return (0, i.jsxs)(eF.W, {
        "data-menu-migrated-auto": !0,
        navId: "mentions-filter",
        "aria-label": T.intl.string(T.t.pEasFX),
        onClose: t,
        onSelect: n,
        children: [
            (0, i.jsx)(eG.sL, {
                id: "Everyone",
                label: T.intl.string(T.t.cdyUsV),
                action: function () {
                    E.A.setGuildFilter({ everyoneFilter: !l });
                },
                checked: l,
            }),
            (0, i.jsx)(eG.sL, {
                id: "Roles",
                label: T.intl.string(T.t.lZejCq),
                action: function () {
                    E.A.setGuildFilter({ roleFilter: !a });
                },
                checked: a,
            }),
            null == s || s.isPrivate()
                ? null
                : (0, i.jsx)(eG.sL, {
                      id: "All Servers",
                      label: T.intl.string(T.t.GWMA6s),
                      action: function () {
                          E.A.setGuildFilter({
                              guildFilter: r === el.KE7.THIS_SERVER ? el.KE7.ALL_SERVERS : el.KE7.THIS_SERVER,
                          });
                      },
                      checked: r === el.KE7.ALL_SERVERS,
                  }),
        ],
    });
}
function eB() {
    let e = r.useRef(null);
    return (0, i.jsx)(ew.Y, {
        targetElementRef: e,
        align: "right",
        animation: ew.Y.Animation.NONE,
        position: "bottom",
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(eK, { closePopout: t });
        },
        children: (t) => {
            let { onClick: n } = t;
            return (0, i.jsx)(w.m, {
                text: T.intl.string(T.t.pEasFX),
                targetElementRef: e,
                children: (0, i.jsx)(eH.K, {
                    size: "sm",
                    variant: "secondary",
                    "aria-label": T.intl.string(T.t.pEasFX),
                    icon: eP.R,
                    onClick: n,
                }),
            });
        },
    });
}
var eJ = n(481613),
    eX = n.n(eJ),
    ez = n(621466),
    eV = n(689175),
    eY = n(821609),
    e$ = n(192308),
    eq = n(228366),
    eZ = n(775602),
    eQ = n(928039),
    eW = n(625494),
    e0 = n(723702),
    e1 = n(862482),
    e3 = n(143838),
    e2 = n(640238);
function e7(e) {
    let { onClick: t } = e,
        [n, s] = r.useState(!1);
    function l() {
        t(),
            eT.default.track(el.HAw.INBOX_CHANNEL_ACKED, {
                marked_all_channels_as_read: !0,
                num_unread_channels_remaining: 0,
            });
    }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            n ? (0, i.jsx)(e8, { confirm: l, cancel: () => s(!1) }) : null,
            (0, i.jsx)(w.m, {
                text: T.intl.string(T.t["8k+6QY"]),
                children: (0, i.jsx)(eH.K, {
                    variant: "secondary",
                    "aria-label": T.intl.string(T.t["8k+6QY"]),
                    size: "sm",
                    icon: e3.i,
                    onClick: function (e) {
                        e.shiftKey ? l() : s(!0);
                    },
                }),
            }),
        ],
    });
}
function e8(e) {
    let { cancel: t, confirm: n } = e;
    return (0, i.jsx)(e2.M, {
        dismissable: !0,
        header: T.intl.string(T.t.h4bVZ2),
        confirmText: T.intl.string(T.t.e6RscS),
        cancelText: T.intl.string(T.t["ETE/oC"]),
        confirmButtonColor: e1.$n.Colors.BRAND,
        onCancel: t,
        onConfirm: n,
        children: (0, i.jsx)(D.E, {
            color: "text-default",
            variant: "text-sm/normal",
            children: T.intl.string(T.t["0MQ0Bf"]),
        }),
    });
}
n(321073);
var e6 = n(735438),
    e4 = n.n(e6),
    e5 = n(749314),
    e9 = n(308186),
    te = n(311283),
    tt = n(717421),
    tn = n(825484),
    ts = n(933832),
    tl = n(334738),
    ta = n(976860),
    ti = n(782603),
    tr = n(461678),
    td = n(914703);
function to(e) {
    let { channel: t } = e,
        n = r.useRef(null);
    return (0, i.jsx)(ew.Y, {
        targetElementRef: n,
        align: "right",
        animation: ew.Y.Animation.NONE,
        position: "bottom",
        renderPopout: (e) =>
            t.isThread()
                ? (0, i.jsx)(td.A, {
                      ...e,
                      channel: t,
                      navId: "recents-thread-notifications",
                      label: T.intl.string(T.t.ljs3Oe),
                  })
                : (0, i.jsx)(tr.A, {
                      ...e,
                      channel: t,
                      navId: "recents-notifications",
                      label: T.intl.string(T.t.ljs3Oe),
                      location: { section: el.JJy.INBOX },
                      includeGuildMute: !0,
                  }),
        children: (e) => {
            let { onClick: t } = e;
            return (0, i.jsx)(w.m, {
                text: T.intl.string(T.t.h850Ss),
                targetElementRef: n,
                children: (0, i.jsx)(eH.K, {
                    "aria-label": T.intl.string(T.t.h850Ss),
                    icon: ti.X,
                    variant: "secondary",
                    size: "sm",
                    onClick: t,
                }),
            });
        },
    });
}
var tc = n(350527),
    tu = n(218152),
    th = n(970278),
    tg = n(747926),
    tm = n(403362),
    tA = n(935208),
    tf = n(37411),
    tp = n(791641);
function tE(e) {
    let { channel: t, channelRecord: n, deleteChannel: s } = e,
        l = (0, A.yK)(
            [th.A, R.A],
            () =>
                e4()(th.A.getThreadsForParent(n.guild_id, n.id))
                    .values()
                    .filter((e) => {
                        let { id: n } = e;
                        return tA.default.compare(n, t.oldestReadMessageId) > 0;
                    })
                    .map((e) => {
                        let { id: t } = e;
                        return R.A.getChannel(t);
                    })
                    .filter(tm.Vq)
                    .sort((e, t) => tA.default.compare(e.id, t.id))
                    .value(),
            [t.oldestReadMessageId, n.guild_id, n.id],
        ),
        a = r.useCallback((e, t) => {
            (0, tg.JA)(e, t, tf.H9.INBOX);
        }, []);
    return (
        r.useEffect(() => {
            null == n ||
                !t.isFullyLoaded ||
                t.hasError ||
                t.collapsed ||
                0 !== l.length ||
                eq.h.wait(() => {
                    (0, tl.ack)(
                        t.channelId,
                        {
                            section: el.JJy.INBOX,
                            object: el.ZSU.ACK_INBOX_FORUM_NO_POSTS,
                            objectType: el.AnalyticsObjectTypes.ACK_AUTOMATIC,
                        },
                        !0,
                    ),
                        s(t.channelId);
                });
        }),
        (0, i.jsx)("div", {
            className: tp.k,
            children: l.map((e) =>
                (0, i.jsx)(
                    tu.Cp,
                    { channel: n, children: (0, i.jsx)(tc.Ay, { className: tp.u, threadId: e.id, goToThread: a }) },
                    e.id,
                ),
            ),
        })
    );
}
var tx = n(989349),
    tS = n.n(tx),
    tC = n(123292),
    tN = n(559149),
    ty = n(857069),
    tj = n(694318),
    tI = n(789645),
    t_ = n(33358),
    tR = n(384231),
    tM = n(207133),
    tv = n(704413),
    tL = n(9842),
    tO = n(994500),
    tb = n(5095),
    tD = n(320095),
    tT = n(143413),
    tk = n(763754),
    tU = n(467073),
    tF = n(491182),
    tG = n(860227),
    tw = n(144241),
    tH = n(375199),
    tP = n(824556),
    tK = n(715628),
    tB = n(752636),
    tJ = n(352043),
    tX = n(268719),
    tz = n(234957),
    tV = n(888675),
    tY = n(21623),
    t$ = n(701628);
let tq = r.memo(function e(t) {
    let n,
        {
            channel: s,
            message: l,
            compact: a = !1,
            className: r,
            onContextMenu: d,
            onClick: c,
            disableInteraction: u = !1,
            hasThread: h,
            treatSpam: g,
        } = t,
        m = el.sl8.has(l.type) ? l.messageReference : void 0,
        f = (0, A.bG)([tL.A], () => tL.A.getMessageByReference(m)),
        p = (0, A.bG)([R.A], () =>
            l.type === el.lAJ.THREAD_STARTER_MESSAGE && f.state === tL.a.LOADED
                ? R.A.getChannel(f.message.channel_id)
                : null,
        ),
        E = _.X6.useSetting(),
        x = _.hD.useSetting(),
        S = _.rs.useSetting(),
        C = _.kt.useSetting(),
        N = (0, tR.S)((l.editedTimestamp ?? l.timestamp).valueOf()),
        y = (0, tM.A)(s?.id),
        { disableReactionCreates: j } = (0, tU.A)(s),
        {
            content: I,
            hasSpoilerEmbeds: M,
            hasBailedAst: v,
        } = (0, tH.A)(l, {
            hideSimpleEmbedContent: x && S,
            allowList: N,
            allowHeading: N,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        L = (0, tk.Ay)(l),
        O = (0, A.bG)(
            [R.A],
            () => l.hasFlag(el.pr7.HAS_THREAD) && R.A.getChannel(tA.default.castMessageIdAsChannelId(l.id)),
        ),
        b = l.type === el.lAJ.THREAD_STARTER_MESSAGE && f.state === tL.a.LOADED && null != p,
        D = !b && void 0 === n,
        k = (0, tP.A)({ message: l, channel: s, announcementEnabled: D }),
        U = (0, t_.P)(l),
        F = (0, tb._f)(l.id, l.channel_id),
        G = (0, tv.A)(l),
        w = (0, tG.fF)(l);
    return b
        ? (0, i.jsx)(e, { ...t, message: f.message, channel: p, hasThread: !1 })
        : (tO.A.isBlockedForMessage(l)
                ? (n = T.t["+FcYM/"])
                : tO.A.isIgnoredForMessage(l)
                  ? (n = T.t["VFWjc+"])
                  : (0, tj.kf)(l) && g && (n = T.t.xfkfTK),
            void 0 !== n)
          ? (0, i.jsx)(tZ, { className: r, compact: a, count: 1, collapsedReason: n })
          : (0, i.jsx)(tF.A, {
                compact: a,
                className: o()(r, { [t$.M1]: (0, tD.ec)(l), [t$.XN]: u, [t$._A]: t.isGroupStart }),
                childrenRepliedMessage: (0, tz.A)(l, s, m, f, a),
                childrenHeader: (0, tB.A)({ ...t, author: L, guildId: s.guild_id }),
                childrenAccessories: (0, i.jsx)(tw.iV, {
                    channel: s,
                    message: l,
                    hasSpoilerEmbeds: M,
                    hasBailedAst: v,
                    compact: a,
                    canSuppressEmbeds: !1,
                    canDeleteAttachments: !1,
                    disableReactionReads: !1,
                    disableReactionCreates: j,
                    disableComponentInteractivity: !0,
                    disableReactionUpdates: !1,
                    renderThreadAccessory: h,
                    inlineAttachmentMedia: E,
                    inlineEmbedMedia: x,
                    renderEmbeds: S,
                    gifAutoPlay: C,
                    poll: G,
                    showListsAndHeaders: N,
                    showMaskedLinks: N,
                    shouldHideMediaOptions: y,
                    enabledContentHarmTypeFlags: U,
                    ctaButtonType: F,
                }),
                childrenExecutedCommand: (0, tX.A)(l, s, a),
                childrenMessageContent: (0, tK.A)(t, I),
                childrenSystemMessage: (0, tJ.A)(t),
                onContextMenu: d,
                onClick: c,
                hasThread: !1 !== h && null != O && l.hasFlag(el.pr7.HAS_THREAD),
                hasReply: l.type === el.lAJ.REPLY,
                isSystemMessage: (0, tT.A)(l),
                messageRef: k,
                author: L,
                "aria-labelledby": w,
                "aria-roledescription": T.intl.string(T.t.BAB0yK),
            });
});
function tZ(e) {
    let { className: t, count: n, compact: s, collapsedReason: l } = e;
    return (0, i.jsx)(tF.A, {
        className: t,
        compact: s,
        role: "group",
        childrenMessageContent: (0, i.jsx)(tV.A, {
            compact: s,
            className: tY.L9,
            iconNode: (0, i.jsx)(tI.P, { size: "md", color: "currentColor", className: tY.Q6 }),
            children: (0, i.jsx)("div", { className: tY.Fo, children: T.intl.format(l, { count: n }) }),
        }),
    });
}
var tQ = n(495544),
    tW = n(58703),
    t0 = n(143236),
    t1 = n(284009),
    t3 = n.n(t1),
    t2 = n(493336),
    t7 = n(181079),
    t8 = n(567035),
    t6 = n(455234),
    t4 = n(695633),
    t5 = n(152007),
    t9 = n(607508),
    ne = n(594061),
    nt = n(617617),
    nn = n(95701),
    ns = n(808728),
    nl = n(232835),
    na = n(576705),
    ni = n(711014),
    nr = n(543465),
    nd = n(927813),
    no =
        (((s = {})[(s.Favorite = 0)] = "Favorite"),
        (s[(s.PrivateChannel = 1)] = "PrivateChannel"),
        (s[(s.HighImportanceMentioned = 2)] = "HighImportanceMentioned"),
        (s[(s.LowImportanceMentioned = 3)] = "LowImportanceMentioned"),
        (s[(s.AllMessagesNotifications = 4)] = "AllMessagesNotifications"),
        (s[(s.GuildChannel = 5)] = "GuildChannel"),
        (s[(s.OldChannel = 6)] = "OldChannel"),
        (s[(s.NoNotifications = 7)] = "NoNotifications"),
        (s[(s.ReallyOldChannel = 8)] = "ReallyOldChannel"),
        s),
    nc = (((l = {}).Loading = "loading"), (l.Loaded = "loaded"), (l.Done = "done"), l);
class nu extends t0.EventEmitter {
    state;
    scrollerRef;
    undoStack = [];
    constructor(e, t) {
        super(), (this.state = e), (this.scrollerRef = t);
        for (let t = 0; t < e.channels.length; t++) e.channels[t].order = t;
    }
    maybeLoadMore = () => {
        let e = this.scrollerRef.current?.getScrollerState();
        null == e || (e.scrollHeight - e.scrollTop - e.offsetHeight < 2e3 && this.loadMore());
    };
    loadMore() {
        let { loadState: e, channels: t } = this.state;
        if ("loaded" !== e) return;
        let n = !1,
            s = t.map((e) => {
                if (e.isFullyLoaded || e.deleted || n) return e;
                if (e.collapsed)
                    if (!e.hasLoadedAnything) return { ...e, hasLoadedAnything: !0 };
                    else return e;
                return (
                    (e = this.populateInitialStateFromStore(e)).isFullyLoaded ||
                        (t3()("nsfw" !== e.type, "this channel should already be loaded"),
                        "messages" === e.type && this.loadChannelMessages(e) && (n = !0)),
                    e
                );
            });
        (!n || s.some((e, n) => e !== t[n])) &&
            this.setState({ channels: s, loadState: n ? this.state.loadState : "done" });
    }
    populateInitialStateFromStore(e) {
        switch (e.type) {
            case "messages": {
                let t = nh(e, !1);
                if (t.messages.some(N.$r)) return t2.A.clearChannel(e.channelId), { ...e, messages: [] };
                return t;
            }
            case "nsfw":
                return { ...e, isFullyLoaded: !0, hasLoadedAnything: !0 };
            case "forum": {
                let t = th.A.hasLoaded(e.guildId);
                return { ...e, isFullyLoaded: t, hasLoadedAnything: !0 };
            }
            default:
                return (0, tm.xb)(e);
        }
    }
    reloadMessages = () => {
        this.setState({
            channels: this.state.channels.map((e) =>
                "messages" === e.type && e.hasLoadedAnything ? nh(e, !1, !0) : e,
            ),
        });
    };
    getNumUnreadChannels = () => this.state.channels.length;
    markChannelRead = (e) => {
        let { channelId: t, newestUnreadMessageId: n } = e;
        eq.h.wait(() =>
            tl.ack(
                t,
                {
                    section: el.JJy.INBOX,
                    object: el.ZSU.ACK_INBOX_NEWEST_UNREAD_MESSAGE,
                    objectType: el.AnalyticsObjectTypes.ACK_AUTOMATIC,
                },
                !0,
                void 0,
                n,
            ),
        );
        let s = this.state.channels.find((e) => e.channelId === t);
        (null != s && this.undoStack.push(s), 1 === this.state.channels.length)
            ? this.deleteChannel(t)
            : (this.setState({ channels: this.updateChannel(t, (e) => ({ ...e, deleted: !0 })) }),
              eZ.Ay.useReducedMotion && this.deleteChannel(t),
              this.maybeLoadMore());
    };
    undoMarkChannelRead = () => {
        if (0 === this.undoStack.length) return;
        let e = this.undoStack.pop();
        if (null == e) return;
        tl.ack(
            e.channelId,
            { section: el.JJy.INBOX, object: el.ZSU.UNDO_MARK_AS_READ, objectType: el.AnalyticsObjectTypes.ACK_MANUAL },
            !0,
            void 0,
            e.oldestReadMessageId,
        );
        let t = this.state.channels.findIndex((t) => t.order > e.order),
            n = [...this.state.channels];
        t < 0 ? n.push(e) : n.splice(t, 0, e), this.setState({ scrollToChannelIndex: t, channels: n });
    };
    markGuildRead = (e) => {
        eq.h.wait(() => (0, t8.A)([e], el.JJy.INBOX)),
            this.setState({ channels: this.state.channels.filter((t) => t.guildId !== e) }),
            this.maybeLoadMore();
    };
    deleteChannel = (e) => {
        this.setState({
            scrollToChannelIndex: e4().findIndex(this.state.channels, (t) => t.channelId === e),
            channels: this.state.channels.filter((t) => t.channelId !== e),
        }),
            this.maybeLoadMore();
    };
    markAllRead = () => {
        tl.Uq(this.state.channels.map((e) => ({ channelId: e.channelId, messageId: e.newestUnreadMessageId }))),
            this.setState({ channels: [] });
    };
    toggle = (e) => {
        let { channelId: t, guildId: n } = e,
            { channels: s, collapsedChannels: l, loadState: a } = this.state,
            i = e4().findIndex(s, (e) => e.channelId === t),
            r = s[i],
            d = !r.collapsed;
        (l[t] = d),
            (0, ne.ji)(
                n,
                t,
                (e) => {
                    e.collapsedInInbox = d;
                },
                ne.Sb.FREQUENT_USER_ACTION,
            ),
            this.setState({
                scrollToChannelIndex: i,
                collapsedChannels: l,
                loadState: "done" !== a || d || r.isFullyLoaded ? a : "loaded",
                channels: this.updateChannel(t, (e) => ({ ...e, collapsed: d })),
            }),
            r.collapsed ? r.isFullyLoaded || this.loadMore() : this.maybeLoadMore();
    };
    clearScrollToChannelIndex() {
        this.setState({ scrollToChannelIndex: null });
    }
    handleUserGuildSettingsStoreChange = () => {
        let e = this.state.channels.filter((e) => !nr.Ay.isGuildOrCategoryOrChannelMuted(e.guildId, e.channelId));
        e.length !== this.state.channels.length && this.setState({ channels: e });
    };
    handleJoinedThreadsStoreChange = () => {
        let e = this.state.channels.filter((e) => !t5.A.isMuted(e.channelId));
        e.length !== this.state.channels.length && this.setState({ channels: e });
    };
    handleActiveThreadsStoreChange = () => {
        let e = this.state.channels.map((e) => {
            if ("forum" !== e.type) return e;
            {
                if (!e.hasLoadedAnything) return e;
                let t = th.A.hasLoaded(e.guildId);
                return { ...e, isFullyLoaded: t, hasLoadedAnything: !0 };
            }
        });
        this.setState({ channels: e });
    };
    loadChannelMessages(e) {
        t2.A.clearChannel(e.channelId);
        let t = t2.A.fetchMessages({
            channelId: e.channelId,
            limit: el.EMb,
            jump: { messageId: e.oldestReadMessageId, flash: !0 },
        });
        return (
            null != t &&
            !1 !== t &&
            (this.setState({ loadState: "loading" }),
            t.then(
                (t) => {
                    this.setState({
                        loadState: "loaded",
                        channels: this.updateChannel(e.channelId, (e) => {
                            t3()("messages" === e.type, "channel cannot change type");
                            let n = nh(e, !0);
                            return (
                                (0 === n.messages.length || n.messages.length === e.messages.length) &&
                                    (n = { ...n, hasLoadedAnything: !0, isFullyLoaded: !0, hasError: !t }),
                                n
                            );
                        }),
                    });
                },
                () => {
                    this.setState({
                        loadState: "loaded",
                        channels: this.updateChannel(
                            e.channelId,
                            (e) => (
                                t3()("messages" === e.type, "channel cannot change type"),
                                {
                                    ...nh(e, !0),
                                    isFullyLoaded: !0,
                                    hasError: !0,
                                    hasLoadedAnything: !0,
                                    newestUnreadMessageId: e.messages[e.messages.length - 1]?.id,
                                }
                            ),
                        ),
                    });
                },
            ),
            !0)
        );
    }
    updateChannel(e, t) {
        return this.state.channels.map((n) => (n.channelId === e ? t(n) : n));
    }
    setState(e) {
        for (let t in e)
            if (e[t] !== this.state[t]) {
                (this.state = { ...this.state, ...e }), this.emit("change", this.state);
                return;
            }
    }
}
function nh(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        s = nl.A.getMessages(e.channelId),
        l = s
            .toArray()
            .filter(
                (t) =>
                    tA.default.compare(t.id, e.oldestReadMessageId) > 0 &&
                    0 >= tA.default.compare(t.id, e.newestUnreadMessageId),
            );
    if (l.length === e.messages.length && l.every((t, n) => e.messages[n] === t) && n) return e;
    let a = null != s.getAfter(e.oldestReadMessageId) || l[0]?.id === e.oldestUnreadMessageId,
        i = l[l.length - 1],
        r = tA.default.compare(i?.id, e.newestUnreadMessageId) >= 0 || l.length >= 25;
    return {
        ...e,
        messages: l,
        hasLoadedAnything: e.hasLoadedAnything || a || t,
        hasLoadedFirst: e.hasLoadedFirst || a || t,
        isFullyLoaded: e.isFullyLoaded || (a && r) || (t && !s.hasMoreAfter),
    };
}
function ng() {
    var e;
    let t,
        n = (function () {
            let e = {},
                t = nt.A.settings.guilds?.guilds ?? {};
            for (let n in t)
                for (let s in t[n].channels) {
                    let l = R.A.getChannel(s);
                    (s in e && l?.guild_id !== n) || (e[s] = t[n].channels[s].collapsedInInbox);
                }
            return e;
        })(),
        s =
            ((e = n),
            (t = []),
            R.A.getSortedPrivateChannels().forEach((n) => nm(e, t, null, n.id)),
            ni.Ay.getFlattenedGuildIds().forEach((n) => {
                if (null == n) return;
                let s = ns.Ay.getSelectableChannelIds(n),
                    l = t4.A.getActiveJoinedUnreadThreadsForGuild(n);
                s.forEach((s) => {
                    nm(e, t, n, s);
                    let a = l[s] ?? {};
                    for (let s in a) nm(e, t, n, s);
                });
            }),
            e4().sortBy(t, (e) => e.sortOrder)),
        l = e4()
            .uniq(s.map((e) => e.guildId))
            .filter(tm.Vq);
    return (
        eq.h.dispatch({ type: "INBOX_OPEN", guildIds: l }),
        { collapsedChannels: n, loadState: "loaded", channels: s, scrollToChannelIndex: null }
    );
}
function nm(e, t, n, s) {
    if (null == s) return;
    let l = R.A.getChannel(s);
    if (null == l || (!nn.Le.has(l.type) && nr.Ay.isGuildOrCategoryOrChannelMuted(n, l.id))) return;
    if (l.isPrivate()) {
        if (0 === et.Ay.getMentionCount(s)) return;
    } else if (!(0, t6.Y)(l) && 0 === et.Ay.getMentionCount(s)) return;
    if ((!l.isPrivate() && !na.A.can(el.xBc.READ_MESSAGE_HISTORY, l)) || (0, C.qR)(l)) return;
    let a = et.Ay.ackMessageId(s);
    if (null == a) {
        let e = W.A.getGuild(l.guild_id);
        if (null == e || null == e.joinedAt) return;
        a = tA.default.fromTimestamp(e.joinedAt.getTime());
    }
    let i = et.Ay.getOldestUnreadMessageId(s),
        r = et.Ay.lastMessageId(s),
        d = et.Ay.getMentionCount(s),
        o = d > 0 || l.isPrivate();
    if (null == r || tA.default.compare(a, r) >= 0) return;
    let c = {
        guildId: n,
        channelId: s,
        oldestReadMessageId: a,
        oldestUnreadMessageId: i,
        newestUnreadMessageId: r,
        collapsed: !0 === e[s],
        hasLoadedAnything: !1,
        hasLoadedFirst: !1,
        isFullyLoaded: !1,
        hasError: !1,
        hasMentionsOrUnreads: o,
        mentionCount: d,
        sortOrder: (function (e, t, n) {
            let s = R.A.getChannel(t);
            if (t7.A.isFavorite(t)) return 0;
            if (s.isPrivate()) return 1;
            if (et.Ay.getMentionCount(t) > 0) return et.Ay.getIsMentionLowImportance(t) ? 3 : 2;
            if (null != n) {
                let e = tA.default.extractTimestamp(n);
                if (Date.now() - e > nf) return 8;
                if (Date.now() - e > nA) return 6;
            }
            if (s.isThread()) {
                let e = (0, t9.l)(s);
                return e === tf.CP.ALL_MESSAGES ? 4 : e === tf.CP.NO_MESSAGES ? 7 : 5;
            }
            {
                let n = nr.Ay.getChannelMessageNotifications(e, t),
                    s = n === el.orn.NULL ? nr.Ay.getMessageNotifications(e) : n;
                return s === el.orn.ALL_MESSAGES ? 4 : s === el.orn.NO_MESSAGES ? 7 : 5;
            }
        })(n, s, r),
        order: 0,
    };
    (0, C.qR)(l)
        ? t.push({ ...c, type: "nsfw" })
        : l.isForumLikeChannel()
          ? t.push({ ...c, type: "forum" })
          : t.push({ ...c, type: "messages", messages: [] });
}
let nA = 2 * nd.A.Millis.DAY,
    nf = 10 * nd.A.Millis.DAY;
var np = n(357242);
let nE = { left: 4, right: -12 },
    nx = [el.lAJ.THREAD_CREATED];
function nS(e) {
    let { channel: t, message: n, compact: s, isGroupStart: l, treatSpam: a, gotoChannel: d } = e,
        o = (0, F.rm)(n.id ?? ""),
        c = r.useCallback(
            (e) => {
                if (("Enter" === e.key || " " === e.key) && e.target === e.currentTarget) {
                    e.preventDefault(), d(e, n.id);
                    return;
                }
                "ArrowLeft" === e.key && document.querySelector(`[data-recents-channel="${t.id}"]`)?.focus();
            },
            [t.id, d, n.id],
        ),
        u = nx.includes(n.type);
    return (0, i.jsx)(H.vN, {
        offset: nE,
        children: (0, i.jsxs)("div", {
            className: np.zC,
            onKeyDown: c,
            ...o,
            children: [
                !u && (0, i.jsx)(U, { className: np.nn, onJump: (e) => d(e, n.id) }),
                (0, i.jsx)(tq, {
                    id: n.id,
                    message: n,
                    channel: t,
                    className: np.iU,
                    compact: s,
                    animateAvatar: !1,
                    isGroupStart: l,
                    treatSpam: a,
                }),
            ],
        }),
    });
}
function nC(e) {
    let { channel: t, channelRecord: n, gotoChannel: s } = e,
        { enabled: l } = tN.A.useExperiment({ location: "20e3b0_1" }, { autoTrackExposure: !1 }),
        a = _.hH.useSetting(),
        r = (0, tj.iJ)(n),
        d = !1,
        o = 0 === t.messages.length || tS()(t.messages[0].timestamp).isSame(tS()(), "day"),
        c = en.default.getUser(tQ.default.getId())?.hasFlag(el.nhx.SPAMMER) ?? !1,
        u = [];
    if (!t.collapsed) {
        let e = null,
            h = null,
            g = t.messages.slice(0, 25);
        g.forEach((t) => {
            if (!o && (null == e || !e.isSame(t.timestamp, "day"))) {
                let n = (0, tW.i$)(t.timestamp, "LL");
                u.push((0, i.jsx)(e5.A, { className: np.yF, children: n }, n)), (e = tS()(t.timestamp));
            }
            let g = null == h || (0, ty.A)(n, h, t);
            (h = t),
                (d = d || (0, tj.kf)(t)),
                u.push(
                    (0, i.jsx)(
                        nS,
                        {
                            channel: n,
                            message: t,
                            compact: a,
                            isGroupStart: g,
                            treatSpam: !c && l && (0, tj.kf)(t) && r,
                            gotoChannel: s,
                        },
                        t.id,
                    ),
                );
        });
        let m = g[g.length - 1];
        null != m &&
            0 > tA.default.compare(m.id, t.newestUnreadMessageId) &&
            u.push(
                (0, i.jsx)(
                    "div",
                    {
                        className: np.Gr,
                        children: (0, i.jsx)(tC.Q, {
                            variant: "primary",
                            text: `${T.intl.string(T.t["9OB9hq"])} \u203A`,
                            onClick: (e) => s(e, m.id),
                        }),
                    },
                    "view-all",
                ),
            ),
            0 === u.length && (u = [(0, i.jsx)(b.y, {}, "spinner")]);
    }
    return d && r && tN.A.trackExposure({ location: "20e3b0_2" }), (0, i.jsx)("div", { className: np.DZ, children: u });
}
var nN = n(201489);
let ny = r.memo(function (e) {
        let { channel: t, deleteChannel: n } = e,
            s = r.useRef(null),
            [[l, a], d] = r.useState([0, 0]),
            o = t.deleted && l > 0;
        r.useLayoutEffect(() => {
            if (!t.deleted || 0 !== l || null == s.current) return;
            let e = s.current,
                a = e.offsetHeight;
            if (a <= 0) return void n(t.channelId);
            let i = e.offsetTop,
                r = e.parentElement.scrollTop,
                o = r > i ? a - (r - i) : a;
            d([a, a - o]);
        }, [t.deleted, t.channelId, n, l]);
        let { opacity: c, size: u } = (0, tt.z)(
                {
                    config: { clamp: !0, friction: 18, tension: 200 },
                    opacity: +!o,
                    size: +!o,
                    onRest: () => {
                        n(t.channelId);
                    },
                },
                "animate-always",
            ),
            h = {
                opacity: c,
                height: u.to((e) => {
                    var t, n;
                    return o ? ((t = l), (n = a) + (t - n) * e) : "auto";
                }),
            };
        return (0, i.jsx)(e9.animated.div, { ref: s, style: h, children: (0, i.jsx)(nj, { ...e }) });
    }),
    nj = r.memo(function (e) {
        let { channel: t, onJump: n, deleteChannel: s, toggle: l } = e,
            a = (0, A.bG)([R.A], () => R.A.getChannel(t.channelId));
        if (
            (r.useEffect(() => {
                null == a ||
                    !t.isFullyLoaded ||
                    t.hasError ||
                    t.collapsed ||
                    "messages" !== t.type ||
                    0 !== t.messages.length ||
                    eq.h.wait(() => {
                        (0, tl.ack)(
                            t.channelId,
                            {
                                section: el.JJy.INBOX,
                                object: el.ZSU.ACK_INBOX_CHANNEL_NO_MESSAGES,
                                objectType: el.AnalyticsObjectTypes.ACK_AUTOMATIC,
                            },
                            !0,
                        ),
                            s(t.channelId);
                    });
            }),
            null == a || !t.hasLoadedAnything)
        )
            return null;
        function d(e, s) {
            (0, z.zV)(el.HAw.INBOX_CHANNEL_CLICKED, { channel_id: t.channelId, guild_id: t.guildId });
            let l = s ?? t.oldestUnreadMessageId;
            (0, ta.pX)(el.BVt.CHANNEL(t.guildId, t.channelId, "forum" === t.type ? null : l)), n(e);
        }
        return (0, i.jsx)("div", {
            className: nN.Ix,
            children: (0, i.jsx)(g.F, {
                component: (0, i.jsx)(ed, {
                    channel: a,
                    gotoChannel: d,
                    mentionCount: t.mentionCount,
                    toggleCollapsed: l,
                    showCollapseButton: !0,
                    channelState: t,
                    getNumUnreadChannels: e.getNumUnreadChannels,
                    children: (0, i.jsxs)(tn.e, {
                        size: "sm",
                        className: nN.GC,
                        children: [(0, i.jsx)(to, { channel: a }), (0, i.jsx)(nI, { ...e })],
                    }),
                }),
                children: t.collapsed
                    ? null
                    : "messages" === t.type
                      ? (0, i.jsx)(nC, { channel: t, channelRecord: a, gotoChannel: d })
                      : "forum" === t.type
                        ? (0, i.jsx)(tE, { channel: t, channelRecord: a, deleteChannel: s })
                        : null,
            }),
        });
    });
function nI(e) {
    let { channel: t, markChannelRead: n, markGuildRead: s, getNumUnreadChannels: l } = e,
        a = (0, te.A)() && null != t.guildId;
    return (0, i.jsx)(w.m, {
        text: a ? T.intl.string(T.t["5lLMhM"]) : T.intl.string(T.t.e6RscS),
        children: (0, i.jsx)(eH.K, {
            variant: "secondary",
            "aria-label": a ? T.intl.string(T.t["5lLMhM"]) : T.intl.string(T.t.e6RscS),
            size: "sm",
            icon: a ? e3.i : ts.A,
            onClick: function () {
                a && null != t.guildId ? s(t.guildId) : n(t),
                    (0, z.zV)(el.HAw.INBOX_CHANNEL_ACKED, {
                        channel_id: t.channelId,
                        guild_id: t.guildId,
                        marked_all_channels_as_read: !1,
                        num_unread_channels_remaining: l() - 1,
                    });
            },
        }),
    });
}
var n_ = n(301328),
    nR = n(691503);
function nM(e) {
    var t, n, s, l, a, d;
    let { onJump: c, showTutorial: u, setSeenTutorial: h, closePopout: g } = e,
        m = r.useRef(null),
        [f, p] = (function (e) {
            let [t, n] = r.useState(() => new nu(ng(), e)),
                [s, l] = r.useState(!1),
                a = r.useRef(Date.now()),
                [i, d] = r.useState(() => ng());
            r.useEffect(() => {
                function e(e) {
                    return d(e);
                }
                return (
                    t.on("change", e),
                    d(t.state),
                    () => {
                        t.off("change", e);
                    }
                );
            }, [t]),
                r.useEffect(() => {
                    if (null == i || i.channels.length > 0 || s) return;
                    let t = Date.now(),
                        r = ng();
                    0 === r.channels.length || t - a.current < 10 * nd.A.Millis.SECOND
                        ? l(!0)
                        : ((a.current = Date.now()), n(new nu(r, e)));
                }, [i, s, e]);
            let o = r.useRef(t);
            return (
                r.useLayoutEffect(() => {
                    o.current = t;
                }),
                r.useLayoutEffect(() => {
                    i?.channels, i?.loadState, o.current.maybeLoadMore();
                }, [i?.channels, i?.loadState]),
                r.useEffect(
                    () => (nl.A.addChangeListener(t.reloadMessages), () => nl.A.removeChangeListener(t.reloadMessages)),
                    [t.reloadMessages],
                ),
                r.useEffect(
                    () => (
                        nr.Ay.addChangeListener(t.handleUserGuildSettingsStoreChange),
                        () => nr.Ay.removeChangeListener(t.handleUserGuildSettingsStoreChange)
                    ),
                    [t],
                ),
                r.useEffect(
                    () => (
                        t5.A.addChangeListener(t.handleJoinedThreadsStoreChange),
                        () => t5.A.removeChangeListener(t.handleJoinedThreadsStoreChange)
                    ),
                    [t],
                ),
                r.useEffect(
                    () => (
                        th.A.addChangeListener(t.handleActiveThreadsStoreChange),
                        () => th.A.removeChangeListener(t.handleActiveThreadsStoreChange)
                    ),
                    [t],
                ),
                [i, t]
            );
        })(m),
        { loadState: E, channels: S } = f,
        { maybeLoadMore: C } = p,
        N = (0, A.bG)([eZ.Ay], () => eZ.Ay.messageGroupSpacing);
    (t = m),
        (n = f),
        (s = p),
        r.useLayoutEffect(() => {
            let { scrollToChannelIndex: e } = n;
            s.clearScrollToChannelIndex();
            let { current: l } = t;
            if (null == l || null == e) return;
            let a = l.getScrollerNode()?.children;
            if (null == a) return;
            let i = a[e];
            if (null == i) return;
            let { scrollTop: r, offsetHeight: d } = l.getScrollerState();
            (i.offsetTop < r || i.offsetTop > r + d) && l.scrollTo({ to: i.offsetTop });
        }),
        (l = f),
        (a = p),
        r.useEffect(() => {
            function e() {
                let e = l.channels.find((e) => !e.collapsed);
                null != e && a.markChannelRead(e);
            }
            return (
                eW._.subscribe(el.jej.MARK_TOP_INBOX_CHANNEL_READ, e),
                () => {
                    eW._.unsubscribe(el.jej.MARK_TOP_INBOX_CHANNEL_READ, e);
                }
            );
        }, [a, l.channels]),
        (d = p),
        r.useEffect(() => {
            function e(e) {
                if ((0, e$.hasAnyModalOpen)()) return;
                let t = (0, ez.BF)(e)?.activeElement;
                (0, ez.Cw)(t) ||
                    (((0, e0.isMac)() || (0, e0.isMacWeb)() ? e.metaKey : e.ctrlKey) &&
                        !e.shiftKey &&
                        !e.altKey &&
                        "z" === e.key &&
                        d.undoMarkChannelRead());
            }
            return (
                document.addEventListener("keydown", e),
                () => {
                    document.removeEventListener("keydown", e);
                }
            );
        }, [d]),
        r.useEffect(() => {
            eT.default.track(el.HAw.OPEN_POPOUT, { type: "Inbox" });
        }, []),
        r.useEffect(
            () => (
                eq.h.subscribe("CONNECTION_OPEN", g),
                () => {
                    eq.h.unsubscribe("CONNECTION_OPEN", g);
                }
            ),
            [g],
        ),
        (0, x.Ay)(
            () => (
                eW._.subscribe(el.jej.INBOX_MARK_ALL_UNREADS_READ, p.markAllRead),
                () => {
                    eW._.unsubscribe(el.jej.INBOX_MARK_ALL_UNREADS_READ, p.markAllRead);
                }
            ),
        );
    let y = (0, eQ.A)("unreads", m);
    return 0 === S.length
        ? (0, i.jsx)(ef, {
              Icon: eI.K,
              header: T.intl.string(T.t["6XMM+D"]),
              tip: eX().os?.family === "OS X" ? T.intl.string(T.t.w9uDOW) : T.intl.string(T.t.BiUJC6),
          })
        : (0, i.jsx)(F.hD, {
              navigator: y,
              children: (0, i.jsx)(F.PR, {
                  children: (e) => {
                      let { ref: t, ...n } = e;
                      return (0, i.jsxs)(eV.Ch, {
                          ref: (e) => {
                              (m.current = e), (t.current = e?.getScrollerNode() ?? null);
                          },
                          ...n,
                          onScroll: E === nc.Done ? void 0 : C,
                          className: o()(nR.XG, `group-spacing-${N}`),
                          children: [
                              u ? (0, i.jsx)(nv, { setSeenTutorial: h }) : null,
                              (function (e, t, n) {
                                  let {
                                          markChannelRead: s,
                                          markGuildRead: l,
                                          deleteChannel: a,
                                          toggle: r,
                                          getNumUnreadChannels: d,
                                      } = t,
                                      o = null;
                                  return e4().flatMap(e, (e) => {
                                      let t = e.sortOrder !== o;
                                      o = e.sortOrder;
                                      let c = [];
                                      return (
                                          t &&
                                              (e.hasLoadedAnything && e.sortOrder === no.ReallyOldChannel
                                                  ? c.push(
                                                        (0, i.jsx)(
                                                            e5.A,
                                                            {
                                                                className: n_.y,
                                                                contentClassName: n_.$,
                                                                children: T.intl.string(T.t.roBMzj),
                                                            },
                                                            "old-divider",
                                                        ),
                                                    )
                                                  : e.hasLoadedAnything &&
                                                    e.sortOrder === no.NoNotifications &&
                                                    c.push(
                                                        (0, i.jsx)(
                                                            e5.A,
                                                            {
                                                                className: n_.y,
                                                                contentClassName: n_.$,
                                                                children: T.intl.string(T.t["2Ys7nu"]),
                                                            },
                                                            "disabled-divider",
                                                        ),
                                                    )),
                                          c.push(
                                              (0, i.jsx)(
                                                  ny,
                                                  {
                                                      channel: e,
                                                      markChannelRead: s,
                                                      markGuildRead: l,
                                                      toggle: r,
                                                      deleteChannel: a,
                                                      onJump: n,
                                                      getNumUnreadChannels: d,
                                                  },
                                                  e.channelId,
                                              ),
                                          ),
                                          c
                                      );
                                  });
                              })(S, p, c),
                              E === nc.Done ? null : (0, i.jsx)(b.y, { className: nR.u1 }),
                          ],
                      });
                  },
              }),
          });
}
function nv(e) {
    let { setSeenTutorial: t } = e;
    return (0, i.jsxs)("div", {
        className: nR.d$,
        children: [
            (0, i.jsx)("div", { className: nR.cm, children: (0, i.jsx)(eI.K, { size: "md", color: "currentColor" }) }),
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsx)(P.D, {
                        className: nR.__invalid_tutorialHeader,
                        variant: "heading-md/semibold",
                        children: T.intl.string(T.t.vZPktJ),
                    }),
                    (0, i.jsx)(D.E, {
                        color: "text-default",
                        variant: "text-sm/normal",
                        children: T.intl.string(T.t.vWkIII),
                    }),
                    (0, i.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: nR.dh,
                        children: (0, i.jsx)(eY.$, {
                            variant: "primary",
                            size: "sm",
                            text: T.intl.string(T.t["+IrDzN"]),
                            onClick: t,
                        }),
                    }),
                ],
            }),
        ],
    });
}
function nL() {
    return (0, i.jsx)(ef, {
        Icon: eI.K,
        disableStars: !0,
        header: T.intl.string(T.t["KG/ynf"]),
        tip: T.intl.string(T.t.cvcKzX),
    });
}
function nO() {
    return (0, i.jsx)(e7, { onClick: () => eW._.dispatch(el.jej.INBOX_MARK_ALL_UNREADS_READ) });
}
var nb = n(716030);
function nD(e) {
    let { tab: t, setTab: n, closePopout: s } = e,
        { enabled: l, inInbox: a } = eM.A.useConfig({ location: "RecentsPopout" }),
        r = (0, I.Sc)(),
        d = (0, ej.bG)([ev.A], () => ev.A.getOverdueMessageReminderCount());
    return (0, i.jsxs)("div", {
        className: nb.wx,
        children: [
            (0, i.jsxs)("div", {
                className: nb.qd,
                children: [
                    (0, i.jsx)(eI.K, { size: "md", color: "currentColor", className: nb.yH }),
                    (0, i.jsx)(P.D, {
                        className: nb.Hi,
                        variant: "text-lg/semibold",
                        color: "interactive-text-active",
                        children: T.intl.string(T.t.GSmTKJ),
                    }),
                    (0, i.jsxs)(e_.s, {
                        className: nb.ne,
                        onClick: (e) => e.stopPropagation(),
                        focusProps: { enabled: !1 },
                        "aria-label": T.intl.string(T.t["8k+6QY"]),
                        children: [(0, i.jsx)(nT, { tab: t }), (0, i.jsx)(eU, { closePopout: s })],
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                className: nb.YF,
                children: (0, i.jsxs)(eR.V, {
                    selectedItem: t,
                    type: "top",
                    look: "brand",
                    onItemSelect: n,
                    className: nb.$H,
                    children: [
                        (0, i.jsx)(eR.V.Item, {
                            id: u.Y2.UNREADS,
                            "aria-label": T.intl.string(T.t.sRUdB8),
                            className: nb.Mf,
                            children: (0, i.jsx)("span", { className: nb.Gn, children: T.intl.string(T.t.sRUdB8) }),
                        }),
                        (0, i.jsx)(eR.V.Item, {
                            "aria-label": T.intl.string(T.t.GRZF96),
                            id: u.Y2.MENTIONS,
                            className: nb.Mf,
                            children: (0, i.jsx)("span", { className: nb.Gn, children: T.intl.string(T.t.GRZF96) }),
                        }),
                        l && a
                            ? (0, i.jsx)(eR.V.Item, {
                                  "aria-label": T.intl.string(T.t["2pAkDA"]),
                                  id: u.Y2.BOOKMARKS,
                                  className: nb.Mf,
                                  children: (0, i.jsx)("span", {
                                      className: nb.Gn,
                                      children:
                                          0 === d
                                              ? T.intl.string(T.t["2pAkDA"])
                                              : T.intl.formatToPlainString(T.t.I4fryG, { count: d }),
                                  }),
                              })
                            : null,
                        r
                            ? (0, i.jsx)(eR.V.Item, {
                                  "aria-label": T.intl.string(T.t.Fn6Odn),
                                  id: u.Y2.SCHEDULED,
                                  className: nb.Mf,
                                  children: (0, i.jsx)("span", {
                                      className: nb.Gn,
                                      children: T.intl.string(T.t.Fn6Odn),
                                  }),
                              })
                            : null,
                    ],
                }),
            }),
        ],
    });
}
function nT(e) {
    let { tab: t } = e;
    return t === u.Y2.UNREADS ? (0, i.jsx)(nO, {}) : t === u.Y2.MENTIONS ? (0, i.jsx)(eB, {}) : null;
}
var nk = n(406810),
    nU = n(285796),
    nF = n(151282),
    nG = n(199160),
    nw =
        (((a = {})[(a.SCHEDULED = 0)] = "SCHEDULED"),
        (a[(a.ERROR_SCHEDULED_MESSAGES_DISABLED = 1)] = "ERROR_SCHEDULED_MESSAGES_DISABLED"),
        (a[(a.ERROR_USER_NOT_FOUND = 2)] = "ERROR_USER_NOT_FOUND"),
        (a[(a.ERROR_USER_CANNOT_USE_SCHEDULED_MESSAGES = 3)] = "ERROR_USER_CANNOT_USE_SCHEDULED_MESSAGES"),
        (a[(a.ERROR_CHANNEL_NOT_FOUND = 4)] = "ERROR_CHANNEL_NOT_FOUND"),
        (a[(a.ERROR_SEND_FAILED = 5)] = "ERROR_SEND_FAILED"),
        a),
    nH = n(970244),
    nP = n(383233),
    nK = n(560502);
let nB = { offset: { left: 4, right: -12 } };
function nJ() {
    return (
        r.useEffect(() => {
            (0, nF.sy)();
        }, []),
        (0, i.jsx)(nX, {})
    );
}
function nX() {
    let e = (0, A.bG)([nG.A], () => nG.A.getScheduledMessagesForInbox(), []),
        t = r.useMemo(
            () => Object.values(e).sort((e, t) => (new Date(e.sendAtTimestamp) > new Date(t.sendAtTimestamp) ? -1 : 1)),
            [e],
        ),
        n = (0, A.bG)([nG.A], () => nG.A.loading, []),
        s = r.useRef(null),
        l = (0, eQ.A)("scheduled-messages", s);
    return n
        ? (0, i.jsx)(b.y, { className: nK.k$ })
        : 0 === t.length
          ? (0, i.jsx)(ef, { Icon: nk.O, header: T.intl.string(T.t.aJQZfZ), tip: T.intl.string(T.t.rCN4pN) })
          : (0, i.jsx)(F.hD, {
                navigator: l,
                children: (0, i.jsx)(F.PR, {
                    children: (e) => {
                        let { ref: n, ...l } = e;
                        return (0, i.jsx)(eV.Ch, {
                            className: nK.XG,
                            ref: (e) => {
                                (s.current = e), (n.current = e?.getScrollerNode() ?? null);
                            },
                            ...l,
                            children: (0, i.jsx)(nz, { scheduledMessages: t }),
                        });
                    },
                }),
            });
}
function nz(e) {
    let { scheduledMessages: t } = e,
        n = r.useMemo(
            () =>
                t.reduce((e, t) => {
                    let n = R.A.getChannel(t.scheduledMessage.channelId);
                    return (
                        null == n ||
                            (e[n.id] = { channel: n, scheduledMessages: [...(e[n.id]?.scheduledMessages ?? []), t] }),
                        e
                    );
                }, {}),
            [t],
        ),
        s = (0, A.bG)([nG.A], () => nG.A.getMessagesPendingDeletion(), []);
    return (0, i.jsx)(i.Fragment, {
        children: Object.entries(n).map((e) => {
            let [t, { channel: n, scheduledMessages: l }] = e;
            return (0, i.jsxs)(
                "div",
                {
                    className: nK.WG,
                    children: [
                        (0, i.jsx)(ed, {
                            channel: n,
                            gotoChannel: () => (0, ta.pX)(el.BVt.CHANNEL(n.getGuildId(), n.id)),
                            children: null,
                        }),
                        l.map((e) => {
                            let t = s.has(e.scheduledMessageId);
                            return (0, i.jsx)(
                                nV,
                                { scheduledMessage: e, channel: n, isPendingDeletion: t },
                                e.scheduledMessageId,
                            );
                        }),
                    ],
                },
                t,
            );
        }),
    });
}
let nV = r.memo(function (e) {
    let { scheduledMessage: t, channel: n, isPendingDeletion: s } = e,
        l = new nP.Ay({
            id: t.scheduledMessageId,
            content: t.scheduledMessage.content,
            author: en.default.getUser(t.userId),
            timestamp: tS()(t.sendAtTimestamp).toDate(),
            channel_id: t.scheduledMessage.channelId,
        }),
        { isError: a, stateMessage: d } = (function (e) {
            switch (e) {
                case nw.SCHEDULED:
                    return { isError: !1, stateMessage: T.intl.string(T.t.Fn6Odn) };
                case nw.ERROR_CHANNEL_NOT_FOUND:
                    return { isError: !0, stateMessage: T.intl.string(T.t.v5O2dK) };
                case nw.ERROR_USER_NOT_FOUND:
                    return { isError: !0, stateMessage: T.intl.string(T.t.j8uIfG) };
                case nw.ERROR_USER_CANNOT_USE_SCHEDULED_MESSAGES:
                    return { isError: !0, stateMessage: T.intl.string(T.t["w6zHX/"]) };
                case nw.ERROR_SEND_FAILED:
                    return { isError: !0, stateMessage: T.intl.string(T.t.pflV7z) };
                case nw.ERROR_SCHEDULED_MESSAGES_DISABLED:
                    return { isError: !0, stateMessage: T.intl.string(T.t.j8uIfG) };
                default:
                    (0, tm.xb)(e);
            }
        })(t.state),
        c = r.useCallback(() => {
            (0, nF.mk)(t.scheduledMessageId)
                .then(() => {
                    (0, nH.Re)();
                })
                .catch((e) => {
                    (0, nH.kM)(e.message);
                });
        }, [t.scheduledMessageId]),
        u = r.useCallback(() => {
            (0, nH.CI)({ scheduledMessage: t });
        }, [t]);
    return (0, i.jsx)(
        "div",
        {
            className: o()(nK.zC, { [nK._4]: a, [nK.j3]: !a }),
            children: s
                ? (0, i.jsx)(b.y, { className: nK.$5 })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(D.E, {
                              variant: "text-xs/semibold",
                              color: a ? "text-feedback-critical" : "text-feedback-positive",
                              className: nK.Rq,
                              children: d,
                          }),
                          (0, i.jsxs)("div", {
                              className: nK.Pd,
                              children: [
                                  (0, i.jsx)(
                                      y.A,
                                      {
                                          message: l,
                                          channel: n,
                                          className: nK.iU,
                                          compact: _.hH.getSetting(),
                                          animateAvatar: !1,
                                          focusProps: nB,
                                      },
                                      l.id,
                                  ),
                                  (0, i.jsxs)(tn.e, {
                                      size: "sm",
                                      children: [
                                          (0, i.jsx)(eH.K, {
                                              icon: nk.O,
                                              onClick: u,
                                              variant: "icon-only",
                                              "aria-label": T.intl.string(T.t.SBcdAN),
                                          }),
                                          (0, i.jsx)(eH.K, {
                                              icon: nU.a,
                                              onClick: c,
                                              "aria-label": T.intl.string(T.t.O3sL8F),
                                              variant: "icon-only",
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                      ],
                  }),
        },
        l.id,
    );
});
var nY = n(978313);
function n$(e) {
    let {
        dialogClassName: t,
        isScheduledMessagesEnabled: n,
        tab: s,
        setTab: l,
        closePopout: a,
        handleMentionsJump: r,
        showTutorial: d,
        setSeenTutorial: A,
        forLaterEnabled: f,
        showForLater: p,
    } = e;
    return (0, i.jsx)(h.l, {
        "aria-label": T.intl.string(T.t.GSmTKJ),
        className: t,
        children: (0, i.jsx)("div", {
            className: o()(nY.k, { [nY.q]: n }),
            children: (0, i.jsx)(g.F, {
                component: (0, i.jsx)(nD, { tab: s, setTab: l, closePopout: a }),
                children:
                    s === u.Y2.MENTIONS
                        ? (0, i.jsx)(eS, { onJump: r })
                        : f && p && s === u.Y2.BOOKMARKS
                          ? (0, i.jsx)(m.J, { closePopout: a })
                          : s === u.Y2.SCHEDULED
                            ? (0, i.jsx)(nJ, {})
                            : (0, i.jsx)(c.tH, {
                                  fallback: (0, i.jsx)(nL, {}),
                                  children: (0, i.jsx)(nM, {
                                      onJump: r,
                                      showTutorial: d,
                                      setSeenTutorial: A,
                                      closePopout: a,
                                  }),
                              }),
            }),
        }),
    });
}
