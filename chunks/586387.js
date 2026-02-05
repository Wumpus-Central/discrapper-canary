n.d(t, { Ay: () => k });
var l = n(627968);
n(64700);
var r = n(503698),
    a = n.n(r),
    i = n(417597),
    s = n(990078),
    o = n(397927),
    E = n(308528),
    u = n(688810),
    c = n(316031),
    _ = n(991982),
    d = n(838111),
    g = n(351001),
    A = n(504049),
    T = n(534400),
    I = n(961350),
    N = n(696451),
    h = n(71393),
    m = n(576705),
    S = n(290863),
    G = n(461213),
    O = n(287809),
    C = n(957565),
    R = n(562153),
    L = n(427262),
    D = n(743981),
    f = n(985018),
    x = n(186891);
function M(e) {
    let { user: t, guildId: n, onClose: r } = e,
        a = t.id,
        s = (0, i.bG)([G.A, S.A, I.default], () => (a === I.default.getId() ? G.A.getStatus() : S.A.getStatus(a, n)), [
            a,
            n,
        ]);
    return (0, l.jsxs)("div", {
        className: x.mY,
        children: [
            (0, l.jsxs)("div", {
                className: x.FD,
                children: [
                    (0, l.jsx)("div", {
                        className: x.Wn,
                        children: (0, l.jsx)(o.euF, {
                            src: t.getAvatarURL(n, 48),
                            "aria-label": t.username,
                            size: o._3J.SIZE_48,
                            status: s,
                        }),
                    }),
                    (0, l.jsxs)("div", {
                        className: x.oS,
                        children: [
                            (0, l.jsxs)("div", {
                                className: x.K$,
                                children: [
                                    (0, l.jsx)(o.Text, {
                                        variant: "text-lg/medium",
                                        children: (0, l.jsx)(o.gyj, {
                                            name: R.Ay.getName(n, null, t),
                                            colorString: o.LU0.colors.TEXT_STRONG.css,
                                            colorStrings: null,
                                        }),
                                    }),
                                    (0, l.jsx)(T.Ay, {
                                        primaryGuild: t?.primaryGuild,
                                        userId: t?.id,
                                        contextGuildId: n,
                                        badgeSize: D.Sl.SIZE_16,
                                        textVariant: "heading-md/semibold",
                                        className: x.Dz,
                                        containerClassName: x.UL,
                                    }),
                                ],
                            }),
                            (0, l.jsx)(o.Text, {
                                variant: "text-md/medium",
                                color: "text-default",
                                children: L.Ay.getUserTag(t),
                            }),
                        ],
                    }),
                ],
            }),
            (0, l.jsx)(o.Text, {
                variant: "text-md/medium",
                color: "text-default",
                children: (0, l.jsx)(o.DUT, {
                    className: x.d4,
                    onClick: r,
                    children: (0, l.jsx)(o.PGe, { size: "md", color: "currentColor" }),
                }),
            }),
        ],
    });
}
function p(e) {
    let { tag: t = "div", text: n, disabled: r, children: i, onClick: E, ...u } = e;
    return (0, l.jsx)(s.m, {
        text: n,
        children: (0, l.jsx)(o.DUT, {
            ...u,
            tag: t,
            "aria-label": n,
            className: a()(x.YB, { [x.aA]: r }),
            onClick: r ? void 0 : E,
            children: (0, l.jsx)("div", { className: x.MU, children: i }),
        }),
    });
}
function U(e) {
    let { user: t, member: r, guildId: a, moderatorReportId: s } = e,
        T = (0, i.bG)([h.A], () => h.A.getGuild(a)),
        {
            canKickUser: N,
            canBanUser: S,
            canModerateMembers: G,
        } = (0, i.cf)(
            [m.A, O.default, h.A],
            () => ({
                canKickUser: (0, g.L7)(t, T),
                canBanUser: (0, g.EZ)(t, T),
                canModerateMembers: null != T && (0, d.b)(T.id, t.id, [O.default, h.A, m.A]),
            }),
            [t, T],
        ),
        R = (0, c.Z)(r),
        { analyticsLocations: L, newestAnalyticsLocation: D } = (0, u.Ay)(),
        M = (0, A.$9)(a, { targetUserId: t.id, location: D, locations: L }),
        U = (0, i.bG)([I.default], () => I.default.getId() === t?.id);
    return (0, l.jsxs)("div", {
        className: x.E_,
        children: [
            (0, l.jsx)(p, {
                disabled: U,
                text: f.intl.string(f.t["g33r/P"]),
                onClick: () => {
                    E.A.openPrivateChannel({ recipientIds: t.id });
                },
                children: (0, l.jsx)(o.oyn, { size: "custom", color: "currentColor", width: 24, height: 24 }),
            }),
            (0, l.jsx)(p, {
                disabled: !N,
                text: f.intl.string(f.t["3glT6Z"]),
                onClick: () => {
                    (0, o.mMO)(async () => {
                        let { default: e } = await n.e("40243").then(n.bind(n, 324785));
                        return (n) => (0, l.jsx)(e, { ...n, location: D, guildId: a, user: t, modReportId: s });
                    });
                },
                children: (0, l.jsx)(o.Nxw, {
                    size: "custom",
                    width: 24,
                    height: 24,
                    color: o.LU0.colors.TEXT_DEFAULT.css,
                }),
            }),
            (0, l.jsx)(p, {
                disabled: !S,
                text: f.intl.string(f.t["5MBJ5M"]),
                onClick: () => {
                    (0, o.mMO)(async () => {
                        let { default: e } = await n.e("2504").then(n.bind(n, 333179));
                        return (n) => (0, l.jsx)(e, { ...n, location: D, guildId: a, user: t, modReportId: s });
                    });
                },
                children: (0, l.jsx)(o.wI0, {
                    size: "custom",
                    width: 24,
                    height: 24,
                    color: o.LU0.colors.TEXT_DEFAULT.css,
                }),
            }),
            (0, l.jsx)(p, {
                disabled: !G,
                text: R ? f.intl.string(f.t.N86XcP) : f.intl.string(f.t.kTlLrz),
                onClick: () => {
                    R
                        ? (0, _.Y)({ guildId: r.guildId, userId: r.userId, anaylticsLocations: L })
                        : (0, _.R)({ guildId: r.guildId, userId: r.userId, anaylticsLocations: L, modReportId: s });
                },
                children: (0, l.jsx)(o.gQi, {
                    size: "custom",
                    width: 24,
                    height: 24,
                    color: o.LU0.colors.TEXT_DEFAULT.css,
                }),
            }),
            (0, l.jsx)(p, {
                text: f.intl.string(f.t.IHTjzA),
                onClick: () => {
                    M(A.Nj.COPY_ID), (0, C.C)(t.id);
                },
                disabled: !C.p5,
                children: (0, l.jsx)(o.L9S, {
                    size: "custom",
                    width: 24,
                    height: 24,
                    color: o.LU0.colors.TEXT_DEFAULT.css,
                }),
            }),
        ],
    });
}
function k(e) {
    let { userId: t, guildId: n, onClose: r, moderatorReportId: a } = e,
        s = (0, i.bG)([O.default], () => O.default.getUser(t), [t]),
        o = (0, i.bG)([N.Ay], () => N.Ay.getMember(n, t), [n, t]);
    return null == s || null == o
        ? null
        : (0, l.jsxs)("div", {
              className: x.kL,
              children: [
                  (0, l.jsx)(M, { user: s, guildId: n, onClose: r }),
                  (0, l.jsx)(U, { user: s, member: o, guildId: n, moderatorReportId: a }),
              ],
          });
}
