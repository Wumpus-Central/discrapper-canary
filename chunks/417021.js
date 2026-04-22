a.d(t, { A: () => E });
var n = a(627968),
    i = a(311907),
    l = a(628284),
    r = a(935462),
    d = a(534514),
    o = a(834730),
    s = a(827734),
    c = a(331322),
    _ = a(793574),
    u = a(688810),
    m = a(632738),
    p = a(994500),
    g = a(562153),
    b = a(183555),
    f = a(672385),
    x = a(950191),
    h = a(249790),
    A = a(946356),
    v = a(254828),
    I = a(783123),
    y = a(652215),
    C = a(996988),
    j = a(985018),
    N = a(449572);
function E(e) {
    let {
            user: t,
            guildId: a,
            channelId: E,
            messageId: S,
            roleId: T,
            transitionState: w,
            openedAt: P,
            onHide: k,
            sourceAnalyticsLocations: M = [],
        } = e,
        L = a === y.ME ? void 0 : a,
        R = (0, i.bG)([p.A], () => p.A.isBlocked(t.id)),
        { analyticsLocations: D } = (0, u.Ay)([...M, R ? _.A.BLOCKED_PROFILE_MODAL : _.A.IGNORED_PROFILE_MODAL]),
        B = (0, b.pb)({ layout: "MODAL_V2", userId: t.id, guildId: L, channelId: E, messageId: S, roleId: T }),
        O = [
            { icon: l.y, description: j.intl.string(j.t.kcuWva) },
            { icon: l.y, description: j.intl.string(R ? j.t.QxrDY1 : j.t.W6fjkS) },
        ],
        G = (0, x.Ay)(t.id, L),
        U = g.Ay.getName(G?.guildId, E, t),
        F = j.intl.formatToPlainString(j.t.KRe1Fk, { name: U });
    return (0, n.jsx)(u.f5, {
        value: D,
        children: (0, n.jsx)(b.of, {
            value: B,
            openedAt: P,
            fetchStartedAt: G?.fetchStartedAt,
            fetchEndedAt: G?.fetchEndedAt,
            isLoaded: G?.isLoaded,
            children: (0, n.jsx)(r.EO, {
                "data-migration-pending": !0,
                transitionState: w,
                className: N.zr,
                "aria-label": F,
                parentComponent: "RestrictedUserProfileModalV2",
                children: (0, n.jsxs)(A.A, {
                    user: t,
                    displayProfile: G,
                    themeType: C.d.MODAL_V2,
                    children: [
                        (0, n.jsx)("div", { className: N.Tp }),
                        (0, n.jsxs)("div", {
                            className: N.Qs,
                            children: [
                                (0, n.jsx)(h.A, { user: t, guildId: L }),
                                (0, n.jsxs)("div", {
                                    className: N.FS,
                                    children: [
                                        (0, n.jsx)(d.D, {
                                            variant: "heading-xl/bold",
                                            color: "text-default",
                                            children: j.intl.string(j.t.b33pLD),
                                        }),
                                        (0, n.jsx)(o.E, {
                                            variant: "text-md/medium",
                                            color: "text-default",
                                            children: j.intl.format(R ? j.t.T7QiLn : j.t.MnEowy, { username: U }),
                                        }),
                                    ],
                                }),
                                (0, n.jsx)("div", {
                                    className: N.vb,
                                    children: O.map((e, t) => {
                                        let { icon: a, description: i } = e;
                                        return (0, n.jsx)(
                                            m.PQ,
                                            {
                                                icon: a,
                                                title: i,
                                                titleVariant: "text-md/normal",
                                                color: s.A.colors.TEXT_DEFAULT.css,
                                            },
                                            t,
                                        );
                                    }),
                                }),
                                (0, n.jsxs)(c.B, {
                                    align: "center",
                                    children: [
                                        (0, n.jsx)(I.A, {
                                            size: "md",
                                            isBlocked: R,
                                            onClick: () => {
                                                k(),
                                                    (0, f.Wn)({
                                                        action: R ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
                                                        analyticsLocations: D,
                                                        ...B,
                                                    });
                                            },
                                        }),
                                        (0, n.jsx)(v.A, {
                                            userId: t.id,
                                            onClick: () => {
                                                k(),
                                                    (0, f.Wn)({
                                                        action: "DONT_SHOW_AGAIN_IGNORED_PROFILE",
                                                        analyticsLocations: D,
                                                        ...B,
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
