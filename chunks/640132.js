l.d(n, { default: () => eM });
var t = l(627968),
    s = l(64700),
    r = l(696208),
    i = l(224640),
    u = l(20742),
    d = l(430993),
    a = l(17928),
    c = l(430690),
    o = l(442433),
    h = l(793574),
    x = l(688810),
    g = l(915089),
    m = l(857071),
    j = l(734057),
    f = l(71393),
    v = l(763827),
    A = l(174459),
    I = l(422653),
    N = l(285059),
    _ = l(698441),
    y = l(485394),
    E = l(826383);
l(321073);
var C = l(988794),
    S = l(530209),
    b = l(974930),
    k = l(691012),
    p = l(428978),
    R = l(850183),
    T = l(761508),
    L = l(375708),
    D = l(378787);
function G(e) {
    let { selectedTab: n, onTabSelected: l, userCount: r, rsvpListTabInnerRef: i } = e,
        u = s.useRef(null);
    return (
        s.useEffect(() => u.current?.ref?.blur?.(), []),
        (0, t.jsx)("div", {
            className: D.kL,
            children: (0, t.jsxs)(T.V, {
                className: D.$H,
                "aria-label": L.intl.string(L.t["+1H47t"]),
                selectedItem: n,
                type: "top",
                onItemSelect: l,
                children: [
                    (0, t.jsx)(T.V.Item, { className: D.YU, id: C.al.EVENT_INFO, children: L.intl.string(L.t.iW6Xuo) }),
                    (0, t.jsx)(T.V.Item, {
                        className: D.YU,
                        id: C.al.RSVP_LIST,
                        clickableInnerRef: i,
                        children: L.intl.formatToPlainString(L.t["ZrTT/N"], { userCount: r }),
                    }),
                ],
            }),
        })
    );
}
var U = l(503698),
    M = l.n(U),
    w = l(97808),
    P = l(778712),
    V = l(834730),
    O = l(939249),
    z = l(463930),
    F = l(140735),
    K = l(781696),
    H = l(177953),
    q = l(297264),
    Y = l(376728),
    Z = l(548118),
    B = l(714991),
    Q = l(967144),
    X = l(660110),
    W = l(975732),
    $ = l(696451),
    J = l(427262),
    ee = l(408607),
    en = l(722260),
    el = l(563312),
    et = l(794782),
    es = l(937050),
    er = l(620018),
    ei = l(103355),
    eu = l(167630),
    ed = l(478799);
