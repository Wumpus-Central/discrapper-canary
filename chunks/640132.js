n.d(t, { default: () => eD });
var l = n(627968),
    i = n(64700),
    r = n(696208),
    a = n(224640),
    s = n(20742),
    o = n(430993),
    c = n(17928),
    d = n(430690),
    u = n(442433),
    _ = n(793574),
    h = n(688810),
    p = n(915089),
    A = n(857071),
    g = n(734057),
    m = n(71393),
    f = n(954571),
    E = n(645034),
    v = n(285059),
    x = n(698441),
    I = n(485394),
    T = n(826383);
n(321073);
var C = n(988794),
    N = n(530209),
    y = n(974930),
    S = n(691012),
    b = n(428978),
    j = n(850183),
    R = n(761508),
    L = n(985018),
    w = n(378787);
function P(e) {
    let { selectedTab: t, onTabSelected: n, userCount: r } = e,
        a = i.useRef(null);
    return (
        i.useEffect(() => a.current?.ref?.blur?.(), []),
        (0, l.jsx)("div", {
            className: w.kL,
            children: (0, l.jsxs)(R.V, {
                className: w.$H,
                "aria-label": L.intl.string(L.t["+1H47t"]),
                selectedItem: t,
                type: "top",
                onItemSelect: n,
                children: [
                    (0, l.jsx)(R.V.Item, { className: w.YU, id: C.al.EVENT_INFO, children: L.intl.string(L.t.iW6Xuo) }),
                    (0, l.jsx)(R.V.Item, {
                        className: w.YU,
                        id: C.al.RSVP_LIST,
                        children: L.intl.formatToPlainString(L.t["ZrTT/N"], { userCount: r }),
                    }),
                ],
            }),
        })
    );
}
var O = n(503698),
    D = n.n(O),
    M = n(97808),
    U = n(778712),
    k = n(834730),
    G = n(939249),
    F = n(463930),
    V = n(140735),
    B = n(781696),
    H = n(177953),
    Z = n(534514),
    Y = n(376728),
    W = n(548118),
    J = n(714991),
    z = n(967144),
    K = n(660110),
    $ = n(975732),
    q = n(696451),
    Q = n(427262),
    X = n(408607),
    ee = n(722260),
    et = n(563312),
    en = n(794782),
    el = n(847494),
    ei = n(620018),
    er = n(103355),
    ea = n(167630),
    es = n(478799);
