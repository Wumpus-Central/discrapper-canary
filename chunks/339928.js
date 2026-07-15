n.r(t), n.d(t, { default: () => nW });
var s,
    l,
    a,
    i = n(627968),
    r = n(64700),
    d = n(503698),
    c = n.n(d),
    o = n(484030),
    h = n(873298),
    u = n(305866),
    g = n(707554),
    m = n(251333),
    A = n(837381),
    f = n(17928),
    x = n(990078),
    p = n(289873),
    E = n(935063),
    S = n(689175),
    N = n(821609),
    C = n(825484),
    j = n(408278),
    y = n(99677),
    _ = n(933832),
    R = n(378939),
    I = n(493336),
    M = n(964486),
    v = n(475743),
    L = n(928039),
    O = n(323073),
    b = n(202803),
    D = n(81437),
    T = n(636922),
    k = n(378570),
    G = n(885386),
    F = n(734057),
    U = n(517019),
    P = n(309010),
    H = n(174459),
    w = n(625494),
    K = n(135978),
    B = n(661531),
    z = n(187322),
    J = n(939249),
    X = n(320448),
    Y = n(778712),
    V = n(97808),
    $ = n(297264),
    Z = n(812993),
    q = n(834730),
    W = n(397244),
    Q = n(714114),
    ee = n(394871),
    et = n(571694),
    en = n(47167),
    es = n(713654),
    el = n(598104),
    ea = n(548118),
    ei = n(616356),
    er = n(71393),
    ed = n(290863),
    ec = n(568548),
    eo = n(287809),
    eh = n(650583),
    eu = n(375708),
    eg = n(889329);
let em = { top: 8, bottom: 8, left: -4, right: -4 };
function eA(e) {
    let { channel: t, children: n, onClick: s, collapsed: l = !1, mentionCount: a, onToggleCollapse: r, itemId: d } = e,
        o = (0, A.rm)(d);
    return (0, i.jsx)(z.vN, {
        offset: em,
        children: (0, i.jsxs)("div", {
            className: c()(eg.ZO, { [eg.yZ]: l }),
            ...o,
            "data-recents-channel": t.id,
            onKeyDown: function (e) {
                if ((e.key === eh.dh.ENTER || e.key === eh.dh.SPACE) && e.target === e.currentTarget) {
                    e.preventDefault(), s(e);
                    return;
                }
                null != r && ((e.key === eh.dh.ARROW_RIGHT && l) || (e.key === eh.dh.ARROW_LEFT && !l)) && r();
            },
            children: [
                (0, i.jsx)(J.D, {
                    className: eg.YT,
                    onClick: s,
                    tabIndex: -1,
                    "aria-hidden": !0,
                    children: (0, i.jsx)(ef, { channel: t }),
                }),
                (0, i.jsx)(X._, { className: eg.ai, size: "xxs" }),
                (0, i.jsx)(ex, { channel: t, onClick: s, mentionCount: a }),
                n,
            ],
        }),
    });
}
function ef(e) {
    let { channel: t } = e,
        n = (0, f.bG)([er.A], () => er.A.getGuild(t.guild_id));
    return null != n
        ? (0, i.jsx)(ea.Ay, { className: eg.Kk, guild: n, size: ea.Ay.Sizes.SMALL, showTooltip: !0, "aria-hidden": !0 })
        : t.isGroupDM()
          ? (0, i.jsx)(el.A, { channel: t, size: Y._3.SIZE_32, "aria-hidden": !0 })
          : (0, i.jsx)(V.eu, { size: Y._3.SIZE_32, src: (0, et.Y)(t), "aria-hidden": !0 });
}
function ex(e) {
    let { channel: t, onClick: n, mentionCount: s } = e,
        l = (0, f.bG)([er.A], () => er.A.getGuild(t.guild_id)),
        a = (0, en.Ay)(t, !1),
        r = (0, f.bG)([ec.Ay], () => ec.Ay.getIsMentionLowImportance(t.id)),
        d = (0, f.bG)([F.A], () => F.A.getChannel(t.parent_id)),
        o = (0, en.Ay)(d),
        h = (0, es.gU)(t, l);
    return (0, i.jsxs)("div", {
        className: eg.yP,
        children: [
            (0, i.jsx)($.D, {
                variant: "text-md/semibold",
                color: "text-default",
                className: eg.lz,
                children: (0, i.jsxs)(J.D, {
                    className: eg.Ru,
                    onClick: n,
                    children: [
                        t.isPrivate() || null == h ? null : (0, i.jsx)(h, { className: eg.j1, size: "xxs" }),
                        (0, i.jsx)("span", { className: eg.je, children: a }),
                        null != s && s > 0
                            ? (0, i.jsx)("div", {
                                  className: eg.qS,
                                  children: (0, i.jsx)(Z.hV, {
                                      count: s,
                                      color: r
                                          ? B.A.colors.BACKGROUND_MOD_STRONG.css
                                          : B.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
                                  }),
                              })
                            : null,
                    ],
                }),
            }),
            (0, i.jsx)(q.E, {
                color: "text-default",
                variant: "text-xs/normal",
                children: t.isMultiUserDM()
                    ? eu.intl.formatToPlainString(eu.t.CxSA5N, { members: t.recipients.length + 1 })
                    : t.isPrivate()
                      ? (0, i.jsx)(ep, { channel: t })
                      : (0, i.jsx)(J.D, {
                            className: c()(eg.je, eg.J5),
                            onClick: n,
                            children: null == d ? l?.name : `${l?.name} \u{203A} ${o}`,
                        }),
            }),
        ],
    });
}
function ep(e) {
    let { channel: t } = e,
        {
            user: n,
            status: s,
            activities: l,
            applicationStream: a,
        } = (0, f.cf)([eo.default, ed.A, ei.A], () => {
            let e = eo.default.getUser(t.getRecipientId());
            return {
                user: e,
                status: null != e ? ed.A.getStatus(e.id) : null,
                activities: null != e ? ed.A.getActivities(e.id) : null,
                applicationStream: null != e ? ei.A.getAnyStreamForUser(e.id) : null,
            };
        }),
        { voiceChannel: r } = (0, Q.Ay)({ userId: n?.id });
    return (0, W.A)({ activities: l, status: s, applicationStream: a, voiceChannel: r })
        ? (0, i.jsx)(ee.A, { user: n, activities: l, applicationStream: a, voiceChannel: r, hideTooltip: !0 })
        : null;
}
var eE = n(303727),
    eS = n(711917);
function eN(e) {
    let { Icon: t, header: n, tip: s, disableStars: l } = e;
    return (0, i.jsxs)("div", {
        className: eS.kL,
        children: [
            (0, i.jsxs)("div", {
                className: eS.zc,
                children: [
                    (0, i.jsx)(t, { color: "currentColor", size: "custom", className: eS.Kk, width: 36, height: 36 }),
                    l ? null : (0, i.jsx)(eE.A, { className: eS.uf }),
                ],
            }),
            (0, i.jsx)($.D, { className: eS.wx, variant: "heading-xl/semibold", children: n }),
            (0, i.jsxs)(q.E, {
                color: "text-default",
                variant: "text-xs/normal",
                children: [
                    l
                        ? null
                        : (0, i.jsxs)(q.E, {
                              tag: "span",
                              className: eS.PP,
                              variant: "text-xs/bold",
                              color: "text-feedback-positive",
                              children: [eu.intl.string(eu.t["8tvIiN"]), ":", " "],
                          }),
                    s,
                ],
            }),
        ],
    });
}
var eC = n(652215),
    ej = n(521443),
    ey = n(575863);
let e_ = { offset: { left: 4, right: -12 } },
    eR = "Recent Mentions";
