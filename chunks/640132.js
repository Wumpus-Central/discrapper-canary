l.d(n, { default: () => eU });
var t = l(627968),
    s = l(64700),
    r = l(696208),
    i = l(224640),
    d = l(20742),
    u = l(430993),
    a = l(17928),
    c = l(430690),
    o = l(442433),
    h = l(793574),
    x = l(688810),
    g = l(915089),
    m = l(857071),
    j = l(734057),
    f = l(71393),
    v = l(174459),
    A = l(422653),
    I = l(285059),
    N = l(698441),
    y = l(485394),
    _ = l(826383);
l(321073);
var E = l(988794),
    S = l(530209),
    C = l(647090),
    k = l(691012),
    p = l(428978),
    b = l(850183),
    R = l(761508),
    T = l(375708),
    L = l(378787);
function D(e) {
    let { selectedTab: n, onTabSelected: l, userCount: r, rsvpListTabInnerRef: i } = e,
        d = s.useRef(null);
    return (
        s.useEffect(() => d.current?.ref?.blur?.(), []),
        (0, t.jsx)("div", {
            className: L.kL,
            children: (0, t.jsxs)(R.V, {
                className: L.$H,
                "aria-label": T.intl.string(T.t["+1H47t"]),
                selectedItem: n,
                type: "top",
                onItemSelect: l,
                children: [
                    (0, t.jsx)(R.V.Item, { className: L.YU, id: E.al.EVENT_INFO, children: T.intl.string(T.t.iW6Xuo) }),
                    (0, t.jsx)(R.V.Item, {
                        className: L.YU,
                        id: E.al.RSVP_LIST,
                        clickableInnerRef: i,
                        children: T.intl.formatToPlainString(T.t["ZrTT/N"], { userCount: r }),
                    }),
                ],
            }),
        })
    );
}
var G = l(503698),
    U = l.n(G),
    M = l(97808),
    w = l(778712),
    P = l(834730),
    V = l(939249),
    O = l(463930),
    z = l(140735),
    F = l(781696),
    K = l(177953),
    H = l(534514),
    q = l(376728),
    Y = l(548118),
    Z = l(714991),
    B = l(967144),
    Q = l(660110),
    X = l(975732),
    W = l(696451),
    $ = l(427262),
    J = l(408607),
    ee = l(722260),
    en = l(563312),
    el = l(794782),
    et = l(937050),
    es = l(620018),
    er = l(103355),
    ei = l(167630),
    ed = l(478799);
