n.d(t, { A: () => E });
var a = n(627968),
    i = n(311907),
    l = n(628284),
    r = n(935462),
    s = n(534514),
    o = n(834730),
    d = n(827734),
    c = n(331322),
    _ = n(793574),
    u = n(688810),
    p = n(632738),
    m = n(994500),
    f = n(562153),
    x = n(183555),
    g = n(672385),
    h = n(950191),
    A = n(249790),
    b = n(946356),
    v = n(254828),
    I = n(783123),
    j = n(652215),
    y = n(996988),
    C = n(985018),
    N = n(449572);
function E(e) {
    let {
            user: t,
            guildId: n,
            channelId: E,
            messageId: T,
            roleId: w,
            transitionState: P,
            openedAt: L,
            onHide: k,
            sourceAnalyticsLocations: S = [],
        } = e,
        R = n === j.ME ? void 0 : n,
        D = (0, i.bG)([m.A], () => m.A.isBlocked(t.id)),
        { analyticsLocations: B } = (0, u.Ay)([...S, D ? _.A.BLOCKED_PROFILE_MODAL : _.A.IGNORED_PROFILE_MODAL]),
        O = (0, x.pb)({ layout: "MODAL_V2", userId: t.id, guildId: R, channelId: E, messageId: T, roleId: w }),
        M = [
            { icon: l.y, description: C.intl.string(C.t.kcuWva) },
            { icon: l.y, description: C.intl.string(D ? C.t.QxrDY1 : C.t.W6fjkS) },
        ],
        G = (0, h.Ay)(t.id, R),
        U = f.Ay.getName(G?.guildId, E, t),
        F = C.intl.formatToPlainString(C.t.KRe1Fk, { name: U });
    return (0, a.jsx)(u.f5, {
        value: B,
        children: (0, a.jsx)(x.of, {
            value: O,
            openedAt: L,
            fetchStartedAt: G?.fetchStartedAt,
            fetchEndedAt: G?.fetchEndedAt,
            isLoaded: G?.isLoaded,
            children: (0, a.jsx)(r.EO, {
                "data-migration-pending": !0,
                transitionState: P,
                className: N.zr,
                "aria-label": F,
                parentComponent: "RestrictedUserProfileModalV2",
                children: (0, a.jsxs)(b.A, {
                    user: t,
                    displayProfile: G,
                    themeType: y.d.MODAL_V2,
                    children: [
                        (0, a.jsx)("div", { className: N.Tp }),
                        (0, a.jsxs)("div", {
                            className: N.Qs,
                            children: [
                                (0, a.jsx)(A.A, { user: t, guildId: R }),
                                (0, a.jsxs)("div", {
                                    className: N.FS,
                                    children: [
                                        (0, a.jsx)(s.D, {
                                            variant: "heading-xl/bold",
                                            color: "text-default",
                                            children: C.intl.string(C.t.b33pLD),
                                        }),
                                        (0, a.jsx)(o.E, {
                                            variant: "text-md/medium",
                                            color: "text-default",
                                            children: C.intl.format(D ? C.t.T7QiLn : C.t.MnEowy, { username: U }),
                                        }),
                                    ],
                                }),
                                (0, a.jsx)("div", {
                                    className: N.vb,
                                    children: M.map((e, t) => {
                                        let { icon: n, description: i } = e;
                                        return (0, a.jsx)(
                                            p.PQ,
                                            {
                                                icon: n,
                                                title: i,
                                                titleVariant: "text-md/normal",
                                                color: d.A.colors.TEXT_DEFAULT.css,
                                            },
                                            t,
                                        );
                                    }),
                                }),
                                (0, a.jsxs)(c.B, {
                                    align: "center",
                                    children: [
                                        (0, a.jsx)(I.A, {
                                            size: "md",
                                            isBlocked: D,
                                            onClick: () => {
                                                k(),
                                                    (0, g.Wn)({
                                                        action: D ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
                                                        analyticsLocations: B,
                                                        ...O,
                                                    });
                                            },
                                        }),
                                        (0, a.jsx)(v.A, {
                                            userId: t.id,
                                            onClick: () => {
                                                k(),
                                                    (0, g.Wn)({
                                                        action: "DONT_SHOW_AGAIN_IGNORED_PROFILE",
                                                        analyticsLocations: B,
                                                        ...O,
                                                    });
                                            },
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            }),
        }),
    });
}