function eI(e, t) {
    R.A.fetchRecentMentions({
        before: t,
        limit: eC.Ue3,
        guildId: null != e && K.Ay.guildFilter !== eC.KE7.ALL_SERVERS ? e.getGuildId() : null,
        roles: K.Ay.roleFilter,
        everyone: K.Ay.everyoneFilter,
    });
}
function eM(e) {
    let { onJump: t } = e,
        n = r.useRef(null),
        s = (0, L.A)("recents", n),
        l = (0, f.bG)([F.A, P.A], () => F.A.getChannel(P.A.getChannelId())),
        {
            messages: a,
            hasMore: d,
            loading: c,
            guildFilter: o,
            roleFilter: h,
            everyoneFilter: u,
        } = (0, f.cf)([K.Ay], () => ({
            messages: K.Ay.getMentions(),
            hasMore: K.Ay.hasMore,
            loading: K.Ay.loading,
            guildFilter: K.Ay.guildFilter,
            roleFilter: K.Ay.roleFilter,
            everyoneFilter: K.Ay.everyoneFilter,
        })),
        g = (0, v.A)(o),
        m = (0, v.A)(h),
        x = (0, v.A)(u);
    r.useEffect(() => {
        K.Ay.hasLoadedEver
            ? ((null != g && o !== g) || (null != m && h !== m) || (null != x && u !== x)) && eI(l)
            : eI(l);
    }, [g, o, m, h, x, u, l]),
        (0, M.Ay)(() => {
            a?.some(b.$r) && (R.A.clearMentions(), eI(l));
        }),
        (0, M.l0)(() => {
            R.A.truncateMentions(eC.Ue3);
        }),
        (0, M.Ay)(() => {
            H.default.track(eC.HAw.OPEN_POPOUT, { type: eR });
        }),
        (0, M.Ay)(() => {
            function e() {
                n.current?.scrollPageUp({ animate: !0 });
            }
            function t() {
                n.current?.scrollPageDown({ animate: !0 });
            }
            return (
                w._.subscribe(eC.jej.SCROLL_PAGE_DOWN, t),
                w._.subscribe(eC.jej.SCROLL_PAGE_UP, e),
                () => {
                    w._.unsubscribe(eC.jej.SCROLL_PAGE_DOWN, t), w._.unsubscribe(eC.jej.SCROLL_PAGE_UP, e);
                }
            );
        });
    let C = r.useCallback(() => {
        let e = n.current?.getScrollerState();
        null != e &&
            e.scrollHeight - e.scrollTop - e.offsetHeight < 250 &&
            d &&
            !c &&
            eI(l, null != a && a.length > 0 ? a[a.length - 1].id : null);
    }, [d, c, l, a]);
    return null == a || (c && 0 === a.length)
        ? (0, i.jsx)("div", { className: ej.Lq, children: (0, i.jsx)(p.y, {}) })
        : 0 === a.length
          ? (0, i.jsx)(eN, { Icon: E.X, header: eu.intl.string(eu.t.bgDz74), tip: eu.intl.string(eu.t.NS15vk) })
          : (0, i.jsx)(A.hD, {
                navigator: s,
                children: (0, i.jsx)(A.PR, {
                    children: (e) => {
                        let { ref: s, ...r } = e;
                        return (0, i.jsxs)(S.Ch, {
                            ref: (e) => {
                                (n.current = e), (s.current = e?.getScrollerNode() ?? null);
                            },
                            className: ey.XG,
                            onScroll: d ? C : void 0,
                            ...r,
                            children: [
                                a.map((e) => (0, i.jsx)(ev, { message: e, onJump: t }, e.id)),
                                c
                                    ? (0, i.jsx)("div", { className: ej.Lq, children: (0, i.jsx)(p.y, {}) })
                                    : d
                                      ? (0, i.jsx)("div", {
                                            className: ey.u9,
                                            children: (0, i.jsx)(N.$, {
                                                variant: "secondary",
                                                size: "sm",
                                                fullWidth: !0,
                                                text: eu.intl.string(eu.t.XBlaiC),
                                                onClick: () =>
                                                    eI(l, null != a && a.length > 0 ? a[a.length - 1].id : null),
                                            }),
                                        })
                                      : null,
                            ],
                        });
                    },
                }),
            });
}
function ev(e) {
    let { message: t, onJump: n } = e;
    if (null == t) return null;
    let s = F.A.getChannel(t.channel_id);
    if (null == s || (0, O.Jm)(s) || (0, O.$v)(s)) return null;
    let l = U.A.didAgree(s.getGuildId()),
        a = !!(0, O.Gc)(s) && !l;
    return (0, i.jsxs)("div", {
        className: ej.aP,
        children: [
            (0, i.jsx)(eA, {
                channel: s,
                onClick: (e) => eL(t, () => n(e)),
                collapsed: !1,
                itemId: `header-${t.id}`,
                children: (0, i.jsxs)(C.e, {
                    size: "sm",
                    className: eg.GC,
                    children: [
                        (0, i.jsx)(x.m, {
                            text: eu.intl.string(eu.t["+TSRGD"]),
                            ariaHidden: !0,
                            children: (0, i.jsx)(j.K, {
                                variant: "secondary",
                                "aria-label": eu.intl.string(eu.t["+TSRGD"]),
                                size: "sm",
                                icon: y.t,
                                onClick: (e) => eL(t, () => n(e)),
                            }),
                        }),
                        (0, i.jsx)(x.m, {
                            text: eu.intl.string(eu.t.e6RscS),
                            ariaHidden: !0,
                            children: (0, i.jsx)(j.K, {
                                variant: "secondary",
                                "aria-label": eu.intl.string(eu.t.e6RscS),
                                size: "sm",
                                icon: _.A,
                                onClick: () => R.A.deleteRecentMention(t.id),
                            }),
                        }),
                    ],
                }),
            }),
            (0, i.jsx)("div", {
                children: (0, i.jsx)(
                    T.A,
                    {
                        message: t,
                        channel: s,
                        className: ej.YD,
                        hideAccessories: a,
                        compact: G.hH.getSetting(),
                        animateAvatar: !1,
                        focusProps: e_,
                        trackAnnouncementViews: !0,
                    },
                    t.id,
                ),
            }),
        ],
    });
}
function eL(e, t) {
    function n() {
        let { id: n, channel_id: s } = e;
        null != F.A.getChannel(s) && (I.A.trackJump(s, n, eR), (0, k.ci)(s, n)), t();
    }
    (0, D.A)(e, n) && n();
}
var eO = n(702841),
    eb = n(912592),
    eD = n(890856),
    eT = n(761508),
    ek = n(966597),
    eG = n(85109),
    eF = n(910425),
    eU = n(214947),
    eP = n(711950),
    eH = n(322387),
    ew = n(912309),
    eK = n(134314);
function eB(e) {
    let { closePopout: t } = e,
        n = (0, ew.kX)();
    return (0, i.jsx)(x.m, {
        asContainer: !0,
        text: eu.intl.string(eu.t["lMR96+"]),
        children: (0, i.jsxs)(J.D, {
            "aria-label": `${eu.intl.string(eu.t["lMR96+"])}, ${n}`,
            className: eK.b,
            onClick: () => {
                H.default.track(eC.HAw.NOTIFICATION_CENTER_ACTION, { action_type: eH.e1.FRIEND_REQUESTS_BUTTON_CLICK }),
                    eP.A.transitionToSection(eC.m3P.PENDING, { explicit: !0 }),
                    t();
            },
            children: [
                (0, i.jsx)(eU.$, { size: "xs", color: "currentColor" }),
                (0, i.jsx)(Z.hV, { count: n, color: B.A.colors.BACKGROUND_MOD_STRONG.css }),
            ],
        }),
    });
}
var ez = n(980707),
    eJ = n(477782),
    eX = n(922016),
    eY = n(783977);
