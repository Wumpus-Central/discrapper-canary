t.d(n, { default: () => et });
var l = t(627968),
    i = t(64700),
    a = t(735438),
    s = t.n(a),
    r = t(17928),
    c = t(192308),
    o = t(935462),
    d = t(81466),
    u = t(534514),
    g = t(821609),
    m = t(939249),
    h = t(789645),
    A = t(334738),
    v = t(964486),
    C = t(915089),
    x = t(860071),
    p = t(71393),
    N = t(222823),
    E = t(954571),
    f = t(403362);
t(645034);
var j = t(935208),
    k = t(285059),
    y = t(770666),
    G = t(508654),
    _ = t(857071),
    I = t(69407),
    b = t(446600),
    P = t(734057),
    L = t(576705),
    M = t(763827),
    S = t(287809),
    T = t(707592),
    D = t(698441),
    B = t(485394),
    w = t(113783),
    R = t(794782),
    U = t(9448),
    V = t(974930),
    O = t(691012),
    K = t(779519),
    z = t(482857),
    q = t(652215);
function H(e) {
    let { guildEvent: n, truncate: t, onActionTaken: i, className: a, isNew: s } = e,
        {
            id: c,
            guild_id: o,
            channel_id: d,
            creator_id: u,
            name: g,
            description: m,
            entity_type: h,
            image: A,
            recurrence_rule: v,
        } = n,
        C = (0, V.G3)(n),
        x = (0, r.bG)([D.Ay], () => D.Ay.isInterestedInEventRecurrence(c, C), [c, C]),
        N = (0, r.bG)([_.A], () => _.A.isLurking(o), [o]),
        E = (0, r.bG)([b.A], () => b.A.getStageInstanceByChannel(d), [d]),
        f = (0, r.bG)([p.A], () => p.A.getGuild(o), [o]),
        j = (0, r.bG)([P.A], () => P.A.getChannel(d), [d]),
        k = (0, r.bG)([S.default], () => S.default.getUser(u), [u]),
        { speakers: y } = (function (e) {
            let {
                    id: n,
                    data: { guild: t, instance: l, speakers: i, participantCount: a },
                    context: s,
                } = e,
                c = (0, r.bG)([p.A, P.A], () => p.A.getGuild(P.A.getChannel(n)?.getGuildId()), [n]),
                o = (0, r.bG)([b.A], () => b.A.getStageInstanceByChannel(n), [n]),
                d = (0, w.E5)(n, I.ip.SPEAKER),
                u = (0, w.zy)(n),
                g = null != o ? d : i,
                m = (null != o ? u : a) - g.length;
            return { channelId: n, guild: c ?? t, stage: o ?? l, speakers: g, audienceCount: m, context: s };
        })({
            id: d,
            data: { guild: null, instance: E, speakers: [], participantCount: 0 },
            context: { guildId: o, instance: E },
        }),
        G = (0, r.bG)([M.A], () => M.A.getChannelId()),
        H = (0, D.Fd)(n),
        J = G === d && null != G && H,
        X = y.filter((e) => e.type === I.wY.VOICE),
        F = X.length,
        W = (0, r.bG)([L.A], () => L.A.can(q.xBc.CONNECT, j), [j]),
        Q = (0, B.Ay)(n),
        Y = null != f,
        Z = (0, z.A)({ guild: f, channel: j, guildScheduledEvent: n, isActive: H, recurrenceId: C, onActionTaken: i }),
        $ = N ? void 0 : (e) => (0, T.uR)({ eventId: c, recurrenceId: e });
    return (0, l.jsx)(K.A, {
        guild: f,
        channel: j,
        creator: k,
        name: g,
        entityType: h,
        description: m ?? void 0,
        location: (0, U.oF)(n) ?? void 0,
        imageSource: null != A ? (0, O.A)(n) : void 0,
        imageLocation: K.c.THUMBNAIL,
        isActive: H,
        isUserLurking: N,
        isJoined: J,
        isMember: Y,
        speakers: X,
        canConnect: W,
        speakerCount: F,
        rsvped: x,
        canInvite: Q,
        ...Z,
        className: a,
        onClick: $,
        truncate: t,
        isNew: s,
        guildEvent: n,
        recurrenceRule: (0, R.Sn)(v),
        recurrenceId: C,
    });
}
var J = t(834730),
    X = t(997509),
    F = t(710358),
    W = t(985018),
    Q = t(553434);
