t.d(n, { default: () => et });
var i = t(477900),
    a = t(582128),
    l = t(435558),
    r = t.n(l),
    s = t(17928),
    d = t(935462),
    c = t(192308),
    u = t(81466),
    o = t(297264),
    g = t(821609),
    A = t(939249),
    m = t(789645),
    h = t(334738),
    p = t(964486),
    x = t(915089),
    E = t(860071),
    v = t(71393),
    C = t(568548),
    f = t(174459),
    G = t(403362);
t(422653);
var b = t(935208),
    I = t(285059),
    N = t(770666),
    j = t(508654),
    k = t(857071),
    y = t(518769),
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
    O = t(974930),
    R = t(691012),
    V = t(779519),
    q = t(482857),
    F = t(652215);
function K(e) {
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
        C = (0, s.bG)([k.A], () => k.A.isLurking(c), [c]),
        f = (0, s.bG)([_.A], () => _.A.getStageInstanceByChannel(u), [u]),
        G = (0, s.bG)([v.A], () => v.A.getGuild(c), [c]),
        b = (0, s.bG)([S.A], () => S.A.getChannel(u), [u]),
        I = (0, s.bG)([M.default], () => M.default.getUser(o), [o]),
        { speakers: N } = (function (e) {
            let {
                    id: n,
                    data: { guild: t, instance: i, speakers: a, participantCount: l },
                    context: r,
                } = e,
                d = (0, s.bG)([v.A, S.A], () => v.A.getGuild(S.A.getChannel(n)?.getGuildId()), [n]),
                c = (0, s.bG)([_.A], () => _.A.getStageInstanceByChannel(n), [n]),
                u = (0, P.E5)(n, y.ip.SPEAKER),
                o = (0, P.zy)(n),
                g = null != c ? u : a,
                A = (null != c ? o : l) - g.length;
            return { channelId: n, guild: d ?? t, stage: c ?? i, speakers: g, audienceCount: A, context: r };
        })({
            id: u,
            data: { guild: null, instance: f, speakers: [], participantCount: 0 },
            context: { guildId: c, instance: f },
        }),
        j = (0, s.bG)([L.A], () => L.A.getChannelId()),
        K = (0, T.Fd)(n),
        H = j === u && null != j && K,
        J = N.filter((e) => e.type === y.wY.VOICE),
        Q = J.length,
        $ = (0, s.bG)([D.A], () => D.A.can(F.xBc.CONNECT, b), [b]),
        W = (0, B.Ay)(n),
        X = null != G,
        Y = (0, q.A)({ guild: G, channel: b, guildScheduledEvent: n, isActive: K, recurrenceId: x, onActionTaken: a }),
        Z = C ? void 0 : (e) => (0, w.uR)({ eventId: d, recurrenceId: e });
    return (0, i.jsx)(V.A, {
        guild: G,
        channel: b,
        creator: I,
        name: g,
        entityType: m,
        description: A ?? void 0,
        location: (0, z.oF)(n) ?? void 0,
        imageSource: null != h ? (0, R.A)(n) : void 0,
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
    W = t(44642);
function X(e) {
    let { guildId: n, onClose: t } = e,
        a = (0, s.bG)([v.A, D.A], () => {
            let e = v.A.getGuild(n);
            return D.A.can(F.xBc.MANAGE_ROLES, e);
        }, [n]);
    return (0, i.jsxs)("div", {
        className: W.kL,
        children: [
            (0, i.jsx)(Q.A, {
                children: (0, i.jsx)("div", {
                    className: W.n1,
                    children: (0, i.jsx)(u.CalendarIcon, {
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
                            J.A.open(n, F.BEX.ROLES), t();
                        },
                    }),
                }),
        ],
    });
}
var Y = t(823508),
    Z = t(988794),
    ee = t(790782),
    en = t(8607);
function et(e) {
    let { transitionState: n, onClose: l, guildId: k } = e,
        y = (0, x.GV)(),
        _ = (0, s.bG)([v.A], () => v.A.getGuild(k)),
        S = (0, N.A)(_?.id),
        D = (0, j.Ay)(k),
        L = a.useRef(C.Ay.ackMessageId(k, ee.P.GUILD_EVENT)),
        M = (0, Y.A)();
    return (
        a.useEffect(() => {
            D.forEach((e) => I.A.getGuildEventUserCounts(k, e.id, [])), I.A.getGuildEventsForCurrentUser(k);
        }, [D, k]),
        (0, p.Ay)(() => {
            f.default.track(F.HAw.OPEN_MODAL, { type: Z.BV, guild_id: k, guild_events_count: D.length });
        }),
        a.useEffect(() => {
            r()(D)
                .map((e) => e.creator_id)
                .filter(G.Vq)
                .uniq()
                .forEach((e) => {
                    E.A.requestMember(k, e);
                });
        }, [k, D]),
        a.useEffect(() => {
            null != k && (0, h.hK)(k, ee.P.GUILD_EVENT);
        }, [k]),
        (0, i.jsxs)(d.EO, {
            size: d.rI.MEDIUM,
            transitionState: n,
            "aria-labelledby": y,
            parentComponent: "GuildEventsModal",
            "data-migration-pending": !0,
            children: [
                (0, i.jsxs)(d.rQ, {
                    className: en.wx,
                    "data-migration-pending": !0,
                    children: [
                        (0, i.jsx)(u.CalendarIcon, { size: "md", color: "currentColor", className: en.Kk }),
                        (0, i.jsx)(o.D, {
                            id: y,
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
                                        onClick: function () {
                                            (0, c.openModalLazy)(async () => {
                                                let { default: e } = await Promise.all([
                                                    t.e("925996"),
                                                    t.e("103142"),
                                                    t.e("476684"),
                                                    t.e("773193"),
                                                    t.e("315214"),
                                                    t.e("88972"),
                                                    t.e("695367"),
                                                    t.e("121149"),
                                                    t.e("322552"),
                                                    t.e("159957"),
                                                    t.e("728136"),
                                                    t.e("216084"),
                                                    t.e("409391"),
                                                    t.e("810262"),
                                                    t.e("756684"),
                                                    t.e("670089"),
                                                    t.e("870160"),
                                                    t.e("454450"),
                                                    t.e("560423"),
                                                ]).then(t.bind(t, 729398));
                                                return (n) => (0, i.jsx)(e, { ...n, guildId: k });
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
                (0, i.jsx)(d.$m, {
                    className: en.Qs,
                    "data-migration-pending": !0,
                    children:
                        D.length > 0
                            ? D.map((e) =>
                                  (0, i.jsx)(
                                      K,
                                      {
                                          guildEvent: e,
                                          onActionTaken: l,
                                          isNew: null != L.current && b.default.compare(e.id, L.current) > 0,
                                      },
                                      e.id,
                                  ),
                              )
                            : (0, i.jsx)(X, { guildId: k, onClose: l }),
                }),
            ],
        })
    );
}
