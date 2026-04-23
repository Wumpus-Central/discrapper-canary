n.d(t, { default: () => eP });
var l = n(627968),
    i = n(64700),
    r = n(696208),
    a = n(224640),
    s = n(20742),
    d = n(430993),
    c = n(17928),
    o = n(430690),
    u = n(442433),
    _ = n(793574),
    g = n(688810),
    h = n(915089),
    f = n(857071),
    x = n(734057),
    v = n(71393),
    m = n(954571),
    p = n(645034),
    A = n(285059),
    I = n(698441),
    E = n(485394),
    j = n(826383);
n(321073);
var b = n(988794),
    N = n(530209),
    C = n(974930),
    y = n(691012),
    k = n(428978),
    S = n(850183),
    T = n(761508),
    L = n(985018),
    D = n(378787);
function R(e) {
    let { selectedTab: t, onTabSelected: n, userCount: r } = e,
        a = i.useRef(null);
    return (
        i.useEffect(() => a.current?.ref?.blur?.(), []),
        (0, l.jsx)("div", {
            className: D.kL,
            children: (0, l.jsxs)(T.V, {
                className: D.$H,
                "aria-label": L.intl.string(L.t["+1H47t"]),
                selectedItem: t,
                type: "top",
                onItemSelect: n,
                children: [
                    (0, l.jsx)(T.V.Item, { className: D.YU, id: b.al.EVENT_INFO, children: L.intl.string(L.t.iW6Xuo) }),
                    (0, l.jsx)(T.V.Item, {
                        className: D.YU,
                        id: b.al.RSVP_LIST,
                        children: L.intl.formatToPlainString(L.t["ZrTT/N"], { userCount: r }),
                    }),
                ],
            }),
        })
    );
}
var w = n(503698),
    P = n.n(w),
    G = n(97808),
    M = n(778712),
    B = n(834730),
    K = n(939249),
    V = n(463930),
    O = n(140735),
    U = n(781696),
    H = n(177953),
    X = n(534514),
    z = n(376728),
    Y = n(548118),
    F = n(714991),
    W = n(967144),
    Z = n(660110),
    J = n(975732),
    q = n(696451),
    Q = n(427262),
    $ = n(408607),
    ee = n(722260),
    et = n(563312),
    en = n(794782),
    el = n(847494),
    ei = n(620018),
    er = n(103355),
    ea = n(167630),
    es = n(478799);
