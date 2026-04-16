t.d(n, { A: () => v });
var i = t(627968),
    a = t(311907),
    l = t(397927),
    r = t(793574),
    d = t(688810),
    s = t(632738),
    o = t(994500),
    c = t(562153),
    u = t(183555),
    _ = t(672385),
    p = t(950191),
    A = t(249790),
    g = t(946356),
    f = t(254828),
    h = t(783123),
    m = t(652215),
    x = t(996988),
    I = t(985018),
    b = t(255412);
function v(e) {
    let {
            user: n,
            guildId: t,
            channelId: v,
            messageId: E,
            roleId: j,
            transitionState: y,
            openedAt: T,
            onHide: S,
            sourceAnalyticsLocations: N = [],
        } = e,
        C = t === m.ME ? void 0 : t,
        R = (0, a.bG)([o.A], () => o.A.isBlocked(n.id)),
        { analyticsLocations: P } = (0, d.Ay)([...N, R ? r.A.BLOCKED_PROFILE_MODAL : r.A.IGNORED_PROFILE_MODAL]),
        L = (0, u.pb)({ layout: "MODAL_V2", userId: n.id, guildId: C, channelId: v, messageId: E, roleId: j }),
        O = [
            { icon: l.yr3, description: I.intl.string(I.t.kcuWva) },
            { icon: l.yr3, description: I.intl.string(R ? I.t.QxrDY1 : I.t.W6fjkS) },
        ],
        D = (0, p.Ay)(n.id, C),
        k = c.Ay.getName(D?.guildId, v, n),
        B = I.intl.formatToPlainString(I.t.KRe1Fk, { name: k });
    return (0, i.jsx)(d.f5, {
        value: P,
        children: (0, i.jsx)(u.of, {
            value: L,
            openedAt: T,
            fetchStartedAt: D?.fetchStartedAt,
            fetchEndedAt: D?.fetchEndedAt,
            isLoaded: D?.isLoaded,
            children: (0, i.jsx)(l.EOs, {
                "data-migration-pending": !0,
                transitionState: y,
                className: b.zr,
                "aria-label": B,
                parentComponent: "RestrictedUserProfileModalV2",
                children: (0, i.jsxs)(g.A, {
                    user: n,
                    displayProfile: D,
                    themeType: x.d.MODAL_V2,
                    children: [
                        (0, i.jsx)("div", { className: b.Tp }),
                        (0, i.jsxs)("div", {
                            className: b.Qs,
                            children: [
                                (0, i.jsx)(A.A, { user: n, guildId: C }),
                                (0, i.jsxs)("div", {
                                    className: b.FS,
                                    children: [
                                        (0, i.jsx)(l.Heading, {
                                            variant: "heading-xl/bold",
                                            color: "text-default",
                                            children: I.intl.string(I.t.b33pLD),
                                        }),
                                        (0, i.jsx)(l.Text, {
                                            variant: "text-md/medium",
                                            color: "text-default",
                                            children: I.intl.format(R ? I.t.T7QiLn : I.t.MnEowy, { username: k }),
                                        }),
                                    ],
                                }),
                                (0, i.jsx)("div", {
                                    className: b.vb,
                                    children: O.map((e, n) => {
                                        let { icon: t, description: a } = e;
                                        return (0, i.jsx)(
                                            s.PQ,
                                            {
                                                icon: t,
                                                title: a,
                                                titleVariant: "text-md/normal",
                                                color: l.LU0.colors.TEXT_DEFAULT.css,
                                            },
                                            n,
                                        );
                                    }),
                                }),
                                (0, i.jsxs)(l.BJc, {
                                    align: "center",
                                    children: [
                                        (0, i.jsx)(h.A, {
                                            size: "md",
                                            isBlocked: R,
                                            onClick: () => {
                                                S(),
                                                    (0, _.Wn)({
                                                        action: R ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
                                                        analyticsLocations: P,
                                                        ...L,
                                                    });
                                            },
                                        }),
                                        (0, i.jsx)(f.A, {
                                            userId: n.id,
                                            onClick: () => {
                                                S(),
                                                    (0, _.Wn)({
                                                        action: "DONT_SHOW_AGAIN_IGNORED_PROFILE",
                                                        analyticsLocations: P,
                                                        ...L,
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
