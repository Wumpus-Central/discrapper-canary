n.d(t, { default: () => en });
var l = n(627968),
    i = n(64700),
    a = n(735438),
    s = n.n(a),
    r = n(17928),
    c = n(192308),
    o = n(935462),
    d = n(81466),
    u = n(534514),
    m = n(821609),
    g = n(939249),
    h = n(789645),
    x = n(334738),
    A = n(964486),
    v = n(915089),
    N = n(860071),
    E = n(71393),
    C = n(222823),
    f = n(954571),
    j = n(403362);
n(645034);
var p = n(935208),
    y = n(285059),
    k = n(770666),
    I = n(508654),
    _ = n(857071),
    T = n(69407),
    L = n(446600),
    b = n(734057),
    G = n(576705),
    w = n(763827),
    P = n(287809),
    S = n(707592),
    D = n(698441),
    M = n(485394),
    R = n(113783),
    B = n(794782),
    V = n(9448),
    U = n(974930),
    O = n(691012),
    z = n(779519),
    K = n(482857),
    H = n(652215);
function X(e) {
    let { guildEvent: t, truncate: n, onActionTaken: i, className: a, isNew: s } = e,
        {
            id: c,
            guild_id: o,
            channel_id: d,
            creator_id: u,
            name: m,
            description: g,
            entity_type: h,
            image: x,
            recurrence_rule: A,
        } = t,
        v = (0, U.G3)(t),
        N = (0, r.bG)([D.Ay], () => D.Ay.isInterestedInEventRecurrence(c, v), [c, v]),
        C = (0, r.bG)([_.A], () => _.A.isLurking(o), [o]),
        f = (0, r.bG)([L.A], () => L.A.getStageInstanceByChannel(d), [d]),
        j = (0, r.bG)([E.A], () => E.A.getGuild(o), [o]),
        p = (0, r.bG)([b.A], () => b.A.getChannel(d), [d]),
        y = (0, r.bG)([P.default], () => P.default.getUser(u), [u]),
        { speakers: k } = (function (e) {
            let {
                    id: t,
                    data: { guild: n, instance: l, speakers: i, participantCount: a },
                    context: s,
                } = e,
                c = (0, r.bG)([E.A, b.A], () => E.A.getGuild(b.A.getChannel(t)?.getGuildId()), [t]),
                o = (0, r.bG)([L.A], () => L.A.getStageInstanceByChannel(t), [t]),
                d = (0, R.E5)(t, T.ip.SPEAKER),
                u = (0, R.zy)(t),
                m = null != o ? d : i,
                g = (null != o ? u : a) - m.length;
            return { channelId: t, guild: c ?? n, stage: o ?? l, speakers: m, audienceCount: g, context: s };
        })({
            id: d,
            data: { guild: null, instance: f, speakers: [], participantCount: 0 },
            context: { guildId: o, instance: f },
        }),
        I = (0, r.bG)([w.A], () => w.A.getChannelId()),
        X = (0, D.Fd)(t),
        q = I === d && null != I && X,
        W = k.filter((e) => e.type === T.wY.VOICE),
        Y = W.length,
        J = (0, r.bG)([G.A], () => G.A.can(H.xBc.CONNECT, p), [p]),
        Z = (0, M.Ay)(t),
        F = null != j,
        Q = (0, K.A)({ guild: j, channel: p, guildScheduledEvent: t, isActive: X, recurrenceId: v, onActionTaken: i }),
        $ = C ? void 0 : (e) => (0, S.uR)({ eventId: c, recurrenceId: e });
    return (0, l.jsx)(z.A, {
        guild: j,
        channel: p,
        creator: y,
        name: m,
        entityType: h,
        description: g ?? void 0,
        location: (0, V.oF)(t) ?? void 0,
        imageSource: null != x ? (0, O.A)(t) : void 0,
        imageLocation: z.c.THUMBNAIL,
        isActive: X,
        isUserLurking: C,
        isJoined: q,
        isMember: F,
        speakers: W,
        canConnect: J,
        speakerCount: Y,
        rsvped: N,
        canInvite: Z,
        ...Q,
        className: a,
        onClick: $,
        truncate: n,
        isNew: s,
        guildEvent: t,
        recurrenceRule: (0, B.Sn)(A),
        recurrenceId: v,
    });
}
var q = n(834730),
    W = n(997509),
    Y = n(710358),
    J = n(985018),
    Z = n(553434);