function eo(e) {
    let { creator: t, guildId: n, channelId: i } = e,
        { analyticsLocations: r } = (0, h.Ay)(),
        a = (0, c.bG)([q.Ay], () => q.Ay.getMember(n, t.id), [t, n]),
        s = (0, z.gn)(a?.guildId, a?.userId, a?.colorStrings ?? null);
    return (0, l.jsxs)("div", {
        className: es.nM,
        children: [
            (0, l.jsx)(M.eu, {
                size: U._3.SIZE_20,
                src: t.getAvatarURL(n, 20),
                "aria-label": a?.nick ?? Q.Ay.getName(t),
                className: es.Kk,
            }),
            (0, l.jsx)(k.E, {
                color: "text-default",
                variant: "text-sm/normal",
                children: L.intl.format(L.t["66DLFs"], {
                    usernameHook: function () {
                        return (0, l.jsx)(
                            G.D,
                            {
                                onClick: () =>
                                    (0, $.openUserProfileModal)({
                                        guildId: n,
                                        channelId: i,
                                        userId: t.id,
                                        roleId: a?.colorRoleId,
                                        sourceAnalyticsLocations: r,
                                    }),
                                className: es.xL,
                                tag: "span",
                                role: "link",
                                children: (0, l.jsx)(F.g, {
                                    name: a?.nick ?? Q.Ay.getName(t),
                                    colorString: a?.colorString ?? null,
                                    colorStrings: s,
                                }),
                            },
                            "open-user-profile",
                        );
                    },
                }),
            }),
        ],
    });
}
function ec(e) {
    let { guild: t, onClick: n, onClose: r } = e,
        a = i.useCallback(
            (e) => {
                n?.(e), null != n && r?.(e);
            },
            [n, r],
        ),
        s = (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(V.A, { children: L.intl.string(L.t["5qyruI"]) }),
                (0, l.jsx)(W.Ay, {
                    guild: t,
                    size: W.Ay.Sizes.MINI,
                    active: !0,
                    "aria-hidden": !0,
                    className: D()(es.$f, es.Kk),
                }),
                (0, l.jsx)(J.A, {
                    guild: t,
                    tooltipPosition: "top",
                    tooltipColor: B.ST.Colors.PRIMARY,
                    size: 16,
                    className: es.n2,
                }),
                (0, l.jsx)(k.E, {
                    color: "text-default",
                    variant: "text-sm/normal",
                    className: es.yX,
                    children: t.name,
                }),
            ],
        });
    return (0, l.jsx)("div", {
        className: es.nM,
        children: null != n ? (0, l.jsx)(G.D, { onClick: a, className: es.vk, role: "link", children: s }) : s,
    });
}
function ed(e) {
    let { userCount: t, onClick: n } = e;
    return (0, l.jsxs)("div", {
        className: es.nM,
        children: [
            (0, l.jsx)(H.n, {
                size: "custom",
                color: "currentColor",
                width: 20,
                height: 20,
                className: es.Kk,
                "aria-label": L.intl.string(L.t["9Oq93m"]),
            }),
            (0, l.jsx)(G.D, {
                onClick: n,
                className: es.tK,
                children: (0, l.jsx)(k.E, {
                    color: "text-default",
                    variant: "text-sm/normal",
                    children: L.intl.format(L.t["+DLsD8"], { count: t }),
                }),
            }),
        ],
    });
}
function eu(e) {
    let {
            guildEvent: t,
            guild: n,
            channel: r,
            headerId: a,
            onClose: s,
            onClickInterestedCount: o,
            containerRef: d,
            recurrenceId: u,
            setRecurrenceId: _,
        } = e,
        h = (0, c.bG)([m.A], () => null != m.A.getGuild(n.id), [n.id]),
        { startTime: p, endTime: A } = (0, et.Ay)(t, u),
        g = (0, T.A)(t.guild_id, t.id, u),
        f = i.useCallback(
            (e) => {
                e.stopPropagation(), null != t && (0, Y.rq)(t);
            },
            [t],
        ),
        E = (0, ee.A)(u, t.id),
        x = (0, X.A)(t);
    i.useEffect(() => {
        v.A.getGuildEventUserCounts(n.id, t.id, null != u ? [u] : []), v.A.getGuildEventsForCurrentUser(n.id);
    }, [n.id, t.id, u]);
    let I = (0, en.Sn)(t.recurrence_rule),
        N = t?.scheduled_start_time != null ? (0, y.j)(E, p, new Date(t?.scheduled_start_time)) : null;
    return (0, l.jsxs)("div", {
        ref: d,
        children: [
            (0, l.jsxs)("div", {
                className: es.wx,
                children: [
                    (0, l.jsx)(er.L, {
                        startTime: p.toISOString(),
                        endTime: A?.toISOString(),
                        status: N ?? t.status,
                        eventType: t.entity_type,
                        guildEventId: t.id,
                        recurrenceId: u,
                    }),
                    (0, l.jsx)(Z.D, {
                        id: a,
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        className: es.DD,
                        children: t.name,
                    }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: es.rf,
                children: [
                    (0, l.jsx)(ec, { guild: n, onClick: h ? f : void 0, onClose: s }),
                    (0, l.jsx)(ea.A, { guildScheduledEvent: t, channel: r, onClose: s }),
                    null != g && (0, l.jsx)(ed, { userCount: g, onClick: o }),
                    null != x && (0, l.jsx)(eo, { creator: x, guildId: n.id, channelId: r?.id }, x.id),
                    null != t.description &&
                        (0, l.jsx)("div", {
                            className: es.h_,
                            children: (0, l.jsx)(el.A, { description: t.description, truncate: !1, guildId: n.id }),
                        }),
                    C.Tn.has(t.entity_type) &&
                        (0, l.jsx)(K.A, { noBackground: !0, divider: K.V.TOP, channelId: r?.id }),
                ],
            }),
            null != I && (0, l.jsx)("hr", { className: es.yF }),
            null != I &&
                (0, l.jsx)(ei.A, {
                    guildId: n.id,
                    recurrenceRule: I,
                    guildEventId: t.id,
                    onRecurrenceClick: _,
                    hideScroller: !0,
                    activeRecurrenceId: u,
                }),
        ],
    });
}
var e_ = n(364522),
    eh = n(289873),
    ep = n(297413),
    eA = n(710358),
    eg = n(342296),
    em = n(495544),
    ef = n(290863),
    eE = n(461213),
    ev = n(287809),
    ex = n(610324);
function eI(e) {
    let { children: t } = e;
    return (0, l.jsxs)("div", {
        className: ex.do,
        children: [
            (0, l.jsx)(eA.A, {
                children: (0, l.jsx)("div", {
                    className: ex.n1,
                    children: (0, l.jsx)(H.n, {
                        size: "custom",
                        color: "currentColor",
                        height: 40,
                        width: 40,
                        className: ex.Kk,
                    }),
                }),
            }),
            t,
        ],
    });
}
function eT() {
    return (0, l.jsx)(eI, {
        children: (0, l.jsx)(Z.D, {
            color: "text-strong",
            variant: "heading-xl/semibold",
            className: ex.DD,
            children: L.intl.string(L.t.hW0mBR),
        }),
    });
}
function eC() {
    return (0, l.jsx)(eI, {
        children: (0, l.jsx)(Z.D, {
            color: "text-default",
            variant: "heading-md/semibold",
            className: ex.JU,
            children: L.intl.string(L.t.obChXk),
        }),
    });
}
function eN(e) {
    let { count: t } = e;
    return (0, l.jsxs)("div", {
        className: ex.f0,
        children: [
            (0, l.jsx)("div", {
                className: D()(ex.Pc, ex.uY),
                children: (0, l.jsx)(H.n, {
                    size: "custom",
                    color: "currentColor",
                    height: 14,
                    width: 14,
                    className: ex.Kk,
                }),
            }),
            (0, l.jsx)(k.E, {
                color: "text-default",
                variant: "text-md/normal",
                children: L.intl.format(L.t.BdQTfR, { userRemainCount: t }),
            }),
        ],
    });
}
function ey(e) {
    let { eventUser: t, guildId: n, onContextMenu: r } = e,
        a = i.useRef(null),
        s = (0, c.bG)([ev.default], () => ev.default.getUser(t.user_id)),
        o = (0, c.bG)(
            [eE.A, ef.A, em.default],
            () => (t.user_id === em.default.getId() ? eE.A.getStatus() : ef.A.getStatus(t.user_id, n)),
            [t.user_id, n],
        );
    return null == s
        ? null
        : (0, l.jsx)(eg.A, {
              targetElementRef: a,
              userId: t.user_id,
              guildId: n,
              position: "left",
              spacing: 16,
              children: (e, i) => {
                  let { isShown: c } = i;
                  return (0, l.jsxs)(G.D, {
                      innerRef: a,
                      className: D()(ex.f0, ex.fv, { [ex.wH]: c }),
                      onContextMenu: (e) => r(e, s),
                      ...e,
                      children: [
                          (0, l.jsx)(M.eu, {
                              src: s.getAvatarURL(n, 24),
                              "aria-label": s.username,
                              size: U._3.SIZE_24,
                              className: ex.uY,
                              status: o,
                          }),
                          (0, l.jsx)(ep.A, {
                              user: s,
                              className: ex.sY,
                              discriminatorClass: ex.XU,
                              nick: t.member?.nick,
                          }),
                      ],
                  });
              },
          });
}
function eS(e) {
    let { eventUsers: t, guildId: n, usersNotShownCount: i = 0, onContextMenu: r } = e;
    return (0, l.jsxs)(e_.Ip, {
        className: ex.DK,
        children: [
            t.map((e) => (0, l.jsx)(ey, { guildId: n, eventUser: e, onContextMenu: r }, e.user_id)),
            i > 0 && (0, l.jsx)(eN, { count: i }),
        ],
    });
}
function eb(e) {
    let { children: t, style: n } = e;
    return (0, l.jsx)("div", { className: ex.kL, style: null != n ? n : {}, children: t });
}
function ej(e) {
    let { children: t, height: n } = e;
    return (0, l.jsx)(eb, { style: { height: n }, children: t });
}
function eR(e) {
    let { guildEvent: t, recurrenceId: i, eventUsers: r, loading: a, error: s, containerHeight: o } = e,
        c = (0, T.A)(t.guild_id, t.id, i);
    if (a && 0 === r.length)
        return (0, l.jsx)(ej, {
            height: o,
            children: (0, l.jsx)(eh.y, { type: eh.y.Type.SPINNING_CIRCLE, className: ex.u1 }),
        });
    if (null != s && 0 === r.length) return (0, l.jsx)(ej, { height: o, children: (0, l.jsx)(eC, {}) });
    let d = 0;
    return (
        r.length >= C.C1 && c > C.C1 && (d = Math.max(c - r.length, 0)),
        0 === r.length
            ? (0, l.jsx)(ej, { height: o, children: (0, l.jsx)(eT, {}) })
            : (0, l.jsx)(eb, {
                  children: (0, l.jsx)(eS, {
                      eventUsers: r,
                      guildId: t.guild_id,
                      onContextMenu: function (e, t) {
                          (0, u.L3)(e, async () => {
                              let { default: e } = await Promise.all([
                                  n.e("97262"),
                                  n.e("24170"),
                                  n.e("32418"),
                                  n.e("6990"),
                              ]).then(n.bind(n, 668569));
                              return (n) => (0, l.jsx)(e, { ...n, user: t });
                          });
                      },
                      usersNotShownCount: d,
                  }),
              })
    );
}
var eL = n(482857),
    ew = n(652215),
    eP = n(832223);
function eO(e) {
    let { guildEvent: t, guild: n, channel: i, onActionTaken: a, recurrenceId: s } = e,
        o = (0, x.Fd)(t),
        d = (0, c.bG)([x.Ay], () => x.Ay.isInterestedInEventRecurrence(t.id, s), [s, t]),
        u = (0, I.Ay)(t),
        _ = (0, c.bG)([A.A], () => A.A.isLurking(n.id), [n.id]),
        h = (0, N.e)(i?.id, t.id),
        p = (0, eL.A)({ guild: n, channel: i, guildScheduledEvent: t, isActive: o, recurrenceId: s, onActionTaken: a }),
        g = (0, b.Zq)({
            isActive: o,
            isUserLurking: _,
            rsvped: d,
            isChannelPublic: h,
            canInvite: u,
            entityType: t.entity_type,
            ...p,
        }),
        m =
            null != p.onContextMenu
                ? (0, l.jsx)("div", { className: eP.Zv, children: (0, l.jsx)(b.jD, { onClick: p.onContextMenu }) })
                : void 0;
    return (0, l.jsx)(r.H, { leading: m, actions: g });
}
let eD = (e) => {
    let t,
        r,
        { guildScheduledEventId: A, transitionState: I, initialRecurrenceId: N, onClose: b } = e,
        { analyticsLocations: R } = (0, h.Ay)(_.A.GUILD_EVENT_MODAL),
        [L, w] = i.useState(N),
        O = (0, c.bG)([x.Ay], () => x.Ay.getGuildScheduledEvent(A), [A]),
        D = O?.id,
        M = O?.guild_id,
        U = (0, c.bG)([m.A], () => m.A.getGuild(M), [M]),
        k = O?.channel_id,
        G = (0, c.bG)([g.A], () => g.A.getChannel(k), [k]),
        F = (0, p.GV)(),
        [V, B] = i.useState(C.al.EVENT_INFO),
        H =
            ((t = (0, c.yK)([x.Ay], () => Object.values(x.Ay.getUsersForGuildEvent(D, null)), [D])),
            (r = (0, c.yK)([x.Ay], () => Object.values(x.Ay.getUsersForGuildEvent(D, L)), [D, L])),
            (0, i.useMemo)(() => {
                let e = r.reduce((e, t) => ((e[t.user_id] = t), e), {}),
                    n = t.filter((t) => {
                        let n = e[t.user_id];
                        return null == n || n.response === C.Qi.INTERESTED;
                    }),
                    l = r.filter((e) => e.response === C.Qi.INTERESTED),
                    i = new Set(),
                    a = [],
                    s = (e) => {
                        i.has(e.user_id) || (a.push(e), i.add(e.user_id));
                    };
                return n.forEach(s), l.forEach(s), a;
            }, [t, r])),
        Z = null != O ? (0, S.A)(O) : null,
        Y = i.useCallback(
            (e) => {
                null != Z &&
                    (0, u.L3)(e, async () => {
                        let { default: e } = await n.e("31658").then(n.bind(n, 928625));
                        return (t) => (0, l.jsx)(e, { ...t, imageUrl: Z });
                    });
            },
            [Z],
        ),
        W = (0, T.A)(M, D, L),
        [J, { loading: z, error: K }] = (0, E.A)(() => v.A.getGuildEventUsers(O?.id, L, M));
    i.useEffect(() => {
        null == O ? b() : f.default.track(ew.HAw.OPEN_MODAL, { type: C.BV, guild_id: O.guild_id });
    }, [O, b]);
    let $ = i.useRef(null),
        [q, Q] = i.useState(680);
    i.useLayoutEffect(() => {
        let e = new ResizeObserver((e) => {
            e.length > 0 && Q(e[0].contentRect.width);
        });
        return null != $.current && e.observe($.current), () => e.disconnect();
    }, [$]);
    let X = i.useRef(null),
        [ee, et] = i.useState(0);
    if (
        (i.useLayoutEffect(() => {
            let e = 16 * (O?.recurrence_rule != null);
            et((X?.current?.offsetHeight ?? 0) + e);
        }, [X, O?.recurrence_rule]),
        null == O || null == U)
    )
        return null;
    let en = (e) => {
            e !== V && (e === C.al.RSVP_LIST && J(), B(e));
        },
        el = L ?? (0, y.G3)(O);
    return (0, l.jsx)(h.f5, {
        value: R,
        children: (0, l.jsxs)(a.d, {
            transitionState: I,
            size: "lg",
            onClose: b,
            children: [
                (0, l.jsx)(s.rQ, { title: O.name }),
                O?.image != null &&
                    null != Z &&
                    (0, l.jsx)("div", { onContextMenu: Y, children: (0, l.jsx)(j.A, { source: Z, className: eP.vK }) }),
                (0, l.jsx)(o.c, {
                    controls: (0, l.jsx)(P, { selectedTab: V, onTabSelected: en, userCount: W }),
                    children: (0, l.jsx)("div", {
                        className: eP.kL,
                        ref: $,
                        children: (0, l.jsxs)(d.t, {
                            activeSlide: V,
                            width: q,
                            centered: !1,
                            children: [
                                (0, l.jsx)(d.q, {
                                    id: C.al.EVENT_INFO,
                                    children: (0, l.jsx)(eu, {
                                        guildEvent: O,
                                        guild: U,
                                        channel: G,
                                        headerId: F,
                                        onClose: b,
                                        onClickInterestedCount: () => en(C.al.RSVP_LIST),
                                        containerRef: X,
                                        recurrenceId: el,
                                        setRecurrenceId: w,
                                    }),
                                }),
                                (0, l.jsx)(d.q, {
                                    id: C.al.RSVP_LIST,
                                    children: (0, l.jsx)(eR, {
                                        guildEvent: O,
                                        recurrenceId: el,
                                        eventUsers: H,
                                        loading: z,
                                        containerHeight: ee,
                                        error: K,
                                    }),
                                }),
                            ],
                        }),
                    }),
                }),
                (0, l.jsx)(eO, { guildEvent: O, guild: U, channel: G, onActionTaken: b, recurrenceId: el }),
            ],
        }),
    });
};
