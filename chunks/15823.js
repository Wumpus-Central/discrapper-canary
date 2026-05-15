t.d(n, { default: () => et });
var i = t(627968),
    a = t(64700),
    l = t(735438),
    r = t.n(l),
    s = t(17928),
    d = t(192308),
    c = t(935462),
    u = t(81466),
    o = t(534514),
    g = t(821609),
    A = t(939249),
    m = t(789645),
    h = t(334738),
    p = t(964486),
    x = t(915089),
    E = t(860071),
    v = t(71393),
    C = t(222823),
    G = t(174459),
    f = t(403362);
t(422653);
var b = t(935208),
    N = t(285059),
    j = t(770666),
    k = t(508654),
    y = t(857071),
    I = t(518769),
    _ = t(446600),
    S = t(734057),
    D = t(576705),
    L = t(763827),
    M = t(287809),
    w = t(707592),
    T = t(698441),
    B = t(485394),
    P = t(113783),
    U = t(794782),
    z = t(9448),
    O = t(647090),
    R = t(691012),
    V = t(779519),
    K = t(482857),
    q = t(652215);
function F(e) {
    let { guildEvent: n, truncate: t, onActionTaken: a, className: l, isNew: r } = e,
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
        } = n,
        x = (0, O.G3)(n),
        E = (0, s.bG)([T.Ay], () => T.Ay.isInterestedInEventRecurrence(d, x), [d, x]),
        C = (0, s.bG)([y.A], () => y.A.isLurking(c), [c]),
        G = (0, s.bG)([_.A], () => _.A.getStageInstanceByChannel(u), [u]),
        f = (0, s.bG)([v.A], () => v.A.getGuild(c), [c]),
        b = (0, s.bG)([S.A], () => S.A.getChannel(u), [u]),
        N = (0, s.bG)([M.default], () => M.default.getUser(o), [o]),
        { speakers: j } = (function (e) {
            let {
                    id: n,
                    data: { guild: t, instance: i, speakers: a, participantCount: l },
                    context: r,
                } = e,
                d = (0, s.bG)([v.A, S.A], () => v.A.getGuild(S.A.getChannel(n)?.getGuildId()), [n]),
                c = (0, s.bG)([_.A], () => _.A.getStageInstanceByChannel(n), [n]),
                u = (0, P.E5)(n, I.ip.SPEAKER),
                o = (0, P.zy)(n),
                g = null != c ? u : a,
                A = (null != c ? o : l) - g.length;
            return { channelId: n, guild: d ?? t, stage: c ?? i, speakers: g, audienceCount: A, context: r };
        })({
            id: u,
            data: { guild: null, instance: G, speakers: [], participantCount: 0 },
            context: { guildId: c, instance: G },
        }),
        k = (0, s.bG)([L.A], () => L.A.getChannelId()),
        F = (0, T.Fd)(n),
        H = k === u && null != k && F,
        J = j.filter((e) => e.type === I.wY.VOICE),
        Q = J.length,
        $ = (0, s.bG)([D.A], () => D.A.can(q.xBc.CONNECT, b), [b]),
        W = (0, B.Ay)(n),
        X = null != f,
        Y = (0, K.A)({ guild: f, channel: b, guildScheduledEvent: n, isActive: F, recurrenceId: x, onActionTaken: a }),
        Z = C ? void 0 : (e) => (0, w.uR)({ eventId: d, recurrenceId: e });
    return (0, i.jsx)(V.A, {
        guild: f,
        channel: b,
        creator: N,
        name: g,
        entityType: m,
        description: A ?? void 0,
        location: (0, z.oF)(n) ?? void 0,
        imageSource: null != h ? (0, R.A)(n) : void 0,
        imageLocation: V.c.THUMBNAIL,
        isActive: F,
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
        truncate: t,
        isNew: r,
        guildEvent: n,
        recurrenceRule: (0, U.Sn)(p),
        recurrenceId: x,
    });
}
var H = t(834730),
    J = t(468689),
    Q = t(710358),
    $ = t(375708),
    W = t(553434);
function X(e) {
    let { guildId: n, onClose: t } = e,
        a = (0, s.bG)([v.A, D.A], () => {
            let e = v.A.getGuild(n);
            return D.A.can(q.xBc.MANAGE_ROLES, e);
        }, [n]);
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
                            J.A.open(n, q.BEX.ROLES), t();
                        },
                    }),
                }),
        ],
    });
}
var Y = t(823508),
    Z = t(988794),
    ee = t(790782),
    en = t(420183);
function et(e) {
    let { transitionState: n, onClose: l, guildId: y } = e,
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
            G.default.track(q.HAw.OPEN_MODAL, { type: Z.BV, guild_id: y, guild_events_count: D.length });
        }),
        a.useEffect(() => {
            r()(D)
                .map((e) => e.creator_id)
                .filter(f.Vq)
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
            transitionState: n,
            "aria-labelledby": I,
            parentComponent: "GuildEventsModal",
            "data-migration-pending": !0,
            children: [
                (0, i.jsxs)(c.rQ, {
                    className: en.wx,
                    "data-migration-pending": !0,
                    children: [
                        (0, i.jsx)(u.C, { size: "md", color: "currentColor", className: en.Kk }),
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
                                    (0, i.jsx)("div", { className: en.yF, children: "|" }),
                                    (0, i.jsx)(g.$, {
                                        variant: "primary",
                                        size: "sm",
                                        onClick: () => {
                                            (0, d.openModalLazy)(async () => {
                                                let { default: e } = await Promise.all([
                                                    t.e("39666"),
                                                    t.e("79924"),
                                                    t.e("43908"),
                                                    t.e("54266"),
                                                    t.e("19675"),
                                                    t.e("88826"),
                                                    t.e("58171"),
                                                    t.e("74389"),
                                                    t.e("59957"),
                                                    t.e("61156"),
                                                    t.e("16767"),
                                                    t.e("6841"),
                                                    t.e("28136"),
                                                    t.e("16084"),
                                                    t.e("97073"),
                                                    t.e("10262"),
                                                    t.e("71329"),
                                                    t.e("70089"),
                                                    t.e("70160"),
                                                    t.e("54450"),
                                                    t.e("60423"),
                                                ]).then(t.bind(t, 729398));
                                                return (n) => (0, i.jsx)(e, { ...n, guildId: y });
                                            }, M);
                                        },
                                        text: $.intl.string($.t["60lJ0C"]),
                                    }),
                                ],
                            }),
                        (0, i.jsx)(A.D, {
                            onClick: l,
                            className: en.gb,
                            "aria-label": $.intl.string($.t.cpT0Cq),
                            children: (0, i.jsx)(m.P, { size: "md", color: "currentColor", className: en.Kk }),
                        }),
                    ],
                }),
                (0, i.jsx)(c.$m, {
                    className: en.Qs,
                    "data-migration-pending": !0,
                    children:
                        D.length > 0
                            ? D.map((e) =>
                                  (0, i.jsx)(
                                      F,
                                      {
                                          guildEvent: e,
                                          onActionTaken: l,
                                          isNew: null != L.current && b.default.compare(e.id, L.current) > 0,
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