function ed(e) {
    let { creator: t, guildId: n, channelId: i } = e,
        { analyticsLocations: r } = (0, g.Ay)(),
        a = (0, c.bG)([q.Ay], () => q.Ay.getMember(n, t.id), [t, n]),
        s = (0, W.gn)(a?.guildId, a?.userId, a?.colorStrings ?? null);
    return (0, l.jsxs)("div", {
        className: es.nM,
        children: [
            (0, l.jsx)(G.eu, {
                size: M._3.SIZE_20,
                src: t.getAvatarURL(n, 20),
                "aria-label": a?.nick ?? Q.Ay.getName(t),
                className: es.Kk,
            }),
            (0, l.jsx)(B.E, {
                color: "text-default",
                variant: "text-sm/normal",
                children: L.intl.format(L.t["66DLFs"], {
                    usernameHook: function () {
                        return (0, l.jsx)(
                            K.D,
                            {
                                onClick: () =>
                                    (0, J.openUserProfileModal)({
                                        guildId: n,
                                        channelId: i,
                                        userId: t.id,
                                        roleId: a?.colorRoleId,
                                        sourceAnalyticsLocations: r,
                                    }),
                                className: es.xL,
                                tag: "span",
                                role: "link",
                                children: (0, l.jsx)(V.g, {
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
                (0, l.jsx)(O.A, { children: L.intl.string(L.t["5qyruI"]) }),
                (0, l.jsx)(Y.Ay, {
                    guild: t,
                    size: Y.Ay.Sizes.MINI,
                    active: !0,
                    "aria-hidden": !0,
                    className: P()(es.$f, es.Kk),
                }),
                (0, l.jsx)(F.A, {
                    guild: t,
                    tooltipPosition: "top",
                    tooltipColor: U.ST.Colors.PRIMARY,
                    size: 16,
                    className: es.n2,
                }),
                (0, l.jsx)(B.E, {
                    color: "text-default",
                    variant: "text-sm/normal",
                    className: es.yX,
                    children: t.name,
                }),
            ],
        });
    return (0, l.jsx)("div", {
        className: es.nM,
        children: null != n ? (0, l.jsx)(K.D, { onClick: a, className: es.vk, role: "link", children: s }) : s,
    });
}
function eo(e) {
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
            (0, l.jsx)(K.D, {
                onClick: n,
                className: es.tK,
                children: (0, l.jsx)(B.E, {
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
            onClickInterestedCount: d,
            containerRef: o,
            recurrenceId: u,
            setRecurrenceId: _,
        } = e,
        g = (0, c.bG)([v.A], () => null != v.A.getGuild(n.id), [n.id]),
        { startTime: h, endTime: f } = (0, et.Ay)(t, u),
        x = (0, j.A)(t.guild_id, t.id, u),
        m = i.useCallback(
            (e) => {
                e.stopPropagation(), null != t && (0, z.rq)(t);
            },
            [t],
        ),
        p = (0, ee.A)(u, t.id),
        I = (0, $.A)(t);
    i.useEffect(() => {
        A.A.getGuildEventUserCounts(n.id, t.id, null != u ? [u] : []), A.A.getGuildEventsForCurrentUser(n.id);
    }, [n.id, t.id, u]);
    let E = (0, en.Sn)(t.recurrence_rule),
        N = t?.scheduled_start_time != null ? (0, C.j)(p, h, new Date(t?.scheduled_start_time)) : null;
    return (0, l.jsxs)("div", {
        ref: o,
        children: [
            (0, l.jsxs)("div", {
                className: es.wx,
                children: [
                    (0, l.jsx)(er.L, {
                        startTime: h.toISOString(),
                        endTime: f?.toISOString(),
                        status: N ?? t.status,
                        eventType: t.entity_type,
                        guildEventId: t.id,
                        recurrenceId: u,
                    }),
                    (0, l.jsx)(X.D, {
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
                    (0, l.jsx)(ec, { guild: n, onClick: g ? m : void 0, onClose: s }),
                    (0, l.jsx)(ea.A, { guildScheduledEvent: t, channel: r, onClose: s }),
                    null != x && (0, l.jsx)(eo, { userCount: x, onClick: d }),
                    null != I && (0, l.jsx)(ed, { creator: I, guildId: n.id, channelId: r?.id }, I.id),
                    null != t.description &&
                        (0, l.jsx)("div", {
                            className: es.h_,
                            children: (0, l.jsx)(el.A, { description: t.description, truncate: !1, guildId: n.id }),
                        }),
                    b.Tn.has(t.entity_type) &&
                        (0, l.jsx)(Z.A, { noBackground: !0, divider: Z.V.TOP, channelId: r?.id }),
                ],
            }),
            null != E && (0, l.jsx)("hr", { className: es.yF }),
            null != E &&
                (0, l.jsx)(ei.A, {
                    guildId: n.id,
                    recurrenceRule: E,
                    guildEventId: t.id,
                    onRecurrenceClick: _,
                    hideScroller: !0,
                    activeRecurrenceId: u,
                }),
        ],
    });
}
var e_ = n(364522),
    eg = n(289873),
    eh = n(297413),
    ef = n(710358),
    ex = n(342296),
    ev = n(495544),
    em = n(290863),
    ep = n(461213),
    eA = n(287809),
    eI = n(610324);
function eE(e) {
    let { children: t } = e;
    return (0, l.jsxs)("div", {
        className: eI.do,
        children: [
            (0, l.jsx)(ef.A, {
                children: (0, l.jsx)("div", {
                    className: eI.n1,
                    children: (0, l.jsx)(H.n, {
                        size: "custom",
                        color: "currentColor",
                        height: 40,
                        width: 40,
                        className: eI.Kk,
                    }),
                }),
            }),
            t,
        ],
    });
}
function ej() {
    return (0, l.jsx)(eE, {
        children: (0, l.jsx)(X.D, {
            color: "text-strong",
            variant: "heading-xl/semibold",
            className: eI.DD,
            children: L.intl.string(L.t.hW0mBR),
        }),
    });
}
function eb() {
    return (0, l.jsx)(eE, {
        children: (0, l.jsx)(X.D, {
            color: "text-default",
            variant: "heading-md/semibold",
            className: eI.JU,
            children: L.intl.string(L.t.obChXk),
        }),
    });
}
function eN(e) {
    let { count: t } = e;
    return (0, l.jsxs)("div", {
        className: eI.f0,
        children: [
            (0, l.jsx)("div", {
                className: P()(eI.Pc, eI.uY),
                children: (0, l.jsx)(H.n, {
                    size: "custom",
                    color: "currentColor",
                    height: 14,
                    width: 14,
                    className: eI.Kk,
                }),
            }),
            (0, l.jsx)(B.E, {
                color: "text-default",
                variant: "text-md/normal",
                children: L.intl.format(L.t.BdQTfR, { userRemainCount: t }),
            }),
        ],
    });
}
function eC(e) {
    let { eventUser: t, guildId: n, onContextMenu: r } = e,
        a = i.useRef(null),
        s = (0, c.bG)([eA.default], () => eA.default.getUser(t.user_id)),
        d = (0, c.bG)(
            [ep.A, em.A, ev.default],
            () => (t.user_id === ev.default.getId() ? ep.A.getStatus() : em.A.getStatus(t.user_id, n)),
            [t.user_id, n],
        );
    return null == s
        ? null
        : (0, l.jsx)(ex.A, {
              targetElementRef: a,
              userId: t.user_id,
              guildId: n,
              position: "left",
              spacing: 16,
              children: (e, i) => {
                  let { isShown: c } = i;
                  return (0, l.jsxs)(K.D, {
                      innerRef: a,
                      className: P()(eI.f0, eI.fv, { [eI.wH]: c }),
                      onContextMenu: (e) => r(e, s),
                      ...e,
                      children: [
                          (0, l.jsx)(G.eu, {
                              src: s.getAvatarURL(n, 24),
                              "aria-label": s.username,
                              size: M._3.SIZE_24,
                              className: eI.uY,
                              status: d,
                          }),
                          (0, l.jsx)(eh.A, {
                              user: s,
                              className: eI.sY,
                              discriminatorClass: eI.XU,
                              nick: t.member?.nick,
                          }),
                      ],
                  });
              },
          });
}
function ey(e) {
    let { eventUsers: t, guildId: n, usersNotShownCount: i = 0, onContextMenu: r } = e;
    return (0, l.jsxs)(e_.Ip, {
        className: eI.DK,
        children: [
            t.map((e) => (0, l.jsx)(eC, { guildId: n, eventUser: e, onContextMenu: r }, e.user_id)),
            i > 0 && (0, l.jsx)(eN, { count: i }),
        ],
    });
}
function ek(e) {
    let { children: t, style: n } = e;
    return (0, l.jsx)("div", { className: eI.kL, style: null != n ? n : {}, children: t });
}
function eS(e) {
    let { children: t, height: n } = e;
    return (0, l.jsx)(ek, { style: { height: n }, children: t });
}
function eT(e) {
    let { guildEvent: t, recurrenceId: i, eventUsers: r, loading: a, error: s, containerHeight: d } = e,
        c = (0, j.A)(t.guild_id, t.id, i);
    if (a && 0 === r.length)
        return (0, l.jsx)(eS, {
            height: d,
            children: (0, l.jsx)(eg.y, { type: eg.y.Type.SPINNING_CIRCLE, className: eI.u1 }),
        });
    if (null != s && 0 === r.length) return (0, l.jsx)(eS, { height: d, children: (0, l.jsx)(eb, {}) });
    let o = 0;
    return (
        r.length >= b.C1 && c > b.C1 && (o = Math.max(c - r.length, 0)),
        0 === r.length
            ? (0, l.jsx)(eS, { height: d, children: (0, l.jsx)(ej, {}) })
            : (0, l.jsx)(ek, {
                  children: (0, l.jsx)(ey, {
                      eventUsers: r,
                      guildId: t.guild_id,
                      onContextMenu: function (e, t) {
                          (0, u.L3)(e, async () => {
                              let { default: e } = await Promise.all([
                                  n.e("97262"),
                                  n.e("24170"),
                                  n.e("53635"),
                                  n.e("32418"),
                                  n.e("79843"),
                              ]).then(n.bind(n, 668569));
                              return (n) => (0, l.jsx)(e, { ...n, user: t });
                          });
                      },
                      usersNotShownCount: o,
                  }),
              })
    );
}
var eL = n(482857),
    eD = n(652215),
    eR = n(832223);
function ew(e) {
    let { guildEvent: t, guild: n, channel: i, onActionTaken: a, recurrenceId: s } = e,
        d = (0, I.Fd)(t),
        o = (0, c.bG)([I.Ay], () => I.Ay.isInterestedInEventRecurrence(t.id, s), [s, t]),
        u = (0, E.Ay)(t),
        _ = (0, c.bG)([f.A], () => f.A.isLurking(n.id), [n.id]),
        g = (0, N.e)(i?.id, t.id),
        h = (0, eL.A)({ guild: n, channel: i, guildScheduledEvent: t, isActive: d, recurrenceId: s, onActionTaken: a }),
        x = (0, k.Zq)({
            isActive: d,
            isUserLurking: _,
            rsvped: o,
            isChannelPublic: g,
            canInvite: u,
            entityType: t.entity_type,
            ...h,
        }),
        v =
            null != h.onContextMenu
                ? (0, l.jsx)("div", { className: eR.Zv, children: (0, l.jsx)(k.jD, { onClick: h.onContextMenu }) })
                : void 0;
    return (0, l.jsx)(r.H, { leading: v, actions: x });
}
let eP = (e) => {
    let t,
        r,
        { guildScheduledEventId: f, transitionState: E, initialRecurrenceId: N, onClose: k } = e,
        { analyticsLocations: T } = (0, g.Ay)(_.A.GUILD_EVENT_MODAL),
        [L, D] = i.useState(N),
        w = (0, c.bG)([I.Ay], () => I.Ay.getGuildScheduledEvent(f), [f]),
        P = w?.id,
        G = w?.guild_id,
        M = (0, c.bG)([v.A], () => v.A.getGuild(G), [G]),
        B = w?.channel_id,
        K = (0, c.bG)([x.A], () => x.A.getChannel(B), [B]),
        V = (0, h.GV)(),
        [O, U] = i.useState(b.al.EVENT_INFO),
        H =
            ((t = (0, c.yK)([I.Ay], () => Object.values(I.Ay.getUsersForGuildEvent(P, null)), [P])),
            (r = (0, c.yK)([I.Ay], () => Object.values(I.Ay.getUsersForGuildEvent(P, L)), [P, L])),
            (0, i.useMemo)(() => {
                let e = r.reduce((e, t) => ((e[t.user_id] = t), e), {}),
                    n = t.filter((t) => {
                        let n = e[t.user_id];
                        return null == n || n.response === b.Qi.INTERESTED;
                    }),
                    l = r.filter((e) => e.response === b.Qi.INTERESTED),
                    i = new Set(),
                    a = [],
                    s = (e) => {
                        i.has(e.user_id) || (a.push(e), i.add(e.user_id));
                    };
                return n.forEach(s), l.forEach(s), a;
            }, [t, r])),
        X = null != w ? (0, y.A)(w) : null,
        z = i.useCallback(
            (e) => {
                null != X &&
                    (0, u.L3)(e, async () => {
                        let { default: e } = await n.e("31658").then(n.bind(n, 928625));
                        return (t) => (0, l.jsx)(e, { ...t, imageUrl: X });
                    });
            },
            [X],
        ),
        Y = (0, j.A)(G, P, L),
        [F, { loading: W, error: Z }] = (0, p.A)(() => A.A.getGuildEventUsers(w?.id, L, G));
    i.useEffect(() => {
        null == w ? k() : m.default.track(eD.HAw.OPEN_MODAL, { type: b.BV, guild_id: w.guild_id });
    }, [w, k]);
    let J = i.useRef(null),
        [q, Q] = i.useState(680);
    i.useLayoutEffect(() => {
        let e = new ResizeObserver((e) => {
            e.length > 0 && Q(e[0].contentRect.width);
        });
        return null != J.current && e.observe(J.current), () => e.disconnect();
    }, [J]);
    let $ = i.useRef(null),
        [ee, et] = i.useState(0);
    if (
        (i.useLayoutEffect(() => {
            let e = 16 * (w?.recurrence_rule != null);
            et(($?.current?.offsetHeight ?? 0) + e);
        }, [$, w?.recurrence_rule]),
        null == w || null == M)
    )
        return null;
    let en = (e) => {
            e !== O && (e === b.al.RSVP_LIST && F(), U(e));
        },
        el = L ?? (0, C.G3)(w);
    return (0, l.jsx)(g.f5, {
        value: T,
        children: (0, l.jsxs)(a.d, {
            transitionState: E,
            size: "lg",
            onClose: k,
            children: [
                (0, l.jsx)(s.rQ, { title: w.name }),
                w?.image != null &&
                    null != X &&
                    (0, l.jsx)("div", { onContextMenu: z, children: (0, l.jsx)(S.A, { source: X, className: eR.vK }) }),
                (0, l.jsx)(d.c, {
                    controls: (0, l.jsx)(R, { selectedTab: O, onTabSelected: en, userCount: Y }),
                    children: (0, l.jsx)("div", {
                        className: eR.kL,
                        ref: J,
                        children: (0, l.jsxs)(o.t, {
                            activeSlide: O,
                            width: q,
                            centered: !1,
                            children: [
                                (0, l.jsx)(o.q, {
                                    id: b.al.EVENT_INFO,
                                    children: (0, l.jsx)(eu, {
                                        guildEvent: w,
                                        guild: M,
                                        channel: K,
                                        headerId: V,
                                        onClose: k,
                                        onClickInterestedCount: () => en(b.al.RSVP_LIST),
                                        containerRef: $,
                                        recurrenceId: el,
                                        setRecurrenceId: D,
                                    }),
                                }),
                                (0, l.jsx)(o.q, {
                                    id: b.al.RSVP_LIST,
                                    children: (0, l.jsx)(eT, {
                                        guildEvent: w,
                                        recurrenceId: el,
                                        eventUsers: H,
                                        loading: W,
                                        containerHeight: ee,
                                        error: Z,
                                    }),
                                }),
                            ],
                        }),
                    }),
                }),
                (0, l.jsx)(ew, { guildEvent: w, guild: M, channel: K, onActionTaken: k, recurrenceId: el }),
            ],
        }),
    });
};
