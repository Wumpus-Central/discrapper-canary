n.d(t, { default: () => en });
var i = n(627968),
    a = n(64700),
    l = n(735438),
    r = n.n(l),
    s = n(17928),
    d = n(192308),
    c = n(935462),
    u = n(81466),
    o = n(534514),
    g = n(821609),
    A = n(939249),
    m = n(789645),
    h = n(334738),
    p = n(964486),
    x = n(915089),
    E = n(860071),
    v = n(71393),
    C = n(222823),
    G = n(174459),
    b = n(403362);
n(422653);
var f = n(935208),
    N = n(285059),
    j = n(770666),
    k = n(508654),
    y = n(857071),
    I = n(518769),
    _ = n(446600),
    S = n(734057),
    D = n(576705),
    L = n(763827),
    M = n(287809),
    w = n(707592),
    T = n(698441),
    B = n(485394),
    P = n(113783),
    U = n(794782),
    z = n(9448),
    O = n(647090),
    R = n(691012),
    V = n(779519),
    q = n(482857),
    F = n(652215);
function K(e) {
    let { guildEvent: t, truncate: n, onActionTaken: a, className: l, isNew: r } = e,
        {
            id: d,
            guild_id: c,
            channel_id: u,
            creator_id: o,
            name: g,
            description: A,
            entity_type: m,
            image: h,
            recurrence_rule: p,
        } = t,
        x = (0, O.G3)(t),
        E = (0, s.bG)([T.Ay], () => T.Ay.isInterestedInEventRecurrence(d, x), [d, x]),
        C = (0, s.bG)([y.A], () => y.A.isLurking(c), [c]),
        G = (0, s.bG)([_.A], () => _.A.getStageInstanceByChannel(u), [u]),
        b = (0, s.bG)([v.A], () => v.A.getGuild(c), [c]),
        f = (0, s.bG)([S.A], () => S.A.getChannel(u), [u]),
        N = (0, s.bG)([M.default], () => M.default.getUser(o), [o]),
        { speakers: j } = (function (e) {
            let {
                    id: t,
                    data: { guild: n, instance: i, speakers: a, participantCount: l },
                    context: r,
                } = e,
                d = (0, s.bG)([v.A, S.A], () => v.A.getGuild(S.A.getChannel(t)?.getGuildId()), [t]),
                c = (0, s.bG)([_.A], () => _.A.getStageInstanceByChannel(t), [t]),
                u = (0, P.E5)(t, I.ip.SPEAKER),
                o = (0, P.zy)(t),
                g = null != c ? u : a,
                A = (null != c ? o : l) - g.length;
            return { channelId: t, guild: d ?? n, stage: c ?? i, speakers: g, audienceCount: A, context: r };
        })({
            id: u,
            data: { guild: null, instance: G, speakers: [], participantCount: 0 },
            context: { guildId: c, instance: G },
        }),
        k = (0, s.bG)([L.A], () => L.A.getChannelId()),
        K = (0, T.Fd)(t),
        H = k === u && null != k && K,
        J = j.filter((e) => e.type === I.wY.VOICE),
        Q = J.length,
        $ = (0, s.bG)([D.A], () => D.A.can(F.xBc.CONNECT, f), [f]),
        W = (0, B.Ay)(t),
        X = null != b,
        Y = (0, q.A)({ guild: b, channel: f, guildScheduledEvent: t, isActive: K, recurrenceId: x, onActionTaken: a }),
        Z = C ? void 0 : (e) => (0, w.uR)({ eventId: d, recurrenceId: e });
    return (0, i.jsx)(V.A, {
        guild: b,
        channel: f,
        creator: N,
        name: g,
        entityType: m,
        description: A ?? void 0,
        location: (0, z.oF)(t) ?? void 0,
        imageSource: null != h ? (0, R.A)(t) : void 0,
        imageLocation: V.c.THUMBNAIL,
        isActive: K,
        isUserLurking: C,
        isJoined: H,
        isMember: X,
        speakers: J,
        canConnect: $,
        speakerCount: Q,
        rsvped: E,
        canInvite: W,
        ...Y,
        className: l,
        onClick: Z,
        truncate: n,
        isNew: r,
        guildEvent: t,
        recurrenceRule: (0, U.Sn)(p),
        recurrenceId: x,
    });
}
var H = n(834730),
    J = n(468689),
    Q = n(710358),
    $ = n(375708),
    W = n(553434);
