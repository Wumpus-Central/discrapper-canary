t.d(n, { default: () => w });
var i = t(627968),
    l = t(64700),
    d = t(158954),
    r = t(311907),
    s = t(397927),
    a = t(442433),
    c = t(793574),
    o = t(688810),
    u = t(915089),
    _ = t(857071),
    g = t(734057),
    f = t(71393),
    h = t(954571),
    x = t(645034),
    m = t(285059),
    v = t(698441),
    p = t(485394),
    A = t(826383),
    I = t(163382),
    j = t(530209),
    b = t(974930),
    N = t(691012),
    C = t(428978),
    y = t(850183),
    k = t(315960),
    E = t(659242),
    S = t(834991),
    T = t(482857),
    L = t(988794),
    D = t(652215),
    R = t(381199);
function G(e) {
    let { guildEvent: n, guild: t, channel: l, onActionTaken: s, recurrenceId: a } = e,
        c = (0, v.Fd)(n),
        o = (0, r.bG)([v.Ay], () => v.Ay.isInterestedInEventRecurrence(n.id, a), [a, n]),
        u = (0, p.Ay)(n),
        g = (0, r.bG)([_.A], () => _.A.isLurking(t.id), [t.id]),
        f = (0, j.e)(l?.id, n.id),
        h = (0, T.A)({ guild: t, channel: l, guildScheduledEvent: n, isActive: c, recurrenceId: a, onActionTaken: s }),
        x = (0, C.Zq)({
            isActive: c,
            isUserLurking: g,
            rsvped: o,
            isChannelPublic: f,
            canInvite: u,
            entityType: n.entity_type,
            ...h,
        }),
        m =
            null != h.onContextMenu
                ? (0, i.jsx)("div", { className: R.Zv, children: (0, i.jsx)(C.jD, { onClick: h.onContextMenu }) })
                : void 0;
    return (0, i.jsx)(d.H7u, { leading: m, actions: x });
}
let w = (e) => {
    let { guildScheduledEventId: n, transitionState: _, initialRecurrenceId: p, onClose: j } = e,
        { analyticsLocations: C } = (0, o.Ay)(c.A.GUILD_EVENT_MODAL),
        [T, w] = l.useState(p),
        P = (0, r.bG)([v.Ay], () => v.Ay.getGuildScheduledEvent(n), [n]),
        U = P?.id,
        B = P?.guild_id,
        M = (0, r.bG)([f.A], () => f.A.getGuild(B), [B]),
        O = P?.channel_id,
        V = (0, r.bG)([g.A], () => g.A.getChannel(O), [O]),
        F = (0, u.GV)(),
        [K, H] = l.useState(L.al.EVENT_INFO),
        J = (0, I.A)(U, T),
        z = null != P ? (0, N.A)(P) : null,
        W = l.useCallback(
            (e) => {
                null != z &&
                    (0, a.L3)(e, async () => {
                        let { default: e } = await t.e("31658").then(t.bind(t, 928625));
                        return (n) => (0, i.jsx)(e, { ...n, imageUrl: z });
                    });
            },
            [z],
        ),
        Q = (0, A.A)(B, U, T),
        [Y, { loading: X, error: Z }] = (0, x.A)(() => m.A.getGuildEventUsers(P?.id, T, B));
    l.useEffect(() => {
        null == P ? j() : h.default.track(D.HAw.OPEN_MODAL, { type: L.BV, guild_id: P.guild_id });
    }, [P, j]);
    let q = l.useRef(null),
        [$, ee] = l.useState(680);
    l.useLayoutEffect(() => {
        let e = new ResizeObserver((e) => {
            e.length > 0 && ee(e[0].contentRect.width);
        });
        return null != q.current && e.observe(q.current), () => e.disconnect();
    }, [q]);
    let en = l.useRef(null),
        [et, ei] = l.useState(0);
    if (
        (l.useLayoutEffect(() => {
            let e = 16 * (P?.recurrence_rule != null);
            ei((en?.current?.offsetHeight ?? 0) + e);
        }, [en, P?.recurrence_rule]),
        null == P || null == M)
    )
        return null;
    let el = (e) => {
            e !== K && (e === L.al.RSVP_LIST && Y(), H(e));
        },
        ed = T ?? (0, b.G3)(P);
    return (0, i.jsx)(o.f5, {
        value: C,
        children: (0, i.jsxs)(d.dWK, {
            transitionState: _,
            size: "lg",
            onClose: j,
            children: [
                (0, i.jsx)(d.rQ0, { title: P.name }),
                P?.image != null &&
                    null != z &&
                    (0, i.jsx)("div", { onContextMenu: W, children: (0, i.jsx)(y.A, { source: z, className: R.vK }) }),
                (0, i.jsx)(d.cwr, {
                    controls: (0, i.jsx)(k.A, { selectedTab: K, onTabSelected: el, userCount: Q }),
                    children: (0, i.jsx)("div", {
                        className: R.kL,
                        ref: q,
                        children: (0, i.jsxs)(s.tN_, {
                            activeSlide: K,
                            width: $,
                            centered: !1,
                            children: [
                                (0, i.jsx)(s.q7S, {
                                    id: L.al.EVENT_INFO,
                                    children: (0, i.jsx)(E.A, {
                                        guildEvent: P,
                                        guild: M,
                                        channel: V,
                                        headerId: F,
                                        onClose: j,
                                        onClickInterestedCount: () => el(L.al.RSVP_LIST),
                                        containerRef: en,
                                        recurrenceId: ed,
                                        setRecurrenceId: w,
                                    }),
                                }),
                                (0, i.jsx)(s.q7S, {
                                    id: L.al.RSVP_LIST,
                                    children: (0, i.jsx)(S.A, {
                                        guildEvent: P,
                                        recurrenceId: ed,
                                        eventUsers: J,
                                        loading: X,
                                        containerHeight: et,
                                        error: Z,
                                    }),
                                }),
                            ],
                        }),
                    }),
                }),
                (0, i.jsx)(G, { guildEvent: P, guild: M, channel: V, onActionTaken: j, recurrenceId: ed }),
            ],
        }),
    });
};
