t.d(n, { default: () => eM });
var l = t(627968),
    s = t(64700),
    r = t(696208),
    i = t(224640),
    u = t(20742),
    d = t(430993),
    a = t(17928),
    c = t(430690),
    o = t(442433),
    h = t(793574),
    x = t(688810),
    g = t(915089),
    m = t(857071),
    j = t(734057),
    f = t(71393),
    v = t(763827),
    A = t(174459),
    I = t(422653),
    N = t(285059),
    _ = t(698441),
    y = t(485394),
    E = t(826383);
t(321073);
var C = t(988794),
    S = t(530209),
    b = t(974930),
    k = t(691012),
    p = t(428978),
    R = t(850183),
    T = t(761508),
    L = t(375708),
    D = t(378787);
function G(e) {
    let { selectedTab: n, onTabSelected: t, userCount: r, rsvpListTabInnerRef: i } = e,
        u = s.useRef(null);
    return (
        s.useEffect(() => u.current?.ref?.blur?.(), []),
        (0, l.jsx)("div", {
            className: D.kL,
            children: (0, l.jsxs)(T.V, {
                className: D.$H,
                "aria-label": L.intl.string(L.t["+1H47t"]),
                selectedItem: n,
                type: "top",
                onItemSelect: t,
                children: [
                    (0, l.jsx)(T.V.Item, { className: D.YU, id: C.al.EVENT_INFO, children: L.intl.string(L.t.iW6Xuo) }),
                    (0, l.jsx)(T.V.Item, {
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
var U = t(503698),
    M = t.n(U),
    w = t(97808),
    P = t(778712),
    V = t(834730),
    O = t(939249),
    z = t(463930),
    F = t(140735),
    K = t(900002),
    H = t(177953),
    q = t(297264),
    Y = t(376728),
    Z = t(548118),
    B = t(714991),
    Q = t(967144),
    X = t(660110),
    W = t(975732),
    $ = t(696451),
    J = t(427262),
    ee = t(408607),
    en = t(722260),
    et = t(563312),
    el = t(794782),
    es = t(937050),
    er = t(620018),
    ei = t(103355),
    eu = t(167630),
    ed = t(478799);
function ea(e) {
    let { creator: n, guildId: t, channelId: s } = e,
        { analyticsLocations: r } = (0, x.Ay)(),
        i = (0, a.bG)([$.Ay], () => $.Ay.getMember(t, n.id), [n, t]),
        u = (0, Q.gn)(i?.guildId, i?.userId, i?.colorStrings ?? null);
    return (0, l.jsxs)("div", {
        className: ed.nM,
        children: [
            (0, l.jsx)(w.eu, {
                size: P._3.SIZE_20,
                src: n.getAvatarURL(t, 20),
                "aria-label": i?.nick ?? J.Ay.getName(n),
                className: ed.Kk,
            }),
            (0, l.jsx)(V.E, {
                color: "text-default",
                variant: "text-sm/normal",
                children: L.intl.format(L.t["66DLFs"], {
                    usernameHook: function () {
                        return (0, l.jsx)(
                            O.D,
                            {
                                onClick: () =>
                                    (0, W.openUserProfileModal)({
                                        guildId: t,
                                        channelId: s,
                                        userId: n.id,
                                        roleId: i?.colorRoleId,
                                        sourceAnalyticsLocations: r,
                                    }),
                                className: ed.xL,
                                tag: "span",
                                role: "link",
                                children: (0, l.jsx)(z.g, {
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
    let { guild: n, onClick: t, onClose: r } = e,
        i = s.useCallback(
            (e) => {
                t?.(e), null != t && r?.(e);
            },
            [t, r],
        ),
        u = (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(F.A, { children: L.intl.string(L.t["5qyruI"]) }),
                (0, l.jsx)(Z.Ay, {
                    guild: n,
                    size: Z.Ay.Sizes.MINI,
                    active: !0,
                    "aria-hidden": !0,
                    className: M()(ed.$f, ed.Kk),
                }),
                (0, l.jsx)(B.A, {
                    guild: n,
                    tooltipPosition: "top",
                    tooltipColor: K.ST.Colors.PRIMARY,
                    size: 16,
                    className: ed.n2,
                }),
                (0, l.jsx)(V.E, {
                    color: "text-default",
                    variant: "text-sm/normal",
                    className: ed.yX,
                    children: n.name,
                }),
            ],
        });
    return (0, l.jsx)("div", {
        className: ed.nM,
        children: null != t ? (0, l.jsx)(O.D, { onClick: i, className: ed.vk, role: "link", children: u }) : u,
    });
}
function eo(e) {
    let { userCount: n, onClick: t } = e;
    return (0, l.jsxs)("div", {
        className: ed.nM,
        children: [
            (0, l.jsx)(H.n, {
                size: "custom",
                color: "currentColor",
                width: 20,
                height: 20,
                className: ed.Kk,
                "aria-label": L.intl.string(L.t["9Oq93m"]),
            }),
            (0, l.jsx)(O.D, {
                onClick: t,
                className: ed.tK,
                children: (0, l.jsx)(V.E, {
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
            guild: t,
            channel: r,
            headerId: i,
            onClose: u,
            onClickInterestedCount: d,
            containerRef: c,
            recurrenceId: o,
            setRecurrenceId: h,
        } = e,
        x = (0, a.bG)([f.A], () => null != f.A.getGuild(t.id), [t.id]),
        { startTime: g, endTime: m } = (0, et.Ay)(n, o),
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
        N.A.getGuildEventUserCounts(t.id, n.id, null != o ? [o] : []), N.A.getGuildEventsForCurrentUser(t.id);
    }, [t.id, n.id, o]);
    let _ = (0, el.Sn)(n.recurrence_rule),
        y = n?.scheduled_start_time != null ? (0, b.j)(A, g, new Date(n?.scheduled_start_time)) : null;
    return (0, l.jsxs)("div", {
        ref: c,
        children: [
            (0, l.jsxs)("div", {
                className: ed.wx,
                children: [
                    (0, l.jsx)(ei.L, {
                        startTime: g.toISOString(),
                        endTime: m?.toISOString(),
                        status: y ?? n.status,
                        eventType: n.entity_type,
                        guildEventId: n.id,
                        recurrenceId: o,
                    }),
                    (0, l.jsx)(q.D, {
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
                    (0, l.jsx)(ec, { guild: t, onClick: x ? v : void 0, onClose: u }),
                    (0, l.jsx)(eu.A, { guildScheduledEvent: n, channel: r, onClose: u }),
                    null != j && (0, l.jsx)(eo, { userCount: j, onClick: d }),
                    null != I && (0, l.jsx)(ea, { creator: I, guildId: t.id, channelId: r?.id }, I.id),
                    null != n.description &&
                        (0, l.jsx)("div", {
                            className: ed.h_,
                            children: (0, l.jsx)(es.A, { description: n.description, truncate: !1, guildId: t.id }),
                        }),
                    C.Tn.has(n.entity_type) &&
                        (0, l.jsx)(X.A, { noBackground: !0, divider: X.V.TOP, channelId: r?.id }),
                ],
            }),
            null != _ && (0, l.jsx)("hr", { className: ed.yF }),
            null != _ &&
                (0, l.jsx)(er.A, {
                    guildId: t.id,
                    recurrenceRule: _,
                    guildEventId: n.id,
                    onRecurrenceClick: h,
                    hideScroller: !0,
                    activeRecurrenceId: o,
                }),
        ],
    });
}
var ex = t(364522),
    eg = t(289873),
    em = t(297413),
    ej = t(710358),
    ef = t(342296),
    ev = t(280450),
    eA = t(290863),
    eI = t(461213),
    eN = t(287809),
    e_ = t(610324);
function ey(e) {
    let { children: n } = e;
    return (0, l.jsxs)("div", {
        className: e_.do,
        children: [
            (0, l.jsx)(ej.A, {
                children: (0, l.jsx)("div", {
                    className: e_.n1,
                    children: (0, l.jsx)(H.n, {
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
    return (0, l.jsx)(ey, {
        children: (0, l.jsx)(q.D, {
            color: "text-strong",
            variant: "heading-xl/semibold",
            className: e_.DD,
            children: L.intl.string(L.t.hW0mBR),
        }),
    });
}
function eC() {
    return (0, l.jsx)(ey, {
        children: (0, l.jsx)(q.D, {
            color: "text-default",
            variant: "heading-md/semibold",
            className: e_.JU,
            children: L.intl.string(L.t.obChXk),
        }),
    });
}
function eS(e) {
    let { count: n } = e;
    return (0, l.jsxs)("div", {
        className: e_.f0,
        children: [
            (0, l.jsx)("div", {
                className: M()(e_.Pc, e_.uY),
                children: (0, l.jsx)(H.n, {
                    size: "custom",
                    color: "currentColor",
                    height: 14,
                    width: 14,
                    className: e_.Kk,
                }),
            }),
            (0, l.jsx)(V.E, {
                color: "text-default",
                variant: "text-md/normal",
                children: L.intl.format(L.t.BdQTfR, { userRemainCount: n }),
            }),
        ],
    });
}
function eb(e) {
    let { eventUser: n, guildId: t, onContextMenu: r } = e,
        i = s.useRef(null),
        u = (0, a.bG)([eN.default], () => eN.default.getUser(n.user_id)),
        d = (0, a.bG)(
            [eI.A, eA.A, ev.default],
            () => (n.user_id === ev.default.getId() ? eI.A.getStatus() : eA.A.getStatus(n.user_id, t)),
            [n.user_id, t],
        );
    return null == u
        ? null
        : (0, l.jsx)(ef.A, {
              targetElementRef: i,
              userId: n.user_id,
              guildId: t,
              position: "left",
              spacing: 16,
              children: (e, s) => {
                  let { isShown: a } = s;
                  return (0, l.jsxs)(O.D, {
                      innerRef: i,
                      className: M()(e_.f0, e_.fv, { [e_.wH]: a }),
                      onContextMenu: (e) => r(e, u),
                      ...e,
                      children: [
                          (0, l.jsx)(w.eu, {
                              src: u.getAvatarURL(t, 24),
                              "aria-label": u.username,
                              size: P._3.SIZE_24,
                              className: e_.uY,
                              status: d,
                          }),
                          (0, l.jsx)(em.A, {
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
    let { eventUsers: n, guildId: t, usersNotShownCount: s = 0, onContextMenu: r } = e;
    return (0, l.jsxs)(ex.Ip, {
        className: e_.DK,
        children: [
            n.map((e) => (0, l.jsx)(eb, { guildId: t, eventUser: e, onContextMenu: r }, e.user_id)),
            s > 0 && (0, l.jsx)(eS, { count: s }),
        ],
    });
}
function ep(e) {
    let { children: n, style: t } = e;
    return (0, l.jsx)("div", { className: e_.kL, style: null != t ? t : {}, children: n });
}
function eR(e) {
    let { children: n, height: t } = e;
    return (0, l.jsx)(ep, { style: { height: t }, children: n });
}
function eT(e) {
    let { guildEvent: n, recurrenceId: s, eventUsers: r, loading: i, error: u, containerHeight: d } = e,
        a = (0, E.A)(n.guild_id, n.id, s);
    if (i && 0 === r.length)
        return (0, l.jsx)(eR, {
            height: d,
            children: (0, l.jsx)(eg.y, { type: eg.y.Type.SPINNING_CIRCLE, className: e_.u1 }),
        });
    if (null != u && 0 === r.length) return (0, l.jsx)(eR, { height: d, children: (0, l.jsx)(eC, {}) });
    let c = 0;
    return (
        r.length >= C.C1 && a > C.C1 && (c = Math.max(a - r.length, 0)),
        0 === r.length
            ? (0, l.jsx)(eR, { height: d, children: (0, l.jsx)(eE, {}) })
            : (0, l.jsx)(ep, {
                  children: (0, l.jsx)(ek, {
                      eventUsers: r,
                      guildId: n.guild_id,
                      onContextMenu: function (e, n) {
                          (0, o.L3)(e, async () => {
                              let { default: e } = await Promise.all([
                                  t.e("71406"),
                                  t.e("94881"),
                                  t.e("26132"),
                                  t.e("46652"),
                                  t.e("93190"),
                                  t.e("34552"),
                                  t.e("8757"),
                                  t.e("85968"),
                                  t.e("89673"),
                                  t.e("68403"),
                                  t.e("29787"),
                                  t.e("82073"),
                                  t.e("97558"),
                                  t.e("91994"),
                                  t.e("76665"),
                                  t.e("76273"),
                                  t.e("24198"),
                                  t.e("56753"),
                                  t.e("14461"),
                                  t.e("72883"),
                                  t.e("25486"),
                                  t.e("42204"),
                                  t.e("42191"),
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
var eL = t(482857),
    eD = t(652215),
    eG = t(832223);
function eU(e) {
    let { guildEvent: n, guild: t, channel: s, onActionTaken: i, recurrenceId: u } = e,
        d = (0, _.Fd)(n),
        c = (0, a.bG)([v.A], () => v.A.getChannelId()),
        o = c === n.channel_id && null != c && d,
        h = (0, a.bG)([_.Ay], () => _.Ay.isInterestedInEventRecurrence(n.id, u), [u, n]),
        x = (0, y.Ay)(n),
        g = (0, a.bG)([m.A], () => m.A.isLurking(t.id), [t.id]),
        j = (0, S.e)(s?.id, n.id),
        f = (0, eL.A)({ guild: t, channel: s, guildScheduledEvent: n, isActive: d, recurrenceId: u, onActionTaken: i }),
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
                ? (0, l.jsx)("div", { className: eG.Zv, children: (0, l.jsx)(p.jD, { onClick: f.onContextMenu }) })
                : void 0;
    return (0, l.jsx)(r.H, { leading: I, actions: A });
}
let eM = function (e) {
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
                    t = n.filter((n) => {
                        let t = e[n.user_id];
                        return null == t || t.response === C.Qi.INTERESTED;
                    }),
                    l = r.filter((e) => e.response === C.Qi.INTERESTED),
                    s = new Set(),
                    i = [];
                function u(e) {
                    s.has(e.user_id) || (i.push(e), s.add(e.user_id));
                }
                return t.forEach(u), l.forEach(u), i;
            }, [n, r])),
        H = null != D ? (0, k.A)(D) : null,
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
        [en, et] = s.useState(0);
    s.useLayoutEffect(() => {
        let e = 16 * (D?.recurrence_rule != null);
        et((ee?.current?.offsetHeight ?? 0) + e);
    }, [ee, D?.recurrence_rule]);
    let el = s.useRef(null);
    if (
        (s.useLayoutEffect(() => {
            z === C.al.RSVP_LIST && el.current?.focus();
        }, [z]),
        null == D || null == w)
    )
        return null;
    function es(e) {
        e !== z && (e === C.al.RSVP_LIST && Z(), F(e));
    }
    let er = T ?? (0, b.G3)(D);
    return (0, l.jsx)(x.f5, {
        value: p,
        children: (0, l.jsxs)(i.d, {
            transitionState: v,
            size: "lg",
            onClose: S,
            "aria-label": D.name,
            children: [
                (0, l.jsx)(u.rQ, { title: D.name }),
                D?.image != null &&
                    null != H &&
                    (0, l.jsx)("div", { onContextMenu: q, children: (0, l.jsx)(R.A, { source: H, className: eG.vK }) }),
                (0, l.jsx)(d.c, {
                    controls: (0, l.jsx)(G, {
                        selectedTab: z,
                        onTabSelected: es,
                        userCount: Y,
                        rsvpListTabInnerRef: el,
                    }),
                    children: (0, l.jsx)("div", {
                        className: eG.kL,
                        ref: W,
                        children: (0, l.jsxs)(c.t, {
                            activeSlide: z,
                            width: $,
                            centered: !1,
                            children: [
                                (0, l.jsx)(c.q, {
                                    id: C.al.EVENT_INFO,
                                    children: (0, l.jsx)(eh, {
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
                                (0, l.jsx)(c.q, {
                                    id: C.al.RSVP_LIST,
                                    children: (0, l.jsx)(eT, {
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
                (0, l.jsx)(eU, { guildEvent: D, guild: w, channel: V, onActionTaken: S, recurrenceId: er }),
            ],
        }),
    });
};
