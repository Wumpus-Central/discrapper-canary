t.d(n, { default: () => eU });
var l = t(627968),
    s = t(64700),
    r = t(696208),
    i = t(224640),
    d = t(20742),
    u = t(430993),
    a = t(17928),
    c = t(430690),
    o = t(442433),
    h = t(793574),
    x = t(688810),
    g = t(915089),
    m = t(857071),
    j = t(734057),
    f = t(71393),
    v = t(954571),
    A = t(645034),
    N = t(285059),
    I = t(698441),
    y = t(485394),
    _ = t(826383);
t(321073);
var E = t(988794),
    C = t(530209),
    S = t(974930),
    k = t(691012),
    p = t(428978),
    b = t(850183),
    R = t(761508),
    T = t(985018),
    L = t(378787);
function D(e) {
    let { selectedTab: n, onTabSelected: t, userCount: r } = e,
        i = s.useRef(null);
    return (
        s.useEffect(() => i.current?.ref?.blur?.(), []),
        (0, l.jsx)("div", {
            className: L.kL,
            children: (0, l.jsxs)(R.V, {
                className: L.$H,
                "aria-label": T.intl.string(T.t["+1H47t"]),
                selectedItem: n,
                type: "top",
                onItemSelect: t,
                children: [
                    (0, l.jsx)(R.V.Item, { className: L.YU, id: E.al.EVENT_INFO, children: T.intl.string(T.t.iW6Xuo) }),
                    (0, l.jsx)(R.V.Item, {
                        className: L.YU,
                        id: E.al.RSVP_LIST,
                        children: T.intl.formatToPlainString(T.t["ZrTT/N"], { userCount: r }),
                    }),
                ],
            }),
        })
    );
}
var G = t(503698),
    U = t.n(G),
    M = t(97808),
    w = t(778712),
    P = t(834730),
    V = t(939249),
    O = t(463930),
    z = t(140735),
    F = t(781696),
    K = t(177953),
    H = t(534514),
    q = t(376728),
    Y = t(548118),
    Z = t(714991),
    B = t(967144),
    Q = t(660110),
    X = t(975732),
    W = t(696451),
    $ = t(427262),
    J = t(408607),
    ee = t(722260),
    en = t(563312),
    et = t(794782),
    el = t(847494),
    es = t(620018),
    er = t(103355),
    ei = t(167630),
    ed = t(478799);
