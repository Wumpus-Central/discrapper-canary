n.d(t, { default: () => z });
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
    E = n(964486),
    A = n(915089),
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
    _ = n(834730),
    y = n(468689),
    I = n(576705),
    M = n(652215),
    L = n(105292),
    P = n(426781);
function w(e) {
    let { guildId: t, onClose: n } = e,
        i = (0, s.bG)(
            [p.A, I.A],
            () => {
                let e = p.A.getGuild(t);
                return I.A.can(M.xBc.MANAGE_ROLES, e);
            },
            [t],
        );
    return (0, a.jsxs)("div", {
        className: P.kL,
        children: [
            (0, a.jsx)(u.D, {
                color: "text-strong",
                variant: "heading-xl/semibold",
                className: P.DD,
                children: L.intl.string(L.t["WgZ+3D"]),
            }),
            (0, a.jsx)(_.E, {
                color: "text-default",
                variant: "text-sm/normal",
                className: P.VA,
                children: L.intl.string(L.t["v/S/PG"]),
            }),
            i &&
                (0, a.jsx)(_.E, {
                    color: "text-default",
                    variant: "text-sm/normal",
                    className: P.Ec,
                    children: L.intl.format(L.t["K+DH2o"], {
                        onClick: () => {
                            (y.A.open(t, M.BEX.ROLES), n());
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
function z(e) {
    let { transitionState: t, onClose: l, guildId: _ } = e,
        y = (0, A.GV)(),
        I = (0, s.bG)([p.A], () => p.A.getGuild(_)),
        P = (0, k.A)(I?.id),
        z = (0, G.Ay)(_),
        O = i.useRef(j.Ay.ackMessageId(_, V.P.GUILD_EVENT)),
        U = (0, S.A)();
    return (
        i.useEffect(() => {
            (z.forEach((e) => b.A.getGuildEventUserCounts(_, e.id, [])), b.A.getGuildEventsForCurrentUser(_));
        }, [z, _]),
        (0, E.Ay)(() => {
            v.default.track(M.HAw.OPEN_MODAL, { type: T.BV, guild_id: _, guild_events_count: z.length });
        }),
        i.useEffect(() => {
            r()(z)
                .map((e) => e.creator_id)
                .filter(N.Vq)
                .uniq()
                .forEach((e) => {
                    f.A.requestMember(_, e);
                });
        }, [_, z]),
        i.useEffect(() => {
            null != _ && (0, x.hK)(_, V.P.GUILD_EVENT);
        }, [_]),
        (0, a.jsxs)(d.EO, {
            size: d.rI.MEDIUM,
            transitionState: t,
            "aria-labelledby": y,
            parentComponent: "GuildEventsModal",
            "data-migration-pending": !0,
            children: [
                (0, a.jsxs)(d.rQ, {
                    className: q.wx,
                    "data-migration-pending": !0,
                    children: [
                        (0, a.jsx)(o.CalendarIcon, { size: "md", color: "currentColor", className: q.Kk }),
                        (0, a.jsx)(u.D, {
                            id: y,
                            variant: "heading-md/semibold",
                            children:
                                z.length > 0
                                    ? L.intl.formatToPlainString(L.t.IBdqSu, { number: z.length })
                                    : L.intl.string(L.t.tlopTM),
                        }),
                        P &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)("div", { className: q.yF, children: "|" }),
                                    (0, a.jsx)(m.$, {
                                        variant: "primary",
                                        size: "sm",
                                        onClick: function () {
                                            (0, c.openModalLazy)(async () => {
                                                let { default: e } = await Promise.all([
                                                    n.e("237427"),
                                                    n.e("670870"),
                                                    n.e("468555"),
                                                    n.e("142753"),
                                                    n.e("862179"),
                                                    n.e("191601"),
                                                    n.e("936875"),
                                                    n.e("401425"),
                                                    n.e("370017"),
                                                    n.e("730931"),
                                                    n.e("711162"),
                                                    n.e("998392"),
                                                    n.e("948054"),
                                                    n.e("264236"),
                                                    n.e("268582"),
                                                    n.e("161379"),
                                                    n.e("50015"),
                                                    n.e("232551"),
                                                    n.e("631644"),
                                                    n.e("70833"),
                                                    n.e("897073"),
                                                    n.e("132191"),
                                                    n.e("958428"),
                                                    n.e("837687"),
                                                    n.e("820683"),
                                                    n.e("159957"),
                                                    n.e("728136"),
                                                    n.e("643104"),
                                                    n.e("368426"),
                                                    n.e("216084"),
                                                    n.e("480436"),
                                                    n.e("409391"),
                                                    n.e("810262"),
                                                    n.e("756684"),
                                                    n.e("769014"),
                                                    n.e("670089"),
                                                    n.e("870160"),
                                                    n.e("454450"),
                                                    n.e("222689"),
                                                    n.e("426226"),
                                                ]).then(n.bind(n, 303224));
                                                return (t) => (0, a.jsx)(e, { ...t, guildId: _ });
                                            }, U);
                                        },
                                        text: L.intl.string(L.t["60lJ0C"]),
                                    }),
                                ],
                            }),
                        (0, a.jsx)(g.D, {
                            onClick: l,
                            className: q.gb,
                            "aria-label": L.intl.string(L.t.cpT0Cq),
                            children: (0, a.jsx)(h.P, { size: "md", color: "currentColor", className: q.Kk }),
                        }),
                    ],
                }),
                (0, a.jsx)(d.$m, {
                    className: q.Qs,
                    "data-migration-pending": !0,
                    children:
                        z.length > 0
                            ? z.map((e) =>
                                  (0, a.jsx)(
                                      D.A,
                                      {
                                          guildEvent: e,
                                          onActionTaken: l,
                                          isNew: null != O.current && C.default.compare(e.id, O.current) > 0,
                                      },
                                      e.id,
                                  ),
                              )
                            : (0, a.jsx)(w, { guildId: _, onClose: l }),
                }),
            ],
        })
    );
}