function X(e) {
    let { guildId: t, onClose: n } = e,
        a = (0, s.bG)([v.A, D.A], () => {
            let e = v.A.getGuild(t);
            return D.A.can(F.xBc.MANAGE_ROLES, e);
        }, [t]);
    return (0, i.jsxs)("div", {
        className: W.kL,
        children: [
            (0, i.jsx)(Q.A, {
                children: (0, i.jsx)("div", {
                    className: W.n1,
                    children: (0, i.jsx)(u.C, {
                        size: "custom",
                        color: "currentColor",
                        height: 40,
                        width: 40,
                        className: W.Kk,
                        "aria-label": $.intl.string($.t.uxFcqu),
                    }),
                }),
            }),
            (0, i.jsx)(o.D, {
                color: "text-strong",
                variant: "heading-xl/semibold",
                className: W.DD,
                children: $.intl.string($.t["WgZ+3D"]),
            }),
            (0, i.jsx)(H.E, {
                color: "text-default",
                variant: "text-sm/normal",
                className: W.VA,
                children: $.intl.string($.t["v/S/PG"]),
            }),
            a &&
                (0, i.jsx)(H.E, {
                    color: "text-default",
                    variant: "text-sm/normal",
                    className: W.Ec,
                    children: $.intl.format($.t["K+DH2o"], {
                        onClick: () => {
                            J.A.open(t, F.BEX.ROLES), n();
                        },
                    }),
                }),
        ],
    });
}
var Y = n(823508),
    Z = n(988794),
    ee = n(790782),
    et = n(420183);
function en(e) {
    let { transitionState: t, onClose: l, guildId: y } = e,
        I = (0, x.GV)(),
        _ = (0, s.bG)([v.A], () => v.A.getGuild(y)),
        S = (0, j.A)(_?.id),
        D = (0, k.Ay)(y),
        L = a.useRef(C.Ay.ackMessageId(y, ee.P.GUILD_EVENT)),
        M = (0, Y.A)();
    return (
        a.useEffect(() => {
            D.forEach((e) => N.A.getGuildEventUserCounts(y, e.id, [])), N.A.getGuildEventsForCurrentUser(y);
        }, [D, y]),
        (0, p.Ay)(() => {
            G.default.track(F.HAw.OPEN_MODAL, { type: Z.BV, guild_id: y, guild_events_count: D.length });
        }),
        a.useEffect(() => {
            r()(D)
                .map((e) => e.creator_id)
                .filter(b.Vq)
                .uniq()
                .forEach((e) => {
                    E.A.requestMember(y, e);
                });
        }, [y, D]),
        a.useEffect(() => {
            null != y && (0, h.hK)(y, ee.P.GUILD_EVENT);
        }, [y]),
        (0, i.jsxs)(c.EO, {
            size: c.rI.MEDIUM,
            transitionState: t,
            "aria-labelledby": I,
            parentComponent: "GuildEventsModal",
            "data-migration-pending": !0,
            children: [
                (0, i.jsxs)(c.rQ, {
                    className: et.wx,
                    "data-migration-pending": !0,
                    children: [
                        (0, i.jsx)(u.C, { size: "md", color: "currentColor", className: et.Kk }),
                        (0, i.jsx)(o.D, {
                            id: I,
                            variant: "heading-md/semibold",
                            children:
                                D.length > 0
                                    ? $.intl.formatToPlainString($.t.IBdqSu, { number: D.length })
                                    : $.intl.string($.t.tlopTM),
                        }),
                        S &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)("div", { className: et.yF, children: "|" }),
                                    (0, i.jsx)(g.$, {
                                        variant: "primary",
                                        size: "sm",
                                        onClick: () => {
                                            (0, d.openModalLazy)(async () => {
                                                let { default: e } = await Promise.all([
                                                    n.e("44588"),
                                                    n.e("6212"),
                                                    n.e("5978"),
                                                    n.e("2677"),
                                                    n.e("74539"),
                                                    n.e("88826"),
                                                    n.e("28510"),
                                                    n.e("61156"),
                                                    n.e("16767"),
                                                    n.e("59957"),
                                                    n.e("6841"),
                                                    n.e("28136"),
                                                    n.e("16084"),
                                                    n.e("10262"),
                                                    n.e("71329"),
                                                    n.e("70089"),
                                                    n.e("70160"),
                                                    n.e("54450"),
                                                    n.e("60423"),
                                                ]).then(n.bind(n, 729398));
                                                return (t) => (0, i.jsx)(e, { ...t, guildId: y });
                                            }, M);
                                        },
                                        text: $.intl.string($.t["60lJ0C"]),
                                    }),
                                ],
                            }),
                        (0, i.jsx)(A.D, {
                            onClick: l,
                            className: et.gb,
                            "aria-label": $.intl.string($.t.cpT0Cq),
                            children: (0, i.jsx)(m.P, { size: "md", color: "currentColor", className: et.Kk }),
                        }),
                    ],
                }),
                (0, i.jsx)(c.$m, {
                    className: et.Qs,
                    "data-migration-pending": !0,
                    children:
                        D.length > 0
                            ? D.map((e) =>
                                  (0, i.jsx)(
                                      K,
                                      {
                                          guildEvent: e,
                                          onActionTaken: l,
                                          isNew: null != L.current && f.default.compare(e.id, L.current) > 0,
                                      },
                                      e.id,
                                  ),
                              )
                            : (0, i.jsx)(X, { guildId: y, onClose: l }),
                }),
            ],
        })
    );
}