function Y(e) {
    let { guildId: n, onClose: t } = e,
        i = (0, r.bG)([p.A, L.A], () => {
            let e = p.A.getGuild(n);
            return L.A.can(q.xBc.MANAGE_ROLES, e);
        }, [n]);
    return (0, l.jsxs)("div", {
        className: Q.kL,
        children: [
            (0, l.jsx)(F.A, {
                children: (0, l.jsx)("div", {
                    className: Q.n1,
                    children: (0, l.jsx)(d.C, {
                        size: "custom",
                        color: "currentColor",
                        height: 40,
                        width: 40,
                        className: Q.Kk,
                    }),
                }),
            }),
            (0, l.jsx)(u.D, {
                color: "text-strong",
                variant: "heading-xl/semibold",
                className: Q.DD,
                children: W.intl.string(W.t["WgZ+3D"]),
            }),
            (0, l.jsx)(J.E, {
                color: "text-default",
                variant: "text-sm/normal",
                className: Q.VA,
                children: W.intl.string(W.t["v/S/PG"]),
            }),
            i &&
                (0, l.jsx)(J.E, {
                    color: "text-default",
                    variant: "text-sm/normal",
                    className: Q.Ec,
                    children: W.intl.format(W.t["K+DH2o"], {
                        onClick: () => {
                            X.A.open(n, q.BEX.ROLES), t();
                        },
                    }),
                }),
        ],
    });
}
var Z = t(823508),
    $ = t(988794),
    ee = t(790782),
    en = t(420183);
function et(e) {
    let { transitionState: n, onClose: a, guildId: _ } = e,
        I = (0, C.GV)(),
        b = (0, r.bG)([p.A], () => p.A.getGuild(_)),
        P = (0, y.A)(b?.id),
        L = (0, G.Ay)(_),
        M = i.useRef(N.Ay.ackMessageId(_, ee.P.GUILD_EVENT)),
        S = (0, Z.A)();
    return (
        i.useEffect(() => {
            L.forEach((e) => k.A.getGuildEventUserCounts(_, e.id, [])), k.A.getGuildEventsForCurrentUser(_);
        }, [L, _]),
        (0, v.Ay)(() => {
            E.default.track(q.HAw.OPEN_MODAL, { type: $.BV, guild_id: _, guild_events_count: L.length });
        }),
        i.useEffect(() => {
            s()(L)
                .map((e) => e.creator_id)
                .filter(f.Vq)
                .uniq()
                .forEach((e) => {
                    x.A.requestMember(_, e);
                });
        }, [_, L]),
        i.useEffect(() => {
            null != _ && (0, A.hK)(_, ee.P.GUILD_EVENT);
        }, [_]),
        (0, l.jsxs)(o.EO, {
            size: o.rI.MEDIUM,
            transitionState: n,
            "aria-labelledby": I,
            parentComponent: "GuildEventsModal",
            "data-migration-pending": !0,
            children: [
                (0, l.jsxs)(o.rQ, {
                    className: en.wx,
                    "data-migration-pending": !0,
                    children: [
                        (0, l.jsx)(d.C, { size: "md", color: "currentColor", className: en.Kk }),
                        (0, l.jsx)(u.D, {
                            id: I,
                            variant: "heading-md/semibold",
                            children:
                                L.length > 0
                                    ? W.intl.formatToPlainString(W.t.IBdqSu, { number: L.length })
                                    : W.intl.string(W.t.tlopTM),
                        }),
                        P &&
                            (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, l.jsx)("div", { className: en.yF, children: "|" }),
                                    (0, l.jsx)(g.$, {
                                        variant: "primary",
                                        size: "sm",
                                        onClick: () => {
                                            (0, c.openModalLazy)(async () => {
                                                let { default: e } = await Promise.all([
                                                    t.e("28136"),
                                                    t.e("68587"),
                                                    t.e("60423"),
                                                    t.e("95504"),
                                                ]).then(t.bind(t, 729398));
                                                return (n) => (0, l.jsx)(e, { ...n, guildId: _ });
                                            }, S);
                                        },
                                        text: W.intl.string(W.t["60lJ0C"]),
                                    }),
                                ],
                            }),
                        (0, l.jsx)(m.D, {
                            onClick: a,
                            className: en.gb,
                            "aria-label": W.intl.string(W.t.cpT0Cq),
                            children: (0, l.jsx)(h.P, { size: "md", color: "currentColor", className: en.Kk }),
                        }),
                    ],
                }),
                (0, l.jsx)(o.$m, {
                    className: en.Qs,
                    "data-migration-pending": !0,
                    children:
                        L.length > 0
                            ? L.map((e) =>
                                  (0, l.jsx)(
                                      H,
                                      {
                                          guildEvent: e,
                                          onActionTaken: a,
                                          isNew: null != M.current && j.default.compare(e.id, M.current) > 0,
                                      },
                                      e.id,
                                  ),
                              )
                            : (0, l.jsx)(Y, { guildId: _, onClose: a }),
                }),
            ],
        })
    );
}
