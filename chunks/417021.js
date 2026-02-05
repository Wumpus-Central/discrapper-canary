n.d(t, { A: () => N });
var i = n(627968),
    s = n(311907),
    l = n(397927),
    a = n(793574),
    r = n(688810),
    d = n(632738),
    o = n(994500),
    c = n(562153),
    u = n(183555),
    A = n(672385),
    x = n(950191),
    m = n(249790),
    p = n(946356),
    h = n(254828),
    f = n(783123),
    g = n(652215),
    I = n(996988),
    j = n(985018),
    _ = n(599929);
function N(e) {
    let {
            user: t,
            guildId: n,
            channelId: N,
            messageId: v,
            roleId: b,
            transitionState: T,
            openedAt: E,
            onHide: y,
            sourceAnalyticsLocations: C = [],
        } = e,
        P = n === g.ME ? void 0 : n,
        L = (0, s.bG)([o.A], () => o.A.isBlocked(t.id)),
        { analyticsLocations: S } = (0, r.Ay)([...C, L ? a.A.BLOCKED_PROFILE_MODAL : a.A.IGNORED_PROFILE_MODAL]),
        O = (0, u.pb)({
            layout: "MODAL_V2",
            userId: t.id,
            showGuildProfile: !0,
            guildId: P,
            channelId: N,
            messageId: v,
            roleId: b,
        }),
        R = [
            { icon: l.yr3, description: j.intl.string(j.t.kcuWva) },
            { icon: l.yr3, description: j.intl.string(L ? j.t.QxrDY1 : j.t.W6fjkS) },
        ],
        D = (0, x.Ay)(t.id, P),
        M = c.Ay.getName(D?.guildId, N, t),
        G = j.intl.formatToPlainString(j.t.KRe1Fk, { name: M });
    return (0, i.jsx)(r.f5, {
        value: S,
        children: (0, i.jsx)(u.of, {
            value: O,
            openedAt: E,
            fetchStartedAt: D?.fetchStartedAt,
            fetchEndedAt: D?.fetchEndedAt,
            isLoaded: D?.isLoaded,
            children: (0, i.jsx)(l.EOs, {
                "data-migration-pending": !0,
                transitionState: T,
                className: _.zr,
                "aria-label": G,
                parentComponent: "RestrictedUserProfileModalV2",
                children: (0, i.jsxs)(p.A, {
                    user: t,
                    displayProfile: D,
                    themeType: I.d.MODAL_V2,
                    children: [
                        (0, i.jsx)("div", { className: _.Tp }),
                        (0, i.jsxs)("div", {
                            className: _.Qs,
                            children: [
                                (0, i.jsx)(m.A, { user: t, guildId: P }),
                                (0, i.jsxs)("div", {
                                    className: _.FS,
                                    children: [
                                        (0, i.jsx)(l.Heading, {
                                            variant: "heading-xl/bold",
                                            color: "text-default",
                                            children: j.intl.string(j.t.b33pLD),
                                        }),
                                        (0, i.jsx)(l.Text, {
                                            variant: "text-md/medium",
                                            color: "text-default",
                                            children: j.intl.format(L ? j.t.T7QiLn : j.t.MnEowy, { username: M }),
                                        }),
                                    ],
                                }),
                                (0, i.jsx)("div", {
                                    className: _.vb,
                                    children: R.map((e, t) => {
                                        let { icon: n, description: s } = e;
                                        return (0, i.jsx)(
                                            d.PQ,
                                            {
                                                icon: n,
                                                title: s,
                                                titleVariant: "text-md/normal",
                                                color: l.LU0.colors.TEXT_DEFAULT.css,
                                            },
                                            t,
                                        );
                                    }),
                                }),
                                (0, i.jsxs)(l.BJc, {
                                    align: "center",
                                    children: [
                                        (0, i.jsx)(f.A, {
                                            size: "md",
                                            isBlocked: L,
                                            onClick: () => {
                                                y(),
                                                    (0, A.Wn)({
                                                        action: L ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
                                                        analyticsLocations: S,
                                                        ...O,
                                                    });
                                            },
                                        }),
                                        (0, i.jsx)(h.A, {
                                            userId: t.id,
                                            onClick: () => {
                                                y(),
                                                    (0, A.Wn)({
                                                        action: "DONT_SHOW_AGAIN_IGNORED_PROFILE",
                                                        analyticsLocations: S,
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