function ea(e) {
    let { creator: n, guildId: l, channelId: s } = e,
        { analyticsLocations: r } = (0, x.Ay)(),
        i = (0, a.bG)([$.Ay], () => $.Ay.getMember(l, n.id), [n, l]),
        u = (0, Q.gn)(i?.guildId, i?.userId, i?.colorStrings ?? null);
    return (0, t.jsxs)("div", {
        className: ed.nM,
        children: [
            (0, t.jsx)(w.eu, {
                size: P._3.SIZE_20,
                src: n.getAvatarURL(l, 20),
                "aria-label": i?.nick ?? J.Ay.getName(n),
                className: ed.Kk,
            }),
            (0, t.jsx)(V.E, {
                color: "text-default",
                variant: "text-sm/normal",
                children: L.intl.format(L.t["66DLFs"], {
                    usernameHook: function () {
                        return (0, t.jsx)(
                            O.D,
                            {
                                onClick: () =>
                                    (0, W.openUserProfileModal)({
                                        guildId: l,
                                        channelId: s,
                                        userId: n.id,
                                        roleId: i?.colorRoleId,
                                        sourceAnalyticsLocations: r,
                                    }),
                                className: ed.xL,
                                tag: "span",
                                role: "link",
                                children: (0, t.jsx)(z.g, {
                                    name: i?.nick ?? J.Ay.getName(n),
                                    colorString: i?.colorString ?? null,
                                    colorStrings: u,
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
    let { guild: n, onClick: l, onClose: r } = e,
        i = s.useCallback(
            (e) => {
                l?.(e), null != l && r?.(e);
            },
            [l, r],
        ),
        u = (0, t.jsxs)(t.Fragment, {
            children: [
                (0, t.jsx)(F.A, { children: L.intl.string(L.t["5qyruI"]) }),
                (0, t.jsx)(Z.Ay, {
                    guild: n,
                    size: Z.Ay.Sizes.MINI,
                    active: !0,
                    "aria-hidden": !0,
                    className: M()(ed.$f, ed.Kk),
                }),
                (0, t.jsx)(B.A, {
                    guild: n,
                    tooltipPosition: "top",
                    tooltipColor: K.ST.Colors.PRIMARY,
                    size: 16,
                    className: ed.n2,
                }),
                (0, t.jsx)(V.E, {
                    color: "text-default",
                    variant: "text-sm/normal",
                    className: ed.yX,
                    children: n.name,
                }),
            ],
        });
    return (0, t.jsx)("div", {
        className: ed.nM,
        children: null != l ? (0, t.jsx)(O.D, { onClick: i, className: ed.vk, role: "link", children: u }) : u,
    });
}
function eo(e) {
    let { userCount: n, onClick: l } = e;
    return (0, t.jsxs)("div", {
        className: ed.nM,
        children: [
            (0, t.jsx)(H.n, {
                size: "custom",
                color: "currentColor",
                width: 20,
                height: 20,
                className: ed.Kk,
                "aria-label": L.intl.string(L.t["9Oq93m"]),
            }),
            (0, t.jsx)(O.D, {
                onClick: l,
                className: ed.tK,
                children: (0, t.jsx)(V.E, {
                    color: "text-default",
                    variant: "text-sm/normal",
                    children: L.intl.format(L.t["+DLsD8"], { count: n }),
                }),
            }),
        ],
    });
}
function eh(e) {
    let {
            guildEvent: n,
            guild: l,
            channel: r,
            headerId: i,
            onClose: u,
            onClickInterestedCount: d,
            containerRef: c,
            recurrenceId: o,
            setRecurrenceId: h,
        } = e,
        x = (0, a.bG)([f.A], () => null != f.A.getGuild(l.id), [l.id]),
        { startTime: g, endTime: m } = (0, el.Ay)(n, o),
        j = (0, E.A)(n.guild_id, n.id, o),
        v = s.useCallback(
            (e) => {
                e.stopPropagation(), null != n && (0, Y.rq)(n);
            },
            [n],
        ),
        A = (0, en.A)(o, n.id),
        I = (0, ee.A)(n);
    s.useEffect(() => {
        N.A.getGuildEventUserCounts(l.id, n.id, null != o ? [o] : []), N.A.getGuildEventsForCurrentUser(l.id);
    }, [l.id, n.id, o]);
    let _ = (0, et.Sn)(n.recurrence_rule),
        y = n?.scheduled_start_time != null ? (0, b.j)(A, g, new Date(n?.scheduled_start_time)) : null;
    return (0, t.jsxs)("div", {
        ref: c,
        children: [
            (0, t.jsxs)("div", {
                className: ed.wx,
                children: [
                    (0, t.jsx)(ei.L, {
                        startTime: g.toISOString(),
                        endTime: m?.toISOString(),
                        status: y ?? n.status,
                        eventType: n.entity_type,
                        guildEventId: n.id,
                        recurrenceId: o,
                    }),
                    (0, t.jsx)(q.D, {
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
                    (0, t.jsx)(ec, { guild: l, onClick: x ? v : void 0, onClose: u }),
                    (0, t.jsx)(eu.A, { guildScheduledEvent: n, channel: r, onClose: u }),
                    null != j && (0, t.jsx)(eo, { userCount: j, onClick: d }),
                    null != I && (0, t.jsx)(ea, { creator: I, guildId: l.id, channelId: r?.id }, I.id),
                    null != n.description &&
                        (0, t.jsx)("div", {
                            className: ed.h_,
                            children: (0, t.jsx)(es.A, { description: n.description, truncate: !1, guildId: l.id }),
                        }),
                    C.Tn.has(n.entity_type) &&
                        (0, t.jsx)(X.A, { noBackground: !0, divider: X.V.TOP, channelId: r?.id }),
                ],
            }),
            null != _ && (0, t.jsx)("hr", { className: ed.yF }),
            null != _ &&
                (0, t.jsx)(er.A, {
                    guildId: l.id,
                    recurrenceRule: _,
                    guildEventId: n.id,
                    onRecurrenceClick: h,
                    hideScroller: !0,
                    activeRecurrenceId: o,
                }),
        ],
    });
}
var ex = l(364522),
    eg = l(289873),
    em = l(297413),
    ej = l(710358),
    ef = l(342296),
    ev = l(280450),
    eA = l(290863),
    eI = l(461213),
    eN = l(287809),
    e_ = l(610324);
function ey(e) {
    let { children: n } = e;
    return (0, t.jsxs)("div", {
        className: e_.do,
        children: [
            (0, t.jsx)(ej.A, {
                children: (0, t.jsx)("div", {
                    className: e_.n1,
                    children: (0, t.jsx)(H.n, {
                        size: "custom",
                        color: "currentColor",
                        height: 40,
                        width: 40,
                        className: e_.Kk,
                    }),
                }),
            }),
            n,
        ],
    });
}
function eE() {
    return (0, t.jsx)(ey, {
        children: (0, t.jsx)(q.D, {
            color: "text-strong",
            variant: "heading-xl/semibold",
            className: e_.DD,
            children: L.intl.string(L.t.hW0mBR),
        }),
    });
}
function eC() {
    return (0, t.jsx)(ey, {
        children: (0, t.jsx)(q.D, {
            color: "text-default",
            variant: "heading-md/semibold",
            className: e_.JU,
            children: L.intl.string(L.t.obChXk),
        }),
    });
}
function eS(e) {
    let { count: n } = e;
    return (0, t.jsxs)("div", {
        className: e_.f0,
        children: [
            (0, t.jsx)("div", {
                className: M()(e_.Pc, e_.uY),
                children: (0, t.jsx)(H.n, {
                    size: "custom",
                    color: "currentColor",
                    height: 14,
                    width: 14,
                    className: e_.Kk,
                }),
            }),
            (0, t.jsx)(V.E, {
                color: "text-default",
                variant: "text-md/normal",
                children: L.intl.format(L.t.BdQTfR, { userRemainCount: n }),
            }),
        ],
    });
}
function eb(e) {
    let { eventUser: n, guildId: l, onContextMenu: r } = e,
        i = s.useRef(null),
        u = (0, a.bG)([eN.default], () => eN.default.getUser(n.user_id)),
        d = (0, a.bG)(
            [eI.A, eA.A, ev.default],
            () => (n.user_id === ev.default.getId() ? eI.A.getStatus() : eA.A.getStatus(n.user_id, l)),
            [n.user_id, l],
        );
    return null == u
        ? null
        : (0, t.jsx)(ef.A, {
              targetElementRef: i,
              userId: n.user_id,
              guildId: l,
              position: "left",
              spacing: 16,
              children: (e, s) => {
                  let { isShown: a } = s;
                  return (0, t.jsxs)(O.D, {
                      innerRef: i,
                      className: M()(e_.f0, e_.fv, { [e_.wH]: a }),
                      onContextMenu: (e) => r(e, u),
                      ...e,
                      children: [
                          (0, t.jsx)(w.eu, {
                              src: u.getAvatarURL(l, 24),
                              "aria-label": u.username,
                              size: P._3.SIZE_24,
                              className: e_.uY,
                              status: d,
                          }),
                          (0, t.jsx)(em.A, {
                              user: u,
                              className: e_.sY,
                              discriminatorClass: e_.XU,
                              nick: n.member?.nick,
                          }),
                      ],
                  });
              },
          });
}
function ek(e) {
    let { eventUsers: n, guildId: l, usersNotShownCount: s = 0, onContextMenu: r } = e;
    return (0, t.jsxs)(ex.Ip, {
        className: e_.DK,
        children: [
            n.map((e) => (0, t.jsx)(eb, { guildId: l, eventUser: e, onContextMenu: r }, e.user_id)),
            s > 0 && (0, t.jsx)(eS, { count: s }),
        ],
    });
}
function ep(e) {
    let { children: n, style: l } = e;
    return (0, t.jsx)("div", { className: e_.kL, style: null != l ? l : {}, children: n });
}
function eR(e) {
    let { children: n, height: l } = e;
    return (0, t.jsx)(ep, { style: { height: l }, children: n });
}
function eT(e) {
    let { guildEvent: n, recurrenceId: s, eventUsers: r, loading: i, error: u, containerHeight: d } = e,
        a = (0, E.A)(n.guild_id, n.id, s);
    if (i && 0 === r.length)
        return (0, t.jsx)(eR, {
            height: d,
            children: (0, t.jsx)(eg.y, { type: eg.y.Type.SPINNING_CIRCLE, className: e_.u1 }),
        });
    if (null != u && 0 === r.length) return (0, t.jsx)(eR, { height: d, children: (0, t.jsx)(eC, {}) });
    let c = 0;
    return (
        r.length >= C.C1 && a > C.C1 && (c = Math.max(a - r.length, 0)),
        0 === r.length
            ? (0, t.jsx)(eR, { height: d, children: (0, t.jsx)(eE, {}) })
            : (0, t.jsx)(ep, {
                  children: (0, t.jsx)(ek, {
                      eventUsers: r,
                      guildId: n.guild_id,
                      onContextMenu: function (e, n) {
                          (0, o.L3)(e, async () => {
                              let { default: e } = await Promise.all([
                                  l.e("71406"),
                                  l.e("94881"),
                                  l.e("26132"),
                                  l.e("46652"),
                                  l.e("93190"),
                                  l.e("34552"),
                                  l.e("8757"),
                                  l.e("85968"),
                                  l.e("89673"),
                                  l.e("68403"),
                                  l.e("29787"),
                                  l.e("82073"),
                                  l.e("97558"),
                                  l.e("91994"),
                                  l.e("76665"),
                                  l.e("76273"),
                                  l.e("24198"),
                                  l.e("56753"),
                                  l.e("14461"),
                                  l.e("72883"),
                                  l.e("25486"),
                                  l.e("42204"),
                                  l.e("42191"),
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
var eL = l(482857),
    eD = l(652215),
    eG = l(832223);
function eU(e) {
    let { guildEvent: n, guild: l, channel: s, onActionTaken: i, recurrenceId: u } = e,
        d = (0, _.Fd)(n),
        c = (0, a.bG)([v.A], () => v.A.getChannelId()),
        o = c === n.channel_id && null != c && d,
        h = (0, a.bG)([_.Ay], () => _.Ay.isInterestedInEventRecurrence(n.id, u), [u, n]),
        x = (0, y.Ay)(n),
        g = (0, a.bG)([m.A], () => m.A.isLurking(l.id), [l.id]),
        j = (0, S.e)(s?.id, n.id),
        f = (0, eL.A)({ guild: l, channel: s, guildScheduledEvent: n, isActive: d, recurrenceId: u, onActionTaken: i }),
        A = (0, p.Zq)({
            isActive: d,
            isUserLurking: g,
            rsvped: h,
            isChannelPublic: j,
            canInvite: x,
            isJoined: o,
            entityType: n.entity_type,
            ...f,
        }),
        I =
            null != f.onContextMenu
                ? (0, t.jsx)("div", { className: eG.Zv, children: (0, t.jsx)(p.jD, { onClick: f.onContextMenu }) })
                : void 0;
    return (0, t.jsx)(r.H, { leading: I, actions: A });
}
let eM = (e) => {
    let n,
        r,
        { guildScheduledEventId: m, transitionState: v, initialRecurrenceId: y, onClose: S } = e,
        { analyticsLocations: p } = (0, x.Ay)(h.A.GUILD_EVENT_MODAL),
        [T, L] = s.useState(y),
        D = (0, a.bG)([_.Ay], () => _.Ay.getGuildScheduledEvent(m), [m]),
        U = D?.id,
        M = D?.guild_id,
        w = (0, a.bG)([f.A], () => f.A.getGuild(M), [M]),
        P = D?.channel_id,
        V = (0, a.bG)([j.A], () => j.A.getChannel(P), [P]),
        O = (0, g.GV)(),
        [z, F] = s.useState(C.al.EVENT_INFO),
        K =
            ((n = (0, a.yK)([_.Ay], () => Object.values(_.Ay.getUsersForGuildEvent(U, null)), [U])),
            (r = (0, a.yK)([_.Ay], () => Object.values(_.Ay.getUsersForGuildEvent(U, T)), [U, T])),
            (0, s.useMemo)(() => {
                let e = r.reduce((e, n) => ((e[n.user_id] = n), e), {}),
                    l = n.filter((n) => {
                        let l = e[n.user_id];
                        return null == l || l.response === C.Qi.INTERESTED;
                    }),
                    t = r.filter((e) => e.response === C.Qi.INTERESTED),
                    s = new Set(),
                    i = [];
                function u(e) {
                    s.has(e.user_id) || (i.push(e), s.add(e.user_id));
                }
                return l.forEach(u), t.forEach(u), i;
            }, [n, r])),
        H = null != D ? (0, k.A)(D) : null,
        q = s.useCallback(
            (e) => {
                null != H &&
                    (0, o.L3)(e, async () => {
                        let { default: e } = await Promise.all([l.e("95340"), l.e("31658")]).then(l.bind(l, 928625));
                        return (n) => (0, t.jsx)(e, { ...n, imageUrl: H });
                    });
            },
            [H],
        ),
        Y = (0, E.A)(M, U, T),
        [Z, { loading: B, error: Q }] = (0, I.A)(() => N.A.getGuildEventUsers(D?.id, T, M)),
        X = s.useRef(!1);
    s.useEffect(() => {
        null == D
            ? S()
            : X.current || ((X.current = !0), A.default.track(eD.HAw.OPEN_MODAL, { type: C.BV, guild_id: D.guild_id }));
    }, [D, S]);
    let W = s.useRef(null),
        [$, J] = s.useState(680);
    s.useLayoutEffect(() => {
        let e = new ResizeObserver((e) => {
            e.length > 0 && J(e[0].contentRect.width);
        });
        return null != W.current && e.observe(W.current), () => e.disconnect();
    }, [W]);
    let ee = s.useRef(null),
        [en, el] = s.useState(0);
    s.useLayoutEffect(() => {
        let e = 16 * (D?.recurrence_rule != null);
        el((ee?.current?.offsetHeight ?? 0) + e);
    }, [ee, D?.recurrence_rule]);
    let et = s.useRef(null);
    if (
        (s.useLayoutEffect(() => {
            z === C.al.RSVP_LIST && et.current?.focus();
        }, [z]),
        null == D || null == w)
    )
        return null;
    function es(e) {
        e !== z && (e === C.al.RSVP_LIST && Z(), F(e));
    }
    let er = T ?? (0, b.G3)(D);
    return (0, t.jsx)(x.f5, {
        value: p,
        children: (0, t.jsxs)(i.d, {
            transitionState: v,
            size: "lg",
            onClose: S,
            "aria-label": D.name,
            children: [
                (0, t.jsx)(u.rQ, { title: D.name }),
                D?.image != null &&
                    null != H &&
                    (0, t.jsx)("div", { onContextMenu: q, children: (0, t.jsx)(R.A, { source: H, className: eG.vK }) }),
                (0, t.jsx)(d.c, {
                    controls: (0, t.jsx)(G, {
                        selectedTab: z,
                        onTabSelected: es,
                        userCount: Y,
                        rsvpListTabInnerRef: et,
                    }),
                    children: (0, t.jsx)("div", {
                        className: eG.kL,
                        ref: W,
                        children: (0, t.jsxs)(c.t, {
                            activeSlide: z,
                            width: $,
                            centered: !1,
                            children: [
                                (0, t.jsx)(c.q, {
                                    id: C.al.EVENT_INFO,
                                    children: (0, t.jsx)(eh, {
                                        guildEvent: D,
                                        guild: w,
                                        channel: V,
                                        headerId: O,
                                        onClose: S,
                                        onClickInterestedCount: () => es(C.al.RSVP_LIST),
                                        containerRef: ee,
                                        recurrenceId: er,
                                        setRecurrenceId: L,
                                    }),
                                }),
                                (0, t.jsx)(c.q, {
                                    id: C.al.RSVP_LIST,
                                    children: (0, t.jsx)(eT, {
                                        guildEvent: D,
                                        recurrenceId: er,
                                        eventUsers: K,
                                        loading: B,
                                        containerHeight: en,
                                        error: Q,
                                    }),
                                }),
                            ],
                        }),
                    }),
                }),
                (0, t.jsx)(eU, { guildEvent: D, guild: w, channel: V, onActionTaken: S, recurrenceId: er }),
            ],
        }),
    });
};
