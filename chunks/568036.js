n.d(t, { default: () => O });
var i = n(477900),
    a = n(582128),
    l = n(435558),
    r = n.n(l),
    s = n(855986),
    d = n(935462),
    c = n(192308),
    o = n(81466),
    u = n(534514),
    m = n(821609),
    g = n(939249),
    h = n(789645),
    x = n(334738),
    E = n(964486),
    A = n(915089),
    f = n(949744),
    p = n(71393),
    j = n(218461),
    v = n(129230),
    b = n(403362);
n(422653);
var N = n(811091),
    C = n(285059),
    k = n(770666),
    G = n(508654),
    D = n(327241),
    y = n(834730),
    _ = n(727419),
    I = n(576705),
    M = n(652215),
    P = n(792996),
    w = n(426781);
function L(e) {
    let { guildId: t, onClose: n } = e,
        a = (0, s.bG)(
            [p.A, I.A],
            () => {
                let e = p.A.getGuild(t);
                return I.A.can(M.xBc.MANAGE_ROLES, e);
            },
            [t],
        );
    return (0, i.jsxs)("div", {
        className: w.kL,
        children: [
            (0, i.jsx)(u.D, {
                color: "text-strong",
                variant: "heading-xl/semibold",
                className: w.DD,
                children: P.intl.string(P.t["WgZ+3D"]),
            }),
            (0, i.jsx)(y.E, {
                color: "text-default",
                variant: "body-sm/normal",
                className: w.VA,
                children: P.intl.string(P.t["v/S/PG"]),
            }),
            a &&
                (0, i.jsx)(y.E, {
                    color: "text-default",
                    variant: "body-sm/normal",
                    className: w.Ec,
                    children: P.intl.format(P.t["K+DH2o"], {
                        onClick: () => {
                            (_.A.open(t, M.BEX.ROLES), n());
                        },
                    }),
                }),
        ],
    });
}
var S = n(823508),
    T = n(988794),
    V = n(790782),
    q = n(968588);
function O(e) {
    let { transitionState: t, onClose: l, guildId: y } = e,
        _ = (0, A.GV)(),
        I = (0, s.bG)([p.A], () => p.A.getGuild(y)),
        w = (0, k.A)(I?.id),
        O = (0, G.Ay)(y),
        U = a.useRef(j.Ay.ackMessageId(y, V.P.GUILD_EVENT)),
        z = (0, S.A)();
    return (
        a.useEffect(() => {
            (O.forEach((e) => C.A.getGuildEventUserCounts(y, e.id, [])), C.A.getGuildEventsForCurrentUser(y));
        }, [O, y]),
        (0, E.Ay)(() => {
            v.default.track(M.HAw.OPEN_MODAL, { type: T.BV, guild_id: y, guild_events_count: O.length });
        }),
        a.useEffect(() => {
            r()(O)
                .map((e) => e.creator_id)
                .filter(b.Vq)
                .uniq()
                .forEach((e) => {
                    f.A.requestMember(y, e);
                });
        }, [y, O]),
        a.useEffect(() => {
            null != y && (0, x.hK)(y, V.P.GUILD_EVENT);
        }, [y]),
        (0, i.jsxs)(d.EO, {
            size: d.rI.MEDIUM,
            transitionState: t,
            "aria-labelledby": _,
            parentComponent: "GuildEventsModal",
            "data-migration-pending": !0,
            children: [
                (0, i.jsxs)(d.rQ, {
                    className: q.wx,
                    "data-migration-pending": !0,
                    children: [
                        (0, i.jsx)(o.CalendarIcon, { size: "md", color: "currentColor", className: q.Kk }),
                        (0, i.jsx)(u.D, {
                            id: _,
                            variant: "heading-sm/semibold",
                            children:
                                O.length > 0
                                    ? P.intl.formatToPlainString(P.t.IBdqSu, { number: O.length })
                                    : P.intl.string(P.t.tlopTM),
                        }),
                        w &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)("div", { className: q.yF, children: "|" }),
                                    (0, i.jsx)(m.$, {
                                        variant: "primary",
                                        size: "sm",
                                        onClick: function () {
                                            (0, c.mM)(async () => {
                                                let { default: e } = await Promise.all([
                                                    n.e(237427),
                                                    n.e(670870),
                                                    n.e(468555),
                                                    n.e(142753),
                                                    n.e(862179),
                                                    n.e(191601),
                                                    n.e(936875),
                                                    n.e(401425),
                                                    n.e(370017),
                                                    n.e(881717),
                                                    n.e(388859),
                                                    n.e(711162),
                                                    n.e(998392),
                                                    n.e(948054),
                                                    n.e(363269),
                                                    n.e(264236),
                                                    n.e(489218),
                                                    n.e(268582),
                                                    n.e(161379),
                                                    n.e(50015),
                                                    n.e(232551),
                                                    n.e(70833),
                                                    n.e(631644),
                                                    n.e(897073),
                                                    n.e(132191),
                                                    n.e(958428),
                                                    n.e(837687),
                                                    n.e(820683),
                                                    n.e(159957),
                                                    n.e(728136),
                                                    n.e(643104),
                                                    n.e(368426),
                                                    n.e(680029),
                                                    n.e(480436),
                                                    n.e(409391),
                                                    n.e(810262),
                                                    n.e(756684),
                                                    n.e(769014),
                                                    n.e(670089),
                                                    n.e(508425),
                                                    n.e(454450),
                                                    n.e(664743),
                                                    n.e(426226),
                                                ]).then(n.bind(n, 688218));
                                                return (t) => (0, i.jsx)(e, { ...t, guildId: y });
                                            }, z);
                                        },
                                        text: P.intl.string(P.t["60lJ0C"]),
                                    }),
                                ],
                            }),
                        (0, i.jsx)(g.D, {
                            onClick: l,
                            className: q.gb,
                            "aria-label": P.intl.string(P.t.cpT0Cq),
                            children: (0, i.jsx)(h.P, { size: "md", color: "currentColor", className: q.Kk }),
                        }),
                    ],
                }),
                (0, i.jsx)(d.$m, {
                    className: q.Qs,
                    "data-migration-pending": !0,
                    children:
                        O.length > 0
                            ? O.map((e) =>
                                  (0, i.jsx)(
                                      D.A,
                                      {
                                          guildEvent: e,
                                          onActionTaken: l,
                                          isNew: null != U.current && N.default.compare(e.id, U.current) > 0,
                                      },
                                      e.id,
                                  ),
                              )
                            : (0, i.jsx)(L, { guildId: y, onClose: l }),
                }),
            ],
        })
    );
}