function eu(e) {
    let { creator: n, guildId: l, channelId: s } = e,
        { analyticsLocations: r } = (0, x.Ay)(),
        i = (0, a.bG)([W.Ay], () => W.Ay.getMember(l, n.id), [n, l]),
        d = (0, B.gn)(i?.guildId, i?.userId, i?.colorStrings ?? null);
    return (0, t.jsxs)("div", {
        className: ed.nM,
        children: [
            (0, t.jsx)(M.eu, {
                size: w._3.SIZE_20,
                src: n.getAvatarURL(l, 20),
                "aria-label": i?.nick ?? $.Ay.getName(n),
                className: ed.Kk,
            }),
            (0, t.jsx)(P.E, {
                color: "text-default",
                variant: "text-sm/normal",
                children: T.intl.format(T.t["66DLFs"], {
                    usernameHook: function () {
                        return (0, t.jsx)(
                            V.D,
                            {
                                onClick: () =>
                                    (0, X.openUserProfileModal)({
                                        guildId: l,
                                        channelId: s,
                                        userId: n.id,
                                        roleId: i?.colorRoleId,
                                        sourceAnalyticsLocations: r,
                                    }),
                                className: ed.xL,
                                tag: "span",
                                role: "link",
                                children: (0, t.jsx)(O.g, {
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
    let { guild: n, onClick: l, onClose: r } = e,
        i = s.useCallback(
            (e) => {
                l?.(e), null != l && r?.(e);
            },
            [l, r],
        ),
        d = (0, t.jsxs)(t.Fragment, {
            children: [
                (0, t.jsx)(z.A, { children: T.intl.string(T.t["5qyruI"]) }),
                (0, t.jsx)(Y.Ay, {
                    guild: n,
                    size: Y.Ay.Sizes.MINI,
                    active: !0,
                    "aria-hidden": !0,
                    className: U()(ed.$f, ed.Kk),
                }),
                (0, t.jsx)(Z.A, {
                    guild: n,
                    tooltipPosition: "top",
                    tooltipColor: F.ST.Colors.PRIMARY,
                    size: 16,
                    className: ed.n2,
                }),
                (0, t.jsx)(P.E, {
                    color: "text-default",
                    variant: "text-sm/normal",
                    className: ed.yX,
                    children: n.name,
                }),
            ],
        });
    return (0, t.jsx)("div", {
        className: ed.nM,
        children: null != l ? (0, t.jsx)(V.D, { onClick: i, className: ed.vk, role: "link", children: d }) : d,
    });
}
function ec(e) {
    let { userCount: n, onClick: l } = e;
    return (0, t.jsxs)("div", {
        className: ed.nM,
        children: [
            (0, t.jsx)(K.n, {
                size: "custom",
                color: "currentColor",
                width: 20,
                height: 20,
                className: ed.Kk,
                "aria-label": T.intl.string(T.t["9Oq93m"]),
            }),
            (0, t.jsx)(V.D, {
                onClick: l,
                className: ed.tK,
                children: (0, t.jsx)(P.E, {
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
            guild: l,
            channel: r,
            headerId: i,
            onClose: d,
            onClickInterestedCount: u,
            containerRef: c,
            recurrenceId: o,
            setRecurrenceId: h,
        } = e,
        x = (0, a.bG)([f.A], () => null != f.A.getGuild(l.id), [l.id]),
        { startTime: g, endTime: m } = (0, en.Ay)(n, o),
        j = (0, _.A)(n.guild_id, n.id, o),
        v = s.useCallback(
            (e) => {
                e.stopPropagation(), null != n && (0, q.rq)(n);
            },
            [n],
        ),
        A = (0, ee.A)(o, n.id),
        N = (0, J.A)(n);
    s.useEffect(() => {
        I.A.getGuildEventUserCounts(l.id, n.id, null != o ? [o] : []), I.A.getGuildEventsForCurrentUser(l.id);
    }, [l.id, n.id, o]);
    let y = (0, el.Sn)(n.recurrence_rule),
        S = n?.scheduled_start_time != null ? (0, C.j)(A, g, new Date(n?.scheduled_start_time)) : null;
    return (0, t.jsxs)("div", {
        ref: c,
        children: [
            (0, t.jsxs)("div", {
                className: ed.wx,
                children: [
                    (0, t.jsx)(er.L, {
                        startTime: g.toISOString(),
                        endTime: m?.toISOString(),
                        status: S ?? n.status,
                        eventType: n.entity_type,
                        guildEventId: n.id,
                        recurrenceId: o,
                    }),
                    (0, t.jsx)(H.D, {
                        id: i,
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        className: ed.DD,
                        children: n.name,
                    }),
                ],
            }),
            (0, t.jsxs)("div", {
                className: ed.rf,
                children: [
                    (0, t.jsx)(ea, { guild: l, onClick: x ? v : void 0, onClose: d }),
                    (0, t.jsx)(ei.A, { guildScheduledEvent: n, channel: r, onClose: d }),
                    null != j && (0, t.jsx)(ec, { userCount: j, onClick: u }),
                    null != N && (0, t.jsx)(eu, { creator: N, guildId: l.id, channelId: r?.id }, N.id),
                    null != n.description &&
                        (0, t.jsx)("div", {
                            className: ed.h_,
                            children: (0, t.jsx)(et.A, { description: n.description, truncate: !1, guildId: l.id }),
                        }),
                    E.Tn.has(n.entity_type) &&
                        (0, t.jsx)(Q.A, { noBackground: !0, divider: Q.V.TOP, channelId: r?.id }),
                ],
            }),
            null != y && (0, t.jsx)("hr", { className: ed.yF }),
            null != y &&
                (0, t.jsx)(es.A, {
                    guildId: l.id,
                    recurrenceRule: y,
                    guildEventId: n.id,
                    onRecurrenceClick: h,
                    hideScroller: !0,
                    activeRecurrenceId: o,
                }),
        ],
    });
}
var eh = l(364522),
    ex = l(289873),
    eg = l(297413),
    em = l(710358),
    ej = l(342296),
    ef = l(495544),
    ev = l(290863),
    eA = l(461213),
    eI = l(287809),
    eN = l(610324);
function ey(e) {
    let { children: n } = e;
    return (0, t.jsxs)("div", {
        className: eN.do,
        children: [
            (0, t.jsx)(em.A, {
                children: (0, t.jsx)("div", {
                    className: eN.n1,
                    children: (0, t.jsx)(K.n, {
                        size: "custom",
                        color: "currentColor",
                        height: 40,
                        width: 40,
                        className: eN.Kk,
                    }),
                }),
            }),
            n,
        ],
    });
}
function e_() {
    return (0, t.jsx)(ey, {
        children: (0, t.jsx)(H.D, {
            color: "text-strong",
            variant: "heading-xl/semibold",
            className: eN.DD,
            children: T.intl.string(T.t.hW0mBR),
        }),
    });
}
function eE() {
    return (0, t.jsx)(ey, {
        children: (0, t.jsx)(H.D, {
            color: "text-default",
            variant: "heading-md/semibold",
            className: eN.JU,
            children: T.intl.string(T.t.obChXk),
        }),
    });
}
function eS(e) {
    let { count: n } = e;
    return (0, t.jsxs)("div", {
        className: eN.f0,
        children: [
            (0, t.jsx)("div", {
                className: U()(eN.Pc, eN.uY),
                children: (0, t.jsx)(K.n, {
                    size: "custom",
                    color: "currentColor",
                    height: 14,
                    width: 14,
                    className: eN.Kk,
                }),
            }),
            (0, t.jsx)(P.E, {
                color: "text-default",
                variant: "text-md/normal",
                children: T.intl.format(T.t.BdQTfR, { userRemainCount: n }),
            }),
        ],
    });
}
function eC(e) {
    let { eventUser: n, guildId: l, onContextMenu: r } = e,
        i = s.useRef(null),
        d = (0, a.bG)([eI.default], () => eI.default.getUser(n.user_id)),
        u = (0, a.bG)(
            [eA.A, ev.A, ef.default],
            () => (n.user_id === ef.default.getId() ? eA.A.getStatus() : ev.A.getStatus(n.user_id, l)),
            [n.user_id, l],
        );
    return null == d
        ? null
        : (0, t.jsx)(ej.A, {
              targetElementRef: i,
              userId: n.user_id,
              guildId: l,
              position: "left",
              spacing: 16,
              children: (e, s) => {
                  let { isShown: a } = s;
                  return (0, t.jsxs)(V.D, {
                      innerRef: i,
                      className: U()(eN.f0, eN.fv, { [eN.wH]: a }),
                      onContextMenu: (e) => r(e, d),
                      ...e,
                      children: [
                          (0, t.jsx)(M.eu, {
                              src: d.getAvatarURL(l, 24),
                              "aria-label": d.username,
                              size: w._3.SIZE_24,
                              className: eN.uY,
                              status: u,
                          }),
                          (0, t.jsx)(eg.A, {
                              user: d,
                              className: eN.sY,
                              discriminatorClass: eN.XU,
                              nick: n.member?.nick,
                          }),
                      ],
                  });
              },
          });
}
function ek(e) {
    let { eventUsers: n, guildId: l, usersNotShownCount: s = 0, onContextMenu: r } = e;
    return (0, t.jsxs)(eh.Ip, {
        className: eN.DK,
        children: [
            n.map((e) => (0, t.jsx)(eC, { guildId: l, eventUser: e, onContextMenu: r }, e.user_id)),
            s > 0 && (0, t.jsx)(eS, { count: s }),
        ],
    });
}
function ep(e) {
    let { children: n, style: l } = e;
    return (0, t.jsx)("div", { className: eN.kL, style: null != l ? l : {}, children: n });
}
function eb(e) {
    let { children: n, height: l } = e;
    return (0, t.jsx)(ep, { style: { height: l }, children: n });
}
function eR(e) {
    let { guildEvent: n, recurrenceId: s, eventUsers: r, loading: i, error: d, containerHeight: u } = e,
        a = (0, _.A)(n.guild_id, n.id, s);
    if (i && 0 === r.length)
        return (0, t.jsx)(eb, {
            height: u,
            children: (0, t.jsx)(ex.y, { type: ex.y.Type.SPINNING_CIRCLE, className: eN.u1 }),
        });
    if (null != d && 0 === r.length) return (0, t.jsx)(eb, { height: u, children: (0, t.jsx)(eE, {}) });
    let c = 0;
    return (
        r.length >= E.C1 && a > E.C1 && (c = Math.max(a - r.length, 0)),
        0 === r.length
            ? (0, t.jsx)(eb, { height: u, children: (0, t.jsx)(e_, {}) })
            : (0, t.jsx)(ep, {
                  children: (0, t.jsx)(ek, {
                      eventUsers: r,
                      guildId: n.guild_id,
                      onContextMenu: function (e, n) {
                          (0, o.L3)(e, async () => {
                              let { default: e } = await Promise.all([
                                  l.e("25719"),
                                  l.e("26132"),
                                  l.e("46652"),
                                  l.e("93190"),
                                  l.e("34552"),
                                  l.e("8757"),
                                  l.e("89673"),
                                  l.e("85968"),
                                  l.e("60195"),
                                  l.e("68403"),
                                  l.e("29787"),
                                  l.e("97558"),
                                  l.e("94000"),
                                  l.e("91994"),
                                  l.e("76665"),
                                  l.e("76273"),
                                  l.e("24198"),
                                  l.e("56753"),
                                  l.e("25486"),
                                  l.e("14461"),
                                  l.e("72883"),
                                  l.e("42204"),
                                  l.e("83972"),
                                  l.e("32418"),
                              ]).then(l.bind(l, 668569));
                              return (l) => (0, t.jsx)(e, { ...l, user: n });
                          });
                      },
                      usersNotShownCount: c,
                  }),
              })
    );
}
var eT = l(482857),
    eL = l(652215),
    eD = l(832223);
function eG(e) {
    let { guildEvent: n, guild: l, channel: s, onActionTaken: i, recurrenceId: d } = e,
        u = (0, N.Fd)(n),
        c = (0, a.bG)([N.Ay], () => N.Ay.isInterestedInEventRecurrence(n.id, d), [d, n]),
        o = (0, y.Ay)(n),
        h = (0, a.bG)([m.A], () => m.A.isLurking(l.id), [l.id]),
        x = (0, S.e)(s?.id, n.id),
        g = (0, eT.A)({ guild: l, channel: s, guildScheduledEvent: n, isActive: u, recurrenceId: d, onActionTaken: i }),
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
                ? (0, t.jsx)("div", { className: eD.Zv, children: (0, t.jsx)(p.jD, { onClick: g.onContextMenu }) })
                : void 0;
    return (0, t.jsx)(r.H, { leading: f, actions: j });
}
let eU = (e) => {
    let n,
        r,
        { guildScheduledEventId: m, transitionState: y, initialRecurrenceId: S, onClose: p } = e,
        { analyticsLocations: R } = (0, x.Ay)(h.A.GUILD_EVENT_MODAL),
        [T, L] = s.useState(S),
        G = (0, a.bG)([N.Ay], () => N.Ay.getGuildScheduledEvent(m), [m]),
        U = G?.id,
        M = G?.guild_id,
        w = (0, a.bG)([f.A], () => f.A.getGuild(M), [M]),
        P = G?.channel_id,
        V = (0, a.bG)([j.A], () => j.A.getChannel(P), [P]),
        O = (0, g.GV)(),
        [z, F] = s.useState(E.al.EVENT_INFO),
        K =
            ((n = (0, a.yK)([N.Ay], () => Object.values(N.Ay.getUsersForGuildEvent(U, null)), [U])),
            (r = (0, a.yK)([N.Ay], () => Object.values(N.Ay.getUsersForGuildEvent(U, T)), [U, T])),
            (0, s.useMemo)(() => {
                let e = r.reduce((e, n) => ((e[n.user_id] = n), e), {}),
                    l = n.filter((n) => {
                        let l = e[n.user_id];
                        return null == l || l.response === E.Qi.INTERESTED;
                    }),
                    t = r.filter((e) => e.response === E.Qi.INTERESTED),
                    s = new Set(),
                    i = [],
                    d = (e) => {
                        s.has(e.user_id) || (i.push(e), s.add(e.user_id));
                    };
                return l.forEach(d), t.forEach(d), i;
            }, [n, r])),
        H = null != G ? (0, k.A)(G) : null,
        q = s.useCallback(
            (e) => {
                null != H &&
                    (0, o.L3)(e, async () => {
                        let { default: e } = await Promise.all([l.e("95340"), l.e("9277")]).then(l.bind(l, 928625));
                        return (n) => (0, t.jsx)(e, { ...n, imageUrl: H });
                    });
            },
            [H],
        ),
        Y = (0, _.A)(M, U, T),
        [Z, { loading: B, error: Q }] = (0, A.A)(() => I.A.getGuildEventUsers(G?.id, T, M));
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
    s.useLayoutEffect(() => {
        let e = 16 * (G?.recurrence_rule != null);
        en((J?.current?.offsetHeight ?? 0) + e);
    }, [J, G?.recurrence_rule]);
    let el = s.useRef(null);
    if (
        (s.useLayoutEffect(() => {
            z === E.al.RSVP_LIST && el.current?.focus();
        }, [z]),
        null == G || null == w)
    )
        return null;
    let et = (e) => {
            e !== z && (e === E.al.RSVP_LIST && Z(), F(e));
        },
        es = T ?? (0, C.G3)(G);
    return (0, t.jsx)(x.f5, {
        value: R,
        children: (0, t.jsxs)(i.d, {
            transitionState: y,
            size: "lg",
            onClose: p,
            "aria-label": G.name,
            children: [
                (0, t.jsx)(d.rQ, { title: G.name }),
                G?.image != null &&
                    null != H &&
                    (0, t.jsx)("div", { onContextMenu: q, children: (0, t.jsx)(b.A, { source: H, className: eD.vK }) }),
                (0, t.jsx)(u.c, {
                    controls: (0, t.jsx)(D, {
                        selectedTab: z,
                        onTabSelected: et,
                        userCount: Y,
                        rsvpListTabInnerRef: el,
                    }),
                    children: (0, t.jsx)("div", {
                        className: eD.kL,
                        ref: X,
                        children: (0, t.jsxs)(c.t, {
                            activeSlide: z,
                            width: W,
                            centered: !1,
                            children: [
                                (0, t.jsx)(c.q, {
                                    id: E.al.EVENT_INFO,
                                    children: (0, t.jsx)(eo, {
                                        guildEvent: G,
                                        guild: w,
                                        channel: V,
                                        headerId: O,
                                        onClose: p,
                                        onClickInterestedCount: () => et(E.al.RSVP_LIST),
                                        containerRef: J,
                                        recurrenceId: es,
                                        setRecurrenceId: L,
                                    }),
                                }),
                                (0, t.jsx)(c.q, {
                                    id: E.al.RSVP_LIST,
                                    children: (0, t.jsx)(eR, {
                                        guildEvent: G,
                                        recurrenceId: es,
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
                (0, t.jsx)(eG, { guildEvent: G, guild: w, channel: V, onActionTaken: p, recurrenceId: es }),
            ],
        }),
    });
};