function F(e) {
    let { guildId: t, onClose: n } = e,
        i = (0, r.bG)([E.A, G.A], () => {
            let e = E.A.getGuild(t);
            return G.A.can(H.xBc.MANAGE_ROLES, e);
        }, [t]);
    return (0, l.jsxs)("div", {
        className: Z.kL,
        children: [
            (0, l.jsx)(Y.A, {
                children: (0, l.jsx)("div", {
                    className: Z.n1,
                    children: (0, l.jsx)(d.C, {
                        size: "custom",
                        color: "currentColor",
                        height: 40,
                        width: 40,
                        className: Z.Kk,
                    }),
                }),
            }),
            (0, l.jsx)(u.D, {
                color: "text-strong",
                variant: "heading-xl/semibold",
                className: Z.DD,
                children: J.intl.string(J.t["WgZ+3D"]),
            }),
            (0, l.jsx)(q.E, {
                color: "text-default",
                variant: "text-sm/normal",
                className: Z.VA,
                children: J.intl.string(J.t["v/S/PG"]),
            }),
            i &&
                (0, l.jsx)(q.E, {
                    color: "text-default",
                    variant: "text-sm/normal",
                    className: Z.Ec,
                    children: J.intl.format(J.t["K+DH2o"], {
                        onClick: () => {
                            W.A.open(t, H.BEX.ROLES), n();
                        },
                    }),
                }),
        ],
    });
}
var Q = n(823508),
    $ = n(988794),
    ee = n(790782),
    et = n(420183);
function en(e) {
    let { transitionState: t, onClose: a, guildId: _ } = e,
        T = (0, v.GV)(),
        L = (0, r.bG)([E.A], () => E.A.getGuild(_)),
        b = (0, k.A)(L?.id),
        G = (0, I.Ay)(_),
        w = i.useRef(C.Ay.ackMessageId(_, ee.P.GUILD_EVENT)),
        P = (0, Q.A)();
    return (
        i.useEffect(() => {
            G.forEach((e) => y.A.getGuildEventUserCounts(_, e.id, [])), y.A.getGuildEventsForCurrentUser(_);
        }, [G, _]),
        (0, A.Ay)(() => {
            f.default.track(H.HAw.OPEN_MODAL, { type: $.BV, guild_id: _, guild_events_count: G.length });
        }),
        i.useEffect(() => {
            s()(G)
                .map((e) => e.creator_id)
                .filter(j.Vq)
                .uniq()
                .forEach((e) => {
                    N.A.requestMember(_, e);
                });
        }, [_, G]),
        i.useEffect(() => {
            null != _ && (0, x.hK)(_, ee.P.GUILD_EVENT);
        }, [_]),
        (0, l.jsxs)(o.EO, {
            size: o.rI.MEDIUM,
            transitionState: t,
            "aria-labelledby": T,
            parentComponent: "GuildEventsModal",
            "data-migration-pending": !0,
            children: [
                (0, l.jsxs)(o.rQ, {
                    className: et.wx,
                    "data-migration-pending": !0,
                    children: [
                        (0, l.jsx)(d.C, { size: "md", color: "currentColor", className: et.Kk }),
                        (0, l.jsx)(u.D, {
                            id: T,
                            variant: "heading-md/semibold",
                            children:
                                G.length > 0
                                    ? J.intl.formatToPlainString(J.t.IBdqSu, { number: G.length })
                                    : J.intl.string(J.t.tlopTM),
                        }),
                        b &&
                            (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, l.jsx)("div", { className: et.yF, children: "|" }),
                                    (0, l.jsx)(m.$, {
                                        variant: "primary",
                                        size: "sm",
                                        onClick: () => {
                                            (0, c.openModalLazy)(async () => {
                                                let { default: e } = await Promise.all([
                                                    n.e("68883"),
                                                    n.e("28136"),
                                                    n.e("68587"),
                                                    n.e("60423"),
                                                    n.e("54928"),
                                                ]).then(n.bind(n, 729398));
                                                return (t) => (0, l.jsx)(e, { ...t, guildId: _ });
                                            }, P);
                                        },
                                        text: J.intl.string(J.t["60lJ0C"]),
                                    }),
                                ],
                            }),
                        (0, l.jsx)(g.D, {
                            onClick: a,
                            className: et.gb,
                            "aria-label": J.intl.string(J.t.cpT0Cq),
                            children: (0, l.jsx)(h.P, { size: "md", color: "currentColor", className: et.Kk }),
                        }),
                    ],
                }),
                (0, l.jsx)(o.$m, {
                    className: et.Qs,
                    "data-migration-pending": !0,
                    children:
                        G.length > 0
                            ? G.map((e) =>
                                  (0, l.jsx)(
                                      X,
                                      {
                                          guildEvent: e,
                                          onActionTaken: a,
                                          isNew: null != w.current && p.default.compare(e.id, w.current) > 0,
                                      },
                                      e.id,
                                  ),
                              )
                            : (0, l.jsx)(F, { guildId: _, onClose: a }),
                }),
            ],
        })
    );
}
