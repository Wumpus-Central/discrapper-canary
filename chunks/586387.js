n.d(t, { Ay: () => W });
var l = n(627968);
n(64700);
var a = n(503698),
    r = n.n(a),
    i = n(417597),
    s = n(990078),
    E = n(97808),
    _ = n(778712),
    u = n(834730),
    o = n(463930),
    c = n(827734),
    d = n(939249),
    A = n(789645),
    g = n(534890),
    T = n(192308),
    I = n(905499),
    N = n(215026),
    G = n(60270),
    m = n(473935),
    O = n(308528),
    S = n(688810),
    R = n(316031),
    D = n(991982),
    h = n(838111),
    L = n(351001),
    C = n(504049),
    M = n(534400),
    f = n(961350),
    x = n(696451),
    U = n(71393),
    p = n(576705),
    b = n(290863),
    F = n(461213),
    k = n(287809),
    P = n(957565),
    j = n(562153),
    v = n(427262),
    X = n(743981),
    y = n(985018),
    B = n(637498);
function V(e) {
    let { user: t, guildId: n, onClose: a } = e,
        r = t.id,
        s = (0, i.bG)([F.A, b.A, f.default], () => (r === f.default.getId() ? F.A.getStatus() : b.A.getStatus(r, n)), [
            r,
            n,
        ]);
    return (0, l.jsxs)("div", {
        className: B.mY,
        children: [
            (0, l.jsxs)("div", {
                className: B.FD,
                children: [
                    (0, l.jsx)("div", {
                        className: B.Wn,
                        children: (0, l.jsx)(E.eu, {
                            src: t.getAvatarURL(n, 48),
                            "aria-label": t.username,
                            size: _._3.SIZE_48,
                            status: s,
                        }),
                    }),
                    (0, l.jsxs)("div", {
                        className: B.oS,
                        children: [
                            (0, l.jsxs)("div", {
                                className: B.K$,
                                children: [
                                    (0, l.jsx)(u.E, {
                                        variant: "text-lg/medium",
                                        children: (0, l.jsx)(o.g, {
                                            name: j.Ay.getName(n, null, t),
                                            colorString: c.A.colors.TEXT_STRONG.css,
                                            colorStrings: null,
                                        }),
                                    }),
                                    (0, l.jsx)(M.Ay, {
                                        primaryGuild: t?.primaryGuild,
                                        userId: t?.id,
                                        contextGuildId: n,
                                        badgeSize: X.Sl.SIZE_16,
                                        textVariant: "heading-md/semibold",
                                        className: B.Dz,
                                        containerClassName: B.UL,
                                    }),
                                ],
                            }),
                            (0, l.jsx)(u.E, {
                                variant: "text-md/medium",
                                color: "text-default",
                                children: v.Ay.getUserTag(t),
                            }),
                        ],
                    }),
                ],
            }),
            (0, l.jsx)(u.E, {
                variant: "text-md/medium",
                color: "text-default",
                children: (0, l.jsx)(d.D, {
                    className: B.d4,
                    onClick: a,
                    children: (0, l.jsx)(A.P, { size: "md", color: "currentColor" }),
                }),
            }),
        ],
    });
}
function H(e) {
    let { tag: t = "div", text: n, disabled: a, children: i, onClick: E, ..._ } = e;
    return (0, l.jsx)(s.m, {
        text: n,
        children: (0, l.jsx)(d.D, {
            ..._,
            tag: t,
            "aria-label": n,
            className: r()(B.YB, { [B.aA]: a }),
            onClick: a ? void 0 : E,
            children: (0, l.jsx)("div", { className: B.MU, children: i }),
        }),
    });
}
function w(e) {
    let { user: t, member: a, guildId: r, moderatorReportId: s } = e,
        E = (0, i.bG)([U.A], () => U.A.getGuild(r)),
        {
            canKickUser: _,
            canBanUser: u,
            canModerateMembers: o,
        } = (0, i.cf)(
            [p.A, k.default, U.A],
            () => ({
                canKickUser: (0, L.L7)(t, E),
                canBanUser: (0, L.EZ)(t, E),
                canModerateMembers: null != E && (0, h.b)(E.id, t.id, [k.default, U.A, p.A]),
            }),
            [t, E],
        ),
        d = (0, R.Z)(a),
        { analyticsLocations: A, newestAnalyticsLocation: M } = (0, S.Ay)(),
        x = (0, C.$9)(r, { targetUserId: t.id, location: M, locations: A }),
        b = (0, i.bG)([f.default], () => f.default.getId() === t?.id);
    return (0, l.jsxs)("div", {
        className: B.E_,
        children: [
            (0, l.jsx)(H, {
                disabled: b,
                text: y.intl.string(y.t["g33r/P"]),
                onClick: () => {
                    O.A.openPrivateChannel({ recipientIds: t.id });
                },
                children: (0, l.jsx)(g.o, { size: "custom", color: "currentColor", width: 24, height: 24 }),
            }),
            (0, l.jsx)(H, {
                disabled: !_,
                text: y.intl.string(y.t["3glT6Z"]),
                onClick: () => {
                    (0, T.openModalLazy)(async () => {
                        let { default: e } = await n.e("40243").then(n.bind(n, 324785));
                        return (n) => (0, l.jsx)(e, { ...n, location: M, guildId: r, user: t, modReportId: s });
                    });
                },
                children: (0, l.jsx)(I.N, {
                    size: "custom",
                    width: 24,
                    height: 24,
                    color: c.A.colors.TEXT_DEFAULT.css,
                }),
            }),
            (0, l.jsx)(H, {
                disabled: !u,
                text: y.intl.string(y.t["5MBJ5M"]),
                onClick: () => {
                    (0, T.openModalLazy)(async () => {
                        let { default: e } = await n.e("2504").then(n.bind(n, 333179));
                        return (n) => (0, l.jsx)(e, { ...n, location: M, guildId: r, user: t, modReportId: s });
                    });
                },
                children: (0, l.jsx)(N.w, {
                    size: "custom",
                    width: 24,
                    height: 24,
                    color: c.A.colors.TEXT_DEFAULT.css,
                }),
            }),
            (0, l.jsx)(H, {
                disabled: !o,
                text: d ? y.intl.string(y.t.N86XcP) : y.intl.string(y.t.kTlLrz),
                onClick: () => {
                    d
                        ? (0, D.Y)({ guildId: a.guildId, userId: a.userId, anaylticsLocations: A })
                        : (0, D.R)({ guildId: a.guildId, userId: a.userId, anaylticsLocations: A, modReportId: s });
                },
                children: (0, l.jsx)(G.g, {
                    size: "custom",
                    width: 24,
                    height: 24,
                    color: c.A.colors.TEXT_DEFAULT.css,
                }),
            }),
            (0, l.jsx)(H, {
                text: y.intl.string(y.t.IHTjzA),
                onClick: () => {
                    x(C.Nj.COPY_ID), (0, P.C)(t.id);
                },
                disabled: !P.p5,
                children: (0, l.jsx)(m.L, {
                    size: "custom",
                    width: 24,
                    height: 24,
                    color: c.A.colors.TEXT_DEFAULT.css,
                }),
            }),
        ],
    });
}
function W(e) {
    let { userId: t, guildId: n, onClose: a, moderatorReportId: r } = e,
        s = (0, i.bG)([k.default], () => k.default.getUser(t), [t]),
        E = (0, i.bG)([x.Ay], () => x.Ay.getMember(n, t), [n, t]);
    return null == s || null == E
        ? null
        : (0, l.jsxs)("div", {
              className: B.kL,
              children: [
                  (0, l.jsx)(V, { user: s, guildId: n, onClose: a }),
                  (0, l.jsx)(w, { user: s, member: E, guildId: n, moderatorReportId: r }),
              ],
          });
}