function eV(e) {
    let { closePopout: t, onSelect: n } = e,
        s = (0, f.bG)([F.A, P.A], () => F.A.getChannel(P.A.getChannelId())),
        {
            everyoneFilter: l,
            roleFilter: a,
            guildFilter: r,
        } = (0, f.cf)([K.Ay], () => {
            let { everyoneFilter: e, roleFilter: t, guildFilter: n } = K.Ay;
            return { everyoneFilter: e, roleFilter: t, guildFilter: n };
        });
    return (0, i.jsxs)(ez.W, {
        "data-menu-migrated-auto": !0,
        navId: "mentions-filter",
        "aria-label": eu.intl.string(eu.t.pEasFX),
        onClose: t,
        onSelect: n,
        children: [
            (0, i.jsx)(eJ.sL, {
                id: "Everyone",
                label: eu.intl.string(eu.t.cdyUsV),
                action: function () {
                    R.A.setGuildFilter({ everyoneFilter: !l });
                },
                checked: l,
            }),
            (0, i.jsx)(eJ.sL, {
                id: "Roles",
                label: eu.intl.string(eu.t.lZejCq),
                action: function () {
                    R.A.setGuildFilter({ roleFilter: !a });
                },
                checked: a,
            }),
            null == s || s.isPrivate()
                ? null
                : (0, i.jsx)(eJ.sL, {
                      id: "All Servers",
                      label: eu.intl.string(eu.t.GWMA6s),
                      action: function () {
                          R.A.setGuildFilter({
                              guildFilter: r === eC.KE7.THIS_SERVER ? eC.KE7.ALL_SERVERS : eC.KE7.THIS_SERVER,
                          });
                      },
                      checked: r === eC.KE7.ALL_SERVERS,
                  }),
        ],
    });
}
function e$() {
    let e = r.useRef(null);
    return (0, i.jsx)(eX.Y, {
        targetElementRef: e,
        align: "right",
        animation: eX.Y.Animation.NONE,
        position: "bottom",
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(eV, { closePopout: t });
        },
        children: (t) => {
            let { onClick: n } = t;
            return (0, i.jsx)(x.m, {
                text: eu.intl.string(eu.t.pEasFX),
                targetElementRef: e,
                children: (0, i.jsx)(j.K, {
                    size: "sm",
                    variant: "secondary",
                    "aria-label": eu.intl.string(eu.t.pEasFX),
                    icon: eY.R,
                    onClick: n,
                }),
            });
        },
    });
}
var eZ = n(481613),
    eq = n.n(eZ),
    eW = n(621466),
    eQ = n(192308),
    e0 = n(228366),
    e1 = n(775602),
    e3 = n(723702),
    e2 = n(862482),
    e7 = n(143838),
    e8 = n(640238);
function e6(e) {
    let { onClick: t } = e,
        [n, s] = r.useState(!1);
    function l() {
        t(),
            H.default.track(eC.HAw.INBOX_CHANNEL_ACKED, {
                marked_all_channels_as_read: !0,
                num_unread_channels_remaining: 0,
            });
    }
    return (0, i.jsxs)(i.Fragment, {
        children: [
            n ? (0, i.jsx)(e9, { confirm: l, cancel: () => s(!1) }) : null,
            (0, i.jsx)(x.m, {
                text: eu.intl.string(eu.t["8k+6QY"]),
                children: (0, i.jsx)(j.K, {
                    variant: "secondary",
                    "aria-label": eu.intl.string(eu.t["8k+6QY"]),
                    size: "sm",
                    icon: e7.i,
                    onClick: function (e) {
                        e.shiftKey ? l() : s(!0);
                    },
                }),
            }),
        ],
    });
}
function e9(e) {
    let { cancel: t, confirm: n } = e;
    return (0, i.jsx)(e8.M, {
        dismissable: !0,
        header: eu.intl.string(eu.t.h4bVZ2),
        confirmText: eu.intl.string(eu.t.e6RscS),
        cancelText: eu.intl.string(eu.t["ETE/oC"]),
        confirmButtonColor: e2.$n.Colors.BRAND,
        onCancel: t,
        onConfirm: n,
        children: (0, i.jsx)(q.E, {
            color: "text-default",
            variant: "text-sm/normal",
            children: eu.intl.string(eu.t["0MQ0Bf"]),
        }),
    });
}
n(321073);
var e5 = n(435558),
    e4 = n.n(e5),
    te = n(749314),
    tt = n(580929),
    tn = n(311283),
    ts = n(717421),
    tl = n(334738),
    ta = n(95561),
    ti = n(976860),
    tr = n(847374),
    td = n(714568);
function tc(e) {
    let { collapsed: t, onClick: n } = e,
        s = eu.intl.string(t ? eu.t.dcl9MQ : eu.t.iTcuma);
    return (0, i.jsx)(x.m, {
        text: s,
        ariaHidden: !0,
        children: (0, i.jsx)(J.D, {
            className: td.x6,
            "aria-label": s,
            onClick: n,
            children: (0, i.jsx)(tr.a, { className: c()(td.ai, { [td.yZ]: t }), size: "xs" }),
        }),
    });
}
var to = n(169894);
let th = { height: 0, opacity: 0, config: { tension: 280, friction: 32, clamp: !0 } },
    tu = { height: "auto", opacity: 1, config: { tension: 280, friction: 32, clamp: !0 } };
function tg(e) {
    let { collapsed: t, children: n } = e,
        s = r.useRef(null),
        [l, a] = (0, ts.z)(() => (t ? th : tu), "respect-motion-settings", []),
        d = r.useRef(!0);
    return (
        r.useLayoutEffect(() => {
            if (d.current) {
                d.current = !1;
                return;
            }
            let e = s.current?.offsetHeight;
            null != e &&
                (t
                    ? a({
                          from: { height: e, opacity: 1 },
                          to: { height: 0, opacity: 0 },
                          immediate: e1.Ay.useReducedMotion,
                      })
                    : a({
                          from: { height: 0, opacity: 0 },
                          to: { height: e, opacity: 1 },
                          immediate: e1.Ay.useReducedMotion,
                          onRest: (e) => {
                              e.finished && a({ height: "auto", immediate: !0 });
                          },
                      }));
        }, [t, a]),
        (0, i.jsx)(tt.animated.div, {
            className: to.r,
            style: l,
            children: (0, i.jsx)("div", { ref: s, inert: !!t || void 0, children: n }),
        })
    );
}
var tm = n(782603),
    tA = n(461678),
    tf = n(914703);
function tx(e) {
    let { channel: t } = e,
        n = r.useRef(null);
    return (0, i.jsx)(eX.Y, {
        targetElementRef: n,
        align: "right",
        animation: eX.Y.Animation.NONE,
        position: "bottom",
        renderPopout: (e) =>
            t.isThread()
                ? (0, i.jsx)(tf.A, {
                      ...e,
                      channel: t,
                      navId: "recents-thread-notifications",
                      label: eu.intl.string(eu.t.ljs3Oe),
                  })
                : (0, i.jsx)(tA.A, {
                      ...e,
                      channel: t,
                      navId: "recents-notifications",
                      label: eu.intl.string(eu.t.ljs3Oe),
                      location: { section: eC.JJy.INBOX },
                      includeGuildMute: !0,
                  }),
        children: (e) => {
            let { onClick: t } = e;
            return (0, i.jsx)(x.m, {
                text: eu.intl.string(eu.t.h850Ss),
                targetElementRef: n,
                children: (0, i.jsx)(j.K, {
                    "aria-label": eu.intl.string(eu.t.h850Ss),
                    icon: tm.X,
                    variant: "secondary",
                    size: "sm",
                    onClick: t,
                }),
            });
        },
    });
}
var tp = n(350527),
    tE = n(218152),
    tS = n(970278),
    tN = n(747926),
    tC = n(403362),
    tj = n(935208),
    ty = n(37411),
    t_ = n(791641);
function tR(e) {
    let { channel: t, channelRecord: n, deleteChannel: s } = e,
        l = (0, f.yK)(
            [tS.A, F.A],
            () =>
                e4()(tS.A.getThreadsForParent(n.guild_id, n.id))
                    .values()
                    .filter((e) => {
                        let { id: n } = e;
                        return tj.default.compare(n, t.oldestReadMessageId) > 0;
                    })
                    .map((e) => {
                        let { id: t } = e;
                        return F.A.getChannel(t);
                    })
                    .filter(tC.Vq)
                    .sort((e, t) => tj.default.compare(e.id, t.id))
                    .value(),
            [t.oldestReadMessageId, n.guild_id, n.id],
        ),
        a = r.useCallback((e, t) => {
            (0, tN.JA)(e, t, ty.H9.INBOX);
        }, []);
    return (
        r.useEffect(() => {
            null == n ||
                !t.isFullyLoaded ||
                t.hasError ||
                t.collapsed ||
                0 !== l.length ||
                e0.h.wait(() => {
                    (0, tl.ack)(
                        t.channelId,
                        {
                            section: eC.JJy.INBOX,
                            object: eC.ZSU.ACK_INBOX_FORUM_NO_POSTS,
                            objectType: eC.AnalyticsObjectTypes.ACK_AUTOMATIC,
                        },
                        !0,
                    ),
                        s(t.channelId);
                });
        }),
        (0, i.jsx)("div", {
            className: t_.k,
            children: l.map((e) =>
                (0, i.jsx)(
                    tE.Cp,
                    { channel: n, children: (0, i.jsx)(tp.Ay, { className: t_.u, threadId: e.id, goToThread: a }) },
                    e.id,
                ),
            ),
        })
    );
}
var tI = n(989349),
    tM = n.n(tI),
    tv = n(123292),
    tL = n(857069),
    tO = n(789645),
    tb = n(33358),
    tD = n(384231),
    tT = n(207133),
    tk = n(704413),
    tG = n(9842),
    tF = n(994500),
    tU = n(5095),
    tP = n(320095),
    tH = n(143413),
    tw = n(763754),
    tK = n(467073),
    tB = n(491182),
    tz = n(860227),
    tJ = n(500414),
    tX = n(375199),
    tY = n(824556),
    tV = n(715628),
    t$ = n(752636),
    tZ = n(352043),
    tq = n(268719),
    tW = n(234957),
    tQ = n(888675),
    t0 = n(21623),
    t1 = n(701628);