function eu(e) {
    let { creator: n, guildId: t, channelId: s } = e,
        { analyticsLocations: r } = (0, x.Ay)(),
        i = (0, a.bG)([W.Ay], () => W.Ay.getMember(t, n.id), [n, t]),
        d = (0, B.gn)(i?.guildId, i?.userId, i?.colorStrings ?? null);
    return (0, l.jsxs)("div", {
        className: ed.nM,
        children: [
            (0, l.jsx)(M.eu, {
                size: w._3.SIZE_20,
                src: n.getAvatarURL(t, 20),
                "aria-label": i?.nick ?? $.Ay.getName(n),
                className: ed.Kk,
            }),
            (0, l.jsx)(P.E, {
                color: "text-default",
                variant: "text-sm/normal",
                children: T.intl.format(T.t["66DLFs"], {
                    usernameHook: function () {
                        return (0, l.jsx)(
                            V.D,
                            {
                                onClick: () =>
                                    (0, X.openUserProfileModal)({
                                        guildId: t,
                                        channelId: s,
                                        userId: n.id,
                                        roleId: i?.colorRoleId,
                                        sourceAnalyticsLocations: r,
                                    }),
                                className: ed.xL,
                                tag: "span",
                                role: "link",
                                children: (0, l.jsx)(O.g, {
                                    name: i?.nick ?? $.Ay.getName(n),
                                    colorString: i?.colorString ?? null,
                                    colorStrings: d,
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
function ea(e) {
    let { guild: n, onClick: t, onClose: r } = e,
        i = s.useCallback(
            (e) => {
                t?.(e), null != t && r?.(e);
            },
            [t, r],
        ),
        d = (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(z.A, { children: T.intl.string(T.t["5qyruI"]) }),
                (0, l.jsx)(Y.Ay, {
                    guild: n,
                    size: Y.Ay.Sizes.MINI,
                    active: !0,
                    "aria-hidden": !0,
                    className: U()(ed.$f, ed.Kk),
                }),
                (0, l.jsx)(Z.A, {
                    guild: n,
                    tooltipPosition: "top",
                    tooltipColor: F.ST.Colors.PRIMARY,
                    size: 16,
                    className: ed.n2,
                }),
                (0, l.jsx)(P.E, {
                    color: "text-default",
                    variant: "text-sm/normal",
                    className: ed.yX,
                    children: n.name,
                }),
            ],
        });
    return (0, l.jsx)("div", {
        className: ed.nM,
        children: null != t ? (0, l.jsx)(V.D, { onClick: i, className: ed.vk, role: "link", children: d }) : d,
    });
}
function ec(e) {
    let { userCount: n, onClick: t } = e;
    return (0, l.jsxs)("div", {
        className: ed.nM,
        children: [
            (0, l.jsx)(K.n, {
                size: "custom",
                color: "currentColor",
                width: 20,
                height: 20,
                className: ed.Kk,
                "aria-label": T.intl.string(T.t["9Oq93m"]),
            }),
            (0, l.jsx)(V.D, {
                onClick: t,
                className: ed.tK,
                children: (0, l.jsx)(P.E, {
                    color: "text-default",
                    variant: "text-sm/normal",
                    children: T.intl.format(T.t["+DLsD8"], { count: n }),
                }),
            }),
        ],
    });
}
function eo(e) {
    let {
            guildEvent: n,
            guild: t,
            channel: r,
            headerId: i,
            onClose: d,
            onClickInterestedCount: u,
            containerRef: c,
            recurrenceId: o,
            setRecurrenceId: h,
        } = e,
        x = (0, a.bG)([f.A], () => null != f.A.getGuild(t.id), [t.id]),
        { startTime: g, endTime: m } = (0, en.Ay)(n, o),
        j = (0, _.A)(n.guild_id, n.id, o),
        v = s.useCallback(
            (e) => {
                e.stopPropagation(), null != n && (0, q.rq)(n);
            },
            [n],
        ),
        A = (0, ee.A)(o, n.id),
        I = (0, J.A)(n);
    s.useEffect(() => {
        N.A.getGuildEventUserCounts(t.id, n.id, null != o ? [o] : []), N.A.getGuildEventsForCurrentUser(t.id);
    }, [t.id, n.id, o]);
    let y = (0, et.Sn)(n.recurrence_rule),
        C = n?.scheduled_start_time != null ? (0, S.j)(A, g, new Date(n?.scheduled_start_time)) : null;
    return (0, l.jsxs)("div", {
        ref: c,
        children: [
            (0, l.jsxs)("div", {
                className: ed.wx,
                children: [
                    (0, l.jsx)(er.L, {
                        startTime: g.toISOString(),
                        endTime: m?.toISOString(),
                        status: C ?? n.status,
                        eventType: n.entity_type,
                        guildEventId: n.id,
                        recurrenceId: o,
                    }),
                    (0, l.jsx)(H.D, {
                        id: i,
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        className: ed.DD,
                        children: n.name,
                    }),
                ],
            }),
            (0, l.jsxs)("div", {
                className: ed.rf,
                children: [
                    (0, l.jsx)(ea, { guild: t, onClick: x ? v : void 0, onClose: d }),
                    (0, l.jsx)(ei.A, { guildScheduledEvent: n, channel: r, onClose: d }),
                    null != j && (0, l.jsx)(ec, { userCount: j, onClick: u }),
                    null != I && (0, l.jsx)(eu, { creator: I, guildId: t.id, channelId: r?.id }, I.id),
                    null != n.description &&
                        (0, l.jsx)("div", {
                            className: ed.h_,
                            children: (0, l.jsx)(el.A, { description: n.description, truncate: !1, guildId: t.id }),
                        }),
                    E.Tn.has(n.entity_type) &&
                        (0, l.jsx)(Q.A, { noBackground: !0, divider: Q.V.TOP, channelId: r?.id }),
                ],
            }),
            null != y && (0, l.jsx)("hr", { className: ed.yF }),
            null != y &&
                (0, l.jsx)(es.A, {
                    guildId: t.id,
                    recurrenceRule: y,
                    guildEventId: n.id,
                    onRecurrenceClick: h,
                    hideScroller: !0,
                    activeRecurrenceId: o,
                }),
        ],
    });
}
var eh = t(364522),
    ex = t(289873),
    eg = t(297413),
    em = t(710358),
    ej = t(342296),
    ef = t(495544),
    ev = t(290863),
    eA = t(461213),
    eN = t(287809),
    eI = t(610324);
function ey(e) {
    let { children: n } = e;
    return (0, l.jsxs)("div", {
        className: eI.do,
        children: [
            (0, l.jsx)(em.A, {
                children: (0, l.jsx)("div", {
                    className: eI.n1,
                    children: (0, l.jsx)(K.n, {
                        size: "custom",
                        color: "currentColor",
                        height: 40,
                        width: 40,
                        className: eI.Kk,
                    }),
                }),
            }),
            n,
        ],
    });
}
function e_() {
    return (0, l.jsx)(ey, {
        children: (0, l.jsx)(H.D, {
            color: "text-strong",
            variant: "heading-xl/semibold",
            className: eI.DD,
            children: T.intl.string(T.t.hW0mBR),
        }),
    });
}
function eE() {
    return (0, l.jsx)(ey, {
        children: (0, l.jsx)(H.D, {
            color: "text-default",
            variant: "heading-md/semibold",
            className: eI.JU,
            children: T.intl.string(T.t.obChXk),
        }),
    });
}
function eC(e) {
    let { count: n } = e;
    return (0, l.jsxs)("div", {
        className: eI.f0,
        children: [
            (0, l.jsx)("div", {
                className: U()(eI.Pc, eI.uY),
                children: (0, l.jsx)(K.n, {
                    size: "custom",
                    color: "currentColor",
                    height: 14,
                    width: 14,
                    className: eI.Kk,
                }),
            }),
            (0, l.jsx)(P.E, {
                color: "text-default",
                variant: "text-md/normal",
                children: T.intl.format(T.t.BdQTfR, { userRemainCount: n }),
            }),
        ],
    });
}
function eS(e) {
    let { eventUser: n, guildId: t, onContextMenu: r } = e,
        i = s.useRef(null),
        d = (0, a.bG)([eN.default], () => eN.default.getUser(n.user_id)),
        u = (0, a.bG)(
            [eA.A, ev.A, ef.default],
            () => (n.user_id === ef.default.getId() ? eA.A.getStatus() : ev.A.getStatus(n.user_id, t)),
            [n.user_id, t],
        );
    return null == d
        ? null
        : (0, l.jsx)(ej.A, {
              targetElementRef: i,
              userId: n.user_id,
              guildId: t,
              position: "left",
              spacing: 16,
              children: (e, s) => {
                  let { isShown: a } = s;
                  return (0, l.jsxs)(V.D, {
                      innerRef: i,
                      className: U()(eI.f0, eI.fv, { [eI.wH]: a }),
                      onContextMenu: (e) => r(e, d),
                      ...e,
                      children: [
                          (0, l.jsx)(M.eu, {
                              src: d.getAvatarURL(t, 24),
                              "aria-label": d.username,
                              size: w._3.SIZE_24,
                              className: eI.uY,
                              status: u,
                          }),
                          (0, l.jsx)(eg.A, {
                              user: d,
                              className: eI.sY,
                              discriminatorClass: eI.XU,
                              nick: n.member?.nick,
                          }),
                      ],
                  });
              },
          });
}
function ek(e) {
    let { eventUsers: n, guildId: t, usersNotShownCount: s = 0, onContextMenu: r } = e;
    return (0, l.jsxs)(eh.Ip, {
        className: eI.DK,
        children: [
            n.map((e) => (0, l.jsx)(eS, { guildId: t, eventUser: e, onContextMenu: r }, e.user_id)),
            s > 0 && (0, l.jsx)(eC, { count: s }),
        ],
    });
}
function ep(e) {
    let { children: n, style: t } = e;
    return (0, l.jsx)("div", { className: eI.kL, style: null != t ? t : {}, children: n });
}
function eb(e) {
    let { children: n, height: t } = e;
    return (0, l.jsx)(ep, { style: { height: t }, children: n });
}
function eR(e) {
    let { guildEvent: n, recurrenceId: s, eventUsers: r, loading: i, error: d, containerHeight: u } = e,
        a = (0, _.A)(n.guild_id, n.id, s);
    if (i && 0 === r.length)
        return (0, l.jsx)(eb, {
            height: u,
            children: (0, l.jsx)(ex.y, { type: ex.y.Type.SPINNING_CIRCLE, className: eI.u1 }),
        });
    if (null != d && 0 === r.length) return (0, l.jsx)(eb, { height: u, children: (0, l.jsx)(eE, {}) });
    let c = 0;
    return (
        r.length >= E.C1 && a > E.C1 && (c = Math.max(a - r.length, 0)),
        0 === r.length
            ? (0, l.jsx)(eb, { height: u, children: (0, l.jsx)(e_, {}) })
            : (0, l.jsx)(ep, {
                  children: (0, l.jsx)(ek, {
                      eventUsers: r,
                      guildId: n.guild_id,
                      onContextMenu: function (e, n) {
                          (0, o.L3)(e, async () => {
                              let { default: e } = await Promise.all([
                                  t.e("41475"),
                                  t.e("39431"),
                                  t.e("31788"),
                                  t.e("26132"),
                                  t.e("46652"),
                                  t.e("93190"),
                                  t.e("34552"),
                                  t.e("8757"),
                                  t.e("89673"),
                                  t.e("68403"),
                                  t.e("85968"),
                                  t.e("60195"),
                                  t.e("28561"),
                                  t.e("29787"),
                                  t.e("97558"),
                                  t.e("94000"),
                                  t.e("91994"),
                                  t.e("21570"),
                                  t.e("76665"),
                                  t.e("76273"),
                                  t.e("24198"),
                                  t.e("86169"),
                                  t.e("19871"),
                                  t.e("24170"),
                                  t.e("14461"),
                                  t.e("25486"),
                                  t.e("94503"),
                                  t.e("14224"),
                                  t.e("72883"),
                                  t.e("42204"),
                                  t.e("83972"),
                                  t.e("72072"),
                                  t.e("32418"),
                              ]).then(t.bind(t, 668569));
                              return (t) => (0, l.jsx)(e, { ...t, user: n });
                          });
                      },
                      usersNotShownCount: c,
                  }),
              })
    );
}
var eT = t(482857),
    eL = t(652215),
    eD = t(832223);
function eG(e) {
    let { guildEvent: n, guild: t, channel: s, onActionTaken: i, recurrenceId: d } = e,
        u = (0, I.Fd)(n),
        c = (0, a.bG)([I.Ay], () => I.Ay.isInterestedInEventRecurrence(n.id, d), [d, n]),
        o = (0, y.Ay)(n),
        h = (0, a.bG)([m.A], () => m.A.isLurking(t.id), [t.id]),
        x = (0, C.e)(s?.id, n.id),
        g = (0, eT.A)({ guild: t, channel: s, guildScheduledEvent: n, isActive: u, recurrenceId: d, onActionTaken: i }),
        j = (0, p.Zq)({
            isActive: u,
            isUserLurking: h,
            rsvped: c,
            isChannelPublic: x,
            canInvite: o,
            entityType: n.entity_type,
            ...g,
        }),
        f =
            null != g.onContextMenu
                ? (0, l.jsx)("div", { className: eD.Zv, children: (0, l.jsx)(p.jD, { onClick: g.onContextMenu }) })
                : void 0;
    return (0, l.jsx)(r.H, { leading: f, actions: j });
}
let eU = (e) => {
    let n,
        r,
        { guildScheduledEventId: m, transitionState: y, initialRecurrenceId: C, onClose: p } = e,
        { analyticsLocations: R } = (0, x.Ay)(h.A.GUILD_EVENT_MODAL),
        [T, L] = s.useState(C),
        G = (0, a.bG)([I.Ay], () => I.Ay.getGuildScheduledEvent(m), [m]),
        U = G?.id,
        M = G?.guild_id,
        w = (0, a.bG)([f.A], () => f.A.getGuild(M), [M]),
        P = G?.channel_id,
        V = (0, a.bG)([j.A], () => j.A.getChannel(P), [P]),
        O = (0, g.GV)(),
        [z, F] = s.useState(E.al.EVENT_INFO),
        K =
            ((n = (0, a.yK)([I.Ay], () => Object.values(I.Ay.getUsersForGuildEvent(U, null)), [U])),
            (r = (0, a.yK)([I.Ay], () => Object.values(I.Ay.getUsersForGuildEvent(U, T)), [U, T])),
            (0, s.useMemo)(() => {
                let e = r.reduce((e, n) => ((e[n.user_id] = n), e), {}),
                    t = n.filter((n) => {
                        let t = e[n.user_id];
                        return null == t || t.response === E.Qi.INTERESTED;
                    }),
                    l = r.filter((e) => e.response === E.Qi.INTERESTED),
                    s = new Set(),
                    i = [],
                    d = (e) => {
                        s.has(e.user_id) || (i.push(e), s.add(e.user_id));
                    };
                return t.forEach(d), l.forEach(d), i;
            }, [n, r])),
        H = null != G ? (0, k.A)(G) : null,
        q = s.useCallback(
            (e) => {
                null != H &&
                    (0, o.L3)(e, async () => {
                        let { default: e } = await Promise.all([t.e("95340"), t.e("31658")]).then(t.bind(t, 928625));
                        return (n) => (0, l.jsx)(e, { ...n, imageUrl: H });
                    });
            },
            [H],
        ),
        Y = (0, _.A)(M, U, T),
        [Z, { loading: B, error: Q }] = (0, A.A)(() => N.A.getGuildEventUsers(G?.id, T, M));
    s.useEffect(() => {
        null == G ? p() : v.default.track(eL.HAw.OPEN_MODAL, { type: E.BV, guild_id: G.guild_id });
    }, [G, p]);
    let X = s.useRef(null),
        [W, $] = s.useState(680);
    s.useLayoutEffect(() => {
        let e = new ResizeObserver((e) => {
            e.length > 0 && $(e[0].contentRect.width);
        });
        return null != X.current && e.observe(X.current), () => e.disconnect();
    }, [X]);
    let J = s.useRef(null),
        [ee, en] = s.useState(0);
    if (
        (s.useLayoutEffect(() => {
            let e = 16 * (G?.recurrence_rule != null);
            en((J?.current?.offsetHeight ?? 0) + e);
        }, [J, G?.recurrence_rule]),
        null == G || null == w)
    )
        return null;
    let et = (e) => {
            e !== z && (e === E.al.RSVP_LIST && Z(), F(e));
        },
        el = T ?? (0, S.G3)(G);
    return (0, l.jsx)(x.f5, {
        value: R,
        children: (0, l.jsxs)(i.d, {
            transitionState: y,
            size: "lg",
            onClose: p,
            children: [
                (0, l.jsx)(d.rQ, { title: G.name }),
                G?.image != null &&
                    null != H &&
                    (0, l.jsx)("div", { onContextMenu: q, children: (0, l.jsx)(b.A, { source: H, className: eD.vK }) }),
                (0, l.jsx)(u.c, {
                    controls: (0, l.jsx)(D, { selectedTab: z, onTabSelected: et, userCount: Y }),
                    children: (0, l.jsx)("div", {
                        className: eD.kL,
                        ref: X,
                        children: (0, l.jsxs)(c.t, {
                            activeSlide: z,
                            width: W,
                            centered: !1,
                            children: [
                                (0, l.jsx)(c.q, {
                                    id: E.al.EVENT_INFO,
                                    children: (0, l.jsx)(eo, {
                                        guildEvent: G,
                                        guild: w,
                                        channel: V,
                                        headerId: O,
                                        onClose: p,
                                        onClickInterestedCount: () => et(E.al.RSVP_LIST),
                                        containerRef: J,
                                        recurrenceId: el,
                                        setRecurrenceId: L,
                                    }),
                                }),
                                (0, l.jsx)(c.q, {
                                    id: E.al.RSVP_LIST,
                                    children: (0, l.jsx)(eR, {
                                        guildEvent: G,
                                        recurrenceId: el,
                                        eventUsers: K,
                                        loading: B,
                                        containerHeight: ee,
                                        error: Q,
                                    }),
                                }),
                            ],
                        }),
                    }),
                }),
                (0, l.jsx)(eG, { guildEvent: G, guild: w, channel: V, onActionTaken: p, recurrenceId: el }),
            ],
        }),
    });
};
