n.d(t, { default: () => O });
var a = n(477900),
    i = n(582128),
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
    I = n(727419),
    _ = n(576705),
    M = n(652215),
    S = n(792996),
    w = n(426781);
function L(e) {
    let { guildId: t, onClose: n } = e,
        i = (0, s.bG)(
            [p.A, _.A],
            () => {
                let e = p.A.getGuild(t);
                return _.A.can(M.xBc.MANAGE_ROLES, e);
            },
            [t],
        );
    return (0, a.jsxs)("div", {
        className: w.kL,
        children: [
            (0, a.jsx)(u.D, {
                color: "text-strong",
                variant: "heading-xl/semibold",
                className: w.DD,
                children: S.intl.string(S.t["WgZ+3D"]),
            }),
            (0, a.jsx)(y.E, {
                color: "text-default",
                variant: "body-sm/normal",
                className: w.VA,
                children: S.intl.string(S.t["v/S/PG"]),
            }),
            i &&
                (0, a.jsx)(y.E, {
                    color: "text-default",
                    variant: "body-sm/normal",
                    className: w.Ec,
                    children: S.intl.format(S.t["K+DH2o"], {
                        onClick: () => {
                            (I.A.open(t, M.BEX.ROLES), n());
                        },
                    }),
                }),
        ],
    });
}
var P = n(823508),
    T = n(988794),
    V = n(790782),
    q = n(968588);
function O(e) {
    let { transitionState: t, onClose: l, guildId: y } = e,
        I = (0, A.GV)(),
        _ = (0, s.bG)([p.A], () => p.A.getGuild(y)),
        w = (0, k.A)(_?.id),
        O = (0, G.Ay)(y),
        U = i.useRef(j.Ay.ackMessageId(y, V.P.GUILD_EVENT)),
        z = (0, P.A)();
    return (
        i.useEffect(() => {
            (O.forEach((e) => C.A.getGuildEventUserCounts(y, e.id, [])), C.A.getGuildEventsForCurrentUser(y));
        }, [O, y]),
        (0, E.Ay)(() => {
            v.default.track(M.HAw.OPEN_MODAL, { type: T.BV, guild_id: y, guild_events_count: O.length });
        }),
        i.useEffect(() => {
            r()(O)
                .map((e) => e.creator_id)
                .filter(b.Vq)
                .uniq()
                .forEach((e) => {
                    f.A.requestMember(y, e);
                });
        }, [y, O]),
        i.useEffect(() => {
            null != y && (0, x.hK)(y, V.P.GUILD_EVENT);
        }, [y]),
        (0, a.jsxs)(d.EO, {
            size: d.rI.MEDIUM,
            transitionState: t,
            "aria-labelledby": I,
            parentComponent: "GuildEventsModal",
            "data-migration-pending": !0,
            children: [
                (0, a.jsxs)(d.rQ, {
                    className: q.wx,
                    "data-migration-pending": !0,
                    children: [
                        (0, a.jsx)(o.CalendarIcon, { size: "md", color: "currentColor", className: q.Kk }),
                        (0, a.jsx)(u.D, {
                            id: I,
                            variant: "heading-sm/semibold",
                            children:
                                O.length > 0
                                    ? S.intl.formatToPlainString(S.t.IBdqSu, { number: O.length })
                                    : S.intl.string(S.t.tlopTM),
                        }),
                        w &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)("div", { className: q.yF, children: "|" }),
                                    (0, a.jsx)(m.$, {
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
                                                    n.e(258398),
                                                    n.e(70833),
                                                    n.e(897073),
                                                    n.e(50015),
                                                    n.e(232551),
                                                    n.e(631644),
                                                    n.e(132191),
                                                    n.e(958428),
                                                    n.e(837687),
                                                    n.e(820683),
                                                    n.e(159957),
                                                    n.e(728136),
                                                    n.e(643104),
                                                    n.e(847158),
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
                                                return (t) => (0, a.jsx)(e, { ...t, guildId: y });
                                            }, z);
                                        },
                                        text: S.intl.string(S.t["60lJ0C"]),
                                    }),
                                ],
                            }),
                        (0, a.jsx)(g.D, {
                            onClick: l,
                            className: q.gb,
                            "aria-label": S.intl.string(S.t.cpT0Cq),
                            children: (0, a.jsx)(h.XSmallIcon, { size: "md", color: "currentColor", className: q.Kk }),
                        }),
                    ],
                }),
                (0, a.jsx)(d.$m, {
                    className: q.Qs,
                    "data-migration-pending": !0,
                    children:
                        O.length > 0
                            ? O.map((e) =>
                                  (0, a.jsx)(
                                      D.A,
                                      {
                                          guildEvent: e,
                                          onActionTaken: l,
                                          isNew: null != U.current && N.default.compare(e.id, U.current) > 0,
                                      },
                                      e.id,
                                  ),
                              )
                            : (0, a.jsx)(L, { guildId: y, onClose: l }),
                }),
            ],
        })
    );
}