let t3 = r.memo(function e(t) {
    let n,
        {
            channel: s,
            message: l,
            compact: a = !1,
            className: r,
            onContextMenu: d,
            onClick: o,
            disableInteraction: h = !1,
            hasThread: u,
        } = t,
        g = eC.sl8.has(l.type) ? l.messageReference : void 0,
        m = (0, f.bG)([tG.A], () => tG.A.getMessageByReference(g)),
        A = (0, f.bG)([F.A], () =>
            l.type === eC.lAJ.THREAD_STARTER_MESSAGE && m.state === tG.a.LOADED
                ? F.A.getChannel(m.message.channel_id)
                : null,
        ),
        x = G.X6.useSetting(),
        p = G.hD.useSetting(),
        E = G.rs.useSetting(),
        S = G.kt.useSetting(),
        N = (0, tD.S)((l.editedTimestamp ?? l.timestamp).valueOf()),
        C = (0, tT.A)(s?.id),
        { disableReactionCreates: j } = (0, tK.A)(s),
        {
            content: y,
            hasSpoilerEmbeds: _,
            hasBailedAst: R,
        } = (0, tX.A)(l, {
            hideSimpleEmbedContent: p && E,
            allowList: N,
            allowHeading: N,
            allowLinks: !0,
            previewLinkTarget: !0,
        }),
        I = (0, tw.Ay)(l),
        M = (0, f.bG)(
            [F.A],
            () => l.hasFlag(eC.pr7.HAS_THREAD) && F.A.getChannel(tj.default.castMessageIdAsChannelId(l.id)),
        ),
        v = l.type === eC.lAJ.THREAD_STARTER_MESSAGE && m.state === tG.a.LOADED && null != A,
        L = !v && void 0 === n,
        O = (0, tY.A)({ message: l, channel: s, announcementEnabled: L }),
        b = (0, tb.P)(l),
        D = (0, tU._f)(l.id, l.channel_id),
        T = (0, tk.A)(l),
        k = (0, tz.fF)(l);
    return v
        ? (0, i.jsx)(e, { ...t, message: m.message, channel: A, hasThread: !1 })
        : (tF.A.isBlockedForMessage(l) ? (n = eu.t["+FcYM/"]) : tF.A.isIgnoredForMessage(l) && (n = eu.t["VFWjc+"]),
            void 0 !== n)
          ? (0, i.jsx)(t2, { className: r, compact: a, count: 1, collapsedReason: n })
          : (0, i.jsx)(tB.A, {
                compact: a,
                className: c()(r, { [t1.M1]: (0, tP.ec)(l), [t1.XN]: h, [t1._A]: t.isGroupStart }),
                childrenRepliedMessage: (0, tW.A)(l, s, g, m, a),
                childrenHeader: (0, t$.A)({ ...t, author: I, guildId: s.guild_id }),
                childrenAccessories: (0, i.jsx)(tJ.iV, {
                    channel: s,
                    message: l,
                    hasSpoilerEmbeds: _,
                    hasBailedAst: R,
                    compact: a,
                    canSuppressEmbeds: !1,
                    canDeleteAttachments: !1,
                    disableReactionReads: !1,
                    disableReactionCreates: j,
                    disableComponentInteractivity: !0,
                    disableReactionUpdates: !1,
                    renderThreadAccessory: u,
                    inlineAttachmentMedia: x,
                    inlineEmbedMedia: p,
                    renderEmbeds: E,
                    gifAutoPlay: S,
                    poll: T,
                    showListsAndHeaders: N,
                    showMaskedLinks: N,
                    shouldHideMediaOptions: C,
                    enabledContentHarmTypeFlags: b,
                    ctaButtonType: D,
                }),
                childrenExecutedCommand: (0, tq.A)(l, s, a),
                childrenMessageContent: (0, tV.A)(t, y),
                childrenSystemMessage: (0, tZ.A)(t),
                onContextMenu: d,
                onClick: o,
                hasThread: !1 !== u && null != M && l.hasFlag(eC.pr7.HAS_THREAD),
                hasReply: l.type === eC.lAJ.REPLY,
                isSystemMessage: (0, tH.A)(l),
                messageRef: O,
                author: I,
                "aria-labelledby": k,
                "aria-roledescription": eu.intl.string(eu.t.BAB0yK),
            });
});
function t2(e) {
    let { className: t, count: n, compact: s, collapsedReason: l } = e;
    return (0, i.jsx)(tB.A, {
        className: t,
        compact: s,
        role: "group",
        childrenMessageContent: (0, i.jsx)(tQ.A, {
            compact: s,
            className: t0.L9,
            iconNode: (0, i.jsx)(tO.P, { size: "md", color: "currentColor", className: t0.Q6 }),
            children: (0, i.jsx)("div", { className: t0.Fo, children: eu.intl.format(l, { count: n }) }),
        }),
    });
}
var t7 = n(58703),
    t8 = n(373423);
function t6(e) {
    let { className: t, onJump: n } = e,
        [s, l] = r.useState(!1);
    return (0, i.jsx)(J.D, {
        className: c()(t8.n, t),
        onClick: function (e) {
            l(!0), n(e);
        },
        children: s
            ? (0, i.jsx)(p.y, { type: p.y.Type.PULSING_ELLIPSIS })
            : (0, i.jsx)(q.E, { variant: "text-xs/medium", className: t8.Q, children: eu.intl.string(eu.t.k5WiPf) }),
    });
}
var t9 = n(143236),
    t5 = n(284009),
    t4 = n.n(t5),
    ne = n(181079),
    nt = n(567035),
    nn = n(455234),
    ns = n(695633),
    nl = n(152007),
    na = n(607508),
    ni = n(594061),
    nr = n(617617),
    nd = n(95701),
    nc = n(808728),
    no = n(232835),
    nh = n(576705),
    nu = n(711014),
    ng = n(543465),
    nm = n(927813),
    nA =
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
    nf = (((l = {}).Loading = "loading"), (l.Loaded = "loaded"), (l.Done = "done"), l);
