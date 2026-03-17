t.d(n, { A: () => b });
var i = t(627968),
    s = t(311907),
    l = t(397927),
    a = t(793574),
    r = t(688810),
    o = t(632738),
    d = t(994500),
    c = t(562153),
    u = t(183555),
    m = t(672385),
    x = t(950191),
    A = t(249790),
    p = t(946356),
    _ = t(254828),
    f = t(783123),
    h = t(652215),
    g = t(996988),
    j = t(985018),
    I = t(599929);
function b(e) {
    let {
            user: n,
            guildId: t,
            channelId: b,
            messageId: v,
            roleId: N,
            transitionState: y,
            onHide: C,
            sourceAnalyticsLocations: T = [],
        } = e,
        E = t === h.ME ? void 0 : t,
        L = (0, s.bG)([d.A], () => d.A.isBlocked(n.id)),
        { analyticsLocations: P } = (0, r.Ay)([...T, L ? a.A.BLOCKED_PROFILE_MODAL : a.A.IGNORED_PROFILE_MODAL]),
        R = (0, u.pb)({ layout: "MODAL_V2", userId: n.id, guildId: E, channelId: b, messageId: v, roleId: N }),
        O = [
            { icon: l.yr3, description: j.intl.string(j.t.kcuWva) },
            { icon: l.yr3, description: j.intl.string(L ? j.t.QxrDY1 : j.t.W6fjkS) },
        ],
        S = (0, x.Ay)(n.id, E),
        M = c.Ay.getName(S?.guildId, b, n),
        G = j.intl.formatToPlainString(j.t.KRe1Fk, { name: M });
    return (0, i.jsx)(r.f5, {
        value: P,
        children: (0, i.jsx)(u.of, {
            value: R,
            isLoaded: S?.isLoaded,
            children: (0, i.jsx)(l.EOs, {
                "data-migration-pending": !0,
                transitionState: y,
                className: I.zr,
                "aria-label": G,
                parentComponent: "RestrictedUserProfileModalV2",
                children: (0, i.jsxs)(p.A, {
                    user: n,
                    displayProfile: S,
                    themeType: g.d.MODAL_V2,
                    children: [
                        (0, i.jsx)("div", { className: I.Tp }),
                        (0, i.jsxs)("div", {
                            className: I.Qs,
                            children: [
                                (0, i.jsx)(A.A, { user: n, guildId: E }),
                                (0, i.jsxs)("div", {
                                    className: I.FS,
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
                                    className: I.vb,
                                    children: O.map((e, n) => {
                                        let { icon: t, description: s } = e;
                                        return (0, i.jsx)(
                                            o.PQ,
                                            {
                                                icon: t,
                                                title: s,
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
                                        (0, i.jsx)(f.A, {
                                            size: "md",
                                            isBlocked: L,
                                            onClick: () => {
                                                C(),
                                                    (0, m.Wn)({
                                                        action: L ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
                                                        analyticsLocations: P,
                                                        ...R,
                                                    });
                                            },
                                        }),
                                        (0, i.jsx)(_.A, {
                                            userId: n.id,
                                            onClick: () => {
                                                C(),
                                                    (0, m.Wn)({
                                                        action: "DONT_SHOW_AGAIN_IGNORED_PROFILE",
                                                        analyticsLocations: P,
                                                        ...R,
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
