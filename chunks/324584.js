t.d(n, { default: () => B });
var i = t(627968),
    l = t(64700),
    d = t(696208),
    r = t(224640),
    s = t(20742),
    a = t(430993),
    c = t(311907),
    o = t(430690),
    u = t(442433),
    _ = t(793574),
    g = t(688810),
    h = t(915089),
    f = t(857071),
    v = t(734057),
    x = t(71393),
    m = t(954571),
    p = t(645034),
    A = t(285059),
    I = t(698441),
    j = t(485394),
    b = t(826383),
    N = t(163382),
    C = t(530209),
    E = t(974930),
    y = t(691012),
    k = t(428978),
    S = t(850183),
    L = t(315960),
    T = t(659242),
    D = t(834991),
    R = t(482857),
    w = t(988794),
    G = t(652215),
    P = t(832223);
function M(e) {
    let { guildEvent: n, guild: t, channel: l, onActionTaken: r, recurrenceId: s } = e,
        a = (0, I.Fd)(n),
        o = (0, c.bG)([I.Ay], () => I.Ay.isInterestedInEventRecurrence(n.id, s), [s, n]),
        u = (0, j.Ay)(n),
        _ = (0, c.bG)([f.A], () => f.A.isLurking(t.id), [t.id]),
        g = (0, C.e)(l?.id, n.id),
        h = (0, R.A)({ guild: t, channel: l, guildScheduledEvent: n, isActive: a, recurrenceId: s, onActionTaken: r }),
        v = (0, k.Zq)({
            isActive: a,
            isUserLurking: _,
            rsvped: o,
            isChannelPublic: g,
            canInvite: u,
            entityType: n.entity_type,
            ...h,
        }),
        x =
            null != h.onContextMenu
                ? (0, i.jsx)("div", { className: P.Zv, children: (0, i.jsx)(k.jD, { onClick: h.onContextMenu }) })
                : void 0;
    return (0, i.jsx)(d.H, { leading: x, actions: v });
}
let B = (e) => {
    let { guildScheduledEventId: n, transitionState: d, initialRecurrenceId: f, onClose: j } = e,
        { analyticsLocations: C } = (0, g.Ay)(_.A.GUILD_EVENT_MODAL),
        [k, R] = l.useState(f),
        B = (0, c.bG)([I.Ay], () => I.Ay.getGuildScheduledEvent(n), [n]),
        U = B?.id,
        V = B?.guild_id,
        O = (0, c.bG)([x.A], () => x.A.getGuild(V), [V]),
        K = B?.channel_id,
        H = (0, c.bG)([v.A], () => v.A.getChannel(K), [K]),
        F = (0, h.GV)(),
        [z, J] = l.useState(w.al.EVENT_INFO),
        W = (0, N.A)(U, k),
        Y = null != B ? (0, y.A)(B) : null,
        Z = l.useCallback(
            (e) => {
                null != Y &&
                    (0, u.L3)(e, async () => {
                        let { default: e } = await t.e("31658").then(t.bind(t, 928625));
                        return (n) => (0, i.jsx)(e, { ...n, imageUrl: Y });
                    });
            },
            [Y],
        ),
        X = (0, b.A)(V, U, k),
        [q, { loading: Q, error: $ }] = (0, p.A)(() => A.A.getGuildEventUsers(B?.id, k, V));
    l.useEffect(() => {
        null == B ? j() : m.default.track(G.HAw.OPEN_MODAL, { type: w.BV, guild_id: B.guild_id });
    }, [B, j]);
    let ee = l.useRef(null),
        [en, et] = l.useState(680);
    l.useLayoutEffect(() => {
        let e = new ResizeObserver((e) => {
            e.length > 0 && et(e[0].contentRect.width);
        });
        return null != ee.current && e.observe(ee.current), () => e.disconnect();
    }, [ee]);
    let ei = l.useRef(null),
        [el, ed] = l.useState(0);
    if (
        (l.useLayoutEffect(() => {
            let e = 16 * (B?.recurrence_rule != null);
            ed((ei?.current?.offsetHeight ?? 0) + e);
        }, [ei, B?.recurrence_rule]),
        null == B || null == O)
    )
        return null;
    let er = (e) => {
            e !== z && (e === w.al.RSVP_LIST && q(), J(e));
        },
        es = k ?? (0, E.G3)(B);
    return (0, i.jsx)(g.f5, {
        value: C,
        children: (0, i.jsxs)(r.d, {
            transitionState: d,
            size: "lg",
            onClose: j,
            children: [
                (0, i.jsx)(s.rQ, { title: B.name }),
                B?.image != null &&
                    null != Y &&
                    (0, i.jsx)("div", { onContextMenu: Z, children: (0, i.jsx)(S.A, { source: Y, className: P.vK }) }),
                (0, i.jsx)(a.c, {
                    controls: (0, i.jsx)(L.A, { selectedTab: z, onTabSelected: er, userCount: X }),
                    children: (0, i.jsx)("div", {
                        className: P.kL,
                        ref: ee,
                        children: (0, i.jsxs)(o.t, {
                            activeSlide: z,
                            width: en,
                            centered: !1,
                            children: [
                                (0, i.jsx)(o.q, {
                                    id: w.al.EVENT_INFO,
                                    children: (0, i.jsx)(T.A, {
                                        guildEvent: B,
                                        guild: O,
                                        channel: H,
                                        headerId: F,
                                        onClose: j,
                                        onClickInterestedCount: () => er(w.al.RSVP_LIST),
                                        containerRef: ei,
                                        recurrenceId: es,
                                        setRecurrenceId: R,
                                    }),
                                }),
                                (0, i.jsx)(o.q, {
                                    id: w.al.RSVP_LIST,
                                    children: (0, i.jsx)(D.A, {
                                        guildEvent: B,
                                        recurrenceId: es,
                                        eventUsers: W,
                                        loading: Q,
                                        containerHeight: el,
                                        error: $,
                                    }),
                                }),
                            ],
                        }),
                    }),
                }),
                (0, i.jsx)(M, { guildEvent: B, guild: O, channel: H, onActionTaken: j, recurrenceId: es }),
            ],
        }),
    });
};
