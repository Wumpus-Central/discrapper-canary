n.d(t, { default: () => G });
var l = n(627968),
    i = n(64700),
    r = n(696208),
    s = n(224640),
    a = n(20742),
    c = n(430993),
    o = n(311907),
    d = n(430690),
    u = n(442433),
    _ = n(793574),
    h = n(688810),
    g = n(915089),
    A = n(857071),
    f = n(734057),
    p = n(71393),
    E = n(954571),
    m = n(645034),
    x = n(285059),
    v = n(698441),
    I = n(485394),
    C = n(826383),
    T = n(163382),
    S = n(530209),
    R = n(974930),
    N = n(691012),
    y = n(428978),
    b = n(850183),
    L = n(315960),
    j = n(659242),
    w = n(834991),
    P = n(482857),
    M = n(988794),
    D = n(652215),
    U = n(832223);
function O(e) {
    let { guildEvent: t, guild: n, channel: i, onActionTaken: s, recurrenceId: a } = e,
        c = (0, v.Fd)(t),
        d = (0, o.bG)([v.Ay], () => v.Ay.isInterestedInEventRecurrence(t.id, a), [a, t]),
        u = (0, I.Ay)(t),
        _ = (0, o.bG)([A.A], () => A.A.isLurking(n.id), [n.id]),
        h = (0, S.e)(i?.id, t.id),
        g = (0, P.A)({ guild: n, channel: i, guildScheduledEvent: t, isActive: c, recurrenceId: a, onActionTaken: s }),
        f = (0, y.Zq)({
            isActive: c,
            isUserLurking: _,
            rsvped: d,
            isChannelPublic: h,
            canInvite: u,
            entityType: t.entity_type,
            ...g,
        }),
        p =
            null != g.onContextMenu
                ? (0, l.jsx)("div", { className: U.Zv, children: (0, l.jsx)(y.jD, { onClick: g.onContextMenu }) })
                : void 0;
    return (0, l.jsx)(r.H, { leading: p, actions: f });
}
let G = (e) => {
    let { guildScheduledEventId: t, transitionState: r, initialRecurrenceId: A, onClose: I } = e,
        { analyticsLocations: S } = (0, h.Ay)(_.A.GUILD_EVENT_MODAL),
        [y, P] = i.useState(A),
        G = (0, o.bG)([v.Ay], () => v.Ay.getGuildScheduledEvent(t), [t]),
        k = G?.id,
        F = G?.guild_id,
        B = (0, o.bG)([p.A], () => p.A.getGuild(F), [F]),
        V = G?.channel_id,
        H = (0, o.bG)([f.A], () => f.A.getChannel(V), [V]),
        Z = (0, g.GV)(),
        [K, Y] = i.useState(M.al.EVENT_INFO),
        W = (0, T.A)(k, y),
        z = null != G ? (0, N.A)(G) : null,
        X = i.useCallback(
            (e) => {
                null != z &&
                    (0, u.L3)(e, async () => {
                        let { default: e } = await n.e("31658").then(n.bind(n, 928625));
                        return (t) => (0, l.jsx)(e, { ...t, imageUrl: z });
                    });
            },
            [z],
        ),
        J = (0, C.A)(F, k, y),
        [$, { loading: Q, error: q }] = (0, m.A)(() => x.A.getGuildEventUsers(G?.id, y, F));
    i.useEffect(() => {
        null == G ? I() : E.default.track(D.HAw.OPEN_MODAL, { type: M.BV, guild_id: G.guild_id });
    }, [G, I]);
    let ee = i.useRef(null),
        [et, en] = i.useState(680);
    i.useLayoutEffect(() => {
        let e = new ResizeObserver((e) => {
            e.length > 0 && en(e[0].contentRect.width);
        });
        return null != ee.current && e.observe(ee.current), () => e.disconnect();
    }, [ee]);
    let el = i.useRef(null),
        [ei, er] = i.useState(0);
    if (
        (i.useLayoutEffect(() => {
            let e = 16 * (G?.recurrence_rule != null);
            er((el?.current?.offsetHeight ?? 0) + e);
        }, [el, G?.recurrence_rule]),
        null == G || null == B)
    )
        return null;
    let es = (e) => {
            e !== K && (e === M.al.RSVP_LIST && $(), Y(e));
        },
        ea = y ?? (0, R.G3)(G);
    return (0, l.jsx)(h.f5, {
        value: S,
        children: (0, l.jsxs)(s.d, {
            transitionState: r,
            size: "lg",
            onClose: I,
            children: [
                (0, l.jsx)(a.rQ, { title: G.name }),
                G?.image != null &&
                    null != z &&
                    (0, l.jsx)("div", { onContextMenu: X, children: (0, l.jsx)(b.A, { source: z, className: U.vK }) }),
                (0, l.jsx)(c.c, {
                    controls: (0, l.jsx)(L.A, { selectedTab: K, onTabSelected: es, userCount: J }),
                    children: (0, l.jsx)("div", {
                        className: U.kL,
                        ref: ee,
                        children: (0, l.jsxs)(d.t, {
                            activeSlide: K,
                            width: et,
                            centered: !1,
                            children: [
                                (0, l.jsx)(d.q, {
                                    id: M.al.EVENT_INFO,
                                    children: (0, l.jsx)(j.A, {
                                        guildEvent: G,
                                        guild: B,
                                        channel: H,
                                        headerId: Z,
                                        onClose: I,
                                        onClickInterestedCount: () => es(M.al.RSVP_LIST),
                                        containerRef: el,
                                        recurrenceId: ea,
                                        setRecurrenceId: P,
                                    }),
                                }),
                                (0, l.jsx)(d.q, {
                                    id: M.al.RSVP_LIST,
                                    children: (0, l.jsx)(w.A, {
                                        guildEvent: G,
                                        recurrenceId: ea,
                                        eventUsers: W,
                                        loading: Q,
                                        containerHeight: ei,
                                        error: q,
                                    }),
                                }),
                            ],
                        }),
                    }),
                }),
                (0, l.jsx)(O, { guildEvent: G, guild: B, channel: H, onActionTaken: I, recurrenceId: ea }),
            ],
        }),
    });
};