class nx extends t9.EventEmitter {
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
                        (t4()("nsfw" !== e.type, "this channel should already be loaded"),
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
                let t = np(e, !1);
                if (t.messages.some(b.$r)) return I.A.clearChannel(e.channelId), { ...e, messages: [] };
                return t;
            }
            case "nsfw":
                return { ...e, isFullyLoaded: !0, hasLoadedAnything: !0 };
            case "forum": {
                let t = tS.A.hasLoaded(e.guildId);
                return { ...e, isFullyLoaded: t, hasLoadedAnything: !0 };
            }
            default:
                return (0, tC.xb)(e);
        }
    }
    reloadMessages = () => {
        this.setState({
            channels: this.state.channels.map((e) =>
                "messages" === e.type && e.hasLoadedAnything ? np(e, !1, !0) : e,
            ),
        });
    };
    getNumUnreadChannels = () => this.state.channels.length;
    markChannelRead = (e) => {
        let { channelId: t, newestUnreadMessageId: n } = e;
        e0.h.wait(() =>
            tl.ack(
                t,
                {
                    section: eC.JJy.INBOX,
                    object: eC.ZSU.ACK_INBOX_NEWEST_UNREAD_MESSAGE,
                    objectType: eC.AnalyticsObjectTypes.ACK_AUTOMATIC,
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
              e1.Ay.useReducedMotion && this.deleteChannel(t),
              this.maybeLoadMore());
    };
    undoMarkChannelRead = () => {
        if (0 === this.undoStack.length) return;
        let e = this.undoStack.pop();
        if (null == e) return;
        tl.ack(
            e.channelId,
            { section: eC.JJy.INBOX, object: eC.ZSU.UNDO_MARK_AS_READ, objectType: eC.AnalyticsObjectTypes.ACK_MANUAL },
            !0,
            void 0,
            e.oldestReadMessageId,
        );
        let t = this.state.channels.findIndex((t) => t.order > e.order),
            n = [...this.state.channels];
        t < 0 ? n.push(e) : n.splice(t, 0, e), this.setState({ scrollToChannelIndex: t, channels: n });
    };
    markGuildRead = (e) => {
        e0.h.wait(() => (0, nt.A)([e], eC.JJy.INBOX)),
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
            (0, ni.ji)(
                n,
                t,
                (e) => {
                    e.collapsedInInbox = d;
                },
                ni.Sb.FREQUENT_USER_ACTION,
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
        let e = this.state.channels.filter((e) => !ng.Ay.isGuildOrCategoryOrChannelMuted(e.guildId, e.channelId));
        e.length !== this.state.channels.length && this.setState({ channels: e });
    };
    handleJoinedThreadsStoreChange = () => {
        let e = this.state.channels.filter((e) => !nl.A.isMuted(e.channelId));
        e.length !== this.state.channels.length && this.setState({ channels: e });
    };
    handleActiveThreadsStoreChange = () => {
        let e = this.state.channels.map((e) => {
            if ("forum" !== e.type) return e;
            {
                if (!e.hasLoadedAnything) return e;
                let t = tS.A.hasLoaded(e.guildId);
                return { ...e, isFullyLoaded: t, hasLoadedAnything: !0 };
            }
        });
        this.setState({ channels: e });
    };
    loadChannelMessages(e) {
        I.A.clearChannel(e.channelId);
        let t = I.A.fetchMessages({
            channelId: e.channelId,
            limit: eC.EMb,
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
                            t4()("messages" === e.type, "channel cannot change type");
                            let n = np(e, !0);
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
                                t4()("messages" === e.type, "channel cannot change type"),
                                {
                                    ...np(e, !0),
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
function np(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        s = no.A.getMessages(e.channelId),
        l = s
            .toArray()
            .filter(
                (t) =>
                    tj.default.compare(t.id, e.oldestReadMessageId) > 0 &&
                    0 >= tj.default.compare(t.id, e.newestUnreadMessageId),
            );
    if (l.length === e.messages.length && l.every((t, n) => e.messages[n] === t) && n) return e;
    let a = null != s.getAfter(e.oldestReadMessageId) || l[0]?.id === e.oldestUnreadMessageId,
        i = l[l.length - 1],
        r = tj.default.compare(i?.id, e.newestUnreadMessageId) >= 0 || l.length >= 25;
    return {
        ...e,
        messages: l,
        hasLoadedAnything: e.hasLoadedAnything || a || t,
        hasLoadedFirst: e.hasLoadedFirst || a || t,
        isFullyLoaded: e.isFullyLoaded || (a && r) || (t && !s.hasMoreAfter),
    };
}
function nE() {
    var e;
    let t,
        n = (function () {
            let e = {},
                t = nr.A.settings.guilds?.guilds ?? {};
            for (let n in t)
                for (let s in t[n].channels) {
                    let l = F.A.getChannel(s);
                    (s in e && l?.guild_id !== n) || (e[s] = t[n].channels[s].collapsedInInbox);
                }
            return e;
        })(),
        s =
            ((e = n),
            (t = []),
            F.A.getSortedPrivateChannels().forEach((n) => nS(e, t, null, n.id)),
            nu.Ay.getFlattenedGuildIds().forEach((n) => {
                if (null == n) return;
                let s = nc.Ay.getSelectableChannelIds(n),
                    l = ns.A.getActiveJoinedUnreadThreadsForGuild(n);
                s.forEach((s) => {
                    nS(e, t, n, s);
                    let a = l[s] ?? {};
                    for (let s in a) nS(e, t, n, s);
                });
            }),
            e4().sortBy(t, (e) => e.sortOrder)),
        l = e4()
            .uniq(s.map((e) => e.guildId))
            .filter(tC.Vq);
    return (
        e0.h.dispatch({ type: "INBOX_OPEN", guildIds: l }),
        { collapsedChannels: n, loadState: "loaded", channels: s, scrollToChannelIndex: null }
    );
}
function nS(e, t, n, s) {
    if (null == s) return;
    let l = F.A.getChannel(s);
    if (null == l || (!nd.Le.has(l.type) && ng.Ay.isGuildOrCategoryOrChannelMuted(n, l.id))) return;
    if (l.isPrivate()) {
        if (0 === ec.Ay.getMentionCount(s)) return;
    } else if (!(0, nn.Y)(l) && 0 === ec.Ay.getMentionCount(s)) return;
    if ((!l.isPrivate() && !nh.A.can(eC.xBc.READ_MESSAGE_HISTORY, l)) || (0, O.qR)(l)) return;
    let a = ec.Ay.ackMessageId(s);
    if (null == a) {
        let e = er.A.getGuild(l.guild_id);
        if (null == e || null == e.joinedAt) return;
        a = tj.default.fromTimestamp(e.joinedAt.getTime());
    }
    let i = ec.Ay.getOldestUnreadMessageId(s),
        r = ec.Ay.lastMessageId(s),
        d = ec.Ay.getMentionCount(s),
        c = d > 0 || l.isPrivate();
    if (null == r || tj.default.compare(a, r) >= 0) return;
    let o = {
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
        hasMentionsOrUnreads: c,
        mentionCount: d,
        sortOrder: (function (e, t, n) {
            let s = F.A.getChannel(t);
            if (ne.A.isFavorite(t)) return 0;
            if (s.isPrivate()) return 1;
            if (ec.Ay.getMentionCount(t) > 0) return ec.Ay.getIsMentionLowImportance(t) ? 3 : 2;
            if (null != n) {
                let e = tj.default.extractTimestamp(n);
                if (Date.now() - e > nC) return 8;
                if (Date.now() - e > nN) return 6;
            }
            if (s.isThread()) {
                let e = (0, na.l)(s);
                return e === ty.CP.ALL_MESSAGES ? 4 : e === ty.CP.NO_MESSAGES ? 7 : 5;
            }
            {
                let n = ng.Ay.getChannelMessageNotifications(e, t),
                    s = n === eC.orn.NULL ? ng.Ay.getMessageNotifications(e) : n;
                return s === eC.orn.ALL_MESSAGES ? 4 : s === eC.orn.NO_MESSAGES ? 7 : 5;
            }
        })(n, s, r),
        order: 0,
    };
    (0, O.qR)(l)
        ? t.push({ ...o, type: "nsfw" })
        : l.isForumLikeChannel()
          ? t.push({ ...o, type: "forum" })
          : t.push({ ...o, type: "messages", messages: [] });
}
let nN = 2 * nm.A.Millis.DAY,
    nC = 10 * nm.A.Millis.DAY;
var nj = n(357242);
let ny = { left: 4, right: -12 },
    n_ = [eC.lAJ.THREAD_CREATED];
function nR(e) {
    let { channel: t, message: n, compact: s, isGroupStart: l, gotoChannel: a } = e,
        d = (0, A.rm)(n.id ?? ""),
        c = r.useCallback(
            (e) => {
                if (("Enter" === e.key || " " === e.key) && e.target === e.currentTarget) {
                    e.preventDefault(), a(e, n.id);
                    return;
                }
                "ArrowLeft" === e.key && document.querySelector(`[data-recents-channel="${t.id}"]`)?.focus();
            },
            [t.id, a, n.id],
        ),
        o = n_.includes(n.type);
    return (0, i.jsx)(z.vN, {
        offset: ny,
        children: (0, i.jsxs)("div", {
            className: nj.zC,
            onKeyDown: c,
            ...d,
            children: [
                !o && (0, i.jsx)(t6, { className: nj.nn, onJump: (e) => a(e, n.id) }),
                (0, i.jsx)(t3, {
                    id: n.id,
                    message: n,
                    channel: t,
                    className: nj.iU,
                    compact: s,
                    animateAvatar: !1,
                    isGroupStart: l,
                }),
            ],
        }),
    });
}
function nI(e) {
    let { channel: t, channelRecord: n, gotoChannel: s } = e,
        l = G.hH.useSetting(),
        a = 0 === t.messages.length || tM()(t.messages[0].timestamp).isSame(tM()(), "day"),
        r = [],
        d = null,
        c = null,
        o = t.messages.slice(0, 25);
    o.forEach((e) => {
        if (!a && (null == d || !d.isSame(e.timestamp, "day"))) {
            let t = (0, t7.i$)(e.timestamp, "LL");
            r.push((0, i.jsx)(te.A, { className: nj.yF, children: t }, t)), (d = tM()(e.timestamp));
        }
        let t = null == c || (0, tL.A)(n, c, e);
        (c = e), r.push((0, i.jsx)(nR, { channel: n, message: e, compact: l, isGroupStart: t, gotoChannel: s }, e.id));
    });
    let h = o[o.length - 1];
    return (
        null != h &&
            0 > tj.default.compare(h.id, t.newestUnreadMessageId) &&
            r.push(
                (0, i.jsx)(
                    "div",
                    {
                        className: nj.Gr,
                        children: (0, i.jsx)(tv.Q, {
                            variant: "primary",
                            text: `${eu.intl.string(eu.t["9OB9hq"])} \u203A`,
                            onClick: (e) => s(e, h.id),
                        }),
                    },
                    "view-all",
                ),
            ),
        0 === r.length && (r = [(0, i.jsx)(p.y, {}, "spinner")]),
        (0, i.jsx)("div", { className: nj.DZ, children: r })
    );
}
let nM = r.memo(function (e) {
        let { channel: t, deleteChannel: n } = e,
            s = r.useRef(null),
            [[l, a], d] = r.useState([0, 0]),
            c = t.deleted && l > 0;
        r.useLayoutEffect(() => {
            if (!t.deleted || 0 !== l || null == s.current) return;
            let e = s.current,
                a = e.offsetHeight;
            if (a <= 0) return void n(t.channelId);
            let i = e.offsetTop,
                r = e.parentElement.scrollTop,
                c = r > i ? a - (r - i) : a;
            d([a, a - c]);
        }, [t.deleted, t.channelId, n, l]);
        let { opacity: o, size: h } = (0, ts.z)(
                {
                    config: { clamp: !0, friction: 18, tension: 200 },
                    opacity: +!c,
                    size: +!c,
                    onRest: () => {
                        n(t.channelId);
                    },
                },
                "animate-always",
            ),
            u = {
                opacity: o,
                height: h.to((e) => {
                    var t, n;
                    return c ? ((t = l), (n = a) + (t - n) * e) : "auto";
                }),
            };
        return (0, i.jsx)(tt.animated.div, {
            ref: s,
            style: u,
            "data-unread-channel-id": t.channelId,
            children: (0, i.jsx)(nv, { ...e }),
        });
    }),
    nv = r.memo(function (e) {
        let { channel: t, onJump: n, deleteChannel: s, toggle: l } = e,
            a = (0, f.bG)([F.A], () => F.A.getChannel(t.channelId));
        if (
            (r.useEffect(() => {
                null == a ||
                    !t.isFullyLoaded ||
                    t.hasError ||
                    t.collapsed ||
                    "messages" !== t.type ||
                    0 !== t.messages.length ||
                    e0.h.wait(() => {
                        (0, tl.ack)(
                            t.channelId,
                            {
                                section: eC.JJy.INBOX,
                                object: eC.ZSU.ACK_INBOX_CHANNEL_NO_MESSAGES,
                                objectType: eC.AnalyticsObjectTypes.ACK_AUTOMATIC,
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
            (0, ta.zV)(eC.HAw.INBOX_CHANNEL_CLICKED, { channel_id: t.channelId, guild_id: t.guildId });
            let l = s ?? t.oldestUnreadMessageId;
            (0, ti.pX)(eC.BVt.CHANNEL(t.guildId, t.channelId, "forum" === t.type ? null : l)), n(e);
        }
        function c() {
            l(t),
                (0, ta.zV)(eC.HAw.INBOX_CHANNEL_COLLAPSED, {
                    channel_id: t.channelId,
                    guild_id: t.guildId,
                    num_unread_channels_remaining: e.getNumUnreadChannels() ?? 0,
                    is_now_collapsed: !t.collapsed,
                });
        }
        let o = !a.isNSFW();
        return (0, i.jsx)("div", {
            className: ej.aP,
            children: (0, i.jsx)(g.F, {
                component: (0, i.jsxs)(eA, {
                    channel: a,
                    onClick: d,
                    collapsed: t.collapsed,
                    mentionCount: t.mentionCount,
                    onToggleCollapse: o ? c : void 0,
                    itemId: `header-${a.id}`,
                    children: [
                        (0, i.jsxs)(C.e, {
                            size: "sm",
                            className: eg.GC,
                            children: [(0, i.jsx)(tx, { channel: a }), (0, i.jsx)(nL, { ...e })],
                        }),
                        o ? (0, i.jsx)(tc, { collapsed: t.collapsed, onClick: c }) : null,
                    ],
                }),
                children: (0, i.jsx)(tg, {
                    collapsed: t.collapsed,
                    children:
                        "messages" === t.type
                            ? (0, i.jsx)(nI, { channel: t, channelRecord: a, gotoChannel: d })
                            : "forum" === t.type
                              ? (0, i.jsx)(tR, { channel: t, channelRecord: a, deleteChannel: s })
                              : null,
                }),
            }),
        });
    });
function nL(e) {
    let { channel: t, markChannelRead: n, markGuildRead: s, getNumUnreadChannels: l } = e,
        a = (0, tn.A)() && null != t.guildId;
    return (0, i.jsx)(x.m, {
        text: a ? eu.intl.string(eu.t["5lLMhM"]) : eu.intl.string(eu.t.e6RscS),
        ariaHidden: !0,
        children: (0, i.jsx)(j.K, {
            variant: "secondary",
            "aria-label": a ? eu.intl.string(eu.t["5lLMhM"]) : eu.intl.string(eu.t.e6RscS),
            size: "sm",
            icon: a ? e7.i : _.A,
            onClick: function () {
                a && null != t.guildId ? s(t.guildId) : n(t),
                    (0, ta.zV)(eC.HAw.INBOX_CHANNEL_ACKED, {
                        channel_id: t.channelId,
                        guild_id: t.guildId,
                        marked_all_channels_as_read: !1,
                        num_unread_channels_remaining: l() - 1,
                    });
            },
        }),
    });
}
var nO = n(301328),
    nb = n(691503);
function nD(e) {
    var t, n, s, l, a, d;
    let { onJump: o, showTutorial: h, setSeenTutorial: u, closePopout: g } = e,
        m = r.useRef(null),
        [x, E] = (function (e) {
            let [t, n] = r.useState(() => new nx(nE(), e)),
                [s, l] = r.useState(!1),
                a = r.useRef(Date.now()),
                [i, d] = r.useState(() => nE());
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
                        r = nE();
                    0 === r.channels.length || t - a.current < 10 * nm.A.Millis.SECOND
                        ? l(!0)
                        : ((a.current = Date.now()), n(new nx(r, e)));
                }, [i, s, e]);
            let c = r.useRef(t);
            return (
                r.useLayoutEffect(() => {
                    c.current = t;
                }),
                r.useLayoutEffect(() => {
                    i?.channels, i?.loadState, c.current.maybeLoadMore();
                }, [i?.channels, i?.loadState]),
                r.useEffect(
                    () => (no.A.addChangeListener(t.reloadMessages), () => no.A.removeChangeListener(t.reloadMessages)),
                    [t.reloadMessages],
                ),
                r.useEffect(
                    () => (
                        ng.Ay.addChangeListener(t.handleUserGuildSettingsStoreChange),
                        () => ng.Ay.removeChangeListener(t.handleUserGuildSettingsStoreChange)
                    ),
                    [t],
                ),
                r.useEffect(
                    () => (
                        nl.A.addChangeListener(t.handleJoinedThreadsStoreChange),
                        () => nl.A.removeChangeListener(t.handleJoinedThreadsStoreChange)
                    ),
                    [t],
                ),
                r.useEffect(
                    () => (
                        tS.A.addChangeListener(t.handleActiveThreadsStoreChange),
                        () => tS.A.removeChangeListener(t.handleActiveThreadsStoreChange)
                    ),
                    [t],
                ),
                [i, t]
            );
        })(m),
        { loadState: N, channels: C } = x,
        { maybeLoadMore: j } = E,
        y = (0, f.bG)([e1.Ay], () => e1.Ay.messageGroupSpacing);
    (t = m),
        (n = x),
        (s = E),
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
        (l = x),
        (a = E),
        r.useEffect(() => {
            function e() {
                let e = l.channels.find((e) => !e.collapsed);
                null != e && a.markChannelRead(e);
            }
            return (
                w._.subscribe(eC.jej.MARK_TOP_INBOX_CHANNEL_READ, e),
                () => {
                    w._.unsubscribe(eC.jej.MARK_TOP_INBOX_CHANNEL_READ, e);
                }
            );
        }, [a, l.channels]),
        (d = E),
        r.useEffect(() => {
            function e(e) {
                if ((0, eQ.hasAnyModalOpen)()) return;
                let t = (0, eW.BF)(e)?.activeElement;
                (0, eW.Cw)(t) ||
                    (((0, e3.isMac)() || (0, e3.isMacWeb)() ? e.metaKey : e.ctrlKey) &&
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
            H.default.track(eC.HAw.OPEN_POPOUT, { type: "Inbox" });
        }, []),
        r.useEffect(
            () => (
                e0.h.subscribe("CONNECTION_OPEN", g),
                () => {
                    e0.h.unsubscribe("CONNECTION_OPEN", g);
                }
            ),
            [g],
        ),
        (0, M.Ay)(
            () => (
                w._.subscribe(eC.jej.INBOX_MARK_ALL_UNREADS_READ, E.markAllRead),
                () => {
                    w._.unsubscribe(eC.jej.INBOX_MARK_ALL_UNREADS_READ, E.markAllRead);
                }
            ),
        );
    let _ = (0, L.A)("unreads", m);
    return 0 === C.length
        ? (0, i.jsx)(eN, {
              Icon: eb.K,
              header: eu.intl.string(eu.t["6XMM+D"]),
              tip: eq().os?.family === "OS X" ? eu.intl.string(eu.t.w9uDOW) : eu.intl.string(eu.t.BiUJC6),
          })
        : (0, i.jsx)(A.hD, {
              navigator: _,
              children: (0, i.jsx)(A.PR, {
                  children: (e) => {
                      let { ref: t, ...n } = e;
                      return (0, i.jsxs)(S.Ch, {
                          ref: (e) => {
                              (m.current = e), (t.current = e?.getScrollerNode() ?? null);
                          },
                          ...n,
                          onScroll: N === nf.Done ? void 0 : j,
                          className: c()(nb.XG, `group-spacing-${y}`),
                          children: [
                              h ? (0, i.jsx)(nT, { setSeenTutorial: u }) : null,
                              (function (e, t, n) {
                                  let {
                                          markChannelRead: s,
                                          markGuildRead: l,
                                          deleteChannel: a,
                                          toggle: r,
                                          getNumUnreadChannels: d,
                                      } = t,
                                      c = null;
                                  return e4().flatMap(e, (e) => {
                                      let t = e.sortOrder !== c;
                                      c = e.sortOrder;
                                      let o = [];
                                      return (
                                          t &&
                                              (e.hasLoadedAnything && e.sortOrder === nA.ReallyOldChannel
                                                  ? o.push(
                                                        (0, i.jsx)(
                                                            te.A,
                                                            {
                                                                className: nO.y,
                                                                contentClassName: nO.$,
                                                                children: eu.intl.string(eu.t.roBMzj),
                                                            },
                                                            "old-divider",
                                                        ),
                                                    )
                                                  : e.hasLoadedAnything &&
                                                    e.sortOrder === nA.NoNotifications &&
                                                    o.push(
                                                        (0, i.jsx)(
                                                            te.A,
                                                            {
                                                                className: nO.y,
                                                                contentClassName: nO.$,
                                                                children: eu.intl.string(eu.t["2Ys7nu"]),
                                                            },
                                                            "disabled-divider",
                                                        ),
                                                    )),
                                          o.push(
                                              (0, i.jsx)(
                                                  nM,
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
                                          o
                                      );
                                  });
                              })(C, E, o),
                              N === nf.Done ? null : (0, i.jsx)(p.y, { className: nb.u1 }),
                          ],
                      });
                  },
              }),
          });
}
function nT(e) {
    let { setSeenTutorial: t } = e;
    return (0, i.jsxs)("div", {
        className: nb.d$,
        children: [
            (0, i.jsx)("div", { className: nb.cm, children: (0, i.jsx)(eb.K, { size: "md", color: "currentColor" }) }),
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsx)($.D, {
                        className: nb.__invalid_tutorialHeader,
                        variant: "heading-md/semibold",
                        children: eu.intl.string(eu.t.vZPktJ),
                    }),
                    (0, i.jsx)(q.E, {
                        color: "text-default",
                        variant: "text-sm/normal",
                        children: eu.intl.string(eu.t.vWkIII),
                    }),
                    (0, i.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: nb.dh,
                        children: (0, i.jsx)(N.$, {
                            variant: "primary",
                            size: "sm",
                            text: eu.intl.string(eu.t["+IrDzN"]),
                            onClick: t,
                        }),
                    }),
                ],
            }),
        ],
    });
}
function nk() {
    return (0, i.jsx)(eN, {
        Icon: eb.K,
        disableStars: !0,
        header: eu.intl.string(eu.t["KG/ynf"]),
        tip: eu.intl.string(eu.t.cvcKzX),
    });
}
function nG() {
    return (0, i.jsx)(e6, { onClick: () => w._.dispatch(eC.jej.INBOX_MARK_ALL_UNREADS_READ) });
}
var nF = n(716030);
function nU(e) {
    let { tab: t, setTab: n, closePopout: s } = e,
        { enabled: l, inInbox: a } = ek.A.useConfig({ location: "RecentsPopout" }),
        r = (0, eF.Sc)(),
        d = (0, eO.bG)([eG.A], () => eG.A.getOverdueMessageReminderCount());
    return (0, i.jsxs)("div", {
        className: nF.wx,
        children: [
            (0, i.jsxs)("div", {
                className: nF.qd,
                children: [
                    (0, i.jsx)(eb.K, { size: "md", color: "currentColor", className: nF.yH }),
                    (0, i.jsx)($.D, {
                        className: nF.Hi,
                        variant: "text-lg/semibold",
                        color: "interactive-text-active",
                        children: eu.intl.string(eu.t.GSmTKJ),
                    }),
                    (0, i.jsxs)(eD.s, {
                        className: nF.ne,
                        onClick: (e) => e.stopPropagation(),
                        focusProps: { enabled: !1 },
                        "aria-label": eu.intl.string(eu.t["8k+6QY"]),
                        children: [(0, i.jsx)(nP, { tab: t }), (0, i.jsx)(eB, { closePopout: s })],
                    }),
                ],
            }),
            (0, i.jsx)("div", {
                className: nF.YF,
                children: (0, i.jsxs)(eT.V, {
                    selectedItem: t,
                    type: "top",
                    look: "brand",
                    onItemSelect: n,
                    className: nF.$H,
                    children: [
                        (0, i.jsx)(eT.V.Item, {
                            id: h.Y2.UNREADS,
                            "aria-label": eu.intl.string(eu.t.sRUdB8),
                            className: nF.Mf,
                            children: (0, i.jsx)("span", { className: nF.Gn, children: eu.intl.string(eu.t.sRUdB8) }),
                        }),
                        (0, i.jsx)(eT.V.Item, {
                            "aria-label": eu.intl.string(eu.t.GRZF96),
                            id: h.Y2.MENTIONS,
                            className: nF.Mf,
                            children: (0, i.jsx)("span", { className: nF.Gn, children: eu.intl.string(eu.t.GRZF96) }),
                        }),
                        l && a
                            ? (0, i.jsx)(eT.V.Item, {
                                  "aria-label": eu.intl.string(eu.t["2pAkDA"]),
                                  id: h.Y2.BOOKMARKS,
                                  className: nF.Mf,
                                  children: (0, i.jsx)("span", {
                                      className: nF.Gn,
                                      children:
                                          0 === d
                                              ? eu.intl.string(eu.t["2pAkDA"])
                                              : eu.intl.formatToPlainString(eu.t.I4fryG, { count: d }),
                                  }),
                              })
                            : null,
                        r
                            ? (0, i.jsx)(eT.V.Item, {
                                  "aria-label": eu.intl.string(eu.t.Fn6Odn),
                                  id: h.Y2.SCHEDULED,
                                  className: nF.Mf,
                                  children: (0, i.jsx)("span", {
                                      className: nF.Gn,
                                      children: eu.intl.string(eu.t.Fn6Odn),
                                  }),
                              })
                            : null,
                    ],
                }),
            }),
        ],
    });
}
function nP(e) {
    let { tab: t } = e;
    return t === h.Y2.UNREADS ? (0, i.jsx)(nG, {}) : t === h.Y2.MENTIONS ? (0, i.jsx)(e$, {}) : null;
}
var nH = n(695366),
    nw = n(406810),
    nK = n(285796),
    nB = n(151282),
    nz = n(199160),
    nJ =
        (((a = {})[(a.SCHEDULED = 0)] = "SCHEDULED"),
        (a[(a.ERROR_SCHEDULED_MESSAGES_DISABLED = 1)] = "ERROR_SCHEDULED_MESSAGES_DISABLED"),
        (a[(a.ERROR_USER_NOT_FOUND = 2)] = "ERROR_USER_NOT_FOUND"),
        (a[(a.ERROR_USER_CANNOT_USE_SCHEDULED_MESSAGES = 3)] = "ERROR_USER_CANNOT_USE_SCHEDULED_MESSAGES"),
        (a[(a.ERROR_CHANNEL_NOT_FOUND = 4)] = "ERROR_CHANNEL_NOT_FOUND"),
        (a[(a.ERROR_SEND_FAILED = 5)] = "ERROR_SEND_FAILED"),
        a),
    nX = n(970244),
    nY = n(560502);
let nV = { offset: { left: 4, right: -12 } };
function n$(e) {
    let { onJump: t } = e;
    r.useEffect(() => {
        (0, nB.sy)();
    }, []);
    let n = (0, f.bG)([nz.A], () => nz.A.getScheduledMessagesForInbox()),
        s = (0, f.bG)([nz.A], () => nz.A.loading),
        l = (0, f.bG)([nz.A], () => nz.A.getMessagesPendingDeletion()),
        a = r.useMemo(
            () => Object.values(n).sort((e, t) => (new Date(e.sendAtTimestamp) > new Date(t.sendAtTimestamp) ? -1 : 1)),
            [n],
        ),
        d = r.useRef(null),
        c = (0, L.A)("scheduled-messages", d);
    return s
        ? (0, i.jsx)(p.y, { className: ej.Lq })
        : 0 === a.length
          ? (0, i.jsx)(eN, { Icon: nw.O, header: eu.intl.string(eu.t.aJQZfZ), tip: eu.intl.string(eu.t.rCN4pN) })
          : (0, i.jsx)(A.hD, {
                navigator: c,
                children: (0, i.jsx)(A.PR, {
                    children: (e) => {
                        let { ref: n, ...s } = e;
                        return (0, i.jsx)(S.Ch, {
                            className: nY.XG,
                            ref: (e) => {
                                (d.current = e), (n.current = e?.getScrollerNode() ?? null);
                            },
                            ...s,
                            children: a.map((e) =>
                                (0, i.jsx)(
                                    nZ,
                                    {
                                        scheduledMessage: e,
                                        channelId: e.scheduledMessage.channelId,
                                        isPendingDeletion: l.has(e.scheduledMessageId),
                                        onJump: t,
                                    },
                                    e.scheduledMessageId,
                                ),
                            ),
                        });
                    },
                }),
            });
}
let nZ = r.memo(function (e) {
    let { scheduledMessage: t, channelId: n, isPendingDeletion: s, onJump: l } = e,
        a = (0, f.bG)([F.A], () => F.A.getChannel(n)),
        { isError: d, stateMessage: o } = (function (e) {
            switch (e) {
                case nJ.SCHEDULED:
                    return { isError: !1, stateMessage: eu.intl.string(eu.t.Fn6Odn) };
                case nJ.ERROR_CHANNEL_NOT_FOUND:
                    return { isError: !0, stateMessage: eu.intl.string(eu.t.v5O2dK) };
                case nJ.ERROR_USER_NOT_FOUND:
                    return { isError: !0, stateMessage: eu.intl.string(eu.t.j8uIfG) };
                case nJ.ERROR_USER_CANNOT_USE_SCHEDULED_MESSAGES:
                    return { isError: !0, stateMessage: eu.intl.string(eu.t["w6zHX/"]) };
                case nJ.ERROR_SEND_FAILED:
                    return { isError: !0, stateMessage: eu.intl.string(eu.t.pflV7z) };
                case nJ.ERROR_SCHEDULED_MESSAGES_DISABLED:
                    return { isError: !0, stateMessage: eu.intl.string(eu.t.j8uIfG) };
                default:
                    (0, tC.xb)(e);
            }
        })(t.state),
        h = r.useCallback(() => {
            (0, nB.mk)(t.scheduledMessageId)
                .then(() => {
                    (0, nX.Re)();
                })
                .catch((e) => {
                    (0, nX.kM)(e.message);
                });
        }, [t.scheduledMessageId]),
        u = r.useCallback(() => {
            (0, nX.CI)({ scheduledMessage: t });
        }, [t]);
    return null == a
        ? null
        : (0, i.jsxs)(
              "div",
              {
                  className: ej.aP,
                  children: [
                      (0, i.jsx)(eA, {
                          itemId: `header-${t.record.id}`,
                          channel: a,
                          onClick: (e) => {
                              (0, k.iN)(a.id), l(e);
                          },
                          collapsed: !1,
                          children: (0, i.jsxs)(C.e, {
                              size: "sm",
                              className: eg.GC,
                              children: [
                                  (0, i.jsx)(x.m, {
                                      text: eu.intl.string(eu.t.SBcdAN),
                                      ariaHidden: !0,
                                      children: (0, i.jsx)(j.K, {
                                          variant: "secondary",
                                          size: "sm",
                                          icon: nw.O,
                                          "aria-label": eu.intl.string(eu.t.SBcdAN),
                                          onClick: u,
                                      }),
                                  }),
                                  (0, i.jsx)(x.m, {
                                      text: eu.intl.string(eu.t.O3sL8F),
                                      ariaHidden: !0,
                                      children: (0, i.jsx)(j.K, {
                                          variant: "secondary",
                                          size: "sm",
                                          icon: nK.a,
                                          "aria-label": eu.intl.string(eu.t.O3sL8F),
                                          onClick: h,
                                      }),
                                  }),
                              ],
                          }),
                      }),
                      (0, i.jsxs)("div", {
                          className: c()(nY.h5, d ? nY.z3 : void 0),
                          children: [
                              d ? (0, i.jsx)(nH.E, { size: "xs" }) : (0, i.jsx)(nw.O, { size: "xs" }),
                              (0, i.jsx)(q.E, {
                                  variant: "text-xs/medium",
                                  color: d ? "text-feedback-critical" : "text-muted",
                                  children: d
                                      ? o
                                      : eu.intl.formatToPlainString(eu.t["CvHu/j"], {
                                            timestamp: new Date(t.sendAtTimestamp).valueOf(),
                                        }),
                              }),
                          ],
                      }),
                      s
                          ? (0, i.jsx)(p.y, { className: ej.Lq })
                          : (0, i.jsx)(
                                T.A,
                                {
                                    message: t.record,
                                    channel: a,
                                    className: ej.YD,
                                    compact: G.hH.getSetting(),
                                    animateAvatar: !1,
                                    focusProps: nV,
                                },
                                t.record.id,
                            ),
                  ],
              },
              t.record.id,
          );
});
var nq = n(978313);
function nW(e) {
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
        showForLater: x,
    } = e;
    return (0, i.jsx)(u.l, {
        "aria-label": eu.intl.string(eu.t.GSmTKJ),
        className: t,
        children: (0, i.jsx)("div", {
            className: c()(nq.k, { [nq.q]: n }),
            children: (0, i.jsx)(g.F, {
                component: (0, i.jsx)(nU, { tab: s, setTab: l, closePopout: a }),
                children:
                    s === h.Y2.MENTIONS
                        ? (0, i.jsx)(eM, { onJump: r })
                        : f && x && s === h.Y2.BOOKMARKS
                          ? (0, i.jsx)(m.J, { closePopout: a })
                          : s === h.Y2.SCHEDULED
                            ? (0, i.jsx)(n$, { onJump: r })
                            : (0, i.jsx)(o.tH, {
                                  fallback: (0, i.jsx)(nk, {}),
                                  children: (0, i.jsx)(nD, {
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
