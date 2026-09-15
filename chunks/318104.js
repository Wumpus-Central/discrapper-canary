n.d(t, { default: () => K });
var a = n(477900),
    i = n(582128),
    l = n(435558),
    r = n.n(l),
    s = n(17928),
    d = n(935462),
    c = n(192308),
    o = n(81466),
    u = n(297264),
    m = n(821609),
    g = n(939249),
    h = n(789645),
    x = n(334738),
    A = n(964486),
    E = n(915089),
    f = n(860071),
    p = n(71393),
    j = n(573163),
    v = n(174459),
    N = n(403362);
n(422653);
var C = n(935208),
    b = n(285059),
    k = n(770666),
    G = n(508654),
    D = n(29414),
    I = n(834730),
    _ = n(468689),
    y = n(710358),
    M = n(576705),
    w = n(652215),
    L = n(375708),
    P = n(426781);
function q(e) {
    let { guildId: t, onClose: n } = e,
        i = (0, s.bG)(
            [p.A, M.A],
            () => {
                let e = p.A.getGuild(t);
                return M.A.can(w.xBc.MANAGE_ROLES, e);
            },
            [t],
        );
    return (0, a.jsxs)("div", {
        className: P.kL,
        children: [
            (0, a.jsx)(y.A, {
                children: (0, a.jsx)("div", {
                    className: P.n1,
                    children: (0, a.jsx)(o.CalendarIcon, {
                        size: "custom",
                        color: "currentColor",
                        height: 40,
                        width: 40,
                        className: P.Kk,
                        "aria-label": L.intl.string(L.t.uxFcqu),
                    }),
                }),
            }),
            (0, a.jsx)(u.D, {
                color: "text-strong",
                variant: "heading-xl/semibold",
                className: P.DD,
                children: L.intl.string(L.t["WgZ+3D"]),
            }),
            (0, a.jsx)(I.E, {
                color: "text-default",
                variant: "text-sm/normal",
                className: P.VA,
                children: L.intl.string(L.t["v/S/PG"]),
            }),
            i &&
                (0, a.jsx)(I.E, {
                    color: "text-default",
                    variant: "text-sm/normal",
                    className: P.Ec,
                    children: L.intl.format(L.t["K+DH2o"], {
                        onClick: () => {
                            (_.A.open(t, w.BEX.ROLES), n());
                        },
                    }),
                }),
        ],
    });
}
var z = n(823508),
    S = n(988794),
    T = n(790782),
    V = n(968588);
function K(e) {
    let { transitionState: t, onClose: l, guildId: I } = e,
        _ = (0, E.GV)(),
        y = (0, s.bG)([p.A], () => p.A.getGuild(I)),
        M = (0, k.A)(y?.id),
        P = (0, G.Ay)(I),
        K = i.useRef(j.Ay.ackMessageId(I, T.P.GUILD_EVENT)),
        O = (0, z.A)();
    return (
        i.useEffect(() => {
            (P.forEach((e) => b.A.getGuildEventUserCounts(I, e.id, [])), b.A.getGuildEventsForCurrentUser(I));
        }, [P, I]),
        (0, A.Ay)(() => {
            v.default.track(w.HAw.OPEN_MODAL, { type: S.BV, guild_id: I, guild_events_count: P.length });
        }),
        i.useEffect(() => {
            r()(P)
                .map((e) => e.creator_id)
                .filter(N.Vq)
                .uniq()
                .forEach((e) => {
                    f.A.requestMember(I, e);
                });
        }, [I, P]),
        i.useEffect(() => {
            null != I && (0, x.hK)(I, T.P.GUILD_EVENT);
        }, [I]),
        (0, a.jsxs)(d.EO, {
            size: d.rI.MEDIUM,
            transitionState: t,
            "aria-labelledby": _,
            parentComponent: "GuildEventsModal",
            "data-migration-pending": !0,
            children: [
                (0, a.jsxs)(d.rQ, {
                    className: V.wx,
                    "data-migration-pending": !0,
                    children: [
                        (0, a.jsx)(o.CalendarIcon, { size: "md", color: "currentColor", className: V.Kk }),
                        (0, a.jsx)(u.D, {
                            id: _,
                            variant: "heading-md/semibold",
                            children:
                                P.length > 0
                                    ? L.intl.formatToPlainString(L.t.IBdqSu, { number: P.length })
                                    : L.intl.string(L.t.tlopTM),
                        }),
                        M &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)("div", { className: V.yF, children: "|" }),
                                    (0, a.jsx)(m.$, {
                                        variant: "primary",
                                        size: "sm",
                                        onClick: function () {
                                            (0, c.openModalLazy)(async () => {
                                                let { default: e } = await Promise.all([
                                                    n.e("489565"),
                                                    n.e("468555"),
                                                    n.e("862179"),
                                                    n.e("357625"),
                                                    n.e("936875"),
                                                    n.e("401425"),
                                                    n.e("370017"),
                                                    n.e("730931"),
                                                    n.e("711162"),
                                                    n.e("948054"),
                                                    n.e("159957"),
                                                    n.e("728136"),
                                                    n.e("897073"),
                                                    n.e("216084"),
                                                    n.e("409391"),
                                                    n.e("810262"),
                                                    n.e("756684"),
                                                    n.e("670089"),
                                                    n.e("870160"),
                                                    n.e("454450"),
                                                    n.e("560423"),
                                                ]).then(n.bind(n, 729398));
                                                return (t) => (0, a.jsx)(e, { ...t, guildId: I });
                                            }, O);
                                        },
                                        text: L.intl.string(L.t["60lJ0C"]),
                                    }),
                                ],
                            }),
                        (0, a.jsx)(g.D, {
                            onClick: l,
                            className: V.gb,
                            "aria-label": L.intl.string(L.t.cpT0Cq),
                            children: (0, a.jsx)(h.P, { size: "md", color: "currentColor", className: V.Kk }),
                        }),
                    ],
                }),
                (0, a.jsx)(d.$m, {
                    className: V.Qs,
                    "data-migration-pending": !0,
                    children:
                        P.length > 0
                            ? P.map((e) =>
                                  (0, a.jsx)(
                                      D.A,
                                      {
                                          guildEvent: e,
                                          onActionTaken: l,
                                          isNew: null != K.current && C.default.compare(e.id, K.current) > 0,
                                      },
                                      e.id,
                                  ),
                              )
                            : (0, a.jsx)(q, { guildId: I, onClose: l }),
                }),
            ],
        })
    );
}
